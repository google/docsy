import test from 'node:test';
import assert from 'node:assert/strict';

import {
  parseArgsAndResolveBuildId,
  main,
  adjustVersionForBuildId,
  getReleaseVersion,
  removeBuildId,
  getBuildId,
} from './index.mjs';

const nullLogger = {
  log() {},
  warn() {},
};

test('parseArgsAndResolveBuildId enables silent flag via -s', () => {
  const result = parseArgsAndResolveBuildId(['-s', '--id', 'custom-build'], {
    logger: nullLogger,
  });
  assert.equal(result.silent, true);
  assert.equal(result.buildId, 'custom-build');
});

test('parseArgsAndResolveBuildId defaults to release-strip mode', () => {
  const result = parseArgsAndResolveBuildId([], { logger: nullLogger });
  assert.equal(result.version, undefined);
  assert.equal(result.buildId, undefined);
  assert.equal(result.silent, false);
});

test('parseArgsAndResolveBuildId maps --id "" to timestamp build ID', () => {
  const result = parseArgsAndResolveBuildId(['--id', ''], {
    logger: nullLogger,
  });
  assert.match(result.buildId, /^\d{8}-\d{4}Z$/);
});

test('parseArgsAndResolveBuildId maps bare --id to timestamp build ID', () => {
  const result = parseArgsAndResolveBuildId(['--id'], {
    logger: nullLogger,
  });
  assert.match(result.buildId, /^\d{8}-\d{4}Z$/);
});

test('parseArgsAndResolveBuildId treats --id followed by flag as omitted BUILD-ID', () => {
  const result = parseArgsAndResolveBuildId(['--id', '--silent'], {
    logger: nullLogger,
  });
  assert.match(result.buildId, /^\d{8}-\d{4}Z$/);
  assert.equal(result.silent, true);
});

test('parseArgsAndResolveBuildId supports short -v and --version precedence', () => {
  const result = parseArgsAndResolveBuildId(
    ['-v', '2.0.0-dev+build-123', '--id', 'ignored-id'],
    {
      logger: nullLogger,
    },
  );
  assert.equal(result.version, '2.0.0-dev+build-123');
  assert.equal(result.buildId, 'ignored-id');
});

test('release/build helpers split semver strings', () => {
  assert.equal(getReleaseVersion('1.2.3-dev+build-9'), '1.2.3');
  assert.equal(removeBuildId('1.2.3-dev+build-9'), '1.2.3-dev');
  assert.equal(getBuildId('1.2.3-dev+build-9'), 'build-9');
  assert.equal(getBuildId('1.2.3'), '');
});

test('main default strips pre-release and build metadata in both targets', () => {
  const pkg = { version: '1.2.3-dev+old-build' };
  const hugoYaml = {
    params: { version: '1.2.3-dev', versionWithBuildId: '1.2.3-dev+old-build' },
  };
  let writtenPkg;
  let writtenHugoYaml;

  const newVersion = main([], {
    logger: nullLogger,
    readPackageJson: () => pkg,
    writePackageJson: (updatedPkg) => {
      writtenPkg = { ...updatedPkg };
    },
    readHugoYaml: () => ({ ...hugoYaml, params: { ...hugoYaml.params } }),
    writeHugoYaml: (updatedYaml) => {
      writtenHugoYaml = { ...updatedYaml, params: { ...updatedYaml.params } };
    },
  });

  assert.equal(pkg.version, '1.2.3');
  assert.deepEqual(writtenPkg, { version: '1.2.3' });
  assert.equal(writtenHugoYaml.params.version, '1.2.3');
  assert.equal(writtenHugoYaml.params.versionWithBuildId, '1.2.3');
  assert.equal(newVersion, '1.2.3');
});

