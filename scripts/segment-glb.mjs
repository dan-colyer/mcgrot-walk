// Split a character mesh into animatable parts, offline. G1 candidate A2.
//
//   node scripts/segment-glb.mjs                  # all seven characters
//   node scripts/segment-glb.mjs rab mcgrot       # named ones
//
// WHY THIS IS POSSIBLE AT ALL, and it was not obvious. The glbs are single
// primitives — one mesh, one material, one texture, 2.6k-7k triangles — and
// they are Trellis reconstructions of a generated image, so nothing guaranteed
// a separable body. `node scripts/glb-anatomy.mjs` settled it by measuring
// cross-sections: at ankle height every figure is two clearly separated
// masses, and by a third of the way up those have fused into a single ring.
//
// That ring is the COAT. docs/CANON.md dresses this cast in heavy coats and
// aprons and the geometry agrees, which is the finding G1 turns on: only the
// lower legs need to articulate. Everything above the hem is one mass that
// sways. A coated figure is the cheapest possible thing to animate, and it is
// what we happen to have.
//
// WHAT IT WRITES. A sidecar, not a new mesh: `<name>-segments.json`, holding
// the part pivots and one byte per triangle saying which part it belongs to.
// The runtime keeps the original glb's position/normal/uv buffers SHARED
// across all parts and gives each part its own index buffer — so segmentation
// costs six index arrays and no duplicated vertex data. Rotation about a joint
// comes from putting the part's group AT the pivot and its mesh at minus the
// pivot; no positions are ever rewritten.

import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { readGlb, accessor } from './glb-anatomy.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const CHARACTERS = ['kenneth', 'mcgrot', 'morag', 'pomple', 'rab', 'runt', 'slab'];

export const PARTS = ['torso', 'head', 'armL', 'armR', 'legL', 'legR'];

// Fractions of normalised height. Measured from the anatomy tables rather than
// picked: the hem where the legs fuse sits near a third of the way up on every
// biped in the set, and the neck is found per-mesh below rather than assumed.
const HEM_Y = 0.22;          // below this, two separable legs
// Where the leg SWINGS from, as opposed to where its geometry starts. See the
// pivot note below — this is roughly mid-torso, inside the coat.
const VIRTUAL_HIP_Y = 0.46;
const ARM_SEARCH_LO = 0.40;  // arms are side lobes between these heights
const ARM_SEARCH_HI = 0.80;

// A quadruped is not a biped and must not be segmented as one. Pomplé's legs
// do not fuse into a coat, his mass is horizontal, and an arm search on him
// finds nothing meaningful. He is emitted as a single rigid part so the
// runtime has something valid to load, and G6 gives him his own treatment —
// his head-turn is load-bearing and a biped rig would not provide it.
const QUADRUPEDS = new Set(['pomple']);

// Find the neck: the narrowest horizontal slice in the upper half. Adaptive
// because these heads differ a lot in scale (headScale runs 1.0-1.4 across the
// catalog) and a constant would decapitate some and behead none of the others.
function findNeck(pos, count) {
  let best = 0.82, bestWidth = Infinity;
  for (let y = 0.62; y <= 0.90; y += 0.01) {
    let lo = Infinity, hi = -Infinity, n = 0;
    for (let i = 0; i < count; i++) {
      const yy = pos[i * 3 + 1];
      if (Math.abs(yy - y) > 0.015) continue;
      const x = pos[i * 3];
      if (x < lo) lo = x; if (x > hi) hi = x;
      n++;
    }
    if (n < 12) continue;               // too sparse to trust
    const w = hi - lo;
    if (w < bestWidth) { bestWidth = w; best = y; }
  }
  return best;
}

// Half-width of the torso in the arm band, so a triangle can be called "arm"
// by being outside it. Uses a percentile rather than the extreme, because the
// extreme IS the arm.
function torsoHalfWidth(pos, count) {
  const xs = [];
  for (let i = 0; i < count; i++) {
    const y = pos[i * 3 + 1];
    if (y < ARM_SEARCH_LO || y > ARM_SEARCH_HI) continue;
    xs.push(Math.abs(pos[i * 3]));
  }
  if (xs.length < 20) return Infinity;   // no arms findable — everything torso
  xs.sort((a, b) => a - b);
  return xs[Math.floor(xs.length * 0.72)];
}

