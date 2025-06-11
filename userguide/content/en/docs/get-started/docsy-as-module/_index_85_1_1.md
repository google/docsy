---
title: Geo Support Pod
description:
---

## Purpose

Creating a dedicated group to work together on Geo tickets.

This will allow everyone to gain more knowledge regarding Geo and an easier location to share the knowledge acroos regions.

## Current objectives

- Collaborate on tickets related to Geo

- Gain and share knoweledge

- Documentation updates

## Support Pod members

- Lead: {{< member-by-name "Ronald van Zon" >}} (`@rvzon`)
- Co-Lead: {{< member-by-name "Anton Smith" >}} (`@anton`)
- Co-Lead: {{< member-by-name "Keelan Lang" >}} (`@klang`)
- {{< member-by-name "Alexander Strachan" >}} (`@astrachan`)
- {{< member-by-name "Brie Carranza" >}} (`@bcarranza`)
- {{< member-by-name "Bo Carbonell" >}} (`@bocarbonell`)
- {{< member-by-name "Daniel Diniz" >}} (`@dnldnz`)
- {{< member-by-name "Emily Chang" >}} (`@emchang`)
- {{< member-by-name "Łukasz Korbasiewicz" >}} (`@lkorbasiewicz`)
- {{< member-by-name "Mario Mora" >}} (`@mmora`)
- {{< member-by-name "Harish Ramachandran" >}} (`@harishsr`)
- {{< member-by-name "Aric Buerer" >}} (`@abuerer`)

## Collaboration channels

- Slack channel: [#spt_pod_geo](https://app.slack.com/client/T02592416/C03D96JF4LD)
- Epic - https://gitlab.com/groups/gitlab-com/support/-/epics/145

## Standing Meetings

- Geo Pod Sync APAC <> AMER - 21:30 UTC Tuesday
- EMEA Geo Group Pairing - 08:00 UTC Wednesday
- Geo Pod Sync EMEA <> AMER - 14:00 UTC Thursday

## Create Geo Pod view

Since limitation in Zendesk prevent every pod from having a shared view, you will have to create one manually.
Follow the steps below and you should have a personal view in no time.

1. Click on `Manage views`
1. In the new Window on the top right click `Add view`
1. Give the view a nice name (`Geo (All regions)`)
1. Move to `Conditions`
    1. `Tickets must meet all of these conditions to appear in the view`
        1. Click `Add condition` and from left to right `Status`, `Less than`, `Pending`
        1. Add second conditation (from left to right) `Form`, `Is`, `Self-Managed`
    1. `Tickets can meet any of these conditions to appear in the view`
        1. Click `Add condition` (from left to right) `Descripition`, `Contains at least one of the following words`, `geo`
1. Move on to `Formatting options`
    1. This is kind of up to your flavour but below are some suggestions.
        1. Next SLA breach
        1. Priority
        1. Preferred Region for Support
        1. Subject
        1. Organization
        1. Assignee
        1. Request date
        1. Latest update by assignee
1. Change `Order by` to `Next SLA breach`, `Ascending`
1. Click `Save`

Congratulations you now have a personal Geo Pod View.
