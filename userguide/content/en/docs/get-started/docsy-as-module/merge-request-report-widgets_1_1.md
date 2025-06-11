---
title: "Merge Request Report Widgets Working Group"
description: "The GitLab Merge Request Report Widgets Working Group aim is to assist in implementing the UX Framework created for extending MRs with extensions. Read more!"
---

## Attributes

| Property        | Value           |
|-----------------|-----------------|
| Date Created    | August 1, 2021 |
| Target End Date | January 31, 2022 |
| Actual End Date | August 18, 2022 |
| Slack           | [#wg_merge-request-report-widgets](https://gitlab.slack.com/archives/CV2M96LJG) (only accessible from within the company) |
| Google Doc      | [Merge Request Report Widgets Working Group Agenda](https://docs.google.com/document/d/1bcch8UUkwmgEHFolTWDrQFJtUiiXlv_yQFAGwSSDSUE/edit?usp=sharing) (only accessible from within the company) |
| Implementation discussion | [gitlab#333975](https://gitlab.com/gitlab-org/gitlab/-/issues/333975) |
| Pajamas documentation | [Region: Merge request reports](https://design.gitlab.com/regions/merge-request-reports) |
| Design specs | [Pajamas UI Kit](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library?node-id=38193%3A30482) |
| Associated OKRs | [product#2872](https://gitlab.com/gitlab-com/Product/-/issues/2872) |
| DRIs for each Widget | [DRI list](/handbook/engineering/development/dev/create/code-review/report-widgets-dri-list.html) |

## Charter

The working group ensures consistent alignment and development of all Merge Request (MR) Report Widgets. By synchronizing a collection of independently created widgets into a single report region, a code reviewer should have an easier time reviewing the merge request analysis and determining next steps.

The working group is tasked with creating a joint codebase where consistency is at the core of each widget. It's enforced and achieved by the codebase and established APIs.

## Business goal

Drive forward the [adoption goals through usability](https://gitlab.com/gitlab-com/Product/-/issues/2697) by facilitating improvements to merge requests that will positively impact the shared [FY22-Q3 KR between Product and UX](https://gitlab.com/gitlab-com/Product/-/issues/2872). By following the [UX Framework](https://gitlab.com/groups/gitlab-org/-/epics/5710), we ensure the level of maturity expected by customers dealing with merge requests. From now on, we will have clear and strict guidance to ensure sustainable and consistent growth for the MR Widget ecosystem.

The main target of the working group is not to implement everything themselves but rather keep the effort moving across the frontend engineering and UX groups in a constant pace and pick up key tasks.

## Scope and definitions

**Merge Request Reports Region**

- Area of the merge request with summaries of analysis done and proposed changes. This area resides in the **Overview*- tab, between the description and comments or system notes.</dd>

**Merge Request Widget Extensions**

- Each piece of software that presents summarized information for analysis performed.

**Merge Request Widget Extension Component (<a href="https://docs.gitlab.com/ee/development/fe_guide/merge_request_widget_extensions.html">docs</a>)**

- Reusable component to allow each extension to customize the presentation of the information while still ensuring a consistent user and developer experience for all extensions attached to the merge request.

## Exit criteria

- Shepherd the implementation and redesign of 10 extensions ([full list](https://gitlab.com/groups/gitlab-org/-/epics/6548)) that will be ported to fully use the new shared MR Widget Extension Component.
- The shared component follows the [Report regions design guidelines](https://design.gitlab.com/regions/merge-request-reports) defined in the Pajamas Design System.
- The documentation reflects the capabilities of the shared component.
- Ensure there is clear documentation written for extending the component.

### Results

#### Documentation outcomes

- [DRI List (Eng. and UX)](/handbook/engineering/development/dev/create/code-review/report-widgets-dri-list.html)
- [Component technical documentation](https://docs.gitlab.com/ee/development/fe_guide/merge_request_widget_extensions.html)
- [Contributing further and extending](/handbook/product/cross-stage-features/merge-requests/)

#### Product outcomes

The screenshots below illustrate the Merge Request Report Widgets before and after the work delivered by the Working Group.

{{< cardpane >}}
{{% card header="**Before**" %}}
![MR Widgets Before](./MR_Widgets_Before.png)
{{% /card %}}
{{% card header="**After**" %}}
![MR Widgets After](./MR_Widgets_After.png)
{{% /card %}}
{{< /cardpane >}}

## Roles and responsibilities

The functional leads will be responsible for:

- Representing the needs of individual stakeholders in their department/sub-dept.
- Gathering and consolidating feedback on specific proposals from their department/sub-dept.
- Communicating the output from the working group (if any) and answering questions from their dept/sub-dept.

Ideally, the functional lead is someone who is an IC working in the affected groups, but anyone capable of representing a group, department, or sub-department in the fashion mentioned above is welcome.

| Working Group Role | Person                   | Stakeholder Dept.         | Title                                         |
| ------------------ | ------------------------ | ------------------------- | --------------------------------------------- |
| Executive Sponsor  | Tim Zallmann             | Dev                       | Director of Engineering, Dev                  |
| Facilitator        | André Luís               | Dev, Create:Code Review   | Frontend Engineering Manager                  |
| Functional Lead    | Tim Noah                 | UX                        | Senior Product Designer                       |
| Functional Lead    | Phil Hughes              | Create:Code Review        | Staff Frontend Engineer                       |
| Functional Lead    | José Iván Vargas López   | Verify:Pipeline Execution | Senior Frontend Engineer                      |
| Functional Lead    | Scott Hampton            | Verify:Pipeline Security  | Engineering Manager                           |
| Functional Lead    | Savas Vedova             | Govern:Threat Insights    | Senior Frontend Engineer                      |
| Functional Lead    | Mark Florian             | Foundations               | Senior Frontend Engineer                      |
| Functional Lead    | Jannik Lehmann           | Secure                    | Frontend Engineer                             |
| Functional Lead    | Jeremy Elder             | UX                        | Staff Product Designer                        |
| Member             | Marcel van Remmerden     | UX                        | Product Design Manager, Create                |
| Member             | Kai Armstrong            | Product                   | Sr. Product Manager, Create:Code Review       |
| Member             | Rayana Verissimo         | UX                        | Product Design Manager, CI/CD                 |
| Member             | Payton Burdette          | Verify:Pipeline Execution | Senior Frontend Engineer                      |
| Member             | Pedro Moreira da Silva   | UX                        | Staff Product Designer, Create:Code Review    |
| Member             | Tomislav Nikić           | Quality                   | Software Engineer in Test, Create:Code Review |
| Member             | Gina Doyle               | UX                        | Senior Product Designer, Runner               |
