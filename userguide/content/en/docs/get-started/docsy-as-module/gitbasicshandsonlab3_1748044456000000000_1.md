---
title: "GitLab with Git Fundamentals - Hands-On Lab: Use GitLab To Merge Code"
description: "This Hands-On Guide walks you through creating projects, issues, and merge requests."
---

> Estimated time to complete: 40 minutes

## Objectives

In this lab we will use GitLab to create a project, an issue, and a merge request. We will also use the built-in GitLab Web IDE to edit files, and verify our merge request. GitLab provides a comprehensive UI that allows users to manage their repositories much easier than using Git alone. GitLab also includes a variety of features the Git language itself does not support, such as inline commenting on merge requests. You can learn more on the [GitLab features page](https://about.gitlab.com/features/).

## Task A. Create a new project

1. Navigate to your **My Test Group** by clicking it in the breadcrumb at the top of the page.

1. From your **My Test Group** in GitLab, click the **New project** button.

1. Click the **Create blank project** tile.

1. Name your project `Second Project`

1. Make sure the project visibility is set to **Private**.

1. Check the **Initialize repository with a README** checkbox.

1. Leave **Enable Static Application Security Testing (SAST)** unchecked.

1. Click the **Create project** button and wait for GitLab to redirect you to the new project's main page.

## Task B. Create a new issue

1. In the left-hand navigation pane, click **Plan > Issues**.

1. Click the **New issue** button.

1. In the **Title** field, type `new issue`

1. Next to the **Assignees** dropdown, click **Assign to me**.

1. Click the **Create issue** button.

## Task C. Create a merge request

> Merge requests are a core feature of source control with GitLab since they let you make suggestions to update documents in a repository. You can learn more about merge requests in the [documentation](https://docs.gitlab.com/ee/user/project/merge_requests/).

1. On the issue details page, click the **dropdown arrow** to the right of the **Create merge request** button. This is where you can customize the merge request.

1. Set the **Branch name** to `fix-issue`. Make sure that the **Source** is set to `main`.

   > The **Source** value defines where the changes for the merge request will be applied. In this example, you are making changes that will apply to the `main` branch.

1. Click the **Create merge request** button

1. After clicking **Create merge request**, you will be redirected to the **New merge request** page.

1. Note the merge request title is set to: `Draft: Resolve "new issue"`.

   > By default, the title of the merge request will be in the format `Draft: Resolve "<Issue Name>"`

1. Below the **Title**, there is a checkbox stating **Mark as draft**. Note that this checkbox is currently checked.

   > When a merge request is created, it is marked as a draft by default. The `Draft` keyword in the title of the merge request indicates that the merge is currently a draft. A draft merge cannot be merged until it is marked as ready. This helps to prevent accidental merges.

1. In the merge request description, note the text: **Closes #1**. This description ensures that merging the merge request will also automatically close the issue it is associated with.

   > Your description may show a different number beside the `#` character. This number will match the issue number that the merge request was opened from.

1. Leave all the merge request fields at their default values.

1. While this lab will leave all metadata values as their default value, it is still important to understand what they mean:

    - **Assignees:** Assignees are those that are responsible for creating/maintaining the changes in the merge request.

    - **Reviewers:** Reviewers are those that are responsible for reviewing and approving the changes in the merge request.

    - **Milestone:** Milestones in GitLab are a way to track issues and merge requests created to achieve a broader goal in a certain period of time, usually related to a release and/or version number.

    - **Labels:** Apply labels to your merge requests, which are metadata tags that can be used to sort and filter your requests.

    - **Merge request dependencies:** Ensures merge requests are merged in the right order to prevent commit clashes.

    - **Delete source branch when merge request is accepted:** The branch you are merging from will be deleted if this option is selected, and preserved if this option is not selected.

    - **Squash commits when merge request is accepted:** Only one commit will be seen from this branch if this option is selected that will include all of the changes made in all of the commits; otherwise, all of the commits from this branch will be added to the history.

1. Click the **Create merge request** button at the bottom of the screen.

After creating the merge request, you now have 3 linked items that all relate one piece of work that you need to do: an issue, a branch, and a merge request. An issue describes the work to be done, a branch contains the changes that address the issue, and a merge request proposes how to incorporate the changes into the `main` code branch.

## Task D. Edit files on a branch using GitLab's Web IDE

> To address the changes required in the issue, you can edit files in your code branch. There are many ways to edit files in a branch. In the last lab, you learned how to edit a file locally. In this lab, you will edit a file online through the Web IDE. The Web IDE is an advanced editor with commit staging. You can use the Web IDE to make changes to multiple files directly from the GitLab UI. You can find out more information in the [documentation](https://docs.gitlab.com/ee/user/project/web_ide/).

1. In the top right of the merge request page, click on the arrow to the right of **Code** and click **Open in Web IDE**.

1. In the left-hand file explorer, click on `README.md`.

1. On line 3 of the file, type `Edit my README.md file`

1. In the left pane of the IDE, click on the **Source control** button (it looks like a mini Git branching graph).

1. For **Commit Message**, type `Updated the README.md file`.

1. Click the **Commit** button.

1. You should see notification box that says `Success! Your changes have been committed` in the bottom right corner of the screen. Click the **Go to project** option from the notification box in the bottom right corner.

   > If this dialog box disappears, you can get back to the project by clicking the GitLab icon on the bottom left of the screen. When you click this button a dialog will appear in the middle of the screen with various options. Click `Go to Second Project project on GitLab`.

1. From the project landing page, click **Code > Merge requests**. Click the name of your merge request.

## Task E. Verify changes in a merge request

1. On the merge request page, locate the **Assignee** section in the upper right-hand corner (you might have to click the double arrow at the top right of
the screen to expand the pane). Ensure the merge request is assigned to yourself. If it is not, click **Assignees > Edit** and click your username from the resulting list. Click away from the list to apply the change.

1. Click the **Changes** tab directly below the merge request title.

1. Hover over line 3 of the left side of the table (which contains the changes in your commit) and click the **comment icon**.

1. In the comment field, type `This is a comment` and click **Start a review**.

   > When you start a review, your comments will only be visible to you until you submit the review.

1. You'd normally add more comments to your review before submitting them all at once, but for this lab just click the **Finish review** button.

1. In the resulting dialog, you will see a **Summary comment** textbox. This is an optional field that allows you to add a summary to your review. For this review, add the comment **Added comment to README.md**

1. Below the **Summary comment**, there are three radio buttons. Since your review only contains general feedback, click **Comment**.

   - **Comment:** Indicates that the review contains some general feedback. This option will not approve the merge request.

   - **Approve:** Many projects will require a reviewer to approve a merge request before it is merged. This option will submit your feedback, and approve the merge request.

   - **Request changes:** Indicates that the review contains feedback that should be addressed before merging the request.

1. Click the **Submit review** button.

1. Pretend that someone has seen your comment and added another commit to address it. Click the **Resolve thread** button to show that the comment has been dealt with.

## Task F. Merge the branch and close the merge request

1. Click the **Overview** tab under the MR title.

1. To mark the merge request as ready to merge, click **Mark as ready**. This removes `Draft:` from your MR's title.

   > For this lab, you haven't specified any approvers for this project. If you had, an **Approve** button would appear in the **View eligible approvers** section.

1. Ensure the **Delete source branch** checkbox is enabled, and click the **Merge** button.

1. Navigate back to your project's repository by clicking **Code > Repository** in the left-hand navigation pane.

1. Check what branch you're on by looking at the dropdown at the top left of the page. Switch to **main** if you're not already on it by clicking on the branch name, and clicking the `main` branch.

1. Since the default view of the repository displays the contents of the `README.md` file, it's easy to verify that the merge added `Edit my README.md file` to the contents of `README.md`.

## Lab Guide Complete

You have completed this lab exercise. You can view the other [lab guides for this course](/handbook/customer-success/professional-services-engineering/education-services/gitbasicshandson).

## Suggestions?

If you'd like to suggest changes to the lab, please submit them via merge request.
