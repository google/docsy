---
title: Investigations
description: Operations documentation page for doing a research spike or feasibility investigation
canonical_path: "/handbook/security/customer-support-operations/docs/gitlab/investigations"
---

## Introduction

As we look at different ways of doing things, our operating question should be "How?". An investigation issue is an opportunity to
come up with creative solutions to solving the challenging problems our business faces.

The outcome of an investigation issue is an artifact that will help a DRI make an informed decision on a topic where there may be tradeoffs or nuance involved.

## Performing an investigation

There's no set way to go about this, but rather a loose set of guidelines.

1. Right size your effort: the idea isn't to _solve_ the problem but build personal expertise and a portfolio of possible solutions.

2. Consider commercial solutions: development and maintenance costs are not always worth it! If there's an off-the-shelf solution, it should be considered.

3. Consider Dogfooding: if there's a feature of our product that can be used it should be seriously considered.

4. Document critical blockers early: If you discover a fundamental issue that would prevent a particular approach from working, document it immediately rather than continuing down that path.

5. Consider sustainability: Evaluate how solutions will scale with increased load and what maintenance burden they'll create over time. Factor in dependencies on third-party systems and their stability.

6. Consult stakeholders: Talk to the people who will be using or affected by the solution. Their insights into daily workflows and pain points are invaluable.

7. Consider boring solutions: Favor proven, simple approaches over novel or complex ones. The most reliable solutions are often those with established track records, even if they seem less exciting. Balance implementation timeline, security requirements, and resource constraints accordingly.

## Deliverables

A good engineering investigation should produce:

1. Executive Summary: A concise overview highlighting key findings and recommendations.

2. Approach Analysis: Evaluation of each potential solution including pros, cons, and resource requirements.

3. Recommendation: A clear suggestion for the path forward with supporting rationale.

4. Implementation Considerations: High-level notes on how the recommended approach would be executed.

5. Open Questions: Any unresolved issues that require further investigation.

Remember, the goal is to provide decision-makers with the information they need to choose the best path forward, not to make the final decision yourself at the point of the investigation.

### Example Template

The following is just an example template to help you get started. Please modify it as is appropriate to the situation.

```markdown

## Engineering Investigation / Research Spike - Template: Modify as needed

### Executive Summary

[1-2 paragraphs summarizing the investigation, key findings, and critical concerns. Highlight any significant risks or "dealbreakers" that would make certain approaches unviable.]

**Critical Issues Alert:** [Highlight any showstopper issues in a distinct section]

### Problem Statement

[Clearly define the problem being solved and why it matters]

- **Current Situation:** [Describe the current state]

- **Goals:** [What we're trying to accomplish]

- **Success Metrics:** [How we'll measure success]

- **Stakeholders:** [Who is affected by this decision]

### Commercial Solutions

[Evaluate existing products or services that could address the problem]

#### Solution 1: [Product/Vendor Name]

**Description:** [Brief explanation of the product and how it addresses our needs]

**Features:**

- [Key feature 1]

- [Key feature 2]

- [Key feature 3]

**Pricing Model:**

- [License costs, subscription fees, or pricing tiers]

- [Implementation or professional services costs]

- [Ongoing maintenance or support costs]

**Pros:**

- [Benefit 1]

- [Benefit 2]

**Cons:**

- [Drawback 1]

- [Drawback 2]

**Vendor Assessment:**

- **Company Stability:** [Assessment of vendor's market position and longevity]

- **Support Quality:** [Information about support options and responsiveness]

- **Integration Capabilities:** [How well it integrates with existing systems]

- **Customer References:** [Feedback from other customers if available]

#### Solution 2: [Product/Vendor Name]

[Same structure as Solution 1]

### Custom Approach Options

#### Option 1: [Name of Approach]

**Description:** [Brief explanation of what this approach entails]

**Implementation Details:**

- [Key technical components required]

- [Integration points]

- [Architecture considerations]

**Pros:**

- [Benefit 1]

- [Benefit 2]

- [Benefit 3]

**Cons:**

- [Drawback 1]

- [Drawback 2]

- [Drawback 3]

**Resource Requirements:**

- **Estimated Development Effort:** [Low/Medium/High or story points/time]

- **Maintenance Overhead:** [Low/Medium/High]

- **Dependencies:** [Other systems, teams, or external factors]

**Risks:**

- [Risk 1: Impact and mitigation strategy]

- [Risk 2: Impact and mitigation strategy]

#### Option 2: [Name of Approach]

[Same structure as Option 1]

#### Option 3: [Name of Approach]

[Same structure as Option 1]

### Comparative Analysis

| Criteria | Commercial Solution 1 | Commercial Solution 2 | Custom Option 1 | Custom Option 2 | Custom Option 3 |
|----------|-----------------------|-----------------------|-----------------|-----------------|-----------------|
| Development Time | [Rating] | [Rating] | [Rating] | [Rating] | [Rating] |
| Maintenance Complexity | [Rating] | [Rating] | [Rating] | [Rating] | [Rating] |
| Scalability | [Rating] | [Rating] | [Rating] | [Rating] | [Rating] |
| Performance | [Rating] | [Rating] | [Rating] | [Rating] | [Rating] |
| User Experience | [Rating] | [Rating] | [Rating] | [Rating] | [Rating] |
| Security | [Rating] | [Rating] | [Rating] | [Rating] | [Rating] |
| Cost | [Rating] | [Rating] | [Rating] | [Rating] | [Rating] |

### Recommendation

[Clear statement of recommended approach with justification]

### Implementation Roadmap

[If applicable, high-level steps for implementing the recommended approach]

1. [Step 1]

2. [Step 2]

3. [Step 3]

### Open Questions

[List any unresolved questions that need further investigation]

### Appendix

[Any supporting information, diagrams, code examples, or references]

```
