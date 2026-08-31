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
  // Tall section below the cover: the transparency probe needs the home
  // page to scroll well past the navbar.
  'content/_index.md':
    '---\ntitle: Home\n---\n{{< blocks/cover >}}\nCover\n{{< /blocks/cover >}}\n{{% blocks/section %}}\n' +
    'Tall content paragraph.\n\n'.repeat(60) +
    '{{% /blocks/section %}}\n',
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
      // The crowded main menu overflows the desktop navbar, arming
      // base.js's scroll-indicator logic.
      extraConfig: `menus:
  main:
${Array.from(
  { length: 12 },
  (_, i) => `    - name: Menu entry number ${i + 1}
      url: https://example.org/${i + 1}
      weight: ${i + 1}
`,
).join('')}params:
  offlineSearch: true
  markmap:
    enable: true
  plantuml:
    enable: true
`,
    },
    pages: ['', 'docs/', 'docs/diagrams/'],
  },
  // gcs_engine_id renders the navbar search input, arming search.js's
  // delegated Enter handler (the offline variant swaps that file out).
  // Doubles as the plantuml svg-mode site (features covers img mode).
  'gcs-search': {
    options: {
      files,
      extraConfig: `params:
  gcs_engine_id: fake
  plantuml:
    enable: true
    svg: true
`,
    },
    pages: ['docs/', 'docs/diagrams/'],
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

// Behavior probes: one small parity assertion per converted script
// (google/docsy#1436), each verified green against the pre-conversion
// code first.

// Diagram probes: each asserts the script's DOM transformation landed on
// the features diagrams page (rendered SVG for the CDN-driven renderers,
// the generated img element for plantuml).

test('js behavior: a markmap code block renders as an SVG mind map', async () => {
  const page = await browser.newPage();
  try {
    await page.goto(`${servers.features.origin}/docs/diagrams/`, {
      waitUntil: 'networkidle0',
    });
    const svg = await page.waitForSelector('.markmap svg', { timeout: 15000 });
    assert.ok(svg, 'markmap SVG is in the DOM');
  } finally {
    await page.close();
  }
});

test('js behavior: a plantuml code block becomes a diagram-server image', async () => {
  const page = await browser.newPage();
  try {
    await page.goto(`${servers.features.origin}/docs/diagrams/`, {
      waitUntil: 'networkidle0',
    });
    const img = await page.$('img[src*="plantuml.com/plantuml/svg/"]');
    assert.ok(img, 'plantuml image element is in the DOM');
    assert.equal(
      await page.$('.language-plantuml'),
      null,
      'the plantuml code block was replaced',
    );
  } finally {
    await page.close();
  }
});

test('js behavior: plantuml svg mode emits an SVG-namespace loader element', async () => {
  const page = await browser.newPage();
  try {
    await page.goto(`${servers['gcs-search'].origin}/docs/diagrams/`, {
      waitUntil: 'networkidle0',
    });
    // external-svg-loader targets svg[data-src]; the element must be a
    // real SVG-namespace element like the one the HTML parser produced.
    const ns = await page.$eval(
      'svg[data-src*="plantuml.com/plantuml/svg/"]',
      (el) => el.namespaceURI,
    );
    assert.equal(ns, 'http://www.w3.org/2000/svg', 'SVG namespace');
  } finally {
    await page.close();
  }
});

test('js behavior: a mermaid code block renders as an SVG diagram', async () => {
  const page = await browser.newPage();
  try {
    await page.goto(`${servers.features.origin}/docs/diagrams/`, {
      waitUntil: 'networkidle0',
    });
    const svg = await page.waitForSelector('.mermaid svg', { timeout: 15000 });
    assert.ok(svg, 'mermaid SVG is in the DOM');
  } finally {
    await page.close();
  }
});

// offline-search probe: committing a query must pop the results popover;
// closing it must clear the input.

test('js behavior: an offline-search query pops the results popover and close clears it', async () => {
  const page = await browser.newPage();
  try {
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto(`${servers.features.origin}/docs/`, {
      waitUntil: 'networkidle0',
    });
    const input = await page.$('.td-search--offline input');
    assert.ok(input, 'offline-search input is present');
    await input.type('docs');
    await input.press('Enter');
    await page.waitForSelector('.td-offline-search-results', {
      timeout: 5000,
    });
    // The close handler arms on shown.bs.popover, after the fade
    // transition; let it settle before clicking.
    await new Promise((resolve) => setTimeout(resolve, 500));
    await page.click('.td-offline-search-results__close-button');
    await page.waitForFunction(
      () => document.querySelector('.td-search--offline input').value === '',
      { timeout: 5000 },
    );
  } finally {
    await page.close();
  }
});

// base.js probes: the cover-transparency feature lives in desktop chrome;
// the nav-overflow feature is mobile-only (the nav only clips below the
// lg breakpoint), so its probe uses a narrow viewport.

test('js behavior: the navbar is transparent over the cover and solid after scrolling past it', async () => {
  const page = await browser.newPage();
  try {
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto(servers.features.origin, { waitUntil: 'networkidle0' });
    const isTransparent = () =>
      page.$eval('.js-navbar-scroll', (el) =>
        el.classList.contains('td-navbar-transparent'),
      );
    assert.equal(await isTransparent(), true, 'navbar is transparent at top');
    await page.evaluate(() =>
      window.scrollTo(0, document.documentElement.scrollHeight),
    );
    await page.waitForFunction(
      () =>
        !document
          .querySelector('.js-navbar-scroll')
          .classList.contains('td-navbar-transparent'),
      { timeout: 5000 },
    );
    assert.equal(
      await isTransparent(),
      false,
      'navbar is solid after scrolling past the cover',
    );
  } finally {
    await page.close();
  }
});

test('js behavior: an overflowing navbar menu shows scroll indicators and scrolls on click', async () => {
  const page = await browser.newPage();
  try {
    await page.setViewport({ width: 500, height: 800 });
    await page.goto(`${servers.features.origin}/docs/`, {
      waitUntil: 'networkidle0',
    });
    assert.equal(
      await page.$eval('#main_navbar', (el) =>
        el.classList.contains('td-navbar-nav-scroll--indicator'),
      ),
      true,
      'overflow indicator class is set on the navbar',
    );
    assert.equal(
      await page.$eval('.td-navbar-container', (el) =>
        el.classList.contains('navbar-is-overflowing'),
      ),
      true,
      'overflow class is set on the navbar container',
    );
    await page.click('#main_navbar .scroll-right');
    await page.waitForFunction(
      () => document.querySelector('.navbar-nav').scrollLeft > 0,
      { timeout: 5000 },
    );
  } finally {
    await page.close();
  }
});

test('js behavior: Enter in the navbar search box navigates to the search page', async () => {
  const page = await browser.newPage();
  try {
    // Desktop viewport: in collapsed (mobile) chrome the navbar search
    // input is unfocusable, and typing would land on <body>.
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto(`${servers['gcs-search'].origin}/docs/`, {
      waitUntil: 'networkidle0',
    });
    const input = await page.$('.td-search input');
    assert.ok(input, 'navbar search input is present');
    // The handler navigates via absURL (the fixture's example.org base), so
    // intercept the navigation instead of following it off-origin.
    let searchNav;
    await page.setRequestInterception(true);
    page.on('request', (req) => {
      if (req.isNavigationRequest()) {
        searchNav = req.url();
        return req.abort();
      }
      req.continue();
    });
    await input.type('docsy');
    await input.press('Enter');
    // The navigation request fires async; poll briefly for it.
    for (let i = 0; i < 40 && searchNav === undefined; i++) {
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
    assert.match(
      searchNav ?? '',
      /\/search\/\?q=docsy$/,
      'Enter navigates to the search page with the query',
    );
  } finally {
    await page.close();
  }
});
