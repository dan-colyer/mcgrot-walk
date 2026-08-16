# G7b — three fixes the kill criterion needs first

**Read `AGENTS.md` first, then `docs/MCGROTS-ROADMAP.md` § 9 and § 10 F20–F23.**
Your context is fresh; nothing here assumes an earlier session.

---

## Why this unit exists

G7 is the kill criterion. Dan sits through one ten-minute visit to the Gullet
and decides whether the project continues. Three defects found in review would
each distort that judgement, and all three are cheap now and expensive later —
after G7 the answer is already given, and after G8a two of them are tangled up
in a new model.

They are unrelated to each other. Do them in the order below anyway, because
the first one may close a fourth fault for free and that changes what the
second one is judged against.

**None of these is a modelling task.** If you find yourself editing geometry or
a character asset, stop — that is G8a's, and this unit must not touch it.

## 1 — F21: Pomplé renders un-inked, under every look

`looks.js` traverses the scene once, at install, and never again. `main.js`
awaits the player's own `actor.ready` and (since G6b.2) `mcgrot.ready` before
calling `looks.install(...)`. **Pomplé is built fire-and-forget at module
scope and nothing ever awaits him**, so the traverse runs before his meshes
exist and he keeps his plain materials forever.

Confirmed by the orchestrator on 2026-08-16, reading the live scene rather than
the code — the code reads as though the fix is universal, which is how this
survived G6a:

```bash
node scripts/mcgrots-shot.mjs --look=aerial --frames=600 \
  -e "(()=>{const g=dbg.scene.getObjectByName('pomple');const o=[];g.traverse(m=>{if(m.isMesh)o.push([m.name,m.material?.type]);});return JSON.stringify(o);})()"
# → [["pomple:body","MeshLambertMaterial"],["pomple:head","MeshLambertMaterial"]]
```

The same expression against `mcgrot` returns `MeshToonMaterial`/`cel:unnamed`
for both meshes plus `hull:skinned` and `hull:mcgrot:beret`. **That pair of
commands is your before/after.**

**The fix is the pattern already in `main.js` for McGrot** — give `pomple.js` a
`ready` promise and await it in `boot()` before `looks.install(...)`. Do not
invent a second mechanism; three actors using one convention is the point.

**Then re-render `counter` and check F20.** F20 says Pomplé is an unreadable
dark mass head-on in the van's shadow, and calls it "partly a lighting
question". The ink outline is exactly what separates a figure from a dark
background in this style — it is why McGrot stays legible in that same shadow.
So F20 is probably a symptom of F21. **Report what you see; if it closes, say
so and the roadmap entry gets struck.** If it does not close, say that too —
a fix that does not fix the thing it predicted is a more useful result than a
silent pass.

## 2 — F22: the player's own capsule occludes McGrot at `counter`

At the `counter` anchor the player's body capsule sits between the camera and
McGrot and covers roughly his middle third — part of the apron and one arm. He
survives it only because the beret clears the top of the capsule. Open
`/tmp/m-counter.png` if it is still around, or re-render it:

```bash
node scripts/mcgrots-shot.mjs --look=aerial --anchor=counter --frames=600 --shot=/tmp/m-counter.png
```

This is not McGrot's fault and not G8a's: it would occlude anything standing at
the serving opening. It went unnoticed because until G6b.2 nothing stood there
— Pomplé is off to the side.

**Why it blocks G7:** the visit seats Dan at this anchor for six to eight
readings. Judging whether the project continues, with a third of the character
behind a featureless cream capsule, is not the test the milestone intends.

**Try the fixes in this order, and stop at the first that works:**

1. **Hide or fade the player's own body when the camera is inside or behind
   it.** Most likely right, least likely to disturb an existing capture. The
   street has the first-person precedent.
2. Move the `counter` eye offset.
3. Shift McGrot's stand position along the serving opening.

(1) touches the anchor rig, which every capture in the suite depends on — so
it needs the control named below, not just a nice picture.

