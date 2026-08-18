# G7.5a — split the smoke suite into per-region files

Roadmap: `docs/MCGROTS-ROADMAP.md` § 5, G7.5 item 3. This unit closes it.

**This is a pure refactor. Zero behaviour change is the whole requirement**, and
the proof of it is the deliverable — more than the new file layout is.

## Why this exists

`scripts/smoke-mcgrots.mjs` is 4,384 lines: one region appended per unit, for
eighteen units. It is not untidy, it is a merge hazard that has already fired
twice. Every worker copies the same helpers into its own block, so when two
units land together git finds spurious common context *inside* two different
blocks and splices them. At G7j that produced invalid JavaScript. At G7o it
cost a manual whole-block splice. Both were caught; neither was caught by a
check.

The gate's instruction is to do this **before** the next phase that runs
workers concurrently, and that phase is the one immediately after this.

## Scope — files you own

- `scripts/smoke-mcgrots.mjs`
- any new files you create under `scripts/smoke/`
- `docs/MCGROTS-VALIDATION.md` and `docs/MCGROTS-ROADMAP.md` for your landing

**Files you must not touch.** `src/mcgrots/main.js` and `src/mcgrots/pomple.js`
are owned by two workers running concurrently with you. You have your own
worktree so their edits cannot reach your tree, but do not add them to a commit
and do not "fix" anything you notice in them — report it instead.

## What to do

Split the eighteen regions into per-region modules with a shared helper module,
and a runner that composes them. The layout is yours to design; these are the
constraints it has to satisfy.

**Region order must be preserved exactly.** The suite has a known order
dependency: the `style` region navigates the shared page to
`?body=skinned&archetype=rab` and never navigates back. It is harmless today
only because every region after it happens to navigate first. **Do not fix
that in this unit** — it is G7.5's item 4 and it is somebody else's. Preserve
it bug-for-bug, and if your layout makes the order implicit rather than
explicit, make it explicit instead.

**`--only=<region>` must keep working**, for every region, including any you
have to rename.

## The sharp bit: `countDiffPixels` is defined three times

Lines 1253, 3347 and 4138, each a `const` inside its own `page.evaluate` block.
**Diff all three against each other before you merge them into one helper.**

- If they are byte-identical, say so, and dedupe.
- **If they differ, that is a finding and it outranks the refactor.** It would
  mean regions that appear to share a technique have been measuring differently
  — which is the same class of fault as F25, one section down in § 10. Write
  down exactly how they differ and which regions used which. Do not silently
  pick one and apply it to all three call sites: that would change what those
  checks measure, in a commit whose entire claim is that nothing changed.

If they differ, keep the variants as separately named helpers so behaviour is
preserved, report the difference, and stop there. Reconciling them is a
follow-up unit with its own measurement.

## Verification — how you prove nothing was lost

**A check count is not sufficient here.** 153 before and 153 after is satisfied
by a refactor that drops one check and duplicates another. You need the names.

1. Before you change anything, capture the full run's output to a file.
   Extract the ordered list of check names and their PASS/FAIL/SKIP state.
2. Do the same after.
3. **Diff the two lists. It must be empty.** Paste the diff command and its
   actual (empty) output into your report. That is the acceptance measurement
   for this unit and there is no substitute for it.

Then, additionally:

- Full suite: **153/153**, and quote the tail.
- **All eighteen regions standalone**, each with its own count, and the counts
  must sum to exactly 153. The gate measured these on 2026-08-18:
  `boot 4, camera 5, statue 5, anchors 9, van 3, pomple 7, mcgrot 7, seat 6,
  rota 9, audio 11, visit 22, style 14, dialogue 6, beats 8, taxman 13,
  ambience 11, signs 7, valance 6`. Disagree with them if your run does —
  they are there for you to check, not to reproduce by assertion.
- **Fault injection.** Break one check's subject in `src/mcgrots/` (a tracked
  file — commit first, per `AGENTS.md`), confirm it reds through your new
  layout, restore, confirm green. A refactored runner that cannot go red is
  the failure this unit could plausibly ship.

## Reporting

`.herdr/<your-name>.md`, one entry per step, newest last. Ping control only on
QUESTION or DONE. Never ping and then idle.

Land it yourself when it is green: code, docs, and a commit message carrying
the actual numbers and the empty name-diff.
