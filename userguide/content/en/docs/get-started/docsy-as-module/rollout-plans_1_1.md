---

title: Rollout Plan Process for Development
---







## About This Page

This page outlines the requirements, success criteria, and how-to's of a rollout plan within the Development department.

### What is a rollout plan and why do you need one?

A rollout plan is a description of how to get your change successfully applied to production and working as expected.

The process of creating a rollout plan is often more valuable than the plan itself because you will invest time in thinking about what needs to be done to achieve success. This may uncover implementation or observability problems that can be addressed before going live - when it is often easier to make these changes.

These plans are useful to have because having a successful rollout on the first attempt reduces the possibility of rework or having your feature not operate as expected.

### Creating a rollout plan

Rollout plans can be different for each project or issue that you need one for.

At a minimum, your rollout plan should:

* Provide details on the expected result.
* Provide information on how to validate that result.
* Account for any risks or barriers that may impact the rollout.
* Define a rollback plan in case the rollout is unsuccessful.

Here are some things to consider including in your rollout plan:

1. Expectations
    * Define what the expected outcome should be when the rollout plan is complete. How should things function? What will the user see? What details or metrics should the system provide?
    * Prepare for any _unexpected_ outcomes by documenting what might happen if the rollout is unsuccessful. What signs can you look for to know? How can you reduce the risk of having these unexpected outcomes?
    * Document steps to take if things go wrong. This might include multiple tasks, such as engaging with the SRE team in a specific Slack channel or disabling a feature flag. This may also be a full rollback plan.
1. Metrics to observe
    * Provide links to data that can be monitored to understand whether your expectations are being met. Data could be based on predefined searches from tools like Sentry, Sitespeed, Grafana, Kibana, or some of our other [monitoring tools](/handbook/engineering/monitoring/#monitoring).
1. Testing scenarios
    * Define manual tests you can take during the rollout to confirm the rollout is working as expected.
    * Engage with counterparts to ensure that necessary automated testing is passing.
    * For changes with a wide impact on the product, engage relevant product groups to gather test cases.
    * Account for different states of data during rollout, such as cached data or data that was in a previously valid state.
    * Include a pre-check list to ensure you are [supporting multi-version compatibility / backwards compatibility](https://docs.gitlab.com/ee/development/multi_version_compatibility.html).
1. Communication
    * Include a communication plan that includes relevant stakeholders - such as other stage groups, departments, or by [engaging with Support](/handbook/support/managers/change-management.html) to communicate changes to users.
    * Outline in the rollout plan locations to communicate or look for signals of an unsuccessful rollout - such as the #production Slack channel or new issues list.
1. Staging and Production checks
    * Include any specific checks that need to be done when your changes are released on staging and production.
    * Include any checks specifically needed for self-managed instances. This may involve testing the change on a [reference architecture](https://docs.gitlab.com/ee/administration/reference_architectures/) before release.
1. The rollout process itself
   * Describe what must happen in preparation for the rollout
   * Include the specific steps to follow
   * Include which metrics to observe and when they should be observed (for example, some features require a day of metrics to be observed before concluding if the change was successful)
1. Post rollout retro
   * Update any common practices for your stage/group so it's easier for the next rollout
   * Reflect on the rollout and share with team your learnings
   * Consider opening an issue/MR to automate parts of the rollout to make it safer and more efficient.  Recommend to your manager that this work become part of an [Engineering Allocation](/handbook/engineering/#engineering-allocation).

#### Additional rollout plan processes

There are additional rollout plan processes to keep yourself aware of:

* [Rolling out a low-risk feature flag](/handbook/product-development-flow/feature-flag-lifecycle/#rollout)
* [Rolling out a high-risk feature flag](/handbook/engineering/infrastructure/change-management/#feature-flags-and-the-change-management-process)
* [Running an experiment](/handbook/marketing/growth/engineering/experimentation/#experiment-rollout-issue)

#### Rollout plan templates

These templates exist for the scenarios mentioned above, but can also be used as a base for your rollout plan:

* [Production change](https://gitlab.com/gitlab-com/gl-infra/production/-/blob/master/.gitlab/issue_templates/change_management.md)
* [Feature flag rollout](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/Feature%20Flag%20Roll%20Out.md)
* [Experiment rollout](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/Experiment%20Rollout.md)

### Examples of previous rollout plans

* [Preventing negative impacts on the system when there is potential to fail silently](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/1085)
* [Creating a pre-check list before rolling out a major change](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/1267#pre-check)
* [Rolling out an experiment behind a feature flag](https://gitlab.com/gitlab-org/gitlab/-/issues/281024)
* [Rolling out a feature flag](https://gitlab.com/gitlab-org/gitlab/-/issues/335799)
