# McGrot's — what the gates prove, and what they do not

Sibling of `docs/VALIDATION.md`, which covers the paused street. This one
covers `scripts/smoke-mcgrots.mjs` only.

```bash
npm run smoke:mcgrots               # everything, ~1.3s
npm run smoke:mcgrots -- --only=camera
node scripts/mcgrots-grade.mjs      # lighting sweep, 20 pairs x 5 shots
npm run dev:mcgrots                 # then open /mcgrots.html
```

Renderer is `scripts/launch.mjs` — the same chromium/metal path the street
uses, shared deliberately so the two games' captures are comparable.

---

## G0 — scaffold

25 checks in the regions below (`npm run smoke:mcgrots -- --only=boot,camera,anchors,van,seat`);
the full suite also carries a `statue` region landed alongside G3a,
documented separately. Captures land in `docs/smoke/captures/mcgrots/g0/`
(gitignored, regenerated every run).

| Region | Check | What it proves |
|---|---|---|
| boot | 41 building footprints | The Foot's real OSM massing loaded, at `MASSING_RADIUS` 80 m |
| boot | five anchors resolve | `counter`, `wall`, `kerb`, `far`, `back` |
| boot | `body.booted` | Boot ran to completion |
| boot | console clean | No errors or page exceptions through boot |
| camera | contrast floor | Every shot has luminance stddev ≥ 8 |
| camera | mean band 18–200 | No shot grossly crushed or blown |
| camera | **< 12% under luma 12** | No shot is mostly black |
| camera | **< 2% over luma 245** | No shot is mostly blown |
| camera | distinct shots | Each anchor has its own camera position |
| anchors | walking arrives | Requesting a spot ends at it, parked |
| anchors | walk is not a teleport | Sampled mid-walk positions are between endpoints |
| anchors | sitting anchors sit | `wall` ends in the `sit` state |
| anchors | console clean after driving | No errors from the anchor transitions |
| anchors | a walk eases the camera (F6) | Frame-1 camera move is <10% of the total, against a snap-path control |
| anchors | the snap control still cuts | Frame-1 camera move is >95% of the total on the snap path |
| anchors | the eased camera arrives exactly | <0.01m from the destination anchor's eye once the actor stops |
| van | occupies a sensible fraction of the frame (G3a) | 0.3%-70% of the window at every one of the five anchors |
| van | holds rendered content, not flat background | Luminance stddev exceeds the flattest of four corner patches by >10 |
| van | console clean after driving the van region | No errors from the five snaps |
| seat | the seated knee sits forward of the hip (G3e, F10) | Knee-minus-hip, projected on the actor's facing, > 0.15 m, `wall` and `kerb` — the check that would have caught F1's thigh sign |
| seat | standing knee stays near the hip (control) | Same projection, standing: within 0.05 m of zero — no thigh swing, distinguishing sit from stand |
| seat | the ledge is centred laterally and offset behind the anchor (G3e, F8) | Lateral distance to the ledge's own `Box3` centroid ≤ 0.10 m; along-facing distance > 0.15 m (measured ~0.325 m) |
| seat | the seated hip sits at or just above the ledge top | Hip height minus the ledge's `Box3` top is within [-0.02, 0.15] m, `wall` and `kerb` |
| seat | standing falls outside the seated height band (control) | Same measurement, standing: outside [-0.02, 0.15] m (SEAT_DROP's ~0.22 m gap) |
| seat | console clean after driving the seat region | No errors from the eight snaps |

### The crush gate, and why it exists

**It was added because the contrast floor passed a frame that was 53.9% black.**

G0's first render lit the ground at RGB (13,9,4) — legacy-scale light
intensities under three.js physical units, plus a 12.6° sun giving a flat
ground `sin(12.6°) = 0.22` of it. Over half the establishing frame sat under
luminance 12. The suite was green: a frame that is half black and half brown
has a stddev of 34.6, comfortably over the floor of 8, and a mean of 31.6,
comfortably inside the band.

Mean and stddev are both blind to a bimodal frame. The crush gate measures the
thing that actually went wrong.

**Falsified 2026-08-10.** Dropping the sun to 0.4 and the hemisphere to 0.2
turned it red while the contrast floor stayed green — which is the point, and
is the evidence that it catches something the older check cannot. Restored
from the commit immediately after.

### F6 — the camera eases instead of cutting, and how that is gated

**Found by the G2 phase gate 2026-08-12, fixed same day.** `goTo()` used to
set the destination anchor as `current` before the walk began, and
`placeCamera()` read `current.camera` every frame regardless of whether the
actor had moved — so the camera cut to the destination shot on frame 1 of a
walk while the actor was still leaving the source. Measured before the fix,
one `goTo('far')` from `counter`: camera moved 10.324m on frame 1, actor
moved 0.020m. Fixed by lerping the camera between the source and destination
anchors' `eye`/`look`, weighted by `smoothstep(actor.progress)` — see
`docs/MCGROTS-ROADMAP.md` § 10 F6 for the full account.

**Gated as a fraction of total camera travel, not an absolute distance.**
Anchor pairs sit at different separations (`back`→`far` measures 2.666m of
camera travel; another pair would measure something else entirely), so a
fixed-metre threshold would be tuned to one pair and silently wrong for
another. The walk arm asserts frame-1 movement is under 10% of the total.

**The control is the snap path, not the walk arm with the fix disabled
through the same code.** `goTo(id, { snap: true })` is a genuinely separate
branch — the boot placement and any future panel-change cut depend on it
staying a hard cut — so measuring it alongside the walk arm is on-vs-off
across two branches that actually differ, the isolation the street's
acceptance gates got wrong twice (their flag gates booted twice and
attributed a difference to the flag, sound only because nothing else
differed). Here the snap arm asserts frame-1 movement is over 95% of the
total, matching pre-fix behaviour exactly — because for the snap path,
nothing changed.

**A third check asserts arrival, not just motion.** A camera that eases
smoothly but never quite resolves — an easing curve that asymptotes, or a
`progress` that stalls short of 1 — would pass the first two checks and
still be wrong. This one requires the camera to land within 0.01m of the
destination anchor's `eye` once the actor has stopped walking.

**Falsified 2026-08-12.** `previous = from` (the line that lets
`placeCamera()` find an anchor to ease from) forced to `previous = null`,
collapsing the walk branch back to the pre-fix cut. The walk-arm check went
red (frame-1 movement back to 100% of the total, identical to the un-fixed
measurement); the snap-arm check and the arrival check both stayed green
throughout, confirming the injection touched only the branch it targeted.
Restored from the commit immediately after.

**What this does not prove:** that the eased motion looks good, or that
`smoothstep` is the right curve rather than merely a reasonable one with soft
ends. That judgement is Dan's, from opening the re-run
`npm run styleshots:mcgrots` sheets — which now carry the actor in all three
motion columns at `counter` and `wall`, the two anchors the phase gate found
worst (previously missing the actor in two or three of three columns at
each).

### G3a — the van, the price board and the ground, and how visibility is gated

**Landed 2026-08-12.** `src/mcgrots/van.js` replaces the G0 blockout box with
the real van (a six-panel shell around a real serving opening, reused from
`src/gullet.js`'s proven proportions — read, not imported, per the coupling
rule between the two games), a price board with freshly authored text (a
price board is not a comic, so the verbatim rule does not bind it), and a
kerb/pavement ground patch. Style is settled at S2 (Dan, 2026-08-12); nothing
here is tuned against a different look.

**The claim that matters is visibility, not existence.** A check that
`scene.getObjectByName('van')` is non-null tests that a function ran, the
same shape of gap F4 and F5 both slipped through — F4 shipped a fully green
style suite while the actor rendered solid black, and F5 shipped two fully
green S4 checks while the panel held nothing. So the `van` region measures
the actual rendered frame at each of the five anchors, not the scene graph.

**Method:** the van's world-space AABB (`THREE.Box3().setFromObject`) is
projected through each anchor's LIVE camera (after a real `snapTo`, not a
hand-computed ray) to get a screen rect, clamped to the viewport. Two things
are then measured inside that rect, on the real screenshot: its area as a
fraction of the frame (0.3%–70% at every anchor — measured: `counter` 57.6%,
`wall` 14.3%, `kerb` 12.2%, `far` 6.5%, `back` 7.5%), and its luminance
stddev, which must exceed a control by a margin of 10.

**The control went through one redesign before it was trustworthy.** The
first version used a fixed sky strip across the top 8% of the window — flat
by construction, since `scene.background` is one colour and nothing stands
in it, or so the reasoning went. Measured, it was wrong at three of five
anchors: the massing's roofline crosses that strip at `counter`/`wall`/`kerb`
(the closer anchors, where the buildings fill more of the frame), so the
"sky" patch was actually half sky and half building edge, and a hard edge
reads as high variance under this exact metric — 41–45 stddev, the same
order of magnitude as the van itself, which would have made the check pass
for the wrong reason everywhere it mattered. Fixed by not assuming where the
flat region is: four small corner patches (6%×5%) are sampled per shot and
the flattest of the four is taken as the control. It reads 0.0 at every
anchor once mis-measurement is ruled out, against a van reading 40.3–53.1.

**Falsified 2026-08-12.** `scene.add(group)` commented out for the van's own
group (leaving the ground dressing in place, since that is a separate scene
child). Both checks went red — area 0.0% and content 0.0 at all five
anchors — while the `statue`, `anchors`, `camera` and `boot` regions and the
van's own console-clean check stayed green, confirming the injection reached
only what it targeted. Restored from the commit immediately after.

**What this does not prove:** that the van looks GOOD, or that the price
board is legible at every distance. Opened `docs/smoke/captures/mcgrots/g2/`
sheets myself, all five anchors, under S2: the van reads clearly with
legible price-board text at `counter`, `wall`, `kerb`, and `back`'s approach
and mid-stride columns. At `far` (every column) and `back`'s arrived column
it is smaller — still a recognisable box-with-hatch-and-sign silhouette, but
the price text is not legible at that distance. That is Dan's judgement to
make, not this gate's; the AABB-fraction check would pass either way, since
"a sensible fraction of the frame" and "the price board is readable" are not
the same claim. F1's known bad seated pose is visible at `wall` and `kerb`,
per G3c's own scope — left alone here.

