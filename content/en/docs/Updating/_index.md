---
title: "Updating Docsy"
linkTitle: "Updating Docsy"
weight: 8
description: >
 Keeping the theme up to date.
---

We hope to continue to make improvements to the theme [along with the Docsy community](/docs/contribution-guidelines/). If you have cloned the example site (or are otherwise using the theme as a submodule), you can update the theme submodule yourself as follows:

1. In your local copy of your project, run:

    ```
    $ git submodule update --remote
    ```
    
1. Then add and commit your change:

    ```
    $ git add themes/
    $ git commit -m "Updating theme submodule"
    ```

1. Finally, push the change back to the project repo.

    ```
    $ git push origin master
    ```
    
If you've cloned the theme yourself, use `git pull origin master` in the theme root directory to get the latest version.

