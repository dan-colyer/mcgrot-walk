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
//   setOverlayOpen(bool)   – freeze auto-management while a comic is open
//   setEnabled(bool) / resume() – gate behind the title-card gesture
//
// Vendors whose MP3 hasn't been generated yet (the free-tier trickle) simply
// stay silent — their buffer loads as 'missing' and never plays.

import * as THREE from 'three';
import { assetUrl } from './assets.js';

const PLAY_RANGE = 18;   // start a voice within this many metres
const STOP_RANGE = 23;   // ...and stop it once beyond this (hysteresis)
const MAX_VOICES = 6;    // concurrent positional sources
const REF_DISTANCE = 2.5;
const MAX_DISTANCE = 22;
const ROLLOFF = 1.4;     // inverse model — steepish, busker-like falloff

export function createProximityAudio({ camera, npcs, assets, onActiveChange }) {
  const listener = new THREE.AudioListener();
  camera.add(listener);
  const loader = new THREE.AudioLoader();
  const buffers = new Map(); // audio path -> AudioBuffer | 'loading' | 'missing'

  let enabled = false;
  let overlayOpen = false;
  let activeCount = 0;

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
    const pa = new THREE.PositionalAudio(listener);
    pa.setRefDistance(REF_DISTANCE);
    pa.setMaxDistance(MAX_DISTANCE);
    pa.setDistanceModel('inverse');
    pa.setRolloffFactor(ROLLOFF);
    pa.setLoop(true);
    npc.group.add(pa);
    npc.voice = pa;
    return pa;
  }

  function play(npc, fromZero) {
    const path = npc.comic.audio;
    if (!path) return;
    loadBuffer(path, (buf) => {
      const pa = ensureVoice(npc);
      if (pa.buffer !== buf) pa.setBuffer(buf);
      if (pa.isPlaying) {
        if (!fromZero) return;
        pa.stop();
      }
      // Busker effect: enter mid-reading unless we're restarting from the top.
      pa.offset = fromZero ? 0 : Math.random() * Math.max(0, buf.duration - 3);
      pa.play();
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

  function update() {
    if (!enabled || overlayOpen) return;

    const cp = camera.position;
    const inRange = [];
    for (const npc of npcs) {
      if (!npc.comic.audio) continue;
      const g = npc.group.position;
      const d = Math.hypot(cp.x - g.x, cp.z - g.z);
      if (d < STOP_RANGE) inRange.push({ npc, d });
    }
    inRange.sort((a, b) => a.d - b.d);

    // Nearest up to MAX_VOICES, with hysteresis: a playing voice is kept until
    // it passes STOP_RANGE; a new one only starts inside PLAY_RANGE.
    const target = new Set();
    for (const { npc, d } of inRange) {
      if (target.size >= MAX_VOICES) break;
      const playing = npc.voice && npc.voice.isPlaying;
      if (d < PLAY_RANGE || (playing && d < STOP_RANGE)) target.add(npc);
    }

    for (const npc of npcs) {
      const playing = npc.voice && npc.voice.isPlaying;
      if (playing && !target.has(npc)) stop(npc);
    }
    for (const npc of target) {
      if (!(npc.voice && npc.voice.isPlaying)) play(npc, false);
    }
    reportActive();
  }

  return {
    listener,
    update,
    restart(npc) {
      play(npc, true);
      reportActive();
    },
    togglePause(npc) {
      const pa = npc.voice;
      if (!pa || !pa.buffer) { play(npc, true); return true; }
      if (pa.isPlaying) { pa.pause(); npc.setSpeaking(false); reportActive(); return false; }
      pa.play(); npc.setSpeaking(true); reportActive(); return true;
    },
    setOverlayOpen(v) { overlayOpen = !!v; },
    isEnabled() { return enabled; },
    setEnabled(v) { enabled = !!v; },
    resume() {
      enabled = true;
      const ctx = listener.context;
      if (ctx && ctx.state === 'suspended') ctx.resume();
    },
  };
}
