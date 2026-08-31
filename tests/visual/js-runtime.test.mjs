// Runtime JS console-error net (google/docsy#1436): loads representative
// fixture-site pages in a real browser and asserts that no uncaught
// exception or console error fires. The markup and visual goldens can't
// see JS runtime breakage (a missing global, a botched conversion); this
// net can, cheaply. Two fixture variants cover both search bundles:
// scripts.html ships offline-search.js or search.js, never both.
//
// Unlike the visual shots, pages here load their real CDN script deps
// (lunr, markmap, mermaid), so this suite needs network access. Failed
// resource loads are filtered from the console tally: they're environment
// noise here, and any JS breakage they cause still surfaces as a
// pageerror (e.g. a dependent script's missing global).

import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { buildSite } from '../fixture-site/lib/build-site.mjs';
import { launchBrowser, serveDir } from './lib/harness.mjs';

const files = {
  'content/_index.md':
    '---\ntitle: Home\n---\n{{< blocks/cover >}}\nCover\n{{< /blocks/cover >}}\n',
  'content/docs/_index.md':
    '---\ntitle: Docs\nmenu: { main: { weight: 10 } }\n---\nDocs landing\n',
  'content/docs/diagrams.md': `---
title: Diagrams
---

\`\`\`mermaid
graph LR;
  A-->B;
\`\`\`

\`\`\`markmap
# Root

## Child
\`\`\`

\`\`\`plantuml
Alice -> Bob: hello
\`\`\`
`,
};

// One variant per search bundle; the features variant also exercises the
// diagram scripts (markmap, plantuml, mermaid) and the cover/navbar path
// in base.js. Pages are static so the test list registers up front; each
// variant's server origin resolves in before().
const variants = {
  features: {
    options: {
      files,
      extraConfig: `params:
  offlineSearch: true
  markmap:
    enable: true
  plantuml:
    enable: true
`,
    },
    pages: ['', 'docs/', 'docs/diagrams/'],
  },
  'default-search': {
    options: { files },
    pages: ['docs/'],
  },
};

const visits = Object.entries(variants).flatMap(([variant, { pages }]) =>
  pages.map((page) => ({ variant, page })),
);

let browser;
const servers = {}; // variant → { origin, close }
let selfTestUrl;
let checked = 0;

before(async () => {
  for (const [variant, { options }] of Object.entries(variants)) {
    const build = buildSite(`js-runtime-${variant}`, options);
    if (build.status !== 0) {
      throw new Error(
        `fixture hugo build failed:\n${build.stdout}${build.stderr}`,
      );
    }
    servers[variant] = await serveDir(path.join(build.site, 'public'));
    if (!selfTestUrl) {
      // Self-test page for the collector's red-proof.
      writeFileSync(
        path.join(build.site, 'public', 'js-runtime-selftest.html'),
        '<!doctype html><title>self-test</title>\n' +
          '<script>throw new Error("selftest: deliberate exception");</script>\n',
      );
      selfTestUrl = `${servers[variant].origin}/js-runtime-selftest.html`;
    }
  }
  browser = await launchBrowser();
});

after(async () => {
  await Promise.all([
    browser?.close(),
    ...Object.values(servers).map((s) => s.close()),
  ]);
  // Sanity floor: an emptied visit list or all-skipped run exits 0, so
  // green must mean every page visit actually ran.
  assert.ok(visits.length > 0, 'visit list is non-empty');
  assert.equal(checked, visits.length, 'every page visit executed');
});

// Load a page and collect JS failures: uncaught exceptions (pageerror)
// and console-level errors, minus resource-load noise (see header).
async function collectPageErrors(url) {
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', (err) => errors.push(`pageerror: ${err.message}`));
  page.on('console', (msg) => {
    if (msg.type() !== 'error') return;
    const text = msg.text();
    if (/Failed to load resource/.test(text)) return;
    errors.push(`console.error: ${text}`);
  });
  try {
    await page.goto(url, { waitUntil: 'networkidle0' });
    // Let ready handlers and async module scripts settle.
    await new Promise((resolve) => setTimeout(resolve, 250));
  } finally {
    await page.close();
  }
  return errors;
}

// Collector self-test: a page that throws must be reported, so a silent
// collector (wrong event names, races) can't masquerade as all-green.
test('js-runtime collector: an uncaught page exception is reported', async () => {
  const errors = await collectPageErrors(selfTestUrl);
  assert.ok(
    errors.some((e) => e.includes('selftest: deliberate exception')),
    'collector reports the deliberate exception',
  );
});

for (const { variant, page } of visits) {
  test(`js runtime: ${variant} /${page} loads without JS errors`, async () => {
    const errors = await collectPageErrors(
      `${servers[variant].origin}/${page}`,
    );
    checked += 1;
    assert.deepEqual(errors, [], `${variant} /${page} loads without JS errors`);
  });
}
