// Two one-off fix passes on the shopfront tile set, both via Together.
//
//   set -a; source ../whatsapp-bot/.env; set +a   # TOGETHER_API_KEY, never copied here
//   node scripts/gen-facade-fixes.mjs              # run both batches
//   node scripts/gen-facade-fixes.mjs --force       # regenerate even if outputs exist
//
// BATCH 1 (edit, FLUX.1-kontext-pro): de-pedestrian the three ground tiles cut from
// the 82-94 Leith Walk terrace (slug shops-leith-walk-geograph-org-uk-7895672). Same
// discipline as gen-facade-decay.mjs — keep the real geometry, only touch surface
// content (here: erase people rather than add grime). bands.json's `file` field is
// authoritative for the source path; a tile may already live under decay/ rather
// than bands/ if a prior decay pass touched it.
//
// BATCH 2 (text-to-image, FLUX.1-schnell): 12 generic derelict Edinburgh ground-band
// tiles with no real-world source, for filling gaps in the atlas. Seeded per subject
// so a re-run reproduces the same image.
//
// Both batches are idempotent: skip outputs that already exist unless --force.
// Cost is preflighted (one image, verified as real before the loop) and capped.

import { readFileSync, writeFileSync, mkdirSync, existsSync, unlinkSync } from 'fs';
import { execFileSync } from 'child_process';
import { dirname, join, basename } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const shopDir = join(root, 'assets/shopfronts');
const fixedDir = join(shopDir, 'fixed');
const genDir = join(shopDir, 'generated');
const KEY = process.env.TOGETHER_API_KEY;
const KONTEXT_MODEL = process.env.KONTEXT_MODEL || 'black-forest-labs/FLUX.1-kontext-pro';
const T2I_MODEL = process.env.T2I_MODEL || 'black-forest-labs/FLUX.1-schnell';
const FORCE = process.argv.includes('--force');

if (!KEY) { console.error('TOGETHER_API_KEY not set — `set -a; source ../whatsapp-bot/.env; set +a`'); process.exit(1); }

const TILE_W = 512, TILE_H = 256;
const GEN_W = 1024, GEN_H = 512; // generate at 2x then downscale for detail, per gen-facade-decay.mjs convention

// Together pricing (per megapixel, at each model's default step count) — see
// https://www.together.ai/pricing, checked 2026-07-16.
const PRICE_PER_MP = {
  [KONTEXT_MODEL]: 0.04,
  [T2I_MODEL]: 0.0027,
};
const HARD_CAP_USD = 1.50;
const genMP = (GEN_W * GEN_H) / 1_000_000;

let spendUsd = 0;
const recordSpend = (model) => { spendUsd += genMP * (PRICE_PER_MP[model] ?? 0); };

function scaleToTile(rawPath, outPath) {
  execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-i', rawPath,
    '-vf', `scale=${TILE_W}:${TILE_H}:flags=lanczos`, '-q:v', '3', outPath]);
}

// Returns true if the file at path decodes as a real raster image (ffprobe can read
// a video/image stream from it). Cheap sanity check before trusting the API further.
function looksLikeRealImage(path) {
  try {
    const out = execFileSync('ffprobe', ['-v', 'error', '-select_streams', 'v:0',
      '-show_entries', 'stream=width,height', '-of', 'csv=p=0', path], { encoding: 'utf8' }).trim();
    const [w, h] = out.split(',').map(Number);
    return Number.isFinite(w) && Number.isFinite(h) && w > 0 && h > 0;
  } catch {
    return false;
  }
}

async function callTogether(body, attempt = 1) {
  const res = await fetch('https://api.together.xyz/v1/images/generations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${KEY}` },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(120_000),
  });
  if (res.status === 429 && attempt <= 5) {
    const backoffMs = 2000 * attempt; // rate limits are dynamic — steady traffic + backoff, per Together's own guidance
    console.warn(`    rate limited, retrying in ${backoffMs}ms (attempt ${attempt}/5)`);
    await new Promise((r) => setTimeout(r, backoffMs));
    return callTogether(body, attempt + 1);
  }
  if (!res.ok) throw new Error(`API ${res.status}: ${(await res.text().catch(() => '')).slice(0, 300)}`);
  const b64 = (await res.json()).data?.[0]?.b64_json;
  if (!b64) throw new Error('no image in response');
  return Buffer.from(b64, 'base64');
}

async function editOne(inPath, prompt, outPath) {
  const b64 = readFileSync(inPath).toString('base64');
  const raw = await callTogether({
    model: KONTEXT_MODEL, prompt, image_url: `data:image/jpeg;base64,${b64}`,
    width: GEN_W, height: GEN_H, n: 1, response_format: 'b64_json',
  });
  recordSpend(KONTEXT_MODEL);
  const tmp = join(fixedDir, `.tmp-${basename(outPath)}`);
  writeFileSync(tmp, raw);
  if (!looksLikeRealImage(tmp)) { unlinkSync(tmp); throw new Error('response did not decode as an image'); }
  scaleToTile(tmp, outPath);
  unlinkSync(tmp);
}

