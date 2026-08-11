# Brief — G2: the sun, measured against the actor

You are the implementer. `AGENTS.md` holds without amendment.

**This is an investigation that ends in a recommendation, not a change to the
shipped lighting.** Read the whole brief before starting; the last section is
the one that constrains you.

**You own `scripts/mcgrots-sun.mjs` (new) and `scripts/mcgrots-styleshots.mjs`
if you need to reuse its compositor.** Sonnet owns `src/mcgrots/page.js` and the
page CSS for F5. Do not touch `src/mcgrots/site.js` — see the constraint below.

## The finding

At every anchor the camera sits behind the actor, and `LIGHT.sunAzimuth` is
`-2.1` radians, deliberately placing the sun behind the Foot buildings. So at
rest the player sees the side of the character facing away from the sun.

Visible in the sheets you built. In `far.png`, S1 row: mid-stride the actor
faces the camera and reads as a light tan jacket with legible bands; approach
and arrived — the two frames where it is at an anchor — it is a dark lump. Same
figure, same light, same frame, one stride apart.

## Why nobody caught it

`site.js` records that the pair `sun 6, hemi 3` was chosen by sweeping
`mcgrots-grade.mjs` over 20 sun/hemisphere pairs and taking the darkest that
crushes nothing: `mean 76.7, stddev 51.4, 0.0% black, 0.0% blown`.

Every one of those terms is **whole-frame**. The actor is a few percent of the
frame, so its own legibility has never been in the objective function at all.
`mcgrots-grade.mjs`'s own header already records the same class of error from
the other direction — it swept with the capsule body until 2026-08-11 and
thereby certified a grade under which the cast renders as a black silhouette.

`site.js` itself says G2 owns the real grade and should re-run the sweep against
the chosen style rather than inherit the two numbers. This is that work, with
the missing term supplied.

## What to build

`scripts/mcgrots-sun.mjs`, doing three things:

1. **Quantify the geometry.** For each of the five anchors, report the angle
   between the camera's view direction and the sun's azimuth. That number is the
   finding stated precisely rather than as "the sun is behind them". Say which
   anchors are worst.
2. **Measure the actor, not the frame.** The F4 gate in `scripts/smoke-mcgrots.mjs`
   already samples a torso patch and derives its half-width from the mesh
   bounding box, per archetype. Reuse that approach. Report mean, stddev and max
   over the actor's own pixels — a legibility number the grade sweep never had.
3. **Sweep and show.** Vary `sunAzimuth` and `sunAltitude` at runtime through
   the debug API — `dbg.setGrade` exists and `dbg.lights` exposes the sun — and
   report the actor-legibility numbers per setting alongside the whole-frame
   ones. Render the best few and **open the captures.** The numbers narrow the
   field; the picture decides.

Sweep on **S2 (`?look=aerial`)**, which is Dan's current front-runner, and on
`rab`. Note in your report whether a chosen setting also holds for morag, whose
albedo is different.

## The constraint that matters

**Do not change `src/mcgrots/site.js`.** The five sheets under
`docs/smoke/captures/mcgrots/g2/` are what Dan is ranking from right now, and a
lighting change invalidates all of them and the comparison between candidates
with them. Your deliverable is the tool, the measurements and a recommendation
with captures. Dan picks the hour, and `site.js` records that the hour and the
style are one decision, so it is not yours or mine to make.

If the sweep says the current setting is already the best available, that is a
result and it lands the same way. A measured rejection is delivered work.

## Definition of done

- `scripts/mcgrots-sun.mjs` exists and `npm run sun:mcgrots` runs it.
- The per-anchor camera/sun angle table.
- Actor-legibility numbers for the shipped setting and for each swept setting,
  with the control named — the whole-frame numbers beside them, so it is visible
  that the two disagree.
- Captures rendered for the shipped setting and your best candidates, **opened**,
  with what you saw written down per capture.
- No acceptance gate is added, so say that rather than inventing a fault
  injection.
- `npm run smoke:mcgrots` must still pass — check with control first, Sonnet is
  in the render path for F5.
- Landed per `AGENTS.md` § Landing, with `docs/MCGROTS-VALIDATION.md` recording
  what the tool measures and that the shipped grade's sweep never measured the
  actor.

## Reporting

`.herdr/codex.md`. Ping control on QUESTION or DONE only. Report what you saw,
not what you concluded.
