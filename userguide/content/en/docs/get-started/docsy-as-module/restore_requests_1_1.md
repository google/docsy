---

title: Restoring Deleted Data Requests
category: GitLab.com
subcategory:
description: "Workflow for cases when a customer requests deleted data to be restored on GitLab.com."
last-reviewed: 2021-10-06
---



## Overview

Use this workflow when a customer requests that we restore data from GitLab SaaS that has been deleted. Note that user accounts and contributions can never be restored if deleted. This workflow is specifically for handling deletions of projects and groups. It is important to note that container images stored within deleted groups or projects cannot be recovered.

## Process

1. Check whether the customer has special provisions in their contract that might affect the processing of this request. A note of these provisions in the contract are located in the notes section of the organization in Zendesk. Look at the organization information, or the internal note at the beginning of the ticket.
   - >**Note:** The best way to maintain this information is being discussed in [this issue](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/2944).
1. Ensure that the request meets the necessary [criteria for restoration](https://about.gitlab.com/support/gitlab-com-policies/#restoration-of-deleted-data).

**If the criteria for restoration is not met:**

1. Reply to the ticket with the [`Support::SaaS::Gitlab.com::Restore requests::Does not meet restore criteria`](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Restore%20requests/Does%20not%20meet%20criteria.md?ref_type=heads) macro.

For further guidance in these cases, please see the [internal handbook](https://internal.gitlab.com/handbook/support/workflows/data-restore-request-exemptions).

**If the criteria for restoration is met:**

1. Reply to the ticket with the [`Support::SaaS::Restore requests::Meets restore criteria`](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Restore%20requests/Meets%20criteria.md?ref_type=heads) macro, which informs the customer of the limitations of restoration and asks them to confirm that they want us to proceed.
1. Wait for the customer to reply and confirm.
1. Once you've received confirmation open an [Infrastructure Issue](https://gitlab.com/gitlab-com/gl-infra/infrastructure/issues/new?issuable_template=request-gitlab-com) using the `request-gitlab-com` template. Along with any information requested in the template be sure to include:

   - A Summary of the situation.
   - A link to group or project.
   - A link to ticket.
   - A link to bug (if applicable).
1. Inform the customer that the restoration order has been put in and is in progress.
