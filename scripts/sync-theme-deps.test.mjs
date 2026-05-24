import test from 'node:test';
import assert from 'node:assert/strict';

import { syncThemeDeps } from './sync-theme-deps.mjs';

const nullLogger = {
  log() {},
  warn() {},
};

function inMemoryIo({ rootDeps, themeDeps }) {
  const root = { name: 'docsy', dependencies: { ...rootDeps } };
  const theme = { name: 'theme', dependencies: { ...themeDeps } };
  let written;
  return {
    io: {
      readRoot: () => root,
      readTheme: () => theme,
      writeTheme: (data) => {
        written = JSON.parse(JSON.stringify(data));
      },
      logger: nullLogger,
    },
    getWritten: () => written,
  };
}

test('no-op when versions already match', () => {
  const { io, getWritten } = inMemoryIo({
    rootDeps: { bootstrap: '5.3.8', '@fortawesome/fontawesome-free': '6.7.2' },
    themeDeps: { bootstrap: '5.3.8', '@fortawesome/fontawesome-free': '6.7.2' },
  });
  const result = syncThemeDeps(io);
  assert.equal(result.changed, false);
  assert.deepEqual(result.changes, []);
  assert.equal(getWritten(), undefined);
});

test('updates a single drifting version', () => {
  const { io, getWritten } = inMemoryIo({
    rootDeps: { bootstrap: '5.3.9', '@fortawesome/fontawesome-free': '6.7.2' },
    themeDeps: { bootstrap: '5.3.8', '@fortawesome/fontawesome-free': '6.7.2' },
  });
  const result = syncThemeDeps(io);
  assert.equal(result.changed, true);
  assert.deepEqual(result.changes, [
    { name: 'bootstrap', from: '5.3.8', to: '5.3.9' },
  ]);
  assert.equal(getWritten().dependencies.bootstrap, '5.3.9');
  assert.equal(
    getWritten().dependencies['@fortawesome/fontawesome-free'],
    '6.7.2',
  );
});

test('updates multiple drifting versions in one pass', () => {
  const { io, getWritten } = inMemoryIo({
    rootDeps: { bootstrap: '5.3.9', '@fortawesome/fontawesome-free': '6.8.0' },
    themeDeps: { bootstrap: '5.3.8', '@fortawesome/fontawesome-free': '6.7.2' },
  });
  const result = syncThemeDeps(io);
  assert.equal(result.changed, true);
  assert.equal(result.changes.length, 2);
  assert.equal(getWritten().dependencies.bootstrap, '5.3.9');
  assert.equal(
    getWritten().dependencies['@fortawesome/fontawesome-free'],
    '6.8.0',
  );
});

test('warns and does not write for theme-only deps', () => {
  const warnings = [];
  const { io } = inMemoryIo({
    rootDeps: { bootstrap: '5.3.8' },
    themeDeps: { bootstrap: '5.3.8', 'theme-only-thing': '1.0.0' },
  });
  io.logger = {
    log() {},
    warn: (s) => warnings.push(s),
  };
  const result = syncThemeDeps(io);
  assert.equal(result.changed, false);
  assert.deepEqual(result.onlyInTheme, ['theme-only-thing']);
  assert.ok(warnings.some((w) => w.includes('theme-only-thing')));
});

test('warns and does not add for root-only deps', () => {
  const warnings = [];
  const { io } = inMemoryIo({
    rootDeps: { bootstrap: '5.3.8', 'root-only-dev-helper': '2.0.0' },
    themeDeps: { bootstrap: '5.3.8' },
  });
  io.logger = {
    log() {},
    warn: (s) => warnings.push(s),
  };
  const result = syncThemeDeps(io);
  assert.equal(result.changed, false);
  assert.deepEqual(result.onlyInRoot, ['root-only-dev-helper']);
  assert.ok(warnings.some((w) => w.includes('root-only-dev-helper')));
});
