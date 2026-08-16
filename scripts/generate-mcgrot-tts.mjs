// Generate McGrot's OWN-voice comic readings via Gemini TTS.
//
// Separate from scripts/generate-tts.mjs deliberately: that script's target
// filter skips anything already rendered, and all eight of these comics
// already carry a vendor mp3 at assets/audio/<id>.mp3 — pointing the vendor
// script at them would be a silent no-op, not a re-render, and "fixing" that
// filter would break scripts/daily-tts.sh's daily-job invariant. This script
// writes to a wholly separate tree instead: assets/audio/mcgrot/<id>.mp3,
// read from scripts/tts-prompts/mcgrot/<id>.txt. It never touches
// assets/catalog.json — these are not vendor clips, and giving one an `audio`
// field would make McGrot vendor 125 (see CLAUDE.md on 3c6b637b).
//
// Usage:
//   set -a; source .env.local; set +a
//   node scripts/generate-mcgrot-tts.mjs                 # all eight
//   node scripts/generate-mcgrot-tts.mjs --ids 2b2110bb  # one
//   node scripts/generate-mcgrot-tts.mjs --limit 1        # first target only
//   node scripts/generate-mcgrot-tts.mjs --force          # overwrite existing output
import { readFileSync, writeFileSync, mkdirSync, unlinkSync, existsSync } from 'fs';
import { execFileSync } from 'child_process';
import { dirname, join, resolve, sep } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const KEY = process.env.GEMINI_API_KEY;
if (!KEY) { console.error('GEMINI_API_KEY not set (source .env.local first)'); process.exit(1); }

// Andrew's pick, provisional (docs/MCGROTS-VOICE.md, 2026-08-16) — a
// constant, not scattered through the file.
const VOICE = 'Algenib';
const MODEL = 'gemini-2.5-flash-preview-tts';
// $ per 1M tokens (audio output; text input) — running cost estimate only.
const PRICE = { audio: 10, text: 0.5 };

const OUTPUT_DIR = resolve(root, 'assets/audio/mcgrot');

// The guard. Writing McGrot audio over a vendor clip destroys work Dan has
// already heard and accepted, and would do it silently — so this is an
// assertion that throws, in the shipped code path, before any write. Not a
// comment, not a convention.
function assertUnderMcgrotDir(outPath) {
  const resolved = resolve(outPath);
  const prefix = OUTPUT_DIR + sep;
  if (!resolved.startsWith(prefix)) {
    throw new Error(`refusing to write outside assets/audio/mcgrot/: ${resolved}`);
  }
}

const EIGHT = ['2b2110bb', '19f35bc7', '03347596', '0121c47c', '022bcde2', '08d846d0', '00f88d65', '0738152e'];

// --- args ---
const argv = process.argv.slice(2);
const flag = (name) => { const i = argv.indexOf(name); return i >= 0 ? argv[i + 1] : null; };
const force = argv.includes('--force');
const limit = flag('--limit') ? parseInt(flag('--limit'), 10) : Infinity;
const idsArg = argv.includes('--ids') ? argv.slice(argv.indexOf('--ids') + 1).filter(a => !a.startsWith('--')) : null;

mkdirSync(OUTPUT_DIR, { recursive: true });

function pcmToWav(pcm) {
  const h = Buffer.alloc(44);
  h.write('RIFF', 0); h.writeUInt32LE(pcm.length + 36, 4); h.write('WAVE', 8);
  h.write('fmt ', 12); h.writeUInt32LE(16, 16); h.writeUInt16LE(1, 20);
  h.writeUInt16LE(1, 22); h.writeUInt32LE(24000, 24); h.writeUInt32LE(48000, 28);
  h.writeUInt16LE(2, 32); h.writeUInt16LE(16, 34); h.write('data', 36); h.writeUInt32LE(pcm.length, 40);
  return Buffer.concat([h, pcm]);
}

// A 429 / quota / billing / permission refusal, as opposed to a transient
// network blip or the model handing back text instead of audio — the first
// is worth stopping the run for, the others are worth retrying. Same
// classification as generate-tts.mjs.
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

const targetIds = (idsArg || EIGHT).filter((id) => EIGHT.includes(id)).slice(0, limit);
const targets = targetIds.map((id) => {
  const promptPath = join(root, 'scripts/tts-prompts/mcgrot', `${id}.txt`);
  const out = join(OUTPUT_DIR, `${id}.mp3`);
  return { id, promptPath, out };
});

if (!targets.length) { console.log('nothing to do.'); process.exit(0); }

console.log(`McGrot TTS: ${targets.length} clip(s) to generate on ${VOICE}.\n`);

let ok = 0, fail = 0, skipped = 0;
const estCost = { audio: 0, text: 0 };
for (const [i, t] of targets.entries()) {
  assertUnderMcgrotDir(t.out);

  if (!existsSync(t.promptPath)) { console.warn(`[${t.id}] no brief at ${t.promptPath} — skip`); continue; }

  if (existsSync(t.out) && !force) {
    console.log(`[${t.id}] already rendered at ${t.out} — skip (--force to overwrite)`);
    skipped++;
    continue;
  }

  const prompt = readFileSync(t.promptPath, 'utf8');

  let pcm = null, err = '';
  for (let attempt = 1; attempt <= 4 && !pcm; attempt++) {
    try { pcm = await tts(prompt, VOICE, MODEL); }
    catch (e) {
      err = e.message;
      console.warn(`[${t.id}] attempt ${attempt}/4 failed: ${err}`);
      if (isQuotaError(err)) break; // daily quota resets tomorrow, not in nine seconds
      if (attempt < 4) await new Promise(r => setTimeout(r, 3000 * attempt));
    }
  }
  if (!pcm) {
    fail++;
    console.error(`[${t.id}] FAILED`);
    if (isQuotaError(err)) {
      console.error('\nQuota/billing/permission error. Stopping — the rest would fail identically.\nCompleted clips are saved; rerun to continue.');
      break;
    }
    continue;
  }

  assertUnderMcgrotDir(t.out); // re-checked immediately before the write it guards
  const wavPath = t.out.replace(/\.mp3$/, '.wav');
  writeFileSync(wavPath, pcmToWav(pcm));
  execFileSync('ffmpeg', ['-loglevel', 'error', '-i', wavPath, '-ac', '1', '-b:a', '64k', '-y', t.out]);
  unlinkSync(wavPath);
  const dur = parseFloat(execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', t.out]).toString().trim()) || 0;

  ok++;
  estCost.audio += (dur * 25 / 1e6) * PRICE.audio;
  estCost.text += (prompt.length / 4 / 1e6) * PRICE.text;
  console.log(`[${t.id}] OK ${i + 1}/${targets.length} — ${VOICE}, ${dur.toFixed(1)}s  (~$${(estCost.audio + estCost.text).toFixed(4)} so far)`);

  if (i < targets.length - 1) await new Promise(r => setTimeout(r, 8000)); // rate-limit pause
}

console.log(`\nDone: ${ok} ok, ${fail} failed, ${skipped} skipped. Estimated spend ~$${(estCost.audio + estCost.text).toFixed(4)}.`);
if (fail) console.log('Rerun the same command to retry failures (completed clips are skipped).');
