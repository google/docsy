---
title: "Access Requests (AR) FAQs"
---

## Need help?

- Please @ mention `@gitlab-com/business-technology/end-user-services` in the issue, with no particular SLA.
- If your request is urgent, @ mention `it-help`in the #it_help channel in slack with a note on why it is urgent.

## I need access

### My AR request has been open for a while, how can I get traction on it?

1. Review that the access request has been completed according to the [instructions](/handbook/it/end-user-services/onboarding-access-requests/access-requests#how-do-i-choose-which-template-to-use) and that you have included the system/vault/group/project you need access to plus the role or permissions needed.
1. Most access requests need Manager approval so make sure to tag your manager in the AR and ask them to add the ~"AR-Approval::Manager Approved" and ~"ReadyForProvisioning" labels to the issue
1. Make sure you have tagged and assigned the issue to the correct provisioner(s) for the tool(s) you are requesting access to. You can find the provisioners for all our tools in our [Tech Stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml)
1. If the provisioner is the IT team, please make sure to add the ~"IT::to do" label to the AR.
1. If you have followed all the steps above and your access request is still not being worked on, reach out to the team that owns the tools in their Slack channel. You can find the Slack Channel for each team in our [Tech Stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml)

### So you need access to a system or a group/vault?

1. Choose a template based on your needs: most people use the [Bulk](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Bulk_Access_Request) or [Single Person](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request) template.
1. Do not open an Access Request for anything that is part of a baseline entitlement unless it got missed during onboarding.
    1. [All team members baseline entitlements](https://internal.gitlab.com/handbook/it/end-user-services/access-request/baseline-entitlements/#baseline-entitlements-all-gitlab-team-members)
    1. [Role-based baseline entitlements](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/tree/master/.gitlab/issue_templates/role_baseline_access_request_tasks)
1. You must have the label `AR-Approval::Manager Approved` on the issue **unless** the person is:
    1. an internal team member being added to a Google Workspace email alias or group
    1. an internal team member being added to a slack group
    1. a completely unchanged role based baseline entitlement
1. Make sure to assign the issue to the [people who provision access to the system.](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml)
1. If you need help, please ask IT-Ops in the slack channel #it-help with a link to the issue you need help with.
1. Only ask for the least amount of access to do the work.

### Do I need manager approval? Sometimes

You don't need manager approval if you are requesting the following:

1. An internal team member being added to a Google Workspace email alias or group (unless that group provides permissions to Google Cloud Platform)
1. An internal team member being added to a slack group
1. Something included in your role based entitlement

### I need access to the Rails or database production console (grpd)

Please use Teleport to request temporary access to either
[the Rails console](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/teleport/Connect_to_Rails_Console_via_Teleport.md) or
[the database console](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/teleport/Connect_to_Database_Console_via_Teleport.md).

### I need access to version.gitlab.com

You might already have it: [Test if you have a dev account.](https://dev.gitlab.org/)

- If you need a dev account, open a [Single Person Access Request](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request).
- If you have a dev account, go to [version](https://version.gitlab.com/users/sign_in) and login with GitLab and authorize them to use your credentials.

### I need access to Zendesk as a Light Agent

You don't need to open an access request for Zendesk light access. [Follow the instructions to get access by email](/handbook/support/internal-support/#viewing-support-tickets)

### I need to add an email alias, or name change

Please use the [`slack_googlegroup_1password` AR template](https://gitlab.com/gitlab-com/team-member-epics/access-requests/issues/new?issuable_template=slack_googlegroup_1Passwordgroupvault) for any email alias additions or name changes.
There are no restrictions on what can be requested, or how many, but please include a short explanation for the addition or change. Some alias requests may be denied if deemed inappropriate or at the discretion of operations.

While this application automation will take place in Okta, "true" system provisioning and deprovisioning will still need to be manually completed within the impacted systems via an Access Change Request.

### Closing outdated access requests

It is expected that an access request will be completed as soon as possible (30 day's)

We have a pipeline setup that will automatically close access requests once they are past 30 days (at the time of creation).
This is to reduce stale AR's and clear out the backlog. The exception to this is if an AR has the `AccessReview` label, the pipeline will ignore the issue if it has that label.
This pipeline will add a comment on the issue that it is being automatically closed and what the team members should do
if they have tasks remaining.

Currently, the pipeline is scheduled to be run at 09:30 PM on every Friday. It
will close all access request issues that are 30 days old.

Please note: This is the first iteration of the AR auto closer. Our team will be working to refine and improve this.

### I need to remove an existing access

Raise an Access Request specifying which accesses and person needs to be removed
