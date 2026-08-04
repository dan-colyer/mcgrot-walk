// What is actually inside a .glb?
//
//   node scripts/glb-stats.mjs assets/cars/sedan.glb [more.glb ...]
//
// Reports triangles, meshes (= draw calls once in-scene, one per primitive),
// materials, textures and byte size. Exists because every claim E8d makes
// about a generated mesh is one of these numbers, and booting the scene to
// count them is thirty seconds when the file already says so.
//
// Deliberately a hand-rolled reader rather than three.js's GLTFLoader: the
// loader needs a DOM for textures, and this only has to walk the JSON chunk.
// glTF 2.0 binary layout — 12-byte header, then chunks of [u32 len][u32 type]
// [payload], the first of which is always the JSON.
import { readFileSync } from 'fs';

export function glbStats(path) {
  const buf = readFileSync(path);
  if (buf.readUInt32LE(0) !== 0x46546c67) throw new Error(`${path}: not a glb (bad magic)`);
  const jsonLen = buf.readUInt32LE(12);
  const gltf = JSON.parse(buf.subarray(20, 20 + jsonLen).toString('utf8'));

  // Triangles per primitive: indexed geometry counts index/3, non-indexed
  // counts POSITION/3. Mode 4 is TRIANGLES and is the default when absent;
  // anything else (strips, fans, lines) is counted as 0 rather than guessed at.
  let tris = 0, prims = 0;
  for (const mesh of gltf.meshes || []) {
    for (const p of mesh.primitives || []) {
      prims++;
      const mode = p.mode ?? 4;
      if (mode !== 4) continue;
      const acc = p.indices != null ? gltf.accessors[p.indices] : gltf.accessors[p.attributes.POSITION];
      tris += Math.floor(acc.count / 3);
    }
  }

  // Largest declared texture, since texture bytes dominate a generated asset
  // and a 1024 or 2048 map is the difference between 200KB and 4MB.
  const imageBytes = (gltf.images || []).reduce((a, img) => {
    const bv = img.bufferView != null ? gltf.bufferViews[img.bufferView] : null;
    return a + (bv ? bv.byteLength : 0);
  }, 0);

  return {
    path,
    bytes: buf.length,
    triangles: tris,
    primitives: prims,          // one draw call each, before any merging
    meshes: (gltf.meshes || []).length,
    nodes: (gltf.nodes || []).length,
    materials: (gltf.materials || []).length,
    textures: (gltf.textures || []).length,
    imageBytes,
  };
}

const kb = (n) => `${(n / 1024).toFixed(0)}KB`;

if (import.meta.url === `file://${process.argv[1]}`) {
  const files = process.argv.slice(2);
  if (!files.length) { console.error('usage: node scripts/glb-stats.mjs <file.glb> [...]'); process.exit(1); }
  console.log('  tris    prims  mats  texs  images    size   path');
  let totalTris = 0, totalPrims = 0, totalBytes = 0;
  for (const f of files) {
    const s = glbStats(f);
    totalTris += s.triangles; totalPrims += s.primitives; totalBytes += s.bytes;
    console.log(`  ${String(s.triangles).padStart(6)}  ${String(s.primitives).padStart(5)}  `
      + `${String(s.materials).padStart(4)}  ${String(s.textures).padStart(4)}  `
      + `${kb(s.imageBytes).padStart(6)}  ${kb(s.bytes).padStart(6)}   ${s.path}`);
  }
  if (files.length > 1) {
    console.log(`  ${String(totalTris).padStart(6)}  ${String(totalPrims).padStart(5)}  `
      + `${' '.repeat(14)}${kb(totalBytes).padStart(6)}   TOTAL (${files.length} files)`);
  }
}
