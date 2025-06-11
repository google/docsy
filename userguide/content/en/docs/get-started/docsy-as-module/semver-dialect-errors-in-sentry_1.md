---
layout: handbook-page-toc
title: "Enable Semver Dialect Errors in Sentry"
---

## Overview

This runbook provides instructions for enabling the reporting into Sentry of SemverDialect errors generated within the GitLab rails application. This reporting is behind the `track_semver_dialect_errors_for_cvs_in_sentry` [OPS](https://docs.gitlab.com/ee/development/feature_flags/#ops-type) feature flag, which is disabled by default. This prevents flooding our Sentry system with too many errors generated from processing invalid or unsuported user data on gitlab.com.

**Note:** this feature flag should be removed by 18.4: https://gitlab.com/gitlab-org/gitlab/-/issues/491612

### Procedure

1. Enable the feature flag on production environment: `/chatops run feature set track_semver_dialect_errors_for_cvs_in_sentry true --production`
2. Monitor SemverDialects errors on Sentry: https://new-sentry.gitlab.net/organizations/gitlab/issues/?query=is%3Aunresolved+SemverDialects
3. Create issues for reported errors that need to be addressed.
4. Disable the feature flag on production environment: `/chatops run feature set track_semver_dialect_errors_for_cvs_in_sentry false --production`
5. Fix the issue.
6. Repeat
