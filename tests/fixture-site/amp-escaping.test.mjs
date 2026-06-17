// Regression guard for the class of gohugoio/hugo#14715: Hugo 0.159.2's
// dangerous-URL escaping fix double-escaped `&` in Markdown link URLs
// (rendering `&amp;amp;`); fixed in 0.160.0. Only Goldmark's plain link
// rendering was affected — monolingual sites without link render hooks,
// which is exactly what this fixture builds. (The docsy.dev site can't cover
// this: multilingual single-host sites silently use the embedded link render
// hook and are immune.)
//
// TDD trace: red against hugo-extended@0.159.2, green at 0.160.1.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildSite } from './lib/build-site.mjs';

test('& in Markdown link URL is escaped exactly once', () => {
  const r = buildSite('amp-escaping', {
    files: {
      'content/docs/amp/_index.md':
        '---\ntitle: Amp escaping check\n---\n\n' +
        '[amp link](https://example.com/?a=1&b=2)\n',
    },
  });
  assert.equal(r.status, 0, `hugo build failed:\n${r.stdout}${r.stderr}`);
  const html = r.publicFile('docs/amp/index.html');
  assert.doesNotMatch(
    html,
    /&amp;amp;/,
    'no double-escaped & (the #14715 symptom) in rendered HTML',
  );
  assert.match(
    html,
    /href="https:\/\/example\.com\/\?a=1&amp;b=2"/,
    '& in Markdown link URL is escaped exactly once in rendered HTML',
  );
});
