#!/bin/bash
# Daily TTS harvest — renders the next few NPC comic readings and commits them.
#
# Driven by ~/Library/LaunchAgents/com.mcgrot.daily-tts.plist. Safe to run by
# hand at any time; it is idempotent and resumable (generate-tts.mjs skips
# anything that already has an mp3, and logs progress to tts-progress.json
# after every clip).
#
# Why it commits: assets/audio/ and assets/catalog.json are TRACKED, so a job
# that only generated files would leave a permanently dirty tree — and "git
# status clean" is an acceptance gate on every milestone review. It commits
# ONLY its own pathspecs, so work in progress elsewhere in the tree is never
# swept into its commit. It deliberately does NOT push: publishing stays a
# human decision.
#
# DAILY_TTS_LIMIT bounds each run. The Gemini TTS free allowance is per-day, so
# this is the one number to change if the allowance changes. generate-tts.mjs
# prints its own running cost estimate into the log either way — read it.
set -uo pipefail

REPO="/Users/dan/code/personal/mcgrot/mcgrot-walk"
PATH="/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin"
export PATH

DAILY_TTS_LIMIT="${DAILY_TTS_LIMIT:-20}"
LOG_DIR="$REPO/scripts/.tts-logs"
LOG="$LOG_DIR/$(date +%Y-%m-%d).log"
LOCK="$LOG_DIR/.lock"

mkdir -p "$LOG_DIR"
exec >>"$LOG" 2>&1
echo "=== $(date '+%Y-%m-%d %H:%M:%S') daily-tts start (limit $DAILY_TTS_LIMIT) ==="

# Never let two runs overlap — a half-written mp3 plus a progress-file race is
# not worth the convenience of an unguarded cron.
if ! mkdir "$LOCK" 2>/dev/null; then
  echo "another run holds the lock ($LOCK) — exiting"
  exit 0
fi
trap 'rmdir "$LOCK" 2>/dev/null' EXIT

cd "$REPO" || { echo "repo not found"; exit 1; }

# Read the index BEFORE we touch anything — see the commit guard at the end.
PRESTAGED="$(git diff --cached --name-only 2>/dev/null)"

if [ ! -f .env.local ]; then
  echo "no .env.local — GEMINI_API_KEY unavailable, nothing to do"
  exit 1
fi
set -a
# shellcheck disable=SC1091
source .env.local
set +a

# Fold any newly transcribed batches into the catalog first — otherwise their
# promptFile entries are invisible to the generator. Idempotent by design.
#
# BUT THIS JOB DOES NOT LAND NEW VENDORS. npcs.js builds one vendor per comic
# with an `npc` block, so a merge that adds entries adds people to the street:
# nameplates, subtitles, meshes, draw calls. On 2026-08-10 an unattended merge
# of 11 took the census 124 -> 135, moved 29 goldens by up to 5.6%, broke five
# draw-call baselines and nine gates that name 124 — and committed all of it to
# main unreviewed. The roadmap had already recorded this exact event once
# ("103 -> 124 ... nobody noticed because smoke had not been run since"); the
# warning told humans to run smoke and left the job free to keep causing it.
#
# So: render is a trickle, landing is a milestone. If the merge changes the
# census, it is undone here and the batch waits for a human to land it with a
# suite run and a deliberate recapture.
census() { node -e "console.log(require('./assets/catalog.json').comics.filter(c=>c.npc).length)" 2>/dev/null || echo "?"; }
before_census="$(census)"
node scripts/merge-batches.mjs || echo "merge-batches failed — continuing with the catalog as-is"
after_census="$(census)"

if [ "$before_census" != "$after_census" ]; then
  echo "MERGE ADDS VENDORS: census $before_census -> $after_census. That moves goldens."
  echo "Undoing the merge — landing new comics is a human step:"
  echo "  node scripts/merge-batches.mjs && npm run smoke   # then recapture deliberately"
  git checkout -- assets/catalog.json
  echo "catalog restored to census $(census); rendering only what was already merged."
fi

node scripts/generate-tts.mjs --limit "$DAILY_TTS_LIMIT"
status=$?
echo "generate-tts exited $status"

# Commit only what this job produces. Explicit pathspecs, never `git add -A`.
#
# THE PATHSPECS ARE NOT A GUARANTEE, and it took a real incident to say so.
# scripts/tts-prompts and scripts/catalog-batches are where a transcription
# wave is AUTHORED, not just where this job's inputs happen to live — so any
# uncommitted work there at 09:30 gets swept into a commit whose subject line
# says it rendered audio. On 2026-08-10 that took a reviewer's correction to
# batch-8.json and a new rule in BRIEF.md into c9b7b1b. They are still in the
# pathspecs, because an mp3 committed without the prompt it was rendered from
# is worse; two things guard them instead.
#
# First: if a human has already STAGED anything, this job does not commit at
# all. A dirty index means someone is mid-commit, and the files are theirs.
if [ -n "$PRESTAGED" ]; then
  echo "index already has staged changes — someone is mid-commit, so this run"
  echo "generates but does not commit. Staged when we started:"
  echo "$PRESTAGED" | sed 's/^/  /'
  echo "=== $(date '+%Y-%m-%d %H:%M:%S') daily-tts done (no commit) ==="
  exit 0
fi

git add -- assets/audio assets/catalog.json scripts/tts-progress.json \
           scripts/tts-prompts scripts/catalog-batches 2>/dev/null

if git diff --cached --quiet; then
  echo "nothing new to commit"
else
  n=$(git diff --cached --name-only -- assets/audio | grep -c '\.mp3$')
  # Second: the message NAMES everything that is not audio, so a swept file is
  # visible in the log instead of hiding behind "Render N readings".
  other=$(git diff --cached --name-only -- scripts/catalog-batches | tr '\n' ' ')
  git commit -q -m "Render $n NPC comic reading(s) via Gemini TTS

Automated daily harvest (scripts/daily-tts.sh). Not pushed.
Batch files in this commit: ${other:-none}"
  echo "committed $n new mp3(s): $(git rev-parse --short HEAD)"
  echo "batch files swept in: ${other:-none}"
fi

echo "=== $(date '+%Y-%m-%d %H:%M:%S') daily-tts done ==="
