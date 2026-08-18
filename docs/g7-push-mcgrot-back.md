# G7p — pushing McGrot behind the van's front panel

Brief: `docs/briefs/g7p-push-mcgrot-back.md`. Roadmap entry:
`docs/MCGROTS-ROADMAP.md` § 10, F24 (REOPENED 2026-08-18). This document is
the write-up that entry and `docs/MCGROTS-VALIDATION.md` should both fold in;
it is not itself part of either.

## The fix

`MCGROT_LOCAL`'s local z moved from 1.3 (`VAN_DEPTH / 2`, the opening's own
face line) to 0.9, in `src/mcgrots/mcgrot.js`. That is 0.32m behind the van's
solid front panel's own back face (local z 1.22), not just its front — a
margin, not a graze.

**Why 1.3 was wrong**, measured from the `counter` camera at
`(8.12, 2.00, -12.33)`:

| | distance |
|---|---|
| McGrot's own AABB centre (old, z=1.3) | 6.501 m |
| the van's front panel, below the sill | 6.539 m |
| a figure standing at the van's interior centre (z=0) | 7.734 m |

He stood 3.8cm in FRONT of the panel. Everything above the valance line
(G7o, 0.02–0.64m) rendered OVER the van instead of behind it — the apron and
both fists hung below the serving sill where a solid panel should have
occluded them.

**Why 0.9, not some other value.** Nine candidates were rendered and measured
at every anchor between local z 1.3 and 0.5 — not assumed. Two numbers per
candidate: the sill-band toggle-diff fraction (his own footprint, y clamped
to [0, `OPENING_SILL`] — road to serving sill) and the `mcgrot` region's own
F22 technique (his whole-AABB toggle-diff fraction). At `counter`:

