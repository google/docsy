import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { existsSync, mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const script = fileURLToPath(new URL('./gen-favicons.sh', import.meta.url));
const hasMagick =
  spawnSync('magick', ['-version'], { encoding: 'utf8' }).status === 0;

// Derives the raster favicons Hugo can't generate (favicon.ico, apple-touch).
test(
  'gen-favicons.sh derives root icon assets from an SVG',
  { skip: hasMagick ? false : 'ImageMagick (magick) not installed' },
  () => {
    const dir = mkdtempSync(join(tmpdir(), 'docsy-gen-favicons-'));
    const svg = join(dir, 'favicon.svg');
    writeFileSync(
      svg,
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">' +
        '<rect width="16" height="16" fill="#0099cc"/></svg>\n',
    );
    const res = spawnSync('bash', [script, svg, dir], { encoding: 'utf8' });
    assert.equal(res.status, 0, res.stderr);
    assert.ok(existsSync(join(dir, 'favicon.ico')), 'favicon.ico created');
    assert.ok(
      existsSync(join(dir, 'apple-touch-icon.png')),
      'apple-touch-icon.png created',
    );
  },
);

test('gen-favicons.sh fails clearly without a source argument', () => {
  const res = spawnSync('bash', [script], { encoding: 'utf8' });
  assert.equal(res.status, 2);
  assert.match(res.stderr, /Usage:/);
});
