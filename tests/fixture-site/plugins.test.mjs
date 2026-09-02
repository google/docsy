// Plugin registry + loop: params.docsy.plugins entries drive the emission of
// plugins from assets/js/plugins/. Pins the loop's contract: an enabled
// plugin is built (js.Build) and emitted; options reach the module as
// @params; a disabled or unlisted plugin ships zero bytes; defer is honored;
// a pageGate'd plugin is emitted only on pages whose Store flag is set; a
// same-named project file shadows the theme's; a companion partial
// (scripts/plugins/NAME.html) and companion styles (scss/plugins/NAME.scss)
// are emitted with the plugin. Theme-plugin shadowing is pinned when the
// first theme plugin ships (no theme plugin exists to shadow yet).

import { test } from 'node:test';
import assert from 'node:assert/strict';
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
  assert.doesNotMatch(html, /quiet/, 'unlisted plugin is not emitted');
  assert.throws(
    () => r.publicFile('js/plugins/quiet.js'),
    'unlisted plugin publishes no output',
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
    'disabled plugin has no script tag',
  );
  assert.throws(
    () => r.publicFile('js/plugins/hello.js'),
    'disabled plugin publishes no output',
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
    'gated plugin is absent from pages without the flag',
  );
});

test('a companion partial scripts/plugins/NAME.html is emitted with the plugin', () => {
  const r = buildSite('plugins-companion-partial', {
    files: {
      ...content,
      'assets/js/plugins/hello.js': helloJs,
      'layouts/_partials/scripts/plugins/hello.html':
        '<div data-hello-companion="{{ .Page.Title }}"></div>\n',
    },
    extraConfig: `params:
  docsy:
    plugins:
      - name: hello
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  const html = r.publicFile('index.html');
  assert.match(
    html,
    /data-hello-companion="Home"/,
    'the companion partial renders with the page context',
  );
  assert.ok(
    html.indexOf('js/plugins/hello') < html.indexOf('data-hello-companion'),
    'the companion partial follows the plugin script tag',
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
  const css = r.publicFile(m[1]);
  assert.match(css, /\.td-hello-inner/, 'the SCSS is compiled (nesting resolved)');
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
