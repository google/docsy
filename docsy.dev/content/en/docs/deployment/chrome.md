---
title: Chrome build modes
description: >-
  Choose how Docsy emits repeated navigation chrome: on every page, or shared
  across pages and restored client-side for smaller, faster-to-check output.
cSpell:ignore: pagelinks
---

A docs site re-emits the same auto-generated _[chrome][]_ &mdash; the navbar,
footer, and left-nav &mdash; on _every_ page, even though those regions are
usually identical site-wide. That repetition slows the build, bloats the output,
and slows anything that processes every page, such as a link checker; it also
makes for noisy output diffs.

Use the `td.chrome` parameter to select one of two **build modes**:

- **`full`** (default) emits each page's chrome on the page itself, ready for
  any client.
- **`shared`** emits each region on just **one** _donor_ page per locale and
  restores it on the other pages in the browser with a small script. The output
  stays lean, while readers still get the full navigation once the page loads.

For web developers: `shared` applies the app-shell pattern to page chrome
&mdash; a single instance, fetched from its donor and restored on the client,
over an otherwise static [multi-page site][mpa].

The `shared` mode helps wherever a JavaScript-capable client or a link checker
consumes the output:

- **Faster link checking.** A checker reaches each unique chrome link once
  instead of once per page, and sees the lean output because it doesn't run the
  restore script.
- **Cleaner output diffs.** A change to a shared region shows up once instead of
  on every page, so a diff surfaces the content that actually changed.
- **Smaller output** for local development and deploy previews.

## What `shared` mode keeps reachable

In `shared` mode, each region stays on exactly one page per locale &mdash; its
_donor_, which the browser restores the others from &mdash; so every chrome link
stays reachable without JavaScript:

- **Navbar and footer**: kept on each locale's home page. Their links are
  config-defined and identical across the locale, except for the navbar's
  optional language selector and version menu &mdash; see the caution.
- **Left-nav** (computed per page): kept on each locale's docs landing page; it
  carries the full docs tree. On a [doc-rooted site][doc-rooted], that landing
  page _is_ the home page.

The navbar's language selector points to each page's own translation rather than
a fixed target, but those translations are docs pages that the destination
locale's left-nav already covers, so the single kept navbar loses no reachable
link.

> [!CAUTION]
>
> `shared` mode is an [experimental][] optimization that rests on assumptions
> about how chrome repeats, which may not hold for every site. The browser
> restore of the navbar's language and version selectors is still a work in
> progress, so today `shared` is best suited to **development, deploy previews,
> link-checking, and output-diffing builds** rather than production deploys:
> clients without JavaScript (and some search crawlers) see only the donor
> pages' chrome. Keep `full` for production, and run full-site link checks as
> well, even if less often.
>
> Two known cases:
>
> - A navbar [version menu][version-menu] with `version_menu_pagelinks` enabled
>   emits per-page links that the single kept navbar won't cover yet.
> - A [scoped sidebar][sidebar-root] (`sidebar_root_for`) restores the right
>   links and active state, but its re-rooted subtree can differ structurally
>   from a full build (an extra wrapper element, deeper `ul` nesting). The
>   difference isn't visible in the rendered nav &mdash; only in a
>   serialized-HTML diff.

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

See Hugo's [configuration with environment variables][hugo-env-config].

<!-- prettier-ignore-start -->
[chrome]: https://www.nngroup.com/articles/browser-and-gui-chrome/
[doc-rooted]: /docs/content/adding-content/#doc-rooted-sites
[experimental]: /project/about/changelog/#experimental
[hugo-env-config]: https://gohugo.io/getting-started/configuration/#configure-with-environment-variables
[mpa]: https://web.dev/learn/pwa/architecture/
[sidebar-root]: /docs/content/navigation/#sidebar-root
[version-menu]: /docs/content/versioning/#adding-a-version-drop-down-menu
<!-- prettier-ignore-end -->
