---
title: Growth Fast Boot September 2019
description: "Growth groups met in September 2019 for a fast boot to discuss, plan, and begin implementing a Growth strategy at GitLab"
---

The Acquisition, Expansion, Conversion and Retention groups took part in a [Fast Boot](/handbook/engineering/fast-boot/) in September 2019.  [The planning issue](https://gitlab.com/gitlab-org/growth/product/issues/1) contains the proposal for Fast Boot, and this page documents our discussions and outcomes.

## Day 1

[Link to Day 1 Agenda Document](https://docs.google.com/document/d/1eBB3iKPg0qKclh-WUTBdmDrhkApKcBva-RJBKev9Cp4/edit)

### Key Outcomes

#### How we operate as a team

**Section Level**

* Monthly Product/Growth metrics review with E-Group (VP Product leads, with support from Growth Director)
* Every 6 weeks Growth Group Conversation (PM + Eng Director lead)
* Weekly engineering meeting
* Weekly ideation & prioritization meeting
* On Monday, check in on experiments to identify which can be concluded, and to collect data for review meeting on Tuesdays

**Group Level**

* Groups will organize/meet as needed

#### How do we run Growth experiments?

* Development board labels/process - continue on & follow handbook
* A/B testing process, artifacts, expectations
* Each experiment will set confidence level - 95%-99%
* Test summary written by data analyst in the issue (add a "a/b test complete" label for searching later)

#### Expectations for working in another teams' code base

* Emphasize that the point is to gather data, not ship production code
* Challenge:  review process too slow.  Reviewers vs Maintainers.  Only a small number of maintainers.
* Goal:  one deliverable picked up per week

#### Feature Ownership

Fulfillment owns underlying billing, licensing, and transactional system, as well as current portal user experience.

* Acquisition owns the New Signup ARR growth KPI + the new signup UX
* Conversion owns the New Free to Paid Trial ARR growth KPI + the trial UX
* Expansion owns the Current customer seat expansion + current customer upgrade ARR growth KPI + the upgrade flow & true-up flow
* Retention owns the Gross Retention KPI + renewal flow

Growth PM's will own issues for key flows; engineering leaders will help assign work

Long Term:  the vision is for the fulfillment team to own the billing and licensing platform, with a set of API's and SLA's, so the growth teams can build and curate user experiences on top of them to drive great customer experiences (and resulting KPI's).

### Deep Dives

Teardown/journey map existing flow. Leverage demos, videos, screenshots. Ask "experts" to join remotely to demo and share their pain points/opportunities. Session to be led by the product manager.

#### Acquisition Overview

Discussion led by Jensen, PM for Acquisition, topics covered include:

* KPIs and mission for the Acquisition team
* Initial areas of focus
* Teardown of the existing experience
* Teardown of the competitors experience
* Identifying opportunities for improvement

[Video](https://youtu.be/wqTYv9XmzgA)

#### Conversion Overview

Discussion led by Sam Awezec, PM for Conversion, topics covered include:

* KPIs and mission for the conversion team
* Initial areas of focus (Initial product activation, Ah-ha moments with paid features and/or limits, Trial experience and overall value)
* Teardown of the existing experience
* Identifying opportunities for improvement

[Video](https://youtu.be/8ypX5kDUOYM)

#### Expansion Overview

Discussion led by Tim Hey, PM for Expansion. Topics covered:

* Mission
* KPIs & Supporting Performance Indicators
* Customer facing opportunities
  * User Orientation - Users don't know where to start
  * Increase platform confidence and trust - I love my tools and am afraid to switch
* Internal opportunities
  * Self-Managed usage for upsell process and user workflow
  * Self-Managed True-up process and user workflow

[Video](https://www.youtube.com/watch?v=uodOO2RUIbo&feature=youtu.be)

[Slides](https://docs.google.com/presentation/d/13V5vs3o_6ZcipSd6QO4fQYwFxe6r9jqb6zUcJoe-ksY/edit?usp=sharing)

#### Retention Overview

Discussion led by Mike Karampalas, PM for Retention. Topics covered:

* KPIs for retention
* Near-term and longer-term focus for the Retention team
* Teardown of the renewal flow(s)
* Opportunities for improvement

[Video](https://www.youtube.com/watch?v=QKA5rKbl7qU&feature=youtu.be)

[Slides](https://docs.google.com/presentation/d/1Eeh-Nm7n1Z14HZIp6REZ-0vId6PcAbGVjlW4EgyYeRs/edit#slide=id.g4751caaebf_1_0)

## Day 2

[Link to Day 2 Agenda Document](https://docs.google.com/document/d/1wU8jlC7MlmC4HCZmjGDJxjc1DZ5yZDZ-xxVu-08LZLs/edit)

### Data Deep Dive

Discussion led by Eli Kastelein, Growth Data Analyst. Topics covered:

* GitLab.com data vs Self-Managed data
* Overview of data sources relevant to the growth team
* Vision for how we can use data to serve the growth team
* Event-based reporting versus database reporting
* What's currently blocking us from collecting the data we need to be successful

[Video](https://www.youtube.com/watch?v=eNLkj3Ho2bk&feature=youtu.be)

[Slides](https://docs.google.com/presentation/d/1mLI0zSMmwwjIug3mfiNfVNbwPCLZkSqwUC4F1uqYf28/)

### State of Product Intelligence

During this time we walked through Product Intelligence as a team and reviewed where we were headed. The main item we covered was the Vision Page in the handbook and how we need to clearly communicate what product analytics is and where to find more information.

Topics covered (which will also be added to the handbook)

* Vision
* SMAU -- what it is and how it's managed
* Dashboards -- what they are, self-serve and how to request one
* Data fields available for tracking and what to do if you need a new one
* Tracking and instrumentation -- how to's for GitLab.com and Self-Managed
* Technologies we use

[MR under review](https://gitlab.com/gitlab-com/www-gitlab-com/merge_requests/29940#23dfa14c4e3cd4e7facec62ed501fe5adc7bc0ef)

### A/B Testing Requirements

[Issue: Implement an A/B testing solution that can measure the impact of Growth experiments](https://gitlab.com/gitlab-org/growth/engineering/issues/5)

Key outcome is to work with the Release team to improve our existing Feature Flags capability in GitLab in order to successfully A/B test Growth experiments.

Right now in order to run an experiment, we need to do additional work to ensure we can measure the results.  This work will be bespoke for each experiment while we improve our capability.

We can investigate third party solutions if needed.

## Days 3-5

At this time the individual Growth teams split into their groups to create and work on issues in their respective areas.

## Fast Boot Outcomes

### Implemented new team names, KPI's and objectives

* [Rename Growth Groups](https://gitlab.com/gitlab-com/www-gitlab-com/merge_requests/29704)
* [Updating growth KPIs on KPI index page](https://gitlab.com/gitlab-com/www-gitlab-com/merge_requests/29726)

### Streamlined team processes

* [Product/Engineering meeting cadences and deliverables established](https://gitlab.com/gitlab-com/www-gitlab-com/merge_requests/29799)
* [Product/Engineering workflow established](https://gitlab.com/gitlab-org/growth/discussion/issues/1)
* [A/B Testing discussion progress](https://gitlab.com/gitlab-org/growth/engineering/issues/44)

### Create and deliver issues

Acquisition

* [Test simplified user registration page](https://gitlab.com/gitlab-org/growth/engineering/issues/20) + [Design progress](https://gitlab.com/gitlab-org/growth/engineering/issues/20/designs)
* [Update .com paid signup process](https://gitlab.com/gitlab-org/growth/product/issues/87)
* [Update trial signup process](https://gitlab.com/gitlab-org/growth/product/issues/88)
* [Update Self-Managed paid signup process](https://gitlab.com/gitlab-org/growth/product/issues/89)

Expansion

* [License Utilization by Host - Epic](https://gitlab.com/groups/gitlab-org/-/epics/1981)
* [Add seat differential to host page on version.gitlab.com](https://gitlab.com/gitlab-org/growth/engineering/issues/22)
* [Add column to the host page of version.gitlab on the host page to show last check date](https://gitlab.com/gitlab-org/growth/engineering/issues/26)
* [Add a column to version.gitlab on the host page to show if usage ping is available](https://gitlab.com/gitlab-org/growth/engineering/issues/29)
* [From license.gitlab.com link to the License serach results page on the Hosts page of version.gitlab](https://gitlab.com/gitlab-org/growth/engineering/issues/33)
* [Search by license on version.gitlab](https://gitlab.com/gitlab-org/growth/engineering/issues/34)
* [Add column sort functionality to the host page on version.gitlab.com](https://gitlab.com/gitlab-org/growth/engineering/issues/35)

Conversion

* [Adjust in-app pricing page links](https://gitlab.com/gitlab-org/growth/engineering/issues/46)
* [For free users of GitLab.com add trial options for bronze and silver](https://gitlab.com/gitlab-org/growth/engineering/issues/37)
* [Add project import to the existing welcome to GitLab page](https://gitlab.com/gitlab-org/growth/engineering/issues/32)
* [Create end to end testing for trials](https://gitlab.com/gitlab-org/growth/engineering/issues/31)
* [Remove duplicate trial banner CTA from group billing page](https://gitlab.com/gitlab-org/growth/engineering/issues/30)
* [Update group creation URL so it is always unique and does not generate an error](https://gitlab.com/gitlab-org/growth/engineering/issues/28)
* [Group billing page should contain options to buy now and start a trial](https://gitlab.com/gitlab-org/growth/engineering/issues/27)
* [In group trial add buy now button](https://gitlab.com/gitlab-org/growth/engineering/issues/25)
* [Change "welcome to GitLab" message](https://gitlab.com/gitlab-org/growth/engineering/issues/21)
* [Paid feature upgrade point - feature weights](https://gitlab.com/gitlab-org/growth/product/issues/36)

Retention

* [CustomersDot: change copy on renew page](https://gitlab.com/gitlab-org/growth/engineering/issues/40)
* [Update the automated Zuora renewals email](https://gitlab.com/gitlab-org/growth/engineering/issues/41)
* [Link to CustomersDot in renewal banner](https://gitlab.com/gitlab-org/growth/engineering/issues/43)
* [Make Renew or Add Users the primary CTA on Manage Purchases instead of "Add new subscription"](https://gitlab.com/gitlab-org/growth/engineering/issues/45)
* [Add link to customers.gitlab.com from gitlab.com and about.gitlab.com](https://gitlab.com/gitlab-org/growth/product/issues/93)
* [Charge for actual users when Auto Renew is enabled for .com customers](https://gitlab.com/gitlab-org/growth/engineering/issues/42)
* [Enable Deep Linking to the Renewal Flow](https://gitlab.com/gitlab-org/growth/engineering/issues/39)
* [Fix Renewal Emails to Not Come from paul@gtilab.com](https://gitlab.com/gitlab-org/growth/engineering/issues/38)
* [Consolidate the emails generated by a renewal](https://gitlab.com/gitlab-org/growth/product/issues/84)
* [WIP: Make Auto Renew the Default](https://gitlab.com/gitlab-org/growth/product/issues/43)