function segment(name) {
  const path = join(root, `assets/characters/${name}-form.glb`);
  const { json, bin } = readGlb(path);
  const prim = json.meshes[0].primitives[0];
  const raw = accessor(json, bin, prim.attributes.POSITION);
  const idx = prim.indices !== undefined ? accessor(json, bin, prim.indices) : null;
  const vcount = raw.length / 3;

  // Same normalisation as src/characters.js normalise(): unit height, centred
  // x/z, feet at 0. Part assignment must be done in the frame the game uses.
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity, minZ = Infinity, maxZ = -Infinity;
  for (let i = 0; i < vcount; i++) {
    const x = raw[i * 3], y = raw[i * 3 + 1], z = raw[i * 3 + 2];
    if (x < minX) minX = x; if (x > maxX) maxX = x;
    if (y < minY) minY = y; if (y > maxY) maxY = y;
    if (z < minZ) minZ = z; if (z > maxZ) maxZ = z;
  }
  const s = 1 / (maxY - minY || 1);
  const cx = (minX + maxX) / 2, cz = (minZ + maxZ) / 2;
  const pos = new Float32Array(vcount * 3);
  for (let i = 0; i < vcount; i++) {
    pos[i * 3] = (raw[i * 3] - cx) * s;
    pos[i * 3 + 1] = (raw[i * 3 + 1] - minY) * s;
    pos[i * 3 + 2] = (raw[i * 3 + 2] - cz) * s;
  }

  const triCount = idx ? idx.length / 3 : vcount / 3;
  const triPart = new Uint8Array(triCount);

  if (QUADRUPEDS.has(name)) {
    return { name, quadruped: true, parts: [{ name: 'torso', pivot: [0, 0, 0] }],
             triPart, triCount, vcount };
  }

  const neckY = findNeck(pos, vcount);
  const halfW = torsoHalfWidth(pos, vcount);

  // Accumulators for pivots: the joint is the TOP of a limb's own extent, at
  // that limb's mean lateral position. Deriving it from the triangles actually
  // assigned means a short-armed figure gets a low shoulder for free.
  const acc = {};
  for (const p of PARTS) acc[p] = { n: 0, sx: 0, sz: 0, maxY: -Infinity, minY: Infinity };

  for (let t = 0; t < triCount; t++) {
    const a = idx ? idx[t * 3] : t * 3;
    const b = idx ? idx[t * 3 + 1] : t * 3 + 1;
    const c = idx ? idx[t * 3 + 2] : t * 3 + 2;
    const x = (pos[a * 3] + pos[b * 3] + pos[c * 3]) / 3;
    const y = (pos[a * 3 + 1] + pos[b * 3 + 1] + pos[c * 3 + 1]) / 3;
    const z = (pos[a * 3 + 2] + pos[b * 3 + 2] + pos[c * 3 + 2]) / 3;

    let part;
    if (y >= neckY) part = 'head';
    else if (y < HEM_Y) part = x < 0 ? 'legL' : 'legR';
    else if (Math.abs(x) > halfW && y >= ARM_SEARCH_LO && y <= ARM_SEARCH_HI) part = x < 0 ? 'armL' : 'armR';
    else part = 'torso';

    triPart[t] = PARTS.indexOf(part);
    const A = acc[part];
    A.n++; A.sx += x; A.sz += z;
    if (y > A.maxY) A.maxY = y;
    if (y < A.minY) A.minY = y;
  }

  const parts = PARTS.map((p) => {
    const A = acc[p];
    if (!A.n) return { name: p, pivot: [0, 0, 0], tris: 0 };
    let pivot;
    if (p === 'torso') pivot = [0, HEM_Y, 0];                   // sways about the hip
    else if (p === 'head') pivot = [0, neckY, A.sz / A.n];      // turns about the neck
    else if (p.startsWith('arm')) pivot = [A.sx / A.n, A.maxY, A.sz / A.n];   // shoulder
    // A VIRTUAL HIP, well above the visible leg. Taking the top of the leg's
    // own triangles put the pivot at the coat hem (y ~= 0.22), which is where
    // the geometry starts, not where the joint is. A stub rotating about its
    // own top describes a steep arc, so the boot lifted clear of the ground and
    // swung out from under the coat — the first strip read as detached boots
    // under a static coat rather than as a walk. A longer lever gives a flatter
    // arc at the foot, and the coat hides the fact that the upper leg is not
    // there. This is the finding that makes the segmented candidate work.
    else pivot = [A.sx / A.n, VIRTUAL_HIP_Y, A.sz / A.n];
    return { name: p, pivot: pivot.map((v) => +v.toFixed(4)), tris: A.n };
  });

  return { name, quadruped: false, neckY: +neckY.toFixed(4), torsoHalfWidth: +halfW.toFixed(4),
           parts, triPart, triCount, vcount };
}

const wanted = process.argv.slice(2).length ? process.argv.slice(2) : CHARACTERS;
for (const name of wanted) {
  const r = segment(name);
  const out = {
    name: r.name,
    quadruped: r.quadruped,
    neckY: r.neckY,
    parts: r.parts.map(({ name: n, pivot, tris }) => ({ name: n, pivot, tris })),
    triCount: r.triCount,
    // One byte per triangle. base64 of ~5k bytes is ~7KB — cheaper than any
    // scheme that duplicates vertices to make parts self-contained.
    triPart: Buffer.from(r.triPart).toString('base64'),
  };
  const dest = join(root, `assets/characters/${name}-segments.json`);
  writeFileSync(dest, JSON.stringify(out));
  const dist = r.parts.map((p) => `${p.name} ${p.tris}`).join('  ');
  console.log(`${name.padEnd(9)} ${r.quadruped ? 'QUADRUPED (single part)' : `neck ${r.neckY}  halfW ${r.torsoHalfWidth}  |  ${dist}`}`);
}
