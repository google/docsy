---
title: "Product Security Requirements"
description: "How we integrate Product Security team requirements into the GitLab product"
---

## Integrating Product Security Team Requirements

Product Security teams at GitLab have responsibilities and processes that require engineering effort to perform or operationalize. The Product Security Engineering team is responsible for building solutions that suit Product Security team needs.

Ideally these solutions will be contributed in the form of material improvements to GitLab, since we aim to drive down GitLab's software security risks by securing GitLab with GitLab. In doing so, we enable Product Security teams to dogfood GitLab functionality, identify improvements that additionally help our customers, and reduce the need for tooling developed outside of the product.

## Goals

- Satisfy the needs of GitLab Product Security teams
- Improve the GitLab product, adding functionality and features that directly impact product security teams
- Make impactful contributions to the GitLab product quickly and iteratively, minimizing organizational friction and overhead
- Increase Product Security sub-department use of GitLab features in day-to-day operations and processes

## Pilot and Integration Engineering

The processes described on this page are the building blocks for the Product Security Engineering team to move towards distinguishing two core engineering focus areas: Pilot and Integration Engineering.

### Pilot Engineering

Pilot Engineering is defined as the work required to deliver the desired outcome as quickly as possible, with modest regard to typical GitLab Engineering standards. This does not mean low-quality engineering: documentation, automated testing, minimizing tech debt, and other best practices are still expected with this work.

The following are some examples where Pilot Engineering work would tend to be less-than-ready for contribution:

- Design, user experience, and interface
- Comprehensive production readiness
- API, identity, and role based access control compatibility
- Product vision and roadmap alignment

