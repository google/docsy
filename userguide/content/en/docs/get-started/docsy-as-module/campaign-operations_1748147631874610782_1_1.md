---
title: Marketo program/campaign support
description: 'Marketo campaign projects, processes, and notes'
twitter_image: /images/tweets/handbook-marketing.png
twitter_site: '@gitlab'
twitter_creator: '@gitlab'
---

## Overview
<!-- DO NOT CHANGE THIS ANCHOR -->
The Marketing Operations team provides the Integrated Marketing team with advice around execution strategy and systems set-up. In addition, this function currently supports the Field Marketing and Events teams by creating email marketing and landing page set-up, as well as other tasks in Marketo.

## Working with us

Marketo campaign/program creation and support is a function of Marketing Operations, so [follow the same guidelines](/handbook/marketing/marketing-operations/#how-to-get-help) to request assistance. **Be sure to add the `~MktgOps-Support` label to the issue.**

Field Marketing issue templates (used by both Field Marketing and Corporate Events) for landing page and email requests have been updated with the appropriate labels to route to Marketing Ops.

Additional labels that can be used on issues to [track the status of the issue](/handbook/marketing/marketing-operations/#labeling) can be found in on the Marketing Operations page.

### Team Members
<!-- DO NOT CHANGE THIS ANCHOR -->

| Name | Title | Details |
| ---- | ------------ | ---------- |
| Bryce Weatherford | Marketing Operations Associate Manager | Process questions, primary execution |
| Jenny Tiemann | Senior Marketing Operations Manager | Issue triage, process questions, Back-up execution |

### Process documentation shortcuts
<!-- DO NOT CHANGE THIS ANCHOR -->

- [Sales Nominated Invitations](/handbook/marketing/lifecycle-marketing/email-processes-requests/#sales-nominated)
- [Marketo Program + Salesforce Campaigns](/handbook/marketing/marketing-operations/campaigns-and-programs/#marketo-program-and-salesforce-campaign-set-up)
- [Workshop Landing Page and Marketo Setup](/handbook/marketing/field-marketing/field-marketing-owned-virtual-events/#virtual-workshop-logistical-set-up)

## Project Management
<!-- DO NOT CHANGE THIS ANCHOR -->
In an effort to avoid manually adding the issues we are working on, Field Marketing will be utilizing labels and boards to manage the work we are working on with MktgOps. All commentary should be done via comments directly within the GitLab issues.

### Shortcut list views
<!-- DO NOT CHANGE THIS ANCHOR -->
- [Issue Board](https://gitlab.com/groups/gitlab-com/marketing/-/boards/5563453?label_name[]=MktgOps-Support)
- [FM Triage Board](https://gitlab.com/gitlab-com/marketing/field-marketing/-/boards/5623394?label_name%5B%5D=MktgOps-Support)

### SLAs

#### MktgOps

Please note there is a 5 business day SLA with MktgOps, so please plan ahead accordingly. The SLA begins on the day after the issue is put into `~MktgOps::00: Triage`. For example, if the issue goes to triage on Tuesday, day 1 is Wednesday, day 5 is the following Tuesday. Day 5 is the earliest deployment/live date available. Please allow for US holidays and Family & Friends days as well. Using the same example, if day 4 is a US holiday, this will push day 5 to Wednesday.

Anything outside of the standard set-up does not fall under the 5 business day SLA. The most common example of this is the creation of custom forms. For more information about when custom forms are required and the timeline for this work, visit the [Marketo HB page](/handbook/marketing/marketing-operations/marketo/#forms).

If you are planning a program that requires anything outside of the standard set-up, bring MOps in early during your planning process. We can help guide you on the best way to use our available technology to reach your goals and keep your program timeline on track.

#### Field Marketing

Please see Field Marketing SLAs pertaining to this process [here](/handbook/marketing/field-marketing/#slas).

### Triage Steps
<!-- DO NOT CHANGE THIS ANCHOR -->

1. **Field Marketing / Corporate Events**: Marketo asset issues are created (in Field Marketing, the FMC will create the issues during the plan to WIP process. When opening issues via the appropriate templates, the `~MktgOps::07: Blocked` and the `~MktgOps-Support` labels will automatically be associated with the issues. This allows for the issues to be opened in advance and to be available while copy is being finalized.
1. **Field Marketing / Corporate Events**: If the copy references analyst reports, the FMM must open the [Analyst Citation Review issue](https://gitlab.com/gitlab-com/marketing/brand-product-marketing/product-marketing/-/issues/new?issuable_template=AR-CitationReview) and associate it to the MOps email request. You do not need to complete the entire issue, but you must link the email issue and the copy doc with your proposed copy. To expedite email approval, you can use the content found [here](https://gitlab.com/gitlab-com/marketing/brand-product-marketing/product-marketing/-/issues/7130#previously-approved-email-copy-still-requires-reapproval) as it is most likely to be approved quickly. We do not have previously approved landing page copy.
1. **Field Marketing / Corporate Events**: For Field Marketing, the FMM will ping the FMC in the `Write Copy` issue to let them know when copy is ready for each asset. The FMC will then review the copy and once ready, move the label from `~MktgOps::07: Blocked` to `~MktgOps::00: Triage`. For Corporate Events, Event Manager to move the label from `~MktgOps::07: Blocked` to `~MktgOps::00: Triage`
    - At this time, all details must be provided and final (including copy reviewed by relevant stakeholders, and all hyperlinks double-checked and confirmed).
    - The requested send date is the due date of the issue. If the requested send date is less than 5 Business Days from the date it is passed to Mktg Ops, the date of the issue may be scheduled 5 business days out to abide by SLAs. This is at the discretion of Mktg Ops based on other work in progress and upcoming. Please note that we do not send invites or follow-up emails on Thursdays.
    - If Mktg Ops triage manager finds that all details are not included in the issue, then they will add the label `~MktgOps::07: Blocked` and will also comment to the requesting team member what is missing. Once the team member addresses the missing pieces, they then add the `~MktgOps::00: Triage` label again to start the review process over.
1. **MktgOps**: Assign the issue to the appropriate DRI and assign a milestone for the work. For email invitations and email follow-ups, add `~Lifecycle 01 Needs Copy Review` label to signal to Lifecycle team the email copy is ready for review.
1. **MktgOps**: DRI adds email to the [Marketing Calendar](https://docs.google.com/spreadsheets/d/1c2V3Aj1l_UT5hEb54nczzinGUxtxswZBhZV8r9eErqM/edit#gid=1705692818) for the anticipated send date.
    - The requested send date is the due date of the issue. If the requested send date is less than 5 Business Days from the date it is passed to Mktg Ops, the date of the issue may be scheduled 5 business days out to abide by SLAs. This is at the discretion of Mktg Ops based on other work in progress and upcoming.
1. **Lifecycle**: Reviews the email copy and once final and approved, add the `~Lifecycle 02 Copy Approved` labels.
1. **MktgOps**: DRI completes the setup in Marketo, and for email, completes all steps on the [Technical Email QA checklist](/handbook/marketing/lifecycle-marketing/email-processes-requests/#qa-checklist-technical).
1. **MktgOps**: DRI sends a test email to the "Reviewers/Approvers" listed in the issue and posts a screenshot of the email in the issue.
1. **MktgOps**: DRI comments into the issue tagging the reviewers/approvers and documenting that the test email was sent to their inbox and changes status label to `~MktgOps::05: Business Owner Review`.
1. **Field Marketing / Corporate Events**: The issue approver must be listed in the issue and complete all steps in the [Business Owner Email QA checklist](/handbook/marketing/lifecycle-marketing/email-processes-requests/#qa-checklist-requestor) approve email (or provide corrections) via comment in the issue
    - SLA: 24 hours *from when the test email is sent and comment added to issue). Feedback and approval in a timeley manner is critical.
1. **MktgOps**: DRI makes any necessary corrections. If no corrections needed and approval provided by reviewer, DRI sets the email to send (time for send to be determined in issue description/comments) and adds the `~MktgOps::06: Ready to Deploy`.
1. **MktgOps**: DRI checks that email was sent, confirms in comments (tagging issue requester), adds the `~MktgOps::08: Completed` and closes out the issue.
1. **Field Marketing / Corporate Events** Post event reporting. To Request a full Marketo Recap reporting, please  request in the Follow Up email sub issue.
1. **MktgOps** Once a report is complete please add a link to the main issue into the Planning & Recap Spreeedsheet section.

### Responsibilities of email requesters
<!-- DO NOT CHANGE THIS ANCHOR -->

- Issue (email) requesters are responsible for submitting **all details**, including **final approved copy**, reviewed by all stakeholders, PRIOR to moving the issue to triage.
- Issue (email) requesters are responsible for **timely feedback and answers**.
- Issue (email) requesters are responsible for **FINAL QA** (including spelling, grammar, readability, and checking that all links direct to the proper URLs and contain proper tracking parameters). Refer to the [QA checklist](/handbook/marketing/lifecycle-marketing/email-processes-requests/#qa-checklist-requestor).

### Review Process

<!-- DO NOT CHANGE THIS ANCHOR -->
Unless otherwise stated, only **ONE** of the people listed as "Reviewer/Approver" and a Lifecycle Marketing Manager need to approve in order for the email to be set.

As stated in "responsibilities of email requesters" section above, the reviewer is responsible for final QA of all copy, grammar, readability, LINKS, tracking, and formatting.

Detailed email QA instructions can be found on the email and nurture handbook page. This checklist should be followed for each email being QAed.

### Questions

Note that if questions arise, ask in the `#mktgops` Slack channel.

### Email Send Times

Due to nurture protocols, we do not send non-operational emails (invites, follow-ups) on Thursdays.

If the Field Marketer/Event Manager does not provide a specific time, then emails will send at the following times:

- AMER label: 9 AM ET
- EMEA label: 10 AM CET
- APAC label: 11am AEST

Should a requested send time be missed, MktgOps can schedule the email within 8 hours of the original ask, or the following day if other email sends will reduce the list size of the email. If the send time must go beyond 24 hours of the original send time, MktgOps will discuss options with the FMM in the issue.

### Technical set-up - email

- Specialized email headers (not the standard header used in templates) - Typically used for large events such as Commit or DevSecOps World Tour.
  - The images will be requested either by Lifecycle Marketing or the event DRI
  - Image dimensions can be found on the [email marketing page](/handbook/marketing/lifecycle-marketing/email-best-practices/#email-templates).
  - The requested image must be transparent. We cannot use a solid image as it will not render properly in all clients.
  - In the email code (under "Edit Code"), you should use a solid email background (the color will change depending on the design for the event). Example code from the `B - Advanced modular template - light mode` template (aka Advanced Webcast Template). The variables to edit are bgcolor=`#xxxxxx` and border-bottom: 4px solid `#xxxxxx`
     `<tr class="mktoModule" id="bgImagewText4990312b-fd20-449c-a184-d0500cdcc1aa" mktoname="Background Image with CTA">
                        <td background="${heroBackgroundImage}" bgcolor="#171321" valign="middle" style="max-width: 600px; width: 100%; text-align: center; height: 200px; background-repeat:no-repeat ;background-position: 100% !important; background-size: cover !important; border-bottom: 4px solid #171321;" width="100%" height="auto">`
    - After saving the edits in the code, you can then click on the existing header, and the Variable sidebar will appear. Add the new transparent image to the `Hero Background Image` section, and confirm the link and button Copy
    - All emails using specialized images must be [sent to Litmus](/handbook/marketing/marketing-operations/litmus/#steps-to-test-an-email) for previewing various clients. Refer to the Litmus page for details on what to check.
- When using the URL in emails or other uses with utm values, Marketo page URLs (starting with page.gitlab.com) should not have a `/` at the end of the page URL before the `?`. This will likely cause the page to redirect. (Correct example: `https://page.gitlab.com/webcast-example?{{my.utm}}`).
- When using the URL in emails or other uses with utm values, about.gitlab.com page URLs (starting with about.gitlab.com) must have a `/` at the end of the page URL before the `?`. Omitting the `/` can cause the form not to display on the page. (Correct example: `https://about.gitlab.com/webcast-example/?{{my.utm}}`).
- For localized emails, be sure to use the [Localized Email Snippet](/handbook/marketing/marketing-operations/marketo/#snippets)
- Prior to sending to the business owner review, the email creator must complete all steps in the [Technical email QA checklist](/handbook/marketing/lifecycle-marketing/email-processes-requests/#qa-checklist-technical)

### Technical set-up - landing pages
