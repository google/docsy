---
title: Help Center user segments
description: Operations documentation page for Zendesk Help Center user segments
canonical_path: "/handbook/security/customer-support-operations/docs/zendesk/help-center-user-segments"
---

{{% alert title="Note" color="primary" %}}

This is an informational page for the Zendesk Help Center user segments. It may not reflect the way we actually manage Zendesk Help Center user segments.

If you are looking for information about maintaining Help Center user segments, please see [Help Center user segments workflow](../../workflows/zendesk/help-center-user-segments)

{{% /alert %}}

## What are Help Center user segments

As per [Zendesk](https://support.zendesk.com/hc/en-us/articles/4408837707290-Creating-user-segments-for-Guide-user-permissions):

> A user segment is a collection of end users and agents, defined by a specific set of attributes and used to determine access to help center content. User segments are the building blocks for both viewing and management user permissions.

## Creating a Help Center user segments

For information on creating a Help Center user segment, please see [Zendesk documentation](https://support.zendesk.com/hc/en-us/articles/4408837707290-Creating-user-segments-for-Guide-user-permissions#topic_tql_pjf_zz).

## How do we populate them

The custom user segments we use are populated using specific tags:

- `article_editor` - indicating one is an editor
- `article_publisher` - indicating one is a publisher

These are put onto an agent's Zendesk profile via the [Agent sync](./agents#agent-sync).
