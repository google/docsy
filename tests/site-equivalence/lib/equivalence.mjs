// Shared engine for shared mode/full equivalence checks.
//
// `inlineChrome` runs the real shipped client (assets/js/chrome-nav.js) over a shared mode
// (lean) page in jsdom — fetching the donor, injecting/re-rooting/hydrating the
// nav exactly as a browser would. `normalize` and `navRegion` re-serialize HTML
// through the same jsdom serializer so comparisons are semantic, not serializer
// noise; `navRegion(..., { canonical: true })` additionally sorts class tokens so
// the comparison is "structural modulo class-token order".

import { readFileSync } from 'node:fs';
import { JSDOM } from 'jsdom';

export const MENU_ID = 'td-sidebar-menu';

export const CHROME_NAV_SRC = readFileSync(
  new URL('../../../theme/assets/js/chrome-nav.js', import.meta.url),
  'utf8',
);

// Run the client over `html` served at `url`. `resolveDonor(pathname)` returns
// the donor page's HTML for a fetch, or null/undefined for a 404. Resolves once
// the nav is revealed (d-none removed) or after a bounded wait.
export async function inlineChrome(
  html,
  { url, resolveDonor = () => null, chromeNavSrc = CHROME_NAV_SRC } = {},
) {
  const dom = new JSDOM(html, { url, runScripts: 'outside-only' });
  const { window } = dom;

  window.fetch = async (resource) => {
    const pathname = new URL(resource, url).pathname;
    const body = resolveDonor(pathname);
    if (body == null) return { ok: false, status: 404 };
    return { ok: true, status: 200, text: async () => body };
  };

  window.eval(chromeNavSrc);

  for (let i = 0; i < 100; i++) {
    const menu = window.document.getElementById(MENU_ID);
    const navReady = menu && !menu.classList.contains('d-none');
    const chromeReady = !window.document.querySelector(
      '.td-chrome-placeholder',
    );
    if (navReady && chromeReady) break;
    await new Promise((r) => setTimeout(r, 5));
  }
  return dom.serialize();
}

// Re-serialize HTML through jsdom: identical formatting on both sides, so only
// semantic differences remain.
export const normalize = (html) => new JSDOM(html).serialize();

// Sort the class tokens of every element (dropping empty class attributes), so a
// comparison ignores class-token order and the whitespace within class lists.
export function sortClassTokens(root) {
  for (const el of root.querySelectorAll('*')) {
    if (!el.hasAttribute('class')) continue;
    const toks = [...el.classList].sort();
    if (toks.length) el.setAttribute('class', toks.join(' '));
    else el.removeAttribute('class');
  }
}

// The navbar's language selector carries per-page links (each translation's
// counterpart of the current page). The client restores them by prefix-swapping
// the donor's home links, which is exact only when translations share slugs and
// all exist, so a structural comparison neutralizes both sides' language menu.
// The version selector, by contrast, the client restores exactly, so it is
// compared.
const SELECTOR_MENUS = '.td-lang-menu .dropdown-menu';
export function neutralizeSelectorMenus(root) {
  for (const menu of root.querySelectorAll(SELECTOR_MENUS)) {
    menu.replaceChildren();
  }
}

// The td/site-build-info shortcode bakes Hugo's build time into a `new Date("…")`
// literal that drives the #local-time widget, so two builds run seconds apart
// differ on that line. That's non-deterministic build output unrelated to shared mode, so
// replace the baked timestamp with a constant to neutralize it. Scoped to scripts
// that drive #local-time, leaving genuine date content elsewhere untouched.
const BUILD_TIME_CONST = '1970-01-01T00:00:00Z';
export function neutralizeBuildTimestamps(root) {
  for (const script of root.querySelectorAll('script')) {
    if (!script.textContent.includes('local-time')) continue;
    script.textContent = script.textContent.replace(
      /new Date\("[^"]*"\)/g,
      `new Date("${BUILD_TIME_CONST}")`,
    );
  }
}

// The named region's HTML, optionally canonicalized (class-token order, with
// per-page selector menus neutralized).
export function regionOf(html, selector, { canonical = false } = {}) {
  const el = new JSDOM(html).window.document.querySelector(selector);
  if (!el) return '';
  if (canonical) {
    neutralizeSelectorMenus(el);
    sortClassTokens(el);
  }
  return el.outerHTML + '\n';
}

// The left-nav region's HTML, optionally canonicalized (class-token order).
export function navRegion(html, opts) {
  return regionOf(html, '#' + MENU_ID, opts);
}

// Elements whose inter-child whitespace is significant and must be preserved.
const PREFORMATTED = new Set(['PRE', 'CODE', 'TEXTAREA', 'SCRIPT', 'STYLE']);

// Blank out whitespace-only text nodes (outside preformatted contexts), so a
// comparison ignores indentation — e.g. the seam left where the chrome placeholder
// is replaced by the injected menu.
function stripIgnorableWhitespace(root, doc) {
  const walker = doc.createTreeWalker(root, 0x4 /* NodeFilter.SHOW_TEXT */);
  const blanks = [];
  for (let n = walker.nextNode(); n; n = walker.nextNode()) {
    if (/\S/.test(n.data)) continue;
    let pre = false;
    for (
      let p = n.parentElement;
      p && p !== root.parentElement;
      p = p.parentElement
    ) {
      if (PREFORMATTED.has(p.tagName)) {
        pre = true;
        break;
      }
    }
    if (!pre) blanks.push(n);
  }
  for (const n of blanks) n.data = '';
}

// A page's body HTML with the named chrome regions removed, per-page selector
// menus neutralized, class tokens sorted, and ignorable whitespace blanked — for
// asserting "equal everywhere except this chrome", modulo class-token order and
// indentation.
export function bodyWithout(html, selectors = []) {
  const { document } = new JSDOM(html).window;
  for (const sel of selectors) {
    document.querySelectorAll(sel).forEach((el) => el.remove());
  }
  const body = document.body;
  neutralizeSelectorMenus(body);
  stripIgnorableWhitespace(body, document);
  sortClassTokens(body);
  return body.innerHTML;
}
