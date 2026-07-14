// WebAudio ambience bed for McGrot Walk — a low drone, filtered wind, and a
// crackle burst synced to each catenary arc flash. No audio files: everything
// is synthesised. Master gain is kept low (atmospheric bed, not a soundtrack)
// and ducks further while a comic is playing so it never fights the reading.
//
// createAmbience().start() must be called from a user gesture (the title
// card click) — browsers block AudioContext until then.

const MASTER_GAIN = 0.16; // low — this is a bed, not a soundtrack
const DUCK_GAIN = 0.5; // ~50%, per spec, while a comic is playing
const DUCK_RAMP = 0.6; // seconds

export function createAmbience() {
  let ctx = null;
  let master = null;
  let started = false;
  let ducked = false;

  function start() {
    if (started) {
      if (ctx && ctx.state === 'suspended') ctx.resume();
      return;
    }
    started = true;

    const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextCtor) return; // no WebAudio support — ambience silently does nothing

    ctx = new AudioContextCtor();
    master = ctx.createGain();
    master.gain.value = MASTER_GAIN;
    master.connect(ctx.destination);

    buildDrone(ctx, master);
    buildWind(ctx, master);
  }

  function setDucked(v) {
    ducked = !!v;
    if (!ctx || !master) return;
    const target = (ducked ? DUCK_GAIN : 1) * MASTER_GAIN;
    const now = ctx.currentTime;
    master.gain.cancelScheduledValues(now);
    master.gain.setValueAtTime(master.gain.value, now);
    master.gain.linearRampToValueAtTime(target, now + DUCK_RAMP);
  }

  function triggerCrackle() {
    if (!ctx || !master) return;
    playCrackle(ctx, master);
  }

  return { start, setDucked, triggerCrackle };
}

// --- Drone: two detuned oscillators through a lowpass filter --------------

function buildDrone(ctx, dest) {
  const gain = ctx.createGain();
  gain.gain.value = 0.55;
  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 220;
  filter.Q.value = 0.7;
  gain.connect(filter).connect(dest);

  const freqs = [55, 55.6]; // slight detune -> slow beating
  for (const f of freqs) {
    const osc = ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.value = f;
    osc.connect(gain);
    osc.start();
  }
}

// --- Wind: filtered noise loop with a slow gain LFO ------------------------

function buildWind(ctx, dest) {
  const noise = ctx.createBufferSource();
  noise.buffer = makeNoiseBuffer(ctx, 4);
  noise.loop = true;

  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.value = 500;
  filter.Q.value = 0.6;

  const gain = ctx.createGain();
  gain.gain.value = 0.18;

  noise.connect(filter).connect(gain).connect(dest);
  noise.start();

  // A slow, inaudible oscillator modulating the wind gain — classic
  // tremolo-style LFO routing (audio-rate signal into a GainNode's gain
  // AudioParam), gives the wind a gentle gusting rise and fall.
  const lfo = ctx.createOscillator();
  lfo.type = 'sine';
  lfo.frequency.value = 0.07; // ~14s gust cycle
  const lfoGain = ctx.createGain();
  lfoGain.gain.value = 0.12;
  lfo.connect(lfoGain).connect(gain.gain);
  lfo.start();
}

// --- Crackle: short highpassed noise burst with a fast decay ---------------

function playCrackle(ctx, dest) {
  const dur = 0.18;
  const noise = ctx.createBufferSource();
  noise.buffer = makeNoiseBuffer(ctx, dur);

  const filter = ctx.createBiquadFilter();
  filter.type = 'highpass';
  filter.frequency.value = 1800;

  const env = ctx.createGain();
  const now = ctx.currentTime;
  env.gain.setValueAtTime(0.9, now);
  env.gain.exponentialRampToValueAtTime(0.001, now + dur);

  noise.connect(filter).connect(env).connect(dest);
  noise.start(now);
  noise.stop(now + dur + 0.02);
}

// --- Shared noise-buffer generator ------------------------------------------

function makeNoiseBuffer(ctx, seconds) {
  const length = Math.max(1, Math.floor(ctx.sampleRate * seconds));
  const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < length; i++) data[i] = Math.random() * 2 - 1;
  return buffer;
}
