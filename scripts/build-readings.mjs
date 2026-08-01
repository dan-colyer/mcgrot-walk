// Offline bake: tts-prompts/<id>.txt + the rendered MP3 -> assets/readings.json,
// a phrase-level transcript with audio-anchored timing for the read-along
// overlay (E5a item 0). Covers only the 124 catalog comics that have audio —
// the other 294 have no prompt file and are skipped.
//
// Usage: node scripts/build-readings.mjs
//
// Determinism: parsing and weighting are pure functions of the prompt text;
// timing comes from ffprobe/ffmpeg silencedetect run once per file. Same
// inputs -> byte-identical output.

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execFileSync, spawnSync } from 'child_process';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const promptsDir = join(root, 'scripts/tts-prompts');
const audioDir = join(root, 'assets/audio');
const catalog = JSON.parse(readFileSync(join(root, 'assets/catalog.json'), 'utf8'));

const SILENCE_NOISE = '-30dB';
const SILENCE_MIN_DUR = 0.3; // seconds
const MIN_RUN_DUR = 0.15;    // runs shorter than this get merged into a neighbour

// Pause weight (in character-equivalent units) contributed by a stage
// direction to the phrase that follows it — a [long pause] buys more silence
// than a [sniffs]. Matched case-insensitively against the bracket contents.
const PAUSE_WEIGHTS = [
  [/long pause/i, 30],
  [/\bpause\b/i, 15],
  [/trails? off/i, 12],
  [/silence/i, 20],
];
const DEFAULT_PAUSE_WEIGHT = 5; // any other stage direction (sniffs, coughs, wheezes, ...)

function pauseWeightFor(bracketText) {
  for (const [re, w] of PAUSE_WEIGHTS) if (re.test(bracketText)) return w;
  return DEFAULT_PAUSE_WEIGHT;
}

// --- prompt-file parsing ----------------------------------------------------

// Splits the spoken line into ordered raw tokens: bracketed stage directions,
// "quoted" comic text, and plain vendor text. Quotes are matched as simple
// toggled spans (open/close alternate on every literal "), which handles the
// project's actual data: quote counts are always even and no file contains a
// literal nested "..."..."..." run — verified against all 124 prompt files.
function tokenize(line) {
  const tokens = [];
  const re = /\[[^\]]*\]|"[^"]*"/g;
  let last = 0;
  let m;
  while ((m = re.exec(line))) {
    if (m.index > last) tokens.push({ type: 'plain', text: line.slice(last, m.index) });
    if (m[0][0] === '[') tokens.push({ type: 'bracket', text: m[0].slice(1, -1) });
    else tokens.push({ type: 'quote', text: m[0].slice(1, -1) });
    last = re.lastIndex;
  }
  if (last < line.length) tokens.push({ type: 'plain', text: line.slice(last) });
  return tokens;
}

// Splits a run of text into sentences on terminal .?! (not mid-ellipsis),
// trimming and dropping empties. Verbatim rule: the text itself is untouched,
// only whitespace at split boundaries is trimmed.
function splitSentences(text) {
  const parts = text.split(/(?<=[.?!])(?<!\.\.)\s+(?=\S)/);
  return parts.map((s) => s.trim()).filter(Boolean);
}

// Parses the spoken line (post "Name: " prefix) into phrases + pause weights.
// Returns [{ text, kind, pauseBefore }] where pauseBefore is the character-
// equivalent weight of the immediately preceding stage direction (0 if none).
function parsePhrases(line) {
  const tokens = tokenize(line);
  const phrases = [];
  let pendingPause = 0;
  for (const tok of tokens) {
    if (tok.type === 'bracket') {
      pendingPause += pauseWeightFor(tok.text);
      continue;
    }
    const kind = tok.type === 'quote' ? 'comic' : 'vendor';
    const sentences = splitSentences(tok.text);
    for (let i = 0; i < sentences.length; i++) {
      phrases.push({ text: sentences[i], kind, pauseBefore: i === 0 ? pendingPause : 0 });
      pendingPause = 0;
    }
    // Whitespace-only or empty token (e.g. a bracket directly followed by
    // another bracket) — carry the accumulated pause forward untouched.
    if (sentences.length === 0) continue;
    pendingPause = 0;
  }
  return phrases;
}

