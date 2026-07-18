// D4/W3 — AI-generate a full elevation for every frontage building the real
// photos don't cover (233 manifest buildings - 18 placed = 215 here).
//
//   set -a; source ../whatsapp-bot/.env; set +a   # TOGETHER_API_KEY, never copied here
//   node scripts/gen-facade-elevations.mjs                 # generate + grade all pending
//   node scripts/gen-facade-elevations.mjs --force         # regenerate everything
//   node scripts/gen-facade-elevations.mjs --only 42,108    # just these building indices
//
// Tiers (Dan-approved): PREMIUM (named businesses, or a chamfer/corner run —
// high street-junction visibility) uses FLUX.2-pro; CHEAP (background fill)
// uses FLUX.1-schnell. Idempotent — skips a building whose graded output
// already exists unless --force. HARD CAP $15 actual spend, preflighted.
//
// Output: assets/shopfronts/generated/b<buildingIndex>.jpg   (raw AI output)
//         assets/shopfronts/elevations/b<buildingIndex>.jpg  (graded, cropped
//           to the building's real aspect — same GRADE as every other façade
//           texture, appended to elevations.json)
//
// Ground floor is prompted BLANK (no lettering) — W4 (scripts/apply-signage.mjs)
// composites real business names on afterward. AI text misspells real Leith
// Walk business names, so the model never gets to paint them itself.

import { readFileSync, writeFileSync, mkdirSync, existsSync, unlinkSync } from 'fs';
import { execFileSync } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const shopDir = join(root, 'assets/shopfronts');
const genDir = join(shopDir, 'generated');
const elevDir = join(shopDir, 'elevations');

const KEY = process.env.TOGETHER_API_KEY;
if (!KEY) { console.error('TOGETHER_API_KEY not set — `set -a; source ../whatsapp-bot/.env; set +a`'); process.exit(1); }

const PREMIUM_MODEL = 'black-forest-labs/FLUX.2-pro';
const CHEAP_MODEL = 'black-forest-labs/FLUX.1-schnell';
const PRICE = { [PREMIUM_MODEL]: 0.03, [CHEAP_MODEL]: 0.0027 }; // $/image, both flat-rate
const HARD_CAP_USD = 15;

const FORCE = process.argv.includes('--force');
const onlyArg = process.argv.includes('--only') ? process.argv[process.argv.indexOf('--only') + 1] : null;
const ONLY = onlyArg ? new Set(onlyArg.split(',').map(Number)) : null;

const STOREY_M = 3.2;
const GRADE = 'eq=saturation=0.42:contrast=1.08:brightness=-0.10,colorbalance=rs=0.10:rm=0.06:bs=-0.06:bm=-0.05';

const manifest = JSON.parse(readFileSync(join(shopDir, 'manifest.json'), 'utf8'));
const targets = manifest.buildings.filter((b) => !b.placedSlug && (!ONLY || ONLY.has(b.buildingIndex)));

mkdirSync(genDir, { recursive: true });
mkdirSync(elevDir, { recursive: true });

// --- per-building generation spec ---

const MATERIALS = [
  'pale honey sandstone ashlar',
  'soot-blackened grey sandstone ashlar',
  'weathered blonde sandstone with red sandstone dressings',
  'dark red sandstone tenement stone',
  'grimy cream sandstone with Victorian cornicing',
];

function hash32(n) {
  let h = (n * 2654435761) >>> 0;
  h = Math.imul(h ^ (h >>> 15), 0x85ebca6b);
  h ^= h >>> 13;
  return h >>> 0;
}

