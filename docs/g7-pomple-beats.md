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

## G7n follow-up: gated at the wrong anchor, and a real isolation bug

The section above judged all three beats from `kerb`, because that is where
the gate fired all three. It shouldn't have: visit.js's cue table only fires
`notice` at `kerb` — `approach` fires at `far`, `settle` at `counter`. Two of
three gates were measuring a picture the player never sees, and the mismeasure
had a visible symptom: `settle`'s margin (0.8pp) was tuned to `kerb`'s own
numbers and flaked (6/7) even in isolation, since the true gap there hovers
right on the bar.

**Fix:** each beat now snaps to the anchor named in `visit.js`'s own `CUES`
table (read live via `window.__mcgrotsDebug.visit.cues()`, not a second
hardcoded copy), and margins were re-derived from scratch by measurement —
G7i's kerb numbers do not carry across, because camera distance changes how
many screen pixels the same pose change sweeps.

| beat | anchor | beat % | control % | gap | margin |
|---|---|---|---|---|---|
| notice | kerb (unchanged) | ~32.3-32.4 | ~22.6-22.8 | ~9.5-9.8pp | 4pp |
| approach | far | ~26.1-26.2 | ~20.6-20.8 | ~5.3-5.6pp | 3pp |
| settle | counter | ~23.2-23.3 | ~18.6-19.3 | ~4.3-4.9pp | 2.5pp |

Both of the brief's predictions held: approach's gap shrank once measured at
its own, farther anchor (kerb's old 4pp margin would no longer clear it with
comparable headroom); settle's gap grew once measured at its own, closer
anchor — its old kerb-gated 0.8pp scrape was an artefact of the wrong anchor,
not a property of the beat.

