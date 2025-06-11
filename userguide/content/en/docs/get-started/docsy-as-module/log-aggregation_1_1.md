---
title: "Log Aggregation Working Group"
description: "The Log Aggregation Working Group aim to increase the quality, value, and accessibility of our GitLab.com logs. Read more here!"
---

## Attributes

| Property     | Value |
|--------------|-------|
| Date Created | March 6, 2019 |
| Date Ended   | TBD |
| Slack        | [#wg_log-aggregation](https://gitlab.slack.com/messages/CGR0T1C6P) (only accessible from within the company) |
| Google Doc   | [Log Aggregation Working Group](https://docs.google.com/document/d/192B68tEuw5KoJEKwlzDlVbXS8PaxOT57M2MAcjCbHVo/edit) (only accessible from within the company) |
| Issue Label | WG-LogAgg (gitlab-com/-org) |

## Business Goal

Increase the quality, value, and accessibility of our GitLab.com logs.

Intent is to:

1. Analyze and document the locations, retention, and variety of production logs as they exist today, including analysis of the data classification and access controls
1. Develop troubleshooting and investigation guides to make best use of GitLab.com logs
1. Perform gap analysis of log quality and completeness, and where improvements can be made to streamline investigations
1. Work with Infra and Development teams to integrate the proposed improvements into GitLab.com

## Exit Criteria

1. Completed audit of existing log sources, storage locations, and means of accessing the aggregated logs along with a quality and accuracy evaluation of these logs
1. Creation and delivery of a standardized logging lifecycle providing:
   1. Contribution: The how, when, and why Developers should add logged events to their code
   1. Production: Ensuring each service as part of the GitLab package is writing logs in a consistent and configurable fashion
   1. Aggregation: The consistent, reliable, and configurable collection and shipping of logs to defined location(s)
   1. Accessibility: Tooling and functionality to provide timely access and manipulation of the log data
   1. Retention: Define, provide means to enforce, and verify the necessary retention policies on log data
1. Publish documentation and training material on the GitLab logging lifecycle for use by the GitLab.com service and self-managed GitLab

## Roles and Responsibilities

| Working Group Role    | Person                | Title                                  |
|-----------------------|-----------------------|----------------------------------------|
| Facilitator           | Paul Harrison         | Senior Security Engineer               |
| Member                | Stan Hu               | Engineering Fellow                     |
| Security Lead         | Antony Saba           | Senior Threat Intelligence Engineer    |
| Infrastructure Lead   | Andrew Newdigate      | Staff Engineer, Infrastructure         |
| Member                | Amar Amarsanaa        | Site Reliability Engineer              |
| Member                | Alex Groleau          | Security Software Engineer, Automation |
| Member                | Shawn Sichak          | Security Engineer, Operations          |
