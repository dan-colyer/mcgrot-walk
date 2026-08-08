// Measure each golden's run-to-run noise band and write it down.
//
//   node scripts/goldens-noise.mjs            # 3 quiet runs (the minimum)
//   node scripts/goldens-noise.mjs --runs=5
//
// WHY THIS EXISTS. `goldens:audit` used one flat 0.02% floor for all 40
// poses, and 23-25 of them sat above it on EVERY run for ANY change — proved
// against a control worktree at E3g. A list that is three-quarters false
// positives is a list nobody reads, and the whole point of the audit is that
// somebody reads it. The poses are not equally noisy: a sky-visible pose runs
// at a few tenths of a percent from FBM alone, while an interior-facing one
// is at 0.000%. One floor cannot serve both.
//
// So: measure each pose's own band over N consecutive runs with NOTHING
// changed, and give the audit a per-pose floor of max(0.02%, 2 x band).
//
// "Quiet" is load-bearing. Run this on a clean tree, immediately after a
// recapture, with nothing else heavy on the machine. Every number it records
// is by definition noise, so anything real that is in the working tree while
// it runs gets blessed as noise forever.
//
// A RECAPTURE INVALIDATES A BAND. The band belongs to the pixels that were in
// the golden when it was measured; recapture the pose and the band has to be
// re-measured. scripts/goldens-audit.mjs checks the golden files' mtimes
// against this file's and says so rather than trusting a stale band.

import { spawnSync } from 'child_process';
import { readdirSync, statSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const arg = (name, dflt) => {
  const hit = process.argv.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.slice(name.length + 3) : dflt;
};
const RUNS = Math.max(3, Number(arg('runs', '3')));

// A dirty tree means the numbers below would bless a real change as noise.
const dirty = spawnSync('git', ['status', '--porcelain'], { cwd: root, encoding: 'utf8' }).stdout.trim();
if (dirty && !process.argv.includes('--allow-dirty')) {
  console.error('Working tree is dirty. Every diff this measures would be recorded as noise:\n');
  console.error(dirty);
  console.error('\nCommit or stash first, or pass --allow-dirty if you know why.');
  process.exit(2);
}

console.log(`Measuring golden noise over ${RUNS} quiet runs. This is ${RUNS} full suites.\n`);

const perGolden = new Map();
let renderer = 'unknown';

for (let i = 1; i <= RUNS; i++) {
  const t0 = Date.now();
  const r = spawnSync('node', [join(root, 'scripts/smoke.mjs')], {
    cwd: root, encoding: 'utf8', maxBuffer: 1 << 28,
  });
  const out = (r.stdout || '') + (r.stderr || '');
  const rend = out.match(/renderer (\S+)/);
  if (rend) renderer = rend[1];

  let seen = 0;
  for (const line of out.split('\n')) {
    const m = line.match(/^\s*(PASS|FAIL)\s+(golden[^\s]*:[^\s]*)\s+(.*)$/);
    if (!m) continue;
    const [, , name, detail] = m;
    const pct = detail.match(/([\d.]+)% pixels differ/);
    if (!pct) continue; // "captured (was missing)" — no diff to record
    const md = detail.match(/meanDelta ([\d.]+)/);
    if (!perGolden.has(name)) perGolden.set(name, { pct: [], mean: [] });
    perGolden.get(name).pct.push(parseFloat(pct[1]));
    if (md) perGolden.get(name).mean.push(parseFloat(md[1]));
    seen++;
  }
  if (!seen) {
    console.error(`Run ${i} produced no golden diffs. Suite output tail:\n`);
    console.error(out.split('\n').slice(-25).join('\n'));
    process.exit(1);
  }
  console.log(`  run ${i}/${RUNS}: ${seen} goldens, ${((Date.now() - t0) / 1000).toFixed(0)}s`);
}

// The band is the WORST diff seen across the quiet runs, not the mean. The
// audit's job is to not cry wolf, and a mean would leave every pose crying on
// its own bad run.
const bands = {};
for (const [name, v] of [...perGolden.entries()].sort()) {
  bands[name] = {
    band: +Math.max(...v.pct).toFixed(4),
    meanBand: v.mean.length ? +Math.max(...v.mean).toFixed(4) : null,
    runs: v.pct.length,
    samples: v.pct.map((x) => +x.toFixed(4)),
    meanSamples: v.mean.map((x) => +x.toFixed(4)),
  };
}

const goldenDir = join(root, 'docs/smoke/goldens');
const newest = readdirSync(goldenDir)
  .filter((f) => f.endsWith('.png'))
  .reduce((a, f) => Math.max(a, statSync(join(goldenDir, f)).mtimeMs), 0);

const outPath = join(goldenDir, 'noise.json');
writeFileSync(outPath, `${JSON.stringify({
  measured: new Date(newest).toISOString().slice(0, 10),
  note: 'Per-golden run-to-run noise. See scripts/goldens-noise.mjs. Re-measure after any recapture.',
  renderer,
  runs: RUNS,
  goldensMtimeMs: newest,
  bands,
}, null, 2)}\n`);

const w = Math.max(...Object.keys(bands).map((k) => k.length));
console.log(`\n${'golden'.padEnd(w)}   band    floor    meanBand  meanFloor`);
for (const [name, b] of Object.entries(bands).sort((a, c) => c[1].band - a[1].band)) {
  const floor = Math.max(0.02, b.band * 2);
  const mf = b.meanBand === null ? '-' : Math.max(0.02, b.meanBand * 2).toFixed(3);
  console.log(`${name.padEnd(w)}   ${b.band.toFixed(3).padStart(5)}   ${floor.toFixed(3).padStart(6)}   ` +
    `${(b.meanBand === null ? '-' : b.meanBand.toFixed(3)).padStart(8)}   ${String(mf).padStart(9)}`);
}
const noisy = Object.values(bands).filter((b) => b.band > 0.02).length;
console.log(`\n${Object.keys(bands).length} goldens, ${noisy} with a band above the old flat 0.02% floor.`);
console.log(`Written to ${outPath.replace(root + '/', '')}\n`);
