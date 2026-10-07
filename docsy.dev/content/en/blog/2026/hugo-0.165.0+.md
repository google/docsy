---
title: Hugo 0.165.0-0.166.x upgrade guide
linkTitle: Hugo 0.165+ upgrade guide
date: 2026-10-05
draft: true
description: >-
  What changed in Hugo 0.165.0 and 0.166.0 for Docsy sites: security hardening
  and symlink rules, rewritten globs, a KaTeX stylesheet floor, URL and template
  changes, and Tailwind's allow-list, each with its upgrade actions
author: >-
  [Patrice Chalin](https://github.com/chalin) ([CNCF](https://www.cncf.io/)),
  for the [Docsy Steering Committee](/blog/2022/hello/#introducing-the-psc)
body_class: release-highlights
tags: [hugo, upgrade]
params:
  hugoSupportedVersion: 0.166.0
---

This post is a companion to the [Docsy 0.18.0 release post](0.18.0/), which
names the [Hugo version that 0.18.0 supports](0.18.0/#hugo).

## Upgrade summary

- **This guide is for you if** you're:
  - [Upgrading to Docsy 0.18.0](0.18.0/#upgrade)
  - Upgrading only Hugo, past 0.164.x
- Review {{% _param BADGE BREAKING warning %}} changes:
  <a id="breaking-changes"></a>
  - {{% _param BREAKING %}} [Security hardening](#security): Node tools,
    symlinked mounts, remote fetches, Org content
  - {{% _param BREAKING %}} [Glob patterns rewritten](#globs)
  - {{% _param BREAKING %}} [KaTeX stylesheet floor](#katex)
  - {{% _param BREAKING %}} [URL and template changes](#urls-templates)
  - {{% _param BREAKING %}} [Tailwind allow-list (0.165.0)](#tailwind)
- Where a step sets a [`security`][hugo-security] list, write the whole list:
  Hugo replaces a configured list rather than merging it with the default.
- {{% _param FAS rocket primary %}} Jump to
  [Upgrade to Hugo {{% param hugoSupportedVersion %}}](#upgrade) once you're
  ready.

## {{% _param BREAKING %}} Security hardening (0.166.0) {#security}

Hugo 0.166.0 is mostly a hardening release: it confines Node tools and mounts to
the project, checks the addresses that remote fetches resolve to, and denies Org
mode content by default. Each item can stop a site's build or silently drop its
files. For the details, see Hugo's [0.166.0][hugo-0.166.0] release notes.

### Actions {#security-actions}

{{% _param BREAKING %}} **Applies if** your project has a symlink that resolves
outside it, under `node_modules` for example. Hugo 0.166.0 fails PostCSS and
other Node tools before running them when a symlink escapes the allowed roots.

- Set the whole list with the link's target added:
  `security.node.permissions.allowRead: ['.', 'TARGET']`, where _`TARGET`_ is
  the path the link resolves to.

{{% _param BREAKING %}} **Applies if** a symlink sits on a mount's path,
wherever it points: a mount root such as `assets/` or a module mount's `source`
(dropped since 0.166.0), a directory inside one such as `assets/vendor/x`
(dropped since 0.165.0), or a relative `source` that passes through a link. A
symlinked theme directory (`themes/docsy -> ../docsy`) still works. Docsy's own
mounts read two `node_modules` packages through three mounts, which pnpm and
`npm link` install as symlinks: the Bootstrap and Font Awesome Sass imports then
fail with no pointer to the cause, and the Font Awesome webfonts vanish from an
otherwise green build.

- Replace the link with the real directory (pnpm: `node-linker=hoisted`), or
  mount the link's target by an absolute `source`, for every mount the link
  affects.

{{% _param BREAKING %}} **Applies if** your build runs behind an `HTTP_PROXY` or
`HTTPS_PROXY`. Docsy itself fetches Mermaid, MarkMap, and KaTeX assets at build
time, so a proxied build is affected even if your templates fetch nothing: Hugo
0.166.0 ignores the proxy variables unless told to honor them.

- Set `security.http.proxyFromEnvironment: true`.

{{% _param BREAKING %}} **Applies if** your build fetches resources from a
private or internal host. Hugo 0.166.0 rejects loopback, private, link-local,
and CGNAT addresses under the default `security.http.urls` allowlist.

- Set `security.http.urls` to a list naming your hosts and the CDNs Docsy
  fetches from (`cdn.jsdelivr.net`, `unpkg.com`); the address check stands down
  for a customized list.

{{% _param BREAKING %}} **Applies if** your content includes Org mode files
(`.org`). Hugo 0.166.0 denies `text/org` by default, as it passes raw HTML
through.

- Opt back in by setting the whole list without the `text/org` denial:
  `security.allowContent: ['! ^text/html$']`.

## {{% _param BREAKING %}} Glob patterns rewritten (0.166.0) {#globs}

Hugo 0.166.0 replaced its glob-matching engine. Patterns that relied on the old
engine's bugs match differently: `**/x` no longer matches a top-level `x`
(`{**/,}x` does), `a/**/b` no longer matches `a/b`, `\` is an escape character,
and malformed patterns fail the build. Literal paths are unaffected.

### Actions {#globs-actions}

{{% _param BREAKING %}} **Applies if** your site uses glob patterns: in config
(module mounts' `includeFiles` and `excludeFiles`, `cascade` targets,
`segments`, `deployment` matchers, `noVendor`) or in templates
(`.Resources.Match`, `resources.Match`, and kin).

- Re-test each pattern against the files it should select.

## {{% _param BREAKING %}} KaTeX stylesheet floor (0.166.0) {#katex}

Hugo 0.166.0's bundled KaTeX, the one behind `transform.ToMath` and Docsy's
`math` fences, emits markup that needs a KaTeX 0.18.4 or later stylesheet; an
older one misrenders some expressions. Docsy 0.18.0's supported pin satisfies it
([dependency versions](0.18.0/#script-dep-pins)).

### Actions {#katex-actions}

{{% _param BREAKING %}} **Applies if** your site renders math and serves a KaTeX
stylesheet below 0.18.4, through `params.katex.version` or an overridden
`scripts/katex.html`.

- Remove your pin to take Docsy's supported default; a pin at 0.18.4 or later
  renders, on a best-effort basis ([KaTeX version][katex-docs]). Update an
  overridden partial's stylesheet the same way.

## {{% _param BREAKING %}} URL and template changes (0.166.0) {#urls-templates}

Two smaller 0.166.0 changes can move a page or truncate one: a title's `/` no
longer splits a title-derived URL into two segments, and a bare `return` now
works in every template, where it used to be ignored outside partials.

### Actions {#urls-templates-actions}

{{% _param BREAKING %}} **Applies if** your `permalinks` use `:title`, or
`:slug` on pages that set no `slug`, and a title contains a `/`. Hugo 0.166.0
derives one URL segment from the title (`watch-listen-to-this`) where it used to
nest two (`watch/listen-to-this`), so the page's URL moves without a redirect;
filename-based URLs, taxonomy pages, and term pages are unaffected.

- Add an `aliases` entry for the old URL. Under `:slug`, an explicit `slug`
  keeps it; under `:title`, it doesn't.

{{% _param BREAKING %}} **Applies if** your own templates use `return` outside a
partial. Hugo 0.166.0 honors it there: a bare `{{ return }}`, ignored before,
now ends the template's output; `return` with a value fails the build, as it did
before.

- Remove it, or move the logic into a partial.

## {{% _param BREAKING %}} Tailwind allow-list (0.165.0) {#tailwind}

Hugo 0.165.0 is a feature release ([notes][hugo-0.165.0]); besides the symlink
rule above, its change for Docsy sites is that `tailwindcss` left the default
`security.exec.allow` list.

### Actions {#tailwind-actions}

{{% _param BREAKING %}} **Applies if** your site runs Tailwind through
`css.TailwindCSS`.

- Set the list with `tailwindcss` added back:

  ```yaml
  security:
    exec:
      allow:
        [
          '^(dart-)?sass$',
          '^go$',
          '^git$',
          '^node$',
          '^postcss$',
          '^tailwindcss$',
        ]
  ```

## {{% _param FAS rocket primary %}} Upgrade to Hugo {{% param hugoSupportedVersion %}} {#upgrade}

After addressing the actions that apply to your site, upgrade to Hugo
[{{% param hugoSupportedVersion %}}][hugo-supported-version] ([Update
Hugo][update-hugo]).

### {{% _param FAS square-check primary %}} Sanity checks

Confirm that you've addressed [every action][] that applies to your site. Then:

- Upgrading as part of [Docsy 0.18.0](0.18.0/)? Continue with its
  [upgrade section](0.18.0/#upgrade).
- Otherwise, finish with the [generic site checks][check].

<!-- prettier-ignore-start -->
[check]: /docs/update/#check
[every action]: #upgrade-summary
[hugo-0.165.0]: https://github.com/gohugoio/hugo/releases/tag/v0.165.0
[hugo-0.166.0]: https://github.com/gohugoio/hugo/releases/tag/v0.166.0
[hugo-security]: https://gohugo.io/configuration/security/
[hugo-supported-version]: <https://github.com/gohugoio/hugo/releases/tag/v{{% param hugoSupportedVersion %}}>
[katex-docs]: /docs/content/diagrams-and-formulae/#katex-version
[update-hugo]: /docs/update/#update-hugo
<!-- prettier-ignore-end -->
