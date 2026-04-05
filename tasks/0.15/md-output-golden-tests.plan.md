# Golden tests for Markdown output

## Rationale

The `layouts/all.md` template supports Markdown output for all page kinds. A
small set of golden file tests will catch regressions when the template or site
content changes. Follows the existing `node --test` pattern used by
`test:tooling` -- zero new dependencies.

## Approach

A test file compares golden files against the corresponding generated files in
`docsy.dev/public/`. The test assumes the site has already been built.

The tests live under `docsy.dev/` because the golden files are specific to the
docsy.dev site content, keeping content, build output, and expected output
colocated. Top-level `tests/` remains available for theme-level tests.

### File structure

```text
docsy.dev/
  tests/
    md-output/
      goldens.json                 # manifest: path + coverage rationale
      golden.test.mjs              # test: compare goldens to public/
      update-goldens.sh            # refresh goldens from latest build
      goldens/                     # golden files, mirroring public/ paths
```

### Key design decisions

- `goldens.json` is the single source of truth: it lists each golden with
  `path`, a descriptive `kind` (Hugo page kind), and a `covers` list of template
  attributes exercised (prefixed with `!` when absent). Both the test and the
  update script read it. Adding a new golden means adding a manifest entry and
  copying the file.
- The initial goldens cover the main template branches (presence/absence of
  description, body, and children across home, section, and page kinds).
- `kind` and `covers` appear in test runner output for self-documenting results;
  neither affects test logic.

### Workflow

```bash
npm run build
npm run update:md-goldens -w docsy.dev
npm run test:md-output -w docsy.dev   # verify
```

npm scripts in `docsy.dev/package.json`: `test:md-output` and
`update:md-goldens`. `test:md-output` can still be run directly while iterating,
but it is also wired into the existing `test` script so format, link, and
Markdown-output regressions are checked together on `docsy.dev`.

## Coverage gaps

Current goldens fully cover the `section` kind (all description × body ×
children combinations) but only one `page`-kind cell (description + body).
Missing page-kind combinations (!description, !body, etc.) don't exist in the
docsy.dev content. To fill these gaps, add purpose-built test pages under
`docsy.dev/content/en/tests/md-output/` with the needed attribute combinations.

No existing page has a multi-line description, so the `replace . "\n" "\n> "`
logic in `all.md` (blockquote continuation) is untested. Add a test page with a
multi-line description to exercise this.
