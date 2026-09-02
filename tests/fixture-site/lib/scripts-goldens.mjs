// Shared spec for the scripts.html goldens: fixture builds, the script-region
// extractor, and whitespace normalization. Consumed by scripts-golden.test.mjs
// (assert) and update-scripts-goldens.mjs (refresh). Configs stay offline-safe:
// features whose partials call resources.GetRemote (mermaid, katex) are not
// enabled here.

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildSite } from './build-site.mjs';

export const goldenDir = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
  'scripts-goldens',
);

const files = {
  'content/_index.md': '---\ntitle: Home\n---\nHome body\n',
  'content/docs/_index.md': '---\ntitle: Docs\n---\nDocs body\n',
  'content/docs/tabs.md':
    '---\ntitle: Tabs\n---\n\n{{< tabpane text=true >}}\n' +
    '{{< tab header="One" >}}one{{< /tab >}}\n' +
    '{{< tab header="Two" >}}two{{< /tab >}}\n' +
    '{{< /tabpane >}}\n',
};

const configs = [
  { name: 'defaults', extraConfig: '' },
  {
    // Every offline-safe loading mechanism in scripts.html lit at once:
    // template-wrapped bundle members (markmap, plantuml, drawio), raw
    // static files (deflate, prism), the markmap partial's CDN tag, and
    // offline search replacing the default search script.
    name: 'featureful',
    extraConfig: `params:
  offlineSearch: true
  prism_syntax_highlighting: true
  markmap:
    enable: true
  plantuml:
    enable: true
  drawio:
    enable: true
`,
  },
];

export function buildScriptsFixtures() {
  return configs.map(({ name, extraConfig }) => ({
    name,
    build: buildSite(`scripts-golden-${name}`, {
      files,
      title: 'Docsy scripts-golden fixture',
      extraConfig,
    }),
    pages: ['index.html', 'docs/tabs/index.html'],
  }));
}

// The script region: everything from the footer's end through </body>.
export function extractScriptRegion(html) {
  const start = html.indexOf('</footer>');
  const end = html.indexOf('</body>');
  if (start < 0 || end < 0) return '';
  return html.slice(start + '</footer>'.length, end);
}

// Whitespace-insensitive comparison form: collapse runs, trim. Fingerprinted
// asset names are content-addressed, so goldens would break twice per change
// (name + content) — strip the hash segment; content equality still holds
// through the separate bundle golden.
export const normalize = (s) =>
  s
    .replace(/\.min\.[0-9a-f]{64}\.js/g, '.min.js')
    .replace(/\s+/g, ' ')
    .trim();

// The main bundle's public path, resolved from the page markup (the name is
// fingerprinted in production builds).
export function mainBundlePath(html) {
  const m = html.match(/src="\/(js\/main[^"]*\.js)"/);
  if (!m) throw new Error('main bundle script tag is present');
  return m[1];
}
