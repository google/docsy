---
title: "Product"
description: "Legal Product team page"
---

## Marketing

- Visit the [Marketing Guide: Collaborating with GitLab Legal](/handbook/legal/marketing-collaboration/), which covers amongst other things [Promotional Games](/handbook/legal/marketing-collaboration/#promotional-games) and [Media Consent and Model Release Requests](/handbook/legal/marketing-collaboration/#media-consent-and-model-release).
- If the request is not addressed in the Marketing Guide, open a new [General Legal Issue](https://gitlab.com/gitlab-com/legal-and-compliance/-/issues/new?issuable_template=general-legal-template).
- For all materials requiring legal review, refer to the [Materials Legal Review Process](/handbook/legal/materials-legal-review-process).

## Patents

- Visit the [GitLab Patent Program](/handbook/legal/patent-program/) for information on how to participate in this initiative.
- Visit the [Guidelines for reviewing third-party patents](https://internal.gitlab.com/handbook/legal-and-corporate-affairs/legal-and-compliance/productguidance/#guidelines-on-reviewing-third-party-patents) (accessible to team members only).

## Trademark

- Visit [Brand Resources](/handbook/marketing/brand-and-product-marketing/brand/brand-activation/brand-standards/#trademark) and [Trademark Guidelines](/handbook/marketing/brand-and-product-marketing/brand/brand-activation/trademark-guidelines/) for information about using GitLab's trademark.
- [Use of Third-party Trademarks in GitLab](/handbook/legal/policies/product-third-party-trademarks-guidelines/)
- [Trademarks Training Materials](/handbook/legal/trademarks-training-materials/)

## Cleanroom Development Process

- Visit this guidance (accessible to team members only) for further information on the [Cleanroom Development Process](https://internal.gitlab.com/handbook/engineering/cleanroom-development/).

## Using Open Source Software

The guidance for using open source software has been updated to enable team members to comprehensively determine which open source license types are pre-approved (deemed acceptable) for use, and which require prior review by the Legal & Corporate Affairs team (as their use may be unacceptable).

**Team members wishing to use open source software should now refer to the comprehensive [Blue Oak Council](https://blueoakcouncil.org/list) license list, and proceed, as follows:**

- `Pre-approved (Acceptable)`: Software associated with license types rated [Gold](https://blueoakcouncil.org/list#gold), [Silver](https://blueoakcouncil.org/list#silver), and [Bronze](https://blueoakcouncil.org/list#bronze) and all licenses on the Exceptions list are pre-approved for use by the Legal & Corporate Affairs team.
  - Team members can proceed without seeking legal input.
- `Approval required (Potentially Acceptable or Unacceptable)`: Aside from the Exception list, Software associated with a [Lead](https://blueoakcouncil.org/list#lead) rated license type or software associated with a license not included on the Blue Oak Council list requires review before use by the Legal & Corporate Affairs team.
  - Team members can request a review by opening a [legal issue](https://gitlab.com/gitlab-com/legal-and-compliance/-/issues/new?issuable_template=general-legal-template).
  - Include the details of how the software will be used, whether or not it will be modified, and how it will be distributed (if at all) in the issue description.
- `Exception list (Acceptable)`:
  - [WTFPL](http://wtfpl.net)

Team members must ensure that we **comply with all requirements and restrictions associated with the applicable license** (these are typically defined in the body text of the license).

- For example, a common requirement is to include the original copyright and license notice in all copies of the distributed software
- Dependencies which are only used in development or test environments are exempt from open source license requirements as they're not distributed.

### Helpful resources

- [GitLab Licensing and Compatibility](https://gitlab.com/gitlab-org/gitlab-foss/blob/master/doc/development/licensing.md).
- For general information, see: [Google Open Source Program](https://opensource.google/documentation/reference) and [Licenses](https://opensource.google/documentation/reference/thirdparty/licenses)
- For requests related to use of third-party software or other questions related to the use of open source licenses, open a [Legal Issue](https://gitlab.com/gitlab-com/legal-and-compliance/-/issues/new?issuable_template=general-legal-template) and include any information relevant to the request.

## Contributor License Agreements

If you're contributing to an open source project on behalf of GitLab, you may be required to enter into a CLA. In accordance with the [Authorization Matrix Policy](/handbook/finance/authorization-matrix/#authorization-matrix-policy), Legal approval is required to you enter into a CLA on behalf of GitLab.

If you have the choice between a Corporate and Individual CLAs, opt for the Corporate CLA.

Follow these steps to obtain legal approval and enter into a CLA on behalf of GitLab:

1. Check the [Third-party CLA Tracker](https://docs.google.com/spreadsheets/d/106bLmkl6IofWN__iwnu0UwQZzdm5JvDf8qdLV_4DTh8/edit#gid=0) to verify whether there is already a CLA in place in respect of the project you want to contribute to.
1. If there's no CLA already in place listed in the [Third-party CLA Tracker](https://docs.google.com/spreadsheets/d/106bLmkl6IofWN__iwnu0UwQZzdm5JvDf8qdLV_4DTh8/edit#gid=0), open a new [Legal Issue](https://gitlab.com/gitlab-com/legal-and-compliance/-/issues/new?issuable_template=general-legal-template) in the [Legal and Compliance Project](https://gitlab.com/gitlab-com/legal-and-compliance/-/issues).
1. Apply the `CLA` label to the issue.
1. Include details of the project you are contributing to, and add the CLA for approval, either as an attachment or a hyperlink, to the issue.
1. Legal will review the CLA, requesting additional information where necessary, and approve.
1. If an email address and/or account is required to enter into the CLA, the `cla_managers`[at] `gitlab.com` email address should be used. Access to this Google Group can be requested and granted via the issue if required.
1. Once Legal have confirmed approval of the CLA in the issue, you can proceed to enter into the CLA (using the `cla_managers`[at] `gitlab.com` email if one is required) and begin contributing to the project.

Contributions to a third-party project on behalf of GitLab should be made using your @gitlab.com email address. We are continuing to develop our policy and workflow around CLAs on behalf of GitLab contributors. [See related issue here](https://gitlab.com/gitlab-com/marketing/community-relations/opensource-program/general/-/issues/238). For any questions in the meantime, please post to the [#legal](https://gitlab.slack.com/app_redirect?channel=C78E74A6L) Slack channel.

Alternatively, if looking for information on contributing to GitLab see [here](https://about.gitlab.com/community/contribute/dco-cla/).

## GPL Cooperation Commitment

The purpose behind this initiative is to ensure consistent and fair licensing enforcement for breaches of certain licensing terms, in order to support the continued growth of the open source community. Further information on this initiative is available [here](https://opensource.com/article/18/11/gpl-cooperation-commitment).

**GitLab's GPL Cooperation Commitment follows:**

> Before filing or continuing to prosecute any legal proceeding or claim (other than a Defensive Action) arising from termination of a Covered License, GitLab commits to extend to the person or entity (“you”) accused of violating the Covered License the following provisions regarding cure and reinstatement, taken from GPL version 3. As used here, the term ‘this License’ refers to the specific Covered License being enforced.
>
> However, if you cease all violation of this License, then your license from a particular copyright holder is reinstated (a) provisionally, unless and until the copyright holder explicitly and finally terminates your license, and (b) permanently, if the copyright holder fails to notify you of the violation by some reasonable means prior to 60 days after the cessation.
>
> Moreover, your license from a particular copyright holder is reinstated permanently if the copyright holder notifies you of the violation by some reasonable means, this is the first time you have received notice of violation of this License (for any work) from that copyright holder, and you cure the violation prior to 30 days after your receipt of the notice.
>
> GitLab intends this Commitment to be irrevocable, and binding and enforceable against GitLab and assignees of or successors to GitLab’s copyrights.
>
> GitLab may modify this Commitment by publishing a new edition on this page or a successor location.
>
> Definitions
>
> ‘Covered License’ means the GNU General Public License, version 2 (GPLv2), the GNU Lesser General Public License, version 2.1 (LGPLv2.1), or the GNU Library General Public License, version 2 (LGPLv2), all as published by the Free Software Foundation.
>
> ‘Defensive Action’ means a legal proceeding or claim that GitLab brings against you in response to a prior proceeding or claim initiated by you or your affiliate.
>
> GitLab means GitLab Inc. and its affiliates and subsidiaries.
