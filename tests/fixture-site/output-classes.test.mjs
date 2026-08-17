// Rendered-output framework-class net: classes in the built fixture's HTML
// are ground truth for what the theme emits, with no template semantics to
// re-model (the divergence-hardening history that retired the old template
// scanner). Blind spot: branches the fixture doesn't exercise — the
// literal-token lint (../framework-classes.test.mjs) catches their plain
// literals; assembled forms in unexercised branches are review's job.
//
// CLEARED_REGIONS carries the output side of the migration ratchet: every
// partial in CLEARED_PARTIALS must map to a region here (or a documented
// OUTPUT_EXEMPT reason), so lint-invisible forms can't ship unchecked.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { bootstrapClasses, bootstrapCss } from '../lib/bootstrap-inventory.mjs';
import { CLEARED_PARTIALS } from '../lib/cleared-partials.mjs';
import { buildFixture } from './lib/markup-goldens.mjs';

// name → label; partial → the CLEARED_PARTIALS entry this region covers;
// re → the rendered region (global regex: every instance on every listed
// page is checked); pages → every fixture page kind the partial renders on.
const CLEARED_REGIONS = [];

// partial → why the fixture cannot render it (config-gated, error-path…).
// An entry here is reviewed debt: the lint and review are its only nets.
const OUTPUT_EXEMPT = {};

// Extraction is deliberately wider than the theme's emitted style (verified
// double-quoted lowercase): quote/case drift in a migration PR must not
// silently blind the net. data-class="…" over-matches; that direction is
// loud, not silent.
const classAttrRe = /\bclass\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/gi;
const classAttrAttemptRe = /\bclass\s*=/gi;
// Browsers decode character references before class matching: an encoded
// name (d&#45;flex) styles as d-flex, so raw-text comparison must not see
// it differently. &amp; decodes last (its result is literal text).
const NAMED_REFS = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'" };
const decodeRefs = (s) =>
  s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) =>
      String.fromCodePoint(parseInt(h, 16)),
    )
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&(amp|lt|gt|quot|apos);/g, (_, n) => NAMED_REFS[n]);
export function htmlClasses(html) {
  const out = new Set();
  for (const m of html.matchAll(classAttrRe)) {
    for (const c of decodeRefs(m[1] ?? m[2] ?? m[3]).split(/\s+/)) {
      if (c) out.add(c);
    }
  }
  return out;
}

test('output-class net: cleared regions render no Bootstrap classes', () => {
  const inventory = bootstrapClasses(fs.readFileSync(bootstrapCss, 'utf8'));
  assert.ok(inventory.size > 500, 'inventory parsed a full Bootstrap build');

  // Extraction self-test: a broken extractor plus an empty cleared list
  // would otherwise stay green forever.
  assert.deepEqual(
    [
      ...htmlClasses(
        `<nav class="td-x d-flex"><a CLASS='active'>x</a><i class=mb-4></i><b class="d&#45;flex d&#x2D;none">y</b></nav>`,
      ),
    ],
    ['td-x', 'd-flex', 'active', 'mb-4', 'd-none'],
    'class extraction sees every attribute form, character refs decoded',
  );

  // Cross-net ratchet: forms the literal-token lint can't see are
  // dispositioned to this net, which only holds if clearing a partial
  // forces output coverage.
  const covered = new Set(CLEARED_REGIONS.map((r) => r.partial));
  for (const p of CLEARED_PARTIALS) {
    assert.ok(
      covered.has(p) || OUTPUT_EXEMPT[p],
      `cleared partial ${p} has an output region or a documented exemption`,
    );
  }

  const build = buildFixture('output-classes');

  // Site-wide census: the fixture is Bootstrap-styled today, so a net that
  // finds nothing is broken, not a finished migration. When the theme is
  // fully cleared, flip this anchor into its positive assertion (zero).
  // The attempt count pins the extraction invariant: every class= the
  // theme emits, in any quoting style, must parse.
  let pages = 0;
  const found = new Set();
  const walk = (dir) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name.endsWith('.html')) {
        pages += 1;
        const html = fs.readFileSync(p, 'utf8');
        assert.equal(
          [...html.matchAll(classAttrRe)].length,
          [...html.matchAll(classAttrAttemptRe)].length,
          `every class attribute in ${e.name} parses`,
        );
        for (const c of htmlClasses(html)) {
          if (inventory.has(c)) found.add(c);
        }
      }
    }
  };
  walk(path.join(build.site, 'public'));
  assert.ok(pages >= 8, 'the fixture rendered its pages');
  assert.ok(found.size > 0, 'the census sees pre-migration Bootstrap classes');

  for (const { name, re, pages: regionPages } of CLEARED_REGIONS) {
    assert.ok(regionPages.length > 0, `cleared region ${name} lists pages`);
    for (const page of regionPages) {
      const instances = [...build.publicFile(page).matchAll(re)];
      assert.ok(
        instances.length > 0,
        `cleared region ${name} is present in ${page}`,
      );
      for (const m of instances) {
        const offenders = [...htmlClasses(m[0])]
          .filter((c) => inventory.has(c))
          .sort();
        assert.deepEqual(
          offenders,
          [],
          `cleared region ${name} in ${page} renders no Bootstrap classes`,
        );
      }
    }
  }

  // Binding proof: the ratchet's partial→region label is free text, so a
  // stale or misbound regex could satisfy it while covering none of the
  // partial's output. Rebuild with every cleared partial stubbed to a
  // sentinel (site layouts override theme layouts); each region must then
  // surface its partial's sentinel, or stop matching entirely.
  if (CLEARED_REGIONS.length > 0) {
    const sentinel = (p) => `TD-SENTINEL[${p}]`;
    const stubs = {};
    for (const p of new Set(CLEARED_REGIONS.map((r) => r.partial))) {
      stubs[`layouts/${p}`] = sentinel(p);
    }
    const stubbed = buildFixture('output-classes-stub', stubs);
    for (const { name, partial, re, pages: regionPages } of CLEARED_REGIONS) {
      for (const page of regionPages) {
        assert.ok(
          [...stubbed.publicFile(page).matchAll(re)].every((m) =>
            m[0].includes(sentinel(partial)),
          ),
          `cleared region ${name} in ${page} encloses output of ${partial}`,
        );
      }
    }
  }
});
