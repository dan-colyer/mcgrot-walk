// Lifting the cast's albedo. G2.
//
// THE CHARACTER TEXTURES ARE TOO DARK TO LIGHT, and that is measured rather
// than judged. `node scripts/mcgrots-cast-albedo.mjs` reads the embedded image
// out of all seven glbs:
//
//   rab 37.8   kenneth 55.5   morag 59.3   runt 35.2
//   slab 44.5  mcgrot 55.7    pomple 76.1        cast mean 50.9 of 255
//
// docs/STYLE.md measures the comics at L* 50.5, which is around 120 of 255. So
// the cast is authored at less than half the reflectance of the world it has to
// sit in, and G2's grade sweep showed what that costs: across sun 6-12,
// hemisphere 3-8, albedo 0.42-1.35 and a camera-side fill 0-6, the cast never
// rises above luminance 15 in a frame whose mean is 74-114. Nothing downstream
// reaches it, because `material.color` saturates at 1.0 — a multiplier cannot
// lift a map this dark.
//
// This is precisely the failure docs/STYLE.md names under "Author
// cream-forward": the dark end of the palette is where things LAND, not where
// they should be PAINTED. The glbs were authored at the landing point.
//
// WHY THIS IS NOT FIXED IN THE FILES. The same seven glbs are loaded by the
// PAUSED street (src/characters.js, inlined into the single-file build since
// E3h). Rewriting them would change the street's assets and move its goldens
// while nobody is allowed to touch it. Lifting at load, inside src/mcgrots/,
// keeps the change where this game's code is — which makes it the correct fix
// here rather than the expedient one. If the cast is ever re-authored, delete
// this and the numbers above are the brief.

import * as THREE from 'three';

// A GAMMA LIFT, not a gain. A multiply clips the highlights — pomple's p90 is
// already 157 — while doing almost nothing for the p10s, which sit at 2-4 on
// five of the seven. An exponent below 1 lifts the shadows hardest and leaves
// the top of the range where it is, which is what a cast that is dark
// EVERYWHERE needs.
//
// 0.55 chosen to land the cast mean at 105 against the comics' ~120, measured
// per archetype by the same script (`--lift=` sweeps it). Deliberately short of
// 120: docs/STYLE.md's standing rule is that the game supplies the darkness and
// the print is a texture on it, so the cast should arrive slightly under the
// page rather than matching it.
export const CAST_LIFT = 0.55;

// Built once per exponent, not once per texture — seven archetypes on screen
// would otherwise build seven identical 256-entry tables.
const lutCache = new Map();
function lut(exp) {
  let t = lutCache.get(exp);
  if (!t) {
    t = new Uint8Array(256);
    for (let i = 0; i < 256; i++) t[i] = Math.round(255 * Math.pow(i / 255, exp));
    lutCache.set(exp, t);
  }
  return t;
}

// Returns a NEW texture; the source is left alone. Callers own the result and
// should dispose it with the material.
//
// RAW sRGB BYTES IN, RAW sRGB BYTES OUT. This is the trap CLAUDE.md names: a
// canvas bake that goes through THREE.Color picks up linear components, and an
// SRGB-tagged canvas then converts AGAIN — which has produced silhouettes in
// this project before. Reading and writing `data[i]` directly touches no colour
// object, so the curve is applied in exactly the space the bytes are already
// in, and the result is tagged to match the source rather than assumed.
export function liftMap(src, exp = CAST_LIFT) {
  if (!src?.image) return src;
  const w = src.image.width, h = src.image.height;
  if (!w || !h) return src;

  const canvas = document.createElement('canvas');
  canvas.width = w; canvas.height = h;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  ctx.drawImage(src.image, 0, 0, w, h);

  const img = ctx.getImageData(0, 0, w, h);
  const table = lut(exp);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    d[i] = table[d[i]];
    d[i + 1] = table[d[i + 1]];
    d[i + 2] = table[d[i + 2]];
    // Alpha untouched. Running a tone curve on coverage would thin the edges
    // of anything alpha-tested, which is how A3's sprites are cut out.
  }
  ctx.putImageData(img, 0, 0);

  const out = new THREE.CanvasTexture(canvas);
  // COPIED FROM THE SOURCE, not defaulted. GLTFLoader sets `flipY = false`
  // because glTF UVs have their origin at the top left, and CanvasTexture
  // defaults it to true — inheriting that default flips every character's
  // texture vertically, which reads as a scrambled costume rather than as an
  // error. Same reasoning for wrap and colour space: this is the same image,
  // and the only thing that changed is the bytes.
  out.flipY = src.flipY;
  out.colorSpace = src.colorSpace;
  out.wrapS = src.wrapS;
  out.wrapT = src.wrapT;
  out.minFilter = src.minFilter;
  out.magFilter = src.magFilter;
  out.name = `${src.name || 'map'}:lifted${exp}`;
  out.needsUpdate = true;
  return out;
}
