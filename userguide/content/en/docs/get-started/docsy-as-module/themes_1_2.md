---
title: Themes
description: Operations workflow page for Zendesk themes
canonical_path: "/handbook/security/customer-support-operations/workflows/zendesk/themes"
---

{{% alert title="Note" color="primary" %}}

All theme changes are handled via a standard deployment.

{{% /alert %}}

{{% alert title="Note" color="danger" %}}

Never directly modify themes in theh Zendesk UI in any instance (sandbox or production). You will severely break the entire setup if you do (and it is not easy to fix).

{{% /alert %}}

## Modifying the theme

{{% alert title="Note" color="danger" %}}

This is a very customer facing project. Exercise caution in making changes and ensure you thoroughly reiew a preview of the changes in the sandbox.

{{% /alert %}}

This is done via merge requests to the theme projects.

You should also do this in a way that creates a MR. Said MR should always be peer reviewed before merging (the MR should enforce this).

The process will generate a preview theme for you to review the changes it will make in the UI (for the corresponding sandbox instance). Upon merge, this preview theme will be removed.

## Exception deployment

To perform an exception deployment for the theme, navigate to the theme project in question, go to the scheduled pipelines page, and click the play button. This will trigger a sync job for the theme.

## Repo links

- [Zendesk Global sync repo](https://gitlab.com/gitlab-support-readiness/zendesk-global/theme)
- [Zendesk US Government sync repo](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/theme)
