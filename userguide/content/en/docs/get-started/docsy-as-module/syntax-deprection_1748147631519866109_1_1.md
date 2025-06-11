Our CI syntax keeps evolving. We cannot support all keywords indefinitely, so deprecating and removing keywords is inevitable.

GitLab does not have a versioning system for CI/CD configuration. Therefore, it is critical to over-communicate our deprecation purposes to our users and take the necessary precautions to reduce the impact on their projects. Deprecating a keyword is risky because it will break all pipelines using it, and in some cases, users are not aware of the keyword they use in their pipeline. The deprecation process described below is similar to the [deprecating and removing features](/handbook/product/categories/gitlab-the-product/#process-for-deprecating-and-removing-a-feature) process, with additional steps to reduce the risks which involved with removing a CI/CD keyword.

1. Deprecation notice - Syntax removal introduces a breaking change, as outlined in our deprecation process, we must notify the community and customers, which means including a deprecation notice in the monthly release post.

2. Track keyword usage - Tracking keyword usage should begin as early as possible. It is a mandatory step that helps estimate the user impact, timing, and needed effort. The more users use the keyword, the more time it takes to remove it (It took more than four years to move from [remove](https://gitlab.com/gitlab-org/gitlab-foss/-/merge_requests/9766) to [deprecation](https://gitlab.com/gitlab-org/gitlab/-/issues/346823) for 'type' keyword).

3. In-app warning - Provide our users with an in-app notification that we plan to remove a keyword they use in their pipeline. Our customers will get a notification in each run of the pipeline that uses the deprecated keyword. The warning will be printed:

   - At run time on the pipeline page and logs.
   - In the pipeline editor, while authoring a pipeline.

    This step is optional if the keyword usage is relatively low (Recommend minimal reach of ~5% impacted users).

4. Keyword removal - The keyword will be removed from our code and schema and should happen in a major version. Once removed,  using the keyword will result in a lint error.
