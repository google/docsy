import test from 'node:test';
import assert from 'node:assert/strict';

import {
  parseArgsAndResolveBuildId,
  main,
  adjustVersionForBuildId,
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

test('parseArgsAndResolveBuildId falls back to timestamp when build ID omitted', () => {
  const result = parseArgsAndResolveBuildId([], { logger: nullLogger });
  assert.match(result.buildId, /^\d{8}-\d{4}Z$/);
  assert.equal(result.silent, false);
});

test('parseArgsAndResolveBuildId logs when removing build ID unless silent', () => {
  const messages = [];
  const capturingLogger = {
    log(message) {
      messages.push(message);
    },
    warn() {},
  };

  const result = parseArgsAndResolveBuildId(['--id', ''], {
    logger: capturingLogger,
  });
  assert.equal(result.buildId, '');
  assert.equal(result.silent, false);
  assert.deepEqual(messages, [
    'Build-ID argument is empty, so we will remove the build ID from the version.',
  ]);
});

test('parseArgsAndResolveBuildId suppresses removal log in silent mode', () => {
  const messages = [];
  const capturingLogger = {
    log(message) {
      messages.push(message);
    },
    warn() {},
  };

  const result = parseArgsAndResolveBuildId(['--id', '', '--silent'], {
    logger: capturingLogger,
  });
  assert.equal(result.buildId, '');
  assert.equal(result.silent, true);
  assert.deepEqual(messages, []);
});

test('main updates package data when build ID changes', () => {
  const pkg = { version: '1.0.0-dev' }; // Use dev version to avoid adjustment
  const hugoYaml = { params: { version: '1.0.0-dev' } };
  let writtenPkg;
  let writeHugoYamlCallCount = 0;
  const messages = [];
  const logger = {
    log(message) {
      messages.push(message);
    },
  };

  const newVersion = main(['--id', 'custom-build'], {
    logger,
    readPackageJson: () => pkg,
    writePackageJson: (updatedPkg) => {
      writtenPkg = { ...updatedPkg };
    },
    readHugoYaml: () => ({ ...hugoYaml }),
    writeHugoYaml: () => {
      writeHugoYamlCallCount += 1;
    },
  });

  assert.equal(pkg.version, '1.0.0-dev+custom-build');
  assert.deepEqual(writtenPkg, { version: '1.0.0-dev+custom-build' });
  assert.equal(writeHugoYamlCallCount, 0); // hugo.yaml should not be updated
  assert.equal(newVersion, '1.0.0-dev+custom-build');
  assert.deepEqual(messages, [
    '✓ Updated version: 1.0.0-dev → 1.0.0-dev+custom-build',
  ]);
});

test('main logs updated build ID even with silent flag', () => {
  const pkg = { version: '1.0.0-dev' }; // Use dev version to avoid adjustment
  const hugoYaml = { params: { version: '1.0.0-dev' } };
  let writtenPkg;
  let writeHugoYamlCallCount = 0;
  const messages = [];
  const logger = {
    log(message) {
      messages.push(message);
    },
  };

  const newVersion = main(['--id', 'custom-build', '--silent'], {
    logger,
    readPackageJson: () => pkg,
    writePackageJson: (updatedPkg) => {
      writtenPkg = { ...updatedPkg };
    },
    readHugoYaml: () => ({ ...hugoYaml }),
    writeHugoYaml: () => {
      writeHugoYamlCallCount += 1;
    },
  });

  assert.equal(pkg.version, '1.0.0-dev+custom-build');
  assert.deepEqual(writtenPkg, { version: '1.0.0-dev+custom-build' });
  assert.equal(writeHugoYamlCallCount, 0); // hugo.yaml should not be updated
  assert.equal(newVersion, '1.0.0-dev+custom-build');
  assert.deepEqual(messages, [
    '✓ Updated version: 1.0.0-dev → 1.0.0-dev+custom-build',
  ]);
});

test('main logs when version already matches', () => {
  const pkg = { version: '1.0.0-dev+existing' }; // Use dev version to avoid adjustment
  const hugoYaml = { params: { version: '1.0.0-dev' } };
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

  assert.equal(pkg.version, '1.0.0-dev+existing');
  assert.equal(writeCallCount, 0);
  assert.equal(newVersion, '1.0.0-dev+existing');
  assert.deepEqual(messages, [
    'Package version is already set to 1.0.0-dev+existing.',
  ]);
});

test('main reports no change with silent flag', () => {
  const pkg = { version: '1.0.0-dev+existing' }; // Use dev version to avoid adjustment
  const hugoYaml = { params: { version: '1.0.0-dev' } };
  let writeCallCount = 0;
  const messages = [];
  const logger = {
    log(message) {
      messages.push(message);
    },
  };

  const newVersion = main(['--id', 'existing', '--silent'], {
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

  assert.equal(pkg.version, '1.0.0-dev+existing');
  assert.equal(writeCallCount, 0);
  assert.equal(newVersion, '1.0.0-dev+existing');
  assert.deepEqual(messages, []);
});

test('parseArgsAndResolveBuildId accepts --version option', () => {
  const result = parseArgsAndResolveBuildId(['--version', '2.0.0'], {
    logger: nullLogger,
  });
  assert.equal(result.version, '2.0.0');
  assert.equal(result.buildId, undefined);
  assert.equal(result.silent, false);
});

test('parseArgsAndResolveBuildId --version takes precedence over --id', () => {
  const result = parseArgsAndResolveBuildId(
    ['--version', '2.0.0', '--id', 'build-123'],
    { logger: nullLogger },
  );
  assert.equal(result.version, '2.0.0');
  assert.equal(result.buildId, 'build-123'); // Still parsed but will be ignored
  assert.equal(result.silent, false);
});

test('main sets entire version with --version', () => {
  const pkg = { version: '1.0.0' };
  const hugoYaml = { params: { version: '1.0.0' } };
  let writtenPkg;
  let writtenHugoYaml;
  const messages = [];
  const logger = {
    log(message) {
      messages.push(message);
    },
  };

  const newVersion = main(['--version', '2.0.0'], {
    logger,
    readPackageJson: () => pkg,
    writePackageJson: (updatedPkg) => {
      writtenPkg = { ...updatedPkg };
    },
    readHugoYaml: () => ({ ...hugoYaml }),
    writeHugoYaml: (updatedYaml) => {
      writtenHugoYaml = { ...updatedYaml };
    },
  });

  assert.equal(pkg.version, '2.0.0');
  assert.deepEqual(writtenPkg, { version: '2.0.0' });
  assert.equal(writtenHugoYaml.params.version, '2.0.0');
  assert.equal(newVersion, '2.0.0');
  assert.deepEqual(messages, [
    '✓ Updated version: 1.0.0 → 2.0.0',
    '✓ Updated hugo.yaml version: 1.0.0 → 2.0.0',
  ]);
});

test('main --version takes precedence over --id', () => {
  const pkg = { version: '1.0.0+old-build' };
  const hugoYaml = { params: { version: '1.0.0' } };
  let writtenPkg;
  let writtenHugoYaml;
  const messages = [];
  const logger = {
    log(message) {
      messages.push(message);
    },
  };

  const newVersion = main(['--version', '2.0.0', '--id', 'new-build'], {
    logger,
    readPackageJson: () => pkg,
    writePackageJson: (updatedPkg) => {
      writtenPkg = { ...updatedPkg };
    },
    readHugoYaml: () => ({ ...hugoYaml }),
    writeHugoYaml: (updatedYaml) => {
      writtenHugoYaml = { ...updatedYaml };
    },
  });

  assert.equal(pkg.version, '2.0.0');
  assert.deepEqual(writtenPkg, { version: '2.0.0' });
  assert.equal(writtenHugoYaml.params.version, '2.0.0');
  assert.equal(newVersion, '2.0.0');
  assert.deepEqual(messages, [
    '✓ Updated version: 1.0.0+old-build → 2.0.0',
    '✓ Updated hugo.yaml version: 1.0.0 → 2.0.0',
  ]);
});

test('main does not update hugo.yaml when using --id', () => {
  const pkg = { version: '1.0.0-dev' };
  const hugoYaml = { params: { version: '0.9.0' } }; // Different version, but should not be updated
  let writeHugoYamlCallCount = 0;
  const messages = [];
  const logger = {
    log(message) {
      messages.push(message);
    },
  };

  const newVersion = main(['--id', 'build-123'], {
    logger,
    readPackageJson: () => pkg,
    writePackageJson: () => {},
    readHugoYaml: () => ({ ...hugoYaml }),
    writeHugoYaml: () => {
      writeHugoYamlCallCount += 1;
    },
  });

  assert.equal(pkg.version, '1.0.0-dev+build-123');
  assert.equal(writeHugoYamlCallCount, 0); // hugo.yaml should not be updated
  assert.equal(newVersion, '1.0.0-dev+build-123');
  assert.deepEqual(messages, [
    '✓ Updated version: 1.0.0-dev → 1.0.0-dev+build-123',
  ]);
});

test('main adjusts non-dev version when adding build ID', () => {
  const pkg = { version: '1.0.0' };
  const hugoYaml = { params: { version: '1.0.0' } };
  let writtenPkg;
  let writeHugoYamlCallCount = 0;
  const messages = [];
  const warnings = [];
  const logger = {
    log(message) {
      messages.push(message);
    },
    warn(message) {
      warnings.push(message);
    },
  };

  const newVersion = main(['--id', 'build-123'], {
    logger,
    readPackageJson: () => pkg,
    writePackageJson: (updatedPkg) => {
      writtenPkg = { ...updatedPkg };
    },
    readHugoYaml: () => ({ ...hugoYaml }),
    writeHugoYaml: () => {
      writeHugoYamlCallCount += 1;
    },
  });

  assert.equal(pkg.version, '1.0.1-dev+build-123');
  assert.deepEqual(writtenPkg, { version: '1.0.1-dev+build-123' });
  assert.equal(writeHugoYamlCallCount, 0); // hugo.yaml should not be updated
  assert.equal(newVersion, '1.0.1-dev+build-123');
  assert.deepEqual(warnings, [
    'Warning: Adding build ID to non-dev version. Incrementing patch version and adding -dev suffix.',
  ]);
  assert.deepEqual(messages, [
    '✓ Updated version: 1.0.0 → 1.0.1-dev+build-123',
  ]);
});

test('adjustVersionForBuildId adds build ID to dev version', () => {
  const result = adjustVersionForBuildId('1.0.0-dev', 'build-123', {
    logger: nullLogger,
  });
  assert.equal(result, '1.0.0-dev+build-123');
});

test('adjustVersionForBuildId increments patch and adds -dev for non-dev version', () => {
  const warnings = [];
  const logger = {
    warn(message) {
      warnings.push(message);
    },
  };

  const result = adjustVersionForBuildId('1.0.0', 'build-123', { logger });
  assert.equal(result, '1.0.1-dev+build-123');
  assert.deepEqual(warnings, [
    'Warning: Adding build ID to non-dev version. Incrementing patch version and adding -dev suffix.',
  ]);
});

test('adjustVersionForBuildId handles version without build ID', () => {
  const result = adjustVersionForBuildId('1.0.0-dev', '', {
    logger: nullLogger,
  });
  assert.equal(result, '1.0.0-dev');
});

test('adjustVersionForBuildId handles unrecognized version format', () => {
  const warnings = [];
  const logger = {
    warn(message) {
      warnings.push(message);
    },
  };

  const result = adjustVersionForBuildId('invalid-version', 'build-123', {
    logger,
  });
  assert.equal(result, 'invalid-version-dev+build-123');
  assert.deepEqual(warnings, [
    'Warning: Adding build ID to non-dev version. Incrementing patch version and adding -dev suffix.',
    'Warning: Version format not recognized (invalid-version). Appending -dev suffix.',
  ]);
});
