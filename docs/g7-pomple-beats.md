# G7i — Pomplé's three scripted beats

`docs/g7-visit-shape.md` § 3 item 5, the last of § 9's five kill-criterion
requirements with no groundwork under it: pomple.js had ambient behaviour only
(idle bob, head-turn, attention) and nothing that took a cue and did a
specific, once-off, noticeable thing. This implements `pomple.playBeat(name)`
for `'notice'`, `'approach'`, `'settle'` — the exact interface `docs/briefs/
g7h-visit-sequencer.md` froze for the sequencer to call fire-and-forget.

## What each beat does

All three are pure functions of their own elapsed time (`bt`, reset every
`playBeat()` call) — never `t`, never a wall clock — matching the sequencer's
own pure-function-of-the-clock contract (Dan's ruling, 2026-08-17).

- **notice** — the whole body (not just the head) eases to face the live
  player position, holds, eases back to rest. Reuses this file's own
  already-working `atan2(dx, dz)` aim formula (previously applied only to the
  head joint), now applied to the group's own yaw. Slower than the ambient
  head-turn (0.6 rad/s vs 1.1 rad/s) so it reads as a heavier, considered
  commitment rather than another head flick.
- **approach** — a short scripted translation toward the `counter` anchor:
  1.3 m at 0.6 m/s, direction captured once at call time (matches actor.js's
  own walk-to-target pattern: fixed target, not re-derived per frame). No
  pathfinding, no collision — "keep it small" per the brief.
- **settle** — turns away (yaw + π from wherever he currently faces, captured
  once at call time) and lies. The rig is two rigid parts with no legs (see
  pomple.js's own header on why no lying pose exists), so "lies down" is
  approximated as a lowered, flattened silhouette via `group.scale.y`
  (feet-anchored, so it settles toward the ground rather than shrinking in
  place).

A second `playBeat()` call before the first has finished interrupts it — state
is not reset to rest first, so a later beat continues easing from wherever the
previous one left off. This matters for approach → settle specifically: he
stays where approach left him, and settle turns him away from *there*, not
from his original spot, so the three beats read as one continuous visit rather
than three independent resets.

## The bug the render caught, before the gate existed

Manual verification (stepping frames by hand and reading state, before writing
any gate) found settle ending on a fixed 1.8s timer that could not finish a
near-π-radian turn at its own rate — Math.PI / SETTLE_TURN_RATE = 3.49s
worst case needed, only 1.8s given. Rendered and opened
(`beats-settle-end.png` from that run), it read as a partial twitch, not a
turn-away: he'd rotated about a third of the way and simply stopped. Fixed by
sizing `SETTLE_TURN_S` to the worst case (3.8s, with margin) and forcing an
exact snap to the target yaw when it elapses, regardless of how far the easing
had converged by then — the same pattern `notice`'s own release phase already
used. `NOTICE_RELEASE_S` was widened for the same reason (2.4 rad max reach in
the turn phase needs 4.0s to fully unwind at 0.6 rad/s, not the 1.5s a first
guess used) before this ever went into the gate.

This is the numeric-gate blind spot the brief warns about directly: a
before/after pixel-diff cannot tell a smooth ease from a pop at the very end —
both land at the same final state. It was caught by rendering and looking, not
by a check, and no check added here closes that gap (see "What this does not
prove" below).

## The gate: `scripts/smoke-mcgrots.mjs`, region `beats`, 7 checks

**Reaching `playBeat` without touching `main.js`.** The sequencer (G7h) is
live in `main.js` concurrently and it is out of scope for this unit. Its debug
object does not forward `playBeat` — every other pomple check already reaches
him via `scene.getObjectByName('pomple')`, so `playBeat`/`getBeat` are exposed
through that same group's `userData` (pomple.js's own addition, nothing in
`main.js` changed). The frozen interface itself is unaffected: `playBeat` is
still a real method on the object `main.js`'s `pomple.playBeat?.(name)` calls.

**The claim gated, per the brief:** a beat changes what is on screen,
materially, more than ambient behaviour alone does over the same span. Follows
the mcgrot region's F22 occlusion-gate technique (project Pomplé's AABB into
screen space, count pixels crossing a luminance threshold between two
screenshots) rather than the van/pomple regions' plainer "is content present"
check, because the claim here is about *change*, not presence.

**The control is measured in-page, immediately before each beat fires** — the
same window, ambient behaviour only — rather than a hardcoded floor, because
the ambient floor is not zero (idle bob and the pre-existing head-turn keep
moving him a little on their own) and it drifts slightly run to run.

### Two real gate bugs, both found by fault injection, not reasoned out in advance

The brief's instruction to fault-inject each check and watch it go red is not
a formality here — it found two genuine flaws in the gate's own design before
this landed.

**Bug 1 — mismatched window lengths.** The first version compared a 150-frame
(2.5s) control against 300-frame (5s) beat windows for approach and settle
("long enough to finish" was the only reasoning behind 300). Fault-injecting
settle (neutering both the squash and the yaw turn, leaving it a no-op that
still starts and ends cleanly) should have turned the diff check red. It
didn't — ambient head-turn drift alone, given twice as long to accumulate,
still cleared the 8pp margin with zero contribution from settle itself. A
false pass, caught only because the fault was injected and the check was
watched.

**Bug 2 — dilution from a beat that finishes early.** Equalising the windows
to close bug 1 surfaced a second issue on the *genuine, un-faulted*
implementation: at matched 300/300-frame windows, approach only read 21.3%
against an 18.4% control — a 2.9pp gap, under the 8pp margin, on code that
actually works. Approach's own motion finishes in ~140 frames (2.33s,
measured directly), so ~160 frames of a 300-frame window were pure
ambient standing-still, diluting his own signal with exactly as much noise as
the control had.

