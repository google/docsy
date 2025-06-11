---
title: UX Themes
description: "Introduction and usage guidelines for UX Themes"
---

## Overview

***[Neilsen Norman Group UX Roadmap guide](https://www.nngroup.com/articles/ux-roadmaps/) and the [Neilsen Norman Group UX Theme guide](https://www.nngroup.com/videos/ux-roadmap-themes/?lm=ux-roadmaps&pt=article) are prerequisites for understanding the overall purpose of this process. The documentation that follows discusses the differences in process and structure between the Nielsen Norman Group's documentation for UX Themes and GitLab.***

UX Themes are comprehensive bundles of work organized around the user problem, their need, and their desired outcome. UX Themes comprise a team's UX Roadmap, which should act as a single source of truth for a team's North Star UX vision serving as the blueprint for their strategy. In essence, themes are a wrapper that looks at all the individual issues a Group may have and organizes them into relational bundles, allowing solutions to be holistic and non-fragmented. A UX Roadmap is simply the prioritization of these UX Themes based on user and business needs while also considering your team's confidence in the supporting data.

### Benefits of UX Themes

#### Expanded stage alignment

UX Themes align across groups and stages, achieving a better understanding of the work done through their problems to solve and expected outcomes. They can help identify areas of collaboration when teams are working on overlapping user needs or when needs cross workflows—helping to unite stable counterparts, engineering, design, product, and research with a comprehensive approach to executing the category vision.

#### Increased focus and decreased churn

UX Themes focus on a more significant, holistic problem area rather than discrete features in a milestone. This has the effect of reducing the need for fire drills and mitigating context switching. This focus will allow designers to dive deep into related needs-based problems that lead to a comprehensive experience, including all associated touchpoints in the product. Additionally, helping to allocate more time toward addressing validated user needs with solutions rather than assumptions will reduce design and research churn in the product development process. This approach also benefits the engineering teams as they can focus their efforts and build to the scope envisioned in the theme while reducing context switching and avoiding the need to refactor the code in the event of a redesign.

#### Enhanced strategic collaboration

UX Themes influence strategy through collaboration with Product Managers to define the goals, identify and prioritize unmet user needs, and transparently maintain and update the product roadmap over time. Themes also allow us to understand our value as a team by measuring our success against the business outcomes our counterparts define for each theme.

### Roadmaps and UX Themes

UX Themes organized by priority become a UX Roadmap. This roadmap complements the product roadmap and does not replace or supersede them. Therefore, it's helpful to think of a UX Roadmap as a view of the Product roadmap through the filter of Product Design and UX Research.

<!-- Roadmap graphic to illustrate how a UXrm fits into the overall Product roadmap -->
![Roadmap graphic to illustrate how a UX Roadmaps fit into the overall Product roadmap](/images/product/ux/product-design/ux-roadmaps/Roadmap_Visual2.png)

## Components of a UX Theme

### UX Theme scope

UX Themes exist at the workflow level, addressing one or more of the user's small jobs they need to complete to satisfy their main [JTBD](/handbook/product/ux/jobs-to-be-done/). Typically, the theme's focus is a single small job, a step that rolls up to the main JTBD, which includes all the micro-jobs (tasks) a user will need to complete to satisfy the small job itself.

Addressing the small job this way adds *depth* to the experience. Alternatively, you can widen the scope of the UX Theme by considering multiple steps, or small jobs, of the main job, thus adding value to the *breadth and depth* of the experience. See the image below for a breakdown of these concepts.

Using JTBD to define and drive your work through their incorporation of UX Themes is, by design, what JTBD are intended to achieve. UX Themes are practical applications for JTBD, ensuring their usage across the organization.

*JTBD and UX Themes:*

<!-- Job map and UX Theme scope examples -->
![UX Theme scope example using the job map](/images/product/ux/product-design/ux-roadmaps/UX_Theme_JTBD_Scope.png)

The work done on a theme should keep the scope of the deliverables in mind. If the design cannot be implemented within a reasonable timeframe, then the scope of the theme is likely too large and should be reduced. A good guideline is three milestones to implement a UX Theme; One MVC: (feature: addition) followed by two (feature:enhancements) iterations to successfully implement the designs consecutively. There may be instances where a theme will take fewer iterations or even more if it is a more significant back-end change. It is also recommended to complete the entire UX Theme in consecutive milestones. Skipping theme completion or putting future iterations in a backlog should be avoided and should only be done when there is no other option to do so. In all cases, it is recommended to collaborate with your team's stable counterparts to reach a viable solution that continues to deliver value.

### UX Theme structure

| Theme component | Description | Example |
| --- | --- | --- |
| [Theme statement](#theme-statements) | Design objective | Reduce the effort for security teams when prioritizing business-critical risks in their assets. |
| [Main JTBD](#main-jtbd) | The JTBD that contains the task(s) a user will be undertaking. | When I am on triage rotation, I want to address all the business-critical risks in my assets, so I can minimize the likelihood of my organization being compromised by a security breach.  |
| [Business objective](#business-objectives)  | Objectives (from a business point of view) that will be achieved upon completion. | Increase engagement by making the experience efficient while reducing the chances of users overlooking high-priority items. |
| [Confidence](#confidence) | Informal assessments of likely impact and demonstrated user need for the theme. | High |
| [Requirements](#requirements)  | Considerations to keep in mind when working on the theme. | Related feature issues, Research insights |
| [Timeframe](#timeframes) | The expected time period of a theme | Now: {Next:1-3 milestones} |

#### Theme statements

A theme statement combines the beneficiary, their job, and their expected outcome when the work is delivered and serves as the design goal for the team who owns the theme. Well-defined statements are concise without sacrificing the substance of the theme so that anyone can understand it at a glance.

A theme statement's structure should align to: (Outcome + Beneficiary + Small Job). Following this pattern will ensure you are creating outcome-based themes that are user-centric and jobs oriented.

| Statement components | Definition | Example |
| --- | --- | --- |
| Beneficiary | End-users who are the direct recipient of the value the theme is focused on.  | Security teams |
| Small Job | A step of the larger job (Step(s) + object + qualifier) | Prioritize business-critical risks |
| Outcome | The user need the theme is addressing | Reduced effort across all assets |

For our example, the theme statement would be: *Reduce the effort for security teams when prioritizing business-critical risks in their assets*.

*Note: The theme statement is the defacto title used to reference the theme and serves as the theme issue title.*

##### Beneficiary

Beneficiaries are the end-users who are the direct recipient of the value the theme is delivering. Beneficiaries should be referenced by their role, for example, Software Developers. However, there may be some instances where the beneficiaries are not a single end-user but rather a group of similar end-users. In these cases, they can be called teams, for example, Software Development Teams or Security Teams.

##### Small Job

The small job(s) that is the theme's focus and a step of the larger JTBD. This is articulated by following the pattern (Verb + Object + Qualifier). For our example, The small job would be: Verb {Prioritize}, + Object {Risks}, + Qualifier {Business-critical}.

##### Outcome

Addressing the user's needs is the primary objective of the theme. Needs are informed by research and ladder up to the main JTBD. In our example, the primary JTBD need is to minimize the likelihood of my organization being compromised by a security breach. One way to help users achieve this is by reducing users' efforts to prioritize vulnerabilities.

#### Main JTBD

The main JTBD of the performer who will benefit from this UX Theme, typically your stage or stage: group's main JTBD. Including this information at the UX Theme level is necessary to ensure our focus remains on the main JTBD while working on the theme. In our example, our main JTBD is; *When I am on triage rotation, I want to address all the business-critical risks in my assets, so I can minimize the likelihood of my organization being compromised by a security breach.*

*Note: If there is no JTBD or the JTBD is assumptive, that should indicate that you are working on a low-confidence theme and additional research is required before engaging in design activities.*

#### Business objectives

The business objective is why we are working on a theme. Without this information, teams risk delivering features that do not enhance the product or add value to users. Additionally, the objective should help to influence the design team's solutions, as it serves as a hypothesis for the delivered solution, "We know we solved the need if: {business outcome} is achieved." The team's Product Manager is responsible for creating business objectives.

#### Requirements

Requirements are more granular aspects of a theme that help define the scope of the problem and solution area. Typically, requirements are derived from feature issues and research insights used to create the theme. Generally speaking, it is more common to see these items in themes in the (Now {Next:1-3 milestones}, or Next {Next:4-7}) buckets, as the problem areas have been researched, and the problems to solve are more evident than themes scheduled in the future. Requirements will take the form of: "The user needs to be able to {solution agnostic description of the need}."

*Note: We are not designing a solution for a specific feature issue; instead, we are designing the entire theme. The individual feature issues within it will be addressed through a planning breakdown session when the UX Theme's vision design has been completed and is now ready to be built via MVC + Iterations.*

#### Confidence

Confidence is the assessment of the product and design team's understanding of the problem and solution space the theme occupies, demonstrated through research or knowledge derived from users through other means. Use the table below to understand your confidence in the theme.

|  | High confidence | Medium confidence | Medium confidence | Low confidence |
| --- | --- | --- | --- | --- |
| The team understands both the main job and the small job(s) related to the problem area? | Yes | Yes | No | No |
| Has the problem been validated through research or other means? | Yes | No | Yes | No |

#### Timeframes

Themes should span multiple milestones, allowing designers to have the flexibility and freedom to explore and validate their solutions. However, this is a guideline, not a rule. To meet our needs and work within the planning vocabulary of GitLab, we will define the timeframes as follows:

| Timeframe | Workflow | Design Priority | Research Priority | Theme Confidence | Theme Needs | Research hand-off | ~ Design hand-off |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Now: {Next 1-3 Milestones} | Workflow:design (Actively worked on) | Priority:1 | - | High  | Design & solution validation | Complete | Within 3 milestones |
| Next: {Next 4-7 Milestones} | Workflow:problem validation  | Priority:2 | Priority:1 | High or Medium | Problem validation research may be needed, Requirements needed| Within 3 milestones | Within 7 milestones |
| Future: {Next 7-13 Milestones} | Workflow:problem validation backlog | Priority:3 | Priority:2 | Medium or Low | Research is required to increase confidence and define the scope | Within 7 milestones | Within 13 milestones |
| Future+: {Awaiting further demand} | Workflow:problem validation backlog | Priority:4 | Priority:4 | Low | Research is required to increase confidence and define the scope | Within the next 13 milestones | TBD |

These timeframes denote when work will take place and when work will be delivered. Think of this as design and research will be delivered within < timeframe > (e.g., design/research delivered in Now: {Next 1-3 Milestones}). In many cases, it will make sense for a lower confidence theme located in the Next or Future buckets to be worked on in parallel by the group's UX Researcher and/or the Product Manager to increase the confidence, allowing the theme to move up to the Now bucket for future design work. Just like design should be 2-3 milestones ahead of build, research should be 2-3 milestones ahead of design.

*Consider this: If you only work on four themes a year and each gets broken down into three MVCs, that equates to delivering UX value to the user every milestone across twelve milestones.*

#### Ownership

The Design DRI and respective Product Manager are the owners of themes in their group. However, in GitLab, we want to ensure themes are assigned to team members who are actively working on them. For example, a Product Designer and a UX Researcher, or a Product Manager and a UX Researcher may be assigned to a theme if the work demands it.

## Working on themes (Designing Thematically)

### Product Designers working on themes

Most of the work Product Designers do will be on themes in the (Now): `{Next 1-3 milestone} bucket`. These themes are comprised of high-confidence outcomes and validated needs: the problem is already well defined and researched, the JTBD, user persona, user needs/requirements, and business objectives are well understood, and themes, therefore, are ready for a design solution to be created.

The UX Theme issue is where all planning, discussion, and collaboration occurs. It is what the research and solutions are based on. The related issues contained within it are parts of the whole and may evolve or even get closed as more knowledge and understanding of the theme becomes clear. As work progresses on the theme, new issues may also need to be created per our existing workflow processes. As these are based on the theme, they will be added or linked to the theme for tracking purposes. The most important aspect of working on themes is that research and design solutions are based on the theme first and any related MVC issues second. The intention is to work on the whole of the theme in a complete, holistic way as opposed to its individual-related issues. This process is about workflows vs. features and delivering quality and value to our users vs. an incomplete start of something that's viable but lacks value or usability.

As the design is completed (progressing from low-fidelity to high-fidelity), assets should be uploaded to the UX Theme issue, either in the description or in the design management tool for tracking/SSOT purposes. When the holistic design is complete, notify your counterparts that it is ready for planning breakdown following the [Product Development Workflow](/handbook/product-development/product-development-flow/#build-goals--outcomes) guidelines.

### Suggested workflow

1. **Assess your theme.** Do you have everything you need to generate design solution(s)?
    - Refer to the [Product design process: Define the opportunity](https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests/109522/diffs) to learn about everything you need to know to determine if you are ready to move into design.
    - Once you've gathered all this information, ensure it is included in the theme's description as the SSOT. Use the [UX Theme issue template](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/UX%20Theme.md) for guidance.
1. **[Ideate and iterate](/handbook/product/ux/product-designer/#ideate-and-iterate)** Begin generating low-fidelity deliverables that incorporate all of the requirements of the theme, holistically addressing the JTBD, needs, and use cases.
    - Create a flow diagram that accounts for all tasks related to the small job(s) you are addressing. Share this with your counterparts to ensure everyone is on the right page regarding the scope and requirements.
    - Create low-fidelity wireframes that incorporate all of the requirements of the theme, holistically addressing the small job(s) while keeping the main JTBD in mind.
    - Collaborate with your counterparts early and often. Adjust your designs after [soliciting feedback](/handbook/product/ux/product-designer/#design-reviews) from your counterparts and the UX team as needed.
1. **Validate the workflow.** Increase your confidence in your design direction with the [solution validation](/handbook/product/ux/ux-research/solution-validation-and-methods/) method that best fits your project. It's always recommended that you validate your low-fidelity wireframe design. After all, this is the design you'll be working from in subsequent milestones, so it is best to ensure that it is usable and meets your user's goals and needs while in this low-fidelity state. Test it while it is cheap! Another added benefit to testing at this stage is that you are validating the entire workflow you are addressing rather than a smaller discrete action or capability. Following this approach increases the likelihood of receiving appropriate usability feedback on the tasks that make up the small job.
    - Select a solution validation method and test your workflow using the small job(s) as the task users need to complete.
    - Adjust your designs as necessary based on this user feedback solidifying your low-fidelity wireframe design direction.
1. **Refine your concept.** This step is like coloring in the lines of a coloring book, where the coloring book is the low-fidelity wireframe, and your mock-ups are the crayons that fill in all the details.
    - Transition your wireframes to high-fidelity mock-ups. Determine which Pajamas components make the most sense for your solution.
    - Define all of the micro-interactions, for example, tooltips, popovers, toasts, alerts, modals, and drawers.
    - Define all of the edge cases, for example, error states, empty states, free vs. paid states, and states for users without permission.
    - Write your micro-copy, and collaborate with your tech writing counterpart to ensure the copy meets our standards.
    - Consider accessibility guidelines.
    - Again, it is recommended that you validate your design with solution validation to ensure you haven't lost anything in the translation from your low-fidelity wireframe design to your high-fidelity mock-ups.
    - Adjust your designs as necessary based on this user feedback solidifying your design direction.
1. **Hand-off.** Work with your counterparts to break down your design into appropriate MVC(s).
    - Consider the value each MVC provides to the user and if it can stand alone without its subsequent MVCs in the product. If it cannot stand alone, discuss the possibility of a feature flag or a delayed release with your team.
    - Follow the rest of the [Product Development Flow](/handbook/product-development/product-development-flow/) once you and your team have completed the planning breakdown process.

### UX Research working on themes

Most of UX Researchers' work will be on the themes in the Next: `{Next 4-7 milestones}` bucket or (Future) `Next: {7-13 milestones}` bucket. Working ahead affords UX Research the time and space to design a study, recruit participants, execute the research, and summarize the results without compromising the methodology due to time constraints. Research and insight issues should be referenced in the UX Theme issue to maintain the SSOT.

Work with your UX Researcher during their research prioritization efforts by referencing UX Themes in the Next: `{Next 4-7 milestones}` bucket or Future: `{Next 7-13 milestones}` bucket. Your goal is to ensure that you are able to move themes from the Next and Future buckets to the Now bucket. This should only be done once you have gathered all of the information necessary to be ready for design, meaning you are now able to say that you have high confidence in this theme.

### Revising and updating themes

Revising a theme can happen at any time. It is good practice to communicate when details change in theme issues so the team can remain informed without continuously monitoring the roadmap. For transparency, a comment should be added to the theme issue when changes are made that explains why the change was necessary.

## Creating UX Themes

Creating UX Themes is a collaborative process between the Product Manager, Product Design Manager, Staff Product Designer (if applicable), and Product Designer that is done through the [UX Theme workshop](/handbook/product/ux/product-design/ux-roadmaps/#ux-theme-workshop). It is important to highlight that this is a seasonal process, not something that needs to be done every day. After your initial theme creation workshop has been completed, all that remains is regular usage and maintenance of your existing themes. Below are some examples of when new UX Themes are created:

- The team does not have defined UX Themes for their stage:group.
- The Research team uncovers an unmet need in the JTBD that aligns with the goal and vision of the stage:group.
- The Product team identifies a new assumptive user need that aligns with the goal and vision of the stage:group.
- The Product team pivots to meet the needs of a different user.
- Community contributions have been submitted to your group.

### UX Theme issues

Each UX Theme will have a dedicated issue and serve as the SSOT for all research and design activities related to that theme. UX theme issues should follow the established labeling conventions for the stage:group with the addition of the `UX Theme label`. UX theme issues must have a timeframe associated with them upon their creation and based on their confidence level. Doing so ensures all the teams (Product, Design, Research, Engineering) are aware of the state of the theme and the needs it may require to progress it. Use this [UX Theme template](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/UX%20Theme.md) to ensure you're includding all of the needed pieces in order to be ready for designing a high confidence theme.

### UX Theme organization

Existing product epics, category maturity, or vision epics can be used as containers for UX Theme issues, depending on how your product team organizes their work.

It is recommended to use GitLab boards to visualize your UX Themes in a roadmap format as they are in a place we are comfortable with, not to mention this adds another use case for dogfooding boards and provides the team feedback for potential improvements. The [UX Roadmap board](https://gitlab.com/groups/gitlab-org/-/boards/4036976?label_name%5B%5D=UX%20Theme) will be the primary way we consume and share the roadmap, while the individual themes will be the primary way we plan and work on the roadmap.

### UX Theme workshop

Creating UX Themes cannot and should not be done in isolation. For themes to be successful, they require buy-in from team members who will be contributing to or consuming the content. It's best practice and highly recommended to conduct a workshop with the team, including the lead designer, PM, and Design Manager. Engineering counterparts may participate but it is not required. To help facilitate a workshop, a workshop guide has been created that leverages our asynchronous value requiring as little synchronous meeting time as possible; however, to ensure this is a collaborative effort, some synchronous components are necessary.

- [UX Theme workshop guide issue](https://gitlab.com/gitlab-org/gitlab/-/issues/356188)
- [UX Theme creation Figjam template](https://www.figma.com/file/uu5scvnjO2iaGeaiGLYc5T/UX-Theme-Workshop?type=whiteboard&node-id=0-1&t=O6sGe41SGY9Rac1u-0)

#### Example theme

View the [example theme issue](https://gitlab.com/gitlab-org/gitlab/-/issues/355736) for a better understanding of how UX themes translate into GitLab.

### Working on items other than UX Themes

UX Themes will not represent all the work that may be needed in a given milestone. Rather, it represents strategically aligned activities that deliver on the strategy of the stage:group. There will be instances where items unrelated to a UX Theme will still need to be worked on. Bugs, Deferred UX, or other usability issues and discrete urgent customer requests fall into this bucket. Themes can be thought of as the strategic design initiatives that are needed to be completed in order to achieve the overarching goal of your main JTBD for your stage:group. While the other issues are for maintaining the experience pertaining to our standards.
