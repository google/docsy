---
title: GitLab-sponsored Tufts University Human Factors/Engineering Psychology Capstone Course
description: >-
  On this page, you'll find information about how GitLab participates in the Tufts University Capstone Project in the field of Human Factors Engineering.
---

At GitLab, we believe everyone can contribute. In that spirit, members of the UX Department can volunteer to sponsor a project for the [Tufts University Human Factors Engineering/Engineering Psychology (BS)](https://engineering.tufts.edu/me/current-students/undergraduate-program/bachelor-science-human-factors-engineering-bs) senior-level students to take on during the spring semester.

We engage, support, and recognize students during the capstone design experience. As an industry sponsor, GitLab works with the students to solve an existing problem that is relevant to both Tufts and our organization.

If you are an Individual Contributor (IC) looking to level up your leadership skills and support the design community, this is a great opportunity to share your knowledge, learn from each other, and coach the students during the capstone project.

## Capstone course overview

The program duration is 15 weeks. Students participate in groups of 4-5 to solve human factors problems or design challenges set by industry sponsors.

Throughout the semester, students will deliver professional-level work, including weekly reports and presentations (with peer review), article reviews, and sponsor meetings/reviews. User research methods and principles will be applied along with project management and planning. The outcome of this course includes students creating a final project video, poster, and presentation which will be presented to the class, department, and sponsors.

## How to get involved

If you're interested in sponsoring a project, you should complete the following **by the last week of December (before the Spring semester begins)**:

1. Reach out to your manager for awareness and to discuss how participation might impact your capacity.
1. [Brainstorm projects](#project-proposals) that would be a good fit for the students. You'll need a project description for each idea, these are the descriptions that students read and select from once the course begins.
1. Post a message in the `#ux` channel or add an item in the UX Weekly meeting to see if other members of the UX Department are interested in joining.
1. Email the professors, Linda Borghesani (`Linda.Borghesani@tufts.edu`) & Nick Katis (`Nick.Katis@tufts.edu`) about your interest in sponsoring and the project proposals you have in mind.
1. The professors may set up a meeting to help you select which project to move forward with. Read [Sponsor requirements](#sponsor-requirements) and [Best practices as a sponsor](#best-practices-as-a-sponsor) for more information on how to prepare before the course begins.

Reach out to `@gdoyle` on Slack if you have questions or want help brainstorming projects. More information including FAQs can be found [here](https://docs.google.com/document/d/1jA93GJCnmLdleKZjSunEqlHv3wSXTjLLvMNq9alXgf0/edit?usp=sharing).

## Sponsor requirements

- 1-5 UX volunteers are ideal. **At least** 1 Product Designer and 1 UX Researcher.
- [Prepare at least three project descriptions](#project-proposals) for students to take on. The head instructors, Linda & Nick, will help you select one of those for the students to pick from.
- Be dedicated to working with the student team to make sure they have access to the necessary resources (for example, Dovetail) and people (for example, experts or participants to interview). Work with your manager to give students the appropriate access to GitLab tools and projects.
- Be in contact with the students on a weekly basis (~30 min/week check-ins), for reviews and guidance on the problem they are solving.
- Collaborate with Legal to have the students sign an [NDA to follow the guidelines of our SAFE framework](https://gitlab.com/gitlab-org/gitlab-design/-/issues/2178#note_1254767831). It would be best to work with `@igorman` to create the NDA in a confidential issue or Slack. **Once the students select a project in January**, you'll need to share the *project start date* and the *student's emails* in order for the NDA to be officially issued. Send the NDA to the professors Linda and Nick.

## Project proposals

Do you have a project that has been in the backlog for a while now? It could be a good one for the students to take on! In general, the best projects include:

- A loosely defined scope so that the students can bring their creativity. The instructor may suggest the students scope it down so they can complete it in the 4 month semester. For example, improving the GitLab CI/CD onboarding flow. This topic provides enough flexibility to go through the entire design process but also allows the students to scope it down to evaluate specific areas of the onboarding flow and target certain users.
- An opportunity to perform discovery research, design (prototype), and solution validation.
- Async-first approach.
  
Each project proposal should include a summary with:

- **A title:** A concise and catchy name for the project. This is one of the first things the students will see when choosing their project for the semester.
- **Description:** A summary of the problem, including a problem statement and general background about the concepts that would make sense to beginner, non-GitLab users.

### Project ideas

You can use this list of previous projects considered for the Tufts University capstone project to help you get started selecting a project or to help brainstorm ideas.

{{% details summary="Help GitLab increase their community contributions from developers and designers" %}}
[Open-source](https://www.redhat.com/en/topics/open-source/what-is-open-source) principles are at GitLab’s heart and are one of the reasons why GitLab users love the product. We depend on the [community to contribute](https://about.gitlab.com/community/contribute/) to our product. Yes, that’s right! A developer, or even a designer, could contribute their own code or feature design, and it can end up being added to our product. We want as many community contributions as possible. This project is actually based on [an issue](https://gitlab.com/gitlab-org/gitlab/-/issues/22578) that was brought up by a community contributor. You will focus on understanding how we can improve GitLab to motivate the community to make contributions. You’ll be running research with real users to understand developers’ and designers’ motivations to contribute code or designs. You’ll also create mockups (you can use our [Pajamas UI kit in Figma](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit)) based on what you learn and then validate them with real users.
{{% /details %}}

{{% details summary="How are developers using runners and why are they important to them?" %}}
Runners are at the core of [Continuous integration and deployment](https://docs.gitlab.com/ee/ci/) (CI/CD), one of GitLab's primary offerings. Thousands of users use our [GitLab SaaS Runners](https://docs.gitlab.com/ee/ci/runners/), managed by our own GitLab team members. For those companies who run their own instances of GitLab and cannot use gitlab.com, [bringing and managing their own runner](https://docs.gitlab.com/runner/fleet_scaling/) is required in order to use CI/CD features. We've done [extensive research](/handbook/engineering/development/ops/verify/runner/jtbd/#runner-enterprise-administration) around the management and observability needs of platform engineers who are responsible for those runners, but what isn't clear is how developers (and others with lower permissions) make use of runners and what runner information is crucial for them to complete their jobs. You will focus on understanding the problem at hand by running research with real GitLab developers. You'll also create mockups [Pajamas UI kit in Figma](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit) based on what you learn and then validate them with users.
Interview developers to understand how they are interacting with runners today and what type of information they need to know about runners (primary issue: [Problem validation: How do developers (and others with the same, or less, permissions) interact with runners?](https://gitlab.com/gitlab-org/ux-research/-/issues/225)). Create mockup proposals to present this data that will replace the Project>CI/CD>Runners view and validate them with real developers.
{{% /details %}}

{{% details summary="How are users interacting with project-level analytics and are they satisfied?" %}}
Various [personas](/handbook/product/personas/) make use of our project-level analytics page for a number of different jobs. This can help organizations evaluate how they are doing throughout the [product development workflow](/handbook/product-development-flow/). After implementing these analytics pages, it is difficult to know how useful these are to users and where they use them within their workflows. Are they placed in the most ideal locations for users to efficiently complete their jobs? You will use [UX heuristics](/handbook/product/ux/heuristics) and our [catalog of existing research](/handbook/product/ux/dovetail/) to determine what these pages do well and what they don't. You'll also be redesigning the pages to make use of [Pajamas standards](https://design.gitlab.com/) and validating that these new solutions positively impacts the [jobs to be done (JTBD)](/handbook/product/ux/jobs-to-be-done) for these pages with real GitLab users. Make sure to work with your team to scope this down so you have enough time to complete this project! For example, focus solely on improving the [repository analytics page](https://gitlab.com/gitlab-org/gitlab/-/issues/352074).
{{% /details %}}

## Best practices as a sponsor

- Create a designated public project in the [Tufts University Group](https://gitlab.com/tufts-university) to track the Capstone project progress. Encourage students to create GitLab accounts with their school emails and invite them as `owners` to the project. This can help them get familiar with how GitLab works and the problem they'll be solving. This can also be the place where they access resources or materials they need to complete the project. Check out [this project](https://gitlab.com/tufts-university/tufts-university-capstone) for inspiration.
- Use issues in the project to track sponsor-assigned tasks, such as project prep and reviewing student deliverables.
- Write up a summary of the problem and link any resources that would be helpful for the students to look at to gain a better understanding of the concepts they'll be learning. Check out [this markdown file](https://gitlab.com/tufts-university/tufts-university-capstone/-/blob/main/resources.mde) for inspiration.
- Create a Slack channel for daily communication with the students. Follow the [Slack access request guidelines](/handbook/business-technology/end-user-services/onboarding-access-requests/access-requests/#slack-google-groups-1password-vaults-or-groups-access-requests) to include external users in a Slack channel. You can also use [this access request issue](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/20173) as a reference.
- Create an agenda document for weekly check-ins so that the students know what to expect. Check out [this agenda](https://docs.google.com/document/d/1vz6VfQZm6awRlu9p5GCZHxGbU_rbK1vMx1C_eFZJKyc/edit?usp=sharing) for inspiration.
- Record weekly check-ins and add them to the [Tufts Capstone Project playlist](https://www.youtube.com/watch?v=ykRgoFRjNkE&list=PL05JrBw4t0KoZr3rjOL2xv5c66_C526nE) on Unfiltered. This playlist is private as some recordings will contain confidential information, such as reviews of confidential research or competitors.
- In one of the first meetings with the students, ask them what skills they are hoping to get out of the project. There are opportunities during the weekly check-ins to focus on those skills and teach the students how they are used in real-world scenarios. An example of this is explaining how to use design systems in Figma, including how to get the library in Figma, adding and editing components, and even making contributions to the Figma kit itself.
- If the students and professors are interested, they can present their final presentation at one of our UX weekly meetings. Be sure to get UX input in the `#ux` channel on this before doing so!
- Share a write-up of the students' results in the [GitLab UX Research project](https://gitlab.com/gitlab-org/ux-research). Check out [this summary](https://gitlab.com/gitlab-org/ux-research/-/issues/2500) for inspiration.
