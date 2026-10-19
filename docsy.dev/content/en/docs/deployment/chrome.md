---
title: Chrome build modes
description: >-
  Choose how Docsy renders repeated navigation chrome: on every page, or shared
  across pages and restored client-side for smaller, faster-to-check output.
cSpell:ignore: pagelinks
---

A docs site repeats the same auto-generated _[chrome][]_ &mdash; the navbar,
footer, and left-nav &mdash; on _every_ page, even though those regions are
usually identical site-wide.

Use the `td.chrome` parameter to select one of two **build modes**:

- **`full`** (default) renders each page's chrome on the page itself, ready for
  any client. Any `td.chrome` value other than `shared` is treated as `full`, so
  a typo fails safe.
- **`shared`** renders each region on its [donor page][] only and restores it on
  the other pages in the browser with a small script. The output stays lean,
  while readers still get the full navigation once the page loads.

> [!NOTE] Web dev note
>
> `shared` mode is in the spirit of the [app-shell pattern][app-shell] but
> applied to page chrome, where a single region instance is fetched from its
> donor page and restored on the client, over an otherwise static [multi-page
> site][mpa].

The `shared` mode helps wherever a JavaScript-capable client or a link checker
consumes the output:

- **Faster link checking.** A checker reaches each unique chrome link once
  instead of once per page, and sees the lean output because it doesn't run the
  restore script.
- **Cleaner output diffs.** A change to a shared region shows up once instead of
  on every page, so a diff surfaces the content that actually changed.
- **Smaller output** for local development and deploy previews.

## Donor pages

A region's **donor page** is the one page per language on which `shared` mode
renders it; the other pages carry a placeholder that the browser fills from the
donor page. Clients without JavaScript (some search crawlers included) see only
the donor pages' chrome.

## What `shared` mode keeps reachable

The donor pages are chosen so that every chrome link stays reachable without
JavaScript:

- **Navbar and footer**: kept on each language's **[root page][]** (the home
  page, or the `docs` section page on a doc-rooted site). Their links are
  config-defined and identical across the language, except the navbar's optional
  selectors: a [version menu][version-menu] with `version_menu_pagelinks`
  renders per-page links that the browser restores but a link checker reaches
  only on the root page, and the language selector's restore has [known
  differences][].
- **Left-nav** (computed per page): kept on each language's docs section page;
  it carries the full docs tree. On a doc-rooted site the two donor pages
  coincide. `shared` mode currently targets the **docs** section; other sections
  (such as blog) aren't a validated target yet, so keep `full` for them.

The navbar's language selector points to each page's own translation rather than
a fixed target, but those translations are docs pages that the destination
language's left-nav already covers, so the single kept navbar loses no reachable
link, except a translation hidden from the left-nav (`toc_hide`): a full build
reaches it through the selector, a shared build through nothing.

## Known differences from a full build

> [!CAUTION]
>
> `shared` mode is [experimental][]: it rests on assumptions about how chrome
> repeats that may not hold for every site. Keep `full` for production, and run
> full-site link checks as well, even if less often.

The restore aims to match a full build; the known differences:

- The navbar's language selector is restored by swapping the language prefix of
  the current page's path ([#2689][]), so:
  - A page with no translation in a language gets a live link where a full build
    disables the item.
  - On a [doc-rooted site][doc-rooted], title-based slugs usually differ across
    languages, so the restored link misses.
- On a [doc-rooted site][doc-rooted], the restored navbar marks the docs entry
  active on non-docs pages that no other menu entry covers, such as taxonomy and
  404 pages (its URL, the language root, prefixes every path); a full build
  marks none of those ([#2689][]).
- A [scoped sidebar][sidebar-root] (`sidebar_root_for`) restores the right links
  and active state, but its re-rooted subtree can differ structurally from a
  full build (an extra wrapper element, deeper `ul` nesting). The difference
  isn't visible in the rendered nav, only in a serialized-HTML diff.

## Setting the build mode

Set the `td.chrome` parameter to `shared` (the default is `full`):

{{< tabpane text=true >}} {{% tab header="hugo.yaml" lang="yaml" %}}

```yaml
params:
  td:
    chrome: shared
```

{{% /tab %}} {{% tab header="hugo.toml" lang="toml" %}}

```toml
[params.td]
chrome = "shared"
```

{{% /tab %}} {{< /tabpane >}}

For a link-checking or preview CI job, it's usually cleaner to set it through
the environment instead, leaving your committed config untouched:

```sh
HUGO_PARAMS_TD_CHROME=shared hugo
```

See Hugo's [configuration with environment variables][hugo-env-config]. Then run
your link checker against the generated `public/` output as usual: a `shared`
build needs no checker-specific configuration.

<!-- prettier-ignore-start -->
[#2689]: https://github.com/docsy/docsy/issues/2689
[app-shell]: https://developer.chrome.com/blog/app-shell
[chrome]: https://www.nngroup.com/articles/browser-and-gui-chrome/
[doc-rooted]: /docs/content/adding-content/#doc-rooted-sites
[donor page]: #donor-pages
[experimental]: /project/about/changelog/#experimental
[hugo-env-config]: https://gohugo.io/configuration/introduction/#environment-variables
[known differences]: #known-differences-from-a-full-build
[mpa]: https://web.dev/learn/pwa/architecture/
[root page]: /docs/content/adding-content/#how-it-works
[sidebar-root]: /docs/content/navigation/#sidebar-root
[version-menu]: /docs/content/versioning/#adding-a-version-drop-down-menu
<!-- prettier-ignore-end -->
