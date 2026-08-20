# Parking: shared context for every park-* unit

Read this first, then your own `docs/briefs/park-<unit>.md`. Everything here is
common to all six units. Where this file and your unit brief disagree, your unit
brief wins.

## What is happening

Both games in this repo are being **parked**, and their durable value extracted
into a general-purpose asset library at
**`/Users/dan/code/personal/mcgrot/mcgrot-assets`** (a separate git repo, already
created, two commits in).

Dan's words: *"building 3d scenes that change, expand follow timings and be
persistent online. I've bitten off more than we can chew - for now."*

Parked is not abandoned. The projects reached a working state — McGrot's passes
153/153 checks in ~32s — and were stopped because they are more ambitious than
he wants to carry. Everything you write should read that way: a deliberate stop
with a stated resume point, never a failure or an apology.

**The next project is not decided.** It will be *"an even more simplified
version of what we have — but to be explored (thoroughly) first"*, and is
**quite possibly a static 2D scene with some animations** rather than 3D. So:

> **Assume the reader has no Three.js, no renderer, and no 3D.** Anything that
> only applies in 3D must be labelled as such, so it can be skipped in one
> glance. Do not delete it — quarantine it.

## The library's structure — this is a contract

```
mcgrot-assets/
  README.md            the index. Already written. Read it first.
  sounds/              readings/ (136 mp3) · cast/ (6) · mcgrot/ (20)
  visual/2d/           comics/named/ (6 files) · faces/ (40) · facades/ (706)
  visual/3d/           characters/ (22) · vehicles/ (5)
  data/                7 structured records (catalog, readings, leith,
                       manifest, comic-lines, businesses, facade-registry)
  manifests/           generated indexes — being built by the manifests unit
  tools/               generator scripts — being filled by the tools unit
  docs/                the prose — you may be writing some of it
```

169M, 962 files tracked. Assets were **copied, not moved**: this repo keeps its
originals and still runs. Do not change that.

## Rules that hold for every unit

- **Never rename an asset file.** A comic and its spoken reading are joined by a
  shared filename stem — `0021ea9d.jpg` pairs with `0021ea9d.mp3`. That pairing
  carries no other record anywhere. A rename destroys it silently.
- **The comics live in Google Drive and Drive is their only home.** Sync is
  **Drive → local, one direction, always.** Never name a `gdrive:` path as a
  copy destination, and never use `rclone sync` (it deletes to make sides
  match). The Drive folders were hand-pruned 414 → 396; a wrong-direction sync
  resurrects everything deleted. `scripts/mcgrots-drive-pull.mjs` has the
  working guard — read its header.
- **The comics' text is verbatim.** The AI-garbled nonsense is never corrected,
  anywhere, including in anything you generate. It is the point of the project.
- **Never commit a secret.** Keys live in `.env.local` (gitignored):
  `GEMINI_API_KEY`, `TOGETHER_API_KEY`, `FAL_KEY`. Never print a value, never
  paste one into a doc. Refer to them by name only.
- **Never push, deploy or publish.** Dan's call alone. Commit freely; stop
  there.

## Verification is evidence

This project's central failure mode, three times over, was a summary asserting
a number that was false.

- **Never report a measurement, a count or a result you did not run.** State the
  command and its actual output.
- A count quoted in an earlier report is a **snapshot**. Re-derive it from what
  is on disk, and quote the command that produced it so it can be disagreed
  with.
- If you cannot verify something, say so plainly in the doc. "Not verified" is a
  useful sentence; a confident guess is a defect.

## Where you work

You have your own git worktree and branch — you were started in it. Confirm
before your first commit:

```bash
git rev-parse --show-toplevel && git branch --show-current
```

Commit by **explicit pathspec**, naming only your own files. Note two traps that
have both bitten here: `git commit -- <paths>` **silently skips untracked
files** (`git add` them first), and `git stash` is **shared across every
worktree** in a repo (one `refs/stash` — pop by explicit index, or make a
scratch commit instead).

Never put backticks in a `git commit -m` string; write the message to a file and
use `-F`.

## How to write

Dan reads these. Match the register:

- **British English** — organisation, colour, realise, centre.
- Short sentences, one idea each. Under 20 words where you can.
- **No "we" or "our".** These docs get read by people and sessions who were not
  here.
- Plain words over jargon. Expand any self-coined shorthand on first use;
  established domain terms need no expansion.
- No evaluative asides ("handy, but", "it's worth noting"), no rhetorical
  signposts ("here's the thing"), no trailing summary of what you just did.
- Say what a claim is worth: "this is measured" or "this is reasoned". Both are
  fine; conflating them is not.
- Lead with the answer, then the evidence. A reader should get the point from
  the first two sentences of any section.

## Reporting back

Keep **`.herdr/<your-name>.md`** in your worktree, one entry per step, newest
last. Substance goes in that file; the pane is only a signal.

```
## STATUS 14:32 — what you did
Ran: <the actual command>
Saw: <the actual output, pasted>

## DONE 15:20
Files: <what you wrote>
Ran: <command> -> <actual result>
Not verified: <anything you could not check, named plainly>
```

Ping the orchestrator **only** on QUESTION or DONE, never on progress:

```bash
herdr agent prompt control "DONE in .herdr/<your-name>.md"
```

One line, no content — the orchestrator reads the file. **Never ping and then
stop.** Say what you are assuming and carry on with everything the answer does
not block.

## Scope

Do not broaden your task. Do not make unrelated cleanups. Do not edit
`CLAUDE.md`, `AGENTS.md`, another unit's files, or the library's `README.md`
(the orchestrator owns that) — report what you think should change instead.

Six units run in parallel. Every one owns a disjoint set of files. If you find
yourself wanting to edit a file not listed in your brief, that is a signal to
report, not to proceed.
