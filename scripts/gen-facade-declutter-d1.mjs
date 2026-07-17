// D1 vision re-audit: de-clutter three placed ground tiles caught with street
// clutter baked in — bicycles + a phone box in front of Ladbrokes, a parked car
// in front of the Jolly, a pedestrian in front of Robbie's. Same Kontext edit
// discipline as gen-facade-fixes.mjs batch 1: erase surface content only, keep
// the real geometry/signage. Outputs land in fixed/, which build-facade-atlas.mjs
// already shadows over bands/ by basename — no atlas-script changes needed.
//
//   set -a; source ../whatsapp-bot/.env; set +a   # TOGETHER_API_KEY, never copied here
//   node scripts/gen-facade-declutter-d1.mjs
//   node scripts/gen-facade-declutter-d1.mjs --force

import { readFileSync, writeFileSync, mkdirSync, existsSync, unlinkSync } from 'fs';
import { execFileSync } from 'child_process';
import { dirname, join, basename } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const shopDir = join(root, 'assets/shopfronts');
const fixedDir = join(shopDir, 'fixed');
const KEY = process.env.TOGETHER_API_KEY;
const KONTEXT_MODEL = process.env.KONTEXT_MODEL || 'black-forest-labs/FLUX.1-kontext-pro';
const FORCE = process.argv.includes('--force');

if (!KEY) { console.error('TOGETHER_API_KEY not set — `set -a; source ../whatsapp-bot/.env; set +a`'); process.exit(1); }

const TILE_W = 512, TILE_H = 256;
const GEN_W = 1024, GEN_H = 512;
const PRICE_PER_MP = { [KONTEXT_MODEL]: 0.04 };
const HARD_CAP_USD = 0.50;
const genMP = (GEN_W * GEN_H) / 1_000_000;
let spendUsd = 0;
const recordSpend = () => { spendUsd += genMP * PRICE_PER_MP[KONTEXT_MODEL]; };

function scaleToTile(rawPath, outPath) {
  execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-i', rawPath,
    '-vf', `scale=${TILE_W}:${TILE_H}:flags=lanczos`, '-q:v', '3', outPath]);
}

function looksLikeRealImage(path) {
  try {
    const out = execFileSync('ffprobe', ['-v', 'error', '-select_streams', 'v:0',
      '-show_entries', 'stream=width,height', '-of', 'csv=p=0', path], { encoding: 'utf8' }).trim();
    const [w, h] = out.split(',').map(Number);
    return Number.isFinite(w) && Number.isFinite(h) && w > 0 && h > 0;
  } catch { return false; }
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

async function editOne(inPath, prompt, outPath) {
  const b64 = readFileSync(inPath).toString('base64');
  const raw = await callTogether({
    model: KONTEXT_MODEL, prompt, image_url: `data:image/jpeg;base64,${b64}`,
    width: GEN_W, height: GEN_H, n: 1, response_format: 'b64_json',
  });
  recordSpend();
  const tmp = join(fixedDir, `.tmp-${basename(outPath)}`);
  writeFileSync(tmp, raw);
  if (!looksLikeRealImage(tmp)) { unlinkSync(tmp); throw new Error('response did not decode as an image'); }
  scaleToTile(tmp, outPath);
  unlinkSync(tmp);
}

mkdirSync(fixedDir, { recursive: true });
const bands = JSON.parse(readFileSync(join(shopDir, 'bands.json'), 'utf8'));

const TARGETS = [
  { file: 'bands/edinburgh-4-elm-row-p0-ground-0.jpg', prompt: 'Remove the bicycles leaning against the shopfront and the red telephone box in the corner. Keep the Ladbrokes shopfront, signage, arched windows and architecture exactly as they are. Overcast dull grey light, no sunshine, slightly grimy and neglected. Empty pavement.' },
  { file: 'bands/edinburgh-9-10-11-elm-row-p0-ground-0.jpg', prompt: 'Remove the parked red car and the people sitting outside. Keep the Jolly restaurant shopfront, signage, lamps and architecture exactly as they are. Overcast dull grey light, no sunshine, slightly grimy and neglected. Empty pavement and road.' },
  { file: 'bands/robbies-bar-leith-walk-01-p0-ground-0.jpg', prompt: 'Remove the person standing by the doorway. Keep the Robbie\'s Bar shopfront, signage, windows and architecture exactly as they are. Overcast dull grey light, no sunshine, slightly grimy and neglected. Empty pavement.' },
];

const jobs = TARGETS.map((t) => {
  const b = bands.find((x) => x.file === t.file);
  if (!b) { console.error(`not in bands.json: ${t.file}`); return null; }
  return { srcPath: join(shopDir, b.file), outPath: join(fixedDir, basename(b.file)), prompt: t.prompt };
}).filter(Boolean);

const pending = jobs.filter((j) => FORCE || !existsSync(j.outPath));
const estUsd = pending.length * genMP * PRICE_PER_MP[KONTEXT_MODEL];
console.log(`${jobs.length} target(s), ${pending.length} pending. Estimated spend: $${estUsd.toFixed(4)} (cap $${HARD_CAP_USD.toFixed(2)})`);
if (estUsd > HARD_CAP_USD) { console.error('ABORT: over cap'); process.exit(1); }
if (!pending.length) { console.log('Nothing to do (pass --force to regenerate).'); process.exit(0); }

console.log(`\nPreflight: ${basename(pending[0].outPath)}`);
try {
  await editOne(pending[0].srcPath, pending[0].prompt, pending[0].outPath);
  if (!looksLikeRealImage(pending[0].outPath)) throw new Error('preflight output not a decodable image');
  console.log(`Preflight OK. Running spend so far: $${spendUsd.toFixed(4)}\n`);
} catch (err) {
  console.error(`PREFLIGHT FAILED: ${err.message}`);
  process.exit(1);
}

let done = 1, failed = 0;
for (const j of pending.slice(1)) {
  try {
    await editOne(j.srcPath, j.prompt, j.outPath);
    done++;
    console.log(`  fixed ${basename(j.outPath)}`);
  } catch (err) {
    console.error(`  FAILED ${basename(j.outPath)}: ${err.message}`);
    failed++;
  }
}

console.log(`\n${done} fixed, ${failed} failed. Actual spend: $${spendUsd.toFixed(4)}`);
if (failed) process.exitCode = 1;
