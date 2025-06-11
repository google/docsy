---
title: "Marketing - Emergency Response"
description: "GitLab's email response process for marketing emergencies"
---

## Marketing emergency response

At times GitLab needs to communicate a "breaking" change or details related to a high-priority emergency patch. These emails are transactional and are highly targeted to the impacted audience.

**Not an emergency?** For important planned customer communications, please use [the customer update/announcement process](/handbook/marketing/marketing-operations/email-management/operational-email-sends/#customer-or-user-comms-email-including-breaking-changes), to enable teams to work together and plan without the urgency of an emergency request.

**As soon as an emergency communication is recognized, the Requesting team MUST:**

1. Create an **[incident communication request](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=incident_communications)**
1. Review the S1 coverage matrix below and assign the issue and tag the coverage owner closest available per their timezone in the #mktgops Slack channel.
1. If there is not a timely response in Slack, please review the coverage owners' Slack profile and send them a quick call or text. If no timely response, tag @mktg-ops within the #mktgops Slack channel or use escalation path below.
1. In the template the requesting team will include details including CTA, email body, send date and **provide link to Google sheet containing list**.
1. If security, make sure to follow [instructions](/handbook/security/security-operations/sirt/security-incident-communication-plan/#roles-and-responsibilities-in-a-security-incident)

### Coverage Matrix

Please review the coverage owner closest available per their timezone when deciding who to reach out to.

| MOPs Team Coverage                          | PT / ET Time Available                 | Coverage Owner: Monday - Friday | Backup: Monday - Friday | Coverage Owner GEO Time |
|---------------------------------------------|-------------------------------|---------------------------|----------------------|-------------------|
| UTC (EMEA Working)                          | 11pm - 3am PT / 2am - 6am ET  | Mihai Conteanu            | Gillian Murphy       | 9am - 1pm EET     |
| UTC (EMEA Working)                          | 3am - 7am PT / 6am - 10am ET  | Gillian Murphy            | Mihai Conteanu       | 11am - 3pm UK     |
| UTC (AMER-Morning)                          | 7am - 11am PT / 10am - 2pm ET | Bryce Weatherford         | Jameson Burton       | 10am - 2pm ET     |
| UTC (AMER-Afternoon)                        | 11am - 3pm PT / 2pm - 6pm ET  | Bryce Weatherford         | Jenny Tiemann        | 11am - 3pm PT     |
| UTC (AMER-Evening)                          | 3pm - 6pm PT / 6pm - 9pm ET   | Bryce Weatherford         | Amy Waller           | 3pm - 6pm PT      |

**Typical Team Timezones:**

* Amy: PST Pacific Standard Time UTC:-8:00
* Jenny: PST Pacific Standard Time UTC:-8:00
* Nikki: MST Mountain Time UTC:-7:00
* Bryce: MST Mountain Time UTC:-7:00
* Jameson: MST Mountain  Time UTC: -5:00
* Gillian: GMT Greenwich Mean Time UTC: +1:00
* Mihai: EET Eastern European Time UTC: +2:00

[Timezone Converter](https://dateful.com/time-zone-converter)

**Escalation Path:**

Outside of normal working hours, we do not have an "on call" procedure, so please follow this escalation path if you cannot reach anyone in the matrix above.

* #mktgops
* Manager (Amy Waller)
* If still no response, use Text or Whatsapp to contact Amy via the number in her slack profile. If you cannot reach her, try to reach out to a timezone appropriate member in the matrix above.

## Roles and responsibilities

### Requestor responsibilities

* **Alerting email team as soon as possible that there may be a send (even if it does not move forward)**
* Providing FINAL email, landing page, form copy, autoresponder copy, etc.
  * NOTE: The addition of each item will increase scope and potentially delay announcement
* [Requesting target list](https://gitlab.com/gitlab-com/marketing/marketing-strategy-performance/-/issues/new?issuable_template=list-request) from the Marketing Strategy & Analytics team
* Creating [Email request issue](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=incident_communications)
* Providing approval list and who signs off on the email
  * Legal, Customer Service VP and VP of the function who is initiating the communication (i.e., Security, Engineering, Infrastructure) are required to sign off
* [Notifying affected field teams](/handbook/security/security-operations/sirt/security-incident-communication-plan/#communicating-internally) (Customer Success, CSM, SAE/AE, SA, Professional Services)
  * Also make sure to notify #sales and #customer-success before email is set to go out
* Approving test email
* Providing any edits to the test email
* Providing send time and date
* Approving all other materials and workflows (landing pages, forms, completion actions)

### Email team responsibilities

* Providing a timeline based on the request
* Creating epic and some issues (all except for the target list or email request issues)
* Building the email program and actual emails in Marketo (or sending platform of choice)
* Uploading target list to Marketo (or sending platform of choice)
* Sending test emails to requestors to approve
* Making one round of changes to the emails
* Creating form and Marketo landing page (if needed)
* Building workflows for form completion actions
* Deploying emails
* Providing email performance report, email link click reports, and form/landing page reports
* Creating SFDC campaign if needed (if needed)
* Coordinating SDR routing needs with Marketing Ops

## Standard process

This is the process to follow when there is an announcement that is an emergency that will need to be sent by the marketing ops team. The marketing ops team will determine what platform will be used based on the information that is provided to them such as timing, list size and severity.

1. **Requesting team notifies that an emergency communication is needed**

   * Immediately slack #mktgops and include the incident issue and the incident slack channel. If there is not a prompt response, follow on-call procedures.

2. **Issue Creation**

   * Request issue utlizing [Incident Communications template](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=incident_communications) in the Marketing Operations project.
   * Fill in as many blanks as you can with as much information as you have available - the issue template will walk you through what is needed. Feel free to add any additional context that may be helpful. If you do not have all the information, that is OK, as we know it is an ongoing development.
   * Add Due Date (or best guess)
   * Include googledoc of copy document, even if it is blank. Use [this template](https://docs.google.com/document/d/1J_prQ8rXRqEcPWxKd1YH4ANGP5UjMPoAfnjpY8ty0XE/edit)
        * Please make sure to review the copy for any [RED Data](/handbook/support/workflows/sending_notices).
   * Include approx size of the list - this will determine what email platform we will use and helps immensely in our planning. Over estimate when you are unsure.
   * If you are requesting a list, create an [issue](https://gitlab.com/gitlab-com/marketing/marketing-strategy-performance/-/issues/new?issuable_template=list-request) with the Marketing Strategy team and relate it to the issue you just created.
   * Include any custom fields you need created for `mail-merge` in the email. Include field max lengths needed, or best guess. Mktops will determine if they can use an existing field or not.
   * Note if the links should not be trackable.

3. **Issue in Process**

   * Marketing team will work closely with you to develop a communication plan and cadence. Please continue to addinformation as you receive it and over communicate with us via slack/issue.
   * List size and complexity will determine what [email platform](/handbook/marketing/emergency-response/#email-platform-to-use) we will need to use.

4. **Approvals**

   The following approvers are needed for the copy and list size:

   * Vice President of Customer Success
   * Vice President of the function who is initiating the communication (i.e., Security, Engineering, Infrastructure)
   * Legal (copy only)
   * Customer Comms and PR
   * Marketing Operations Manager
   * Appropriate field teams driven by the scope of customers receiving the communication (SAE/AE, SA, CSM, Professional Services)
   * Support, if there is any call to action in the communication to contact support

5. **Email Ready to Deploy**

   * Email team will send a sample to the requestor and approvers for their review - preferably, there is a quick Zoom sync to double check send size, variable fields, email copy and time of send.
   * Requestor and approvers must approve in the issue before the email will be sent.
   * Requestor sends alert to #sales and #customer-success on slack

6. **Email Launched**

   * The email team will provide stats minutes after launch, and at a cadence determined by the announcement team as necessary.
         - Note: Full email stats mature at 48 hours.
   * Inbox monitoring will be done by the requesting team, unless otherwise stated.

## Lists

1. For most emergency communications the requesting team should be providing a list as a Google Sheet in the issue request.
     * The Marketing Strategy and Perfomance team is able to pull a list from user table if necessary. Please [create an issue](https://gitlab.com/gitlab-com/marketing/marketing-strategy-performance/-/issues/new?issuable_template=list-request) with them.
     * Often, this is done using the [Marketing Contact Mart](https://gitlab-data.gitlab.io/analytics/#!/model/model.gitlab_snowflake.mart_marketing_contact) in DBT. The mark has fields for persons in SFDC marked as GitLab Admins, CustomerDB Owners, and Zoura Admins.
1. General security alerts already have a distro list built in marketo.
1. Seldomly, lists need to be created in Salesforce or Marketo using parameters found within the marketing database.
     * Marketo & Salesforce **do not** contain all records within the user table

### List considerations

* List loads greater than 20k take time. 100k+ may take hours/days.
* Each platform has their own limits as to size of CSV that can be uploaded.
* Lists greater than 100k may be subject to verification, so that we do not risk our sending reputation.
* Avoid listing any [RED Data](/handbook/support/workflows/sending_notices) in `mail-merge` fields

## Other considerations and questions for requestors

* Send / Reply-to email
  * Should there be an auto-responder?
  * Will someone be monitoring the email address?
  * If unmonitored, does the email mention that?

## Email platform to use

Marketing Operations will decide what the best email platform to send from will be. The decision is based on many factors.

* [Marketo](/handbook/marketing/marketing-operations/marketo/)
* [Gainsight](/handbook/sales/field-operations/customer-success-operations/gainsight/gainsight-gtm/#gainsight)

## Marketing Operations Set-Up

* Clone from [incident template](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/EBP9730A1)
  * Ensure that processing requests `Do not Route` executable campaign
  * Mark `Person source` for new leads as `GitLab DataMart`
  * `Person Status` should be set to `Raw` if Empty
  * Processing campaign can be set up as a trigger or batch depending on list size
* Set up reports if not using the email program defaults
* Follow remaining steps in the incident issue template

## Mops steps and checklist for large sends

For sends over 100k sending from Marketo, there are several steps to follow to decrease processing time - especially when leads being uploaded are mostly net-new

1. Check list over to remove any sanctioned countries and/or GitLab email addresses
1. Identify common processing campaigns to update with list suppression filters. These trigger off of `person created` which will significantly delay processing time and hold up all other Marketo campaign processes (outside of this program)
     1. [Generic Email Trigger](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SC45139B2ZN19)
     1. [OP-Generic Email Address Scoring](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SC3441A1ZN)
     1. [OptOuts after 9.10 - Trigger](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#SC17036A1ZN)
     1. [01a ZoomInfo Enrich - non API leads](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SC39715D4ZN19)
     1. [Add to nurture](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SC21890A1ZN19)
     1. [Spam catcher](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SC2929A1)
     1. [OP-Level/Seniority Segment Scoring](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SC48252A1ZN19)
     1. [OP-Role/Function Segment Scoring](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SC48153A1ZN19)
     1. [Generic Email Trigger 2023](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SC45139A1ZN19)
     1. [OP-Lead Classification - Created/Ongoing](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SC46997A1ZN19)
     1. [Populate Generic Email Checking Field](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SC45140B2ZN19)
1. Set up priority send controller campaign to improve speed of send
1. If send list is over 250,000, you must update the [smart campaign limits](/handbook/marketing/marketing-operations/marketo/#campaign-limits).
1. Ensure email is marked operational, otherwise you may need to update [email communication limits](/handbook/marketing/marketing-operations/email-management/#send-frequency)
1. After send, discuss with legal to delete unnecessary records out of Marketo.

### Common Troubleshooting

1. Email won't send
   * Check smart campaign limits, is the send over the limit amount?
   * If email isn't marked operational, you may have to update email comm limits, or mark the email as operational (if this is the case, make sure to double check your filters)
1. Email needs to send out faster than 15 minutes
   * Set up smart campaign to send the email vs using the email program default settings
