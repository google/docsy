---
title: "How to recognize organizations within the contributor ecosystem for GitLab"
description: Learn how to add and maintain usernames to organizations for recognition and award purposes within GitLab
---

Learn how to add and maintain usernames to organizations for recognition and award purposes within GitLab

## Where is the tracking sheet?

[Contributing Orgs tracker](https://docs.google.com/spreadsheets/d/1yIASbQOS2TcHIFmSW_e3xTiQzgkYSLSgiujFJ7Dg834/edit#gid=447581669)

## What is this sheet used for?

- Link user accounts on GitLab.com to customers known to GitLab
- Format this in a form digestible to our BI tools by formatting it into JSON
- List the entry & exit dates of organizations into our Leading Organizations program

## Tabs

### MRARR Organization

Each customer known to GitLab to have contributed in the past is listed here with their Salesforce ID, a validation if they are already in the sheet and a tabular list of known user accounts that belong to that organization.

### MRARR Concise

Once the users are added to the MRARR Organization tab, the MRARR Concise summarizes this information for consumption by our BI tooling.
You should not edit this tab.

In our BI tooling, this tab can be found as `legacy.sheetload_gitlab_contributing_organizations` in the SAFE Intermediate Dashboards.

### Leading Organization

Each organization known to GitLab to have been onboarded in the [Leading Organization](/handbook/marketing/developer-relations/leading-organizations/) program is listed here, including the start date and the potential exit date.

It includes individuals that are not known in our Salesforce system, but still qualify for getting the benefits such as the Review Time SLO. The type of this column is a boolean.

In our BI tooling, this tab can be found as `workspace_engineering.leading_organization_entry_dates` in the SAFE Intermediate Dashboards.
