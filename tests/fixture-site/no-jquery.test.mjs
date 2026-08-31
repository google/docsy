// jQuery-absence gate (google/docsy#1436): the theme ships and loads no
// jQuery. Locks the removal in two layers: rendered pages reference no
// jquery script, and authored theme JS (assets and inline layout scripts)
// contains no jQuery usage tokens. Vendored third-party bundles
// (theme/static/js/) are exempt: they're upstream-owned and jQuery-free
// by their own contract.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { globSync } from 'node:fs';
import { buildSite } from './lib/build-site.mjs';

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../..',
);

test('rendered pages reference no jquery script', () => {
  const build = buildSite('no-jquery', {
    // Own title: the default embeds the fixture name, which this very
    // test would then match in the rendered pages.
    title: 'Docsy absence-gate fixture',
    files: {
      'content/_index.md': '---\ntitle: Home\n---\nHome body\n',
      'content/docs/_index.md': '---\ntitle: Docs\n---\nDocs body\n',
    },
    // offlineSearch exercises the fuller head (lunr script wiring).
    extraConfig: 'params:\n  offlineSearch: true\n',
  });
  assert.equal(build.status, 0, 'fixture site builds');
  for (const page of ['index.html', 'docs/index.html']) {
    assert.doesNotMatch(
      build.publicFile(page),
      /jquery/i,
      `${page} is jquery-free`,
    );
  }
});

test('authored theme JS contains no jQuery usage', () => {
  const sources = [
    ...globSync('theme/assets/js/*.js', { cwd: repoRoot }),
    ...globSync('theme/layouts/**/*.html', { cwd: repoRoot }),
  ];
  assert.ok(sources.length >= 10, 'the scan found the theme sources');
  for (const rel of sources) {
    assert.doesNotMatch(
      readFileSync(path.join(repoRoot, rel), 'utf8'),
      // Usage tokens, not mentions: calls, member access, and the
      // classic IIFE argument. Prose references in comments stay legal.
      /\$\(|jQuery\s*[.(]|\(jQuery\)/,
      `${rel} is free of jQuery usage`,
    );
  }
});
