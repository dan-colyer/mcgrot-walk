// The atmosphere — E2a "The Light", extended by E2c.1 "The Weather Axis".
// Sole authority for "what the light is like right now", the same role
// src/terrain.js plays for height. Drives three channels every frame (see the
// E2 brief): the scene lights, the renderer's global exposure, and a TINT
// REGISTRY over every unlit MeshBasicMaterial in the scene — the façades,
// name-plates, litter comics, the Forth's far shore and NPC faces/comics are
// all unlit and otherwise completely ignore the light rig (see each file's
// own note).
//
// paletteAt(hours, weather) is authored as a two-axis lookup, keyed by
// weather (E2a's design, so E2c could add columns without rewriting the
// table). E2c.1 populates a second column, 'clear', alongside 'overcast'.
//
// THE PIPELINE. A weather change needs two independent blends: hour-within-
// weather (samplePalette) and weather-to-weather across a transition
// (blendPalette). They're kept as separate stages so neither has to know
// about the other:
//   samplePalette(hours, weather, out) — resolve the bracketed keyframe pair
//     into a flat struct of concrete values. No live-object writes.
//   blendPalette(from, to, k, out)     — linear blend of two sampled structs.
//   applyPalette(p)                    — the only code that touches sun,
//     hemi, ambient, fog.color, renderer.toneMappingExposure, sky.setPalette/
//     setCoverage, torch and windows.
// When no transition is active, applyPalette(sTo) is called directly and
// blendPalette is skipped entirely — a blend with k=0 is not guaranteed to be
// bit-identical to no blend at all, and the eight overcast goldens must not
// move a single pixel for this refactor to be behaviour-preserving.

import * as THREE from 'three';

// A full day/night cycle in 24 real minutes — long enough that a full walk
// of the street (15-20 minutes) sees most of one, short enough to actually
// see day become night in a sitting. Named, not buried in the maths below.
const HOURS_PER_REAL_MINUTE = 1;

// How long a setWeather() transition takes, in real seconds of dt (the same
// units main.js's runFrame dt already uses — see its Math.min((now-last)/1000).
const WEATHER_TRANSITION_SECONDS = 10;

// How often (in updates, i.e. roughly frames) the tint registry re-scans the
// scene graph for newly-created MeshBasicMaterials. Page meshes are created
// lazily by shopfronts.js's loadPage()/unloadPage() as the player walks, so a
// construction-time hook would miss them; scanning periodically is
// self-healing and needs no per-subsystem wiring.
const TINT_RESCAN_INTERVAL = 30;

// ---------------------------------------------------------------------------
// Keyframe table. Colours are authored sRGB hex (THREE.Color converts on
// construction, same discipline as sky.js/world.js); `tint` is a LINEAR
// multiplier applied directly to already-linear material.color values, so it
// is authored as plain {r,g,b} floats, never hex — running a multiplier
// through the sRGB->linear conversion would be a different, wrong number.
// `sun.pos` is a plausible-not-astronomical directional offset (see world.js's
// original fixed sun.position for the noon value this keyframe reproduces).
// `torch` and `windowGlow` are both 0..1 darkness-driven scalars. `coverage`
// (E2c.1) is a 0..1 multiplier on sky.js's cloud-deck cover term — 1.0 for
// every overcast stop reproduces the pre-E2c.1 look exactly (cover * 1 ===
// cover); `clear` uses much lower values so the deck mostly burns off.
// `tint` stays in the schema for both columns even though the registry
// currently adopts nothing (see docs/VALIDATION.md) — E2c.2/E2c.3 may
// reintroduce unlit surfaces that want it.
// ---------------------------------------------------------------------------

