---
title: 'GitLab CI Events Proposal 4: Defining subscriptions in a dedicated configuration file'
toc_hide: true
---

Each project can have its own configuration file for defining subscriptions to
events. For example, `.gitlab-ci-event.yml`. In this file, we can define events
in the following format:

```yaml
events:
  - package/published
  - issue/created
```

When this file is changed in the project repository, it is parsed and the
events are created, updated, or deleted. This is highly similar to
[Proposal 1](proposal-1-using-the-gitlab-ci-file.md) except that we don't need
to track pipeline creations every time.

1. Upsert events to the database when `.gitlab-ci-event.yml` gets updated.
1. Create inline reactions to events in code to trigger pipelines.

## Filtering jobs

We can filter jobs by using the `rules` keyword. For example:

```yaml
test_package_published:
  script: echo testing published package
  rules:
    - events: ["package/published"]

test_package_removed:
  script: echo testing removed package
  rules:
    - events: ["package/removed"]
```

Otherwise, we can make it work either a CI variable;

```yaml
test_package_published:
  script: echo testing published package
  rules:
    - if: $CI_EVENT == "package/published"

test_package_removed:
  script: echo testing removed package
  rules:
    - if: $CI_EVENT == "package/removed"
```

or an input like in the [Proposal 3](proposal-3-using-the-gitlab-ci-events-folder.md):

```yaml
spec:
  inputs:
    event:
      default: push

---

test_package_published:
  script: echo testing published package
  rules:
    - if: $[[ inputs.event ]] == "package/published"

test_package_removed:
  script: echo testing removed package
  rules:
    - if: $[[ inputs.event ]] == "package/removed"
```

## Challenges

1. This will not work on GitLab.com scale.
