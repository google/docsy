---

title: Test Platform in Cells
---

Cells is a project that spans the entirety of GitLab. Instead of recreating feature testing done by the other teams, we will reuse and leverage what exists currently and supplement to fill in gaps.

This approach has the following requirements:

- It must feed back useful information to the engineering teams in an efficient, non burdensome way
- It must provide good coverage so we have confidence to release
- It must be easy to add/enhance/change tests
- It works with our current process

## Strategy

The testing strategy for Cells follows our practice of testing at the correct level. The testing will be focused on a couple of efforts:

- Ensuring we have good functional coverage at the appropriate level
  - Reusing existing testing as much as possible to reduce burden on the teams.
- Creating system level E2E tests incrementally to cover boundary conditions
  - These will be built incrementally as features are built, they will be automated and added to the E2E test suite
  - These tests will be included in our existing pipelines and run per their cadence (unless a need is raised to run on a separate pipeline)
- Non functional testing will also be included
  - Ensuring we're building with Observability in mind and include the hooks to integrate to our Observability tools
  - [Migration testing](https://docs.gitlab.com/ee/development/testing_guide/testing_migrations_guide.html), ensuring that the migrations are performant and handle .com scale
  - Performance testing
    - [GPT](https://gitlab.com/gitlab-org/quality/performance#gitlab-performance-tool) based tests to check against our reference architectures
    - Enhancing our existing pipelines to capture performance metrics to Shift Left performance testing and enable devs to have better visibility into performance concerns

Viewed as a diagram, this apporach would look like:

``` mermaid
flowchart TB
  %% nodes
  feature_tests(Feature Tests from Development Teams)
  single_cell_tests(Cell Specific Functional Tests)
  multi_cell_tests(Cross Cell Functionality Tests)

  %% diagram
  subgraph multiple_cell[Multiple Cell Tests]
    subgraph single_cell[Single Cell Tests]
      feature_tests
      single_cell_tests
    end
    multi_cell_tests
  end
```

A majority of the testing we will need to do will exist at the `Single Cell` level, and should be covered by existing tests. We may need some additional tests to cover Cells specific functionality that was implemented at the Single Cell level (i.e. [Organizations](#organizations)), but we will get a vast majority of the testing needed from the tests written and maintained by other development teams. On top of that will be functionality that spans Cells (i.e. routing to the correct cell), but these will be fewer and smaller because of the reliance on the existing suite.

## Functional Testing

### Cells

#### Feature

This testing is done as part of the day to day work of development, the unit/integration tests added as part of developing the features. The SET can help advise on edge cases / scenarios that should be considered for testing.

#### Single Cell

The Single Cell level has pretty significant existing coverage due to overlap with our existing test suites (Unit, Integration, E2E). Since each Cell is an instance of GitLab, the existing tests will give us good confidence. We will want to ensure that we have tests that cover the [impacted features](https://docs.gitlab.com/ee/architecture/blueprints/cells/#impacted-features) as well as data that is shared across Cells (like Users). The SET can help on developing edge cases / scenarios to cover, ensuring the tests get written at the correct level, writing E2E tests, ensuring the tests get run in CI with the correct feature flags set.

#### Multiple Cells

The Multiple Cell level focuses on scenarios that span Cells that do not elevate up to the Router level. This covers features like:

- A user logged into one Cell URL is logged into a second Cell URL
- Organizations/Groups/Repos that exist on one Cell do not exist on other Cells
- ...

The SET can help with developing these scenarios, writing E2E tests, enhancing our test frameworks to be able to test.

### Organizations

Organizations provides the capability for a company to have the ability to better organize their repos ([the Organizations Blueprint](https://gitlab.com/gitlab-org/gitlab/-/blob/master/doc/architecture/blueprints/organization/index.md)). We will get a level of coverage from the existing E2E suite (verifying that Organizations do not break existing functionality). Some additional testing can be written to verify Organizations specific functionality (i.e. Owner vs User permissions ), many of these can exist at the Unit/Integration layer with a sanity check at the E2E layer.

### Router

The router is currently being defined, will add details once specifications are defined. It will gain coverage by the [Single Cell](#single-cell) testing, since it will be run through the Router. However there will need to be additional tests written to verify Router functionality (i.e. that a request gets routed to the correct cell). How much of that testing needs to be done at the Unit/Integration/E2E level will be determined.

### QA Cell

### Experiment Cell

As part of migrating to Cells architecture, there will be an Experiment Cell to enable testing. We are [discussing how to use it](https://gitlab.com/gitlab-org/quality/quality-engineering/team-tasks/-/issues/2363). As we are rolling out Cells 1.0, the Experiment Cell will be used to test out and support implementing the features needed to support the Cells. Long term it will be an environment we can run Cells specific tests against as part of the deployment process. It will be deployed to as part of Ring 0.

## Performance Testing

Just like our feature testing, performance testing can be done on the [testing levels](https://docs.gitlab.com/ee/development/testing_guide/testing_levels.html). An important thing to note is that performance results from one level are not directly mappable to another level, i.e. a code change that improved a unit or integration test to run 1 second faster will not map to a 1 second improvement in production, there are too many other variables that affect performance to directly map results across levels. How we can use them is as an indicator that we can use in a fast feedback loop, i.e. if we see a test run 2x faster, it should help the performance problem; if it runs 2x slower, it will probably hurt...

### Unit Testing

At the lowest level, we have several gems included in GitLab that can be used to test performance during development that we can use to get feedback before the code is finalized:

- [derailed_benchmarks](https://github.com/zombocom/derailed_benchmarks)
- [benchmark-memory](https://github.com/michaelherold/benchmark-memory)
- [benchmark-ips](https://github.com/evanphx/benchmark-ips)

We also have [rspec-benchmark](https://github.com/piotrmurach/rspec-benchmark) so we can specifically test for performance results in rspec.

#### Database testing

Analyzing slow queries, number of queries generated by page views / actions

#### Observability testing

Observability testing is actively making use of our Observability tools to detect trends that would develop into performance issues.

#### System testing

This level is covered by [GPT](https://gitlab.com/gitlab-org/quality/performance) and [GBPT](https://gitlab.com/gitlab-org/quality/performance-sitespeed).

Once we get up to deploying the application to live environments, we can start doing traditional performance testing (load testing, stress testing, soak testing,...) as well as using the Observability tools to analyze the performance of various components of GitLab (slow sql in Postgres, long running jobs in sidekiq,...).

For more details on our System level performance testing strategy, please refer to the document covering why customers should trust our [Dedicated/Cells/FedRAMP performance testing approach](https://gitlab.com/gitlab-com/content-sites/internal-handbook/-/merge_requests/4447).

## Tracking Issues

- [Cells 1.0 work items](https://gitlab.com/groups/gitlab-org/quality/-/epics/59)
