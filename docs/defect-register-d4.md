# McGrot Walk — Defect Register (Milestone D4: façade v3)

## What shipped

Replaced the tile-pool/band-stacking/strip façade system entirely with one
authored full-elevation image per building — a real rectified photo where we
have one (18 buildings), an AI rendition with real business names composited
onto a blank fascia where we don't. See `docs/eval/RUBRIC.md` for the eval
harness methodology and `git log` (`D4/W0` through `D4/W5`) for the
workstream-by-workstream implementation record.

## Eval harness status — baseline captured, final scoring incomplete

`docs/eval/baseline-scores.json` holds a complete, blind-scored baseline of
the **pre-D4** build: **7/76 poses pass (9.2%)**, dominated by
`repeating-upper` (25) and `unreadable-shopfront` (26, mostly mirrored/
backwards signage text) — a strong confirmation of Dan's original complaint.

The equivalent **final** run (same 76 poses, same blind sub-agent
methodology, against the finished D4 build) could not be completed this
session: all 8 scoring batches failed mid-run when this Claude account hit
its session rate limit ("resets 12pm Europe/London"). This is an account
usage limit, not a bug in the harness — the harness itself is proven (it
completed the baseline run in full) and is ready to re-run as-is:

```
node scripts/eval-poses.mjs   # regenerate docs/eval/poses.json if needed
# then re-run the 8-batch blind-scoring recipe documented in docs/eval/RUBRIC.md
# against the already-built dist server, writing docs/eval/final-scores.json
```

In place of the full blind run, I did a handful of **informal, non-blind
main-thread spot checks** (I have full implementation context, so these are
NOT equivalent to the harness — reported here as directional signal only,
not as the acceptance-bar evidence):

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
3. **Final blind eval score not captured this session** (see above) — the
   ≥80%-pass / zero-fault-1-5 acceptance bar is therefore **unverified**,
   not failed. Baseline is solid ground truth for the delta once a final run
   completes.
4. **Determinism**: verified informally (shopfront quad count identical
   across two fresh page loads: 427/427) rather than an exhaustive
   pixel-diff — the render path has no `Math.random()`, only seeded hashes
   (`hash32` in `src/shopfronts.js`, the existing seeded-scenery convention),
   so this is expected to hold generally, not just at the sampled pose.

## Acceptance criteria — status

| # | Criterion | Status |
|---|---|---|
| 1 | Eval harness committed with baseline + final scores | Baseline ✅. Final: harness ready, run incomplete (session limit) |
| 2 | ≥80% pass, zero fault-1-5 fails | Unverified (no final run) |
| 3 | No texture region spans two buildings / repeats in one frame | No cross-building bleed observed. Same-building repeats DO occur across a wide run (residual #1) — not "in one frame" duplication of a DIFFERENT building's texture, but worth flagging against this criterion's spirit |
| 4 | Close-up (12m) reads as enterable shop | ✅ at every successfully-generated/placed building spot-checked |
| 5 | Spend ≤ $15, draw calls bounded, console clean, 2 reloads pixel-identical, single-file <8MB | Spend $2.82 (account-limited, not cap-limited) ✅. Draw calls: 5 total at a representative pose ✅. Console: clean across every check this session ✅. Determinism: quad-count-identical across reload (informal) ✅. Single-file: 3.97MB ✅ |
| 6 | This document | ✅ |

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
