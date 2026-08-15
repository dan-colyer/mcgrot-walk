# G5f — audition 2: Gemini first, and organised for two listeners

**Read `AGENTS.md`, then `docs/MCGROTS-VOICE.md` in full — especially
§ "Audition 1, 2026-08-15", which says what went wrong and why this unit
exists.** Your context is fresh; nothing here assumes earlier sessions.

Audition 1 rendered eight files across three FAL engines. Dan's verdict on all
of them: **none of them have a Scottish accent.** That is acceptance criterion
3, and it fails everything downstream.

Meanwhile Gemini has been producing convincingly Scottish readings for 400+
street NPCs since long before this work started, McGrot's own comic included.

**You are not picking the voice.** Dan and Andrew judge by ear, separately and
remotely. Your job is to produce the candidates and lay them out so two people
can compare them without you in the room.

---

## Part A — Gemini, the twelve solo lines. Do this first; it is not blocked.

`scripts/generate-tts.mjs` is the working pipeline. **Read it before writing
anything** — it is the street's, it is not yours to modify, and this unit does
not touch it. Model it, or import from it; do not edit it.

The lever that matters is the **director's brief**. Look at
`scripts/tts-prompts/3c6b637b.txt` — McGrot's own comic — for the shape that
works: an Audio Profile, a Scene, Director's Notes naming the accent
phonetically, then a script with inline stage directions. That structure, not
the raw line, is what produces the accent.

Render **all twelve of McGrot's solo lines** from
`generated/mcgrots-dialogue.json` (`MCGROT`, ids `mcgrot-01`…`mcgrot-12`)
through Gemini, each wrapped in a director's brief you write, built from the
prompt in `MCGROTS-VOICE.md` and modelled on `3c6b637b.txt`.

Two constraints on that brief, both load-bearing:

- **Early fifties.** `3c6b637b.txt` says "late fifties"; Dan settled early
  fifties on 2026-08-15 and confirmed it again after audition 1. Do not copy
  the age across from the old file. **Do not edit `3c6b637b.txt`** — it is the
  street's and is not in scope.
- **The verbatim rule.** Where a line contains garbled comic text it is read
  exactly as printed. Carry `3c6b637b.txt`'s CRITICAL instruction through.

**Voice choice is Dan's, so give him something to choose from.** The catalog
gives McGrot `npc: null`, so today he falls through to the `Algenib` default by
accident rather than by decision. Render the twelve on `Algenib`, then sweep
**three other prebuilt voices across three representative lines** — pick a short
one, a confrontational one and the sincere one (`mcgrot-03`, `mcgrot-01`,
`mcgrot-07` are the natural three). Say in the index which voices you chose and
why; there is no right answer and you are not defending a pick.

Cost: Gemini TTS is already budgeted for this project and these are short
lines. Print an estimate before spending, same as the FAL rig does.

## Part B — FAL again, accent-first. **BLOCKED until Dan tops up.**

`FAL_KEY`'s balance is exhausted — audition 1 emptied it and the last two
renders died with `Exhausted balance`. **Do not start Part B until Dan says the
account is topped up.** Attempt a single cheap call to confirm before doing the
rest; if it 403s, stop and report, do not retry in a loop.

Re-run the five audition lines through the three engines with the **rewritten
accent-first prompt**, and:

- **Maya gets the short prompt** (`### The short prompt` in `MCGROTS-VOICE.md`,
  under 500 chars). Its cap is why it rendered nothing at all last time.
- **MiniMax must design once and then reuse.** `voice-design` mints a NEW
  `custom_voice_id` per call, so audition 1's four MiniMax files are four
  different men. Design the voice once, capture the id, then render the
  remaining lines through MiniMax's ordinary **speech** endpoint passing that
  id. Confirm the schema against fal.ai's docs before spending; if no such
  endpoint is reachable with our key, **say so and stop** rather than
  substituting something else — that finding is worth more than the audio.
- Existing audition-1 mp3s are now misleading. Move them to
  `docs/voice-audition/audition-1/` rather than deleting, and start audition 2
  clean, or the resumability skip will serve you stale files.

## Part C — the layout. This is the actual deliverable.

Two people who are not you, one of them remote and non-technical, have to
listen through this and form an opinion.

- **Group by line, not by engine.** Comparing one line across engines is the
  comparison that matters. Filenames must sort into that order.
- Write **`docs/voice-audition/INDEX.md`**: every file, the line text it
  speaks, the engine and voice, and one plain sentence on what to listen for.
  No jargon — Andrew has not read this repo and never will.
- Reproduce the **six acceptance criteria** at the top of that index, in
  Dan's own words from `MCGROTS-VOICE.md`. They are what he is judging against
  and Andrew has not seen them.
- Audio stays gitignored. `INDEX.md` and `manifest.json` are committed.

**Do not upload anything to Google Drive.** Andrew's folder is
`gdrive:McGrot/...` and pushing to it is Dan's call alone — he hand-weeded that
folder and an unattended sync would undo it. Getting these files to Andrew is a
separate step and not yours.

---

## The gate

**There is no numeric gate on voice quality and you must not invent one.** Six
criteria, all by ear, all Dan's. `smoke:mcgrots` does not learn about this unit;
do not add a region.

What *is* checkable, and what this unit must not repeat from audition 1:

- **Every engine's payload is validated, never its queue status.** The existing
  `validatePayload()` is right; reuse it. A run that reports success having
  written a zero-byte file is the exact failure the G5e review found.
- **Print the parsed director's brief and the parsed line before spending.**
  Audition 1 shipped two lines with a literal newline in them because nobody
  looked at the parsed text. Look at it.
- **Listen to nothing, because you cannot.** Report file sizes, durations, and
  what failed. Do not characterise how anything sounds — you have no way to
  know, and claiming otherwise is the failure mode this project exists to catch.

## Scope

**Yours:** `scripts/mcgrots-voice-audition.mjs` (extend for Gemini and the
MiniMax reuse), a new script if Gemini fits badly into it, `.gitignore`,
`docs/voice-audition/INDEX.md`, `docs/MCGROTS-VOICE.md` (the audition sections
only), `docs/MCGROTS-VALIDATION.md`, `docs/MCGROTS-ROADMAP.md`.

**Not yours:** anything under `src/`. `scripts/generate-tts.mjs`,
`scripts/tts-prompts/*` (including `3c6b637b.txt`), `assets/catalog.json`,
`scripts/daily-tts.sh`, `scripts/catalog-batches/*` — read them, never write
them. The voice pick, and anything touching Google Drive.

Another worker may be in this tree. **Explicit pathspec on every commit**, and
run `git status --short` first.

## Landing

Part A lands on its own — do not hold it waiting for the top-up. Its commit
message carries the real numbers: lines rendered, voices swept, spend, what
failed. Then report and stop; Dan listens before Part B is worth running.

Say plainly at the end what Dan does next, in one or two sentences: the folder
to open, and that Part B needs a top-up.
