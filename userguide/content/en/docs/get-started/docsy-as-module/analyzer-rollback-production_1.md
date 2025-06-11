---
layout: handbook-page-toc
title: "SAST analyzer rollback to last version in production"
---

## Rolling back analyzer to previous minor or patch version

This runbook provides instructions for rolling back an analyzer to a previous version in case of a high severity incident in a faulty release. It is an immediate stop-gap measure to ensure a smooth user experience for our customer.
It is intended for engineers responsible for maintaining and troubleshooting issues in an analyzer.

**Note:** This runbook is relevant for analyzers that utilize the [ci-templates](https://gitlab.com/gitlab-org/security-products/ci-templates) by including either [analyzer.yml](https://gitlab.com/gitlab-org/security-products/ci-templates/-/blob/fb4bb1541274e1fe47d71b92963e558c1fb6c288/includes-dev/analyzer.yml?ref_type=heads), or [docker.yml](https://gitlab.com/gitlab-org/security-products/ci-templates/-/blob/fb4bb1541274e1fe47d71b92963e558c1fb6c288/includes-dev/docker.yml?ref_type=heads) directly.

### Rollback Procedure

First, identify the version of the analyzer where the bug appears. Test a prior version to ensure that the bug does not reproduce. Note any significant changes that were made between the two versions and record them in the bug issue. Consult with EM/PM if you are unsure that the rollback is advisable.

#### Steps to rollback an analyzer

1. Navigate to the analyzer that needs to be rolled back
2. Go to the "Build" tag and select "Pipelines"
3. Click on the "Run pipeline" button
4. Choose the last known-good version (tag) of the analyzer
5. Run the pipeline
6. Wait for the pipeline to complete

**Note:** Once the pipeline finishes, it will automatically update the "latest" and major version image tag to the image built from the chosen tag.

#### Important Considerations

- Once a rollback has been made, no releases should be made until a bug fix has been merged to the default branch
- Only maintainers and owners are able to run pipelines on tags (they are protected)
- Verify the that known-good version before initiating the rollback
- Monitor the pipeline progress to confirm successful completion

### Post-Rollback Actions

After successfully rolling back the analyzer:

1. Test that the bug in the rolled back analyzer image in production no longer replicates
2. Comment on the issue that a rollback has been made
3. Post an update in the group slack channel and tag all maintainers of the analyzer to ensure no MRs are merged until the bug is fixed
4. Notify the EM/PM that the production incident is mitigated
5. Plan for a new release with the bug fix
