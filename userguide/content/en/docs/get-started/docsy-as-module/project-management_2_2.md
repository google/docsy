---

title: "Engineering productivity project management"
description: "Guidelines for project management for the Engineering Productivity team at GitLab"
---

## Work prioritization

The Engineering Productivity team has diverse responsibilities and reactive work. Work is categorized as planned and reactive.

## Guiding principles

- We focus on OKRs, corrective actions and preventative work.
- We adhere to the general release milestones like %x.y.
- We are ambitious with our targeted planned work per milestone. These targets are not reflective of a commitment. Reactive work load will ebb and flow and we do not expect to accomplish everything planned for the current milestone.
- [Priority labels](/handbook/engineering/infrastructure/engineering-productivity/issue-triage/#priority) are used to indicate relative priority for a milestone.

## Weighting

We follow the [department weighting guidelines](/handbook/engineering/infrastructure/test-platform/#weights) to relatively weight issues over time to understand a milestone velocity and increase predictability.

When weighting, think about knowns and complexity related to recently completed work. The goal with weighting is to allow for some estimation ambiguity that allows for a consistent predictable flow of work each milestone.

## Prioritization activities

| When | Activity | DRI |
| --- | --- | --- |
| Weekly | Assign `~priority::1`, `~priority::2` issues to a milestone | Engineering Productivity Engineering Manager |
| Weekly | Weight issues identified with `~"needs weight"` | Engineering Productivity Backend Engineer |
| Weekly | Prioritize all `~"Engineering Productivity"` issues | Engineering Productivity Engineering Manager |
| 2 weeks prior to milestone start | Milestone planned work is identified and scheduled | Engineering Productivity Engineering Manager |
| 2 weeks prior to milestone start | Provide feedback on planned work | Engineering Productivity team |
| 1 week prior to milestone start | Transition any work that is not in progress for current milestone to upcoming milestone | Engineering Productivity Engineering Manager |
| 1 week prior to milestone start | Adjust planned work for upcoming milestone | Engineering Productivity Engineering Manager |
| 1 week prior to milestone start | Final adjustments to planned scope | Engineering Productivity team |
| During milestone | Adjust priorities and scope based on newly identified issues and reactive workload | Engineering Productivity Engineering Manager |

## Projects

The Engineering productivity team currently works cross-functionally and our task ownership spans multiple projects.

The list below is ordered based on aligned priorities and includes primary domain experts for communication as well as a documentation reference for self-service.

| Project | Domain Knowledge | Documentation |
| ------- | ------------------------------------------ | ----- |
| GitLab CI Pipeline configuration optimization and stability | Jen-Shin, David, Jenn | [Pipelines for the GitLab project](https://docs.gitlab.com/ee/development/pipelines/index.html) |
| Triaging master-broken | Jenn, Nao | [Broken Master](https://about.gitlab.com/handbook/engineering/workflow/#broken-master) |
| GitLab Development Kit (GDK) continued development | Nao, Peter | [GitLab Development Kit](https://gitlab.com/gitlab-org/gitlab-development-kit/) |
| Triage operations for issues, merge requests, community contributions | Jenn, Alina | [triage-ops](https://gitlab.com/gitlab-org/quality/triage-ops/) |
| Review Apps | David, Rémy | [Using review apps in the development of GitLab](https://docs.gitlab.com/ee/development/testing_guide/review_apps.html) |
| Triage engine, used by GitLab triage operations | Jen-Shin, Rémy | [GitLab Triage](https://gitlab.com/gitlab-org/ruby/gems/gitlab-triage/) |
| Danger & Dangerfiles (includes Reviewer roulette) for shared Danger rules and plugins | Rémy, Jen-Shin, Peter | [`gitLab-dangerfiles` Ruby gem](https://gitlab.com/gitlab-org/ruby/gems/gitlab-dangerfiles) for shared [Danger](https://docs.gitlab.com/ee/development/dangerbot.html#danger-bot) rules and plugins |
| JiHu | Jen-Shin | [JiHu Support](https://about.gitlab.com/handbook/ceo/office-of-the-ceo/jihu-support/) |
| Development department metrics for measurements of Quality and Productivity | Jenn, Rémy | [Development Department Performance Indicators](https://about.gitlab.com/handbook/engineering/development/performance-indicators/) |
| RSpec Profiling Statistics for profiling information on RSpec tests in CI | Peter | [rspec_profiling_stats](https://gitlab.com/gitlab-org/rspec_profiling_stats) |
| RuboCop & shared RuboCop cops | Peter | [`gitLab-styles` Ruby gem](https://gitlab.com/gitlab-org/ruby/gems/gitlab-styles) for shared [RuboCop cops](https://docs.gitlab.com/ee/development/contributing/style_guides.html#ruby-rails-rspec) |
| Feature flag alert for reporting on GitLab feature flags | Rémy | [Gitlab feature flag alert](https://gitlab.com/gitlab-org/gitlab-feature-flag-alert) |
| Chatops (especially for feature flags toggling) | Rémy | [Chatops scripts for managing GitLab.com from Slack](https://gitlab.com/gitlab-com/chatops) |
| CI/CD variables, Triage ops, and Internal workspaces infrastructure | David, Rémy | [Engineering Productivity infrastructure](https://gitlab.com/gitlab-org/quality/engineering-productivity-infrastructure) |
| Tokens management | Rémy | ["Rotating credentials" runbook](https://gitlab.com/gitlab-org/quality/engineering-productivity/team/-/blob/main/runbooks/rotating-credentials.md) |
| Gems management | Rémy | [Rubygems committee project](https://gitlab.com/gitlab-dependency-committees/rubygems-committee) |
| Shared CI/CD config & components | David, Rémy | [`gitlab-org/quality/pipeline-common`](https://gitlab.com/gitlab-org/quality/pipeline-common) and [`gitlab-org/components`](https://gitlab.com/gitlab-org/components) |
| Dependency management (Gems, Ruby, Vue, etc.) | Jen-Shin, Peter | [Renovate GitLab bot](https://gitlab.com/gitlab-org/frontend/renovate-gitlab-bot) |
| Quality toolbox | David, Rémy | [Quality toolbox](https://gitlab.com/gitlab-org/quality/toolbox) |

## Issues

### Issues currently worked on

Our team's [Quality: Engineering Productivity board](https://gitlab.com/groups/gitlab-org/-/boards/978615?label_name[]=Engineering%20Productivity) shows the current ownership of workload / issues maintained by team members in Engineering Productivity team.

### Asynchronous issue updates

Communicating progress is important but status doesn't belong in one on ones as it can be more appropriately communicated with a broader audience using other methods. The "standup" model used by a lot of organizations practicing scrum assumes a certain time of day for those to happen. In the context of a timezone distributed team, there is no "9am" that the team shares. Additionally, the act of losing and gaining context after completing work for the day only to gain it again to share a status update is context switching. The intended audience of the standup model assumes that it's just the team but in GitLab's model, that means folks need to be aware of where this is being communicated (slack, issues, other). Since this information isn't available to the intended audience, the information needs to be duplicated which at worst means there's no single source of truth and at a minimum means copy pasting information.

The proposal is to trial using an Asynchronous Issue Update model, similar to [what the Package Group uses](/handbook/engineering/development/ops/package/#async-issue-updates). This process would replace the existing daily standup update we post in Slack with `Geekbot`. The time period for the trial would be a milestone or two, depending on feedback cycles.

The async daily update communicates the progress and confidence using an issue comment and the milestone health status using the Health Status field in the issue. A daily update may be skipped if there was no progress. Merge requests that do not have a related issue should be updated directly. It's preferable to update the issue rather than the related merge requests, as those do not provide a view of the overall progress. Where there are blockers or you need support, Slack is the preferred space to ask for that. Being blocked or needing support are more urgent than email notifications allow.

When communicating the health status, the options are:

- `on track` - when the issue is progressing as planned
- `needs attention` - when the issue requires attention or intervention to keep it on schedule
- `at risk` - when there is a risk the issue will not be completed according to schedule

The async update comment should include:

- what percentage complete the work is, in other words, how much work is done to put all the required MRs in review
- the confidence of the person that their estimate is correct
- notes on what was done and/or if review has started
- it could be good to specify the relevant dependencies in the update, if there are multiple people working on it

Example:

```markdown
**Status**: 20% complete, 75% confident

Expecting to go into review tomorrow.
```

Include one entry for each associated MR

Example:

```markdown
**Issue status**: 20% complete, 75% confident

Expecting to go into review tomorrow.

**MR statuses**:

- !11111+ - 80% complete, 99% confident - docs update - need to add one more section
- !21212+ - 10% complete, 70% confident - api update - database migrations created, working on creating the rest of the functionality next
```

#### How to measure confidence?

Ask yourself, how confident am I that my % of completeness is correct?.

For things like bugs or issues with many unknowns, the confidence can help communicate the level of unknowns. For example, if you start a bug with a lot of unknowns on the first day of the milestone you might have low confidence that you understand what your level of progress is.
Your confidence in the work may go down for whatever reason, it's acceptable to downgrade your confidence. Consideration should be given to retrospecting on why that happened.

## Epics

### Weekly epic updates

A weekly update should be added to epics you're assigned to and/or are actively working on. The update should provide an overview of the progress across the feature. Consider adding an update if epic is blocked, if there are unexpected competing priorities, and even when not in progress, what is the confidence level to deliver by the expected delivery date. A weekly update may then be skipped until the situation changes. Anyone working on issues assigned to an epic can post weekly updates.

The epic updates communicate a high level view of progress and status for quarterly goals using an epic comment. It does not need to have issue or MR level granularity because that is part of each issue updates.

The weekly update comment should include:

- Status: ok, so-so, bad? Is there something blocked in the general effort?
- How much of the total work is done? How much is remaining? Do we have an ETA?
- What's your confidence level on the completion percentage?
- What is next?
- Is there something that needs help/support? (tag specific individuals so they know ahead of time)

#### Examples

Some good examples of epic updates that cover the above aspects:

- <https://gitlab.com/groups/gitlab-org/-/epics/8628#note_1090732793>
- <https://gitlab.com/groups/gitlab-org/-/epics/5152#note_1029337901>

## Reviewers and maintainers

Upon joining the Engineering productivity team, team members are granted either developer, maintainer, or owner access to a variety of core projects. For projects where only developer access is initially granted, there are some criteria that should be met before maintainer access is granted.

- [GitLab Tooling and Pipeline configuration](https://gitlab.com/gitlab-org/gitlab/-/blob/35789a64a6519ee764c8cb3b98f9287915e96e9d/.gitlab/CODEOWNERS#L82-117)
  - GitLab Tooling and Pipeline configuration consists of scripts and config files used for both local development and for CI pipelines. Changes made to these files have wide impact to developer experience at GitLab.
    - Please note: despite being two different code categories, the [Reviewer roulette](https://gitlab-org.gitlab.io/gitlab-roulette/) is designed to suggest `@gl-quality/tooling-maintainers` to review both `Tooling` and `Pipeline configuration` MRs. We have [an issue](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/34708) to split up maintainers for `GitLab Tooling` and `GitLab Pipeline configuration` into `@gl-quality/tooling-maintainers` and `@gl-quality/pipeline-maintainers`. For now, everyone in `@gl-quality/tooling-maintainers` is required to have the knowledge to review both code changes.
  - To become a Tooling and Pipeline configuration maintainer, one must have:
    - Read https://docs.gitlab.com/ee/development/pipelines/index.html and https://docs.gitlab.com/ee/development/pipelines/internals.html and is familiar with GitLab's internal pipeline configuration rules and patterns.
    - Authored 5 merged MRs for Tooling maintenance and improvements.
    - Authored 5 merged MRs for Pipeline configuration maintenance and improvements.
    - Reviewed 10 MRs demonstrate good understanding of tooling and GitLab pipeline configurations.
    - After completing the above requirements, a merge request is created in the [handbook](https://gitlab.com/gitlab-com/www-gitlab-com) to update their [team member YAML](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/data/team_members/person?ref_type=heads) outlining the reasons why they should be a maintainer and list all 20 merge requests to help aid with review. This MR must be approved by a member of `@gl-quality/tooling-maintainers`.
- [GitLab Triage](https://gitlab.com/gitlab-org/ruby/gems/gitlab-triage)
  - Authored 5 merged MRs.
  - Reviewed 5 MRs.
  - After completing the above requirement the maintainer should be vetted by an existing maintainer in the Engineering Productivity team. An issue should be created in the project outlining the reasons why this person should be a maintainer. List all 10 MRs in the issue to help aid with review.
  - After the issue has been reviewed and approved by manager of the Engineering Productivity team, an access request will be created to grant the engineer maintainer role.
- [GitLab Roulette](https://gitlab.com/gitlab-org/gitlab-roulette)
  - Authored or reviewed 2 MRs in total.
- [GitLab Development Kit](https://gitlab.com/gitlab-org/gitlab-development-kit)
  - In general, we expect that team members will generally feel comfortable and will be granted maintainer access once they have:
    - Authored 5 MRs related to new features or improvements for GDK.
    - Reviewed 10 MRs.
  - After completing the above requirement, the maintainer should be vetted by an existing maintainer in GDK. A merge request should be created in the `www-gitlab-com` repository outlining the reasons why this person should be a maintainer.
- [GitLab Styles](https://gitlab.com/gitlab-org/ruby/gems/gitlab-styles)
  - Authored or reviewed 2 MRs in total.
- [GitLab Dangerfiles](https://gitlab.com/gitlab-org/ruby/gems/gitlab-dangerfiles)
  - Authored or reviewed 5 MRs in total.
- [GitLab Quality Test Tooling](https://gitlab.com/gitlab-org/ruby/gems/gitlab_quality-test_tooling)
  - Authored or reviewed 5 MRs in total.
- [Triage Ops](https://gitlab.com/gitlab-org/quality/triage-ops)
  - Authored or reviewed 10 MRs in total.

### Becoming a maintainer

The following guidelines will help you to become a maintainer. Remember that there is no specific
timeline on this, and that you should work together with your manager and current maintainers.

To start the process of becoming a maintainer, see the [maintainer section](/handbook/engineering/workflow/code-review/#how-to-become-a-project-maintainer)
of the code review guidelines.

In general, you're required to author and review 3 - 10 MRs that demonstrate good overall understanding
of the existing codebase and framework. See the section above for [further details of the requirements](#reviewers-and-maintainers).
You can seek out more opportunities to work on framework improvements by asking on the `#quality` Slack channel.

Your reviews should aim to cover maintainer responsibilities as well as reviewer responsibilities.
Your approval means you think it is ready to merge.

It is your responsibility to set up any necessary meetings to discuss your
progress with current maintainers, as well as your manager. These can be at any
frequency that is right for you.
