---
title: DevSecOps POV Scope and Acceptance
description: DevSecOps POV Scope and Acceptance
---

Other DevSecOps Resources: [Lab](https://gitlab.com/gitlab-learn-labs/sample-projects/tanuki-racing) | *Demo* | *Guided Trial* | **POV** | [Education Services](https://university.gitlab.com/pages/security-training/) | [Professional Services](https://about.gitlab.com/services/#acceleration-services)

The DevSecOps solution is identified for organizations  who are trying to "shift left" to find security vulnerabilities earlier within their DevOps methodology but have not been able to achieve the expected results.

From the early discovery when qualifying the POV it is confirmed that the existing application security is separated from the DevOps flow, causing bottlenecks as the final hurdle in the development life cycle and typically controlled only by the App Sec team.

The key objective of the POV is to validate the value of the shift left security to the developer's hand along with app sec team collaboration at time of app development.

### Input to the POV

- Pain points identified: Toolchain review and mapped out existing app sec tools and usage. Here is [the example](https://docs.google.com/spreadsheets/d/1saSUfEYIM--r3ve3tDwQVnhcb9OOmBluGGFWG_9K_rs/edit#gid=64684746) of the discovery for the toolchain and the mapping of the toolchain.

- High level ROI discussion identifying potential tool consolidation (hard cost); and overall efficiency gains with transformative process with shift left security
- Both DevOps + App sec team are stakeholders to be involved

### Suggested Success Criteria

- Business Driver: increase velocity, consolidate/reduce spending, improve security posture, protect brand and reputation
- Enterprise Initiative and Sponsor: cloud transformation, CIO
- Required capabilities with the objectives to infuse security earlier in the development process, ability to scan all code and act them real time. Have the security oversight as the integral part of the end to end DevOps.

| Required Capability | Acceptance | Objective | GitLab Feature |
| ---      | ---      | ---      |---      |
| Approval Process and workflow | Approval rules with security team; Dev + Security Team collaboration | Approval Rules |Vulnerability mgmt |
| Developer App Sec Workflow Process | Scan all code branches within desired timeframe; Shift left security with productivity improvement | Vulnerability mgmt | Security Test & MR Report |
| Security team Workflow Process | Security team to drive policies and facilitate triage | Manage app and organizational security posture | Security Dashboard; Vulnerability mgmt; Security trends |
| SAST security test review | Scan for all detected languages | Shift left developer's experience with real time feedback | SAST analyzers; MR SAST widget; Vulnerability Dashboard |
| Dependency Scanning | Scan for all detected languages | Shift left developer's experience with real time feedback | SCA analyzers; MR SCA widget; Vulnerability Dashboard; SBOM and Dependency Tree |
| Container Scanning for Clound Native | Scan and block known vulnerable images | Recommendation and auto-remediation | Container analyzers; MR Container widget; Vulnerability Dashboard; Auto-remediation via MR |
| API Security Test | GitLab to review API fuzzing project | Shift left pen test like capability to dev + QA | |
| DAST API; API Fuzzing | | | |

This tends to be most common POVs for new logos and uptier to ultimate. Ensure you engage the application security team at the customer.

### Proof Points Consideration

It is not recommended to carry out application security tests on all types, particularly fuzzing due to the intensive work and expertise required.

Proof points can be obtained to supplement the POV as acceptable results.

It is recommended to provide proof points using GitLab apps and projects such as a sample java app for coverage fuzzing. The proof points can be documented or reviewed with the review session, and considered as part of the acceptance.

If the DevSecOps acceptance maps to the regulatory requirements, it tends to require integration with other security control tools and analyzers, it is important to include that in the POV scope and acceptance but more as discussion with supplemental proof points instead of actual end to end integration.

### Other POV Scope and Acceptance

SA working with SAE and AE can define the POV scope with the customer, with alignment to the business values and the GitLab solution. For each solution, the typical scope and acceptances are listed for reference but the team should define the scope, time and execution with acceptance for each engagement.

- [Software Compliance](/handbook/solutions-architects/tools-and-resources/pov/compliance/)
- [Automated Software Delivery](/handbook/solutions-architects/tools-and-resources/pov/automation/)
- [DevOps Platform cumulatively](/handbook/solutions-architects/tools-and-resources/pov/platform/)
