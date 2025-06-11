---
title: Schedules
description: Support Operations documentation page for Pagerduty schedules
canonical_path: "/handbook/support/readiness/operations/docs/pagerduty/schedules"
---

## What are Pagerduty services

As per [Pagerduty](https://support.pagerduty.com/main/docs/schedule-basics):

> On-call schedules are used to map out your coverage needs, and determine who
> will be notified when an incident is triggered.

## Creating a schedule

**Note** This does not add the schedule to an escalation policy. Until that is
done, the schedule is classified as "unused".

1. Login to [pagerduty](https://gitlab.pagerduty.com/)
1. Hover over `People` and click `On-Call Schedules` to go to the
   [schedules page](https://gitlab.pagerduty.com/schedules-new)
1. Click the blue `New Schedule` button at the top-right of the page
1. Enter a name for your schedule
1. For the description, enter something sensible that makes it clear what it is
   for. Ensure you add the issue link that caused the creation.
1. Set the timezone to something appropriate
   - For schedules used only by AMER, the timezone should be
     `Pacific Time (US & Canada)`
   - For schedules used only by APAC, the timezone should be `Brisbane`
   - For schedules used only be EMEA, the timezone should be `Amsterdam`
   - For schedules used by multiple regions, the timezone should be either `UTC`
     (preferred) or `Pacific Time (US & Canada)`
1. Configure your first layer
   1. Add the users to the layer (the order you add them is very specific, as it
      will determine the oncall order)
   1. Set the rotation type to `Weekly`
   1. Set the `Handoff time` to the first day of the rotation (set the time to
      the start time for the rotation of that specific day)
   1. If the layer is does not have persons oncall for every day of the week:
      1. Click the checkbox next to `Restrict on-call shifts to specific times`,
         which should cause a pop-up to appear
      1. Click the radio item next to
         `Restrict on-call duty to specific times-of-the-week`
      1. Set the items here to align with the specifications of the request
         - To add more, click the `+` icon to the far right of each line
         - To remove one, click the blue `X` icon to the far right of each line
      1. Click the blue `Apply` button
   1. Set the `Start time for this layer` to the date for when the schedule
      should go live (set the time to the start time for the rotation of that
      specific day)
1. Click `Add Another Layer` if multiple layers are required
1. Repeat step 7 for the new layer(s)
1. Review the rendered schedule to ensure it aligns with the specifications for
   the request
1. Click the blue `Save Schedule` button
1. Update the [schedules listing](#current-schedules-used-by-support)
1. Update
   [the static_data.yaml file](https://gitlab.com/gitlab-support-readiness/support-team/-/blob/master/data/static_data.yaml)

## Modifying a schedule

**Note** These should never be scheduled for the same day, as they often impact
others. Review [our workflows](/handbook/support/readiness/operations/docs/pagerduty/change_management/) on managing
pagerduty for more information.

1. Login to [pagerduty](https://gitlab.pagerduty.com/)
1. Hover over `People` and click `On-Call Schedules` to go to the
   [schedules page](https://gitlab.pagerduty.com/schedules-new)
1. Search for the name of the schedule using the search-bar
1. Click on the blue name of the schedule you wish to edit
1. Click the `Edit this Schedule` button on the top-right of the page
1. Make the needed changes to the layer(s) of the schedule
1. Review the rendered schedule to ensure it aligns with the specifications for
   the request
1. Click the blue `Save Schedule` button at the bottom-left of the page
1. Update the [schedules listing](#current-schedules-used-by-support)
1. Update
   [the static_data.yaml file](https://gitlab.com/gitlab-support-readiness/support-team/-/blob/master/data/static_data.yaml)

## Deleting a schedule

**Note** You cannot delete a schedule while it is still present on an escalation
policy. You need to remove it first.

1. Login to [pagerduty](https://gitlab.pagerduty.com/)
1. Hover over `People` and click `On-Call Schedules` to go to the
   [schedules page](https://gitlab.pagerduty.com/schedules-new)
1. Search for the name of the schedule using the search-bar
1. Click on the blue name of the schedule you wish to delete
1. Click the red `Delete this Schedule`
1. Update the [schedules listing](#current-schedules-used-by-support)
1. Update
   [the static_data.yaml file](https://gitlab.com/gitlab-support-readiness/support-team/-/blob/master/data/static_data.yaml)

## Current schedules used by support

### Customer Emergencies - AMER Group 1

This rotation is used for emergencies filed by customers during AMER hours.

- [Schedule link](https://gitlab.pagerduty.com/schedules#PBLAHV7)
- Timezone: UTC
- Layer 1
  - Rotation type: weekly
  - Handoff time: Monday 1600
  - Hours:
    - Sunday:    1600-2200
    - Monday:    1600-2200
    - Tuesday:   1600-2200
    - Wednesday: 1600-2200
    - Thursday:  1600-2200
    - Friday:    1600-2200
    - Saturday:  1600-2200

### Customer Emergencies - AMER Group 2

This rotation is used for emergencies filed by customers during AMER hours.

- [Schedule link](https://gitlab.pagerduty.com/schedules#P9FKYZC)
- Timezone: UTC
- Layer 1
  - Rotation type: weekly
  - Handoff time: Monday 1700
  - Hours:
    - Sunday:    1700-2300
    - Monday:    1700-2300
    - Tuesday:   1700-2300
    - Wednesday: 1700-2300
    - Thursday:  1700-2300
    - Friday:    1700-2300
    - Saturday:  1700-2300

### Customer Emergencies - AMER Group 3

This rotation is used for emergencies filed by customers during AMER hours.

- [Schedule link](https://gitlab.pagerduty.com/schedules#PP28N7L)
- Timezone: UTC
- Layer 1
  - Rotation type: weekly
  - Handoff time: Monday 1800
  - Hours:
    - Sunday:    1800-0000
    - Monday:    1800-0000
    - Tuesday:   1800-0000
    - Wednesday: 1800-0000
    - Thursday:  1800-0000
    - Friday:    1800-0000
    - Saturday:  1800-0000

### Customer Emergencies - APAC Group 1 A

This rotation is used for emergencies filed by customers during the first half
of APAC hours.

- [Schedule link](https://gitlab.pagerduty.com/schedules#PQB9Q6K)
- Timezone: UTC
- Layer 4
  - Rotation type: weekly
  - Handoff time: Tuesday 0000
  - Hours:
    - Sunday:    0000-0400
    - Monday:    0000-0400
    - Tuesday:   0000-0400
    - Wednesday: 0000-0400
    - Thursday:  0000-0400
    - Friday:    0000-0400
    - Saturday:  0000-0400

### Customer Emergencies - APAC Group 1 B

This rotation is used for emergencies filed by customers during the first half
of APAC hours.

- [Schedule link](https://gitlab.pagerduty.com/schedules#PKAUGWW)
- Timezone: UTC
- Layer 4
  - Rotation type: weekly
  - Handoff time: Tuesday 0000
  - Hours:
    - Sunday:    0000-0400
    - Monday:    0000-0400
    - Tuesday:   0000-0400
    - Wednesday: 0000-0400
    - Thursday:  0000-0400
    - Friday:    0000-0400
    - Saturday:  0000-0400

### Customer Emergencies - APAC Group 2 A

This rotation is used for emergencies filed by customers during the second half
of APAC hours.

- [Schedule link](https://gitlab.pagerduty.com/schedules#PKPXM8K)
- Timezone: UTC
- Layer 4
  - Rotation type: weekly
  - Handoff time: Tuesday 0400
  - Hours:
    - Sunday:    0400-0800
    - Monday:    0400-0800
    - Tuesday:   0400-0800
    - Wednesday: 0400-0800
    - Thursday:  0400-0800
    - Friday:    0400-0800
    - Saturday:  0400-0800

### Customer Emergencies - APAC Group 2 B

This rotation is used for emergencies filed by customers during the second half
of APAC hours.

- [Schedule link](https://gitlab.pagerduty.com/schedules#PZ42YQR)
- Timezone: UTC
- Layer 4
  - Rotation type: weekly
  - Handoff time: Tuesday 0400
  - Hours:
    - Sunday:    0400-0800
    - Monday:    0400-0800
    - Tuesday:   0400-0800
    - Wednesday: 0400-0800
    - Thursday:  0400-0800
    - Friday:    0400-0800
    - Saturday:  0400-0800

### Customer Emergencies - EMEA Group 1

This rotation is used for emergencies filed by customers during EMEA hours.

- [Schedule link](https://gitlab.pagerduty.com/schedules#P9SV029)
- Timezone: UTC
- Layer 2 Hours:
  - Rotation type: daily
  - Handoff time: 0800
  - Hours:
    - Sunday:    N/A
    - Monday:    0800-1600
    - Tuesday:   0800-1600
    - Wednesday: 0800-1600
    - Thursday:  0800-1600
    - Friday:    0800-1600
    - Saturday:  N/A
- Layer 3
  - Rotation type: weekly
  - Handoff time: Monday 0800
  - Hours:
    - Sunday:    0800-1600
    - Monday:    N/A
    - Tuesday:   N/A
    - Wednesday: N/A
    - Thursday:  N/A
    - Friday:    N/A
    - Saturday:  0800-1600

### Customer Emergencies - EMEA Group 2

This rotation is used for emergencies filed by customers during EMEA hours.

- [Schedule link](https://gitlab.pagerduty.com/schedules#P7ML12U)
- Timezone: UTC
- Layer 2 Hours:
  - Rotation type: daily
  - Handoff time: 0800
  - Hours:
    - Sunday:    N/A
    - Monday:    0800-1600
    - Tuesday:   0800-1600
    - Wednesday: 0800-1600
    - Thursday:  0800-1600
    - Friday:    0800-1600
    - Saturday:  N/A
- Layer 3
  - Rotation type: weekly
  - Handoff time: Monday 0800
  - Hours:
    - Sunday:    0800-1600
    - Monday:    N/A
    - Tuesday:   N/A
    - Wednesday: N/A
    - Thursday:  N/A
    - Friday:    N/A
    - Saturday:  0800-1600

### Incident Management - CMOC (AMER)

This rotation is used for Communications Manager on Call duties during AMER
hours.

- [Schedule link](https://gitlab.pagerduty.com/schedules#PG0SHU2)
- Timezone: UTC
- Layer 1
  - Rotation type: weekly
  - Handoff time: Monday 1600
  - Hours:
    - Sunday:    1600-0000
    - Monday:    1600-0000
    - Tuesday:   1600-0000
    - Wednesday: 1600-0000
    - Thursday:  1600-0000
    - Friday:    1600-0000
    - Saturday:  1600-0000

### Incident Management - CMOC (APAC Group 1)

This rotation is used for Communications Manager on Call duties during the
first half of APAC hours.

- [Schedule link](https://gitlab.pagerduty.com/schedules#PGUP5OB)
- Timezone: UTC
- Layer 7
  - Rotation type: weekly
  - Handoff time: Tuesday 0000
  - Hours:
    - Sunday:    0000-0400
    - Monday:    0000-0400
    - Tuesday:   0000-0400
    - Wednesday: 0000-0400
    - Thursday:  0000-0400
    - Friday:    0000-0400
    - Saturday:  0000-0400

### Incident Management - CMOC (APAC Group 2)

This rotation is used for Communications Manager on Call duties during the
second half of APAC hours.

- [Schedule link](https://gitlab.pagerduty.com/schedules#PMPKHZN)
- Timezone: UTC
- Layer 5
  - Rotation type: weekly
  - Handoff time: Tuesday 0400
  - Hours:
    - Sunday:    0400-0800
    - Monday:    0400-0800
    - Tuesday:   0400-0800
    - Wednesday: 0400-0800
    - Thursday:  0400-0800
    - Friday:    0400-0800
    - Saturday:  0400-0800

### Incident Management - CMOC (EMEA)

This rotation is used for Communications Manager on Call duties during AMER
hours.

- [Schedule link](https://gitlab.pagerduty.com/schedules#P59382D)
- Timezone: UTC
- Layer 3
  - Rotation type: weekly
  - Handoff time: Monday 0800
  - Hours:
    - Sunday:    0800-1600
    - Monday:    0800-1600
    - Tuesday:   0800-1600
    - Wednesday: 0800-1600
    - Thursday:  0800-1600
    - Friday:    0800-1600
    - Saturday:  0800-1600

### US Government On-Call

This rotation is used for emergencies filed by US Government customers.

- [Schedule link](https://gitlab.pagerduty.com/schedules#P89ZYHZ)
- Timezone: Pacific Time (US & Canada)
- Layer 1
  - Rotation type: custom
    - Shift length: 3 days
  - Handoff time: 1100
  - Hours:
    - Sunday:    0500-1100
    - Monday:    0500-1100
    - Tuesday:   0500-1100
    - Wednesday: 0500-1100
    - Thursday:  0500-1100
    - Friday:    0500-1100
    - Saturday:  0500-1100
- Layer 2
  - Rotation type: custom
    - Shift length: 3 days
  - Handoff time: 1100
  - Hours:
    - Sunday:    1100-1700
    - Monday:    1100-1700
    - Tuesday:   1100-1700
    - Wednesday: 1100-1700
    - Thursday:  1100-1700
    - Friday:    1100-1700
    - Saturday:  1100-1700

### Support Manager - AMER

This rotation is used for Support Managers during AMER hours.

- [Schedule link](https://gitlab.pagerduty.com/schedules#PTI56V1)
- Timezone: UTC
- Layer 1
  - Rotation type: weekly
  - Handoff time: Monday 1600
  - Hours:
    - Sunday:    1600-0000
    - Monday:    1600-0000
    - Tuesday:   1600-0000
    - Wednesday: 1600-0000
    - Thursday:  1600-0000
    - Friday:    1600-0000
    - Saturday:  1600-0000

### Support Manager - APAC

This rotation is used for Support Managers during APAC hours.

- [Schedule link](https://gitlab.pagerduty.com/schedules#PWBXTYX)
- Timezone: UTC
- Layer 3
  - Rotation type: weekly
  - Handoff time: Tuesday 0000
  - Hours:
    - Sunday:    0000-0800
    - Monday:    0000-0800
    - Tuesday:   0000-0800
    - Wednesday: 0000-0800
    - Thursday:  0000-0800
    - Friday:    0000-0800
    - Saturday:  0000-0800

### Support Manager - EMEA

This rotation is used for Support Managers during EMEA hours.

- [Schedule link](https://gitlab.pagerduty.com/schedules#PXQ2ZAZ)
- Timezone: UTC
- Layer 1
  - Rotation type: weekly
  - Handoff time: Monday 0800
  - Hours:
    - Sunday:    0800-1600
    - Monday:    0800-1600
    - Tuesday:   0800-1600
    - Wednesday: 0800-1600
    - Thursday:  0800-1600
    - Friday:    0800-1600
    - Saturday:  0800-1600

### Support Director Oncall

This rotation is used for Support Directors.

- [Schedule link](https://gitlab.pagerduty.com/schedules/P6KUUJP)
- Timezone: UTC
- Layer 1
  - Name: APAC Group 1
  - Rotation type: weekly
  - Handoff time: Sunday 0400
  - Hours: 0000-0400
  - Members
    - Lee Matos
- Layer 2
  - Name: APAC Group 2
  - Rotation type: weekly
  - Handoff time: Sunday 0800
  - Hours: 0400-0800
  - Members
    - Val Parsons
- Layer 3
  - Name: EMEA
  - Rotation type: weekly
  - Handoff time: Sunday 1600
  - Hours: 0800-1600
  - Members
    - Val Parsons
- Layer 4
  - Name: AMER
  - Rotation type: weekly
  - Handoff time: Sunday 0000
  - Hours: 1600-0000
  - Members
    - Lee Matos

### Shadow - Customer Emergenices

- [Schedule link](https://gitlab.pagerduty.com/schedules#PLNQAAB)
- Timezone: UTC
- Layer 1
  - Rotation type: weekly
  - Handoff time: Monday 0000
  - Hours
    - Sunday:    N/A
    - Monday:    0000-0400
    - Tuesday    0000-0400
    - Wednesday: 0000-0400
    - Thursday:  0000-0400
    - Friday:    0000-0400
    - Saturday:  N/A
- Layer 2
  - Rotation type: weekly
  - Handoff time: Monday 0000
  - Hours
    - Sunday:    N/A
    - Monday:    0400-0800
    - Tuesday    0400-0800
    - Wednesday: 0400-0800
    - Thursday:  0400-0800
    - Friday:    0400-0800
    - Saturday:  N/A
- Layer 3
  - Rotation type: weekly
  - Handoff time: Monday 0000
  - Hours
    - Sunday:    N/A
    - Monday:    0800-1600
    - Tuesday    0800-1600
    - Wednesday: 0800-1600
    - Thursday:  0800-1600
    - Friday:    0800-1600
    - Saturday:  N/A
- Layer 3
  - Rotation type: weekly
  - Handoff time: Monday 0000
  - Hours
    - Sunday:    N/A
    - Monday:    1600-0000
    - Tuesday    1600-0000
    - Wednesday: 1600-0000
    - Thursday:  1600-0000
    - Friday:    1600-0000
    - Saturday:  N/A

### Shadow - Incident Management - CMOC

- [Schedule link](https://gitlab.pagerduty.com/schedules#P1UHNJP)
- Timezone: UTC
- Layer 1
  - Rotation type: weekly
  - Handoff time: Monday 0000
  - Hours
    - Sunday:    N/A
    - Monday:    0000-0400
    - Tuesday    0000-0400
    - Wednesday: 0000-0400
    - Thursday:  0000-0400
    - Friday:    0000-0400
    - Saturday:  N/A
- Layer 2
  - Rotation type: weekly
  - Handoff time: Monday 0000
  - Hours
    - Sunday:    N/A
    - Monday:    0400-0800
    - Tuesday    0400-0800
    - Wednesday: 0400-0800
    - Thursday:  0400-0800
    - Friday:    0400-0800
    - Saturday:  N/A
- Layer 3
  - Rotation type: weekly
  - Handoff time: Monday 0000
  - Hours
    - Sunday:    N/A
    - Monday:    0800-1600
    - Tuesday    0800-1600
    - Wednesday: 0800-1600
    - Thursday:  0800-1600
    - Friday:    0800-1600
    - Saturday:  N/A
- Layer 3
  - Rotation type: weekly
  - Handoff time: Monday 0000
  - Hours
    - Sunday:    N/A
    - Monday:    1600-0000
    - Tuesday    1600-0000
    - Wednesday: 1600-0000
    - Thursday:  1600-0000
    - Friday:    1600-0000
    - Saturday:  N/A

## Subscribing to a Schedule

You can subscribe to a WebCal feed, suitable for viewing in Google Calendar.

From any of the above links you can subscribe to the whole schedule by clicking
**Schedule Info** and then **WebCal feed**.

Alternatively you can pull just your schedule from general
[Schedules page](https://gitlab.pagerduty.com/schedules) by clicking **Export**
then **Just my calendar** in the *WebCal Feed* section.

If you want just one calendar for *all* of your on-call, you can grab a WebCal
feed by clicking on your profile picture, going to **My Profile** and then
**On-Call Shift**, then clicking the **Export** button to reveal the link.

## Change management

As the Pagerduty changes are unique in deployment, please see
[Pagerduty change management](/handbook/support/readiness/operations/docs/pagerduty/change_management)
for more information.

### Labels to use

For all issues and MRs involving Pagerduty fields, the label
`Support-Ops-Category::Pagerduty` should be used.

### Change criticality

Due to wildly varying nature and impact adding/editing/deleting things in
Pagerduty can impose, all issues/MRs related to Pagerduty need
to have the their criticality
[manually determined](/handbook/support/readiness/operations/docs/change_criticalities#determining-criticality)
