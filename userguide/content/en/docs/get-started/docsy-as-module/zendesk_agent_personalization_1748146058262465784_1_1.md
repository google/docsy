---
title: Zendesk agent personalization
description: Describes agent display options that can be personalizd in Zendesk for support team members
category: Zendesk
subcategory:
last-reviewed: 2024-05-23
---

## Zendesk agent personalization

As a support engineer, there are several things you can personalize in Zendesk. For example, during your onboarding you are guided to update your profile picture. There are aspects things you can modify by editing your support-team yaml entry.   This page describes what items you can personalize, and how to change them.

For more information about the Zendesk fields that are editable via the support-team.yaml, see the [support team wiki](https://gitlab.com/gitlab-support-readiness/support-team/-/wikis/Support-team-entry/Zendesk).

### Display name

By default, your display name in Zendesk will be `Firstname Lastname`.  You can choose to personalize your display name that appears in your ticket replies and in your signature, by setting up an alias.

To change your display name to use an alias:

1. Edit your [support-team project entry](https://gitlab.com/gitlab-support-readiness/support-team/-/tree/master/data/agents) page.
2. Find the section for the instace of Zendesk you want to update (`main` for Global or `us-federal` for US Government).
3. Update the `alias` line to the name you would like to use as an alias.

Be aware that there are other ways that your name may be displayed to customers that you also might want to consider, for example:

* Your Zoom [display name](/handbook/support/#zoom-name-format),
* Calendly [Personal Link](https://calendly.com/app/personal/link) URLs,
* GitLab [username](/handbook/tools-and-tips/#change-your-username-at-gitlabcom).

### GitLab handle displayed in your Zendesk signature

By default, your GitLab handle will not be shown in your Zendesk Signature. You can choose to have it displayed if you prefer, as follows:

1. Edit your [support-team project entry](https://gitlab.com/gitlab-support-readiness/support-team/-/tree/master/data/agents) page.
2. Find the section for the instace of Zendesk you want to update (`main` for Global or `us-federal` for US Government).
3. Update the `show_in_signature:,  gitlab_handle:` section from `false` to `true`.

### Salutations

You can set a personalized salutation that will always be inserted before your signature with your ticket updates. For example `Regards,`. We generally recommend omitting this (by not creating a default salutation) and instead choose a salutation that matches the situation in the ticket you are working on. However, if you do want to set this up, you can do as follows:

1. Edit your [support-team.yaml](https://gitlab.com/gitlab-com/support/team/-/blob/master/data/agents/) page.
2. Find the section for the instace of Zendesk you want to update (`main` for Global or `us-federal` for US Government).
3. Update the `salutations:` line to your preferred phrase.