Fixed by sizing each beat's paired windows to its own measured completion time
rather than a round "long enough" number: notice 150/150 (already correct —
it measures the mid-hold moment, not full completion, by design), approach
150/150 (completes at 140f), settle 240/240 (`SETTLE_TURN_S` is 3.8s = 228f).
Re-verified stable across three repeated runs, <0.2pp variance:

| beat | beat diff | control diff | gap | margin required |
|---|---|---|---|---|
| notice | ~26.6% | ~16.8% | ~9.8pp | 8pp |
| approach | ~21.9% | ~12.3% | ~9.6pp | 8pp |
| settle | ~28.5% | ~17.0% | ~11.5pp | 8pp |

Notice and approach clear the margin with real but not generous headroom
(~1.6–1.8pp); settle clears it comfortably. Given the deterministic renderer
(no PRNG anywhere in this path, fixed dt, <0.2pp measured run-to-run
variance), this is a stable margin, not a flaky one — but it is thin enough
that anyone retuning the beat constants should re-measure rather than assume.

### Fault injection log (commit `02f5396` was the restore point for all three)

1. **`NOTICE_BODY_RATE` 0.6 → 0** (body never turns): `notice: the beat
   changes materially more of the screen…` → **RED**
   (confirms the primary claim-gate). The paired `notice: fully closes…`
   check stayed **GREEN** — a beat that never moves trivially satisfies
   "ended at rest", so that check is a corroboration for a working beat, not
   an independent detector on its own. Restored via `git checkout --
   src/mcgrots/pomple.js`, reconfirmed green.
2. **`APPROACH_DIST` 1.3 → 0** (fires, travels nowhere): both `approach: the
   beat changes materially…` and `approach: actually moves a short, bounded
   distance…` → **RED**. Restored, reconfirmed green.
3. **settle's yaw/squash logic stripped to a no-op** (bt/timer kept so it
   still starts and ends cleanly): both `settle: the beat changes
   materially…` and `settle: turns away…` → **RED**. This is also the run
   that caught Bug 1 above — the diff check was still green under the
   *original* mismatched-window gate with this exact fault, which is what
   forced the window-sizing fix. Restored, reconfirmed green after the fix.

Full suite after every restore: 93/93, no regressions in the 7 pre-existing
pomple checks.

## What this does not prove

Following this project's own convention of naming a gate's blind spots
explicitly (see `scripts/smoke-mcgrots.mjs`'s own header, `AGENTS.md`'s
"numeric gates cannot see a bad picture"):

- **Smoothness.** The diff check compares before vs. after; it cannot
  distinguish an eased motion from an instant pop at the very last frame
  landing at the same final state. This is exactly the class of bug the
  settle fix above corrects for — the safety-net snap that guarantees a
  correct *final* state also means a future regression that turns the easing
  back into a late pop would not be caught by any check here. Only rendering
  and opening the capture would catch it, which is why this write-up
  includes the captures below rather than relying on the numbers alone.
- **Interruption correctness.** The gate fires each beat to completion,
  sequentially, one at a time. It does not test firing a second beat while
  the first is still running (the "no reset first, ease from wherever" design
  described above) — that path is exercised implicitly by approach following
  notice and settle following approach in the gate's own sequence, but there
  is no check that specifically proves the interrupt semantics.
- **The real sequencer's own cue timing.** This gate drives `playBeat`
  directly; it says nothing about whether G7h's sequencer fires it at the
  right moment in the ten-minute visit, or with the right anchor underneath.

## Judgement: would a viewer notice?

Captures: `docs/smoke/captures/mcgrots/g0/beats-notice-hold.png`,
`beats-approach-end.png`, `beats-settle-end.png`, all from `kerb` (5.36m out —
the same distance the existing pomple region's own contentRows check already
uses as "close enough to read detail").

- **Notice: yes, clearly.** The hold frame shows him turned to face the
  camera near-frontally, a visibly different silhouette from his usual
  three-quarter/side profile beside the van. Reads as intent, not idling.
- **Approach: yes, but modestly.** The end frame shows him visibly closer to
  McGrot/the van than his rest spot — a real, legible step. At 1.3m it is a
  small move; a viewer would read "he came over," not "he crossed the
  street," which matches the brief's "keep it small."
- **Settle: weak.** This is the one I'd flag as not fully working as
  designed. At `kerb` distance the flattened, turned-away shape reads mostly
  as "he got smaller," not "he lay down" — the two-part rig gives it very
  little to work with, and scale-only squash doesn't add the visual cues
  (splayed legs, lowered head silhouette distinct from a standing one) that
  would sell "lying" rather than "shrinking." The turn-away half of the beat
  reads fine on its own. If this needs to be stronger for the actual visit,
  the options are: squash harder (currently 30% of height), hold the final
  pose from a closer/lower review angle than `kerb` gives by default, or
  accept it as a first draft per Dan's standing direction ("first drafts
  meant to be watched") and revisit once there's a full ten-minute visit to
  judge it inside rather than in isolation.

## Scope note for the roadmap / VALIDATION.md

Not edited here — `docs/MCGROTS-VALIDATION.md` belongs to the sequencer unit
landing in parallel, and `docs/MCGROTS-ROADMAP.md`'s shape is the
orchestrator's. Worth folding in: § 9's fifth requirement now has a hook and
three beats; settle's weak legibility at distance is the one open item before
calling it fully closed.
