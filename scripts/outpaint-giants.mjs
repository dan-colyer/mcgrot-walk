// D5/W2 — outpaint the "giant" buildings: real-photo elevations whose OSM
// frontage run or storey height badly outgrows the photographed image (the
// Central Bar / former Leith Central Station block is the extreme case —
// a 6x4m photo covering a 51m run, 4 storeys tall). W1's edge-bay/vertical
// extension (src/shopfronts.js) already covers any building's overflow
// plausibly, but for the most prominent real photos a genuine extended
// image reads far better — the two mechanisms COMPOSE: this script grows
// each candidate image by a bounded factor (never the full overflow), and
// whatever's still left over after that is exactly what W1 fills in.
//
//   set -a; source ../whatsapp-bot/.env; set +a   # TOGETHER_API_KEY, never copied here
//   node scripts/outpaint-giants.mjs                 # preflight + run all pending
//   node scripts/outpaint-giants.mjs --force          # redo every candidate
//   node scripts/outpaint-giants.mjs --only 54,283    # just these building indices
//
// HARD CAP $2 (Dan-approved override of the general zero-Together-spend
// freeze, for this job specifically). Preflighted, idempotent, 429 backoff —
// same discipline as gen-facade-declutter-d1.mjs.
//
// Method: FLUX.1-kontext-pro image-to-image extends the ORIGINAL photo
// (always read from assets/shopfronts/originals/, a preserved copy made on
// first run so a --force re-run never has to feed the model an
// already-outpainted image) to a new, wider/taller canvas — same material,
// storey rhythm, decay. The model's own pixel fidelity to the source is not
// trusted for the signage-bearing centre: after grading the raw output, the
// TRUE original photo is composited back on top at its correct scale and
// position (bottom-aligned, horizontally centred), so the real, correctly
// spelled signage is byte-for-byte the original photo, never regenerated.
//
// Output overwrites the building's elevations/<file>.jpg in place;
// elevations.json's widthM/heightM for that entry is updated to the new
// (grown, not full-overflow) size. Registry: assets/shopfronts/outpainted.json.
//
// After running: node scripts/apply-signage.mjs && node scripts/build-elevation-atlas.mjs
// (apply-signage no-ops on these — placedSlug buildings are already skipped
// — this is just the standard atlas rebuild step.)

import { readFileSync, writeFileSync, mkdirSync, existsSync, unlinkSync, copyFileSync } from 'fs';
import { execFileSync } from 'child_process';
import { dirname, join, basename } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const shopDir = join(root, 'assets/shopfronts');
const elevDir = join(shopDir, 'elevations');
const originalsDir = join(shopDir, 'originals');
const tmpDir = join(shopDir, '.outpaint-tmp');

const KEY = process.env.TOGETHER_API_KEY;
if (!KEY) { console.error('TOGETHER_API_KEY not set — `set -a; source ../whatsapp-bot/.env; set +a`'); process.exit(1); }

const KONTEXT_MODEL = 'black-forest-labs/FLUX.1-kontext-pro';
const PRICE_PER_MP = 0.04; // $/megapixel, Together's Kontext rate
const HARD_CAP_USD = 2.00;
const STOREY_M = 3.2;
const WIDTH_GROWTH_CAP = 3;      // never ask Kontext to extend more than 3x the photo's own width
const HEIGHT_GROWTH_CAP = 2.5;   // ...or 2.5x its own height — the rest is W1's edge-bay/vertical job
const BUDGET_MP = 1.05;
const GRADE = 'eq=saturation=0.42:contrast=1.08:brightness=-0.10,colorbalance=rs=0.10:rm=0.06:bs=-0.06:bm=-0.05';

const FORCE = process.argv.includes('--force');
const onlyArg = process.argv.includes('--only') ? process.argv[process.argv.indexOf('--only') + 1] : null;
const ONLY = onlyArg ? new Set(onlyArg.split(',').map(Number)) : null;

const manifest = JSON.parse(readFileSync(join(shopDir, 'manifest.json'), 'utf8'));
const elev = JSON.parse(readFileSync(join(shopDir, 'elevations.json'), 'utf8'));
const atlas = JSON.parse(readFileSync(join(shopDir, 'atlas-pages.json'), 'utf8'));
const outpaintedPath = join(shopDir, 'outpainted.json');
const outpainted = existsSync(outpaintedPath) ? JSON.parse(readFileSync(outpaintedPath, 'utf8')) : {};

function probe(file) {
  const out = execFileSync('ffprobe', ['-v', 'error', '-select_streams', 'v:0',
    '-show_entries', 'stream=width,height', '-of', 'csv=p=0', file]).toString().trim();
  const [w, h] = out.split(',').map(Number);
  return { w, h };
}

