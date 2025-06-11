---
title: Investigate Commits
description: "Workflow to determine the cause of commits on gitlab.com attributed to incorrect or unknown emails"
category: GitLab.com
subcategory: Security
---

## Overview

Users occasionally write in to say that there is a commit from the incorrect or an unknown user or email.

It is part of Support's responsibility to determine whether this is due to a misconfiguration (which is common) or a true security incident.

## Finding the commit user

For more information on using Kibana in general, please see [500 errors workflow](/handbook/support/workflows/500_errors/).

To find the user who made the commit:

1. Open sidekiq logs.
1. Search for the commit SHA.
1. Optionally add project path as `json.meta.project`.
1. Look for an entry with an `insertId` and the SHA under `json.args`.
1. The `json.meta.user` indicates the GitLab username that pushed the commit.

If logs are unavailable in Kibana (older than 7 days), try searching the project's activity page for the SHA. If that doesn't work, post in Slack #security for assistance.

## Check Authorization

Based on the search results, check to see if the user is authorized to have access to the project.

If yes, then respond to customer clarifying which user made the commit and for the user to double check their `gitconfig` name and email address.

If not, then open a [secops issue](https://gitlab.com/gitlab-com/gl-security/secops/operations/-/issues) for further investigation.
