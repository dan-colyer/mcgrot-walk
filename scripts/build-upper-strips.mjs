// Build the upper-strip atlas: one CONTIGUOUS crop of each placed building's
// whole upper elevation, so the engine can drape it as a single quad.
//
//   node scripts/build-upper-strips.mjs
//
// WHY: the band pipeline keeps only a diagonal SAMPLE of the upper storeys
// (upper-<row><col>, max 2 per plane) and the engine stamps those samples in a
// grid — the Central Bar's diagonal shadows repeated 5×3, and the two samples
// never quite align at band boundaries (the residual seam). For the 18
// address-placed buildings we have the full rectified elevation on disk
// (assets/shopfronts/rect/), so the honest fix is to ship the real thing whole.
//
// Output: assets/shopfronts/strips.jpg  (shelf-packed, ≤4096², same grade as
//         atlas.jpg) and strips.json:
//   { width, height, strips: [{slug, plane, planeKind, x, y, w, h,
//                              widthM, storeys}] }
//
// The crop geometry MUST mirror rectify-facades.mjs (TOP_INSET, groundFrac,
// rows) so the strip's bottom edge meets the ground band's top edge.

import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'fs';
import { createHash } from 'crypto';
import { execFileSync } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const shopDir = join(root, 'assets/shopfronts');
const rectDir = join(shopDir, 'rect');
const tmpDir = join(shopDir, '.strips-tmp');

const MAX_DIM = 4096;
const TOP_INSET = 0.10;   // matches rectify-facades.mjs
const STOREY_M = 3.2;
// Same palette grade as build-facade-atlas.mjs — the strips sit flush against
// band tiles on the same wall, so they must be graded identically.
const GRADE = 'eq=saturation=0.42:contrast=1.08:brightness=-0.10,colorbalance=rs=0.10:rm=0.06:bs=-0.06:bm=-0.05';

const plan = JSON.parse(readFileSync(join(root, 'scripts/facade-plan.json'), 'utf8'));
const placement = JSON.parse(readFileSync(join(shopDir, 'placement.json'), 'utf8'));
const placedSlugs = new Set(Object.values(placement.photos).map((p) => p.slug));

function probe(file) {
  const out = execFileSync('ffprobe', ['-v', 'error', '-select_streams', 'v:0',
    '-show_entries', 'stream=width,height', '-of', 'csv=p=0', file]).toString().trim();
  const [w, h] = out.split(',').map(Number);
  return { w, h };
}

// How many pixels of SKY sit at the top of this crop region? Some plans put
// the wall's top corners above the real eaves, so the strip's first rows are
// cloud — draped on a wall that reads as a glowing white glitch, not stone.
// Sky is BRIGHT + COLOURLESS (or plainly blue) — the cull-bands lesson: low
// contrast is NOT the test, it binned Robbie's dark green pub front.
function skyTrimPx(rectPath, cropW, cropH, cropY) {
  const scanH = Math.floor(cropH * 0.45); // only ever trim the top 45%
  if (scanH < 8) return 0;
  const SW = 64;
  const SH = Math.max(8, Math.round((scanH / cropW) * SW));
  const rgb = execFileSync('ffmpeg', ['-loglevel', 'error', '-i', rectPath,
    '-vf', `crop=${cropW}:${scanH}:0:${cropY},scale=${SW}:${SH}`,
    '-f', 'rawvideo', '-pix_fmt', 'rgb24', '-'], { maxBuffer: 1 << 24 });
  let trimRows = 0;
  for (let y = 0; y < SH; y++) {
    let sky = 0;
    for (let x = 0; x < SW; x++) {
      const o = (y * SW + x) * 3;
      const r = rgb[o], g = rgb[o + 1], b = rgb[o + 2];
      const bright = (r + g + b) / 3;
      const chroma = Math.max(r, g, b) - Math.min(r, g, b);
      if ((bright > 172 && chroma < 32) || (b > 140 && b > r + 15)) sky++;
    }
    if (sky / SW > 0.35) trimRows = y + 1; // trim through the last sky-heavy row
    // (0.35 not 0.5: a stepped roofline bakes sky into only PART of a row's
    // width, but half a row of cloud glows just as wrong on a draped wall.)
    else if (y - trimRows > 2) break;      // solid wall for a few rows — done
  }
  return Math.round((trimRows / SH) * scanH);
}

// --- collect candidate strips with their crop geometry ---
const candidates = [];
for (const photo of plan) {
  if (!placedSlugs.has(photo.slug) || !photo.hasUpper || !photo.planes) continue;
  photo.planes.forEach((plane, pi) => {
    const rectPath = join(rectDir, `${photo.slug}-p${pi}.jpg`);
    if (!existsSync(rectPath)) return; // plane was skipped by rectify (confidence/degenerate)
    const storeys = Math.max(1, plane.storeys ?? 4);
    if (storeys < 2) return;
    const { w: outW, h: outH } = probe(rectPath);
    const groundFrac = Math.max(0.08, Math.min(1, plane.groundFrac ?? 0.28));
    const gH = Math.round(outH * groundFrac);
    const uTop = Math.round(outH * TOP_INSET);
    const rows = Math.max(1, storeys - 1);
    const rowH = Math.floor((outH - gH - uTop) / rows);
    if (rowH < 64) return;
    let cropH = rowH * rows;
    let cropY = outH - gH - cropH; // anchored to the TOP of the ground band
    // Trim baked sky off the top; the bottom edge stays put so the strip still
    // meets the ground band exactly.
    const trim = skyTrimPx(rectPath, outW, cropH, cropY);
    cropY += trim;
    cropH -= trim;
    if (cropH < rowH * 1.6) return; // sky ate too much — not worth draping
    candidates.push({
      slug: photo.slug, plane: pi,
      planeKind: (plane.kind || 'terrace'),
      rectPath, outW, cropY, cropH, rowH, rows,
      widthM: (outW / rowH) * STOREY_M,
    });
  });
}

