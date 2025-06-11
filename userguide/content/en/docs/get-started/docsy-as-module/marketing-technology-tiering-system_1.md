---
title: "Marketing Technology Tiering System"
description: "The purpose of the Marketing Technology Tiering System is to support the Marketing organization in identifying and understanding the technology utilized across the department."
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## Purpose

The purpose of the Marketing Technology Tiering System is to support the Marketing organization in identifying and understanding the technology utilized across the department in order to build a best-in-class, integrated, and efficient marketing tech stack. Additionally, by classifying marketing technology into tiers, GitLab's Marketing Operations team will be in a better position to prioritize requests, provide support, and optimize processes.

## Scope

The Marketing Technology Tiering System is applicable to any software, tool, or technology that is, at least partially, paid for by the Marketing department.

## Tiers

There are four tiers of technology within the Marketing Technology Tiering System:

- Business Critical Technology - Tier 1
- Operational Technology - Tier 2
- Management Technology - Tier 3
- Functional Technology - Tier 4

## Criteria Categories

Tools in the marketing tech stack are scored based on the following criteria:

|  | Business criticality | Integrations | Risk |
|--|----------------------|--------------|------|
| High - 3 | Directly or indirectly affects revenue generation and/or marketing KPIs, requires constant availability for effective business operation. | Integrates with multiple other business critical systems in the marketing tech stack and/or requires custom or complex integrations to a single other system. | Disruption results in an immediate and significant impact on critical business functions or customer service; and/or legal implications. |
| Medium - 2 | Affects efficiency or cost of operation. | Integrates with one other business critical system in the marketing tech stack and/or does not require custom or complex integrations. | Disruption affects operational business functions, negatively impacting efficiency/cost of operation across departments or subteams. Workarounds are available in the short term. |
| Low - 1 | Affects GitLab team members on an individual basis. | Does not integrate with other business critical system in the marketing tech stack. | Affects GitLab team members at an individual level (e.g. individual productivity). |

## Scoring Methodology

The combined score of all three criteria categories determines a tool's tier:

- Score Range: 8-9 = Business Critical Technology - Tier 1
- Score Range: 5-7 = Operational Technology - Tier 2
- Score Range: 3-4 = Management Technology - Tier 3
- Not scored = Functional Technology - Tier 4

## List of Tools by Tier

A list of tools in the marketing technology stack can be found [here](/handbook/marketing/marketing-operations/#-marketing-technology-stack).

## Roles and Responsibilities

Every tool, regardless of tier, should have at least one `business owner` and at least one `technical owner`. All `Business Critical Technology - Tier 1` tools will have a technical owner on the Marketing Operations team. Any `Operational Technology - Tier 2` tool that scores a 3 in any of the criteria categories will have a technical owner on the Marketing Operations team. `Operational Technology - Tier 2` tools that do not score a 3 in any of the criteria categories are responsible for identifying a technical owner within their function.

A member of the Marketing Operations team will be the technical owner for `Management Technology - Tier 3`. While these tools score lower in the criteria categories, they help support the broader Marketing department.

`Functional Technology - Tier 4` tools are owned and managed within a specific function. Marketing Operations does not provide support (neither business nor technical) for these tools.

The SSoT for `business owner` and `technical owner` is the [GitLab Tech Stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml). **Please note that we are currently updating the business and technical owners listed in the GitLab Tech Stack and there may be disparities. If you have questions during this update, please reach out in #mktgops on Slack.**

### Business and Technical Owner Roles and Responsibilities

| Area | Business Owner Responsibilities | Technical Owner Responsibilities |
|------|---------------------------------|----------------------------------|
| Business Outcomes | Understands and documents the desired business outcomes of using the tool and drives toward these outcomes in collaboration with stakeholders including the technical owner, vendor contacts, internal users, etc. | Builds and manages the processes (including integrating the tool with the rest of the tech stack) that drive toward the desired business outcomes, as defined by the business owner. |
| User Management | N/A | Owns user management, which includes provisioning/deprovisioning and user audits. |
| Renewals | Initiates and manages the renewal process, including recommending new features, descoping, replacement, etc. | Approves any changes in scope of the tool, including consideration of replacement. |
| Contact with vendor | Primary point of contact with vendor including facilitating standing syncs, business reviews, etc. | Point of contact to resolve bugs and technical issues. |
| Training and Enablement  | Trains users on general best practices and use cases. | Trains users on technical processes. Owns documentation and governance. |
| Measurement and Benchmarking | Determines how success is measured. | Builds reports or enables business owner to create reports within the tool to help show success.  |
| Optimizations | Stays up to date with product releases. Submits requests for optimizations.  | Stays up to date with product releases. Scopes, approves, and project manages optimization requests. |

### Tier-Specific Expectations

| Area | Business Critical Technology - Tier 1 | Operational Technology - Tier 2 | Management Technology - Tier 3 | Functional Technology - Tier 4 |
|------|-------------|-------------|-------------|-------------|
| Budget | TBD | TBD | TBD | TBD |
| Renewal timing | Renewal discussions should start 6 months before the contract expires. | Renewal discussions should start 4 months before the contract expires. | Renewal discussions should start 4 months before the contract expires. | Renewal discussions should start 4 months before the contract expires. |
| Evaluation, Replacement, and Implementation | Require at least 6 months from evaluation to implementation.<br><br> A member of the marketing operations team will be the DRI of the evaluation and implementation process. This person is typically the technical owner of the tool that is being replaced and will be the technical owner of the new tool.| Require at least 4 months from evaluation to implementation. <br><br> The technical owner is the DRI of the evaluation and implementation. If the technical owner is not a member of the marketing operations team, a member of the marketing operations team will be involved in a consultative role, specifically as it relates to the rest of the marketing tech stack. <br><br>**Net-new Tier 2 tools and Tier 2 tool replacements require marketing operations approval**. | Recommended at least 2 months from evaluation to implementation. <br><br>The marketing operations team should be informed prior to any changes. | Recommended at least 2 months from evaluation to implementation. |
| Support | All Tier 1 tools will have a technical owner on the marketing operations team who is the internal point person for technical support. The technical owner also works with the vendor to provide support when necessary. <br> <br>P0: The Marketing Operations team prioritizes technical support for Tier 1 tools. | P1: Marketing operations provides technical support and is the technical owner for any Tier 2 tool that receives a 3 on any of the criteria categories. <br> <br>Technical owners for Tier 2 tools that do not receive 3 in any of the criteria categories are typically also the business owner. <br><br>P2: Marketing operations provides limited support to Tier 2 tools that do not receive 3 in any of the criteria categories. | P3: While Marketing Operations team members are the technical owner, they provide limited technical support for Tier 3 tools, due to the scope and nature of these tools. | Marketing operations does not provide support for Tier 4 tools. |
