// Loop-contract tests for params.docsy.plugins. Contract:
// https://www.docsy.dev/project/implementation/script-loading/
// Net inventory and rationale:
// https://www.docsy.dev/project/quality/script-loading/

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync } from 'node:fs';
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
  // Theme-default plugins (click-to-copy) still publish; only the disabled
  // one must be absent.
  const published = readdirSync(path.join(r.site, 'public', 'js', 'plugins'));
  assert.ok(
    published.every((f) => !f.startsWith('hello')),
    'the public tree is free of the disabled plugin',
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
    /js\/plugins\/hello/,
    'the page is free of registry-declared plugin output',
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

test('a path-traversing plugin name is rejected with a warning', () => {
  // Names address assets and partials by path; anything outside the
  // [A-Za-z0-9_-] allowlist is refused before path construction.
  const r = buildSite('plugins-name-traversal', {
    files: {
      ...content,
      'assets/js/search.js': "console.log('not-a-plugin');\n",
      'assets/js/plugins/hello.js': helloJs,
    },
    extraConfig: `params:
  docsy:
    plugins:
      - name: ../search
      - name: hello
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.match(
    r.stderr,
    /\.\.\/search/,
    'the invalid name is called out in a build warning',
  );
  assert.doesNotMatch(
    r.publicFile('index.html'),
    /not-a-plugin|js\/search/,
    'the page is free of the traversal-addressed script',
  );
  assert.match(
    r.publicFile('index.html'),
    /js\/plugins\/hello/,
    'later well-formed entries still emit',
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

// --- Theme-default entries: redeclare and legacy-gate semantics ---

const tabs =
  '{{< tabpane text=true >}}\n' +
  '{{< tab header="One" >}}one{{< /tab >}}\n{{< /tabpane >}}\n';

test('a redeclared theme default inherits its page gate', () => {
  // A site redeclaring tabpane-persist (e.g. to reorder it) must not lose
  // the hasTabs gate it never set.
  const r = buildSite('plugins-redeclare-gate', {
    files: {
      ...content,
      'content/docs/tabs.md': '---\ntitle: Tabs\n---\n\n' + tabs,
    },
    title: 'Docsy redeclare fixture',
    extraConfig: `params:
  docsy:
    plugins: [tabpane-persist]
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.match(
    r.publicFile('docs/tabs/index.html'),
    /js\/plugins\/tabpane-persist/,
    'the redeclared plugin loads on pages using tabs',
  );
  assert.doesNotMatch(
    r.publicFile('index.html'),
    /tabpane-persist/,
    'pages without tabs stay free of the redeclared plugin',
  );
});

test('a redeclared theme default inherits defer', () => {
  const r = buildSite('plugins-redeclare-defer', {
    files: content,
    title: 'Docsy redeclare-defer fixture',
    extraConfig: `params:
  docsy:
    plugins:
      - name: click-to-copy
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.match(
    r.publicFile('index.html'),
    /<script[^>]*\bdefer\b[^>]*src="\/js\/plugins\/click-to-copy/,
    'the redeclared plugin keeps the deferred tag',
  );
});

test('an explicit field overrides the inherited default', () => {
  const r = buildSite('plugins-redeclare-override', {
    files: {
      ...content,
      'content/docs/tabs.md': '---\ntitle: Tabs\n---\n\n' + tabs,
    },
    title: 'Docsy redeclare-override fixture',
    extraConfig: `params:
  docsy:
    plugins:
      - name: tabpane-persist
        pageGate: ''
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.match(
    r.publicFile('index.html'),
    /js\/plugins\/tabpane-persist/,
    'an explicitly cleared page gate ships the plugin site-wide',
  );
});

test('click-to-copy registered alongside prism draws a warning', () => {
  // The legacy prism/copy-button exclusivity is advisory once a site
  // registers the plugin explicitly: emit both, but say so.
  const r = buildSite('plugins-c2c-prism-conflict', {
    files: content,
    title: 'Docsy prism-conflict fixture',
    extraConfig: `params:
  prism_syntax_highlighting: true
  docsy:
    plugins:
      - name: click-to-copy
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.match(
    r.stderr,
    /click-to-copy.*prism|prism.*click-to-copy/i,
    'the conflicting registration is called out in a build warning',
  );
});

test('a quoted "false" enable disables the entry', () => {
  // YAML strings are truthy in Go templates; a site writing enable: "false"
  // means off, not on.
  const r = buildSite('plugins-quoted-false', {
    files: { ...content, 'assets/js/plugins/hello.js': quietJs },
    extraConfig: `params:
  docsy:
    plugins:
      - name: hello
        enable: 'false'
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.doesNotMatch(
    r.publicFile('index.html'),
    /js\/plugins\/hello/,
    'the page is free of the string-disabled plugin',
  );
});

test('a duplicated registry name draws a warning', () => {
  const r = buildSite('plugins-duplicate-warn', {
    files: { ...content, 'assets/js/plugins/hello.js': quietJs },
    extraConfig: `params:
  docsy:
    plugins:
      - name: hello
      - name: hello
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.match(
    r.stderr,
    /hello.*more than once/i,
    'the duplicate name is called out in a build warning',
  );
});

test('a disabled click-to-copy entry draws no prism conflict warning', () => {
  const r = buildSite('plugins-c2c-prism-disabled', {
    files: content,
    title: 'Docsy prism-no-conflict fixture',
    extraConfig: `params:
  prism_syntax_highlighting: true
  docsy:
    plugins:
      - name: click-to-copy
        enable: false
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.doesNotMatch(
    r.stderr,
    /docsy-c2c-prism/,
    'no conflict warning for an entry that never emits',
  );
});

test('a falsy numeric name still resolves its asset', () => {
  // YAML auto-types `name: 0`; presence, not truthiness, decides.
  const r = buildSite('plugins-zero-name', {
    files: { ...content, 'assets/js/plugins/0.js': quietJs },
    extraConfig: `params:
  docsy:
    plugins:
      - name: 0
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.match(
    r.publicFile('index.html'),
    /js\/plugins\/0\./,
    'the zero-named plugin is emitted',
  );
});
