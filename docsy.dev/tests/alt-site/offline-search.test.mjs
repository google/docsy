import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const siteDir = fileURLToPath(new URL('../../', import.meta.url));

// Build the site with the `test-offline-search` config overlay
// (config/test-offline-search/hugo.yaml), which enables offline search, and
// validate the generated search index. This guards the multilingual page
// collection used by theme/assets/json/offline-search-index.json.
test('offline-search index covers all site languages', (t) => {
  // Scratch space, kept after the run for inspection; cleared at start.
  const outDir = join(siteDir, 'tmp', 'test-offline-search');
  rmSync(outDir, { recursive: true, force: true });

  const res = spawnSync(
    `npm run _hugo -- -e test-offline-search -DFE ` +
      `--baseURL http://localhost -d ${outDir}`,
    { cwd: siteDir, shell: true, encoding: 'utf8' },
  );
  const output = `${res.stdout ?? ''}${res.stderr ?? ''}`;
  assert.equal(res.status, 0, `Build failed:\n${output}`);

  const indexPath = join(outDir, 'offline-search-index.json');
  assert.ok(existsSync(indexPath), `Missing ${indexPath}`);

  const entries = JSON.parse(readFileSync(indexPath, 'utf8'));
  assert.ok(Array.isArray(entries), 'Index is not a JSON array');
  assert.ok(
    entries.length > 100,
    `Suspiciously few index entries: ${entries.length}`,
  );

  for (const key of ['ref', 'title', 'body', 'excerpt']) {
    assert.ok(key in entries[0], `Index entries lack "${key}" field`);
  }

  // Multilingual coverage: docsy.dev publishes en (site root) and fr.
  const fr = entries.filter((e) => e.ref.startsWith('/fr/'));
  const en = entries.filter((e) => !e.ref.startsWith('/fr/'));
  assert.ok(fr.length > 0, 'No French entries in index');
  assert.ok(en.length > 0, 'No English entries in index');

  // Known-content spot checks, one per language.
  for (const ref of ['/docs/', '/fr/docs/']) {
    assert.ok(
      entries.some((e) => e.ref === ref),
      `Index lacks an entry for ${ref}`,
    );
  }

  t.diagnostic(
    `Index entries: ${entries.length} (en: ${en.length}, fr: ${fr.length})`,
  );
  t.diagnostic(`Index file: ${indexPath}`);
});
