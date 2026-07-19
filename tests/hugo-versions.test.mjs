// Docsy's Hugo version declarations must stay consistent (see maintainer
// notes, "Hugo versions"). Fast and offline.

import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);

const SEMVER = /^\d+\.\d+\.\d+$/;

/** Extract the first regex capture from a file, asserting a match. */
function extract(relPath, re, what) {
  const text = fs.readFileSync(path.join(repoRoot, relPath), 'utf8');
  const m = text.match(re);
  assert.ok(m, `${what} is declared in ${relPath}`);
  return m[1];
}

const declarations = {
  'theme/theme.toml': () =>
    extract('theme/theme.toml', /^min_version\s*=\s*"([^"]+)"/m, 'min_version'),
  'theme/hugo.yaml': () =>
    extract(
      'theme/hugo.yaml',
      /^\s*hugoVersion:\s*\n(?:\s+extended:.*\n)?\s+min:\s*(\S+)/m,
      'module.hugoVersion.min',
    ),
  'docsy.dev/config/_default/hugo.yaml': () =>
    extract(
      'docsy.dev/config/_default/hugo.yaml',
      /^\s*hugoMinVersion:\s*&hugoMinVersion\s+(\S+)/m,
      'params.hugoMinVersion',
    ),
};

const readJSON = (relPath) =>
  JSON.parse(fs.readFileSync(path.join(repoRoot, relPath), 'utf8'));

const pin = () =>
  readJSON('docsy.dev/package.json').devDependencies['hugo-extended'];

function assertInSync(entries, what) {
  const values = Object.entries(entries).map(([file, get]) => {
    const value = get();
    assert.match(value, SEMVER, `${file} ${what} is X.Y.Z semver`);
    return [file, value];
  });
  const [refFile, reference] = values[0];
  for (const [file, value] of values) {
    assert.equal(value, reference, `${file} ${what} matches ${refFile}`);
  }
  return reference;
}

test('Hugo minimum-version literal declarations are in sync', () => {
  assertInSync(declarations, 'minimum');
});

// docsy.dev's own module.hugoVersion.min must relay the params value via the
// YAML anchor, not restate it (which could then drift silently).
test('docsy.dev module Hugo minimum aliases the params anchor', () => {
  const text = fs.readFileSync(
    path.join(repoRoot, 'docsy.dev/config/_default/hugo.yaml'),
    'utf8',
  );
  assert.match(
    text,
    /^\s*hugoVersion:\s*\n(?:\s+extended:.*\n)?\s+min: \*hugoMinVersion$/m,
    'module.hugoVersion.min references the &hugoMinVersion anchor',
  );
});

test('Hugo minimum is at most the officially supported version', () => {
  const minimum = declarations['theme/theme.toml']();
  const supported = pin();
  assert.match(supported, SEMVER, 'hugo-extended pin is X.Y.Z semver');
  const toParts = (v) => v.split('.').map(Number);
  const cmp = toParts(minimum)
    .map((n, i) => n - toParts(supported)[i])
    .find((d) => d !== 0);
  assert.ok((cmp ?? 0) <= 0, `minimum ${minimum} <= pin ${supported}`);
});

// Blog posts are historical snapshots: they must render Hugo versions
// time-insensitively (see maintainer notes, "Hugo versions"). A version param
// used in a post must be frozen in the post's front matter — page params take
// precedence over site params — and the live hugo-version shortcode is
// off-limits.
test('blog posts freeze the Hugo versions that they render', () => {
  const blogDir = path.join(repoRoot, 'docsy.dev/content/en/blog');
  const posts = fs
    .readdirSync(blogDir, { recursive: true })
    .filter((f) => f.endsWith('.md'));
  assert.ok(posts.length > 0, 'blog posts are found');

  const versionParams = ['hugoMinVersion', 'hugoTarget'];
  let frozenUses = 0;
  for (const post of posts) {
    const text = fs.readFileSync(path.join(blogDir, post), 'utf8');
    assert.doesNotMatch(
      text,
      /\{\{[%<]\s*hugo-version\b/,
      `${post} renders versions time-insensitively`,
    );
    const frontMatter = text.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
    for (const param of versionParams) {
      const use = new RegExp(String.raw`\{\{[%<]\s*_?param\s+"?${param}\b`);
      if (!use.test(text)) continue;
      frozenUses++;
      assert.match(
        frontMatter,
        new RegExp(String.raw`^\s+${param}:`, 'm'),
        `${post} front matter freezes ${param}`,
      );
    }
  }
  assert.ok(frozenUses > 0, 'at least one post uses a frozen version param');
});
