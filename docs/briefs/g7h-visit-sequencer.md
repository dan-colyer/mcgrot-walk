# G7h — the thing that makes ten minutes playable

**Read `AGENTS.md` first, then `docs/g7-visit-shape.md` end to end (it is the
spec you are implementing), then `docs/MCGROTS-ROADMAP.md` § 9.** Your context
is fresh.

---

## Why this unit exists

§ 9 is the kill criterion: Dan sits through one ten-minute visit and decides
whether the project continues. Everything it needs now exists except the thing
that runs it. `docs/g7-visit-shape.md` § 3 item 4 puts it plainly — nothing
sequences a scripted timeline today. `goTo()` walks the actor to a clicked
anchor and plays whatever that anchor's trigger is, on demand, never on a
schedule.

**This unit is the single largest code gap between here and running the kill
criterion.** It turns a design document into ten minutes someone can watch.

## The design is settled. You implement it; you do not choose it.

Every decision below was made so you never have to invent one. If one of them
turns out to be wrong when you measure it, say so and stop — do not quietly
substitute a better idea.

### 1. The cue list is authored data in a new module

`src/mcgrots/visit.js` exports an ordered array of cues, transcribed from
`docs/g7-visit-shape.md` § 1's table. One cue per row, 28 rows.

```js
{ kind: 'reading' | 'complaint' | 'walk' | 'silence',
  anchor: 'counter',        // where the player is, or is going
  audio: '2b2110bb',        // reading id, complaint id, or null
  dur: 16.8 }               // authored seconds, the FALLBACK — see 4
```

Authored, not generated. The table is a design artefact and its ordering is the
content.

### 2. The visit feeds the existing audio sink; it does not build a new one

`src/mcgrots/audio.js`'s `createReaderAudio()` already handles the hard parts —
one `mediaEl`, one source at a time, the `loadedmetadata` race, a missing file
staying silent. Read its header before touching it.

**The visit is an alternative scheduler feeding the same
`readerAudio.update(info, pos, listenerPose)` sink.** You are replacing where
the schedule comes from, not how sound is produced.

`rota.js`'s own schedule is **suspended for the duration of the visit** — the
visit's table already accounts for everything the player hears, and letting rota
run alongside puts two voices on one element. Suspend it; do not race it.

`audioUrl(id)` resolves against the vendor tree. McGrot's clips live in
`assets/audio/mcgrot/` (readings) and `assets/audio/mcgrot/lines/` (complaints,
being rendered right now by G7g in parallel). `audio.js` is yours for that
change. **Resolve by explicit cue field, not by guessing from the id's shape** —
an id-pattern heuristic breaks the first time an id looks like the other kind.

### 3. It starts on the gesture that already exists, and ships OFF

`createTitleCard({ onStart })` already gates `readerAudio.start()` behind a user
gesture, because no `AudioContext` may exist before one. The visit starts from
that same callback. Do not add a second gesture.

Behind `?visit=on` plus a `window.__mcgrotsForceVisit` lever, **default OFF**, so
this moves no existing capture. Both directions must work — the gates need to
boot the same build twice and attribute the difference to the flag.

### 4. Prefer the real clip duration; fall back to the authored one

G7g is rendering the complaint audio **in parallel with you**, so its durations
do not exist yet and its numbers will land after you start. Do not wait for
them and do not hardcode them.

At runtime, take the duration from the clip once `loadedmetadata` gives it, and
use the cue's authored `dur` only when there is no clip or none loads. This is
also what keeps the visit honest when G7e's readings run 22.3% shorter than the
placeholders the table was budgeted from.

### 5. Pomplé's beats are NOT yours

`docs/g7-visit-shape.md` budgets three "Pomplé beat" windows. The hook and the
beats are a separate unit that lands after you.

Leave those windows as silence and call `pomple.playBeat?.(name)` — optional
call, guarded — at each one, with names `'notice'`, `'approach'`, `'settle'`.
That is the interface the next unit will implement, so it can land without
reopening `main.js`. **Do not implement `playBeat` yourself and do not edit
`pomple.js`.**

### 6. The style default, as a SEPARATE commit

