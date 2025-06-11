---
title: Traction Lead Complete
description: Traction Lead Complete Overview
twitter_image: /images/tweets/handbook-marketing.png
twitter_site: '@gitlab'
twitter_creator: '@gitlab'
---

- Overview
- Lead Routing Workflow
- Partner lead management
- Contact routing workflow
- Account routing workflow
- Lead routing request or question?
- Traction Lead Flow update process

## Overview

Traction Lead Complete is an application within Salesforce to process and assign lead records, as well as matching those leads to accounts.

Traction assigns each MQL (Marketing Qualified Lead) to the member of the Sales Development organization who is responsible for engagement and qualification of that individual dependant on the workflow. Currently we are only using Traction for lead routing.

## Lead Routing Workflow

To read in more detail how our lead routing logic is set up, please visit the internal handbook page on [Traction](https://internal.gitlab.com/handbook/marketing/marketing-strategy-and-platforms/marketing-operations/traction/).

## Partner Lead Assignment

In the first stage of the main lead assignment flow, Traction runs through its assignment rules to filter for Channel Partner and Distributor leads. They are assigned using campaign member based routing and primarily fields on the campaign member object. Most Channel related records are assigned to `Partner Queue` and passed to the Channel Partners via [Vartopia Prospect module](/handbook/marketing/marketing-operations/vartopia/), where they can accept, assign and qualify the leads. If you are having problems with syncing partner leads to Vartopia, review the Vartopia [sync requirements](/handbook/marketing/marketing-operations/vartopia/#troubleshooting-vartopia-sync).

Note: Alliance partner leads will be assigned to members of the Sales Development team for qualification.

GitLab collaborates with Channel Partners to develop co-marketing campaigns including Partner sponsored, MDF funded, free trial and joint partner campaigns.

### Partner Sponsored Event

GitLab allows Channel Partners to sponsor our owned events. Traction completes the following steps when it recognizes a new campaign member is associated with a [partner sponsored event](/handbook/marketing/channel-marketing/partner-campaigns/#partner-sponsored-event):

1. Reviews the lead fields for  `Lead Acquisition Source` = `Partner Sponsored Event` and `Vartopia Partner Account` is not empty
1. Checks the lead fields for  `[Vartopia] Recalled Date` is empty and `Partner Recalled` equals `False`
1. Updates `Prospect Share Status` = `Sending to Partner` and `Partner Prospect Status` = `Qualifying` which enables the lead to be synced into the Vartopia Prospect module
1. Assigns the lead to `Partner Queue`.

### MDF Campaign

Traction completes the following steps when it recognizes a new campaign member is associated with a [MDF campaign](/handbook/marketing/channel-marketing/partner-campaigns/#partner-only-campaigns---mdf-funded):

1. Reviews the campaign field for `Will there be MDF funding` = `Yes` and lead field for `Vartopia Partner Account` is not empty.
1. Checks the lead fields for  `[Vartopia] Recalled Date` is empty and `Partner Recalled` equals `False`
1. Updates `Prospect Share Status` = `Sending to Partner` and `Partner Prospect Status` = `Qualifying` which enables the lead to be synced into the Vartopia Prospect module
1. Assigns the lead to `Partner Queue`.

### Free Trial Campaign

Traction completes the following steps when it recognizes a new campaign member is associated with a [free trial campaign](/handbook/marketing/channel-marketing/partner-campaigns/#trials-from-partners):

1. Reviews the campaign name if it starts with  `Partner - Trial` and the lead field for `Vartopia Partner Account` is not empty.
1. Checks the lead fields for  `[Vartopia] Recalled Date` is empty and `Partner Recalled` equals `False`
1. Updates `Prospect Share Status` = `Sending to Partner` and `Partner Prospect Status` = `Qualifying` which enables the lead to be synced into the Vartopia Prospect module
1. Assigns the lead to `Partner Queue`.

### Joint Partner Campaign

Traction completes the following steps when it recognizes a new campaign member is associated with a [joint partner campaign](/handbook/marketing/channel-marketing/partner-campaigns/#joint-gitlab-and-partner-events):

1. Reviews the campaign fields for `Is a Channel Partner Involved?` = `Yes` and  `Campaign Member Status` with regards to partner engagement, and the lead field for `Vartopia Partner Account` is not empty.
1. Verifies the campaign member is not actively worked by GitLab, thus `Person Status` is not `Accepted`, `Qualifying` nor `Qualified`, or `Actively Being Sequenced` = `False`. <br>
If all above is
   1. True, then Traction updates the `Partner Prospect Status` to `Qualifying`, `Prospect Share Status` = `Sending to Partner`, then assigns the lead to `Partner Queue`
   1. False, then Traction assigns to appropriate SDR.

### Exceptions to This Rule

When a lead/contact engages with GitLab in any shape or form, for example, via an inbound marketing request, the lead/contact owner is responsible for following up with the partner lead, regardless of their stage within the partner lead lifecycle.

## Contact Routing

The scope of the contact assignment flow is very limited. Records are only processed by the lead assignment flow if they are meant to be managed by partners via the Vartopia Prospect module.

All other [SFDC contact ownership rules](/handbook/sales/field-operations/gtm-resources/#changing-contact-ownership-in-salesforce) are maintained outside of Traction. If you have questions or concerns about contact routing outside of partner record management processes, please reach out to [Sales Systems](/handbook/sales/field-operations/sales-systems/).

## Account Routing

All account routing is handled by Enterprise Territory Management (ETM). If you wish to learn more about this, please visit the sales operation handbook.

## Lead routing request or question?

### Request an SDR alignment update

New hire? Territory change needed? Have an SDR on your team who's going to be out of the office? If requesting a proactive update to the lead routing workflow, open an issue using the [LeanData change request issue template](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=leandata_change_sdralignment).

### Experiencing a lead routing problem?

Lead volume low? Receiving leads from an account or territory you're not assigned to? If you think you've found a bug :bug: in existing lead routing logic, open an issue using the [bug request issue template](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=bug_request).

### General questions

Open a [Marketing Operations issue](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new) following the format in the issue template.

## Traction Lead Flow Update Process

- For any updates in logic needed, we will first build the logic in the Staging SFDC environment, test appropriately and then upload the new graph to production.

- To make sure you are working off the latest flow, please export the live graph from production and import it into staging before making your edits. .
