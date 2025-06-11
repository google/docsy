---
title: "CSM Issue Tracking and OKRs"
description: "Field guide for CSMs on team OKRs"
---

For more information visit GitLabs [Objective and Key Results (OKRs)](/handbook/company/okrs/) page.

---

## Purpose

This page provides an overview of CSM team issue tracking, OKRs, and the OKR process. 

OKRs should provide continuous strategic alignment with the business. Our Big Rocks are our annual OKRs and our quarterly OKRs contribute to them.

GitLab.com (Epics/Issues) is THE best place to track the work we are doing! The goal is a streamlined way to submit ideas, have those prioritized and agreed and then coordinate the team to work on key focus areas to get the job done. We can't work on everything at once, so we aim to empower everyone to submit ideas and collaborate while keeping actual work focused on core priorities. 

Additionally, this process should lead the way in leveraging GitLab features to demonstrate we can eat our own dog food and live a customer's life in our day-to-day duties. The team should have a single process to provide updates on progress and communicate the likelihood of achieving the outcomes below:

- Leadership able to easily track work across teams

- Team-level organization to see progress and where help is needed

- Managers support in 1:1s with an improved view of individual team member's internal work

As is the case with all our work, the development of the process to track our work within the CS team is iterative and so it is recommended that you bookmark this page and check back frequently as this process is fine tuned.

## Terminology

- **Objective:** The Mission

- **Key Results:** Measures of movement and behavior

- **Initiatives:** Activities that we theorise will move the key results in a direction that brings us closer to achieving the Objective.

## Why is it Important We Do This Now?

- Improved visibility of team workload and priorities

- Streamlined idea submission and review process

- Enhanced ability to track progress and identify bottlenecks

- Better alignment of work with strategic priorities

- Increased transparency and collaboration within the team

- Data-driven decision-making through GitLab's reporting features

## Principles

