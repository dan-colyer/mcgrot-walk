// The ten-minute visit — G7h. docs/g7-visit-shape.md § 1 is the spec this
// transcribes; the table there is authored content, not derived, and its
// ordering is the content. 28 rows, one cue per row.
//
// A PURE FUNCTION OF THE WALL CLOCK, same shape as rota.js (Dan's correction,
// 2026-08-17, replacing this brief's original session-relative design — see
// docs/MCGROTS-ROADMAP.md § 6, "drive the rota from wall-clock time, never
// from session start"). CUES is static, authored data available at import
// time, so — unlike rota.js — there is no async load(): the cumulative
// schedule table is built once, here, when this module first runs.
//
// kind: 'reading' | 'complaint' | 'walk' | 'silence'
// anchor: where the player is for this cue, or is walking TO for a 'walk' cue
// audio: a reading id, a complaint id, or null (walk/silence carry no audio)
// dur: authored seconds — the sole source of this cue's window; there is no
//   live override (rota.js has none either: its own durations are already
//   real, baked into readings.json before the schedule is built, not
//   discovered at runtime, and this module now follows the same shape).
//   READING AND COMPLAINT ROWS ARE MEASURED, not the shape doc's own vendor-
//   voice/word-rate estimates — both sets came in short once McGrot's own
//   clips existed (readings 185.4s authored -> 144.0s measured; the 9 placed
//   complaints 45.8s -> 38.6s), reproduced by:
//     for f in assets/audio/mcgrot/*.mp3 assets/audio/mcgrot/lines/*.mp3; do
//       printf "%s " "$(basename "$f" .mp3)"
//       ffprobe -v error -show_entries format=duration -of csv=p=0 "$f"
//     done
//   The 48.6s shortfall is pooled into the six SILENCE rows below, in
//   proportion to each row's own original length, rather than left as
//   trailing dead air after every reading/complaint or taken off the total —
//   Dan's ruling, 2026-08-17: this is where the design already wants
//   breathing space, and § 9 asks for complaints "in the gaps", which
//   presupposes the gaps are deliberate. Walk durations are untouched (G7h's
//   own physics-derived figures, not audio). Cycle: 600.6s — 0.6s off ten
//   minutes, the same rounding slack docs/g7-visit-shape.md's own authored
//   total already carried (0.7s), not forced to exactly 600 by fudging a
//   number. docs/g7-visit-shape.md itself is now the document out of date
//   against this table, not the reverse (Dan's call) — it is still not this
//   module's to edit.
// beat: 'notice' | 'approach' | 'settle' on the three silence windows the
//   shape budgets for Pomplé — see main.js. 'taxman' on the wall/101.8s row
//   is G7j's own, read by taxman.js's sceneCueAt(cue.elapsed) — see there.
export const CUES = [
  { kind: 'silence', anchor: 'counter', audio: null, dur: 13.7 },
  { kind: 'reading', anchor: 'counter', audio: '2b2110bb', dur: 17.8 },
  { kind: 'complaint', anchor: 'counter', audio: 'mcgrot-10', dur: 3.9 },
  { kind: 'walk', anchor: 'kerb', audio: null, dur: 4.5 },
  { kind: 'reading', anchor: 'kerb', audio: '19f35bc7', dur: 16.0 },
  { kind: 'silence', anchor: 'kerb', audio: null, dur: 72.0, beat: 'notice' },
  { kind: 'reading', anchor: 'kerb', audio: '03347596', dur: 18.2 },
  { kind: 'complaint', anchor: 'kerb', audio: 'mcgrot-07', dur: 4.8 },
  { kind: 'walk', anchor: 'wall', audio: null, dur: 7.1 },
  { kind: 'complaint', anchor: 'wall', audio: 'mcgrot-01', dur: 4.1 },
  { kind: 'reading', anchor: 'wall', audio: '0121c47c', dur: 22.9 },
  // G7j: the Taxman's two-hander with McGrot lives in this gap — the longest
  // single silence row in the table (docs/g7-taxman-scene.md). `beat:
  // 'taxman'` is read only by taxman.js's sceneCueAt(cue.elapsed); every
  // other silence row's own beat values ('notice'/'approach'/'settle') are
  // Pomplé's and untouched by this unit.
  { kind: 'silence', anchor: 'wall', audio: null, dur: 101.8, beat: 'taxman' },
  { kind: 'complaint', anchor: 'wall', audio: 'mcgrot-04', dur: 4.1 },
  { kind: 'walk', anchor: 'kerb', audio: null, dur: 7.1 },
  { kind: 'reading', anchor: 'kerb', audio: '022bcde2', dur: 14.9 },
  { kind: 'complaint', anchor: 'kerb', audio: 'mcgrot-08', dur: 5.2 },
  { kind: 'walk', anchor: 'far', audio: null, dur: 6.4 },
  { kind: 'silence', anchor: 'far', audio: null, dur: 84.6 },
  { kind: 'reading', anchor: 'far', audio: '08d846d0', dur: 24.3 },
  { kind: 'complaint', anchor: 'far', audio: 'mcgrot-11', dur: 4.3 },
  { kind: 'walk', anchor: 'counter', audio: null, dur: 6.4 },
  { kind: 'complaint', anchor: 'counter', audio: 'mcgrot-09', dur: 4.1 },
  { kind: 'reading', anchor: 'counter', audio: '00f88d65', dur: 15.5 },
  { kind: 'complaint', anchor: 'counter', audio: 'mcgrot-06', dur: 3.9 },
  { kind: 'silence', anchor: 'counter', audio: null, dur: 56.0, beat: 'approach' },
  { kind: 'reading', anchor: 'counter', audio: '0738152e', dur: 14.5 },
  { kind: 'complaint', anchor: 'counter', audio: 'mcgrot-12', dur: 4.2 },
  { kind: 'silence', anchor: 'counter', audio: null, dur: 58.3, beat: 'settle' },
];

