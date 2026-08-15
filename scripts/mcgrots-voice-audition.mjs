// G5e/G5f — the voice audition rig. Renders McGrot lines through two
// families of engine so Dan (and Andrew, remotely) can judge by ear. Does NOT
// pick a voice — see docs/MCGROTS-VOICE.md for the six acceptance criteria,
// all judged, none gated numerically.
//
//   set -a; source .env.local; set +a
//   node scripts/mcgrots-voice-audition.mjs self-test              # offline fault injection, no key needed
//   node scripts/mcgrots-voice-audition.mjs gemini --dry-run        # Part A plan + cost estimate, no network
//   node scripts/mcgrots-voice-audition.mjs gemini --yes            # Part A: 12 solo lines + a 3-voice sweep
//   node scripts/mcgrots-voice-audition.mjs fal --dry-run           # Part B plan + cost estimate, no network
//   node scripts/mcgrots-voice-audition.mjs fal --yes               # Part B: 5 lines x 3 engines
//
// Money: --yes is required to spend anything at all, on either subcommand;
// --dry-run never touches the network. FAL scope is the five audition lines x
// three engines and nothing more by default; Gemini scope is the twelve solo
// lines on one voice plus a three-voice sweep on three of them. Going wider
// needs --lines=/--engines=/--voices= to explicitly name more.
//
// Resumable: an output mp3 already on disk is never re-rendered — a rerun
// after Ctrl-C or a partial failure does not re-pay for what's already there.
//
// The trap this rig exists to survive (FAL only, but load-bearing everywhere
// FAL is touched): the queue reports COMPLETED for a request whose response
// body is an error (a path that does not exist returns 200 with something
// like {"detail":"Not Found"}, not a clean HTTP 404). So `validatePayload()`
// below is the only thing that decides success on the FAL path — never the
// queue status, never response.ok alone. `self-test` proves that function
// actually discriminates, offline.
import { readFileSync, writeFileSync, mkdirSync, existsSync, unlinkSync, statSync } from 'fs';
import { execFileSync } from 'child_process';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const FAL_KEY = process.env.FAL_KEY;
const GEMINI_KEY = process.env.GEMINI_API_KEY;

// --- args -------------------------------------------------------------------
const argv = process.argv.slice(2);
const SUBCOMMAND = argv[0] && !argv[0].startsWith('--') ? argv[0] : null;
const has = (name) => argv.includes(`--${name}`);
const opt = (name, d = null) => {
  const hit = argv.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.slice(name.length + 3) : d;
};

const DRY_RUN = has('dry-run');
const YES = has('yes');
const OUT_DIR = join(root, opt('out') || 'docs/voice-audition');
const MANIFEST_PATH = join(OUT_DIR, 'manifest.json');

function loadManifest() {
  if (!existsSync(MANIFEST_PATH)) return { fal: null, gemini: null };
  const m = JSON.parse(readFileSync(MANIFEST_PATH, 'utf8'));
  // Audition 1's manifest predates the fal/gemini split — lift its flat shape
  // under `fal` so nothing already on disk is lost by loading it once more.
  if (!m.fal && !m.gemini) return { fal: m, gemini: null };
  return { fal: m.fal || null, gemini: m.gemini || null };
}
function saveManifest(m) { writeFileSync(MANIFEST_PATH, JSON.stringify(m, null, 2)); }

// =============================================================================
// Shared: the FAL trap and its offline proof
// =============================================================================
function validatePayload(body) {
  const url = body?.audio?.url;
  const ok = typeof url === 'string' && /^https?:\/\//.test(url);
  const voiceId = typeof body?.custom_voice_id === 'string' ? body.custom_voice_id : null;
  return {
    ok,
    audioUrl: ok ? url : null,
    voiceId,
    reason: ok ? null : `no usable audio.url in response body: ${JSON.stringify(body).slice(0, 300)}`,
  };
}
function naiveStatusOnlyCheck(queueSaidCompleted) { return queueSaidCompleted === true; }

