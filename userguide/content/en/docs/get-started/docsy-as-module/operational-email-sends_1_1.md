---

title: "Operational Email Sends"
description: "The Marketing Operations team works very closely with the Lifecyle Marketing team, and sometimes are tasked with deploying non-demand generation emails."
---







## Overview

Page is WIP
The Marketing Operations team works very closely with the Lifecyle Marketing team, and sometimes are tasked with deploying non-demand generation emails. These emails serve many different purposes and are not always `operational` (definition).

### Issue Templates

- Security Release Notification
- [General non-demand generation template](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=request-operational-email) (product updates, sub-processor updates, customer notifications)
- Emergency or incidents should follow [separate processes and templates](/handbook/marketing/emergency-response/#marketing-emergency-response)

These issue templates are different from `marketing` emails and have their own checklists that apply. The SLA is 5 business days from final assets to send, but please put in issues as soon as you know you need to complete a send (even if you do not have final deliverables) as complexity may push out the SLA. Here are some [helpful tips](/handbook/marketing/marketing-operations/email-management/operational-email-sends/#customer-comms-email) to consider when sending a customer email. If you require a marketing email, please work with the [lifecycle team](/handbook/marketing/lifecycle-marketing/#issue-templates).

Marketing Ops is not responsible for the list pull. You must open an [list request issue](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=request-target-list) with the Marketing Strategy and Analytics team, or the appropriate data engineers.

## Common Email Types

### Security Incidents

Please follow information found on [this page](/handbook/marketing/emergency-response/#marketing-emergency-response), as these emails are highly important, urgent and follow a different order of operations for deploy.

### Security Notifications

These emails are sent when there is a security related update in a patch release, or a critical patch applied. The patch releases are typically 2x a month.

If there is going to be a release during EMEA work hours, please notify us ahead of time to arrange for coverage. If unplanned and urgent, follow the [coverage matrix defined here](/handbook/marketing/emergency-response/#coverage-matrix)

Requestor Responsibilities:
Fill out the issue template with the following information:

- Date of deployment
- Release #
- What kind of release? (critical, coordinated or normal)
- Review copy and confirm what versions should upgrade
- Communication with MktgOps team on time of send or changes to date/time
  - If the release will happen during EMEA hours, please note ahead of time.
- Reviewing email copy for content

Marketing Ops Responsibilities:

- Build email in Marketo utilizing program tokens
- Send preview of the send to stakeholders (can be done ahead of link going live)
- Do final review of email for content, format and double check the blog link (blog must be live)
- Confirm email copy and blog have similar content
- Schedule the email, confirm the send and paste in issue

#### Marketing Operations Steps to deploy a Security  Notification

1. Check issue for completeness
2. Do not edit email itself, only edit the program tokens with updated information

##### Tokens to update

Update tokens as the examples below. Always preview the email for completeness.

|Token Name|Example Value|Note|
|----------|-------------|------|
|{{my.Subject Line}}|Security Release: 16.0.2, 15.11.7, 15.10.8||
|{{my.Versions text update}}|These versions contain important security fixes and we strongly recommend that all GitLab installations be upgraded to one of these versions immediately|Token WIP, 1 of 2 versions to include|
|{{my.blog link}}|about.gitlab.com/releases/2023/06/05/security-release-gitlab-16-0-2-released| DO NOT include https://|
|{{my.release}}|16.0.2, 15.11.7, 15.10.8||
|{{my.utm-content}}|utm_content=June+05+2023||
|{{my.utm-medium-source-campaign}}|utm_medium=email&utm_source=marketo&utm_campaign=security+release+email|Do Not Edit - pre-filled|

### Sub-Processor Updates

Sub-processor has its own list people can subscribe to, and legal will start the email process. The form and processing campaigns are in a separate area of marketo than the email sends.

#### Marketing Operations Steps to Deploy

1. Clone from sub-processor [template in marketo](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/EBP6615B2)
2. Upload any additional list sent by Legal
3. Build email once final copy is provided
4. Send sample to legal requestor
5. Deploy send when confirmed.

### Customer Comms Email

Emails are sent to update a specific group of people about a change to the products or services provided (ex. product updates, support portal changes, EOA). This section should be used for all customer communications to communicate product or security issues and risk.

For more significa in sequence by the head of the department that is leading the communication (e.g., Product, Engineering, Security), Vice President of Customer Success, Legal, or appropriate designates (if they are out on PTO or unavailable).

Communication checklist:

- Check with the [CS Ops team](h/handbook/sales/field-operations/customer-success-operations/cs-ops-programs/) to see if they should be sending this email via gainsight
- Loop in Customer Service and Field teams if this change will impact them or a major change/communication
- For more significant emails regarding pricing, material changes or issues with significant risk the following must be approved in sequence by the head of the department that is leading the communication (e.g., Product, Engineering, Security), Vice President of Customer Success, Legal, or appropriate designates (if they are out on PTO or unavailable).

#### Marketing Operations Steps to Deploy

1. Clone from [template in marketo](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/EBP7320A1)
2. Upload any additional list sent by requestor
     - For large sends, follow checklist PRIOR to loading
     - Set up appropriate processing campaigns for new leads to have a lead status, source, etc (follow the template)
3. Build email once final copy is provided
4. Send sample to requestor and other required approvers/reviewers
5. Deploy send when confirmed.

#### Recommended format for customer emails

The following is the recommended format for ad hoc customer emails though tailor it if the communication objective or content requires this. This does not include marketing (e.g., email campaigns, blogs, etc.) or standard product or security notifications (e.g., release blogs, release notifications, etc.). Emails should be clear, crisp, and direct, providing links for details (e.g., details on the issue or risk, procedural details to action). To [maximize reading comprehension](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1709943), remove all extraneous words and language to maximize the probability the email will be read and acted upon.

The email should answer the following questions in the following order:

1. Why are you (customer) getting this email? This can be either specific (i.e., we know) or general (i.e., you may be or need to be aware). This be the first sentence in the email.
1. What is the issue/change/problem/etc.? What are the risk and impact? How do you know if you're impacted or potentially impacted by the issue? Is it resolved or still being worked on?
1. What is your call to action? What should you do?
1. Where should you go if you need support? If applicable, where do you provide feedback (e.g., forum, issue, other)? If additional updates will be provided, when and how will that information be shared?

To request an email, [create an issue](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=request-operational-email)

##### Sample email

Two examples are provided:

1. (GitLab internal only as it references a 3rd party software provided) an [example of a security email](https://docs.google.com/document/d/10TEgeGWzmlHpOaiiAYuUzNkevYsWGNmLkNbqWt1KXlo/edit#bookmark=id.aa65snh7vyl6)
1. An example of a product risk communication (see below)

```text
Subject: Important update information for customers using {GitLab Feature}

Hello {Customer name},

If you use {GitLab Feature}, or plan to migrate to it, this information may be relevant to you.

We recently identified {cases} where {GitLab Feature} can cause a {specific issue} that requires GitLab Support intervention to resolve.

We recommend the following actions to identify and resolve this issue:

- If you use {GitLab Feature}, please review the [scenarios] and avoid them.
- If you have not migrated to {GitLab Feature}, please know that we [provided additional support] to all affected releases.

We're working to reduce the conditions that can cause {specific issue} and will update the [{cases}] when we do so. If you are using {GitLab Feature} and require additional guidance, please contact your support representative or your CSM.

Kind regards,
{Sender}
```

##### Epic code and issues

The requestor (Security, CSM, etc.) will follow the process below to create the epic, which will have quick links to the appropriate issues to open.

- Create epic here and input code below: [https://gitlab.com/groups/gitlab-com/-/epics/new](https://gitlab.com/groups/gitlab-com/-/epics/new)

```markdown
### :exclamation: Action items for requestor to complete
*Note: this will automatically be a confidential epic.*
* [ ] Once created, associate this epic to parent epic (if exists)
* [ ] Create issues in section at bottom
* [ ] Ensure all issues are associated to this epic

### :star: Purpose
<!-- Requestor, please describe the purpose of the email communication in this section for context by all teams involved -->

### :link: Key links
* [Copy Document]() `to be added by requestor ` ([use this template](https://docs.google.com/document/d/1hv0XF7j6SibLgHgGFxxlrbPrufxbcXHrO8ZRG04nFjU/edit#))
* [Target List]() `to be added by requestor when final`
* [Email Program]() `to be added by MOps` [template](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/EBP15318A1)


### :books: Issues for requestor to create (shortcuts below)
* [ ] [Request target list issue (internal link)](https://gitlab.com/gitlab-com/marketing/marketing-strategy-performance/-/issues/new?issuable_template=list-request)
* [ ] [Email request issue](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=request-operational-email) - requestor open, MOps DRI
  - the email issue is blocked until requestor provides final copy
* [ ] If landing page required: [Landing Page request issue](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=marketo_landing_page_request) (optional, will increase scope and delay timeline) - requestor open, MOps DRI
* [ ] If form required: [Form request issue](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=form_request)

### :point_up: Reminders on action items & timeline
* Requestor is responsible for providing FINAL copy, including review by all reviewers, by date indicated in timeline
* Requestor is responsible for providing list of who must review and approve email
* Requestor is responsible for approving test email and providing send time and date

/confidential
/label ~"Customer Success" ~"CSM" ~"email-calendar" ~"operational-email"
/cc @amy.waller @bweatherford
```
