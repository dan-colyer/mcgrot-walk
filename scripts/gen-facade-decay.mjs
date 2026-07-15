// Tier-2 decay pass: grunge up the bland shopfronts with FLUX.1-kontext-pro.
//
//   set -a; source ../whatsapp-bot/.env; set +a   # TOGETHER_API_KEY, never copied here
//   node scripts/gen-facade-decay.mjs             # decay every treatment-2 tile
//   node scripts/gen-facade-decay.mjs --force     # regenerate even if already done
//
// WHAT THIS IS. Phase 3 kept every real façade as a homography — no AI — because
// the shops are the point. But a chunk of the tiles are shuttered, graffitied or
// blandly Georgian units with no identity to protect (facade-plan.json tier 2).
// Those read as "Leith Walk on a grey day", not "after the end of the world".
// Kontext image-editing adds rust, boarding and grime ON TOP of the real
// geometry — same discipline as the homography, preserving the actual building
// and only ageing its surface, rather than reimagining it.
//
// WHY KONTEXT, WHY TOGETHER. Instruction-based editing (keep the building, add
// decay) is exactly what FLUX.1-kontext does and plain text-to-image cannot. The
// bot's fal.ai Kontext path needs a key that only lives on the (dead) VM, so this
// routes through Together, which hosts FLUX.1-kontext-pro. Preflighted one tile
// before this loop existed (scar tissue: never discover a dead key 40 images in).
//
// LICENSING. A Kontext edit of a CC BY-SA photo is a DERIVATIVE WORK — share-alike
// still applies, so these keep their photo attribution (generated stays false).
// A separate `decayed` flag records the AI edit for transparency.
//
// PERSISTENCE. bands/ is a gitignored intermediate; a re-cull would wipe it and
// the paid output with it. Decayed tiles are written to the TRACKED decay/ dir so
// the spend survives, and this script is idempotent — it skips tiles already in
// decay/ unless --force, so re-running after a re-cull costs nothing.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { execFileSync } from 'child_process';
import { dirname, join, basename } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const shopDir = join(root, 'assets/shopfronts');
const decayDir = join(shopDir, 'decay');
const KEY = process.env.TOGETHER_API_KEY;
const MODEL = process.env.KONTEXT_MODEL || 'black-forest-labs/FLUX.1-kontext-pro';
const FORCE = process.argv.includes('--force');

if (!KEY) { console.error('TOGETHER_API_KEY not set — `set -a; source ../whatsapp-bot/.env; set +a`'); process.exit(1); }

const TILE_W = 512, TILE_H = 256;
const GEN_W = 1024, GEN_H = 512; // generate at 2x then downscale for detail

// Ground bands are shopfronts; upper bands are tenement wall. Decay reads
// differently on each, so the instruction differs — but both hammer the same
// non-negotiable: keep the exact building, openings, signage and proportions.
const KEEP = 'Keep the exact same building, window and door positions, signage text, ' +
  'and proportions completely unchanged. Do not move, add or remove any structure. ' +
  'Overcast flat grey light, no sun, abandoned post-apocalyptic mood.';
const PROMPT = {
  ground: `Age this Edinburgh shopfront into a derelict, long-abandoned unit. Add ` +
    `boarded-up panels over some of the glass, rusted metal shutters, peeling and ` +
    `faded paint, layered graffiti tags, grime, water staining and cracked render. ${KEEP}`,
  upper: `Age this tenement upper wall into a derelict, long-abandoned building. Add ` +
    `grimy water stains streaking from the sills, cracked and patchy render, a couple ` +
    `of broken or boarded windows, soot and weathering. ${KEEP}`,
};

async function decayOne(inPath, prompt, outPath) {
  const b64 = readFileSync(inPath).toString('base64');
  const res = await fetch('https://api.together.xyz/v1/images/generations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${KEY}` },
    body: JSON.stringify({
      model: MODEL, prompt, image_url: `data:image/jpeg;base64,${b64}`,
      width: GEN_W, height: GEN_H, n: 1, response_format: 'b64_json',
    }),
    signal: AbortSignal.timeout(120_000),
  });
  if (!res.ok) throw new Error(`API ${res.status}: ${(await res.text().catch(() => '')).slice(0, 300)}`);
  const out = (await res.json()).data?.[0]?.b64_json;
  if (!out) throw new Error('no image in response');

  // Kontext returns its own dimensions; xstack needs each tile EXACTLY TILE_W×H,
  // or every downstream UV shifts. Force-scale on the way in.
  const tmp = join(decayDir, `.tmp-${basename(outPath)}`);
  writeFileSync(tmp, Buffer.from(out, 'base64'));
  execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-i', tmp,
    '-vf', `scale=${TILE_W}:${TILE_H}:flags=lanczos`, '-q:v', '3', outPath]);
  execFileSync('rm', ['-f', tmp]);
}

mkdirSync(decayDir, { recursive: true });
const bands = JSON.parse(readFileSync(join(shopDir, 'bands.json'), 'utf8'));
const targets = bands.filter((b) => b.treatment === 2);
console.log(`${targets.length} tier-2 tiles to decay (${targets.filter(b => b.kind === 'ground').length} ground, ${targets.filter(b => b.kind === 'upper').length} upper)\n`);

let done = 0, skipped = 0, failed = 0;
for (const b of bands) {
  if (b.treatment !== 2) continue;
  const decayName = basename(b.file).replace(/\.jpg$/, '-decay.jpg');
  const decayPath = join(decayDir, decayName);
  const decayRel = `decay/${decayName}`;

  if (existsSync(decayPath) && !FORCE) {
    b.file = decayRel; b.decayed = true; skipped++;
    console.log(`  skip (exists)  ${decayName}`);
    continue;
  }

  // The source is the ORIGINAL cut tile. If bands.json already points at a
  // decayed copy (a prior run), re-derive the original path under bands/.
  const srcRel = b.decayed ? `bands/${basename(b.file).replace(/-decay\.jpg$/, '.jpg')}` : b.file;
  const srcPath = join(shopDir, srcRel);
  if (!existsSync(srcPath)) { console.error(`  MISSING source ${srcRel}`); failed++; continue; }

  try {
    await decayOne(srcPath, PROMPT[b.kind] || PROMPT.ground, decayPath);
    b.file = decayRel; b.decayed = true; done++;
    console.log(`  decayed        ${decayName}`);
  } catch (err) {
    console.error(`  FAILED ${decayName}: ${err.message}`);
    failed++;
  }
}

writeFileSync(join(shopDir, 'bands.json'), JSON.stringify(bands, null, 2));
console.log(`\n${done} decayed, ${skipped} already present, ${failed} failed.`);
console.log('bands.json repointed. Next: node scripts/build-facade-atlas.mjs');
if (failed) process.exitCode = 1;
