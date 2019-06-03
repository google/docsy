---
title: "Updating Docsy"
linkTitle: "Updating Docsy"
weight: 8
description: >
 Keeping the theme up to date.
---

We hope to continue to make improvements to the theme [along with the Docsy community](/docs/contribution-guidelines/). 
If you have cloned the example site (or are otherwise using the theme as a submodule), you can update the Docsy theme
yourself. 

Updating Docsy means that your site will build using the latest version of Docsy at `HEAD` and include 
all the new commits or changes that have been merged since the time when you first added the Docsy submodule, 
or last updated. If you have any modified content like a Docsy [customiztion](/docs/adding-content/lookandfeel/), those 
changes will remain in your project. For details about what has changed, see the list of 
[Docsy commits](https://github.com/google/docsy/commits/master).

## Update a Docsy clone

If you have a local clone of the Docsy theme, you `git pull` all the new changes. For example, if `upstream`
is your `remote` that is set to `https://github.com/google/docsy.git`, then from the root 
directory where you cloned the Docsy theme, you run:

```
git pull upstream master
```

## Update a Docsy submodule

If you are using the Docsy theme as a submodule in your project, you update the submodule:

1. Navigate to the root of your local project, then run:

    ```
    $ git submodule update --remote
    ```
    
1. Add and then commit the change to your project:

    ```
    $ git add themes/
    $ git commit -m "Updating theme submodule"
    ```

1. Push the commit to your repo. For example, if your `remote` is `origin`, then you run: 

    ```
    $ git push origin master
    ```

