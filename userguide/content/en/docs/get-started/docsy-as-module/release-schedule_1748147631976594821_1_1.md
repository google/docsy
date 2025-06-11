---
title: "Spekit for Operations/Process/Tools Updates"
description: "RSOE uses the Spekit tool to update the Field team on operational, process and/or tools changes."
---

## How Spekit is Leveraged for Operations/Process/Tools Updates

GitLab leverages Spekit as a just-in-time enablement platform to embed custom resources and process details directly in the tools and systems where Field team members are working.

The [Field Communications team](/handbook/sales/field-communications/) leverages Spekit to support changes and updates related to operations, processes and tools. This allows team members to understand what and when tools and process changes happen through notifications that appear directly in the tools in which they are relevant (versus communicating about these changes out of context via Slack or other communication channels where they are likely to be missed or forgotten).

### Spekit Approach by Announcement Type

Field Communications assesses each update based on scope of impact and applies a defined approach to the Spekit notification based on this announcement type.

1. **High-Impact Change (typically aligns with [Field Comms tiers 1-3](/handbook/sales/field-communications/#field-communications-playbook)):** This change impacts key processes that are customer- or revenue-impacting in nature for the audience (ex. New SKU, system downtime, tier 1/tier 2 launch like Sales Stages).
   1. **Spekit Comms Treatment – Loudest:** Spotlight appears on the homepage of the most relevant URL (tool homepage) sharing a spek with details about the change. Field Comms reserves the right to reinforce in Update Tickers if deemed necessary. *Example: Tool deprecation notice appears on the tool homepage when a user logs in.*
1. **Medium-Impact Change (typically aligns with [Field Comms tiers 4-5](/handbook/sales/field-communications/#field-communications-playbook)):** This change impacts processes that are key to audience’s efficiency and important for them to be aware of to reduce confusion/drive the right behaviors (ex. Quoting change, new high-priority fields, new resource like a dashboard/report).
   1. **Spekit Comms Treatment – Quieter:** Spotlight appears on a specific page within a tool/system sharing a spek with details about the change. *Example: Quoting change appears in SFDC the next time a user opens the quote module.*
1. **Low-Impact Change (typically aligns with [Field Comms tier 6](/handbook/sales/field-communications/#field-communications-playbook)):** This change is nice for the audience to know about but is not a major efficiency driver for them.
   1. **Spekit Comms Treatment – Quietest:** User is informed of a new spek with the update in their notification pane of the Spekit plugin. *Example: A user receives a notification bell in their Spekit side panel sharing a spek that outlines a new field on the Opportunity page.*

Note: Depending on the scope of the change, different impact levels can apply to different audiences for the same change. For example, a quoting change may be medium-impact for Sales reps but low-impact for CSMs/SAs. The team can customize how the notification is surfaced for various audiences based on this scoping.

### Requesting Support for Operations/Process/Tools Updates via Spekit

**Requesters should follow the same [Field Announcement Request Process](/handbook/sales/field-communications/#requesting-field-announcements) used for all updates that need to be announced to the Field team.**

1. Once issue is opened, requester should select `System Changes/System Updates` and/or `Process Change` as the announcement type, depending on the change.
1. Requester should provide all information needed to satisfy the [Spekit template].
1. Field Comms will triage the request and, upon identifying it as a tools/systems or operations/process update, ask that the requester provide the needed information to complete the Spek in Spekit.
1. At this time, Field Comms will also advise and gain consensus on the comms approach based on announcement type.
1. Once the change is ready to be announced, Field Comms will assist with moving the associated Spek into public view and creating a Spotlight or Notification to support the announcement (based on what approach was defined in step above).
1. Field Comms will provide a snapshot of Spotlight or Notification performance in Spekit one-week following the announcement.

### Field Communications Guidelines for Spekit

1. All Spotlights will be set to expire in two weeks from the announcement date unless otherwise specified to avoid system clutter.
1. All Speks will be set to expire in six months from the announcement date unless otherwise specified to avoid system clutter.
   1. Spek author should add the Spek expiration date in the custom field within the Spek in the GitLab YYY-MM-DD format.
1. Email notification feature will not be leveraged at this time to avoid creating too much noise for the Field team. This can be reevaluated at a later date.
1. Spotlights should incorporate [GitLab-branded imagery](/handbook/sales/field-operations/release-schedule/#gitlab--branded-imagery-in-spekit) to ensure they are not ignored or mistaken for native tool notifications.
1. No more than 1-2 Spotlights should be sent in Spekit in a given week to avoid overloading the Field team. If we have hit our cap for the week, Field Comms will advise pushing to the following week. No spotlights should be sent during the [End-of-Quarter Quiet Period](/handbook/sales/field-communications/#field-comms-quiet-periods). Exceptions will be considered based on priority but are not encouraged.
1. If an update relates to a specific part of a page (ex. new field), the default should be to embed the spek to increase visibility unless it overrides something existing.

### Operations/Process/Tools Updates Template in Spekit

If you have Spekit access, you can find the template [here](https://app.spekit.co/app/wiki/?type=object%2Cfield_value%2Cbusiness_term%2Casset&topic=4cfd134c-8f0d-4e21-8eb5-b2816ead2d88&tag=Changes%2FAnnouncements%20Drafts&expanded=true). For those without access, please review the update template below and ensure you are providing all the necessary information to complete this template when creating your Field Announcement Request issue.

> - **Title:** Descriptive title that explains what the change is
> - **Summary:** Summary of change. Ensure you address WHAT is changing and WHY.
> - ❗️**Action Needed:**❗️ If action/CTA is needed, clearly outline that here and include a due date.
> - 📖 **Resources:** 📖  Provide a list of supporting resources/links. Examples include handbook pages or issue links.
> - **Who:** Outline audience/teams that this change impacts. Be as specific as possible.
> - **DRI:** Provide name(s)
> - **Timeline:** Is there a time limit/end date/etc. associated with this change, or is it evergreen moving forward? --> Time-bound / Evergreen
>   - If time-bound --> Provide ending date/time-range

### GitLab-Branded Imagery in Spekit

Creators have six custom images to choose from to use when building Spotlights in Spekit. Those images can be found in [this Drive file](https://drive.google.com/drive/folders/11GwsupAb3dayfSSP_SZ_w0w7KkkPsXIc?usp=sharing) and consist of:

1. 3 - Generic GitLab images
1. 3 - Text-based images to call out
   1. Process Update
   1. Tool Update
   1. Incident Report

In addition, a [Canva template](https://www.canva.com/design/DAGOCmVEVoI/-J-pk80dtxI59EyYqIp5Eg/edit?utm_content=DAGOCmVEVoI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton) is available to custom-create a text-based image that is inline with our Brand guidelines if one of the three pre-existing images is not applicable. If you do not have access to Canva, please open an [Access Request](/handbook/it/end-user-services/onboarding-access-requests/access-requests/).

### Phase 2: GitLab Spekit Experts for Field Updates

In a future state, we will identify 1-2 team members from each of the primary RSOE + extension teams that contribute to tools/systems and operations/process updates. These team members will be trained on Spekit and given “expert” user permissions (via “RSOE Experts” group) to contribute to the Changes/Announcements Drafts topic. When an announcement request is made relating to an update in one of these areas, those team members will pinged to create the spek following the template format.
