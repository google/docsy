---
title: Update your Docsy NPM package
linkTitle: NPM package
aliases: [/docs/updating/updating-npm-package/]
weight: 2
description: >-
  Update Docsy with `npm install`, for sites that use the `@docsy/theme`
  package.
---

Update the theme to the latest release by running the following from your
project root:

```sh
npm install --save-dev @docsy/theme@latest
```

> [!TIP]
>
> To pin a specific version, name it explicitly, for example:
>
> ```sh
> npm install --save-dev @docsy/theme@{{% param tdVersion.latest %}}
> ```

> [!NOTE]
>
> If your project gates installs with npm's `min-release-age`, installing a
> release younger than the gate fails with `ETARGET`, and the error doesn't name
> the cause. Wait out the window, or run the update under a one-off
> `NPM_CONFIG_MIN_RELEASE_AGE` override, noting the override in your update PR.

To verify the resolved version of [`@docsy/theme`][npm-package-setup], run:

```sh
npm ls @docsy/theme --depth=0
```

If your site installs Docsy [from GitHub with npm][github-npm] (a mode reserved
for Docsy development and testing), update by re-running the install command
with the desired [revision selector][github-npm].

After updating the theme, continue with the remaining update steps, starting
with [Review your theme overrides](/docs/update/#update-overrides).

<!-- prettier-ignore-start -->
[github-npm]: /docs/get-started/other-options/#development-versions-of-docsy
[npm-package-setup]: /docs/get-started/other-options/#option-3-docsy-as-an-npm-package
<!-- prettier-ignore-end -->
