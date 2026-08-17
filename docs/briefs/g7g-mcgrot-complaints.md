# G7g — McGrot's complaint lines, voiced

**Read `AGENTS.md` first, then `docs/MCGROTS-VOICE.md` § "The settled
description", then `scripts/generate-mcgrot-tts.mjs` end to end.** Your context
is fresh.

---

## Why this unit exists

§ 9's kill criterion needs "McGrot's complaints in the gaps". Twelve solo lines
exist as text and **not one has ever been heard** —
`docs/MCGROTS-DIALOGUE.md` § "Verification record" says so plainly. § 9 does not
allow a voice to be a stand-in, so text is not enough.

G7e already built the render path and Dan has confirmed its output ("happy with
them"), so this unit is that path pointed at a second set of inputs. It is not a
new pipeline.

## The lines

`generated/mcgrots-dialogue.json`, the `MCGROT` entry, has 18 lines: twelve solo
(`mcgrot-01` … `mcgrot-12`) and six exchange lines (`mcgrot-exch-taxman-*`,
`mcgrot-exch-inspector-*`).

**Render the twelve solo lines. Skip all six exchange lines.** Neither the
Taxman nor the Government Inspector is built anywhere in the scene — verified by
grep across `src/mcgrots/` — so McGrot's half of a two-hander has no audible
partner.

`docs/g7-visit-shape.md` § 2 places nine of the twelve in the visit. Render all
twelve anyway: the extra three cost pennies and having them removes a
round-trip if a placed line reads badly in sequence.

## Where the output goes, and why exactly there

**Prompts:** `scripts/tts-prompts/mcgrot/lines/<id>.txt`
**Audio:** `assets/audio/mcgrot/lines/<id>.mp3`

Both are **inside** the directories G7e already established. That is deliberate
and is not a detail to improve on: `assertUnderMcgrotDir()` guards writes with a
prefix match against `assets/audio/mcgrot/`, so a subdirectory is already
covered and **the guard needs no widening**. Widening a path guard to admit a
second tree is exactly the change that quietly stops it guarding anything.

If you extend `generate-mcgrot-tts.mjs` rather than writing a sibling, the
guard's own logic must come out unchanged. Adding a mode that selects different
inputs is fine; touching `assertUnderMcgrotDir` or `OUTPUT_DIR` is not.

## What to write in each brief

Same shape as `scripts/tts-prompts/mcgrot/<id>.txt` — read one first. The
`Audio Profile` comes verbatim from `docs/MCGROTS-VOICE.md` § "The settled
description"; accent leads, because an engine that gets the accent wrong has
already failed.

What you author per line is the `Scene:` and `Director's Notes:`. Each line
already carries a `delivery` field (`[flaring, then calmer]`, `[flat,
immediate]`) — that is the author's own direction and your notes should serve
it, not replace it. The entry's shared `scene` and `directorNotes` give the
standing context.

These are short lines, several under ten words. **A one-line complaint needs
less direction than a two-minute reading, not more.** Do not pad a brief to look
thorough.

Two constraints:

- **The text is verbatim, including its punctuation.** These are generated
  output from a seeded run (seed `1511506142`). The curly apostrophes in
  `kitchen's`, `That's`, `doon the fit o' the Walk` are in the source — carry
  them through byte-for-byte. Never correct, never re-generate, never
  straighten.
- **Do not imitate a specific real person's voice.** A register is the goal; an
  impression of a named performer is not (§ 11.0.5, not negotiable).

## Verify

Dan has authorised the spend. Voice is **`Algenib`**, the same constant.

- **Every clip's RMS measured off the file**, `ffmpeg -af volumedetect`.
- **The named control:** a locally generated silent file, which must read
  ffmpeg's floor (G7e measured -91.0 dB). Without it "non-zero" compares
  against nothing.
- **Report every duration.** `docs/g7-visit-shape.md` budgeted these nine at
  2.24 words/s and labelled them estimates. Your measured numbers replace that
  estimate, and the visit's arithmetic moves with them. Give the per-line
  durations and the total for the nine placed lines, so the shape doc can be
  reconciled. A large divergence is a finding, not a rounding error.
- **Prove the guard still goes red.** Point a target's output path outside
  `assets/audio/mcgrot/`, watch the assertion throw, restore. **Commit before
  injecting** — `git checkout <paths>` restores nothing if any path in the list
  is untracked.
- **Listen to at least two** and say what you heard, not what you concluded. If
  you cannot play audio in your session, say so plainly the way G7e did rather
  than implying otherwise — that was the right call and it is not a failure.

**`.env.local` holds live API keys.** Never print one, never commit one, never
paste one into your report.

## Scope

**Yours:** `scripts/generate-mcgrot-tts.mjs`, `scripts/tts-prompts/mcgrot/lines/`,
`assets/audio/mcgrot/lines/`, and `docs/g7-mcgrot-complaints.md` for your
write-up.

**Not yours — another worker is live in these right now:** all of
`src/mcgrots/`, and `scripts/smoke-mcgrots.mjs` and `docs/MCGROTS-VALIDATION.md`
belong to `sequencer` (G7h). Do not add a smoke region; write your verification
into your own doc and the orchestrator folds it in.

**Also not yours:** `assets/catalog.json`, `scripts/generate-tts.mjs`,
`scripts/merge-batches.mjs`, `scripts/daily-tts.sh` — read them, change nothing.
`generated/mcgrots-dialogue.json` — read it, change nothing.
`docs/MCGROTS-ROADMAP.md`, `docs/MCGROTS-VOICE.md`, `CANON.md`, `AGENTS.md`,
`CLAUDE.md` — report what should change.

Note the working tree carries unrelated modifications and untracked files from
the daily TTS job. They are not yours; commit by explicit pathspec.

## Landing

Commit by explicit pathspec, with the actual numbers: each duration, each RMS,
the control that read the floor, and what went red when you injected the guard.
**Never push.**

Report into `.herdr/<your-name>.md` per `AGENTS.md`. Ping on QUESTION or DONE
only, and never ping and then idle.
