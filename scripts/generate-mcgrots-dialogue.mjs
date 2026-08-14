#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DEFAULT_OUTPUT = path.join(ROOT, 'generated', 'mcgrots-dialogue.json');
const DEFAULT_SEED = 0x5a17c0de;
const PROMPTS_DIR = path.join(ROOT, 'scripts', 'tts-prompts');

// These are original line cards. The generator owns this PRNG and does not
// touch any of the scene or street random sequences.
const PRINCIPALS = [
  {
    key: 'MCGROT',
    name: 'McGrot',
    audioProfile: 'McGrot is a grizzled Leith food vendor with a confrontational, poetic voice that keeps finding sincerity in the grease.',
    scene: 'At the Gullet, with the ladle working and the Walk carrying on around him.',
    directorNotes: 'Style — suspicious and lyrical, turning practical complaints into small declarations. Accent — Leith dockside Scots, roughened by smoke and long service. Pacing — slow prowl with sudden sharp gestures and hard stops. The lines below are original dialogue, not comic quotations; keep their words intact.',
    lines: [
      { text: 'Awright pal. Sauce is extra, opinions are free.', delivery: '[warning, then softening]' },
      { text: 'Naw.', delivery: '[flat, immediate]' },
      { text: 'Radge, the pair of you — queueing for a smell.', delivery: '[unimpressed, stirring]' },
      { text: 'Chum me doon the fit o’ the Walk and I’ll show ye a queue that means something.', delivery: '[proud, already walking]' },
      { text: 'Persevere, it says on the bin. Persevere, I say back.', delivery: '[reading the bin, then muttering]' },
      { text: 'Mingin? Come back when your own kitchen’s had a shift like mine.', delivery: '[flaring, then calmer]' },
      { text: 'Do not call it scraps.', delivery: '[offended, flat]' },
      { text: 'Pomplé says the sauce needs mercy, and I believe the dog.', delivery: '[confidential, glancing down]' },
      { text: 'I’ve buried better plans than this under a layer of onions, ken.', delivery: '[considering the pot]' },
      { text: 'Steamboats or stone sober, my queue’s still the longest at the fit o’ the Walk.', delivery: '[with weary pride]' },
      { text: 'Away and get your messages first — then tell me that’s shan.', delivery: '[pointing with the spatula]' },
      { text: 'Extra sauce, every time. That’s not negotiable, pal.', delivery: '[flat, final]' },
    ],
  },
  {
    key: 'POMPLE',
    name: 'Pomplé',
    audioProfile: 'Pomplé is McGrot’s compact, patient dog: a quiet moral compass whose judgement arrives in a stare, a tilt, or a handwritten sign.',
    scene: 'Beside the Gullet, wearing a small hat only because somebody has put it there, with a sign held square to the street.',
    directorNotes: 'Style — minimal and perfectly timed. Pomplé does not speak aloud; render each line as handwritten sign text, with the surrounding performance carried by silence, eye contact, and tiny head movements. The signs are original dialogue and should remain legible exactly as written.',
    lines: [
      { text: 'SIT DOWN.', delivery: '[nudges the spare stool forward]' },
      { text: 'THE HAT IS NOT A LICENSE.', delivery: '[removes hat, places it on the counter]' },
      { text: 'I HAVE HEARD WORSE FROM BETTER DRESSED ANIMALS.', delivery: '[looks at Mike; small tail movement]' },
      { text: 'NO LADLE UNTIL SHE HAS A SEAT.', delivery: '[holds sign up; does not blink]' },
      { text: 'AWRIGHT. NOW MOVE.', delivery: '[one tired ear twitch]' },
      { text: 'STOP POINTING AT THE FLATS.', delivery: '[plants paws; sign points nowhere]' },
      { text: 'PERSEVERE MEANS SOMETHING DIFFERENT WHEN YOU HAVE PAWS.', delivery: '[long stare]' },
      { text: 'THAT IS SHAN, AND YOU KNOW IT.', delivery: '[looks at the clipboard, then away]' },
      { text: 'A KINDNESS COSTS NOTHING. TRY ONE.', delivery: '[quietly makes space]' },
      { text: 'THE STUDENT WANTED AUTHENTICITY. I GAVE HIM A NAPKIN.', delivery: '[sets sign beside the food bowl]' },
      { text: 'CHUM HIM DOON THE WALK YOURSELF.', delivery: '[waits beside the heavy box]' },
      { text: 'THE QUEUE REMEMBERS WHO WAS KIND.', delivery: '[slowly turns sign towards McGrot]' },
    ],
  },
  {
    key: 'KETH',
    name: 'Keth with One Eye',
    audioProfile: 'Keth with One Eye is a watchful Leith warning figure, his voice low and weathered until a sudden point makes the danger precise.',
    scene: 'At a fixed post near the Foot, folded local maps under one arm and the dock hook planted on the stones.',
    directorNotes: 'Style — cryptic, watchful, and occasionally helpful without becoming explanatory. Accent — weathered dockside Scots. Pacing — stillness first, then one sudden lean or point; let the ominous lines breathe. These are original lines; do not borrow wording from the comics.',
    lines: [
      { text: 'Watch the hinge.', delivery: '[flat, without looking at the door]' },
      { text: 'The haar’s in early. That’s your first warning, no your last.', delivery: '[watching the weather]' },
      { text: 'Doon the Walk, aye, but no past the yellow barrier.', delivery: '[marks the stones with the hook]' },
      { text: 'Naw.', delivery: '[does not elaborate]' },
      { text: 'A warning is a kindness, coat buttoned against the rain.', delivery: '[offers the thought, then withdraws]' },
      { text: 'The gulls have gone quiet. Count your footsteps instead of your blessings.', delivery: '[listens; a long pause]' },
      { text: 'Ken the tramworks? They’ve buried newer things than cables.', delivery: '[sudden sharp point]' },
      { text: 'There’s a second shadow at the fit o’ the Walk where your map says none.', delivery: '[quietly, pointing once]' },
      { text: 'Barry, is it, the new bridge? Ask it what it ate to get here.', delivery: '[almost amused]' },
      { text: 'Nether Leith keeps a light for strangers who know better than to knock.', delivery: '[leans towards the sealed way]' },
      { text: 'Chum ye doon the Walk myself, if you’re the type who listens.', delivery: '[meets the listener’s eye]' },
      { text: 'The map’s honest. It’s the ground that’s started improvising.', delivery: '[folds map along the wrong crease]' },
    ],
  },
  {
    key: 'MIKE_ENGLISH',
    name: 'Mike English',
    audioProfile: 'Mike English is a tidy rival van operator with a polished, theatrical delivery that cracks whenever his insecurity gets close to the surface.',
    scene: 'Beside his immaculate van near the Gullet, silver tongs aligned with the menu board and a cue card hidden in his apron.',
    directorNotes: 'Style — precise service patter collapsing into flustered warmth. Accent — performed English polish over a Leith voice that keeps breaking through. Pacing — brisk and carefully measured, with a rush whenever McGrot scores a point. Mike is the rival, not a caricature; the Walk can win him over.',
    lines: [
      { text: 'Napkins first. Always napkins first.', delivery: '[placing napkins with ceremony]' },
      { text: 'One napkin per portion. We are preserving civilisation in manageable squares.', delivery: '[placing napkins with ceremony]' },
      { text: 'The students taught me ‘ken.’ I am still deciding whether to use it.', delivery: '[stage-whisper to the students]' },
      { text: 'Fine. The Walk wins.', delivery: '[surrendering the cue cards]' },
      { text: 'I am not pretending to be English. I am demonstrating a market position.', delivery: '[too quickly, then composed]' },
      { text: 'Fair play to McGrot; the man can season a queue.', delivery: '[reluctant admiration]' },
      { text: 'The crowd went east for the match. Somehow it improved my customer service.', delivery: '[watching the empty street]' },
      { text: 'Rupert. Never say ‘ken’ again unless a local invites you to survive the sentence.', delivery: '[stage-whisper to the students]' },
      { text: 'I can share a pavement without sharing my branding, surely.', delivery: '[trying to sound reasonable]' },
      { text: 'Observe the service: brisk, hygienic, and pronounced correctly for international confidence.', delivery: '[demonstrating with tongs]' },
      { text: 'Your queue has taste, McGrot, though its standards require gentle refurbishment.', delivery: '[competitive smile]' },
      { text: 'I have revised the accent, the napkins, and one opinion about this place.', delivery: '[carefully]' },
    ],
  },
  {
    key: 'TAXMAN',
    name: 'The Taxman',
    audioProfile: 'The Taxman is a thin, rigid bureaucratic adversary whose clipped, humourless voice treats every absurdity as a form to be completed.',
    scene: 'At the Gullet audit, clipboard squared, calculator ready, receipt roll unspooling across the pavement.',
    directorNotes: 'Style — literal and persistent, with no wink at the audience. Accent — plain office diction with hard consonants. Pacing — clipped steps and repetitive stamps; allow the smallest pause when the paperwork defeats him. Aim the pressure at the institution and its forms, never at hardship.',
    lines: [
      { text: 'Stamped.', delivery: '[stamps once]' },
      { text: 'This is not a philosophy. It is a receipt.', delivery: '[reads the first page twice]' },
      { text: 'Your books say ‘barry.’ Barry is not a category I recognise.', delivery: '[marks a box]' },
      { text: 'Denied.', delivery: '[flat, does not look up]' },
      { text: 'I have reviewed the sauce and found three unregistered layers of ambition.', delivery: '[marks a box]' },
      { text: 'Persevere is not a defence against an audit.', delivery: '[stamps again, firmer]' },
      { text: 'The clipboard is impartial. Your explanation is making it difficult.', delivery: '[stamps once]' },
      { text: 'Every missing penny leaves a trail, usually damp, faintly savoury, and unclaimed.', delivery: '[follows the trail with a ruler]' },
      { text: 'Appeal in writing.', delivery: '[points to a very small line]' },
      { text: 'This receipt is illegible, but its confidence is unfortunately clear.', delivery: '[holds it to the grey light]' },
      { text: 'The audit concludes when the numbers stop behaving like folklore.', delivery: '[closes the folder]' },
      { text: 'Your business model has more exceptions than my department has patience, frankly.', delivery: '[calculates in silence]' },
    ],
  },
  {
    key: 'GOV_INSPECTOR',
    name: 'The Government Inspector',
    audioProfile: 'The Government Inspector is a procedural, nervous official whose determination survives each fresh surprise by becoming another checklist.',
    scene: 'At the inspection of the Gullet, high-vis jacket bright against the Walk, tablet and thermometer probe held like protective equipment.',
    directorNotes: 'Style — cautious officialdom that keeps discovering the scene has a personality. Accent — formal public-service diction with a Leith edge under stress. Pacing — careful questions, recoil, then renewed determination. The Inspector is bewildered by the premises, not cruel to the people in them.',
    lines: [
      { text: 'The risk assessment is thorough; the risk has declined to participate.', delivery: '[waits for the tablet to update]' },
      { text: 'Closed. Pending further review, obviously.', delivery: '[scrolls, frowning]' },
      { text: 'I am not closing anything today.', delivery: '[stares at the pot]' },
      { text: 'The form doesn’t recognise ‘ken’ as a temperature.', delivery: '[reads the thermometer again]' },
      { text: 'Please keep the ladle still, ken.', delivery: '[raises one gloved hand]' },
      { text: 'This temperature is within tolerance. That is not the same as reassuring.', delivery: '[reads the thermometer again]' },
      { text: 'I require a clear answer, a clean surface, and one minute outside.', delivery: '[raises one gloved hand]' },
      { text: 'The van has written its own address on the licence.', delivery: '[looks at the painted sign]' },
      { text: 'Noted.', delivery: '[flat, records the clause]' },
      { text: 'If the sauce moves again, I will record it as an unplanned stakeholder.', delivery: '[opens a fresh form]' },
      { text: 'I have brought the correct forms, although none of them anticipated this smell.', delivery: '[checks the folder]' },
      { text: 'Your hygiene plan has diagrams, arrows, and one deeply concerning prophecy.', delivery: '[scrolls, frowning]' },
    ],
  },
];

