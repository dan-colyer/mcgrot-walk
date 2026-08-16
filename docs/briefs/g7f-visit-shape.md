# G7f — what actually happens across the ten minutes

**Read `AGENTS.md` first, then `docs/MCGROTS-ROADMAP.md` § 9 — the kill
criterion, which is short and is the whole justification for this unit.** Your
context is fresh.

---

## Why this unit exists

§ 9 says the visit must contain five things to be judged at all: the chosen
style, a walk between anchors that reads well, six to eight readings on the
wall clock, **McGrot's complaints in the gaps**, and Pomplé doing something you
notice.

Four of those are built or in flight. The complaints are not, and neither is
the thing that binds all five together: **nobody has decided what happens
across the ten minutes.**

Two concrete gaps, both verified before this brief was written:

1. **18 McGrot lines exist and have never been heard.**
   `generated/mcgrots-dialogue.json` carries an `MCGROT` entry with 18 lines
   (`id`, `text`, `delivery`, plus a shared `audioProfile`, `scene` and
   `directorNotes`). `docs/MCGROTS-DIALOGUE.md` § "Verification record" states
   plainly: "No audio was rendered or listened to." § 9 says **voices may not
   be stand-ins**, so text is not sufficient.
2. **The clock has never been budgeted.** G7a's proposed eight readings total
   185.4s — 3.1 minutes of a ten-minute visit. What fills the other 6.9
   minutes has never been written down.

## What to produce

`docs/g7-visit-shape.md`. Nobody else touches that file.

### 1. The minute-by-minute shape

A single table covering ten minutes: what the player is doing, what is audible,
and what it costs in seconds. Readings, walking between anchors, complaints,
silence, and whatever Pomplé does. **It must add up to ten minutes** — that
arithmetic is the deliverable, and if it does not work, saying so with the
numbers is the most useful outcome available to you.

Use G7a's proposed eight and their real durations from
`docs/g7-reading-shortlist.md`. Do not re-pick the readings; Dan picks those.

**Silence is a legitimate entry and probably an under-used one.** A ten-minute
visit that is wall-to-wall audio is a worse test than one with gaps in it, and
§ 9 asks for complaints "in the gaps" — which presupposes gaps exist.

### 2. Which complaints play, and where

Choose from the 18. For each one you place: its `id`, where in the shape it
falls, and one sentence on why it belongs there. **You are not rewriting them**
— the lines are generated output from a seeded run (seed `1511506142`) and
regenerating or editing them is out of scope. Selection and placement is the
job.

Say which of the 18 you did **not** place and why, at the category level. If
some of them are unusable for this visit, that is a finding worth having before
anyone renders them.

### 3. What has to exist for this to be run

A short list, in dependency order, of what is missing. Be specific about which
pieces are content (someone writes or records something) and which are code
(something has to sequence it). **Do not build any of it** — another worker
owns `main.js` right now, and the render path is being built by a third. This
section is the handover, not the work.

## Two things settled that you must not relitigate

- **The style is S2 aerial flatten.** Settled in G2. Note that `LOOK_KIND` in
  `src/mcgrots/main.js` still defaults to `'none'`, so the shipped default is
  not what § 9 requires — flag it in section 3 as a dependency, do not fix it.
- **The readings are Dan's pick.** G7a made choosing cheap; you assume its
  proposed eight as a worked example, exactly as G7a framed them.

## The verbatim rule

The comics' AI-garbled text is never corrected, anywhere, including when you
quote a line into your table. That garbling is the point of the project. The
same applies to the generated dialogue lines: quote them as they are.

## Scope

**Yours:** `docs/g7-visit-shape.md` only.

**Not yours — two other workers are live right now, so this matters:**
`src/mcgrots/main.js`, `pomple.js`, `looks.js`, `scripts/smoke-mcgrots.mjs` and
`docs/MCGROTS-VALIDATION.md` belong to `previsit`.
`scripts/generate-mcgrot-tts.mjs`, `scripts/tts-prompts/mcgrot/` and
`assets/audio/mcgrot/` belong to `readings`. **Render nothing.**
`generated/mcgrots-dialogue.json`, `assets/catalog.json`,
`docs/g7-reading-shortlist.md` — read them, change nothing.
`docs/MCGROTS-ROADMAP.md`, `docs/MCGROTS-DIALOGUE.md`, `CANON.md`, `AGENTS.md`,
`CLAUDE.md` — report what you think should change.

Note the working tree has unrelated modifications and untracked files from the
daily TTS job. They are not yours; commit by explicit pathspec.

No gate: there is no product change to gate. The evidence standard is that
every duration traces to a measurement you can name the command for, and every
line you place traces to an `id` in the dialogue file.

## Landing

Commit your file when done, by explicit pathspec. **Never push.**

Report into `.herdr/<your-name>.md` per `AGENTS.md`. Ping on QUESTION or DONE
only, and never ping and then idle.
