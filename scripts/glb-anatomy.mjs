// Where is the body in this mesh?
//
//   node scripts/glb-anatomy.mjs assets/characters/rab-form.glb
//
// G1 needs to split a character into limbs (the segmented candidate) or place
// bones in it (the skinned one), and both need to know where the head, arms
// and legs actually ARE. These are Trellis reconstructions of a generated
// image, not modelled figures: nothing guarantees a T-pose, a symmetric
// silhouette, or that the legs are separated at all. If the legs are fused
// into a single column, segmenting at the hip produces one leg, and the
// segmented candidate is dead before it is written.
//
// So this measures rather than assumes. It normalises exactly as
// src/characters.js's normalise() does — scale to unit height, centre x/z,
// drop min-y to 0 — then reports, per horizontal band: vertex count, x extent,
// z extent, and the number of DISCONNECTED x-clusters. That last column is the
// one that answers the leg question.
//
// Hand-rolled glb reader, same reasoning as scripts/glb-stats.mjs: GLTFLoader
// wants a DOM and this only has to walk the JSON chunk and one accessor.

import { readFileSync } from 'fs';
import { pathToFileURL } from 'url';

const COMPONENT = { 5120: Int8Array, 5121: Uint8Array, 5122: Int16Array, 5123: Uint16Array, 5125: Uint32Array, 5126: Float32Array };
const NUM_COMPONENTS = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT4: 16 };

export function readGlb(path) {
  const buf = readFileSync(path);
  if (buf.readUInt32LE(0) !== 0x46546c67) throw new Error(`${path}: not a glb`);
  let off = 12, json = null, bin = null;
  while (off < buf.length) {
    const len = buf.readUInt32LE(off), type = buf.readUInt32LE(off + 4);
    const payload = buf.subarray(off + 8, off + 8 + len);
    if (type === 0x4e4f534a) json = JSON.parse(payload.toString('utf8'));
    else if (type === 0x004e4942) bin = payload;
    off += 8 + len + ((4 - (len % 4)) % 4) * 0;
    off += (4 - (off % 4)) % 4;
  }
  return { json, bin };
}

export function accessor(gltf, bin, index) {
  const acc = gltf.accessors[index];
  const view = gltf.bufferViews[acc.bufferView];
  const Type = COMPONENT[acc.componentType];
  const n = NUM_COMPONENTS[acc.type];
  const start = (view.byteOffset || 0) + (acc.byteOffset || 0);
  // Interleaved data has a byteStride; these meshes are tightly packed, but
  // reading the stride rather than assuming it costs nothing and stops this
  // silently returning garbage on a mesh that is not.
  const stride = view.byteStride;
  if (stride && stride !== n * Type.BYTES_PER_ELEMENT) {
    const out = new Type(acc.count * n);
    for (let i = 0; i < acc.count; i++) {
      const o = start + i * stride;
      for (let c = 0; c < n; c++) out[i * n + c] = new Type(bin.buffer, bin.byteOffset + o + c * Type.BYTES_PER_ELEMENT, 1)[0];
    }
    return out;
  }
  return new Type(bin.buffer, bin.byteOffset + start, acc.count * n);
}

// Normalised positions: unit height, centred in x/z, feet at y=0. Matches
// src/characters.js normalise() so anything measured here is in the same frame
// the game will place the mesh in.
export function normalisedPositions(path) {
  const { json, bin } = readGlb(path);
  const prim = json.meshes[0].primitives[0];
  const raw = accessor(json, bin, prim.attributes.POSITION);
  const n = raw.length / 3;

  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity, minZ = Infinity, maxZ = -Infinity;
  for (let i = 0; i < n; i++) {
    const x = raw[i * 3], y = raw[i * 3 + 1], z = raw[i * 3 + 2];
    if (x < minX) minX = x; if (x > maxX) maxX = x;
    if (y < minY) minY = y; if (y > maxY) maxY = y;
    if (z < minZ) minZ = z; if (z > maxZ) maxZ = z;
  }
  const s = 1 / (maxY - minY || 1);
  const cx = (minX + maxX) / 2, cz = (minZ + maxZ) / 2;

  const out = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    out[i * 3] = (raw[i * 3] - cx) * s;
    out[i * 3 + 1] = (raw[i * 3 + 1] - minY) * s;
    out[i * 3 + 2] = (raw[i * 3 + 2] - cz) * s;
  }
  return { pos: out, count: n, indices: prim.indices !== undefined ? accessor(json, bin, prim.indices) : null };
}

// How many separated runs of occupied x-cells are there in this band? Two legs
// read as 2; a skirt, a robe or fused legs read as 1.
function xClusters(xs, gap = 0.035) {
  if (!xs.length) return 0;
  const sorted = [...xs].sort((a, b) => a - b);
  let clusters = 1;
  for (let i = 1; i < sorted.length; i++) if (sorted[i] - sorted[i - 1] > gap) clusters++;
  return clusters;
}

// Entry-point guard, not just an argv check. Guarding on `process.argv[2]`
// alone meant that importing this module from scripts/segment-glb.mjs ran its
// CLI with the IMPORTER's arguments — `segment-glb.mjs rab` tried to open a
// file called "rab".
const isMain = import.meta.url === pathToFileURL(process.argv[1] || '').href;
if (isMain && process.argv[2]) {
  for (const path of process.argv.slice(2)) {
    const { pos, count } = normalisedPositions(path);
    console.log(`\n${path}  (${count} vertices, normalised to unit height)`);
    console.log('  band        verts   x-extent      z-extent   x-clusters');
    const BANDS = 20;
    for (let b = BANDS - 1; b >= 0; b--) {
      const lo = b / BANDS, hi = (b + 1) / BANDS;
      const xs = [];
      let zmin = Infinity, zmax = -Infinity;
      for (let i = 0; i < count; i++) {
        const y = pos[i * 3 + 1];
        if (y < lo || y >= hi) continue;
        xs.push(pos[i * 3]);
        const z = pos[i * 3 + 2];
        if (z < zmin) zmin = z; if (z > zmax) zmax = z;
      }
      if (!xs.length) { console.log(`  ${lo.toFixed(2)}-${hi.toFixed(2)}      0`); continue; }
      const xmin = Math.min(...xs), xmax = Math.max(...xs);
      const bar = '#'.repeat(Math.max(1, Math.round((xmax - xmin) * 40)));
      console.log(`  ${lo.toFixed(2)}-${hi.toFixed(2)}  ${String(xs.length).padStart(5)}  ` +
        `${xmin.toFixed(2)}..${xmax.toFixed(2)}  ${zmin.toFixed(2)}..${zmax.toFixed(2)}  ` +
        `${String(xClusters(xs)).padStart(3)}  ${bar}`);
    }
  }
}
