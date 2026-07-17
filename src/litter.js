// Comics as litter. McGrot's output doesn't just live in vendors' hands — it
// blows about the street. A couple of dozen issues lie in the gutters and on
// the slabs; walk up and read one yourself. If nobody's holding it, a passing
// Leither may take it upon themselves to wander over and read it aloud
// (see leithers.summonReader).
//
// Seeded layout, lazy textures (same discipline as the vendors' comics).

import * as THREE from 'three';
import { assetUrl } from './assets.js';
import { paperPlaceholder } from './npcs.js';

const COUNT = 24;
// Ground-level and small (0.42x0.58m, often viewed near edge-on), so it loses
// legibility at a shorter range than a vendor's held comic despite the same
// fog — see COMIC_LOAD_RANGE in npcs.js for the fog-distance math.
const LOAD_RANGE = 70;
const START = 60;
const END_MARGIN = 70;

const rand = (() => {
  let s = 0x117e4a;
  return () => {
    s |= 0; s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
})();

const texLoader = new THREE.TextureLoader();

export function buildLitter(assets, world, scene) {
  const comics = (assets.catalog && assets.catalog.comics) || [];
  const streetLine = world.streetLine || [];
  if (!comics.length || streetLine.length < 2) {
    return { items: [], update() {}, nearestItem: () => null };
  }
  const lines = assets.comicLines || {};

  // Prefer comics we hold verbatim lines for (the adoptive reading needs
  // material), padded with the rest; seeded shuffle-by-pick.
  const withLines = comics.filter((c) => lines[c.id] && lines[c.id].length >= 3);
  const pool = withLines.length >= COUNT ? [...withLines] : [...withLines, ...comics.filter((c) => !lines[c.id])];
  const picked = [];
  while (picked.length < Math.min(COUNT, pool.length)) {
    picked.push(pool.splice(Math.floor(rand() * pool.length), 1)[0]);
  }

  const len = chainLength(streetLine);
  const group = new THREE.Group();
  group.name = 'litter-comics';
  scene.add(group);

  const items = picked.map((comic, i) => {
    const s = START + rand() * (len - START - END_MARGIN);
    const sm = sampleChain(streetLine, s);
    if (!sm) return null;
    const [tx, tz] = sm.tangent;
    const side = rand() < 0.5 ? 1 : -1;
    const off = 3.5 + rand() * 6;
    const x = sm.point[0] + -tz * side * off;
    const z = sm.point[1] + tx * side * off;

    const mat = new THREE.MeshBasicMaterial({ map: paperPlaceholder(), side: THREE.DoubleSide });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(0.42, 0.58), mat);
    mesh.rotation.x = -Math.PI / 2;
    mesh.rotation.z = rand() * Math.PI * 2;
    // A few lie crumpled-tilted rather than dead flat.
    if (rand() < 0.3) mesh.rotation.y = (rand() - 0.5) * 0.5;
    mesh.position.set(x, 0.055 + rand() * 0.01, z);
    group.add(mesh);

    return {
      comic,
      lines: lines[comic.id] || [],
      mesh,
      x, z,
      chainage: s,
      loaded: false,
      adopted: false,
      load() {
        if (this.loaded) return;
        this.loaded = true;
        texLoader.load(assetUrl(assets, comic.image), (tex) => {
          tex.colorSpace = THREE.SRGBColorSpace;
          mat.map = tex;
          mat.color.set(0xffffff);
          mat.needsUpdate = true;
        });
      },
    };
  }).filter(Boolean);

  function update(camPos) {
    if (!camPos) return;
    for (const it of items) {
      if (!it.loaded && Math.hypot(camPos.x - it.x, camPos.z - it.z) < LOAD_RANGE) it.load();
    }
  }

  function nearestItem(px, pz, range) {
    let best = null;
    let bd = range;
    for (const it of items) {
      const d = Math.hypot(px - it.x, pz - it.z);
      if (d < bd) { bd = d; best = it; }
    }
    return best;
  }

  return { items, update, nearestItem };
}

function chainLength(line) {
  let len = 0;
  for (let i = 1; i < line.length; i++) {
    len += Math.hypot(line[i][0] - line[i - 1][0], line[i][1] - line[i - 1][1]);
  }
  return len;
}

function sampleChain(line, target) {
  let acc = 0;
  for (let i = 0; i < line.length - 1; i++) {
    const [ax, az] = line[i];
    const [bx, bz] = line[i + 1];
    const dx = bx - ax, dz = bz - az;
    const L = Math.hypot(dx, dz);
    if (acc + L >= target) {
      const t = L > 0 ? (target - acc) / L : 0;
      return { point: [ax + dx * t, az + dz * t], tangent: [dx / (L || 1), dz / (L || 1)] };
    }
    acc += L;
  }
  return null;
}
