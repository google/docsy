// Print output aggregates descendant pages into one page, but page-gated
// scripts key on Store flags set on each child. The print layouts merge
// descendant flags onto the print page so gated scripts (plugin pageGate,
// Mermaid, KaTeX) reach /_print/ output.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildSite } from './lib/build-site.mjs';

test('page-gated plugins reach section print output', () => {
  const r = buildSite('print-gated-scripts', {
    files: {
      'content/_index.md': '---\ntitle: Home\n---\nHome body\n',
      'content/docs/_index.md': '---\ntitle: Docs\n---\nDocs body\n',
      'content/docs/tabs.md':
        '---\ntitle: Tabs\n---\n\n{{< tabpane text=true >}}\n' +
        '{{< tab header="One" >}}one{{< /tab >}}\n{{< /tabpane >}}\n',
      'content/docs/map.md':
        '---\ntitle: Map\n---\n\n```markmap\n# root\n## leaf\n```\n',
      'assets/js/plugins/hello.js': "console.log('hello');\n",
    },
    title: 'Docsy print-gating fixture',
    extraConfig: `outputs:
  section: [HTML, print]
params:
  docsy:
    plugins: [markmap]
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  const html = r.publicFile('_print/docs/index.html');
  assert.match(
    html,
    /js\/plugins\/tabpane-persist/,
    'the print page carries the persistence script for its tabbed child',
  );
  assert.match(
    html,
    /js\/plugins\/markmap/,
    'the print page carries the markmap plugin for its markmap child',
  );
  assert.match(
    html,
    /js\/vendor\/markmap-autoloader/,
    'the print page carries the vendored autoloader',
  );
});
