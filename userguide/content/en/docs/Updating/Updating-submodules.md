---
title: "Update of Docsy theme if used traditionally (no hugo module)"
linkTitle: "Update of Docsy (no module)"
weight: 2
description: >
  Updating Docsy theme to latest version (for traditional installations **not** using hugo as module).
---

{{% alert title="Tip" %}}
If you intend to update your site, you might consider [converting your site to hugo modules](http://localhost:1313/docs/updating/convert-site-to-module/). After conversion, the update of your site is as simple as never before.
{{% /alert %}}

Depending on how you chose to install Docsy on your existing traditional site, use one of the following two routes to update your theme:

## Route 1: Update your Docsy submodule

If you are using the Docsy theme as a submodule in your project (for example, if you've copied our example site), that's how you update the submodule:

1. Navigate to the root of your local project, then run:

        git submodule update --remote

    
1. Add and then commit the change to your project:

        git add themes/
        git commit -m "Updating theme submodule"


1. Push the commit to your project repo. For example, run:

        git push origin master


## Route 2: Update your Docsy clone

If you [cloned the Docsy theme](/docs/getting-started/#cloning-the-docsy-theme-to-your-projects-themes-subdirectory) into
the `themes` folder in your project, then you use the `git pull` command:

1. Navigate to the `themes` directory in your local project:

        cd themes

1. Ensure that `origin` is set to `https://github.com/google/docsy.git`:

        git remote -v

1. Update your local clone:

        git pull origin master

If you have made any local changes to the cloned theme, you must manually resolve any merge conflicts.
