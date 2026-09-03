// tabpane-persist as a page-gated plugin: the tabpane shortcode sets a Store
// flag; the script (previously a raw static/ file on every page) is emitted
// only on pages using tabs, fingerprinted. Also pins the partialCached trap:
// a page with no tabs must not inherit the script from a cached scripts.html
// render of a tabbed page, and vice versa.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildSite } from './lib/build-site.mjs';

const tabs =
  '{{< tabpane text=true >}}\n' +
  '{{< tab header="One" >}}one{{< /tab >}}\n' +
  '{{< /tabpane >}}\n';

const files = {
  // The tabbed page sorts after the plain pages in most render orders and
  // before them in others; both directions of the cache trap are covered by
  // asserting all pages.
  'content/_index.md': '---\ntitle: Home\n---\nHome body\n',
  'content/docs/_index.md': '---\ntitle: Docs\n---\nDocs body\n',
  'content/docs/aaa-tabs.md': '---\ntitle: Tabs first\n---\n\n' + tabs,
  'content/docs/mmm-plain.md': '---\ntitle: Plain\n---\nNo tabs here\n',
  'content/docs/zzz-tabs.md': '---\ntitle: Tabs last\n---\n\n' + tabs,
};

test('tabpane-persist ships only on pages using tabs, fingerprinted', () => {
  const r = buildSite('tabpane-persist-gate', {
    files,
    // Own title: the default embeds the fixture name, which this very test
    // would then match in the rendered pages.
    title: 'Docsy tab-persistence fixture',
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);

  const scriptRe =
    /<script[^>]*src="\/(js\/plugins\/tabpane-persist[^"]*\.js)"/;
  for (const page of ['docs/aaa-tabs/index.html', 'docs/zzz-tabs/index.html']) {
    const m = r.publicFile(page).match(scriptRe);
    assert.ok(m, `${page} loads the tabpane-persist plugin`);
    assert.match(
      r.publicFile(m[1]),
      /td-tp-persist/,
      'the emitted plugin is the persistence script',
    );
  }
  for (const page of [
    'index.html',
    'docs/index.html',
    'docs/mmm-plain/index.html',
  ]) {
    assert.doesNotMatch(
      r.publicFile(page),
      /tabpane-persist/,
      `${page} carries no tabpane-persist script`,
    );
  }
});

test('a project plugin shadows the theme plugin of the same name', () => {
  // tabpane-persist is a theme-shipped plugin; the fixture site provides its
  // own file under the same name. Union FS: the project file must win.
  const r = buildSite('tabpane-persist-shadow', {
    files: {
      ...files,
      'assets/js/plugins/tabpane-persist.js':
        "console.log('project-shadow-wins');\n",
    },
    title: 'Docsy shadowing fixture',
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  const html = r.publicFile('docs/aaa-tabs/index.html');
  const m = html.match(
    /<script[^>]*src="\/(js\/plugins\/tabpane-persist[^"]*\.js)"/,
  );
  assert.ok(m, 'tabpane-persist plugin script tag is emitted');
  const js = r.publicFile(m[1]);
  assert.match(
    js,
    /project-shadow-wins/,
    'the project file shadows the theme plugin',
  );
  assert.doesNotMatch(
    js,
    /td-tp-persist/,
    'the theme implementation is fully replaced',
  );
});
