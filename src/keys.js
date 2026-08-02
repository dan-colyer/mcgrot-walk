// Shared keyboard guard.
//
// Every keyboard shortcut in the scene is bound on `window` — E to read, J for
// the journal, T for the torch — which was harmless right up until E5c added
// `#link-field`, the first focusable text input in the app. Click into it to
// select the URL, press any of those keys, and you get a comic overlay
// instead of a character. The field is readonly and the toast hides itself
// after a few seconds, so the window is small, but "small" is not a property
// worth relying on.
//
// Lives in its own module rather than next to the field it protects: three
// unrelated modules need it, and making journal.js import from moments.js to
// find out whether the user is typing is a worse dependency than one shared
// ten-line file.

const TYPING_TAGS = new Set(['INPUT', 'TEXTAREA', 'SELECT']);

export function isTypingTarget(e) {
  const el = e && e.target;
  if (!el || !el.tagName) return false;
  return TYPING_TAGS.has(el.tagName) || el.isContentEditable === true;
}
