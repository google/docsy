---
title: "Product Milestones"
---

When planning, Product Managers plan to GitLab milestones. Here is the process for creating and maintaining them.

## Product Milestone Creation

**One quarter ahead**, the Engineering team, in partnership with the Product team, will create all of the necessary milestones for the next quarter. Our standard practice is to have the Major [release](https://about.gitlab.com/releases/) every May, resulting in:

```text
XX.0 - May
XX.1 - June
XX.2 - July
XX.3 - August
XX.4 - September
XX.5 - October
XX.6 - November
XX.7 - December
XX.8 - January
XX.9 - February
XX.10 - March
XX.11 - April
```

Milestone start and end dates are defined as follows:

> The next milestone `m+1` starts the Saturday prior to the current milestone `m`'s release date and runs through the Friday prior to the milestone `m+1`'s release date.

To update the milestones in GitLab, Product Operations follows these steps:

### Step 1: .org

1. Ensure that the relevant milestones are created. [Go to GitLab Milestones for .org](https://gitlab.com/groups/gitlab-org/-/milestones)
1. Click on `New milestone` in the top right
1. Title the milestone with the `dot` release that makes sense.
   - Note: We iterate through the `.0` and further for each release with the `.0` release every May.
1. Set the start date to be the Saturday prior to the previous releases [release date](https://about.gitlab.com/releases/)
1. Set the end date to be the Friday prior to the third Thursday of the release month
1. Closing milestones happens in the [Engineering workflow](/handbook/engineering/workflow/#milestone-cleanup)

### Step 2: .com

1. Ensure that `.com` mirrors the `.org` milestones for consistency in Product, Marketing etc.
1. Ensure that the relevant milestones are created. [Go to GitLab Milestones for .com](https://gitlab.com/groups/gitlab-com/-/milestones)
1. Click on `New milestone` in the top right
1. Title the milestone with the `dot` release that matches `.org`.
   - Note: We iterate through the `.0` and further for each release with the `.0` release every May.
1. Set the start date to be the Saturday prior to the previous releases [release date](https://about.gitlab.com/releases/)
1. Set the end date to be the Friday prior to the third Thursday of the release month
1. Closing milestones happens in the [Engineering workflow](/handbook/engineering/workflow/#milestone-cleanup)

## Understanding Releases

The [release definitions](/handbook/engineering/releases/) are maintained by the Engineering Team and we run the end of each Milestone on the [release date](/handbook/engineering/releases/).

## Product Milestones Usage

- These milestones are used create boards and Issues for each release
- The [Product Development Google Calendar](https://calendar.google.com/calendar/embed?src=gitlab.com_baef86oeitmd9uuq7m9i8021j8%40group.calendar.google.com) (WIP) - also uses these milestone names and dates.

## Relevant links

- [Engineering release definitions](/handbook/engineering/releases/)
