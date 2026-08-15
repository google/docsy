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

// Class tokens a template emits: the literal words of its class attributes,
// template actions ({{…}}) removed. A lint over literal tokens, not a
// boundary: fully computed class attributes are review's job.
export function classTokens(template) {
  const tokens = new Set();
  for (const m of template.matchAll(/class\s*=\s*("([^"]*)"|'([^']*)')/g)) {
    const value = (m[2] ?? m[3]).replace(/\{\{.*?\}\}/gs, ' ');
    for (const token of value.split(/\s+/)) {
      if (token) tokens.add(token);
    }
  }
  return tokens;
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
    const offenders = [...classTokens(fs.readFileSync(file, 'utf8'))].filter(
      (token) => inventory.has(token),
    );
    assert.deepEqual(offenders, [], `${partial} uses only Docsy-owned classes`);
  }
});

// Self-test: prove the scanner's signal on synthetic templates, so an empty
// cleared list can't hide a broken scanner (false-green guard).
test('framework-class check: scanner flags Bootstrap classes', () => {
  const inventory = bootstrapClasses(fs.readFileSync(bootstrapCss, 'utf8'));
  for (const known of ['d-flex', 'breadcrumb', 'active', 'mb-4']) {
    assert.ok(inventory.has(known), `inventory contains .${known}`);
  }

  const dirty = classTokens(
    '<nav class="td-x d-flex{{ if .Active }} active{{ end }}"></nav>',
  );
  assert.deepEqual(
    [...dirty].filter((t) => inventory.has(t)),
    ['d-flex', 'active'],
    'dirty template is flagged',
  );

  const clean = classTokens(
    '<nav class="td-x{{ if .Active }} td-x--active{{ end }}"></nav>',
  );
  assert.deepEqual(
    [...clean].filter((t) => inventory.has(t)),
    [],
    'semantic template passes',
  );
});
