// Fetch placeholder NPC face textures (Star Trek + Farscape stills) and crop them
// to square 512x512 JPEGs. TEMPORARY placeholders — see PLAN-2-full-street.md.
// Usage: node scripts/fetch-faces.mjs
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync, unlinkSync } from 'fs';
import { execFileSync } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const list = JSON.parse(readFileSync(join(root, 'scripts/face-list.json'), 'utf8'));
const facesDir = join(root, 'assets/faces');
mkdirSync(facesDir, { recursive: true });

const ALLOWED_HOSTS = [/(^|\.)wikimedia\.org$/, /(^|\.)wikipedia\.org$/, /(^|\.)wikia\.nocookie\.net$/];

function hostAllowed(url) {
  try {
    const host = new URL(url).hostname;
    return ALLOWED_HOSTS.some((re) => re.test(host));
  } catch {
    return false;
  }
}

const results = { ok: [], failed: [] };

const only = process.argv.slice(2);

for (const entry of list) {
  const { slug, sourceUrl, cropAnchor } = entry;
  if (only.length && !only.includes(slug)) continue;
  const outJpg = join(facesDir, `${slug}.jpg`);

  if (!hostAllowed(sourceUrl)) {
    console.warn(`[${slug}] SKIP: host not in allow-list (${sourceUrl})`);
    results.failed.push({ slug, reason: 'host not allowed' });
    continue;
  }

  const tmpRaw = join(facesDir, `${slug}-raw.tmp`);
  try {
    execFileSync('curl', ['-sL', '-A', 'Mozilla/5.0', '--fail', '-o', tmpRaw, sourceUrl], {
      stdio: ['ignore', 'ignore', 'pipe'],
    });
  } catch (err) {
    console.warn(`[${slug}] FAILED: download error: ${err.message.split('\n')[0]}`);
    results.failed.push({ slug, reason: 'download failed' });
    if (existsSync(tmpRaw)) unlinkSync(tmpRaw);
    continue;
  }

  if (!existsSync(tmpRaw) || statSync(tmpRaw).size === 0) {
    console.warn(`[${slug}] FAILED: empty download`);
    results.failed.push({ slug, reason: 'empty download' });
    if (existsSync(tmpRaw)) unlinkSync(tmpRaw);
    continue;
  }

  // Reject HTML/error pages saved by mistake (should be an image, not markup).
  const head = readFileSync(tmpRaw).subarray(0, 512).toString('utf8', 0, 512).toLowerCase();
  if (head.includes('<html') || head.includes('<!doctype')) {
    console.warn(`[${slug}] FAILED: downloaded file looks like HTML, not an image`);
    results.failed.push({ slug, reason: 'HTML instead of image' });
    unlinkSync(tmpRaw);
    continue;
  }

  // Default crop is dead-centre; some full-body source stills need a
  // top-anchored crop so the face (not the torso) lands in frame.
  const cropFilter =
    cropAnchor === 'top'
      ? "crop='min(iw,ih)':'min(iw,ih)':'(iw-min(iw,ih))/2':0,scale=512:512"
      : "crop='min(iw,ih)':'min(iw,ih)',scale=512:512";

  try {
    execFileSync(
      'ffmpeg',
      [
        '-loglevel', 'error',
        '-y',
        '-i', tmpRaw,
        '-vf', cropFilter,
        '-frames:v', '1',
        '-q:v', '3',
        outJpg,
      ],
      { stdio: ['ignore', 'ignore', 'pipe'] }
    );
  } catch (err) {
    console.warn(`[${slug}] FAILED: ffmpeg crop error: ${err.message.split('\n')[0]}`);
    results.failed.push({ slug, reason: 'ffmpeg failed (not a valid image?)' });
    if (existsSync(outJpg)) unlinkSync(outJpg);
    unlinkSync(tmpRaw);
    continue;
  }

  unlinkSync(tmpRaw);

  if (!existsSync(outJpg) || statSync(outJpg).size === 0) {
    console.warn(`[${slug}] FAILED: 0-byte output`);
    results.failed.push({ slug, reason: '0-byte output' });
    if (existsSync(outJpg)) unlinkSync(outJpg);
    continue;
  }

  console.log(`[${slug}] OK`);
  results.ok.push(slug);
}

console.log(`\nDone: ${results.ok.length} ok, ${results.failed.length} failed.`);
if (results.failed.length) {
  console.log('Failed:', results.failed.map((f) => `${f.slug} (${f.reason})`).join(', '));
}
