---
title: Update your Docsy Git submodule or clone
linkTitle: Git submodule or clone
weight: 3
description: >
  Update the Docsy theme to the latest version using submodules or `git pull`.
---

If you aren't using Hugo Modules, depending on how you chose to install Docsy on
your existing site, use one of the following two procedures to update your
theme.

> [!TIP]
>
> If you intend to update your site, consider
> [converting your site to Hugo Modules](/docs/update/convert-site-to-module/)
> or switching to the
> [Docsy NPM package](/docs/get-started/other-options/#option-3-docsy-as-an-npm-package).
> After conversion, it's even simpler to update Docsy!

## Update your Docsy submodule

If you are using the
[Docsy theme as a submodule](/docs/get-started/other-options/#option-1-docsy-as-a-git-submodule)
in your project, here's how you update the submodule to the latest release:

1. Navigate to the root of your local project, then update the submodule to the
   release tag that you are targeting, for example:

   ```sh
   git -C themes/docsy fetch --tags
   git -C themes/docsy checkout {{% param tdVersion.latest %}}
   ```

1. Reinstall the theme's runtime dependencies:

   ```sh
   npm run postinstall --prefix themes/docsy
   ```

   Run `npm run postinstall`, not `npm install`; for why, see the [setup
   note][postinstall-note].

1. Add and then commit the change to your project:

   ```sh
   git add themes/docsy
   git commit -m "Update Docsy theme to {{% param tdVersion.latest %}}"
   ```

1. Push the commit to your project repo.

## Update your Docsy clone

If you
[cloned the Docsy theme](/docs/get-started/other-options/#option-2-clone-the-docsy-theme)
into the `themes` folder in your project, update the clone to the release tag
that you are targeting:

1. Navigate to the root of your local project, then run:

   ```sh
   git -C themes/docsy fetch --tags
   git -C themes/docsy checkout {{% param tdVersion.latest %}}
   ```

   Ensure that `origin` is set to `https://github.com/google/docsy.git`
   (`git -C themes/docsy remote -v`).

1. Reinstall the theme's runtime dependencies:

   ```sh
   npm run postinstall --prefix themes/docsy
   ```

   As in the submodule procedure, run `npm run postinstall`, not `npm install`.

If you have made any local changes to the cloned theme, **you must manually
resolve any merge conflicts**.

[postinstall-note]: /docs/get-started/other-options/#for-an-existing-site
