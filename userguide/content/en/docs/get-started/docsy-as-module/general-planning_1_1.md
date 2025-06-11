---
aliases: /handbook/engineering/development/ops/general-planning.html

title: General Planning Process - Ops Sub-department
description: "The general planning process followed by the groups within the Ops Sub-department."
---




Groups within the Ops Sub-department follow an async planning process to coordinate planning and discussion between members of the group. This process is related to the general [GitLab Product Development Timeline](/handbook/engineering/workflow/#product-development-timeline) process and adds additional practices we've found useful.

The goals of this process are to ensure we:

* Transparently describe the goals for each milestone so team members can align on them and effectively plan and execute their contributions.
* Efficiently coordinate handoffs between the validate and build tracks within each milestone, such as design and development.
* Efficiently discuss and define the scope of work for development, product design, and quality engineering.

Teams can customize this process to meet needs specific to their team as long as the customizations are documented on their team handbook page.

#### 1 month before start of milestone

* PM: create a Planning Issue for the milestone from the team's [Planning Issue Template](#planning-issue-template).
* PM: Set the Planning Issue milestone based on the current working milestone (e.g. Planning Issue 12.10 goes in milestone 12.9).
* PM: update **Goals for the Milestone** in Planning Issue description.
* PM: assign the Planning Issue to the PM, Engineering Managers, Product Designer, and Software Engineer in Test.
* PM: ask for feedback on the **Goals for the Milestone** by adding comments for the product group members and other teams' group members if cross-team collaboration is required.

#### ~3 weeks before start of milestone

* Engineering Managers: update **Scope of Engineering Work**
* Product Designer: update **Scope of Work for UX**
* PM: review scope of works and provide feedback to Engineering Managers and Product Designers via comments on the issue.  Synchronous conversations are encouraged but should be summarized as comments.

#### ~2 weeks before start of milestone

* Product Designer: attach first draft designs to the planning issue (directly or via linked issue)
* Product Designer: add a comment asking for feedback on first draft designs
* Engineering Managers: add a comment asking for feedback on Scope of Engineering work from engineers or other GitLab team members

#### ~1 week before start of milestone

* Product Designer: attach next draft designs to the planning issue (directly or via linked issue)
* Product Designer: add a comment asking for feedback on next draft designs
* Software Engineer in Test: review issues under **Scope of Engineering Work** and apply `~quad-planning` label
* Software Engineer in Test: update **Scope of Work for Testing**

#### Release day

* PM: close Planning Issue

#### Planning Issue Template

Planning issue templates follow a format similar to this. Teams can add additional headings specific to their team.

```markdown
    ### <Section> Planning Board
    <!-- link to your sections planning board -->

    ### Goals for the milestone:

    <!-- Replace with the high-level goals to be achieved by the end of the milestone -->
    *  Goal 1...
    *  Goal 2...

    ### Scope of Work for Engineering

    <!--
    List of issues in priority order go in this table
    Use :white_check_mark: for Frontend and/or Backend if there is work for that team
    -->

    | Priority | Issue | Category | Notes | Frontend | Backend |
    |----------|-------|----------|-------|----------|---------|
    | 1        |       |          |       |          |         |
    | 2        |       |          |       |          |         |

    ### Scope of Work for Engineering Debt

    <!-- What work of Engineering Debt from the past will Engineering be focused on?
          - Should be at least 1 Issue per Milestone
          - The more we can handle the better... balance
    -->

    | Issue | When it should be ready |
    |-------|-------------------------|
    |       |                         |

    ### Scope of New Work for UX

    <!-- What new work will UX be focused on?
          - Design based on research in previous Milestones
          - Research to help inform designs for future Milestones
          - Research to validate previously designed UI
    -->

    | Issue | When it should be ready |
    |-------|-------------------------|
    |       |                         |

    ### Scope of Work for Deferred UX

    <!-- What work of Deferred UX from the past will UX be focused on?
          - Should be at least 1 Issue per Milestone
          - The more we can handle the better... balance
    -->

    | Issue | When it should be ready |
    |-------|-------------------------|
    |       |                         |

    ### Scope of Work for Software Engineers in Test

    <!-- What work will Testing be focused on? -->

    | Issue | Investigates/Tests | Due on |
    |-------|--------------------|--------|
    |       |                    |        |

    /label <!-- add section label here --> ~"Planning Issue"
```

Team Planning Issue Templates:

* [Environments Team Template](https://gitlab.com/gitlab-org/ci-cd/deploy-stage/environments-group/general/-/blob/master/.gitlab/issue_templates/Planning_Issue.md)
* [Monitor APM Team Template](https://gitlab.com/gitlab-org/monitor/apm/-/blob/master/.gitlab/issue_templates/planning-issue.md)
* [Monitor Health Team Template](https://gitlab.com/gitlab-org/monitor/health/-/blob/master/.gitlab/issue_templates/planning-issue.md)

#### Planning Issue Board

All the planning issues are viewable on the [Ops Section - Issue Planning (Issue Board)](https://gitlab.com/groups/gitlab-org/-/boards/1567586)
