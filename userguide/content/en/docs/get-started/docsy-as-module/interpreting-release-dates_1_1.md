---
title: Product - Interpreting Release Dates
description: One of GitLab's core values is Transparency. We do this to make collaboration easier and do this by default.
---

## Overview

One of GitLab's core values is [Transparency](/handbook/values/#transparency).
We do this to make collaboration easier and do this [by default](/handbook/values/#public-by-default).

Transparency is good and it can also mean that there is a lot of information
to understand, especially when trying to determine when an Issue on the
roadmap may ship. This page highlights the pieces of information that can
help give guidance on what state an issue is in and when it might ship. This is
especially helpful for giving answers to customers and stakeholders when setting the correct
expectations.

GitLab's [Product Development Workflow](/handbook/product-development-flow/)
describes all the different steps that take an issue from ideation to
validation to design to development and finally to getting in the hand of
end-users. It has full details about every step of the workflow and can be
read for specific details.

## Intepreting Issue States

There are a few pieces of info to understand when an issue might ship. Looking
at each of these in combination with the others should help you understand
if an item will ship in the current or a future iteration.

1. Milestone

   - If an issue is tagged against a milestone, that is the GitLab release it is
   targeted to be shipped in. These aren't promises; milestones are subject to change, and we [plan ambitiously](/handbook/product/product-principles/#how-this-impacts-planning). This is not a commitment to a customer to deliver a certain scope or at a certain time, nor should it be treated as such.

1. `workflow::<current state>` labels

   - The `workflow::<current state>` label shows what state the Issue is currently
   at in the Product Development Workflow. The [various states](/handbook/product-development-flow/#workflow-summary)
   of the label mean different things.

   - In general, if an issue is in `workflow::in review`
     or `workflow::verification` it is very close to shipping. Other states mean
     that the issue will likely change [DRI](/handbook/people-group/directly-responsible-individuals/)
     several times and may or may not ship in the marked milestone.

1. `Deliverable`/`Stretch` labels

   - The `Deliverable`/`Stretch` labels give an indiciation of engineering's
     confidence that an issue will complete in the assigned milestone or not, with
     the former being a high-level of confidence and the latter being a lower
     possibility. If the issue has neither of these labels and is assigned to the
     current milestone, it is unlikely to ship.

1. Issue title and description

   - The Issue's title and description may indicate that an issue is intended
     to only cover a portion of a feature, such as UX, front-end, or back-end work.
     This means that when the issue is completed, that portion of the feature will
     be done but the whole feature may not necessarily be completed. Check the
     description of the issue to understand whether it covers the entire scope
     of a feature or only a part of it.

## Other pieces of info to look for

Issues are frequently included as part of a larger [Epic](https://docs.gitlab.com/ee/user/group/epics/)
of work. Epics may have multiple issues, each with a separate scope and
assigned milestones. It can be helpful to look at the Epic an issue is contained
in to understand what other related work is planned to understand when
everything will be shipped and usable by users.

## Still have questions?

If you are still not sure what state an issue is in and want to ensure you set
the correct expectations with the customer, please @mention the
[responsible Product Manager](/handbook/product/categories/),
on the issue or epic, so they can clarify.
