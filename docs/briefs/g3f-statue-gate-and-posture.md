# G3f — the statue's visibility gate, and how the figure sits

Two pieces, deliberately unlike each other. **Land them as two commits, F9
first.** F9 is mechanical and has a right answer; the posture is a judgement
and Dan may reject it. Keeping them separate means rejecting one does not
revert the other.

## Part 1 — F9: the statue gate proves the wrong thing

Injecting `statue.visible = false` in `buildStatue` leaves `--only=statue` at
2/2 and the full suite green. Nothing is rendered at the Foot and every check
passes.

Both checks in the `statue` region (`scripts/smoke-mcgrots.mjs:212`) are blind
by construction:

- one reads `getObjectByName('statue:queen-victoria')` and the absence of
  `statue-placeholder` — the scene graph, not the frame;
- the other projects the authored centre against the five camera rays — a
  distance between two numbers, which a hidden object still has.

**Keep the off-sightline check.** It guards a real regression — the landmark
becoming the subject — its 8.3 m minimum is a measured property G3b had to
preserve, and its `(10,-5)` injection is sound. It is simply not a visibility
gate and must stop being described as one.

**Add a real one, and do not invent a technique.** The `van` region
(`smoke-mcgrots.mjs:365`) already has the working shape and it transfers almost
unchanged:

1. Project the object's world `Box3` through the **live** camera at each
   anchor after a real `snapTo` — not hand maths, not a stored rect. Clamp to
   the viewport so an object half off-screen is measured by the half that
   would actually show.
2. Require the projected area to fall in a sensible band, and say what both
   ends rule out.
3. Require real content inside that rect by luminance stddev, **against the
   flattest of four corner patches** as the control.

That control design was itself the product of a fault: the van's first version
used a fixed sky strip across the top of the frame, and at three of five
anchors the roofline crossed it, so the "flat" control read 41–45 stddev — the
same order as the van. Do not reintroduce a fixed patch. Read the comment
block at `smoke-mcgrots.mjs:427` before writing anything.

**The statue is not the van, and the numbers will differ.** It is smaller in
frame, deliberately off every sightline, and at some anchors may be genuinely
marginal. If it is too small at an anchor for a content check to mean anything,
**say so and exclude that anchor explicitly with its measured number** — do not
widen a band until all five fit. An honest "this check covers three of five
anchors, here is why" is a good outcome. A band stretched to 0.0001% is not.

Fault-inject with `statue.visible = false` — the exact injection that exposed
this — and confirm the new check goes red while the sightline check and every
other region stays green. **Commit before injecting.**

## Part 2 — the figure perches rather than sits

G3e fixed the direction of the legs and the ledge offset, both verified. What
it did not settle is the posture itself.

Measured at full sit: `thighL.rotation.x` is `−0.9666` rad, which puts the
thigh **35° below horizontal** rather than near horizontal. The body occupies
0.359 m of the seat's 0.65 m depth with 40 vertices in contact with the cap.
So the figure is genuinely on the wall — it reads as **propped against it**,
weight forward, rather than sat back on it.

Dan's call, given to this unit: try making it read as sitting.

**This is a judgement, not a measurement.** The rule from G3d's brief holds
here: if you find yourself computing a number to decide which posture looks
better, stop. Render the options and look at them.

Things worth trying, none mandatory and none in preference order — a deeper
thigh angle, more of the body back on the seat, a shin that hangs closer to
vertical, the torso lean that has been carried as "somewhat better" since G3c
and never resolved. Some of these interact: moving the body back on the seat
may want the along-facing offset re-derived, and that offset now has a gate on
it.

**Three constraints, all hard:**

1. **The F10 knee-projection check stays green** — knee ahead of hip on the
   facing. Any posture that fails it is a posture that has reintroduced F1.
2. **Re-verify seat contact after any change**, do not assume it survives.
   The measurement that establishes it: skin the mesh vertices, transform into
   the ledge holder's local frame, and report how much body depth sits over the
   cap footprint and how many vertices touch its top surface. G3e's method
   plus the `applyBoneTransform` path both work; this session measured 0.3587 m
   depth and 40 contact vertices, so you have a before-number to move against.
3. **Do not touch the F4 torso-patch threshold.** It was already lowered 2 → 1
   in G3c to accommodate a pose change. If your pose moves it again, that is
   information about your pose — understand it and say what you found. Lowering
   it a second time to fit is the antipattern this project exists to catch.

**Failing is a legitimate result.** If the rig cannot produce a convincing sit
without bones it does not have — it has nine, and no feet — then say so with
the renders that show it, and leave the perch. That is a real finding about
G8's cast requirements and worth more than a forced pose.

## What Dan looks at

For F9: nothing, unless the check found something.

For the posture: renders, and the anchor camera is not enough. G3e's own
side-profile capture was misread as the figure floating, because the near half
of the 1.8 m wall sits between the lens and the figure and reads as a gap. If
you park a side camera, **either clear the wall or say what is occluding
what.** A three-quarter elevated view shows support far better than a pure
profile.

Give him before-and-after pairs from the same camera, plus `wall` and `kerb` at
600 frames under S2 as they actually ship. Report what you **saw**.

## Scope

`src/mcgrots/` and `scripts/smoke-mcgrots.mjs` only — the street is paused.
Yours: the `statue` region, `actors/skinned.js`, and `anchors.js` / the ledge
block in `main.js` if the posture needs them.

You are the only worker in the tree. Explicit pathspec on every commit —
`scripts/daily-tts.sh`, `scripts/catalog-batches/*.json` and the
`scripts/tts-prompts/` files are not yours and must not ride along.

Not yours: F11 (interrupted-walk camera cut, awaiting Dan's staging call), F12
(the grade numbers), the style ranking (settled: S2).

## Landing

Two commits, each with code, the `docs/MCGROTS-VALIDATION.md` and
`docs/MCGROTS-ROADMAP.md` updates, and the real numbers — measurement, control,
what went red under injection.

For F9, § 10 F9 moves to closed with the evidence. For the posture, record what
you tried and what it looked like, **including anything you rejected and why**.
Most rejected experiments here have sounded obviously right, and the point of
writing them down is to stop the next session re-deriving them.
