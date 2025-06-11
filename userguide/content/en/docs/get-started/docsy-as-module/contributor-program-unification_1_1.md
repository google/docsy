---

title: "Contributor Program Unification & Growth Plan"
description: "Streamline the different programs that support & grow our Contributor Community within GitLab."
---

## Goal

As GitLab has grown, various teams have developed several programs and initiatives to engage and recognize the wider GitLab community. These include programs like GitLab Heroes, Core team, MVPs, and Contributors. We propose combining aspects of all these programs to create a single, unified contributor program that more adequately recognizes the wider community contributions that are vital to GitLab's success.

By consolidating contributor programs as part of GitLab's Developer Relations team, we now have the opportunity to take a more consistent and strategic approach to community programs by aligning requirements, recognition, incentives, and rewards. This will help us foster a more dynamic and engaged community of GitLab contributors and evangelists. To that end, we plan to:

- Consolidate existing initiatives into a single contributor program with clear requirements and benefits
- Leverage the new achievements feature developed by the team (https://gitlab.com/groups/gitlab-org/-/epics/9429) to ensure community recognition (one goal is to award achievements to at least 150 contributors)
- Partner with product/engineering to drive a programmatic approach to engaging with key members of our community

We propose the following phases of work consolidating existing initiatives into a single program with clear requirements and benefits:

- Establish a consistent method for measuring activity value, including non-code contributions
- Determine a reward and incentive plan based on member's value to GitLab, including product marketing
- Increase diversity & inclusion of our Wider Community
- Address recognition gaps
- Grow public meetups
- Increase repeat contributors by promoting recent contributions instead of historical value

## Current situation

Developer Relations is currently responsible for overseeing five programs, each with its own goals, means of encouraging contributors to reach those goals, and forms of recognition and rewards for achieving those goals.

| Name of program  | Goal | Benefits & Rewards | Handbook Page |
|------------------|------|--------------------|---------------|
| Heroes | Evangelizing GitLab by speaking, demoing, giving talks, writing blogs, … | Invites to GitLab events, Ultimate licenses, Swag | <https://about.gitlab.com/handbook/marketing/developer-relations/evangelist-program/#gitlab-heroes> |
| Meetup Organizers | Support meetup organizers so that GitLab can be evangelized &  GitLab Heroes have a stage to talk from. | Meetup Expenses, Swag | <https://about.gitlab.com/handbook/marketing/developer-relations/evangelist-program/#meetups> |
| Code Contributors<br>Hackathon, MVP, 1st MR Merged code contributors | Support & grow the number of code contributors as described in our [company strategy](/handbook/company/strategy/#dual-flywheels) in order for our dual-flywheel to go faster. | Swag | <https://about.gitlab.com/handbook/marketing/developer-relations/contributor-success/> |
| Leading Organizations | The GitLab Leading Organization program supports this mission by recognizing and incentivizing organizations and individuals who are among our most active contributors. | Consultant Contributor for organizations > 100K ARR, SLO on review time, Legal Advice, Certificate of achievement | <https://about.gitlab.com/handbook/marketing/developer-relations/leading-organizations/> |
| Core Team | The mission of the core team is to act as a steward for the wider GitLab community and help GitLab live up to its mission and values. | Limited Slack Access, Developer Role in gitlab-org, Team Page listing, Ultimate license, JetBrains license, GitLab event sponsored access, Swag | <https://about.gitlab.com/community/core-team/> |

## Gaps

The current configuration of programs currently offers no clear, predictable path for community members to recognize and reward non-code contributions. Such contributions may include:

- Reviewing code
- Collaborating on existing merge requests
- Evangelizing GitLab on social media
- Assisting in forum moderation
- Volunteering at events
- Triaging bugs and responding and working with the wider community (including GitLab team members)
- Reviewing issues
- Validating stale issues

Recognizing such contributions is critical for building a well-rounded and engaged community. As [Klint Finley writes](https://github.com/readme/featured/open-source-non-code-contributions):

> It's also crucial to elevate and appreciate non-code contributors. This not only helps keep current contributors motivated but also helps attract new contributors.

Fostering these contributions is also important for building a more resilient and innovative project and community. As [John E. Picozzi writes](https://opensource.com/article/22/8/non-code-contribution-powers-open-source):

> For example a marketing person will likely have different experiences and perspectives than a developer. Every effort moves open source forward in some way—that's why non-code contribution is essential.

Simply put: without these activities, we would not have a thriving community. But currently we have no clear way to measure community activity, score this activity, and follow up on it from a single source of truth.

Another non-trivial gap is the lack of an explicit diversity and inclusion incentive within the contributor community. We should experiment and develop ideas to increase diversity in our community, attract and retain top contributors from underrepresented groups, and promote a safe and inclusive community.

## Phase 1:  Establish a consistent method for measuring activity value, including non-code contributions

We aim to keep the spirit of the code contributor program, the GitLab Heroes, Meetups and others, while removing the unique processes around them and unifying those in a single program. Additionally, we are adding support for recognizing non-code contributions.

### How will we measure these activities?

- Merge Request
  - Author
  - Comment
  - Git Commit
  - Review
- Issue
  - Author
  - Comment

### Tactics: Contests & Awards

Contests are used as a way to scale outreach and increase the amount of contributions. Awards are used to increase the perceived value of a contribution.

Award: Contributors of the month

- Replaces the MVP program
- Includes any activity and is elected in a similar fashion as the MVP is today
- Not limited to a single contributor if we decide to award more than 1 for a justified reason
- Can explicitly include what we considered as GitLab Hero activity in the past, not just code contributors

Contest: Hackathon

- Once a quarter

Contest: Backlog Cleansweep

- Focus on triaging and validating existing backlog issues

### Contribution Weights

1. Scope: https://gitlab.com/gitlab-com & https://gitlab.com/gitlab-org
1. Value: For this iteration, a merged code contribution holds more weight than other activity, to incentivize bias for action & accelerate innovation.
1. Cadence: We can assign additional credits monthly to those that we think deserve additional recognition, such as social media attention or other significant activity

**Code Contribution**

- Weight: 5
- Authored a git commit within an MR
- Assigned when the MR has the status merged

**Issue comment / author with a linked merged MR**

- Weight: 2
- Assigned when the issue is closed

**Issue comment / author without a linked merged MR**

- Weight: 1
- Assigned when the issue is closed

**Bug validation comment**

- Weight: 3
- Assigned when validation label is applied or issue is closed

**Merge Request comment / author**

- Weight: 2
- Assigned when the merge request is merged

### Contributor Levels

Note: The points, levels & status can still change.

| Contributor Levels | Requirements | Benefits & Rewards |
| --- | --- | --- |
| Level 1 | 3 Contribution Points | Achievement on profile, Swag |
| Level 2 | 25 Contribution Points | Achievement on profile, Swag |
| Level 3 | 75 Contribution Points | Achievement on profile, Swag |
| Level 4 | 75+ Contribution Points | Achievement on profile, Tier 3 swag coupon, 1 GitLab Ultimate License for personal use |
| Leading <sub>Scores can be combined within an organization, Formerly known as Leading Organization</sub> | 30 Contribution Points in the last 3 months, Evaluated per quarter | Achievement on profile, Swag, 4 day SLO time to get a review/feedback on authored MRs |
| Core | after approval, Individual basis only, 120 Contribution Points, Election process | Achievement on profile, Swag, 1 GitLab Ultimate License for personal use, Slack Access (Requires an NDA to be signed), Developer Permission for GitLab projects |

| Contributor Achievements | Requirements | Benefits & Rewards |
| --- | --- | --- |
| Hackathon Winner #1 | First place in the hackathon | Achievement on profile, Swag |
| Hackathon Runner up #2 | Second place in the Hackathon | Achievement on profile, Swag |
| Contributor of the month (MVP) | Elected by GitLab Team Members | Achievement on profile, Swag |

| Contributor Achievements | Requirements | Benefits & Rewards |
| --- | --- | --- |
| Bugsmash Winner #1 | First place in the bugsmash | Achievement on profile, Swag |
| Bugsmash Runner up #2 | Second place in the bugsmash | Achievement on profile, Swag |
| Contributor of the quarter (MVP) | Elected by GitLab Team Members | Achievement on profile, Swag |

### Examples, according to the activities

- A community member decided to organize a meetup with other volunteers in their region and creates an issue to track this behavior.
  - Each speaker gets 1 point
  - Each organizer gets 1 point

- Developer that gets an MR merged
  - Issue closed
    - Issue is credited to all participants that have commented in that issue or were assigned to it, each participant is credited 1 point
  - Merge Request merged
    - Merged merge requests credited to all content participants that have commented in that issue or were assigned to it
    - Merged merge requests credited to all code participants, each participant was credited 5 Contribution Points

- A community member validates a bug
  - Issue Labelled as ~"Issue Validation::<FY*Q*>"
    - Validation credited to participant who commented in issue explaining what they have validated and requested label be applied

- Writing blog posts
  - Issue created & closed with the reference to the blog post
    - Issue is credited to all participants that have commented in that issue or were assigned to it, each participant was credited 1 point
  - Merge Request merged
    - Merged merge requests credited to all content participants that have commented in that issue or were assigned to it, each participant was credited 2 contribution points
    - Merged merge requests credited to all code participants, each participant was credited 5 Contribution Points

## Phase 2: Rewards and incentives based on member's value to GitLab, including product marketing

When looking at our total community, we want to cheer for those that spread the word & promote our cause (formerly known as GitLab Heroes & Meetups program), in combination with contributions that happen on GitLab.com. Combining the offline & online contributions in a single program is challenging but necessary.

Similar to “MVP” or other award ceremonies, we will select wider community members on a monthly basis that went above and beyond in community participation. This could go from speakers at large events to moderators in our forum or other activities. Individuals that positively talk about & evangelize GitLab and have a large reach, should be awarded and recognized. This is comparable to the (former) GitLab heroes program. In time, we should strive for automation where possible.

The portal through which we will review this data will be Common Room. Activities reviewed could be, but are not limited to:

- Forum Activity
- Discord Activity
- Twitter Activity
- Other channels

### Examples

- A user tweeted extensively about GitLab and has 2000 followers
  - After a manual review, GitLab awarded this user 10 Contribution Points

## Phase 3: Draft - Increase diversity and inclusion of our wider community

Due to the sensitive nature of this phase, we’re looking for feedback on these ideas from multiple angles over at https://gitlab.com/gitlab-org/community-relations/contributor-success/team-task/-/issues/248

## Phase 4: Address recognition gaps

Award: Organization of the month

- Addition to the contributor of the month
- Is granted Swag
- Includes & combines activity of all users tied to that organization.
- Highlights GitLab partners or customers that contribute to GitLab publicly

Award: “The Sid Sijbrandij award” - Yearly

- A very special title only a select few can hold. Mostly driven around being going above and beyond while upholding the values of GitLab
- Sid is presented with a shortlist of 5 contributors & what they achieved
- Winner gets a unique message from Sid, social message, swag & award statue.

## Phase 5: Draft - Grow public meetups

Wider community members that hold a public event with > 20 participants or speak at an event about GitLab can request swag to be sent to their location. We will compile a package in advance and ship these in the same automated way as we ship our swag today (coupons). In the past this required manual hand holding, and was fairly slow. By streamlining this and providing 2 tiers for public gatherings, we should be able to save a considerable amount of time processing these requests.

- Tier 20 (0-20 people) - value of $250
- Tier 40 (20 people or above) - value of $500

This phase needs further discussion and validation if meetups are still the preferred way to grow the grassroots movement.

## Phase 6: Draft - Increase repeat contributors by promoting recent contributions instead of historical value

As contributors start to accumulate points, we need to reward active and recent behavior. On the user profile you should be able to see the current score of the person as it relates to the last 3 completed months. Another section should exist to show the total history.

## Open Questions or further iterations

- Using this point system & having organizations combine their users to more easily “level-up”
  - We can start to introduce a public organizational ranking. Leaderboards of both users & organizations can be built, similar to https://www.drupalcontributions.org/ or
  - We are blocked to execute on that and need to solve https://gitlab.com/gitlab-org/gitlab/-/issues/368130 to proceed.
- Recognizing organizational support for the contributors is critical.
  - We should start to recognize partners that contribute
  - Give benefits to those partners & customers
  - Spoke with Honora Duncan and she was very excited about such a possibility.
  - We should bias those that contribute more, similar to the example over at https://www.drupal.org/drupal-services (contribution count is publicly displayed)
- The system could be tweaked in favor of certain projects in certain months, allowing us to shift focus on certain areas such as AI experiments, Terraform, GitLab CLI, or other ways to slice and dice our contributions automatically and hand our more or fewer rewards to these areas.
- Do we want a 1:2 ratio between “code contributions” and “non-code contributions”?
  - Given we have always biased & measured towards code contributions vs others in the past, I think it’s fair to start from that point and learn.
  - It is rather risky to set them as equal from the start, as we do not know what the impact of it will be.
  - Code contributions are per definition positive, harder to assess from comments or other activity.
