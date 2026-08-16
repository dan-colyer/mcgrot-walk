# G7e — eight readings in McGrot's own voice

**Read `AGENTS.md` first, then `docs/MCGROTS-VOICE.md` § "The settled
description" and § "Andrew's verdict".** Your context is fresh.

---

## Why this unit exists

G7 is the kill criterion: Dan sits through one ten-minute visit and decides
whether the project continues. It needs six to eight comic readings **in
McGrot's voice**. G7c established that nothing currently renders one, for two
separate reasons — and both are yours to fix.

Dan authorised the cost and delegated the writing on 2026-08-16: *"just go with
your choice on the director briefs. PoC allows for that and once we have a
scene we can sit and watch and listen to, we can move on to finessing the
scripts and scenes as we need."* So these are **first drafts meant to be heard,
not final scripts.** Aim for eight briefs good enough to judge a scene by; do
not agonise over them.

## The three jobs

### 1. Eight McGrot director briefs

The eight comics are the proposed set in `docs/g7-reading-shortlist.md`:
`2b2110bb`, `19f35bc7`, `03347596`, `0121c47c`, `022bcde2`, `08d846d0`,
`00f88d65`, `0738152e`.

Each already has a prompt file at `scripts/tts-prompts/<id>.txt` — **those are
the VENDOR's briefs, not McGrot's.** Read `2b2110bb.txt` to see the shape: an
`Audio Profile:` line, a `Scene:` line, then `Director's Notes:`. Its profile is
Shug Gantsie, a jumpy nightwatchman. That is what you are replacing.

**Write yours to `scripts/tts-prompts/mcgrot/<id>.txt`** — a new directory, so
nothing overwrites a vendor brief.

**The voice is settled and you do not get to reinterpret it.** Take the
`Audio Profile` from `docs/MCGROTS-VOICE.md` § "The settled description"
verbatim — the accent paragraph leads, deliberately, because an engine that
gets the accent wrong has already failed. What you author per comic is the
`Scene:` and the `Director's Notes:`, tailored to that strip: where he is, what
he is doing while he reads, and which of his three registers the piece wants
(greeting, confrontation, sincerity).

Two constraints on the writing:

- **The comic text is verbatim.** The AI-garbled text is never corrected,
  anywhere, including in your director's notes when you quote a line from it.
  The garbling is the point of the project.
- **Do not imitate a specific real person's voice.** A register — Leith,
  early fifties, roughened by work — is the goal; a recognisable impression of
  a named performer is not (§ 11.0.5, not negotiable).

Open each comic image before writing its brief. A scene note written from the
title is a guess; `docs/comic-features-set-a.md` and `-set-b.md` have a per-comic
record for most of them, and the image is in `assets/comics/<id>.jpg`.

### 2. A render path that cannot clobber the vendor audio

`scripts/generate-tts.mjs` selects targets with
`!existsSync(join(root,'assets',audioRel))` — it skips anything already
rendered. All eight already carry a vendor mp3, so pointing it at them is a
**no-op**, not a re-render. Do not "fix" that filter: it is what stops the
daily job re-rendering the whole catalogue, and `scripts/daily-tts.sh` depends
on it.

Write a **separate small script** instead. `scripts/generate-mcgrot-tts.mjs` is
the obvious name. Reuse `generate-tts.mjs`'s Gemini call and retry handling
rather than reinventing them — read it first.

- Voice: **`Algenib`** (Andrew's pick, provisional — a constant at the top of
  the file, not scattered).
- Output: `assets/audio/mcgrot/<id>.mp3`. A new directory, deliberately.
- Input: `scripts/tts-prompts/mcgrot/<id>.txt` plus the comic's transcribed
  text from `assets/catalog.json`.

**This is the guard, and it is the reason this unit is not `low` effort.**
Writing McGrot audio over a vendor clip destroys work Dan has already heard and
accepted, and it would do so silently. So:

- **Assert the output path is under `assets/audio/mcgrot/` at runtime**, in the
  shipped code path, before any write. Not a comment, not a convention — an
  assertion that throws.
- **Refuse to overwrite an existing output** unless an explicit `--force` is
  passed.
- The script must never write to `assets/catalog.json`. These are not vendor
  clips and an `audio` field pointing at them would make McGrot vendor 125 —
  see `CLAUDE.md` on `3c6b637b`.

**`.env.local` holds live API keys.** Never print one, never commit one, never
paste one into your report.

### 3. Render the eight, and verify they are audible

Dan has authorised the spend (~$0.06 estimated). Render them.

**Then check the output, not the object that produced it.** This project's
settled rule, and the suite failed it first: element state proves a source was
wired up, not that anything is audible — `mediaEl.volume = 0` left an audio
region 7/7 green with measured peak 0.000, RMS 0.000. So:

- Every one of the eight must have **non-zero RMS**, measured off the actual
  file. `ffmpeg`'s `volumedetect` filter is sufficient and needs no new
  dependency.
- **The named control:** the same measurement against a deliberately silent
  file you generate locally, which must read zero. Without it "non-zero RMS"
  is a number with nothing to compare against.
- Report each clip's duration and confirm the total against the shortlist's
  185.4s. **A large divergence is a finding, not a rounding error** — the
  vendor timings were the basis for saying eight readings fit a ten-minute
  visit, and if Algenib is materially slower or faster that arithmetic moves.

**Prove the guard can go red.** Point the script at an output path outside
`assets/audio/mcgrot/`, watch the assertion throw, restore. **Commit before
injecting** — `git checkout <paths>` restores nothing if any path in the list
is untracked, and a surviving injection looks like a second bug next run.

**Then listen to at least two of them** and say what you heard, not what you
concluded. If McGrot sounds wrong, that is the single most valuable thing this
unit can report and it does not make the unit a failure.

## Scope

**Yours:** `scripts/generate-mcgrot-tts.mjs`, `scripts/tts-prompts/mcgrot/`,
`assets/audio/mcgrot/`, and `docs/g7-mcgrot-readings.md` for your write-up.

**Not yours — another worker is live in these right now:**
`src/mcgrots/main.js`, `pomple.js`, `looks.js`, `scripts/smoke-mcgrots.mjs`
and `docs/MCGROTS-VALIDATION.md` all belong to `previsit`. **Do not add a smoke
region and do not touch VALIDATION.md** — write your verification into your own
doc and the orchestrator folds it in once both units land. This is the exact
collision that nearly cost a morning on 2026-08-12.

**Also not yours:** `assets/catalog.json`, `scripts/generate-tts.mjs`,
`scripts/merge-batches.mjs`, `scripts/daily-tts.sh` — read them, change
nothing. `src/` of any kind. `docs/MCGROTS-ROADMAP.md`, `docs/MCGROTS-VOICE.md`,
`CANON.md`, `AGENTS.md`, `CLAUDE.md` — report what should change.

Note the working tree has unrelated modifications and untracked files from the
daily TTS job. They are not yours; leave them alone and commit by explicit
pathspec.

## Landing

Commit when done, by explicit pathspec, with the actual numbers: each clip's
duration and RMS, the control that read zero, and what went red when you
injected the path guard. **Never push.**

Report into `.herdr/<your-name>.md` per `AGENTS.md`. Ping on QUESTION or DONE
only, and never ping and then idle.
