import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'path';

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
    ['-v', 'v2.0.0-dev+build-123', '--id', 'ignored-id'],
    {
      logger: nullLogger,
    },
  );
  assert.equal(result.version, 'v2.0.0-dev+build-123');
  assert.equal(result.buildId, 'ignored-id');
});

test('parseArgsAndResolveBuildId resolves file paths relative to cwd', () => {
  const result = parseArgsAndResolveBuildId(
    ['rel/path/to/params.yaml', '--id', 'build-1'],
    { logger: nullLogger },
  );
  assert.equal(result.configPaths.length, 1);
  assert.equal(result.configPaths[0], path.resolve('rel/path/to/params.yaml'));
  assert.equal(result.buildId, 'build-1');
});

test('parseArgsAndResolveBuildId reports unknown flag for --config', () => {
  const warnCalls = [];
  const logger = {
    log() {},
    warn(...args) {
      warnCalls.push(args);
    },
  };
  const exitStub = (code) => {
    throw { exitCode: code };
  };
  const origExit = process.exit;
  process.exit = exitStub;
  try {
    parseArgsAndResolveBuildId(['--config', 'custom/params.yaml'], {
      logger,
    });
    assert.fail('expected process.exit(1) to be called');
  } catch (err) {
    if (err.exitCode !== undefined) {
      assert.equal(err.exitCode, 1);
      assert.equal(warnCalls.length, 1);
      assert.equal(warnCalls[0][0], 'Unexpected argument: --config');
    } else {
      throw err;
    }
  } finally {
    process.exit = origExit;
  }
});

test('release/build helpers split semver strings', () => {
  assert.equal(getReleaseVersion('1.2.3-dev+build-9'), '1.2.3');
  assert.equal(removeBuildId('1.2.3-dev+build-9'), '1.2.3-dev');
  assert.equal(getBuildId('1.2.3-dev+build-9'), 'build-9');
  assert.equal(getBuildId('1.2.3'), '');
});

test('main default strips pre-release and build metadata in both targets', () => {
  const pkg = { version: '1.2.3-dev+some-build' };
  const hugoYaml = {
    latest: 'v1.2.3',
    dev: 'v1.2.4-dev',
    buildId: 'some-build',
  };
  let writtenPkg;
  let writtenHugoYaml;

  const newVersion = main([], {
    logger: nullLogger,
    readPackageJson: () => pkg,
    writePackageJson: (updatedPkg) => {
      writtenPkg = { ...updatedPkg };
    },
    readHugoYaml: () => ({ ...hugoYaml }),
    writeHugoYaml: (updatedYaml) => {
      writtenHugoYaml = { ...updatedYaml };
    },
  });

  assert.equal(pkg.version, '1.2.3');
  assert.deepEqual(writtenPkg, { version: '1.2.3' });
  assert.equal(writtenHugoYaml.latest, 'v1.2.3');
  assert.equal(writtenHugoYaml.dev, 'v1.2.4-dev');
  assert.equal(writtenHugoYaml.buildId, '');
  assert.equal(newVersion, '1.2.3');
});

test('main --id sets build metadata and preserves pre-release', () => {
  const pkg = { version: '1.2.3-dev+some-build' };
  const hugoYaml = {
    latest: 'v1.2.3',
    dev: 'v1.2.4-dev',
    buildId: 'some-build',
  };
  let writtenPkg;
  let writtenHugoYaml;

  const newVersion = main(['--id', 'custom-build'], {
    logger: nullLogger,
    readPackageJson: () => pkg,
    writePackageJson: (updatedPkg) => {
      writtenPkg = { ...updatedPkg };
    },
    readHugoYaml: () => ({ ...hugoYaml }),
    writeHugoYaml: (updatedYaml) => {
      writtenHugoYaml = { ...updatedYaml };
    },
  });

  assert.equal(pkg.version, '1.2.3-dev+custom-build');
  assert.deepEqual(writtenPkg, { version: '1.2.3-dev+custom-build' });
  assert.equal(writtenHugoYaml.latest, 'v1.2.3');
  assert.equal(writtenHugoYaml.dev, 'v1.2.4-dev');
  assert.equal(writtenHugoYaml.buildId, 'custom-build');
  assert.equal(newVersion, '1.2.3-dev+custom-build');
});

test('main --id "" generates timestamp build metadata', () => {
  const pkg = { version: '1.2.3-dev+some-build' };
  const hugoYaml = {
    latest: 'v1.2.3',
    dev: 'v1.2.4-dev',
    buildId: 'some-build',
  };
  let writtenPkg;
  let writtenHugoYaml;

  const newVersion = main(['--id', ''], {
    logger: nullLogger,
    readPackageJson: () => pkg,
    writePackageJson: (updatedPkg) => {
      writtenPkg = { ...updatedPkg };
    },
    readHugoYaml: () => ({ ...hugoYaml }),
    writeHugoYaml: (updatedYaml) => {
      writtenHugoYaml = { ...updatedYaml };
    },
  });

  assert.match(newVersion, /^1\.2\.3-dev\+\d{8}-\d{4}Z$/);
  assert.match(writtenPkg.version, /^1\.2\.3-dev\+\d{8}-\d{4}Z$/);
  assert.equal(writtenHugoYaml.latest, 'v1.2.3');
  assert.equal(writtenHugoYaml.dev, 'v1.2.4-dev');
  assert.match(writtenHugoYaml.buildId, /^\d{8}-\d{4}Z$/);
});

