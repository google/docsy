---
title: Security Division Dogfooding Program
---

## Introduction and Purpose

The Security Division plays a critical role in ensuring the security of GitLab as a company, and of GitLab as a platform. In the pursuit of its charter, the division is committed to using (["dogfooding"](https://en.wikipedia.org/wiki/Eating_your_own_dog_food)) GitLab as much as possible in order to help improve the platform for all customers.

This dogfooding program aims to improve the effectiveness and efficiency of collaboration between Product Management and Security as it pertains to capabilities of the GitLab platform.

Historically, dogfooding within the Security Division has not been handled through a formalized program which has likely limited the success of dogfooding efforts.

Historical challenges include:

1. No framework for how feature requests and GitLab inventions and innovations should be prioritized when they come from the Security Division. This has led to some feature requests being indefinitely deferred, and the creation of multiple custom built tools which are used internally, representing functionality GitLab users could otherwise benefit from.
1. No strategic or executive level view for product leadership to understand current adoption, challenges, and desires from the Security Division.
1. Breakage of security processes as a result of bugs, poorly communicated breaking changes, and possibly other causal factors.
1. Lack of support and structure to help security team members who desire to contribute to the product to adapt their code to the quality and technology standards required to build their tooling as part of the product.
1. Limited contributions from Security Division members as a result of not having an assigned learning track for how to effectively contribute quality code to GitLab.

### Desired Outcomes

These outcomes are all within the context of the Security Division. We will add links to the corresponding handbook pages as they are created.

1. Anyone at GitLab should be able to understand:
    1. How much of the GitLab platform is in use by the division.
    1. Which capabilities are used in their entirety, partially, or not at all by the division.

1. Product Management should be able to understand:
    1. Capabilities which are not used (in part, or in whole) because they don't meet operational requirements for the division
    1. Which feature requests are most important and critical to Security
    1. Which critical security activities rely on specific platform capabilities
    1. How to solicit feedback from any subset of the division with regard to new or updated capabilities
    1. What the division is planning to contribute to the product

1. Anyone within the Security Division should be able to understand:
    1. How to request a feature enhancement on behalf of the division and how to follow-up on that request.
    1. How to provide effective feedback to Product Management and Product Security Engineering.
    1. How to contribute quality code contributions back to the platform.
    1. Which custom tools are used by the division, and their rationale

### Program Leadership and Stakeholders

**Program DRI**: TBD

**Program Manager**: TBD

**Security Division Contacts**

- VP, Product Security: [Julie Davila](https://gitlab.com/juliedavila)
- Distinguished Security Architect: [Philippe Lafoucrière](https://gitlab.com/plafoucriere)
- Manager, Product Security Engineering: [Andrew Kelly](https://gitlab.com/ankelly)
- Principal Security Engineer: [Dominic Couture](https://gitlab.com/dcouture)

**Product Management Contacts**

TBD

## Current Dogfooding Status

As of FY25Q2, we are [evaluating our current utilization of GitLab features](https://gitlab.com/gitlab-com/gl-security/security-department-meta/-/issues/1761), enhancing communication between the Product and Security teams, and [developing metrics](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-engineering/product-security-engineering-team/-/issues/63) to track the Security team's transition towards using GitLab products instead of custom tools, as well as our contributions to the product development.

## Communication Cycles

1. Dogfood status reporting: Quarterly async updates
1. Critical PM escalations: ?
1. Requests for evaluations from PM to security

## Key Processes

### Management of Security Personas

GitLab maintains an [official list of Personas](/handbook/product/personas/) describing different types of GitLab users, their needs, and the way they interact with GitLab products. The Security Division has representation through several of these personas. When a Security division team member requests a particular feature or functionality to be integrated into the product, an assessment is performed to determine if it would be appropriate to create a new Persona or modify an existing one.

### Methodology for Dogfooding Assessment

#### Alignment with Product Stages and Information Hierarchy

The organization of the presentation layer of dogfooding data should be done in a way to maximize the efficacy of output. To this end, information will generally be presented in alignment with product stages in order to facilitate feedback loops that already mimic the mental models already prevalent across GitLab.

Unless pragmatism dictates otherwise, the output of dogfooding analysis should be organized by product stage.

#### Documenting Capabilities Used, Partially Used, and Unused

Used

1. Current satisfaction
1. Desired improvements

Partials

1. Partial because of limitations
1. Partial because of internal capacity

Unused

1. Due to limitations
1. Lack of awareness
1. Planned, not yet being worked on

### Management of Desired Product Capabilities

1. Feature requests
    1. Creation of user stories
    1. Establishing criticality of need
    1. Relevance to external customers
1. Considerations of build vs buy
    1. Wait for PM
    1. Delegate to product security engineering
    1. Hire contractors to build
    1. Purchase externally

### Management of in-house tooling

Security division teams should strive to make contributions to the product instead of creating custom in-house tooling.

When the decision is made to create custom tooling outside of the GitLab product:

1. Document the reasoning and decision to build custom tooling in the README
    1. When applicable, document what the minimum set of GitLab features required to sunset the tool are
        1. Include link to issues and create new issues for those that are missing
    1. Otherwise document why the custom tool doesn't fit in GitLab's vision and why we are not trying to build it as part of the product
1. Identify and document clear ownership of what team will be responsible for maintaining the custom tooling

#### Progressive sunsetting of in-house tools

When new features are added to the product they will sometimes only partially meet our requirements. We should still attempt to remove custom code and logic as much as possible.

Some possible examples of this are:

- Removing the monitoring of commits from our secrets monitoring tooling when the Secrets Push Protection feature is fully available
- Replacing the custom categorization of projects using YAML files in the [inventory](https://gitlab.com/gitlab-com/gl-security/product-security/inventory/) and replacing it with [Compliance Frameworks](https://docs.gitlab.com/ee/user/group/compliance_frameworks.html) labels when we can [assign multiple labels](https://gitlab.com/groups/gitlab-org/-/epics/13294)
- Use the [Dependencies API](https://docs.gitlab.com/ee/api/dependencies.html) instead of the inventory in [gem-checker](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/tooling/gem-checker) when the API becomes stable

In each situation the custom tool is still in use, but we dogfood more of the product and can give early feedback to the teams about what the issues are, if any.

### Management of critical security practices reliant on the GitLab platform

1. Assessments of breaking changes
1. Escalations for critical flaws/bugs introduced

### Evaluating and assessing updated or newly introduced platform capabilities

1. Discovery of new GitLab features
    1. Continuous communication with Product stakeholders
    1. Review of monthly release blog posts for minor and major versions to identify potential new beneficial features
1. Compare new features with the current needs of the division identified in the [Management of Desired Product Capabilities](#management-of-desired-product-capabilities) process
1. Loop back new information into [management of in-house tooling](#management-of-in-house-tooling) process
