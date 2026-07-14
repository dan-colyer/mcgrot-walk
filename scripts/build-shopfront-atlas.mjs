// Tile assets/shopfronts/tiles/*.jpg into a single texture atlas for the façade
// quads in src/shopfronts.js.
//
// The atlas is a strict row-major grid, index 0 = top-left, filled left-to-right
// then down — src/shopfronts.js computes each quad's UV rect straight from
// (index, cols, rows), so the grid MUST be exactly cols*tileW by rows*tileH.
// An incomplete final row is therefore padded with black cells (never sampled).
//
// Usage: node scripts/build-shopfront-atlas.mjs

import { readFileSync, writeFileSync, readdirSync, mkdirSync, rmSync, copyFileSync, existsSync } from 'fs';
import { execFileSync } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const shopDir = join(root, 'assets/shopfronts');
const tilesDir = join(shopDir, 'tiles');
const tmpDir = join(shopDir, '.atlas-tmp');

const TILE_W = 512;
const TILE_H = 256;
const COLS = 8;
const MAX_DIM = 4096; // keep within the common GPU max-texture-size floor

const credits = existsSync(join(shopDir, 'credits.json'))
  ? JSON.parse(readFileSync(join(shopDir, 'credits.json'), 'utf8'))
  : {};

const slugs = readdirSync(tilesDir)
  .filter((f) => f.endsWith('.jpg'))
  .map((f) => f.replace(/\.jpg$/, ''))
  .sort(); // stable, deterministic ordering

if (!slugs.length) {
  console.error('No tiles found in assets/shopfronts/tiles — run fetch-shopfronts.mjs first.');
  process.exit(1);
}

const count = slugs.length;
const rows = Math.ceil(count / COLS);
const atlasW = COLS * TILE_W;
const atlasH = rows * TILE_H;

if (atlasW > MAX_DIM || atlasH > MAX_DIM) {
  console.error(`Atlas ${atlasW}x${atlasH} exceeds ${MAX_DIM}px — reduce tile count (max ${(MAX_DIM / TILE_H) * COLS}).`);
  process.exit(1);
}

// Stage a fully-populated grid: real tiles first, then black filler cells.
// (Every grid cell gets an explicit input — see the xstack note below.)
rmSync(tmpDir, { recursive: true, force: true });
mkdirSync(tmpDir, { recursive: true });

const cells = slugs.map((slug) => join(tilesDir, `${slug}.jpg`));

const blanks = COLS * rows - count;
if (blanks > 0) {
  const blank = join(tmpDir, 'blank.jpg');
  execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-f', 'lavfi', '-i',
    `color=c=black:s=${TILE_W}x${TILE_H}`, '-frames:v', '1', blank]);
  for (let i = 0; i < blanks; i++) cells.push(blank);
}

// Explicit input per cell + an xstack layout of exact pixel offsets. The image2
// sequence demuxer (-i %03d.jpg) silently truncated the stream partway, leaving
// most of the grid black — xstack pins every tile to a coordinate instead.
const atlasPath = join(shopDir, 'atlas.jpg');
const inputs = cells.flatMap((f) => ['-i', f]);
const chain = cells.map((_, i) => `[${i}:v]`).join('');
const layout = cells
  .map((_, i) => `${(i % COLS) * TILE_W}_${Math.floor(i / COLS) * TILE_H}`)
  .join('|');

// Grade the whole atlas into the scene's palette: clean daylight photos read as
// pasted-on against a post-apocalyptic street, so desaturate, drop the exposure
// and push it slightly toward rust.
const GRADE = 'eq=saturation=0.42:contrast=1.08:brightness=-0.10,colorbalance=rs=0.10:rm=0.06:bs=-0.06:bm=-0.05';

execFileSync('ffmpeg', ['-loglevel', 'error', '-y', ...inputs,
  '-filter_complex', `${chain}xstack=inputs=${cells.length}:layout=${layout},${GRADE}`,
  '-frames:v', '1', '-q:v', '4', atlasPath]);

rmSync(tmpDir, { recursive: true, force: true });

// Verify the grid really is the size shopfronts.js assumes.
const dims = execFileSync('ffprobe', ['-v', 'error', '-select_streams', 'v:0',
  '-show_entries', 'stream=width,height', '-of', 'csv=p=0', atlasPath]).toString().trim();
const [gotW, gotH] = dims.split(',').map(Number);
if (gotW !== atlasW || gotH !== atlasH) {
  console.error(`Atlas dims ${gotW}x${gotH} != expected ${atlasW}x${atlasH} — UVs would be wrong. Aborting.`);
  process.exit(1);
}

const atlas = {
  tileW: TILE_W,
  tileH: TILE_H,
  cols: COLS,
  rows,
  count,
  tiles: slugs.map((slug, index) => ({
    index,
    slug,
    title: credits[slug]?.title || slug,
    author: credits[slug]?.author || 'Unknown',
    license: credits[slug]?.license || 'unknown',
    pageUrl: credits[slug]?.pageUrl || null,
  })),
};
writeFileSync(join(shopDir, 'atlas.json'), JSON.stringify(atlas, null, 2));

const licenseCounts = {};
for (const t of atlas.tiles) licenseCounts[t.license] = (licenseCounts[t.license] || 0) + 1;

console.log(`Atlas: ${count} tiles, ${COLS}x${rows} grid, ${gotW}x${gotH}px`);
console.log('Licences:', JSON.stringify(licenseCounts, null, 0));
