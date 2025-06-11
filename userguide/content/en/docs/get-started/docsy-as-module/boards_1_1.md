---
title: "Issue and Kanban boards project management guidelines"
---

{{< include "includes/wip-notice.md" >}}

## Background

[Boards](https://docs.gitlab.com/ee/user/project/issue_board.html) in GitLab make it possible to visualize and manage lists of issues which can be defined by one of three ways: **Labels**, **Team members**, and **Milestones**.

### Key things to know

#### Board usage

1. First, a common use of boards is in the Kanban style of visualizing work

   - In this scenario there are three or four lists: **Backlog**; **Doing**; **Waiting for**; **Done**
   - A user would move an issue from the **Backlog** to the **Doing** list to indicate they are working on the specific issue.   If they finish the task, then they would move the item to **Done**, and if they ran into a barrier and had to wait for something outside their control, then they would move it to **Waiting for**
   - In this simple example, the Board is essentially `adding` and `removing` labels when the issue is moved from one list to another.

1. A second situation where boards are useful is assigning work to an individual.   In this situation the board is defined by team members, where different users are represented by the lists.   When an issue is moved to a user's list the issue is then assigned to that user.
1. The third example of how boards can be used is where the lists are defined as different `milestones`, and moving an issue from one list to another, effectively changes which milestone when the issue will be worked on.

#### Board Details

The scope of issues that are displayed on a board are filtered either by `label`, `assignee`, `milestone`, or possibly `weight`.

![board scope](/handbook/marketing/project-management-guidelines/images/board-scope.png)

Boards support groups of lists that are defined by a combination of

1. A single label
2. A single milestone
3. An individual

When an issue is moved from one list to another on the board, the board basically does two things:

1. It removes the label, milestone or assignment from the starting list
2. It adds the label, milestone, or assignment of the list the issue is added to.

<i class="fas fa-info-circle" aria-hidden="true" style="color: rgb(49, 112, 143)
;"></i> Board lists also sum up the total "weight" of the issues in each list, as a way to estimate the total work in the list.
{: .alert .alert-info}

#### Board hierarchy

Boards can exist at **BOTH** project and group levels in GitLab.

Depending on the scope of the issues which need to be managed, the board should be defined at the most appropriate level.

#### Issue priority

The order of issues on Board Lists can be arranged by dragging and dropping them and be used to determine the relative priority of the related issues.  When an issue is moved vertically on a board, this changes the relative relationship of the issue on **ALL** boards in GitLab.

#### Stay tuned for future features

We're investing in boards to add cool features like

- swimlanes
- advanced editing of Issues and MORE

### Known limitations

1. Moving issues from one list to another on a board **ONLY** makes one change (adding/removing a label, assigning/unassigning an issue).
1. It is not possible to drag an issue from one list to another and have MORE than one thing change.  For example, you cannot Assign an issue to a person and **ALSO** add a label or milestone using a board.
1. You cannot sort issues in board lists.  Only drag up and down.
1. Whenever ANYONE changes the order of an issue on a board, there is NO history or record of the change in priority.  So, if a team is managing issues by dragging up and down to indicate importance, then there is currently no record of who changed what and when it changed.   The relative priority/importance of related issues is not exposed in the GitLab UI.
1. There is no way to have a 'read only' or 'static' board to view related issues.  It is always live and ready to accept changes.

## Guidelines

### Define Boards at the lowest level needed

If the relevant issues that need to be managed in a board are at the project level, then create the board at the project.

### Define Workflow and Iteration boards for each Marketing group

1. There should be a minimum of 2 boards per Marketing group: Workflow and Iteration.
1. Each group should have its own label to be able to create the board
1. Each issue the group is working on should use at the very least that label
1. These two main issue boards should be listed on each team's section on the [Marketing handbook landing page](/handbook/marketing/).

### Workflow board

**Goal**: describes the task status for a given sprint.

- Generally filtered by team label
- Board scope set to the current sprint
- Can be further filtered by assignee.
- Uses the `mktg-status::` scoped labels as lists
- [Workflow board example](https://gitlab.com/groups/gitlab-com/-/boards/1781956?milestone_title=%23started&&label_name[]=tech-evangelism)

![Workflow board](/handbook/marketing/project-management-guidelines/images/workflow-board.png)

### Iteration board

**Goal**: describes the planned workload through iterations

- Can be further filtered by assignee
- Uses the [main marketing iterations](/handbook/marketing/project-management-guidelines/milestones/#iterations) as lists
- Backlog is a milestone (permanently dragged to the left, and collapsed)
- Optionally: at their discretion groups can add a milestones board for project milestones
- [Iteration board example](https://gitlab.com/groups/gitlab-com/-/boards/1672643?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=tech-evangelism)

![Iteration board](/handbook/marketing/project-management-guidelines/images/iteration-board.png)
