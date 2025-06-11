---
title: "CI/CD Build Speed (time-to-result)"
description: "The objective is to establish GitLab CI build performance as the market leader."
status: active
---

## Attributes

| Property     | Value |
|--------------|-------|
| Date Created | 2023-12-01 |
| Estimated Date Ended | 2024-03-31 |
| Slack        |  (only accessible from within the company) |
| Google Doc   | [CI Build Speed Working Group Agenda](https://docs.google.com/document/d/1MAbp148_KVzznyvzSRkeP3RqpobS8TJ6IVJxgIBL8fs/edit?usp=sharing) (only accessible from within the company)|

## Overview

We aim to create a working group to establish a repeatable process and framework to measure CI build speed and performance (time-to-result). The objective is to communicate to the market and customers a GitLab point of view, position GitLab CI build performance as the market leader, and provide guidance to customers on optimization considerations so that they can maximize developer efficiency while balancing compute costs for CI builds.

This group is primarily focused on measuring CI build speed, comparing GitLab-hosted runners to 3rd party solutions and other platform-hosted runners such as GitHub-hosted runners, Circle CI.

**Context**:

CI build speed and performance (time-to-result) and CI build cost efficiency are essential competitive vectors especially given the improved maturity of the CI/CD solutions in the market. The [brand Q4 FY23 qualitative research study](https://docs.google.com/presentation/d/1z8hwWLLXJOr3jZOA1ol9jPvOXEmesSrA45sdM-RdMeo/edit?usp=sharing) data indicates that "GitLab leads the pack in associations with speed." However, our internal benchmark testing, ([slides](https://docs.google.com/presentation/d/1x79Nv-YaYOba_fPTOqQRlMfullYeW49IkiIh0Og3zvs/edit?usp=sharing), [report](https://docs.google.com/document/d/1FobCrVqtUtUjXJkBRtoi39bjVRqEFORifN4jDFQgbMs/edit?usp=sharing), of CI build performance on GitLab SaaS had mixed results. Therefore GitLab SaaS customers' perception of CI build performance could be different than self-managed customers or even GitLab SaaS customers that choose to manage their own CI build environment.

Competitors like [Github](https://github.blog/engineering/experiment-the-hidden-costs-of-waiting-on-slow-build-times/) and [Harness.io](https://www.harness.io/blog/fastest-ci-tool) have generally focused on build time duration when discussing CI build speed and performance. While build time duration is the default performance measure, the working group must evaluate if there are other discrete measurements to include in the framework.

Additionally, new players are entering the market advocating for up to 5x GitLab SaaS runner build speed such as [puzl.cloud](https://puzl.cloud/products/ci-runners-for-gitlab) and [actuated.dev](https://actuated.com/), shifting the perception of GitLabs positioning as a leader in CI build speed.

## Out-of-scope

The visibility & observability of build speed for customer jobs will not be scope of this working group, as it's part ot [CI Insights](https://gitlab.com/groups/gitlab-org/-/epics/12071) from the [Fleet Visibility](https://about.gitlab.com/direction/verify/fleet_visibility/) team.

## Business Outcomes

1. Establish a repeatable process and framework to measure CI build speed and performance. The process must include the frequency of measurements (quarterly, semi-annual, annual).
1. Conduct an in-depth analysis of competitors product features that are focused on improving CI build speed and efficiency.
1. Conduct a technical analysis on CI build speed and performance improvements.
1. Recommendation to product leadership regarding new investment or prioritization of features to improve GitLab CI competitiveness specific to build speed and performance.
1. Establish comprehensive material for customers on how to improve CI build speed and cost efficiency on GitLab.
1. Review and agreement by legal on how we can communicate CI build speed data externally in blog posts or other marketing materials.

| Topic                     | DRI                |
|---------------------------|------------------------|
| CI benchmarking framework - Design doc | @grzesiek |
| CI benchmarking framework - Implementation | tbd |
| Competitor analysis       | tbd |
| Technical improvements    | tbd |
| Product recommendation    | @gabrielengel_gl |
| Customer guide            | tbd |
| Communication review      | @gabrielengel_gl |

## Exit Criteria

1. CI build speed benchmark process codified in the handbook
1. Internal charts for continuous monitoring of CI build speed
1. Initial blog post published on how to improve GitLab CI build speed

## Roles and Responsibilities

| Working Group Role    | Person                 |
|-----------------------|------------------------|
| Executive sponsor     | Mike Flouton @mflouton |
| Facilitator & Member  | Gabriel Engel @gabrielengel_gl |
| Member                | Allison Browne @allison.browne |
| Member                | Grzegorz Bizon @grzesiek |
| Member                | Arran Walker @ajwalker |
| Member                | Oliver Falk @ofalk |
| Member                | Marius Bobin @mbobin |
| Member                | Cheryl Li @cheryl.li |
