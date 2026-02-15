import test from 'node:test';
import assert from 'node:assert/strict';

import { parseParamsVersion, updateYamlWithVersions } from './hugo-yaml.mjs';

const fixture_basic = `
version: 0.14.3-dev
tdBuildId: 001-over-main-24e96f1c
`;

test('parseParamsVersion extracts version and tdBuildId', () => {
  const result = parseParamsVersion(fixture_basic);
  assert.equal(result.params.version, '0.14.3-dev');
  assert.equal(result.params.tdBuildId, '001-over-main-24e96f1c');
});

const expectedVers_basic = `
version: 0.14.4
tdBuildId: release-abc
`;

test('updateYamlWithVersions updates version and tdBuildId in content', () => {
  const updated = updateYamlWithVersions(fixture_basic, {
    params: {
      version: '0.14.4',
      tdBuildId: 'release-abc',
    },
  });
  assert.equal(updated, expectedVers_basic);
});

const fixtureFieldAliases = `params:
  version: &docsyVersion 0.14.3-dev
  tdBuildId: 001-over-main-24e96f1c
`;

test('parseParamsVersion extracts version and tdBuildId from field aliases', () => {
  const result = parseParamsVersion(fixtureFieldAliases, { inParams: false });
  assert.equal(result.params.version, '0.14.3-dev');
  assert.equal(result.params.tdBuildId, '001-over-main-24e96f1c');
});

const expectedVersWithAlias = `params:
  version: &docsyVersion 0.14.4
  tdBuildId: ''
`;

test('updateYamlWithVersions updates version and tdBuildId in content with field aliases', () => {
  const updated = updateYamlWithVersions(
    fixtureFieldAliases,
    {
      params: {
        version: '0.14.4',
        tdBuildId: '',
      },
    },
    { inParams: false },
  );
  assert.equal(updated, expectedVersWithAlias);
});

const fixture_versionWithComments = `params:
  version: 0.14.3-dev # version comment
  tdBuildId: 001-over-main-24e96f1c # build id comment
`;

test('parseParamsVersion extracts version and tdBuildId from content with comments', () => {
  const result = parseParamsVersion(fixture_versionWithComments, {
    inParams: false,
  });
  assert.equal(result.params.version, '0.14.3-dev');
  assert.equal(result.params.tdBuildId, '001-over-main-24e96f1c');
});

const expectedVersWithComments = `params:
  version: 0.14.4 # version comment
  tdBuildId: 1 # build id comment
`;

test('updateYamlWithVersions updates version and tdBuildId in content with comments', () => {
  const updated = updateYamlWithVersions(
    fixture_versionWithComments,
    {
      params: {
        version: '0.14.4',
        tdBuildId: '1',
      },
    },
    { inParams: false },
  );
  assert.equal(updated, expectedVersWithComments);
});

const fixture_versionWithMenuConfig = `
version: &docsyVersion 0.14.3-dev
tdBuildId: 001-over-main-24e96f1c # TODO: ...
version_menu: *docsyVersion
versions:
  - version: v0.14.2
    url: https://www.docsy.dev
  - version: *docsyVersion
    # url: https://next.docsy.dev
    url: https://main--docsydocs.netlify.app/
`;

test('parseParamsVersion extracts version and tdBuildId from content with anchor', () => {
  const result = parseParamsVersion(fixture_versionWithMenuConfig);
  assert.equal(result.params.version, '0.14.3-dev');
  assert.equal(result.params.tdBuildId, '001-over-main-24e96f1c');
});

const expectedVersWithMenuConfig = `
version: &docsyVersion 0.15.0-dev
tdBuildId: 001-over-main-24e96f1c # TODO: ...
version_menu: *docsyVersion
versions:
  - version: v0.14.2
    url: https://www.docsy.dev
  - version: *docsyVersion
    # url: https://next.docsy.dev
    url: https://main--docsydocs.netlify.app/
`;

test('updateYamlWithVersions updates version and tdBuildId in content with menu config', () => {
  const updated = updateYamlWithVersions(fixture_versionWithMenuConfig, {
    params: {
      version: '0.15.0-dev',
      tdBuildId: '001-over-main-24e96f1c',
    },
  });
  assert.equal(updated, expectedVersWithMenuConfig);
});

const fixture_versionQuoted = `
version: '0.14.3-dev'
tdBuildId: "001-over-main-24e96f1c"
`;

test('parseParamsVersion extracts version and tdBuildId from content with quoted values', () => {
  const result = parseParamsVersion(fixture_versionQuoted);
  assert.equal(result.params.version, '0.14.3-dev');
  assert.equal(result.params.tdBuildId, '001-over-main-24e96f1c');
});
