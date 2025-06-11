---
title: Project Exports for Customers
description: "Provides guidance on when GitLab Team members might offer to export projects on behalf of customers, and the process for doing so."
category: GitLab.com
---

## Project Exports

If a customer is having issues with exporting a project, troubleshoot as normal, including:

1. Ask user to attempt both UI and API.
1. Gather necessary information to search logs. See [Kibana Export Errors](/handbook/support/workflows/kibana/#export-errors) section for tips.
1. Find relevant issue and comment, or create one if needed, with Kibana/Sentry links.

Once an issue is created or commented on, you may use the [`Support::SaaS::Gitlab.com::Export::Offer one time` macro](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Export/Offer%20one%20time.md?ref_type=heads) to offer a one-time export attempt.

If the customer accepts the offer, did the export succeed (they got an email, or there is a "Download export" button) but there an error downloading it? Example: [gitlab#330833](https://gitlab.com/gitlab-org/gitlab/-/issues/330833).

1. If yes, open [an infra export request](https://gitlab.com/gitlab-com/gl-infra/infrastructure/-/issues/new?issuable_template=Project%20Export.md) and fill in all relevant information. This skips the Support console attempt. Can be done within 30 days of the project export.
1. If not (or when in doubt), [open an export request in the internal requests tracker](https://gitlab.com/gitlab-com/support/internal-requests/-/issues/new?issuable_template=GitLab.com%20Console%20Export%20Request).
1. If at any time **an infra export request is opened**, please ensure you add the "infradev" label is added to the relevant GitLab bug issue.

For convenience, two additional macros are available after an export attempt is made:

- [`Support::SaaS::Gitlab.com::Export::Completed - Successful`](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Export/Complete%20-%20Successful.md?ref_type=heads)
- [`Support::SaaS::Gitlab.com::Export::Completed - Failed`](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Export/Complete%20-%20Failed.md?ref_type=heads)
