---
title: Update Docsy
description: Keeping your Docsy theme up to date
weight: 8
---

This section documents how to update your site's Docsy theme and, when required,
its Node.js and Hugo versions. For what changed in a given release, and any
release-specific upgrade actions, see the [upgrade blog posts][blog].

> [!NOTE]
>
> Updating from Docsy 0.15 or earlier? First apply the config changes from the
> 0.16.0 post's [theme folder actions][tfa].

<!-- TODO(0.18-ish): drop the crossing note above once 0.15-to-0.16 upgrade
     traffic fades; release history lives in the blog posts. (2026-07-28) -->

To update the theme, follow the page matching your install mode:

- [Hugo module](hugo-module/)
- [NPM package](npm-package/)
- [Git submodule or clone](submodules/)

The remaining update steps apply to all install modes.

## Update Node.js {#update-node}

Docsy is tested against a specific Node.js LTS release; a release's upgrade
[blog post][blog] names it. We recommend using [nvm][] to install and select the
active LTS release:

```sh
nvm install --lts
```

## Update Hugo {#update-hugo}

Each Docsy release declares a minimum Hugo version; a release's upgrade [blog
post][blog] lists it. For projects using the [hugo-extended NPM
package][hugo-extended], update the package version, for example:

```sh
npm install --save-exact --save-dev hugo-extended@latest
```

After updating, also refresh any CI/CD cache keys so that builds don't reuse a
cached Hugo.

## Review your theme overrides {#update-overrides}

If your project [overrides theme files][hugo-override], then after updating,
diff each override against its new theme counterpart and port upstream changes
as needed. Look for overrides in your project's:

- `layouts/`, the most common location
- `assets/`, `i18n/`, and `static/`

Docsy's [project style files][lookandfeel] (`_variables_project.scss` and
friends) also work this way, but the theme's copies are placeholders that are
intentionally empty: there's nothing to diff, so they don't need this review.

## Test your update {#test}

Build and serve your site using your usual commands to check for errors and
verify that your site renders as expected: for example, `hugo` and
`hugo server`, or your site's `npm run build` and `npm run serve` scripts. We
recommend building both development and production versions of your site.

Use this checklist to verify that your update succeeded:

- [ ] Build succeeds without errors, warnings, or deprecation notices; CSS and
      other asset files are rendered
- [ ] Key pages (e.g. home, a doc page, a blog post) load with no 404s or broken
      layout
- [ ] Nav links resolve; breadcrumbs show current path; current section is
      highlighted
- [ ] On mobile or tablet: navigation is usable and key pages have no horizontal
      scroll
- [ ] External links show expected styling (e.g. icon)
- [ ] [Heading self-links][] work and are styled correctly
- [ ] Dark mode toggle works (if enabled)
- [ ] Custom shortcodes render correctly (if used)
- [ ] Search returns expected results (if used)
- [ ] Print preview looks correct (if used)

Also perform any release-specific checks listed in the release's [upgrade blog
post][blog].

## Roll back {#roll-back}

To roll back an update:

1. Re-run your install mode's update procedure, specifying the Docsy version
   that you were previously using; likewise for Hugo, if you updated it.
2. Consult the [upgrade blog post][blog] of the release you are rolling back
   **from** for any release-specific steps to reverse, such as site-config
   changes (for example, [0.16.0's rollback][0.16.0]).

<!-- TODO(tag-time): re-point the two preview-host (main--) links below to
     production /blog/2026/0.16.0/ URLs once the post publishes; see the
     release-prep wrapup checklist. -->

[0.16.0]: https://main--docsydocs.netlify.app/blog/2026/0.16.0/#rollback
[blog]: /tags/upgrade/
[Heading self-links]: /docs/content/navigation/#heading-self-links
[hugo-override]:
  https://gohugo.io/getting-started/directory-structure/#theme-skeleton
[hugo-extended]: /docs/get-started/other-options/#hugo-extended-npm
[lookandfeel]: /docs/content/lookandfeel/#project-style-files
[nvm]:
  https://github.com/nvm-sh/nvm/blob/master/README.md#installing-and-updating
[tfa]:
  https://main--docsydocs.netlify.app/blog/2026/0.16.0/#theme-folder-actions
