---
title: "CI/CD Catalog"
status: implemented
creation-date: "2022-09-14"
authors: [ "@ayufan", "@fabiopitino", "@grzesiek" ]
coach: [ "@ayufan", "@grzesiek" ]
approvers: [ "@dhershkovitch", "@marknuzzo" ]
owning-stage: "~devops::verify"
participating-stages: []
toc_hide: true
---

{{< design-document-header >}}

## Summary

The goal of the CI/CD pipeline components catalog is to make the reusing
pipeline configurations easier and more efficient. Providing a way to
discover, understand and learn how to reuse pipeline constructs allows for a
more streamlined experience. Having a CI/CD pipeline components catalog also
sets a framework for users to collaborate on pipeline constructs so that they
can be evolved and improved over time.

This design doc used to define the architectural guidelines on how to build a CI/CD
catalog of pipeline components. Since we've done it, you can find a link to the official user documentation below along with the historic content of the document.

For more information on the feature, see the [CI/CD Components documentation](https://docs.gitlab.com/ee/ci/components/index.html).

The archived version of the blueprint file can be found [here](https://gitlab.com/gitlab-org/gitlab/-/blob/a22b7be24f372feec596bcf71ebaf07ea0df40cf/doc/architecture/blueprints/ci_pipeline_components/index.md).

## Who

Architectural Design:

<!-- vale gitlab.Spelling = NO -->

| Role                           | Who |
|--------------------------------|-----|
| Author                         | Fabio Pitino |
| Engineering Leaders            | Cheryl Li, Mark Nuzzo |
| Product Manager                | Dov Hershkovitch |
| Architecture Evolution Coaches | Kamil Trzciński, Grzegorz Bizon |

DRIs:

| Role        | Who |
|-------------|-----|
| Product     | Dov Hershkovitch |
| Engineering | Avielle Wolfe, Laura Montemayor |
| UX          | Sunjung Park |

<!-- vale gitlab.Spelling = YES -->
