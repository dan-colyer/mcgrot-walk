# G7o — the valance

Brief: `docs/briefs/g7o-van-valance.md`. Roadmap: `docs/MCGROTS-ROADMAP.md` § 10, F24.

## What this is, honestly

**A concealment, not a correction.** McGrot still stands at road level inside
the van's plan footprint — his legs still occupy the same space as the van's
underside. The valance hides that overlap from the camera; it does not move
him, the counter, or the van, and it does not make the two ground planes
agree. If a later unit gives the van a visible interior, F24 must be
revisited rather than built on.

## What was built

`src/mcgrots/van.js`, inside `buildBody()`: a skirt named `van-valance`, same
4-face loop as the existing "soot skirt" trim (front, back, both ends), from
just off the ground (0.02 m) up into the floor slab (`CHASSIS_H + 0.02` =
0.64 m) — filling the span the wheels (0.02–0.82 m) don't. SOOT, matching the
trim and wheels it sits beside, so it reads as undercarriage rather than a
second body panel.

**Togglable**, same lever shape `main.js` already uses for `VISIT_ON` /
`AMBIENCE_ON`: `window.__mcgrotsForceValance = false` or `?valance=off`.
Ships ON. Not routed through the street's `src/flags.js` — that helper is for
the street's own modules, and `van.js`'s own header already declines a
cross-project import for exactly this reason.

No PRNG draw added, no reordering of van.js's existing sequence.

## The gate

New `valance` region, appended to the end of `scripts/smoke-mcgrots.mjs`
(one new block, one new `REGIONS` entry) — does **not** touch the existing
`van` region, which still carries the Pomplé/McGrot checks and was live in
another worker's session.

Own navigation (`?body=skinned&archetype=rab`, aerial look, 4-frame settle),
so it passes standalone and does not inherit whatever body an earlier region
left the page on — the exact `beats` bug (6/7 alone vs 106/106 in-suite) this
project has already paid for once. Clock pinned to 980 (rota.js's own
"no reader present" reference) throughout, so the rota reader never
contaminates a measurement aimed at the van.

```
npm run smoke:mcgrots -- --only=valance   ->  6/6,  ~2s
npm run smoke:mcgrots -- --only=van       ->  3/3,  unchanged
npm run smoke:mcgrots -- --only=mcgrot    ->  7/7,  unchanged (F22 itself)
npm run smoke:mcgrots                     ->  137/137
```

### Claim 1 — the leg zone is covered

Rect: McGrot's own x/z footprint (not the van's or the valance's own — both
were tried first and are diluted by pavement he was never standing in
either arm; see the region's own comment for the discarded numbers), y
clamped to the road-to-floor band `[0, 0.62]`. Same on/off toggle-and-diff
technique as F22 and the beret check (`mcgrot` visible/invisible, same boot,
same anchor, pixels over an 8-luminance threshold inside the rect).

| anchor | valance on | valance off (control) | ratio |
|---|---|---|---|
| counter | 17.0% | 28.0% | 0.61 |
| wall | 12.7% | 28.4% | 0.45 |
| kerb | 14.3% | 29.3% | 0.49 |
| far | 14.7% | 30.1% | 0.49 |
| back | 19.1% | 31.4% | 0.61 |

Gated at ratio < 0.8 (the same threshold shape F22's own fix-on/fix-off
control uses) and control > 15% (real margin below the 28.0% minimum
measured, ruling out a rect that never had him in it).

### Claim 2 — the valance does not occlude McGrot himself

F22's own floor, re-run with the valance in both states, at `counter`,
clock 980:

| | on-arm | off-arm |
|---|---|---|
| his own visible-pixel fraction | 25.5% | 30.5% |

Both clear F22's existing 20% floor. The valance costs him ~5 percentage
points — the leg band it is built to remove — without dragging him under the
line F22 exists to enforce.

### Claim 3 — nothing else moved

