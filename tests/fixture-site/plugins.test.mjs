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

const tabs =
  '{{< tabpane text=true >}}\n' +
  '{{< tab header="One" >}}one{{< /tab >}}\n{{< /tabpane >}}\n';

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
      hello:
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

test('an empty map registers a plugin with defaults', () => {
  const r = buildSite('plugins-empty-map', {
    files: { ...content, 'assets/js/plugins/hello.js': quietJs },
    extraConfig: `params:
  docsy:
    plugins:
      hello: {}
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.match(
    r.publicFile('index.html'),
    /js\/plugins\/hello/,
    'the plugin is emitted',
  );
});

test('a disabled plugin ships zero bytes', () => {
  const r = buildSite('plugins-disabled', {
    files: { ...content, 'assets/js/plugins/hello.js': helloJs },
    extraConfig: `params:
  docsy:
    plugins:
      hello:
        enable: false
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.doesNotMatch(
    r.publicFile('index.html'),
    /js\/plugins\/hello/,
    "the page is free of the disabled plugin's script tag",
  );
  // Theme plugins (click-to-copy) still publish; only the disabled one must be
  // absent.
  const published = readdirSync(path.join(r.site, 'public', 'js', 'plugins'));
  assert.ok(
    published.every((f) => !f.startsWith('hello')),
    'the public tree is free of the disabled plugin',
  );
});

test('a scalar false turns an entry off', () => {
  const r = buildSite('plugins-scalar-false', {
    files: { ...content, 'assets/js/plugins/hello.js': quietJs },
    extraConfig: `params:
  docsy:
    plugins:
      hello: false
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.doesNotMatch(
    r.publicFile('index.html'),
    /js\/plugins\/hello/,
    'the page is free of the plugin turned off by a scalar',
  );
});

test('a quoted "false" scalar entry turns it off', () => {
  const r = buildSite('plugins-scalar-quoted-false', {
    files: { ...content, 'assets/js/plugins/hello.js': quietJs },
    extraConfig: `params:
  docsy:
    plugins:
      hello: 'FALSE'
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.doesNotMatch(
    r.stderr,
    /not a plugin entry/,
    'the build is free of a scalar warning',
  );
  assert.doesNotMatch(
    r.publicFile('index.html'),
    /js\/plugins\/hello/,
    'the page is free of the string-disabled plugin',
  );
});

test('a quoted "false" enable disables the entry', () => {
  const r = buildSite('plugins-quoted-false', {
    files: { ...content, 'assets/js/plugins/hello.js': quietJs },
    extraConfig: `params:
  docsy:
    plugins:
      hello:
        enable: 'False'
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.doesNotMatch(
    r.publicFile('index.html'),
    /js\/plugins\/hello/,
    'the page is free of the string-disabled plugin',
  );
});

test('a non-false scalar entry warns and is skipped', () => {
  const r = buildSite('plugins-scalar-true', {
    files: {
      ...content,
      'content/docs/tabs.md': '---\ntitle: Tabs\n---\n\n' + tabs,
    },
    title: 'Docsy scalar-true fixture',
    extraConfig: `params:
  docsy:
    plugins:
      tabpane-persist: true
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.match(
    r.stderr,
    /Plugin "tabpane-persist": true is not a plugin entry/,
    'the scalar entry is called out in a build warning',
  );
  assert.doesNotMatch(
    r.publicFile('docs/tabs/index.html'),
    /tabpane-persist/,
    'the page is free of the scalar-declared plugin',
  );
});

test('defer is honored on the emitted script tag', () => {
  const r = buildSite('plugins-defer', {
    files: { ...content, 'assets/js/plugins/hello.js': helloJs },
    extraConfig: `params:
  docsy:
    plugins:
      hello:
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

test('emission order is weight, then name', () => {
  const r = buildSite('plugins-order', {
    files: {
      ...content,
      'assets/js/plugins/alpha.js': quietJs,
      'assets/js/plugins/beta.js': quietJs,
      'assets/js/plugins/gamma.js': quietJs,
    },
    extraConfig: `params:
  docsy:
    plugins:
      gamma: { weight: -1 }
      beta: {}
      alpha: {}
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  const html = r.publicFile('index.html');
  const order = [...html.matchAll(/js\/plugins\/(alpha|beta|gamma)/g)].map(
    (m) => m[1],
  );
  assert.deepEqual(
    order,
    ['gamma', 'alpha', 'beta'],
    'lower weight first, then name order',
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
      hello:
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
      hello:
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

test('a shim partial scripts/plugins/NAME_docsy-shim.html decorates the entry', () => {
  const r = buildSite('plugins-shim', {
    files: {
      ...content,
      'assets/js/plugins/hello.js': helloJs,
      'layouts/_partials/scripts/plugins/hello_docsy-shim.html':
        '{{ $entry := .Plugin }}' +
        '{{ if .Page.Site.Params.legacyHelloOff }}' +
        '{{ $entry = merge $entry (dict "enable" false) }}{{ end }}' +
        '{{ return $entry }}',
    },
    extraConfig: `params:
  legacyHelloOff: true
  docsy:
    plugins:
      hello: {}
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.doesNotMatch(
    r.publicFile('index.html'),
    /js\/plugins\/hello/,
    'the page is free of the shim-disabled plugin',
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
      hello: {}
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  const html = r.publicFile('index.html');
  const m = html.match(
    /<link[^>]*href="\/(scss\/plugins\/hello[^"]*\.css)"[^>]*>/,
  );
  assert.ok(m, 'the plugin stylesheet link is emitted');
  assert.match(m[0], /integrity="sha256-/, 'the stylesheet link carries SRI');
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
      no-such-plugin: {}
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
      ghost:
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

test('a scalar params.docsy builds, warns, and turns theme plugins off', () => {
  // A site's own pre-0.18 `docsy` param.
  const r = buildSite('plugins-docsy-scalar', {
    files: {
      ...content,
      'content/docs/tabs.md': '---\ntitle: Tabs\n---\n\n' + tabs,
    },
    title: 'Docsy scalar-docsy fixture',
    extraConfig: `params:
  docsy: legacy-value
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.match(
    r.stderr,
    /params\.docsy must be a map.*theme plugins and their legacy parameters are off.*reserves the key/,
    'the clobbered registry is called out as a reserved key',
  );
  assert.doesNotMatch(
    r.publicFile('docs/tabs/index.html'),
    /js\/plugins/,
    'the page is free of plugin output',
  );
});

test('a null params.docsy.plugins builds and warns', () => {
  // The likeliest edit: the only entry commented out, leaving `plugins:`.
  const r = buildSite('plugins-null-registry', {
    files: content,
    extraConfig: `params:
  docsy:
    plugins:
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.match(
    r.stderr,
    /theme plugins are off/,
    'the clobbered registry is called out in a build warning',
  );
});

test('an empty-map params.docsy.plugins keeps the theme plugins', () => {
  // The remedy the null-registry warning names.
  const r = buildSite('plugins-empty-registry', {
    files: content,
    extraConfig: `params:
  docsy:
    plugins: {}
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.doesNotMatch(
    r.stderr,
    /theme plugins are off/,
    'the empty map draws no registry warning',
  );
  assert.match(
    r.publicFile('index.html'),
    /js\/plugins\/click-to-copy/,
    'a theme plugin is still emitted',
  );
});

test('a list-shaped params.docsy.plugins builds and warns', () => {
  // The pre-release registry shape.
  const r = buildSite('plugins-list-registry', {
    files: { ...content, 'assets/js/plugins/hello.js': helloJs },
    extraConfig: `params:
  docsy:
    plugins: [hello]
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.match(
    r.stderr,
    /theme plugins are off/,
    'the config shape is called out in a build warning',
  );
  assert.doesNotMatch(
    r.publicFile('index.html'),
    /js\/plugins\/hello/,
    'the list-registered plugin is ignored',
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
    /theme plugins are off/,
    'the config shape is called out in a build warning',
  );
});

test('a numeric plugin name resolves its asset', () => {
  // Hugo stringifies map keys, so a `2048:` key must still resolve 2048.js.
  const r = buildSite('plugins-numeric-name', {
    files: { ...content, 'assets/js/plugins/2048.js': quietJs },
    extraConfig: `params:
  docsy:
    plugins:
      2048: {}
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
  const r = buildSite('plugins-name-traversal', {
    files: {
      ...content,
      'assets/js/search.js': "console.log('not-a-plugin');\n",
      'assets/js/plugins/hello.js': helloJs,
    },
    extraConfig: `params:
  docsy:
    plugins:
      ../search: {}
      hello: {}
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
    'well-formed entries still emit',
  );
});

test('plugin output is fingerprinted with SRI in development too', () => {
  const r = buildSite('plugins-dev-sri', {
    files: { ...content, 'assets/js/plugins/hello.js': helloJs },
    args: ['--environment', 'development'],
    extraConfig: `params:
  docsy:
    plugins:
      hello: {}
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  const tag = r
    .publicFile('index.html')
    .match(/<script[^>]*src="\/js\/plugins\/hello\.[0-9a-f]{64}\.js"[^>]*>/);
  assert.ok(tag, 'the development build publishes a hashed path');
  assert.match(tag[0], /integrity="sha256-/, 'the tag carries SRI');
});

test('a site entry for a theme plugin inherits the unset fields', () => {
  // The theme declares click-to-copy with `defer: true`.
  const r = buildSite('plugins-theme-inherit', {
    files: content,
    extraConfig: `params:
  docsy:
    plugins:
      click-to-copy:
        options: { note: kept }
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.match(
    r.publicFile('index.html'),
    /<script[^>]*\bdefer\b[^>]*src="\/js\/plugins\/click-to-copy/,
    'the inherited defer reaches the tag',
  );
});

test('an explicit field overrides the inherited theme default', () => {
  const r = buildSite('plugins-theme-override', {
    files: content,
    extraConfig: `params:
  docsy:
    plugins:
      click-to-copy:
        defer: false
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  const tag = r
    .publicFile('index.html')
    .match(/<script[^>]*src="\/js\/plugins\/click-to-copy[^>]*>/);
  assert.ok(tag, 'the plugin tag is emitted');
  assert.doesNotMatch(
    tag[0],
    /\bdefer\b/,
    'the site value wins over the theme default',
  );
});

test('a scalar false turns a theme plugin off', () => {
  const r = buildSite('plugins-theme-off', {
    files: {
      ...content,
      'content/docs/tabs.md': '---\ntitle: Tabs\n---\n\n' + tabs,
    },
    title: 'Docsy theme-off fixture',
    extraConfig: `params:
  docsy:
    plugins:
      tabpane-persist: false
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.doesNotMatch(
    r.publicFile('docs/tabs/index.html'),
    /tabpane-persist/,
    'the page is free of the theme plugin turned off by the site',
  );
});

test("an entry's name is its key; a name field is ignored", () => {
  const r = buildSite('plugins-name-field', {
    files: {
      ...content,
      'assets/js/plugins/hello.js': quietJs,
      'assets/js/plugins/other.js': "console.log('other');\n",
    },
    extraConfig: `params:
  docsy:
    plugins:
      hello: { name: other }
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.match(
    r.stderr,
    /unknown field "name"/,
    'the name field is called out as unknown',
  );
  const html = r.publicFile('index.html');
  assert.match(html, /js\/plugins\/hello/, 'the keyed plugin is emitted');
  assert.doesNotMatch(
    html,
    /js\/plugins\/other/,
    'the page is free of the redirect target',
  );
});

test('an unknown entry field warns and the entry still applies', () => {
  // The likeliest misspelling: `enabled` for `enable`.
  const r = buildSite('plugins-unknown-field', {
    files: {
      ...content,
      'content/docs/code.md': '---\ntitle: Code\n---\n\n```sh\necho hi\n```\n',
    },
    extraConfig: `params:
  docsy:
    plugins:
      click-to-copy: { enabled: false }
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.match(
    r.stderr,
    /Plugin "click-to-copy": unknown field "enabled"/,
    'the unknown field is called out in a build warning',
  );
  assert.match(
    r.publicFile('docs/code/index.html'),
    /js\/plugins\/click-to-copy/,
    'the plugin keeps its theme defaults',
  );
});

test('a quoted "false" defer means no defer', () => {
  const r = buildSite('plugins-defer-string', {
    files: { ...content, 'assets/js/plugins/hello.js': quietJs },
    extraConfig: `params:
  docsy:
    plugins:
      hello: { defer: 'False' }
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.doesNotMatch(
    r.publicFile('index.html'),
    /<script[^>]*\bdefer\b[^>]*js\/plugins\/hello/,
    'the plugin tag is free of defer',
  );
});

test('a name ending in _docsy-shim is refused as reserved', () => {
  const r = buildSite('plugins-reserved-suffix', {
    files: { ...content, 'assets/js/plugins/hello_docsy-shim.js': quietJs },
    extraConfig: `params:
  docsy:
    plugins:
      hello_docsy-shim: {}
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.match(
    r.stderr,
    /Ignoring plugin "hello_docsy-shim".*reserved/,
    'the reserved suffix is called out in a build warning',
  );
  assert.doesNotMatch(
    r.publicFile('index.html'),
    /js\/plugins\/hello_docsy-shim/,
    'the page is free of the reserved-name plugin',
  );
});

test('non-map options warn and the module gets an empty map', () => {
  // Falsy shapes included: they must not slip through as "none".
  const shapes = { scalar: 'not-a-map', empty: "''", zero: '0', list: '[]' };
  for (const [label, value] of Object.entries(shapes)) {
    const r = buildSite(`plugins-options-${label}`, {
      files: { ...content, 'assets/js/plugins/hello.js': helloJs },
      extraConfig: `params:
  docsy:
    plugins:
      hello: { options: ${value} }
`,
    });
    assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
    assert.match(
      r.stderr,
      /Plugin "hello": options must be a map/,
      `options: ${value} is called out in a build warning`,
    );
    const html = r.publicFile('index.html');
    assert.match(
      html,
      /js\/plugins\/hello/,
      `options: ${value} keeps the plugin`,
    );
    const js = r.publicFile(
      html.match(/src="\/(js\/plugins\/hello[^"]*\.js)"/)[1],
    );
    assert.doesNotMatch(js, /not-a-map/, 'the module is free of the scalar');
  }
});

test('null options mean none, without a warning', () => {
  const r = buildSite('plugins-options-null', {
    files: { ...content, 'assets/js/plugins/hello.js': helloJs },
    extraConfig: `params:
  docsy:
    plugins:
      hello:
        options:
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.doesNotMatch(
    r.stderr,
    /options must be a map/,
    'the build is free of an options warning',
  );
  assert.match(
    r.publicFile('index.html'),
    /js\/plugins\/hello/,
    'the plugin is emitted',
  );
});

test('a boolean pageGate means no gate', () => {
  for (const value of ['false', 'true']) {
    const r = buildSite(`plugins-gate-${value}`, {
      files: { ...content, 'assets/js/plugins/hello.js': quietJs },
      extraConfig: `params:
  docsy:
    plugins:
      hello: { pageGate: ${value} }
`,
    });
    assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
    assert.match(
      r.publicFile('index.html'),
      /js\/plugins\/hello/,
      `pageGate: ${value} loads the plugin on an unflagged page`,
    );
  }
});
