# park-tools — carry the generator scripts across, with judgement

Read `docs/briefs/park-CONTEXT.md` first.

## What you own

In the **library** repo (`/Users/dan/code/personal/mcgrot/mcgrot-assets`):

- everything under `tools/` **except** `tools/build-manifests.mjs`, which the
  `manifests` unit owns
- `tools/README.md`

Nothing else.

## The job

Dan chose "assets, docs, and the generator scripts" — the tools that made the
assets, so a future project can make more. But this repo has **57 scripts**, and
most are specific to a game that is now parked. Carrying all 57 would bury the
useful ones.

> Your unit is **judgement**, not copying. Decide what earns its place, carry
> those, and write down why the rest stayed behind.

## How to decide

Read each script's header. Most have one, and this project writes good ones.
For each, ask:

**Would this be useful to a project that is not McGrot's?** A text-to-speech
generator is. A script that positions a stall at chainage 740 on Leith Walk is
not.

**Does it depend on McGrot's data shapes?** Some depend lightly — a catalogue
field name, easily adapted. Some are inseparable. The first kind carries with a
note; the second stays.

**Is it a general method or a one-off?** `comic-palette.mjs` answers "is this
image on-palette", which is a question any project with an art direction has.
`gen-facade-declutter-d1.mjs` was run once on one problem.

Three tiers, and be explicit about which each script is in:

- **Carry as-is.** Genuinely general. Runs anywhere.
- **Carry with a note.** Useful, with a named McGrot assumption to adapt.
- **Leave behind.** Say so in one line, with the reason.

## Strong candidates

Not a list to accept — a list to evaluate. Read each and disagree freely, in
writing:

```
generate-tts.mjs            text-to-speech, the core generator
merge-batches.mjs           batch merging, with a guard worth studying
mcgrots-drive-pull.mjs      guarded one-way Drive sync — see below
comic-palette.mjs           is this asset on-palette
contact-sheet.mjs           a grid of images for review
fetch-osm.mjs               real-world building footprints
fetch-businesses.mjs        real business names
prep-comics.mjs             comic preparation
extract-comic-lines.mjs     text out of images
glb-stats.mjs               model inspection
stamp-bundle.mjs            content-hash cache busting
```

**`mcgrots-drive-pull.mjs` must be carried**, and it is the most important
script here. It is the guarded Drive pull: a runtime assertion on copy
direction, a refusal to use `rclone sync`, and `--remote`/`--staging` overrides
invented so the real code path can be tested against a read-only folder. The
guard is the reusable idea, more than the script. Its header explains itself
well — preserve that header intact.

## What to write

`tools/README.md`, and it is the deliverable that matters most. For each carried
script:

- **What it does**, one sentence.
- **How to run it** — the actual command line, with real flags.
- **What it needs**: which API key by name, which input files, which external
  binary (`rclone`, `ffmpeg`, whatever you find).
- **Its McGrot assumptions**, named plainly, so someone adapting it knows where
  to look.
- **Whether it costs money.** Anything hitting a paid API gets a clear marker.
  Someone running an unfamiliar script should not discover the bill afterwards.

Then a short section: **what was left behind and why.** Group the 40-odd
rejects into a few categories rather than listing each — "façade pipeline
one-offs, specific to Leith Walk geometry (14 scripts)" is more useful than
fourteen lines. Name where they still live.

## Keep the headers

These scripts carry unusually good header comments explaining *why*, not just
what. That reasoning is a large part of what is being preserved. Do not strip or
shorten a header when you carry a file. If a header refers to something that
will not exist in the library, add a line — do not delete the original.

## Do not

- **Do not run any script that calls a paid API.** Reading is the job.
- Do not run anything with a `gdrive:` destination. Read-only Drive commands
  only, and only if you need them.
- Do not refactor. A carried script should be recognisably the one that worked.
  If a path needs changing to work from the library root, change the path and
  note it in your report — nothing more.
- Do not carry a script you have not read in full.

## Verify before you finish

- Every command in `tools/README.md` is one you have checked reads correctly
  against the script's actual argument parsing. Say which you ran (the free
  ones, `--help` or `--dry-run` where offered) and which you only read.
- No secret value appears anywhere in `tools/`. Grep for the three key names and
  confirm only names appear, never values.
- Every carried script's dependencies are stated. If it imports an npm package,
  say which — the library has no `package.json` and a future project needs to
  know what to install.
- Count check: number of scripts carried, number left behind, and the two sum to
  57. Re-derive that 57 yourself; it is a snapshot from the orchestrator.

Commit to your branch by explicit pathspec when done, then ping control.