function buildSpec(b) {
  const widthM = Math.max(4, Math.min(20, Math.max(...b.runs.map((r) => r.widthM))));
  const levels = Math.max(2, Math.min(6, b.levels));
  const heightM = levels * STOREY_M;
  const h = hash32(b.buildingIndex);
  const material = MATERIALS[h % MATERIALS.length];
  const bays = Math.max(1, Math.round(widthM / 3.2));
  const hasChamfer = b.runs.some((r) => r.isChamfer);
  const tier = (b.businesses.length > 0 || hasChamfer) ? 'premium' : 'cheap';

  // Target pixel size: preserve the real aspect, budget ~1MP (premium) or
  // ~0.6MP (cheap — schnell is a distilled model, doesn't need the extra
  // pixels this budget wouldn't cost less for, but renders acceptably at
  // this size), rounded to multiples of 64 (FLUX requirement).
  const budgetMP = tier === 'premium' ? 1.05 : 0.6;
  const aspect = widthM / heightM;
  let genH = Math.sqrt((budgetMP * 1_000_000) / aspect);
  let genW = genH * aspect;
  genW = Math.max(384, Math.min(1440, Math.round(genW / 64) * 64));
  genH = Math.max(384, Math.min(1440, Math.round(genH / 64) * 64));

  const prompt = [
    `Flat-on orthographic architectural elevation photograph of a single ${material} Edinburgh tenement building, ${levels} storeys tall, ${bays} bays wide.`,
    'Ground floor has shopfronts with completely BLANK, DARK, UNLIT fascia boards above the windows — no text, no lettering, no signage, no logos, no shop names anywhere in the image.',
    'Sash-and-case windows on the upper storeys, stone cornicing, weathered and grimy stonework, post-apocalyptic neglect and decay, cracked render, stained masonry, overcast dull grey flat light, no shadows from low sun.',
    'Straight-on elevation view with zero perspective distortion — camera perfectly perpendicular to the wall, all verticals parallel, no vanishing point, like an architectural facade drawing rendered as a photograph.',
    'No people, no pedestrians, no vehicles, no cars, no bicycles, no street furniture, no bins, no pavement, no road, no sky visible, no trees — the wall fills the entire frame edge to edge.',
  ].join(' ');

  return { tier, model: tier === 'premium' ? PREMIUM_MODEL : CHEAP_MODEL, genW, genH, widthM, heightM, levels, prompt, seed: 1000 + b.buildingIndex };
}

// --- Together call ---

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

async function generateOne(b, spec) {
  const rawPath = join(genDir, `b${b.buildingIndex}.jpg`);
  const raw = await callTogether({
    model: spec.model, prompt: spec.prompt, width: spec.genW, height: spec.genH,
    n: 1, response_format: 'b64_json', seed: spec.seed,
  });
  spendUsd += PRICE[spec.model];
  const tmp = rawPath + '.tmp';
  writeFileSync(tmp, raw);
  if (!looksLikeRealImage(tmp)) { unlinkSync(tmp); throw new Error('response did not decode as an image'); }
  // Together returns PNG bytes for these models regardless of the .jpg name;
  // re-encode through ffmpeg so downstream ffprobe/ffmpeg calls see a real jpg.
  execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-i', tmp, '-q:v', '3', rawPath]);
  unlinkSync(tmp);

  // Trim any sky sliver off the top and a fixed small pavement margin off the
  // bottom, THEN crop to the exact target aspect (genW/genH already matches
  // widthM/heightM closely, but the 64px rounding leaves a small remainder).
  const { w: rw, h: rh } = probe(rawPath);
  const topTrim = skyTrimTopPx(rawPath, rw, rh);
  const bottomTrim = Math.round(rh * 0.025);
  const trimmedH = rh - topTrim - bottomTrim;

  const wantAspect = spec.widthM / spec.heightM;
  let cropW = rw, cropH = trimmedH;
  if (rw / trimmedH > wantAspect) cropW = Math.round(trimmedH * wantAspect);
  else cropH = Math.round(rw / wantAspect);
  const outPath = join(elevDir, `b${b.buildingIndex}.jpg`);
  execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-i', rawPath,
    '-vf', `crop=${rw}:${trimmedH}:0:${topTrim},crop=${cropW}:${cropH}:(iw-${cropW})/2:(ih-${cropH})/2,${GRADE}`,
    '-frames:v', '1', '-q:v', '3', outPath]);
}

function probe(file) {
  const out = execFileSync('ffprobe', ['-v', 'error', '-select_streams', 'v:0',
    '-show_entries', 'stream=width,height', '-of', 'csv=p=0', file]).toString().trim();
  const [w, h] = out.split(',').map(Number);
  return { w, h };
}

