---
title: "DevOps Solution Resource: Software Compliance"
description: "How GitLab approaches the software compliance solution including messaging and key resources to help marketing and sales."
---

**Looking for a customer-facing overview of GitLab's Software Compliance capabilities? See the [Compliance Solution](https://about.gitlab.com/solutions/compliance/)**

**GitLab field teams refer to this [Security and Governance highspot page](https://gitlab.highspot.com/items/61f415455b20d8eb224750a3) for latest information**

The page below is intended to align GitLab sales and marketing efforts with a single source of truth for our go-to-market efforts around DevSecOps.

### Who to contact

|     Product Marketing    |    Developer Advocate    |
| ------------------------ | ------------------------- |
| Brian Mason ( @BrianMason )  | Fernando Diaz ( @fjdiaz ) |

## The Market Viewpoint

## Software compliance

The Software Compliance solution is applicable for customers who are concerned about securing their software supply chain and simplifying their compliance with common industry regulations while at the same time speeding their software velocity.

GitLab's platform approach seamlessly embeds security and compliance within the DevOps platform, providing simplicity, visibility, and control.

### Why is compliance a new concern?

While compliance and auditability has always been important, these requirements have greater attention following high-profile attacks on software supply chains and the related US President's [Executive Order to improve cyber security](https://www.whitehouse.gov/briefing-room/presidential-actions/2021/05/12/executive-order-on-improving-the-nations-cybersecurity/).  The Executive Order (EO) directs NIST to publish preliminary guidelines for enhancing software supply chain security by November 8, 2021. It is anticipated that NIST, the National Institute of Standards and Technology, will provide even more guidance. [This article](https://www.insideprivacy.com/cybersecurity-2/october-2021-developments-under-president-bidens-cybersecurity-executive-order/) explains clearly why it's important to anyone developing software. It says, while the EO is "directly applicable to the U.S. Government, the standards being established for U.S. Government agencies could be adopted as industry standards for all organizations that develop or acquire software similar to various industries adopting the NIST Cybersecurity Framework as a security controls baseline."

Application security testing is still a foundational part of compliance, but now visibility and control across the entire software factory is even more paramount than before, a capability that is made challenging by complex DevOps tool chains.

### Desired business outcomes

- Meet industry regulatory requirements - efficiently and without slowing velocity of development
- Secure the software supply chain with better end-to-end governance to reduce security and compliance risks

## Personas

### User Personas

**[Cameron the Compliance Manger](/handbook/product/personas/#cameron-compliance-manager)** needs to be sure all the company's development processes are compliant. Given the amount of data that a software development and delivery lifecycle produces, and the complexity of typical DevOps tool chains, he finds it difficult to find, aggregate, and report on all of the necessary data and changes made across systems for audit purposes. He needs to easily see who changed what, where, and when from end-to-end across the SWDLC. He needs the information to be available quickly and easily so he can reduce the time and disruption involved in the evidence collection process.

**[Sasha the Software Developer](/handbook/product/personas/#sasha-software-developer)** uses GitLab primarily within the MR pipeline report. The developer cares about compliance and security but does not want to become a compliance expert. Capabilities that help them run fast while staying compliant are appreciated.

**[Amy the Application Security Engineer](/handbook/product/personas/#amy-application-security-engineer)** may be tasked with automating and reporting on compliance policies so would like them to be simple, efficient, and automated wherever possible. Amy finds it difficult to control which policies are applied within the development process (e.g. CI pipelines) and to keep them from being circumvented. In fact, she may not even know they've been circumvented.

### Buyer Personas

**The CTO or head of DevOps Architecture** is usually the buyer for when compliance is the primary driver.

The key capability that addresses the CTO's need is [Compliant Pipelines](https://docs.gitlab.com/ee/user/project/settings/index.html#compliance-pipeline-configuration) and the [Compliant workflow automation](https://docs.gitlab.com/ee/administration/compliance.html#compliant-workflow-automation). They need the ability to prescribe scans and policies in the CI pipeline and ensure individual developers cannot bypass them.

**The Security Manager or CISO (Sam's boss)** is usually the buyer for the Ultimate tier when security gets involved.

The key to winning their hearts is to focus on **Simplicity and control**

- Complexity is one of the CISO's chief complaints. Using one tool to provide visibility and control across the entire SDLC is valuable.
- CISOs likely feel out of control, or at least pressured to be secure amidst evolving threats, high-profile cyber attacks, new compliance concerns, and development tool sprawl. It's hard to manage these software risks.  GitLab's single platform that provides end-to-end simplicity, visibility, and control they need.

## Industry Analyst Coverage

Analysts have not identified a market segment for software compliance. They have been writing articles about it though. Forrester spoke about the Executive Order at GitLab's Commit event in Fall of 2021.

## Market Requirements

| Market Requirements | Description | Typical capability-enabling features | Value/ROI |
| ------ | ------ | ------ | ------ |
| Common compliance controls |  Controls necessary to protect the integrity of the software development and deployment process | Role-based access, MR approvals, and many others | Simplify audit and compliance and reduce risk of noncompliance. |
| Automated policy enforcement | Automation can reduce the audit burden. Enforcing policies within the MR shifts compliance left where developers can resolve problems early in the life cycle | locked CI templates that enforce policies in the pipeline | Avoids late rework. In regulated industries, there is an approved change order window. if it is missed for rework, the change management process must start over.|
| Audit reporting | Audit events should be automatically captured and reported. Changes to code, controls, and IaC should be traceable and captured as audit events across the entire SDLC. | Audit events, audit reporting | reduce risk of non-compliance and efficiently identify root causes following a security or compliance incident |
| Security Governance | The solution must automatically apply security policies against code changes to ensure that only appropriate risks are taken. Application vulnerabilities, representing risk, are tracked, managed, and reported. The solution must enable routine assessments of security practices to evaluate for risk, compliance, audit and process improvement opportunities (usually for education purposes). |  Security policy automation, Risk and compliance reporting, Audit reporting, Variety of security metrics and process reporting, Vulnerability database and management | Efficiently monitor, manage and mitigate risk. Ability to identify exceptions and refine policies over time. |
| Security guardrails (Preventative - Pre CI/CD) | Preventative Application Security uses guardrails to help teams consistently build things that are secure from the start. | Compliant pipelines that cannot be circumvented by a developer, pre-approved code libraries, and auto-discovery that catalogs all third party code. | Prevents creating new vulnerabilities. |

## The GitLab Solution

## How GitLab Meets the Market Requirements

GitLab Software Compliance solution overview

<figure class="video_container">
   <iframe width="560" height="315" src="https://www.youtube.com/embed/QV2dIocn-hk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</figure>

| Market Requirements | How GitLab Delivers | GitLab Category | Demos |
| ------ | ------ | ------ | ------ |
| Common compliance controls |  GitLab provides [many common controls](https://docs.gitlab.com/ee/administration/compliance.html) throughtout the SDLC, [Audit events](https://docs.gitlab.com/ee/administration/audit_event_reports.html) [Compliance Management](https://about.gitlab.com/direction/software_supply_chain_security/compliance/compliance-management/) | Access and Compliance within the Manage stage | |
| Automated policy enforcement | [Security policies](https://docs.gitlab.com/ee/user/application_security/policies/#policy-management) can be managed in one place while [compliant workflow automation](https://docs.gitlab.com/ee/administration/compliance.html#compliant-workflow-automation) helps admins easily apply compliance policies across projects. | Govern | [![Compliance pipelines](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/youtube_social_icon_red-32x23.png) Compliance pipelines](https://www.youtube.com/watch?v=jKA_e_jimoI) |
| Audit reporting | GitLab tracks [audit events](https://docs.gitlab.com/ee/api/audit_events.html) across the entire SDLC and [report them](https://docs.gitlab.com/ee/administration/audit_event_reports.html) | Access and Compliance within the Manage stage | |
| Security Governance | Security Policy Automation, [Compliant workflow automation](https://docs.gitlab.com/ee/administration/compliance.html#compliant-workflow-automation), [Security Dashboards](https://docs.gitlab.com/ee/user/application_security/security_dashboard/) and [Vulnerability Reports](https://docs.gitlab.com/ee/user/application_security/vulnerability_report/), [MR approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/), [License compliance](https://docs.gitlab.com/ee/user/compliance/license_approval_policies.html) | Govern, Secure ||
| Security guardrails (Preventative - Pre CI/CD) | GitLab falls short of providing pre-approved dependencies as some other vendors do, [bill of materials feature](https://docs.gitlab.com/ee/user/application_security/dependency_list/) | Govern, Secure | [![Manage your Application Dependencies with GitLab](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/youtube_social_icon_red-32x23.png) Manage your Application Dependencies with GitLab](https://youtu.be/scNS4UuPvLI)|

## GitLab differentiators

| Differentiator | Description |
| ------ | ------ |
| Single Application for Entire DevOps Lifecycle | a single application eliminates complex integrations, data chokepoints, and toolchain maintenance, resulting in greater productivity |
| End-to-End Insight and Visibility | GitLab's common data model enables end-to-end visibility and traceability throughout the DevOps lifecycle, correlating and aggregating data automatically |
| Deploy Your Software Anywhere | GitLab is infrastructure-agnostic (supporting GCP, AWS, Azure, OpenShift, VMWare, On Prem, Bare Metal, and more), offering a consistent workflow experience - irrespective of the environment |
| Leading SCM and CI in One Application | having the backbone of a DevOps toolchain in one application streamlines code review & collaboration (one interface, one user model, one data model) |
| Built-in Security and Compliance | move security testing earlier in the development lifecycle with out-of-the-box security features (code scanning, dependency scanning, secrets detection, etc.) and automated security testing and audit controls to facilitate policy compliance |

## Top Compliance differentiators

| Differentiator | Value | Demo |
| ----------------- | ------------- | ------ |
| **MR approval based on Security Policy** | Bring Development and Security Teams closer by allowing security teams to apply organizational security policies before hand and review/approve security exceptions before the code is merged | [![Merge-Request Approvals as Displayed in DevSecOps Overview](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/youtube_social_icon_red-32x23.png) Merge-Request Approvals as Displayed in DevSecOps Overview](https://youtu.be/XnYstHObqlA?t=174) |
| **Compliance Management** | GitLab makes compliance easier by providing a single source of truth for Dev, Sec and Ops through a single data-store. Everything is audited and for every change, there is a single thread that contains the full audit log of every decision and action - making audit compliance a breeze | [![Manage Compliance with GitLab](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/youtube_social_icon_red-32x23.png) Manage Compliance with GitLab](https://youtu.be/QV2dIocn-hk) |
| **Compliant pipelines** | Admin can choose a compliance framework and apply it to the project. It will override any changes developers make to the pipeline | [Compliant pipelines](https://www.youtube.com/watch?v=jKA_e_jimoI) |

## Message House

The message house for compliance provides a structure to describe and discuss the value and differentiators for the Software compliance solution.

**Top message: GitLab helps you take control of your software development with a single platform that helps you automate and standardize the development process and policies while providing end-to-end visibility/traceability so that development can run fast with less risk.**

The GitLab DevOps platform approach helps you achieve Compliance with better visibility and control while simplifying audits and forensics. Governance is simplified with one place to manage policies, apply them, assess exceptions, and measure policy affect.

- A single platform improves allows the organization to see who changed what, where, and when across the entire SDLC.
- Compliance and Security policies can be automatically applied to all pipelines for consistency, and simplified audits
- [Role-based access controls](https://docs.gitlab.com/ee/user/permissions.html) provide seperation of duties and protect against malicious insider threats and accidental events
- A breadth of additional [compliance controls](https://docs.gitlab.com/ee/administration/compliance.html) provide superior governance over software development, delivery, and use.

Because developers see compliance concerns in the MR pipeline alongside security vulnerabilities, these can also be fixed while the developer is still iterating on the code, rather than waiting until pre-production when changes cost more time and money.

- Compliance concerns are shown for code changes and IaC
- Developers need not use another tool to identify compliance concerns
- Compliance is handled as part of the development process.

## Competitive Comparison

See how we compare against other DevOps approaches

1. Role-based access control (RBAC) for separation of duties. Competitive products's roles are broader and when a person changes roles, his/her permissions must be changed manually. Why is this important? If someone has access to push to prod and is demoted or moves to another group, you'd want the permissions to change automatically to avoid insider threats.
1. Our workflows include compliance within MR approvals. No manual checks that impact velocity. (In essence, we shift left compliance also.)
1. [External status checks](https://docs.gitlab.com/ee/user/project/merge_requests/status_checks.html) is an important feature for regulated industries. Changes are approved and must be pushed to production within a given timeframe. Delays can cause the approval process to start over.
1. With GitLab we have projects and groups where projects inherit policies from the group. Competitors cannot structure policies as flexibly as GitLab, an important feature for enterprise users. Examples include group level runners.
1. Compliant pipelines allow GitLab users to select their compliance framework (e.g. PCI, HIPPA, etc) and those policies are used - and the developer cannot disable it (due to RBAC)

## Key Value by tier

### Free and Premium

**Key Compliance features with Free/Premium:**

- [Security Approvals in Merge Requests](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/settings.html#security-approvals-in-merge-requests) (available in Premium)

In addition, some security scanning is available in the Free tier:

- [Static Application Security Testing](https://docs.gitlab.com/ee/user/application_security/sast/) - check for potential security issues by evaluating static code.
- [Secrets Detection](https://docs.gitlab.com/ee/user/application_security/secret_detection/) - avoid exposing secrets and credentials for potential exploit.
Note: The Free tier does not include providing these results in vulnerability reports and dashboards. Raw findings are provided.

### Ultimate

**Key Compliance features with Ultimate:**

- [Compliant workflows and Compliant pipelines](https://docs.gitlab.com/ee/user/project/settings/index.html#compliance-pipeline-configuration) - projects are assigned a compliance framework and policies are enforced accordingly. This is a key capability for winning compliance opportunities!
- [Compliance Dashboard](https://docs.gitlab.com/ee/user/compliance/compliance_center/) - See if merge requests were approved, and by whom.
- Fuzz testing, called out by the 2021 US Executive Order to Improve Cybersecurity
- [License Compliance](https://docs.gitlab.com/ee/user/compliance/license_approval_policies.html) - identify the presence of new software licenses included in your project and track project dependencies. Approve or deny the inclusion of a specific license.

In addition, more security scanners are available, along with Vulnerability management and security dashboard. See the [DevSecOps solution](https://about.gitlab.com/solutions/security-compliance/) for details.

| Feature / Scenario                                  |    Free   |    Premium  | Ultimate | Product Analytics | Notes                      |
| --------------------------------------------------- | :-------: | :-------: | :------: | :---------------: | :------------------------- |
| Compliant Pipelines |           |           |    X     |                   |                            |
| Compliance Dashboard |           |           |    X     |                   |                            |
| [License Compliance](https://docs.gitlab.com/ee/user/compliance/license_scanning_of_cyclonedx_files/)                                                  |           |           |    X     | user_license_management_jobs  | |
| [Merge Request Approval Flow / Rules](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/index.html)                 |           |     X     |    X     |   counts.merged_merge_requests_using_approval_rules            |                            |
| Protected Environments                              |           |     X     |    X     |                   |                            |
| [SAST (Static Application Security Testing)](https://docs.gitlab.com/ee/user/application_security/sast/)                              |     X     |     X     |    X     | user_sast_jobs                | |
| [Secret Detection](https://docs.gitlab.com/ee/user/application_security/secret_detection/)                                            |     X     |     X     |    X     | user_secret_detection_jobs    | |
| [Container Scanning](https://docs.gitlab.com/ee/user/application_security/container_scanning/)                                        |           |           |    X     | user_container_scanning_jobs  | |
| [Dependency Scanning](https://docs.gitlab.com/ee/user/application_security/dependency_scanning/)                                      |           |           |    X     | user_dependency_scanning_jobs | |
| [API Fuzzing](https://docs.gitlab.com/ee/user/application_security/api_fuzzing/)                                                      |           |           |    X     | user_api_fuzzing_jobs, user_api_fuzzing_dnd_jobs on self-managed | |
| [Coverage Fuzzing](https://docs.gitlab.com/ee/user/application_security/coverage_fuzzing/)                                            |          |        |    X     | user_coverage_fuzzing_jobs    | |
| [Security Approvals](https://docs.gitlab.com/ee/user/application_security/#security-approvals-in-merge-requests)                      |           |           |    X     |                   |                            |

The table includes free/community and paid tiers associated with GitLab's self-managed and cloud offering.

## Technology Partnerships

We partner with key industry vendors to extend GitLab's ability to address customer needs and fulfil the market requirements.

- [Hashicorp Vault](https://about.gitlab.com/partners/technology-partners/hashicorp/) for key management
- IaC, identity and other partnerships are [under security](https://about.gitlab.com/partners/technology-partners/#security)

If you or your customer has a third party they'd like to see integrated into GitLab, send them to the [partner integration page](https://about.gitlab.com/partners/technology-partners/integrate/) for instructions.

## Selling the Software Compliance Solution

## Ideal customer profile

Many great opportunities will not entirely fit this ideal profile. An ideal customer profile is the description of our "perfect" customer (company, not individual or end user). The profile takes into consideration firmographic, environmental, and additional factors to develop our focus list of highest value accounts.

| Attribute | Enterprise | Mid-market | SMB |
| ------ | ------ | ------ | ------ |
| DevOps maturity | adopted DevOps for at least several projects or departments | adopted DevOps for at least several projects or departments | adopting DevOps for at least half of their projects |
| Tool complexity | complex tool chains hinder end-to-end visibility | complex tool chains hinder end-to-end visibility | wanting to avoid a complex tool chain |
| CI pipeline control | Integrated security into DevOps but lacks pipeline consistency across projects | Integrated security into DevOps but lacks pipeline consistency across projects | Integrated security into DevOps but lacks pipeline consistency across projects |
| Cloud native | using Docker and Kubernetes, APIs, but not confident in th security of these | using Docker and Kubernetes, APIs, but not confident in th security of these | using Docker and Kubernetes, APIs, but not confident in th security of these |
| Public sector or vendor who sells to public sector | Concerned about Executive Order on Cybersecurity and potential new regulations | Concerned about Executive Order on Cybersecurity and potential new regulations | Concerned about Executive Order on Cybersecurity and potential new regulations |
| General Software supply chain security concern | non-specific concerns about not becoming a victim | non-specific concerns about not becoming a victim  | non-specific concerns about not becoming a victim |
| Regulated industry | Strict change control means missed change windows when compliance issues are found late in the process | Strict change control means missed change windows when compliance issues are found late in the process | Strict change control means missed change windows when compliance issues are found late in the process |

## Discovery Questions

### Current state - where's the pain?

**1. Simplicity**

- How difficult is your compliance/audit process? (time, people, risk)
- Does it take away time from your developers?
- Are compliance issues found late in the software development/deployment process resulting in rework?

**2. Visibility**

- Do you have challenges between setting/automating policies and ensuring they were followed?
- Do you have visibility/traceability into audit events (e.g. access control, reporting, and change logs, etc.)?
- Can you see who made changes not only to the application code, but also to CI pipelines, configurations, templates, etc?
- Do you know how often policy exceptions are granted? How difficult is it to evaluate compliance with policies and drift/exceptions?

**3. Control**

- Are you able to ensure that policies are followed and not changed or ignored by developers or others?
- Is consistency a problem for security and compliance use? Are most projects secured a bit differently every time?
- If your software development does not comply with regulatory standards, what is the potential cost/risk?

**4. For public sector and regulated industries only**

- Do you often miss change management windows and have to reinitiate the change management process?

**5. Related security questions**

- What percentage of code are you currently scanning? Are there holes where an attacker could more easily enter and then traverse laterally? How much more would it cost you to scan all of your code?
- If you are using containers, orchestrators, and/or microservices/API's, how are you scanning them for vulnerabilities and monitoring them during production?
- How much of the security team's time is spent tracking vulnerabilities, triaging them, and following up to see that they were remediated?

#### Before state and negative consquences

| Before state | Negative consequences |
| ------ | ------ |
| 1. A complex tool chain makes it difficult to see who changed what, where, when across the entire SDLC | Audits are difficult and in the event of a breach, it could take days/weeks/months to identify root cause |
| 2. Audits are difficult and time consuming to show controls that cross multiple systems | A lack of traceability may require manual or other supplemental processes that are inefficient. Or you simply cannot show controls consistently across systems for a given project, opening yourself to risk. |
| 3. Non-compliance may be discovered right before production. | Rework and lost velocity. For Regulated industries, must restart change management proecess |
| 4. Policies are set but developers and other users can simply turn them off | This opens the door for security and compliance problems, including insider attacks. The lack of control lengthens audit efforts. |
| 5. Inconsistent pipelines across projects | Every project must be inspected uniquely for compliance. |

### Future state - what's the desired state?

- Do you have targets in mind for how long it should take you to audit a project? What would that process look like?
- If you could ensure projects use a pipeline that is compliant with industry regulations, how much time/effort would that save you?
- If you could discover areas of noncompliance earlier, while the developer is still iterating on their code, how much rework would that eliminate or how would velocity be improved?
- If you could demonstrate automated controls for compliance, how would that simplify audits?

**For public sector and regulated industries only**

- If you could meet change management windows by having the compliance problems identified and worked out before the change window began, what would that save you in terms of rework? improved velocity?

#### After scenarios and PBOs

| After scenarios | Positive business outcomes |
| ------ | ------ |
| 1. End-to-end visibility of who changed what, where, when for application code, its dependencies, its IaC | Easier audits, less risk of insider threats, compromises more quickly discovered |
| 2. End-to-end consistent execution of policies across projects | Simplified audits and less risk |
| 3. Software development that is compliant with industry regulations | less risk of fines and other noncompliance consequences |
| 4. Discovery of compliance issues early, while developer is still iterating on the code | Less rework and therefore less developer time. For regulated industries, fewer missed change management windows. Improved velocity. |

## Required capabilities

| Required capability | metrics |
| ------ | ------ |
| 1. End-to-end visibility of who changed what, where, when for application code, its dependencies, its IaC | time to identify root cause |
| 2. Policy enforcement for the entire SDLC from one console | time spent tracking exceptions and integrating policies between systems |
| 3. One role-based access control for the entire SDLC | time spent in work-arounds |
| 4. Inherited policies from instance to group to project | time spent setting up and reviewing compliance for individual projects |
| 5. Reporting of compliance concerns to the developer in the MR | time spent in rework late in the SDLC |

## Overcoming Objections

- **We can't afford to replace our current DevOps tools** - We can meet you where you are and gradually work toward a smaller set of tools. Any tools eliminated is one less place to map and monitor compliance and security policies.
- **We get by with our current processes** - If you were breached, could you quickly identify potential sources of compromise? What is that worth to you?
- Others?

## Proof Points - customers

### Quotes and reviews

### Customer Case Studies

**[Glympse](https://about.gitlab.com/customers/glympse/)**

- **Problem** A complex developer tech stack with over 20 distinct tools that was hard to maintain and manage. Teams spent several hours a week keeping tools running rather than shipping innovation to their app.
- **Solution:** GitLab Ultimate (SCM, CI, DevSecOps)
- **Results: ~20 tools consolidated into GitLab and remediated security issues faster than any other company in their Security Auditor's experience.
- **Sales Segment:** SMB

**[Chorus](https://about.gitlab.com/customers/chorus/)**

- **Problem:** The founders of Chorus built the tool from the beginning using GitLab.
- **Solution:** GitLab Ultimate (SCM, CI, DevSecOps)
- **Results:** **6 week production cycles reduced to 1 week** During a recent audit for SOC2 compliance, the auditors said that Chorus had the fastest auditing process they have seen and most of that is due to the capabilities of GitLab.
- **Sales Segment:** SMB

### References to help you close

[SFDC report of referenceable secure customers](https://gitlab.my.salesforce.com/a6l4M000000kDw2) Note: Sales team members should have access to this report. If you do not have access, reach out to the [customer reference team](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/customer-advocacy/#which-customer-reference-team-member-should-i-contact) for assistance.

## Assets to share

### Software compliance assets

- Blog: [How a DevOps platform can help against supply chain attacks](https://about.gitlab.com/blog/2021/04/28/devops-platform-supply-chain-attacks/)
- Blog: [Compliance made easy with GitLab](https://about.gitlab.com/blog/2020/07/02/compliance-made-easy/)
- Blog: [Three things you might not know about GitLab security](https://about.gitlab.com/blog/2021/11/23/three-things-you-might-not-know-about-gitlab-security/)
- Article: [CI, the new frontier for security pros](https://thenewstack.io/continuous-integration-the-new-frontier-for-security-pros/)
- Commit 2021: [Enhance your compliance with policy based CI/CD](https://learn.gitlab.com/commit-2021/enhance-your-complia?lx=UqDHIY)
- Webinar: [From DevOps to DevSecOps: Automate your security tests with CI](https://www.youtube.com/watch?v=fTFsbGyl6o0)
- Webinar: [Secure your software supply chain](https://www.youtube.com/watch?v=dZfS4Wt5ZRE)
- Demo: [Compliant pipelines](https://www.youtube.com/watch?v=jKA_e_jimoI)
- Demo: [Manage your application dependencies with GitLab](https://youtu.be/scNS4UuPvLI)
- eBook: [Guide to Securing your Software Supply Chain](https://learn.gitlab.com/devsecops-aware/software-supply-chain-security-ebook)

### Customer Facing Slides

- [Continuous Software Compliance](https://docs.google.com/presentation/d/1VR36MFEYzAd2XpITpvIdPrXlAhM0QRKzJ_OihAjVBbc/edit#slide=id.gcf27821480_2_291) solution slides - feedback welcomed as comments in the deck.

### Additional Documentation Links

- [GitLab Security Compliance Controls](/handbook/security/security-assurance/security-compliance/sec-controls/)
- [GitLab Security Practices](/handbook/security/)
- [Security Planning](/handbook/security/planning/)

### Enablement and Training

The following will link to enablement and training videos and content.

- [Handling Security Audits](https://www.youtube.com/watch?v=ziIJIec4w0g)
- [Adding Security to your pipelines](https://www.youtube.com/watch?v=Fd5DhebtScg&t=3s)

### Professional Service Offers

GitLab offers a [variety of pre-packaged and custom services](https://about.gitlab.com/services/) for our customers and partners. The following are service offers specific to this solution. For additional services, see the [full service catalog](https://about.gitlab.com/services/catalog/).

- [DevOps Fundamentals Training](https://university.gitlab.com/courses/gitlab-devops-fundamentals) (all stages of the DevOps lifecycle)
- [GitLab CI/CD Training](https://university.gitlab.com/pages/ci-cd-training/)
- [Integration Services](https://about.gitlab.com/services/catalog/ )

## Resources

### Clickthrough & Live Demos

- [All Marketing Click Through Demos](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/demo/#click-throughs)
- [All Marketing Live Demos](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/demo/#live-instructions)

### Roadmap

- [Manage Direction](https://about.gitlab.com/direction/foundations/)

### Technical Resources for Solution Architects - TBD

### Buyer's Journey

[Inventory of key assets](https://docs.google.com/spreadsheets/d/15-yai90Ol7k4D2exHXqHXtFastR6FcE6HABD_GisAl8/edit#gid=0) in the buyer's Journey
