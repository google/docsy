---
title: "Guide to Working the Booth at Events"
---

## Guide to Working the Booth at Events

This page displays information on how to properly answer questions as well as how to provide technical demos to booth visitors.

### Common Questions and Answers

1. What is GitLab?

    GitLab is the One DevOps Platform. What that means you can achieve from every step of the development lifecycle from planning to production
    with just one platform. This includes making sure your code is secure!

    **Note:** Go over the different stages as seen in our [about page](https://about.gitlab.com/). Also ask them if they would like a
    demo.

2. Is GitLab part of GitHub?

    No, we are a competitor which provides the complete develoment lifecycle under one platform.

3. Why should someone choose GitLab over GitHub?

    - GitLab is a complete DevOps platform
    - GitLab is cloud-agnostic and allows users to deploy to their preferred cloud providers
    - GitLab is open source and driven by a vibrant ecosystem of community contributors
    - GitLab can be self-hosted and self-managed

4. Can I use GitLab with my current tools?

    Yes, other tools can be integrated with GitLab. You can always use our integrations or build custom solutions.
    GitLab offers everything you need, and you can work on migrating to save time and money.

    **Note:** Get information on the tools the user is currently using.

5. What is new in GitLab?

    To checkout the newest GitLab features, see:

    - Go to the newest release in the [Release Post](https://about.gitlab.com/releases/categories/releases/)
    - We are completely transparent and you can see what's expected in [Future Versions](https://about.gitlab.com/upcoming-releases/)

6. Can I have some swag?

    Sure! Feel free to take some, Is it ok if I scan your badge? So, are you Currently a GitLab user?

    **Note:** Some swag may only be for users who complete a challenge. Check with the event planning staff.

7. How is GitLab different from other tools?

With GitLab you can achieve from every step of the development lifecycle from planning to production
with just one platform. What that means is you save time (due to less context switching and trouble with integrations)
and money (less tools to buy licenses for). We are Open Source, and completely transparent about what is upcoming
in our code base. Everyone can contribute to our platform, and work together to collaborate.

**Note:** This may change over time, visit the [About](https://about.gitlab.com/) page to gain the newest marketing material. If anything has changed, please create an MR to update this document.

### Why Migrate to GitLab? - FlowChart

When a user comes and asks, "why use GitLab over other tools?", go through the following workflow:

**Ask "What Tools are you currently using"?**

a. If GitHub + GitHub Actions

GitLab CI/CD is more mature, its tools are managed in-house, and GitLab can be contacted for support on any of your needs. There are also no additional costs, as you may see in GitHub Actions. GitHub Actions provides a marketplace approach, where you may need to buy additional licenses from a vendor and request support from a vendor. There may also be vulnerabilities/bugs since the code is not maintained/updated by GitHub.

GitLab is better suited for enterprise and OnPrem as well. One main reason is that GitLab is horizontally scaleable and no downtime when upgrading or adding additional nodes. GitHub can only scale vertically and there is downtime on scaling and upgrades.

b. If BitBucket + Jenkins

Jenkins is hard to manage since there are many ways to create jobs (visually, groovy, etc.) and many different plugins which must be maintained. Groovy is another language that requires time to learn and maintain. This increases the onboarding time for new developers on the team. With GitLab, you can configure CI/CD in one specified way in YAML or use AutoDevOps to help automate DevOps workflows.

BitBucket has not had many updates in a while and still requires other tools for CI/CD, Issues Management, etc. in the DIY DevOps stage. Just using GitLab, you get the complete developer lifecycle in one DevOps platform.

c. If GitHub + Security Vendor

Managing different tools can be a tedious process. While there are many different security vendors, GitLab offers a complete set of Security and Compliance Features on one platform. So you don't need to pay separate licenses for all these features and manage the integrations separately.

### Demo Projects to Use

Below are the demo projects which can be used to demo. Make sure you clone the project to your own workspace and connect to a cluster or ask the
TMM team for access if you don't already have it.

#### DevSecOps

For all demos, usually [Simple Notes](https://gitlab.com/tech-marketing/devsecops/initech/simple-notes) is used. I got through the following
workflow:

1. Examine the `.gitlab-ci.yml` file in the pipeline editor (`CI/CD menu > Editor`) and show how easy it is to build a CI/CD pipeline, helped with auto-completion and previews.

2. Show the pipeline created from the `.gitlab-ci.yml` and go over the provided scanners.

3. View an MR containing and review the following:

    - Security Policies
    - Code Quality
    - Vulnerability Scans
    - License Scans

4. View the Vulnerability Report
