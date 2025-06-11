---
title: GitLab.com custom limits
category: GitLab.com
description: "Provides a general overview of some of the limits applied exclusively to GitLab.com (SaaS)"
---

## Overview

[Infrastructure team](/handbook/engineering/infrastructure/) is responsible for driving the evolution of GitLab.com. They control and monitor our biggest GitLab instance.

GitLab.com has certain customizations specific to it. These customization are  managed through the [chef-repo](https://gitlab.com/gitlab-com/gl-infra/chef-repo)(internal).

## Limits applied to GitLab.com

These limits are subject to change without prior notice.

For Gitaly nodes, specific limits can be found under `default_attributes` => `omnibus-gitlab` => `gitlab_rb` => `gitaly` => `concurrency` for the different environments:

<!-- vale handbook.Repetition = NO -->
- [For production production](https://gitlab.com/gitlab-com/gl-infra/chef-repo/-/blob/master/roles/gprd-base-stor-gitaly-common.json)
- [For canary production](https://gitlab.com/gitlab-com/gl-infra/chef-repo/-/blob/master/roles/gprd-base-stor-gitaly-cny.json)
- [For main stage](https://gitlab.com/gitlab-com/gl-infra/chef-repo/-/blob/master/roles/gprd-base-stor-gitaly.json)
<!-- vale handbook.Repetition = YES -->
