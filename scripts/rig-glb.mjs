// Auto-rig a character mesh for candidate A1. G1.
//
//   node scripts/rig-glb.mjs            # all bipeds
//   node scripts/rig-glb.mjs rab
//
// The high-risk candidate, and it is written to be allowed to fail. There is no
// rig on any of these meshes and no modeller to make one, so this places bones
// by measurement and computes skin weights by distance to the nearest bone
// SEGMENTS. That is the crude end of auto-skinning — proper tools solve a heat
// equation over the surface — and on lumpy generated topology it can tear.
//
// A tear is a RESULT. docs/MCGROTS-ROADMAP.md time-boxes this candidate and
// says a measured rejection is delivered work; scripts/mcgrots-bakeoff.mjs
// renders whatever comes out so the failure has a picture beside it.
//
// Writes assets/characters/<name>-rig.json: bone rest positions, parents, and
// per-vertex skin indices and weights quantised to bytes.

import { writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { readGlb, accessor } from './glb-anatomy.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const BIPEDS = ['kenneth', 'mcgrot', 'morag', 'rab', 'runt', 'slab'];

const HEM_Y = 0.22;
const HIP_Y = 0.46;          // the virtual hip, same number segment-glb.mjs uses

// Distance from a point to a segment, in 3D.
function segDist(p, a, b) {
  const abx = b[0] - a[0], aby = b[1] - a[1], abz = b[2] - a[2];
  const apx = p[0] - a[0], apy = p[1] - a[1], apz = p[2] - a[2];
  const len = abx * abx + aby * aby + abz * abz;
  let t = len ? (apx * abx + apy * aby + apz * abz) / len : 0;
  t = Math.max(0, Math.min(1, t));
  const dx = apx - abx * t, dy = apy - aby * t, dz = apz - abz * t;
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

function rig(name) {
  const { json, bin } = readGlb(join(root, `assets/characters/${name}-form.glb`));
  const prim = json.meshes[0].primitives[0];
  const raw = accessor(json, bin, prim.attributes.POSITION);
  const vcount = raw.length / 3;

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

  // Neck, and the mean lateral position of each leg and arm, measured the same
  // way scripts/segment-glb.mjs measures them so the two candidates are rigged
  // to the same body rather than to two different readings of it.
  let neckY = 0.82, bestW = Infinity;
  for (let y = 0.62; y <= 0.90; y += 0.01) {
    let lo = Infinity, hi = -Infinity, n = 0;
    for (let i = 0; i < vcount; i++) {
      if (Math.abs(pos[i * 3 + 1] - y) > 0.015) continue;
      const x = pos[i * 3];
      if (x < lo) lo = x; if (x > hi) hi = x;
      n++;
    }
    if (n < 12) continue;
    if (hi - lo < bestW) { bestW = hi - lo; neckY = y; }
  }

  let legLx = 0, legLn = 0, legRx = 0, legRn = 0;
  for (let i = 0; i < vcount; i++) {
    if (pos[i * 3 + 1] >= HEM_Y) continue;
    if (pos[i * 3] < 0) { legLx += pos[i * 3]; legLn++; } else { legRx += pos[i * 3]; legRn++; }
  }
  legLx = legLn ? legLx / legLn : -0.13;
  legRx = legRn ? legRx / legRn : 0.13;

  const xs = [];
  for (let i = 0; i < vcount; i++) {
    const y = pos[i * 3 + 1];
    if (y < 0.40 || y > 0.80) continue;
    xs.push(Math.abs(pos[i * 3]));
  }
  xs.sort((a, b) => a - b);
  const shoulderX = xs.length ? xs[Math.floor(xs.length * 0.86)] : 0.24;
  const shoulderY = 0.74;

  // Bone segments, in rest pose. Index order IS the bone order in the sidecar.
  //
  // THE LEG HAS A KNEE, and that is the whole reason A1 won G1. The first rig
  // gave each leg one rigid bone, so "sit" could only drop the body and hang
  // the legs — it read as a crouch, and Dan called it out across all three
  // candidates (2026-08-10). A2 and A3 cannot be fixed: there is no thigh
  // GEOMETRY to rotate, because everything between hem and hip is coat.
  //
  // Skinning does not need the geometry. A bone can subdivide the leg wherever
  // it likes and the surface follows, so the coat drapes over the thigh as it
  // folds. That is the one thing skinning buys here that the anatomy
  // measurement did not already make cheap.
  //
  // KNEE_Y sits just above the boot, at the top of the visible lower leg — the
  // hem is where the coat stops, and the knee has to be under it or the fold
  // happens outside the garment.
  const KNEE_Y = 0.24;
  const BONES = [
    { name: 'hips', parent: -1, head: [0, HIP_Y, 0], tail: [0, (HIP_Y + neckY) / 2, 0] },
    { name: 'spine', parent: 0, head: [0, (HIP_Y + neckY) / 2, 0], tail: [0, neckY, 0] },
    { name: 'head', parent: 1, head: [0, neckY, 0], tail: [0, 1.0, 0] },
    { name: 'armL', parent: 1, head: [-shoulderX * 0.7, shoulderY, 0], tail: [-shoulderX, shoulderY - 0.26, 0] },
    { name: 'armR', parent: 1, head: [shoulderX * 0.7, shoulderY, 0], tail: [shoulderX, shoulderY - 0.26, 0] },
    { name: 'thighL', parent: 0, head: [legLx, HIP_Y, 0], tail: [legLx, KNEE_Y, 0] },
    { name: 'thighR', parent: 0, head: [legRx, HIP_Y, 0], tail: [legRx, KNEE_Y, 0] },
    { name: 'shinL', parent: 5, head: [legLx, KNEE_Y, 0], tail: [legLx, 0, 0] },
    { name: 'shinR', parent: 6, head: [legRx, KNEE_Y, 0], tail: [legRx, 0, 0] },
  ];

  // Weights: the two nearest bones, inverse-distance blended. Two rather than
  // four because with seven bones a four-way blend drags a foot's influence
  // onto a shoulder and smears the whole figure.
  const skinIndex = new Uint8Array(vcount * 4);
  const skinWeight = new Uint8Array(vcount * 4);
  // THE COAT DOES NOT BIND TO THE LEGS, and this is what makes sitting work.
  //
  // Without it, everything between hem and hip is nearest a thigh bone, so
  // folding the thigh to sit dragged the entire lower coat forward with it and
  // the figure doubled over — a face-plant, not a sit. A heavy dockside coat
  // hangs from the body; it does not fold flat along the femur.
  //
  // So above the hem, the leg bones are simply not candidates. Only the
  // visible lower leg and boot follow the knee, which is exactly the part a
  // coat leaves showing.
  const LEG_BONES = new Set(['thighL', 'thighR', 'shinL', 'shinR']);
  const COAT_Y = HEM_Y + 0.06;
  for (let i = 0; i < vcount; i++) {
    const p = [pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]];
    const aboveHem = p[1] > COAT_Y;
    const d = BONES
      .map((b, bi) => ({ bi, name: b.name, d: segDist(p, b.head, b.tail) }))
      .filter((c) => !(aboveHem && LEG_BONES.has(c.name)));
    d.sort((a, b) => a.d - b.d);
    const [a, b] = d;
    const wa = 1 / (a.d + 1e-4), wb = 1 / (b.d + 1e-4);
    const total = wa + wb;
    skinIndex[i * 4] = a.bi;
    skinIndex[i * 4 + 1] = b.bi;
    skinWeight[i * 4] = Math.round((wa / total) * 255);
    skinWeight[i * 4 + 1] = 255 - skinWeight[i * 4];
  }

  return {
    name,
    neckY: +neckY.toFixed(4),
    bones: BONES.map((b) => ({ name: b.name, parent: b.parent, head: b.head.map((v) => +v.toFixed(4)) })),
    vertexCount: vcount,
    skinIndex: Buffer.from(skinIndex).toString('base64'),
    skinWeight: Buffer.from(skinWeight).toString('base64'),
  };
}

const wanted = process.argv.slice(2).length ? process.argv.slice(2) : BIPEDS;
for (const name of wanted) {
  const r = rig(name);
  writeFileSync(join(root, `assets/characters/${name}-rig.json`), JSON.stringify(r));
  console.log(`${name.padEnd(9)} ${r.bones.length} bones, ${r.vertexCount} vertices weighted, neck ${r.neckY}`);
}
