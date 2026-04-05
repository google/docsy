# Golden tests for Markdown output

## Rationale

The `layouts/all.md` template produces Markdown output for all page kinds. A
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
      golden.test.mjs              # test: compare goldens to public/
      update-goldens.sh            # refresh goldens from latest build
      goldens/                     # golden files, mirroring public/ paths
        index.md                         # home page
        blog/index.md                    # section: no description, no body
        docs/content/index.md            # section: description + children
        docs/get-started/index.md        # section: description + body + children
        blog/2022/hello/index.md         # page: description + body, no children
```

The five pages cover the main template branches (presence/absence of
description, body, and children across home, section, and page kinds).

### Key design decisions

- The `goldens/` directory is its own manifest: both the test and the update
  script walk it to discover files. No duplicated file list.
- `update-goldens.sh` refreshes all goldens from the latest build by copying the
  corresponding file from `public/` for each golden.
- Adding a new golden page is just one `cp` into `goldens/` at the matching
  relative path.

### Workflow

```bash
npm run build
npm run update:md-goldens -w docsy.dev
npm run test:md-output -w docsy.dev   # verify
```

npm scripts in `docsy.dev/package.json`: `test:md-output` and
`update:md-goldens`. Separate from the existing `test` script (format + link
checks). Can be wired into `ci:test` later.

## Notes

- The blog `Hello Docsy!` post has a minor `!.` artifact (description ends with
  `!`, template appends `.`). The golden captures current behavior; the template
  can be refined separately.
