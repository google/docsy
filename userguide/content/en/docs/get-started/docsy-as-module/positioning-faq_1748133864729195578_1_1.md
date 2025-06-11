---
title: "GitLab Positioning FAQs"
---

## What is GitLab?

1. GitLab is an open-source, complete DevOps platform, delivered as a single application, fundamentally changing the way Development, Security, and Ops teams collaborate. GitLab is a tool that enables project planning and issue management, collaborative source code management, security scanning, continuous integration and continuous delivery, and production monitoring.
1. We have a few different versions of GitLab.
    - GitLab.com.  Hosted, open source for private repos. Just signup and get started.
    - GitLab CE.  On-premises, self-managed GitLab with LDAP integration, issue tracker, webhooks, and integrated CI.
    - GitLab EE.  GitLab Enterprise Edition builds on top of the Community Edition and includes extra features mainly aimed at organizations with more than 100 users. It has LDAP group sync, audit logs and multiple roles. It includes deeper authentication and authorization integration, has fine-grained workflow management, has extra server management options and it integrates with your tool stack.
    - Know the comparison charts
        - Overview of [feature availability by version](https://about.gitlab.com/features/)
        - GitLab.com [comparison by tier](https://about.gitlab.com/pricing/feature-comparison/)
        - GitLab self-managed [comparison by tier](https://about.gitlab.com/pricing/feature-comparison/)

## What is the benefit of using GitLab?

GitLab helps organizations deliver better products faster, increase operational efficiencies, and reduce security and compliance risks.  A single application that provides capabilities across DevSecOps lifecycle, GitLab reduces friction through collaboration at the point of code change. GitLab streamlines application delivery with an [out of the box delivery toolchain](https://about.gitlab.com/resources/whitepaper-forrester-manage-your-toolchain/) which reduces complexity, lowers maintenance cost, and streamlines delivery. Without GitLab teams need multiple tools which they then must integrate, manage, and maintain. With GitLab, you gain visibility on how long each part of the software development lifecycle is taking and how you can improve it.

## Is it similar to GitHub?

GitLab started as an open source alternative to GitHub. Instead of focusing on hosting open source projects we focused on the needs of the enterprise and now we address the challenges of the entire DevOps lifecycle, including continuous integration, continuous delivery, monitoring, and application security testing.

## I use GitHub.  What can GitLab offer me?

1. GitHub has done a lot for the Git space. Great company.
1. For the basic source control management, we have some key differences:
    - Scales better with multiple application servers
    - Run GitLab in a cluster
    - Multiple authentication levels
    - Group level milestones
    - 4 times more cost effective
    - Active community of 2,200+ contributors to updates that are released [every month](/handbook/engineering/releases/)
1. So if you just want SCM, why not go with the open source edition of GitLab?
1. For the **entire** software development lifecycle, see [GitHub vs. GitLab](https://web.archive.org/web/20240331181506/https://about.gitlab.com/competition/github/)

## Our company uses GitHub.com for all open source projects

Why should we use GitLab Enterprise Edition on-premises and not GitHub Enterprise?

1. GitHub is closed source software primarily used to publish open source software. GitLab is an open source DevOps platform primarily used to reduce the cycle time of closed source software (i.e. your company's software).
1. With GitLab Enterprise Edition you can use [Repository Mirroring](https://docs.gitlab.com/ee/user/project/repository/mirror/) to mirror your open source projects from GitHub.com to your on premises GitLab server. Alternatively, if you want to have a public mirror of your GitLab project, you can now do so effortlessly using mirroring. GitHub Enterprise does not have mirroring.
1. Open source projects have different needs than projects developed on-premises by organizations. GitLab was built specifically for use by organizations on-premises and so has more features specific to the enterprise such as 5 levels of [permissions](https://docs.gitlab.com/ee/user/permissions.html), and the ability to install on a variety of operating systems.
1. Unlike other Git management solutions which can have different project views etc, GitHub and GitLab are very similar in features and functionality as well as the workflow they support. Their URL's and API's are also similar, so developers will quickly become familiar with GitLab.

## GitLab is winning enterprise

1. TLDR- Yes.
1. GitLab is used by over 100,000 organizations worldwide, on their own servers.
1. GitLab.com serves millions of projects and hundreds of thousands of users each month
1. [Goldman Sachs](https://about.gitlab.com/customers/goldman-sachs/) | **Problem**: Needed to increase developer efficiency and software quality | **Result**: Improved 2 builds/day to over a 1000/day; simplified workflow and simplified administration
1. [Jaguar Land Rover](https://about.gitlab.com/blog/2018/07/23/chris-hill-devops-enterprise-summit-talk/) | **Problem**: Slow delivery and release cycles taking 4 to 6 weeks leading to infrequent feedback for developers| **Result**: Increased delivery speed from 3-6 weeks to 30 minutes giving teams faster feedback.
1. [Hemmersbach](https://about.gitlab.com/customers/hemmersbach/) | **Problem**: Multiple tools and communication inefficiencies slowed application delivery | **Result**: Increased build speed by 59x; 14.4% improvement in cycle time
1. [2019 Gartner Peer Insights **Customers' Choice - Enterprise Agile Planning Tools**](https://about.gitlab.com/press/releases/2019-07-26-gitLab-recognized-in-gartner-peer-insights-customers-choice-for-EAPT.html) average 4.6 rating: ["DevOps without the overhead"](https://www.gartner.com/reviews/review/view/916200) , ["Simple, Intuitive and efficient DevOps Life Cycle tool"](https://www.gartner.com/reviews/review/view/749177), and ["Secure and Scalable Solution"](https://www.gartner.com/reviews/review/view/876321)
1. Forrester: [Q3 2017 Continuous Integration Wave-Leader](https://about.gitlab.com/blog/2017/09/27/gitlab-leader-continuous-integration-forrester-wave/)
1. Gartner: [2021 Enterprise Agile Planning Tools - Visionary](https://about.gitlab.com/press/releases/2021-04-27-gitlab-positioned-leader-gartner-magic-quadrant-enterprise-agile-planning-tools/)
1. Gartner: [Q2 2020 Continuous Delivery and Release Automation-Contender](https://about.gitlab.com/analysts/forrester-cdra20/)
1. Forrester: 2018 New Wave Value Stream Management- Strong Performer

## I use Bitbucket.  What can GitLab offer me?

1. Bitbucket has done a lot for the enterprise Git space. Great company.
1. GitLab gives a choice of hosting options for free - SaaS and self-managed
1. So if you just want Source Code Management (SCM), why not go with the open source edition of GitLab?
1. Backed by a community of a few hundred thousand developers and more than 2,000 contributors.
1. We launch new features monthly and are iterating on our product faster than anyone in the market. Thanks to our community and our open-way of working, we've been able to release new features quickly and effectively.
    - [Job's blog post on the topic is a great read](https://about.gitlab.com/blog/2015/04/15/bitbucket-vs-gitlab-com/)

## I use or am looking at software tools like VersionOne and Rally; how does GitLab compare?

1. Both VersionOne and Rally are strong on the project management side and include road mapping, backlog management, and release management - especially when scaling to teams. GitLab provides strong collaboration across detailed issue management, task assignment, version control, repo management, code review, CI/CD, deploy and resource monitoring. For the enterprise, both tool sets fulfill an important role.
1. If you are working with a Conversational/Agile development style, GitLab EE Premium will solve your needs. GitLab is the next-generation development toolset that covers **100%** of your software development lifecyle in one unified experience.
1. If you are going down a path to SAFe, VersionOne is a great option, there is also a native integration from VersionOne with GitLab for the code repo and CI/CD.

## I use or am looking at GitSwarm from Perforce

Do I need GitLab too?  Am I missing anything by not working directly with GitLab?

1. GitSwarm is built on GitLab CE or EE.
1. GitSwarm combines Perforce and GitLab to give developers a Git-based workflow they prefer while also providing an organization with enterprise-class scalability, security, and file management performance from Perforce.
1. We're happy that Perforce chose GitLab to help their customers create, code, and deploy together. To learn more, have a look at the GitSwarm overview, https://www.perforce.com/products/helix4git.
1. How should GitLab account executives engage prospects that are currently using or evaluating GitSwarm?
    - If the prospect is already using GitSwarm CE, the GitLab channel representative should work with the Perforce account executive to focus on the benefits of upgrading the customer to GitSwarm EE.
    - Perforce customers can pay via a perpetual license fee up-front with an annual Support and Maintenance fee or they can purchase via an annual subscription fee.
    - GitLab's new LFS feature addresses the need to provide storage for large binary files, which is a need of many Perforce clients leveraging Git. This is a must-have feature for companies in the video, hardware, and gaming space.
    - GitLab has partnered with Perforce as a reseller.
    - GitLab channel managers should be proactive in identifying companies that are using Perforce Helix and work with Perforce account executives in developing a plan to move them to using GitSwarm EE (or at a minimum GitSwarm CE).
    - Many long-term Perforce customers are in the process of evaluating Git solutions for certain user segments within their organizations and this is good time to support Perforce in proactively building a relationship during the early evaluation stages.

## We're already using GitLab CE for free. Why should we upgrade?

1. CE is a great option for smaller teams but larger organizations benefit from the features of GitLab EE.
1. GitLab Enterprise Edition builds on top of the Community Edition and includes extra features mainly aimed at organizations with more than 100 users.
1. It has LDAP group sync, audit logs and multiple roles.
1. It includes deeper authentication and authorization integration, has fine-grained workflow management, has extra server management options and it integrates with your tool stack.
1. More customizable and secure.

## Who are some of your customers?

1. Used by more than 100,000 organizations.
1. Large - IBM, AT&T, CERN
1. Small - SpaceX, Stack Overflow

## Why are you monetizing an open-source product?

1. Our community has worked hard on making a great product.
1. The enterprise world could benefit from this product.
1. We wanted to be able to offer some features that aren't necessarily needed in the open source world but are needed for large companies.
1. For those features, we charge our large customers and in return are able to create those features and hire people to work on the open source project.

## I use the hosted version of GitLab. Why would my company need on-premises?

1. More flexibility and customization based on security requirements (i.e. VPCs, IDS/IPS, etc)
1. LDAP integration
1. Paid support
1. 2FA
1. Permissions management

## How does support work?

1. For self-managed
    1. On-premises EE - [support statement](https://about.gitlab.com/support/statement-of-support/#starter-premium-and-ultimate-users)
    1. On-premises CE or Free - [support statement](https://about.gitlab.com/support/statement-of-support/#core-and-community-edition-users)
1. For GitLab.com
    1. Paid tiers - [support statement](https://about.gitlab.com/support/statement-of-support/#bronze-silver-and-gold-users)
    1. Free plan users - [support statement](https://about.gitlab.com/support/statement-of-support/#free-plan-users)

## Do you offer a solution for migrating data from GitHub, Bitbucket, SVN to GitLab?

1. Import from Bitbucket, GitHub, anywhere
1. Want to start using GitLab? You can easily import your repositories from Bitbucket, GitHub, Gitorious, or anywhere else, all in batch!
1. Migrating SVN to GitLab
    - https://docs.gitlab.com/ee/user/project/import/index.html#import-from-subversion
    - SVN stands for Subversion and is a version control system (VCS). Git is a distributed version control system.

## Why aren't you using a GPL license?

1. Based on Ruby on Rails (RoR)
1. MIT license is common for Ruby and RoR