function runSelfTest() {
  console.log('Self-test: offline, no network, no keys needed.\n');
  const bad = { detail: 'Not Found' };
  const good = {
    audio: { url: 'https://cdn.fal.ai/example/preview-abc123.mp3', content_type: 'audio/mpeg' },
    custom_voice_id: 'voice_test_abc123',
  };
  const naiveOnBad = naiveStatusOnlyCheck(true);
  const realOnBad = validatePayload(bad);
  const realOnGood = validatePayload(good);

  console.log('Case 1 — queue status COMPLETED, body is a 404-shaped error:');
  console.log(`  naive status-only check -> ${naiveOnBad ? 'PASS (wrong)' : 'fail'}`);
  console.log(`  validatePayload()       -> ${realOnBad.ok ? 'PASS (wrong)' : 'FAIL (correct)'} — ${realOnBad.reason}`);
  console.log('Case 2 — a real success body:');
  console.log(`  validatePayload()       -> ${realOnGood.ok ? 'PASS (correct)' : 'FAIL (wrong)'}, `
    + `voiceId=${realOnGood.voiceId}`);

  const passed = naiveOnBad === true && realOnBad.ok === false && realOnGood.ok === true
    && realOnGood.voiceId === 'voice_test_abc123';
  console.log(`\n${passed ? 'PASS' : 'FAIL'}: the naive check would have reported case 1 as a clean audition `
    + 'having rendered nothing; validatePayload() correctly fails it and correctly passes case 2.');
  process.exit(passed ? 0 : 1);
}

// Resumability trusts a file's presence, not its validity — flagged in
// review as a known gap: a zero-byte or truncated write would be skipped on
// every future run and never re-rendered. validatePayload() makes a
// zero-byte write unreachable on the real path today, but a truncated
// download would still poison the cache silently, so the skip check gets a
// size floor rather than trusting existsSync alone.
function isRendered(path) { return existsSync(path) && statSync(path).size > 0; }

function ffprobeDuration(path) {
  try {
    const out = execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration',
      '-of', 'default=noprint_wrappers=1:nokey=1', path], { encoding: 'utf8' });
    return parseFloat(out.trim());
  } catch { return null; }
}

// =============================================================================
// Part B — FAL: MiniMax voice-design, Qwen, Maya
// =============================================================================
// Schemas confirmed against each endpoint's published API docs (fal.ai),
// 2026-08-15 — not guessed. All three nest the audio under `audio.url`;
// MiniMax additionally returns a top-level `custom_voice_id` from its
// voice-design endpoint. Audition 1 found that id is minted fresh on every
// voice-design call — persistence only holds if the id is captured once and
// then reused through a separate speech endpoint. NOT YET BUILT: Part B
// (G5f) was paused before this — design-once-reuse still calls voice-design
// on every line, same as audition 1. Do not assume otherwise from this file.
const FAL_ENGINES = {
  minimax: {
    endpoint: 'fal-ai/minimax/voice-design',
    persists: true,
    usdPerMChar: 30, // MiniMax's own docs: "$30 per 1M characters" for the preview audio
    buildInput: (description, line) => ({ prompt: description, preview_text: line }),
    billedChars: (line) => line.length,
  },
  qwen: {
    endpoint: 'fal-ai/qwen-3-tts/voice-design/1.7b',
    persists: false,
    usdPerMChar: null, // not published on the endpoint's docs page, checked 2026-08-15
    buildInput: (description, line) => ({ prompt: description, text: line }),
    billedChars: (line) => line.length,
  },
  maya: {
    endpoint: 'fal-ai/maya',
    persists: false,
    usdPerMChar: null, // not published on the endpoint's docs page, checked 2026-08-15
    // Maya's prompt cap is 500 chars (measured, audition 1: string_too_long on
    // the 759-char accent-first prompt) — the short prompt variant is required.
    buildInput: (description, line) => ({ prompt: description, text: line }),
    billedChars: (line) => line.length,
  },
};

