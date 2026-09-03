// Click-to-copy as a theme-default plugin: emission from the registry, and
// the legacy gates (prism_syntax_highlighting supersedes it,
// disable_click2copy_chroma opts out).

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildSite } from './lib/build-site.mjs';

const files = {
  'content/_index.md': '---\ntitle: Home\n---\n\n```sh\necho hi\n```\n',
};

test('click-to-copy ships as a deferred plugin by default', () => {
  const r = buildSite('c2c-default', {
    files,
    title: 'Docsy copy-button fixture',
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  const html = r.publicFile('index.html');
  const m = html.match(
    /<script[^>]*\bdefer\b[^>]*src="\/(js\/plugins\/click-to-copy[^"]*\.js)"/,
  );
  assert.ok(m, 'plugin script tag is emitted, deferred');
  assert.match(
    r.publicFile(m[1]),
    /td-click-to-copy/,
    'plugin carries the copy-button code',
  );
  assert.doesNotMatch(
    html,
    /src="\/js\/click-to-copy/,
    'the page is free of the pre-plugin script path',
  );
});

test('disable_click2copy_chroma ships zero copy-button bytes', () => {
  const r = buildSite('c2c-disabled', {
    files,
    title: 'Docsy copy-button absence fixture',
    extraConfig: 'params:\n  disable_click2copy_chroma: true\n',
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.doesNotMatch(
    r.publicFile('index.html'),
    /click-to-copy[^"]*\.js/,
    'the page is free of copy-button script tags',
  );
});

test('prism supersedes the copy-button plugin', () => {
  const r = buildSite('c2c-prism', {
    files,
    title: 'Docsy prism fixture',
    extraConfig: 'params:\n  prism_syntax_highlighting: true\n',
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  const html = r.publicFile('index.html');
  assert.match(
    html,
    /src=['"]\/js\/prism\.js['"]/,
    'prism script tag is emitted',
  );
  assert.doesNotMatch(
    html,
    /click-to-copy[^"]*\.js/,
    'the page is free of copy-button script tags alongside prism',
  );
});

test('a site entry with enable: false turns the theme plugin off', () => {
  const r = buildSite('c2c-registry-off', {
    files,
    title: 'Docsy copy-button registry-off fixture',
    extraConfig: `params:
  docsy:
    plugins:
      - name: click-to-copy
        enable: false
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.doesNotMatch(
    r.publicFile('index.html'),
    /click-to-copy[^"]*\.js/,
    'the page is free of copy-button script tags',
  );
});
