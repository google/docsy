---
title: Update your Docsy Hugo Module
linkTitle: Hugo module
aliases: [/docs/updating/updating-hugo-module/]
weight: 1
description: Update your Docsy theme to the latest version using Hugo Modules.
---

At the command prompt, change to the root directory of your existing site.

```bash
cd /path/to/my-existing-site
```

Then invoke hugo's module `get` subcommand with the update flag:

```bash
hugo mod get -u github.com/google/docsy/theme
```

Hugo automatically pulls in the latest theme version.

> [!TIP]
>
> To pin the theme to a specific version, specify its tag when updating, for
> example:
>
> ```bash
> hugo mod get github.com/google/docsy/theme@{{% param tdVersion.latest %}}
> ```
>
> Instead of a version tag, you can also specify a commit hash, for example:
>
> ```bash
> hugo mod get github.com/google/docsy/theme@9b1d9951
> ```

After updating the theme, tidy your module files, refresh the [theme npm
dependencies][] that are consolidated into your site's `package.json`, and
reinstall them:

```bash
hugo mod tidy
hugo mod npm pack
npm install
```

Hugo warns at build time when your `package.json` dependency set has drifted
from the theme's. To verify the update, confirm that your site's `go.mod` now
records `github.com/google/docsy/theme` at the version you expect.

After updating the theme, continue with the remaining
[update steps](/docs/update/#update-order).

[theme npm dependencies]:
  /docs/get-started/docsy-as-module/start-from-scratch/#install-theme-npm-dependencies
