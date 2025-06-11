---
title: "GitLab MVP Selection Process"
description: Process for Contributor Success to select GitLab MVPs
---


## GitLab MVP

Each month GitLab recognizes one or more community contributors as GitLab MVPs ("Most Valuable Persons") to be featured in the GitLab release post. Nominations are a rolling process so that contributors can be nominated and supported at anytime. The GitLab MVPs are recognized within the GitLab release post and across Slack and Discord. MVPs also receive an achievement badge for their profile and a GitLab swag pack or tree planting option in celebration of their contribution.

- Hall of fame list of [GitLab MVPs](https://about.gitlab.com/community/mvp/)
- [Release posts](https://about.gitlab.com/releases/categories/releases/) on GitLab blog

## Workflow for selecting GitLab MVP

1. A [rolling GitLab MVP Nominations issue](https://gitlab.com/search?search=%22GitLab+MVP+Nominations%22&nav_source=navbar&project_id=39971471&group_id=65123486&scope=issues)
is used for the entire major release cycle (for example 17.0 through 17.11). Community contributors can be added to this issue at anytime.
1. Use the [`mvp_workflow_tracker.md` issue template](https://gitlab.com/gitlab-org/developer-relations/contributor-success/team-task/-/blob/main/.gitlab/issue_templates/mvp_workflow_tracker.md?ref_type=heads) to create an issue with a checklist of steps to follow during the selection process.
1. Select one or more [eligible MVPs](/handbook/marketing/developer-relations/contributor-success/mvp-process.html#mvp-eligibility) from the nomination issue.
   - Selections should be chosen based on contribution and community impact, nomination comments and emoji votes.
   - Selections should be completed at least 10 calendar days before the [release date](https://about.gitlab.com/releases/).
1. Make a new thread in the nominations issue announcing the MVP(s).
   - Be sure to ping and thank the nominators and anyone who added supportive comments for the nominees.
   - Add the MVP(s) to the table in the top level description of the issue.

   ```text
   :tada: Congratulations to our X.Y :letter_m: :letter_v: :letter_p: winner(s) X https://gitlab.com/x
   Note about X's contribution(s).

   A huge thank you to A B and C for nominating MVPs and X Y and Z for adding support.
   ```

1. From the current release branch, draft a merge request for adding the new MVP(s)
   - The first step is switching to the current release branch `release-x-y` in the `www-gitlab-org` project. Using the 15.8 release as an example, navigate to the current release branch directly on GitLab by selecting the `release-15-8` branch from the dropdown menu. If working locally, checkout the `release-15-8` branch.
   - Navigate to the `mvp.yml` file inside the current release folder under `data/release_posts/x_y`. In this example it would be the `15_8` folder which has a placeholder `mvp.yml` file inside.
   - Begin drafting the merge request by updating the new MVP name and user handle. Remove the placeholder text for the write-up blurb. Commit the changes on a new branch. When creating the merge request on GitLab make sure your branch is targeting the current release branch `release-x-y` and not targeting `master`.
   - Follow the steps to collaborate the [MVP write-up blurb](#mvp-write-up-blurb).
   - Update the [data/mvps.yml](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/mvps.yml) file from your existing merge request.
   - Add release version, MVP name, user handle, release post date and release post URL.
   - Assign another Contributor Success team member to review/merge and double check the merge request is targeting the correct release branch.
   - Ping the [release post manager](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/release_post_managers.yml) into the MR for awareness.
   - Merge by the Tuesday of release week.
1. Award the MVP winner with the MVP achievement using the `MVP Achievements` group access token from the Contributor Success vault.\
   NOTE: You will need the [1Password cli](/handbook/security/password-guidelines.html#cli-integration) installed:

   ```shell
   curl -g \
   -X POST \
   -H "Content-Type: application/json" \
   -H "Authorization: Bearer $(op read 'op://Contributor Success Team/GitLab MVP Achievements Group Access Token/password')" \
   -d '{"query":"mutation{achievementsAward(input:{achievementId: \"gid://gitlab/Achievements::Achievement/53\" userId: \"gid://gitlab/User/<user_id>\"}){errors}}"}' \
   https://gitlab.com/api/graphql
   ```

   NOTE: To find a userId from a username, visit the GitLab profile page for the user and click the dropdown elipsis in the upper right corner.

1. Follow the steps for [Sending MVP Appreciation Gifts](#sending-mvp-appreciation-gifts).
1. After release post goes live, link the MVP section of the release post in Slack `#whats-happening-at-gitlab` channel along with a reminder to add new nominations.

   ```md
   :mega: Check out our latest GitLab MVPs X & Y in the X.Y release post!
   You can nominate community contributors in the rolling nominations issue that covers releases 17.0 through 17.11 here: https://gitlab.com/gitlab-org/developer-relations/contributor-success/team-task/-/issues/490
   Please add any community contributors throughout the year whenever you see a helpful contribution. Your support now will help them when they make future contributions to GitLab too!
   ```

1. Forward the message to `#developer-relations`, `#mr-coaching`, and `#core`
1. Share the message in the Discord `#announcements` channel and thank any wider community members who added nomoinations or support.

### MVP Eligibility

- The Contributor Success team will make the final choice on the GitLab MVP(s).
- The Contributor Success team will consider one or more MVPs as appropriate.
- A contributor is eligible to be MVP once per major release cycle. For example, if they are MVP during any 17.* milestone, they cannot be an MVP again until the 18.0 milestone.
- A quick way to check past MVPs is to view [`/data/mvps.yaml`.](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/mvps.yml).
- Contributors may be nominated whether they have contributed to the current release cycle or not. Contributors are recognized for previous and ongoing contributions to GitLab.
  - E.g. See the [15.8 MVP](https://about.gitlab.com/releases/2023/01/22/gitlab-15-8-released/#mvp) selected for prior release work and the [15.7 MVP](https://about.gitlab.com/releases/2022/12/22/gitlab-15-7-released/#mvp) selected for steady contributions.

### MVP Write-Up Blurb

Use the `data/release_posts/x_y/mvp.yml` merge request to collaborate on the MVP write-up with the MVP winner, nominator and other team members.

The MVP write-up section should:

- Contain a brief description of the MVP's release contribution and summary of prior GitLab contributions.
- A link to the MVP's GitLab profile.
- Any links to relevant issues, MRs, issue boards or epics the MVP contributed to.
- Contributor Success is responsible for reviewing the entry for:
  - Consistency and accuracy
  - Correct and working links for user information, issues, MRs, etc.
  - Correct spelling of names, organizations, product features, etc.
  - Correct [prounoun](/handbook/people-group/pronouns/) usage
- The write-up should be merged by the Tuesday of release week to the `data/release_posts/x_y/mvp.yml` file targeting the specific release branch

You can use the sample message below when pinging the MVP winner and team members into the merge request:

```text
Hi **{MVP_WINNER}** :wave:

Congrats on being selected as GitLab's **{X.Y}** MVP!

We are working on a write-up for you that will be included in the **{X.Y}** release post. For reference you can check out our past [MVPs list](https://about.gitlab.com/community/mvp/) and here are a few notable examples:
- https://about.gitlab.com/releases/2024/04/18/gitlab-16-11-released/#mvp
- https://about.gitlab.com/releases/2024/03/21/gitlab-16-10-released/#mvp
- https://about.gitlab.com/releases/2024/02/15/gitlab-16-9-released/#mvp
- https://about.gitlab.com/releases/2023/07/22/gitlab-16-2-released/#mvp
- https://about.gitlab.com/releases/2023/02/22/gitlab-15-9-released/#mvp

Please let us know if there are any details you would like us to highlight about yourself, your work or your contributions to the GitLab community.

I'm also pinging **{NOMINATOR}** **{COMMENTER}** who either nominated or commented on your contributions in the **{NOMINATION_ISSUE}**. They can also chime in with anything worth noting for the release post write-up or a quote about your contributions.

We only have a few days to put this together. If we don't hear back or you don't have the time we will do our best to put something together! The **{X.Y}** release post will go live on the [release date](/handbook/engineering/releases/).

Finally we will work to get your GitLab swag sent over soon!
```

## Sending MVP Appreciation Gifts

Every release GitLab chooses a [Most Valuable Person (MVP)](https://about.gitlab.com/community/mvp/) and the Developer Relations team recognizes them for their contributions.

1. Determine MVP after release post is published to the [blog](https://about.gitlab.com/releases/categories/releases/)
1. Find MVP's contact information
   - [Contacting contributors](/handbook/marketing/developer-relations/contributor-success/community-contributors-workflows.html#contacting-contributors)
1. Send Swag according to our [SWAG operations guide](/handbook/marketing/developer-relations/workflows-tools/swag/)
   - Note that MVPs currently receive a Tier 3 swag prize
