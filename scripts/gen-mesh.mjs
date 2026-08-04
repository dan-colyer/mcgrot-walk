// Image -> 3D mesh, via fal.ai Trellis (E8d spike).
//
//   set -a; source .env.local; set +a
//   node scripts/gen-mesh.mjs scratchpad/characters/rab-form.jpg
//   node scripts/gen-mesh.mjs <img> --simplify=0.95,0.98    # sweep polycount
//   node scripts/gen-mesh.mjs <img> --texture=512 --out=assets/characters
//
// Costs REAL MONEY — about $0.02 per run at fal's Trellis pricing, one run per
// --simplify value. Nothing here retries a successful generation, and every
// run prints its cost estimate before spending.
//
// WHY TRELLIS AND NOT MESHY
//
// Meshy exposes target_polycount (100..300,000), which is the parameter this
// project actually wants — the scene's existing vehicles are ~2,000 triangles
// each and a generated character should land in the same order. But Meshy's
// API needs a $20/mo Pro plan, and the question this spike answers is not
// "what polycount" — it is "does a McGrot grotesque survive reconstruction at
// all". At $0.02 a go that is worth answering before paying a subscription for
// the finer control. Trellis's mesh_simplify (0..1, default 0.95) is a
// decimation ratio rather than a target, so the polycount is discovered by
// sweeping rather than requested; if this spike greenlights the direction,
// Meshy is the production path.
//
// The output is checked with scripts/glb-stats.mjs, never trusted from the
// API's own file_size — fal's documented output schema for this endpoint
// carries a content_type of "image/png" on the mesh object, which is plainly
// wrong, so its metadata is not evidence about what arrived.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { basename, extname, join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { glbStats } from './glb-stats.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const KEY = process.env.FAL_KEY;
const ENDPOINT = process.env.FAL_MODEL || 'fal-ai/trellis';
const COST_PER_RUN = 0.02;

const arg = (n, d = null) => {
  const hit = process.argv.find((a) => a.startsWith(`--${n}=`));
  return hit ? hit.slice(n.length + 3) : d;
};

const inputs = process.argv.slice(2).filter((a) => !a.startsWith('--'));
if (!inputs.length) {
  console.error('usage: node scripts/gen-mesh.mjs <image.jpg> [--simplify=0.95,0.98] '
    + '[--texture=1024] [--out=scratchpad/characters]');
  process.exit(1);
}
if (!KEY) {
  console.error('FAL_KEY not set. It is a THIRD key, not TOGETHER_API_KEY or '
    + 'GEMINI_API_KEY.\nGet one from fal.ai (Settings -> API keys), add the line '
    + 'to .env.local, then: set -a; source .env.local; set +a');
  process.exit(1);
}
if (KEY.length < 32) {
  console.error(`FAL_KEY is only ${KEY.length} characters — a placeholder or a `
    + 'truncated paste, not a key.');
  process.exit(1);
}

const simplifies = (arg('simplify', '0.95')).split(',').map(Number);
const textureSize = Number(arg('texture', 1024));
const outDir = join(root, arg('out', 'scratchpad/characters'));
const MIME = { '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png' };

// Validate every input BEFORE quoting a cost. Printing "1 run, $0.02" and then
// rejecting the file misreports what is about to be spent.
for (const input of inputs) {
  if (!MIME[extname(input).toLowerCase()]) {
    console.error(`${input}: expected .jpg or .png`); process.exit(1);
  }
  if (!existsSync(input)) { console.error(`${input}: no such file`); process.exit(1); }
}

const runs = inputs.length * simplifies.length;
console.log(`${runs} run(s) at ~$${COST_PER_RUN.toFixed(2)} — estimated $${(runs * COST_PER_RUN).toFixed(2)}\n`);

mkdirSync(outDir, { recursive: true });

for (const input of inputs) {
  const ext = extname(input).toLowerCase();
  // Data URI rather than fal's upload endpoint: one request instead of two,
  // and the inputs here are ~100KB. If fal ever rejects it, upload first.
  const imageUrl = `data:${MIME[ext]};base64,${readFileSync(input).toString('base64')}`;
  const stem = basename(input, ext);

  for (const mesh_simplify of simplifies) {
    const tag = simplifies.length > 1 ? `${stem}-s${String(mesh_simplify).replace('.', '')}` : stem;
    console.log(`[${tag}] POST ${ENDPOINT} (mesh_simplify=${mesh_simplify}, texture_size=${textureSize})…`);
    const t0 = process.hrtime.bigint();
    let res;
    try {
      res = await fetch(`https://fal.run/${ENDPOINT}`, {
        method: 'POST',
        headers: { 'Authorization': `Key ${KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ image_url: imageUrl, mesh_simplify, texture_size: textureSize }),
        // The sync endpoint blocks for the whole generation; Trellis is tens of
        // seconds, and a short timeout would abandon a run already paid for.
        signal: AbortSignal.timeout(600_000),
      });
    } catch (err) {
      console.error(`[${tag}] request failed: ${err.message}`);
      process.exitCode = 1; continue;
    }
    if (!res.ok) {
      console.error(`[${tag}] API ${res.status}: ${(await res.text().catch(() => '')).slice(0, 400)}`);
      process.exitCode = 1; continue;
    }
    const body = await res.json();
    const url = body?.model_mesh?.url;
    if (!url) {
      console.error(`[${tag}] no model_mesh.url in response: ${JSON.stringify(body).slice(0, 300)}`);
      process.exitCode = 1; continue;
    }
    const glb = Buffer.from(await (await fetch(url)).arrayBuffer());
    const out = join(outDir, `${tag}.glb`);
    writeFileSync(out, glb);
    const secs = Number(process.hrtime.bigint() - t0) / 1e9;

    const s = glbStats(out);
    console.log(`[${tag}] ${secs.toFixed(0)}s -> ${out.replace(root + '/', '')}`);
    console.log(`         ${s.triangles} tris, ${s.primitives} prim(s) = ${s.primitives} draw call(s), `
      + `${s.materials} mat, ${s.textures} tex, ${(s.bytes / 1024).toFixed(0)}KB `
      + `(images ${(s.imageBytes / 1024).toFixed(0)}KB)`);
    // The comparison that decides whether this is shippable, printed every
    // time so it never has to be looked up: one wrecked vehicle in this scene.
    console.log(`         vs one shipped car: 2032 tris, 5 draw calls, 168KB\n`);
  }
}
