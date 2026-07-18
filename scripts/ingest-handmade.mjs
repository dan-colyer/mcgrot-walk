// D4.1/W2 — ingest Dan's hand-generated shopfronts (a reference photo pasted
// into ChatGPT with docs/shopfront-wishlist.md's prompt, dropped as
// assets/shopfronts/handmade/b<buildingIndex>.<png|jpg>) into the engine's
// elevation pipeline.
//
//   node scripts/ingest-handmade.mjs
//
// For every file in assets/shopfronts/handmade/:
//   - validates the index exists in manifest.json and isn't a real-photo building,
//   - warns (doesn't abort) if the drop's aspect ratio is >25% off the
//     building's true aspect — Dan can eyeball whether that's fine or worth
//     re-generating,
//   - scales, centre-crops to the building's true aspect, and applies the
//     SAME grade chain as every other façade texture,
//   - writes assets/shopfronts/elevations/b<index>.jpg,
//   - removes any borrowed.json entry for that building (a handmade drop
//     always wins over a borrow),
//   - registers the building in handmade.json so apply-signage.mjs SKIPS the
//     name overlay (the image already carries real, photographed signage),
//   - reruns apply-signage.mjs + build-elevation-atlas.mjs.
//
// Idempotent: safe to run after every single drop — files already ingested
// just regenerate identical output from the same source image.

import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync } from 'fs';
import { execFileSync } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const shopDir = join(root, 'assets/shopfronts');
const handmadeDir = join(shopDir, 'handmade');
const elevDir = join(shopDir, 'elevations');

const STOREY_M = 3.2;
const GRADE = 'eq=saturation=0.42:contrast=1.08:brightness=-0.10,colorbalance=rs=0.10:rm=0.06:bs=-0.06:bm=-0.05';
const ASPECT_WARN_FRAC = 0.25;

mkdirSync(handmadeDir, { recursive: true });

const manifest = JSON.parse(readFileSync(join(shopDir, 'manifest.json'), 'utf8'));
const byIndex = new Map(manifest.buildings.map((b) => [b.buildingIndex, b]));

const elevPath = join(shopDir, 'elevations.json');
const elev = JSON.parse(readFileSync(elevPath, 'utf8'));
const borrowedPath = join(shopDir, 'borrowed.json');
const borrowed = existsSync(borrowedPath) ? JSON.parse(readFileSync(borrowedPath, 'utf8')) : {};
const handmadePath = join(shopDir, 'handmade.json');
const handmade = existsSync(handmadePath) ? JSON.parse(readFileSync(handmadePath, 'utf8')) : {};

function widthOf(b) {
  return Math.max(4, Math.min(20, Math.max(...b.runs.map((r) => r.widthM))));
}
function hasChamfer(b) {
  return b.runs.some((r) => r.isChamfer);
}
function probe(file) {
  const out = execFileSync('ffprobe', ['-v', 'error', '-select_streams', 'v:0',
    '-show_entries', 'stream=width,height', '-of', 'csv=p=0', file]).toString().trim();
  const [w, h] = out.split(',').map(Number);
  return { w, h };
}

const files = existsSync(handmadeDir)
  ? readdirSync(handmadeDir).filter((f) => /^b\d+\.(png|jpg|jpeg)$/i.test(f))
  : [];

if (!files.length) {
  console.log('No files in assets/shopfronts/handmade/ matching b<buildingIndex>.<png|jpg>.');
  process.exit(0);
}

const generatedEntries = new Map(elev.elevations.filter((e) => e.generated).map((e) => [e.buildingIndex, e]));

let ingested = 0, skippedNoBuilding = 0, aspectWarnings = 0;

for (const f of files) {
  const m = f.match(/^b(\d+)\.(png|jpg|jpeg)$/i);
  const buildingIndex = Number(m[1]);
  const b = byIndex.get(buildingIndex);
  if (!b) { console.warn(`  SKIP ${f}: buildingIndex ${buildingIndex} not in manifest.json`); skippedNoBuilding++; continue; }
  if (b.placedSlug) { console.warn(`  SKIP ${f}: b${buildingIndex} is a real-photo building already`); skippedNoBuilding++; continue; }

  const srcPath = join(handmadeDir, f);
  const { w: sw, h: sh } = probe(srcPath);
  const trueWidthM = widthOf(b);
  const trueHeightM = b.levels * STOREY_M;
  const trueAspect = trueWidthM / trueHeightM;
  const srcAspect = sw / sh;
  const aspectDelta = Math.abs(srcAspect - trueAspect) / trueAspect;
  if (aspectDelta > ASPECT_WARN_FRAC) {
    console.warn(`  WARN b${buildingIndex}: drop aspect ${srcAspect.toFixed(2)} is ${(aspectDelta * 100).toFixed(0)}% off the building's true aspect ${trueAspect.toFixed(2)} (${trueWidthM.toFixed(1)}m x ${trueHeightM.toFixed(1)}m) — check the crop`);
    aspectWarnings++;
  }

  // Centre-crop to the true aspect (never stretch), then apply the standard grade.
  let cropW = sw, cropH = sh;
  if (srcAspect > trueAspect) cropW = Math.round(sh * trueAspect);
  else cropH = Math.round(sw / trueAspect);
  const cropX = Math.round((sw - cropW) / 2);
  const cropY = Math.round((sh - cropH) / 2);

  const outPath = join(elevDir, `b${buildingIndex}.jpg`);
  execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-i', srcPath,
    '-vf', `crop=${cropW}:${cropH}:${cropX}:${cropY},${GRADE}`,
    '-frames:v', '1', '-q:v', '3', outPath]);

  const tier = (b.businesses.length > 0 || hasChamfer(b)) ? 'premium' : 'cheap';
  generatedEntries.set(buildingIndex, {
    buildingIndex, generated: true, tier,
    file: `elevations/b${buildingIndex}.jpg`,
    widthM: trueWidthM, heightM: trueHeightM, storeys: b.levels,
  });

  delete borrowed[buildingIndex];
  handmade[buildingIndex] = {
    credit: 'hand-generated (ChatGPT, from a reference photo)',
    source: `handmade/${f}`,
    addedAt: new Date().toISOString(),
  };
  ingested++;
}

const bySlugPlane = elev.elevations.filter((e) => !e.generated);
elev.elevations = [...bySlugPlane, ...generatedEntries.values()];
writeFileSync(elevPath, JSON.stringify(elev, null, 2));
writeFileSync(borrowedPath, JSON.stringify(borrowed, null, 2));
writeFileSync(handmadePath, JSON.stringify(handmade, null, 2));

console.log(`${ingested} handmade elevation(s) ingested, ${skippedNoBuilding} skipped, ${aspectWarnings} aspect warning(s).`);

if (ingested) {
  console.log('\nRunning apply-signage.mjs...');
  execFileSync('node', [join(root, 'scripts/apply-signage.mjs')], { stdio: 'inherit' });
  console.log('\nRunning build-elevation-atlas.mjs...');
  execFileSync('node', [join(root, 'scripts/build-elevation-atlas.mjs')], { stdio: 'inherit' });
}
