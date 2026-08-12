# G4a — the rota, silent

The first unit that makes this a *visit* rather than a set. People arrive, read,
and leave, on a schedule that is a pure function of the wall clock.

**This unit ships no audio.** The roadmap's G4 bundles scheduling with
playback; they are separated here because McGrot's has no audio module at all
today — `src/ambience.js` is the street's and is not in this bundle — and
because a schedule that is wrong is much easier to see in a silent build than
underneath voices. G4b adds playback on top of what you land.

It also carries **F11**, the interrupted-walk camera cut, because the rota is
what makes that fault ordinary rather than rare.

## The ruling that shapes this unit

**Dan, 2026-08-12: actors must not affect the camera. The camera is focused
only on the player's character.**

This is a hard invariant, not a preference. No arrival pulls the camera, no
cutaway to whoever is reading, no reframing to fit a new figure in shot, no
subtle look-at bias toward the speaker. A reader arriving behind the player is
something you hear and turn to find, not something the game shows you.

It follows that **the camera is a pure function of the player's anchor and the
player's character**, and this is directly gateable — see "The gate" below. Get
this right structurally now; retrofitting it after G5's voices exist would mean
unpicking exactly the code that will feel most natural to write ("just angle
toward the speaker a little").

## What exists to build on

- **`assets/catalog.json`** — 418 comics, **136 with an `audio` mp3 on disk**,
  156 with an `npc` block. The 136 are the pool a reading can be drawn from.
- **`assets/readings.json`** — keyed by comic id, each entry carrying
  `duration`, `anchored`, and `phrases[]` of `{text, kind, start, end}`. This
  is the timing source. G4a does not play the audio but **must schedule against
  these real durations**, not invented ones, or G4b will find every number
  wrong.
- **The five archetypes** already used for the actor. The rota runs on the
  placeholder cast; G8 replaces them.

**A catalog entry must not claim an mp3 that is not on disk** — `CLAUDE.md`
carries this and the street's gate checks all 418. Draw readers only from
entries whose audio actually exists, and check rather than trust the field.

## The discipline that makes this worth doing now

**Drive the rota from wall-clock time, never from session start.** Roadmap § 6
explains what it buys: if the world is a pure function of the clock, no world
state ever goes on the wire later, and a late arrival joining mid-reading is
correct behaviour rather than a bug. It costs nothing today.

Concretely: `whoIsHere(now)` and `whatTheyAreDoing(now)` are pure functions of
an absolute timestamp. No accumulating counters, no "seconds since boot", no
state that drifts if a frame is slow.

**Sizing.** 82.8 minutes across 125 readings is roughly 40 s each, so a
ten-minute visit is **six to eight readings** plus gaps. That is the content
budget — the roadmap's older "dozen comics" predates the kill criterion.

**One reader at a time.** This is the whole reason the format works; on the
street 156 people talk at once and none of them land.

**Determinism.** Anything this unit needs randomness for gets **its own seeded
generator**, never an existing sequence — one extra draw from a shared PRNG
reseeds everything downstream, which is what moved the whole crowd at E3f. The
rota's people must also stay out of any geometry hash, the way `leithers.js`
already is.

## F11 — fold the fix in

The camera cuts when a walk is interrupted. Parked at `back`, `goTo('far')`,
30 frames, then `goTo('counter')`: the frame-1 jump is 2.442 m of a 10.324 m
move, **23.7%**, against a gate asserting under 10%.

Cause: `goTo` sets `previous = from` where `from` is `current` — the anchor
being *abandoned*, not where the camera actually is. Mid-walk the camera is
snapped to the abandoned destination's eye and eased from there. `onPick`
(bound to `pointerdown`) and the number-key handler both call `goTo` with no
guard on `actor.walking`.

The phase gate's suggested fix: **ease from the camera's live position** rather
than from an anchor, which also deletes the `previous === null` special case.
Take it or better it, but say which and why.

Extend the existing `camera` region to cover the interrupted case — it
currently only ever tests parked → walk, which is why it never entered this
state.

## The gate

**The camera-independence check is the important one in this unit**, and it has
an unusually clean control:

> Boot once. Drive the same anchor sequence twice — once with the rota
> populated, once with it empty — and require the camera's position and
> orientation to be **identical at every sampled frame**.

If any actor influences the camera by any path, this goes red. The control is
genuine: the two arms differ only in whether other people exist. Sample enough
frames to cover a walk, an arrival and a departure, not just parked poses.

Fault-inject it by making an arrival nudge the camera — a small `lookAt` bias
toward the reader is the realistic mistake, so inject that rather than
something absurd — and confirm red. **Commit before injecting.**

Also gate:

- **The schedule is a pure function of the clock.** Two boots at the same
  injected timestamp produce the same rota; a *different* timestamp produces a
  different one. The second half is the control — without it the check passes
  for a schedule that ignores the clock entirely and always returns the same
  thing.
- **One reader at a time**, across a long simulated span rather than a moment.
- **F11's interrupted walk**, per above.

Every new check needs its named control and a fault injection proving it can go
red. Prefer a check that reads the shipped product over one that calls a helper
— a check comparing two calls to one pure function passes whether or not the
scene ever uses it.

## What Dan looks at

Renders, and this unit needs a **sequence** rather than stills: the same anchor
across a simulated span showing someone arriving, reading and leaving. A strip
of stepped captures is fine; it does not need to be a video.

**Numeric gates cannot see a bad picture, and this unit is almost entirely
things the player watches.** A schedule that is correct and reads as people
teleporting in is a failure. Say what the arrivals and departures looked like —
whether they walk on from somewhere plausible, whether the pitch ever looks
empty in a way that reads as broken rather than quiet.

Report what you **saw**.

## Scope

`src/mcgrots/` and `scripts/smoke-mcgrots.mjs`. The street is paused.

New module for the rota — do not grow `main.js` into it. `main.js` gets the
call site and the updater hook, nothing more.

Not yours: audio playback (G4b), generated dialogue (G5), Pomplé (G6), the real
cast (G8), F13 (the seated figure's feet, parked deliberately — § 10), the
style ranking (settled: S2), the fixed hour (F12 is running separately; do not
touch `site.js`'s `LIGHT`).

Explicit pathspec on every commit. `scripts/daily-tts.sh`,
`scripts/catalog-batches/*.json` and `scripts/tts-prompts/` are not yours.

## Landing

Land in two commits if the rota and F11 are separable, one if they genuinely
are not — F11 touches the camera and the rota must not, so they should be
separable and that is itself a small confirmation the invariant holds.

Each commit: code, `docs/MCGROTS-VALIDATION.md` (including what you
deliberately did **not** gate and why), `docs/MCGROTS-ROADMAP.md` § G4a with
what landed and what it cost, and a commit message carrying the real numbers —
measurement, control, what went red under injection.

Rejected experiments get written down with their numbers too. Most of them
sound obviously right, and the point is to stop a later session re-deriving
them.
