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

// Helper: gate the npm audit report schema and accepted advisories.
function validateAuditGate(report, accepted) {
  // Fail-closed on npm audit format changes (currently v2).
  assert.equal(
    report.auditReportVersion,
    2,
    `npm audit report version must be 2; got ${report.auditReportVersion}`,
  );
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
  const allVulns = report.vulnerabilities ?? {};

  for (const [name, vuln] of Object.entries(allVulns)) {
    for (const via of vuln.via) {
      if (via == null || typeof via !== 'object') {
        // String via entries chain to another reported finding.
        // Ensure the chain target exists and carries an advisory object.
        if (typeof via === 'string') {
          assert.ok(
            allVulns[via],
            `string via "${via}" on ${name} must resolve to a key in vulnerabilities`,
          );
          continue;
        }
        // null or other non-object: fail-closed.
        assert.fail(
          `unexpected via type on ${name}: ${typeof via} (${JSON.stringify(via)})`,
        );
      }
      // Advisory object: extract GHSA and check acceptance.
      const ghsa =
        via.url?.match(/GHSA-[a-z0-9-]+$/)?.[0] ?? via.url;
      reported.set(ghsa, via.name ?? name);
      assert.ok(
        accepted.has(ghsa),
        `${ghsa} (${via.severity}, ${name}: ${via.title}) is a reviewed, accepted advisory`,
      );
    }
  }

  // Every accepted advisory must still be reported (exceptions are stale).
  for (const [ghsa, pkg] of accepted) {
    assert.equal(
      reported.get(ghsa),
      pkg,
      `accepted advisory ${ghsa} is still reported for ${pkg}, so its exception stays earned`,
    );
  }
}

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
  validateAuditGate(report, acceptedAdvisories);
});

// Fixture: validate the parser against mock report shapes.
test('audit gate: parser rejects unreviewed advisories', () => {
  const validReport = {
    auditReportVersion: 2,
    error: undefined,
    metadata: { dependencies: { total: 1 } },
    vulnerabilities: {
      'package-a': {
        name: 'package-a',
        via: [
          {
            url: 'https://github.com/advisories/GHSA-q3xp-j858-q9xf',
            severity: 'critical',
            name: 'markdownlint-rule-link-pattern',
            title: 'Malware',
          },
        ],
      },
    },
  };
  validateAuditGate(validReport, acceptedAdvisories);
});

test('audit gate: parser rejects unaccepted advisories', () => {
  const reportWithNewGHSA = {
    auditReportVersion: 2,
    error: undefined,
    metadata: { dependencies: { total: 1 } },
    vulnerabilities: {
      'package-b': {
        name: 'package-b',
        via: [
          {
            url: 'https://github.com/advisories/GHSA-xxxx-yyyy-zzzz',
            severity: 'high',
            name: 'unreviewed-advisory',
            title: 'New advisory',
          },
        ],
      },
    },
  };
  assert.throws(
    () => validateAuditGate(reportWithNewGHSA, acceptedAdvisories),
    /GHSA-xxxx-yyyy-zzzz.*reviewed, accepted advisory/,
  );
});

test('audit gate: parser rejects stale exceptions (missing report)', () => {
  const reportWithoutAcceptedGHSA = {
    auditReportVersion: 2,
    error: undefined,
    metadata: { dependencies: { total: 1 } },
    vulnerabilities: {},
  };
  assert.throws(
    () => validateAuditGate(reportWithoutAcceptedGHSA, acceptedAdvisories),
    /accepted advisory GHSA-q3xp-j858-q9xf is still reported/,
  );
});

test('audit gate: parser rejects format version changes', () => {
  const reportV3 = {
    auditReportVersion: 3,
    error: undefined,
    metadata: { dependencies: { total: 1 } },
    vulnerabilities: {},
  };
  assert.throws(
    () => validateAuditGate(reportV3, acceptedAdvisories),
    /report version must be 2/,
  );
});

test('audit gate: parser rejects string via without chain target', () => {
  const reportWithDanglingStringVia = {
    auditReportVersion: 2,
    error: undefined,
    metadata: { dependencies: { total: 1 } },
    vulnerabilities: {
      'package-c': {
        name: 'package-c',
        via: ['nonexistent-key'],
      },
    },
  };
  assert.throws(
    () => validateAuditGate(reportWithDanglingStringVia, acceptedAdvisories),
    /string via "nonexistent-key".*must resolve to a key/,
  );
});
