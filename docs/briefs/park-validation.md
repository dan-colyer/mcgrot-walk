# park-validation — independent audit of the asset library

You are the independent check on work you did not do. **Your report is for Dan,
not for the session that built this.** That session made every decision you are
auditing and would choose the framing, which is exactly what independence is
for.

## What you are auditing

A new asset library at **`/Users/dan/code/personal/mcgrot/mcgrot-assets`**, extracted
on 2026-08-19/20 from `/Users/dan/code/personal/mcgrot/mcgrot-walk` when both games in
that repo were parked. It has a remote at `dan-colyer/mcgrot-assets`, private.

Six parallel units built it: gotchas, apidocs, pipelines, manifests, tools,
parking. All six are merged to `main`.

## The question you are answering

**Is this library correct, honest and usable?** Specifically: does it contain
what it claims, do its documents describe what is actually there, and could
someone with no memory of this work pick it up and use it?

## Treat every claim below as unverified

These are the orchestrating session's assertions. **Each one is a hypothesis to
test, not a fact to confirm.** Where you disagree, say so with the command and
its output. A count quoted in a report is a snapshot, and this project has a
documented history of summaries asserting numbers that were false.

- 169M, ~985 tracked files, copied not moved.
- Every directory matched source on file count and total bytes.
- Filenames untouched, so the comic-to-reading pairing survives.
- `node tools/build-manifests.mjs --check` passes, is deterministic across two
  runs, and goes red naming the file when one is hidden.
- No secret values are committed anywhere.
- `mcgrot-walk` still runs unchanged: 153/153 in ~31s.
- Every path referenced from the library's `README.md` resolves.
- 19 of 60 scripts were carried; 41 deliberately left.
- The comics are gitignored except three named demo files.

## What to check

**1. The library contains what it claims.**
Run the manifest check. Run it twice and diff for determinism. Fault-inject it
yourself — hide a file, confirm it goes red and names it, restore, confirm
clean. Do not take the previous injection on trust. **Commit or stash nothing;
this tree should be clean — if it is not, that is a finding.**

**2. Nothing was lost in the copy.**
Compare `mcgrot-walk/assets/` against the library, directory by directory, on
count and bytes. Note that several façade intermediate directories are
gitignored in `mcgrot-walk`, so **compare against its main working tree, not a
git worktree** — a previous unit was fooled by exactly this and wrote a false
claim into `MOVED.md` before it was caught.

**3. The pairing is intact.**
`0021ea9d.jpg` pairs with `0021ea9d.mp3` by filename stem alone. Verify no
filename was altered anywhere. Report orphans on both sides as findings.

**4. The documents are true.**
This is the part most likely to be wrong, and the least likely to be caught by
a script. For each doc — `README.md`, `docs/gotchas-*.md`, `docs/api-usage.md`,
`docs/comics-and-drive.md`, `docs/pipelines/*.md`, `tools/README.md`,
`manifests/README.md` — check that:

- every internal link and file path resolves;
- every count and size stated matches what is on disk **now**;
- every command shown actually parses against the script it names;
- nothing claims a measurement that reads as invented.

Spot-check the gotchas docs hardest. They cite incidents from `mcgrot-walk`'s
documentation. Pick several and confirm the cited incident really is in the
cited source. That unit did not re-run any measurement itself and said so; your
job is to check it did not overstate anything anyway.

**5. No secrets.**
Scan the whole library history, not just the working tree. `.env.local` must
not be committed. Key values must appear nowhere; key *names* are expected and
fine.

**6. Both projects still work.**
`mcgrot-walk` was supposed to be untouched by all this. Run its gate:
`npm run bundle:mcgrots && npm run smoke:mcgrots`. Report the real number.

**7. Usability.**
Read `README.md` as someone who has never seen this. Could you find a specific
comic's audio? Could you work out how to generate more? Is anything important
missing, or present but unfindable? This is a judgement, and it is wanted.

## What NOT to do

- **Do not fix anything.** Report. A defect quietly repaired is a defect Dan
  never learns about, and this audit is the only independent read.
- Do not run any script that calls a paid API.
- Do not push, deploy, publish, or touch Google Drive with anything but a
  read-only command.
- Do not modify either repo.

## Your report

Write **`.herdr/validation.md`** in your worktree, addressed to Dan.

Structure it as:

1. **Verdict**, in one or two sentences. Is the library sound?
2. **Anything Dan must decide or act on**, near the top.
3. **Findings**, most serious first. For each: what you ran, what you saw, what
   it means. Separate a defect from a preference and say which it is.
4. **What you checked and found correct** — briefly. A list of what passed is
   worth having, but it is not the headline.
5. **What you could not check**, named plainly.

British English. Short sentences. No "we". Lead with the answer. Do not soften
a finding because the session that built this will read it — it will, and it
should be uncomfortable if it needs to be.

Ping control with one line and **no findings in it** when the report is
written: `herdr agent prompt control "VALIDATION COMPLETE in .herdr/validation.md"`.
The substance goes in the file.
