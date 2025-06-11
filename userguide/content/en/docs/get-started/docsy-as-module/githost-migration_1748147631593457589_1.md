---
title: "GitHost Migration Working Group"
description: "The GitLab GitHost Migration Working Group aims to successfully migrate a key customer from GitHost.io to GitLab.com."
---

## Attributes

| Property        | Value           |
|-----------------|-----------------|
| Date Created    | January 30, 2020 |
| Target End Date | April 24, 2020|
| Actual End Date | May 12, 2020 |
| Slack           | [#wg_githost_migration](https://gitlab.slack.com/archives/CRKL886F2) (only accessible from within the company) |
| Google Doc      | [GitHost Migration Working Group Agenda](https://docs.google.com/document/d/1O8cF5ylQHJDAXVB3KUoW5FhPRH-RIOpHAOuuuPz0VL0/edit) (only accessible from within the company) |

## Business Goal

Successfully migrate a key customer from GitHost.io to GitLab.com. More details on the specific customer in Google Doc above.

## Exit Criteria

1. Define acceptance criteria for customer. => **Done** The customer has stated they want all data migrated across. We have confirmed scope of data included in migration, which is viewable by following the *Migration Features* link [here](https://docs.google.com/document/d/1O8cF5ylQHJDAXVB3KUoW5FhPRH-RIOpHAOuuuPz0VL0/edit#heading=h.1jbhsgk81yat).
1. Identify and deliver issues blocking migration efforts in [this epic](https://gitlab.com/groups/gitlab-org/-/epics/2584). => **Done**.
1. Complete an end-to-end testing plan and conduct a migration dry-run. => **Done**.
1. Document known risks as part of the migration process. => **Done** Risks listed [here](https://gitlab.com/gitlab-org/manage/-/issues/16366). Working Group to add approval for each risk.
1. Execute on migration for customer. => **Done** Start Date 13th April. End Date 13th May.

## Roles and Responsibilities

| Working Group Role    | Person                | Title                                      |
|-----------------------|-----------------------|--------------------------------------------|
| Executive Stakeholder | Christopher Lefelhocz | Senior Director of Development             |
| Facilitator           | Allison Walker        | Professional Services Project Manager      |
| Functional Lead       | Liam McAndrew         | Backend Engineering Manager, Manage:Import |
| Functional Lead       | Jeremy Watson         | Group Product Manager, Manage              |
| Functional Lead       | Michael Lutz          | Senior Director of Professional Services   |
| Functional Lead       | Paul Harrison         | Security Manager, Security Operations      |
| Member                | Haris Delalić         | Product Manager, Manage:Import             |
| Member                | George Koltsov        | Backend Engineer, Manage:Import            |
| Member                | Désirée Chevalier     | Software Engineer in Test, Manage          |
| Member                | Sanad Liaquat         | Senior Software Engineer in Test, Manage   |
| Member                | Glen Miller           | Professional Services Engineer             |
| Member                | Petar Prokic          | Professional Services Engineer, EMEA       |
| Member                | Sean Hoyle            | Customer Success Manager                  |
| Member                | Luca Williams         | Product Manager, Manage:Spaces             |
| Member                | Lyle Kozloff          | Support Engineering Manager                |

## Outcome

The key customer was successfully migrated from GitHost.io to GitLab.com. As part of this process a new [Group Import/Export API](https://gitlab.com/groups/gitlab-org/-/epics/1952) was introduced and the reliability of our Project Import/Export functionality was improved. Thank you for everyone's contribution in the Working Group.
