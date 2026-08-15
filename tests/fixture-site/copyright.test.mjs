// Contract tests for the footer copyright partial (#2047): `to_year` defaults
// to the build year, and a year range renders only when `from_year` differs
// from the resolved `to_year` — otherwise the footer shows `to_year` alone.
//
// TDD trace: the two collapse cases were red against the pre-#2047 partial.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildSite } from './lib/build-site.mjs';

// Pinned via --clock; derived to always differ from the real current year, so
// a dropped or ignored clock flag fails the build-year assertions.
const BUILD_YEAR = new Date().getFullYear() + 4;

// Builds a fixture site with the given `params.copyright` fields and returns
// the rendered copyright text, whitespace-normalized, up to the authors span.
function copyrightText(name, fields) {
  const r = buildSite(`copyright-${name}`, {
    files: {
      'content/docs/_index.md': '---\ntitle: Copyright check\n---\n',
    },
    args: ['--clock', `${BUILD_YEAR}-06-01T00:00:00Z`],
    extraConfig:
      'params:\n  copyright:\n' +
      Object.entries(fields)
        // JSON.stringify quotes strings, keeping numbers bare, so YAML
        // preserves each field's JS type (e.g. a quoted numeric to_year).
        .map(([k, v]) => `    ${k}: ${JSON.stringify(v)}\n`)
        .join(''),
  });
  assert.equal(r.status, 0, `hugo build succeeded:\n${r.stdout}${r.stderr}`);
  const m = r
    .publicFile('docs/index.html')
    .match(
      /<span class="td-footer__copyright">([\s\S]*?)<span class="td-footer__authors">/,
    );
  assert.ok(m, 'footer copyright span is rendered');
  return m[1].replace(/\s+/g, ' ').trim();
}

test('from_year earlier than to_year renders a range', () => {
  assert.equal(
    copyrightText('range', { from_year: 2018, to_year: 2024 }),
    '&copy; 2018&ndash;2024',
  );
});

test('non-year to_year such as "present" renders a range', () => {
  assert.equal(
    copyrightText('present', { from_year: 2018, to_year: 'present' }),
    '&copy; 2018&ndash;present',
  );
});

test('from_year equal to to_year collapses to a single year', () => {
  assert.equal(
    copyrightText('same-year', { from_year: 2024, to_year: 2024 }),
    '&copy; 2024',
  );
});

test('quoted-string to_year equal to numeric from_year collapses', () => {
  assert.equal(
    copyrightText('mixed-types', { from_year: 2024, to_year: '2024' }),
    '&copy; 2024',
  );
});

test('to_year defaults to the build year', () => {
  assert.equal(
    copyrightText('from-only', { from_year: 2018 }),
    `&copy; 2018&ndash;${BUILD_YEAR}`,
  );
});

test('from_year equal to the build year collapses to a single year', () => {
  assert.equal(
    copyrightText('launch-year', { from_year: BUILD_YEAR }),
    `&copy; ${BUILD_YEAR}`,
  );
});

test('build year alone renders when both year fields are unset', () => {
  assert.equal(
    copyrightText('no-years', { authors: 'Test Authors' }),
    `&copy; ${BUILD_YEAR}`,
  );
});
