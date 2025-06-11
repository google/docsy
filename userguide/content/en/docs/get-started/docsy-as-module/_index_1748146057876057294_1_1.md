---
title: "Iteration Planning per Service Offering"
description: "Learn about PS Transformational planning."
---

## Iteration 0 Planning for Transformational/Large scale Migrations

As we head into Kickoff and Planning & Design with our customers, its important that we're able to articulate what we plan to cover within the initial planning phases, and how it will impact the overall project and roll into future Iterations. The below guide includes the management principles across the Iterations to ensure operational excellence as we move into delivery. This allows us to show measurable results early and often to emphasize the importance of the initiative and continually gain buy in from stakeholders. We need to teach the core Customer team how to use GitLab to manage large initiatives, to help reinforce the Customer's decision to leverage the GitLab platform.

In all Transformation projects, there will be elements of SCM migration and CI transition. Focus on creating a structure that is detailed and specific to drive adoption of those key GitLab features.

1. **Iteration 0:**
   1. Source/destination discovery and access investigation
      * definition of done: tokens gathered from each system.
   2. Congregate container/VM deployed
      * definition of done: congregate running. Tokens added. Validated API calls return data, validating network between source, destination, and congregate VM.
   3. Plan waves: establish spreadsheet to plan waves, or inspect source system to outline specific root groups to migrate. Create a tracking list to understand what projects will be moved on which date. Understand users affected by these waves. Establish CICD conversion dependencies as part of wave plan. Establish migration validation criteria and execution
   4. Establish communication with end users
      * Definition of done: customer program manager understands maintenance window (for source being in read-only mode), which projects will move on which date, which users will be affected by which projects, where users are supposed to go for support or if they have questions.
   5. Plan CI/CD pilot application teams. Hold discovery sessions with each application team who have been identified as a pilot team.
   6. PM Review
      * Retro on communication, collaboration, expectations management, etc.
      * Iteration review on items completed/blockers
2. **Iteration 1 - N**. In subsequent iterations prior to or in parallel with scaled migration, map the pilot activities and migration requisite issues into each iteration:
   1. Hold Planning session with CI pilot team to understand job-level
      * definition of done, e.g. what are the inputs and outputs that tell us that the job was translated correctly; also non functional requirements like runtime/performance.
   2. Hold working sessions to translate Jenkins/Teamcity/Bamboo etc. jobs into GitLab CI
      * definition of done: use above definition of done criteria as evidence of completion.
   3. Document learnings into reusable instructions to be used in future scaled transition efforts.
   4. Memorialize pilot team CI transition with key stakeholders and provide demonstration
   5. Template CI pipeline jobs into CI template library. Refactor pilot team CI pipeline to point to templates.
   6. Create issue template that migration automation will open upon SCM migration with step by step guidance on how to translate CI and/or use GitLab CI template library.
   7. Hold widespread lunch and learn to showcase pilot team transition and highlight the use of CI template repository.
   8. PM review:
      * Retro on application selection for Pilot, time dedicated from customer pilot team members, bureaucracy or other constraints that were encountered, etc
      * Iteration review - demo the progress on the pilot team CI translation, discuss next steps and blockers.
3. **Iteration N - M**. For iterationss during migration:
   1. Create one issue per wave for migration engineer to use as runbook. Communicate to end users who will be affected by that wave. Communicate how they can get support and what to expect in terms of the new issue landing in their newly-migrated GitLab project.
   2. Create the dashboard that can show the burnup of issues closed (indicating CI adoption). Create another dashboard (Graphana?) that shows CI jobs run per day. Showcase to key executives once any amount of data starts to show up.
   3. Hold office hours to help customers drive adoption of GitLab CI.
   4. Create a Consultation request approach for an app team to request a GitLab Engineer to help them translate their pipeline job?
   5. PM:
      1. Schedule stakeholder review / [Steerco](https://docs.google.com/presentation/d/1TDKOJeuzR1uy18umu6ovy30l_A986pOEatFn_7eiNbQ/edit#slide=id.g2e5469c2f0d_0_465).
      2. Retro - review support requests, issues in step by stem communications, data integrity post migration, etc. Iteration review to showcase the number of apps migrated and number of CI jobs run/ CI issues closed.
4. **Iteration M - O.** Iterations after the SCM migration but during CI transition
