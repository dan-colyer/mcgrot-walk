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

// The palette maps, loaded once per boot and handed to GLTFLoader rather than
// left for it to fetch per model.
//
// Two things go wrong if you let the loader do it. Kenney's three cars each
// reference the same sibling `Textures/colormap.png` and GLTFLoader's texture
// cache is per-parser, so one boot fetched the same PNG three times. Worse,
// those fetches are still in flight long after the rest of the scene is up —
// the wrecks are the last thing to arrive. Navigate away inside that window
// and the browser cancels them, and GLTFLoader's catch logs "Couldn't load
// texture ..." with a bare `console.error` that no LoadingManager can
// intercept. Nothing is actually broken (the document is being destroyed),
// but it reddens any console-clean assertion and it can't be silenced at the
// source. Loading the maps here puts that failure path under our control: a
// cancelled load resolves to null, the wreck renders map-less for the frame
// or two the page has left, and the console stays quiet.
//
// `filters` mirrors each glb's own sampler block, because supplying the
// texture through a loader plugin skips the code in GLTFLoader that would
// otherwise apply it. Colour space still comes from GLTFLoader (assignTexture
// stamps SRGB on whatever the plugin returns).
const PALETTES = {
  // Kenney: sampler { minFilter: 9987 }, everything else glTF defaults.
  kit: {
    path: 'cars/Textures/colormap.png',
    filters: { minFilter: THREE.LinearMipmapLinearFilter, magFilter: THREE.LinearFilter },
  },
  // poly.pizza bus: sampler { magFilter: 9729, minFilter: 9986, wrap 10497 }.
  // Its map is embedded in the glb; scripts/extract-glb-texture.mjs lifted
  // those exact bytes out to a sibling PNG so it loads like the others.
  bus: {
    path: 'cars/Textures/bus.png',
    filters: { minFilter: THREE.NearestMipmapLinearFilter, magFilter: THREE.LinearFilter },
  },
};

// Sourced assets (assets/cars/): sedan/hatchback/van from Kenney's Car Kit
// (CC0, kenney.nl); bus from poly.pizza m/4CPpvEmrMoF, "Poly by Google",
// CC-BY 3.0 — the one non-CC0 model, attributed on the credits page.
// targetLen = real-world metres the model is scaled to (kits arrive in
// arbitrary units).
const MODELS = [
  { file: 'cars/sedan.glb', kind: 'car', targetLen: 4.3, palette: 'kit' },
  { file: 'cars/hatchback-sports.glb', kind: 'car', targetLen: 3.9, palette: 'kit' },
  { file: 'cars/van.glb', kind: 'van', targetLen: 5.4, palette: 'kit' },
  { file: 'cars/bus.glb', kind: 'bus', targetLen: 11, palette: 'bus' },
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

  // Lazy and memoised: the first model to ask for a palette starts its load,
  // the rest share the promise. Not started alongside the glbs, because in
  // the single-file artifact no model parses at all — fetching a map nobody
  // can use would just add two more 404s to a build that has no wrecks.
  const loaded = {};
  const palette = (name) => (loaded[name] ??= loadPalette(assets, PALETTES[name]));

  const load = (m) => {
    const loader = new GLTFLoader();
    loader.register(() => new PalettePlugin(() => palette(m.palette)));
    return loader.loadAsync(assetUrl(assets, m.file)).then((gltf) => prep(gltf.scene, m)).catch(() => null);
  };

  Promise.all(MODELS.map(load)).then((prepped) => {
    const byKind = {};
    for (let i = 0; i < MODELS.length; i++) {
      if (prepped[i]) (byKind[MODELS[i].kind] ??= []).push(prepped[i]);
    }
    if (!byKind.car && !byKind.van && !byKind.bus) return; // assets absent (single-file artifact)
    placeAll(byKind, line, group, world.groundHeight);
  });

  return { group };
}

// Answer every texture request with a map we already hold. GLTFLoader takes
// the first non-null result from its plugins, and a pending promise counts —
// so the parser never reads sourceDef.uri, never builds a blob from the
// embedded copy, and never opens a request of its own. Each of these models
// has exactly one texture, so answering unconditionally is correct.
//
// `get` is a thunk rather than the promise itself, so a model that never
// parses never triggers a palette fetch.
class PalettePlugin {
  constructor(get) {
    this.name = 'mcgrot_palette';
    this.get = get;
  }
  loadTexture() {
    return this.get();
  }
}

// Resolves to a Texture, or to null if the image never arrived — a 404 in a
// build that didn't ship it, or the page going away mid-flight. Both are
// deliberately quiet: null propagates through GLTFLoader's assignTexture as
// "no map", which is what the map-less fallback in wreckify already handles.
function loadPalette(assets, spec) {
  return new Promise((resolve) => {
    new THREE.TextureLoader().load(
      assetUrl(assets, spec.path),
      (tex) => {
        tex.flipY = false; // glTF convention; TextureLoader defaults to true
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.wrapS = tex.wrapT = THREE.RepeatWrapping; // glTF default, not three's
        tex.magFilter = spec.filters.magFilter;
        tex.minFilter = spec.filters.minFilter;
        tex.needsUpdate = true;
        resolve(tex);
      },
      undefined,
      () => resolve(null)
    );
  });
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

function placeAll(byKind, line, group, groundHeight) {
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
      const px = s.point[0] + -tz * side * (PARK_OFFSET + rand() * 0.7);
      const pz = s.point[1] + tx * side * (PARK_OFFSET + rand() * 0.7);
      clone.position.set(px, groundHeight ? groundHeight(px, pz) : 0, pz);
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
      const by = groundHeight ? groundHeight(s.point[0], s.point[1]) : 0;
      b.position.set(s.point[0], by, s.point[1]);
      b.rotation.y = Math.atan2(s.tangent[0], s.tangent[1]) + 0.06;
      b.rotation.z = 0.07;
      group.add(b);
    }
  }
}
