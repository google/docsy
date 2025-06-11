---
title: "Authorization Group"
---

## Planning

Our [Planning issues](https://gitlab.com/gitlab-org/govern/authorization/team-tasks/-/issues/?label_name%5B%5D=Planning%20Issue) are the SSOT of what we're working on now, and what we're working on next. We also have an [issue board](https://gitlab.com/gitlab-org/gitlab/-/boards/7129613?not%5Bmilestone_title%5D=Backlog&label_name%5B%5D=group%3A%3Aauthorization) to view these from a `workflow` perspective. To maintain the issue lists leadership (EM+PM) will keep the lists triaged.

### Workflow

| Label | Definition |
| ---   | ---        |
| `~workflow::ready for development` | Ready to be picked up by an engineer. `~priority::1` being the highest priority. |
| `~workflow::scheduling` or lacking a `~workflow` label |  Shouldn't be picked up by an engineer and needs to be triaged by leadership. If leadership has no intention on this work being done anytime soon, they should assign the ~Backlog milestone. |
| `~workflow::refinement` | Needs further investigation by engineering. After refininement, an issue should have a weight assigned and the workflow label should be updated to `~workflow::scheduling` |
| `~workflow::solution validation` | Needs Product input before work can begin |
| `~workflow::design` | Needs design input to proceed and/or is actively being worked on by UX |

## Weekly async issue updates

At the end of every week, each engineer is expected to provide a quick async issue update by commenting on their assigned issues using the following template:

```markdown

### Async issue update

* Current status:
<!--- Please provide a quick summary of the current status (one sentence) -->

* Shipping this milestone: <!-- Not confident | Slightly confident | Very confident -->

* Scope reduction opportunities: <!-- No | Yes, ... -->

/health_status <!-- on_track | needs_attention | at_risk -->
/label <!-- ~"workflow::In dev" | ~"workflow::In review" | ~"workflow::verification" |~"workflow::blocked" -->

<!-- Please apply a :triangular_flag_on_post: emoji to this comment. Fore more information see https://gitlab.com/jayswain/automated-reporting -->
```

We do this to encourage our team to be more async in collaboration and to allow the community and other team members to know the progress of issues that we are actively working on.

## Group Members

[Authorization group](https://gitlab.com/groups/gitlab-org/govern/authorization/) can be `@` mentioned on GitLab with `@gitlab-org/govern/authorization`.

The following people are permanent members of the group:

{{< stable-counterparts role="Software Supply Chain Security:Authorization" >}}

## Team Meetings

Our group holds synchronous meetings to gain additional clarity and alignment on our async discussions. We aspire to [record](/handbook/tools-and-tips/zoom/) all of our meetings as our team members are spread across several time zones and often cannot attend at the scheduled time.

We have a weekly team sync meeting with rotating [AMER/APAC](https://drive.google.com/drive/folders/1Hk2v2uBiF5gkfC5INg8tmb5U1DAuUagA?usp=drive_link) and [EMEA/AMER](https://drive.google.com/drive/folders/1gFMDy-Lq0Ycg2pJE7_La0Giln3c4wMJJ?usp=drive_link) friendly time slots: Tues 20:00 UTC and Weds 14:30 UTC.

## Collaboration

### Code Review

Because this group works on components of the application that have a [far-reaching impact](/handbook/engineering/development/#reducing-the-impact-of-far-reaching-work), we take these extra steps in order to reduce our risk of a production incident:

1. Our team's merge requests should be assigned to another Authorization team member for first review in order to build more institutional knowledge across the team. This review should be done as a [reviewer](https://docs.gitlab.com/ee/development/code_review.html#the-responsibility-of-the-reviewer). The Authorization approval counts as the approval matching the role of the Authorization Reviewer, e.g. having a Backend Review from Authorization counts as a Backend Review. Once approved, the Authorization Reviewer should request a review from a Maintainer from the appropriate [maintainer category](https://docs.gitlab.com/ee/development/code_review.html#approval-guidelines).
1. Authorization related merge requests (those touching custom roles and policies related code) require a review by an [Authorization Engineer](https://gitlab.com/groups/gitlab-org/govern/authorization/approvers/-/group_members?with_inherited_permissions=exclude). This is guarded by using the `CODEOWNERS` feature of GitLab.

### Engineering Refinement

#### Overview

Engineering refinement is about creating alignment among all team members. To ensure an issue is ready to move into development and that the issue will match everyone’s expectations when the work is delivered.

The goal of the refinement process is to:

- Collaborate with stakeholders and domain experts, since often times `~group::authorization` is making changes in parts of the product owned by other teams.
- Raise any questions or concerns.
- Outline an implementation plan. This is especially important when backend changes need to unblock frontend work.
- Ensure issue is ready to be worked on.
- Breakdown a big issues into smaller tasks, so they can be picked up by different engineers.
- Assign a weight to the issue or the individual tasks.

#### How will refinement be conducted?

- We will have a weekly meeting with rotating AMER/APAC and EMEA/AMER friendly time slots. Attendance is optional. The calendar will act as a reminder for team members to work on refinement weekly. These meetings can also promote candid discussion for other ongoing issues that engineers are facing.
- The purpose of these meetings will be to refine the issues that have been assigned the [workflow::refinement](https://gitlab.com/groups/gitlab-org/-/issues/?sort=updated_desc&state=opened&label_name%5B%5D=group%3A%3Aauthorization&label_name%5B%5D=workflow%3A%3Arefinement&first_page_size=20) label.
- If an issue requires further research, an engineer can conduct more research outside of the meeting. In a later meeting, the more refined issues can then be estimated.
- If an engineer is conducting refinement async, they can follow the steps listed below, summarize findings (and proposals if you have any) and mention other team members and involved counterparts.
- If it seems unlikely to reach an agreement during the opened discussion or there is a clear misunderstanding, it can be added as an agenda to the sync meeting. Engineers can optionally also those who might be able to help because of their expertise.

#### Steps

- Ensure the issue is fully understood.
- Check the issue description for completeness.
  - Does it have the necessary designs?
  - Is the expected functionality clearly articulated?
  - Are there dependencies? On other teams or on other issues?
- If the issue is not complete:
  - Tag `@jrandazzo` (PM) or `@jswain` (EM), so they know that the item can not be fully groomed. They can help complete the issue and outline what is needed.
- Break down the issue into tasks.
  - If the issue requires both frontend and backend work, then we can create different tasks to divide that work. This will allow different engineers to collaborate on the issue together.
  - If it’s a new or complicated feature, specify what can be delivered in the first iteration, and what can be delivered in future iterations.
- Outline an implementation plan
  - If the issue requires both frontend and backend work, define the request/response structure of API endpoints to ensure there is minimal computation in the Vue components.
  - If further research is needed to figure out the implementation plan, a spike issue can be created. We can circle back to the issue once we have the findings from the spike.
- Assign a weight using [t-shirt sizing approach](../../../../business-technology/data-team/how-we-work/planning/#t-shirt-sizing-approach), set the label `~workflow::scheduling` and tag `@jswain` and `@jrandazzo`. If the issue has been broken down into tasks, weights can be assigned to each of the tasks.
- Once the next steps are clear, update the description of the issue(s) and unassign yourself.

## Links and resources {#links}

- Our Slack channels
  - Govern:Authorization [#g_govern_authorization](https://gitlab.slack.com/archives/C0610LVCSAY)
