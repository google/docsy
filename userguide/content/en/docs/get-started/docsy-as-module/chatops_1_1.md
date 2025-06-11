---
title: ChatOps Commands for GitLab.com
category: GitLab.com
description: "Guide for common ChatOps commands used by Support Engineering"
---

## Overview

[ChatOps](https://gitlab.com/gitlab-com/chatops/) commands can be used to service support requests for GitLab.com, especially useful when one does not have admin access. In the interest of maintaining a single source of truth, it is recommended to use the built-in "help" command within ChatOps to see what commands are available or [inspecting the code itself](https://gitlab.com/gitlab-com/chatops/-/tree/master/lib/chatops/commands).

**Note**: Before you can use ChatOps, you will need to [request access](https://docs.gitlab.com/ee/development/chatops_on_gitlabcom.html#requesting-access).

## Namespace

Uses the GitLab API for managing namespaces.

`/chatops run namespace --help`

> **Note:**
If you are attempting to search for a sub-group and not a top level group, you'll need to ensure the slash `/` is encoded to `%2F`. For example, the path of the sub-group `gitlab-com/support` should be entered as `gitlab-com%2Fsupport`.

## User

Uses the GitLab API for managing users.

`/chatops run user --help`

## Feature Flags

- Used for checking whether a specific feature flag has been enabled on GitLab.com or not.
- Used for enabling a feature flag on a project or a group.

`/chatops run feature --help`
