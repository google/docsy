// tabpane-persist as a theme plugin, on every page as before 0.18; why it isn't
// gated: https://www.docsy.dev/project/design/script-loading/#gating-decisions

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildSite } from './lib/build-site.mjs';

const tabs =
  '{{< tabpane text=true >}}\n' +
  '{{< tab header="One" >}}one{{< /tab >}}\n' +
  '{{< /tabpane >}}\n';

const files = {
  'content/_index.md': '---\ntitle: Home\n---\nHome body\n',
  'content/docs/_index.md': '---\ntitle: Docs\n---\nDocs body\n',
  'content/docs/aaa-tabs.md': '---\ntitle: Tabs first\n---\n\n' + tabs,
  'content/docs/mmm-plain.md': '---\ntitle: Plain\n---\nNo tabs here\n',
  'content/docs/zzz-tabs.md': '---\ntitle: Tabs last\n---\n\n' + tabs,
};
const allPages = [
  'index.html',
  'docs/index.html',
  'docs/aaa-tabs/index.html',
  'docs/mmm-plain/index.html',
  'docs/zzz-tabs/index.html',
];
const scriptRe = /<script[^>]*src="\/(js\/plugins\/tabpane-persist[^"]*\.js)"/;
test('tabpane-persist ships on every page by default, fingerprinted', () => {
  const r = buildSite('tabpane-persist-default', {
    files,
    title: 'Docsy tab-persistence fixture',
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  for (const page of allPages) {
    const m = r.publicFile(page).match(scriptRe);
    assert.ok(m, `${page} loads the tabpane-persist plugin`);
    assert.match(
      r.publicFile(m[1]),
      /td-tp-persist/,
      'the emitted plugin is the persistence script',
    );
  }
});

test('a project plugin shadows the theme plugin of the same name', () => {
  // Union FS: the project file must win.
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

test('persist="disabled" tabs carry no persistence attributes', () => {
  const r = buildSite('tabpane-persist-optout', {
    files: {
      'content/_index.md': '---\ntitle: Home\n---\nHome body\n',
      'content/docs/off.md':
        '---\ntitle: Off\n---\n\n{{< tabpane text=true persist="disabled" >}}\n' +
        '{{< tab header="One" >}}one{{< /tab >}}\n{{< /tabpane >}}\n',
    },
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.doesNotMatch(
    r.publicFile('docs/off/index.html'),
    /data-td-tp-persist/,
    'the opted-out tabs carry no persistence attributes',
  );
});
