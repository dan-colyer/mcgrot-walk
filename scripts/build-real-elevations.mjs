// D4/W2 — one full-elevation image (ground shopfront + upper storeys, the SAME
// real photo, together) per placed building's plane, replacing the old
// split "ground tiles from the atlas + a separate upper strip" composition.
//
//   node scripts/build-real-elevations.mjs
//
// Source: assets/shopfronts/rect/<slug>-p<n>.jpg (the whole rectified wall,
// ground band ...through... eaves — rectify-facades.mjs already produces this
// BEFORE slicing it into the old band tiles). This script:
//   1. composites any fixed/ (Kontext-decluttered) ground-band tile back over
//      the rect image at its native position, so the decluttered pixels ship
//      in the one true elevation rather than a separately-tracked patch;
//   2. trims baked-in sky off the top (same heuristic as build-upper-strips.mjs)
//      and crops to the real storeys region (ground band + (storeys-1) upper
//      rows — matches rectify-facades.mjs's own geometry so nothing drifts);
//   3. applies the same GRADE as every other façade texture in the project.
//
// Output: assets/shopfronts/elevations/<slug>-p<n>.jpg  (one per usable plane)
//         assets/shopfronts/elevations.json:
//           { elevations: [{slug, plane, planeKind, file, widthM, heightM, storeys}] }
//
// Deliberately does NOT force the image to any building's exact frontage
// width — src/shopfronts.js v3 fits the run to the image's own natural aspect
// (crop/centre, small stretch tolerated), same policy strips.jpg already used.

import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync } from 'fs';
import { execFileSync } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const shopDir = join(root, 'assets/shopfronts');
const rectDir = join(shopDir, 'rect');
const fixedDir = join(shopDir, 'fixed');
const outDir = join(shopDir, 'elevations');
const tmpDir = join(shopDir, '.elevations-tmp');

const TOP_INSET = 0.10;         // matches rectify-facades.mjs
const MAX_GROUND_PER_PLANE = 3; // matches rectify-facades.mjs
const STOREY_M = 3.2;
const GRADE = 'eq=saturation=0.42:contrast=1.08:brightness=-0.10,colorbalance=rs=0.10:rm=0.06:bs=-0.06:bm=-0.05';

const plan = JSON.parse(readFileSync(join(root, 'scripts/facade-plan.json'), 'utf8'));
const placement = JSON.parse(readFileSync(join(root, 'assets/shopfronts/placement.json'), 'utf8'));
const placedSlugs = new Set(Object.values(placement.photos).map((p) => p.slug));

function probe(file) {
  const out = execFileSync('ffprobe', ['-v', 'error', '-select_streams', 'v:0',
    '-show_entries', 'stream=width,height', '-of', 'csv=p=0', file]).toString().trim();
  const [w, h] = out.split(',').map(Number);
  return { w, h };
}

// Same sky-scan as build-upper-strips.mjs: bright + low-chroma (or plainly
// blue) rows at the top of the crop are cloud/eaves baked in by an over-tall
// vision-agent quad, not stone.
function skyTrimPx(rectPath, cropW, cropH, cropY) {
  const scanH = Math.floor(cropH * 0.45);
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
    if (sky / SW > 0.35) trimRows = y + 1;
    else if (y - trimRows > 2) break;
  }
  return Math.round((trimRows / SH) * scanH);
}

const skyfix = (h) => {
  const cond = (c) =>
    `if(gt((r(X,Y)+g(X,Y)+b(X,Y))/3,180)*lt(max(max(r(X,Y),g(X,Y)),b(X,Y))-min(min(r(X,Y),g(X,Y)),b(X,Y)),50)*lt(Y,${Math.round(h * 0.35)}),${c}(X,Y)*0.12+${c === 'r' ? 63 : c === 'g' ? 65 : 55},${c}(X,Y))`;
  return `format=rgb24,geq=r='${cond('r')}':g='${cond('g')}':b='${cond('b')}'`;
};

rmSync(outDir, { recursive: true, force: true });
rmSync(tmpDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });
mkdirSync(tmpDir, { recursive: true });

const elevations = [];
let skipped = 0;

