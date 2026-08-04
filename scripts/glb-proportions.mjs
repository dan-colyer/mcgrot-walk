// The SHAPE of a .glb, not just its cost.
//
//   node scripts/glb-proportions.mjs assets/characters/*.glb
//   node scripts/glb-proportions.mjs --profile assets/characters/rab-form.glb
//
// E3b needs each archetype's own build triple — how wide it already is, how
// big its head already is — so that per-NPC scaling is a RESIDUAL against the
// mesh's natural proportions rather than an absolute stretch applied to
// whatever Trellis happened to produce. Guessing those numbers from the
// generation prompt would be asserting them; this measures them.
//
// Same hand-rolled glTF walk as glb-stats.mjs, extended to decode POSITION
// accessors and apply node world transforms, because Trellis nests its mesh
// under a rotated node and the raw vertices are not scene-space.
import { readFileSync } from 'fs';

// Where along the figure to sample, chosen by reading `--profile` on all five
// archetypes rather than from anatomy. The torso peak sits at 0.40–0.50 on
// Rab and Runt but as high as 0.60–0.65 on Slab, who is all shoulder; taking
// the widest extent across 0.40–0.65 catches the peak for every one of them.
// The head band starts at 0.85 because that is the first slice clear of
// Slab's shoulders, and stops at 0.95 because the top slice is hat, not head.
const TORSO_BAND = [0.40, 0.65];
const HEAD_BAND = [0.85, 0.95];

function parse(path) {
  const buf = readFileSync(path);
  if (buf.readUInt32LE(0) !== 0x46546c67) throw new Error(`${path}: not a glb (bad magic)`);
  const jsonLen = buf.readUInt32LE(12);
  const gltf = JSON.parse(buf.subarray(20, 20 + jsonLen).toString('utf8'));
  // The BIN chunk follows the JSON chunk, both 4-byte aligned.
  let off = 20 + jsonLen;
  off += (4 - (off % 4)) % 4;
  let bin = null;
  while (off + 8 <= buf.length) {
    const len = buf.readUInt32LE(off);
    const type = buf.readUInt32LE(off + 4);
    if (type === 0x004e4942) { bin = buf.subarray(off + 8, off + 8 + len); break; }
    off += 8 + len + ((4 - (len % 4)) % 4);
  }
  if (!bin) throw new Error(`${path}: no BIN chunk`);
  return { gltf, bin };
}

// Column-major 4x4, glTF's own convention, so node.matrix drops straight in.
const mul = (a, b) => {
  const o = new Array(16).fill(0);
  for (let c = 0; c < 4; c++) for (let r = 0; r < 4; r++) {
    let s = 0;
    for (let k = 0; k < 4; k++) s += a[k * 4 + r] * b[c * 4 + k];
    o[c * 4 + r] = s;
  }
  return o;
};
const IDENT = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

function nodeMatrix(node) {
  if (node.matrix) return node.matrix.slice();
  const [x, y, z, w] = node.rotation || [0, 0, 0, 1];
  const [sx, sy, sz] = node.scale || [1, 1, 1];
  const [tx, ty, tz] = node.translation || [0, 0, 0];
  const x2 = x + x, y2 = y + y, z2 = z + z;
  const xx = x * x2, xy = x * y2, xz = x * z2;
  const yy = y * y2, yz = y * z2, zz = z * z2;
  const wx = w * x2, wy = w * y2, wz = w * z2;
  return [
    (1 - (yy + zz)) * sx, (xy + wz) * sx, (xz - wy) * sx, 0,
    (xy - wz) * sy, (1 - (xx + zz)) * sy, (yz + wx) * sy, 0,
    (xz + wy) * sz, (yz - wx) * sz, (1 - (xx + yy)) * sz, 0,
    tx, ty, tz, 1,
  ];
}

// Every POSITION vertex in the file, in scene space.
function vertices(path) {
  const { gltf, bin } = parse(path);
  const out = [];
  const readPositions = (accIndex, m) => {
    const acc = gltf.accessors[accIndex];
    if (acc.componentType !== 5126 || acc.type !== 'VEC3') {
      throw new Error(`${path}: POSITION is not float32 vec3 (${acc.componentType}/${acc.type})`);
    }
    const bv = gltf.bufferViews[acc.bufferView];
    const base = (bv.byteOffset || 0) + (acc.byteOffset || 0);
    const stride = bv.byteStride || 12;
    for (let i = 0; i < acc.count; i++) {
      const o = base + i * stride;
      const x = bin.readFloatLE(o), y = bin.readFloatLE(o + 4), z = bin.readFloatLE(o + 8);
      out.push([
        m[0] * x + m[4] * y + m[8] * z + m[12],
        m[1] * x + m[5] * y + m[9] * z + m[13],
        m[2] * x + m[6] * y + m[10] * z + m[14],
      ]);
    }
  };
  const walk = (idx, parent) => {
    const node = gltf.nodes[idx];
    const m = mul(parent, nodeMatrix(node));
    if (node.mesh != null) {
      for (const p of gltf.meshes[node.mesh].primitives || []) {
        if (p.attributes && p.attributes.POSITION != null) readPositions(p.attributes.POSITION, m);
      }
    }
    for (const child of node.children || []) walk(child, m);
  };
  const roots = (gltf.scenes && gltf.scenes[gltf.scene ?? 0].nodes) || gltf.nodes.map((_, i) => i);
  for (const r of roots) walk(r, IDENT);
  return out;
}

