# G3e — the seated pose, actually fixed this time

F1 was recorded CLOSED by G3c on 2026-08-12 and reopened the same day by the
G3 phase gate. Two defects are live, they must be fixed together, and the gate
that was supposed to cover them cannot see either.

Read `docs/MCGROTS-ROADMAP.md` § 10 F1 before starting. It carries the full
account, including why the previous attempt got it backwards — which is the
part most likely to catch you the same way.

**Land F7, F8 and F10's replacement check as ONE commit.** The sit pose can
only be judged once: fixing the leg direction while the thighs are still buried
in stone gives you a picture you cannot rule on, and a gate written against the
half-fixed pose bakes in the wrong specification.

## The thing that will catch you

**McGrot's actor faces `(+sin yaw, +cos yaw)`.** The street faces the opposite
way, `(-sin yaw, -cos yaw)`, and that is what `CLAUDE.md` documents. G3c placed
a review camera with the street's formula, rendered the figure, opened the
image, and read backwards as forwards — because it was looking at the figure's
other side. It did everything the verification contract asks and still got an
inverted answer.

So: **derive direction from travel, not from a yaw formula.** Walk the actor
and watch where it goes. That needs no convention and cannot be inverted. If
you must use the yaw form, verify it in the same run — the check is one line
and it is the difference between a measurement and a coin flip.

Confirmed twice, by the phase gate and again by the orchestrator on
2026-08-12: travel direction dotted with `(+sin yaw, +cos yaw)` is exactly
`1.0000`.

## F7 — the legs extend backwards

`src/mcgrots/actors/skinned.js:151`:

```js
const thigh = sit * (Math.PI / 2) * 0.80;
const shin = -sit * (Math.PI / 2) * 0.74;
```

Positive `rotation.x` swings the leg **backward** on this rig. Correlation
between `thighL.rotation.x` and the knee's along-travel offset is **−1.000**;
at `+0.55` the knee sits 0.1978 m behind the hip, at `−0.55` 0.1978 m ahead. At
full sit `thighL.rotation.x` reads `+1.5466` and the knee is **0.3727 m behind
the hip**. Both thighs point behind the figure. From the front it reads as
someone standing in a booth behind a wall — no legs visible at all.

The fix the phase gate demonstrated, both signs mirrored:

```js
const thigh = -sit * (Math.PI / 2) * 0.80;
const shin  =  sit * (Math.PI / 2) * 0.74;
```

Flipping `thigh` alone puts the legs forward but hovering — the shin then
continues forward instead of dropping. Both must move. This is the mirror of
what the existing code comment already says the pose is meant to do.

**Check the `PELVIS_TILT` compensation survives it.** Lines 173–174 add
`+ sit * PELVIS_TILT` to both thighs to hold the leg's world-space angle
constant while `hips` tips back. That compensation was derived against the
old sign. Re-derive it or re-measure it; do not assume it still cancels.

## F8 — the thighs are buried in the capstone

This survives F7's fix rather than being cured by it, which is why they are one
unit.

`SEAT_HEIGHT` (`src/mcgrots/anchors.js:42`) is `0.5712` — the measured world
height of the **hip bone** at full sit. `main.js:181` builds the capstone's top
at exactly that. Someone sitting on a wall rests the **underside of the thigh**
on the stone, so the hip bone sits above the surface, not level with it.

Measured: the thigh drops only 0.065 m over its 0.373 m run
(`kneeBelowHip = −0.0656`), leaving the cap's rear face at y = 0.5144 while the
cap occupies 0.5112–0.5712. The whole 0.325 m of thigh inside the ledge is
inside the stone, both sides, both sitting anchors.

Two things to fix, and they are separate:

**1. The ledge is too tall.** `SEAT_HEIGHT` is used only to build the ledge —
the figure's seated hip height comes from `SEAT_DROP` in `skinned.js` and the
rig, and does not depend on it. So lowering `SEAT_HEIGHT` lowers the stone
under a figure that stays put. **Measure the leg mesh, do not guess a thigh
radius**; the requirement is that no part of the leg geometry intersects the
cap's `Box3`. Raising the figure instead (via `SEAT_DROP`) is a legitimate
alternative — if you take it, say why, and note that it moves the whole body
including the head.