test('main --id sets build metadata and preserves pre-release', () => {
  const pkg = { version: '1.2.3-dev+old-build' };
  const hugoYaml = {
    params: { version: '1.2.3-dev', versionWithBuildId: '1.2.3-dev+old-build' },
  };
  let writtenPkg;
  let writtenHugoYaml;

  const newVersion = main(['--id', 'custom-build'], {
    logger: nullLogger,
    readPackageJson: () => pkg,
    writePackageJson: (updatedPkg) => {
      writtenPkg = { ...updatedPkg };
    },
    readHugoYaml: () => ({ ...hugoYaml, params: { ...hugoYaml.params } }),
    writeHugoYaml: (updatedYaml) => {
      writtenHugoYaml = { ...updatedYaml, params: { ...updatedYaml.params } };
    },
  });

  assert.equal(pkg.version, '1.2.3-dev+custom-build');
  assert.deepEqual(writtenPkg, { version: '1.2.3-dev+custom-build' });
  assert.equal(writtenHugoYaml.params.version, '1.2.3-dev');
  assert.equal(writtenHugoYaml.params.versionWithBuildId, '1.2.3-dev+custom-build');
  assert.equal(newVersion, '1.2.3-dev+custom-build');
});

test('main --id "" generates timestamp build metadata', () => {
  const pkg = { version: '1.2.3-dev+old-build' };
  const hugoYaml = {
    params: { version: '1.2.3-dev', versionWithBuildId: '1.2.3-dev+old-build' },
  };
  let writtenPkg;
  let writtenHugoYaml;

  const newVersion = main(['--id', ''], {
    logger: nullLogger,
    readPackageJson: () => pkg,
    writePackageJson: (updatedPkg) => {
      writtenPkg = { ...updatedPkg };
    },
    readHugoYaml: () => ({ ...hugoYaml, params: { ...hugoYaml.params } }),
    writeHugoYaml: (updatedYaml) => {
      writtenHugoYaml = { ...updatedYaml, params: { ...updatedYaml.params } };
    },
  });

  assert.match(newVersion, /^1\.2\.3-dev\+\d{8}-\d{4}Z$/);
  assert.match(writtenPkg.version, /^1\.2\.3-dev\+\d{8}-\d{4}Z$/);
  assert.equal(writtenHugoYaml.params.version, '1.2.3-dev');
  assert.match(
    writtenHugoYaml.params.versionWithBuildId,
    /^1\.2\.3-dev\+\d{8}-\d{4}Z$/,
  );
});

test('main sets entire version with --version and updates hugo split fields', () => {
  const pkg = { version: '1.0.0+old-build' };
  const hugoYaml = { params: { version: '1.0.0', versionWithBuildId: '1.0.0+old-build' } };
  let writtenPkg;
  let writtenHugoYaml;

  const newVersion = main(['--version', '2.0.0-dev+build-123'], {
    logger: nullLogger,
    readPackageJson: () => pkg,
    writePackageJson: (updatedPkg) => {
      writtenPkg = { ...updatedPkg };
    },
    readHugoYaml: () => ({ ...hugoYaml, params: { ...hugoYaml.params } }),
    writeHugoYaml: (updatedYaml) => {
      writtenHugoYaml = { ...updatedYaml, params: { ...updatedYaml.params } };
    },
  });

  assert.equal(pkg.version, '2.0.0-dev+build-123');
  assert.deepEqual(writtenPkg, { version: '2.0.0-dev+build-123' });
  assert.equal(writtenHugoYaml.params.version, '2.0.0-dev');
  assert.equal(writtenHugoYaml.params.versionWithBuildId, '2.0.0-dev+build-123');
  assert.equal(newVersion, '2.0.0-dev+build-123');
});

test('main logs when package/hugo versions already match', () => {
  const pkg = { version: '1.0.0+existing' };
  const hugoYaml = { params: { version: '1.0.0', versionWithBuildId: '1.0.0+existing' } };
  let writeCallCount = 0;
  const messages = [];
  const logger = {
    log(message) {
      messages.push(message);
    },
  };

  const newVersion = main(['--id', 'existing'], {
    logger,
    readPackageJson: () => pkg,
    writePackageJson: () => {
      writeCallCount += 1;
    },
    readHugoYaml: () => ({ ...hugoYaml, params: { ...hugoYaml.params } }),
    writeHugoYaml: () => {
      writeCallCount += 1;
    },
  });

  assert.equal(writeCallCount, 0);
  assert.equal(newVersion, '1.0.0+existing');
  assert.deepEqual(messages, ['Package version is already set to 1.0.0+existing.']);
});

test('adjustVersionForBuildId replaces build metadata only', () => {
  const result = adjustVersionForBuildId('1.0.0-dev+old', 'build-123');
  assert.equal(result, '1.0.0-dev+build-123');
});
