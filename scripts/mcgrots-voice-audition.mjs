// G5e — the voice audition rig. Renders the same McGrot lines through three
// FAL voice-design engines so Dan can judge by ear. Does NOT pick a voice —
// see docs/MCGROTS-VOICE.md for the six acceptance criteria, all judged, none
// gated numerically.
//
//   set -a; source .env.local; set +a
//   node scripts/mcgrots-voice-audition.mjs --dry-run          # plan + cost, no network
//   node scripts/mcgrots-voice-audition.mjs --self-test        # offline fault injection, no network, no key needed
//   node scripts/mcgrots-voice-audition.mjs --yes              # the real thing: 3 engines x 5 lines
//   node scripts/mcgrots-voice-audition.mjs --yes --engines=minimax --lines=1   # smallest run that proves the path
//
// Money: this spends Dan's on every non-dry-run call. --yes is required to
// spend anything at all; --dry-run never touches the network. Default scope
// is the five audition lines x three engines and nothing more — going wider
// needs --lines=/--engines= to explicitly name more, there is no "run
// everything bigger" flag.
//
// Resumable: an output mp3 already on disk is never re-rendered — a rerun
// after Ctrl-C or a partial failure does not re-pay for what's already there.
//
// The trap this rig exists to survive: FAL's queue reports COMPLETED for a
// request whose response body is an error (a path that does not exist
// returns 200 with something like {"detail":"Not Found"}, not a clean HTTP
// 404). So `validatePayload()` below is the only thing that decides success —
// never the queue status, never response.ok alone. --self-test proves that
// function actually discriminates, offline.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { execFileSync } from 'child_process';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const KEY = process.env.FAL_KEY;

// --- engines ------------------------------------------------------------
// Schemas confirmed against each endpoint's published API docs (fal.ai),
// 2026-08-15 — not guessed. All three nest the audio under `audio.url`;
// MiniMax additionally returns a top-level `custom_voice_id`, the only one
// of the three whose voice can be called again (the other two rebuild the
// voice from the description on every call, so persistence is meaningless
// for them — they stay in the audition only as a read on whether the
// description is working).
const ENGINES = {
  minimax: {
    endpoint: 'fal-ai/minimax/voice-design',
    persists: true,
    // MiniMax's own docs: "$30 per 1M characters" for the preview audio.
    // Charged against preview_text; the description (prompt) is steering,
    // not billed content, per that wording — estimate accordingly.
    usdPerMChar: 30,
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
    buildInput: (description, line) => ({ prompt: description, text: line }),
    billedChars: (line) => line.length,
  },
};

// --- args -----------------------------------------------------------------
const argv = process.argv.slice(2);
const has = (name) => argv.includes(`--${name}`);
const opt = (name, d = null) => {
  const hit = argv.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.slice(name.length + 3) : d;
};

const DRY_RUN = has('dry-run');
const SELF_TEST = has('self-test');
const YES = has('yes');
const engineArg = opt('engines');
const linesArg = opt('lines');
const descriptionOverride = opt('description');
const outArg = opt('out');

const OUT_DIR = join(root, outArg || 'docs/voice-audition');
const MANIFEST_PATH = join(OUT_DIR, 'manifest.json');

