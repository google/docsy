---
title: "Request Customer Zero Validation from Security"
description: "Guidelines for Product Managers to engage GitLab's Security Team as Customer Zero throughout the feature development lifecycle."
---

## Customer Zero Overview

Customer Zero Validation is the process where the Product Security Team acts as the first customer for new security features. Our hypothesis is simple: **if we can use GitLab's security features effectively, then many of our customers can too.**

The Issue Board tracking these requests can be found [here](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-requests/-/boards/9306316).

## Request Types

Product Managers or Engineering Teams can engage with the Product Security Team during different phases of feature development through four distinct request types. To streamline our collaboration, we've created specific Issue Templates for each one that help you provide the initial information we need to begin our evaluations.

### Idea/Priority Validation

**Purpose:** To determine if your proposed feature solves a genuine problem for the Product Security Team, and understand its relative priority.

**When to use:** Early in your product planning cycle, when you have a concept or idea but need to validate whether it addresses a real security need.

**Best practices:**

- Submit before investing significant resources in requirements development
- Include a clear problem statement that articulates the pain point
- Be open to feedback that might redirect or reshape your initial concept
- Use our feedback to inform your product roadmap priorities

**Click [here](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-requests/-/issues/new?description_template=C0_Idea_Priority_Validation) to submit this type of request.**

### Requirements Gathering

**Purpose:** To collect detailed requirements from the Product Security Team about what would make the feature valuable for our daily work.

**When to use:** After validating that your feature idea is worth pursuing, but before designing a specific solution.

**Best practices:**

- Submit after idea validation but before solution design
- Provide clear context about the problem you're solving
- Be specific about the intended user and use cases
- Use our feedback to ensure your solution design addresses our needs

**Click [here](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-requests/-/issues/new?description_template=C0_Requirements_Gathering) to submit this type of request.**

### Solution Validation

**Purpose:** To verify that your proposed design and implementation will address the Product Security Team's requirements and integrate effectively into our workflows.

**When to use:** After designing your solution approach but before beginning implementation.

**Best practices:**

- Include mockups, wireframes, or detailed descriptions of the user experience
- Use our feedback to refine your solution before development begins

**Click [here](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-requests/-/issues/new?description_template=C0_Solution_Validation) to submit this type of request.**

### Internal Testing

**Purpose:** To test the feature in real-world scenarios and identify any functionality, usability, or integration issues before release.

**When to use:** After implementation but before public release, when the feature is functional enough for realistic testing.

**Best practices:**

- Ensure the feature is sufficiently developed for meaningful testing
- Provide clear setup instructions and testing scenarios
- Allow sufficient time to incorporate feedback before scheduled release
- Use our feedback to make final refinements and determine release readiness

**Click [here](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-requests/-/issues/new?description_template=C0_Internal_Testing) to submit this type of request.**

## Timeline Expectations

The Product Security Team is excited to partner with you to make GitLab's security features the best they can be! While we strive to accommodate all requests as quickly as possible, our response timelines follow these Service Level Objectives (SLOs):

- **Requests received at least 10 calendar days before the next milestone starts**: We'll provide feedback within the next milestone
- **Requests received later than 10 days before the next milestone starts**: Our response will typically be provided in milestone+2

This advance notice helps us allocate capacity to provide you with the most thorough and valuable feedback. For critical features, consider engaging with us early and through multiple request types for the best collaborative results.

## Remember

Our hypothesis is that if the Product Security Team can successfully use GitLab's security features, then our customers can too. Customer Zero Validation is how we test that hypothesis and deliver complete, valuable security capabilities from day one.

## Frequently Asked Questions

**Q: If we'd like to involve the Product Security Team during every phase of feature development, should we open one issue for the feature or one issue per request type?**

**A:** We'd want and need one issue per [request type](#request-types). You're welcome to link them, but the reason is we expect that plans will change throughout the product development lifecycle. We need to ensure we're operating on current information. Additionally, the level of detail should increase as time goes on (i.e., setup instructions will be known for internal testing, but rarely before).
