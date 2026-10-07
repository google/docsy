// Docsy's version declarations must stay consistent, among themselves and with
// the versions that draft blog posts freeze (maintainer notes, "Hugo versions",
// "Dependency updates", and "Content placement"). Fast and offline.

import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { parse } from 'yaml';

import { STABLE_SEMVER } from '../scripts/update-dep.mjs';

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);

/** Extract the first regex capture from a file, asserting a match. */
function extract(relPath, re, what) {
  const text = fs.readFileSync(path.join(repoRoot, relPath), 'utf8');
  const m = text.match(re);
  assert.ok(m, `${what} is declared in ${relPath}`);
  return m[1];
}

// First entry is the canonical min-version home; assertInSync anchors on it.
const declarations = {
  'theme/hugo.yaml': () =>
    extract(
      'theme/hugo.yaml',
      /^\s*hugoVersion:\s*\n(?:\s+extended:.*\n)?\s+min:\s*(\S+)/m,
      'module.hugoVersion.min',
    ),
  'theme/theme.toml': () =>
    extract('theme/theme.toml', /^min_version\s*=\s*"([^"]+)"/m, 'min_version'),
  'docsy.dev/config/_default/hugo.yaml': () =>
    extract(
      'docsy.dev/config/_default/hugo.yaml',
      /^\s*hugoMinVersion:\s*&hugoMinVersion\s+(\S+)/m,
      'params.hugoMinVersion',
    ),
};

const readJSON = (relPath) =>
  JSON.parse(fs.readFileSync(path.join(repoRoot, relPath), 'utf8'));

const pin = () => readJSON('package.json').devDependencies['hugo-extended'];

