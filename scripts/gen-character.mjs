// Generate the INPUT image for image-to-3D (E8d).
//
//   set -a; source .env.local; set +a
//   node scripts/gen-character.mjs rab            # both variants
//   node scripts/gen-character.mjs rab --only=form
//
// Together AI + FLUX, same key and model as scripts/gen-faces.mjs. Output goes
// to scratchpad/characters/<name>-<variant>.jpg — nothing lands in assets/
// until a mesh has been judged in-scene.
//
// WHY THIS IS NOT gen-faces.mjs
//
// gen-faces makes a TEXTURE: a flat head-and-shoulders portrait that gets
// pasted on the front face of a BoxGeometry head. This makes a MESH INPUT,
// and the two want opposite things.
//
// A flat 2D comic illustration — thick outlines, no gradients, no cel shading,
// which is exactly what docs/STYLE.md prescribes — carries almost no shape
// information. Single-image-to-3D infers form from shading cues, and a style
// that deliberately removes shading removes the cues with it. The reasonable
// prediction is that the flat variant reconstructs as a slab.
//
// That is a prediction, not a finding, so both variants are generated and the
// mesh stage runs on both. If `flat` reconstructs fine, this comment is wrong
// and the pipeline is simpler than expected.
//
// The bet behind `form`: the mesh only has to supply SHAPE. The comic look
// comes back downstream — src/cars.js already re-materials every loaded glb to
// tinted Lambert, and preset b grades the whole frame on top. Same principle
// docs/STYLE.md already records for lightness: the scene supplies the darkness,
// so the asset should not try to.
import { writeFileSync, mkdirSync, unlinkSync } from 'fs';
import { execFileSync } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(root, 'scratchpad/characters');
const KEY = process.env.TOGETHER_API_KEY;
const MODEL = process.env.FLUX_MODEL || 'black-forest-labs/FLUX.2-pro';

if (!KEY) {
  console.error('TOGETHER_API_KEY not set.\nPut the real key in .env.local, then: '
    + 'set -a; source .env.local; set +a');
  process.exit(1);
}
if (KEY.length < 32) {
  console.error(`TOGETHER_API_KEY is only ${KEY.length} characters — that is a `
    + 'placeholder or a truncated paste, not a key.');
  process.exit(1);
}

// Measured palette (docs/STYLE.md §1). Hex, never adjectives.
const PALETTE = 'aged cream #e0c58c, warm stone #b2a27c, khaki gold #a08f51, '
  + 'olive grey #737157, moss #555d29, dark brown #504726, rust accent #8b4e28, '
  + 'ink near-black #212020';

// Both variants share the framing rules, because those are about the
// RECONSTRUCTION rather than the look: whole figure in frame with margin (a
// cropped limb becomes a severed limb), flat single-colour background well
// clear of the palette so subject isolation is unambiguous, no cast shadow on
// the floor (it reconstructs as geometry), no props the mesh should not carry.
const FRAMING = 'Full body head-to-toe standing figure, front view, facing the '
  + 'viewer, arms slightly away from the sides, feet apart, entire figure '
  + 'within frame with clear margin on all sides. Plain flat single-colour '
  + 'background #808080, no floor, no cast shadow, no ground plane, no vignette, '
  + 'no text, no border, no frame.';

const VARIANTS = {
  // The style bible's own prescription, applied to a whole figure. Expected to
  // reconstruct badly; generated anyway so that is measured rather than assumed.
  flat: 'Flat 2D comic illustration, thick dark outlines, matte flat colours, '
    + 'no gradients, no cel shading. '
    + `Restricted palette, muted and desaturated, warm throughout with no cool `
    + `or blue tones: ${PALETTE}. `,

  // Form-first. Shading is requested BECAUSE it is the depth cue; the palette
  // and the grotesque design carry the McGrot identity instead of the linework.
  // "Matte clay" rather than "realistic" keeps specular highlights out, which
  // bake into the texture and then fight the scene's own lighting.
  form: 'A 3D character model render, matte clay-like surfaces, soft even '
    + 'directional lighting from the front, gentle form shading that describes '
    + 'volume, no specular highlights, no glossy reflections, no rim light. '
    + `Restricted palette, muted and desaturated, warm throughout with no cool `
    + `or blue tones: ${PALETTE}. `,
};

