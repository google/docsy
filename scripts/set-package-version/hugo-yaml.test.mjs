import test from 'node:test';
import assert from 'node:assert/strict';

import { parseParamsVersion, updateYamlWithVersions } from './hugo-yaml.mjs';

// cSpell:ignore pagelinks

const fixtureBasic = `
  latest: &tdLatestVers v0.14.3
  dev: v0.14.4-dev # tdDevVers
  buildId: 018-over-main-adb0e595 # tdBuildId
`;

test('parseParamsVersion extracts version info', () => {
  const result = parseParamsVersion(fixtureBasic);
  assert.equal(result.latest, 'v0.14.3');
  assert.equal(result.dev, 'v0.14.4-dev');
  assert.equal(result.buildId, '018-over-main-adb0e595');
});

// buildId is matched by its key name alone when it sits under tdVersion --
// no tdBuildId anchor or comment marker needed (unlike latest/dev, whose
// names are too common to match unmarked).
const fixtureUnmarkedBuildId = `tdVersion:
  latest: &tdLatestVers v0.16.0
  dev: &tdDevVers v0.16.1-dev
  buildId: ''
`;

test('parseParamsVersion reads an unmarked buildId line', () => {
  const result = parseParamsVersion(
    fixtureUnmarkedBuildId.replace("''", 'g1234abcd'),
  );
  assert.equal(result.buildId, 'g1234abcd');
});

test('updateYamlWithVersions updates an unmarked buildId line', () => {
  const updated = updateYamlWithVersions(fixtureUnmarkedBuildId, {
    latest: 'v0.16.0',
    dev: 'v0.16.1-dev',
    buildId: 'g1234abcd',
  });
  assert.match(updated, /buildId: g1234abcd/);
});

test('updateYamlWithVersions leaves non-tdVersion buildId keys unchanged', () => {
  const fixture = `buildId: leave-me
other:
  buildId: me-too
tdVersion:
  latest: &tdLatestVers v0.16.0
  dev: &tdDevVers v0.16.1-dev
  buildId: ''
`;
  const updated = updateYamlWithVersions(fixture, {
    latest: 'v0.16.0',
    dev: 'v0.16.1-dev',
    buildId: 'g1234abcd',
  });
  assert.match(updated, /^buildId: leave-me$/m);
  assert.match(updated, /^ {2}buildId: me-too$/m);
  assert.match(updated, /^ {2}buildId: g1234abcd$/m);
});

test('updateYamlWithVersions counts an already-correct params.version scalar as applied', () => {
  const fixture = `params:
  version: 0.16.1-dev
`;
  const appliedKeys = new Set();
  updateYamlWithVersions(
    fixture,
    { latest: 'v0.16.0', dev: 'v0.16.1-dev', buildId: '' },
    appliedKeys,
  );
  assert.ok(
    appliedKeys.has('dev'),
    'unchanged scalar still counts as a dev landing line',
  );
});

const expectedVers_basic = `
  latest: &tdLatestVers v0.14.4
  dev: v0.14.5-dev-abc # tdDevVers
  buildId: some-build-id # tdBuildId
`;

test('updateYamlWithVersions updates version info in content', () => {
  const updated = updateYamlWithVersions(fixtureBasic, {
    latest: 'v0.14.4',
    dev: 'v0.14.5-dev-abc',
    buildId: 'some-build-id',
  });
  assert.equal(updated, expectedVers_basic);
});

const fixtureParams = `params:
  tdVersion:
    latest: &tdLatestVers v0.14.3 # TODO: ...
    dev: &tdDevVers v0.14.4-dev
    buildId: &tdBuildId 018-over-main-adb0e595
`;

test('parseParamsVersion extracts version info from params section', () => {
  const result = parseParamsVersion(fixtureParams);
  assert.equal(result.latest, 'v0.14.3');
  assert.equal(result.dev, 'v0.14.4-dev');
  assert.equal(result.buildId, '018-over-main-adb0e595');
});

const expectedVersParams = `params:
  tdVersion:
    latest: &tdLatestVers v0.14.4 # TODO: ...
    dev: &tdDevVers v0.14.5-dev
    buildId: &tdBuildId ''
`;

