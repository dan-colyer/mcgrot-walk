// WebAudio ambience bed for McGrot Walk — a low drone, filtered wind, and a
// crackle burst synced to each catenary arc flash. No audio files: everything
// is synthesised. Master gain is kept low (atmospheric bed, not a soundtrack)
// and ducks further while a comic is playing so it never fights the reading.
//
// createAmbience().start(sharedCtx) must be called from a user gesture (the
// title card click) — browsers block AudioContext until then. E2e.1 item 7:
// takes an optional externally-created AudioContext so it shares one context
// with src/proximity-audio.js's AudioListener (main.js's title-card
// onEnter builds it) rather than each creating its own — iOS Safari's
// stricter gesture rules were the likely cause of the NPC readers going
// silent while this ambience bed kept playing.

const MASTER_GAIN = 0.16; // low — this is a bed, not a soundtrack
const DUCK_GAIN = 0.5; // ~50%, per spec, while a comic is playing
const DUCK_RAMP = 0.6; // seconds
const RAIN_RAMP = 0.8; // seconds — a setRain() step glides rather than snaps
const RAIN_PEAK_GAIN = 0.5; // rain's own gain node ceiling at intensity 1, pre-master

export function createAmbience() {
  let ctx = null;
  let master = null;
  let started = false;
  let ducked = false;
  let rainGain = null; // created lazily inside start(); setRain before start() just remembers the target
  let pendingRain = 0;

  function start(sharedCtx) {
    if (started) {
      if (ctx && ctx.state === 'suspended') ctx.resume();
      return;
    }
    started = true;

    if (sharedCtx) {
      ctx = sharedCtx;
    } else {
      const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextCtor) return; // no WebAudio support — ambience silently does nothing
      ctx = new AudioContextCtor();
    }

    master = ctx.createGain();
    master.gain.value = MASTER_GAIN;
    master.connect(ctx.destination);

    buildDrone(ctx, master);
    buildWind(ctx, master);
    rainGain = buildRain(ctx, master);
    rainGain.gain.value = pendingRain;
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

  // E2c.2: driven every frame from src/atmosphere.js's applyPalette with
  // palette.rain (0..1) — visible rain you can't hear is uncanny. Must never
  // throw: callable before start() (no ctx yet — just remembers the target
  // for buildRain to pick up) and from a suspended AudioContext (scheduling
  // a ramp on a suspended context's clock is valid WebAudio, it simply won't
  // audibly progress until the context resumes on the title-card gesture).
  function setRain(intensity) {
    const target = Math.max(0, Math.min(1, intensity)) * RAIN_PEAK_GAIN;
    pendingRain = target;
    if (!ctx || !rainGain) return;
    const now = ctx.currentTime;
    rainGain.gain.cancelScheduledValues(now);
    rainGain.gain.setValueAtTime(rainGain.gain.value, now);
    rainGain.gain.linearRampToValueAtTime(target, now + RAIN_RAMP);
  }

  // E9a.2: the duck state is now read by a gate. Returned as a getter rather
  // than measured off master.gain, which ramps over DUCK_RAMP and would make
  // an assertion a race against 0.6s of wall clock.
  return {
    start, setDucked, triggerCrackle, setRain,
    isDucked: () => ducked,
    get context() { return ctx; },
  };
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

// --- Rain: filtered noise bed, gain driven by setRain() --------------------
// Same shape as buildWind (filtered noise + a slow gusting LFO): a steady
// downpour hiss rather than individual drop transients, which would need a
// much higher event rate to not sound like popcorn. Returns the GAIN NODE
// (not the whole graph) so setRain() above can ramp it directly — everything
// upstream (noise source, filter, LFO) only needs building once.
function buildRain(ctx, dest) {
  const noise = ctx.createBufferSource();
  noise.buffer = makeNoiseBuffer(ctx, 4);
  noise.loop = true;

  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.value = 2200; // brighter/hissier than wind's 500Hz — rain reads high, wind reads low
  filter.Q.value = 0.5;

  const gain = ctx.createGain();
  gain.gain.value = 0; // setRain() (or the pending value applied at start()) drives this

  noise.connect(filter).connect(gain).connect(dest);
  noise.start();

  // Gentle intensity wobble so a steady downpour doesn't sound like a static
  // hiss loop — same tremolo-style routing as buildWind's gust LFO, faster
  // and shallower (rain gusts quicker and less dramatically than wind).
  const lfo = ctx.createOscillator();
  lfo.type = 'sine';
  lfo.frequency.value = 0.15;
  const lfoGain = ctx.createGain();
  lfoGain.gain.value = 0.06;
  lfo.connect(lfoGain).connect(gain.gain);
  lfo.start();

  return gain;
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