`LOOK_KIND` in `main.js` defaults to `'none'`. The settled style is S2 aerial
flatten (G2), so the shipped default disagrees with what § 9 requires Dan to
judge. Flip it to `'aerial'`.

**Its own commit, landed after the sequencer, with its own measurement.** One
line, but it changes the default every capture in the suite boots under. Report
exactly which checks and which captures moved, and why each move is correct. If
something moves that you cannot explain, that is a finding — stop and report it
rather than recapturing.

## The gates

Four, each with a named control. **Fault-inject every one, watch it go red,
restore, re-verify green. Commit before injecting** — `git checkout <paths>`
restores nothing if any path in the list is untracked, and a surviving injection
looks like a second bug next run.

1. **Every cue fires, in order.** Drive the visit's whole clock and record the
   cue log. Assert 28 cues, in the authored sequence.
   *Control:* the same boot with the visit off — zero cues fire.

2. **The audio is audible.** This project's settled rule, and the suite failed
   it first: `mediaEl.currentTime` / `paused` / `currentSrc` prove a source was
   wired up, not that anything is audible. `mediaEl.volume = 0` once left an
   audio region 7/7 green at peak 0.000, RMS 0.000. **Tap the graph with an
   `AnalyserNode` and require non-zero RMS during a reading cue.**
   *Control:* a condition that must read zero — the visit off, or a cue pointed
   at a file that does not exist. Check what comes out, never the object
   producing it.

3. **The player is where the cue says.** At each reading and complaint cue,
   the actor's current anchor matches the table.
   *Control:* the anchor sequence with the visit off never advances.

4. **It is a picture, not a black screen.** Numeric gates cannot see a bad
   frame — E5d passed every fog and exposure assert while rendering nine
   seconds of black. Render captures at several cue points across the ten
   minutes, **open them, and describe what you saw rather than what you
   concluded.** Every fault found in G2 was found by opening an image after the
   numbers said green.

A note on gate 1 and time: the visit is ten minutes of game time and the suite
is ~12s. Drive the clock rather than waiting on it — `rota.js`'s
`setClock`/`clearClock` pattern and `stepFrames` are the established levers, and
`scripts/mcgrots-shot.mjs` boots exactly as the gate does. **A gate that takes
ten real minutes will not be run, so it is not a gate.**

## Two invariants this unit is unusually likely to trip

- **McGrot's actor faces `(+sin yaw, +cos yaw)` — the OPPOSITE of the street.**
  Copying the street's formula mirrors every direction derived from it. Where
  you can, derive direction from travel: walk the actor and watch where it goes.
- **Determinism: never add or reorder a PRNG draw in an existing sequence.** If
  the visit needs randomness — it should not — it owns its own seeded generator.

## Scope

**Yours:** `src/mcgrots/visit.js` (new), `src/mcgrots/main.js`,
`src/mcgrots/audio.js`, `scripts/smoke-mcgrots.mjs`, and
`docs/MCGROTS-VALIDATION.md`.

**Not yours — another worker is live in these right now:**
`scripts/generate-mcgrot-tts.mjs`, `scripts/tts-prompts/mcgrot/`, and
`assets/audio/mcgrot/` belong to `complaints` (G7g). **Render no audio.** You
may read the eight readings already in `assets/audio/mcgrot/`; the complaint
clips will appear under `lines/` while you work, and your fallback in § 4 is
what makes that safe.

**Also not yours:** `src/mcgrots/pomple.js` (see § 5), `src/mcgrots/rota.js`
beyond suspending its schedule, `assets/catalog.json`,
`generated/mcgrots-dialogue.json` — read them, change nothing.
`docs/g7-visit-shape.md` — it is your spec; if it is wrong, report it rather
than editing it. `docs/MCGROTS-ROADMAP.md`, `CANON.md`, `AGENTS.md`,
`CLAUDE.md` — report what should change.

Note the working tree carries unrelated modifications and untracked files from
the daily TTS job. They are not yours; commit by explicit pathspec.

## Landing

Two landings, in order: the sequencer, then the style default. Each carries the
actual numbers in its commit message — the measurement, its control, and what
went red under fault injection. That message is what a phase gate reads.
**Never push.**

Report into `.herdr/<your-name>.md` per `AGENTS.md`. Ping on QUESTION or DONE
only, and never ping and then idle.