In building in-house tools that exist outside of the GitLab product, some Product Security teams have already delivered work that can be considered Pilot Engineering. These tools are actively used by the Security division to perform certain responsibilities and deliver on commitments. The incorporation of those existing tools into the GitLab product is considered Integration Engineering, and is being tracked [in this epic](https://gitlab.com/groups/gitlab-com/gl-security/-/epics/291) following [the process described here](/handbook/security/product-security/security-platforms-architecture/product-security-engineering/#tooling-integration-work).

### Integration Engineering

Integration Engineering is the effort required to take Pilot Engineering work and contribute the features and functionality to GitLab itself.

The expectation is that Product Security Engineering will be responsible for maintenance and extension of these functionalities and features until a formalized handover to a GitLab Product team occurs, as indicated in the processes described on this page.

## Process

When a Product Security team identifies a need that is not satisfied by the current GitLab product or an existing tool, the process below will be followed.

### Planning

- Requesting team submits an issue using [this template](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-engineering/product-security-engineering-team/-/issues/new?issuable_template=product_security_requirement) in the [Product Security Engineering team repository](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-engineering/product-security-engineering-team)
- The Product Security Engineering team follows their defined refinement workflow, while collaborating with the requesting team to understand the requirements
- A decision is made as to whether Product Security Engineering should build the solution, if we should wait for a GitLab development team to implement it, or if it should be purchased externally
  - If the decision involves Product Security Engineering action, it will be scheduled into an upcoming Milestone based on priority, urgency, and capacity
- A decision is made as to whether or not the feature or functionality is to be put behind a GitLab Product Security specific feature flag, indicating it is initially meant to be used exclusively by the GitLab Product Security team
  - The intent of such a feature flag is to ensure that product fit and customer usability does not prevent the implementation of functionality required by GitLab Product Security teams
  - This will require discussion among all stakeholders, and be documented in the requirement request issue
  - This will require that a handover and transition plan is agreed upon by the Product Security Engineering team and the relevant GitLab Product and Engineering managers

### Development and Release

- The Product Security Engineering team will implement the requirements as part of their regular workflow, observing established GitLab contribution standards
- If the feature or functionality is determined to be exclusively for use of the GitLab Product Security team, it will be put behind a feature flag explicitly for this purpose
  - The standard [feature flag process and requirements](/handbook/product-development/product-development-flow/feature-flag-lifecycle/) will be followed
- The Product Security Engineering team will own, maintain, and support the feature or functionality depending on the need for a Product Security specific feature flag or other decisions made during planning

### Ownership, Maintenance, and Transition

This section describes the ownership, maintenance, and transition of product contributions made to satisfy GitLab Product Security team requirements.

- To the extent that implemented capabilities are contained exclusively within GitLab Product Security owned namespaces and/or enabled exclusively for GitLab Product Security teams, the Product Security department will be responsible for maintenance and upkeep
  - The team primarily responsible for this will be the Product Security Engineering team, supported by the requesting team where possible
  - This applies to features and functionality that are for the exclusive use of the Product Security teams, which may be appropriate if:
    - The requirement is very specific to the GitLab Product Security team and would have little external value, with one indicator being a very low [Reach score](/handbook/product/product-processes/#using-the-rice-framework)
    - The requirement is inconsistent or incongruent with current Product vision
    - The requirement needs to incubated by the GitLab Product Security team for other reasons
  - The Planning process will require that stakeholders from the requesting Product Security team, the Product Security Engineering team, and the relevant Product and Engineering teams discuss and collectively make a decision with regards to the need to put the feature or functionality behind a Product Security specific feature flag
- As features and functionality become enabled for and available to users outside of the GitLab Product Security team, an agreed-upon transition will happen to handover ownership and maintenance
  - Standard GitLab processes and expectations around [support for expertiment, beta, and generally available features](https://docs.gitlab.com/ee/policy/development_stages_support.html) will be followed
  - General availability will constitute a complete transfer of ownership responsibilities, although handovers may occur earlier

## Build vs. Wait vs. Buy

For a Product Security team requirement, there are three possible actions that can be taken:

| Action | Description |
| --- | --- |
| Build | The GitLab Product Security Engineering team should plan to build the solution |
| Wait | Based on a planned or in-flight effort owned by a GitLab development team, we will wait for them to implement a solution |
| Buy | A third-party vendor tooling or solution may be purchased to satisfy the requirement |

When evaluating a potential action, keep in mind that there may be a hybrid approach that could be an opportunity for cross-team collaboration. In some cases, the Product Security Engineering team may be able to parallelize an in-flight effort.

### Evaluating an action

Below is a list of considerations for each potential action, with an inexhaustive list of benefits and drawbacks for each one.

#### Considerations for Build

##### Benefits

- We have more control over the solution, can focus on building a minimal valuable change that directly satisfies the requirement
- We can start building immediately (depending on urgency, capacity, and priority)
- Product and Engineering teams can focus on other roadmap items to deliver value to customers
- We are contributing to the product, likely solving for a need that some customers have
- Enables dogfooding of Security-persona focused features within the Product Security sub-department

##### Drawbacks

- There is an opportunity cost (what are we not doing in choosing to work on this?)
- This may be too slow of an option, depending on team capacity and the urgent of the requirement
- For parts of the product that is new to the Product Security Engineering team, there is higher overhead for context building (decreased efficiency, potential for tech debt)
- The solution we arrive at may differ from the Product/Engineering team's vision or ideal solution

#### Considerations for Wait

##### Benefits

- The Product Security Engineering team can focus on making other contributions
- Product Security can be an early adopter, provide shorter feedback loops, participate in usability studies, or otherwise offer insights that help development teams deliver better results for customers
- Enables dogfooding of Product features within the Product Security sub-department
- Promotes cross-team collaboration and interaction via discussions and feedback

##### Drawbacks

- We may have to wait longer for the solution to become available, depending on timelines
- Priority for the Product teams may change, resulting in a slower or indefinite delivery of the solution
- The solution may not be an exact fit, and may still require further iteration or extension from the Product Security Engineering team

#### Considerations for Buy

##### Benefits

- The requirement may not fit into the GitLab product, conflict with the product vision, or not be capable within the product (resulting in build being an unviable action, and buying being the only option)
- It may be a more robust, feature-rich solution compared to something that gets built into the product or created as an in-house tool
- Depending on functionality and requirements, procurement may be faster than building internally
- Vendor-provided services and support may be more efficient, enabling teams to focus on other efforts

##### Drawbacks

- A valid third party solution may or may not exist (or may be excessive in scope)
- Recurring financial commitment to procure and support the tool
- We may find ourselves reliant on the tool and unable to easily change solutions or switch to an eventual in-house offering
- Does not result in product contributions or deliver results for customers via product improvements
- Does not enable Product Security teams to dogfood the product
- Likely reduces the amount of time Product Security teams spend in GitLab products, reducing cross-collaboration and feedback opportunities

## Team Responsiblities

The table below describes the responsibilities for each stakeholding team that may be involved in this process.

| Team | Responsibility |
| --- | --- |
| Product Security teams | Submitting requirement issues, participating in refinement and solution validation discussions, providing feedback |
| Product Security Engineering | Refining submitted requirements and potential solutions, facilitating discussions and decision-making with other stakeholders, implementing + maintaining + supporting solutions until handover occurs |
| GitLab Product and Engineering Managers | Participating in discussions around solutions + ownership + transition, eventually owning functionality and features after handover |

## Tips and Tricks

### Sunset Roadmaps

A sunset roadmap describes the phases and steps needed to move functionality from custom tooling into GitLab. It provides a high-level overview to leadership that answers "what needs to happen so we can secure GitLab _with_ GitLab, instead of with this custom tooling". These steps are optional guidance, not prescriptive.

1. Create a "Sunset Roadmap" issue in the tool's issue tracker when you create the project.
    1. As functionality is added to the tool, update the sunset roadmap. Remember to keep it high level. Technical detail can live elsewhere, like the README.
1. If the tool has no existing sunset issue, or the existing one is out of date, perform a gap analysis of functionality between GitLab and the custom tooling
    1. Identify the stakeholders that use the tool and involve them early - they can point you to relevant context quickly, and might need to remain informed of sunsetting efforts.
    1. The gap analysis might identify requirements that neither the tooling nor GitLab currently meet. These don't need to be added to the Sunset Roadmap.
1. Identify any GitLab issues and/or architectural blueprints that describe plans the product team might have for GitLab functionality
1. Segment the work into "phases".
    1. Each phase has the steps needed to move a piece of functionality into GitLab. It will include at least two steps: adding to GitLab, and removing from the custom tooling
    1. Link to existing issues, epics, blueprints
    1. Each phase should state "This phase is complete when ...".
    1. Consider any process changes that might be required.
1. Open [sunsetting issues](/handbook/security/product-security/security-platforms-architecture/product-security-engineering/#sunsetting-issues) as needed. Each issue is intended to describe a piece of functionality required to deprecate the custom tool, which may align with a particular sunsetting roadmap phase or a culmination of phases.
1. Have the Sunset Roadmap peer reviewed
1. Inform a Product Security Manager that the Roadmap is ready for prioritization. This too can follow the same "Build vs. Wait vs. Buy" process documented above.

Example:

1. https://gitlab.com/gitlab-com/gl-security/product-security/product-security-engineering/product-security-engineering-team/-/work_items/60/ is an example of a Gap Analysis on two ProdSecEng tools
1. https://gitlab.com/groups/gitlab-com/gl-security/-/epics/294#sunset-roadmap is an example of a Sunset Roadmap created after the Gap Analysis
