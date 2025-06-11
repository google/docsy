---
title: GitLab licensing technology to independent Chinese company FAQ
description: "On this page you can view frequently asked questions about GitLab licensing its technology to a new, independent Chinese company."
aliases:
- /handbook/faq-gitlab-licensing-technology-to-independent-chinese-company/
---

## Overview

[GitLab announced that it has licensed its technology to a new, independent Chinese company](https://about.gitlab.com/blog/2021/03/18/gitlab-licensed-technology-to-new-independent-chinese-company/). The independent company will help drive adoption of the GitLab complete DevOps platform in China and foster the GitLab community and open source contributions.

**Q. Will existing China reseller and systems integrator customers move to JiHu?**

At this time, JiHu has just formed, and currently is not offering any product solutions. Users in the local market in China will be informed as soon as JiHu launches product offerings.

**Q. Will JiHu have a different terms of service and customer acceptance policy than GitLab Inc.?**

JiHu is an independent company and will set up their own terms of service and customer acceptance policy. They do not have any obligation to follow GitLab Inc.’s terms of service or policies.

**Q. Has GitLab Inc. coordinated with the Chinese government to establish the new company?**

No, GitLab Inc. has not been working with the Chinese government. JiHu has been working with the Chinese government independently to file the required paperwork to become an official company in China and secure the appropriate licensing for the SaaS business, as required.

**Q. How will intellectual property work between GitLab Inc. and JiHu?**

There will be three distributions of the GitLab product: CE (Community Edition), EE (Enterprise Edition), and JH (JiHu Edition). The CE distribution will continue to be available globally. The EE distribution will only be sold outside China. The JH distribution will only be sold in China.

GitLab and JiHu will use two separate repositories where GitLab’s repository will be upstream and JiHu’s repository will be downstream. Changes to GitLab CE and EE will be one-way mirrored to the JiHu Edition, however, changes to the JiHu Edition will not be mirrored back to GitLab CE and EE.

Instead of mirroring, JiHu will be able to contribute to the Community Edition and Enterprise Edition by following the same meticulous protocols we already have in place for our current contributors. Each contribution must meet GitLab’s rigorous standards for security and code quality before being added to the GitLab application.

As an independent company, JiHu will manage its own technologies and infrastructure. JiHu’s SaaS service (GitLab.cn) and GitLab Inc.’s SaaS service (GitLab.com) will share no common infrastructure, networking connectivity, systems, services, data, or resources.

![How the two repositories work](/images/faq/two-repositories.png)

**Q. Will JiHu contribute code back to GitLab? How will GitLab Inc. protect the code base from potential malicious intent?**

There will be three distributions of the GitLab product: CE (Community Edition), EE (Enterprise Edition), and JH (JiHu Edition). There are two separate and distinct code repositories: One containing only the CE and EE distributions and another uni-directionally mirrored repository containing CE, EE, and the JH distribution.

The CE distribution will continue to be offered as FOSS (free open source software).

The EE distribution will be offered to customers outside of China and will not contain the JH distribution’s generally contributed features or code. All incremental contributions from JiHu to CE and EE will be upstreamed as merge requests to GitLab Inc.’s maintainers for enhanced security review prior to acceptance.

The JH distribution will only be offered to customers inside China.
[GitLab's code is source-available and the open source components of GitLab are published under an MIT open source license](https://about.gitlab.com/solutions/open-source/). Like the hundreds of contributions we receive each month from our global community, JiHu will contribute to GitLab CE and EE following the same meticulous protocols we already have in place. Each contribution must meet our rigorous standards for security and code quality before being added to the GitLab application. GitLab Inc. is the maintainer of CE and EE and is solely able to approve merge requests into CE and EE following our software supply chain security procedures. GitLab Inc. will retain full merge rights and control over everything that goes into CE and EE.

GitLab Inc. has also instituted additional code audit and security oversight for code contributed by JiHu and the open source community in China to ensure both quality and security. We will follow existing processes for security reviews for externally contributed code, with a focus on code functionality that includes any of the following: processing credentials/tokens, storing credentials/tokens, logic for privilege escalation, authorization logic, user/account access controls, and authentication mechanisms. The [GitLab Inc. Security team](/handbook/security/#security-department) will continue to work with our [Developer Relations team](/handbook/marketing/developer-relations/) to ensure that security reviews are conducted according to our established standards.

**Q. How will GitLab prevent supply chain attacks?**

GitLab is able to provide added stringent safeguards for our customers by increasing our deliberate security protections and ensuring additional degrees of separation between GitLab and JiHu. To protect the integrity of the GitLab brand and to ensure the security of our software product and prevent supply chain attacks, we have made a thoughtful decision to license our technology to an entirely independent and local China-based company that enables us to institute even stronger separation between our customers in various markets as well as within our development and hosting environments.

[GitLab's code is source-available and the open source components of GitLab are published under an MIT open source license](https://about.gitlab.com/solutions/open-source/). GitLab code contribution processes have been specifically developed to identify and protect against malicious code and supply chain attacks. There are a multitude of controls in place today that already help us detect and prevent a supply chain attack on the GitLab application, including: code review, table top exercises, pre- and post-deployment security assessments/tests, continual testing of GitLab Inc.’s cloud environment, and various detection and alerting technologies. We continue to invest in best-in-class processes as the industry evolves to retain strong controls on contributor identities and bolster our security practices. In addition, [GitLab Inc.’s Red Team](/handbook/security/threat-management/) routinely performs specific exercises simulating supply chain attacks to validate and improve on all controls. We work closely with bounty programs, as well as security assessment and penetration testing firms to ensure external review of our security posture.