| local z | sill-band | F22 (whole AABB) |
|---|---|---|
| 1.30 (old) | 23.6% | 25.5% |
| 1.22 (panel's own back face) | 17.9% | 21.4% |
| 1.20 | 16.2% | 20.2% |
| 1.19 | 14.8% | 19.2% |
| 1.15 | 7.7% | 14.3% |
| 1.10 | 4.3% | 11.9% |
| 0.90 | 2.0% | 10.2% |
| 0.70 | 2.7% | 10.3% |
| 0.60 | 3.0% | 10.6% |

Two things this table shows and a single number would not:

- **The transition is a cliff, not a slope.** Every candidate that keeps F22
  above 20% (z ≥ 1.20) still reads double digits on the sill band — opening
  the captures at 1.22 and 1.20 shows his apron and both fists still clearly
  drawn below the counter shelf, not a rounding artefact. There is no local z
  that clears both.
- **Past 1.15 the sill-band number is flat.** 0.9, 0.7 and 0.6 all read
  2.0–3.0% — going further back buys no additional occlusion, only a smaller
  figure in frame. 0.9 was picked as the shallowest candidate already inside
  that flat, clean band, at every anchor (not just `counter` — see the
  `pushback` region's own numbers below).

All five anchors, shipped position, `pushback` region's own measurement:

| anchor | sill-band, old (z=1.3) | sill-band, new (z=0.9) |
|---|---|---|
| counter | 23.6% | 2.0% |
| wall | 20.9% | 0.7% |
| kerb | 21.2% | 0.8% |
| far | 24.3% | 1.3% |
| back | 24.0% | 5.0% |

All five captures were opened, not just `counter`'s. Every anchor reads clean
— no apron, no legs, no fists below the sill. The brief named a specific risk
worth checking directly: the van's interior liner is dark, and pushing him
back might put his face in shadow. **That did not happen** — his face is lit
at every anchor, including `back`, the furthest anchor from camera and the
one with the highest (still small) sill-band residual.

Pomplé's gaze (`pomple.js` imports `MCGROT_LOCAL` as its attention target)
was confirmed to have moved, not assumed: `far`/`back` are the two anchors
far enough from Pomplé (11.5m/8.3m) that his attention state machine never
switches off `'mcgrot'` to track the player, so his head yaw at those two
spots is driven purely by `mcgrotTarget`. Measured by temporarily reverting
just `mcgrot.js`, rebuilding, and reading `pomple.headYaw`: **-0.789 rad at
the old position, -0.966 rad at the new one**, at both anchors — a real,
consistent 0.177 rad (~10.2°) shift toward where he now actually stands.

## The tension the brief named, and the one it didn't

**The one it named:** the `mcgrot` region's own F22 check gates his
whole-AABB fraction at `counter` against a 20% floor. It read 25.5% before
this unit; it reads 10.2% now. The brief predicted this exactly and asked for
the number to be reported rather than the floor moved — done, in the
`pushback` region's own paired checks (`F22 control` / `F22 finding`),
which assert BOTH sides on purpose so a future change that closes the gap
turns the second one red rather than silently going stale.

**The one it didn't: eight more checks, in three more regions, share the
same root cause.**

F22's own comment records the fact that made this predictable in hindsight:
*"A humanoid AABB is never fully filled by its own silhouette... measured at
all five anchors with the fix ON: counter 30.2%, wall 29.1%, kerb 28.8%, far
33.7%, back 30.3%"* — a natural, unoccluded range of roughly 29–34%. Every
check below either reuses that exact technique against that exact kind of
floor, or reuses McGrot's on-screen AREA as a proxy for "something is
happening" — both assume he draws like a standing, mostly-unoccluded figure.
Putting him behind a counter deliberately halves that on purpose, everywhere
the technique is used, not just at the one spot the brief named.

Full smoke run after the fix: **152/161**, all nine new failures pre-existing
checks this unit did not touch:

| region | check | old | new | floor/margin |
|---|---|---|---|---|
| mcgrot | F22: not occluded at counter | 25.5% | 10.2% | >20% |
| mcgrot | F22 control: fix disabled reads lower | not captured pre-change (only `on` was confirmed at 25.5%; this specific `off` control wasn't run before the fix) | on=10.2%/off=8.8% | on must be materially higher than off (fix-on ≥ fix-off×1.25 or similar) — both numbers collapsed together post-change |
| mcgrot | F22 follow-up: rota reader doesn't reopen it, every visit phase | — | 10.2% at t=995/1020/1050 | >20%, each |
| beats | `approach`: beat changes the screen more than ambient alone | — | beat 7.6% / control 5.7% | need beat > control+5pp; margin now too thin |
| beats | `settle`: same shape of check | — | beat 0.0% / control 0.0% | need beat > control+2.5pp; his settle motion no longer moves enough on-screen area to clear even a small margin |
| taxman | not occluded at `wall` while Taxman present | — | 10.0% | >20% |
| taxman | control: Taxman absent also clears floor, isolating his own contribution | — | present 10.0% / absent 10.0% | floor itself unreachable, so the isolation claim can't be evaluated either |
| valance | F22 unaffected by the valance, at counter | — | on 10.2% | >20% |
| valance | valance-off control, same floor | — | on 10.2% / off 19.2% | >20%, each |

Two different failure shapes hide in that list, worth telling apart:

1. **Floor-based** (mcgrot ×3, taxman ×2, valance ×2): a fixed percentage
   floor calibrated against the natural 29–34% range. All read ~10% now,
   consistently — this isn't noise, it's the same fact expressed seven times.
2. **Margin-based** (beats ×2): not a floor but a required GAP between a
   "beat" measurement and an ambient "control" measurement of the same kind.
   These fail differently — not because his area collapsed to near-zero, but
   because a SMALLER starting silhouette means the same physical motion
   (a turn, a step) sweeps a smaller fraction of the frame, shrinking the
   beat/control gap below its required margin. Re-deriving these needs
   fresh margins measured against the new baseline, not just a floor moved
   down.

## What a follow-up unit should measure instead — proposed, not built

This unit's own `pushback` region claim 1 (the sill-band toggle-diff,
footprint-clamped to a specific y-band rather than his whole AABB) is most of
the answer, and it generalises further than its current one use:

**Measure occlusion against the band a figure is SUPPOSED to be visible in,
not his whole standing-height AABB.** F22 and its four dependents all ask "is
X% of his full head-to-toe box actually him" — a question with a stable
answer only for a figure with nothing between camera and feet. For a figure
staged behind a counter, the honest question is narrower and answerable
per-check: "of the region where he is meant to be seen (the OPENING, not his
own silhouette), is he present" — which is what claim 2 in `pushback`
approximates by reporting the same old technique's number rather than gating
it, and what a proper replacement should do directly: project the van's own
SERVING OPENING (its sill-to-top, opening-width rect — already named
constants in `van.js`, `OPENING_SILL`/`OPENING_TOP`/`OPENING_W`) rather than
his own AABB, and require a floor of HIS pixels within THAT rect. That fixes
the floor-based family (mcgrot, taxman, valance) directly, using a rect that
does not shrink when he is correctly staged further back — it's the van's own
opening, not his body.

It does not fix the margin-based family (beats) the same way — `approach`
and `settle` are about MOTION sweeping screen area, not steady-state
presence, and a fixed rect doesn't change what fraction of it a small turn
covers. Those two most likely need their required margins re-measured
against the new, smaller baseline rather than a different rect; whether a
smaller margin still means something (i.e. still fails to fire on pure
render noise) is worth checking with a dry run the way every toggle-diff
check in this codebase already does, before trusting a smaller number.

## Landing

Everything above is committed on this branch (`g7p-pushback`) and NOT merged
to `main` — the four affected regions' own checks are out of this unit's
scope (`docs/briefs/g7p-push-mcgrot-back.md`'s own scope section: only
`mcgrot.js`, `scripts/smoke-mcgrots.mjs`'s new region, and this document are
mine), and re-deriving eight thresholds across three regions is real,
separate work. `main` stays green; this branch carries the fix and the full
finding for whoever picks up that follow-up unit.
