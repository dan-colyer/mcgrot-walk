# G7k — the bed under the silence

**HELD until G7h lands.** This unit edits `src/mcgrots/main.js`, which
`sequencer` is rewriting, and its ducking behaviour depends on how the visit
drives `readerAudio`. Do not start it before that merge.

**Read `AGENTS.md` first, then `docs/MCGROTS-ROADMAP.md` § 9 and § 12.1, then
`src/mcgrots/audio.js` end to end including its header.** Your context is
fresh.

---

## Why this unit exists

§ 9's kill criterion is one ten-minute visit and whether Dan would sit through
it a second time. **386 of those 600 seconds are silence — 64% of the runtime —
and `src/mcgrots/` contains no ambient audio at all.** Verified: no ambience
module, no import of one, and the only audio in the bundle is
`createReaderAudio()`, which is voices.

`docs/g7-visit-shape.md` writes that the long gaps are carried by "ambient
crowd, tram, weather". Those belong to the street's `src/ambience.js`, which is
not in this game's bundle. Nothing carries them today.

This is the largest single risk to the kill criterion that has nothing to do
with the writing. A visit could be killed for being dead air rather than for
being bad.

## Synthesise it. Do not source it.

**Pure WebAudio synthesis, zero audio assets.** This is the design decision and
it is not yours to revisit.

§ 12.1 parks the soundtrack idea on one blocker: *what generates it, and does
the output licence permit shipping?* Synthesising the bed in the browser
sidesteps that question entirely — there is nothing to licence, nothing to
ship, and no bundle weight. The street's own `src/ambience.js` is WebAudio-only
for related reasons and is worth reading as precedent, **but it is the street's
module and the street is paused — read it, do not import it, do not edit it.**

Suggested layers, adjust on what you hear:

- a low rumble — filtered noise, slowly modulated, the city underneath
- a mid band that gives it somewhere to sit
- **sparse, discrete events**: a gull, a distant tram squeal, a door, a dog
  somewhere else. These are what stop a bed reading as tape hiss.

The events matter more than the bed. A flat noise floor is not ambience.

## Two hard constraints

**Deterministic.** Event timing is a pure function of the wall clock, the same
way `rota.js` and now `visit.js` are — Dan's ruling, 2026-08-17, and § 6 is why.
If you need randomness, the module owns **its own seeded generator**; never add
or reorder a draw in an existing PRNG sequence, which reseeds the world and
moves every capture with it.

**No `AudioContext` before a user gesture.** `audio.js`'s header is explicit
about this and the title card already provides the gesture. Reuse that path;
do not add a second gesture and do not construct a context at module scope.

## Ducking, and the thing it must not break

When a voice is playing the bed drops. That is the only interaction between
this module and the rest of the audio, and it is where the risk is.

**A bed that swamps the readings is worse than no bed.** The readings are the
content; this is the room they happen in.

## The flag and the landing shape

Behind `?ambience=on` plus `window.__mcgrotsForceAmbience`, **shipped OFF**, and
then a **separate second commit that flips the default ON**, with its own
measurement of what moved. Same two-landing shape G7h uses for `LOOK_KIND`, and
for the same reason: the enable is a different claim from the feature.

Worth flagging in your report, not fixing: after this and G7h's style flip, Dan
needs three URL parameters to see the intended visit. Something should collapse
that to one. Not your unit — say so and move on.

## The gates

Four, each with a named control. **Fault-inject every one, watch it go red,
restore, re-verify green. Commit before injecting** — `git checkout <paths>`
restores nothing if any path in the list is untracked.

This project's settled rule, and the suite failed it first: element state —
`currentTime`, `paused`, `currentSrc` — proves a source was wired up, not that
anything is audible. `mediaEl.volume = 0` once left an audio region 7/7 green
with measured output at peak 0.000, RMS 0.000. **Tap the graph with an
`AnalyserNode` and measure what comes out, never the object producing it.**

1. **The bed is audible.** Non-zero RMS with ambience on.
   *Control:* ambience off must read zero.
2. **Ducking happens.** Bed RMS during a voice cue is materially below its
   level between cues.
   *Control:* ducking disabled — the two must then be indistinguishable.
3. **The bed does not damage the voice.** This is the most important of the
   four. Measure a reading's own RMS with the bed on and with it off; they must
   agree within a stated tolerance. A feature that quietly halves the
   intelligibility of the thing it accompanies has failed even if it measures
   as present.
4. **It is deterministic.** The same pinned clock produces the same event
   schedule across two separate boots. *Control:* two different pinned moments
   must differ, or the check passes trivially on a module that does nothing.

Pin the clock in every check. A gate on the real wall clock flakes in bursts
here — the `mcgrot` region lost half a day to that on 2026-08-16.

**Then listen to it**, at least a minute, and say what you heard rather than
what you concluded. If your session cannot play audio, say so plainly the way
G7e and G7g did — that is the right call and it is not a failure. Flag it as
the one thing Dan must check by ear.

## Scope

**Yours:** `src/mcgrots/ambience.js` (new), `src/mcgrots/main.js`,
`scripts/smoke-mcgrots.mjs`, and `docs/g7-ambience.md` for your write-up.

Keep the `main.js` change **minimal and adjacent to the existing
`readerAudio` lines** — an import, a start inside the title card's existing
callback, and an update in the frame loop. Other units land in that file.

If `scripts/smoke-mcgrots.mjs` is shared when you run, **add your region as one
block at the END of the file plus one entry in the `REGIONS` array**, and change
nothing else in it.

**Not yours:** `src/mcgrots/audio.js`, `visit.js`, `rota.js`, `pomple.js` —
read them, change nothing. `src/ambience.js` and anything else outside
`src/mcgrots/` — the street is paused. `docs/MCGROTS-VALIDATION.md`,
`docs/MCGROTS-ROADMAP.md`, `CANON.md`, `AGENTS.md`, `CLAUDE.md` — report what
should change.

Note the working tree carries unrelated modifications and untracked files from
the daily TTS job. They are not yours; commit by explicit pathspec.

## Landing

Two landings, in order: the module behind its flag, then the enable. Each
carries the actual numbers — the measurement, its control, and what went red
under fault injection. **Never push.**

Report into `.herdr/<your-name>.md` per `AGENTS.md`. Ping on QUESTION or DONE
only, and never ping and then idle.