const SENSITIVITY_RULES = [
  { label: 'sectarianism', pattern: /\b(?:orange\s+walk|sectarian|loyalist|unionist|catholic|protestant)\b/i },
  { label: 'addiction pathology', pattern: /\b(?:needle|junkie|heroin|hiv|track\s+marks|shoot\s+up)\b/i },
  { label: 'poverty punching down', pattern: /\b(?:squalor|scheme\s+rat|benefits\s+scrounger|slum\s+stereotype)\b/i },
];

function usage(message) {
  if (message) console.error(`Error: ${message}\n`);
  console.error(`Usage: node scripts/generate-mcgrots-dialogue.mjs [options]

Options:
  --out <file>          Output JSON (default: generated/mcgrots-dialogue.json)
  --count <n>           Lines per principal (1-${Math.max(...PRINCIPALS.map((p) => p.lines.length))}, default: 8)
  --seed <n>            Private deterministic seed (default: ${DEFAULT_SEED})
  --principal <key>     Only extend one key (default: all six in this unit)
  --resume              Extend an existing output without changing prior lines
  --help                Show this help
`);
  process.exit(message ? 2 : 0);
}

function parseArgs(argv) {
  const options = { out: DEFAULT_OUTPUT, count: 8, seed: DEFAULT_SEED, resume: false, principal: null };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--help') usage();
    if (arg === '--resume') { options.resume = true; continue; }
    if (arg === '--out' || arg === '--count' || arg === '--seed' || arg === '--principal') {
      const value = argv[++i];
      if (!value) usage(`missing value for ${arg}`);
      if (arg === '--out') options.out = path.resolve(process.cwd(), value);
      if (arg === '--count') options.count = Number(value);
      if (arg === '--seed') options.seed = Number(value);
      if (arg === '--principal') options.principal = value.toUpperCase().replaceAll('-', '_');
      continue;
    }
    usage(`unknown option ${arg}`);
  }
  const max = Math.max(...PRINCIPALS.map((p) => p.lines.length));
  if (!Number.isInteger(options.count) || options.count < 1 || options.count > max) usage(`--count must be an integer from 1 to ${max}`);
  if (!Number.isInteger(options.seed) || options.seed < 0) usage('--seed must be a non-negative integer');
  if (options.principal && !PRINCIPALS.some((p) => p.key === options.principal)) usage(`unknown principal ${options.principal}`);
  return options;
}

