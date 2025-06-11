---
title: "Test execution reports"
description: "Data on all E2E test runs"
---

## E2E test execution reports

This page contains overview of all the automated end-to-end test execution reports across different environments and pipelines.

## Master

### gdk

E2E test execution against [`gitlab-development-kit`](https://gitlab.com/gitlab-org/gitlab-development-kit) environment packaged in a `Docker` container.

- {{< test-execution-allure-link "e2e-test-on-gdk" >}}

### package-and-test

E2E test execution against various configurations of `omnibus` images.

- {{< test-execution-allure-link "e2e-package-and-test" >}}

## Nightly

E2E test execution against various configurations of `omnibus` nightly images.

- {{< test-execution-allure-link "nightly" >}}

## Staging

E2E test execution against `https://staging.gitlab.com` environment.

### Sanity

- {{< test-execution-allure-link "staging-sanity" >}}

### Full

- {{< test-execution-allure-link "staging-full" >}}

## Staging Ref

E2E test execution against `https://staging-ref.gitlab.com` environment.

### Sanity

- {{< test-execution-allure-link "staging-ref-sanity" >}}

### Full

- {{< test-execution-allure-link "staging-ref-full" >}}

## Preprod

E2E test execution against `https://pre.gitlab.com` environment.

- {{< test-execution-allure-link "preprod-sanity" >}}

## Production

E2E test execution against `https://gitlab.com` environment.

### Sanity

- {{< test-execution-allure-link "production-sanity" >}}

### Full

- {{< test-execution-allure-link "production-full" >}}
