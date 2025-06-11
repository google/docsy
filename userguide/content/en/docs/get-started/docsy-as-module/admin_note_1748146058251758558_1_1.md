---
title: Use of Admin Notes
category: GitLab.com
subcategory: Accounts
description: "Workflow for when and how to add admin notes to a GitLab.com account"
---

### Overview

The admin note serves as a quick reference for any account changes or action performed on a GitLab.com namespace. For example, it also helps to determine if the user was previously flagged for any violations to prevent any further abuse.

If you encounter a situation with the following cases, an admin note is required.

- User requested change
- Compute minutes reset
- Legal case
- Security or Abuse case

### Adding the Note

Adding an admin note can be done using one of the following methods:

1. Admin account
1. Navigate to the admin page for the user (`/admin/users/username`) or top-level group (`admin/groups/namespace_path`)
1. Click `Edit`
1. Add the relevant admin note
1. Click `Save` when done
1. ChatOps (only available for users):
1. Find the user to confirm it's the proper account: `/chatops run user find <username or current email>`
1. Add the admin note: `/chatops run user note <username or current email> 'admin note here'`

In general, the formatting should be standard in a one liner format:

- Violation: `Date | Note | Case | Link`
- Action Taken: `Date | Note | Link`

Slack conversations or issue links may be used for the link if no ticket is lodged for the type of request.

#### Viewing the Notes

There are two methods a team member can use to look up admin notes for a particular user:

1. If the team member has admin privileges, they can navigate to the admin page for the relevant namespace where the admin note will be present.
1. (Users only) Team members can use ChatOps to read admin notes for a particular user via the following command in a Slack channel where the chatops bot has been invited
   > `/chatops run user find <username or email>`

#### Sample Notes

Disabling 2FA:
`2025-01-16 | 2FA removed | user requested | https://gitlab.zendesk.com/agent/tickets/123`

Email Address Change/Removal:
`2025-01-16 | Primary Email Change - No Access | User Requested | https://gitlab.zendesk.com/agent/tickets/123`

DMCA Request:
`2025-01-16 | DMCA Violation | Abuse | https://gitlab.zendesk.com/agent/tickets/123`

Abuse Case:
`2025-01-16 | Flagged for terms violation |  Abuse Case | https://gitlab.zendesk.com/agent/tickets/123`

User Blocked:
`2025-01-16 | User blocked by infra | https://gitlab.com/gitlab-com/support/internal-requests/issues/441`

Name Squatting Rename:
`2025-01-16 | Name Squatting Request | https://gitlab.zendesk.com/agent/tickets/123`

Compute minutes reset:
`2025-01-16 | Compute minutes reset | Bug | https://gitlab.zendesk.com/agent/tickets/123`
