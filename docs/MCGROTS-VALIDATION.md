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
npm run smoke:mcgrots -- --only=style      # 12 checks
npm run dev:mcgrots                        # /mcgrots.html?look=aerial&style=key&page=on
node scripts/mcgrots-grade.mjs             # now reports the CAST, not just the frame
node scripts/comic-palette.mjs --only=assets/comics/<id>.jpg --k=5
```

Captures land in `docs/smoke/captures/mcgrots/g2/` (gitignored).

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
| style | S2 is S1 plus the ramp | Same hulls, same swaps, only `aerial` differs |
| style | S2 washes distance out | Lighter *and* flatter than S1 |
| style | every key is exactly five | A six-entry key would half-fill the uniform and quantise to black |
| style | S3 lands on its five swatches | 100% of pixels within 10/255 of the `dock` key |
| style | switching the key repaints | Same style, same scene, one uniform |
| style | S4 insets the render | Panel is 50–85% of the window |
| style | S4 renders at panel size | Drawing buffer ≠ window, and the aspect matches |
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

The middle one is the useful pairing: the count check and the pixel check fail
together, so neither is carrying the other. The material-leak injection is the
one worth keeping in mind — it is invisible in a still, and only the frame hash
catches it.

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

### The cel look still renders the character black — F4, open and blocking

With the albedo fixed, the shipped Lambert path shows a legible figure. **Under
`?look=inked` and `?look=aerial` it is still a featureless black blob**, while
the van, both ledges, the plinth and the massing cel-shade correctly in the same
frame.

Ruled out, each confirmed by opening a capture rather than by a number:

| Suspect | Evidence it is not the cause |
|---|---|
| the outline | identical at `uThickness` 0 (`s1-control-nothickness.png`) |
| the shade band | `SHADE_BAND` 52 vs 130 changes nothing |
| the albedo | same texture reads fine in `none-a.png`, same run |
| the lighting | same lights, same frame, same instant |

The only property the character does not share with the objects that work is
that it is a **SkinnedMesh**.

**A warning for whoever picks this up.** A bisecting probe was written to
isolate the cel material's parts and it **contradicted itself between two runs**
— the same variant reported cast mean 15.5 and then 1.8. The cause is the
probe's own metric: isolating the actor by hiding it and diffing counts only
pixels that differ from the background, which collapses to a tiny biased sample
exactly when the figure is dark. That metric is sound for measuring a
*difference* between two grades and unsound for measuring an absolute. **Verify
this fault with pictures.**

**What G2 does NOT prove, therefore:** that any of the four candidates looks
good. They are gated as *present, isolated and reversible*, and the frames are
in the captures folder to be opened. S3 and S4 can be judged now; **S1 and S2
cannot be ranked until F4 is fixed**, because the figure is the thing the player
watches and it is the thing that is broken in them.

**Also unproven:** the fixed hour. G2 owes that decision and it is still open;
it should be settled together with the key (S3), not separately.
