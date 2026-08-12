# G3d — the five composed shots, and the fixed hour

The pitch is now dressed: the van and price board (G3a), Queen Victoria
(G3b), a real wall and a figure that sits on it properly (G3c). This is the
unit that decides what the player actually looks at, and under what light.

Style is settled: **S2 · Aerial flatten**. Do not re-open it.

This is a **judgement** unit. Most of it is looking at pictures and deciding.
Do not reach for a metric to make the decision for you — the brief that set up
G2's review rig said it plainly and it holds here: if you find yourself
computing a mean luminance to decide which framing is better, stop.

## What is wrong now, measured

Two observations from the 2026-08-12 review, both in
`docs/MCGROTS-ROADMAP.md` § G3:

**1. The van's framing swings tenfold across the five shots.** Measured
by G3a's own gate as the fraction of frame the van's projected bounding box
occupies:

| anchor | van fills |
|---|---|
| `counter` | 57.6% |
| `wall` | 14.3% |
| `kerb` | 12.2% |
| `back` | 7.5% |
| `far` | 6.5% |

At `counter` it dominates; at `far` and `back` it is a distant box and the
price board text is not legible (G3a confirmed that by opening the captures).
Whether that spread is wrong is your judgement — a close shot and a wide shot
*should* differ. What is hard to defend is that four of the five sit in a
narrow band and one is four times the next largest.

**2. The `back` wide has an empty middle distance.** The van sits left, the
statue right, and the ground between them is bare. Render it and look: the
composition has no subject in its centre.

## What to decide

**The five camera positions.** `anchors.js` computes each shot from a rule
rather than authoring five eye positions by hand — read its header, which
explains why (the hand-authored version put every shot on the pitch-to-statue
axis). Keep a rule if a rule still serves; replace it if the rule is what
produces the tenfold spread. Either is a legitimate outcome. **Say which, and
why, with the numbers.**

You may move anchor positions here — you are the only unit permitted to. Doing
so moves the sitting spots, so re-render `wall` and `kerb` and confirm G3c's
seat gate still passes rather than assuming it does.

**The fixed hour.** One authored lighting setup, no day cycle — decided at G0,
deferred through G2, and now due. `site.js` § `LIGHT` holds the current pair,
chosen by `scripts/mcgrots-grade.mjs` sweeping 20 sun/hemisphere pairs
**against the G0 blockout**. That blockout is gone. Re-run the grade against
the dressed pitch under S2 and pick again.

**Two hard constraints on the light, both already paid for:**

- **Do NOT re-run the 48-setting sun-direction sweep.** G2 closed it with a
  geometric argument that still holds: the camera-to-sun separation across the
  five anchors is 54.0°/51.4°/35.4°/31.3°/26.9°, so no single azimuth faces
  the actor at more than one anchor. The shipped direction ranked 7th of 48 on
  actor brightness with a *better* peak than the winner. Re-running it wastes
  a morning to re-derive a no.
- **The figure is still dark at rest** — torso patch mean 3.6 parked at
  `counter`, measured by the phase gate on a 6,723-pixel sample. That is where
  the game asks the player to stand and listen. The sun cannot fix it. Three
  options were named and none has been tried: a **camera-carried fill or rim
  light**, **moving the anchor cameras** so the figure faces the light, or
  **accepting a dark figure at rest**. Moving the cameras is yours anyway, so
  you are the unit that can try two of the three. Try at least one properly
  and report what it looked like.

The physical-unit warning in `site.js` is load-bearing: three.js intensities
that "look right" are 10–100× the legacy scale, and the first version of that
file rendered the ground at RGB (13,9,4) with the suite passing. **Numbers
cannot see a bad picture.**

## The gate

Composition is a judgement and mostly ungateable, which is the honest position
— say so in `docs/MCGROTS-VALIDATION.md` rather than inventing a check that
launders taste as measurement.

Two things here *are* gateable and worth it:

- **The frame is a picture.** A contrast floor at every one of the five shots,
  so a later change cannot render one of them black or blown. The street's
  E2g.1 has the precedent.
- **G3a's van-fraction check still passes** at whatever the new framings are.
  If you change its bounds, say what the new numbers are derived from — do not
  widen them until they fit.

Any new check needs a **named control** and a **fault injection** proving it
can go red. Commit before you inject.

## What Dan looks at

This unit is entirely pictures. Render all five shots under S2, at 600 frames
so the actor has settled, and open every one. Then re-run
`npm run styleshots:mcgrots`.

Report what you **saw**, shot by shot. Where you changed a framing, say what it
looked like before and after. Dan is choosing between compositions, so give him
the images and a one-line reason each, not a table of luminances.

## Scope

`src/mcgrots/` only — the street is paused.

You are the only worker in the tree for this unit. Follow the pathspec rule in
`AGENTS.md` § Landing anyway; the TTS files in the tree are not yours.

Not yours: the style ranking (settled), the van's geometry (G3a, landed), the
statue's geometry (G3b, landed — though if your framing makes her read badly,
say so rather than editing her). F1's torso lean is **partly open**: G3c
improved the pelvis but reported the forward hunch as only "somewhat better".
If a framing change makes that worse or better, say which.

Land as one unit: code, `docs/MCGROTS-VALIDATION.md` including what you
deliberately did not gate and why, `docs/MCGROTS-ROADMAP.md` § G3d with the
fixed hour recorded as a decision, and a commit message carrying the real
numbers.
