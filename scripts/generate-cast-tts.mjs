// Generate the Taxman two-hander via Gemini TTS. G7j.
//
// A SIBLING of scripts/generate-mcgrot-tts.mjs, not an extension of it — that
// script's OUTPUT_DIR (assets/audio/mcgrot/) and its path guard are McGrot's
// own tree, and the Taxman does not belong in it (docs/briefs/g7j-taxman-
// scene.md). This writes assets/audio/cast/ instead, with its OWN copy of the
// same guard idiom. Duplication is the brief's explicit call: "a guard that
// protects one named tree is checkable by reading it; a guard that protects
// whichever tree it was handed is not."
//
// TWO VOICES, ONE SCRIPT. Six lines, two speakers:
//   - taxman-exch-taxman-{01,02,03}: the Taxman's own half, on a voice never
//     used for McGrot (see VOICES below for which, and why).
//   - mcgrot-exch-taxman-{01,02,03}: McGrot's half of THIS SAME exchange, on
//     Algenib — his own established voice (docs/MCGROTS-VOICE.md), but never
//     rendered before now: generate-mcgrot-tts.mjs's own LINES pool
//     deliberately excludes every *-exch-* id (G7g: "neither character is
//     built anywhere in src/mcgrots/"). Now that the Taxman exists, his other
//     half needs a voice too, and generate-mcgrot-tts.mjs is not this unit's
//     to touch (docs/briefs/g7j-taxman-scene.md's scope list) — so his three
//     exchange lines are rendered here, in his own voice, alongside the
//     Taxman's three. Never written into assets/audio/mcgrot/: still a
//     different tree, same guard.
//
// Never touches assets/catalog.json — an `audio` field there makes a
// character a vendor and moves the 124 census (CLAUDE.md).
//
// Usage:
//   set -a; source .env.local; set +a
//   node scripts/generate-cast-tts.mjs                       # all six lines
//   node scripts/generate-cast-tts.mjs --ids taxman-exch-taxman-01  # one
//   node scripts/generate-cast-tts.mjs --force                # overwrite existing output
import { readFileSync, writeFileSync, mkdirSync, unlinkSync, existsSync } from 'fs';
import { execFileSync } from 'child_process';
import { dirname, join, resolve, sep } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const KEY = process.env.GEMINI_API_KEY;
if (!KEY) { console.error('GEMINI_API_KEY not set (source .env.local first)'); process.exit(1); }

const MODEL = 'gemini-2.5-flash-preview-tts';
// $ per 1M tokens (audio output; text input) — running cost estimate only,
// same figures generate-mcgrot-tts.mjs uses.
const PRICE = { audio: 10, text: 0.5 };

const OUTPUT_DIR = resolve(root, 'assets/audio/cast');
const PROMPT_DIR = join(root, 'scripts/tts-prompts/cast');

// THE GUARD. Own copy, not a parameterised version of generate-mcgrot-tts.mjs's
// — see this file's own header for why duplication is the correct call here.
function assertUnderCastDir(outPath) {
  const resolved = resolve(outPath);
  const prefix = OUTPUT_DIR + sep;
  if (!resolved.startsWith(prefix)) {
    throw new Error(`refusing to write outside assets/audio/cast/: ${resolved}`);
  }
}

// VOICES. Algenib is McGrot's own, established (docs/MCGROTS-VOICE.md) — his
// two exchange lines below reuse it, never a second choice for the same
// character. The Taxman's audioProfile (generated/mcgrots-dialogue.json)
// calls for "thin, rigid... clipped, humourless" — Schedar ("Even" in
// Google's own prebuilt-voice table: https://ai.google.dev/gemini-api/docs/
// speech-generation) is a flat, unvarying cadence that reads as bureaucratic
// humourlessness, and is tonally the opposite of Algenib's own "Gravelly" —
// clearly distinct in register, per the brief. Chosen, not auditioned: "this
// is not an audition" (docs/briefs/g7j-taxman-scene.md). Never a clone or
// impression of a real person's voice (roadmap § 11.0.5, not negotiable) —
// both are Google's own stock prebuilts.
const VOICES = {
  'taxman-exch-taxman-01': 'Schedar',
  'taxman-exch-taxman-02': 'Schedar',
  'taxman-exch-taxman-03': 'Schedar',
  'mcgrot-exch-taxman-01': 'Algenib',
  'mcgrot-exch-taxman-02': 'Algenib',
  'mcgrot-exch-taxman-03': 'Algenib',
};
const POOL = Object.keys(VOICES);

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

// Same classification as generate-mcgrot-tts.mjs / generate-tts.mjs.
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

const targetIds = (idsArg || POOL).filter((id) => POOL.includes(id)).slice(0, limit);
const targets = targetIds.map((id) => ({
  id,
  voice: VOICES[id],
  promptPath: join(PROMPT_DIR, `${id}.txt`),
  out: join(OUTPUT_DIR, `${id}.mp3`),
}));

if (!targets.length) { console.log('nothing to do.'); process.exit(0); }

console.log(`Cast TTS: ${targets.length} clip(s) to generate.\n`);

let ok = 0, fail = 0, skipped = 0;
const estCost = { audio: 0, text: 0 };
for (const [i, t] of targets.entries()) {
  assertUnderCastDir(t.out);

  if (!existsSync(t.promptPath)) { console.warn(`[${t.id}] no brief at ${t.promptPath} — skip`); continue; }

  if (existsSync(t.out) && !force) {
    console.log(`[${t.id}] already rendered at ${t.out} — skip (--force to overwrite)`);
    skipped++;
    continue;
  }

  const prompt = readFileSync(t.promptPath, 'utf8');

  let pcm = null, err = '';
  for (let attempt = 1; attempt <= 4 && !pcm; attempt++) {
    try { pcm = await tts(prompt, t.voice, MODEL); }
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

  assertUnderCastDir(t.out); // re-checked immediately before the write it guards
  const wavPath = t.out.replace(/\.mp3$/, '.wav');
  writeFileSync(wavPath, pcmToWav(pcm));
  execFileSync('ffmpeg', ['-loglevel', 'error', '-i', wavPath, '-ac', '1', '-b:a', '64k', '-y', t.out]);
  unlinkSync(wavPath);
  const dur = parseFloat(execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', t.out]).toString().trim()) || 0;

  ok++;
  estCost.audio += (dur * 25 / 1e6) * PRICE.audio;
  estCost.text += (prompt.length / 4 / 1e6) * PRICE.text;
  console.log(`[${t.id}] OK ${i + 1}/${targets.length} — ${t.voice}, ${dur.toFixed(1)}s  (~$${(estCost.audio + estCost.text).toFixed(4)} so far)`);

  if (i < targets.length - 1) await new Promise(r => setTimeout(r, 8000)); // rate-limit pause
}

console.log(`\nDone: ${ok} ok, ${fail} failed, ${skipped} skipped. Estimated spend ~$${(estCost.audio + estCost.text).toFixed(4)}.`);
if (fail) console.log('Rerun the same command to retry failures (completed clips are skipped).');
