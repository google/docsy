---
title: "Root Cause Analysis for Critical Vulnerabilities"
---

## What is an RCA?

Root Cause Analysis (RCA) is a process to ultimately identify the root problem of an issue so that we may prevent it from occurring again. You can learn more about [RCAs here](/handbook/engineering/root-cause-analysis/).

To do this a DRI and all relevant other stakeholders from Security and the affected teams (as determined by the DRI) systematically work through a set of questions and discussion topics, as defined in our [RCA Template](https://gitlab.com/gitlab-com/gl-security/rcas/-/blob/main/.gitlab/issue_templates/RCA.md).

## What is an RCA vs a symptom?

It's important to distinguish between root cause and symptoms of vulnerabilities. For example, malware compromise of a system is a symptom of a root problem that must be resolved to keep it from getting compromised again. The root cause could be that there is a golden image that needs to be patched, in order to prevent the problem from being created perpetually. Follow up action items may be threefold: 1) Patch the golden image 2) Patch all vulnerable systems 3) Ensure that the patching procedures address gaps in patching cycles.

## Why do a RCA for S1 vulnerabilities?

It's important to learn from our past mistakes in order to prevent the same or similar `~"severity::1"` issues from repeating in the future. The expectation is that we can both identify and address the root problem as well as discover other similar attack vectors related to the root cause.

## Initiating an RCA

After a `~"severity::1"` security issue has been resolved, an RCA should be initiated by [opening an issue using the RCA template](https://gitlab.com/gitlab-com/gl-security/rcas/-/issues/new?issuable_template=RCA) in the [RCAs](https://gitlab.com/gitlab-com/gl-security/rcas) project.

Due date is automatically set to 30 days.

A specific DRI must be assigned to the issue. By default, this is the security engineer assigned to the incident who has the most technical context. The DRI can be someone else as long as the assignee and a SIRT manager agree. The DRI should be someone capable of understanding the technical context. The DRI role is mainly administrative, with responsibilities described below.

The DRI is also responsible for setting the correct metadata labels on the incident issue.

## Progressing an RCA

The DRI is responsible for reminding others to contribute to the RCA, and for ensuring any stakeholders from relevant [Product Groups](/handbook/product/categories/) or other parts of the company, which have been involved in the incident, have been given an opportunity to contribute.

The DRI is responsible for creating issues for corrective actions the team have identified and assigning a DRI for those follow up issues. The DRI is empowered to make decisions about which corrective actions are specific, measurable, achievable and relevant enough to create an issue on. Because not all issues raised by team members may meet this criteria, the DRI is also empowered to decline corrective actions while at the same time explaining why it was declined. Leadership will assist with resolving any potential conflicts.
Note the DRI does not need to come up with all the ideas! This is mainly an administrative task.

The DRI for an RCA should aim to meet these timeframes:

- T+2 weeks: involved people have been given an opportunity to contribute.
- T+4 weeks:
  - All identified corrective actions have issues created and DRIs assigned
  - The RCA issue description is in a tidy & readable state

## When is an RCA considered complete?

The RCA is considered complete when the tasks in the RCA issue are marked as completed and the issue is closed. This means that the root cause of the vulnerability is well understood and we have a path forward to reduce the likelihood of a similar vulnerability happening again. For example this can be a [custom SAST rule](https://docs.gitlab.com/ee/user/application_security/sast/#customize-rulesets), new security enhancement addressing the vulnerability class holistically, secure coding training, threat model, more secure application settings, etc.).

Issues for corrective actions can be labeled with `~"corrective action"` and [an SLO will apply depending on the severity](/handbook/engineering/infrastructure/engineering-productivity/issue-triage/#severity-slos).

## Where can I find past RCAs?

In the [rcas](https://gitlab.com/gitlab-com/gl-security/rcas/-/issues?sort=created_date&state=closed) project closed issues.

## How can I improve our RCA process?

Open an MR to update this page, and update the [RCA Template](https://gitlab.com/gitlab-com/gl-security/rcas/-/blob/main/.gitlab/issue_templates/RCA.md).

## RCA metadata

To prepare and aid the RCA process a set of metadata should be applied by the DRI to the respective incident issues by using GitLab labels before
the actual RCA process is kicked off. This metadata is based on a set of pre-defined scoped labels:

- `~Incident::Category::*`
- `~Incident::Classification::*`
- `~Incident::Organization::*`
- `~Incident::Origin::*`
- `~Incident::Source::*`

When the decision is made for a particular incident that an RCA is needed the `~RCA::todo` label should be applied to the incident issue by the DRI.
For `~severity::1` issues an RCA is always needed, for other issues of lower severity the need for and RCA is decided on a case-by-case basis.

Along with the `~RCA::todo` a `~Label Review::needed` label is applied to the issue. The DRI for the RCA now should review the
scoped `Incident::*` labels for accuracy and adjust those where needed. Once all labels are reviewed and adjusted the
`~Label Review::done` label should be applied by the DRI.

Once the labels are reviewed and accurately set an RCA issue can be [created](https://gitlab.com/gitlab-com/gl-security/rcas/-/issues/new?issuable_template=RCA).
When the RCA issue is closed the `~RCA::todo` label can be swapped for the `~RCA::done` label.

## Category labels

Having a not too broad and not too specific list of `~Incident::Category::*` labels for our incidents we're
able to gather meaningful data on our problem areas. Subsequent root cause analysis can
show how to tackle the individual issues, however it should be generalized with the aim
to mitigate whole categories of issues effectively. This might be done with joint RCAs
in cases where we have multiple issues in the same category in a rather short time frame.
