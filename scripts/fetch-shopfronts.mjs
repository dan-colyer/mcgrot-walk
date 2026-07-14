// Fetch CC-licensed Leith Walk shopfront photos from Wikimedia Commons and crop
// them to 2:1 shopfront-band tiles (512x256) for the façade atlas.
//
// A shopfront band is WIDE, so tiles are 2:1 — roughly a real ~6.4m x 3.2m
// ground-floor shop unit, which is what src/shopfronts.js maps onto each façade.
//
// Most of these are geograph.org.uk photos mirrored onto Commons (CC BY-SA 2.0),
// which is why no geograph API key is needed. Attribution is mandatory: every
// tile's photographer + licence is recorded in assets/shopfronts/credits.json and
// must be surfaced on the site's Credits link.
//
// Usage: node scripts/fetch-shopfronts.mjs

import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync, unlinkSync } from 'fs';
import { execFileSync } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const titles = JSON.parse(readFileSync(join(root, 'scripts/shopfront-titles.json'), 'utf8'));
const outDir = join(root, 'assets/shopfronts/tiles');
const rawDir = join(root, 'assets/shopfronts/raw');
mkdirSync(outDir, { recursive: true });
mkdirSync(rawDir, { recursive: true });

const TILE_W = 512;
const TILE_H = 256;
// A shopfront is the BOTTOM slice of a building photo, not most of it. Take a
// band this tall (fraction of source height), then widen it to 2:1 around the
// centre — so the tile frames the shop, not the tenement and sky above it.
const BAND_FRAC = 0.42;
const BOTTOM_MARGIN = 0.06; // skip the bottom ~6% (road/pavement) when anchoring the band

// upload.wikimedia.org 429s a rapid burst of requests. Throttle + back off, and
// send a descriptive User-Agent (Wikimedia's UA policy asks for one).
const UA = 'McGrotWalk/0.1 (non-commercial art POC; Three.js asset prep)';
const DOWNLOAD_DELAY_MS = 1200;
const MAX_ATTEMPTS = 4;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// --refetch re-downloads sources even where a finished tile already exists
// (needed when the crop changes). Without it, existing tiles are left alone.
const FORCE_REFETCH = process.argv.includes('--refetch');

// Same allow-list as fetch-faces.mjs. Commons thumbnails live on upload.wikimedia.org.
const ALLOWED_HOSTS = [/(^|\.)wikimedia\.org$/, /(^|\.)wikipedia\.org$/];

function hostAllowed(url) {
  try {
    return ALLOWED_HOSTS.some((re) => re.test(new URL(url).hostname));
  } catch {
    return false;
  }
}

const stripTags = (s) => (s || '').replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();

