// D4/W5 — pack every building's elevation image(s) into chainage-bucketed
// atlas PAGES the engine can lazy-load by player position, replacing the old
// single monolithic atlas.jpg + strips.jpg + name-placeholder canvas.
//
//   node scripts/build-elevation-atlas.mjs
//
// Input: assets/shopfronts/manifest.json (every frontage building, chainage-
//   ordered) + assets/shopfronts/elevations.json (one image per real-photo
//   plane, one per AI-generated building — W2/W3/W4 already produced these,
//   signage baked in).
// Output: assets/shopfronts/atlas-pages/page<N>.jpg (shelf-packed, <=4096²)
//         assets/shopfronts/atlas-pages.json:
//   { storeyPx, pxPerMetre,
//     pages: [{file, width, height, etag, chainageMin, chainageMax}],
//     buildings: { "<buildingIndex>": { page, regions: [
//       {kind:'terrace'|'corner'|'all', x,y,w,h, widthM,heightM} ] } } }
//
// A building is assigned WHOLLY to one page (bucketed by walking chainage
// order and starting a new page only when the current one is full) so a
// building's regions never straddle two pages.

import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'fs';
import { createHash } from 'crypto';
import { execFileSync } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const shopDir = join(root, 'assets/shopfronts');
const pagesDir = join(shopDir, 'atlas-pages');
const tmpDir = join(shopDir, '.atlas-pages-tmp');

const MAX_DIM = 4096;
const STOREY_PX = 180;       // pixels per 3.2m storey in the packed atlas
const STOREY_M = 3.2;
const PX_PER_METRE = STOREY_PX / STOREY_M;

const manifest = JSON.parse(readFileSync(join(shopDir, 'manifest.json'), 'utf8'));
const elev = JSON.parse(readFileSync(join(shopDir, 'elevations.json'), 'utf8'));

function probe(file) {
  const out = execFileSync('ffprobe', ['-v', 'error', '-select_streams', 'v:0',
    '-show_entries', 'stream=width,height', '-of', 'csv=p=0', file]).toString().trim();
  const [w, h] = out.split(',').map(Number);
  return { w, h };
}

// --- resolve each building to 1-2 source items (terrace/corner/all) ---
const bySlug = new Map();
for (const e of elev.elevations) {
  if (e.generated) continue;
  if (!bySlug.has(e.slug)) bySlug.set(e.slug, []);
  bySlug.get(e.slug).push(e);
}
const generatedByBuilding = new Map(elev.elevations.filter((e) => e.generated).map((e) => [e.buildingIndex, e]));

const items = []; // {buildingIndex, chainage, kind, file, widthM, heightM}
let noElevation = 0;

for (const b of manifest.buildings) {
  if (b.placedSlug) {
    const planes = bySlug.get(b.placedSlug) || [];
    const terrace = planes.find((p) => p.planeKind !== 'corner') || planes[0] || null;
    const corner = planes.find((p) => p.planeKind === 'corner') || null;
    if (terrace) items.push({ buildingIndex: b.buildingIndex, chainage: b.chainage, kind: 'terrace', file: terrace.file, widthM: terrace.widthM, heightM: terrace.heightM });
    if (corner && corner !== terrace) items.push({ buildingIndex: b.buildingIndex, chainage: b.chainage, kind: 'corner', file: corner.file, widthM: corner.widthM, heightM: corner.heightM });
    if (!terrace && !corner) noElevation++;
  } else {
    const g = generatedByBuilding.get(b.buildingIndex);
    if (g) items.push({ buildingIndex: b.buildingIndex, chainage: b.chainage, kind: 'all', file: g.file, widthM: g.widthM, heightM: g.heightM });
    else noElevation++;
  }
}
items.sort((a, b) => a.chainage - b.chainage);

// --- bucket into pages: walk in chainage order, shelf-pack, start a new
//     page when the current shelf-pack would exceed MAX_DIM height ---
function packedSize(it) {
  const h = Math.round((it.heightM / STOREY_M) * STOREY_PX);
  const w = Math.min(MAX_DIM, Math.round((it.widthM / STOREY_M) * STOREY_PX));
  return { w, h };
}

