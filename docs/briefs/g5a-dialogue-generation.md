# G5a — generated dialogue: the text, not the voices

**This brief is for Codex.** It does not follow this repo's conventions by
default, so every one it needs is stated here rather than assumed. Read
`AGENTS.md` first regardless — it is short and it binds.

G5 as the roadmap describes it is dialogue *and* voices. This unit is the text
only. Nothing is rendered to audio and nothing is wired into the game.

**Why the split.** McGrot's voice is Dan's own curation call (roadmap § 11,
item 0.5) and the placeholder has never been listened to. Rendering audio
before the writing has been read means paying for, and forming an opinion
about, a performance of text nobody has judged. Get the words right first.

---

## The unit

Build a generator that writes new dialogue for **McGrot and the five
principals**, styled on the 205 director briefs in `scripts/tts-prompts/`, and
a gate that proves the output does not plagiarise the comics.

Deliver, for Dan to read:

- the generator, runnable and resumable
- the plagiarism gate, with its fault injection
- **a sample of generated lines per principal** — enough to judge voice, not a
  full corpus. Say how many you produced and why that number.

---

## What you are drawing on

- **`docs/CANON.md`** — the authoritative cast reference. Each principal has
  temperament, register, props, and an **established / suggested** split.
  **That split binds:** established facts are canon and are not open to
  reinterpretation by a generator; suggested details are design freedom.
  The principals are McGrot, Pomplé, Keth with One Eye, Mike English, the
  Taxman and the Government Inspector.
- **`scripts/tts-prompts/*.txt`** — 205 director briefs, one per rendered
  reading. These are the house style for how a voice is specified: audio
  profile, scene, director's notes, then the performance. Read a dozen before
  writing anything.
- **The comic corpus**, per roadmap § 3.

---

## The trap this unit exists to avoid

**Comic lines are sacred as quotations** (`CLAUDE.md` § Verbatim rule). The
garbled AI text is never corrected, anywhere.

A generator handed those lines as style context will lift fragments straight
into new dialogue. That is the specific failure: it moves protected text into
an unprotected slot, where a later session sees a typo and "fixes" it. **New
dialogue is new writing.** Quoting a comic deliberately is fine and is still
verbatim; absorbing its phrasing into original lines is not.

**The gate, from the roadmap and not negotiable:**

> Reject any generated line sharing an n-gram of more than six words with the
> comic corpus.

Mechanical and falsifiable. **Prove it can go red by feeding it a known comic
line** — an unfalsified gate is decoration, and this project has a written
history of them. State what the check does *not* catch, too: a six-word
window will not see a close paraphrase, and saying so is part of the landing.

---

## Two content rules that apply to every generated line

**`docs/CANON.md`'s Central Bar test** and **`docs/LEITH.md`'s sensitivity
rules**. Read the latter's "Sensitivity — where the line is" section in full.
The parts most likely to catch a generator:

- **Sectarianism and Orange walks: leave out entirely.** Not handled
  carefully — absent. No comedic upside, high harm.
- **Addiction:** the mythology is available, the pathology is not. If a
  character has troubles, they get the best lines and the trouble is never the
  joke.
- **Poverty:** the Banana Flats are a landmark, not a punchline. Squalor gags
  and scheme stereotypes are punching down.
- Students and gentrifiers are the safe target, but they get won over rather
  than humiliated.

These are not tone preferences. A line that breaks one does not ship.

---

## Conventions you must follow

Stated because you do not inherit them:

- **Never report a measurement you did not run.** State the command and its
  real output. This is the failure the whole workflow exists to catch.
- **Determinism:** anything needing randomness owns its own seeded generator.
  Never add or reorder a draw in an existing sequence.
- **Commit before fault-injecting.** `git checkout <paths>` silently restores
  nothing if any path in the list is untracked, and a surviving injection
  looks like a second bug next run.
- **The API key lives in `.env.local`, which is gitignored and must never be
  committed.** This unit needs no key — it generates no audio.

---

## Scope, and a working-tree constraint that overrides the usual landing rule

**Sonnet is working in this same tree right now**, on `scripts/smoke-mcgrots.mjs`,
`src/mcgrots/`, `docs/MCGROTS-VALIDATION.md` and `docs/MCGROTS-ROADMAP.md`.
There are no per-worker branches, so there is no merge — only interleaving.

**Yours:** new files under `scripts/`, new generated output under a path you
name, and **`docs/MCGROTS-DIALOGUE.md`, a new document you own.**

**Not yours, and must not appear in your commits:** `scripts/smoke-mcgrots.mjs`,
anything under `src/`, `docs/MCGROTS-VALIDATION.md`, `docs/MCGROTS-ROADMAP.md`,
`AGENTS.md`, `CLAUDE.md`, `scripts/serve.py`, `scripts/daily-tts.sh`,
`scripts/catalog-batches/*.json`, `scripts/tts-prompts/*.txt` (read them,
never write them).

**This overrides the usual "one landing is code plus the roadmap and
validation updates" rule, deliberately.** Put everything you would have
written there into `docs/MCGROTS-DIALOGUE.md` instead — what you built, the
gate's numbers, what it does not prove, and anything you rejected with its
numbers. The roadmap and validation entries get folded in afterwards, once the
tree is free. Say in your report that this is outstanding so it is not lost.

**Run `git status --short` before every commit and name only your own files.**
A bare `git commit` or any `git commit -a` takes whatever Sonnet has staged.

## Not yours

TTS rendering and voice selection (McGrot's voice is Dan's call), wiring
dialogue into the game, Pomplé's behaviour (G6), the real cast (G8), and
anything in the G4c gate work Sonnet is finishing.

## Reporting

Keep `.herdr/codex.md`, one entry per step, newest last — the format is in
`AGENTS.md` § "Reporting back". Ping control **only** on QUESTION or DONE:

```bash
herdr agent prompt control "DONE in .herdr/codex.md"
```

Never ping and then stop. State what you are assuming and carry on with
everything the answer does not block.

**Report what you actually produced.** If the generated lines are weak, say
so with examples — a measured negative result is a real finding here and is
worth more than a sample chosen to look good. Dan reads these himself.
