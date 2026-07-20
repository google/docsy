// Library behind the gen-favicons CLI: rasterizes a source SVG into the favicon
// assets Docsy's favicons partial discovers, via ImageMagick. See ./README.md.

import { spawnSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

// Default sizes per icon family, matching what the favicons partial discovers.
export const DEFAULTS = { ico: [16, 32, 48], png: [16, 32], apple: [180] };

// The Apple touch icon's artwork sits on an opaque canvas with a small margin,
// because iOS masks the corners; this is the artwork-to-canvas ratio.
const APPLE_INNER_RATIO = 160 / 180;

// Parse a `--flag` value into a sorted list of unique positive integers, or an
// empty list for the literal "none". `flag` names the option for error text.
export function parseSizes(value, flag) {
  if (value === 'none') return [];
  const sizes = String(value)
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => {
      if (!/^\d+$/.test(s) || Number(s) === 0) {
        throw new Error(`${flag}: not a positive integer: "${s}"`);
      }
      return Number(s);
    });
  if (!sizes.length) {
    throw new Error(`${flag}: no sizes given (use "none" to skip)`);
  }
  return [...new Set(sizes)].sort((a, b) => a - b);
}

// True when the ImageMagick `magick` command is available.
export function hasMagick() {
  return spawnSync('magick', ['-version'], { encoding: 'utf8' }).status === 0;
}

// Run ImageMagick, throwing a readable error on failure.
function magick(args) {
  const r = spawnSync('magick', args, { encoding: 'utf8' });
  if (r.status !== 0) {
    throw new Error(`magick ${args.join(' ')} failed:\n${r.stderr ?? ''}`);
  }
}

// favicon.ico bundling the given square frames, transparent background.
function writeIco(src, out, sizes) {
  const tmp = mkdtempSync(join(tmpdir(), 'docsy-ico-'));
  try {
    const frames = sizes.map((s) => {
      const f = join(tmp, `ico_${s}.png`);
      magick(['-background', 'none', src, '-resize', `${s}x${s}`, f]);
      return f;
    });
    magick([...frames, join(out, 'favicon.ico')]);
  } finally {
    rmSync(tmp, { recursive: true, force: true });
  }
}

// One favicon-NxN.png per size, transparent background.
function writePng(src, out, sizes) {
  for (const s of sizes) {
    magick([
      '-background',
      'none',
      src,
      '-resize',
      `${s}x${s}`,
      join(out, `favicon-${s}x${s}.png`),
    ]);
  }
}

// One Apple touch icon at `size`, opaque white with a masked-corner-safe margin.
function renderApple(src, size, file) {
  const inner = Math.round(size * APPLE_INNER_RATIO);
  magick([
    '-background',
    'white',
    src,
    '-resize',
    `${inner}x${inner}`,
    '-gravity',
    'center',
    '-extent',
    `${size}x${size}`,
    '-depth',
    '8',
    '-strip',
    file,
  ]);
}

// The unsized apple-touch-icon.png (at the largest size) is always written; with
// more than one size, each also gets an apple-touch-icon-NxN.png companion.
function writeApple(src, out, sizes) {
  const largest = sizes[sizes.length - 1];
  renderApple(src, largest, join(out, 'apple-touch-icon.png'));
  if (sizes.length > 1) {
    for (const s of sizes) {
      renderApple(src, s, join(out, `apple-touch-icon-${s}x${s}.png`));
    }
  }
}

// Generate the requested favicon assets from `src` into `out`, returning the
// list of written file basenames in link order. Each family is skipped when its
// size list is empty.
export function generate({
  src,
  out = '.',
  ico = DEFAULTS.ico,
  png = DEFAULTS.png,
  apple = DEFAULTS.apple,
}) {
  mkdirSync(out, { recursive: true });
  const written = [];
  if (ico.length) {
    writeIco(src, out, ico);
    written.push('favicon.ico');
  }
  if (png.length) {
    writePng(src, out, png);
    written.push(...png.map((s) => `favicon-${s}x${s}.png`));
  }
  if (apple.length) {
    writeApple(src, out, apple);
    written.push('apple-touch-icon.png');
    if (apple.length > 1) {
      written.push(...apple.map((s) => `apple-touch-icon-${s}x${s}.png`));
    }
  }
  return written;
}
