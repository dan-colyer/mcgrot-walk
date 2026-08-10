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

13 checks, 1.3s. Captures land in `docs/smoke/captures/mcgrots/g0/`
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