async function generateOne(prompt, seed, outPath) {
  const raw = await callTogether({
    model: T2I_MODEL, prompt, width: GEN_W, height: GEN_H, n: 1,
    response_format: 'b64_json', seed,
  });
  recordSpend(T2I_MODEL);
  const tmp = join(genDir, `.tmp-${basename(outPath)}`);
  writeFileSync(tmp, raw);
  if (!looksLikeRealImage(tmp)) { unlinkSync(tmp); throw new Error('response did not decode as an image'); }
  scaleToTile(tmp, outPath);
  unlinkSync(tmp);
}

// ---------------------------------------------------------------------------
// BATCH 1 — de-pedestrian the 82-94 Leith Walk terrace ground band
// ---------------------------------------------------------------------------

const DEPED_PROMPT = 'Remove all people and pedestrians from the scene. Keep the ' +
  'shopfronts, signage, doors and architecture exactly as they are. Overcast dull ' +
  'grey light, no sunshine, slightly grimy and neglected.';

mkdirSync(fixedDir, { recursive: true });
const bands = JSON.parse(readFileSync(join(shopDir, 'bands.json'), 'utf8'));
const batch1 = bands.filter((b) =>
  b.slug === 'shops-leith-walk-geograph-org-uk-7895672' && b.kind === 'ground');

const batch1Jobs = batch1.map((b) => {
  const srcPath = join(shopDir, b.file); // manifest's `file` is authoritative (bands/ or decay/)
  const outPath = join(fixedDir, basename(b.file));
  return { srcPath, outPath, prompt: DEPED_PROMPT };
});

// ---------------------------------------------------------------------------
// BATCH 2 — 12 generic derelict Edinburgh shopfront band tiles
// ---------------------------------------------------------------------------

const T2I_STYLE = 'A single ground-floor shopfront band of a derelict Edinburgh ' +
  'terrace: fascia and one window or shutter, eye-level, perfectly straight-on ' +
  'elevation photograph, absolutely no perspective distortion, no sky visible, no ' +
  'pavement or street visible in front, the storefront fills the frame edge to ' +
  'edge. Post-apocalyptic-but-mundane, long-neglected, grimy, muted desaturated ' +
  'colours, flat overcast light, no sunshine, no people. Any signage lettering is ' +
  'weathered, faded and partly illegible — invented gibberish text only, never a ' +
  'real shop or brand name.';

const SUBJECTS = [
  { slug: 'boarded-up-shop', desc: 'A shopfront entirely boarded up with weathered plywood panels over both the window and door, peeling old flyers, rusted screws.' },
  { slug: 'steel-shuttered-graffiti', desc: 'A shopfront sealed behind a corrugated steel roller shutter, heavily tagged with layered spray-paint graffiti, streaked rust stains.' },
  { slug: 'derelict-cafe', desc: 'An abandoned café front with a cracked plate-glass window, a faded gingham blind hanging askew, dead potted plants visible inside, dust-caked counter.' },
  { slug: 'old-newsagent', desc: 'A derelict newsagent front, faded ad boards in the window frame, torn newspaper bills, grimy glass, a sagging awning.' },
  { slug: 'victorian-pub-dark-green', desc: 'A Victorian pub frontage painted dark bottle green, ornate but flaking gold-leaf lettering now illegible, cracked etched glass window, tarnished brass fittings.' },
  { slug: 'chippy-takeaway', desc: 'A derelict fish-and-chip takeaway front, a broken illuminated menu board with missing letters, greasy darkened window, a rusted metal security grille half down.' },
  { slug: 'barber', desc: 'An abandoned barbershop front with a broken striped barber pole, a cracked window showing a toppled chair inside, faded lettering above the door.' },
  { slug: 'bookmaker', desc: 'A derelict bookmakers front with peeling dark green fascia, taped-over windows, torn betting slips stuck to the glass, a shuttered doorway.' },
  { slug: 'laundrette', desc: 'A derelict laundrette front, steamed and grimy windows with a faint outline of old machines inside, a broken illuminated sign box above the door, litter against the step.' },
  { slug: 'off-licence', desc: 'A derelict off-licence front, security-barred windows, faded price-sticker ghosts on the glass, a heavy shuttered steel door, peeling paintwork.' },
  { slug: 'charity-shop', desc: 'A derelict charity shop front, a dusty window with a slumped mannequin and jumbled unsold bric-a-brac, a faded donations sign, cracked lino visible through the glass.' },
  { slug: 'greengrocer-empty-crates', desc: 'A derelict greengrocer front, empty wooden crates stacked and toppling outside a shuttered window, a rotten striped awning, faded hand-painted price boards.' },
];

