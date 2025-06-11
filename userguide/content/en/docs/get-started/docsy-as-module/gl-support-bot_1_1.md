---
title: gl-support-bot
description: Operations documentation page for gl-support-bot
canonical_path: "/handbook/security/customer-support-operations/docs/gitlab/gl-support-bot"
---

## What is gl-support-bot used for?

For many of our scripts and automations, we use tokens owned by the [gl-support-bot](https://gitlab.com/gl-support-bot) user. This is to ensure our automations are not tied to a specific human user and run consistently.

## List of usage

For scalability reasons, we cannot list all tokens available. Please log in as the user and review them via the [Personal Access Tokens](https://gitlab.com/-/user_settings/personal_access_tokens) page.

## Requesting a token

{{% alert title="Note" color="danger" %}}

This bot account has access to a lot of data. Unless being used in the standard methods we utilize, you should consider using an alternative source (such as service accounts).

{{% /alert %}}

To request the token, file an [acccess request](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=API_Token_Request).

For the issue, the `Service Name` is `gl-support-bot`

Please assign the issue to Jason Colyer and Lyle Kozloff at this time.
