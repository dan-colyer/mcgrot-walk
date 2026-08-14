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
      { text: 'Mind the steam, pal; it has opinions about anybody standing between me and lunch.', delivery: '[warning the pavement, then softer]' },
      { text: 'At the Gullet, every ladle earns its keep and every rumour gets reduced.', delivery: '[grandly, stirring]' },
      { text: 'Leith can keep its monuments; give me a counter that remembers who paid.', delivery: '[pointing with the spatula]' },
      { text: 'That tram trench has been open so long, I have started seasoning it.', delivery: '[deadpan, peering into the works]' },
      { text: 'Do not call it scraps; scraps are what the future leaves after dinner.', delivery: '[offended, then unexpectedly solemn]' },
      { text: 'Pomplé says the sauce needs mercy, which is why I keep him near it.', delivery: '[confidential, glancing down]' },
      { text: 'An honest bowl should frighten the cautious and comfort whoever stayed.', delivery: '[quietly sincere]' },
      { text: 'The council sent another form; I sent it back with gravy on the signature.', delivery: '[reading the form, satisfied]' },
      { text: 'A hungry street does not need promises; it needs something hot that knows its name.', delivery: '[to the passing crowd]' },
      { text: 'I have buried better plans than this beneath a layer of onions.', delivery: '[considering the pot]' },
      { text: 'If the smoke rises straight, somebody important is about to misunderstand it.', delivery: '[watching the smoke]' },
      { text: 'The Walk has seen empires come and go; my queue still wants extra sauce.', delivery: '[with weary pride]' },
    ],
  },
  {
    key: 'POMPLE',
    name: 'Pomplé',
    audioProfile: 'Pomplé is McGrot’s compact, patient dog: a quiet moral compass whose judgement arrives in a stare, a tilt, or a handwritten sign.',
    scene: 'Beside the Gullet, wearing a small hat only because somebody has put it there, with a sign held square to the street.',
    directorNotes: 'Style — minimal and perfectly timed. Pomplé does not speak aloud; render each line as handwritten sign text, with the surrounding performance carried by silence, eye contact, and tiny head movements. The signs are original dialogue and should remain legible exactly as written.',
    lines: [
      { text: 'NO LADLE UNTIL THE OLD WOMAN HAS A SEAT.', delivery: '[holds sign up; does not blink]' },
      { text: 'HE SAID IT WAS FRESH. I HAVE WATCHED IT SINCE TUESDAY.', delivery: '[slowly turns sign towards McGrot]' },
      { text: 'THE STUDENT ASKED FOR AUTHENTICITY. I GAVE HIM A NAPKIN.', delivery: '[one tired ear twitch]' },
      { text: 'THIS IS A DOG’S OPINION, NOT A PUBLIC CONSULTATION.', delivery: '[looks at the clipboard, then away]' },
      { text: 'KEEP THE HAT. LOSE THE SPEECH.', delivery: '[wearing the hat; long stare]' },
      { text: 'THE BANANA FLATS ARE A LANDMARK. STOP POINTING AT THEM.', delivery: '[plants paws; sign points nowhere]' },
      { text: 'YOU MAY CALL IT A PILGRIMAGE AFTER YOU HAVE HELPED CARRY SOMETHING.', delivery: '[waits beside the heavy box]' },
      { text: 'HEAR THE WHOLE STORY BEFORE YOU JUDGE THE BOWL.', delivery: '[sets sign beside the food bowl]' },
      { text: 'A GOOD QUEUE HAS ROOM FOR THE PERSON WHO ARRIVED TIRED.', delivery: '[quietly makes space]' },
      { text: 'THE HAT IS NOT A LICENSE TO BE DAFT.', delivery: '[removes hat and places it on the counter]' },
      { text: 'SIT DOWN, PAL. THE STREET WILL STILL BE HERE.', delivery: '[nudges the spare stool forward]' },
      { text: 'I HAVE HEARD WORSE FROM BETTER DRESSED ANIMALS.', delivery: '[looks at Mike; small tail movement]' },
    ],
  },
  {
    key: 'KETH',
    name: 'Keth with One Eye',
    audioProfile: 'Keth with One Eye is a watchful Leith warning figure, his voice low and weathered until a sudden point makes the danger precise.',
    scene: 'At a fixed post near the Foot, folded local maps under one arm and the dock hook planted on the stones.',
    directorNotes: 'Style — cryptic, watchful, and occasionally helpful without becoming explanatory. Accent — weathered dockside Scots. Pacing — stillness first, then one sudden lean or point; let the ominous lines breathe. These are original lines; do not borrow wording from the comics.',
    lines: [
      { text: 'There is haar on the statue, and a second shadow where your map says none.', delivery: '[quietly, pointing once]' },
      { text: 'Do not follow the hinge when it opens; it has learned the shape of visitors.', delivery: '[without looking at the door]' },
      { text: 'Under the Walk, the old names keep dry. That is why they sound awake.', delivery: '[touches the folded map]' },
      { text: 'Your route ends at the yellow barrier. Your warning begins three paces earlier.', delivery: '[marks the stones with the hook]' },
      { text: 'McGrot hears prophecy in a pan; I hear the pan asking questions.', delivery: '[almost amused]' },
      { text: 'Keep your eye on the tramworks. They have buried newer things than cables.', delivery: '[sudden sharp point]' },
      { text: 'Nether Leith keeps a light for strangers who know better than to knock.', delivery: '[leans towards the sealed way]' },
      { text: 'The sea gives nothing back unchanged, not even a rumour carried inland.', delivery: '[watching the weather]' },
      { text: 'If the gulls go quiet, count your footsteps instead of your blessings.', delivery: '[listens; a long pause]' },
      { text: 'The map is honest. It is the ground that has begun improvising.', delivery: '[folds map along the wrong crease]' },
      { text: 'A warning is a kindness with its coat buttoned against the rain.', delivery: '[offers the thought, then withdraws]' },
      { text: 'You can cross the Walk safely, provided you stop pretending it is empty.', delivery: '[meets the listener’s eye]' },
    ],
  },
  {
    key: 'MIKE_ENGLISH',
    name: 'Mike English',
    audioProfile: 'Mike English is a tidy rival van operator with a polished, theatrical delivery that cracks whenever his insecurity gets close to the surface.',
    scene: 'Beside his immaculate van near the Gullet, silver tongs aligned with the menu board and a cue card hidden in his apron.',
    directorNotes: 'Style — precise service patter collapsing into flustered warmth. Accent — performed English polish over a Leith voice that keeps breaking through. Pacing — brisk and carefully measured, with a rush whenever McGrot scores a point. Mike is the rival, not a caricature; the Walk can win him over.',
    lines: [
      { text: 'Observe the service: brisk, hygienic, and pronounced correctly for international confidence.', delivery: '[demonstrating with tongs]' },
      { text: 'Leith Links taught me presentation; McGrot taught me that smoke is persuasive.', delivery: '[reluctant admiration]' },
      { text: 'I am not pretending to be English; I am demonstrating a market position.', delivery: '[too quickly, then composed]' },
      { text: 'Your queue has taste, McGrot, though its standards require gentle refurbishment.', delivery: '[competitive smile]' },
      { text: 'One napkin per portion. We are preserving civilisation in manageable squares.', delivery: '[placing napkins with ceremony]' },
      { text: 'Call it rivalry if you like; I call it a shared frontage with excellent tension.', delivery: '[gestures between the vans]' },
      { text: 'Rupert, never say ken again unless a local invites you to survive the sentence.', delivery: '[stage-whisper to the students]' },
      { text: 'Fine, the Walk has won me over. Please do not put that on the menu.', delivery: '[surrendering the cue cards]' },
      { text: 'A proper menu leaves room for surprise, but not for sauce on the waistcoat.', delivery: '[checking his reflection]' },
      { text: 'I can share a pavement without sharing my branding, surely.', delivery: '[trying to sound reasonable]' },
      { text: 'The crowd went east for the match and somehow improved my customer service.', delivery: '[watching the empty street]' },
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
      { text: 'Your receipts describe a philosophy, not a taxable transaction.', delivery: '[reads the first page twice]' },
      { text: 'I have reviewed the sauce and found three unregistered layers of ambition.', delivery: '[marks a box]' },
      { text: 'Please separate personal gravy from commercial gravy before I continue.', delivery: '[holds out a second envelope]' },
      { text: 'The clipboard is impartial; your explanation is making it difficult.', delivery: '[stamps once]' },
      { text: 'You may appeal this assessment after demonstrating where the money went.', delivery: '[points to a very small line]' },
      { text: 'Every missing penny leaves a paper trail, usually damp and faintly savoury.', delivery: '[follows the trail with a ruler]' },
      { text: 'I am not threatening closure; I am documenting the possibility with precision.', delivery: '[does not look up]' },
      { text: 'That stamp is official, McGrot. The noise is merely how certainty travels.', delivery: '[stamps again, firmer]' },
      { text: 'A cash box is not a philosophy, despite the evidence submitted this morning.', delivery: '[turns a page]' },
      { text: 'Your business model has more exceptions than my department has patience.', delivery: '[calculates in silence]' },
      { text: 'This receipt is illegible, but its confidence is unfortunately clear.', delivery: '[holds it to the grey light]' },
      { text: 'The audit will conclude when the numbers stop behaving like folklore.', delivery: '[closes the folder]' },
    ],
  },
  {
    key: 'GOV_INSPECTOR',
    name: 'The Government Inspector',
    audioProfile: 'The Government Inspector is a procedural, nervous official whose determination survives each fresh surprise by becoming another checklist.',
    scene: 'At the inspection of the Gullet, high-vis jacket bright against the Walk, tablet and thermometer probe held like protective equipment.',
    directorNotes: 'Style — cautious officialdom that keeps discovering the scene has a personality. Accent — formal public-service diction with a Leith edge under stress. Pacing — careful questions, recoil, then renewed determination. The Inspector is bewildered by the premises, not cruel to the people in them.',
    lines: [
      { text: 'The specimen is warm, the form is incomplete, and the premises are unexpectedly sincere.', delivery: '[records each clause]' },
      { text: 'Please keep the ladle still while I establish whether it is a utensil or witness.', delivery: '[backs away half a step]' },
      { text: 'I came to assess the Gullet; the Gullet appears to be assessing me.', delivery: '[checks the tablet]' },
      { text: 'Your hygiene plan has diagrams, arrows, and one deeply concerning prophecy.', delivery: '[scrolls, frowning]' },
      { text: 'This temperature is within tolerance, which is not the same as reassuring.', delivery: '[reads the thermometer again]' },
      { text: 'I require a clear answer, a clean surface, and perhaps a minute outside.', delivery: '[raises one gloved hand]' },
      { text: 'The licence application requests a premises address; the van has written its own.', delivery: '[looks at the painted sign]' },
      { text: 'If the sauce moves again, I will record it as an unplanned stakeholder.', delivery: '[opens a fresh form]' },
      { text: 'I have brought the correct forms, although none of them anticipated this smell.', delivery: '[checks the folder]' },
      { text: 'The risk assessment is thorough; the risk has declined to participate.', delivery: '[waits for the tablet to update]' },
      { text: 'Please do not call the inspection a conversation until it has passed review.', delivery: '[nervous, but firm]' },
      { text: 'I am not closing anything today. I am merely standing very near the possibility.', delivery: '[stares at the pot]' },
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
    scope: 'McGrot plus the five non-McGrot principals named by the G5a brief: Pomplé, Keth with One Eye, Mike English, the Taxman, and the Government Inspector.',
    entries,
  };
  fs.mkdirSync(path.dirname(options.out), { recursive: true });
  fs.writeFileSync(options.out, `${JSON.stringify(output, null, 2)}\n`);
  console.log(`Wrote ${entries.length} principals × ${options.count} lines = ${entries.length * options.count} lines to ${path.relative(ROOT, options.out) || options.out}`);
  console.log(`Seed ${options.seed}; source style ${promptCount} director briefs; resumable with --resume`);
}

main();

export { PRINCIPALS, SENSITIVITY_RULES, sensitivityViolations, selectCards };
