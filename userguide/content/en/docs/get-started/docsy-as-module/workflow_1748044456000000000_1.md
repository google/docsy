---
title: "Developer Advocate Team Workflow"
---


## Team Workflow

Welcome to the Developer Advocate team workflow page. Learn how the team works and how to work with the team. We primarily use the [Developer Advocate Meta issue tracker](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues). We own the team label `developer-advocacy` and all of our [other labels](https://gitlab.com/groups/gitlab-com/-/labels?subscribed=&sort=relevance&search=developer+advocacy) which are located at the [gitlab-com](https://gitlab.com/gitlab-com) group level. You can add the labels as necessary to any issue under this group for our team to track.

### Overview Video

The [Workflow overview video](https://www.youtube.com/watch?v=FKw0uGOmcks) showcases the different components of the workflow in detail. The video is internal only due to confidential issues shown in workflows. If you would like to jump to the specific chapters of the video, see the links below.

Video Chapters:

- [Introduction](https://www.youtube.com/watch?v=FKw0uGOmcks&t=0s)
- [Creating Issues](https://www.youtube.com/watch?v=FKw0uGOmcks&t=50s)
- [Labels Overview](https://www.youtube.com/watch?v=FKw0uGOmcks&t=750s)
- [Issue Boards](https://www.youtube.com/watch?v=FKw0uGOmcks&t=1420s)
- [Issue Triage & DevRel-Bot Rules](https://www.youtube.com/watch?v=FKw0uGOmcks&t=1860s)

### How the Developer Advocacy Team  work

Every activity of the team is tracked as an issue in the [Developer Advocacy Meta project](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues) or in the issue trackers of other teams the team collaborate with. Activities fall into 3 categories Content, Events & Other Activities. To make creation of issues easy, the team use issue templatea pre-populated with relevant placeholders and labels.  Here are the direct links to the Issue templates and their shortlinks.

| Activity Type | Issue Template | Shortlink |
|---------------|----------------|-----------|
| Content | [Template](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/new?issuable_template=content) | `https://go.gitlab.com/new-content-issue` |
| Event | [Template](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/new?issuable_template=events) | `https://go.gitlab.com/new-event-issue` |
| Release Evangelism | [Template](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/new?issuable_template=release-evangelism) | `https://go.gitlab.com/new-release-issue` |
| Others | [Template](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/new?issuable_template=other-activities) | `https://go.gitlab.com/new-activity-issue` |

### Issue Boards

Issue boards are the single source of truth for activities of the Developer Advocacy team. Developer Advocates are asked to keep the columns of issue boards arranged by due date. This will help our stakeholders who use the boards to keep track of the Developer Advocacy team's work.

| Issue Board |  Shortlink |
|-------------|-----------|
| [Issues by Assignee](https://gitlab.com/groups/gitlab-com/-/boards/7577841?label_name[]=developer-advocacy) | `https://go.gitlab.com/da-assignees` |
| [Content by Quarter](https://gitlab.com/groups/gitlab-com/-/boards/7577857?label_name[]=DA-Type%3A%3AContent&label_name[]=developer-advocacy) | `https://go.gitlab.com/da-content-quarter` |
| [Content by Types](https://gitlab.com/groups/gitlab-com/-/boards/7577822?label_name[]=DA-Type%3A%3AContent&label_name[]=developer-advocacy) | `https://go.gitlab.com/da-content-type` |
| [Events](https://gitlab.com/groups/gitlab-com/-/boards/7577874?label_name[]=developer-advocacy&label_name[]=DA-Type%3A%3AEvents) | `https://go.gitlab.com/da-events` |
| [Issue Triage Board](https://gitlab.com/groups/gitlab-com/-/boards/7669248?label_name[]=DA-Bot%3A%3ATriage) | `https://go.gitlab.com/da-issue-triage` |

NB: All the Shortlinks on this page can be managed at [https://campaign-manager.gitlab.com/campaigns/view/114](https://campaign-manager.gitlab.com/campaigns/view/114).

### How to work with the Developer Advocate Team

Opening an issue is the best way to get a conversation started. The `developer-advocacy` label is at the `gitlab-com` group level, which means it can be added to any issue or merge request in the group's structure.

The `developer-advocacy` label is required, other labels are optional. The [DevRel-Bot](https://gitlab.com/gitlab-da/projects/devrel-bot) or a team member will do the triage and add the necessary labels. To reduce noise in the comments, please add the `DA-Type::Consulting` and the relevant `Consulting` team labels yourself.

You can use the [request a Developer Advocate issue template](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/new?issuable_template=developer-advocate-request) to submit a request. It provides a guide to collect the required information to triage the request.

### CFPs

CFP epics should not be created to avoid clutter on the Roadmap, instead the `CFP` label should be added to the corresponding event's epic. If no related event epic exists, create one and add the CFP issue to it.

## Labels

The Developer Advocate team workflow is supported by labels, which help determine the type of issue, its status, and other relevant information. The team's primary label is `developer-advocacy`. All issues the team owns, are a part of, or needs to be aware of, should be tagged with `developer-advocacy`. Other Labels are listed below:

### General labels

| **CFP Labels** | **Description** |
| ---------- | ----------- |
| `developer-advocacy` | Used to label issues that are related to the Developer Advocacy team |
| `DevRel-Influenced` | Used to label issues that are influenced by DevRel, Developer Advocacy in particular. |
| `DA-Ops` | Used to label issues related to the Developer Advocacy `Ops in DevOps` theme |
| `DA-Dev` | Used to label issues related to the Developer Advocacy `Dev in DevOps` theme |
| `DA-k8s` | Used to label issues related to the Developer Advocacy `Kubernetes` theme |

### Issue management

#### General Workflow Labels

| Label | Use |
|-------|-----|
|`DA-Status::ToDo` | Issues that are planned for the future |
|`DA-Status::Doing` | Issues the team is currently working on |
|`DA-Status::Done` | Issues that have been completed |
|`DA-Status::OnHold` | Issues that are for whatever resume pending |
|`DA-Status::Cancelled` | Issues that have been cancelled, either by the team or the requestor in the case of a consulting request |
|`DA-Status::FYI` | Issues the team needs to be aware of but no action is required |

The default flow is from ToDo -> Doing -> (OnHold) -> Done. Issues with FYI don't go through any workflow, as they are owned by another team and will go through a different workflow.

#### Content Workflow Labels

For content specific workflow, we use the following labels:

| Label | Use |
|-------|---------|
| `DA-Content::New` | Newly created content issue, this is automatically added when the content issue [template](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/new?issuable_template=content) is used. The DevRel-Bot sets the general workflow status for an issue to  `DA-Status::ToDo` when this label is encountered |
| `DA-Content::In-Progress` | Issues where content is in progress. DevRel-Bot sets the general workflow status for an issue with this label is set to `DA-Status::Doing`. This label is automatically applied to existing content issues with now Content workflow labels. |
| `DA-Content::In-Review` | Content is currently in review, general workflow status remains `DA-Status::Doing` |
| `DA-Content::Awaiting-Publication` | Content has been completed and queued for publication, general workflow status moves to `DA-Status::OnHold` |
| `DA-Content::Done-Metrics-Pending` | Content completed and published but waiting to collecting metrics, general workflow status moves to `DA-Status::OnHold`, once metrics collection is completed, content author is required to close the issue. DevRel-bot will change the label to  `DA-Content::Published` |
| `DA-Content::Published` | Content has been concluded, DevRel-bot will close any issue with this label |

#### Issue Types

These labels help identify the type of activity documented in an issue. These are useful for the team to understand where time is spent and assign appropriate DRIs.

| Label | Use |
|-------|-----|
| `DA-Type::Content` | Issues for Content creation, this can be any type of content |
| `DA-Type::Evangelist` | Issues for the Evangelist program |
| `DA-Type::Process` | Issues for operational activities of the team |
| `DA-Type::Response` | Issues for Community Response activities |
| `DA-Type::Consulting` | Issues requested by other teams, more details below |
| `DA-Type::Events` | Issues for Events the team is tracking or participating in |
| `DA-Type::Response` | Issues used for Community Response activities |
| `DA-Type::analysts` | Work for analysts |

#### Content Types

When the `DA-Type::Content` is selected, a `DA-Type-Content` label is required to identify what type of content it is.

| Label |
|-------|
| `DA-Type-Content::adoption` |
| `DA-Type-Content::blog` |
| `DA-Type-Content::cicd-component` |
| `DA-Type-Content::demo` |
| `DA-Type-Content::documentation` |
| `DA-Type-Content::event` |
| `DA-Type-Content::keynote` |
| `DA-Type-Content::narrative` |
| `DA-Type-Content::product-tour` |
| `DA-Type-Content::quickstart` |
| `DA-Type-Content::talk` |
| `DA-Type-Content::tech-webinar` |
| `DA-Type-Content::tutorial` |

#### Consulting Labels

Requests from other teams for the Developer Advocates to own, participate or collaborate on activities are classified as consulting, and these requests are usually labeled based on the team requesting. These are teams in the company that the Developer Advocate team collaborate with often, here are their labels:

- `DA-Consulting::Alliances`
- `DA-Consulting::CorpComms`
- `DA-Consulting::CorpEvents`
- `DA-Consulting::Community`
- `DA-Consulting::Engineering`
- `DA-Consulting::FieldMktg`
- `DA-Consulting::GrowthMktg`
- `DA-Consulting::Product`
- `DA-Consulting::Sales`

These labels are required where an issue has `DA-Issue-Type::External` and `DA-Type::Consulting`, aside the team label `developer-advocacy` and `DA-Status` scoped label. If your team is not listed, you can still submit a request and it will be triaged appropriately

Issues created for Consulting count against team quarterly budgets, you can learn more in the [Request budgets section below](/handbook/marketing/developer-relations/developer-advocacy/workflow/#request-budgets).

#### Region-based Labels

These labels are used to identify the region associated with an issue or activity:

| Label | Use |
|-------|-----|
| `Region-AMER` | For activities related to the Americas region |
| `Region-APAC` | For activities related to the Asia-Pacific region |
| `Region-EMEA`  | For activities related to Europe, Middle East, and Africa region |
| `Region-LATAM` | For activities related to Latin-America |
| `Region-Global` | For activities that are not region-specific or span multiple regions |

#### Bot Labels

These labels are automatically assigned by the [DA-Bot](/handbook/marketing/developer-relations/developer-advocacy/projects/#developer-advocacy-bot) for triaging purposes.

| Label | Use |
|-------|-----|
| `DA-Bot::Auto` | Issue is automatically created by DA-Bot and will be closed after a period, usually 2 weeks from creation |
| `DA-Bot::Hold` | Issue is currently on hold and should not be triaged by teh DA-Bot except where it has been in the Hold status for too long. |
| `DA-Bot::Skip` | The DA-Bot should not perform any action on issues with this label |
| `DA-Bot::Triage` | Issue has been silent for a while and needs to be triaged |
| `DA-Due::AddDate` | An Issue needs a due date |
| `DA-Due::N/A` | Due date is not needed because the team doesn't own the issue or a due date is not applicable |
| `DA-Due::Past` | Issue is past its due date |
| `DA-Due::Soon` | Issue is due soon |

#### CFP Labels

These labels are used to track workflow of the CFP submissions.

| Label | Use |
|-------|-----|
| `CFP` | Identifies CFP labels, this is needed |
| `CFP::Upcoming` | Identifies CFPs that will be open soon |
| `CFP::Open` | Identifies Open CFPs |
| `CFP::Closed` | Identifies Closed CFPs |
| `CFP::Cancelled` | Identifies Cancelled CFPs |
| `CFP::Submitted` | Identifies that submissions were made for the CFP |
| `CFP::Accepted` | Identifies if any submission was accepted for a CFP |
| `CFP-EDU` | Identifies CFPs that are relevant to the Education team |
| `CFP-OSS` | Identifies CFPs that are relevant to the Open Source teams |
| `CFP-Submitted::{0..7}` | This is used to note the number of submissions that were made for metrics purposes |
| `CFP-Accepted::{0..7}` | This is used to note the number of acceptances for metrics purposes |

#### Triage Labels

These labels are used by the DevRel bot to identify issues that need a review.

| Label | Use |
|-------|-----|
| `DA-Triage::no-due-date` | Issue is missing a due date |
| `DA-Triage::past-due-date` | Issue is past its due date |
| `DA-Triage::no-issue-type` | Issue is missing a DA-Type label |
| `DA-Triage::done-not-closed` | Issue is still open while having a `DA-Status::Done` label |
| `DA-Triage::onhold-too-long` | Issue is has the `DA-Bot::Hold` label and has not been updated in the past 90 days |
| `DA-Triage::no-update-60days` | Issue has not been updated in the past 60 days, i.e. 60 days since the last comment. |
| `DA-Triage::no-consulting-team` | Issue has a `DA-Type::Consulting` label but missing a consulting team label |
| `DA-Triage::cfp-due-submission` | CFP issue has a `CFP::Open` label and its past submission due date |
| `DA-Triage::cfp-due-notification` | CFP issue has a `CFP::Submitted` label and its past notification due date |
| `DA-Triage::cfp-due-presentation` | CFP issue has a `CFP::Accepted` label and its past presentation due date |

#### Other Labels

| Label | Use |
|-------|-----|
| `DA-Release-Evangelism` | Release Evangelism issues, often auto created and closed by the DA-Bot |
| `DA-Issue-Type::External` | Issues created by Other teams |
| `DA-Issue-Type::Internal` | Issues created & owned by the DevEvangelism team |

### Issue Triage

The [DevRel-Bot](https://gitlab.com/gitlab-da/projects/devrel-bot) uses the [GitLab Triage](https://gitlab.com/gitlab-org/ruby/gems/gitlab-triage) project to ensure appropriate & consistent usage of labels. The Bot also helps to triage issues based on label usage. Here are the current policies used by the Bot:

| Rule Description          | Condition     | Action |
|---------------|---------------|---------|
| Issues where DA team member is an assignee outside DA-Meta project i.e. DevRel-Influenced | Assignees include members of the gitlab.com/gitlab-da group, Issues are not in the [developer-advocacy-meta](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta) project and does not have a `developer-advocacy` label | Add `developer-advocacy`,`DA-Bot::Skip`, `DevRel-Influenced` label |
| Issue by DA team member missing developer-advocacy label | Issue author is a member of the gitlab.com/gitlab-da group and does not have a `developer-advocacy` label | Add `developer-advocacy` label |
| Issue missing DA-Type label | Issue does not have a `DA-Type` label | Add `DA-Bot::Triage` & `DA-Triage::no-issue-type` label |
| Content Issue missing DA-Type-Content label | Issue has a `DA-Type::Content` label but missing a `DA-Type-Content` label | Add `DA-Bot::Triage` & `DA-Triage::no-content-type` label |
| Missing Due Dates | Issue is missing a due date | Add `DA-Bot::Triage` & `DA-Triage::no-due-date` label |
| Past Due Dates | Issue is past its due date | Add `DA-Bot::Triage` & `DA-Triage::past-due-date` label |
| Issues On Hold | Issue has the `DA-Bot::Hold` label and has not been updated in the past 90 days | Add `DA-Bot::Triage` & `DA-Triage::onhold-too-long` label |
| Issues Not Updated | Issue has not been updated in the past 60 days, i.e. 60 days since the last comment. | Add `DA-Bot::Triage` & `DA-Triage::no-update-60days` label |
| Consulting Issues Missing Consulting Team | Issue has a `DA-Type::Consulting` label but missing a consulting team label | Add `DA-Bot::Triage`, `DA-Bot::Hold` & `DA-Triage::no-consulting-team` label |
| Issue is done but still open | Issue has a `DA-Status::Done` label but is still open | Add `DA-Bot::Triage`, `DA-Bot::Hold` & `DA-Triage::done-not-closed` label |
| Close Old DA-Bot created Issues | Issue is older than 2 weeks and has the `DA-Bot::Auto` label | Close issue |
| Missing Request Type Label for DA team members | Issue author is a member of the gitlab.com/gitlab-da group, has a `developer-advocacy` label and missing  `DA-Requester-Type::Internal` label | Add `DA-Requester-Type::Internal` label |
| Missing Request Type Label for non DA team members | Issue author is not a member of the gitlab.com/gitlab-da group, has a `developer-advocacy` label and missing  `DA-Requester-Type::External` label | Add `DA-Requester-Type::External` label |
| CFP Issues Missing due date | Issue has a `CFP` label but missing a due date | Add `DA-Bot::Triage` & `DA-Triage::no-due-date` label |
| CFP Past Due date for submission | Issue has a `CFP::Open` label and its past submission due date | Add `DA-Bot::Triage` & `DA-Triage::cfp-due-submission` label |
| CFP Past Due date for notification | Issue has a `CFP::Submitted` label and its past notification due date | Add `DA-Bot::Triage` & `DA-Triage::cfp-due-notification` label |
| CFP Past Due date for presentation | Issue has a `CFP::Accepted` label and its past presentation due date | Add `DA-Bot::Triage` & `DA-Triage::cfp-due-presentation` label |

### CFP Workflow

The CFP workflow is based on the [CFP labels](#cfp-labels) explained above.

```plantuml
start
: CFP, CFP::Upcoming;
: CFP, CFP::Open;
if (CFP submissions) then (yes)
    : CFP, CFP::Submitted, CFP-Submitted::{0..7};

    if (CFP is Accepted) then (yes)
        : CFP, CFP::Accepted, CFP-Accepted::{0..7};
    else (no)
        : CFP, CFP::Closed;
    endif;
elseif (No submissions) then (missed)
    : CFP, CFP::Closed;
else  (cancelled)
    : CFP, CFP::Cancelled;
endif
stop
```

Example CFP workflow using [quick actions](https://docs.gitlab.com/ee/user/project/quick_actions.html):

1. Planning to submit, or when you have submitted already:
    1. Create a new [CFP issue](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/new?issuable_template=cfp).
    2. The issue template already sets the `~"CFP" ~"CFP::Open"` labels.
    3. Set the due date to the CFP submission due date.
2. Submitted 1 talk:
    1. Change the label to `~CFP-Submitted ~CFP-Submitted::1`
    2. In case you have submitted multiple talks, adjust the `~CFP-Submitted::` scoped label to reflect the correct number.
    3. Update the `submissions` section in the issue. Comment on the issue for visibility.

    ```text
    /label ~CFP-Submitted ~CFP-Submitted::1
    ```

3. After the CFP closed, set the `CFP::Closed` label and update the due date to the CFP notification date listed in the issue.

    ```text
    /due <cfp notification date>
    ```

4. CFP notifications come in, and at least 1 talk was accepted.
    1. Change the label to `~CFP-Accepted ~CFP-Accepted::1`
    2. In case you have multiple talks accepted, adjust the `~CFP-Accepted::` scoped label.
    3. Comment on the issue with the talk titles for visibility.
    4. Set the due date to the event date, and ensure all speakers are assigned.

    ```text
    /label ~CFP-Accepted ~CFP-Accepted::1
    ```

5. When the event is done, update the issue with feedback and results.
    1. Add talk videos to the [YouTube playlist](/handbook/marketing/developer-relations/developer-advocacy/#youtube-playlist), if existing.
    2. Mark the issue as `DA-Status::Done` and close it.

    ```text
    /label ~DA-Status::Done
    /close
    ```

If no talks were accepted, only close the issue shown above.

If the CFP closed without submission, add the `CFP::Closed` label. In case the CFP was planned to submit, and decisions were made otherwise, add the `CFP::Cancelled` label.

### Request budgets

In order to prevent burnout, prioritize requests appropriately, and ensure we successfully deliver on the requests to which we commit, our team has created budgets for our internal stakeholders. These budgets encourage team members to prioritize their requests, ensuring our team addresses the highest priority needs for GitLab.

These request types fall into the following categories:

1. Event requests
1. CFP requests
1. Content requests

Ongoing activities including team-driven content creation and speaking opportunities that supports our goals and OKRs, release support, and social media monitoring, including Hacker News, do not count towards any team budgets.

#### Event requests

Event requests include both event attendance (ex: attending client meetings, event staffing, attending dinners or social events, monitoring events for news) and speaking engagements at events such as demos and presentations.

#### CFP (Call for Proposals) requests

CFP requests include asking a Developer Advocate to submit a proposal for an event or media opportunity or support a fellow team member in submitting to an open CFP.

See [Requesting a Developer Advocate to submit a CFP](/handbook/marketing/developer-relations/developer-advocacy/cfps/) to request a Developer Advocate to submit to a CFP for a corporate, field, or partner event.

#### Content requests

Content requests include blog post, podcasts, media interviews, or any request that involves engaging a Developer Advocate in a media opportunity.

#### Scoring requests

| Request Type | New / Existing Content | Budget score |
| ------------ | ---------------------- | ------------ |
| Event        | New                    | 3            |
| Event        | Existing / No content  | 1            |
| CFP          | New                    | 2            |
| CFP          | Existing               | 1            |
| Content      | New                    | 2            |
| Content      | Existing               | 1            |

Each team listed below is allocated 15 points per quarter for requests:

| Team                       | Team Label  |
|----------------------------|------------------|
| Corporate Events           | `DA-Consulting::CorpEvents`  |
| Corporate Communications   | `DA-Consulting::CorpComms`   |
| Developer Relations        | `DA-Consulting::Community`   |
| Growth Marketing           | `DA-Consulting::GrowthMktg`  |
| Field Marketing / ABM      | `DA-Consulting::FieldMktg`   |
| Sales / SDRs               | `DA-Consulting::Sales`       |
| Alliances                  | `DA-Consulting::Alliances`  |
| Product                    | `DA-Consulting::Product`     |
| Engineering                | `DA-Consulting::Engineering` |

If your team is not listed above, we will handle your request based on our availability.

#### Managing requests

This process covers any content request, Webcast, Interview, Meetup, etc. The process involves the following:

- Requestors should assign a label that identifies their team and a weight correlating with their budget score to allow us to track each team's budget consumption.
- A member of the Developer Advocate team will triage the issue and provide all necessary details and directions
- The necessary labels are applied to the issue as actions are taken on the request
- Once the request is complete, the issue is assigned back to the requestor to provide the necessary metrics generated as a result of the before it is closed.
