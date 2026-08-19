# park-apidocs — API usage, and the comics/Drive contract

Read `docs/briefs/park-CONTEXT.md` first.

## What you own

Two files, in the **library** repo (`/Users/dan/code/personal/mcgrot-assets`):

- `docs/api-usage.md`
- `docs/comics-and-drive.md`

Nothing else. Do not touch the library's `README.md`.

---

## Part 1 — `docs/api-usage.md`

Dan's instruction: *"instructions around API usage."*

These assets were produced by calling paid external APIs. A future project will
want to make more of them, and the knowledge of how to do that correctly, and
what it costs, is currently spread across 57 scripts and several roadmap
entries. Collect it.

### The APIs actually in use

Three keys live in `.env.local`, gitignored: `GEMINI_API_KEY`,
`TOGETHER_API_KEY`, `FAL_KEY`. **Refer to them by name. Never print a value, and
never paste one into a doc.** Establish which service each key drives by reading
the scripts, not by assuming from the name.

Start from these, and follow what they import and call:

```
scripts/generate-tts.mjs            the main text-to-speech generator
scripts/generate-cast-tts.mjs       cast lines
scripts/generate-mcgrot-tts.mjs     the lead's lines
scripts/mcgrots-voice-audition.mjs  choosing a voice
scripts/generate-mcgrots-dialogue.mjs
scripts/fetch-faces.mjs   scripts/gen-faces.mjs
scripts/fetch-shopfronts.mjs   scripts/gen-facade-*.mjs   scripts/outpaint-giants.mjs
scripts/fetch-osm.mjs     scripts/fetch-businesses.mjs
scripts/merge-batches.mjs
```

`README.md` in this repo already documents asset regeneration and where keys go.
Read it first; it is the existing answer and your doc supersedes it.

### For each API, write down

- **What it is used for here**, in one sentence.
- **Which script calls it**, and the exact command to run that script.
- **The request shape that actually worked** — model name, the parameters that
  mattered, and any that had to be set a particular way. Take these from the
  code, not from memory of the vendor's docs.
- **Cost.** This matters more than usual: a whole unit was spent on voice
  costs. `docs/g7-voice-collision-costs.md` (245 lines) and
  `docs/MCGROTS-VOICE.md` (465 lines) are about exactly this. Carry the real
  numbers and say what they bought.
- **Rate limits, batching and failure behaviour.** How the daily job paces
  itself, what it does on a failure, whether calls are resumable.
- **The traps.** At minimum, this one, which is documented in `CLAUDE.md`:
  a catalogue entry must never claim an audio file that is not on disk. It 404s
  every time that station is opened. The generator was fixed and the merger was
  missed, and it stayed green only because the daily limit had always exceeded
  the size of a wave. Write down the rule — leave the reference null until the
  file exists — and the incident behind it.

### Also cover

- **The daily job.** `scripts/daily-tts.sh` runs on cron. Explain what it does,
  and the safety property that makes it safe to run unattended: it undoes any
  merge that would change the vendor census, and renders audio only. Landing a
  batch is a deliberate human act, not something a cron job may do.
- **Key handling**, as a pattern a future project should copy: `.env.local`,
  gitignored, never a value in a doc or a commit.
- **What a future 2D project would still want.** Text-to-speech and image
  generation are dimension-agnostic. Say so, and say which parts of this are
  only relevant to a 3D pipeline.

---

## Part 2 — `docs/comics-and-drive.md`

Dan asked for this explicitly: *"note explicitly that the comics are always used
and live in Google Drive."* Treat it as the most important sentence in the
library, and write the doc that makes it impossible to get wrong.

### It must state, unambiguously

- **The comics are used by every McGrot project, and Google Drive is their
  only home.** They are not committed to the library repo — the `.gitignore`
  enforces that for `visual/2d/comics/`.
- **The exception:** three hand-named demo comics under
  `visual/2d/comics/named/` are tracked deliberately. They are not part of the
  Drive corpus and are referenced by `data/manifest.json`. Say so, so nobody
  "fixes" the inconsistency.
- **Sync is Drive → local, one direction, always.** Never name a `gdrive:` path
  as a copy destination. Never use `rclone sync`, which deletes to make sides
  match. The reason is concrete: the Drive folder was seeded from the project
  and then hand-pruned 414 → 396, so a wrong-direction sync silently resurrects
  every deleted file.
- **Where they are.** The remote is `gdrive:`. Two folders exist:
  `gdrive:McGrot/1 - Already in the game` and
  `gdrive:McGrot/2 - Add new comics here`. **Verify this yourself** with
  `rclone lsd "gdrive:McGrot"` and quote the output — do not take it from this
  brief.
- **How to pull.** `scripts/mcgrots-drive-pull.mjs` is the guarded, working
  implementation. Read its header comment: it explains the direction rule, the
  runtime assertion on the copy destination, and why `--remote`/`--staging`
  overrides exist (so the real code path can be exercised against a read-only
  folder without touching the real one). Document the actual usage, including
  `--dry-run`.
- **The hash pairing.** `0021ea9d.jpg` pairs with `0021ea9d.mp3` in
  `sounds/readings/`. The shared filename stem is the entire join. Never rename.
- **The verbatim rule.** The comics' AI-garbled text is read and reproduced
  exactly as printed, everywhere, including in generated output. It is the
  point, not a defect. Anyone tempted to correct it should find this note first.

### Verify, do not assume

Run `rclone lsd "gdrive:McGrot"` and any listing you need, and quote real
output. **Read-only commands only.** Do not copy, do not sync, do not create a
folder, do not delete anything. If a command you are considering has a
`gdrive:` path in a destination position, that is the signal to stop and report.

There is a live warning on this remote about rclone's shared client ID being
retired during 2026. Note it in the doc as a thing that will need attention;
do not try to fix it.

---

## Verify before you finish

- Every command you print has been run, or is plainly marked as not run.
- No secret value appears in either file. Grep your own output for the key names
  and check only the names appear.
- Every cost figure is traceable to a source document you can name.

Commit to your branch by explicit pathspec when done, then ping control.
