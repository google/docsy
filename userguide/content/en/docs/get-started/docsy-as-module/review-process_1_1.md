---
title: "AppSec Review Template Process"
description: "This review template is tailored to application security reviews of GitLab features. Parts of it might be applicable to other software, other parts might not."
---

## :warning: Prioritization Note

[As of 2023-11-02, AppSec is only prioritizing P1 AppSec reviews and threat models](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/appsec-team/-/issues/475#note_1632226713). This does not mean P2 or P3 AppSec reviews or threat model requests can't be submitted, but please understand that due to capacity limitations we will only be able to prioritize P1 reviews. Reach out to us in the #sec-appsec Slack channel if you have any questions or concerns.

## Review preparation

To start an actual review a few preparation steps need to be done in order to
have a systematic and comprehensible approach amongst all reviewers. Main
output of the preparation step is a **scope definition** and **time
estimation**.

### Scope definition

Based on the provided input in the review issue the reviewer should be able to
build a prioritized list of sub-features and testable items which are in scope
and to be tested within the review. Most of the time it might also be needed to
define items/sub-features which will **not** be tested.

The reviewer needs to gather a high-level understanding of the feature to
properly define the scope of the review. This means not only the amount of code
and given time constraints need to be considered. The reviewer needs to have
context of the environment the code will be executed in, which APIs are being
provided, where inputs come from and which adjacent APIs are being called.

The in-scope list should be a rather high-level list, further refinement will
be conducted in the subsequent review steps.

### Prioritization

Different sub-features and functionalities of the feature need to be
prioritized. For this apparent critical functionalities like authentication and
authorization should get highest priority.

See [Assigning Priority]({{< ref "appsec-reviews#assigning-priority" >}})

The following items are considered high priority code parts:

- Parts which involve authentication:
  - Login functionality
  - Deploy keys or token
  - Password reset.
- Parts which involve authorization:
  - New access and permission checks of any kind
  - Modification of access rights and permissions
- File uploads
- Newly implemented security checks to prevent common vulnerabilities
- Introduction of new dependencies

### Threat modeling

Refer to the [threat modeling runbook page]({{< ref "threat-modeling" >}}).

### Time estimation

Based on the defined scope and the "size" of the feature as well as any time
constraints listed in the requesting issue the reviewer should be able to give
a estimation for the review to be completed. Under tight time constraints a
second (or more) reviewer might be requested to conclude the review in a timely
manner.

### Preparation Output

Output of the preparation step should be captured in the review issue using the
`Preparation` section in the [issue template](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/appsec-reviews/-/tree/master/.gitlab/issue_templates/AppSec%20Review.md)(internal link). The table of to-be-tested in-scope
items should be kept up to date whenever a test item has been addressed. The
coverage percentage should be estimated and noted in the according column as
well. This table might be a high-level overview only but should contain all
relevant topics. Further refinement of the to-be-tested items will be done in
the subsequent steps. The time estimation should be filled out in the template
text and the review issue due date should also be set to the expected end date
of the review.

## Review process

Following the in-scope items by priority the reviewer will conduct the
requested review. Any security related findings and concerns should be captured
in a dedicated thread in the review issue. Having all initial security concerns
and findings within the issue allows the review issue to be a [single source of truth](https://docs.gitlab.com/ee/development/documentation/styleguide/#documentation-is-the-single-source-of-truth-ssot)
for its review cycle. The individual findings can be discussed in the separate
threads with the development team, if the issue needs a dedicated in-depth
discussion a separate issue should be created in the according project and
linked to the review issues. In order to [close](#closing-the-review-issue) a
review issue all findings need to be addressed and follow up issues need to be
created on open discussions.

### Finding description

Each finding or security concern should get its own thread in the review issue.
The following template can be used:

```markdown
### short description
** Severity: Informational/Low/Medium/High/Critical **

details and reproduction steps
```

The heading should contain a concise description of the issue. For instance
"Reflected Cross-Site Scripting in search parameter" or "Lack of certificate
validation in backend communication". The details should go in-depth such that
the issue is clearly understandable and, if applicable, can be reproduced with
reasonable effort.

Not directly exploitable issues like missing or incomplete standards, such as
the lack of usage of Secure tools on all production code are also to be
documented as a finding during the review process.

### Conclusion

When the review is done a conclusion section should be added as a comment to
the issue using the `Conclusion` section in the [issue template](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/appsec-reviews/-/tree/master/.gitlab/issue_templates/AppSec%20Review.md).

The conclusion section should contain a brief summary of the findings,
potentially highlighting any critical findings. When the review process itself
went very well this section should also be used to point out the participating
team members for their
[collaboration](/handbook/values/#collaboration)
efforts.

#### Coverage

The coverage section should be used to note how well the scope was covered,
what has been tested and what could not be reviewed. If possible also test and
review steps which did not produce a finding should be noted as well.

#### Findings

The findings section should contain a list of all findings made during the
review. The [`finding_table.rb`](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/appsec-reviews/-/tree/master/tools/finding_table.rb) script will try to
pre-populate a table for this. The `Remediation` column still needs to be
filled out manually to point to the accordin remediation MRs or issues.

#### Problems

If any blockers or problems occurred during the review those should be
mentioned as well. In order to stay
[results](/handbook/values/#results) oriented any
problem should come with a suggestion how to do it better or how to avoid the
problem in future reviews.

#### Next review cycle

Usually the reviewed component is not finished in way that would allow to sign
off a security check forever. Therefore the last section in the conclusion
should mention a reasonable time frame for a follow up review. This might be
shortly before a feature or component is launched or when substantial changes
are being made to the component.

#### AppSec follow up actions

Follow up activities for the AppSec team such as "improve best practices
documentation for X", where a common usage pattern is identified should be
listed here. A respective issue should be filed for any AppSec follow up task
and linked in this section.

## Closing the review issue

It might be the case that over the timeline of the review some findings already
are getting addressed, some might not yet be considered by the development
team.

In order to close the review issue there should be either a follow up issue or
MR on the respective development repository. If a follow up is missing it
should be created by the reviewer and linked to in the respective finding
thread. For those issues the normal [triage process](/handbook/engineering/infrastructure/engineering-productivity/issue-triage/)
applies.
