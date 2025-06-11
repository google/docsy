---
title: "Ecommerce Motion"
description: "Accelerate improvements in our self service ecommerce purchasing experience"
---

## Attributes

| Property        | Value           |
|-----------------|-----------------|
| Date Created    | 2022-01-24 |
| End Date        | 2022-07-29 |
| Slack           | [#wg-ecommerce-motion](https://gitlab.slack.com/archives/C03012Y7UHH) (only accessible from within the company) |
| Google Doc      | [Ecommerce Motion Working Group Agenda](https://docs.google.com/document/d/1FoUek4p2ELwuQT4IY-nQof4ft2udG2Ks_jFQiIrn7is/edit#heading=h.hhbpi9bc829) (only accessible from within the company) |

## Business Goals

Self-service and e-commerce are key levers to the success of our business (also now part of Top Cross-Functional Initiatives). They drive customer satisfaction and adoption, deliver GTM efficiency, assist in channel development and ultimately, expand our revenue and improve our position in the market.

As the demands of the business grow in complexity and the areas that self-service touches increase, it will be crucial for us to align on one, common self-service strategy.

The goal of this group is to ultimately define the most effective way to deliver on self-service and bridge the gap between where we are today and our long-term vision and objectives.

*note: [Zuora SSOT](https://gitlab.com/groups/gitlab-org/-/epics/4664) is a prerequisite of any system changes coming out of this working group. Following through on this work enables us to scale and iterate more efficiently, even if we were to recommend leveraging a COTS solution.*

## Prerequisites

*we've identified some prerequisites that must be complete before pursuing a recommendation from this working group. These items have prevented significant progress thus far and will only make matters worse if not addressed prior to additional investment (either build or buy)*

| Prerequisite | Rationale |
| -------------| ----------|
| [Zuora SSOT](https://gitlab.com/groups/gitlab-org/-/epics/4664) | Zuora needs to be the SSOT for our Product Catalog, and what a customer has bought (subs, invoices, payments, etc) |
| [Customer as a First Class Citizen](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/1874) | As of 2022-02 we map a user to a subscription, but a Zuora account maps to a customer. We need to resolve this before scaling to a new or improved system |
| [SSO](https://gitlab.com/gitlab-org/customers-gitlab-com#1868) | As of 2022-02 a customer can have two logins, their GitLab.com account AND an account on customers.gitlab.com, we need to merge these and maintain a single SSO system (gitlab.com account) |
| Account Management Access Controls & Billing Roles | The admin is not always the person at a customer's organization who is responsible to manage the subscription. We need a solution that support billing roles, billing perms or perm sets (actual solution still TBD) that ensures the right person at a customer's organization has access|

## Exit Criteria

1. Identification and prioritization of all prerequisites on appropriate team roadmaps (WG will not cover delivery/execution)
1. Recommendation on how to deliver long-term objectives, including assessment on build vs buy.
1. Propose and Open additional roles to execute on ecommerce integration work

## Timeline

### Path 1 (2022-02-02 > 2022-02-18) - 2 weeks

1. Defined long-term / future-state of the self-service business needs across all teams and departments in a JTBD framework [collaborators input](https://docs.google.com/spreadsheets/d/12dyu-mwO8lOPBFOWzGCbRd8RL3N0WHatPg7VWC6ljUo/edit#gid=1877539157) [doc](https://docs.google.com/spreadsheets/d/1fLrF03aXN_EOKcRQr09_Ik8UyegWwk355msSJUgZiNA/edit#gid=0)
    1. Kazem Kutob
    1. Omar Fernandez
1. Define current state of self-service capabilities [doc](https://docs.google.com/spreadsheets/d/1VUToeirsvW1KBfuRuz0Rx0buyBW4Mgv0jn7ufnSZhrU/edit#gid=1280279157)
    1. Omar Fernandez
    1. Alex Martin

### Path 2 (2022-02-18 > 2022-04-08) - 7 weeks

1. Translate wishlist into feature families and capabilities consumable by vendors and cover any other technical components
    1. Bryan Wise and Mark Quitevis
    1. Kazem Kutob
    1. Jerome Ng
1. Receive input from vendors (and CustomersDot) on capabilities
    1. Bryan Wise and Mark Quitevis
    1. Jerome Ng
1. Build high-level estimate of integrations requirements and timeline
    1. Jerome Ng

### Path 3 (2022-04-08 > 2022-04-19) - 2 weeks

1. Recommendation on how to deliver long-term objectives, including assessment on build vs buy.
    1. Justin Farris

## Out of Scope

1. We will not be performing a deep RFP and vendor assessment and selection as part of this exercise
1. Aligning on cross-functional values and operating principles to deliver on e-commerce is out of scope in this WG, but such work may follow in a different format in the next phase

## Roles and Responsibilities

**Contributors**

DRIs held accountable to deliver on the exit criteria. Required to attend syncronous discussions and collaborate with reviewers to collect input and feedback. Similar to Responsible and Accountable in a RACI framework.

**Collaborators**

Stakeholders with business requirements or domain expertise who will provide input to contributors. No need for regular or syncronus attendance, will engage async with contributors as appropriate. Similar to Consulted and Informed in a RACI framework.

| Working Group Role    | Person                | Title                                           |
|-----------------------|-----------------------|-------------------------------------------------|
| Executive Sponsor | Ryan O'Nell | VP Commercial |
| Facilitator | Kazem Kutob | Director, Online Sales & Self Service |
| Contributor | Justin Farris | Sr Director, Product Monetization |
| Contributor | Alex Martin | Sr Manager, Online Sales |
| Contributor | Bryan Wise | VP, IT |
| Contributor | Jerome Z Ng | Sr Engineering Manager, Fulfillment |
| Contributor | Omar Fernandez | Interim Director of Product, Fulfillment |
| Contributor | Jerome Ng | Sr Engineering Manager, Fulfillment |
| Contributor | Mark Quitevis | Sr Business Systems Analyst |
| Collaborator | Tatyana Golubeva | Principal PM, Purchase |
| Collaborator | Emily Sybrant | Product Designer, Purchase |
| Collaborator | James Lopez | Backend Engineering Manager, Fulfillment:License |
| Collaborator | Tyler Amos | Staff Backend Engineer, Fulfillment:License |
| Collaborator | Hila Qu | Director of Product, Growth |
| Collaborator | Christopher Nelson | Sr Director, Enterprise Applications |
| Collaborator | Jessica Salcido | Finance Systems Administrator |
| Collaborator | Daniel Parker | Senior Integrations Engineer, Business Technology |
| Collaborator | Sarah McCauley | Finance |
| Collaborator | Michelle Hodges | VP, Channel Sales |
| Collaborator | Jack Brennan | Sr Director, Sales Systems |
| Collaborator | David Duncan | VP Marketing |
| Collaborator | Michael Preuss | Director, Digital Experience |
| Collaborator | Sindhu Tatimatla | Director, Analytics & Insights |
| Collaborator | Cheri Holmes | Chief of Staff to CRO |
| Collaborator | Jake Bielecki | Sr Director, Sales Strategy and Ops |
| Collaborator | Shaun McCann | Director, Support Engineering |
| Collaborator | Jesse Rabbits | Sr. Manager, Deal Desk |
