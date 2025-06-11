---
title: "Pajamas Design Review Process"
description: "The roles of reviewer and maintainer in approving and merging merge requests in projects related to the Pajamas Design System, and how to become a maintainer."
---

## Overview

The Pajamas Design System is composed of various projects, where design reviews are mandatory:

1. [`design.gitlab.com`](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com)
1. [`gitlab-svgs`](https://gitlab.com/gitlab-org/gitlab-svgs)
1. [`gitlab-ui`](https://gitlab.com/gitlab-org/gitlab-ui)

This page describes the roles of [reviewer](#reviewer) and [maintainer](#maintainer) in approving and merging your (or a community member's) merge request (MR). It also describes the process for [becoming a maintainer](#how-to-become-a-maintainer).

## Reviewer

All GitLab Product Designers can (and are encouraged to) perform design and code reviews on MRs that impact Pajamas. This includes contributions from [GitLab Team Members](/handbook/communication/top-misused-terms/) and the wider GitLab community. If you want to review MRs, you can wait until someone assigns you one, but you are also more than welcome to browse the list of open MRs and leave any feedback or questions you may have.

To perform a review, you should familiarize yourself with and follow:

- Our general [Code Review guidelines](https://docs.gitlab.com/ee/development/code_review.html).
- Our general [MR review guidelines for Product Designers](/handbook/product/ux/product-designer/mr-reviews/).
- The contribution guidelines for the [Pajamas projects](#overview).

Note that while all designers can review all MRs, the ability to accept MRs is restricted to maintainers. You can find all design reviewers and maintainers on the list of [GitLab Engineering Projects](/handbook/engineering/projects/).

## Maintainer

Maintainers are GitLab designers who:

- Are experts at design and [code review](https://docs.gitlab.com/ee/development/code_review.html), including reviewing commit messages.
- Know the GitLab product, design guidelines, and code base very well.
- Are empowered to accept MRs in one or several of the [Pajamas projects](#overview).

Every project has at least one maintainer, but most have multiple, and some projects (like `gitlab-ui` and `design.gitlab.com`) have separate maintainers for design and frontend. As with reviewers, design maintainers can be found on the list of [GitLab Engineering Projects](/handbook/engineering/projects/).

Read more about what makes great maintainers in the [Engineering Review Workflow](/handbook/engineering/workflow/code-review/#maintainer).

### Maintainer types

Design maintainers are divided into types of maintainership. This helps maintainers specialize, but more importantly, it helps speed up the process of becoming a maintainer, and with knowing who to ask for final acceptance of MRs. New types can be created or existing ones refactored to accommodate the natural evolution of projects.

| Project | Maintainer type |
|---|---|
| `design.gitlab.com` |  `Figma` (Pajamas UI Kit): reviews file organization, object properties, interaction design, accessibility, visual design, and technical feasibility.<br>`UX` (Pajamas website): reviews content meaning, terminology, and structure across all sections of the website. |
| `gitlab-svgs` | `Figma` (Pajamas UI Kit): reviews icon and illustration file organization, object properties, and visual design. |

If you are interested in becoming a Maintainer of UI (`.scss`) for the `gitlab` or `gitlab-ui` projects, please follow the [Engineering Review Workflow](/handbook/engineering/workflow/code-review/).

### How to become a maintainer

We follow the same maintainer guidelines as our Engineering counterparts. Get familiar with those guidelines and how to become a maintainer in the [Engineering Review Workflow](/handbook/engineering/workflow/code-review/#how-to-become-a-project-maintainer).

Three key aspects of that process:

1. **“Maintainer-level” MRs**: Candidates should have specific examples of recent “maintainer-level” MRs. They can work on any kind of MR, but “maintainer-level” ones are the focus of the maintainership. “Maintainer-level” MRs are described in the [Engineering Review Workflow](/handbook/engineering/workflow/code-review/#how-to-become-a-project-maintainer).
1. **Reviews or contributions**: Contributing MRs also counts. Whether MRs are reviewed or contributed by a candidate, they should consistently make it through reviewer and/or maintainer review without significant required changes.
1. **Traineeship optional**: The [trainee maintainer program](#trainee-maintainer) (traineeship) supports reviewers in becoming maintainers, but the program is not a requirement. Designers that have been recenly involved in a fair amount of “maintainer-level” MRs can become maintainers without the traineeship. Anyone can nominate oneself (or someone else) for maintainership, following the process described in the [Engineering Review Workflow](/handbook/engineering/workflow/code-review/#how-to-become-a-project-maintainer).

#### Trainee maintainer

**We're not able to support more trainees at the moment. We can only accommodate trainee's once we have a [Support Maintainer](/handbook/engineering/projects/#design.gitlab.com) available and there is a need for additional maintainers. If you have an interest in becoming a maintainer, we encourage you to talk with your manager!**

**Note: While maintainers are responsible for certain projects, becoming one is not required for career progression and this should not be the primary reason for becoming a trainee.**

- We follow the same trainee maintainer program (traineeship) as our Engineering counterparts. Anyone may nominate themselves as a trainee by opening a tracking issue using the [Trainee design maintainer template](https://gitlab.com/gitlab-com/www-gitlab-com/issues/new?issuable_template=trainee-design-maintainer).

- For the traineeship, a design maintainer is assigned as Support Maintainer to each trainee. The Support Maintainer will direct MRs for review, give feedback on proposals, and discuss process or progress during 1:1 sessions. Trainees can always reach out to their managers or other maintainers for feedback and guidance separate from the dedicated Support Maintainer. We've also created a [Pajamas UX maintainer review checklist](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/blob/main/doc/maintainer-checklist.md) to help guide trainee maintainers as they learn to review Pajamas MRs.

- We try to keep a maximum of one trainee per maintainer, so that maintainers are not overloaded with their additional role as Support Maintainers and can provide adequate guidance. See our [current trainee maintainers](#current-trainee-maintainers).

##### Duration

The traineeship is a long commitment, usually several months, and takes away time from other responsibilities. If you're interested in enrolling in this program, please talk with your manager and team before nominating yourself, as the traineeship is likely to impact your capacity.

There are two aspects that play a big part in the duration of the traineeship: the number of hours that are dedicated to it and the number of available MRs for the trainee. When these two aspects oppose each other, the traineeship can take longer than expected:

1. **Many hours, few MRs**: To increase the number of MRs, the trainee can always make their own contributions. Reviewing MRs from others is not the only way to become a maintainer. The trainee must be creative and try to work on “maintainer-level” MRs as much as possible.
1. **Few hours, many MRs**: Trying to review or contribute many MRs in few hours can have a negative effect on quality. The trainee should focus on quality because that is what is evaluated. They should also follow our [review-response Service-level Objective (SLO)](/handbook/engineering/workflow/code-review/#review-response-slo). If the trainee wants to speed up the traineeship, they should talk with their manager to find ways to balance their workload and free up more time for this program.

To help track progress, we encourage trainees to make the traineeship one of their personal OKRs.

### Maintainer ratios

See the [Pajamas maintainer ratio dashboard (internal)](https://10az.online.tableau.com/t/gitlab/views/UXPajamasMaintainers/PajamasDesignSystem?:origin=card_share_link&:embed=n).

#### Current trainee maintainers

| Project                                | Trainee                                       | Support Maintainer                                 |
| -------------------------------------- | --------------------------------------------- | -------------------------------------------------- |
| Pajamas Design System (Figma)          | [Katie Macoy](https://gitlab.com/katiemacoy)  | [Dan Mizzi-Harris](https://gitlab.com/danmh)       |
| Pajamas Design System (Figma) - PAUSED | [Michael Le](https://gitlab.com/mle)          | [Jeremy Elder](https://gitlab.com/jeldergl)       |
| Pajamas Design System (UX)             | [Dan Mizzi-Harris](https://gitlab.com/danmh)  | [Amelia Bauerly](https://gitlab.com/ameliabauerly) |
| Pajamas Design System (UX) - PAUSED    | [Austin Regnery](https://gitlab.com/aregnery) | [Amelia Bauerly](https://gitlab.com/ameliabauerly) |
