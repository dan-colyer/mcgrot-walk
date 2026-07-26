// The atmosphere — E2a "The Light". Sole authority for "what the light is
// like right now", the same role src/terrain.js plays for height. Drives
// three channels every frame (see the E2 brief): the scene lights, the
// renderer's global exposure, and a TINT REGISTRY over every unlit
// MeshBasicMaterial in the scene — the façades, name-plates, litter comics,
// the Forth's far shore and NPC faces/comics are all unlit and otherwise
// completely ignore the light rig (see each file's own note).
//
// Weather is a stub until E2b: paletteAt(hours, weather) is authored as a
// two-axis lookup, keyed by weather, so E2b can add columns without
// rewriting this table. Only 'overcast' is populated; any other weather
// name falls back to it.

import * as THREE from 'three';

// A full day/night cycle in 24 real minutes — long enough that a full walk
// of the street (15-20 minutes) sees most of one, short enough to actually
// see day become night in a sitting. Named, not buried in the maths below.
const HOURS_PER_REAL_MINUTE = 1;

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
// `torch` and `windowGlow` are both 0..1 darkness-driven scalars.
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
  },
];

const KEYFRAMES = { overcast: OVERCAST_STOPS };

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

export function createAtmosphere({ scene, renderer, world, sky, torch, windows }) {
  const hemi = world.lights && world.lights.hemi;
  const sun = world.lights && world.lights.sun;
  const ambient = world.lights && world.lights.ambient;
  const fog = world.fog;

  let hours = todayStartHour(new Date());
  let rate = HOURS_PER_REAL_MINUTE;
  const weather = 'overcast'; // stub axis until E2b

  // Scratch objects, reused every frame — no per-frame allocation.
  const cSunA = new THREE.Color(), cSunB = new THREE.Color();
  const cHemiSkyA = new THREE.Color(), cHemiSkyB = new THREE.Color();
  const cHemiGroundA = new THREE.Color(), cHemiGroundB = new THREE.Color();
  const cAmbA = new THREE.Color(), cAmbB = new THREE.Color();
  const cFogA = new THREE.Color(), cFogB = new THREE.Color();
  const cBandA = new THREE.Color(), cBandB = new THREE.Color(), cBand = new THREE.Color();
  const cZenithA = new THREE.Color(), cZenithB = new THREE.Color(), cZenith = new THREE.Color();
  const cCloudDarkA = new THREE.Color(), cCloudDarkB = new THREE.Color(), cCloudDark = new THREE.Color();
  const cCloudLitA = new THREE.Color(), cCloudLitB = new THREE.Color(), cCloudLit = new THREE.Color();
  const cGlowA = new THREE.Color(), cGlowB = new THREE.Color(), cGlow = new THREE.Color();
  const sunPos = new THREE.Vector3();

  const tint = new THREE.Color(1, 1, 1);
  let sunAltitude = 0;
  let lastExposure = renderer.toneMappingExposure;

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

    const { a, b, t } = bracket(hours, weather);

    if (sun) {
      sun.color.lerpColors(cSunA.set(a.sun.color), cSunB.set(b.sun.color), t);
      sun.intensity = lerp(a.sun.intensity, b.sun.intensity, t);
      sunPos.set(
        lerp(a.sun.pos.x, b.sun.pos.x, t),
        lerp(a.sun.pos.y, b.sun.pos.y, t),
        lerp(a.sun.pos.z, b.sun.pos.z, t)
      );
      sun.position.copy(sunPos);
      const len = sunPos.length() || 1;
      sunAltitude = Math.asin(THREE.MathUtils.clamp(sunPos.y / len, -1, 1)) * THREE.MathUtils.RAD2DEG;
    }
    if (hemi) {
      hemi.color.lerpColors(cHemiSkyA.set(a.hemi.sky), cHemiSkyB.set(b.hemi.sky), t);
      hemi.groundColor.lerpColors(cHemiGroundA.set(a.hemi.ground), cHemiGroundB.set(b.hemi.ground), t);
      hemi.intensity = lerp(a.hemi.intensity, b.hemi.intensity, t);
    }
    if (ambient) {
      ambient.color.lerpColors(cAmbA.set(a.ambient.color), cAmbB.set(b.ambient.color), t);
      ambient.intensity = lerp(a.ambient.intensity, b.ambient.intensity, t);
    }
    if (fog) {
      // Mutated in place (lerpColors sets `this`, doesn't replace it) — the
      // seam invariant sky.js depends on requires fog.color stay the same
      // object across its whole lifetime. See sky.js's "THE SEAM" note.
      fog.color.lerpColors(cFogA.set(a.fog), cFogB.set(b.fog), t);
    }

    lastExposure = lerp(a.exposure, b.exposure, t);
    renderer.toneMappingExposure = lastExposure;

    tint.setRGB(
      lerp(a.tint.r, b.tint.r, t),
      lerp(a.tint.g, b.tint.g, t),
      lerp(a.tint.b, b.tint.b, t)
    );

    if (sky) {
      cBand.lerpColors(cBandA.set(a.sky.band), cBandB.set(b.sky.band), t);
      cZenith.lerpColors(cZenithA.set(a.sky.zenith), cZenithB.set(b.sky.zenith), t);
      cCloudDark.lerpColors(cCloudDarkA.set(a.sky.cloudDark), cCloudDarkB.set(b.sky.cloudDark), t);
      cCloudLit.lerpColors(cCloudLitA.set(a.sky.cloudLit), cCloudLitB.set(b.sky.cloudLit), t);
      cGlow.lerpColors(cGlowA.set(a.sky.glow), cGlowB.set(b.sky.glow), t);
      sky.setPalette({ band: cBand, zenith: cZenith, cloudDark: cCloudDark, cloudLit: cCloudLit, glow: cGlow });
    }

    if (torch) torch.setDarkness(lerp(a.torch, b.torch, t));
    if (windows) windows.setGlow(lerp(a.windowGlow, b.windowGlow, t));

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

  function state() {
    return {
      hours,
      rate,
      weather,
      sunAltitude,
      exposure: lastExposure,
      tint: { r: tint.r, g: tint.g, b: tint.b },
    };
  }

  return { update, setTime, getTime, setRate, state };
}
