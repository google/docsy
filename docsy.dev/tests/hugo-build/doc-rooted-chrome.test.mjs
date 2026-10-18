// The doc-rooted variant in `shared` chrome mode: the navbar and footer donor
// is each language's root page, the docs landing, since the link-only home
// renders nothing. Before 0.19 this build exited 0 with no navbar or footer on
// any page (docsy/docsy#2875's companion defect); this pins the donor at the
// site level, beside the theme fixture `tests/fixture-site/chrome-doc-rooted`.

import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const siteDir = fileURLToPath(new URL('../../', import.meta.url));
const tmpDir = join(siteDir, 'tmp');

const has = {
  navbar: (h) => /class="td-navbar/.test(h),
  footer: (h) => /class="td-footer/.test(h),
  placeholder: (h, region, donor) =>
    new RegExp(
      `class="td-chrome-placeholder" data-chrome-donor="${donor}" data-chrome-region="${region}"`,
    ).test(h),
};

test('doc-rooted shared build keeps the navbar and footer on each language root', (t) => {
  mkdirSync(tmpDir, { recursive: true });
  const destDir = mkdtempSync(join(tmpDir, 'doc-rooted-chrome-'));
  t.after(() => rmSync(destDir, { recursive: true, force: true }));
  const res = spawnSync(`npm run build -- -d "${destDir}"`, {
    cwd: siteDir,
    shell: true,
    encoding: 'utf8',
    env: {
      ...process.env,
      TD_BUILD_CTX: 'doc-rooted',
      HUGO_PARAMS_TD_CHROME: 'shared',
      BASE_URL: 'http://localhost',
    },
  });
  const output = `${res.stdout ?? ''}\n${res.stderr ?? ''}`;
  assert.equal(
    res.status,
    0,
    `doc-rooted shared build exits 0; output:\n${output}`,
  );

  for (const [root, donor] of [
    ['index.html', '/'],
    ['fr/index.html', '/fr/'],
  ]) {
    const h = readFileSync(join(destDir, root), 'utf8');
    assert.ok(has.navbar(h), `navbar kept on the root page ${root}`);
    assert.ok(has.footer(h), `footer kept on the root page ${root}`);
    assert.ok(
      !has.placeholder(h, 'navbar', donor) &&
        !has.placeholder(h, 'footer', donor),
      `root page ${root} carries no chrome placeholder`,
    );
  }

  const inner = readFileSync(
    join(destDir, 'content/adding-content/index.html'),
    'utf8',
  );
  assert.ok(!has.navbar(inner) && !has.footer(inner), 'inner page drops both');
  assert.ok(
    has.placeholder(inner, 'navbar', '/') &&
      has.placeholder(inner, 'footer', '/'),
    'inner page placeholders name the root as donor page',
  );
});
