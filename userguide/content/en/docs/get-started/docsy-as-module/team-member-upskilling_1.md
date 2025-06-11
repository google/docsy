---
title: "Team Member Upskilling"
---

## Team Member Upskilling Runbook

This runbook is a collection of resources for new or existing Product Security Engineers, or for those looking to build a body of work
 to enhance their skills and knowledge in product security. This runbook is designed to provide guidance and resources for continuous learning and professional development.

### 1. Core Competencies

Team members should work to become proficient in the following core competencies:

- Web application security
- Secure coding practices
- Threat modeling
- Risk assessment and management

Team members should also have 'good' knowledge of the following areas; enough to know how to go and learn more should the need arise:

- Cloud / network security
- Cryptography

### 2. Learning Paths

These learning paths are designed to help new team members in Product Security Engineering get up to speed and make meaningful contributions. They provide a balance of quick wins and longer-term skill development, focusing on core competencies essential to our mission. Choose one or more paths that align with your interests and the team's current priorities.

#### 1. "Paved Road & Defense-in-Depth" Learning Path

Essential:

- [ ] Analyze a historic GitLab vulnerability (from release posts or our [internal](https://internal.gitlab.com/handbook/security/product_security/application_security/reproducible-vulnerabilities/) or [public Reproducible Vulnerabilities page](/handbook/security/product-security/application-security/reproducible-vulnerabilities/)) or identify a class of recurring issues from [Bug Bounty Stats](https://bb-vuln-stats-gitlab-com-gl-security-security-re-c25977bf1ada94.gitlab.io/) or [HackerOne](https://hackerone.com/organizations/gitlab/analytics/dashboards/submissions?eid=submissions_by_weakness)
- [ ] Design a solution that makes it easier for developers to avoid this class of bug ("paved road"), and/or prevents or mitigates the class of bug (defense-in-depth)
- [ ] Document your solution design in an [issue](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-engineering/product-security-engineering-team/-/issues/new) (and/or epic & child items)
  - Have the solution peer reviewed by a teammate
  - Iteratively [refine it](/handbook/security/product-security/security-platforms-architecture/product-security-engineering/#step-by-step-refinement-process) until it's in the `~workflow::ready for development` state

Recommended:

- [ ] [Add it to a milestone](/handbook/security/product-security/security-platforms-architecture/product-security-engineering/milestone-planning/#milestone-planning-issue) and implement your solution
- [ ] Reproduce a historic vulnerability on a local version of GitLab
- [ ] [Create a threat model](/handbook/security/product-security/application-security/runbooks/threat-modeling/#creating-the-threat-model) that encompasses the vulnerability you chose
- [ ] Compare your designed solution to our actual patches and defense-in-depth measures

#### 2. "Secure GitLab with GitLab" Learning Path

Essential:

- [ ] Identify an existing issue off our issue board or select a ~ProdSecEngCandidate issue which will help one of the Product Security teams better secure GitLab (the org) _with_ GitLab (the product)
- [ ] Document your solution design in an [issue](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-engineering/product-security-engineering-team/-/issues/new) (and/or epic & child items)
  - Have the solution peer reviewed by a teammate
  - Iteratively [refine it](/handbook/security/product-security/security-platforms-architecture/product-security-engineering/#step-by-step-refinement-process) until it's in the `~workflow::ready for development` state

Recommended:

- [ ] [Add it to a milestone](/handbook/security/product-security/security-platforms-architecture/product-security-engineering/milestone-planning/#milestone-planning-issue) and implement your solution
- [ ] Conduct a post-implementation review and propose improvements
- [ ] Collaborate with the Application Security team to identify other high-impact automation opportunities

### 3. "Security Upskilling and Collaboration" Learning Path

Essential:

- [ ] Review the following and identify areas that you want to learn more about:
  - [ ] GitLab's [Secure Code Guidelines](https://docs.gitlab.com/ee/development/secure_coding_guidelines.html)
  - [ ] GitLab's [Security Risk Quarterly](/handbook/security/security-assurance/security-risk/storm-program/#risk-tracking-and-reporting)
- [ ] Create an issue or epic to track your learning efforts. Include:
  - [ ] Type of training / URL(s)
  - [ ] Your goal, estimated effort, & milestone
  - [ ] Links to G&D issues if you need to apply for budget (certifications, online courses, etc)

Recommended:

- [ ] Update this page with resources or processes you found helpful!