**The isolation bug was bigger than the clock.** `--only=beats` alone used to
read different (better) numbers than the full suite gave it. The actual cause:
the `style` region, which runs immediately before `beats` in the file,
navigates the shared page to `?body=skinned&archetype=rab` for its own checks
and never navigates back — `beats` inherited that page state whenever it ran
after `style`, and never saw it in isolation. Measured directly: with that
state inherited, notice's own ambient-only control window read 4.2% instead of
its isolated ~22.6%, and settle's gap shrank from ~4.4pp to ~1.7pp — enough to
fail. `beats` now re-navigates to the plain default page as its first step
(the same sequence the suite's own boot uses), on top of re-pinning the rota
clock and re-snapping the anchor before every beat rather than once for the
whole region. Both isolated and full-suite runs now agree.

**A genuine gate-design finding from fault injection.** Stripping settle's
yaw/head-drop logic to a no-op (bt/timer kept, so it still starts and ends
cleanly) correctly turned the geometric pose check red (Δyaw stayed 0.000,
headPitch never moved) — but the diff check stayed green (beat=25.9%,
control=19.2%, comfortably over the 2.5pp margin). The reason: pomple.js
deliberately suppresses ambient head-tracking while `beat === 'settle'` (a
real part of the design, independent of `SETTLE_TURN_RATE`/
`SETTLE_HEAD_DROP` — see the module's own comment, "reading as losing
interest rather than still watching while sinking"). That suppression alone
produces enough visible motion (headYaw recentring) to satisfy the diff
check's actual claim ("the beat changes the screen more than ambient alone"),
even with the beat's own turn+drop code fully inert. This mirrors G7i's own
finding for `notice` ("a beat that never moves trivially satisfies 'ended at
rest'... a corroboration for a working beat, not an independent detector on
its own") with the roles reversed: here the geometric check is the
independent detector, and the diff check is corroboration only — it does not,
on its own, prove settle's core turn+drop mechanism is intact. Not treated as
a gate bug to fix, since the diff check's claim stays literally true; recorded
here as what it does not prove, per this doc's own convention below.

### Judgement: would a viewer notice, at the correct anchor?

Captures regenerated at each beat's own anchor:
`docs/smoke/captures/mcgrots/g0/beats-notice-hold.png` (kerb),
`beats-approach-end.png` (far), `beats-settle-end.png` (counter).

- **Notice @ kerb: modest, not clearly.** Same anchor and capture technique
  G7i judged "yes, clearly" from, but viewed at native gameplay scale (no
  crop/zoom) he reads as a small, indistinct shape near McGrot — a
  perceptible change in silhouette is there if you already know to look for
  it, less unambiguous than the original write-up suggested. Not a
  regression (the anchor is unchanged); a more conservative read of the same
  picture.
- **Approach @ far: I could not clearly see him move here.** G7i's "yes, but
  modestly" verdict was made at `kerb`, a much closer anchor than the one
  approach actually fires from. At native scale in `beats-approach-end.png`
  he is a tiny dark speck beside the stall, not confidently readable as a dog
  at all, let alone as having taken a step. The diff gate still clears its
  margin with real headroom (~5.3-5.6pp gap against a 3pp bar), so this is
  not a case of "cannot be measured as visible" — it measures as visible.
  But a numeric pass and a legible picture are different claims, and at `far`
  they diverge: the number says yes, a cropped/zoomed close-up (below)
  confirms the pose does change, and an honest glance at the actual frame a
  player would see says the change is easy to miss.
- **Settle @ counter: clearer than the old kerb-gated read.** Counter is the
  closest of the three anchors (4.92m vs kerb's 5.61m), and at native scale
  the turned-away, head-dropped shape is legible as a real pose change — more
  so than G7i's original "weak... reads mostly as 'he got smaller'" verdict,
  which was written against the older scale-squash implementation and the
  wrong (farther) anchor besides. The head-drop replacement (superseding the
  scale-squash this doc originally described) reads as "turned away, head
  down," not unambiguously "lying down" — the two-part rig still limits what
  the pose can sell — but it is a clear, real change, not a shrink.

Net: of the three, `approach` is the one whose case for staying in is weakest
on a straight look at the frame, despite clearing its numeric bar. Not cut
here — the brief's named criterion is whether a beat "can be measured as
visible," and it can — but worth the orchestrator's judgement call on whether
"clears the pixel-diff bar" is sufficient going forward, or whether a beat
firing from an establishing-wide anchor needs a stronger authored motion (a
longer approach distance, a body-turn accompanying it) to read at the
distance it actually plays from.

## Second follow-up: approach moves from `far` to `counter`

Dan's ruling: the fault was the anchor assignment, not the beat. `far`
(6.71m) is the most distant of the five anchors — nothing Pomplé does was
going to read from there. Rather than cut `approach`, `visit.js`'s cue table
was edited to move it: the `beat: 'approach'` field came off the `far` silence
row and onto the free 56.0s `counter` silence row (line 72), which carried no
beat before. Two beats now sit at `counter`, none at `far` — deliberate, since
§ 9 asks that Pomplé be noticed, not evenly distributed.

The gate needed no code change to follow this — `anchorForBeat` already reads
`visit.js`'s own `CUES` table live via the debug API, so it picked up
`counter` automatically. Confirmed rather than assumed.

**Margin re-derived from scratch at `counter`** (not carried over from `far`):
15 repeat runs, beat~19.4% every time, control~15.6-15.7%, gap 3.7-3.8pp,
near-identical run to run. `APPROACH_MARGIN_PP` set to 2 (down from `far`'s
3), real headroom below the observed floor.

**Rendered at native scale, no crop or zoom** — the brief's own correction to
how this unit reviewed `far`, where a cropped/zoomed close-up made a barely-
visible beat look acceptable. Compared the rest pose (`approach-before.png`,
captured immediately before `playBeat('approach')` fires) against
`beats-approach-end.png`: at rest he sits as a small, part-shadowed shape
tucked beside McGrot's stall; after the beat he has moved right along the
kerb edge, clear of the stall's shadow, legible as a separated dog shape with
visible legs and ears — a real, visible displacement, not a shrink or a blob
shuffling in place. This reads. The `far`-anchor problem was specifically
about distance, not about Pomplé's model or the beat's motion being
inherently too subtle — moving him to the closest-but-one anchor (4.92m,
same as `settle`) fixed it.

Fault-injected `APPROACH_DIST` → 0 again at the new anchor: both approach
checks went red (diff: beat=14.2% vs control=15.6%, now BELOW the ambient
floor since a beat that travels nowhere is slightly less varied on screen
than ambient alone over the same window; distance check: travelled=0.00m).
Restored, reconfirmed 7/7 isolated, 130/130 full suite.

Beat kept, not cut. `docs/MCGROTS-VALIDATION.md`/`docs/MCGROTS-ROADMAP.md`
updates are the orchestrator's, per scope — worth folding in: § 9's beat
requirement is now closed on all three beats with no open legibility
concern, `approach` and `settle` both fire from `counter`, none from `far`.

## Third round: approach moved the wrong way, and no gate could see it

Neither of the two rounds above caught this: `approach` was retreating from
McGrot, not approaching him. Measured directly on the live scene before any
fix — distance to McGrot 2.255m → 3.425m, distance to camera 7.793m →
8.017m, at `counter`, the anchor this beat actually plays from. The pixel-
diff check and the travelled-distance check both passed throughout, because
neither has any notion of sign — a retreat of 1.3m and an approach of 1.3m
read identically to both.

**Root cause:** `APPROACH_TARGET_LOCAL`, the fixed local-space point Pomplé
walked toward, was chosen by an earlier follow-up (`aa3c47e`) purely to
clear McGrot's silhouette from the *old* `kerb` camera — an occlusion fix,
not a direction one. Walking toward it moved him away from McGrot in local
x. This is the project's own documented trap, named verbatim in AGENTS.md:
reasoning about direction from an anchor-derived formula rather than walking
the actor and watching where it goes.

**Fix, confirmed by measurement rather than trusted on the new formula:**
`pomple.js` now aims `approach` at `mcgrotWorld` — McGrot's own live target
point, already computed in the module for the ambient attention system —
instead of a second hand-picked point. Probed the built scene directly:
distance to McGrot now closes 2.255m → 0.955m, camera distance 7.793m →
7.102m. `notice` was checked the same way, independently, rather than
trusted from reading the code: facing-error to the live player goes from
1.057 rad to exactly 0 rad after the turn phase — converges onto the player,
not away. No bug there.

**The check that was missing:** `approach: closes distance to McGrot, not
opens it`, with a named control (the same window, no beat fired — position
only ever moves inside an active beat, so this control reads an exact,
not approximate, zero drift). Fault-injecting an inverted direction turns
this check red while the pixel-diff check stays green — direct proof the
old checks genuinely could not see the sign of the motion, and that this
one can.

**A second, structural bug the direction fix exposed.** Fixing the
direction didn't just need a fresh margin — it broke both existing diff
checks outright: approach's gap collapsed to exactly zero (beat=control=
15.6%) and settle's went negative (beat 13.8% < control 15.2%). Investigated
rather than patched with a lower margin: measured Pomplé's own on-screen
bounding box before and after each beat and found the old technique —
`union(before, after)` computed fresh for each pair — dilutes the beat's own
reading whenever its rect grows much larger than the control's near-static
one. Measured 2.86× for approach (a real translation now, where before it
was a smaller apparent motion) and ~1.7× for settle (which inherits a
different starting rect now that approach ends him elsewhere). A constant
number of true-positive pixels against a 2.86×-larger denominator reads as
a much smaller fraction — pure measurement dilution, independent of
lighting. Fixed by using one FIXED rect (the union across all three shots in
the beat) for both the control and beat `diffFraction` calls, in both
`approach` and `settle` — the same fix in spirit as G7i's own window-LENGTH
equalisation (documented above), applied to screen AREA instead of TIME.
Restored real, deterministic signal: approach gap 9.6pp, settle gap
4.8–4.9pp, both stable across 15 repeat runs with the fix in place.

**Rendered at native scale, no crop or zoom, per this round's explicit
correction** (a cropped/zoomed read is what made the wrong-direction version
look better than it was). Compared a fresh rest-pose capture against
`beats-approach-end.png`: he visibly shifts left, ending up beside McGrot's
leg rather than out on the open kerb edge. The position shift itself reads
without magnification — but the end pose is less crisply lit than the
wrong-direction version was, since correctly walking toward McGrot also
walks him into the stall's own shadow. A real trade-off, not a regression:
the wrong-direction version was, by coincidence, better lit precisely
because it was wrong. On balance this still reads — a distinct shape
visibly closer to McGrot, not a shrink or a blur into shadow — so the beat
stays in.

Fault injection, all confirmed and restored: inverted direction → the new
directional check red, pixel-diff check unmoved (proving the old check's
blindness directly); `APPROACH_DIST` → 0 → all three approach checks red
(diff, direction, travelled-distance); settle's yaw/head-drop stripped to a
no-op → pose check red, diff check green (the same head-tracking-suppression
confound already documented above, re-verified under the new rect
technique, not a new issue).

`npm run smoke:mcgrots -- --only=beats`: 8/8 (one check added since the
previous round), run 8x in a row. Full suite: 131/131.
