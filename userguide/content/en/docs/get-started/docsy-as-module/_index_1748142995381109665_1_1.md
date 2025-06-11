---
title: "JiHu Support"
description: "How the GitLab Inc team provides support to JiHu"
---

## Overview

As announced in the blog post [GitLab licensed its technology to new independent Chinese company](https://about.gitlab.com/blog/2021/03/18/gitlab-licensed-technology-to-new-independent-chinese-company/), GitLab Inc. has licensed its technology to JiHu. This page is outlines how the GitLab Inc. team provides support to JiHu.

## Brand

Please refer to our [guidelines](https://docs.google.com/document/d/1oJd_3SMHlTod6j3ThqhjpeCyyw8rqBM4WUeOfy7vYKs/edit?usp=sharing)

## Communications

Please refer to our [guidelines](https://docs.google.com/document/d/1SEBkJp0R-yjN654KTJjcSI55VGwWPHN2xTKLW5FNvUM/edit?usp=sharing). Invitations sent to GitLab Team members to join the `gitlab-jh.slack.com` Slack server are legitimate. This server is used for communications between GitLab Inc. and JiHu.

## Sales

Please refer to our [guidelines](https://docs.google.com/document/d/1JigQn7g8KUrY8N6WHuf248ARWHzCpIGhE2yXriuhI5c/edit?usp=sharing).

## Professional Services

Please refer to our guidelines (link to be added).

## Customer Support

Process to be added below.

## Engineering

### R&D Roles

| DRI | Role |
| --- | --- |
| [Mek Stittri](/handbook/company/team/#meks) | Engineering DRI |
| [Kevin Chu](/handbook/company/team/#kevinchu) | Product DRI |
| [Lin Jen-Shin](/handbook/company/team/#godfat) | Engineering Facilitator |

### JiHu engineering contact

[MAO Chao](https://gitlab.com/chaomao) is the JiHu engineering contact
for GitLab Inc. When GitLab Inc makes changes which requires JiHu to also
change, MAO can help coordinate.

### Projects

JiHu team projects are located at <https://jihulab.com/gitlab-cn/>. Mirrored projects for `gitlab-org` tooling and compliance checks are available at <https://gitlab.com/gitlab-org/gitlab-jh-mirrors/>.

Even though most of the JiHu projects are moved to JiHuLab.com, some projects
are still under the [gitlab-jh](https://gitlab.com/gitlab-jh/) group.
To request access please reach out to [Kevin](/handbook/company/team/#kevinchu) or
[Mek](/handbook/company/team/#meks) to provision.

| GitLab Inc Project                                      | JiHu Project                                               |
|---------------------------------------------------------|------------------------------------------------------------|
| <https://gitlab.com/gitlab-org/gitlab>                    | <https://jihulab.com/gitlab-cn/gitlab>                       |
| <https://gitlab.com/gitlab-org/license-gitlab-com>        | <https://gitlab.com/gitlab-jh/license-gitlab-cn> (private)   |
| <https://gitlab.com/gitlab-org/customers-gitlab-com>      | <https://jihulab.com/jihulab/engineering/customers-jihulab-com> (private) |
|                                                         | <https://gitlab.com/gitlab-jh/cookbook-customers-gitlab-com> |
| <https://gitlab.com/gitlab-services/version-gitlab-com>   | <https://gitlab.com/gitlab-jh/version-gitlab-cn>             |
| <https://gitlab.com/gitlab-org/omnibus-gitlab>            | <https://jihulab.com/gitlab-cn/omnibus-gitlab>               |
| <https://gitlab.com/gitlab-org/gitaly>            | <https://jihulab.com/gitlab-cn/gitaly>               |
| <https://gitlab.com/gitlab-org/gitlab-environment-toolkit> | <https://gitlab.com/gitlab-jh/gitlab-environment-toolkit>    |
| <https://gitlab.com/gitlab-org/build/CNG>                 | <https://jihulab.com/gitlab-cn/build/cng-images>             |
| <https://gitlab.com/gitlab-org/charts/gitlab>             | <https://jihulab.com/gitlab-cn/charts/gitlab>                |
| <https://gitlab.com/gitlab-org/gitlab-docs>               | <https://jihulab.com/gitlab-cn/gitlab-docs-cn>           |
| <https://gitlab.com/gitlab-org/gitlab-runner>             | <https://jihulab.com/gitlab-cn/gitlab-runner>                |
| <https://gitlab.com/gitlab-org/gitlab-svgs>             | <https://jihulab.com/gitlab-cn/gitlab-svgs> |
| <https://gitlab.com/gitlab-org/gitlab-qa> | <https://jihulab.com/gitlab-cn/gitlab-qa> |

### JiHu contribution process

Please refer to [JiHu contribution process](/handbook/ceo/office-of-the-ceo/jihu-support/jihu-contribution-process/) for details.

### Broken JiHu main branch resolution process

There are times where [`main-jh` branch](https://jihulab.com/gitlab-cn/gitlab) is broken and requires upstream merge requests to resolve. When this happens the following process will be enacted for a timely resolution within 2 business days of JiHu upstream MR creation.

1. JiHu team will open an upstream MR with the resolution
1. JiHu Engineering DRI will notify GitLab Inc with a message in [#main-jh-broken](https://gitlab-jh.slack.com/archives/C026EBMTRRB) to identify that the MR is escalated to the GitLab maintainers
1. GitLab Facilitator will apply `~"JiHu Broken Pipeline"` label to the merge request and solicit a review from the appropriate domain (backend, frontend).
1. GitLab Facilitator will notify GitLab Inc team members in the #jihu-engineering channel.
1. JiHu will add the MR and root cause of the failure to <https://gitlab.com/gitlab-jh/gitlab-jh-enablement/-/issues/215>

### Merge requests with broken JiHu validation pipeline

Check [What to do when the validation pipeline failed](/handbook/ceo/office-of-the-ceo/jihu-support/jihu-validation-pipelines/#what-to-do-when-the-validation-pipeline-failed) for more details.

### Security Release Process

JiHu is responsible for building and releasing the JiHu Edition each month including all patch and security releases. For security releases, GitLab Inc will continue to follow our existing [security release process](https://gitlab.com/gitlab-org/release/docs/blob/master/general/security/process.md) to publish our [security releases](https://about.gitlab.com/releases/categories/releases/). To enable JiHu to build their security releases in a timely manner, GitLab Inc will notify JiHu when a security release is in progress along so that their teams can be on stand by. GitLab Inc will not notify JiHu of the contents of the security release or of the vulnerability.

To notify JiHu of an upcoming security release, please simply post a comment in: https://gitlab.com/gitlab-jh/gitlab-jh-enablement/-/issues/112

### Vulnerability Disclosure Process

GitLab Inc will follow the [documented vulnerability disclosure process](https://about.gitlab.com/security/disclosure/#vulnerability-disclosure) and will not provide detailed information about vulnerabilities directly to JiHu. No information will be shared prior to or during an in-progress security release.

Only after a GitLab [security release](https://gitlab.com/gitlab-com/gl-infra/readiness/-/tree/master/library/security-releases-development), GitLab Inc may provide JiHu with:

- A link to the public security release blog post
- A link to the GitLab issue describing the vulnerability, which will remain confidential until 30 days after the release in which the vulnerability was patched

This information will be communicated via Slack and the weekly engineering sync with JiHu.

For security vulnerabilities introduced by JiHu contributions, the GitLab Application Security team will share mitigation steps as long as they do not disclose vulnerability details or information that could result in the discovery of vulnerability details.

- If such mitigation steps exist, the GitLab Application Security team will notify JiHu by creating a confidential issue in the JiHu enablement project with the mitigation steps.
- If no mitigation steps exist, the vulnerability will be disclosed as per GitLab's regular security vulnerability disclosure process.

### Security Best Practices

GitLab can share security best practices with JiHu. This may include defense in depth measures, hardening techniques, and other information in the interest of keeping GitLab, JiHu, and their customers secure. This can not include vulnerability details or specific remediations that could expose information about an unpatched vulnerability or ongoing incident.

### Consulting Process

JiHu benefits from GitLab expertise, particularly around operating GitLab as a SaaS product. GitLab may charge JiHu for consulting on items that require engagement beyond a quick response on Slack. This way, GitLab can safeguard against unplanned work while JiHu builds its domain expertise. This is also agreed upon in GitLab's [Technical Services Agreement with JiHu - Internal](https://drive.google.com/file/d/19HXz1xxCS-BlDwMFUquw1Vl06SQ16Mgc/view).

#### Topics not in scope for consulting

- Reviewing MRs
- Roadmap alignment
- Management collaboration

## Product

### Role of the Product DRI

The [Product DRI](#rd-roles) has the following responsibilities:

- Provide product management practice guidance to the JiHu CTO and product counterparts
- Enable alignment between GitLab Product and JiHu Product
  - Provide regular updates and raise awareness of GitLab investment themes and roadmap
  - Disseminate JiHu plans and roadmap with the appropriate party
- Liaise with JiHu CTO on product data
- Work with stage groups to implement solutions that pertains to JiHu or China related requirements
- Partner with Engineering DRI and Engineering Facilitators to define and maintain processes that ensures the smooth functioning between GitLab and JiHu

### Product Manager responsibilities

JiHu contributions are similar to community contributions. The difference is they are higher in volume and frequency. As JiHu ramps up in the GitLab codebase, they are also eager to build understanding and learn where and how they might contribute to GitLab. Product Managers can share their public directions and work with the JiHu team to help JiHu become self-sufficient and efficient.

At times, product managers are asked to provide feedback or directly respond to specific proposals from JiHu. GitLab PMs should help facilitate collaboration between GitLab engineers and the JiHu team. This means if there's misalignment on product direction, call that out early so JiHu doesn't spend time working on things GitLab doesn't intend to merge.

If product managers need help connecting with JiHu counterparts, ping the [Product DRI](#rd-roles) in [#jihu-product](https://gitlab.slack.com/archives/C01S8CFF7HR).

### Product Designer responsibilities

GitLab Product Designers are responsible for reviews and guidance and should not take over the complete design work for issues that JiHu wants to contribute, as JiHu has their own Product Design team that will help get these issues ready for implementation.

**Process**

Once a Product Designer gets pinged on an issue that JiHu intends to contribute upstream, the Product Designer reviews whether that issue already has a clear proposal that does not conflict with our [Pajamas guidelines](https://design.gitlab.com), the [Product principles](/handbook/product/product-principles) or planned work of their team.

If there is no clear design proposal yet, or there are conflicts with Pajamas or the Product principles, the designer leaves a comment about what is required before the issue should go into implementation.

#### Milestone Product Planning Process with JiHu

To facilitate collaboration and feedback, JiHu plans ahead of GitLab's milestone  planning process to give GitLab product groups time to provide feedback ahead of implementation. The following will happen every milestone:

1. JiHu will create a milestone planning issue in the [gitlab-jh-enablement project](https://gitlab.com/gitlab-jh/gitlab-jh-enablement), such as this [example](https://gitlab.com/gitlab-jh/gitlab-jh-enablement/-/issues/269). JiHu typically provides the plan 2 weeks before the 18th of the month.
1. For any items which do not already have an issue in the GitLab.org project, the JiHu team creates an issue. If there is an existing issue, it is linked to from the milestone planning issue. This helps the GitLab product group track JiHu contributions in the same place where other day to day work is tracked.
1. The Product DRI will facilitate awareness and encourage collaboration via the [JiHu Milestone Review Template](https://gitlab.com/gitlab-com/Product/-/blob/main/.gitlab/issue_templates/Monthly-JiHu-Milestone-Review.md)
1. Individual product manager and their engineering counterparts will provide feedback to JiHu as needed

##### Large Product Initiative Planning

In the interest of creating IP, JiHu will take on larger product initiatives that spans multiple milestones. This type of product initiatives take more coordination. JiHu and GitLab representatives regularly stay in sync regarding these product plans. The goal is to identify large initiatives early so that the appropriate DRIs can be looped in. One example of this type of product initiative is the [Visual Builder for the pipeline editor](https://gitlab.com/groups/gitlab-org/-/epics/4499).

#### What product managers are not responsible for

GitLab Product Managers are not responsible for JiHu product decisions, but collaboration and feedback with JiHu Product Managers is encouraged and appreciated.

- Just like PMs aren't the arbiters of community contribution, product managers are not the arbiter of what the JiHu team works on
- Product managers are not responsible for JiHu product decisions, such as tiering, pricing
- When reviewing JiHu milestone planning:
  1. Be aware of JiHu's plans in your product area.
  1. Provide guidance in accordance with GitLab's product direction.
  1. Help avoid surprises and help JiHu be successful. If feedback will take some time, please provide a heads-up.
  1. It is not necessary to provide feedback if there's no feedback to give. JiHu contribution can be the same as other community contributions

### Differentiating Proprietary JiHu Features

We differentiate proprietary features for JiHu distributions by including them in the `/jh` [directory](https://gitlab.com/gitlab-org/gitlab-jh-mirrors/-/tree/main-jh/jh). However, the majority of contributions from JiHu team members should be outside of the `/jh` directory signaling the expectation that most contributions are to GitLab Core and only certain specific features are exclusive to the /jh offering.

## Links

- [GitLab licensed its technology to new independent Chinese company](https://about.gitlab.com/blog/2021/03/18/gitlab-licensed-technology-to-new-independent-chinese-company/)
- [GitLab licensing technology to independent Chinese company FAQ](/handbook/company/faq-gitlab-licensing-technology-to-independent-chinese-company/)
- [China Service Working Group](/handbook/company/working-groups/china-service/)
