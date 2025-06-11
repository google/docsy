---
title: Release Certification
aliases:
- /handbook/ceo/office-of-the-ceo/jihu-support/release-certification/
- /handbook/ceo/chief-of-staff-team/jihu-support/release-certification/
---

## Process for Release Certification

Every release with JiHu contributions needs to be certified by a member of the
[Federal Application Security team](/handbook/security/product-security/application-security/index.html).
This is required to satisfy PubSec/FedRamp requirements and
to handle JiHu's merge request contributions to GitLab Inc repositories.

This process involves ensuring that each JiHu contribution included in the release has been
[reviewed and approved by an Application Security team member]({{< ref "jihu-contribution-process" >}})
and posting a comment on the [relevant release task issue](https://gitlab.com/gitlab-org/release/tasks/issues)
that no new vulnerabilities have been identified in the code being released.

### Who can certify a release

As per PubSec/FedRamp requirements, only United States citizens on United States soil are eligible to certify a release.
This means that only members of the Federal AppSec team are eligible to perform the certification of the release.
Note that *any* member of the Application Security team may review and approve a JiHu contribution,
but only Federal AppSec team members can certify the release.

Members of the Federal AppSec team will use the
[AppSec Rotation spreadsheet](https://docs.google.com/spreadsheets/d/18vz84dgTfetTaBjbOCXaLKNfzLYMiy_tBW6RfEUYYHk/edit#gid=0)
to sign up to be responsible for certifying monthly releases. These assignments will also need to be reflected on the
[Release Managers page](https://about.gitlab.com/community/release-managers/), under the AppSec Release Certification column.

### Certification process

The certification process can only begin once it is completely certain that
no new JiHu contributions will be included in the release. The recommended time to begin is during the
`day before the release` section of the release task, which specifies that `no new code can be added to the release`.

Once it is certain that no new JiHu contributions will be added, follow the steps below:

1. [On the release date of each month](/handbook/engineering/releases/) the [jh-upstream-report repository](https://gitlab.com/gitlab-org/jh-upstream-report) should run a scheduled pipeline that automatically creates the release certification issue. This will create an issue in the [jh-upstream-report issue tracker](https://gitlab.com/gitlab-org/jh-upstream-report/-/issues) with a checklist containing each JiHu contribution associated with the upcoming release. If something went wrong, the [release certification tools script](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/tooling/release-certification-tools) may need to be ran manually by following the directions in the `README.md`
1. Verify that every JiHu contribution going into the release is on this list. This can be done by looking at the [status report](https://gitlab.com/gitlab-jh/status-reports/-/issues) repository information in addition to searching for the `JiHu Contribution` labels in [each repository](/handbook/ceo/office-of-the-ceo/jihu-support/#projects) (the certification issue should have a link available). Be sure to look for both open and closed merge requests. The most likely reason a MR would be in the release but not in the checklist is the appropriate milestone had not been set for it.
1. For each JiHu contribution on the checklist:
    - Look at the merge request and verify that an AppSec reviewer has indicated it has been reviewed and is acceptable
    - If a merge request did not receive an Application Security review, perform a review and apply the appropriate labels
    - If a merge request did not receive an Application Security review, consider gently reminding the person who merged it that the Application Security team is supposed to be reviewing these before a merge happens
    - Occasionally, a review will have happened and the label indicating that it was performed did not get applied -- in these situations, go ahead and add the label to the merge request
    - Some merge requests will still be in the `Opened` state, which means they were not part of the release but they are still associated with the release milestone -- in these situations, the checkbox can just be checked
    - Time allowing, briefly review the changes to re-confirm they are acceptable
    - Mark the corresponding checkbox in the release certification issue to indicate the MR has been confirmed acceptable
1. There is a section of repositories that will require manual review. Typically these repositories cannot be included in the automation because the automation uses a project access token that cannot view private repositories or repositories that have the merge request section set as private. For each of these repositories:
    - View the merge request section of each repository and look for any JiHu contributions that were merged
    - Be aware that these merge requests may not be connected to a milestone or a particular release, so it may be necessary to sort `Merged` merge requests by `Merged date` and look for JiHu contributions made in the last month
    - Some of the repositories listed may have a note with information to consider when performing the review
    - If any JiHu contributions are found, remove the default `No JiHu contribution merge requests were included` checkbox and add new checkboxes for each JiHu contribution that were found
    - If no JiHu contributions are found, check the `No JiHu contribution merge requests were included` checkbox
    - When finished reviewing the repository for JiHu contributions, check the `This repository was manually reviewed` checkbox to indicate a review of that repository was completed
1. When absolutely sure that all JiHu contributions in the release have been reviewed by an AppSec team member:
    - Copy and paste the boilerplate comment generated at the bottom of the release certification issue into a comment on the release task issue
    - Make a comment on the release certification issue indicating that the process is complete and linking to the certification comment made on the release task issue
    - Close the release certification issue

### Contributions that introduce vulnerabilities

If a potential S1 or S2 vulnerability is identified in any of the contributions:

1. Comment on the release certification issue with a link to the MR and a description of the vulnerability
1. Post a message in the `#sec-appsec` Slack channel with a link to the comment
1. Ping the appropriate [release manager](https://about.gitlab.com/community/release-managers/) from the delivery team and work with them to remove the MRs from the release
    - If the vulnerable code is removed, continue with the certification process
    - If the vulnerable code cannot be removed, follow the `When a release cannot be certified` steps listed below

### When a release cannot be certified

In some rare situations, a member of the Federal AppSec team may choose **not** to certify a release. This may happen because a known vulnerability is included in the release and it cannot be removed or other situations including (more examples TBD)

In the event that the release cannot be certified:

1. Write a comment on the release certification issue briefly explaining the reasoning behind choosing not to certify release
1. Ping security leadership (`@juliedavila` and `@jritchey`) on the release certification issue in a reply to the comment made above
1. Announce in the `#sec-appsec` Slack channel that the release cannot be certified, link to the release certification issue, and @ mention `@appsec-leadership`
