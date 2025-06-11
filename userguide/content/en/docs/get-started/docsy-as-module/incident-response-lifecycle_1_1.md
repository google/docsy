---
title: "Incident Response Lifecycle"
description: "The Incident Response Lifecyle working group is intended to document a shared incident response protocol and knowledgebase."
---

## Attributes

| Property     | Value |
|--------------|-------|
| Date Created | February 01, 2022 |
| Target End Date   | April  30, 2022 |
| Slack        | [wg-incident-respose-management-framework](https://gitlab.slack.com/archives/C02UMD8S8NM) |
| Google Doc   | [Incident Response Management Working Group](https://docs.google.com/document/d/1SwbD-Vbt813DUtS5VaXWI7p80yE5rqyNBwJFwmVT_Ko/edit#) (internal) |
| Issue Label | WG-IRM (gitlab-com/-org) |

## Business Goal

1. Increase [efficiency](/handbook/values/#efficiency) through common incident response, analysis, documentation, ongoing management and reporting methods.
1. Increase [transparency](/handbook/values/#transparency) through improving visibility and communication of incidents to business and e-group
1. Support [results](/handbook/values/#results) by building our clients' confidence in GitLab's ability to quickly resolve and communicate incidents when they occur
1. Align Incident Management activities and priorities with those of the business
1. Prepare materials for the creation of training modules for the Engineer Department on the Incident Management Process at GitLab
1. Highlight dogfooding opportunities

## Exit Criteria

1. Single source of truth documenting incident response management that will be applicable to all areas of Engineering and teams who provide Incident Response
   - Each functional area of Engineering will develop their own Incident management requirements for identifying and reacting to service outages or security threats.
1. Create a comprehensive knowledge base for GitLab team members to help them understand how incident response teams implement the IR process

## Outcome

1. Help teams across GitLab lower MTTR

## Other Investigations

1. Improvements in feedback and learnings from Incident to build resiliance
1. Service Catalog

### What do other companies do?

- [Pagerduty Response docs](https://response.pagerduty.com/)

### How is IR done today?

1. SIRT
   - [Incident Response Guidance](/handbook/security/product-security/vulnerability-management/incident-response-guidance.html)
   - [Engaging Security Engineer On-Call]({{< ref "engaging-security-on-call" >}})
   - [GitLab SIRT On-Call Guide]({{< ref "secops-oncall" >}})
1. [On-call](/handbook/engineering/on-call/)
1. Reliability
   - [Incident Management](/handbook/engineering/infrastructure/incident-management/)
1. Support
   - [How to Perform CMOC Duties](/handbook/support/workflows/cmoc_workflows/)
   - [Contacting Customers](/handbook/support/internal-support/#contacting-customers-via-tickets)
   - [Sending Notices](/handbook/support/workflows/sending_notices/) (small number of users)

### Noted issues

## Related Issues

## Roles and Responsibilities

| Working Group Role  | Person           | Title                                  |
|---------------------|------------------|----------------------------------------|
| Facilitator         | [Anna Liisa Moter](@amoter)| Manager Reliability|
| Exec Sponsor        | [Steve Loyd](@sloyd)      | VP Infrastructure                          |
| Member              | [Anthony Fappiano](@afappiano)          | Manager Reliability                   |
| Development Functional Lead | [Dan Croft](@dcroft) | Senior Engineering Manager, Ops |
| Member              | [Sam Goldstein](@sgoldstein) | Director of Engineering, Ops |
| Member (CMOC)       | [Kenneth Chu](@kenneth) | Support team  |
| Member              | [Kevin Chu](@kbychu)    | Group Manager of Product, Monitor |

## Requirements and Considerations

### Actors

- Reliability Engineers
- SIRT Engineers
- Development Team
- Quality Team
- Support Team

### General

- As a GitLab team member who can raise an incident, I know how incident can be initiated
- As a GitLab team member who can raise an incident, I have a general understanding  about incident severity levels
- As a GitLab team member who can raise an incident, I understand the high level process of Incident Management and its importance to the business
- As a GitLab team member who can raise an incident, I can contact the right team via dedicated slack channel.
- As a GitLab team member who can raise an incident, I can easily find a page in the handbook that documents the Incident Response Procedures

#### SIRT Engineer

- As a SIRT Engineer I know how to pull relevant resources from other teams  when I need assistance
- As a SIRT Engineer I can easily categorized the incident
- As a SIRT Engineer I can identify triggers and indicators
- As a SIRT Engineer I know where to document the incident details
- As a SIRT Engineer I know when to transitions from Incident identification, to mitigation, to remediation, and post to incident activities
- As a SIRT Engineer I can follow a reporting process to handoff incidents, or provide updates to Management

#### Reliability Engineers

- As a Reliability Engineer, I know how to level an incident in a manner that is consistent across the org
- As a Reliability Engineer, I know how to engage the other roles during an incident
- As a Reliability Engineer, I know when to transition from Incident identification, to mitigation to resolution and post-incident activities

#### Development Team

- As a leader in Development who is part of the Incident Manager rotation, I am clear on the role's responsibilities and how the role supports the Incident Management process.

#### Quality Teams

#### Support Team

- As a Support Engineer, I know how to create a status page
- As a Support Engineer, I know the differences between the Incident Status states on the status page
- As a Support Engineer, I know how frequently to update the status page
- As a Support Engineer, I know how to engage the Incident Manager or EOC when asking about feedback for an update I am about to post on the status page
- As a Support Engineer, I know how notify the stakeholders
- As a Support Engineer, I know how to find related tickets in Zendesk and the GitLab issue tracker to help access the impact of an incident
- As a Support Engineer, I know how to contact users if their usage of GitLab SaaS was restricted due to an incident
