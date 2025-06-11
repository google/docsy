---
title: Ruby gems
description: Operations workflows page for ruby gems
canonical_path: "/handbook/security/customer-support-operations/workflows/ruby-gems/"
---

{{% pageinfo color="info" %}}

This is generalized workflow information for the ruby gems we develop. If a specific gem has special workflows, a dedicated page will be made for it.

{{% /pageinfo %}}

{{% alert title="Note" color="danger" %}}

Gem changes are classified as ad-hoc. Once changes are made to the repo and the new version of the gem is pushed, they will be used moving forward.

This can mean changes can cause severe problems if you have not thoroughly tested them.

{{% /alert %}}

## Making changes

{{% alert title="Note" color="danger" %}}

Always, always, ALWAYS perform thorough and complete testing for gem changes.

{{% /alert %}}

Making the changes would be done by modifying the files within the project. You should also do this in a way that creates a MR. Said MR should always be peer reviewed before merging (the MR should enforce this).

Once the MR is merged, you need to push the gem. This is done by navigating to the repo on your local computer, updating the repo, building the gem, and pushing the new version. It would look something like this (keep in mind your version number will likely differ):

```bash
cd ~/dev/gitlab-support-readiness/gitlab_support_readiness_gem
git pull
gem build ./gitlab_support_readiness.gemspec
gem push gitlab_support_readiness-1.0.130.gem
```
