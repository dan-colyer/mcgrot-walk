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
    // ONLY claim an mp3 that is on disk. E10a.3 fixed this in generate-tts.mjs
    // (which writes the path back on success) and missed it here, where the
    // path was set unconditionally — a catalog entry claiming a file that does
    // not exist 404s on every overlay open and logs a console error, and the
    // `gullet` region gates exactly that over all 418 entries.
    //
    // It never fired because of an arithmetic coincidence: the daily job merges
    // and then renders in the same run, and DAILY_TTS_LIMIT (20) had always
    // been >= the number a wave merged. The 2026-08-10 wave was 32, so the next
    // unattended run would have left entries dangling and committed them.
    //
    // Null until the clip exists is also what decouples merging from
    // rendering: a landing can merge 30 comics, be green, and let the trickle
    // fill in the audio over the following days.
    const audioRel = `audio/${c.id}.mp3`;
    c.audio = existsSync(join(root, 'assets', audioRel)) ? audioRel : null;
    c.sparse = !!e.sparse;
    // MERGE into the existing npc, never replace it. Fields assigned by later
    // pipeline stages — `face` above all (scripts/gen-faces.mjs, and the head
    // texture every paper-doll NPC renders) — live on this object and are NOT
    // present in the batch JSON. A wholesale replace silently destroyed all 100
    // face assignments the first time this ran unattended from the daily job.
    // Batch fields win where they overlap; anything else already there survives.
    c.npc = {
      ...(c.npc || {}),
      name, blurb: e.npc.blurb, voiceName: e.npc.voiceName, accent: e.npc.accent, build: e.npc.build,
    };
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