// --- sourcing the description and the five audition lines -----------------
// Read from docs/MCGROTS-VOICE.md rather than a copy in this file — the brief
// is explicit that the description is expected to change across two or three
// passes and a second copy will drift.
function loadDescription() {
  if (descriptionOverride) return readFileSync(join(root, descriptionOverride), 'utf8').trim();
  const doc = readFileSync(join(root, 'docs/MCGROTS-VOICE.md'), 'utf8');
  const section = doc.split('### The prompt')[1]?.split(/\n### /)[0];
  if (!section) throw new Error('docs/MCGROTS-VOICE.md: no "### The prompt" section found');
  const quoted = section.split('\n').filter((l) => l.startsWith('>')).map((l) => l.replace(/^>\s?/, ''));
  const text = quoted.join(' ').trim();
  if (!text) throw new Error('docs/MCGROTS-VOICE.md: "### The prompt" section had no blockquote text');
  return text;
}

// Three of the five audition lines are quoted verbatim in VOICE.md's
// "audition, when it is built" section; the other two are described there,
// not quoted, and are sourced from the files that actually hold the text
// so nothing is retyped and able to drift from the shipped source.
function loadAuditionLines() {
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

  // McGrot's half of the Taxman exchange: his three turns, joined with an
  // ellipsis standing for the Taxman's interjections — this is how he'd
  // actually deliver it, being talked over.
  const dialogue = JSON.parse(readFileSync(join(root, 'generated/mcgrots-dialogue.json'), 'utf8'));
  const mcgrot = dialogue.entries.find((e) => e.key === 'MCGROT');
  const exchange = mcgrot.lines
    .filter((l) => l.id.startsWith('mcgrot-exch-taxman-'))
    .sort((a, b) => a.turn - b.turn)
    .map((l) => l.text)
    .join(' ... ');
  if (!exchange) throw new Error('generated/mcgrots-dialogue.json: no mcgrot-exch-taxman-* lines found');

  // One verbatim garbled comic passage: McGrot's own comic (3c6b637b, hero:
  // true, npc: null in the catalog) — the quoted spans of its TTS director
  // prompt, stripped of stage direction, per the verbatim rule (quoted comic
  // fragments are sacred; only the wrapper phrasing is theirs).
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

// --- the one thing that decides success: never the queue status -----------
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

// What a status-only check would have done — kept only so --self-test can
// show the difference, never used on the real path.
function naiveStatusOnlyCheck(queueSaidCompleted) {
  return queueSaidCompleted === true;
}

function runSelfTest() {
  console.log('Self-test: offline, no network, no FAL_KEY needed.\n');

  // The actual shape of the bug, hit for real while researching the
  // endpoints: the queue reports COMPLETED, and the response body — HTTP 200
  // — is a FastAPI-style error object because the model path did not exist.
  const bad = { detail: 'Not Found' };
  // A representative real MiniMax success body.
  const good = {
    audio: { url: 'https://cdn.fal.ai/example/preview-abc123.mp3', content_type: 'audio/mpeg' },
    custom_voice_id: 'voice_test_abc123',
  };

  const naiveOnBad = naiveStatusOnlyCheck(true); // queue said COMPLETED
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

// --- FAL queue plumbing -----------------------------------------------------
async function submit(endpoint, input) {
  const res = await fetch(`https://queue.fal.run/${endpoint}`, {
    method: 'POST',
    headers: { Authorization: `Key ${KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
    signal: AbortSignal.timeout(30_000),
  });
  const text = await res.text();
  let body; try { body = JSON.parse(text); } catch { body = null; }
  if (!res.ok || !body?.status_url || !body?.response_url) {
    throw new Error(`submit failed (HTTP ${res.status}): ${text.slice(0, 300)}`);
  }
  return body; // { request_id, status_url, response_url, ... }
}

async function pollUntilDone(statusUrl, timeoutMs = 300_000) {
  const t0 = Date.now();
  while (Date.now() - t0 < timeoutMs) {
    const res = await fetch(statusUrl, {
      headers: { Authorization: `Key ${KEY}` },
      signal: AbortSignal.timeout(30_000),
    });
    const body = await res.json().catch(() => null);
    const status = body?.status;
    if (status === 'COMPLETED' || status === 'ERROR' || status === 'FAILED') return status;
    await new Promise((r) => setTimeout(r, 2000));
  }
  throw new Error(`polling timed out after ${timeoutMs}ms`);
}

async function renderOne(engineKey, description, lineText) {
  const engine = ENGINES[engineKey];
  const input = engine.buildInput(description, lineText);
  const submitted = await submit(engine.endpoint, input);
  // The queue status is used only to know when to stop polling — never to
  // decide success. Whatever it says, the response body is what gets checked.
  await pollUntilDone(submitted.status_url);

  const res = await fetch(submitted.response_url, {
    headers: { Authorization: `Key ${KEY}` },
    signal: AbortSignal.timeout(30_000),
  });
  const body = await res.json().catch((e) => ({ detail: `non-JSON response: ${e.message}` }));
  const result = validatePayload(body);
  if (!result.ok) return { success: false, reason: result.reason };

  const audioRes = await fetch(result.audioUrl, { signal: AbortSignal.timeout(60_000) });
  if (!audioRes.ok) return { success: false, reason: `audio download HTTP ${audioRes.status}` };
  const bytes = Buffer.from(await audioRes.arrayBuffer());
  return { success: true, bytes, voiceId: result.voiceId };
}

function ffprobeDuration(path) {
  try {
    const out = execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration',
      '-of', 'default=noprint_wrappers=1:nokey=1', path], { encoding: 'utf8' });
    return parseFloat(out.trim());
  } catch { return null; }
}

// --- plan -------------------------------------------------------------------
function loadManifest() {
  return existsSync(MANIFEST_PATH) ? JSON.parse(readFileSync(MANIFEST_PATH, 'utf8')) : null;
}

async function main() {
  if (SELF_TEST) return runSelfTest();

  const description = loadDescription();
  const allLines = loadAuditionLines();
  const wantLines = linesArg ? linesArg.split(',').map(Number) : allLines.map((l) => l.id);
  const lines = allLines.filter((l) => wantLines.includes(l.id));
  const wantEngines = engineArg ? engineArg.split(',') : Object.keys(ENGINES);
  for (const e of wantEngines) if (!ENGINES[e]) throw new Error(`unknown engine "${e}" — known: ${Object.keys(ENGINES).join(', ')}`);

  const pairs = [];
  for (const line of lines) for (const engineKey of wantEngines) pairs.push({ line, engineKey });

  console.log(`Description: ${description.length} chars, from `
    + `${descriptionOverride || 'docs/MCGROTS-VOICE.md'}`);
  console.log(`Lines: ${lines.length} (${lines.map((l) => l.tag).join(', ')})`);
  console.log(`Engines: ${wantEngines.join(', ')}`);
  console.log(`Plan: ${pairs.length} render(s)\n`);

  let estUsd = 0, estUnknown = 0;
  for (const { line, engineKey } of pairs) {
    const engine = ENGINES[engineKey];
    const chars = engine.billedChars(line.text);
    const cost = engine.usdPerMChar != null ? (chars / 1e6) * engine.usdPerMChar : null;
    if (cost != null) estUsd += cost; else estUnknown++;
    const file = `${String(line.id).padStart(2, '0')}-${line.tag}--${engineKey}.mp3`;
    const status = existsSync(join(OUT_DIR, file)) ? 'on disk, will skip' : 'to render';
    console.log(`  [${engineKey}] ${line.tag} (${chars} chars, `
      + `${cost != null ? '~$' + cost.toFixed(4) : 'rate not published'}) -> ${file} — ${status}`);
  }
  console.log(`\nEstimated spend: ~$${estUsd.toFixed(4)}`
    + (estUnknown ? ` + ${estUnknown} call(s) at an unpublished rate (qwen/maya)` : ''));

  if (DRY_RUN) { console.log('\n--dry-run: no network call made.'); return; }

  if (!KEY) { console.error('\nFAL_KEY not set. source .env.local first.'); process.exit(1); }
  if (KEY.length < 20) { console.error('\nFAL_KEY looks truncated or a placeholder.'); process.exit(1); }
  if (!YES) {
    console.error('\nPass --yes to actually spend money. (--dry-run above shows the plan and estimate.)');
    process.exit(1);
  }

  mkdirSync(OUT_DIR, { recursive: true });
  const manifest = loadManifest() || {
    description, descriptionSource: descriptionOverride || 'docs/MCGROTS-VOICE.md',
    lines: allLines.map(({ id, tag, text, source }) => ({ id, tag, text, source })),
    runs: [], voiceIds: {},
  };
  // Keep the manifest's recorded description in sync with what this run
  // actually used, so the manifest is honest about what was auditioned.
  manifest.description = description;
  manifest.lines = allLines.map(({ id, tag, text, source }) => ({ id, tag, text, source }));

  let ok = 0, fail = 0, skipped = 0, spentUsd = 0;
  for (const { line, engineKey } of pairs) {
    const engine = ENGINES[engineKey];
    const file = `${String(line.id).padStart(2, '0')}-${line.tag}--${engineKey}.mp3`;
    const outPath = join(OUT_DIR, file);
    if (existsSync(outPath)) {
      console.log(`[${file}] skipped — already on disk`);
      skipped++;
      continue;
    }
    console.log(`[${file}] rendering via ${engine.endpoint}...`);
    const t0 = Date.now();
    let result;
    try { result = await renderOne(engineKey, description, line.text); }
    catch (e) { result = { success: false, reason: e.message }; }
    const secs = (Date.now() - t0) / 1000;

    const run = {
      lineId: line.id, line: line.tag, engine: engineKey, endpoint: engine.endpoint,
      file, renderedAt: new Date().toISOString(), tookSec: Math.round(secs),
    };
    if (!result.success) {
      console.error(`[${file}] FAILED (${secs.toFixed(0)}s): ${result.reason}`);
      run.status = 'failed'; run.reason = result.reason;
      fail++;
    } else {
      writeFileSync(outPath, result.bytes);
      const duration = ffprobeDuration(outPath);
      const chars = engine.billedChars(line.text);
      const cost = engine.usdPerMChar != null ? (chars / 1e6) * engine.usdPerMChar : null;
      if (cost != null) spentUsd += cost;
      console.log(`[${file}] OK (${secs.toFixed(0)}s) — ${(result.bytes.length / 1024).toFixed(1)}KB`
        + (duration != null ? `, ${duration.toFixed(1)}s audio` : '')
        + (result.voiceId ? `, custom_voice_id=${result.voiceId}` : ''));
      run.status = 'ok'; run.bytes = result.bytes.length; run.durationSec = duration;
      run.customVoiceId = result.voiceId || null;
      if (result.voiceId) {
        if (manifest.voiceIds[engineKey] && manifest.voiceIds[engineKey] !== result.voiceId) {
          console.warn(`[${file}] NOTE: ${engineKey} returned a DIFFERENT custom_voice_id than `
            + `previously recorded (${manifest.voiceIds[engineKey]} -> ${result.voiceId}). `
            + 'Both are now paid for; the manifest keeps the latest.');
        }
        manifest.voiceIds[engineKey] = result.voiceId;
      }
      ok++;
    }
    manifest.runs = manifest.runs.filter((r) => !(r.lineId === line.id && r.engine === engineKey));
    manifest.runs.push(run);
    writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
  }

  console.log(`\n${ok} ok, ${fail} failed, ${skipped} skipped. Spend this run: ~$${spentUsd.toFixed(4)}`
    + ' (minimax only — qwen/maya have no published rate to sum).');
  if (manifest.voiceIds.minimax) console.log(`MiniMax custom_voice_id: ${manifest.voiceIds.minimax}`);
  console.log(`Manifest: ${MANIFEST_PATH.replace(root + '/', '')}`);
}

main().catch((e) => { console.error(e.stack || e.message); process.exit(1); });
