---
title: "Production Engineering Foundations Team"
description: "Build and evolve the networking infrastructure that powers GitLab SaaS while maintaining the stability of select core platform services"
---

## Mission

The mission of the Production Engineering Foundations team at GitLab is to build and evolve the networking infrastructure that powers GitLab SaaS while maintaining the stability of select core platform services. We focus on developing innovative networking solutions that scale with GitLab's growth, while ensuring our maintained services remain reliable and efficient.

## Vision

The Foundations team's North Star consists of two pieces:

1. **Excellence in networking infrastructure.** We will drive GitLab's networking capabilities for GitLab forward by building scalable, secure, and efficient solutions. This includes evolving our edge services, load balancing, rate limiting, and network security to meet the growing demands of all GitLab platforms. Through centralized networking tooling and infrastructure, we create a foundation that supports GitLab's continued growth and innovation.
1. **Sustainable toil and service maintenance.** While toil is inherent in SRE work, we will adopt processes and policies that create an effective balance between automation and manual work. This approach ensures we can maintain our core infrastructure services reliably while keeping operational overhead minimal as GitLab grows. We strive for efficiency in both our day-to-day operations and our maintenance of essential platform services.

See [our team impact overview](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/26128) for an overview of all we accomplished in 2024.

## Responsibilities

### Primary Areas of Ownership

The Foundations team's flagship focus is our networking infrastructure, which we actively work to improve and expand:

#### Networking Infrastructure

