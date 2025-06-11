---
title: "GitLab CI/CD for GitHub FAQ"
---

### Release date

2018-03-22

### GitLab Press Spokespeople

Mark Pundsack

### Q: What is covered in today's announcement?

A: With [GitLab CI/CD for GitHub](https://about.gitlab.com/solutions/github/), enterprises working with multiple different types of code repositories can now standardize on GitLab CI/CD for seamless consistency across both their GitHub and GitLab code repositories. Open source projects that host their code on GitHub can take advantage of CI/CD on GitLab SaaS, where GitLab offers top tier features for free to open source projects.

### Q: What is the headline of the press release?

A: GitLab Brings Industry-Leading Continuous Integration and Deployment to GitHub Community

### Q: Who is quoted in the press release?

A: Sid Sijbrandij: "Continuous integration and deployment form the backbone of modern DevOps," said Sid Sijbrandij, CEO and co-founder of GitLab. "With this new offering, businesses and open source projects that use GitHub as a code repository will have access to GitLab's industry leading CI/CD capabilities."

### Q: Where can I view a copy of the press release?

A: <https://about.gitlab.com/press/releases/2018-03-22-gitlab-cicd-github-integration/>

### Q: Is there a blog post providing more detail on the announcement?

A: Yes, there are more details in the 10.6 release post [link to blog post]

### Q: Is there a landing page for the feature?

A: Yes, [https://about.gitlab.com/solutions/github/](https://about.gitlab.com/solutions/github/) [will go live 2018-03-22]

[https://about.gitlab.com/solutions/github/](https://about.gitlab.com/solutions/github/) will also redirect to the longer URL and can be used in social, emails, etc.

### Q: Are there other activities associated with this announcement?

A: We are running a promotion that makes this feature available (normally a Premium feature) part of the Free tier on GitLab SaaS for one year. (Self-managed customers have access in the Premium tier.)

### Q: Is GitLab CI/CD for GitHub generally available?

A: Yes

### Q: Does GitLab CI/CD also integrate with Bitbucket? Other solutions?

A: Yes, but the process is more manual. GitLab CI/CD can connect to any git repo via URL, including Bitbucket, and configure status webhooks manually. Docs on how to [manually enable GitLab CI/CD.](https://docs.gitlab.com/ee/ci/ci_cd_for_external_repos/bitbucket_integration.html) (With GitHub the process is all automatic.)

### Q: How does GitLab CI/CD integration to GitHub work?

A: GitLab users can create a CI/CD project in GitLab connected to an external GitHub code repository, which automatically prompts GitLab CI/CD to run whenever code is pushed to GitHub and post CI/CD results back to GitHub when completed.

### Q: What are the key features of GitLab CI/CD for GitHub?

A: The ability to easily set up GitLab CI/CD on GitHub is the main feature enabling continuous integration, security testing, container registry, CD/release automation, configuration management, and monitoring.

### Q: What opportunity is GitLab addressing with GitLab CI/CD for GitHub?

A: Several

#### Enterprise opportunity

With large enterprises we have 2 opportunities:

1. New starting point for GitLab adoption. Many enterprises adopt GitLab gradually over time starting with SCM. The GitHub Integration provides another starting point for enterprises to begin adopting GitLab by using CI/CD first.
2. Standardize on GitLab CI/CD with disparate SCM solutions. [How many GitLab users do they need if they are using GitHub for SCM](https://docs.google.com/document/d/1LrIDEmUNrb5lx8Xu9g2NnmcqSpnZGixHLo6raUVBJUo/edit#heading=h.kvatwhat61se)?

#### Open Source Projects opportunity

GitLab is committed to supporting open source. ON GitLab SaaS, open source projects get unlimited concurrent jobs and 50K compute minutes per month for free. The GitHub Integration allows projects who host their code on GitHub to use GitLab for CI/CD for free.

#### Broader GitHub community opportunity

By making GitLab CI/CD for GitHub available free of charge as part of our GitLab SaaS Free tier we are allowing anyone who uses GitHub.com to host their code, to use GitLab SaaS for their CI/CD. This is a way to expand the reach of GitLab and expose GitLab to users who may otherwise have not tried GitLab out.

#### Gemnasium Customer opportunity

Gemnasium customers who are using GitHub now have a migration path to use the Gemnasium features we've built (and will build) into GitLab CI/CD Security Testing. Note: Gemnasium customers will need Ultimate to take advantage of Security Testing.

### Q: Is GitLab CI/CD for GitHub available as a standalone product?

A: No, GitLab CI/CD is a Premium functionality and is not a standalone product.

### Q: How is GitLab CI/CD for GitHub priced?

A: GitLab CI/CD for GitHub is a feature of GitLab without stand-alone pricing.

It is part of our Premium (Self-managed & SaaS) Tiers - $19 /user /month (For all GitLab Premium features including CI/CD for GitHub.)

Promotionally, we will make the GitLab CI/CD feature available as part of the Free Tier on GitLab SaaS through 2019-09-22.

### Q: How many GitLab users are needed?

A customer only needs 1 service account on GitLab to run pipelines for GitHub code, but will benefit from having more user accounts.

#### What are the pro/cons for the business if they create one service account for their pipelines?

Pro:

- Cheap

Cons:

- Developer will have a pass / fail status report in GitHub, but won't be able to drill down to see why a build failed without access to GitLab

- Developers won't have access to artifacts, pipelines output traces, registry images, or security reports.

#### Do they need users for each developer using GitHub/Bitbucket - why/why not?

No - It's not necessary, but enabling developers grants benefits:

- the ability to access artifacts, registry images, security reports, etc.
- the ability to see pipeline graphs, and detailed build reports

#### Do they need users for QA/ops engineers building the pipelines?

Yes - this should be sold against Jenkins / Travis, think about how many users you'd need to access those tools, and that is the user count that should have access to GitLab.

### Q: What are the details of the launch promotion?

A: GitLab CI/CD for external repos, including GitLab CI/CD for GitHub will be available as part of the Free tier of GitLab SaaS for one-year plus extended six-month (through 2019-09-22). After 2019-09-22 we plan to move the feature to be part of GitLab SaaS Premium tier. Note: this is for GitLab SaaS only - self-managed customers will only have access in Premium & Ultimate.

### Q: Are there any other features offered as part of a different tier promotionally?

A: At this time, no. This is the first time we've offered a feature like this promotionally in a different tier than it will eventually end up in,.

### Q: Is GitLab CI/CD for GitHub available in both hosted and self-managed versions?

A: Yes, GitLab CI/CD for GitHub is available on all hosted versions and is available self-managed on GitLab Premium and Ultimate.

### Q: What product plans include GitLab CI/CD for GitHub?

A: Self-managed: Premium and Ultimate

GitLab SaaS: Free, Premium and Ultimate (through 2019-09-22)

GitLab SaaS: Premium, Ultimate (after 2019-09-22)

### Q: What stages of DevOps Lifecycle work with GitHub?

| Stage     | Product Category         | Works with GitHub? | Notes                                                                                                                                 |
|-----------|--------------------------|--------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| Plan      | Portfolio management     | No                 |                                                                                                                                       |
| Plan      | Issue Tracking           | No                 |                                                                                                                                       |
| Create    | Version Control          | No                 | Repos are Mirrored, which is needed for CI/CD, but there's no mechanism for Merge Conflicts so you can't actively use the GitLab Repo |
| Create    | Code Review              | No                 |                                                                                                                                       |
| Verify    | Continuous integration   | Yes                |                                                                                                                                       |
| Verify    | Security Testing         | Yes                |                                                                                                                                       |
| Package   | Container Registry       | Yes                | [On by default once instance container registry enabled](https://docs.gitlab.com/ee/administration/packages/container_registry.html)                                                          |
| Release   | CD/Release automation    | Yes                | E.g. You CAN deploy to GCP using the GKE Integration                                                                                  |
| Configure | Configuration management | Yes                |                                                                                                                                       |
| Monitor   | Monitoring               | Yes                |                                                                                                                                       |

### Q: Do we have current customers using GitLab CI/CD for GitHub?

A: No, GitLab CI/CD for GitHub is being [released and launched](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/) on the same day. As such, it will not be available for customers to use until after GitLab 10.6  is released on 2018-03-22.

### Q: Will GitLab CI/CD for GitHub be available on the GitHub marketplace?

A: We have not made a determination if it will or will not be in the marketplace. It is a

possibility, but requires additional complexity such as augmenting how we price. It is not available today as part of the marketplace.

### Q: What press did we get?

- JAXenter:[GitLab 10.6: CI/CD for GitHub, increased Kubernetes support](https://web.archive.org/web/20220523022318/https://jaxenter.com/gitlab-10-6-142702.html), Jane Elizabeth, 3.23.18
  - "As part of their prior commitment to supporting open source, GitLab already offers all public projects their highest tier features for free. This means that open source projects on GitHub will be able to handle hundreds of concurrent jobs with 50,000 free compute minutes."

- ZDNet:[GitLab makes CI/CD tools available for GitHub repositories](https://www.zdnet.com/article/gitlab-makes-cicd-tools-available-for-github-repositories/), Stephanie Condon, 3.22.18
  - "GitLab is trying to reach more developers this way because it believes CI/CD is 'a core component of making your DevOps transformation,' Mark Pundsack, head of product at GitLab, told ZDNet.

- SiliconANGLE:[GitLab brings code integration and delivery to rival hosting service GitHub](https://siliconangle.com/2018/03/22/gitlab-brings-cicd-capabilities-github/), Maria Deutscher, 3.22.18
  - "By enabling software teams that use GitHub to handle the process with its platform, GitLab should make development operations considerably smoother for enterprises. In large organizations, different divisions often use different tools for their projects. Having a unified CI/CD tool that works across both GitLab and GitHub code repositories can take some of the complexity out of the equation."

- DZone:[GitLab Opens CI/CD to GitHub Users](https://web.archive.org/web/20230327211754/https://dzone.com/articles/gitlab-opens-cicd-to-github-users), John Vester, 3.22.18
  - "When GitLab entered the market, their focus was to build a single application that meets the needs of every aspect of the DevOps lifecycle. As repositories begin to emerge on the GitLab service, those customers began to see the real value of such an application. Now, customers on GitHub/GitHub Enterprise can utilize those same CI/CD features, allowing the ability to standardize a single solution across the entire enterprise."

- TechCrunch:[GitLab adds support for GitHub](https://techcrunch.com/2018/03/22/gitlab-adds-support-for-github/), Frederic Lardinois, 3.22.18
  - "The new GitHub integration allows developers to set up their projects in GitLab and connect them to a GitHub repository. So whenever developers push code to their GitHub repository, GitLab will kick off that project's CI/CD pipeline with automated builds, tests and deployments."
