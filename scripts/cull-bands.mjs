// Cull sky, cornice and featureless tiles from the band set.
//
//   node scripts/cull-bands.mjs --report   # measure only, change nothing
//   node scripts/cull-bands.mjs            # measure, then drop the rejects
//
// The homography is sound but the SLICING overshoots: where the vision agent
// put the façade's top corners a little above the real roofline, the topmost
// upper band is eaves and cloud. A wall made of sky looks far worse than a
// wall with no photo on it at all, so these have to go.
//
// Rather than eyeball 121 tiles, measure them: ffmpeg's signalstats gives per
// tile luma mean/stddev and saturation. Sky is bright, smooth and desaturated;
// a tenement wall is mid-luma with strong local structure (windows, stone
// courses). Thresholds are picked from the printed distribution, not guessed.

import { readFileSync, writeFileSync, unlinkSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execFileSync } from 'child_process';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const SHOP = join(root, 'assets/shopfronts');
const REPORT_ONLY = process.argv.includes('--report');

// Sky is BRIGHT and COLOURLESS. That is the whole signal, and it is the only
// one that survives contact with the data.
//
// The obvious-looking test — "low contrast means sky" — is wrong, and the
// reject sheet proved it: Robbie's dark green pub frontage and the red Bowl
// O'Noodle shopfront both measure as low-contrast once downscaled, so a
// stddev threshold binned three hero tiles. Luminance alone cannot tell a dark
// pub from a flat wall. Instead count pixels that are individually sky-like —
// bright AND near-grey — and cull on the FRACTION of them. A dark shopfront
// scores ~0 no matter how smooth it is.
const SKY_MIN_BRIGHT = 165;  // an OVERCAST sky pixel is bright in every channel...
const SKY_MAX_CHROMA = 32;   // ...and nearly colourless (stone is warm)
const MIN_STD = 12;          // a genuinely featureless render (blank/black)

// Blue sky is bright but NOT colourless, so the overcast test above walks
// straight past it. That let a cornice-against-blue-sky tile through, and once
// each building drew its upper storeys from one photo it repeated up five
// storeys as alternating bands of stone and sky. Edinburgh stone is warm
// (r >= b); anything strongly blue-dominant up on a wall is sky.
const BLUE_MIN = 140;
const BLUE_OVER_RED = 20;
const BLUE_OVER_GREEN = 8;

// The threshold has to depend on WHERE the band came from, because "bright and
// colourless" also describes a white shop fascia. Culling ground tiles at the
// same rate as upper ones binned the Tesco Express fascia and a pale roller
// shutter — both perfectly good, both ~45% sky-like.
//
// An UPPER band is cut near the roofline, so sky is its expected failure mode:
// hold it to a strict limit. A GROUND band is anchored at the pavement and
// cannot contain sky unless the plane geometry is broken outright, so only a
// tile that is overwhelmingly blank indicates a real fault.
// 0.30 was too lax in practice. A tile with sky in only its top quarter passes
// that bar, but on a wall it paints a white band straight across the storey and
// it is the first thing the eye goes to. 0.15 still leaves ~44 upper tiles.
const MAX_SKY_UPPER = 0.15;
const MAX_SKY_GROUND = 0.75;

// Decode the tile to raw RGB once and derive everything from the pixels. At
// 128×64 that is 24KB per tile — measuring 125 tiles costs well under a second.
function measure(file) {
  const buf = execFileSync('ffmpeg', [
    '-loglevel', 'error', '-i', file,
    '-vf', 'format=rgb24,scale=128:64', '-f', 'rawvideo', '-',
  ], { maxBuffer: 1 << 24 });

  const n = buf.length / 3;
  let sum = 0;
  let sky = 0;
  const lum = new Float64Array(n);

  for (let i = 0; i < n; i++) {
    const r = buf[i * 3];
    const g = buf[i * 3 + 1];
    const b = buf[i * 3 + 2];
    const lo = Math.min(r, g, b);
    const hi = Math.max(r, g, b);
    const overcast = lo > SKY_MIN_BRIGHT && hi - lo < SKY_MAX_CHROMA;
    const blue = b > BLUE_MIN && b - r > BLUE_OVER_RED && b - g > BLUE_OVER_GREEN;
    if (overcast || blue) sky++;
    const y = 0.299 * r + 0.587 * g + 0.114 * b;
    lum[i] = y;
    sum += y;
  }

  const mean = sum / n;
  let varsum = 0;
  for (let i = 0; i < n; i++) varsum += (lum[i] - mean) ** 2;
  return { mean, std: Math.sqrt(varsum / n), skyFrac: sky / n };
}

const bands = JSON.parse(readFileSync(join(SHOP, 'bands.json'), 'utf8'));
const rows = [];

for (const b of bands) {
  const file = join(SHOP, b.file);
  if (!existsSync(file)) continue;
  const m = measure(file);
  const limit = b.kind === 'ground' ? MAX_SKY_GROUND : MAX_SKY_UPPER;
  const reject = m.skyFrac > limit || m.std < MIN_STD;
  rows.push({ ...b, ...m, reject });
}

rows.sort((a, b) => b.skyFrac - a.skyFrac);

console.log('      sky%   std  mean  kind    file');
for (const r of rows) {
  console.log(
    `${r.reject ? 'CULL' : '  ok'} ${(r.skyFrac * 100).toFixed(0).padStart(5)}% ` +
    `${r.std.toFixed(0).padStart(5)} ${r.mean.toFixed(0).padStart(5)}  ${r.kind.padEnd(6)}  ` +
    `${r.file.replace('bands/', '')}`
  );
}

const kept = rows.filter((r) => !r.reject);
const culled = rows.filter((r) => r.reject);
console.log(`\n${rows.length} tiles: keep ${kept.length}, cull ${culled.length}`);
console.log(`  ground: ${kept.filter((r) => r.kind === 'ground').length}`);
console.log(`  upper:  ${kept.filter((r) => r.kind === 'upper').length}`);

if (REPORT_ONLY) {
  console.log('\n--report: nothing changed.');
} else {
  for (const r of culled) {
    const f = join(SHOP, r.file);
    if (existsSync(f)) unlinkSync(f);
  }
  const clean = kept.map(({ mean, std, sat, reject, ...keep }) => keep);
  writeFileSync(join(SHOP, 'bands.json'), JSON.stringify(clean, null, 2));
  console.log(`\nculled ${culled.length} files; bands.json now lists ${clean.length}.`);
}
