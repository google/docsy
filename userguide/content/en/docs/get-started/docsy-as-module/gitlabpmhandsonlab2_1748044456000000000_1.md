---
title: "GitLab Agile Portfolio Management - Hands-On Lab: Create an Organizational Structure in GitLab"
description: "This Hands-On Guide walks you through creating groups, projects, and project members in GitLab."
---

> Estimated time to complete: 30 minutes

## Objectives

In GitLab, projects and subgroups help you organize your codebases and effectively manage your projects. In this lab, you will learn how to create an organizational subgroup, how to create a project, and how to add a user to a project.

**Organization Namespaces:** You can create subgroups under any other groups that you have access to and have permissions to create groups underneath. Your organization should have best practices documented on how groups are structured or named. If you're not sure, you can locate another [group's members](https://docs.gitlab.com/ee/user/project/members/#display-direct-members) and ask one of the users with `Owner` role who should be able to help.

**Personal Namespaces:** Although you can create _projects_ in your personal namespace (ex. `https://gitlab.com/exampleuser/example-project`), you cannot create _groups_ in your personal namespace.

**Security Warning:** Any users that have access to parent or grandparent groups will have inherited permissions to this group. In the training environment, each student only has direct member access to their subgroup and does not have inherited member access to the parent groups. See the [subgroup membership docs](https://docs.gitlab.com/ee/user/group/subgroups/index.html#subgroup-membership) to learn more.

> **Tip:** Remember that the breadcrumbs are a good way to navigate between subgroups when you're creating a multi-level collection of groups and subgroups.

## Prerequisites

1. You have already redeemed the invitation/voucher code.

1. You have signed into https://gitlab.com with your existing username.

1. You have clicked the `My Group` button and opened a new browser tab with the URL `https://gitlab.com/gitlab-learn-labs/environments/session-{id}/iu{######}`. You should see `My Test Group - iu{######}` as the title of the group.

## Task A. Review groups and projects for GitLab's own source code

1. _In a new browser tab_, navigate to [https://gitlab.com/gitlab-org](https://gitlab.com/gitlab-org). This group contains all of GitLab's product source code that is mostly open source and transparent based on our company values.

2. In the list of groups and project, click the linked name for the **Frontend** subgroup. You might have to scroll down or use pagination to find it on the second page.

3. Within the **Frontend** subgroup, you can see all of the projects and subgroups that exist as part of this group. Spend a few moments exploring some of these subgroups and projects.

## Task B. Create organizational subgroups

1. _In the lab environment tab_, ensure that you are in your **My Test Group** group. If you are not in the **My Test Group** group (as in, you are on the `https://gitlab.com/gitlab-learn-labs` splash page) go to `https://gitlab.com/gitlab-learn-labs/environments/session-{id}/iu{######}`, replacing the `{id}` with the invitation code you used, and the `iu{######}` with your username.

1. Click the **New Subgroup** button in the top right corner.

1. In the **Subgroup name** field, type `Awesome Inc`.

1. The **Subgroup URL** shows which namespace hierarchy that this group will be created in.

   - **Do not change the Subgroup URL in this class. You will always create projects under `https://gitlab.com/gitlab-learn-labs/...` since this is your top-level organization group for these steps.**

1. The **Subgroup slug** will automatically populate based on the name. Rename `awesome-inc` to `awesome`.

   - **Best Practice:** This slug is what will appear as the **project path**, which means that it is both the URL path and the folder name when you run `git clone`. It is a best practice to shorten this when appropriate.

1. Ensure that the **Visibility level** is set to `Private`.

   > A private subgroup will ensure that the group and its projects can only be viewed by members. For more details of visibility levels, see the [documentation](https://docs.gitlab.com/ee/user/public_access.html).

1. Click the **Create subgroup** button.
   - You should now see the group with the title `Awesome Inc` and your browser URL will reflect the path at `https://gitlab.com/gitlab-learn-labs/environments/session-{id}/iu{######}/awesome`.

1. **Congratulations!** You have created your first group and are ready to create additional groups on your own. Within the **Awesome Inc** group, create subgroups for each of these teams at your awesome company.
   - **Software**
     - **Core** (this is a subgroup of `Software`, not `Awesome Inc`)
     - **Android**
     - **iOS**
   - **Infrastructure**
   - **Security**

## Task C. Create a new project

1. Navigate to the **Awesome Inc > Software > Core** subgroup that you just created.

1. Click the **Create new project** tile.

1. Click the **Create blank project** tile.

1. In the **Project name** field, enter `Family Budget Calculator`.

1. Note that the project URL shows `/awesome/software/core` in its path. This shows that the project is in the `core` subgroup.

1. Leave the project slug as the default value, `family-budget-calculator`.

1. Set the **Visibility Level** to private.

   > See the [visibility docs](https://docs.gitlab.com/ee/user/public_access.html) to learn more. Keep in mind that any parent groups that have `Private` visibility will be inherited for all child groups and projects and cannot be changed.
   >
   > **Training Environment Limitation:** In the training environment, your group is part of a private parent group so you will not be able to make a group or project `Public`. To test working with public projects, you can create a project in your personal namespace.

1. Enable the **Initialize repository with a README** checkbox.

1. Leave **Enable Static Application Security Testing (SAST)** unchecked.

1. Select **Create project**.

## Task D. Add a project member and set their role

1. In the **Family Budget Calculator** project, click **Manage > Members** in the left sidebar.

1. Click the **Invite members** button in the top right corner.

1. Search for and select your instructor as the user you are inviting. If you are taking the self-paced course, enter your own email address.

1. In the **Select a role** dropdown, select **Developer**. If you are taking the self-paced course, select **Owner**.

   > See the [permissions and roles docs](https://docs.gitlab.com/ee/user/permissions.html) to learn more about each role level.

1. Click the **Invite** button.

1. Refresh the page to see the user invited as a _Direct Member_.

   > Users will inherit permissions from the parent group hierarchy that this project exists in. If a user already has a higher level of access in a parent group (ex. `Maintainer`), that access level supersedes a lower level of permission assigned at the project level (ex. `Developer`).

## Suggestions?

If you'd like to suggest changes, please submit them using a merge request.
