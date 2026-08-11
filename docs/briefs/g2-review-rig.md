# Brief — the G2 capture-review rig

You are the implementer. `AGENTS.md` holds without amendment; you have already
read it. This is a new task, not a continuation of F3.

**You own `scripts/mcgrots-styleshots.mjs` (new) and one line of
`package.json`.** Sonnet is in `src/mcgrots/looks.js` and
`scripts/smoke-mcgrots.mjs` finishing F4's gate. Do not touch either, and do not
touch `src/` at all — this rig only drives the shipped page, it does not change
it.

## Why this exists

G2 ends with Dan ranking four style candidates and picking one. Nothing in the
repo lets him do that. `scripts/mcgrots-grade.mjs` sweeps a metric, and the F4
brief records that its isolate-the-actor metric contradicted itself between runs
— it is sound for comparing two grades and unsound as an absolute. A ranking is
a human judgement made by looking, so the deliverable is **pictures arranged for
comparison**, not a number.

## The candidates

Three deliberately separate URL params, because a bundle cannot be a control for
another bundle:

| row | URL | note |
|---|---|---|
| baseline | *(no param)* | answers "does any of this beat nothing" |
| S1 | `?look=inked` | inverted-hull outline + hard two-band cel ramp |
| S2 | `?look=aerial` | S1 plus distance falloff — **S1 is its control** |
| S3 | `?style=key` | five measured swatches per beat |
| S3 control | `?style=posterise` | S3's own control |
| S4 | `?page=on` | paper margin, panel rule, gutter-hold cut |

All rendered on the **skinned** body with a real archetype, never the capsule.
The capsule is a pale untextured primitive and the cast carries a dark map;
`mcgrots-grade.mjs`'s header explains at length how judging on the capsule
certified a grade under which the cast rendered black. Default `--body=skinned
--archetype=rab`; expose `--archetype=` so the sheet can be re-run on morag,
whose hip artefact is now a known walk-time fault.

## Shape of the output

**One contact sheet per anchor, candidates as rows.** Dan compares candidates at
a fixed viewpoint; that is the comparison a ranking is made of. A sheet per
candidate would ask him to hold six images in his head.

Three columns per row — approach, mid-stride, arrived — because the game is a
character walking to a spot and a still cannot show a look in motion. Not eight;
the sheet stops being readable. Label every row with its URL, in the image, so a
sheet is still legible after it leaves the terminal.

Anchors: `counter, wall, kerb, far, back`. Write to
`docs/smoke/captures/mcgrots/g2/<anchor>.png`.

`scripts/mcgrots-shot.mjs` already boots exactly as the gate does and has the
frame-stepping and flag plumbing. Reuse it or its boot; do not write a third
boot path. **A rig that boots differently from the gate cannot be used to
explain the gate.**

## Decisions already made — do not re-open

- **The hour is not swept.** G2 settles the fixed hour together with the key,
  not separately, so a sweep here is a combinatorial explosion answering a
  question nobody is asking yet. Take `--hour=` as an option, default to the
  page's own default, and print which one the sheet used.
- **Markers off.** `setMarkersVisible(false)`, as `mcgrots-grade.mjs` does. The
  anchor rings are debug furniture and they dominate a small frame.
- **No metric.** If you find yourself computing a mean luminance to decide which
  candidate is better, stop — that is the job this rig exists to replace.

## Definition of done

- `node scripts/mcgrots-styleshots.mjs` writes five sheets, and
  `npm run styleshots:mcgrots` runs it.
- **You have opened all five and said what you saw**, per candidate: is the
  outline legible at that distance, does the figure separate from the ground,
  does S2 visibly differ from S1, does S4's panel rule survive a moving camera.
  This is the point of the task. A sheet you did not look at is not evidence
  that the rig works.
- Report anything that renders wrong. S1 and S2 depend on Sonnet's F4 fix
  (`795efce`, missing `normal` attribute); if the figure is still black in your
  sheets, that is a finding and I need it immediately, not at DONE.
- No gate is added, so no fault injection applies. Say that rather than
  inventing one.
- `npm run smoke:mcgrots` must still pass — but **check with control before
  running it**, because Sonnet has `scripts/smoke-mcgrots.mjs` uncommitted and
  `bundle:mcgrots` rewrites the bundle and stamps the html underneath him.
- Landed per `AGENTS.md` § Landing, including `docs/MCGROTS-VALIDATION.md`
  recording what the rig proves and what it deliberately does not.
- **Commit; do not push, deploy or publish.**

## Reporting

`.herdr/codex.md`, as before. Ping control on QUESTION or DONE only.
Report what you saw, not what you concluded.
