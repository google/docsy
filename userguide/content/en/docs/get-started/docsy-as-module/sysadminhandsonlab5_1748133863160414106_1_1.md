---
title: "GitLab System Administration - Hands-on Lab: Implement Sign-Up Restrictions"
description: "This Hands-On Guide walks you through enabling sign-up restrictions in GitLab."
---

> Estimated time to complete: 30 minutes

## Objectives

This lab will help you improve your instance's security by enabling the option to send a confirmation email on signup, and ensure that signups are only allowed from your company's domain. To read more about sign-up restrictions, click [here](https://docs.gitlab.com/ee/administration/settings/sign_up_restrictions.html).

### Task A. Add Sign-up Restrictions

1. Log into your GitLab web instance with your `root` user and password from Lab 1.

1. In the bottom left corner of the main screen in the sidebar, click **Admin Area**.

1. In the bottom of the left hand side navigation pane and click **Settings > General**.

1. Under **Sign-up restrictions**, click **Expand**.

1. Under **Email confirmation settings**, click the radio button next to **Hard**.

1. Next, ensure sign ups are only allowed for your company's domain. In the **Allowed domains for sign-ups**, type your company's domain name and press <kbd>Enter<kbd>.

1. Scroll down to the end of the section and click **Save Changes**.

## Lab Guide Complete

You have completed this lab exercise. You can view the other [lab guides for this course](/handbook/customer-success/professional-services-engineering/education-services/sysadminhandson).

### Suggestions?

If you'd like to suggest changes to the GitLab System Admin Basics Hands-on Guide, please submit them via merge request.
