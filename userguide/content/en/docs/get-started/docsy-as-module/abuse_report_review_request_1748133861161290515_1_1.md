---
title: Abuse Report Review Request
category: GitLab.com
subcategory: Security
description: How to request a review of an Abuse Report
---

This workflow is to request a review of an Abuse Report.  All blocked accounts should have an admin note with a link to a relevant issue.

## Process

1. If the account request for a review on an Abuse Report, create an `Abuse_Report_Review_Request` issue in the Trust and Safety [Operations Issue Tracker](/handbook/security/security-operations/trustandsafety/)
    - The [(GitLab user lookup app](/handbook/security/customer-support-operations/docs/zendesk/apps#gitlab-super-app) in Zendesk will show the admin notes for the user if they have contacted support using the email address associated with their account.  Alternatively -
    - If you have access to ChatOps you can use the below command in any chatops enabled Slack channel to read admin notes for the user
        > `/chatops run user find <username or email>`
1. If the Abuse Report Review Request is related to the abusive activity,
    - If the request does not have links to the specific commit, audit event, user action etc, request more information using the [Need_More_Information](https://gitlab.com/gitlab-com/gl-security/security-operations/trust-and-safety/operations/-/tree/master/Blurbs/Need_More_Information) blurb.
    - If the user has provided enough information, then complete the `Abuse_Report_Review_Request` as per the instructions.
1. For all other cases where no abuse report exists, including Zendesk, Twitter or slack - Complete [General_Request](https://gitlab.com/gitlab-com/gl-security/security-operations/trust-and-safety/operations/-/issues) issue in the Security Operations Tracker. A member of the team will review the request within 24 hours. If the request is urgent, please reach out in the #abuse Slack channel.
1. Send the [`Support::SaaS::Gitlab.com::Blocked Accounts::Escalated-TrustAndSafety`](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Blocked%20Accounts/Escalated-TrustAndSafety.md?ref_type=heads) macro for the initial response to the user.

## NOTE

1. All information provided by the team is considered `confidential` and should not be shared unless requested.
   - If you are unsure about the information you want to share, follow up in the issue for a team member to peer review the outbound blurb.
1. The information we are able to provide are sometimes subject to Legal or further review by other members of the Org, which could potentially delay the outcome of the request.
   - These request do not have a set SLA, however the team is dedicated to getting these process as soon as possible.
   - Do not hesitate to follow up on the issue or in the #abuse slack channel for an update.

### An Abuse Report review request can be submitted when

1. They are verified to belong to the group/project they are requesting information about.
   - In some instances we can provide limited information to non project members who reported legitimate abusive activity.
   - The content or information regarding the reported activity/content is still available on GitLab.com.

### An Abuse Report review request **cannot** be submitted when

1. The requesting account has been blocked.
   - If the account owner is requesting access to the account to retrieve information, follow the [Reinstating Blocked Accounts](/handbook/support/workflows/reinstating-blocked-accounts) workflow instead.
1. Namespace or Trademark Disputes - [Workflow](/handbook/support/workflows/information-request#namespace-and-trademark-claims)
1. Ownership Dispute Policy - [Workflow](/handbook/support/workflows/information-request#ownership-disputes )
1. Continued Abuse from an already reported account ie:  The person(s) are creating multiple accounts to circumvent a block or evade detection.
   - A detailed abuse report can be sent to <abuse@gitlab.com> and must be sent from an attended mailbox.
