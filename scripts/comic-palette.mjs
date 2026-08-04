// What colours do the McGrot comics actually use?
//
//   node scripts/comic-palette.mjs                 # the whole corpus
//   node scripts/comic-palette.mjs --n=40          # a sample, for a quick look
//   node scripts/comic-palette.mjs --only=<path>   # one image (a new comic)
//   node scripts/comic-palette.mjs --swatch=<png>  # also write a swatch strip
//
// This exists because "aged cream paper, muted fills, warm dark ink" is a
// description, and the renderer needs numbers. Every generated asset from here
// on — 3D props, character textures, faces — has to sit on the same page as
// 418 existing comics, and the only way to know what that page looks like is
// to measure it rather than to pick swatches by eye off one image.
//
// Method: decode each JPEG to a small raw RGB buffer with ffmpeg (no image
// library needed and no full-size decode), then k-means in Lab-ish space over
// the pooled pixels. Deterministic: the initial centroids are seeded from an
// even spread through the sorted-by-luminance sample, never at random, so two
// runs over the same corpus give the same palette and the numbers can be
// quoted in a style bible.

import { readdirSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execFileSync, spawnSync } from 'child_process';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const arg = (name, dflt = null) => {
  const hit = process.argv.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.slice(name.length + 3) : dflt;
};

const K = Number(arg('k', 12));
const DECODE_W = 96;   // per-image decode width; 96x~136 is ample for a palette
const only = arg('only');
const swatchOut = arg('swatch');

// --- decode ---------------------------------------------------------------
// Letterbox bands are trimmed FIRST, and this is not a nicety. The newest
// comic arrived as a phone screenshot with flat dark-brown bands top and
// bottom — about a quarter of the image — and they came back as a phantom
// 17.8% cluster (#3c2b1f) that outranked the paper. A palette that a style
// bible quotes cannot include the chrome of whatever took the screenshot.
// `--no-trim` disables it; `--crop=W:H:X:Y` overrides the detection.
const NO_TRIM = process.argv.includes('--no-trim');
const CROP_OVERRIDE = arg('crop');

// ffmpeg's own `cropdetect` was tried first and emits nothing at all for a
// single still on this build, so the trim is done here instead — on a
// criterion that was measured rather than guessed. A letterbox band is a run
// of rows of FLAT colour; a comic's own cream border is printed paper and
// carries texture. Row standard deviation separates them cleanly (measured:
// bands ~0.6, paper border ~7+), and the threshold sits well clear of both.
const FLAT_ROW_STDDEV = 3.0;

function trimFlatEdges(rows, w) {
  const rowStd = rows.map((row) => {
    let m = 0;
    for (const p of row) m += (p[0] + p[1] + p[2]) / 3;
    m /= row.length;
    let v = 0;
    for (const p of row) v += ((p[0] + p[1] + p[2]) / 3 - m) ** 2;
    return Math.sqrt(v / row.length);
  });
  let top = 0, bot = rows.length - 1;
  while (top < bot && rowStd[top] < FLAT_ROW_STDDEV) top++;
  while (bot > top && rowStd[bot] < FLAT_ROW_STDDEV) bot--;
  return { rows: rows.slice(top, bot + 1), top, bottom: rows.length - 1 - bot };
}

function pixels(path, report = false) {
  const raw = execFileSync('ffmpeg', [
    '-loglevel', 'error', '-i', path,
    '-vf', CROP_OVERRIDE ? `crop=${CROP_OVERRIDE},scale=${DECODE_W}:-1` : `scale=${DECODE_W}:-1`,
    '-f', 'rawvideo', '-pix_fmt', 'rgb24', '-',
  ], { maxBuffer: 1 << 28 });

  const w = DECODE_W;
  const rows = [];
  for (let i = 0; i + 2 < raw.length; i += 3) {
    const idx = i / 3;
    const y = Math.floor(idx / w);
    if (!rows[y]) rows[y] = [];
    rows[y].push([raw[i], raw[i + 1], raw[i + 2]]);
  }
  if (NO_TRIM) return rows.flat();

  const trimmed = trimFlatEdges(rows, w);
  if (report && (trimmed.top || trimmed.bottom)) {
    console.log(`  trimmed ${trimmed.top} top / ${trimmed.bottom} bottom flat rows `
      + `(of ${rows.length}) — letterbox bands, not comic`);
  }
  return trimmed.rows.flat();
}

// --- k-means in CIELAB ----------------------------------------------------
// Lab rather than weighted RGB, and this was a correction rather than a
// preference. The first version used per-channel weights [0.5, 0.7, 0.4],
// which downweights blue — and on a corpus whose night skies are navy that
// silently merged them into the dark olives. The palette came back with no
// blues in it at all, which is a claim about the weighting, not about the
// comics. Lab has no such thumb on the scale.
function rgbToLab([r, g, b]) {
  const f = (v) => {
    v /= 255;
    return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  };
  const R = f(r), G = f(g), B = f(b);
  // sRGB D65 -> XYZ, then XYZ -> Lab with the D65 white point.
  let x = (R * 0.4124 + G * 0.3576 + B * 0.1805) / 0.95047;
  let y = (R * 0.2126 + G * 0.7152 + B * 0.0722);
  let z = (R * 0.0193 + G * 0.1192 + B * 0.9505) / 1.08883;
  const k = (t) => (t > 0.008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116);
  x = k(x); y = k(y); z = k(z);
  return [116 * y - 16, 500 * (x - y), 200 * (y - z)];
}

