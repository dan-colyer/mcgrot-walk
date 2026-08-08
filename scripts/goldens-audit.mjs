// Which goldens does my change actually move?
//
//   npm run goldens:audit
//
// Twice now a milestone shipped with stale goldens because the blast radius
// was reasoned about instead of measured — E5b.1's touch toggle (0.118% of
// the mobile frame) and E5b.2's skyline anchors (0.029% on a flag on/off
// diff). Both passed, because both fit under the 0.5% tolerance that exists
// for renderer jitter. Neither should have.
//
// So: this reports EVERY golden's diff, sorted worst first, and names the
// non-zero ones. Anything intentional in that list needs recapturing; a
// couple of hundredths of a percent on a sky-visible pose is the documented
// FBM jitter and is not.
//
// It deliberately does not capture anything itself — it runs the real suite
// and reads its numbers. A second capture path would drift from the gate's,
// and then the audit could not explain the gate.

import { spawnSync } from 'child_process';
import { existsSync, readFileSync, readdirSync, statSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

// PER-POSE FLOORS since E8 close. The old flat 0.02% floor reported 23-25 of
// the 40 poses as "moved" on every run for any change — proved against a
// control worktree at E3g — and a list that is three-quarters false positives
// is a list nobody reads. The poses are not equally noisy: measured over three
// quiet runs, 15 are bit-stable at 0.000% and the sky-visible ones run to
// 0.300%. docs/smoke/goldens/noise.json carries each pose's own band; the
// floor here is max(0.02%, 2 x band).
//
// It is NOT a pass mark: the 0.5% gate tolerance is what "passes", and this
// whole script exists because passing and being correct are not the same
// thing. Note the consequence, which is real: a pose whose band is above
// 0.25% gets an audit floor above the gate's own tolerance, so for those the
// GATE is the tighter instrument and this script is the looser one. They are
// named in the output rather than left for someone to work out.
const FLAT_FLOOR = 0.02;
const noisePath = join(root, 'docs/smoke/goldens/noise.json');
const noise = existsSync(noisePath) ? JSON.parse(readFileSync(noisePath, 'utf8')) : null;
const floorFor = (name) => {
  const b = noise && noise.bands && noise.bands[name];
  return b ? Math.max(FLAT_FLOOR, b.band * 2) : FLAT_FLOOR;
};
// The second instrument. pixelmatch's threshold is a perceptual distance, so
// a broad low-amplitude shift slips under it completely: VIGNETTE 0.28 -> 0.40
// moved 43-47% of all channels with a mean corner delta of 13 levels, and
// every one of the 40 goldens reported 0.000-0.087%. Mean absolute channel
// delta has nothing to hide under. Same band treatment; null when the suite
// output predates it.
const meanFloorFor = (name) => {
  const b = noise && noise.bands && noise.bands[name];
  return b && b.meanBand != null ? Math.max(0.02, b.meanBand * 2) : null;
};

// A recapture invalidates a band: it was measured against pixels that are no
// longer there. Rather than trust a stale number, say so.
let staleBands = null;
if (noise) {
  const dir = join(root, 'docs/smoke/goldens');
  const newest = readdirSync(dir).filter((f) => f.endsWith('.png'))
    .reduce((a, f) => Math.max(a, statSync(join(dir, f)).mtimeMs), 0);
  if (newest > (noise.goldensMtimeMs || 0) + 1000) staleBands = newest;
}

console.log('Running the suite to collect golden diffs (this is the full run)...\n');
const r = spawnSync('node', [join(root, 'scripts/smoke.mjs')], { cwd: root, encoding: 'utf8', maxBuffer: 1 << 28 });
const out = (r.stdout || '') + (r.stderr || '');

const rows = [];
for (const line of out.split('\n')) {
  // The colon is required: every golden check is `golden<variant>:<bookmark>`,
  // and without it this also matched `goldens are usable diff substrates`,
  // whose detail says "all N captured frames" — so the audit reported a
  // phantom 24th golden that had been "captured (was missing)" on every run.
  const m = line.match(/^\s*(PASS|FAIL)\s+(golden[^\s]*:[^\s]*)\s+(.*)$/);
  if (!m) continue;
  const [, verdict, name, detail] = m;
  const pct = detail.match(/([\d.]+)% pixels differ/);
  const md = detail.match(/meanDelta ([\d.]+)/);
  rows.push({
    name,
    verdict,
    pct: pct ? parseFloat(pct[1]) : null,
    mean: md ? parseFloat(md[1]) : null,
    captured: /captured/.test(detail),
  });
}

if (!rows.length) {
  console.error('No golden lines found. Did the suite fail early?\n');
  console.error(out.split('\n').slice(-25).join('\n'));
  process.exit(1);
}

rows.sort((a, b) => (b.pct ?? -1) - (a.pct ?? -1));
const overMean = (x) => {
  const f = meanFloorFor(x.name);
  return x.mean !== null && f !== null && x.mean > f;
};
const moved = rows.filter((x) => x.pct !== null && (x.pct > floorFor(x.name) || overMean(x)));
const quiet = rows.filter((x) => x.pct !== null && x.pct > 0 && x.pct <= floorFor(x.name));
const captured = rows.filter((x) => x.captured);

const w = Math.max(...rows.map((x) => x.name.length));
console.log(`${rows.length} goldens checked\n`);
console.log(`${'golden'.padEnd(w)}   diff       floor    meanDelta   meanFloor`);
for (const x of rows) {
  const val = x.captured ? 'captured (was missing)' : `${x.pct.toFixed(3)}%`;
  const f = floorFor(x.name);
  const mf = meanFloorFor(x.name);
  const mark = x.verdict === 'FAIL' ? '  FAIL'
    : (x.pct > f ? '  <-- moved' : (overMean(x) ? '  <-- moved (tone)' : ''));
  console.log(`${x.name.padEnd(w)}   ${val.padStart(8)}   ${f.toFixed(3).padStart(6)}   ` +
    `${(x.mean === null ? '-' : x.mean.toFixed(4)).padStart(9)}   ${(mf === null ? '-' : mf.toFixed(3)).padStart(9)}${mark}`);
}

console.log('');
if (captured.length) console.log(`${captured.length} newly captured (golden file was absent).`);
if (quiet.length) console.log(`${quiet.length} within their own measured noise band — leave alone.`);
if (!noise) {
  console.log('\nNo docs/smoke/goldens/noise.json — every pose is on the flat 0.02% floor,');
  console.log('which reports 25 of 40 as moved on any change. Run: node scripts/goldens-noise.mjs');
} else {
  const loose = Object.entries(noise.bands).filter(([, b]) => b.band * 2 > 0.5).map(([n]) => n);
  if (loose.length) {
    console.log(`\n${loose.length} pose(s) have an audit floor ABOVE the 0.5% gate tolerance —`);
    console.log(`for these the gate is the tighter instrument, not this script:`);
    for (const n of loose) console.log(`  ${n}  floor ${(noise.bands[n].band * 2).toFixed(3)}%`);
  }
  if (staleBands) {
    console.log(`\nWARNING: a golden has been recaptured since the bands were measured`);
    console.log(`(${noise.measured}). A recaptured pose's band is meaningless — re-run`);
    console.log(`node scripts/goldens-noise.mjs on a clean tree.`);
  }
}

if (!moved.length) {
  console.log('\nNothing moved. No recapture needed.\n');
  process.exit(0);
}

// checkGolden's result name -> the file on disk. Three shapes are in use:
//   golden:skyline        -> skyline.png
//   golden-haar:skyline   -> skyline-haar.png     (weather suffixed, not prefixed)
//   golden-mobile:hud     -> mobile-hud.png       (mobile prefixed, not suffixed)
// The suite composes golden filenames itself; this has to reproduce that
// mapping exactly, and one special case does not follow the rule. The
// 08:00 clear pose is captured as `<id>-clear-08.png` (variant BEFORE the
// hour suffix), not `<id>-08-clear.png`. Getting it wrong is quiet and
// nasty: the printed `rm` names a file that does not exist, rm exits
// non-zero, and the `&& npm run smoke` after it never runs — so a recapture
// looks like it was skipped for no reason, and one stale golden survives.
function goldenFile(name) {
  const m = name.match(/^golden(?:-([a-z0-9]+))?:(.+)$/);
  if (!m) return null;
  const [, variant, id] = m;
  if (!variant) return `${id}.png`;
  if (variant === 'mobile') return `mobile-${id}.png`;
  const hour = id.match(/^(.*)-(\d{2})$/);
  if (hour) return `${hour[1]}-${variant}-${hour[2]}.png`;
  return `${id}-${variant}.png`;
}

console.log(`\n${moved.length} golden(s) moved beyond the noise floor:`);
for (const x of moved) console.log(`  ${x.name.padEnd(w)}  ${x.pct.toFixed(3)}%  ->  goldens/${goldenFile(x.name)}`);

const files = moved.map((x) => `docs/smoke/goldens/${goldenFile(x.name)}`).filter((f) => !f.includes('null'));
console.log(`
If that movement is INTENTIONAL, recapture exactly these — never
--update-goldens, which would silently absorb every other drift too:

  rm ${files.join(' ')} && npm run smoke

If it is NOT intentional, you have found a regression the 0.5% tolerance was
about to hide.
`);
