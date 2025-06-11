---
title: Package Stage
---

## Mission and Vision

The Package stage creates a secure environment where both source code and dependencies can live by allowing you to publish, consume, and discover packages across a variety of languages and platforms all in one place. Our vision is to be our customers' single source of truth for storing and distributing packages and container images across the entire DevOps lifecycle.

## Team Structure

The Package stage consists of two groups:

1. Package:Container Registry - Backend Go service for OCI-compliant container image storage
2. Package:Package Registry - Package management features within GitLab Rails application

### Team Members

The following teams make up the Package stage:

{{< team-by-manager-slug manager="crystalpoole" team="Container Registry" >}}
{{< team-by-manager-slug manager="crystalpoole" team="Package Registry" >}}

### Stable Counterparts

{{< engineering/stable-counterparts manager="crystalpoole" role="[,&] Package" >}}

### Package Format DRIs

| Format    | DRI            |
|-----------|----------------|
| npm       | @dmeshcharakou |
| Maven     | @10io         |
| PyPI      | @radbatnag    |
| NuGet     | @mkhalifa3    |
| Terraform | @radbatnag    |
| Generic   | @dmeshcharakou |

## How We Work

### Milestone Planning Process

Our milestone planning aligns closely with our product roadmap and engineering commitments. The process balances delivery of strategic initiatives with operational needs like security issues and customer bugs.

Product Manager responsibilities:

- Creates milestone planning issue with clear goals based on roadmap
- Defines key projects and expected outcomes
- Ensures security issues and customer bugs are considered
- Maintains alignment with product strategy and roadmap

Engineering Manager and DRI responsibilities:

- Reviews carryover work from previous milestone
- Selects next set of issues from their projects to meet roadmap timelines
- Evaluates realistic delivery capacity
- Surfaces risks and timeline impacts early
- Updates roadmap dates if needed

Issues are prioritized as:

- `Package:P1`: Committed work for the milestone
- `Package:P2` + `Stretch`: Stretch goals if capacity allows

Non-roadmap items that may be planned include:

- Security issues (to meet SLAs)
- Customer bugs
- Minor reliability/performance fixes

Instrumentation is a key requirement for all features to measure impact and effectiveness. This helps us validate adoption and make data-driven decisions.

### Issue Management

#### Async Issue Updates

The purpose of async updates is to communicate progress and allow others to prepare for upcoming work as necessary. In an all-remote culture, we keep the updates asynchronous and put them directly in the issues.

The async update communicates the progress and confidence using an issue comment and the milestone health status. Add a comment in your issue with the title `Async Update` once per week, or when something notable happens with regard to the issue. It's preferable to update the issue rather than the related merge requests.

The async update comment should include:

- what percentage complete the work is, in other words, how much work is done to put all the required MRs in review
- the confidence of the person that their estimate is correct
- notes on what was done and/or if review has started
- it could be good to include whether this is a front end or back end update if there are multiple people working on it

#### Issue Weighting Guidelines

| Weight | Description | Confidence Level |
|--------|-------------|------------------|
| 1: Trivial | Well understood, no investigation needed, exact solution known | ≥90% |
| 2: Small | Well understood, minimal investigation needed, few surprises expected | ≥75% |
| 3: Medium | Well understood but requires investigation, some surprises expected | ≥60% |
| Larger | Should be broken down into smaller issues | ≥50% |

An issue with weight 1 should take no more than 2 days to complete.

### Current Projects

#### Container Registry

