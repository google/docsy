---
title: Ops Sub-department
description: >-
  The Ops Sub-department is composed of development teams working on Verify,
  Package, Deploy, and Monitor features of GitLab DevOps Platform.
---

The Ops Sub-department is composed of development teams working on Verify, Package, Deploy, Sevice Management and Observability features of GitLab DevOps Platform.

## Teams and Handbook Pages

The following teams comprise the Ops sub-department:

- Verify stage - [handbook](/handbook/engineering/development/ops/verify/)
  - Pipeline Execution - [handbook](/handbook/engineering/development/ops/verify/pipeline-execution/), [jtbd](/handbook/engineering/development/ops/verify/pipeline-execution/jtbd/)
  - Pipeline Authoring - [handbook](/handbook/engineering/development/ops/verify/pipeline-authoring/), [jtbd](/handbook/engineering/development/ops/verify/pipeline-authoring/jtbd/)
  - Runner - [handbook](/handbook/engineering/development/ops/verify/runner/), [jtbd](/handbook/engineering/development/ops/verify/runner/jtbd/)
  - CI Platform - [handbook](/handbook/engineering/development/ops/verify/ci-platform/)
- Package stage - [handbook](/handbook/engineering/development/ops/package/), [jtbd](/handbook/engineering/development/ops/package/jtbd/)
  - Container Registry - [handbook](/handbook/engineering/development/ops/package/)
  - Package Registry - [handbook](/handbook/engineering/development/ops/package/)
- Deploy stage
  - Environments - [handbook](/handbook/engineering/development/ops/deploy/environments/), jtbd

## Product Direction

Teams in the Ops Sub-Department map to several Product Sections.  Product direction can be found on the following direction pages:

