---
title: "Critical System Tiering Methodology"
summary: "The purpose of the Critical System Tiering Methodology is to support GitLab in identifying and understanding the specific systems utilized across the organization that are considered critical to serving GitLab’s Customers."
controlled_document: true
---

## Purpose

The purpose of the Critical System Tiering Methodology is to support GitLab in categorizing systems based on their impact on GitLab's SaaS subscriptions (delivery of GitLab.com or GitLab Dedicated). By classifying systems into specific tiers, GitLab may appropriately prioritize risk mitigation activities and tailor internal controls.

## Scope

The Critical System Tiering methodology is applicable to all systems utilized across GitLab which are tracked within the [Tech Stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml).

## Roles and Responsibilities

|Role|Responsibility|
|----------|------------------------------|
|[Security Risk Team](/handbook/security/security-assurance/security-risk/)|Owns the Critical System Tiering Methodology and designates Critical System Tiers for new systems through the [Business Impact Analysis](/handbook/security/security-assurance/security-risk/storm-program/business-impact-analysis/).|
|[IT Compliance](/handbook/business-technology/it-compliance/)|Supports defining of Critical System Tiers in conjunction with the Security Risk Team when new systems are added to the Tech Stack.|
|Business/Technical Owners of Systems|Provide complete and accurate data about the systems that they own so that an accurate tier is designated.|

## Critical System Tiering Procedure

Defining what a critical system means at GitLab can be complex given the nature of our environment and the number of integrations that exist across the many systems that are used to carry out business activities. GitLab's [Business Impact Analysis (BIA)]({{< ref "business-impact-analysis" >}}) procedure enables the designation of a Critical System Tier for a new system by the Security Risk Team. The BIA questions used to designate Critical System Tier are:

1. What is the impact of System disruption (System is unavailable)?
2. Please describe the potential impact of System disruption. Specify any GitLab team(s) affected.

The Security Risk Team judgmentally designates a Critical System Tier for the new system based on answers from the Business Owner and their own understanding of the services provided by the system. The guidelines used to distinguish each tier are described in the next section.

### Designating Critical System Tiers

Systems are designated a Critical System Tier based on the following matrix:

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;margin:0px auto;}
.tg td{border-color:black;border-style:solid;border-width:1px;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-zqun{background-color:#ffffff;color:#000000;text-align:center;vertical-align:middle}
.tg .tg-knp3{background-color:#6e49cb;border-color:#000000;color:#ffffff !important;;
  text-align:center;vertical-align:middle}
.tg .tg-clye{background-color:#380d75;color:#ffffff;font-weight:bold;text-align:center;vertical-align:middle}
.tg .tg-fecx{background-color:#cccccc;color:#000000;font-weight:bold;text-align:center;vertical-align:middle}
.tg .tg-cc97{background-color:#380d75;color:#ffffff;text-align:center;vertical-align:middle}
.tg .tg-dxvi{background-color:#6e49cb;color:#ffffff;font-weight:bold;text-align:center;vertical-align:middle}
.tg .tg-e02t{background-color:#ffffff;border-color:#000000;color:#000000 !important;;
  font-weight:bold;text-align:center;vertical-align:middle}
.tg .tg-9hzb{background-color:#FFF;font-weight:bold;text-align:center;vertical-align:top}
</style>
<table class="tg">
<tbody>
  <tr>
    <td class="tg-clye">Critical System Tier (CST) <span style="color:#DB3B21;">*</span></td>
    <td class="tg-dxvi">CST Description</td>
    <td class="tg-dxvi">Examples</td>
  </tr>
  <tr>
    <td class="tg-e02t">Tier 1 Mission Critical<span style="color:#DB3B21;">**</span></td>
    <td class="tg-zqun">Disruption or breach has an immediate and significant impact on the availability/security of GitLab SaaS subscriptions and Customer data (See <a href="{{< ref "data-classification-standard#data-classification-definitions" >}}">Data Classification Standard</a> for definitions).</td>
    <td class="tg-zqun">GitLab.com, Google Cloud Platform, Devo</td>
  </tr>
  <tr>
    <td class="tg-e02t">Tier 2 Business Critical<span style="color:#DB3B21;">***</span></td>
    <td class="tg-zqun">Disruption affects execution of major business functions or capabilities.</td>
    <td class="tg-zqun">Okta, Salesforce, Workday</td>
  </tr>
  <tr>
    <td class="tg-e02t">Tier 3 Business Operational</td>
    <td class="tg-zqun">Disruption affects efficiency or cost in completing standard business processes.</td>
    <td class="tg-zqun">DocuSign, Figma, Tableau</td>
  </tr>
  <tr>
    <td class="tg-e02t">Tier 4 Administrative</td>
    <td class="tg-zqun">Disruption affects productivity/well-being of individual GitLab Team Members.</td>
    <td class="tg-zqun">Clockwise, Donut</td>
  </tr>
</tbody>
</table>
<br/>

{{% panel header="**Notes**" header-bg="primary" %}}
{{% note %}}
<span style="color:#DB3B21;"><b>\*</b></span> As an extension of tiering methodology, the [Data Classification Standard]({{< ref "data-classification-standard" >}}) prescribes **specific** [Security and Privacy]({{< ref "data-classification-standard#security-and-privacy-controls" >}}) control requirements for each data classification level. These requirements should be followed based on a system's data classification, regardless of the system's tier.
{{% /note %}}
{{% note %}}
<span style="color:#DB3B21;"><b>\**</b></span> By default, any system that contains <b>RED Data</b> per the [Data Classification Standard]({{< ref "data-classification-standard#red" >}}) OR is a [Third Party Sub-Processor](https://about.gitlab.com/privacy/subprocessors/#third-party-sub-processors) will be a **Tier 1 Mission Critical** system. This is due to the fact that this data is Customer-owned and uploaded and as such, has been deemed to be mission critical in nature.
{{% /note %}}
{{% note %}}
<span style="color:#DB3B21;"><b>*\*\*</b></span> By default, any system in-scope for [SOX](/handbook/internal-audit/sarbanes-oxley/) will be a **Tier 2 Business Critical** system, at minimum.
{{% /note %}}
{{% /panel %}}

{{% panel header="**Why do we differentiate between impact on SaaS subscriptions vs. major business functions or capabilities?**" header-bg="warning" %}}
Critical System Tiers help prioritize risk mitigation activities for systems critical to serving GitLab’s Customers. GitLab's core service offerings are  SaaS.  Thus, the systems that have an immediate and significant impact on the availability/security of GitLab SaaS subscriptions and Customer data in the event of a disruption are priority.  These are *Tier 1 Mission Critical* systems.
{{% /panel %}}

### Why does GitLab need this methodology?

Tiering systems utilized across GitLab enables team members to make decisions on prioritizing work related to a specific system(s). For example, if multiple risks have been identified across many systems and require remediation, team members can leverage the designated Critical System Tiers to make decisions on how to prioritize remediation efforts. This methodology also provides GitLab with a mechanism to easily identify systems which are most critical across the organization so that teams can proactively protect and secure those systems.

### Maintaining Critical System Tiers

Critical System Tiers for existing systems are validated periodically. A system's designated tier can be found in the [tech_stack.yml file](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) which is the Single Source of Truth for all systems used at GitLab.

## References

- [Business Impact Analysis]({{< ref "business-impact-analysis" >}})
- [Data Classification Standard]({{< ref "data-classification-standard" >}})