function slugify(title) {
  return title
    .replace(/^File:/, '')
    .replace(/\.[a-z]+$/i, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
}

// --- 1. Pull imageinfo (scaled URL + licence metadata) in batches of 20 -------

// iiurlwidth must stay BELOW the smallest source width we care about: when the
// requested width exceeds the original, Commons hands back the full-size original
// URL instead of a /thumb/ one — and upload.wikimedia.org refuses those (429).
// 800px still comfortably oversamples a 512x256 tile.
function queryBatch(batch) {
  const url =
    'https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo' +
    '&iiprop=url|extmetadata&iiurlwidth=800&titles=' +
    encodeURIComponent(batch.join('|'));
  const raw = execFileSync('curl', ['-sL', '-A', 'Mozilla/5.0', '--fail', url], {
    maxBuffer: 32 * 1024 * 1024,
  }).toString();
  return JSON.parse(raw).query?.pages || {};
}

const entries = [];
for (let i = 0; i < titles.length; i += 20) {
  const pages = queryBatch(titles.slice(i, i + 20));
  for (const page of Object.values(pages)) {
    const info = page.imageinfo && page.imageinfo[0];
    if (!info) {
      console.warn(`[${page.title}] SKIP: no imageinfo (missing file?)`);
      continue;
    }
    const meta = info.extmetadata || {};
    const license = stripTags(meta.LicenseShortName?.value) || 'unknown';
    // Attribution-bearing free licences only — never ship an "all rights reserved" photo.
    if (!/^(cc |cc0|public domain)/i.test(license)) {
      console.warn(`[${page.title}] SKIP: non-free licence (${license})`);
      continue;
    }
    const sourceUrl = info.thumburl || info.url;
    if (!hostAllowed(sourceUrl)) {
      console.warn(`[${page.title}] SKIP: host not allowed (${sourceUrl})`);
      continue;
    }
    entries.push({
      slug: slugify(page.title),
      title: stripTags(meta.ObjectName?.value) || page.title.replace(/^File:/, ''),
      author: stripTags(meta.Artist?.value) || 'Unknown',
      license,
      pageUrl: info.descriptionurl,
      sourceUrl,
    });
  }
}

// De-duplicate slugs (e.g. two "Shops, Leith Walk" photos).
const seen = new Map();
for (const e of entries) {
  const n = (seen.get(e.slug) || 0) + 1;
  seen.set(e.slug, n);
  if (n > 1) e.slug = `${e.slug}-${n}`;
}

console.log(`\n${entries.length} licensed candidates. Downloading + cropping...\n`);

// --- 2. Download, crop to the shopfront band, normalise to 512x256 -----------

const credits = {};
const failed = [];

for (const e of entries) {
  const outJpg = join(outDir, `${e.slug}.jpg`);
  const rawFile = join(rawDir, `${e.slug}.raw`);

  try {
    // Raw downloads are CACHED. Re-cropping (e.g. tweaking BAND_FRAC) must never
    // cost another request — bursting Wikimedia is what got us 429'd before.
    const haveRaw = existsSync(rawFile) && statSync(rawFile).size > 0;

    // No raw cached but we already have the finished tile: keep it. Re-fetching
    // just to re-crop isn't worth burning quota (and Commons will 429 a burst).
    if (!haveRaw && !FORCE_REFETCH && existsSync(outJpg) && statSync(outJpg).size > 0) {
      credits[e.slug] = { title: e.title, author: e.author, license: e.license, pageUrl: e.pageUrl, sourceUrl: e.sourceUrl };
      console.log(`[${e.slug}] keep (existing tile, no raw cached)`);
      continue;
    }

    if (!haveRaw) {
      let downloaded = false;
      for (let attempt = 1; attempt <= MAX_ATTEMPTS && !downloaded; attempt++) {
        await sleep(attempt === 1 ? DOWNLOAD_DELAY_MS : DOWNLOAD_DELAY_MS * 4 * attempt); // back off on 429
        try {
          execFileSync('curl', ['-sL', '-A', UA, '--fail', '--retry', '2', '-o', rawFile, e.sourceUrl], {
            stdio: ['ignore', 'ignore', 'pipe'],
          });
          downloaded = true;
        } catch {
          if (attempt === MAX_ATTEMPTS) throw new Error(`download failed after ${MAX_ATTEMPTS} attempts (rate-limited?)`);
          console.warn(`[${e.slug}] attempt ${attempt} failed, backing off...`);
        }
      }
      if (!existsSync(rawFile) || statSync(rawFile).size === 0) throw new Error('empty download');

      // Reject HTML/error pages saved by mistake (same guard as fetch-faces.mjs).
      const head = readFileSync(rawFile).subarray(0, 512).toString('utf8').toLowerCase();
      if (head.includes('<html') || head.includes('<!doctype')) {
        unlinkSync(rawFile);
        throw new Error('HTML, not an image');
      }
    }

    const dims = execFileSync(
      'ffprobe',
      ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height', '-of', 'csv=p=0', rawFile],
      { stdio: ['ignore', 'pipe', 'pipe'] }
    ).toString().trim();
    const [iw, ih] = dims.split(',').map(Number);
    if (!iw || !ih) throw new Error(`bad dimensions (${dims})`);

    // Band = the bottom BAND_FRAC of the photo (that's where the shop is),
    // widened to 2:1 about the centre. Clamp if that overflows the photo width.
    let ch = Math.round(ih * BAND_FRAC);
    let cw = ch * 2;
    if (cw > iw) { cw = iw; ch = Math.round(cw / 2); }
    const x = Math.round((iw - cw) / 2);
    const y = Math.max(0, Math.min(ih - ch, Math.round(ih - ch - ih * BOTTOM_MARGIN)));

    execFileSync(
      'ffmpeg',
      ['-loglevel', 'error', '-y', '-i', rawFile,
       '-vf', `crop=${cw}:${ch}:${x}:${y},scale=${TILE_W}:${TILE_H}`,
       '-frames:v', '1', '-q:v', '4', outJpg],
      { stdio: ['ignore', 'ignore', 'pipe'] }
    );

    if (!existsSync(outJpg) || statSync(outJpg).size === 0) throw new Error('0-byte output');

    credits[e.slug] = { title: e.title, author: e.author, license: e.license, pageUrl: e.pageUrl, sourceUrl: e.sourceUrl };
    console.log(`[${e.slug}] OK (${iw}x${ih} → ${cw}x${ch} @ y${y})`);
  } catch (err) {
    console.warn(`[${e.slug}] FAILED: ${err.message.split('\n')[0]}`);
    failed.push(e.slug);
    // NEVER delete a previously-good tile just because a re-download was rate-limited.
    // Only clear a genuinely broken (0-byte) output from this run.
    if (existsSync(outJpg) && statSync(outJpg).size === 0) unlinkSync(outJpg);
  }
}

writeFileSync(join(root, 'assets/shopfronts/credits.json'), JSON.stringify(credits, null, 2));

const licenseCounts = {};
for (const c of Object.values(credits)) licenseCounts[c.license] = (licenseCounts[c.license] || 0) + 1;

console.log(`\nDone: ${Object.keys(credits).length} tiles, ${failed.length} failed.`);
console.log('Licences:', JSON.stringify(licenseCounts));
if (failed.length) console.log('Failed:', failed.join(', '));
