---
title: External Virtual Events
description: An overview of external virtual events including virtual conferences where we sponsor a booth, and sponsored webinars with third party vendors.
twitter_image: '/images/tweets/handbook-marketing.png'
twitter_site: "@gitlab"
twitter_creator: "@gitlab"
---

## Overview

{: #overview .gitlab-purple}
<!-- DO NOT CHANGE THIS ANCHOR -->
---

External virtual events are, by definition, not owned and hosted by GitLab. They are hosted by an external third party (i.e. a partner or paid vendor). The goal of external virtual events is to drive net new leads, and we do not promote to our internal database. The various types of external virtual events are below, and involve epic and issue creation, designation of DRIs, and workback schedule definition within the issue due dates.

* [Partner-Hosted Webinars](/handbook/marketing/virtual-events/external-virtual-events/#partner-hosted-webinars): hosted by a channel partner (i.e. WWT), this is an unpaid tactic. The channel partner manages landing page, moderating and hosting the webinar on their platform. GitLab represents as a speaker at the event, sometimes jointly with an alliance partner. A lead list is often not shared after the event, as the channel partner will work the leads. We will sometimes promote, and determine which channels are appropriate.
* [Sponsored Webinars](/handbook/marketing/virtual-events/external-virtual-events/#sponsored-webinars): hosted on an external vendor platform (i.e. DevOps.com), this is a paid tactic. The vendor is responsible for driving registration, moderating and hosting the webinar on their platform, and delivering a lead list after the event. The goal of a sponsored webinar is net new leads - we do not promote to our existing database as it is a paid activity.
* [Virtual Conferences](/handbook/marketing/virtual-events/external-virtual-events/#virtual-conferences): hosted on an external vendor platform, this is a paid tactic. GitLab pays a sponsorship fee to receive a virtual booth and often speaking session or panel presence. The goal of a sponsored virtual conference is net new leads - we do not promote to our existing database as it is a paid activity.
* [Executive Roundtable](/handbook/marketing/virtual-events/external-virtual-events/#executive-roundtables):  hosted on an external vendor platform, this is a gathering of high level CxO attendees run as an open discussion between the moderator/host, GitLab expert and delegates. There usually aren't any presentations, but instead a discussion where anyone can chime in to speak. The host would prepare questions to lead discussion topics and go around the room asking delegates questions to answer. The goal of an executive roundtable is net new leads - we do not promote to our existing database as it is a paid activity.
* [Vendor Arranged Meetings](/handbook/marketing/virtual-events/external-virtual-events/#vendor-arranged-meetings): hosted by an external vendor, the vendor organizes one-to-one meetings with prospect or customer accounts. This does not include meetings set internally by GitLab team members. An example would be a "speed dating" style meeting setup where a vendor organizes meetings with prospects of interest to GitLab. The goal of a venor arranged meeting is to generate meetings with accounts of interest that we are finding challenging to break into directly - we do not promote to our existing database as it is a paid activity.

## Partner Webinars

{: #partner-hosted-webinars .gitlab-purple}
<!-- DO NOT CHANGE THIS ANCHOR -->
---

*A parter-hosted webinar is hosted by the partner, with the goal of driving net new leads. The partner is responsible for driving registration, moderating and hosting the webinar on their platform, and, in some cases, delivering a lead list after the event. The project owner (Partner Marketing) is responsible for creating the epic and related issue creation, and keeping timelines and DRIs up-to-date.*

### How to request Partner Marketing support

{: #partner-hosted-webinar-requesting-support}
<!-- DO NOT CHANGE THIS ANCHOR -->

CAMs and Alliance Managers should use this [issue template](https://gitlab.com/gitlab-com/marketing/partner-marketing/-/issues/new) to request Channel Marketing support for their planned event or webinar.

#### How to view triage board of Partner Marketing Requests

{: #partner-hosted-webinar-triage-board}
<!-- DO NOT CHANGE THIS ANCHOR -->

[View Board](https://gitlab.com/groups/gitlab-com/-/boards/1779611?label_name[]=Channel&label_name[]=Channel%20Marketing)

### Process in GitLab to organize epic & issues

{: #partner-hosted-webinar-project-management}
<!-- DO NOT CHANGE THIS ANCHOR -->
The project owner is responsible for following the steps below to create the epic and related issues in GitLab.

1. Project owner creates the epic to house all related issues (code below)
1. Project owner creates the relevant issues required (shortcut links in epic code below)
1. Project owner associates all the relevant issues to the newly created epic, as well as the original issue
1. Project owner sets due dates for each issue, based on agreed upon SLAs between teams for each task, and confirms accurate ownership for each issue

*Note: if the date of the tactic changes, the project owner is responsible for changing the due dates of all related issues to match the new date, and alerting the team members involved.*

### Epic code and issue templates

{: #partner-hosted-webinar-epic-code}
<!-- DO NOT CHANGE THIS ANCHOR -->

```markdown
<!-- Name this epic: Channel Webinar - [Webinar Name] (Partner) - [3-letter Month] [Date], [Year] -->
<!-- Example epic name: Channel Webinar - Modern CI/CD with Anthos (WWT) - Apr 22, 2021 -->

## [Partner Marketing Request Issue >>]() `to be added`

- [ ] Once date is finalized, add to [All Marketing Calendar](https://docs.google.com/spreadsheets/d/1c2V3Aj1l_UT5hEb54nczzinGUxtxswZBhZV8r9eErqM/edit?usp=sharing)

## :notepad_spiral: Key Details
* **Slack channel:** <!-- add slack channel # -->
* **[Meeting Notes]()** <!-- to be added by Partner Marketing -->
* **Speaker(s) and Moderator:** <!-- add gitlab handle and company -->
* **CAM:** <!-- add gitlab handle -->
* **Partner Marketing DRI:** <!-- add gitlab handle -->
* **Other GitLab Sponsors:** <!-- add gitlab handle(s) -->
* **Partner's Marketing Liaison:** <!-- add gitlab handle / name -->
* **Marketo Program Type:** Webinar (Partner)
* **Organizer/Webinar hosting:** <!-- add who is hosting the webinar -->
* **Landing Page/Registration URL:**
* **Persona (choose one):** `Practitioner, Manager, or Executive`
* **Sales Segment:** `Large` (GCP's focus)
* **Sales Region:** `AMER, EMEA, APAC`
* **Topic:**
* **Event Name:** <!-- official name TBD -->
* **Event Date:** YYYY-MM-DD
* **Duration:**  (X min content + X min Q/A)
* **GTM Motion (choose primary):** `CI/CD, DevOps Platform, GitOps`
* **Vertical (optional, if specific):**
* **Goal:** `Please be specific on the metric this is meant to impact.`
* **Total Cost:**
* **MDF Requested:**

## Program Tracking <!-- Delete if not receiving leads -->
* [ ] [main SFDC campaign](tbd)
* [ ] [main Marketo program](tbd)
* [ ] [List clean and upload issue](https://gitlab.com/gitlab-com/marketing/marketing-operations/issues/new?issuable_template=event-clean-upload-list)

## Existing Material/Assets/Presentations
- [Name of content]()

## :books: Tasks and Issues Created and Linked to Epic

## If GitLab is hosting, follow [Webcast process in handbook](/handbook/marketing/virtual-events/webcasts/#partner-webcasts)

## General Checklist
- [ ] Make sure partner is adhering to the GitLab Branding guides and logo usage
- [ ] Provide opt in language to partner
- [ ] Review and approve all email and landing page copy
- [ ] Consider creating separate invite htmls with UTMs for each partner and GitLab to send to GitLab and the partner sales orgs to help drive attendance.  Separate UTMs will help us track registrations coming from each sales org
* [ ] Add to /events/ page - [Handbook Instructions](/handbook/marketing/events/#how-to-add-events-to-aboutgitlabcomevents)
* [ ] [Speaker request issue](https://gitlab.com/gitlab-com/marketing/strategic-marketing/product-marketing/-/issues/new?issuable_template=pmm-speaker-request) (optional)
* [ ] [Organic social promotion issue](https://gitlab.com/gitlab-com/marketing/corporate_marketing/corporate-marketing/-/issues/new?issuable_template=social-gtm-organic) (optional)
* [ ] [Paid digital promotion issue](https://gitlab.com/gitlab-com/marketing/digital-marketing-programs/issues/new?issuable_template=mktg-promotion-template) (optional)

## If partner is sharing leads
- [ ] GitLab and partner to determine first touch and follow up
   - Best practice: joint lead follow up: Partner does 3 touches within 2 weeks following the event (a touch is a voicemail and email).  Qualified leads with immediate opportunity will be deal reg as they come in.  After 14 day follow up, full list with follow up notes will be provided to GitLab for list upload and further nurturing by GL
- [ ] [Program tracking issue](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-program-tracking)
- [ ] [List clean & upload request issue](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=event-clean-upload-list). (In lead upload, record the opt-in T&Cs used in the upload Issue and in the upload template, set Opt-in = True.
* [ ] [Add to nurture issue](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-add-nurture)

## If receiving recording and have distribution of webinar
* [ ] [Pathfactory upload issue](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-pathfactory-upload) (only open if we receive and can use recording, webinar DRI responsible for upload)
* [ ] [Pathfactory track issue](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-pathfactory-track) (only open if we receive and can use recording)

## Post event tasks
- [ ] [Ordering a swag appreciation gift](/handbook/marketing/developer-relations/contributor-success/community-appreciation/) for speakers
- [ ] [Request add to Resources](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-resource-page-addition)

#### Opt in language applicable to all scenarios below and all geographies
_By registering for this GitLab and [partner name] event, you agree that GitLab and [Partner name] may email you about their products, services and events. You may opt-out at any time by unsubscribing in future emails or visiting the relevant company's preference center._

In order to mark leads as Opt-in = TRUE, a record of the terms and conditions the leads agreed to upon having their data collected must be recorded. Check the terms of service wording has been recorded in the upload issue before opting in leads to receive marketing communications. No ToS, no Opt-in. Period. To find the appropriate language, refer to Marketing Rules and Consent Language
If there are any records who have opted out of contact for any reason, define that on the spreadsheet by selecting Opt-in = FALSE
Leave Opt-In empty if no other option is available

/label ~"mktg-status::wip" ~"Webinar - Channel Partner"  ~"Webinar"

```

## Sponsored Webinars

{: #sponsored-webinars .gitlab-purple}
<!-- DO NOT CHANGE THIS ANCHOR -->
---

*A sponsored webcast is hosted on an external vendor platform (i.e. DevOps.com); this is a paid tactic. The vendor is responsible for driving registration, moderating and hosting the webinar on their platform, and delivering a lead list after the event. The goal of a sponsored webinar is net new leads - we do not promote to our existing database as it is a paid activity.*

### Process in GitLab to organize epic & issues

{: #sponsored-webinar-project-management}
<!-- DO NOT CHANGE THIS ANCHOR -->
The project owner is responsible for following the steps below to create the epic and related issues in GitLab.

1. Project owner (FMM) creates the main tactic issue
1. Project owner (FMC) creates the epic to house all related issues (code below)
1. Project owner (FMC) creates the relevant issues required (shortcut links in epic code below)
1. Project owner (FMC) associates all the relevant issues to the newly created epic, as well as the original issue
1. Project owner (FMC) sets due dates for each issue, based on agreed upon SLAs between teams for each task, and confirms accurate ownership for each issue

*Note: if the date of the tactic changes, the project owner is responsible for changing the due dates of all related issues to match the new date, and alerting the team members involved.*

### Epic code and issue templates

{: #sponsored-webinar-epic-code}
<!-- DO NOT CHANGE THIS ANCHOR -->

```markdown
<!-- Name this epic: Sponsored Webcast - [Vendor] - [3-letter Month] [Date], [Year] -->

## [Main Issue >>]()

## [Copy document >>]() - [template](https://docs.google.com/document/d/1j43mf7Lsq2AXoNwiygGAr_laiFzmokNCfMHi7KNLjuA/edit)

## :notepad_spiral: Key Details
* **Project Owner:**
* **FMC/FMS:**
* **Type:** Sponsored Webcast
* **Official Name:**
* **Registration URL:**
* **Persona (choose one):** `Practitioner, Manager, or Executive`
* **Use Case (choose primary):** `CI, VC&C, DevSecOps, Other` (FY21-22 focus on CI and VC&C)
* **Sales Segment (choose primary):** `Large, Mid-Market, or SMB`
* **Sales Region (choose one):** `AMER, EMEA, APAC`
* **Sales Territory (optional, if specific):**
* **Goal:** `Please be specific on the metric this is meant to impact.`
* **Budget:**
* **Campaign Tag:**
* **Launch Date:**  [YYYY-MM-DD]
* [ ] [main salesforce program]()
* [ ] [main marketo campaign]()
* [ ] Campaign UTM - Project Owner/FM to fill in (Format: campaign tag - change to all lowercase, no spaces, hyphens, underscores, or special characters)

## User Experience
[Project Owner to provide a description of the user journey - from communication plan, to what the user experiences upon receipt, plus triggers on our end like confirmation email and how GitLab fulfils with the vendor, up until receipt by the user and answering whether or not we get confirmation that they received it... what is the anticipated journey after that?]

## Additional description and notes about the tactic
[Project Owner/FMM add whatever additional notes are relevant here]

## Issue creation
If you are Field Marketer, see next section below for the issues you need to create.

* [ ] Program Tracking
  - [If tactic owner is Campaigns Team](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-program-tracking)
* [ ] [Write copy issue](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=write-copy)
* [ ] [Follow up email issue](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-email-followup)
* [ ] [List clean and upload issue](https://gitlab.com/gitlab-com/marketing/marketing-operations/issues/new?issuable_template=event-clean-upload-list)
* [ ] [Add to nurture issue](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-add-nurture)
* [ ] [Pathfactory Upload issue created](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-pathfactory-upload) (*optional*)

## Issue Creation for Field Marketing
Please delete the generic issue creation section above if you are a FMC creating this.
* [ ] [Program Tracking](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=program-tracking) - FMC creates, assigns to FMC
* [ ] [Write copy issue](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=write-copy) - FMC creates, assigns to FMM
* [ ] [Follow Up Email issue](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=request_email_followup) - FMC creates, assigns to FMM (issue will be triaged)
* [ ] [Add to Nurture](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=request_add_nurture) - FMC creates, assigns to FMM (issue will be triaged)
* [ ] [List Clean and Upload](https://gitlab.com/gitlab-com/marketing/marketing-operations/issues/new?issuable_template=event-clean-upload-list) - FMC creates, assigns to FMM and MOps
* [ ] [Optional: FM Pathfactory Asset Upload and Track Creation Issue](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=Pathfactory_Request_Template) - FMM creates, assigns to FMC

Add the team label to indicate the team running the event (Example: Field Marketing, Corporate Marketing)

/label ~"mktg-status::wip" ~"Webcast - Sponsored"
```

☝️ *Note on campaign utm format: we avoid using special characters due to issues in the past passing UTMs from Bizible to SFDC, the basis for attribution reporting.*

## Virtual Conferences

{: #virtual-conferences .gitlab-purple}
<!-- DO NOT CHANGE THIS ANCHOR -->
---

*A virtual conference is hosted on an external vendor platform; this is a paid tactic. GitLab pays a sponsorship fee to receive a virtual booth and often speaking session or panel presence. The goal of a sponsored virtual conference is net new leads - we do not promote to our existing database as it is a paid activity.*

This section is the responsibility of Corporate Events to keep up-to-date.

**Presence of a virtual booth is a requirement for the virtual event to be considered a Virtual Conference.** [Link to Marketo program template that will be cloned.](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/ME7624A1)

### Process in GitLab to organize epic & issues

{: #virtual-conference-project-management}
<!-- DO NOT CHANGE THIS ANCHOR -->

The project owner is responsible for following the steps below to create the epic and related issues in GitLab.

1. Project owner (Corp/FMM) creates the main tactic issue
1. Project owner (Corp/FMC) creates the epic to house all related issues (code below)
1. Project owner (Corp/FMC) creates the relevant issues required (shortcut links in epic code below)
1. Project owner (Corp/FMC) associates all the relevant issues to the newly created epic, as well as the original issue
1. Project owner (Corp/FMC) sets due dates for each issue, based on agreed upon SLAs between teams for each task, and confirms accurate ownership for each issue

*Note: if the date of the tactic changes, the project owner is responsible for changing the due dates of all related issues to match the new date, and alerting the team members involved.*

### Epic code and issue templates

{: #virtual-conference-epic-code}
<!-- DO NOT CHANGE THIS ANCHOR -->

```markdown
<!-- Name this epic: Sponsored Virtual Conference - [Vendor] - [3-letter Month] [Date], [Year] -->

## [Main Issue >>]()

## [Copy document >>]() - [template](https://docs.google.com/document/d/1j43mf7Lsq2AXoNwiygGAr_laiFzmokNCfMHi7KNLjuA/edit)

## :notepad_spiral: Key Details
* **Corp Events/Field Marketing Manager/Requester:**
* **Field Marketing Coordinator:**
* **Type:** Conference
* **Official Name:**
* **Date(s):**  [YYYY-MM-DD]
* **Registration URL:**
* **Sales Segment (choose primary):** `Large, Mid-Market, or SMB`
* **Sales Region (choose one):** `AMER, EMEA, APAC`
* **Sales Territory (optional, if specific):**
* **Goal:** `Please be specific on the KPI this is meant to impact.`
* **Budget:**
* **Campaign Tag:**
* [ ] [main salesforce program]()
* [ ] [main marketo campaign]()
* [ ] Campaign UTM - Project Owner to fill in (Format: campaign tag - change to all lowercase, no spaces, hyphens, underscores, or special characters)

## User Experience
[Project owner to provide a description of the user journey - from communication plan, to what the user experiences upon receipt, plus triggers on our end like confirmation email and how GitLab fulfils with the vendor, up until receipt by the user and answering whether or not we get confirmation that they received it... what is the anticipated journey after that?]

## Additional description and notes about the tactic
[Project owner add whatever additional notes are relevant here]

## Issue creation
If you are a Field Marketer, see below for issue creation.
* [ ] Program Tracking
  - [If tactic owner is Campaigns Team](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-program-tracking)
* [ ] [Write copy issue](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=write-copy)
* [ ] [Follow up email issue](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-email-followup)
* [ ] [List clean and upload issue](https://gitlab.com/gitlab-com/marketing/marketing-operations/issues/new?issuable_template=event-clean-upload-list)
* [ ] [Add to nurture issue](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-add-nurture)
* [ ] [Pathfactory Upload issue created](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-pathfactory-upload) (*optional*)

## Issue Creation for Field Marketing
Please delete the generic issue creation section above if you are a FMC creating this.
* [ ] [Program Tracking](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=program-tracking) - FMC creates, assigns to FMC
* [ ] [Write copy issue](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=write-copy) - FMC creates, assigns to FMM
* [ ] [Follow Up Email issue](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=request_email_followup) - FMC creates, assigns to FMM (issue will be triaged)
* [ ] [Add to Nurture](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=request_add_nurture) - FMC creates, assigns to FMM (issue will be triaged)
* [ ] [List Clean and Upload](https://gitlab.com/gitlab-com/marketing/marketing-operations/issues/new?issuable_template=event-clean-upload-list) - FMC creates, assigns to FMM and MOps
* [ ] [Optional: FM Pathfactory Asset Upload and Track Creation Issue](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=Pathfactory_Request_Template) - FMM creates, assigns to FMC


<details>
<summary>Corporate Marketing Activation: Expand below for quick links to issues to be created and linked to the epic.</summary>

* [ ] Activate*: [Organic Social Issue](https://gitlab.com/gitlab-com/marketing/corporate_marketing/corporate-marketing/issues/new?issuable_template=social-general-request) - Corp creates, assignment in issue
* [ ] Activate*: [Blog Issue](https://gitlab.com/gitlab-com/marketing/growth-marketing/global-content/content-marketing/issues/new#?issuable_template=blog-post-pitch) - Corp creates, assignment in issue
* [ ] Activate*: [PR Announcement Issue](https://gitlab.com/gitlab-com/marketing/corporate_marketing/corporate-marketing/issues/new?issuable_template=announcement) - Corp creates, assignment in issue

</details>

**Everything with an * is optional: create the optional issues only if we plan to use those outbound activation channels*

Add the team label to indicate the team running the event (Example: Field Marketing, Corporate Marketing)

/label ~"mktg-status::wip" ~"Virtual Conference"
```

### Event Requirements/ Best Practices

**The large conferencing tool is best if:**

* You need multiple breakout groups/ stages
* You need an expo hall
* You want more networking options beyond a zoom call
* You have more than 500 people
* The event is more than 3 hours
* The event has multiple breakouts or tracks
* and You need to capture attendee info
**Note:** Many of the elements included in tool are flexible and can be used for multiple purposes. Discuss with an account admin your options.

### Platform and Bandwidth Restrictions

* We can only host one a day/ in a 24 hour period
* You will need at least two full time support staff to run the event
* Only suggested for events 3+ hours or more (due to complexity of setup)
* Suggested for events targeting groups of 500+ or for initiatives that are in line with OKRs
* This event is best executed with more than one person and moderators.
* Your event has a budget of $5k or more in budgeted spend. You need to budget for support for all live event hours as well as dry run hours.

### Steps

**Step 1: Start a hosted vistual conference request issue in the digital marketing programs project.**

* Please use the [`Event_Request.md` issue template](https://gitlab.com/gitlab-com/marketing/corporate_marketing/corporate-marketing/-/blob/master/.gitlab/issue_templates/Event-Request.md)
* Please put the target LIVE date of the event as the due date
* @ mention the Campaign Manager DRI in the issue comment to confirm the requested date is feasible
* Campaign Manager will check the requested date against [the virtual events calendar](https://calendar.google.com/calendar?cid=Z2l0bGFiLmNvbV8xcXZlNmc4MWRwOTFyOWhldnRrZmQ5cjA5OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t) to make sure there is no overlapping virtual event that has been pre-scheduled
* If the requested date is feasible, the speaker(s) have been secured, and the abstract finalized, the DRI should change the status label from `status:plan` to `status:wip`, and add the applicable `FY..` label (to make sure this appears on the [webcast issue board](https://gitlab.com/groups/gitlab-com/marketing/-/boards/922606?&label_name[]=Webcast))
* Must complete details on the issue: timeline, budget, audience goals, features needed ...

**Step 2: DRI needs to create the Hosted virtual conference EPIC**

* This step should only be taken once you have confirmed the date with an Campaign Manager. If needed have kick off call with stakeholders.
* When "status:wip" is on the issue and necessary elements are documented, and the speakers and webcast dates are secured, the event project is officially in motion. The DRI creates epic for the conference and tags corresponding Campaign Manager.
* Naming convention: [Conference Title] - [3-letter Month] [Date], [Year]
* DRI copy/pastes code below into the epic

* This step should only be taken once you have confirmed the date with an Campaign Manager and have an additional Hopin admin to staff. If needed have kick off call with stakeholders.
* When "status:wip" is on the issue and necessary elements are documented, and the speakers and webcast dates are secured, the event project is officially in motion. The DRI creates epic for the conference and tags corresponding Campaign Manager.
* Naming convention: [Conference Title] - [3-letter Month] [Date], [Year]
* DRI copy/pastes code below into the epic

```markdown
## [Main Issue >>]()

## [Campaign Planning Sheet>>]() (copy and create new version from here- https://docs.google.com/spreadsheets/d/1VzLTQW3lYDGcVdwnUq81I_gPGUFl_D_jXjZGhFuFhbU/edit#gid=739236632)

## [Landing Page >>]() - `to be added when live`

## [Copy for landing page and emails >>]() - [template](https://docs.google.com/document/d/1j43mf7Lsq2AXoNwiygGAr_laiFzmokNCfMHi7KNLjuA/edit)

## Event Details
* `place details from the event issue here`
* **Persona (choose one):** `Practitioner, Manager, or Executive`
* **Use Case (choose primary):** `CI, VC&C, DevSecOps, Other` (FY21-22 focus on CI and VC&C)
* **Sales Segment (choose primary):** `Large, Mid-Market, or SMB`
* **Sales Region (choose one):** `AMER, EMEA, APAC`
* **Sales Territory (optional, if specific):**
* **Goal:** `Please be specific on the metric this is meant to impact.`
* [ ] [main salesforce campaign]()
* [ ] [main marketo program]()

## Issue creation (for event DRI to complete)

* [ ] Secure presenters and dry runs issue created - DRI
* [ ] Landing page issue created - DRI
* [ ] Optional: New design assets issue created for the design team - DRI
* [ ] Invitation and reminder issue created - DRI
* [ ] Organic social issue created for social media manager - DRI
* [ ] Paid Ads issue created for DMP - DRI
* [ ] PathFactory request issue created - DRI
* [ ] Follow up email issue created - DRI
* [ ] Add to nurture stream issue created - DRI
* [ ] On-demand switch issue created - DRI

/label ~"Webcast - GitLab Hosted" ~"Virtual Event" ~"mktg-status::wip"
```

**DRI to create the necessary campaigns team request support issues [linked to the virtual conference Campaign Planning Sheet](https://docs.google.com/spreadsheets/d/1VzLTQW3lYDGcVdwnUq81I_gPGUFl_D_jXjZGhFuFhbU/edit?usp=sharing) and add to epic.**

### Project Planning

DRI will immediately:

1. Create the necessary epic and campaigns team request issues as outlined above.
2. Campaign Manager to ensure the webcast Dry Run and Live dates are added to the Virtual Events Google Calendar by sending over a Gcal invite from there to the webcast execution team. ***Note: This is an important step to make sure no overlapping virtual evenst are scheduled over the desired date/timeslot resulting in a conflict due to shared licenses and aupport requrements.***
3. If one or more speakers are external, set up a kick off call with the external speakers. Set timelines, due dates nd share slide deck templates with the speakers. Add dry runs to their caledar(s).
4. Clone and fill out [this Conference GANTT template](https://docs.google.com/spreadsheets/d/1VTrWNX9qfY99b2TnrX93P39aXiRoNnChB6tduTvmysA/edit#gid=1899924336).

Due dates for each action item and DRIs are outlined on the [Conference Planning Template](https://docs.google.com/spreadsheets/d/1VzLTQW3lYDGcVdwnUq81I_gPGUFl_D_jXjZGhFuFhbU/edit?usp=sharing).

### Promotion Best Practices

1. Give yourself at least 30 business days of promotion.
2. Send invitation emails 2 weeks out, 1 week out, and if needed 2 hours before event. Sample emails can be found here.
3. Only send promotional emails Tuesday, Wednesday, or Thursday for optimal results.
4. Send reminder emails to registrants the day before, and one hour before the event.
5. Suggested: Host virtual events on a Tuesday, Wednesday or Thursday, see note below about scheduling.
6. Post links to additional, related resources during the event.
7. Include "contact us" information and a clear CTA at the end of the presentation.
8. Video recording from event should be uploaded to YouTube within 24 hours after event has occurred.
9. Send the recording to all registrants, whether they attended or not within 72 hours post event.
10. See more virtual event best practices [here](https://gitlab.com/gitlab-com/marketing/corporate_marketing/corporate-marketing/-/issues/2105)

#### Tips for Speakers

Here are some basic tips to help ensure that you have a good experience preparing for and presenting on a video conference. See [speaker preparation best practices](/handbook/marketing/virtual-events/best-practices#speakers).

##### Before Committing as a Speaker

Ask us any questions you have about the time commitment etc. and what exactly our expectations are. Talk about it with your manager if you're on the fence about your availability, bandwidth, or interest. Make sure you're both on the same page. We want this to be a meaningful professional development exercise for you, not a favor to us that you're lukewarm about — if you feel that way, none of will be able to do our best job. We'll be honest with you, so please do the same for us.

##### Before the Dry Run

Select and set up your presentation space. Pick a spot with good wifi, and we recommend setting up an external mic for better audio quality, although this is optional. If you will be presenting from your home, alert your spouse/roommates of the time/date & ask them to be out of the house if necessary. Depending on your preferences and comfort level with public speaking, run through the script several times.

##### Before the Presentation

Try to get a good sleep the night before, and, if the presentation is in the morning, wake up early enough to run through your notes at least once. Review our [Positioning FAQ](/handbook/marketing/positioning-faq/), or keep the page handy in case you are asked in the Q&A about how GitLab compares to our competitors.

### Logistical Set up

#### Adding your talk/ event into the calendar

The [virtual event calendar](https://calendar.google.com/calendar?cid=Z2l0bGFiLmNvbV8xcXZlNmc4MWRwOTFyOWhldnRrZmQ5cjA5OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t) will be used to log all planned and scheduled Marketing Camaigns hosted webcasts and their subsequent dry runs. **The purpose of the webcast calendar is to ensure Camapign Managers don't schedule overlapping virtual events.**

**DRI for adding to webcast calendar: Campaign Manager executing the webcast.**

##### Planned Hosted Virtual Events

1. As soon as an issue is created for a virtual conference request, add the planned event to the virtual event calendar by creating an event on the day you plan to host the event. For events that are still in planning, use the following naming convention `[Hold WC Hosted] Webcast title` (e.g: `[Hold VC Hosted] Mastering CI`) and create it as an all-day event (no time slot selected). Make sure to also include the link to the issue in the calendar description.
2. Please also add the planned webcast to the virtual conference planning issue. When adding to the issue, please use :asterisk: emoji prior to the webcast name to indicate this is still in planning.

##### Confirmed Virtual Hosted Conferences

1. Once the date/time of the conference has been confirmed, go to your calendar event and remove `Hold` from the event title `[VC Hosted] Webcast title` (e.g: `[VC Hosted] Mastering CI`). Specify the time on the calendar event and swap the issue link in the calendar description with the Epic link. *Note: In the spirit of efficiency, please be sure to add all presenters (GitLab team members and external speakers), the epic or issue (if you have one) and your event invite info to the calendar invite so you're not having to create multiple calendar invites.*
2. On the planning issue, please also update the webcast as confirmed by switching out the :asterisk: emoji with :white_check_mark: emoji.
3. Make sure to also add dry runs to the virtual events calendar. When creating the dry run event(s), please use the following naming convention `[DR WC Hosted] Event title` (e.g: `[DR WC Hosted] Mastering CI`) and specify the date/time on the calendar event.

### Creating the Event Registration page

* This depends on the tool being used. Work with corporate events to determine the best process.

#### Add the conference to the /events page

* To add the webcast to the /events page follow this [step by step guide](/handbook/marketing/events/#how-to-add-events-to-aboutgitlabcomevents).

#### Set up the event program in Marketo and SFDC

Needs updating to be confernece specific:

1. Create the webcast program in Marketo by cloning the YYYYMMDD_WebcastTopic_Region (Single time slot) template.

    * Select clone to `A campaign folder`.
    * Title the webcast in the following format: YYYYMMDD_{Webcast Title}_[Region - only if applicable]. For example, 20170418_MovingToGit.
    * Save to the `GitLab Hosted` folder.
    * Click salesforce campaign sync and select create new to create campaign in SFDC. Make sure to put the landing page url and also the link to the epic in the description.

2. Turn on smart campaigns in Marketo.

    * Activate the `Attended` campaign.
    * Within the `Registration from Landing Page` smart campaign, on the `Fills out Form` trigger, add the webcast landing page url without the https (e.g: about.gitlab.com/webcast/securing-serverless/), then activate the campaign.
    * Activate the `Registration From Zoom` campaign.
    * Activate the `Interesting Moments` campaign.

3. Go to the campaign in salesforce.

    * Change the campaign owner to your name.
    * Change the status to `in progress`.
    * Edit the Bizible touchpoint field to `Include only "Responded" Campaign Members`.

4. **Return to the Zoom set up window you were working in during step 3.** You will now set up Marketo integration within Zoom by clicking on the Integration tab.

    * Click Edit next to Generate Leads in Marketo section.
    * Check  Send registration information to a Smart Campaign and select the `Registration From Zoom` smart campaign that you set up in marketo for this webcast.
    * Check  Send attendee information to a Smart Campaign and select the `Zoom Attended` smart campaign hat you set up in marketo for this webcast.
    * In the `Gather other information to Marketo (optional)` section, select the ZoomWebinarOtherInfo custom object, check the following boxes, and select the corresponding Marketo Custom Object Fields:
      * Webinar ID
      * Webinar Topic
      * Q&A
      * Poll

#### Test your set up

1. Submit a test lead using your gitlab email on the LIVE landing page to make sure the registration is tracked appropriately in the Marketo program and you get a confirmation email from zoom.

#### Sending follow up emails

1. Go to the `No shows` smart campaign and click run once to make sure the no shows get dispositioned into the correct status. Currently, no integrated exists between zoom and Marketo to automatically disposition no shows so they remain in `Registered` status until you run this smart campaign.
2. Update email `Outbound -attendees` and email `Outbound -no shows` with content with relevant copies related to the webcast.
3. On the Follow-up - Attendees and Follow up - No Shows email programs, update the `{{my.CTA..}}` tokens to point to the correct offers and use them in the hyperlinks.
4. Approve copy and send samples to the requestor, and the presenter (if different from requestor).
5. Once you get approval for the sample copy, schedule email sends within follow-up no show and follow-up attended email programs.

#### Converting the event content to an On-Demand gated asset

1. Upload the recording to our main GitLab channel, fill in the title with the event title, and fill in the description with a short paragraph of what the webcast is about. Make sure the video set as `Unlisted` so only people with the URL to the video can find it.
2. Once the recording has been uploaded, copy the video link on the right.
3. **Login to PathFactory.** Add the copied youtube link to Pathfactory as a new content by following the instructions outlined [here](/handbook/marketing/marketing-operations/pathfactory/#how-to-upload-content).
4. **Login to Marketo.** Create the [listening campaign](/handbook/marketing/marketing-operations/pathfactory/#listening-campaigns) in Marketo by cloning this [program template](https://app-ab13.marketo.com/#PG3875A1). In the  `PF - Listening (Triggered)` smart campaign nested to the program, modify the `PathFactory Content Journey` filter to reflect your asset's Pathfactory custom url slug in the following format `[your assets custom url slug]`. Activate the smart campaign and then set up the Salesforce campaign sync for the listening campaign.
5. **Login to Salesforce.** Find the subsequent SFDC campaign for the listening campaign. Add the subsequent webcast campaign to the `Parent Campaign` field. Set the `Enable Bizible Touchpoints` field to `Include only "Responded" Campaign Members`.
6. **Navigate back to:  www-gitlab-com/data/webcast.yml.**
7. Click edit and add the following code snippet `youtube_url: ''`under the `url` code snippet for your landing page.
8. Change the `form:` to `2076`.
9. Change the `success_message:` to `Thank you for downloading. <a id="destination-url" href="YourWebcastPathFactoryLink&lb_email=">Click here</a> to view the on demand webcast. We will also email you a link to the webcast.`
10. Add commit message to name your Merge Request using syntax  `Add PathFactory link for [webcast name] landing page` (e.g. `Add PathFactory link for Debunking Serverless security myths webcast landing page`).
11. Create a name for the target branch - NEVER leave it as the master (i.e. `20191130-Debunking-WC-LP`).
12. On the next screen (New Merge Request), add `WIP:` to the beginning of the title and add a quick description (`Add PathFactory link to LP for [webcast name] will suffice`).
13. If you have merge access, assign Merge Request to yourself. If you don't have merge access, assign Merge Request to Jackie Gragnola or Agnes Oetama. Scroll down, check the box for `Delete source branch when merge request is accepted`.
14. Click Submit Merge Request.
15. You’ve now created the Merge Request.
16. **Login to Marketo.** Go to the webcast program and update the `{{my.ondemandUrl}}` token with the webcast PathFactory link.
17. Go to the assets folder within your webcast program and update the `On-demand Autoresponder` email with relevant copies related to the webcast.
18. Navigate to the `Viewed On Demand` Smart campaign within your webcast program.
19. Modify the webpage link with the webcast landing page url without the https (e.g: `about.gitlab.com/webcast/securing-serverless/`), then activate the `Viewed On Demand` smart campaign.
20. Deactivate the `Attended` ,`Registration from Landing Page`, and `Registration From Zoom` smart campaigns within your webcast program.
21. **Go back to your MR.** Once the pipeline passes and if everything looks okay in the review app remove WIP and merge (if you have merge access). If you don't have merge access, ping @jgragnola or @aoetama in the MR comment to merge.
22. Add your webcast to the /resources page by following the instructions [outlined here](/handbook/marketing/demand-generation/campaigns/content-in-campaigns/).

## Executive Roundtables

{: #executive-roundtables .gitlab-purple}
<!-- DO NOT CHANGE THIS ANCHOR -->
---

*An executive roundtable is a gathering of high level CxO attendees run as an open discussion between the moderator/host, GitLab expert and delegates. There usually aren't any presentations, but instead a discussion where anyone can chime in to speak. The host would prepare questions to lead discussion topics and go around the room asking delegates questions to answer. The project owner (field marketing) is responsible for creating the epic and related issue creation, and keeping timelines and DRIs up-to-date. Mareting Ops is responsible for uploading the list to our database.*

### Process in GitLab to organize epic & issues

{: #executive-roundtable-project-management}
<!-- DO NOT CHANGE THIS ANCHOR -->

The project owner is responsible for following the steps below to create the epic and related issues in GitLab.

1. Project owner (FMM) creates the main tactic issue
1. Project owner (FMC) creates the epic to house all related issues (code below)
1. Project owner (FMC) creates the relevant issues required (shortcut links in epic code below)
1. Project owner (FMC) associates all the relevant issues to the newly created epic, as well as the original issue
1. Project owner (FMC) sets due dates for each issue, based on agreed upon SLAs between teams for each task, and confirms accurate ownership for each issue

*Note: if the date of the tactic changes, the project owner is responsible for changing the due dates of all related issues to match the new date, and alerting the team members involved.*

### Epic code and issue templates

{: #executive-roundtable-epic-code}
<!-- DO NOT CHANGE THIS ANCHOR -->

```markdown
<!-- Name this epic: Executive Roundtable - [Vendor] - [3-letter Month] [Date], [Year] -->

## [Main Issue >>]()

## [Copy document >>]() - [template](https://docs.google.com/document/d/1j43mf7Lsq2AXoNwiygGAr_laiFzmokNCfMHi7KNLjuA/edit)

## :notepad_spiral: Key Details
* **Project Owner/Field Marketing Manager:**
* **FMC/FMS:**
* **Type:** Executive Roundtable
* **Official Name:**
* **Date(s):**
* **Registration URL:**
* **Sales Segment (choose primary):** `Large, Mid-Market, or SMB`
* **Sales Region (choose one):** `AMER, EMEA, APAC`
* **Sales Territory (optional, if specific):**
* **Goal:** `Please be specific on the metric this is meant to impact.`
* **Budget:**
* **Campaign Tag:**
* **Launch Date:**  [YYYY-MM-DD]
* [ ] [main salesforce program]()
* [ ] [main marketo campaign]()
* [ ] Campaign UTM - Project Owner/FM to fill in (Format: campaign tag - change to all lowercase, no spaces, hyphens, underscores, or special characters)

## User Experience
[Project Owner/FMM to provide a description of the user journey - from communication plan, to what the user experiences upon reciept, plus triggers on our end like confirmation email and how GitLab fulfils with the vendor, up until receipt by the user and answering whether or not we get confirmation that they received it... what is the anticipated journey after that?]

## Additional description and notes about the tactic
[Project Owner/FMM add whatever additional notes are relevant here]

## Issue creation
* [ ] [Program Tracking - FM](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=program-tracking) - FMC creates, assigns to FMC
* [ ] [Write copy issue](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=write-copy) - FMC creates, assigns to FMM
* [ ] [Sales Nominated Issue](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=request_sales_nominated) - FMC creates, assigns to the FMM (issue will be triaged)
* [ ] [Email Invitation Issue](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=request_email_invite) - FMC creates one for each invitation requested, assigns to FMM (issue will be triaged)
* [ ] [Follow Up Email issue](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=request_email_followup) - FMC creates, assigns to FMM (issue will be triaged)
* [ ] [Add to Nurture](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=request_add_nurture) - FMC creates, assigns to FMM (issue will be triaged)
* [ ] [List Clean and Upload](https://gitlab.com/gitlab-com/marketing/marketing-operations/issues/new?issuable_template=event-clean-upload-list) - FMC creates, assigns to FMM and MOps
* [ ] [Optional: FM Pathfactory Asset Upload and Track Creation Issue](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=Pathfactory_Request_Template) - FMM creates, assigns to FMC

/label ~"mktg-status::wip" ~"Field Marketing" ~"Executive Roundtable"
```

## Vendor Arranged Meetings

{: #vendor-arranged-meetings .gitlab-purple}
<!-- DO NOT CHANGE THIS ANCHOR -->
---

*A vendor arranged meeting is used for campaigns where a third party vendor is organizing one-to-one meetings with prospect or customer accounts, ideally connecting our team with target accounts that are challenging to set meetings with directly. This does not include meetings set internally by GitLab team members. An example would be a "speed dating" style meeting setup where a vendor organized meetings with prospects of interest to GitLab. The project owner (field marketing commonly) is responsible for creating the epic and related issue creation, and keeping timelines and DRIs up-to-date. Mareting Ops is responsible for uploading the list to our database.*

### Process in GitLab to organize epic & issues

{: #vendor-arranged-meeting-project-management}
<!-- DO NOT CHANGE THIS ANCHOR -->

The project owner is responsible for following the steps below to create the epic and related issues in GitLab.

1. Project owner (FMM) creates the main tactic issue
1. Project owner (FMC) creates the epic to house all related issues (code below)
1. Project owner (FMC) creates the relevant issues required (shortcut links in epic code below)
1. Project owner (FMC) associates all the relevant issues to the newly created epic, as well as the original issue
1. Project owner (FMC) sets due dates for each issue, based on agreed upon SLAs between teams for each task, and confirms accurate ownership for each issue

*Note: if the date of the tactic changes, the project owner is responsible for changing the due dates of all related issues to match the new date, and alerting the team members involved.*

### Epic code and issue templates

{: #vendor-arranged-meeting-epic-code}
<!-- DO NOT CHANGE THIS ANCHOR -->

```markdown
<!-- Name this epic: Vendor Arranged Meeting - [Vendor] - [3-letter Month] [Date], [Year] -->

## [Main Issue >>]()

## [Copy document >>]() - [template](https://docs.google.com/document/d/1j43mf7Lsq2AXoNwiygGAr_laiFzmokNCfMHi7KNLjuA/edit)

## :notepad_spiral: Key Details
* **Project Owner:**
* **FMC/FMS:**
* **Type:** Vendor Arranged Meetings
* **Official Name:**
* **Registration URL:**
* **Sales Segment (choose primary):** `Large, Mid-Market, or SMB`
* **Sales Region (choose one):** `AMER, EMEA, APAC`
* **Sales Territory (optional, if specific):**
* **Goal:** `Please be specific on the metric this is meant to impact.`
* **Budget:**
* **Campaign Tag:**
* **Launch Date:**  [YYYY-MM-DD]
* [ ] [main salesforce program]()
* [ ] [main marketo campaign]()
* [ ] Campaign UTM - Project Owner/FM to fill in (Format: campaign tag - change to all lowercase, no spaces, hyphens, underscores, or special characters)

## User Experience
[Project Owner/FMM to provide a description of the user journey - from communication plan, to what the user experiences upon reciept, plus triggers on our end like confirmation email and how GitLab fulfils with the vendor, up until receipt by the user and answering whether or not we get confirmation that they received it... what is the anticipated journey after that?]

## Additional description and notes about the tactic
[Project Owner/FMM add whatever additional notes are relevant here]

## Issue creation

* [ ] [Program Tracking - FM](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=program-tracking) - FMC creates, assigns to FMC
* [ ] [Write copy issue](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=write-copy) - FMC creates, assigns to FMM
* [ ] [Follow Up Email issue](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=request_email_followup) - FMC creates, assigns to FMM (issue will be triaged)
* [ ] [Add to Nurture](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=request_add_nurture) - FMC creates, assigns to FMM (issue will be triaged)
* [ ] [List Clean and Upload](https://gitlab.com/gitlab-com/marketing/marketing-operations/issues/new?issuable_template=event-clean-upload-list) - FMC creates, assigns to FMM and MOps
* [ ] [Optional: FM Pathfactory Asset Upload and Track Creation Issue](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=Pathfactory_Request_Template) - FMM creates, assigns to FMC

**Optional: create the optional issues only if we have rights to recording and content is worth gating*

/label ~"mktg-status::wip" ~"Field Marketing" ~"Vendor Arranged Meetings"
```

## Actions after the external virtual event

{: #post-external-virtual-event .gitlab-purple}
<!-- DO NOT CHANGE THIS ANCHOR -->

### Posting external virtual event recordings to youtube

{: #post-youtube}
<!-- DO NOT CHANGE THIS ANCHOR -->
Follow this handbook documentation on how to [upload external webcast recordings](/handbook/marketing/marketing-operations/youtube/#uploading-conversations-to-youtube) to the [GitLab branded YouTube channel](/handbook/marketing/marketing-operations/youtube/#channels).

**This process must be completed by the tactic owner.**

*Note: because these requests move through the Campaign Managers currently and their focus and priority is planning, implementing, and optimizing top-funnel campaign strategies, there is a [5 Business Day SLA](/handbook/marketing/demand-generation/campaigns/#turnaround-time-and-slas).*

For immediate follow-up emails, it is recommended to point directly to the GitLab YouTube link (uploaded by the tactic owner) to avoid delays in the send.

If an upload to Pathfactory (an addition to a track), is *required*, the tactiic owner must open a [Pathfactory Upload](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-pathfactory-upload) issue and **include the GitLab YouTube link**, as well as a [Pathfactory Track](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-pathfactory-track) issue to have the asset added to a track.

### Gating external webcasts

{: #post-gating}
<!-- DO NOT CHANGE THIS ANCHOR -->

#### Posting external webcasts WITHOUT a tech/alliance partner

{: #post-gating-non-alliance}
<!-- DO NOT CHANGE THIS ANCHOR -->
The recording meets all of the following criterias:

1. Content solidifies GitLab use case or existing campaign messaging.
2. Future gated page has an omni-channel (min 2, 1 out of the 2 has to be paid) promotion plans. The issue for the  promotion plans has to be linked to the gating request.

#### Posting external webcasts WITH a tech/alliance partner

{: #post-gating-with-alliance}
<!-- DO NOT CHANGE THIS ANCHOR -->
The recording meets all of the following criterias:

1. Select or High priority partner: Listed as high priority on the [Alliances Technology Dashboard](https://docs.google.com/spreadsheets/d/1-EE7vChGkDeyJxoM-LjVmUdwYwboxBmq8_42hjHGw_w/edit#gid=0) or is a Select channel partner.
2. Content solidifies GitLab use case or existing campaign messaging.
3. Future gated page has an omni-channel (min 2, 1 out of the  2 has to be paid) promotion plans. The issue for the  promotion plans has to be linked to the gating request.

OR

Ungated video garners 550 youtube views within the first 7 days of posting.

*Note: The 550 min threshold is based on the avg of top 10 videos on gitlab branded youtube channel between 8/11/20 - 8/18/20.*