// Despite the prompt asking for edge-to-edge wall, FLUX occasionally leaves a
// thin sky sliver at the top or a pavement strip at the bottom. Same
// bright/low-chroma-or-blue heuristic as build-upper-strips.mjs for the sky
// scan; the bottom just gets a fixed small trim (the ground-floor threshold
// reliably sits within the last few percent when it does bleed in).
function skyTrimTopPx(path, w, h) {
  const scanH = Math.floor(h * 0.14);
  if (scanH < 8) return 0;
  const SW = 64;
  const SH = Math.max(8, Math.round((scanH / w) * SW));
  const rgb = execFileSync('ffmpeg', ['-loglevel', 'error', '-i', path,
    '-vf', `crop=${w}:${scanH}:0:0,scale=${SW}:${SH}`,
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

const jobs = targets.map((b) => ({ b, spec: buildSpec(b) }));
const pending = jobs.filter((j) => FORCE || !existsSync(join(elevDir, `b${j.b.buildingIndex}.jpg`)));
const estUsd = pending.reduce((s, j) => s + PRICE[j.spec.model], 0);
const premiumN = pending.filter((j) => j.spec.tier === 'premium').length;
const cheapN = pending.length - premiumN;

console.log(`${jobs.length} target building(s), ${pending.length} pending (${premiumN} premium, ${cheapN} cheap).`);
console.log(`Estimated spend: $${estUsd.toFixed(4)} (cap $${HARD_CAP_USD.toFixed(2)})`);
if (estUsd > HARD_CAP_USD) { console.error('ABORT: estimated spend exceeds cap'); process.exit(1); }
if (!pending.length) { console.log('Nothing to do (pass --force to regenerate).'); process.exit(0); }

console.log(`\nPreflight: b${pending[0].b.buildingIndex} (${pending[0].spec.tier}, ${pending[0].spec.genW}x${pending[0].spec.genH})`);
try {
  await generateOne(pending[0].b, pending[0].spec);
  console.log(`Preflight OK. Running spend: $${spendUsd.toFixed(4)}\n`);
} catch (err) {
  console.error(`PREFLIGHT FAILED: ${err.message}`);
  process.exit(1);
}

let done = 1, failed = 0;
const failedList = [];
for (const { b, spec } of pending.slice(1)) {
  if (spendUsd + PRICE[spec.model] > HARD_CAP_USD) {
    console.error(`STOP: next image would exceed the $${HARD_CAP_USD} cap. Spend so far: $${spendUsd.toFixed(4)}`);
    break;
  }
  try {
    await generateOne(b, spec);
    done++;
    if (done % 10 === 0) console.log(`  ${done}/${pending.length} done, spend $${spendUsd.toFixed(4)}`);
  } catch (err) {
    console.error(`  FAILED b${b.buildingIndex}: ${err.message}`);
    failed++;
    failedList.push(b.buildingIndex);
  }
}

console.log(`\n${done} generated, ${failed} failed. Actual spend: $${spendUsd.toFixed(4)}`);
if (failedList.length) console.log(`Failed building indices: ${failedList.join(', ')}`);

// --- merge into elevations.json ---
const elevJsonPath = join(shopDir, 'elevations.json');
const elev = JSON.parse(readFileSync(elevJsonPath, 'utf8'));
const bySlugPlane = new Map(elev.elevations.filter((e) => !e.generated).map((e) => [`${e.slug}#${e.plane}`, e]));
const byBuilding = new Map(elev.elevations.filter((e) => e.generated).map((e) => [e.buildingIndex, e]));
for (const { b, spec } of jobs) {
  const outPath = join(elevDir, `b${b.buildingIndex}.jpg`);
  if (!existsSync(outPath)) continue;
  byBuilding.set(b.buildingIndex, {
    buildingIndex: b.buildingIndex, generated: true, tier: spec.tier,
    file: `elevations/b${b.buildingIndex}.jpg`,
    widthM: spec.widthM, heightM: spec.heightM, storeys: spec.levels,
  });
}
elev.elevations = [...bySlugPlane.values(), ...byBuilding.values()];
writeFileSync(elevJsonPath, JSON.stringify(elev, null, 2));
console.log(`elevations.json updated: ${elev.elevations.length} total (${byBuilding.size} generated).`);
if (failed) process.exitCode = 1;
