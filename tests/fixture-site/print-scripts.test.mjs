// Page-gated scripts reach section print output through the descendant flag
// merge (print/page-flags.html).

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

test('a no_print section contributes no page-gate flags', () => {
  // print/render.html prunes no_print subtrees wholly; the flag merge must
  // prune the same way, or unprinted content loads its scripts anyway.
  const r = buildSite('print-no-print-flags', {
    files: {
      'content/_index.md': '---\ntitle: Home\n---\nHome body\n',
      'content/docs/_index.md': '---\ntitle: Docs\n---\nDocs body\n',
      'content/docs/plain.md': '---\ntitle: Plain\n---\nNo tabs here\n',
      'content/docs/hidden/_index.md':
        '---\ntitle: Hidden\nno_print: true\n---\nHidden section\n',
      'content/docs/hidden/tabs.md':
        '---\ntitle: Tabs\n---\n\n{{< tabpane text=true >}}\n' +
        '{{< tab header="One" >}}one{{< /tab >}}\n{{< /tabpane >}}\n',
    },
    title: 'Docsy print-pruning fixture',
    extraConfig: 'outputs:\n  section: [HTML, print]\n',
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.doesNotMatch(
    r.publicFile('_print/docs/index.html'),
    /tabpane-persist/,
    'the print page is free of scripts gated by pruned content',
  );
});
