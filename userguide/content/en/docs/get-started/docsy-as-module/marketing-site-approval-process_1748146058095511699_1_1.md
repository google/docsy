---
title: "Marketing Site Approval Process"
---

Going forward, all changes on the marketing site (`about.gitlab.com`) must follow an approval process prior to merging in changes on the website.

### Executive Summary

The lack of an approval process for changes going to production on GitLab's Marketing site creates a risk for our business because, as it stands today, anyone can push a change live to our site at any time (details of risk outlined in the Problem Statement below). We are introducing a review process for any contributions going live on the Marketing Site.

### Problem Statement

GitLab's Marketing site has undergone significant changes over the last two years. GitLab's Marketing team has collaborated on a strategic user flow and is working on specific user journeys that drive our business metrics. As such, we require approvals and controls in place to ensure that all contributions to the Marketing site support ongoing efforts. There are currently no controls or permissions in place, which creates a risk to our business performance. Risk in this situation can take the form of broken analytics data, inconsistent brand messaging, negative impact on SEO ranking, and potential legal issues.

### Symptoms

At its peak, GitLab's Marketing site contained over 3500 pages. Many of these pages receive little to no traffic and have not been updated or deleted since they were created. One can assume the root cause for this bloat is a lack of accountability due to the lack of approvals to ensure content is added or modified with intent and coordination in collaboration with cross-functional teams.

Another example is cases where we have several similar pages that may make sense from an inside-out perspective, but from a customer-centric perspective, they confuse our prospective customers. Example: CI/CD Pages:

1. <https://about.gitlab.com/solutions/continuous-integration/>
1. <https://about.gitlab.com/topics/ci-cd/>
1. <https://about.gitlab.com/resources/ebook-single-app-cicd/>
1. <https://about.gitlab.com/webcast/mastering-ci-cd/>

A byproduct of the uncontrolled increase in pages is the unintended effect of diluting the value of the data we collect from Google Analytics. With so many pages receiving little traffic and providing little value to our prospective customers, we struggle to get concentrated data on core pages.

The codeowners feature was launched on GitLab in 2019, and this requirement was identified with support from the previous CMO but was never actioned: https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/4085

### Goals

The goal of putting controls and approvals in place is to ensure that all changes to the GitLab Marketing site (`about.gitlab.com`, not including `handbook.gitlab.com/*` or `about.gitlab.com/direction/*`) support the defined objectives of GitLab's Marketing team. We will operate the same way as our Product team in that the appropriate people approve all MRs before going into production.

### Hypothesis

The approval process will increase the consistency of our Marketing site while ensuring ongoing initiatives are not at risk of being disrupted due to unapproved changes going live to production. The approval process will also increase visibility and collaboration to provide a customer-centric and coordinated effort for those looking to improve GitLab's Marketing site.

### Strategy

We do not want to compromise [GitLab's everyone can contribute mission](/handbook/company/mission/#mission). Our strategy is to implement a minimal approvals process. Currently, an MR goes live straight to production; this change results in a contribution taking the form of an AB Test proposal (issue) or for an MR to be reviewed before being merged into production.

The Digital Experience team has set up a project for AB Test proposals as a repo: https://gitlab.com/gitlab-com/marketing/digital-experience/ab-testing. Anyone can contribute an issue using the AB Testing issue template (template in progress).

Not everything needs to be an AB Test proposal; we still prioritize MRs as defined in the handbook: [everything starts with an MR](/handbook/communication/#everything-starts-with-a-merge-request).

We will have four approval flows, from minor to major change. The goal is for a member of GitLab's Digital Experience team always to review an MR before it goes live on the Buyer Experience repo or key marketing pages in the www-gitlab-com repo.

#### Approval Levels

1. **Level 01 - Minor Change**
    1. Label: `dex-approval::1-minor`
    1. *Example of the type of change:* typos or content changes.
        1. Anyone on the Digital Experience team can approve and merge.
        1. Once approved by the Digital Experience team, the MR creator can merge.
    1. *Example of the type of change:* /customers filter is displaying the wrong results.
        1. Anyone on the Digital Experience team can approve and merge.
        1. Once approved by the Digital Experience team, the MR creator can merge.
1. **Level 02 - Standard Change**
    1. Label: `dex-approval::2-standard`
    1. *Example of the type of change:* re-arranging components on a page.
        1. Once the Digital Experience team approves, members of the Digital Experience team can merge.
        1. Members of the Digital Experience team should keep their Managers informed.
        1. Manager's discretion to align with the Director of Digital Experience or not.
    1. *Example of the type of change:* Adding new pages.
        1. Managers of Digital Experience can approve and merge.
        1. Manager should align with Director, Digital Experience.
1. **Level 03 - Business Impact Change**
    1. Label: `dex-approval::3-key-page`
    1. *Example of the type of change:* Changing Nav
        1. Directors and Managers of Digital Experience need to align.
        1. Managers of Digital Experience can approve and merge.
    1. *Example of the type of change:* Changes to key drivers of traffic and/or business goals etc. (Homepage, Pricing Page, Why GitLab).
        1. Director, Digital Experience can approve and merge.
        1. Director, Digital Experience will keep Marketing leadership informed of all Major Changes.
1. **Level 04 - Legal Change**
    1. Label: `dex-approval::4-legal`
    1. *Example of the type of change:* Any changes to company information, board/director information, etc.
        1. Legal and Director of Digital Experience must approve.
    1. *Example of the type of change:* Changes to sign-up workflows or alteration/omission of footers/links to anything legal-related.
        1. Legal and Director of Digital Experience must approve.

Once an MR is ready for review, approval outlined in the above sequence must occur to merge an MR into production.

All pages of the Marketing site (about.gitlab.com minus /handbook) are included in the requirement of this new approval process.

## Steps to get Approval

When creating a merge request in the [Buyer Experience Repository](https://gitlab.com/gitlab-com/marketing/digital-experience/buyer-experience) (where we are migrating our marketing pages), please use the [`marketing-site-change` template](https://gitlab.com/gitlab-com/marketing/digital-experience/buyer-experience/-/blob/main/.gitlab/merge_request_templates/marketing-site-change.md).

### Step 1: What is changing in this MR?

Please describe the change and link any relevant issues.

### Step 2: Add the appropriate labels for triage

The MR will have `dex-approval::2-standard` automatically applied, but please update it to one of the following, based to the [approval levels above](#approval-levels).

1. **dex-approval::1-minor**
1. **dex-approval::2-standard**
1. **dex-approval::3-key-page**
1. **dex-approval::4-legal**

### Step 3: Tag the appropriate people for review

Depending on which label is used, you may tag the following people as a `Reviewer` on this MR:

1. **Level 1**: Any member of the [Digital Experience Team](/handbook/marketing/digital-experience/#groups-metrics--team-members)
1. **Level 2**: Any member of the [Digital Experience team](/handbook/marketing/digital-experience/#groups-metrics--team-members)
1. **Level 3**: Ping `@gitlab-com/marketing/digital-experience` in a comment. This will tag the [Digital Experience Leadership team](https://gitlab.com/groups/gitlab-com/marketing/digital-experience/-/group_members?with_inherited_permissions=exclude) using `@gitlab-com/marketing/digital-experience`, and they can review. When in doubt, tag `@mpreuss` as a reviewer.
1. **Level 4**: This will need Legal approval. Tag `@mpreuss` and he can loop in the legal team.

For changes to Support-related pages, please tag `@jcolyer` for review.
