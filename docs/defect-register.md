# McGrot Walk — Defect Register (Milestone D0)

Systematic visual audit of the full street (~1617m, chainage 0 at the Foot of the
Walk / north end, increasing south). Camera posed via the dev probe at street
height (y≈1.7) every ~85m, one shot facing east, one facing west, one looking
south along the street, after allowing textures in range time to load. 57
screenshots in [`docs/audit/`](audit/), named `<chainage>-<bearing>.jpg`.

This is ground truth for the next milestone (façade-system redesign) — entries
register what a fresh player would notice, not sub-pixel nitpicks.

## Categories

`facade-skew` · `facade-stretch` · `facade-partial` (shop cut off mid-unit) ·
`facade-seam` (strip/ground misalignment) · `facade-repeat` (obvious tiling) ·
`blank-texture` · `scale` (doll's-house proportions) · `floating-prop` ·
`z-fight` · `other`

## Register

| # | Chainage | Side | Category | Severity | Description | Screenshot |
|---|----------|------|----------|----------|--------------|------------|
| 1 | 0040 | west | blank-texture | high | Large flat olive-green quad fills a shopfront/facade panel where a photo-textured unit should sit, mid-block | [0040-west.jpg](audit/0040-west.jpg) |
| 2 | 0040 | west | facade-repeat | med | Identical window-bay unit tiled ~6× across the upper storeys with no variation | [0040-west.jpg](audit/0040-west.jpg) |
| 3 | 0040 | west | facade-seam | med | "CENTRAL BAR" photo-texture insert seams visibly against the tiled window units beside it | [0040-west.jpg](audit/0040-west.jpg) |
| 4 | 0040 | east | other | med | Solid grey triangular wedge of geometry pokes up mid-background between two building textures — appears to be corner-infill geometry left untextured; recurs at multiple chainages (see #12, #22, #29, #38) | [0040-east.jpg](audit/0040-east.jpg) |
| 5 | 0040 | east | facade-stretch | low | Background building's photo texture reads warped near the roofline (the round "F" window is visibly distorted) | [0040-east.jpg](audit/0040-east.jpg) |
| 6 | 0040 | along | other | low | Dappled white dithering/checkerboard artifact on the pavement, bottom-right of frame; recurs in nearly every south-facing shot (see summary) | [0040-along.jpg](audit/0040-along.jpg) |
| 7 | 0125 | west | facade-skew | high | Building corner is heavily twisted — the "CROWN STREET" sign and the wall plane above it fold at an unnatural diagonal | [0125-west.jpg](audit/0125-west.jpg) |
| 8 | 0125 | west | blank-texture | med | Flat salmon/pink slab visible in the gap between buildings, background | [0125-west.jpg](audit/0125-west.jpg) |
| 9 | 0125 | east | blank-texture | high | Flat dark-brown rectangular panel fills a full storey mid-block between two textured facades | [0125-east.jpg](audit/0125-east.jpg) |
| 10 | 0125 | east | facade-repeat | high | Left-hand building shows the same window-bay unit tiled in an obvious grid, ~8 repeats visible | [0125-east.jpg](audit/0125-east.jpg) |
| 11 | 0125 | along | facade-seam | med | Foreground-left building's texture strip is misaligned against its geometry at ground-floor level | [0125-along.jpg](audit/0125-along.jpg) |
| 12 | 0125 | along | blank-texture | med | Flat olive-green panel on the right-hand building, same untextured-unit pattern as #1 | [0125-along.jpg](audit/0125-along.jpg) |
| 13 | 0210 | west | facade-stretch | high | "LEITH MAKERS" shopfront sign/shutter shows heavy horizontal banding — a stretched, low-resolution texture | [0210-west.jpg](audit/0210-west.jpg) |
| 14 | 0210 | east | other | med | Same grey/olive corner-infill wedge as #4, recurring | [0210-east.jpg](audit/0210-east.jpg) |
| 15 | 0210 | east | facade-skew | med | "JOLLY" restaurant unit sits in a panel that reads visibly rotated relative to its neighbours | [0210-east.jpg](audit/0210-east.jpg) |
| 16 | 0295 | west | facade-seam | low | Thin sliver of an unrelated building texture pokes in at a hard angle, left edge of frame | [0295-west.jpg](audit/0295-west.jpg) |
| 17 | 0295 | east | facade-repeat | med | "ZOOMO" and "KIKI'S CAFE" shopfront photo-signage duplicated at both ends of the same block | [0295-east.jpg](audit/0295-east.jpg) |
| 18 | 0295 | east | facade-skew | med | Diagonal crease where two window-strip textures meet mid-building, corner folds oddly | [0295-east.jpg](audit/0295-east.jpg) |
| 19 | 0380 | west | blank-texture | high | Large flat grey/olive box fills most of the frame directly behind a vendor NPC — no texture, wrong-read scale | [0380-west.jpg](audit/0380-west.jpg) |
| 20 | 0380 | east | facade-repeat | high | "EASY TAN" shopfront (including window texture above) duplicated identically twice, side by side | [0380-east.jpg](audit/0380-east.jpg) |
| 21 | 0380 | along | facade-stretch | med | Left-hand building shows an unnatural repeated vertical-strip ("venetian blind") stretch on its corner wrap | [0380-along.jpg](audit/0380-along.jpg) |
| 22 | 0465 | east | other | med | Recurring grey corner-infill wedge, same defect as #4/#14 | [0465-east.jpg](audit/0465-east.jpg) |
| 23 | 0465 | east | facade-repeat | med | Window-bay unit repeats identically across the block behind the "WINTER SUN" billboard | [0465-east.jpg](audit/0465-east.jpg) |
| 24 | 0465 | along | facade-skew | high | Building beside Hamish Bonar's stall leans/folds at an unnatural angle along its full height | [0465-along.jpg](audit/0465-along.jpg) |
| 25 | 0550 | west | facade-partial | med | "SEA BREEZE CAFE" shopfront has no shutter-slat texture below its sign — a flat near-black panel where the striped shutter (present on every neighbouring unit) should be | [0550-west.jpg](audit/0550-west.jpg) |
| 26 | 0550 | east | facade-repeat | high | Five consecutive shopfronts (ROMEO / ARTISAN COFFEE / BEST KEBAB HOUSE / THE FAIRY BOY OF LEITH / SATYR) share the literal same window-bay photo texture | [0550-east.jpg](audit/0550-east.jpg) |
| 27 | 0635 | west/along | floating-prop | low | A knocked-over traffic cone clips through its own base/the temp fencing rather than resting on the ground; recurs at #33, #41 | [0635-along.jpg](audit/0635-along.jpg) |
| 28 | 0720 | east | blank-texture | high | Very large flat dark grey/olive panel dominates the frame immediately beside a fully-loaded NPC comic — one of the most visible blank panels on the whole street | [0720-east.jpg](audit/0720-east.jpg) |
| 29 | 0720 | along | other | low | Corner-infill wedge again, small | [0720-along.jpg](audit/0720-along.jpg) |
| 30 | 0805 | west | facade-repeat | high | Entire curved building wraps with the same diagonal-brick-with-window unit tiled ~8× around the curve | [0805-west.jpg](audit/0805-west.jpg) |
| 31 | 0805 | east | facade-repeat | med | "BRASS MONKEY" and "AMOR" share an identical ornate pediment/door photo unit | [0805-east.jpg](audit/0805-east.jpg) |
| 32 | 0890 | west | facade-repeat | med | Same "TO LET" window unit tiled 4× identically along the upper storey | [0890-west.jpg](audit/0890-west.jpg) |
| 33 | 0890 | east | facade-repeat | high | Upper-storey texture shows a broken triangulated tiling pattern — visible triangle seams repeated across a ~4×3 grid, reads as a UV-mapping fault rather than ordinary reuse | [0890-east.jpg](audit/0890-east.jpg) |
| 34 | 0975 | west | blank-texture | high | A run of flat mono-colour vertical slabs (blue-grey, olive, tan) stands in for buildings receding toward the vanishing point | [0975-west.jpg](audit/0975-west.jpg) |
| 35 | 0975 | east | facade-repeat | high | Same ornate column/pediment building unit repeated identically ~6× filling the entire frame | [0975-east.jpg](audit/0975-east.jpg) |
| 36 | 0975 | along | other | med | Pavement dithering artifact (see #6) at its worst here — covers roughly 30% of the visible road/pavement in large blocky patches | [0975-along.jpg](audit/0975-along.jpg) |
| 37 | 1060 | east | blank-texture | high | Large flat brown blank panel, full-height, beside a textured neighbour | [1060-east.jpg](audit/1060-east.jpg) |
| 38 | 1060 | along | blank-texture | med | Large flat brown panel, far right of frame | [1060-along.jpg](audit/1060-along.jpg) |
| 39 | 1060 | along | facade-repeat | high | Same triangulated-seam tiling fault as #33, right-hand building | [1060-along.jpg](audit/1060-along.jpg) |
| 40 | 1145 | west | facade-partial | med | "TESCO EXPRESS" shopfront is missing its shutter-slat texture (flat dark panel) while "NOT JUST COFFEE" beside it has the correct striped shutter | [1145-west.jpg](audit/1145-west.jpg) |
| 41 | 1145 | east | floating-prop | low | Small dark bin/box lies tilted, appears to clip into the pavement rather than sit on it | [1145-east.jpg](audit/1145-east.jpg) |
| 42 | 1145 | along | other | low | A Leither nameplate ("Nettie Gowk") floats directly over the roof of a parked car with no visible NPC body — the walker appears to have spawned inside/behind the vehicle | [1145-along.jpg](audit/1145-along.jpg) |
| 43 | 1230 | west | blank-texture | med | Flat pale-olive vertical wall visible between shopfronts | [1230-west.jpg](audit/1230-west.jpg) |
| 44 | 1230 | west | facade-partial | med | "LEOMAX" and "OH DEER" shopfronts both missing shutter-slat texture below their signs | [1230-west.jpg](audit/1230-west.jpg) |
| 45 | 1230 | east | facade-repeat | high | Same building unit (columned facade) tiled identically ~6× across the full frame | [1230-east.jpg](audit/1230-east.jpg) |
| 46 | 1230 | east | blank-texture | med | Flat brown panel breaks the repeated unit, centre of frame | [1230-east.jpg](audit/1230-east.jpg) |
| 47 | 1315 | west | blank-texture | med | Flat dark-brown blank panel, right of centre | [1315-west.jpg](audit/1315-west.jpg) |
| 48 | 1315 | along | blank-texture | high | Large flat grey slab with zero texture sits between two fully-textured buildings — one of the starkest examples on the street | [1315-along.jpg](audit/1315-along.jpg) |
| 49 | 1400 | west | facade-partial | high | Four consecutive shopfronts (GUAJIRA / PHONE SPOT / GARLANDS / MEDUSA HAIR) all missing shutter-slat texture — a whole run of flat dark panels | [1400-west.jpg](audit/1400-west.jpg) |
| 50 | 1400 | east | blank-texture | high | Long run of flat mono-colour vertical bands (brown/grey/olive) stands in for an entire block of buildings receding into the distance — the single most dramatic blank-texture run recorded | [1400-east.jpg](audit/1400-east.jpg) |
| 51 | 1400 | east | blank-texture | high | Separate large flat dark-grey panel attached to an otherwise-textured corner building | [1400-east.jpg](audit/1400-east.jpg) |
| 52 | 1485 | east | facade-stretch | med | "Edinburgh Christadelphian Church" facade shows a rippled vertical-stripe stretch artifact, as if a narrow texture were wrapped around a cylinder | [1485-east.jpg](audit/1485-east.jpg) |
| 53 | 1570 | west | facade-skew | high | Corner building folds sharply along its vertical edge, reading as creased/warped paper rather than solid geometry | [1570-west.jpg](audit/1570-west.jpg) |
| 54 | 1570 | east | facade-repeat | med | "FITSHOP" shopfront (with matching window texture above) duplicated twice side by side | [1570-east.jpg](audit/1570-east.jpg) |
| 55 | 1570 | along | scale | high | Near the street's south terminus, real buildings give way to flat mono-colour slabs and one round-tower unit duplicated identically beside itself — the environment visibly runs out of dressing here | [1570-along.jpg](audit/1570-along.jpg) |
| 56 | 1570 | along | facade-repeat | high | The round-tower ("FROGA"-style) building unit and its neighbour are the same mesh/texture repeated with no variation | [1570-along.jpg](audit/1570-along.jpg) |
| 57 | — | comics | blank-texture | med | Vendor and litter comics render as flat placeholder quads until the player is within ~30–34m despite being visible (through fog) from much further out — the class of bug fixed in Milestone D2; see that changeset for detail | [0040-along.jpg](audit/0040-along.jpg) |

## Summary

### Counts per category

| Category | Count |
|---|---|
| blank-texture | 17 |
| facade-repeat | 15 |
| facade-partial | 4 |
| facade-skew | 5 |
| facade-stretch | 4 |
| facade-seam | 3 |
| other | 6 |
| floating-prop | 2 |
| scale | 1 |
| **Total** | **57** |

### Worst 5 individual offenders

1. **#50 — chainage 1400, east** ([1400-east.jpg](audit/1400-east.jpg)): a long run of flat mono-colour vertical bands stands in for an entire block — the most visually dramatic blank-texture failure on the street.
2. **#35 — chainage 975, east** ([0975-east.jpg](audit/0975-east.jpg)): the same ornate building unit repeated identically ~6× fills the whole frame — the worst tiling repeat recorded.
3. **#7 — chainage 125, west** ([0125-west.jpg](audit/0125-west.jpg)): a building corner twists into an unnatural fold, warping the "CROWN STREET" sign with it — the clearest facade-skew failure.
4. **#28 — chainage 720, east** ([0720-east.jpg](audit/0720-east.jpg)): a huge flat blank panel sits directly beside a correctly-textured NPC comic, making the contrast between "working" and "broken" facades unmissable.
5. **#55/#56 — chainage ~1570, south terminus** ([1570-along.jpg](audit/1570-along.jpg)): the street's dressing visibly runs out near its southern end — flat colour slabs and a duplicated round-tower unit combine into a doll's-house, unfinished read that will be the first thing a player notices if they walk the Walk end to end.

### Notes for the façade-system redesign

- **blank-texture** and **facade-repeat** are by far the dominant categories (32 of 57 entries, 56%) — the current system appears to fall back to an untextured flat-colour box or re-use a nearby photo unit whenever a building doesn't get a dedicated facade treatment. Fixing the fallback path would likely resolve the majority of this register in one change.
- A recurring grey/olive triangular **corner-infill wedge** (#4, #14, #22, #29) suggests a specific gap-filling mesh that never receives a material.
- A pavement **dithering/checkerboard artifact** appears in most south-facing shots (#6, #36) — likely a texture-tiling or mip transition seam on the pavement mesh, worth a dedicated look even though it's not facade-related.
- The **south end of the street (chainage ≳1500)** is the single worst stretch — dressing density drops off sharply and placeholder geometry becomes dominant.
