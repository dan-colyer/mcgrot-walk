// Assemble the rectified band tiles into one texture atlas for src/shopfronts.js.
//
//   node scripts/build-facade-atlas.mjs
//
// Supersedes build-shopfront-atlas.mjs. That one packed a single flat crop per
// photo; this one packs the output of the rectify → cull pipeline, which yields
// two KINDS of tile from the same rectified façade:
//
//   ground — the shopfront band (band 0 of a wall, at pavement level)
//   upper  — a tenement storey above it (bands 1..N)
//
// The engine must never sample a shopfront for a third-floor band, so the atlas
// records which indices are which. Ground tiles are packed first, so the two
// groups are contiguous, but the engine reads the explicit index arrays rather
// than assuming that.
//
// The atlas is a strict row-major grid: index 0 top-left, filled left-to-right
// then down. src/shopfronts.js derives every UV rect from (index, cols, rows),
// so the image MUST be exactly cols*tileW × rows*tileH. An incomplete final row
// is padded with black cells that are never sampled.

import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'fs';
import { execFileSync } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const shopDir = join(root, 'assets/shopfronts');
const tmpDir = join(shopDir, '.atlas-tmp');

const TILE_W = 512;
const TILE_H = 256;
const COLS = 8;
const MAX_DIM = 4096; // the common GPU max-texture-size floor

const credits = existsSync(join(shopDir, 'credits.json'))
  ? JSON.parse(readFileSync(join(shopDir, 'credits.json'), 'utf8'))
  : {};

const bands = JSON.parse(readFileSync(join(shopDir, 'bands.json'), 'utf8'));
if (!bands.length) {
  console.error('assets/shopfronts/bands.json is empty — run rectify-facades.mjs first.');
  process.exit(1);
}

// Ground first, then upper; stable by filename inside each group so the atlas is
// byte-identical across rebuilds (the seeded-scenery rule applies to assets too).
const ordered = [
  ...bands.filter((b) => b.kind === 'ground').sort((a, b) => a.file.localeCompare(b.file)),
  ...bands.filter((b) => b.kind === 'upper').sort((a, b) => a.file.localeCompare(b.file)),
];

const count = ordered.length;
const rows = Math.ceil(count / COLS);
const atlasW = COLS * TILE_W;
const atlasH = rows * TILE_H;

if (atlasW > MAX_DIM || atlasH > MAX_DIM) {
  console.error(
    `Atlas ${atlasW}×${atlasH} exceeds ${MAX_DIM}px. Either drop tiles (max ` +
    `${(MAX_DIM / TILE_H) * COLS}) or split ground/upper into two atlases — two ` +
    `draw calls is nothing against the ~583 this replaces.`
  );
  process.exit(1);
}

rmSync(tmpDir, { recursive: true, force: true });
mkdirSync(tmpDir, { recursive: true });

const cells = ordered.map((b) => join(shopDir, b.file));
for (const f of cells) {
  if (!existsSync(f)) { console.error(`missing tile: ${f}`); process.exit(1); }
}

const blanks = COLS * rows - count;
if (blanks > 0) {
  const blank = join(tmpDir, 'blank.jpg');
  execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-f', 'lavfi', '-i',
    `color=c=black:s=${TILE_W}x${TILE_H}`, '-frames:v', '1', blank]);
  for (let i = 0; i < blanks; i++) cells.push(blank);
}

// One explicit -i per cell plus an xstack layout of exact pixel offsets.
// NEVER use the `tile` filter here: fed an image sequence it silently truncates
// the stream and most of the grid comes out black, with a zero exit status.
const atlasPath = join(shopDir, 'atlas.jpg');
const inputs = cells.flatMap((f) => ['-i', f]);
const chain = cells.map((_, i) => `[${i}:v]`).join('');
const layout = cells
  .map((_, i) => `${(i % COLS) * TILE_W}_${Math.floor(i / COLS) * TILE_H}`)
  .join('|');

