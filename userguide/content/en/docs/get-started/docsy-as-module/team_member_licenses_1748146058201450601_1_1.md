---
title: Team member licenses
description: Support Operations policies page for team member licenses
canonical_path: "/handbook/support/readiness/operations/docs/policies/team_member_licenses"
---

<sup>*Introduced via [support-team-meta#3335](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/3335)*</sup>

## The process

The process for these is:

1. The GitLab team member submits a request via the
   [Support Super Form](https://support-super-form-gitlab-com-support-support-op-651f22e90ce6d7.gitlab.io/).
1. If valid, an issue is filed in
   [support-ops-project](https://gitlab.com/gitlab-com/support/support-ops/support-ops-project).
1. Support Operations logs into the
   [staging cDot app](https://customers.staging.gitlab.com/admin/license/new_license)
   and confirms there is not an already existing license.
1. Support Operations generates the license using the parameters in the issue.
1. Support Operations updates the issue and closes it out.

### Checking for an existing license

1. Login to the
   [staging cDot app](https://customers.staging.gitlab.com/admins/sign_in) via
   Okta.
1. Click the [Licenses](https://customers.staging.gitlab.com/admin/license) link
   on the left-hand side of the page.
1. Type the email address in the search box and click `Refresh`.
1. Review the results to see if an existing license (that is not expired) exists
   can still be utilized.
1. If one does exist, please ask for clarification why a new license is needed
   when an existing one can be used still.
1. Review the clarification given and make a decision if a new license is
   warranted.

### Creating a license

**Note** Before proceeding, please confirm the requested end date on the issue
does not exceed 1 year. If it does, we cannot proceed with the request until
the requester changes that.

![Creating a license via staging cDot](/images/support/readiness/operations/generating_license_via_staging.gif)

1. Login to the
   [staging cDot app](https://customers.staging.gitlab.com/admins/sign_in) via
   Okta.
1. Click the [Licenses](https://customers.staging.gitlab.com/admin/license) link
   on the left-hand side of the page.
1. Click the
   [+ Add new License](https://customers.staging.gitlab.com/admin/license/new_license)
   at the top of the page.
1. Fill out the details on the form
1. Click the `✓ Save` button at the bottom of the form.

   | Field                   | Value                              |
   |-------------------------|------------------------------------|
   | License Type            | Legacy License                     |
   | Name                    | value from the issue               |
   | Company                 | `GitLab - Team Member License`     |
   | Email                   | value from the issue               |
   | Zuora subscription ID   | leave this blank                   |
   | Zuora subscription name | leave this blank                   |
   | Users count             | value from the issue               |
   | Previous users count    | 0 or value from the issue          |
   | Trueup count            | 0 or value from the issue          |
   | Plan code               | value from the issue               |
   | Trial                   | leave unchecked                    |
   | Start date              | today's date                       |
   | End date                | value from the issue               |
   | Notes                   | the issue link                     |

### Updating the issue

After you have generated the license, you need to reply and close out the issue.

To do this, reply with the following:

> The staging license has been generated at this time. Search for the subject
> `Your GitLab License File` in your e-mail to locate it.
>
> For information on applying a license, please read through
> [our documentation](https://docs.gitlab.com/administration/license_file/).
>
> As this is a staging license, please keep in mind you *must* setup your GitLab
> deployment to work with those.
>
> - For non-GDK instances, please see
>   [our documentation](https://docs.gitlab.com/omnibus/development/setup.html#use-customers-portal-staging-in-gitlab).
> - For GDK instances:
>   - Ensure that you have a `env.runit` file created in the root directory of
>     your GDK repository.
>   - It should contain the following contents:
>
>     ```bash
>     export GITLAB_LICENSE_MODE=test
>     export CUSTOMER_PORTAL_URL="https://customers.staging.gitlab.com"
>     ```
>
>   - After the `env.runit` file is setup, please run `gdk restart`
>   - You should then be able to apply the license to your GDK instance
>
> If you get an error that your license key is invalid, this will indicate you
> have not done the needed setup to work with a staging license.

After sending that reply, do the following:

- Add time spent on the issue
- Add the label `~Readiness::Completed` to the issue
- Close the issue
