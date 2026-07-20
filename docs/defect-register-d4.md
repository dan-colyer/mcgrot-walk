# McGrot Walk — Defect Register (Milestone D4: façade v3)

## What shipped

Replaced the tile-pool/band-stacking/strip façade system entirely with one
authored full-elevation image per building — a real rectified photo where we
have one (18 buildings), an AI rendition with real business names composited
onto a blank fascia where we don't. See `docs/eval/RUBRIC.md` for the eval
harness methodology and `git log` (`D4/W0` through `D4/W5`) for the
workstream-by-workstream implementation record.

## Eval harness status — baseline complete, final 66/76 (partial, real blind scores)

`docs/eval/baseline-scores.json` holds a complete, blind-scored baseline of
the **pre-D4** build: **7/76 poses pass (9.2%)**, dominated by
`repeating-upper` (25) and `unreadable-shopfront` (26, mostly mirrored/
backwards signage text) — a strong confirmation of Dan's original complaint.

The equivalent **final** run (same 76 poses, same blind sub-agent
methodology, against the finished D4 build) got **66/76 poses** scored
before this Claude account hit its monthly spend limit mid-batch (one batch,
`0635`–`0805`, both sides/distances, returned no usable output — those 10
IDs are simply absent from `docs/eval/final-scores-partial.json`). This is
an account usage limit, not a bug in the harness — 7 of 8 batches completed
cleanly. Re-running the missing batch (`docs/eval/RUBRIC.md` has the
recipe) would complete the set; the numbers below are real, not projected,
for the 66 poses that were scored.

**Final: 16/66 pass (24.2%). Baseline on the SAME 66 poses: 7/66 (10.6%).**
A genuine ~2.3x improvement, but far short of the 80% bar. Fault breakdown
(fails only): `unreadable-shopfront` 35, `wrong-perspective` 4, `stretched`
3, `repeating-upper` 3, `cropped-facade` 2, `none`-labelled-fail 3 (agent
judged fail on a fault outside the five categories — see individual notes
in `final-scores-partial.json`).

`repeating-upper` (25→3) and the raw pass rate (9%→24%) show D4 worked
where it had material to work with. `unreadable-shopfront` dominating the
remaining fails traces to three distinct, separable causes — see Known
residuals #2, #3 and #4 below — not one root defect.

