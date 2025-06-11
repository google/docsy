---
title: JiHu validation pipelines
---

## JiHu validation pipelines

In order to make sure our regular development does not break JiHu's pipelines,
we run JiHu validation pipelines in merge requests which we consider it's
more likely to break JiHu's pipelines.

Those pipelines are currently allowed to fail, and they should not block
any merge requests from being merged.

To revisit this policy, checkout: [Disallow as-if-jh pipeline to fail](https://gitlab.com/gitlab-org/gitlab/-/issues/351136)

## When and where we run it

We run the validation pipelines when we detected that the changes is more
likely to break JiHu's pipeline. The detection is automated and we can also
apply label `~"pipeline:run-as-if-jh"` to force it if not detected.

Job `start-as-if-jh` will trigger a cross project downstream pipeline in the
[GitLab JH validation](https://gitlab.com/gitlab-org-sandbox/gitlab-jh-validation) project.

For how the detection works and technical details about how we run this
validation pipeline, checkout:
[As-if-JH cross project downstream pipeline](https://docs.gitlab.com/ee/development/pipelines/#as-if-jh-cross-project-downstream-pipeline)

## What to do when the validation pipeline failed

In the case when the validation pipeline failed, follow this workflow:

- Check if the failure is known by searching for existing issues or merge requests:
  - [Issues labeled with `~"JiHu Broken Pipeline"`](https://gitlab.com/gitlab-org/gitlab/-/issues/?label_name%5B%5D=JiHu%20Broken%20Pipeline)
  - [Merge requests labeled with `~"JiHu Broken Pipeline"`](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/?label_name%5B%5D=JiHu%20Broken%20Pipeline)
  - [JiHu's issues labeled with `~"main-jh broken"`](https://jihulab.com/gitlab-cn/gitlab/-/issues/?label_name%5B%5D=main-jh%20broken)
  - [JiHu's merge requests labeled with `~"main-jh broken"`](https://jihulab.com/gitlab-cn/gitlab/-/merge_requests?label_name%5B%5D=main-jh%20broken)
- Check if [JiHu's pipelines](https://jihulab.com/gitlab-cn/gitlab/-/pipelines?ref=main-jh) are broken

If any related items can be found, feel free to drop a reference in the issue
or merge request, and move on.

If nothing can be found, follow this workflow:

- Create an issue and notify JiHu for the potential breakage. You can contact [@qianzhangxa](https://gitlab.com/qianzhangxa)
- Add `~"JiHu impacted"` label to the merge request so we can track this.
- (Bonus) Investigate the failure and follow up accordingly. This can be telling JiHu why and how the failure can happen, or what they need to do or what they need to change. To better support them, figuring out a way so they can more easily follow up is encouraged.
