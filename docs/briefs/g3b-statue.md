# G3b — Queen Victoria and the Foot's landmarks

The Foot of the Walk has a placeholder: `site.js`'s `STATUE` export, a plinth
at the junction origin with a radius. Its own comment says G3 should author
her properly and check the position against reference rather than inherit the
number. That is this unit.

Style is settled: **S2 · Aerial flatten**, re-confirmed by Dan on 2026-08-12.
Build to look right under S2. Do not re-open the style ranking.

## Why she cannot be fetched

Read `docs/MCGROTS-ROADMAP.md` § "The Foot" before starting. The Overpass query
in `scripts/fetch-osm.mjs` asks for `way["building"]` and the Leith Walk
highway way. **A memorial is an OSM node**, so Queen Victoria was never in the
data and re-running the fetch will not produce her. She is authored geometry.

The same is true of the PERSEVERE signage and the boundary plaque.

## The reference

`docs/LEITH.md` § "Texture" is the source and it is short on both:

- The **Queen Victoria statue** at the Foot — Leith's meeting point since 1907.
  A 1985 restoration found a glass casket of 1907 Leith newspapers inside her.
- **PERSEVERE**, the burgh motto since 1889 — on buildings, bins and tattoos,
  and on the ship crest.
- The **"Leithers Don't Litter" / boundary plaque** where Edinburgh ends.

The real-geometry rule from `docs/ROADMAP.md` applies: **never "correct"
something real because it looks wrong.** A seated Victoria on a tall plinth
facing the way she actually faces beats a better-composed invention.

If you can establish her real orientation and rough dimensions from what is in
the repo, use them and say where you got them. If you cannot, **say so plainly
in your report and pick a defensible placeholder** — do not present a guess as
research. State which parts are documented and which are yours.

## What to build

`src/mcgrots/statue.js`, exporting a build function taking the scene. **One
line** in `main.js` calls it — keep it to one line, because Sonnet is landing
`van.js` in the same file at the same time and a one-line addition in two
places is a merge git can do. If `main.js` conflicts, keep both lines.

`site.js`'s `STATUE` export is yours to revise, and it is the only thing you
should change in that file. **Do not touch the `LIGHT` block** — the fixed hour
is G3c's, deliberately, because it has to be judged against a dressed pitch.

Scope beyond the statue: the PERSEVERE signage and the boundary plaque are
in scope if the statue lands cleanly and time allows. The statue is the
deliverable; the other two are a bonus. Do not start them at the expense of
her.

Randomness comes from **your own seeded generator** if you need any. Never add
or reorder a draw in an existing sequence — the review sheets depend on it.

## The composition constraint that already exists, and must not break

`site.js` records a measurement worth reading in full before you place
anything. The pitch was rotated a quarter turn specifically to move the statue
**off every camera sightline**. Measured across the five shots:

```
turn     worst building   worst statue dist   statue off-sightline
as-is         6.8 m             2.5 m               0.2 m
-90           6.5 m             7.5 m               8.3 m   <- chosen
```

At 0.2 m off-sightline she sat dead centre in every frame and filled a quarter
of the establishing wide. She is meant to be **a landmark in shot, not the
subject of shots she is not the subject of.**

So: making her bigger, taller or more central will undo a deliberate,
measured decision. If your authored statue is larger than the placeholder,
re-measure the off-sightline distance and report it. That number going down is
a regression even if the statue looks better in isolation.

## The gate

Add checks to `scripts/smoke-mcgrots.mjs`. The one that matters is **the
off-sightline distance holding at or above the measured 8.3 m** across all
five shots — that is a real property of the product, it has a documented prior
value to compare against, and it is exactly the thing an authored statue is
likely to break.

Every new check needs a **named control** isolating it and must be
**fault-injected** to prove it can go red. Commit before you inject —
`git checkout <paths>` restores nothing if any path in the list is untracked,
and a surviving injection looks like a second bug next session.

## What Dan looks at

**Numeric gates cannot see a bad picture.** Three separate faults in G2 passed
every numeric check and were caught only by opening an image.

Re-run `npm run styleshots:mcgrots` and open the sheets yourself. Report what
you **saw** — whether she reads as a statue or as a lump, at which anchors she
is visible at all, and whether she pulls the eye away from the van. That last
one is the judgement the quarter-turn measurement was protecting, and no
number in the suite can make it.

## Scope

`src/mcgrots/` only. The street is paused; `src/` outside it is not yours.

Do not touch `anchors.js`, `actor.js`, `van.js`, or `site.js`'s `LIGHT`. You
will see a bad seated pose at the `wall` and `kerb` anchors in your captures —
that is F1, already logged, and it is G3c's. Leave it and say you saw it.

Land as one unit: code, `docs/MCGROTS-VALIDATION.md` for what the new checks
prove and deliberately do not, `docs/MCGROTS-ROADMAP.md` § G3b, and a commit
message carrying the real numbers — including the off-sightline distance
before and after.
