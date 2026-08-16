// Contract tests for the footer copyright partial's year handling (#2047);
// the contract's home is the user guide's "Footer copyright" section.
//
// TDD trace: the two collapse cases were red against the pre-#2047 partial.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildSite } from './lib/build-site.mjs';

// Pinned via --clock; derived to always differ from the real current year, so
// a dropped or ignored clock flag fails the build-year assertions.
const BUILD_YEAR = new Date().getFullYear() + 4;

function build(name, fields) {
  return buildSite(`copyright-${name}`, {
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
}

// Returns the rendered copyright text of a build result,
// whitespace-normalized, up to the authors span.
function noticeText(r) {
  assert.equal(r.status, 0, `hugo build succeeded:\n${r.stdout}${r.stderr}`);
  const m = r
    .publicFile('docs/index.html')
    .match(
      /<span class="td-footer__copyright">([\s\S]*?)<span class="td-footer__authors">/,
    );
  assert.ok(m, 'footer copyright span is rendered');
  return m[1].replace(/\s+/g, ' ').trim();
}

function copyrightText(name, fields) {
  return noticeText(build(name, fields));
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

test('whitespace-only from_year behaves as unset', () => {
  assert.equal(
    copyrightText('ws-from', { from_year: '   ', to_year: 2024 }),
    '&copy; 2024',
  );
});

test('whitespace-only to_year behaves as unset', () => {
  assert.equal(
    copyrightText('ws-to', { from_year: 2018, to_year: '   ' }),
    `&copy; 2018&ndash;${BUILD_YEAR}`,
  );
});

test('build year alone renders when both year fields are unset', () => {
  assert.equal(
    copyrightText('no-years', { authors: 'Test Authors' }),
    `&copy; ${BUILD_YEAR}`,
  );
});

test('padded year values are trimmed for rendering', () => {
  assert.equal(
    copyrightText('padded', { from_year: ' 2018 ', to_year: 2024 }),
    '&copy; 2018&ndash;2024',
  );
});

test('from_year later than to_year logs a build warning', () => {
  const r = build('reversed', { from_year: 2025, to_year: 2024 });
  assert.match(
    r.stdout + r.stderr,
    /WARN.*from_year \(2025\) is later than to_year \(2024\)/,
    'reversed year range logs a warning',
  );
  assert.equal(
    noticeText(r),
    '&copy; 2025&ndash;2024',
    'reversed range renders as configured',
  );
});

test('years outside the diagnostic domain render without warning', () => {
  const r = build('huge-years', {
    from_year: '9223372036854775808',
    to_year: '9223372036854775807',
  });
  assert.equal(
    noticeText(r),
    '&copy; 9223372036854775808&ndash;9223372036854775807',
  );
  assert.doesNotMatch(r.stdout + r.stderr, /WARN.*copyright/i);
});

test('valid year configs build without warnings', () => {
  for (const fields of [
    { from_year: 2018, to_year: 2024 },
    { from_year: 2018, to_year: 'present' },
    { from_year: 2018 },
    { from_year: 2024, to_year: 2024 },
    { from_year: ' 2024 ', to_year: 2024 },
  ]) {
    const r = build('no-warn', fields);
    assert.equal(r.status, 0, `hugo build succeeded:\n${r.stdout}${r.stderr}`);
    assert.doesNotMatch(
      r.stdout + r.stderr,
      /WARN.*copyright/i,
      `warning-free build for ${JSON.stringify(fields)}`,
    );
  }
});

test('authors Markdown renders on non-Markdown pages', () => {
  const r = buildSite('copyright-org-page', {
    files: {
      'content/docs/_index.md': '---\ntitle: Copyright check\n---\n',
      'content/docs/org/index.org': '#+title: Org page\n',
    },
    extraConfig:
      'params:\n  copyright:\n' +
      '    authors: "[ACME](https://example.com/authors)"\n',
  });
  assert.equal(r.status, 0, `hugo build succeeded:\n${r.stdout}${r.stderr}`);
  for (const page of ['docs/index.html', 'docs/org/index.html']) {
    assert.match(
      r.publicFile(page),
      /<span class="td-footer__authors"><a href="https:\/\/example\.com\/authors">ACME<\/a><\/span>/,
      `authors link is Markdown-rendered on ${page}`,
    );
  }
});

test('string params.copyright is the authors text', () => {
  const r = buildSite('copyright-string-form', {
    files: {
      'content/docs/_index.md': '---\ntitle: Copyright check\n---\n',
    },
    args: ['--clock', `${BUILD_YEAR}-06-01T00:00:00Z`],
    extraConfig: 'params:\n  copyright: ACME Legal\n',
  });
  assert.equal(r.status, 0, `hugo build succeeded:\n${r.stdout}${r.stderr}`);
  const m = r
    .publicFile('docs/index.html')
    .match(/<span class="td-footer__copyright">([\s\S]*?)<\/span>\s*<\/span>/);
  assert.ok(m, 'footer copyright span is rendered');
  assert.equal(
    m[1].replace(/\s+/g, ' ').trim(),
    `&copy; ${BUILD_YEAR} <span class="td-footer__authors">ACME Legal`,
  );
});

test('authors defaults to the site title plus "Authors"', () => {
  const r = buildSite('copyright-default-authors', {
    title: 'ACME Docs',
    files: {
      'content/docs/_index.md': '---\ntitle: Copyright check\n---\n',
    },
    args: ['--clock', `${BUILD_YEAR}-06-01T00:00:00Z`],
    extraConfig: 'params:\n  copyright:\n    from_year: 2018\n',
  });
  assert.equal(r.status, 0, `hugo build succeeded:\n${r.stdout}${r.stderr}`);
  assert.match(
    r.publicFile('docs/index.html'),
    /<span class="td-footer__authors">ACME Docs Authors<\/span>/,
    'default authors text is rendered',
  );
});

// Param-level rule: an empty `params.copyright` behaves as unset, exercising
// the site `copyright` fallback.
for (const [name, value] of [
  ['empty map', '{}'],
  ['empty string', "''"],
]) {
  test(`${name} params.copyright falls back to site copyright`, () => {
    const r = buildSite(`copyright-fallback-${name.replace(' ', '-')}`, {
      files: {
        'content/docs/_index.md': '---\ntitle: Copyright check\n---\n',
      },
      extraConfig: `copyright: <b>Site</b> fallback\nparams:\n  copyright: ${value}\n`,
    });
    assert.equal(r.status, 0, `hugo build succeeded:\n${r.stdout}${r.stderr}`);
    const m = r
      .publicFile('docs/index.html')
      .match(/<span class="td-footer__copyright">([\s\S]*?)<\/span>/);
    assert.ok(m, 'footer copyright span is rendered');
    assert.equal(m[1].replace(/\s+/g, ' ').trim(), '<b>Site</b> fallback');
  });
}