const OVERCAST_STOPS = [
  {
    hour: 0,
    sun: { color: 0x33445a, intensity: 0.05, pos: { x: -100, y: -50, z: 80 } },
    hemi: { sky: 0x1c2430, ground: 0x0d0c08, intensity: 0.6 },
    ambient: { color: 0x14140f, intensity: 0.25 },
    fog: 0x14150f,
    exposure: 0.55,
    tint: { r: 0.12, g: 0.12, b: 0.15 },
    sky: { band: 0x1a1c16, zenith: 0x0d0f12, cloudDark: 0x0a0c0f, cloudLit: 0x22241c, glow: 0x5c2c12 },
    torch: 1.0,
    windowGlow: 1.0,
    coverage: 1.0,
  },
  {
    hour: 5,
    sun: { color: 0x3a4a5e, intensity: 0.08, pos: { x: 250, y: 20, z: -150 } },
    hemi: { sky: 0x222c38, ground: 0x100f0a, intensity: 0.7 },
    ambient: { color: 0x17170f, intensity: 0.3 },
    fog: 0x181a13,
    exposure: 0.6,
    tint: { r: 0.14, g: 0.14, b: 0.17 },
    sky: { band: 0x20221a, zenith: 0x101318, cloudDark: 0x0d0f12, cloudLit: 0x262820, glow: 0x63300f },
    torch: 0.95,
    windowGlow: 0.9,
    coverage: 1.0,
  },
  {
    hour: 8,
    sun: { color: 0x9fb0c8, intensity: 0.5, pos: { x: 200, y: 180, z: -100 } },
    hemi: { sky: 0x5c6572, ground: 0x24211a, intensity: 2.0,},
    ambient: { color: 0x30301f, intensity: 0.8 },
    fog: 0x3a4038,
    exposure: 1.0,
    tint: { r: 0.55, g: 0.55, b: 0.6 },
    sky: { band: 0x616a52, zenith: 0x232830, cloudDark: 0x1c2028, cloudLit: 0x494636, glow: 0x8a4a1e },
    torch: 0.3,
    windowGlow: 0.15,
    coverage: 1.0,
  },
  {
    hour: 12,
    sun: { color: 0xcfd8e8, intensity: 1.15, pos: { x: -200, y: 300, z: 150 } },
    hemi: { sky: 0x8b93a0, ground: 0x3a3324, intensity: 3.9 },
    ambient: { color: 0x4c4838, intensity: 1.4 },
    fog: 0x4a5142,
    exposure: 1.46,
    tint: { r: 1.0, g: 1.0, b: 1.0 },
    sky: { band: 0x8d9377, zenith: 0x2e343a, cloudDark: 0x232830, cloudLit: 0x5c5748, glow: 0xb05a24 },
    torch: 0.03,
    windowGlow: 0.0,
    coverage: 1.0,
  },
  {
    hour: 17,
    sun: { color: 0xb8a888, intensity: 0.6, pos: { x: -250, y: 150, z: 200 } },
    hemi: { sky: 0x6a6458, ground: 0x2e2a1e, intensity: 2.3 },
    ambient: { color: 0x363020, intensity: 0.9 },
    fog: 0x3c3f30,
    exposure: 1.05,
    tint: { r: 0.6, g: 0.58, b: 0.55 },
    sky: { band: 0x746b52, zenith: 0x282c34, cloudDark: 0x1e222a, cloudLit: 0x4e4a3c, glow: 0xa8541e },
    torch: 0.15,
    windowGlow: 0.1,
    coverage: 1.0,
  },
  {
    hour: 20,
    sun: { color: 0x5c5468, intensity: 0.15, pos: { x: -300, y: 40, z: 220 } },
    hemi: { sky: 0x2e323e, ground: 0x181510, intensity: 1.0 },
    ambient: { color: 0x1c1a12, intensity: 0.4 },
    fog: 0x25271f,
    exposure: 0.75,
    tint: { r: 0.3, g: 0.28, b: 0.3 },
    sky: { band: 0x34342a, zenith: 0x181b20, cloudDark: 0x12151a, cloudLit: 0x38352a, glow: 0x8c3e18 },
    torch: 0.55,
    windowGlow: 0.6,
    coverage: 1.0,
  },
  {
    hour: 22,
    sun: { color: 0x3a4256, intensity: 0.06, pos: { x: -150, y: -30, z: 100 } },
    hemi: { sky: 0x1e2530, ground: 0x0e0d09, intensity: 0.7 },
    ambient: { color: 0x15150e, intensity: 0.3 },
    fog: 0x181a14,
    exposure: 0.6,
    tint: { r: 0.16, g: 0.16, b: 0.19 },
    sky: { band: 0x1c1e17, zenith: 0x0e1014, cloudDark: 0x0b0d10, cloudLit: 0x24261e, glow: 0x662f12 },
    torch: 0.9,
    windowGlow: 0.95,
    coverage: 1.0,
  },
];

