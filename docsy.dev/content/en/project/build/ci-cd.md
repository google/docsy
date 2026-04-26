---
title: CI/CD
---

## Agent-support checks

The **docsy.dev** site has an [AFDocs][] configuration and npm script to
generate a scorecard for agent support locally:

- Config: [`docsy.dev/agent-docs.config.yml`][agent-docs-config] in the theme
  repository.
- Script: `_check:afdocs` in `docsy.dev/package.json` (runs
  `npx afdocs check --config agent-docs.config.yml --format scorecard`).

From the **theme repository root**, score a site served at
`http://localhost:1313`:

```sh
npm run serve   # in one terminal
npm run check:afdocs:dev
```

The default GitHub Actions [`test` workflow][test-workflow] runs
`npm run ci:test` on Ubuntu (formatting, markdownlint, site build, link checks,
Markdown golden tests). It does **not** run AFDocs; add a step to your own
workflow if you want continuous scoring (for example against a preview URL).

For AFDocs scorecard examples, see [Scorecard examples](#scorecard-example) For
AFDocs configuration options, see [AFDocs config file format][afdocs-config].

[AFDocs]: https://afdocs.dev/
[afdocs-config]: https://afdocs.dev/reference/config-file
[agent-docs-config]:
  https://github.com/google/docsy/blob/main/docsy.dev/agent-docs.config.yml
[test-workflow]:
  https://github.com/google/docsy/blob/main/.github/workflows/test.yaml

## Prettier formatting

We use [Prettier](https://prettier.io) to format Docsy and the website files
using the following command:

```bash
npm run check:format
```

To fix formatting, run Prettier: `npm run fix:format`.

### i18n workaround

The translation files in the `i18n` directory are formatted using Prettier. But
Prettier removes the blank line before the `# Feedback` section heading. This
seems to be a known issue, for example see:

- [Bug: Inconsistent newline formatting in YAML when changing scopes
  #15528][#15528]
- [Bug: New Line before comments at end of YAML files are removed
  #15720][#15720]

We've worked around this bug, and avoided using `prettier-ignore` directives, by
formatting the preceding entry in the YAML file to be a block scalar, like this:

```yaml
community_guideline: >-
  Contribution Guidelines
```

This ensures that the blank line is preserved. Hopefully Prettier will be fixed
and we'll be able to remove this hack.

[#15528]: https://github.com/prettier/prettier/issues/15528
[#15720]: https://github.com/prettier/prettier/issues/15720
