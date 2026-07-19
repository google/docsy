---
title: Hugo 0.158.0-0.164.x upgrade guide
linkTitle: Hugo 0.158+ upgrade guide
date: 2026-06-15
lastmod: 2026-07-17
draft: true
author: >-
  [Patrice Chalin](https://github.com/chalin) ([CNCF](https://www.cncf.io/)),
  for the [Docsy Steering Committee](/blog/2022/hello/#introducing-the-psc)
body_class: release-highlights
tags: [hugo, upgrade]
params:
  # Frozen at publish time; see maintainer notes, "Hugo versions".
  hugoSupportedVersion: 0.164.0
# prettier-ignore
cSpell:ignore: amp AVIF CatmullRom chromastyles contentbasename downscaling goldmark Netlify Pandoc partialCached passthrough protobuf renderSegments reStructuredText retokenizes useEmbedded userinfo
---

This post summarizes breaking, security, and notable changes in Hugo 0.158.0 to
{{% param hugoSupportedVersion %}} that are relevant to Docsy users. It is a
companion post to the Docsy [0.16.0](0.16.0/) release and upgrade guide, which
covers the
[Hugo versions that Docsy 0.16.0 requires and validates](0.16.0/#hugo).

## Upgrade summary

This guide highlights Hugo changes that may require action when upgrading a
Docsy site to 0.16.0.

- Review {{% _param BADGE BREAKING warning %}} changes:
  <a id="breaking-changes"></a>
  - {{% _param BREAKING %}}
    [Node 22+ is required for Hugo-managed Node tools](#node-tools)
  - {{% _param BREAKING %}}
    [HTML content and symlink security changed](#security)
- Review **deprecations**: <a id="deprecations"></a>
  - [Language config and template APIs](#language-apis)
  - [Imaging config and template APIs](#imaging)
- Optionally skim:
  - [Markdown-link escaping](#amp-escaping)
  - [Image URL churn](#image-url-churn)
  - [Template and module cleanup](#template-module-cleanup)
  - [Faster builds and stricter templates](#hugo-0-164-0)
  - [Notable changes](#notable-changes)
- {{% _param FAS rocket primary %}} Jump to
  [Upgrade to Hugo {{% param hugoSupportedVersion %}}](#upgrade) once you're
  ready.

## Language API deprecations (0.158.0) {#language-apis}

Hugo 0.158.0 renamed several language configuration keys and template methods.
The old names log deprecation notices first, then move toward warnings and
eventual errors on Hugo's deprecation timeline.

Docsy's own templates and docs now use the new names — one of the changes behind
0.16.0's [raised Hugo minimum](0.16.0/#hugo).

### Actions {#language-api-actions}

**Applies if** your multilingual site config uses older language keys. Rename
them when convenient:

```yaml
# OLD
languages:
  en:
    languageName: English
    languageDirection: ltr

# NEW
languages:
  en:
    label: English
    direction: ltr
```

**Applies if** your site overrides language-related templates or partials.
Review custom template code for these replacements:

| Deprecated                                | Replacement              |
| ----------------------------------------- | ------------------------ |
| `.Language.Lang`                          | `.Language.Name`         |
| `.Language.LanguageCode`                  | `.Language.Locale`       |
| `.Language.LanguageName`                  | `.Language.Label`        |
| `.Language.LanguageDirection`             | `.Language.Direction`    |
| `.Site.LanguageCode`                      | `.Site.Language.Locale`  |
| `(Page\|Site).Language.Weight`            | no direct replacement    |
| `.Site.Languages` for cross-site language | `hugo.Sites` or `.Sites` |

For current Docsy examples, see [Multi-language support][].

## Markdown-link escaping (0.159.2, fixed in 0.160.0) {#amp-escaping}

Hugo 0.159.2 included a security fix for dangerous URLs in Markdown links and
images. It also introduced a regression that could double-escape `&` in rendered
Markdown link URLs, producing `&amp;amp;` in HTML output.

Hugo 0.160.0 fixed that regression, and Hugo 0.160.1 is the safer 0.160.x patch
release. If you are moving through this range, do not stop at 0.159.2. Docsy
0.16.0's minimum Hugo version, 0.160.1, already excludes this window.

### Actions {#amp-escaping-actions}

**Applies if** you briefly tested or deployed Hugo 0.159.2.

- Search generated HTML for `&amp;amp;` in link URLs.
- Pay closest attention to monolingual sites without custom link render hooks:
  multilingual single-host sites are usually shielded by Hugo's
  `useEmbedded: auto` link render hook, and custom link render hooks also
  usually shield a site.

## Template and module cleanup (0.159.x-0.160.x) {#template-module-cleanup}

Hugo 0.159.x continued several cleanup paths that may show up in older Docsy
sites, Docsy forks, or large downstream sites with local template overrides.
Hugo 0.160.1 then fixed several rendering issues in this range.

### Actions {#template-module-cleanup-actions}

**Applies if** your site has custom templates, module mounts, or conversion
scripts.

- Replace deprecated `site.Data` usage with `hugo.Data`.
- Replace deprecated `includeFiles` and `excludeFiles` module mount options with
  `files`.
- Replace deprecated `:filename` permalink placeholders with `:contentbasename`.
- If you run `hugo mod npm pack`, test it after upgrading.
- If you use `hugo convert`, review generated output before committing it.

**Applies if** your site uses Goldmark passthrough, `RenderShortcodes`, or
multilingual root sections. Hugo 0.160.1 -- Docsy 0.16.0's minimum -- fixed
regressions in this range around passthrough elements in headings, shortcode
rendering context markers, and multilingual root section generation; include
such pages in your smoke tests.

## {{% _param BREAKING %}} Node-managed tools (0.161.x) {#node-tools}

Hugo 0.161.x runs Node-based tools such as PostCSS, Babel, and Tailwind under
Node's `--permission` sandbox. This requires **Node 22 or later**.

Docsy sites commonly use PostCSS for CSS processing, so this can be a practical
breaking change even when the Docsy theme itself has not changed. Hugo 0.163.2
and 0.163.3 fix regressions in this permission model, so prefer 0.163.3 or later
for PostCSS pipelines; the actions below give the specifics.

### Actions {#node-tools-actions}

{{% _param BREAKING %}} **Applies if** your site uses Hugo 0.161.x or later and
runs PostCSS, Babel, Tailwind, or similar Node tools during the Hugo build.

- Upgrade Node to the active LTS release. For Docsy 0.16.0, use Node LTS 24.
- Build locally and check for Node permission errors.
- If your CI keeps `node_modules` outside the project tree (for example,
  Netlify's shared cache) and the build fails with `ERR_ACCESS_DENIED`, upgrade
  to Hugo 0.163.2 or later.
- If your PostCSS or Babel config uses an `.mjs` or `.cjs` variant (for example,
  `postcss.config.mjs`), use Hugo 0.163.3, which resolves those variants.
- If your project uses Tailwind, install Tailwind as an npm package. Hugo no
  longer supports the standalone Tailwind binary in this path.

## {{% _param BREAKING %}} Content and resource security (0.161.x-0.163.x) {#security}

Hugo tightened several security boundaries in this range:

- `security.http.urls` defaults became more restrictive, and
  `resources.GetRemote` re-checks redirects.
- `text/html` content files are denied by default unless allowed through
  `security.allowContent`.
- Symlinked entries are rejected or ignored by more template/resource functions,
  including `resources.Get` and, in 0.163.1, `os.ReadDir`, `os.ReadFile`,
  `os.Stat`, and `os.FileExists`.

Docsy's own workspace and smoke-test install shapes were validated across these
changes, but site-specific mounts, symlinks, and remote resource fetches are
always project-specific.

### Actions {#security-actions}

{{% _param BREAKING %}} **Applies if** your site uses remote resources,
hand-authored `.html` content files, or symlinked content/assets.

- Build locally with your target Hugo version and review security-related errors
  or warnings.
- If you intentionally publish `.html` content files, configure
  `security.allowContent` explicitly.
- If templates call `resources.GetRemote`, review `security.http.urls` and test
  redirecting URLs.
- If your content or assets are symlinked into the project, test those pages and
  consider replacing symlinks with Hugo mounts or real files if Hugo blocks
  them.
- If templates use `templates.Defer` inside `partialCached`, move that deferred
  work outside the cached partial; Hugo now reports this invalid combination
  instead of silently doing the wrong thing.

## Imaging deprecations and URL churn (0.163.x) {#imaging}

Hugo 0.163.0 deprecated global imaging quality settings in favor of per-format
settings. It also introduced AVIF-related imaging configuration and changed
internal resized-image cache keys.

Docsy's website configuration was streamlined as part of the upgrade: settings
that matched Hugo defaults were removed, and `resampleFilter: CatmullRom` was
kept because it materially affects photo downscaling quality.

### Actions {#imaging-actions}

**Applies if** your site config uses global `imaging.quality` or
`imaging.compression`.

- Replace global settings with per-format settings, or remove them if they match
  Hugo defaults.
- Keep `resampleFilter: CatmullRom` if your site relies on Docsy-style sharp
  photographic downscaling.

For example:

```yaml
imaging:
  resampleFilter: CatmullRom
```

### Image URL churn {#image-url-churn}

**Applies if** your site commits generated output, compares public builds, or
uses a CDN that caches generated image resources aggressively.

Hugo 0.161.x-0.163.x can change resized-image filenames that contain
`_hu_<HASH>` even when the source image and visual output are unchanged. Treat
this as expected cache-key churn. It can create noisy diffs and cache misses,
but it is not usually a content regression.

## Faster builds and stricter templates (0.164.0) {#hugo-0-164-0}

Hugo 0.164.0 fixes a template-rendering slowdown that affected Hugo 0.128.0
through 0.163.x. Large sites benefit the most: on a reported ~8,500-page Docsy
site, the fix cut full-build time from 608 to 117 seconds ([performance
discussion][hugo-164-perf]).

The same release tightens template handling and refreshes syntax highlighting:

- `resources.PostProcess` is deprecated; use `templates.Defer` instead. Docsy's
  templates don't use `resources.PostProcess`.
- `.Render` now fails the build when the named view template is missing, instead
  of silently rendering nothing; nested view names work again.
- The bundled Chroma highlighter retokenizes some languages, such as protobuf,
  YAML, and Markdown: syntax-highlighting classes change, text content does not.
- In multilingual sitemaps, each URL's `xhtml:link` alternates now list the
  entry's own language first.

### Actions {#hugo-0-164-0-actions}

**Applies if** your site is large, overrides or adds templates, or commits
generated output.

- Benchmark a clean production build; template-heavy sites may see large
  build-time wins.
- Replace `resources.PostProcess` with `templates.Defer` in custom templates.
- Fix any `.Render` calls that name a missing view template; they now fail the
  build.
- Treat syntax-highlighting class changes and sitemap alternate-link reordering
  as expected output churn.

## Other deprecations and notable changes {#notable-changes}

### Template and config deprecations {#other-deprecations}

Review these if your site has custom templates, external content converters, or
JavaScript tooling config:

- `.IsNode` is deprecated; use `.IsBranch`.
- `jsconfig` `baseUrl` support was removed.
- If you read Git metadata from module-mounted pages, verify `.Page.GitInfo`
  output. Hugo 0.162.0 fixed GitInfo handling for modules whose `go.mod` lives
  in a repository subdirectory.
- If you use `--renderSegments`, prefer Hugo 0.163.1 for its segment-merge fix.
- If your site sets `uglyURLs: true` and has a page and a section sharing a name
  (for example, `download.htm` beside `download/`), use Hugo 0.163.3, which
  fixes a rendering collision introduced earlier in the 0.163.x range.
- If your site renders Pandoc or reStructuredText content through external
  converters, Hugo 0.163.2 now **fails the build** when the converter binary is
  missing (matching AsciiDoc) instead of silently publishing raw content; ensure
  the converter is installed wherever you build.

### Security fixes {#security-fixes}

This range includes multiple security-related updates, including Go
`html/template` fixes and stricter URL/content handling. Hugo 0.163.3 also
hardens the default code-block render hook: the language token (info string) of
fenced code blocks is now escaped, which matters most for sites that render
untrusted Markdown. This is a strong reason to prefer 0.163.3 or later over
stopping at the minimum 0.160.1.

### New features worth knowing about {#new-features}

- `css.Build` and later `hugo:vars` support may be useful for site-specific CSS
  pipelines, but Docsy has not moved its Sass/PostCSS pipeline to `css.Build`.
- AVIF image processing was added and then tuned in the 0.162.x-0.163.x range.
- `strings.ReplacePairs` is available for template authors on Hugo 0.158.0 or
  later.
- On Hugo 0.164.0, `hugo gen chromastyles` gains `--mode` and `--modeSelector`
  flags for generating combined light/dark syntax-highlighting stylesheets.

## {{% _param FAS rocket primary %}} Upgrade to Hugo {{% param hugoSupportedVersion %}} {#upgrade}

After addressing applicable breaking changes and deprecations, upgrade to Hugo
{{% param hugoSupportedVersion %}}.

If you use the [hugo-extended][] npm package:

```sh
npm install hugo-extended@{{% _param hugoSupportedVersion %}} --save-dev
```

If you use [hvm][]:

```sh
hvm use {{% _param hugoSupportedVersion %}}
```

<section class="td-checkbox-list-wrapper">

### Sanity checks

- [ ] **Build output**: ensure your site builds without errors, warnings, or
      deprecation notices.
- [ ] **Node version**: confirm Node 22 or later; use Node LTS 24 for Docsy
      0.16.0.
- [ ] **Multilingual sites**: check language menu output and language config
      keys.
- [ ] **Links**: inspect generated HTML for `&amp;amp;` if you tested Hugo
      0.159.2.
- [ ] **Images**: expect `_hu_` resized-image filename churn and verify the
      rendered images, not just filenames.
- [ ] **Generated output**: on 0.164.0, expect syntax-highlighting class and
      sitemap alternate-link churn in committed output.
- [ ] **Security policy**: test remote resources, symlinked inputs, and any
      `.html` content files.

### Cross-checks

#### Required actions, as applicable {#required-actions}

- [ ] [Hugo version actions](0.16.0/#hugo-actions) in the release post
- [ ] [Node tooling actions](#node-tools-actions)
- [ ] [Security actions](#security-actions)

#### Recommended review {#recommended-review}

- [ ] [Language API actions](#language-api-actions)
- [ ] [Imaging actions](#imaging-actions)
- [ ] [Markdown-link escaping actions](#amp-escaping-actions)
- [ ] [Hugo 0.164.0 actions](#hugo-0-164-0-actions)

</section>

<!-- prettier-ignore-start -->
[hugo-extended]: https://www.npmjs.com/package/hugo-extended
[hugo-164-perf]: https://discourse.gohugo.io/t/hugo-building-slowly-from-release-0-128-0/57314/21
[hvm]: https://github.com/jmooring/hvm
[Multi-language support]: /docs/language/
<!-- prettier-ignore-end -->
