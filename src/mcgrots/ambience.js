// G7k — the ambient bed under the ten-minute visit's silence. § 9's kill
// criterion is one ten-minute visit; 386 of those 600 seconds are silence and
// this game shipped no ambient audio at all before this unit.
//
// PURE WEBAUDIO SYNTHESIS, ZERO AUDIO ASSETS — the design decision, not this
// module's to revisit. Roadmap § 12.1 parks the soundtrack idea on "what
// generates it, and does the licence permit shipping" — synthesising in the
// browser sidesteps that: nothing generated, nothing to licence, nothing
// shipped as a file. `src/ambience.js` (the paused street's own module) is
// WebAudio-only for the same reason and is this module's precedent, read but
// not imported and not edited — the street is paused.
//
// NO AudioContext BEFORE A USER GESTURE, same rule as audio.js: nothing here
// constructs one at import time or at module scope. start() is called from
// the SAME title-card gesture that starts readerAudio, in main.js — see
// audio.js's header for why that gesture is not this module's to duplicate.
//
// DETERMINISTIC EVENT SCHEDULE. `EVENTS` below is authored data, the same
// shape as visit.js's `CUES` — a pure function of the wall clock via
// `eventWindowAt(now)`, wrapped over `CYCLE_S`. No PRNG: a hand-authored
// table of four events is simpler than a seeded generator and carries the
// same guarantee (AGENTS.md's invariant — a feature needing randomness owns
// its own generator — is moot here because nothing draws one). The bed's
// continuous layers (rumble, mid band) are not randomised either. `CYCLE_S`
// is this module's own clock, unrelated to visit.js's 600.7s cue cycle — the
// bed does not know what cue is playing, only whether a voice is (see
// setDucked below).
//
// THE GULL IS THE PROMINENT EVENT, DELIBERATELY (Dan, ideation session
// 2026-08-17, docs/g7-ideas.md § D2): "a gull cry carries a silence on its
// own" and reads as a cheaper "something you notice" than anything the dog
// can be made to do. Its gain (1.8) is comfortably louder than the continuous
// bed's own peak and more than seven times any other discrete event's gain,
// and it is the only one with its own echo tap — see playGull.
// D2's other instruction is structural: a second audio module competing with
// this one is exactly the failure audio.js's one-voice rule exists to
// prevent, so the gull lives here, not in a module of its own.
//
// DUCKS, NEVER SILENCES, WHILE A VOICE PLAYS. main.js calls setDucked(bool)
// every frame from the same `info.phase === 'reading'` signal that already
// drives readerAudio's own playback (frame()'s existing `info` value) — this
// module never reads rota.js or visit.js itself, so it cannot disagree with
// them about who is reading.

const MASTER_GAIN = 0.14; // low — a bed, not a soundtrack; readings must win every comparison
const DUCK_GAIN = 0.42;   // ~42% while a voice plays
const DUCK_RAMP = 0.6;    // seconds, matches the street ambience's own ramp

const CYCLE_S = 54;
// type, start-of-window (s into the cycle), window length, peak gain. Only
// `gull` has DELAY_MIX > 0 (see playGull) — the "more presence" instruction.
const EVENTS = [
  { type: 'dog', at: 6.4, dur: 1.6, gain: 0.16 },
  { type: 'gull', at: 19.8, dur: 2.6, gain: 1.8 },
  { type: 'door', at: 33.1, dur: 1.2, gain: 0.12 },
  { type: 'tram', at: 44.6, dur: 2.2, gain: 0.26 },
];

function wrap(t) {
  return ((t % CYCLE_S) + CYCLE_S) % CYCLE_S;
}

// PURE. No ctx, no side effects — callable from the gate suite with no audio
// booted at all, and this is the whole determinism claim: the same `now`
// always returns the same event, forever, independent of session history.
export function eventWindowAt(now) {
  const cycleIndex = Math.floor(now / CYCLE_S);
  const t = wrap(now);
  for (const ev of EVENTS) {
    if (t >= ev.at && t < ev.at + ev.dur) {
      return { type: ev.type, gain: ev.gain, cycleIndex, elapsed: t - ev.at };
    }
  }
  return null;
}

