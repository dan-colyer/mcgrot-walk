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
import { DRY_ROUGHNESS, WET_ROUGHNESS } from './lighting-constants.js';
import { startHour } from './day.js';

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
    fogDensity: 0.0095,
    exposure: 0.55,
    tint: { r: 0.12, g: 0.12, b: 0.15 },
    sky: { band: 0x1a1c16, zenith: 0x0d0f12, cloudDark: 0x0a0c0f, cloudLit: 0x22241c, glow: 0x5c2c12 },
    torch: 1.0,
    windowGlow: 1.0,
    coverage: 1.0,
    rain: 0,
    wetness: 0,
  },
  {
    hour: 5,
    sun: { color: 0x3a4a5e, intensity: 0.08, pos: { x: 250, y: 20, z: -150 } },
    hemi: { sky: 0x222c38, ground: 0x100f0a, intensity: 0.7 },
    ambient: { color: 0x17170f, intensity: 0.3 },
    fog: 0x181a13,
    fogDensity: 0.0095,
    exposure: 0.6,
    tint: { r: 0.14, g: 0.14, b: 0.17 },
    sky: { band: 0x20221a, zenith: 0x101318, cloudDark: 0x0d0f12, cloudLit: 0x262820, glow: 0x63300f },
    torch: 0.95,
    windowGlow: 0.9,
    coverage: 1.0,
    rain: 0,
    wetness: 0,
  },
  {
    hour: 8,
    sun: { color: 0x9fb0c8, intensity: 0.5, pos: { x: 200, y: 180, z: -100 } },
    hemi: { sky: 0x5c6572, ground: 0x24211a, intensity: 2.0,},
    ambient: { color: 0x30301f, intensity: 0.8 },
    fog: 0x3a4038,
    fogDensity: 0.0095,
    exposure: 1.0,
    tint: { r: 0.55, g: 0.55, b: 0.6 },
    sky: { band: 0x616a52, zenith: 0x232830, cloudDark: 0x1c2028, cloudLit: 0x494636, glow: 0x8a4a1e },
    torch: 0.3,
    windowGlow: 0.15,
    coverage: 1.0,
    rain: 0,
    wetness: 0,
  },
  {
    hour: 12,
    sun: { color: 0xcfd8e8, intensity: 1.15, pos: { x: -200, y: 300, z: 150 } },
    hemi: { sky: 0x8b93a0, ground: 0x3a3324, intensity: 3.9 },
    ambient: { color: 0x4c4838, intensity: 1.4 },
    fog: 0x4a5142,
    fogDensity: 0.0095,
    exposure: 1.46,
    tint: { r: 1.0, g: 1.0, b: 1.0 },
    sky: { band: 0x8d9377, zenith: 0x2e343a, cloudDark: 0x232830, cloudLit: 0x5c5748, glow: 0xb05a24 },
    torch: 0.03,
    windowGlow: 0.0,
    coverage: 1.0,
    rain: 0,
    wetness: 0,
  },
  {
    hour: 17,
    sun: { color: 0xb8a888, intensity: 0.6, pos: { x: -250, y: 150, z: 200 } },
    hemi: { sky: 0x6a6458, ground: 0x2e2a1e, intensity: 2.3 },
    ambient: { color: 0x363020, intensity: 0.9 },
    fog: 0x3c3f30,
    fogDensity: 0.0095,
    exposure: 1.05,
    tint: { r: 0.6, g: 0.58, b: 0.55 },
    sky: { band: 0x746b52, zenith: 0x282c34, cloudDark: 0x1e222a, cloudLit: 0x4e4a3c, glow: 0xa8541e },
    torch: 0.15,
    windowGlow: 0.1,
    coverage: 1.0,
    rain: 0,
    wetness: 0,
  },
  {
    hour: 20,
    sun: { color: 0x5c5468, intensity: 0.15, pos: { x: -300, y: 40, z: 220 } },
    hemi: { sky: 0x2e323e, ground: 0x181510, intensity: 1.0 },
    ambient: { color: 0x1c1a12, intensity: 0.4 },
    fog: 0x25271f,
    fogDensity: 0.0095,
    exposure: 0.75,
    tint: { r: 0.3, g: 0.28, b: 0.3 },
    sky: { band: 0x34342a, zenith: 0x181b20, cloudDark: 0x12151a, cloudLit: 0x38352a, glow: 0x8c3e18 },
    torch: 0.55,
    windowGlow: 0.6,
    coverage: 1.0,
    rain: 0,
    wetness: 0,
  },
  {
    hour: 22,
    sun: { color: 0x3a4256, intensity: 0.06, pos: { x: -150, y: -30, z: 100 } },
    hemi: { sky: 0x1e2530, ground: 0x0e0d09, intensity: 0.7 },
    ambient: { color: 0x15150e, intensity: 0.3 },
    fog: 0x181a14,
    fogDensity: 0.0095,
    exposure: 0.6,
    tint: { r: 0.16, g: 0.16, b: 0.19 },
    sky: { band: 0x1c1e17, zenith: 0x0e1014, cloudDark: 0x0b0d10, cloudLit: 0x24261e, glow: 0x662f12 },
    torch: 0.9,
    windowGlow: 0.95,
    coverage: 1.0,
    rain: 0,
    wetness: 0,
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
//
// fogDensity — E2c.3a. Daylight stops only (08/12/17) are thinned from the
// 0.0095 constant to 0.0022, ~4.3x thinner — this is what opens the long
// view the whole milestone is for. 0/5/20/22 (deep night/dusk) keep 0.0095;
// you can't see the Forth at those hours regardless, and thinning them is
// night-reach work (TORCH_DISTANCE), a later brief. Measured, not eyeballed:
//   - No world-edge (terrain edge, last building, street-ribbon end) becomes
//     visible from any of the four long-view goldens (skyline, mid-805-far,
//     foot-1500-far, north-250-far) even at 0.0015, well past this value.
//   - LOAD_RANGE (src/shopfronts.js) needs no widening at this density:
//     rendering those same four poses at LOAD_RANGE 250 vs 600 differs by
//     <0.1% of pixels at 0.0022, and what differs is flora sway, not a
//     popped-in page — so 250 already covers what's actually visible.
//   - The Forth (src/forth.js) reads from an elevated clearing angle near
//     the Foot at this density (raycast-verified line of sight; the shore's
//     355m puts it at ~54% fog-clear at 0.0022) and stays fully fogged from
//     Picardy (~2000m, effectively 0% clear at any density tried). Ground
//     level dead-on-axis at the Foot stays occluded by the terminus
//     building — an E1-era accepted constraint (docs/ROADMAP.md), not a
//     regression: even at the thinnest density tried (0.0015) a raycast from
//     the literal Foot point to the water/shore never clears the building at
//     any lateral offset up to +/-80m and any elevation up to 27m directly
//     ahead; only stepping ~40m to either side AND rising to ~27m (well
//     above head height — roughly a rooftop vantage, not a walking pose)
//     clears it. The reveal is real but is not visible from the ordinary
//     walking eye-line at the Foot itself.
const CLEAR_STOPS = [
  {
    hour: 0,
    sun: { color: 0x2e3c50, intensity: 0.04, pos: { x: -100, y: -50, z: 80 } },
    hemi: { sky: 0x141c2a, ground: 0x0a0906, intensity: 0.45 },
    ambient: { color: 0x0e0e09, intensity: 0.18 },
    fog: 0x0f130f,
    fogDensity: 0.0095,
    exposure: 0.5,
    tint: { r: 0.09, g: 0.09, b: 0.13 },
    sky: { band: 0x121a14, zenith: 0x080a10, cloudDark: 0x07080a, cloudLit: 0x181a16, glow: 0x5c2c12 },
    torch: 1.0,
    windowGlow: 1.0,
    coverage: 0.05,
    rain: 0,
    wetness: 0,
  },
  {
    hour: 5,
    sun: { color: 0x384a64, intensity: 0.06, pos: { x: 250, y: 20, z: -150 } },
    hemi: { sky: 0x1a2436, ground: 0x0c0b08, intensity: 0.55 },
    ambient: { color: 0x101109, intensity: 0.22 },
    fog: 0x12150f,
    fogDensity: 0.0095,
    exposure: 0.55,
    tint: { r: 0.11, g: 0.11, b: 0.15 },
    sky: { band: 0x181e18, zenith: 0x0a0e18, cloudDark: 0x090b0e, cloudLit: 0x1c1e18, glow: 0x63300f },
    torch: 0.95,
    windowGlow: 0.85,
    coverage: 0.08,
    rain: 0,
    wetness: 0,
  },
  {
    hour: 8,
    sun: { color: 0xffdca0, intensity: 2.9, pos: { x: 200, y: 180, z: -100 } },
    hemi: { sky: 0x5478a0, ground: 0x201c12, intensity: 1.25 },
    ambient: { color: 0x1e1c14, intensity: 0.42 },
    fog: 0x84a0bc,
    fogDensity: 0.0022,
    exposure: 1.15,
    tint: { r: 0.68, g: 0.64, b: 0.58 },
    sky: { band: 0xa8c2d8, zenith: 0x3a5c7c, cloudDark: 0x334a62, cloudLit: 0x6888a4, glow: 0x9a5620 },
    torch: 0.05,
    windowGlow: 0.05,
    coverage: 0.15,
    rain: 0,
    wetness: 0,
  },
  {
    hour: 12,
    sun: { color: 0xfff2d8, intensity: 3.0, pos: { x: -200, y: 300, z: 150 } },
    hemi: { sky: 0x6890b4, ground: 0x241f15, intensity: 1.55 },
    ambient: { color: 0x201e13, intensity: 0.5 },
    fog: 0x84a0ba,
    fogDensity: 0.0022,
    exposure: 1.25,
    tint: { r: 1.0, g: 0.98, b: 0.92 },
    sky: { band: 0xaecad0, zenith: 0x2c5476, cloudDark: 0x40566c, cloudLit: 0x86a0ba, glow: 0xb05a24 },
    torch: 0.0,
    windowGlow: 0.0,
    coverage: 0.12,
    rain: 0,
    wetness: 0,
  },
  {
    hour: 17,
    sun: { color: 0xffb87a, intensity: 1.3, pos: { x: -250, y: 150, z: 200 } },
    hemi: { sky: 0x465064, ground: 0x1c190f, intensity: 1.0 },
    ambient: { color: 0x18150e, intensity: 0.35 },
    fog: 0x565f74,
    fogDensity: 0.0022,
    exposure: 0.98,
    tint: { r: 0.6, g: 0.53, b: 0.46 },
    sky: { band: 0x866f54, zenith: 0x28344c, cloudDark: 0x2a3244, cloudLit: 0x586074, glow: 0xa8541e },
    torch: 0.1,
    windowGlow: 0.08,
    coverage: 0.15,
    rain: 0,
    wetness: 0,
  },
  {
    hour: 20,
    sun: { color: 0x685674, intensity: 0.18, pos: { x: -300, y: 40, z: 220 } },
    hemi: { sky: 0x222a38, ground: 0x120f0a, intensity: 0.7 },
    ambient: { color: 0x121009, intensity: 0.28 },
    fog: 0x1c2030,
    fogDensity: 0.0095,
    exposure: 0.68,
    tint: { r: 0.3, g: 0.26, b: 0.3 },
    sky: { band: 0x282a38, zenith: 0x121622, cloudDark: 0x0f121a, cloudLit: 0x282a38, glow: 0x8c3e18 },
    torch: 0.5,
    windowGlow: 0.55,
    coverage: 0.1,
    rain: 0,
    wetness: 0,
  },
  {
    hour: 22,
    sun: { color: 0x384464, intensity: 0.045, pos: { x: -150, y: -30, z: 100 } },
    hemi: { sky: 0x18202e, ground: 0x0a0906, intensity: 0.5 },
    ambient: { color: 0x0f0d08, intensity: 0.22 },
    fog: 0x131624,
    fogDensity: 0.0095,
    exposure: 0.52,
    tint: { r: 0.14, g: 0.14, b: 0.18 },
    sky: { band: 0x161a26, zenith: 0x090c14, cloudDark: 0x07090e, cloudLit: 0x1c1e26, glow: 0x662f12 },
    torch: 0.85,
    windowGlow: 0.9,
    coverage: 0.06,
    rain: 0,
    wetness: 0,
  },
];

// 'rain' — E2c.2. A heavy, steady downpour: cloud deck stays fully closed
// (coverage 1.0, same as overcast) and sun/hemi/ambient are pulled darker and
// cooler than overcast at every hour — heavier rain cuts more daylight than a
// plain grey sky does. rain/wetness are held flat across the day: this is
// "it is raining", not a storm that waxes and wanes with the clock (E2c.3's
// night-torch case is what varies the *look*, not the rain itself). Exposure
// is kept at or below OVERCAST_STOPS at every matching hour, so the six
// LIT_ALBEDO_GAIN-boosted materials stay comfortably under the clipped-
// highlight gate without retuning the shared gain.
const RAIN_STOPS = [
  {
    hour: 0,
    sun: { color: 0x2a3648, intensity: 0.04, pos: { x: -100, y: -50, z: 80 } },
    hemi: { sky: 0x161e28, ground: 0x0b0a07, intensity: 0.5 },
    ambient: { color: 0x101008, intensity: 0.2 },
    fog: 0x10120e,
    fogDensity: 0.0095,
    exposure: 0.48,
    tint: { r: 0.1, g: 0.1, b: 0.13 },
    sky: { band: 0x151a15, zenith: 0x0b0d10, cloudDark: 0x080a0d, cloudLit: 0x1c1e18, glow: 0x5c2c12 },
    torch: 1.0,
    windowGlow: 1.0,
    coverage: 1.0,
    rain: 0.7,
    wetness: 0.85,
  },
  {
    hour: 5,
    sun: { color: 0x2f3c4e, intensity: 0.06, pos: { x: 250, y: 20, z: -150 } },
    hemi: { sky: 0x1a222c, ground: 0x0d0c08, intensity: 0.6 },
    ambient: { color: 0x131309, intensity: 0.25 },
    fog: 0x13150f,
    fogDensity: 0.0095,
    exposure: 0.52,
    tint: { r: 0.12, g: 0.12, b: 0.15 },
    sky: { band: 0x1a1c16, zenith: 0x0d0f12, cloudDark: 0x0a0c0f, cloudLit: 0x1e2018, glow: 0x63300f },
    torch: 0.95,
    windowGlow: 0.9,
    coverage: 1.0,
    rain: 0.7,
    wetness: 0.85,
  },
  {
    hour: 8,
    sun: { color: 0x7a889c, intensity: 0.3, pos: { x: 200, y: 180, z: -100 } },
    hemi: { sky: 0x48505c, ground: 0x1e1b15, intensity: 1.6 },
    ambient: { color: 0x262617, intensity: 0.6 },
    fog: 0x2e3230,
    fogDensity: 0.0095,
    exposure: 0.85,
    tint: { r: 0.42, g: 0.44, b: 0.48 },
    sky: { band: 0x4e5644, zenith: 0x1c2026, cloudDark: 0x161a20, cloudLit: 0x3a382c, glow: 0x8a4a1e },
    torch: 0.35,
    windowGlow: 0.2,
    coverage: 1.0,
    rain: 0.85,
    wetness: 0.9,
  },
  {
    hour: 12,
    sun: { color: 0x9aa8ba, intensity: 0.65, pos: { x: -200, y: 300, z: 150 } },
    hemi: { sky: 0x6a7078, ground: 0x2c281c, intensity: 2.9 },
    ambient: { color: 0x38361f, intensity: 1.0 },
    fog: 0x383c34, // rain-cooled overcast noon: slightly bluer than OVERCAST_STOPS' 0x4a5142
    fogDensity: 0.0095,
    exposure: 1.1,
    tint: { r: 0.72, g: 0.74, b: 0.78 },
    sky: { band: 0x6a715a, zenith: 0x242830, cloudDark: 0x1c2028, cloudLit: 0x484636, glow: 0xb05a24 },
    torch: 0.06,
    windowGlow: 0.0,
    coverage: 1.0,
    rain: 0.85,
    wetness: 0.9,
  },
  {
    hour: 17,
    sun: { color: 0x8a7e70, intensity: 0.4, pos: { x: -250, y: 150, z: 200 } },
    hemi: { sky: 0x50493e, ground: 0x222016, intensity: 1.7 },
    ambient: { color: 0x2a2618, intensity: 0.65 },
    fog: 0x2e3028,
    fogDensity: 0.0095,
    exposure: 0.9,
    tint: { r: 0.46, g: 0.44, b: 0.42 },
    sky: { band: 0x585240, zenith: 0x20232a, cloudDark: 0x181c22, cloudLit: 0x3c3a2e, glow: 0xa8541e },
    torch: 0.2,
    windowGlow: 0.15,
    coverage: 1.0,
    rain: 0.8,
    wetness: 0.9,
  },
  {
    hour: 20,
    sun: { color: 0x464050, intensity: 0.12, pos: { x: -300, y: 40, z: 220 } },
    hemi: { sky: 0x24262e, ground: 0x14120d, intensity: 0.8 },
    ambient: { color: 0x161409, intensity: 0.32 },
    fog: 0x1c1d18,
    fogDensity: 0.0095,
    exposure: 0.62,
    tint: { r: 0.24, g: 0.22, b: 0.24 },
    sky: { band: 0x282820, zenith: 0x141720, cloudDark: 0x0f1116, cloudLit: 0x2c2a22, glow: 0x8c3e18 },
    torch: 0.6,
    windowGlow: 0.6,
    coverage: 1.0,
    rain: 0.75,
    wetness: 0.9,
  },
  {
    hour: 22,
    sun: { color: 0x2e3648, intensity: 0.05, pos: { x: -150, y: -30, z: 100 } },
    hemi: { sky: 0x181e28, ground: 0x0c0b08, intensity: 0.6 },
    ambient: { color: 0x121208, intensity: 0.25 },
    fog: 0x13150f,
    fogDensity: 0.0095,
    exposure: 0.52,
    tint: { r: 0.13, g: 0.13, b: 0.16 },
    sky: { band: 0x181a14, zenith: 0x0b0d10, cloudDark: 0x090b0e, cloudLit: 0x1e2018, glow: 0x662f12 },
    torch: 0.92,
    windowGlow: 0.95,
    coverage: 1.0,
    rain: 0.7,
    wetness: 0.85,
  },
];

// 'haar' — E2c.3b, the thick end of the fogDensity axis. Authored, not
// derived: haar sits outside every other column on both density and colour,
// so there's nothing to blend it from (unlike 'drizzle', which sits between
// 'overcast' and 'rain').
//
// The look this column has to hit: NOT a darker overcast. A daytime haar is a
// luminous white-out — the sun is killed (very low intensity, kept only so
// sun.pos stays meaningful) but the scene reads bright and flat, because the
// brightness comes from hemi/ambient fill, not the sun. sun.pos is copied
// verbatim from OVERCAST_STOPS at every hour, same discipline as CLEAR_STOPS
// above. fog/sky.band/sky.zenith/sky.cloudDark/sky.cloudLit are all kept
// close to one pale, neutral, faintly-cold colour (coverage 1.0) — with this
// much fog, the sky dome is almost the only thing on screen, so it has to
// read as "inside the fog", not "normal sky over a white-out street". glow
// (the docks) is pulled most of the way toward that same colour rather than
// keeping overcast's vivid ember orange — a burning glow doesn't carry
// through a proper haar.
//
// fogDensity: 0.03 at every stop (flat across the day; night reach is
// TORCH_DISTANCE/E2c.3c's job, not this milestone's). Measured against:
//   - far façade legibility: frontages are ~12-15m across (E2b), so 0.03
//     puts the far side of the street at ~18% fogged — it stays legible.
//     0.05 (~43% fogged) is where it stops reading as a building; 0.03
//     leaves clear margin.
//   - interact.js's RANGE (8m): at 0.03, 8m is ~21% opacity — an NPC is
//     unmistakably visible well before the prompt can fire. The floor this
//     would break is much higher (RANGE reads fine even at the 0.05 tried
//     during tuning); the far-façade constraint above is the tighter one.
//   - litter comics are read at ~1m; fogDensity plays no visible part at
//     that distance at any value tried.
// What breaks first if thickened further: the far-façade legibility above —
// by 0.05 the opposite pavement is most of the way to fully fogged, and a
// pose like fascia-close starts losing the building it's meant to show.
//
// wetness: 0.25 at every stop — a haar leaves surfaces damp but this isn't
// rain; picked at the low end of the brief's ~0.2-0.3 range.
//
// rain: 0 at every stop, non-negotiable — haar's zero-draw-call claim
// (E2c.3b acceptance criterion 4) depends on this exactly, the same "matched
// control" discipline captureWeatherPass already applies to rain/drizzle.
const HAAR_STOPS = [
  {
    hour: 0,
    sun: { color: 0x1c2430, intensity: 0.03, pos: { x: -100, y: -50, z: 80 } },
    hemi: { sky: 0x20262a, ground: 0x0c0c0a, intensity: 0.5 },
    ambient: { color: 0x141616, intensity: 0.22 },
    fog: 0x1a1e1e,
    fogDensity: 0.03,
    exposure: 0.55,
    tint: { r: 0.14, g: 0.15, b: 0.16 },
    sky: { band: 0x1c201e, zenith: 0x14181a, cloudDark: 0x101214, cloudLit: 0x222624, glow: 0x4a3c30 },
    torch: 1.0,
    windowGlow: 1.0,
    coverage: 1.0,
    rain: 0,
    wetness: 0.25,
  },
  {
    hour: 5,
    sun: { color: 0x24303c, intensity: 0.05, pos: { x: 250, y: 20, z: -150 } },
    hemi: { sky: 0x262c30, ground: 0x0e0e0c, intensity: 0.6 },
    ambient: { color: 0x181a1a, intensity: 0.28 },
    fog: 0x222626,
    fogDensity: 0.03,
    exposure: 0.62,
    tint: { r: 0.18, g: 0.19, b: 0.2 },
    sky: { band: 0x24282a, zenith: 0x1a1e22, cloudDark: 0x141618, cloudLit: 0x282c2a, glow: 0x504436 },
    torch: 0.9,
    windowGlow: 0.85,
    coverage: 1.0,
    rain: 0,
    wetness: 0.25,
  },
  {
    hour: 8,
    sun: { color: 0xb8c0c4, intensity: 0.15, pos: { x: 200, y: 180, z: -100 } },
    hemi: { sky: 0xd8dcdc, ground: 0x606058, intensity: 3.4 },
    ambient: { color: 0x9ca09c, intensity: 1.6 },
    fog: 0xced6d4,
    fogDensity: 0.03,
    exposure: 1.3,
    tint: { r: 0.82, g: 0.84, b: 0.84 },
    sky: { band: 0xd2dad8, zenith: 0xc8d2d0, cloudDark: 0xb8c2c0, cloudLit: 0xdce4e2, glow: 0x8a7668 },
    torch: 0.02,
    windowGlow: 0.02,
    coverage: 1.0,
    rain: 0,
    wetness: 0.25,
  },
  {
    hour: 12,
    sun: { color: 0xb0b8ba, intensity: 0.2, pos: { x: -200, y: 300, z: 150 } },
    hemi: { sky: 0xe4e8e6, ground: 0x686860, intensity: 3.8 },
    ambient: { color: 0xa8aca8, intensity: 1.8 },
    fog: 0xd6dedc,
    fogDensity: 0.03,
    exposure: 1.42,
    tint: { r: 1.0, g: 1.0, b: 0.98 },
    sky: { band: 0xdae2e0, zenith: 0xd0d8d6, cloudDark: 0xc0cac8, cloudLit: 0xe2eae8, glow: 0x8c786a },
    torch: 0.0,
    windowGlow: 0.0,
    coverage: 1.0,
    rain: 0,
    wetness: 0.25,
  },
  {
    hour: 17,
    sun: { color: 0xa89890, intensity: 0.18, pos: { x: -250, y: 150, z: 200 } },
    hemi: { sky: 0xc8c8c0, ground: 0x605a4e, intensity: 3.0 },
    ambient: { color: 0x969288, intensity: 1.5 },
    fog: 0xc4c2ba,
    fogDensity: 0.03,
    exposure: 1.2,
    tint: { r: 0.86, g: 0.82, b: 0.78 },
    sky: { band: 0xc6c4ba, zenith: 0xbcbcb4, cloudDark: 0xacaca4, cloudLit: 0xd0cec4, glow: 0x8a7460 },
    torch: 0.08,
    windowGlow: 0.06,
    coverage: 1.0,
    rain: 0,
    wetness: 0.25,
  },
  {
    hour: 20,
    sun: { color: 0x585868, intensity: 0.1, pos: { x: -300, y: 40, z: 220 } },
    hemi: { sky: 0x383c40, ground: 0x1c1c18, intensity: 1.3 },
    ambient: { color: 0x28282a, intensity: 0.55 },
    fog: 0x2e3236,
    fogDensity: 0.03,
    exposure: 0.78,
    tint: { r: 0.36, g: 0.35, b: 0.38 },
    sky: { band: 0x303436, zenith: 0x24282c, cloudDark: 0x1c2024, cloudLit: 0x363a3a, glow: 0x5c4a3c },
    torch: 0.5,
    windowGlow: 0.55,
    coverage: 1.0,
    rain: 0,
    wetness: 0.25,
  },
  {
    hour: 22,
    sun: { color: 0x303a48, intensity: 0.05, pos: { x: -150, y: -30, z: 100 } },
    hemi: { sky: 0x22262e, ground: 0x0e0e0c, intensity: 0.6 },
    ambient: { color: 0x16181a, intensity: 0.28 },
    fog: 0x1c2024,
    fogDensity: 0.03,
    exposure: 0.58,
    tint: { r: 0.16, g: 0.17, b: 0.19 },
    sky: { band: 0x1e2224, zenith: 0x161a1e, cloudDark: 0x121416, cloudLit: 0x24282a, glow: 0x4c3e32 },
    torch: 0.88,
    windowGlow: 0.9,
    coverage: 1.0,
    rain: 0,
    wetness: 0.25,
  },
];

const KEYFRAMES = { overcast: OVERCAST_STOPS, clear: CLEAR_STOPS, rain: RAIN_STOPS, haar: HAAR_STOPS };

function stopsFor(weather) {
  return KEYFRAMES[weather] || KEYFRAMES.overcast;
}

// 'drizzle' — E2c.2, Dan's call: derived from a blend of 'overcast' and
// 'rain' rather than authored as its own column, so the light/rain/wetness
// relationship never has to be hand-tuned twice. k is the weight toward
// 'rain'; rainScale further scales the blended rain intensity down when the
// light-side blend alone doesn't land the particle rate right (unused here —
// k=0.45 landed both at once, see resolvePalette below).
const DERIVED = { drizzle: { from: 'overcast', to: 'rain', k: 0.45 } };

// E2c.3c Part 3: which weather can follow which, for the autonomous
// scheduler below. Encodes the brief's "overcast -> drizzle -> rain rather
// than clear -> rain -> clear" plausibility — every edge is a small step on
// the light/wetness axis, never a jump between opposites. 'haar' only
// borders 'overcast': it's a still, becalmed condition (E2c.3b's brief), not
// one that plausibly rolls in mid-downpour or burns off straight into a
// clear sky.
const WEATHER_ADJACENCY = {
  overcast: ['clear', 'drizzle', 'haar'],
  clear: ['overcast'],
  drizzle: ['overcast', 'rain'],
  rain: ['drizzle'],
  haar: ['overcast'],
};

// How long (in in-sim hours) the scheduler waits before its next autonomous
// change, drawn uniformly from this band each time one fires or an explicit
// setWeather() defers it. Wide enough that a normal walk (15-20 real
// minutes, i.e. that many in-sim hours at the standing HOURS_PER_REAL_MINUTE)
// sees at most a couple of autonomous changes, not a flicker.
const SCHEDULE_MIN_HOURS = 1.5;
const SCHEDULE_MAX_HOURS = 4;

// Same mix/avalanche as chimneys.js's hash32 (deterministic placement seed),
// duplicated rather than imported — this module has no other dependency on
// chimneys.js and the function is a few lines of pure arithmetic.
function hash32(a, b) {
  let h = (a * 73856093) ^ (b * 19349663);
  h = Math.imul(h ^ (h >>> 13), 0x85ebca6b);
  h ^= h >>> 16;
  return h >>> 0;
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
    fogDensity: 0.0095,
    exposure: 1,
    tint: new THREE.Color(1, 1, 1),
    sky: {
      band: new THREE.Color(), zenith: new THREE.Color(),
      cloudDark: new THREE.Color(), cloudLit: new THREE.Color(), glow: new THREE.Color(),
    },
    torch: 0,
    windowGlow: 0,
    coverage: 1,
    rain: 0,
    wetness: 0,
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
  dst.fogDensity = src.fogDensity;
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
  dst.rain = src.rain;
  dst.wetness = src.wetness;
  return dst;
}

export function createAtmosphere({ scene, renderer, world, sky, torch, windows, rain, ambience }) {
  // Late-bound: lamps.js needs scenery.js's pole positions, and scenery is
  // built after this. A setter rather than a constructor argument keeps
  // atmosphere the sole authority for light-by-hour, which a consumer
  // sampling state() itself would not.
  let lamps = null;

  // E5d part 2: while suspended, applyPalette is not called and whoever holds
  // the suspend owns fog.color/fog.density and toneMappingExposure. Releasing
  // reapplies the full palette immediately, so nothing the holder left behind
  // can persist.
  //
  // E9a.1: this was a bare boolean, which supports exactly one suspender. The
  // E5 phase gate ruled that the seam graduates to an OWNED hand-off before a
  // second consumer arrives, and the interior is that second consumer — it
  // needs its own fog and its own exposure while the street clock runs on,
  // and the ending can be reached from indoors. Ownership is now a token:
  // acquireSuspend(owner) returns one or returns NULL if someone else already
  // holds it. Re-entry is refused rather than nested, and a caller that gets
  // null must not paint. release() is idempotent and ignores a stale token,
  // so a late release from a previous holder cannot steal the palette back
  // from the current one.
  let suspendToken = null;
  const hemi = world.lights && world.lights.hemi;
  const sun = world.lights && world.lights.sun;
  const ambient = world.lights && world.lights.ambient;
  const fog = world.fog;

  // E2c.2: wetness darkens road/pavement — both set only `map` in world.js
  // (colour defaults to white), so a multiply is a clean darken with no new
  // geometry. Snapshotted ONCE here and always recomputed from the snapshot,
  // never the live value — the tint registry's own non-compounding
  // discipline (see applyTint below), and the reason IT snapshots before
  // first tint too.
  const surfaces = world.surfaces || {};
  const roadBaseColor = surfaces.road ? surfaces.road.color.clone() : null;
  const pavementBaseColor = surfaces.pavement ? surfaces.pavement.color.clone() : null;
  const WETNESS_DARKEN = 0.5; // fraction darker than the dry base at wetness=1

  function applyWetness(k) {
    const factor = 1 - WETNESS_DARKEN * k;
    const roughness = DRY_ROUGHNESS + (WET_ROUGHNESS - DRY_ROUGHNESS) * k;
    if (surfaces.road && roadBaseColor) {
      surfaces.road.color.copy(roadBaseColor).multiplyScalar(factor);
      surfaces.road.roughness = roughness;
    }
    if (surfaces.pavement && pavementBaseColor) {
      surfaces.pavement.color.copy(pavementBaseColor).multiplyScalar(factor);
      surfaces.pavement.roughness = roughness;
    }
  }

  // Date-derived arrival hour — see src/day.js, which is now the single
  // authority for "today" so the harness can pin it (E5c puts the date on
  // the HUD, and a golden containing a live date rots overnight).
  let hours = startHour();
  let rate = HOURS_PER_REAL_MINUTE;

  // settledWeather: the weather fully arrived at (no transition pending).
  // transition: null, or { from: PaletteSample, toWeather, elapsed, duration }
  // — `from` is a frozen snapshot (see setWeather below), not live-resampled.
  let settledWeather = 'overcast';
  let transition = null;

  // --- Part 3: autonomous weather scheduling ---
  // Drives weather changes off `hours` (the in-sim clock) alone — never off
  // wall time, never off Math.random(). That's the whole safety property:
  // setTime() sets rate=0 (see setTime below), and the scheduler only ever
  // advances schedClock inside the `if (rate !== 0)` branch of update(), so a
  // harness that has pinned time can never see an autonomous change — the
  // exact determinism this milestone depends on (E2c.3b.1's deterministic
  // boot would otherwise be spent again).
  //
  // schedClock is `hours`' un-wrapped twin: same per-frame increment, but
  // monotonic (never mod 24) so "next change due at X" is a plain
  // ever-increasing target, not something that has to reason about wrapping
  // past midnight.
  let schedClock = 0;
  let scheduleEnabled = true;
  // Seeded from the date-derived boot hour (already computed above via
  // day.js's startHour) rather than a fresh Date() call — deterministic per
  // calendar day, and draws are taken in a dedicated counter sequence
  // (scheduleSeedCounter) so they never interleave with any other hash32
  // call elsewhere in the project ("draw order is sacred").
  const scheduleSeedBase = Math.floor(hours * 1e6) >>> 0;
  let scheduleSeedCounter = 0;
  let nextChangeAt = null;   // schedClock value the next autonomous change fires at
  let pendingTarget = null;  // weather name it will change to

  function pickNextWeather(fromWeather) {
    const options = WEATHER_ADJACENCY[fromWeather] || WEATHER_ADJACENCY.overcast;
    const seed = hash32(scheduleSeedBase, scheduleSeedCounter++);
    return options[seed % options.length];
  }

  // (Re)arms the schedule from `fromWeather` — called at construction, after
  // every autonomous fire (from the weather just entered), and from every
  // explicit setWeather() (so a manual call always defers whatever was
  // pending rather than racing it).
  function scheduleNext(fromWeather) {
    pendingTarget = pickNextWeather(fromWeather);
    const seed = hash32(scheduleSeedBase, scheduleSeedCounter++);
    const hoursUntil = SCHEDULE_MIN_HOURS + (seed % 1000) / 1000 * (SCHEDULE_MAX_HOURS - SCHEDULE_MIN_HOURS);
    nextChangeAt = schedClock + hoursUntil;
  }

  function setWeatherSchedule(v) {
    scheduleEnabled = !!v;
  }

  // Scratch structs, allocated once — see makePalette's own note.
  const sTo = makePalette();       // this frame's sample of the live target weather
  const sBlend = makePalette();    // this frame's blended output, when transitioning
  const sFrozenFrom = makePalette(); // the frozen "from" snapshot for the active transition
  const sLastApplied = makePalette(); // whatever was actually applied last frame

  // Struct budget for derived weathers (drizzle): only the transition's `to`
  // side is ever resolved through resolvePalette per frame — its `from` is a
  // frozen snapshot (sFrozenFrom above), not re-sampled — so two scratch
  // palettes are enough for the derived blend, same discipline as the four
  // above (allocated once, never per frame).
  const sDerivedFrom = makePalette();
  const sDerivedTo = makePalette();

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
    out.fogDensity = lerp(a.fogDensity, b.fogDensity, t);

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
    out.rain = lerp(a.rain, b.rain, t);
    out.wetness = lerp(a.wetness, b.wetness, t);

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
    out.fogDensity = lerp(from.fogDensity, to.fogDensity, k);

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
    out.rain = lerp(from.rain, to.rain, k);
    out.wetness = lerp(from.wetness, to.wetness, k);

    return out;
  }

  // Resolves ANY weather name — authored (samplePalette handles it directly)
  // or derived (blended from two authored columns, see DERIVED above) — into
  // `out`. The only entry point update() below uses; samplePalette/
  // blendPalette stay unaware of derivation entirely.
  function resolvePalette(hoursNow, weatherName, out) {
    const derived = DERIVED[weatherName];
    if (!derived) return samplePalette(hoursNow, weatherName, out);
    samplePalette(hoursNow, derived.from, sDerivedFrom);
    samplePalette(hoursNow, derived.to, sDerivedTo);
    blendPalette(sDerivedFrom, sDerivedTo, derived.k, out);
    if (derived.rainScale != null) out.rain *= derived.rainScale;
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
      fog.density = p.fogDensity;
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
    // E2g: street lamps read the SAME scalar as the windows rather than a
    // curve of their own. The roadmap asked for windowGlow's shape copied;
    // sharing the value outright is the strongest form of that — there is no
    // second clock to drift, and no 28 keyframes to keep in step.
    if (lamps) lamps.setGlow(p.windowGlow);
    if (rain) rain.setIntensity(p.rain);
    if (ambience) ambience.setRain(p.rain);
    applyWetness(p.wetness);
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
    // E5d part 2: the ending sequence takes over fog and exposure for ~10s.
    // It has to be a hand-off rather than the sequence writing the same
    // fields behind atmosphere's back — this module reapplies the whole
    // palette every frame, so anything written from outside is overwritten
    // before it is ever seen. The clock still advances while suspended, so
    // resuming lands on the time it would have been.
    if (suspendToken) {
      if (rate !== 0) hours = (((hours + rate * (dt / 60)) % 24) + 24) % 24;
      return;
    }
    if (rate !== 0) {
      hours = (hours + rate * (dt / 60)) % 24;
      if (hours < 0) hours += 24;

      // Autonomous fire: only ever reached when rate!==0, i.e. never while a
      // harness has pinned time via setTime() — that's the load-bearing
      // guard, not a flag the scheduler checks. Also holds off mid-transition
      // (nothing here races beginTransition), and rearms itself immediately
      // from the weather it just started moving to, so the schedule is
      // always self-perpetuating.
      schedClock += rate * (dt / 60);
      if (scheduleEnabled && nextChangeAt !== null && schedClock >= nextChangeAt && !transition) {
        const target = pendingTarget;
        beginTransition(target);
        scheduleNext(target);
      }
    }

    const liveWeather = transition ? transition.toWeather : settledWeather;
    resolvePalette(hours, liveWeather, sTo);

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

  // Arms the very first autonomous change before any frame has run, so the
  // schedule is live from boot rather than only after the first explicit
  // setWeather().
  scheduleNext(settledWeather);

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
  const VALID_WEATHERS = new Set([...Object.keys(KEYFRAMES), ...Object.keys(DERIVED)]);

  function beginTransition(name) {
    if (transition) {
      if (name === transition.toWeather) return;
    } else if (name === settledWeather) {
      return;
    }
    copyPalette(sLastApplied, sFrozenFrom);
    transition = { from: sFrozenFrom, toWeather: name, elapsed: 0, duration: WEATHER_TRANSITION_SECONDS };
  }

  // Explicit call — the harness's own setWeather (via debug.js) and any
  // future player-facing trigger both land here. Always rearms the schedule
  // from `name`, even when beginTransition itself is a no-op (already
  // there/already heading there): an explicit call is a statement of intent
  // about what the weather should do next, and must defer whatever the
  // scheduler had pending rather than let it race in moments later.
  function setWeather(name) {
    if (!VALID_WEATHERS.has(name)) {
      console.warn(`[atmosphere] setWeather: unknown weather "${name}", ignoring`);
      return;
    }
    beginTransition(name);
    if (scheduleEnabled) scheduleNext(name);
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
      fogDensity: fog ? fog.density : sLastApplied.fogDensity,
      tint: { r: tint.r, g: tint.g, b: tint.b },
      rain: sLastApplied.rain,
      wetness: sLastApplied.wetness,
      weatherScheduleEnabled: scheduleEnabled,
    };
  }

  // E5d: the turnaround hinge. legs.js decides WHEN the street should change;
  // this decides WHAT it changes to, because atmosphere is the sole authority
  // for the clock and the weather and a hinge that wrote either directly
  // would be a second one.
  //
  // The weather roll walks WEATHER_ADJACENCY rather than picking freely, so a
  // turnaround cannot teleport a downpour into a clear sky — the same
  // plausibility rule the autonomous scheduler obeys. Deterministic in
  // (seed, legIndex) via hash32: the same day walked twice gives the same
  // sequence, which is what makes it gateable at all.
  function nudge(deltaHours, seed, legIndex) {
    // Roll from the weather we are heading TO, not the one we have left.
    // setWeather starts a transition and `settledWeather` lags it by
    // WEATHER_TRANSITION_SECONDS; hinging again inside that window would
    // otherwise re-roll from the stale base and could walk backwards to where
    // it just came from. Legs are ~115s apart so this is a narrow window, but
    // a teleporting harness sits in it every time.
    const from = transition ? transition.toWeather : settledWeather;

    // Advance in place — deliberately NOT setTime(), which pins `rate` to 0
    // to hold a posed frame still for the harness. Correct there, catastrophic
    // here: the first turnaround would stop the day/night cycle for the rest
    // of the session, so the street you walked back down would never change
    // again. Caught by the opposed-pair gate reading an 8.18h hinge
    // contribution where two 5h hinges owed 10h — the missing time was the
    // clock dying at the first hinge. The parameter is `deltaHours` and not
    // `hours` because `hours` is this module's own clock and shadowing it here
    // is exactly how the first attempt went wrong.
    hours = ((hours + deltaHours) % 24 + 24) % 24;
    update(0, 0);

    const options = WEATHER_ADJACENCY[from] || [];
    let to = from;
    if (options.length) {
      to = options[hash32(seed >>> 0, legIndex >>> 0) % options.length];
      setWeather(to);
    }
    return { hours: deltaHours, from, to };
  }

  function setLamps(v) {
    lamps = v || null;
    // Adopt immediately so the lamps are correct on the frame they appear,
    // not one palette update later.
    if (lamps) lamps.setGlow(sLastApplied.windowGlow);
  }

  // Take exclusive ownership of fog and exposure. Returns a token, or null if
  // another owner already holds it — the caller MUST check, because painting
  // without the token means two writers on the same fields and atmosphere
  // wins on the next frame anyway (silently, which is the failure mode this
  // replaces).
  function acquireSuspend(owner) {
    if (typeof owner !== 'string' || !owner) throw new Error('atmosphere.acquireSuspend needs a named owner');
    if (suspendToken) return null;
    suspendToken = { owner, released: false };
    return suspendToken;
  }

  // Idempotent, and a no-op for any token that is not the current holder.
  function releaseSuspend(token) {
    if (!token || token !== suspendToken) return false;
    suspendToken = null;
    token.released = true;
    // Releasing must repaint immediately rather than waiting for the next
    // frame: the holder leaves fog and exposure somewhere arbitrary, and a
    // single frame of that after "keep walking" is a visible flash.
    update(0, 0);
    return true;
  }

  return {
    update, setTime, getTime, setRate, setWeather, setWeatherSchedule, state, setLamps, nudge,
    acquireSuspend,
    releaseSuspend,
    isSuspended: () => !!suspendToken,
    suspendOwner: () => (suspendToken ? suspendToken.owner : null),
  };
}
