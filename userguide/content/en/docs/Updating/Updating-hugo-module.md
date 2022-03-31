---
title: "Update the Docsy Hugo Module"
linkTitle: "Update the Docsy Hugo Module"
weight: 1
description: >
  Update the Docsy theme to the latest version using Hugo Modules.
---

When using the Docsy theme as a Hugo Module, updating your theme is really easy.

At the command prompt, change to the root directory of your existing site.

```
cd /path/to/my-existing-site
```

Then invoke hugo's module `get` subcommand with the update flag:

```
hugo mod get -u github.com/google/docsy
```

Hugo automatically pulls in the latest theme version. That's it, your update is done!


{{% alert title="Tip" %}}
If you want to set your module to a certain version inside the docsy theme repo, simply specific the name of the tag representing this version (here: _v0.2.0_) when updating your theme:

```
hugo mod get -u github.com/google/docsy@v0.2.0
```

Instead of a version tag, you can also specify a commit hash inside the repo (here: _c7b9901e_) when updating your theme:


```
hugo mod get -u github.com/google/docsy@c7b9901e
```
{{% /alert %}}

