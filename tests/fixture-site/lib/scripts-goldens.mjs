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
// bytes are pinned byte-exactly by the byte goldens. CDN SRI hashes
// (sha384/sha512) stay compared: the goldens are their pin.
export const normalize = (s) =>
  s
    .replace(/\.min\.[0-9a-f]{64}\.js/g, '.min.js')
    .replace(/integrity="sha256-[^"]*"/g, 'integrity=""')
    .replace(/\s+/g, ' ')
    .trim();

// Canonical storage form for region goldens: the comparison is
// whitespace-insensitive, so stored trailing whitespace only trips
// `git diff --check`.
export const canonicalRegion = (s) =>
  s.replace(/[^\S\n]+$/gm, '').replace(/\n*$/, '\n');

// Byte-pinned local scripts, resolved from the page markup (names are
// fingerprinted): every locally built script in the region, so a content
// change can't hide behind the region comparison's hash-stripping.
export const byteGoldens = [
  { name: 'main.js', re: /src="\/(js\/main[^"]*\.js)"/ },
  { name: 'click-to-copy.js', re: /src="\/(js\/click-to-copy[^"]*\.js)"/ },
];

export function scriptPath(html, { name, re }) {
  const m = html.match(re);
  if (!m) throw new Error(`${name} script tag is present`);
  return m[1];
}
