---

title: Test Platform On-call Rotation
description: >-
  The Test Platform Sub-Department has two on-call rotations: pipeline triage (SET-led) and incident management (QEM-led).
---







## Test Platform Sub-Department pipeline triage on-call rotation

This is a schedule to share the responsibility of debugging/analysing the failures
in the various scheduled pipelines that run on multiple environments.
Test Platform sub-department's on-call does not include work outside GitLab's normal business hours. Weekends and [Family and Friends Days](/handbook/company/family-and-friends-day/) are excluded as well. SETs also have full autonomy to move their 1:1s and their attendance to department meetings asynchronous for the week of their oncall if they decide to do so but please communicate to your manager accordingly.

In the current iteration, we have a timezone based rotation and triage activities happen during each team member's working hours.

Please refer to the [Debugging Failing tests](/handbook/engineering/infrastructure/test-platform/debugging-qa-test-failures/)
guidelines for an exhaustive [list of scheduled pipelines](/handbook/engineering/infrastructure/test-platform/debugging-qa-test-failures/#qa-test-pipelines)
and for [specific instructions on how to do an appropriate level of investigation and determine next steps for the failing test](/handbook/engineering/infrastructure/test-platform/debugging-qa-test-failures/#steps-for-debugging-qa-pipeline-test-failures).

### Responsibility

#### Triage, record, and unblock failures

- The Saturday before the new rotation begins, the handover bot will create an issue in the [pipeline-triage](https://gitlab.com/gitlab-org/quality/pipeline-triage/-/issues/) project.
- The handover bot also assigns the triage issue created to the DRIs for the upcoming week, according to the schedule below.
- During the scheduled dates, the support tasks related to the test runs become the Directly Responsible Individual's ([DRI]'s) highest priority.
- Reporting and analyzing the End to End test failures in [Production](https://ops.gitlab.net/gitlab-org/quality/production/pipelines), [Canary](https://ops.gitlab.net/gitlab-org/quality/canary/pipelines), and  [Staging](https://ops.gitlab.net/gitlab-org/quality/staging/pipelines) pipelines takes priority over [GitLab `master`](https://gitlab.com/gitlab-org/gitlab/pipelines), and [GitLab FOSS `master`](https://gitlab.com/gitlab-org/gitlab-foss/pipelines). Note this also takes priority over fixing tests.
- [Preprod](https://ops.gitlab.net/gitlab-org/quality/preprod/-/pipelines) pipelines have equal priority with `Production` and `Staging` pipelines during release candidate testing from the Monday through Thursday of the release week.
- If there is a time constraint, the DRI should report and analyze the failures in [Staging](https://ops.gitlab.net/gitlab-org/quality/staging/pipelines), [Canary](https://ops.gitlab.net/gitlab-org/quality/canary/pipelines) and [Production](https://ops.gitlab.net/gitlab-org/quality/production/pipelines) pipelines just enough to determine if it is an application or an infrastructure problem, and [escalate as appropriate](/handbook/engineering/development/processes/Infra-Dev-Escalation/process.html). All the reported failures in those pipelines should be treated as ~priority::1/~severity::1 until it's determined that they're not. That means they should be investigated ASAP, ideally within 2 hours of the report. If the DRI will not be able to do so, they should delegate any investigation they're unable to complete to the DRI from the following week. If neither DRI is available or will be able to complete the investigations, solicit help in the #test-platform slack channel.
- Consider [blocking the release by creating an incident](/handbook/engineering/releases/#i-found-a-regression-in-the-qa-issue-what-do-i-do-next) if new ~severity::1 regressions are found in smoke specs.
- It is important that all other failure investigations are completed in a timely manner, ideally within 24 hours of the report. If the DRI is unable to investigate all the reported failures on [all the pipelines](/handbook/engineering/infrastructure/test-platform/debugging-qa-test-failures/#qa-test-pipelines) on time, they should solicit help in the #test-platform slack channel.
- Cross-cutting issues such as https://gitlab.com/gitlab-org/quality/team-tasks/-/issues/530 are triaged by the on call DRI to determine the next action. Other team-members should notify the DRI if they come across such an issue. The DRI can inform the rest of the department via the #test-platform channel, if necessary.
- Everyone in the Test Platform sub-department should support the on-call DRI and be available to jump on a zoom call or offer help if needed.
  - If a change needs to be made to CI/CD variables in [gitlab-org/gitlab](https://gitlab.com/gitlab-org/gitlab/-/settings/ci_cd) and the DRI does not have access, they can ask for help in the `#test-platform-maintainers` and `#development` Slack channels. Any Quality maintainer should have sufficient access to be able to assist.
- Every day the APAC/EMEA/AMER DRI summarizes the failures found for that day in the triage issue like [this](https://gitlab.com/gitlab-org/quality/pipeline-triage/-/issues/45#note_408358615). This serves as an asynchronous handoff to the DRI in the other timezone.
- The DRI can make use of the [dri gem](https://gitlab.com/gitlab-org/ruby/gems/dri) to automate reporting handoff and surface useful triage information, such as newly created failures or feature flags enabled by environment.
- Be aware that failing smoke specs in staging/canary will block the deployer pipeline and may be treated as production incidents.

### Schedule

To view the pipeline triage rotation schedule, please visit the [pipeline-triage](https://gitlab.com/gitlab-org/quality/pipeline-triage#dri-weekly-rotation-schedule) project.

Or use `chatops` in Slack with command `/chatops run quality dri schedule`

### Responsibilities of the DRI for scheduled pipelines

- The DRI does the [triage](/handbook/engineering/infrastructure/test-platform/debugging-qa-test-failures/#steps-for-debugging-qa-pipeline-test-failures) and they let the counterpart SET know of the failure.
- The DRI makes the call whether to fix or quarantine the test.
- The DRI reviews any [automated quarantine MRs](https://gitlab.com/gitlab-org/gitlab/-/merge_requests?scope=all&state=opened&label_name[]=QA&search=%5BQUARANTINE%5D) and [automated dequarantine MRs](https://gitlab.com/gitlab-org/gitlab/-/merge_requests?scope=all&state=opened&label_name[]=QA&search=%5BDEQUARANTINE%5D) and decides whether to merge or close.
- The fix/quarantine MR should be reviewed by the counterpart SET. If the counterpart SET is not available immediately or if there is no counterpart SET, then any other SET can review the MR. In any case, the counterpart SET is always CC-ed in all communications.
- The DRI should periodically take a look at [the list of unassigned quarantined issues](https://gitlab.com/gitlab-org/gitlab/issues?state=opened&label_name%5B%5D=QA&label_name[]=type::bug) and work on them.
- If the DRI is not available during their scheduled dates (for more than 2 days), they can swap their schedule with another team member. If the DRI's unavailability during schedule is less than 2 days, the DRI in the same timezone the following week can cover.

### Responsibilities of the DRI for deployment pipelines

- The DRI helps the delivery team debug test failures that are affecting the release process.
- The DRI in the same timezone for the following week fills in when the DRI is not available.

### New hire on-call shadowing

To help a new hire prepare for their first on-call rotation, they should spend a few days before their first rotation shadowing the DRI. When the new hire is DRI, the DRI from the following week should pair with the new hire for a couple of days to answer questions and help triage/debug test failures.

### Supporting infrastructure and environment upgrades

During planned upgrades to live environments during GitLab's regular business hours, the Test Platform sub-department may be requested to validate the environment pre/post-upgrade by running our end-to-end test suite. The DRI shall take responsibility for any assistance requested in triggering or reviewing test results.
This should be planned at least 1 week in advance, including the relevant DRIs [QEM](/handbook/engineering/infrastructure/test-platform/oncall-rotation/#schedule-1) and [SET](/handbook/engineering/infrastructure/test-platform/oncall-rotation/#schedule) who will be on call on the proposed date.
NB - For assistance with supporting upgrades outside GitLab's regular business hours, please reach out to Slack channel `#infrastructure-managers`.

Some examples of issues where Test Platform have provided support include:

- [CI Decomposition Rollout](https://ops.gitlab.net/gitlab-com/gl-infra/db-migration/-/blob/ae6240c4bdf94a7774f9ad844dcec26f936a2946/.gitlab/issue_templates/ci_decomposition.md)
- [PostgreSQL 14 upgrade](https://ops.gitlab.net/gitlab-com/gl-infra/db-migration/-/blob/ae6240c4bdf94a7774f9ad844dcec26f936a2946/.gitlab/issue_templates/pg14_upgrade.md)

If the assigned DRI is unavailable during the planned upgrade, then the assigned DRI is to reach out to find coverage for the day of the planned upgrade.

- For example, if the planned upgrade is scheduled for outside of working hours (i.e., on a Saturday) and the assigned DRI cannot be made available, the assigned DRI is to reach out to the team to find another team member who can be present throughout the planned upgrade.

## Test Platform Sub-Department incident management on-call rotation

The EMs should share the responsibility of monitoring, responding to, and mitigating incidents.
Test Platform Sub-Department's on-call does not include work outside GitLab's normal business hours. Weekends and [Family and Friends Days](/handbook/company/family-and-friends-day/) are excluded as well.
In the current iteration, incident management activities happen during each team member's working hours.

### Responsibility

- The Engineering Manager should ensure they have joined the Slack channel `#incident-management`.
- The Engineering Manager should help with monitoring the incident management channel, tracking, directly helping, delegating, and raising awareness of incidents within the Test Platform Sub-Department as appropriate.
- The current DRI should be clearly noted on the incident issue.
- If a corrective action is needed, the EM should create an issue and ensure it is labelled with ~'corrective action'.
- Everyone in the Test Platform Sub-Department should support the on-call DRI and be available to jump on a Zoom call or offer help if needed.