### G3c — the real ledge, and the seated pose that stands on it

> **The pose half of this entry did not hold.** The ledge is real and
> `SEAT_HEIGHT`'s derivation was a genuine catch. But F1 was reopened by the G3
> phase gate on 2026-08-12 — the legs extend backwards and the thighs are
> buried in the capstone. The refutation below is kept, corrected in place,
> because how it failed is the useful part.

**Landed 2026-08-12.** Closed the gap the G3 plan missed: neither G3a nor
G3b replaced G1's placeholder sitting box (`main.js:143`), so F1's seated
pose still had no real wall to be tuned against — the entire reason it was
deferred to G3 in the first place.

**Root cause of F1's first defect ("nothing guarantees the hip lands over
the seat"), measured, not assumed: the rig's `hips` bone has ZERO local x/z
offset from the actor's group origin, in any pose.** `getWorldPosition` on
`hips` at full sit and at rest reports the same `x`/`z` as the actor's group
position, always — the thighs swing the knee and foot forward as children,
but the hip joint itself never translates. G1's placeholder ledge was set
0.3m behind the standing spot, a number chosen independently of this and
therefore wrong by construction. Fixed: the ledge is now centred exactly on
the anchor.

**`SEAT_HEIGHT` was stale twice over, and the second error is the more
instructive one.** Its comment cited `SEAT_DROP` as 0.26 — corrected to 0.22
in `f0982fc`, comment never revisited. But even a corrected hand-derivation
("0.24 unit × 1.72m height" = 0.413m) does not match what the rig produces,
because of how the group hierarchy actually composes: `actors/skinned.js`'s
`SEAT_DROP` offset is applied to `body.group.position.y`, and that SAME
group is the one `actor.js` scales by `height` — so the offset lands in the
PARENT's units (already metres: a real 0.22m of drop) while the `hips`
bone's own rest position (0.46, rig-local) is nested one level DEEPER inside
that scaled group, and DOES get the ×1.72. Two numbers that look like they
are in the same space are not. Measuring the live bone was the only way to
the real number: `getWorldPosition` on `hips` at full sit reads **0.5712m**,
now `SEAT_HEIGHT`.

**F1's second defect (legs read as folding under, not forward) was recorded
here as measured and REFUTED. That was wrong, and the refutation is kept
because the way it failed is the instructive part.**

What G3c did, per the brief's explicit warning that the diagnosis was reasoned
rather than checked: rendered the walk cycle from what it took to be a true
side profile (a review camera positioned along the actor's direction of travel
gives a front view, not a side one — so the actor was walked perpendicular to
the offset axis to get a genuine profile) at the thigh's peak swing
(`rotation.x` = `LEG_SWING`, 0.55 rad), read the leg as swinging FORWARD, and
made no sign flip.

