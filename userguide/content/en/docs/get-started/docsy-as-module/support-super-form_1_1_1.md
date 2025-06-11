---
title: Support Super Form
description: Operations documentation page for the Support Super Form
canonical_path: "/handbook/security/customer-support-operations/docs/gitlab/support-super-form"
---

<sup>*Introduced via [support-team-meta#5654](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/5654)*</sup>

{{% pageinfo color="warning" %}}

This is an information page for the Support Super form.

If you are looking for information about managing it, please see [workflows](../../workflows).

{{% /pageinfo %}}

This form enables the submissions for many types of requests. For information on how each of the requests, please see [Support Super Form Processor](../support-super-form-processor)

## How it works

It utilizes [GitLab Pages](https://docs.gitlab.com/user/project/pages/) to render the various files into a form. Form submissions from here then trigger a pipeline in the [Support Super Form Processor project](https://gitlab.com/gitlab-support-readiness/processors/support-super-form-processor).

The [source project](https://gitlab.com/gitlab-support-readiness/forms/support-super-form) is mirrored to the [target project](https://gitlab.com/gitlab-com/support/support-ops/forms/support-super-form) to utilize the permission setup of gitlab-com.

The end result is the primary URL that should be utilized: https://support-super-form-gitlab-com-support-support-op-651f22e90ce6d7.gitlab.io/
