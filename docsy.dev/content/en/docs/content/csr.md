---
title: Client-side chrome rendering
description: >-
  Strip the repeated navigation chrome and restore it in the client side.
cSpell:ignore: pagelinks
---

A docs site re-emits the same auto-generated _[chrome][]_ &mdash; the navbar,
footer, and left-nav &mdash; on _every_ page, even though those regions are
usually identical site-wide. That repetition bloats the output and slows
anything that processes every page, such as a link checker or a diff of
generated HTML.

**Client-side rendering** (CSR) of chrome is an experimental build mode that
omits the repeated chrome from the rendered HTML and restores it in the browser
with a small script. The output stays lean, while readers still get the full
navigation once the page loads. It gives you:

- **Faster, quieter [link checking][link-checking].** A checker reaches each
  unique chrome link once instead of once per page, and sees the lean output
  because it doesn't run the restore script.
- **Cleaner output diffs.** A change to a shared region shows up once instead of
  on every page, so a diff surfaces the content that actually changed.
- **Smaller HTML** on every page that drops its chrome.

## What stays in the server output

CSR keeps each region on exactly one page per locale &mdash; its _donor_, which
the browser restores the others from &mdash; so every chrome link stays
reachable without JavaScript:

- **Navbar and footer**: kept on each locale's home page. Their links are
  config-defined and identical across the locale, except for the navbar's
  language selector (and an optional version menu) &mdash; see the caution.
- **Left-nav** (computed per page): kept on each locale's docs landing page,
  which carries the full docs tree. On a [doc-rooted site][doc-rooted], that
  landing page _is_ the home page.

The navbar's language selector points to each page's own translation rather than
a fixed target, but those translations are docs pages that the destination
locale's left-nav already covers, so the single kept navbar loses no reachable
link.

> [!CAUTION]
>
> CSR is an [experimental][] optimization that rests on assumptions about how
> chrome repeats, which may not hold for every site. The browser restore of the
> navbar's language and version selectors is still a work in progress, so today
> CSR is best suited to **link-checking and output-diffing builds** rather than
> reader-facing deploys. Run full-site link checks as well, even if less often.
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

## Enabling CSR

Set the `td.csr_enable` parameter to `true`:

{{< tabpane text=true >}} {{% tab header="hugo.toml" lang="toml" %}}

```toml
[params.td]
csr_enable = true
```

{{% /tab %}} {{% tab header="hugo.yaml" lang="yaml" %}}

```yaml
params:
  td:
    csr_enable: true
```

{{% /tab %}} {{< /tabpane >}}

For a link-checking CI job, it's usually cleaner to set it through the
environment instead, leaving your committed config untouched:

```sh
HUGOxPARAMSxTDxCSR_ENABLE=true hugo
```

Use a non-underscore delimiter (`x` above), not `HUGO_PARAMS_TD_CSR_ENABLE`:
Hugo treats every `_` after the `HUGO` prefix as a key separator, which would
split the `csr_enable` key. See Hugo's [configuration with environment
variables][hugo-env-config].

<!-- prettier-ignore-start -->
[chrome]: https://www.nngroup.com/articles/browser-and-gui-chrome/
[doc-rooted]: /docs/content/adding-content/#doc-rooted-sites
[experimental]: /project/about/changelog/#experimental
[hugo-env-config]: https://gohugo.io/getting-started/configuration/#configure-with-environment-variables
[link-checking]: /docs/best-practices/link-checking/
[sidebar-root]: /docs/content/navigation/#sidebar-root
[version-menu]: /docs/content/versioning/#adding-a-version-drop-down-menu
<!-- prettier-ignore-end -->
