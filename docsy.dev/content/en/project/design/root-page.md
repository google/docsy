---
title: Root page
description: >-
  How the theme selects between each language's home page and docs landing for
  `llms.txt` and shared chrome
---

A site's **[root page][]** is the page published at its [site root][]:

- **Ordinary sites**: Hugo's [home page][].
- **[Doc-rooted sites][doc-rooted site]**: the docs landing.

## Selection rule

[`_partials/td/root-page.html`][partial] takes a `Site` and returns a page: the
page at content path `/docs` when the URL of its HTML render equals the home's
URL, otherwise the home. Consumers share the result through `partialCached`,
keyed by the home's permalink.

## Consumers

- **`llms.txt` discovery**: the `rel="describedby"` link in every page head, the
  in-body agent directive, the Markdown versions' `llms.txt` link, and the
  Docsy-private `_root-llms-txt-path` shortcode all need the language's
  `llms.txt` URL, which exists when the root page has an `LLMS` output
  ([Discovery][]).
- **The `llms.txt` template** (`all.llms.txt`):
  - The home-page link and the `Site locales` list are each language's root
    page.
  - The description is the root page's, falling back to the home page's.
  - The documentation index is a separate `/docs` lookup.
- **Shared chrome**: in the `shared` [chrome build mode][], the navbar and
  footer are kept on one [donor page][] per language, the root page, and
  restored from it elsewhere.

## Why this rule

The section is looked up by **absolute content path**, `site.GetPage "/docs"`. A
bare `"docs"` would be wrong: when there is no `/docs` section, a `Site` lookup
falls back to a site-wide lookup by file name, which fails the build on two
pages named `docs` (`page reference "docs" is ambiguous`) and silently returns
the one such page otherwise ([#2875][]). The URL comparison is what keeps an
ordinary `/docs/` section from being taken for the root. It compares the docs
page's HTML URL, not the URL of the format being rendered: consumers cache the
result per site, and a permalinkable format can render before HTML.

The `docs` name is the [doc-rooted recipe][doc-rooted site]'s own: the recipe
redefines that section's permalinks, and the `llms.txt` documentation index
lists its subsections. Two alternatives that avoided the name were set aside:

- Scanning `site.Sections` for a section at the home's URL depends on Hugo's
  listing rules: a landing with `build.list: never` publishes but is not listed.
- A configuration switch would duplicate what `permalinks` already states.

## Covered cases

The table records supported behavior; the **Evidence** column names the fixture
test (`tests/fixture-site/`) exercising the row. Chrome consequences assume
`shared` mode.

| Case                                                           | Root page and consequences                                                                                                                                                             | Evidence                                                                                           |
| -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Ordinary site (home renders, docs under `/docs/`)              | The home. `llms.txt` at `/llms.txt` when `LLMS` is among the home outputs; the home is the donor page.                                                                                 | `llms-directive`, `chrome-render`                                                                  |
| Doc-rooted site                                                | The docs landing, published at the home's URL. Publishes `llms.txt` when its outputs include `LLMS`; it is the donor page.                                                             | `llms-doc-rooted`, `chrome-doc-rooted`                                                             |
| No `/docs` section, pages named `docs` elsewhere (one or many) | The home; the build succeeds, and `llms.txt` has no documentation index.                                                                                                               | `root-page`                                                                                        |
| Multilingual project                                           | One root page per language (`/`, `/fr/`), each able to publish its own `llms.txt` and each its own donor page; `defaultContentLanguageInSubdir` only moves the URLs.                   | `root-page`, `chrome-doc-rooted`                                                                   |
| Docs landing without a translated `_index` file                | Hugo's auto-created section is still the root when published there; its outputs come from configuration or `cascade`, not from a file.                                                 | `root-page`                                                                                        |
| `baseURL` with a subpath                                       | Both compared URLs include the subpath, so the selection is unchanged.                                                                                                                 | `root-page`                                                                                        |
| Several output formats (HTML, Markdown, print, RSS, LLMS)      | Selection is unchanged whatever format renders first (the rule compares HTML URLs). The donor is the root page's HTML render; its print render gets a placeholder like any other page. | `root-page`, `llms-doc-rooted`, `chrome-doc-rooted` (print), `chrome-render` (permalinkable print) |
| Doc-rooted home with `LLMS` configured                         | The home publishes no file; root-level `llms.txt` and discovery require `LLMS` on the docs landing.                                                                                    | `llms-doc-rooted`                                                                                  |
| Root page without `LLMS`                                       | No `describedby` link, directive, or Markdown link, even when another section publishes an `llms.txt`; the shortcode fails the build when invoked.                                     | `llms-directive`, `llms-doc-rooted`                                                                |
| `LLMS` on a non-root section                                   | Its `llms.txt` is the site overview, not a section index; discovery still depends on the root page's `LLMS` output.                                                                    | `llms-doc-rooted`                                                                                  |

## Limits

The lookup resolves none of these:

- A section other than `docs` remapped to the site root: the lookup keeps the
  home, and Hugo need not warn (a link-only home leaves no duplicate output).
- Two pages publishing the same root URL: a [path conflict][] of the site's own.
- A doc-rooted home whose output formats (site `outputs.home`, or its own front
  matter) don't start with `HTML`: a link-only page keeps only its first
  configured format, so the home's URL becomes that format's (`/llms.txt` for
  `[LLMS, HTML]`; no URL at all for an empty `outputs.home`, or for a home with
  `build.render: never`, which also collapses the cache key across languages)
  and the comparison fails. Hugo's [`outputs` convention][outputs] is `HTML`
  first.
- A doc-rooted language without a `/docs` section: it has no root page, so
  `llms.txt` lists the language at an unpublished URL and shared chrome names it
  as donor.
- `HTML` marked `notAlternative`: the donor page's other renders then carry the
  chrome too (the HTML-render test is "among the formats, not among the
  alternatives"); the placeholders still name the HTML render, so the restore
  works.

<!-- prettier-ignore-start -->
[#2875]: https://github.com/docsy/docsy/issues/2875
[chrome build mode]: /docs/deployment/chrome/
[Discovery]: /docs/content/agent-support/#discovery
[doc-rooted site]: /docs/content/adding-content/#doc-rooted-sites
[donor page]: /docs/deployment/chrome/#donor-pages
[home page]: https://gohugo.io/methods/site/home/
[outputs]: https://gohugo.io/configuration/outputs/
[path conflict]: /docs/content/adding-content/#check-for-path-conflicts
[partial]: https://github.com/docsy/docsy/blob/main/theme/layouts/_partials/td/root-page.html
[root page]: /docs/content/adding-content/#doc-rooted-sites
[site root]: https://gohugo.io/quick-reference/glossary/#site-root
<!-- prettier-ignore-end -->
