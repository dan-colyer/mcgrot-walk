// One-command deploy to GitHub Pages.
//
//   npm run deploy                 # smoke -> build -> scan -> push -> verify
//   npm run deploy -- --skip-smoke # only when the suite was just run green
//   npm run deploy -- --dry-run    # everything except the push
//
// The steps this replaces were done by hand, and by hand the secret scan is
// the one that gets skipped when you are in a hurry — so here it fails closed:
// any hit and nothing is pushed. Same for a red suite and a dirty tree.
//
// Verification is not optional either. A push that "succeeded" is not a
// deploy; Pages can serve a stale payload for minutes, so every changed file
// is md5-compared against the live URL before this reports success.

import { execSync, spawnSync } from 'child_process';
import { existsSync, readFileSync, readdirSync, rmSync, statSync } from 'fs';
import { dirname, join, relative } from 'path';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = join(root, 'dist-site');
const WORKTREE = '/tmp/mcgrot-ghp-deploy';
const BRANCH = 'gh-pages';
const LIVE = 'https://dan-colyer.github.io/mcgrot-walk';

const skipSmoke = process.argv.includes('--skip-smoke');
const dryRun = process.argv.includes('--dry-run');
const message = (() => {
  const i = process.argv.indexOf('-m');
  return i >= 0 ? process.argv[i + 1] : null;
})();

const sh = (cmd, opts = {}) => execSync(cmd, { cwd: root, encoding: 'utf8', ...opts }).trim();
const step = (n, s) => console.log(`\n[${n}] ${s}`);
const die = (msg) => { console.error(`\n  DEPLOY ABORTED: ${msg}\n`); process.exit(1); };
const md5 = (buf) => createHash('md5').update(buf).digest('hex');

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out); else out.push(p);
  }
  return out;
}

// --- 1. the tree must be committed -----------------------------------------
step(1, 'Checking the working tree');
const dirty = sh('git status --porcelain');
if (dirty) die(`uncommitted changes — commit them first so the deploy is reproducible:\n${dirty}`);
const headSha = sh('git rev-parse --short HEAD');
const headSubject = sh('git log -1 --format=%s');
console.log(`  main at ${headSha} — ${headSubject}`);

// --- 2. the suite must be green --------------------------------------------
step(2, 'Validation suite');
if (skipSmoke) {
  console.log('  SKIPPED (--skip-smoke). Only valid if the suite was just run green on this exact commit.');
} else {
  // --shards runs the WHOLE gate as two child processes: 77s against 133s
  // serial, nothing skipped. It refuses to start unless its partition covers
  // every region, and it replays each child's report verbatim — so the FAIL
  // scrape below reads exactly what it read before. The pass total is higher
  // than a serial run's because the always-on boot checks run in each child.
  //
  // Both numbers are the GPU renderer (E0.4, scripts/launch.mjs). Under the
  // old software path they were 346s and ~515s.
  const r = spawnSync('node', [join(root, 'scripts/smoke.mjs'), '--shards'], { cwd: root, encoding: 'utf8' });
  const out = (r.stdout || '') + (r.stderr || '');
  const failures = out.split('\n').filter((l) => l.includes('  FAIL  '));
  if (r.status !== 0 || failures.length) {
    die(`suite is red — ${failures.length} failing check(s):\n${failures.slice(0, 10).join('\n')}`);
  }
  const passes = out.split('\n').filter((l) => l.includes('  PASS  ')).length;
  console.log(`  ${passes} checks green (sharded; boot checks run in every shard, so this exceeds a serial run's 222)`);
}

