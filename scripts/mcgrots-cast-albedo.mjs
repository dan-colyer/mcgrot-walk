// What reflectance do the character textures actually have?
//
//   node scripts/mcgrots-cast-albedo.mjs
//   node scripts/mcgrots-cast-albedo.mjs --dump=/tmp/tex   # also write the PNGs
//
// This exists because G2 found the cast rendering as a near-black silhouette
// and a whole grade sweep proved that no LIGHT setting reaches it (see
// docs/MCGROTS-VALIDATION.md § "The cast is unreadable"). The remaining suspect
// is the asset, and "rab looks dark" is not a measurement — this reports every
// archetype, so a fix is sized against the whole cast rather than against the
// one that happened to be loaded.
//
// OFFLINE, straight out of the glb. The first version drove the game and could
// only measure `rab`, because it is the only archetype with a rig sidecar —
// the other six 404 (roadmap fault F3). Reading the embedded image directly
// needs no rig, no browser and no renderer, and the texture is the thing under
// test rather than anything downstream of it.
//
// Decoding is ffmpeg to raw RGB, the same approach as scripts/comic-palette.mjs
// and for the same reason: no image library, no full-size decode.

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { execFileSync } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { readGlb } from './glb-anatomy.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const ARCHETYPES = ['rab', 'kenneth', 'morag', 'runt', 'slab', 'mcgrot', 'pomple'];
const arg = (n) => (process.argv.find((a) => a.startsWith(`--${n}=`)) || '').split('=')[1] || null;
const DUMP = arg('dump');
const SAMPLE = 128;   // decode width; ample for a reflectance statistic

if (DUMP) mkdirSync(DUMP, { recursive: true });

// The lift the game applies, so this tool reports what the renderer will
// actually see rather than only what the file holds. Keep in step with
// CAST_LIFT in src/mcgrots/actors/skinned.js.
const LIFT = Number(arg('lift') ?? 0.55);
const lift = (v) => Math.round(255 * Math.pow(v / 255, LIFT));

function textureStats(glbPath) {
  const { json, bin } = readGlb(glbPath);
  const img = json.images?.[0];
  if (!img) return { error: 'no image in glb' };
  const view = json.bufferViews[img.bufferView];
  const bytes = bin.subarray(view.byteOffset || 0, (view.byteOffset || 0) + view.byteLength);

  // ffmpeg reads the container from the bytes; mimeType is advisory and some
  // Trellis output mislabels it, so it is not trusted here.
  const raw = execFileSync('ffmpeg', [
    '-hide_banner', '-loglevel', 'error', '-i', 'pipe:0',
    '-frames:v', '1', '-vf', `scale=${SAMPLE}:${SAMPLE}`, '-f', 'rawvideo', '-pix_fmt', 'rgb24', 'pipe:1',
  ], { input: bytes, maxBuffer: 1 << 26 });

  const lum = [];
  let r = 0, g = 0, b = 0;
  const n = raw.length / 3;
  for (let i = 0; i < raw.length; i += 3) {
    r += raw[i]; g += raw[i + 1]; b += raw[i + 2];
    lum.push(0.2126 * raw[i] + 0.7152 * raw[i + 1] + 0.0722 * raw[i + 2]);
  }
  lum.sort((x, y) => x - y);
  const pct = (q) => lum[Math.floor(lum.length * q)];
  if (DUMP) writeFileSync(join(DUMP, `${img.name || 'tex'}.bin`), bytes);
  return {
    rgb: [Math.round(r / n), Math.round(g / n), Math.round(b / n)],
    mean: lum.reduce((s, v) => s + v, 0) / lum.length,
    p10: pct(0.10), p50: pct(0.50), p90: pct(0.90),
    mime: img.mimeType || '?',
  };
}

console.log(`sampled at ${SAMPLE}px, luminance of 255. lift exponent ${LIFT}\n`);
console.log('archetype     mean   p10   p50   p90    sRGB mean     | lifted mean  p50');
const rows = [];
for (const a of ARCHETYPES) {
  let s;
  try { s = textureStats(join(root, `assets/characters/${a}-form.glb`)); }
  catch (e) { s = { error: e.message.split('\n')[0] }; }
  if (s.error) { console.log(`${a.padEnd(13)} FAILED: ${s.error}`); continue; }
  rows.push({ a, ...s });
  console.log(`${a.padEnd(13)}${s.mean.toFixed(1).padStart(5)} ${String(Math.round(s.p10)).padStart(5)}` +
    ` ${String(Math.round(s.p50)).padStart(5)} ${String(Math.round(s.p90)).padStart(5)}` +
    `    ${s.rgb.join(',').padEnd(13)} | ${String(lift(s.mean)).padStart(11)} ${String(lift(s.p50)).padStart(4)}`);
}

if (rows.length) {
  const mean = rows.reduce((s, r) => s + r.mean, 0) / rows.length;
  const worst = rows.reduce((w, r) => (r.mean < w.mean ? r : w));
  const best = rows.reduce((w, r) => (r.mean > w.mean ? r : w));
  console.log(`\ncast mean ${mean.toFixed(1)} of 255 across ${rows.length} archetypes`);
  console.log(`darkest ${worst.a} ${worst.mean.toFixed(1)}, lightest ${best.a} ${best.mean.toFixed(1)}`);
  console.log(`lifted, the cast mean becomes ${lift(mean)}`);
  console.log('\ndocs/STYLE.md measures the comics at L* 50.5 — a light-to-mid medium,');
  console.log('which is ~120 of 255. These are the assets the lighting works with.');
}
