---

title: Sending Notices
category: GitLab.com
description: How to send notices out to GitLab.com users and customers to inform them of various actions on namespaces under their control
---



## Overview of the process

At times the [Support team will be asked to send notices]({{< ref "internal-support#gitlab-changes-and-contacting-users" >}}) to GitLab SaaS users or customers to inform them of actions that we have taken (or will be taking) on namespaces or projects under their control.

This workflow describes how to fulfill different types of contact requests and the helpful tools you can use in the process.

## Tools and Approvals

| Number of users | Which thing to use | Approvals required | Notifications required |
| --- | --- | --- | --- |
| 1-2 | [Manually create a Zendesk ticket](#manually-create-a-zendesk-ticket) | None | None |
| 3+ | [Mass Emails through Marketing Department](#mass-emails-through-marketing-department) | Director | [Support Readiness issue](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/new?issuable_template=Support%20Readiness) + FAQ |

- Support team can be asked to contact users **during an incident**. Such requests are filed by infra team [using `confidential_incident_data` issue template](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/new?issuable_template=confidential_incident_data) in [production](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/) issue tracker. These must be fulfilled by CMOC during the shift.
- As a [Stable Counterpart](../support-stable-counterparts.md) you may choose to manually create tickets for a higher number of users at your discretion. This should be done solely for technical matters ("your usage is causing issues, may we suggest a different approach"), never for marketing reasons ("we have a new way to do xyz and would like you to adopt it").

## How to send notices

Most notices should be sent in the form of Zendesk tickets. Always send these tickets to users with `Owner` level permissions in the namespace or project in question.

Most contact requests will involve contacting all of the owners of only one project or only a few specific users. If you're tasked with contacting the owners of a project and know that there's only one, feel free to look up their email address using your admin account or [ChatOps]({{< ref "chatops#user" >}}).

However, some contact requests may involve contacting all of the owners of multiple projects. Support Engineers should direct requests for reaching out to multiple owners across multiple projects to do [Mass Emails through Marketing Department](#mass-emails-through-marketing-department)

Make sure to [add an admin note]({{< ref "admin_note" >}}) on a user/group we took action on. This will ensure that we can track a block/change reason if a user reaches out to us using a different channel.

### Manually create a Zendesk ticket

For the process of sending the outbound contact requests in Zendesk, please
review the
[Support Readiness documentation](/handbook/support/readiness/operations/docs/zendesk/tickets/#creating-tickets-for-outbound-requests)
for more information.

### Mass Emails through Marketing Department

Outside of Zendesk we may be asked to be involved in the process of sending mass notices to users. For larger email campaigns, involve the marketing team:

1. [Open an issue](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-email) in the [marketing/demand-generation/campaigns](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns) issue tracker using the `request-email` template. You may also need to create a supplementary issue using [request-confirm-target-list template](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-confirm-target-list).
1. Fill the template out in its entirety.
1. Submit the issue and be ready to adjust the subject and/or body of the notice based on feedback.

Note that this process requires a number of approvals from the management, so plan ahead and make sure that the issue is completely ready for review at least one week before sending out emails.

## Tools

The following tools can be used to facilitate different types of contact requests.

### Email Grab Script

The [Email Grab Script](https://gitlab.com/gitlab-com/support/runbooks/-/blob/master/code/group_project_user_owner_emails.rb) is a Ruby script that will return the primary email addresses of the owners of a group or project. Currently, it can only be used if you possess a GitLab SaaS admin account. It can also be supplied only a list of usernames, in which case it will return the primary email addresses of those users. To use it:

1. Install the required [labclient](https://rubygems.org/gems/labclient/versions/0.5.1) gem with `gem install labclient`.
1. Copy the script to your local machine and give it a name, like `emailgrab.rb`.
1. Replace `YourSuperSweetPAT` with a `read_api` scoped PAT from your GitLab SaaS admin account.

- **Note**: If a new PAT was created from an admin account, that account will receive a slack message from the SIRTbot app asking if the PAT creation was legitimate. Remember to fill this out for security auditing.

1. [Comment out](https://docs.ruby-lang.org/en/3.0/doc/syntax/comments_rdoc.html) the sections of the script that you will not be using, either `groups`, `users`, or `projects`.
1. Add your data to the section you will be using.
1. Run the script with `ruby emailgrab.rb`.

The results will be created as `namespace-contacts.csv` in the same directory that the script is located in.
