---

title: "JiHu Contribution Merge Monitor Reports"
---

The [Merge Monitor tool](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/tooling/release-certification-tools#merge-request-monitor) looks in public GitLab repositories that JiHu contributes to for merge requests that:

- Were merged
- Were labeled as a JiHu Contribution
- Were **not** labeled with the label that AppSec team members need to apply after [conducting security reviews of JiHu contributions]({{< ref "jihu-security-review-process" >}})

Any findings will be included in reports that are created as [issues in the jihu_merge_request_monitor_reports repository](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/jihu_merge_request_monitor_reports/-/issues). The Federal AppSec team is pinged on each report that is created and the expectation is that they will review each finding.

The Merge Monitor runs via scheduled pipeline. It de-duplicates any findings by checking for open Merge Monitor Report issues for [related merge requests](https://docs.gitlab.com/ee/user/project/issues/crosslinking_issues.html#from-merge-requests) and filtering out any findings that are already known.

## Merge Monitor Report Process

For each finding mentioned in a Merge Monitor report:

1. View the merge request and check to see if it received an AppSec review
    - If it received an AppSec review, apply the `sec-planning::complete` label to the merge request
    - If it did not receive an AppSec review, perform one
1. After verifying that a review was performed or performing a review, check the `MR reviewed` checkbox
1. After applying the `sec-planning::complete` label to the merge request, check the `Label applied` checkbox
1. For each finding, edit the issue description and write a brief summary and check the `Summary` checkbox
    - This should be simple, such as `AppSec review was not performed before merge` or `Review was performed but sec-planning label did not get applied`
    - If needed, add a comment to the issue to document reasons why the merge request did not receive a review, gaps in the process, and opportunities for improvement. Link to the comment on the `Summary` line.
1. Once each finding in the report has been reviewed, close the issue

In the event that you find a vulnerability or other security concern in a finding:

1. Triage it as normal by creating a new issue in the appropriate repository and apply priority/severity labels
1. Ping the merge request author, reviewers, and the AppSec team on the issue
1. If possible, work to get the merge request reverted before it is included in a release
    - If a release is in-progress, contact the delivery team to see if it can be removed from the release
    - If this was already included in a release and this is a S1 finding, follow the normal [S1 process]({{< ref "handling-s1p1" >}})
1. Add a note to the Merge Monitor report that indicates a vulnerability was identified with a link to the issue that was created to track it

## Monitor Limitations

Since the Merge Monitor uses a [Project Access Token](https://docs.gitlab.com/ee/user/project/settings/project_access_tokens.html) in the [jihu_merge_request_monitor_reports](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/jihu_merge_request_monitor_reports), it can only be used to find merge requests in public repositories that the JiHu team contributes to. Some repositories require manual review as mentioned in the [certification process documentation]({{< ref "release-certification#certification-process" >}}) and are not covered by this tool. Contributions to these repositories are reviewed as part of the regular monthly release certification process.
