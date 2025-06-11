---
title: Greenhouse <> BambooHR sync
description: "Information on the Greenhouse and BambooHR sync for GitLab team members and their profiles."
---

## Overview

Considering we are retaining BambooHR for team member data, we need to make sure that applicants are created in BambooHR once they are hired. We created a custom sync between Greenhouse and BambooHR to avoid manual work adding the right data from one system to the other.

Whenever a candidate is marked as hired, a webhook is send to the [conservatory app](https://gitlab.com/gitlab-com/people-group/peopleops-eng/conservatory).

Our current implementation of this for Workday, is handled by the [Platypus](/handbook/business-technology/enterprise-applications/integrations/platypus/) project.

### Synced fields

The sync is a one-way sync. We take the data from Greenhouse and add it to BambooHR. Some fields on BambooHR are calculated fields by using data
from Greenhouse.

| Greenhouse Data | BambooHR Data |
| --------------- | ------------- |
| `first_name` (Applicant data) - the preferred name | `firstName` |
| `last_name` (Applicant data) | `lastName` |
| the part in `first_name` that's between quotes (Applicant data) | `preferredName` |
| the part in `last_name` that's between quotes (Applicant data) | `customPreferredLastName` |
| `candidate_country` (Offer data) | `country` |
| `state_of_team_member` (Offer data) | `state` |
| `starts_at` (Offer data) | `hireDate` |
| `email_addresses.personal` (Applicant data) | `homeEmail` |
| `department` (Offer data) | `department` |
| `division` (Offer data) | `division` |
| `employment_type` (Offer data) | `customFullOrPartTime` |
| `id` (Greenhouse Applicant) | `customCandidateID` |
| Mapped through `candidate_country` to the right value | `customPayFrequency` |
| Mapped through `candidate_country` to the right value | `customRegion` |
| Copied from the `hiring_manager` | `customCostCenter` |
| `locality` (Offer data) | `customLocality` |
| `specialty` (Offer data) | `customJobTitleSpeciality` |
| `level_of_role` (Offer data) | `customRole` |
| Mapped by Greenhouse entity using [this file](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/entity_mapper.yml) | `customEmployeeCorptoCorp` |
| `starts_at` (Offer data) | `customHireDate` |
| `stock_options` (Offer data) | `customShares1` |
| `stock_options` (Offer data) | `customTotal` |
| `rsu_$_value` (Offer data) | `customRSUValue` |
| `entity` (Offer data) | `customInc/BV` |
| "Hired" (Hardcoded value - not from Greenhouse) | `customNotes` |
| `starts_at` (Offer data) | `date` |
| `job_title` (Offer data, can only be synced if the title exists on BambooHR) | `jobTitle` |
| `hiring_manager` (Offer data) | `reportsTo` |
| `starts_at` (Offer data) | `startDate` |
| Mapped by Greenhouse entity using [this file](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/entity_mapper.yml) | `location` |
| `salary` (Offer data) / `pay_frequency` | `rate` |
| If contractor -> Contract, else -> Salary | `type` |
| "Exempt" (Hardcoded value - not from Greenhouse) | `exempt` |
| "Hire" (Hardcoded value - not from Greenhouse) | `reason` |
| Depends on contractor or pay frequency | `paidPer` |
| Mapped through `candidate_country` to the right value | `paySchedule` |
| Mapped by using the local currency to the USD rate | `customCurrencyConversionFactor` |
| Latest revision date of the currency conversion file | `customConversionEffectiveDate` |
| `starts_at` (Offer data) | `customEffectiveDate2` |
| `starts_at` (Offer data) | `customEffectiveDate3` |
| `salary` * `customCurrencyConversionFactor` | `customUSDAnnualSalary` |
| `salary` with `currency` | `customLocalAnnualSalary` |
| `starts_at` (Offer data) | `customDate` |
| Mapped by Greenhouse offer entity using [this file](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/entity_mapper.yml) | `customType` |
| Hardcoded to `RSU`, `ISO`, or `International` | `customType1` |
| Hardcoded to `Stock Options` or `Restricted Stock Units` | `customShareVehicle` |
| (Hardcoded value - not from Greenhouse) | `customReason` |
| Yes | `customVariablePay` |
| `bonus_currency_&_amount_(amount_per_year_as_defined_by_previous_field)` (Offer data) | `customAnnualAmountLocal` |
| `customAnnualAmountLocal` * customCurrencyConversionFactor | `customAnnualAmountUSD` |
| `customAnnualAmountUSD` * `customUSDAnnualSalary` | `customOTEUSD` |
| `customVariablePay` * `salary` | `customOTELocal` |
| `job_code` (Offer data, can only be synced if the job code exists on BambooHR | `customJobCode` |
| `job_grade` (Offer data) | `customJobGrade` |
| `sales_geo_differential` (Offer data) | `customSalesGeoDifferential` |
| `ghp_id` (Offer data) | `customNumber` |
| `starts_at` (Offer data) | `customBonusdate` |
| `signing_bonus_currency_&_amount` (Offer data) | `customBonusAmount` |
| "Signing Bonus" (Hardcoded value - not from Greenhouse) | `customBonustype` |
| "Paid Signing Bonus" (Hardcoded value - not from Greenhouse) | `customBonuscomments` |
| `family_relationship` (Offer data) | `customRelationship` |
| A new employment status row is added and the value is set to `Active` | `employmentStatus` |
| `starts_at` (Offer data) | `customEffectiveDate6` |
| Mapped through `candidate_country` to the right value | `customPayFrequency2` |
| `job_code` (Offer data, can only be synced if the job code exists on BambooHR | `customJobCode2` |
| `job_grade` (Offer data) | `customJobGrade2` |

Besides syncing the above fields, we also sync:

- Documents between Greenhouse and BambooHR. The documents we sync are in the `attachments` on the
candidate itself. We only sync the signed offer letter and the resume. The signed offer letter is
synced to the `Contracts & Changes` and the resume is synced to the `Resumes and Applications`
folder on BambooHR. They are set to be shared with the new team member.
- Employment Status: these are different depending on which entity is linked to the team member.
It follows the process that is outlined in the [handbook](https://internal.gitlab.com/handbook/people-group/people-operations/people-connect/onboarding_process/#adding-a-new-team-member-to-bamboohr). When there are changes in probations, a
change should also be made to [this file](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/entity_mapper.yml).
- Country-specific accrual policies are set on BambooHR using the `country` and `state` listed on Greenhouse.

When required data is missing, the system is set up to send a Slack message about
this applicant. Currently these candidates will need to be synced manually.

### Progress

Currently the sync went through two iterations and has replaced most (but not all) manual work for the People Connect and Total Rewards teams.
Open issues can be found [here](https://gitlab.com/groups/gitlab-com/people-group/peopleops-eng/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name%5B%5D=p-hiring-exception-tool).
If you want to add another field to the sync, feel free to [create a new issue](https://gitlab.com/gitlab-com/people-group/peopleops-eng/people-group-engineering/-/issues/new?issuable_template=Engineering_Request).

### Missing Team Member

In case a hire wasn't synced an alert will be sent to the [`#peopleops-alerts`](https://gitlab.slack.com/archives/CLTBQ9XC7) Slack channel, in which a People Group Engineer will be able to manually re-sync the new team member after correcting malformed fields.
