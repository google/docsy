---
title: Container Registry Metadata Database Self-managed
description: >-
  Project plan for the rollout of Container Registry Metadata Database to self-managed users.
---

## Weekly Project Plan

Epic: [https://gitlab.com/groups/gitlab-org/-/epics/5521](https://gitlab.com/groups/gitlab-org/-/epics/5521)

### Milestone 16.3 (June 18, 2023 - July 17, 2023)

#### Goals

- Building instructions for manual install of the metadata database
- Planning discussions on how to breakdown the project into Experimental and Beta phases
- Milestone plan: [https://gitlab.com/gitlab-org/gitlab/-/issues/416110#container-registry](https://gitlab.com/gitlab-org/gitlab/-/issues/416110#container-registry)

#### Week of Aug 14-18

- Completed:
  - Updated the [architecture blueprint](https://docs.gitlab.com/ee/architecture/blueprints/container_registry_metadata_database_self_managed_rollout/) with a new table structured for our feature based rollout approach: [https://gitlab.com/gitlab-org/gitlab/-/merge_requests/128824](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/128824)
  - Completed the POC for installing the database using Helm and Omnibus for new installations.  Demo videos are posted in the [issue](https://gitlab.com/gitlab-org/container-registry/-/issues/1065) for both installation paths.
  - Implemented Headway automation. All issues and MRs marked with the `~headway-self-managed-registry-db label` will be added to tables in the [epic](https://gitlab.com/groups/gitlab-org/-/epics/5521).
  - Product is researching how GitLab has structured communication with users in other beta programs through the use of separate issues for enrollment and feedback.  This also provides a communication channel for users who reach out to us through our Support counterpart.

### Milestone 16.4 (August 18, 2023 - September 17, 2023)

#### Goals

- Continue to develop walkthroughs and demos for manual database installation [https://gitlab.com/gitlab-org/container-registry/-/issues/1068](https://gitlab.com/gitlab-org/container-registry/-/issues/1068)
- Evaluate options for installing the database through Omnibus and Helm Charts [https://gitlab.com/gitlab-org/container-registry/-/issues/1102](https://gitlab.com/gitlab-org/container-registry/-/issues/1102)
- Weekly forecasts for this project will be determined over the course of this milestone.  This project is just getting started and will initially be reactive to research findings and user feedback.

#### Week of Aug 21-26

- Plan:
  - Define the features and draft changes for the feature based rollout approach discussed last week.  This matrix of features will be documented in the [architecture blueprint](https://docs.gitlab.com/ee/architecture/blueprints/container_registry_metadata_database_self_managed_rollout/).
  - Officially opening the Beta program this week.
  - Continue [testing](https://gitlab.com/gitlab-org/container-registry/-/issues/1099) data migration strategies with different types of storage backend and registry sizes.
  - Starting work on Omnibus and Helm Chart installations following discovery in the POC completed last week.
  - Experiment with enabling and configuring the metadata database in Omnibus installations. [https://gitlab.com/gitlab-org/container-registry/-/issues/1071](https://gitlab.com/gitlab-org/container-registry/-/issues/1071)
- Completed:
  - Added information about the beta program to docs ([MR in progress](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/130123)) including the list of features that will be used as iterations to progress beyond Beta.
  - Persist container registry database settings in Omnibus after a reconfiguration. [https://gitlab.com/gitlab-org/container-registry/-/issues/1071](https://gitlab.com/gitlab-org/container-registry/-/issues/1071)

#### Week of Aug 28-Sept 1

- Plan:
  - Create issues for interaction and feedback with issues.  Identifying a first user to start working with the beta this week.
  - Discussions and research to provision the container registry database in Omnibus. [https://gitlab.com/gitlab-org/container-registry/-/issues/1102](https://gitlab.com/gitlab-org/container-registry/-/issues/1102)
  - Testing different sizes of the registry for scalability.
  - Coordinate with our Support Liason to prepare for user interaction.
- Completed:
  - Created issues for communication with users regarding [beta interest](https://gitlab.com/gitlab-org/gitlab/-/issues/379240) and [feedback](https://gitlab.com/gitlab-org/gitlab/-/issues/423459).  Discussions are in progress with a potential first user for the beta program.
  - Through testing, the team discovered a problem with persisting database configuration which will need to be fixed in 16.4 before the beta user can start the installation.

#### Week of Sept 4-8

- Plan:
  - Review and merge the omnibus [MR](https://gitlab.com/gitlab-org/omnibus-gitlab/-/merge_requests/7100) for persisting database settings.
  - Create walkthrough demo of the migration process ([issue](https://gitlab.com/gitlab-org/container-registry/-/issues/1068))
  - Add to the [container registry seeder](https://gitlab.com/gitlab-org/ci-cd/package-stage/container-registry-seeder) project to make testing easier.
- Completed:
  - Merged omnibus [MR](https://gitlab.com/gitlab-org/omnibus-gitlab/-/merge_requests/7100) and tested.
  - Recorded [youtube video](https://www.youtube.com/watch?v=aZdyYrKdtxk) for import process.
  - Tested 100GB model for migration in GCP. ([issue](https://gitlab.com/gitlab-org/gitlab/-/issues/424479))

#### Week of Sept 11-15

- Plan:
  - Investigate using a lock file for data integrety ([issue](https://gitlab.com/gitlab-org/container-registry/-/issues/918)).  Prevent non-database registry changes (such as offline garbage collection) to database managed objects.
  - Further testing with AWS and 500GB models.
- Completed:
  - Made progress on technical design for lockfiles to protect data integrity in the metadata database.

### Milestone 16.5 (September 17, 2023 - October 10, 2023)

#### Goals

- Open the Beta program for the container registry and start getting customer feedback about the docs and migration.
- Provision a Container Registry database for Omnibus installations ([issue](https://gitlab.com/gitlab-org/container-registry/-/issues/1074))
- Add observability metric in service ping to identify use of the new database in self-managed installs.
- Test offline migration runtime with test registries of different sizes and storage backends

#### Week of Sept 18-22

- Plan:
  - With the 16.4 release, the fix for persisting database settings will be available to self-managed and users can begin testing for the beta program.
  - Define detailed project delivery goals
- Completed:
  - [Discussion with Geo](https://gitlab.com/gitlab-org/gitlab/-/issues/247139#note_1566115665) on feasibility of data migrations and registry changes across geo sites.
  - Initial work on [lockfiles](https://gitlab.com/gitlab-org/container-registry/-/issues/918#note_1565820128)
  - Add observability metric to service ping for container registry project.

#### Week of Sept 25-29

- Plan:
  - Engage with beta users and gather feedback from first installations.
  - Follow-up on discussion regarding geo support
  - Continue lockfiles implementation
- Completed:
  - Progress adding a database subcommand to Omnibus gitlab-ctl [https://gitlab.com/gitlab-org/container-registry/-/issues/1102](https://gitlab.com/gitlab-org/container-registry/-/issues/1102)
  - Updated the quick start guide to prevent omnibus users from editing the generated registry config directly.
  - Finished Rails implementation of observability metric.

#### Week of Oct 2-6

- Plan:
  - Create a dashboard and review data for service ping metric.
  - Scaling back on lockfiles to only be used for disabling offline GC.
  - Continue on Omnibus gitlab-ctl subcommand.
- Completed:
  - Continued progress on Omnibus gitlab-ctl subcommand.
  - Completed observability metric work and created a dashboard for tracking db usage.

#### Week of Oct 9-13

- Plan:
  - Refine issues for addressing first phase of beta feedback
  - Research methods for testing data migration in an environment with Geo
- Completed:
  - Added support for a layer media type a user had trouble importing ([issue](https://gitlab.com/gitlab-org/container-registry/-/issues/1137))
  - Prevent offline gc from running if the database is in use ([issue](https://gitlab.com/gitlab-org/container-registry/-/merge_requests/1459))

### Milestone 16.6 (October 17, 2023 - November 10, 2023)

#### Goals

- Implement issues related to feedback from first phase of beta users
- [Add registry migration subcommand to Omnibus gitlab-ctl](https://gitlab.com/gitlab-org/container-registry/-/issues/1108)
- Create import guides specific to omnibus

#### Week of Oct 16-20

- Plan:
  - Prepare container registry release for 16.5.
  - Respond to user feedback regarding errors for unknown layer media types.
- Completed:
  - Add registry database migrate command in omnibus is working in test environment
  - Additional testing in migration of large registries

#### Week of Oct 23-27

- Plan:
  - Deprecating OSS and Swift storage drivers: [issue](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/134819)
  - Store Unknown Layer Blobs as Generic Media Types Rather than failing: [issue](https://gitlab.com/gitlab-org/container-registry/-/issues/1140)
  - Adding ability to target a primary databases node when running post-migration [issue](https://gitlab.com/gitlab-org/container-registry/-/issues/1006)
- Completed:
  - Import unknown media types as generic on parity with the API: [issue](https://gitlab.com/gitlab-org/container-registry/-/merge_requests/1488)
  - OSS and Swift are deprecated [issue](https://gitlab.com/gitlab-org/container-registry/-/merge_requests/1491)
  - Omnibus registry database migrate subcommand in review with Distribution [MR](https://gitlab.com/gitlab-org/omnibus-gitlab/-/merge_requests/7140)
  - Wrapped up current scope of performance tests

#### Week of Oct 30-Nov 3 (Q3 ends on Oct 31)

- Plan:
  - Several interactions with users in beta issue to address.
  - Continue progress on Omnibus registry database migrate command MR.
- Completed:
  - Progress on the MR to add gitlab-ctl commands for the registry database [MR](https://gitlab.com/gitlab-org/omnibus-gitlab/-/merge_requests/7140)

#### Week of Nov 6-10

- Plan:
  - Investigation into validation of self-managed imports [epic](https://gitlab.com/groups/gitlab-org/-/epics/11973)
  - Continue progress on Omnibus registry database migrate command MR
- Completed:
  - Omnibus registry database migrate command MR is in review

#### Week of Nov 13-17

- Plan:
  - Release issues related to feedback from first phase of beta users.
  - Build [guides for omnibus installs](https://gitlab.com/gitlab-org/omnibus-gitlab/-/issues/8255) including import and migrate commands.
  - Started a blog post to announce availability of the container registry database.
  - Developing plans to migrate .com only features (currently behind feature flags) to self-managed.
- Completed:
  - Evaluate adding a progress bar and better log presentation for the importer.
  - Engage with users and customers who are running the importer on large registries.
  - Created [list](https://docs.google.com/spreadsheets/d/1xlYrk33zEH9mazq3px5ex8E4AnwzHa9Z5D6mxsIaORw/edit?usp=sharing) of feature flagged container registry endpoints that exist in GitLab Rails for .com.

### Milestone 16.7 (November 13, 2023 - December 21, 2023)

#### Goals

- Engage with beta users after 16.6 release improvements and gather feedback from self-managed installations.
- Create imported image validation command [issue](https://gitlab.com/gitlab-org/container-registry/-/issues/1159)

#### Week of Nov 20-24

- Plan:
  - Finalize the MR for Omnibus registry database migrate command.
- Completed:
  - Engage with users and customers who are running the importer on large repositories.  Responding to feedback.

#### Week of Nov 27-Dec 1

- Plan:
  - Finalize progress bar and UX improvements for the importer.
  - Continue communication with beta customers who are testing the import process.
- Completed:
  - [Discussion](https://gitlab.com/gitlab-org/gitlab/-/issues/431701) regarding expansion of usage ping metrics.
  - Draft of importer progress bar is ready for review.

#### Week of Dec 4-8

- Plan:
  - Evaluate options for validating images after they are imported.
  - Respond to feedback in Omnibus MR to add the import command.
- Completed:
  - Blog post published [GitLabs next-generation container registry is now available](https://about.gitlab.com/blog/2023/12/04/gitlabs-next-generation-container-registry-is-now-available/)
  - Omnibus [import command](https://gitlab.com/gitlab-org/omnibus-gitlab/-/merge_requests/7265) completed and merged.
  - Added a comment at the completion of /offline/ garbage collection linking to the beta issue.
  - Progres bar completed.

#### Week of Dec 11-15

- Plan:
  - Create [plans](https://gitlab.com/groups/gitlab-org/-/epics/12218) for adding/testing new features for self-managed, now available to users with the metadata database.
  - Continue research into container image validation after import.
- Completed:
  - Evaluate tools for validating images after import. ([issue](https://gitlab.com/gitlab-org/container-registry/-/issues/1159))

### Milestone 16.8 (December 22, 2023 - January 18, 2024)

#### Goals

- Implement issues related to feedback from second phase of beta users
- [Validate Self-Managed Imports](https://gitlab.com/gitlab-org/container-registry/-/issues/938)
- Utility support for registry database commands, such as in gitlab-ctl, equivalent to what is already present for offline garbage collection for charts

#### Week of Dec 18-22

- Plan:
  - Working with major registry user who will do their data migration over the holiday break.  Most of the container registry team is unavailable this week.

#### Week of Dec 25-29

- Plan:
  - Continue working with major registry user on setup and migration of their registry database.  Most of the container registry team is unavailable this week.
- Completed:
  - Migration for this user was a huge success!  We'll address the follow-up issues in our next milestone.

#### Week of Jan 1-5

- Plan:
  - Catching up after holidays and continued engagement with beta users.
- Completed:
  - Reviewed customer migration successes and concerns, and developed follow-up issues.

#### Week of Jan 8-12

- Plan:
  - Release issues related to feedback from second phase of beta users.
  - Develop next steps plan and a communcation campaign to increase visibility.
- Completed:
  - Reorganized the project plan and delivery targets [issue](https://gitlab.com/groups/gitlab-org/-/epics/5521#project-phases).

### Milestone 16.9 (January 13, 2024 - February 15, 2024)

#### Goals

- Create import guides specific to charts
- Test: [Ensure container registry doesn't lose Geo support](https://gitlab.com/gitlab-org/gitlab/-/issues/247139)

#### Week of Jan 22-26

- Plan:
  - Start testing Geo support
  - Continue testing and documentation for manual Charts migration
- Completed:
  - Progress on Charts documentation [issue](https://gitlab.com/gitlab-org/gitlab/-/issues/436406)
  - Merged Omnibus documentation [docs](https://docs.gitlab.com/ee/administration/packages/container_registry_metadata_database.html)

#### Week of Jan 29-Feb 2

- Plan:
  - Continue testing Geo support
  - Continue Charts migration documentation

### Milestone 16.10 (February 16, 2024 - March 21, 2024)

#### Goals

- Automatically apply DB migrations during upgrades with Charts. (blocked)
- [Importer: Retry Entire Step on Transient Error](https://gitlab.com/gitlab-org/container-registry/-/issues/72)
- [Importer: Pass on ErrDigestUnsupported](https://gitlab.com/gitlab-org/container-registry/-/issues/977)
- [Importer: Disable the Blob Descriptor Cache](https://gitlab.com/gitlab-org/container-registry/-/issues/970)
- [Importer: Reconsider the Clean Database Option](https://gitlab.com/gitlab-org/container-registry/-/issues/943)