test('updateYamlWithVersions updates version info in content with params section', () => {
  const updated = updateYamlWithVersions(fixtureParams, {
    latest: 'v0.14.4',
    dev: 'v0.14.5-dev',
    buildId: '',
  });
  assert.equal(updated, expectedVersParams);
});

const expectedVersWhenNoDevOrBuildId = `
  latest: &tdLatestVers v0.14.4
  dev: v0.14.5-dev # tdDevVers
  buildId: '' # tdBuildId
`;

test('parseParamsVersion extracts version info w/o dev or buildId', () => {
  const updated = updateYamlWithVersions(fixtureBasic, {
    latest: 'v0.14.4',
  });
  assert.equal(updated, expectedVersWhenNoDevOrBuildId);
});

const fixture_versionWithMenuConfig = `
tdVersion:
  latest: &tdLatestVers v0.14.3
  dev: &tdDevVers v0.14.4-dev
  buildId: &tdBuildId 018-over-main-adb0e595

version: *tdDevVers
version_menu: *tdDevVers
versions:
  - name: '**Versions**'
  - version: *tdDevVers
    # kind: next
    pagelinks: true
    url: https://main--docsydocs.netlify.app # TODO: use next.docsy.dev once available
  - version: *tdLatestVers
    kind: latest
    pagelinks: true
    url: https://www.docsy.dev
`;

test('parseParamsVersion extracts version info even with other fields', () => {
  const result = parseParamsVersion(fixture_versionWithMenuConfig);
  assert.equal(result.latest, 'v0.14.3');
  assert.equal(result.dev, 'v0.14.4-dev');
  assert.equal(result.buildId, '018-over-main-adb0e595');
});

const expectedVersWithMenuConfig = `
tdVersion:
  latest: &tdLatestVers v0.14.4
  dev: &tdDevVers v0.14.5-dev
  buildId: &tdBuildId ''

version: *tdDevVers
version_menu: *tdDevVers
versions:
  - name: '**Versions**'
  - version: *tdDevVers
    # kind: next
    pagelinks: true
    url: https://main--docsydocs.netlify.app # TODO: use next.docsy.dev once available
  - version: *tdLatestVers
    kind: latest
    pagelinks: true
    url: https://www.docsy.dev
`;

test('updateYamlWithVersions updates version info in content with menu config', () => {
  const updated = updateYamlWithVersions(fixture_versionWithMenuConfig, {
    latest: 'v0.14.4',
  });
  assert.equal(updated, expectedVersWithMenuConfig);
});

test('updateYamlWithVersions sets params.version scalar to dev (docsy-example)', () => {
  const fixture = `baseURL: /
params:
  description: Example
  version: 0.15.0 # unreleased docs version
module:
  version: 1.2.3
  hugoVersion:
`;

  const updated = updateYamlWithVersions(fixture, {
    latest: 'v0.15.1',
    dev: 'v0.15.2-dev',
    buildId: '',
  });

  assert.ok(
    updated.includes('  version: 0.15.2-dev # unreleased docs version'),
  );
  assert.ok(!updated.includes('  version: 0.15.0'));
  assert.ok(updated.includes('  version: 1.2.3'));
});

test('updateYamlWithVersions leaves non-params version scalars unchanged', () => {
  const fixture = `version: 0.15.0
module:
  version: 0.15.0
params:
  description: Example
`;

  const updated = updateYamlWithVersions(fixture, {
    latest: 'v0.15.1',
    dev: 'v0.15.2-dev',
    buildId: '',
  });

  assert.equal(updated, fixture);
});

test('updateYamlWithVersions leaves version alias lines unchanged', () => {
  const before = `tdVersion:
  dev: &tdDevVers v0.14.4-dev
version: *tdDevVers
`;

  const updated = updateYamlWithVersions(before, {
    latest: 'v0.14.4',
    dev: 'v0.14.5-dev',
    buildId: '',
  });

  assert.ok(updated.includes('version: *tdDevVers'));
});

const fixture_versionQuoted = `
  latest: 'v0.14.4' # tdLatestVers
  buildId: '1' # tdBuildId
`;

test('parseParamsVersion extracts version info with quoted latest', () => {
  const result = parseParamsVersion(fixture_versionQuoted);
  assert.equal(result.latest, 'v0.14.4');
  assert.equal(result.buildId, '1');
});
