// Markmap as a plugin: burns three red checks from the js-plugins page at
// once — zero bytes shipped when disabled, no CDN script without SRI (the
// vendored autoloader is served same-origin, fingerprinted), and options via
// @params instead of a template-wrapped asset. The legacy params.markmap.*
// keys keep working via registry aliasing, with a deprecation warning. Needs
// network (vendor fetch through resources.GetRemote), like the mermaid
// partial.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildSite } from './lib/build-site.mjs';

const files = {
  'content/_index.md': '---\ntitle: Home\n---\nHome body\n',
  'content/docs/_index.md':
    '---\ntitle: Docs\n---\n\n```markmap\n# root\n## leaf\n```\n',
};

test('disabled markmap contributes zero bytes to shipped JS', () => {
  const r = buildSite('markmap-disabled', {
    files,
    // Own title: the default embeds the fixture name, which this very test
    // would then match in the rendered pages.
    title: 'Docsy mind-map absence fixture',
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  for (const page of ['index.html', 'docs/index.html']) {
    assert.doesNotMatch(
      r.publicFile(page),
      /<script[^>]*markmap|markmap[^"]*\.js/i,
      `${page} references no markmap script`,
    );
  }
  const bundle = r.publicFile(
    r.publicFile('index.html').match(/src="\/(js\/main[^"]*\.js)"/)[1],
  );
  assert.doesNotMatch(
    bundle,
    /markmap/i,
    'main bundle carries no markmap code, not even a template-emptied stub',
  );
});

test('legacy-enabled markmap loads same-origin with SRI and warns', () => {
  const r = buildSite('markmap-enabled', {
    files,
    extraConfig: 'params:\n  markmap:\n    enable: true\n',
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.match(
    r.stderr,
    /params\.markmap\.enable is deprecated/,
    'the legacy param draws a deprecation warning',
  );
  const html = r.publicFile('docs/index.html');
  assert.doesNotMatch(
    html,
    /<script[^>]*src="https?:\/\/[^"]*markmap/i,
    'the page is free of cross-origin markmap script tags',
  );
  const vendor = html.match(
    /<script[^>]*src="\/(js\/vendor\/markmap-autoloader[^"]*\.js)"[^>]*>/,
  );
  assert.ok(vendor, 'vendored autoloader is served same-origin');
  assert.match(vendor[0], /integrity="sha/, 'vendored autoloader carries SRI');
  assert.match(
    vendor[0],
    /\bdefer\b/,
    'the autoloader defers past the plugin script that configures it',
  );
  const plugin = html.match(
    /<script[^>]*src="\/(js\/plugins\/markmap[^"]*\.js)"/,
  );
  assert.ok(plugin, 'markmap plugin script tag is emitted');
  const js = r.publicFile(plugin[1]);
  assert.match(js, /autoLoader/, 'plugin configures the autoloader');
});

test('a registry-declared markmap entry supersedes the legacy alias', () => {
  const r = buildSite('markmap-registry', {
    files,
    extraConfig: `params:
  docsy:
    plugins:
      - name: markmap
        options:
          height: 400px
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.doesNotMatch(
    r.stderr,
    /deprecated/,
    'a registry-only setup draws no deprecation warning',
  );
  const html = r.publicFile('docs/index.html');
  const plugin = html.match(
    /<script[^>]*src="\/(js\/plugins\/markmap[^"]*\.js)"/,
  );
  assert.ok(plugin, 'markmap plugin script tag is emitted');
  assert.match(
    r.publicFile(plugin[1]),
    /400px/,
    'the entry options reach the plugin',
  );
  assert.match(
    html,
    /js\/vendor\/markmap-autoloader/,
    'the vendored autoloader rides the registry entry too',
  );
});
