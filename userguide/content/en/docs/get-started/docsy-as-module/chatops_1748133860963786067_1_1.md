---
title: ChatOps Commands for GitLab.com
category: GitLab.com
description: "Guide for common ChatOps commands used by Support Engineering"
---

## Overview

[ChatOps](https://gitlab.com/gitlab-com/chatops/) commands can be used to service support requests for GitLab.com, especially useful when one does not have admin access. In the interest of maintaining a single source of truth, it is recommended to use the built-in "help" command within ChatOps to see what commands are available or [inspecting the code itself](https://gitlab.com/gitlab-com/chatops/-/tree/master/lib/chatops/commands).

**Note**: Before you can use ChatOps, you will need to [request access](https://docs.gitlab.com/development/chatops_on_gitlabcom/#requesting-access).

## Namespace

Uses the GitLab API for managing namespaces.

`/chatops run namespace --help`

> **Note:**
If you are attempting to search for a sub-group and not a top level group, you'll need to ensure the slash `/` is encoded to `%2F`. For example, the path of the sub-group `gitlab-com/support` should be entered as `gitlab-com%2Fsupport`.

### Setting minutes quota for a namespace

`/chatops run namespace minutes cutecat 10000`

The number you use should be the total that `extra_shared_runners_minutes_limit` should be when you are done. For example, if the value of `extra_shared_runners_minutes_limit` is 1,337 and you want to add 1,000 additional minutes for the namespace `cutecat`, you want the value of `extra_shared_runners_minutes_limit` to be 2,337 when you are done. The command would look like this:

`/chatops run namespace minutes cutecat 2337`

## User

Uses the GitLab API for managing users.

`/chatops run user --help`

## Feature Flags

- Used for checking whether a specific feature flag has been enabled on GitLab.com or not.
- Used for enabling a feature flag on a project or a group.

`/chatops run feature --help`
