# G3a — the van, the price board and the ground

The pitch is currently a blockout: real building massing, a placeholder plinth,
and a flat ground plane. G3 dresses it. This unit builds **the subject** — the
thing every one of the five composed shots is pointed at.

Style is settled: **S2 · Aerial flatten**, re-confirmed by Dan on 2026-08-12
against the regenerated review sheets. Build to look right under S2. Do not
re-open the ranking and do not tune anything against the baseline look.

## What exists to build on

`src/gullet.js` (the street's, paused but readable) already carries a van, a
price board and `mcgrotIsIn(dayKey)`. § 3 of the roadmap lists it as reusable.
**Read it before you write anything.** Reuse its geometry and its proportions
where they serve; do not import from it. The street is paused and a shared-module
dependency across the two games is a coupling neither wants — copy what you
need into `src/mcgrots/van.js` and say in a comment what came from where.

`site.js` holds `PITCH = { x: 10, z: -5 }`, `toWorld(lx, lz)` for pitch-local
to world, and `PITCH_YAW`. The van faces local **+Z**. Everything you place is
authored in pitch-local space and converted, exactly as `anchors.js` does — do
not author world coordinates by hand.

`anchors.js` places the five standing spots in front of the van, two of them
sitting spots at `LEDGE_H = 0.45`. **Do not move an anchor and do not change
that constant.** The van must be built to suit the anchors that exist; the
anchors are re-judged in G3c, not here.

## What to build

`src/mcgrots/van.js`, exporting a build function that takes the scene and
returns whatever handle the caller needs. One line in `main.js` calls it.
Keep that line to one line — G3b is landing a statue in the same file at the
same time, and a one-line addition in two places is a merge git can do.

Three things, in priority order:

1. **The van.** McGrot's, the pitch itself. It should read as a food van from
   every one of the five anchors, including `far` at 11.5 m local.
2. **The price board.** It is the reason a player can tell what the place is.
   Text on it is authored content — the comics are verbatim but a price board
   is not a comic, so this is yours to write in the same register.
3. **The ground.** The flat plane is the weakest thing in every review sheet.
   Give the pitch a surface it stands on — kerb, tarmac, whatever the real
   junction has. `docs/LEITH.md` is the reference.

Randomness, if you use any, comes from **your own seeded generator**. Never add
or reorder a draw in an existing sequence; the project invariant is absolute and
the review sheets depend on it.

## The gate

Add checks to `scripts/smoke-mcgrots.mjs` in a region that suits (a new `van`
region is justified here — this is a new subsystem, unlike F6's three checks
which belonged with the anchors).

At minimum, prove the van is **actually visible from the shots the game uses**.
That is the claim that matters and it is not the same as "the van exists in the
scene". A check that the geometry was added tests your calculator; a check that
it occupies a sensible fraction of the frame at each of the five anchors tests
the product.

Every new check needs a **named control** that isolates it, and must be
**fault-injected** to prove it can go red. Commit before you inject —
`git checkout <paths>` restores nothing if any path in the list is untracked,
and a surviving injection looks like a second bug next session.

## What Dan looks at

**Numeric gates cannot see a bad picture** and this unit is nothing but
picture. Every fault found in G2 was found by opening an image after the
numbers said green — three separate times.

Re-run `npm run styleshots:mcgrots` and open the sheets yourself. Report what
you **saw**, per anchor, not what you concluded. If the van reads as a box at
`far`, say that. A half-right dressing reported as done is the exact failure
the verification contract exists to catch.

## Scope

`src/mcgrots/` only — the street is paused and `src/` outside it is not yours.

Do not touch `anchors.js`, `actor.js`, or `site.js`'s `LIGHT` block. The seated
pose (F1), the composed shots and the fixed hour are all **G3c**, deliberately
sequenced after this, because each of them needs your dressing to exist before
it can be judged. You will see F1's bad seated pose in your captures at `wall`
and `kerb`. Leave it and say you saw it.

Codex is building Queen Victoria in `statue.js` concurrently. If `main.js`
conflicts, keep both lines.

Land as one unit: code, `docs/MCGROTS-VALIDATION.md` for what the new checks
prove and what they deliberately do not, `docs/MCGROTS-ROADMAP.md` § G3a, and
a commit message with the real numbers and the injection result.
