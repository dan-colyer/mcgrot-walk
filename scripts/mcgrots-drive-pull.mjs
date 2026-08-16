// Pull new comic images from Andrew's Google Drive upload folder into a local
// staging directory. Drive -> project, ONE way, always. See
// docs/briefs/g5g-drive-sync.md for why: the folder was seeded from
// assets/comics/ and then hand-pruned 414 -> 396; a sync in the wrong
// direction would silently resurrect everything that was deleted.
//
// This script only ever reads a gdrive: path and writes a local path. It
// never runs `rclone sync` (which deletes to make sides match) and never
// passes a gdrive: path as a copy destination — see the runtime assertion
// around the one `rclone copy` call below.
//
// Usage:
//   node scripts/mcgrots-drive-pull.mjs [--dry-run] [--limit=N]
//        [--remote="McGrot/2 - Add new comics here"] [--staging=assets/comics-incoming]
//
// --remote/--staging/--limit exist so this exact code path can be exercised
// against the read-only seeded folder for testing, without ever touching
// assets/catalog.json or the real upload folder. Defaults are the real ones.

import { execFileSync } from 'child_process';
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readdirSync,
  rmSync,
  statSync,
  writeFileSync,
} from 'fs';
import { tmpdir } from 'os';
import { dirname, join, isAbsolute } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const args = new Map(
  process.argv.slice(2).map((a) => {
    const [k, ...rest] = a.replace(/^--/, '').split('=');
    return [k, rest.length ? rest.join('=') : true];
  })
);

const DRY_RUN = args.has('dry-run');
const LIMIT = args.has('limit') ? Number(args.get('limit')) : Infinity;
const REMOTE_PATH = typeof args.get('remote') === 'string' ? args.get('remote') : 'McGrot/2 - Add new comics here';
const STAGING_DIR = (() => {
  const s = typeof args.get('staging') === 'string' ? args.get('staging') : 'assets/comics-incoming';
  return isAbsolute(s) ? s : join(root, s);
})();
const LIBRARY_DIR = join(root, 'assets/comics');

const REMOTE = `gdrive:${REMOTE_PATH}`;

function rclone(argv) {
  return execFileSync('rclone', argv, { encoding: 'utf8' });
}

// Confirm the remote is configured before doing anything else (brief:
// "Confirm with rclone listremotes before anything else").
const remotes = rclone(['listremotes']).split('\n').map((s) => s.trim());
if (!remotes.includes('gdrive:')) {
  console.error(`FAILED: 'gdrive:' not found in \`rclone listremotes\` (saw: ${remotes.filter(Boolean).join(', ') || '(none)'})`);
  process.exit(1);
}

console.log(`Remote:  ${REMOTE}`);
console.log(`Staging: ${STAGING_DIR}${DRY_RUN ? '  (dry run)' : ''}`);

let listing;
try {
  listing = JSON.parse(rclone(['lsjson', REMOTE]));
} catch (err) {
  console.error(`FAILED: could not list "${REMOTE}": ${err.message.split('\n')[0]}`);
  process.exit(1);
}

if (listing.length === 0) {
  console.log("Andrew's folder is empty. Nothing to pull.");
  process.exit(0);
}

const files = listing.filter((e) => !e.IsDir);
const dirs = listing.filter((e) => e.IsDir);
const images = files.filter((e) => (e.MimeType || '').startsWith('image/'));
const nonImages = files.filter((e) => !(e.MimeType || '').startsWith('image/'));

function namesIn(dir) {
  if (!existsSync(dir)) return new Set();
  return new Set(readdirSync(dir).filter((n) => statSync(join(dir, n)).isFile()));
}

const knownNames = new Set([...namesIn(LIBRARY_DIR), ...namesIn(STAGING_DIR)]);

const alreadyOnDisk = images.filter((e) => knownNames.has(e.Name));
let toPull = images.filter((e) => !knownNames.has(e.Name));
if (toPull.length > LIMIT) toPull = toPull.slice(0, LIMIT);

console.log(`\nDrive folder: ${files.length} file(s), ${dirs.length} subfolder(s) (not descended into).`);
if (nonImages.length) {
  console.log(`Not images (${nonImages.length}, skipped):`);
  for (const e of nonImages) console.log(`  - ${e.Name} (${e.MimeType || 'unknown type'}, ${e.Size} bytes)`);
}
console.log(`Already on disk (skipped): ${alreadyOnDisk.length}`);

if (toPull.length === 0) {
  console.log('\nNothing new to pull. Done.');
  process.exit(0);
}

const totalBytes = toPull.reduce((sum, e) => sum + e.Size, 0);
console.log(`\nNew: ${toPull.length} file(s), ${(totalBytes / 1024 / 1024).toFixed(2)} MiB`);
for (const e of toPull) console.log(`  + ${e.Name} (${e.Size} bytes)`);

if (DRY_RUN) {
  console.log('\nDry run: not copying.');
  process.exit(0);
}

mkdirSync(STAGING_DIR, { recursive: true });

const listFile = join(mkdtempSync(join(tmpdir(), 'mcgrots-drive-pull-')), 'files.txt');
writeFileSync(listFile, toPull.map((e) => e.Path).join('\n') + '\n');

// The one and only copy call. Source MUST be the gdrive: remote, destination
// MUST be a local path -- asserted at runtime, not just by code review.
const copyArgv = ['copy', '--files-from-raw', listFile, REMOTE, STAGING_DIR];
const [srcArg, destArg] = [copyArgv[3], copyArgv[4]];
if (!srcArg.startsWith('gdrive:') || destArg.startsWith('gdrive:')) {
  console.error('REFUSING: copy direction looks wrong (source must be gdrive:, destination must not be).');
  process.exit(1);
}

try {
  rclone(copyArgv);
} catch (err) {
  console.error(`FAILED: rclone copy: ${err.message.split('\n')[0]}`);
  process.exit(1);
} finally {
  rmSync(dirname(listFile), { recursive: true, force: true });
}

const verified = [];
const failed = [];
for (const e of toPull) {
  const dest = join(STAGING_DIR, e.Name);
  if (existsSync(dest) && statSync(dest).size === e.Size) {
    verified.push(e);
  } else {
    failed.push(e);
  }
}

console.log(`\nPulled ${verified.length}/${toPull.length} into ${STAGING_DIR}.`);
if (failed.length) {
  console.log(`FAILED to verify ${failed.length}:`);
  for (const e of failed) console.log(`  ! ${e.Name}`);
}

console.log(
  verified.length
    ? '\nNext (human): review assets/comics-incoming/, then follow scripts/catalog-batches/BRIEF.md to land ' +
      'them as a catalog batch. This script does not touch assets/catalog.json.'
    : ''
);

process.exit(failed.length ? 1 : 0);
