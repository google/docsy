---
title: "Definition of Done"
description: "Learn about the PS definition of done."
---

The Definition of Done and the Definition of Ready are closely related. Or the other way around; it is a chicken and egg thing.

## The Big Picture

One of the key artifacts of Agile is the idea of backlogs – both at the Product level as well as at the Sprint level.

The Product Backlog is essentially the project's To-Do list, or requirements repository.

All items that are deemed in scope for the project, regardless of level of detail, are in the Product Backlog, and they are ordered, not just prioritized – meaning the one on top is more important than the one in 5th position, which is more important than the one in 23rd position. Order is decided by the Program Manager / Product Manager and usually driven by business value – in consultation with the Customer Development Team.

![Example Backlog](/images/customer-success/professional-services-engineering/professional-services-delivery-methodology/definition-of-done/Backlog.png)

What is known of the projects scope, is written down and documented in the form of user stories, with the expectation that discovery will lead to change. The Product Backlog is a living repository and is owned by the Program Manager / Project Manager.

The Product Backlog is the source for the Sprint Backlog. Whereas the Product Backlog represents the requirements repository for the project / engagement, the Sprint Backlog is the agreed upon scope for the next upcoming sprint and as such represents the GitLab Implementation and Customer Development Team's deliverable commitment. The GitLab Implementation Team does not operate in a vacuum, it close coordinates priorities with the Customer Development Team.

![Iteration Cycle](/images/customer-success/professional-services-engineering/professional-services-delivery-methodology/definition-of-done/IterationCycle.jpg)

Once agreed upon and committed to, the Sprint Backlog usually does not change in order to ensure the GitLab Implementation Team and the Customer Development Team can deliver against their commitment.

The Implementation Team and Development Team works through the Sprint Backlog top to bottom (most important to least important) and if it runs out of work would usually look at the Product Backlogs' top items in order to pull additional work into the current sprint.

If items are not finished during the current sprint, then they are **a)** considered for implementation in the next sprint, or **b)** reverted back to the Product Backlog to be reconsidered for the next sprint in the upcoming Sprint Planning Meeting.

Newly discovered requirements are added to the Product Backlog in the form of user stories, to be considered for future sprints.

## Definition of Ready (DoR) vs. Definition of Done (DoD)

A sprint is a time-boxed development cycle that takes high-priority items off the Sprint Backlog and turns them into a product increment. However, in order to successfully pull items into the current sprint, it is important that the defined user stories are "ready" – pulling unfinished or unrefined user stories into a sprint causes problems during the implementation cycle, as it follows the old principle of "garbage in, garbage out". If developers work off of insufficiently detailed or defined user stories, they are unlike to produce high quality code.

A "ready" backlog item needs to be clear, feasible and testable:

* A user story is **clear** if all team members (GitLab Implementation Team and Customer Development Team) have a shared understanding of what it means. Collaboratively writing user stories, and adding acceptance criteria to the high-priority ones facilitates clarity
* An item is **testable** if there is an effective way to determine if the functionality works as expected. Acceptance criteria ensure that each story can be tested
* A user story is **feasible** if it can be completed in one sprint, according to the Definition of Done. If this is not achievable, it needs be broken down further

**_Simply stated, the Definition of Ready defines the criteria that a specific user story has to meet before being considered for estimation or inclusion into a sprint. Stories that are not market READY should not be targeted in a sprint as clarification is needed before starting work._**

Whereas a **_Definition of Ready is focused on user story level characteristics_**, the **_Definition of Done is focused on the sprint or release level_**.

Essentially, a DoD represents the acceptance criteria for a sprint or release. It spells out what the Implementation and Development Team has to cover in order for the product increment to be considered "done".

The Definition of Done is an agreement between GitLab Implementation Team, the Customer Development Team and the Program Manager / Project Manager on what needs to be completed for each user story – and it is often standardized across the customer engagement in order to guarantee consistent delivery of quality.

Things that commonly addressed in the Definition of Done are:

* Operating environments and at what level of integration are user stories expected to work?
* What level of documentation is required?
* What are the quality expectations?
* What are the security expectations?
* Scalability expectations?

Essentially the Definition of Done are the agreed upon acceptance criteria that the Program Manager / Project Manager will use to accept the product increment at the end of the sprint. It is critical for consistent status reporting as well.

Please note that the DoD may be different for sprints vs. releases, meaning intermediate sprints might have a less stringent DoD than the final couple of sprints before you are planning to release to market. This is critical during engagements where initial sprints might produce early versions of the deliverables and later sprints will harden those deliverables.

## Sample Definition of Ready (DoR)

* User Story is clear
* User Story is testable
* User Story is feasible
* User Story defined
* User Story Acceptance Criteria defined
* User Story dependencies identified
* User Story sized by Development Team
* Scrum Team accepts User Experience artefacts
* Performance criteria identified, where appropriate
* Scalability criteria identified, where appropriate
* Security criteria identified, where appropriate
* Person who will accept the User Story is identified
* Team has a good idea what it will mean to Demo the User Story

## Sample Definition of Done (DoD)

* Code produced (all 'to do' items in code completed)
* Code commented, checked in and run successfully
* Peer reviewed (or produced with pair programming) and meeting development standards
* Builds without errors
* Unit tests written and passing - as appropriate
* Passed Acceptance Testing by the Customer Development Team and signed off as meeting requirements
* Any build / deployment / configuration changes are implemented / documented / communicated from sprint to sprint
* Relevant documentation / diagrams produced and / or updated
* Remaining hours for task set to zero and task closed

## Other uses of the Definition of Ready and Definition of Done

The original intent of DoR and DoD was to create brief documents representing internal agreements between the projects' stakeholders, the Program Manager / Project Manager, the GitLab Implementation Team, and the Customer Development Team.

However, with more development work being outsourced or subcontracted, the DoR and DoD are now used more and more in contract agreements and statements of work, spelling out exact expectations as to what needs to be done - this is especially useful when setting expectations with partner consultants.

These are useful tools for negotiating project scope as they define expectations and hold all parties accountable; the DoR helps the customer producing well written user stories that are ready to be consumed by the Implementation and Development Teams, and the DoD helps the teams to produce working product increments according to all project requirements, not just the specific user story functionality.
