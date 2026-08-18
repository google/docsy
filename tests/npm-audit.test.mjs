// Online npm-audit gate, complementing the offline structural checks in
// supply-chain-audit.test.mjs: committed locks stay free of unreviewed
// advisories. Accepted advisories stay listed below and must still be
// reported; once one disappears, its exception is stale.

import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);

// GHSA-q3xp-j858-q9xf flags every version of the registry package
// markdownlint-rule-link-pattern, where malware was once published under
// the project's name. This repo installs the package from its author's
// GitHub tag, so the flagged registry code is never fetched; the
// advisory matches on name only. Remove once the advisory is scoped to
// the malicious registry version.
const acceptedAdvisories = new Map([
  ['GHSA-q3xp-j858-q9xf', 'markdownlint-rule-link-pattern'],
]);

test('audit: reported advisories are reviewed and accepted', () => {
  const res = spawnSync('npm', ['audit', '--json'], {
    cwd: repoRoot,
    encoding: 'utf8',
    maxBuffer: 16 * 1024 * 1024,
    shell: process.platform === 'win32',
  });
  if (res.error) {
    assert.fail(`npm audit failed to run: ${res.error.message}`);
  }
  let report;
  try {
    report = JSON.parse(res.stdout);
  } catch {
    assert.fail(
      `npm audit emitted invalid JSON (exit ${res.status}): ${
        res.stderr || res.stdout
      }`,
    );
  }
  assert.equal(
    report.error,
    undefined,
    `npm audit reached the registry: ${JSON.stringify(report.error)}`,
  );
  assert.ok(
    report.metadata?.dependencies?.total > 0,
    'the audit covered the installed dependency tree',
  );

  const reported = new Map();
  for (const [name, vuln] of Object.entries(report.vulnerabilities ?? {})) {
    for (const via of vuln.via) {
      // String entries chain to another reported finding, which carries
      // the advisory objects this loop vets.
      if (typeof via !== 'object') continue;
      const ghsa = via.url?.match(/GHSA-[a-z0-9-]+$/)?.[0] ?? via.url;
      reported.set(ghsa, via.name ?? name);
      assert.ok(
        acceptedAdvisories.has(ghsa),
        `${ghsa} (${via.severity}, ${name}: ${via.title}) is a reviewed, accepted advisory`,
      );
    }
  }
  for (const [ghsa, pkg] of acceptedAdvisories) {
    assert.equal(
      reported.get(ghsa),
      pkg,
      `accepted advisory ${ghsa} is still reported for ${pkg}, so its exception stays earned`,
    );
  }
});
