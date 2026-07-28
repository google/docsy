---
title: Update Docsy
description: Keeping your Docsy theme up to date
weight: 8
---

This section documents how to update your site's Docsy theme (and, when
required, its Node.js and Hugo versions) for upgrades to Docsy 0.16.0 or later;
for earlier targets, follow the target release's [upgrade blog post][blog]. For
what changed in a given release and any release-specific actions, see the
release's post and the [changelog][].

## Update the theme {#update-docsy}

Follow the page matching your install mode:

- [Hugo module](updating-hugo-module/)
- [NPM package](updating-npm-package/)
- [Git submodule or clone](updating-submodules/)

> [!NOTE]
>
> Updating from Docsy 0.15 or earlier? The theme's install paths changed in
> 0.16.0: first apply the config changes from the 0.16.0 post's [theme folder
> actions][tfa], then follow your install mode's page.

## Update Node.js {#update-node}

Docsy is tested against a specific Node.js LTS release; a release's upgrade
[blog post][blog] names it. We recommend using [nvm][] to install and select
the active LTS release:

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

## Update your theme overrides {#update-overrides}

If your site [overrides theme files][lookandfeel], diff each override against
the new theme version and port upstream changes.

## Test your update {#test}

Build and serve your site using your usual commands (for example, `hugo` and
`hugo server`, or your site's `npm run build` and `npm run serve` scripts) to
check for errors and verify that your site renders as expected. We recommend
building both development and production versions of your site.

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

To roll back an update, re-run your install mode's
[update procedure](#update-docsy), specifying the Docsy version that you were
previously using; likewise for Hugo, if you updated it. Consult the [upgrade
blog post][blog] of the release you are rolling back **from** for any
release-specific steps to reverse, such as site-config changes (for example,
[0.16.0's rollback][0.16.0]).

<!-- TODO(tag-time): re-point the two preview-host (main--) links below to
     production /blog/2026/0.16.0/ URLs once the post publishes; see the
     release-prep wrapup checklist. -->

[0.16.0]: https://main--docsydocs.netlify.app/blog/2026/0.16.0/#rollback
[blog]: /tags/upgrade/
[changelog]: /project/about/changelog/
[Heading self-links]: /docs/content/navigation/#heading-self-links
[hugo-extended]: /docs/get-started/other-options/#hugo-extended-npm
[lookandfeel]: /docs/content/lookandfeel/
[nvm]:
  https://github.com/nvm-sh/nvm/blob/master/README.md#installing-and-updating
[tfa]:
  https://main--docsydocs.netlify.app/blog/2026/0.16.0/#theme-folder-actions
