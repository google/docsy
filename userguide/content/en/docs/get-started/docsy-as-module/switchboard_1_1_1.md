---
title: Switchboard team
---

## Summary

Switchboard is a team within the [Dedicated Group](/handbook/engineering/infrastructure/team/gitlab-dedicated/). Our mission is to empower external GitLab Dedicated customers to manage their tenant environments and reduce the operational overhead on the Environment Automation team so we can scale up the GitLab Dedicated offering. We follow the same processes as listed on the [Dedicated Group](/handbook/engineering/infrastructure/team/gitlab-dedicated/), unless a difference exists which is explicitly noted on this page.

### Resources

- [Switchboard Direction Page](https://about.gitlab.com/direction/saas-platforms/switchboard/)
- [Switchboard Demo Library](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/switchboard/-/blob/main/docs/walkthrough-library.md)

## Team Members

{{< team-by-manager-slug "ashiel" >}}

Product Manager: [Loryn Bortins](/handbook/company/team/#lbortins)
Technical Writer: [Emily Sahlani](/handbook/company/team/#emily.sahlani)
Product Designer: [Jesse Hoek](/handbook/company/team/#jhoek)

## Working with us

To engage with the Switchboard team:

- [Create an issue](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/issues/new) in the GitLab Dedicated team issue tracker
- Label the issue with:
  - `component::Switchboard`
  - `workflow-infra::Triage`
  - `team::Switchboard`
- When creating an issue, it is not necessary to `@`mention anyone
- In case you want to get attention please use the specific team handle, `@gitlab-dedicated/switchboard`, as defined in [Dedicated group hierarchy](/handbook/engineering/infrastructure/team/gitlab-dedicated/#gitlab-group-hierarchy)
- As a cross-functional team Switchboard uses `@gitlab-dedicated/switchboard/frontend-engineers` and `@gitlab-dedicated/switchboard/backend-engineers` internally to seek input from engineers with specific expertise
- [Switchboard issue board](https://gitlab.com/groups/gitlab-com/gl-infra/gitlab-dedicated/-/boards/4498935?label_name[]=component%3A%3ASwitchboard) tracks all of the team's current work

- Slack channels
  - For Switchboard specific questions, you can find us in [#g_dedicated-switchboard-team](https://gitlab.slack.com/archives/C04DG7DR1LG)
  - Our Slack group handle is `@dedicated-switchboard-team`
  - Issues relevant to the wider Dedicated Group may be raised [#g_dedicated-team](https://gitlab.slack.com/archives/C025LECQY0M)
  - Other teams in Dedicated group have their own work channels for team work discussions:
    - [#g_dedicated-environment-automation-team](https://gitlab.slack.com/archives/C074L0W77V0)
    - [#g_dedicated-us-pubsec](https://gitlab.slack.com/archives/C03R5837WCV)

## Requesting Access to the Switchboard application

- Create an [Access Request](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request) specifying
  - the specific environment ( Test / Beta / Production )
  - level of access required (Readonly, Support, Provisioner, Operator)
  - justification for the access
- Access & Provision Details for the application can be found in the `Switchboard - GitLab Dedicated` section of the [Tech Stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml)

## How we work

### Meetings and Scheduled Calls

Our preference is to work asynchronously, within our project issue tracker as described in [the project management section](/handbook/engineering/infrastructure/team/gitlab-dedicated/#project-management).

The team does have a set of regular synchronous calls:

- `Switchboard Sync` - During this call, we are sharing important information for team-members day-to-day, as well as project items requiring a sync discussion
- 1-1s between the Individual Contributors and Engineering Managers

Impromptu Zoom meetings for discussing Switchboard work between individuals are created as needed.
It is expected that these meetings are private streamed, or recorded(1*), and then uploaded to [GitLab Unfiltered playlist](https://www.youtube.com/playlist?list=PL05JrBw4t0Kp3NBMl7c0DGXCjW5rSPeOK).
The outcome of the call is shared in a persistent location (Slack is not persistent). This is especially important as the team grows, because any decisions that are made in the early stage have will be questioned in the later stages when the team is larger.

`1*` Exceptions to the recording rule are: 1-1 calls, discussions around non-project work, and in cases where parties do not feel comfortable with recording or we cannot record due to the nature of content discussed. However, even with the exceptions, outcome of project related discussions need to be logged in a persistent location, such as the main issue tracker.

### Tracking, Planning & Delivering Projects

#### Resources

- [Switchboard team roadmap](https://gitlab.com/groups/gitlab-com/gl-infra/gitlab-dedicated/-/roadmap?state=all&sort=start_date_asc&layout=WEEKS&timeframe_range_type=CURRENT_QUARTER&label_name[]=team::Switchboard&progress=COUNT&show_progress=true&show_milestones=false&milestones_type=ALL&show_labels=false)
- [Switchboard team top-level epic](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1048)
- [Switchboard team issue board](https://gitlab.com/groups/gitlab-com/gl-infra/gitlab-dedicated/-/boards/4498935?label_name[]=team%3A%3ASwitchboard)
- [Switchboard technical writing board](https://gitlab.com/groups/gitlab-com/gl-infra/gitlab-dedicated/-/boards/7068209?label_name[]=component%3A%3ASwitchboard&label_name[]=Technical%20Writing)
- [Dedicated Issue Tracker](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/issues/?sort=created_date&state=opened&first_page_size=100)

#### Quarterly Planning

Quarterly planning is owned and driven by the Switchboard EM and PM.

1. EM or PM creates a quarterly planning issue using the Dedicated `quarterly_planning` issue template.
    - Set the issue title to `Switchboard - FYXXQY planning` where XX is the year and Y is the quarter
    - Ideally planning should be kicked off at least a quarter in advance. The planning issue for the upcoming quarter should be created on or before the first day of the second month of the current quarter

2. EM & PM brainstorm asynchronously on the issue
3. During month 3 of the current quarter EM or PM
   - Reach out to the team for input
   - Ensure all dependencies are communicated with the relevant teams
   - Prioritise the objectives
   - Document the associated epics
4. EM creates a delivery epic for the quarter that will be used in Grand Reviews and updates the epic-summaries bot to reflect this change

#### Directly Responsible Individuals (DRIs)

Each and every project is owned and driven by a Directly Responsible Individual or [DRI](/handbook/people-group/directly-responsible-individuals/).
Though Switchboard is a cross-functional team the DRI is responsible for delivering the project output including UX design, product decisions, frontend and backend implementation along with any other deliverables, regardless of their expertise.
For example if the DRI is a backend engineer, while they may not directly implement every issue, they are still responsible for checking progress to ensure other team members have access to the information needed to fulfil the project.
The DRI will not directly implement every piece of the project but they are responsible for ensuring it is delivered. This involves collaborating with the EM to ensure issues are prioritised within the engineering team, collaborating with the various functions within the team to ensure they have access to the information needed to fulfil the project (UX, frontend, backend, product etc), highlighting possible risks and ensuring alignment across the team.

We use issues to collaborate on ideas and solve problems. Everyone working on issues is responsible for keeping its description (SSoT) up to date with the latest decisions, and to ensure any follow-up resulting work is being tracked. The DRI is responsible for ensuring discussion threads reach a decision.
DRIs should also drive a [pivot to synchronous discussion](/handbook/company/culture/all-remote/asynchronous/#when-to-pivot-from-asynchronous-to-synchronous) when a thread is not yielding a timely conclusion.
In the case where the UX design has been agreed upon prior to implementation, the DRI can accelerate the MR review process and reduce the workload on the PM and UX designer by ensuring the MR deliverable matches the design provided in Figma and approving accordingly.

The Epic Refinement process followed by the DRI at the beginning of the project is described below in the [Epic Refinement](#epic-refinement) section.
The DRI is also responsible for weekly status updates ([further details](/handbook/engineering/infrastructure/platforms/project-management/#projects-are-reviewed-weekly-in-the-grand-review)) and ensuring the epic has a demo link attached (see [Switchboard Demos](#switchboard-demos)).
The instructions for delivering the final status update and closing an epic can be found [here](/handbook/engineering/infrastructure/platforms/project-management/#when-a-project-is-finished).

#### Epic Refinement

Switchboard team process to refine epics:

1. Identify a [DRI](/handbook/people-group/directly-responsible-individuals/) for the epic
   - Team members can volunteer or the EM may ask team ask specific team members to act as DRI
1. Identify any missing requirements
   - All team members ask questions in the comments of this issue to drive out any edge cases
1. DRI labels the epic as ~"workflow-infra::Ready"
1. DRI ensures Epic Kick-Off is complete - see [Epic Template](#epic-template)
1. Assign Due Date & Start Date
   - DRI, EM & PM work together to assign due date based on team capacity, external deadlines and amount of work involved
1. DRI identifies at least one demo that will be delivered with the epic and adds a brief outline to the epic description (see [Switchboard Demos](#switchboard-demos)).
1. For substantial code modifications or architectural additions, the DRI creates and shares draft technical documentation with team early, if possible, before development work starts.
   1. Draft documentation should contain a high level technical explanation of the new system and how it is meant to work
   1. Illustrative diagrams like sequence diagrams are encouraged
   1. Technical documentations can be added to the switchboard project where they currently live under `./docs` directory
1. EM or DRI labels individual issues as ~"workflow-infra::Triage"
1. DRI enables issues to be worked on in parallel where possible so that multiple engineers can contribute to a single epic
1. If the epic involves both Frontend and Backend implementation the issues should be labeled accordingly
1. Team members pick up issues and start working on them
1. Team members use Progress Threads to track progress in individual issues
1. Team checks in on progress during Switchboard Sync
   - Any epics with no issues to raise can be read-only
   - Priority given to discussions of epics based on soonest due date
1. If due date is not realistic team member comments on the issue as early as possible so that the team can work together to address this

Note 1, 2 & 4 can be carried out in parallel

#### Issue Refinement

Switchboard team process to refine issues:

1. When an issue is created and ready to be refined it is labeled ~"workflow-infra::Triage"
1. PM and EM ensure that the `Open` and ~"workflow-infra::Ready" columns are prioritised
1. Team members look at issues in the `Open` column of the [issue board](https://gitlab.com/groups/gitlab-com/gl-infra/gitlab-dedicated/-/boards/4498935?label_name[]=team%3A%3ASwitchboard) and ask questions on the issue to drive clarity
1. When there are no outstanding questions on the issue it can be labeled ~"workflow-infra::Ready" and it will automatically move into the `Ready` column
1. If the issue exposes text to users in any way the `technical writing` label should be added. For example if the issue changes UI text, shows an error message, adds a field etc
1. If the issue requires Frontend implementation the `frontend` label should be used
1. DRI enables issues to be worked on in parallel where possible so that multiple engineers can contribute to a single epic
1. The default is to keep both frontend and backend implementation for a single piece of functionality on the same issue so that discussions are centralised, implementation is carried out in parallel and frontend and backend engineers are in sync
1. If the implementation requires modification or creation of an API endpoint, a plan on endpoint, params structure and return data structure should be agreed upon between Frontend and Backend as early as possible to avoid re-work.
1. Frontend and backend implementation should be delivered in separate MRs
1. If the implementation cannot be done in parallel, or there is a likely to be a meaningful delay between backend and frontend implementations, or if the backend can deliver value independently the issue should be split and the relationship clearly identified by linking the issues
1. SRE dependencies should be called out as early as possible with requirements clearly documented in issues ([example SRE dependency issue](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/issues/2798))

#### Issue & Epic tracking

1. Engineers use Progress Threads to share progress in an async fashion
1. At the beginning of the Switchboard Sync the team will check in on epics labeled ~"workflow-infra::In Progress" or ~"workflow-infra::Triage" to ensure due dates are appropriate and highlight any blockers
1. Epic DRIs update the status in the Epic Description every Wednesday in preparation for the [Grand Review](/handbook/engineering/infrastructure/platforms/project-management/#projects-are-reviewed-weekly-in-the-grand-review)
1. Epic DRIs review the due date weekly. The epic status update should include the DRI's confidence level in the due date and any risks to delivery

#### Picking up work / What to work on next

1. ~"workflow-infra::Ready" column on the [issue board](https://gitlab.com/groups/gitlab-com/gl-infra/gitlab-dedicated/-/boards)
   1. Pick an issue from the ~"workflow-infra::Ready" column on the [issue board](https://gitlab.com/groups/gitlab-com/gl-infra/gitlab-dedicated/-/boards/4498935?label_name[]=team%3A%3ASwitchboard)
   1. Assign the issue to yourself and set to ~"workflow-infra::In Progress"
   1. Update the issue description with an `Implementation Plan` where relevant
   1. Create a `Progress Thread` on the issue and update daily

1. [Switchboard team top-level epic](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1048)
    1. Look at the Switchboard top level epic and offer to work on issues with the nearest due date
    1. Use the [Switchboard team roadmap](https://gitlab.com/groups/gitlab-com/gl-infra/gitlab-dedicated/-/roadmap?state=all&sort=start_date_asc&layout=WEEKS&timeframe_range_type=CURRENT_QUARTER&label_name[]=team::Switchboard&progress=COUNT&show_progress=true&show_milestones=false&milestones_type=ALL&show_labels=false) for guidance

1. `Open` column on the [issue board](https://gitlab.com/groups/gitlab-com/gl-infra/gitlab-dedicated/-/boards/4498935?label_name[]=team%3A%3ASwitchboard)
   1. Look at the issues at the top of the `Open` column
   1. For each issue ask questions and drive a discussion to identify any missing information
   1. Mark the issue as ~"workflow-infra::Ready" if it is ready to be worked on or @mention the EM if you are not confident to do so

#### Switchboard Demos

A demo enables a team member to share progress or the final output of an issue or epic. The focus is on sharing information, not creating an oscar winning documentary, so as a team we use the [boring solution](/handbook/values/#boring-solutions) of either a screen recording, a recorded Zoom meeting or Loom. A link to the recording is added to the epic description.

The epic [DRI](/handbook/people-group/directly-responsible-individuals/) is responsible for identifying at least one demo that will be delivered with the epic when the epic is being kicked off. For example _When the functionality x is delivered (or issue y is Done) we will demo functionality x_.
 Team members are encouraged to time demos to be delivered shortly before the fortnightly Switchboard Team Syncs whenever possible so that any synchronous Q&A can happen during already reserved time.
Team members may choose to create additional demos to share progress or delivery milestones.

#### Issue Templates

Switchboard maintains the following issue templates:

| Template                                    | User                    | Use case                                                                                                                              | Further Details                                                                                                                     |
|---------------------------------------------|-------------------------|---------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| `switchboard_bug.md`                        | GitLab team members     | Reporting a bug in the Switchboard application                                                                                        | Usually used by EA and Switchboard team members                                                                                     |
| `feature_proposal_switchboard.md`           | GitLab team members     | Proposing a new feature                                                                                                               | Usually used by Switchboard team members. Could possibly be replaced by Epic template or updated to ensure more fields are optional |
| `switchboard-feedback.md`                   | GitLab team members     | This is used to make suggestions and provide feedback to Switchboard. It feeds into the EA Requests epic which the EM & PM prioritise | This template is used regularly by EA team members to provide feedback                                                              |
| `switchboard_tenant_model_schema_update.md` | EA team members         | Tenant Model Schema Updates                                                                                                           |                                                                                                                                     |
| `switchboard_tenant_onboarding_request.md`  | Onboarding DRI          | Kicks off the Dedicated onboarding process                                                                                            | Generally used by Dedicated PMs                                                                                                     |
| `create_onboarding_tenant_model_request.md` | Onboarding DRI          | Used to track the creation of the OnboardingTenant in preparation for onboarding a new Dedicated customer                             | Generally used by Dedicated PMs                                                                                                     |
| `request_for_switchboard_help.md`           | Support Engineers       | Highlight an issue and request help from Switchboard team members                                                                     |                                                                                                                                     |
| `switchboard_team_member_onboarding.md`     | Switchboard EM          | Onboard a new team member to the Switchboard team                                                                                     |                                                                                                                                     |
| `switchboard_internal_issue.md`             | Switchboard team member | This template is used by DRIs to create issues in pre-existing well-defined epics                                                     |                                                                                                                                     |

### Merge Request Review Guidelines

We specifically adhere to the [GitLab Code Review Guidelines](#gitlab-code-review-guidelines) and follow
the [Dedicated group principles](/handbook/engineering/infrastructure/team/gitlab-dedicated/#merge-requests) when requesting merge request reviews.

#### Merge request review process

As the Switchboard team is currently small, we use an 'Approve and Merge' approach:

1. When you're ready to have your merge request reviewed, select one or more [Switchboard reviewers](https://gitlab.com/groups/gitlab-dedicated/switchboard/reviewers/-/group_members).
   - If you're not certain about who to choose, you can use the [reviewer roulette](#reviewer-roulette) to randomly select a reviewer.
   - If the issue is labeled `technical writing` add the Switchboard technical writer as a reviewer
1. Reviewers will perform a review based on [reviewing a merge request guidelines](https://docs.gitlab.com/ee/development/code_review.html#reviewing-a-merge-request).
1. If satisfied, a reviewer will approve and merge unless other reviewers have questions or suggestions that are not addressed.
1. If the merge request contains the required approvals, the reviewer will trigger a pipeline and set auto-merge.
   - If the reviewer does not have merge permission, they should seek out a maintainer for merging.

##### Additional UI Review Process

In addition to the above when a change is being proposed to the UI the following extra steps should be followed:

**UI changes visible to internal GitLab users:**

1. MR author cc's PM & UX Designer on the MR but they are not reviewers or blockers of the merge
1. If they have any suggestions they can be dealt with on the MR or on a later MR at the MR author's discretion
1. Eventually the PM & UX Designer will be reviewers on the internally visible UI updates but our process is not there yet nor is their capacity
1. If you require help or guidance with the UX or copy please ask **before** implementation begins on the issue

**UI changes visible to external customers:**

1. It is highly important to figure out any outstanding questions on the issue, including design changes, copy changes, and product requirements so that we can avoid ambiguity at the MR stage. This must translate to a concrete conclusion of design discussions in the issue before UI code changes are started.
1. In the event of a missing UX/product piece at the MR stage, the DRI and issue assignee will collaborate to make a decision about whether the missing piece can be resolved on the MR or if it needs to be moved back to the issue for resolution. This is in accordance to the [DRI definition](/handbook/people-group/directly-responsible-individuals/#empowering-dris).
1. The PM and Designer will deal with these requests as a top priority.
1. Add the PM as reviewer on the MR to keep them updated. This review will not impede the MR progress, and the PM will handle it as a high priority. Ideally, product requirements should be finalized in the issue.
1. If there is a new copy change, add the Technical Writer as a reviewer to keep them informed and this will be non-blocking (copy should ideally be agreed on in the issue). Additionally add the `Technical Writing` tag to the MR.
1. Cc the UX Designer on the MR and when they are ready to be core reviewer this will be communicated to the team

 **Note:** If significant discussion ends up being needed for a UI change (internal or customer facing) after the MR has been opened, that discussion should be moved back to the issue to resolve and the MR marked as blocked. These discussions will be high priority to resolve and the issue should be assigned to the PM and Designer until progress on the MR can resume.
Notes:

- It is our intention to move towards a typical 'reviewers and maintainers' approach which would require two reviews as soon as we have the team members to support this.
- Merge requests should be approved based on the [approval guidelines](#approval-guidelines).
- As per the [GitLab Review Guidelines](https://docs.gitlab.com/ee/development/code_review.html#merging-a-merge-request) there are scenarios where it is appropriate for the author to merge the merge request: If there are no blocking comments, and the merge request has all the required approvals, the author or maintainer can merge.
- Switchboard project is configured to use [pipelines for merged results](https://docs.gitlab.com/ee/ci/pipelines/merged_results_pipelines.html) which means that reviewers need to run a pipeline pre-merge to guarantee that updates are compatible with the latest main branch.
- When reviewing merge requests, reviewers should use the [Conventional Comment labels](https://conventionalcomments.org/#labels) to convey your intent.
  - For the avoidance of doubt `Suggestion:`, `Issue:` and `Chore:` comments are all blocking, unless decorated with a `(non-blocking)` statement.
- We label merge requests using the [Specialization labels](https://gitlab.com/gitlab-org/gitlab-foss/-/blob/master/doc/development/labels/index.md#specialization-labels) found in the [GitLab documentation](https://gitlab.com/gitlab-org/gitlab-foss/-/blob/master/doc/development/labels/index.md). MRs should be labeled ~"frontend", ~"backend" or ~"documentation"

#### Approval guidelines

| If your merge request includes  | It must be approved by a |
| ------------------------------- | ------------------------ |
| `~backend` changes        | [Backend maintainer](https://gitlab.com/groups/gitlab-dedicated/switchboard/maintainers/-/group_members). |
| `~frontend` changes       | [Frontend maintainer](https://gitlab.com/groups/gitlab-dedicated/switchboard/maintainers/-/group_members). |

#### Reviewer roulette

Reviewer roulette is an internal tool for use on GitLab.com projects that randomly picks a maintainer for each area of the codebase. To select a maintainer:

1. Go to the [reviewer roulette](https://gitlab-org.gitlab.io/gitlab-roulette/?currentProject=switchboard&sortKey=stats.avg30&mode=show&order=-1) page.
1. Select the Switchboard project.
1. Choose the desire role: `~maintainer::frontend`, `~maintainer::backend`, `~reviewer::backend`, `~reviewer::frontend`.
1. Click on `Spin the wheel`.

#### GitLab Code Review Guidelines

- [Having your merge request reviewed](https://docs.gitlab.com/ee/development/code_review.html#having-your-merge-request-reviewed)
- [Reviewing a merge request](https://docs.gitlab.com/ee/development/code_review.html#reviewing-a-merge-request)
- [The Right Balance](https://docs.gitlab.com/ee/development/code_review.html#the-right-balance)
- [Quality](https://docs.gitlab.com/ee/development/code_review.html#quality)
- [Performance, reliability and availability](https://docs.gitlab.com/ee/development/code_review.html#performance-reliability-and-availability)
- [Merge request performance guidelines](https://docs.gitlab.com/ee/development/merge_request_concepts/performance.html)

### Reviewers and maintainers

There are two groups for Switchboard, [Reviewers and Maintainers](https://gitlab.com/gitlab-dedicated/switchboard):

- All Switchboard team members are included in the `Reviewer` group.
- When a team member is fully onboarded and feel confident in their knowledge of the codebase they are invited to the Maintainer group.

#### Epic Template

<details><summary>Epic Template</summary>

```markdown
### DRI :levitate:
- TBC

### Participants :busts_in_silhouette:

- Frontend Engineer:
- Backend Engineer:
- SRE:
- UX Designer:
- PM:
- Technical Writer:
- EM:
-

### Problem to solve :thinking:

### Video Walkthrough from Product :video_camera:

### Intended users :bust_in_silhouette:

| User | Visible | Description |
|----------|----------|-------------------|
| [Internal - Operator](https://about.gitlab.com/direction/saas-platforms/switchboard/internal-user-roles/) |  |  |
| [Internal - Support](https://about.gitlab.com/direction/saas-platforms/switchboard/internal-user-roles/) |  |  |
| [Internal - Provisioner](https://about.gitlab.com/direction/saas-platforms/switchboard/internal-user-roles/) |  |  |
| [Internal - Read Only](https://about.gitlab.com/direction/saas-platforms/switchboard/internal-user-roles/) |  |  |
| [External - Tenant Admin](https://docs.gitlab.com/ee/administration/dedicated/configure_instance.html#add-users-to-an-instance) |  |  |
| [Internal - Read Only](https://docs.gitlab.com/ee/administration/dedicated/configure_instance.html#add-users-to-an-instance) |  |  |

### User experience goal :goal:


<!-- Overview of user experience goal -->

### UX Design Spec :paintbrush:
- Figma Link:
- Dev mode:
- Any other details

### Proposal :bulb:

### Open Questions :question:
| Question | Added by | Discussion thread | Resolved |
|----------|----------|-------------------| -------- |
|  |  |  |  |

### Feature flags

<!-- This table should document any feature flags that were added or removed by the epic -->

| Feature flag | Details |
| ------------ | ------- |
| | |

### Further details :mag:

### Dependencies :link:

### Permissions and Security :link:

### Documentation :book:

* Publicly Accessible Documentation:

### Epic Kick-Off :ballot_box_with_check:

* [ ] Video walkthrough from Product outlining expectations
* [ ] DRI identified
* [ ] Roll out plan agreed
* [ ] External customer communication plan defined
* [ ] Copy Requirements are highlighted to the Technical Writer
* [ ] UX Requirements are highlighted UX Designer
* [ ] Issue created to track Documentation requirements
* [ ] Outstanding Questions captured in threads for resolution
* [ ] Frontend, Backend and SRE dependencies highlighted and / or unknowns highlighted

### Roll out Plan :speaker:
<!--
If visible to external customers please provide the following information:
    - What communication is required ahead of release?
      - [ ] Internal communication to account teams
      - [ ] Customer communication in release post
      - [ ] Sign off from account teams before release - this should be reserved for features with the potential to be disruptive to users
    - Will this be rolled out to customers in pieces as implemented or available internally first?
-->


### Links / references :books:

*

## Demo Description :movie_camera: #

Demo Link - see https://handbook.gitlab.com/handbook/engineering/infrastructure/team/gitlab-dedicated/switchboard/#switchboard-demos

---

<!-- STATUS NOTE START -->

<!-- STATUS NOTE END -->

/label ~"team::Switchboard" ~"workflow-infra::Triage"

```

</details>
