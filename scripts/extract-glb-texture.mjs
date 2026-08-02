// Pull an embedded image out of a .glb and write it beside the model.
//
//   node scripts/extract-glb-texture.mjs assets/cars/bus.glb 0 assets/cars/Textures/bus.png
//
// Why this exists: src/cars.js loads every kit model's palette map itself and
// hands it to GLTFLoader (see the note there), so the map has to be a file on
// disk. Kenney's three cars already ship theirs as a sibling PNG; the
// poly.pizza bus carries its own inside the glb's BIN chunk. This lifts those
// bytes out verbatim — the written PNG is a byte-for-byte copy of what
// GLTFLoader would have decoded from the blob, so nothing about the model's
// appearance changes.
//
// Run once per model; the output is committed. The glb is not modified — the
// embedded copy stays where it is, unread.

import { readFileSync, writeFileSync } from 'fs';

const [file, indexArg, out] = process.argv.slice(2);
if (!file || indexArg === undefined || !out) {
  console.error('usage: extract-glb-texture.mjs <model.glb> <imageIndex> <out.png>');
  process.exit(1);
}

const buf = readFileSync(file);
if (buf.toString('latin1', 0, 4) !== 'glTF') throw new Error(`${file} is not a binary glTF`);

// GLB container: a 12-byte header then length-prefixed chunks, each 4-aligned.
const chunks = {};
for (let off = 12; off + 8 <= buf.length; ) {
  const len = buf.readUInt32LE(off);
  const type = buf.readUInt32LE(off + 4);
  chunks[type] = { start: off + 8, len };
  off += 8 + len;
}
const JSON_CHUNK = 0x4e4f534a, BIN_CHUNK = 0x004e4942;
if (!chunks[JSON_CHUNK] || !chunks[BIN_CHUNK]) throw new Error('missing JSON or BIN chunk');

const json = JSON.parse(buf.toString('utf8', chunks[JSON_CHUNK].start, chunks[JSON_CHUNK].start + chunks[JSON_CHUNK].len));
const image = json.images?.[Number(indexArg)];
if (!image) throw new Error(`no image ${indexArg} in ${file}`);
if (image.bufferView === undefined) throw new Error(`image ${indexArg} is a URI (${image.uri}), nothing to extract`);

const view = json.bufferViews[image.bufferView];
const start = chunks[BIN_CHUNK].start + (view.byteOffset || 0);
const bytes = buf.subarray(start, start + view.byteLength);
writeFileSync(out, bytes);
console.log(`${file} image ${indexArg} (${image.name || 'unnamed'}, ${image.mimeType || '?'}) -> ${out}, ${bytes.length} bytes`);
