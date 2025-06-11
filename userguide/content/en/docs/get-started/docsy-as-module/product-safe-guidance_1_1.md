---

title: Product Manager SAFE Guidance
---






## Overview

This guide for GitLab Product Managers clarifies and expands on the [Regulation FD Training](https://levelup.gitlab.com/access/saml/login/internal-team-members?returnTo=https://levelup.gitlab.com/courses/recertify-gitlab-regulation-fd-training).

### Making changes to this page

To make any edits to this page, please create a merge request and add a  description of what you want to change and why. Add labels `product operations` `prodops:release` and `product handbook`. Add Product Operations DRI/Maintainer `@fseifoddini` as Reviewer for collaboration and approval. If Product Operations is unavailable and the topic is time-sensitive, please add Maintainer `@gweaver` for collaboration and approval.

Please note the content of this page needs to remain aligned with Legal team guidance so any changes must be approved by one of the Maintainers.

## General Guidelines

GitLab Legal has put together a comprehensive framework to help team members determine which information is internal only and that which can be shared publicly. Following the [SAFE framework](/handbook/legal/safe-framework/) will help you comply with the requirements of Regulation Fair Disclosure.

### If you're not sure

Please reach out to Slack #SAFE with any questions that are still unclear after reviewing this page. When posting in #SAFE tag Product Operations, as that will help them maintain this page.  We also encourage you to raise an MR to update the handbook as needed based on your findings.

### Required Disclaimers

The following applies to GitLab artifacts that have product and specific feature information. Please remember these artifacts should only contain information that is [SAFE](/handbook/legal/safe-framework/). Links to various disclaimers are available in the ["helpful legal references"](#helpful-legal-references) section on this page.

| Topic | Disclaimer | Legal Review Required (Y/N) | Other Considerations |
| ----- | ----------- | --- | --- |
| [3 year direction videos](https://www.youtube.com/watch?v=2By7ipuQk1o) | Y | Y |  |
|[Company wide kickoff video](/handbook/product/product-processes/#kickoff-meetings) | Y | N | |
|[Group Kickoff videos](/handbook/product/product-processes/#kickoff-meetings) | N | N | |
| [Product demos, walk-through videos](/handbook/product/product-processes/#recording-videos-to-showcase-features) | N | N | |
|Meeting recordings (e.g. Team calls, PM Weekly, Retrospectives) | N | N | |
|[Direction pages](/handbook/product/product-processes/#managing-your-product-direction) | Y | N | |
|General product handbook pages | N | N | |
|Epics (non-direction) | N | N | |
|Issues (non-direction) | N | N | |
|Epics `~direction` | Y | N | |
|Issues `~direction` | Y | N | |
|Merge Requests | N | N | |

### General guidance on topics/actions

|Topic | Legal Considerations| Legal Review Required (Y/N) |
| ----- | ----------- | --- |
|Acquisitions | Y | Y |
|Pricing Changes | Y | Y |
|New product launches (e.g GL Dedicated)| Y | Y |
|References to revenue| Y | Y |
|User confidentiality | Y | Y |

### Materially Non-Public Information

Product managers often need access to MNPI to do their job. As GitLab is now a publicly-traded company, it is important we all understand what MNPI is so we manage information/data appropriately. Here are some examples of MNPI:

- historical or forecasted revenues, earnings or other financial results;
- significant new products or services or other product developments;
- significant new contracts or partners or the loss of a significant contract or partner;
- significant developments regarding GitLab’s technology or business operations;
- possible mergers or acquisitions or dispositions of significant subsidiaries or assets;
- major new litigation or regulatory inquiries or developments in existing litigation or inquiries;
- significant cybersecurity incidents or data breaches;
- significant developments in borrowings, or financings or capital investments;
- significant changes in financial condition or asset value or liquidity issues;
- changes in GitLab’s Board of Directors, E-group, or senior management;
- significant changes in corporate strategy;
- changes in accounting methods and write-offs; and
- stock offerings, stock splits or changes in dividend policy.

The list of examples is not a comprehensive list of what could be considered material information. Determining what may be material information will depend upon the facts and circumstances in each particular situation.

### Helpful Legal References

[Product disclaimer templates](https://docs.google.com/presentation/d/1hbf9AnFj_E5Y_Yg_WWoy_R0WJXZZLV0zWpMUHqnIs3c/edit#slide=id.ge2b39964d2_0_144)

### Frequently Asked Questions

#### Do product PIs (performance indicators) need to be marked private?

Yes. Whether in epics, issues or handbook pages, PIs should be internal-only and follow the [SAFE framework](/handbook/legal/safe-framework/).

#### What are some practical examples of things that are SAFE to share and those that need to remain internal-only?

| Situation | Classification | Why |
| --- | --- | --- |
| [Publicly discussing a group's MAU in an issue](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/issues/386)| Not SAFE | We should avoid publicly disclosing MAU numbers |
| [Publicly discussing new/potential product performance indicators](https://gitlab.com/gitlab-org/gitlab/-/issues/238056)| SAFE | We can publicly discuss PIs as long as no actual data (numbers/values) is referenced or exposed |

#### Requesting a review from legal

If you need a review from Legal, please ping in the _#SAFE_ channel in Slack.

#### What artifacts/actions can generally be published with a disclaimer?

See the table above. If you are recording a video that requires a disclaimer but are not using a slidedeck, you may alternatively verbalize the disclaimer at the beginning of the video to avoid extra post-production work.

#### What limitations do we have on sharing specific instrumentation data in public issues?

None, so long as the instrumentation data does not contain [sensitive](/handbook/legal/safe-framework/#sensitive), [financial](/handbook/legal/safe-framework/#financial), or [internal-only](/handbook/communication/confidentiality-levels/#internal) data.

#### What third-party materials (like images, diagrams, and quotes) can be included in publicly-available artifacts?

Guidelines covering the use of third-aprty materials are being prepared and will be linked here when ready.

#### What third-party company and product names and logos can be included in publicly-available artifacts?

The [Third-party Trademark Usage Guidelines](/handbook/legal/policies/product-third-party-trademarks-guidelines/) cover the use of third-party trademarks in GitLab (the product), and set out the process for adding new third-party logos to GitLab.

[This advice](https://gitlab.com/groups/gitlab-com/marketing/strategic-marketing/-/epics/321#note_558193816) covers the use of third-party trademarks in the context of comparative advertising.

#### Should our planning issues be confidential? And if so, should our Kickoff videos be private as well?

In general, keep the issues and videos public. For issues that are of possible interest to investors keep private until publicly disclosed. Don't make public videos that contain earnings and other material information prior to these details being publicly available.
Private issues that might find their way to an investor, analyst, or investment institution, are more likely to be in violation.

#### Should we avoid using $tag on Social Media posts?

`$cashtags` are commonly used to reference anything that is financially related to a company ([example](https://twitter.com/SoFi/status/1425911366313906177)). There is nothing wrong with using this symbol to reference or link to any financial information that has already been disclosed and distributed in an authorized public channel. For example, linking to a company's annual or quarterly statements published on their public website.

If the information is not SAFE, do not link to it or share it publicly.

#### Can you provide a definition for Information that is considered material?

Referencing the [SAFE](/handbook/legal/safe-framework/) handbook page is a great place to start. If you're still unsure, please reach out to Legal in [#legal](https://slack.com/app_redirect?channel=C78E74A6L) and someone will be glad to assist you.
