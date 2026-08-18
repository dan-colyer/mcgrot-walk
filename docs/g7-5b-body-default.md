# G7.5b — BODY_KIND promoted to `skinned`

Fault closed (half): § 10 F26, "its worst instance is the player's own body."

## The change

`src/mcgrots/main.js:51`

```diff
-const BODY_KIND = params.get('body') || 'capsule';
+const BODY_KIND = params.get('body') || 'skinned';
```

`BODIES[BODY_KIND] || BODIES.capsule` at `main.js:733` is **unchanged** — it
still falls back to `capsule` for an unrecognised `?body=` value. Argued
deliberately: that line is a typo guard for capture scripts, not a default. It
existed so a bad `?body=` produces a comparable, obviously-blank frame instead
of a crash, and that job is orthogonal to what the *unset* case should render.
Pointing the fallback at `skinned` would mean a typo silently renders the
correct-looking figure and masks the mistake; `capsule` stays legible as "this
boot got an unrecognised body value." Leaving it alone is the deliberate
choice this brief asked for, not an oversight.

`?body=` still overrides in both directions — confirmed with
`?body=capsule`, `?body=segmented`, and `?body=skinned` all booting correctly
via `mcgrots-shot.mjs`.

## Method

Bundled clean (`npm run bundle:mcgrots`), ran the full suite once at
`capsule` (the prior default) and once at `skinned` (this change), same
machine, same renderer (`chromium/metal`), captured both full outputs to
disk, diffed them line by line.

- Baseline (`capsule` default): **153/153 passed in 32.0s**
- After (`skinned` default): **153/153 passed in 32.3s**

## Finding 1: the suite result did not move — and that is expected, not a gap

No check flipped pass/fail. This is **not** the F26 gap recurring. F26's
point was that no check reads the *default* boot at all for a flagged
feature; here almost every check that renders the player's body already
navigates to an explicit `?body=skinned&archetype=rab` for its own reasons
(`main.js:1391,2518,4124` in `scripts/smoke-mcgrots.mjs` — the outline/S1
checks, the F22 leg-zone checks, the taxman exchange). Those checks were
already exercising the skinned body before this change; flipping the default
doesn't move them because they never read the default.

The two regions that **do** boot the plain page with no `body=` — `camera`
(the five bookmark anchors) and `visit` (`scripts/smoke-mcgrots.mjs:2422`,
the exact evidence F26 named) — moved on every numeric field they touch, but
none of those checks has a tolerance tight enough to flip on this change. See
Finding 2.

## Finding 2: what actually moved, checked individually against
`scripts/smoke-mcgrots.mjs`

| Check | Before (capsule) | After (skinned) | Why |
|---|---|---|---|
| shots: wall/kerb/far/back triangle count | 26990 | 37186 | skinned mesh geometry replaces the capsule's; `counter` unchanged (25486 both runs) — see Finding 3 |
| shots: wall/kerb/far/back draw calls | 90/48/90/90 | 88/46/88/88 | 2 fewer draws — the capsule was a separate primitive; the skinned body's material batches differently |
| "no shot is crushed or blown" worst % | 0.9% on counter | 2.2% on wall | the actor's dark coat contributes near-black pixels the bright cream capsule never did; still far under the 12% floor |
| shot luminance means | 101/108/110/112/109 | 101/106/107/109/107 | frame reads slightly darker at wall/kerb/far/back — the coat absorbs more than the capsule reflected; counter untouched |
| shot luminance stddev min | 37.4 (back) | 37.5 (back) | noise-floor scale, not attributable |
| van rect "holds content" variance | wall 53.3 / kerb 51.3 / far 50.1 / back 45.4 | wall 51.8 / kerb 50.1 / far 45.4 / back 42.2 | small drop at every anchor but counter — consistent with less light bounce off the actor near the van; still clears the "not flat" floor by a wide margin |
| F22 control (valance off) leg fraction | 13.2% | 12.2% | this check *already* forced `?body=skinned` before this change (line ~4124) — the 1pp shift is run-to-run render noise, not caused by the default flip |

All other diffed lines (audio RMS/timing/port numbers, the unpinned
real-wall-clock cue check, the style region's "reverts to bit-identical
frame" hash) are either explicitly non-deterministic by design (the real
clock check says so in its own comment) or expected to change in *value*
without changing in *meaning* — the bit-identical hash differs because the
default frame's content differs, but it still matches itself before/after
the revert, which is what that check actually asserts.

**No threshold was touched. No check was edited.**

## Finding 3: the `counter` anchor is blind to this entirely

`counter` — the closest anchor, effectively first-person at the stall — shows
byte-identical triangle/draw/mean/stddev numbers before and after. Confirmed
by direct capture: `mcgrots-shot.mjs --anchor=counter` with `?body=capsule`
and `?body=skinned` render pixel-identical frames. The player's own body is
never in view from `counter` — this anchor cannot see the default at all, in
either direction. Worth flagging for whoever writes the F26 default-boot
check: a `body` check anchored at `counter` would pass vacuously.

## Finding 4: what the captures actually show

Opened `wall`, `far`, `kerb`, `back`, `counter` for both bodies
(`docs/smoke/captures/mcgrots/g0/{wall,far}.png` are the after-default
versions on disk now; before/after pairs regenerated to `/tmp/g75b/` for this
comparison).

- **wall**: before is a featureless cream lozenge standing dead-centre,
  fully blocking the middle third of the Gullet's counter and signage. After
  is a mid-stride figure — flat cap, dark coat with visible fold shading,
  lighter trousers, boots — angled three-quarter, standing slightly
  off-centre. It now blocks *less* of the counter, not more: the capsule's
  cylindrical bulk was wider through the chest than the figure's actual
  silhouette at that pose.
- **far**: same story — before is the lozenge with a rounded cap top
  (barely readable as a "head"); after is a walking figure mid-stride, one
  leg forward, coat swinging, clearly a person rather than blockout geometry.
- **kerb**, **back**: figure is well lit, coat shading reads correctly, does
  not merge into the ground or the stall in silhouette. At `back` it stands
  squarely in front of camera but does not occlude the statue on the right or
  meaningfully block McGrot at the counter (McGrot's head and torso stay
  visible above the actor's shoulders).
- **counter**: identical both ways — see Finding 3.

No frame shows the figure standing somewhere it should not, clipping through
scenery, or occluding an object a check depends on (the van and statue stay
clear at every anchor tested). It reads as intended: a coated, hatted figure
with a head and a walk cycle, not a blockout lozenge.

## Verdict

The flip moves the pictures — every capture that shows the player's body
now shows the G1 winner instead of the blockout — and moves nothing in the
suite's pass/fail. It moves several numeric *values* by amounts well inside
existing tolerances, all explained above and all consistent with "a real
figure occupies the frame differently from a lozenge," not with a broken
check.

This confirms F26's own reading: the suite genuinely cannot see this default
at the two anchors that boot it plain (`camera`, `visit`), and would not have
caught this default being wrong for as long as it was. The follow-up
(default-boot check per flagged feature, listed second in G7.5 item 1) still
needs writing — this unit only fixes the default, not the gate gap under it.
