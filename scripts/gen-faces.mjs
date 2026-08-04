// Generate grotesque NPC face textures.
//
//   set -a; source .env.local; set +a
//   node scripts/gen-faces.mjs [rab morag kenneth]
//
// Together AI + FLUX, NOT Gemini — the header said Gemini for as long as the
// code said TOGETHER_API_KEY, which cost a session working out why a live
// GEMINI_API_KEY was not being read.
//
// The style prompt carries the MEASURED palette from docs/STYLE.md as hex,
// and every generated face is checked back against it:
//   node scripts/comic-palette.mjs --only=assets/faces/<name>.jpg
import { writeFileSync, mkdirSync, unlinkSync } from 'fs';
import { execFileSync } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const KEY = process.env.TOGETHER_API_KEY;
const MODEL = process.env.FLUX_MODEL || 'black-forest-labs/FLUX.2-pro';
// Deliberately no copy-pasteable `KEY=...` example below. The first version of
// this message printed one, it was pasted verbatim, and the literal three dots
// went into .env.local — which then failed as a 401 "invalid API key" and read
// like a revoked credential rather than a placeholder. An error message that
// can be run without editing will be.
if (!KEY) {
  console.error('TOGETHER_API_KEY not set. Note it is NOT the same key as '
    + 'GEMINI_API_KEY.\nPut the real key in .env.local, then: set -a; source .env.local; set +a');
  process.exit(1);
}
if (KEY.length < 32) {
  console.error(`TOGETHER_API_KEY is only ${KEY.length} characters — that is a `
    + 'placeholder or a truncated paste, not a key.\nFix .env.local and re-source. '
    + '(Checked here so the failure says what is wrong, rather than arriving as a 401.)');
  process.exit(1);
}

// E8c: the palette goes in as HEX, not as adjectives. "muted olive-mustard-
// khaki" was the previous wording and it is exactly the kind of description
// docs/STYLE.md exists to replace — the numbers below are measured from the
// comics (k-means in CIELAB over the corpus, calibrated against the newest).
//
// Cream-forward is deliberate and load-bearing, not a preference: the scene
// supplies the darkness (median display luminance 0.139 at noon, 0.055 at
// night) and ACES lifts on top of that, so a face authored at the palette's
// dark end arrives in-scene as black mush. See docs/STYLE.md.
const PALETTE = 'aged cream #e0c58c, warm stone #b2a27c, khaki gold #a08f51, '
  + 'olive grey #737157, moss #555d29, dark brown #504726, rust accent #8b4e28, '
  + 'ink near-black #212020';

const STYLE = 'Flat 2D comic illustration, thick dark outlines, matte flat colours, '
  + 'no gradients, no cel shading. Restricted palette, muted and desaturated, '
  + `warm throughout with no cool or blue tones: ${PALETTE}. `
  + 'Light overall — the artwork sits on aged cream paper and the mid-tones are '
  + 'pale, not dark. Front-facing head and shoulders portrait, face centred and '
  + 'filling most of the frame, looking directly at the viewer, plain flat '
  + 'single-colour cream background. Grotesque caricature in the style of a '
  + 'sinister British comedy character.';

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