mkdirSync(genDir, { recursive: true });
const batch2Jobs = SUBJECTS.map((s, i) => ({
  outPath: join(genDir, `gen-ground-${s.slug}.jpg`),
  prompt: `${T2I_STYLE} ${s.desc}`,
  seed: 90210 + i, // fixed per subject: reproducible re-runs
}));

// ---------------------------------------------------------------------------
// Cost preflight
// ---------------------------------------------------------------------------

const pending1 = batch1Jobs.filter((j) => FORCE || !existsSync(j.outPath));
const pending2 = batch2Jobs.filter((j) => FORCE || !existsSync(j.outPath));

const estUsd = pending1.length * genMP * PRICE_PER_MP[KONTEXT_MODEL] +
  pending2.length * genMP * PRICE_PER_MP[T2I_MODEL];
console.log(`Batch 1: ${batch1Jobs.length} target(s), ${pending1.length} pending.`);
console.log(`Batch 2: ${batch2Jobs.length} target(s), ${pending2.length} pending.`);
console.log(`Estimated spend for this run: $${estUsd.toFixed(4)} (cap $${HARD_CAP_USD.toFixed(2)})`);
if (estUsd > HARD_CAP_USD) {
  console.error(`ABORT: estimated spend $${estUsd.toFixed(4)} exceeds cap $${HARD_CAP_USD.toFixed(2)}`);
  process.exit(1);
}
if (pending1.length + pending2.length === 0) {
  console.log('Nothing to do (all outputs exist; pass --force to regenerate).');
  process.exit(0);
}

// Preflight ONE image before committing to the full run — don't discover a dead
// key/model 15 images in. Prefer batch 1 (edit path) since it exercises image_url too.
const preflightJob = pending1[0]
  ? { kind: 'edit', job: pending1[0] }
  : { kind: 't2i', job: pending2[0] };

console.log(`\nPreflight: ${basename(preflightJob.job.outPath)} (${preflightJob.kind})`);
try {
  if (preflightJob.kind === 'edit') {
    await editOne(preflightJob.job.srcPath, preflightJob.job.prompt, preflightJob.job.outPath);
  } else {
    await generateOne(preflightJob.job.prompt, preflightJob.job.seed, preflightJob.job.outPath);
  }
  if (!existsSync(preflightJob.job.outPath) || !looksLikeRealImage(preflightJob.job.outPath)) {
    throw new Error('preflight output missing or not a decodable image');
  }
  console.log(`Preflight OK — decodes as a real image. Running spend so far: $${spendUsd.toFixed(4)}\n`);
} catch (err) {
  console.error(`PREFLIGHT FAILED: ${err.message}`);
  console.error('Aborting before spending on the rest of the batch.');
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Batch 1 loop
// ---------------------------------------------------------------------------

let b1done = 0, b1skipped = 0, b1failed = 0;
for (const j of batch1Jobs) {
  if (existsSync(j.outPath) && !FORCE) { b1skipped++; console.log(`  [1] skip (exists)  ${basename(j.outPath)}`); continue; }
  if (j === preflightJob.job && preflightJob.kind === 'edit') { b1done++; continue; } // already done above
  if (!existsSync(j.srcPath)) { console.error(`  [1] MISSING source ${j.srcPath}`); b1failed++; continue; }
  try {
    await editOne(j.srcPath, j.prompt, j.outPath);
    b1done++;
    console.log(`  [1] fixed          ${basename(j.outPath)}`);
  } catch (err) {
    console.error(`  [1] FAILED ${basename(j.outPath)}: ${err.message}`);
    b1failed++;
  }
}

// ---------------------------------------------------------------------------
// Batch 2 loop
// ---------------------------------------------------------------------------

let b2done = 0, b2skipped = 0, b2failed = 0;
for (const j of batch2Jobs) {
  if (existsSync(j.outPath) && !FORCE) { b2skipped++; console.log(`  [2] skip (exists)  ${basename(j.outPath)}`); continue; }
  if (j === preflightJob.job && preflightJob.kind === 't2i') { b2done++; continue; } // already done above
  try {
    await generateOne(j.prompt, j.seed, j.outPath);
    b2done++;
    console.log(`  [2] generated      ${basename(j.outPath)}`);
  } catch (err) {
    console.error(`  [2] FAILED ${basename(j.outPath)}: ${err.message}`);
    b2failed++;
  }
}

console.log(`\nBatch 1: ${b1done} fixed, ${b1skipped} already present, ${b1failed} failed.`);
console.log(`Batch 2: ${b2done} generated, ${b2skipped} already present, ${b2failed} failed.`);
console.log(`Actual estimated spend this run: $${spendUsd.toFixed(4)}`);
if (b1failed || b2failed) process.exitCode = 1;
