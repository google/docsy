---
title: "Geo and Disaster Recovery - Hierarchy of Agile Work Items"
description: "How the Geo Team organizes agile work items"
---

This section describes the approach that the Geo team takes to break down the requirements into work-in-progress items that engineers move through the workflow of implementation.

First, we describe general agile work item terminology to create alignment and use common industry vocabulary. We then map these general terms to the specific work item terminology used by GitLab.

Finally we provide some guidelines and rules of thumb when creating new items and about choosing the right level of granularity for them.

## Agile Terminology

Depending on your previous experience, you may be accustomed to a number of different terms to reference work items in an agile development environment. However, it will usually be the case that a certain hierarchy structure is in place to organize project work in groups of increasingly larger scope.

A common breakdown of this hierarchy in general terms is as follows:

![Agile Hierarchy](/images/engineering/infrastructure-platforms/tenant-scale/geo/agile-wip.png)

### User Story

We start with the definition of a user story. This is a description of a low granularity piece of functionality or business value that will be delivered to users of the system. It is often expressed in simple terms free of technical jargon or domain-specific terminology, as much as possible.

The point of a user story is that it is as small in scope as possible, while still being a complete piece of functionality. This means that it would be difficult to divide into smaller pieces of work. And if it were to be divided further, at that point it would be difficult to test or feel incomplete from the user's perspective (i.e. it would provide no actual value on its own).

User Stories should not be confused with the concept of [Minimal Valuable Change (MVC)](/handbook/product/product-principles/#the-minimal-valuable-change-mvc) at GitLab. An MVC is used to define how much scope of functionality will be delivered by a single iteration of the product, while a user story is a technique or template used to describe individual pieces of business logic in a way that a developer can know when they are done with that part. In this way, an MVC could be composed of multiple user stories.

User stories are typically expressed by a combination of the story itself and a list of acceptance criteria. The story has a structure like:
> As a **\<role>**, I would like to **\<action>** so that **\<outcome and/or motivation>**.

The acceptance criteria is a simple bullet list of points that describe how the system should behave and validate inputs in a way that allows the user to complete the task that the user story describes.

Example:

Say you are building a contact form for a website. The story and acceptance criteria could look something like this:
User Story: As a website visitor, I would like to submit my contact information to the website administrators so that they can answer my questions via email.

Acceptance Criteria:

- The form is accessible through a "Contact Us" link in the top menu
- The form loads into its own page
- The form has 3 fields: Name, Email, Description
- The description field allows basic text formatting (bold, italic, bullet points)
- The form validates all fields as required
- When the user submits the form, an email is sent to admin@website.com with the information submitted.
- The user receives a confirmation message on the screen that the form was submitted

From this example, we can see how we could attempt to separate each piece of criteria into a separate user story, but it would then not provide full value to a user. For example, accessing a form from a menu item which can't be submitted would not be very helpful to the user.

### Feature

A feature in this context is a grouping element of user stories that share a common goal or a similar theme. This collection of stories would address a higher-level job to be done by users of the system. The feature would have a description in this higher level scope and explain how the individual user stories would work together to meet the feature requirements.

Following our example. A feature could be "Support Requests", where the contact form is just one user story of various ways that a visitor to the website could request support. Other user stories in this feature could include searching an FAQ or engaging with a Chat Bot or initiating a live chat session with a customer representative.

### Epic

An Epic is another grouping entity for work. This is a much higher level one and it can include multiple features that deliver on a whole subsystem. Alternatively, it could include features from multiple subsystems that happen to deliver on a cross-cutting job to be done.

An example of an epic might be the development of a customer support portal, which is an entire website with capabilities to browse the documentation, a forum to engage with other customers, and the Support Request feature cited above.

### Task

Going in the opposite direction, a task provides more granularity than user stories. Tasks are often actually technical in nature and they describe the implementation steps that need to be taken to satisfy the acceptance criteria for a User Story. Typically an engineer would create a task breakdown outlining the changes that the system needs to undergo to consider the work completed.

In our Contact Form example, tasks could include writing the HTML to layout the fields, adding CSS to style the form, writing javascript to do validation and submit the fields, writing a back-end script to process the fields and send the email etc.

### Bug

This hardly requires an explanation. A bug is a defect in the intended functionality of the product or a problem that degrades the performance, user experience or usability of the system. Bugs are usually lower in the hierarchy usually assigned to user stories. However, they can be independent pieces of work in a project, especially when they are detected in production after the initial user story or feature was already deployed.

A bug item should have:

- The pre-conditions or context where the bug applies
- The specific steps for reproducing the problem
- The current outcome and why it is a problem
- The expected outcome, which would make the bug resolved.

## Mapping to GitLab work items

GitLab (the platform) has an approach to project management that is agnostic to development methodologies, which provides for a lot of flexibility. However, this means that there are fewer opportunities to represent in a more explicit way the hierarchy of work items presented in the previous section.

This table aims to provide a mapping between the concepts in the hierarchy and the actual capabilities and features of GitLab.

| Concept | GitLab Work Item |
| ---        | ---          |
| Epic       | Parent Epic  |
| Feature    | Epic         |
| User Story | Issue        |
| Task       | Tasks *      |
| Bug        | Issue with label `type::bug` |

\* For tasks, there is a couple of options, we can use [task lists](https://docs.gitlab.com/ee/user/markdown.html#task-lists) in the issue description using markdown, or we can create formally [Tasks](https://docs.gitlab.com/ee/user/tasks.html) that are its own work item type in GitLab.

## Guidelines and rules of thumb

### Creating new work items

- For the most part net new features will be created by the product manager
- Anyone can create work items. However, please observe the general definitions of such items and use them accordingly.
- If you are an engineer, new work items should be created in the `Planning Breakdown` workflow and you should then proceed to flesh out the details and provide an estimation of effort. At that point have a discussion with the PM and/or EM about priorities before moving it to the `Ready for Dev` stage.
- Never move new items to `Ready for Dev` until they have been fleshed out with details and estimated.

### Using the right scope and granularity

- Use the right concept and type of work item for what you are trying to accomplish.
- It is generally a good rule to start with a user story and then move up the scope hierarchy (i.e. to Feature or Epic) if you think it is getting too big for a single item.
- If you have identified a technical task that needs to be done. Before creating an issue for it, think about the use case that the technical task is serving (i.e. if not already specified by a user story from the PM). Based on this, create a user story that will be solved by completing the task. In other words, put on your PM hat and always describe things from a user-centric perspective. Then add the technical task to the user story.

### Planning for execution

- For Epics and Features, always provide a general description and make sure you have created the full hierarchy of items.
- Planning for Epics and Features takes quite a bit of effort, so before starting your breakdown and fleshing out issues, make sure the work you are proposing has been discussed with the PM and aligns with a short-term product outlook. If not, you are better off leaving it with the PM as a backlog item or a feature request, so it can be fleshed out closer to the time when it will be executed.
- Once an Epic has started, it is better to refrain from continuing to add to the scope. - Always check-in with the PM before adding more scope to Features and Epics.
- Since Epics should have items that have been estimated before execution, use a Due date for the Epic to set an expectation of completion. Update this Due date if necessary as the work progresses.
- Epics should be closed when all work items have been completed. If you discover new scope of work that will need to be done, please open a new work item accordingly so the additional scope is documented and can be planned for a future iteration (i.e. avoid scope creep unless thoroughly discussed and justified).