**The camera was on the wrong side of the figure.** It was placed with the
STREET's facing formula, `(-sin yaw, -cos yaw)`, which `CLAUDE.md` documents
and which is correct for the street. McGrot's actor faces `(+sin yaw, +cos
yaw)`. The shot believed to be of the figure's left was of its right, so
forward read as backward and the check confirmed the opposite of the truth.

Re-measured by the G3 phase gate against DIRECTION OF TRAVEL, which needs no
convention: correlation between `thighL.rotation.x` and the knee's along-travel
offset is **−1.000**; positive swings the leg backward. Independently
re-confirmed by the orchestrator on 2026-08-12 — travel direction dotted with
`(+sin yaw, +cos yaw)` gives exactly **1.0000**, and at full sit
`thighL.rotation.x = +1.5466` puts the knee **0.3727 m behind** the hip.
**F1 is reopened.** See `docs/MCGROTS-ROADMAP.md` § 10 F1.

**The lesson worth keeping:** a rendered check is only as good as the frame of
reference that placed its camera, and this project has two opposite ones. A
direction derived from travel is self-verifying; one derived from a yaw formula
copied out of the other game is not.

**F1's third defect (torso huddle).** The bone hierarchy has no separate
pelvis: `hips` is the root, and is the direct parent of BOTH `spine` and the
two thighs (measured via the live skeleton's parent chain, not assumed from
naming). Rotating `hips` therefore moves the whole upper body AND re-bases
the thighs' own already-correct rotation, which is set relative to `hips`.
Added `hips.rotation.x = -sit * 0.15` and compensated both thighs by
`+ sit * 0.15` so their WORLD-space angle is unchanged; only the spine's
world angle moves, since its own local rotation is untouched and is now
measured from a pelvis that has tipped back underneath it. Re-rendered and
compared: a real but modest improvement in torso uprightness, not a dramatic
one — recorded as such rather than claimed as a full fix, per the
"half-fixed reported as fixed" failure the brief named explicitly.

**Gate: the seated hip's position against the ledge's own `Box3`, at both
`wall` and `kerb`, from the shipped scene** — `THREE.Box3().setFromObject`
on the actual mesh group `main.js` builds and `getWorldPosition` on the
actual skeleton bone, the same technique the `van` region (G3a) uses for the
same reason: a helper that recomputes "where the ledge should be" from the
same constants the product uses would pass even if the product's own
placement code had a sign error, since it would be checking the constants
against themselves.

**The control is standing at the same anchor** — a real, separate branch
(`setActorState('idle')` instead of `'sit'`), not the sit arm with the fix
toggled off through shared code. It needed one fix before it worked at all:
`d.snapTo()` runs the full `goTo(id, { snap: true })`, which sets `current`
to the anchor — and `main.js`'s `frame()` re-asserts `'sit'` on every single
frame while `current.sit` is true and the actor isn't walking ("Park state
resolves on arrival, so a sitting spot only sits once reached"). That
silently stomped a forced `'idle'` in the first version of this control,
which measured the SAME hip height for "standing" as for "seated". Fixed by
positioning the actor directly (`actor.snapTo(x, z, yaw)`, bypassing `goTo`
so `current` never becomes the anchor) — after which the control correctly
reads the rest-pose hip height (~0.79m) against the ~0.57m ledge.

**The check itself needed a redesign before its own fault injection worked.**
The first version asserted footprint containment: is the hip's x/z anywhere
inside the ledge's box. Restoring the old independent `-0.3` offset did NOT
turn it red — the ledge is 0.55m deep plus a 0.05m capstone overhang each
side, generous by design (a seat you can be anywhere along), so a 0.3m
mislocation shifts the box's centre by 0.3m but still leaves the (unmoved)
hip inside the now off-centre box. Containment proved "somewhere on the
ledge", a weaker claim than F1's own diagnosis. Redesigned as distance to
the ledge's CENTRE (10cm horizontal tolerance, 6cm vertical against the
cap): the same injection now goes red at both anchors, 0.3m clearly
exceeding 10cm, while the standing control stays green throughout. Restored.

**F4's torso-patch gate needed a threshold adjustment, not a redesign, as a
side effect of this pose change.** The `kerb` sit pose's fixed height-fraction
sampling window now catches slightly less internal contrast — measured 3.0
before this unit, 1.8 after, both against a real, lit, correctly cel-shaded
figure (the capture was opened, not just the number read). The F4 fault
itself is unrelated to pose (it zeroes the geometry's normals) and reads
exactly 0.0 regardless of which pose is on screen — re-verified by injecting
it again after lowering the floor from 2 to 1: still exactly 0.0, comfortable
margin preserved, restored.

**F2 (feet slide), judged rather than fixed, per the brief's own suggested
cheap-and-good outcome.** Compared consecutive walk frames approaching `wall`
at the anchor's real camera distance: the actor's legs occupy roughly 15-20
pixels there, and no sliding artefact is distinguishable from ordinary stride
motion at that scale. G1's review camera, where this fault was originally
found, sits considerably closer than any of the five anchors. Closed as "does
not read at these distances" — no IK built. This is a judgement, not a
measurement, and should be re-taken if a future unit moves the camera
markedly closer.

**What this does not prove:** that the pose looks like a person sitting
naturally, only that its numeric hip/ledge relationship is now correct.
Opened `wall.png` and `kerb.png` (`docs/smoke/captures/mcgrots/g2/`,
`arrived` column, S2) myself: the seated hip visibly rests ON the wall's
capstone rather than hovering in front of it, and the legs extend forward
and down toward the ground rather than folding back underneath — both a
genuine improvement over the pre-G3c capture. The torso lean is somewhat
better, not dramatically so; said plainly rather than rounded up.

### G3d — the five composed shots and the fixed hour

After G3c landed, the final S2 review rendered each anchor with
`node scripts/mcgrots-shot.mjs --body=skinned --archetype=rab --look=aerial
--anchor=<id> --frames=600 --shot=/tmp/g3d-final-<id>.png`; all five PNGs were
opened. The derived camera rule was retained. `counter` is a deliberately
close service shot: the van dominates, but its price board is legible and the
actor is present. `wall` is a readable seated-ledge composition with the van
in the middle distance and Victoria at right. `kerb` is another readable
seated composition with the van carrying the frame; Victoria is out of view.
`far` is the best balanced three-subject wide, with the actor foreground, van
centre and Victoria right. `back` is the cleanest establishing wide: the van
and statue are separated and the former empty middle is gone. The actor's
rear remains very dark at rest in all five; the known forward hunch is still
visible but was not worsened by these framings.

`npm run styleshots:mcgrots` then regenerated the five S2 review sheets, and
`counter.png`, `wall.png`, `kerb.png`, `far.png` and `back.png` were opened.
The motion rows agree with the still judgement: close anchors are close, while
`far` and `back` provide the useful wides. The S4 panels contain scenes; no
new panel or capture fault appeared.

The fixed hour remains `LIGHT.sunIntensity=6`, `hemiIntensity=3`,
`sunAzimuth=-2.1`, `sunAltitude=0.34`.

> **The numbers in the next paragraph did not reproduce, root-caused and
> corrected 2026-08-12 — F12, closed below.** The committed `mcgrots-grade.mjs`
> had no `--look` flag and never called `setLook`, so it swept the UNSTYLED
> look, not S2, giving frame mean 72.2–72.5 at 6/3 instead of the recorded
> 105.1. The script now takes `--look=<id>` (printed in its own header) and the
> paragraph below is the S2 re-run under it. **The decision — keep 6/3 —
> survives**; the old numbers are left in place with this note rather than
> deleted, so the correction has something to point at.

`node scripts/mcgrots-grade.mjs --look=aerial` was re-run against the dressed
pitch under S2, on the current pitch — the statue, the seated pose and the
ledge offset have all changed since G3d, so this is not the same scene the
original number described. Its 27-row sweep reports current 6/3 (albedo 1) at
frame mean 105.6, cast mean 32.3 and 0.00% blown (range across albedo
0.7/1/1.35: mean 105.4/105.6/105.8, cast 15.8/32.3/32.6); the pictured
`sun 12 / hemi 3` experiment raised frame mean to 135.3 at the same albedo
while cast mean (32.2) came out essentially unchanged from 6/3 — no readability
gain for a substantially brighter, washed-out frame — so it was rejected on
the same grounds as before. The frame-mean figures land close to the original 105.1/134.5 despite the
pitch changes; the 6/3 cast figure does not (17.2→32.3), which the brief
anticipated as expected drift, not a discrepancy to chase. The previously
measured camera-side fill moved cast mean only
8.3→11.0 and remains rejected. This is the best-available fixed grade, not a
claim that the asset is solved.

The existing contrast-floor picture gate and G3a van-fraction gate are the
named controls. Composition is a judgement and remains deliberately ungated;
no numeric ranking or taste gate was added, so no fault injection applies.

### G3e — the seated pose, fixed with the leg sign and the ledge offset together

**Landed 2026-08-12.** F7 and F8 are one unit — the sit pose can only be
judged once — landed in one commit with F10's replacement gate.

**F7, the leg sign.** `actors/skinned.js`'s thigh/shin terms were mirrored:

```js
const thigh = -sit * (Math.PI / 2) * 0.80;
const shin  =  sit * (Math.PI / 2) * 0.74;
```

Verified by walking the actor and sampling its own movement, not a yaw
formula — the trap that inverted G3c's reading of the same code (§ G3c
above): `dx·sin(yaw) + dz·cos(yaw) = 0.9999999999999999` (`node
scripts/tmp-g3e-review.mjs`, travel-check line). `PELVIS_TILT`'s
compensation (`+ sit * PELVIS_TILT` on both thighs) needed no change — it
cancels `hips`' own tilt algebraically (`world = hips.rotation.x +
thighLocal.rotation.x = -sit·PELVIS_TILT + (thigh + sit·PELVIS_TILT) =
thigh`), independent of `thigh`'s sign, so it was already correct for
either direction. Re-derived, not assumed, per the brief's instruction.

**F8, the offset.** `main.js`'s ledge holder now sits `SEAT_ALONG_FACING_OFFSET`
(`SEAT_DEPTH/2 + CAP_OVERHANG` = 0.325 m) behind the anchor along local `-z`,
which the holder's own `rotation.y = a.yaw` maps to `-(sin yaw, cos yaw)` —
the actor's facing, reversed. G3c's centred placement was itself correctly
measured (the hip has zero horizontal offset in any pose) but wrongly
concluded from — the offset was never about the hip, it was about clearing
the thighs, which do move.

**Measured, not guessed: does any leg vertex intersect the ledge's solid
volume.** Per the brief's explicit instruction not to guess a thigh radius,
this was checked by manually skinning every vertex weighted ≥50% to
`thighL`/`thighR`/`shinL`/`shinR` (bind matrix × per-vertex blended bone
matrices × inverse bind, matching three.js's own vertex shader), transforming
into the ledge holder's local frame, and testing against the wall's base-course
box (`y∈[0, SEAT_HEIGHT-CAP_H]`, footprint `SEAT_WIDTH×SEAT_DEPTH`) and the
cap's box (`y∈[SEAT_HEIGHT-CAP_H, SEAT_HEIGHT]`, footprint plus
`CAP_OVERHANG`) separately. **Zero hits in either box, at both `wall` and
`kerb`** (1010 leg vertices checked per anchor). The along-facing offset alone
resolved F8's item 1 ("the ledge is too tall") as well as item 2: with the
front edge under the buttocks, no part of the leg geometry reaches into
either box, so `SEAT_HEIGHT` did not need lowering and the figure was not
raised via `SEAT_DROP`. Recorded rather than assumed — the brief allowed
either path, and measurement decided which was necessary.

**What Dan looks at.** Rendered a front view and a true side profile, camera
parked using measured facing (`(sin yaw, cos yaw)`) rather than a yaw
formula, at both `wall` and `kerb`, plus 600-frame S2 renders at the real
anchor distance (`docs/smoke/captures/mcgrots/g3e/`, not committed —
regenerate with `scripts/tmp-g3e-review.mjs`'s method or
`mcgrots-shot.mjs --anchor=wall --frames=600`). Seen: legs extend forward
from the seat and down to the ground, feet planted in front, thighs resting
above the ledge top rather than passing through it, the seat's front edge
directly under the buttocks. At the real anchor distance the pose reads
correctly as sitting, matching G3d's earlier judgement of the composition
around it.

**F10's gate, rewritten.** The old check measured only the hip, which the
brief itself proved carries zero information about the legs (`docs/MCGROTS-ROADMAP.md`
§ F1) — flipping F7's sign left it 38/38. Added the check the phase gate
named: knee offset from hip, projected on the actor's facing, required
positive. Fault-injected F7's original sign flip: `wall`/`kerb` knee-along
read **-0.373** (matches the phase gate's own -0.3727 m measurement),
correctly failing; the standing control read ~0 throughout, confirming the
metric reads the SIT pose's thigh swing and not a fixed rig property.
Restored, back to +0.340 at both anchors, 41/41.

Fault-injected F8's offset directly (`SEAT_ALONG_FACING_OFFSET → 0`): the
rewritten placement check ("the ledge is centred laterally and offset behind
the anchor") correctly went red (`along=0.000` at both anchors, failing the
`>0.15` floor) while every other check, including the new knee check, stayed
green — proving that check specifically exercises the offset and nothing
else. Restored, 41/41.

**The old vertical assert — `Math.abs(hip.y - box.max.y) <= HEIGHT_TOL` — is
gone**, not patched. It required hip and cap top to coincide, which is true
here by construction (`SEAT_HEIGHT` was itself measured as the hip's own
sit height) but was never the actually-correct spec; sitting only requires
the hip not to sink below the seat. Replaced with a one-sided-in-spirit band,
`[-0.02, +0.15]` around the cap top, generous enough that a future genuine
raise of the hip (a real anatomical margin for thigh thickness, not built
here) would still pass, but tight enough that standing's ~0.22 m gap falls
clearly outside it — the control (`falls outside the seated height band`)
confirms the band is not so loose it stops meaning anything. Measured
current value: exactly 0.00 m, both anchors — no margin used, recorded
honestly rather than padded.

**What this does not settle.** The knee-forward-positive check and the leg/
ledge-intersection measurement both prove the SIGN and the CLEARANCE are
right; neither is a claim that the pose reads as anatomically natural, only
that F1's two open defects — legs backward, thighs buried — are gone. The
torso lean noted since G3c (§ G3c above) is untouched by this unit.

### G3f — a real visibility gate for the statue

**Landed 2026-08-12 (F9 half; the posture half is tracked separately in
`docs/MCGROTS-ROADMAP.md` § 10 F1's follow-on, kept unlanded pending its own
commit — see the brief's "two commits" instruction).**

The statue region's two original checks (`getObjectByName` presence, and
distance from the authored centre to the five camera rays) were both blind to
`statue.visible = false`, exactly as F9 diagnosed. The off-sightline check was
kept — renamed to say plainly it is not a visibility gate — since it guards
the real, separate regression G3b measured (the landmark becoming the
subject).

**Started from the `van` region's shape** (project the object's world Box3
through the live camera at each anchor after a real `snapTo`, clamp to
viewport, require sensible area, require real content) and it transferred
for the AREA half without change. It did NOT transfer for the CONTENT half,
and that was measured, not assumed: the van's technique compares the
object's rect to the flattest of four corner patches, which works because
the van's rect sits against flat ground and sky. The statue's rect at these
anchors overlaps the massing behind it. Running the van's own technique
against `statue.visible = false` left it green — `back` read statue-rect
stddev 51.5 against a flat-corner control of 0.0, comfortably "passing" a
content check with the statue OFF, because what the check actually measured
was the building's own roofline and colour-band edge sitting inside the
statue's rect, unchanged by the statue's visibility.

**Replaced with a live A/B in the same boot**, not a corner-flatness
comparison: render each anchor once with the statue on, once with it toggled
off (`d.scene.getObjectByName('statue').visible = false`, forced via
`stepFrames(1)`) — then restored before the next anchor — and diff the two
frames' luminance inside the SAME rect. Whatever sits behind the statue is
identical in both frames and cancels out of the diff; only the statue's own
pixels survive it. Threshold `>3` rules out anti-aliasing noise (two renders
of an unchanged, statue-off scene read <0.5 in a dry run); measured range
with the statue genuinely toggling, at the three covered anchors, is
27.6–32.0.

**Two anchors excluded from the content check, by name, with their measured
numbers — not folded into a looser band:**

- `kerb`: the statue's projected box is entirely off the right edge of the
  frame (raw NDC `x0=1.344`), so there is no rect to diff. Also excluded from
  the AREA check for the same reason. Still covered by the sightline check,
  which needs no rect.
- `counter`: genuinely toggles — confirmed by rendering both frames and
  looking: a small dark triangle and a corner of the plinth appear and
  disappear at the frame's right edge — but the diff reads only **1.0**,
  against a confirmed-broken baseline of exactly **0.0** (measured by
  injecting `statue.visible = false` at construction, so the "on" capture was
  already off). Deterministic across three repeat runs, so this is real
  signal, not noise. But it is signal diluted by averaging over a rect that
  is >90% empty sky/ground — the statue's own AABB is clipped hard against
  the frame edge at `counter`, so only a sliver of the box is actual statue.
  A threshold exists that passes 1.0 and fails 0.0 (`>0.5`), but it would
  have near-zero margin and would mean little if the pose or camera moved by
  a few pixels. Per the brief's own instruction, said plainly rather than
  shaving the threshold to fit — the content check covers `wall`, `far` and
  `back` (three of five).

**Fault-injected `statue.visible = false` in `buildStatue`, committed first.**
The AREA check stayed green, exactly as documented above — `Box3().setFromObject`
does not read `.visible`, so it cannot see this fault; that is a known,
written-down limit of that check, not a surprise. The CONTENT check is the one
that has to catch it, and the first run of the injection did not: `wall`,
`far` and `back` all read their normal working diffs (27.6–32.0), unchanged.

**A bug in the check itself, found by actually reading that output rather than
trusting the design.** The per-anchor loop captured "on", toggled off,
captured "off", then unconditionally reset `.visible = true` before moving to
the next anchor. With the fault injected, the scene starts every anchor at
`visible = false` — so `counter` (processed first in `anchorIds()` order)
correctly measured a 0-vs-0 diff, but the unconditional reset then turned the
statue back ON for every anchor after it, silently repairing the very fault
under test. `wall`/`far`/`back` were measuring a scene the check had already
fixed. Fixed by reading and restoring the ACTUAL prior `.visible` value
instead of hardcoding `true`. Re-ran the same injection: `wall`/`far`/`back`
now correctly read **0.0**, all below the `>3` floor — the check went red.
Restored the source, reran clean: 44/44, `wall`/`far`/`back` back to
27.6–32.0. The sightline check, `console clean`, and every other region
stayed green throughout both the faulty and the fixed injection runs.

**What this does not prove:** that the statue looks right, only that it is
there, sensibly sized, and actually rendered at three of the five anchors it
should be visible from. Composition judgement is G3b/G3d's, unchanged here.

### G3f — the seated posture, propped read fixed

**Landed 2026-08-12, its own commit, deliberately separate from F9's** (the
brief's instruction — a judgement Dan may reject should not force reverting a
mechanical gate fix alongside it).

**Baseline, measured on this session's tree** (G3e's fix already landed):
`thighL.rotation.x = -0.9666` rad at full sit, 35° below horizontal rather
than at it; a body-over-seat depth measurement (vertices within 0.15 m of the
cap's height band, filtered to the seat's lateral footprint) of 0.766 m, and
90 vertices in contact with the cap surface within a tight band. (The brief's
own figures — 0.359 m depth, 40 contact vertices — were measured with a
narrower method; this session's numbers are its own before/after pair, not a
claim of reproducing the brief's exact technique.) Rendered a three-quarter
elevated view, a front view and a true side profile at both `wall` and
`kerb` — clearing the wall deliberately, after the brief's note that G3e's
own side profile was misread as floating because the near half of the wall
sat between lens and figure. Seen: the hip sits right at the seat's front
edge with almost none of the seat's depth visible behind it, torso near
vertical — the figure reads as perched on the corner, not settled onto the
wall.

**No number was computed to choose between poses** — per the rule carried
from G3d's brief, options were rendered and looked at.

**Tried, kept:** deepened both leg coefficients in `actors/skinned.js`
(`thigh`: 0.80→0.95, `shin`: 0.74→0.85 — thigh closer to horizontal, shin
closer to vertical beneath it) and reduced `main.js`'s
`SEAT_ALONG_FACING_OFFSET` from 0.325 m to 0.20 m, moving the hip further
onto the seat rather than leaving it pinned at the very front edge. Judged
by re-rendering the same three shots at both anchors: visibly more seat
depth in front of and behind the body, the torso now sits over the block
rather than at its lip. `docs/smoke/captures/mcgrots/g3f/` is not populated —
these are throwaway judgement renders, regenerate with
`node scripts/mcgrots-shot.mjs --body=skinned --archetype=rab --anchor=wall
--frames=600 --shot=/tmp/x.png` for the real-distance view, or park a camera
by hand (three-quarter: eye at `pos + facing*1.8 + perp*1.6`, height 1.7,
look at `pos` height 0.4) for the close judgement view.

**Tried, rejected: `SEAT_ALONG_FACING_OFFSET = 0.15`.** Read slightly better
than 0.20 (marginally more seat visible behind the hip) but a three-quarter
render showed the knee clipping through the cap's front-right corner —
confirmed by eye, not by the leg-intersection measurement alone. 0.20 m was
the value where the vertex-skinning check (G3e's method) first read zero
intersections again at both anchors.

**Not tried this session:** torso lean and the pelvis-tilt compensation
(`PELVIS_TILT`, `actors/skinned.js`) were left exactly as G3c set them. The
leg change alone read as enough of an improvement over the propped baseline
to land; torso lean remains the "somewhat better, not dramatically" state
recorded at G3c and was not re-evaluated here. A future unit revisiting
posture should look at it before assuming the current read is final.

**Re-verified against all three hard constraints named in the brief:**

- **F10's knee check stays positive.** `wall`/`kerb` knee-along-facing =
  0.369 m at the new coefficients (was 0.340 m before this change — deeper
  thigh swings the knee further forward too), against the gate's 0.15 m
  floor. Fault-injected the sign flip again with the NEW coefficients
  (`thigh`/`shin` mirrored): the check correctly went red. Restored, 44/44.
- **Seat contact re-verified, not assumed.** G3e's vertex-skinning method
  (skin every leg vertex into the ledge holder's local frame, test against
  the wall and cap boxes) re-run against the new pose and the new offset:
  zero intersections, both boxes, both anchors, 1010 leg vertices checked
  per anchor — same result as G3e, re-measured rather than carried over.
- **F4's torso-patch threshold untouched.** Re-checked after landing: stddev
  reads 1.8, identical to the value G3c already lowered it to accommodate —
  this leg-only change did not move it, so there was nothing to decide about
  touching the threshold a second time.

**At the real anchor camera distance the improvement is marginal.** 600-frame
S2 renders of `wall` and `kerb` (the distance the game actually plays at)
show the figure occupying few enough pixels that the before/after difference
is difficult to see at a glance — closer to F2's own "does not read at this
distance" finding than to G3e's clearly-visible fix. Landed anyway: the
close-up read is a genuine, measured improvement, it costs nothing at the
anchors where it doesn't show, and a future camera or interior view closer
to the figure would benefit from it.

**What this does not prove:** that the pose is settled. The rig has nine
bones and no feet; a fully convincing seated pose may not be reachable
without more of either, and this unit did not attempt to establish that
ceiling — it only fixed the specific "propped, not sat" read the brief
named.

### Faults in the G3 GATES, found by the phase gate

Logged 2026-08-12 from `.herdr/gate3.md`, audit of `7ed2a4e..4c3286d`. These
are faults in the checks, not in the game, which is the half of the discipline
that a green suite cannot report on itself. Full entries in
`docs/MCGROTS-ROADMAP.md` § 10.

**F9 — the statue region gates existence, not visibility.** `statue.visible =
false` leaves `--only=statue` at 2/2 and the full suite at **38/38**, with
nothing rendered at the Foot. One check reads `getObjectByName` and the absence
of the placeholder; the other projects the authored centre against the five
camera rays. Both are true of a hidden object. G3a's validation entry names
this exact gap in writing and G3b, landing concurrently the same day, did not
inherit it — now § 8's second project invariant. The off-sightline check stays:
it guards a real regression and its `(10,-5)` injection is sound. It is simply
not a visibility gate.

**F10 — the seat region cannot see F1's defect. FIXED, G3e (2026-08-12).** Injecting
F1's thigh sign flip, the entire content of the fault, left the suite at
**38/38**. The region measured only the hip, and the hip has zero horizontal
offset in any pose, so it reported the actor's group placement and nothing
about the legs. The seated/standing control separated 0.57 m from 0.79 m,
which is `SEAT_DROP`. Its vertical assert was worse than blind:
`Math.abs(hip.y - box.max.y) <= HEIGHT_TOL` **required** the hip bone to sit
at the stone surface, encoding F1's second defect as the specification, and
passed with zero margin used. Full replacement gate, its fault injections and
what each new check proves: § G3e above.

What both F9 and F10 have in common is that each region's own fault injection
was honest and did go red. Neither injected the fault the region was
*believed* to cover. A gate proved red against the fault its author had in
mind, and the entry then claimed the broader thing.

**F11 — the camera region only ever tests parked → walk.** So it never enters
the state where a walk is re-targeted mid-flight, which still cuts at 23.7% of
total travel on frame 1 against its own < 10% assert. The fault is in the game
as well as the gate; see § 10 F11.

**F12 — G3d's grade numbers did not reproduce. FIXED, G3g (2026-08-12).**
`mcgrots-grade.mjs` had no `--look` flag and never called `setLook`, so the
tool that produced "S2 6/3 mean 105.1, cast 17.2; 12/3 rejected at 134.5" —
carried in this document, the roadmap, and commit `4c3286d`'s subject line —
had actually swept the UNSTYLED look. Fix: the script now takes `--look=<id>`
and prints which look it swept in its own header, so this fault cannot recur
silently. Re-run as `node scripts/mcgrots-grade.mjs --look=aerial`: see § G3d
above for the corrected numbers. **The decision does not change** — 6/3
remains the pick, on the same reasoning as before (12/3 buys no cast
readability for a substantially brighter frame). Commit `4c3286d`'s subject
line cannot be amended; this entry and § G3d's inline note are the correction.
No new smoke gate was added — a grade sweep is a tool, not a product surface,
and the existing contrast-floor picture gate (`npm run smoke:mcgrots --
only=camera`, re-confirmed passing: worst stddev 44.5 against the ≥8 floor,
5/5) already covers the one thing here that is a product claim, that no
shipped frame goes black or blown.

### What G0 deliberately does not prove

- **Nothing about animation.** The actor is a capsule that slides between
  anchors. There is no rig anywhere in this project and none of the seven
  character glbs carry one — no skins, no joints, no animations. G1 answers
  whether a body can be made to walk convincingly, and nothing in this suite
  is evidence about it.
- **Nothing about whether the pitch looks good.** The crush and blown gates
  catch a broken frame. They cannot tell a composed shot from an ugly one.
  That judgement is Dan's, at G7, against the ten-minute bar.
- **Nothing about style.** G2 owns that. The current grade is a blockout
  setting, not a look.
- **Nothing about the statue.** It is a placeholder cylinder at the Foot's
  origin. Queen Victoria is not in `leith.json` and cannot be — the Overpass
  query fetches ways, and a memorial is a node.
- **Nothing about mobile.** No viewport pass yet, though the staging (tap an
  anchor, fixed cameras) was chosen to be mobile-shaped from the start.

---

## G1 — the animation bake-off

```bash
node scripts/mcgrots-bakeoff.mjs                       # all four, strips + cost
node scripts/mcgrots-bakeoff.mjs --archetype=mcgrot
node scripts/glb-anatomy.mjs assets/characters/rab-form.glb
```

Strips land in `docs/smoke/captures/mcgrots/g1/` — `<id>-walk.png` is eight
frames across one stride, `<id>-poses.png` is idle / sit / head-turn.

**A1 skinned is the chosen candidate** (Dan, 2026-08-11), on the walk and the
head-turn. Sitting was bad in all three arms; see § "Sitting is still the weak
pose" below for why, and for what the choice bought.

Measured on `rab`, chromium/metal:

| | draws | tris | asset KB | ms/frame | runtime LOC | offline LOC |
|---|---|---|---|---|---|---|
| control (capsule) | 2 | 156 | 0.0 | 0.017 | 60 | — |
| A1 skinned | **1** | 5254 | 44.0 | 0.022 | 146 | 142 |
| A2 segmented | 6 | 5254 | **7.3** | 0.021 | 198 | 195 |
| A3 hinged flats | 6 | **12** | 76.9 | 0.081 | 175 | 66 |

Asset KB is what a candidate adds *per character* on top of the 480 KB glb
every candidate needs anyway.

### F3 cast coverage (2026-08-11)

`node scripts/rig-glb.mjs kenneth mcgrot morag runt slab` generated the five
missing biped sidecars; `rab-rig.json` was not regenerated. Each sidecar has
nine bones and matched the mesh vertex count. The bake-off was then run once
per archetype with `--only=skinned`, using Chromium/Metal; each run returned
one draw, no page errors, and wrote the walk and pose strips to
`docs/smoke/captures/mcgrots/g1/`.

| archetype | vertices | neck | draws | tris | asset KB | ms/frame |
|---|---:|---:|---:|---:|---:|---:|
| kenneth | 2400 | 0.79 | 1 | 2624 | 25.5 | 0.024 |
| mcgrot | 3084 | 0.86 | 1 | 3952 | 32.6 | 0.024 |
| morag | 3598 | 0.89 | 1 | 4410 | 38.0 | 0.024 |
| runt | 3861 | 0.75 | 1 | 4637 | 40.7 | 0.023 |
| slab | 2812 | 0.89 | 1 | 3530 | 29.8 | 0.023 |

The opened walk strips showed readable alternating knee motion, but not a
uniformly clean deformation result:

- **kenneth:** clean silhouette through the stride; no shoulder tear or hip
  shard.
- **mcgrot:** no shoulder tear; an angular lower-garment flap appears at maximum
  extension, but the reviewed strip does not show the same confirmed light hip
  shard as morag and runt.
- **morag:** a flat light shard projects forward at hip height in walk-strip
  frames 3, 4, 7 and 8, absent from frames 1, 2, 5 and 6. The independent
  `node scripts/mcgrots-shot.mjs --body=skinned --archetype=morag
  --anchor=far --frames=130 --shot=/tmp/morag-mid-130.png` capture shows the
  same wedge at the left hip mid-stride.
- **runt:** the same flat plate appears at hip height in walk-strip frames 3
  and 4.
- **slab:** clean silhouette through the stride; no shoulder tear or hip shard.

The shoulder tear is absent across all five; the morag and runt hip artefacts
are measured walk-time deformation faults, not merely sitting faults. The
opened sit strips additionally showed dark angular hip/lower-coat deformation
on morag, runt and slab; kenneth and mcgrot showed angular folds without a
visible split. This coverage measures the cast's walk behaviour; it does not
prove foot planting. Pomplé is deliberately not included because he is a
quadruped and has a separate G6 treatment.

### The finding the milestone turned on

`scripts/glb-anatomy.mjs` measures cross-sections through a normalised mesh.
At ankle height every biped is two clearly separated masses; by a third of the
way up they have fused into one ring. **That ring is the coat.**
`docs/CANON.md` dresses this cast in heavy dockside coats and aprons and the
geometry agrees.

So only the lower legs need to articulate, and everything above the hem is one
mass that sways. That is what makes A2 and A3 cheap, and it is why A1 buys less
than it looks like it should — smooth deformation of a garment that barely
deforms.

### Two predictions the measurements overturned

**A1 was expected to tear. It does not.** Auto-skinning by distance-to-bone is
the crude end of the technique and these are lumpy Trellis reconstructions with
no edge loops at the joints, so binding failures looked likely. The strip shows
a continuous surface with no seams. The lumpiness is *why*: a solid blob has no
thin features for a distance-weighted bind to get wrong. It also posts the best
draw-call figure of the three, because skinning keeps the character one mesh.

**Flats were expected to be the cheapest to run. They are the dearest**, at
0.081 ms/frame against 0.021–0.022 for the two geometry candidates, despite
carrying 12 triangles against 5254. Transparency, alpha-test and the billboard
update cost more than the geometry they replace. Triangle count did not predict
frame cost here.

### Sitting is still the weak pose

Dan's verdict on first review: the walk and head-turn favour A1, and **sitting
was bad in all three**. The cause is structural — no candidate had a knee, so
`sit` could only drop the body and hang the legs, which reads as a crouch. It
was also being judged with nothing under the figure to sit on.

**Only A1 could be fixed.** A bone subdivides a leg wherever it likes and the
surface follows; A2 and A3 have no thigh *geometry* to rotate, because
everything between hem and hip is coat. That is the one thing skinning bought
here that the anatomy measurement had not already made cheap, and it is why the
choice matters beyond the walk.

Three fixes landed, each from a measurement rather than an eye:

1. **A knee.** The rig went from seven bones to nine — `thighL/R` and
   `shinL/R` replacing one rigid leg each, hinged at `KNEE_Y` 0.24, just under
   the hem so the fold happens inside the garment.
2. **The coat no longer binds to the leg bones.** Above the hem the leg bones
   are not weight candidates at all. Without this, everything between hem and
   hip was nearest a thigh, so folding to sit dragged the whole lower coat
   forward and the figure doubled over into a face-plant.
3. **The drop is derived, not picked.** With the thigh horizontal and the shin
   vertical, the foot sits one shin-length below the hip, so the hip must land
   at 0.24 for the boots to stay on the ground — a drop of 0.22, not the 0.26
   first used, which sank the figure through the ledge it was meant to be on.

**It is still not good.** The pose no longer folds double, but it reads as a
huddle on the front edge rather than someone settled on a wall. Getting it
right needs a pelvis that rotates back independently of the spine, and a ledge
height fixed by G3's real dressing rather than a placeholder box. Sitting is
the posture this whole game is about — the player sits near the van and listens
— so this is a known open fault, not a detail.

### What G1 does not settle

- **No foot IK on any candidate**, so feet slide rather than plant. Whether
  that reads at the game's camera distances is a judgement, not a measurement.
- **A head-turn is not comparable across candidates.** A2 and A1 rotate a head;
  A3 physically cannot — a sprite rotated out of plane vanishes — so it leans
  instead. G6 makes Pomplé's head-turn load-bearing, so this is a real mark
  against A3 that the cost table cannot show.
- **The five other bipeds are now rendered.** Their walk strips are in the G1
  capture directory and the measurements are recorded in § "F3 cast coverage"
  above. This does not cover Pomplé, whose quadruped treatment belongs to G6.
- **Pomplé is excluded.** He is a quadruped, emitted as a single rigid part,
  and a biped rig would not give him the head-turn G6 needs.

### Faults the strips caught that no number would have

**The first segmented walk read as detached boots under a static coat**, feet
lifting clear of the ground. The hip had been placed at the top of the visible
leg geometry — the coat hem at y=0.22, where the geometry starts, not where the
joint is. A stub rotating about its own top describes a steep arc. A virtual
hip at y=0.46, inside the coat, flattens it and plants the feet.

**Sitting swung the boots out horizontally at waist height.** A rigid segment
has no knee, and there is no thigh geometry to bend because it is all coat. The
pose now drops the body and hangs the legs near-vertical, which is what someone
in a heavy coat on a low wall actually does.

**The first sprite bake put a whole upper body in the torso cell.** `head`,
`armL` and `armR` are *children* of `joint:torso`, so revealing the torso with
`traverse()` revealed them too. Every part after it then overlapped in the
assembled figure. Reveal the joint's own direct-child mesh, never a traverse.

### Rejected and recorded

**Hand-authored camera positions.** Five eye positions written by hand in
pitch-local coordinates; four were wrong and the establishing wide landed
5.3 m from the statue plinth, which then filled a quarter of the frame.
Replaced by a derivation — camera sits behind the actor on the van-to-anchor
line, raised, looking at the actor/van midpoint — which cannot overshoot,
because the distance is measured outward from a spot already known to be clear.

**Pointing the pitch at the Foot's origin.** The obvious orientation, and it
put the statue 0.2 m off the camera sightline in all five shots. A quarter turn
(`-90`) moves it to 8.3 m off for 0.3 m of building clearance. All four
orientations measured; the table is in `src/mcgrots/site.js`.

**A "largest clear circle" siting metric.** Scored over a ±120 m box it
returned the grid corners, because clearance is unbounded wherever the fetched
OSM data runs out. Any such metric finds the edge of your dataset rather than
your open ground. Constrained to within 25 m of the Foot instead.

**Guessing the grade by eye.** Two attempts, one 53.9% black and one at a mean
of 137 (four times the street's measured 0.139 median). Replaced by
`scripts/mcgrots-grade.mjs`, which sweeps sun × hemisphere across all five
shots and reports mean, stddev, crushed and blown. Chosen pair is the darkest
in the grid that crushes nothing: sun 6, hemi 3 → mean 76.7, stddev 51.4,
0.0% black.

---

## G2 — the style bake-off

```bash
npm run smoke:mcgrots -- --only=style      # 14 checks
npm run dev:mcgrots                        # /mcgrots.html?look=aerial&style=key&page=on
node scripts/mcgrots-grade.mjs             # now reports the CAST, not just the frame
node scripts/mcgrots-styleshots.mjs        # five labelled motion sheets
node scripts/mcgrots-styleshots.mjs --archetype=morag
node scripts/comic-palette.mjs --only=assets/comics/<id>.jpg --k=5
```

Captures land in `docs/smoke/captures/mcgrots/g2/` (gitignored).

### G2 capture-review rig (2026-08-11)

`npm run styleshots:mcgrots` boots the shipped page on the skinned `rab` body,
turns markers off, and writes `counter.png`, `wall.png`, `kerb.png`, `far.png`
and `back.png`. Each sheet has six candidate rows — baseline, S1 inked, S2
aerial, S3 key, the posterise control, and S4 page — with the exact URL printed
in the row label. The three columns are approach, mid-stride and arrived at a
fixed anchor camera. `--archetype=` re-runs the same sheets on another real
cast member; `--hour=` is carried as sheet metadata while the current page keeps
its fixed `LIGHT` setup.

The first Chromium/Metal run captured 15 frames per candidate and all five
sheets. Opening the sheets showed S1/S2 figures with visible silhouettes,
highlights and S1 ink rather than the former featureless black blob; S2's
distance flattening was visible but subtle at these anchor views. S3 key's
five-tone dither visibly differed from its posterise control. Its S4 approach
and mid-stride cells were empty because the rig waited a fixed 160ms: that was
shorter than the combined page hold and stepped opacity transition, so it was
a capture timing artefact. `waitForPageCut()` now waits for both
`pageStats().cutting === false` and computed `.page-cut` opacity `0`.

**The phase gate found the harder half of this, 2026-08-12: five of the ten
motion cells across the five sheets contain no actor.** Not a timing artefact
and not fixable in the rig — the camera cuts to the destination anchor on the
first frame of a walk, so the figure is still at the source anchor and outside
the shot. Measured by projecting the actor's chest into the target camera at
the exact frame counts the rig captures at (2 and 47):

| sheet | approach | mid-stride | arrived |
|---|---|---|---|
| `counter.png` | no actor | no actor | actor |
| `wall.png` | no actor | no actor | actor |
| `kerb.png` | no actor | actor | actor |
| `far.png` | actor | actor | actor |
| `back.png` | actor | actor | actor |

So the G2 ranking was made on five stills plus three anchors of motion, not on
five anchors of motion. See § F6 in the roadmap; re-run the sheets once the
departure-cut decision is settled. This is what "numeric gates cannot see a bad
picture" looks like one level up: the rig's own reported numbers — 15 frames per
candidate, all five sheets — were correct, and nobody asked what was in them.

The rerun captured the same 15 frames per candidate. Opening the corrected
`counter.png` and `far.png` showed an S4 scene in all three columns — approach,
mid-stride and arrived — in both opened sheets. The earlier independent reproduction
of the empty panel was still a faithful capture of the broken product
candidate at that time, not a limitation of the rig. Dan reproduced that
earlier product fault with both
`node scripts/mcgrots-shot.mjs --body=skinned --archetype=rab --page=on
--anchor=counter --frames=600` and
`node scripts/mcgrots-shot.mjs --body=skinned --archetype=rab --page=on
--anchor=far --frames=600`: cream paper, panel rule, caption, and an empty
panel in each case.

The existing S4 gates were green throughout: **S4 insets the render into a
panel** reported 70.9% of the window, and **S4 renders at the panel size**
reported a 1190x549 buffer. Both measure the panel's geometry and neither
looks inside it; the capture-review sheet is what exposes the missing 3D scene.

This rig proves that the candidates can be compared at the same three motion
phases and fixed camera, and puts the human-readable URL beside every row. It
deliberately does not rank the styles, compute a metric, or gate the visual
quality of a candidate. No acceptance gate was added, so no fault injection
applies.

### G2 sun investigation (2026-08-11)

The existing grade sweep chose the shipped `sun 6 / hemi 3` pair using only
whole-frame mean/stddev/crushed/blown numbers. Its recorded result was mean
76.7, stddev 51.4 and 0.0% black; the actor occupies only a few percent of
that frame, so those numbers never measured whether the cast could be read.

`npm run sun:mcgrots` is the actor-aware investigation tool. It boots S2
(`?look=aerial`) with the real skinned `rab`, reports the horizontal angle
between each anchor's actor-to-camera vector and actor-to-sun vector, then
sweeps 48 runtime sun settings (12 azimuths × 4 altitudes). For every setting
it prints whole-frame mean/stddev/dark/blown beside actor-only torso-patch
mean/stddev/max/pixel count. The actor control reuses F4's geometry-derived
torso patch: bind-pose skinned-mesh width, scaled by `actor.height`, with the
vertical band from 35% to 62% of actor height. It hides the actor for a paired
image and keeps only changed pixels inside that patch, so the luma is not a
whole-frame proxy. `sun-report.json` retains every row of the run.

The shipped geometry has these camera/sun separations: counter 54.0°, wall
51.4°, back 35.4°, far 31.3° and kerb 26.9°. Counter is the largest separation,
with wall close behind. The shipped `-2.1 rad / 0.34 rad` setting ranked 7th of
48 by `rab` actor mean: frame mean 106.4 and actor mean/stddev/max 6.9/12.8/85.0
(2,915 changed torso pixels averaged over the five anchors).

The top measured settings were:

| setting (azimuth / altitude) | frame mean | actor mean / stddev / max |
|---|---:|---:|
| `-2.62 / 0.75 rad` | 105.2 | 7.0 / 12.8 / 83.5 |
| `-2.10 / 0.50 rad` | 106.4 | 6.9 / 13.1 / 85.0 |
| `-2.62 / 0.22 rad` | 105.1 | 6.9 / 12.2 / 76.4 |
| `-2.10 / 0.75 rad` | 106.4 | 6.9 / 13.1 / 85.0 |
| `-2.62 / 0.34 rad` | 105.2 | 6.9 / 12.2 / 76.4 |

The complete 48-row side-by-side table is emitted by the tool; the frame
objective and actor objective disagree strongly away from the current
azimuth. The best `rab` candidates were rendered as contact sheets and opened:

- `sun-shipped.png` — the five rear-facing actor views remain mostly dark,
  with cap/skin and narrow warm edge highlights visible.
- `sun-best-1.png` (`-2.62 / 0.75`) — the same scene remains coherent, with
  warmer jacket and arm/leg edge highlights, but it is still a back-lit rear
  view rather than a fully tan jacket.
- `sun-best-2.png` (`-2.10 / 0.50`) — visually close to shipped, with modestly
  clearer warm edge light on the actor.
- `sun-best-3.png` (`-2.62 / 0.22`) — also close to the first candidate; the
  actor stays dark at rest, with slightly more readable warm contours than
  shipped.

The sheets are 2-column contact sheets in anchor order `counter`, `wall`,
`kerb`, `far`, `back`; the fifth cell is bottom-left. A `morag` cross-check
held the same candidate region: shipped actor mean 55.2, versus 56.0 for
`-2.62 / 0.75`, 54.5 for `-2.10 / 0.50`, and 57.9 for `-2.62 / 0.22`.
This is a measured recommendation, not a shipped lighting change: preserve
`src/mcgrots/site.js` while Dan ranks the existing sheets, and consider
`-2.62 / 0.75 rad` first if the hour is reopened. No acceptance gate was
added, so no fault injection applies.

## G3b — Queen Victoria at the Foot

`src/mcgrots/statue.js` replaces the G0 placeholder cylinder after `buildFoot()`
with authored low-poly geometry: a circular granite base, chamfered sandstone
pedestal, four dark plaque panels, and a compact seated bronze figure with a
robe, throne back, arms, legs, head and crown. The brief and repository
document the landmark's place and history but do not provide a survey bearing
or dimensions. The implementation therefore keeps the measured origin and
footprint (`STATUE.x=0`, `z=0`, `radius=1.6m`, `plinth=2.4m`) and records `yaw=0`
and the figure proportions as authored assumptions rather than researched
geometry. PERSEVERE and the boundary plaque were left for a later dressing
pass; they were bonus scope, not allowed to displace the statue.

The `statue` smoke region is the named control for the composition constraint:
it reads the authored group's actual world-space centre from the product scene,
then measures its perpendicular distance to every shipped camera sightline.
It also checks that `statue:queen-victoria` exists and
`statue-placeholder` does not. The isolated run was `2/2 passed in 0.6s` on
Chromium/Metal. Exact distances were counter 10.160m, wall 11.328m, kerb
8.283m, far 12.186m and back 10.800m. The documented 8.3m minimum is rounded;
the gate uses the exact 8.28m prior floor, so the authored statue does not
regress the quarter-turn composition.

The regenerated Chromium/Metal S2 sheets (`npm run styleshots:mcgrots`) were
opened at all five anchors. In `counter`, `wall`, `kerb`, `far` and `back`, the
statue reads as a small seated figure on a tall pale plinth at the edge of the
shot, rather than as the old cylinder or an unstructured lump. It is most
legible in the wider `far` and `back` views, remains visible at the right edge
of the nearer views, and does not pull the eye from Sonnet's central van. The
known F1 seated-actor defect is still visible at `wall` and `kerb`; it was left
untouched for G3c. S4 has scene content in all three columns after the earlier
styleshot timing fix.

The first combined-tree smoke before Sonnet's G3a commit was `33/35 passed`
because the in-flight van visibility/content checks were red; that result was
not attributed to G3b. After G3a landed, commit `9723f60` was bundled to a
1.9 MB output and the full `npm run smoke:mcgrots` completed **35/35 passed in
2.0s** under Chromium/Metal. Both `main.js` build hooks are present in the
landed tree; the G3b commit itself touched only the statue, site and docs.

The gate was fault-injected after that commit by changing the product's
`STATUE` centre to `(10,-5)` and rerunning
`npm run smoke:mcgrots -- --only=statue`: it went red at **1/2**, with
counter 0.562m, wall 1.359m, kerb 1.297m, far 1.035m and back 0.380m. The
source was restored to `(0,0)`, bundled again, and the isolated control returned
to **2/2 passed in 0.6s**, with the exact distances above.

### The candidates came from reading the comics, not from a list of techniques

The first G2 scaffold offered posterise / riso / PS1 / clay / stop-motion —
a list of rendering processes. Nine comics sampled across the 418 in
`assets/comics/` say the corpus is none of them, and says several things
`docs/STYLE.md` does not, because that document measures **colour only**:

- Everything is **ink-outlined**, constant weight, no taper.
- **Two tones per surface** — lit and shade, hard edge, no gradient.
- **Distance is drawn, not fogged.** Foreground figures inked and warm;
  mid-ground people one flat tone with a thin line; background cranes and
  tenements a pale wash with *no outline at all*.
- **One key per page**, four or five swatches — never twelve.
- The **paper is furniture**: cream margin, cream gutters, title bar above,
  caption bar below.
- A **face is three to five marks**.

The four candidates Dan chose (2026-08-11) are S1 inked cel, S2 aerial flatten,
S3 one key at a time, S4 the page. S5 (bubbles as world objects) and S6
(three-mark faces) were deferred to G6.

### Three arms, and why they are three separate URL params

`?look=` mutates the scene before it draws, `?style=` grades the finished frame,
`?page=` puts furniture around it. Folding them into one `?style=` would make
every candidate a bundle, and **a bundle cannot be a control for another
bundle** — the mistake the street's acceptance gates made twice.

| Region | Check | What it proves |
|---|---|---|
| style | judging the chosen body | The region runs on `?body=skinned`, G1's pick, not the capsule |
| style | **every arm reverts bit-identically** | Install + revert of all three arms returns the exact frame |
| style | S1 inks objects, cels everything | hulls > 0, hulls < swapped, aerial = 0 |
| style | S1 puts visible ink in the frame | ≥0.25% of pixels darken vs a **zero-width-line control** |
| style | S1 does not render the actor as a flat black silhouette | Torso-only patch (F4): stddev > 2 and max luma > 12 |
| style | S2 is S1 plus the ramp | Same hulls, same swaps, only `aerial` differs |
| style | S2 washes distance out | Lighter *and* flatter than S1 |
| style | every key is exactly five | A six-entry key would half-fill the uniform and quantise to black |
| style | S3 lands on its five swatches | 100% of pixels within 10/255 of the `dock` key |
| style | switching the key repaints | Same style, same scene, one uniform |
| style | S4 insets the render | Panel is 50–85% of the window |
| style | S4 renders at panel size | Drawing buffer ≠ window, and the aspect matches |
| style | S4 holds a scene in the panel, not empty paper (F5) | <50% of sampled panel pixels match the paper colour |
| style | console clean | Through every arm |

### Faults these gates caught, each of which looked fine as a number first

**The outline was drawn 1.2 m underground.** Hulls were added as SIBLINGS of the
mesh they outline, which drops the mesh's own local transform — the van's body
sits at `y = 1.2` inside its group. What survived was a sliver of z-fighting at
one edge, which read as a thin outline and measured 0.03% ink. Parenting the
hull to the mesh with no local transform makes the world transform identical by
construction; ink went 0.03% → 0.29% at the same line width.

**The outline engulfed the character.** A hand-picked thickness coefficient came
to ~7.5 cm of push on a 1.72 m figure — wider than its own limbs — so the hull
swallowed it and rendered a solid black blob. The push is now **derived**:
`δ = 2·N·z / (P₁₁·height)` gives an exactly N-pixel line at any distance, fov or
resolution, so the suite's 1280×720 cannot flatter it.

**The ground plane's own hull filled two-thirds of the frame.** An inverted hull
assumes a closed solid seen from outside and a 400 m ground plane is neither.
The rule that fixes it is the corpus's, not a workaround: ground and sky carry
no line, objects do. Enforced by bounding-sphere radius, so a prop added in G3
inherits it without editing a list.

**The two-band ramp lifted every shadow to 35%.** `SHADE_BAND` was 90/255,
which put a floor under every unlit surface and flattened the pitch. Now 52 —
the same argument as the street's rejected "lift the game toward the comics'
lightness" grades.

### Faults in the GATES, which is the other half of the same discipline

- **The revert check compared frames at different clock times.** It stepped at
  1/60 between arms, so ten frames of idle animation had passed and the two
  hashes differed on a scene that was reverting perfectly. Every step in that
  check is now `dt = 0`.
- **The ink check measured darkness, not ink.** It used the crushed-pixel
  fraction and read `0.00% → 0.00%` on a frame with a line in it: the hull is
  `#211f1c`, luminance ~32, and the crush floor is 12.