**2. The along-facing offset has to come back.** G3c deleted G1's 0.3 m offset
on the grounds that the hip has zero horizontal offset in any pose. That
measurement was correct and had no bearing on the offset. Its job was to put
the seat's **front edge** under the buttocks so the thighs swing clear of the
stone — that derives from the seat's **depth**, not from the hip:

```
SEAT_DEPTH / 2 + CAP_OVERHANG  =  0.55 / 2 + 0.05  =  0.325
```

The ledge holder is built at `main.js:167` with `holder.rotation.y = a.yaw`, so
its local `+z` maps to `(sin yaw, cos yaw)` — the actor's facing. The ledge
belongs **behind** the figure, so the offset goes along local `−z`. Verify that
mapping in the same run rather than trusting this paragraph; it is exactly the
kind of derivation that just cost a milestone.

The comment block at `main.js:146` argues the offset to zero. Rewrite it. Keep
what the rig measurement actually established — the hip does not translate —
and say what the offset is really for.

## The gate — F10, and why the current one is worse than useless

The `seat` region measures the hip and only the hip. Since the hip has zero
horizontal offset in any pose, it reports the actor's group placement and
nothing about the legs. **Injecting F7's sign flip leaves the suite at 38/38.**
The seated/standing control separates 0.57 m from 0.79 m, which is `SEAT_DROP`
— again not the legs.

Its vertical assert is actively wrong:

```js
Math.abs(hip.y - box.max.y) <= HEIGHT_TOL
```

This **requires** the hip bone to sit at the stone surface — it encodes F8 as
the specification, and passes with zero margin used. After your fix the hip
will correctly sit above the cap and this assert will go red. **Do not widen
the tolerance until it fits.** Rewrite it to assert the relationship that is
actually correct, and say in the docs what the new number derives from.

**Add the check that would have caught F1:** the knee's offset from the hip,
projected on the actor's facing, **required positive**, at both sitting
anchors, with the standing pose at the same anchor as the control.

Keep the existing ledge-placement checks. They are honest, their own injection
does go red, and they prove two true things — the ledge is built at the anchor
and the sit state applies its drop. The fault was claiming the pose on the
strength of them.

Every new check needs its named control and a fault injection proving it can go
red. **Commit before you inject** — `git checkout <paths>` silently restores
nothing if any path in the list is untracked, and a surviving injection looks
like a second bug next run.

## What Dan looks at

The numbers cannot rule on this. A green suite is what shipped the fault twice.

Render the seated figure **from the front**, close enough to see the legs — not
one of the five anchor shots, where the legs are a few pixels and G3c read the
figure as plausible without examining it. Park a camera deliberately. Also
render a true side profile, with the camera position derived from travel
direction rather than a yaw formula.

Then render `wall` and `kerb` at 600 frames under S2 as they actually ship, and
open those too — the fix has to survive at the distance the game plays at.

Report what you **saw**, not what you concluded. Where you changed a number,
say what it looked like before and after.

## Scope

`src/mcgrots/` only — the street is paused. Yours: `actors/skinned.js`,
`anchors.js`, the ledge block in `main.js`, the `seat` region in
`scripts/smoke-mcgrots.mjs`, and the docs.

You are the only worker in the tree. Follow the pathspec rule in `AGENTS.md`
§ Landing anyway — the TTS files and `scripts/catalog-batches/*.json` in the
tree are not yours and must not ride along in your commit.

Not yours: the statue's visibility gate (F9, next unit), the interrupted-walk
camera cut (F11, awaiting Dan's staging call), the grade numbers (F12).

## Landing

One commit: code, `docs/MCGROTS-VALIDATION.md` § G3c and the seat rows in its
region table, `docs/MCGROTS-ROADMAP.md` § 10 F1 moved to closed **with the
evidence that closes it**, and a commit message carrying the real numbers — the
measurement, its control, and what went red under injection.

F1 has now been recorded closed once while broken. **If any part of it is still
open when you land, say so and leave it open.** A partial fix reported as
partial is a good outcome; the failure mode this project exists to catch is the
other one.