The van region's own frame-fraction check reads the van's AABB via
`Box3().setFromObject`, which — like the mcgrot region's equivalent — walks
descendants regardless of `.visible`. A visibility toggle is not a control
for this claim; `before` instead excludes the valance's geometry from the box
entirely (as if the unit had never landed), `after` is the shipped
`Box3().setFromObject(van)` the van region itself uses.

| anchor | before | after | delta |
|---|---|---|---|
| counter | 57.58% | 57.59% | 0.011pp |
| wall | 14.35% | 14.35% | 0.003pp |
| kerb | 12.16% | 12.16% | 0.002pp |
| far | 6.51% | 6.52% | 0.001pp |
| back | 7.45% | 7.45% | 0.001pp |

Gated at < 0.5pp. The wheels and awning already extend the van's own AABB
past where the valance sits, so this unit adds essentially no silhouette —
the existing `van` region's own documented numbers (e.g. "counter: 57.6%")
stay valid, confirmed by re-running that region unmodified (3/3).

## Fault injection

Each check was broken, watched go red, restored, and re-verified green.
Committed before each injection (`b02311b`); each fault reverted with
`git checkout -- src/mcgrots/van.js`.

1. **Claim 1**: shrank the valance to a 0.05 m stub (`valanceTop = 0.07`).
   `the leg zone... drops with the valance on` → **FAIL**. Control check
   (off > 15%) stayed green, correctly isolating which half broke.
2. **Claim 2**: pushed the front panel 0.35 m toward the camera and raised
   it to `CHASSIS_H + 1.4` — a wall in front of him, not a skirt under him.
   `F22 unaffected... clears the 20% floor with the valance on` → **FAIL**.
   Other four checks stayed green.
3. **Claim 3**: widened the front/back panels to `VAN_LENGTH * 3`. First
   attempt stayed green at 100%/100% — found a real gap: `looks.js` builds an
   ink-hull companion mesh per named part (`hull:van-valance`), and the
   `before` box excluded only the flat mesh by exact name, so the fault's
   growth leaked through `before` too and cancelled out. Fixed by excluding
   both `van-valance` and `hull:van-valance` (commit `65196ff`). Re-injected
   the same fault: now correctly reads `before=57.58% after=100.00%
   delta=42.42pp` → **FAIL**. Restored, full suite re-verified 137/137.

## What I saw, per anchor

Captures: `docs/smoke/captures/mcgrots/g0/valance-{counter,wall,kerb,far,back}.png`
(valance on, shipped state).

- **counter** — the closest anchor, the one the composed shot is built
  around. With the valance on, the underside reads as a continuous dark band
  from the counter's black interior straight down to the road — no leg or
  trouser pixels anywhere below the apron. Toggled off (checked separately,
  not committed to captures), his trousers are clearly visible against the
  road between the wheels.
- **wall** / **kerb** — mid-distance, three-quarter angle. The wheels are
  now the dominant visible undercarriage detail; the valance sits between
  them as the same dark tone, so the join isn't visible as a seam — it reads
  as one undercarriage, not a skirt bolted under a separate body colour.
- **far** / **back** — the van is small in frame at these anchors; the
  valance's contribution is present but minor, consistent with the near-zero
  frame-fraction delta measured above.

At no anchor does it read as a mudflap or a separate part stuck under the
body — same soot tone as the trim and wheels, flush with the existing body
panel's outer face.

## Numbers for the landing commit

- `npm run smoke:mcgrots -- --only=valance`: 6/6
- `npm run smoke:mcgrots -- --only=van`: 3/3 (unchanged, re-run not re-written)
- `npm run smoke:mcgrots -- --only=mcgrot`: 7/7 (F22 unchanged)
- `npm run smoke:mcgrots`: 137/137
- Leg-zone fraction: on 12.7–19.0%, off 28.0–31.4% (all ratios < 0.62)
- F22 at counter: on 25.5%, off 30.5% (floor 20%)
- Van frame-fraction delta: 0.001–0.011pp per anchor (gate < 0.5pp)
