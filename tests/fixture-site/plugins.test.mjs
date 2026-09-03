// Loop-contract tests for params.docsy.plugins. Contract:
// https://www.docsy.dev/project/implementation/script-loading/
// Net inventory and rationale:
// https://www.docsy.dev/project/quality/script-loading/

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { buildSite } from './lib/build-site.mjs';

const content = {
  'content/_index.md': '---\ntitle: Home\n---\nHome body\n',
  'content/docs/_index.md': '---\ntitle: Docs\n---\nDocs body\n',
};

const helloJs = `import * as params from '@params';
console.log('hello-plugin', params.greeting);
`;

const quietJs = `console.log('quiet-plugin');
`;

test('an enabled plugin is built and emitted, with options as @params', () => {
  const r = buildSite('plugins-loop', {
    files: {
      ...content,
      'assets/js/plugins/hello.js': helloJs,
      'assets/js/plugins/quiet.js': quietJs,
    },
    extraConfig: `params:
  docsy:
    plugins:
      - name: hello
        options:
          greeting: bonjour
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  const html = r.publicFile('index.html');
  const m = html.match(/<script[^>]*src="\/(js\/plugins\/hello[^"]*\.js)"/);
  assert.ok(m, 'hello plugin script tag is emitted');
  const js = r.publicFile(m[1]);
  assert.match(js, /bonjour/, 'plugin options reach the module via @params');

  // quiet.js exists in the plugins dir but has no registry entry.
  assert.doesNotMatch(html, /quiet/, 'the page is free of the unlisted plugin');
  // Published output is fingerprinted, so a fixed-path read proves nothing.
  const published = readdirSync(path.join(r.site, 'public', 'js', 'plugins'));
  assert.ok(
    published.every((f) => !f.startsWith('quiet')),
    'published plugin output is free of the unlisted plugin',
  );
});

test('a disabled plugin ships zero bytes', () => {
  const r = buildSite('plugins-disabled', {
    files: { ...content, 'assets/js/plugins/hello.js': helloJs },
    extraConfig: `params:
  docsy:
    plugins:
      - name: hello
        enable: false
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.doesNotMatch(
    r.publicFile('index.html'),
    /js\/plugins\/hello/,
    "the page is free of the disabled plugin's script tag",
  );
  assert.ok(
    !existsSync(path.join(r.site, 'public', 'js', 'plugins')),
    'the public tree is free of plugin output',
  );
});

test('defer is honored on the emitted script tag', () => {
  const r = buildSite('plugins-defer', {
    files: { ...content, 'assets/js/plugins/hello.js': helloJs },
    extraConfig: `params:
  docsy:
    plugins:
      - name: hello
        defer: true
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.match(
    r.publicFile('index.html'),
    /<script[^>]*\bdefer\b[^>]*src="\/js\/plugins\/hello/,
    'plugin script tag carries defer',
  );
});

test('a pageGate plugin is emitted only where its Store flag is set', () => {
  const r = buildSite('plugins-gate', {
    files: {
      ...content,
      // The fixture shortcode sets the Store flag, standing in for a
      // theme shortcode/render hook that marks feature usage.
      'layouts/_shortcodes/set-hello-flag.html':
        '{{ .Page.Store.Set "hasHello" true }}',
      'content/docs/uses.md':
        '---\ntitle: Uses\n---\n{{< set-hello-flag >}}\nUses the feature\n',
      'assets/js/plugins/hello.js': helloJs,
    },
    extraConfig: `params:
  docsy:
    plugins:
      - name: hello
        pageGate: hasHello
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.match(
    r.publicFile('docs/uses/index.html'),
    /js\/plugins\/hello/,
    'gated plugin loads on the page that sets the flag',
  );
  assert.doesNotMatch(
    r.publicFile('index.html'),
    /js\/plugins\/hello/,
    'pages without the flag are free of the gated plugin',
  );
});

test('a companion partial scripts/plugins/NAME.html is emitted with the plugin', () => {
  const r = buildSite('plugins-companion-partial', {
    files: {
      ...content,
      'assets/js/plugins/hello.js': helloJs,
      'layouts/_partials/scripts/plugins/hello.html':
        '<div data-hello-companion="{{ .Page.Title }}"' +
        ' data-hello-greeting="{{ .Plugin.options.greeting }}"></div>\n',
    },
    extraConfig: `params:
  docsy:
    plugins:
      - name: hello
        options:
          greeting: bonjour
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  const html = r.publicFile('index.html');
  assert.match(
    html,
    /data-hello-companion="Home"/,
    'the companion partial renders with the page context',
  );
  assert.match(
    html,
    /data-hello-greeting="bonjour"/,
    "the companion partial sees the plugin entry's options",
  );
  assert.ok(
    html.indexOf('data-hello-companion') < html.indexOf('js/plugins/hello'),
    'the companion partial precedes the plugin script tag',
  );
});

test('companion styles scss/plugins/NAME.scss ship through the CSS pipeline', () => {
  const r = buildSite('plugins-companion-css', {
    files: {
      ...content,
      'assets/js/plugins/hello.js': helloJs,
      'assets/scss/plugins/hello.scss':
        '.td-hello { &-inner { color: red; } }\n',
    },
    extraConfig: `params:
  docsy:
    plugins:
      - name: hello
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  const html = r.publicFile('index.html');
  const m = html.match(/<link[^>]*href="\/(scss\/plugins\/hello[^"]*\.css)"/);
  assert.ok(m, 'the plugin stylesheet link is emitted');
  assert.ok(
    html.indexOf('scss/plugins/hello') < html.indexOf('js/plugins/hello'),
    'the stylesheet link precedes the plugin script tag',
  );
  const css = r.publicFile(m[1]);
  assert.match(
    css,
    /\.td-hello-inner/,
    'the SCSS is compiled (nesting resolved)',
  );
  assert.doesNotMatch(css, /\n.*\n.*\n/, 'the stylesheet is minified');
});

test('a plugin with no matching asset warns but does not fail the build', () => {
  const r = buildSite('plugins-missing', {
    files: content,
    extraConfig: `params:
  docsy:
    plugins:
      - name: no-such-plugin
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.match(
    r.stderr,
    /no-such-plugin/,
    'the missing plugin is called out in a build warning',
  );
});

test('a gated missing plugin still warns', () => {
  // A config typo should surface even when no page ever sets the gate flag.
  const r = buildSite('plugins-gated-missing', {
    files: content,
    extraConfig: `params:
  docsy:
    plugins:
      - name: ghost
        pageGate: neverSet
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.match(
    r.stderr,
    /ghost/,
    'the missing gated plugin is called out in a build warning',
  );
});

test('a site with a scalar params.docsy still builds', () => {
  // The docsy namespace is new; a site already carrying a scalar there
  // must keep building, with the registry treated as empty.
  const r = buildSite('plugins-docsy-scalar', {
    files: { ...content, 'assets/js/plugins/hello.js': helloJs },
    extraConfig: `params:
  docsy: legacy-value
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.doesNotMatch(
    r.publicFile('index.html'),
    /js\/plugins/,
    'the page is free of plugin output',
  );
});

test('a scalar params.docsy.plugins builds and warns', () => {
  const r = buildSite('plugins-scalar-registry', {
    files: content,
    extraConfig: `params:
  docsy:
    plugins: oops
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.match(
    r.stderr,
    /must be a list/,
    'the config shape is called out in a build warning',
  );
});

test('a falsy scalar params.docsy.plugins also warns', () => {
  const r = buildSite('plugins-falsy-registry', {
    files: content,
    extraConfig: `params:
  docsy:
    plugins: false
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.match(
    r.stderr,
    /must be a list/,
    'the config shape is called out in a build warning',
  );
});

test('a bare-name registry entry is plugin shorthand', () => {
  const r = buildSite('plugins-shorthand', {
    files: { ...content, 'assets/js/plugins/hello.js': quietJs },
    extraConfig: `params:
  docsy:
    plugins: [hello]
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.match(
    r.publicFile('index.html'),
    /js\/plugins\/hello/,
    'the shorthand-registered plugin is emitted',
  );
});

test('a numeric plugin name resolves its asset', () => {
  // YAML auto-types `name: 2048` to an int.
  const r = buildSite('plugins-numeric-name', {
    files: { ...content, 'assets/js/plugins/2048.js': quietJs },
    extraConfig: `params:
  docsy:
    plugins:
      - name: 2048
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.match(
    r.publicFile('index.html'),
    /js\/plugins\/2048/,
    'the numeric-named plugin is emitted',
  );
});

test('a nameless registry entry is skipped with a warning', () => {
  const r = buildSite('plugins-nameless', {
    files: { ...content, 'assets/js/plugins/hello.js': helloJs },
    extraConfig: `params:
  docsy:
    plugins:
      - options:
          greeting: bonjour
      - name: hello
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.match(
    r.stderr,
    /has no name/,
    'the nameless entry is called out in a build warning',
  );
  assert.match(
    r.publicFile('index.html'),
    /js\/plugins\/hello/,
    'later well-formed entries still emit',
  );
});

test('duplicate registrations publish distinct builds, in development too', () => {
  // Same source, different options: the builds must not share one
  // published path (the always-fingerprint rule; implementation page).
  const r = buildSite('plugins-duplicates', {
    files: { ...content, 'assets/js/plugins/hello.js': helloJs },
    args: ['--environment', 'development'],
    extraConfig: `params:
  docsy:
    plugins:
      - name: hello
        options:
          greeting: premiere
      - name: hello
        options:
          greeting: seconde
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  const html = r.publicFile('index.html');
  const srcs = [
    ...html.matchAll(/<script[^>]*src="\/(js\/plugins\/hello[^"]*\.js)"/g),
  ].map((m) => m[1]);
  assert.equal(srcs.length, 2, 'each registration emits its own script tag');
  assert.notEqual(srcs[0], srcs[1], 'the two builds publish distinct paths');
  assert.match(
    r.publicFile(srcs[0]),
    /premiere/,
    "the first entry's options reach its build",
  );
  assert.match(
    r.publicFile(srcs[1]),
    /seconde/,
    "the second entry's options reach its build",
  );
});
