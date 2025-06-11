---
title: Help Center management permissions
description: Operations workflow page for Zendesk Help Center management permissions
canonical_path: "/handbook/security/customer-support-operations/workflows/zendesk/help-center-management-permissions"
---

{{< alert title=Note color=primary >}}

All Help Center management permissions changes are handled via a standard deployment.

{{< /alert >}}

## Creating a Help Center management permission

For these, you will need to create a corresponding Help Center management permission file in the sync repo.

You should also do this in a way that creates a MR. Said MR should always be peer reviewed before merging (the MR should enforce this).

The exact nature of what you need to put into the YAML file will vary based on the issue's request.

Be sure to read [Working with sync repo files](../../docs/sync-repo-files) for more information.

## Editing a Help Center management permission

For these, you will need to locate the corresponding Help Center management permission file in the sync repo and make changes to it.

You should also do this in a way that creates a MR. Said MR should always be peer reviewed before merging (the MR should enforce this).

The exact nature of what you need to put into the YAML file will vary based on the issue's request.

Be sure to read [Working with sync repo files](../../docs/sync-repo-files) for more information.

## Exception deployment

To perform an exception deployment for Help Center management permissions, navigate to the Help Center management permissions project in question, go to the scheduled pipelines page, and click the play button. This will trigger a sync job for the Help Center management permissions.

## Repo links

- [Zendesk Global sync repo](https://gitlab.com/gitlab-support-readiness/zendesk-global/help-center-management-permissions)
- [Zendesk US Government sync repo](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/help-center-management-permissions)
