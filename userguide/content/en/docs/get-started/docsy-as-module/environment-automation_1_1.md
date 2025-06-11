---
title: Environment Automation Team
---

## Summary

Environment Automation is a team within the [Dedicated Group](/handbook/engineering/infrastructure/team/gitlab-dedicated/). Our mission is to develop and operate the automated plumbing of the GitLab Dedicated solution.

We follow the same processes as listed on the [Dedicated Group](/handbook/engineering/infrastructure/team/gitlab-dedicated/), unless a difference exists which is explicitly noted on this page.

## Team Members

{{< team-by-manager-slug "o-lluch" >}}

{{< team-by-manager-slug "denhams" >}}

## Working with us

To engage with the Environment Automation team:

- [Create an issue](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/issues/new) in the GitLab Dedicated team issue tracker
- Label the issue with:
  - `workflow-infra::Triage`
  - `team::Environment Automation`
- When creating an issue, it is not necessary to `@`mention anyone
- In case you want to get attention, use a specific team handle (Ex: @gitlab-dedicated/environment-automation ) as defined in [Dedicated group hierarchy](/handbook/engineering/infrastructure/team/gitlab-dedicated/#gitlab-group-hierarchy)
- Slack channels
  - For _Environment Automation_ specific questions, you can find us in [#g_dedicated-environment-automation-team](https://gitlab.slack.com/archives/C074L0W77V0)
    - Our Slack group handle is `@dedicated-envauto-team`
  - The Dedicated Group as a whole leverages: [#g_dedicated-team](https://gitlab.slack.com/archives/C025LECQY0M)
  - Other teams in Dedicated group have their own work channels for team work discussions:
    - [#g_dedicated-us-pubsec](https://gitlab.slack.com/archives/C03R5837WCV)
    - [#g_dedicated-switchboard-team](https://gitlab.slack.com/archives/C04DG7DR1LG)

### How We Work

Our preference is to work asynchronously, within our project issue tracker as described in [the project management section](/handbook/engineering/infrastructure/team/gitlab-dedicated/#project-management).

The team also has a set of regular synchronous calls:

1. Environment Automation Team Sync (alternate weeks):
    1. EMEA/AMER: Tue 15:00 UTC (Good for EMEA and US East)
    1. PST/APAC: Wed 00:00 UTC (Good for APAC and US West)
1. Dedicated on GCP - Weekly Demo: Wed 07:30 UTC
1. [Dedicated Group Demo](/handbook/engineering/infrastructure/team/gitlab-dedicated/#meetings-and-scheduled-calls)

#### Reviewer roulette

Reviewer roulette is an internal tool for use on GitLab.com projects that randomly picks a maintainer + reviewer.  Environment Automation uses it to spread the MR review workload.  To do so:

1. Go to the [reviewer roulette](https://gitlab-org.gitlab.io/gitlab-roulette/?currentProject=environment-automation&sortKey=stats.avg30&mode=show&order=-1) page.
1. Click on `Spin the wheel`.

See the [full MR process](/handbook/engineering/infrastructure/team/gitlab-dedicated/#merge-requests).

#### Example responses

Here are some concrete examples of responses to capacity planning alerts.

- Removing a metric from capacity planning - [Advanced search memory pressure](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/instrumentor/-/merge_requests/3322)
  does not follow long-term trends and was not a useful prediction.
  It remains a metric that is _alerted_ on if it exceeds practical limits.
- Remove saturation metric entirely - [kube_pool_cpu](https://gitlab.com/gitlab-com/runbooks/-/merge_requests/7412)
  was incorrect in many cases, and difficult to get right.
  It needed to be replaced with a different saturation metric (node-based CPU).
- Add Saturation metrics - [Kubernetes PVCs](https://gitlab.com/gitlab-com/runbooks/-/merge_requests/7411)
  were not being monitored at all, leading to near-miss incidents
- Fix the saturation metric - [Advanced search disk](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/instrumentor/-/merge_requests/3331)
  was inaccurate and needed to be replaced with better promql expressions