for (const photo of plan) {
  if (!placedSlugs.has(photo.slug) || !photo.planes) continue;

  photo.planes.forEach((plane, pi) => {
    const rectPath = join(rectDir, `${photo.slug}-p${pi}.jpg`);
    if (!existsSync(rectPath)) { skipped++; return; }
    const storeys = Math.max(1, plane.storeys ?? 4);
    const { w: outW, h: outH } = probe(rectPath);
    const groundFrac = Math.max(0.08, Math.min(1, plane.groundFrac ?? 0.28));
    const gH = Math.round(outH * groundFrac);
    const gY = outH - gH;

    // --- 1. composite any fixed/ decluttered ground tile(s) back in ---
    let workPath = rectPath;
    const gAspect = outW / Math.max(1, gH);
    const gN = Math.max(1, Math.min(MAX_GROUND_PER_PLANE, Math.round(gAspect / 2)));
    const gW = Math.floor(outW / gN);
    const overlays = [];
    for (let i = 0; i < gN; i++) {
      const fixedPath = join(fixedDir, `${photo.slug}-p${pi}-ground-${i}.jpg`);
      if (existsSync(fixedPath)) overlays.push({ i, fixedPath });
    }
    if (overlays.length) {
      const composed = join(tmpDir, `${photo.slug}-p${pi}-composed.png`);
      const inputs = ['-i', rectPath];
      let filter = '';
      let lastLabel = '0:v';
      overlays.forEach((ov, k) => {
        inputs.push('-i', ov.fixedPath);
        const scaled = `s${k}`;
        filter += `[${k + 1}:v]scale=${gW}:${gH}:flags=lanczos[${scaled}];`;
        const outLabel = k === overlays.length - 1 ? 'v' : `m${k}`;
        filter += `[${lastLabel}][${scaled}]overlay=${ov.i * gW}:${gY}[${outLabel}];`;
        lastLabel = outLabel;
      });
      execFileSync('ffmpeg', ['-loglevel', 'error', '-y', ...inputs,
        '-filter_complex', filter.slice(0, -1), '-map', '[v]', '-frames:v', '1', composed]);
      workPath = composed;
    }

    // --- 2. crop to the real storeys region (top inset + sky trim; keep the
    //     full ground band at the bottom) ---
    const topInset = Math.round(outH * TOP_INSET);
    let cropY = topInset;
    let cropH = outH - cropY;
    const trim = skyTrimPx(workPath, outW, Math.round(cropH * 0.45) > 0 ? cropH : cropH, cropY);
    cropY += trim;
    cropH -= trim;
    if (cropH < gH + 32) { skipped++; return; } // barely any upper storey left — not worth it

    const outPath = join(outDir, `${photo.slug}-p${pi}.jpg`);
    execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-i', workPath,
      '-vf', `crop=${outW}:${cropH}:0:${cropY},${skyfix(cropH)},${GRADE}`,
      '-frames:v', '1', '-q:v', '3', outPath]);

    // gH pixels represents ONE ground storey (STOREY_M metres) by construction
    // (rectify-facades' groundFrac is defined against the same storey height),
    // so px-per-metre = gH / STOREY_M.
    const pxPerMetre = gH / STOREY_M;
    elevations.push({
      slug: photo.slug, plane: pi, planeKind: plane.kind || 'terrace',
      file: `elevations/${photo.slug}-p${pi}.jpg`,
      widthM: +(outW / pxPerMetre).toFixed(1),
      heightM: +(cropH / pxPerMetre).toFixed(1),
      storeys,
      declutteredGround: overlays.length > 0,
    });
  });
}

writeFileSync(join(shopDir, 'elevations.json'), JSON.stringify({ elevations }, null, 2));
rmSync(tmpDir, { recursive: true, force: true });

console.log(`${elevations.length} real-photo elevations written to assets/shopfronts/elevations/ (${skipped} skipped)`);
for (const e of elevations) {
  console.log(`  ${e.slug} p${e.plane} (${e.planeKind}) ${e.widthM}m x ${e.heightM}m, ${e.storeys} storeys${e.declutteredGround ? ' [decluttered]' : ''}`);
}
