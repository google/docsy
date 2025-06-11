---
title: "Cross-Functional Prioritization"
description: "Transition R&D teams into a steady priorization state driven by backlog data, SLO guidelines & healthy prioritization ratios"
status: active
---

## Purpose

This working group is charged with rolling forward from the emergency "Engineering Allocation" prioritization methodology to a new process. The working group should name, design, kickoff, implement, solicit feedback, and iteratively improve the new process before disbanding. The new process should accomplish three major things:

1. **Achieve an optimal balance** of new features, security fixes, availability work, performance improvements, bug fixes, etc. via a framework that helps drive conversations and alignment. Balance across these categories will allow GitLab to operate in a way that will allow us to meet revenue goals and maintain the stability of our platform.
1. It should **give voice to everyone** in the quad (PM, Development, Quality, and UX)
1. It should **provide transparency into prioritization** and work status to internal and external stakeholders so they can advocate for their work items

## Attributes

| Property        | Value      |
|-----------------|------------|
| Date Created    | 2022-04-13 |
| Target End Date | 2023-01-31 |
| Slack           | [#wg_cross-functional-prioritization](https://gitlab.slack.com/archives/C03AWM7780G) |
| Google Doc      | [Working Group Agenda](https://docs.google.com/document/d/1wog8bR7jg6SECefx9BGqIa07sFm_sXJPvelVAganYmc/edit#heading=h.pmtw3ocv2aty)  |
| Issue board    | [Issue board](https://gitlab.com/groups/gitlab-com/-/boards/4199535?not[label_name][]=wg-cross-functional-prioritization-adoption&label_name[]=wg-crossfunctional-prioritization) |
| Open merge requests for the working group | [MR list](https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests?label_name%5B%5D=wg-cross-functional-prioritization) |
| OKR | Mature cross functional prioritization model |
| Overview & Status | See [Exit criteria](#exit-criteria) below |

### Exit criteria

Note that these goals are aspirational so we set a high bar (and potentially achieving something that is good enough vs. setting a low bar and not achieving something that is good enough).

- [x] Name the new process (DONE "cross-functional prioritization) [Issue](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/13274)
- [x] All groups have dashboards that they can use to analyze merged MR ratio of features, maintenance, bugs and undefined. [Issue](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/13294), [Issue](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/13448)
- [ ] Type:Undefined Issues are driven down to 0% [Issue](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/13760)
- [ ] Type:Undefined MRs are driven down to 0% [Issue](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/13759)
- [ ] Subtypes label are defined and implemented [Issue](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/13650)
- [ ] Add dashboards to trend and identify issues and merge requests without a subtype [Issue](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/13781)
- [ ] Undefined MRs and Undefined Issues are at 0%, and MR Subtypes are applied for a single cross functional stage (Create) for the September PI review.
- [ ] Incorporate feedback and deliver any iterations from the September PI review with Create, roll out to all stages in October.
- [x] All groups are reviewing the dashboards and discussing it periodically (monthly) in a way where stakeholders can influence decisions. [Issue](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/13304)
- [x] Development engineering managers are providing their maintenance priorities to PM [Issue](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/13304)
- [x] Quality leads are providing their bug priorities to PM [Issue](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/13304)
- [x] The quad stable counterparts (PM, Development EM, Quality Engineering Manager, UX Design Manager) collaborate to determine which issues which will be planned for which milestone [Issue](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/13304)
- [x] Automation exists to streamline the process. [Issue](https://gitlab.com/gitlab-com/quality/engineering-productivity/-/issues/5), [Issue](https://gitlab.com/gitlab-com/quality/engineering-productivity/-/issues/6)
- [ ] Framework for autoscheduling initial iterations of S1/S2 bugs is merged, and we've documented a process for expanding the automation to more groups and severities over time. [issue](https://gitlab.com/gitlab-org/gitlab/-/issues/368641)

The below criteria will be marked as complete when we close the working group, as we will be doing this iteratively until then.

- [ ] Handbook is updated to reflect the new process
- [ ] Execute on [multi-modal communication plan](#multi-modal-communication) (below)
- [ ] Feedback is gathered, considered, and incorporated as appropriate by the DRI for each respective area [Issue](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/13694)

#### Phased Rollout of the remaining exit criteria

We're phasing the rollout of the remaining exit criteria. This approach limits the surface area of changes to a single stage allowing us to rapidly iterate and reduce the churn of changes on all of R&D.

**Phase 1: Create Completes all Exit Criteria by the September Create PI Review**

1. Includes driving Undefined MRs to 0
1. Includes driving Undefined Issues to 0
1. Includes applying the correct sub-types for MRs
1. Applies to issues/MRs in 15.3 and 15.4 - optional to go back further than 15.3

As part of Phase 1 we'll actively review input and feedback from Create. Primarily Darva Satcher (Dir of Eng), Sarah Waldner (Create GPM), Marcel van Remmerden (UX Manager), and Ramya Authappan (QEM) and iterate prior to moving to Phase 2.

**Phase 2: Roll out to every stage/section by October PI reviews**

Essentially all of phase one, including any iterations for all stages/sections.

Note: This does not preclude other stages beyond create to complete the exit criteria prior to October. Many teams are self-activating. For example, Wayne has activated Secure and David has asked all of PLT to begin to adopt this for their PI reviews. We'll focus the working group's energy in phase one on Create.

### Roles and Responsibilities

| Working Group Role    | Person                                               | Title                                                      |
|-----------------------|------------------------------------------------------|------------------------------------------------------------|
| Executive Sponsor     | Ashley Kramer                                        | Acting CTO                                                 |
| Facilitator           | Justin Farris                                        | Senior Director of Product Management |
| Functional Lead       | Wayne Haber                                          | Director of Engineering |
| Functional Lead       | Christopher Lefelhocz                                | VP of Development                                          |
| Functional Lead       | Valerie Karnes                                       | Director of Product Design |
| Functional Lead       | Christie Lenneville                                  | VP of UX |
| Functional Lead       | Mek Stittri                                          | VP of Quality |
| Functional Lead       | David DeSanto                                        | VP of Product Management |
| Functional Lead       | Farnoosh Seifoddini                                  | Head of Product Operations |
| Functional lead       | Lily Mai                                             | Staff Engineering Analyst |
| Functional Lead       | Tanya Pazitny                                        | Director of Quality Engineering |
| Member                | Jennifer Li                                         | Engineering Manager, Engineering Productivity |
| Member                | John Hope                                            | Engineering Manager, Plan:Product Planning & Certify |
| Member                | Matt Wilson                                          | Senior Product Manager, Secure |
| Member                | Neil McCorrison                                      | Frontend Engineering Manager, Secure |
| Member                | Donald Cook                                          | Engineering Manager, Plan:Project Management |
| Member                | Cheryl Li                                            | Senior Engineering Manager, Verify |

## Cross-functional prioritization process

The process is [documented](/handbook/engineering/cross-functional-prioritization/) in the handbook.

## Multi-modal communication

- Tag (at minimum) all potentially interested working group functional leads and when there is impact to product `gl-product-leadership` in all merge requests to solicit feedback.
- Wait two business days to gather and respond to feedback before submitting merge requests to the codeowners for review and merge.
- Announce all merge requests in the working group slack channel and/or in the standup meeting for working group awareness.
- Announce all big changes and status updates in the `#product` `#vp-development` `#ux_leadership` `#quality-managers` `#eng-managers`  `#development` slack channels, and in the weekly engineering work in review document.
- Add the `wg-cross-functional-prioritization` label to all issues and merge requests so they can be tracked
- Add milestone so PM operations can serve up a filter by label/milestone
- Summarize changes for PM and other quad groups (sourced using the label search and/or milestone) every ~two weeks.
