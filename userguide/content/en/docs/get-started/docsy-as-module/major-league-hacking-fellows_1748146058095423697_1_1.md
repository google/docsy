---
title: "Major League Hacking Fellows"
description: "Information on the MLHF cohorts working with Digital Experience."
---

## Program Information

The purpose of this page is to present process guidelines for the Major League Hacking Fellow cohorts (https://fellowship.mlh.io/) that are working with the Digital Experience team. This page is for fellows to find information about their cohort, the Digital Experience team, our projects, and where to ask for help.

## Fall 2022 Cohort

The Fall 20022 Cohort working with GitLab will be comprised of 2 engineering fellows. The will be making open source contributions to the Slippers Design System.

- 9/19/22 - start - National Butterscotch Pudding Day
- 1st week - orientation, team building, onboarding
- 12/16/22 - end date (12 weeks)

### Improving the Slipper Design System at GitLab

#### Summary of the Project

At GitLab, the Slippers Design System is a systematic approach to marketing site development You can use the system to manage our marketing component library.

In this project, the MLH fellows will complete several deliverables that will improve the user experience of the Slippers Design System. We will implement new components, iterate on existing components, and use UI components from GitLab's Pajamas design system to bring consistency across the GitLab application and marketing site.

#### Stakeholder Information

Please list all stakeholders (name, email, title/role) who will be involved with the project.

| Name                                                      | Role            | GitLab Handle                                          |
| --------------------------------------------------------- | --------------- | ------------------------------------------------------ |
| Lauren Barker                                             | Maintainer      | [@laurenbarker](https://gitlab.com/laurenbarker)       |
| Megan Filo                                                | Maintainer      | [@meganfilo](https://gitlab.com/meganfilo)             |
| [Gideon Tong](https://www.linkedin.com/in/gideontong/)    | MLHF Pod Leader | [@gideontong](https://gitlab.com/gideontong)           |
| [Chukwuemeka Mba](https://linkedin.com/in/emekamba)        | MLHF Fellow     | [@Chukwuemeka-Mba](https://gitlab.com/Chukwuemeka-Mba) |
| [Uy Seng](https://linkedin.com/in/uy-seng-704843196)       | MLHF Fellow     | [@nova44056](https://gitlab.com/nova44056)             |
| [Seung Yoo](https://linkedin.com/in/seungmin-yoo-01376932) | MLHF Fellow     | [@SssngM](https://gitlab.com/SssngM)                   |

#### Fellow Technical Onboarding

Slippers is the open-source GitLab Marketing Web Design System. It was created in the spirit of "[everyone can contribute](/handbook/company/mission/#mission)". Guidelines enable people to build better web pages and co-create with ease.

To get started with contributing to the Slippers Design System, create a [free SaaS account](https://about.gitlab.com/pricing/) with GitLab.

[Watch this video](https://youtu.be/dphm0TlAqIk) on how it's currently built, published, and used on the marketing site as of August 2022.

Create a fork of the [Slippers repository](https://gitlab.com/gitlab-com/marketing/digital-experience/slippers-ui).

Follow the README instructions for setting your local development environment.

#### Tutorials/Videos

- Create a GitLab account and [set up SSH keys](https://docs.gitlab.com/ee/user/ssh.html).
- [https://gitlab.com/gitlab-com/marketing/digital-experience/slippers-ui](https://gitlab.com/gitlab-com/marketing/digital-experience/slippers-ui)
- If you don't know VueJS 2.0, you can get started on this [guide](https://v2.vuejs.org/v2/guide/)
- [Slippers Design System walkthough video](https://youtu.be/dphm0TlAqIk)

#### Documentation

- [Read GitLab's contribution guidelines](https://docs.gitlab.com/ee/development/contributing/index.html) with a special focus on the [Merge Request Workflow](https://docs.gitlab.com/ee/development/contributing/merge_request_workflow.html)
- Get familiarized with GitLab's Slipper Design System by reading the [intro and exploring our Storybook instance](https://gitlab-com.gitlab.io/marketing/digital-experience/slippers-ui/?path=/story/intro--page).

#### Deliverables + Timeline

Please identify and describe the deliverables for your project(s) and the ideal deadline for each. This may include features or issues you would like the fellows to complete by the end of the fellowship. There are two general approaches we've seen be successful:

| **Issue**                                                                                                                               | **Description**                                                                              | **Assignee**                        | **Deadline**   |
| --------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ----------------------------------- | -------------- |
| ✅  [Vertically align dropdown caret](https://gitlab.com/gitlab-com/marketing/digital-experience/slippers-ui/-/issues/194)   | Vertically align dropdown caret                                                              | Seung Yoo                           | October, 17th  |
| ✅ [Loading components](https://gitlab.com/gitlab-com/marketing/digital-experience/slippers-ui/-/issues/204)                               | Create progress bar and spinner loading components                                                              | Uy Seng (Wei)                       | October, 17th  |
| ✅ [Address v::deep errors on build on Slippers repo](https://gitlab.com/gitlab-com/marketing/digital-experience/slippers-ui/-/issues/208) | Update v::deep references that are now deprecated                                            | Uy Seng (Wei)                       | October, 17th  |
| ✅ [Add Slippers variable names next to colors](https://gitlab.com/gitlab-com/marketing/digital-experience/slippers-ui/-/issues/214)       | Add the matching Slippers variable within `_variables.scss` to the table on our color page   | Uy Seng (Wei)                       | October, 17th  |
| ✅ [Add Slippers variable names next to spacing](https://gitlab.com/gitlab-com/marketing/digital-experience/slippers-ui/-/issues/215)      | Add the matching Slippers variable within `_variables.scss` to the table on our spacing page | Uy Seng (Wei)                       | October, 17th  |
| ✅ [Create tooltip component](https://gitlab.com/gitlab-com/marketing/digital-experience/slippers-ui/-/issues/205)                         | Create a tooltip component in the design system                                              | [Chukwuemeka Mba](@Chukwuemeka-Mba) | November, 17th |
| ✅ [ENG: Accessible and compliant dropdowns](https://gitlab.com/gitlab-com/marketing/digital-experience/slippers-ui/-/issues/132)          | Iterate on dropdown component to be accessible                                               | Uy Seng (Wei)                       | November, 17th |
| 📝 [Implement the Storybook/Figma plugin](https://gitlab.com/gitlab-com/marketing/digital-experience/slippers-ui/-/issues/168) *closed with notes*             | Implement the Storybook/Figma plugin and make it available for use in the project            | [Chukwuemeka Mba](@Chukwuemeka-Mba) | November, 17th |
| 📝 [Update Slippers Intro/Landing page](https://gitlab.com/gitlab-com/marketing/digital-experience/slippers-ui/-/issues/212) *closed with notes*              | Improve our Slippers Design System landing page                                              | [Chukwuemeka Mba](@Chukwuemeka-Mba) | November, 17th |
| ✅ [Create Component Overview page](https://gitlab.com/gitlab-com/marketing/digital-experience/slippers-ui/-/issues/213)                   | Improve our UX by creating a component overview page                                         | Uy Seng (Wei)                       | November, 17th |
| ✅ [Accordion component](https://gitlab.com/gitlab-com/marketing/digital-experience/slippers-ui/-/issues/133)                              | Build the accordion component as designed in Figma into Slippers.                            | Seung Yoo                           | November, 17th |
| ✅ [Update card component - variant 1](https://gitlab.com/gitlab-com/marketing/digital-experience/slippers-ui/-/issues/218) | Update our card component styles and folder structure | Uy Seng (Wei) | December 8th |
| 📝 [Add Footer to each page](https://gitlab.com/gitlab-com/marketing/digital-experience/slippers-ui/-/issues/217) *closed with notes*  | Investigate how to and add a footer to each page in Storybook | Uy Seng (Wei) | December 8th |
| ✅ [Update breadcrumb component](https://gitlab.com/gitlab-com/marketing/digital-experience/slippers-ui/-/issues/219) | Update existing breadcrumb component | Uy Seng (Wei) | December 8th |
| ✅ [Update Top Button name to be Side Button](https://gitlab.com/gitlab-com/marketing/digital-experience/slippers-ui/-/issues/220) | Update name of Top Button component | Seung Yoo | December 8th |
| ✅ [Update RadioGroup component functionality and states](https://gitlab.com/gitlab-com/marketing/digital-experience/slippers-ui/-/issues/221) | Update existing RadioGroup component | Seung Yoo | December 8th |
| ✅ [Add checkbox components to Slippers + create new Controls folder](https://gitlab.com/gitlab-com/marketing/digital-experience/slippers-ui/-/issues/222) | Create new component and update folder structure | Uy Seng (Wei) | December 8th |
| ✅ [Update horizontal rule component color](https://gitlab.com/gitlab-com/marketing/digital-experience/slippers-ui/-/issues/223) | Update HorizontalRule component to use new brand color | Seung Yoo | December 8th |
| ✅ [Change CustomDropdown component placeholder text](https://gitlab.com/gitlab-com/marketing/digital-experience/slippers-ui/-/issues/235) | Change placeholder text in CustomDropdown story file | Chukwuemeka Mba | December 8th |
| ✅ [Add mobile styles for Quote typography variables](https://gitlab.com/gitlab-com/marketing/digital-experience/slippers-ui/-/issues/237) | Add new font styles on mobile in variables file and update SlpTypography component | TBD | December 8th |
| ✅ [CustomDropdown component MVC2](https://gitlab.com/gitlab-com/marketing/digital-experience/slippers-ui/-/issues/240) | Second iteration to our CustomDropdown component | Chukwuemeka Mba | December 8th |
| ✅ [Update tooltip component arrow size](https://gitlab.com/gitlab-com/marketing/digital-experience/slippers-ui/-/issues/249) | Implement design feedback from MVC1 review | Chukwuemeka Mba | December 8th |
| More issues if there's capacity from fellows                                                                                            | TBD                                                                                          | TBD                                 | December 8th |

## MLH Partner Success Contact

- [Matt Dillabough](mailto:matt.dillabough@majorleaguehacking.com)

---
