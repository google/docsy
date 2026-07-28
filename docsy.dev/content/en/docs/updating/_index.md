---
title: Update Docsy
description: Keeping the Docsy theme up to date.
weight: 8
---

Some update steps are the same for every Docsy release: update your Docsy
package, and possibly your Hugo and Node.js versions. This section documents
those steps for each install mode, for upgrades to Docsy 0.16.0 or later. For
what changed in a given release and any release-specific actions, see the
release's [upgrade blog post][blog] and the [changelog][]. For upgrades to
earlier versions, follow the target release's post.

Updating Docsy won't affect any modifications that you made in your own project
to [override the Docsy look and feel][lookandfeel], as your overrides don't
modify the theme itself — although you may need to port upstream changes to
copies of theme files that your site overrides.

## Update Docsy {#update-docsy}

Follow the page matching your install mode:

- [Hugo module](updating-hugo-module/)
- [NPM package](updating-npm-package/)
- [Git submodule or clone](updating-submodules/)

> [!NOTE]
>
> Updating from Docsy 0.15 or earlier? The theme's install paths changed in
> 0.16.0: first apply the config changes from the 0.16.0 post's [theme folder
> actions][tfa], then follow your install mode's page.

If you are using Docsy as a Git submodule or clone, consider
[migrating to Hugo modules](convert-site-to-module/) or the [NPM
package][npm-package] — both are easier to keep up to date.

## Update Hugo and Node.js {#update-hugo-node}

Each Docsy release declares a minimum Hugo version and is tested against a
specific Node.js LTS release; a release's upgrade [blog post][blog] lists both.
For projects using the [hugo-extended NPM package][hugo-extended], update the
package version, for example:

```sh
npm install --save-exact --save-dev hugo-extended@latest
```

After updating, also refresh your NPM lockfile or any CI/CD cache keys so that
builds don't reuse a cached Hugo.

For Node.js, we recommend using [nvm][] to install and select the active LTS
release:

```sh
nvm install --lts
```

## Test your update {#test}

Build and serve your site using your usual commands — for example, `hugo` and
`hugo server`, or your site's `npm run build` and `npm run serve` scripts — to
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
previously using — likewise for Hugo, if you updated it. Consult the [upgrade
blog post][blog] of the release you are rolling back **from** for any
release-specific steps to reverse, such as site-config changes. In particular,
rolling back across a release that changed the theme's install paths — such as
[0.16.0][] — requires restoring the previous paths, as described in that
release's post.

<!-- TODO(tag-time): re-point the two preview-host (main--) links below to
     production /blog/2026/0.16.0/ URLs once the post publishes; see the
     release-prep wrapup checklist. -->

[0.16.0]: https://main--docsydocs.netlify.app/blog/2026/0.16.0/#rollback
[blog]: /tags/upgrade/
[changelog]: /project/about/changelog/
[Heading self-links]: /docs/content/navigation/#heading-self-links
[hugo-extended]: /docs/get-started/other-options/#hugo-extended-npm
[lookandfeel]: /docs/content/lookandfeel/
[npm-package]: /docs/get-started/other-options/#option-3-docsy-as-an-npm-package
[nvm]:
  https://github.com/nvm-sh/nvm/blob/master/README.md#installing-and-updating
[tfa]:
  https://main--docsydocs.netlify.app/blog/2026/0.16.0/#theme-folder-actions
