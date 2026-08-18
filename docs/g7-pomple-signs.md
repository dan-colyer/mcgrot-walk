# G7l — Pomplé holds up a sign

`docs/briefs/g7l-pomple-signs.md`. Twelve handwritten lines existed under the
`POMPLE` key in `generated/mcgrots-dialogue.json` — his `directorNotes` there
says the device outright ("Pomplé does not speak aloud; render each line as
handwritten sign text") — and nothing rendered one. This builds the sign,
picks which of the twelve lines shows, and reports which of them are actually
readable from where the player stands.

## What was built

`src/mcgrots/pomple.js` gains a canvas-baked sign, `pomple-sign`, as its own
top-level object (a sibling of the `pomple` group in the scene, never a
child). That is not incidental: his `bodyYaw` swings by design during
`notice`/`settle` — up to a full π reversal for `settle` — and a sign
parented to the body would swing with it, right when a beat puts him in
motion. The sign is fixed at his rest position/orientation instead, and is
visible only while he is idle (`beat === null`) — hidden for the duration of
any active beat, reappearing once it ends.

Which of the twelve lines shows is `Math.floor(Date.now()/86400000) % 12` —
a pure function of the day, never this module's own `t` (which restarts at
zero every boot, so keying off it would show two players looking at the same
dog at the same real moment two different signs) and never a PRNG draw. A
gate-only debug lever (`pomple-sign`'s own `userData.setClock`/`clearClock`,
mirroring main.js's existing `rotaClockOverride` pattern) pins it for
testing.

The board itself is 0.85m × 0.60m, positioned 0.55m ahead and 0.70m to the
side of Pomplé's rest position (see "The sign was hiding the dog" below for
why the sideways offset exists), textured from a 490×350 canvas bake using
raw sRGB hex (`CLAUDE.md`'s standing rule — a `THREE.Color` would convert the
bytes a second time and the result silhouettes). Colours are van.js's own
`priceBoardCanvas` palette, reused rather than picked fresh, because that
palette is already proven under this exact scene's lighting.

## The two things that bit, and they were not the ones expected

The brief flagged the canvas bake (raw sRGB) as the likely trap. It wasn't —
reusing van.js's proven palette sidestepped it entirely. Two different bugs
showed up instead, both only visible by rendering and looking:

**1. The font-shrink loop only checked the wrapped block's height, never
individual line width.** A first render of the longest line clipped several
lines off both edges of the board ("THE STUDENT" read as "E STUDENT"). The
wrap function breaks between words but does not know a single word
("AUTHENTICITY.") can already be wider than the board's margin on its own —
at the font size the height-only loop was accepting, that one word measured
~470px against a 422px budget. Fixed by requiring the widest wrapped line to
also fit before the loop stops shrinking.

**2. The sign, once sized to be legible, occluded the dog it belongs to.**
Placed straight ahead of Pomplé, two things went wrong: part of it sat behind
the van's own counter shelf from the `counter` camera (real 3D occlusion),
and once pushed clear of the van, its own projected screen rect almost
entirely overlapped his — his own facing direction is only 10.8° off the
`counter` anchor's own sightline to him, so anything placed directly ahead of
him sits almost exactly between him and that camera. Fixed by offsetting the
sign sideways instead of pushing it further forward. Confirmed by projecting
both AABBs, not by eye alone: before the fix, sign x914-1031 pomple x857-930
(pomple fully covered); after, the overlap is a 16px sliver and the render
shows both clearly, side by side.

## Which lines are legible, and where — read by eye, at native resolution

Rendered all twelve lines at `counter` and opened the full 1280×720 frame for
each — not a digitally zoomed crop, which makes every line look fine and is
exactly the trap this project's own rule warns about ("only your eye proves
the words can be read"). At `counter`:

