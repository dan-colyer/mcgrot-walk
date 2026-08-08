// Street lights — so Leith Walk is legible after dark.
//
// The Walk runs a full day/night cycle in 24 real minutes
// (HOURS_PER_REAL_MINUTE = 1), so roughly half of every visit was too dark to
// read a shopfront, let alone find a vendor. The torch lights a surface you
// are nose-to-nose with, not a street.
//
// Three parts, deliberately separated by cost:
//
//   1. FITTINGS — an arm and a hood per lamp, merged into one Lambert mesh.
//      Daylight-visible geometry, one draw call for all of them.
//   2. GLOW — an emissive bulb per lamp, merged into one additive mesh whose
//      opacity is the darkness signal. Also one draw call, and it costs
//      nothing per-fragment because it is unlit.
//   3. A POOL of real PointLights that follows the camera, reassigned each
//      frame to the nearest lamps. This is the only part with per-fragment
//      cost, which is why it is a fixed few and not one per lamp.
//
// No randomness. The fittings hang off catenary pole positions that already
// exist, and every dimension here is derived from those — scenery.js's seeded
// PRNG draw order is sacred and this module must never draw from it.
//
// THE POOL IS ALLOCATED ONCE AND NEVER RESIZED. Measured at E2g: changing the
// number of lights in the scene invalidates every material program, and
// SwiftShader rebuilds them lazily at seconds per frame. Modulate intensity
// and position; never add or remove. Setting intensity to 0 is free — four
// zero-intensity PointLights were measured to render a BYTE-IDENTICAL frame
// at 13:00, against a control of two unchanged renders.

import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { flag } from './flags.js';

// E2g lands with this off, so the milestone can be verified against unmoved
// goldens before the pixels change. The enable commit flips it, and that is
// the commit that recaptures the daylight goldens.
const LAMPS_ENABLED = true;

const ARM_LENGTH = 1.7;      // metres the arm reaches from pole toward the street
const ARM_DROP = 0.35;       // metres below the wire attachment the arm sits
const HOOD_RADIUS = 0.30;
const HOOD_HEIGHT = 0.34;
const BULB_RADIUS = 0.17;

// One lamp per catenary station, alternating sides — 46 stations over 1617 m
// at POLE_SPACING = 35, so a lamp roughly every 35 m on staggered kerbs.
// POOL_RANGE and LIGHT_DISTANCE are both set against POLE_SPACING, not
// picked for feel. A first pass used 26 m and 24 m, which measured as exactly
// ONE active light at any time (35 m spacing means a second lamp is never in
// range) and left unlit gaps between the pools — stripes of black, and three
// of the four lights permanently dead weight. Range now spans two stations
// either side, and the falloff radius comfortably exceeds the gap so
// consecutive pools meet.
const POOL_SIZE = 4;
const POOL_RANGE = 74;       // metres; ~2 stations either way at POLE_SPACING 35
const LIGHT_DISTANCE = 38;   // PointLight falloff radius — must exceed POLE_SPACING
// Physical units, and the torch's 18 is NO guide here: the torch sits ~1 m
// from what it lights and a lamp head is ~8 m up and out, so inverse-square
// costs roughly two orders of magnitude. Swept at 03:00 overcast, torch off,
// centreline ground pose, mean luminance of the lower two-thirds:
//   peak     42 ->  0.08   (indistinguishable from the unlit control)
//   peak    500 ->  5.68
//   peak   1500 -> 20.39   <- chosen; ~half of the 41.9 daylight reading,
//   peak   4000 -> 49.75      58% of the frame above the legibility floor
//   peak  25000 -> 154.41
// Nothing clipped at any value, so the ceiling here is taste, not headroom.
const LIGHT_PEAK = 1500;
const LIGHT_COLOUR = 0xffb45a;

// ACES lifts everything, so the emissive bulb is authored far darker than
// "sodium orange" looks on paper; additive blending at full opacity would
// otherwise clip to a white dot.
const BULB_COLOUR = 0xc47a2a;
const FITTING_COLOUR = 0x2f2a22;

// windowGlow does NOT reach 0 in daylight — it reads 0.02 at 13:00 and 0.15
// at 08:00, which is right for a window (a bulb left on behind glass) and
// wrong for a street light. Taken literally it put 4 PointLights at intensity
// 30 into every daylight frame — the same order as the torch's 18 — and the
// wet-surface specular that produced moved golden-rain:fascia-close by 11.1%.
//
// So lamps switch rather than dim: below ON_LO they are simply off, and they
// ramp to full by ON_HI. ON_LO sits above the 08:00 reading of 0.15 on
// purpose, because a street light burning at breakfast is a bug you would
// have to look at every morning.
const ON_LO = 0.22;
const ON_HI = 0.60;

function lampOutput(windowGlow) {
  const g = Number.isFinite(windowGlow) ? windowGlow : 0;
  const t = Math.max(0, Math.min(1, (g - ON_LO) / (ON_HI - ON_LO)));
  return t * t * (3 - 2 * t); // smoothstep — no visible switch-on step
}

export function lampsEnabled() {
  // __mcgrotForceLamps, localhost only — see src/flags.js.
  return flag('Lamps', LAMPS_ENABLED);
}

