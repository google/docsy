---

title: 6sense
description: 6sense is an Account Based Marketing platform that uses a predictive model to identify the right customers at the ideal time
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## Overview

[6sense](https://6sense.com/) is a an [Account Based Marketing](/handbook/marketing/account-based-marketing/) platform that uses a predictive model to identify the right customers at the ideal time.

**This page contains public information about 6sense and how we use it. In addition to this page, additional, non-public information for GitLab team members can be found in the [internal handbook](https://internal.gitlab.com/handbook/marketing/marketing-strategy-and-platforms/marketing-operations/6sense/).**

## Implementation

We are currently implementing 6sense. Follow along in [this epic](https://gitlab.com/groups/gitlab-com/marketing/-/epics/3963)

## Integrations

6sense is integrated with Salesforce, Marketo, Outreach, Qualified, and Slack. In addition, user management is managed through Okta.

### Salesforce

6sense and Salesforce are integrated bi-directionally. Salesforce passes data to 6sense to inform and optimize the 6sense predictive data model, which is the foundation of our 6sense instance. The 6sense predictive data model takes in data from various sources including Salesforce campaign engagement acticity, to determine its intent model. 6sense also reviews the relevant opportunity definition in order to determine profile model. Finally, 6sense reviews Salesforce task and event activity to determine its reach model.

6sense data is also pushed to Salesforce. 6sense fields can be seen on the Account, Contact, and Lead objects in Salesforce.

Salesforce users with a 6sense log in can also leverage the 6sense iframe in Salesforce.

### Marketo

Marketo activity is passed to 6sense to inform the predictive models. Marketo form fills and email activity are included in the intent model. Outbound email activity from Marketo is used in the reach model.

### Outreach

### Qualified

### Integrate (DAP)

### Slack

The 6sense <> Slack integration can be used to send 6sense alerts via Slack. Documentation for how to set Slack alerts can be found [here](https://support.6sense.com/knowledge-base/360062370233-how-to-set-up-a-6sense-alert/#h_01EWYS24ZQXD947P52J1N5YFC4)(6sense login required).

## Support

- [6sense knowledge base](https://support.6sense.com/) (6sense user account required)
- `#mktgops` on Slack
- [6sense customer support](https://revcity.6sense.com/entry/connect/jsconnect)

## Access

The following teams have role-based access to 6sense:

- Account Based Marketing
- Marketing Campaigns
- Digital Marketing
- Field Marketing
- Sales & Business Development

6sense is access is managed through Okta. To request access, open an [access request](/handbook/business-technology/end-user-services/onboarding-access-requests/access-requests/). After receiving manager approval, tag the provisioner listed in the [tech stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml). When requesting access, please specify a role from the list below along with justification as to why this role is needed.

### User Configuration

The following steps must be taken in order for users to access both the 6sense platform and the 6sense integration with Salesforce:

| Action | Owner |  Owner |
| ------ | ------ | ------ |
|  User is added to the 6sense Okta Google Group. |  Marketing Ops | This creates their 6sense account |
| User activates their 6sense account by searching for and clicking on the 6sense Okta tile. | User | This activates their account in the 6sense platform |
| User is assigned the appropriate role in the 6sense platform. | Marketing Ops | By default, they will be assigned `View Only` after activating their account in Okta. This ensures that the user is able to take appropriate actions in the platform |
|  User's Salesforce profile is assigned the `6sense User` permission set. | Sales Systems | This allows the user to see the 6sense dashboard iframe in Salesforce |
| User's Salesforce profile has the `6sense Sales Intelligence` visual force enabled on their page layouts. | Sales Systems | This ensures that the 6sense custom fields and iframe appear on the Account page layouts in Salesforce |

### 6sense User Roles

- Operation User: This role has full access to 6sense insight features, orchestration, alerts, administrator reports, and settings related to integration and sales enablement. It also has view access to campaigns and some other settings.
- Marketing User: This role has full access to 6sense insight features, campaign features, alerts, administrator reports, and view access to some settings. Additionally, it has edit access to the Ad Inventory Exclusion list.
- View Only User (default): This role has view access to all features and settings that Marketing User has access to.
- Insights User: This role has full access to 6sense insights for segments and accounts.
- Sales User: This role has full access to 6sense insights for segments and accounts.

## Training Resources

### Sales Dev Training Recordings

- [EMEA 6Sense Training](https://www.youtube.com/watch?v=fOPXzpcs_5k)
- [AMER 6Sense Training](https://www.youtube.com/watch?v=z3fmYcoiRXs)

### Marketing Trainings

- [2023-09-27: 6sense Field Marketing Enablement Option 1](https://youtu.be/DwPZIp2L1dw)
- [2023-09-27: 6sense Field Marketing Enablement Option 2](https://youtu.be/SeWPi1flQZM)

## Orchestrations

### Add Lead to Sequence from the Account

With 6Sense, you can use segments to monitor the intent and engagement of target accounts from the Sales Intelligence dashboard in Salesforce.

1. In the Sales Intelligence dashboard, review the `Profile Fit`, `Account Reach` and `Buying Stage` for accounts showing signals for buyer intent.
2. Under Persona Map, you’ll be able to identify the leads that fit the ideal customer profiles with a strong `Engagement Grade`.
3. Select the lead and `add to Outreach`
4. Outreach will prompt you with Outreach Sequence, pick the sequence you would like to add the lead to.

### Acquire New Contacts to Outreach Sequence

You can add a segment to an Outreach Sequence directly on the 6Sense Naive Web Application. To do so, you’ll need to create a new orchestration with the criteria: I want to `acquire new contacts` and add them to `an Outreach Sequence`.

Refer to the [Knowledge Base](https://support.6sense.com/knowledge-base/360062650793-getting-started-with-acquire-new-contacts-to-outreach-sequence/) (you must be logged in to access the knowledge base) for the step to step instructions.

## Segments

Segments drive every use case within 6sense, and consist of groups of accounts created based on user-selected filters, list uploads, or CRM synchronizations. More information about 6sense segments can be found [here](https://support.6sense.com/knowledge-base/360060411613-segments-overview/).

6sense segment names sync to Salesforce via an orchestration. In order for a segment to sync to Salesforce, the segment must be published. If a segment is unpublished, the record of that segment will be removed from Salesforce. This is a good way to keep the 6sense segment name field relevant, however is important to note for historical reporting purposes.  

### Publishing Segments

Publishing a 6sense segment extends its account membership to specific 6sense experiences and external system workflows. Publishing a segment enables us to better cross-reference segments and accounts, and is an effective method to communicate messaging recommendations, increase visibility into the status of segments and accounts, and facilitate internal alignment. Marketing users can use this issue request template to request a segment get published in 6sense.

Only `admin users` and `operations users` are able to publish segments in 6sense. If you need to publish a segment in 6sense, please [open a new Marketing Operations issue](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=6sense_publish_segment_req).

To push a segment to Marketo, you'll need an Add to Audience orchestration. You can open a request by using this [Marketing Operations issue](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=6sense_add_audience_to_marketo). For more information on how it works, see this [internal handbook page.](https://internal.gitlab.com/handbook/marketing/marketing-ops-and-analytics/marketing-operations/6sense/#add-audience-to-marketo-list)

## Best Practices

### Folder Naming Convention

{: .no_toc}
In order to keep segments and the general platform organized, please use the following folder naming convention:

- `Team Name - FY## Q# - Name of Campaign/Account List`

For example:

- `ABM - FY24 Q2 - Tier 1 Accounts`
- `XDR - FY24 Q3 - Campaign Name`

### Tags

{: .no_toc}
Tags should be used to help organize lists by topic. For example, you may want to use a tag for a large campaign, segment (SMB, MM, etc.), tier, etc.  

### Sales Dev Naming Convention

{: .no_toc}
Sales Dev users should name any lists with the same naming convention that is used in Outreach. The naming convention guidance can be found on the [Outreach Handbook Page](/handbook/marketing/marketing-operations/outreach/#sequences).

## Useful Terms

**Reach Activities:**
Sales and Marketing activities performed by your team that engage with the account. This may include activities such as contacting people from the account or adding them to campaigns.

**Engagement Activities:**
Activities performed by people from the account that indicate interest in your company or product offerings. This may include activities such as email and ad clicks, form-fills, or web research related to your product.

**Engaged Contacts**
Generally means that the Account has been participating in MAP / CRM activities such as (email clicks, form fills, CRM Campaign Members which are tied to engagement ie: positive response, attended webinar, etc). So it’s based on taxonomy and then their engagement score is calculated based on how much a contacts/leads from the Account have been participating in those activities.

**6 Qualified Accounts (6QA)**
Qualified by 6sense, a 6QA is an account that is primed for sales engagement.

Due to increases in intent, profile fit and engagement, a 6QA occurs when an account moves from an earlier buying stage (Target, Awareness or Consideration) to a later buying stage (Decision or Purchase), making them qualified for sales activity. It is marketing’s goal to drive accounts to either inbound or 6QA.

6QA status is true when 1 AND 2 are met:

1. `Account Profile Fit` for GitLab is equal to Moderate or Strong.
2. `Account In-Market Stage` for GitLab is equal to Decision or Purchase.

**6sense Account Buying Stage Definitions**

- **Target** - The buyer may not realize a problem exists, but may fit within the seller’s TAM.
- **Awareness** - The buyer realizes they have a problem. The buyer is doing educational research to more clearly understand, frame, and identify their problem.
- **Consideration** - The buyer defines their problem and researches options to solve it. The buyer is researching all of the available options to solve the defined problem.
- **Decision** - The buyer chooses a solution. The buyer is narrowing a list of potential vendors to ultimately make a purchase decision.
- **Purchase** - The buyer commits to a specific solution and justifies the reasons for the purchase.

If you are looking for the definition of term not listed above, please visit the [6sense glossary](https://6sense.com/glossary/).
