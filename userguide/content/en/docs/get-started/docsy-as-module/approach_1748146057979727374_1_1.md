---
title: Application Performance Group - Approach and Common Themes
---

## How we approach a performance problem

We're a cross-functional group, which means that we frequently need to venture into unknown territory,
both in terms of product areas but also technology. This comes with a certain amount of unknowns each
time we do this, but nevertheless we think there are certain steps that apply to most of the problems
we look at, which are summarized below. These steps will not always happen in the same order, but they
should be carried out in one way or another in most cases.

### Verify a hypothesis

The first step is to make sure that there is actually a problem. This is often obvious, such as when
consulting a dashboard or user report and finding that a particular action took a long time to complete.
That is not always the case, however. Especially when working with existing code it is easy to draw
wrong conclusions. Sometimes code can appear to be slow, or appear to become slow under certain
conditions, but the first step should always be to verify that this is actually the case.

A good example for how _not_ to do performance improvements is to assume something is an issue or might become one and
apply an alleged improvement without also providing an accompanying benchmark to prove its effectiveness.
Here is an example: assume we have a list of objects, and we want to transform that list via `map`:

```ruby
new_list = some_list.map { |a| ... }
```

Basic Ruby knowledge dictates that this will create a copy of `some_list` in memory, which can create memory
or GC pressure. While this is true, the line above tells us nothing about how often this code executes or
how large `some_list` might be. "Optimizing" this code to change the list in place via `map!` because we think
that's faster is conjecture, not verification, and it means that we might be increasing code complexity
or reduce readability without actually getting any meaningful performance gains.

