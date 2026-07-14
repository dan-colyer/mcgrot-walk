// Shopfront façade quads for McGrot Walk.
//
// buildShopfronts(assets, world, scene) drops a texture-atlas quad on the
// street-facing ground floor of every building near the centreline. Real Leith
// Walk shopfront photos (CC-licensed, from Wikimedia Commons) are tiled into one
// atlas (assets/shopfronts/atlas.jpg + atlas.json); each quad samples one tile.
//
// Everything merges into a SINGLE geometry / draw call. The atlas is absent in
// the 3-comic single-file artifact (assets.shopfronts === null) — this no-ops.
//
// Tile choice is a deterministic hash of (buildingIdx, segmentIdx) so the street
// layout stays stable across reloads (the seeded-scenery rule).

import * as THREE from 'three';
import { assetUrl } from './assets.js';

const STREET_RANGE = 25;   // metres — only façades within this of the centreline
const MIN_EDGE = 2.0;      // skip footprint edges shorter than this
const FACING_MIN = 0.35;   // wall normal · direction-to-street; below this it's a side/back wall
const HEIGHT = 3.2;        // one storey (matches world.js LEVEL_HEIGHT)
const BASE_Y = 0.05;       // sit just above the street ribbon (STREET_Y = 0.03)
const OUTWARD_EPS = 0.12;  // nudge proud of the wall (toward street) to avoid z-fight
const MAX_QUADS = 900;     // safety cap; merged geometry stays 1 draw call regardless

export function buildShopfronts(assets, world, scene) {
  const layout = assets && assets.shopfronts;
  const buildings = (assets && assets.leith && assets.leith.buildings) || [];
  const nearest = world && world.nearestStreetPoint;
  if (!layout || !layout.count || !buildings.length || !nearest) {
    return { group: null, count: 0 };
  }

  const { cols, rows, tileW = 512, tileH = 256, count } = layout;
  const atlasW = cols * tileW;
  const atlasH = rows * tileH;
  const uInset = 0.5 / atlasW; // half-texel inset kills neighbour-tile bleed
  const vInset = 0.5 / atlasH;

  // Quad width follows the tile aspect, so a shopfront photo is never stretched:
  // 2:1 tiles × 3.2m storey height = ~6.4m, about one real shop unit.
  const segTarget = HEIGHT * (tileW / tileH);

  const positions = [];
  const uvs = [];
  const indices = [];
  let quadCount = 0;

  for (let bi = 0; bi < buildings.length && quadCount < MAX_QUADS; bi++) {
    const fp = buildings[bi] && buildings[bi].footprint;
    if (!fp || fp.length < 3) continue;

    // Centroid gives the TRUE outward normal of each wall (the perpendicular
    // pointing away from the building's interior). Deriving "outward" from the
    // street instead would make every wall look street-facing, side walls included.
    let cx = 0;
    let cz = 0;
    for (const p of fp) { cx += p[0]; cz += p[1]; }
    cx /= fp.length;
    cz /= fp.length;

    for (let i = 0; i < fp.length && quadCount < MAX_QUADS; i++) {
      const a = fp[i];
      const b = fp[(i + 1) % fp.length];
      const ex = b[0] - a[0];
      const ez = b[1] - a[1];
      const len = Math.hypot(ex, ez);
      if (len < MIN_EDGE) continue;

      const mx = (a[0] + b[0]) / 2;
      const mz = (a[1] + b[1]) / 2;
      const np = nearest(mx, mz);
      if (!np || !np.point || np.distance > STREET_RANGE) continue;

      // A quad wound from (start → start+edge) has face normal ∝ (-dz, 0, dx).
      // So to keep the TEXTURE readable from the street we must walk the edge in
      // the direction whose winding normal already points outward — flipping the
      // normal alone would leave the camera looking at the quad's back face, i.e.
      // every shopfront on one side of the street rendered mirror-reversed.
      const inv = 1 / len;
      let nx = -ez * inv;
      let nz = ex * inv;
      let sx = a[0];
      let sz = a[1];
      let dx = ex;
      let dz = ez;
      if (nx * (mx - cx) + nz * (mz - cz) < 0) {
        nx = -nx; nz = -nz;      // outward normal...
        sx = b[0]; sz = b[1];    // ...and reverse the walk so the winding agrees
        dx = -ex; dz = -ez;
      }

      // Keep only walls that actually look at the street — no shopfronts on backs.
      const dsx = np.point[0] - mx;
      const dsz = np.point[1] - mz;
      const dl = Math.hypot(dsx, dsz) || 1;
      if ((nx * dsx + nz * dsz) / dl < FACING_MIN) continue;

      // Tile the frontage into ~segTarget-wide quads, each a hashed atlas tile.
      const nSeg = Math.max(1, Math.round(len / segTarget));
      for (let s = 0; s < nSeg && quadCount < MAX_QUADS; s++) {
        const t0 = s / nSeg;
        const t1 = (s + 1) / nSeg;
        const p0x = sx + dx * t0 + nx * OUTWARD_EPS;
        const p0z = sz + dz * t0 + nz * OUTWARD_EPS;
        const p1x = sx + dx * t1 + nx * OUTWARD_EPS;
        const p1z = sz + dz * t1 + nz * OUTWARD_EPS;

        const tile = hashTile(bi, i * 31 + s, count);
        const col = tile % cols;
        const row = Math.floor(tile / cols);
        const u0 = col / cols + uInset;
        const u1 = (col + 1) / cols - uInset;
        const vBot = 1 - (row + 1) / rows + vInset; // atlas is row-major from the top;
        const vTop = 1 - row / rows - vInset;        // flipY (default) puts row 0 at V=1

        const base = quadCount * 4;
        // bottom-left, bottom-right, top-right, top-left
        positions.push(p0x, BASE_Y, p0z,  p1x, BASE_Y, p1z,  p1x, HEIGHT, p1z,  p0x, HEIGHT, p0z);
        uvs.push(u0, vBot,  u1, vBot,  u1, vTop,  u0, vTop);
        indices.push(base, base + 1, base + 2, base, base + 2, base + 3);
        quadCount++;
      }
    }
  }

  if (quadCount === 0) return { group: null, count: 0 };

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  geo.computeBoundingSphere();

  const texture = new THREE.TextureLoader().load(assetUrl(assets, 'shopfronts/atlas.jpg'));
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;

  // Unlit so the shopfronts read through the murk (like the comic/face planes).
  // The desaturate/darken/rust grade is baked into the atlas by
  // build-shopfront-atlas.mjs, so the material doesn't tint again on top.
  // DoubleSide sidesteps per-edge winding — cheap for a few hundred quads.
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    side: THREE.DoubleSide,
    fog: true,
  });

  const mesh = new THREE.Mesh(geo, material);
  mesh.name = 'shopfronts';
  scene.add(mesh);
  return { group: mesh, count: quadCount };
}

// Deterministic tile pick so the street layout is identical every reload.
function hashTile(bi, seg, count) {
  let h = (bi * 73856093) ^ (seg * 19349663);
  h = Math.imul(h ^ (h >>> 13), 0x85ebca6b);
  h ^= h >>> 16;
  return (h >>> 0) % count;
}
