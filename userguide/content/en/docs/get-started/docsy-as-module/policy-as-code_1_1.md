---
title: "Policy-as-code"
---

## What is policy-as-code?

Policy as code (PaC) refers to the practice of codifying policies, rules, and regulations that govern various aspects of an organization's operations, particularly in compliance, security, and risk management. It involves translating these policies into machine-readable code that can be automatically enforced and continuously monitored within the organization's systems and infrastructure.

## Why use policy-as-code / what are the benefits?

Policy as code (PaC) offers several key benefits for organizations embracing the DevSecOps model. Firstly, PaC ensures consistency and standardization across the infrastructure by defining policies in machine-readable formats and enforcing them through automation. This consistency minimizes the risk of misconfigurations and ensures that all deployed resources adhere to organizational standards, enhancing overall system reliability and security.

Secondly, PaC enables automation and efficiency in policy enforcement processes. By translating policies into code and integrating them with Infrastructure as Code (IaC) tools, organizations can automate the evaluation of infrastructure configurations against predefined policies. This automation reduces the reliance on manual intervention, saving time and effort while improving accuracy. Additionally, automated enforcement mechanisms can detect policy violations in real time, allowing for prompt remediation actions and reducing the likelihood of security breaches or compliance issues.

Thirdly, PaC enhances auditing, accountability, and scalability within organizations. With policies defined as code, organizations gain greater visibility into their compliance posture and can easily track changes, audit trails, and historical compliance data. This transparency facilitates regulatory compliance and strengthens accountability by providing clear documentation of policy enforcement activities. Moreover, PaC offers scalability and flexibility, allowing policies to be updated and adapted as infrastructure requirements evolve without significant manual effort. This agility enables organizations to respond promptly to changing compliance mandates and business needs, ensuring continuous alignment between policies and operational practices.

## How and where does Security Compliance implement policy-as-code at GitLab?

Security Compliance is planning to implement Policy as Code (PaC) through the utilization of existing tools, often involving code analysis and scanning Infrastructure-as-Code (IaC) tools like [SAST](https://docs.gitlab.com/ee/user/application_security/sast/) and Checkov.

To further solidify this approach, focusing on [dogfooding](/handbook/values/#dogfooding) and leveraging GitLab as a tool becomes imperative. By embracing GitLab to its full potential, the organization can design a proven and scalable concept that streamlines the implementation of PaC, fosters collaboration and enhances visibility into security practices.

This comprehensive integration of tools and practices not only strengthens the Security Compliance efforts but also establishes a robust foundation for proactive risk management and continuous improvement in security posture.

## Roadmap

Please see our confidential epic (internal only) to see how we are rolling out this capability.

## <i class="fas fa-id-card" style="color:rgb(110,73,203)" aria-hidden="true"></i> Contact the Team

- Slack
  - Feel free to tag us with `@dedicated_compliance` or `@sec-compliance-team` to reach the entire Security Compliance team
  - The `#sec-assurance` slack channel is the best place for questions relating to our team (please add the above tag)
  - FedRAMP questions should be directed to the `# wg_fedramp` channel
- Tag us in GitLab
  - `@gitlab-com/gl-security/security-assurance/team-security-dedicated-compliance`
- Email
  - `security-compliance@gitlab.com`
- Here are our team's GitLab.com [subgroups and projects](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-compliance-commercial-and-dedicated/team-security-dedicated-compliance)
- Interested in joining our team? Check out more [here](/job-families/security/security-assurance-job-family)!
