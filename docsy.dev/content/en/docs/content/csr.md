---
title: Client-side chrome rendering
description: >-
  Strip the repeated navigation chrome from your build output and restore it in
  the browser: leaner HTML that link checkers and output diffs love, with full
  navigation preserved for readers.
# prettier-ignore
cSpell:ignore: csr pagelinks
---

A docs site re-emits the same auto-generated _[chrome][]_ &mdash; the navbar,
footer, and left-nav &mdash; on _every_ page, even though those regions are
usually identical site-wide. That repetition bloats the build output and slows
down anything that processes every page, such as a link checker or a diff of
generated HTML.

**Client-side chrome rendering** (CSR) is an experimental build mode that omits
the repeated chrome from the server output and restores it in the browser with a
small script. The served HTML stays lean, while readers still get the full
navigation once the page loads. Unlike a single-page app, only the _chrome_ is
client-rendered &mdash; each page's content is still rendered on the server.

Enabling CSR gives you:

- **Faster, quieter link checking.** A checker reaches each unique chrome link
  once instead of once per page; checkers don't run the restore script, so they
  see the lean output.
- **Cleaner output diffs.** A change to a shared region shows up once rather
  than on every page, so a diff surfaces the content that actually changed.
- **Smaller HTML** for every page that drops its chrome.

## What stays in the server output

So that every chrome link stays reachable without running JavaScript &mdash;
which is what a link checker needs &mdash; CSR keeps one full instance of each
region and uses it as the _donor_ the browser restores the others from:

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

{{% alert title="Caution" color="warning" %}}

CSR is an [experimental][] optimization that rests on assumptions about how
chrome repeats, which may not hold for every site. The browser restore of the
navbar's language and version selectors is still a work in progress, so today
CSR is best suited to **link-checking and output-diffing builds** rather than
reader-facing deploys. Run full-site link checks as well, even if less often.

One known case: a navbar [version menu][version-menu] with
`version_menu_pagelinks` enabled emits per-page links that the single kept
navbar won't cover yet.

{{% /alert %}}

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
[version-menu]: /docs/content/versioning/#adding-a-version-drop-down-menu
<!-- prettier-ignore-end -->
