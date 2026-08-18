# G7p — put McGrot behind the van's front panel

**Read `AGENTS.md` first, then `docs/MCGROTS-ROADMAP.md` § 10's F24 entry
including the 2026-08-18 REOPENED block, then `src/mcgrots/mcgrot.js` end to
end including its header.** Your context is fresh.

---

## Why this unit exists

The valance (G7o) landed and works. Dan then looked at the capture and asked
why McGrot's lower body is still in the van, and he was right.

**He stands 3.8 cm in FRONT of the van's front panel, not inside it.** Measured
from the `counter` camera at (8.12, 2.00, -12.33):

| | distance |
|---|---|
| McGrot's centre | **6.501 m** |
| the van's solid front panel below the sill | **6.539 m** |
| where a figure standing inside the van would be | 7.734 m |

So everything above the valance line (0.64 m) renders OVER the van body, and
his apron hangs below the serving sill (1.14 m) where a solid cream panel
should be occluding him. F24 originally described him as "inside the van's plan
footprint" — true of the x/z footprint and misleading about depth.

**Dan's call, 2026-08-18: push him back until he is behind the panel.**

## What to change

`MCGROT_LOCAL` in `src/mcgrots/mcgrot.js` — currently the centre of the serving
opening at the opening's own face line (`VAN_DEPTH / 2`). Move it back along the
van's local +z far enough that the front panel occludes him below the sill.

**Do not move the van, the counter, or the valance.** The valance still earns
its place: it covers 0.02–0.64 m and the front panel covers 0.62 m upward, and
together they leave no vertical gap. Removing it would reopen the legs.

**`pomple.js` imports `MCGROT_LOCAL` as its attention target**, deliberately —
`mcgrot.js` is the single source and pomple.js's header says so. Moving the
constant moves Pomplé's gaze, which is correct (he should look where McGrot
actually is), but **verify it rather than assuming**: the `pomple` region has a
head-turn check that reads yaw from two viewer positions.

## The tension this unit has to resolve honestly

**F22 gates McGrot's own visible-pixel fraction at `counter` against a 20%
floor.** It currently reads 25.5% with the valance on. Pushing him back hides
his apron, so **that number will fall, and it may fall below the floor.**

That is the whole difficulty of this unit, and it is a genuine design conflict
rather than a bug:

- **Do not lower the 20% floor to make the change fit.** That floor exists
  because F22 was a real occlusion fault, and moving it to accommodate a new
  change is how a gate stops meaning anything.
- **Report the number.** If pushing him back far enough to clear the panel puts
  him under the floor, that is a finding, and it says the two requirements are
  incompatible at this counter height — which Dan needs to know before G8a.
- **There may be a middle distance** that clears the panel below the sill while
  keeping enough of him in frame. Find it by measurement and say what it is;
  do not assume it exists.

## The gate

**Rendered-frame checks, never scene-graph ones.** `Box3().setFromObject`
ignores `.visible` and cannot carry a claim of this shape — recorded under both
G7l and G7o. Also note `looks.js` builds a `hull:` companion mesh for the ink
outline; a check that names only the base mesh will let a fault leak through
both arms and cancel out, which is exactly how G7o's van-frame check was
silently measuring nothing.

Three claims, each with a control:

1. **Nothing of McGrot is visible below the serving sill, at every anchor.**
   Project the band from the road to the sill and require his pixels absent
   there. *Control:* the same measurement at his old position must show them
   present, or the check is measuring an empty rect.
2. **He is still clearly visible through the opening.** F22's own fraction at
   `counter`, reported before and after, against its existing 20% floor.
   *Control:* the measurement with him at the old position.
3. **Pomplé still looks at him.** The existing head-turn check, re-run, with
   the yaw numbers before and after.

Pin the clock in every check. **Fault-inject each one, watch it go red,
restore, re-verify green. Commit before injecting.**

**Then render every anchor and open the captures.** The question is not whether
the number moved but whether he now reads as a man serving from inside a van.
**Name the risk you are looking for: the van's interior liner is dark, and
pushing him back may put his face into shadow.** If he goes dim or unreadable,
say so plainly — that is a finding worth more than a green check, and it points
at needing a light inside the van rather than at this unit having failed.

## Scope

**Yours:** `src/mcgrots/mcgrot.js`, `scripts/smoke-mcgrots.mjs`, and
`docs/g7-push-mcgrot-back.md` for your write-up.

Add your checks to the **existing `valance` region** — this unit finishes the
claim that region already makes — or as one new block at the END of the file
plus one `REGIONS` entry. Either is fine; no other worker is live in that file
right now. Change nothing else in it.

**Not yours:** `src/mcgrots/van.js`, `pomple.js`, `visit.js`, `main.js`,
`looks.js`, `audio.js` — read any of them, change none. If you conclude
`pomple.js` genuinely must change, stop and report rather than editing it.
`docs/MCGROTS-VALIDATION.md`, `docs/MCGROTS-ROADMAP.md`, `CANON.md`,
`AGENTS.md`, `CLAUDE.md` — report what should change; the orchestrator folds
it in.

Note the working tree carries unrelated modifications and untracked files from
the daily TTS job. They are not yours; commit by explicit pathspec.

## Practical

- `npm run bundle:mcgrots` before any smoke run.
- `npm run smoke:mcgrots -- --only=<region>` must pass on its own as well as
  inside the full suite. Report both numbers. Baseline is **153/153**.
- `node scripts/mcgrots-shot.mjs --anchor=counter --frames=600 --shot=/tmp/x.png`
  renders one anchor; `--valance=off` now works too. **`--frames` matters** —
  the default 90 can be a shot of an unsettled scene.

## Landing

Commit by explicit pathspec with the actual numbers: the distance you moved
him, F22 before and after, the sill-band occlusion with its control, and what
went red under injection. Name the captures you opened and say what you saw.
**Never push.**

Report into `.herdr/<your-name>.md` per `AGENTS.md`, one entry per step. Ping
on QUESTION or DONE only, and never ping and then idle.
