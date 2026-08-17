// Framework-class lint for the semantic-classes migration
// (google/docsy#783): class attributes in cleared partials carry no literal
// Bootstrap class names. The rendered-output net
// (fixture-site/output-classes.test.mjs) is ground truth for every branch
// the fixture exercises; this lint's job is the residue — branch literals
// the fixture doesn't render — caught as plain tokens in the template text.
// A deliberate lint, not a boundary (per the repo's runner-lint stance):
// assembled or computed class names are review's job. It replaces a
// ~770-line template scanner that re-modeled Hugo's evaluator; history and
// rationale in google/docsy#2719 and its retirement PR.

import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { bootstrapClasses, bootstrapCss } from './lib/bootstrap-inventory.mjs';
import { CLEARED_PARTIALS } from './lib/cleared-partials.mjs';

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);

// Literal tokens in class attributes: the attribute value is taken as raw
// text (Go-template actions included) and split into class-name-shaped
// words, so a branch literal ({{ if .X }}active{{ end }}) surfaces as
// `active`. A quote inside an action ({{ eq .Status "active" }}) does not
// end the attribute, so the walk skips {{…}} spans when looking for the
// closing quote. Only double-quoted attributes are scanned — the theme
// emits nothing else, and the output net lexes the other forms.
// Over-matching is loud, never silent: a non-class literal that
// collides with a Bootstrap name fails the lint and gets renamed or
// restructured, it doesn't hide anything.
export function classTokens(template) {
  const tokens = new Set();
  const openRe = /\bclass\s*=\s*"/gi;
  for (let m; (m = openRe.exec(template));) {
    const start = m.index + m[0].length;
    let end = start;
    while (end < template.length && template[end] !== '"') {
      if (template.startsWith('{{', end)) {
        const close = template.indexOf('}}', end);
        end = close === -1 ? template.length : close + 2;
      } else {
        end += 1;
      }
    }
    for (const t of template.slice(start, end).match(/-?[_a-zA-Z][\w-]*/g) ??
      []) {
      tokens.add(t);
    }
    openRe.lastIndex = end;
  }
  return tokens;
}

test('framework-class lint: cleared partials name no Bootstrap classes', () => {
  assert.ok(
    fs.existsSync(bootstrapCss),
    'bootstrap.css is installed (npm run install:theme-deps)',
  );
  const inventory = bootstrapClasses(fs.readFileSync(bootstrapCss, 'utf8'));
  assert.ok(inventory.size > 500, 'inventory parsed a full Bootstrap build');

  // Self-test: a broken tokenizer plus an empty cleared list would
  // otherwise stay green forever. The nested-quote case is a real Hugo
  // form that truncates a naive attribute regex.
  assert.deepEqual(
    [
      ...classTokens(
        '<nav class="td-x d-flex{{ if .Active }} active{{ end }}">',
      ),
    ].filter((t) => inventory.has(t)),
    ['d-flex', 'active'],
    'branch and literal Bootstrap tokens are flagged',
  );
  assert.deepEqual(
    [
      ...classTokens(
        '<li class="breadcrumb-item{{ if eq .Status "active" }} active{{ end }}">',
      ),
    ].filter((t) => inventory.has(t)),
    ['breadcrumb-item', 'active'],
    'a quote inside an action does not truncate the attribute scan',
  );

  for (const partial of CLEARED_PARTIALS) {
    const file = path.join(repoRoot, 'theme/layouts', partial);
    assert.ok(fs.existsSync(file), `cleared partial ${partial} exists`);
    const source = fs.readFileSync(file, 'utf8');
    assert.deepEqual(
      [...classTokens(source)].filter((t) => inventory.has(t)).sort(),
      [],
      `${partial} class attributes name only Docsy-owned classes`,
    );
  }
});
