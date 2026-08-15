// Harness for the visual-regression suite: a loopback static server over a
// built fixture site, a Puppeteer page factory tuned for deterministic
// rendering, and a pixelmatch comparison against committed goldens.

import http from 'node:http';
import {
  createReadStream,
  existsSync,
  mkdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from 'node:fs';
import path from 'node:path';
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';
import puppeteer from 'puppeteer';

const mime = {
  '.css': 'text/css',
  '.html': 'text/html',
  '.ico': 'image/x-icon',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.mjs': 'text/javascript',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain',
  '.webmanifest': 'application/manifest+json',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml',
};

export function serveDir(dir) {
  const server = http.createServer((req, res) => {
    let file = path.join(
      dir,
      decodeURIComponent(new URL(req.url, 'http://x').pathname),
    );
    if (existsSync(file) && statSync(file).isDirectory()) {
      file = path.join(file, 'index.html');
    }
    if (!existsSync(file)) {
      res.writeHead(404).end();
      return;
    }
    res.writeHead(200, {
      'content-type': mime[path.extname(file)] ?? 'application/octet-stream',
    });
    createReadStream(file).pipe(res);
  });
  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => {
      resolve({
        origin: `http://127.0.0.1:${server.address().port}`,
        close: () => new Promise((r) => server.close(r)),
      });
    });
  });
}

export async function launchBrowser() {
  try {
    return await puppeteer.launch({
      // GitHub's Ubuntu runners restrict unprivileged user namespaces,
      // which breaks Chrome's sandbox; the fixture site is trusted content.
      args: process.env.CI ? ['--no-sandbox'] : [],
    });
  } catch (cause) {
    throw new Error(
      'Browser launch failed; if none is installed, run: npm run install:chrome',
      { cause },
    );
  }
}

// Screenshot one region under a viewport and color scheme: an element's
// bounding box padded by `pad` CSS px (margins and neighbor spacing are
// outside the border box, so an unpadded element shot can't see them), or
// the full page when no selector is given (full, not viewport-clipped:
// the footer sits below the fold on short fixture pages). Off-origin
// requests are aborted (no web fonts or third-party fetches: deterministic
// and offline-safe) and animations are disabled before capture.
export async function shootRegion(
  browser,
  { url, selector, viewport, scheme, pad = 24 },
) {
  const page = await browser.newPage();
  try {
    await page.setViewport(viewport);
    await page.emulateMediaFeatures([
      { name: 'prefers-color-scheme', value: scheme },
    ]);
    await page.setRequestInterception(true);
    const origin = new URL(url).origin;
    page.on('request', (req) =>
      req.url().startsWith(origin) ? req.continue() : req.abort(),
    );
    await page.goto(url, { waitUntil: 'networkidle0' });
    await page.evaluate(() => {
      const style = document.createElement('style');
      style.textContent =
        '*, *::before, *::after { animation: none !important; transition: none !important; caret-color: transparent !important; }';
      document.head.append(style);
    });
    let options = { type: 'png', fullPage: !selector };
    if (selector) {
      const element = await page.$(selector);
      if (!element) {
        throw new Error(`selector not found: ${selector} at ${url}`);
      }
      const box = await element.boundingBox();
      if (!box) throw new Error(`no bounding box: ${selector} at ${url}`);
      options.clip = {
        x: Math.max(0, box.x - pad),
        y: Math.max(0, box.y - pad),
        width: Math.min(viewport.width, box.width + 2 * pad),
        height: box.height + 2 * pad,
      };
    }
    return PNG.sync.read(await page.screenshot(options));
  } finally {
    await page.close();
  }
}

// Compare a shot against its golden. Returns null on match; on mismatch,
// writes actual (and diff, when comparable) PNGs under outDir and returns
// a failure description.
export function compareToGolden(name, actual, goldenFile, outDir) {
  const writeActual = () => {
    mkdirSync(outDir, { recursive: true });
    const file = path.join(outDir, `${name}-actual.png`);
    writeFileSync(file, PNG.sync.write(actual));
    return file;
  };
  if (!existsSync(goldenFile)) {
    return `golden ${goldenFile} is missing (actual written to ${writeActual()}); to create it, run: npm run update:visual-goldens`;
  }
  const expected = PNG.sync.read(readFileSync(goldenFile));
  if (expected.width !== actual.width || expected.height !== actual.height) {
    return `size ${actual.width}x${actual.height} differs from golden ${expected.width}x${expected.height} (actual written to ${writeActual()})`;
  }
  const diff = new PNG({ width: actual.width, height: actual.height });
  const mismatched = pixelmatch(
    expected.data,
    actual.data,
    diff.data,
    actual.width,
    actual.height,
    { threshold: 0.1 },
  );
  if (mismatched === 0) return null;
  writeActual();
  const diffFile = path.join(outDir, `${name}-diff.png`);
  writeFileSync(diffFile, PNG.sync.write(diff));
  return `${mismatched} pixels differ from golden (diff written to ${diffFile})`;
}