// --- rank candidates: real-photo (placedSlug) buildings whose biggest run
// or storey height badly outgrows their own image, by how much metreage is
// missing. Central Bar tops this list by a wide margin. ---
const candidates = [];
for (const b of manifest.buildings) {
  if (!b.placedSlug) continue;
  const atlasEntry = atlas.buildings[String(b.buildingIndex)];
  if (!atlasEntry) continue;
  const region = atlasEntry.regions.find((r) => r.kind !== 'corner') || atlasEntry.regions[0];
  if (!region) continue;
  const plane = elev.elevations.find((e) => e.slug === b.placedSlug && !e.generated
    && (region.kind === 'corner' ? e.planeKind === 'corner' : e.planeKind !== 'corner'))
    || elev.elevations.find((e) => e.slug === b.placedSlug && !e.generated);
  if (!plane) continue;
  const maxRunM = Math.max(...b.runs.map((r) => r.widthM));
  const buildingHeightM = Math.max(2, b.levels) * STOREY_M;
  const widthRatio = maxRunM / plane.widthM;
  const heightGapM = buildingHeightM - plane.heightM;
  if (widthRatio < 1.8 && heightGapM < STOREY_M) continue; // not a "giant" — W1 alone is fine
  const score = Math.max(widthRatio - 1, 0) * plane.widthM + Math.max(heightGapM, 0);
  candidates.push({ b, plane, maxRunM, buildingHeightM, widthRatio, heightGapM, score });
}
candidates.sort((a, b) => b.score - a.score);
const TOP_N = 8;
let targets = candidates.slice(0, TOP_N);
if (ONLY) targets = candidates.filter((c) => ONLY.has(c.b.buildingIndex));

console.log(`${candidates.length} giant candidate(s) found, targeting top ${targets.length}:`);
for (const c of targets) {
  console.log(`  b${c.b.buildingIndex} (chainage ${c.b.chainage}, "${c.b.businesses.map((x) => x.name).join('/') || 'no name'}"): ` +
    `${c.plane.widthM}x${c.plane.heightM}m photo, run ${c.maxRunM.toFixed(1)}m, building ${c.buildingHeightM.toFixed(1)}m tall (score ${c.score.toFixed(1)})`);
}

mkdirSync(originalsDir, { recursive: true });
mkdirSync(tmpDir, { recursive: true });

function spec(c) {
  const targetWidthM = Math.min(c.maxRunM, c.plane.widthM * WIDTH_GROWTH_CAP);
  const targetHeightM = Math.min(c.buildingHeightM, c.plane.heightM * HEIGHT_GROWTH_CAP);
  const aspect = targetWidthM / targetHeightM;
  let genH = Math.sqrt((BUDGET_MP * 1_000_000) / aspect);
  let genW = genH * aspect;
  genW = Math.max(384, Math.min(1440, Math.round(genW / 64) * 64));
  genH = Math.max(384, Math.min(1440, Math.round(genH / 64) * 64));
  const prompt = [
    'Extend this exact same building\'s elevation photograph outward on both sides and upward, filling a wider and taller canvas.',
    'Continue the SAME sandstone material, storey rhythm, window style, cornicing and post-apocalyptic weathering and decay visible in the source image — a derelict Edinburgh tenement.',
    'Straight-on orthographic elevation, camera perfectly perpendicular to the wall, no perspective distortion, overcast dull grey flat light.',
    'Extend the wall and windows only — no new signage, no text, no lettering, no shop names, no logos anywhere in the extended area.',
    'No people, no vehicles, no sky, no pavement — the wall fills the entire frame edge to edge.',
  ].join(' ');
  return { targetWidthM, targetHeightM, genW, genH, prompt };
}

async function callTogether(body, attempt = 1) {
  const res = await fetch('https://api.together.xyz/v1/images/generations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${KEY}` },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(120_000),
  });
  if (res.status === 429 && attempt <= 5) {
    const backoffMs = 2000 * attempt;
    console.warn(`    rate limited, retrying in ${backoffMs}ms (attempt ${attempt}/5)`);
    await new Promise((r) => setTimeout(r, backoffMs));
    return callTogether(body, attempt + 1);
  }
  if (!res.ok) throw new Error(`API ${res.status}: ${(await res.text().catch(() => '')).slice(0, 300)}`);
  const b64 = (await res.json()).data?.[0]?.b64_json;
  if (!b64) throw new Error('no image in response');
  return Buffer.from(b64, 'base64');
}

function looksLikeRealImage(path) {
  try {
    const out = execFileSync('ffprobe', ['-v', 'error', '-select_streams', 'v:0',
      '-show_entries', 'stream=width,height', '-of', 'csv=p=0', path], { encoding: 'utf8' }).trim();
    const [w, h] = out.split(',').map(Number);
    return Number.isFinite(w) && Number.isFinite(h) && w > 0 && h > 0;
  } catch { return false; }
}

let spendUsd = 0;