// Explicit per-cue field, never guessed from the id's shape (an id-pattern
// heuristic breaks the day an id looks like the other kind). McGrot's own
// readings live at assets/audio/mcgrot/; his complaints, rendered by G7g in
// parallel with this unit, land at assets/audio/mcgrot/lines/.
export function audioDirFor(kind) {
  if (kind === 'reading') return 'mcgrot/';
  if (kind === 'complaint') return 'mcgrot/lines/';
  return null;
}

let cumulative = null; // [{...cue, index, start, end}], one full cycle
let cycleLength = 0;   // seconds; start of CUES[0] is 0
{
  let cursor = 0;
  cumulative = CUES.map((cue, index) => {
    const start = cursor;
    const end = start + cue.dur;
    cursor = end;
    return { ...cue, index, start, end };
  });
  cycleLength = cursor; // 600.7s — see docs/g7-visit-shape.md § 1's own total
}

export function cycleSeconds() {
  return cycleLength;
}

function wrap(t) {
  return ((t % cycleLength) + cycleLength) % cycleLength;
}

// Pure function of an absolute timestamp (seconds) — the same shape as
// rota.js's whatTheyAreDoing/whoIsHere. Loops on cycleSeconds() against
// absolute time, so every client derives the same cue from the same instant
// with no state on the wire (Dan's ruling, roadmap § 6).
export function cueAt(now) {
  const t = wrap(now);
  for (const c of cumulative) {
    if (t >= c.start && t < c.end) return { ...c, elapsed: t - c.start };
  }
  // Floating-point edge at the exact top of the cycle (t === cycleLength,
  // which wrap() cannot produce from a finite modulo, but a t computed by
  // summing floats can land a hair short of the last cue's own `end`).
  const last = cumulative[cumulative.length - 1];
  return { ...last, elapsed: last.dur };
}
