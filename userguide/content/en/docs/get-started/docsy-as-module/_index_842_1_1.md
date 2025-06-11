---
title: "Observability Team"
description: "Observability encompasses the technical elements responsible for metrics, logging, and tracing, along with the tools and processes that leverage these components."
---

Observability encompasses the technical elements responsible for metrics, logging, and tracing, along with the tools and processes that leverage these components.

## Mission

Our mission is to deliver and maintain a world-class observability offering and frictionless operational experience for team members at GitLab.

## Common Links

|                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|--------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Workflow**                   | [Team workflow](/handbook/engineering/infrastructure/team/scalability/#how-we-work)                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **GitLab.com**                 | `@gitlab-org/production-engineering/observability`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **Issue Trackers**             | [Observability Tracker](https://gitlab.com/gitlab-com/gl-infra/observability/team/-/issues) <br/> [Tamland](https://gitlab.com/gitlab-com/gl-infra/tamland/-/issues)                                                                                                                                                                                                                                                                                                                                                                                 |
| **Team Slack Channels**        | [#g_observability](https://gitlab.slack.com/archives/g_observability) - Team channel<br/> [#infrastructure_platforms_social](https://gitlab.enterprise.slack.com/archives/C062T669RFD) - Social channel                                                                                                                                                                                                                                                                                                                                              |
| **Information Slack Channels** | [#infrastructure-lounge](https://gitlab.slack.com/archives/infrastructure-lounge) (Infrastructure Group Channel), <br/>[#incident-management](https://gitlab.slack.com/archives/incident-management) (Incident Management),  <br/>[#g_infra_observability_alerts](https://gitlab.slack.com/archives/g_infra_observability_alerts) (Observability Slack Alerts), <br/>[#alerts-general](https://gitlab.slack.com/archives/alerts-general) (SLO alerting), <br/>[#mech_symp_alerts](https://gitlab.slack.com/archives/mech_symp_alerts) (Mechanical Sympathy Alerts) |
| **Documentation**              | [Documentation Hub](https://gitlab-com.gitlab.io/gl-infra/observability/docs-hub/)                                                                                                                                                                                                                                                                                                                                                                                                                                 |

## Team Members

The following people are members of the Observability team:

{{< team-by-manager-slug "liam-m" >}}

The team is located all over the world in [different timezones](https://timezonewizard.com/ca-m2n).

## Technical principles, goals and responsibilities

Please see [the Technical Blueprint](/handbook/engineering/infrastructure-platforms/production-engineering/observability/technical_blueprint) for details on our principles and goals.

The following gives an overview of our scope and ownership.

1. [Monitoring fundamentals](https://gitlab.com/gitlab-com/runbooks/blob/e00eeb59937a9043c5db04314a35acb05c4e9288/docs/monitoring/README.md#L1)
   1. Metrics stack
   1. Logging stack
1. [Error budgets](/handbook/engineering/infrastructure-platforms/production-engineering/observability/error_budgets/)
   1. Ownership of concept and implementation
   1. Delivery of monthly error budget report
1. [Capacity planning](/handbook/engineering/infrastructure-platforms/production-engineering/observability/capacity_planning/)
   1. [Triage rotation for .com](/handbook/engineering/infrastructure/capacity-planning/#gitlabcom-capacity-planning)
   1. [Operational aspects for GitLab Dedicated capacity planning](https://docs.gitlab.com/ee/architecture/blueprints/capacity_planning/)
   1. Developing [Tamland](https://gitlab.com/gitlab-com/gl-infra/tamland), the forecasting tool
   1. [Capacity reporting for GitLab Dedicated](https://gitlab.com/gitlab-com/gl-infra/capacity-planning-trackers/gitlab-dedicated)
1. [Service Maturity model](/handbook/engineering/infrastructure/service-maturity-model/) which covers GitLab.com's production services.
1. [GitLab.com availability reporting](/handbook/engineering/monitoring/): Provide underlying data and aggregate numbers

### Documentation

We recognize the need to provide technical documentation for teams using our observability services and platforms, as well as for our team's internal use.

Historically, we've provided reference documentation within the projects we own or contribute to, or in the [runbooks project](https://gitlab.com/gitlab-com/runbooks/-/tree/master/docs).
As these projects are scattered around, it is rather difficult to discover the various pieces of relevant documentation for our users.

As we reshape our documentation, we follow along with the following idea and principles:

1. The [Infrastructure Observability Documentation Hub](https://gitlab-com.gitlab.io/gl-infra/observability/docs-hub/) is the entrypoint for any observability related documentation we provide.
1. Carefully crafted documentation is a core product for the observability platform, not an afterthought.
1. We think of the documentation hub as a way to communicate about observability interfaces we offer as a platform with everyone in Engineering.
1. We strive to provide documentation like guides and tutorials targeted for specific audiences - in addition to reference documentation.
1. We use the documentation hub also to explain concepts and architecture for our team's internal use to create a common understanding and empower everyone to contribute in all areas.

#### Where do we keep different types of documentation?

There are different types of documentation, which belong in different places.

| What?                                                        | Where?                      |
|--------------------------------------------------------------|-----------------------------|
| Team organisation, processes and other team level agreements | GitLab Handbook (this page) |
| Technical reference documentation for standalone projects    | On the project itself, and linked to the Documentation Hub      |
| How do we at GitLab make use of the projects we maintain?    | Documentation Hub           |
| How does our GitLab specific architecture look like?         | Documentation Hub           |
| Tutorials, guides, FAQs and conceptual explanations          | Documentation Hub           |

Documentation outside the Documentation Hub should be linked from it (that's why we call it a *hub*) and vice versa, to help increase discoverability.

This recognizes the need to ship reference documentation with the respective project, as we would expect to see for any project (whether open source or not).
The benefit here is that a change in functionality can also update reference documentation in the same merge request.

On the other hand, how we make particular use of these projects in our stack is too specific to ship with the project itself.
Often, we want to understand the bigger picture and how projects play together.
This is out of scope for technical documentation that ships with a certain project itself and hence we put this information on the documentation hub instead.

For our internal use, we use the documentation hub to help us reason about the services we own and how we operate them.
We expect this helps everyone on the team and helps us gather a common understanding as we have different roles and perspectives on the team.

A recommended read on different types of documentation and how to organize it is the [Divio Documentation System](https://docs.divio.com/documentation-system/).

#### How do we create documentation?

As we reshape and build documentation, the documentation hub benefits from each and all contributions:

1. Explain existing concepts
1. Link together existing documentation
1. Consolidate existing documentation and move in the right places
1. Writing and graphics on system architecture and operational principles

We aspire to create and maintain documentation as a primary citizen and similar to the [Handbook First](/handbook/company/culture/all-remote/handbook-first/) mindset.
For example, instead of answering specific questions from team members individually (for example on Slack), we can take this as an opportunity to write a piece of documentation and ask them to review and work with that.

### Indicators

The group is an owner of several performance indicators that roll up to the Infrastructure department indicators:

1. [Service Maturity model](/handbook/engineering/infrastructure/service-maturity-model/) which covers GitLab.com's production services.
1. [Capacity Planning](https://gitlab-com.gitlab.io/gl-infra/observability/docs-hub/capacity-planning/introduction/) uses capacity warnings to prevent incidents.

These are combined to enable us to better prioritize team projects.

An overly simplified example of how these indicators might be used, in no particular order:

* Service Maturity - provides detail on how trustworthy the data we received from observability stack in relation to the service; the lower the level the more focus we need to improve the service observability
* Capacity Planning - Provides a forecast for a specific service

Between these different signals, we have a relatively (im)precise view into the past, present and future to help us prioritise scaling needs for GitLab.com.

### Provisioned Services

The team are responsible for provisioning access to the services listed below, as per the [tech_stack.yml](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) file.

1. **Kibana** is accessed through Okta. Team members need to be in either of the following Okta groups: `gl-engineering` (entire Engineering department); `okta-kibana-users`. The latter group is used to manage access for team members outside of Engineering on an ad-hoc basis ([context](https://gitlab.com/gitlab-com/business-technology/change-management/-/issues/958)). Team members should be (de)provisioned through an Access Request ([example](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/28421)). If the access request is approved, the provisioner should add the user to [this group](https://groups.google.com/a/gitlab.com/g/okta-kibana-users), which will then automatically sync to its namesake group in Okta.
1. **Elastic Cloud** is for administrative access to our Elastic stack. The login screen is available [here](https://cloud.elastic.co/) and access is through Google SSO. Team members should be (de)provisioned through an Access Request ([example](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/28457)). If approved, the provisioner can add/remove members on the [membership page](https://cloud.elastic.co/account/members) with appropriate permissions to the instances they require access to.
1. **Grafana** is accessed through Okta. The login screen is availabile [here](https://dashboards.gitlab.net).  Any GitLab team member can access Grafana.  Provisioning and deprovisioning is handled through Okta.

## How we work

We default to working inline with the GitLab [values](/handbook/values/) and by following the processes of the wider [SaaS Platforms section](/handbook/engineering/infrastructure/platforms/project-management/) and [Scalability group](/handbook/engineering/infrastructure/team/scalability/#how-we-work).
In addition to this, listed below are some processes that are specific, or particularly important, to how we work in Observability.

### Roadmap

We transparently prioritize our Roadmap in this [issue](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1295).

### Project Sizing

Projects will be staffed by at least three engineers from the team, and preferably from both SRE and BE roles.  This will allow us to share knowledge and keep projects moving forward when people are unavailable.

### Issue management

While we mainly operate from the [observability issue tracker](https://gitlab.com/gitlab-com/gl-infra/observability/team/-/issues), there are other projects under the `gl-infra` group team members are working on.
Hence we strive to use group-level labels and boards to get the entire picture.

#### Labels

All issues pertaining to our team have the `~"team::Observability"` label.

All issues that are within scope of current work have a `~board::build` or `~board::planning` label.
This is a measure to cut through noise on the tracker and allows us to get a view on what's currently important to us.
See Boards below on how this is being used.
All issues require either a Service label or the team-tasks, discussion, or capacity planning labels.

#### Assignees

We use issue assignments to signal who is the DRI for the issue.
We expect issue assignees to regularly update their issues with the status, and to be as explicit as possible at what has been done and what still needs to be done.
We expect the assignee of an issue to drive the issue to completion.
The assignee status typically expresses, that the assigned team member is currently actively working on this or planning to come back to it relatively soon.
We unassign ourselves from issues we are not actively working on or planning to revisit in a few days.

#### Boards

The Observability team's [issue boards](https://gitlab.com/gitlab-com/gl-infra/observability/team/-/boards/) track the progress of ongoing work.

We use [issue boards](https://gitlab.com/gitlab-com/gl-infra/observability/team/-/boards/) to track the progress of planned and ongoing work.

| **Planning** | **Building**|
|--------------|-------------|
| [Planning Board](https://gitlab.com/groups/gitlab-com/gl-infra/-/boards/7339171) | [Build Board](https://gitlab.com/groups/gitlab-com/gl-infra/-/boards/7339070) |
| Issues where we are investigating the work to be done. | Issues that will be built next, or are actively in development. |
| ![Triage](/images/engineering/infrastructure/team/scalability/project-management/label-triage.png) <br/>![Proposal](/images/engineering/infrastructure/team/scalability/project-management/label-proposal.png) <br/>![Ready](/images/engineering/infrastructure/team/scalability/project-management/label-ready.png) | ![Ready](/images/engineering/infrastructure/team/scalability/project-management/label-ready.png) <br/>![In Progress](/images/engineering/infrastructure/team/scalability/project-management/label-in_progress.png) <br/>![Under Review](/images/engineering/infrastructure/team/scalability/project-management/label-under_review.png) <br/>![Verify](/images/engineering/infrastructure/team/scalability/project-management/label-verify.png) <br/>![Done](/images/engineering/infrastructure/team/scalability/project-management/label-done.png)|

#### Retrospectives

A team-level retrospective issue is created every 6 weeks, allowing the team to regularly reflect and to encourage a culture of continuous improvement. The creation of the retrospective issue is the responsibility of the Engineering Manager. You can find retrospectives [here](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/?sort=created_date&state=all&label_name%5B%5D=team%3A%3AScalability-Observability&label_name%5B%5D=Retrospective&first_page_size=100).

### Updates in Slack

We are using [GeekBot](https://app.geekbot.com/dashboard/w/184476) for weekly updates, which go to the #g_observability channel.

When posting updates, consider providing enough context (e.g. through links) so that interested team members are able to dive in on their own ([low context](/handbook/communication/#top-tips-and-best-practices)).

### Cost Management

For details on the daily operational costs of our observability services refer to the [Cost of Observability Stack](/handbook/engineering/infrastructure-platforms/production-engineering/observability/cost) documentation. This resource includes access instructions and cost breakdowns.

## History and Accomplishments

This section contains notes on team history and our accomplishments, but is not meant to be exhaustive.

* 2024-02, Capacity planning: [Proactive investigation of postgres CPU spike seen in saturation forecast](https://gitlab.com/gitlab-com/gl-infra/capacity-planning-trackers/gitlab-com/-/issues/1668#note_1807225359) uncovered a [database design issue](https://gitlab.com/gitlab-org/gitlab/-/issues/435250)
* 2024-03, Capacity planning: [Tamland predicted redis CPU saturation which led to Practices proactively scaling Redis](https://gitlab.com/gitlab-com/gl-infra/capacity-planning-trackers/gitlab-com/-/issues/1712) ([slides](https://docs.google.com/presentation/d/1y58mgaUrpu1dBO_bKVLfDUez9lz-ETLE7E1yksDjAbY/edit#slide=id.g2cc1c00d163_5_4))
* 2024-05, Metrics: [The migration from Thanos to Mimir was completed](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1107) which brought [significant improvements](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1107#outcome) in metrics accuracy and dashboard performance.

### Year-in-Review Issues

* [2024](https://gitlab.com/gitlab-com/gl-infra/observability/team/-/issues/4024)