## 3 — F23: the beret is more saturated than the corpus draws it

Dan's call on the G6b.2 captures, and the measurement backs him. From § 10 F23:

| | colour | luma |
|---|---|---|
| authored (`mcgrot:beret`) | `#a22c16` | 79 |
| rendered | `#f44920` | 106 |
| corpus red-orange, 60 comics | `#b06010` / `#a05010` | 107 |

**Brightness already matches; chroma does not.** The corpus red-orange is a
muted rust, the render is vivid orange-red, and the authored value sits
correctly in the corpus range. **So look at the toon ramp's lit band before you
touch `#a22c16`.** Darkening the source to compensate for the ramp trades a
correct value for a misleading one and hides the cause — and the ramp is shared,
so whatever you learn about it applies to the whole cast.

If the ramp turns out to be right and the authored value wrong, that is a fine
answer — say so with the numbers. **This one is judged on a capture, not on a
hex value**, so change it, render it, and open the picture.

## The gates

Only F21 and F22 get a new gate. F23 is a colour judgement and gets a recorded
capture instead — do not invent a numeric threshold for "looks right", which is
the mistake the project has made before.

**F21 — Pomplé is cel-shaded and inked under a look.** Assert on his live
material type and the presence of his ink hull, exactly as the diagnostic above
reads them. **Control:** the same read under `?look=none`, which must show the
plain material — that is what isolates the look's contribution from "he has
some material or other".

**F22 — McGrot is not occluded at `counter`.** Project his AABB into screen
space and require that his visible pixel count clears a floor. **Control:** the
same measurement with the fix disabled, which must come in materially lower.
Naming the control this way matters — "he is visible" passes trivially, because
he was always partly visible; the claim is that he is *more* visible than
before, so the before-state has to be measured, not assumed.

Read the `van` and `pomple` regions for working AABB examples, and read § 10
F20 before copying `pomple`'s, because that check's independence is known to be
weak at this spot.

**Fault-inject both and prove they can go red. Commit before injecting** —
`git checkout <paths>` restores nothing if any path in the list is untracked,
and a surviving injection looks like a second bug in the next run.

**Render every arm and open the captures.** Numeric gates cannot see a bad
picture, and two of these three faults were found by opening an image after the
numbers said green.

## Scope

**Yours:** `src/mcgrots/pomple.js`, `src/mcgrots/main.js`, `src/mcgrots/looks.js`
if the ramp turns out to be the F23 cause, the anchor/capsule code F22 needs,
your gate regions in `scripts/smoke-mcgrots.mjs`, and
`docs/MCGROTS-VALIDATION.md`.

**Not yours:** `src/` outside `src/mcgrots/` — the street is paused. Any
character geometry or asset: F19 and the costume faults are G8a's and stay
carried. `CANON.md`, `docs/MCGROTS-ROADMAP.md`, `AGENTS.md`, `CLAUDE.md` —
report what you think should change and the orchestrator will make the edit.

**Determinism:** anything random gets its own seeded generator; never add or
reorder a draw in an existing sequence. **Actors must not affect the camera**
(Dan's ruling, 2026-08-12) — note that F22's option (1) is about the player's
own body, not an actor, so it does not cross that line; options (2) and (3) do
not either. If your fix ends up letting a character move the camera, it is the
wrong fix.

**Direction:** McGrot's actor faces `(+sin yaw, +cos yaw)` — the OPPOSITE of
the street convention in `CLAUDE.md`. Copying the street's formula mirrors every
direction you derive from it, including where you park a review camera. Derive
from travel where you can.

## Landing

Full suite is **80/80** before you start. Commit when done, by explicit
pathspec, with the actual numbers, each gate's named control, and what went red
under injection. **Never push.**

Report into `.herdr/<your-name>.md` per `AGENTS.md`. Ping on QUESTION or DONE
only, and never ping and then idle.
