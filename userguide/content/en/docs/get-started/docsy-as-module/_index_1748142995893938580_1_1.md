---
title: "How to Use CP Automation to Manage Engagements"
description: "Learn about the CP process."
---

## What is CP?

the CP or "Collaboration Proejct" is the framework for how we would like to manage delivering engagements in a standardized, repeatable manner all within GitLab. Each customer will have their own group in GitLab and that group will contain a project for each SOW we deliver for that customer. These groups and projects will house all the information around the project delivery to easily track the progress and health of a project as well as provide a paper trail for all the work we have done during the project.

A list of our Projects can be found here: [GitLab Professional Services Group](https://gitlab.com/gitlab-com/customer-success/professional-services-group/professional-services-delivery/gitlab-professional-services) if staffed internally or [GitLab Partner Collaboration Group](https://gitlab.com/gitlab-com/customer-success/professional-services-group/professional-services-delivery/gitlab-partner-collaboration) if staffed fully or partially with partners.

## How does an SOW flow into CP?

A PSQuote quote contains one to many quote lines. Those quote lines map 1:1 to epics within a customer group on gitlab.com and each epic is then treated as a workstream. That customer group will contain one to many projects depending on how many SOWs we deliver for that customer. For each epic, the PM will create various issues tracking specific work towards the completion of each workstream.

## What are the common components?

- A customer group: This group will house all the work we do for a specific customer.
- An SOW/PO project: These projects will reside within the customer group and house all the work we do within that specific SOW or PO.
- Workstream epics at the customer group label: These are what tie directly to the activities in the SOW.
- A standard library of issue templates.
- A standard library of comment templates.
- A standard series of boards covering the status of each task/issue per workstream.
- Any specific documentation from our [delivery kits](https://gitlab.com/gitlab-org/professional-services-automation/delivery-kits).

## How will all this get created?

We have a project called [CPR_GitOps](https://gitlab.com/gitlab-com/customer-success/professional-services-group/professional-services-delivery/cpr_gitops) that handles the process of automatically creating the foundation of groups, projects, epics, etc per Customer Project. This automation is triggered by our Quilt API through PSQuote. We are currently using a merge request as the staging area to provide all the necessary details CPR_GitOps needs to properly scaffold out a project to deliver.

Please follow [this README](https://gitlab.com/gitlab-com/customer-success/professional-services-group/professional-services-delivery/cpr_gitops/-/blob/main/README.md?ref_type=heads) to get your project setup within GitLab while we continue to make this step more automated or send a message to the #ps-practice slack channel, requesting a CP project to be created.

[Example CP Project-Delta](https://gitlab.com/gitlab-com/customer-success/professional-services-group/professional-services-delivery/gitlab-professional-services/Delta/SOW-3697) (Migration)
[Example CP Project-Ripple](https://gitlab.com/gitlab-com/customer-success/professional-services-group/professional-services-delivery/gitlab-professional-services/Ripple-Labs/SOW-3378) (Migration)

## What does the PM need to configure once the Project is ready?

- issue board
- readme

## How far we've come

Customer Project (CP) automation was an effort initially designed back in 2022 by Adriano Fonseca as an OKR to improve our delivery processes. The original design can be found [here](https://gitlab.com/gitlab-com/customer-success/okrs/-/issues/258). This design has changed a bit as we have worked to revive the effort.
