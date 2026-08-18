# G7.5b — promote `BODY_KIND` to `skinned`, and measure what it moves

Roadmap: `docs/MCGROTS-ROADMAP.md` § 5, G7.5 item 1, first bullet. Fault: § 10
F26.

**Read this first: you are not expected to land a green suite, and you must not
try to make one.** The measurement is the deliverable. See "What landing means"
at the bottom before you plan your work.

## Why this exists

`src/mcgrots/main.js:51` reads `const BODY_KIND = params.get('body') ||
'capsule'`. `capsule` is G0's blockout — a featureless cream lozenge. Dan chose
A1 skinned as the winner on 2026-08-11 and G7h did exactly this promotion for
`LOOK_KIND`, but nobody ever did it for the body. So every boot that does not
pass `?body=skinned` renders the player as a blank capsule, including the visit
region's own saved "open and look" evidence.

Dan confirmed on 2026-08-18 that he watched the ten-minute kill-criterion run
with `?body=skinned`, so the G7 verdict stands. The default is still wrong.

## Scope — files you own

- `src/mcgrots/main.js`
- a new `docs/g7-5b-body-default.md` for your measurement
- `docs/MCGROTS-ROADMAP.md` for your landing

**You must not touch `scripts/smoke-mcgrots.mjs`.** A concurrent worker
(G7.5a) is splitting that file into per-region modules and owns it completely.
This is the constraint that shapes your whole unit, and it is why you are
measuring rather than fixing.

Also not yours: `src/mcgrots/pomple.js` (a third worker owns it).

## What to do

The code change is one line. The work is everything after it.

1. **Baseline.** Full suite on a clean bundle, before any change. Capture the
   whole output to a file — you will diff against it.
2. **Flip the default** to `skinned`.
3. **Re-run and diff.** Produce the exact list of checks that changed state,
   with their before and after numbers. For every one, say *why* — a rect-based
   check now sees a coated figure where it saw a lozenge is a different thing
   from a check that broke.
4. **Render and open the captures.** Numbers cannot see this. Every capture the
   suite writes that contains the player's body has changed; open the ones that
   changed most and describe what you actually see, not what you conclude. The
   visit region's `wall` and `far` captures are named in F26 as the worst
   instances — start there.
5. **Look for the thing a diff cannot show you.** The capsule is 
   featureless, so it never occluded anything interestingly. A real figure has
   a silhouette, a coat, and a head. Does it block the van at any anchor? Does
   it stand somewhere it should not? Is it lit? Say so plainly.

## What to be careful about

- **Do not lower a threshold, and do not touch a check.** If a check now fails,
  that is your finding to report, not your bug to fix. Several of them will
  belong to the next unit, working in the split suite.
- **Do not use `--update-goldens`.** Ever, on this project.
- **`?body=` still has to work as an override.** The other candidates are G1's
  bake-off levers and the `style` region navigates to `?body=skinned` by hand.
  Changing the default must not remove the parameter.
- **An unknown `?body=` value currently falls back to the control** (`main.js`
  line ~733, `BODIES[BODY_KIND] || BODIES.capsule`). Decide deliberately what
  that fallback should be once `capsule` is no longer the default, and say why.
  Leaving it pointing at the blockout may still be right — it is a *control*,
  not a default. Argue it either way, but argue it.

## What landing means for this unit

**Commit on your branch. Do not merge.** Your branch is expected to leave the
suite red, and `main` stays green until the split lands and the next unit
re-derives the affected checks against the new default.

Your commit carries: the one-line change, your measurement document, and a
commit message with the actual before/after counts and the named list of
changed checks. That document is what sizes the follow-up unit, so it has to
stand on its own without your session's context.

If the flip turns out to move **nothing**, that is a finding too, and a
surprising one — say so loudly, because it would mean the suite cannot see the
player's own body at all.

## Reporting

`.herdr/<your-name>.md`, one entry per step, newest last. Ping control only on
QUESTION or DONE. Never ping and then idle.
