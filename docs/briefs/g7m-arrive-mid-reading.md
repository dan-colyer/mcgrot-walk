# G7m — you arrive in the middle of something, and you can say one thing

**RELEASED 2026-08-18 — G7j and G7k have both landed and merged.** This unit
owns `src/mcgrots/visit.js` and `src/mcgrots/main.js` outright; no other worker
holds either. `main` is at `3d6636a`, suite 131/131.

**One change since this brief was written.** G7n moved the `approach` beat off
the `far` cue and onto the first `counter` cue, so `visit.js`'s cue table now
carries four `beat:` fields, not three. Read the table as it stands rather than
as this brief describes it, and do not disturb a `beat:` field — those belong to
the `beats` region's gates.

**Read `AGENTS.md` first, then `docs/MCGROTS-ROADMAP.md` § 6 including "The
persistent world is the product", then `src/mcgrots/visit.js` and
`src/mcgrots/audio.js` end to end.** Your context is fresh.

---

## Why this unit exists

Two things, both cheap now and dearer every day `visit.js` ages. They share a
file, so they share a unit.

Dan's ruling, 2026-08-17: **the persistent world is the product and the
28-cue loop is PoC scaffolding.** "It is a persistent world, you can log in any
time… once we've polished it, we'll randomise and expand scenes." Both halves of
this unit follow from that, which is why they are wanted rather than optional.

## Part 1 — a reading is already underway when you arrive

Every reading in the visit currently starts with the player parked at an anchor,
waiting for it. That is the one thing a persistent world should never feel like.

**`audio.js` was built for this and nothing uses it.** Its header records that
playback starts at `info.elapsed` precisely so a player who boots mid-reading
hears the middle of the file rather than its start. G7h wired the visit to feed
that same sink but every cue still begins at its own boundary, so the capability
is dead code on this path.

**The obstacle, named so you do not discover it late:** `visit.js`'s cue table
is a running sum of durations, so cues are sequential by construction. A reading
that overlaps a walk needs cues carrying **explicit start times** rather than
durations. That is a change to the cue format, and it is the substance of this
part.

Two constraints on it:

- **Stay a pure function of absolute time.** `cueAt(now)` must remain pure and
  the cycle must remain deterministic. Start times are static authored data,
  exactly as the durations are now — do not introduce anything discovered at
  runtime. G7h's own report argued this correctly and the reasoning holds.
- **Do not change what is audible at a given instant** beyond the overlap you
  are adding. The existing `visit` region has 13 checks and a rebalanced silence
  table; a reformat that moves every cue boundary is a rewrite, not this unit.

Overlap a reading with the walk that precedes it, so the player rounds the corner
into a voice already talking. Start with one or two cues rather than all
seventeen, and say which you changed.

## Part 2 — one input, and the answer is "Naw."

`mcgrot-03` is a complete line — a flat, immediate "Naw." — and it is **already
rendered** at `assets/audio/mcgrot/lines/mcgrot-03.mp3` by G7g. The visit shape
leaves it unplaced because nothing in the game asks McGrot a question.

Give the player one input. A key, or one thing on the counter. Press it whenever
you like and he says "Naw."

That is the whole feature and it should not grow. It is the cheapest interaction
this project can buy, and its value is that the world stops being something you
only watch.

**Two rules it needs, and they are the design, so they are settled here:**

- **A cooldown.** Without one the player empties the line's novelty in ten
  seconds. Pick a duration, state it, and say why.
- **It must not interrupt a reading.** `audio.js` is one-voice-at-a-time by
  design and the visit owns the channel. During a reading or a complaint, the
  input is **swallowed** — no queue, no duck, no second element. A queued "Naw."
  arriving forty seconds late is worse than nothing. During silence it plays.

Do not add a second audio element or a second `AudioContext`. If that appears
necessary, stop and report rather than building it.

## The gates

Each with a named control. **Fault-inject every one, watch it go red, restore,
re-verify green. Commit before injecting.**

1. **A player joining mid-reading hears the middle, not the start.** Pin the
   clock inside a reading's window, join, and assert the element's playback
   position corresponds to the elapsed offset rather than zero.
   *Control:* joining at the cue's own boundary must read ~zero. Without that
   control the check passes on any non-zero number.
2. **The overlap exists and the schedule is still pure.** `cueAt(now)` returns
   the same result for the same `now` across two boots, and the overlapping cue
   is audible during the walk that precedes it.
   *Control:* two different pinned moments must differ, or a frozen scheduler
   passes trivially.
3. **The input plays during silence and is swallowed during a reading.** Two
   pinned moments, one of each. Measure **the output** with an `AnalyserNode` —
   `currentSrc`, `paused` and `currentTime` prove a source was wired up, not
   that anything is audible, and `mediaEl.volume = 0` once left an audio region
   7/7 green at peak 0.000, RMS 0.000.
   *Control:* the reading's own RMS must be unchanged by a swallowed press.
4. **The cooldown holds.** Repeated presses inside the window produce one
   playback, not several. *Control:* presses spaced beyond the window produce
   several.

Pin the clock in every check. An unpinned rota clock has cost three units here.

**Then render and listen.** If your session cannot play audio, say so plainly as
G7e and G7g both did, and name it as something Dan must check by ear.

## Scope

**Yours:** `src/mcgrots/visit.js`, `src/mcgrots/main.js`,
`scripts/smoke-mcgrots.mjs`, `docs/MCGROTS-VALIDATION.md`, and
`docs/g7-arrive-mid-reading.md` for your write-up.

**Not yours:** `src/mcgrots/audio.js` — **read it, change nothing.** Its seek
behaviour already does what Part 1 needs; if you conclude it genuinely must
change, stop and report rather than editing it. Also not yours:
`pomple.js`, `ambience.js`, `taxman.js`, `rota.js`, `assets/catalog.json`,
`generated/mcgrots-dialogue.json`. `docs/g7-visit-shape.md` is a design document
already marked superseded as data — read it, do not edit it.
`docs/MCGROTS-ROADMAP.md`, `CANON.md`, `AGENTS.md`, `CLAUDE.md` — report what
should change.

If `scripts/smoke-mcgrots.mjs` is shared when you run, add your checks to the
existing `visit` region rather than a new one — this unit extends that region's
own claims — and change nothing else in the file.

Note the working tree carries unrelated modifications and untracked files from
the daily TTS job. They are not yours; commit by explicit pathspec.

## Landing

Two landings if it is cleaner: the cue-format change and the overlap, then the
input. Each carries the actual numbers — the measurement, its control, and what
went red under injection. **Never push.**

Report into `.herdr/<your-name>.md` per `AGENTS.md`. Ping on QUESTION or DONE
only, and never ping and then idle.
