---
title: "Threat Modeling"
description: "The threat modeling process, and the framework used by the GitLab Security Team."
---

Threat modeling is the process of taking established or new procedures, and then assessing it for potential risks. For most tech companies, this usually involves code and coding changes. However this process can be adapted to any situation where there is a potential risk, and is something that many of us do every day. Choosing the longer well-lit walk to your car as opposed to the short cut through the darkened alley. Looking both ways before crossing the street. This is something we often do by instinct.

Within the context of GitLab, there are different risks we evaluate. Will my code change introduce a security vulnerability into the product? Will a radical new company policy being introduced create outside criticism and damage GitLab's reputation? When was the last time we evaluated this existing code library for vulnerabilities? What are the potential pitfalls our new sales campaign might face when moving into new markets? These are risks we deal with all of the time, just like every other company.

## Getting Started

Here are a few resources to help get you started in threat modeling:

We've developed an issue template available [here](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/threat-models/-/issues/new?issuable_template=Threat%20Model) (private link) that you can use to create an issue documenting your threat model. It's required that Engineering provide technical documentation when creating a threat model issue. We also request that the application decomposition, use case, external entrypoints, trust levels, data flow diagram as well as the previous security issues (if any) sections are filled out.

The basis of our threat modeling is modeled after [PASTA](https://en.wikipedia.org/wiki/Threat_model#P.A.S.T.A.) It should be noted that a full PASTA threat model is usually not required as it involves 7 steps, and in many cases only the steps 4, 5, and 6 are needed. To make it even easier, you can use [STRIDE](https://en.wikipedia.org/wiki/STRIDE_(security)) to help define the threats.

Therefore we've included a beginner-friendly [how-to guide to threat modeling](howto/) which you should read if you're new to threat modeling. It includes a bit more detail about using STRIDE. If you need additional help, please ping the AppSec team or reach out in the #sec-appsec Slack channel.

### Samples of PASTA Evaluations

Here is a [real sample of an evaluation](https://gitlab.com/gitlab-com/gl-security/security-research/gitlab-standalone-instance) of the install of a GitLab standalone instance in a hostile environment.

More samples will be added later.

## Threat Modeling Within GitLab

The most common use of threat modeling within a tech company like GitLab is our code base. The Security Team has developed a threat modeling "framework" for Engineering with the following in mind:

- Establish a framework that is easy to understand and follow
- The framework should enhance DevSecOps, and introduce minimal overhead
- The framework should be based upon an existing framework with an established track record, if possible, as that may be more familiar to current GitLab team members
- As the Security Team helps with the popular and successful Hackerone bug bounty program, handles compliance needs, and deals with security threats against our assets, having a framework that would allow us to provide "feedback" into the process of analyzing risk is extremely important in helping to determine actual outcomes
- The framework should be flexible enough that it can be used outside of Engineering by other GitLab teams

The purpose of the GitLab Threat Modeling Process is to provide a starting point for future [AppSec Code Reviews](/handbook/security/product-security/application-security/appsec-reviews/). Threat models are based on the conceptual architecture of the application and only utilize code to substantiate findings when possible.

One might ask why we are doing this. Our reasoning involves these important points:

- The Security Team already performs risk analysis and assessments constantly, this gives us a common language
- A common language allows for better communications between Engineering groups, particularly in an all-remote company that makes use of asynchronous communications
- When dealing with partners, customers, and contributors, we have a common point of reference we can use for discussion
- Being a secure company with a mature and robust code base is our goal, and this helps with that effort
- We already have a large code base - instead of trying to rewrite and re-analyze everything from scratch, threat modeling gives us a tool to evaluate new changes to help mitigate future risks. As we triage security issues or introduce new security-related features, we have a tool that will allow us to work off some of the organization and technical debt associated with security and risk is easier-to-digest pieces.

*The overall goal is not to create a rigid structure that must be strictly followed, but an adaptive tool that proactively helps uncover security risks before they occur and even chart out solutions based upon the likelihood of the risk.*

After evaluation of several popular frameworks, we elected to use the [PASTA](https://www.wiley.com/en-us/Risk+Centric+Threat+Modeling%3A+Process+for+Attack+Simulation+and+Threat+Analysis-p-9780470500965#) framework as a base, and with a few minor tweaks for GitLab's environment, we've completed the framework. An overview from the author of the original book can be found [here](https://www.youtube.com/watch?v=hHIgW8ZUi4A).

*We still welcome changes to the framework and deem it to be as much of a living document as the rest of the handbook.*

### The Framework

Our base framework is PASTA. PASTA is an acronym that stands for Process for Attack Simulation and Threat Analysis. It is a 7-step risk-based threat modeling framework.

There are several other threat modeling frameworks, however others were deemed either too focused on coding or too focused on attacks. PASTA has a much broader range and can easily scale up or scale down as needed, and most other threat modeling frameworks can map into it.

Other threat modeling frameworks examined:

- [STRIDE](https://en.wikipedia.org/wiki/STRIDE_(security)). This has been used by Microsoft, and is primarily focused on threats themselves, and tends to lean toward known/existing threats. As they outgrew STRIDE, they developed [SDL](https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool) (that runs on Microsoft Windows) that allows them to define templates and evaluate threats. We do not run Windows, nor does our focus involve the existing templates they have designed for it. As a part of the overall development process within Microsoft, it is still more "code-centric" that we need.
- Evil Personas. The focus of Evil Personas similar to regular Personas, but the emphasis is on threat actors. it does not cover code-centric projects, just perceived threats. Useful, but limited as it assumes a threat is a person or group of people. Most "persona" scenarios are usually built in or added onto other threat models, refer to [this paper on Attack Personas](https://www.cs.ox.ac.uk/files/4007/PID1871807.pdf) for a reference to the more aggressive side of personas in threat modeling.
- Playing cards. There are several versions of this including [Elevation of Privilege](https://github.com/adamshostack/eop) Extremely useful tool, but better designed for in-person collaborations, and is more aligned with STRIDE in mind. Similar to Attack Trees, it focuses more on the attack end in reference to a chunk of infrastructure or code. This would be a fun thing to do at a future Contribute, but it does not scale well for a Zoom-based culture.
- [Attack Trees](https://en.wikipedia.org/wiki/Attack_tree). The focus is on attacks only, as a process to map flaws in existing code and systems.

PASTA has a number of advantages for GitLab over other frameworks:

- Risk centric - mitigating what matters
- Evidence-based threat modeling
  - Harvest threat intel to support threat motives
  - Leverage threat data to support prior threat patterns
- Focus on probability of attack, likelihood, inherent risk, impact of compromise
- Collaborative
- Prioritization should define when and what apps to apply the threat model, and be apart of the threat model process itself

PASTA has the advantage in that it can be adopted from code-based scenarios to infrastructure scenarios easily. It can be adapted to cover non-traditional threats, such as bad PR due to an executive's social media posting or the company's selling of the GitLab product to a controversial organization. It can even be used to map in incident response scenarios, as it allows for threat reinforcement from threat intel sources including logs, intel services, and even previous incidents.

## PASTA Stages

There are seven stages to PASTA, here are our definitions. Note that while many of the examples are code-centric, these can be evolved over time to cover non-coding scenarios, such as third-party SaaS application approval, sales strategies and plan into new territories, and so on.

### Stage I - Define objectives

This helps set the tone for the project or assessment. It considers the following:

- Business objectives. State the business objective of the project. This can be the purpose of the code, the change to the infrastructure, the goal of the marketing campaign, whatever the objective is.
- Security, Compliance, and Legal requirements. These are both guidelines and limits in a broad sense. For example, the licensing for a proposed third party application should be in order, the privacy policy of the new SaaS application being considered meets muster, or the new code does not require lowering security standards.
- Business impact analysis. This should include impact to mission and business processes, recovery processes, budget impact, and system resource requirements.
- Operational impact. This should include impact to existing processes already in use by operational personnel. For example, extra logging could be introduced that might impact interpretation of system events, increase the number of steps for future changes, or alter documented procedures for advanced troubleshooting.

### Stage II - Define technical scope

This does not have to be "tech" per se, but should include project boundaries.

- Boundaries of technical environment. These are the boundaries related to the project itself. This should include the type of data (by classification) that will be touched with this project.
- Infrastructure, application, software dependencies. All of these need to be documented, including the level of impact. For example, if the project requires an upgrade to a subsystem's library and the subsystem has access read-only access to RED data, this needs to be documented as it could impact other users of the subsystem as well as introduce a potential attack vector to RED data.

### Stage III - Application Decomposition

This allows mapping of what is important to what is in scope.

- Identify use cases, define application entry points and trust levels even if they are to remain unchanged as a result of the project.
- Identify actors, assets, services, roles, and data sources.
- Document data movement (in motion, at rest) via Data Flow Diagramming. Show trust boundaries, including existing as well as proposed changes.
- Document all data touched and its classification.

### Stage IV - Threat Analysis

This is where we mainly look to document relevant threats and threat patterns to the data we have gathered up until now.

- Probabilistic attack scenario analysis, where any scenario that could happen is at least listed.
- Regression analysis on security events, where we example events that touch on some of the same or similar components.
- Threat intel correlation, by taking data from logs, Hackerone reports, incidents, and other sources that can be used to indicate an attack scenario.

### Stage V - Vulnerability and weakness analysis

This is were we examine the threats, ranking them and assessing their likelihood.

- Examine existing vulnerability reports and issues tracking.
- Threat to existing vulnerability mapping using threat trees.
- Design Flaw analysis using use and abuse cases.
- Scorings (CVSS) and Enumeration (CWE/CVE).
- Impacted systems, sub-systems, data. Are we adding to or altering something that has a history of exploitation. Is the current state vulnerable, and will this change potentially be influenced by or change that assessment.

### Stage VI - Attack modeling

We go through the threats and turn them into attacks, by examining the attack surface before and after our proposed changes.

- Attack surface analysis for the impacted components.
- Attack tree development. This is where something like MITRE ATT&CK can assist.
- Attack --> Vulnerability --> Exploit analysis using attack trees.
- Summarize the impact and explain each risk.

### Stage VII - Risk and Impact Analysis

This covers the development of the rationale for mitigation based upon residual risk.

- Qualify and quantify the business impact.
- Countermeasure identification and residual impact.
- Identify risk mitigation strategies. Effectiveness of mitigation(s) vs cost to implement mitigation.
- Residual benefits, as the implementation of a change to single component as a mitigation effort could mean increased security for other systems that access that component.

## Three Tiered Approach

To help with implementing and using the PASTA framework, we can use a three-tiered approach. This approach is as follows:

### Blind threat model

GitLab's best practices applied to components of the project.

- Maps key goals of app or service and correlates to clear technical standards for architecture, hardening of server/service, app framework, containers, etc.
- Best practices per component. For example, TLS settings that are set to a GitLab standard, noting if our own standard is higher or lower than industry best practices.
- Best practices for coding are applied here as well, the "Sec" part of DevSecOps and our integration of this into CI/CD.
- SAST/DAST policies and scopes. We can "eat our own dogfood" to improve the quality of the changes we implement.

*Applies Stage I & Stage II of PASTA*

### Evidence Driven threat model

Proof of a threat via numerous indicators as opposed to just theory or conjecture.

- Integrate threat log data analysis.
- Focus on logs that support attack vector with the greatest motives (e.g. TLS MITM vs Injection-based attacks).
- Correlate threat intel for foreseeing trends of attacks for target applications that are related to project components.

*Applies Stage III, IV, V of PASTA*

### Full Risk Based Threat Model

- Statistical/probabilistic analysis on threat data & attack effectiveness
- Consider non-traditional threat vectors
- This includes threat intel, H1 trends, existing logs
- Substantiate the threats that are defined with real data

*Applies all stages of PASTA*

## Additional Resources

Here are some helpful links.

- [Excerpt from a Security Department "Show and Tell" discussing Threat Modeling](https://www.youtube.com/watch?v=bySfiuk5iHg).
- [Blog post](https://michenriksen.com/blog/drawio-for-threat-modeling/) by [Michael Henriksen](https://gitlab.com/mhenriksen) that talks about using Draw.io [available via diagrams.net](https://www.drawio.com/) to construct diagrams and flowcharts, and using them during threat modeling. Included is a [link](https://github.com/michenriksen/drawio-threatmodeling) to useful libraries for threat model diagrams.
- In addition to [Elevation of Privilege](https://www.microsoft.com/en-us/download/details.aspx?id=20303) there is also [OWASP Cornucopia](https://owasp.org/www-project-cornucopia/), which leans more towards web-based applications.
- [MITRE ATT&CK](https://attack.mitre.org/). This is not a framework used for threat modeling per se, but it could be adapted to and mapped to an existing threat modeling framework.
