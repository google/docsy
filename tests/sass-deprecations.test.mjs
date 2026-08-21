// Guards the docsy#2731 outcome: Docsy's own Sass sources emit no
// deprecation warnings other than import-class ones (which stay until the
// @use refactor; gated on Bootstrap shipping a Sass module system). Hugo
// builds silence all dependency deprecations (see head-css.html), so a
// Docsy-origin regression would otherwise be invisible; this probe compiles
// the theme directly with the pinned dart-sass, verbose so warning dedup
// can't hide occurrences, and attributes every warning to its source file.

import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { compile } from 'sass-embedded';

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);
const themeScss = path.join(repoRoot, 'theme', 'assets', 'scss');
const vendors = {
  bootstrap: path.join(repoRoot, 'theme', 'node_modules', 'bootstrap'),
  'Font-Awesome': path.join(
    repoRoot,
    'theme',
    'node_modules',
    '@fortawesome',
    'fontawesome-free',
  ),
};

// Compile a copy of the theme tree laid out as Hugo mounts it (scss/ and
// vendor/ as siblings), with project stubs that pull in the opt-in surface
// (extras, dark mode, Google fonts) so warnings from opt-in partials are
// caught too.
function compileTheme() {
  const tmpBase = path.join(repoRoot, 'tmp');
  fs.mkdirSync(tmpBase, { recursive: true });
  const dir = fs.realpathSync(
    fs.mkdtempSync(path.join(tmpBase, 'sass-deprecations-')),
  );
  try {
    const scssDir = path.join(dir, 'scss');
    fs.cpSync(themeScss, scssDir, { recursive: true });
    fs.mkdirSync(path.join(dir, 'vendor'));
    for (const [name, target] of Object.entries(vendors)) {
      assert.ok(
        fs.existsSync(target),
        `theme dependency ${name} is installed (run npm install)`,
      );
      // Junction type: works without privileges on Windows CI; ignored on
      // other platforms.
      fs.symlinkSync(target, path.join(dir, 'vendor', name), 'junction');
    }
    fs.writeFileSync(
      path.join(scssDir, '_variables_project.scss'),
      '$td-enable-google-fonts: true;\n$enable-dark-mode: true;\n',
    );
    fs.writeFileSync(
      path.join(scssDir, '_styles_project.scss'),
      [
        "@import 'td/extra/index';",
        "@import 'td/extra/bs-defaults';",
        "@import 'td/color-adjustments-dark';",
        "@import 'td/code-dark';",
        "@import 'td/gcs-search-dark';",
        '',
      ].join('\n'),
    );

    const warnings = [];
    const result = compile(path.join(scssDir, 'main.scss'), {
      verbose: true,
      logger: {
        warn(_message, opts) {
          warnings.push({
            deprecation: opts.deprecation,
            id: opts.deprecationType?.id ?? null,
            url: opts.span?.url?.href ?? null,
          });
        },
      },
    });
    const loaded = new Set(result.loadedUrls.map((u) => u.href));
    const unreached = fs
      .readdirSync(path.join(scssDir, 'td'), { recursive: true })
      .filter((f) => f.endsWith('.scss'))
      .map((f) => pathToFileURL(path.join(scssDir, 'td', f)).href)
      .filter((u) => !loaded.has(u));
    return { warnings, loadedCount: loaded.size, unreached, scssDir };
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

test('Docsy Sass sources emit no non-import deprecation warnings', (t) => {
  const { warnings, loadedCount, unreached, scssDir } = compileTheme();
  const scssUrl = pathToFileURL(scssDir + path.sep).href;
  const docsy = warnings.filter(
    (w) => w.deprecation && w.url?.startsWith(scssUrl),
  );

  // Sanity: the verbose compile surfaces warnings (vendor deprecations exist),
  // and origin attribution works (Docsy's own import-class warnings exist).
  // When the @use refactor zeroes the import class, the second assertion goes
  // red: tighten this probe to "no Docsy warnings at all".
  assert.ok(warnings.length > 0, 'verbose compile captures warnings');
  assert.ok(
    docsy.some((w) => w.id === 'import'),
    'warning attribution resolves Docsy-origin (import-class) warnings',
  );

  const offending = docsy.filter((w) => w.id !== 'import');
  assert.deepEqual(
    offending,
    [],
    'Docsy Sass sources are free of non-import deprecation warnings',
  );

  // Sanity: the probe's opt-in stubs compile the whole Docsy tree, so no
  // partial escapes the guard.
  assert.deepEqual(
    unreached,
    [],
    'every theme Sass partial is loaded by the probe compile',
  );
  t.diagnostic(
    `Scanned ${warnings.length} warnings across ${loadedCount} loaded files`,
  );
});
