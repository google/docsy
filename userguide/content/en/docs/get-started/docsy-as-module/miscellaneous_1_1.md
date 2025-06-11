---
title: Miscellaneous
description: "Information on automations related to syncing to our team page, job families, and more."
---

## Team page entry daily sync

Once/day we run a pipeline that syncs the following fields for all team members:

- `name`, team members preferred name or nick name.
  - This can be changed at any time in the YAML entry itself, as a team member may want to set a custom nickname or preferred name.
  - Only updated if the team member has opted out of having their information on the team page, in which case this will be updated to reflect their current job title.
- `specialty`, included if the team member has a job specialty component.
- `departments`, A list of the team members Workday department and extra departments added to their team page entry.
  - We will only ever update the **first** entry of this list to their current Workday department.
- `division`, person's current division in Workday.
- `job_title`, person's current job title.
- `reports_to`, the `slug` reference of the team members manager team page entry.
- `gitlab` the `customGitLabUsername` value from Workday.
- `public` whether or not the team member has selected having their information exported or not.

This means that if team members edit that field in the file, this will result in the sync overwriting when it runs again. The reason for this is that we consider Workday as the single source of truth for this data. Thus team members and managers will need to make adjustments in Workday first and this will be automatically propagated in the team page entry.

Team members can edit their export preferences at any time by following [this job aid](https://docs.google.com/document/d/16_G0jQEjV3f08rGZ65g6RHTCSX5IfFalo9ZUdLEqH1s), which will reflect their export preferences the next time the sync runs.

### Diagram

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/236d061a-50b5-4917-a74d-29715ed035e1" id="ZwPRKLUTflmI"></iframe></div>

### Caveats

- In the event that a daily sync is not merged the same day, that is fine, we can close the outdated MR and merge the most recent as this will contain the latest changes only updating files currently included in the handbook.
- Pipelines may fail when adding to the merge train if a team member edited their team page entry after the MR was opened, most can be resolved by using the `/rebase` quick action, or by resolving conflicts manually. As above, these will usually resolve themselves on the next sync.

## Parental leave PTO to BambooHR

We run a daily check to see if any new Parental leave PTO was requested for the day before on Time Off by Deel. If there are any PTO events created on that day, we will add 3 employment statuses to the team member's BambooHR profile:

- One with the status `Parental Leave` with the date the start date of the PTO event
- One with the status `End of Parental Leave` with the date the end of the PTO event
- One with the status `Active` with the date the end date of the PTO event + 1

## Sensitive data compliant Time Off by Deel export

Every week, a scheduled job queries all PTO events occurring during a ±4 week time frame. Sensitive information (eg. the *type* of PTO taken) is then filtered out from these PTO events. The compliant data is then uploaded to a Google Cloud Storage bucket for the data analytics team to consume.

The data team then makes a subset of this information available via Sisense to allow team members to create more accurate charts for metrics like *number of merge requests per team member over a 30-day period*.

## Netherlands accrual adjustments

A scheduled job runs on January first and for each team member located in the Netherlands, if their `Employee Accruals` balance is negative, it is set back to 0 days.

A similar scheduled job also runs on July first, but in this case, for each team member located in the Netherlands, if their `Employee Accruals` balance exceeds 10 days, it is set back to 10 days.

## Set closed training issues to confidential

Once per day, closed issues in the [training project](https://gitlab.com/gitlab-com/people-group/Training) are automatically marked as confidential for compliance.

## Letter of employment

Every hour, a scheduled job checks the letter of employment requests spreadsheet for new entries. For each entry, a letter of employment will be generated using the team member's Workday data. The letter is then sent directly to the team member's work email address.

To retrieve your letter of employment, please use the process in the internal handbook [here](https://internal.gitlab.com/handbook/people-group/people-operations/people-connect/frequently_requested/#letter-of-employment).

## Entities sync

Once per week, Workday locations are synced to GitLab groups. Team members are then added to the correct group. The list of groups (entities) can be found in the [entities project](https://gitlab.com/gitlab-com/entities).

When creating a merge request or issue that affects all members of a given GitLab entity, all members with direct membership can be pinged using `@gitlab-com/entities/<entity-name>`.

eg. for Canada Corp, use `@gitlab-com/entities/canada-corp`.

## On-call scheduling spreadsheet

On the first day of each month, we populate a spreadsheet including information for team members who have been at GitLab for more than 3 months. The spreadsheet is used by engineering to plan for on-call availability.

Synced fields are sourced from Workday.

- Name
- Job title
- Start Date
- Division
- Department
- Role
- Weekend availability
- Email
- Manager

## Weekly New hires

Every Wednesday at 10AM UTC, we run the audit on all the team members who started the week before. A spreadsheet is created
in a Google Drive folder that is shared with Total Rewards and the VP People Operations, Technology & Analytics. In the
spreadsheet we will list all the team members that we audited and mark the columns that need to be checked.

## Monthly all Team Members

Every first of the month at 10AM UTC, we run the audit on all the active team members at GitLab. A spreadsheet is created
in a Google Drive folder that is shared with Total Rewards and the VP People Operations, Technology & Analytics. In the spreadsheet
we will list all the team members that we audited *and* that had something marked as *needs to be checked*.
