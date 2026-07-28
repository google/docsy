---
title: Update your Docsy NPM package
linkTitle: NPM package
aliases: [/docs/updating/updating-npm-package/]
weight: 2
description: Update your Docsy theme to the latest version using npm.
---

If your site installs Docsy from the npm registry as
[`@docsy/theme`][npm-package-setup], update the theme to the latest release by
running the following from your project root:

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

To verify the update, confirm that `@docsy/theme` in your `package.json` records
the version you expect.

If your site installs Docsy [from GitHub with npm][github-npm] (a mode reserved
for Docsy development and testing), update by re-running the install command
with the desired [revision selector][github-npm].

After updating the theme, continue with the remaining
[update steps](/docs/update/#update-order).

[github-npm]: /docs/get-started/other-options/#development-versions-of-docsy
[npm-package-setup]:
  /docs/get-started/other-options/#option-3-docsy-as-an-npm-package
