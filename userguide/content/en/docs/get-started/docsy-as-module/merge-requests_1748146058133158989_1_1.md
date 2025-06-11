---
title: Collaboration on merge requests experience
description: "Collaboration process and documentation for contributing to the merge requests experience"
---

## Background

**The merge request (MR) is the center point of collaboration for users in GitLab.** It's where code is reviewed, pipelines are run, testing and scanning results provided, and ultimately contributions are merged.

Any change to the MR experience is likely to affect the **duration of code review**, even small changes. Reducing the duration of code review is the [primary metric of success of the Code Review group](https://about.gitlab.com/direction/create/code_review_workflow/#metrics-of-success). This metric impacts the code quality and velocity of every user of GitLab.

Here in the [Code Review group](/handbook/product/categories/#code-review-group), we deeply care about the MR experience. We're the primary contributor to the MR experience, although many other groups have a stake in it. **Contributions over the years from different parties with no guidance and vision have resulted in a large amount of technical debt and deferred UX**. This page provides that much-needed guidance on how "everyone can contribute" sustainably to the MR experience.

## Want to contribute to the MR experience?

That's awesome! We love when other groups want to contribute to it. Here's an easy step-by-step of how to use this page:

1. Read the [background](#background) section above if you haven't already!
1. Read the [process introduction](#process) and then [how to get started](#getting-started).
1. Check if the problem your group wants to solve aligns with an established [contribution framework](#contribution-frameworks).
    1. If so, that's great! Follow the [established framework process](#established-framework).
    1. If not, don't worry, we got you covered. Follow the [no established framework process](#no-established-framework).

If you have questions ask us in [#g_create_code-review](https://gitlab.slack.com/archives/C01EMBKS5DW).

## Contribution frameworks

Some areas of the MR experience are the focus of impactful or frequent contributions from different groups. For those areas, we need **contribution frameworks**: guidelines on how to plan, design, and build solutions that are coherent and consistent with the current experience, from both user and technical perspectives. Contribution frameworks enable "everyone can contribute" while keeping a high-quality user experience, reducing technical debt and deferred UX, reducing collaboration costs, and increasing velocity.

Depending on the type of contribution your group is trying to make, various checks and information may need to be coordinated with us in the Code Review group. These are not intended to make us the arbiter of what can and can't be contributed, but to ensure broad alignment on a core area to the GitLab experience.

**These are the most overlapping areas where we've identified a need for contribution frameworks**:

1. MR widgets: [In progress](https://gitlab.com/groups/gitlab-org/-/epics/5710)
1. Source code rules: [In progress](https://gitlab.com/gitlab-org/gitlab/-/issues/328462)
1. Inline annotations: [In progress](https://gitlab.com/groups/gitlab-org/-/epics/5975)

### Need for a contribution framework

If the problem and solution your group wants to tackle have the potential to evolve, extend, and be leveraged by other groups in the future, a contribution framework might be needed. This can sometimes be the case when [no established framework](#no-established-framework) exists. The Code Review group collaborates with your group throughout the development flow to make decisions that will help start a new contribution framework. A new framework has **compounding effects**: your group can do its job better, we can collaborate better, and others (including your group) can use it in the future to build on everyone's work. Win win²!

## Process

The responsibility assignment matrixes below use the [RACI model](https://en.wikipedia.org/wiki/Responsibility_assignment_matrix) (Responsible, Accountable, Consulted, Informed) and map to the phases of our [product development flow](/handbook/product-development/product-development-flow/). Each phase has key participants, like a Product Designer, but for simplicity, we only specify the responsible groups.

- **Responsible**: Does the activities to complete the phase. The specific functions responsible for the activities are defined in the [product development flow](/handbook/product-development/product-development-flow/).
- **Accountable**: Approves the outcome of the activities. They are ultimately answerable for the correct and thorough completion of the phase.
- **Consulted**: Provides input on the activities as subject-matter experts or as impacted by the work. There is two-way communication.
- **Informed**: Needs to be kept in the loop on progress, rather than roped into the details of every activity. There is just one-way communication.

### Getting started

All contributions begin with the _Validation backlog_ and _Problem validation_ phases. During these phases, the Code Review group should be **Informed** of upcoming validation activities and **Consulted** during problem validation. These are important opportunities to collaborate with us and ensure that the MR is the optimal place to solve the problem.

[What do R, A, C, and I mean?](#process)

| Phase | Your group | Code Review group | Description |
| ----- | ---------- | ----------------- | ----------- |
| Validation backlog | R,A | I | Your group has the appropriate freedom as **Responsible** and **Accountable**, as it's too early to know if a problem is worth solving through the MR experience. But, in the cases where your group _assumes_ that the MR experience _could be_ the right avenue to address the problem at hand, we only ask to be **Informed**, so one-way communication. |
| Problem validation | R,A | C | We're **Consulted**, meaning that we can point you to existing research, similar problems, and more. We care about this phase because it's our chance to influence how much of the MR experience could be affected by potential solutions. Your group may be biased going into problem validation, assuming that the MR is the place for the solution, which can then bias the validation results. |

At the end of this phase, we will work with your group to determine if the path you're on fits into an [established framework](#established-framework) or if [no established framework](#no-established-framework) exists.

### Established framework

If the problem your group wants to solve aligns with an established [contribution framework](#contribution-frameworks). In these cases, the collaboration overhead is kept to a minimum and your group is **Accountable** for most phases. The Code Review group is only **Consulted** in the _Design_ and _Develop & Test_ phases to help your group make the most out of the framework.

During or after the product development flow, your group is **Responsible** for contributing any learnings and changes back to the established contribution framework. We approve these changes, to ensure that they can be sustainably leveraged by future contributors.

[What do R, A, C, and I mean?](#process)

| Phase | Your group | Code Review group |
| ----- | ---------- | ----------------- |
| Design | R,A | C |
| Solution validation | R,A | I |
| Plan | R,A | I |
| Develop & Test | R,A | C |
| Launch | R,A | I |
| Improve | R,A | I |
| **Contribute to established contribution framework** | R | A |

### No established framework

If the problem your group wants to solve **does not** align with an established [contribution framework](#contribution-frameworks), that's okay. Not all problems adhere to or need a contribution framework. But in these cases, the Code Review group needs to be more **Consulted** and **Accountable** in your group's work.

This adds some collaboration overhead, which sometimes is needed, but it can often be mitigated by a contribution framework. That's why we (your group and Code Review) will discuss the [need for a contribution framework](#need-for-a-contribution-framework).

[What do R, A, C, and I mean?](#process)

| Phase | Your group | Code Review group | Description |
| ----- | ---------- | ----------------- | ----------- |
| Design | R | A | Your group is **Responsible** for carrying out the necessary work in this phase, but we're **Accountable** for the outcome — in other words, we approve the outcome. This is because we're ultimately responsible for a coherent and consistent MR experience, not only for our _users_ but also for _other contributors_ that could be impacted by the changes or wish to leverage them in the future. |
| Solution validation | R | A | Same as the previous phase. |
| Plan | R,A | C | We help your group break down things and coordinate with other groups (for example, another group could be introducing "conflicting" changes at the same time). |
| Develop & Test | R | A | Like in the _Design_ phase, we're **Accountable** in this phase as we're also responsible for the _developer_ experience. This should already be the case, as we "default to requests for a maintainer with [domain expertise](https://docs.gitlab.com/development/code_review/#domain-experts)" (from [Code review guidelines](https://docs.gitlab.com/development/code_review/#the-responsibility-of-the-reviewer)). |
| Launch | R,A | I |  |
| Improve | R,A | I |  |
| **(Optional) Start new contribution framework** | R | A | During or after the product development flow, [if a new contribution framework is needed](#need-for-a-contribution-framework), your group is **Responsible** for starting it. We approve the framework, to ensure that it can be sustainably leveraged by future contributors. |
