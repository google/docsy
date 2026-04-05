# Golden tests for Markdown output

## Rationale

The `layouts/all.md` template produces Markdown output for all page kinds. A
small set of golden file tests will catch regressions when the template or site
content changes. The project already uses Node's built-in test runner
(`node --test`) for `test:tooling`, so we follow the same pattern -- zero new
dependencies.

## Approach

A single test file reads golden files from a `goldens/` directory and compares
them against the corresponding generated files in `docsy.dev/public/`. The test
**assumes the site has already been built** (same as the existing `test` script
in `docsy.dev/package.json` assumes a build for link checking).

The tests live under `docsy.dev/` because the golden files are specific to the
docsy.dev site content. This keeps the relationship between content, build
output, and expected output colocated. Top-level `tests/` remains available for
theme-level tests that would apply to any Docsy user.

### File structure

```text
docsy.dev/
  tests/
    md-output/
      golden.test.mjs              # test: compare goldens to public/
      update-goldens.sh            # refresh goldens from latest build
      goldens/                     # golden files, mirroring public/ paths
        index.md                         # home page
        blog/index.md                    # section with no description, no body
        docs/content/index.md            # section with description + children
        docs/get-started/index.md        # section with description + body + children
        blog/2022/hello/index.md         # single page with body content
```

### Golden page selection

These five pages cover the main template branches:

- `/` (home) -- has description, body (shortcodes), and children
- `/blog/` (section) -- no description, no body, children only
- `/docs/content/` (section) -- description + children, no body
- `/docs/get-started/` (section) -- description + body + children
- `/blog/2022/hello/` (page) -- description + body, no children

### Test implementation

The test file (`docsy.dev/tests/md-output/golden.test.mjs`):

- Uses `import test from 'node:test'` and
  `import assert from 'node:assert/strict'`
- Walks `goldens/` to discover golden `*.md` files
- For each golden file, asserts strict equality with the corresponding file
  under `../../public/`
- A failing test shows a clear diff of expected vs actual

Pattern (sketch):

```javascript
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const goldenDir = new URL('./goldens/', import.meta.url);
const publicDir = new URL('../../public/', import.meta.url);

function walk(dir) {
  /* recursively yield *.md relative paths */
}

for (const rel of walk(goldenDir)) {
  test(`md-output golden: ${rel}`, () => {
    const expected = readFileSync(new URL(rel, goldenDir), 'utf8');
    const actual = readFileSync(new URL(rel, publicDir), 'utf8');
    assert.equal(actual, expected);
  });
}
```

### npm script

Add to `docsy.dev/package.json` scripts:

```json
"test:md-output": "node --test 'tests/md-output/**/*.test.mjs'"
```

This stays separate from the existing `test` script (which runs format and link
checks). It can be wired into the root `ci:test` pipeline later.

### Updating goldens

A small shell script (`docsy.dev/tests/md-output/update-goldens.sh`) refreshes
all golden files from the latest build output. It walks the existing `goldens/`
directory and copies the corresponding file from `public/` for each one -- the
golden directory itself serves as the manifest, so there is no duplicated file
list.

```bash
#!/usr/bin/env bash
# Refresh golden files from the latest build output.
cd "$(dirname "$0")"
find goldens -name '*.md' | while read -r golden; do
  rel="${golden#goldens/}"
  cp "../../public/$rel" "$golden"
done
```

Wired into `docsy.dev/package.json` as:

```json
"update:md-goldens": "bash tests/md-output/update-goldens.sh"
```

Typical workflow after a template or content change:

```bash
npm run build
npm run update:md-goldens -w docsy.dev
npm run test:md-output -w docsy.dev   # verify
```

To add a new golden page, copy a file from `public/` into
`tests/md-output/goldens/` at the matching relative path. Both the test and the
update script pick it up automatically.

## Notes

- **No new dependencies** -- only `node:test`, `node:assert`, `node:fs`,
  `node:path`.
- **Node >= 22** is already required by `engines` in the root `package.json`.
- The golden files are small (a few KB each) and safe to commit.
- The blog `Hello Docsy!` post has a minor `!.` artifact (description already
  ends with `!`, template appends `.`). The golden captures current behavior;
  the template can be refined separately.
