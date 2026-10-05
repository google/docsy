// The doc-rooted variant gives the docs landing page the LLMS output through a
// config cascade. Page `outputs` replace the kind's list rather than extend it
// (Hugo has no list merge), so that cascade restates `_default`'s section
// formats and must track them; this pins the two in step.

import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';

const config = (dir) =>
  parse(
    readFileSync(
      fileURLToPath(new URL(`../../config/${dir}/hugo.yaml`, import.meta.url)),
      'utf8',
    ),
  );

test('doc-rooted docs landing page outputs are the section formats plus LLMS', () => {
  const sectionOutputs = config('_default').outputs.section;
  assert.ok(sectionOutputs.length > 0, 'section outputs are configured');
  const docsCascade = config('doc-rooted').cascade.find(
    (entry) => entry.target?.path === '/docs',
  );
  assert.ok(docsCascade, 'doc-rooted config cascades onto /docs');
  assert.deepEqual(docsCascade.outputs, [...sectionOutputs, 'LLMS']);
});
