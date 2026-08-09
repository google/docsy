// Tests for the publish-workflow guards (publish-guards.mjs); picked up by
// test:tooling.

import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  OIDC_NPM_FLOOR,
  checkGuards,
  cmpVersions,
  floorOfEnginesRange,
  parseVersion,
} from './publish-guards.mjs';

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);

test('parseVersion handles strict stable versions only', () => {
  assert.deepEqual(parseVersion('11.5.1'), [11, 5, 1]);
  assert.deepEqual(parseVersion(' 24.0.0 '), [24, 0, 0]);
  assert.deepEqual(parseVersion('1.0.0'), [1, 0, 0]);
  for (const bad of [
    '11.5',
    '11.5.1-beta.1',
    'lts/*',
    '',
    '01.2.3', // leading zeros: npm-invalid semver
    '1.02.3',
    '1.2.03',
    '9007199254740993.0.0', // beyond Number.isSafeInteger
    `1.2.${'3'.repeat(260)}`, // beyond npm's 256-char cap
  ]) {
    assert.throws(() => parseVersion(bad), /unparseable/, bad);
  }
});

test('cmpVersions compares numerically per position', () => {
  assert.equal(cmpVersions('11.5.1', '11.5.1'), 0);
  assert.equal(cmpVersions('11.4.9', '11.5.1'), -1);
  assert.equal(cmpVersions('11.10.0', '11.9.0'), 1); // numeric, not lexical
  assert.equal(cmpVersions('12.0.0', '11.99.99'), 1);
  assert.equal(cmpVersions('11.5.0', '11.5.1'), -1);
});

test('floorOfEnginesRange accepts only the >=X.Y.Z form', () => {
  assert.equal(floorOfEnginesRange('>=11.16.0'), '11.16.0');
  assert.equal(floorOfEnginesRange('>= 11.16.0'), '11.16.0');
  for (const bad of ['^11.0.0', '11.16.0', '>=11.16', undefined]) {
    assert.throws(() => floorOfEnginesRange(bad), /unsupported/, String(bad));
  }
});

const good = {
  tag: 'v0.17.0',
  npmVersion: '11.16.0',
  enginesNpmRange: '>=11.16.0',
  themeVersion: '0.17.0',
  themePublishConfig: { access: 'public' },
};

test('checkGuards passes a consistent stable release', () => {
  assert.deepEqual(checkGuards(good), []);
});

test('checkGuards flags npm below the floors', () => {
  const below = checkGuards({ ...good, npmVersion: '11.4.0' });
  assert.equal(below.length, 2, 'both floors flagged');
  const between = checkGuards({ ...good, npmVersion: '11.6.0' });
  assert.equal(between.length, 1, 'engines floor flagged');
  assert.match(between[0], /engines floor/);
});

test('checkGuards flags a prerelease version', () => {
  const problems = checkGuards({
    ...good,
    tag: 'v0.17.0-rc.1',
    themeVersion: '0.17.0-rc.1',
  });
  assert.equal(problems.length, 1);
  assert.match(problems[0], /not a stable/);
});

test('checkGuards flags npm-invalid stable-looking versions', () => {
  const problems = checkGuards({
    ...good,
    tag: 'v01.2.3',
    themeVersion: '01.2.3',
  });
  assert.equal(problems.length, 1);
  assert.match(problems[0], /not a stable/);
});

test('checkGuards pins publishConfig to the reviewed shape', () => {
  for (const bad of [
    { access: 'public', tag: 'next' },
    { access: 'public', provenance: false },
    { access: 'restricted' },
    {},
    undefined,
  ]) {
    const problems = checkGuards({ ...good, themePublishConfig: bad });
    assert.equal(problems.length, 1, JSON.stringify(bad));
    assert.match(problems[0], /publishConfig/);
  }
});

test('checkGuards flags a tag that does not match the stamped version', () => {
  const problems = checkGuards({ ...good, tag: 'v0.17.1' });
  assert.equal(problems.length, 1);
  assert.match(problems[0], /!= stamped theme version/);
});

test('repo engines npm floor parses and covers the OIDC floor', () => {
  const pkg = JSON.parse(
    fs.readFileSync(path.join(repoRoot, 'package.json'), 'utf8'),
  );
  const floor = floorOfEnginesRange(pkg.engines.npm);
  assert.ok(
    cmpVersions(floor, OIDC_NPM_FLOOR) >= 0,
    `engines floor ${floor} covers OIDC floor ${OIDC_NPM_FLOOR}`,
  );
});
