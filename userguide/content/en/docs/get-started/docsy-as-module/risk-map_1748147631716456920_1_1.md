---
title: Runner Group - Risk Map
description: "The goal of this page is to document a general risk map for the Runner group."
---

## Overview

The goal of this page is to create, share and iterate the Risk Map for the Runner team.

### Goals

Utilise the Risk Map as a tool to:

- Understand the risks the team faces
- Increase transparency on mitigation plans
- Effectively allocate limited resources
- Collaborate strategically in improving Quality

### General Risk Map

#### Map key

- Impact - what happens if the risk is not mitigated or eliminated
- Impact level - Rate 1 (LOW) to 5 (HIGH)
- Probability - Rate 1 (LOW) to 5 (HIGH)
- Priority - Impact x Probability. Address highest score first.
- Mitigation - what could be done to lower the impact or probability                  |

| Risk Area              | Risk Description                                        | Impact                                      | Impact Level | Probability | Priority | Mitigation                                                       |
|------------------------|---------------------------------------------------------|---------------------------------------------|--------------|-------------|----------|------------------------------------------------------------------|
| Team/Stability         | Burn out  | Low productivity and attrition              |   |  |  | Minimise overloading and blockers  |
| Team/Scaling           | Inefficient team member onboarding                      | Prolonged low productivity  |  |   |  | Clear onboarding guidance and prioritisation    |
| Team/Expertise         | Concentration of knowledge                              |   |    |    |          | Documenting process and knowledge    |
| Quality/Coverage       | Uncertain test coverage                                 | Escaped bugs   |   |   |    | Test coverage analysis and coverage automation  |
| Quality/Coverage       | Sufficient test coverage exercising binaries across supported compute architectures and OSes | Escaped bugs, damage to reputation by inability to claim support due to lack of test coverage   |   |   |    | Integration-level test environment and respective test framework |
| Quality/Coverage       | Sufficient test coverage exercising released images     | Escaped bugs, damage to reputation due to inability to claim releases were tested | | | | Integration-level test environment and respective test framework |
| Quality/Infrastructure | Ability to effectively test at release                  | Escaped bugs   |   |   |    | Reference platforms and standard test harness                    |
| Feature/Dependencies   | Bugs in third party dependencies                        | Bugs triage, escaped bugs, Failure to execute pipelines  | | | | Sufficient test coverage against latest supported version |
| Feature/Compatibility  | Changes in third party dependencies                     | Bugs triage, escaped bugs, Failure to execute pipelines  | | | | Testing against multiple dependency versions |
| Feature/Function       | Functional requirements not met for teams at scale      | Low customer satisfaction for key customers | | | | |
| Team/Workload          | Toil work     | Small tasks that should take a few minutes take hours, putting a backlog on reviews/deliverables |              |             | | |
| Team/Scaling           | Slow pipelines                            | Take a long time to get feedback on a pipeline and for maintainers to merge something  |              |             || |
| Feature/Delivery       | Technical debt                            | When we have so much technical debt it's hard to deliver a feature on time.  |              |             |||
| Feature/Delivery       | Slow deployment process                   | Context switching on a feature that you merged weeks ago |              |             | | |
| Feature/Dependencies   | Not updating 3rd party code               | Result in bugs or slow feature delivery since we have to update a bunch of dependencies first |    | | | |
| Observability          | Lack of standard on logging | When debugging a problem in production it can be hard to shift through logs if you can't see what is going on in the application ||| | |
| Observability          | Metrics/Dashboards                        | Hard to debug and understand what is going with production |              |             | | |
| Feature/Compatibility  | Insufficient testing on supported cloud platforms | Inability to claim compatibility and feature failures on customer runners | | | | Integration-level test environment and framework |