function assertInSync(entries, what) {
  const values = Object.entries(entries).map(([file, get]) => {
    const value = get();
    assert.match(value, STABLE_SEMVER, `${file} ${what} is X.Y.Z semver`);
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

// Two homes by platform constraint: workflows and nvm read the root file,
// while Netlify reads only its base directory's (docsy.dev), with no root
// fallback. Exact pins, so every consumer resolves the same Node; upward
// skew between the two would pass engine-strict on both sides and split
// CI from Netlify silently.
test('Node toolchain pins (.nvmrc) are exact and in sync', () => {
  // Whole-file reads: a second version token would make consumers
  // disagree about the pin while a first-line extract stays green.
  const nvmrcPin = (relPath) => () =>
    extract(relPath, /^(\S+)\n?$/, 'the Node pin');
  assertInSync(
    {
      '.nvmrc': nvmrcPin('.nvmrc'),
      'docsy.dev/.nvmrc': nvmrcPin('docsy.dev/.nvmrc'),
    },
    'Node pin',
  );
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
  const minimum = declarations['theme/hugo.yaml']();
  const supported = pin();
  assert.match(supported, STABLE_SEMVER, 'hugo-extended pin is X.Y.Z semver');
  const toParts = (v) => v.split('.').map(Number);
  const cmp = toParts(minimum)
    .map((n, i) => n - toParts(supported)[i])
    .find((d) => d !== 0);
  assert.ok((cmp ?? 0) <= 0, `minimum ${minimum} <= pin ${supported}`);
});

const blogDir = path.join(repoRoot, 'docsy.dev/content/en/blog');
const blogPosts = () =>
  fs.readdirSync(blogDir, { recursive: true }).filter((f) => f.endsWith('.md'));
const frontMatterOf = (text) => text.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';

// Hugo resolves a page param only when it is a top-level front-matter field or
// a direct child of `params:`; a deeper-nested param is silently ignored and
// the live site value is rendered instead.
const pageParamOf = (frontMatter, param) => {
  const entry = (prefix) =>
    new RegExp(String.raw`^${prefix}${param}:[ \t]*['"]?([^'"\s]+)`, 'm');
  const paramsBlock = frontMatter.match(/^params:\n((?: +.*\n?)*)/m)?.[1] ?? '';
  return (
    frontMatter.match(entry(''))?.[1] ?? paramsBlock.match(entry('  '))?.[1]
  );
};

// Script-dependency pins (maintainer notes, "Default script-dependency
// versions").
const themeParams = () =>
  parse(fs.readFileSync(path.join(repoRoot, 'theme/hugo.yaml'), 'utf8')).params;
const scriptPin = (get) => () => {
  const value = get(themeParams());
  assert.ok(value, 'script pin is declared in theme/hugo.yaml');
  return String(value);
};

// Version params that posts freeze from a live declaration, mapped to it.
const liveVersions = {
  hugoMinVersion: declarations['theme/hugo.yaml'],
  hugoSupportedVersion: pin,
  sassEmbeddedVersion: () =>
    readJSON('package.json').devDependencies['sass-embedded'],
  katexVersion: scriptPin((p) => p.katex?.version),
  redocVersion: scriptPin((p) => p.redoc?.version),
  mermaidVersion: scriptPin((p) => p.docsy?.plugins?.mermaid?.version),
  markmapVersion: scriptPin((p) => p.docsy?.plugins?.markmap?.version),
};

// A post that renders a declared version param must freeze it in its front
// matter (maintainer notes, "Hugo versions" and "Content placement").
test('blog posts freeze the versions that they render', () => {
  const posts = blogPosts();
  assert.ok(posts.length > 0, 'blog posts are found');

  let frozenUses = 0;
  for (const post of posts) {
    const text = fs.readFileSync(path.join(blogDir, post), 'utf8');
    assert.doesNotMatch(
      text,
      /\{\{[%<]\s*hugo-version\b/,
      `${post} renders versions time-insensitively`,
    );
    const frontMatter = frontMatterOf(text);
    for (const param of Object.keys(liveVersions)) {
      const use = new RegExp(String.raw`\{\{[%<]\s*_?param\s+"?${param}\b`);
      if (!use.test(text)) continue;
      frozenUses++;
      assert.match(
        pageParamOf(frontMatter, param) ?? '',
        /^\d+\.\d+\.\d+$/,
        `${post} freezes ${param} as an effective page param`,
      );
    }
  }
  assert.ok(frozenUses > 0, 'at least one post uses a frozen version param');
});

// Frozen versions snapshot publish-time values, so until a post is published
// they must track the live declarations. Also keeps companion posts in
// agreement. Dormant for published posts, whose values age by design.
test('draft posts freeze the currently declared versions', () => {
  for (const post of blogPosts()) {
    const frontMatter = frontMatterOf(
      fs.readFileSync(path.join(blogDir, post), 'utf8'),
    );
    if (!/^draft: true$/m.test(frontMatter)) continue;
    for (const [param, live] of Object.entries(liveVersions)) {
      const frozen = pageParamOf(frontMatter, param);
      if (frozen === undefined) continue;
      assert.equal(frozen, live(), `${post} freezes the current ${param}`);
    }
  }
});

// A draft guide whose title advertises an upper version bound (`0.166.x`, or
// an exact `0.166.0`) must keep it on the frozen target: advancing
// hugoSupportedVersion forces the guide's title and coverage to be reviewed.
test('draft post titles cover the frozen supported Hugo version', () => {
  for (const post of blogPosts()) {
    const frontMatter = frontMatterOf(
      fs.readFileSync(path.join(blogDir, post), 'utf8'),
    );
    if (!/^draft: true$/m.test(frontMatter)) continue;
    const title = frontMatter.match(/^title:(.*)$/m)?.[1] ?? '';
    // The last version in a Hugo guide's title is its upper bound.
    const bound = title.match(
      /^\s*Hugo\b.*\b(\d+\.\d+\.(?:x|\d+))\b(?!.*\b\d+\.\d+\.(?:x|\d+)\b)/,
    )?.[1];
    if (!bound) continue;
    const target = pageParamOf(frontMatter, 'hugoSupportedVersion');
    const covers = bound.endsWith('.x')
      ? target?.startsWith(bound.slice(0, -1))
      : target === bound;
    assert.ok(
      covers,
      `${post} title bound ${bound} covers hugoSupportedVersion ${target}`,
    );
  }
});
