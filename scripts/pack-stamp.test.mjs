// Scenario tests for the pack-time build-ID stamp: normal stamp/restore,
// plus the self-heal paths (stale backup, stranded stamp).

import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

import { packStamp } from './pack-stamp.mjs';

const nullLogger = { log() {}, warn() {} };

function withFixture(version, { backupVersion } = {}, run) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'pack-stamp-'));
  try {
    const manifestPath = path.join(dir, 'package.json');
    const backupPath = path.join(dir, 'backup', 'package.json');
    const writeJson = (p, v) =>
      fs.writeFileSync(p, JSON.stringify({ name: 't', version: v }, null, 2));
    writeJson(manifestPath, version);
    if (backupVersion !== undefined) {
      fs.mkdirSync(path.dirname(backupPath), { recursive: true });
      writeJson(backupPath, backupVersion);
    }
    const opts = {
      manifestPath,
      backupPath,
      getSha: () => 'abcd1234',
      isDirty: () => false,
      logger: nullLogger,
    };
    const readVersion = () =>
      JSON.parse(fs.readFileSync(manifestPath, 'utf8')).version;
    return run({ opts, readVersion, backupPath });
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

test('pre stamps a bare -dev version and post restores it', () => {
  withFixture('0.16.1-dev', {}, ({ opts, readVersion, backupPath }) => {
    packStamp('pre', opts);
    assert.equal(readVersion(), '0.16.1-dev+gabcd1234');
    assert.ok(fs.existsSync(backupPath), 'backup is created');
    packStamp('post', opts);
    assert.equal(readVersion(), '0.16.1-dev');
    assert.ok(!fs.existsSync(backupPath), 'backup is removed');
  });
});

test('pre leaves release and RC versions unstamped', () => {
  for (const version of ['0.16.1', '0.17.0-rc.1']) {
    withFixture(version, {}, ({ opts, readVersion }) => {
      packStamp('pre', opts);
      assert.equal(readVersion(), version);
    });
  }
});

test('pre discards a stale backup instead of restoring it', () => {
  // Backup predates the committed manifest (R2-1): the manifest is
  // authoritative; restoring would downgrade it.
  withFixture(
    '0.16.1-dev',
    { backupVersion: '0.16.0-dev' },
    ({ opts, readVersion, backupPath }) => {
      packStamp('pre', opts);
      assert.equal(
        readVersion(),
        '0.16.1-dev+gabcd1234',
        'current version is stamped',
      );
      packStamp('post', opts);
      assert.equal(
        readVersion(),
        '0.16.1-dev',
        'restore yields the current version',
      );
      assert.ok(!fs.existsSync(backupPath), 'stale backup is gone');
    },
  );
});

test('pre strips a stranded stamp before restamping', () => {
  // Manifest left stamped with no backup (R2-2): self-heal from the manifest
  // itself, then stamp fresh. Covers the current form, a longer git
  // abbreviation, and the retired committed-stamp form (R3-3).
  for (const stranded of [
    '0.16.1-dev+gdeadbeef',
    '0.16.1-dev+gdeadbeef012',
    '0.16.1-dev+gdeadbeef.dirty',
    '0.16.1-dev+004-over-main-616df5f1',
  ]) {
    withFixture(stranded, {}, ({ opts, readVersion }) => {
      packStamp('pre', opts);
      assert.equal(readVersion(), '0.16.1-dev+gabcd1234', `heals ${stranded}`);
      packStamp('post', opts);
      assert.equal(readVersion(), '0.16.1-dev');
    });
  }
});

test('pre keeps the backup when the stamp form is unrecognized', () => {
  withFixture(
    '0.16.1-dev+unknown-form',
    { backupVersion: '0.16.1-dev' },
    ({ opts, readVersion, backupPath }) => {
      packStamp('pre', opts);
      assert.equal(readVersion(), '0.16.1-dev+unknown-form', 'packs as-is');
      assert.ok(fs.existsSync(backupPath), 'backup is preserved');
    },
  );
});

test('pre marks a dirty tree in the stamp', () => {
  withFixture('0.16.1-dev', {}, ({ opts, readVersion }) => {
    packStamp('pre', { ...opts, isDirty: () => true });
    assert.equal(readVersion(), '0.16.1-dev+gabcd1234.dirty');
    packStamp('post', opts);
    assert.equal(readVersion(), '0.16.1-dev');
  });
});

test('pre packs as-is when no git SHA is available', () => {
  withFixture('0.16.1-dev', {}, ({ opts, readVersion, backupPath }) => {
    packStamp('pre', {
      ...opts,
      getSha: () => {
        throw new Error('no git');
      },
    });
    assert.equal(readVersion(), '0.16.1-dev');
    assert.ok(!fs.existsSync(backupPath), 'no backup without a stamp');
  });
});
