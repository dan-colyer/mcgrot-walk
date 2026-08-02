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
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

// Sky FBM alone moves up to ~0.1% of pixels on any sky-visible pose run to
// run (documented in docs/VALIDATION.md), so this is the floor below which a
// number is noise rather than news. It is NOT a pass mark: the 0.5% gate
// tolerance is what "passes", and this whole script exists because passing
// and being correct are not the same thing.
const NOISE_FLOOR = 0.02;

console.log('Running the suite to collect golden diffs (this is the full run)...\n');
const r = spawnSync('node', [join(root, 'scripts/smoke.mjs')], { cwd: root, encoding: 'utf8', maxBuffer: 1 << 28 });
const out = (r.stdout || '') + (r.stderr || '');

const rows = [];
for (const line of out.split('\n')) {
  const m = line.match(/^\s*(PASS|FAIL)\s+(golden[^\s]*)\s+(.*)$/);
  if (!m) continue;
  const [, verdict, name, detail] = m;
  const pct = detail.match(/([\d.]+)% pixels differ/);
  rows.push({
    name,
    verdict,
    pct: pct ? parseFloat(pct[1]) : null,
    captured: /captured/.test(detail),
  });
}

if (!rows.length) {
  console.error('No golden lines found. Did the suite fail early?\n');
  console.error(out.split('\n').slice(-25).join('\n'));
  process.exit(1);
}

rows.sort((a, b) => (b.pct ?? -1) - (a.pct ?? -1));
const moved = rows.filter((x) => x.pct !== null && x.pct > NOISE_FLOOR);
const noise = rows.filter((x) => x.pct !== null && x.pct > 0 && x.pct <= NOISE_FLOOR);
const captured = rows.filter((x) => x.captured);

const w = Math.max(...rows.map((x) => x.name.length));
console.log(`${rows.length} goldens checked\n`);
console.log(`${'golden'.padEnd(w)}   diff`);
for (const x of rows) {
  const val = x.captured ? 'captured (was missing)' : `${x.pct.toFixed(3)}%`;
  const mark = x.verdict === 'FAIL' ? '  FAIL' : (x.pct > NOISE_FLOOR ? '  <-- moved' : '');
  console.log(`${x.name.padEnd(w)}   ${val.padStart(8)}${mark}`);
}

console.log('');
if (captured.length) console.log(`${captured.length} newly captured (golden file was absent).`);
if (noise.length) console.log(`${noise.length} within the <=${NOISE_FLOOR}% sky-FBM noise floor — leave alone.`);

if (!moved.length) {
  console.log('\nNothing moved. No recapture needed.\n');
  process.exit(0);
}

// checkGolden's result name -> the file on disk. Three shapes are in use:
//   golden:skyline        -> skyline.png
//   golden-haar:skyline   -> skyline-haar.png     (weather suffixed, not prefixed)
//   golden-mobile:hud     -> mobile-hud.png       (mobile prefixed, not suffixed)
function goldenFile(name) {
  const m = name.match(/^golden(?:-([a-z0-9]+))?:(.+)$/);
  if (!m) return null;
  const [, variant, id] = m;
  if (!variant) return `${id}.png`;
  return variant === 'mobile' ? `mobile-${id}.png` : `${id}-${variant}.png`;
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
