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

REPO="/Users/dan/code/mcgrot-walk"
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
node scripts/merge-batches.mjs || echo "merge-batches failed — continuing with the catalog as-is"

node scripts/generate-tts.mjs --limit "$DAILY_TTS_LIMIT"
status=$?
echo "generate-tts exited $status"

# Commit only what this job produces. Explicit pathspecs, never `git add -A`.
git add -- assets/audio assets/catalog.json scripts/tts-progress.json \
           scripts/tts-prompts scripts/catalog-batches 2>/dev/null

if git diff --cached --quiet; then
  echo "nothing new to commit"
else
  n=$(git diff --cached --name-only -- assets/audio | grep -c '\.mp3$')
  git commit -q -m "Render $n NPC comic reading(s) via Gemini TTS

Automated daily harvest (scripts/daily-tts.sh). Not pushed."
  echo "committed $n new mp3(s): $(git rev-parse --short HEAD)"
fi

echo "=== $(date '+%Y-%m-%d %H:%M:%S') daily-tts done ==="
