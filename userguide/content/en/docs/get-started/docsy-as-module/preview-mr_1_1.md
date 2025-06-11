---
title: Merge Request Reviews
description: "Guidelines for Product Designers when reviewing merge requests."
---

## Overview

This page outlines detailed guidelines for different ways of reviewing merge requests (MRs) for “UX reviews” or “Product Design MR reviews”. For step by step guidance of the full process go to the [Product Design MR reviews page](/handbook/product/ux/product-designer/mr-reviews).

## Review, test, and contribute

There are several methods for you to review, test, and contribute changes to the app, user documentation, Pajamas, GitLab UI or company handbook.

We [encourage MR authors to add screenshots or videos](https://docs.gitlab.com/ee/development/contributing/merge_request_workflow.html)
of their changes. However as they don’t cover all review aspects (for example, hover states, small viewports, accessibility, and so on.), you cannot rely on them exclusively and should always review the MR in a live environment.

The most common methods to review the MR in a live environment are:

- **Gitpod** ([Get started](#gitpod) and [Help](#help)): Pre-configured cloud environment that quickly provides a clean and immediately usable app, by just clicking on a link. Can be used to run GitLab instances (using GDK, see below), user documentation, Pajamas, or company handbook.
- **GitLab Development Kit (GDK)** ([Get started](#gdk) and [Help](#help)): It's how we install and maintain GitLab instances on our local machines. However, some technical knowledge is needed, its speed depends on your local machine, and it’s quite easy for the GDK to become “broken” when it's updated.
- **Review Apps** ([Get started](#review-apps)): Unique links specifically created for each MR to preview their changes. Ideal for documentation changes (Pajamas or company handbook). Unfortunately, previewing a GitLab instance is very limited compared to other methods ([improvements epic](https://gitlab.com/groups/gitlab-org/-/epics/6660)).
- **Sync with author**: Although we have a [bias towards asynchronous communication](/handbook/values/#bias-towards-asynchronous-communication), sometimes it's more productive to have a one-on-one sync with the MR author. Can be especially helpful if changes are hard to test or reproduce.

{{% details summary="Comparison table to choose most appropriate method" %}}

| | Gitpod (cloud) | GDK (local) | Review App | Sync with author |
|------|------|------|------|------|
| First start* | 🏃‍♀️ Fast (<5 min) | 🐢 Very slow (30+ min) | GitLab (>30 min)<br>Docs (>20 min)<br>Pajamas (~10 min)<br>Handbook (~10 min)| 🏃‍♀️ Fast (few mins) |
| Restarts | 🏃‍♀️ Fast (<2 min) | 🤷 Depends<sup>†</sup> | 🚀 Very fast (secs) | 🏃‍♀️ Fast (few mins) |
| Make changes | ✅ | ✅ | ❌ | ✅ |
| Preview/test | ✅ | ✅ | ✅ | ✅ |
| Save state<sup>§</sup>| ✅ | ✅ | ✅ | N/A |
| Toggle feature flags | ✅ | ✅ | ✅ | ✅ |
| Test data<sup>¶</sup> | ✅ | ✅ | ✅ | N/A |

*: The time needed to preview changes for the first time. Depending on the
method it includes steps like installation, build, deployment, etc.<br>
<sup>†</sup>: When using a local GDK, the time it takes to restart it depends
heavily on your local machine specifications.<br>
<sup>§</sup>: Ability to save the current environment state, including its data,
license information, feature flags (if applicable), etc.<br>
<sup>¶</sup>: Only applicable for GitLab instances. Test data includes
pre-created users, projects, branches, issues, merge requests, epics, etc.

{{% /details %}}

### Contributing

GitLab is a complex platform that helps teams shorten cycle times, reduce costs, stregthen security, and increase developer productivity. In order to make the DevOps lifecycle more approachable for all users, it is essential that each member of the Product Design department has general knowledge of Git and DevOps flows by frequently using the various features across the product.

The Product Design department builds confidence in these areas by using the product in a live environment and contributing small fixes to the various projects that make up GitLab, including the app, user documentation, Pajamas, and GitLab UI. Designers are not expected to be full stack developers, but we do expect designers to grow their basic development skills to build empathy and understanding for the workflows our users experience on a daily basis.

Additionally, building these skills has the added benefit of empowering designers to directly make small, meaningful changes to the product. Migrating components or updating UI copy, for example, improves the consistency, visual design, and accessibility of the app.

#### Gitpod

To use Gitpod you must create a Gitpod account (free) and connect it to your GitLab
account. If you launch Gitpod from any project on GitLab.com your accounts are
automatically connected (see links below). If for some reason that doesn't work,
see [how to manually connect your GitLab.com account](https://www.gitpod.io/docs/gitlab-integration#connecting-your-gitlab.com-account).

- [Use Gitpod for any project](https://docs.gitlab.com/ee/integration/gitpod.html#launch-gitpod-in-gitlab)
- [Use Gitpod for the GitLab project](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/gitpod.md) (i.e. cloud GDK)
- [📺 Video: Get started with Gitpod for GitLab](https://www.youtube.com/watch?v=AOn7orCcTx8&list=PL05JrBw4t0KqrLsB8wlEhl2F9hXZlMmNR&index=13)
- [📺 Video: Review MRs with local GDK or Gitpod](https://www.youtube.com/watch?v=M7b19Dq-1tw&list=PL05JrBw4t0KqrLsB8wlEhl2F9hXZlMmNR&index=11)
- [GDK commands](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/gdk_commands.md) (start, stop, update, etc.)
- [Preview or make changes to GitLab](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/preview_gitlab_changes.md)
- [Preview or make changes to GitLab documentation](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/gitlab_docs.md)
- [Apply a GitLab license to use GitLab Enterprise features](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/index.md#use-gitlab-enterprise-features)
- [Configure additional GitLab features](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/gitpod.md#configure-additional-features) (runners, feature flags, advanced search, etc.)
- [More how-to topics for GDK](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/index.md)
- [Check out branches](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/gitpod.md#check-out-branches)
- [Commit and push changes](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/gitpod.md#commit-and-push-changes)
- [Prevent auto-deleting workspaces](https://www.gitpod.io/docs/life-of-workspace#garbage-collection)
- [Gitpod official documentation](https://www.gitpod.io/docs)

#### GDK

- [Install GDK with one-line command](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/index.md#one-line-installation)
- [📺 Video: Review MRs with local GDK or Gitpod](https://www.youtube.com/watch?v=M7b19Dq-1tw&list=PL05JrBw4t0KqrLsB8wlEhl2F9hXZlMmNR&index=11)
- [Browse your development GitLab server](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/browse.md)
- [GDK commands](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/gdk_commands.md) (start, stop, update, etc.)
- [Preview or make changes to GitLab](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/preview_gitlab_changes.md)
- [Preview or make changes to GitLab documentation](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/gitlab_docs.md)
- [Apply a GitLab license to use GitLab Enterprise features](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/index.md#use-gitlab-enterprise-features)
- [Toggle feature flags](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/preview_gitlab_changes.md#enable-or-disable-gitlab-feature-flags)
- [More how-to topics for GDK](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/index.md)

#### Review Apps

- [Use Review Apps in MRs](https://docs.gitlab.com/ee/ci/review_apps/#how-review-apps-work)
- [Log into GitLab instance Review Apps](https://docs.gitlab.com/ee/development/testing_guide/review_apps.html#log-into-my-review-app)
- [Prevent auto-stopping Review Apps](https://docs.gitlab.com/ee/development/testing_guide/review_apps.html#auto-stopping-of-review-apps)
- [How to enable Feature Flags in Review Apps](https://www.youtube.com/watch?v=VBo667LiwBQ)

You can enable a feature flag by sending an API request to the review app using a tool such as `curl` or [Postman](https://www.postman.com).

### Help

If you get stuck using any of these methods, follow the tips below in order. Don't
struggle on your own and, when in doubt, ping a UX member to facilitate finding
the right help.

1. If using GDK (locally or in Gitpod), first try to [troubleshoot it yourself](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/troubleshooting.md),
   but don't hesitate to reach out for help (see points below) when you're unsure
   about the problem.
1. **Gitpod**
    1. Ask for help in the `#gitpod-gdk` Slack channel.
    1. Reach out to a UX help volunteer: [Marcel van Remmerden](/handbook/company/team/#mvanremmerden)
  (add yourself!)
1. **GDK**
    1. Review the [getting help](https://gitlab.com/gitlab-org/gitlab-development-kit#getting-help).
    1. Ask for help in the `#gdk` Slack channel.
    1. Reach out to a UX help volunteer: [Taurie Davis](/handbook/company/team/#tauriedavis), [Sunjung Park](/handbook/company/team/#sunjungp)
    (add yourself!)
