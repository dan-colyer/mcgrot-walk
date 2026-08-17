# Ideation — what else could this be?

**This unit is deliberately unlike every other brief in this directory.** There
is no gate, no measurement, no fault injection and no acceptance criterion. The
output is ideas. Judge yourself on whether Dan reads one and wants it, not on
whether anything went green.

Read `AGENTS.md` for the project's constraints, then ignore its verification
framing — it is written for units that build things and it will make you
cautious in exactly the wrong way here.

---

## What this project is

McGrot's is a first-person browser piece: you arrive at a food stall on Leith
Walk run by McGrot, a grizzled Leith vendor, with his dog Pomplé. People come
and read aloud from a corpus of ~418 McGrot comics whose text was mangled by an
AI transcription and is now, deliberately, never corrected. That garbling is the
point of the whole thing.

It is about to be judged against a kill criterion (`docs/MCGROTS-ROADMAP.md`
§ 9): **one good ten-minute visit, and would Dan sit through it a second time.**
Failing is an allowed outcome and the project was built to make failing cheap.

## Read these before you think

- `docs/MCGROTS-ROADMAP.md` — § 9 (the kill criterion), § 11 (still open),
  and **§ 12 (parked ideas)** especially. § 12 is Dan's own list and its
  convention is worth copying: each entry records **the first obstacle**
  rather than a plan.
- `docs/CANON.md` — who these characters actually are.
- `docs/LEITH.md` — the place, and the sensitivity rules about depicting it.
- `docs/g7-visit-shape.md` — what the ten minutes currently contains, minute
  by minute.
- `docs/MCGROTS-DIALOGUE.md` and `generated/mcgrots-dialogue.json` — the
  generated character dialogue, including 30 lines for a Taxman and a
  Government Inspector who do not exist in the scene.
- Look at some actual comics in `assets/comics/`. Open the images. The tone of
  the source material is the thing most likely to suggest something nobody has
  thought of, and it cannot be got from the documentation.

## What to produce

`docs/g7-ideas.md`. Nobody else touches that file.

**Twelve to twenty ideas.** Range matters more than polish. For each:

- what it is, in two or three sentences
- **the first obstacle** — the § 12 convention, and it is what stops a list of
  ideas being a list of wishes
- roughly what it touches: new module, existing module, content, or nothing
  that exists yet
- whether it serves the kill criterion, or is for after it

Group them however the material suggests. Do not rank them into a priority
order — that is a decision nobody has made, and § 12 says so explicitly.

## Be actually creative

The instruction from Dan is to think outside the box. Some directions worth
pushing on, none of them prescriptive:

- **The garbled text is an asset nobody has fully spent.** It is currently read
  aloud faithfully. What else can be done with language that is confidently
  wrong?
- **The corpus is 418 comics and the visit uses eight.** What does the other
  98% of the material make possible?
- **The visit is currently something you watch.** What would it mean for the
  player to be able to do something, and what is the smallest version of that
  worth having?
- **It is a stall on a street in a real place.** Time of day, weather, the
  passage of days, who else is around, what the street is doing.
- **The project already has a deterministic wall-clock world**, which is an
  unusual thing to have built. Shared time makes some ideas nearly free that
  would otherwise be expensive.

Also allowed and welcome: ideas that would change what the project *is*, ideas
that are cheap and small, ideas that are obviously too expensive but worth
naming, and ideas that argue something existing should be cut. A short entry
saying "this should be removed" is a real contribution.

**Do not simply restate § 12's existing entries.** If you want to extend one,
say which and what is new.

## Constraints that are not negotiable

- **The comics' garbled text is never corrected**, anywhere, including in
  anything you propose generating.
- **Never clone or imitate a specific real person's voice.**
- **`docs/LEITH.md`'s sensitivity rules apply to any idea about the place or
  the people in it.** Read them before proposing anything about the
  neighbourhood.
- Anything touching money, deployment or publishing is Dan's call and should be
  named as such rather than assumed.

## Register

Dan reads this directly, so: British English, short sentences, one idea each.
Plain words. No preamble, no enthusiasm, no "this could be amazing" — state what
the thing is and what stops it. A flat judgement survives; decoration does not.

## Scope

**Yours:** `docs/g7-ideas.md` only. **Build nothing. Render nothing. Change no
code.** Three other workers are live in `src/mcgrots/` and `scripts/` right now.

## Landing

Commit that one file by explicit pathspec. **Never push.**

Report into `.herdr/<your-name>.md`. Ping on DONE.
