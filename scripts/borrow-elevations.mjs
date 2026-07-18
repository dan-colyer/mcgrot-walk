// D4.1/W1 — borrow-fill every frontage building with no elevation (79 of
// them, from the Together credit outage in D4) by copying a similar donor
// building's already-generated AI elevation. Zero Together spend.
//
//   node scripts/borrow-elevations.mjs           # fill anything still missing
//   node scripts/borrow-elevations.mjs --force   # re-pick donors for every borrowed building
//
// Donor pool: buildings with a genuine AI generation (never the 18
// real-photo buildings — their photographed signage would duplicate if
// reused elsewhere; never an already-borrowed building either, so borrows
// can't chain). A donor must be:
//   - the SAME storey count (levels) as the borrower,
//   - >=150m away in chainage from the borrower,
//   - not already borrowed by another building within 150m of this one
//     (keeps repeats spread out along the street rather than clustering).
// Ties broken by closest frontage width. The donor image is centre-cropped
// to the borrower's own width (never stretched) — heightM always matches
// exactly since height is storey-count-derived, not photo-derived.
//
// Records every borrow in assets/shopfronts/borrowed.json
// ({buildingIndex: donorIndex}) — gen-facade-elevations.mjs and
// ingest-handmade.mjs both treat a borrowed file as MISSING (their
// existsSync-style checks consult this file), so a later real generation or
// handmade drop replaces a borrow freely.
//
// Credits: donors are always AI-generated buildings, which carry no
// credits.json entry (that file only covers real photos) — so there is
// nothing to copy. borrowed.json IS the provenance record for a borrow.
//
// After running: node scripts/apply-signage.mjs && node scripts/build-elevation-atlas.mjs
// (apply-signage already works per-building off manifest.json + its own
// businesses array, so it stamps the BORROWING building's own names onto
// the copied image with no changes needed to that script.)

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { execFileSync } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const shopDir = join(root, 'assets/shopfronts');
const elevDir = join(shopDir, 'elevations');

const FORCE = process.argv.includes('--force');
const MIN_CHAINAGE_GAP = 150;
const STOREY_M = 3.2;

const manifest = JSON.parse(readFileSync(join(shopDir, 'manifest.json'), 'utf8'));
const elevPath = join(shopDir, 'elevations.json');
const elev = JSON.parse(readFileSync(elevPath, 'utf8'));
const borrowedPath = join(shopDir, 'borrowed.json');
const borrowed = existsSync(borrowedPath) ? JSON.parse(readFileSync(borrowedPath, 'utf8')) : {};

const byIndex = new Map(manifest.buildings.map((b) => [b.buildingIndex, b]));

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

// Original AI-generation elevations.json entries, keyed by buildingIndex —
// snapshot taken BEFORE this run touches anything, so a borrowed entry from
// a previous run of this script never becomes a donor for a new one.
const generatedByBuilding = new Map(elev.elevations.filter((e) => e.generated).map((e) => [e.buildingIndex, e]));

const donorPool = manifest.buildings.filter((b) =>
  !b.placedSlug && generatedByBuilding.has(b.buildingIndex) && !borrowed[b.buildingIndex]
);

const targets = manifest.buildings
  .filter((b) => {
    if (b.placedSlug) return false;
    const hasRealGen = generatedByBuilding.has(b.buildingIndex) && !borrowed[b.buildingIndex];
    if (hasRealGen) return false;
    if (borrowed[b.buildingIndex] && !FORCE) return false;
    return true;
  })
  .sort((a, b) => a.chainage - b.chainage);

const assignments = { ...borrowed };

function pickDonor(b) {
  const bWidth = widthOf(b);
  let best = null, bestDelta = Infinity;
  for (const d of donorPool) {
    if (d.buildingIndex === b.buildingIndex) continue;
    if (d.levels !== b.levels) continue;
    if (Math.abs(d.chainage - b.chainage) < MIN_CHAINAGE_GAP) continue;
    const conflict = Object.entries(assignments).some(([borrowerIdx, donorIdx]) => {
      if (Number(donorIdx) !== d.buildingIndex) return false;
      if (Number(borrowerIdx) === b.buildingIndex) return false;
      const other = byIndex.get(Number(borrowerIdx));
      return other && Math.abs(other.chainage - b.chainage) < MIN_CHAINAGE_GAP;
    });
    if (conflict) continue;
    const delta = Math.abs(widthOf(d) - bWidth);
    if (delta < bestDelta) { bestDelta = delta; best = d; }
  }
  return best;
}

let filled = 0, unfilled = 0;
const generatedEntries = new Map(elev.elevations.filter((e) => e.generated).map((e) => [e.buildingIndex, e]));

for (const b of targets) {
  const donor = pickDonor(b);
  if (!donor) { unfilled++; console.warn(`  no eligible donor for b${b.buildingIndex} (levels ${b.levels}, chainage ${b.chainage})`); continue; }

  const donorEntry = generatedByBuilding.get(donor.buildingIndex);
  const donorPath = join(elevDir, `b${donor.buildingIndex}.jpg`);
  const { w: dw, h: dh } = probe(donorPath);

  const bWidthM = widthOf(b);
  const donorWidthM = donorEntry.widthM;
  const targetWidthM = Math.min(bWidthM, donorWidthM); // never stretch — crop only
  const heightM = b.levels * STOREY_M; // == donor's heightM (same levels)

  const cropW = Math.max(1, Math.round(dw * (targetWidthM / donorWidthM)));
  const cropX = Math.round((dw - cropW) / 2);
  const outPath = join(elevDir, `b${b.buildingIndex}.jpg`);
  execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-i', donorPath,
    '-vf', `crop=${cropW}:${dh}:${cropX}:0`, '-frames:v', '1', '-q:v', '3', outPath]);

  const tier = (b.businesses.length > 0 || hasChamfer(b)) ? 'premium' : 'cheap';
  generatedEntries.set(b.buildingIndex, {
    buildingIndex: b.buildingIndex, generated: true, tier,
    file: `elevations/b${b.buildingIndex}.jpg`,
    widthM: targetWidthM, heightM, storeys: b.levels, borrowedFrom: donor.buildingIndex,
  });
  assignments[b.buildingIndex] = donor.buildingIndex;
  filled++;
}

const bySlugPlane = elev.elevations.filter((e) => !e.generated);
elev.elevations = [...bySlugPlane, ...generatedEntries.values()];
writeFileSync(elevPath, JSON.stringify(elev, null, 2));
writeFileSync(borrowedPath, JSON.stringify(assignments, null, 2));

console.log(`${filled} building(s) borrow-filled, ${unfilled} left with no eligible donor.`);
console.log(`borrowed.json: ${Object.keys(assignments).length} total borrows recorded.`);
if (filled) console.log('Next: node scripts/apply-signage.mjs && node scripts/build-elevation-atlas.mjs');
