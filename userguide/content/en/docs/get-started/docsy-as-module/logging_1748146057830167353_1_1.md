---
title: "Logging Working Group"
description: "The GitLab Logging Working Group will have multiple business purposes that you can read about on this page. Learn more!"
---

## Attributes

| Property     | Value |
|--------------|-------|
| Date Created | 2022-06-15 |
| Date Ended   | TBD |
| Slack        | [wg-glsecurity-logging](https://gitlab.slack.com/archives/C03JXV6KMFA) |
| Google Doc   | [Logging Working Group](https://docs.google.com/document/d/1vOQCWtF75J8zEiU5BV9HXggE72F8cP8KTYbMTj2tatM/edit#heading=h.6upuyp25d0wm) |
| Issue Label  | WG_Logging |

## Business Goal

1. Increase [efficiency](/handbook/values/#efficiency) by having a highly available simplified logging structure used by GitLab security to monitor, manage, detect, alert, respond, and audit events.
1. Increase [collaboration](/handbook/values/#collaboration) by having a simplified logging system for GitLab security to share and collaborate on events.
1. Increase [results](/handbook/values/#results) by having relevant and actionable data for GitLab Security to make more accurate and informed decisions to threats to GitLab

## Exit Criteria

1. Identify existing infrastructure, known gaps, and current security logging efforts as of August 2022.
1. Define a process for tracking existing, new, and retired security logging infrastructure.
1. Define logging profiles that include data requirements, storage, retention, and compliance / legal requirements.
1. Identify next steps, shared OKRs, other initiatives beyond the scope of the working group to carry the work forward.

## Outcome

## Other Investigations

[Moved Here](https://gitlab.com/gitlab-com/gl-security/security-operations/infrastructure-security/projects/security-logging/-/issues/3)

## Roles and Responsibilities

| Working Group Role  | Person           | Title                                  |
|---------------------|------------------|----------------------------------------|
| Facilitator     | Harjeet Sharma | Security Engineer, SIRT |
| Member              | Jeff Martin      | Senior IT Systems Engineer |
| Member              | Steve Manzuik | Senior Manager, Threat Management |
| Member              |Byron Boots |Senior Security Compliance Engineer  |
| Member              | Kyle Smith | Senior Security Assurance Engineer |
| Member              | Paulo Martins| Infrastructure Security Engineer |
| Member              | Jayson Salazar| Staff Security Engineer, Security Automation |
| Member              | Dan Croft | Senior Engineering Manager, Ops |
| Member              |  |  |

## Requirements and Considerations

### Actors

- Security Operations
- Infrastructure Security
- Product Security
- IT Engineering
- Infrastructure
- Development
- Product
- Legal
- Quality

### General

- As a GitLab team member, I know there is a single team I can talk to about all things being logged at GitLab.
- As a GitLab team member, I can find who is on the logging team by visiting a single handbook page.
- As a GitLab team member, I can contact the logging team via dedicated slack channel.
- As a GitLab team member, I can label GitLab issues for the logging team.
- As a logging team member, I only have one set of logging services/infrastructure to manage and maintain.

#### Security Assurance

- As a Security Assurance team member, I can easily find, search, view, and analyze logs up to 12 months old

#### SIRT Engineer

- As a SIRT Engineer, I can easily find, search, view and analyze logs for up to 1 year
- As a SIRT Engineer, I can retrieve archived log sources that are over 1 year old and be able to easily search, view and analyze those logs
- As a SIRT Engineer, I can easily create rules, alerts and dashboards for Incident Response.
- As a SIRT Engineer, I can find in the handbook information about log sources inluding:
  - The DRI's responsible for each log source
  - The format of each log source
  - The fields recorded in each log source
- As a SIRT Engineer, I am able to easily integrate logging data into other SIRT tools for fast, accurate and reliable Incident Response

#### Infrastructure Security

- Collection
  - As an Infrastructure Security Engineer, I need it to be easy for anyone to setup and ship audit logs from their infrastructure or third party tools to a centralized location
  - As an Infrastructure Security Engineer, I need to be able to easily export findings from IDS tools
- Delivery
  - As an Infrastructure Security Engineer, I need our logs to be scalable, consistent and reliable (no broken timestamps, no loss of data)
- Retention
  - As an Infrastructure Security Engineer, I need our logs to comply with [Retention & Disposal Requirements](/handbook/security/standards/records-retention-deletion/#retention--disposal-requirements-procedure), compliance with internal policies, standards, and regulatory requirements
- Monitoring and Alerting
  - As an Infrastructure Security Engineer, I need to be able to easily analyze logs and threat findings for one or more infrastructure resources
  - As an Infrastructure Security Engineer, I need to be able to create alerts on rules and anomalies from my logs
- Change Management
  - As an Infrastructure Security Engineer, I need all the infrastructure and configuration to be managed as code (terraform, python, bash), and change management following the Merge-Request-Review process

### IT Engineering and Infrastructure

- As an IT Engineer, I can easily add a tech stack application or vendor SaaS service to the logging service and start shipping logs to, as easily as we do for bug reporting with Sentry today.
- As an IT Engineer, I can configure basic downtime or high activity threshhold alerts that send to different notification services (email, Slack, GitLab issue, etc.)
- (Optional) As an IT Engineer, I can see end-to-end system logs to investigate all affected or related systems during an incident by simply changing the data source from a drop down menu, while retaining or easily re-creating the same search criteria (actor, IP, date range, etc).
- As an IT Engineer, I can create a hierarchical organization of services that are logged to support related technologies that allows us to create alerts and dashboards for a group of interconnected services.
- As an IT Engineer, I want to support for multiple instances of the same product/service without having to re-create each instance and all policies by hand.
- As an IT Engineer, I am concerned about integration of new technologies and reliance on vendors to add support for integrations several months or years later, or requiring Professional Services. I would prefer to an open API ecosystem approach that encourages our products/service providers to build integrations with our logging and monitoring provider.
- As an IT Engineer, I want to be able to use API calls, configuration management, and/or IaC (Terraform/Ansible) to standardize configurations and provisioning.
- As an IT Engineer, I do not want to have to create a dashboard or alert for every request that a team member has. The platform should be easy to use from a building query and report perspective, comparable to building a pivot table in Excel or a report in Tableau/SiSense with easy-to-identify fields. Complex SQL query language is useful behind the scenes, but discourages adoption of proactive alerting and is only useful for specific queries during incident triage.
- As an IT Engineer, I want to see this program evolve into a organization-wide NOC dashboard for our broader Tech Stack applications and services that each team supports.