- **Then it measured ink against the wrong control.** Against the *unstyled*
  frame it read `1.74% → 0.02%` — the unstyled scene's own shadows are already
  that colour and the cel ramp then lifts them. The control is now the same look
  with the line at **zero width**: same materials, same hulls, same draw calls,
  same clock, so a difference is the line and can be nothing else.
- **Colour matching could not see an antialiased line at all.** Replaced by a
  per-pixel diff against that control.

### Falsified 2026-08-11

Three injections, each restored from the commit immediately after:

| Injection | Went red |
|---|---|
| `uninstall()` stops restoring swapped materials | every arm reverts bit-identically |
| `INK_MAX_RADIUS` 12 → 0 (nothing is inkable) | S1 inks the objects; S1 puts visible ink |
| `PAGE.margin` 0.062 → 0 | S4 insets the render; S4 renders at panel size |
| F4 fix disabled (`computeVertexNormals()` skipped) | S1 does not render the actor as a flat black silhouette |
| F5 fix disabled (`clip-path` assignment skipped) | S4 holds a scene in the panel, not empty paper |

The middle one is the useful pairing: the count check and the pixel check fail
together, so neither is carrying the other. The material-leak injection is the
one worth keeping in mind — it is invisible in a still, and only the frame hash
catches it. The F5 injection is the same shape as F4's: restoring the exact
symptom (98.4% of the panel matching the paper colour) while the two
pre-existing S4 gates it was added beside — geometry and buffer size — stayed
green the whole time, which is the point of adding a gate that looks inside
the rect rather than around it.

