// Merge transcription-factory batch outputs into assets/catalog.json.
//
// Reads every scripts/catalog-batches/batch-*.json, folds title / promptFile /
// npc / sparse into the matching catalog entry, sets audio = audio/<id>.mp3, and
// assigns an alternating ttsModel (mixing the cheap 2.5 and pricier 3.1 TTS).
// Idempotent and non-destructive: v1 done entries and already-merged entries are
// preserved; unknown ids are reported, not dropped.
//
// Usage: node scripts/merge-batches.mjs
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const batchDir = join(root, 'scripts/catalog-batches');
const catalogPath = join(root, 'assets/catalog.json');

const MODELS = ['gemini-2.5-flash-preview-tts', 'gemini-3.1-flash-tts-preview'];

const catalog = JSON.parse(readFileSync(catalogPath, 'utf8'));
const byId = new Map(catalog.comics.map((c) => [c.id, c]));

// Gather batch entries.
const batchFiles = readdirSync(batchDir).filter((f) => /^batch-\d+\.json$/.test(f))
  .sort((a, b) => parseInt(a.match(/\d+/)) - parseInt(b.match(/\d+/)));

let merged = 0, unknown = [], nameSeen = new Map();
for (const bf of batchFiles) {
  const batch = JSON.parse(readFileSync(join(batchDir, bf), 'utf8'));
  for (const e of batch.entries) {
    const c = byId.get(e.id);
    if (!c) { unknown.push(e.id); continue; }
    if (c.done) continue; // never touch v1
    // de-collide NPC names across batches (nameplates should be unique).
    let name = e.npc.name;
    const key = name.toLowerCase();
    if (nameSeen.has(key)) {
      const n = nameSeen.get(key) + 1;
      nameSeen.set(key, n);
      name = `${name} (${['', 'II', 'III', 'IV', 'V'][n - 1] || n})`.trim();
    } else nameSeen.set(key, 1);

    if (!existsSync(join(root, 'scripts/tts-prompts', e.promptFile))) {
      console.warn(`  ! ${e.id}: promptFile ${e.promptFile} missing on disk`);
    }
    c.title = e.title;
    c.promptFile = e.promptFile;
    c.audio = `audio/${c.id}.mp3`;
    c.sparse = !!e.sparse;
    c.npc = { name, blurb: e.npc.blurb, voiceName: e.npc.voiceName, accent: e.npc.accent, build: e.npc.build };
    merged++;
  }
}

// Assign alternating ttsModel across all transcribed-but-not-v1 entries (id order → deterministic).
const transcribed = catalog.comics.filter((c) => c.promptFile && !c.done)
  .sort((a, b) => a.id.localeCompare(b.id));
transcribed.forEach((c, i) => { c.ttsModel = MODELS[i % 2]; });

const doneCount = catalog.comics.filter((c) => c.done || c.title).length;
catalog.meta.done = doneCount;
catalog.meta.pending = catalog.comics.length - doneCount;
writeFileSync(catalogPath, JSON.stringify(catalog, null, 2));

const modelSplit = transcribed.reduce((m, c) => (m[c.ttsModel] = (m[c.ttsModel] || 0) + 1, m), {});
console.log(`merged ${merged} entries from ${batchFiles.length} batches → ${doneCount} transcribed / ${catalog.meta.pending} pending.`);
console.log(`ttsModel split:`, modelSplit);
if (unknown.length) console.log(`unknown ids (not in catalog):`, unknown.join(', '));
