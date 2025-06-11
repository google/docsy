---
title: Working With GitLab Support
description: How GitLab team members can work with and best ways to contact Support.
---

## Overview

The purpose of this page is to direct GitLab team members outside of Support on what GitLab Support does, how to get in contact with us, and where to direct common requests that require our involvement. **Are you a customer looking for technical support? If so, please visit the [Support Page](https://about.gitlab.com/support/) instead.**

## Quick reference

If it's not mentioned on this page, it's probably not Customer Support.

Please read the next sections on [GitLab Support's Purpose](#gitlab-supports-purpose) and [Should I Contact GitLab Support? section](#should-i-contact-gitlab-support) for more information.

| Problem | What to do |
| ------ | ------ |
| I want to see tickets | Get a [Light Agent ZenDesk account](#requesting-a-zendesk-light-agent-account). |
| My customer can't open a ticket (or they get closed)  | Make sure they are a [support contact](https://about.gitlab.com/support/managing-support-contacts/#managing-contacts). Or maybe, [they can't log into ZenDesk](#if-a-customer-cannot-login-to-gitlab-support-zendesk--customer-portal).  |
| Customer is asking about a ticket | Check the status of the ticket in Zendesk with your Light Agent account. Reach out to the assigned Support Engineer, or add an internal note with the customers ask. If there is a need, you can open a [Support Ticket Attention Requestion (STAR)](#i-want-to-escalate-a-ticket). If no ticket, [open one](#requesting-support-for-customers) .|
| My customer has [an emergency](https://about.gitlab.com/support/definitions/#Definitions%20of%20Support%20Impact)! | The customer must send a **new** [email](https://internal.gitlab.com/handbook/support/workflows/raising-an-emergency) (internal) to [trigger an emergency](https://about.gitlab.com/support/#how-to-trigger-emergency-support). If not an emergency, you can [STAR it](#i-want-to-escalate-a-ticket). |
| My customer has a subscription / license issue  | If a [ticket with the customer](#requesting-support-for-customers) is not possible, open [an internal request](#internal-requests).  |

This is not an exhaustive list. For anything else you believe the Support team covers, please check the table of contents or search this page.

## GitLab Support's Purpose

GitLab Support provides technical support for GitLab.com and Self-Managed GitLab customers. We do **not** provide support for GitLab team members who are experiencing IT (1Password, Slack, Mac, etc.) issues. If you require assistance with issues of that nature, please contact [Team Member Enablement](/handbook/it/end-user-services/).

## Should I Contact GitLab Support?

For general questions regarding GitLab ("Can GitLab do x?", "How do I do y with GitLab?") please ask in [#questions](https://gitlab.slack.com/messages/questions), or if you think you've encountered a bug or something isn't behaving right while using GitLab try asking in [#is-this-known](https://gitlab.slack.com/archives/CETG54GQ0). Doing so ensures that [everyone can contribute](/handbook/company/mission/#mission) to an answer.

GitLab Support's Slack channels are specifically for the various GitLab Support **teams**, not for questions about GitLab the product. If you're working with a customer that requires technical support, please advise them to [contact GitLab Support](#requesting-support-for-customers).

### Support Team Meta Project

If you'd like to ask a longer term or larger scope question, propose an idea to GitLab Support, discuss something with us, or suggest an improvement or change to any of our workflows, please visit the [issue tracker](https://gitlab.com/gitlab-com/support/support-team-meta/issues) of the **[Support Team Meta](https://gitlab.com/gitlab-com/support/support-team-meta)** project and create an issue there. Please keep in mind that it is open to the community and as such **should not contain any sensitive information**, so links to Zendesk or other references are encouraged.

## Support Tickets & Customer Information

### Requesting Support for Customers

If your customer contacts you requiring technical support, the following options are available to you:

1. (Recommended) In most cases, please direct them to [open a ticket through the Support Portal](https://gitlab.zendesk.com). It is Support's primary function to provide technical support for our customers, and as paid users, they are entitled to access to us. This option is recommended as the customer is best positioned to describe their own issue and needs. Ensure that the customer understands that it will almost always be the fastest path to response to reach out to Support directly.

1. When directing your customer to the **GitLab Support Portal**, please inform them that they should ensure they have been [added as a support contact](https://about.gitlab.com/support/managing-support-contacts/) for their organization otherwise their tickets may be auto-closed (except for Licensing and Renewals tickets). Aligned with this, if your customer requires their colleagues to be able to also submit a support ticket then will also need to provide a list of managed contacts. A customer can add or manage support contacts by following the inscriptions in [Managing contacts](https://about.gitlab.com/support/managing-support-contacts/). Please note that encouraging customers to have a valid support portal account will help streamline the support process and ensure a smoother experience for both the customers and our support team.

1. To request adjustments to licenses, subscriptions, renewals, trials, trial extensions, temp licenses, etc., you can [open an Internal Request](#internal-requests) on behalf of the customer (more details [below](#internal-requests)).
    - **Note:** If the customer already has a license/subscription, and is getting errors while applying it, it's best for the customer to open a Support ticket directly with us.
    - **Note:** To submit the form you must have a [Zendesk Light Agent account](#requesting-a-zendesk-light-agent-account), which all GitLab team members can request. The account also enables team members to see customer tickets in Zendesk, and leave notes for the Support team.

1. In sensitive cases where asking a customer to open a ticket would aggravate a situation, you can open a Support ticket on behalf of the customer.
   - **Note:** You cannot be logged into Zendesk if you choose this option, because Zendesk automatically closes any tickets submitted with `gitlab.com` email addresses. Instead, use a private/incognito window in your browser to submit the ticket. When submitting the ticket, in the "Your email address" field, enter your customer's email address. If you should be CC'd on the ticket, please request it in the ticket body.

External customers should not be cc'd on [Internal Requests](https://support-super-form-gitlab-com-support-support-op-651f22e90ce6d7.gitlab.io/). Communication with Customers is only provided through [Support tickets](https://gitlab.zendesk.com) initiated by the Customer themselves, or tickets opened on their behalf.

#### Support does not action out of Slack

For questions about specific customer situations, we need a support ticket (from the customer) or an [internal request](#internal-requests) ticket (from a GitLab team member).

There are several reasons why Support cannot respond to customer-specific requests made through Slack:

- We aim to meet the [Service Level Agreement](https://about.gitlab.com/support/#service-level-agreements) (SLA) each time we help a customer, and we only track SLA compliance via Zendesk.
- Zendesk has a ticket assignment system which is vital to our workflow. We have no system to assign tickets in Slack.
- When we are trying to solve a current customer problem, we frequently search resolved tickets in Zendesk. Since Slack content is deleted after 90 days, we may lose valuable information if a customer's problem and/or the solutions to it are discussed in Slack instead of a Zendesk ticket.
- We want to keep all of our records of a customer's technical support problems and their solutions in a single place (Zendesk).

If you want to request that we place additional attention on an **existing** ticket or internal request, please use the [Support Ticket Attention Request Form](https://gitlab-com.gitlab.io/support/toolbox/forms_processor/support_escalation/) ([handbook entry](/handbook/support/internal-support/support-ticket-attention-requests)).

### Requesting support for GitLab.com users that have account or login issues

GitLab.com users that have account or login issues should [open a new ticket](https://support.gitlab.com/hc/en-us/requests/new).
They should select "GitLab.com (SaaS) User Accounts and Login Issues" as the reason for the request.

### If a customer cannot login to GitLab Support Zendesk / customer portal

Customers having difficulty logging into the Zendesk customer portal should first [try our documented troubleshooting steps](https://about.gitlab.com/support/portal/#troubleshooting-support-portal-issues). These steps almost always resolve the difficulty.

If those tips do not resolve the problem, you can open an [Internal Request > Other](#internal-requests) on their behalf.

### Requesting to see Customer Information

According to our [privacy policies](https://about.gitlab.com/privacy/), Support does not provide any information regarding customers, groups, projects, etc, to you that are not available publicly. This includes situations where a customer is requesting information about their own projects, groups, etc. If they are unable to authenticate, we cannot assume they are who they say they are. If they are locked out, please have them submit a support ticket.

### Requesting a ZenDesk 'Light Agent' account

A Zendesk Light Agent account is required to view Support Tickets and can be obtained without manager approval.

To request a Zendesk  Global light agent account, please send an email to [contact-project+gitlab-com-gl-security-corp-cust-support-ops-zendesk-global-lig-68900149-issue-@incoming.gitlab.com](mailto:contact-project+gitlab-com-gl-security-corp-cust-support-ops-zendesk-global-lig-68900149-issue-@incoming.gitlab.com).

- **You must send your request from your GitLab Google / Gmail account. No other addresses will work.**
  - Please use gmail to send this. Other email clients often strip vital information from the email headers.
- The Subject should be along the lines of "Light Agent Provisioning".
- The Body should be along the lines of "Light Agent Provisioning".

This will create an issue via Service Desk (which you will be notified about). An automated process will take it from there to setup the Zendesk light agent account.

Once set up, it takes up to 24 hours for your account to be assigned to Zendesk Global in Okta.

Once Zendesk is assigned, you should be able to [log in](https://gitlab.zendesk.com/agent).

If your account is not assigned within 24 hours, please reach out via the Service Desk issue.

Note that you cannot send public replies to customers with a Light Agent account. If you need to do this, please submit a [new Access Request issue for a paid full agent account](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request) and tag your manager for budget approval. If needed, you can [read more information](https://support.zendesk.com/hc/en-us/articles/4408829504154-Collaboration-overview) on Light Agent accounts from Zendesk.

## Common Requests

### Regarding GitLab Support, Plans, and Namespaces

| Request    | What To Do                                                   |
| ---------- | ------------------------------------------------------------ |
| Upgrade Assistance | **Global organizations:** [Review the offering](https://about.gitlab.com/support/scheduling-upgrade-assistance/), then open a new ticket in the global support portal <br> **Public Sector organizations:** [Open a ticket](https://about.gitlab.com/support/scheduling-upgrade-assistance/#us-federal-support) in the U.S. Government support portal |
| Who is on-call for Customer Emergencies? | Run `/chatops run oncall support` in a direct message to `GitLab Chatops` and review the results. This will **not** page the on-call engineer. |
| Who is on-call for GitLab.com CMOC? | Run `/chatops run oncall cmoc` in a direct message to `GitLab Chatops` and review the results. This will **not** page the on-call engineer. |
| Excessive reCaptcha on GitLab.com | While it's happening, post in [#support_gitlab-com](https://gitlab.slack.com/messages/C4XFU81LG/) and link to the issue/MR in question to be added to the allowlist. |
| Report complaints about support that you received from a client or prospect | [Open an issue](https://gitlab.com/gitlab-com/support/feedback/-/issues/new?issuable_template=Indirect%20Feedback) using the `Indirect Feedback` template. |
| See if an inactive GitLab.com Namespace can be claimed | If you are a GitLab team member requesting on behalf of a customer, please use the [GitLab Support Form](https://support.gitlab.com/hc/en-us/requests/new?ticket_form_id=360000803379) and select `Namesquatting Requests` as the Problem Type. Prospects, free users and GitLab team members do not qualify for name squatting requests.|

### GitLab plan or license for team members

For local or sandbox testing purposes, GitLab team members can provision their own enterprise edition licenses. Steps to do this:

   1. Sign in to the [staging Customers Portal](https://customers.staging.gitlab.com) by selecting the **Continue with GitLab.com account** button.
      If you do not have an existing account, you are prompted to create one.
   1. If you do not have an existing cloud activation code, visit the purchase page for the subscription you'd like to select. The staging Customers Portal links will redirect to a pricing page, so you must navigate directly to the purchase URL. The full list of URLs for staging subscriptions are documented [here](https://gitlab.com/gitlab-org/customers-gitlab-com/-/blob/main/doc/flows/self_service_flow_urls.md#new-subscription-purchase-links). If you aren't sure which subscription you'd like, **Self-Managed Ultimate** is a good default.
   1. Purchase the subscription using [a test credit card](https://gitlab.com/gitlab-org/customers-gitlab-com/#testing-credit-card-information).

  Note that both this is a **staging license**, so you must configure your GitLab instance to use the staging Customers Portal. For an Omnibus install, [here](https://docs.gitlab.com/omnibus/development/setup.html#use-customers-portal-staging-in-gitlab) is how you point to staging Customers Portal. For GDK, set `export CUSTOMER_PORTAL_URL=https://customers.staging.gitlab.com` in [`env.runit`](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/runit.md).

If for some reason self-provisioning is not working, team members should request a license via the [Support Super Form](https://support-super-form-gitlab-com-support-support-op-651f22e90ce6d7.gitlab.io/) by selecting
"Request a team member license" from the drop down options.

If a GitLab team member would like an Ultimate license for GitLab.com, there are two options:

1. Request an Ultimate group license for demo purposes through an [access request](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=GitlabCom_Licensed_Demo_Group_Request).
1. [Request an Ultimate license for your personal namespace](/handbook/total-rewards/incentives/#gitlab-ultimate).

### Contacting users about GitLab incidents or changes

You can request Support to contact GitLab.com users on your behalf. Here are some cases when you can request us to contact users:

- you believe the planned production changes to GitLab will have a high impact on users and/or create numerous inbound tickets
- you need to inform customers of an urgent Security related issue
- you've blocked a user on GitLab.com
- you need to interview a specific account because they are exhibiting atypical usage patterns or behaviors
- there are important project/group affecting changes
- there are GitLab.com account problems

| Request    | What To Do                                                   | Where to ask questions |
| ---------- | ------------------------------------------------------------ | ---------------------- |
| Contact a user during an incident | [Open a confidential infra issue, assign it to the current CMOC](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/new?issuable_template=confidential_incident_data), use `confidential_incident_data` template | #support_gitlab-com |
| Contact a single user | [Open an issue](https://gitlab.com/gitlab-com/support/internal-requests/issues/new?issuable_template=Contact%20Request) using the `Contact Request` template | #support_gitlab-com |
| Prepare Support for changes (with or without contacting select users) | [Open a Support Preparedness issue](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/new?issuable_template=Support%20Preparedness) | #support_leadership |
| I need to reach out to many users | [Open a Marketing-Ops issue](/handbook/support/workflows/sending_notices/#mass-emails-through-marketing-department) | #support_leadership |

**Please note**: This is not for marketing or sales related contact. This channel is only for communication with users regarding important items that might affect their usage of GitLab SaaS.

### Internal Requests

All internal requests regarding licensing, subscriptions, trials, and grace period extensions should be filed using the [GitLab Support Internal Request form](https://support-super-form-gitlab-com-support-support-op-651f22e90ce6d7.gitlab.io/). Customers should not be cc'd on Internal Requests.

#### Internal Request SLO

<details><summary markdown='span'>Click for details</summary>

For internal requests, our SLO varies depending on the selected `Priority` for the ticket. Please select the appropriate priority for each request, using the following information as your guide:

**Urgent**

- SLO: 1 hour
- Criteria: service loss
- Common Scenarios:
  - SaaS group downgraded
  - SM license expired and grace period exhausted

**High**

- SLO: 4 hours
- Criteria: time sensitive tasks
- Common Scenarios:
  - Customer will lose SaaS service today
  - SM license grace period will end today

**Normal**

- SLO: 8 hours
- Common Scenarios:
  - SaaS namespace association
  - SM license troubleshooting
  - Purchasing problems resulting in blockage such as:
    - CI minutes fully exhausted
    - SaaS storage is inaccessible because a project is locked
    - SM renewal period is ending and the customer is facing a purchasing error or problem

**Low**

- SLO: 24 hours
- Common Scenarios:
  - Purchasing problems with no immediate blockage, e.g. several days are available for resolution
  - Contact management
  - Account management
  - Request to contact sales
  - Pass to billing/AR
  - Reset max seats
  - Order Management tickets
  - Cloud license exemption, resend license, forward license
    - Unless customer is fully blocked / previous license fully expired
  - Trials (start / extend)
    - Requests from sales to increase CI quota / storage quota
  - QSR / billable users disputes or request for more info
  - Educational, product / process questions
  - Community / NFR licenses or subscriptions
  - Non-customers

All of the SLOs apply to business days (24x5) only.

</details>

---

#### Common Internal Request Scenarios

<details><summary markdown='span'>Click for details</summary>

A list of common scenarios and the appropriate option are detailed in the following sections. Some of the scenarios contain a useful walkthrough YouTube video. For example `Extend an (almost) expired subscription` and `Strict Cloud licensing exemption request` , please note that a GitLab unfiltered account is required to view the videos.

> - **NOTE**: Support cannot start a new trial. If one is needed, *have the user initiate a normal trial first*.
> - **NOTE**: Support requires a single license or subscription request per ticket. If a provided license does not work, or you require a further extension, then please submit a new ticket. All internal L&R tickets must have a 1 to 1 relationship with the generated license or subscription, for audit/reporting reasons.
> - **NOTE**: Please ensure that you selected the correct internal request form request prior to submission.
> - **NOTE**: To speed up resolution, please fill in all form fields including SFDC link and additional context. Providing complete and accurate information, will enable L&R support to perform the steps needed to complete the request more efficiently.

## SaaS Subscription Related

### Extend an (almost) expired subscription

Use this when the customer has a subscription with us and their grace period is (almost) expired. Please note we cannot extend the actual subscription. This instead makes a trial for the namespace and uses that for the extension. Check the [What is included and excluded in trials](https://about.gitlab.com/free-trial/#what-is-included-in-my-free-trial-what-is-excluded) page for more context.

### Investigate incorrect subscription info

Use this when the customer has a subscription with us and something is incorrect in their subscription information. This includes problems with: true-ups, subscription mismatches, can't apply subscription to group/namespace, and current seat usage counts.

### Reset max seats for QSR

Use this after [approval to waive the overage](/handbook/sales/field-operations/order-processing/#waived-true-ups-policy-and-approval-requirements) has been granted and documented via SFDC chatter. Once that is done, file the form to request that Support reset the max seats.

### SaaS NFR license request

Ensure the group on GitLab.com has started a trial, then use this option to request a SaaS NFR subscription generation.

### Billing Entity Change

Use this as part of the process of a billing entity change, to check whether the correct subscription is associated with the customer's group.

### Link Subscription to Namespace

Use this when a customer has contacted you to request that their subscription is linked to a provided namespace. Prior to submitting the request, please ensure that you have first received written confirmation from the account owner to link their subscription to the provided namespace. We require sales to upload evidence of this into SFDC and then provide a link to it. An email link or screenshot should be added to the `Google Docs, Notes, & Attachments object` section of the customer's account record in SalesForce.

## SaaS Trial Related

### Extend a SaaS trial

Use this when the customer's namespace is on a trial that is active/expired. Please note we cannot create the trial for the customer. If they do not have one currently, you will be directed to have them create one.

### Change an existing SaaS trial plan

Use this when you want to make changes to the plan of a currently active trial, including adding compute minutes or activation of trial runners and overriding the requirement for credit card validation on sales assisted trial namespace. The number of users for GitLab.com trials are not restricted. Please note we cannot create the trial for the customer. If they do not have one currently, you will be directed to have them create one.

## Self-Managed License Related (for paid customers only)

### Extend an (almost) expired subscription

Use this when the customer has a license and their grace period is (almost) expired. Please note we cannot extend the actual license. This instead makes a trial license for the customer and uses that for the extension. The following video [How to extend an extension for an almost-expired subscription (self-managed)](https://www.youtube.com/watch?v=g8k8PAUY2pM) demonstrates how to correctly submit a `Extend an (almost) expired subscription` request.

### Resend existing license to the email on the license

Use this when the customer has not received a paid license from us when they should have. Please note we can resend a license to the contact in the license only.
Please [check for Proof of Delivery](#obtaining-proof-of-delivery-for-a-subscription) prior to filing this request

### Forward existing license to an email not on the license

Use this to request sending a license to a different user. Please note we cannot send licenses to anyone other than the account owner. To send it to someone else, please ask the customer to file a ticket so we can go through the contact change process. An exemption can be made for a temporary license.

### Multi-year license needs to be generated

Use this to request the next year's license for a multi-year subscription to be created. **Make sure to check with the customer if they exceeded their seat usage before opening this request.** Support cannot waive true-ups or change anything in SFDC. We cannot create a license until you have checked and amended their subscription as needed.

### Self-managed NFR license request

Use this for Self-Managed NFR license generation

### Cloud Licensing exemption

Use this for SCL exemptions. The following video [How to submit a Cloud License Exemption Internal Request form](https://www.youtube.com/watch?v=pvj59EhATIw) demonstrates how to correctly submit a `Strict Cloud licensing exemption request`.

## Self-Managed Trial Related

### Problems starting a new Self-managed trial

Use this when the customer has no recent trial or subscription, and is not able to request the trial themselves online.

### Modify an existing Self-managed trial

Use this when you want to make changes to the number of users and/or the plan of a currently active trial

### Extend an existing Self-managed trial

Use this when the customer is on a trial that is (almost) expired.

## Other

### Order Management

Use this for Order Management requests. Please note if the license information you are requesting does not match the Salesforce opportunity, we will likely not be able to generate the license as Support cannot waive seats or Trueups. Ensure you include a summary of the action requested in the context field.

### Hacker One Reporter License

Use this to request a license be generated for a Hacker One reporter.

### Report a Provision Failure

This form can be used by the Fulfillment Provisioning team to request help from L&R support when handling a Provisioning failure. Please ensure you provide a detailed description of the type of assistance that you require from the L&R support team.

### Wider Community License

Use this to request a community license be generated. Please note for any license lasting longer more than 90 days, manager approval is required. Without an approving manager's email being provided, the ticket will be closed out

### Other License & Renewal issues

Use this for any license & renewal issues where no other options fit. Please note if this form is used when an option **does** exist, the request will be closed and you will need to submit a new request using the correct form.

---

#### Extending the grace period on a subscription

Grace period extensions are treated similarly to trial extensions for both Self-managed and GitLab.com SaaS. To request these, file a request using the [GitLab Support Internal Request form](https://support-super-form-gitlab-com-support-support-op-651f22e90ce6d7.gitlab.io/) with the correct option as highlighted in the sections above.

Please consider the following:

1. To extend a trial, a previous trial needs to exist for the customer. If no trial was created at any point, a trial should be created by the customer the day after the plan expires.
1. We can provide grace period extensions as long as the current plan is not ongoing. In other words, if the plan expires on the 15th, we can increase the grace period starting the next day (16th). Please plan accordingly.

#### Obtaining Proof of Delivery for a Subscription

A copy of the license email sent to the customer is automatically logged under the `Activity History` of the `Sold To Contact` in SFDC when a subscription is created. Note that this will be a replica of the email the customer receives, but with the actual license key/activation code removed for compliance purposes. The subject line will begin with `[GitLab Transactions]`.

</details>

---

### US Government Support Internal Requests

**Public Sector organizations:** For confidential license issues relating to US Government support customers, GitLab team members can [open a case with US Government Support](https://gitlab-com.gitlab.io/support/support-ops/forms/us-federal-internal-request-form/).

### Request for a license as a GitLab Team Member

File a submission via the [Support Super Form](https://support-super-form-gitlab-com-support-support-op-651f22e90ce6d7.gitlab.io/):

1. Fill in your work email
2. Select "Request a team member license"
3. Select a plan level

### GitLab.com Billable Members List

As Product has implemented the minimal viable versions of [#27074](https://gitlab.com/gitlab-org/gitlab/-/issues/27074) and [#35454](https://gitlab.com/gitlab-org/gitlab/-/issues/35454), Support is beginning to deprecate this process. You can also see [epic 4547](https://gitlab.com/groups/gitlab-org/-/epics/4547) for improvements that product is working on and their progress.

#### Self-serve options for GitLab team members

Here are some options to get basic seat count information:

1. *Plan* and *Seats Currently in Use*:
    - [chatops](https://docs.gitlab.com/development/chatops_on_gitlabcom/#chatops-on-gitlabcom) (requires dev.gitlab.org account) with the command: `/chatops run namespace find group-path`
1. Info from 1 plus Subscription (or trial) *End Date*
1. Info from 2 plus *Seats in Subscription*, *Max Seats Used*, and *Start Date*
    - [Customers portal admin](https://customers.gitlab.com/admin/customer) (requires access via Okta)

If none of the above self-serve options work, file a request using the [GitLab Support Internal Request form](https://support-super-form-gitlab-com-support-support-op-651f22e90ce6d7.gitlab.io/)
with the `Other` option providing the Group URL and any additional context.

> **Note:** Support will only provide you with a screenshot of the billing page's subscription info. This includes:

- Plan, and if it is a trial
- Seats in subscription, currently in use, max used, owed
- Subscription Start and End dates

##### Self-serve options for customers

> **Note:** The public facing version of this information is on the [Licensing and subscription FAQ page](https://about.gitlab.com/pricing/licensing-faq/#how-can-i-get-a-list-of-billable-users-for-my-plan).

Customers can get their subscription information and a list of users using a seat on their group's **Billing** page (under the group **Settings**) or by using the [Billable members API endpoint](https://docs.gitlab.com/api/members/#list-all-billable-members-of-a-group)

---

### I Want to Escalate a Ticket

To keep the term "*escalation*" [MECEFU](/handbook/communication/#mecefu-terms), Support uses the term "**support ticket attention request**" (STAR) to make sure
[account escalations](/handbook/customer-success/csm/escalations/) are distinct. "Escalation" can also be confused with "emergency" or "incident."

Please open a **support ticket attention request**, during [GitLab Global Support Hours](https://about.gitlab.com/support/#definitions-of-gitlab-global-support-hours) only, if
any of these are true:

- progress in the ticket has stalled and the ticket needs more support engineering effort
- the priority of the ticket has changed (Low -> High)
- the ticket requires immediate intervention to address a high level of customer dissatisfaction
- Support Management oversight is required in order to bring structure and focus to the situation

[More about support ticket attention requests](/handbook/support/internal-support/support-ticket-attention-requests)

Please open an **[account escalation](/handbook/customer-success/csm/escalations/)** if:

- There is account level risk because of a single ticket or an aggregation of several issues.
- Visibility and attention from multiple departments is required to restore customer confidence and resolve the issue.

[More about account escalations](/handbook/customer-success/csm/escalations)

Please open an **emergency ticket** if:

- a customer is facing a situation that meets our [Definitions of Support Impact](https://about.gitlab.com/support/definitions/#Definitions%20of%20Support%20Impact) for "Emergency"

[More about how Support Engineers handle emergency tickets](/handbook/support/workflows/customer_emergencies_workflows)

Please declare a **GitLab.com incident** if:

- you've noticed a common pattern of reported problems between SaaS customers
- you've experienced and verified a [loss of functionality over a period lasting more than 5 minutes](/handbook/engineering/infrastructure/incident-management/#definition-of-outage-vs-degraded-vs-disruption-and-when-to-communicate)
- you suspect a [high severity bug](/handbook/engineering/infrastructure/incident-management/#high-severity-bugs) has been deployed to GitLab.com

[More about GitLab.com incidents](/handbook/engineering/infrastructure/incident-management/)

Please declare a **security incident** if:

- you have information about a critical issues that may affect the confidentiality, integrity, or availability of GitLab services or data

[More about Security incidents](/handbook/security/security-operations/sirt/engaging-security-on-call#incident-severity)

---

### I want to make a change to a setting in the GitLab.com Admin interface

The Infrastructure team is the admin of GitLab.com, and any changes to product tuneables go through the [change request workflow](/handbook/engineering/infrastructure/change-management/#change-request-workflows).

### Trials and Prospect Support

For information relating to priority prospects, please see
[Priority Prospects](../priority_prospects).

### My customer is having trouble applying their GitLab.com subscription

The customer has more than likely run into an issue during the purchase process, or is unaware how to apply their subscription to their group. The following documentation outlines how to subscribe to GitLab.com, link their GitLab.com account to [CustomersDot](https://customers.gitlab.com), and apply that subscription to their group.

- [Obtain a GitLab Subscription](https://docs.gitlab.com/subscriptions/#obtain-a-gitlab-subscription)
- [Manage Your GitLab Account](https://docs.gitlab.com/subscriptions/#manage-your-gitlab-account)

### Users in an account I own would like more visibility into their organization's support tickets

In some cases, certain organizations want all members of their organization to be able to see all of the support tickets that have been logged.
In other cases, a particular user from the account would like to be able to see and respond to all tickets from their organization.
If you'd like to enable this, please:

1. Ask the customer to submit a Support ticket using the [Support Ops form](https://support.gitlab.com/hc/en-us/requests/new?ticket_form_id=360001801419) and select `Shared organization requests` in the `Problem type` field.
1. Once the ticket is created, Support Ops will review and work on the ticket.

**Note:** If a customer submits a shared organization request using a different Support form, simply change the form to `Support Ops` and select `Shared organization requests` in the `Problem type` field. Support Ops will then review the ticket and ask any followup questions if necessary.

### My customer needs a report of all the users within their group(s) structure

To view the group's number of billable members, a member of the group with `Owner` permissions may visit the **Settings -> Billing** section of it to see a breakdown. The number of billable members is the amount listed under `Seats currently in use` and this is the amount that will come up whenever they link their group to a paid subscription. Billable members [consist of every user](https://about.gitlab.com/pricing/licensing-faq/#who-gets-counted-in-the-subscription) who is added to a group, subgroup, or project within a paid namespace with the only exception being Guest users within a namespace on certain subscription levels.

We have a [billable members API endpoint](https://docs.gitlab.com/api/members/#list-all-billable-members-of-a-group) that will produce a list of all the billable members for the group. This must be run with your own PAT.

All the billable members are also currently displayed on the group billing page in an unsorted list. This is a first iteration; if interested, you can view the [epic](https://gitlab.com/groups/gitlab-org/-/epics/4547) to see the planned work. If you have any feedback on the billable members list or want to request functionality or UI changes that are not planned in the epic, please feel free to leave a comment on the epic.

### I want to add important information about the organization/user

Zendesk has the ability to store Organization and User notes. Using Zendesk
triggers, we put these into each ticket submitted by that organization or
user. If there is important information you wish to have included in tickets
for an organization or user, please create an MR by searching for the organization's ID
(you can locate this by copying the ID from the organization's URL in Zendesk) [here](https://gitlab.com/gitlab-com/support/zendesk-global/organizations/-/tree/master/organizations)
and making the required changes to the relevant organization's file.
Please be sure to indicate whether the information is only valid
for a specific period of time so that we may include that fact in the notes.

Examples of some notes you might want added:

- You want to put the SA's name on there for use in the tickets.
- A customer prefers specific titles be used when addressing them.
- An organization has multiple subscriptions.
