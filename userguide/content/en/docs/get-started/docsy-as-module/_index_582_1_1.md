---
title: Webcasts
description: An overview of webcasts at GitLab, including processes for Zoom and On24.
twitter_image: '/images/tweets/handbook-marketing.png'
twitter_site: "@gitlab"
twitter_creator: "@gitlab"
---

---

## GitLab-Hosted Webcasts Calendar {#calendar}

<!-- DO NOT CHANGE THIS ANCHOR -->

<figure>
<iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23B39DDB&amp;ctz=America%2FLos_Angeles&amp;src=Z2l0bGFiLmNvbV9uMnNibXZmMjlqczBzM3BiM2ozaHRwa3FmZ0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;src=Z2l0bGFiLmNvbV8xcXZlNmc4MWRwOTFyOWhldnRrZmQ5cjA5OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;src=Z2l0bGFiLmNvbV8xOGVqOHN0NmlxajZpYXB1NTNrajUzNHBsa0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23039BE5&amp;color=%239E69AF&amp;color=%23009688&amp;title=All%20GitLab%20Virtual%20Events&amp;showCalendars=1" style="border:solid 1px #777" width="1000" height="600" frameborder="0" scrolling="no"></iframe>
</figure>

[See calendar glossary here](/handbook/marketing/virtual-events/#calendar-glossary)

## Overview {#overview}

<!-- DO NOT CHANGE THIS ANCHOR -->

There are four types of GitLab-hosted webcasts and workshops using the Zoom webcast license and On24, with differing DRIs depending on the webcast goal and owner.

* **[Top-Funnel Campaign Webcasts](/handbook/marketing/virtual-events/webcasts/#campaign-webcasts):** goal is net new customer acquisition, managed by Campaign Managers in **On24**, aligned to use cases amd overarching campaign themes to drive MQLs in target accounts
* **[Partner Webcasts](/handbook/marketing/virtual-events/webcasts/#partner-webcasts):** goal is net new customer acquisition, managed by Partner Marketing in **On24**, teaming with Partners to drive registration together
* **[Virtual Workshops](/handbook/marketing/virtual-events/webcasts/#virtual-workshops):** goal is to increase conversion/velocity of MQLs to SAO, and/or SAO to Closed Won, using hands-on labs with demo environment, capped registration, managed by Field Marketing in **Zoom**

## Campaign Webcasts {#campaign-webcasts}

<!-- DO NOT CHANGE THIS ANCHOR -->

Campaign webcasts are managed, moderated, and executed by the Campaigns Team in On24, focusing on use case, competitive, and other overarching campaign messaging.

### Submitting a campaign webcast idea {#campaigns-webcast-idea}

<!-- DO NOT CHANGE THIS ANCHOR -->

Create a [webcast idea issue](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=idea-webcast) in the campaigns project.

* Campaign managers will consider the alignment to active and planned campaigns
* If the suggeted topic is approved, the campaign manager will change the status label from `status:plan` to `status:wip`, and run with the webcast
* The webcast owner will then begin creation of the epic and related issues, requesting work of relevant teams

### Organizing campaign webcast epics and issues {#campaigns-project-management}

<!-- DO NOT CHANGE THIS ANCHOR -->

* **Confirm Date:** The webcast idea issue (date request issue) must be complete and confirmed before creation of the epic, issues, and workback.
* **Campaign Webcast Epic:** campaign manager creates webcast epic (using code below)
* **Related Issues:** campaign manager creates the issues as designated in the GANTT sheet, and associates to the campaign webcast epic

[View the webcast workback timeline GANTT here](https://docs.google.com/spreadsheets/d/1A4c2OodEAsOlN4Ek-rBiLlwkdF0AvX5YBiY4mhkZd-M/edit#gid=666473040)

```markdown
> Naming convention: [Webcast Title] - [3-letter Month] [Date], [Year]
> Start Date = date epic opened, Due Date = webcast date

## [GANTT >>]() - owner to copy from this template: https://docs.google.com/spreadsheets/d/1A4c2OodEAsOlN4Ek-rBiLlwkdF0AvX5YBiY4mhkZd-M/edit#gid=666473040

## [Landing Page >>]() - `to be added when live`

#### :key: Key Details
* **Webcast DRI:**
* **Speaker(s) and Moderator:**
* **Official Webcast Name:**
* **Official Webcast Date:**
* **Sales Segment:** `Large, Mid-Market, or SMB`
* **Sales Region:** `AMER, EMEA, APAC`
* **Sales Territory (if specific):**
* **Goal:** `Please be specific on the KPI this is meant to impact. For example, drive MQLs against named account list, increase velocity of MQLs > SAOs, increase velocity of early stage opps to close.`
* [landing page copy]() - `doc to be added by Marketing Programs` ([clone the template here](https://docs.google.com/document/d/1xHnLKPCaXrpEe1ccRh_7-IqgNbAlzQsZVc-wr1W4ng8/edit#))
* [ ] [main salesforce campaign]()
* [ ] [main marketo program]()
* [ ] [ON24 webcast preview link]()
* [ ] [Developer Relations Influenced](/handbook/marketing/developer-relations/content-effectiveness/#developer-relations-influenced-campaigns), Add the `DevRel-Influenced` label.


## :books: Issue creation

<details>
<summary>Expand below for checkboxes of issues to be created, use the GANTT to calculate the due dates.</summary>

* [ ] [Program tracking](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=campaigns-program-tracking) issue created
* [ ] [Webcast dry run schedule](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=campaigns-webcast-dryrun-sched) issue created
* [ ] [Landing page and automation](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=campaigns-landing-page) issue created
* [ ] [Invitation and reminder](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=campaigns-email-invitation-reminder-follow-up) issues created
* [ ] Optional: Organic social issue created for social media manager
* [ ] [Follow-up email](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=campaigns-email-invitation-reminder-follow-up) issue created
* [ ] [Host dry run](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=campaigns-webcast-dryrun-host) issue created
* [ ] [Prepare for webcast](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=campaigns-webcast-prep) issue created
* [ ] [On-demand switch issue](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=campaigns-post-webcast) issue created
</details>

/label ~mktg-demandgen ~dg-campaigns ~"Webcast - GitLab Hosted" ~"Webcast" ~"mktg-status::wip"

```

## Partner Webcasts {#partner-webcasts}

<!-- DO NOT CHANGE THIS ANCHOR -->

Partner webcasts are managed and moderated by Partner Marketing, working closely with partner counterparts, with techincal setup (Marketo, SFDC, ON24) by Campaign Managers.

### Checking On24 webcast calendar for partner webcast dates {#bt-partner-webcasts}

<!-- DO NOT CHANGE THIS ANCHOR -->

* Before scheduling the ON24 Webcast, please check [ON24 calendar](https://calendar.google.com/calendar/u/0?cid=Y19xdTVqMzRsZ2ZrcmlybmM5aGx1MWRkams0MEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t) to make sure there is no overlapping virtual event that has been pre-scheduled
* If the date and time is feasible and does not over-saturate the calendar, please schedule directly in the ON24 calendar
* Key information to add: webcast title, webcast DRI, and the link to the issue in the description
* If you have any additional questions, please get in touch with Marketing Campaigns on slack - #marketing-campaigns

### Organizing GitLab-Hosted Partner Webcast Epics and Issues {#partner-project-management}

<!-- DO NOT CHANGE THIS ANCHOR -->

* **Confirm Date:** The zoom date request issue (in section above) must be complete and confirmed before creation of the epic, issues, and workback
* **GitLab-Hosted Partner Webcast Epic:** Partner Marketing DRI creates webcast epic (using code below)
* **Related Issues:** Partner Marketing DRI creates the issues as designated in the GANTT sheet, and associates to the webcast epic

[View the webcast workback timeline GANTT here](https://docs.google.com/spreadsheets/d/1A4c2OodEAsOlN4Ek-rBiLlwkdF0AvX5YBiY4mhkZd-M/edit#gid=1597899784)

```markdown
> Naming convention: [Webcast Title] - [3-letter Month] [Date], [Year]
> Start Date = date epic opened, Due Date = webcast date

## [GANTT >>]() - owner to copy from this template: https://docs.google.com/spreadsheets/d/1A4c2OodEAsOlN4Ek-rBiLlwkdF0AvX5YBiY4mhkZd-M/edit#gid=1597899784

## [Landing Page >>]() - `to be added when live`

#### :key: Key Details

* **Webcast DRI:**
* **Speaker(s) and Moderator:**
* **Official Webcast Name:**
* **Official Webcast Date:**
* [landing page copy]() - `doc to be added by Partner Marketing` ([clone the template here](https://docs.google.com/document/d/1xHnLKPCaXrpEe1ccRh_7-IqgNbAlzQsZVc-wr1W4ng8/edit#))
* [ ] [main salesforce campaign]()
* [ ] [main marketo program]()
* [ ] Sharing leads with our partner (check box if yes) - campaign manager to use *Form 2432: Partners*
* [ ] [Developer Relations Influenced](/handbook/marketing/developer-relations/content-effectiveness/#developer-relations-influenced-campaigns), Add the `DevRel-Influenced` label.

/label ~"Partner Marketing" ~"Marketing Programs" ~"Webcast - GitLab Hosted" ~"Webcast" ~"mktg-status::wip" ~mktg-demandgen

```

### Partner webcast tactical execution steps {#partner-tactical-execution}

<!-- DO NOT CHANGE THIS ANCHOR -->

*(Typically we host 2 webcasts per month with GitLab Partners)*

**Step 1: Creating a GitLab webcast**

* Identify partner, topic, and a potential date for webcast
  * Establish if the partner wants us to share leads with them.
    * If yes, we MUST include the following veribage on the landing page per compliance - Ping Lynsey Sayers in Compliance
    * If yes, Partner marketing is responsible to document in the appropriate issues that we are sharing leads and do the following actions:
      * Works with the partner to identify requirements of the format of the leads
      * Will open an issue for Marketing Ops to provide the lead list post-event.
* Create the copy for the title and abstract (in collaboration with the partner, and any other speakers) and gain approval, and obtain sign off from the partner.
* Create the copy for the landing page and provide speaker bios and, if applicable, photos of the speakers.
      + Please make sure if we are sharing leads our agreed upon compliance opt in verbiage is included
* Create the copy for the invite emails, and determine how many invite emails will be sent pre-webcast.
  * Campaign Manager and Partner marketing: reviews emails before sending*
* Within the main issue of the webcast, identify the target audience, previous campaigns, and previous events for the lead list for the invitation emails.
* Campaign Manager is responsible for setting up [calendar invites for kick-off call, content reviews, dry run and webcast](/handbook/marketing/virtual-events/webcasts/#step-1-configure-webex)

**Step 2: Pre-webcast work**

* If applicable, work with digital marketing (paid advertising), Campaign Manager on where the budget coming for paid advertising will come from.
  * *Provide guidance on targeting which includes but is not limited to job titles to target and twitter accounts and hashtags recommended.*
* Set up SDR outreach issue with SDR outreach template in the Product Marketing Board.
  * *Tag [global SDR managers and SDR enablement manager](/handbook/marketing/sales-development/)*
  * *Post the issue in the #sdr_global slack channel for visibility*
* Work with Campaign Manager to set up organic social promotion with the [social marketing team](/handbook/marketing/integrated-marketing/digital-strategy/social-marketing/).

**Step 3: Executing the webcast**

* Campaign Manager acts as the project manager and the moderator for the webcast
  * *Make sure the slides and that the webcast is made available as on-demand asset post webcast*
* If applicable, [set up a swag link](/handbook/marketing/developer-relations/contributor-success/community-appreciation/) to give to the partner presenter as a thank you.

**Step 4: Post-event follow up**

* Work with the Campaign Manager on the follow up email for attendees and no shows of the webcast. The follow-up email(s) should be prepped and ready to go (minus links to the recording) 48 hours prior to the live event. The following is minimum guidance for what should be included in the follow-up email:
  * *Slide Deck and Unlisted YouTube video of the webcast*
  * *A call-to-action for a 30-day trial, any other relevant joint partner collateral (gated or not), and/or an applicable Path Factory*
  * *Follow up emails should be sent 24-48 hours post webcast*
* Work with the Campaign Manager on the [conversion of the on-demand page post webcast](/handbook/marketing/virtual-events/webcasts/#converting-the-webcast-to-an-on-demand-gated-asset---zoom)
* If we are sharing leads with the partner, partner marketing works with Campaign Manager and Marketing Ops to share the leads.

**Step 5: Reporting**

* Fill out lead and salesforce reporting in the [partner and channel webinar tracker](https://docs.google.com/spreadsheets/d/1eoT3i8PO-YZdsoLJn4FIGtLPzo-r-fQbRp91oMKgM2Y/edit#gid=1732141776)

## Webcasts {#field-abm-webcasts}

<!-- DO NOT CHANGE THIS ANCHOR -->

* For details on how the Field Marketing team runs Hosted Webcasts, please review [this page](/handbook/marketing/field-marketing/field-marketing-owned-virtual-events/#webcasts-1).

## Virtual Workshops {#field-workshops}

<!-- DO NOT CHANGE THIS ANCHOR -->

Virtual Workshops are managed and moderated by Field Marketing, working closely with Solution Architects and other GitLab team members, with partial technical setup by Campaign Managers.

For details regarding Virtual Workshops, please visit the [Field Marketing Page](/handbook/marketing/field-marketing/field-marketing-owned-virtual-events/#virtual-workshops-1).

## Best Practices {#webcast-best-practices}

<!-- DO NOT CHANGE THIS ANCHOR -->

`Marketing Programs to review and update against "general virtual events best practices" page`

1. Give yourself at least 30 business days of promotion.
2. Send invitation emails 2 weeks out, 1 week out, and if needed 2 hours before event. Sample emails can be found here.
3. Only send promotional emails Tuesday, Wednesday, or Thursday for optimal results.
4. Send reminder emails to registrants the day before, and one hour before the event.
5. Host webcasts on a Wednesday or Thursday, see note below about scheduling.
6. Post links to additional, related resources during the event.
7. Include "contact us" information and a clear CTA at the end of the presentation.
8. Video recording of webcast uploaded to YouTube within 24 hours as event occurred.
9. Send the recording to all registrants, whether they attended or not within 48 hours post webcast.
10. Review Zoom's guide on [in person chat](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0064400) which explains the various ways you can utilize the chat feature.

Review GitLab's general [virtual events best practices](/handbook/marketing/virtual-events/#best-practices) for additional suggestions on how to make your virtual event a success.

## Speaker Approval {#webcast-speaker-approval}

<!-- DO NOT CHANGE THIS ANCHOR -->

Marketing Programs sometimes depend on GitLab's subject matter experts to deliver webcast presentations. However, we must ensure that when we ask a speaker to participate on a webcast that the work is approved. Please use the following guideline when asking a subject matter expert to participate on a webcast.

1. Have a high-level abstract of the content prepared before asking for a presenter.
2. Send the abstract to both the proposed speaker and their manager to review. A speaker is not considered booked unless they have approval from their manager.
3. Address and resolve any concerns regarding the abstract.
4. Once the manager approves and the speaker accepts, you can move forward with the webcast.

## Tips for Speakers {#speaker-tips}

<!-- DO NOT CHANGE THIS ANCHOR -->

Here are some basic tips to help ensure that you have a good experience preparing for and presenting on a webcast.

### Before Committing {#speaker-before-committing}

Ask us any questions you have about the time commitment etc. and what exactly our expectations are. Talk about it with your manager if you're on the fence about your availability, bandwidth, or interest. Make sure you're both on the same page. We want this to be a meaningful professional development exercise for you, not a favor to us that you're lukewarm about — if you feel that way, none of will be able to do our best job. We'll be honest with you, so please do the same for us.

### Before the Dry Run {#speaker-before-dry-run}

Select and set up your presentation space. Pick a spot with good wifi, and we recommend setting up an external mic for better audio quality, although this is optional. If you will be presenting from your home, alert your spouse/roommates of the time/date & ask them to be out of the house if necessary. Depending on your preferences and comfort level with public speaking, run through the script several times.

### Before the Presentation {#speaker-before-presentation}

Try to get a good sleep the night before, and, if the presentation is in the morning, wake up early enough to run through your notes at least once. Review our [Positioning FAQ](/handbook/marketing/positioning-faq/), or keep the page handy in case you are asked in the Q&A about how GitLab compares to our competitors.

## Technical Demo Series {#technical-demo-series}

<!-- DO NOT CHANGE THIS ANCHOR -->

Technical demos are aligned with the GTM Motions and cover a range of topics relevant to leads in consideration & purchase stages.
Demo series run on a bi-weekly cadence as live or pre-recorded sessions on On24 Platform. Participants have the flexibility to engage in either written or live Q&A sessions.

**Key objectives:**

* **Pipeline Acceleration:** Increase conversion from Marketing Qualified Leads (MQL) to Sales Accepted Opportunities (SAO).
* **Prospect and Customer Education:** Inform our prospects and existing customers about the value offered by GitLab's features.

### Technical demo landing pages {#technical-demo-landing-pages}

<!-- DO NOT CHANGE THIS ANCHOR -->

Technical Demo Series are managed by Marketing Campaign team, in collaboration with DevRel and Solution Architects who deliver the content.

Global Campaign Managers are responsible for creating technical demo bundles as a pivotal element within the overarching Go-To-Market (GTM) Campaign strategy. Regional Campaign Managers are responsible for activation in the region as integral part of the regional demand generation plans.

Regional Campaign Managers are responsible for updating the technical demo page through our CMS platform - Contentful:

* [Global Technical Demo Page](https://about.gitlab.com/gitlab-technical-demo-series/)

Instructions video on adding/removing the technical demos from landing page are available [here](https://youtu.be/yhPGuyRkTno).

## Logistical Setup {#logistical-setup}

<!-- DO NOT CHANGE THIS ANCHOR -->

## Adding your webcasts into the calendar {#add-to-calendar}

<!-- DO NOT CHANGE THIS ANCHOR -->

### On24 Webcast Calendar {#bt-calendar}

<!-- DO NOT CHANGE THIS ANCHOR -->

[On24 webcast calendar](https://calendar.google.com/calendar/u/1?cid=Y19xdTVqMzRsZ2ZrcmlybmM5aGx1MWRkams0MEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t) is used to log all planned and scheduled On24 webcasts and their related dry runs. **The purpose of the On24 webcast calendar is to avoid scheduling overlapping webcasts and to provide visibility into all On24 webcasts across teams.**

**Adding to the calendar:**

1. Add tentative webcasts to the calendar with `[Hold]`
   * ex. `[Hold] TALK | 7 secrets of effective GitOps`
   * For dry run (practice) webcasts, add `DR` (ex. `[Hold DR] TALK | 7 secrets of effective gitops`)
   * Include a link to the issue in the event description
1. When the date/time/speakers of the webcast has been confirmed, remove `[Hold]` from the event title
   * ex. `TALK | 7 secrets of effective GitOps` or `RP | 7 secrets of effective GitOps`
   * Add the time of the webcast on the calendar event (if it is still an all-day event)
   * Add the epic link, and remove the issue link, in the calendar description
   * Add all presenters (internal GitLab team members and external speakers)
   * Add On24 login information for presenters

### Zoom Webcast Calendar {#zoom-calendar}

<!-- DO NOT CHANGE THIS ANCHOR -->

The Field Marketing team manages the [zoom webcast license calendar](https://calendar.google.com/calendar?cid=Z2l0bGFiLmNvbV8xcXZlNmc4MWRwOTFyOWhldnRrZmQ5cjA5OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t), which will be used to log all planned and scheduled Field Marketing hosted webcasts/workshops and their related dry runs. **The purpose of the webcast calendar is to ensure Field Marketers don't schedule overlapping webcasts when using the shared webcast license and to provide executive visibility into all webcasts being hosted.**

Anyone desiring to reserve the zoom license for a webcast must submit a [Zoom license date request](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=zoom-license-date-request) - please note that speakers must be secured and all details in the issue must be provided or the request will be rejected.

**Planned webcasts:**

1. As soon as an issue is created for a webcast request, add the planned webcast to the webcast calendar by creating an event on the day you plan to host the webcast. For webcasts that are still in planning, use the following naming convention `[Hold WC Hosted] Webcast title` (e.g: `[Hold WC Hosted] Mastering CI`) and create it as an all-day event (no time slot selected). Make sure to also include the link to the issue in the calendar description.

**Confirmed Webcasts**

1. Once the date/time of the webcast has been confirmed, go to your calendar event and remove `Hold` from the event title `[WC Hosted] Webcast title` (e.g: `[WC Hosted] Mastering CI`). Specify the time on the calendar event and swap the issue link in the calendar description with the Epic link. *Note: In the spirit of efficiency, please be sure to add all presenters (GitLab team members and external speakers), the epic or issue (if you have one) and your Zoom invite info to the calendar invite so you're not having to create multiple calendar invites.*
1. Make sure to also add dry runs to the webcast calendar. When creating the webcast dry run event(s), please use the following naming convention `[DR WC Hosted] Webcast title` (e.g: `[DR WC Hosted] Mastering CI`) and specify the date/time on the calendar event.

## On24 Webcasts {#brighttalk}

<!-- DO NOT CHANGE THIS ANCHOR -->

### Quick Links {#bt-quick-links}

<!-- DO NOT CHANGE THIS ANCHOR -->

* [On24 rollout session recording](https://youtu.be/5ioBk6h_dP0)
* [On24 rollout session slides](https://docs.google.com/presentation/d/1Iyw8XjrkmFpiLvehjqMr4TUSJ4qmjHBFGs0HZ0bZcRI/edit#slide=id.g139e148a631_0_188)
* [Dedicated On24 handbook page](/handbook/marketing/marketing-operations/on24/)
* [On24 Support Portal](https://on24support.force.com/Support/s/article/ON24-Contact-Support)
* [On24 Knowledge Center](https://on24support.force.com/Support/s/knowledge)

### Types of On24 Webcasts {#bt-types}

<!-- DO NOT CHANGE THIS ANCHOR -->

* **Live Audio and Video (with Screen Share)**: This option is known as the Video Presenter Bridge. Multiple presenters can present a live webcast event using Webcam, PC Microphone, or Dial-in. Live screen share is also available to presenters if they wish to share their screen during the presentation.
* **Live Audio (no Screen Share)**: Multiple presenters can present a live event using the telephone. Presenters will dial into the ON24 presenter phone bridge for the live webinar. Live screen share is not available with this event type.
* **Broadcast Video**: Choose this option to incorporate broadcast quality video into your live events. This option requires video encoding gear external to Webcast Elite. The Broadcast Video option is available at an additional cost and will need to be enabled for your account.
* **Simu-live**: Choose this option if you wish to pre-record your entire event and deliver it to a live audience at a designated date and time. You can interact with the live audience through written Q&A during playback of the pre-recorded presentation. The event will end immediately after the pre-recorded playback has ended.
  * Simu-lives must be created in advance. No changes can be made two hours before the scheduled live time.
* **Simu-live with Rollover to Live Audio**: Also known as Sim-2-live, provides presenters the opportunity to address comments and questions verbally with a live audience once the pre-recorded presentation is done playing. For this event type select, Simu-live then enable the Rollover to Video and Audio toggle under Main Details.
* **Recurring Simu-live**: Provides an efficient option to create one event and run it multiple times for recurring presentations such as daily demos, weekly campaign presentations, etc.  Attendees can choose the date they wish to attend. All registrant and attendee data will roll up into a single report.
* **On Demand**: Choose this option to create a pre-recorded On Demand event. There is no interaction with a live audience.

---
<!-- NOTE: THE DOCUMENTATION BELOW IS FOR ZOOM ONLY!!! ON24 & WEBEX IS BELOW IN THIS HANDBOOK PAGE -->

## Zoom Webcasts {#zoom}

<!-- DO NOT CHANGE THIS ANCHOR -->

### Step 1: Configure Zoom {#configure-zoom}

<!-- DO NOT CHANGE THIS ANCHOR -->

*Note: The webcasts@ zoom license can only be used for a single session at a time. This license is used for all field-marketing-run internally hosted webcasts. Therefore, when a webcast is requested please confirm there is not going to be a conflict between the pre-scheduled sessions - both live and dry-run - using that license by checking the [webcast gcal](https://calendar.google.com/calendar?cid=Z2l0bGFiLmNvbV8xcXZlNmc4MWRwOTFyOWhldnRrZmQ5cjA5OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t). Schedule no less than 30min between sessions (before & after) so there is less chance of conflict and allows for a buffer.*

1. **LOGIN**: log into Zoom,  go to the Webinars tab then click "Schedule a webinar".
2. **TEMPLATE**: make sure to select "TEMPLATE" in the "use a template" section.
3. **TOPIC**: add the topic as follows "Webcast title - Month DD, YYYY - HH:MM am/pm PT/HH:MM am/pm UTC" (for example: `Debunking Serverless security myths - October 21, 2019 - 8:30 am PT/3:30 pm UTC`).
4. **DESCRIPTION**: add a sentence to describe what the webcast is about at a high-level.
5. **WHEN**: add the webcast date and time.
6. **DURATION**: add how long the webcast will be PLUS 45 minutes. You must include an additional 45 minutes for the prep call before the event plus padding for running over, otherwise the Launchpoint integration will fail. Keep the start time as the actual time attendees should join, but increase the duration. For example, if your webcast is from 9:00am-10:00am PT, enter start time of 9:00am, but a duration of 1 hour and 45 minutes.
7. **TIMEZONE**: select the correct timezone for your webcast.
8. **DO NOT** change all the other settings that are prepopulated by the template.
9. **ALTERNATIVE HOSTS**: add webcast DRI, internal speaker(s), and Q&A resource as alternative hosts.
10. **PANELISTS**: add external GitLab speakers as panelists by following the video instructions below.
    **Adding alt-host and panelist to a webcast**
    <iframe width="560" height="315" src="https://www.youtube.com/embed/4YvV8AoyqXc?rel=0&amp;controls=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
11. *Optional* **EMAILS**: If applicable, edit the confirmation and reminder emails under the email setting tab.
    * Make sure the registration confirmation email and the reminder emails are set to send from Zoom. There is a longer term plan to send confirmation emails from Marketo, but until integration are fully set up to do so, we will continue to send from Zoom to ensure that the correct unique link is sent to registrants.
    * There is limited editing capabilities within Zoom. In the confirmation email you can add a snippet of text after the templatized body text and the footer of the email can be edited. In the reminder email, only the footer can be edited.
12. *Optional* **HEADER IMAGE**: If applicable, click on branding and update the header.
13. *Optional* **POLLING**: If applicable, add polling questions to the webcast by following the instructions in the video below. Note there is a character limit on poll answer options of 40 characters.
14. **WATCH ATTENDEE MAX**: In advance of the webcast going live, if you notice that the number of attendees may go over our current max [listed here](/handbook/marketing/virtual-events/#zoom-capabilities) for Zoom Webcast, please open an [access request](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues) for IT Ops, as [IT Ops owns the operations of Zoom](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml).

**Adding poll questions to a webcast**
<iframe width="560" height="315" src="https://www.youtube.com/embed/QIrRcUIYEwo?rel=0&amp;controls=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### Step 2: Set up the webcast in Marketo/SFDC, and integrate to Zoom {#zoom-mkto-integrate}

<!-- DO NOT CHANGE THIS ANCHOR -->

#### Create program in Marketo - Zoom {#zoom-marketo-program}

<!-- DO NOT CHANGE THIS ANCHOR -->

1. Create the webcast program in Marketo by navigating to either the [Webcast program template](https://app-ab13.marketo.com/#ME5512A1) or the correct template from [Workshop program templates folder](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/MF5975A1)
1. Right-click the appropriate template, and select "clone"
1. Next to "Clone To", choose `A campaign folder`.
1. (non-technical demos) For "Name", add the MKTO program name (this is also the SFDC campaign name). Use the following format: `YYYYMMDD_{Webcast Title}_[Region - only if applicable]`. For example, `20170418_MovingToGit`.
1. (technical demos)  For "Name", add the MKTO program name (this is also the SFDC campaign name). Use the following format: `YYYYMMDD_{gtmcampaign}_{Webcast Title}_techdemo_[Region - only if applicable]`. For example, `20220324_devopsgtm_BuildingMLApps_techdemo_APAC`.
1. Under "Folder", choose the appropriate quarter within the  `GitLab-Hosted Campaign Webcasts` or `GitLab-Hosted Workshops` folders.
1. Click "Create" (note - you will create the SFDC campaign from Marketo in the next step!)

#### Connect the Marketo program to Zoom via launchpoint integration {#zoom-marketo-connect}

<!-- DO NOT CHANGE THIS ANCHOR -->

1. In the Marketo program Summary view, you will see `Event Partner:` with a link that says "not set".
1. Click on "not set"
1. In the Event Partner drop down, select `Zoom` and in the Login drop down, select `Zoom Webcast`.
1. In the Event drop-down, select the name of the Zoom webcast you set up in [Step 1: Configure Zoom](/handbook/marketing/virtual-events/webcasts/#step-1-configure-zoom)

#### Create campaign in Salesforce - Zoom {#zoom-sfdc-campaign}

<!-- DO NOT CHANGE THIS ANCHOR -->

1. In the Marketo program Summary view, you will see `Salesforce Campaign Sync:` with a link that says "not set".
1. Click on "not set"
1. Where it says "None", click the drop-down and choose "Create New"
1. The Marketo program name will auto-fill for the name (for consistency across both systems)
1. In the "Description", add a link to the epic
1. Click "Save"
1. NOW you will navigate to the Campaign in SFDC to do a quick review - [Shortcut to Campaigns](https://gitlab.my.salesforce.com/701/o)
1. Click into the SFDC campaign
1. Change the campaign owner to the webcast DRI
1. Change the status to `in progress`
1. Edit the Budgeted Cost (required) to cost of webcast, or "1" if there is no cost associated
1. Click save

### Step 3.A: Update Marketo Tokens {#zoom-marketo-tokens}

<!-- DO NOT CHANGE THIS ANCHOR -->

Buckle up! There are a lot of tokens, but for good reason. This is an **advanced practice** and **best practice** within Marketo templates to increase efficiency and speed. Updating these at the top level of the program allows them to cascade through the landing page, emails, automation, and alerts creating a significantly more efficient process of launching new webcasts.

* `{{my.apiKey}}` - apiKey from Zoom
* `{{my.apiSecret}}` - apiSecret from Zoom
* `{{my.bullet1}}` - bullet copy with approved [character limits](https://docs.google.com/spreadsheets/d/1dKVIZGbbOLoR5BdCqXqCQ40qJlQNif9waTiHc8yWggQ/edit#gid=43971442)
* `{{my.bullet2}}` - bullet copy with approved [character limits](https://docs.google.com/spreadsheets/d/1dKVIZGbbOLoR5BdCqXqCQ40qJlQNif9waTiHc8yWggQ/edit#gid=43971442)
* `{{my.bullet3}}` - bullet copy with approved [character limits](https://docs.google.com/spreadsheets/d/1dKVIZGbbOLoR5BdCqXqCQ40qJlQNif9waTiHc8yWggQ/edit#gid=43971442)
* `{{my.bullet4}}` - bullet copy with approved [character limits](https://docs.google.com/spreadsheets/d/1dKVIZGbbOLoR5BdCqXqCQ40qJlQNif9waTiHc8yWggQ/edit#gid=43971442)
* `{{my.emailConfirmationButtonCopy}}`  - copy for the email confirmation (when on demand), leave as `Watch now`
* `{{my.formButtonCopy}}` - copy for the form button, leave as `Register now` (when switching to on-demand, this will change to `Watch now`)
* `{{my.formHeader}}` - copy for header of form, leave as `Save your spot today!` (when switching to on-demand, this will change to `View the webcast today!`)
* `{{my.heroImage}}` - image to display above landing page form ([options in Marketo here](https://app-ab13.marketo.com/#FI0A1ZN9784))
* `{{my.introParagraph}}` - intro paragraph to be used in landing page and nurture email, with approved [character limits](https://docs.google.com/spreadsheets/d/1dKVIZGbbOLoR5BdCqXqCQ40qJlQNif9waTiHc8yWggQ/edit#gid=43971442)
* `{{my.mpm owner email address}}` - not used in automation, but helpful to know who to go to about setup
* `{{my.ondemandUrl}}` - skip updating in initial registration page setup (update during on-demand switch), Pathfactory link WITHOUT the `https://` NOR the email tracking part (`lb_email=`)
  * Example of correct link to include: `learn.gitlab.com/gartner-voc-aro/gartner-voc-aro` - the code in the Marketo template assets will create the URL `https://learn.gitlab.com/gartner-voc-aro/gartner-voc-aro?lb_email={{lead.email address}}&{{my.utm}}`
  * Note that both parts of this url include custom URL slugs which should be incorporated into all pathfactory links for simplicity of tracking paramaeters
* `{{my.socialImage}}` - image that would be picked up in social sharing, slack, etc. preview when the URL is shared, leave the default (GitLab logo) unless presented with webcast specific image. If needed, create a custom image by using a Canva template and upload on Marketo Design studio. Then link it in this token. Remember to first update this token, before adding URLs for the speaker image tokens. If this happens the other way around, the speaker image might be picked for preview instead of the social image.
* `{{my.speaker1Company}}` token with speaker 1's company name
* `{{my.speaker1ImageURL}}` token with speaker 1's image url in marketo design studio
* `{{my.speaker1JobTitle}}` token with speaker 1's job title
* `{{my.speaker1Name}}` token with speaker 1's full name
* REPEAT this for speaker 2 and 3. If there are more or less speakers, follow the instructions below at the end of the general webcast setup.
* `{{my.utm}}` - UTM to track traffic to the proper campaign in reporting dashboards (append integrated campaign utm or program name, if webcast is not part of an integrated campaign, to the utm campaign token)
* `{{my.valueStatement}}` token with the short value statement on what the viewer gains from the webcast, this ties into the follow up emails and must meet the max/min requirements of the [character limit checker](https://docs.google.com/spreadsheets/d/1dKVIZGbbOLoR5BdCqXqCQ40qJlQNif9waTiHc8yWggQ/edit#gid=1471341556)
* `{{my.webcastDate}}` - the webcast LIVE date.
* `{{my.webcastDescription}}` - 2-3 sentences with approved character limits, this will show up in page previews on social and be used in YouTube and Pathfactory description.
* `{{my.webcastSubtitle}}` token with subtitle for the webcast.
* `{{my.webcastTime}}` token with the webcast time in local timezone/UTC timezone.
* `{{my.webcastTitle}}` token with the webcast title.

### Step 3.B: Turn on smart campaigns in Marketo {#zoom-marketo-smart-campaigns}

<!-- DO NOT CHANGE THIS ANCHOR -->

* Activate the `00 Interesting Moments` campaign.
* Activate the `01a Registration Flow (single timeslot)` smart campaign.

### Step 3.C: Create the landing page {#zoom-marketo-lp}

<!-- DO NOT CHANGE THIS ANCHOR -->

* When you cloned the webcast template, and update the Marketo tokens, your landing page is almost ready to go!
  * Under "Assets" right-click on `Registration Page` and hover over `URL Tools` > `Edit URL Settings`
  * Use the format `webcast-MonthDD-topic-region` (do not include region if it is global. You can also remove the date if the event will be on-demand for more than a year) - ex. `webcast-Oct05-mastering-cicd` or `webcast-mastering-cicd-italian`
* Complete the same steps for the `Thank You Page`
  * Use the format `webcast-MonthDD-topic-thank-you` (or `webcast-MonthDD-topic-region-thank-you` if region is relevant) - ex. `webcast-Oct05-mastering-cicd-thank-you` or `webcast-mastering-cicd-italian-thank-you`

#### Adjusting number of speakers in Marketo landing page {#zoom-adjust-speakers}

<!-- DO NOT CHANGE THIS ANCHOR -->

**Less Speakers**
The speaker module is controlled in the Marketo landing page module. The template is initially set up to support three speakers (note: this is supported in both the My Tokens and the landing page template). If there are less speakers, follow the instructions below:

1. Right click on the Registration Landing Page and click `Edit Draft`
2. Double click on the `Speaker` section
3. Click `HTML` on the toolbar
4. Remove the code below for each speaker you need to remove

```html
<div><br /></div>
<ul>
<li>{{my.speaker3ImageURL}}</li>
<li>{{my.speaker3Name}}</li>
<li>{{my.speaker3JobTitle}}</li>
<li>{{my.speaker3Company}}</li>
</ul>
```

**Less Speakers**
The speaker module is controlled in the Marketo landing page module. The template is initially set up to support three speakers (note: this is supported in both the My Tokens and the landing page template). If there are less speakers, follow the instructions below:

1. Right click on the Registration Landing Page and click `Edit Draft`
2. Double click on the `Speaker` section
3. Click `HTML` on the toolbar
4. Remove the code below for each speaker you need to remove

```html
<div><br /></div>
<ul>
<li>{{my.speaker3ImageURL}}</li>
<li>{{my.speaker3Name}}</li>
<li>{{my.speaker3JobTitle}}</li>
<li>{{my.speaker3Company}}</li>
</ul>
```

If additional assistance is required, please comment in the [#marketing_programs slack](https://gitlab.slack.com/archives/CCWUCP4MS) for assistance if needed.

#### Multiple timeslot webcast - Zoom {#zoom-multiple-timeslots}

<!-- DO NOT CHANGE THIS ANCHOR -->

:exclamation: **Note from @aoetama: let's see if we can simplify and remove the "multiple timeslot webcast" section so that there is just instruction on updating the form (or create a new program template in Marketo)**

Note: These instructions are for a single webcast with multiple timeslots and the person can only register for one time. If you would like instructions for a single landing page for a webcast series of different topics, see `Scheduling a multi-webcast series - Single landing page` below.

The Marketo and Zoom launchpoint integration does not currently support recurring webinars. You must set up a unique Marketo program and unique Zoom webinar program for each session. Despite this limitation, the set up below allows you to streamline the registration process for our target audience by setting up a single landing page with forms configured for multiple date/time options (step 7) to route registrations to the appropriate webcast programs in Marketo/Zoom.

1. In Marketo to customize the multi-timeslot webcast form.

   * Go to the design studio and select `FORM 1419: Webcast_MultipleTimeSlots`.
   * In `Choose preferred time` field, click `Values`>`Advanced Editor` .
   * Specify the webcast date/time options and their subsequent unique server values. The server values will be stored in the `Event Date Code` field and used to add registrants to the appropriate Marketo programs you will create in steps 2-6 below.

   **`Repeat steps 2 - 7 for each webcast date/time slots:`**

2. Create the webcast programs in Marketo by cloning the [Webcast program template](https://app-ab13.marketo.com/#ME5512A1) for each date/time option.
    * Select clone to `A campaign folder`.
    * Title the webcast in the following format: YYYYMMDD_{Webcast Title}_[Region - only if applicable]. For example, 20170418_MovingToGit.
    * Save to the appropriate quarter folder within the `GitLab Webcasts` folder. Tip: you may want to create a new folder within the quarter's folder to group all the recurring webcasts in 1 place.
    * Click salesforce campaign sync and select create new to create campaign in SFDC. Make sure to put the landing page url and also the link to the epic in the description.

3. Connect the Marketo program to Zoom via Launchpoint integration
   * In the Marketo program, click `Event Partner`.
   * In the Event Partner drop down, select `Zoom` and in the Login drop down, select `Zoom Webcast`.
   * In the Event drop-down, select the name of the corresponding Zoom webcast you set up in step 1.

4. Update `My Tokens` at the webcast program level.
   * Update the `{{my.email header alt}}` token with the webcast title.
   * Update the `{{my.email header image url}}` with the image url in marketo design studio.
   * Update the `{{my.landingPageUrl}}` token with the webcast landing page url.
   * Update the `{{my.utm}}` token by appending the integrated campaign utm or Marketo program name (if webcast is not part of an integrated campaign) to the utm campaign token.
   * Skip updating the `{{my.ondemandUrl}}` token for now (until the LIVE webcast has been completed).
   * Update the `{{my.webcastDate}}` token with the webcast LIVE date.
   * Update the `{{my.webcastTime}}` token with the webcast time in local timezone/UTC timezone.
   * Update the `{{my.webcastTitle}}` token with the webcast title.

5. Configure the webcast follow up emails.

   * Click the `Assets` folder nested within your webcast program
   * Update `Outbound -attendees` and `Outbound -no shows` emails with relevant follow up copies relevant to the webcast.
   * Approve copy and send samples to the requestor, and the presenter (if different from requestor).

6. Turn on smart campaigns in Marketo.

   * Activate the `Interesting Moments` campaign.
   * In the `01b Registration Flow (Multi-timeslot)` smart campaign, modify the referrer link with the webcast landing page url without the https (e.g: `about.gitlab.com/webcast/securing-serverless/`). Add the appropriate `Event Date Code(s)` based on the unique server values outlined in step 1. Activate the smart campaign.

#### Scheduling a multi-webcast series - Single landing page - Zoom {#zoom-webcast-series}

<!-- DO NOT CHANGE THIS ANCHOR -->

Note: These instructions are for a multiple webcast series using a single landing page (supporting registration for multiple webcasts with one form submission). If you would like instructions for a single webcast with multiple timeslots and the person can only register for one time, see `Multiple time-slot webcast - Zoom` above.

The Marketo and Zoom launchpoint integration does not currently support multiple webinars. You must set up a unique Marketo program and unique Zoom webinar program for each session. Despite this limitation, the set up below allows you to streamline the registration process for our target audience by setting up a single landing page with forms configured to allow registering for multiple webcasts at one time to route registrations to the appropriate webcast programs in Marketo/Zoom.*

**`Repeat steps 1 - 5 for each webcast in the series:`**
If you have 3 webcasts, you will have 3 Zoom webcasts and 3 Marketo programs. Tip: you should create a new folder within the quarter's folder to group all the webcasts in 1 place.

1. Complete Steps 1 and 2 above (`Configure Zoom` and `Set up the webcast in Marketo/SFDC, and integrate to Zoom`), just as you would for a single webcast.

2. Complete Step 3.A above (Update Marketo Tokens). You will not have the landing page yet, so you will need to return to this token after set-up is complete.

3. Activate the `Interesting Moments` Smart Campaign.

4. In the `01a Registration Flow (single time-slot)` smart campaign, modify the Smart List and Flow steps.
   * Smart List: delete the `Fills out form` trigger. From the sidebar, select the `Program Status is Changed` trigger. Program: is `Enter the webcast program name`. Add a constraint for `New Status`. New Status is `Webcast > Registered`.
   * Flow: delete `Step 1: Change Program Status`
   * Activate campaign.

5. Configure the webcast follow up emails.

   * Click the `Assets` folder nested within your webcast program
   * Update `Outbound -attendees` and `Outbound -no shows` emails with relevant follow up copies relevant to the webcast.
   * Approve copy and send samples to the requestor, and the presenter (if different from requestor).
   **Set-up multi-webcast processing**
   This is considered a complex set-up. It is recommended that you engage Marketing Ops to assist in the set-up, or at a minimum check the final set-up before you go live.

6. Clone [JPUserCaseStudySeries](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/ME9100A1). Name the new program according to your webcast series. :exclamation: Note for MOps - We need a new program template to clone

7. Complete the Marketo Tokens for the series. This information will be used to create the landing page. Token details can be found in section 3.A above.

8. Create static lists
   * From the program summary page, select `New`, then `New Local Asset`
   * Select `List`
   * Name the List "Registered for [name of first webcast]"
   * Drag and drop the list into the Lists folder
   * Repeat process until you have a static list for all webcasts in the series

9. Update the form name and selection options.
   * In the `Assets` folder, click on FORM 3111. When you cloned the program, the form number changed. You can find the new form number by looking in the URL: https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/FO**3111**A1LA1. Update the form name to `FORM [enter number here]: Name of Series`. If you are unsure of the form number, you can click "Preview Form" and find the number in the URL here: https://na-ab13.marketodesigner.com/m?explictHostname=app-ab13.marketo.com#FOP**3111**
   * [Open an issue](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issue%5Bassignee_id%5D=&issue%5Bmilestone_id%5D=#) with Marketing Ops to modify the form selections for you. You will need to provide a short name for the webcast to use in the form that includes the date. For example: Oct. 14, 2021-Agile Webcast, Oct. 21, 2021-Security Webcast. The short name is required due to space contraints in the form selection.

10. Create the landing page

    * When you cloned the webcast template, and update the Marketo tokens, your landing page is almost ready to go!
      * Under "Assets" right-click on `Registration Page` and hover over `URL Tools` > `Edit URL Settings`
      * Use the format `webcast-topic` (or `webcast-topic-region` if region is relevant) - ex. `webcast-mastering-cicd` or `webcast-mastering-cicd-italian`
    * Complete the same steps for the `Thank You Page`
      * Use the format `webcast-topic-thank-you` (or `webcast-topic-region-thank-you` if region is relevant) - ex. `webcast-mastering-cicd-thank-you` or `webcast-mastering-cicd-italian-thank-you`

11. Update the `program distribution` campaign

    * Smart List: This should have the `Fills out Form` trigger, with Form Name is [name of the form in the program]. This is the form you updated the name for earlier.
    * Flow: Important: The programs need to be listed in the same order provided to MOps for the form. The first webcast will coorespond to number 1 for process, second will be number 2, etc.
      * 1 - Change Program Status - Update the `Program` to the program for your first webinar.
      * 2 - Change Program Status - Update the `Program` to the program for your second webinar.
      * 3 - Change Program Status - Update the `Program` to the program for your third webinar. (If you only have two webcasts, delete this step)
      * 4 - Change `List Name` to the List you created for the first webinar.
      * 5 - Change `List Name` to the List you created for the second webinar.
      * 6 - Change the `List Name` to the List you created for the third webinar. (If you only have two webcasts, delete this step)
    * Schedule: Activate the campaign

### Webcast invitation - Zoom {#zoom-webcast-invites}

<!-- DO NOT CHANGE THIS ANCHOR -->

:exclamation: **Note from @aoetama: we are working on further templatizing these invitations so that copy changes are not needed and tokens take care of these emails.** ([issue](https://gitlab.com/gitlab-com/marketing/digital-marketing-programs/-/issues/3422))

1. Update emails `invitation 1 - 2 weeks prior`,  `invitation 2 - 1 week prior` , and if needed `invitation 3 - Day before` with relevant copies related to the webcast. *Note: We normally use the same copy for all 3 emails and simply tweaked the templated subject lines to sound more like "Reminders".*
2. Approve copy and send samples to the requestor, and the presenter (if different from requestor).
3. Go to the List folder and edit the `Target List` smart list and input the names of past similar programs and applicable program statuses to the `Member of program` filter. This will make sure people that have attended programs with similar topics in the past are included in the invite.
4. Once you get approval on the sample email copy, schedule the email programs outlined in step 1.

### Step 4: Add the webcast to the /events page {#zoom-add-events-page}

<!-- DO NOT CHANGE THIS ANCHOR -->

* To add the webcast to the /events page follow this [step by step guide](/handbook/marketing/events/#how-to-add-events-to-aboutgitlabcomevents).

### Step 5: Test your set up {#zoom-testing}

<!-- DO NOT CHANGE THIS ANCHOR -->

1. Submit a test lead using your GitLab email on the LIVE landing page to make sure the registration is tracked appropriately in the Marketo program and you get a confirmation email from zoom.

### After the LIVE webcast - Zoom {#zoom-after-webcast}

<!-- DO NOT CHANGE THIS ANCHOR -->

#### Converting the webcast to an On-Demand gated asset - Zoom {#zoom-on-demand-switch}

<!-- DO NOT CHANGE THIS ANCHOR -->

**Please Note: Workshops are not converted to on-demand assets.**

**🤩 NEW! In Marketo:**

1. **YouTube**: Upload the recording to our main GitLab channel

   * Fill in the title with the webcast title matching the Marketo token (`{{my.webcastTitle}}`)
   * Fill in the description with the short description matching the Marketo tokens (`{{my.contentDescription}}`)
   * Make sure the video is set as `Unlisted` so only people with the URL to the video can find it
   * In YouTube Studio, navigate to the bottom of the page to expand the `Show More` option and check the box for `allow embedding`

1. **YouTube**: Once the recording has been uploaded, copy the video link on the right
1. **Pathfactory**: Login to PathFactory and add the copied youtube link to Pathfactory as new content by following the instructions outlined [here](/handbook/marketing/marketing-operations/pathfactory/#issue-templates).
1. **Marketo**: Navigate to the webcast program and update the following My Tokens

   * Update the `formButtonCopy` token to be `Watch now`
   * Update the `formHeaderCopy` token to be `Watch the webcast today`
   * Update the `ondemandUrl` token with the Pathfactory track link
     * This URL should *not* contain `https://` (it should begin with `learn.gitlab.com/`)
     * This URL should *not* contain any `?` question marks (if it does, you did not update the custom URL slug) - [WATCH THE EXPLAINER VIDEO](https://www.youtube.com/watch?v=VHgR33cNeJg)
     * This URL should *not* contain the Pathfactory tracking parameter `lb_email=` (this is already incorporated into all assets of the Marketo program template)

1. **Marketo**: In the Marketo program, right click on the "Registration Page" and choose `Create Draft`

   * On the right side rail, under "Elements" right click on the "Form Custom" element and choose `Edit`
   * The form should currently be set to the Webcast form (`FORM 1592: webcast` or relevant localized form) - you will change this to be `FORM 2076: On-demand Webcast`
   * Change the "Follow-up Type" to be `Landing Page`
   * Change the "Follow-up Page" to be the thank you page in your program (begin to type in the Marketo program name and select your thank you page)
   * Right-click on "Registration landing page" >> select "Approve draft"

1. **Marketo**: Send sample of the "On-demand Autoresponder" email to your inbox

   * Right click on the email and choose `Send Sample`
   * Under "Person" begin to type in your test lead email address. This will pull in the email address to review that the tracking is working properly in your email.
   * For "Send To:" choose your email address (or type next to the `*` asterisk)

1. **Your Inbox**: Review the sample email in your inbox

   * Check all email copy
   * Click all links and confirm they are not broken
   * Click the `Watch now` CTA and confirm that your email address is in the URL displayed (this happens quickly and disappears in the URL, so watch carefully!)
   * :thumbs-up: If all of the above apply, move on to activating the smart campaigns!

1. **Marketo**: Update the smart campaigns (activate and deactivate)

   * Under "Schedule" on the `01a Registration Flow (single timeslot)` or `01b Registration Flow (Multi-timeslot)` smart campiagn, click `Deactivate` once the webcast has completed.
   * On the `04 Viewed On Demand` smart campaign - Smart List:
       * The second trigger for Fills out Form should be set to Form Name is "Form 2074: PF General". In Referrer contains, enter the Pathfactory asset name slug. For example guide-to-devops.
       * The third trigger for Fills out Form should be set to Form Name is "Pathfactory Webhook". In Referrer contains, enter the Pathfactory asset name slug. For example guide-to-devops.
       * Filter 1 - Filled Out Form should already be set properly. This will be Form Name is `FORM 2076: On-demand Webcast`. Web Page is (the name of your landing page).
       * Filter 2 - Filled Out Form should be set to Form Name is "Form 2074: PF General". In Referrer contains, enter the Pathfactory asset name slug. For example guide-to-devops.
       * Filter 3 - Filled out Form should be set to Form Name is "Pathfactory Webhook". In Referrer contains, enter the Pathfactory asset name slug. For example guide-to-devops. Date of Activity should already be set to in the past 1 hour.
       * Filter 4 - Pathfactory Engagement Time greater than 600 is set as the default. 600 is the Pathfactory view threshold for Webcasts.
       * Advanced filters will be set to 1 or 2 or (3 and 4)
   * Flow: it's all set! For your first few, feel free to review the flows (but they are all using tokens, so it should be ready to go automatically)
   * Under "Schedule" on the `04 Viewed On Demand` smart campaign, click `Activate`.

#### Test your follow up emails and set to send - Zoom {#zoom-follow-up-emails}

<!-- DO NOT CHANGE THIS ANCHOR -->

Note: do not schedule the emails until you have completed the "on demand switch" process (and there is a Pathfactory URL ready to be used)

* **Check ondemandURL Marketo token**
  * This URL should *not* contain `https://` (it should begin with `learn.gitlab.com/`)
  * This URL should *not* contain any `?` question marks (if it does, you did not correctly update the custom URL slug)
  * This URL should *not* contain the Pathfactory tracking parameter `lb_email=` (this is already incorporated into all assets of the Marketo program template)
  * :thumbs-up: If all of the above apply, move on to sending yourself samples!
* **Send samples to your inbox**
  * Right click on "Follow up - attendees" and choose `Send Sample`
  * Under "Person" begin to type in your test lead email address. This will pull in the email address to review that the tracking is working properly in your email.
  * For "Send To:" choose your email address (or type next to the `*` asterisk)
* **Complete the same steps for your "Follow up - no shows" email**
* **Review emails in your inbox**
  * Check all email copy
  * Click all links and confirm they are not broken
  * Click the `Recording of the webcast` and `Watch now` links and confirm that your email address is in the URL displayed (this happens quickly and disappears in the URL, so watch carefully!)
  * :thumbs-up: If all of the above apply, move on to scheduling the smart campaigns!
* **Schedule the smart campaign to send the emails**
  * Schedule the `02 Follow Up - No shows/Attended` smart campaign to be the following business day.

#### Rescheduling a webcast - Zoom {#zoom-reschedule}

<!-- DO NOT CHANGE THIS ANCHOR -->

In the event you need to change the date of your webcast, please follow the steps outlined below.

1. Update the date/time of the webcast on the webcast calendar and resend invites to all panelists.
2. In the Field/Corporate Marketing issue, Field/Corporate DRI to ping the GL Accountant (@gggonzalez) with the old campaign tag to be removed from NetSuite and the new campaign tag to be added in NetSuite.
3. Update the webcast date on the [FY21 webcast planning issue](https://gitlab.com/gitlab-com/marketing/digital-marketing-programs/-/issues/2300).
4. Update the webcast epic and subsequent issues so the new date is reflected on the title and issue due dates are updated based on the new timeline. *Field/Corporate DRI make sure to change the date in the Field/Corporate Marketing issue and adjust date in the Budget Document.*
5. Leave a comment on the epic stating the event has been rescheduled and tag all internal panelists and hosts.
6. If webcast is on the Events Page, [submit MR](/handbook/marketing/events/#how-to-add-events-to-aboutgitlabcomevents) to change the date.
7. Go to marketo, send a webcast reschedule email to all registrants, telling them they will be receiving a new email with the new join link from zoom shortly (this will be covered in step 11). See example reschedule email [here](https://docs.google.com/document/d/1j43mf7Lsq2AXoNwiygGAr_laiFzmokNCfMHi7KNLjuA/edit#bookmark=id.eqjyly5at0fb).
8. Create a new zoom program with the new webcast date/time following the steps outlined in [the section above](/handbook/marketing/virtual-events/webcasts/#step-1-configure-zoom).
9. Create a new marketo program with the new webcast date/time following the steps outlined in [the section above](/handbook/marketing/virtual-events/webcasts/#step-2-set-up-the-webcast-in-marketosfdc-and-integrate-to-webex) minus the create new campaign in SFDC step since we will be syncing to the existing SFDC program in a later step (step 14).
10. Move the landing page from the Marketo program with old webcast date/time to the newly created marketo program with new webcast date/time.
11. Move the registrants from the Marketo program with old webcast date/time to the newly created marketo program with new webcast date/time by running a one time bulk update on the `(Optional: for rescheduled webcast only) Import registrants from old program` smart campaign. Doing this will also re-trigger the confirmation email to existing registrants.
12. Remove the SFDC campaign sync on the Marketo program with old webcast date/time by clicking salesforce campaign sync and selecting `None`.
13. Go to SFDC. change the ISO date in the SFDC Campaign name for the webcast to the new date. Update the campaign start date to 30 days prior to the new date, and the end date to 60 days after the new date.
14. Go back to Marketo. Sync the SFDC campaign to the Marketo program with new webcast date/time by clicking salesforce campaign sync and selecting the name of the SFDC campaign.
15. Delete the Marketo program with the Marketo program with the old webcast date/time.
16. Go to Zoom, delete the Zoom program with the old webcast date/time and make sure to uncheck `send webinar cancellation email to panelists and registrants`.

#### Canceling a webcast - Zoom {#zoom-cancel}

<!-- DO NOT CHANGE THIS ANCHOR -->

In the event you need to cancel your webcast, please follow the steps outlined below.

1. Remove the webcast from the webcast calendar and the [FY21 webcast planning issue](https://gitlab.com/gitlab-com/marketing/digital-marketing-programs/-/issues/2300).
2. Add [Cancelled] to the webcast epic and subsequent issues title then close it out. *Field/Corporate DRI make sure to add [Cancelled] to the Field/Corporate issue title and close out.*
3. Leave a comment on the epic stating the event has been canceled and tag all internal panelists and hosts.
4. Field/Corporate DRI to cancel the line item on the Budget Document.
5. If webcast is on the Events Page, [submit MR](/handbook/marketing/events/#how-to-add-events-to-aboutgitlabcomevents) to remove.
6. Go to the Marketo program, configure and send a webcast cancellation email to all registrants. *To be added: example cancellation email.*
7. In the Marketo program, deactivate all active smart campaigns and append [Cancelled] to the program name.
8. Go to Salesforce, append [Cancelled] to the SFDC campaign name.
9. Go to Zoom, delete the webcast program from Zoom and make sure to uncheck `send webinar cancellation email to panelists and registrants` since this is already covered in step 4.

---
<!-- NOTE: THE REST OF THE DOCUMENTATION IS FOR ON24 ONLY!!! -->

## ON24 Webcasts {#on24}

<!-- DO NOT CHANGE THIS ANCHOR -->

### Quick Links {#0n24-quick-links}

<!-- DO NOT CHANGE THIS ANCHOR -->

* [ON24 Webcast Login Portal](https://wcc.on24.com/webcast/login)
* [ON24 Knowledge Centre](https://on24support.force.com/Support/s/knowledge)

### ON24 Event Types {#on24-types}

<!-- DO NOT CHANGE THIS ANCHOR -->

* **Live Video (Video and audio with screen share):** traditional live webinar with speakers and Q&A.
  * Pre-event registration takes place
  * The event automatically converts to on-demand upon completion
* **ON24 Live Audio (no Screen Share):** multiple presenters can present a live webcast using the telephone. Presenters will dial into the ON24 presenter phone bridge for the live event. Live screen share is not available with this event type.
  * Pre-event registration takes place
  * The event automatically converts to on-demand upon completion
* **Simu-live (written Q&A)**: choose this option if you wish to pre-record entire event and deliver it to a live audience at a designated date and time. **Note**: Simu-lives must be created in advance. No changes can be made two hours before the scheduled live time.
  * Pre-event registration takes place
  * At time of webcast, a recording is played.
  * You can interact with the live audience through written Q&A during playback of the pre-recorded presentation.
  * The event will end immediately after the pre-recorded playback has ended, therefore it is best to do a mock Q&A and inform attendees that any questions will be individually addressed after the webinar, allowing for seamless follow up by SDRs.
  * The event automatically converts to on-demand upon completion
* **Simu-live (with rollover to live Q&A)**: also known as Sim-2-live, provides presenters the opportunity to address comments and questions verbally with a live audience once the pre-recorded presentation is done playing. For this event type select, Simu-live then enable the Rollover to Video and Audio toggle under Main Details.
  * Pre-event registration takes place
  * At time of webcast, a recording is played.
  * You can interact with the live audience through written Q&A during playback of the pre-recorded presentation and at the end of the webcast addressing questions live.
  * The event automatically converts to on-demand upon completion.
* **Recurring Simu-live**: this webcast type provides an efficient option to create one event and run it multiple times for recurring presentations such as daily demos, weekly campaign presentations, etc.  Attendees can choose the date they wish to attend. All registrant and attendee data will roll up into a single report.
* **On Demand**: essentially an on-demand webcast, no interaction with a live audience.
  * No pre-registration

## LIVE webcast registration and tracking - ON24

### Organizing ON24 webcast epics and issues {#on24-epics-issues}

<!-- DO NOT CHANGE THIS ANCHOR -->

* **Confirm Date:** The webcast idea issue (date request issue) must be complete and confirmed before creation of the epic, issues, and workback.
* **Campaign Webcast Epic:** campaign manager creates webcast epic (using code below)
* **Related Issues:** campaign manager creates the issues as designated in the GANTT sheet, and associates to the campaign webcast epic
* **Technical Demo Series** After the epic for a technical demo is created, add it to the appropriate parent epic. This allows us to see all of the related technical demos at a glance. Parent epics can be found [here](https://gitlab.com/groups/gitlab-com/marketing/-/epics/3553) and are denoted with `Top Level Epic` (ex: [FY24 Tech Demo Series] Automated Software Delivery)

[View the webcast workback timeline GANTT here](https://docs.google.com/spreadsheets/d/1A4c2OodEAsOlN4Ek-rBiLlwkdF0AvX5YBiY4mhkZd-M/edit#gid=666473040)

```markdown
<!-- Naming convention: [Webcast Title] - [3-letter Month] [Date], [Year] -->

## [GANTT >>]() - owner to copy from this template: https://docs.google.com/spreadsheets/d/1A4c2OodEAsOlN4Ek-rBiLlwkdF0AvX5YBiY4mhkZd-M/edit#gid=666473040

## [Landing Page >>]() - `to be added when live`

#### :key: Key Details
* **Webcast DRI:**
* **Speaker(s) and Moderator:**
* **Official Webcast Name:**
* **Official Webcast Date:**
* **Sales Segment:** `Large, Mid-Market, or SMB`
* **Lifecycle Stage/Lead Status:** `Raw, Inquiry, MQL, Accepted, Qualifying, Qualified, Nurture`
* **Sales Region:** `AMER, EMEA, APAC`
* **Sales Territory (if specific):**
* **Goal:** `Please be specific on the KPI this is meant to impact. For example, drive MQLs against named account list, increase velocity of MQLs > SAOs, increase velocity of early stage opps to close.`
* [landing page copy]() - `doc to be added by Marketing Programs` ([clone the template here](https://docs.google.com/document/d/1xHnLKPCaXrpEe1ccRh_7-IqgNbAlzQsZVc-wr1W4ng8/edit#))
* [ ] [main salesforce campaign]()
* [ ] [main marketo program]()
* [ ] [ON24 webcast preview link]()

## :books: Issue creation

<details>
<summary>Expand below for checkboxes of issues to be created, use the GANTT to calculate the due dates.</summary>

* [ ] [Program tracking](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=campaigns-program-tracking) issue created
* [ ] [Webcast dry run schedule](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=campaigns-webcast-dryrun-sched) issue created
* [ ] [Landing page and automation](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=campaigns-landing-page) issue created
* [ ] [Invitation and reminder](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=campaigns-email-invitation-reminder-follow-up) issues created
* [ ] Organic social issue created for social media manager
* [ ] [Follow-up email](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=campaigns-email-invitation-reminder-follow-up) issue created
* [ ] [Add to nurture stream](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=campaigns-email-nurture-add) issue created
* [ ] [Host dry run](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=campaigns-webcast-dryrun-host) issue created
* [ ] [Prepare for webcast](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=campaigns-webcast-prep) issue created
* [ ] [On-demand switch issue](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=campaigns-post-webcast) issue created
</details>

/label ~mktg-demandgen ~dg-campaigns ~"Webcast - GitLab Hosted" ~"Webcast" ~"mktg-status::wip"

```

## ON24 Webcast Setup {#on24-setup}

<!-- DO NOT CHANGE THIS ANCHOR -->

### Step 1: Configure ON24 {#configure-on24}

<!-- DO NOT CHANGE THIS ANCHOR -->

*Note: ON24 Elite license is used for all field marketing and campaigns internally hosted webcasts. Therefore, when a webcast is requested please confirm there is not going to be a conflict between the pre-scheduled sessions - both live and dry-run - using that license by checking the [webcast gcal](https://calendar.google.com/calendar/u/0?cid=Y19xdTVqMzRsZ2ZrcmlybmM5aGx1MWRkams0MEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t). Schedule no less than 30min between sessions (before & after) so there is less chance of conflict and allows for a buffer.*

**Setting-up a SEMU-live ON24 Webcast**
<iframe width="560" height="315" src="https://www.youtube.com/embed/TPxiPsTNMzA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Setting-up a LIVE ON24 Webcast**
<iframe width="560" height="315" src="https://www.youtube.com/embed/oJIFE9IKWpg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

1. **LOGIN**: log into [ON24 Webcast Portal](https://wcc.on24.com/webcast/login).
2. **TEMPLATE**: search for a template based on the event type. In the right column under "Actions" select the copy icon to clone a template. When cloning an event, all media files will transfer to the new webcast.
      * Live Event:
         * [Template (A)](https://wcc.on24.com/webcast/update/3812772) - Standard event template - Trial Banner
         * [Template (B)](https://wcc.on24.com/webcast/update/4008047) - Standard event template - Trial Tanuki
      * Simu-Live Event:
         * [Template (A)](https://wcc.on24.com/webcast/update/3831579) - XL Media Player (no slide widget) - Trial Banner
         * [Template (B)](https://wcc.on24.com/webcast/update/4008048) - XL Media Player (no slide widget) - Trial Tanuki
**Note**: all the templates are tagged with Template and that after cloning the cloned program should have that tag removed
3. **KEY FIELDS**: update new program fields: Title, Date, Time, Duration, Timezone. Change event type if needed to Simu-live. Select "Create Event" to save and generate Event ID and Webcast URLs.
4. **TIMEZONE**: select a drop-down timezone option with city/country instead of a generic GMT+ time zone. Generic time zones do not update with time changes, such as Daylight Savings Time.
5. **MEDIA FILE**: Replace Media File with new event PPT in the Overview tab, or by following Presenter's URL and loging in as Producer. You can access this by clicking on the menu in the menu icon in the top right corner and choosing Setup).
    * IMPORTANT! For the Semu-live webcast you'll need to upload and publish your mp4 recording no later then 2 hours before the scheduled start. Please login as producer using the Presenter's URL, click on the Setup at the bottom on the screen and choose Presenter Media, under the Media tab. Upload your video, go back to previous screen and click on Publish button.
6. **PANELISTS**: panelists and presenters will share Presenters Link (can be found in the Event URLs list). By following this link they'll need to submit their name and email address and login as Presenters into ON24 console.
7. *Optional* **EMAILS**: If applicable, edit the confirmation and reminder emails under the email setting tab.
    * Make sure the registration confirmation email and the reminder emails are set to send from ON24.
8. *Optional* **POLLING**: If applicable, add polling questions to the webcast by following the instructions in the video below. Note there is a character limit on poll answer options of 40 characters.
9. **ATTENDEE & PRESENTER MAX**: All live events and experiences are capped by default at 2,500 live attendees and max of 10 presenters.

   **Adding poll questions to a webcast**
   <iframe width="560" height="315" src="https://www.youtube.com/embed/DIo88jv88tA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

10. **ADDING WEBCAST SURVEY**: In the tools manager located in the `ON24 Console` choose `Take Survey` and add it to your event console. You can then set it to appear as post event survey, during the webcast, or both in the `Configuration` settings tab.
    * Note. Although there is no standard survey template built into our templates currently, you can copy/paste from this [standard post-webcast survey](https://docs.google.com/document/d/1kBG_eXRLYRmgqH2DIpapOUbCkOxjSsRc_f6m8nXOxxE/edit) we are using for tech demos.

### Step 2: Set up the webcast in Marketo/SFDC and connect to ON24 {#on24-mkto-setup}

<!-- DO NOT CHANGE THIS ANCHOR -->

#### Create program in Marketo - ON24 {#on24-marketo-program}

<!-- DO NOT CHANGE THIS ANCHOR -->

1. Create the webcast program in Marketo by navigating to the [Templates - ON24](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/MF12119A1) and select between webcast and workshop.
1. Right-click the appropriate template, and select "clone"
1. Next to "Clone To", choose `A campaign folder`.
1. (non-technical demos) For "Name", add the MKTO program name (this is also the SFDC campaign name). Use the following format: `YYYYMMDD_{Webcast Title}_[Region - only if applicable]`. For example, `20170418_MovingToGit`.
1. (technical demos)  For "Name", add the MKTO program name (this is also the SFDC campaign name). Use the following format: `YYYYMMDD_{gtmcampaign}_{Webcast Title}_techdemo_[Region - only if applicable]`. For example, `20220324_devopsgtm_BuildingMLApps_techdemo_APAC`.
1. Under "Folder", choose the appropriate quarter within the  `GitLab-Hosted Campaign Webcasts` or `GitLab-Hosted Workshops` folders.
1. Click "Create" (note - you will create the SFDC campaign from Marketo in the next step!)

#### Create campaign in Salesforce - ON24 {#on24-sfdc-campaign}

<!-- DO NOT CHANGE THIS ANCHOR -->

1. In the Marketo program Summary view, you will see `Salesforce Campaign Sync:` with a link that says "not set".
1. Click on "not set"
1. Where it says "None", click the drop-down and choose "Create New"
1. The Marketo program name will auto-fill for the name (for consistency across both systems)
1. In the "Description", add a link to the epic
1. Click "Save"
1. NOW you will navigate to the Campaign in SFDC to do a quick review - [Shortcut to Campaigns](https://gitlab.my.salesforce.com/701/o)
1. Click into the SFDC campaign
1. Change the campaign owner to the webcast DRI
1. Change the status to `in progress`
1. Edit the Budgeted Cost (required) to cost of webcast, or "1" if there is no cost associated
1. Click save

#### Connecting On24 Web Events to Marketo Programs {#on24-marketo-connect}

<!-- DO NOT CHANGE THIS ANCHOR -->

*After completing the creation of an On24 web event, the next step is to connect the webinar to Marketo. Unlike other tools, the On24 room and Marketo program do not need to be connected via the Event Partner field on the Marketo program. All data transfer is done via the Event ID and smart campaigns.*

1. From the previous event set up, please be sure to have the `Event ID` and `Audience URL` handy.
1. Navigate to the Marketo template folder `Templates - On24`. Located in this folder are program templates Designed with triggers to work with On24's Marketo custom object. Make a copy of the needed program type template in the appropriate folder.
1. Next step will be to connect the Marketo program to the On24 webcast. In the Smart Campaigns folder of the newly cloned program, add the On24 Event ID to the following smart campaigns on the Added to ON24 Attendee trigger filter:
      * `04 On24 Processing - Attended`
      * `04 On24 Processing - Follow Up Requested`
      * `04 On24 Processing - No Show`
      * `04 On24 Processing - On Demand`
1. Next activate the following smart trigger campaigns:
      * `01 Registration Flow (choose single or multi)`
      * `00 Interesting Moments`
      * `01a Registration flow (single timeslot)` or `01b Registration Flow (Multi-timeslot)`
      * `04 On24 Processing - Attended`
      * `04 On24 Processing - Follow Up Requested`
      * `04 On24 Processing - On Demand`. Only activate this smart campaign if it is appropriate for the webinar, such as in the event the webinar will be left available for on-demand viewing.
      * `04 On24 Processing - No Show`. No Show will not be activated as a trigger, but as a batch campaign scheduled to run 6 hours after the event has completed.
1. Before continuing on, check if it seems appropriate to set any of the local assets to expire. Appropriate items to set an expiration would be, for example, smart campaigns like the `04 On24 Processing - Attended` campaign, which is no longer needed after the event ends.
1. Update the program tokens as needed within the program. All email assets and landing pages are token dependent.
1. **Important tokens to review**:
      * `{{my.on24URL}}`: This token needs to be updated as upon registration the registrant is sent an automatic email with the Audience URL attached to this token.
      * `{{my.key}}`: This token needs to have the correct alphanumerical value taken from the Audience URL for the registration confirmation email to trigger.
      * `{{my.webcastDate}}`, `{{my.webcastTitle}}` etc. are standard to update.
      * `{{my.On24password}}`: Update this with the webinar password. If no password was set up in the console, completely remove token from registration confirmation email as it is not necessary.
1. Please note, the `Registration Flow` smart campaigns will send out the Audience URL for the event and have tokens arranged to share event passwords.
1. Operational emails such as `Registration Confirmation` and `Reminder emails` will be sent from ON24, make sure these are activated in the ON24 program (all template already have them activated).

### Step 3.A: Update all other standard Marketo Tokens {#on24-marketo-tokens}

<!-- DO NOT CHANGE THIS ANCHOR -->

* `{{my.bullet1}}`-`{{my.bullet4}}`- bullet copy with approved [character limits](https://docs.google.com/spreadsheets/d/1dKVIZGbbOLoR5BdCqXqCQ40qJlQNif9waTiHc8yWggQ/edit#gid=43971442)
* `{{my.emailConfirmationButtonCopy}}`  - copy for the email confirmation (when on demand), leave as `Watch now`
* `{{my.formButtonCopy}}` - copy for the form button, leave as `Register now` (when switching to on-demand, this will change to `Watch now`)
* `{{my.formHeader}}` - copy for header of form, leave as `Save your spot today!` (when switching to on-demand, this will change to `View the webcast today!`)
* `{{my.introParagraph}}` - intro paragraph to be used in landing page and nurture email, with approved [character limits](https://docs.google.com/spreadsheets/d/1dKVIZGbbOLoR5BdCqXqCQ40qJlQNif9waTiHc8yWggQ/edit#gid=43971442)
* `{{my.ondemandUrl}}` - skip updating in initial registration page setup (update during on-demand switch), Pathfactory link WITHOUT the `https://` NOR the email tracking part (`lb_email=`)
  * Example of correct link to include: `learn.gitlab.com/gartner-voc-aro/gartner-voc-aro` - the code in the Marketo template assets will create the URL `https://learn.gitlab.com/gartner-voc-aro/gartner-voc-aro?lb_email={{lead.email address}}&{{my.utm}}`
  * Note that both parts of this url include custom URL slugs which should be incorporated into all pathfactory links for simplicity of tracking paramaeters
* `{{my.socialImage}}` - image that would be presented in social, slack, etc. preview when the URL is shared, this image is provided by design/social, leave the default unless presented with webcast specific image.
* `{{my.speaker1Company}}` token with speaker 1's company name
* `{{my.speaker1ImageURL}}` token with speaker 1's image url in marketo design studio
* `{{my.speaker1JobTitle}}` token with speaker 1's job title
* `{{my.speaker1Name}}` token with speaker 1's full name
* REPEAT this for speaker 2 and 3. If there are more or less speakers, follow the instructions below at the end of the general webcast setup.
* `{{my.utm}}` - UTM to track traffic to the proper campaign in reporting dashboards (append integrated campaign utm or program name, if webcast is not part of an integrated campaign, to the utm campaign token)
* `{{my.valueStatement}}` token with the short value statement on what the viewer gains from the webcast, this ties into the follow up emails and must meet the max/min requirements of the [character limit checker](https://docs.google.com/spreadsheets/d/1dKVIZGbbOLoR5BdCqXqCQ40qJlQNif9waTiHc8yWggQ/edit#gid=1471341556)
@@ -883,66 +923,27 @@ PUBLISHING
* `{{my.webcastTime}}` token with the webcast time in local timezone/UTC timezone.
* `{{my.webcastTitle}}` token with the webcast title.

### Step 3.B: Create the landing page {#on24-marketo-lp}

<!-- DO NOT CHANGE THIS ANCHOR -->

* When you cloned the webcast template, and updated the Marketo tokens, your landing page is almost ready to go!
  * Under "Assets" right-click on `Registration Page` and hover over `URL Tools` > `Edit URL Settings`
  * Use the format `webcast-topic` (or `webcast-topic-region` if region is relevant) - ex. `webcast-mastering-cicd` or `webcast-mastering-cicd-italian`
* Complete the same steps for the `Thank You Page`
  * Use the format `webcast-topic-thank-you` (or `webcast-topic-region-thank-you` if region is relevant) - ex. `webcast-mastering-cicd-thank-you` or `webcast-mastering-cicd-italian-thank-you`

### Schedule your ON24 practice session (Dry Run) {#on24-practice-session}

<!-- DO NOT CHANGE THIS ANCHOR -->

* Once an event is created, the presenter link becomes active until the live event. It's unnecessary to schedule an additional dry run event.
* Share the Presenter URL (which can be found in your Event URLs list in ON24 anfter event is created) to dry run participants.
      * Roles:
         - Producers have the ability to take the event live and have additional admin functionalities such as media player configuration and building poll questions.
         - Presenters have limited admin abilities and can all advance slides during  the presentation. If screen sharing is part of the presentation, a driver is prompted the first time a user shares their screen. It's best to test this function in advance, especially for users who are required to VPN into their device. Some VPNs will limit this functionality.
         - Q&A: this role is only available for simu-live events; simu-live events will auto-start at the webcast start time, speakers/SMEs can use this role to answer questions via chat.

### Monitoring Simu-live Webcasts {#monitoring-simu-live-webcasts}

<!-- DO NOT CHANGE THIS ANCHOR -->

* Simu-live webcasts are entirely pre-recorded and will play to a live audience at your chosen date and time. While the presentation plays to the live audience, you may have Q&A moderators log in to monitor the event and answer questions in real-time via text using the Q&A tool. Up to 12 people can log in at a time as Q&A Moderators.
* Moderators will use the Present URL to log in and have full access to the Q&A, Team Chat, and Attendee Chat and will be able to listen and watch the webcast in the live interface.
* The webcast will start automatically at the chosen start time. A Simu-Live in Progress message will appear in the top corner of the live interface for your Q&A moderators so they know when the webcast has begun.
* There is no dial-in number or phone bridge for the Q&A moderators while the webinar is live, but they can communicate using the Team Chat. Team Chat messages are not visible to the audience but are captured in the webinar reports.
* The webcast will end automatically after the recorded portion has played out. The event archive will be available a few hours later for your audience to watch on-demand.
* If you wish for the audience console to remain open after the presentation is complete to allow attendees additional time to submit questions or download certificates, consider extending the event by recording extra silence on the last slide so the console will remain open.
      * Note: The Block Attendee option in the Attendee List tool WILL NOT be available during standard Simu-live events.

### Monitoring Sim-2-Live Webcasts {#monitoring-sim-2-live-webcasts}

<!-- DO NOT CHANGE THIS ANCHOR -->

* Sim-2-live webcasts are Simu-live webcasts with the Rollover to Live box checked, providing live time at the end of the recording to address questions. Setup and recording will be the same for both, the differences come when the webcast is playing out live to the audience.
* Sim-2-live webcasts also start automatically at the chosen start time. And after the pre-recorded portion of the webcast plays out, the system will automatically switch to a live webcast.
* While the pre-recorded portion plays to the live audience, Q&A will be text only, but your presenters can address questions from the audience both verbally and via text once the rollover to live occurs.
* Your presenting team will be able to log in for the webcast starting 45 minutes before the set start time, using the Present URL.
* Up to 10 live presenters (a mix of Producers and Presenter roles) can log in at a time.
      * Note: Every Sim-2-live event MUST have at least one presentation team member login as a Producer to stop the broadcast after the live portion is complete.

### Sim-2-Live Webcasts - roles {#sim-2-live-webcasts-roles}

* All three roles (listed below) will be available for Sim-2-live webcasts:
      * Roles:
         - **Producer.** Producers have all the same functionality presenters do, plus the ability to change the webcam layouts in the Media Player and stop the broadcast.
         - **Presenter.** Can speak to the audience during the rollover to the live portion, use the Q&A, Team Chat, Attendee Chat, Whiteboarding Tools, Highlight/Center Engagement Tools, Screen Share, and Pulse Check.
         - **Q&A Moderator.** Can use the Q&A, Team Chat, and Attendee Chat.

### ON24 Webcast Invitations {#0n24-email-invitations}

<!-- DO NOT CHANGE THIS ANCHOR -->

1. Update emails `Invitation 1 - 2 weeks prior`,  `Invitation 2 - 1 week prior` , and if needed `Invitation 3 - Day before` with relevant copies related to the webcast.
   * *Note: We normally use the same copy for all 3 emails and simply tweak the templated subject lines to sound more like "Reminders".*
2. Approve copy and send samples to the requester, and the presenter (if different from requester).
3. Go to the `List` folder and edit the `Target List` smart list and input the names of past similar programs and applicable program statuses to the `Member of program` filter. This will make sure people that have attended programs with similar topics in the past are included in the invite.
   * Note: We may uplevel this logic to include webcast invitations within active nurture programs to limit the overhead for invitation emails.

### Add the webcast to the /events/ and /resources/ pages {#on24-webpage-listings}

<!-- DO NOT CHANGE THIS ANCHOR -->

* To add the webcast to the /events/ page follow this [step by step guide](/handbook/marketing/events/#how-to-add-events-to-aboutgitlabcomevents).
* To add the webcast to the /resources/ page follow this [step by step guide](/https://handbook.gitlab.com/handbook/marketing/demand-generation/campaigns/content-in-campaigns/#add-to-resources-page).

### ON24 Webcast Testings / QA {#on24-webcast-testing}

<!-- DO NOT CHANGE THIS ANCHOR -->

Submit a test lead using your GitLab email on the LIVE landing page to make sure the registration is tracked appropriately in the Marketo program and you get a confirmation email from ON24.

**Doing a QA for your ON24 Webcast Registration Page**
<iframe width="560" height="315" src="https://www.youtube.com/embed/3k4FUe6_LXw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Switching ON24 Webcasts to On-Demand {#on24-ondemand-switch}

<!-- DO NOT CHANGE THIS ANCHOR -->

ON24 will automatically convert the video to on-demand in the ON24 platform. The steps below allow us to further leverage the webcast in Pathfactory. If you are going to drive to On24 directly for On-demand viewing (such as for large corporate events), skip to the instructions below starting at `Using On24 for On-Demand Viewing`.

1. **Vimeo**: vimeo provides an ads free user expierence, therefore should be primary video platform used for on-demand recording uploads. To request an upload, open [an issue](https://gitlab.com/gitlab-com/marketing/inbound-marketing/global-content/digital-production/-/issues/new?issuable_template=upload-request) with Digital Production Team.
   * Instructions on uploading Vimeo videos to Pathfactory can be found [here](/handbook/marketing/marketing-operations/pathfactory/content-library/#vimeo-links)
1. **YouTube**: upload the recording to our main GitLab channel:
   * Fill in the title with the webcast title matching the Marketo token (`{{my.webcastTitle}}`)
   * Fill in the description with the short description matching the Marketo tokens (`{{my.contentDescription}}`)
   * Make sure the video is set as `Unlisted` so only people with the URL to the video can find it
1. **YouTube**: Once the recording has been uploaded, copy the video link on the right
1. **Pathfactory**: Login to PathFactory and add the YouTube or Vimeo link to Pathfactory as new content by following the instructions outlined [here](/handbook/marketing/marketing-operations/pathfactory).

#### Converting the webcast to an On-Demand gated asset - On24 {#zoom-on-demand-switch}

<!-- DO NOT CHANGE THIS ANCHOR -->

**🤩 NEW! In Marketo:**

1. **Vimeo**: Upload the recording to Vimeo

   * Fill in the title with the webcast title matching the Marketo token (`{{my.webcastTitle}}`)
   * Fill in the description with the short description matching the Marketo tokens (`{{my.contentDescription}}`)

1. **Vimeo**: Once the recording has been uploaded, copy the video embed link in Vimeo. Instructions on adjusting the privacy settings of your video to embed in specific domains like Pathfactory can be found [here](/handbook/marketing/marketing-operations/pathfactory/content-library/#vimeo-links)
1. **Pathfactory**: Login to PathFactory and add the copied Vimeo link to Pathfactory as new content by following the instructions outlined [here](https://support.pathfactory.com/kb/add-content/).
1. **Marketo**: Navigate to the webcast program and update the following My Tokens

   * Update the `formButtonCopy` token to be `Watch now`
   * Update the `formHeaderCopy` token to be `Watch the webcast today`
   * Update the `ondemandUrl` token with the Pathfactory link
     * This URL should *not* contain `https://` (it should begin with `learn.gitlab.com/`)
     * This URL should *not* contain any `?` question marks (if it does, you did not update the custom URL slug) - [WATCH THE EXPLAINER VIDEO](https://www.youtube.com/watch?v=VHgR33cNeJg)
     * This URL should *not* contain the Pathfactory tracking parameter `lb_email=` (this is already incorporated into all assets of the Marketo program template)

1. **Marketo**: In the Marketo program, right click on the "Registration Page" and choose `Edit Draft`

   * On the right side rail, under "Elements" right click on the "Form Custom" element and choose `Edit`
   * The form should currently be set to the Webcast form (`FORM 1592: webcast` or relevant localized form) - you will change this to be `FORM 2076: On-demand Webcast`
   * Change the "Follow-up Type" to be `Landing Page`
   * Change the "Follow-up Page" to be the thank you page in your program (begin to type in the Marketo program name and select your thank you page)

1. **Marketo**: Send sample of the "On-demand Autoresponder" email to your inbox

   * Right click on the email and choose `Send Sample`
   * Expand advanced settings, under "Sample person for tokens" begin to type in your test lead email address. This will pull in the email address to review that the tracking is working properly in your email.
   * For "Send To:" choose your email address (or type next to the `*` asterisk)

1. **Your Inbox**: Review the sample email in your inbox

   * Check all email copy
   * Click all links and confirm they are not broken
   * Click the `Watch now` CTA and confirm that your email address is in the URL displayed (this happens quickly and disappears in the URL, so watch carefully!)
   * :thumbs-up: If all of the above apply, move on to activating the smart campaigns!

1. **Marketo**: Update the smart campaigns (activate and deactivate)
   * Under "Schedule" on the `01a Registration Flow (single timeslot)` smart campiagn, click `Deactivate` once the webcast has completed.
   * On the `04 On24 Processing - On Demand - On24` smart campaign - Smart List, add your On24 `eventid`. Flow: it's all set! For your first few, feel free to review the flows (but they are all using tokens, so it should be ready to go automatically). Go to schedule and click `Activate`.
   * On the `04 On24 Processing - On Demand - Pathfactory` smart campaign - Smart List:
       * The second trigger for Fills out Form should be set to Form Name is "Form 2074: PF General". In Referrer contains, enter the Pathfactory asset name slug. For example guide-to-devops.
       * The third trigger for Fills out Form should be set to Form Name is "Pathfactory Webhook". In Referrer contains, enter the Pathfactory asset name slug. For example guide-to-devops.
       * Filter 1 - Filled Out Form should already be set properly. This will be Form Name is `FORM 2076: On-demand Webcast`. Web Page is (the name of your landing page).
       * Filter 2 - Filled Out Form should be set to Form Name is "Form 2074: PF General". In Referrer contains, enter the Pathfactory asset name slug. For example guide-to-devops.
       * Filter 3 - Filled out Form should be set to Form Name is "Pathfactory Webhook". In Referrer contains, enter the Pathfactory asset name slug. For example guide-to-devops. Date of Activity should already be set to in the past 1 hour.
       * Filter 4 - Pathfactory Engagement Time greater than 600 is set as the default. 600 is the Pathfactory view threshold for Webcasts.
       * Advanced filters will be set to 1 or 2 or (3 and 4)
   * Flow: it's all set! For your first few, feel free to review the flows (but they are all using tokens, so it should be ready to go automatically)
   * Under "Schedule" on the `04 On24 Processing - On Demand - Pathfactory` smart campaign, click `Activate`.

### Using On24 for On-Demand Viewing - Switching to On-Demand {#on24-using-on24-on-demand-switch}

<!-- DO NOT CHANGE THIS ANCHOR -->

In most cases, the landing pages for these events are managed by DEX. These instructions assume you are using the same form and the LP is managed by DEX, not in Marketo.

1. **Marketo**: Navigate to the webcast program and update the following My Tokens

   * Update the `ondemandUrl` token with the On24 audience URL
     * This URL should *not* contain `https://`
     * This URL should *not* contain any `?` question marks (if it does, you did not update the custom URL slug)

1. **Marketo**: Modify the on-demand autoresponder email

   * Confirm that the URL to view the on-demand webcast is `https://{{my.ondemandUrl}}?{{my.utm}}`
   * Make any changes to the content that you need.
   * Since you are driving to On24, you can use language such as "If you are prompted for an email address, please enter: {{lead.Email Address:default=No email found, please re-register using a valid email address}}". This will provide the user with a quick reference of the email address they used when registering.
   * Update the text version of the email. Then `Approve and Close`.
   * Right click on the email and choose `Send Sample`
   * Expand advanced settings, under "Sample person for tokens" begin to type in your test lead email address. This will pull in the email address to review that the tracking is working properly in your email.
   * For "Send To:" choose your email address (or type next to the `*` asterisk)

1. **Your Inbox**: Review the sample email in your inbox

   * Check all email copy
   * Click all links and confirm they are not broken
   * Click the `Watch now` CTA and view in a private browser to confirm the utms and links work.
   * :thumbs-up: If all of the above apply, move on to activating the smart campaigns!

1. **Marketo**: Update the smart campaigns (activate and deactivate)

   * Clone the `01a Registration Flow (single timeslot)` campaign to a new smart campaign called `04a On-Demand Registration Processing`
   * There will be no change to the Smart List if you are using the form DEX set up on the page originally. If the form is changing, you'll need to update the smart campaign.
   * On the Smart List: Add a filter for `Member of Program` is false. Program is `name of the program you are working on`, Program status is Webcast > Attended. This means that the person needs to fill out the registration form and not all ready be a member of the program with the status of `Attended`.
   * On the Flow: Change Step 1 to Change Program Status - Program is `name of the program you are working on` New status: `Webcast > Attended On-demand`
   * On Schedule: Select `Activate`. Immediately do the next step.
   * Under "Schedule" on the `01a Registration Flow (single timeslot)` smart campiagn, click `Deactivate`.
   * On the `04 On24 Processing - On Demand - On24` smart campaign - Smart List, add your On24 `eventid`. Flow: it's all set! For your first few, feel free to review the flows (but they are all using tokens, so it should be ready to go automatically). Go to schedule and click `Activate`.

### Rescheduling an ON24 webcast {#on24-reschedule}

<!-- DO NOT CHANGE THIS ANCHOR -->

In the event you need to change the date of your webcast, please follow the steps outlined below.

1. Update the date/time of the webcast on the [webcast calendar](https://calendar.google.com/calendar/u/0?cid=Y19xdTVqMzRsZ2ZrcmlybmM5aGx1MWRkams0MEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t) and resend invites to all presenters / panelists.
1. Update the webcast epic so the new date is reflected on the title.
1. Leave a comment on the epic stating the event has been rescheduled and tag all internal panelists and hosts.
1. Update issue due dates based on the new timeline and communicate changes to relevant team members.
1. Update the [events page](https://gitlab.com/gitlab-com/marketing/digital-experience/buyer-experience/-/blob/main/content/events/index.yml) with the new date and time.
1. Update the date in ON24
   * *The system will not automatically update registrants, but you can use the ON24 email notifications to reach out.* Step-by-step instructions available on the [ON24 support page](https://support.on24.com/hc/en-us/articles/21420787306907-Reschedule-or-Cancel-an-Event) - You may need to be logged in to view this documentation.

### Canceling an ON24 Webcast {#on24-cancel}

<!-- DO NOT CHANGE THIS ANCHOR -->

The process is very similar to rescheduling.

1. Remove the webcast from the ON24 calendar.
1. Add [Canceled] to the webcast epic title then close it out.
1. Leave a comment on the epic stating the event has been canceled and tag all internal panelists and hosts.
1. Add [Canceled] to the related issues and close them out.
1. If webcast is on the Events Page and Resources Page, remove in a new MR.
1. Go into ON24 and add [Canceled] to the title since webinars cannot be deleted if they already have registrants.
   * *The system will not automatically update registrants, but you can use the ON24 email notifications to reach out.* Pull up the Email Notifications for the event and set the send date and time.
   * Then click on the Preview/Edit option to edit the email text.
1. In the Marketo program, deactivate all active smart campaigns and append [Canceled] to the program name.
1. Go to Salesforce, append [Canceled] to the SFDC campaign name.

## LIVE webcast registration and tracking - WebEx

### Step 1: Configure WebEx

*Note: The WebEx license can only be used for a single session at a time. This license is used for all field-marketing-run internally hosted webcasts. Therefore, when a webcast is requested please confirm there is not going to be a conflict between the pre-scheduled sessions - both live and dry-run - using that license by checking the [webcast gcal](https://calendar.google.com/calendar?cid=Z2l0bGFiLmNvbV8xcXZlNmc4MWRwOTFyOWhldnRrZmQ5cjA5OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t). Schedule no less than 30min between sessions (before & after) so there is less chance of conflict and allows for a buffer.*
*IMPORTANT: You can only use the WebEx account that is not tied to the SSO to schedule webinars. The account to be used is `wbxmeet7@gitlab.com`, you can find the credentials in the 1Password vault `GitLab Webex Marketing Vault`*
*Note: Registration Confirmation and reminder emails will not be sent automatically from WebEx. Those will have to be sent by Marketo. The registration email is integrated in the `01 Registration Flow` smart campaign. Reminder emails will have to be scheduled and the tokens edited depending on the timeframe desired to send reminders.*

1. **LOGIN**: log into WebEx,  go to the bottom left side and click on `WebEx Events(classic)`. In the left navbar, click on `Schedule an Event`. *It is imperative to use the WebEx classic interface otherwise the integration will not be sucessfull*
   * **Note**: Marketo does not support events created from the new UI (Webex Events (new)). Make sure you are creating in classic.
1. **Event Name**: add the topic as follows "Webcast title - Month DD, YYYY - HH:MM am/pm PT/HH:MM am/pm UTC" (for example: `Debunking Serverless security myths - October 21, 2019 - 8:30 am PT/3:30 pm UTC`).
1. **DESCRIPTION**: add a sentence to describe what the webcast is about at a high-level.
1. **WHEN**: add the webcast date and time.
1. **DURATION**: add how long the webcast will be PLUS 45 minutes. You must include an additional 45 minutes for the prep call before the event plus padding for running over, otherwise the Launchpoint integration will fail. Keep the start time as the actual time attendees should join, but increase the duration. For example, if your webcast is from 9:00am-10:00am PT, enter start time of 9:00am, but a duration of 1 hour and 45 minutes.
1. **TIMEZONE**: select the correct timezone for your webcast.
1. **DO NOT** change all the other settings that are prepopulated by the template.
1. **ALTERNATIVE HOSTS**: add webcast DRI, internal speaker(s), and Q&A resource as alternative hosts.
1. **PANELISTS**: add external GitLab speakers as panelists by following the video instructions below.
1. **EMAILS**: uncheck email confirmation emails and reminder emails because we will send those from Marketo.

### Step 2: Set up the webcast in Marketo/SFDC, and integrate to WebEx

#### Create program in Marketo - WebEx

1. Create the webcast program in Marketo by navigating to either the [Webcast program template](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/ME8983A1).
1. Right-click the appropriate template, and select "clone"
1. Next to "Clone To", choose `A campaign folder`.
1. For "Name", add the MKTO program name (this is also the SFDC campaign name). Use the following format: `YYYYMMDD_{Webcast Title}_[Region - only if applicable]`. For example, `20170418_MovingToGit`.
1. Under "Folder", choose the appropriate quarter within the  `GitLab-Hosted Campaign Webcasts` or `GitLab-Hosted Workshops` folders.
1. Click "Create" (note - you will create the SFDC campaign from Marketo in the next step!)

#### Connect the Marketo program to WebEx via launchpoint integration

1. In the Marketo program Summary view, you will see `Event Partner:` with a link that says "not set".
1. Click on "not set"
1. In the Event Partner drop down, select `WebEx` and in the Login drop down, select `WebEx API`.
1. In the Event drop-down, select the name of the WebEx webcast you set up in [Step 1: Configure WebEx](/handbook/marketing/virtual-events/webcasts/#step-1-configure-webex)

#### Create campaign in Salesforce - WebEx

1. In the Marketo program Summary view, you will see `Salesforce Campaign Sync:` with a link that says "not set".
1. Click on "not set"
1. Where it says "None", click the drop-down and choose "Create New"
1. The Marketo program name will auto-fill for the name (for consistency across both systems)
1. In the "Description", add a link to the epic
1. Click "Save"
1. NOW you will navigate to the Campaign in SFDC to do a quick review - [Shortcut to Campaigns](https://gitlab.my.salesforce.com/701/o)
1. Click into the SFDC campaign
1. Change the campaign owner to the webcast DRI
1. Change the status to `in progress`
1. Edit the Budgeted Cost (required) to cost of webcast, or "1" if there is no cost associated
1. Click save

### Step 3.A: Update Marketo Tokens

Buckle up! There are a lot of tokens, but for good reason. This is an **advanced practice** and **best practice** within Marketo templates to increase efficiency and speed. Updating these at the top level of the program allows them to cascade through the landing page, emails, automation, and alerts creating a significantly more efficient process of launching new webcasts.

* `{{my.bullet1}}` - bullet copy with approved [character limits](https://docs.google.com/spreadsheets/d/1dKVIZGbbOLoR5BdCqXqCQ40qJlQNif9waTiHc8yWggQ/edit#gid=43971442)
* `{{my.bullet2}}` - bullet copy with approved [character limits](https://docs.google.com/spreadsheets/d/1dKVIZGbbOLoR5BdCqXqCQ40qJlQNif9waTiHc8yWggQ/edit#gid=43971442)
* `{{my.bullet3}}` - bullet copy with approved [character limits](https://docs.google.com/spreadsheets/d/1dKVIZGbbOLoR5BdCqXqCQ40qJlQNif9waTiHc8yWggQ/edit#gid=43971442)
* `{{my.bullet4}}` - bullet copy with approved [character limits](https://docs.google.com/spreadsheets/d/1dKVIZGbbOLoR5BdCqXqCQ40qJlQNif9waTiHc8yWggQ/edit#gid=43971442)
* `{{my.emailConfirmationButtonCopy}}`  - copy for the email confirmation (when on demand), leave as `Watch now`
* `{{my.formButtonCopy}}` - copy for the form button, leave as `Register now` (when switching to on-demand, this will change to `Watch now`)
* `{{my.formHeader}}` - copy for header of form, leave as `Save your spot today!` (when switching to on-demand, this will change to `View the webcast today!`)
* `{{my.heroImage}}` - image to display above landing page form ([options in Marketo here](https://app-ab13.marketo.com/#FI0A1ZN9784))
* `{{my.introParagraph}}` - intro paragraph to be used in landing page and nurture email, with approved [character limits](https://docs.google.com/spreadsheets/d/1dKVIZGbbOLoR5BdCqXqCQ40qJlQNif9waTiHc8yWggQ/edit#gid=43971442)
* `{{my.mpm owner email address}}` - not used in automation, but helpful to know who to go to about setup
* `{{my.ondemandUrl}}` - skip updating in initial registration page setup (update during on-demand switch), Pathfactory link WITHOUT the `https://` NOR the email tracking part (`lb_email=`)
  * Example of correct link to include: `learn.gitlab.com/gartner-voc-aro/gartner-voc-aro` - the code in the Marketo template assets will create the URL `https://learn.gitlab.com/gartner-voc-aro/gartner-voc-aro?lb_email={{lead.email address}}&{{my.utm}}`
  * Note that both parts of this url include custom URL slugs which should be incorporated into all pathfactory links for simplicity of tracking paramaeters
* `{{my.socialImage}}` - image that would be presented in social, slack, etc. preview when the URL is shared, this image is provided by design/social, leave the default unless presented with webcast specific image.
* `{{my.speaker1Company}}` token with speaker 1's company name
* `{{my.speaker1ImageURL}}` token with speaker 1's image url in marketo design studio
* `{{my.speaker1JobTitle}}` token with speaker 1's job title
* `{{my.speaker1Name}}` token with speaker 1's full name
* REPEAT this for speaker 2 and 3. If there are more or less speakers, follow the instructions below at the end of the general webcast setup.
* `{{my.utm}}` - UTM to track traffic to the proper campaign in reporting dashboards (append integrated campaign utm or program name, if webcast is not part of an integrated campaign, to the utm campaign token)
* `{{my.valueStatement}}` token with the short value statement on what the viewer gains from the webcast, this ties into the follow up emails and must meet the max/min requirements of the [character limit checker](https://docs.google.com/spreadsheets/d/1dKVIZGbbOLoR5BdCqXqCQ40qJlQNif9waTiHc8yWggQ/edit#gid=1471341556)
* `{{my.webcastDate}}` - the webcast LIVE date.
* `{{my.webcastDescription}}` - 2-3 sentences with approved character limits, this will show up in page previews on social and be used in YouTube and Pathfactory description.
* `{{my.webcastSubtitle}}` token with subtitle for the webcast.
* `{{my.webcastTime}}` token with the webcast time in local timezone/UTC timezone.
* `{{my.webcastTitle}}` token with the webcast title.
* `{{my.registrationConfirmationButtonCopy}}` token with the registration confirmation button message.
* `{{my.webcastReminder1}}`: token with the time reminder value for the first reminder
* `{{my.webcastReminder2}}`: token with the time reminder value for the second reminder
* `{{my.Add To Calendar}}`: token for Add to Calendar open for ICS file. Double click on it and edit the time slot and descruption

### Step 3.B: Turn on smart campaigns in Marketo

* Activate the `00 Interesting Moments` campaign.
* Activate the `01a Registration Flow (single timeslot)` smart campaign.

### Step 3.C: Create the landing page

* When you cloned the webcast template, and update the Marketo tokens, your landing page is almost ready to go!
  * Under "Assets" right-click on `Registration Page` and hover over `URL Tools` > `Edit URL Settings`
  * Use the format `webcast-topic` (or `webcast-topic-region` if region is relevant) - ex. `webcast-mastering-cicd` or `webcast-mastering-cicd-italian`
* Complete the same steps for the `Thank You Page`
  * Use the format `webcast-topic-thank-you` (or `webcast-topic-region-thank-you` if region is relevant) - ex. `webcast-mastering-cicd-thank-you` or `webcast-mastering-cicd-italian-thank-you`

#### Adjusting number of speakers in Marketo landing page

**Less Speakers**
The speaker module is controlled in the Marketo landing page module. The template is initially set up to support three speakers (note: this is supported in both the My Tokens and the landing page template). If there are less speakers, follow the instructions below:

1. Right click on the Registration Landing Page and click `Edit Draft`
2. Double click on the `Speaker` section
3. Click `HTML` on the toolbar
4. Remove the code below for each speaker you need to remove

```html
<div><br /></div>
<ul>
<li>{{my.speaker3ImageURL}}</li>
<li>{{my.speaker3Name}}</li>
<li>{{my.speaker3JobTitle}}</li>
<li>{{my.speaker3Company}}</li>
</ul>
```

**Less Speakers**
The speaker module is controlled in the Marketo landing page module. The template is initially set up to support three speakers (note: this is supported in both the My Tokens and the landing page template). If there are less speakers, follow the instructions below:

1. Right click on the Registration Landing Page and click `Edit Draft`
2. Double click on the `Speaker` section
3. Click `HTML` on the toolbar
4. Remove the code below for each speaker you need to remove

```html
<div><br /></div>
<ul>
<li>{{my.speaker3ImageURL}}</li>
<li>{{my.speaker3Name}}</li>
<li>{{my.speaker3JobTitle}}</li>
<li>{{my.speaker3Company}}</li>
</ul>
```

If additional assistance is required, please comment in the [#marketing_programs slack](https://gitlab.slack.com/archives/CCWUCP4MS) for assistance if needed.

### Webcast invitation - WebEx

:exclamation: **Note from @aoetama: we are working on further templatizing these invitations so that copy changes are not needed and tokens take care of these emails.** ([issue](https://gitlab.com/gitlab-com/marketing/digital-marketing-programs/-/issues/3422))

1. Update emails `invitation 1 - 2 weeks prior`,  `invitation 2 - 1 week prior` , and if needed `invitation 3 - Day before` with relevant copies related to the webcast. *Note: We normally use the same copy for all 3 emails and simply tweaked the templated subject lines to sound more like "Reminders".*
2. Update email `Registration Confirmation`, and if desired `Reminder 1` , and  `Reminder 3` with relevant copies related to the webcast. *Note: We normally use the same copy for all 3 emails and simply tweaked the templated subject lines to sound more like "Reminders".*
3. Approve copy and send samples to the requestor, and the presenter (if different from requestor).
4. Go to the List folder and edit the `Target List` smart list and input the names of past similar programs and applicable program statuses to the `Member of program` filter. This will make sure people that have attended programs with similar topics in the past are included in the invite.
5. Once you get approval on the sample email copy, schedule the email programs outlined in step 1.

### Step 4: Add the webcast to the /events page

* To add the webcast to the /events page follow this [step by step guide](/handbook/marketing/events/#how-to-add-events-to-aboutgitlabcomevents).

### Step 5: Test your set up

1. Submit a test lead using your GitLab email on the LIVE landing page to make sure the registration is tracked appropriately in the Marketo program and you get a confirmation email. *Check and test the registration confirmation email. Do not forget to update the `Add to calendar` token and the email values for the Google calendar in the Registration Confirmation, Reminder 1 and Reminder 2.*

### Live Webcasts - ON24

Go to [ON24](/handbook/marketing/marketing-operations/on24) page for more information.