- [Edge](https://www.cloudflare.com/learning/serverless/glossary/what-is-edge-computing/) and [ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/#what-is-ingress) services
- Load balancing ([HAProxy](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/frontend/haproxy.md), Ingress)
- Web Application Firewall (WAF)
- DNS ([AWS Route 53](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/uncategorized/manage-dns-entries.md), [Cloudflare](https://gitlab.com/gitlab-com/runbooks/-/tree/master/docs/cloudflare))
- [VPC management](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/uncategorized/subnet-allocations.md)
- CDN ([Cloudflare](https://gitlab.com/gitlab-com/runbooks/-/tree/master/docs/cloudflare))
- Network security and access controls
- Service discovery ([Consul](https://gitlab.com/gitlab-com/runbooks/-/tree/master/docs/consul))
- [Rate limiting](https://gitlab.com/gitlab-com/runbooks/-/tree/master/docs/rate-limiting)
  - Design and implementation of rate limiting services

### Maintained Services

While these services are essential to GitLab's infrastructure, we focus on maintaining their stability and reliability rather than actively expanding their capabilities. Features and improvements will not be prioritized:

- [SaaS K8s workloads](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/onboarding/gitlab.com_on_k8s.md). GitLab-com is owned by Delivery, Tanka and Helmfiles are often shared by other teams.
- Secrets Management ([Vault](https://gitlab.com/gitlab-com/runbooks/-/tree/master/docs/vault))
- [Ops.gitlab.net](https://gitlab.com/gitlab-com/runbooks/-/tree/master/docs/ops) and [Ops Runners](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/uncategorized/subnet-allocations.md).
- [Teleport](https://gitlab.com/gitlab-com/runbooks/-/tree/master/docs/teleport) - Foundations manages KTLO work such as upgrades, but all other ownership is managed by [CorpSec](../../../../security/corporate/systems/teleport/_index.md).

## Getting Assistance

Should you require assistance from the Foundations team, please open an issue in the [Production engineering tracker](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/new?issuable_template=request-foundations)

Apply one of the following templates:

- For issues pertaining to Teleport connections, use the [teleport-troubleshooting template](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/new?issuable_template=teleport-troubleshooting)
- For issues pertaining to Cloudflare, use the [Cloudflare Troubleshooting template](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/new?issuable_template=Cloudflare%20Troubleshooting)
- For anything else, use the [request-foundations template](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/new?issuable_template=request-foundations)

- We also have team handles that ping the full team
  - Slack: `@infra-foundations`
  - GitLab: `@gitlab-org/production-engineering/foundations`

We rotate triage duties weekly between team members as part of our [interrupt rotation](#interrupt-rotation).

### Priority Levels for Requests

| Priority | Description | Engagement SLA |
| ------- | ----------- | --------- |
| Production Engineering::1 | Very urgent, blocking significant other work | Engage within 24 hours |
| Production Engineering::2 | A blocker, but we have workarounds | Engage within 3 business days |
| Production Engineering::3 | Not currently a blocker but will be soon | Engage within a week |
| Production Engineering::4 | Not likely to be a blocker, this is a nice-to-have improvement or suggestion | Engage within a month |

> [!note]
> Due to the complexity of our systems, we cannot commit to a resolution-based SLA when you open an issue with a given priority level, because we don't know how long something will take to resolve, and there is often more information we need from the stakeholder or external customer, which takes time to obtain. Therefore, we can only commit to an SLA for how quickly we will engage with an issue and prioritize the work.

We endeavor to triage incoming requests twice per week.

> [!important]
> If you have an issue that is very urgent and requires immediate attention (i.e. Priority 1), please also send us a link to the request issue in our Slack channel: [#g_foundations](https://gitlab.slack.com/archives/C0313V3L5T6).

## Considerations for tooling and maintaining our services

- We support [dogfooding](/handbook/engineering/development/principles/#dogfooding) when it makes sense to do so.
  - We consider the scale at which we run gitlab.com and the additional engineering effort required to dogfood, weighed against the capacity and other priorities of the team.
- When considering external tooling, we look first to other open source projects that are part of [CNCF](https://www.cncf.io/)
- Further evaluation criteria include:
  - Technical Fit - How well does it solve the problem we need it to solve?
  - Service Maturity - How well developed is the tool, does it have a proven track record of being used at scale?
  - Maintainability - Does it have strong community engagement, which will ensure it is well maintained for the foreseeable future? Complexity of keeping it up to date?
  - Cost - Licensing costs when applicable, weighed against the cost of building and maintaining the tooling ourselves. Engineering time required to implement new tooling and maintain it, weighed against the benefit it brings.
  - License - Identify the specific license under which the open-source project is distributed (*GNU*, *MIT*, *ISC*, etc.). This allows us to ensure compatibility with other tools' licensing, contribute to the project if needed in the future, and understand the restrictions and risks associated with a specific license.

## Key Performance Indicators

KPIs for the team are under development in https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/24928.

## Team Members

{{< team-by-manager-slug "steve-abrams" >}}

## Key Technical Skills

The Foundations Team must maintain a broad and diverse set of technical skills while also maintaining the ability to switch contexts frequently.  Some of these technical skills include:

- Cloudnative Engineering - Proficiency in Kubernetes and the associated ecosystem of running cloudnative services.
- Infrastructure as Code - Proficiency in Chef and Terraform
- Network Systems - Understanding of network concepts and experience with our Edge stack (see Edge services above)

## Common Links

- [Foundations Top Level Epic](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1175)
- [Foundations team meeting agenda](https://docs.google.com/document/d/14Fg7BMHTHAnUxKbOR2vRYIAsv0k4YDUh-YRd3vuhXd8/edit?usp=sharing)
- [Foundations Roadmap](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1502)
- [#g_foundations](https://gitlab.slack.com/archives/C0313V3L5T6) - work related discussions, external requests, etc
- [#g_foundations_social](https://gitlab.slack.com/archives/C04QVEXBVL3) - socializing and standups
- [#g_foundations_notifications](https://gitlab.slack.com/archives/C04RZC5TPPD) - automated MR notifications
- [#g_foundations_alerts](https://gitlab.enterprise.slack.com/archives/C04Q7RQC7FF) - pipeline failures and service alerts

## How We Work

### Team Sync meetings

- We have weekly synchronous meetings in two different time zones to encourage discussion, give status updates, triage incoming requests, and connect as a team.
  - [Agenda](https://docs.google.com/document/d/14Fg7BMHTHAnUxKbOR2vRYIAsv0k4YDUh-YRd3vuhXd8/edit?usp=sharing)
  - [Youtube playlist](https://www.youtube.com/playlist?list=PL05JrBw4t0KqWfqy6IhKlVDUbk-f9NnmR).

#### Calendar

- We have a internal team calendar for regular team meetings.
  - To subscribe to the calendar you can use `Other Calendars > Subscribe to calendar` with `c_fbda056c7fecb09a0d0d0801527838384fe862b80f2e36cdc24bca7b0d9d274f@group.calendar.google.com` as the ID.

### Standup

We have Geekbot automated checkins on Mondays and Fridays in the [#g_foundations](https://gitlab.enterprise.slack.com/archives/C0313V3L5T6) channel. Any question can be skipped by replying "-".

- Monday questions include:
  - What are you working on this week?
  - Do you have any blockers?
- Friday questions include:
  - What did you do this week?
  - Do you have any shout outs?
  - Anything else you'd like to share?

### Retros

We have a quarterly async retro that aligns with the company fiscal quarters and OKRs. In addition to reflecting on our quarter in general, we take a set of actions to try the next quarter and revisit how successful they were in the next retro.

#### FY26Q1 Actions

- Define a KTLO/Backlog grooming process and try it out (see https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/26338 for more details).
- Documenting things is part of our definition of done (issues are not closed if there are relevant docs/runbooks/etc to be updated).

### Picking up work

We have three buckets of work:

1. Project work
1. External requests
1. General operations, also known as Keep the lights on (KTLO)

While we rely on the `workflow-infra::*` labels to denote the current state of any given issue, we rely on the [Build Board](https://gitlab.com/groups/gitlab-com/gl-infra/-/boards/7578583) to understand what specific issues are ready to be picked up.

In short, anyone on the team can find issues to work on in the Build Board.

When something is prioritized to be worked on, the `Foundations Build` label is applied so it is included on the board. With the exception of some external requests, issues being added should be in `workflow-infra::Ready` (clearly defined and [ready](../project-management/index.md) for any team member to pick up).

We want the build board to be relatively small in size so it is easy to traverse and there is no confusion around what needs to be worked on. It can provide some options for people to find work, but also prevent key work from being missed.

Different people are responsible for adding the `Foundations Build` label to issues for each bucket of work:

- Project Work - DRIs of each project (epic) uses the `Foundations Build` label to communicate what the next issues needed to be picked up are.
- External requests - the Engineering manager or person on the [interrupt rotation](#interrupt-rotation) will add `Foundations Build` to issues that need attention. These will also include the `unblocks others` label to make it clear to people on the interrupt rotation which issues are external requests. The person on interrupt rotation can also actively triage incoming issues, adding the `Foundations Build` label when new issues are opened.
- KTLO - These issues will generally be added according to a general combination of due date/priority/severity/weight. Any team member should feel empowered to add KTLO issues to the board when they fit the criteria (prioritization makes sense based on the due date/priority/severity/weight).

From here, people have options when looking for what's next:

1. Pick up issues related to the project they are involved with
1. Pick up KTLO work they are interested in or to create a break between other project work
1. Help out with external requests if the interrupt rotation has higher volume on a given week

We trust everyone to be a [Manager of One](../../../../leadership/_index.md#managers-of-one) - owning not just their own work, but the team's work - taking responsibility to define their own workflow that provides the right balance of work for them to be most impactful to the team.

### Prioritization of work

We use priority labels to prioritize our work. project work is automatically set considered `Production Engineering::2` when it is ready to be worked on. As such it is given higher priority than most other work. This means that external requests will be worked in based on their own priority and impact, where only P1 and P2 issues will regularly interrupt project work.

### Interrupt Rotation

The goal of the team member on interrupt rotation is to purposely plan to have interrupt work for a week so that the rest of the team can have less interrupt work. The [schedule is available in pager duty](https://gitlab.pagerduty.com/schedules#P7Y8O0E).

If a team member is unavailable for more than 2 days of the week they are on triage, they should seek to trade weeks or find coverage for the days they are out.

The team member on rotation is responsible for:

- Checking the [Foundations Build Board](https://gitlab.com/groups/gitlab-com/gl-infra/-/boards/7578583) throughout the week and ensuring new issues related to Foundations:
  - Have the correct labels (`Foundations::*`, `Production Engineering::P*`, `workflow-infra::*`, any other applicable category labels)
  - Have a [weight](#issue-weighting).
  - Are assigned to an [appropriate epic](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics?state=opened&page=1&sort=start_date_desc&label_name[]=team::Foundations) if applicable.
- Asking issue authors for more information when needed to understand the scope of work.
- Raising any `Production Engineering::1` or `Production Engineering::2` issues and ensuring they have a DRI and are being actively worked on.
- Completing any issues that come up that can be completed during the week. Weight 5 issues can be considered depending on the priority.
  - Anything weight 8 or larger (more than 1 week of work) should be made clear that it will need to be scheduled around other work.
- Responding to alerts in [`#g_foundations_alerts`](https://gitlab.enterprise.slack.com/archives/C04Q7RQC7FF).
- Working on Renovate MRs posted in [`#g_foundations_notifications`](https://gitlab.enterprise.slack.com/archives/C04RZC5TPPD).
  - Patch updates with passing pipelines should be merged.
  - Minor updates should have their changelogs be reviewed before merging.
  - Major updates should be looked at closely to understand breaking changes before considering merging.
- Responding to Terraform drifts related to Foundations services posted in [`#infra-terraform-alerts`](https://gitlab.enterprise.slack.com/archives/C06PZQCRUJH).
- Responding to any [Access Requests that need Foundations provisioning](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/26626#open-access-requests).

### Project Management

The Foundations team top level Epic can be found [here](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1175)
We follow Platforms Project Management practices as outlined in the [Handbook](/handbook/engineering/infrastructure/platforms/project-management/).
Below builds on top of those guidelines.

#### OKRs

- For Objectives and Key Results, we align with [Platforms guidance](/handbook/engineering/infrastructure/platforms/#okr) for creation and structure.

#### Epics / Projects

In addition to the format described in the [platforms project management page](/handbook/engineering/infrastructure/platforms/project-management/#epics), these optional sections may be helpful.

```markdown

## Administrative

<!-- A copy paste section for creating child epics/issues, ensuring that they relate to the current epic and have the correct labels -->

\`\`\`
/epic [current epic]
/labels ~"group::Production Engineering" ~"team::Foundations" ~"workflow-infra::Triage" ~"Production Engineering::P2" ~"Foundations::Project work"
\`\`\`

## References

<!-- Links to related OKRs, Epics or issues, external resources etc -->

## Demos

| Demo Date | Demo Link | Highlights |
|-----------|-----------|------------|

## Decision log
<!-- A collapsible section to aggregate any decisions made along the way. Be sure to include "why" in addition to "what". -->

{{% details summary="Log" %}}
{{% details summary="date" %}}
[decision taken and why]
{{% /details %}}
{{% /details %}}

```

- Apply any applicable service labels.
- When changing the health status to anything other than "On track", give context for why in the weekly status update, including the plan to get back on track when possible.

#### Issues

Most issues for our team are tracked primarily in the [Production Engineering](https://gitlab.com/gitlab-com/gl-infra/production-engineering/) project. Issues should be updated whenever significant work occurs. New issues are expected to:

- Link to a related Epic.
- Include the following Labels (update the priority as needed):

   ```text
   /labels ~"group::Production Engineering" ~"team::Foundations" ~"workflow-infra::Triage" ~"Production Engineering::P4"
   ```

- A Foundations label that aligns with the bucket of work it fits best in: `Foundations::KTLO`, `Foundations::Requests`, `Foundations::Project Work`, ...

  > [!important]
  > Access Requests issues use the `Foundations::Todo`, `Foundations::Doing` and `Foundations::Done` labels.

- If there is a service label that is applicable, also apply that.

##### Issue weighting

We dogfood the [weight feature](https://docs.gitlab.com/ee/user/project/issues/issue_weight.html) in issues. We use a modified Fibonacci sequence (the numbers match roughly with the number of days) and align our weights to t-shirt sizes to make them easy to talk about:

- Fib 1 (XS) - A few hours of work. Consider if the work should just be completed now depending on competing priorities.
- Fib 2 (S) - A day or two of work.
- Fib 5 (M) - Up to a week of work.
- Fib 8 (L) - Over a week of work. This issue should likely be broken down into smaller pieces.
- Fib 13 (XL) - Several weeks or more of work. This issue will need to be broken down into smaller pieces or promoted to an epic.
