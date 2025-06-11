---
title: "Geo and Disaster Recovery"
description: "Information about the Geo Team"
---

## The Geo Team

[Geo](https://docs.gitlab.com/ee/administration/geo/index.html) is a [Premium](https://about.gitlab.com/pricing/premium/) feature, built to help speed up the development of distributed teams by providing
one or more read-only mirrors of a primary GitLab instance. This mirror (a Geo secondary node) reduces the time to clone or fetch large
repositories and projects, or can be part of a Disaster Recovery solution.

### Team members

{{< team-by-manager-slug manager="luciezhao" >}}

### Stable counterparts

{{< stable-counterparts role="Geo" manager-role="Fullstack Engineering Manager, Geo" >}}

## Goals and Priorities

Our priorities are aligned with the product direction. You can read more about this on the [Geo Product Vision page](https://about.gitlab.com/direction/geo/).

Alongside the items listed in our Product Vision, we need to constantly assess issues that our customers bring to our
attention. These could take the form of bug reports or feature requests. Geo users are often our largest
customers and some rely on Geo as a critical part of their workflow.

We also work constantly to keep housekeeping chores to a manageable level. Where possible, we address these issues
as part of a related project. Where this is not possible, we use time around our projects to make this happen.

## Objectives and Key Results (OKRs)

Every quarter the engineering team sets [objectives and key results](/handbook/company/okrs/#what-are-okrs). OKRs are managed in GitLab as of FY24-Q1. The following are links to issues lists for Geo's OKRs.

[OKRs FY25-Q2](https://gitlab.com/gitlab-com/gitlab-OKRs/-/issues/?sort=created_date&state=opened&label_name%5B%5D=group%3A%3Ageo&milestone_title=FY25-Q2&first_page_size=20)
[OKRs FY25-Q3](https://gitlab.com/gitlab-com/gitlab-OKRs/-/issues/?sort=created_date&state=opened&label_name%5B%5D=group%3A%3Ageo&milestone_title=FY25-Q3&first_page_size=20)

## Geo's Relationship to Disaster Recovery

Disaster Recovery (DR) is a set of policies, tools and procedures put in place to be able to recover from a disaster.

Geo provides data redundancy. The customer will have a redundant copy of data in a separate location. If anything were to happen to their primary instance, a secondary instance still retains a copy of the data.

However, data redundancy is only one part of a complete DR strategy.

High Availability (HA) is also a step towards Disaster Recovery. At the moment Geo does not provide true HA because if the primary instance is not available, certain actions are not possible.

## How to ask for support from Geo

The first line of support will always be the support engineer assigned to the issue raised by the customer. However, at times more expertise is required to resolve the customer concern and a Geo engineer needs to be involved.
This section outlines the process and expectations when requesting support from the team for Geo-related customer support issues.

### Before requesting support

Before submitting a request for support, please review Geo's [documentation](https://docs.gitlab.com/ee/administration/geo/), the [Disaster Recovery](https://docs.gitlab.com/ee/administration/geo/disaster_recovery/) docs, the [Backup and Restore](https://docs.gitlab.com/ee/administration/backup_restore/) docs, the Geo Handbook pages, or search through previous customer issues in the [Geo Customers Project](https://gitlab.com/gitlab-com/geo-customers). The answer to your questions might be found there. **Please reach out in the Geo Support Pod Channel `#spd_pod_geo` first before submitting a RFH.**

### Asking a general question

If you have a general question for which you can't find your answer, then feel free to ask your question in the [#g_geo](https://gitlab.slack.com/archives/C32LCGC1H) channel on Slack. Please keep in mind that engineers will do their best to support you and answer your question from the top of their heads. If they need to do more research and/or address more complicated scenarios, you will need to create a support issue (see next section).

### Create a support request issue

We like to use issues when customers need help from the Geo Team. This helps us to prioritize work and make sure that we don't lose history and maintain context when the Slack retention policy activates.
We ask requestors to create an issue in the [Geo Customers Project](https://gitlab.com/gitlab-com/geo-customers).

Please make sure to use and fill the [Geo support request issue template](https://gitlab.com/gitlab-com/geo-customers/-/blob/master/.gitlab/issue_templates/Support%20Request%20-%20Geo.md) for Geo related questions and [Backup and Restore support request issue template](https://gitlab.com/gitlab-com/geo-customers/-/blob/master/.gitlab/issue_templates/Support%20Request%20-%20Backup%20and%20Restore.md). As the requestor you **only** need to fill the Customer Info and Support Question sections.

Other than the [Collaboration template](https://gitlab.com/gitlab-com/geo-customers/-/issues/new?issuable_template=Support%20Request%20-%20Collaboration), RFHs must be opened by Support Engineers once a support ticket has been opened.

**At minimum Zendesk links and logs are especially important. The issue will not enter our normal triage process if they are missing. If no update has been made on an issue for 2 weeks, they will be auto closed by the EM/PM/Assignee.**

We also have a process for triaging RFH issues, please see [process](/handbook/engineering/infrastructure-platforms/tenant-scale/geo/process/#engineering-customersupport-rotation-process)

If you like, you may assign a priority label to your request. A geo team member or the PM will review this priority assignment during the triage of the issue. Please use the table below as a reference of priority levels and expected response times.

| Priority | Typically used for | Expected first response time |
| ---      | ---   |  ------  |
| P4          | General questions that can't be answered on slack by Geo engineers of the top of their heads and will require a bit more investigation. | 2-3 days |
| P3          | Customer problems that are not time sensitive (i.e. they have an easy work around) or scheduling time to engage with the customer in the future for them to achieve their goals. | 1 day |
| P2          | Customer problems that are somewhat time sensitive and are blocking decisions or progress to be made on the customer side. | 1/2 day |
| P1          | Fires and emergencies that the customer is experiencing | 1-2 hours |

\* Response times are based on weekdays (excluding holidays) within regular business hours in the time zones that team members are located.

\* Outages and other urgent matters should be channeled through GitLab's [incident management](/handbook/engineering/infrastructure/incident-management/) processes.

## Common Links

### Documentation

- [Geo](https://docs.gitlab.com/ee/administration/geo/index.html)
- [Disaster Recovery](https://docs.gitlab.com/ee/administration/geo/disaster_recovery/index.html)
- [Planned Failover](https://docs.gitlab.com/ee/administration/geo/disaster_recovery/planned_failover.html)
- [Background Verification](https://docs.gitlab.com/ee/administration/geo/disaster_recovery/background_verification.html)
- [Geo Glossary](https://docs.gitlab.com/ee/administration/geo/glossary.html)

### Issue Lists

#### Missing type labels

The following links lead to Geo team lists of issues to help with identifying missing subtype labels. After opening each link, select the desired milestone filter.

- [Issues missing the type label](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=created_asc&state=all&amp;not%5Blabel_name%5D%5B%5D=type%3A%3A%2a&label_name%5B%5D=group%3A%3Ageo&milestone_title=15.6&first_page_size=20)
- [Features issues missing subtype label](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=created_asc&state=all&label_name%5B%5D=type%3A%3Afeature&label_name%5B%5D=group%3A%3Ageo&milestone_title=15.6&amp;not%5Blabel_name%5D%5B%5D=feature%3A%3A%2a&first_page_size=20)
- [Maintainance issues missing subtype label](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=created_asc&state=all&label_name%5B%5D=type%3A%3Amaintenance&label_name%5B%5D=group%3A%3Ageo&milestone_title=15.6&amp;not%5Blabel_name%5D%5B%5D=maintenance%3A%3A%2a&first_page_size=20)
- [Bug issues missing subtype label](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=created_asc&state=all&label_name%5B%5D=type%3A%3Abug&label_name%5B%5D=group%3A%3Ageo&milestone_title=15.6&amp;not%5Blabel_name%5D%5B%5D=bug%3A%3A%2a&first_page_size=20)

### Other Resources

- Issues relating to Geo are mostly to be found on the
[gitlab-ee issue tracker](https://gitlab.com/gitlab-org/gitlab-ee/issues/?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=Geo)
- [Chat channel](https://gitlab.slack.com/archives/g_geo); please use the `#g_geo`
chat channel for questions that don't seem appropriate to use the issue tracker
for.
- [Geo YouTube Playlist](https://www.youtube.com/playlist?list=PL05JrBw4t0KoY_6FXXVgj7wPE9ZDS4cOw)
- [Product Support Requests](/handbook/product/product-processes/#product-support-requests)
- [Geo on staging.gitlab.com](staging.html)

## Planning and Process

Our planning and build process is recorded on the [process page](process.html).

## Demos

The demos are recorded and should be stored in Google Drive under "GitLab Recorded Videos --> Geo Demos".
If you recorded the demo, please make sure the recording ends up in that folder.

## Geo Terminology

See the [Geo Glossary](https://docs.gitlab.com/ee/administration/geo/glossary.html).

## Dashboards

{{< tableau height="600px" toolbar="hidden" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/TopEngineeringMetrics/TopEngineeringMetricsDashboard" >}}
  {{< tableau/filters "GROUP_LABEL"="geo" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/MergeRequestMetrics/OverallMRsbyType_1" >}}
  {{< tableau/filters "GROUP_LABEL"="geo" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/Flakytestissues/FlakyTestIssues" >}}
  {{< tableau/filters "GROUP_NAME"="geo" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/SlowRSpecTestsIssues/SlowRSpecTestsIssuesDashboard" >}}
  {{< tableau/filters "GROUP_LABEL"="geo" >}}
{{< /tableau >}}
