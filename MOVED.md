# MOVED — where the assets also live now

**Nothing broke.** The assets were **copied**, not moved. `assets/` in this
repo is untouched and both projects run exactly as before — the parking gate
was re-run today: `npm run bundle:mcgrots && npm run smoke:mcgrots` still
passes 153/153.

A general-purpose library now also exists at
`/Users/dan/code/personal/mcgrot/mcgrot-assets` (a separate git repo), holding this
project's durable assets so a future project can use them without inheriting
either game's code. Read its `README.md` first.

## The path mapping

Source (this repo, `assets/`) on the left, library on the right. The copy is
exact: verified 2026-08-19 with
`diff <(find <source> -type f | sort) <(find <library-dir> -type f | sort)`
on every row below, run against the **main working tree**
(`/Users/dan/code/personal/mcgrot/mcgrot-walk`) — every diff returned empty. A first
pass checked this git worktree instead and found large gaps; those were a
false alarm caused by this worktree, since several of the pipeline's own
intermediate directories (`raw/`, `rect/`, `bands/`, `qa/`) are gitignored and
so were never checked out into it. They exist in the main tree, which is what
the copy was made from.

```
assets/audio/*.mp3                    -> sounds/readings/        (identical file lists)
assets/audio/cast/                    -> sounds/cast/            (identical file lists, 6 files)
assets/audio/mcgrot/                  -> sounds/mcgrot/          (identical file lists, 20 files)
assets/faces/                         -> visual/2d/faces/        (identical file lists, 40 files)
assets/shopfronts/                    -> visual/2d/facades/      (identical file lists, 706 files)
assets/characters/                    -> visual/3d/characters/   (identical file lists)
assets/cars/                          -> visual/3d/vehicles/     (identical file lists)
assets/comic[123]-*.{jpg,png}         -> visual/2d/comics/named/ (6 -> 6)
assets/*.json (7 records)             -> data/
```

`assets/audio/cast/` and `assets/audio/mcgrot/` become sibling directories of
`sounds/readings/` rather than nesting inside it — the source's single
`audio/` folder (readings plus these two subfolders) becomes three separate
top-level folders under `sounds/`. That is a mapping shape, not a content
difference.

The 7 JSON records: `businesses.json`, `catalog.json`, `comic-lines.json`,
`facade-registry.json`, `leith.json`, `manifest.json`, `readings.json`. All
present in `data/`.

## What was deliberately not copied

The 419-image comic corpus, `assets/comics/`. **Google Drive is its only
home.** The library carries a manifest and a guarded pull script instead of a
copy — see `mcgrot-assets/docs/comics-and-drive.md`.

## How to repair, if the originals are ever deleted

The library is its own git repo, so the assets can be copied back the other
way:

```bash
cp -r /Users/dan/code/personal/mcgrot/mcgrot-assets/sounds/readings/*.mp3 assets/audio/
cp -r /Users/dan/code/personal/mcgrot/mcgrot-assets/sounds/cast/ assets/audio/cast/
cp -r /Users/dan/code/personal/mcgrot/mcgrot-assets/sounds/mcgrot/ assets/audio/mcgrot/
cp -r /Users/dan/code/personal/mcgrot/mcgrot-assets/visual/2d/faces/ assets/faces/
cp -r /Users/dan/code/personal/mcgrot/mcgrot-assets/visual/2d/facades/* assets/shopfronts/
cp -r /Users/dan/code/personal/mcgrot/mcgrot-assets/visual/3d/characters/ assets/characters/
cp -r /Users/dan/code/personal/mcgrot/mcgrot-assets/visual/3d/vehicles/* assets/cars/
cp -r /Users/dan/code/personal/mcgrot/mcgrot-assets/visual/2d/comics/named/* assets/
cp /Users/dan/code/personal/mcgrot/mcgrot-assets/data/*.json assets/
```

The one thing that would not come back this way: the comic corpus in
`assets/comics/`. It never lived in the library — recover it from Google
Drive, one direction only, via `scripts/mcgrots-drive-pull.mjs` (read its
header before running it; it is Drive → local only and must never be pointed
the other way). Point it at `--remote="McGrot/1 - Already in the game"`; the
default arrivals folder is empty.

**Drive holds all 418 catalogued comics as of 2026-08-20**, and did not before
that date. An independent audit found 22 catalogued comics existed only here,
so this recovery route would have returned 396 of 418. They were uploaded on
Dan's instruction as an additive copy of named files; verified 396 → 418 with
zero lost. The 419th local image,
`WhatsApp Image 2026-08-04 at 06.51.18.jpg`, is in no catalogue and is not on
Drive — it is not part of the corpus and is noted so it is not mistaken later
for a gap.
