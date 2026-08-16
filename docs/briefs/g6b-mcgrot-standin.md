# G6b.2 — A McGrot who reads as McGrot

**Read `AGENTS.md` first, then `docs/CANON.md` § McGrot.** Your context is fresh;
nothing here assumes an earlier session.

---

## Why this unit exists

**There is no McGrot figure at the pitch.** Pomplé (G6a) turns to watch a
coordinate where nobody stands — `MCGROT_LOCAL` in `src/mcgrots/pomple.js` is a
placed assumption with nothing to check it against.

G7 is the kill criterion: Dan sits through the visit and decides whether the
project continues. Its own list of what the visit must contain includes
"McGrot's complaints in the gaps". It cannot be judged without him.

## The thing you must not do

**Do not simply place the existing `mcgrot` archetype and call it done.** The
orchestrator rendered it on 2026-08-16
(`node scripts/mcgrots-shot.mjs --body=skinned --archetype=mcgrot --frames=300`)
and it is wrong in almost every measured feature: no beret, a white tee instead
of the green plaid, pale khaki trousers instead of green dungarees, dark hair
showing where the drawings never show hair at all.

That is not surprising — the asset was generated from `CANON.md`'s prose, which
was written before anyone checked it against the drawings and does not mention a
beret anywhere. G6b.1 has now checked it. See `docs/CANON.md` § McGrot's measured
block, and the per-comic records in `docs/comic-features-set-a.md` and `-set-b.md`.

**Dan's ruling, 2026-08-16: he should look like McGrot, not a real equivalent.**
It was made about Pomplé and applies here at least as strongly. The existing mesh
is a photoreal stocky man. The character is a cartoon.

## What to build, and how small it should be

**The beret, on the existing body.** That is the unit.

The extraction's strongest single finding: the red/orange-red beret appears in
**134 of 141** usable appearances, survives every costume reskin in the corpus
(Braveheart, Starfleet, spacesuit, Santa), and **beret-plus-round-head alone
carries recognition** — comic `60ee906a` grafts just that head onto six
unrelated Star Trek bodies and every one still reads as McGrot. Open it.

So the cheapest thing that makes G7 judgeable is the beret, and the most
expensive thing that would not help is a new body. **The body is G8a's job**, and
G8a replaces this mesh entirely — along with carried faults F19 and F20. Do not
start it here.

Concretely:

1. Place the existing `mcgrot` archetype at the pitch, standing at the van's
   serving opening. Unlike Pomplé, McGrot **has** an A1 skinned rig —
   `rig-glb.mjs`'s `BIPEDS` names him and `assets/characters/mcgrot-rig.json`
   exists — so G1's winner applies here and you should use it.
2. Add a beret, parented to the head joint so it moves with him. Simple
   geometry is right; this is a stand-in.
3. Close `MCGROT_LOCAL`: Pomplé's attention target becomes the real figure's
   position rather than a guessed constant. One value, one place.

**Render under the shipped look, not the shot tool's default.** The capture
above looks photoreal partly because of how it was taken. Check him under what
the player actually sees before concluding anything about how he reads.

## The gate

**A scene-graph check proves nothing.** `getObjectByName('mcgrot')` non-null
proves a function ran; a statue once passed its region 2/2 and the full suite
38/38 while invisible.

Two claims worth gating, each needing a **named control**:

- **He is drawn at the pitch.** Project his AABB into screen space, require
  luminance variance inside it against a control patch. The `van` and `pomple`
  regions both have working examples — read `pomple`'s first, and read
  ROADMAP § 10 F20 before copying it, because that check's independence is
  known to be weak at this spot.
- **The beret is on his head and visible.** This is the whole unit, so gate it
  directly rather than trusting that adding geometry worked. A colour or
  luminance test over the head region against the same region with the beret
  removed is the obvious control — name whichever you use.

**Fault-inject both and prove they can go red. Commit before injecting** —
`git checkout <paths>` restores nothing if any path in the list is untracked,
and a surviving injection looks like a second bug.

**Render it and open the capture.** Numeric gates cannot see a bad picture, and
this unit is entirely about how a picture reads. Every fault found in G2, and
both faults found in G6a, came from opening an image after the numbers said
green. A McGrot who passes every assert and does not read as McGrot is a fail —
and unlike most units, that judgement is the deliverable.

## Scope

**Yours:** a new module under `src/mcgrots/` for the figure, its wiring, its
gate region in `scripts/smoke-mcgrots.mjs`, and `docs/MCGROTS-VALIDATION.md`.
The one `MCGROT_LOCAL` constant in `pomple.js`.

**Not yours:** `src/` outside `src/mcgrots/` — the street is paused. `CANON.md`,
`docs/MCGROTS-ROADMAP.md`, `AGENTS.md`, `CLAUDE.md` — report what you think
should change. Pomplé's own geometry, F19 and F20: carried deliberately, not
yours to fix. Any new character asset: that is G8a.

**Determinism:** anything random gets its own seeded generator; never add or
reorder a draw in an existing sequence. **Actors must not affect the camera**
(Dan's ruling, 2026-08-12).

**Direction:** McGrot's actor faces `(+sin yaw, +cos yaw)` — the OPPOSITE of the
street convention in `CLAUDE.md`. Copying the street's formula mirrors every
direction you derive, including where you park a review camera. Derive from
travel where you can: move the thing and watch where it goes.

## Landing

Full suite is **76/76** before you start. Commit when done, by explicit
pathspec, with the actual numbers and what went red under injection. **Never
push.**

Report into `.herdr/<your-name>.md` per `AGENTS.md`. Ping on QUESTION or DONE
only, and never ping and then idle.
