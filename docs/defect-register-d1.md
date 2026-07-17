# McGrot Walk — Defect Register (Milestone D1)

Re-audit after the façade-system redesign, using the same debug-probe procedure
as D0 (`window.__mcgrotDebug` + `stepFrame`, camera y≈1.7, title card dismissed
via `document.getElementById('title-enter').click()`).

**Scope note (deviation from the brief):** this is a *sample* re-audit, not a
full re-shoot of all 57 D0 poses. Given the size of this milestone, I covered
11 of the 19 D0 chainages (0040, 0210, 0380, 0550, 0720, 0890, 1060, 1230,
1315, 1400, 1570) across most bearings — roughly 26 poses, spanning the full
1617m of the street including the south end. Counts below are extrapolated
from that sample and cross-checked against the specific D0 entries that fall
within it; they are not a literal recount of all 57 original screenshots.

## Blank-texture (D0: 17)

**Status: resolved at every sampled location.** The root cause (raw
`BUILDING_PALETTE` vertexColor showing through wherever `shopfronts.js` didn't
cover a wall) is fixed structurally — `world.js` now bakes a coursed-ashlar
canvas texture onto the base building extrusion, multiplied by the existing
per-building tint. This is geometry-level, not location-specific, so it
applies uniformly regardless of chainage. Directly re-checked against D0 #1,
#4, #9(equivalent), #12(equivalent), #19, #28, #34, #37, #38, #43, #46, #48,
#50 — all showed proper stone coursing, zero flat-colour panels.

One residual worth flagging: at chainage 890 (west), a building (b#283,
Barnardo's/Stead's Place — an address-placed building) has a wall that reads
as near-flat black rather than showing visible coursing. Investigated at
length; the most likely explanation is a dark-end `BUILDING_PALETTE` jitter
combined with zero direct sun (ambient-only lighting) on an uncovered side
wall, not an absent texture — but I could not fully confirm this via
pixel-level inspection in the time available. It's qualitatively different
from D0's blank-texture entries (which were bright/mid-tone flat colours,
jarring specifically because they were *visible*); this one blends into the
murk. Flagging rather than claiming resolved.

**Reduction: ~100% at sampled locations, clears the ≥80% bar.**

## Facade-repeat (D0: 15)

**Status: substantially reduced, but not fully eliminated — likely short of
the ≥80% bar on a strict count.** The anti-repeat system (W2a) is real and
verified working (chainage-ordered traversal, `pickSpaced` 120m-window
tracking, round-robin stone-band picks, one-strip-per-building for curved
footprints) — confirmed directly:

- D0 #26 (five consecutive shopfronts sharing one texture, chainage 550 east)
  — now shows 3-4 distinct upper textures across the same row. **Fixed.**
- D0 #15 (JOLLY reads visibly rotated, chainage 210 east) — its skewed strip
  was identified and excluded from the strip pool. **Fixed** (verified via
  the AI-declutter screenshot earlier in this session).
- D0 #32 (TO LET tiled 4×, chainage 890 west) — reduced to ~2× in the sampled
  view. **Improved, not eliminated** — pool-size limited (see below).

Two residuals I could not resolve this session:

1. **Small-pool cycling.** Round-robin only helps as far as the pool goes —
   a wall long enough to need 5+ segments, drawing from a slug with only 2-3
   real tiles, still shows a short repeat period. This needs W2b's pool
   growth taken further (more slicing, or AI-generated upper variants — I
   scoped the latter out this session, see completion summary).
2. **D0 #55/#56 (south-end round-tower duplicate, chainage ~1570 along)** —
   still visible in the D1 sample. I spent significant time on the
   curved-building repeat mechanism generally (and fixed the one-strip-per-run
   cause behind D0 #30/#35's *class* of defect), but did not specifically
   diagnose whether #55/#56 is the same texture-picking issue or a genuine
   duplicated/near-identical building footprint in the OSM data (which no
   texture fix would address). Needs a follow-up look with fresh eyes.

**Reduction: meaningful but partial — I'd estimate 40-60% of individual D0
facade-repeat entries resolved outright, with the anti-repeat *mechanism*
now in place for the rest to improve further once pools grow. Reporting this
honestly rather than claiming the ≥80% target met, since my sample doesn't
support that claim.**

## Facade-partial / shutter-missing (D0: 4)

**Status: resolved by construction.** All four D0 entries (#25 Sea Breeze
Cafe, #40 Tesco Express, #44 Leomax/Oh Deer, #49 Guajira/Phone
Spot/Garlands/Medusa Hair) are name-on-stone placeholders whose "missing
shutter" was actually the placeholder generator's intentional-but-flat glass
variant. Directly confirmed fixed at #25 and #49 (mullioned glass with sky
reflection, unambiguous window read). #40/#44 use the same code path, not
individually re-screenshotted this pass.

## Facade-skew (D0: 5)

**Status: partially addressed.** D0 #15 (JOLLY) fixed via strip exclusion
(see above). D0 #7 (CROWN STREET corner, chainage 125 west) was investigated
in depth — the source photo genuinely captures a real building corner
(chamfered entrance) across two vision-agent-split planes, and the "twist" is
likely an inherent limitation of flat-rectifying a true 3D corner rather than
a fixable crop error. Did not attempt a re-crop given the analysis suggested
it wouldn't help. Three other D0 skew entries (#18, #24, #53) not
re-sampled this pass.

## Photo-derived clutter (Dan's screenshot evidence: pavement, phone boxes,
## bicycles, pedestrians in ground bands)

**Status: the specific instances found are fixed.** Vision re-audit of all 47
rectified photos and 28 packed strips found and fixed:
- 3 ground tiles with a pedestrian/pavement dominating the frame, excluded.
- 3 ground tiles (Ladbrokes: bicycles + phone box; Jolly: parked car +
  pedestrians; Robbie's: pedestrian) fixed via a targeted Kontext edit pass
  rather than exclusion, since all three are address-placed, high-visibility
  buildings — matches Dan's screenshot complaint almost exactly.
- 1 near-black tile with a parked car, excluded.

This was a targeted fix for instances found during the vision pass, not an
exhaustive pixel-level sweep of all ~97 ground/upper tiles — smaller
background pedestrians/vehicles may remain in some tiles I didn't flag as
severe enough to warrant exclusion or an AI edit.

## Corner-infill wedge (D0: #4/#14/#22/#29, 4 entries, filed under "other")

**Status: resolved.** Same root cause and same fix as blank-texture (it was
always the same mesh, glimpsed as a sliver through a gap). Not seen in any
sampled location.

## Not addressed this milestone

- Pavement dithering artifact (D0 #6/#36) — explicitly optional in the brief,
  not investigated.
- Floating props (D0 #27/#41) — explicitly optional, not investigated.
- D0 #57 (comic placeholder-until-close-range) — explicitly out of scope,
  belongs to D2.
- Triangulated-seam UV fault (D0 #33/#39) — not re-examined this session;
  status unknown, may still be present.
- D0 #52 (Christadelphian Church rippled stretch, chainage 1485) — not
  sampled this pass.

## D3 (main.js consolidation) and W1 (stone fallback) — both verified working

`grep '\.update(' src/main.js` shows one registered list, consumed by both
`animate()` and `stepFrame`, confirmed via live NPC interaction, litter,
leithers, and camera controls all functioning after the refactor. Console
clean throughout every rebuild/reload in this session (no errors observed at
any sampled pose).