**The F4 gate itself needed three redesigns before it discriminated anything.**
A chest-height single-pixel sample read "black" whether the fix was present or
not — the cast wears near-black coats by design (measured luma 1-5 on the
jacket in a *known-good* render). A bounding box around the whole seated
figure also false-passed with the fault still live (measured stddev 53-57):
its top edge sat above the actual head and its bottom edge crossed the gap
between the sitting pose's splayed legs, sampling background and bench pixels
that never touch the actor. The version that discriminates is a patch
confined to the torso band only — above the leg-splay, below the collar,
verified row-by-row to be inside the silhouette at every y — where the fault
reads exactly `(0,0,0)` and the fix reads real variance.

**The patch's half-width was a third false-pass waiting to happen, caught
before it shipped.** It was first a hand-tuned constant (45px, sized for
`rab`'s on-screen torso at `kerb`). F3 landed five more archetypes the same
day, and the style region's `archetype` is not pinned against that — re-running
it on `morag` (on-screen torso roughly half rab's width) would let a 45px
half-width reach her arms and the bench beside her, the same false-pass this
gate exists to avoid, on the other axis. Half-width is now derived from the
actor's own bind-pose geometry bounding box (a per-archetype proxy for
shoulder width — skinning deforms only on the GPU, so this reads rest pose,
not the live animated frame), scaled by `actor.height` and shrunk by a
calibrated `SAFETY` factor so the derived value for `rab` lands within a
pixel of the constant it replaced. `morag` and `rab` both rendered correctly
under the fix (`/tmp/rv-morag-kerb.png`, `s1-inked.png`) — the fix holds
across archetypes, not just the one this region happens to run.

### The cast was unreadable, and it was the asset — FIXED

**Resolved 2026-08-11** by `src/mcgrots/actors/texture.js`, which lifts the
character textures at load. Everything below is the diagnosis that got there and
is kept because it is the reason the fix is where it is.

`scripts/mcgrots-cast-albedo.mjs` reads the embedded image out of all seven
glbs, offline: rab 37.8, kenneth 55.5, morag 59.3, runt 35.2, slab 44.5,
mcgrot 55.7, pomple 76.1 — **cast mean 50.9 of 255**, against the comics' L*
50.5 (about 120). A gamma lift at exponent 0.55 lands the cast mean at 105,
short of the comics on purpose.

Measured effect at sun 6 / hemi 3: **cast mean 8.3 → 15.6**, and the figure is
legible in `none-a.png` where it was previously a hole in the frame.

Applied at load rather than to the files because the **paused street loads the
same seven glbs** and inlines them into its single-file build.

### Why the fix is not in the lights

### The cast is unreadable, and it is the asset

**Found by G2, caused before it, and not fixed here.** The characters render as
near-black silhouettes at every anchor. `scripts/mcgrots-grade.mjs` now isolates
the cast by hiding the actor and diffing — every changed pixel is the actor and
nothing else, so it needs no mask and no depth buffer.

| Swept | Range | Cast mean luminance |
|---|---|---|
| sun | 6 → 12 | 5.0 → 8.9 |
| hemisphere | 3 → 8 | 8.9 → 10.8 |
| cast albedo | 0.42 → 1.35 | 3.0 → 8.9 |
| camera-side fill | 0 → 6 | 8.3 → 11.0 |

The frame's mean over the same grid is **74–114**. Nothing moves the cast.

The reason is the asset: `rab`'s texture averages **RGB(44, 37, 31)** measured
off the decoded image, and `material.color` saturates at 1.0, so no multiplier
can lift a map that dark — which is why albedo 1.35 did almost nothing. This is
exactly what `docs/STYLE.md` warns about under *"Author cream-forward"*: the
dark end of the palette is where things **land**, not where they should be
**painted**. The character glbs were authored at the landing point.

**Rejected: a camera-side fill light.** Built, swept, removed. It is what the
corpus would suggest — the comics light figures flat and frontally, with no
dramatic key in 418 pages — and the sweep says it moves the cast by 2.7
luminance. A light added to a scene on a rationale the measurement contradicts
is worse than no light.

### The cel look rendered the character black — F4, FIXED

**Resolved 2026-08-11.** Root cause: the skinned actor's geometry
(`actors/skinned.js`, built from the auto-rigged Trellis glb) carries
`position`, `uv`, `skinIndex`, `skinWeight` and **no `normal` attribute** —
measured directly (`Object.keys(mesh.geometry.attributes)`). `MeshLambertMaterial`
(and Phong/Standard/Physical) silently substitute derivative-computed flat
normals when a geometry has none — three.js's `WebGLPrograms.getParameters`
gates that auto-`flatShading` fallback on those four material names by name,
literally. `MeshToonMaterial` is not on the list, so its shader still declares
and reads a `normal` attribute the buffer never provides; WebGL feeds the
attribute's default value, `(0,0,0)`, and every `dot(N,L)` is zero — direct
*and* indirect diffuse both vanish. Solid black, regardless of colour, map,
ramp, outline or cache key, which is exactly why every ruling in the table
below held: none of them touch normals.

**What it was not**, confirmed by isolating each in turn and rendering
(`mcgrots-shot.mjs`, not the bisecting probe the warning below distrusts):
removing `onBeforeCompile` entirely, removing `customProgramCacheKey`,
forcing the colour to solid red, dropping the texture map, disabling the
outline hull, and removing the gradient ramp — the figure stayed black
through every one of them. `MeshLambertMaterial` and `MeshPhongMaterial` on
the *same* mesh both rendered correctly, which is what narrowed it from "the
toon shading model" to "the auto-flatShading whitelist those two are on and
Toon isn't." Dumping the compiled shader's own `parameters` object
(`material.onBeforeCompile(shader, ...)`'s first argument carries them, not
just `.vertexShader`/`.fragmentShader` text) showed `vertexNormals: false`
for the actor's compile and `true` for every other cel-shaded mesh in the
same frame — the direct measurement that closed it.

The brief's leading suspect — a constant `customProgramCacheKey` sharing a
program across a skinning-define mismatch — was **refuted**, not confirmed:
three's cache key construction folds `object.isSkinnedMesh` into the lookup
independently of `customProgramCacheKey`, and the compiled program's own
`skinning` parameter read `true` for the actor throughout.

**Fix:** `looks.js`'s `install()` now calls `mesh.geometry.computeVertexNormals()`
once, only for a target mesh whose geometry lacks the attribute, before
building its cel material. Scoped to `looks.js` because that is where the
Toon-specific requirement is introduced; `actors/skinned.js` is unchanged.

**S1/S2 still differ only by the ramp.** The fix touches normals, not the
`aerial` uniform or any code S2 depends on — confirmed unaffected by
construction, not just by inspection.

Ruled out (kept for anyone re-deriving this): the outline (`uThickness` 0
unchanged), the shade band (`SHADE_BAND` 52 vs 130 unchanged), the albedo
(same texture reads fine under Lambert), the lighting (same lights, same
frame, same instant). The bisecting probe that contradicted itself between
runs (cast mean 15.5 then 1.8, isolating the actor by hide-and-diff) remains
untrustworthy for the reason recorded at the time — it collapses to a biased
sample when the figure is dark — and was not used to re-verify this fix.
**Verified with pictures and with the compiled shader's own parameters,
not with that probe.**

G2 can now rank S1 and S2 on their own terms; the fixed-hour decision (§ G2)
is still open and unrelated to this fault.

### S4's panel rendered empty — F5, FIXED

**Resolved 2026-08-11.** Root cause: `#page` painted over the canvas.
`createPage()` appends `#page` (which contains `.page-paper`, full-bleed by
design — the comment above it explains the alignment reason) to
`document.body` AFTER the canvas already exists in the DOM. Neither element
sets a `z-index`. Two `position`ed siblings with `z-index: auto` paint in DOM
order, later wins — so `.page-paper` painted over the canvas everywhere the
whole time `?page=on` was set, not just around the panel it was meant to
frame. `?page=on` painted cream, the panel rule and the caption correctly;
the panel itself held nothing, ever.

**This was the brief's own leading suspect, and this time it was right** —
established by measuring, not by agreeing: forcing the canvas's `z-index`
above `#page`'s and re-rendering made the scene appear inside the panel.
`document.elementFromPoint`/`elementsFromPoint` at the panel's centre had
reported the canvas as topmost throughout, which briefly looked like a
refutation — it is not one, because `pointer-events: none` (set on `#page`
for exactly the reason its own comment gives: furniture, not content) makes
the browser skip that whole subtree for HIT-TESTING while leaving its PAINT
order untouched. The two are orthogonal; only the second one draws pixels.

**Neither existing S4 gate could have caught it**, and both stayed green
throughout: "S4 insets the render into a panel" reads the panel's geometry
(`panelFraction`); "S4 renders at the panel size" reads the drawing buffer's
dimensions. Neither samples a pixel inside the panel. This is the second
candidate this session to render nothing behind fully green numeric gates —
F4 was a solid black actor through a full suite of green style checks; F5 is
an empty panel through both of S4's.

**Fix:** kept `.page-paper` as one full-bleed surface — the property that
motivated it (alignment at a fractional device ratio, rather than four
strips that can drift a pixel apart) survives — and cut the panel rect out
of it with `clip-path`, computed in `layout()` from the same `v` rect the
canvas is already inset to, using the CSS `evenodd` fill rule to punch a
rectangular hole in a full-window polygon. Considered and rejected:
reparenting the canvas into `#page`'s own stacking context (children of a
single `position: fixed` ancestor paint as one atomic group, so this would
also have worked) — rejected because it means moving a live WebGL canvas in
and out of the DOM on every page toggle, a context-loss risk for what is
purely a CSS fault, for no benefit the `clip-path` version doesn't already
have.

