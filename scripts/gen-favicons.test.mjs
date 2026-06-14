// cSpell:ignore magick
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

    const ico = join(dir, 'favicon.ico');
    const apple = join(dir, 'apple-touch-icon.png');
    assert.ok(existsSync(ico), 'favicon.ico created');
    assert.ok(existsSync(apple), 'apple-touch-icon.png created');

    // Guard the script's contract: the .ico bundles 16/32/48px frames and the
    // Apple touch icon is the expected 180x180.
    const frames = spawnSync(
      'magick',
      ['identify', '-format', '%wx%h\n', ico],
      {
        encoding: 'utf8',
      },
    );
    assert.equal(frames.status, 0, frames.stderr);
    for (const size of ['16x16', '32x32', '48x48']) {
      assert.ok(
        frames.stdout.includes(size),
        `favicon.ico missing ${size} frame; got:\n${frames.stdout}`,
      );
    }
    const appleSize = spawnSync(
      'magick',
      ['identify', '-format', '%wx%h', apple],
      { encoding: 'utf8' },
    );
    assert.equal(appleSize.status, 0, appleSize.stderr);
    assert.equal(appleSize.stdout, '180x180');
  },
);

test('gen-favicons.sh fails clearly without a source argument', () => {
  const res = spawnSync('bash', [script], { encoding: 'utf8' });
  assert.equal(res.status, 2);
  assert.match(res.stderr, /Usage:/);
});
