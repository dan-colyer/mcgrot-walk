# G6a — Pomplé, presentation only

**Read `AGENTS.md` first, then `docs/MCGROTS-ROADMAP.md` § G6 and § 6.** Your
context is fresh; nothing here assumes earlier sessions.

Pomplé is McGrot's dog. He is the relationship at the centre of the pitch, and
he has to be legible without dialogue, because he is a dog.

---

## The design ruling you are building inside

**There is one Pomplé, and he is McGrot's — not the player's.** Dan ruled this
on 2026-08-15: a per-player companion does not survive multiplayer, because
several visitors would each own a copy of the same dog. He is an independent
entity belonging to the pitch, exactly as McGrot is.

That splits his behaviour in two, and **this unit builds only the first half**:

- **Per-client presentation — yours.** Where he looks, who he tracks, whether
  he reacts to the nearest visitor, how he shifts weight and settles. Costs
  nothing on the wire. Every client already has peer positions, so "watching
  you" is computed locally and is correctly *different for each viewer* — each
  person sees the dog notice **them**. That is a feature, not an
  approximation.
- **Shared mutable state — NOT yours, and not to be added.** Fed, befriended,
  moved, remembered. Anything persistent breaks "the world is a pure function
  of wall-clock time", which is what keeps the netcode at ~600 additive lines.

**The open question this unit exists to answer:** whether the relationship
survives with no shared mutable state at all. A dog that reacts richly but
remembers nothing may be plenty — dogs are legible moment to moment, and the
beat may live in *being noticed* rather than in a persistent bond. Build the
remembers-nothing version well enough that Dan can judge it. **Do not hedge by
sneaking in a little bit of memory.** If the answer turns out to be no, that is
a finding, and the shared-state cost gets paid deliberately later.

## Before you build: re-check the body

The roadmap flags this and it is easy to miss. **His silhouette and head-turn
are the load-bearing animation in the whole game**, and G1 chose the actor rig
(A1 skinned) against a *human*. Nobody has checked that choice against a dog.

Do that first, cheaply, and report before going further: does the existing rig
give you a four-legged body with a head that turns independently, or does it
fight you? A one-paragraph finding with a rendered frame beats an assumption
either way. If it fights you, say so and stop rather than forcing it.

## What to build

A dog in the scene beside McGrot's pitch, doing the presentation behaviours:
idle settling, head-turn to track the nearest person, attention that shifts
between the player and McGrot. Keep the state machine small and readable.

`src/mcgrots/pomple.js` is yours. Wire it in with **one line** in whichever
module already owns the pitch's contents — read first, and if that wiring
would collide with another worker's file, report instead of forcing it.

**Determinism:** anything random gets its own seeded generator. Never add or
reorder a draw in an existing sequence — that reseeds unrelated content and
moves every golden with it.

**Actors must not affect the camera.** Dan's ruling, 2026-08-12.

**Direction:** McGrot's actor faces `(+sin yaw, +cos yaw)`, the OPPOSITE of the
street's convention documented in `CLAUDE.md`. Copying the street's formula
mirrors every direction you derive, including where you park a review camera —
that is how an earlier unit rendered a seated figure and read backwards as
forwards. Where you can, derive direction from travel: move the thing and watch
where it goes.

## The gate

**A scene-graph check proves nothing.** `getObjectByName('pomple')` being
non-null proves a function ran; a statue once passed its region 2/2 and the
full suite 38/38 while invisible. Project the dog's AABB into screen space and
require luminance variance inside it against a control patch — the `van` region
has the working example.

**The head-turn is the point, so gate the head-turn.** Something like: put a
viewer at position A, step frames, measure; move to position B, step, measure;
require the tracked direction to differ, with a control where tracking is off
and the two must match. Name the control explicitly.

**Fault-inject it and prove it can go red.** Commit before injecting —
`git checkout <paths>` silently restores nothing if any path in the list is
untracked, and a surviving injection looks like a second bug.

**Render it and open the capture.** Every fault found in G2 was found by
looking at an image after the numbers said green. A dog that passes every
assert and reads as a sack on the ground is a fail.

## Scope and landing

**Yours:** `src/mcgrots/pomple.js`, its gate region in
`scripts/smoke-mcgrots.mjs`, `docs/MCGROTS-VALIDATION.md`.

**Not yours:** `src/` outside `src/mcgrots/` — the street is paused.
`docs/MCGROTS-ROADMAP.md` and `AGENTS.md` belong to the orchestrator; report
what you think should change. The voice work and everything under
`docs/voice-audition/` or `scripts/mcgrots-voice-*`.

**Two other workers are in this tree right now** — one on the voice audition,
one on the Drive pull. No branches, so `git status --short` first and commit by
explicit pathspec naming only your own files.

While they are in flight, gate with `npm run smoke:mcgrots -- --only=<your
region>` and treat red checks outside it as theirs. Do not report a combined
suite number as a verdict on your unit.

Report into `.herdr/<your-name>.md` per `AGENTS.md`. Commit when done; never
push. **Ping on QUESTION or DONE only**, and never ping and then idle — say
what you are assuming and carry on with everything the answer does not block.