**Two more real factors, neither a bug, were needed before a CAPTURE showed
the fix**, and both cost real debugging time before their nature was clear:

- The boot places the actor with a **snap cut** — there is no previous shot
  to cut away from, but `goTo('back', { snap: true })` runs unconditionally
  at boot regardless, and a snap is still a snap (`main.js`). The hold is
  **real wall-clock time** (`page.js`: `PAGE.cutMs` = 130ms), deliberately
  not tied to the frozen rAF clock this harness drives by hand — so it is
  the one piece of S4's behaviour a capture script cannot fast-forward
  through by calling `stepFrames()` a thousand times; only real elapsed time
  clears it.
- `.page-cut`'s own CSS, `transition: opacity 60ms steps(1, end)`, adds a
  further **~60ms of lag** after the hold's `.on` class clears before the
  PAINTED opacity value actually reaches 0. A `steps(1, end)` transition
  holds the start value for the entire duration and snaps only at the very
  end — measured directly: immediately after `pageStats().cutting` read
  `false` (the class gone), `getComputedStyle(elCut).opacity` still read
  `"1"`.

Combined, a capture needs roughly **190ms** of real wall-clock time from
boot before the panel is genuinely clear, and automated CDP round trips are
often faster than that — a shot taken right after boot lands mid-hold,
legitimately covered by the gutter paper, same as a real player's eye would
be for that beat. `scripts/mcgrots-shot.mjs` now waits for both conditions
(`!pageStats().cutting`, then computed opacity `=== '0'`) before shooting or
evaluating anything. This is test-tooling only; nothing about the product's
timing changed.

