---
title: "High Velocity Sales and First Orders - Feedback Collection and Best Practices"
description: "Overview of how HVS collects product, systems, and case operations feedback, along with how to best provide feedback"
---

## Background

Currently the HVS team derives feedback from SFDC Cases via Advocates, Customer self-cancels on CDot, and periodic CSAT/NPS surveys. We want to centralize all these sources, ensure we are getting the best version of the respective feedback, and actioning on them to the best of our abilities. Below is a guide on our best practices surrounding this effort.

## Feedback sources

### Case feedback

When an Advocate closes a case, they select their `Feedback Type` and add comments in the `Feedback` field surrounding said case. This feedback can range from case logic, product, to customer experience feedback. See this [case](https://gitlab.lightning.force.com/lightning/r/Case/500PL00000IkjZNYAZ/view) where you can navigate to the `Feedback` and `Feedback Type` fields for an example.

### Portal cancels

When a customer self-cancels on the Customers Portal, they are prompted to select a `cancel reason` and add additional comments in the text field. The HVS team can access this data to derive insights. See this [screenshot](https://drive.google.com/file/d/1gxz_iAOA43ehUlNDECO0LPJLiFWv2Qod/view?usp=drive_link) of the cancel prompt.

### Customer call recordings or emails

Advocates can record customer calls on Gong and can screenshot any relevant customer email they receive. This can be posted on our #hvs channel. HVS Leadership will also periodically review Gong call recordings to aggregate any product-related feedback.

### Ad-hoc #hvs channel posts

Any other type of feedback is typically posed in this feedback Slack channel.

### CSAT/NPS

Company-wide CSAT Surveys are sent out twice annually via Gainsight.

## Feedback best practices for Advocates

We as a team should try our best to ensure the feedback we provide or the questions we ask customers, are clear and actionable.

### Case feedback

Please refer to this [document](https://docs.google.com/document/d/1z5FHYeM0pId9EPoUL2uz00hJWEzGCBRMiVzrdpmgo-0/edit?tab=t.0#heading=h.m8bvusbfbvqq) for best practices with examples. It is very important we follow these best practices as it gives us the best chance to influence Product and Sales System roadmaps.

### Customer call recordings or emails

Direct feedback from customers should be provided in one of two channels:

1. **Case feedback**: ideally, your customer interaction is linked to a case. When closing the case, please link the Gong call recording with a brief summary of what the call consists of. For emails, feel free to copy + paste the email into the feedback field. Alternatively, you can screenshot the email, save it on your gdrive, and link it within the feedback field.
1. **#hvs channel**: if your customer interaction cannot be linked to a specific case, please post the call recording ([example](https://gitlab.slack.com/archives/C06GWAS5RA8/p1731624483166999)) or an email screenshot in the feedback Slack channel. Again, this should be accompanied with a brief summary describing the problem and potentially the suggested solution.

### #hvs channel

For any other feedback not connected to a case or customer interaction, please post it in the feedback channel as well. Similar to a customer feedback, any example available to outline the feedback is strongly recommended. For example, if you are unable to complete a Salesforce action, please provide the screenshot of the error you are receiving.

## Feedback actioning

Depending on the type of feedback, we will pursue one of the following routes:

### HVS Leadership issue

Any feedback stemming from the above-stated resources that can be actioned on by HVS leadership (e.g. case type update), will be actioned in through an issue creation.

See an example [issue](https://gitlab.com/gitlab-com/sales-team/self-service/-/issues/700) of how HVS leadership logged and will action on feedback items stemming from recent team onsites.

### Sales systems or Sales ops issue

Any feedback that concerns SFDC object updates, automation logic, and sales tooling will be pursued by HVS leadership by engaging with the appropriate systems or sales ops team.

For example, Advocates in Q3 provided feedback on further automating case actions, especially with Groove Flows. The HVS leadership team created this [issue](https://gitlab.com/gitlab-com/sales-team/field-operations/sales-operations/-/issues/4106) to kickstart exploring automation opportunities.

### HVS <> Product intake issue

Any feedback that points to productization will follow this agreed upon [intake-model](https://gitlab.com/gitlab-com/sales-team/self-service/-/issues/721) with Product. This intake model places further emphasis on making sure the original feedback we gather has specific examples and screenshots, so Product can prioritize our items first.

### Ad-hoc feedback items

Any feedback items that may be smaller in nature, or just require clarification, will start first in the appropriate slack channel of the team best fit to support. Below are some examples:

- [Thread](https://gitlab.slack.com/archives/C4XFU81LG/p1728986423537719) about updating payment instructions on Airbase with the Finance team
- [Thread](https://gitlab.slack.com/archives/C4XFU81LG/p1728986423537719) about a single customer needing assurances for outages with the Support team
- [Thread](https://gitlab.slack.com/archives/C029YFPUA6M/p1731013938540769) about Customers Portal disclaimer clarification with the Product team. This has now become a Product intake [issue](https://gitlab.com/gitlab-org/fulfillment/meta/-/issues/2098).

## Feedback progress updates

The HVS team will be kept up to date on any feedback they provided weekly through the `Friday Weekly SMB update Alert` in the `hvs_team channel`. In this update, we will callout any feedback item we are pursuing, and link the appropriate issue if needed.

## Feedback dashboard

The HVS Feedback Tableau [dashboard](https://10az.online.tableau.com/#/site/gitlab/views/HVSFeedbackTracker/PortalCancelEventsSummary?:iid=1) is how the team will monitor most of the feedback sources. The has created views on each feedback source in one workbook, making it easily accessible to read and action on said feedback.

### Case feedback

- **Visual**: a tabular view of all case feedback
- **Fields**: Case Owner, Region, Case Type, Case Subject, Description, Date, Resolution Action, Feedback Type, Feedback
- **Timeline**: Trailing 1-2 weeks

### Portal cancels summary

- **Visual**: stacked graph
- **Fields**: Month, Cancel Reason, SaaS, Self-Managed
- **Timeline**: Trailing 6 months

### Portal cancels details

- **Visual**: a tabular view of all customer cancel events with text field
- **Fields**: Date, Cancel Reason, Text field, SaaS, Self-Managed
- **Timeline**: Trailing 3-4 weeks

### CSAT/NPS

Survey results are analyzed and made available in the following formats:

- **Tableau Dashboards**: Created from Snowflake data, these dashboards provide a visual representation of overall CSAT trends, key metrics, and actionable insights.
- **Gainsight**: CSAT scores are comprehensively tracked in the Customer 360, providing a detailed view of customer satisfaction over time. Additionally, a universal dashboard offers a consolidated overview of all CSAT surveys sent, enabling easy monitoring and analysis.
- **Salesforce**: Survey responses can also be found in the embedded Gainsight widget on any account page in Salesforce.

## DRIs

Below are the DRIs to facilitate the investigation of the appropriate feedback type. **This does not mean this individual would solution the feedback**, but they would bring the problem to the appropriate team.

<table>
<tr>
<th>Task</th>
<th>Responsibility</th>
<th>Primary DRI(s)</th>
<th>Secondary DRI(s)</th>
</tr>
<tr>
<td>Dashboard maintenance</td>
<td>

- Maintain and improve feedback

</td>
<td>

`@Gsodhi`
</td>
<td>

`@mfleisher`
</td>
</tr>
<tr>
<td>Case feedback facilitation</td>
<td>

- Monitor case feedback weekly or bi-weekly to identify notable feedback
- Involve additional HVS leadership team members if needed, and then create appropriate issue to kickstart investigation
- Gain additional examples if needed from advocates or support

</td>
<td>

`@Gsodhi`
</td>
<td>

`@mhanks`

`@mfleisher`
</td>
</tr>
<tr>
<td>Portal cancels feedback facilitation</td>
<td>

- Monitor portal feedback details weekly to identify any notable feedback to report similarly as case feedback
- Analyse customer feedback trends monthly to identify any actionable items, covert to an issue

</td>
<td>

`@Gsodhi`
</td>
<td>

`@mhanks`
</td>
</tr>
<tr>
<td>CSAT / NPS result analysis</td>
<td>

- Summarize and share CSAT / NPS findings periodically

</td>
<td>

`@mhanks`
</td>
<td>CSSO</td>
</tr>
<tr>
<td>Gong calls analysis</td>
<td>

- Leverage [Smart Trackers](https://help.gong.io/docs/create-smart-trackers) to analyze any product-related feedback periodically

</td>
<td>

`@Gsodhi`
</td>
<td>

`@mhanks`
</td>
</tr>
<tr>
<td>

Call recordings, customer emails, or ad-hoc posts on `#hvs channel`
</td>
<td>

- Reply to advocate feedback
- Investigate feedback and create appropriate issue

</td>
<td colspan="2">The DRI for this is flexible to the feedback subject</td>
</tr>
</table>
