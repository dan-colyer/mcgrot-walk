# G5g — pull Andrew's comics from Drive into the project

**Read `AGENTS.md` first.** Your context is fresh; nothing here assumes earlier
sessions.

Andrew is McGrot's creator. He has a Google Drive folder he drops comic images
into. Nothing in this project reads it. Your job is the fetch, and only the
fetch.

---

## The hard rule, read it twice

**Sync is Drive → project. NEVER project → Drive.**

Dan seeded that folder from `assets/comics/`, then spent an evening deleting
the things that were not comics — 414 uploads down to 396. A plain `rclone
copy` in the wrong direction silently restores every file he deleted, and he
would have no way of knowing which ones came back.

- Use `rclone copy gdrive:<remote path> <local>` — never `sync`, in either
  direction, because `sync` deletes to make sides match.
- Never name a local path as the source and a `gdrive:` path as the
  destination. Not once, not in a dry run, not in a comment.
- If you find yourself wanting to push anything to Drive, stop and report
  instead.

The remote is already configured as `gdrive`. Confirm with `rclone listremotes`
before anything else. Andrew's upload folder is **`2 - Add new comics here`**
under `McGrot/`; the seeded library is `1 - Already in the game` and you have no
reason to touch it.

## What to build

`scripts/mcgrots-drive-pull.mjs`, or a shell script if that genuinely fits
better — say which you chose and why.

It should:

- Pull anything in Andrew's folder that is not already on disk locally, into a
  **staging directory** — `assets/comics-incoming/`, gitignored. Not into
  `assets/comics/`.
- Be **resumable and idempotent**: a second run with nothing new does nothing,
  costs nothing, and says so.
- **Report, not decide.** Print what arrived, what was skipped, total size, and
  anything that is not an image.
- Handle the folder being empty, which is its state today. That is a normal
  result, not an error.

## What it must NOT do

**Do not merge anything into `assets/catalog.json`.** Landing new comics is a
milestone with a human in it, not a file copy: each new comic with an `npc`
block adds a vendor to the street, moves goldens, and breaks gates that name a
census count. `CLAUDE.md` documents this at length and
`scripts/catalog-batches/BRIEF.md` has the procedure. Your script stops at
staging and prints what a human would do next.

Do not run transcription, TTS, or anything that spends money. Do not touch
`scripts/daily-tts.sh`, `scripts/catalog-batches/*`, `scripts/tts-prompts/*`,
`scripts/generate-tts.mjs` — read them if useful, never write them.

## Verification

There is nothing in Andrew's folder yet, so the interesting cases are the ones
you have to construct:

- **Prove the empty case is clean.** Run it against the real, empty folder.
  Zero files, exit 0, no directory left behind that shouldn't be.
- **Prove the fetch works** against a folder you control — `rclone` can list
  and copy from the seeded `1 - Already in the game` folder for a read-only
  test. Copy two or three files into a scratch directory outside the repo,
  confirm they arrive intact, delete them. **Do not** point that test at
  `assets/comics/` or any repo path.
- **Prove the skip works**: run twice, second run copies nothing.
- **Prove it cannot write upward.** Read your own final code and state plainly
  in your report that no code path has a `gdrive:` destination. If you cannot
  say that with certainty, say that instead.

No gate in `smoke:mcgrots` for this — it needs network and a credential, and
the suite is offline and free. Do not add a region.

## Scope and landing

**Yours:** your new script, `.gitignore`, `docs/MCGROTS-VALIDATION.md`,
`package.json` if it wants a script entry.

**Not yours:** anything under `src/`, `assets/catalog.json`, the TTS pipeline,
`docs/MCGROTS-ROADMAP.md` (report what you think should change; do not edit it).

**Two other workers are in this tree right now** — one on the voice audition,
one on Pomplé. There are no branches, so `git status --short` first and commit
by explicit pathspec naming only your own files. A bare `git commit` buries
someone else's half-finished work in yours.

Report into `.herdr/<your-name>.md` per `AGENTS.md`. Commit when done; never
push.