export function createAmbience() {
  let ctx = null;
  let master = null;
  let duckTarget = null; // GainNode the duck ramp actually drives — see start()
  let started = false;
  let ducked = false;
  let duckingEnabled = true; // the gate's named control for check 2
  let lastEventKey = null; // dedupe: fires once per cycle-index+type, not once per frame

  function start() {
    if (started) return;
    started = true;
    const Ctor = window.AudioContext || window.webkitAudioContext;
    if (!Ctor) return; // no WebAudio support — silently does nothing, same as audio.js's missing-file path
    ctx = new Ctor();
    master = ctx.createGain();
    master.gain.value = MASTER_GAIN;
    master.connect(ctx.destination);
    duckTarget = master;

    buildRumble(ctx, master);
    buildMidBed(ctx, master);
  }

  function applyDuck() {
    if (!ctx || !duckTarget) return;
    const target = (ducked && duckingEnabled ? DUCK_GAIN : 1) * MASTER_GAIN;
    const now = ctx.currentTime;
    duckTarget.gain.cancelScheduledValues(now);
    duckTarget.gain.setValueAtTime(duckTarget.gain.value, now);
    duckTarget.gain.linearRampToValueAtTime(target, now + DUCK_RAMP);
  }

  // Called every frame with whether a voice is CURRENTLY playing (main.js's
  // `info?.phase === 'reading'`) — not with the cue's kind, so this module
  // never has to know the difference between a reading and a complaint.
  function setDucked(v) {
    const next = !!v;
    if (next === ducked) return;
    ducked = next;
    applyDuck();
  }

  // The gate's named control for check 2: with ducking disabled, `setDucked`
  // still records state but `applyDuck` no longer moves the gain, so the
  // ducked and un-ducked cases become indistinguishable — exactly what check
  // 2's control requires.
  function setDuckingEnabled(v) {
    duckingEnabled = !!v;
    applyDuck();
  }

  // Drives the discrete events off the wall clock — same clock main.js
  // already reads for the rota/visit. `now` is not stored; a fresh
  // eventWindowAt(now) is computed every call, so a clock jump (a scripted
  // moment, a pinned gate clock) lands correctly without special-casing "the
  // clock moved" the way audio.js's F14 fix had to for a different reason.
  function update(now) {
    if (!ctx || !master) return; // no gesture yet
    const ev = eventWindowAt(now);
    const key = ev ? `${ev.cycleIndex}:${ev.type}` : null;
    if (key && key !== lastEventKey) {
      triggerEvent(ctx, master, ev.type, ev.gain);
    }
    lastEventKey = key;
  }

  return {
    start, update, setDucked, setDuckingEnabled,
    get started() { return ctx !== null; },
    isDucked: () => ducked,
    get duckingEnabled() { return duckingEnabled; },
    get gainValue() { return duckTarget ? duckTarget.gain.value : null; }, // raw AudioParam read, for the ducking gate — bypasses RMS/rendering-load noise entirely
    eventAt: (t) => eventWindowAt(t), // pure re-export, same shape as main.js's rota/visit debug handles
    cycleSeconds: () => CYCLE_S,
  };
}

// --- Rumble: two detuned low oscillators through a lowpass, cutoff wobbling
// slowly — "the city underneath" ------------------------------------------

function buildRumble(ctx, dest) {
  const gain = ctx.createGain();
  gain.gain.value = 0.35;
  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 140;
  filter.Q.value = 0.6;
  gain.connect(filter).connect(dest);

  for (const f of [42, 42.4]) { // slight detune -> slow beating
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = f;
    osc.connect(gain);
    osc.start();
  }

  // Slow cutoff wobble — "slowly modulated" per the brief, not a fixed drone.
  const lfo = ctx.createOscillator();
  lfo.type = 'sine';
  lfo.frequency.value = 0.045; // ~22s cycle
  const lfoGain = ctx.createGain();
  lfoGain.gain.value = 40; // Hz of cutoff swing
  lfo.connect(lfoGain).connect(filter.frequency);
  lfo.start();
}

// --- Mid band: bandpass-filtered noise loop — gives the bed "somewhere to
// sit" between the rumble and the discrete events -------------------------

function buildMidBed(ctx, dest) {
  const noise = ctx.createBufferSource();
  noise.buffer = makeNoiseBuffer(ctx, 4);
  noise.loop = true;

  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.value = 650;
  filter.Q.value = 0.5;

  const gain = ctx.createGain();
  gain.gain.value = 0.10;

  noise.connect(filter).connect(gain).connect(dest);
  noise.start();
}

// --- Discrete events --------------------------------------------------------

function triggerEvent(ctx, dest, type, gain) {
  if (type === 'gull') return playGull(ctx, dest, gain);
  if (type === 'tram') return playTramSqueal(ctx, dest, gain);
  if (type === 'door') return playDoor(ctx, dest, gain);
  if (type === 'dog') return playDog(ctx, dest, gain);
}

