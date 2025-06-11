---
title: "Technical Questions for Sales"
description: "To improve sales efficiency, the GitLab Solution Architect team identified and answered some of the most common technical questions that GitLab sales team members should be able to answer"
---

## **Introduction**

To improve sales efficiency and reduce the dependence of GitLab sales team members on Solution Architects (SAs), the SA team identified and answered the most common technical questions they believe GitLab sales team members should be able to answer. The following questions have been organized by [DevOps lifecycle stage](https://about.gitlab.com/stages-devops-lifecycle/).

### Manage

#### What authentication options are available when using .com?

- **Short answer**: SCIM, SSO, and OAuth
- **Context video** (4 minutes, May 2020):

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/8o1Ifdte6Ps" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

- **Learn more**: Check out the [System for Cross-domain Identity Management (SCIM) documentation](https://docs.gitlab.com/ee/user/group/saml_sso/scim_setup.html)

#### What options do we have to manage user access on .com?

- **Short answer**: In the Members section of a group, a group owner can invite existing or new users to a group. A group owner can also enable or disable the ability for non-members to request access to a group. SCIM can be configured, so users can be added as guests to a group or groups automatically.
- **Context video** (10.5 minutes, May 2020):

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/cq85NMeO_YY" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

- **Learn more**: Check out the [SAML SSO for GitLab.com groups documentation](https://docs.gitlab.com/ee/user/group/saml_sso/)

#### How should customers set up and customize user roles in GitLab?

- **Short answer**: GitLab manages access control through a combination of group-level and project-level visibility settings and user access levels for members. Groups and projects have three levels of visibility and users have five levels of access.
- **Context video** (5 minutes, May 2020):

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/N1YmkdvN2Bc" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

- **Learn more**: There are multiple types of permissions across GitLab, and when implementing anything that deals with permissions, all of them should be considered. Check out the [GitLab permissions guide](https://docs.gitlab.com/ee/development/permissions.html).

#### How can users be auto-provisioned?

- **Short answer**: Use LDAP integration
- **Context video** (5.5 minutes, May 2020):

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/2UvAKN3W_zY" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

- **Learn more**: Review the [Create users through integrations documentation](https://docs.gitlab.com/ee/user/profile/account/create_accounts.html#create-users-through-integrations)

#### How is user management different on .com compared to self-managed?

- **Short answer**: Since self-managed admins have complete ownership of the environment, they have more flexibility and configuration control. There are three buckets of primary differences:

1. Instance-level controls that just aren't possible on a shared server
1. Directory integration options, and
1. A few authentication options that are missing from GitLab.com (e.g. Kerberos and smartcard auth)

- **Context video** (3 minutes, May 2020):

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/x1_b2iqKOfI" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

- **Learn more**: Administrators have more powerful user management capabilities. Check out [all the differences between GitLab.com and self-managed](https://about.gitlab.com/features/).

### Manage Quiz

- Please take a moment to answer the questions in this short [quiz](https://forms.gle/imYEn2k2C8aTxMBC8) based on the above videos and handbook resources for the top technical questions on the Manage stage.

### Plan

#### What best practices exist around using projects/groups?

- **Short answer**: Groups are used to organize projects, control permissions to them, and aggregate data across them.
- **Context video** (5.5 minutes, May 2020):

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/sgXoGdpMbd0" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

- **Learn more**:
  - Review the [No Tissues with Issues](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/getting-started/101/) page
  - Watch this [How to set up GitLab groups and projects to run multiple Agile teams with microservices](https://www.youtube.com/watch?v=VR2r1TJCDew) video (Jan 2019, 15 minutes)

#### How can we integrate Jira?

- **Short answer**: GitLab is a complete DevOps platform, delivered as a single application for everything from project planning and source code management to CI/CD, monitoring, and security. GitLab issues is a powerful tool for idea management, iteration planning, issue tracking and software development. However, we recognize that many organizations have been using Jira for many years and have existing data and business processes built into it. For some of these customers, this means it can be difficult and cost-prohibitive to move off of Jira. Core to our beliefs is that people (and tools) work better when they're all in one place, so to serve these customers, we are building an excellent integration that makes GitLab work wonderfully alongside Jira. If and when customers are ready to migrate to GitLab issues, we also provide the tools and practices to help with that.
- **Context video** (5 minutes, May 2020):

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/et3umKvcrX4" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

- **Learn more**: Check out the [GitLab Jira Integration page](https://about.gitlab.com/solutions/jira/)

#### What is the difference between the Jira integration in Free and in Premium?

- **Short answer**: GitLab Premium and GitLab Ultimate provides more robust options for integration points, integration links, integration set up, sync frequency, and user authentication.
- **Update**: The end of the video discusses the Jira Development Panel as a differentiator. The Jira Development Panel integration has since moved to Core as of 13.4.
- **Context video** (5 minutes, May 2020):

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/t0_52j2Zp2I" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

- **Learn more**: Review the [GitLab Jira development panel integration](https://docs.gitlab.com/ee/integration/jira/) documentation

### Plan Quiz

- Please take a moment to answer the questions in this short [quiz](https://forms.gle/ywpWPxZjmDQJ1seB8) based on the above videos and handbook resources for the top technical questions on the Plan stage.

### Create

#### How may customers move from SVN to git?

- **Short answer**: There are two options for customers to consider:

1. Mirror SVN, maintain both SVN and Git
1. Cut over migration

- **Context video** (7.5 minutes, May 2020):

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/Eza1wXoDLvs" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

- **Learn more**: Read the [Migrating from SVN to GitLab documentation](https://docs.gitlab.com/ee/user/project/import/index.html#import-from-subversion)

#### What are best practices for a developer workflow?

- **Short answer**: A few best practices:
  - Automate redundant tasks
  - Simplify and enable collaboration for stakeholders
  - Reduce time it takes to process information and data
  - Provide visibility to all stakeholders
  - Establish accountability
- **Context video** (8 minutes, May 2020):

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/fmxftqvtg7U" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

- **Learn more**: Take a look at [Introduction to GitLab Flow](https://about.gitlab.com/blog/2023/07/27/gitlab-flow-duo/)

#### What are the differences around merge request approvals between the EE tiers?

- **Short answer**: GitLab Core does not have merge request (MR) approvals. In GitLab Free, there is one approval rule with any number of eligible approvers allowed to approve with the option to set eligible approvers in a codeowners file. In GitLab Premium, there are multiple approval rules with specific approvers (optional required approvers from codeowners file). And in GitLab Ultimate, security approvals are introduced as merge request (MR) approvals can be configured to require approval from a member of your security team when a merge request would introduce a security vulnerability or a software license compliance violation.
- **Context video**:

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/tQ_o_RkB4xg" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

- **Learn more**: Check out the [GitLab Create Features page](https://about.gitlab.com/features/#create)

### Create Quiz

- Please take a moment to answer the questions in this short [quiz](https://forms.gle/wF5KoPFKCwBXJSLKA) based on the above videos and handbook resources for the top technical questions on the Create stage.

### Verify

#### How does GitLab CI work?

- **Short answer**: Coming soon
- **Context video** (9 minutes, May 2020):

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/bmnFgGSY_L8" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

- **Learn more**: Continuous Integration works by pushing small code chunks to your application's code base hosted in a Git repository, and, to every push, run a pipeline of scripts to build, test, and validate the code changes before merging them into the main branch. Check out the [GitLab CI/CD documentation](https://docs.gitlab.com/ee/ci/).

#### How can we do test management with GitLab?

- **Short answer**: Coming soon
- **Context video** (10 minutes, May 2020):

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/qmJXn2GlASY" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

- **Learn more**: The GitLab Product Team is exploring enhancements in this area. Check out the [Quality Management Direction page](https://about.gitlab.com/direction/plan/).

#### What are runners and how do they actually work?

- **Short answer**: Coming soon
- **Context video** (18 minutes, May 2020):

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/IsthhMm64u8" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

- **Learn more**: GitLab Runner is the open source project that is used to run your jobs and send the results back to GitLab. It is used in conjunction with [GitLab CI/CD](https://about.gitlab.com/solutions/continuous-integration/), the open-source continuous integration service included with GitLab that coordinates the jobs. Find out more by reading the [GitLab Runner documentation](https://docs.gitlab.com/runner/).

#### What are best practices for a runner infrastructure?

- **Short answer**: Group runners are best for large projects (projects which use multiple repos) and multiple teams (top level groups provide isolation)
- **Context video** (9.5 minutes, May 2020):

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/6Kb3BJ0bXrw" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

- **Learn more**: Review the [best practices documentation for using and administering GitLab Runner](https://docs.gitlab.com/runner/fleet_scaling/)

### Secure

#### What are the GitLab security capabilities?

- **Short answer**: Shift left! Run application security scans in the Merge Requests so developers can address vulnerabilities quickly - that's what we mean by "DevSecOps" and the result is increased speed, efficiency, and security.
- **Context video** (9 minutes, May 2020):

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/jXNrUBRWynA" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

- **Learn more**: GitLab can check your application for security vulnerabilities that may lead to unauthorized access, data leaks, denial of services, and more. Check out the [GitLab Secure documentation](https://docs.gitlab.com/ee/user/application_security/).

#### When will we no longer rely on using Docker-in-Docker (DinD) for security scanners?

- **Short answer**: As of 13.0, we no longer use DinD by default for security scanners. All 5 scanners (SAST, DAST, Container, License and Dependancy) are able to be run off-line as of GitLab 12.10.
- **Context video** (6 minutes, May 2020):

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/6NVBGe9-kF0" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

- **Learn more**: This is an ongoing effort. See the [Use non-DinD mode by default for Security Products issue](https://gitlab.com/gitlab-org/gitlab/-/issues/37278) for more information.

### Release

No questions at this time.

### Configure

No questions at this time.

### Monitor

No questions at this time.

### Govern

No questions at this time.

### Enable

#### What are the best ways to achieve high availability?

- **Short answer**: GitLab scales on AWS with Autoscaling. For other cloud and On-Prem, we have built in HA. For Kubernetes (K8s), we take a hybrid approach.
- **Context video** (6.5 minutes, May 2020):

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/EtRfe40yvOk" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

- **Learn more**: Check out the [Reference architecture](https://docs.gitlab.com/ee/administration/reference_architectures/) documentation for additional details.

#### What are the best ways to achieve disaster recovery?

- **Short answer**: Coming soon
- **Context video**: Coming soon
- **Learn more**: Review the [Replication with Geo documentation](https://docs.gitlab.com/ee/administration/geo/index.html)

#### What is GitLab's out-of-the-box support for (AWS/Azure/GCP)?

- **Short answer**: Coming soon
- **Context video**: Coming soon
- **Learn more**: Please look at GitLab's [multi cloud support](https://about.gitlab.com/topics/multicloud/)

#### Does GitLab have reference architectures with sizing information?

- **Short answer**: Three requirements to determine the correct (most appropriate) reference architecture are:

1. Number of users
2. Whether or not HA (High Availability) is required
3. Whether or not [Geo (Replication)](https://docs.gitlab.com/ee/administration/geo/index.html) is required

- **Context video** (9 minutes, May 2020):

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/-WaX9nLKQME" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

- **Learn more**: GitLab supports a number of scaling options to ensure that your self-managed instance is able to scale out to meet your organization's needs when scaling up a single-box GitLab installation is no longer practical or feasible. Check out [GitLab's Reference Architecture documentation](https://docs.gitlab.com/ee/administration/reference_architectures/index.html#reference-architectures).

#### What are the best practices for backing up a GitLab instance?

- **Short answer**: Coming soon
- **Context video**: Coming soon
- **Learn more**: Check out the [Backing up and restoring GitLab documentation](https://docs.gitlab.com/ee/administration/backup_restore/index.html)

#### What installation method does GitLab recommend customers use?

- **Short answer**: Coming soon
- **Context video**: Coming soon
- **Learn more**: GitLab strongly recommends downloading the Omnibus package installation since it is quicker to install, easier to upgrade, and contains features to enhance reliability not found in other methods. We also strongly recommend [at least 4GB of free RAM](https://docs.gitlab.com/ee/install/requirements.html#cpu) to run GitLab. Find out more on the [GitLab Installation page](https://about.gitlab.com/install/).

#### How do customers migrate from GitLab CE to EE?

- **Short answer**: Coming soon
- **Context video**: Coming soon
- **Learn more**: Check out the [Upgrade to Enterprise Edition page](https://about.gitlab.com/upgrade/)

#### How do customers migrate from GitLab self-managed to .com?

- **Short answer**: Coming soon
- **Context video**: Coming soon
- **Learn more**: Find out how on the [Upgrade to Enterprise Edition page](https://docs.gitlab.com/ee/user/project/import/#migrating-from-self-managed-gitlab-to-gitlabcom)
