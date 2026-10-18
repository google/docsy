---
title: Root page
description: >-
  The selection rule, rationale, and supported cases shared by agent discovery
  and shared chrome
---

A site's **[root page][]** is the page published at its [site root][]: for most
sites `/`, or `/`_`LANG`_`/` for a language of a multilingual site (a `baseURL`
subpath and the default language's placement move these). Which page that is
depends on the site's layout:

- **Ordinary sites**: Hugo's [home page][].
- **[Doc-rooted sites][doc-rooted site]**: the docs section's landing page. The
  home page still exists but renders nothing (`build: { render: link }`).

Because the two can differ, the theme selects the root page once per language
rather than assuming the home page. The definition and setup stay in the user
guide; this page is the maintainers' record.

## Selection rule

[`_partials/td/root-page.html`][partial] takes a `Site` and returns a page: the
page at content path `/docs` when its `RelPermalink` equals the home's,
otherwise the home. Consumers share one language-scoped cached result
(`partialCached`, keyed by the home's permalink).

## Consumers

- **`llms.txt` discovery**: the `rel="describedby"` link in every page head, the
  in-body agent directive, the Markdown versions' `llms.txt` link, and the
  Docsy-private `_root-llms-txt-path` shortcode all need the URL of the
  language's `llms.txt`, and whether the root page publishes one. That is the
  root page's `LLMS` output ([Discovery][]).
- **The `llms.txt` template** (`all.llms.txt`): uses each language's root page
  for its home-page and locale links; prefers the root page's description,
  falling back to the home page's; its documentation index is a separate `/docs`
  lookup.
- **Shared chrome**: in the `shared` [chrome build mode][], the navbar and
  footer are kept on one [donor page][] per language, the root page, and
  restored from it elsewhere.

## Why this rule

The section is looked up by **absolute content path**, `site.GetPage "/docs"`. A
bare `"docs"` would be wrong: when there is no `/docs` section, a `Site` lookup
falls back to a site-wide lookup by file name, which fails the build on two
pages named `docs` (`page reference "docs" is ambiguous`) and silently returns
the one such page otherwise ([#2875][]). The leading slash restricts the lookup
to the `/docs` content path; the `RelPermalink` equality is what keeps a page
that merely occupies that path from being taken for the root.

The `docs` name is the [doc-rooted recipe][doc-rooted site]'s own: the recipe
redefines that section's permalinks, and the `llms.txt` documentation index
lists its subsections. Two alternatives that avoided the name were set aside:

- Scanning `site.Sections` for a section at the home's URL depends on Hugo's
  listing rules: a landing with `build.list: never` publishes but is not listed.
- A configuration switch would duplicate what `permalinks` already states.

## Covered cases

The table records supported behavior. The **Evidence** column names the fixture
test (`tests/fixture-site/`) exercising the row, or says so when a variant is
backed by source reading only. Chrome consequences assume `shared` mode.

| Case                                                           | Root page and consequences                                                                                                                                                                                                  | Evidence                                       |
| -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| Ordinary site (home renders, docs under `/docs/`)              | The home. `llms.txt` at `/llms.txt` when `LLMS` is among the home outputs; the home is the donor page.                                                                                                                      | `llms-directive`, `chrome-render`              |
| Doc-rooted site                                                | The docs landing, published at the home's URL. Publishes `llms.txt` when its outputs include `LLMS`; it is the donor page; the home publishes nothing.                                                                      | `llms-doc-rooted`, `chrome-doc-rooted`         |
| No `/docs` section, pages named `docs` elsewhere (one or many) | The home; the build succeeds, and `llms.txt` has no documentation index.                                                                                                                                                    | `root-page`                                    |
| Multilingual site                                              | One root page per language (`/`, `/fr/`), each able to publish its own `llms.txt` and each its own donor page; `defaultContentLanguageInSubdir` only moves the URLs.                                                        | `root-page`, `chrome-doc-rooted`               |
| Docs landing without a translated `_index` file                | Hugo's auto-created section is still the root when published there; its outputs come from configuration or `cascade`, not from a file.                                                                                      | `root-page`                                    |
| `baseURL` with a subpath                                       | Both compared URLs include the subpath, so the selection is unchanged.                                                                                                                                                      | `root-page`                                    |
| Several output formats (HTML, Markdown, print, RSS, LLMS)      | The comparison uses `RelPermalink`, the HTML permalink under Docsy's output settings; the other formats don't take part. The donor is the root page's HTML render; its print render gets a placeholder like any other page. | `llms-doc-rooted`, `chrome-doc-rooted` (print) |
| Doc-rooted home with `LLMS` configured                         | The home publishes no file; root-level `llms.txt` and discovery require `LLMS` on the docs landing.                                                                                                                         | `llms-doc-rooted`                              |
| Root page without `LLMS`                                       | No `describedby` link, directive, or Markdown link, even when another section publishes an `llms.txt`; the shortcode fails the build when invoked.                                                                          | `llms-directive`, `llms-doc-rooted`            |
| `LLMS` on a non-root section                                   | Its `llms.txt` is the site overview, not a section index; discovery still depends on the root page's `LLMS` output.                                                                                                         | `llms-doc-rooted`                              |
| Overridden `head.html` or `baseof`                             | Custom templates must keep the discovery wiring ([Discovery][]).                                                                                                                                                            | n/a                                            |

## Limits

- A section other than `docs` remapped to the site root is outside this
  convention: the lookup keeps the home, and Hugo need not warn (a link-only
  home leaves no duplicate output).
- Two pages publishing the same root URL is a configuration problem of its own;
  `hugo --printPathWarnings` diagnoses it. The lookup resolves neither case.

<!-- prettier-ignore-start -->
[#2875]: https://github.com/docsy/docsy/issues/2875
[chrome build mode]: /docs/deployment/chrome/
[Discovery]: /docs/content/agent-support/#discovery
[doc-rooted site]: /docs/content/adding-content/#doc-rooted-sites
[donor page]: /docs/deployment/chrome/#donor-page
[home page]: https://gohugo.io/methods/site/home/
[partial]: https://github.com/docsy/docsy/blob/main/theme/layouts/_partials/td/root-page.html
[root page]: /docs/content/adding-content/#doc-rooted-sites
[site root]: https://gohugo.io/quick-reference/glossary/#site-root
<!-- prettier-ignore-end -->
