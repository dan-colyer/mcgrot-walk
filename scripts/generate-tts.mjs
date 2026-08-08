// Generate NPC comic readings via Gemini TTS. Catalog-driven, resumable, mixed-model.
// Modelled on whatsapp-bot/src/geminiTts.ts.
//
// Usage:
//   set -a; source .env.local; set +a
//   node scripts/generate-tts.mjs                 # all transcribed entries missing an mp3
//   node scripts/generate-tts.mjs --limit 1       # just one (use as a billing/sanity test)
//   node scripts/generate-tts.mjs --ids a1b2c3d4 e5f6...   # specific ids
//   node scripts/generate-tts.mjs --model gemini-2.5-flash-preview-tts   # force one model
//
// Per-entry model comes from catalog `ttsModel`; --model overrides. Progress is
// logged to scripts/tts-progress.json after every clip, so it is safe to Ctrl-C
// and rerun — completed mp3s are skipped.
import { readFileSync, writeFileSync, mkdirSync, unlinkSync, existsSync } from 'fs';
import { execFileSync } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const KEY = process.env.GEMINI_API_KEY;
if (!KEY) { console.error('GEMINI_API_KEY not set (source .env.local first)'); process.exit(1); }

const DEFAULT_MODEL = 'gemini-2.5-flash-preview-tts';
// $ per 1M tokens (audio output; text input) — for the running cost estimate only.
const PRICE = {
  'gemini-2.5-flash-preview-tts': { audio: 10, text: 0.5 },
  'gemini-3.1-flash-tts-preview': { audio: 20, text: 1 },
};

// --- args ---
const argv = process.argv.slice(2);
const flag = (name) => { const i = argv.indexOf(name); return i >= 0 ? argv[i + 1] : null; };
const modelOverride = flag('--model');
const limit = flag('--limit') ? parseInt(flag('--limit'), 10) : Infinity;
const idsArg = argv.includes('--ids') ? argv.slice(argv.indexOf('--ids') + 1).filter(a => !a.startsWith('--')) : null;

const catalog = JSON.parse(readFileSync(join(root, 'assets/catalog.json'), 'utf8'));
const progressPath = join(root, 'scripts/tts-progress.json');
const progress = existsSync(progressPath)
  ? JSON.parse(readFileSync(progressPath, 'utf8'))
  : { done: [], failed: {} };
mkdirSync(join(root, 'assets/audio'), { recursive: true });

function pcmToWav(pcm) {
  const h = Buffer.alloc(44);
  h.write('RIFF', 0); h.writeUInt32LE(pcm.length + 36, 4); h.write('WAVE', 8);
  h.write('fmt ', 12); h.writeUInt32LE(16, 16); h.writeUInt16LE(1, 20);
  h.writeUInt16LE(1, 22); h.writeUInt32LE(24000, 24); h.writeUInt32LE(48000, 28);
  h.writeUInt16LE(2, 32); h.writeUInt16LE(16, 34); h.write('data', 36); h.writeUInt32LE(pcm.length, 40);
  return Buffer.concat([h, pcm]);
}

// A 429 / quota / billing / permission refusal, as opposed to a transient
// network blip or the model handing back text instead of audio — the first is
// worth stopping the run for, the others are worth retrying.
function isQuotaError(msg) {
  return /\b429\b|quota|billing|permission|\b403\b/i.test(msg);
}

async function tts(text, voiceName, model) {
  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-goog-api-key': KEY },
    body: JSON.stringify({
      contents: [{ parts: [{ text }] }],
      generationConfig: {
        responseModalities: ['AUDIO'],
        speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName } } },
      },
    }),
    signal: AbortSignal.timeout(120_000),
  });
  if (!res.ok) throw new Error(`API ${res.status}: ${(await res.text().catch(() => '')).slice(0, 300)}`);
  const data = await res.json();
  for (const part of data.candidates?.[0]?.content?.parts ?? []) {
    if (part.inlineData?.data) return Buffer.from(part.inlineData.data, 'base64');
  }
  throw new Error('no audio in response (got text instead)');
}

// --- select targets: transcribed, not yet rendered ---
const targets = catalog.comics.filter((c) => {
  if (!c.promptFile) return false;                       // not transcribed yet
  if (idsArg && !idsArg.includes(c.id)) return false;
  const audioRel = c.audio || `audio/${c.id}.mp3`;
  return !existsSync(join(root, 'assets', audioRel));    // skip already-rendered
})
  // E10a.3: the hero-cast lane. Catalog order otherwise, so `hero` is the only
  // thing that jumps a queue ~295 comics long — McGrot's own station is
  // useless without a voice and would sit behind the whole backlog.
  .sort((a, b) => (b.hero ? 1 : 0) - (a.hero ? 1 : 0))
  .slice(0, limit);

if (!targets.length) { console.log('nothing to do — all transcribed entries already have audio.'); process.exit(0); }
console.log(`TTS: ${targets.length} clip(s) to generate.\n`);

