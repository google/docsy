---
title: "GitLab System Admin - Hands-On Lab: Exploring the Kubernetes Admin Dashboard"
description: "This Hands-On Guide demonstrates the admin dashboard of the Kubernetes GitLab installation."
---

## Objectives

In this lab, you will start to get familiar with the GitLab Admin dashboard. The Admin dashboard is one of the key areas administrators will use to manage their GitLab instances.

## Task A. Accessing the Admin Dashboard

1. Navigate to your GitLab instance.

1. Authenticate to the instance as your root admin user.

1. In the left sidebar, select **Admin**.

1. Take some time to explore the various sections of the Admin area.

## Task B. Configure Instance Sign Up and Sign In

To help secure your GitLab instance, you can customize the way users sign up and authenticate with your instance. In this task, you will enable two-factor authentication and Admin Mode. Admin Mode will introduce additional authentication for Admin tasks in your GitLab instance.

1. Navigate to the Admin area of your GitLab instance.

1. In the left sidebar, select **Settings > General**.

1. Select **Expand** next to **Sign-up restrictions**.

1. In **Allowed domains for sign-ups**, enter your company domain. This ensures only your company's users can register an account.

1. Select **Save**.

1. Select **Expand** next to **Sign-in restrictions**.

1. Check on **Enforce two-factor authentication**.

1. Check on **Enable Admin Mode**.

1. Select **Save**.

1. When you are navigated to the two-factor authentication page, select **Configure Later**.

1. To re-enter Admin Mode, select your profile image in the left sidebar. In the resulting menu, select **Enter Admin Mode**.

1. Input your Admin password in the prompt, then select **Enter admin mode**.

## Lab Guide Complete

You have completed this lab exercise. You can view the other [lab guides for this course](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/sysadminhandson).

### Suggestions?

If you'd like to suggest changes to the GitLab System Admin Basics Hands-on Guide, please submit them via merge request.
