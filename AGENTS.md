# McGrot Walk — shared agent instructions

## Start here

- Read `CLAUDE.md` for the project architecture and detailed gotchas.
- Before changing a roadmap milestone or its validation, read the relevant parts
  of `docs/ROADMAP.md` and `docs/VALIDATION.md`.
- Treat the working tree as shared. Inspect `git status` before editing; do not
  revert, stash, or alter unassigned changes.

## Verification is evidence

- Never report a measurement, test result, or visual result that you did not
  run and inspect. State the command and its actual result.
- Run the diff through the appropriate smoke coverage; do not infer its blast
  radius. Use `npm run smoke -- --since` for the inner loop and
  `npm run smoke:par` for a complete deploy-grade run when the task calls for it.
- A new acceptance gate must have a named control that isolates the claimed
  behaviour, must be fault-injected to prove it can fail, and must test the
  shipped product rather than only a helper calculation.
- Visual sequences and other player-visible output also need capture review;
  numeric assertions alone do not prove that the picture is correct.
- Do not use `--update-goldens`. Renderer jitter is tolerance only: deliberately
  visible changes require targeted golden recapture and updated noise evidence.

## Landing and release

- A completed feature or fix is one landing: code, relevant `docs/VALIDATION.md`
  and `docs/ROADMAP.md` updates, passing verification, and a commit that records
  the actual measurements and fault injection.
- Commit completed in-scope work without waiting for separate permission. Do not
  push, deploy, publish, or change the public site unless Dan explicitly asks.
- Do not hand-edit content-hash cache busters, and never claim an audio asset
  exists unless it is on disk.

## Delegated work

- Delegate only independent, bounded work. Prefer read-heavy investigation;
  parallel edits need explicit ownership to avoid conflicts.
- A handoff to the directing agent must name: files changed, commands run and
  results, measurements/captures inspected, and remaining risks or assumptions.
- Do not broaden a delegated task or make unrelated cleanup changes.

## Project invariants

- Keep procedural layout deterministic: do not add or reorder PRNG draws in an
  existing sequence; a feature needing randomness owns its own seeded PRNG.
- Comic text is verbatim. Never correct or normalise its deliberate garbling.
- Asset URLs go through `assetUrl(assets, path)`; the development server is
  rooted at `src/`.