// 'clear' — E2c.1. sun.pos is copied verbatim from OVERCAST_STOPS at every
// hour (see docs/ROADMAP.md's brief: "sun.pos must be identical across
// weather columns at the same hour" — it's the same sun in the same sky,
// only colour/intensity/fill differ by weather; disagreeing positions would
// slew the sun bodily across the sky mid-transition). Hemi/ambient are cut
// well below overcast's so the directional sun actually reads as directional
// (a clear sky scatters far less fill light than an overcast deck) — that's
// what puts one side of the street in real shade. exposure and sun intensity
// are tuned down from a naive "just make it brighter" pass specifically to
// keep the six MeshLambertMaterial conversions (LIT_ALBEDO_GAIN=4.7, tuned
// against overcast) under the <0.1% clipped-highlight gate — see the E2c.1
// brief's "risk to measure, not eyeball".
const CLEAR_STOPS = [
  {
    hour: 0,
    sun: { color: 0x2e3c50, intensity: 0.04, pos: { x: -100, y: -50, z: 80 } },
    hemi: { sky: 0x141c2a, ground: 0x0a0906, intensity: 0.45 },
    ambient: { color: 0x0e0e09, intensity: 0.18 },
    fog: 0x0f130f,
    exposure: 0.5,
    tint: { r: 0.09, g: 0.09, b: 0.13 },
    sky: { band: 0x121a14, zenith: 0x080a10, cloudDark: 0x07080a, cloudLit: 0x181a16, glow: 0x5c2c12 },
    torch: 1.0,
    windowGlow: 1.0,
    coverage: 0.05,
  },
  {
    hour: 5,
    sun: { color: 0x384a64, intensity: 0.06, pos: { x: 250, y: 20, z: -150 } },
    hemi: { sky: 0x1a2436, ground: 0x0c0b08, intensity: 0.55 },
    ambient: { color: 0x101109, intensity: 0.22 },
    fog: 0x12150f,
    exposure: 0.55,
    tint: { r: 0.11, g: 0.11, b: 0.15 },
    sky: { band: 0x181e18, zenith: 0x0a0e18, cloudDark: 0x090b0e, cloudLit: 0x1c1e18, glow: 0x63300f },
    torch: 0.95,
    windowGlow: 0.85,
    coverage: 0.08,
  },
  {
    hour: 8,
    sun: { color: 0xffdca0, intensity: 2.9, pos: { x: 200, y: 180, z: -100 } },
    hemi: { sky: 0x5478a0, ground: 0x201c12, intensity: 1.25 },
    ambient: { color: 0x1e1c14, intensity: 0.42 },
    fog: 0x84a0bc,
    exposure: 1.15,
    tint: { r: 0.68, g: 0.64, b: 0.58 },
    sky: { band: 0xa8c2d8, zenith: 0x3a5c7c, cloudDark: 0x334a62, cloudLit: 0x6888a4, glow: 0x9a5620 },
    torch: 0.05,
    windowGlow: 0.05,
    coverage: 0.15,
  },
  {
    hour: 12,
    sun: { color: 0xfff2d8, intensity: 3.0, pos: { x: -200, y: 300, z: 150 } },
    hemi: { sky: 0x6890b4, ground: 0x241f15, intensity: 1.55 },
    ambient: { color: 0x201e13, intensity: 0.5 },
    fog: 0x84a0ba,
    exposure: 1.25,
    tint: { r: 1.0, g: 0.98, b: 0.92 },
    sky: { band: 0xaecad0, zenith: 0x2c5476, cloudDark: 0x40566c, cloudLit: 0x86a0ba, glow: 0xb05a24 },
    torch: 0.0,
    windowGlow: 0.0,
    coverage: 0.12,
  },
  {
    hour: 17,
    sun: { color: 0xffb87a, intensity: 1.3, pos: { x: -250, y: 150, z: 200 } },
    hemi: { sky: 0x465064, ground: 0x1c190f, intensity: 1.0 },
    ambient: { color: 0x18150e, intensity: 0.35 },
    fog: 0x565f74,
    exposure: 0.98,
    tint: { r: 0.6, g: 0.53, b: 0.46 },
    sky: { band: 0x866f54, zenith: 0x28344c, cloudDark: 0x2a3244, cloudLit: 0x586074, glow: 0xa8541e },
    torch: 0.1,
    windowGlow: 0.08,
    coverage: 0.15,
  },
  {
    hour: 20,
    sun: { color: 0x685674, intensity: 0.18, pos: { x: -300, y: 40, z: 220 } },
    hemi: { sky: 0x222a38, ground: 0x120f0a, intensity: 0.7 },
    ambient: { color: 0x121009, intensity: 0.28 },
    fog: 0x1c2030,
    exposure: 0.68,
    tint: { r: 0.3, g: 0.26, b: 0.3 },
    sky: { band: 0x282a38, zenith: 0x121622, cloudDark: 0x0f121a, cloudLit: 0x282a38, glow: 0x8c3e18 },
    torch: 0.5,
    windowGlow: 0.55,
    coverage: 0.1,
  },
  {
    hour: 22,
    sun: { color: 0x384464, intensity: 0.045, pos: { x: -150, y: -30, z: 100 } },
    hemi: { sky: 0x18202e, ground: 0x0a0906, intensity: 0.5 },
    ambient: { color: 0x0f0d08, intensity: 0.22 },
    fog: 0x131624,
    exposure: 0.52,
    tint: { r: 0.14, g: 0.14, b: 0.18 },
    sky: { band: 0x161a26, zenith: 0x090c14, cloudDark: 0x07090e, cloudLit: 0x1c1e26, glow: 0x662f12 },
    torch: 0.85,
    windowGlow: 0.9,
    coverage: 0.06,
  },
];

