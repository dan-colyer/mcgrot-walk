// Proximity audio for McGrot Walk — the headline feature.
//
// Every vendor is a busker: as you approach you hear them reading their comic,
// louder up close and fading with distance (3D positional audio), a murmur of
// several voices along the street. To keep it cheap only the nearest few play
// at once (MAX_VOICES). Pressing E restarts that vendor's reading from the top
// and opens the comic overlay.
//
// createProximityAudio({ camera, npcs, assets, onActiveChange }) returns:
//   update()               – per frame; auto start/stop the nearest voices
//   restart(npc)           – play npc from 0 (called by interact on E)
//   togglePause(npc) -> bool – overlay play/pause; returns true if now playing
//   setOverlayOpen(bool)   – freeze auto-management while a comic is open,
//                            and suspend (stop) every other busking voice —
//                            one foreground voice is an enforced invariant,
//                            not an emergent one (E5a item 2)
//   getElapsed(npc) -> sec|null – playback position within the reading, for
//                            interact.js's read-along phrase highlight
//   setEnabled(bool) / resume() – gate behind the title-card gesture
//
// Vendors whose MP3 hasn't been generated yet (the free-tier trickle) simply
// stay silent — their buffer loads as 'missing' and never plays.
//
// E2e.1 item 7: the AudioListener (and the THREE.AudioContext singleton it
// lazily creates via AudioContext.getContext()) is built lazily, inside
// resume() — called from the title-card gesture, same as ambience.js's
// start(). Previously this constructed at boot, well before any gesture;
// Safari on iOS is strict enough about that to block the context outright —
// readers silent, ambience (which DOES start from the gesture) audible.
// main.js's title-card onEnter calls THREE.AudioContext.setContext(ctx)
// before resume() ever runs, so the AudioListener constructed here picks up
// the SAME context ambience.js uses, rather than creating its own.
//
// E5a item 3: joining offset is a per-NPC virtual reading clock, not
// Math.random() — see npcPhase01/todayDaySeed below. E5a item 4: a mutter
// band beyond STOP_RANGE tapers gain and lowpass-filters receding voices
// instead of cutting them dead.

import * as THREE from 'three';
import { assetUrl } from './assets.js';
// hashDateKey doubles as the generic FNV-1a used for the per-NPC phase draw
// below (which hashes a comic id, nothing to do with dates).
import { todaySeed, hashDateKey as hashString } from './day.js';

const PLAY_RANGE = 18;   // start a voice within this many metres
const STOP_RANGE = 23;   // ...full-volume busking ends here (hysteresis)
const MUTTER_STOP_RANGE = 34; // ...and beyond THIS it's cut entirely — the voice-budget hard stop
const MUTTER_MIN_GAIN = 0.08;   // gain remaining at MUTTER_STOP_RANGE (never fully to zero — a murmur, not a vanish)
const MUTTER_CUTOFF_HZ = 380;   // lowpass frequency at MUTTER_STOP_RANGE
const NORMAL_CUTOFF_HZ = 20000; // effectively no filtering inside STOP_RANGE
const MUTTER_SMOOTHING = 0.15;  // setTargetAtTime time constant, avoids zipper noise
const MAX_VOICES = 6;    // concurrent positional sources
const REF_DISTANCE = 2.5;
const MAX_DISTANCE = 22;
const ROLLOFF = 1.4;     // inverse model — steepish, busker-like falloff

// --- E5a item 3: the virtual reading clock ---------------------------------
// A per-NPC start phase seeded by hash32(id, day seed), treating every
// reading as looping continuously since the session began: joining offset is
// (elapsed + phase) % duration. `elapsed` is the SIMULATED clock (the same
// `t` main.js's updaters run on — real elapsed seconds during actual play,
// but fully deterministic and harness-controlled under stepFrame), not
// listener.context.currentTime — the AudioContext's own clock is real-wall-
// time and would make scripts/smoke.mjs's determinism gate (5c) unwinnable:
// two page loads never resolve their async buffer fetches at the same
// AudioContext time even with identical seeds and identical stepFrame
// recipes. `elapsed` keeps ticking whether or not any voice is currently
// playing, which is what gives both roadmap bullets (join mid-read;
// resume-on-return picks up where the clock says it would be) from one
// mechanism. hash32 only — no Math.random() anywhere in this file.
function hash32(a, b) {
  let h = (a * 73856093) ^ (b * 19349663);
  h = Math.imul(h ^ (h >>> 13), 0x85ebca6b);
  h ^= h >>> 16;
  return h >>> 0;
}