// poles: scenery.js's wire-attachment points, pushed as (left, right) per
// station. Station i is poles[2i] / poles[2i+1]; the midpoint of a pair is on
// the street centreline, which is how the arm knows which way to reach
// without recomputing the street tangent.
export function buildLamps({ scene, camera, poles }) {
  const enabled = lampsEnabled();
  const noop = {
    enabled: false, count: 0, poolSize: 0, lamps: [],
    setGlow() {}, update() {}, glow: () => 0, activeCount: () => 0,
  };
  if (!enabled || !scene || !camera || !poles || poles.length < 2) return noop;

  const lamps = [];
  const fittingGeos = [];
  const bulbGeos = [];

  const stations = Math.floor(poles.length / 2);
  for (let i = 0; i < stations; i++) {
    const mine = poles[i * 2 + (i % 2)];       // alternate kerbs
    const other = poles[i * 2 + ((i + 1) % 2)];
    if (!mine || !other) continue;

    const from = mine.position;
    const dx = other.position.x - from.x;
    const dz = other.position.z - from.z;
    const len = Math.hypot(dx, dz) || 1;
    const ux = dx / len;
    const uz = dz / len;

    const armY = from.y - ARM_DROP;
    const headX = from.x + ux * ARM_LENGTH;
    const headZ = from.z + uz * ARM_LENGTH;

    // Arm: a thin box laid along the reach direction.
    const arm = new THREE.BoxGeometry(ARM_LENGTH, 0.08, 0.08);
    arm.rotateY(-Math.atan2(uz, ux));
    arm.translate(from.x + ux * ARM_LENGTH * 0.5, armY, from.z + uz * ARM_LENGTH * 0.5);
    fittingGeos.push(arm);

    // Hood: a cone, wide end down, capping the bulb.
    const hood = new THREE.ConeGeometry(HOOD_RADIUS, HOOD_HEIGHT, 8, 1, true);
    hood.translate(headX, armY - HOOD_HEIGHT * 0.5, headZ);
    fittingGeos.push(hood);

    const bulbY = armY - HOOD_HEIGHT * 0.75;
    const bulb = new THREE.SphereGeometry(BULB_RADIUS, 8, 6);
    bulb.translate(headX, bulbY, headZ);
    bulbGeos.push(bulb);

    lamps.push({ position: new THREE.Vector3(headX, bulbY, headZ) });
  }

  if (!lamps.length) return noop;

  const fittingMesh = new THREE.Mesh(
    mergeGeometries(fittingGeos, false),
    new THREE.MeshLambertMaterial({ color: FITTING_COLOUR, flatShading: true }),
  );
  fittingMesh.name = 'lamp-fittings';
  scene.add(fittingMesh);

  const bulbMaterial = new THREE.MeshBasicMaterial({
    color: BULB_COLOUR,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  // Opt out of atmosphere's unlit-material tint registry, same reasoning as
  // windows.js: this material's own opacity IS the darkness signal, and
  // tinting it too would fight that.
  bulbMaterial.userData.unlit = false;

  const bulbMesh = new THREE.Mesh(mergeGeometries(bulbGeos, false), bulbMaterial);
  bulbMesh.name = 'lamp-bulbs';
  scene.add(bulbMesh);

  // The pool. Allocated here, once, and never resized — see the header.
  const pool = [];
  for (let i = 0; i < POOL_SIZE; i++) {
    const light = new THREE.PointLight(LIGHT_COLOUR, 0, LIGHT_DISTANCE, 2);
    light.name = `lamp-pool-${i}`;
    scene.add(light);
    pool.push(light);
  }

  let glow = 0;
  let active = 0;

  // Takes atmosphere's raw windowGlow and applies the on/off curve. Both the
  // emissive bulbs and the pool read the SAME post-curve value, so a lamp can
  // never be a lit bulb throwing no light, or vice versa.
  function setGlow(windowGlow) {
    glow = lampOutput(windowGlow);
    bulbMaterial.opacity = glow;
  }

  const nearest = [];

  function update() {
    // Reassign the pool to the nearest lamps. 46 candidates against a
    // distance check is nothing next to a single draw call, so this is a
    // plain scan rather than a spatial index.
    nearest.length = 0;
    const cx = camera.position.x;
    const cz = camera.position.z;
    for (let i = 0; i < lamps.length; i++) {
      const p = lamps[i].position;
      const d2 = (p.x - cx) * (p.x - cx) + (p.z - cz) * (p.z - cz);
      if (d2 > POOL_RANGE * POOL_RANGE) continue;
      nearest.push({ d2, p });
    }
    nearest.sort((a, b) => a.d2 - b.d2);

    active = 0;
    for (let i = 0; i < pool.length; i++) {
      const hit = nearest[i];
      if (hit && glow > 0) {
        pool[i].position.copy(hit.p);
        pool[i].intensity = glow * LIGHT_PEAK;
        active++;
      } else {
        // Never removed from the scene — only dimmed. Removing would change
        // the light count and rebuild every shader.
        pool[i].intensity = 0;
      }
    }
  }

  return {
    enabled: true,
    count: lamps.length,
    poolSize: pool.length,
    lamps,
    fittingMesh,
    bulbMesh,
    pool,
    setGlow,
    update,
    glow: () => glow,
    activeCount: () => active,
  };
}
