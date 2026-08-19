# park-pipelines — how each asset class was actually made

Read `docs/briefs/park-CONTEXT.md` first.

## What you own

Everything under `docs/pipelines/` in the **library** repo
(`/Users/dan/code/personal/mcgrot-assets`), and nothing else. Do not touch the
library's `README.md`, `docs/api-usage.md`, or `docs/gotchas-*.md` — other units
own those.

## The job

The assets in the library are outputs. The *method* that produced them is worth
more than the bytes, because it can be run again on new inputs. Three pipelines
are worth documenting properly.

Write one file per pipeline:

- `docs/pipelines/facades.md`
- `docs/pipelines/characters.md`
- `docs/pipelines/audio.md`

Plus `docs/pipelines/README.md`, a one-screen index saying what the three are
and which is worth reusing in a 2D project.

---

## 1. Façades — the big one

`visual/2d/facades/` is 118M and 706 files, and it is not a folder of photos.
It is a **twelve-stage pipeline**, each stage a directory. Measured on disk:

| Stage | Files | Size |
|---|---|---|
| `raw` | 49 | 30M |
| `originals` | 1 | 180K |
| `rect` | 47 | 8.1M |
| `elevations` | 232 | 33M |
| `decay` | 20 | 536K |
| `generated` | 148 | 23M |
| `handmade` | 1 | 4.0K |
| `fixed` | 6 | 172K |
| `bands` | 97 | 2.9M |
| `tiles` | 49 | 1.5M |
| `atlas-pages` | 8 | 13M |
| `qa` | 38 | 4.9M |

Ten JSON files sit at its root: `manifest.json`, `placement.json`,
`elevations.json`, `bands.json`, `atlas-pages.json`, `borrowed.json`,
`handmade.json`, `signage-names.json`, `credits.json`, plus a
`signage-atlas.jpg`.

**Work out the real order of the stages and say what each one does to its
input.** Do not guess it from the directory names — derive it from the scripts
that write each directory, and say which script owns which stage:

```
scripts/fetch-shopfronts.mjs        scripts/rectify-facades.mjs
scripts/build-real-elevations.mjs   scripts/gen-facade-elevations.mjs
scripts/borrow-elevations.mjs       scripts/gen-facade-decay.mjs
scripts/gen-facade-declutter-d1.mjs scripts/gen-facade-fixes.mjs
scripts/ingest-handmade.mjs         scripts/build-elevation-atlas.mjs
scripts/build-facade-manifest.mjs   scripts/build-facade-placement.mjs
scripts/build-facade-registry.mjs   scripts/apply-signage.mjs
scripts/outpaint-giants.mjs         scripts/render-flats.mjs
```

A stage diagram is the right form here — plain ASCII or a Mermaid block, showing
what feeds what. Name the JSON that carries state between stages.

**Say plainly which stages a 2D project would want.** A rectified, decayed
shopfront elevation is directly usable as 2D backdrop art. An atlas page packed
for GPU texture upload is much less so. This judgement is the most useful thing
in the file.

Also record: what `qa/` was for and how the output was judged; what `borrowed`
means and why some elevations are borrowed; what `credits.json` obliges anyone
republishing these images to do. That last one is a real constraint, not
bookkeeping — find out what it says and state it clearly.

---

## 2. Characters

`visual/3d/characters/` holds seven rigged figures — kenneth, mcgrot, morag,
pomple, rab, runt, slab — each as `<name>-form.glb` plus `<name>-rig.json` and
`<name>-segments.json`, with one `rab-flats.png`. Note that pomple has segments
but no rig; find out why and say so.

Document the generation route:

```
scripts/gen-character.mjs   scripts/gen-mesh.mjs     scripts/rig-glb.mjs
scripts/segment-glb.mjs     scripts/glb-anatomy.mjs  scripts/glb-proportions.mjs
scripts/glb-stats.mjs       scripts/eval-poses.mjs   scripts/mcgrots-cast-albedo.mjs
```

Cover what a rig file and a segments file each describe, how a figure was
evaluated once generated, and what "flats" are. Say what the alternative was —
these replaced a box-and-photo paper doll, and the roadmaps record why.

This file is **3D-specific**. Label it so at the top: a 2D project reads the
audio and façade pipelines and skips this one.

---

## 3. Audio

`sounds/` holds 162 mp3 files in three roles: `readings/` (136, one per comic,
filename-matched), `cast/` (6) and `mcgrot/` (20).

Document the route from a comic image to a spoken reading:

```
scripts/prep-comics.mjs        scripts/extract-comic-lines.mjs
scripts/build-readings.mjs     scripts/generate-tts.mjs
scripts/merge-batches.mjs      scripts/daily-tts.sh
```

**Coordinate, do not duplicate.** The `apidocs` unit owns `docs/api-usage.md`
and is covering the API mechanics — model names, parameters, costs, rate limits.
You cover the **pipeline shape**: how text gets out of a comic, how a batch is
formed, what the catalogue records, how a reading is joined back to its comic,
and why landing a batch is a deliberate human milestone rather than a merge.
Link to `api-usage.md` for the call itself rather than restating it.

MP3 is used because Safari will not play OGG or Opus. Record that.

---

## What good looks like

- **Measured, not assumed.** Every count and size in your files is one you ran a
  command for. The table above is measured, but re-derive it — it is a snapshot
  and the point of the rule is that snapshots go stale.
- **A stage diagram beats prose** for anything with more than three steps.
- **Say what you could not establish.** Some of these scripts are one-off tools
  run once, a year ago. "This appears unused; not verified" is a good line. A
  confident wrong claim about what a stage does is worse than an admitted gap.
- Each file opens with one sentence saying what the pipeline produces and
  whether a 2D project would want it.

## Do not

- Do not run any of these scripts. Several call paid APIs. Read them.
- Do not reorganise the asset directories. Their layout is the pipeline's
  record.

Commit to your branch by explicit pathspec when done, then ping control.
