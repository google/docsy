---
title: Security Policies - Working on features
---

## Process

Feature development is organized in an epic that collects feature related issues. Features are usually developed behind a feature flag. The goal of the feature development process is to default enable the feature flag.

Feature development epics are listed in [team priorities](https://about.gitlab.com/direction/security_risk_management/security_policies/#priorities)

### Epic's issues

- Title
  - Add 'BE' or 'FE' into the title to signify backend and frontend. The labels would signify this as well, but adding this to the title makes it easier to spot
- Milestone
  - The feature flag rollout issue's milestone is the milestone in which we plan to release the feature. Any issue above the feature flag rollout issue should have a milestone <= the feature flag rollout issue milestone
- Workflow label
  - Needs to be kept up to date so that users/PMs know the status of the epic and can plan their work appropriately (e.g. if all the issues have a label of ~workflow::refinement halfway through the milestone, then the epic probably won't be released that milestone).
- Order of issues in the "Child issues and epics" list
  - Any issue above the feature flag rollout issue is required for release
  - Any issue below the feature flag rollout issue is not required for release, but either a nice to have or a backlog issue

### Rolling out a feature epic

- All issues above the feature flag rollout issue should be closed before rolling out a feature flag globally on production
- The feature flag rollout issue should be the highest open issue on "Child issues and epics" to signify the state of the epic

### Follow-up work

- When additional work is identified that is not required for a release of a feature, a separate follow-up/improvements epic should be created and the issues should be added to it
  - This additional epic should not go into the priorities list for the group as not all of the issues may be important enough to schedule for a specific milestone. Instead the issues should be prioritized individually
- When we close the feature flag rollout issue, which happens when the feature flag has been defaulted on and the feature flag cleanup issue has been created (per the rollout issue template), we close the feature epic and move any remaining issues to the follow-up/improvement epic

### Bugs

- Bugs found before the feature flag is defaulted should be added to the epic and evaluated for impact
  - if a bug blocks the release, they should stay with the epic
  - if a bug does not block the release, they should be added to the follow-up epic
- Bugs found after the feature flag is defaulted on do not need to be added to any epic
