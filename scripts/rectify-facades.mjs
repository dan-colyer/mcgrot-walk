// Rectify Leith Walk façade photos into flat, square-on wall textures.
//
//   node scripts/rectify-facades.mjs [--only <slug>]
//
// The photos were all shot from across the street, so every façade is a skewed
// quadrilateral. Mapping four corners back to a rectangle is a homography —
// ffmpeg's `perspective` filter does it exactly, for free. This is NOT an AI
// job: an image model would re-imagine the shop and we'd lose the real Leith
// Walk, which is the whole point.
//
// Input:  scripts/facade-plan.json  (corners, per plane — from the vision pass)
//         assets/shopfronts/raw/<slug>.raw  (cached Commons originals; JPEG
//         despite the extension). NEVER re-hit the network here — see the 429
//         scar tissue in PLAN-2-full-street.md.
// Output: assets/shopfronts/rect/<slug>-p<n>.jpg   full rectified façade
//         assets/shopfronts/bands/<slug>-p<n>-ground-<i>.jpg
//         assets/shopfronts/bands/<slug>-p<n>-upper-<r><i>.jpg
//
// A building that wraps a junction (Robbie's Bar, the Harp & Castle) has TWO
// flat elevations with a curve between them — hence planes[], not one plane.
// Fitting a single quad across the bend smears the texture.

import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execFileSync } from 'child_process';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const RAW_DIR = join(root, 'assets/shopfronts/raw');
const RECT_DIR = join(root, 'assets/shopfronts/rect');
const BAND_DIR = join(root, 'assets/shopfronts/bands');

const TILE_W = 512;
const TILE_H = 256;          // 2:1 — one tile = 3.2m storey × 6.4m of frontage
const RECT_H = 1024;         // working height of the rectified façade
const MIN_CONFIDENCE = 0.45; // below this the VLM's corners are not trustworthy
const TOP_INSET = 0.10;      // drop the top 10% of a plane: eaves, cornice, sky
const MIN_EDGE_BALANCE = 0.25; // opposite edges this lopsided => shot down the street

// Caps keep the atlas inside its VRAM budget (see build-facade-atlas.mjs).
const MAX_GROUND_PER_PLANE = 2;
const MAX_UPPER_PER_PLANE = 2;

const only = process.argv.includes('--only')
  ? process.argv[process.argv.indexOf('--only') + 1]
  : null;

const plan = JSON.parse(readFileSync(join(root, 'scripts/facade-plan.json'), 'utf8'));

rmSync(RECT_DIR, { recursive: true, force: true });
rmSync(BAND_DIR, { recursive: true, force: true });
mkdirSync(RECT_DIR, { recursive: true });
mkdirSync(BAND_DIR, { recursive: true });

const dist = (p, q) => Math.hypot(p[0] - q[0], p[1] - q[1]);

// The source quad IS a rectangle in reality, so the mean of its two horizontal
// edges over the mean of its two verticals estimates the façade's true
// width:height. Exact under a weak-perspective (affine) view and it degrades
// gracefully as obliqueness grows — good enough to stop the warp stretching a
// four-storey tenement into a letterbox.
function estimateAspect(c, iw, ih) {
  const px = (p) => [p[0] * iw, p[1] * ih];
  const tl = px(c.tl), tr = px(c.tr), br = px(c.br), bl = px(c.bl);
  const w = (dist(tl, tr) + dist(bl, br)) / 2;
  const h = (dist(tl, bl) + dist(tr, br)) / 2;
  return h > 0 ? w / h : 1;
}