const pages = [];
let page = null;
function newPage() {
  page = { items: [], x: 0, y: 0, shelfH: 0, maxW: 0 };
  pages.push(page);
}
newPage();
for (const it of items) {
  const { w, h } = packedSize(it);
  if (page.x + w > MAX_DIM) { page.x = 0; page.y += page.shelfH; page.shelfH = 0; }
  if (page.y + h > MAX_DIM) { newPage(); }
  if (page.x + w > MAX_DIM) { page.x = 0; page.y += page.shelfH; page.shelfH = 0; }
  page.items.push({ ...it, px: page.x, py: page.y, pw: w, ph: h });
  page.x += w;
  page.shelfH = Math.max(page.shelfH, h);
  page.maxW = Math.max(page.maxW, page.x);
}

// --- render each page ---
rmSync(pagesDir, { recursive: true, force: true });
rmSync(tmpDir, { recursive: true, force: true });
mkdirSync(pagesDir, { recursive: true });
mkdirSync(tmpDir, { recursive: true });

const pagesMeta = [];
const buildingsMeta = {};

pages.forEach((p, pi) => {
  if (!p.items.length) return;
  const W = p.maxW;
  const H = p.y + p.shelfH;
  const cellFiles = p.items.map((it, i) => {
    const src = join(shopDir, it.file);
    const cell = join(tmpDir, `p${pi}-${i}.jpg`);
    execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-i', src,
      '-vf', `scale=${it.pw}:${it.ph}:flags=lanczos`, '-frames:v', '1', cell]);
    return cell;
  });
  const pageFile = join(pagesDir, `page${pi}.jpg`);
  const inputs = cellFiles.flatMap((f) => ['-i', f]);
  const chain = cellFiles.map((_, i) => `[${i}:v]`).join('');
  const layout = p.items.map((it) => `${it.px}_${it.py}`).join('|');
  execFileSync('ffmpeg', ['-loglevel', 'error', '-y', ...inputs,
    '-filter_complex', `${chain}xstack=inputs=${cellFiles.length}:layout=${layout}:fill=black,crop=${W}:${H}:0:0`,
    '-frames:v', '1', '-q:v', '4', pageFile], { maxBuffer: 1 << 26 });

  // ffmpeg's mjpeg encoder rounds odd dimensions down by a pixel — a texel or
  // two of slack at the far shelf edge, never sampled (every region's UV rect
  // sits well inside it), so use the ACTUAL encoded size for the page record
  // rather than hard-aborting on the pre-encode estimate (contrast
  // contact-sheet.mjs, which aborts because ITS mismatch would mean a
  // dropped cell — here it's just encoder rounding).
  const dims = probe(pageFile);
  if (Math.abs(dims.w - W) > 4 || Math.abs(dims.h - H) > 4) {
    console.error(`ABORT page${pi}: got ${dims.w}x${dims.h}, expected ~${W}x${H} — cells were likely dropped`);
    process.exit(1);
  }

  const etag = createHash('md5').update(readFileSync(pageFile)).digest('hex').slice(0, 10);
  const chainages = p.items.map((it) => it.chainage);
  pagesMeta.push({
    file: `shopfronts/atlas-pages/page${pi}.jpg`, width: dims.w, height: dims.h, etag,
    chainageMin: Math.min(...chainages), chainageMax: Math.max(...chainages),
  });

  for (const it of p.items) {
    (buildingsMeta[it.buildingIndex] ??= { page: pi, regions: [] }).regions.push({
      kind: it.kind, x: it.px, y: it.py, w: it.pw, h: it.ph,
      widthM: it.widthM, heightM: it.heightM,
    });
  }
});

rmSync(tmpDir, { recursive: true, force: true });

writeFileSync(join(shopDir, 'atlas-pages.json'), JSON.stringify({
  storeyPx: STOREY_PX, pxPerMetre: PX_PER_METRE,
  pages: pagesMeta, buildings: buildingsMeta,
}, null, 2));

console.log(`${pages.length} page(s), ${items.length} elevation region(s) across ${Object.keys(buildingsMeta).length} buildings.`);
for (const pg of pagesMeta) console.log(`  ${pg.file}: ${pg.width}x${pg.height}, chainage ${pg.chainageMin}-${pg.chainageMax}m`);
console.log(`${noElevation} manifest buildings have no elevation yet (placeholder/stone fallback at runtime).`);
