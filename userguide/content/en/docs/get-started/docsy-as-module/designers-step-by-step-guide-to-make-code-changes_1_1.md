---
title: "Step by Step Guide to Make Code Changes"
description: "This is a step-by-step guide for how to make code changes against the main GitLab codebase. This guide is meant to serve as a tutorial for anyone with semi-technical knowledge."
---

## What is this?

This is a step-by-step guide for how to make code changes against the main GitLab codebase. This guide is meant to serve as a follow-along tutorial for anyone with semi-technical knowledge who wants to contribute to GitLab by making small UI changes (like text changes). These changes are meaningful contributions that work towards the consistency of GitLab's UI.

These changes are an excellent way to add value to the GitLab project and can be good starter MRs for anyone who wants to get familiar with the GitLab codebase and do more meaningful changes in the future.

This guide is based on [this video tutorial](https://www.youtube.com/watch?v=AEv3XFw0xJQ) by [`@jj-ramirez`](https://gitlab.com/jj-ramirez).

## Pre-requisites

Before you start with this guide, make sure you have the GDK installed and running. You can follow the GDK installation and setup steps in the following pages:

- [Learn how to prepare your workstation to run GDK](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/index.md#install-prerequisites)
- [Learn how to install GDK](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/index.md#one-line-installation)
- [Learn how to run GDK](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/index.md)
- [GDK Commands cheatsheet](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/HELP)

**Note:** After installing your GDK  you should have a `gitlab-development-kit` folder (that's the default name, but it can be different if you changed the name in the installation process). Inside of it you should have a working `gitlab` folder that contains all the files of the GitLab project. Both folders should be available and browseable if you installed your GDK correctly.

You also need to have Visual Studio Code installed since this is the code editor that we would be using for this tutorial. You can download the latest version of Visual Studio Code in the following page:

- [Visual Studio Code](https://code.visualstudio.com/Download)

Finally, you need to have your Git and SSH credentials correctly set up in your machine. If you haven't configured SSH access in your computer you can do so by completing the configuration explained in the following tutorial:

- [Setting up SSH access](https://docs.gitlab.com/ee/ssh/)

## Step by step guide

1. Open the `gitlab` folder from your Visual Studio Code. You can do that by going to File > Open... and by locating your `gitlab` folder inside the `gitlab-development-kit` or equivalent GDK directory.
1. Open your Terminal. A terminal or CLI it's available in all major operating systems. This guide was prepared on MacOS so we will be using Terminal for all the examples. You can find the MacOS Terminal in the Applications folder.
1. Navigate to your `gitlab` folder in the Terminal. You can do this by using the `cd` command to drill into folders. One simple way to quickly jump into the `gitlab` folder is to locate in a Finder window and drag and drop it on the Terminal. This would provide the absolute path to where you `gitlab` folder is located.

    To do this simply type `cd`  in your Terminal. Locate the `gitlab` folder in a Finder window and drag and drop it on the Terminal. The resulting command would look something like this `cd /Users/jj-gitlab/Desktop/GDK/gdk2/gitlab`. Hit `Enter` and you should be inside the right folder. You can make sure that's the case by checking that the name of the folder shows up next to the name of your machine in the Terminal.

1. Start your GDK by running the `gdk start` command. This will spin a local version of GitLab that is available at the test host you setup when installing your GDK or more generally at your localhost: http://127.0.0.1:3000/
1. If everything is working well you should be able to see a login page for a GitLab instance in your browser. Log in using the GDK credentials. You can find the GDK credentials by typing `gdk help` in the terminal. The credentials can be found at the bottom of the resulting message.
1. Prepare your Git so you can start pushing changes once you're ready. The first thing you want to do is to create and switch to a new branch. You can do that by typing the following command in your terminal: `git switch -c "your-branch-name"`. For your branch name make sure to pick a meaningful and short name. Branch names should use kebab/hyphenated case ('a-branch-name').
1. Once you're checked out into a new branch is time to start exploring some potential changes. This guide mostly focuses on UI text changes so we will use an example of that nature for the rest of the guide. In this guide, we will be changing a text found in the general settings, specifically in the "Naming, Topics, Avatar" section.

    The text is `Update your project name, topics, description and avatar.`. We will change that text to `Update your project name, topics, description, compliance framework, and avatar.` Have in mind that this is just an example for the tutorial and no actual change will be pushed permanently.

    Make sure to check for the existence of this particular text in your GDK-powered environment. Do so by going to one of the sample projects and clicking on Settings and then in General. The helper text of the first section is what we will be changing.

1. Now that we have a clear goal of what we are changing is time to find the file or files that need to be modified for this change to happen. To do this go to Visual Studio Code and click on the Global Search icon on the left sidebar of your Visual Studio Code window. This should reveal a text box where you can type your search query. In this particular case, we are searching for a particular string which is `Update your project name, topics, description and avatar`. Simply copy and paste that line in the search box.

    At this point, you should see some search results that match your query. Since this guide is focused on making UI string changes here are some general rules to make sure that you're indeed changing the correct occurrence of that text:

    - Don't change any `gitlab.pot` file. Those are translation files that are created and updated by a job that you will be running later in this guide.

    - Your strings could be located in either a `.haml` (server template) file or `.vue` (frontend component) file. Regardless of which files are being changed the most likely scenario is that your targeted string is wrapped inside markdown that looks like this `_('string')` or like this `s_('string')`. In this example, the text we are looking for should look like this: `_('Update your project name, topics, description and avatar.')`

    - Your search query could show up in test files. Test files end in `.spec.rb` or `.spec.js`. If your string matches a test file, it's likely that the test file needs to be changed. If those test files aren't modified your pipeline will fail when you push the changes. This will be explained better later in the **Caveats** section of this guide.

1. Now that we have some rules of how to modify UI strings, is time to make the actual change. Before this step we searched for `Update your project name, topics, description and avatar`. This should return a match inside a file named `edit.html.haml`. This file also meets all the conditions described before. It's a `.haml` file and the matching string is wrapped in a string decorator `_()`.
1. Now that we found that match let's swap the text for `Update your project name, topics, description, compliance framework, and avatar.` and save the file. If you go back to your running GDK in your browser and you refresh the page, you should see the change reflected in the UI.
1. We have completed a change in the UI and it's time to wrap it up by doing some preparation tasks before opening an MR:

    - **Run the translation job in your Terminal**: This is a process that updates the translation files with your string changes. To do so, simply copy and paste this command in your Terminal: `bin/rake gettext:regenerate`. This will regenerate the `gitlab.pot` file mentioned before. Have in mind that this job can take several minutes and the terminal won't give you immediate feedback so just be patient.

    - **Add a changelog:** The changelog is a brief explanation of what the change is doing. The changelog is generated through an interactive command prompt that can be launched from the Terminal with the following command `bin/changelog 'Your changelog message'`. After entering this command simply follow the Terminal prompts.

1. Finally, we are ready to open an MR with this change against the main GitLab repo. Don't worry about this step. You won't break anything and your MR can be closed later without affecting anything in the main repo. To push your change you want to do two things:

   - Enter the following git command in your terminal:
     - `git add .`. This command will add the files that you just changed so they can be committed.
     - `git commit -m 'A meaningful message'`. This command will create a commit with your changes. It's very important that you comply with the commit message rules, otherwise your pipeline will fail. To comply with the rules make sure that your commit message it's a least three words but not more than 75 characters, the first letter needs to be capitalized and it can't end in period `.`.
     - `git push --set-upstream origin your-branch-name`. This command will create an upstream branch and push your changes against that remote branch. After the push is completed the terminal will show the MR url which you can open in a browser to finalize your change.

1. You're done! Just make sure that you add all the final details to your MR including a milestone and a [type label](/handbook/engineering/metrics/#data-classification)

## Caveats

### Strings that are tied to a test

The above example shows the process for a text string that doesn't have a test. Although many UI strings are not tied to any particular test (and therefore spec file modifications aren't needed), there are test assertions that check for UI text. Usually what those tests are doing is verifying for the existence of a particular UI component by reading the inner text of an element.

If you change a UI string that is tied to a test and you don't modify the text in the spec file, the test will fail since it cannot locate the string anymore.

You can find out if the text you're changing is tied to a test if it also shows up in your VS Code search results inside a `.spec.js` or `.spec.rb` file.

In general, you only need to swap the old text with the new one in the spec files to have a passing test. However there is a small number of cases where swapping a text may require some extra modification to the spec file but those are rare.

### Finding generic strings

The above example shows the process for a text string that is very specific. Very specific strings are easy to find and locate because it's likely that there's only one instance of that text in the whole app. But what about generic strings like the text inside some buttons, for example 'Expand'?

For those cases where you need to replace a generic string, you might have to do some logical thinking to identify the correct file and text instance.

One good strategy is to find a very specific text string near the generic string. If you search for the specific string you will likely find it in the template or component file that contains the other text. Once you have found that file you can perform a search scoped to the file by pressing `CMD + F` and searching for the generic string inside that file. Most likely any result inside that file is the correct reference to the text you're attempting to change. However, always verify that your change is indeed reflected by checking your live GDK environment.
