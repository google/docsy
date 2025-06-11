---
title: "GitLab Runner Technical Problems"
authors: [ "@josephburnett", "@ajwalker" ]
creation-date: "2025-03-26"
owning-stage: "~devops::verify"
toc_hide: true
---

## Problems ##

### Codebase ###

GitLab Runner's codebase hasn't aged too well and has been extended in
multiple directions with compromises being made to add new features.

There are very large `common` and `helper` packages, for example,
which almost everything ties into.

Challenges:

- The poor separation of concerns leads to easy leaky abstractions,
  furthering the difficulty in rectifying the problem.
- As well as being less than ideal from a development and maintenance
  perspective, it means we currently have some restrictions. For
  example, the `gitlab-runner-helper` binary should be lightweight,
  but because it imports `common`, that pulls in an entire world of
  dependencies.
- GitLab Runner can't target `AIX` today due to incompatible
  dependencies, but the helper binary could be supported with an
  improved separation of concerns.

### Abstract Shell ###

GitLab Runner converts jobs into multiple target scripts that execute
within the job environment. These scripts perform predefined tasks,
such as fetching Git sources or extracting caches, as well as
executing user-provided scripts (`before_script`, `script`, and
`after_script` from the CI/CD config).

GitLab Runner has built-in support for `powershell`, `pwsh`, and
`bash`/POSIX shells, and it employs an abstract shell implementation
to convert target scripts accordingly.

Challenges:

- The GitLab Runner manager generates the target script, but jobs
  often execute in remote environments. This can lead to scripts that
  are unfit for the target environment. A common problem is with path
  names.
- Shell behaviour can vary based on the version, OS settings, and
  script execution method (via a file or stdin). Addressing one edge
  case often introduces another, resulting in a constant game of
  whack-a-mole.
- Limited shell support presents challenges, as maintaining and
  implementing the full feature set for the current supported shells
  is already a maintenance burden. The removal of the `cmd` shell,
  though still widely used, was due to difficulties in maintenance and
  feature implementation.
- Feature set deviation: Adding new features that rely on the abstract
  shell is often difficult to achieve consistently across all
  supported shells at once.

### Executors ###

GitLab Runner's executors handle the logic required to run a job on a
target platform.

Challenges:

- Different executors demand unique approaches to address the same
  issues, such as script execution and logging, often resulting in
  significant compromises and leaky abstractions.
- Executors focus solely on individual jobs. For instance, with Docker
  and Kubernetes executors, a new connection is established for each
  job. This approach is unsuitable for longer-lived routines needed
  for functions like garbage collection.
- In-built executors cannot be ported to the "custom executor" due to
  the limitations of custom executor abstractions and the tight
  coupling between executors and the rest of the code base within the
  existing architecture.
- For Docker and Kubernetes, a "helper" container facilitates
  predefined scripts. However, several problems emerge from the helper
  being outside the environment where user scripts are executed,
  typically involving ownership and file permissions.
- Feature set deviation: Some executors have features others lack. For
  example, web terminal support is something that needs
  re-implementing for each executor, so not all executors support it.

### Job micro-managing ###

A job is split into multiple stages: `get_sources`, `restore_cache`,
`download_artifacts`, `user_script`, `after_script`,
`upload_artifacts_on_success` etc.

GitLab Runner communicates with the job's environment, instructing it
to execute each stage's script in an ad hoc manner. It waits for the
script to complete, reads the status code (to determine success or
failure), and then proceeds to initiate the next stage.

Challenges:

- If the job's environment is remote and the connection drops while
  executing a script, Runner cannot resume execution. This issue was
  frequent with the Kubernetes executor, prompting shell scripts to be
  executed in the background, with log output redirected to a file
  read by a separate, resumable process. This adds complexity to the
  executor and is only available for Kubernetes. This intricate change
  led to numerous customer-discovered edge cases and took several
  milestones to address.
- Because Runner controls the execution flow, it cannot crash/exit and
  resume jobs after a restart.

### Configuration ###

Runner's configuration is complex:

- Multiple runner configurations can be defined.
- Several layers:
  - Global configuration
  - Runner configuration
  - Executor configuration
  - Autoscaling configuration

Challenges:

- Numerous configuration options

  Runner supports setting variables in the config file, environment
  variables, and command line inputs. However, the config file is the
  only method that supports all settings. The twelve-factor
  methodology for configuration is arguably poor suited to Runner's
  complex options.
- All executor options are displayed, regardless of the executor being
  configured, making the `--help` command overwhelming.
- No validation.
- No user-provided validation exists for job-provided
  configurations. Ad hoc settings, such as the Kubernetes executor's
  `cpu_limit_overwrite_max_allowed`, allow a job to specify the CPU
  limit, but maintaining these fields is a maintenance burden.
- Although configuration files allow for comments, registering a new
  runner (or anything that triggers a config rewrite) discards the
  comments.

### Job logs ###

A job log combines data from various sources, including the runner
manager, executor, services, user scripts, and more.

Challenges:

- No semantic markup: We only support collapsible sections and ANSI
  colour codes.
