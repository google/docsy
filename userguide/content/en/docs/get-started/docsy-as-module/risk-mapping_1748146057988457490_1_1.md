---
title: "Risk Mapping"
description: "Developing a strategic approach to risk and mitigation planning."
---

The Quality Engineering Sub-Department helps facilitate the risk mapping process.
This requires the participation of Product Management, Development, UX, and the Quality team to develop a strategic approach to risk and mitigation planning.

### Goals

Utilise the Risk Map as a tool to:

- Understand the risks the counterpart team faces
- Increase transparency on mitigation plans
- Effectively allocate limited resources
- Collaborate strategically in improving Quality

### Risk Management

Risk Management is the process of identifying risks and their impact to all areas of the business and the organization. Identifying these risks could greatly assist teams in making and carrying out decisions that will minimize their adverse effects. By focusing attention on the risks and committing the necessary resources to control and mitigate them, a team will better protect itself from uncertainty as well as increase product stability, quality and performance.

The Risk Management cycle consists of six phases:

- Awareness
- Identification
- Evaluation
- Control
- Implementation
- Monitoring

## How to build a Risk Map

### General Risk Map

To raise awareness and start identifying risks, first create two lists - Areas and Facets. Example:

| Area |
| ------ |
| Team |
| Product |
| Infrastructure |
| UX |
| Quality |
| Community |
| Customers |
| ... |

| Facet |
| ------ |
| Expertise |
| Performance |
| Test Coverage |
| Migrations |
| Scalability |
| Stabilility |
| Experience |
| Data |
| ... |

Combine Areas and Facets to produce a table where each cell is an associated risk. Example:

| **Areas** | Team | Product | Infrastructure | UX | Quality | ... |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| **Facets** | ------ | ------ | ------ | ------ | ------ | ------ |
| Expertise | Concentrated domain knowledge |  | | | Insufficient SETs | |
| Performance | Burn out | Often miss SLO/SLAs | Outages |  | Flaky tests | |
| Test Coverage | |  | Test environment is hard to reproduce | |  | |
| Migrations | | Customers migrate with difficulties from previous product/platform | Database migrations often causes outages | |  | |
| Scalability |  | |  | | Downgrade of Quality efforts to meet demands | |

After naming the risks by integrating different Areas and Facets to help brainstorm, the next phase - Evaluation - requires understanding which impact it may cause and estimations on each risk's impact level and probability of ocurrence. The product of these two dimensions will determine the risk's score (the higher the score the higher the priority).

#### General Risk Map, an Example

#### Map key

- Impact - what happens if the risk is not mitigated or eliminated
- Impact level - Rate 1 (LOW) to 5 (HIGH)
- Probability - Rate 1 (LOW) to 5 (HIGH)
- Priority - Impact x Probability. Address highest score first.
- Mitigation - what could be done to lower the impact or probability

| Risk Area            | Risk Description                                             | Impact | Impact level | Probability | Priority | Mitigation |
| -------------------- | ------------------------------------------------------------ | ------ | ------------ | ----------- | -------- | ---------- |
| Team/Stability       | Burn out                                                     | Low productivity and attrition | 5 | 2 | 10 | |
| Team/Scaling        | Inefficient team member onboarding                           | Prolonged low productivity | 3 | 2 | 6 | |
| Team/Expertise       | Concentration of knowledge                                   | Missed SLO/SLA | 4 | 3 | 12  | |
| Customer             | Broken promises                                              | Reduced GMAU | 5 | 2 | 10 | |
| Customer             | Eroded trust with the community                              | Fewer community contributions | 5 | 1  | 5 | |
| Product/Scope        | Not enough knowledge about how the product is being used     | Reduced [METRIC] | 3 | 3 | 9 | |
| Product/Scope        | Increase of security vulnerabilities due to having many different areas of the product | Loss of confidence / revenue | 5  | 1 | 5 | |
| Product/Data         | User metrics and activity metrics are incomplete and hard to track | Inaccurate sensing data | 4  | 3 | 12 | |
| Quality              | Downgrade quality to meet maturity targets                   | Escaped bugs | 5 | 3 | 15 | |
| Quality              | Uncertain test coverage                                      | Difficult to prioritise test effort | 3 | 3 | 9 | |
| Feature/Performance  | Low performance due to _____      | Low customer satisfaction, reduced [METRIC] | 5  | 4 | 20 | |
| Feature/Testability  | Hard to drive real world test scenarios                      | Escaped bugs | 4 | 4 | 16 | |
| Feature/Dependencies | Cross-group work not being prioritised in a timely manner    | Delayed deliverables, reduced customer satisfaction, reduced team productivity | 3 | 3 | 9 | |

Teams can iterate on this exercise by expanding it to their Product Categories or even to the Feature level, having a more granular understanding of the risks.

### Risk Control

After evaluating the risk impact and probability, the Control and Implementation phases require to create mitigations for each risk in order to reduce the negative effects of its impact. Mitigations are strategies for planning work around the impact area. Some strategic ways to deal with risk are:

- Risk avoidance - used when the consequences are deemed too high to justify the cost of mitigating the problem.
- Risk acceptance - accepting a risk for a given period of time to prioritize mitigation efforts.
- Risk transfer - allocates risks between different teams, consistent with their capacity to protect against or mitigate the risk.
- Risk monitoring - keep track of projects and the associated risks for changes in the impact of the associated risks.

Tracking and monitoring risks and the work being done towards their mitigation is up to the team preferred workflow.

#### Risk Mapping Tool

The Risk Mapping Tool helps teams easily visualize risks and planned mitigations. Teams may implement this if desired to avoid having to manually create a risk map. It supports the risk mapping process which enables teams to be more transparent, collaborative and efficient when it comes to strategically improve  overall quality in a productive way.

Setting up the Risk Mapping Tool is not a requirement, but may be helpful for quick visualizations of risk status. If metrics are in place to measure risk status, the Risk Mapping Tool can more easily expose these.

The Risk Mapping Tool belongs to the Projects [maintained by Quality](/handbook/engineering/infrastructure/engineering-productivity/project-management/) and could be a part of the Quad-Planning process feeding into the [Test Governance](/handbook/engineering/infrastructure-platforms/developer-experience/test-governance/) practices by facilitating the test planning process with an initial risk analysis.

To install the Risk Mapping tool, please follow the [README](https://gitlab.com/gitlab-org/quality/risk-mapping-tool/-/blob/master/README.md) instructions.

If desired, a team or group could also manually input these in a [visual risk map](https://docs.google.com/presentation/d/1T_9mMQuBHeQzgXIZdV5asicW6h8z_10kbqJYswzJCjM/edit?usp=sharing). [Here's](https://docs.google.com/presentation/d/1d3RoC7Tp1qoQrv1sldjgC9Q0u5ODkSo50ECS0dS9XIo/edit?usp=sharing) an example of a complete visual risk map.
