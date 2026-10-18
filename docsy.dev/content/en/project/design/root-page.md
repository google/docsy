---
title: Root page
description: >-
  How the theme finds the page publishing a language's root URL, who depends on
  it, and the cases the lookup covers
---

A site's **root page** is the page published at its [site root][]: `/`, or
`/`_`LANG`_`/` for each language of a multilingual site. For most sites that is
Hugo's home page. On a [doc-rooted site][], the docs section landing page is
published there instead, and the home page, though it still exists, renders
nothing (`build: { render: link }`). The two can differ, so the theme resolves
the root page once per language rather than assuming the home.

## Who depends on it

- **`llms.txt` discovery**: the `rel="describedby"` link in every page head, the
  in-body agent directive, the Markdown versions' `llms.txt` link, and the
  Docsy-private `_root-llms-txt-path` shortcode all need the URL of the
  language's `llms.txt`, and whether one is published at all. That is the root
  page's `LLMS` output ([Discovery][]).
- **The `llms.txt` template** (`all.llms.txt`): the home-page link, the
  description fallback, and the per-language list all come from each language's
  root page. The documentation index comes from the top-level `docs` section,
  which is a separate lookup.
- **Shared chrome**: in the `shared` [chrome build mode][], the navbar and
  footer are kept on one donor page per language, the root page, and restored
  from it elsewhere. The docs landing of a doc-rooted site is that donor; its
  home never renders.

## How it is resolved

[`_partials/td/root-page.html`][partial] takes a `Site` and returns a page: the
home, unless the `/docs` section page is published at the home's URL, in which
case that page. The result is cached per language.

The section is looked up by **absolute content path**, `site.GetPage "/docs"`. A
bare `"docs"` would be wrong: when there is no `/docs` section, Hugo falls back
to a site-wide lookup by file name, which fails the build on two pages named
`docs` (`page reference "docs" is ambiguous`) and silently returns the one such
page otherwise ([#2875][]). A leading slash disables that fallback, so the
lookup finds the top-level `docs` section or nothing.

The `docs` name is the [doc-rooted recipe][doc-rooted site]'s own: the recipe
redefines that section's permalinks, and the `llms.txt` documentation index
lists its subsections. Alternatives that avoided the name were considered and
set aside: scanning `site.Sections` for a section at the home's URL depends on
Hugo's listing rules (a landing with `build.list: never` publishes but is not
listed), and a configuration switch would duplicate what `permalinks` already
states. No general root-detection service is needed; one bounded lookup, in one
partial, serves every consumer above.

## Cases covered

Each row names the fixture test that pins it (`tests/fixture-site/`).

| Case                                                           | Root page and consequences                                                                                                              | Pinned by                              |
| -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| Ordinary site (home renders, docs under `/docs/`)              | The home. `llms.txt` at `/llms.txt` when `LLMS` is among the home outputs; the home is the chrome donor.                                | `llms-directive`, `chrome-render`      |
| Doc-rooted site                                                | The docs landing, published at the home's URL. `llms.txt` comes from its outputs; it is the chrome donor; the home publishes nothing.   | `llms-doc-rooted`, `chrome-doc-rooted` |
| No `/docs` section, pages named `docs` elsewhere (one or many) | The home; the build succeeds, and `llms.txt` has no documentation index.                                                                | `root-page`                            |
| Multilingual site                                              | One root page per language (`/`, `/fr/`), each with its own `llms.txt` and donor; `defaultContentLanguageInSubdir` only moves the URLs. | `llms-doc-rooted`, `chrome-doc-rooted` |
| Docs landing without a translated `_index` file                | Hugo's auto-created section is still the root when published there; its outputs come from configuration or `cascade`, not from a file.  | `root-page`                            |
| `baseURL` with a subpath                                       | Both compared URLs carry the subpath; nothing changes.                                                                                  | `root-page`                            |
| Several output formats (HTML, Markdown, print, RSS, LLMS)      | The comparison uses each page's `RelPermalink`, its first output format's (HTML on Docsy sites); the other formats don't take part.     | `llms-doc-rooted`                      |
| Doc-rooted home with `LLMS` configured                         | The home renders nothing, so there is no `llms.txt` and no discovery link unless the docs landing publishes `LLMS`.                     | `llms-doc-rooted`                      |
| Site publishing no `llms.txt`                                  | No `describedby` link, directive, or Markdown link; the shortcode fails the build.                                                      | `llms-directive`, `llms-doc-rooted`    |
| `LLMS` on a non-root section                                   | Its `llms.txt` renders the same site overview as the root's.                                                                            | `llms-doc-rooted`                      |
| Overridden `head.html` or `baseof`                             | The site adds the discovery links itself ([Discovery][]).                                                                               | n/a                                    |

Not covered: a non-docs section given `url: /`, and two pages published at the
same root URL. Both are path conflicts for Hugo to report
(`hugo --printPathWarnings`), not cases the lookup resolves.

<!-- prettier-ignore-start -->
[#2875]: https://github.com/docsy/docsy/issues/2875
[chrome build mode]: /docs/deployment/chrome/
[Discovery]: /docs/content/agent-support/#discovery
[doc-rooted site]: /docs/content/adding-content/#doc-rooted-sites
[partial]: https://github.com/docsy/docsy/blob/main/theme/layouts/_partials/td/root-page.html
[site root]: https://gohugo.io/quick-reference/glossary/#site-root
<!-- prettier-ignore-end -->
