---
title: CI/CD
cSpell:ignore: afdocs npx scorecard
---

## AFDocs checks for agent support {#afdocs-checks}

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

[AFDocs]: https://afdocs.dev/
[agent-docs-config]:
  https://github.com/google/docsy/blob/main/docsy.dev/agent-docs.config.yml
[test-workflow]:
  https://github.com/google/docsy/blob/main/.github/workflows/test.yaml

### Scorecard example

```text
Agent-Friendly Docs Scorecard
==============================

http://localhost:1313 · 4/26/2026, 5:29:44 AM

  Overall Score: 100 / 100 (A+)

  Category Scores:
    Content Discoverability              100 / 100 (A+)
    Markdown Availability                100 / 100 (A+)
    Page Size and Truncation Risk        100 / 100 (A+)
    Content Structure                    100 / 100 (A+)
    URL Stability and Redirects          100 / 100 (A+)
    Observability and Content Health     100 / 100 (A+)
    Authentication and Access            100 / 100 (A+)

  Check Results:

    Content Discoverability
      PASS  llms-txt-exists                llms.txt found at 1 location(s)
      PASS  llms-txt-valid                 llms.txt follows the proposed structure (H1, blockquote, heading-delimited link sections)
      PASS  llms-txt-size                  llms.txt is 1,131 characters (under 50,000 threshold)
      PASS  llms-txt-links-resolve         All 13 same-origin links resolve (13 total links)
      PASS  llms-txt-links-markdown        13/13 same-origin links point to markdown content (100%)
      PASS  llms-txt-directive             llms.txt directive found in all 13 pages, near the top of content

    Markdown Availability
      PASS  markdown-url-support           13/13 pages support .md URLs (100%)
      PASS  content-negotiation            13/13 pages support content negotiation (100%)

    Page Size and Truncation Risk
      PASS  rendering-strategy             All 13 pages contain server-rendered content
      PASS  page-size-markdown             All 13 pages under 50K chars (median 2K, max 9K)
      PASS  page-size-html                 All 13 pages convert under 50K chars (median 2K, 0% boilerplate)

    Content Structure
      PASS  tabbed-content-serialization   No tabbed content detected across 13 pages
      PASS  section-header-quality         No tabbed content found; header quality check not applicable
      PASS  markdown-code-fence-validity   All 1 code fences properly closed across 14 pages

    URL Stability and Redirects
      PASS  http-status-codes              All 13 pages return proper error codes for bad URLs
      PASS  redirect-behavior              No redirects detected across 13 pages

    Observability and Content Health
      PASS  cache-header-hygiene           All 14 endpoints have appropriate cache headers

    Authentication and Access
      PASS  auth-gate-detection            All 13 pages are publicly accessible
      SKIP  auth-alternative-access        All docs pages are publicly accessible; no alternative access paths needed

Full spec: https://agentdocsspec.com/spec/
```

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
