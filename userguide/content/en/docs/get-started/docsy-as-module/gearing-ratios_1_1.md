---
title: "Security Department Gearing Ratios"
description: Gearing ratios are used as [Business Drivers](/handbook/finance/financial-planning-and-analysis/#business-drivers-also-known-as-gearing-ratios) to forecast long term financial goals by function.
---

## Bug bounties

The gearing ratio for bug bounty expenditure is as follows:

- The cost of a compromise is estimated at 1% of company worth
- Bug Bounty budget is determined as 10% of a compromise
- Bug Bounty top reward is determined as 1% of budget

An illustration:
GitLab is worth 3.5 billion and a significant compromise can cost GitLab $35 million.
10% ratio = $3.5 million budget. Likewise, 1% of budget = $35,000 top reward

Approximate monthly budget should be set at total budget divided by 12. It should be understood that our bug bounty payouts are largely unpredictable and fluctuate based on the following:

- Number and severity of bugs produced by GitLab and pushed to production
- Participation of research community
- Reward ranges

This gearing ratio is owned by the [Product Security]({{< ref "product-security" >}}) Sub-department. The cost of a compromise should be re-evaluated at least annually based on the average market cap of GTLB over the previous 6 months.

## Security Incident Response Team (SIRT) size

SIRT is the sole carrier of the Security On-Call (SEOC) rotation, which ensures that there's a page-able Security Engineer 24/7/365. The baseline and gearing ratio for the size of the SIRT [have been agreed on](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/9711#note_450845141) as outlined below:

- Baseline:
  - 12 team members to cover 3 timezone in a 8 hour, follow-the-sun rotation:
    - 4 team members in JAPAC
    - 4 team members in EMEA
    - 4 team members in AMER

- Gearing ratio that triggers a review of team size:
  - If number of pages to SEOC per month exceeds +50% of monthly average of the last 12 months for 3 consecutive months
  - If number of pages to SEOC per year exceeds +100% of previous year
  - If number of total team members increases by +20% compared to previous year

This gearing ratio is owned by the [Security Operations]({{< ref "security-operations" >}}) Sub-department.
