---
title: "Git Guide for Blog Contributors"
description: "A guide for working with Git, terminal, and the www-gitlab-com repository"
---

## General Tips

Please note that this guide assumes some knowledge of how to use GitLab, and how to use Git on your local machine. If you're unsure of what something means, you may need to go and review [GitLab 101](/handbook/people-group/learning-and-development/gitlab-101/) or [Editing the handbook](/handbook/about/editing-handbook/#editing-the-handbook), which explains how to set up your computer to edit the website locally.

### Make sure your Terminal is up to date

When you sign on for the day, try to do a `git pull origin master` in the terminal so that you have the most recent files and changes from others locally on your computer – this will avoid merge conflicts and overwriting files.
When you do this, make sure you are in the right directory, (e.g. MacBook-Pro:www-gitlab-com user$).

Throughout the day you can also run `git pull` to get the most recent changes locally.

### Committing Changes and Pushing Changes

Committing changes is like saving to your computer. You edit a blog post file, or add a new one, then commit it to save it. Pushing changes is like uploading those changes to a shared directory (such as Google Drive). This means that other team members will be able to see your changes in your MR on GitLab.com.

To start, make sure you're on the correct feature branch with `git checkout 0000-branch-name`[enter] in terminal.

#### Add, change, update files in the repository

In Terminal → run `git status` [enter] to see all of the files you've modified. `Git add .` [enter] will stage all of these files (and any you created) for a commit.

Next we need to add a commit message with `git commit -m "[descriptive message goes here]"` [enter].

Now we're ready to push your local changes to `0000-branch-name` using `git push origin 0000-branch-name` [enter].

#### Commit Early and Often

Commit early and often. Avoid working on multiple large files and then committing and pushing the files all at once (it can take several minutes, or even hours, to push depending on your internet connection – worst case it times out).
Run `git pull` [enter] on occasion to make sure you have the most recent changes / updates locally.

### Static Site Editor Developer Tips

There is a handy resource the Static Site Editor group has put together for [Git Tips here](/handbook/engineering/development/dev/create/remote-development/developer-cheatsheet/#git-tips).

## Getting Recent Changes From Main

### How and When to Use Merge Workflow

Use a merge workflow for feature branches where MULTIPLE PEOPLE ARE WORKING ON THEM. Use the built-in [squash and merge](https://docs.gitlab.com/ee/user/project/merge_requests/squash_and_merge.html) functionality when merging an MR to ensure only clean, atomic, squashed commits make it to master.

```console
git checkout 0000-branch-name
git fetch
git merge origin/master
git push origin  0000-branch-name
```

### What is Rebasing and Why Should I Care?

If you are working on a merge request for some time and have committed a lot of changes, you may need to rebase (i.e. update) your MR to reflect any changes that other people may have made to the main branch of the website. This helps to prevent [merge conflicts](#how-to-resolve-merge-conflicts) (where someone else's change conflicts with your change, and Git doesn't know which change to accept) or pipeline failures because of technical changes that aren't reflected in your outdated MR.

To rebase, run these commands in the terminal:

```console
git checkout 0000-branch-name
git fetch
git rebase origin/master
git push origin  0000-branch-name
```

## How to Resolve Merge Conflicts

### Official GitLab Documentation

Here is the [official documentation on merge request conflict resolution](https://docs.gitlab.com/ee/user/project/merge_requests/conflicts.html) in GitLab.

Here's a great blog post on [resolving merge conflicts from the GitLab UI](https://about.gitlab.com/blog/2016/09/06/resolving-merge-conflicts-from-the-gitlab-ui/).

### Merge conflicts if you haven't made any changes to your local branch

If you have not made any changes to your local branch and are getting a conflict message from origin, just reset your local branch to be exactly like origin. WARNING: If you have made changes to your blog post, those changes will be lost!

```console
git fetch
git checkout 0000-branch-name
git reset -hard  origin/0000-branch-name
```

## Help with Git

### Slack Channels

If you're having problems with Git, reach out in the following Slack channels =)

- [#git-help](https://app.slack.com/client/T02592416/C1E21S2LD)
- [#mr-buddies](https://app.slack.com/client/T02592416/CLM8K5LF4)

### Existing Resources

Here are some existing resources from GitLab for Git.

- [Developer Cheatsheet, Engineering Handbook](/handbook/engineering/development/dev/create/remote-development/developer-cheatsheet/)
- [Git Cheat Sheet for Press](https://about.gitlab.com/images/press/git-cheat-sheet.pdf)
