---
title: Update Docsy
description: Keeping the Docsy theme up to date.
weight: 8
---

Some update steps are the same for every Docsy release: update your Docsy
package, and possibly your Hugo and Node.js versions. This section documents
those steps for each install mode. For what changed in a given release and any
release-specific actions, see the release's [upgrade blog post][blog] and the
[changelog][].

Updating Docsy won't affect any modifications that you made in your own project
to [override the Docsy look and feel][lookandfeel], as your overrides don't
modify the theme itself — although you may need to port upstream changes to
copies of theme files that your site overrides.

## Update Docsy {#update-docsy}

Follow the page matching your install mode:

- [Hugo module](updating-hugo-module/)
- [NPM package](updating-npm-package/)
- [Git submodule or clone](updating-submodules/)

If you are using Docsy as a Git submodule or clone, consider
[migrating to Hugo modules](convert-site-to-module/) or the
[NPM package][npm-package] — both are easier to keep up to date.

## Update Hugo and Node.js {#update-hugo-node}

Each Docsy release declares a minimum Hugo version and is tested against a
specific Node.js LTS release; a release's upgrade [blog post][blog] lists both.
How you update Hugo depends on how your project manages its Hugo dependency.
For projects using the [hugo-extended NPM package][hugo-extended], update the
package version, for example:

```sh
npm install --save-exact --save-dev hugo-extended@latest
```

For Node.js, we recommend using [nvm][] to install and select the active LTS
release:

```sh
nvm install --lts
```

## Test your update {#test}

Build and serve your site to check for errors and verify that it renders as
expected:

```sh
npm run build
npm run serve
```

For a thorough post-update checklist, see the latest release's
[upgrade blog post][blog].

## Roll back {#roll-back}

To roll back an update, re-run your install mode's
[update procedure](#update-docsy), specifying the Docsy version that you were
previously using — likewise for Hugo, if you updated it. Consult the [upgrade
blog post][blog] of the release you are rolling back **from** for any
release-specific steps to reverse, such as site-config changes.

[blog]: /blog/
[changelog]: /project/about/changelog/
[hugo-extended]: /docs/get-started/other-options/#hugo-extended-npm
[lookandfeel]: /docs/content/lookandfeel/
[npm-package]: /docs/get-started/other-options/#option-3-docsy-as-an-npm-package
[nvm]: https://github.com/nvm-sh/nvm
