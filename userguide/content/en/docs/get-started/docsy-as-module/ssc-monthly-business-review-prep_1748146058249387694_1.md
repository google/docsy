---
title: GitLab Dedicated Monthly Business Review Prep
description: Enable GitLab Dedicated Support Stable Counterparts to prep for the Monthly Business Review in Support. 
---

Each month, the Support Stable Counterparts (SSCs) prepare information for use in GitLab Support's Monthly Business Review (MBR). This handbook pages documents what steps a GitLab Dedicated SSC should take to prepare the notes for GitLab Dedicated for any given MBR. Any GitLab Dedicated SSC can lead MBR coordination. 

## ℹ️ Information Sources

Each MBR must include information from these sources:

- other SSCs
- tickets 
- RFHs
- incidents

Each MBR might also include information from other sources.

We report on GitLab Dedicated (Commercial) and GitLab Dedicated for Government. You will need to work with Brie or Wade to get specific data about GitLab Dedicated for Government. Those areas are noted specifically.  

## Assembling Metrics

To ensure reproducibility, follow these steps when assembling metrics for the MBR.

### Counting Tenants

When counting tenants, keep in mind the distinction between production, pre-production and internal tenants. When counting what percentage of tenants have an Assigned Support Engineer, we focus only on Production tenants and note that specifically in the MBR slide.

### 📅 Cutoff Period

Each MBR is taking a look at how things went during the last month. To make sure we count things once and only once, you'll want to make a special note of what dates you're looking at when you are preparing the MBR. The end of the week before the MBR is a [good cutoff point](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/6738#note_2394065104).

Record the start and end dates used in the table at the bottom of this page.

### 🎫 Counting Tickets

_This is a work in progress._

#### GitLab Dedicated (Commercial)

#### GitLab Dedicated for Government

### 🆘 Counting RFHs

#### GitLab Dedicated (Commercial)

1. Filter the [issues](https://gitlab.com/gitlab-com/request-for-help/-/issues/?sort=created_date&state=opened&first_page_size=100) in the consolidated `request-for-help` [project](https://gitlab.com/gitlab-com/request-for-help) with `Label` `is` `Help group::Dedicated`
1. Choose **All**
1. Sort by **Created Date**
1. Set the **Sort direction** to **Descending**

Each issue that was opened within the cutoff period should be counted. 

#### GitLab Dedicated for Government

Perform the steps above using the RFH issues in the [appropriate project](https://compsecgov.gitlab-dedicated.us/gitlab-dedicated-us-public-sector/incident-management) on CompSecGov. 

As of this writing, Wade and Brie are the only GitLab Dedicated SSCs who can retrieve this information. (Other members of the US Government Support team can help.)

### 🚨 Counting Pages

We count the total number of pages -- not the total number of incidents. (Not every incident involves the GitLab Support team.)

#### GitLab Dedicated (Commercial)

Using the [Incident Management - GDCMOC](https://gitlab.pagerduty.com/service-directory/P8WVAI0) service, count the number of **Resolved Incidents** within the cutoff period.

#### GitLab Dedicated for Government

Using the [Incident Management - GitLab Dedicated for US Gov CMOC](https://gitlab.pagerduty.com/service-directory/PQRVHA8) service, count the number of **Resolved Incidents** within the cutoff period.

As of this writing, Wade and Brie are the only GitLab Dedicated SSCs who can retrieve this information. (Other members of the US Government Support team can help.)

## Areas Covered

The MBR slide typically covers:

- Key metrics and trends
- Accomplishments
- Issues, learnings & updates
- Areas where we need help

There's also a table with:

| | Global | US Government | 
|-|--------|---------------|
| Tickets | | | 
| RFHs | | | 
| GDCMOC Pages | | |

In each cell, we have `X (percentage increase month-over-month, last month's value of X`.

## 📜 Historical MBR Dates

Record the **Start Date** and **End Date** that you use when preparing for the MBR. The dates should be `inclusive`.

| MBR | SSC | Start Date | End Date |
| ------ | ------ | ------ | ------ |
| April 2025 | Brie Carranza |  N/A      | `2025-04-27` |
| May 2025 | Brie Carranza | `2025-04-28` | `2025-05-16` |
| June 2025 |TBD |   |  |