- [CI Section Direction](https://about.gitlab.com/direction/ci/)
- [CD Section Direction](https://about.gitlab.com/direction/delivery/)
- [Observability Direction](direction/analytics/observability/)

## Slack channels

- [#ci-section](https://gitlab.slack.com/archives/C05B0MER7LM) - CI Section discussions spanning the Verify, Package and Monitor Stages
- [#cd-section](https://gitlab.slack.com/archives/C05BTB4CBGQ) - CD Section discussions spanning Deploy Stage
- [#ops_staff_plus](https://gitlab.slack.com/archives/C0305PJB9JR) - Foster collaboration and technical leadership within Ops section
- [#doe-ops](https://gitlab.slack.com/archives/CT9CM1VDJ) - Channel for GitLab's Director of Engineering, Ops
- 🔒ops-staff-confidential - Channel for reviewing topics for Ops Engineering leaders.  Please use #doe-ops or other public channels for topics that don't require confidentiality.

## Meetings

### Zoom Recordings synced to Google Drive

GitLab encourages transparency by default, and when meetings are recorded, they can be automatically synced to Google Drive as highlighted in [the section about how we conduct video calls at GitLab](/handbook/communication/#video-calls). To summarize:

1. Record meetings to the cloud in Zoom, and add the text [REC] anywhere in the meeting title (e.g. Google calendar event)
1. It will automatically be added to the [GitLab Videos Recorded folder](https://drive.google.com/drive/folders/0APOeuCQrsm4KUk9PVA) on Google Drive, with a naming convention of `youremail-Meeting Title`.
1. After a meeting ends, Zoom may take some time to process the recording before it is actually available. The sync to Google Drive happens on the hour mark, so if the recording is not available, it may take another hour to be transferred.
1. Future recordings of recurring meetings can be found in the same folder `youremail-Meeting Title`, even if alternate hosts start the recording.

### Ops Engineering Showcase

Starting in 2023 in FY24-Q1, a fresh new format for this showcase will include the recording and sharing of videos that team members have created. Once a video has been created, an async discussion issue [should be created](https://gitlab.com/gitlab-org/ci-cd/section-showcases/-/issues/new) using this [template](https://gitlab.com/gitlab-org/ci-cd/section-showcases/-/blob/main/.gitlab/issue_templates/Showcase%20Discussion.md) and listed under the relevant quarterly epic. Based on the amount of questions being discussed in the issue, an AMA may be set up to discuss further in a group setting.
Like before, these videos are intended to be opportunities for engineers to show off the things they've been working on.

Beginning in March 2023 all Ops teams are **required** to provide at least one showcase video and async discussion issue per month.  We require participation in this process because it helps reinforce our values of Results, Transparency, and Iteration.  In addition, these showcases are valuable in helping team members across the company better understand the progress and obstacles across the many product areas Ops team members are focused on.  They are also fun to watch.  These videos will be reviewed monthly by the Director of Engineering and other leaders in the group.  The team's Engineering Manager is the DRI for submitting the showcase, though in many cases the demo may be delegated to another member of the team.

Team members are encouraged to use these videos to transparently showcase the current state of their projects.  It is not encouraged to spend significant time prepping for these demos or only showcase finished, polished functionality; showing functionality in an incomplete state is encouraged.  Videos may be specifically recorded for this purpose or be excerpts from team meetings, etc.  Some suggested ideas to consider could be related to error budget improvements, performance improvements to current features, refactoring to codebase for future maintainability, etc.

[Ops Engineering Showcases](https://gitlab.com/gitlab-com/ops-sub-department/ops-engineering-management/-/issues/?sort=popularity&state=opened&search=Sub-Dept%20Highlights%20and%20Showcases&first_page_size=20)

#### Recordings

<details markdown="1">

<summary markdown="span">Past Recordings</summary>

#### Quarterly Recordings

**NOTE:** - changed to monthly recordings in `FY24-Q3`.

| Year | Quarter | Links |
| ------ | ------ | ------ |
| 2023 | FY24-Q1  | [November](https://gitlab.com/gitlab-com/ops-sub-department/ops-engineering-management/-/issues/260), [December](https://gitlab.com/gitlab-com/ops-sub-department/ops-engineering-management/-/issues/263), [January](https://gitlab.com/gitlab-com/ops-sub-department/ops-engineering-management/-/issues/269)|
| 2023 | FY24-Q3  | [August](https://gitlab.com/gitlab-com/ops-sub-department/ops-engineering-management/-/issues/242), [September](https://gitlab.com/gitlab-com/ops-sub-department/ops-engineering-management/-/issues/246), [October](https://gitlab.com/gitlab-com/ops-sub-department/ops-engineering-management/-/issues/250)|
| 2023 | FY24-Q2 | [Videos](https://gitlab.com/groups/gitlab-com/-/epics/2151) |
| 2023 | FY24-Q1 | [Videos](https://gitlab.com/groups/gitlab-com/-/epics/2099) |

#### Monthly Recordings

| Year | Month | AMEA | APAC | Async videos |
| ------ | ------ | ------ | ------ | ------ |
| 2022 | December | No showcases | No showcases |  |
| 2022 | November | No showcases | No showcases |  |
| 2022 | October | [Split GitLab Monolith into components](https://www.youtube.com/watch?v=cODM0xHqL28) | No showcases | [TaskScaler 101](https://www.youtube.com/watch?v=GU81g2oOtAQ) |
| 2022 | September | [Import packages with a CI pipeline](https://youtu.be/mk7gHFtUXpE)  | No showcases  |  |
| 2022 | August | No showcases | Async video -> | [Leader election in GitLab Agent for Kubernetes](https://youtu.be/Gz8NJJ2WFrE) |
| 2022 | July | [Video](https://youtu.be/gkZ0Re9sfi8) | No showcases | [MR Coverage Report](https://drive.google.com/file/d/1cf2AxtMDTgcF3F1fWcHdIWJL1ps-S_oa/view) & [CI Workflows](https://youtu.be/cwfRI9m3rRs) |
| 2022 | June | [Video](https://youtu.be/WLTHvv6z1B8) | [Video](https://youtu.be/YrFh7Dc0P2o) | [Demo](https://www.youtube.com/watch?v=7jEhyRBdQOM) |
| 2022 | May | [Video](https://www.youtube.com/watch?v=imi4MvUTqko) | No showcases | |
| 2022 | April | [Video](https://www.youtube.com/watch?v=cReKa3IvFTw) | [Video](https://youtu.be/cikmJS_CqqE)| |
| 2022 | March | [Video](https://youtu.be/4qmxGUh5GX0) | No showcases | |
| 2022 | February | [Video](https://youtu.be/HIT4UMwsf9U) | No showcases |  |
| 2022 | January | [Video](https://www.youtube.com/watch?v=ta-PXbO3zLY) | No showcases | [Jobs UI Refactor](https://www.youtube.com/watch?v=lJfjjbcEcFQ) |
| 2021 | December | [Video](https://youtu.be/rXHJHjEJZIk) | No showcases | |
| 2021 | November | [Video](https://youtu.be/bg-Dv9F_Sq4) | No showcases | |
| 2021 | October | [Video](https://www.youtube.com/watch?v=MOKr_4_0Rnc) | [Video](https://www.youtube.com/watch?v=60sLF3phB7g) | |
| 2020 | November | [Video](https://youtu.be/gkddYCRYdSk) | [Video](https://youtu.be/_nbAJODHyTs) | |
| 2020 | October | [Video](https://youtu.be/Abg5rCqRDVE) | Skipped | |
| 2020 | September | [Video](https://www.youtube.com/watch?v=hjHg_aG7Wr0) | [Video](https://www.youtube.com/watch?v=LUIdfAQf1B0) | |
| 2020 | August | [Video](https://www.youtube.com/watch?v=H47juOWB2F8) | [Video](https://www.youtube.com/watch?v=RABnrVmios0) | |

</details>

#### Hackathons

Hackathons provide a great opportunity for team members to experiment with working on ideas as possible features that can be integrated into GitLab in the future. The intent is to inspire creativity and encourage collaboration amongst those you may not have the opportunity to work with on a regular basis, set aside regular milestone deliverables, and have some fun with tackling different challenges.

With the IT landscape rapidly changing with explorations in emerging technologies, having Hackathons take place twice a year offers everyone a chance to contribute to different areas of interest.

## Planning Processes

Planning processes followed by teams in the Sub-department:

- [General Ops Sub-department Planning Process](/handbook/engineering/development/ops/general-planning/)

### Forced Priority planning/scheduling

Our [prioritization framework](/handbook/product/product-processes/#prioritization-framework) describes a number of [Forced Priority](/handbook/product/product-processes/#forced-prioritization) labels that present a high risk to our customers and our business. As such, it's critical that we complete this work [within the appropriate SLO/SLAs](/handbook/engineering/infrastructure/engineering-productivity/issue-triage/#severity) where possible. An example of this are security issues, here's a dashboard for past due and soon to be due security issues: https://10az.online.tableau.com/t/gitlab/views/DRAFTIssueTypesDetail/PastDueIssueList/d1401498-2050-4321-b0f4-ab51047fbeb1/1909fa14-fdf0-4682-8a07-f02d8c8d4803

With this in mind, here's a process that groups are encouraged to use and iterate on in the event that they don't have an existing approach or are falling behind on SLA/SLOs.

To be clear, this is not a required process, if your group's approach is working, please continue with that! Ownership of scheduling forced priority work falls on our whole team, not a particular person.

1. When forced priority issues are assigned to your group, schedule those issues right away regardless of severity label
1. Have the team review the issue to make sure there's a viable solution and plan (weight the issue)
1. Have someone in the group assign themselves to work on the issue
1. Update the issue regularly with progress
1. Treat blockers with the same *or higher* priority than the original issue

## Sustaining / Non-Sustaining planning exercise

In FY23, each EM in Ops was asked to participate in a [capacity planning exercise that involved evaluating the sustaining vs non-sustaining work](https://gitlab.com/gitlab-com/ops-sub-department/ops-engineering-management/-/issues/125) in their team's backlog. This exercise was also repeated by the [Verify Pipeline teams in FY24](https://gitlab.com/groups/gitlab-org/-/epics/11284) to better understand Engineering capacity needs for each of the Pipeline teams.

Each team created a staffing justification based on the breakdown of sustaining vs non-sustaining issues in their backlog. EMs estimated the number of backend engineers and frontend engineers that would be needed, per quarter, of the given fiscal year to burndown these issues, as ordered by the [prioritization framework](/handbook/product/product-processes/#prioritization-framework) and relevant priority/severity labels.

### Sustaining work

Sustaining work refers to the most important security, availability, scalability and performance, essential for "keeping the lights on" for the feature categories the team supports. Capacity planning for sustaining work was based on meeting the SLO/SLAs of these types of issues.  The labels for sustaining work include, but are not limited to:

- `bug::vulnerability` (note: specifically this label, as an issue with only a `security` label does not make it a security vulnerability)
- `bug::availability`
- `bug::performance`
- `infradev`

### Non-Sustaining work

Non-sustaining effort refers to all other work the teams would work on, including:

- `type::feature`
- `type::maintenance` (e.g. technical debt that does not impact availability, scalability, performance, etc)
- all other `type::bug` issues not covered as sustaining work
- reviewing community contributions
- responding to customer inquiries / support requests

## Ops Promotion Process

### Tips for writing Promotion Documents

- The format and guidelines are [as listed in this Google Doc template](https://docs.google.com/document/d/1nDkYGK2yhe8pD-lnMGmEF-Cf0IlGgVOznjXMq9FxGiQ/edit)
- **Results** is our most important value to cover in promotion docs, especially at Staff+ levels. This should be short (making it succinct can be easier to understand), but descriptive enough to show the impact these results have had.
- **Impact** should also be highlighted (quantifiable where possible), with examples such as:
  - customer-facing impact (CMAU, ARR growth, retention, adoption, etc)
  - improvements in efficiency, team process or other team metrics
- Examples demonstrating leadership, ownership and accountability (going *above and beyond* for your current role):
  - Your role on a project or initiative ("how did you successfully help deliver X?", "what role did you play in this Working Group?")
  - MR Review efforts (your role as a maintainer for your team or for the rest of the department in your domain)
  - Collaborating with your team's stable counterparts
  - Mentoring/coaching others on your team or outside your team (e.g. participation in mentorship programs, coaching in MRs as a reviewer/maintainer)
  - Influencing your team's technical direction or contributions to more strategic discussions
    - For Staff+ engineers: this could mean authoring or contributing to architectural design documents or leading technical discussions with your team or driving cross-stage collaboration
  - Involvement in recruiting efforts (e.g. as an interviewer and/or reviewer of the technical assessment)
- Examples of promotion documents from previously approved Ops promotions can be found in this [Google Drive folder](https://drive.google.com/drive/folders/15hQXI2H9JSdifmjiSGnyDfcVRJ8LKScS)

### Promotion Document Reviews

1. Team Member and Manager work together to create promotion document.
1. Promotion document is shared with Ops Sub-Department managers in #ops-staff-confidential channel (private to Ops Managers, Senior Managers, Director) to receive feedback on the document content and how it calibrates with others in the Sub-Department.  This can be done early and often.
1. Manager requests another Manager in the Sub-Department review and approve the document.
1. Manager requests Senior Manager in the Sub-Department review and approve the document.
1. Manager requests Director add Team Member to list of Sub-Department planned promotions.  If the team member cannot be added Director will provide feedback to Manager as to why.
1. Director presents promotion doc at Development Department quarterly promotion review meeting.  If the promotion is not approved Director will provide feedback to Manager as to why.

### Quarterly Promotion Review Meeting

Ops Managers, Sr. Managers, and Directors meet in the last month of each quarter to:

1. Review promotion projections for each group.  Managers add a list of their direct reports who they anticipate will be ready for promotion in the next 3 quarters to the meeting agenda.  *Note these lists may change and are not a guarantee a team member will be promoted in a specific quarter.  The lists are used for planning purposes, to help us anticipate the number of team members approaching promotion, budget impact, and to support calibration across the group.*
These lists should include:
    1. Team Member name
    1. Targeted promotion quarter
    1. Link to promotion doc
    1. Whether the doc has received any Ops Manager or Ops Senior Manager approvals.
1. Review Ops team member promotion docs planned to be presented at Development Department quarterly promotion review meeting.

#### Promotion Mentor for Staff+ Roles

Team members who aspire to advance within our organization are advised to identify a [mentor](/handbook/people-group/learning-and-development/mentor/) in the targeted role, and reach out to them about a mentorship. Involving a mentor in the peer promotion review process is beneficial, as it ensures:

1. The feedback is informed by comprehensive understanding and relevance to the individual's development.
1. The feedback, being familiar and constructive, will not catch the mentee off guard and will provide clear directions for improvement from peers they'd work with directly.

Individuals pursuing promotion, possibly in consultation with their managers, should maintain regular communication with their mentor to evaluate progress and explore further opportunities for growth. This initiative also aims to cultivate leadership qualities among our senior Staff+ engineers.

We plan to trial this optional process in Ops during Q1FY25. Progress and established mentor/mentee pairs can be found in this [epic](https://gitlab.com/groups/gitlab-org/ci-cd/-/epics/6)

## Ops Hiring process

We have limited capacity in the recruiting team so hiring managers are experimenting with the [Ops Hiring process](/handbook/engineering/development/ops/hiring-process/).  We also hold a weekly hiring manager sync meeting (see Meetings section).

## Objectives & Key Results (OKRs)

### Creating OKRs

- Target a 70% completion rate for OKRs so that we are setting goals ambitiously. They should be challenging enough that [accomplishing 100% is a stretch goal,since GitLab considers OKRs to be stretch goals by default](/handbook/company/okrs/#okrs-are-stretch-goals-by-default).
- If your OKRs are associated with any specific types of issues, consider reviewing the [prioritization framework](/handbook/product/product-processes/#prioritization), and align with your team on your OKRs priority relative to one another (for example, OKRs with issues with "forced prioritization") and be clear on planning of the associated work over the quarter.
- Ensure Key Results (KRs) are measurable, by specifying a number (% or unit) as the target. Be clear on the starting number, and the expected end result (e.g. `from x to y`).
- Ideally create no more than 9 KRs per quarter, ideally with approximately 3 KR per objective.

### Tracking and completing OKRs

- Tracking [quarterly OKRs for Ops Engineering](/handbook/engineering/development/ops/quarterly-okrs/) groups.
- DRIs are expected to score OKRs on a regular basis, at least monthly, if possible.
- At the end of the quarter, DRIs can add a retrospective as a comment to reflect on the progress of their KR, in the following format:

```markdown
**Good**
- Things that went well...

**Bad**
- Things that didn't go so well...

**Try**
- What might you do differently next time?
```

## Key Projects

For projects that span many milestones we are experimenting with additional project management processes.

Key projects will be listed in the table below:

| Project Name                                  | Link to Project Plan                                                                                                                                  | DRI                         | [Tech Leads](/handbook/engineering/ic-leadership/tech-lead/#the-tech-lead-role)                  |
|-----------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------| --------------------------- |
| CI Data Partitioning                          | [Project plan](/handbook/engineering/development/ops/verify/pipeline-execution/project-plans/ci-data-partitioning/)                                   | Caroline Simpson            | Marius Bobin                |
| CI Primary Key Conversion                     | [Project plan](/handbook/engineering/development/ops/verify/pipeline-execution/project-plans/ci-pk-conversion/)                                       | Drew Stachon / Caroline Simpson | Tianwen Chen            |
| Container Registry v2 Self-Managed            | [Project plan](/handbook/engineering/development/ops/project-plans/container-registry-v2/)                                                            | Crystal Poole               | Hayley Swimelar             |
| CI Secrets Management                         | [Project plan](/handbook/engineering/development/ops/project-plans/secrets-manager/)                                                                  | Scott Hampton               | Albert Salim                |
| Cluster Web Terminal                          | [Project plan](/handbook/engineering/development/ops/project-plans/cluster-web-terminal/)                                                             | Nicolò Maria Mezzopera      |                             |
| Kubernetes Dashboard                          | [Project plan](/handbook/engineering/development/ops/project-plans/k8s-dashboard/)                                                                    | Nicolò Maria Mezzopera      |                             |
| Autoscaling for GitLab Runner                 | [Project Plan](/handbook/engineering/development/ops/verify/runner/project-plans/#autoscaling-provider-for-gitLab-runner-to-replace-docker-machine)   | Nicole Williams             |                             |
| Dedicated SaaS Runners For GitLab Dedicated   | [Project Plan](/handbook/engineering/development/ops/verify/runner/project-plans/#dedicated-saas-runners-for-gitlab-dedicated)                        | Nicole Williams             |                             |
| CI Steps                                      | [Project plan](/handbook/engineering/development/ops/verify/project-plans/ci-steps/)                                                                  | Kamil Trzciński / Cheryl Li | Joe Burnett              |

### Completed Projects

| Project Name                                  | Link to Project Plan                                                                                                                                  | DRI                       | Tech Leads                | Completed |
|-----------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------| --------------------------| ------- |
| CI/CD Catalog                                 | [Project plan](/handbook/engineering/development/ops/project-plans/ci-catalog/)                                                                       | Mark Nuzzo                  | Laura Montemayor and Avielle Wolfe | FY25-Q1 |
| Merge Train Improvements (Fast-Foward Support)| [Project plan](/handbook/engineering/development/ops/verify/pipeline-execution/project-plans/merge-trains/) | Caroline Simpson | Allison Browne, Hordur Yngvason | FY24-Q4 |
| O11y Distributed Tracing | [Project plan](/handbook/engineering/development/ops/monitor/observability/#weekly-project-plan) | Nicholas Klick | | FY24-Q4 |
| GCP Secrets Integration | [Project plan](/handbook/engineering/development/ops/project-plans/gcp-secrets-integration/) | Scott Hampton | Albert Salim | FY24-Q4 |

### Key Project Planning

Projects which are listed as key projects should create these project planning artifacts:

#### Project Plan in the handbook under `/engineering/development/ops/project-plans/<project_name>/index.html.md.erb`

Since the project plan is stored in the handbook it is easy to track changes in the project plan and see how it evolves over time.

Project plans should (roughly) follow this format (from https://www.rubick.com/weekly-project-plans/):

```text
Weekly project plan template


Week of Jan 4th

    Single chart shows up in Slack. Data is canned.
    Schedule risk: we're validating our list of chart types are all technically feasible. We'll demo outcome of that investigation.

Week of Jan 11th

    Chart data reflects live information, and is functional in Slack chart.
    Additional chart type shows in Slack room, with most basic visual design.
    We've shown to at least one alpha customer for feedback. We start sharing with them every week from here on out.
    Jessica is on-call and doing interrupt-driven work for week.

Week of Jan 18th

    Most important feedback from alpha customers incorporated. Other work is prioritized to future milestones.
    Last chart type added.

Week of Jan 25th

    Holiday Jan 26th.
    Charts look great and are thoroughly tested, instrumented. We'll show usage dashboards.
    Release end of week.

```

Updates to the plan should be made weekly, marking weekly items done and making updates based on current information.  Authors should merge updates to their project plans without review/approval.

We expect the use of project plans to reduce the amount of EM reporting by serving as a SSOT for project execution planning.  For example this info no longer needs to be included in async updates (replace with a link to project plan).

### Key Project Review Meetings

We hold periodic sync meetings to review key projects and collaborate on the plans for these important deliverables.

Key Project DRIs should prepare for the meeting by creating a [Key Project Review Prep Issue](https://gitlab.com/gitlab-com/ops-sub-department/ops-engineering-management/-/issues/new?issuable_template=key-project-review-prep).  This should be completed and shared at least 48 hours in advance of the meeting to allow time for other team members to review the content.

The objective is to keep these meetings focused on execution, technical planning, and accountability within the Engineering group. These are open to anyone who wishes to attend. When it's necessary to involve a broader group in some cases, we can plan additional follow ups case by case.

We aim to meet synchronously where possible given the benefits of being able to talk through the project in a higher bandwidth context. Rescheduling is preferred if the proposed dates are not feasible for attendees.  We could re-evaluate whether we can achieve the same goals with async after we have more experience running the process.

The focus of the meeting time will be on topics such as:

1. Do we all understand the goals, plan, and timeline?
1. Obstacles/risks and mitigation plans
    1. Unmet dependencies
    1. Staffing levels
    1. Competing priorities
    1. How to unblock and/or accelerate
1. Recognizing progress and key team member contributions

## Async Updates (No Status In Meetings)

We have a policy in Ops to keep status updates out of meetings. Instead of reporting on status in meetings Directors, Senior Engineering Managers, Engineering Managers and Principal Engineers provide regular async updates.

The content of these updates varies by individual and role:

### Async Update Guidance

#### Engineering Manager

1. Cadence: Weekly to Monthly (Optional)
1. Topics:
    1. Highlights & Accomplishments
    1. Team Projects & Priorities (progress, blockers, key decisions, etc.)
    1. What's next - what to expect in next update

#### Senior Engineering Manager

1. Cadence: Monthly (Optional)
1. Topics:
    1. Milestone Review
        1. Allocation of focus in milestone plans (major features, maintenance, etc.)
        1. What tradeoffs or decisions should be made prior to Milestone kickoff? For example:
            1. Is the team overcommitted?
            1. Does the allocation of effort need to shift to meet specific goals? (e.g. Security SLAs)

#### Principal Engineer

1. Cadence: Weekly (Optional)
1. Topics:
    1. Highlights & Accomplishments
    1. Projects & Priorities (progress, blockers, key decisions, etc.)

### To create a weekly async update

1. Create a GitLab issue in any project.
2. Apply the label `~OpsSection::AsyncUpdate`.  (The label `~OpsSection::Weekly-Update` can also be used for backwards compatibility reasons.)
3. Choose a descriptive title.  Include your update in the issue description.

### To HIGHLIGHT an item for broader sharing

1. Begin any paragraph in your update with the text `HIGHLIGHT:`
1. These paragraphs will automatically be copied into the Highlights & Accomplishments section of the monthly Director's update.

### To review Ops weekly async updates

1. All issues with the `~OpsSection::AsyncUpdate` or `~OpsSection::Weekly-Update` label are summarized in weekly issues in the [Ops Status Updates](https://gitlab.com/gitlab-com/ops-sub-department/ops-status-updates/-/issues) project.
1. All team members are encouraged to comment and ask questions in weekly async update issues.  This provides useful feedback to the author and opportunities to collaborate.
1. Director reviews all updates weekly (from the prior week) and provides feedback.
1. Senior EMs reviews all updates from their teams weekly (from the prior week) and provides feedback.

### Benefits of reporting and reviewing status async vs. synchronously in meetings

1. Collaboration - By sharing announcements, achievements, goals, and plans we are empowering team members with the information they need to make sound decisions and succeed in their roles.
1. Results - Async updates provide an important channel for sharing accomplishments and progress.
1. Efficiency - Expecting each team member to [poll](https://en.wikipedia.org/wiki/Polling_(computer_science)) for the status they need is extremely inefficient and becomes more inefficient as the organization grows. By using a [Publish Subscribe model](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern) we are able to share information much more efficiently.
1. Diversity, Inclusion & Belonging - Async status is more inclusive of team members across timezones.  Not every team member will be able to make a sync meeting (due to timezone or other factors) but everyone can participate in an async update.
1. Iteration - Taking the time to checkpoint where we are at each week prompts the author and readers to consider ways to iterate and to reflect on incremental progress.
1. Transparency - Sharing information in a consistent, accessible way increases transparency and reduces the threshold for team members to contribute.

## Escalations from Support Team

We are piloting a process to make coordinating with the Support team on customer escalations more efficient.

See [How to Use GitLab.com to Formally Request Help from the GitLab Ops Development Team](/handbook/support/workflows/how-to-get-help/#how-to-use-gitlabcom-to-formally-request-help-from-the-gitlab-ops-development-team) for process details.

If you encounter an Ops-related customer escalation, that seems to have a high
[customer priority](/handbook/product/product-processes/customer-issues-prioritization-framework/#priority-points),
and would benefit from additional visibility, please post a link with a short description in
[`#doe-ops` Slack channel](https://gitlab.slack.com/archives/CT9CM1VDJ).

### Supporting Customers on Dedicated instances

When teams are asked to triage support requests for customers on GitLab Dedicated and engineers need access to their logs, a sync can be arranged between the engineer and the assigned Support Engineer for a screen sharing session.
However, when further troubleshooting is needed by the engineering team or async collaboration is preferred, follow these steps to request access:

1. Create an [access request](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issue%5Bassignee_id%5D=&issue%5Bmilestone_id%5D=) (AR) and list the engineers who require access.  (Note that EMs can create this issue and provide `Manager Approval` on behalf of the engineers)
1. Assign the AR to the EM and PM of the [Dedicated group](/handbook/engineering/infrastructure/team/gitlab-dedicated/) for *read-only* log access.
1. Reference the AR issue in the support tracker issue so that the Support Engineer is aware.