// Same three grotesques as gen-faces.mjs, extended below the shoulders.
const CHARACTERS = {
  rab: 'An enormous jowly middle-aged Scottish man, heavy and barrel-bodied: '
    + 'bulbous nose with burst capillaries, tiny tartan bunnet perched on a huge '
    + 'head, patchy ginger stubble, one eye squinting much smaller than the other, '
    + 'wide gap-toothed grin, thick neck, straining donkey jacket, baggy trousers, '
    + 'scuffed work boots.',
  morag: 'A prim elderly Scottish matron, small and upright: powdered pale face, '
    + 'tight grey bun, pearl earrings, unsettlingly wide fixed smile showing '
    + 'slightly too many teeth, one eye milky pale, thin arched eyebrows, high '
    + 'lace collar, long buttoned housecoat, sensible shoes, clutching a handbag.',
  kenneth: 'A gaunt middle-aged Scottish office administrator, tall and narrow: '
    + 'hollow cheeks, oversized square spectacles with one cracked lens, thin '
    + 'pencil moustache, receding slicked hair, dead-eyed customer-service smile, '
    + 'shirt and lanyard, ill-fitting trousers, cheap black shoes.',

  // E3a: two more, to complete the five archetypes. The set is chosen to span
  // the SILHOUETTES the measured build triples already describe (girth
  // 0.50-1.60, height 1.40-2.15) rather than to span personalities — the mesh
  // supplies the family, per-NPC scaling supplies the individual.
  slab: 'A huge slab-shouldered Scottish doorman, broad and upright, standing '
    + 'square: flat wide face, boxer\'s flattened nose, tiny close-set eyes, '
    + 'shaved head, thick jaw, no neck to speak of, black bomber jacket '
    + 'straining at the shoulders, dark trousers, heavy boots.',
  runt: 'A small wiry elderly Scottish man, short and stooped with a head too '
    + 'big for him: enormous jug ears, deep-set watery eyes, hollow toothless '
    + 'jaw working sideways, wispy white hair, flat cap, shabby overcoat far '
    + 'too long for him, trousers pooling over worn shoes.',

  // E10a.2/3: the canon principals, from docs/CANON.md's established column.
  // Role and temperament are canon; exact colours and garments are design
  // freedom, so the wording below fixes them once for consistency rather than
  // re-deriving them per generation. Deliberately NO props — no ladle, no
  // spatula, no sign — because FRAMING says the mesh must not carry anything
  // the scene will place itself, and both of these have props in their canon
  // rows that gullet.js already builds.
  mcgrot: 'A thickset, stooped Scottish street-food vendor in his late fifties, '
    + 'work-worn and heavy through the shoulders: weathered pale skin, ruddy '
    + 'nose and cheeks, small grey-green eyes with heavy bags and a suspicious '
    + 'squint, jutting chin, heavy grey stubble, greasy iron-grey hair swept '
    + 'back. Stained off-white vest under a battered dark apron, old work '
    + 'trousers, scuffed black work boots. Hunched, broad, apron-shaped '
    + 'silhouette.',
  // Reworded after Black Forest Labs's OUTPUT moderation rejected the first
  // attempt twice ("the generated content was flagged"). The trigger was never
  // identified — the wording below drops "mongrel", "no collar/lead/hat" and
  // the stacked "shaggy" repetitions, and it passed first time. Recorded so
  // the next session does not reinstate the original wording as a tidy-up.
  pomple: 'A small scruffy terrier-type pet dog with rough shaggy fur, compact '
    + 'and sturdy, standing calmly on all four legs: dark charcoal-grey and '
    + 'dirty-cream coat, heavy overhanging brow above large brown eyes, tired '
    + 'patient expression, whiskered muzzle, large floppy ears, short sturdy '
    + 'legs, low compact silhouette. Plain fur only, no accessories.',
};

// Per-character framing overrides. FRAMING above is written for a standing
// human — "arms slightly away from the sides, feet apart" is nonsense for a
// dog, and asking a text-to-image model for a front-on quadruped reliably
// produces a foreshortened lump with no length information for the
// reconstruction to work from.
const FRAMING_OVERRIDES = {
  pomple: 'Full body side-on three-quarter view of the whole animal, standing '
    + 'squarely on all four legs, head turned toward the viewer, entire animal '
    + 'within frame with clear margin on all sides. Plain flat single-colour '
    + 'background #808080, no floor, no cast shadow, no ground plane, no '
    + 'vignette, no text, no border, no frame.',
};

// Landscape for the dog: a quadruped in a 768x1024 portrait frame wastes the
// pixels the reconstruction needs on empty background above and below it.
const SIZE_OVERRIDES = {
  pomple: { width: 1024, height: 768 },
};

const args = process.argv.slice(2);
const only = args.filter((a) => !a.startsWith('--'));
const variantArg = (args.find((a) => a.startsWith('--only=')) || '').slice(7);
const variants = variantArg ? [variantArg] : Object.keys(VARIANTS);

mkdirSync(OUT, { recursive: true });

async function generate(prompt, seed, size) {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch('https://api.together.xyz/v1/images/generations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${KEY}` },
        body: JSON.stringify({
          model: MODEL, prompt, width: size.width, height: size.height, n: 1,
          response_format: 'b64_json', seed: seed + attempt,
        }),
        signal: AbortSignal.timeout(180_000),
      });
      if (!res.ok) throw new Error(`API ${res.status}: ${(await res.text().catch(() => '')).slice(0, 300)}`);
      const b64 = (await res.json()).data?.[0]?.b64_json;
      if (!b64) throw new Error('no image in response');
      return Buffer.from(b64, 'base64');
    } catch (err) {
      console.warn(`  attempt ${attempt} failed: ${err.message}`);
      if (attempt < 3) await new Promise((r) => setTimeout(r, 3000));
    }
  }
  return null;
}

for (const [name, subject] of Object.entries(CHARACTERS)) {
  if (only.length && !only.includes(name)) continue;
  for (const v of variants) {
    if (!VARIANTS[v]) { console.error(`unknown variant: ${v}`); process.exit(1); }
    // Portrait 768x1024: a standing figure in a square frame wastes half the
    // pixels on background, and the mesh stage only sees what the figure occupies.
    const prompt = `${VARIANTS[v]}${FRAMING_OVERRIDES[name] || FRAMING} ${subject}`;
    const size = SIZE_OVERRIDES[name] || { width: 768, height: 1024 };
    console.log(`[${name}/${v}] generating… (${size.width}x${size.height})`);
    const img = await generate(prompt, 41, size);
    if (!img) { console.error(`[${name}/${v}] FAILED`); process.exitCode = 1; continue; }
    const raw = join(OUT, `${name}-${v}-raw.png`);
    const jpg = join(OUT, `${name}-${v}.jpg`);
    writeFileSync(raw, img);
    execFileSync('ffmpeg', ['-loglevel', 'error', '-i', raw, '-q:v', '3', '-y', jpg]);
    unlinkSync(raw);
    console.log(`[${name}/${v}] -> ${jpg.replace(root + '/', '')}`);
  }
}
