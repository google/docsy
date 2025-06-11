---
title: Merge Request Reviews
description: "Guidelines for Product Designers when reviewing merge requests (MRs), also known as UX reviews or Product Design MR reviews."
---

## Requirements

**Product Designers must review and approve MRs that include user-facing changes.** According to the [approval guidelines](https://docs.gitlab.com/development/code_review/#approval-guidelines), user-facing changes encompass both visual changes (regardless of how minor) and changes to the rendered DOM affecting screen reader announcements.

MRs with backend changes that affect UX (e.g., performance, list sorting) do not require your review unless they are user-facing.

Stay aware of all MRs in your stage group and communicate with engineers about potential UX impacts. Use your judgment to decide which MRs to review, even those seemingly unrelated to UX.

We use GitLab Roulette to assign subject matter experts for MRs. Learn more about [MR reviews assignments](#how-to-assign-mr-reviews).

### Benefits

Familiarity with the product area and changes allows designers to:

- Efficiently set up specifications for local testing.
- Understand the rationale and context behind changes.
- Provide actionable feedback.
- Identify edge cases and bugs before merging code into production.

Collaborate closely with engineering peers throughout the product development lifecyle, from ideation to production, to strengthen product relationships and avoid a waterfall process.

## How to assign MR reviews

### Stage group MRs

[GitLab Roulette](https://gitlab-org.gitlab.io/gitlab-roulette/) assigns designers to stage group MRs. The design DRI acts as the reviewer for these MRs. If a stage group lacks a designer, MR reviews cannot be accommodated due to capacity issues.

### Community contributions

Community-submitted MRs are assigned to the design DRI of the affected group. If the group has no designer, `@pedroms` will review them. The GitLab Roulette suggests the correct designers automatically and generated a Slack message in the `#ux-community-contributions` channel.

### Single engineering group MRs

Single Engineer Group (SEG) MRs should be reviewed by the design DRI of the impacted group. If the group lacks a designer, MR reviews cannot be accommodated due to capacity issues.

## Workload and response times

MR review requests are the [top priority for Product Designers](/handbook/product/ux/product-designer/#priorities). Respond according to our [review-response Service-Level Objective](/handbook/engineering/workflow/code-review/#review-response-slo).

Balancing MR reviews with other tasks can be challenging. To avoid disruptions, block daily time to review MRs (for example, 30 minutes or 1 hour per day). If you struggle with reviews, [manage expectations](/handbook/engineering/workflow/code-review/#managing-expectation)) with MR authors and reassess your capacity, considering any upcoming time off. If needed, work with your manager to reassign the MR.

### Monitoring MR review workload

If overloaded with MRs, inform your manager immediately. Request assistance from another designer on your team or in the #ux_coworking Slack channel. Product Design Managers should escalate and monitor these occurences to determine if they indicate a broader trend.

Monitor MR review distribution using the [GitLab Review Workload Dashboard](https://gitlab-org.gitlab.io/gitlab-roulette/?sortKey=stats.avg30&order=-1&hourFormat24=true&visible=reviewer%7CUX) and [Product Design MR review volume](/handbook/product/ux/performance-indicators/#product-design-mr-review-volume).

## Reviewing

Follow the [Code Review guidelines](https://docs.gitlab.com/development/code_review/) (read in entirety). Exceptions to these guidelines are noted below.

### Understand the MR

Ensure the MR description includes:

- A thorough explanation of the changes.
- How to test the changes.
- Links to related issues.
- *Before* and *After* screenshots/videos (if appropriate).

For MRs with the `~"UX"` label lacking a design DRI or proposed design, gather as much context as you can about the change. If unsure of the impacted product areas, involve other designers and your design manager.

### Preview the MR

Review the MR in a live environment to experience the changes as users will. For guidance, see [Review, test, and contribute](/handbook/product/ux/product-designer/mr-reviews/preview-mr). If you encounter issues, consult the [help section](/handbook/product/ux/product-designer/mr-reviews/preview-mr/#help).

#### Specific review requirements

Some MRs require additional set up:

- **SaaS-only features**: Run the GDK as a SaaS version. [Simulate SaaS in the GDK](https://docs.gitlab.com/development/ee_features/#simulate-a-saas-instance).
- **Paid features**: Request a license via an [Access Request](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new), using the GitLab_Team_Member_License_Request template. [Add the license to your instance](https://docs.gitlab.com/administration/license_file/#add-your-license-file-during-installation).
  - You can also switch between CE and EE editions: [How to simulate a CE instance](https://docs.gitlab.com/development/ee_features/#simulate-a-ce-instance-when-unlicensed).
- **Pipeline-related and Runner features**: Create or enable a runner to run a pipeline. [Create a runner in Gitpod](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/gitpod.md#enable-runners) or [GDK](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/runner.md).
- **Compliance**: To test [audit event streaming](https://docs.gitlab.com/administration/audit_event_streaming/) using a stream destination URL. Generate a temporary destination with [Pipedream](https://pipedream.com/).
- **Fulfillment**: Only Fulfillment Product Designers should review CustomersDot MRs.
  - [Set up CustomersDot locally](https://gitlab.com/gitlab-org/customers-gitlab-com/-/tree/main#setup). If impractical, review screenshots and videos in the MR description or coordinate a demo with the engineer. For complex changes, keep the change behind a feature flag and review on staging post-merge.
- **Geo**:Install and configure two **GDKs** as Geo primary and secondary sites.
  - [Simple installation](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/geo.md).
  - [Video](https://youtu.be/R58mgwDwjM8) and [slide deck](https://docs.google.com/presentation/d/1azikV27LO68xobgJ7v399H1ppnLCmtB_kEKl_IMNI0Q/edit#slide=id.g123a13deda8_0_405).
- **Pipeline Execution**: For compute minutes and shared runner usage related features, populate projects with historical compute minutes usage data.
  - Merge requests related to compute minutes and shared runner usage usually require historical usage data, which can be difficult to set up if it doesn't exist already on the local GDK environment. Below is a video and instructions for how to set that up in under 7 minutes.

    {{< youtube "ym-fU1U-anE" >}}

    Checkout the branch in the MR and open rails console using `bin/rails console`.

    **1. Edit compute minutes**

    ``` ruby
    ApplicationSetting.current.update(shared_runners_minutes: 400)
    project = Project.find(20)
    root_namespace = project.root_namespace
    namespace_usage = Ci::Minutes::NamespaceMonthlyUsage.find_or_create_current(namespace_id: root_namespace.id)
    Ci::Minutes::NamespaceMonthlyUsage.update_counters(namespace_usage, amount_used: 100, shared_runners_duration: 100)
    project_usage = Ci::Minutes::ProjectMonthlyUsage.find_or_create_current(project_id: project)
    Ci::Minutes::ProjectMonthlyUsage.update_counters(project_usage, amount_used: 100, shared_runners_duration: 100)
    ```

    Type `:wq` to exit the log lines. Do not exit the rails console.

    **2. Add helper method**

    ```ruby
    def increase_ci_usage(project:, date:, amount_used:, shared_runners_duration:)
    date = date.utc.beginning_of_month
    project_usage = Ci::Minutes::ProjectMonthlyUsage.where(date: date).safe_find_or_create_by(project_id: project.id)
    Ci::Minutes::ProjectMonthlyUsage.update_counters(project_usage, amount_used: amount_used, shared_runners_duration: shared_runners_duration)
    root_namespace = project.root_namespace
    namespace_usage = Ci::Minutes::NamespaceMonthlyUsage.where(date: date).safe_find_or_create_by(namespace_id: root_namespace.id)
    Ci::Minutes::NamespaceMonthlyUsage.update_counters(namespace_usage, amount_used: amount_used, shared_runners_duration: shared_runners_duration)
    end
    ```

    **3. Use helper method**

    ```ruby
    increase_ci_usage(project: project, date: 1.month.ago, amount_used: 10, shared_runners_duration: 20)
    ```

    The usage quota page should now reflect the changes data.

- **Secure**:
  - Generate project vulnerabilities, execute `GITLAB_QA_ACCESS_TOKEN=XXXXXXXXXX GITLAB_URL="https://gitlab.com" bundle exec rake vulnerabilities:setup\[<Project_Id>,<Vulnerability_Count>\] --trace` from the `gitlab/qa` directory. Replace the placeholders in the script with your local access token, project ID, and desired number of vulnerabilities. An example of this might be `GITLAB_QA_ACCESS_TOKEN=asdfASDF1234- GITLAB_URL="http://localhost:3000/" bundle exec rake vulnerabilities:setup\[25,10] --trace`
  - Populate a merge request with vulnerabilities by [following these steps](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/89526#note_992018561).
- **Service Desk**: Set up `incoming_email`, `service_desk_email` and MailRoom. These MRs can't be reviewed on GitPod and need a working GDK. [GDK setup instructions](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/service_desk_mail_room.md). [Video walkthrough](https://youtu.be/SdqBOK43MlI).
- **Value Stream Analytics**: [Setup and seed data instructions](https://gitlab.com/-/snippets/2169951/raw/main/blocks.md). [Request a developer license](/handbook/engineering/developer-onboarding/#working-on-gitlab-ee-developer-licenses) as many VSA features require an EE license.
- **Product Analytics**: [GDK setup instructions](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/product_analytics.md). This process can only be done on a local version of the GDK, not on GitPod. Additionally, it requires Docker.

**If you find yourself struggling with the environment setup**, contact the [design DRI](/handbook/product/categories/#devops-stages) for assistance.

### Review the MR

- **Use the checklist**
  - Follow the [design and UI changes checklist](https://docs.gitlab.com/development/contributing/design/#checklist) to make sure all main aspects are covered.
  - If changes remain behind a feature flag and a full review in staging is planned, merging before a complete review can be considered. Be cautious as this can lead to unplanned issues.
- **Stick to UX requirements**
  - Adhere to the UX requirements specified in the issue.
  - Use the [follow-ups checklist](https://docs.gitlab.com/development/contributing/design/#follow-ups) to create issues for any further updates or missing elements.
- **Best practices for reviews**:
  - Refer to the best practices for [everyone](https://docs.gitlab.com/development/code_review/#everyone) and [reviewers](https://docs.gitlab.com/development/code_review/#reviewing-a-merge-request).
  - Treat the review as a dialogue to build trust and rapport within the team.
- **Commenting**:
  - Separate each topic into its comment thread to facilitate individual discussions and resolutions. Create threads on the relevent line(s) of code.
  - Clearly communicate what is required from the author to address or resolve your suggestions.
  - Use the [Conventional Comment format](https://conventionalcomments.org/#format) to convey your intent.
  - For non-mandatory suggestions, mark them as (non-blocking) to indicate they can be resolved within the merge request or as a follow-up.
    - Try the [Chrome/Firefox add-on](https://gitlab.com/conventionalcomments/conventional-comments-button) to apply [Conventional Comment](https://conventionalcomments.org/) prefixes.
- **Visual feedback**:
  - Share annotated screenshots or screen recordings in your comments. This makes issues clear and communication more efficient.
  - Use free apps like [CloudApp](https://zight.com/), [Monosnap](https://monosnap.com/), or Mac's Screenshot (see how to [capture](https://support.apple.com/en-ca/guide/mac-help/mh26782/mac) and [annotate](https://support.apple.com/guide/mac-help/mark-up-files-mchl1fd88863/mac)).
  - Highlight differences between the implementation and the expected result using a [Markdown table](https://docs.gitlab.com/user/markdown/#tables). Use the template below:
      <details>
      <summary>Differences table template</summary>

      ```markdown
      | This MR     | Expected    |
      |-------------|-------------|
      | Image/video | Image/video |
      ```

      </details>
- **Provide constructive feedback**:
  - Acknowledge and praise valuable contributions by the author.
  - If there are concerns, consider:
    - Iterating instead of reverting.
    - Educating to collaborate by sharing your context and asking for adaptations.
    - Seeking a second opinion from a [quad member](/handbook/product/product-processes/#pm-em-ux-and-set-quad-dris), design manager, or other designers.
    - Creating a follow-up issue to address concerns.
    - Blocking the full release of a feature by creating an issue with a list of items that need addressing ([example](https://gitlab.com/gitlab-org/gitlab/-/issues/398152)).

### Handoff the MR

**After review**:

- Remove yourself as a reviewer and post a summary comment, indicating if any changes are required.
- Create follow-up issues for any outstanding UX concerns that deviate from the Minimal Valuable Change (MVC), labeling them as `Deferred UX` (details on [UX labels](/handbook/product/ux/#ux-labels)).

**Follow-up with authors**:

- For work outside of your specific group, discuss any unclear documentation with the original author. This can be a casual retrospective, synchronous or asynchronous.

**Approval**:

- Once confident the MR meets all requirements, [approve it](https://docs.gitlab.com/development/code_review/#getting-your-merge-request-reviewed-approved-and-merged) by clicking the "Approve" button in the merge request widget.
- Follow the [responsibility of the reviewer](https://docs.gitlab.com/development/code_review/#the-responsibility-of-the-reviewer) guidelines for handoff.

## Performance indicator

The [Product Design merge request (MR) review volume](/handbook/product/ux/performance-indicators/#product-design-mr-review-volume) is tracked as a Key Performance Indicator (KPI) for the UX department.
