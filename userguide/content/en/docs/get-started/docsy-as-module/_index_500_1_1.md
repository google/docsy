---
title: Product Procedures
---

## Overview

This section of the handbook is a collection of processes that a required to be followed under certain conditions. For example, if a change is being made or if a request is submitted to leadership for approval.

## How this page works

 In the spirit of "every can co-create", these procedures can be contributed by any one in the Product Division (or even GitLab!). The custodian of the procedures are Program Management. If you are interested in contributing to this page, please open a merge request and assign to Natalie Pinto, GitLab Handle `@natalie.pinto`.

## Procedures

### Making changes to stages, groups, or categories

Documentation on how to make changes to stages, groups, and categories, as well as what approvals are required, can be found in our [website handbook page](/handbook/marketing/digital-experience/).

As GitLab grows we will need to create new groups, stages, and categories. During this transition period
we need to [globally optimize](/handbook/values/#global-optimization), and ensure that important issues are not blocked during the creation of a new group.

There are three common scenarios which may encounter these transition periods:

- Splitting a Stage into multiple Groups
- Changing the Categories in a Stage
- Adding a new Stage
- Creating new Groups
- Moving an existing categories to a different Group

In each of these scenarios, a Group may become temporarily responsible for a future Group's issues and backlog. During this time, the responsible Group should
balance the needs of our users and organization, prioritizing across the common backlog.

For every scenario above, we also need to ensure that the Engineering Metrics dashboard is updated to correctly track the new label.
The label change affects both Issues and Merge Requests. The Stage and Group labels power the visualization and metrics in the [Quality](https://quality-dashboard.gitlap.com/groups/gitlab-org) and [GitLab Insights](https://gitlab.com/groups/gitlab-org/-/insights) dashboards.
Please create a new issue in the [Triage Ops](https://gitlab.com/gitlab-org/quality/triage-ops) with the template [`label-change.md`](https://gitlab.com/gitlab-org/quality/triage-ops/blob/master/.gitlab/issue_templates/label-change.md).

#### Creating new Groups

As the group(s) working on a Stage grow in size, a new Group may need to be formed so group sizes remain manageable. For example, today
there is a single group for `Manage`, but new groups were created for `control` and `framework`.

To prepare for creating multiple Groups, we should:

1. Update `categories.yml` and `stages.yml`, assigning each Group a set of Categories
1. Ensure all issues remain labeled with the Stage name, like `devops::manage`
1. Ensure all issues also have a group label, like `Control` or `Framework`
1. Prior to the new groups being formed, the PM and EM prioritize the shared `devops::manage` backlog

Once the first PM or EM is hired, the new Groups should be formed:

1. The other PM/EM's will need to continue working across both Groups. For example if a backend EM is hired, the frontend EM and PM will continue to work across both Groups until additional hires are made.
1. EM's and engineers should work together and divide the existing engineering team to staff the new groups, like `Control` and `Framework`. Ideally, each group would have at least two backend engineers, but that is not always possible.
1. Update `stages.yml` and `team.yml` to reflect the new group members. You may need to add a member to the end of `_categories.erb`.
1. Create a Slack channel for each group, like `#g_control` and `#g_framework`, and close the previous Slack channel (e.g. `#g_manage`)

As the rest of the EM/PM's are hired, they take over that role for the respective group.

_Note_: We used to call this "splitting" a group. However, we adjusted it because it's important to emphasize with group members that they are forming new independent groups and should feel free to independently create their new norms and processes.

#### Splitting a Stage into multiple Groups

As the group(s) working on a Stage grow in size, a new Group may need to be formed so group sizes remain manageable. For example, today
there is a single group for `Manage`, but will be splitting into `control` and `framework` groups.

To prepare for splitting a Stage into multiple Groups, we should:

1. Update `categories.yml` and `stages.yml`, assigning each Group a set of Categories
1. Ensure all issues remain labeled with the Stage name, like `devops::manage`
1. Ensure all issues also have a group label, like `Control` or `Framework`
1. Create a "Label change" issue in [Triage Ops](https://gitlab.com/gitlab-org/quality/triage-ops) listing affected label to have the change reflected retroactively in Engineering Dashboards.
1. Prior to the new groups being formed, the PM and EM prioritize the shared `devops::manage` backlog

Once the first PM or EM is hired, the new Group should be formed:

1. The other PM/EM's will need to continue working across both Groups. For example if a backend EM is hired, the frontend EM and PM will continue to work across both Groups until additional hires are made.
1. EM's and engineers should work together and divide the existing engineering team to staff the new groups, like `Control` and `Framework`. Ideally, each group would have at least two backend engineers, but that is not always possible.
1. Update `stages.yml` and `team.yml` to reflect the current group members. Update `_categories.erb` with the member names, if necessary.
1. Create a Slack channel for each group, like `g_control` and `g_framework`, and close the previous Slack channel (e.g. `g_manage`)

As the rest of the EM/PM's are hired, they take over that role for the respective group.

#### Adding a new category to a Stage

The categories within a Stage will change over time, based on GitLab's direction and the market landscape. The groups within a Stage will need to
be able to handle these changes, without issues falling in the cracks.

When the categories change, we should:

1. Update `categories.yml` and `stages.yml`, ensure all categories are assigned to a Group
1. If two categories are merging, apply the new category label to issues from both of the old categories
1. If a new category is being added, create a new category label and apply it to relevant issues
1. Create a "Label change" issue in [Triage Ops](https://gitlab.com/gitlab-org/quality/triage-ops) listing affected label to have the change reflected retroactively in Engineering Dashboards.
1. Update category strategy to reflect the new labels and categories
1. Review the handbook and other material which may link to old categories
1. Archive old category labels, this will be done by the Quality Department as part of the "Label change" issue.

#### Adding a new Stage

When GitLab decides to address additional needs within the single application, a new Stage may need to be created. For example, `Software Supply Chain Security` may be created to
address additional needs beyond what `Secure` focuses on.

When a new Stage is added, and its Group has yet to be formed, we should:

1. Ensure all issues for the new Stage are assigned with the Stage labels, like `devops::software-supply-chain-security` and `Software Supply Chain Security`.
1. Create a "Label change" issue in [Triage Ops](https://gitlab.com/gitlab-org/quality/triage-ops) listing affected label to have the change reflected retroactively in Engineering Dashboards.
1. Identify an existing Group, like `Secure`, which will be initially responsible for the new Stage
1. The existing Group will prioritize across a common backlog of both Stages, in this example `devops::software-supply-chain-security` and `devops::secure`
1. Update `categories.yml` and `stages.yml`, listing the new Stage with the members of the existing responsible Group. Update `_categories.erb` with the member name, if necessary.

Once the first PM or EM is hired, a new Group for the Stage should be formed:

1. The other PM/EM's will need to continue working across both groups. For example if a backend EM is hired, the frontend EM and PM will continue to work across both groups until additional hires are made.
1. EM's and engineers should work together to staff the new Group, like `govern`. Each Group should have at least two backend engineers.
1. Now that the new Group is formed, both Groups can focus on their respective Stages. In this case, `Secure` on Secure and `Software Supply Chain Security` on Software Supply Chain Security.
1. Update `stages.yml` to reflect the new Group and its members. Update `_categories.erb` with the member name, if necessary.

As the rest of the EM/PM's are hired, they take over that role for the new Group.

### Moving Stable Counterparts between stages

At times it may be necessary to transfer a [stable-counterpart](/handbook/leadership/#stable-counterparts) from one team to another.  In cases where this team member's previous role will be backfilled, follow the [Department Transfer Process](/handbook/people-group/promotions-transfers/#department-transfers).  In cases where the role will not be backfilled (i.e. the role was shifted from one team to another), the following steps should be taken to ensure leaders in the relevant stages are informed and can help guide their teams through the changes in team member allocation:

1. Create an issue in a private project or a Google Doc with [limited access](/handbook/communication/confidentiality-levels/#limited-access) using the following [team-realignment issue template](https://gitlab.com/gitlab-com/Product/-/blob/main/.gitlab/issue_templates/team-realignment.md), which states the purpose of the reallocation and helps define a communication plan notifying teams affected, the leaders impacted, and the rest of the organization. Key details to cover:
1. List out _Who, what and why_
1. Identify DRIs for action items related to the team changes
1. Define a transparent communication plan to execute against and assign tasks, as part of the communication timeline
1. Assign the issue to those who are DRIs or have tasks related to the realignment
1. Once the issue has gotten approval from leadership and impacted parties have been made aware of the reallocation of team members, move the issue to a public repository (such as [Product](https://gitlab.com/gitlab-com/Product), [www-gitlab-com](https://gitlab.com/gitlab-com/www-gitlab-com), or a project specific to your team) in accordance with our [Transparency](/handbook/values/#transparency) value, making these changes transparent to all team members.

#### When a Product Manager inherits an existing category from another product manager

In addition to making the appropriate changes listed above to ensure that the category is reflected as part of the right group, stage and section, the following steps are also important.

1. The PM doing the hand-off prepares an issue detailing process for change using the [template](https://gitlab.com/gitlab-com/Product/-/issues/new?issuable_template=Product_Transition).
1. The PM receiving the category initiates a review of the direction page and asks the receiving team EM and designer to review the page as well. This helps the team gain basic understanding immediately.
1. The PM's together identify DRIs and clarify who owns the communication (It is preferred that questions to help understand the category go to the PM instead of the rest of the quad team members. This allows for the rest of the quad team members to stay focus on their new responsibilities).
1. Create a recording for broader distribution

### Rapid Action

Rapid Action is a process we follow when a critical situation arises needing immediate attention from various stakeholders.

#### What deserves Rapid Action

Any problem with both high severity and broad impact is a potential Rapid Action. For example, a performance problem that causes latency to spike by 500%, or a security problem that risks exposing customer data.

#### What if it only affects one customer?

If the problem only affects one customer, consider a [customer escalation process](/handbook/customer-success/csm/escalations/#definitions-of-severity-levels) as the alternative.

#### Rapid Action Process

When a situation is identified as a potential Rapid Action the following actions are recommended:

1. Identify the problem(s) to solve. Ensuring we have a data driven approach ensures we have a measurable way to quantify and track those metrics throughout the rapid action.
1. Identify the exit criteria or goals that would resolve the stated problems of the rapid action.  Highlight key dashboards or charts the DRI should be tracking to determine whether progress is trending in the right direction, so that adjustments to the work, goals, or allocation of individuals to the rapid action initiative can made as needed.  Ideally we are able to define and agree to the exit criteria amongst stakeholders, prior to fully dedicating engineers to execute on the effort.
1. Continue to iterate on the above step until the stated goals are achieved, or have the DRI continue to iterate on the goals of the rapid action.  The DRI will be the one to work with stakeholders to discuss tradeoffs between progress made in the stated effort vs. the time commitment of Engineering DRIs.

##### Administrative Tasks

1. Create an epic in the [GitLab-org group (This will link you to the epic creation page)](https://gitlab.com/groups/gitlab-org/-/epics/new) group describing the problem and the resolution criteria as briefly and precisely as possible.
    1. Apply the `rapid action` label.
    1. If the problem is related to security, make the epic confidential.
    1. If possible, list existing issues that are in the scope of this Rapid Action.
1. Identify the stakeholders involved and @-mention them on the epic. It is a good idea to over-communicate this problem, both for raising awareness and gathering ideas.
1. Decide on a Directly Responsible Individual (DRI) and clearly note this in the epic description. This decision should be made as soon as possible, so leadership and responsibility is clear. However, because this decision must be made quickly, it should not be considered a final decision.
1. Clear the schedules of the DRI and anyone else who is expected to be involved in resolving the problem. Rapid Actions are both important and urgent, so they should displace less important and urgent work. For example, if an engineer is asked to help resolve a Rapid Action, the deliverables currently assigned to them should be re-assigned or re-scheduled. Rapid Actions are stressful and time-consuming, so quickly shifting other work is a way to soften the impact.
1. Set up a daily business day standup and invite the correct stakeholders and participants.

Optionally, to facilitate communication, you might:

1. Share a Zoom link dedicated to an immediate discussion.
1. Create a Slack room dedicated to ongoing discussion with the naming convention RA-#epic-id

#### Responsibilities of the DRI

The DRI is responsible for coordinating the effort to resolve the problem, from start to finish. In particular, the DRI is responsible for:

- Maintaining the problem and resolution criteria in the epic description.
- Running the daily standup related to the epic.
- Tasking sub-DRIs as necessary. These sub-DRIs might be responsible for specific parts of the problem (part A/B/C), specific perspectives (Engineering/Infrastructure/Product), specific timezones (AMER/EUR/APAC), etc.
- Ensuring that progress is being made toward mitigation and resolution. This may include coordinating problem-solving efforts across timezones so we can have GitLab team members working on the problem 24 hours a day.
- Ensuring that work that is in-scope as part of a Rapid Action isn't included in the [Development Escalation Processes](/handbook/engineering/development/processes/infra-dev-escalation/process/#escalation-process) (a.k.a. infradev).
- Updating stakeholders at least daily.
- Detailing recommended follow-up actions once the problem has been solved (enhancements, refactoring, etc).

Please note that customers can be stakeholders. The DRI can seek assistance with customer communication in Slack at `#support_escalations`.

##### Status Update Template

The DRI should post a summary status update on the epic at least daily. The following format is recommended (provided here in Markdown format for easy copy/pasting into issues):

```markdown
**YYYY-MM-DD Update**

**Progress since last update:**

This section describes what changes have been deployed to production and any other notable progress or accomplishments.

**Progress expected by next update:**

This section describes what you expect to accomplish prior to the next update.  For example what work is currently in progress (include links to MRs), when do you expect these to be deployed, what do you expect to be the effect(s)?

**Blockers:**

This section describes any specific obstacles preventing progress. What is needed to overcome them?  Are there team members (e.g. executives, domain experts) these concerns should be escalated to?

**Praise:**

This section is used to highlight specific praise for team members contributing to the Rapid Action.  It is important to [say thanks](/handbook/values/#say-thanks).
```

#### Resolution

Once the resolution criteria have been satisfied:

1. Close the epic.
1. Host a retrospective to understand what about the rapid action process could be improved. (Note: there could also be other retros that happen related to more specific sub-efforts of the rapid action, this retro should act as a touch point to ensure collaboration + communication worked.)
1. Consider making the epic public. If the problem is related to security, ask `@gitlab-com/gl-security/secops` to determine when the epic can be made public.
1. Communicate the resolution to stakeholders.
1. Consider awarding [discretionary bonuses](../../incentives/#sts=discretionary%20bonuses) to the people who stepped in to help resolve the problem.

### Borrow

Borrow is used when team members are shifted from one team to another temporarily. Team members complete assignment when the work is done. Borrows are meant to align management structures into a single group for coordination and logistics of the effort. It is important to define the work upfront so that it is bounded. We prefer borrows to be for a milestone, but generally can extend to multiple milestones. Any borrow more than 3 months should be reviewed carefully for scope and minimized to the extent possible. Where the ask likely extends beyond 6 months, a realignment should generally be used instead.

It is recommended that quad counterparts are able to seek alignment on their own first for fulfilling a borrow. As an example, in a stage where the quad leadership is already aligned on the most important business priorities, we are able to move quickly by aligning at a lower level and using a [lighter version of the Borrow template](https://gitlab.com/gitlab-com/Product/-/blob/main/.gitlab/issue_templates/Borrow-Request-Lite.md) to document the decision. This example might also make sense at a product group level if multiple groups are able to align themselves, or when multiple stakeholders are required (e.g. different reporting structures) but agreed. This template can also be used for individual team members who pick up work outside their assigned group. For efficiency, this approach should be preferred whenever possible.

If this is not possible or for broader support (e.g. looking far outside your area), EMs, PMs, and Product Design Managers utilize [the issue template](https://gitlab.com/gitlab-com/Product/-/blob/main/.gitlab/issue_templates/Borrow-Request.md) for Borrow requests. Following this template helps ensure the process is efficient, well-organized, and receives the proper approvals. Identification of the group/individals that will be borrowed should be done in a private google doc or limited access project. Once a borrow request is approved, details about the impacted groups/team should be added to the issue to communicate the change more broadly.

Every borrow must have a specific deliverable commitment described. The intent is to set expectations and provide team members an opportunity to clearly understand the expectation. Selected team member preference is considered and providing this would also be an opportunity for other interested team members with the required skills to become involved.

#### When Requiring Specialty

In cases where there is an architectural and/or significant technical project needed to be undertaken, team members with specific skill sets may be required to achieve the goal. In these instances we should endeavor to have a clear goal, clearly defined skill sets, and number of team members needed.

In scenarios where urgency is required, it may be necessary to select specific team members. The impact this has on team members, teams, and the broader organization should also be addressed. All team members with the desired skills should be included in consideration to ensure opportunities are equally available. Meanwhile, try to avoid cascading impacts where possible so that impacted teams can still operate reasonably (e.g., the teams who are giving shall have at least 3 engineers remaining and a maximum of 1 engineer can be given).

#### When borrow requests aren't appropriate

We've learned that there are some circumstances where borrow requests aren't appropriate:

- Borrow requests shouldn't be scoped to completing sustaining or forced-prioritization activities when other scheduled work is already happening. Sustaining and forced-prioritization issues are required activities of a Product Group. As a result borrow requests should be framed as a decision to complete required work in addition. For example, borrow requests should not be utilized to resolve `security` or `infradev` issues while the product group works on features.

#### How to have a successful borrow request

We have learned that there is a way to frame a borrow that leads to a more constructive conversation:

- Borrow requests should be scoped to least [prioritized work](/handbook/product/product-processes/#prioritization) for a given group.   This is counter-intuitive, but the argument should be for the weakest work so when it's compared against other team initiatives it's fairly evaluated for the tradeoff.  The reasoning here is that if team members within the team could be moved to higher priority work that's the first place to borrow from.
- Borrow requests should not be initiated to deliver an OKR, but OKRs can be referenced in communicating the business need to propose a borrow request.  The borrow request should be framed in terms of prioritized work.   An OKR goal that is for fixing security issues would be categorized a priority 1 based on our current work.

#### Active borrow requests

This [board](https://gitlab.com/gitlab-com/Product/-/boards/5874292) contains all proposed and active borrow requests.

### Scope reassignment

A scope reassignment is used when the features or effort of work will take longer than 6 months and less than a year, but it is not necessary to realign teams permanently in order to deliver the work. Rather, the team reporting structures are maintained and the product groups are directed to work on the product scope of another group, stage, or section.

It is recommended that with a scope reassignment, the product groups align on what portions of scope will be delivered by each group. This is done with epics and issues, as well `group::` labels.

#### How are scope reassignments, borrows, and realignments different?

A scope reassignment is different from a borrow and realignment because team structure is not changing, instead the items the product groups are working on change. Additionally, borrows are to be used temporarily (less than six months) and realignments are permanent. In the case of a scope reassignment, a product group would maintain its long term charter and vision/investment level, although for up to one year will work on another product area's scope. The reason for a scope reassignment is to reduce the toil of changing managers and team structures while still activating on strategic efforts requiring more headcount.

#### GitLab.com In App messages (Broadcast Messaging)

Broadcast Messaging is a great tool for acquiring user feedback from within the product. This tool allows for general, one-time, important announcements or for users to be recruited during or after
interacting with specific workflows within the product. Currently, broadcast messaging can be [targeted by URL](https://www.youtube.com/watch?time_continue=3&v=C4PuRUiQ6WU&feature=emb_logo),
and [user information can be passed](https://www.youtube.com/watch?v=2NKsXgfLhqc&feature=youtu.be) in order to personalize the message as well as the response.

There are two types of Broadcast Messages - banners and notifications. Currently banner notifications also send messages in Git responses, but this is [under review](https://gitlab.com/groups/gitlab-org/-/epics/10643).

##### How to use Broadcast Messaging

All broadcast messaging efforts must follow all guidelines in order to be deployed to GitLab.com. Create an issue in the GitLab.com/Product project using the [Broadcast Messaging template](https://gitlab.com/gitlab-com/Product/-/issues/new?issuable_template=PM-in-app-messaging-request) and assign it to `@justinfarris` & `@ampesta` for review. The [In App Messaging board](https://gitlab.com/gitlab-com/Product/-/boards/1889145?label_name%5B%5D=In-App-Messaging) is used to prioritize all messages in queue and in flight.

See [issue template](https://gitlab.com/gitlab-com/Product/-/blob/main/.gitlab/issue_templates/PM-in-app-messaging-request.md) for usage guidelines. If the message requires a group to do work (for a banner message for instance) you may want to create an issue in the `gitlab/gitlab-org` project for better visibility.
