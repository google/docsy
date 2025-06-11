---
title: "Continuous Scanning Working Group"
description: "Implement continuous scanning for GitLab projects"
---

## Attributes

| Property        | Value           |
|-----------------|-----------------|
| Date Created    | 2022-05-23 |
| End Date | 2022-10-03 |
| Slack           | #wg_continuous_vuln_scans (only accessible from within the company) |
| Google Doc      | [Event Stream Working Group Agenda](https://docs.google.com/document/d/1ubcIkyL1rAThg_tsbm5gpEOQtOFLfKe9g9t-z8Cs95o) (only accessible from within the company) |
| Issue Label | ~WorkingGroup::ContinuousScanning |

## Goals

The goal for this working group is to complete the work described in [this Epic](https://gitlab.com/groups/gitlab-org/-/epics/7886).

## Exit Criteria

Our exit criteria maps to the proposal found in [this Epic](https://gitlab.com/groups/gitlab-org/-/epics/7886):

 1. SBOM information is ingested and stored in the database
 1. ~~Advisory DB information is ingested and stored the database~~
 1. ~~Scans are triggered automatically when any changes are detected for either the SBOM information or the Advisory DB information~~

## Outcome

When the group was started, the target features were in categories spread across different stages and groups. With the creation of the [Govern Stage](https://about.gitlab.com/direction/govern/) the remaining two items are wholly within the responsibilities of the [Composition Analysis](https://about.gitlab.com/direction/secure/#groups) group in the Secure stage, and as such they’re best completed as business-as-usual features in the owner group.

## Roles and Responsibilities

| Working Group Role | Person             | Title                                           |
|--------------------|--------------------|-------------------------------------------------|
| Executive Sponsor  | Hillary Benson     | Director of Product Management, Sec & Data Science  |
| Engineering DRI    | Thiago Figueiró    | Backend Engineering Manager, Govern:Threat Insights, Govern:Security Policies |
| Product DRI        | Matt Wilson        | Senior Product Manager, Govern                  |
| Member             | Igor Frenkel       | Senior Backend Engineer, Secure:Composition Analysis |
| Member             | Brian Williams     | Senior Backend Engineer                         |
| Advisor            | Mehmet Emin Inac   | Staff Backend Engineer, Govern:Threat Insights  |
