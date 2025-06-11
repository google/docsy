---
title: "Security Incident Communications Plan"
description: " "
weight: 40
controlled_document: true
---

## Purpose

GitLab takes the security of our clients' information extremely seriously, regardless of whether it's on GitLab.com or in a self-managed instance. In keeping with GitLab's [value of transparency](/handbook/values/#transparency) we believe in communicating about security incidents clearly and promptly.

## Scope

This communication response plan maps out the who, what, when, and how of GitLab in notifying and engaging with internal stakeholders and external customers on security incidents. **This plan of action covers the strategy and approach for security events which have a 'high' or greater impact as outlined in [GitLab's risk scoring matrix](/handbook/security/security-assurance/security-risk/storm-program/#risk-factors-and-risk-scoring).**

## Roles & Responsibilities

| Role | Responsibilities |
| ----- |------------|
| GitLab Team Members | Responsible for following the requirements in this procedure |
| SIRT | Responsible for implementing and executing this procedure |
| SIRT Management (Code Owners) | Responsible for approving significant changes and exceptions to this procedure |

## Procedure

## What is an incident?

The GitLab Security team identifies security incidents as any violation, or threat of violation, of GitLab security, acceptable use or other relevant policies.  You can learn more about how we identify incidents in the [GitLab security incident response guide](/handbook/security/security-operations/sirt/sec-incident-response/#incident-identification).

### 💁 Corporate incident response

For Support or Infrastructure managed incidents where external communication guidance is needed, please see the [corporate communications incident response plan](/handbook/marketing/corporate-communications/incident-communications-plan/#defining-the-scopeseverity-of-a-potential-incident) and engage that team via #corp-comms in slack.

### 👷 Infrastructure incident response

For Infrastructure incidents, please follow the [infrastructure incident management and communication process](/handbook/engineering/infrastructure/incident-management/#communication).

## Defining the scope/severity of an incident

The `Security Engineer On-Call` will determine the scope and [severity](/handbook/security/security-operations/sirt/sec-incident-response/#incident-severity) and [potential impact](/handbook/security/security-assurance/security-risk/storm-program/#determining-the-impact-of-a-threat-event) of the security incident. Once the potential impact has been determined, implementation of the appropriate internal and external communications strategy should begin.

### Roles and responsibilities in a Security incident

#### Security team roles and responsibilities

| Role | Responsibilities |
| ----- |------------ |
| **Security Engineer on Call (SEOC):** | This is the on-call Security Operations Engineer. The individual is the first to act, validate, and begin the process of determining severity and scope. |
| **Security Incident Manager on Call (SIMOC):** | This is a Security Engineering Manager who is engaged when incident resolution requires coordination across multiple parties. The SIMOC is the tactical leader of the incident response team, typically not engaged to perform technical work. The SIMOC assembles the incident team by engaging individuals with the skills, access, and information required to resolve the incident. The focus of the SIMOC is to keep the incident moving towards resolution, keeping stakeholders informed and performing SecCMOC duties. |
| **Security Communications Manager on Call (SecCMOC):** | This is the Security Incident Manager On-Call (SIMOC), Security Incident Commander or Security Assurance Engineer who will coordinate external communications efforts according to this security incident response plan and liaise across the extended GitLab teams to ensure all parties are activated, updated and aligned. |
| **Security External Communications:** | This function partners with and advises incident response teams in reviewing and improving messaging for external audiences (including customers, media, broader industry). This role laises with marketing teams for any necessary reviews or messaging deployment. This function should be engaged **once first draft content has been developed** using the [Security incident external response issue template](https://gitlab.com/gitlab-com/gl-security/security-communications/communications/-/blob/master/.gitlab/issue_templates/security-external-incident-or-event-response-template.md). |

### More about the CMOC responsibilities

As security practitioners and incident response engineers, our security assurance and security operations teams and engineers are best positioned to develop initial messaging and serve in the `CMOC`/`Communications manager on call` role.

**Each team-appointed `CMOC` is the DRI for**:

- Opening the [Security incident external response issue template](https://gitlab.com/gitlab-com/gl-security/security-communications/communications/-/blob/master/.gitlab/issue_templates/security-external-incident-or-event-response-template.md) and tagging in potential stakeholders and contributors
- Drafting the initial message(s)
- Tracking development and deployment of the various content and
- Identifying key stakeholders for contribution, review and approval (support, security/SIRT leadership, legal, etc)
- Routing and securing approvals from various parties (support, security/SIRT leadership, legal, etc)
- Keeping stakeholders updated and informed on the progress of communications development in the related incident response slack channel and issue(s)

### More about the Security External Communications function responsibilities

**The `Security External Communications function` is the DRI for:**

- Editing and improving first drafts **provided by** `CMOC`
- Advising on appropriate channels and forms of communication needed
- Acting as an approval point on final messaging to ensure it's ready for external use
- Liaising with PR and corporate communications for additional reviews and/or messaging needs (public/media statements)
- Deploying the messaging via collaboration with our PR (media statement), Content Marketing (blog post) and Marketing Operations teams (email response)
- Posting final communications materials to slack channels (`#developer-relations`, `#social_media_action`, `#sales`, `#security-division` and `#customer-success`) for awareness and use.
  - `Support manager on call` will manage support team awareness

## Extended team roles, responsibilities and points of contact

- **Marketing Operations:** Responsible for sending incident-related email to impacted parties in a security incident.  This group has established a [Marketing emergency response process](/handbook/marketing/emergency-response/#marketing-emergency-response) and is engaged by [creating an incident communication request](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=incident_communications) using the `incident_communications` template, tagging in the assigned timezone's `coverage owner` and posting the issue in the #mktgops channel in Slack.
  - Marketing Ops can send emails through MailGun or Marketo. This group will determine based on the information provided what the best platform is for distribution. If a custom distribution list needs to be created, the data team may need to be involved.

- **Support Team:** Using background information and prepared responses provided by the Security Engineer On Call and Communications Manager On Call, our Support Team will triage and respond to customer communications stemming from the security incident. Contact the on-call manager via `#spt_leadership` in Slack. If it's urgent [page the `Support Manager On-call`](/handbook/support/on-call/#engaging-the-on-call-manager) using `/pd-support-manager` command in Slack. To ensure this group has early awareness on security incidents and events they are autotagged as an FYI in the security-external-incident-or-event-response template.

- **Developer Relations:** May need to respond to customers and the general public via social channels, as such should be engaged before public-facing materials are released. Any prepared responses or FAQs should be provided to assist with their interactions. Contact this group in `#developer-relations` or any Slack channel by pinging `@devrel-team`. To ensure this group has early awareness on security incidents and events they are autotagged as an FYI in the `security-external-incident-or-event-response` template.

- **Designated Approvers:** This is the group of individuals who act as reviewers and approvers across each piece of communications developed for a security incident. It includes representatives from Security, Support, Customer Success, Legal, Corporate Communications and Investor Relations.

## Communicating internally

Security incidents can be high-pressure, high-stress situations.  Everyone is anxious to understand the details around the investigation, scope, mitigation and more. Ensuring that stakeholders across security, infrastructure, engineering and operations teams are informed and engaged is one of the chief responsibilities of the Security Incident Manager On Call. The `Security Incident Manager On Call` should focus on providing high-level status updates without delving too deeply into the technical details of the incident, including:

- Current Risk
- Users Impacted (some, many, all?)
- Services Impacted (production, enterprise apps, other)
- Timeline of events
- Mitigation steps that have been taken
- Current status of the incident
- Next steps

## Communicating with GitLab team members

Any time there is a service disruption for team members, the CMOC should post details regarding the disruption and related issue(s) in #whats-happening-at-gitlab, and cross-post in any related channels. It is important to identify if this is a production incident affecting gitlab.com or a service used by the organization.

### Incident response channel on Slack

In the cases of incidents that are on-going and require constant communication the `Security Engineer on Call` will set up an incident response Slack channel. All security incident team members and extended POCs should be invited. If the nature of the incident allows, the Slack channel will be public to GitLab and a link to this channel will also be shared in `#security-division` Slack channel to increase visibility.

### Engaging key internal stakeholders (when/how)

| Group & Contacts | When to Engage | DRI to Engage | At what Cadence | In what Channel |
| ------ | ------ | ------ | ------ | ------ |
| Director of Security Operations | For S1 incidents immediately upon determination of the S1 severity rating | `SIMOC/CMOC` | 30 minute intervals (unless otherwise requested) | In incident response Slack channel |
| VP of Security | For S1 incidents immediately upon determination of the S1 severity rating | `Director of Security Operations` | 30 minute intervals (unless otherwise requested) | Slack direct message |
| Broader e-group | Immediately in cases of a data breach or an RCE with evidence of exploitation | `VP of Security` | 30 minute intervals (unless otherwise requested) | `#e-group` Slack channel |
| Sr. Director of Corporate Marketing and Director of Corporate Communications | Immediately, if the incident has been publicly reported or if there is a regulatory requirement to make an announcement. In other cases, once the full impact and associated risk has been determined. | `SIMOC/CMOC` | Continuous | In incident response Slack channel |
| Legal | If GitLab EE customers are impacted, or if the security incident includes a data breach including but not limited to: <br> Exposure of PII / Personal Data <br> Private Projects <br> Financial Information | `VP of Security` | Continuous | Incident response Slack channel |
| `Designated key approvers`| As soon as we know we'll need to communicate with customers | `CMOC` | Continuous | Incident response Slack channel |

## Communicating externally

External communications should happen as soon as possible after the scope and impact of the security incident is determined, using concise and clear language. The first external communications are directed to affected parties. Examples include: Affected customers and third parties (including [JiHu](/handbook/ceo/office-of-the-ceo/jihu-support/)), providers of products, services or organizations involved in the supply chain for system components as related to the incident. Regulatory authorities are contacted based on incident scope, regulatory and legal requirements.

### Turnaround on customer messaging

Once it has been determined that external response is needed, the SIRT team should aim to develop, gain approval on a final customer communication and distribute and/or publish within 6 hours for an S1 severity vulnerability.

## Process for security incident external communications

1. Once we've determined that we need to make an external statement or communicate with customers in some way, [open a new issue using the Security incident external response issue template](https://gitlab.com/gitlab-com/gl-security/security-communications/communications/-/blob/master/.gitlab/issue_templates/security-external-incident-or-event-response-template.md). This issue will be used by the `SIMOC/SecCMOC` to track content development, reviews and approvals.
1. The new security incident external response issue should be assigned to the `SecCMOC`.
1. Once all the actions under the "CMOC actions to take upon opening this issue" section are completed and a first draft(s) is/are in place, tag `@heather` into the issue for first review and consult on communications forms/channels (more details below).

## Communications review, approval and deployment process

1. Once all of the various suggested communications is ready, the SecCMOC should tag `@heather` in the related security incident external response issue and security incident slack channel for first round review and edits.
1. In parallel, our `Security External Communications` team will engage the appropriate marketing teams for support (PR, Marketing Ops, Content teams) and begin creating the related issues for parallel marketing support and message deployment efforts.
1. When `Security External Communications` has completed their review, the `SecCMOC` should route the communication doc to the `designated key approvers` as outlined below for their collaboration and review; being sure to note the time at which all approvals must be achieved (targeted deployment time is 6 hours, and includes 1-2 hours for information gather and communications drafting, and 1 hour of deployment time for blogs to be published and emails to be deployed). At this time, the `designated key approvers` have 30 minutes to review and make any necessary edits to the doc. Reviews must be provided or a stand-in appointed within this 30 minute time limit.
1. Once all feedback and edits have been synthesized by the `SecCMOC`, the `designated key approvers` should be tagged in slack for their final review and approval. This review and approval process should take no more than 30 minutes and approvers should mark their approval in the `approval matrix` at the top of the working incident response comms google doc.
1. When the communication(s) is/are final, our `Security External Communications` will work with the appropriate marketing and communications teams to deploy the communications to the appropriate external and internal audiences.
1. Our `Security External Communications` will ensure all final materials and associated deployment details are noted in the related communications issue and close the issue.

### Designated key approvers

Our intent is to provide clear and accurate information to GitLab users as quickly as possible. In the case of an S1 (critical) vulnerability, the targeted turnaround time on approved and deployed communications is 6 hours.  Because of this accelerated response window, our security team (SecCMOC or Incident Commander) will announce the targeted cut-off time for approvals at the beginning of the review and approvals process (6 hours from the start of communications drafts) and will move forward, if needed at that time, when at least 2 of the 4 required groups (Security, Legal, Customer Success and Investor Relations) have approved. See below for more information.

| Group | **Blog** | **Customer Email** | **FAQs for Support Teams** | **Media Response** | **Social/Forum Response** |
|------------------------------|------|----------------|------------------------|----------------|-----------------------|
| `VP of Security` | Approver | Approver | Approver | Approver if quote attributed to Security, FYI otherwise | FYI Only |
| `Senior Director of Legal, Privacy and Product` | Approver | Approver | Approver | Approver | Approver |
| `VP Customer Success` | Approver | Approver | FYI Only | Approver | FYI Only |
| [Support Manager on Call](/handbook/security/security-operations/sirt/security-incident-communication-plan/#extended-team-roles-responsibilities-and-points-of-contact) | FYI Only | FYI Only | FYI Only  | FYI Only | FYI Only |
| `Director of Corp Comms` | FYI Only | FYI Only | FYI Only | DRI/Contributor | FYI Only |
| `VP of Investor Relations` | Approver | Approver | FYI Only | Approver | FYI Only |

{{% alert title="**Note**" color="primary" %}}
See [this confidential issue](https://gitlab.com/gitlab-com/gl-security/security-communications/communications/-/issues/440#approval-or-fyi-only) for contact details
{{% /alert %}}

#### Designated back-up approvers (engaged if primary reviewer is unavailable or unresponsive)

**- For the "required" approvers, we need at least 2 designated back-up approvers.**

- Security: If `VP Security` is not available, one of the `Security directors` may approve, if not available move to `VP of Engineering`.
- Legal: `Senior Director of Legal, Privacy and Product` can approve. If not available, then move to `Legal Counsel`, and then move to `CLO`.
- Customer Success: `VP Customer Success` can approve. If not available, `Snr Director, Customer Success Managers`, then `Director of Customer Success, Public Sector`.
- Support Team: `Support Manager on call` can approve. If not available, move to a member of [Support Senior Leadership](https://gitlab.com/groups/gitlab-com/support/managers/senior/-/group_members?with_inherited_permissions=exclude), then to [Support Managers](https://gitlab.com/groups/gitlab-com/support/managers/-/group_members?with_inherited_permissions=exclude) if needed.
- Corporate Comms: `Director of Corp Comms` can approve. If not available, move to `Manager, Public Relations` and then move to `Manager, Corp Comms` if needed.
- Investor Relations: `VP of Investor Relations` can approve. If not available, move to `Chief Financial Officer`, and then move to `VP Finance and Business Technology` for back-up approval.

{{% alert title="**Note**" color="primary" %}}
See [this confidential issue](https://gitlab.com/gitlab-com/gl-security/security-communications/communications/-/issues/440#designated-back-up-approvers) for contact details.
{{% /alert %}}

### Agreed upon response time for `designated key approvers`

**`Designated key approver` response time: 30 minutes**

Per our crisis comms firm and GitLab's Corporate Incident Response plans, each approver has 30 minutes to respond and review communications (providing feedback or edits) before we engage back-ups. Once feedback from the approvers has been received, reviewed and consolidated, a final review from approvers will be requested and each approver has 30 minutes response time to provide their approval. If we are nearing the established deploy time for communications and a given teams' review and approval is not achieved within 30 minutes, we will move forward to finalization and deployment once we have approval from at least 2 of the 4 required groups (Security, Legal, Customer Success and Investor Relations). See below for more information.

### Contacting `designated key approvers` on an urgent basis

- See [this confidential issue](https://gitlab.com/gitlab-com/gl-security/security-communications/communications/-/issues/440#contacting-approvers) for more information on how to contact `designated key approvers`.

### Engaging designated backUp approvers

If 30 minutes has passed and the SecCMOC has not heard from a specific `designated key approver`, we move to engage all of that individual's `designated back-up approvers` in the incident-related slack channel and issue. If we are nearing the established deploy time for communications and a given teams' review and approval is not achieved within 30 minutes, we will move forward to finalization and deployment once we have approval from at least 2 of the 4 required groups (Security, Legal, Customer Success and Investor Relations).

## Communications channels and forms

The communications channels and forms that should be used in an incident or event can vary but should align with our need to be responsive to our customers and our transparency value, and be balanced with the potential risk and exposure to customers.

**Commonly used forms and channels of communication:**

- Our most common form of customer response is via direct email communications to affected customers.
- When a deeper dive response is needed, or to ensure broader coverage on a security incident or event, a blog post may be developed on an urgent basis.
- See [deeper dive explanations on forms and channels](/handbook/security/security-operations/sirt/security-incident-communication-plan/#potential-channels-for-use-in-a-security-incident) for consideration
- Communication to [JiHu](/handbook/ceo/office-of-the-ceo/jihu-support/) should happen via the [#security-vulnerability](https://gitlab-jh.slack.com/archives/C039R937PAN) channel within the JiHu Slack workspace. GitLab team members Dominic Couture, James Ritchey, Jerome Ng, Mek Stittri and Kevin Chu have access to this channel.

## Helpful templates and runbooks

- 👉 Our [`Security external incident or event response template`](https://gitlab.com/gitlab-com/gl-security/security-communications/communications/-/blob/master/.gitlab/issue_templates/security-external-incident-or-event-response-template.md) (this is an internal template) has links to templates that can be used (make a copy)to start various communications.

- 📝 Security incident communications runbooks are located [here](https://gitlab.com/gitlab-com/gl-security/runbooks/-/tree/master/communications) (internal only).

## Preparing and enabling external facing teams

It is important to keep in mind, **any time we are communicating externally, we need to advise our support, customer, social and developer relations teams that we'll be making external communication about an issue that affects customers and/or the community**.

For this reason, each incident response (direct email, media statement, blog post, etc) should have accompanying:

- Social media statement
- FAQs for our Support and customer-facing teams

## On-going, live incidents on GitLab.com

For on-going, live site incidents on GitLab.com, updates are provided by the `SIMOC/CMOC` through status.io to [https://status.gitlab.com/](https://status.gitlab.com/) and the [@GitLabStatus](https://twitter.com/GitLabStatus) twitter handle.

## External statements and other public, official communications

Depending on scope, impact or risk associated with the incident, our Corporate Communications and Marketing team may determine that additional outreach is necessary. Any official statements about the security incident would be made by GitLab's Director of Corporate Communications, VP of Corporate Marketing, CMO or VP of Security.

## Other helpful information

### Potential channels for use in a security incident

| Communications Channels | Purpose/Message | Additional Details |
| ------ | ------ | ------ |
| Incident Response Customer Email | Provides incident background, response, potential, impact, follow-up actions, and who to contact with questions. | Drafted by SIMOC/CMOC and reviewed by DRIs from Support, Legal, External Comms and Security. Sent from [incident-response@gitlab.com](mailto:incident-response@gitlab.com). Should be in **plain text** with **no link tracking**. If an accompanying blog post is published, blog should be linked. |
| Mitigation and response blog post | Details the background, GitLab response and any action required by our customers. | Developed when it is determined that a longer, more-in-depth response is needed, Content for the blog post is provided by the `SIMOC/CMOC`, and reviewed and approved by [designated key approvers](/handbook/security/security-operations/sirt/security-incident-communication-plan/#designated-key-approvers). The content team performs copyedits and merges. **Note: collaboration and work on the response blog post should happen in the related incident response channel on slack.** |
| GitLab Security Release Alert/Email | Indicates required action for customers and links to related mitigation and response blog. | Email sent to opt-in security notices distribution list. If a related blog post has been published, this email should include a link. Prepared and sent by `Security External Communications` or `Marketing Ops`, Sent to Security Notices distro through Marketo. Users can sign up for this distribution list through our [Communication Preference Center](https://about.gitlab.com/company/preference-center/). |
| Customer Frequently Asked Questions (FAQs) | List of early customer questions and responses, or probable questions and responses. | Created by `SIMOC/CMOC` and Support DRI. Provided to appropriate [Support group](/handbook/support#channels). |
| Social media post | For distribution of related blog post, details our response to X issue. | `Security External Communications` engages `@devrel-team` in the incident response Slack channel. Provides Community Expert(s) with tweet text and blog link. GitLab social media team should also be alerted for ongoing awareness and monitoring, using `@social` in slack. |

### Sync meetings to develop and review customer communications

When appropriate, key stakeholders for contribution, review and approval should meet synchronously in a Zoom session to create and fine-tune customer communications (emails, FAQs, blog post, etc). Meeting synchronously in this case allows us to expedite the development of communications with key inputs from stakeholders in security, customer support and beyond and quickly move into the review stage.  These zoom sessions are recorded and will be linked into the related security incident external response issue.

## Exceptions

Exceptions to this procedure will be tracked as per the [Information Security Policy Exception Management Process](/handbook/security/controlled-document-procedure/#exceptions).

## References

- [Security Incident Response Guide](/handbook/security/security-operations/sirt/sec-incident-response/)
- [Security Communications Runbooks](https://gitlab.com/gitlab-com/gl-security/runbooks/-/tree/master/communications) (internal)
- [Incident Communications Plan](/handbook/security/security-operations/sirt/security-incident-communication-plan/)
- [Marketing Emergency Response process](/handbook/marketing/emergency-response/)

## Sample issue template for security incident communications review and approvals (publicly-accessible)

This [sample issue template](https://gitlab.com/gitlab-com/gl-security/security-communications/communications-templates/-/blob/main/sample-incident-communications-template.md) can used be to route, review and track approvals on the communications surrounding critical security incidents. As this is a sample, you would need to adjust/modify/tailor as necessary to suit your own organization's structure, processes and needs. Given that each organization is different and critical security incidents may vary, GitLab cannot guarantee any results with respect to your use of the template.