// A near-degenerate quad — one where the far edge has collapsed to almost
// nothing — is a photo shot straight down the street rather than at the wall.
// Rectifying it stretches a handful of far-edge pixels across half the output,
// and the result is mush. The vision agent cannot reliably self-report this
// (one such plane came back at 0.5 confidence with a right edge 1/10th the
// height of its left), so it has to be caught geometrically.
function edgeBalance(c, iw, ih) {
  const px = (p) => [p[0] * iw, p[1] * ih];
  const tl = px(c.tl), tr = px(c.tr), br = px(c.br), bl = px(c.bl);
  const left = dist(tl, bl);
  const right = dist(tr, br);
  const top = dist(tl, tr);
  const bottom = dist(bl, br);
  return Math.min(
    Math.min(left, right) / Math.max(left, right, 1),
    Math.min(top, bottom) / Math.max(top, bottom, 1)
  );
}

function probe(file) {
  const out = execFileSync('ffprobe', [
    '-v', 'error', '-select_streams', 'v:0',
    '-show_entries', 'stream=width,height', '-of', 'csv=p=0', file,
  ]).toString().trim();
  const [w, h] = out.split(',').map(Number);
  return { w, h };
}

const manifest = [];
let planeCount = 0;
let groundCount = 0;
let upperCount = 0;
const skipped = [];

