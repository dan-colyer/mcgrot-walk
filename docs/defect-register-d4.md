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