test('main sets version info from full version string with --version', () => {
  const pkg = { version: '1.0.0+some-build' };
  const hugoYaml = {
    latest: 'v1.0.0',
    dev: 'v1.0.1-dev',
    buildId: 'some-build',
  };
  let writtenPkg;
  let writtenHugoYaml;

  const newVersion = main(['--version', '1.0.1-dev+build-123'], {
    logger: nullLogger,
    readPackageJson: () => pkg,
    writePackageJson: (updatedPkg) => {
      writtenPkg = { ...updatedPkg };
    },
    readHugoYaml: () => ({ ...hugoYaml }),
    writeHugoYaml: (updatedYaml) => {
      writtenHugoYaml = { ...updatedYaml };
    },
  });

  assert.equal(pkg.version, '1.0.1-dev+build-123');
  assert.deepEqual(writtenPkg, { version: '1.0.1-dev+build-123' });
  assert.equal(writtenHugoYaml.latest, 'v1.0.0');
  assert.equal(writtenHugoYaml.dev, 'v1.0.1-dev');
  assert.equal(writtenHugoYaml.buildId, 'build-123');
  assert.equal(newVersion, '1.0.1-dev+build-123');
});

test('main sets version info from --version w/o pre-release or build ID', () => {
  const pkg = { version: '1.0.0+some-build' };
  const hugoYaml = {
    latest: 'v1.0.0',
    dev: 'v1.0.1-dev',
    buildId: 'some-build',
  };
  let writtenPkg;
  let writtenHugoYaml;

  const newVersion = main(['--version', '3.2.1'], {
    logger: nullLogger,
    readPackageJson: () => pkg,
    writePackageJson: (updatedPkg) => {
      writtenPkg = { ...updatedPkg };
    },
    readHugoYaml: () => ({ ...hugoYaml }),
    writeHugoYaml: (updatedYaml) => {
      writtenHugoYaml = { ...updatedYaml };
    },
  });

  assert.equal(pkg.version, '3.2.1');
  assert.deepEqual(writtenPkg, { version: '3.2.1' });
  assert.equal(writtenHugoYaml.latest, 'v3.2.1');
  assert.equal(writtenHugoYaml.dev, 'v3.2.2-dev');
  assert.equal(writtenHugoYaml.buildId, '');
  assert.equal(newVersion, '3.2.1');
});

// TODO: is this functionality we want?
test('set version and build ID from command line', { skip: true }, () => {
  const pkg = { version: '1.2.3' };
  const hugoYaml = {
    latest: 'v1.2.3',
    dev: 'v1.2.4-dev',
    buildId: 'some-build',
  };
  let writtenPkg;
  let writtenHugoYaml;

  const newVersion = main(['--version', '1.3.0', '--id', 'build-123'], {
    logger: nullLogger,
    readPackageJson: () => pkg,
    writePackageJson: (updatedPkg) => {
      writtenPkg = { ...updatedPkg };
    },
    readHugoYaml: () => ({ ...hugoYaml }),
    writeHugoYaml: (updatedYaml) => {
      writtenHugoYaml = { ...updatedYaml };
    },
  });

  assert.equal(pkg.version, '1.3.1-dev+build-123');
  assert.deepEqual(writtenPkg, { version: '1.3.1-dev+build-123' });
  assert.equal(writtenHugoYaml.latest, 'v1.3.0');
  assert.equal(writtenHugoYaml.dev, 'v1.3.1-dev');
  assert.equal(writtenHugoYaml.buildId, 'build-123');
  assert.equal(newVersion, '1.3.1-dev+build-123');
});

test('main with single file argument processes that file', () => {
  const pkg = { version: '1.2.3' };
  const hugoYaml = { latest: 'v1.2.2', dev: 'v1.2.3-dev', buildId: '1' };
  const writtenPaths = [];
  let writtenData;
  const fileArg = 'config/production/params.yaml';

  main([fileArg], {
    logger: nullLogger,
    readPackageJson: () => pkg,
    writePackageJson: () => {},
    readHugoYaml: () => ({ ...hugoYaml }),
    writeHugoYaml: (data, filePath) => {
      writtenPaths.push(filePath);
      writtenData = data;
    },
  });

  assert.equal(writtenPaths.length, 1);
  assert.equal(writtenPaths[0], path.resolve(fileArg));
  assert.equal(writtenData.latest, 'v1.2.3');
  assert.equal(writtenData.dev, 'v1.2.4-dev');
  assert.equal(writtenData.buildId, '');
});

test('main logs when package/hugo versions already match', () => {
  const pkg = { version: '1.0.0+existing' };
  const hugoYaml = { latest: 'v1.0.0', dev: 'v1.0.1-dev', buildId: 'existing' };
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
    readHugoYaml: () => ({ ...hugoYaml }),
    writeHugoYaml: () => {
      writeCallCount += 1;
    },
  });

  assert.equal(writeCallCount, 0);
  assert.equal(newVersion, '1.0.0+existing');
  assert.equal(messages.length, 1);
  assert.match(
    messages[0],
    // Regex to work on both Windows and Unix paths
    /Package version in .+params\.yaml is already set to 1\.0\.0\+existing\./,
  );
});

test('adjustVersionForBuildId replaces build metadata only', () => {
  const result = adjustVersionForBuildId('1.0.0-dev+old', 'build-123');
  assert.equal(result, '1.0.0-dev+build-123');
});
