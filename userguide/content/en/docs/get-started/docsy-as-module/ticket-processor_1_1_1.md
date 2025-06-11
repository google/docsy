---
title: Ticket Processor
description: Operations documentation page for ticket processor
canonical_path: "/handbook/security/customer-support-operations/docs/zendesk/ticket-processor"
---

{{% alert title="Note" color="primary" %}}

This is an informational page for the ticket processor. It may not reflect the way we actually manage the ticket processor

If you are looking for information about managing it, please see [Ticket processor workflow](../../workflows/zendesk/ticket-processor)

{{% /alert %}}

## What is the ticket processor

The ticket processor is a group of scripts we store on gitlab.com that are activated via CI/CD pipeline triggers. They can do various custom acts on a ticket.

## Zendesk Global

[Source project](https://gitlab.com/gitlab-support-readiness/zendesk-global/tickets/processor)

### 2FA Removal

<sup>Introduced via [gitlab-com/support/support-team-meta#6663](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/6663)</sup>

This checks the request itself to determine the eligiblity status. Depending on the determination, it adds a tag to the ticket (which will fire a corresponding Zendesk trigger).

- If the request is to remove the requester's 2FA:
  - The user has support entitlement for the request
    - The tag `2fa_challenge_questions` is added, which causes the trigger [Post 2FA challenge questions](https://gitlab.com/gitlab-com/support/zendesk-global/triggers/-/blob/master/2FA/Post%202FA%20challenge%20questions.md?ref_type=heads) to fire
  - The user does not have support entitlement for the request
    - The tag `2fa_user_not_entitled` is added, which causes the trigger [Close 2FA ticket due to user not entitled](https://gitlab.com/gitlab-com/support/zendesk-global/triggers/-/blob/master/2FA/Close%202FA%20ticket%20due%20to%20user%20not%20entitled.md?ref_type=heads) to fire
- If the request is to remove another user's 2FA:
  - Checks the following criteria
    - Does the requester have support entitlement for the request?
    - Is the domain of the requester's email an exact match for the domain of the target's email?
    - Does the requester have a gitlab.com account?
    - Does the target have a gitlab.com account?
    - Is the requester an `Owner` on a top-level paid namespace?
    - Is the target a member under the top-level paid namespace?
  - If it passed all checks:
    - The tag `2fa_snippet_verification` is added, which causes the trigger [Post 2FA snippet verification](https://gitlab.com/gitlab-com/support/zendesk-global/triggers/-/blob/master/2FA/Post%202FA%20snippet%20verification.md?ref_type=heads) to fire
  - If it fails any checks:
    - The tag `2fa_owner_not_entitled` is added, which causes the trigger [Close 2FA ticket due to owner not entitled](https://gitlab.com/gitlab-com/support/zendesk-global/triggers/-/blob/master/2FA/Close%202FA%20ticket%20due%20to%20owner%20not%20entitled.md?ref_type=heads) to fire

### Account blocked

<sup>Introduced via [gitlab-com/support/support-ops/zendesk-global/trigger!264](https://gitlab.com/gitlab-com/support/support-ops/zendesk-global/triggers/-/merge_requests/264)</sup>

This checks the account status of a gitlab.com user. Depending on the status, different actions can occur:

- If the user does not exist...
  - A public reply is sent to the user stating the account does not exist
  - The `Ticket Stage` value is set to `FRT`
  - The ticket's status is set to `Pending`
- If the user is not blocked...
  - A public reply is sent to the user stating the account is not actually blocked
  - The `Ticket Stage` value is set to `FRT`
  - The ticket's status is set to `Pending`
- If the user is blocked due to embargo policies...
  - A public reply is sent to the user stating they were blocked due to embargo policies. It also tells them the next steps to resolve that.
  - The `Ticket Stage` value is set to `FRT`
  - The ticket's status is set to `Solved`
- If the user is blocked (but not due to embargo policies)...
  - An issue is made within the [T&S account reinstatement project](https://gitlab.com/gitlab-com/gl-security/security-operations/trust-and-safety/TS_Operations/account-reinstatements)
  - An internal reply made on the ticket pointing the SE to the next steps to follow

### Account locked

<sup>Introduced via [gitlab-com/support/support-ops/zendesk-global/trigger!264](https://gitlab.com/gitlab-com/support/support-ops/zendesk-global/triggers/-/merge_requests/264)</sup>

This checks if an email suppression exists within Mailgun. Depending on the results of the check, different actions can occur:

- If a suppression exists...
  - The located suppressions in Mailgun are deleted
  - An internal reply made on the ticket stating that a suppression was found and removed, including the code, error, and timestamp of said suppression
  - A public reply is sent to the user stating a suppression was found, removed, and what next steps the user should take.
  - The ticket's status is set to `Solved`
- If a suppression does not exist...
  - A public reply is sent to the user stating we did not locate any suppressions and what next steps they can take. policies. It also tells them the next steps to resolve that.
  - The `Ticket Stage` value is set to `FRT`
  - The ticket's status is set to `Pending`

### CMP Creation

<sup>Introduced via [gitlab-com/support/support-ops/support-ops-project#2542](https://gitlab.com/gitlab-com/support/support-ops/support-ops-project/-/issues/2542)</sup>

This creates a contact management project for the ticket.

### Code Request for Advanced SAST

<sup>Introduced via [gitlab-com/support/support-team-meta#6652](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/6652)</sup>

This helps agents work code request for Advanced SAST.

### Email Supressions

<sup>Introduced via [gitlab-com/support/support-ops/zendesk-global/trigger!264](https://gitlab.com/gitlab-com/support/support-ops/zendesk-global/triggers/-/merge_requests/264)</sup>

This checks if an email suppression exists within Mailgun. Depending on the results of the check, different actions can occur:

- If a suppression exists...
  - The located suppressions in Mailgun are deleted
  - An internal reply made on the ticket stating that a suppression was found and removed, including the code, error, and timestamp of said suppression
  - A public reply is sent to the user stating a suppression was found, removed, and what next steps the user should take.
  - The ticket's status is set to `Solved`
- If a suppression does not exist...
  - A public reply is sent to the user stating we did not locate any suppressions and what next steps they can take. policies. It also tells them the next steps to resolve that.
  - The `Ticket Stage` value is set to `FRT`
  - The ticket's status is set to `Pending`

### Link Tagger

<sup>Introduced via [gitlab-com/support/support-ops/support-ops-project#998](https://gitlab.com/gitlab-com/support/support-ops/support-ops-project/-/issues/998)</sup>

This checks the passed comment (public and made be an agent) for the various types of items we would want to tag on the ticket. The current kinds of items (and the tag added based on them) are as follows:

- Contains a gitlab.com issue link
  - `gitlab_issue_link` tag is added
  - `CUSTOMPATH_issues_IID` tag is added
    - `CUSTOMPATH` is the project's slug, `IID` is the issue ID
    - Example: a link to issue 5 on project jcolyer/most_amazing_project_ever would be: `jcolyer_most_amazing_project_ever_issues_5`
  - `issue~CUSTOMPATH_IID`
    - `CUSTOMPATH` is the project's slug, `IID` is the issue ID
    - Example: a link to issue 5 on project jcolyer/most_amazing_project_ever would be: `issue~jcolyer_most_amazing_project_ever_issues_5`
  - `issue_PROJECTID_IID`
    - `PROJECTID` is the project's ID, `IID` is the issue ID
    - Example: a link to issue 5 on project jcolyer/most_amazing_project_ever (project ID 123) would be: `issue_123_5`
- Contains a gitlab.com merge request link
  - `gitlab_merge_request_link` tag is added
  - `CUSTOM_PATH_merge_requests_IID` tag is added
    - - `CUSTOMPATH` is the project's slug, `IID` is the merge request ID
    - Example: a link to merge request 27 on project jcolyer/most_amazing_project_ever would be: `jcolyer_most_amazing_project_ever_merge_requests_27`
  - `mergerequest~CUSTOMPATH_IID`
    - `CUSTOMPATH` is the project's slug, `IID` is the issue ID
    - Example: a link to merge request 27 on project jcolyer/most_amazing_project_ever would be: `mergerequest~jcolyer_most_amazing_project_ever_issues_27`
  - `mergerequest_PROJECTID_IID`
    - `PROJECTID` is the project's ID, `IID` is the imerge request ID
    - Example: a link to merge request 27 on project jcolyer/most_amazing_project_ever (project ID 123) would be: `mergerequest_123_27`
- Contains a docs.gitlab.com link
  - `docs_link` tag is added
- Contains a handbook.gitlab.com link
  - `hb_link` tag is added
- Contains a KB article link
  - `kb_link` tag is added
- Contains text that indicates the agent offered a call
  - `agent_offered_call` tag is added
  - Search terms used:
    - `calendly.com`
    - `gitlab.zoom.us`
    - `gitlabmtgs.webex.com`
    - `teams.microsoft.com`

### Namesquatting

<sup>Introduced via [gitlab-com/support/support-ops/zendesk-global/trigger!264](https://gitlab.com/gitlab-com/support/support-ops/zendesk-global/triggers/-/merge_requests/264)</sup>

This checks if a given namespace is eligible for release based on our various criteria. The result of the check will determine what acctions occur:

- If the requester is a free user...
  - A public reply is sent to the user stating these requests are only eligible for paying customers.
  - The `Ticket Stage` value is set to `FRT`
- If the namespace is invalid...
  - A public reply is sent to the user stating we could not locate the namespace in question.
  - The `Ticket Stage` value is set to `FRT`
- If the namespace is not eligible...
  - A public reply is sent to the user stating the namespace is not eligible for release at this time.
  - The `Ticket Stage` value is set to `FRT`
- If the namespace *may* be eligible...
  - An internal reply made on the ticket stating that the namespace can only be released after contacting the namespace's current owners. It lists the found email addresses of the owners.
  - The `Ticket Stage` value is set to `FRT`
- If the namespace **is** eligible...
  - An internal reply made on the ticket stating that the namespace is eligible for immediate release.
  - The `Ticket Stage` value is set to `FRT`

### Organization Notes

<sup>Introduced via [gitlab-com/support/support-ops/zendesk-global/trigger!264](https://gitlab.com/gitlab-com/support/support-ops/zendesk-global/triggers/-/merge_requests/264)</sup>

This adds internal notes on a ticket based off information derived from the organization the requester of the ticket is a member of. This has the potential to make 3 different internal notes:

- One derived from organization notes that can contain...
  - A message about the organization being in an escalated state
  - Partner troubleshooting information
  - General organization information
  - Any recent emergency tickets filed under the organization
  - If the organization has a collaboration project
  - If the organization is using a contact management project
  - Support Operations notes (derived from the Notes/Details fields on the corganization itself in Zendesk)
  - Support notes (derived from the [Zendesk Global Organizations project](https://gitlab.com/gitlab-com/support/zendesk-global/organizations))
- One detailing the organization's support entitlement and grace period information
  - Only if the organization is expired or a priority prospect
- One about the organization being GitLab Dedicated

If a Support notes file does not exist, this will also create one for the organization.

### STAR

<sup>Introduced via [gitlab-com/support/support-ops/support-ops-project#957](https://gitlab.com/gitlab-com/support/support-ops/support-ops-project/-/issues/957)</sup>

This adds the ticket tag `star_submitted` onto the ticket.

### Weighting

<sup>Introduced via [gitlab-com/support/support-team-meta#5134](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/5134)</sup>

This determines the ticket's "weight" based on specific criteria and adds its value to the ticket.

## Zendesk US Government

[Source project](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/tickets/processor)

### Code Request for Advanced SAST

<sup>Introduced via [gitlab-com/support/support-team-meta#6652](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/6652)</sup>

This helps agents work code request for Advanced SAST.

### Organization Notes

<sup>Introduced via [gitlab-support-readiness/zendesk-us-government/triggers@c573f55c](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/triggers/-/commit/c573f55c1f4bc241c49567e56f409e7d593692cd)</sup>

This adds internal notes on a ticket based off information derived from the organization the requester of the ticket is a member of. This has the potential to make 3 different internal notes:

- One derived from organization notes that can contain...
  - General organization information
  - Any recent emergency tickets filed under the organization
  - If the organization has a collaboration project
  - Support Operations notes (derived from the Notes/Details fields on the organization itself in Zendesk)
- One detailing the organization's support entitlement and grace period information
  - Only if the organization is expired
- One about the organization being GitLab Dedicated
