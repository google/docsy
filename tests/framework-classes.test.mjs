// Framework-class check for the semantic-classes migration
// (google/docsy#783): chrome partials listed in CLEARED_PARTIALS emit only
// Docsy-owned (td-) class names — no Bootstrap classes. The list grows
// partial by partial as the migration lands; a partial is added in the same
// PR that swaps its classes, red first, driven green by the swap.
//
// The Bootstrap inventory is derived from the dependency's own compiled CSS,
// so it tracks the installed Bootstrap version instead of a hand-kept list.

import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);

// Theme partials cleared of framework classes, relative to theme/layouts/.
const CLEARED_PARTIALS = [];

const bootstrapCss = path.join(
  repoRoot,
  'theme/node_modules/bootstrap/dist/css/bootstrap.css',
);

// Class names Bootstrap's stylesheet defines: every `.name` token in selector
// text (text outside `{…}` blocks, comments stripped).
export function bootstrapClasses(css) {
  const selectorText = css
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\{[^{}]*\}/g, '{}');
  const classes = new Set();
  for (const m of selectorText.matchAll(/\.(-?[_a-zA-Z][\w-]*)/g)) {
    classes.add(m[1]);
  }
  return classes;
}

// Class tokens a template emits from its class attributes: the literal
// words of the attribute text, plus words in quoted string literals inside
// the attribute's {{…}} actions (delimit/cond/printf-built class lists).
// The scan walks the attribute value action-aware, so quotes inside actions
// can't truncate it. Strict by design: an action literal that merely
// collides with a class name (a status-string compare) is a loud false
// positive, not a silent miss. A lint over these forms, not a boundary:
// fully computed attributes (class={{ $c }}, printf "class=%q") are
// review's job.
export function classTokens(template) {
  const tokens = new Set();
  const add = (text) => {
    for (const token of text.split(/\s+/)) {
      if (token) tokens.add(token);
    }
  };
  const attrRe = /(?:^|[<\s"'])class\s*=\s*(["'])/gi;
  let m;
  while ((m = attrRe.exec(template))) {
    const quote = m[1];
    let i = attrRe.lastIndex;
    let literal = '';
    while (i < template.length && template[i] !== quote) {
      if (template.startsWith('{{', i)) {
        const end = template.indexOf('}}', i + 2);
        if (end === -1) break;
        const lits = [
          ...template.slice(i + 2, end).matchAll(/"([^"]*)"|`([^`]*)`/g),
        ].map((lit) => lit[1] ?? lit[2]);
        for (const lit of lits) add(lit);
        // A lone "-" literal is a joining delimiter (delimit (slice "d"
        // "flex") "-"): emit the joined name too.
        if (lits.includes('-')) {
          add(lits.filter((lit) => lit !== '-').join('-'));
        }
        literal += ' ';
        i = end + 2;
      } else {
        literal += template[i];
        i += 1;
      }
    }
    add(literal);
    attrRe.lastIndex = i;
  }
  return tokens;
}

// A literal class token is a fragment when it could assemble into an
// inventory name that token matching would miss: an edge-hyphenated piece
// (print "d-" "flex", d-{{ $bp }}-none) that some inventory name starts or
// ends with, or a printf format (d-%s-none) whose placeholder pattern
// matches an inventory name. Anchoring on the inventory keeps Docsy-own
// dynamic classes (ul-{{ $n }}, td-{{ .Kind }}) clean. Whole-name evasion
// via replace/printf composition of complete names stays review's job,
// like fully computed attributes.
const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
export function isClassFragment(token, inventory) {
  if (/%[a-zA-Z]/.test(token)) {
    if (!token.replace(/%[a-zA-Z]/g, '')) return false;
    const re = new RegExp(
      `^${token
        .split(/%[a-zA-Z]/)
        .map(escapeRe)
        .join('.+')}$`,
    );
    for (const name of inventory) if (re.test(name)) return true;
    return false;
  }
  if (token.length > 1 && /[^-]-$/.test(token)) {
    for (const name of inventory) if (name.startsWith(token)) return true;
  }
  if (token.length > 1 && /^-[^-]/.test(token)) {
    for (const name of inventory) if (name.endsWith(token)) return true;
  }
  return false;
}

test('framework-class check: cleared partials emit no Bootstrap classes', () => {
  assert.ok(
    fs.existsSync(bootstrapCss),
    'bootstrap.css is installed (npm run install:theme-deps)',
  );
  const inventory = bootstrapClasses(fs.readFileSync(bootstrapCss, 'utf8'));
  assert.ok(inventory.size > 500, 'inventory parsed a full Bootstrap build');

  for (const partial of CLEARED_PARTIALS) {
    const file = path.join(repoRoot, 'theme/layouts', partial);
    assert.ok(fs.existsSync(file), `cleared partial ${partial} exists`);
    const tokens = [...classTokens(fs.readFileSync(file, 'utf8'))];
    assert.deepEqual(
      tokens.filter((token) => inventory.has(token)),
      [],
      `${partial} uses only Docsy-owned classes`,
    );
    assert.deepEqual(
      tokens.filter((token) => isClassFragment(token, inventory)),
      [],
      `${partial} class attributes carry only whole class names`,
    );
  }
});

// Self-test: prove the scanner's signal on synthetic templates, so an empty
// cleared list can't hide a broken scanner (false-green guard). The nested-
// quote and action-literal cases are real Hugo forms that defeated a naive
// attribute regex (adversarial review, 2026-08-15).
test('framework-class check: scanner flags Bootstrap classes', () => {
  const inventory = bootstrapClasses(fs.readFileSync(bootstrapCss, 'utf8'));
  for (const known of ['d-flex', 'breadcrumb', 'active', 'mb-4']) {
    assert.ok(inventory.has(known), `inventory contains .${known}`);
  }
  const offenders = (template) =>
    [...classTokens(template)].filter((t) => inventory.has(t)).sort();
  const classFragments = (template) =>
    [...classTokens(template)]
      .filter((t) => isClassFragment(t, inventory))
      .sort();

  assert.deepEqual(
    offenders('<nav class="td-x d-flex{{ if .Active }} active{{ end }}">'),
    ['active', 'd-flex'],
    'dirty template is flagged',
  );

  // Quotes inside actions must not truncate the attribute scan.
  assert.deepEqual(
    offenders(
      '<li class="breadcrumb-item{{ if eq .Status "active" }} active{{ end }}">',
    ),
    ['active', 'breadcrumb-item'],
    'nested-quote action is flagged',
  );

  // Class names emitted from string literals inside actions count too.
  assert.deepEqual(
    offenders('<div class="{{ delimit (slice "d-flex" "mb-4") " " }}">'),
    ['d-flex', 'mb-4'],
    'delimit-built class list is flagged',
  );
  assert.deepEqual(
    offenders(
      '<div class="{{ cond $single "breadcrumb d-flex" "breadcrumb" }}">',
    ),
    ['breadcrumb', 'd-flex'],
    'cond-built class list is flagged',
  );

  // Class-name fragments (concat assembly: print "d-" "flex",
  // d-{{ .Bp }}-none) defeat token matching; a fragment counts only when it
  // can complete to an inventory name, so Docsy-own dynamic classes
  // (ul-{{ $n }}) stay clean.
  assert.deepEqual(
    classFragments('<div class="{{ print "d-" "flex" }}">'),
    ['d-'],
    'concat fragment literal is flagged',
  );
  assert.deepEqual(
    classFragments('<div class="{{ printf "%s%s" "breadcrumb-" "item" }}">'),
    ['breadcrumb-'],
    'printf fragment literal is flagged',
  );
  assert.deepEqual(
    classFragments('<div class="d-{{ .Bp }}-none">'),
    ['-none', 'd-'],
    'action-split class name is flagged',
  );
  assert.deepEqual(
    classFragments('<div class="{{ printf "d-%s-none" .Bp }}">'),
    ['d-%s-none'],
    'printf placeholder form is flagged',
  );
  assert.deepEqual(
    offenders('<div class="{{ delimit (slice "d" "flex") "-" }}">'),
    ['d-flex'],
    'delimiter-joined class name is flagged',
  );
  assert.deepEqual(
    classFragments('<ul class="ul-{{ $ulNr }} td-{{ .Kind }}">'),
    [],
    'Docsy-own dynamic classes are not fragments',
  );
  assert.deepEqual(
    classFragments('<div class="td-x{{ if .A }} td-x--on{{ end }}">'),
    [],
    'whole-token semantic template has no fragments',
  );

  // Only real class attributes are scanned.
  assert.deepEqual(
    offenders('<div data-class="d-flex" class="td-x">'),
    [],
    'data-class attribute is not scanned',
  );

  assert.deepEqual(
    offenders('<div CLASS="d-flex">'),
    ['d-flex'],
    'attribute name is case-insensitive',
  );

  assert.deepEqual(
    offenders('<nav class="td-x{{ if .Active }} td-x--active{{ end }}">'),
    [],
    'semantic template passes',
  );
});
