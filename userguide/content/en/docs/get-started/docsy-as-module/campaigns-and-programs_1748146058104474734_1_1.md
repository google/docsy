---
title: "Campaigns and Programs"
description: "Campaigns are used to track efforts of marketing tactics"
---

## Campaigns

Campaigns are used to track efforts of marketing tactics - field events, webcasts, content downloads. The campaign types align with how marketing tracks spend and align the way records are tracked across three of our core systems (Marketo, Salesforce and Bizible) for consistent tracking. Leveraging campaign aligns our efforts across Marketing, Sales and Finance.

Marketing Ops partners with the Field Marketing and Corporate Events teams to provide Marketo program set-up and configuration, providing these teams with an internal partner to provide advise on the best technical set-up to reach their goals and streamlining more complex program requirements. Visit the [Marketo Program/Campaign Support page](/handbook/marketing/marketing-operations/campaign-operations/) for additional details.

### Campaign Cost Tracking

For information on how Marketing tracks campaign costs, please visit [this page](/handbook/marketing/#how-marketing-tracks-campaign-expenses).

### Campaign Type & Progression Status

A record can only progress **one-way** through a set of event statuses. A record _cannot_ move backward though the statuses.

i.e. Record is put into `Registered` cannot be moved backwards to `Waitlisted`

#### Conference

Any event that we have paid to sponsor, have a booth/presence and are sending representatives from GitLab (example: AWS re:Invent, DevOps Enterprise Summit). This also includes any virtual event that we sponsor and/or participate in that we do not own the registration but will generate a list of attendees, engagement.

In a virtual conference, GitLab will pay a sponsorship fee to receive a virtual booth and sometimes a speaking session slot or panel presence. Presence of a virtual booth is a requirement due to success criteria. [Read more](/handbook/marketing/virtual-events/external-virtual-events/#virtual-conferences).

For list loads greater than 5,000 `attendees`, Mktgops will need to confer with the `Field Marketing Director` on legitimacy of labeling the program members as `success` as doing so affects `Bizible Touchpoints`. Follow [directions here](/handbook/marketing/marketing-operations/campaigns-and-programs/#instructions-how-to-update-conferences-with-more-than-5000-attendees) on how to do this (MktgOps only).

**Bizible:** This is tracked as an _offline_ channel, because we do not host a registration page, and receive a list of booth visitors post-event. Touchpoints for offline channels are created through our AMM (formerly known as Bizible) campaign sync rules that can be found in this [spreadsheet](https://docs.google.com/spreadsheets/d/1xR2Q7YKskfNaxclnfGOkK8Vi739zdKypQ6GgF9MLG58/edit#gid=92970564).

| Member Status | Definition | Success |
| ------------- | ---------- | ------- |
| No Action | default starting position for all records |  |
| Sales Invited | Invitation/Information about event sent by Sales/SDR |  |
| Sales Nominated | Sales indicated record to receive triggered event email sent by Marketing |  |
| Marketing Invited | Marketing geo-targeted email |  |
| Waitlisted| Holding state if registration is full will be moved to Registered if space opens| |
| Registered | Registered for event||
| No Show | Registered but no verification of attendance, presumed no show | |
| Meeting Requested | Meeting set to occur at conference |  |
| Meeting No Show | Scheduled meeting at conference was cancelled or not attended |  |
| Meeting Attended | Scheduled meeting at conference was attended | Yes |
| Attended| Attended the event| Yes |
| Visited Booth | Stopped by booth for any reason | Yes |
| Follow Up Requested | Requested to be followed up with by sales post event | Yes |
| Attended On-Demand | Watched/consumed conference materials post-event on-demand | Yes|

#### Content Syndication

White Paper or other content offer that is hosted by a third party.

**Bizible:** This is tracked as an _offline_ channel. Touchpoints for offline channels are created through our AMM (formerly known as Bizible) campaign sync rules that can be found in this [spreadsheet](https://docs.google.com/spreadsheets/d/1xR2Q7YKskfNaxclnfGOkK8Vi739zdKypQ6GgF9MLG58/edit#gid=92970564).

| Member Status | Definition | Success |
| ------------- | ---------- | ------- |
| No Action | default starting position for all records |  |
| Downloaded | Downloaded content | Yes |

#### Direct Mail

This is when a package or piece of mail is sent out.

**Bizible:** This is tracked as an _offline_ channel. Touchpoints for offline channels are created through our AMM (formerly known as Bizible) campaign sync rules that can be found in this [spreadsheet](https://docs.google.com/spreadsheets/d/1xR2Q7YKskfNaxclnfGOkK8Vi739zdKypQ6GgF9MLG58/edit#gid=92970564).

| Member Status | Definition | Success | E-gift Card or Physical Gift |
| ------------- | ---------- | ------- | ------------ |
| No Action | Default starting position for all records |  | Not applicable |
| Sales Nominated | Sales indicated record to receive triggered event email sent by Marketing |  | Not applicable |
| Processed | Physical gift shipping request is being processed  |  | Physical |
| Sent | Email with e-gift card has been sent to recipient |  | E-gift card |
| Opened | The prospect has opened the Reachdesk offer emailed to them |  | E-gift card |
| Claimed | The recipient has claimed the Reachdesk gift | Yes | E-gift card |
| Clicked | The prospect has clicked the link in the offer emailed to them |  | E-gift card |
| Shipped | The recipient's gift has been shipped |  | Physical |
| Delivered | The selected gift has been successfully delivered to the recipient | Yes | Physical |
| Cancelled | The recipient has requested their gift be cancelled |  | Physical |
| Returned | The recipient has returned their gift |  | Returned |

#### Email Send

This program type is used in conjunction with Marketo email programs. This program type is available to sync into SFDC, but should only be synced into SFDC if the email send in question has significant business impact that needs associated opportunity tracking. Please keep in mind that some email addresses will block Marketo's tracking, so these cannot be 100% accurate.

**Bizible:** This is technically tracked as neither an _online_ or _offline_ channel. Touchpoints are technically not created by the program type itself, but rather the action of an email recipient clicking an in-email link and visiting a Touchpoint enabled website.

| Member Status | Definition | Success |
| ------------- | ---------- | ------- |
| No Action | Default starting position for all records |  |
| Member | Added to program. If still in this status after the email send, it can be assumed they were blocked from being sent the email |  |
| Email Bounced | Marketo's email tracking detected the recipient email address bounced   |  |
| Email Delivered | Marketo's email tracking detected the recipient email address received the email sent |  |
| Email Opened | Marketo's email tracking detected the recipient opened the email |  |
| Clicked In-Email Link | Marketo's email tracking detected the recipient opened a link found in the email | Yes |
| Replied to Email | Likely to be unused step as we do not prompt for email replies |  |
| Unsubscribed | Marketo's email tracking detected the recipient unsubscribed from further communications via the in-email preferences link |  |

#### Executive Roundtables

This is used for campaigns that can either be organised through a 3rd party vendor or GitLab, covering both in-person and virtual roundtables. It is a gathering of high level CxO attendees run as an open discussion between the moderator/host, GitLab expert and delegates. There usually aren't any presentations, but instead a discussion where anyone can chime in to speak. The host would prepare questions to lead discussion topics and go around the room asking delegates questions to answer. [Read More](/handbook/marketing/virtual-events/external-virtual-events/#overview).

Program type is included on the smart campaign meant to clear `dietary restriction` related fields. 7 days after an event's program statuses are recorded, the fields are cleared automatically.

**Bizible:** This is tracked as an _offline_ channel. Touchpoints for offline channels are created through our AMM (formerly known as Bizible) campaign sync rules that can be found in this [spreadsheet](https://docs.google.com/spreadsheets/d/1xR2Q7YKskfNaxclnfGOkK8Vi739zdKypQ6GgF9MLG58/edit#gid=92970564).

| Member Status | Definition | Success |
| ------------- | ---------- | ------- |
| No Action | default starting position for all records |  |
| Sales Nominated | Sales indicated record to receive triggered event email sent by Marketing |  |
| Waitlisted | Holding state if registration is full will be moved to `Registered` if space opens |  |
| Registered | Registered for the event |  |
| Cancelled | Registered, but cancelled ahead of the event | |
| No Show | Registered, but did not attend the event |  |
| Attended | Attended the Event | Yes |
| Follow Up Requested | Requested follow up during the event | Yes |

#### Gated Content

White Paper or other content offer.

**Bizible:** This is tracked as an _online_ channel.

| Member Status | Definition | Success |
| ------------- | ---------- | ------- |
| No Action | default starting position for all records |  |
| Downloaded | Downloaded content | Yes |

#### Inbound - offline

**Bizible:** This is tracked as an _offline_ channel because touchpoints cannot be applied directly via online means, e.g. Qualified and PQL handraises. Touchpoints for offline channels are created through our AMM (formerly known as Bizible) campaign sync rules that can be found in this [spreadsheet](https://docs.google.com/spreadsheets/d/1xR2Q7YKskfNaxclnfGOkK8Vi739zdKypQ6GgF9MLG58/edit#gid=92970564).

| Member Status | Definition | Success |
| ------------- | ---------- | ------- |
| No Action | default starting position for all records |  |
| Requested Support | Took a handraise action to request support from the GitLab team ||
| Requested Contact | Filled out Contact, Professional Services, Demo or Pricing Request | Yes |

#### Inbound Request

Any type of inbound request that requires follow up.

**Bizible:** This is tracked as an _online_ channel.

| Member Status | Definition | Success |
| ------------- | ---------- | ------- |
| No Action | default starting position for all records |  |
| Requested Support | Took a handraise action to request support from the GitLab team ||
| Waitlisted | Submitted a request to purchase a future SKU  ||
| Requested Contact | Filled out Contact, Professional Services, Demo or Pricing Request | Yes |

#### Operational

This is used for non-traditional list uploads in which we are looking to a) avoid scoring the uploaded leads b) avoid tradition nurture emails c) fulfill some other various operational related task. e.g., educational conference list uploads.

**Bizible:** This is tracked as an _online_ channel because we participated in an event, where applicable.

| Member Status | Definition | Success |
| ------------- | ---------- | ------- |
| Member | default starting position for all records |  |
| Registered | Registered (presumably did not attend) |  |
| Attended | Attended live event |  Yes |
| Attended Virtually | Attended an event virtually. Attendance can be live or post-event | Yes |

#### Owned Event

This is an event that we have created, own registration and arrange speaker/venue (example: GitLab Commit or Meetups). Also considered in this grouping would be 3rd party auxiliary events that are added on to a conference sponsorship (i.e a happy hour or VIP dinner at a conference).

**Bizible:** This is tracked as an _online_ and as an _offline_ channel because we manage the registration process through our website. Whenever someone registers, a TP will be created based on that online activity while another  TP is added based on the campaign sync rules, for the campaign members with success statuses.

Program type is included on the smart campaign meant to clear `dietary restriction` related fields. 7 days after an event's program statuses are recorded, the fields are cleared automatically.

| Member Status | Definition | Success |
| ------------- | ---------- | ------- |
| No Action | default starting position for all records |  |
| Subscribed to Updates | Subcribed to GitLab event updates via form fill |  |
| Sales Invited | Invitation/Information about event sent by Sales/SDR |  |
| Sales Nominated | Sales indicated record to receive triggered event email sent by Marketing |  |
| Marketing Invited | Marketing geo-targeted email |  |
| Declined Invitation | Event nvitation declined by recipient | |
| Waitlisted | Holding state if registration is full will be moved to `Registered` if space opens |  |
| Registered | Registered for event |  |
| Cancelled | Registered, but cancelled ahead of the event |  |
| No Show | Registered but did not attend event |  |
| Attended | Attended event live| Yes |
| Attended On-demand| Watched/consumed the presentation materials post-event on-demand| Yes |
| Follow Up Requested | Requested additional details about GitLab to be sent post event | Yes |

#### Paid Social

**Bizible:** This program is designated to house leads and programs brought in by social related campaigns (e.g. LinkedIn campaigns) and is tracked as an _offline_ channel. Touchpoints for offline channels are created through our AMM (formerly known as Bizible) campaign sync rules that can be found in this [spreadsheet](https://docs.google.com/spreadsheets/d/1xR2Q7YKskfNaxclnfGOkK8Vi739zdKypQ6GgF9MLG58/edit#gid=92970564).

| Member Status | Definition | Success |
| ------------- | ---------- | ------- |
| No Action | default starting position for all records |  |
| Responded | Took an action related to social campaigns, like a form fill  | Yes |

#### Partner - MDF

This is for an activity that our partner is executing utilizing MDF Funds. We track membership, but the partner, not GitLab follows up with these leads. See more details [here](/handbook/marketing/marketing-operations/campaigns-and-programs/#mdf-campaigns).

**Bizible:** This is tracked as an _offline_ channel. Touchpoints for offline channels are created through our AMM (formerly known as Bizible) campaign sync rules that can be found in this [spreadsheet](https://docs.google.com/spreadsheets/d/1xR2Q7YKskfNaxclnfGOkK8Vi739zdKypQ6GgF9MLG58/edit#gid=92970564).

| Member Status | Definition | Success |
| ------------- | ---------- | ------- |
| Member | default starting position for all records |  |
| Sales Nominated | status for when leads have been sales nominated for the program |  |
| Responded | Attended event or campaign |Yes|

#### Prospecting

This program type is specific to non-event related list uploads, such as partner lists or data upload centric lists.

**Bizible:** This is not tracked on Bizible.

| Member Status | Definition | Success |
| ------------- | ---------- | ------- |
| No Action | default starting position for all records |  |
| Uploaded | Status lead is normally transitioned to upon successful upload |  |
| Do Not Use (Responded) | Not to be used. Included because Marketo requires a `success` step  | Yes  |
| Member | Indicative of a special member status for this program type. Meaning of "special" is dependent on use case |  |

#### Speaking Session

This campaign type can be part of a larger Field/Conference/Owned event but we track engagement interactions independently from the larger event to measure impact. It is something we can drive registration. It is for tracking attendance at our speaking engagements.

**Bizible:** This is tracked as an _offline_ channel. Touchpoints for offline channels are created through our AMM (formerly known as Bizible) campaign sync rules that can be found in this [spreadsheet](https://docs.google.com/spreadsheets/d/1xR2Q7YKskfNaxclnfGOkK8Vi739zdKypQ6GgF9MLG58/edit#gid=92970564).

| Member Status | Definition | Success |
| ------------- | ---------- | ------- |
| No Action | default starting position for all records |  |
| Sales Invited | Invitation/Information about event sent by Sales/SDR |  |
| Sales Nominated | Sales indicated record to receive triggered event email sent by Marketing |  |
| Marketing Invited | Marketing geo-targeted email |  |
| Registered | Registered or indicated attendance at the session |  |
| No Show | Registered but did not attend event |  |
| Attended | Attended speaking session event | Yes |
| Follow Up Requested | Had conversation with speaker or requested to be followed up with by sales post event | Yes |

#### Sponsored Webcast

This is webcast hosted on an external partner/vendor platform. The status of `Attended On-demand` accounts for GitLab hosted On-Demand and non-GitLab hosted On-demand webcasts. [Read more](/handbook/marketing/virtual-events/external-virtual-events/#overview).

**Bizible:** This is tracked as an _offline_ channel for both types of touchpoints (TPs) mentioned below.

For Sponsored Webcasts we're creating TPs in two ways:

1. **Registration TPs**, which mimic the TPs created for Owned Events through the online registration method (bizible script on our LPs). However, because for Sponsored Webcasts, we don't own the LP registration, this method is unavailable. Instead, we're replicating these TPs through the Marketo Program membership method.

The Maketo Program membership rule creates a "Registration TP" for all program members housed in Marketo programs that sit in a Marketo folder with the folder's name containing "Sponsored Webcasts". As long as this naming convention is followed, these TPs will be created automatically. The Touchpoint Date for these touchpoints is the `Program Membership Date`.

1. **Responded Status TPs**, which are created based on the [AMM Channel/Sub-Channel Rules for Offline Touchpoints](https://docs.google.com/spreadsheets/d/1xR2Q7YKskfNaxclnfGOkK8Vi739zdKypQ6GgF9MLG58/edit?gid=92970564#gid=92970564)(Rule on row 19) for responded status campaign members only. The TP Date for these TPs is the `Member First Associated Date` in the associated SFDC Campaign. Please see below the campaign statuses for the Sponsored Webcasts campaign type:

| Member Status | Definition | Success |
| ------------- | ---------- | ------- |
| No Action | default starting position for all records |  |
| Sales Nominated | Used by marketing for invitee tracking | |
| Registered | Registered for webcast |  |
| No Show| Registered but did not attend event |  |
| Attended | Attended event | Yes |
| Follow Up Requested | Requested to be followed up with from GitLab | Yes |
| Attended On-demand | Watched/consumed the presentation materials post-event on-demand | Yes |

#### Survey

A survey that we or a 3rd party sends out. Tracks respondents and new leads we receive.

**Bizible:** This is tracked as an _offline_ Bizible channel. Touchpoints for offline channels are created through our AMM (formerly known as Bizible) campaign sync rules that can be found in this [spreadsheet](https://docs.google.com/spreadsheets/d/1xR2Q7YKskfNaxclnfGOkK8Vi739zdKypQ6GgF9MLG58/edit#gid=92970564).

| Member Status | Definition | Success |
| ------------- | ---------- | ------- |
| Member | default starting position for all records |  |
| Sales Nominated | Sales indicated record to receive triggered event email sent by Marketing |  |
| Invited | Was invited, but did not participate in survey |  |
| Filled-out Survey | Filled out survey | Yes |
| Follow Up Requested | Filled out survey and requested to be contacted by sales | Yes |

#### Trial

Track cohort of Trials for each product line (Self-managed or SaaS) to see their influence.

**Bizible:** In-product self-managed and SaaS trials are tracked as an **offline** Bizible touchpoint. The self-managed trial utilizing a Marketo form is an **online** Bizible touchpoint.

| Member Status | Definition | Success |
| ------------- | ---------- | ------- |
| No Action | default starting position for all records |  |
| Signed Up | Signed up for Trial | Yes |

#### Vendor Arranged Meetings

Used for campaigns where a third party vendor is organizing one-to-one meetings with prospect or customer accounts. This does not organize meetings set internally by GitLab team members. An example would be a "speed dating" style meeting setup where a vendor organized meetings with prospects of interest to GitLab. [Read more](/handbook/marketing/virtual-events/external-virtual-events/#overview).

**Bizible:** This is tracked as an _offline_ Bizible channel. Touchpoints for offline channels are created through our AMM (formerly known as Bizible) campaign sync rules that can be found in this [spreadsheet](https://docs.google.com/spreadsheets/d/1xR2Q7YKskfNaxclnfGOkK8Vi739zdKypQ6GgF9MLG58/edit#gid=92970564).

Program type is included on the smart campaign meant to clear `dietary restriction` related fields. 7 days after an event's program statuses are recorded, the fields are cleared automatically.

| Member Status | Definition | Success |
| ------------- | ---------- | ------- |
| No Action | default starting position for all records |  |
| Registered | Registered for the event |  |
| No Show | Registered, but did not attend the event |  |
| Attended | Attended the Event | Yes |
| Follow Up Requested | Had conversation with speaker or requested additional details to be sent post event | Yes |

#### Webcast

Any webcast that is hosted and held by GitLab. There are a few different groups that run webcasts. Go their specific pages to see additional details on setup.

- [Campaign webcasts](/handbook/marketing/virtual-events/webcasts/#campaign-webcasts)
- [Field Marketing webcasts](/handbook/marketing/field-marketing/field-marketing-owned-virtual-events/#webcasts-1)
- [Goldcast webcasts](/handbook/marketing/marketing-operations/goldcast)

**Bizible:** This is tracked as an _online_ Bizible channel as well as an _offline_ channel. We own the registration process so whenever a person registers to a webcast, a TP will be created based on the Bizible snippet that lives on our landing pages, while another TP is created for campaign members with success/responded statuses.

| Member Status | Definition | Success |
| ------------- | ---------- | ------- |
| No Action | default starting position for all records |  |
| Sales Invited | Invitation/Information about event sent by Sales/SDR |  |
| Sales Nominated | Sales indicated record to receive triggered event email sent by Marketing |  |
| Marketing Invited | Marketing geo-targeted email |  |
| Registered | Registered through online form |  |
| No Show | Registered, but did not attend live webcast |  |
| Attended | Attended the live webcast | Yes |
| Follow Up Requested | Requested to be followed up with by sales post event | Yes |
| Attended On-demand | Watched the recorded webcast | Yes |

#### Workshop

An in-person or virtual workshop where the attendees are guided through an agenda of real life use cases within GitLab.

For logistical setup and more information, go [here](/handbook/marketing/field-marketing/field-marketing-owned-virtual-events/#virtual-workshops-1).
**Bizible:** This is tracked as an _offline_ Bizible channel. Touchpoints for offline channels are created through our AMM (formerly known as Bizible) campaign sync rules that can be found in this [spreadsheet](https://docs.google.com/spreadsheets/d/1xR2Q7YKskfNaxclnfGOkK8Vi739zdKypQ6GgF9MLG58/edit#gid=92970564).

Program type is included on the smart campaign meant to clear `dietary restriction` related fields. 7 days after an event's program statuses are recorded, the fields are cleared automatically.

| Member Status | Definition | Success |
| ------------- | ---------- | ------- |
| No Action | default starting position for all records |  |
| Sales Invited | Invitation/Information about event sent by Sales/SDR |  |
| Sales Nominated | Sales indicated record to receive triggered event email sent by Marketing |  |
| Marketing Invited | Marketing geo-targeted email |  |
| Waitlisted | Holding state if registration is full will be moved to Registered if space opens |  |
| Registered | Registered or indicated attendance at the session |  |
| Cancelled | Registered, but cancelled ahead of the event |  |
| No Show | Registered, but did not attend event |  |
| Attended | Attended workshop event | Yes |
| Follow Up Requested | Requested additional details about GitLab to be sent post event | Yes |

## SFDC Campaign Instructions

SFDC campaigns have a general set of required fields. This section describes the fields and when you need to populate them. You will do this step after you sync the campaign from Marketo (or when you set-up Content Syndication/Linked In campaigns). Instructions are contained in this section so any changes to required fields are centrally located and instructions do not become out of date.

### Updating SFDC fields

- Now go to Salesforce.com and check the [All Campaigns by create date](https://gitlab.lightning.force.com/lightning/o/Campaign/list?filterName=00B4M000004oVF9) view. Sort by create date and your campaign should appear at the top. You may also search for your campaign tag in the search box. Select the campaign.
  - Change the `Campaign owner` to your name
  - Confirm that the `Active` box is checked
  - Status should be updated according to the [chart in this section](/handbook/marketing/marketing-operations/campaigns-and-programs/#important-notes). Typically you will use "In Progress"
  - Confirm that start date and end date populated correctly (this is automated).
  - Update the `Is this an in person event` dropdown, based on `in-person` vs `virtual` type
  - Update `Budget Holder` -  Do keep in mind that the `Budget Holder` field should be updated **only if**:
    - The campaign results in offline Bizible touchpoints based on campaign type (i.e. content syndication, sponsored webcast, etc.) - **NOTE:** an offline Bizible touchpoint happens when we gather a lead offline and in order for the system to have this name you must go through a [list upload process](/handbook/marketing/marketing-operations/list-import/)
  - Update `Is a Channel Partner involved?` - You can leave this blank if "No"
    - If yes, add the `Channel Partner Name`
  - Update `Is an Alliance Partner involved?` - You can leave this blank if "No"
    - If yes, add the `Alliance Partner Name`
  - Update `Will there be MDF Funding` - You can leave this blank if "No"
    - If yes, lookup the `MDF Request` in this field: [Detailed instructions](/handbook/marketing/channel-marketing/mdf-operations-process/#step-3-add-mdf-request-on-the-salesforce-campaign)
  - Update `Integrated Campaign` if applicable
  - Update `GTM Motion` if applicable
  - If there will be `Sales Dev Invite Support` - check this box. Otherwise leave blank
  - If there will be `Sales Dev Onsite Support` - check this box. Otherwise leave blank
  - Update `Is Hyperscaler involved?` to Yes if a hyperscaler is involved.
    - If yes, add the hyperscaler partner name after the date in your campaign name. Example using Executive Roundtable: YYYYMMDD_HyperscalerPartner_ExecutiveRoundtable_Topic_Region_EventType. For more info, [see](/handbook/marketing/marketing-operations/campaigns-and-programs/#partner-campaign-setup)
    - If yes, enter the hyperscaler partner name in the `Hyperscaler` field
    - If yes, select the type of Hyperscaler Funding using `Will there be Hyperscaler Funding?`, options are `MDF` or `Credits`
      - then, update the `Hyperscaler Fund Requested Amount`
  - Update the event epic
  - Update the description (if any)
  - Enter the `Form submission page` if you know it. Otherwise, it will need to be added after the landing page is created (if applicable)
  - Update `Budgeted Cost` - If cost is $0 list `1` in the `Budgeted Cost` field. - NOTE there needs to be at least a 1 value here for ROI calculations, otherwise, when you divide the pipeline by `0` you will always get `0` as the pipe2spend calculation.
  - Update `Region` and `Sub-region`, if these are local or targeted to a specific region
  - For all SFDC campaign types run by Corporate Events or Field Marketing, please check the `High Priority` check box on the campaign level.
    - Details on our [pilot](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/6905) we ran with the business development team which led us to add this!
   
    **OR:**

    - There were GitLab Dollars spent on the campaign (Field, Digital, Corporate, Community etc.) - can be left blank in the cases when we have campaigns that do not utilize budget; - **NOTE:** By updating the budget holder, we do **NOT** run the risk of double counting touchpoints, however, do keep in mind that since the field is not always filled out, it shouldn't be used for measuring each team's performance.
- Click "Save"
- Add the Marketo program link and SFDC campaign link to the epic.

#### Instructions for SFDC campaign creation when utilizing Allocadia

Using an integration from Allocadia > Marketo > SFDC, the information you've provided in Allocadia will push to your SFDC campaign.

**Please Note:** You must NOT edit the SFDC campaign until the Allocadia connector has completed the sync. This is normally done near-real time, but if the data does not push immediately, be aware it can take minutes to hours to do so. You'll know the Allocadia connect has completed its work when you see the SFDC campaign owner change from Marketo Integration to the name of the person running the camapign, as well as well as when all details are populated from Allocadia to SFDC. If you edit the campaign before the connector pushes the data over, it will break the build and you will manually have to edit all of the fields listed. For additional Allocadia details [go here](/handbook/marketing/strategy-performance/allocadia/#salesforcecom-sfdc).

- Go to alesforce.com and check the [All Campaigns by create date](https://gitlab.my.salesforce.com/701?fcf=00B4M000004oVF9) view. Sort by create date and your campaign should appear at the top. You may also search for your campaign tag in the search box. Select the campaign.
- Confirm that start date and end date populated correctly (this is automated)
- Add `Budgeted Cost`
  - `Budgeted Cost` in SFDC pulls from your `plan` number, not your `forecast` number from Allocadia. If you do not have a plan number in Allocadia, `Budgeted Cost` will remain blank in SFDC. If you do have a plan amount in Allocadia, that amount will pull through to SFDC in the nightly sync.
  - If the cost of the tactic is $0 (example - virtual workshop) list `1` in the `Budgeted Cost` field. There needs to be at least a 1 value here for ROI calculations, otherwise, when you divide the pipeline by `0` you will always get `0` as the pipe2spend calculation.

### Parent/Child Campaigns Setup

For some tactics, there are mutiple campaigns that occur as a part of a single initiative. Some examples of these could be a conference with speaking session or ancillary event, content syndication, or hybrid events (where in-person and virtual leads will be tracked separately). When this happens, a `parent` campaign should be created in SFDC and have each `child` campaign represent the individual tactics. 

Two important aspects that need to be avoided when it comes when creating/editing parent campaigns are the following:

1. Do not add any campaign members to the parent campaign as we want to minimize the risk of creating duplicate bizible touchpoints for the same activity.
1. When creating a parent campaign, it should always be named with `_PARENT` at the end of the campaign name. This is so we do not double-report on campaigns.
1. Parent campaigns shouldn't have values in the `Actual Cost in Campaign` field, while in the `Budgeted Cost in Campaign` field, do not put more than $1 value. The true Budgeted Cost & Actual Cost are to be updated only on the child campaigns and not on parent campaigns, as we should not be running any ROI on the parent campaigns.
1. If you are an Allocadia user, you will not include the sub-category ID in the parent campaign. You will only use an Allocadia ID when creating the child campaigns. Since we do not have the same parent/child relationship structure available in Marketo, you will create a folder that will house all of the shared tactics together.

#### Create a Parent SFDC Campaign

- Create your first child campaign using the [below instructions](/handbook/marketing/marketing-operations/campaigns-and-programs/#steps-to-setup-marketo-programs-and-salesforce-campaigns) 
- When finished, go to the top right of the campaign and click `Clone`
- Edit the campaign name to include _PARENT at the end (example: 20250409_GoogleCloudNext_PARENT)
- Confirm the `Active` box is checked
- Remove the Allocadia Sub-Category ID
- Adjust the `Budgeting Cost in Campaign` to $1
- Click `Save`

#### How to associate a child campaign to a parent campaign in SFDC

- Log in to SFDC and search for your child campaign
- Once in the campaign, click the edit button next to the `Parent Campaign` field
- Copy and paste the parent campaign name (example: 20250409_GoogleCloudNext_PARENT) into the field or start typing the parent campaign name and click `Save`
- Continue to do the same for any additional child campaigns
- You can view your campaign hierarchy in the right-hand panel (clicking `View All` will provide a full hierarchical view)

An example of a Parent/Child SFDC hierarchy can be found [here](https://gitlab.lightning.force.com/one/one.app#eyJjb21wb25lbnREZWYiOiJzZmE6aGllcmFyY2h5RnVsbFZpZXciLCJhdHRyaWJ1dGVzIjp7InJlY29yZElkIjoiNzAxUEwwMDAwMFVqMGs5WUFCIiwic09iamVjdE5hbWUiOiJDYW1wYWlnbiIsInRyZWVEaXJlY3Rpb24iOiJjdXJyZW50VG9Eb3duIiwibGF5b3V0VHlwZSI6IlJFTEFURURfTElTVCIsImxheW91dE92ZXJyaWRlIjoiQ2hpbGRDYW1wYWlnbnMifSwic3RhdGUiOnt9fQ%3D%3D).

#### Create a Parent Marketo Program (aka folder)

- Log in to Marketo
- Go to the correct event type folder based on fiscal year and quarter (example - FY26 - Q1 Conference)
- Right click the folder and select `New Campaign Folder`
- Add the campaign name as the `Campaign Folder Name` (example - 20250409_GoogleCloudNext)
- Hit `Save`
- All Marketo programs for your event can be nested under this main folder
  - To move any existing Marketo programs to your folder you can simply drag and drop the programs, or right click the programs and select `Move` and direct to the folder you created.

An example of a Marketo program folder with nested programs can be found [here](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/MF25757A1).

### Important Notes

1. The `Active` checkbox must be checked on the SFDC campaign for Marketo to be able to "see" the campaign. This will happen automatically if you follow the process below, but if there is a time you cannot find a SFDC campaign in Marketo, check to make sure that box is checked in SFDC. Additionally, if this box is unchecked, Marketo cannot send leads or update campaign member status for that SFDC campaign.
1. If you are creating a parent campaign, please make sure that the campaign name of a parent campaign reflects the fact that it's a parent, by adding `_Parent` at the end of the Campaign Name. In the event of a mishap, when a parent campaign was setup by mistake to house responded campaign members,  adding `_Parent` at the end of the campaign name, makes sure that it gets seen by our campaign sync rules that [control the generation of touchpoints for offline campaigns](https://docs.google.com/spreadsheets/d/1xR2Q7YKskfNaxclnfGOkK8Vi739zdKypQ6GgF9MLG58/edit#gid=92970564) and does not create double touchpoints for campaign members that may be housed in both the parent and child campaigns.
1. If you are creating a campaign that relies on offline touchpoint generation, please make sure to double check that the campaign type is selected appropriately and that the campaign name does not contain words like `test`, `DONTUSE`, `template`, `parent`, because based on the [campaign sync rules that govern the creation of offline touchpoints](https://docs.google.com/spreadsheets/d/1xR2Q7YKskfNaxclnfGOkK8Vi739zdKypQ6GgF9MLG58/edit#gid=92970564), these campaigns will not have touchpoints created for them.
1. We have a trigger in SFDC that stamps the start date, end date, reporting date, and fiscal quarter by taking the first 8 characters of the name of the campaign (if they are numbers) and converting that into a date (example: 20210505 == 5/5/2021, so YYYYMMDD). So, campaigns starting with a number must contain a valid date, otherwise you will receive an error.
1. Campaign statuses other than `Aborted` are automatically set by SFDC workflow based on Start and End Dates.

|Status|Definition|When does it update?|
|------|--------|--------|
|Planned|The campaign is expected and has been set up, but the start date hasn't happened yet (could also be where its pulled back to if an event is postponed)|Prior to the Campaign Start date - upon Creation|
|In Progress|The campaign has begun |On Start date|
|Aborted|Campaign has been suspended, cancelled, aborted|Manually when campaign is aborted|
|Completed|The campaign took place and has ended|After the Campaign End Date|

## Marketo Program and Salesforce Campaign set-up

The Marketo programs for the corresponding campaign types have been prebuilt to include all the possible necessary smart campaigns, email programs, reminder emails and tokens that are to be leveraged in the building of the program.

For **LinkedIn Social Ads** follow the instructions documented in [the LinkedIn section](/handbook/marketing/marketing-operations/campaigns-and-programs/#steps-to-setup-linkedin-lead-gen-form)

For **virtual events**, there are additional set up details on this [page](/handbook/marketing/virtual-events).

For all other campaign types, follows steps below. All steps are required.

## Steps to Setup Marketo programs and Salesforce Campaigns

### Step 1: Clone the Marketo program indicated below

Be advised that some templates are being used for both `in-person` and `virtual events`. These templates have been marked as `Hybrid template`. For these templates, the naming convention is slightly different in that additional campaign information appears in the name. When naming the program, `EventType` is replaced with either `Virtual`, `In-Person`, or `Hybrid` (if an event will be both in-person and virtual).

If this is to set up a program that involves a channel partner, you must also follow the directions on that [setup page](/handbook/marketing/channel-marketing/#joint-gitlab-and-partner-campaigns). You will still clone the program from the list below to get started.

#### How to Clone the Marketo program

- Click on the appropriate template for your tactic below (you must be logged into Marketo to proceed)
- Right click on the template in Marketo and select `Clone`
- In the `Clone To` field, select `A campaign folder`
- In the `Name` field, input the campaign name (this should be the campaign name previously created in Allocadia - example: 20220704_BestEventEver)  - The date should be the START date of your campaign.
- In the `Folder` field, select the appropriate folder based on your campaign type. Most folders are also organized by fiscal year and quarter.
- In the `Description` field, paste your epic URL
- Click `Create`

##### Hybrid Marketo Templates

- Executive Roundtables - `Hybrid template`: [YYYYMMDD_ExecutiveRoundtable_Topic_Region_EventType_template](https://app-ab13.marketo.com/#ME6028A1)
- Speaking Session - `Hybrid template`: [YYYYMMDD_SpeakingSession_EventType_Template](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/ME5092A1)
- Vendor Arranged Meetings (1:1 meetings) - `Hybrid template`: [YYYYMMDD_ArrangedMeetingsVendorName_Region_EventType_template](https://app-ab13.marketo.com/#PG5698A1)
- GitLab Hosted Workshops - `Hybrid template`:
[For virtual workshops, please follow directions in the virtual workshop set-up section.](/handbook/marketing/field-marketing/field-marketing-owned-virtual-events/#virtual-workshop-logistical-set-up) In-person workshops utilize a similar setup, but do not involve the Zoom requirements. If you have a workshop to set up that is not one of the workshops listed below, you can still utilize any of these templates for backend setup and then use a [copy doc](https://docs.google.com/document/d/1j43mf7Lsq2AXoNwiygGAr_laiFzmokNCfMHi7KNLjuA/edit#heading=h.tl82wncgutxu) to indicate all copy adjustments that are required (you will also update the baseline Marketo tokens during the setup process).
  - Project Management: [YYYYMMDD_Workshop_ProjectManagement_EventType](https://app-ab13.marketo.com/#ME6536A1)
  - Security: [YYYYMMDD_Workshop_SecurityWorkshop_EventType](https://app-ab13.marketo.com/#ME6521A1)
  - CI Workshop: [YYYYMMDD_Workshop_CI_EventType](https://app-ab13.marketo.com/#ME6807A1)
  - Jenkins [YYYYMMDD_Workshop_Jenkins_EventType](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/ME8285A1)
  - GitLab Duo Enterprise Workshop : [YYYYMMDD_Workshop_DuoAI_EventType](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/ME16197A1)
  - GitHub GitLab Migration: [YYYYMMDD_Workshop_GitHubGitLab_EventType](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/ME13738A1)
  - GitLab Basics: [YYYYMMDD_Workshop_GitLabBasics_EventType](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/ME17530A1)
  - GitLab Platform Engineering Workshop [YYYYMMDD_Workshop_PlatformEngineering_EventType](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/ME22364A1)

Note, if you are managing a hyperscaler campaign, add the hyperscaler partner name after the date. Example using Executive Roundtable: `YYYYMMDD_HyperscalerPartner_ExecutiveRoundtable_Topic_Region_EventType`. For more info, [see](/handbook/marketing/marketing-operations/campaigns-and-programs/#partner-campaign-setup)

##### Other Tactic Marketo Templates

- Conference - `Virtual`: [YYYYMMDD_YYYYMMDD_Vendor_VirtualConfName1 (Virtual Conference Template)](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/ME7624A1)
- Conference - `In person`: [skip to specific setup details here](/handbook/marketing/marketing-operations/campaigns-and-programs/#steps-to-setup-in-person-conferences)
- Conference - Meetings (FM led) `In person`: [skip to specific setup details here](/handbook/marketing/marketing-operations/campaigns-and-programs/#steps-to-setup-in-person-conference-meetings)
- Content Syndicaton: [skip to specific setup details here](/handbook/marketing/marketing-operations/campaigns-and-programs/#steps-to-setup-content-syndication-in-marketo-and-sfdc)
  - Note, if you are managing a hyperscaler campaign, update the Asset Name in the Marketo token of the Content Syndication Folder to include the Hyperscaler Name.
- Direct Mail: [YYYYMMDD_DirectMail_Template](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/PG5392A1)
  - Direct Mail not needing a Marketo Program: [skip to specific setup detais here](/handbook/marketing/marketing-operations/campaigns-and-programs/#steps-to-setup-direct-mail-campaigns)
- Gated Content: [YYYY_Type_Content_Template](https://app-ab13.marketo.com/#PG5111A1)
- Integrated Campaign: [FY20IntegratedCampaign_Template](https://app-ab13.marketo.com/#PG4924A1)
- Surveys - For templates and setup instructions for surveys, skip to specific setup details [here](/handbook/marketing/marketing-operations/campaigns-and-programs/#steps-to-setup-surveys-in-marketo-and-sfdc).
- Owned Event - `Hybrid`: [YYYYMMDD_OwnedEvent_EventType_Template](https://app-ab13.marketo.com/#ME4722A1)

Note, if you are managing a hyperscaler campaign, add the hyperscaler partner name after the date. Example using Conference: `YYYYMMDD_HyperscalerPartner_Conference_EventType`. For more info, [see](/handbook/marketing/marketing-operations/campaigns-and-programs/#partner-campaign-setup)

##### Webcasts Marketo Templates

- Zoom GitLab Hosted Webcast: [YYYYMMDD_WebcastTopic_Region](https://app-ab13.marketo.com/#ME5512A1)
- Sponsored Webcast: [YYYYMMDD_ExternalWebcastVendorName_Topic_Region](https://app-ab13.marketo.com/#PG5523A1)

#### Partner Campaign Setup

- Partner MDF Funded campaigns go [this page](/handbook/marketing/channel-marketing/mdf-operations-process/).
- Joint GitLab/Partner campaigns, follow the directions for each campaign type above/below. There are additional steps [here](/handbook/marketing/channel-marketing/#joint-gitlab-and-partner-campaigns) you'll need to complete as well.
- Hyperscaler campaigns - use the Marketo templates [above](/handbook/marketing/marketing-operations/campaigns-and-programs/#hybrid-marketo-templates), and insert the name of the hyperscaler partner after the date. Example using Executive Roundtable: `YYYYMMDD_HyperscalerPartner_ExecutiveRoundtable_Topic_Region_EventType`
  - Additional Examples:
    - 20251202_AWS_AWSreinvent_Booth
    - 0250409_GCP_GoogleCloudNext_Booth
    - 20241114_AWS_devops.com_ModernizingFinServe_emea_amer
    - Special Instructions for Content Syndication Teams: 
      - Update the Asset Name in the Marketo token of the Content Syndication Folder to include the Hyperscaler Name.

### Step 2: Sync to Salesforce

- At the program main screen in Marketo, where it says `Salesforce Sync` "not set", click on "not set"
  - Click "Create New." The program will automatically populate the campaign tag, so you do not need to edit anything.
  - If you are a user of Allocadia, you will need to add the Allocadia sub-category ID to the `Description` field.
  - Click "Save"

### Step 3: Update Marketo tokens

- Complete the information for each token. Instructions for what to enter for each token are included in the template.
  - Note that it is important that all tokens are completed as the "Interesting Moments" Smart Campaigns pushes information to Salesforce based on the tokens. Depending on the campaign, some auto-responders and emails rely on tokens as well.
  - Note that the token for `Event Location` should be filled in with the `City` for `In-Person` events and `Virtually` for `virtual events`.
  - You do not need to update the following tokens upon setup:
    - `{{my.email header image url}}` - This is optional. You will need this if you had custom images created.
    - `{{my.ondemandurl}}` - This will be entered AFTER the event date. It is the link to the recorded webcast. You will need to come back after the event and update this token.
- Update the utm_campaign field following the process outlined [here](/handbook/marketing/utm-strategy/#the-new-utm_campaign-structure).
- **Partner Campaigns** will need to also to update the `{{my.partner name}}` and `{{my.partner crm id}}` for proper routing
- For live events, be sure to update the `reply email` token. This is used in the confirmation email. You need to add the correct email address for cancellations or special accomodations, and update the subject to something descriptive. Keep the `%20` between each word in the subject so the subject populates correctly.
- If your program qualifies for Action Streams (currently only available for Security), please update the {{my.Action Stream}} token with the relevant type [here](/handbook/marketing/lifecycle-marketing/email-processes-requests/#action-streams). [Video instructions](https://drive.google.com/file/d/1hBuYcScoJGVo8VUhKbiwToSE1g4Kr8Tl/view?usp=sharing) - note the instructions are different for Conferences and our outlined in the Conference instructions below.

### Step 4: Activate Marketo smart campaign(s)

- Action Stream tagging for programs: The following is relevant for all campaign types, except Content Syndication and LinkedIn Lead Gen forms. Those are handled differently. For webcasts, workshops, events, and gated content, please follow these instructions to properly route leads to Action Streams.
  - Add the [relevant stream type](/handbook/marketing/lifecycle-marketing/email-processes-requests/#action-streams) to the {{my.Action Stream}} token
  - In the `Processing` flow, select "Execute Campaign" from the right side panel and drag it into the flow. This should go near the bottom of the flow, before any "Remove from Flow" steps.
  - Complete the `Execute Campaign` flow step: Executed Campaign: *Air Traffic Control Automation.Action Stream tagging (programs), Use Parent Campaign Token Context: True  
- If this is a `Gated Content` campaign, follow the detailed set-up instructions on the [content in campaigns page](/handbook/marketing/demand-generation/campaigns/content-in-campaigns/#steps-gated-landing-pages).
- If this is a `Vendor Arranged Meeting`:
  - Click the `Smart Campaigns` folder
  - Select the `01 Interesting Moments` smart campaign
    - The correct program should automatically apply when cloned, so _you don't need to do anything here._ However, you can confirm that the campaign
- If this is `Speaking Session` follow the below activation instructions:
  - Click the `Smart Campaigns` folder
  - Select the `01a Registration Flow` smart campaign
    - The correct program should automatically apply when cloned, so _you don't need to do anything here._ However, you can confirm that the campaign tag appears on in the Smart List and Flow. If the name of the template appears anywhere, replace it with the campaign tag.
  - Click to the `Schedule` tab and click `Activate`
  - Select the `04 Interesting Moments` smart campaign
    - The correct program should automatically apply when cloned, so _you don't need to do anything here._ However, you can confirm that the campaign tag appears on in the Smart List and Flow. If the name of the template appears anywhere, replace it with the campaign tag.
  - Click to the `Schedule` tab and click `Activate`
  - (NO ACTION) If a list is used to import registrants/attendants, the `03 - Processing - No Shows / Attendees` smart campaign will be run after the list is uploaded.
  - For `Speaking Session` also select the `02-Interesting Moments` smart campaign, click to the `Schedule` tab and click `Activate`
- If this is an `Executive Roundtable`
  - Click on the `Campaigns` folder
  - Click on `Interesting Moments`, click to the `Schedule` tab and click `Activate`
  - If you are creating a Marketo landing page for this event, click on `01 Registration Flow`, click to the `Schedule` tab and click `Activate`. If you are doing a list upload, this step is not necessary.
- If this is `Workshop` follow the below activation instructions:
  - Click the `Smart Campaigns` folder
  - Select the `00 Interesting Moment` smart campaign, navigate to the Schedule tab and select `Activate`
  - Select the `01a Registration Flow` smart campaign
  - The correct program should automatically apply when cloned, so _you don't need to do anything here._ However, you can confirm that the campaign tag appears on in the Smart List and Flow. If the name of the template appears anywhere, replace it with the campaign tag.
  - Click to the `Schedule` tab and click `Activate`
- If this is an `Owned Event` follow the below activation instructions:
  - Click the `Campaigns` folder
  - If you have a Marketo registration page for this event, select the `01b - Registration` smart campaign
  - The correct program should automatically apply when cloned, so _you don't need to do anything here._ However, you can confirm that the campaign tag appears on in the Smart List and Flow. If the name of the template appears anywhere, replace it with the campaign tag.
  - Click to the `Schedule` tab and click `Activate`
  - Select the `02a - Interesting Moments` smart campaign
  - The correct program should automatically apply when cloned, so _you don't need to do anything here._ However, you can confirm that the campaign tag appears on in the Smart List and Flow. If the name of the template appears anywhere, replace it with the campaign tag.
  - Click to the `Schedule` tab and click `Activate`
  - LIST UPLOAD ONLY: If you do not have a registration page and responses will be uploaded via a list load, MOps will activate the `02b - Manual Upload Processing` campaign if necessary.
- For all other campaign types, follow the below activation instructions:
  - Click the "Smart Campaigns" folder
  - Select the `Interesting Moments` smart campaign.
  - The correct program should automatically apply when cloned, so _you don't need to do anything here._ However, you can confirm that the campaign tag appears on in the Smart List and Flow. If the name of the template appears anywhere, replace it with the campaign tag.
  - Click to the "Schedule" tab and click `Activate`.
  - Select the `01 Processing` smart campaign. (Does not apply to Virtual Conference or External Webcast)
  - The correct program should automatically apply when cloned, so _you don't need to do anything here._ However, you can confirm that the campaign tag appears on in the Smart List and Flow. If the name of the template appears anywhere, replace it with the campaign tag.
  - Click to the "Schedule" tab and click `Activate`.

- If you do not see an `Interesting Moments` campaign, check to see if that step is in `01 Processing` or `Viewed on Demand` campaigns.
- For `Speaking Sessions` with pre-registration, find the `Pre-Registration` folder, and activate the `01 - Form Fill` step after populating the smart list with the correct form and landing page.

### Step 5: Setting Landing Page / Smart Campaign Expiration (Asset Expiration)

As of early 2022, Adobe has introduced a new feature to Marketo called `asset expiration`, which can be read about in Marketo's documentation [here](https://experienceleague.adobe.com/docs/marketo/using/product-docs/core-marketo-concepts/programs/working-with-programs/local-asset-expiration.html?lang=en#:~:text=Right%2Dclick%20on%20your%20desired,Choose%20an%20expiration%20date). This applies to smart campaigns and landing pages. For GitLab's use case, we have enabled this feature for the following role permissions: `Field Marketing User`, `Marketing Program Managers` and `Marketing User`. If you do not have these permissions would like this feature enabled, please submit an `access request`.

#### Asset Expiration Use Cases

All programs have different necessities so it will be important to determine how `asset expiration` should be utilized for various program types. Guidance can be supplied by MktgOps, if needed, but utilize this method for the majority of cases:

- `Conference`, `Direct Mail`, `Executive Roundtable`, `Owned Event`, `Speaking Session`, `Sponsored Webcast` (if no on-demand component), `Survey`, `Vendor Arranged Meeting`, `Workshop`: For one-time programs that are completely done after a specific date and will not use an `Attended On-Demand` member status over time, set the expiration of assets at 4 weeks after the event and at the end of the day, so at 23:55 PST. For example, if a `conference` or `executive roundtable` program type occurs on the April 3, schedule asset expiration for end day on May 1.
- `Content syndication` or Campaigns where the end of the campaign is difficult to pinpoint: there are 2 different options to consider:
  - Set up expiration **12 weeks after the estimated campaign end**, again at the end of the day. This is useful for campaigns where a third-party is handling lead collection for us and we are manually uploading lead lists. This also supplies a buffer in the event the SLA is not met on schedule and the campaign runs longer than anticipated.
  - **Do not use asset expiration at all**. We often have content syndication focused programs that go on indefinitely so expiration does not make sense to utilize in this case. Assets can be discontinued in the future.
- `Gated Content`: It is not recommended to use asset expiration as these remain in use for long periods of time.
- `Webcast`: It is not recommended to use asset expiration as these typically have an on-demand component.

#### Setting Asset Expiration On A Program

- Right click the Marketo program to open the program menu and select `Set local asset expiration`. Please note, this will not work without the correct permissions.
- A menu with all expiration capable assets will be shown as a segmented list. Example assets that can appear are `landing pages`, `active trigger campaigns` and `Reocurring batch campaigns`.
- Use the asset checkboxes to select all assets you wish to set an expiration for and select `set expiration` when ready. Assets that should be expired are `landing pages`, `active trigger campaigns` and `Reocurring batch campaigns`. Set your date and time and then submit.
  - Prioritize setting expirations on  `smart campaigns`.
  - Be mindful of which smart campaigns are set to expire and when because such an event will disable program `registation` and `on-demand` flows.
- To remove expirations at a later date, right click on the program to return to the capable assets and submit changes.

### Step 6 Setting up optional self-service cancellation

*This option is only available on specific program templates: the Owned Event template and the Executive Roundtable template. Workshop templates may be added at a later time._ When a person fills out the cancellation form, their status in the program is updated to cancelled and an alert is sent to the event owner listed in the tokens. If the person cancels using a different email address, they will be added to the campaign as cancelled and the event owner will need to update the original registration to cancelled.

- Self-service cancellation should always be utilized for Field Marketing's Owned Event and Executive Roundtable programs.
- Included in the mentioned templates are 2 landing pages and 2 email templates - in the `Self Service Cancellation Assets` folder. To provide a self-service option for recipients to cancel their reservation, these landing pages and email templates will need to be updated.
- Grab the URL of the `Cancel Page` landing page and place it in the token called `my.cancellation page`. **If this is not done, the link included in the registration confirmation email will be broken**.
- Activate the `01 Cancellation Flow` smart campaign
- For the `Send Alert` step, determine the preferred internal GitLab email address that will receive the cancellation alert. This flow step alert notifies stakeholders of cancellations. If only one email should be notified, fill in the {{my.event owner email address}} token in the program tokens with the appropriate email. If more than one email should be notified, change the token as previously described - then within the `3 - Send Alert` flow step, add each additional email to the `To Other Emails` field after the token, with each email separated by a comma
- Activate asset expirations for 2-3 days after the event is over for all live cancellation assets

### Step 7: Update the Salesforce campaign

Refer to instructions [above](/handbook/marketing/marketing-operations/campaigns-and-programs/#step-5-update-the-salesforce-campaign).

### Step 8: Update the Salesforce campaign - Using Allocadia

Please refer to the instructions [above](/handbook/marketing/marketing-operations/campaigns-and-programs/#instructions-for-sfdc-campaign-creation-when-utilizing-allocadia).

#### Training Videos for Setting up SFDC Campaign - Using Allocadia

- [Instructional Video](https://youtu.be/1681EBw5344)
- [Sync Results Video](https://youtu.be/PocOPnJY4w0)

### Waitlist processing - Owned Event, Workshop, Webcasts

If you need to change an event from registration to waitlist, or you want to start off with a waitlist, use these instructions.

- Confirm that the email copy you would like to use is set-up in the `Confirm - Waitlist` email. This email uses tokens and should be set for you, but you can customize as necessary.
- Confirm that the `{{my.event owner email address}}` is completed in the tokens section. The Waitlist program will send an alert to this email address so you know each time someone is added to the waiting list based on this token.
- Deactivate the `01b Registration` Smart Campaign
- Activate the `01a Waitlist` Smart Campaign
- Activate the `01c Waitlist to Registered` Smart Campaign
You have now activated the waiting list processing. If you need to reactivate Registration, you will deactivate the two Waitlist campaigns, and reactivate `01b Registration`.

### Moving from Waitlist to Registered - Owned Event, Workshop, Webcasts

Use these instructions to move people from the waiting list to Registered.

- Click on the Marketo program (the name of the campaign)
- Click on `Members`
- Change the filter to `Waitlisted`
- Click on the person/people you would like to move to Registered. They will highlight when they are selected.
- Click on `Change Status`
- Select `Registered`
Once you click `Registered`, the status will change and the `01c Waitlist to Registered` Smart Campaign will send the Registration Confirmation email.

### Post Event Processing for Waitlisted Members - Owned Event, Workshop, Webcasts

In the situations where you have an event that had the waitlist feature turned on and you had hit capacity, follow these steps to process waitlisted leads. After you've processed the No Show + Attended leads you will need to process the Waitlisted leads since they technically are neither `Attended` or `No Show`. The important thing here is that we don't want them receiving follow-up emails for No Show or Attended. Please follow these steps to ensure no emails are sent and interesting moments and behavior scores are updated.

- Click on the Marketo program (the name of the campaign)
- Navigate to the `Campaigns Folder`
- Navigate to the `01c Waitlist to Registered` campaign.
- Click into the Flow Steps and remove step 1 `Send Email` (Registration Confirmation email) to avoid sending communication.
- Navigate back to the `Member list` for the event.
- Filter Status to `waitlisted` or click on the person/people you would like to move to Registered. They will highlight when they are selected.
- Click on `Change Status`
- Select `Registered`
Once you click `Registered`, the status will change and the `01c Waitlist to Registered` Smart Campaign will now update the `Interesting Moments` & `behavior score` and NOT send the Registration Confirmation email. After this is complete and they are moved to a registered stats, we can still send them a follow up email, based on the registered status. You will need to complete a no show, attended, and registered (all separate copy) email issues.

### Setting up a controller Marketo program for a muti-day event

This is an optional feature for anyone looking to run an event on multiple days while using the same form and landing page for all included days - but with each day having its own Marketo programs/SFDC campaigns. Note this streamlined workflow exists on only 2 templates at the moment but work similarly on both templates: [YYYYMMDD_EventName_Webcast_On24_template](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/ME12620A1) and [YYYYMMDD_WebcastTopic_Region](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/ME5512A1). If there is demand, this can be requested for other program templates via an issue.

- First, determine the number of days needed for your event. If the event requires anything different than 3 days, complete as much setup as possible following the below directions and then ping MktgOps on your current issue so we can finish the setup. The intention here is to allow for use of a tokenized global form rather than individual forms for each program. The form is `FORM 1419: Webcast_MultipleTimeSlots`. If your event requires a different number of days, MktgOps needs to clone `1419` and change the number of days allotted in the dropdown
- Clone the program template you will need for as many days as your multi-day event will require - then clone one more and name the extra program as your `controller` program - with a name that somewhat alludes to your child programs. Keep all of your programs near each other and within the same Q1/2/3 or Q4 folder, if possible. Be sure to list the programs in play in the issue if you require finishing touches by MktgOps
- In the `controller` program, add `FORM 1419: Webcast_MultipleTimeSlots` to the Marketo landing page. `FORM 1419` is tokenkized with these local program tokens: `Date 1`, `Date 2`, `Date 3`, `Date 1 Option`, `Date 2 Option` and `Date 3 Option`. Fill in the `Date` tokens with the time, date and timezone **exactly** as they should appear on the dropdown menu on the landing page. The dropdown will appear on the landing page for users to select, so formatting is important. Fill in the `Option` tokens with a keyword relating to your individual multi-day events. e.g. `Day 1 = Aug 23 7:00` and `Day 2 = Sept 1 5:00` so `Day 1 Option = August` and `Day 2 Option = September`. There cannot be overlapping information on the `Option` tokens as they are part of some `contains` logic in the processing smart campaign
- Speaking of that, still in the `controller` program, move on to the smart campaign `01 Registration Flow (Multi-timeslot)`. The rest of this setup continues to be similar as a regular program set up. Click on `Flow` and scroll down to `step 3`. Change `Option 1`, `Option 2` and `Option 3` to match the keywords from the `Date 1/2/3 Option` tokens. This will add leads to static lists for safe keeping. It will also help monitor for errors. If your events only span 2 days, remove `Option 3` and if there are more than 3 days MktgOps will handle adding more days as this requires more logic and tokens
- On `Flow Step 4`, again change the `Option 1/2/3` to match your token keywords. In the `Requested Campaign` field, find the `registration` smart campaigns from your `child` programs and plug them in here. Be careful to select the correct smart campaigns here. Their names will start with the name of the child campaign but they will all have the same or similar smart campaign name of `01a Registration Flow - Form fill`
  - Note, the registration processing smart campaigns in the children programs **need to be activated** in order to appear as a `request campaign` option in the `controller` program's `Multi-timeslot` smart campaign
- Note there is an alert that will be set to an email of your choosing if there is something arry with the registration flow
- On the controller campaign there is nothing left to set up. Activate the appropriate processing smart campaigns on your child programs (busy as usual), including all needed processings, such as `Interesting moments`, `Attended` flows, `Follow up Requested`, etc. Remember to sync the child campaigns to sfdc, but there is no need to sync the `controller` program to sfdc as it does not house program members with relevant program statuses

### Setting up assets for Late/In-person Registration

This is an _optional_ feature only available for the `Owned Event` program template. Utilize this feature if a team wants flexibility to `register` unregistered attendees that have appeared `in-person` to an `owned event` but the normal registration process through the landing page form has been prevously closed down. **The teams in charge of the event should agree on whether to use this feature _before_ the event and setup should be done prior to when the event starts**. This allows the landing page/form to be manually added as a bookmark on `check-in` devices, such as on GitLab owned `tablets` and `laptops`.

- Locate the `Late Registration Assets` sub-folder found in the `Assets` folder. This only exists in the `YYYYMMDD_OwnedEvent_EventType_Template` template
- Request in the MktgOps Slack channel that someone with the needed permissions to approve Marketo program assets activate the `Late Registration page` and `Late Thank you page` landing pages. These are by default `not` approved in the program template. Be sure to check beforehand for anything that needs to be changed, such as the included `form` on the landing page.
  - It's highly suggested to change the landing page URL to something short and easier to type before approving the landing page, e.g. `https://page.gitlab.com/EventNameLateReg.html`
- Take the `Late Registration page` URL and place it in the program `token` named {{my.late registration page}}, leaving out the `https://`. This allows there to be a circular pattern on the registration `Thank you` page. The `Thank you` page displays a return link to the `late registration page` for the next registrant to utilize
- Activate the `01 Late Registration` smart campaign to activate the flow
- Right click on the program to set up the asset expiration dates for **all** `late registration` assets. These are not meant to be left on and should be set to expire the day after the event ends or when it is estimated no more regsitrants will be accepted
- Share the `late registration page` URL with the appropriate team participating in the upcoming event so the page can be added to check-in devices, such as GitLab owned `tablets` and `laptops`, where it can be accessed on the event floor with ease

## Steps to Setup in-person Conferences

### Step 1: Clone this program

- [Clone this program](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/ME12196A1)
- Use format `YYYYMMDD_Hyperscaler(if applicable)_Conference_EventType`
- Note that if you are using Jifflenow for setting Executive Meetings or Booth Demos/Meetings, you will need a Marketo program and SFDC campaign for each type. They are all `Conference` campaign types, so you can create the first one following these instructions (including filling out the tokens), then clone that program. That will make it so you don't need to complete all of the tokens each time (you will need to make minor modifications, but they are quicker this way). You will sync each program to SFDC to create the SFDC campaign as described below.

### Step 2: Sync to Salesforce

- At the program main screen in Marketo, where it says `Salesforce Sync` with "not set", click on "not set"
  - Click "Create New." The program will automatically populate the campaign tag, so you do not need to edit anything.
  - If you are a user of Allocadia, you will need to add the Allocadia ID sub-category ID to the `Description` field.
  - Click "Save"

### Step 3: Update Marketo tokens

- Update all tokens as they feed the email and interesting moments
  - You do not need to update `Request` tokens if there are no meetings being set up for the conference
  - If you are scheduling in person meetings, be sure to update the `reply email` token. This is used in the confirmation email. You need to add the correct email address for cancellations or special accomodations, and update the subject to something descriptive. Keep the `%20` between each word in the subject so the subject populates correctly.
  - If your program qualifies for Action Streams (currently only available for Security), please update the {{my.Action Stream}} token with the relevant type [here](/handbook/marketing/lifecycle-marketing/email-processes-requests/#action-streams).

### Step 4: Activate Marketo smart campaign

- `00 Send Sales-Driven Invite` (optional) can be turned on and scheduled to send on a reoccurring basis if sales and XDRs are going to be inviting people to the conference. This is not required on all campaigns and should be activated after building the Sales-Driven email. After scheduling, Sales can add someone to the campaign in SFDC and that person will be automatically sent an email invite. There is a separate email for sales invites listed in the `email` folder
- `01 Manual upload processing` this will be activated by MOps if a manual upload is required. If you upload using the self-service process, this is not required.
- `02 Add as Marketing Invited` should only be used if XDRs are planning to follow up and drive attendance to the event. This should be scheduled AFTER the first email invite is scheduled to send. It will update everyone who had the email invite sent to them as `Marketing Invited`. They will be updated in the campaign and visible in SFDC. **Do not use this unless there is planned event drivers**
- `03 Interesting Moments` Activate this campaign. This should be turned on before any lists are uploaded.
- `04 Action stream processing` If your conference covers a relevant [Action Stream topic](/handbook/marketing/lifecycle-marketing/email-processes-requests/#action-streams), be sure you added the Action Stream to the tokens, then activate this campaign.

### Step 4a. Meeting Request Processing

These steps are not yet configured. If you are planning to do this for your next event, please create an issue with the Marketing Operations team.

### Step 4b. Set-up Asset Expiration

- Right click the Marketo program to open the program menu and select `Set local asset expiration`. Please note, this will not work without the correct permissions.
- A menu with all expiration capable assets will be shown as a segmented list. Example assets that can appear are `landing pages`, `active trigger campaigns` and `Reocurring batch campaigns`.
- Use the asset checkboxes to select all assets you wish to set an expiration for and select `set expiration` when ready. Assets that should be expired are `landing pages`, `active trigger campaigns` and `Reocurring batch campaigns`. Set your date and time and then submit.
  - Prioritize setting expirations on  `smart campaigns`.
  - Be mindful of which smart campaigns are set to expire and when because such an event will disable program registation flows.
- To remove expirations at a later date, right click on the program to return to the capable assets and submit changes.

### Step 5: Update the Salesforce campaign

Refer to instructions [above](/handbook/marketing/marketing-operations/campaigns-and-programs/#step-5-update-the-salesforce-campaign).

- Add the Marketo program link and SFDC campaign link to the epic.
- If the program is being ran by Digital Marketing, add the SFDC campaign under the parent campaign `Demand Gen Pulishers/Sponsorships`

If utilizing Allocadia, please refer to the instructions [above](/handbook/marketing/marketing-operations/campaigns-and-programs/#instructions-for-sfdc-campaign-creation-when-utilizing-allocadia).

## Steps to Setup in-person Conference Meetings

The instructions below are designed for meetings led by Field Marketing at large conferences.

### Step 1: Clone this program

- [Clone this program](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/ME17801A1)
- Use format `YYYYMMDD_Hyperscaler(if applicable)_Conference_ExecutiveMeetings`
- Note that if you are using Jifflenow for setting Executive Meetings or Booth Demos/Meetings, you will need a Marketo program and SFDC campaign for each type.

### Step 2: Sync to Salesforce

- At the program main screen in Marketo, where it says `Salesforce Sync` with "not set", click on "not set"
  - Click "Create New." The program will automatically populate the campaign tag, so you do not need to edit anything.
  - If you are a user of Allocadia, you will need to add the Allocadia ID sub-category ID to the `Description` field.
  - Click "Save"

### Step 3: Update Marketo tokens

- Update all tokens as they feed the email and interesting moments. Don't skip the epic token because it is included in the internal alert.
  - Be sure to update the `reply email` token. This is used in the confirmation email. You need to add the correct email address for cancellations or special accomodations, and update the subject to something descriptive. Keep the `%20` between each word in the subject so the subject populates correctly.
  - If your program qualifies for Action Streams (currently only available for Security), please update the {{my.Action Stream}} token with the relevant type [here](/handbook/marketing/lifecycle-marketing/email-processes-requests/#action-streams).

### Step 4: Activate Marketo smart campaign

- `00 Send Sales-Driven Invite` (optional) can be turned on and scheduled to send on a reoccurring basis if sales and XDRs are going to be inviting people to the conference. This is not required and the email needs to be updated before scheduling. After scheduling, Sales can add someone to the campaign in SFDC and that person will be automatically sent an email invite. There is a separate email for sales invites listed in the `email` folder
- `01 Manual upload processing` this will be activated by MOps if a manual upload is required. If you upload using the self-service process, this is not required.
- `02 Add as Marketing Invited` should only be used if XDRs are planning to follow up and drive attendance to the event. This should be scheduled AFTER the first email invite is scheduled to send. It will update everyone who had the email invite sent to them as `Marketing Invited`. They will be updated in the campaign and visible in SFDC. **Do not use this unless there is planned event drivers**
- `03 Interesting Moments` Activate this campaign. This should be turned on before any lists are uploaded.
- `01a Meeting Request Processing` Activate this campaign if you have a landing page. Do not activate it if you are only uploading leads.
- `04 Action stream processing` If your conference covers a relevant [Action Stream topic](/handbook/marketing/lifecycle-marketing/email-processes-requests/#action-streams), be sure you added the Action Stream to the tokens, then activate this campaign.

### Step 4b. Set-up Asset Expiration

- Right click the Marketo program to open the program menu and select `Set local asset expiration`. Please note, this will not work without the correct permissions.
- A menu with all expiration capable assets will be shown as a segmented list. Example assets that can appear are `landing pages`, `active trigger campaigns` and `Reocurring batch campaigns`.
- Use the asset checkboxes to select all assets you wish to set an expiration for and select `set expiration` when ready. Assets that should be expired are `landing pages`, `active trigger campaigns` and `Reocurring batch campaigns`. Set your date and time and then submit.
  - Prioritize setting expirations on  `smart campaigns`.
  - Be mindful of which smart campaigns are set to expire and when because such an event will disable program registation flows.
- To remove expirations at a later date, right click on the program to return to the capable assets and submit changes.

### Step 5: Update the Salesforce campaign

Refer to instructions [above](/handbook/marketing/marketing-operations/campaigns-and-programs/#step-5-update-the-salesforce-campaign).

If utilizing Allocadia, please refer to the instructions [above](/handbook/marketing/marketing-operations/campaigns-and-programs/#instructions-for-sfdc-campaign-creation-when-utilizing-allocadia).

## Steps to Setup Content Syndication in Marketo and SFDC

Use these instructions if you are NOT working through Integrate DAP. For the instructions for campaigns through DAP, go to the [section below](/handbook/marketing/marketing-operations/campaigns-and-programs/#steps-to-setup-content-syndication-in-marketo-and-sfdc---campaigns-through-integrate-dap).

### Step 1: Clone this program

[Clone this program](https://app-ab13.marketo.com/#PG5149A1).

- Do not use this program if your campaign is running through Integrate DAP. See instructions [below](/handbook/marketing/marketing-operations/campaigns-and-programs/#steps-to-setup-content-syndication-in-marketo-and-sfdc---campaigns-through-integrate-dap) for DAP.
- Use format `YYYY_Vendor_NameofAsset`
- If the content syndication is part of a package with an external vendor, promoting several assets or webcasts, keep all of the Marketo programs together in a folder for easy access as part of a single vendor program.

### Step 2: Sync to Salesforce

- At the program main screen in Marketo, where it says `Salesforce Sync` with "not set", click on "not set"
  - Click "Create New." The program will automatically populate the campaign tag, so you do not need to edit anything.
  - If you are a user of Allocadia, you will need to add the Allocadia ID sub-category ID to the `Description` field.
  - Click "Save"

### Step 3: Update Marketo tokens

- Change the `Content Title` to be the title as it appears in the Content Syndication program
  - If you have multiple assets, you can add additional tokens by dragging the text token into the main window and naming it (for example Content Title2)
- Change the `Content Type` to be the type of content
  - The only available options are `Whitepaper`, `eBook`, `Report`, `Video`, or `General`
  - If you add a Content Type value other than the above, the record will hit an error when syncing to Salesforce because these are the only currently available picklist items for `Initial Source`

### Step 4: Activate Marketo smart campaign

- `02 Interesting Moments` If you have multiple assets, you can create different interesting moments to indicate which asset was downloaded. To do this, click on Flow. In step 1 (Interesting Moment), click Add Choice. Choice 1 will appear. Select If `Last Event Notes` contains [name of asset]. Then, Type: Milestone, Description: Enter the Interesting Moment that you would like to appear. You can do this for as many assets as you have. Activate this campaign. This should be turned on before any lists are uploaded.
- Click to the "Schedule" tab and click `Activate`. It should be set that a person can only run through the flow once.
  - IMPORTANT: When you do your list upload, you must use the exact same wording in the `Last Event Notes` field so the automation will trigger. For example, you can say `Downloaded Guide to Software Supply Chain Security` in the Last Events Notes field. In Marketo, you can use `software supply chain` in the choice and the correct Description will trigger. Do not use the same string of words in your choices. You can see an example of the Interesting Moments set-up in the flow of [program](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SC21549C3ZN19). Disregard the rest of the processing as our process has changed.
- `01 Manual upload processing` - this will be activated by MOps if it is required. It will only be used on a manual upload and is not necessary if you use the self-service upload process.
  - When the leads are loaded to the campaign, the leads will immediately have an interesting moment, +15 score, and initial source, person source and person status update as needed.

### Step 4a: Set-up Asset Expiration

- `Content syndication` or Campaigns where the end of the campaign is difficult to pinpoint: there are 2 different options to consider:
  - Set up expiration **12 weeks after the estimated campaign end**, again at the end of the day. This is useful for campaigns where a third-party is handling lead collection for us and we are manually uploading lead lists. This also supplies a buffer in the event the SLA is not met on schedule and the campaign runs longer than anticipated.
  - **Do not use asset expiration at all**. We often have content syndication focused programs that go on indefinitely so expiration does not make sense to utilize in this case. Assets can be discontinued in the future.

#### Setting Asset Expiration On A Program

- Right click the Marketo program to open the program menu and select `Set local asset expiration`. Please note, this will not work without the correct permissions.
- A menu with all expiration capable assets will be shown as a segmented list. Example assets that can appear are `landing pages`, `active trigger campaigns` and `Reocurring batch campaigns`.
- Use the asset checkboxes to select all assets you wish to set an expiration for and select `set expiration` when ready. Assets that should be expired are `active trigger campaigns` and `Reocurring batch campaigns`. Set your date and time and then submit.
  - Prioritize setting expirations on  `smart campaigns`.
  - Be mindful of which smart campaigns are set to expire and when because such an event will disable program registation flows.
- To remove expirations at a later date, right click on the program to return to the capable assets and submit changes.

### Step 5: Update the Salesforce campaign

Refer to instructions [above](/handbook/marketing/marketing-operations/campaigns-and-programs/#step-5-update-the-salesforce-campaign).

- Add the Marketo program link and SFDC campaign link to the epic.
- If the program is being ran by Digital Marketing, add the SFDC campaign under the parent campaign `Demand Gen Pulishers/Sponsorships`

If utilizing Allocadia, please refer to the instructions [above](/handbook/marketing/marketing-operations/campaigns-and-programs/#instructions-for-sfdc-campaign-creation-when-utilizing-allocadia).

## Steps to Setup Content Syndication in Marketo and SFDC - Campaigns through Integrate DAP

If your content syndication program is not running through Integrate DAP, please use the instructions [above](/handbook/marketing/marketing-operations/campaigns-and-programs/#steps-to-setup-content-syndication-in-marketo-and-sfdc).

The SFDC campaigns for these are set-up by Region/Vendor/Asset combination. The Marketo programs are created by Region/Vendor pair. If your region/vendor already exists in Marketo, you only need to add the new asset to the tokens and automation. If you only need to add a new asset to an existing Region/Vendor pair in Marketo, skip to the instructions below.

You must keep the same Asset number for existing assets, otherwise the existing automation will fail. A complete list of the current assets is available [here](https://docs.google.com/spreadsheets/d/1PY2_uO2qg4vszSFOBrWXoHfIlNIt2qmjdr6A6fBEtcg/edit#gid=161086184). Be sure to add new assets to this list to maintain a SSOT for reference.

Interesting Moments for content syndication are global. This means that you only need to follow the instructions below to update the tokens at the folder level and the Vendor at the program level. IMs are automated using this data.

### Instructions to add a new Region-Vendor-Asset combo

### Step 1: Create SFDC campaigns

- Create the SFDC campaigns directly in Salesforce. Each asset requires a campaign.
- Format: YYYY_Region_Vendor_AssetName (examples: 2024_AMER_Demand_Science_2023DevSecOpsReport:ProductivityEfficiency, 2024_EMEA_Integrate_AchieveDevSecOpswithGitLabCI/CD)
- Associate this campaign to the appropriate [parent campaign](https://docs.google.com/spreadsheets/d/1PY2_uO2qg4vszSFOBrWXoHfIlNIt2qmjdr6A6fBEtcg/edit#gid=365937335).
- Refer to instructions  [above](/handbook/marketing/marketing-operations/campaigns-and-programs/#updating-sfdc-fields).

### Step 2: Clone this program

[Clone this program - ContentSynd_Region_Vendor_DAP](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/PG15954A1)

- Use format `ContentSynd_Region_Vendor`
- Save the program to the folder: "DAP Content Syndication"
- **For new EMEA programs only**: Have a member of the MOps team make the following updates. You can put a note in the `#mktgops` Slack channel and provide the new program Marketo link and a link to these instructions, OR you can add the `MktgOps:: 00: Triage` label to your set-up issue with this information in a comment. **MOPS**: Go to [this program](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SC42027A1ZN19) (opt-in value change). Add the Marketo program name to the `Member of program` exclusion list. This makes sure that the compliance fields for Germany are not overwritten by our system processes.

### Step 3: Update Marketo tokens

- Tokens for the asset name and type are handled at the folder level (DAP Content Syndication). The tokens for the SFDC campaigns are handled at the program level (for example: ContentSynd_AMER_Integrate).
- Be sure to reference the [existing asset list](https://docs.google.com/spreadsheets/d/1PY2_uO2qg4vszSFOBrWXoHfIlNIt2qmjdr6A6fBEtcg/edit#gid=161086184) when you complete the tokens. Do not include the `Asset [number] -` in the token value. 
- To add a new asset, click on the [DAP Content Syndication](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/MF26194C3) folder. Click "My Tokens".
- Click and drag the word `Text` into the token area.
- Under Token Name, name the token `Assetx-Title`. Marketo will add the `my.` and brackets. For example, if you are adding asset 18, name the token `Asset18-Title`.
- Under Value, enter the name of the asset without the Asset Number. This will be used to populate the Interesting Moments and the asset number isn't necessary.
- Click Save.
- Click and drag the word `Text` into the token area.
- Under Token Name, name the token `Assetx-Type`. Marketo will add the `my.` and brackets. For example, if you are adding asset 18, name the token `Asset18-Type`.
- Under Value, enter the asset type. The options are `Whitepaper`, `eBook`, `Report`, `Video`, `General`, or `Infographic`
- Click Save.
- After you add your asset name and type to the main content syndication folder, click on the program you created for this region/vendor. 
- Complete the `{{campaign owner email}}`, `{{region}}`, and `{{vendor}}` tokens.
- In order to complete the `{{my.Assetx-sfdc_campaign}}`, the campaigns must be created in SFDC first and the campaign in SFDC must be marked as `Active`. This token will validate the campaign exists in SFDC in order to populate. Pay close attention to the asset number you are populating. The tokens are not in order.
- Add the SFDC campaign for each asset you are using for this Region/Vendor pair. 

### Step 4: Modify & Activate Marketo smart campaigns

It is critical that any reference to asset number in Marketo automation (not tokens) uses the format `Asset [number] -` ("asset number space -"). For example `Asset 1 -` and `Asset 12 -`. This allows the automation to select the proper asset since we are using "contains" to trigger the automation. Without the `(space) -` after the asset number, both Asset 12 and Asset 1 will be recorded as Asset 1.

- If your asset qualifies for an Action Stream, click on the [Check for Action Stream asset (content synd)](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SC58170A1ZN19) campaign. If your asset does not qualify for an Action Stream, skip this step.
  - **Smart list**: Filter 1 - Add the Asset number (follow the existing format shown in the filter)
  - **Flow**: Add the Asset number to the relevant Choice. You will see the Action Stream listed in "New Value" 
- `01 Processing`
  - **Smart list**: No changes. Confirm that all references to the Marketo program match your program name.
  - **Flow** (confirm that program references match the Marketo program name):
  - `Step 3 - Add to SFDC Campaign` - Delete the selection for any assets you are not using for this Region/Vendor by clicking the X next to the relevant Choice. Confirm that you are deleting the choice referencing the correct asset.
  - If you add any SFDC campaigns to the list, be sure to use "Content Syndication asset CONTAINS Asset x -" in your filter.
  - **Double touch campaigns** - The template is set-up to accommodate double touch campaigns. There is a second `Add to SFDC Campaign` flow step that is based on "Content Syndication Asset 2". You do not need to remove this. However, if you will NEVER use a double touch campaign with the vendor/region, it is recommended to remove this flow step. In case you do not, it is set-up that if "Content Syndication Asset 2" is empty, the step will be skipped.
  - `Step 6 - Execute Campaign` (Content Syndication Asset) - (Action Streams) If any of the assets being promoted are associated with an Action Stream, add them to this Execute Campaign flow step. Several assets are already listed. This will call a separate campaign to process the lead so it is properly added to the relevant Action Stream.
  - **Double touch campaigns** - You will need to add a second Execute Campaign to check for Action Stream qualification for "Content Syndication Asset 2". Confirm the second execute campaign is not on your processing flow (one for Content Syndication Asset, one for Content Syndication Asset 2). If it is not, add "Execute Campaign" and Add 2 choices. Choice 1: If Content Syndication Asset 2 is emtpy, Do Nothing. Choice 2: If Content Syndication Asset 2 contains "list of asset x -" (you can copy this from the Content Syndication Asset execute campaign), Executed campaign: Check for Action Stream asset (content syndication). Use parent token context: false. Default Choice: Do nothing
  - **Schedule**: Click on `Activate`. This should be set to `Each person can run through the flow every time`.
- `03 Manual upload processing` - No action is required here. This campaign is used if the DAP sync fails.
- `Interesting Moments` - These are global, but you must add new assets to the `Flow`. Click the global [Interesting Moments - Content Syndication](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SC58353C3ZN19) executable campaign.
  - Click `Add Choice`.
  - To add the new choice, change it to `Content Syndication Asset contains Asset x -`, `Type: Milestone, Description: Downloaded {{my.Assetx-Type}}-{{my.Assetx-Title}} from 3rd party site: {{my.vendor}}`. Replace the x in the token with the asset number.
  - Move the new asset number to the bottom of the list (to keep the numbers in order).
- `Not added to SFDC` - This isn't a campaign to activate, but this report will help you track issues with leads being added to SFDC.
  - **Smart List**: In filter 2 - `Member of SFDC Campaign` add the specific SFDC campaigns for this program. Click on green plus sign, then start typing. A list of SFDC campaigns will come up and you can click on them to add them to the list. Click OK.

### Step 5: Important information for content syndication list uploads

This applies to a manual upload or the sync from DAP.

When you do your list upload, you must be sure that the `Asset [number] -` that corresponds to each asset is included in the `Content Syndication Asset` field so the automation will trigger, using the format `Asset [number] -` ("asset number space -"). The recommendation is to populate the `Content Syndication Asset` field using the format `Asset [number] - Name of asset` (example: `Asset 2 - 2023 Global DevSecOps Report: Security & Compliance`). A complete list of current assets with their asset number can be found [here](https://docs.google.com/spreadsheets/d/1PY2_uO2qg4vszSFOBrWXoHfIlNIt2qmjdr6A6fBEtcg/edit#gid=161086184). This also applies if the responses are set directly from the vendor. They must be set-up in the vendor system with the appropriate asset number.

It is critical that any reference to asset number in the upload or send from the vendor uses the format `Asset [number] -` ("asset number space -"). For example `Asset 1 -` and `Asset 12 -`. This allows the automation to select the proper asset since we are using "contains" to trigger the automation. Without the `(space) -` after the asset number, both Asset 12 and Asset 1 will be recorded as Asset 1. These instructions apply to the "Content Syndication Asset 2" for double touch campaigns field as well.

### Step 6: Test lead flow into your Content Syndication programs

There are a few common errors we see with Content Syndication leads. You can address most of these before sending the first test by working with the vendor to confirm they have the correct values.

- `Employee Bucket` (Employee count): Values [here](/handbook/marketing/marketing-operations/list-import/#required-data-and-recommended-data). These values must be written exactly as shown (using commas and correct spacing).
- `State`: We only accept [State values](/handbook/marketing/marketing-operations/marketo/#standardization-of-country-or-state-values) for the United States, Canada, and Australia. The vendor must pass blank values for any other country, otherwise SFDC will reject the lead.
- `Content Syndication Asset`: Required field. The values for this field need to be passed exactly as outlined above in step 5. If they are not, the automation on the program will fail.
- `Content Syndication Asset 2`: Only required for double touch campaigns. This value should be pushed as blank otherwise. The values for this field need to be passed exactly as outlined above in step 5. If they are not, the automation on the program will fail.
- After verifying the common field mistakes above, work with the vendors to submit test leads through DAP.

1. After the test lead is submitted, go to Marketo, click on the "Database" tab, and enter the email address of the test record in the search box under "Quick Find". You can always get to this box by clicking on the "Default" folder in the left sidebar.
   - If the record was found, that means the pass to Marketo worked properly and you can continue to the next step.
   - If it was not found, confirm the email address and search again. If you still do not find the record in the database, confirm with the vendor that they sent the test leads and that their system is properly configured to pass records directly to Marketo.
1. Open the test record in the Marketo database. Go to the `Activity History` tab. If you have done this before and saved your view, select your custom view called "Content Syndication Verification". If this is the first time you are completing this process, click "Filter: None", select "Custom" and set-up a custom view as follows:
   - Under Smart Campaign, select "Change Program Status", "Interesting Moment"
   - Under Salesforce.com, select "Add to SFDC Campaign"
   - Click "Save As" and name the view "Content Syndication verification"
1. Confirm that the program you are testing is the program that the lead was added to with a status of "Downloaded". You will see this as a "Change Program Status" and it will show "name of the program" changed from "Not in program" to "Downloaded".
   - If the record was not added to a program, confirm that the `01 Processing` campaign is activated in the program. If not, activate it and have another test sent through. If the campaign is active or the lead was added to the wrong program, this means the vendor pushed an incorrect ID for the program and you need to follow-up with them directly to correct it.
1. Confirm that the record was added to the correct SFDC Campaign for the asset that was tested.
   - If you see an SFDC campaign name, this means the addition to SFDC was successful.
   - If you see an error that looks similar to `"Failed: {Invalid_OR_NULL_FOR_RESTRICTED_PICKLIST}` for the "Add to SFDC Campaign" activity type, this means the record did not push to SFDC. Read the error as it will tell you what was wrong. It is usually either due to a State Value or an incorrect value in Employee Bucket. Have the vendor correct this and push another test lead.
   - If there was no failure but the lead either wasn't added or was added to the wrong campaign, this means that the SFDC campaign was not added to the correct token, the asset was not added to the Flow steps, or the `Content Syndication Asset` field value was incorrect from the vendor.
1. Confirm that the correct Interesting Moment was Triggered
   - If no IM triggered, confirm that the asset was added to the [Interesting Moments - Content Syndication](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SC58353C3ZN19) campaign. If the asset is listed, check to make sure that you have all of the assets set-up correctly in the Flow steps. You are likely missing an asset in the flow steps or the format of the `Content Syndication Asset` field was incorrect from the vendor.
1. If you need to check the email deployment, change the "Filter" view to Email and confirm that the correct email was sent. In most cases, this should be the Welcome Email without a language specified.
1. Check the `Not Added to SFDC` Smart List to make sure your test lead doesn't show up there.

### Steps to Setup Content Syndication - Campaigns through Integrate DAP - adding a new asset

If your content syndication program is not running through DAP, please use the instructions [above](/handbook/marketing/marketing-operations/campaigns-and-programs/#steps-to-setup-content-syndication-in-marketo-and-sfdc).

The SFDC campaigns for these are set-up by Region/Vendor/Asset combination. The Marketo programs are created by Region/Vendor pair. If your region/vendor already exists in Marketo, you only need to add the new asset to the tokens and automation. These instructions are to add a new asset to an existing region/vendor program in Marketo. You can also use these instructions to add additional assets (beyond the 58 already determined) to a new Region/Vendor Marketo program.

### Step 1: Add new assets to the SSOT spreadsheet

You must keep the same Asset number for existing assets, otherwise the existing automation will fail. A complete list of the current assets is available [here](https://docs.google.com/spreadsheets/d/1PY2_uO2qg4vszSFOBrWXoHfIlNIt2qmjdr6A6fBEtcg/edit#gid=161086184). Be sure to add new assets to this list to maintain a SSOT for reference.

### Step 2: Create SFDC campaigns

- Create the SFDC campaigns directly in Salesforce. Each asset requires a campaign.
- Format: YYYY_Region_Vendor_AssetName (examples: 2024_AMER_Demand_Science_2023DevSecOpsReport:ProductivityEfficiency, 2024_EMEA_Integrate_AchieveDevSecOpswithGitLabCI/CD)
- Associate this campaign to the appropriate [parent campaign](https://docs.google.com/spreadsheets/d/1PY2_uO2qg4vszSFOBrWXoHfIlNIt2qmjdr6A6fBEtcg/edit#gid=365937335).
- Refer to instructions  [above](/handbook/marketing/marketing-operations/campaigns-and-programs/#updating-sfdc-fields).

### Step 3: Find the existing Marketo program for your Region/Vendor pair

### Step 4: Add new Marketo tokens

- Tokens for the asset name and type are handled at the folder level (DAP Content Syndication). The tokens for the SFDC campaigns are handled at the program level (for example: ContentSynd_AMER_Integrate).
- Be sure to reference the [existing asset list](https://docs.google.com/spreadsheets/d/1PY2_uO2qg4vszSFOBrWXoHfIlNIt2qmjdr6A6fBEtcg/edit#gid=161086184) when you complete the tokens. Do not include the `Asset [number] -` in the token value. 
- To add a new asset, click on the [DAP Content Syndication](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/MF26194C3) folder. Click "My Tokens".
- Click and drag the word `Text` into the token area.
- Under Token Name, name the token `Assetx-Title`. Marketo will add the `my.` and brackets. For example, if you are adding asset 18, name the token `Asset18-Title`.
- Under Value, enter the name of the asset without the Asset Number. This will be used to populate the Interesting Moments and the asset number isn't necessary.
- Click Save.
- Click and drag the word `Text` into the token area.
- Under Token Name, name the token `Assetx-Type`. Marketo will add the `my.` and brackets. For example, if you are adding asset 18, name the token `Asset18-Type`.
- Under Value, enter the asset type. The options are `Whitepaper`, `eBook`, `Report`, `Video`, `General`, or `Infographic`
- Click Save.
- Go to the program for the Region/Vendor you are adding an asset for (for example ContentSynd_ABM_AMER_Madison Logic). Click "My Tokens"
- Click and drag `SFDC Campaign` into the token area.
- Under Token Name, name the token `Assetx-sfdc_campaign`. Marketo will add the `my.` and brackets. For example, if you are adding asset 18, name the token `Asset18-sfdc_campaign`.
- Under Value, start typing the SFDC campaign you created in Step 2. It may take time for SFDC to sync to Marketo, so if it is not immediately available, use a placeholder campaign and set a reminder to come back to it after you complete the other steps.
- Click Save.

### Step 5: Modify Marketo smart campaigns

It is critical that any reference to asset number in the Marketo automation below uses the format `Asset [number] -` ("asset number space -"). For example `Asset 1 -` and `Asset 12 -`. This allows the automation to select the proper asset since we are using "contains" to trigger the automation. Without the `(space) -` after the asset number, both Asset 12 and Asset 1 will be recorded as Asset 1.

- `Interesting Moments` - These are global, but you must add new assets to the `Flow`. Click the global [Interesting Moments - Content Syndication](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SC58353C3ZN19) executable campaign. 
  - Click `Add Choice`.
  - To add the new choice, change it to `Content Syndication Asset contains Asset x -`, `Type: Milestone, Description: Downloaded {{my.Assetx-Type}}-{{my.Assetx-Title}} from 3rd party site: {{my.vendor}}`. Replace the x in the token with the asset number.
  - Move the new asset number to the bottom of the list (to keep the numbers in order).  

- `01 Processing`
  - **Flow**:
  - `Step 3 - Add to SFDC Campaign` - Click `Add Choice`. To add the new choice, change it to `Content Syndication Asset contains Asset x -`, `Campaign: {{my.Assetx-sfdc_campaign}}.` Replace the x in the token with the asset number. This is the token you added in Step 4. `Status: Downloaded`.

- **Double touch campaigns** - The template is set-up to accomodate double touch campaigns. There is a second `Add to SFDC Campaign` flow step that is based on "Content Syndication Asset 2". You do not need to remove this. However, if you will NEVER use a double touch campaign with the vendor/region, it is recommended to remove this flow step. In case you do not, it is set-up that if "Content Syndication Asset 2" is empty, the step will be skipped.

  - `Step 6 - Execute Campaign` (Content Syndication Asset) - If any of the assets being promoted are associated with an Action Stream, add them to this Execute Campaign flow step. Several assets are already listed. This will call a separate campaign to process the lead so it is properly added to the relevant Action Stream.

- `03 Manual upload processing` - No action is required here. This campaign is used if the DAP sync fails.

- `Not added to SFDC`: This isn't a campaign to activate, but this report will help you track issues with leads being added to SFDC.
  - **Smart List**: In filter 2: `Member of SFDC Campaign` add the specific SFDC campaigns for this program. Click on green plus sign, then start typing. A list of SFDC campaigns will come up and you can click on them to add them to the list. Click OK.

### Step 6: Important information for content syndication list uploads

When you do your list upload, you must be sure that the `Asset [number] -` that corresponds to each asset is included in the `Content Syndication Asset` field so the automation will trigger, using the format `Asset [number] -` ("asset number space -"). The recommendation is to populate the `Content Syndication Asset` field using the format `Asset [number] - Name of asset` (example: `Asset 2 - 2023 Global DevSecOps Report: Security & Compliance`). A complete list of current assets with their asset number can be found [here](https://docs.google.com/spreadsheets/d/1PY2_uO2qg4vszSFOBrWXoHfIlNIt2qmjdr6A6fBEtcg/edit#gid=161086184). This also applies if the responses are set directly from the vendor. They must be set-up in the vendor system with the appropriate asset number.

It is critical that any reference to asset number in the upload or send from the vendor uses the format `Asset [number] -` ("asset number space -"). For example `Asset 1 -` and `Asset 12 -`. This allows the automation to select the proper asset since we are using "contains" to trigger the automation. Without the `(space) -` after the asset number, both Asset 12 and Asset 1 will be recorded as Asset 1. These instructions apply to the "Content Syndication Asset 2" for double touch campaigns field as well.

### Step 7: Test the new asset in your Content Syndication programs

Follow the instructions in [Step 6 above](/handbook/marketing/marketing-operations/campaigns-and-programs/#step-6-test-lead-flow-into-your-content-syndication-programs) to test the new asset. Focus specifically on the `Add to SFDC Campaign` and `Interesting Moments` to QA a new asset.

## Integrate DAP Closed Loop Feedback

Feedback on leads received via the Integrate service is an automated process done via Marketo webhooks, with 7 in total. The smart campaign triggers, smartlist filters and "holding" smart campaign used for the automation are found [on this program](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/PG16388A1). There are two smart campaigns used and for two reasons: The `Activation` trigger acts as a holding cell that allows for newly received leads to go through multiple GitLab processes before firing a webhook, e.g. being contacted by SDRs, receiving scoring, being marked as a non-deliverable email. The flow also separates normal leads from `test` leads. The second trigger, `Webhook calls`, calls a webhook after the 5 day hold ends. Marketo webhooks require the use of trigger campaigns, so this should not be set to a scheduled campaign.

The 7 webhook feedback automations we send to Integrate are:

### Accepted Webhooks

- **Accept**: This is a generally accepted lead
- **Low**: This is also an accepted lead, but we share the feedback that the lead was low quality. This can be for multiple reasons, ranging from the leads being `Disqualified` to having a very low `demographic` score

### Not Accepted Webhooks

- **Bad Data**: This should be generally thought of as being similar to a "spam" lead
- **Bad Phone**: Fired when a SDR marks the lead's listed phone number as not usable or wrong. Inegrate can return these leads to us with the phone number corrected, while other return webhooks will cannot be returned
- **Bounce**: The email address was deemed unreachable by Marketo. Either our emails have bounced or are being blocked. We cannot accept or use the lead
- **Competitor**: The lead is part of a competing company and we are not interested in receiving further leads from this competitor. Use this as an error notification, meaning our lead sourcing filters that needs to be addressed
- **Test**: When Integrate needs to send us test leads, this webhook will be triggered by those incoming leads. Please make sure the teams sending us leads via the service are aware of the needed filters to trigger the automated feedback via webook

## Steps to Setup Surveys in Marketo and SFDC

**Please Note: Once you have created your survey program, please ping Marketing Ops in the `#mktops` Slack channel and link your program for review. Each survey is unique and may require tweaks to the setup.**

### Step 1: Clone program template

- [General survey template](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/PG6402A1)
- Use format `YYYY_MM_SurveyName`

### Step 2: Sync to Salesforce

- At the program main screen in Marketo, where it says `Salesforce Sync` with "not set", click on "not set"
  - Click "Create New." The program will automatically populate the campaign tag, so you do not need to edit anything.
  - If you are a user of Allocadia, you will need to add the Allocadia ID sub-category ID to the `Description` field.
  - Click "Save"

### Step 3: Create issue for lead upload

- If the survey requires a manual upload via a list upload, focus attention on updating the `01 Processing` batch smart campaign. For manual list uploads, the batch will be activated manually by MktgOps during the upload process.
- If the survey requires a Zapier automation, consult MktgOps [via issue](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/blob/master/.gitlab/issue_templates/zapier_connection_request.md) on building out the automation, MktgOps will also be the ones to activate the `01 processing` campaign

### Step 4: Update the Salesforce campaign

- Refer to instructions [above](/handbook/marketing/marketing-operations/campaigns-and-programs/#updating-sfdc-fields).
- Add the Marketo program link and SFDC campaign link to the epic.

If utilizing Allocadia, please refer to the instructions [above](/handbook/marketing/marketing-operations/campaigns-and-programs/#instructions-for-sfdc-campaign-creation-when-utilizing-allocadia).

### Step 5: Troubleshooting

1. Look at the `Results` tab of the smart campaign, if there are errors, you will clearly see them there.
1. If the lead is not pushing to SFDC? Make sure that the `Person Source` is not `SurveyName`
1. If existing leads are not being pulled into the program, it is likely the `SurveyName` field is capturing the wrong name.
1. If net-new leads are not being pulled into the program, it is likely the `Person Source` SurveyName was not updated correctly.

## Steps to Setup Direct Mail Campaigns

### Step 1: Create the Salesforce campaign

- Clone the [#TEMPLATE - Direct Mail](https://gitlab.my.salesforce.com/7014M000001dlh9)
- Update Campaign name to `whatever your campaign tag is`
- NOTE: You do NOT need a corresponding Marketo campaign. All information and tracking is done via this campaign.

### Step 2: Update the Salesforce campaign

- Click on `Advanced Setup` to make sure statuses correspond to those listed in the [Direct Mail progression statuses](/handbook/marketing/marketing-operations/campaigns-and-programs/#direct-mail). Do not edit these, if you need them updated, please reach out to MktgOps.
- Confirm the `type` is `Direct Mail`
- Refer to instructions [above](/handbook/marketing/marketing-operations/campaigns-and-programs/#updating-sfdc-fields).

## Steps to Setup LinkedIn Lead Gen Form

We have listeners set up in Marketo listening certain parameters. Please check the `Marketo Listener` column below to see if a program is already set up in Marketo. If it is, you do not need to create a new listener, you only need to add the content to the program. Otherwise, please follow the process outlined below to ensure leads are being captured.

**Active or in progress campaigns**

| Campaign                                 | Campaign Parameter for Tracking |Marketo Listener?|
|------------------------------------------|---------------------------------|-----------------|
| DevOps GTM - active                      | devopsgtm                       |[Yes](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/PG8342A1)|
| AutoSD - active                          | autosd                          |[Yes](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/PG12823A1)|
| DevSecOps Platform -                     | devsecopsplat                   | No |
| Security & Compliance                    | seccomp                         |[Yes](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/PG14557A1)  |
| CI Use Case                              | singleappci                     |[Yes](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/PG6803A1)|
| PubSec - DevOps GTM only                 | amer-pubsec                     |[Yes](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/PG7588A1)|

**Deactivated or old campaigns, no longer in use** These listeners are no longer active and would need to be set-up prior to running a LinkedIn campaign for them.

| Campaign                                 | Campaign Parameter for Tracking |Marketo Listener?|
|------------------------------------------|---------------------------------|-----------------|
| Version Control & Collaboration Use Case | vccusecase                      |  |
| Simplify DevOps                          | simplifydevops                  |  |
| Jenkins                                  | cicdcmp2                        |      |
| Increase Operational Efficiencies           | operationalefficiences          ||
| Deliver Better Products Faster           | betterproductsfaster            ||
| Reduce Security and Compliance Risk       | reducesecurityrisk              ||
| CI Build & Test Auto                       | cicdcmp3                        ||
| OctoCat                                   | octocat                         ||
| DevSecOps Use Case                       | devsecopsusecase                | |
| AWS                                       | awspartner                      ||
| GitOps Use Case                          | iacgitops                       | |

If this form is in a different language, make sure that the LinkedIn Form has that exact language in the form name (as spelled below). We currently support:

- Japanese
- Italian
- French
- Spanish
- Korean
- German
- Portuguese

When someone fills out these forms, they will be automatically added to the [Language Segmentation](/handbook/marketing/marketing-operations/marketo/#segmentations) allowing them to receive messages in their local language.

### Create LinkedIn Lead Gen Form in LinkedIn (digital marketing)

- Clone the form template according to the region your campaign is located (AMER, EMEA/APAC). The reason for the different forms is compliance related, so please be sure to use the correct template for the region. If you are setting up all three regions, you will need to use both templates.
  - Ensure the 'form name' includes the utm_campaign exactly as it appears in the table above
  - Form name should also include the utm_content exactly as listed in the issue
  - Form names in AMER forms also need to include `amer` in the form name
  - Example of correct format
    - _Ex.devopsgtm_amer_guide-to-devops_feb2023_
    - NOTE: If there is a segment specific version, add the segment inside the content name for better tracking. _devopsgtm_amer_guide-to-smb-devops_feb2023..._
- Fill out 'offer headline' and 'offer details'
- Update 'confirmation message' and `landing page URL`
  - The template has the homepage as a standard landing page URL, but if there is a more appropriate page, update the URL and keep the UTMs the same
- Update hidden field for `utm_campaign` and `utm_content`
  - This is very important to have the correct campaign naming to ensure the lead data is passed to Marketo
- Save Form
- Navigate to the campaign that will be using the new form and edit
- In `form details` select `download` as the call-to-action and select your new form
  - Note: If your new asset is launching in multiple regions, confirm you're adding the correct form to the correct regional campaign

### Step 1: For new campaigns not listed above

[clone this program](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/PG8361A1)

- Use format `YYYY_Social_[Name]_[parameter]_LinkedIn Lead Gen`
- Campaign parameter must be one of the [GTM campaign parameters](/handbook/marketing/utm-strategy/#the-new-utm_campaign-structure) (usually used as utm_campaign - ex. `devopsgtm` or `autosd`). The Salesforce campaign name must include the campaign parameter for the responses to roll up to the correct campaign on the Sisense dashboards.

_e.g.: 2020_Social_AutomatedSoftwareDelivery_autoSD_LinkedIn Lead Gen_

### Step 2: Sync to Salesforce

- At the program main screen in Marketo, where it says `Salesforce Sync` with "not set", click on "not set"
  - Click "Create New." The program will automatically populate the campaign tag, so you do not need to edit anything.
  - Click "Save"

### Step 3: Update the Salesforce campaign

- Add `Parent Campaign` of `2020_Social_LinkedIn_Lead Gen`
- Refer to instructions [above](/handbook/marketing/marketing-operations/campaigns-and-programs/#step-5-update-the-salesforce-campaign).
- Add the Marketo program link and SFDC campaign link to the epic or issue.

### Step 4: Go back into Marketo Template

- Update local program tokens. Note: The template is set-up for one asset per form. If you have multiple assets, you can add additional tokens for each asset.
**Smart List**
- Update the campaign smart list filter with `contains` and the prefix
  - `Fills out LinkedIn Lead Gen Form`, `Lead Gen Form Name contains [parameter]`
  - Available parameters are [listed above](/handbook/marketing/marketing-operations/campaigns-and-programs/#steps-to-setup-linkedin-lead-gen-form), or create new if not listed.
- `Filled out LinkedIn Lead Gen Form` filter - Make sure that other programs are excluded if your new campaign will use a similar LinkedIn Lead Gen form name. Common exclusions are `amer-pubsec` and `abmkey`as these flow through separate campaigns. This is not a full list of all exclusions required as this will be based on what you are setting up. You can review existing LI Lead Gen programs for examples of exclusions.
- Other programs are looking for the parameters [listed above](/handbook/marketing/marketing-operations/campaigns-and-programs/#steps-to-setup-linkedin-lead-gen-form). If your LI Lead Gen form contains any of these, you will need to exclude your campaign from the existing program processing (for example, if your LI Lead Gen Form contains `devsecopsusecase`, you will need to exclude your LI Lead Gen form name from processing through the others that use `devsecopsusecase`). Please see the testing section below as this provides instructions to make sure you captured exclusions properly. Note that the ABM Team runs LinkedIn campaigns using `abmkey` and the campaign parameters above, so `abmkey` must always be excluded.
**Flow**
- No change to `1 - Remove from Flow` - If you remove this temporarily to test, be sure to add it back in before going live. `Remove from Flow`: Choice 1: If Email Address contains @gitlab.com. Campaign: this campaign. Default Choice: Campaign is Do nothing
- `2 - Send Email` - This step will vary. In general, you will set Choice 1: If Filled out LinkedIn Lead Gen Form contains [content name from form] then, Email [select appropriate email autoresponder]. You can have multiple choices here, one for each asset. Even if you only have one asset, best practice is to set up a choice with the default of Do Nothing. This is another backup in case the automation fails and will make sure that people don't receive an autoresponder email for another asset because the content name won't be found. You can view an example with multiple assets [here](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SC21615C3ZN19).
- No change to `3 - Change Program Status` - This is automatically in the template. Program: [Marketo program name] - New Status Paid Social > Responded
- `4 - Interesting Moment` Set this up the same way as the Send Email logic, except you will change the description to match the asset. In general, you will set Choice 1: If Filled out LinkedIn Lead Gen Form contains [content name from form] then, Type Milestone, Description: Filled out LinkedIn form to view asset: [asset name]. Default choice should be generic: "Filled out LinkedIn form to view [GTM name] asset."
  - If you set up additional tokens for each asset, you can use the tokens to populate the Interesting Moments
- No changes to steps 5 and 6.
- Step 7: For EMEA or APAC: `7 - Change Data Value` - Delete this step. Those forms use a checkbox to gather consent, so the correct opt-in status will be applied upon submission and this step cannot be included in the flow.
- Step 7: For AMER: `7 - Change Data Value` - No change. Keep this step. In AMER, the opt-in language is included on the form, so this step is required to complete the opt-in.
- Step 8: `Execute campaign` - This processes Action Stream tagging. No action required on this step. This should be: Executed Campaign: Action Stream tagging: (LinkedIn) Check Asset
- Turn on / Activate the triggered campaign in the `schedule` tab of the smart campaign
- All LinkedIn programs with your form prefix will now flow through this campaign
- If your new form promotes an asset that [qualifies for an action stream](/handbook/marketing/lifecycle-marketing/email-processes-requests/#action-streams), click on the [Action Stream tagging: (LinkedIn) Check Asset](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SC58851A1ZN19) program. Otherwise, skip this step.
- Smart List: Add the name of the LinkedIn Lead Gen form in filter 1.
- Flow: Add the name of the LinkedIn Lead Gen form in filter 1.

### Step 5: Auto-responder email

- The autoresponder is based on tokens and will not require any changes if you only have one asset.
- If you have multiple assets, you will need to clone the autoresponder email and update all of the tokens in the email to match the additional tokens you added to the program for each asset.

### Step 6: Test your LinkedIn Lead Gen Set-up

- Have Digital Marketing send a test record through the form. You can request this in the issue using the following text, updating the indicated sections:   `The Marketo program has been set-up for [name of asset] in [segment/region if applicable - you will not always need to provide this]. The automation will trigger based on [gtm code] and [content name]. Please submit a test record.`
- After the test lead is submitted, open the test record in the Marketo database. Go to the `Activity History` and confirm:
   1. The form that was submitted. You will pay attention to the gtm name and the content name. Make sure this is the form you wanted to test. If confirmed, move to step 2.
   1. Confirm the correct autoresponder for the requested asset deployed (digital)
   1. Confirm that no other autoresponders were sent (campaigns)
   1. Confirm that the correct Interesting Moment was triggered (campaigns)
   1. Confirm that the test record was added to the SFDC campaign (this may take a few minutes) (campaigns)
   1. Confirm that the test record was not sent any other emails or added to other programs as a result of this test (campaigns)

### Step 7: Update this Handbook page

- Update this [handbook page with the parameter](/handbook/marketing/marketing-operations/campaigns-and-programs/#steps-to-setup-linkedin-lead-gen-form) with a `yes` and a link to the parameter and campaign you have set up.

## Test your Marketo program setup

1. Submit a test registration on the webpage for this campaign. If you need to create a new test record (instead of using your existing email address), you can add a `+` after your username: for example `jdoe+testuser@gitlab.com`. When you run your test, pay attention to if the flow has a "Remove from flow" for GitLab email addresses. If this is the case, you need to either delete that flow step or test with another email address.
1. After the test lead is submitted, go to the Marketo database by clicking `Database` in the Marketo navigation. Then click on `Default` on the left side menu.
1. Search for the email address you used for your test record and open the test record in the Marketo database. Go to the Activity History and confirm:
     1. The form was submitted
     1. The record was added to the correct program with a successful status (should not be No Action)
     1. Confirm the correct autoresponder for the requested asset deployed
     1. Confirm that no other autoresponders were sent
     1. Confirm that the correct Interesting Moment was triggered
     1. Confirm that the test record was added to the SFDC campaign (this may take a few minutes)
     1. Confirm that the test record was not sent any other emails (except double opt-in email for Germany if applicable) or added to other programs as a result of this test

### Adding LinkedIn Lead Gen forms to drive event registration

LinkedIn Lead Gen forms can be used to drive event registration without adding a new Marketo program.

1) Follow the instructions above to create the LI Lead Gen form. There are a couple of changes you must make to be sure the responses only flow through the event registration processing and not the standard LI form processing.
2) For ABM LI Lead Gen forms, use the naming convention: `abmkey_region_gtm` for driving event registration. The standard (non-event) format is `abmkey_gtm_region`. By changing the order of `region` and `gtm`, you will not need to add exclusions to the main LI Lead Gen form processing.
3) For Digital Marketing forms, do not use the `gtm` in the form name. Use a unique name that represents the event.
4) In Marketo, go to the Marketo program for the event you are promoting.
5) For most events, we recommend setting up a waitlist for responses from LinkedIn. This allows the event DRI to approve registrations. If a waitlist processing campaign is already activated in the program, you can skip to step 6.
     a) ONLY DO THIS IF THE WAITLIST PROCESSING IS NOT ACTIVE: If only the `Registration` processing campaign is active, you will need to activate the waitlist for LI responses. Click on `Waitlist` and **remove** the "Filled out form" trigger. Now, complete the task in step 6 and activate the `Waitlist` campaign. You must also activate the "Waitlist to Registered" campaign.
6) Add a trigger for "Fills out LinkedIn Lead Gen Form". Lead Gen Form Name: `contains` (enter Lead Gen form name you created in step 1 here). If you have multiple forms for this event, you can click the green plus sign in the box after `contains` and add multiple forms.
7) If your form is only targeting AMER responses, click on the "Flow" steps and at the bottom, add "Change Data Value". Add Choice. If LinkedIn Lead Gen Form name `contains` (name(s) of LI lead gen form). Attribute: Opt-in, New value: True
8) Test your updates. Details for what to look for can be found in the [Test your Marketo program setup](/handbook/marketing/marketing-operations/campaigns-and-programs/#test-your-marketo-program-setup) - Note that when a person is added to the waitlist, they will not get an autoresponder, but you will see them added to the program.
9) If you have any questions or just want your set-up checked over, please reach out to Marketing Ops before pushing your campaign live.

## Raffles

Raffles can be associated with many different campaign types and have various ways to enter. You must complete the [legal requirements](/handbook/legal/marketing-collaboration/#engaging-legal-for-approval) before launching your raffle.

In general, the [YYYYMMDD_SurveyName](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/PG6402A1) Marketo program and Survey Campaign type will be used for raffles. Due to the potential set-up complexities for raffles, Marketing Ops will need to be involved even if you use the instructions below. Use these instructions to create the program and to engage Marketing Ops for additional set-up or review.

### For a Raffle Update Smart Lists, Flows and Tokens

- Clone the [YYYYMMDD_SurveyName](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/PG6402A1)
- Name the program using the following syntax: `YYYYMMDD_NameofProgram_Raffle`. You will likely have another campaign type associated as well (for example, a Conference) and this program should be housed in the folder for that event. This is a similar process to creating a speaking session associated to a conference.
- Sync to SFDC at the program main screen in Marketo, where it says Salesforce Sync with "not set", click on "not set", Click "Create New." The program will automatically populate the campaign tag, so you do not need to edit anything except click `Save`.
  - If you are a user of Allocadia, you will need to add the Allocadia raffle line item ID to the `Description` field. Click `Save`.
- [Update the SFDC campaign](/handbook/marketing/marketing-operations/campaigns-and-programs/#step-4-update-the-salesforce-campaign) and associate it to the [parent campaign](/handbook/marketing/marketing-operations/campaigns-and-programs/#parentchild-campaigns-setup) where applicable.
  - If you are a user of Allocadia, please see instructions [here](/handbook/marketing/marketing-operations/campaigns-and-programs/#step-8-update-the-salesforce-campaign---using-allocadia).
- Go back to the Marketo program and complete the tokens. Update the {{my.Survey Name}} token with the word "Default" - do not use another entry on this token.
- If you are using a landing page: Update your [Registration page](/handbook/marketing/demand-generation/campaigns/landing-pages/#general-marketo-landing-page-creation-instructions), thank you page, and registration confirmation email.
- If you are using a landing page: Click into the `01a Registration Flow` and change the Smart List to "Form Name is any" and "Web page is" should already be populated with the registration page for this program. The Flow should already be populated for you, but update Step 5 - Interesting Moment to read: "Filled out form to enter raffle {{my.Survey Title}}" in the `Description` field of Step 5. Go to `Schedule` and click "Activate".
- Responders to the form will be added to the program and SFDC campaign as `Filled out Survey` and will be scored according to the `Survey - Low` entry in the [scoring model](/handbook/marketing/marketing-operations/marketo/#behavior-scoring).
- Due to the potential set-up complexities for raffles, Marketing Ops will need to be involved. You can add the `MktgOps::00:Triage` and `MktgOps-Support` labels to your `Marketo LP and Automation` issue for assistance with set-up.
- If you are not using a landing page, MarketingOps will help you determine the correct processing for this campaign.

## Updating Member Statuses for Owned Events from Marketo Programs

Once an `Owned Event` (that included a GitLab-run landing page where we collected leads) is complete, DRIs are able to update the member statuses directly from Marketo, versus submitting a [lead list upload](/handbook/marketing/marketing-operations/automated-list-import/). **NOTE:** This is **ONLY** for status changes. If you have notes to add to leads, you will need to submit a [lead list upload](/handbook/marketing/marketing-operations/automated-list-import/).

1. Log into Marketo and click into the appropriate program for your campaign
1. Click on the `Members` tab at the top of the page
1. Click on the line item for the member that requires a status change
1. Select `Change Status` at the top of the screen
1. Select the appropriate status in the drop down (`Attended`, `Follow up Requested`, `No Show`, etc.)
1. Marketo will take a few moments to adjust the status and then the status will be updated

## Removing Registrations from Marketo Programs

Once a landing page has been set up for a campaign, it is good practice to have multiple people test the registration to make sure everything is integrated and running properly. As a result, there are often various test registrations in the Marketo program. To remove these test registrations, follow the below instructions.

1. Log into Marketo and click into the appropriate program for your campaign
1. Click on the `Members` tab at the top of the page
1. Click on the line item for the member you wish to remove and make sure that line item is highlighted
1. Select `Change Status` at the top of the screen
1. Select `Not in Program` in the drop down
1. Marketo will take a few moments to adjust the status and then the name will be removed from the `Members` list

### Removing SPAM from Marketo Programs and Zoom

On occassion, SPAM bots attack our webcast registration. Follow these steps to remove from Marketo and SFDC. You must open an issue with Mops to complete. Please include the marketo program link in your issue request and the dates of the event. The SPAM registrants will not be removed from zoom, and will need to be manually removed. However, it is OK to leave them in the zoom campaign, because it will not affect your campaign numbers.

1. Find the program in marketo
1. Isolate the SPAM and add them to a newly created static list.
1. Remove the SPAM from the program, by `Select All` in the static list. Then right clicking then Marketing > Change Program Status. Choose the Campaign and update the status to `Not in Program` This will also remove them from Salesforce.com campaign
1. Go to your static list. Highlight all and `Delete Person`
1. Agree to popup, and also remove from SFDC.

After program ends, double check your Marketo program for SPAM, as people that registered (but were excluded from registration filters) would be added to program as `No Action` becuase the form is a part of that program. Re-run the steps above to fully remove them from any campaingn stats.

## Canceling an Email send

There are cases where an email is set to send, but you need to cancel it. There are a few ways to do this based on the type of program.

### Smart Campaign - Scheduled Send

1. You can cancel specific runs by going into the smart campaign > schedule and clicking the red `x` next to the date and time of send.
1. To cancel the entire run, go into the smart campaign > schedule > campaign actions > `Abort Campaign` .
   - You can still reschedule the send after you abort it

Marketo documentation:

- [Stopping campaign runs](https://experienceleague.adobe.com/docs/marketo/using/product-docs/core-marketo-concepts/smart-campaigns/using-smart-campaigns/cancel-a-scheduled-batch-campaign-run.html?lang=en)
- [Aborting campaign](https://experienceleague.adobe.com/docs/marketo/using/product-docs/core-marketo-concepts/smart-campaigns/using-smart-campaigns/abort-a-smart-campaign.html?lang=en)

### Smart Campaign - Triggered Send

1. If the campaign is running on a triggered basis, you should go into the smart campaign > schedule and click the `deactivate` button. This will stop any lead from qualifying from the campaign again.
1. If the campaign is running through multiple flow steps, in order to halt the leads from continuing in the flow, you must go into the smart campaign > schedule > campaign actions > `Abort Campaign`. This will stop leads from continuing in the flow, and stop any further emails from being sent out.

Marketo Documentation:

- [Deactivating a smart campaign](https://experienceleague.adobe.com/docs/marketo/using/product-docs/core-marketo-concepts/smart-campaigns/using-smart-campaigns/deactivate-a-trigger-smart-campaign-schedule-tab.html?lang=en)
- [Aborting a smart campaign](https://experienceleague.adobe.com/docs/marketo/using/product-docs/core-marketo-concepts/smart-campaigns/using-smart-campaigns/abort-a-smart-campaign.html?lang=en)

### Email Batch Campaign

This program type has a mailbox icon.

1. If a campaign is scheduled, but hasn't sent yet. Click into the main program (mailbox) and view the control panel. You'll see 4 boxes. In the bottom right box, click `unapprove` and the email will not go out. When you are ready to reschedule, update date and time, and click `approve` in the bottom right box. All boxes will have a green checkmark signaling it is ready for send.
1. If a campaign is actively sending and you want to stop it, click into the main program (mailbox) and in the bottom right box click `Abort Program`. This will stop the sending of emails, but will not recall any email that was already sent. You will see how many you send in the `dashboard` view. Once an email program is aborted, you cannot reschedule it again.

You can view screenshots and further documentation from Marketo here:

- [Aborting an email program](https://experienceleague.adobe.com/docs/marketo/using/product-docs/email-marketing/email-programs/email-program-actions/abort-email-program.html?lang=en)
- [Unapproving an email program](https://experienceleague.adobe.com/docs/marketo/using/product-docs/email-marketing/email-programs/email-program-actions/approve-unapprove-an-email-program.html?lang=en)

### Instructions: How to update Conferences with more than 5,000 attendees

For conferences list loads with more than 5,000 attendees, consider not marking them as `success`. If the acting `Field Marketing Director` agrees to avoid marking these members as `success`, these are the steps to avoid that from happening. **This can only be done by a member of the MktgOps team!**

1. Open Marketo, Navigate to Admin>Tags>Channel>Conference
1. Uncheck `Success` box for `Attended` and save
1. Load the list in with the attended members
1. Once the list is done processing and campaign members are added, go back into Admin>Tags>Channel>Conference, and recheck the `Success` box for `Attended`

## Instructions: How to collect Dietary Restrictions on event registration and view responses

1. For an owned event (Field Marketing), add `FORM 4286: Owned event with Dietary Restriction` to the LP. Note that we do have other forms that collect this data, for example DevSecOps World Tour forms. Check with MOps if you aren't sure which form to use for your use.
1. Update Smart Campaign to look for `FORM 4286` in the Registration Processing SC.
1. Create a smartlist to look for the responses from the form. From the program, click "New", then "New local asset", then "Smart List". Name the smart list "Dietary Requirements". Add the filters `Member of Program` (Program name) & `Dietary Restriction Details` (is not empty).
1. Next, you need to [create a custom view](https://experienceleague.adobe.com/en/docs/marketo/using/product-docs/core-marketo-concepts/smart-lists-and-static-lists/using-smart-lists/create-and-change-views-for-lists-and-smart-list) in Marketo to see the details. Once you create the view, you will always have it available for selection the dropdown.
1. Click on the `Dietary Requirements` smart list you created, then go to the People tab.
1. Click where it says `View: Default`
1. Select Create View
1. Name the view Dietary Restrictions and under hidden columns, select `Dietary Restriction Detail` and `Dietary Restrictions: Other`
1. Click Create
1. Note that you can follow the same steps above if you need to view Physical Accommodation requests in a Marketo report. The fields for this are `Physical Assistance Needs` and `Physical Assistance Detail`.

The view you created will be saved for future use, so any time you need to see this specific view in the future, you will click View: Default and select "Dietary Restrictions" from your dropdown (the list is unique to you, so you will have different options than other people). Due to privacy requirements, we are not pushing this information to SFDC, but you can see it in Marketo up until seven days after the event. The dietary restriction fields will automatically be cleared 7 days after the lead list is loaded.
