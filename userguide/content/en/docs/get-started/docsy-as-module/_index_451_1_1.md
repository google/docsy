---
title: "Application Security"
description: "The application security team's mission is to support the business and ensure that all GitLab products securely manage customer data."
---
<!-- markdownlint-disable MD052 -->

## Application Security Mission

As part of the Product Security department, the application security team's mission is to support the business and ensure that all GitLab products securely manage customer data. We do this by working closely with both engineering and product teams.

## Contacting us

Team members can reach the AppSec team by:

- Finding your Stable Counterpart on the [Product sections, stages, groups, and categories](/handbook/product/categories/) page
- Mentioning `@gitlab-com/gl-security/product-security/appsec` on GitLab
- Submit an issue in the [AppSec Team repository](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/appsec-team/-/issues)
- Asking in `#sec-appsec` or mentioning `@appsec-team` on Slack
- For cross team collaboration improvement opportunities, use [this template for collaboration improvement opportunities](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/appsec-team/-/issues/new?issuable_template=cross-team-collaboration-improvement)

## PTO

Team members that are taking PTO for 5 days or more [must create a PTO coverage issue](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/appsec-team/-/issues/new?issuable_template=pto_coverage) to organise their coverage during their time off. The PTO coverage issue should :

- List any potential requests that could come to the team while on PTO
- The team member taking PTO shoud organise their work accordingly and ensure the PTO coverage issue contains the context required to handle the work
- Assign primary and secondary responsible team members

AppSec team members should add any important information related to the work they are covering for the person on PTO and AppSec manager(s) should add any important announcement to see upon their return.

## Application Security Roadmap

Please see the [Product Security Program Strategy document](https://docs.google.com/document/d/1Mba9ZhuVr2qBkvR7AqzNTUFMUTapJqiXkPUqc9Gr8io/edit).

## Roles & Responsibilities

Please see the [Application Security Job Family page](/job-families/security/application-security).

## Useful resources for AppSec engineers

- [The AppSec private group that contains other private subgroups and projects](https://gitlab.com/gitlab-com/gl-security/product-security/appsec)
- [The `appsec-lab` group on Staging. This has an Ultimate license.](https://staging.gitlab.com/appsec-lab)
- [Bug bounty council search](https://gitlab.com/gitlab-com/gl-security/engineering/-/issues?label_name%5B%5D=Bug+Bounty+Council)
- [Upcoming patch release](https://gitlab.com/gitlab-org/gitlab/-/issues?sort=created_date&state=opened&label_name%5B%5D=upcoming+security+release)
- [GitLab Project Security dashboard](https://gitlab.com/gitlab-org/gitlab/-/security/dashboard/?project_id=278964&scope=dismissed&page=1&days=90)
- [Security issue board that tracks ongoing issues (hackerone and others)](https://gitlab.com/groups/gitlab-org/-/boards/1216545?label_name[]=security)
- [The latest releases](https://gitlab.com/gitlab-org/gitlab/-/tags)
- [Overview of a project member permissions](https://gitlab.com/help/user/permissions)
- [The DevOps stages and their different groups](/handbook/product/categories/). This page contains information on the development teams, their areas of focus, and their team members as well as the AppSec stable counterparts. It is used to assign issues to the stable counterparts.
- [The product features listed by groups that own them](/handbook/product/categories/features/)
- [List of merged security issues in `gitlab-org`](https://gitlab.com/groups/gitlab-org/-/merge_requests?scope=all&state=merged&label_name[]=security&milestone_title=%23upcoming). **Note:** It can include results from the security mirror `gitlab-org/security/`.

The list above is not exhaustive and is subject to be modified as our processes keep evolving.

## Application Security KPIs & Other Metrics in Sisense

- For Embedded KPIs which you filter by section, stage, or group, please [see this page](https://10az.online.tableau.com/#/site/gitlab/views/appsectest2rawdata/AppSec-ApplicationandContainerVulnerabilityDashboard?:iid=4).

## General Role Functions

### Stable Counterparts

Please see the [Application Security Stable Counterparts page](/handbook/security/product-security/application-security/stable-counterparts/).

### Application Security Reviews

Please see the [Application Security Reviews page](/handbook/security/product-security/application-security/appsec-reviews/).

### RCAs for Critical Vulnerabilities

Please see the [Root Cause Analysis for Critical Vulnerabilities page](/handbook/security/root-cause-analysis)

## Application Security Engineer Runbooks

Please see the [Application Security Engineer Runbooks page index](runbooks)

## Meeting Recordings

The following recordings are available internally only:

- [AppSec Sync](https://drive.google.com/drive/folders/1sxnBhPNDofWg5JmKqrhEl5y4_aWldTbt)
- [AppSec Leadership Weekly](https://drive.google.com/drive/folders/1jyNYP2AOqoOPqr4qGMuh7PGha_j-7brb)

## Backlog reviews

When necessary a backlog review can be initiated, please see the [Vulnerability Management Page](/handbook/security/product-security/application-security/vulnerability-management/) for more details.

## GitLab Secure Tools coverage

As part of our [dogfooding effort](/handbook/product/product-processes/#dogfood-everything),
the [Secure Tools](https://docs.gitlab.com/ee/user/application_security/) are set up on many different GitLab projects (see our [policies](/handbook/security/product-security/application-security/inventory/#policies)).
This list is too dynamic to be included in this page, and is now maintained in the [GitLab AppSec Inventory](/handbook/product/ux/navigation/inventory/).

Projects without the expected configurations can be found in the [inventory violations list](https://gitlab.com/gitlab-com/gl-security/product-security/inventory/-/issues) (internal link).

## GitLab Inventory

Learn more about the [GitLab AppSec Inventory](/handbook/product/ux/navigation/inventory/).

## Responding to customer scan review requests

Please see the [Responding to customers security scanners review requests page](/handbook/security/product-security/application-security/responding-customers-scan-review-requests/)

## Reproducible Vulnerabilities

Learn how to identify or remediate security issues using real examples with GitLab's [Reproducible Vulnerabilities](/handbook/security/product-security/application-security/reproducible-vulnerabilities/).

## Reproducible Builds

Learn how GitLab is implementing [Reproducible Builds](/handbook/security/product-security/application-security/reproducible-builds/) for our build processes.

## Milestone Planning

The GitLab Application Security team plans work based around Milestones, see [this page for a description of that process](/handbook/security/product-security/application-security/milestone-planning/)

## Application Security Automation and Monitoring

Learn more about the automation initiatives that the Application Security team uses on the [Application Security Automation and Monitoring page](/handbook/security/product-security/application-security/application-security-automation-monitoring/)
