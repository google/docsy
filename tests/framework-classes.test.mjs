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
// `active`. Over-matching is loud, never silent: a non-class literal that
// collides with a Bootstrap name fails the lint and gets renamed or
// restructured, it doesn't hide anything.
const classAttrRe = /\bclass\s*=\s*"([^"]*)"/gi;
export function classTokens(template) {
  const tokens = new Set();
  for (const m of template.matchAll(classAttrRe)) {
    for (const t of m[1].match(/-?[_a-zA-Z][\w-]*/g) ?? []) tokens.add(t);
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
  // otherwise stay green forever.
  assert.deepEqual(
    [
      ...classTokens(
        '<nav class="td-x d-flex{{ if .Active }} active{{ end }}">',
      ),
    ].filter((t) => inventory.has(t)),
    ['d-flex', 'active'],
    'branch and literal Bootstrap tokens are flagged',
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