// Grade the atlas into the scene's palette. These are bright, sunny tourist
// photos and the street is a post-apocalyptic murk — ungraded they read as
// postcards stapled to a ruin. Desaturate, drop exposure, push toward rust.
// Baked in here so the material doesn't tint again on top of it.
const GRADE = 'eq=saturation=0.42:contrast=1.08:brightness=-0.10,colorbalance=rs=0.10:rm=0.06:bs=-0.06:bm=-0.05';

execFileSync('ffmpeg', ['-loglevel', 'error', '-y', ...inputs,
  '-filter_complex', `${chain}xstack=inputs=${cells.length}:layout=${layout},${GRADE}`,
  '-frames:v', '1', '-q:v', '4', atlasPath], { maxBuffer: 1 << 26 });

rmSync(tmpDir, { recursive: true, force: true });

// Assert the grid is exactly what shopfronts.js will assume. A dropped cell
// shifts every subsequent tile's UVs and the whole street samples wrong.
const dims = execFileSync('ffprobe', ['-v', 'error', '-select_streams', 'v:0',
  '-show_entries', 'stream=width,height', '-of', 'csv=p=0', atlasPath]).toString().trim();
const [gotW, gotH] = dims.split(',').map(Number);
if (gotW !== atlasW || gotH !== atlasH) {
  console.error(`Atlas dims ${gotW}×${gotH} != expected ${atlasW}×${atlasH} — UVs would be wrong. Aborting.`);
  process.exit(1);
}

const tiles = ordered.map((b, index) => {
  const c = credits[b.slug] || {};
  // Vertical band row parsed from the extractor's `upper-<r><i>` name: r=0 is the
  // TOP slice (cornice) and higher r is lower down the wall. The engine stacks
  // upper tiles bottom-to-top, so placement orders them by this, highest r first.
  const rowMatch = b.kind === 'upper' ? /-upper-(\d)\d/.exec(b.file) : null;
  return {
    index,
    kind: b.kind,                       // "ground" | "upper"
    bandRow: rowMatch ? +rowMatch[1] : null,
    slug: b.slug,
    identity: b.identity || null,
    treatment: b.treatment,             // 1 keep real | 2 decayed | 3 generated
    planeKind: b.planeKind,             // "terrace" | "corner"
    cornerBuilding: !!b.cornerBuilding,
    generated: b.generated === true,    // true => AI from scratch, no photo attribution
    decayed: b.decayed === true,        // true => AI-aged derivative; KEEPS attribution (share-alike)
    title: c.title || b.slug,
    author: c.author || 'Unknown',
    license: c.license || 'unknown',
    pageUrl: c.pageUrl || null,
  };
});

const atlas = {
  tileW: TILE_W,
  tileH: TILE_H,
  cols: COLS,
  rows,
  count,
  // Explicit index groups — the engine picks a band's tile from the right pool.
  ground: tiles.filter((t) => t.kind === 'ground').map((t) => t.index),
  upper: tiles.filter((t) => t.kind === 'upper').map((t) => t.index),
  // Corner-building elevations, for the chamfered edges at real junctions.
  corner: tiles.filter((t) => t.planeKind === 'corner' && t.kind === 'ground').map((t) => t.index),
  tiles,
};
writeFileSync(join(shopDir, 'atlas.json'), JSON.stringify(atlas, null, 2));

const licences = {};
for (const t of tiles) licences[t.license] = (licences[t.license] || 0) + 1;
const vram = ((gotW * gotH * 4) / 1024 / 1024).toFixed(0);

console.log(`Atlas: ${count} tiles (${atlas.ground.length} ground, ${atlas.upper.length} upper, ${atlas.corner.length} corner-ground)`);
console.log(`       ${COLS}×${rows} grid, ${gotW}×${gotH}px, ~${vram}MB VRAM uncompressed`);
console.log('Licences:', JSON.stringify(licences));