for (const photo of plan) {
  if (only && photo.slug !== only) continue;

  const raw = join(RAW_DIR, `${photo.slug}.raw`);
  if (!existsSync(raw)) { skipped.push(`${photo.slug}: no cached raw`); continue; }
  if (!photo.planes || !photo.planes.length) { skipped.push(`${photo.slug}: no usable plane (tier ${photo.treatment})`); continue; }

  const { w: iw, h: ih } = probe(raw);

  photo.planes.forEach((plane, pi) => {
    const c = plane.corners;
    if (!c || !c.tl || !c.tr || !c.br || !c.bl) { skipped.push(`${photo.slug} p${pi}: no corners`); return; }
    if ((plane.confidence ?? 0) < MIN_CONFIDENCE) { skipped.push(`${photo.slug} p${pi}: confidence ${plane.confidence}`); return; }

    const bal = edgeBalance(c, iw, ih);
    if (bal < MIN_EDGE_BALANCE) {
      skipped.push(`${photo.slug} p${pi}: degenerate quad (edge balance ${bal.toFixed(2)})`);
      return;
    }

    const aspect = estimateAspect(c, iw, ih);
    const outH = RECT_H;
    const outW = Math.max(TILE_W, Math.min(6144, Math.round(outH * aspect)));

    // ffmpeg's corner order is TL, TR, BL, BR — NOT clockwise. Bottom-left and
    // bottom-right are swapped versus a natural winding; getting this wrong
    // yields a scrambled image that still looks superficially plausible.
    const f = (v) => v.toFixed(4);
    const persp = [
      `x0=W*${f(c.tl[0])}`, `y0=H*${f(c.tl[1])}`,
      `x1=W*${f(c.tr[0])}`, `y1=H*${f(c.tr[1])}`,
      `x2=W*${f(c.bl[0])}`, `y2=H*${f(c.bl[1])}`,
      `x3=W*${f(c.br[0])}`, `y3=H*${f(c.br[1])}`,
      'sense=source', 'interpolation=cubic',
    ].join(':');

    const rectPath = join(RECT_DIR, `${photo.slug}-p${pi}.jpg`);
    execFileSync('ffmpeg', [
      '-loglevel', 'error', '-y', '-i', raw,
      // perspective maps the source quad onto the FULL output frame, and the
      // output keeps the INPUT's dimensions — so the façade lands at the
      // photo's aspect, not the building's. scale fixes that.
      '-vf', `perspective=${persp},scale=${outW}:${outH}:flags=lanczos`,
      '-frames:v', '1', '-q:v', '3', rectPath,
    ]);
    planeCount++;

    const groundFrac = Math.max(0.08, Math.min(1, plane.groundFrac ?? 0.28));
    const storeys = Math.max(1, plane.storeys ?? 4);

    // --- ground band: the shopfront itself, the bottom groundFrac of the wall.
    const gH = Math.round(outH * groundFrac);
    const gY = outH - gH;
    // Slice a wide frontage into several 2:1 tiles rather than squashing a
    // whole terrace into one — keeps the shops at roughly life scale.
    const gAspect = outW / Math.max(1, gH);
    const gN = Math.max(1, Math.min(MAX_GROUND_PER_PLANE, Math.round(gAspect / 2)));
    const gW = Math.floor(outW / gN);

    for (let i = 0; i < gN; i++) {
      const out = join(BAND_DIR, `${photo.slug}-p${pi}-ground-${i}.jpg`);
      execFileSync('ffmpeg', [
        '-loglevel', 'error', '-y', '-i', rectPath,
        '-vf', `crop=${gW}:${gH}:${i * gW}:${gY},scale=${TILE_W}:${TILE_H}:flags=lanczos`,
        '-frames:v', '1', '-q:v', '3', out,
      ]);
      manifest.push({
        file: `bands/${photo.slug}-p${pi}-ground-${i}.jpg`,
        slug: photo.slug, plane: pi, kind: 'ground',
        cornerBuilding: !!photo.isCornerBuilding,
        planeKind: plane.kind || 'terrace',
        treatment: photo.treatment, identity: photo.identity || null,
      });
      groundCount++;
    }

    // --- upper bands: the tenement storeys above. Same real building, so the
    // street reads as continuous instead of photo-on-flat-khaki.
    if (photo.hasUpper && storeys > 1 && groundFrac < 0.95) {
      // Skip the roofline zone. Where the vision agent placed the top corners
      // even slightly above the real eaves, the topmost slice is cornice and
      // cloud — and a wall made of sky is worse than no photo at all. Anything
      // that still slips through gets caught by cull-bands.mjs.
      const topInset = Math.round(outH * TOP_INSET);
      const uTop = topInset;
      const uH = outH - gH - topInset;            // the usable upper region
      if (uH < TILE_H / 2) return;                // nothing worth slicing
      const rows = Math.max(1, storeys - 1);
      const rowH = Math.floor(uH / rows);
      const uAspect = outW / Math.max(1, rowH);
      const uN = Math.max(1, Math.min(MAX_UPPER_PER_PLANE, Math.round(uAspect / 2)));
      const uW = Math.floor(outW / uN);

      // Sample from DIFFERENT storeys so two tiles off one building don't come
      // out identical; the middle rows avoid the eaves and the shopfront seam.
      for (let i = 0; i < uN; i++) {
        const r = rows === 1 ? 0 : Math.min(rows - 1, i % rows);
        const out = join(BAND_DIR, `${photo.slug}-p${pi}-upper-${r}${i}.jpg`);
        execFileSync('ffmpeg', [
          '-loglevel', 'error', '-y', '-i', rectPath,
          '-vf', `crop=${uW}:${rowH}:${i * uW}:${uTop + r * rowH},scale=${TILE_W}:${TILE_H}:flags=lanczos`,
          '-frames:v', '1', '-q:v', '3', out,
        ]);
        manifest.push({
          file: `bands/${photo.slug}-p${pi}-upper-${r}${i}.jpg`,
          slug: photo.slug, plane: pi, kind: 'upper',
          cornerBuilding: !!photo.isCornerBuilding,
          planeKind: plane.kind || 'terrace',
          treatment: photo.treatment, identity: photo.identity || null,
        });
        upperCount++;
      }
    }
  });
}

writeFileSync(join(root, 'assets/shopfronts/bands.json'), JSON.stringify(manifest, null, 2));

console.log(`rectified ${planeCount} planes → ${groundCount} ground + ${upperCount} upper = ${manifest.length} tiles`);
if (skipped.length) {
  console.log(`\nskipped ${skipped.length}:`);
  for (const s of skipped) console.log(`  - ${s}`);
}
console.log('\nNow LOOK at the contact sheet before trusting any of this:');
console.log('  node scripts/contact-sheet.mjs');
