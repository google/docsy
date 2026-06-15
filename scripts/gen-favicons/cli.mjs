#!/usr/bin/env node
// CLI for generating Docsy's discoverable favicon assets from a source SVG.
// See ./README.md and
// https://docsy.dev/docs/content/iconsimages/#add-your-favicons

import { existsSync } from 'node:fs';
import { DEFAULTS, generate, hasMagick, parseSizes } from './index.mjs';

const PROG = 'gen-favicons';
const SIZE_FLAGS = ['ico', 'png', 'apple'];

const HELP = `Usage: ${PROG} [options] SOURCE.svg [OUTPUT_DIR]

Generate the raster favicons that Docsy's favicons partial discovers
(favicon.ico, favicon-NxN.png, apple-touch-icon.png) from a single source SVG,
using ImageMagick. Keep your favicon.svg alongside the output; the partial
links it directly.

Arguments:
  SOURCE.svg     Source vector image to rasterize.
  OUTPUT_DIR     Where to write the icons (default: current directory).
                 Point this at your site's static/ directory.

Options:
  --ico SIZES    Frame sizes to bundle into favicon.ico. Default: ${DEFAULTS.ico.join(',')}
  --png SIZES    Square favicon-NxN.png sizes to write. Default: ${DEFAULTS.png.join(',')}
  --apple SIZES  apple-touch-icon sizes. Default: ${DEFAULTS.apple.join(',')}
  -h, --help     Show this help and exit.

SIZES is a comma-separated list of pixel sizes (for example 16,32,48), or the
word "none" to skip that icon family. With more than one --apple size, sized
apple-touch-icon-NxN.png companions are written alongside apple-touch-icon.png.

Examples:
  ${PROG} favicon.svg static/
  ${PROG} --png none --ico 16,32,48 favicon.svg static/
  ${PROG} --apple 152,167,180 favicon.svg static/

See: https://docsy.dev/docs/content/iconsimages/#add-your-favicons
`;

function fail(msg, code = 1) {
  process.stderr.write(`error: ${msg}\n`);
  process.exit(code);
}

// Parse argv into { opts, src, out }, or signal help/usage via the return.
function parse(argv) {
  const opts = { ico: DEFAULTS.ico, png: DEFAULTS.png, apple: DEFAULTS.apple };
  const positional = [];
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    let flag;
    let value;
    if (a === '-h' || a === '--help') {
      return { help: true };
    } else if (
      SIZE_FLAGS.includes(a.replace(/^--/, '')) &&
      a.startsWith('--')
    ) {
      flag = a.slice(2);
      value = argv[++i];
      if (value === undefined) fail(`${a} requires a value`, 2);
    } else if (a.startsWith('--') && a.includes('=')) {
      [flag, value] = [a.slice(2, a.indexOf('=')), a.slice(a.indexOf('=') + 1)];
      if (!SIZE_FLAGS.includes(flag)) fail(`unknown option: --${flag}`, 2);
    } else if (a.startsWith('-') && a !== '-') {
      fail(`unknown option: ${a}`, 2);
    } else {
      positional.push(a);
      continue;
    }
    try {
      opts[flag] = parseSizes(value, `--${flag}`);
    } catch (e) {
      fail(e.message, 2);
    }
  }
  return { opts, src: positional[0], out: positional[1] ?? '.' };
}

function main(argv) {
  const parsed = parse(argv);
  if (parsed.help) {
    process.stdout.write(HELP);
    return 0;
  }
  const { opts, src, out } = parsed;
  if (!src) {
    process.stderr.write(HELP);
    return 2;
  }
  if (!existsSync(src)) fail(`source SVG not found: ${src}`);
  if (!hasMagick()) {
    fail(
      'ImageMagick (magick) not found; install it from https://imagemagick.org',
    );
  }
  const dir = out.replace(/\/+$/, '') || '.';
  const written = generate({ src, out, ...opts });
  process.stdout.write(
    `wrote: ${written.map((f) => `${dir}/${f}`).join(' ')}\n`,
  );
  return 0;
}

process.exit(main(process.argv.slice(2)));