- **Legible**: `pomple-04`, `pomple-05` ("SIT DOWN."), `pomple-11` ("THE HAT
  IS NOT A LICENSE.") — opened and read directly. By the same word-count/
  wrap-line pattern (≤6 words, ≤3 wrapped lines), `pomple-01/02/03/09/10/12`
  read the same way.
- **Readable with effort, not at a glance**: `pomple-07` (7 words, 4 wrapped
  lines).
- **Not legible**: `pomple-06` and `pomple-08` — both 9-word sentences, 4-5
  wrapped lines. The first word or two survives; the rest is a blur of small
  bold caps at this camera distance. This is exactly what the brief predicted
  for these two lines specifically.

Per anchor (using `pomple-05`, the shortest and most legible line, as the
best case): legible at `counter` and `wall`; just barely legible at `far`
(two short words survive); not reliably legible at `back` even at 8× digital
zoom; not legible at `kerb` at all — the board sits ~61° off its own facing
direction from that camera and renders as a bright edge-on sliver with no
resolvable letterforms, for every line tried. This is the expected, reported
result per the brief ("a sign legible at counter and unreadable at back is
not a failure") — no attempt was made to angle the board for omnidirectional
legibility, which would have traded away the two anchors it currently works
from for anchors it likely still wouldn't reach.

**Finding for whoever writes the next batch of sign lines**: at this board
size and the `counter`/`wall` viewing distance (~7-8m), a line reads legibly
up to roughly 6 words / 3 wrapped lines. 7 words is borderline. 9 words in
one sentence does not read at distance regardless of font auto-shrink — the
shrink loop protects against clipping, not against producing text too small
to resolve.

## Effect on the existing `pomple` region

`scripts/smoke-mcgrots.mjs`'s `pomple` region measures `scene.getObjectByName
('pomple')`'s own AABB and the rendered content inside its projected rect.
Because `pomple-sign` is a scene sibling, never a child of that group, its
own AABB is structurally unaffected — confirmed by diffing the pre-change
file back in and re-running `--only=pomple` three times per side to separate
real movement from render noise. The **area** check is unmoved (0.523-0.526%
across all runs, within noise). The **content stddev** check, which samples
actual rendered pixels inside that rect, did move: with the sign originally
placed directly in front of him (before the sideways-offset fix), counter
stddev read 47.5 against an unmodified baseline of 37.4 — a real +27% shift,
because the sign's own lettering was rendering inside his measured rect.
After the sideways fix, the residual overlap is a 16px sliver and the shift
is much smaller (40.8 vs 37.4). Both numbers stay far clear of that check's
own threshold (`pompleStddev <= flatStddev + 5`, flat≈0), so nothing was ever
at risk of flipping red. Not touched — reported per the orchestrator's ask.

## The gate

`scripts/smoke-mcgrots.mjs`'s `signs` region, one block at the end, one
`REGIONS` entry, its own fresh page (the `style` region's no-navigate-back
trap doesn't reach a region with its own boot). Seven checks:

1. Present and non-degenerate at all five anchors (floor 0.05%, measured off
   the smallest real footprint, `far` at 0.160%).
2. **The named control**: lettered vs. blank (same geometry, position,
   material, no text baked) at all five anchors, reported per-anchor rather
   than averaged — kerb's own weak signal (Δ7.5 against 23-29 everywhere
   else) is visible in the numbers, not hidden by an aggregate.
3. Determinism — the same pinned day produces the same line across two
   independent page boots; a different pinned day produces a different line
   (the control that rules out a function returning a constant).
4. Visible at rest, hidden for the duration of an active beat, reappears once
   it ends.

`npm run bundle:mcgrots && npm run smoke:mcgrots -- --only=signs` → 7/7 in
1.5-1.8s standalone. Full suite after landing: 138/138 in 27.1s.

Each check was fault-injected individually and confirmed red, then restored
(diffed back to the unmodified file rather than trusting memory that the
revert was exact):

- Zeroing the board's size failed both the presence check (0.000% at every
  anchor) and the contrast check (both textures render nothing).
- Forcing the sign permanently invisible did **not** fail the presence
  check — `Box3().setFromObject` doesn't consult `.visible`, the same gap the
  existing `van`/`pomple` regions already carry (their own area checks have
  the identical limitation; the content/contrast check is what actually
  proves something is rendered). It did fail the contrast check and the
  beat-visibility check.
- Forcing `pickLineIndex` to a constant failed the "different day → different
  line" control while leaving "same day, two boots" green — correctly: a
  constant function is still deterministic, so only the control catches it.
- Forcing the sign permanently visible failed the beat-visibility check
  (`duringNotice` read `true`).

## Scope note

Not touched: `main.js`, `audio.js`, `visit.js`, `ambience.js`, `taxman.js`,
`generated/mcgrots-dialogue.json`. The twelve lines are copied verbatim into
`pomple.js` as a local constant rather than fetched from the dialogue JSON at
runtime — that file is not this unit's to wire into the build/asset pipeline,
and the twelve strings are short, fixed, and already reviewed (see
`docs/MCGROTS-DIALOGUE.md`).
