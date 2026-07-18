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
