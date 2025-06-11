---
title: "Deliver Secure Applications"
---
## Overview

Shipping applications at high speed must not introduce new security risks or vulnerabilities.

### Challenge: Delivering secure apps (staying out of headlines) and meeting compliance requirements

1. What challenges do I (VP Apps) face?
   1. **Security slows down the velocity of the SDLC and blocks application delivery.** The traditional incumbent solutions are cumbersome, require security to run them and interpret the results. We wait for the resource-constrained security team to run the scans and some of the scans may take days (or not complete at all). By the time a developer gets the results, they are on to another project. The security results often lack sufficient insight to tell a developer where to find the problem (line of code) or how to remediate it.
   1. **The exploding growth of third-party code - Do I know what are we using?** How secure is it? How do I work off the technical debt of already-used code with newfound vulnerabilities? Are there some libraries that I should prioritize for upgrade over others?
   1. **Containers solve cloud issues and legacy app issues by making apps transportable** (eliminating cloud and hardware vendor lock-in). But how to secure containers? No clear/leading solutions out there yet (Risk to my career if I make the wrong choice) and security team is unsure too. Start-up solutions do not scale.
   1. (Note: **CISO challenges are**
      1. a) Those renegade DevOps people are taking risks without understanding the consequences!
      1. b) How do I secure a rapidly evolving architecture with diminishing perimeters, especially since my background is likely network security
      1. c) How do I train developers to avoid creating security vulns?
1. What does it look like today (problems faced)?
   1. **Vulnerabilities often discovered in production** causing project delays because security finds issues just before go-live
   1. **Friction in the workflow causes rework and wastes time** understanding context of a vuln reported today that was created a week ago.
   1. **Business improvements (a VP App goal) take a back seat to fixing security vulns** (not my goal - this is a goal of the CISO) creating adversaries between groups.
   1. **Dependency backlog continues to grow** (technical debt)
   1. **Unable to deploy containers and cloud as much/as fast as needed** due to security concerns. (Note: we should test this assumption)
1. What are the negative consequences to the business?
   1. **Risk of public disclosure** of being hacked hurts our brand and our ability to serve our customers.  Customers won't trust us if our systems are insecure.
   1. **It's extremely expensive to fix incidents and security issues in production.**
   1. **The business takes on risk of cyber attack** - Because business improvements are the goal of app dev, they use more third-party code and worry about the technical debt and risks later (that is for Security to figure out).
   1. **Concern for risk reduces business agility** that containers could enable. Containers are used broadly in POCs, but not widely adopted in production yet.
1. What does it look like if a magic wand were to solve it today?
   1. **Application security is a natural byproduct of the dev workflow.**
   1. **Dev fixes their own vulns** without waiting for security. Security only deals with anomalies/exceptions. Security becomes a helper rather than a hindrance.
   1. **All of our code (custom and third party) is tested every time anything changes.**
   1. **Less time spent remediating security flaws.**
   1. **All third party code would be identifiable,** with understood risks. The technical debt would be prioritized by risk including severity and scope of use (potential business impact).
   1. **Containers would be scanned for vulnerabilities** and so used more with better risk transparency.
1. What would be the positive outcomes for the business?
   1. We're able to **increase our velocity, reduce cycle time, and deliver greater business agility**.
   1. **Less risk - Stay out of headlines; keep my job.**
   1. We're **more efficient** because we fix security issues early in Dev, they don't get to production.
   1. We're **confident that our third party code is current** and vulnerabilities are either removed or known risk is accepted.
   1. More **confident use of containers** allows flexibility to reduce infrastructure costs.
   1. Note: these are important to CISO, not to App Dev:
      1. **Greater transparency and understanding** of risk (important to CISO, not to App Dev)
      1. **Better remediation plan** (important to CISO, not to App Dev)
      1. **Fewer vulns after dev** (important to CISO, not to App Dev)