async function outpaintOne(c) {
  const s = spec(c);
  const fileName = basename(c.plane.file);
  const origPath = join(originalsDir, fileName);
  const liveOutPath = join(elevDir, fileName);
  if (!existsSync(origPath)) copyFileSync(liveOutPath, origPath); // preserve true original, once

  const b64 = readFileSync(origPath).toString('base64');
  const raw = await callTogether({
    model: KONTEXT_MODEL, prompt: s.prompt, image_url: `data:image/jpeg;base64,${b64}`,
    width: s.genW, height: s.genH, n: 1, response_format: 'b64_json',
  });
  spendUsd += (s.genW * s.genH / 1_000_000) * PRICE_PER_MP;

  const rawPath = join(tmpDir, `b${c.b.buildingIndex}-raw.jpg`);
  writeFileSync(rawPath, raw);
  if (!looksLikeRealImage(rawPath)) { unlinkSync(rawPath); throw new Error('response did not decode as an image'); }
  const { w: rw, h: rh } = probe(rawPath);

  // Re-encode/crop to exactly genW x genH (Kontext can return slightly
  // different dims), then grade the BACKGROUND only — the original photo
  // pasted on top next is already graded from its own generation.
  const gradedPath = join(tmpDir, `b${c.b.buildingIndex}-graded.jpg`);
  execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-i', rawPath,
    '-vf', `scale=${s.genW}:${s.genH}:force_original_aspect_ratio=increase,crop=${s.genW}:${s.genH},${GRADE}`,
    '-frames:v', '1', '-q:v', '3', gradedPath]);

  // Composite the true original back on top, at its correct scale (uniform
  // px-per-metre derived from the SAME target dims used to size the canvas,
  // so it's never stretched) and position: bottom-aligned (ground floor
  // stays at the wall base), horizontally centred.
  const pxPerM = s.genW / s.targetWidthM;
  const origW = Math.round(c.plane.widthM * pxPerM);
  const origH = Math.round(c.plane.heightM * pxPerM);
  const origX = Math.round((s.genW - origW) / 2);
  const origY = s.genH - origH;
  const finalPath = liveOutPath;
  execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-i', gradedPath, '-i', origPath,
    '-filter_complex', `[1:v]scale=${origW}:${origH}:flags=lanczos[orig];[0:v][orig]overlay=${origX}:${origY}[v]`,
    '-map', '[v]', '-frames:v', '1', '-q:v', '3', join(tmpDir, `b${c.b.buildingIndex}-final.jpg`)]);
  copyFileSync(join(tmpDir, `b${c.b.buildingIndex}-final.jpg`), finalPath);

  return s;
}

const pending = targets.filter((c) => FORCE || !outpainted[c.b.buildingIndex]);
console.log(`\n${targets.length} target(s), ${pending.length} pending. Hard cap $${HARD_CAP_USD.toFixed(2)}.`);
if (!pending.length) { console.log('Nothing to do (pass --force to redo).'); process.exit(0); }

console.log(`\nPreflight: b${pending[0].b.buildingIndex}`);
const done = [];
try {
  const s = await outpaintOne(pending[0]);
  done.push({ c: pending[0], s });
  console.log(`Preflight OK (${s.targetWidthM.toFixed(1)}x${s.targetHeightM.toFixed(1)}m, ${s.genW}x${s.genH}px). Spend so far: $${spendUsd.toFixed(4)}\n`);
} catch (err) {
  console.error(`PREFLIGHT FAILED: ${err.message}`);
  process.exit(1);
}

let failed = 0;
const failedList = [];
for (const c of pending.slice(1)) {
  const estNext = spec(c).genW * spec(c).genH / 1_000_000 * PRICE_PER_MP;
  if (spendUsd + estNext > HARD_CAP_USD) {
    console.error(`STOP: next image would exceed the $${HARD_CAP_USD} cap. Spend so far: $${spendUsd.toFixed(4)}`);
    break;
  }
  try {
    const s = await outpaintOne(c);
    done.push({ c, s });
    console.log(`  outpainted b${c.b.buildingIndex}: ${s.targetWidthM.toFixed(1)}x${s.targetHeightM.toFixed(1)}m`);
  } catch (err) {
    console.error(`  FAILED b${c.b.buildingIndex}: ${err.message}`);
    failed++;
    failedList.push(c.b.buildingIndex);
  }
}

execFileSync('rm', ['-rf', tmpDir]);

console.log(`\n${done.length} outpainted, ${failed} failed. Actual spend: $${spendUsd.toFixed(4)}`);
if (failedList.length) console.log(`Failed building indices: ${failedList.join(', ')}`);

// --- merge into elevations.json + outpainted.json registry ---
for (const { c, s } of done) {
  const entry = elev.elevations.find((e) => e === c.plane || (e.slug === c.plane.slug && e.plane === c.plane.plane));
  if (entry) { entry.widthM = Number(s.targetWidthM.toFixed(2)); entry.heightM = Number(s.targetHeightM.toFixed(2)); }
  outpainted[c.b.buildingIndex] = { slug: c.b.placedSlug, plane: c.plane.plane, targetWidthM: entry.widthM, targetHeightM: entry.heightM };
}
if (done.length) {
  writeFileSync(join(shopDir, 'elevations.json'), JSON.stringify(elev, null, 2));
  writeFileSync(outpaintedPath, JSON.stringify(outpainted, null, 2));
  console.log(`elevations.json + outpainted.json updated (${done.length} entries).`);
  console.log('Next: node scripts/apply-signage.mjs && node scripts/build-elevation-atlas.mjs');
}
if (failed) process.exitCode = 1;
