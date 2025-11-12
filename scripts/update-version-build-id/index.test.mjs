import test from 'node:test';
import assert from 'node:assert/strict';

import { parseArgsAndResolveBuildId, main } from './index.mjs';

const nullLogger = {
  log() {},
  warn() {},
};

test('parseArgsAndResolveBuildId enables silent flag via -s', () => {
  const result = parseArgsAndResolveBuildId(['-s', 'custom-build'], { logger: nullLogger });
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

  const result = parseArgsAndResolveBuildId([''], { logger: capturingLogger });
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

  const result = parseArgsAndResolveBuildId(['', '--silent'], { logger: capturingLogger });
  assert.equal(result.buildId, '');
  assert.equal(result.silent, true);
  assert.deepEqual(messages, []);
});

test('main updates package data when build ID changes', () => {
  const pkg = { version: '1.0.0' };
  let writtenPkg;
  const messages = [];
  const logger = {
    log(message) {
      messages.push(message);
    },
  };

  const newVersion = main(['custom-build'], {
    logger,
    readPackageJson: () => pkg,
    writePackageJson: (updatedPkg) => {
      writtenPkg = { ...updatedPkg };
    },
  });

  assert.equal(pkg.version, '1.0.0+custom-build');
  assert.deepEqual(writtenPkg, { version: '1.0.0+custom-build' });
  assert.equal(newVersion, '1.0.0+custom-build');
  assert.deepEqual(messages, ['✓ Updated version: 1.0.0 → 1.0.0+custom-build']);
});

test('main logs updated build ID even with silent flag', () => {
  const pkg = { version: '1.0.0' };
  let writtenPkg;
  const messages = [];
  const logger = {
    log(message) {
      messages.push(message);
    },
  };

  const newVersion = main(['custom-build', '--silent'], {
    logger,
    readPackageJson: () => pkg,
    writePackageJson: (updatedPkg) => {
      writtenPkg = { ...updatedPkg };
    },
  });

  assert.equal(pkg.version, '1.0.0+custom-build');
  assert.deepEqual(writtenPkg, { version: '1.0.0+custom-build' });
  assert.equal(newVersion, '1.0.0+custom-build');
  assert.deepEqual(messages, ['✓ Updated version: 1.0.0 → 1.0.0+custom-build']);
});

test('main logs when version already matches', () => {
  const pkg = { version: '1.0.0+existing' };
  let writeCallCount = 0;
  const messages = [];
  const logger = {
    log(message) {
      messages.push(message);
    },
  };

  const newVersion = main(['existing'], {
    logger,
    readPackageJson: () => pkg,
    writePackageJson: () => {
      writeCallCount += 1;
    },
  });

  assert.equal(pkg.version, '1.0.0+existing');
  assert.equal(writeCallCount, 0);
  assert.equal(newVersion, '1.0.0+existing');
  assert.deepEqual(messages, ['Package version is already set to 1.0.0+existing.']);
});

test('main reports no change with silent flag', () => {
  const pkg = { version: '1.0.0+existing' };
  let writeCallCount = 0;
  const messages = [];
  const logger = {
    log(message) {
      messages.push(message);
    },
  };

  const newVersion = main(['existing', '--silent'], {
    logger,
    readPackageJson: () => pkg,
    writePackageJson: () => {
      writeCallCount += 1;
    },
  });

  assert.equal(pkg.version, '1.0.0+existing');
  assert.equal(writeCallCount, 0);
  assert.equal(newVersion, '1.0.0+existing');
  assert.deepEqual(messages, []);
});

