---
layout: handbook-page-toc
title: "SAST analyzer deprecation and removal instructions"
---

### Analyzer Conversion Lifecycle

Many of the SAST analyzers are in the process of being replaced by semgrep. This involves having semgrep takeover the functionality of the legacy analyzer.

The steps to achieve this are:

1. [Migrate Rules to sast-rules](https://gitlab.com/gitlab-org/security-products/sast-rules/-/blob/main/docs/update-rule-process.md)
1. Audit Rules and review licensing
1. Deprecate and remove analyzers

This document is concerned with the `Deprecate and remove analyzers` step. All the deprecation steps must be completed before removal can commence.

### Analyzer Deprecation

#### 1. Deprecate the analyzer job in `SAST.latest.gitlab-ci.yml`

Submit an MR to update the [`SAST.latest.gitlab-ci.yml`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/ci/templates/Jobs/SAST.latest.gitlab-ci.yml) file by substituting the analyzer's entry with a placeholder. The placeholder message should provide a notice about when the analyzer's deprecation was announced and when it was removed. Be sure to include a hyperlink directing users to the corresponding deprecation issue for further details. Additonally, ensure the placeholder never runs by adding `when: never` to `rules`.

Always change the existing job to this new "placeholder" rather than deleting the job entirely.
If we delete the entire job, this can break customer pipelines if they have provided custom variables or otherwise referenced the name of the deleted job.

```yaml
  script:
    - echo "This job was deprecated in GitLab 14.8 and removed in GitLab 15.3"
    - echo "For more information see https://gitlab.com/gitlab-org/gitlab/-/issues/352554"
    - exit 1
  rules:
    - when: never
```

#### 2. Deprecation Notification

We're required to publish notices in advance of potentially-breaking changes.
See [Deprecations, removals, and breaking changes](https://docs.gitlab.com/ee/development/deprecation_guidelines/) for details on the required process.

An example of a previous SAST analyzer deprecation notice is [the notice from 14.8](https://docs.gitlab.com/ee/update/deprecations.html#sast-analyzer-consolidation-and-cicd-template-changes).

The Product Manager and Engineering Manager for SAST are responsible for publishing this announcement.
Engineers implementing an analyzer removal are responsible for adhering to the stated scope of the change notice, and informing the PM/EM of any important changes to how customers will be affected by the change.

### Analyzer Removal

#### 1. Remove analyzer from documentation

All references to removed analyzers should be deleted from the SAST documentation. https://docs.gitlab.com/ee/user/application_security/sast/

Example of analyzer removal from documentation: https://gitlab.com/gitlab-org/gitlab/-/merge_requests/97451

#### 2. Add analyzer to ".End of supported analyzers" section of SAST documentation

All analyzers that are no longer supported should be listed in the [end-of-supported-analyzers](https://docs.gitlab.com/ee/user/application_security/sast/#end-of-supported-analyzers) section of the SAST documentation.

#### 3. Update the analyzer projects README.md

To further communicate that an analyzer is no longer supported, the following header should be added to its `README.md`.

```text
[Maintenance Notice](link-to-removal-notice):
This analyzer is currently in terminal maintenance mode. No new major versions will be released.

We've migrated this analyzer's scanning coverage to the GitLab SAST [Semgrep-based analyzer](https://gitlab.com/gitlab-org/security-products/analyzers/semgrep).
```

#### 4. Remove the analyzer job in `SAST.gitlab-ci.yml`

Submit an MR to update the [`SAST.gitlab-ci.yml`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/ci/templates/Jobs/SAST.gitlab-ci.yml) file by substituting the analyzer's entry with a placeholder. The placeholder message should provide a notice about when the analyzer's deprecation was announced and when it was removed. Additionally, be sure to include a hyperlink directing users to the corresponding deprecation issue for further details.

You can use the previous update to [`SAST.latest.gitlab-ci.yml`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/ci/templates/Jobs/SAST.latest.gitlab-ci.yml) as a guide, but be sure to change the "removed in X" version number to match when the removal happened in the stable (`SAST`) template, not the latest (`SAST.latest`) template.

Example analyzer removal MR: https://gitlab.com/gitlab-org/gitlab/-/merge_requests/97216

#### 5. Resolve all current vulnerabilities

Vulnerabilities created by an analyzer that has been removed should have their state set to resolved.
