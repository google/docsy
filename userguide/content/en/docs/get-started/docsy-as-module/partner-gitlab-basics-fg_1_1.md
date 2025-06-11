---
title: "Partner Facilitator Guide for GitLab with Git Essentials"
description: "This Facilitator Guide is intended to walk you through all important links, preparation items, and after class items for our GitLab with Git Essentials course."
---

## GitLab with Git Essentials Facilitator Guide for Partners

## Important Links

- [Hands On Guide](/content/handbook/customer-success/professional-services-engineering/education-services/gitbasicshandson.md)
- [GitLab Template Projects for VMs](https://gitlab.com/gitlab-com/customer-success/professional-services-group/partner-training-template-projects/gitlab-with-git-basics)
- [Remote Sessions Tips and Tricks](/content/handbook/customer-success/professional-services-engineering/remote-training-tips/)

## Before Class Preparation

- Lab set up and preparation:
  - Set up the lab environment for your organization (if not already done)
- Hands-on walkthrough:
  - Practice each demo in the lab environment
  - Test each hands-on activity in the lab environment
- Websites to have up prior to class:
  - [Related GitLab Docs pages](https://docs.gitlab.com/ee/tutorials/index.html)
  - [Hands on Guide](/handbook/customer-success/professional-services-engineering/education-services/%20gitbasicshandson.html)
  - [Lab environment](https://gitlab.com/gitlab-com/customer-success/professional-services-group/partner-training-template-projects/gitlab-with-git-basics)
- Slides:
  - Make sure you can access the slides with the presenter notes.

## Instructor Tips and Links by Module Number

### Module 1 - GitLab Overview

- Hands-on Environment: Instruct learners to sign into your hands-on demo/lab environment prior to the starting these sections of the module.

- GitLab Maturity page: you may want to demo from [this page](https://about.gitlab.com/direction/maturity/>) to get the latest updates to the maturity model - the deck only has a screenshot.

- GitLab.org project page site: https://gitlab.com/gitlab-org/gitlab

### Module 3 - Git Basics

- Git Cheat Sheet: <https://about.gitlab.com/images/press/git-cheat-sheet.pdf>

### Module 4 - Code Creation and Review

- Be prepared to demo snippets, have some code ready (like a hello world script) to input.

- Be prepared to create a simple wiki.

- Be prepared to demo a merge request (from the Hands-on Guide).

### Module 5 - GitLab CI/CD

- Be prepared to demo creating a `.gitlab-ci.yml` file. This demo will show learners how to complete their lab section for this module.

### Module 7 - Secure

- Complete the SAST demo using the instructions in the notes section/lab guide.

- At the end of the session, please share out the link for the [GitLab Training Survey](https://www.surveymonkey.com/r/proservtraining).

## Cleaning up your Local Comp After Class

Afer each class you will want to clean up your system so you do not end up with duplicates that intefere with future classes.

- Remove the Training directory from your local system: (rm -rf Training).

- Navigate to the training users group and remove the projects you created in the labs.

- If you followed the lab guide, the projects will be:
  - Top Level Project Repo
  - CI Test
  - Second Project
  - AutoDevOps-test

- To delete a project:
  - Navigate to each project's main page.
  - Click on settings on the lefthand menu.
  - Click on the `General` option.
  - Scroll down to the `Advanced` section until you reach the `Delete Project` option. Click the `Delete Project` button.
  - Copy and paste the entire project name in the text box to confirm deletion.
  - Click the `Delete Project` button.
