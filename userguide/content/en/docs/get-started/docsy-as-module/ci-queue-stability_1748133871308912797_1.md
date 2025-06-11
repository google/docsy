---
title: "CI Queue Time Stabilization Working Group"
description: "The GitLab CI Queue Time Stabilization Working Group aims to increase the stability and predictability of the CI job queue times on GitLab.com."
---

## Attributes

| Property     | Value |
|--------------|-------|
| Date Created | November 1, 2019 |
| Date Ended   | January 22, 2019 |
| Slack        | [#wg_ci_queue_stability](https://gitlab.slack.com/archives/CPNJU64N9/p1572646264000100) (only accessible from within the company) |
| Google Doc   | [CI Queue Stability Working Group](https://docs.google.com/document/d/1wgdb0Uv1YBOYX4vEtHoGOYxuBAxSP3A_1SPQ1mc5NXM/edit?usp=sharing) (only accessible from within the company) |
| Issue Label | wg_CIQueueStability (gitlab-com/-org) |

## Business Goal

Increase the stability and predictability of the CI job queue times on GitLab.com.

Intent is to:

1. Analyze and remediate situations where our CI job queue times for shared runners exceed reasonable expectations
1. Define metrics and tune alerting that more precisely correspond to the expectations of the CI job queues
1. Develop troubleshooting and investigation guides to use in cases of excessive CI job queue times
1. Perform predictive analysis on system health and growth and create issues to remediate anticipated future bottlenecks

## Exit Criteria

1. Creation and tuning of metrics and alerts that trigger when system behaviour no longer matches expectations -> Done
1. 1-week of running with above mentioned tuned alerts without them going off -> Done
1. Published or updated documentation of runbook information on how to diagnose, respond, and restore abnormal behavior into being normal -> Done

## Artifacts

1. [Updated runbook](https://gitlab.com/gitlab-com/runbooks/-/merge_requests/2117/) for `ci-runners service  has a apdex score (latency) below SLO` alert that could be triggered

## Roles and Responsibilities

| Working Group Role    | Person                | Title                                  |
|-----------------------|-----------------------|----------------------------------------|
| Facilitator           | Elliot Rushton        | Engineering Manager, Runner            |
| Exec Sponsor          | Christopher Lefelhocz | Senior Director of Development         |
| Engineering Lead      | Tomasz Maczukin       | Backend Engineer                       |
| Infrastructure Lead   | Andrew Newdigate      | Distinguished Engineer, Infrastructure |
| Member                | Darby Frey            | Senior Engineering Manager, Verify     |
| Member                | Steve Azzopardi       | Backend Engineer                       |
| Member                | Darren Eastman        | Senior Product Manager, GitLab-Runner  |
| Member                | Kamil Trzciński       | Distinguished Engineer                 |
