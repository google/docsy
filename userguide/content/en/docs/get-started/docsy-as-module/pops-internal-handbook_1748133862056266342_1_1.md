---
title: "People Operations Internal Handbook"
description: "Information about the limited access internal handbook People Operations has."
---

## Overview

Some of our processes can not be made public and we can't even share them internally.
For those reasons, People Operations has a internal handbook, where only a limited amount
of people have access.

The project is hosted outside of the `gitlab-com` group (for access reasons) and is available
[here](https://gitlab.com/gl-people-operations/internal-handbook). However, you need to be
invited to have access.

Once you have access to the project, you will also have access to the People Operations internal
[handbook](https://gl-people-operations.gitlab.io/internal-handbook/).

## Usage

Only to be used for items that we can't share in the internal only or public handbook. This
should contain very limit amount of information.

## Get access

Create an access request and assign it to the Director, People Operations. They will add you
as a member to the project. Once you have access to the project, you will also have access
to the hosted page.

### Engineer Access Requests

People Group Engineers will need a couple of [Access Requests](/handbook/it/end-user-services/onboarding-access-requests/access-requests/) in order to maintain, test, and deploy our current integrations and applications.

| **Name** | **Description** |
|---|---|
| Oktapreview | Allows us to log in to okta in your development environment. |
| [Google Cloud Console](https://console.cloud.google.com/), *pops-tools* & *Compute Admin* | Allows us to manage our kubernetes clusters, this is where our production integrations live. |
| 1Password (People Group Vault) | Gives us access to different API keys and passwords for our integrations. |
| [Sentry Alerts](https://sentry.gitlab.net/) | For monitoring application status and get notifications if there are any errors in production. |
| [ops.gitlab.net](https://ops.gitlab.net) | Production repository mirror of projects on gitlab.com, this holds our environment variables and secret keys. |
| [dev.gitlab.net](https://dev.gitlab.net) | Our development repository mirrors, similar to above. |
| [ngrok](https://dashboard.ngrok.com/) | Allows us to test slack integrations without hitting our production server. This reroutes external requests to our local machine. |
| Letter of Employment Spreadsheet | Helps us keep track of new hires and double check with existing integrations. |
| Workday Permission | Enough permission to be able to use the web interface for simple team member look ups and should be able to use the API with the correct level of permission. |
| Greenhouse | Job Admin: People Success permission. This allows us to us to use the Greenhouse API within our integrations for testing and debugging. |
| [Slack API](https://api.slack.com/apps) | Permission to access Slack's API both for production and developmental purposes. |
| [People Group Engineering](https://gitlab.com/groups/gitlab-com/people-group/peopleops-eng/-/group_members) GitLab Group Access | Grants us access to our publicly available projects. Nominatorbot, People-Connect, etc. |
| [Compensation Calculator Admin](https://comp-calculator.gitlab.net/admin) & [Repository Access](https://gitlab.com/gitlab-com/people-group/peopleops-eng/compensation-calculator/-/project_members) | Allows us to grant or revoke permission to use the compensation calculator. Also lets us view the project on GitLab and make contributions. |
