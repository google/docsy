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

const fixture_versionQuoted = `
  latest: 'v0.14.4' # tdLatestVers
  buildId: '1' # tdBuildId
`;

test('parseParamsVersion extracts version info with quoted latest', () => {
  const result = parseParamsVersion(fixture_versionQuoted);
  assert.equal(result.latest, 'v0.14.4');
  assert.equal(result.buildId, '1');
});
