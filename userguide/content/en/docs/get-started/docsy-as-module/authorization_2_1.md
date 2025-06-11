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

{{< stable-counterparts role="Govern:Authorization" >}}

## Team Meetings

Our group holds synchronous meetings to gain additional clarity and alignment on our async discussions. We aspire to [record](/handbook/tools-and-tips/zoom/) all of our meetings as our team members are spread across several time zones and often cannot attend at the scheduled time.

We have a weekly team sync meeting with rotating [AMER/APAC](https://drive.google.com/drive/folders/1Hk2v2uBiF5gkfC5INg8tmb5U1DAuUagA?usp=drive_link) and [EMEA/AMER](https://drive.google.com/drive/folders/1gFMDy-Lq0Ycg2pJE7_La0Giln3c4wMJJ?usp=drive_link) friendly time slots: Tues 20:00 UTC and Weds 14:30 UTC.

## Collaboration

### Code Review

Because this group works on components of the application that have a [far-reaching impact](/handbook/engineering/development/#reducing-the-impact-of-far-reaching-work), we take these extra steps in order to reduce our risk of a production incident:

1. Our team's merge requests should be assigned to another Authorization team member for first review in order to build more institutional knowledge across the team. This review should be done as a [reviewer](https://docs.gitlab.com/ee/development/code_review.html#the-responsibility-of-the-reviewer). The Authorization approval counts as the approval matching the role of the Authorization Reviewer, e.g. having a Backend Review from Authorization counts as a Backend Review. Once approved, the Authorization Reviewer should request a review from a Maintainer from the appropriate [maintainer category](https://docs.gitlab.com/ee/development/code_review.html#approval-guidelines).
1. Authorization related merge requests (those touching custom roles and policies related code) require a review by an [Authorization Engineer](https://gitlab.com/groups/gitlab-org/govern/authorization/approvers/-/group_members?with_inherited_permissions=exclude). This is guarded by using the `CODEOWNERS` feature of GitLab.

## Links and resources {#links}

- Our Slack channels
  - Govern:Authorization [#g_govern_authorization](https://gitlab.slack.com/archives/C0610LVCSAY)
