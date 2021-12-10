---
title: "Update of Docsy theme if used as hugo module"
linkTitle: "Update of Docsy (hugo module)"
weight: 1
description: >
  Updating Docsy theme to latest version (for installations that use Docsy theme as **hugo module**).
---

When making use of Dosy theme as hugo module, updating your theme is really easy:

At the command prompt, change to the root directory of your existing site.

```
cd /path/to/my-existing-site
```

Then invoke hugo's module `get` subcommand with the update flag:

```
hugo mod get -u github.com/google/docsy
```

Hugo will automatically pull in the latest theme version. That's it, your update is done!


{{% alert title="Tip" %}}
If you want to set your module to a certain revision inside the docsy theme repo, simply specific the commit hash (here: _c7b9901e_) when updating your theme:

```
hugo mod get -u github.com/google/docsy@c7b9901e
```
{{% /alert %}}

