---
title: Using GitLab to plan work
---

We use GitLab to document product strategy and manage our backlog. A couple of concepts that are key to this process are:

- [Milestones](https://docs.gitlab.com/user/project/milestones/): Align with our [product releases](https://about.gitlab.com/releases/) and are used as our group's planning timeboxes.
- [Issues](https://docs.gitlab.com/user/project/issues/): Capture an atomic piece user value.which should able to be delivered within a singe milestone.
- [Tasks](https://docs.gitlab.com/user/tasks/) (optional): Decompose an Issue into more detailed implementation steps.
- [Epics](https://docs.gitlab.com/user/group/epics/): Group related issues together into a theme or goal. A best practice is for epics to not be everlasting containers but to represent a concrete scope of work, with the goal is for the epic can be closed once the work is complete.
- [Boards](https://docs.gitlab.com/user/project/issue_board/): Aid in visualizing work moving through the [product development flow](/handbook/product-development/product-development-flow/_index.md) and for milestone planning.
- [Roadmaps](https://docs.gitlab.com/user/group/roadmap/): Aid in visualizing epics in a timeline view.

### Issues

We use issues to define narrowly scoped items of work to be done. Issues can focus on a variety of different topics: UX problems, implementation requirements, tech debt, bugs, etc. A good guideline for experience-related issues is that they should address no more than one user story. If an issue includes multiple user stories, then it is likely an epic.

#### When to create an issue

You should create an issue if:

- There isn't already an issue for what you're intending to write. Search first
- A feature is mentioned in chat channels like `#product`, `#competition` or elsewhere
- A customer requests a particular feature

You should consider **not** creating an issue when:

- You're breaking down work very far ahead of implementation. Create broad issues or epics for distant features to minimize the total number of issues and maintain flexibility to iterate on the plan closer to implementation.
- There is already an existing issue. Even if the quality is low, people might
have linked to it. Consider rewriting the description instead and leaving a comment
that you did so.

#### How to submit a new issue

1. Search the [GitLab project](https://gitlab.com/gitlab-org/gitlab/issues)
to see if a similar issue already exists. We shouldn't create duplicates if we can avoid them.
1. Use an issue template to capture all the right data elements:
   - [Basic proposal](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/Feature%20Proposal%20-%20basic.md) for minor tasks or technical details for tracking larger issues.
   - [Lean feature proposal](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/Feature%20Proposal%20-%20lean.md) and for all feature enhancements that will get proposals and potentially become release post items.
   - [Feature proposal](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/Feature%20proposal%20-%20detailed.md) for large new features that may require more information or details and will become release post items.
   - [Bug](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/Bug.md) to report undesirable or incorrect behavior.
1. Do not
    - assign someone to the issue
    - assign a milestone
    - set a due date
    - add weight - weight represents the technical complexity and should be
    defined by our developers
1. Assign labels for [work type classification](/handbook/product/groups/product-analysis/engineering/metrics/#work-type-classification).
1. Leave a comment and tag the product manager to triage the issue.
Mentioning someone in an issue comment will trigger the notification mechanisms
chosen by the people who are mentioned - therefore there is no need to notify
people in another channel after the issue has been created (Slack, email).

##### Feature issues

Feature issues identify work to support the implementation of a feature and/or results in an improvement in the user experience.

- When considering whether an issue is [a missing feature or a bug](/handbook/product/product-processes/planning-with-gitlab/#issues), refer to the [definition of an MVC](/handbook/product/product-principles/#the-minimal-valuable-change-mvc) and [Definition of Done](https://docs.gitlab.com/development/contributing/merge_request_workflow/#definition-of-done) for general guidance that works well in most cases.
- If there is doubt about whether you could expect something to be there or work, it's a missing feature.
- We iterate to deliver features, so we often don't have functionality that people expect. For this reason, 'people could reasonably expect this functionality' does not make it a bug.
- Whether the code results in user facing updates or not, if it is part of building the feature it should be labeled as such.
- Performance improvements and user interface enhancements improve the experience for end users and should be labeled as `~"type::feature"`.
- API additions including both REST and GraphQL should also be labeled as `~"type::feature"`.
- If people care about a missing feature and the solution is clear, the issue should be marked as `~"Seeking community contributions"`.
- If the missing feature has been reported by a customers, the issue should be marked as `~"customer"`.

##### Bug issues

Bug issues report undesirable or incorrect behavior, such as:

- Defects in shipped code.
- Inaccurate presentation or data.
- Part of GitLab not working according to the documentation or a universal expectation.
- Functionality inadvertently being broken, or changed from how it is supposed to work. This is also a [regression](https://gitlab.com/gitlab-org/gitlab/-/blob/master/doc/development/contributing/issue_workflow.md#regression-issues).
- A [security issue that is determined to be a vulnerability](/handbook/security/engaging-with-security/#severity-and-priority-labels-on-security-issues) should be labeled as `~"type::bug"` and `~"bug::vulnerability"`.
- Loss of data while using the product as intended or as documented. [Data corruption/loss is one basis](/handbook/engineering/infrastructure/engineering-productivity/issue-triage/#severity) for classifying a bug as `severity::1`.

### Epics

Issues related to the same feature should be bundled together into an
into an [epic](https://docs.gitlab.com/user/group/epics/).

#### Epics for a single iteration

Features may include multiple issues even if we are just targeting an MVC. In
this case, we should use an epic to collect all of them in one single place.
This epic should have a start and an end date, and it should not span more than
3 releases, otherwise we run the risk of having epics drag on indefinitely.

When these issues are finished and closed, we should have successfully achieved the
epic's goal. A good example of this kind of epic is the first iteration on a new
feature. Epics representing MVCs should clearly state `MVC` at the end of the
title and should have a parent epic relationship towards a category strategy or a meta epic.

### Epics for multiple iterations

Multi-level Epics can be used to track features that will require multiple iterations to fully implement. These epics typically don't have a specific end date, as they represent an ongoing area of development. However, they should still have a clear goal and definition of success.

Some examples of multi-iteration epics include:

- Category strategy epics that outline the long-term vision for a product area
- Epics for large, complex features that will be built incrementally over time

When creating a multi-iteration epic:

1. Clearly define the overall goal and success criteria
2. Break down the work into smaller, manageable iterations or phases
3. Create child epics or issues for each iteration
4. Regularly review and update the epic as work progresses and priorities change

It's important to balance between having a long-term vision and maintaining flexibility to adapt based on user feedback and changing priorities. Regularly reassess multi-iteration epics to ensure they still align with product strategy and user needs.

We try to avoid creating epics for time frames as reaching a certain date shouldn't be considered an exit criteria for feature development. Instead scope epics for product features with a clear user experience goal in mind.

#### Meta epics for longer term items

To categorize issues and epics into themes or longer running items, we recommend using labels. You can also use epics to track many issues related to a specific topic, even if there
isn't a specific timeline for shipping. These epics should be marked as ~meta, they
may not have a specific start or end date, and may contain single iteration epics. This approach can be problematic due to epics and issues within a meta epic may need to be re-parented to represent a work breakdown structure and then lose the meta epic relationship.

#### Work item state

When an issue or epic is open, this signals that we're intending or considering implementing that change.
It's important to close items that we're not considering implementing in the near future,
so that we avoid creating uncertainty with customers and colleagues.

##### When to close an issue or epic

To clearly communicate to our stakeholders what we are going to do, it's critical that you not only
provide the positive view (what we will do), but also articulate the negative view (what we will not
do). While this should be communicated in stage and category strategies,
it starts with your work items (issues, epics and tasks). Rejecting a feature request or a merge request is not an easy thing. People can feel quite protective of their ideas. They might have invested a lot of time and energy in writing those ideas. You can be tempted to accept a feature only to avoid hurting the people who thought of it. Even Worse, if you reject an idea too harshly, you might discourage other people to contribute, which is something we should strive to avoid.

As a Product Manager you should close work items for the following reasons:

1. **Duplicate Issue:** GitLab has a large issue tracker and it can be challenging for users to find other issues that might be the same request or bug. PMs should make sure they're triaging their issue lists regularly to close duplicate issues so that it's easier for users to find the issue they're looking for and for PMs to understand the demand for requests. You should use the [`/duplicate` quick action](https://docs.gitlab.com/user/project/quick_actions/) to close these and link them to the canonical issue.
1. **Is outside the scope of, or is opposed to, our [vision](https://about.gitlab.com/direction/#vision).** GitLab is a large platform and not all requests will align with the long term direction of the product. It's okay to close issues that we'll never do because they do not align with this vision.
However, you [should _not_ close an issue](#when-you-should-not-close-an-issue-or-epic) just because it isn't currently prioritized as part of your category's direction.
1. **It presents a security risk.** Some requests may require you to evaluate if the proposal can be delivered without presenting a security risk to GitLab or our customers. You should reach out to [Application Security](/handbook/security/product-security/application-security/) if you are unsure about any requests.
1. **Too complex:** We want to have a simple, user-friendly product that does complex things, not the other way around. Uses of the product that are overly complex or only solve for narrow use cases might fall into this category.
1. **We don't want another setting:** whenever we can, we try to avoid having settings. GitLab follows the [Convention over Configuration](/handbook/product/product-principles/#convention-over-configuration) principle when evaluating new proposals. It's important to consider all of the user experience impacts an additional setting can add and while some settings are unavoidable; most aren't.
1. **Changes the tier of a feature:** this problem is already [addressed in the Stewardship page](/handbook/company/stewardship/#contributing-an-existing-feature-to-open-source-it).
1. **No longer relevant:** You should close issues where the feature may have already been delivered through some other solution or a bug may have been resolved or eliminated through a different effort.
1. **Deprecated, removed, or no-longer-supported functionality:** You should close issues that won't be worked on because the functionality has been [officially deprecated or removed, or has reached End of Support](https://docs.gitlab.com/update/terminology/).
Closing work items whenever possible is an important part of your job and helps to keep a clear view of what is next.

When closing a work item, leave a comment explaining why you're closing it, and link
to anything of relevance (the other duplicate, the original feature that this is an iteration on, etc). Don't forget to thank the authors for the time and effort taken to submit the feature request/merge request. In all cases and without exception, you should be nice and polite when interacting with users and customers.

##### When you should NOT close an issue or epic

1. **Low priority:** sometimes features are interesting but we simply don't have the capacity to implement them. In that case, simply tell the truth and indicate that we don't have enough resources at our disposal to do it at the moment. Use the `~low priority` label to signal low priority.
1. **Not part of your direction:** These items are good ideas, but are not at the top of the list for PMs to prioritize within their group. Use the `~low priority` label to signal low priority.
1. **Low demand for the request:** Something that is in line with your direction but very low priority with no (or few) upvotes. Rather than closing, utilize the %"Awaiting further demand"  milestone.
1. **Divested category:** Issues for categories in which we've made a divestment, but haven't removed the category. Use the `~divested` label to signal no prioritization due to divestment.
1. **Age of Issue:** Closing due to age alone. Filtering by age to look for candidates to close is fine, but if the issue still aligns with product direction and there is community interest, we should keep these open for future opportunities.
1. **Complex Solutions:** Sometimes issues may come with overly complex proposals or the current state of GitLab's architecture or other technical factor makes the solution too complex to implement. These issues should remain open if the problem to solve is valid as solutions can evolve as more is learned about the problem to be solved.

### Roadmaps

A [roadmap](https://docs.gitlab.com/user/group/roadmap/)
for your group can aid in tracking timeline oriented long-running efforts (here's [an example](https://gitlab.com/groups/gitlab-org/-/roadmap?scope=all&utf8=%E2%9C%93&state=opened&label_name%5B%5D=group%3A%3Ageo)). This can help keep work well organized, track progress and surface dependencies.

### Boards

As part of our planning process it is important that you maintain a prioritized
[issue board](https://docs.gitlab.com/user/project/issue_board/) for your group.
It's customary to call these boards `STAGE - GROUP - Planning` and to configure them to filter
to all issues with your group label and with each milestone as a column (here's [an example](https://gitlab.com/groups/gitlab-org/-/boards/4873470?label_name[]=group%3A%3Aproduct%20planning)).

As the [DRI](/handbook/people-group/directly-responsible-individuals/) for [milestone prioritization](/handbook/product/product-processes/cross-functional-prioritization/#planning-for-the-milestone) it is your responsibility to ensure that all items on your Planning board are scheduled to a milestone#milestones and are prioritized both
within and across milestones. This means the lowest priority in the current milestone would generally be the top priority in the next milestone.
In this regard your planning exercise is a complete prioritization of the near term issues.
