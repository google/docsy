// Markmap as a plugin: zero bytes when disabled, vendored same-origin
// autoloader (no raw CDN tag), options via @params, legacy aliasing. Needs
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
      `${page} is free of markmap scripts`,
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

test('legacy-enabled markmap keeps site-wide loading and warns', () => {
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
  assert.match(
    r.publicFile('index.html'),
    /js\/plugins\/markmap/,
    'the legacy alias keeps pre-0.18 site-wide loading, markmap content or not',
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
  assert.doesNotMatch(
    r.publicFile('index.html'),
    /markmap[^"]*\.js|js\/vendor/,
    'the registry entry is page-gated: no markmap scripts without markmap content',
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

test('a path-bearing markmap.version fails the build', () => {
  // A path-bearing version would vendor an arbitrary registry file as JS.
  const r = buildSite('markmap-version-path', {
    files,
    extraConfig: `params:
  markmap:
    enable: true
    version: 0.18.12/package.json
`,
  });
  assert.notEqual(r.status, 0, 'hugo build fails');
  assert.match(
    r.stderr,
    /markmap\.version/,
    'the bad version is called out in the build error',
  );
});

test('defer on a markmap entry is ignored, with a warning', () => {
  // The plugin script must run before the deferred autoloader it configures.
  const r = buildSite('markmap-defer', {
    files,
    extraConfig: `params:
  docsy:
    plugins:
      - name: markmap
        defer: true
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.match(
    r.stderr,
    /docsy-markmap-defer/,
    'the defer request draws a warning',
  );
  const plugin = r
    .publicFile('docs/index.html')
    .match(/<script[^>]*src="\/js\/plugins\/markmap[^"]*"[^>]*>/);
  assert.ok(plugin, 'markmap plugin script tag is emitted');
  assert.doesNotMatch(
    plugin[0],
    /\bdefer\b/,
    'the plugin script stays synchronous, ahead of the deferred autoloader',
  );
});

test('duplicate markmap entries emit one vendored autoloader', () => {
  const r = buildSite('markmap-duplicate', {
    files,
    extraConfig: `params:
  docsy:
    plugins: [markmap, markmap]
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  const html = r.publicFile('docs/index.html');
  const vendors = html.match(/js\/vendor\/markmap-autoloader/g) ?? [];
  assert.equal(vendors.length, 1, 'the vendored autoloader is emitted once');
  const plugins = html.match(/js\/plugins\/markmap/g) ?? [];
  assert.equal(plugins.length, 1, 'the plugin script is emitted once');
});

test('a leftover legacy param beside a registry entry warns', () => {
  // The registry entry supersedes the alias and is page-gated; a site that
  // copied the guide but kept params.markmap.enable must hear about it.
  const r = buildSite('markmap-legacy-and-registry', {
    files,
    extraConfig: `params:
  markmap:
    enable: true
  docsy:
    plugins: [markmap]
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.match(
    r.stderr,
    /params\.markmap\.enable is superseded/,
    'the superseded legacy param draws a warning',
  );
});
