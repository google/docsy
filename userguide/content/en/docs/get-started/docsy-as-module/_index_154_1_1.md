---
title: 'Create:Remote Development Group'
description: >-
  The Remote Development Group is part of the Create Stage. We focus on two categories:
  Workspace and the Web IDE.
---

## Overview

The group is part of [Create Stage](/handbook/engineering/development/dev/create/) in the [Dev Sub-department](/handbook/engineering/development/dev/). We focus on two [categories](https://about.gitlab.com/direction/create/#categories-in-create): `Workspace` and the `Web IDE`.

### 🤴 Group Principles

<span id="-team-principles" data-message="alias anchor for old links"></span>

[Create:Remote Development Principles](principles/): What Are the Create:Remote Development Group Principles?

### 🚀 Team Members

The following people are permanent members of the Remote Development Engineering Group:

**Engineering Manager & Engineers**

{{< team-by-manager-slug "adebayo_a" >}}

**Product, Design, Technical Writing, Security & Quality**

{{< engineering/stable-counterparts role="(Product Manager|Technical Writer|Software Engineer in Test|Security Engineer).*(Create:Remote Development|Create \(Remote Development)|Dev\:Create" >}}

### ☕ Category DRIs

<span id="-team-category-dris" data-message="alias anchor for old links"></span>

| Category                 | DRI                                     |
|--------------------------|-----------------------------------------|
| Workspaces                | {{< member-by-name "Vishal Tak" >}}     |
| Web IDE                  | {{< member-by-name "Enrique Alcántara" >}} |

### 📚 Architecture Design Document

Design documents are the primary artifact that the architecture design workflow revolves around. A design document describes a technical vision and a set of principles that will guide feature implementation, as we move forward. It acts as guardrails to keep team aligned.

- [Workspaces](../../../../architecture/design-documents/workspaces/_index.md)

### 🎓 New Hires

**As the Remote Development team and tech stack continue to mature, it's essential to have a team-specific onboarding process for new hires.** This checklist is designed to guide new team members through the key areas and processes specific to our team, starting two weeks after company onboarding. It covers our mission, essential tools, and workflows related to the Web IDE and Workspaces. Existing team members are encouraged to review the checklist regularly and contribute any missing or updated information to ensure it remains accurate and useful for newcomers. You can find the template https://gitlab.com/gitlab-com/create-stage/remote-development/-/blob/main/.gitlab/issue_templates/remote-development-onboarding.md.

### ☎️ How to reach us

Depending on the context here are the most appropriate ways to reach out to the Remote Development Group:

- Slack Channel: [`#g_create_remote_development`](https://gitlab.slack.com/archives/CJS40SLJE)
- Slack Groups: `@create-remote-development-team` (entire team) and `@create-remote-development-engs` (just engineers)

### 🗣️ Capturing Customer Engagements

To improve our understanding and traceability of customer needs and to ensure followups action items are systematically done, we want to capture customer engagement notes in a SSoT.
Please use the confidential issues below to capture all customer engagements for the feature categories:

- [Web IDE Customer Engagements](https://gitlab.com/gitlab-org/gitlab/-/issues/474518)
- [Workspaces Customer Engagements](https://gitlab.com/gitlab-org/gitlab/-/issues/473627)

These epics are meant for internal team members only. If you are a user wanting to provide feedback, see [Capturing User Feedback](#️-capturing-user-feedback).

### 🗣️ Capturing User Feedback

We highly value user feedback! Please use the epics below to capture feedback and insights for the two feature categories:

- [Web IDE User Feedback & Insights](https://gitlab.com/groups/gitlab-org/-/epics/10543)
- [Workspaces User Feedback & Insights](https://gitlab.com/groups/gitlab-org/-/epics/12601)

For non-team members, feel free to create issues in these epics if you have general feedback or suggestions. If you have feedback related to existing or ongoing features, please drop a comment in the appropriate epic or issue.

### 🤝 Customer Collaboration Issues Dashboard

At times, it is required to create private collaboration projects under https://gitlab.com/gitlab-com/account-management to collaborate with the customers on their needs. For such issues, add the appropriate labels so that they show up in our dashboard mentioned below.

Use the comment template to apply the appropriate labels for the feature categories:

- Workspaces - `/label ~"Category:Workspaces" ~"customer-collaboration"`

You can find the customer collaboration issues dashboard for the feature categories:

- [Workspaces](https://gitlab.com/gitlab-org/gitlab/-/issues/517442)

### Group Metrics Dashboards

[Create::Remote Development Group Metrics Tableau Workbook](https://10az.online.tableau.com/#/site/gitlab/workbooks/2067787/views)

### 📆 Group Meetings

<span id="-team-meetings" data-message="alias anchor for old links"></span>

**❗️Important**: For every meeting, the [Remote Development group's meeting document](https://docs.google.com/document/d/1b-dgL0ElBf_I3pbBUFISTYBG9VN02F1b3TERkAJwJ20/edit#) should be used apart from High Level Planning which has a document of its own, and filled with the meeting notes, as well as references to any other sync meeting agendas/notes/recordings which have recently occurred. This will make it easier for people to find any meeting notes.

Please note that sync meeting schedules are flexible and can be moved to accommodate required participants. For up-to-date schedule of all team meetings, please consult the [Group's Calendar](https://calendar.google.com/calendar/u/0?cid=Z2l0bGFiLmNvbV92ZGc3bW04NDRuczVrN3JxZGlyMzM0N2YwOEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t).

The table below briefly outlines the objectives and key details of regular team meetings:

| Meeting Title                       | What                                                                                                       |
|-------------------------------------|------------------------------------------------------------------------------------------------------------|
| High Level Planning                 | Set overall direction and validate higher-priority issues/epics to be worked on in the upcoming releases.  |
| Iteration Planning Meeting (IPM)    | Review scheduled issues; estimate work for next milestones.                                                |
| Remote Development Retro Call       | Review feedback from async retro, identify action items and next steps to improve efficiency.              |
| Engineering Sync                    | Discuss engineering topics and brainstorming. Cancelled if no topics. Alternates APAC/AMER friendly times. |
| Remote Development Pairing          | Pairing sessions for engineers. Cancelled if no topics.                                                    |

## 📦 Group Processes

<span id="-team-processes" data-message="alias anchor for old links"></span>

### 🖖 Weekly EM Updates

Each week the group EM provides a Weekly Status update issue which aims to capture the most important items for the team to be aware of. These can be found [here](https://gitlab.com/gitlab-com/create-stage/remote-development/-/issues/?sort=created_date&state=all&label_name%5B%5D=Weekly%20Team%20Announcements&first_page_size=20).

### 😷 Issue Workflow Hygiene

In the Create:Remote Development group we leverage an automatic issue hygiene system via the [triage bot](https://gitlab.com/gitlab-org/quality/triage-ops/-/tree/master/policies/groups/gitlab-org/remote-development). This helps to ensure issues and label hygiene are respected.

### 📝 Investigations and Breaking Down Large Issues

If a task is too large, has too many unknowns, or requires proof of concept (POC), it should be broken down into smaller investigation tasks or POC issues. These tasks help clarify the scope, reduce risks, and identify the necessary steps to proceed with implementation and ideally should fit into a single milestone.

1. **Create an Investigation Issue:**
   - **Purpose:** Research, investigate, and document or breakdown the necessary work. Please make sure to **define the core question or problem** you're investigating.
   - **Weight:** Default to 3 for investigations, POCs, or breakdown tasks. If a different weight is needed, discuss it with PM/EM/Team stakeholders.
   - **Label:** Assign the ~spike label to the issue.
   - **Updates:**  Investigations are capped at **3 working days of focused effort**.
     - On Day 3 or sooner, investigator shares findings and proposed next steps. Consider using a sync meeting to align with key stakeholders and make a decision. If a meeting is not feasible, a short recorded video summarizing findings is acceptable.
   - Depending on the feedback from the updates, we can decide to allocate more time to these investigations or settle for something that works based on the information we have.

1. **Break Down and Close:**
   - After the investigation is done, summarize findings and break the work into actionable, refined issues within the given epic.
   - The outcome should include:
     - An **Architecture Plan**: High-level technical direction, quality goals (like performance, security), and supporting approaches.
     - An **Iteration Plan**: A breakdown of work into clearly scoped, refined issues .
   - Add the plans to the epic description and close the investigation issue.

### 📝 Issue Guidelines

These guidelines apply to all issues we use for planning and scheduling work within our group. Our Engineers can define specific implementation issues when needed, but the overall goal for our issues are as follows:

- Treat the wider community as the primary audience ([see relevant summary for rationale](community-contributions/#treat-wider-community-as-primary-audience)).
- Provide a meaningful **title** that describes a deliverable result.
  - ✅ `Add a cancel button to the edit workspace form page`
  - ✅ `Automatically save Devfile changes after 2 seconds of inactivity`
  - ❌ `Make WebIDE better`
- Provide a meaningful description that clearly explains the goal of the issue, and provide some technical details if necessary.
- Should there be critical implementation steps or other useful ways to create small tasks as part of the issue, please use a checklist as part of the issue descriptions.
- The issue should have a weight assigned see [Iteration Planning](#4-iteration-planning-meeting).

## 🤖 Planning Process

<span id="-remote-development-planning-process" data-message="alias anchor for old links"></span>
<span id="remote-development-planning-process-overview" data-message="alias anchor for old links"></span>

To improve the accuracy of our planning and delivery estimates, we've adapted parts of the [Plan](/handbook/product-development/product-development-flow/#build-phase-1-plan) and [Build & Test](/handbook/product-development/product-development-flow/#build-phase-2-develop--test) phases of the GitLab Product Development Flow. Our team uses a lightweight, velocity-based approach inspired by [XP](https://www.amazon.com/Extreme-Programming-Explained-Embrace-Change/dp/0321278658) and [Scrum](https://www.scrum.org/resources/blog/agile-metrics-velocity). This helps us stay flexible while still providing clear, realistic forecasts.

The goal is not to fully adopt XP or Scrum, but to take the pieces that work for us, mainly around iteration planning and historical velocity tracking. By grounding our estimates in ["Yesterday's Weather"](https://gitlab.com/gitlab-com/www-gitlab-com/uploads/283f165896e2851bdc324f790d9c90e4/Screen_Shot_2023-03-27_at_6.16.51_PM.png) (our team's recent delivery history), we can better align scope to capacity and make informed decisions about what we can ship and when.

This process helps us navigate evolving priorities, reduce planning overhead, and stay transparent about what we're working on.

### Process Phases

```mermaid
graph TD;
  S[Feature Inception] -->|"New epic is created with '(workspaces|webide)-workflow::unprioritized' label applied and issues assigned to Backlog"| V[High Level Planning]
  V -->|"Epic is prioritized into the roadmap and on the epic board by PM adding '(workspaces|webide)-workflow::prioritized' label "| R[Async Refinement]
  R -->|"Epic is broken down into issues and 'refined' label applied. Change epic color to 'Apricot'."| P[IPM - Sync/Async]
  P -->|"Epics marked refined have all of its issues weighed. Once all weighed, change epic color to 'Mint'."| I[Ready for Development]

  I --> N[Milestone Planning]
  I --> D[Development]

  N -->|"EM/PM will plan for the next milestone and\nassign %XX.X labels to issues that are likely to make the next release cycle."| E1[Planning Issue Published]
  D -->|"When work starts on the epic, all of its child issues\nare added to %"Next 1-3 Releases""| E2[Development Release]

```

#### 1. Feature Inception

Ideas can come from anywhere and anyone. If you have an idea:

1. Capture it in an issue under the [Workspaces](https://gitlab.com/groups/gitlab-org/-/epics/12601) or [Web IDE](https://gitlab.com/groups/gitlab-org/-/epics/10543) User Feedback & Insights epic.
1. Pre-fix the issue title with "Feedback:..." or "Idea:...".
1. Add the issue to the %"Backlog" milestone
1. Add this as a topic of discussion on the [Workspaces](https://docs.google.com/document/d/1Xfr5YHdStC7_3kVAognj0SxbXlcavj2ofgp1mH2zH4U/) or [Web IDE](https://docs.google.com/document/d/18l9wI2tRcFgvX8nJfmO3qVG9-smEQL0VwDh5aOOZj0s/) High Level Planning agenda.

#### 2. High Level Planning

The **High Level Planning** meeting is an open forum where new and ongoing work is identified, discussed, and prioritized. Team members can propose topics by adding them to the agenda in advance. This is analogous to the [Validation Track in the GitLab Product Flow](/handbook/product-development/product-development-flow/#validation-track), because it needs to achieve the same [Validation Goals & Outcomes](/handbook/product-development/product-development-flow/#validation-goals--outcomes) before we can start refining and prioritizing issues. The meeting typically covers:

- **New Feature Ideas**: Proposals for new work to be considered for the roadmap.
- **Roadmap Adjustments**: Reordering, shifting, or reprioritizing ongoing work.
- **Escalation of Bugs/Technical Debt**: Issues that need urgent attention or adjustments to the timeline.

The meeting serves to clarify the most important work and make decisions on what should take priority.

**Post-Meeting Actions:**

- **Roadmap Assessment:** After the meeting, the Product Manager will assess the proposed changes and update the epic board(s), which serves as the source of truth for work prioritization.

- **Epic Creation and Prioritization:** Features will be converted into epics and the Product Manager will determine the order of feature work and mark upcoming work with the `~"(workspaces|webide)-workflow::prioritized"` label.

- **Board Order Guidelines:** Please avoid changing the order of items on the epic board without consulting the Engineering Manager or Product Manager first.

#### 3. Async Refinement

The **Async Refinement** process is designed to efficiently prepare upcoming work by focusing on breaking down issues and identifying unknowns in implementation. This is analogous to ["backlog refinement"](/handbook/product-development/product-development-flow/#outcomes-and-activities-4) in the standard GitLab product development flow. The goal is to ensure all issues targeted for the upcoming milestones are clear enough for the team to briefly review and estimate during the next IPM.

**Key Principles:**

- **Epic Board:** The epic board organizes and prioritizes upcoming work, following a color scheme to reflect each epic's status.
  - <span style="color:#1068bf">Blue</span>: Default color for new epics that need refinement.
  - <span style="color:#f3ad5d">Apricot</span>: Indicates that an epic is fully refined and ready for weighing in the next planning stage.
  - <span style="color:#4dd787">Mint</span>: Used after the **Iterative Planning Meeting** once all issues within an epic have been weighed and finalized for execution.

- **Just-in-Time Planning:** We refine only the next 1-2 epics to avoid over-preparing, which helps ensure epics remain relevant when work begins. If these are refined, no further refinement is necessary.

**Refinement Process:**

1. **Identify Epics in Need of Refinement:**
   - These are marked in <span style="color:#1068bf">blue</span> on the epic board and would typically be assigned by the Engineering Manager to Engineers.
1. **Break Down the Epic:**
   - Divide the epic into smaller, actionable issues.
   - Define the work necessary to meet the epic's acceptance criteria.
   - Assign the ~refined label to the issues that have been refined.
1. **Mark as Refined:**
   - Once refined, change the epic color to <span style="color:#f3ad5d">apricot</span> to indicate it is ready for weighing.
   - Add the label **"refined"** to the epic to signal readiness.
1. **Next Steps - Iterative Planning Meeting:**
   - Following refinement, epics enter the **Iteration Planning Meeting** where all issues within an epic are weighed.
   - After this stage, epics are marked <span style="color:#4dd787">mint</span> to indicate they are fully weighed and ready for execution.

#### 4. Iteration Planning Meeting

The **Iteration Planning Meeting** is a collaborative session where the team reviews and weighs issues within epics marked as <span style="color:#f3ad5d">apricot</span> on the epic board. This is analogous to the ["Weekly Cycle" in XP](https://www.amazon.com/Extreme-Programming-Explained-Embrace-Change/dp/0321278658) or ["Sprint Planning" in Scrum](https://www.scrum.org/resources/what-is-sprint-planning). This process ensures that each refined epic is fully understood, in scope, and aligned with the team's goals.

**Meeting Objectives:**

- **Review and Weigh Issues:**
  - For each issue, the facilitator reads the description, and the team **_briefly_** discusses the issue and clarifying any uncertainties. If there are no blocking concerns/risks raised, the team collectively estimates the issue with rock-paper-scissors fibonacci scale, and the collectively agreed weight is assigned. See[What Weights to Use](#-what-weights-to-use) for more details on weights.
  - If there are other prioritized issues that have not yet been weighed, these are also reviewed and weighed during the meeting.

**Async Process:**
**TL;DR: Sometimes issues need to be weighted quickly before the official IPM meeting. This is how we weight those issues.**

**Prerequisite:** Add the Polly app to your Slack if you have not already.

1. Navigate to Polly application under that Apps section in Slack.
1. Select Create a Polly.
1. Select Create New.
1. Select Multiple Choice
1. Fill out creation Options:
    1. Create Question: Weight for: **_Add link to issue here._**
    1. Question Type: Multiple Choice.
    1. Enter choices below: **0 1 2 3 5 8** (each number on a separate line)
    1. Choose audience: Select **_remote_development_async_ipm_** channel.
    1. Make sure "Send polly as direct message" is **_unchecked_**.
    1. Select Settings Button.
    1. Responses: Select **_Non-anonymous_**.
    1. Results: Select **_Show after close_**.
    1. Select Submit to save changes.
1. Send Polly.

**Optional Steps: Template Creation**

This allows you make following Async IPMs faster by standardizing the configurations. After creation, all a user needs to do is select the template from the "My Templates" section, select Use Template, and update the Issue link in the "Create Question" field.

1. Navigate to Polly application under that Apps section in Slack.
1. Select Go to Polly Dashboard.
1. Select the Polly you just made.
1. Select Controls button.
1. Select Save as Template.
1. Title Template: **_Remote development async ipm_**.
1. Ensure "Save audience with template" is **_checked_**.
1. Select Save.

**Async Weighing Option:**

- Weighing can also be done asynchronously through the `#remote_development_async_ipm` Slack channel.
- To initiate async weighing, post the issue that needs to be weighed along with a [Polly poll](https://www.polly.ai/help/slack/creating-polls) to gather input.

This structure allows for both synchronous and asynchronous participation, enabling thorough preparation and alignment on upcoming work.

#### 5. Milestone Planning & Starting Development

The **Milestone Planning & Starting Development** process is used to plan issues for development in upcoming releases and to align team efforts with milestone.

**Epic and Issue Setup:** When starting work on a new epic, all child issues are assigned the milestone **`%"Next 1-3 Releases"`** or a concrete milestone for example, **`%16.9`** to indicate they are prioritized for near-term development.

Issues are assigned to specific milestones based on factors like team velocity, potential for parallel work, and overall availability. **If unplanned work needs to be added to an active milestone**, please discuss it with the EM first, as it may affect delivery projections and commitments.

Occasionally, unrefined or unplanned issues like bugs and customer escalations may be brought in after a milestone has started. In these cases, they will be labeled ~Stretch by default, since they weren't fully prepared before being included.

Issues typically move from `%"Backlog"` to `%"Next 1-3 Releases"` and then into a concrete milestone e.g. `%16.x`. Unless discussed otherwise with the EM, engineers should prioritize picking up ~Deliverable items scheduled in the active milestone before considering other issues in that milestone. If all ~Deliverable and ~Stretch issues in the current milestone are already assigned and in progress, the next place to look is the following milestone or `%"Next 1-3 Releases"`.

**Milestone Planning and Creating Planning Issue**:

1. Before each milestone begins, the Engineering Manager along with Product Manager reviews and assigns issues for the upcoming release based on the team's velocity. Specific milestone number `%XX.X` to designate them as part of the planned release.

1. A **Planning Issue** is automatically created two weeks before start of the new release cycle. This issue is populated with relevant details to guide the team through the milestone. You can view and access all active Planning Issues [here](https://gitlab.com/gitlab-com/create-stage/remote-development/-/issues/?sort=updated_desc&state=opened&search=planning%20issue&first_page_size=50).

This structure enables smooth planning, tracking, and alignment of development work within each milestone, ensuring work progresses as planned and within scope.

### Example Lifecycle for a Feature

1. Product and Design identify a feature and create an epic
   Note that the issue description may be incomplete/unrefined and high-level at this point.
1. When prioritized, Product Manager adds the `~(workspaces|webide)-workflow::prioritized` label and the epic is assigned for refinement by the Engineering Manager.
1. As part of the async IPM process, the assignee refines the epic, by breaking down the feature work into issues and filling out the issue template, then applying the `~refined` label to the issues and to the epic if all issues within the epic have been refined.
   1. During the refinement process, consider documentation for the feature. If needed, add the requirements and the `~documentation` and `~Technical writing` labels to the issue.
      For question and assistance, tag your assigned Technical Writer.
1. In the sync IPM meeting, the wider team discusses and estimates the issues in the epic.
1. Once the priority and weight are determined, the EM will assign a specific release milestone to the issues of the epic based on velocity.
1. The assignee opens an MR for the issue and ensures that the issue and MR are cross-referenced on the first lines of their descriptions.
1. While the feature implementation is in progress, the assignee creates a documentation MR that follows the appropriate [topic type](https://docs.gitlab.com/development/documentation/topic_types/) format and [style guide](https://docs.gitlab.com/development/documentation/styleguide/).
1. The documentation MR is reviewed by the Technical Writer, and merged along with or shortly after the feature implementation MR.
1. Once the feature MR is merged, documentation is published, and the feature is verified in production, the epic is closed.

### 📝 Ad-Hoc Work

It is normal that team members may identify issues that need to be resolved promptly prior to the next planning cycle. This may be because they are blocking other prioritized issues, or just because a team member wishes to tackle an outstanding bug or small piece of technical debt.

In these situations, it is acceptable for a team member to take the initiative to create an issue, assign proper labels, estimate it, assign it to the current milestone, and work on it, _as long as it does not adversely impact the delivery of other prioritized issues_. However, if it becomes large or risks impacting other issues which were in the milestone, then the issue should be brought up for discussion with the wider team in the next IPM.

### 🏋 What Weights to Use

To assign weights to issues effectively, it's important to remember that issue weight should not be tied to time. Instead, it should be a purely abstract measure of the issue's significance. To accomplish this, the team uses the Fibonacci sequence starting from weight 0:

- **Weight 0:** Reserved for the smallest and easiest issues, such as typos or minor formatting changes, or very minor code changes with no tests required.
- **Weight 1:** For simple issues with little or no uncertainty, risk or complexity. These issues may have labels like "good for new contributors" or "Hackathon - Candidate". For example:
  - Changing copy text which may be simple but take some time.
  - Making CSS or UI adjustments.
  - Minor code changes to one or two files, which require tests to be written or updated.
- **Weight 2:** For more involved issues which are still straightforward without much risk or complexity, but may involve touching multiple areas of the code, and updating multiple tests.
- **Weight 3:** For larger issues which may have some unforeseen complexity or risk, or require more extensive changes, but is still not large enough to warrant [breaking down into smaller separate issues](#-investigations-and-breaking-down-large-issues).
- **Weight 5:** Normally, this weight should be avoided, and indicate that the issue ideally [should be broken down into smaller separate issues](#-investigations-and-breaking-down-large-issues). However, in some cases a issue with a weight of 5 might still be prioritized. For example, if there is a large amount of manual updates to be made which will require a large amount of effort, but doesn't necessarily involve significant risk or uncertainty.
- **Weight 8/13+:** Weights above 5 are used to clearly indicate work that is not yet ready to be assigned for implementation, and _must_ be broken down because it is too large in scope to start implementing, and/or still has too many unknowns/risks. This weight is temporarily assigned to "placeholder" issues to capture the scope of the effort in our velocity-based capacity planning calculations. For more information, see ["Breaking Down Large Issues"](#-investigations-and-breaking-down-large-issues).

### Should bugs be estimated?

There are differing opinions on this in agile philosophy ([1](https://www.reddit.com/r/scrum/comments/n4uhl5/estimating_bugsdoes_it_matter/), [2](https://medium.com/agilelab/estimating-bugs-yes-or-no-cbfe1bc25db1)).

On our team, we have decided that bugs should not be estimated. Here's why:

- The point of estimating weight in a velocity-based process is to help predict the rate at which a team can expect user value be delivered.
- From that perspective, bugs should not be estimated, because the "user value" was delivered by the original feature, which _did_ have a weight.
- But fixing a bug isn't adding any new user value, it's just "finishing" delivery of the user value which was already accounted for by the original feature. So, they shouldn't get a weight.
- Now, if it's a huge "bug" in the category of "we got this feature entirely wrong and need to rewrite it significantly, and it will take a lot of effort", then that should be considered new feature work, not a "bug". And it should be refined and broken down into weighted issues, just like all feature work.

### 🧹 Follow-up issues which span multiple releases

Gitlab standards often require breaking down issues that need to be resolved in a specific set of steps that span multiple releases. Typically these are issues related to database migrations ([Dropping Columns](https://docs.gitlab.com/ee/development/database/avoiding_downtime_in_migrations.html#dropping-columns)) or breaking changes in GraphQL such as ["Deprecation and Removal"](https://docs.gitlab.com/ee/api/graphql/index.html#deprecation-and-removal-process).

In such cases where we have pending or follow up tasks for future releases such as removing an ignore rule, removing a deprecated field from GraphQL, finalizing background migrations, etc., we must create follow up issues so we do not forget to complete the work in the future. Here is the process to follow:

**Create a Followup Issue:**

1. **References:** Link the issue to the original issue that spawned it.
1. **Label:** Assign these labels:
    - `~due-date-followup`
    - `~refined`
1. **Milestone:** Assign it a specific milestone - i.e Drop column (17.5) -> Followup remove ignore rule (17.6).
1. **Due Date:** Assign a due date 1 week into the assigned milestone. To see the dates for the milestone, you can click "Preview" after adding the Milestone, then open the milestone link in a new tab, and find its date range at the top of the page.
1. **Epic:** Assign it to the [WebIDE | Technical Debt/Friction](https://gitlab.com/groups/gitlab-org/-/epics/14656) or [Workspaces Technical Debt Work](https://gitlab.com/groups/gitlab-org/-/epics/11041) epic.

Here's a shortcut of label commands which you can use to easily apply this metadata.

Workspaces:

```text
/relate #<original issue number or link>
/milestone %"<target milestone>"
/due date <one week into milestone's date, obtained from clicking on milestone link>
/label ~due-date-followup ~refined
/epic &11041
```

Web IDE:

```text
/relate #<original issue number or link>
/milestone %"<target milestone>"
/due date <one week into milestone's date, obtained from clicking on milestone link>
/label ~due-date-followup ~refined
/epic &14656
```

Note that these sorts of issues which we are _required_ to defer
until future releases should not be confused with "tech debt"
work that we are _choosing_ to defer. That is why they use the
following process involving milestones, custom labels, and due date reminders
to ensure that we do not forget to follow up and complete them.

### Relationship of Issues to MRs

<span id="1-to-1-relationship-of-issues-to-mrs" data-message="alias anchor for old links"></span>

We want to enforce that:

1. Every MR is owned by a weighted issue

This is in order to facilitate accurate and granular velocity calculations and issue prioritization under this process.
The merge request is the atomic unit of deliverable work in most cases, so it must be represented in the prioritization
and calculations by being owned by one and only one issue.

In order to enforce this via triage-ops automations
(/handbook/engineering/development/dev/create/remote-development/#automations-for-remote-development-workflow),
the first line of the issue should have the format: `MR: <...>`:

1. For new issues, the first description line should be: `MR: Pending`
1. Once an MR is created for the issue and work is started, the first description line of the issue should be: `MR: <MR link with trailing +>`,
   and the first description line of the MR should be `Issue: <Issue link with trailing +>`.
1. If the work for an issue was iteratively split into multiple MR's, the first description line of the issue should be:

   ```markdown
   MR:
     - <MR link with trailing +>
     - <MR link with trailing +>
   ```

   Each description line of the MR's in this list should be `Issue: <Issue link with trailing +>`. **Please note:** If breaking out an issue's implementation
   into multiple MR's unexpectedly increases the scope of the work, please consider creating a new weighted and prioritized issue to
   capture the extra scope. This is important in order to accurately reflect scope increases, and their impact on reporting and velocity.
1. If there is _NO MR_ associated with this issue, the first line should be: `MR: No MR`.
   However, this should be rare, because most issues should have some sort of committed deliverable, even if it is only
   a documentation addition or update. If it is an issue which represents a larger piece of work split across smaller issues,
   then it should be promoted to an epic.

**QUESTION: Why does every MR need a backing issue?**

- If boards and epics allowed MRs to be added and estimated as well as issues, this would not be necessary - for feature/maintenance
  involving an MR, we could have the MR directly represent the full lifecycle of the discussion and implementation, and not
  have an issue at all.
- We also cannot rely on the Crosslinking Issues feature (https://docs.gitlab.com/ee/user/project/issues/crosslinking_issues.html),
  because this shows ALL linked MRs that have mentioned the issue anywhere, and cannot enforce this 1-1 relationship.

### 🍨 Handling Issues Outside the Process

<span id="-handling-remote-development-issues-outside-the-process" data-message="alias anchor for old links"></span>

Certain `group::remote development` issues may be categorized under the `(workspaces|webide)-workflow::ignored` label. These categories include:

1. **QA-Owned Issues:**
   - Issues owned by QA that may not require the standard Workspaces process.
1. **PM-Owned Issues with `type::ignore`:**
   - Issues owned by Product Managers marked with `type::ignore`, such as reporting, blogs, OKRs, etc.
1. **Long-Lived Security Issues:**
   - Security-owned issues with extended timelines that don't align with the typical Workspaces workflow.

This approach ensures that these types of issues do not have an undesired impact on our velocity, and that our Workspaces process remains streamlined while accommodating different issue categories that may not fit the standard workflow.

### Wider Board Columns

The default width of lists on boards can make the board harder to use, since you see fewer items and have to scroll more.

There is [an open issue to address this](https://gitlab.com/gitlab-org/gitlab/-/issues/15927). In the meantime, though, you can use the following javascript bookmarklet suggested in [this comment on the issue](https://gitlab.com/gitlab-org/gitlab/-/issues/15927#note_214871708), which will make the lists take up the full board width. Just make a bookmark named "Wider board lists" with this as the link:

```text
javascript:(function(){var el=document.getElementsByClassName('boards-list');for(i=0;i<el.length;++i){el[i].style.padding=0;el[i].style.display='table';}el=document.getElementsByClassName('board');for(i=0;i<el.length;++i){el[i].style.padding=0;el[i].style.border='0';el[i].style.display='table-cell';}el=document.getElementsByClassName('board-inner');for(i=0;i<el.length;++i){el[i].style.padding=0;el[i].style.border='0';}})();
```

## 👏 Communication

The Remote Development Team communicates based on the following guidelines:

1. Always prefer async communication over sync meetings.
1. Don't shy away from arranging a [sync call](#-ad-hoc-sync-calls) when async is proving inefficient, however always record it to share with team members.
1. By default communicate in the open.
1. All work-related communication in Slack happens in the [#g_create_ide](https://gitlab.slack.com/archives/CJS40SLJE) channel.

### ⏲ Time Off

Team members should add any [planned time off](/handbook/people-group/paid-time-off/#paid-time-off) in Workday, so that the Engineering Manager can use the proper number of days off during capacity planning.

### 🤙 Ad-hoc sync calls

We operate using async communication by default. There are times when a sync discussion can be beneficial and we encourage team members to schedule sync calls with the required team members as needed.

## 🔗 Other Useful Links

### 🏁 Developer Cheatsheet

[Developer Cheatsheet](developer-cheatsheet/): This is a collection of various tips, tricks, and reminders which may be useful to engineers on (and outside of) the team.

### 🤗 Fostering Wider Community Contributors

We want to make sure that all the fields of the Create:Remote Development team are approachable for outside contributors.
In this case, if issues should be good for any contribution it should be treated with extra care. Therefore, have a look at this excellent guide written by our own Paul Slaughter!

[Cultivating Contributions from the Wider Community](community-contributions/): This is a summary of why and how we cultivate contributions from the wider community.

### 📹 GitLab Unfiltered Playlist

The Remote Development Group collates all video recordings related to the group and its team members in [a playlist](https://www.youtube.com/playlist?list=PL05JrBw4t0KrRQhnSYRNh1s1mEUypx67-) in the [GitLab Unfiltered](https://www.youtube.com/channel/UCMtZ0sc1HHNtGGWZFDRTh5A) YouTube channel.

{{< tableau height="600px" toolbar="hidden" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/TopEngineeringMetrics/TopEngineeringMetricsDashboard" >}}
  {{< tableau/filters "GROUP_LABEL"="ide" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/MergeRequestMetrics/OverallMRsbyType_1" >}}
  {{< tableau/filters "GROUP_LABEL"="ide" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/Flakytestissues/FlakyTestIssues" >}}
  {{< tableau/filters "GROUP_NAME"="ide" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/SlowRSpecTestsIssues/SlowRSpecTestsIssuesDashboard" >}}
  {{< tableau/filters "GROUP_LABEL"="ide" >}}
{{< /tableau >}}

### Create:Remote Development Error Budget

- https://dashboards.gitlab.net/d/stage-groups-detail-ide/stage-groups-ide-group-error-budget-detail?orgId=1
- https://dashboards.gitlab.net/d/stage-groups-ide/stage-groups-ide-group-dashboard?orgId=1

## Automations

Automations should be set up via [triage-ops](https://gitlab.com/gitlab-org/quality/triage-ops/) if possible.

Other more complex automations may be set up in the
[Remote Development Team Automation project](https://gitlab.com/gitlab-org/remote-development/remote-development-team-automation).

### Automations for Group Workflow

Ideally we should automate as much of the [Planning Process](#-planning-process) workflow as possible.

We have the following automation goals for this Workflow. Unless otherwise noted, these rules are all defined in the [triage-ops `policies/groups/gitlab-org/ide/remote-development-workflow.yml` config files](https://gitlab.com/gitlab-org/quality/triage-ops/-/tree/master/policies/groups/gitlab-org/remote-development).

| ID | Goal | Automation | Link(s) to implementation |
| --- | --- | --- | --- |
| <a id="automation-01">01</a> | Warn when no epic is assigned | Issues in `~"Category:(Web IDE \| Workspace)"` but with no epic assigned should get a warning comment | TODO: implement |
| <a id="automation-02">02</a> | Assign missing milestone to issues | Issues in `~"Category:(Web IDE \| Workspace)"` should be assigned to the `%"Backlog"` if no milestone is assigned | TODO: implement |
| <a id="automation-03">03</a> | Flag stretch issues in a milestone | Issues that have been assigned the active milestone for example, 16.x, 17.x and don't have a ~refined label and weight should be marked as ~Stretch | TODO: implement |
| <a id="automation-04">04</a> | Sync Workspace workflow and GitLab workflow labels | Unstarted issues with `~"refined"` assigned should get `~"workflow::ready` for development" assigned. | TODO: implement |
| <a id="automation-05">05</a> | Ensure all issues with an assignee have a weight assigned | All refined issues that are not bugs with an assignee but no weight should get a reminder note to either add a weight estimate. | TODO: implement |
