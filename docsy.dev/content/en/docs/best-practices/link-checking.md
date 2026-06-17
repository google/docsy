---
title: Link checking
description:
  Speed up external link checking with lean-render builds for checkers
cSpell:ignore pagelinks
---

A link checker that crawls your built site re-checks the repeated,
auto-generated _[chrome][]_ &mdash; the navbar, footer, and left-nav &mdash; on
_every_ page, even though those links are often identical site-wide. On a large
site that's the bulk of the work, and it inflates checker output.

**Lean render** is a build mode that omits the repeated chrome from the output,
so a checker reaches each link once instead of once per page. It works with any
external link checker, needs no extra post-build pass, and keeps just enough
instances of each region to keep its repeated links reachable:

- **Navbar and footer**: kept on each locale's home page. Their links are
  config-defined and the same across the locale, except for the navbar's
  language selector (and an optional version menu) &mdash; see the caution.
- **Left-nav** (computed per page): kept on each locale's docs landing page,
  which carries the full docs tree. On a [doc-rooted site][doc-rooted], that
  landing page _is_ the home page.

The navbar's language selector points to each page's own translation rather than
a fixed target, but those translations are docs pages that the destination
locale's left-nav already covers, so the single kept navbar loses no reachable
link.

Dropping the repeated chrome also makes a lean build a much less noisy basis for
diffing generated output: changes to a shared region show up once, instead of on
every page, so a diff surfaces the content that actually changed.

{{% alert title="Caution" color="warning" %}}

Lean render is an [experimental][] optimization that rests on assumptions about
how chrome repeats, which may not hold for every site. Use it only for
link-checking builds and run full-site link checks as well, even if less often.

One known case: a navbar [version menu][version-menu] with
`version_menu_pagelinks` enabled emits per-page links, which lean render's
single kept navbar won't cover. Refining support for such cases is future work.

{{% /alert %}}

## Enabling lean render

Set the `td.lean_render` parameter to `remove`:

{{< tabpane text=true >}} {{% tab header="hugo.toml" lang="toml" %}}

```toml
[params.td]
lean_render = "remove"
```

{{% /tab %}} {{% tab header="hugo.yaml" lang="yaml" %}}

```yaml
params:
  td:
    lean_render: remove
```

{{% /tab %}} {{< /tabpane >}}

For a link-checking CI job, it's usually cleaner to set it through the
environment instead, leaving your committed config untouched:

```sh
HUGOxPARAMSxTDxLEAN_RENDER=remove hugo
```

Use a non-underscore delimiter (`x` above), not `HUGO_PARAMS_TD_LEAN_RENDER`:
Hugo treats every `_` after the `HUGO` prefix as a key separator, which would
split the `lean_render` key. See Hugo's [configuration with environment
variables][hugo-env-config].

The value names the mode. Only `remove` is implemented; any other or empty value
leaves the chrome in place.

<!-- prettier-ignore-start -->
[chrome]: https://www.nngroup.com/articles/browser-and-gui-chrome/
[doc-rooted]: /docs/content/adding-content/#doc-rooted-sites
[experimental]: /project/about/changelog/#experimental
[hugo-env-config]: https://gohugo.io/getting-started/configuration/#configure-with-environment-variables
[version-menu]: /docs/content/versioning/#adding-a-version-drop-down-menu
<!-- prettier-ignore-end -->