// --- 3. build ---------------------------------------------------------------
step(3, 'Building dist-site');
// maxRetries because macOS recreates .DS_Store underneath this. A deploy died
// here with ENOTEMPTY on a directory whose only remaining entry was a
// .DS_Store that Finder had written back between the walk and the final
// rmdir — the suite had already run, so it cost a full 90s gate to hit.
rmSync(SITE, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
sh('node build.mjs --site');
const files = walk(SITE);
console.log(`  ${files.length} files, ${(files.reduce((n, f) => n + statSync(f).size, 0) / 1e6).toFixed(1)} MB`);

// --- 4. secret scan, fail closed -------------------------------------------
step(4, 'Secret scan (fails closed)');
const hits = [];
const envPath = join(root, '.env.local');
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/);
    if (!m) continue;
    const key = m[1];
    const value = m[2].trim().replace(/^["']|["']$/g, '');
    if (value.length < 8) continue;
    for (const f of files) {
      if (readFileSync(f).includes(value)) hits.push(`value of ${key} appears in ${relative(SITE, f)}`);
    }
  }
} else {
  console.log('  (no .env.local on disk — pattern scan only)');
}
const PATTERNS = [
  [/AIza[0-9A-Za-z_-]{30,}/, 'Google API key'],
  [/sk-[A-Za-z0-9]{20,}/, 'OpenAI-style key'],
  [/gh[pousr]_[A-Za-z0-9]{30,}/, 'GitHub token'],
  [/xox[baprs]-[A-Za-z0-9-]{10,}/, 'Slack token'],
  [/-----BEGIN [A-Z ]*PRIVATE KEY-----/, 'private key'],
];
for (const f of files) {
  if (/\.(png|jpe?g|mp3|glb|woff2?|ico)$/i.test(f)) continue; // binaries: covered by the value scan above
  const text = readFileSync(f, 'utf8');
  for (const [re, label] of PATTERNS) if (re.test(text)) hits.push(`${label} pattern in ${relative(SITE, f)}`);
}
for (const f of files) {
  if (/(^|\/)\.env|\.pem$|\.key$|id_rsa/.test(relative(SITE, f))) hits.push(`credential file ${relative(SITE, f)}`);
}
if (hits.length) die(`secret scan found ${hits.length} issue(s):\n  - ${hits.join('\n  - ')}`);
console.log(`  clean — ${files.length} files scanned, no env value, key pattern or credential file`);

// --- 5. sync into the gh-pages worktree ------------------------------------
step(5, `Syncing into ${BRANCH}`);
rmSync(WORKTREE, { recursive: true, force: true });
sh(`git worktree add ${WORKTREE} ${BRANCH}`, { stdio: 'pipe' });
let changed = [];
try {
  for (const name of readdirSync(WORKTREE)) {
    if (name === '.git') continue;
    rmSync(join(WORKTREE, name), { recursive: true, force: true });
  }
  sh(`cp -R ${SITE}/. ${WORKTREE}/`);
  sh('git add -A', { cwd: WORKTREE });
  changed = sh('git status --porcelain', { cwd: WORKTREE }).split('\n').filter(Boolean)
    .map((l) => l.slice(3).replace(/^"|"$/g, ''));
  if (!changed.length) {
    console.log('  nothing changed — the live site already matches this build.');
    process.exit(0);
  }
  console.log(`  ${changed.length} path(s) changed:`);
  for (const c of changed.slice(0, 12)) console.log(`    ${c}`);
  if (changed.length > 12) console.log(`    ... and ${changed.length - 12} more`);

  if (dryRun) {
    console.log('\n  --dry-run: stopping before the push.');
    process.exit(0);
  }

  step(6, 'Committing and pushing');
  const subject = message || `Deploy ${headSha}: ${headSubject}`;
  sh(`git commit -q -m ${JSON.stringify(subject)}`, { cwd: WORKTREE });
  sh(`git push origin ${BRANCH}`, { cwd: WORKTREE, stdio: 'pipe' });
  console.log(`  pushed ${BRANCH} ${sh('git rev-parse --short HEAD', { cwd: WORKTREE })}`);
} finally {
  // Always remove the worktree, even if the push threw — a stale one blocks
  // the next deploy with "already exists".
  try { sh(`git worktree remove --force ${WORKTREE}`); } catch { /* nothing to remove */ }
}

// --- 7. verify the live payload --------------------------------------------
step(7, 'Verifying the live payload');
const toVerify = changed.filter((f) => existsSync(join(SITE, f)));
const expected = new Map(toVerify.map((f) => [f, md5(readFileSync(join(SITE, f)))]));
const deadline = Date.now() + 5 * 60 * 1000;
const pending = new Set(toVerify);
let round = 0;
while (pending.size && Date.now() < deadline) {
  round++;
  for (const f of [...pending]) {
    const r = spawnSync('curl', ['-sf', `${LIVE}/${f}`], { encoding: 'buffer', maxBuffer: 1 << 28 });
    if (r.status === 0 && md5(r.stdout) === expected.get(f)) pending.delete(f);
  }
  if (pending.size) {
    console.log(`  round ${round}: ${toVerify.length - pending.size}/${toVerify.length} match, waiting for Pages...`);
    spawnSync('sleep', ['10']);
  }
}
if (pending.size) {
  die(`pushed, but ${pending.size} file(s) never matched live within 5 min: ${[...pending].join(', ')}\n` +
      `  The push succeeded — this is a propagation or build-pipeline problem, not a lost commit.`);
}
console.log(`  all ${toVerify.length} changed file(s) md5-match the live URL`);
console.log(`\nDEPLOYED — ${LIVE}/\n`);
