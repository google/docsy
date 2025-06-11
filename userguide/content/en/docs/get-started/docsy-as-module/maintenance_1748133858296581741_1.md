---
title: Maintenance Tasks
description: Operations workflow page for Zendesk maintenance tasks
canonical_path: "/handbook/security/customer-support-operations/workflows/zendesk/maintenance"
---

To maintain healthy environments, there are several maintenance tasks we must do. While the aim is to always automate these, some cannot be automated and must be done manually from time to time. If the task is automated, it will indicate as much

## Enable upcoming version deprecation warning in the themes

To warn customers of a major version being unsupported soon, we display a warning on the theme when they enter their GitLab version.

To modify this, you would do the following:

- Update the `data/theme/script.js` file
  - You are wanting to make three changes here:
    1. Update the version number and date in the `upcoming_unsupported_version_message` function
    1. Ensure the following `if` block is uncommented:

       ```javascript
       if ($(this).val().split('.')[0] == xx) {
          $('#gitlab_version_checker_upcoming').show();
        } else {
          $('#gitlab_version_checker_upcoming').hide();
        }
       ```

       - Where `xx` is the previously used version number
    1. Ensure the previously used version number in the `if` block (from point 2) is updated
- Update the version in the `data/theme/manifest.json` file

This is done in a way to ensure it is enabled on the theme for at least a month prior to the GitLab major release. Refer to [GitLab releases](https://about.gitlab.com/releases/) for more info on upcoming releases. So if the release date is 2025-05-15, you would want to ensure it is done in time for the 2025-04-01 deployment.

## Disable upcoming version deprecation warning in the themes

As the version from the message is now unsupported, we need to remove the warning. To do this, simply modify the theme in the following way:

- Update the `data/theme/script.js` file
  - Ensure the following `if` block is commented out:

    ```javascript
    if ($(this).val().split('.')[0] == xx) {
       $('#gitlab_version_checker_upcoming').show();
     } else {
       $('#gitlab_version_checker_upcoming').hide();
     }
    ```

    - Where `xx` is the previously used version number
- Update the version in the `data/theme/manifest.json` file

This is done on the day of a GitLab major release. So if the release is 2025-05-15, these changes would go live on that date.

## Update supported versions in the themes

We need to update the list of supported versions. This is done by modifying the theme in the following way:

- Update the `data/theme/script.js` file
  - Locate the definition of the `supported_versions` variable and modify the Array to to have the currently support versions.
- Update the version in the `data/theme/manifest.json` file

This is done on the day of a GitLab major release. So if the release is 2025-05-15, these changes would go live on that date.

## Fix bad task ticket

<sup>Automated in Zendesk Global via [Zendesk Global > Maintenance Tasks](https://gitlab.com/gitlab-support-readiness/zendesk-global/maintenance-tasks) to run every hour at the 30 minute mark.</sup>

<sup>Automated in Zendesk US Government via [Zendesk US Government > Maintenance Tasks](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/maintenance-tasks) to run every hour at the 30 minute mark.</sup>

This locates Task type tickets that have a Due Date set before the current time. Any tickets found in this state have their due date removed and are set to the type of Question.

Applicable instance:

- Zendesk Global
- Zendesk US Government

## Fix false expired tags in orgs

<sup>Automated in Zendesk Global via [Zendesk Global > Maintenance Tasks](https://gitlab.com/gitlab-support-readiness/zendesk-global/maintenance-tasks) to run every hour at the 30 minute mark.</sup>

This locates organization's containing the `expired` tag and a `support_level` value that is not `expired`. For these organizations, we need to remove the false `expired` tag. The script will do so after checking the following:

- Removing the `expired` tag does not remove all `support_level` tags on the organization
- Removing the `expired` tag would yeild an actual update

Applicable instance:

- Zendesk Global

## Permanently delete deleted users

<sup>Automated in Zendesk Global via [Zendesk Global > Maintenance Tasks](https://gitlab.com/gitlab-support-readiness/zendesk-global/maintenance-tasks) to run twice daily via Pipeline Schedules at 0045 and 1245.</sup>

<sup>Automated in Zendesk US Government via [Zendesk US Government > Maintenance Tasks](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/maintenance-tasks) to run twice daily via Pipeline Schedules at 0045 and 1245.</sup>

Deleting a user removes them from the Zendesk workspace, however it does not actually _fully_ remove the user. As such, we need to routinely remove these deleted users from Zendesk.

Applicable instance:

- Zendesk Global
- Zendesk US Government

## Purge Redis cache for global_organizations

<sup>Automated in Zendesk Global via [Zendesk Global > Maintenance Tasks](https://gitlab.com/gitlab-support-readiness/zendesk-global/maintenance-tasks) to run every Saturday at 0030 UTC.</sup>

This clears the Redis data within the key `global_organizations`. This is needed from time to time to ensure the Redis cached data isn't stale.

Applicable instance:

- Zendesk Global

## Purge Redis cache for usgov_organizations

<sup>Automated in Zendesk US Government via [Zendesk US Government > Maintenance Tasks](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/maintenance-tasks) to run every Saturday at 0030 UTC.</sup>

This clears the Redis data within the key `usgov_organizations`. This is needed from time to time to ensure the Redis cached data isn't stale.

Applicable instance:

- Zendesk US Government

## Purge Redis cache for usgov_users

<sup>Automated in Zendesk US Government via [Zendesk US Government > Maintenance Tasks](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/maintenance-tasks) to run every Saturday at 0030 UTC.</sup>

This clears the Redis data within the key `usgov_users`. This is needed from from time to time to ensure the Redis cached data isn't stale.

Applicable instance:

- Zendesk US Government
