# G7o — the valance: hide the leg zone under the van

**Read `AGENTS.md` first, then `docs/MCGROTS-ROADMAP.md` § 10's F24 entry in
full, then `src/mcgrots/van.js` end to end including its header.** Your context
is fresh.

---

## Why this unit exists

McGrot's legs pass through the van. **His proportions are not wrong** — that was
the first hypothesis and it is false. He measures 1.77 m, a normal height.
Measured off the live scene:

| part | y range (m) |
|---|---|
| McGrot | 0.00 → 1.77 — feet on the road |
| `van-body` (the floor) | **0.62** → 2.67 |
| `van-counter` | 1.09 → 1.15 |
| `van-wheels` | 0.02 → 0.82 |

He stands at road level *inside* the van's plan footprint, so his legs occupy
the same space as the van's underside. The counter at 1.12 m crosses a
road-level figure at mid-chest, which is why the shot composes well; stand him
on the van floor instead and the same counter sits at his knee. **The counter
was authored for a figure on the road, the van for one standing inside it.**

**Dan's call, 2026-08-18: fix it with a valance.** Two other options existed
(raise him into the van, or drop the van to a stall) and both move the framing
at every anchor. This one does not.

## What this is, honestly

**A concealment, not a correction.** You are hiding an overlap, not resolving
it — the geometry underneath stays wrong and the roadmap says so. Do not write
the unit up as having fixed the ground planes. If a later unit gives the van a
visible interior, this decision gets revisited rather than built on.

That framing matters for scope: **do not move McGrot, do not move the counter,
do not move the van.** Any of those would move every authored shot, which is
the exact cost this option was chosen to avoid.

## What to build

A valance — a skirt on the van's lower body spanning the gap from the floor at
0.62 m down toward the road, between the wheels. `van-wheels` already occupy
0.02 → 0.82 m and cover part of the span, so the valance is filling what they
do not.

It belongs in `src/mcgrots/van.js` alongside the existing merged parts
(`addMerged(group, shell, CREAM, 'van-body')` and its neighbours at lines
~203–224) and should follow that pattern rather than inventing a new one. Give
it its own name so a gate can find it and toggle it.

**It must be togglable** — the gate's control is the valance absent, and a
feature with no off switch cannot be isolated. Use `src/mcgrots/flags.js`'s
helper if it fits the pattern; do not copy inline flag boilerplate.

**Determinism:** no new PRNG draw, and no reordering of an existing sequence. If
you want variation in the skirt, the module owns its own seeded generator — but
a plain skirt is very likely the right answer and variation is not asked for.

## The gate

**A rendered-frame check, never a scene-graph one.** `getObjectByName('valance')`
being non-null proves a function ran. This project has already had
`statue.visible = false` pass its region 2/2 and the whole suite 38/38 with
nothing drawn.

Three claims, each with its own control:

1. **The leg zone is covered.** Project the region below the van floor into
   screen space at the anchors the player occupies and show McGrot's skin/leg
   pixels are no longer visible there. *Control:* the valance toggled off, same
   pinned clock, same anchor — the legs must be visible in that arm, or your
   check is not measuring the valance.
2. **The valance does not occlude McGrot himself.** This is the way this fix
   fails. **F22 already gates his visible-pixel fraction at `counter` against a
   20% floor** — re-run it and report the number with the valance on and off.
   A valance that hides his legs by also hiding his chest has traded one fault
   for a worse one.
3. **Nothing else moved.** The existing `van` checks measure the van's frame
   fraction at every anchor, and the valance necessarily changes it. **Report
   the before and after rather than adjusting a threshold to fit** — if a bound
   genuinely must widen, say by how much and why, and do not touch any other
   region's numbers.

Pin the clock in every check. An unpinned rota clock has cost four separate
units here.

**Fault-inject each check, watch it go red, restore, re-verify green. Commit
before injecting** — `git checkout <paths>` restores nothing if any path in the
list is untracked, and a surviving injection looks like a second bug.

**Then render it at every anchor and open the captures yourself.** Numeric
coverage proves pixels changed; only your eye proves the van still reads as a
van and not as a box with a skirt. Say what you saw per anchor. "The valance
reads as a mudflap rather than part of the body" is exactly the kind of finding
that is worth more than the number.

## Scope

**Yours:** `src/mcgrots/van.js`, `scripts/smoke-mcgrots.mjs`, and
`docs/g7-van-valance.md` for your write-up.

**On the smoke file: add your checks as ONE NEW region block at the END of the
file plus exactly one entry in `REGIONS`.** Do **not** extend the existing `van`
region — it also carries the Pomplé and McGrot checks, and another worker is
live in `pomple.js` right now. Editing inside that block is how two units
collide. Re-run its existing checks to prove nothing moved; report the numbers
in your write-up rather than editing them.

**Not yours, and two other workers hold them right now:** `src/mcgrots/pomple.js`
(the `signs` worker), `src/mcgrots/visit.js` and `src/mcgrots/main.js` (the
`arrive` worker). Also not yours: `mcgrot.js`, `audio.js`, `ambience.js`,
`taxman.js`. Read any of them, change none.
`docs/MCGROTS-VALIDATION.md`, `docs/MCGROTS-ROADMAP.md`, `CANON.md`, `AGENTS.md`,
`CLAUDE.md` — report what should change; the orchestrator folds it in.

Note the working tree carries unrelated modifications and untracked files from
the daily TTS job. They are not yours; commit by explicit pathspec.

## Landing

Commit by explicit pathspec with the actual numbers: leg-zone coverage with its
control, F22's fraction on and off, the van's frame fraction before and after,
and what went red under injection. Name the captures you opened and say what you
saw. **Never push.**

Report into `.herdr/<your-name>.md` per `AGENTS.md`, one entry per step. Ping on
QUESTION or DONE only, and never ping and then idle.