const KEYFRAMES = { overcast: OVERCAST_STOPS, clear: CLEAR_STOPS };

function stopsFor(weather) {
  return KEYFRAMES[weather] || KEYFRAMES.overcast;
}

// Locates the bracketing pair of stops for `hours` (wrapping past the last
// stop back to the first at hour+24) and the 0..1 interpolation fraction.
function bracket(hours, weather) {
  const stops = stopsFor(weather);
  let i = stops.length - 1;
  for (let k = 0; k < stops.length; k++) {
    if (stops[k].hour <= hours) i = k;
    else break;
  }
  const a = stops[i];
  const b = stops[(i + 1) % stops.length];
  let span = b.hour - a.hour;
  if (span <= 0) span += 24;
  let t = hours - a.hour;
  if (t < 0) t += 24;
  t = span > 0 ? Math.max(0, Math.min(1, t / span)) : 0;
  return { a, b, t };
}

function lerp(a, b, t) { return a + (b - a) * t; }

// One resolved palette: a flat struct of concrete, already-lerped values.
// Every Color/Vector3 field owns its own instance so structs can be blended
// and copied without ever aliasing scene objects — allocated once per struct,
// never per frame.
function makePalette() {
  return {
    sun: { color: new THREE.Color(), intensity: 0, pos: new THREE.Vector3() },
    hemi: { sky: new THREE.Color(), ground: new THREE.Color(), intensity: 0 },
    ambient: { color: new THREE.Color(), intensity: 0 },
    fog: new THREE.Color(),
    exposure: 1,
    tint: new THREE.Color(1, 1, 1),
    sky: {
      band: new THREE.Color(), zenith: new THREE.Color(),
      cloudDark: new THREE.Color(), cloudLit: new THREE.Color(), glow: new THREE.Color(),
    },
    torch: 0,
    windowGlow: 0,
    coverage: 1,
  };
}

function copyPalette(src, dst) {
  dst.sun.color.copy(src.sun.color);
  dst.sun.intensity = src.sun.intensity;
  dst.sun.pos.copy(src.sun.pos);
  dst.hemi.sky.copy(src.hemi.sky);
  dst.hemi.ground.copy(src.hemi.ground);
  dst.hemi.intensity = src.hemi.intensity;
  dst.ambient.color.copy(src.ambient.color);
  dst.ambient.intensity = src.ambient.intensity;
  dst.fog.copy(src.fog);
  dst.exposure = src.exposure;
  dst.tint.copy(src.tint);
  dst.sky.band.copy(src.sky.band);
  dst.sky.zenith.copy(src.sky.zenith);
  dst.sky.cloudDark.copy(src.sky.cloudDark);
  dst.sky.cloudLit.copy(src.sky.cloudLit);
  dst.sky.glow.copy(src.sky.glow);
  dst.torch = src.torch;
  dst.windowGlow = src.windowGlow;
  dst.coverage = src.coverage;
  return dst;
}