// THE PROMINENT ONE — see the module header. A pitch-swept cry through a
// bandpass filter, louder than every other event and the only one carrying
// its own single-tap echo (DELAY_MIX), so it reads as present and close
// rather than one more texture layer.
function playGull(ctx, dest, gain) {
  const dur = 0.9;
  const now = ctx.currentTime;

  const osc = ctx.createOscillator();
  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(900, now);
  osc.frequency.exponentialRampToValueAtTime(1900, now + dur * 0.35); // "kee—"
  osc.frequency.exponentialRampToValueAtTime(700, now + dur);          // "—yaa"

  // Q kept LOW (wide passband) deliberately — measured with Q=3, the filter
  // rejected enough of the 700-1900Hz sweep's own energy that the gull's
  // peak came out no louder than the continuous bed's, defeating the whole
  // "more presence" instruction. 1.1 widens the passband so the sweep
  // survives it instead of being carved down before the envelope even runs.
  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.value = 1400;
  filter.Q.value = 1.1;

  const env = ctx.createGain();
  env.gain.setValueAtTime(0, now);
  env.gain.linearRampToValueAtTime(gain, now + 0.05);
  env.gain.exponentialRampToValueAtTime(0.001, now + dur);

  // No stereo panner — measured as a second, smaller loss on top of the
  // filter's: an equal-power pan redistributes L/R, and this analyser reads
  // a down-mixed signal, so panning bought presence nowhere and cost gain
  // everywhere. Mono keeps the loudness gain and effort-appropriate for a
  // one-shot event that already carries its own echo tap below.
  const delay = ctx.createDelay();
  delay.delayTime.value = 0.16;
  const delayGain = ctx.createGain();
  delayGain.gain.value = 0.3; // single tap, no feedback loop — an echo, not a repeat

  const dry = osc.connect(filter).connect(env);
  dry.connect(dest);
  dry.connect(delay).connect(delayGain).connect(dest);

  osc.start(now);
  osc.stop(now + dur + 0.05);
}

function playTramSqueal(ctx, dest, gain) {
  const dur = 1.4;
  const now = ctx.currentTime;
  const noise = ctx.createBufferSource();
  noise.buffer = makeNoiseBuffer(ctx, dur);

  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.Q.value = 6;
  filter.frequency.setValueAtTime(1800, now);
  filter.frequency.linearRampToValueAtTime(3200, now + dur * 0.6);
  filter.frequency.linearRampToValueAtTime(1200, now + dur);

  const env = ctx.createGain();
  env.gain.setValueAtTime(0, now);
  env.gain.linearRampToValueAtTime(gain, now + 0.1);
  env.gain.exponentialRampToValueAtTime(0.001, now + dur);

  noise.connect(filter).connect(env).connect(dest);
  noise.start(now);
  noise.stop(now + dur + 0.02);
}

function playDoor(ctx, dest, gain) {
  const dur = 0.35;
  const now = ctx.currentTime;
  const noise = ctx.createBufferSource();
  noise.buffer = makeNoiseBuffer(ctx, dur);

  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 500;

  const env = ctx.createGain();
  env.gain.setValueAtTime(gain, now);
  env.gain.exponentialRampToValueAtTime(0.001, now + dur);

  noise.connect(filter).connect(env).connect(dest);
  noise.start(now);
  noise.stop(now + dur + 0.02);
}

function playDog(ctx, dest, gain) {
  const now = ctx.currentTime;
  const barkAt = [0, 0.22, 0.46]; // three short pulses
  for (const t0 of barkAt) {
    const dur = 0.12;
    const osc = ctx.createOscillator();
    osc.type = 'square';
    osc.frequency.setValueAtTime(320, now + t0);
    osc.frequency.exponentialRampToValueAtTime(180, now + t0 + dur);

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 900;

    const env = ctx.createGain();
    env.gain.setValueAtTime(gain, now + t0);
    env.gain.exponentialRampToValueAtTime(0.001, now + t0 + dur);

    osc.connect(filter).connect(env).connect(dest);
    osc.start(now + t0);
    osc.stop(now + t0 + dur + 0.02);
  }
}

// --- Shared noise-buffer generator, same shape as the street's own
// makeNoiseBuffer (read, not imported — src/ambience.js is the paused
// street's) ------------------------------------------------------------------

function makeNoiseBuffer(ctx, seconds) {
  const length = Math.max(1, Math.floor(ctx.sampleRate * seconds));
  const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < length; i++) data[i] = Math.random() * 2 - 1;
  return buffer;
}
