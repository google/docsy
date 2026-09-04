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
      'content/docs/diagram.md':
        '---\ntitle: Diagram\n---\n{{< set-flag hasmermaid >}}\nDiagram body\n',
      // The real mermaid partial fetches remotely; a marker override pins the
      // dispatch, as in scripts-dispatch.test.mjs.
      'layouts/_shortcodes/set-flag.html':
        '{{ .Page.Store.Set (.Get 0) true }}',
      'layouts/_partials/scripts/mermaid.html':
        '<div data-dispatch="mermaid"></div>\n',
      'assets/js/plugins/hello.js': "console.log('hello');\n",
    },
    title: 'Docsy print-gating fixture',
    extraConfig: `outputs:
  section: [HTML, print]
params:
  docsy:
    plugins:
      markmap: { enable: true }
`,
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  const html = r.publicFile('_print/docs/index.html');
  assert.match(
    html,
    /data-dispatch="mermaid"/,
    "the print page dispatches its child's Mermaid partial",
  );
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

test('the flag merge copies page-gate flags only', () => {
  // .Page.Store is a general scratchpad (the theme keeps a readfile counter
  // there); only gate flags may cross from descendants to the print page.
  const r = buildSite('print-flags-only', {
    files: {
      'content/_index.md': '---\ntitle: Home\n---\nHome body\n',
      'content/docs/_index.md': '---\ntitle: Docs\n---\nDocs body\n',
      'content/docs/child.md':
        '---\ntitle: Child\n---\n{{< set-store owner child >}}\nChild body\n',
      'layouts/_shortcodes/set-store.html':
        '{{ .Page.Store.Set (.Get 0) (.Get 1) }}',
      'layouts/_partials/hooks/body-end.html':
        '<div data-owner="{{ .Store.Get "owner" | default "unset" }}"></div>\n',
    },
    title: 'Docsy print-flags-only fixture',
    extraConfig: 'outputs:\n  section: [HTML, print]\n',
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
  assert.match(
    r.publicFile('_print/docs/index.html'),
    /data-owner="unset"/,
    "the print page's Store is free of a child's non-flag value",
  );
});
