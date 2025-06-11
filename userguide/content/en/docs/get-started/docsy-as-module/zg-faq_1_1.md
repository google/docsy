---
title: "ZenGRC FAQ for Team Members"
---

## GENERAL FAQ

### What is ZenGRC?

- ZenGRC is a governance, risk, and compliance (GRC) management platform.

### How can I access ZenGRC?

- ZenGRC has been configured to authenticate team members with Single Sign-On (SSO) via Okta. Team members are able to access the system by clicking on the ZenGRC Okta tile from their Okta dashboard. A screenshot of the Okta tile has been provided below as a reference:

![ZenGRC Okta Tile](/handbook/security/security-assurance/images/zg-okta-tile.png)

### Why can't I access ZenGRC when I click on the Okta tile?

- ZenGRC authentication requires that each user account is separately provisioned in ZenGRC. If you are unable to access ZenGRC by clicking the related Okta tile, please reach out to the Security Assurance team in the #sec-assurance Slack channel.

### Who should be using ZenGRC?

- Team members who are engaged to support GRC activities (i.e. Control Owners, Risk Owners, Process Owners/Reviewers, and even Technical System Owners) will regularly interact within ZenGRC. The Security Assurance Team maintains a [ZenGRC Activities handbook page]({{< ref "zg-activities" >}}) with additional details about the various activities that are carried out of ZenGRC as well as information about how stakeholders may be engaged within ZenGRC. However, all GitLab Team Members can access ZenGRC. Runbooks will be made available to provide additional details on navigating and viewing information within ZenGRC at a later date.

### What type of information is available for team members in ZenGRC?

- All team members will be provided with Read-Only as a standard baseline entitlement and will be able to see most data within the system. Note that while the access is considered read-only, team members are able to contribute to GRC related activities through the use of comments across the platform. Please Note: A caveat to the read-only access is the Security Operational Risk Management (StORM) Risk Register - ZenGRC restricts the ability to view and access risk related information to system administrators due to the sensitive nature of the information. To ensure that team members who are designated Risk Owners can interact with the risks that they own, these team members will be manually assigned to their owned risks within the platform.
- Team Members within the Security Department will be provided access to the StORM Risk Register given that the nature of the work performed across the department requires visibility over security impacting risks.

### How are team members impacted?

- The overall impact to team members is minimal at this time. The primary stakeholders are team members who regularly interact with the Internal Audit, Security Assurance, or Privacy teams. Even then, the level of interaction expected from primary stakeholders is minimal. The goal of onboarding all team members onto ZenGRC as a standard baseline entitlement is to provide additional visibility over GRC related activities, including status of continuous control monitoring procedures, risk assessments, and third party security reviews.
- The Security Automation Team has been working on building an integration between ZenGRC and GitLab. Where possible, this integration will sync data/information between ZenGRC and GitLab Issues so team members can continue working out of GitLab.