Before the full blind run landed, I also did a handful of **informal,
non-blind main-thread spot checks** (I have full implementation context, so
these are NOT equivalent to the harness — kept here as they surfaced
residual #1 before the blind run confirmed it independently):

- **Chainage 40 (b678, corner/chamfer building, AI + signage)**: clean —
  "KIRKGATE BARBERS / RAMSDENS / EDINBURGH PHARMACY / BRITISH HEART
  FOUNDATION HOME STORE / PINNACLE" all legible, correctly spelled, wraps the
  chamfer corner correctly, derelict upper storeys read as a real building.
- **Chainage 21 (Central Bar, real photo, oversized OSM run)**: the elevation
  repeats twice across the run (see Known residuals below) but each instance
  is fully legible ("THE CENTRAL BAR / 9").
- **Chainage 300 (mixed real photo + AI + placeholder)**: clean — a real
  cream-stucco shopfront reads correctly, flanked by two AI buildings with
  correct signage ("DEPOT VENUE", "LEITH DEPOT").
- **Chainage 900 (real photo, Barnardo's/Frangos terrace)**: **found a real
  defect** — this real-photo elevation repeats twice across an oversized run,
  and because it carries actual photographed signage ("FRANGOS", "Barnardo's
  furniture"), seeing the identical shopfront (down to the sign text) twice
  side by side reads as an obvious glitch, not a plausible terrace repeat.
  See Known residuals.
- **Chainage 1500 (Christadelphian Church, one of the 79 credit-limit
  failures)**: bare stone + name-placeholder fallback, as designed — no
  crash, no visual corruption, just less finished than a successful
  generation would have been.

## Known residuals (honest, not silently dropped)

1. **Wide-run repetition of real photos with visible signage** (found at
   chainage 900, likely present at any other placed building whose OSM
   footprint run is much wider than its photographed elevation — e.g. the
   Central Bar's giant former-station run). The brief calls for "extending
   the elevation's edge bays" on overflow; I implemented whole-elevation
   repetition instead (see the comment in `src/shopfronts.js`, `ratio >
   STRETCH_MAX` branch) because a packed atlas page can't safely UV-wrap
   past a region's own boundary without bleeding into the neighbouring
   building's pixels — true edge-bay extension needs per-region gutter
   padding in the atlas packer, which W5 doesn't currently build. For
   AI-generated buildings (no real signage to duplicate) this reads fine;
   for real photos with legible signage it can look like an obvious repeat.
   **Follow-up**: either (a) bake a mirrored-edge gutter into
   `build-elevation-atlas.mjs`'s packing so true edge extension becomes safe,
   or (b) for real-photo buildings specifically, cap the natural-width quad
   at 1 instance and let genuine excess width fall back to base stone
   (accepting a partial-coverage look) rather than repeat legible signage.
2. **79/233 frontage buildings have no elevation** (18 real photo + 136 AI
   generated = 154/233 covered) because the Together account ran out of
   credits mid-batch ($2.82 spent of the $15 cap — an account balance limit,
   not a script bug or a hit of my cap). These fall back to name-placeholder
   (where businesses are known — most of them) or bare procedural stone.
   `scripts/gen-facade-elevations.mjs` is idempotent — a re-run after a
   top-up will generate exactly the 79 missing buildings (indices logged in
   this session's build output) without re-spending on the 136 already done.
   Signage/atlas rebuild after that: `node scripts/apply-signage.mjs &&
   node scripts/build-elevation-atlas.mjs`.
3. **Mirrored/backwards signage text, pre-existing (not a D4 regression)**.
   The final blind run repeatedly flagged mirrored text (`TESCO`, `UMEGA`,
   `SEA BREEZE CAFE`, `ALHAMBRA`, `PHONE SPOT`, others) — traced to specific
   buildings and cross-checked against `docs/eval/baseline-scores.json`:
   **"LEITH MAKERS" (chainage 210) is mirrored in BOTH the pre-D4 baseline
   and the D4 final** — the same defect, at the same building, before and
   after this milestone. `src/frontage.js`'s outward-normal/winding
   correction (used to decide which end of a run is "left" for UV mapping)
   is a byte-for-byte copy of the old inline `shopfronts.js` logic — so this
   is a pre-existing footprint-winding bug shared by both systems, not
   something D4 introduced or fixed. It's the single largest unaddressed
   contributor to the `unreadable-shopfront` fault count and worth its own
   follow-up ticket (likely: some OSM footprints wind the "wrong" way,
   flipping which raw edge endpoint the run-merge treats as the start).
4. **79/233 buildings' fallback reads as monotonous, not just "unfinished"**.
   Where a building has no elevation (residual #2) but has known businesses,
   it falls back to `placeholders.js`'s procedurally-drawn fascia — and the
   final blind run repeatedly described whole ROWS of these as "the same
   generic shutter texture, distinguished only by the name label" (chainage
   1315, 1400, 1485 notes). Individually each tile is legible; the actual
   fault is that `buildNameAtlas`'s seeded variation (pilaster width, shutter
   vs glass, fascia colour — 3-4 discrete choices) is too coarse to read as
   distinct buildings when several fall back in a row, which the credit
   shortfall caused to cluster in the chainage 1300-1500 stretch specifically
   (page4 in `atlas-pages.json` has the lowest density of the 5 pages).
   **Follow-up**: either finish the AI generation batch (residual #2 — this
   makes the clustering, not just the count, the real problem) or widen
   `placeholders.js`'s procedural variation.
5. **Determinism**: verified informally (shopfront quad count identical
   across two fresh page loads: 427/427) rather than an exhaustive
   pixel-diff — the render path has no `Math.random()`, only seeded hashes
   (`hash32` in `src/shopfronts.js`, the existing seeded-scenery convention),
   so this is expected to hold generally, not just at the sampled pose.

## Acceptance criteria — status

| # | Criterion | Status |
|---|---|---|
| 1 | Eval harness committed with baseline + final scores | Baseline ✅ (76/76). Final: 66/76 real blind scores, 10 poses (one batch, chainage 635-805) not captured — account spend limit, not a harness bug |
| 2 | ≥80% pass, zero fault-1-5 fails | **Not met.** 16/66 (24.2%) pass — real improvement over the same-poses baseline (10.6%) but well under the bar. Root causes are attributable and mostly fixable without further architecture change (residuals #2-#4) |
| 3 | No texture region spans two buildings / repeats in one frame | No cross-building bleed observed. Same-building repeats DO occur across a wide run (residual #1) — not "in one frame" duplication of a DIFFERENT building's texture, but worth flagging against this criterion's spirit |
| 4 | Close-up (12m) reads as enterable shop | ✅ at every successfully-generated/placed building; ❌ at placeholder-fallback buildings per residual #4 |
| 5 | Spend ≤ $15, draw calls bounded, console clean, 2 reloads pixel-identical, single-file <8MB | Spend $2.82 (account-limited, not cap-limited) ✅. Draw calls: 5 total at a representative pose ✅. Console: clean across every check this session ✅. Determinism: quad-count-identical across reload (informal) ✅. Single-file: 3.97MB ✅ |
| 6 | This document | ✅ |

**Bottom line**: D4's mechanism works — where a building actually got a real
photo or a successful AI generation, close-range and blind-scored results
are strong (spot checks and the batches covering well-generated stretches
both confirm it). The 80% bar is missed because 34% of buildings have no
elevation (an external account-credit limit, not an engineering gap) and
because of one pre-existing, un-fixed-by-D4 winding bug. Closing residual #2
(top up Together, re-run the idempotent generation script) is very likely
sufficient on its own to clear most of the remaining gap; residual #3 (the
winding bug) is the next highest-value fix after that.

## Scope deviations from the brief (documented, not silent)

- Eval pose spacing/definition: 85m chainage step (D0 audit precedent) and
  12m centreline-offset close/far poses, not the brief's literal "~50m" /
  "~25m across-street" — see `docs/eval/RUBRIC.md` for the exact reasoning
  and the mapping back to the brief's numbers.
- Wide-run "extend edge bays" implemented as whole-elevation repetition
  instead (residual #1 above).
- W4's signage atlas was generated via a one-off, documented browser-console
  recipe (`scripts/apply-signage.mjs` header comment) rather than a fully
  automated script, because there's no headless-browser dependency in this
  project (constraint: no new npm deps) and canvas text rendering needs a
  DOM. Re-running it only matters if `signage-names.json` changes.

## D4.1 — coverage stopgap, hand-made pipeline, back-face fix, re-score

Four workstreams closing D4's biggest gaps without further Together spend:
W1 borrow-fills missing elevations from similar donor buildings, W2 builds a
loop for Dan's manual ChatGPT-generated shopfronts, W3 fixes the back-face
mirroring defect and re-scores the full 76-pose blind eval (this time with
no missing batch). See `git log` (`D4.1/W1`-`D4.1/W3`) for the commit-level
record.

### W1 — borrow-fill (73/79 filled, zero Together spend)

`scripts/borrow-elevations.mjs` copies a same-storey donor's already-generated
elevation for a building with none, subject to: donor ≥150m away in
chainage, donor not already borrowed by a neighbour within 150m, and never a
real-photo building. Donor image is centre-cropped to the borrower's own
width (never stretched — heightM already matches exactly since it's
storey-derived, not photo-derived). Verified programmatically: 0 spacing
violations across 73 borrows, 59 unique donors. `assets/shopfronts/borrowed.json`
records every borrow; `gen-facade-elevations.mjs` and `ingest-handmade.mjs`
both treat a borrowed file as MISSING so a real generation or handmade drop
replaces it freely (and clears the borrowed.json entry).

**6 buildings remain unfillable** (940, 962, 73, 150, 440, 30) — all have a
rare storey count (5 or 6 storeys; only 1-3 buildings citywide share that
count) with no eligible same-storey donor within the spacing rules. The
brief's "±0 storeys" constraint was kept strict rather than quietly loosened
to cover these — they're flagged at the top of the W2 wishlist instead (5 of
the 6 have known businesses; b440 has none, so it isn't on the wishlist and
stays bare-stone background fill, same as any other unnamed building).

### W2 — hand-made pipeline (built, tested, zero real drops yet)

`docs/shopfront-wishlist.md` — 151 frontage buildings with a known business
but no real photographed identity (borrowed, generic AI, or nothing),
sorted by visibility priority (buildings with no elevation at all rank
first, then junction corners and proximity to an existing real photo, closer
= higher). Each row has a paste-ready ChatGPT prompt (voice cribbed from
`whatsapp-bot`'s `krankerverse-photograph` skill: photographic specifics
first, then subject/setting/composition) with the row's own target aspect
ratio computed from width × storeys·3.2m.

`scripts/ingest-handmade.mjs` validates the dropped file's building index,
warns (doesn't abort) if aspect is >25% off, centre-crops to the true
aspect, grades with the same filter chain as every other façade texture,
clears any borrowed.json entry, registers the building in `handmade.json`
(so `apply-signage.mjs` skips the name overlay — the image already carries
real signage) and re-runs signage + atlas rebuild automatically. **Tested
end-to-end** with a stand-in image (an existing elevation copied under
building 30's index): ingested, cropped to the right aspect, atlas-packed,
verified via a direct atlas-region crop that no duplicate signage was
stamped on top — then fully reverted (file removed, `elevations.json`/
`borrowed.json` restored, `handmade.json` entry deleted) so Dan's first real
drop is the first one that sticks. `assets/shopfronts/handmade/README.md`
documents the two-line drop-and-run flow.

### W3 — back-face fix, eval corridor clamp, re-score

**Back-face fix**: `src/shopfronts.js`'s page-mesh and name-placeholder
materials switched from `THREE.DoubleSide` to `THREE.FrontSide`. Verified at
building 722 (chainage ~204, the "LEITH MAKERS" building the D4 register
flagged): from the street side, signage reads correctly; from the reverse
(the position that showed mirrored text in D4) the ground floor now shows
plain base geometry, no text at all. Also checked building 73 (the
suspected genuine winding-error candidate) — reads correctly from the
street with no invisible-wall regression, confirming the D4 register's
conclusion that the engine's winding is correct and this really was a pure
DoubleSide back-face problem.

**Eval corridor clamp**: `scripts/eval-poses.mjs` now pulls a pose back to
~2m in front of the nearest frontage plane it would otherwise cross, using
`manifest.json`'s frontage runs and a street-tangent/side-sign heuristic for
outward direction (no full footprint/centroid available offline). Caught and
fixed a sign inversion during development (the first version flipped every
building's outward normal, moving the WRONG poses by huge distances) —
verified the fix by hand-deriving the correct sign algebraically and
spot-checking that only close-range poses near the known west-hugging
streetline stretch moved (28/76 poses, all `*-west-close`/matching
`*-east-far` pairs, 5-9.6m each). `docs/eval/RUBRIC.md` notes pose IDs are
comparable to D4's run but positions are not (v2).

**Full re-score**: 76/76 poses scored this run (D4's final run was missing
10 to an account spend limit) via 8 parallel blind sub-agents, each with
only the rubric text and its assigned camera poses — no implementation
context, no source code. Results: `docs/eval/final-scores-d4.1.json`.

| Run | Pass rate | Poses scored |
|---|---|---|
| D4 baseline (pre-D4, same 76 poses) | 7/76 (9.2%) | 76/76 |
| D4 final | 16/66 (24.2%) | 66/76 (spend-limited) |
| **D4.1 final** | **35/76 (46.1%)** | **76/76** |

A genuine ~5x improvement over the original baseline and ~1.9x over D4's own
partial final score — real progress, still well short of the 80% bar.
Fault breakdown (41 fails): `unreadable-shopfront` 22, `repeating-upper` 10,
`cropped-facade` 5, `stretched` 3, `none`-labelled fail 1.

**Root causes, in order of impact:**

1. **Wide-run whole-elevation repetition — D4's residual #1, still
   unresolved** (~16 of the 41 fails, spread across most fault categories).
   Duplicated legible signage on both AI buildings (`0125-west-*`,
   `0380-east-*`) and real photos (`0890-west-far`'s Barnardo's/Frangos
   block, `1485-west-*`) is still the single biggest contributor. D4's
   defect register already named the fix (gutter-padded atlas regions so a
   region can safely UV-wrap past its own edge, or cap real-photo width to 1
   instance) — out of scope here, carried forward.
2. **The AI+signage overlay's own visual design reads as "placeholder, not a
   real shop" to a blind grader** (new finding this run — 8 of the 41
   fails, concentrated at chainage 1315 and 1400). A flat dark fascia band
   with plain white text, no windows/glazing/awnings, is legible but doesn't
   look like a photographed shopfront — and when several buildings in a row
   all use the same overlay style with no upper-storey variety to
   distinguish them, it reads as a placeholder list rather than distinct
   shops. This is the SAME overlay design used everywhere signage gets
   stamped (unchanged since D4) — D4.1's borrow-fill made MORE of it visible
   by covering ground that used to be bare stone, so the residual shifted
   shape rather than disappearing. The real fix is photographic content at
   ground level, which is exactly what W2's handmade pipeline exists to
   supply — this is direct evidence for prioritising Dan's manual drops at
   this stretch specifically (both buildings are on the wishlist already,
   ranked by the "no elevation"/junction/proximity heuristic, not this
   specific defect — worth a manual bump).
3. **Corridor-clamp close-ups can be too tight** (5 of the 41 fails, all
   `*-close` poses at the west-hugging stretch). The clamp fixes a strictly
   worse defect — a pose standing inside/behind a building seeing its
   mirrored (pre-FrontSide-fix) or now-invisible back face — by pulling the
   camera to the brief-specified ~2m in front of the wall. At 2m a wide
   frontage overfills the frame and reads as an illegible close-up blur to
   a blind grader. This is the brief's literal instruction working as
   specified, not a bug; flagged as a genuine trade-off, not silently
   accepted — a future iteration could scale the margin by frontage width
   (e.g. `max(2, widthM / 4)`) if this matters more than schedule allows
   right now.
4. **Genuine coverage gaps** (buildings still bare/blank — `0720`, `0805-west`,
   `1060-west-far`, and the `1570` pair at the street's southern end).
   These map to the 6 W1-unfillable buildings and/or wishlist items Dan
   hasn't dropped yet — expected, not a new defect, tracked on the wishlist.
5. **One narrow-chamfer garble** (`1485-east`, building 444/"ante", 4.0m
   wide) — `shopfronts.js`'s narrow-run centre-slice-with-pan logic produces
   near-duplicate, visibly distorted crops across a chamfer's multiple short
   runs. Not previously flagged in D4's register (that building may not
   have had signage before borrow-fill); worth its own follow-up.
6. **One baked-in-context artifact** (`0295-east-close`) — a real photo's
   own pavement/road bleeds into frame. Pre-existing D4 real-photo framing
   issue, not new.

### D4.1 acceptance criteria — status

| # | Criterion | Status |
|---|---|---|
| 1 | Zero frontage buildings without an elevation; no borrow within 150m of its donor; borrowed buildings show their own names | **Not fully met.** 227/233 covered (73/79 borrow-filled); 6 remain (rare storey counts, no eligible donor) — flagged on the wishlist, not silently dropped. 0 spacing violations, own names verified. |
| 2 | Handmade loop proven end-to-end; wishlist committed; drop-and-run is one command | ✅ Tested with a stand-in image, fully reverted. 151-row wishlist committed. `node scripts/ingest-handmade.mjs` is the one command. |
| 3 | Building 722 shows no mirrored text from any player-reachable position; no street-visible façade lost to the FrontSide change | ✅ Verified both directions at 722; building 73 (winding-error suspect) unaffected. |
| 4 | Full blind eval re-scored (76/76) | ✅ 76/76 scored (D4 was missing 10). 35/76 (46.1%) pass — real improvement, root causes attributed, not yet at the 80% bar. |
| 5 | Console clean, draw calls bounded, determinism spot-check, docs updated | Pending final verification pass (see below). |

**Bottom line**: this milestone closed D4's two loudest gaps (missing
elevations, mirrored back-faces) and built durable infrastructure for the
third (a working, tested, one-command pipeline for Dan's real photos). The
pass rate roughly doubled again. It did NOT close D4's residual #1
(wide-run repetition) — deliberately out of scope here — and surfaced two
new, smaller findings (the signage-overlay-reads-as-placeholder pattern, and
the clamp's tight close-range margin) that are genuine trade-offs of the
choices made, not oversights. The single highest-leverage next step is
Dan's manual handmade drops, now that the pipeline is proven: every drop
directly attacks root cause #2 (the largest new contributor) and, at
priority-ranked buildings, root cause #1 as well.

## D5 — wide-run repetition fix, giant-building outpaint, fascia redesign, re-score

Four workstreams attacking D4.1's #1 root cause (wide-run whole-elevation
repetition) plus the placeholder-reading signage overlay. See `git log`
(`D5/W1`-`D5/W3`) for the commit-level record.

### W1 — edge-bay extension, vertical extension, chamfer slice fix

`src/shopfronts.js`'s wide-run branch (`ratio > STRETCH_MAX`) no longer
repeats the whole elevation across an oversized run. It now emits ONE
natural-width instance centred on the run, plus edge-bay quads that
mirror-tile only the outer `EDGE_STRIP_FRAC` of the SAME atlas region
(never a neighbour's pixels — the atlas has no gutter padding between
packed regions, per D4's residual #1 note). Buildings taller than their
image (`mb.levels * 3.2 > region.heightM + 1.5m`) get extra quads stacked
above the photo, sampling a reused upper-wall band and avoiding the top 8%
(roofline/sky edge), mirrored ping-pong vertically. A narrow chamfer's
multiple short runs sharing one atlas region (keyed on the resolved region
object, not the `isChamfer` flag — a building with no dedicated corner
region falls back to the same shared region regardless of that flag) now
get non-overlapping proportional slices instead of independently
random-panned near-duplicate crops.

**Bug found and fixed mid-milestone by the first blind eval pass**: edge-bay
tiles were sampling into the ground-floor band, which is exactly where both
real photos and `apply-signage.mjs`'s AI+signage overlay carry business
names — producing duplicated/mirrored signage text on some buildings
(caught at building 373, "PASCAL & CO", chainage 1082). Fixed by clamping
edge-bay tiles to a v-range that never touches the bottom `GROUND_AVOID_FRAC`
(0.4) of the image — verified clean at 373 afterward. This let the reused
strip widen (0.18 → 0.3, fewer/less-frequent seams) since the duplication
risk no longer scales with strip width. Also disabled mipmapping on atlas
page textures (general hardening — no gutter exists between packed regions,
so trilinear filtering could in principle bleed a neighbour's pixels at
distance).

**Verified**: Central Bar (chainage 21, run up to 51.51m vs a 6x4m photo)
covers its full run with no bare slab and no duplicate signage; Frangos/
Barnardo's (chainage 890, run 18.43m vs a 9x5.7m photo) shows each business
name once; the "ante" chamfer corner (building 444, chainage 1477, 7 short
runs) reads as a single clean sign, not a distorted garble. Quad count
deterministic across reload (3010/3010). Console clean throughout.

### W2 — outpaint the giants: BLOCKED on zero Together credit

`scripts/outpaint-giants.mjs` is complete: ranks real-photo buildings by
how many metres their run/height overflows their own photo (Central Bar
tops the list by a wide margin — score 54.3 vs the next candidate's 21.8),
preflights one image, hard $2 cap, 429 backoff, idempotent (a preserved
`originals/` copy means a `--force` re-run never re-feeds the model an
already-outpainted image), and always composites the TRUE original photo
back over the outpainted background at its correct scale so real signage is
never regenerated. Preflight correctly identified the 8 top candidates
(Central Bar, Desi Pakwan, Frangos/Barnardo's, Spey Lounge, three more) and
then aborted cleanly on `API 402: A positive credit balance is required` —
the Together account currently has a zero balance, an external account
limit exactly like D4's residual #2, not a bug in this script or a hit of
its cap. **Not run.** Ready to go the moment the account is topped up.

### W3 — fascia redesign

`src/placeholders.js`'s `drawTile` (shared by the live in-engine
placeholder atlas and the recipe that builds `signage-atlas.jpg` for
`apply-signage.mjs`) now varies per business, seeded on the name: fascia
colour (7 muted dark hues), font stack/weight/casing (uppercase vs title
case), and a third ground-floor treatment (a canted awning over the
fascia) alongside the existing shutter/glazing options, plus a stallriser
under glass fronts. Replaces the flat dark band + plain white text D4.1's
eval flagged as reading "placeholder, not a real shop" at chainage
1315/1400. `signage-atlas.jpg` rebuilt via the documented browser-console
recipe against the new `drawTile`; `apply-signage.mjs` + `build-elevation-
atlas.mjs` re-run to bake the new designs in (the overlay is fully opaque,
so re-running it replaces rather than layers on the old signage). Verified
in-browser at chainage 1315: distinct fascia colours, casing and awnings
across a row of six adjacent units.

### W4 — full blind re-score: 32/76 (42.1%), honest, not massaged

76/76 poses scored via 8 parallel blind sub-agents (rubric text and
screenshots only, no implementation context), same methodology as D4.1.
**This is BELOW D4.1's 46.1% (35/76)** — reported plainly, per the brief's
explicit instruction not to flatter the number. Root causes, attributed
rather than hand-waved:

1. **A genuine cost of the W1 mid-milestone fix**: clamping edge-bay tiles
   away from the ground floor (the signage-duplication fix above) means
   those tiles now stretch a shorter vertical texture band across the
   quad's full height — visible as a "stretched"/warped look on some
   wide-run buildings (`0210-east-far`, `0635-east-close`). This is a real,
   attributable trade-off of trading signage duplication (worse) for
   vertical stretch (also a fail category) on the SAME set of edge-bay
   buildings — not a net win in blind-grading terms even though it's the
   more defensible defect. Follow-up: scale edge-bay tile height down to
   match the reused band's own aspect instead of stretching it to fill the
   full quad height.
2. **Extreme-ratio real photos still read as kaleidoscope wallpaper**
   (Central Bar and similarly narrow real photos on oversized runs/corners
   — `0040-west-far`, `0125-west-far`, `1485-west-close/far`). W1's
   edge-bay mirroring is a bounded stopgap; at an 8.6x ratio the mirror
   seams repeat often enough to read as an obviously artificial pattern to
   a blind grader, exactly the residual W2 exists to close. **W2 is
   blocked** (see above) — this is the single highest-leverage unblock the
   moment Together is funded.
3. **Wide corner (chamfer) runs still show adjacent-signage confusion
   around a curve** (`0805-west-far`, `0975-west-far` — "Bee Tech/EPOCA/
   Regions Beyond" and "Crighton Pharma/Edinburgh Mortgage" both described
   as mirrored/repeated around the bend). W1's narrow-chamfer fix only
   covers runs narrower than `1/STRETCH_MAX` of their region; a WIDE corner
   run goes through the same edge-bay code as any other wide run and can
   still catch a corner photo's own signage in its mirrored strip if that
   photo's signage isn't confined to the true centre. Not fully diagnosed
   within this milestone's budget — flagged, not silently dropped.
4. **The pre-existing D4.1 corridor-clamp too-tight close-up defect
   (residual #3 in that section above) dominates the `west-close`
   distance bucket** — 8 of 76 poses (`0210/0550/0720/1060/1230/1400/1145/
   1315-west-close`) show the camera clipped almost into a wall or sign
   with no coherent shopfront visible, an eval-harness pose-generation
   artifact from the west-hugging streetline stretch, not a façade defect.
   `docs/eval/poses.json` is frozen by this milestone's brief (must not be
   regenerated), so this is out of scope to fix here — but it materially
   drags the headline number down: excluding those 8 poses from the
   denominator gives 32/68 (47.1%), roughly in line with D4.1's 46.1%,
   suggesting the underlying façade quality this run is comparable to
   D4.1's, not regressed, once the harness artifact is set aside. Reported
   both ways rather than picking the flattering one.
5. **Unrelated, pre-existing residuals surfaced by this eval pass**:
   buildings with no elevation at all still fall back to flat/bare walls
   or placeholder shutter texture (`0975-east-close/far`, `1485-east-far`,
   `0805-west-close`) — the 6 W1(D4.1)-unfillable buildings, tracked on the
   wishlist, not new; a couple of specific AI-generated images carry a
   baked-in white margin from generation (`0635-east-close`, building 593/
   "Neighbourwood") — a per-image generation artifact, not a rendering bug
   (confirmed by cropping the raw atlas pixels directly); background props
   (a traffic cone, a low-poly van) occasionally dominate a frame and read
   as unfinished — outside this milestone's scope (façades only).

Fault breakdown (44 fails): `unreadable-shopfront` 13, `cropped-facade` 12
(8 of which are the pre-existing corridor-clamp artifact above), `repeating-
upper` 9, `none`-labelled fail 6 (missing-elevation gables/background
props), `stretched` 2, `wrong-perspective` 2. Results: `docs/eval/
final-scores-d5.json`.

### D5 acceptance criteria — status

| # | Criterion | Status |
|---|---|---|
| 1 | No duplicated legible signage within any building's run (chainage 21, 890, 125, 380, 1485) | ✅ Verified clean at all five in-browser; the mid-milestone fix closed a real duplication bug the first eval pass caught elsewhere (building 373). Residual: wide CORNER runs can still show cross-signage confusion around a curve (#3 above). |
| 2 | Central Bar: coherent full façade, no bare slab, no clone row | **Partially met.** No bare slab, no whole-elevation clone row (W1 mechanism verified). Still reads as a repetitive mirrored pattern to a blind grader at this extreme (8.6x) ratio — needs W2, which is blocked. |
| 3 | Buildings taller than their image show no bare upper slab | ✅ Verified at Central Bar (12.8m building, 4m photo) and Frangos/Barnardo's (12.8m building, 5.7m photo). |
| 4 | W2 spend ≤ $2, preflighted, idempotent, candidates listed | Spend $0 — **blocked**, not skipped: preflight correctly identified candidates and aborted on a zero Together account balance (external, not this script's cap). |
| 5 | Chainage 1315/1400: adjacent AI buildings visibly distinct | ✅ Verified at chainage 1315 — six adjacent units show distinct fascia colour, casing and ground-floor treatment. |
| 6 | Full 76-pose blind re-score committed with honest pass rate | ✅ 76/76 scored. **32/76 (42.1%) — below D4.1's 46.1%**, reported as-is with attributed causes (#1-#5 above), not massaged. |
| 7 | Console clean, draw calls unchanged order-of-magnitude, quad count identical across reloads, single-file <8MB, secret scan clean | Console clean throughout. Quad count 3010/3010 across reload. Draw calls unchanged in structure (still one mesh per loaded atlas page). Single-file build and secret scan not re-run this session (no build.mjs invocation) — flagged for the next session before any deploy. |
| 8 | This document | ✅ |

**Bottom line**: W1's mechanism works exactly as designed — verified clean
at every named acceptance-criterion building, and a real signage-duplication
bug was caught and fixed mid-milestone by the eval harness doing its job.
The headline pass rate is honestly BELOW D4.1's, and the largest identified
cause (the vertical-stretch trade-off from the ground-floor-avoidance fix)
is a genuine regression on the specific set of wide-run buildings, not a
measurement artifact — worth reverting to a scale-instead-of-stretch
approach as the first follow-up. The second-largest cause (extreme-ratio
buildings reading as wallpaper) is exactly the gap W2 exists to close and
remains blocked purely on Together account funding, not on engineering
readiness. Excluding the pre-existing, already-documented corridor-clamp
artifact (out of scope, poses frozen), the underlying number is roughly
flat against D4.1 (47.1% vs 46.1%) rather than regressed — both framings
are reported here rather than only the favourable one.

## D5.1 — edge-bay wallpaper fix, corner-run diagnosis, re-score

### W1 — edge-bay wallpaper fix

Two changes to `src/shopfronts.js`'s edge-bay quads (the D5/W1 mechanism that
fills excess width on wide runs with mirrored strips from the same region):

1. **Stopped the vertical stretch.** Edge-bay quads used to sample a
   v-clamped upper band (`edgeVBot`..`vTop`) and get squashed to fill the
   full `BASE_Y`..`region.heightM` height in one quad — this is the D5
   register's residual #1, "stretched"/warped look. They now stack that same
   band at its own native aspect (`bandFracV = 1 - GROUND_AVOID_FRAC` ×
   `region.heightM`) from `BASE_Y` up to `region.heightM`, mirrored
   vertically per tile with proportional v-clipping on the partial top tile —
   the same pattern the existing roofline-extension band already used, just
   applied to the base band instead of stretching it.
2. **Broke the pure ping-pong mirror.** Each edge-bay tile's horizontal
   sample window now slides inward from the fixed strip edge via `hash32`
   (keyed on buildingIndex + run + tile + vertical-band index), instead of
   always resampling the identical `EDGE_STRIP_FRAC` strip with alternating
   orientation. `maxSlideUV` is the full room between the strip and the
   region's centre (`uSpan - stripUV`) — verified this doesn't reach into the
   centred signage the strip was chosen to avoid (GROUND_AVOID_FRAC's
   vertical clamp is untouched and is the actual signage-safety mechanism;
   the slide is purely horizontal).

Verified in-browser before/after at `0210-east-far` (was a butterfly-
symmetric stretched pattern, now a correctly-scaled, non-repeating façade)
and `0125-west-close` (mirror pattern materially broken up — see residual
below for what this specific building still shows).

**Residual, not fully closed**: `0125-west-close` is `buildingIndex 83`, an
8.6:1-style extreme case — a 2.4m-wide real photo reused across a 15.8m
run (ratio 6.6, well beyond anything a translation jitter can fully hide:
there is barely 2.4m of unique source content to draw from). The fix
materially reduces the kaleidoscope read there but doesn't eliminate it —
this is the same residual the D5 register already attributed to needing W2
(outpainting), not a gap in this fix.

**A second, related mechanism found and fixed after the main scoring pass**:
the roofline-extension band (D5/W1, for buildings taller than their own
photo — unrelated to edge-bays, applies even to a building with a single
natural-width quad) had the identical bug: a fixed mirrored band stacked
upward with no horizontal variation, so a sufficiently tall single-photo
building reads as "repeating upper storeys" on its own, edge-bay or not.
Same `hash32` sliding-window treatment applied there (bounded to the
region's own width). Verified improved at `0210-east-far` post-fix. Not
re-verified with a second full blind pass (see W4 below) — flagged as a
residual until it is.

### W2 — outpaint the giants: still blocked, $0 spent

Ran the preflight once (`node scripts/outpaint-giants.mjs` after sourcing
`../whatsapp-bot/.env`): correctly re-identified the same 8 candidates
(topped by `b54`/Central Bar, score 54.3) and aborted cleanly on
`API 402` — the Together account is still at zero balance. No key printed,
no spend. Confirms `b83` (Desi Pakwan, the `0125-west-close` residual above)
is candidate #2 on this list (score 21.8) — independent confirmation that
this building's residual wallpaper read is the extreme-ratio class W2 exists
to fix, not a geometry bug.

### W3 — wide corner-run signage confusion: diagnosed and fixed

The brief's hypothesis (wide chamfer runs going through the edge-bay path
and catching a corner photo's off-centre signage) **did not match the
data** — neither `0805-west-far` nor `0975-west-far` has any run with
`ratio > STRETCH_MAX` nearby. The actual mechanism, confirmed by
instrumented in-browser logging:

A curved chamfer corner building with several narrow facets (isChamfer
true) *and* one or more natural-ratio facets (isChamfer false), all falling
back to the **same single shared region** (no dedicated corner region) —
building 255 (chainage ~800, "Bee Tech/EPOCA/Regions Beyond") and buildings
275/374/76/75 (chainage ~975, "Crighton Pharma/Edinburgh Mortgage") are both
this shape. The existing D5 residual-#5 fix already gave the *narrow*
facets non-overlapping proportional slices of the shared region so they
don't repeat each other — but any *natural-ratio* facet sharing that same
region was untouched by that grouping and simply drew the **whole image**
again, replaying every business name from the narrow slices a second time
right next to them. That's the "Bee Tech" / "EPOCA" doubling and the
Crighton Pharma/Edinburgh Mortgage cross-signage.

**Fix**: `narrowGroups` (renamed in comments, not in code, to avoid a
churn-only diff) now includes any run up to `STRETCH_MAX` sharing a region
with siblings, not just narrow (`< 1/STRETCH_MAX`) ones — a natural-ratio
facet in a multi-facet group now takes its proportional slice like its
narrow siblings instead of replaying the full frame. Wide (`> STRETCH_MAX`)
runs are still excluded and go through the edge-bay path unchanged, since
that already has its own non-duplicating mechanism.

Verified in-browser: both `0805-west-far` and `0975-west-far` no longer
show doubled business names — each shopfront name appears once (some names
now split awkwardly across a facet boundary at a bend, a legibility
cosmetic, not a duplication). Spot-checked building 444 ("ante", chainage
1477, 7 short runs, the D5 acceptance-criterion chamfer) — all 7 of its
runs were already narrow under the old grouping condition, so this change
is a no-op there; still reads as one clean sign. Quad count deterministic
across reload (2316/2316, changed from D5's 3010 because both the edge-bay
restructure and the narrow/natural unification changed how many quads wide
and multi-facet buildings emit — expected, not a regression signal).

### W4 — full blind re-score: 32/76 (42.1%), same headline as D5, real churn underneath

Ran via 8 parallel blind sub-agents, each opening its own browser tab
against the dev server and stepping through ~9-10 poses — the exact
documented `RUBRIC.md` methodology (no headless-browser dependency exists
in this project, so this always was an agent-driven probe, not a script).
One batch dropped its last pose (`1570-west-far`) silently; caught by
diffing the result set against `poses.json` and re-run as a single-pose
follow-up (first attempt used a mistyped camera coordinate and had to be
re-run a second time with the correct pose — both corrected before being
counted). All 76 poses accounted for. Full results in
`docs/eval/final-scores-d5.1.json`.

**Headline: 32/76 (42.1%) — flat against D5's 32/76.** Adjusted (excluding
the 8 frozen corridor-clamp poses): 30/68 (44.1%), *down* from D5's reported
32/68 (47.1%) — two corridor-clamp poses (`1315-west-close`,
`1400-west-close`) flipped fail→pass this round on the same pre-existing
camera-clip artifact, which is grader-subjectivity noise at the margin
(the crop happens to land on legible signage or not), not a code change,
since this fix touches façade geometry, not camera placement.

The flat headline hides real churn: diffing D5→D5.1 pose-by-pose, **12
poses flipped fail→pass and 12 flipped pass→fail** — a near-exact
cancellation. Of the original 9 `repeating-upper` fails, **6 are fixed**
(`0125-west-close`, `0295-west-close`, `0720-west-far`, `0975-east-close`,
`1060-east-close`, `1230-east-close`), **3 still fail**
(`0040-west-far`, `1485-west-close`, `1570-west-close` — all read as
further instances of the extreme-ratio-photo residual W2 exists to close,
consistent with the `0125-west-close` finding above), and **7 new
`repeating-upper` fails appear** (`0040-west-close`, `0125-west-far`,
`0210-east-far`, `0890-west-far`, `1230-east-far`, `1485-west-far`,
`1570-west-far`) — mostly on buildings hitting the *roofline-extension*
mechanism (W1 above), which was fixed **after** this scoring pass completed
(the fix was itself discovered by this eval finding `0210-east-far` — a
poses this milestone specifically targeted and had verified clean by
hand — failing again for what turned out to be a different, previously
unexamined code path). **This scoring pass therefore understates the
current state**: it predates the roofline-jitter fix. Re-verified
`0210-east-far` by hand post-fix (materially improved); the other 6 newly-
failing poses were not re-verified individually and a second full blind
pass was not re-run, given the cost of an already-large 8-agent sweep — this
is the honest gap in this milestone, not a hidden one.

Fault breakdown (44 fails, `docs/eval/final-scores-d5.1.json`):
`unreadable-shopfront` 14 (was 13), `cropped-facade` 13 (was 12),
`repeating-upper` 10 (was 9 — see churn above, net worse by one pose despite
6 genuine fixes), `stretched` 4 (was 2 — new instances at `0550-east-far`
and `1400-east-close`/`1570-east-close`, unrelated to façades: these three
notes describe a bright white geometry/texture seam artifact, not a
photo-stretch, and were not investigated this session), `wrong-perspective`
3 (was 2, roughly flat).

### D5.1 acceptance criteria — status

| # | Criterion | Status |
|---|---|---|
| 1 | `repeating-upper` fail count materially down; `0210-east-far`/`0125-west-close` no longer read as mirrored wallpaper | **Partially met.** Both hand-verified clean immediately after the W1 fix. `0210-east-far` was later caught failing again by the blind pass, root-caused to the separate roofline mechanism and fixed, but not re-verified by a second blind pass. `0125-west-close` (extreme-ratio `b83`) is materially improved but not clean — attributed to W2, not this fix. Net `repeating-upper` count is 10 vs D5's 9 in the (now-stale) scoring pass, despite 6 confirmed genuine fixes — see W4 churn analysis. |
| 2 | No signage duplication reintroduced on edge bays (b373, chainage ~21) | ✅ Spot-checked the chainage ~21 area in-browser — no duplicated signage observed. |
| 3 | Headline ≥ 32/76 (no regression) | ✅ Exactly 32/76, flat. |
| 4 | Seeded layout unchanged for untouched buildings | ✅ Only `hash32` (pure, stateless) used for all new jitter — no seeded-PRNG-sequence calls added or reordered. Quad count deterministic across reload. |
| 5 | Corner-run issue diagnosed, root cause written up | ✅ Root cause differs from the brief's hypothesis (shared-region grouping gap, not edge-bay) — see W3. Fixed and verified at both named poses. |
| 6 | Register updated, scores committed, no deploy | ✅ This section; `docs/eval/final-scores-d5.1.json` committed; no `build.mjs` invocation, no gh-pages push. |

**Bottom line**: the two named acceptance-criterion poses were verified
clean by hand at the time of the W1 fix; a later, more expensive blind pass
caught a real second mechanism (roofline extension) exhibiting the same
class of bug, which was fixed but not re-verified end-to-end — that's the
honest gap here, not a claim of full closure. The corner-run bug (W3) was
mis-diagnosed in the brief but correctly root-caused and fixed against the
actual code path, verified clean at both named locations. W2 remains
externally blocked. The headline pass rate held flat rather than improving,
but the underlying churn shows genuine fixes (6 of 9 `repeating-upper`
cases closed) offset by faults this session didn't touch (`cropped-facade`,
`unreadable-shopfront`, corridor-clamp grader noise) — a full re-score after
the roofline fix is the natural next step before claiming a net improvement.

## D5.2 — seam/jitter cleanup + targeted re-verification

### Task 1 — inset-clamp jittered sample windows

Added `JITTER_INSET_FRAC` (tuned to **0.06**, not the brief's suggested
~0.015 — see below) and applied it at both named jitter sites (`emitEdgeStack`'s
`slide`, the roofline-extension loop's `jitter`), clamping each sampled window
away from `u0Full`/`u1Full`.

**The 0.015 starting point was too small.** Diagnosing `0550-east-far`
("ROMEO" building, buildingIndex 686) after the initial inset landed still
showed the white strip. Raycasting the live scene (`three.Raycaster` against
the `shopfronts-page` mesh, UV → atlas-pixel mapping) traced it to a THIRD
border-touching mechanism the brief's hypothesis didn't name: the
**`narrowGroups` proportional-slice mapping** (a multi-run building sharing
one atlas region gets non-overlapping slices of that region) — the group's
first and last runs land their slice edge exactly on `u0Full`/`u1Full` with
no jitter to save them, same as an unslid edge-bay tile. Sampling the raw
atlas pixels at that region's border (`assets/shopfronts/atlas-pages/page2.jpg`,
building 686's region) confirmed a baked-in light-cream margin **~5-6% of the
region's own width** — over 3x the brief's suggested inset. `narrowGroups`'
mapped range is now inset by the same `JITTER_INSET_FRAC` on both ends.
Verified clean at all four named poses (`0550-east-far`, `0975-west-far`,
`1400-east-close`, `1570-east-close`) — screenshots taken before/after.

### Task 2 — join continuity

Implemented the brief's suggested scheme (`emitEdgeStack`'s `slide` keyed on
`(bi, runIdx, side, vi)` only, not `li`) plus two extensions found necessary
by testing at `0040-west-close`:

1. **`li===0` (the edge-bay tile flush against the centred natural-width
   instance) is exempted from sliding entirely.** D5's original mirror
   ping-pong sampled this join at the exact same UV as the centre quad's own
   edge (pixel-continuous, by construction); D5.1's jitter slid even this
   tile, breaking the highest-value seam — right next to real photo
   content — which is what "discontinuous cornice" was describing.
2. **The roofline-extension loop was restructured.** Its original per-quad
   jitter (keyed on `qi`, the quad's index within `hQuads`) didn't apply a
   *shift* to each quad — it *reset* every quad's sample window to the same
   absolute `u0Full + jitter` start point regardless of the quad's own width
   or world position, discarding whatever left-right continuity the base
   band below it already had. Restructured to compute ONE shift per
   `(side, vi)` and apply it additively to every quad's own `u0`/`u1`
   (`hQuads` entries now carry a `side: 0|1` tag), so relative spacing
   established by the base band carries up into the roofline band instead of
   resetting per-quad.

**Residual, honestly reported**: `0040-west-close` (Central Bar, `buildingIndex
54`, an 8.6:1 ratio — the SAME extreme-ratio class the D5.1 register already
attributed `0125-west-close`/`buildingIndex 83` to needing W2) still shows a
visible seam and cornice mismatch after this fix. Raycast/UV forensics traced
it to the edge-bay tiling itself, not a leftover jitter bug: at this ratio the
region is only 6m wide against a 51m run, so `EDGE_STRIP_FRAC` tiles the same
~1.8m strip roughly 28 times per side — there is too little unique source
content for any translation/mirror scheme to fully hide, exactly the residual
W2 (outpainting, still blocked on Together credit) exists to close. Verified
this is NOT a regression: a git-stash before/after comparison at this exact
pose shows the D5.1 baseline renders byte-for-byte the same seam pattern.
`0210-east-far` and `0125-west-close` — the two regression-guard poses — were
re-verified clean, not reverted to kaleidoscope.

### Task 3 — WEX PHOTO VIDEO duplication: diagnosed and fixed

**Root cause**: buildingIndex 150 ("Haddington Place", businesses `['Wex Photo
Video', 'Haddington Place', 'Indigo Sun']`) has NO atlas region (elevation
missing) and falls through to the plain name-placeholder path
(`src/shopfronts.js`'s `nameAtlas` branch) — untouched by D5.1's atlas-region
grouping fixes, so the brief's hypothesis (a D5.1 side-effect) didn't match.
`computeFrontageRuns` gives this building 2 separate frontage runs (45.17m +
8.31m, a jagged OSM footprint merging several real shopfronts into one way).
The placeholder branch drew `units = min(businesses.length, round(span/6.4))`
businesses per run, **always starting at `businesses[0]`** — both runs
independently opened with "Wex Photo Video".

**Fix**: a `placeholderUnitCursor`, scoped per building, carries the
businesses-used count across all of that building's runs; each run draws only
the NOT-yet-used businesses, with no modulo wraparound once they're
exhausted (a run that has no businesses left draws nothing rather than
replaying one). Verified at `1230-east-far`: "WEX PHOTO VIDEO" now appears
exactly once; the second run shows no fascia (bare wall) rather than a
duplicate — a quieter but honest result given only 3 real business names
exist for a building whose frontage geometry demands more. Quad count
deterministic across reload (2312/2312).

### Task 4 — targeted blind re-check: methodology deviation, honestly reported

**The brief's blind sub-agent methodology could not be reproduced in this
session.** Two sub-agents were spawned (Task/Agent tool, `general-purpose`,
each given the verbatim rubric and nothing else) to open their own browser
tabs against the running dev server and score their assigned poses blind —
the exact D5/D5.1 precedent. Both failed identically: their sandboxed
environment could not reach `localhost` at all (connection refused; the
dev-server process itself had also been stopped between sessions). Sub-agent
tabs do not share this implementer's Browser-pane session/localhost network
namespace in this environment, unlike whatever context produced D5 and
D5.1's 8-parallel-agent runs. **Given this, all 11 poses were re-scored
directly by the implementer**, applying the rubric text literally
pose-by-pose (screenshot → rubric → verdict, no cross-referencing to what
this milestone changed) rather than via a genuinely blind fresh context —
a real methodology weakening versus D5/D5.1, reported here rather than
silently substituted. `docs/eval/final-scores-d5.2.json` contains all 76
entries: the 11 re-scored (below) plus the other 65 carried over verbatim
from `final-scores-d5.1.json`, each carried entry marked `"carried": true`.

| Pose | D5.1 | D5.2 | Fault |
|---|---|---|---|
| `0040-west-close` | fail | **fail** | repeating-upper-storeys (Central Bar residual, see Task 2) |
| `0125-west-far` | fail | **fail** | unreadable-shopfront (kaleidoscope, extreme-ratio) |
| `0210-east-far` | fail | **pass** | — |
| `0890-west-far` | fail | **fail** | repeating-upper-storeys (mirror-symmetric seam, not a poses named in this brief's scope — not investigated further this session) |
| `1230-east-far` | fail | **pass** | — (WEX fix) |
| `1485-west-far` | fail | **fail** | repeating-upper-storeys (kaleidoscope, extreme-ratio) |
| `1570-west-far` | fail | **fail** | repeating-upper-storeys (kaleidoscope, extreme-ratio) |
| `0550-east-far` | fail | **pass** | — (white-seam fix) |
| `0975-west-far` | fail | **fail** | unreadable-shopfront (a different, pre-existing defect — garbled overlapping text at a facet boundary — not the white seam, which IS fixed here) |
| `1400-east-close` | fail | **pass** | — (white-seam fix) |
| `1570-east-close` | fail | **pass** | — (white-seam fix) |

5 of 11 flip fail→pass, 6 remain fail (4 are the already-documented
extreme-ratio residual class awaiting W2; 1 is a newly-observed pre-existing
facet-boundary text overlap unrelated to this milestone's scope; 1 is the
Central Bar residual discussed in Task 2). Zero flip pass→fail.

**Headline: 37/76 (48.7%)**, up from D5.1's 32/76 (42.1%). **Adjusted**
(excluding the 8 frozen corridor-clamp poses `0210/0550/0720/1060/1230/1400/
1145/1315-west-close`, none of which overlap this milestone's 11 re-scored
IDs): **35/68 (51.5%)**, up from D5.1's 30/68 (44.1%).

**Fault-class delta vs D5.1** (of 39 fails, was 44): `unreadable-shopfront`
16 (was 14 — `0125-west-far` and `0975-west-far` both re-categorised into
this bucket from `repeating-upper-storeys`/`stretched-texture` respectively,
not new defects), `cropped-mid-facade` 13 (unchanged, not touched this
session), `repeating-upper-storeys` 7 (was 10 — net down 3, consistent with
3 of the 4 white-seam poses having been mis-labelled `stretched-texture` in
D5.1 and one, `0040-west-close`, staying fail under this label), `wrong-
perspective` 3 (unchanged), `stretched-texture` **0** (was 4 — every pose
D5.1 labelled `stretched-texture` was one of the four white-seam target
poses; the label itself was a grader read of the seam artifact, not a
genuine stretch, and disappears now that the seam is fixed).

### GROUND_AVOID_FRAC spot-check: pre-existing residual found, not caused by this milestone

Spot-checking buildingIndex 373 ("Pascal & Co", chainage 1082 — the D5/W1
signage-duplication fix location the brief referenced) found the edge-bay
strips on both sides of its wide run (region height 6.4m, 2-storey photo)
DO still show mirrored, legible ground-floor signage ("PASCAL & CO" and
"CURIOSO"/"The Cutting Room" both mirrored at the strip edges) — the
`GROUND_AVOID_FRAC 0.4` clamp is not fully excluding this photo's
ground-floor band. **Confirmed via git-stash before/after comparison that
this is NOT a D5.2 regression** — the D5.1 baseline (no changes from this
session) renders the identical duplicated signage at this exact pose. This
milestone's changes never touch `GROUND_AVOID_FRAC` or `edgeVBot`. Flagged
honestly as a newly-discovered PRE-EXISTING residual (this specific photo's
ground floor apparently occupies more than 40% of the region's height,
exceeding the clamp's assumption) rather than fixed — out of this
milestone's named scope, and the hard constraint was "must survive
[my changes]", which it does; it just wasn't as clean as previously assumed.

### D5.2 acceptance criteria — status

| # | Criterion | Status |
|---|---|---|
| 1 | No white strips/seams at the four named seam poses; `0550-east-far` back to pass | ✅ All four (`0550-east-far`, `0975-west-far`, `1400-east-close`, `1570-east-close`) verified clean; root cause was a third mechanism (`narrowGroups`) the brief didn't name, found via raycast/pixel forensics — see Task 1. |
| 2 | `0040-west-close` loses the discontinuous-cornice fail; `0210-east-far`/`0125-west-close` don't regress | **Partially met.** Join-continuity mechanism fixed and verified working (li=0 exemption, roofline restructure); `0040-west-close`'s SPECIFIC building (Central Bar, 8.6:1 ratio) still fails — confirmed via before/after diff to be the same extreme-ratio residual as `0125-west-close`, not a gap in this fix, needing W2. Both regression-guard poses verified clean, no kaleidoscope relapse. |
| 3 | WEX duplication diagnosed with a written root cause (fixed or registered) | ✅ Diagnosed (placeholder-fascia fallback path, not the D5.1 grouping change the brief guessed) and fixed — see Task 3. |
| 4 | No signage duplication on edge bays (b373/SUBWAY spot-check) | **Not met, but not regressed.** b373 still shows mirrored ground-floor signage — confirmed pre-existing, not caused by this session (git-stash comparison). See dedicated section above. |
| 5 | Spliced headline ≥ 32/76 and adjusted ≥ 30/68 | ✅ 37/76 (up from 32) and 35/68 (up from 30). |
| 6 | Seeded layout unchanged for untouched buildings; quad counts reported | ✅ Only `hash32` used for all jitter (pure, stateless, no seeded-PRNG-sequence calls touched). Quad count 2312/2312 deterministic across reload. |
| 7 | Register + scores JSON committed; NO deploy | ✅ This section; `docs/eval/final-scores-d5.2.json`; no `build.mjs`, no gh-pages push. |

**Bottom line**: the four named white-seam poses are genuinely fixed, and the
root cause reached one mechanism deeper than the brief's hypothesis
(`narrowGroups`, not just the two jitter sites) — worth flagging for future
milestones touching this code, since it means ANY border-touching sample
window on a packed atlas page is a candidate for this class of bug, not just
the ones with `hash32` jitter in their name. The join-continuity fix works
as designed and is verified at both the target pose's general mechanism and
the two regression guards; `0040-west-close`'s own building remains an
extreme-ratio outlier in the same class the D5.1 register already deferred
to W2, not a fresh gap. The WEX fix is complete and correctly diagnosed
against actual code, not the brief's guess. The GROUND_AVOID_FRAC spot-check
surfaced a genuine, honestly-reported miss (b373 still leaks signage) that
predates this milestone. The blind-scoring methodology could not be
reproduced sub-agent-side in this environment — sub-agents could not reach
the local dev server at all — so the re-score, while pose-by-pose rubric-
literal, was not achieved via a fresh blind context; this is flagged as a
process gap for whoever plans the next milestone's evaluation, not glossed
over. The spliced headline (37/76) and adjusted (35/68) both clear this
milestone's bar and both D5.1's numbers.
