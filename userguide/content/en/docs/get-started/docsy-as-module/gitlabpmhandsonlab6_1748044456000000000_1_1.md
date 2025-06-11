---
title: "GitLab Agile Portfolio Management- Hands-On Lab: Use A Merge Request To Review And Merge Code"
description: "This Hands-On Guide walks you through creating a merge request and approval rules in GitLab."
---

> Estimated time to complete: 45-60 minutes

## Objectives

A merge request is a proposal to incorporate changes from a source branch to a target branch. Merge requests help you manage the changes that are applied to your code. In this lab, you will learn how to setup and manage merge request approval rules in your projects. You can learn more about merge requests in the [documentation](https://docs.gitlab.com/ee/user/project/merge_requests/).

Approval rules define how many approvals a merge request must receive before it can be merged, and which users should do the approving. They can be used in conjunction with Code owners to ensure that changes are reviewed both by the group maintaining the feature, and any groups responsible for specific areas of oversight. See the [documentation](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/rules.html) to learn more.

## Task A. Set merge request approval rules

1. Navigate to your **Database** project inside the **Software > Core** subgroup.

1. In the left pane, click **Settings > Merge Requests**.

1. Scroll down to the **Merge request approvals** section and click **Add approval rule**.

1. In the **Rule name** field, enter `Infra team`

1. In the **Groups** field, select your **Infrastructure** group. You may need to use the 'All groups' option and search for your top-level group.

    > To help reduce the search results, try searching for `/awesome/infrastructure`, or `yourgroupname/awesome/infrastructure`.

1. Click **Save changes**.

1. Back in the **Merge request approvals** section of the **Merge Requests** page, click **Add approval rule** to create a second project-level rule.

1. In the **Rule name** field, enter `Security operations`

1. In the **Groups** field, select your **Security** group. You may need to use the 'all groups' option and search for your top-level group.

1. Click **Save changes**.

1. Back in the **Merge request approvals** section of the **Merge Requests** page, under **Approval Settings**, check the box next to **Prevent editing approval rules in merge requests.**

1. In the same section, ensure that **Prevent approval by the author** is *unchecked*. This is necessary so we can approve our own merge requests in the training environment.

1. Click **Save changes**.

## Task B. Create a merge request

1. In your **Database** project, click **Issues** in the left pane.

1. Click into your **Identify tuning parameters to reduce performance bottlenecks** issue.

1. Click the down-arrow dropdown next to the **Create merge request** button on the issue landing page.

1. Ensure **Create merge request and branch** is checked.

1. In the **Branch name** field, change the text to read `update-db-docs-perf-tools`.

1. Ensure that the **Source** is set to `main`.

1. Click **Create merge request**.

1. Type `Draft: Add performance tools to database documentation` in the **Title** field.

    > Putting **'Draft:'** at the beginning of your merge request means that the merge request will not occur until it has been marked as ready. This is used to note that a merge request is not ready to be merged yet, and to prevent accidental merges. Note that the **Mark as draft** checkbox below the title will also check automatically when **'Draft:'** is added to the title.

1. Remove `Closes #<ISSUE NUMBER>` from the **Description** field. We want to keep the original issue open for additional work.

    > If a merge request has 'Closes #<ISSUE NUMBER>' in their description, the issue will be closed when the merge request is merged.

1. Verify that you are assigned to the merge request by checking the Assignees section. Also note any labels inherited from the issue, and any approval rules inherited from project settings.

1. Click the **Create Merge Request** button.

1. From the merge request details page, select **Code > Open in Web IDE** to edit files on the **update-db-docs-perf-tools** branch.

    > The Web IDE is an advanced editor with built-in ability to commit to your repository branches. You can use the Web IDE to make changes to multiple files directly from the GitLab UI. See the [documentation](https://docs.gitlab.com/ee/user/project/web_ide/) to learn more.

1. Click **README.md** from the left file pane.

1. Paste the following into **README.md**, beginning on line 3.

    ```markdown
    ## Performance tools
    The database currently uses HAProxy for load balancing.
    We are researching and testing additional tools to improve performance.
    ```

1. Click **Source Control** in the left pane (the third button from the top).

1. In the **Commit message** field, enter `Update docs with performance tools`

1. Ensure that the message "**Commit and push to update-db-docs-perf-tools branch**" is written in the red 'commit' box underneath your commit message.

1. Click **Commit and push to update-db-docs-perf-tools branch**.

## Task C. Perform code review and merge changes

> For advice on best practices when it comes to code reviews, see the [documentation](https://docs.gitlab.com/ee/development/code_review.html).

1. Navigate to the `Draft: Add performance tools to database documentation` merge request by clicking on the red GitLab button in the bottom left corner of the Web IDE, and then clicking **Go to Database project on GitLab**.

1. Click on **Code > Merge Requests**, and then click on `Draft: Add performance tools to database documentation`.

1. On the merge request page, click the **Changes** tab to see the changes that will be applied to the project's **main** branch after merge.

    > Code reviewers can critique individual lines of code and suggest changes. See the [documentation](https://docs.gitlab.com/ee/user/project/merge_requests/reviews/) to learn more.

1. Click on the **Overview** tab.

1. In the three dots menu to the right of the issue title, click **Mark as ready** to take the merge request out of draft mode. You will see that **Draft:** has been removed from the merge request's title.

1. Click **Approve** to approve the merge request. Note that the **Merge** button now appears since all requisite approvals have been applied.

1. Scroll down to the comments field and type a comment in the comments field that reads: `Approved. Ready to merge.`. Click **Comment** to post the comment.

1. Click **Merge** and observe the merge complete successfully.

1. Navigate to the project landing page by clicking the **Database** title tile in the top left corner. See that the `README.md` file on the **main** branch now includes your updates.

1. In the left pane, click **Code > Merge requests**. The merge request will now appear under the **Merged** tab on this page.

## Suggestions?

If you'd like to suggest changes, please submit them via merge request.
