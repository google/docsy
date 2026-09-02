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
    // static files (deflate, prism), the markmap partial's CDN tag,
    // Algolia's CDN + config tags, and offline search replacing the
    // default search script. Offline-safe: tags are emitted, never
    // fetched, at build time.
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
  search:
    algolia:
      appId: test-app-id
      indexName: test-index
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

// Whitespace-insensitive comparison form: collapse runs, trim. Fingerprint
// integrity values (sha256, content-addressed like the hashed names) are
// stripped so region goldens don't break on every bundle change; bundle
// bytes are pinned byte-exactly by the separate bundle golden. CDN SRI
// hashes (sha384/sha512) stay compared: the goldens are their pin.
export const normalize = (s) =>
  s
    .replace(/\.min\.[0-9a-f]{64}\.js/g, '.min.js')
    .replace(/integrity="sha256-[^"]*"/g, 'integrity=""')
    .replace(/\s+/g, ' ')
    .trim();

// The main bundle's public path, resolved from the page markup (the name is
// fingerprinted in production builds).
export function mainBundlePath(html) {
  const m = html.match(/src="\/(js\/main[^"]*\.js)"/);
  if (!m) throw new Error('main bundle script tag is present');
  return m[1];
}