// Real calendar day by default, via src/day.js (the single date authority —
// E5c). window.__mcgrotForceDaySeed still overrides it directly: that lever
// exists so scripts/smoke.mjs can assert determinism without waiting for the
// date to turn over (same seed on two loads -> identical offsets, different
// seed -> different ones), and it is deliberately a *seed* override rather
// than a date override so the gate stays independent of date formatting.
function todayDaySeed() {
  if (typeof window !== 'undefined' && window.__mcgrotForceDaySeed != null) {
    return window.__mcgrotForceDaySeed >>> 0;
  }
  return todaySeed();
}

function npcPhase01(npc, daySeed) {
  const idStr = (npc.comic && npc.comic.id) || npc.name || '';
  return (hash32(hashString(idStr), daySeed) % 1000000) / 1000000;
}

export function createProximityAudio({ camera, npcs, assets, onActiveChange }) {
  let listener = null; // constructed in resume(), inside the title-card gesture
  const loader = new THREE.AudioLoader();
  const buffers = new Map(); // audio path -> AudioBuffer | 'loading' | 'missing'

  let enabled = false;
  let overlayOpen = false;
  let activeCount = 0;
  let simTime = 0; // last t passed to update() — see the virtual-clock note above

  function loadBuffer(path, cb) {
    const cached = buffers.get(path);
    if (cached === 'missing' || cached === 'loading') return;
    if (cached) { cb(cached); return; }
    buffers.set(path, 'loading');
    loader.load(
      assetUrl(assets, path),
      (buf) => { buffers.set(path, buf); cb(buf); },
      undefined,
      () => { buffers.set(path, 'missing'); }, // 404 — not generated yet
    );
  }

  function ensureVoice(npc) {
    if (npc.voice) return npc.voice;
    // The listener exists only after resume() (the title-card gesture). Every
    // caller is downstream of that today — update() is gated on `enabled`, and
    // interact.js's restart() needs an overlay the title card is covering — but
    // THREE.PositionalAudio(null) throws, so don't leave that to layout luck.
    if (!listener) return null;
    const pa = new THREE.PositionalAudio(listener);
    pa.setRefDistance(REF_DISTANCE);
    pa.setMaxDistance(MAX_DISTANCE);
    pa.setDistanceModel('inverse');
    pa.setRolloffFactor(ROLLOFF);
    pa.setLoop(true);
    // E5a item 4: a lowpass filter, opened fully by default — applyMutter()
    // closes it as a receding voice crosses into the mutter band. One filter
    // node per voice, created once; per-frame cost is just automating its
    // params, bounded by MAX_VOICES (see update()).
    const lowpass = pa.context.createBiquadFilter();
    lowpass.type = 'lowpass';
    lowpass.frequency.value = NORMAL_CUTOFF_HZ;
    pa.setFilter(lowpass);
    pa._mutterFilter = lowpass;
    npc.group.add(pa);
    npc.voice = pa;
    return pa;
  }

  // Anchors pa's virtual playhead: readStartCtx is the context time playback
  // (re)started, readOffsetAtStart is the buffer position at that moment.
  // getElapsed() below derives position from these rather than reaching into
  // three's own (private, unstable-API) _startedAt/_progress bookkeeping.
  function anchor(pa, offset) {
    pa._readStartCtx = listener.context.currentTime;
    pa._readOffsetAtStart = offset;
  }

  function play(npc, fromZero) {
    const path = npc.comic.audio;
    if (!path) return;
    loadBuffer(path, (buf) => {
      const pa = ensureVoice(npc);
      if (!pa) return;
      if (pa.buffer !== buf) pa.setBuffer(buf);
      if (pa.isPlaying) {
        if (!fromZero) return;
        pa.stop();
      }
      // Busker effect: enter mid-reading unless we're restarting from the
      // top — via the virtual reading clock (E5a item 3), not Math.random().
      const offset = fromZero ? 0 : (simTime + npcPhase01(npc, todayDaySeed()) * buf.duration) % buf.duration;
      pa.offset = offset;
      pa.gain.gain.value = 1;               // fresh voice starts at full presence
      if (pa._mutterFilter) pa._mutterFilter.frequency.value = NORMAL_CUTOFF_HZ;
      pa.play();
      anchor(pa, offset);
      npc.setSpeaking(true);
    });
  }

  function stop(npc) {
    if (npc.voice && npc.voice.isPlaying) {
      npc.voice.stop();
      npc.setSpeaking(false);
    }
  }

  function reportActive() {
    let n = 0;
    for (const npc of npcs) if (npc.voice && npc.voice.isPlaying) n++;
    if (n !== activeCount) {
      activeCount = n;
      if (onActiveChange) onActiveChange(n);
    }
  }

  // E5a item 4: gain taper + lowpass for voices beyond STOP_RANGE, receding
  // to a murmur rather than a hard cut. Only ever called on the current
  // per-frame `target` set (<= MAX_VOICES), so this doesn't scale with the
  // number of NPCs in the scene.
  function applyMutter(npc, d) {
    const pa = npc.voice;
    if (!pa) return;
    const t = d <= STOP_RANGE ? 0 : Math.min(1, (d - STOP_RANGE) / (MUTTER_STOP_RANGE - STOP_RANGE));
    const gain = 1 - (1 - MUTTER_MIN_GAIN) * t;
    const freq = NORMAL_CUTOFF_HZ + (MUTTER_CUTOFF_HZ - NORMAL_CUTOFF_HZ) * t;
    const ctx = pa.context;
    pa.gain.gain.setTargetAtTime(gain, ctx.currentTime, MUTTER_SMOOTHING);
    if (pa._mutterFilter) pa._mutterFilter.frequency.setTargetAtTime(freq, ctx.currentTime, MUTTER_SMOOTHING);
  }

  function update(dt, t) {
    simTime = t || 0;
    if (!enabled || overlayOpen) return;

    const cp = camera.position;
    const inRange = [];
    for (const npc of npcs) {
      if (!npc.comic.audio) continue;
      const g = npc.group.position;
      const d = Math.hypot(cp.x - g.x, cp.z - g.z);
      if (d < MUTTER_STOP_RANGE) inRange.push({ npc, d });
    }
    inRange.sort((a, b) => a.d - b.d);

    // Nearest up to MAX_VOICES, with hysteresis: a playing voice is kept until
    // it passes MUTTER_STOP_RANGE (the mutter band's hard stop); a new one
    // only starts inside PLAY_RANGE.
    const target = new Map(); // npc -> distance, for applyMutter below
    for (const { npc, d } of inRange) {
      if (target.size >= MAX_VOICES) break;
      const playing = npc.voice && npc.voice.isPlaying;
      if (d < PLAY_RANGE || (playing && d < MUTTER_STOP_RANGE)) target.set(npc, d);
    }

    for (const npc of npcs) {
      const playing = npc.voice && npc.voice.isPlaying;
      if (playing && !target.has(npc)) stop(npc);
    }
    for (const [npc] of target) {
      if (!(npc.voice && npc.voice.isPlaying)) play(npc, false);
    }
    for (const [npc, d] of target) applyMutter(npc, d);
    reportActive();
  }

  return {
    get listener() { return listener; },
    update,
    restart(npc) {
      play(npc, true);
      reportActive();
    },
    togglePause(npc) {
      const pa = npc.voice;
      if (!pa || !pa.buffer) { play(npc, true); return true; }
      if (pa.isPlaying) {
        // Freeze the virtual playhead at its current position so a resume
        // continues from here, not from a stale offset.
        const elapsed = getElapsed(npc);
        pa.pause();
        npc.setSpeaking(false);
        reportActive();
        if (elapsed != null) anchor(pa, elapsed);
        return false;
      }
      pa.play();
      anchor(pa, pa._readOffsetAtStart || 0);
      npc.setSpeaking(true);
      reportActive();
      return true;
    },
    setOverlayOpen(v) {
      overlayOpen = !!v;
      // E5a item 2: one foreground voice is an enforced invariant. Stopping
      // every currently-playing voice here (interact.js opens the overlay
      // BEFORE restarting the focused NPC's own reading) means there is
      // never a moment with two voices audible; when the overlay closes,
      // update() resumes normal management and neighbours rejoin fresh via
      // the virtual reading clock above — exactly the "pick up where the
      // clock says it would be" behaviour, not a paused-and-resumed clip.
      if (overlayOpen) {
        for (const npc of npcs) if (npc.voice && npc.voice.isPlaying) stop(npc);
        reportActive();
      }
    },
    // Playback position within the reading, in seconds — null if nothing is
    // loaded/anchored yet. Used by interact.js's read-along phrase highlight.
    getElapsed,
    isEnabled() { return enabled; },
    setEnabled(v) { enabled = !!v; },
    // Called from the title-card gesture (src/main.js's onEnter). Constructs
    // the AudioListener HERE, not at module init — see the file-header note.
    resume() {
      if (!listener) {
        listener = new THREE.AudioListener();
        camera.add(listener);
      }
      enabled = true;
      const ctx = listener.context;
      if (ctx && ctx.state === 'suspended') ctx.resume();
    },
  };

  function getElapsed(npc) {
    const pa = npc && npc.voice;
    if (!pa || !pa.buffer || pa._readStartCtx == null) return null;
    const duration = pa.buffer.duration;
    if (!duration) return 0;
    const raw = pa.isPlaying
      ? (listener.context.currentTime - pa._readStartCtx) + pa._readOffsetAtStart
      : pa._readOffsetAtStart;
    let e = raw % duration;
    if (e < 0) e += duration;
    return e;
  }
}
