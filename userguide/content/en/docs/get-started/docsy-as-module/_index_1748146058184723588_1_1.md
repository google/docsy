---
title: 'Corporate Security (CorpSec) Support'
---

As GitLab has grown organically, several departments and functional groups have their own System Administrators ("Tech Stack App/System Owners") that handle day-to-day management of the tech stack applications that are specific to that department or functional group, within the framework of organization-wide compliance, infrastructure, and security best practices. Each [tech stack application](/handbook/business-technology/tech-stack-applications/) at GitLab has a System Owner that is the DRI for handling the implementation and day-to-day operational support for the team members that utilize that application (in their department or functional group). This has an added benefit of preventing the traditional IT department from being a bottleneck and allows each department to self-service as part of GitLab's [efficiency for the right group](/handbook/values/#efficiency-for-the-right-group) subvalue.

The Corporate Security team provides tech support helpdesk services for team members and temporary service providers (aka contractors, vendors, etc.), and configuration management engineering for the company-wide [systems that we manage](/handbook/security/corporate/systems).

## Corporate Security Support

### Tier 1. Self Service

As part of our [self-service and self-learning](/handbook/values/#self-service-and-self-learning) efficiency value, we encourage you to check out the [security self-service guides and systems documentation](/handbook/security/corporate/systems) to see if you can find the answer to your question.

If you can't find what you're looking for, please ask in `#it_help`.

#### Future State

- (Internal) Why: [Direction and Strategy](https://internal.gitlab.com/handbook/security/corporate/direction)
- (Internal) What: [Initiatives and Projects](https://internal.gitlab.com/handbook/security/corporate/projects)
- (Internal) When: [OKRs and Roadmap](https://internal.gitlab.com/handbook/security/corporate/roadmap)
- (Internal) How: [CorpSec Issue Tracker](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues)
- (Public) Who: [Team Functions](/handbook/security/corporate/#team-functions) and [Team Directory](/handbook/security/corporate/#team-directory)

#### Current State

- [Team Directory](/handbook/security/corporate/#team-directory)
- **👀 New Team Members:** [Security Onboarding 101 Guide](/handbook/security/corporate/support/onboarding)
- **👀 Existing Team Members:** [Corporate Security Systems Documentation, Access Requests, and Self Service Guides](/handbook/security/corporate/systems)
- **👷 Administration Docs:** (Internal) [Systems Handbook (Configuration and Runbooks)](https://handbook.gitlab.systems)
- 👷 [Engineering](/handbook/security/corporate/engineering)
  - [Device Trust Engineering](/handbook/security/corporate/engineering/device-trust)
  - [Identity Engineering](/handbook/security/corporate/engineering/identity)
  - [Infrastructure Engineering](/handbook/security/corporate/engineering/infrastructure)
  - [Platform Engineering (Self-Service Tool Software Development)](/handbook/security/corporate/engineering/platform)
  - [SaaS Engineering (Corporate Tech Stack Applications and Platforms)](/handbook/security/corporate/saas/)
- 💻 [Services](/handbook/security/corporate/services)
  - [Access Requests](/handbook/security/corporate/services/access-requests)
    - **Need Access?** See the [Systems](/handbook/security/corporate/sysetms) page for instructions for each specific system.
    - [External Collaborators (Auditors, Customers, Partners, Vendors)](/handbook/security/corporate/services/external-collaborators)
    - [Infrastructure Provisioning (AWS, Azure, GCP, Sandbox Cloud)](/handbook/security/corporate/services/infrastructure)
    - [Okta Applications](/handbook/security/corporate/systems/okta/ar)
    - [Service Accounts](/handbook/security/corporate/services/service-accounts)
    - [Temporary Service Providers (Contractor Users)](/handbook/security/corporate/services/temporary-users)
  - [Change Management](/handbook/security/corporate/services/change-management)
  - [Email](/handbook/security/corporate/services/email)
  - Device Management
    - [Cell Phones and Mobile Devices](/handbook/security/corporate/services/phones)
    - [Laptops](/handbook/security/corporate/services/laptops)
      - **New Laptops**
        - 👀 [Onboarding Hardware Ordering Guide](/handbook/security/corporate/services/laptops/onboarding)
        - 👀 [Onboarding Software Setup Guide](/handbook/security/corporate/support/onboarding)
        - 👀 [Apple macOS Setup Guide](/handbook/security/corporate/systems/macos/guides/setup)
        - [Linux Setup Guide](/handbook/security/corporate/systems/linux)
      - **Laptop Replacement and Repairs**
        - [Refresh/Replace Guide](/handbook/security/corporate/services/laptops/refresh)
        - [Repair Guide](/handbook/security/corporate/services/laptops/)
      - **Old Laptops**
        - [Wipe (Factory Reset) Guide](/handbook/security/corporate/services/laptops/wipe)
        - [Buy Back Guide](/handbook/security/corporate/services/laptops/buyback/)
        - [Donation Guide](/handbook/security/corporate/services/laptops/donation)
        - [Recycle/Return Guide](/handbook/security/corporate/services/laptops/recycle)
      - **Laptop Policies**
        - [Procurement Guide and Shipping Times](/handbook/security/corporate/services/laptops/procurement)
        - [Hardware Models and Specs](/handbook/security/corporate/services/laptops/hardware)
        - [Operating System Standards](/handbook/security/corporate/services/laptops/os)
        - [Apps and Software Standards](/handbook/security/corporate/services/laptops/software)
        - [Security Configuration Standards](/handbook/security/corporate/services/laptops/security)
          - [Apple ID for Work](/handbook/security/corporate/services/laptops/security/appleid)
          - [Backups](/handbook/security/corporate/services/laptops/security/backups)
          - [Disk Encryption](/handbook/security/corporate/services/laptops/security/encryption)
          - [Firewall](/handbook/security/corporate/services/laptops/security/firewall)
          - [Hostnames and Usernames](/handbook/security/corporate/services/laptops/security/names)
          - [iCloud Drive](/handbook/security/corporate/services/laptops/security/icloud)
          - [Locking When Unattended](/handbook/security/corporate/services/laptops/security/unattended)
          - [Password Management](/handbook/security/corporate/services/laptops/security/passwords)
          - [Personal Use](/handbook/security/corporate/services/laptops/security/personal)
          - [Remote Management (MDM and EDR)](/handbook/security/corporate/services/laptops/security/management)
          - [Software Updates](/handbook/security/corporate/services/laptops/security/updates)
          - [Touch ID (Biometric Passwords and 2FA)](/handbook/security/corporate/services/laptops/security/touchid)
          - [Web Browsers](/handbook/security/corporate/services/laptops/security/browsers)
          - [Wireless Networks and VPN](/handbook/security/corporate/services/laptops/security/networks)
- Employment Lifecycle
  - [Onboarding](/handbook/security/corporate/services/onboarding)
  - [Role Changes (Career Mobility)](/handbook/security/corporate/services/role-changes)
  - [Offboarding](/handbook/security/corporate/services/offboarding)
- [Helpdesk Support](/handbook/security/corporate/services/helpdesk)
  - See [Support](/handbook/security/corporate/support) and/or [Systems](/handbook/security/corporate/systems) pages to get help.
  - If you can't find the answer you're looking for, scroll down for Tier 2 support.

### Tier 2. Helpdesk Support

We have 24x5 coverage provided by [Helpdesk Support Analysts](/handbook/security/corporate/services/helpdesk) that can help you with access requests, account lockouts, authentication issues, laptop hardware, laptop software configuration problems, 1:1 training for unfamiliar technologies, and triage problems for any [Corporate Security Systems](/handbook/security/corporate/systems).

- [Identity and Access Management](/handbook/security/corporate/services/identity)
  - [Access Requests](/handbook/security/corporate/services/access-requests)
  - [Career Mobility (Mover) and Role Changes Provisioning](/handbook/security/corporate/services/role-changes)
  - [External Collaborators (Customers, Partners, Vendors)](/handbook/security/corporate/services/external-collaborators)
  - [Onboarding (Joiner) Provisioning (Baseline Entitlements) and User Support](/handbook/security/corporate/services/onboarding)
  - [Offboarding (Leaver) Deprovisioning](/handbook/security/corporate/services/offboarding)
  - [Service Accounts](/handbook/security/corporate/services/service-accounts)
  - [Temporary Service Providers](/handbook/security/corporate/services/temporary-users/)
- [Infrastructure Management](/handbook/security/corporate/services/infrastructure)
  - [AWS](/handbook/security/corporate/systems/aws)
  - [GCP](/handbook/security/corporate/systems/google/cloud/)
- [Laptops and Logistics](/handbook/security/corporate/services/laptops)
- [Tech Support for Team Members](/handbook/security/corporate/services/helpdesk/)
  - [Account Password and 2FA Resets](/handbook/security/corporate/support/reset)

**Please ask for assistance in the `#it_help` Slack channel.**

Our team members have scheduled on-call shifts, so we kindly ask that you ask in the channel and not send Slack direct messages to specific individuals.

For systems not managed by Corporate Security, you can locate the owner in the [tech stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml). If you're not sure where to ask, please ask in `#it_help` and we will redirect you to the right person or place.

### Tier 3. Escalation and Systems Engineering

Our Support Analysts are trained to provide user support. If there is a problem that the Support Analysts cannot answer, they will escalate it to the Corporate Security Engineers.

Our Security Engineers and Systems Engineers are the technical owners for our [Corporate Security Systems](/handbook/security/corporate/systems) and handle configuration management and engineering work for optimizing and supporting our business requirements and mitigating any security risks.

For team member support requests, please ask for assistance in the `#it_help` Slack channel.

For advanced requests or change/configuration management, please open a GitLab issue in the [Corporate Security Issue Tracker](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues) and choose the appropriate issue template that will automatically add the appropriate labels and assign it to the respective system owners.

**Courtesy Reminder:** We do **not** provide same day support in our engineering issues. We have a prioritized queue for our issues that is managed by our engineering managers and program managers. We have allocated buffer in each team to triage new day-to-day requests within a few business days. Please add the appropriate priority label to any issues that you create. **Please ask in the `#it_help` Slack channel for anything urgent** and we will handle escalations and prioritization internally.

### Tier 4. Automation Engineering

As any company or team evolves and scales, it is important to automate and streamline processes. Most tech companies improve automation and processes using some form of scripting.

At GitLab, each of our departments solves their automation problems independently (organic evolution of our values and solving your own niche problems).

As time allows, our Security Engineers and Systems Engineers work on automation projects to streamline our processes and systems configuration, usually aligned with our security strategy, compliance observations, and/or mitigating identified security risks.

See our [automation handbook page](/handbook/security/corporate/automation) to learn more.

### Tier 5. Architecture and Crisis Management

Our Staff Engineers and Managers are focused on driving the meta-level direction and improved automation and efficiency of the Corporate Security team and our cross-functional stakeholders that provide a strong security posture in alignment with the security vision while providing great internal customer experience. We also provide swarm-style guidance and engineering for cross-functional or leadership-level crisis and incident mitigation.
