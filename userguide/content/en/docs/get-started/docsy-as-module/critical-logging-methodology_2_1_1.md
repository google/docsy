---
title: "Critical Logging Tiering Methodology"
description: "The purpose of the Critical Logging Tiering Methodology is to support GitLab in identifying and understanding the criticality of logs in systems utilized across the organization that are considered essential in order to maintain operations."
---

## Purpose

The purpose of the Critical Logging Tiering Methodology is to support GitLab in categorizing logs based on their effect on GitLab's SaaS subscriptions and the achievement of GitLab's [mission](/handbook/company/mission/#mission) and goals. Ultimately, this provides GitLab with a mechanism to take a proactive approach to comprehensive risk management which considers risks, such as information security and privacy risks, impacting business operations across the organization. Additionally, by classifying logging into specific tiers, GitLab will be in a better position to appropriately prioritize risk mitigation activities and tailor internal controls based on a log's related tier.

## Scope

The Critical Logging tiering methodology is applicable to all systems utilized across GitLab which are tracked within the [Tech Stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) to ensure that all systems are vetted completely and accurately using a consistent and standardized methodology.

## Roles and Responsibilities

|Role|Responsibility|
|----------|------------------------------|
|[Security Logging Team](/handbook/security/security-operations/security-logging/)|Executes an annual review of Critical Logging tiers and makes adjustments as necessary. Owns the Critical Logging Tiering Methodology and supports the identification of and assignment of a Critical Logging tier as needed.|
|[SIRT](/handbook/security/security-operations/sirt/)|Supports defining of Critical Logging tier in conjunction with the Security Logging Team when new systems are added to the tech stack.|
|[AppSec](/handbook/security/product-security/application-security/)|Supports defining of Critical Logging tier in conjunction with the Security Logging Team when new systems are added to the tech stack.|
|[InfraSec](/handbook/security/product-security/infrastructure-security/)|Supports defining of Critical Logging tier in conjunction with the Security Logging Team when new systems are added to the tech stack.|
|Technical System Owners|Provide complete and accurate data about the systems that they own so that an accurate tier is assigned.|

## Critical Logging Tiering Procedure

Defining what Critical Logging means at GitLab can be complex given the nature of our environment and the amount of integrations that exist across the many systems that are used to carry out business activities. As part of GitLab's [Business Impact Analysis (BIA)](/handbook/security/security-assurance/security-risk/storm-program/business-impact-analysis/) process, we obtain inputs that assist in the assignment of a critical system tier per system. These inputs used to determine system criticality tiers include, but are not limited to, the following:

1. If the system was compromised, would there be an immediate impact to GitLab.com SaaS subscriptions
1. If the system was compromised, which would describe the impact to GitLab:
   - Critical business functions (i.e., indirectly affects revenue generation, requires constant availability for effective business operation)
   - Operational business functions (i.e., affects efficiency/cost of operation)
   - Administrative functions (i.e., affects GitLab team members only on an individual basis (e.g., quality of life, individual productivity))

Once the information is obtained, it is reviewed by the Security Risk and/or IT Compliance Team to determine which system tier should be assigned to the system.

Then the Security Logging Team with the support of SIRT/AppSec/InfraSec takes the output of the findings above and applies the guidelines described below in [Determining Critical Logging Tiers](#determining-critical-logging-tiers) to each log source.

### Determining Critical Logging Tiers

Systems are assigned a Critical Logging tier based on the following matrix:

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
    <td class="tg-clye">Critical Logging Tier (CST) <span style="color:#DB3B21;">*</span></td>
    <td class="tg-dxvi">CST Description</td>
    <td class="tg-dxvi">Example</td>
    <td class="tg-fecx">Previous CST Tier Mapping</td>
  </tr>
  <tr>
    <td class="tg-e02t">Tier 1 Mission Critical<span style="color:#DB3B21;">**</span></td>
    <td class="tg-zqun">Systems that have an immediate and significant impact to the security of GitLab and/or contains [red](/handbook/security/data-classification-standard/#red) [customer data](/handbook/security/data-classification-standard/#data-classification-definitions).</td>
    <td class="tg-zqun">Cloudflare, GitLab.com, Teleport</td>
    <td class="tg-zqun">Tier 1 Product</td>
  </tr>
  <tr>
    <td class="tg-e02t">Tier 2 Business Critical<span style="color:#DB3B21;">***</span></td>
    <td class="tg-zqun">Systems that have an immediate and significant impact to critical business functions and customer service and/or contain [orange data](/handbook/security/data-classification-standard/#orange).</td>
    <td class="tg-zqun">customers.gitlab.com/subscription, Netsuite, Salesforce</td>
    <td class="tg-zqun">Tier 1 Business and Tier 2 Core</td>
  </tr>
  <tr>
    <td class="tg-e02t">Tier 3 Business Operational</td>
    <td class="tg-zqun">Disruption affects operational business functions, negatively impacting efficiency/cost of operation across departments and/or systems contain [yellow data](/handbook/security/data-classification-standard/#yellow)</td>
    <td class="tg-zqun">Clearwater, PagerDuty, ZenGRC</td>
    <td class="tg-zqun">Combination of Tier 2 Support and Tier 3 Non-critical and influenced by responses to BIA</td>
  </tr>
  <tr>
    <td class="tg-e02t">Tier 4 Administrative</td>
    <td class="tg-zqun">Affects GitLab team members only at an individual level (e.g., quality of life, individual productivity)</td>
    <td class="tg-zqun">Donut, Jetbrains, LinkedIn Learning, Modern Health</td>
    <td class="tg-zqun">Combination of Tier 2 Support and Tier 3 Non-critical and influenced by responses to BIA</td>
  </tr>
</tbody>
</table>
<br/>

{{% panel header="**Note**" header-bg="primary" %}}
<span style="color:#DB3B21;"><b>\*</b></span> As an extension of tiering methodology, the [Data Classification Standard](/handbook/security/data-classification-standard/) prescribes **specific** [Security and Privacy](/handbook/security/data-classification-standard/) control requirements for each data classification level. These requirements should be followed based on a system's data classification, regardless of the system's tier.

<span style="color:#DB3B21;"><b>\**</b></span> By default, any system that contains <b>RED Data</b> per the [Data Classification Standard](/handbook/security/data-classification-standard/#red) OR is a [Third Party Sub-Processor](https://about.gitlab.com/privacy/subprocessors/#third-party-sub-processors) will be a **Tier 1 Mission Critical** system. This is due to the fact that this data is customer owned and uploaded and as such, has been deemed to be mission critical in nature.

<span style="color:#DB3B21;"><b>*\*\*</b></span> By default, any system in-scope for [SOX](/handbook/security/security-assurance/security-compliance/sec-controls/) will be a **Tier 2 Business Critical** system, at minimum.
{{% /panel %}}

### Why does GitLab need this methodology?

Tiering systems utilized across GitLab enables team members to make decisions on prioritizing work related to a specific system(s) based on the assigned tier. As an example, if multiple risks have been identified over a wide variety of systems and require remediation, impacted team members can leverage the assigned Critical Logging tiers to make a decision on how to prioritize remediation activities. This methodology will also provide GitLab with a mechanism to easily identify those systems which are most critical across the organization so that we can proactively protect, log and secure those systems.

### Maintaining Critical Logging Tiers

A Critical Logging assessment is performed on an annual cadence in alignment with the [StORM annual risk assessment process](/handbook/security/security-assurance/security-risk/storm-program/) to validate existing systems in GitLab’s environment and make adjustments to assigned tiers accordingly. A system's assigned tier can be found in the [tech_stack.yml file](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml). A systems logging inventory can be found in the [SecLogging Inventory Repository](https://gitlab.com/gitlab-com/gl-security/engineering-and-research/security-logging/sec-logging-inventory)

#### Exceptions

Systems that are exempt from this methodology include any system which carries a data classification of Green. All remaining systems which store or process YELLOW, ORANGE, or RED data are required to have a Critical Logging tier assigned. Data classification will be validated to corroborate that the data stored or processed by the system is truly Green data, per the [Data Classification Standard](/handbook/security/data-classification-standard/#green).

#### References

- [Business Impact Analysis](/handbook/security/security-assurance/security-risk/storm-program/business-impact-analysis/)
- [Data Classification Standard](/handbook/security/data-classification-standard/)