function loadFalDescription(override) {
  if (override) return readFileSync(join(root, override), 'utf8').trim();
  const doc = readFileSync(join(root, 'docs/MCGROTS-VOICE.md'), 'utf8');
  const section = doc.split('### The prompt')[1]?.split(/\n### /)[0];
  if (!section) throw new Error('docs/MCGROTS-VOICE.md: no "### The prompt" section found');
  const quoted = section.split('\n').filter((l) => l.startsWith('>')).map((l) => l.replace(/^>\s?/, ''));
  const text = quoted.join(' ').trim();
  if (!text) throw new Error('docs/MCGROTS-VOICE.md: "### The prompt" section had no blockquote text');
  return text;
}

function loadFalShortDescription() {
  const doc = readFileSync(join(root, 'docs/MCGROTS-VOICE.md'), 'utf8');
  const section = doc.split('### The short prompt')[1]?.split(/\n### /)[0]?.split(/\n---/)[0];
  if (!section) throw new Error('docs/MCGROTS-VOICE.md: no "### The short prompt" section found');
  const quoted = section.split('\n').filter((l) => l.startsWith('>')).map((l) => l.replace(/^>\s?/, ''));
  const text = quoted.join(' ').trim();
  if (!text) throw new Error('docs/MCGROTS-VOICE.md: "### The short prompt" section had no blockquote text');
  return text;
}

// Three of the five audition lines are quoted verbatim in VOICE.md's
// "audition, when it is built" section; the other two are described there,
// not quoted, and are sourced from the files that actually hold the text so
// nothing is retyped and able to drift from the shipped source.
function loadFalLines() {
  const doc = readFileSync(join(root, 'docs/MCGROTS-VOICE.md'), 'utf8');
  const section = doc.split('## The audition, when it is built')[1];
  if (!section) throw new Error('docs/MCGROTS-VOICE.md: no "## The audition, when it is built" section found');
  // The source markdown soft-wraps these bullets at ~80 columns, so a quoted
  // span can contain a literal newline plus the next line's leading indent —
  // collapse to single spaces or it ships to the API verbatim, newlines and all.
  const quotes = [...section.matchAll(/\*\*"([^"]+)"\*\*/g)].map((m) => m[1].replace(/\s+/g, ' '));
  if (quotes.length !== 3) {
    throw new Error(`expected 3 quoted audition lines in VOICE.md, found ${quotes.length} — `
      + 'the section text has changed shape; update the parser or the doc');
  }
  const [naw, flare, sincerity] = quotes;

  const dialogue = JSON.parse(readFileSync(join(root, 'generated/mcgrots-dialogue.json'), 'utf8'));
  const mcgrot = dialogue.entries.find((e) => e.key === 'MCGROT');
  const exchange = mcgrot.lines
    .filter((l) => l.id.startsWith('mcgrot-exch-taxman-'))
    .sort((a, b) => a.turn - b.turn)
    .map((l) => l.text)
    .join(' ... ');
  if (!exchange) throw new Error('generated/mcgrots-dialogue.json: no mcgrot-exch-taxman-* lines found');

  const promptFile = readFileSync(join(root, 'scripts/tts-prompts/3c6b637b.txt'), 'utf8');
  const mcgrotLine = promptFile.split('\nMcGrot:')[1];
  if (!mcgrotLine) throw new Error('scripts/tts-prompts/3c6b637b.txt: no "McGrot:" performance line found');
  const comicPassage = [...mcgrotLine.matchAll(/"([^"]+)"/g)].map((m) => m[1]).join(' ');
  if (!comicPassage) throw new Error('scripts/tts-prompts/3c6b637b.txt: no quoted comic text found');

  return [
    { id: 1, tag: 'naw', text: naw, source: 'docs/MCGROTS-VOICE.md' },
    { id: 2, tag: 'flare', text: flare, source: 'docs/MCGROTS-VOICE.md' },
    { id: 3, tag: 'sincerity', text: sincerity, source: 'docs/MCGROTS-VOICE.md' },
    { id: 4, tag: 'exchange-taxman', text: exchange, source: 'generated/mcgrots-dialogue.json' },
    { id: 5, tag: 'comic-passage', text: comicPassage, source: 'scripts/tts-prompts/3c6b637b.txt' },
  ];
}

async function falSubmit(endpoint, input) {
  const res = await fetch(`https://queue.fal.run/${endpoint}`, {
    method: 'POST',
    headers: { Authorization: `Key ${FAL_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
    signal: AbortSignal.timeout(30_000),
  });
  const text = await res.text();
  let body; try { body = JSON.parse(text); } catch { body = null; }
  if (!res.ok || !body?.status_url || !body?.response_url) {
    throw new Error(`submit failed (HTTP ${res.status}): ${text.slice(0, 300)}`);
  }
  return body;
}

async function falPollUntilDone(statusUrl, timeoutMs = 300_000) {
  const t0 = Date.now();
  while (Date.now() - t0 < timeoutMs) {
    const res = await fetch(statusUrl, { headers: { Authorization: `Key ${FAL_KEY}` }, signal: AbortSignal.timeout(30_000) });
    const body = await res.json().catch(() => null);
    const status = body?.status;
    if (status === 'COMPLETED' || status === 'ERROR' || status === 'FAILED') return status;
    await new Promise((r) => setTimeout(r, 2000));
  }
  throw new Error(`polling timed out after ${timeoutMs}ms`);
}

async function falRenderOne(endpoint, input) {
  const submitted = await falSubmit(endpoint, input);
  // The queue status is used only to know when to stop polling — never to
  // decide success. Whatever it says, the response body is what gets checked.
  await falPollUntilDone(submitted.status_url);
  const res = await fetch(submitted.response_url, { headers: { Authorization: `Key ${FAL_KEY}` }, signal: AbortSignal.timeout(30_000) });
  const body = await res.json().catch((e) => ({ detail: `non-JSON response: ${e.message}` }));
  const result = validatePayload(body);
  if (!result.ok) return { success: false, reason: result.reason };
  const audioRes = await fetch(result.audioUrl, { signal: AbortSignal.timeout(60_000) });
  if (!audioRes.ok) return { success: false, reason: `audio download HTTP ${audioRes.status}` };
  const bytes = Buffer.from(await audioRes.arrayBuffer());
  return { success: true, bytes, voiceId: result.voiceId };
}

async function falProbe() {
  // A single cheap call to confirm the account is actually usable before
  // spending on the rest — audition 1 died mid-run on `Exhausted balance`.
  console.log('FAL probe: one call, MiniMax, the shortest line ("Naw.")...');
  const description = loadFalDescription();
  try {
    const result = await falRenderOne(FAL_ENGINES.minimax.endpoint, FAL_ENGINES.minimax.buildInput(description, 'Naw.'));
    if (!result.success) {
      console.error(`Probe FAILED: ${result.reason}`);
      return false;
    }
    console.log(`Probe OK — ${(result.bytes.length / 1024).toFixed(1)}KB, `
      + `custom_voice_id=${result.voiceId}. Proceeding.`);
    return true;
  } catch (e) {
    console.error(`Probe FAILED: ${e.message}`);
    return false;
  }
}

async function runFal() {
  const description = loadFalDescription(opt('description'));
  const shortDescription = loadFalShortDescription();
  const allLines = loadFalLines();
  const linesArg = opt('lines');
  const wantLines = linesArg ? linesArg.split(',').map(Number) : allLines.map((l) => l.id);
  const lines = allLines.filter((l) => wantLines.includes(l.id));
  const engineArg = opt('engines');
  const wantEngines = engineArg ? engineArg.split(',') : Object.keys(FAL_ENGINES);
  for (const e of wantEngines) if (!FAL_ENGINES[e]) throw new Error(`unknown engine "${e}"`);

  const pairs = [];
  for (const line of lines) for (const engineKey of wantEngines) pairs.push({ line, engineKey });

  console.log(`FAL description: ${description.length} chars (accent-first prompt)`);
  console.log(`Lines: ${lines.length} (${lines.map((l) => l.tag).join(', ')})`);
  console.log(`Engines: ${wantEngines.join(', ')}`);
  console.log(`Plan: ${pairs.length} render(s)\n`);

  let estUsd = 0, estUnknown = 0;
  for (const { line, engineKey } of pairs) {
    const engine = FAL_ENGINES[engineKey];
    const promptText = engineKey === 'maya' ? shortDescription : description;
    const chars = engine.billedChars(line.text);
    const cost = engine.usdPerMChar != null ? (chars / 1e6) * engine.usdPerMChar : null;
    if (cost != null) estUsd += cost; else estUnknown++;
    const file = `${String(line.id).padStart(2, '0')}-${line.tag}--${engineKey}.mp3`;
    const status = existsSync(join(OUT_DIR, file)) ? 'on disk, will skip' : 'to render';
    console.log(`  [${engineKey}] ${line.tag} (prompt ${promptText.length}c, line ${chars}c, `
      + `${cost != null ? '~$' + cost.toFixed(4) : 'rate not published'}) -> ${file} — ${status}`);
  }
  console.log(`\nEstimated spend: ~$${estUsd.toFixed(4)}`
    + (estUnknown ? ` + ${estUnknown} call(s) at an unpublished rate (qwen/maya)` : ''));

  if (DRY_RUN) { console.log('\n--dry-run: no network call made.'); return; }
  if (!FAL_KEY) { console.error('\nFAL_KEY not set. source .env.local first.'); process.exit(1); }
  if (FAL_KEY.length < 20) { console.error('\nFAL_KEY looks truncated or a placeholder.'); process.exit(1); }
  if (!YES) { console.error('\nPass --yes to actually spend money.'); process.exit(1); }

  const probeOk = await falProbe();
  if (!probeOk) { console.error('\nProbe failed — stopping before spending on the rest.'); process.exit(1); }

  mkdirSync(OUT_DIR, { recursive: true });
  const loaded = loadManifest();
  const manifest = loaded.fal || { description, descriptionSource: 'docs/MCGROTS-VOICE.md', lines: [], runs: [], voiceIds: {} };
  manifest.description = description;
  manifest.lines = allLines.map(({ id, tag, text, source }) => ({ id, tag, text, source }));

  let ok = 0, fail = 0, skipped = 0, spentUsd = 0;
  for (const { line, engineKey } of pairs) {
    const engine = FAL_ENGINES[engineKey];
    const promptText = engineKey === 'maya' ? shortDescription : description;
    const file = `${String(line.id).padStart(2, '0')}-${line.tag}--${engineKey}.mp3`;
    const outPath = join(OUT_DIR, file);
    if (isRendered(outPath)) { console.log(`[${file}] skipped — already on disk`); skipped++; continue; }
    console.log(`[${file}] rendering via ${engine.endpoint}...`);
    const t0 = Date.now();
    let result;
    try { result = await falRenderOne(engine.endpoint, engine.buildInput(promptText, line.text)); }
    catch (e) { result = { success: false, reason: e.message }; }
    const secs = (Date.now() - t0) / 1000;

    const run = { lineId: line.id, line: line.tag, engine: engineKey, endpoint: engine.endpoint, file, renderedAt: new Date().toISOString(), tookSec: Math.round(secs) };
    if (!result.success) {
      console.error(`[${file}] FAILED (${secs.toFixed(0)}s): ${result.reason}`);
      run.status = 'failed'; run.reason = result.reason; fail++;
    } else {
      writeFileSync(outPath, result.bytes);
      const duration = ffprobeDuration(outPath);
      const chars = engine.billedChars(line.text);
      const cost = engine.usdPerMChar != null ? (chars / 1e6) * engine.usdPerMChar : null;
      if (cost != null) spentUsd += cost;
      console.log(`[${file}] OK (${secs.toFixed(0)}s) — ${(result.bytes.length / 1024).toFixed(1)}KB`
        + (duration != null ? `, ${duration.toFixed(1)}s audio` : '')
        + (result.voiceId ? `, custom_voice_id=${result.voiceId}` : ''));
      run.status = 'ok'; run.bytes = result.bytes.length; run.durationSec = duration; run.customVoiceId = result.voiceId || null;
      if (result.voiceId) {
        if (manifest.voiceIds[engineKey] && manifest.voiceIds[engineKey] !== result.voiceId) {
          console.warn(`[${file}] NOTE: ${engineKey} returned a DIFFERENT custom_voice_id than `
            + `previously recorded (${manifest.voiceIds[engineKey]} -> ${result.voiceId}).`);
        }
        manifest.voiceIds[engineKey] = result.voiceId;
      }
      ok++;
    }
    manifest.runs = manifest.runs.filter((r) => !(r.lineId === line.id && r.engine === engineKey));
    manifest.runs.push(run);
    saveManifest({ ...loadManifest(), fal: manifest });
  }

  console.log(`\n${ok} ok, ${fail} failed, ${skipped} skipped. Spend this run: ~$${spentUsd.toFixed(4)} `
    + '(minimax only — qwen/maya have no published rate to sum).');
  if (manifest.voiceIds.minimax) console.log(`MiniMax custom_voice_id: ${manifest.voiceIds.minimax}`);
  console.log(`Manifest: ${MANIFEST_PATH.replace(root + '/', '')}`);
}

// =============================================================================
// Part A — Gemini: twelve solo lines, Algenib plus a three-voice sweep
// =============================================================================
// Duplicated in miniature from scripts/generate-tts.mjs rather than imported
// from it — that script is the street's, out of scope to edit, and does not
// export these. Kept deliberately small: just enough to POST, unwrap PCM into
// a WAV, and hand it to ffmpeg, the same way generate-tts.mjs does.
const GEMINI_MODEL = 'gemini-2.5-flash-preview-tts';
// $ per 1M tokens (audio output; text input) — for the estimate only, same
// table as generate-tts.mjs.
const GEMINI_PRICE = { audio: 10, text: 0.5 };
const GEMINI_VOICE_PRIMARY = 'Algenib'; // "Gravelly" — already McGrot's accidental default
// Three other prebuilt voices, swept across three representative lines.
// Chosen, not defended — there is no right answer (brief, Part A). Orus
// ("Firm") for the confrontational register, Fenrir ("Excitable") for the
// fast/restless temperament, Gacrux ("Mature") as a contrast to Algenib on
// the "early fifties, damage earned by hard use, not by age" tension.
const GEMINI_VOICE_SWEEP = ['Orus', 'Fenrir', 'Gacrux'];
const GEMINI_SWEEP_LINE_IDS = ['mcgrot-03', 'mcgrot-01', 'mcgrot-07']; // naw / flare / sincerity — same three as the FAL audition, for cross-engine comparison

function pcmToWav(pcm) {
  const h = Buffer.alloc(44);
  h.write('RIFF', 0); h.writeUInt32LE(pcm.length + 36, 4); h.write('WAVE', 8);
  h.write('fmt ', 12); h.writeUInt32LE(16, 16); h.writeUInt16LE(1, 20);
  h.writeUInt16LE(1, 22); h.writeUInt32LE(24000, 24); h.writeUInt32LE(48000, 28);
  h.writeUInt16LE(2, 32); h.writeUInt16LE(16, 34); h.write('data', 36); h.writeUInt32LE(pcm.length, 40);
  return Buffer.concat([h, pcm]);
}

async function geminiTts(text, voiceName) {
  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-goog-api-key': GEMINI_KEY },
    body: JSON.stringify({
      contents: [{ parts: [{ text }] }],
      generationConfig: { responseModalities: ['AUDIO'], speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName } } } },
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

// The twelve solo lines (mcgrot-01..12), excluding the exchange turns —
// those are a separate corpus and not this unit's scope.
function loadGeminiLines() {
  const dialogue = JSON.parse(readFileSync(join(root, 'generated/mcgrots-dialogue.json'), 'utf8'));
  const mcgrot = dialogue.entries.find((e) => e.key === 'MCGROT');
  const lines = mcgrot.lines.filter((l) => /^mcgrot-\d+$/.test(l.id)).sort((a, b) => a.id.localeCompare(b.id));
  if (lines.length !== 12) throw new Error(`expected 12 solo lines in generated/mcgrots-dialogue.json, found ${lines.length}`);
  return { lines, scene: mcgrot.scene };
}

// Director's briefs are authored by Dan, not generated here (his ruling,
// 2026-08-15, after the first Part A run). One file per line, read verbatim
// and sent as-is — this script does not assemble, paraphrase, or otherwise
// write any brief text.
const BRIEFS_DIR = join(root, 'scripts/mcgrots-voice-briefs');
function briefPath(lineId) { return join(BRIEFS_DIR, `${lineId}.txt`); }
function loadBrief(lineId) {
  const p = briefPath(lineId);
  return existsSync(p) ? readFileSync(p, 'utf8') : null;
}

async function geminiProbe(lineId, voice) {
  const brief = loadBrief(lineId);
  if (!brief) { console.error(`Probe FAILED: no brief at ${briefPath(lineId).replace(root + '/', '')}`); return false; }
  console.log(`Gemini probe: one call, ${voice}, ${lineId}, from its authored brief...`);
  try {
    const pcm = await geminiTts(brief, voice);
    console.log(`Probe OK — ${(pcm.length / 1024).toFixed(1)}KB of PCM. Proceeding.`);
    return true;
  } catch (e) {
    console.error(`Probe FAILED: ${e.message}`);
    return false;
  }
}

async function runGemini() {
  const { lines: allLines, scene } = loadGeminiLines();
  const linesArg = opt('lines');
  const wantIds = linesArg ? linesArg.split(',').map((n) => `mcgrot-${String(n).padStart(2, '0')}`) : allLines.map((l) => l.id);
  const lines = allLines.filter((l) => wantIds.includes(l.id));
  const sweepVoices = opt('voices') ? opt('voices').split(',') : GEMINI_VOICE_SWEEP;

  const jobs = [];
  for (const line of lines) jobs.push({ line, voice: GEMINI_VOICE_PRIMARY });
  for (const lineId of GEMINI_SWEEP_LINE_IDS) {
    if (!wantIds.includes(lineId)) continue;
    const line = allLines.find((l) => l.id === lineId);
    for (const voice of sweepVoices) jobs.push({ line, voice });
  }

  console.log(`Briefs dir: ${BRIEFS_DIR.replace(root + '/', '')} (authored by Dan, not generated here)`);
  console.log(`Scene (reference only, not sent — the brief file is sent verbatim): ${JSON.stringify(scene)}`);
  console.log(`Lines: ${lines.length} solo (${lines.map((l) => l.id).join(', ')})`);
  console.log(`Sweep: ${sweepVoices.join(', ')} on ${GEMINI_SWEEP_LINE_IDS.filter((id) => wantIds.includes(id)).join(', ')}`);
  console.log(`Plan: ${jobs.length} render(s)\n`);

  let estUsd = 0, missing = 0;
  for (const { line, voice } of jobs) {
    const brief = loadBrief(line.id);
    if (!brief) {
      console.log(`  [${voice}] ${line.id} — MISSING brief at ${briefPath(line.id).replace(root + '/', '')}`);
      missing++;
      continue;
    }
    // Printed verbatim (JSON.stringify) so a stray embedded newline or other
    // parse artefact is visible before anything is spent — audition 1's
    // failure mode, now on a file Dan edits by hand instead of code.
    console.log(`  [${voice}] ${line.id} — brief ${brief.length}c: ${JSON.stringify(brief.slice(0, 80))}...`);
    // Rough pre-spend estimate: no audio exists yet to measure, so duration
    // is guessed from a plain speech-rate heuristic (~13 chars/sec) applied
    // to the line's own text (what's actually spoken), not the whole brief.
    const estSeconds = line.text.length / 13;
    const cost = (estSeconds * 25 / 1e6) * GEMINI_PRICE.audio + (brief.length / 4 / 1e6) * GEMINI_PRICE.text;
    estUsd += cost;
  }
  console.log(`\nEstimated spend (rough, duration guessed from line length): ~$${estUsd.toFixed(4)}`
    + (missing ? ` — ${missing} job(s) have no brief yet and will be skipped` : ''));

  if (DRY_RUN) { console.log('\n--dry-run: no network call made.'); return; }
  if (!GEMINI_KEY) { console.error('\nGEMINI_API_KEY not set. source .env.local first.'); process.exit(1); }
  if (!YES) { console.error('\nPass --yes to actually spend money.'); process.exit(1); }

  const probeJob = jobs.find(({ line }) => loadBrief(line.id));
  if (!probeJob) { console.error('\nNo authored brief found to probe with — nothing to render.'); process.exit(1); }
  const probeOk = await geminiProbe(probeJob.line.id, probeJob.voice);
  if (!probeOk) { console.error('\nProbe failed — stopping before spending on the rest.'); process.exit(1); }

  mkdirSync(OUT_DIR, { recursive: true });
  const loaded = loadManifest();
  const manifest = loaded.gemini || {
    briefsSource: 'scripts/mcgrots-voice-briefs/<line-id>.txt, authored by Dan',
    scene, primaryVoice: GEMINI_VOICE_PRIMARY, sweepVoices: GEMINI_VOICE_SWEEP, sweepLines: GEMINI_SWEEP_LINE_IDS,
    lines: [], runs: [],
  };
  manifest.scene = scene;
  manifest.lines = allLines.map(({ id, text, delivery }) => ({ id, text, delivery }));

  let ok = 0, fail = 0, skipped = 0, spentUsd = 0;
  for (const { line, voice } of jobs) {
    const voiceSlug = voice.toLowerCase();
    const file = `${line.id}--gemini-${voiceSlug}.mp3`;
    const outPath = join(OUT_DIR, file);
    if (isRendered(outPath)) { console.log(`[${file}] skipped — already on disk`); skipped++; continue; }
    const brief = loadBrief(line.id);
    if (!brief) { console.log(`[${file}] skipped — no brief yet at ${briefPath(line.id).replace(root + '/', '')}`); skipped++; continue; }
    console.log(`[${file}] rendering via Gemini (${voice})...`);
    const t0 = Date.now();
    let pcm = null, err = '';
    // Measured this run: the preview-tts model's rate limit is tight enough
    // to 429 mid-batch even at modest volume, but recovers within the same
    // run (successes and 429s interleaved). A 429 gets a real wait, not the
    // short backoff other errors get.
    for (let attempt = 1; attempt <= 4 && !pcm; attempt++) {
      try { pcm = await geminiTts(brief, voice); }
      catch (e) {
        err = e.message;
        const isRateLimit = /\b429\b/.test(err);
        if (attempt < 4) await new Promise((r) => setTimeout(r, isRateLimit ? 20000 * attempt : 3000 * attempt));
      }
    }
    const secs = (Date.now() - t0) / 1000;
    const run = { lineId: line.id, voice, file, renderedAt: new Date().toISOString(), tookSec: Math.round(secs) };
    if (!pcm) {
      console.error(`[${file}] FAILED (${secs.toFixed(0)}s): ${err}`);
      run.status = 'failed'; run.reason = err; fail++;
    } else {
      const wavPath = outPath.replace(/\.mp3$/, '.wav');
      writeFileSync(wavPath, pcmToWav(pcm));
      execFileSync('ffmpeg', ['-loglevel', 'error', '-i', wavPath, '-ac', '1', '-b:a', '64k', '-y', outPath]);
      unlinkSync(wavPath);
      const duration = ffprobeDuration(outPath);
      const bytes = statSync(outPath).size;
      const cost = (duration != null ? duration * 25 / 1e6 * GEMINI_PRICE.audio : 0) + (brief.length / 4 / 1e6) * GEMINI_PRICE.text;
      spentUsd += cost;
      console.log(`[${file}] OK (${secs.toFixed(0)}s) — ${(bytes / 1024).toFixed(1)}KB`
        + (duration != null ? `, ${duration.toFixed(1)}s audio` : ''));
      run.status = 'ok'; run.bytes = bytes; run.durationSec = duration;
      ok++;
    }
    manifest.runs = manifest.runs.filter((r) => !(r.lineId === line.id && r.voice === voice));
    manifest.runs.push(run);
    saveManifest({ ...loadManifest(), gemini: manifest });
    await new Promise((r) => setTimeout(r, 8000)); // rate-limit pacing, matches generate-tts.mjs
  }

  console.log(`\n${ok} ok, ${fail} failed, ${skipped} skipped. Estimated spend this run: ~$${spentUsd.toFixed(4)}.`);
  console.log(`Manifest: ${MANIFEST_PATH.replace(root + '/', '')}`);
}

// --- dispatch -----------------------------------------------------------------
async function main() {
  if (SUBCOMMAND === 'self-test' || has('self-test')) return runSelfTest();
  if (SUBCOMMAND === 'gemini') return runGemini();
  if (SUBCOMMAND === 'fal') return runFal();
  console.error('usage: node scripts/mcgrots-voice-audition.mjs <self-test|gemini|fal> [--dry-run|--yes] [...]');
  process.exit(1);
}

main().catch((e) => { console.error(e.stack || e.message); process.exit(1); });
