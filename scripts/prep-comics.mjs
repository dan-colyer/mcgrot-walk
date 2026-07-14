// Build the full-street catalog for McGrot Walk 2.
//
// - md5-dedupes every comic across the source dirs (main + other/)
// - recompresses each unique image to assets/comics/<id>.jpg (700px, q5)
// - emits assets/catalog.json: one entry per NPC, skeleton fields for the
//   transcription factory to fill (title / npc / audio / promptFile).
//
// Non-destructive: the v1 comic1/2/3 assets, manifest.json, and the single-file
// artifact build are left untouched. The three v1 comics are carried into the
// catalog as done:true so the factory skips them.
//
// Idempotent: re-running skips images already recompressed and preserves any
// filled-in catalog entries (only skeletons are (re)written for new comics).
//
// Usage: node scripts/prep-comics.mjs
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, statSync } from 'fs';
import { execFileSync } from 'child_process';
import { createHash } from 'crypto';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC_DIRS = [
  '/Users/dan/Desktop/screenshots/mcgrot',
  '/Users/dan/Desktop/screenshots/mcgrot/other',
];
const OUT_DIR = join(root, 'assets/comics');
const CATALOG = join(root, 'assets/catalog.json');
mkdirSync(OUT_DIR, { recursive: true });

// The three v1 comics, keyed by their source UUID → preserved identity + assets.
const V1 = {
  '0a801186-b486-405b-980a-48c81b5314f7': {
    id: 'comic1', title: 'McGrot — The Seafield Stink-Off',
    audio: 'audio/comic1.mp3', promptFile: 'comic1.txt',
    npc: { name: 'Big Rab McGuirk', blurb: "Purveyor o' Bottled Weather",
      voiceName: 'Algenib', accent: 'thick Glaswegian', face: 'faces/rab.jpg',
      build: { height: 2.1, girth: 1.4, headScale: 1.5 } },
  },
  '32244ad4-449f-464f-ab77-b681b99b82fd': {
    id: 'comic2', title: 'McGrot: Into the Realm of Flesh',
    audio: 'audio/comic2.mp3', promptFile: 'comic2.txt',
    npc: { name: 'Morag Gulliet', blurb: "Last Matron o' the Gulliet",
      voiceName: 'Achernar', accent: 'prim Edinburgh Morningside', face: 'faces/morag.jpg',
      build: { height: 1.55, girth: 0.7, headScale: 1.7 } },
  },
  'fa054696-9a54-4cd6-9277-0c57cb76b9f7': {
    id: 'comic3', title: 'McGrot: Micromanage Me Not',
    audio: 'audio/comic3.mp3', promptFile: 'comic3.txt',
    npc: { name: 'Kenneth Grieve', blurb: 'Regional Efficiency Officer (Self-Appointed)',
      voiceName: 'Rasalgethi', accent: 'clipped Aberdonian', face: 'faces/kenneth.jpg',
      build: { height: 1.95, girth: 0.55, headScale: 1.35 } },
  },
};

// 1. Collect unique images by content md5 (dedupes the "(1).png" copies and any
//    file shared between the two dirs).
const uniques = new Map(); // md5 -> { srcPath, srcFile, srcDir, md5 }
for (const dir of SRC_DIRS) {
  if (!existsSync(dir)) { console.warn(`skip missing dir ${dir}`); continue; }
  for (const f of readdirSync(dir)) {
    if (!/\.(png|jpe?g)$/i.test(f)) continue;
    const p = join(dir, f);
    if (!statSync(p).isFile()) continue;
    const md5 = createHash('md5').update(readFileSync(p)).digest('hex');
    if (!uniques.has(md5)) uniques.set(md5, { srcPath: p, srcFile: f, srcDir: dir, md5 });
  }
}

// 2. Assign ids (v1 keep comic1/2/3; rest = md5 hash8, lengthened on collision).
const usedIds = new Set();
const shortId = (md5) => {
  for (let len = 8; len <= 32; len += 2) {
    const cand = md5.slice(0, len);
    if (!usedIds.has(cand)) return cand;
  }
  return md5;
};

const entries = [...uniques.values()]
  .sort((a, b) => a.md5.localeCompare(b.md5))
  .map((u) => {
    const uuid = u.srcFile.replace(/\.(png|jpe?g)$/i, '').replace(/ \(\d+\)$/, '');
    const v1 = V1[uuid];
    const id = v1 ? v1.id : shortId(u.md5);
    usedIds.add(id);
    return { ...u, id, v1 };
  });

// 3. Recompress + build catalog entries.
let recompressed = 0, skipped = 0;
const comics = entries.map((e) => {
  const outJpg = join(OUT_DIR, `${e.id}.jpg`);
  if (existsSync(outJpg)) {
    skipped++;
  } else {
    execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-i', e.srcPath,
      '-vf', "scale='min(700,iw)':-2", '-q:v', '5', outJpg]);
    recompressed++;
  }
  const base = {
    id: e.id,
    image: `comics/${e.id}.jpg`,
    src: e.srcFile,
    srcDir: e.srcDir,
    md5: e.md5,
  };
  if (e.v1) {
    return { ...base, done: true, title: e.v1.title, audio: e.v1.audio,
      promptFile: e.v1.promptFile, npc: e.v1.npc };
  }
  return { ...base, done: false, title: null, audio: null, promptFile: null, npc: null };
});

// 4. Merge with any existing filled-in catalog (preserve factory output across re-runs).
let merged = comics;
if (existsSync(CATALOG)) {
  const prev = JSON.parse(readFileSync(CATALOG, 'utf8'));
  const prevById = new Map((prev.comics || []).map((c) => [c.id, c]));
  merged = comics.map((c) => {
    const old = prevById.get(c.id);
    // Keep prior transcription work if this entry was already filled in.
    if (old && !c.done && old.title) return { ...c, ...old, image: c.image, md5: c.md5, src: c.src, srcDir: c.srcDir };
    return c;
  });
}

const doneCount = merged.filter((c) => c.done || c.title).length;
writeFileSync(CATALOG, JSON.stringify({
  meta: {
    total: merged.length,
    done: doneCount,
    pending: merged.length - doneCount,
    sourceDirs: SRC_DIRS,
  },
  comics: merged,
}, null, 2));

console.log(`prep-comics: ${merged.length} unique comics ` +
  `(recompressed ${recompressed}, skipped ${skipped}) — ` +
  `${doneCount} transcribed, ${merged.length - doneCount} pending → assets/catalog.json`);
