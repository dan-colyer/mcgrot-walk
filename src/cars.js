// Wrecked vehicles for McGrot Walk.
//
// The street reads as evacuated, not lived-in, partly because nothing is
// parked on it. This scatters abandoned low-poly vehicles (CC0 glbs in
// assets/cars/) down the parking lanes — and one dead bus on the tram rails,
// which is the roadworks gag finished properly: the tram never came, the
// buses stopped anyway.
//
// Placement is seeded by chainage along the same street chain the rails use,
// so the layout is identical on every reload (the seeded-scenery rule).
// Models load async and pop in after first render; everything else in the
// scene is already visible by then and the wrecks are background dressing.

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { assetUrl } from './assets.js';
import { sampleAt } from './road.js';

// Sourced assets (assets/cars/): sedan/hatchback/van from Kenney's Car Kit
// (CC0, kenney.nl); bus from poly.pizza m/4CPpvEmrMoF, "Poly by Google",
// CC-BY 3.0 — the one non-CC0 model, attributed on the credits page.
// targetLen = real-world metres the model is scaled to (kits arrive in
// arbitrary units).
const MODELS = [
  { file: 'cars/sedan.glb', kind: 'car', targetLen: 4.3 },
  { file: 'cars/hatchback-sports.glb', kind: 'car', targetLen: 3.9 },
  { file: 'cars/van.glb', kind: 'van', targetLen: 5.4 },
  { file: 'cars/bus.glb', kind: 'bus', targetLen: 11 },
];

const CAR_COUNT = 16;        // cars + vans down the parking lanes
const PARK_OFFSET = 6.1;     // metres from centreline — kerbside of the 7m carriageway
const BUS_CHAINAGE = 405;    // on the rails, well before they stop at 620
const ROADWORKS_GAP = [560, 700]; // keep the lanes clear around the works

// Seeded PRNG (same construction as road.js/world.js).
const rand = (() => {
  let s = 0xca55e77e;
  return () => {
    s |= 0; s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
})();

export function buildCars(assets, world, scene) {
  const line = world && world.streetLine;
  if (!line || line.length < 2) return { group: null };

  const group = new THREE.Group();
  group.name = 'cars';
  scene.add(group);

  const loader = new GLTFLoader();
  const load = (m) =>
    loader.loadAsync(assetUrl(assets, m.file)).then((gltf) => prep(gltf.scene, m)).catch(() => null);

  Promise.all(MODELS.map(load)).then((prepped) => {
    const byKind = {};
    for (let i = 0; i < MODELS.length; i++) {
      if (prepped[i]) (byKind[MODELS[i].kind] ??= []).push(prepped[i]);
    }
    if (!byKind.car && !byKind.van && !byKind.bus) return; // assets absent (single-file artifact)
    placeAll(byKind, line, group);
  });

  return { group };
}

// Normalise scale, convert materials to tinted Lambert (the kit glbs come as
// MeshStandardMaterial, which reads plasticky under this scene's lights and
// costs more; Lambert matches every other prop here).
function prep(root, m) {
  const box = new THREE.Box3().setFromObject(root);
  const size = box.getSize(new THREE.Vector3());
  const len = Math.max(size.x, size.z) || 1;
  const scale = m.targetLen / len;
  root.scale.setScalar(scale);
  root.updateMatrixWorld(true);
  const box2 = new THREE.Box3().setFromObject(root);
  root.position.y = -box2.min.y; // wheels on the tarmac whatever the kit's origin
  const wrapper = new THREE.Group();
  wrapper.add(root);
  return wrapper;
}

function wreckify(root, burned) {
  // Soot/rust tint, cloned per instance so vehicles don't share one paint job.
  // Tints must be far darker than looks right on paper: the kit's palette map
  // carries the colour and ACES exposure (1.46) lifts any mid multiply back to
  // showroom-bright.
  const tint = burned ? 0.05 + rand() * 0.04 : 0.18 + rand() * 0.2;
  const rust = rand() < 0.5 && !burned;
  root.traverse((o) => {
    if (!o.isMesh || !o.material) return;
    const src = o.material;
    const mat = new THREE.MeshLambertMaterial({
      map: src.map || null,
      color: (src.color ? src.color.clone() : new THREE.Color(0x888888)).multiplyScalar(tint),
    });
    if (rust) { mat.color.r = Math.min(1, mat.color.r * 1.35 + 0.03); mat.color.b *= 0.75; }
    o.material = mat;
  });
}

function placeAll(byKind, line, group) {
  const carPool = [...(byKind.car || []), ...(byKind.van || [])];

  if (carPool.length) {
    for (let i = 0; i < CAR_COUNT; i++) {
      const chain = 40 + rand() * 1160;
      if (chain > ROADWORKS_GAP[0] && chain < ROADWORKS_GAP[1]) continue;
      const s = sampleAt(line, chain);
      if (!s) continue;
      const side = rand() < 0.5 ? 1 : -1;
      const [tx, tz] = s.tangent;
      const clone = carPool[Math.floor(rand() * carPool.length)].clone(true);
      wreckify(clone, rand() < 0.12); // the odd one burned out
      clone.position.set(
        s.point[0] + -tz * side * (PARK_OFFSET + rand() * 0.7),
        0,
        s.point[1] + tx * side * (PARK_OFFSET + rand() * 0.7)
      );
      // Nose along the street, either way; a couple abandoned mid-manoeuvre.
      let yaw = Math.atan2(tx, tz) + (rand() < 0.5 ? Math.PI : 0);
      if (rand() < 0.15) yaw += (rand() - 0.5) * 1.2;
      clone.rotation.y = yaw + (rand() - 0.5) * 0.12;
      clone.rotation.z = (rand() - 0.5) * 0.05; // flat tyres, slumped springs
      group.add(clone);
    }
  }

  // THE BUS: dead centre on the tram alignment, burned out, slightly tipped.
  const bus = (byKind.bus || [])[0];
  if (bus) {
    const s = sampleAt(line, BUS_CHAINAGE);
    if (s) {
      const b = bus.clone(true);
      wreckify(b, true);
      b.position.set(s.point[0], 0, s.point[1]);
      b.rotation.y = Math.atan2(s.tangent[0], s.tangent[1]) + 0.06;
      b.rotation.z = 0.07;
      group.add(b);
    }
  }
}
