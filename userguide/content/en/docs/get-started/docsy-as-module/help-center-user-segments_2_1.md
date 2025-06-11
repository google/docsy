---
title: Help Center management user segments
description: Operations workflow page for Zendesk Help Center user segments
canonical_path: "/handbook/security/customer-support-operations/workflows/zendesk/help-center-user-segments"
---

{{% alert title="Note" color="primary" %}}

All Help Center user segments changes are handled via a standard deployment.

{{% /alert %}}

## Creating a Help Center user segment

For these, you will need to create a corresponding Help Center user segment file in the sync repo.

You should also do this in a way that creates a MR. Said MR should always be peer reviewed before merging (the MR should enforce this).

The exact nature of what you need to put into the YAML file will vary based on the issue's request.

Be sure to read [Working with sync repo files](../../docs/sync-repo-files) for more information.

## Editing a Help Center user segment

For these, you will need to locate the corresponding Help Center user segment file in the sync repo and make changes to it.

You should also do this in a way that creates a MR. Said MR should always be peer reviewed before merging (the MR should enforce this).

The exact nature of what you need to put into the YAML file will vary based on the issue's request.

Be sure to read [Working with sync repo files](../../docs/sync-repo-files) for more information.

## Exception deployment

To perform an exception deployment for Help Center user segments, navigate to the Help Center user segments project in question, go to the scheduled pipelines page, and click the play button. This will trigger a sync job for the Help Center management permissions.

## Repo links

- [Zendesk Global sync repo](https://gitlab.com/gitlab-support-readiness/zendesk-global/help-center-user-segments)
- [Zendesk US Government sync repo](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/help-center-user-segments)