export function createAtmosphere({ scene, renderer, world, sky, torch, windows }) {
  const hemi = world.lights && world.lights.hemi;
  const sun = world.lights && world.lights.sun;
  const ambient = world.lights && world.lights.ambient;
  const fog = world.fog;

  let hours = todayStartHour(new Date());
  let rate = HOURS_PER_REAL_MINUTE;

  // settledWeather: the weather fully arrived at (no transition pending).
  // transition: null, or { from: PaletteSample, toWeather, elapsed, duration }
  // — `from` is a frozen snapshot (see setWeather below), not live-resampled.
  let settledWeather = 'overcast';
  let transition = null;

  // Scratch structs, allocated once — see makePalette's own note.
  const sTo = makePalette();       // this frame's sample of the live target weather
  const sBlend = makePalette();    // this frame's blended output, when transitioning
  const sFrozenFrom = makePalette(); // the frozen "from" snapshot for the active transition
  const sLastApplied = makePalette(); // whatever was actually applied last frame

  // Scratch Colors for hex->Color conversion inside samplePalette — reused
  // sequentially (each pair is fully consumed by one lerpColors call before
  // the next field's conversion begins), so two are enough regardless of how
  // many colour fields a palette has.
  const tmpA = new THREE.Color(), tmpB = new THREE.Color();

  function sampleColor(out, aHex, bHex, t) {
    return out.lerpColors(tmpA.set(aHex), tmpB.set(bHex), t);
  }

  // Resolves the bracketed keyframe pair for one weather into `out` — no
  // live-object writes, just the flat struct.
  function samplePalette(hoursNow, weatherName, out) {
    const { a, b, t } = bracket(hoursNow, weatherName);

    sampleColor(out.sun.color, a.sun.color, b.sun.color, t);
    out.sun.intensity = lerp(a.sun.intensity, b.sun.intensity, t);
    out.sun.pos.set(
      lerp(a.sun.pos.x, b.sun.pos.x, t),
      lerp(a.sun.pos.y, b.sun.pos.y, t),
      lerp(a.sun.pos.z, b.sun.pos.z, t)
    );

    sampleColor(out.hemi.sky, a.hemi.sky, b.hemi.sky, t);
    sampleColor(out.hemi.ground, a.hemi.ground, b.hemi.ground, t);
    out.hemi.intensity = lerp(a.hemi.intensity, b.hemi.intensity, t);

    sampleColor(out.ambient.color, a.ambient.color, b.ambient.color, t);
    out.ambient.intensity = lerp(a.ambient.intensity, b.ambient.intensity, t);

    sampleColor(out.fog, a.fog, b.fog, t);

    out.exposure = lerp(a.exposure, b.exposure, t);

    out.tint.setRGB(
      lerp(a.tint.r, b.tint.r, t),
      lerp(a.tint.g, b.tint.g, t),
      lerp(a.tint.b, b.tint.b, t)
    );

    sampleColor(out.sky.band, a.sky.band, b.sky.band, t);
    sampleColor(out.sky.zenith, a.sky.zenith, b.sky.zenith, t);
    sampleColor(out.sky.cloudDark, a.sky.cloudDark, b.sky.cloudDark, t);
    sampleColor(out.sky.cloudLit, a.sky.cloudLit, b.sky.cloudLit, t);
    sampleColor(out.sky.glow, a.sky.glow, b.sky.glow, t);

    out.torch = lerp(a.torch, b.torch, t);
    out.windowGlow = lerp(a.windowGlow, b.windowGlow, t);
    out.coverage = lerp(a.coverage, b.coverage, t);

    return out;
  }

  // Linear blend of two already-sampled palettes (weather-to-weather
  // transition), independent of the hour-bracket blend above.
  function blendPalette(from, to, k, out) {
    out.sun.color.lerpColors(from.sun.color, to.sun.color, k);
    out.sun.intensity = lerp(from.sun.intensity, to.sun.intensity, k);
    out.sun.pos.lerpVectors(from.sun.pos, to.sun.pos, k);

    out.hemi.sky.lerpColors(from.hemi.sky, to.hemi.sky, k);
    out.hemi.ground.lerpColors(from.hemi.ground, to.hemi.ground, k);
    out.hemi.intensity = lerp(from.hemi.intensity, to.hemi.intensity, k);

    out.ambient.color.lerpColors(from.ambient.color, to.ambient.color, k);
    out.ambient.intensity = lerp(from.ambient.intensity, to.ambient.intensity, k);

    out.fog.lerpColors(from.fog, to.fog, k);

    out.exposure = lerp(from.exposure, to.exposure, k);

    out.tint.lerpColors(from.tint, to.tint, k);

    out.sky.band.lerpColors(from.sky.band, to.sky.band, k);
    out.sky.zenith.lerpColors(from.sky.zenith, to.sky.zenith, k);
    out.sky.cloudDark.lerpColors(from.sky.cloudDark, to.sky.cloudDark, k);
    out.sky.cloudLit.lerpColors(from.sky.cloudLit, to.sky.cloudLit, k);
    out.sky.glow.lerpColors(from.sky.glow, to.sky.glow, k);

    out.torch = lerp(from.torch, to.torch, k);
    out.windowGlow = lerp(from.windowGlow, to.windowGlow, k);
    out.coverage = lerp(from.coverage, to.coverage, k);

    return out;
  }

  let sunAltitude = 0;
  let lastExposure = renderer.toneMappingExposure;

  const tint = new THREE.Color(1, 1, 1); // consumed by applyTint(), below

  // The only function that touches live scene/renderer objects.
  function applyPalette(p) {
    if (sun) {
      sun.color.copy(p.sun.color);
      sun.intensity = p.sun.intensity;
      sun.position.copy(p.sun.pos);
      const len = p.sun.pos.length() || 1;
      sunAltitude = Math.asin(THREE.MathUtils.clamp(p.sun.pos.y / len, -1, 1)) * THREE.MathUtils.RAD2DEG;
    }
    if (hemi) {
      hemi.color.copy(p.hemi.sky);
      hemi.groundColor.copy(p.hemi.ground);
      hemi.intensity = p.hemi.intensity;
    }
    if (ambient) {
      ambient.color.copy(p.ambient.color);
      ambient.intensity = p.ambient.intensity;
    }
    if (fog) {
      // Mutated in place (copy sets components, doesn't replace the object)
      // — the seam invariant sky.js depends on requires fog.color stay the
      // same object across its whole lifetime. See sky.js's "THE SEAM" note.
      fog.color.copy(p.fog);
    }

    lastExposure = p.exposure;
    renderer.toneMappingExposure = lastExposure;

    tint.copy(p.tint);

    if (sky) {
      sky.setPalette({
        band: p.sky.band, zenith: p.sky.zenith,
        cloudDark: p.sky.cloudDark, cloudLit: p.sky.cloudLit, glow: p.sky.glow,
      });
      sky.setCoverage(p.coverage);
    }

    if (torch) torch.setDarkness(p.torch);
    if (windows) windows.setGlow(p.windowGlow);
  }

  // --- the unlit-material tint registry ---
  // Materials this atmosphere has adopted: base colour snapshotted BEFORE it
  // is ever tinted, so re-applying tint each frame never compounds. Scoped
  // to MeshBasicMaterial only — SpriteMaterial (NPC name labels, Leither
  // speech bubbles) is a different class entirely and is never touched, by
  // construction, so those stay readable at night without an explicit
  // exclusion list.
  const registry = new Map(); // material -> base THREE.Color
  let frame = 0;

  function adopt(material) {
    if (registry.has(material)) return;
    if (material.userData && material.userData.unlit === false) return;
    registry.set(material, material.color.clone());
  }

  // E2b: shopfronts.js's page materials are the case that motivated this —
  // loadPage()/unloadPage() churn creates and disposes a material every time
  // the player walks past a page boundary, and the registry never dropped
  // the disposed ones, so it grew one entry per page load for the life of
  // the session and applyTint() kept iterating dead materials forever
  // (harmless per-tick cost, but unbounded memory). Since E2b converts every
  // page material to MeshLambertMaterial, they're no longer even eligible
  // for adoption (see the isMeshBasicMaterial check below) — but the prune
  // is kept as a general correctness fix for whatever DOES end up in the
  // registry (E2c's weather work may reintroduce unlit surfaces), not
  // something currently load-bearing.
  function scanForUnlitMaterials() {
    const reachable = new Set();
    scene.traverse((obj) => {
      if (!obj.isMesh || !obj.material) return;
      const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
      for (const mat of mats) {
        if (!mat) continue;
        reachable.add(mat);
        if (mat.isMeshBasicMaterial) adopt(mat);
      }
    });
    for (const material of registry.keys()) {
      if (!reachable.has(material)) registry.delete(material);
    }
  }

  function applyTint() {
    for (const [material, base] of registry) {
      material.color.copy(base).multiply(tint);
    }
  }

  function update(dt, time) {
    if (rate !== 0) {
      hours = (hours + rate * (dt / 60)) % 24;
      if (hours < 0) hours += 24;
    }

    const liveWeather = transition ? transition.toWeather : settledWeather;
    samplePalette(hours, liveWeather, sTo);

    let applied;
    if (transition) {
      transition.elapsed += dt;
      const k = Math.min(1, transition.elapsed / transition.duration);
      blendPalette(transition.from, sTo, k, sBlend);
      applied = sBlend;
      if (k >= 1) {
        settledWeather = transition.toWeather;
        transition = null;
      }
    } else {
      applied = sTo;
    }

    applyPalette(applied);
    copyPalette(applied, sLastApplied);

    frame++;
    if (frame % TINT_RESCAN_INTERVAL === 0) scanForUnlitMaterials();
    applyTint();
  }

  // Initial scan + apply so the very first rendered frame (before update()
  // has run TINT_RESCAN_INTERVAL times) already has façades tinted rather
  // than showing one frame of full-brightness pop-in.
  scanForUnlitMaterials();
  update(0, 0);

  function setTime(h) {
    hours = ((h % 24) + 24) % 24;
    rate = 0; // freezes the cycle so a posed frame is stable — see docs/VALIDATION.md
    update(0, 0);
  }

  function setRate(hoursPerRealMinute) {
    rate = hoursPerRealMinute;
  }

  function getTime() { return hours; }

  // Starts a transition toward `name`. Instant (a no-op) when the target
  // already equals wherever the atmosphere currently is (settled, or already
  // mid-transition toward the same target). A call arriving mid-transition
  // freezes the CURRENT BLENDED OUTPUT (sLastApplied, updated every frame by
  // update() above) as the new `from` and starts a fresh transition toward
  // the new target — the frozen snapshot does not keep advancing with the
  // clock (it's a copy, not a live weather+hour sample), which drifts by
  // about 0.17 hours of clock time over one ~10s transition at the standing
  // rate. Far below visible; simplicity wins here over re-deriving an
  // "equivalent hour" for a frozen blend that has no single hour of its own.
  function setWeather(name) {
    if (transition) {
      if (name === transition.toWeather) return;
    } else if (name === settledWeather) {
      return;
    }
    copyPalette(sLastApplied, sFrozenFrom);
    transition = { from: sFrozenFrom, toWeather: name, elapsed: 0, duration: WEATHER_TRANSITION_SECONDS };
  }

  function state() {
    return {
      hours,
      rate,
      weather: settledWeather,
      weatherTransition: transition
        ? { target: transition.toWeather, progress: Math.min(1, transition.elapsed / transition.duration) }
        : null,
      sunAltitude,
      exposure: lastExposure,
      tint: { r: tint.r, g: tint.g, b: tint.b },
    };
  }

  return { update, setTime, getTime, setRate, setWeather, state };
}

// FNV-1a over a short string — deterministic per calendar date, no PRNG
// state, matching the hash32-only discipline this project holds seeded
// placement to (see docs/ROADMAP.md / CLAUDE.md). Used only to pick a start
// hour; setTime()/smoke's pin override it immediately when it matters.
function hashDateString(str) {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function todayStartHour(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  const h = hashDateString(`${y}-${m}-${d}`);
  return ((h % 10000) / 10000) * 24;
}
