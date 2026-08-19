# park-parking — make both projects read as parked, not abandoned

Read `docs/briefs/park-CONTEXT.md` first.

## Where you work

**This repo**, `/Users/dan/code/personal/mcgrot-walk` — not the library. The
other five units all work in `mcgrot-assets`, so you cannot collide with them.

## What you own

- `docs/STATUS.md` — rewrite as a parked-state document
- `docs/MCGROTS-ROADMAP.md` — a parking section; do not rewrite the history
- `docs/ROADMAP.md` — the same, for the street game
- `MOVED.md` — new file at the repo root
- `README.md` — a short parked banner at the top only

**Do not edit** `CLAUDE.md`, `AGENTS.md`, `docs/VALIDATION.md`,
`docs/MCGROTS-VALIDATION.md`, or anything under `src/`. Report what you think
should change instead.

## The tone, and it matters

Both projects reached a working state. McGrot's passes **153/153 checks in
~32s**; Dan watched the full ten-minute visit and called it *"For PoC it's ok."*
The street game shipped a full validation rig and a real scene.

They were stopped because they are **more ambitious than Dan wants to carry**,
in his words: *"building 3d scenes that change, expand follow timings and be
persistent online. I've bitten off more than we can chew - for now."*

Note the *for now*.

> Write these as a deliberate stop with the door left open. Not a post-mortem,
> not an apology, and not a triumphant summary either. A colleague returning in
> a year should be able to pick it up without first having to work out whether
> it failed.

No hedging about what "might" have worked. State what worked, state what was
open, stop.

## 1. `docs/STATUS.md` — rewrite

It is currently 152 lines written for an active project, with an "in flight"
section describing work that has now been preserved and stopped. Rewrite it as
the **first thing anyone reads on returning.**

It should answer, in order:

- **Both projects are parked, as of 2026-08-19.** Why, in Dan's framing.
- **What state each is in.** McGrot's: 153/153 in ~32s, G0–G7 landed, G7 passed.
  The street: paused earlier, its own separate suite. Re-derive these numbers
  rather than copying them.
- **How to check it still works**, in one command block. The existing file has a
  good "re-derive the real state in under a minute" section — keep that idea.
- **The three live faults**, F24, F25 and F26, exactly as § 10 of
  `docs/MCGROTS-ROADMAP.md` records them. These are open at park and must not
  be quietly dropped. F26 is half closed.
- **Where the preserved work is**: three branches, all pushed to `origin`.
  `g7p-pushback` holds F24's measured fix, unmerged on purpose behind F25.
  `g7-5a-suite` holds a partial split of the 4,384-line suite file, never run.
  `g7-5e-signage` holds five part-built Pomplé sign variants, never rendered.
  Each commit message says what was and was not verified — point at them.
- **What the resume point would be** if either project restarts.
- **Where the assets went** — a pointer to `MOVED.md`.

Keep the existing file's best feature: it says loudly that it is a map to the
authoritative documents, and that where it disagrees with them, it is the stale
one. Keep that.

Drop the "what keeps biting" list only if you are confident it now lives in the
library's `docs/gotchas-universal.md` — the `gotchas` unit is writing that in
parallel. Safer: keep a short version and point at the library.

## 2. `MOVED.md` — new, at the repo root

Dan asked for this explicitly: a doc **in the project** saying clearly where
things moved, so it can be repaired later if wanted.

The headline, and it should be the first line: **nothing broke.** The assets
were **copied**, not moved. `assets/` is untouched and both projects run
exactly as before. Say that before anything else, because the instruction that
prompted this file assumed a move, and a reader who half-remembers that will
otherwise go looking for damage.

Then:

- **What now also exists** at `/Users/dan/code/personal/mcgrot-assets`, with the
  path mapping. Source on the left, library on the right:

  ```
  assets/audio/*.mp3        -> sounds/readings/
  assets/audio/cast/        -> sounds/cast/
  assets/audio/mcgrot/      -> sounds/mcgrot/
  assets/faces/             -> visual/2d/faces/
  assets/shopfronts/        -> visual/2d/facades/
  assets/characters/        -> visual/3d/characters/
  assets/cars/              -> visual/3d/vehicles/
  assets/comic[123]-*.{jpg,png} -> visual/2d/comics/named/
  assets/*.json (7 records) -> data/
  ```

  **Verify this mapping against both trees before you publish it.** It is
  written from the orchestrator's commit message, which is a snapshot.

- **What was deliberately not copied**: the 419-image comic corpus. Google Drive
  is its only home; the library carries a manifest and a guarded pull script.

- **How to repair**, if the originals are ever deleted: the library is a git
  repo, so the assets can be copied back the other way. Give the actual command.
  Note the one thing that would not come back — the comics, which come from
  Drive, one direction only, via `scripts/mcgrots-drive-pull.mjs`.

## 3. The two roadmaps

**Do not rewrite the history.** These are 2,724 and 4,437 lines recording what
landed and what it cost, and that record is the point.

Add a clearly marked **parking section** near the top of each: parked on
2026-08-19, the state at park, what was in flight and where it went, what the
resume point is. One screen each. Then leave the rest alone.

For `docs/MCGROTS-ROADMAP.md`, make sure § 10's three live faults are visibly
still open — a reader skimming the parking section must not conclude everything
was finished.

For `docs/ROADMAP.md`, note that the street was paused well before this and that
`src/` outside `src/mcgrots/` was already not to be edited.

## 4. `README.md`

A short banner at the top: both projects parked 2026-08-19, see
`docs/STATUS.md`, assets also at `mcgrot-assets` per `MOVED.md`. Three or four
lines. Do not restructure the file — the asset-regeneration instructions in it
are still correct and the `apidocs` unit is drawing on them.

## Verify before you finish

- **Run the suite** and quote the real tail:
  `npm run bundle:mcgrots && npm run smoke:mcgrots`. Any number you state about
  the project's health must be one you measured. Expect 153/153 in about 32s; if
  you see something else, that is a finding — report it, do not adjust the text
  to match.
- **Check the path mapping** in `MOVED.md` against both trees. `ls` both sides.
- **Check the three branches exist on the remote**: `git branch -r`.
- Confirm every fault number you mention matches `docs/MCGROTS-ROADMAP.md` § 10.
- Read `MOVED.md` back as someone who has forgotten this session. Is the first
  line "nothing broke"? If not, fix it.

Commit to your branch by explicit pathspec when done, then ping control.
