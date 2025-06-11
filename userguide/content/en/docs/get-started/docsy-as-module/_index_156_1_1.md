---
title: "Create:Code Review BE Team"
description: The Create:Code Review BE team is responsible for all backend aspects of the product categories that fall under the Code Review group of the Create stage.
---

## Team Vision & Mission

Please refer to the category directions for [Code Review Workflow](https://about.gitlab.com/direction/create/code_review_workflow/) and [GitLab CLI](https://about.gitlab.com/direction/create/gitlab_cli/) for the current strategy and 1 year plan for these products.

## Core Responsibilities

The Create:Code Review BE team is responsible for all backend aspects of the product categories that fall under the [Code Review group](/handbook/product/categories/#code-review-group) of the [Create stage](/handbook/product/categories/#create-stage) of the [DevOps lifecycle](/handbook/product/categories/#devops-stages):

- [Code Review Workflow](https://about.gitlab.com/stages-devops-lifecycle/create/), mainly the [Merge Requests](https://docs.gitlab.com/ee/user/project/merge_requests/) features
- [GitLab CLI](https://gitlab.com/gitlab-org/cli)

## Group Members

The following people are permanent members of the Create:Code Review Group:

{{< team-by-manager-role role="Engineering Manager, Create:Code Review" team="Code Review" >}}

## Stable Counterparts

The following members of other functional teams are our stable counterparts:

{{< engineering/stable-counterparts role="Code Review" manager-role="Engineering Manager, Create:Code Review" >}}

## Common Links

- GitLab Team Handle: [`@code-review-be`](https://gitlab.com/code-review-be)
- Slack Channel: [`#g_create_code-review`](https://gitlab.enterprise.slack.com/archives/C01EMBKS5DW)
- Slack Handle: `@code_review_be`
- Issue Tracker: [`create-stage/code-review-be`](https://gitlab.com/gitlab-com/create-stage/code-review-be)

## Commonly Monitored Issue Lists

- [Planning Issues](https://gitlab.com/gitlab-org/create-stage/-/issues/?sort=due_date&state=opened&label_name%5B%5D=group%3A%3Acode%20review&label_name%5B%5D=Planning%20Issue)
- [OKRs](https://gitlab.com/gitlab-com/gitlab-OKRs/-/issues/?sort=title_asc&state=opened&label_name%5B%5D=devops%3A%3Acreate&label_name%5B%5D=group%3A%3Acode%20review&label_name%5B%5D=backend)
- [Release Board](https://gitlab.com/groups/gitlab-org/-/boards/2159734)
- [Workflow Board](https://gitlab.com/groups/gitlab-org/-/boards/2365724) (be sure to add a `milestone` filter)
- [Reliability](https://gitlab.com/gitlab-org/gitlab/-/boards/4227439?not[label_name][]=type%3A%3Afeature&label_name[]=group%3A%3Acode%20review)
- [Security](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=due_date&state=opened&label_name%5B%5D=security&label_name%5B%5D=group%3A%3Acode%20review&amp;not%5Blabel_name%5D%5B%5D=type%3A%3Afeature)
- [InfraDev Issues](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=due_date&state=opened&label_name%5B%5D=infradev&label_name%5B%5D=group%3A%3Acode%20review&amp;not%5Blabel_name%5D%5B%5D=type%3A%3Afeature&amp;not%5Blabel_name%5D%5B%5D=severity%3A%3A4)

## Metrics and KPIs

These KPIs are a subset of the [Development Department Performance Indicators](/handbook/engineering/development/performance-indicators/).

You can find our dashboards here:

- [Centralized Engineering Metrics](https://10az.online.tableau.com/#/site/gitlab/views/TopEngineeringMetrics_16989570521080/TopEngineeringMetricsDashboard)
- [Development Department Performance Indicators](/handbook/engineering/development/performance-indicators/)

## Team OKRs

Objectives and Key Results (OKRs) help align our team towards what really matters. These happen quarterly, align up through the stage. We check in on the status of our progress routinely throughout the quarter, at least on a monthly basis, to determine whether we are on track or need to pivot in order to accomplish or change these goals.

[For a list of current and past OKRs for our team, use this link.](https://gitlab.com/gitlab-com/gitlab-OKRs/-/issues/?sort=title_asc&state=opened&label_name%5B%5D=group%3A%3Acode%20review&first_page_size=20)

## How We Work

See the [work section](/handbook/engineering/development/dev/create/code-review/#work) of the main Code Review page.

### Working with our team

As stewards for some of the more high profile features - Merge Request pages, Approval Rules, etc - we receive a large number of inquires and requests for assistance or information about them, as well as the dependent features that it encompasses. We welcome them, as issues or Slack inquires, and we strive to be responsive to these, in the interest of [Collaboration](/handbook/values/#collaboration) and [Results](/handbook/values/#results), but we also must balance the value of [Efficiency](/handbook/values/#efficiency).

Our target is to respond to incoming requests within 2 working days, although we will frequently respond more quickly, depending on team member availability, experience, and workload.

To contact the Code Review BE team in GitLab, you can use the `@code-review-be` handle.

### Meeting Schedule

[Team members](/handbook/engineering/development/dev/create/code-review/backend/#team-members) meet monthly and are encouraged to join in order to interact with peers, solve technical challenges, and discuss freely with each other. You can check for the next meeting on the [Code Review Group calendar](https://calendar.google.com/calendar/embed?src=c_bt3jpkj6afr7321vpg9ra1191s%40group.calendar.google.com&ctz=America%2FChicago).

#### Follow-up issues

You will begin to collect follow-up issues when you've worked on something in a release but have tasks leftover, such as technical debt, feature flag rollouts or removals, or non-blocking work for the issue. For these, you can address them in at least 2 ways:

- Add an appropriate future milestone to the follow-up issue(s) with a weight and good description on the importance of working this issue
- Add the issue(s) to the relevant [planning issue](https://gitlab.com/gitlab-org/create-stage/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=group%3A%3Acode%20review&search=planning)

You should generally take on follow-up work that is part of our [definition of done](https://docs.gitlab.com/ee/development/contributing/merge_request_workflow.html#definition-of-done), preferably in the same milestone as the original work, or the one immediately following. If this represents a substantial amount of work, bring it to your manager's attention, as it may affect scheduling decisions.

If there are many follow-up issues, consider creating an epic.

#### Backend and Frontend issues

Many issues require work on both the backend and frontend, but the weight of that work may not be the same. Since an issue can only have a single weight set on it, we use scoped labels instead when this is the case: `~backend-weight::<number>` and `~frontend-weight::<number>`.

### What to work on

The primary source for things to work on is the [Code Review Release board](https://gitlab.com/groups/gitlab-org/-/boards/2159734?milestone_title=Upcoming)
for the current iteration cycle, which
lists all of the Deliverable and Stretch issues scheduled for this cycle.

The lists are compiled by the Product Manager and Engineering Managers following the
[milestone planning process](/handbook/engineering/development/dev/create/code-review/backend/manager),
with input from the team and other stakeholders.
The iteration cycle start on the Monday before the 3rd Thursday of the month,
and is identified by the GitLab version set to be released.

There is also the [Code Review backend _assignment_ issue board](https://gitlab.com/groups/gitlab-org/-/boards/2142016?milestone_title=Upcoming),
which shows the same Deliverable
and Stretch issues, now grouped by assignee, with the left-most list listing
issues not currently assigned to any backend engineer.

#### What to work on first

Deliverables are considered top priority and are expected to be done by the end
of the iteration cycle on the Friday before the 3rd Thursday of the month,
in time for the [monthly release](/handbook/engineering/releases/).

These top priority issues are assigned to engineers on or ahead of the start of the
milestone, and it is their responsibility
to make a best effort to get them done during that cycle, and to inform their
engineering manager if anything is standing in the way of their success.
You can find the issues assigned to you on the [Code Review backend assignment issue board](https://gitlab.com/groups/gitlab-org/-/boards/2142016?milestone_title=Upcoming).

Many things can happen during a month that can result in a deliverable
not actually being completed by the end of a cycle, and while this usually
indicates that the engineering manager was too optimistic in their estimation
of the issue's weight, or that an engineer's other responsibilities ended up
taking up more time than expected, this should never come as a surprise to the
engineering manager.

The sooner this potential outcome is anticipated and communicated, the more time
there is to see if anything can be done to prevent it, like reducing the scope
of the deliverable, or finding a different engineer who may have more time to
finish a deliverable that hasn't been started yet.
If this outcome cannot be averted and the deliverable ends up missing the
cycle, it will simply be moved to the next cycle to be finished up, and the
engineer and engineering manager will have a chance to
retrospect and learn from what happened.

Generally, your deliverables are expected to take up about 75% of the
time you spend working in a month. The other 25% is set aside for other
responsibilities (code review, community merge request coaching, [helping people out in Slack, participating in discussions in issues](/handbook/values/#collaboration),
etc), as well as urgent issues that come up during the month and need someone
working on them immediately (regressions, security issues, customer issues, etc).

#### What to work on next

If you have time to spare after finishing your deliverables and other
activities, you can spend the remaining time working on Stretch issues, which
can be found on the same issue boards.

These lower priority issues are _not_ expected to be done by the end of the
iteration cycle, but are to be Deliverables in the _next_ cycle, so any progress
made on them ahead of time is a bonus.

Stretch issues are usually not directly assigned to people, except in cases
where there is clearly a most appropriate person to work on them, like in the
case of technical debt, bugs related to work someone did recently, or issues
someone started on before but hasn't had a chance to finish yet.

If no Stretch issues are assigned to you yet, you can find new ones to pick up
by [filtering the Code Review Release board](https://gitlab.com/groups/gitlab-org/-/boards/2159734?&assignee_id=None&milestone_title=Upcoming)

If anything is blocking you from getting started on an issue immediately,
like unanswered questions or unclear requirements, you can skip it and consider
another issue, as long as you put your findings and questions in the
issue, so that the next engineer who comes around may find it in a better state.

Instead of picking up Stretch issues, you may also choose to spend any
spare time working on anything else that you believe will have a significant
positive impact on the product or the company in general.
As the [general guidelines](/handbook/values/) state, "we recognize that inspiration is
perishable, so if you're enthusiastic about something that generates great
results in relatively little time feel free to work on that."

We expect people to be [managers of one](/handbook/values/#efficiency) and prefer [responsibility over rigidity](/handbook/values/#efficiency),
so there's no need to ask for permission if you
decide to work on something that's not on the issue board, but please keep your
other responsibilities in mind, and make sure that there is an issue, you are
assigned to it, and consider sharing it in [#g_create_code-review](https://gitlab.slack.com/archives/g_create_code-review).

### Deep Dives

{{% include "includes/engineering/create/deep-dives.md" %}}

### Performance Monitoring

The Create:Code Review BE team is responsible for keeping some API endpoints and
controller actions performant (e.g. below our target speed index).

There are Grafana and Kibana dashboards available that the team can check to
ensure we are meeting these targets.

Here are the Kibana dashboards that give a quick overview on how they perform:

- [Create::Code Review Controller Actions](https://log.gprd.gitlab.net/app/visualize#/edit/f21d2820-8643-11eb-966b-2361593353f9?_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-7d%2Cto%3Anow))) (internal only)
- [Create::Code Review: API Endpoints](https://log.gprd.gitlab.net/app/visualize#/edit/89f9a6f0-8644-11eb-a990-d72c312ff8e9?_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-7d%2Cto%3Anow))) (internal only)
- [Create::Code Review: Sidekiq Workers](https://log.gprd.gitlab.net/goto/b73a4a65e136eeedfa00b404a009e31f) (internal only)

These tables are filtered by the endpoints and controller actions that the group
handles and sorted by P90 (slowest first) for the last 7 days by default.

The [Grafana dashboard](https://dashboards.gitlab.net/d/stage-groups-code_review/stage-groups-group-dashboard-create-code-review?orgId=1)
shows more specific details about each actions and endpoints.

To see the specific details for certain actions/endpoints, it can be filtered
by `action` and/or `controller`.

We also have a dashboard specifically for monitoring AI features: [Create: Code Review: AI Features](https://log.gprd.gitlab.net/app/dashboards#/view/f959393c-82c1-4b69-a4d3-2446aab9476c?_g=(refreshInterval%3A(pause%3A!t%2Cvalue%3A60000)%2Ctime%3A(from%3Anow-7d%2Cto%3Anow))) (internal only). This dashboard monitors the performance of code review AI features, specifically tracking P50 (median) duration for both Sidekiq and GraphQL operations.

#### Issue identification process

1. Every week we check the kibana and grafana dashboards as per the calendar invite
2. If we identfiy an endpoint or worker that meets our severity criteria we create an issue (if not created already) and label it based on our severity and priority criteria
   - If an issue is already created, check whether the severity/priority needs to be updated
3. This issue should contain as much information on why it is the severity/priority as logs are often held for only 7 days
4. Using a [specific performance issue board](https://gitlab.com/gitlab-org/gitlab/-/boards/2621072) we can keep track of our current issues and they will be prioritized accordingly during planning

#### Priority and Severity

More details can be found in the handbook for [severity](/handbook/engineering/infrastructure/engineering-productivity/issue-triage/#severity) and [priority](/handbook/engineering/infrastructure/engineering-productivity/issue-triage/#priority)

#### Calendar Invites

There are calendar invites that act as a reminder for backend team members
to check these dashboards weekly on Monday:

- APAC: Check performance dashboards - set on Monday 12AM UTC
- AMER: Check performance dashboards - set on Monday 4PM UTC

All backend team members are invited to appropriate calendar invites. This
does not necessarily mean that we only need to take a look at them at those
specific times.

If a team member sees that an action or endpoint does not meet our target,
they should create a performance issue if there's no existing one. If there's
an existing one, team member can either update the issue, investigate or work
on the issue (if they have spare time).

#### Responsibilities of Issue Triage

- Do a weekly review of the triage board and make sure these issues are investigated by assigning them to developers or performing the investigation
- Coordinate with Product Manager to get those issues assigned to milestones so that they can be worked on in timely manner
- Check issues in each column in the order of severity. `~missed-SLO` -> `~approaching-SLO` -> `~severity::1` -> `~severity::2` -> `~severity::3` -> `~severity::4`
- Ensure the severity label is accurate based on the problem investigated
- Our aim is getting to 0 issues in `~missed-SLO` column eventually and handle issues well before they get labeled as `~missed-SLO` and `~approaching-SLO`

## Engineering Onboarding

Open an issue using the [Code Review onboarding template for Backend Engineers](https://gitlab.com/gitlab-com/create-stage/code-review-be/-/issues/new?description_template=onboarding) to get started with onboarding.

## Other Related Pages

- [Create:Code Review BE Engineer Resources](/handbook/engineering/development/dev/create/code-review/backend/engineers), e.g. team building and career development
- [Create:Code Review BE Engineering Manager Responsibilities](/handbook/engineering/development/dev/create/code-review/backend/manager), e.g. milestone planning, talent assessment, and project management
