// Alias regression guard: retired URLs must keep resolving. Hugo emits the
// redirect pages only from front-matter `aliases`, and no other check reads
// them: the link check can't discover a retired URL (no inbound source link
// remains), so a dropped alias would otherwise pass green.

import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const publicDir = new URL('../../public/', import.meta.url);

// Retired page URL -> the path each alias page must redirect to.
const retired = {
  'docs/get-started/quickstart-docker/': '/docs/get-started/',
  'fr/docs/get-started/quickstart-docker/': '/fr/docs/get-started/',
};

for (const [url, target] of Object.entries(retired)) {
  test(`retired URL /${url} redirects to ${target}`, () => {
    const html = readFileSync(new URL(`${url}index.html`, publicDir), 'utf8');
    assert.match(
      html,
      new RegExp(`http-equiv="refresh" content="0; url=[^"]*${target}"`),
      'alias page carries a meta refresh to the target',
    );
  });
}
