# G3g — F12: make the grade numbers reproduce

Small, mechanical, and about the record rather than the game. **The decision
does not change** — sun 6 / hemi 3 stays. What is wrong is that the numbers
recorded as its justification cannot be reproduced from the tool named.

## The fault

`docs/MCGROTS-ROADMAP.md`, `docs/MCGROTS-VALIDATION.md` § G3d and commit
`4c3286d`'s subject line all carry:

> S2 6/3 mean 105.1, cast 17.2; 12/3 rejected at 134.5

Re-running the committed `scripts/mcgrots-grade.mjs` unmodified gives 27 rows,
which matches, and values that do not:

| setting | recorded | measured (albedo 0.7 / 1 / 1.35) |
|---|---|---|
| sun 6 hemi 3, frame mean | 105.1 | 72.2 / 72.3 / 72.5 |
| sun 6 hemi 3, cast mean | 17.2 | 10.8 / 21.4 / 24.0 |
| sun 12 hemi 3, frame mean | 134.5 | 92.9 / 93.1 / 93.2 |

**Root cause.** The docs say the sweep ran "against the dressed pitch under
S2". The script cannot do that: it boots
`mcgrots.html?body=skinned&archetype=rab`, has no `--look` flag, and never
calls `setLook`. `main.js:61` defaults `LOOK_KIND` to `'none'`, so the
committed tool sweeps the **unstyled** look. `mcgrots-grade.mjs` is unchanged
across the whole commit range, so it is the same script throughout — most
likely a local modification that was never committed.

## What to do

1. **Give the script a `--look` flag**, matching how `mcgrots-shot.mjs` takes
   its URL params. It should be able to sweep any look, and it should print
   which look it swept in its header — the reason this fault was invisible is
   that the output never said.
2. **Re-run the sweep under S2** against the pitch as it now stands. Note the
   pitch has moved since G3d: the statue, the seated pose and the ledge offset
   have all changed, so expect different numbers from both the recorded set and
   the phase gate's set. That is correct, not a discrepancy to reconcile.
3. **Correct the three documents.** Commit `4c3286d`'s subject line cannot be
   amended — record the correction in the docs and say why the commit message
   still carries the old figures.
4. **Check whether 6/3 is still the right pick** under a sweep that can
   actually see S2. If it is, say so with the numbers. If it is not, **say
   that** and bring the alternative to Dan rather than changing the shipped
   hour yourself — the fixed hour is a design decision, not a maintenance one.

## The gate

There is nothing here worth a new smoke check. A grade sweep is a tool, not a
product surface, and gating a tool against its own output is the shape of
mistake `CLAUDE.md` warns about ("gates test the product, not the calculator").

The existing contrast-floor picture gate already covers the thing that matters
— that no shipped frame goes black or blown. Confirm it still passes and say so.

**If you disagree and think a check is warranted, name what it would prove that
the picture gate does not.** Do not add one by reflex.

## Scope

`scripts/mcgrots-grade.mjs` and the docs. Do not change `site.js`'s `LIGHT`
values as part of this unit — if the sweep says they should move, that is a
finding to report, not a change to land.

Explicit pathspec on the commit; `scripts/daily-tts.sh` and the
`scripts/catalog-batches/` and `scripts/tts-prompts/` files are not yours.

## Landing

One commit. `docs/MCGROTS-VALIDATION.md` § G3d gets the corrected numbers with
a note that the originals were swept under the wrong look, and § 10 F12 moves
to closed. Keep the wrong numbers visible with the correction attached rather
than deleting them — a silently corrected record teaches nobody why it was
wrong.
