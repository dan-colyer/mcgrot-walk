// Generate grotesque NPC face textures via Gemini image gen.
// Usage: GEMINI_API_KEY=... node scripts/gen-faces.mjs [rab morag kenneth]
import { writeFileSync, mkdirSync, unlinkSync } from 'fs';
import { execFileSync } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const KEY = process.env.TOGETHER_API_KEY;
const MODEL = process.env.FLUX_MODEL || 'black-forest-labs/FLUX.2-pro';
if (!KEY) { console.error('TOGETHER_API_KEY not set'); process.exit(1); }

const STYLE = 'Flat 2D comic illustration, thick dark outlines, muted olive-mustard-khaki palette, matte flat colours, no gradients. Front-facing head and shoulders portrait, face centred and filling most of the frame, looking directly at the viewer, plain flat single-colour background. Grotesque caricature in the style of a sinister British comedy character.';

const FACES = {
  rab: `${STYLE} An enormous jowly middle-aged Scottish man: bulbous nose with burst capillaries, tiny tartan bunnet perched on a huge head, patchy ginger stubble, one eye squinting much smaller than the other, wide gap-toothed grin, thick neck.`,
  morag: `${STYLE} A prim elderly Scottish matron: powdered pale face, tight grey bun, pearl earrings, unsettlingly wide fixed smile showing slightly too many teeth, one eye milky pale, thin arched eyebrows, high lace collar.`,
  kenneth: `${STYLE} A gaunt middle-aged Scottish office administrator: hollow cheeks, oversized square spectacles with one cracked lens, thin pencil moustache, receding slicked hair, dead-eyed customer-service smile, shirt and lanyard.`,
};

mkdirSync(join(root, 'assets/faces'), { recursive: true });
const only = process.argv.slice(2);

for (const [name, prompt] of Object.entries(FACES)) {
  if (only.length && !only.includes(name)) continue;
  let img = null;
  for (let attempt = 1; attempt <= 3 && !img; attempt++) {
    try {
      const res = await fetch('https://api.together.xyz/v1/images/generations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${KEY}` },
        body: JSON.stringify({
          model: MODEL, prompt, width: 768, height: 768, n: 1,
          response_format: 'b64_json', seed: 41 + attempt,
        }),
        signal: AbortSignal.timeout(120_000),
      });
      if (!res.ok) throw new Error(`API ${res.status}: ${(await res.text().catch(() => '')).slice(0, 300)}`);
      const data = await res.json();
      const b64 = data.data?.[0]?.b64_json;
      if (!b64) throw new Error('no image in response');
      img = Buffer.from(b64, 'base64');
    } catch (err) {
      console.warn(`[${name}] attempt ${attempt} failed: ${err.message}`);
      if (attempt < 3) await new Promise(r => setTimeout(r, 3000));
    }
  }
  if (!img) { console.error(`[${name}] FAILED`); process.exitCode = 1; continue; }
  const raw = join(root, `assets/faces/${name}-raw.png`);
  writeFileSync(raw, img);
  execFileSync('ffmpeg', ['-loglevel', 'error', '-i', raw, '-vf', 'scale=512:512', '-q:v', '4', '-y', join(root, `assets/faces/${name}.jpg`)]);
  unlinkSync(raw);
  console.log(`[${name}] OK`);
}