// Widest horizontal extent within a fractional height band. Extent rather than
// a percentile: a silhouette's width IS its outermost vertex, and these meshes
// have no stray geometry (checked against --profile, which is monotonic-ish).
function bandWidth(verts, minY, height, [lo, hi]) {
  let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity, n = 0;
  const a = minY + lo * height, b = minY + hi * height;
  for (const [x, y, z] of verts) {
    if (y < a || y > b) continue;
    n++;
    if (x < minX) minX = x; if (x > maxX) maxX = x;
    if (z < minZ) minZ = z; if (z > maxZ) maxZ = z;
  }
  return n ? { width: maxX - minX, depth: maxZ - minZ, count: n } : { width: 0, depth: 0, count: 0 };
}

export function glbProportions(path) {
  const verts = vertices(path);
  let minY = Infinity, maxY = -Infinity;
  for (const v of verts) { if (v[1] < minY) minY = v[1]; if (v[1] > maxY) maxY = v[1]; }
  const height = maxY - minY;
  const torso = bandWidth(verts, minY, height, TORSO_BAND);
  const head = bandWidth(verts, minY, height, HEAD_BAND);

  // Where the vendor's PROPS go. The scarf and the comic plane are positioned
  // from the paper doll's box dimensions, and a doll's collar sits at a
  // generated figure's chin — so E3b needs the mesh's own collar and belly
  // front, in the same 0..1 frame the mesh is normalised into.
  //
  // The collar is the narrowest slice between the torso peak and the head.
  //
  // REPORTED, NOT TRUSTED, and E3b consumes it nowhere. On Slab and Stoop the
  // width never dips at all between shoulder and head, so this returns the top
  // of its own search range — 0.838 for both — which is a boundary hit dressed
  // up as a measurement. That is exactly why E3b hides the scarf on meshed
  // vendors instead of re-hanging it: the number is here as the evidence for
  // that ruling. Read the `--profile` output before believing it of a new mesh.
  const SLICES = 40;
  let peak = 0, peakI = 0;
  for (let i = 0; i < SLICES; i++) {
    const w = bandWidth(verts, minY, height, [i / SLICES, (i + 1) / SLICES]).width;
    if (i / SLICES >= TORSO_BAND[0] && i / SLICES <= TORSO_BAND[1] && w > peak) { peak = w; peakI = i; }
  }
  let collarI = peakI, narrow = Infinity;
  for (let i = peakI; i < Math.floor(SLICES * HEAD_BAND[0]); i++) {
    const w = bandWidth(verts, minY, height, [i / SLICES, (i + 1) / SLICES]).width;
    if (w < narrow) { narrow = w; collarI = i; }
  }

  // Front of the belly: the mesh faces +Z (see src/characters.js), so this is
  // how far a comic plane has to stand off centre to clear the figure.
  let frontZ = -Infinity;
  const a = minY + TORSO_BAND[0] * height, b = minY + TORSO_BAND[1] * height;
  for (const [, y, z] of verts) if (y >= a && y <= b && z > frontZ) frontZ = z;

  return {
    path,
    vertices: verts.length,
    height,
    torsoWidth: torso.width,
    torsoDepth: torso.depth,
    headWidth: head.width,
    // The two shape numbers archetype SELECTION consumes.
    widthRatio: torso.width / height,          // how broad, independent of size
    headRatio: head.width / (torso.width || 1), // how big the head is for the body
    // The two numbers PROP PLACEMENT consumes, both as fractions of height.
    collarY: (collarI + 0.5) / SLICES,
    frontZ: frontZ / height,
  };
}

export function glbProfile(path, slices = 20) {
  const verts = vertices(path);
  let minY = Infinity, maxY = -Infinity;
  for (const v of verts) { if (v[1] < minY) minY = v[1]; if (v[1] > maxY) maxY = v[1]; }
  const height = maxY - minY;
  const rows = [];
  for (let i = 0; i < slices; i++) {
    const lo = i / slices, hi = (i + 1) / slices;
    const b = bandWidth(verts, minY, height, [lo, hi]);
    rows.push({ lo, hi, width: b.width / height, count: b.count });
  }
  return rows;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const files = process.argv.slice(2).filter((a) => !a.startsWith('--'));
  if (!files.length) { console.error('usage: node scripts/glb-proportions.mjs [--profile] <file.glb> [...]'); process.exit(1); }
  if (process.argv.includes('--profile')) {
    for (const f of files) {
      console.log(`\n${f}`);
      for (const r of glbProfile(f)) {
        console.log(`  ${r.lo.toFixed(2)}-${r.hi.toFixed(2)}  w/h ${r.width.toFixed(3)}  ${'#'.repeat(Math.round(r.width * 120))}`);
      }
    }
  } else {
    console.log('  height   torsoW   torsoD    headW   width/h   head/torso   collarY   frontZ   path');
    for (const f of files) {
      const p = glbProportions(f);
      console.log(`  ${p.height.toFixed(3)}   ${p.torsoWidth.toFixed(3)}   ${p.torsoDepth.toFixed(3)}   `
        + `${p.headWidth.toFixed(3)}    ${p.widthRatio.toFixed(3)}       ${p.headRatio.toFixed(3)}     `
        + `${p.collarY.toFixed(3)}    ${p.frontZ.toFixed(3)}   ${f}`);
    }
  }
}