function hashKey(seed, key) {
  let h = (seed >>> 0) ^ 0x811c9dc5;
  for (const char of key) {
    h ^= char.charCodeAt(0);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h >>> 0;
}

function nextRandom(state) {
  let x = state.value >>> 0;
  x ^= x << 13;
  x ^= x >>> 17;
  x ^= x << 5;
  state.value = x >>> 0;
  return (state.value >>> 0) / 0x100000000;
}

function selectCards(principal, seed, count) {
  const cards = principal.lines.map((card, index) => ({ ...card, sourceIndex: index }));
  const state = { value: hashKey(seed, principal.key) || 1 };
  for (let i = cards.length - 1; i > 0; i -= 1) {
    const j = Math.floor(nextRandom(state) * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards.slice(0, count).map((card, index) => ({
    id: `${principal.key.toLowerCase()}-${String(index + 1).padStart(2, '0')}`,
    text: card.text,
    delivery: card.delivery,
  }));
}

function sensitivityViolations(text) {
  return SENSITIVITY_RULES.filter((rule) => rule.pattern.test(text)).map((rule) => rule.label);
}

function checkPrompts() {
  const count = fs.readdirSync(PROMPTS_DIR).filter((file) => file.endsWith('.txt')).length;
  if (count !== 205) throw new Error(`expected 205 director briefs in scripts/tts-prompts, found ${count}`);
  return count;
}

function buildEntry(principal, lines) {
  const bad = lines.flatMap((line) => sensitivityViolations(line.text).map((rule) => `${line.id}: ${rule}`));
  if (bad.length) throw new Error(`${principal.name} has prohibited sensitivity terms: ${bad.join(', ')}`);
  return {
    key: principal.key,
    name: principal.name,
    audioProfile: principal.audioProfile,
    scene: principal.scene,
    directorNotes: principal.directorNotes,
    lines,
  };
}

function readExisting(file) {
  if (!fs.existsSync(file)) return null;
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (error) {
    throw new Error(`cannot parse existing output ${file}: ${error.message}`);
  }
}

function main() {
  const options = parseArgs(process.argv.slice(2));
  const promptCount = checkPrompts();
  const existing = readExisting(options.out);
  if (existing && !options.resume) throw new Error(`refusing to overwrite ${options.out}; use --resume to extend it`);
  if (existing && existing.seed !== options.seed) throw new Error(`existing output uses seed ${existing.seed}; pass that seed when resuming`);

  const previous = new Map((existing?.entries ?? []).map((entry) => [entry.key, entry]));
  const entries = PRINCIPALS.map((principal) => {
    const old = previous.get(principal.key);
    if (options.principal && options.principal !== principal.key) {
      if (!old) throw new Error(`--principal ${options.principal} cannot resume an output missing ${principal.key}`);
      return old;
    }
    const selected = selectCards(principal, options.seed, options.count);
    const lines = old?.lines?.length >= options.count ? old.lines.slice(0, options.count) : selected;
    return buildEntry(principal, lines);
  });

  const output = {
    schema: 'mcgrots-dialogue/v1',
    seed: options.seed,
    linesPerPrincipal: options.count,
    sourceStyle: {
      directory: 'scripts/tts-prompts',
      directorBriefs: promptCount,
      shape: ['Audio Profile', 'Scene', "Director's Notes", 'Performance'],
    },
    scope: 'McGrot plus the five non-McGrot principals named by the G5a brief: Pomplé, Keth with One Eye, Mike English, the Taxman, and the Government Inspector. The Leith Badger, ruled into the cast for G5b, is deliberately not here — see docs/MCGROTS-DIALOGUE.md for why it has no lines.',
    entries,
  };
  fs.mkdirSync(path.dirname(options.out), { recursive: true });
  fs.writeFileSync(options.out, `${JSON.stringify(output, null, 2)}\n`);
  console.log(`Wrote ${entries.length} principals × ${options.count} lines = ${entries.length * options.count} lines to ${path.relative(ROOT, options.out) || options.out}`);
  console.log(`Seed ${options.seed}; source style ${promptCount} director briefs; resumable with --resume`);
}

main();

export { PRINCIPALS, SENSITIVITY_RULES, sensitivityViolations, selectCards };
