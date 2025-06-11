---
title: "Rate Limit Architecture Working Group"
description: "Learn more about the Rate Limit Architecture Working Group attributes, goals, roles and responsibilities."
---

## Attributes

| Property        | Value           |
|-----------------|-----------------|
| Date Created    | 2022-04-27 |
| Target End Date | 2022-12-09 |
| Slack           | #wg_rate_limit_architecture (only accessible from within the company) |
| Google Doc      | Agenda (https://docs.google.com/document/d/1nv8hDLqZS16yTa4M3FtdMQNOFM4dt4OXBGCPvp-FHbM/edit#) (only accessible from within the company) |

### Summary

The Rate Limit Architecture WG was active from April - December 2022.  In FY23-Q1 we regularly experienced site incidents related to a lack of rate limits on various features.  We initiated an Engineering Allocation for [Rate Limiting Across DevOps Platform](https://gitlab.com/gitlab-com/ops-sub-department/ops-engineering-management/-/issues/77) which performed an Rate Limiting audit for each DevOps Stage, and updated development docs and guidelines to provide clearer rate limit related guidance, and closed 70+ rate limiting issues.  This resulted in increased reliability and a major reduction in the number of rate limit related site incidents.

Following the Engineering Allocation we initiated this Working Group to establish a forward looking vision for Rate Limiting.  The group developed a [Rate Limiting Architecture Blueprint](https://docs.gitlab.com/ee/architecture/blueprints/rate_limiting/) which captures this vision.  The group also collaborated to identify which GitLab stage group would own this functionality long term.  This was documented by adding the [Rate Limiting Framework to the Application Performance group](https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests/114123).  The blueprint will continue to be reviewed regularly as part of the Architecture Evolution Workflow process.

As the Working Group has accomplished it's exit criteria we made the decision to disband the group.

### Context

During FY23-Q1 we prioritized an engineering allocation for [Rate Limiting Across DevOps Platform](https://gitlab.com/gitlab-com/ops-sub-department/ops-engineering-management/-/issues/77) focused on identifying and addressing denial of service (DoS) vectors via rate and application limits.  So far that effort has been successful in addressing [70+ of DoS related issues](https://gitlab.com/dashboard/issues?scope=all&state=closed&label_name[]=availability%3A%3Alimit).

In addition to addressing DoS vectors to ensure high availability we have goals around:

- consistent monitoring and alerting on limits
- consistent, comprehensive documentation of limits
- synchronization of GitLab.com limit settings with GitLab default limits

Currently there are multiple approaches to rate limiting documented in [GitLab application limits development documentation](https://docs.gitlab.com/ee/development/application_limits.html).

### Exit Criteria

This Working Group has the following goals:

1. Develop a recommendation for the preferred way to implement application rate limits within GitLab
1. Document this recommendation for GitLab developers in an [Architecture Evolution Blueprint](/handbook/engineering/architecture/workflow/).
1. Document iterative project plan for short term, medium term, and long term rate limiting improvements
1. Determine organizational approach to funding effort on this work (e.g. new team, borrow, SIG, fan out, etc.)

### Roles and Responsibilities

| Working Group Role    | Person                | Title                          |
|-----------------------|-----------------------|--------------------------------|
| Executive Sponsor     | Christopher Lefelhocz | VP of Development            |
| Facilitator | Sam Goldstein | Director Engineering, Ops |
| Member | Grzegorz Bizon | Principal Engineer, Verify |
| Member | Fabio Pitino   | Staff Backend Engineer, Verify |
| Member | Marshall Cottrell | Strategy and Operations (Technical) |
| Member | Hayley Swimelar | Senior Backend Engineer, Container Registry|
| Member | Quang-Minh Nguyen | Senior Backend Engineer, Scalability |
| Member | Liam McAndrew | Engineering Manager, Scalability |
| Member | Markus Koller | Senior Backend Engineer, Integrations |
| Member | Grant Hickman | Sr Product Manager, Integrations |
| Architecture Evolution Coach | Andrew Newdigate | Distinguished Engineer, Infrastructure |
