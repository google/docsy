---
title: "Automotive Development"
description: "The Automotive Development Working Group is a cross-functional group focused on gathering requirements and providing product support for automotive development use cases."
status: active
---

## Attributes

| Property        | Value                                                                                                                                             |
|:----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------|
| Date Created    | 2023-04-29                                                                                                                                        |
| Target End Date | TBD                                                                                                                                    |
| Slack           | [#wg_automotive_development](https://gitlab.slack.com/archives/C057WU9SK61) (only accessible from within the company)   |
| Google Doc      | [Working Group Agenda](https://docs.google.com/document/d/1U30_tsJqTvVMCikGFhLnHk6VWD8Q1cOPCXCzcR-hAZE/edit) (only accessible from within the company) |

## Goal

The Automotive Development Working Group is a cross-functional group focused on gathering requirements and providing product support for automotive development use cases.

### Overview

With the increasing focus on software-defined cars, traditional automotive OEMs are shifting away from contracted software and towards in-house development. Iteration, efficiency and compliance have to be squared with complex development workflows using a wide array of proprietary development tools. GitLab with its built in versioning, CI/CD, security and compliance features is poised to become the leading platform for automotive development.

Automotive software development is characterized by a complex combination of:

1. embedded development close to the kernel
1. using a wide array of proprietary development tools ([Autosar](https://www.autosar.org/), [Matlab](https://www.mathworks.com/products/matlab.html)/ model driven development) whose outputs need to be orchestrated, integrated and automated
1. based on huge repositories with a large number of artifact-like binary files
1. thus very long pipeline runtimes (due to repo checkout and artifact handover between stages) measured in terms of hours
1. complex QA requirements with deployments into custom hardware test clusters
1. compliance requirements regulated by [ASPICE](https://www.automotivespice.com/) including long-term versioning and pipeline reproducibility requirements measured in years to decades ("Baselining") as well as traceability of changes and dependency / license management (SBOM)
1. Strong focus on application lifecycle management

### Goals

- Establish GitLab as the leading platform for automotive software development
  - Capture requirements, use cases and product gaps in collaboration with major automotive customers
  - Close product gaps and develop blueprints for automotive development workflows
  - Obtain [TISAX](https://portal.enx.com/en-us/tisax/) certification
  - Develop solutions for [ASPICE](https://www.automotivespice.com/) compliance
- Enable Sales and CS to drive customer value and growth based on the developed solutions
  - Provide Sales/SA/CSM enablements on automotive development use cases
  - Develop a Sales strategy for automotive customers

### Exit Criteria

1. Top 10 product gaps for automotive customers identified and go-forward plans for each defined
1. Established Automotive Customer Advisory Board / Automotive Round Table
1. Solution blueprints successfully deployed in 5 major automotive customers

## Roles and Responsibilities

| Working Group Role      | Username        | Person                                                                   | Title                                                           |
| :---------------------- | :-------------- | ------------------------------------------------------------------------ | :-------------------------------------------------------------- |
| Executive Stakeholder   | @david| David DeSanto | Chief Product Officer |
| Functional Lead Compliance | @hbenson | Hillary Benson | Senior Director of Product Management, Sec, Monitor, & Data Science |
| Functional Lead Verify | @jreporter | Jackie Porter | Director of Product Management, Verify & Package |
| Functional Lead Alliances | @DarwinJS | Darwin Sanoy | Principal Solutions Architect, GitLab Alliances |
| Working Group DRI             | @mbruemmer | Martin Brümmer | Customer Success Engineer |
| Facilitator                  | @bmarnane  | Bartek Marnane | VP of Incubation Engineering at GitLab |
| Facilitator                  | @fsieverding  | Falko Sieverding | Customer Success Manager |
| Facilitator                  | @jesswang_gitlab  | Jess Wang | Customer Success Manager |
| Facilitator                  | @vchacon  | Vianney Chacon Madriz | Customer Success Manager |
| Facilitator                  | @jgaetjens  | Julia Gätjens | Solutions Architect |
| Facilitator                  | @svij  | Sujeevan Vijayakumaran | Solutions Architect |
| Facilitator                  | @Heddy2022  | Hedayat Paktyan | Strategic Account Leader |
