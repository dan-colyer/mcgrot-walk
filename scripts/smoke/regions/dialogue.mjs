// 'dialogue' is pure node against two JSON files — no page, no server. Kept
// out of BROWSER_REGIONS in the runner so `--only=dialogue` never pays for a
// boot.
//
// G5a's checker (scripts/check-mcgrots-dialogue.mjs) is Codex's file and
// runs main() unconditionally on import (no `if (import.meta.url === ...)`
// guard), so importing its exported functions would re-run its own CLI
// arg parser against THIS script's argv. Shelling out instead, via
// spawnSync directly rather than a shell pipe — Codex's own fault
// injection found that a shell pipeline reports the LAST command's exit
// status, not the checker's, and a checker that prints FAIL but exits 0
// passes silently in any automated caller. spawnSync's `.status` is the
// checker's own exit code, nothing in between to lose it.

import { spawnSync } from 'child_process';
import { readFileSync } from 'fs';
import { join } from 'path';

// G5b: mechanical form gates for generated/mcgrots-dialogue.json. These gate
// FORM ONLY (word-list membership, length, sentence shape) — never quality,
// which is Dan's read. Quoted from docs/LEITH.md's "Dialect kit (documented)"
// table (14 rows), with the two "X / Y" rows split into their own tokens —
// 17 flat tokens, used here as a presence check (does a line carry ANY kit
// word), not to reproduce the write-up's "1 of 15" row-level count exactly.
// Duplicated rather than imported: LEITH.md is prose, not a module.
const DIALECT_KIT = [
  'ken', 'barry', 'radge', 'gadgie', 'shan', 'mingin', 'chum', 'swally', 'steamboats', 'messages',
  'the fit o’ the walk', 'doon the walk', 'up the toon', 'awright', 'pal', 'doll', 'persevere',
];
const normApostrophe = (s) => s.toLowerCase().replace(/['’]/g, '’');
const hasDialect = (text) => DIALECT_KIT.some((tok) => normApostrophe(text).includes(tok));
const wordCount = (text) => (text.match(/[A-Za-z’']+/g) ?? []).length;

// The systemic tic the brief measured: one balanced sentence, a concrete
// noun then an abstract lift. Approximated mechanically as a single
// declarative sentence (one sentence-terminal mark, a period, at the very
// end) carrying exactly one comma/semicolon pivot and at least 9 words —
// that shape describes 48/48 of G5a's original lines and is what "break the
// default shape" means here.
function isBalancedTurn(text) {
  const enders = [...text.matchAll(/[.!?]/g)];
  if (enders.length !== 1) return false;
  if (!text.trim().endsWith('.')) return false;
  const pivots = (text.match(/[,;]/g) ?? []).length;
  if (pivots !== 1) return false;
  return wordCount(text) >= 9;
}

function allDialogueLines(dialogueJson) {
  return dialogueJson.entries.flatMap((entry) => entry.lines.map((line) => ({ key: entry.key, ...line })));
}

export async function run(ctx) {
  const { root, check, dialogueFile } = ctx;
  const result = spawnSync('node', [join(root, 'scripts/check-mcgrots-dialogue.mjs'), '--file', dialogueFile],
    { encoding: 'utf8' });
  check('no generated dialogue line shares a seven-word window with the comic corpus (or trips the sensitivity backstop)',
    result.status === 0,
    `exit ${result.status}\n${(result.stdout + result.stderr).trim().split('\n').slice(-6).join('\n')}`);

  // G5b: form constraints. Baseline (G5a's 48 lines, measured in
  // docs/briefs/g5b-register.md): dialect kit used in 1/15 words ("pal",
  // twice), "the fit o' the Walk" used 0 times, 0/48 lines under 7 words,
  // mean length 12.1. Thresholds below are measured against the rewritten
  // 72-line corpus with headroom, not picked in advance.
  const dialogueJson = JSON.parse(readFileSync(dialogueFile, 'utf8'));
  const dLines = allDialogueLines(dialogueJson);
  const withDialect = dLines.filter((l) => hasDialect(l.text));
  const fitOTheWalk = dLines.filter((l) => normApostrophe(l.text).includes('the fit o’ the walk'));
  const byKey = (key) => dLines.filter((l) => l.key === key);
  const dialectFraction = (key) => { const ls = byKey(key); return ls.filter((l) => hasDialect(l.text)).length / ls.length; };
  const mcgrotFraction = dialectFraction('MCGROT');
  const mikeFraction = dialectFraction('MIKE_ENGLISH');
  check('dialect kit is actually used, including “the fit o’ the Walk”, and Mike English (outsider) uses less of it than McGrot',
    withDialect.length / dLines.length >= 0.2 && fitOTheWalk.length >= 1 && mikeFraction < mcgrotFraction,
    `${withDialect.length}/${dLines.length} lines carry a kit word (>=20% required); “the fit o’ the Walk” used ${fitOTheWalk.length}x (baseline: 1/15 words, 0 uses); McGrot ${(mcgrotFraction * 100).toFixed(0)}% vs Mike English ${(mikeFraction * 100).toFixed(0)}%`);

  const underSeven = dLines.filter((l) => wordCount(l.text) < 7);
  check('a real fraction of lines are fragments or interruptions, under seven words',
    underSeven.length / dLines.length >= 0.15,
    `${underSeven.length}/${dLines.length} lines under 7 words (baseline: 0/48)`);

  const balancedTurns = dLines.filter((l) => isBalancedTurn(l.text));
  check('the noun-then-abstract-lift sentence is not the house style',
    balancedTurns.length / dLines.length <= 0.4,
    `${balancedTurns.length}/${dLines.length} lines fit the single-pivot balanced-sentence shape (must be <=40%; some surviving is fine, all of them is the bug)`);

  // G5c: two-actor exchanges. A turn lives in its speaker's own
  // entry.lines (the reachability constraint above), carrying `exchange`
  // (id) and `turn` (global 1-based ordinal within that exchange) as
  // additive fields. Reconstruct each exchange from dLines — the same
  // array the three form gates above already read — and check what is
  // mechanically true of a conversation: it has at least four turns, the
  // ordinals reassemble with no gaps or repeats, and no two consecutive
  // turns share a speaker. This does not and cannot judge whether the
  // exchange reads well — that is Dan's read via MCGROTS-DIALOGUE.md.
  const exchanges = new Map();
  for (const line of dLines) {
    if (!line.exchange) continue;
    if (!exchanges.has(line.exchange)) exchanges.set(line.exchange, []);
    exchanges.get(line.exchange).push(line);
  }
  const exchangeIds = [...exchanges.keys()];
  const exchangeIssues = [];
  for (const id of exchangeIds) {
    const turns = exchanges.get(id).slice().sort((a, b) => a.turn - b.turn);
    const ordinals = turns.map((t) => t.turn);
    const expected = turns.map((_, i) => i + 1);
    if (JSON.stringify(ordinals) !== JSON.stringify(expected)) {
      exchangeIssues.push(`${id}: turn numbers ${ordinals.join(',')} do not reassemble as 1..${turns.length}`);
    }
    if (turns.length < 4) exchangeIssues.push(`${id}: only ${turns.length} turns (need >=4)`);
    for (let i = 1; i < turns.length; i += 1) {
      if (turns[i].key === turns[i - 1].key) exchangeIssues.push(`${id}: turn ${turns[i].turn} repeats speaker ${turns[i].key}`);
    }
    if (!turns.every((t) => typeof t.text === 'string' && t.text.trim().length > 0)) exchangeIssues.push(`${id}: has an empty turn`);
  }
  check('every exchange reassembles into a gapless, alternating-speaker run of at least four real turns',
    exchangeIds.length >= 1 && exchangeIssues.length === 0,
    exchangeIssues.length
      ? exchangeIssues.join('; ')
      : `${exchangeIds.length} exchange(s): ${exchangeIds.map((id) => `${id} (${exchanges.get(id).length} turns)`).join(', ')}`);

  const mcgrotInEveryExchange = exchangeIds.length > 0 && exchangeIds.every((id) => exchanges.get(id).some((t) => t.key === 'MCGROT'));
  check('McGrot appears in every exchange (the brief’s two-actor requirement)',
    mcgrotInEveryExchange,
    exchangeIds.map((id) => `${id}: ${[...new Set(exchanges.get(id).map((t) => t.key))].join(', ')}`).join(' | '));
}
