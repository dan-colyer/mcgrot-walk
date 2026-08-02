// One authority for "what day is it" (E5c).
//
// Before this module the calendar day was derived twice, independently:
// atmosphere.js hashed it to pick the boot hour, proximity-audio.js hashed it
// to phase each vendor's reading clock. Both used the same FNV-1a over the
// same `YYYY-MM-DD` string, so they agreed by coincidence rather than by
// construction, and neither could be pinned from outside.
//
// E5c puts the date on the HUD, which turns that from untidy into dangerous:
// a golden screenshot containing today's date is a golden that goes red
// tomorrow morning. So the harness needs one lever that freezes the whole
// notion of "today", and every consumer has to be behind it.
//
// `todayKey()` is that lever. The override (`window.__mcgrotForceDate`) is set
// only by scripts/smoke.mjs and scripts/probe.mjs via addInitScript, and
// follows the same convention as __mcgrotForceDaySeed: read unconditionally,
// but nothing in a shipped build ever writes it.

// FNV-1a. Byte-identical to the two copies this module replaces — that
// equality is the whole safety argument for the rewiring commit, since the
// boot hour and every reading phase offset must not move for a given date.
export function hashDateKey(str) {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function dateKey(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

// 'YYYY-MM-DD' for the sim's today. Callers hash this, label it, or both.
export function todayKey() {
  if (typeof window !== 'undefined' && typeof window.__mcgrotForceDate === 'string') {
    return window.__mcgrotForceDate;
  }
  return dateKey(new Date());
}

export function todaySeed() {
  return hashDateKey(todayKey());
}

// Hour-of-day the visitor arrives at, in [0, 24). The loudest daily
// difference the sim has: some days you arrive at first light, some at
// midnight. Formerly atmosphere.js's todayStartHour.
export function startHour(key = todayKey()) {
  return ((hashDateKey(key) % 10000) / 10000) * 24;
}

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

// Hand-rolled rather than toLocaleDateString: locale formatting differs by
// machine and by Chromium build, and this string is baked into every desktop
// golden. British order, no ordinal suffix — "2 August 2026".
export function formatDateKey(key = todayKey()) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(key);
  if (!m) return key;
  const month = MONTHS[Number(m[2]) - 1] || m[2];
  return `${Number(m[3])} ${month} ${m[1]}`;
}

export function formatClock(hours) {
  const total = Math.floor(((hours % 24) + 24) % 24 * 60);
  const h = String(Math.floor(total / 60)).padStart(2, '0');
  const mm = String(total % 60).padStart(2, '0');
  return `${h}:${mm}`;
}

// The weather system's internal names are neutral; these are what a Leither
// would call them. Kept as a lookup rather than folded into atmosphere.js so
// the scheduler's vocabulary stays the thing gates and setWeather() speak.
const WEATHER_WORDS = {
  overcast: 'dreich',
  clear: 'clear',
  rain: 'wet',
  drizzle: 'smirr',
  haar: 'haar',
};

export function weatherWord(name) {
  return WEATHER_WORDS[name] || name;
}

// The name of this particular visit: "Leith Walk — 2 August 2026 · arrived
// 09:41, dreich". Both facts are true at the moment of arrival and both are
// frozen there; the weather visibly moves on afterwards, which is why the
// line says "arrived" rather than implying a current reading.
export function dayName(key, hours, weather) {
  return `Leith Walk — ${formatDateKey(key)} · arrived ${formatClock(hours)}, ${weatherWord(weather)}`;
}