**Verified the gutter-hold cut still works, not just that the panel isn't
permanently empty.** Triggered a real `snapTo()` between two anchors,
captured ~100ms into the transition (opacity confirmed `"1"` at that point —
inside the visible-hold window, not the class-just-flipped instant): the
panel showed solid paper with **no leak of either the old or the new
scene**. Then let it clear and confirmed the actor had legitimately arrived
at the new anchor. The `clip-path` change only affects `.page-paper`; `.page-
frame`, `.page-title`, `.page-caption` and `.page-cut` are untouched and
still belong to `#page`'s stacking group, painting above the canvas exactly
as before — which is what the cut still relies on to hide the swap.

**Closed by `7ce2fc1`, and verified by the G2 phase gate 2026-08-12.** The
sheets briefly showed two empty S4 columns per anchor because
`scripts/mcgrots-styleshots.mjs`'s `waitForPageCut()` waited a fixed 160ms —
roughly 30ms short of the ~190ms a capture needs to clear both the hold and
the steps-transition lag measured above. It now waits on the observable
conditions instead (`pageStats().cutting` false, then computed `.page-cut`
opacity `0`). The gate re-ran the rig on a clean tree and confirmed all three
S4 columns carry a rendered scene in `counter.png` and `far.png`.

**What remains empty in those sheets is the ACTOR, not the panel, and it is a
different fault** — see § F6 in `docs/MCGROTS-ROADMAP.md`. The camera cuts to
the destination anchor on the first frame of a walk, so at `counter` and `wall`
the figure is outside the frame for both motion columns. That is a product
staging fault, not a capture-timing one, and no amount of waiting fixes it.

Gate: `docs/MCGROTS-VALIDATION.md` (this file) § G2's style-region table,
"S4 holds a scene in the panel, not empty paper." Control: `PAGE.paper`'s
own RGB (`#d8c69b`) — an empty panel is that colour edge to edge, because
that is literally what sits behind it, and a real render fills the panel
with sky, ground and massing, none of which is close to it. Fault-injected
(the `clip-path` assignment disabled) and confirmed red — 98.4% of sampled
panel pixels matched the paper colour, against 0.0% fixed — then restored.
