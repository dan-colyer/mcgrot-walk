// Rain — E2c.2. ONE camera-following THREE.Points system, wrapping in a box
// around the player; particle COUNT is constant, intensity changes fall
// speed/opacity/size (streak length), never count (see src/scenery.js's
// smoke idiom — individual THREE.Sprites, one draw call each, fine for eight
// puffs, catastrophic at rain scale).
//
// THREE.Points, not InstancedMesh: src/debug.js's computeGeomHash folds every
// InstancedMesh's instanceMatrix into the determinism hash. Rain's positions
// are camera-relative and recomputed every frame — hashing them would make
// the check fail on cosmetic grounds, not a real regression. THREE.Points
// isn't caught by that traversal at all (it only walks isInstancedMesh), one
// draw call regardless of particle count, and the natural primitive for
// "lots of tiny falling things" anyway.
//
// DETERMINISM: a drop's Y must be a pure function of the stepped time `t` —
// never accumulated per-frame state — so a given (t, cameraPosition,
// intensity) always renders the same frame no matter how many frames ran
// earlier in the session. update() below never keeps a running position; it
// recomputes every particle from t and the current fall speed each call.

import * as THREE from 'three';

const PARTICLE_COUNT = 900;
const BOX_HALF_XZ = 16; // metres either side of the camera in X/Z — fixed footprint, always follows camera XZ, never wraps in X/Z
const BOX_HEIGHT = 20; // metres of fall height wrapped
const BOX_Y_OFFSET = -3; // box bottom sits this far below eye height, so drops are seen passing near the player's feet
// A drop's Y is a function of `t` (see the DETERMINISM note above), so any
// speed used in that function must be constant — if it tracked intensity,
// every setWeather() transition would sweep the speed term across ten
// seconds while `t` keeps growing with session length, and the phase term
// `fallSpeed * t` would jump by `t * Δv` per frame: fully re-randomised
// positions every frame, not falling rain (found and fixed in E2c.2.1 — see
// docs/ROADMAP.md). Intensity must stay confined to opacity/size only.
const FALL_SPEED = 13; // metres/second, constant regardless of intensity
const SIZE_MIN = 0.35;
const SIZE_MAX = 0.85;
const MAX_OPACITY = 0.5;

// Seeded PRNG, same construction as every other seeded-layout module in this
// project (world.js/scenery.js/cars.js) — deterministic across reloads, even
// though geomHash never hashes this object at all (see the note above).
function makeRand(seed) {
  let s = seed | 0;
  return () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function wrapf(v, m) {
  return ((v % m) + m) % m;
}

// A narrow vertical streak, soft on EVERY side — reads as a raindrop when
// drawn as a PointsMaterial sprite. THREE.Points always maps its texture
// onto a SQUARE sprite (gl_PointCoord runs 0..1 on both axes regardless of
// the source image's own aspect ratio), so a texture that only fades at top
// and bottom but stays fully opaque edge-to-edge across its width comes out
// as a hard-edged square once stretched back onto that square sprite — not
// a soft streak. Squashing the canvas's coordinate space horizontally
// before drawing a plain radial gradient turns that circle into a tall thin
// ellipse with soft falloff on all four sides, which is what actually reads
// as an elongated drop once mapped onto the square point.
function makeRainTexture() {
  const S = 32;
  const canvas = document.createElement('canvas');
  canvas.width = S;
  canvas.height = S;
  const ctx = canvas.getContext('2d');
  ctx.translate(S / 2, S / 2);
  ctx.scale(0.22, 1); // narrow the ellipse horizontally; gradient math below stays circular in this squashed space
  const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, S / 2);
  grad.addColorStop(0, 'rgba(200,210,220,0.85)');
  grad.addColorStop(0.55, 'rgba(200,210,220,0.4)');
  grad.addColorStop(1, 'rgba(200,210,220,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(-S / 2, -S / 2, S, S);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function createRain(camera) {
  const rand = makeRand(0x5a17ab);
  const seedX = new Float32Array(PARTICLE_COUNT);
  const seedY = new Float32Array(PARTICLE_COUNT);
  const seedZ = new Float32Array(PARTICLE_COUNT);
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    seedX[i] = (rand() - 0.5) * 2 * BOX_HALF_XZ;
    seedY[i] = rand() * BOX_HEIGHT;
    seedZ[i] = (rand() - 0.5) * 2 * BOX_HALF_XZ;
  }

  const positions = new Float32Array(PARTICLE_COUNT * 3);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    map: makeRainTexture(),
    size: SIZE_MIN,
    color: 0xaab4c0,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    sizeAttenuation: true,
  });
  // Unlit by construction, not by opt-out: atmosphere's tint registry only
  // scans obj.isMesh (src/atmosphere.js's scanForUnlitMaterials) and THREE.Points
  // is never a Mesh, so this material is never a candidate in the first place.

  const object = new THREE.Points(geo, material);
  object.name = 'rain';
  object.frustumCulled = false; // camera-relative box, always around the viewer
  object.visible = false;

  // Touches only this object's own material/visibility — called from
  // src/atmosphere.js's applyPalette, the same pattern as torch.setDarkness/
  // windows.setGlow. visible=false at intensity 0 is what keeps rain's draw
  // call out of every overcast/clear bookmark (E2c.2 acceptance criterion 3).
  function setIntensity(k) {
    const intensity = Math.max(0, Math.min(1, k));
    object.visible = intensity > 0;
    material.opacity = MAX_OPACITY * intensity;
    material.size = SIZE_MIN + (SIZE_MAX - SIZE_MIN) * intensity;
  }

  // Recomputes every particle's world position from `t` and the camera's
  // current XZ — never advances any state of its own, so it's safe to skip
  // entirely while invisible (nothing to render, nothing to keep in sync).
  function update(dt, t) {
    if (!object.visible) return;
    const cx = camera.position.x, cy = camera.position.y, cz = camera.position.z;
    const arr = geo.attributes.position.array;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const y = cy + BOX_Y_OFFSET + wrapf(seedY[i] - FALL_SPEED * t, BOX_HEIGHT);
      arr[i * 3] = cx + seedX[i];
      arr[i * 3 + 1] = y;
      arr[i * 3 + 2] = cz + seedZ[i];
    }
    geo.attributes.position.needsUpdate = true;
  }

  return { object, setIntensity, update };
}