const dist2 = (a, b) => {
  const dl = a[0] - b[0], da = a[1] - b[1], db = a[2] - b[2];
  return dl * dl + da * da + db * db;
};

// Clusters in Lab; reports the mean RGB of each cluster's members, so every
// swatch is a colour that actually occurs rather than a round-trip through
// Lab and back.
function kmeans(rgbPoints, k, iterations = 24) {
  const lab = rgbPoints.map(rgbToLab);
  // Deterministic seeding: sort by L*, take k evenly spaced points. Never
  // random — a palette quoted in a style bible has to reproduce.
  const order = lab.map((p, i) => i).sort((i, j) => lab[i][0] - lab[j][0]);
  let centroids = Array.from({ length: k }, (_, i) =>
    [...lab[order[Math.floor(((i + 0.5) / k) * (order.length - 1))]]]);

  const assign = new Int32Array(lab.length);
  for (let it = 0; it < iterations; it++) {
    let moved = 0;
    for (let i = 0; i < lab.length; i++) {
      let best = 0, bestD = Infinity;
      for (let c = 0; c < k; c++) {
        const d = dist2(lab[i], centroids[c]);
        if (d < bestD) { bestD = d; best = c; }
      }
      if (assign[i] !== best) { assign[i] = best; moved++; }
    }
    const sums = Array.from({ length: k }, () => [0, 0, 0, 0]);
    for (let i = 0; i < lab.length; i++) {
      const s = sums[assign[i]];
      s[0] += lab[i][0]; s[1] += lab[i][1]; s[2] += lab[i][2]; s[3]++;
    }
    centroids = sums.map((s, c) => s[3]
      ? [s[0] / s[3], s[1] / s[3], s[2] / s[3]]
      : centroids[c]);
    if (!moved) break;
  }

  const sums = Array.from({ length: k }, () => [0, 0, 0, 0]);
  for (let i = 0; i < rgbPoints.length; i++) {
    const s = sums[assign[i]];
    s[0] += rgbPoints[i][0]; s[1] += rgbPoints[i][1]; s[2] += rgbPoints[i][2]; s[3]++;
  }
  return sums
    .filter((s) => s[3] > 0)
    .map((s) => ({
      rgb: [s[0] / s[3], s[1] / s[3], s[2] / s[3]].map(Math.round),
      share: s[3] / rgbPoints.length,
    }))
    .sort((a, b) => b.share - a.share);
}

const hex = ([r, g, b]) => '#' + [r, g, b].map((v) => v.toString(16).padStart(2, '0')).join('');
const luma = ([r, g, b]) => (0.299 * r + 0.587 * g + 0.114 * b) / 255;
// Saturation as a fraction of max — the comics' "muted fills" claim is
// exactly a claim about this number, so it gets reported rather than asserted.
const sat = ([r, g, b]) => {
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b);
  return mx === 0 ? 0 : (mx - mn) / mx;
};

// --- run ------------------------------------------------------------------
let files;
if (only) {
  if (!existsSync(only)) { console.error(`no such file: ${only}`); process.exit(1); }
  files = [only];
} else {
  const dir = join(root, 'assets/comics');
  const all = readdirSync(dir).filter((f) => f.endsWith('.jpg')).sort();
  const n = Number(arg('n', all.length));
  const stride = Math.max(1, Math.floor(all.length / n));
  files = all.filter((_, i) => i % stride === 0).slice(0, n).map((f) => join(dir, f));
}

console.log(`sampling ${files.length} image(s) at ${DECODE_W}px wide, k=${K}`);
const pool = [];
for (const f of files) pool.push(...pixels(f, files.length === 1));
console.log(`${pool.length.toLocaleString()} pixels pooled`);

const palette = kmeans(pool, K);
console.log('\n  hex      share   luma   sat   rgb');
for (const p of palette) {
  console.log(`  ${hex(p.rgb)}  ${(p.share * 100).toFixed(1).padStart(5)}%  `
    + `${luma(p.rgb).toFixed(3)}  ${sat(p.rgb).toFixed(2)}  ${p.rgb.join(',')}`);
}

const meanLuma = pool.reduce((a, p) => a + luma(p), 0) / pool.length;
const meanSat = pool.reduce((a, p) => a + sat(p), 0) / pool.length;
console.log(`\nwhole-corpus mean luma ${meanLuma.toFixed(3)}, mean saturation ${meanSat.toFixed(3)}`);

if (swatchOut) {
  // A strip is worth more than a table when the question is "does this look
  // like the comics" — the review opens the picture, per the contract.
  const CW = 160, CH = 200;
  const filters = palette.map((p, i) =>
    `color=c=${hex(p.rgb)}:s=${CW}x${CH}:d=1[c${i}]`).join(';');
  const chain = palette.map((_, i) => `[c${i}]`).join('');
  const layout = palette.map((_, i) => `${i * CW}_0`).join('|');
  execFileSync('ffmpeg', ['-loglevel', 'error', '-y',
    '-filter_complex', `${filters};${chain}xstack=inputs=${palette.length}:layout=${layout}`,
    '-frames:v', '1', swatchOut]);
  console.log(`swatch -> ${swatchOut}`);
}
