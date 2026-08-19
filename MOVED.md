# MOVED — where the assets also live now

**Nothing broke.** The assets were **copied**, not moved. `assets/` in this
repo is untouched and both projects run exactly as before — the parking gate
was re-run today: `npm run bundle:mcgrots && npm run smoke:mcgrots` still
passes 153/153.

A general-purpose library now also exists at
`/Users/dan/code/personal/mcgrot-assets` (a separate git repo), holding this
project's durable assets so a future project can use them without inheriting
either game's code. Read its `README.md` first.

## The path mapping

Source (this repo, `assets/`) on the left, library on the right. Verified
2026-08-19 by listing both trees — counts differ in places because the
library's audio and facade directories hold extra processed variants
alongside the originals, not because anything is missing.

```
assets/audio/*.mp3                    -> sounds/readings/        (136 -> 136)
assets/audio/cast/                    -> sounds/cast/            (6 -> 6)
assets/audio/mcgrot/                  -> sounds/mcgrot/          (9 source; library also holds a lines/ subfolder)
assets/faces/                         -> visual/2d/faces/        (40 -> 40)
assets/shopfronts/                    -> visual/2d/facades/      (18 source photos; library holds the full 12-stage pipeline output)
assets/characters/                    -> visual/3d/characters/   (22 -> 23; rigs, segments, glbs)
assets/cars/                          -> visual/3d/vehicles/     (4 glb -> 4 glb, plus shared Textures/)
assets/comic[123]-*.{jpg,png}         -> visual/2d/comics/named/ (6 -> 6)
assets/*.json (7 records)             -> data/
```

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
cp -r /Users/dan/code/personal/mcgrot-assets/sounds/readings/*.mp3 assets/audio/
cp -r /Users/dan/code/personal/mcgrot-assets/sounds/cast/ assets/audio/cast/
cp -r /Users/dan/code/personal/mcgrot-assets/sounds/mcgrot/ assets/audio/mcgrot/
cp -r /Users/dan/code/personal/mcgrot-assets/visual/2d/faces/ assets/faces/
cp -r /Users/dan/code/personal/mcgrot-assets/visual/2d/facades/originals/* assets/shopfronts/
cp -r /Users/dan/code/personal/mcgrot-assets/visual/3d/characters/ assets/characters/
cp -r /Users/dan/code/personal/mcgrot-assets/visual/3d/vehicles/*.glb assets/cars/
cp -r /Users/dan/code/personal/mcgrot-assets/visual/2d/comics/named/* assets/
cp /Users/dan/code/personal/mcgrot-assets/data/*.json assets/
```

The one thing that would not come back this way: the 419-image comic corpus.
It never lived in the library — recover it from Google Drive, one direction
only, via `scripts/mcgrots-drive-pull.mjs` (read its header before running
it; it is Drive → local only and must never be pointed the other way).
