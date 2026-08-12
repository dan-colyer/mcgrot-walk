# McGrot Walk — shared agent instructions

## Start here

- **The active project is McGrot's, under `src/mcgrots/`.** Its brief is
  `docs/MCGROTS-ROADMAP.md` and its gates are `docs/MCGROTS-VALIDATION.md`.
- **The street is paused.** `src/` outside `src/mcgrots/` is not to be edited,
  and `docs/ROADMAP.md` / `docs/VALIDATION.md` describe it, not this work. They
  are still worth reading for inherited rulings; they are not your brief. A
  shared-module change must be additive and re-verified against the street's
  own suite before it lands.
- Read `CLAUDE.md` for architecture and the detailed gotchas.
- Treat the working tree as shared. Inspect `git status` before editing; do not
  revert, stash, or alter changes that are not yours.

## Commands

```bash
npm run bundle:mcgrots   # esbuild + stamps the html — run before any smoke
npm run smoke:mcgrots    # 27 checks, ~1.2s warm. The gate.
npm run smoke:mcgrots -- --only=style
npm run dev:mcgrots      # :5175, then /mcgrots.html?body=skinned&look=aerial

node scripts/mcgrots-shot.mjs --shot=/tmp/look.png            # one-shot render
node scripts/mcgrots-shot.mjs --body=skinned --look=inked \
     --anchor=counter --frames=600 --shot=/tmp/s1.png
node scripts/mcgrots-shot.mjs -e "dbg.state().actor"          # one-off measurement
```

`mcgrots-shot.mjs` boots exactly as the gate does — rAF frozen, every frame
stepped by hand — so two runs of the same arguments give the same picture.
**`--frames` matters:** the actor walks, so a shot at the default 90 can be a
shot of an empty anchor. 600 settles a full walk.

## Verification is evidence

- **Never report a measurement, test result, or visual result you did not run
  and inspect.** State the command and its actual output. This is the failure
  mode the whole workflow exists to catch: three milestones landed on summaries
  asserting numbers that were false.
- Run the gate; do not reason about the blast radius. It is 1.9 seconds.
- A new acceptance gate needs a **named control** that isolates the claimed
  behaviour, must be **fault-injected** to prove it can go red, and must test
  the shipped product rather than a helper calculation. **Commit before
  injecting** — `git checkout <paths>` silently restores nothing if any path in
  the list is untracked, and a surviving injection looks like a second bug.
- **Numeric gates cannot see a bad picture.** Anything the player watches gets
  rendered and the capture opened. Every fault found in G2 was found by opening
  an image after the numbers said green.
- Do not use `--update-goldens`.

## Reporting back

Signal goes through the pane; substance goes on disk. Both agent kinds run on
the terminal's alternate screen, so rows that scroll off cannot be recovered by
`herdr agent read` — a report typed into the terminal is a report that may not
survive.

**Keep `.herdr/<your-name>.md`.** Append one entry per step, newest last:

```
## STATUS 14:32 — reproduced F4
Ran: node scripts/mcgrots-shot.mjs --body=skinned --look=inked --shot=/tmp/a.png
Saw: figure is solid black, van behind it correctly two-band with ink outline.

## QUESTION 14:51 — which control does Dan want?
Removing onBeforeCompile fixes it, but also removes the aerial ramp S2 needs.
Assuming for now that S1 without the ramp is the right control; carrying on.

## DONE 15:20
Files: src/mcgrots/looks.js
Ran: npm run smoke:mcgrots -> 27/27 in 1.2s  (paste the actual tail)
Fault injection: set uThickness back to 0 -> "S1 puts visible ink" went red. Restored.
Captures inspected: /tmp/a.png, /tmp/b.png — describe what you SAW, not what you concluded.
```

**Ping the orchestrator only on QUESTION or DONE**, never on progress:

```bash
herdr agent prompt control "QUESTION in .herdr/sonnet.md"
```

One line, no content — the orchestrator reads the file. There is no rate
limiting on this path, so a ping per step turns into two agents talking to each
other instead of working.

**Never ping and then stop.** Say what you are assuming, and carry on with
everything the answer does not block. A question is not a reason to idle.

## Landing

- One landing is: code, the relevant `docs/MCGROTS-VALIDATION.md` and
  `docs/MCGROTS-ROADMAP.md` updates, passing verification, and a commit message
  carrying the **actual numbers** — the measurement, its control, and what went
  red under fault injection. That message is what a phase gate reads.
- Commit completed in-scope work without asking. **Never push, deploy, or
  publish** — those are Dan's explicit call and nobody else's.
- Rejected experiments get written down with their numbers too. Most of them
  sounded obviously right, and the point is to stop a later session re-deriving
  them.

## Scope

- Do not broaden a delegated task, and do not make unrelated cleanup changes.
- Do not edit `CLAUDE.md`, `AGENTS.md`, or the roadmap's shape — those belong to
  the orchestrator. Report what you think should change instead.

## Project invariants

- **Determinism:** never add or reorder a PRNG draw in an existing sequence. A
  feature needing randomness owns its own seeded generator.
- **The comics are verbatim.** The garbled AI text is never corrected, anywhere,
  including in generated output.
- Asset URLs go through `assetUrl(assets, path)`; the dev server is rooted at
  `src/`.
- Never an EffectComposer — `src/mcgrots/style.js`'s header explains why at
  length, and two street milestones were lost to it.