if (!candidates.length) {
  console.error('no placed slugs with usable rect planes — nothing to do');
  process.exit(1);
}

// --- pick a storey pixel height that shelf-packs inside MAX_DIM² ---
function layout(spx) {
  const items = candidates.map((c) => ({
    ...c,
    // Pixel size preserves the crop's true aspect: spx px per 3.2m storey.
    w: Math.min(MAX_DIM, Math.round((c.outW / c.rowH) * spx)),
    h: Math.round((c.cropH / c.rowH) * spx),
  })).sort((a, b) => b.h - a.h);
  let x = 0, y = 0, shelfH = 0, maxW = 0;
  for (const it of items) {
    if (x + it.w > MAX_DIM) { y += shelfH; x = 0; shelfH = 0; }
    it.x = x; it.y = y;
    x += it.w;
    shelfH = Math.max(shelfH, it.h);
    maxW = Math.max(maxW, x);
  }
  return { items, width: maxW, height: y + shelfH };
}

let packed = null;
let usedSpx = 0;
for (const spx of [256, 224, 192, 160, 128]) {
  const l = layout(spx);
  if (l.height <= MAX_DIM) { packed = l; usedSpx = spx; break; }
}
if (!packed) { console.error('strips do not fit even at 128px/storey'); process.exit(1); }

// --- crop+scale each strip, then compose with xstack at explicit offsets ---
rmSync(tmpDir, { recursive: true, force: true });
mkdirSync(tmpDir, { recursive: true });

const W = packed.width;
const H = packed.height;
// The row trim can't catch sky BETWEEN dormers on a stepped roofline, so any
// bright colourless pixel in a strip's top 35% is blended toward the scene's
// murk tone instead — cloud-white on a draped wall glows like a glitch, dull
// olive reads as weathered render. Lum>200 + chroma<45 spares window frames
// (shaded whites sit lower), and the Y gate spares everything below the eaves.
const skyfix = (h) => {
  const cond = (c) =>
    // Target tone is DARK slate-olive: ACES exposure (1.46) lifts everything,
    // so a "dull" mid-grey still glows white in the murk. ~(72,74,62) pre-grade
    // renders as shadowed roof slate.
    `if(gt((r(X,Y)+g(X,Y)+b(X,Y))/3,180)*lt(max(max(r(X,Y),g(X,Y)),b(X,Y))-min(min(r(X,Y),g(X,Y)),b(X,Y)),50)*lt(Y,${Math.round(h * 0.35)}),${c}(X,Y)*0.12+${c === 'r' ? 63 : c === 'g' ? 65 : 55},${c}(X,Y))`;
  return `format=rgb24,geq=r='${cond('r')}':g='${cond('g')}':b='${cond('b')}'`;
};

const cells = packed.items.map((it, i) => {
  const f = join(tmpDir, `s${i}.png`);
  execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-i', it.rectPath,
    '-vf', `crop=${it.outW}:${it.cropH}:0:${it.cropY},scale=${it.w}:${it.h}:flags=lanczos,${skyfix(it.h)}`,
    '-frames:v', '1', f]);
  return { file: f, x: it.x, y: it.y };
});

const stripsPath = join(shopDir, 'strips.jpg');
const inputs = cells.flatMap((c) => ['-i', c.file]);
const chain = cells.map((_, i) => `[${i}:v]`).join('');
const layoutStr = cells.map((c) => `${c.x}_${c.y}`).join('|');
// xstack with fill: the shelves leave ragged right edges; never sampled.
execFileSync('ffmpeg', ['-loglevel', 'error', '-y', ...inputs,
  '-filter_complex', `${chain}xstack=inputs=${cells.length}:layout=${layoutStr}:fill=black,crop=${W}:${H}:0:0,${GRADE}`,
  '-frames:v', '1', '-q:v', '4', stripsPath], { maxBuffer: 1 << 26 });
rmSync(tmpDir, { recursive: true, force: true });

const dims = probe(stripsPath);
if (dims.w !== W || dims.h !== H) {
  console.error(`strips.jpg is ${dims.w}×${dims.h}, expected ${W}×${H} — UVs would be wrong.`);
  process.exit(1);
}

const out = {
  width: W, height: H,
  // Content hash: the engine appends it to the texture URL so a browser-cached
  // strips.jpg can never be sampled with a newer json's UV offsets.
  etag: createHash('md5').update(readFileSync(stripsPath)).digest('hex').slice(0, 10),
  strips: packed.items.map((it) => ({
    slug: it.slug, plane: it.plane, planeKind: it.planeKind,
    x: it.x, y: it.y, w: it.w, h: it.h,
    widthM: +it.widthM.toFixed(1), storeys: it.rows,
  })),
};
writeFileSync(join(shopDir, 'strips.json'), JSON.stringify(out, null, 2));

console.log(`strips.jpg ${W}×${H} @ ${usedSpx}px/storey — ${out.strips.length} strips:`);
for (const s of out.strips) {
  console.log(`  ${s.slug} p${s.plane} (${s.planeKind}) ${s.w}×${s.h}px ≈ ${s.widthM}m × ${s.storeys} storeys`);
}
