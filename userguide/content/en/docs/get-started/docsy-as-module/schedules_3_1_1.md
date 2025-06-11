---
title: Schedules
description: Support Operations documentation page for Zendesk schedules
canonical_path: "/handbook/support/readiness/operations/docs/zendesk/schedules"
---

## What are schedules

Schedules in Zendesk are like schedules in most other things: windows of time.
We use these to determine business hours and various regional working hours.

Within Zendesk, these have the ability to use a specific timezone and allow for
the setting of holidays.

## Zendesk Global schedules

- [Business Hours](https://gitlab.zendesk.com/agent/admin/schedules/91387)
  - Timezone: Pacific Time (US & Canada)
  - Sunday: 1500-2400
  - Monday: 0000-2400
  - Tuesday: 0000-2400
  - Wednesday: 0000-2400
  - Thursday: 0000-2400
  - Friday: 0000-1700
  - Saturday: Closed

## Zendesk US Federal schedules

- [Business Hours](https://gitlab-federal-support.zendesk.com/agent/admin/schedules/360000298411)
  - Timezone: Pacific Time (US & Canada)
  - Sunday: Closed
  - Monday: 0500-1700
  - Tuesday: 0500-1700
  - Wednesday: 0500-1700
  - Thursday: 0500-1700
  - Friday: 0500-1700
  - Saturday: Closed

## Creating a schedule via Zendesk

To create a schedule in Zendesk, you first need to go to the Admin Center
([Zendesk Global](https://gitlab.zendesk.com/admin/) /
[Zendesk US Federal](https://gitlab-federal-support.zendesk.com/admin/)). From
there, you need to go to the Schedules page (Objects and rules > Business rules
\> Schedules).

After doing so, you will then click the `Add schedule` button on the top-right
side of the page. This will then load up the new schedule page.

From here, you need to enter a name for the schedule. After doing so, you can
then select the timezone for this schedule to use. With that done, select the
hours for this new schedule to cover. Once you have it all set up in the way we
need, click the blue `Save` button in the bottom-right of the screen.

## Editing a schedule via Zendesk

To edit a schedule in Zendesk, you first need to go to the Admin Center
([Zendesk Global](https://gitlab.zendesk.com/admin/) /
[Zendesk US Federal](https://gitlab-federal-support.zendesk.com/admin/)). From
there, you need to go to the Schedules page (Objects and rules > Business rules
\> Schedules).

After doing so, you will then click the name of the schedule you wish to edit.
From here, you will see a screen very similar to the creation screen. Make your
changes and then click the blue `Save` button in the bottom-right of the screen.

## Deletinga schedule via Zendesk

**Note** This can be highly destructive and extreme care should be utilized.

To delete a schedule in Zendesk, you first need to go to the Admin Center
([Zendesk Global](https://gitlab.zendesk.com/admin/) /
[Zendesk US Federal](https://gitlab-federal-support.zendesk.com/admin/)). From
there, you need to go to the Schedules page (Objects and rules > Business rules
\> Schedules).

From there, hover over the schedule in question and click the three vertical
dots on the right-hand side of the schedule. Click the Delete option and then
click the red `Delete` button on the popup that appears.

## Schedule standards

To ensure all schedules we utilize are both consistent in nature and
transparent in their actions, we strive to meet some standards on all
schedules we work with.

### Naming standards

The name of the schedule should be very explicit. Try to aim to make the name of
the schedule reveal what it is to be used for.

### Timezone standards

The timezone used for schedules should be reflective of those using it. For
example, if this schedule is for those in the EMEA region, you should use a
timezone within the EMEA region. We have some preferred regions to use that you
should aim to select when appropriate. There might be situations where none of
these are correct, at which point it is best to use your best judgment.

| Timezone name                          | Use                                                   | Uses DST? |
|----------------------------------------|-------------------------------------------------------|:---------:|
| (GMT-07:00) Pacific Time (US & Canada) | For use in the AMER region or for global use          | Yes       |
| (GMT+02:00) Amsterdam                  | For use in the EMEA region                            | Yes       |
| (GMT+10:00) Brisbane                   | For use in the APAC region                            | No        |
| (GMT+00:00) UTC                        | For global use when DST needs to be taken into effect | No        |

## Holidays

Holidays are important settings on schedules, as when a ticket is using a
schedule and has a SLA timer, the SLA timer does not run on the holiday itself.

We currently do not utilize holidays for any of our Zendesk instances.

## Change management

As the schedule changes are unique in deployment, please see
[Zendesk schedules change management](/handbook/support/readiness/operations/docs/change_management#zendesk-schedules-change-management)
for more information.

### Labels to use

For all issues and MRs involving schedules, the label
`Support-Ops-Category::Zendesk Settings` should be used.

### Change criticality

Due to the nature and impact adding/editing/deleting Zendesk schedules imposes,
all issues/MRs related to Zendesk schedules will be classified as
[criticality 1](/handbook/support/readiness/operations/docs/change_criticalities#criticality-1)