OKRs Should be Inclusive (Segments, regions etc) and lean in to heavily into our [bias towards asynchronous contributions](/handbook/values/#bias-towards-asynchronous-communication).

### Objectives

- Outcome over output

- Inspirational and aspirational

- Avoid overlapping objectives

- Business aligned

### Key Results

- Measurable

- Standard format: `<Verb> <measure> from <x> to <y>`

- Leading and lagging measures

- No more than 3 to 5 Key Results per OKR

## What Impact will this have to GitLab and its Customers?

This will have significant impacts on both GitLab and its customers:

### For GitLab

- Demonstrates the effectiveness of GitLab's own tools for project management

- Improves internal efficiency and productivity of the CS AMER team

- Enhances cross-functional collaboration and transparency

- Provides real-world use cases and feedback for product improvements

- Strengthens the company's "eat our own dog food" philosophy

### For Customers

- Leads to more responsive and efficient customer support

- Provides a relatable example of GitLab usage for project management

- Potentially results in improved features based on internal feedback

- Demonstrates GitLab's commitment to using and improving its own products

## Data Model

- **Issues:** Represents an Idea or Project to be undertaken. An Issue should represent no more than a quarter of duration of an activity. If it is more than a quarter, we should break it down into multiple issues.

- **Labels:** Will be used to track additional reporting attributes and manage workflow state

- **Epic:** Should indicate/tie an Issue back to a Strategic Objective / Pillar for CS

- **Milestone:** Should be the fiscal quarter we are planning to deliver & close the work. Milestones will be used to track both OKRs and non-OKR initiatives. OKRs should be defined in the OKR project within CSMERM and all non-OKR initiatives should be defined under the relevant team's subgroup.

## Process

### GLQL Tracking Table

Whereas previous iterations used issue boards for tracking work, the team is currently using a GLQL tracker within [the CSMERM wiki](https://gitlab.com/gitlab-com/customer-success/csmerm/okrs/-/wikis/home).

### Proposing OKRs

### Idea Submission

- Team members choose the appropriate subgroup and project for their issue. These are organized by region and role, with one subgroup for cross collaboration between these. If you are unsure which project to open your issue in, default to your team's region and role (e.g. a CSM located in AMER would choose subgroup `AMER CS` and project `CSM`), or ask your manager for guidance.

- Team members create new issues with the `CS-Status::Proposed` scoped label.

- Use the issue template below for consistent information capture. The template should capture:

  - 30-sec elevator pitch

  - Why is it important we do this now? Is this due to an OKR?

  - What impact will this have to GitLab and its customers?

  - Team member and resource support to get it done?

  - Estimated Effort and ETA

## Ownership and Resourcing

- Once prioritized, projects will be assigned a CS Manager as DRI

- Using a CS Manager as DRI ensures we have visibility across the CS leadership team and can fairly represent the workload in any further resourcing/prioritization discussions

- In addition to the CS Manager, at least one Senior/Staff CSx team member should be assigned to lead the discussion and at least one additional CSx team member to assist with the effort. If at least 2x team members can't be identified to drive the issue to closure, then please realign with the CS Manager to discuss whether this is a current priority or should wait for additional team member availability.

## Review and Prioritization

- Regular management team meetings to review `CS-Status::Proposed` issues

- Categorize and prioritize issues using the labeling system (this should link to the labeling system section below) 

- Include Mgr CS as DRI

- Identify 2x CSx, at least one Staff/Senior to manage the issue

- Remove the `CS-Status::Proposed` label after review

## Workload Management

- Use `CS-Priority::Top-5` label for immediate action items determined by Mgr CS (This would include when tied back to a Big Rock or OKR)

- Assign `CS-Priority::High` issues to the current sprint/work cycle determined Mgr CS

- Utilize GitLab boards for workflow visualization

- Reference the [GLQL tracker](https://gitlab.com/gitlab-com/customer-success/csmerm/okrs/-/wikis/home) referenced above as a dashboard

## Backlog Management

- Non-priority issues remain in the backlog

- Regular backlog review and reprioritization

- Use milestones for future sprint planning

## Progress Tracking

- Implement time tracking on issues

- Use the `CS-Status::Concern` scoped label for issues facing obstacles and require leadership assistance

- Use the `CS-Status::On Track` scoped label for issues progressing as expected

- Use the `CS-Status::On Hold` scoped label for issues that are temporaryily paused

## Triage Bot Policies

Triage bot utilizes policies to determine what actions to perform on what items. 

Each policy contains rules for the resource set. These rules are contained within an array that detail what to run on and what to actually do. Triage bot fields are:

| Missing Field | Example |
| ------------- | ---- |
| GitLab Department | `Customer Success` |
| Issue Assignee | @csmname  |
| CS-Priority Label | ~"CS-Priority::Top-5"  |
| CS-Team Label | ~"CS-Team::CSM"   |
| CS-Status Label  | ~"CS-Status::On Track"   |
| CS-Region Label  | ~"CS-Region::AMER"   |
| OKR/Initiative label  | ~"OKR"  |
| LT Sponsorship label  | ~"CSLT::CS DIR NAME"  |
| Milestone  | ~FYXXQX CS OKR |
| XLT DRI label  | ~"CSXLT::MGR CS NAME"  |

## Completion and Review

When the work is complete, label the issue with `CS-Status::Ready for Review` to indicate that it is done and needs final review by CS Managers and potentially external stakeholders.

- Prior to tagging `CS-Status::Ready for Review`, conduct retrospectives and provide summary lessons learned on the issue. Ensuring we have Lessons Learnt or Objectives Achieved allows us to share & celebrate the work done and completed.

- Post Review, if no other action is required, move completed issues to "Done" on the board.

## Labeling System

Each issue should have labels and field values to satisfy the triage bot policies listed above.  Below is a table of definitions for each label used in our tracking schema.

| Category | Label | Definition |
| ------------- | ---- | -------------------------------------------------------- |
| GitLab Department | `Customer Success` | Defines the relevant GitLab department as Customer Success for global OKR tracking |
| OKR/Initiative | `OKR` or `Initiative` | Required label for tracking OKRs and non-OKR initiatives respectively across GitLab |
| CS-Status | `CS-Status::On Track` | Issue is progressing as expected |
| CS-Status | `CS-Status::Watchpoint` | Issue is running behind and needs re-alignment on objective timeline between DRI team |
| CS-Status | `CS-Status::Concern` | Issue has signficant obstacles that jeopardize completion by due date and require leadership assistance |
| CS-Status | `CS-Status::Proposed` | Issue has been proposed to CS leadership but not yet approved |
| CS-Status | `CS-Status::Not Started` | Issue has been identified but work has not yet begun |
| CS-Status | `CS-Status::On Hold` | Issue is temporarily paused |
| CS-Status | `CS-Status::Closed Success` | Issue has been successfully completed |
| CS-Status | `CS-Status::Closed Not A Priority` | Issue was determined to be not be a priority and closed |
| CS-Status | `CS-Status::Ready for Review` | Work on the issue is completed and is ready for signoff from leadership |
| CS-Priority | `CS-Priority::Top-5` | Top-5 OKR being tracked by CS leadership  |
| CS-Priority | `CS-Priority::High` | OKR or initiative that significantly impact CS team objectives and metrics |
| CS-Priority | `CS-Priority::Medium` | OKR or intiative that moderately impact CS team objectives and metrics |
| CS-Priority | `CS-Priority::Low` | "Nice-to-have" OKR or intiative that would be beneficial but aren't critical |
| CS-Region | `CS-Region::Global` | Organization-wide objective |
| CS-Region | `CS-Region::AMER` | AMER specific objective |
| CS-Region | `CS-Region::EMEA` | EMEA specific objective |
| CS-Region | `CS-Region::APAC` | APAC specific objective |
| CS-Team | `CS-Team::CSM` | Customer Success Manager team |
| CS-Team | `CS-Team::CSA` | Customer Success Architect team |
| CS-Team | `CS-Team::On Demand (CSE)` | Customer Success Engineer team |
| CS-Team | `CS-Team::RM` | Renewal Manager team |
| CS-Team | `CS-Team::Tech-Touch` | Tech-Touch (Digital Experience) team |
| CS-Team | `CS-Team:: Onboarding` | Onboarding team |
| LT Sponsorship | `CSLT::[Name]` | CS Director+ who is sponsoring OKR or initiative |
| XLT DRI | `CSXLT::[Name]` | CS Manager who is DRI for OKR or initiative  |
| XLT DRI | `CSXLT::N/A` | For use when a CS Director+ is the DRI rather than a CS Manager |

## OKR Schedule

The CSM OKR timeline is as follows:

| Quarter Start | Task |
| ------------- | ---- |
| 4 weeks out | VP shares top goals with leadership team for feedback |
| 4 weeks out | Leadership team collaboratively draft goals for next quarter and agree DRIs |
| 4 weeks out | Leadership team review current OKR status |
| 2 weeks out | Leadership team 50 minute draft review meeting. After, OKRs are put into GitLab and links are shared in #csm-updates Slack channel  |
| 2 weeks out | Leadership team discusses with their respective teams and polishes OKRs |
| 1 week out | Closing ceremony and playback of previous OKRs |
| 0  | Update OKRs to be active |

### Additional Resources

[Short tutorial of process](https://drive.google.com/file/d/1eBFqOgBgCJBf-aMPWL2ILyonEj_dYCx3/view)