function readSpokenLine(promptPath) {
  const raw = readFileSync(promptPath, 'utf8');
  const lines = raw.split('\n');
  const last = lines[lines.length - 1].trim() || lines[lines.length - 2].trim();
  const m = last.match(/^[A-Za-z' ]+:\s*(.*)$/);
  if (!m) throw new Error(`no "Name: " prefix in ${promptPath}: ${JSON.stringify(last)}`);
  return m[1];
}

// --- audio analysis ---------------------------------------------------------

function ffprobeDuration(audioPath) {
  const out = execFileSync('ffprobe', [
    '-v', 'error', '-show_entries', 'format=duration', '-of', 'default=noprint_wrappers=1:nokey=1', audioPath,
  ], { encoding: 'utf8' });
  return parseFloat(out.trim());
}

// Returns non-silent [start, end] runs across the whole clip, merging any run
// shorter than MIN_RUN_DUR into its neighbour (a hiccup inside continuous
// speech, not a real phrase boundary).
function speechRuns(audioPath, duration) {
  const r = spawnSync('ffmpeg', [
    '-i', audioPath, '-af', `silencedetect=noise=${SILENCE_NOISE}:d=${SILENCE_MIN_DUR}`, '-f', 'null', '-',
  ], { encoding: 'utf8' });
  const stderr = r.stderr || '';

  const silences = [];
  let curStart = null;
  for (const line of stderr.split('\n')) {
    const s = line.match(/silence_start:\s*([\d.]+)/);
    if (s) { curStart = parseFloat(s[1]); continue; }
    const e = line.match(/silence_end:\s*([\d.]+)/);
    if (e && curStart !== null) { silences.push([curStart, parseFloat(e[1])]); curStart = null; }
  }
  silences.sort((a, b) => a[0] - b[0]);

  // Complement of silences within [0, duration] = speech runs.
  const runs = [];
  let cursor = 0;
  for (const [s, e] of silences) {
    if (s > cursor) runs.push([cursor, Math.min(s, duration)]);
    cursor = Math.max(cursor, e);
  }
  if (cursor < duration) runs.push([cursor, duration]);

  // Merge runs shorter than MIN_RUN_DUR into whichever neighbour is closer
  // (there is always a neighbour once merged into a single-run fallback).
  let merged = runs.filter(([s, e]) => e - s > 0);
  let changed = true;
  while (changed && merged.length > 1) {
    changed = false;
    for (let i = 0; i < merged.length; i++) {
      const [s, e] = merged[i];
      if (e - s < MIN_RUN_DUR) {
        if (i === 0) merged[1] = [merged[0][0], merged[1][1]];
        else if (i === merged.length - 1) merged[i - 1] = [merged[i - 1][0], merged[i][1]];
        else {
          const leftGap = s - merged[i - 1][1];
          const rightGap = merged[i + 1][0] - e;
          if (leftGap <= rightGap) merged[i - 1] = [merged[i - 1][0], e];
          else merged[i + 1] = [s, merged[i + 1][1]];
        }
        merged.splice(i, 1);
        changed = true;
        break;
      }
    }
  }
  return merged.length ? merged : [[0, duration]];
}

// --- phrase <-> time mapping ------------------------------------------------

// The midpoint of each silence gap BETWEEN two speech runs — a deep trough,
// not just the edge of one. There are runs.length-1 of these (no candidate
// for the leading/trailing silence outside the first/last run: those aren't
// "between phrases").
function gapMidpoints(runs) {
  const gaps = [];
  for (let i = 0; i < runs.length - 1; i++) gaps.push((runs[i][1] + runs[i + 1][0]) / 2);
  return gaps;
}

// Pulls each proportional boundary onto the nearest actual silence gap, in
// order (each gap used at most once, never out of sequence) and only within
// SNAP_MAX_DIST — a boundary with no nearby gap (more phrases than gaps, so
// several must share one run) is left at its raw proportional position.
//
// Boundaries out MUST be non-decreasing. Snapping alone does not guarantee
// that: a snapped boundary can land BEHIND an unsnapped predecessor left at
// its raw position (the raw series is non-decreasing, the gap series is
// non-decreasing, but interleaving the two is not). That inversion shipped in
// 25 of 123 comics and stalled the read-along highlight — the runtime picks
// the last phrase whose start has passed, so a start that goes backwards
// freezes the highlight and then jumps it forward. Two defences here: refuse
// a snap that would move a boundary behind its predecessor, and clamp what
// remains. src/interact.js is independently hardened against bad data.
const SNAP_MAX_DIST = 3; // seconds
function snapBoundaries(rawTimes, gaps) {
  const out = rawTimes.slice();
  let gi = 0;
  let prev = -Infinity;
  for (let i = 0; i < rawTimes.length; i++) {
    const remaining = rawTimes.length - i;
    const maxIdx = gaps.length - remaining; // leave enough gaps for the boundaries after this one
    let snapped = false;
    if (maxIdx >= gi) {
      let bestIdx = -1, bestDist = Infinity;
      for (let idx = gi; idx <= maxIdx; idx++) {
        const d = Math.abs(gaps[idx] - rawTimes[i]);
        if (d < bestDist) { bestDist = d; bestIdx = idx; }
        else if (gaps[idx] > rawTimes[i]) break; // sorted ascending — past the nearest point, distance only grows
      }
      // `gaps[bestIdx] >= prev` is the anti-inversion rule: a snap that would
      // go backwards is declined outright, leaving the raw position (which is
      // already monotonic) rather than corrupting the sequence.
      if (bestIdx >= 0 && bestDist <= SNAP_MAX_DIST && gaps[bestIdx] >= prev) {
        out[i] = gaps[bestIdx];
        gi = bestIdx + 1;
        snapped = true;
      }
    }
    if (!snapped) out[i] = Math.max(rawTimes[i], prev);
    prev = out[i];
  }
  return out;
}

// Declining an inverting snap (above) leaves the boundary clamped onto its
// predecessor, which collapses that phrase to zero length — and a zero-length
// phrase is never the "current" one at runtime, so it would sit in the panel
// and never light up. Spread any collapsed run evenly across the interval
// between the last distinct boundary and the next one, so every phrase gets a
// real, if short, turn. Deterministic and order-preserving.
function spreadCollapsed(boundaries, endTime) {
  const out = boundaries.slice();
  for (let i = 0; i < out.length; i++) {
    const lo = i > 0 ? out[i - 1] : 0;
    if (out[i] > lo) continue;
    let j = i;
    while (j < out.length && out[j] <= lo) j++; // j > i guaranteed: out[i] <= lo
    const hi = j < out.length ? out[j] : endTime;
    if (hi <= lo) continue; // no room to spread into — leave the clamp alone
    const n = j - i + 1;
    for (let k = i; k < j; k++) out[k] = lo + ((k - i + 1) * (hi - lo)) / n;
    i = j - 1;
  }
  return out;
}

// Concatenates the speech runs into a single "spoken time" axis (silence gaps
// excluded), assigns each phrase boundary a length-proportional position on
// that axis by weight, maps it back to real clip time by walking the runs,
// then snaps each boundary onto the nearest actual silence gap where one
// exists nearby (snapBoundaries above) — the proportional pass gets a
// boundary roughly to the right run, but a length-weighted cut partway
// through a long run lands mid-speech; pulling it onto the pause it's
// already closest to is what actually earns a trough, not just a bucket.
// With a single run covering [0, duration] and no internal gaps, this
// degenerates to a pure length-weighted schedule over the whole clip — the
// documented fallback for "detection is hopeless".
function scheduleOverRuns(phrases, runs) {
  const runDurs = runs.map(([s, e]) => e - s);
  const totalSpoken = runDurs.reduce((a, b) => a + b, 0);

  const weights = phrases.map((p) => p.text.length + p.pauseBefore);
  const totalWeight = weights.reduce((a, b) => a + b, 0) || 1;

  function spokenToReal(t) {
    let acc = 0;
    for (let i = 0; i < runs.length; i++) {
      const d = runDurs[i];
      if (t <= acc + d || i === runs.length - 1) {
        return runs[i][0] + Math.max(0, Math.min(d, t - acc));
      }
      acc += d;
    }
    return runs[runs.length - 1][1];
  }

  const rawBoundaries = [];
  let cum = 0;
  for (let i = 0; i < phrases.length - 1; i++) {
    cum += weights[i];
    rawBoundaries.push(spokenToReal((cum / totalWeight) * totalSpoken));
  }
  const boundaries = spreadCollapsed(snapBoundaries(rawBoundaries, gapMidpoints(runs)), spokenToReal(totalSpoken));

  const out = [];
  let start = 0;
  for (let i = 0; i < phrases.length; i++) {
    const end = Math.max(i < boundaries.length ? boundaries[i] : spokenToReal(totalSpoken), start);
    out.push({ text: phrases[i].text, kind: phrases[i].kind, start: round3(start), end: round3(end) });
    // The clamped end, not the raw boundary — carrying the raw value forward
    // is what let an inverted boundary escape the Math.max above and become
    // the NEXT phrase's start.
    start = end;
  }
  return out;
}

function round3(n) { return Math.round(n * 1000) / 1000; }

// --- main --------------------------------------------------------------

function main() {
  const voiced = catalog.comics.filter((c) => c.audio && c.promptFile && existsSync(join(root, 'assets', c.audio)));
  const skipped = catalog.comics.filter((c) => c.audio && c.promptFile && !existsSync(join(root, 'assets', c.audio)));
  for (const c of skipped) console.warn(`skipping ${c.id}: catalog lists ${c.audio} but the file is not on disk (done=${c.done})`);
  const readings = {};
  let anchoredCount = 0;

  for (const comic of voiced) {
    const promptPath = join(promptsDir, comic.promptFile);
    const audioPath = join(root, 'assets', comic.audio);
    const spoken = readSpokenLine(promptPath);
    const phrases = parsePhrases(spoken);
    if (!phrases.length) { console.warn(`no phrases parsed for ${comic.id}`); continue; }

    const duration = ffprobeDuration(audioPath);
    const runs = speechRuns(audioPath, duration);
    const anchored = runs.length > 1;
    if (anchored) anchoredCount++;

    const scheduled = scheduleOverRuns(phrases, runs);
    readings[comic.id] = { duration: round3(duration), anchored, phrases: scheduled };
  }

  const ids = Object.keys(readings).sort();
  const ordered = {};
  for (const id of ids) ordered[id] = readings[id];

  const outPath = join(root, 'assets/readings.json');
  writeFileSync(outPath, JSON.stringify(ordered, null, 0));
  const sizeKb = readFileSync(outPath).length / 1024;
  console.log(`assets/readings.json — ${ids.length} comics (${anchoredCount} anchored, ${ids.length - anchoredCount} fallback), ${sizeKb.toFixed(1)} KB`);
}

main();
