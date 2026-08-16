// Rendered-output framework-class net: classes in the built fixture's HTML
// are ground truth for what the theme emits, with no template semantics to
// re-model (the divergence-hardening history of ../framework-classes.test.mjs).
// Blind spot: branches the fixture doesn't exercise — the scanner's branch
// enumeration owns those. Together, a Bootstrap class survives only if its
// template form is unlexable AND the fixture never renders it.
//
// CLEARED_REGIONS mirrors the scanner's CLEARED_PARTIALS: each migration PR
// adds its partial's rendered surface here red-first.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { bootstrapClasses, bootstrapCss } from '../lib/bootstrap-inventory.mjs';
import { buildFixture } from './lib/markup-goldens.mjs';

// name → label; page → public HTML file; re → the rendered region owned by
// the cleared partial.
const CLEARED_REGIONS = [];

// The theme emits double-quoted attributes (verified over the built site).
const classAttrRe = /\bclass\s*=\s*"([^"]*)"/g;
export function htmlClasses(html) {
  const out = new Set();
  for (const m of html.matchAll(classAttrRe)) {
    for (const c of m[1].split(/\s+/)) if (c) out.add(c);
  }
  return out;
}

test('output-class net: cleared regions render no Bootstrap classes', () => {
  const inventory = bootstrapClasses(fs.readFileSync(bootstrapCss, 'utf8'));
  assert.ok(inventory.size > 500, 'inventory parsed a full Bootstrap build');

  // Extraction self-test: a broken extractor plus an empty cleared list
  // would otherwise stay green forever.
  assert.deepEqual(
    [...htmlClasses('<nav class="td-x d-flex"><a class="active">x</a></nav>')],
    ['td-x', 'd-flex', 'active'],
    'class extraction sees every attribute',
  );

  const build = buildFixture('output-classes');

  // Site-wide census: the fixture is Bootstrap-styled today, so a net that
  // finds nothing is broken, not a finished migration. When the theme is
  // fully cleared, flip this anchor into its positive assertion (zero).
  let pages = 0;
  const found = new Set();
  const walk = (dir) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name.endsWith('.html')) {
        pages += 1;
        for (const c of htmlClasses(fs.readFileSync(p, 'utf8'))) {
          if (inventory.has(c)) found.add(c);
        }
      }
    }
  };
  walk(path.join(build.site, 'public'));
  assert.ok(pages >= 8, 'the fixture rendered its pages');
  assert.ok(found.size > 0, 'the census sees pre-migration Bootstrap classes');

  for (const { name, page, re } of CLEARED_REGIONS) {
    const m = build.publicFile(page).match(re);
    assert.ok(m, `cleared region ${name} is present in ${page}`);
    const offenders = [...htmlClasses(m[0])]
      .filter((c) => inventory.has(c))
      .sort();
    assert.deepEqual(
      offenders,
      [],
      `cleared region ${name} renders no Bootstrap classes`,
    );
  }
});