1. What capabilities are required to make this happen?
   1. **Need developers to own the security** of their code.
      1. Broad security scans done on all code changes before it leaves the developer's hands.
      1. Help the developer see their mistakes and how to avoid repeating.
      1. The ability for developers (who write the code) to self-identify vulns and understand what they are and how to remediate security problems earlier in SDLC. (empower the developer)
   1. **Security workflow for developers**
      1. within the developer's control to identify and remediate without waiting on security
      1. more easily understood results (don't have to be a security pro to interpret results)
      1. Less context-switching, saves developers' time
      1. Instant feedback helps dev learn secure coding practices
      1. Prioritize/resolve on security exceptions where dev needs help - prioritize security to help fix the hard problems and leave the rest to dev.
   1. **Visibility into the security of 3rd party code** and containers and all related components of the application, infrastructure, etc. Confidence that their risk is understood and eliminated where possible.
   1. For the CISO: Overall view for security of overall risk from applications
1. How would you measure success (metrics)
   1.**Number of hrs dev spends removing vulns** (immediate should be much more efficient)
   1. **Release cadence**
   1. Burn down of third party **technical debt from security flaws**
   1. **Fewer vulnerabilities in production code**
   1. **Missed deadlines due to security blockers**
   1. number of vulns after dev (important to CISO, not to App Dev)
1. How does GitLab help solve the problem?
   1. **Automation of security testing, including SAST, DAST,** dependencies, containers and license mgmt of third party code, before the code leaves the developer's hands. DAST scanning is done before code is committed via the GitLab review app feature.
   1. **Single SDLC application embeds security testing into developer's natural workflow** with understandable results reported to the developer with remediation advice and line-of-code detail enabling them to remove the vulnerability before their code is merged with other code. (note: for CISO, this results in far fewer vulns for security team to manage.)
   1. **Security Dashboard** helps security focus better on exceptions where dev needs help to prioritize/resolve.
1. Why are we better than the competition?
   1. **Single app for the SDLC application to avoid stitching together** and maintaining a DevOps toolchain that must integrate with multiple security tools (efficiency for both dev and app sec teams) - no integration to support/maintain, cost, skill sets.
   1. **SAST, DAST, Container scanning, dependency scanning and license mgmt ALL done IN the MR pipeline for EVERY code commit**, presented to the developer. No other app sec tool can perform a DAST scan before the code is committed. (The closest capability would be IAST which is a separate tool purchase.)
1. What are the proof points that prove this?
   1. **Analyst reports** - Forrester SCA New Tech rpt, hoping for a mention in Gartner AppSec MQ (Feb) and inclusion in the Hype Cycle (May?)
   1. Industry Awards - none
   1. Customer stories/case studies - CISCO, TrueBlue, BI Worldwide using and may be a reference (agreed to Forrester SCA WAVE)
   1. Technical benchmark vs Fortify (WIP with NAIC) - coming soon.
1. Related content
   1. Early funnel/Awareness/interest
      1. DevOps page: [DevSecOps Solution page](https://about.gitlab.com/solutions/security-compliance/)
      1. [Security deck](https://docs.google.com/presentation/d/1z4v6v_lP7BHCP2jfRJ9bK_XoUgQ9XW01X2ZhQcon8bY/edit#slide=id.g2823c3f9ca_0_9)
      1. Blog - [What our summit in South Africa taught me about cybersecurity](https://about.gitlab.com/blog/2018/09/11/what-south-africa-taught-me-about-cybersecurity/)
      1. Blog - Container security challenges (coming soon)
      1. [Compliance landing page](https://about.gitlab.com/solutions/compliance/)
      1. [Financial Services industry](https://about.gitlab.com/solutions/finance/)
      1. [Security 101 webinar](https://youtu.be/VVzSToclmuk?t=2m33s)
   1. Middle funnel/Interest/POC
      1. [Video interview with Alex](https://www.youtube.com/watch?v=k4vEJnGYy84)
      1. **Whitepaper: Seismic shift…**
      1. [Ungated](https://about.gitlab.com/resources/downloads/gitlab-seismic-shift-in-application-security-whitepaper.pdf)( internal use)
      1. [Gated](https://about.gitlab.com/resources/whitepaper-seismic-shift-application-security/)
      1. Blog - [How can teams secure applications at DevOps speed? Security Dashboards are here to help.](https://about.gitlab.com/blog/2018/09/14/inside-gitlab-security-dashboards/)
      1. [Comparisons](https://about.gitlab.com/why-gitlab/)