- [Tag immutability](https://gitlab.com/groups/gitlab-org/-/epics/15139) (DRI: @jdrpereira)
- [Protected tags](https://gitlab.com/groups/gitlab-org/-/epics/15608) (DRI: @rchanila)
- [Metadata database GA](https://gitlab.com/groups/gitlab-org/-/epics/5521) (DRI: @hswimelar)
- [Database load balancing](https://gitlab.com/groups/gitlab-org/-/epics/8591) (DRI: @jdrpereira)
- [Background migration support](https://gitlab.com/groups/gitlab-org/-/epics/13609) (DRI: @suleimiahmed)

#### Package Registry

- [Virtual Registry support (Maven, npm, PyPI, NuGet)](https://gitlab.com/groups/gitlab-org/-/epics/15088) (DRI: @10io)
- [Dependency Firewall](https://gitlab.com/groups/gitlab-org/-/epics/5133) (DRI: @dmeshcharakou)
- [Package format improvements](https://gitlab.com/groups/gitlab-org/-/epics/12294) (DRI: @radbatnag)
- [Test stability enhancements](https://gitlab.com/groups/gitlab-org/-/epics/15148) (DRI: @radbatnag)

## Technical Guidelines

### Breaking Changes Process

[Breaking changes](https://docs.gitlab.com/ee/development/deprecation_guidelines/#minimize-the-impact-of-breaking-changes) can be disruptive to our customers' workflow and we attempt to avoid them or reduce the impact.  When a breaking change is unavoidable, we provide as much visibility and advance notice as possible.

1. Announce deprecations, breaking changes, and removals at least 3 milestones before implementation
2. Before major version milestone:
   - Implement breaking change with a feature flag
   - Feature flags are mandatory unless explicitly justified
3. In major version milestone:
   - Roll out the feature flag
   - If stable, open feature flag cleanup MR
   - If issues occur:
     - Fix before milestone end and re-roll out, or
     - Disable flag and defer to next major version

### Releasing New Package Formats

We follow a structured process for releasing new package formats:

1. **Experiment Phase**
   - Feature flag enabled on staging
   - Comprehensive testing:
     - Small and large package operations
     - Performance with hundreds of packages
     - All supported authentication methods
     - Custom GitLab-specific features
   - Document any issues in feature flag rollout issue

2. **Beta Phase**
   - Limited GitLab.com rollout
   - Dogfooding with internal teams
   - Selected customer testing
   - Bug triage and resolution

3. **Generally Available**
   - Full documentation update
   - Feature flag removal
   - Self-managed release
   - Release communications

### Alert and CI Flake Management

The team monitors the Slack channel [#g_container-registry_alerts](https://gitlab.enterprise.slack.com/archives/C046REGL9QD) for service alerts and CI notifications. Process for handling alerts:

1. Everyone is responsible for monitoring alerts during their working hours
2. When a new alert appears:
   - Add 👀 emoji to signal you're investigating
   - Review alert details (runbook, dashboard, pipeline, Sentry issue)
   - Use available resources to evaluate the problem
   - Determine if safe to ignore based on:
     - Existing issue coverage
     - Auto-resolution
     - Logs showing resolution
   - If not safe to ignore:
     - Review #production and #incidents-dotcom channels
     - Consider reporting an incident
     - Share details in #g_container-registry
   - Add a comment thread to document your review
   - Add ✅ emoji when resolved

#### Alert Occurrence Template

```markdown
## Alert Occurrence Update
- **Occurrence Count**: X (previously Y)
- **Date/Time**: [Insert timestamp]
- **Last occurrences**: [Insert slack link]
```

#### Key Resources

- [Logs - Non-production](https://nonprod-log.gitlab.net/goto/f3fbccdb9dea6805ff5bbf1e0144a04e)
- [Logs - Production](https://log.gprd.gitlab.net/goto/7dc6f73d5dd4cc4bebcd4af3b767cae4)
- [Dashboard - Overview](https://dashboards.gitlab.net/d/registry-main/registry-overview?orgId=1)
- [Profiler](https://console.cloud.google.com/profiler/gitlab-registry/cpu?project=gitlab-production)

## Product Context

### Container Registry History

Originally launched in milestone 8.8, the Container Registry integrated Docker Distribution registry into GitLab. A key challenge was storage management - deleted images weren't actually removed from storage without downtime-requiring garbage collection.

To address this and enable future features, we:

1. Forked Docker Distribution
2. Implemented online garbage collection
3. Added a metadata database
4. Created cleanup policies

This work enables future capabilities like:

- More robust API and UI
- Enterprise features (image signing, protection)
- Improved stability and reliability

The registry adheres to OCI standards for Image and Distribution specifications while maintaining backward compatibility with Docker specifications.

## Measuring Results

### Key Performance Indicators

- Lighthouse Metric: (Count of Packages Published + Count of Containers Published) / Billable Users
- Monthly Active Users (GMAU)
- Error Budget compliance
- Say-Do ratio for delivery commitments
- Operating costs:
  - Storage costs
  - Data transfer costs

### Dashboards

- [Container Registry](https://log.gprd.gitlab.net/goto/e7b62a23a5a9cdc88aa1de3cdb392758)
- [Package Registry Metrics](https://dashboards.gitlab.net/)
- [Error Budgets](https://dashboards.gitlab.net/d/stage-groups-detail-package_registry/)

## Additional Resources

- [Package Quality Guidelines](/handbook/engineering/development/ops/package/quality/)
- [Package Jobs To Be Done](/handbook/engineering/development/ops/package/jtbd/)
- [Container Registry Documentation](https://docs.gitlab.com/ee/user/packages/container_registry/)
- [Package Registry Documentation](https://docs.gitlab.com/ee/user/packages/package_registry/)
- [Team YouTube Channel](https://www.youtube.com/playlist?list=PL05JrBw4t0KoPiSySNHTfvxC20i0LppMf) (includes demos, team meetings, customer summaries, and user interviews)