Preemptive performance optimizations should be considered "guilty until proven innocent".
The Ruby on Rails project even [encodes this in their issue templates](https://github.com/rails/rails/blob/main/guides/bug_report_templates/benchmark.rb).
We should strive for a similar approach to verifying performance hypotheses.

### Identify the source of the problem

Assuming that we know that there is in fact a performance issue, we need to find the source of the problem.
Needless to say, this is highly dependent on the particular case, but for Rails apps a good rule of thumb is:

* 80% chance it's the ORM
* 15% chance it's the Ruby VM
* 5% chance it's a memory related issue such as GC churn

(Source: [Nate Berkopec/Twitter](https://twitter.com/nateberkopec/status/1158542770421682176))

This is just a heuristic of course, but one should always first look for the most likely offender. For instance,
I/O is orders of magnitude slower than anything happening in CPU, CPU caches or RAM, so any such problem here will
have an outsized negative impact and should be assessed first.
Examples are slow queries, N+1s, reading large files, or simply too many of these operations running in sequence.
These problems are almost always much easier to optimize than improving Ruby code performance or memory pressure.

Each of these areas (I/O, CPU, and memory) come with different tooling to analyze and require different
approaches be taken to optimize them, which is beyond the scope of this document, but a good start might be:

* [Our group's knowledge database](knowledge.html)
* [The GitLab performance docs](https://docs.gitlab.com/ee/development/performance.html)

### Create meaningful benchmarks

While verifying an alleged optimization with a benchmark is a required step, it is surprisingly hard to create
meaningful benchmarks. Especially microbenchmarks that test a code snippet in isolation can quickly lead to
wrong conclusions. A couple typical fallacies or pitfalls are listed below.

1. Code that is being isolated into a microbenchmark is rarely used in the same way in the actual application.
The application typically does not call the same method millions of times in a loop. It is far more interesting
to see how a given method performs when benchmarked in its "natural environment", best in production.
1. Minute mistakes such as allocating a method argument in a benchmark loop can cause GC churn that wouldn't
normally exist so one has to write benchmark code very carefully. If it's CPU efficiency we're looking for,
disabling GC for the duration of the benchmark is most likely necessary as well. Otherwise you are benchmarking
GC cycles, not your method body. Moreover, CPU frequency scaling might skew results locally, so should always be turned off.
1. A microbenchmark saying that variant `X` is 30% faster than variant `Y` isn't always an interesting result.
What counts is the cost basis for those operations as well: if `Y` takes 10 nano seconds, then even if `X` is 30% faster,
but the code is twice as complex, it is unlikely to be a worthwhile improvement. Moreover, particularly with benchmarks
that measure iterations-per-second such as is the case with [`benchmark-ips`](https://github.com/evanphx/benchmark-ips),
one needs to ask whether an optimization is worthwhile.
If we optimize code that now manages to complete 1M iterations instead of 800k in a benchmark, but the
application only calls it once every a few seconds or so, chances are the improvement is inconsequential.
1. When running a benchmark on a developer box, it needs to be understood that results cannot be assumed to represent
performance when deployed to production due to a number of reasons, including:
   * Different machine specs or virtualized hardware.
   * [Noisy neighbors](https://en.wikipedia.org/wiki/Cloud_computing_issues#Performance_interference_and_noisy_neighbors) in cloud environments (unless that is cared for by the provider).
   * More time spent in I/O due to increased network latency, especially since I/O on developer machines often happens over
     the `loopback` interface or UNIX domain sockets, i.e. no network boundaries are traversed.
   * Different sizes of database tables if those are involved.
   * GC and/or caches are not as warm as on production.

### Prepare a fix and verify it

This is typically the last step. If we think we found the source of the problem, we make a change and benchmark it
according to the guidelines above, so we can ensure the problem is resolved. An important point here is that
verifying it merely on a developer box is typically not sufficient. Benchmarks run on a developer box are very
useful to isolate out performance bottlenecks or compare different variants on a relative basis. However, absolute
numbers are unlikely to be representative of a production environment and should therefore always be
measured again with real traffic and real users. Only this will ultimately tell us whether we were successful or not.
For example, we did not just hypothesize whether migrating to the Puma web server would yield improvements in
memory use. Before shipping this to everyone on gitlab.com, we first [canaried the changes and measured the results](https://gitlab.com/gitlab-com/gl-infra/infrastructure/-/issues/7455#note_239070865),
and actually found that request latencies had increased, and further improvements would be necessary.

## Common themes

Apart from our overall approach, there are some common themes we have observed while working on various
performance related problems.

### Doing expensive work in loops

This was a key theme in the project import related work we did. Imports were designed in a way where lots of individual
queries fire per every relation that is processed. This leads to a kind of mega-N+1, since if the project we import
has tens or hundreds of thousands of merge requests or issues, all of which have dependencies themselves
that need to be imported, then we would end up performing a number of database inserts equal to a multiple
of all these relations. We found that we were able to mitigate some of this overhead without completely changing
the design by moving to [batch insertions](https://docs.gitlab.com/ee/development/database/insert_into_tables_in_batches.html) instead.

### Overreliance on ActiveRecord

We often use ActiveRecord in ways that makes it really hard to understand what the underlying query will look like
and how it will perform, which can lead them to be inefficient or susceptible to N+1s. ActiveRecord also adds significant
CPU and memory overhead, since it will need to construct Ruby objects and execute triggers in response to executing SQL.
Especially combined with doing this in loops, time spent in ActiveRecord can quickly add up.

### Linear memory growth

Another primary issue with project imports we found was that we would grow memory linearly with project complexity,
because the project schema was encoded in a single JSON file that we would load into memory in full. The larger the project,
the more costly it was to process it. We addressed this by moving to a streaming based approach where elements that had
already been processed before can be released. This also works at smaller scale. For instance, when processing database
records in batch, they should be fetched so that each batch is processed individually instead of loading all batches and
then iterating over them. In fact we have first-class support for this via the
[`in_batches` helper](https://docs.gitlab.com/ee/development/database/iterating_tables_in_batches.html), but the idea applies to
more than just database queries.

### Scaling via processes or threads in Ruby

Ruby only has limited support for running code in parallel in any given process due to the [Global VM Lock (GVL)](https://en.wikipedia.org/wiki/Global_interpreter_lock), which prevents more than
one thread to execute Ruby code at a time. This puts a natural cap on the efficiency of Ruby, since it cannot natively exploit
multiple CPU cores to execute Ruby code in parallel. Traditionally, therefore, Ruby applications often scaled out by
starting new processes rather than utilizing multiple threads inside the same process.
This is the approach the popular Unicorn web server uses.

Moving to a threaded model of concurrency, while not necessarily as CPU efficient, can yield memory savings since threads
can share memory with their host process, whereas running multiple processes to achieve parallelism implies less memory
is shared (although there are techniques one can exploit such as the lazy allocation of new unshared memory pages via
[copy-on-write](https://en.wikipedia.org/wiki/Copy-on-write).) Again, [migrating from Unicorn to Puma](https://docs.gitlab.com/ee/administration/operations/puma.html) was an example of this
and resulted in a significant reduction in memory use across GitLab.

### Finding performance/product trade-offs

Sometimes the best performance improvement is to simply not run the code that is slow. When looking at performance issues
of the blame feature on GitLab merge request diffs, which could get very slow if there was a lot of Git history to fetch,
we found that perhaps the best solution would be not to serve these diffs to the web UI to begin with, knowing that users
could always fetch them via `git` manually if so desired.

We should always look for trade-offs between product and technology, and this applies to performance as well.

### Static analysis is only marginally useful

We spent some time on writing linters to detect performance issues, but performance problems are often based on many
dynamic factors and very hard to detect statically at build time. This is especially true for linters that flag the use
of particular Ruby methods or iterators, since this is equivalent to claiming there is a performance issue without
actually benchmarking it, which is an anti-pattern as outlined above.

It is not an area we think developers should rely on too much for performance sensitive tasks, but in some cases it can
be useful to give directions as to how something can be improved, especially if the improvement is simple or could
even be auto-corrected because it's a one-liner. A good example for this is the file I/O API, which offers [faster variants of certain methods](https://docs.gitlab.com/ee/development/performance.html#reading-from-files-and-other-data-sources)
that are just as easy to use, so we might as well make sure that these will never turn into performance problems to begin with!
