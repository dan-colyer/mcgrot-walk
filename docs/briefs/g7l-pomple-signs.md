# G7l — Pomplé holds up a sign

**RELEASED 2026-08-18 — G7i and G7n have both landed and merged.** This unit
owns `src/mcgrots/pomple.js` outright; no other worker holds it. `main` is at
`3d6636a`, suite 131/131.

**Read `AGENTS.md` first, then `docs/MCGROTS-DIALOGUE.md` on Pomplé, then
`src/mcgrots/pomple.js` end to end including its header.** Your context is
fresh.

---

## Why this unit exists

**Pomplé was never written as a dog that makes noises. He was written as a dog
that holds up signs.** His `directorNotes` in `generated/mcgrots-dialogue.json`
says it outright: *"Pomplé does not speak aloud; render each line as handwritten
sign text, with the surrounding performance carried by silence."*

Twelve lines exist under the `POMPLE` key, in capitals, deliberately short.
**Nothing in the codebase renders one.** G5b wrote them, G6 built the dog, and
the two have never met.

Dan's call, 2026-08-17: build it. A sign held during a silence is a beat that
costs no audio at all — and 386 of the visit's 600 seconds are silence.

## What to build

A sign Pomplé holds or sets down, textured from a canvas bake of one of the
twelve lines, shown at chosen moments and legible from where the player actually
sits.

**Which line shows must be deterministic** — a pure function of the wall clock
or the day, never a random draw. The persistent world is the product (see
`docs/MCGROTS-ROADMAP.md` § 6, "The persistent world is the product"), and a
random sign desyncs two clients looking at the same dog. If you need variation,
the module owns **its own seeded generator**; never add or reorder a draw in an
existing PRNG sequence.

## The two things that will actually bite

**The canvas bake, and it has a documented history here.** `CLAUDE.md`: canvas
bakes must write **raw sRGB hex bytes**, because `THREE.Color` components are
linear and an SRGB-tagged canvas converts *again* — the result is lettering that
goes to silhouette. ACES tone mapping lifts everything, so tones must be picked
far darker than looks right on paper. Read that gotcha before you write the
bake, not after the text comes out black.

**The twelve lines are not equally usable and picking is part of the job.** A
sign has to read across a pavement. `pomple-05` ("SIT DOWN.") and `pomple-11`
("THE HAT IS NOT A LICENSE.") will read at distance; `pomple-06` and
`pomple-08` are long sentences that will not. **Report which of the twelve are
legible at the seated anchors and which are not, with the measurement.** That
finding is worth as much as the feature — it tells whoever writes the next batch
how long a sign line can be.

The text is verbatim. These are generated output from a seeded run; do not
shorten a line to make it fit. If a line does not fit, that is a finding, not a
licence to edit it.

## The gate

**A rendered-frame check, never a scene-graph one.** This is the failure this
project has actually had: `statue.visible = false` once passed the statue region
2/2 and the whole suite 38/38 with nothing drawn at all, and a sign object that
exists with an unreadable texture would pass any `getObjectByName` check you
could write.

- **The claim is that the LETTERING is visible**, not that a sign is present.
  Project the sign's AABB and require luminance variance inside it — letters
  against their background — above a floor.
- **The named control is a blank sign**: the same geometry, same position, same
  material, no text baked. That is what isolates the lettering's contribution
  from "there is a light-coloured rectangle in shot". A sign-present check
  passes on a blank board.
- **Measure at the anchors the player actually occupies**, and name which. A
  sign legible at `counter` and unreadable at `back` is the expected result, not
  a failure — report the per-anchor numbers.
- Pin the clock in every check. An unpinned rota clock has now cost three
  separate units here; the `mcgrot` and `style` regions both learned it.
- **Fault-inject each check, watch it go red, restore, re-verify green. Commit
  before injecting** — `git checkout <paths>` restores nothing if any path in
  the list is untracked.

**Then render it and read the sign yourself in the capture.** Numeric variance
proves ink is present; only your eye proves the words can be read. Say which
lines you could actually read and at what anchor, and say it plainly — "I could
not read this at kerb" is the single most useful sentence this unit can produce.

## Scope

**Yours:** `src/mcgrots/pomple.js`, `scripts/smoke-mcgrots.mjs`, and
`docs/g7-pomple-signs.md` for your write-up.

If `scripts/smoke-mcgrots.mjs` is shared when you run, **add your region as one
block at the END of the file plus exactly one entry in the `REGIONS` array**, and
change nothing else in it.

**Not yours:** `main.js`, `audio.js`, `visit.js`, `ambience.js`, `taxman.js` —
read them, change nothing. `generated/mcgrots-dialogue.json` — read it, change
nothing. `docs/MCGROTS-VALIDATION.md`, `docs/MCGROTS-ROADMAP.md`, `CANON.md`,
`AGENTS.md`, `CLAUDE.md` — report what should change.

Note the working tree carries unrelated modifications and untracked files from
the daily TTS job. They are not yours; commit by explicit pathspec.

## Landing

Commit by explicit pathspec, with the actual numbers: per-anchor legibility, the
blank-sign control, and what went red under injection. Name the captures you
opened and say which lines you could read. **Never push.**

Report into `.herdr/<your-name>.md` per `AGENTS.md`. Ping on QUESTION or DONE
only, and never ping and then idle.
