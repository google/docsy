// Shared spec for the chrome markup goldens: one fixture site, a list of
// golden-tracked regions, and the region extractor. Consumed by
// markup-golden.test.mjs (assert) and update-markup-goldens.mjs (refresh).
// Part of the semantic-classes migration (google/docsy#783): each region is
// characterized here before its classes change, so class-swap refactors
// review as golden diffs.

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildSite } from './build-site.mjs';

export const goldenDir = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
  'goldens',
);

const files = {
  'content/_index.md': '---\ntitle: Home\n---\nHome body\n',
  'content/docs/_index.md': '---\ntitle: Docs\n---\nDocs landing\n',
  'content/docs/getting-started/_index.md':
    '---\ntitle: Getting started\n---\nSection landing\n',
  'content/docs/getting-started/install.md':
    '---\ntitle: Install\n---\nLeaf page\n',
};

// Dark mode on: the visual suite reuses this fixture for light+dark shots,
// and the extra navbar toggler is outside every golden-tracked region.
const extraConfig = `params:
  ui:
    showLightDarkModeMenu: true
`;

// name → golden file goldens/NAME.html; page → public file holding the region.
export const regions = [
  { name: 'breadcrumb-single', page: 'docs/index.html' },
  { name: 'breadcrumb-mid', page: 'docs/getting-started/index.html' },
  { name: 'breadcrumb-deep', page: 'docs/getting-started/install/index.html' },
];

const breadcrumbRe = /<nav aria-label="breadcrumb"[\s\S]*?<\/nav>/;

export function buildFixture() {
  const r = buildSite('markup-goldens', { files, extraConfig });
  if (r.status !== 0) {
    throw new Error(`fixture hugo build failed:\n${r.stdout}${r.stderr}`);
  }
  return r;
}

export function extractRegions(build) {
  return regions.map(({ name, page }) => {
    const m = build.publicFile(page).match(breadcrumbRe);
    if (!m) throw new Error(`no breadcrumb region in ${page}`);
    return { name, page, html: m[0] + '\n' };
  });
}
