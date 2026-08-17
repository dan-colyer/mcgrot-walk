# G7j — the Taxman turns up

**HELD until G7h lands.** This unit needs `src/mcgrots/visit.js` and
`src/mcgrots/main.js`, both of which `sequencer` owns until its merge.

**Read `AGENTS.md` first, then `docs/MCGROTS-ROADMAP.md` § 9 and § 11.0.5, then
`docs/g7-visit-shape.md` § 1.** Your context is fresh.

---

## Why this unit exists

§ 9 requires something the player notices. G7i gives that to Pomplé, and a dog
lifting its head may be too quiet to carry the middle of a ten-minute visit.

Meanwhile **36 lines of two-hander dialogue already exist and can never be
heard.** `generated/mcgrots-dialogue.json` carries a full `TAXMAN` entry (15
lines) and a `GOV_INSPECTOR` entry (15), plus McGrot's own six exchange lines —
and neither character is built anywhere in `src/mcgrots/`, verified by grep.
`docs/g7-visit-shape.md` § 2 excluded all six of McGrot's exchange lines for
exactly that reason: half a conversation is not a scene.

Dan's call, 2026-08-17: build the Taxman as well as the beats. This unit turns
generated content that was written off into the strongest event in the visit.

## The scene

Six lines, alternating, already written and already paired. The ordering is
derivable from the text itself — **verify it by reading them rather than
trusting this list**, but it runs:

1. `mcgrot-exch-taxman-01` — defensive, asks to be let finish
2. `taxman-exch-taxman-01` — finishing is not a category on the form
3. `mcgrot-exch-taxman-02` — cut off mid-word, and its `delivery` field says so
4. `taxman-exch-taxman-02` — noted and stamped regardless
5. `mcgrot-exch-taxman-03` — stamped is not answered
6. `taxman-exch-taxman-03` — the last word, and it is his

It ends on the Taxman, which is the joke. Do not re-order it to give McGrot the
close.

**It goes in the `wall` silence row**, the 101.8s gap in the dead middle of the
visit — the longest single stretch of nothing in the table. Six lines plus
pauses is well inside it.

## Three things settled so you do not invent them

**The body is a stand-in, not a character.** G8 is where the real cast gets
modelled and this unit must not start that work. Reuse whatever the existing
archetype or capsule machinery already gives you. § 9 permits stand-in bodies
explicitly; it does not permit stand-in voices.

**He must not stand between the camera and McGrot.** This is not a style note.
The `counter` anchor is the closest, most authored shot in the visit, and a
figure standing on McGrot's line was a live fault as recently as yesterday —
the rota reader at `SPOT_LOCAL [0.35, 2.1]` occluded him on the real clock and
had to be moved to `[-1.5, 2.1]`. Park the Taxman on the opposite side or
clearly beside the stall, and prove it with a render, not an argument.

**His voice is a Gemini prebuilt, clearly distinct from Algenib in register.**
His `audioProfile` is already written — thin, rigid, clipped, humourless — and
it is the opposite of McGrot's, so the two should not be hard to separate. Pick
one, say which and why in a sentence, and move on; this is not an audition.
**Never clone or imitate a specific real person's voice** (§ 11.0.5, not
negotiable).

## The render path, and the guard

`scripts/generate-mcgrot-tts.mjs` writes only under `assets/audio/mcgrot/` and
asserts it at runtime. **That is McGrot's tree and the Taxman does not belong in
it.**

Write a sibling script — `scripts/generate-cast-tts.mjs` — with its **own**
`OUTPUT_DIR` of `assets/audio/cast/` and its **own copy** of the path
assertion. Copy the guard; do not generalise the existing one to take a root as
a parameter. A guard that protects one named tree is checkable by reading it; a
guard that protects whichever tree it was handed is not, and this repo has
already learned that widening a path guard is how it stops guarding. Duplication
is the correct call here.

The script must never write `assets/catalog.json` — an `audio` field there makes
a character a vendor and moves the 124 census.

**`.env.local` holds live API keys.** Never print one, never commit one, never
paste one into your report.

## The verbatim rule

The comics' AI-garbled text is never corrected, anywhere, including in your
director's notes and including the curly apostrophes in the dialogue JSON. These
lines are generated output from a seeded run — quote them byte-for-byte and
never regenerate them.

## The gates

Each with a named control. **Fault-inject every one, watch it go red, restore,
re-verify green. Commit before injecting.**

1. **He is on screen and rendered**, not merely in the scene graph.
   `getObjectByName(...)` being non-null proves a function ran —
   `statue.visible = false` once passed its region 2/2 and the whole suite
   38/38 with nothing drawn. Project his AABB and require luminance variance
   inside it against a control patch; the `van` region has the working example.
2. **He does not occlude McGrot.** Reuse the pixel-fraction technique the
   `mcgrot` region gained yesterday: McGrot's visible fraction inside his own
   rect must stay above the established floor while the Taxman is present.
   *Control:* the same pinned moment with the Taxman absent.
3. **All six lines are audible.** Non-zero RMS measured off the output with an
   `AnalyserNode`, not from `currentSrc` or `paused` — `mediaEl.volume = 0`
   once left an audio region 7/7 green at peak 0.000, RMS 0.000.
   *Control:* a condition that must read zero.
4. **His arrival is deterministic.** Same pinned clock, same arrival, across
   two boots. *Control:* two different pinned moments must differ.

Pin the clock in every check; a real-clock gate flakes in bursts here.

**Then render the scene and open the captures.** Numeric gates cannot see a bad
picture. Say whether the exchange reads as two people talking or as two audio
files playing near each other — that judgement is the point of the unit, and a
negative answer is a valid and useful result.

## Scope

**Yours:** `src/mcgrots/taxman.js` (new), `scripts/generate-cast-tts.mjs` (new),
`scripts/tts-prompts/cast/`, `assets/audio/cast/`, and
`docs/g7-taxman-scene.md`. Plus the cue rows in `src/mcgrots/visit.js` and the
hook in `src/mcgrots/main.js` — **both only once G7h has landed**, and keep
those two edits as small as they can be.

**Not yours:** `src/mcgrots/pomple.js` (G7i), `audio.js`, `rota.js`,
`mcgrot.js`, `assets/catalog.json`, `scripts/generate-mcgrot-tts.mjs`,
`scripts/generate-tts.mjs`, `scripts/merge-batches.mjs`,
`generated/mcgrots-dialogue.json` — read them, change nothing.
`docs/g7-visit-shape.md` is a spec; report errors rather than editing.
`docs/MCGROTS-VALIDATION.md`, `docs/MCGROTS-ROADMAP.md`, `CANON.md`,
`AGENTS.md`, `CLAUDE.md` — report what should change.

If `scripts/smoke-mcgrots.mjs` is shared when you run, **add your region as one
block at the END plus one entry in `REGIONS`**, and change nothing else in it.

## Landing

Commit by explicit pathspec, with the actual numbers and what went red under
injection. Name the captures you opened and say what you saw. **Never push.**

Report into `.herdr/<your-name>.md` per `AGENTS.md`. Ping on QUESTION or DONE
only, and never ping and then idle.
