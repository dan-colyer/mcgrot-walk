# G4c — the G4 phase gate's findings

The G4 gate passed the phase. Everything here is follow-up: one real product
defect and four gates that measure a proxy while being named for the thing
itself.

**The full report is `.herdr/gate4.md`.** Read it — every number below is its
measurement, re-run on this machine, and the report carries the working.

**Two dispatches. Part 1 is F14 alone; parts 2 onward are the gate faults.**
F14 is a product defect and the rest are test faults, which is a real
difference: a bad fix to F14 changes what a player hears.

---

## Part 1 — F14: the seek target goes stale and never resyncs

**This is the one thing in G4 that is wrong rather than merely unproven.**

`src/mcgrots/audio.js:126` builds `seekAndPlay` as a closure over
`info.elapsed` — the value read when `mediaEl.src` was assigned. On a cold
file that closure does not run until `loadedmetadata` fires, which can be an
arbitrary time later. It then seeks to where the reading *was* when the
request started, not where it is when the audio is ready. Nothing corrects it
afterwards: once playing the element free-runs, and `update()` only acts when
`info.id` changes.

Measured by the gate, delaying the mp3 route by 3000 ms:

| | |
|---|---|
| `elapsed` when `src` was set | 21.667 s |
| true `elapsed` when playback began | 24.667 s |
| playback actually began at | 22.164 s |
| **behind schedule** | **2.503 s** |

The drift equals the load latency.

**Why no existing check sees it.** The harness serves from `127.0.0.1`, where
metadata arrives in single-digit milliseconds, so the captured value and the
correct value are the same number. That is structural, not an oversight.

**Why it is worth fixing before it ships.** Roadmap § 6 rests the entire
multiplayer argument on a reading being at `now − T` for everyone. Two clients
on different connections would sit at permanently different offsets in the
same file with no mechanism to converge. The single-player cost today is a
couple of seconds; the design claim is the thing being protected.

**The fix, roughly four lines:** keep the latest `info` in a module variable
that `update()` refreshes each frame, and have `seekAndPlay` read that rather
than the captured one. Take it or better it, but say which and why.

**The gate needs a deliberately delayed route** — Playwright's `page.route`
with a timed continuation, the shape the gate used to produce the table above.
**Its control is the same check with no delay**, which must show a drift near
zero; without that control the check passes for an implementation that is
simply slow everywhere. Fault-inject by restoring the captured-closure form
and confirm red.

---

## Part 2 — the four gate faults

Each is a check that passes when the thing it is named for is broken. All four
were fault-injected by the gate; the report has the evidence.

**F15 — no gate can tell playing from silent.** The important one.
`mediaEl.volume = 0` leaves the audio region **7/7 green** with measured
output at **peak 0.000, RMS 0.000**. Every check reads element *state* —
`currentTime`, `paused`, `currentSrc`, `playingId` — and a silent game
satisfies all of them.

This is the audio analogue of `statue.visible = false` passing the statue
region 2/2, and `AGENTS.md`'s invariant now covers both media.

Close it with an analyser tap: wrap `AudioContext` in the harness's init
script, tap the source with an `AnalyserNode`, require non-zero RMS while a
reading is scheduled. **The control is the same page during a gap, which must
read zero.** The gate wrote this and measured peak 0.601 / RMS 0.061 on real
playback against 0.000 / 0.000 muted, so the separation is wide.

**F16 — a clause that can never fail.** "No sound before the gesture" tests
`preGesture.audioElements === 0`, counting `document.querySelectorAll('audio')`.
`audio.js` builds its element with `new Audio()` and never appends it, so that
count is 0 for the life of the page — true before the gesture, after it, and
during playback. Only `started === false` does any work. Drop the clause and
say so, or replace it with the F15 tap asserting genuine silence before the
click.

**F17 — "stops outright, not a fade" cannot see a fade.** The check polls up
to 5 s for `paused === true`, so anything stopping within 5 s satisfies it. A
3-second fade-out injected in place of `pause()` passed **7/7**. The
underlying guarantee is real and structural — one shared `<audio>` element
makes two voices impossible — so either rename the check to what it measures
("playback is stopped by the departure") or bound the time and make the name
true. **Renaming is a legitimate outcome here**; do not invent a mechanism to
justify the old name.

**F18 — the missing-file check has no positive control.** It asserts
`pageerrors === 0 && paused === true`, both of which hold for a page that
never attempted playback at all. It is not vacuous today — the gate measured
the 404 page reaching `started=true` with `currentSrc` set — but nothing pins
that. Add one assertion that `currentSrc` ends with the scheduled id.

---

## Part 3 — two records that do not match the code

Small, and about the record rather than the game.

**A delta recorded as exactly zero.** `MCGROTS-VALIDATION.md` § G4b(2) records
the mid-reading result as "playback started at 21.67s (delta 0.00s)". Three
independent boots put it at **21.83–21.87 s against an `elapsed` of 21.667 s —
a delta of 0.16–0.20 s**, never 0.00. Nothing is wrong; the value depends on
when the poll lands relative to the seek, and the check asserts `< 2 s`.
**Record the bound the check actually enforces**, not a point value that
cannot be re-obtained. F12 exists in this project because of exactly this.

**Roadmap § 4's architecture sketch still lists `reader.js — audio +
readings.json phrase timing`.** The modules that landed are `rota.js` and
`audio.js`. One-line correction, so a cold session does not go looking for a
file that was never built.

---

## Scope

`src/mcgrots/`, `scripts/smoke-mcgrots.mjs`, and the two McGrot's documents.
The street is paused. `scripts/serve.py` is shared infrastructure and is not
in scope for this unit — it was changed additively in G4b and re-verified
against the street's 323 checks; leave it alone.

**Not yours:** `AGENTS.md` and `CLAUDE.md` (the orchestrator's), G5's dialogue,
McGrot's voice, the real cast, F13.

Explicit pathspec on every commit. `scripts/daily-tts.sh`,
`scripts/catalog-batches/*.json` and `scripts/tts-prompts/` are not yours.

## Landing

Part 1 is one commit. Part 2 may be one or several — F15 is worth its own
regardless, since it is the check the next phase inherits.

Each commit: code, `docs/MCGROTS-VALIDATION.md`, `docs/MCGROTS-ROADMAP.md`,
and a commit message carrying the real numbers — the measurement, its control,
what went red under injection.

**Where a finding's right answer is "rename the check and admit what it does
not prove", that is a landing, not a cop-out.** Say so in `VALIDATION.md` and
move on.
