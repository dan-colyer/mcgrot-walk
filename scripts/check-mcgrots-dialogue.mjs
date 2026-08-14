#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const COMIC_LINES = path.join(ROOT, 'assets', 'comic-lines.json');
const READINGS = path.join(ROOT, 'assets', 'readings.json');
const SENSITIVITY_RULES = [
  { label: 'sectarianism', pattern: /\b(?:orange\s+walk|sectarian|loyalist|unionist|catholic|protestant)\b/i },
  { label: 'addiction pathology', pattern: /\b(?:needle|junkie|heroin|hiv|track\s+marks|shoot\s+up)\b/i },
  { label: 'poverty punching down', pattern: /\b(?:squalor|scheme\s+rat|benefits\s+scrounger|slum\s+stereotype)\b/i },
];

function usage(message) {
  if (message) console.error(`Error: ${message}\n`);
  console.error(`Usage: node scripts/check-mcgrots-dialogue.mjs --file <generated.json> [--line <candidate>]\n\n  --file <path>   Generated dialogue JSON to check\n  --line <text>    Extra candidate line; repeatable, useful for fault injection\n`);
  process.exit(message ? 2 : 0);
}

function parseArgs(argv) {
  const options = { file: null, lines: [] };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--help') usage();
    if (arg === '--file' || arg === '--line') {
      const value = argv[++i];
      if (!value) usage(`missing value for ${arg}`);
      if (arg === '--file') options.file = path.resolve(process.cwd(), value);
      else options.lines.push(value);
      continue;
    }
    usage(`unknown option ${arg}`);
  }
  if (!options.file) usage('--file is required');
  return options;
}

function tokens(text) {
  return text
    .normalize('NFKC')
    .toLocaleLowerCase('en-GB')
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

function windows(words, size = 7) {
  const result = [];
  for (let i = 0; i <= words.length - size; i += 1) result.push(words.slice(i, i + size).join(' '));
  return result;
}

function corpusLines() {
  const comicLines = JSON.parse(fs.readFileSync(COMIC_LINES, 'utf8'));
  const readings = JSON.parse(fs.readFileSync(READINGS, 'utf8'));
  const lines = [];
  for (const [comicId, comic] of Object.entries(comicLines)) {
    for (const line of comic) lines.push({ source: `assets/comic-lines.json:${comicId}`, text: line });
  }
  for (const [readingId, reading] of Object.entries(readings)) {
    for (const phrase of reading.phrases ?? []) {
      if (phrase.kind === 'comic') lines.push({ source: `assets/readings.json:${readingId}`, text: phrase.text });
    }
  }
  return lines;
}

function makeCorpusIndex(lines) {
  const index = new Map();
  for (const line of lines) {
    for (const ngram of windows(tokens(line.text))) {
      if (!index.has(ngram)) index.set(ngram, line);
    }
  }
  return index;
}

function generatedLines(file) {
  const output = JSON.parse(fs.readFileSync(file, 'utf8'));
  if (output.schema !== 'mcgrots-dialogue/v1' || !Array.isArray(output.entries)) throw new Error(`unsupported generated dialogue schema in ${file}`);
  const lines = [];
  for (const entry of output.entries) {
    for (const line of entry.lines ?? []) lines.push({ source: `${entry.key}:${line.id}`, text: line.text });
  }
  return lines;
}

function main() {
  const options = parseArgs(process.argv.slice(2));
  const corpus = corpusLines();
  const index = makeCorpusIndex(corpus);
  const candidates = [...generatedLines(options.file), ...options.lines.map((text, index) => ({ source: `candidate:${index + 1}`, text }))];
  const violations = [];
  const sensitivityViolations = [];
  for (const candidate of candidates) {
    const matches = [...new Set(windows(tokens(candidate.text)).filter((ngram) => index.has(ngram)))];
    if (matches.length) violations.push({ ...candidate, matches });
    const rules = SENSITIVITY_RULES.filter((rule) => rule.pattern.test(candidate.text)).map((rule) => rule.label);
    if (rules.length) sensitivityViolations.push({ ...candidate, rules });
  }
  const comicWords = corpus.reduce((sum, line) => sum + tokens(line.text).length, 0);
  console.log(`Corpus: ${corpus.length} source lines, ${comicWords} normalized words, ${index.size} unique seven-word windows`);
  console.log(`Control: every generated line is checked against normalized seven-word windows (more than six words)`);
  console.log(`Checked: ${candidates.length} candidate lines`);
  if (violations.length) {
    console.error(`FAIL: ${violations.length} line(s) share a seven-word window with the comic corpus`);
    for (const violation of violations) {
      console.error(`- ${violation.source}: ${violation.text}`);
      for (const match of violation.matches) console.error(`  matched: “${match}”`);
    }
  }
  if (sensitivityViolations.length) {
    console.error(`FAIL: ${sensitivityViolations.length} line(s) trip the lexical sensitivity backstop`);
    for (const violation of sensitivityViolations) console.error(`- ${violation.source}: ${violation.rules.join(', ')} — ${violation.text}`);
  }
  if (violations.length || sensitivityViolations.length) {
    process.exitCode = 1;
    return;
  }
  console.log('PASS: 0 plagiarism violations; 0 lexical sensitivity violations');
}

main();

export { corpusLines, makeCorpusIndex, tokens, windows };