let ok = 0, fail = 0;
const estCost = { audio: 0, text: 0 };
for (const [i, comic] of targets.entries()) {
  const model = modelOverride || comic.ttsModel || DEFAULT_MODEL;
  const promptPath = join(root, 'scripts/tts-prompts', comic.promptFile);
  if (!existsSync(promptPath)) { console.warn(`[${comic.id}] no prompt file ${comic.promptFile} — skip`); continue; }
  const prompt = readFileSync(promptPath, 'utf8');
  const audioRel = comic.audio || `audio/${comic.id}.mp3`;
  const out = join(root, 'assets', audioRel);
  const voice = comic.npc?.voiceName || 'Algenib';

  let pcm = null, err = '';
  for (let attempt = 1; attempt <= 4 && !pcm; attempt++) {
    try { pcm = await tts(prompt, voice, model); }
    catch (e) {
      err = e.message;
      console.warn(`[${comic.id}] attempt ${attempt}/4 (${model}) failed: ${err}`);
      // Retrying a daily-quota 429 is pointless — the allowance resets tomorrow,
      // not in nine seconds. Give up on this clip immediately and let the
      // caller below stop the run.
      if (isQuotaError(err)) break;
      if (attempt < 4) await new Promise(r => setTimeout(r, 3000 * attempt));
    }
  }
  if (!pcm) {
    fail++; progress.failed[comic.id] = err;
    writeFileSync(progressPath, JSON.stringify(progress, null, 2));
    console.error(`[${comic.id}] FAILED`);
    // Stop the whole run on a quota error, wherever it lands. The free daily
    // allowance runs out mid-run as a matter of course (measured: ~14 clips on
    // 2026-07-31), and every clip after that point fails identically — the old
    // "only bail on clip 0" rule meant a run that hit the ceiling ground through
    // the remainder at 4 attempts each, achieving nothing but noise in the log.
    if (isQuotaError(err)) {
      // "Failed on clip 0" does NOT mean the key is broken. The daily job runs
      // at 09:30 and usually spends the whole free allowance, so a later manual
      // run legitimately starts already at the ceiling and dies on its first
      // clip. Say both, rather than sending anyone to the billing console over
      // a quota that resets by itself tomorrow.
      console.error(
        i === 0
          ? '\nFirst clip failed with a quota/billing/permission error. Stopping.\n' +
            "If the daily job has already run today, this is just today's free allowance\n" +
            'being spent — rerun tomorrow. If no clip has rendered for days, the AI Studio\n' +
            'key may need billing enabled (UK = paid tier).'
          : `\nDaily quota reached after ${ok} clip(s). Stopping — the rest would fail identically.\n` +
            'Completed clips are saved; rerun tomorrow to continue.');
      break;
    }
    continue;
  }
  const wavPath = out.replace(/\.mp3$/, '.wav');
  writeFileSync(wavPath, pcmToWav(pcm));
  execFileSync('ffmpeg', ['-loglevel', 'error', '-i', wavPath, '-ac', '1', '-b:a', '64k', '-y', out]);
  unlinkSync(wavPath);
  const dur = parseFloat(execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', out]).toString().trim()) || 0;

  ok++;
  // WRITE THE PATH BACK. A catalog entry that claims an mp3 which is not on
  // disk is a 404 every time a player opens that station, and the console
  // error it logs would fail the suite's console-clean gate for whichever
  // gate happened to open it. So `audio` stays null until the clip exists and
  // is filled in here — E10a.3, after McGrot's station shipped with a
  // hopeful path and duly 404'd on the first open.
  if (!comic.audio) {
    comic.audio = `audio/${comic.id}.mp3`;
    writeFileSync(join(root, 'assets/catalog.json'), `${JSON.stringify(catalog, null, 2)}\n`);
  }
  delete progress.failed[comic.id];
  if (!progress.done.includes(comic.id)) progress.done.push(comic.id);
  writeFileSync(progressPath, JSON.stringify(progress, null, 2));
  // cost estimate: audio = dur*25 tokens; text input ≈ chars/4 tokens.
  const p = PRICE[model] || PRICE[DEFAULT_MODEL];
  estCost.audio += (dur * 25 / 1e6) * p.audio;
  estCost.text += (prompt.length / 4 / 1e6) * p.text;
  console.log(`[${comic.id}] OK ${i + 1}/${targets.length} — ${voice} / ${model.replace('gemini-', '').replace('-preview-tts', '').replace('-tts-preview', '')}, ${Math.round(dur)}s  (~$${(estCost.audio + estCost.text).toFixed(2)} so far)`);

  if (i < targets.length - 1) await new Promise(r => setTimeout(r, 8000)); // rate-limit pause
}

console.log(`\nDone: ${ok} ok, ${fail} failed. Estimated spend ~$${(estCost.audio + estCost.text).toFixed(2)}.`);
if (fail) console.log('Rerun the same command to retry failures (completed clips are skipped).');
