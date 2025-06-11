---
title: "Rails Upgrade"
status: ongoing
creation-date: "2024-07-28"
authors: [ "@igor.drozdov" ]
coaches: [ ]
dris: [ ]
owning-stage: "~section::dev"
participating-stages: [ "~section::dev" ]
toc_hide: true
---

<!-- This renders the design document header on the detail page, so don't remove it-->
{{< engineering/design-document-header >}}

## Summary

Rails version upgrade is driven by volunteers. The work is usually prioritized when a particular event related to it happens:

- [End of life](https://endoflife.date/rails) dates
- Next Rails version provided next Ruby version support (Ruby 3 Upgrade)
- Next Rails version has features that a particular group is interested in and it's more feasible to upgrade Rails rather than patch it

The process usually consists of the following steps:

- Rails is bumped to the next version in a draft merge request
- The failed CI jobs and tests are being fixed by pushing commits to the merge request
- The commits are extracted from the merge request into separate MRs to merge them into the default branch
  - Sometimes it's not possible because the changes are applicable only to the next Rails version only (like changed/removed patches)
- When the diff is as small as possible, we consider merging:
  - With Rails 7 upgrade, Delivery suggested and executed [experimental rollouts](https://gitlab.com/groups/gitlab-org/-/epics/7875#note_1341821006): the commit that contained Rails 7 changes have been cherry-picked into auto-deploy and deployed on `gprd-cny` and then `gprd` for a couple of hours

## Motivation

With the current process, the following challenges are faced:

- Merging the main MR must be coordinated with Delivery to execute experimental rollouts and reduce the scope of risky changes. Examples of blockers:
  - Delivery group capacity
  - Ruby version upgrade
  - GitLab’s major release
- The green CI of the MR must be reached and maintained while the target branch quickly moves forward. It makes achieving the green CI a moving target.
  - [Rails 7.1 MR](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/124004) was green 6 months ago, but its release was postponed due to the blockers above. When the MR was rebased 1 month ago, the CI failed with ~80 failed jobs and ~200 tests, which required significant effort to make it green again.
- Even though, the diff of the MR is as small as possible, it's still sizeable and contains changes in different areas:
  - [Rails 7.1 MR](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/124004) changes ~100 files
- It is hard to parallelize and synchronize the engineering effort
  - Engineers have to collaborate in a single MR or have separate ones and compare changes

The main goal is to facilitate the process of addressing the challenges above.

## Proposal

The proposal is to include the current and the next Rails versions in Gemfile and maintain a single codebase for both versions. The gem version and differences in the app behavior are controlled by an environment variable. The approach has the following **benefits**:

### Development

- The process doesn't require to have a single large MR anymore. The next Rails version is introduced and the fixes are merged in the main codebase one by one.
- The fixes are introduced and merged via small merge requests even if incompatible with the current Rails version.
- The issues are fixed in parallel by different teams in their area of expertise and the changes are synchronized in the main branch as per usual development

### Quality

- CI pipeline that runs tests and checks against the next Rails version can be introduced
  - The pipeline controls that no new failures appear, so achieving the green CI for a particular Rails version is not a moving target anymore
  - The pipeline synchronizes all the fixes introduced by multiple teams and reflects the current state of the app running the next Rails version

### Delivery

- Merging the changes related to the next Rails version is no longer coordinated with Delivery. The changes are merged but executed only when the environment variable is switched to enable the next Rails version.
- The experimental rollout process is simplified to switching an environment variable. It enables an easier rollback to the previous Rails version if an issue is encountered.

## Design and implementation details

To implement the proposal, we can specify two `rails` versions in `Gemfile`:

```ruby
def next?
  File.basename(__FILE__) == "Gemfile.next"
end

if next?
  gem 'rails', '~> 7.1.3.4', feature_category: :shared
else
  gem 'rails', '~> 7.0.8.4', feature_category: :shared
end
```

`Gemfile.next` is a symlink to `Gemfile`. After running

```bash
BUNDLE_GEMFILE=Gemfile.next BUNDLE_CACHE_PATH=vendor/cache.next bundle install
BUNDLE_GEMFILE=Gemfile.next BUNDLE_CACHE_PATH=vendor/cache.next bundle exec bundler-checksum lint
```

we have the following set of files:

```bash
Gemfile
Gemfile.lock
Gemfile.checksum
Gemfile.next
Gemfile.next.lock
Gemfile.next.checksum
```

The different paths in the codebase are controlled by `Gitlab.next_rails?` flag:

```ruby
def self.next_rails?
  return @next_bundle_gemfile unless @next_bundle_gemfile.nil?

  @next_bundle_gemfile = File.exist?(ENV["BUNDLE_GEMFILE"]) && File.basename(ENV["BUNDLE_GEMFILE"]) == "Gemfile.next"
end
```

When a test is fixed for both the current and the next Rails versions, it can be verified as:

```bash
bundle exec rspec <test_file_spec.rb>
BUNDLE_GEMFILE=Gemfile.next BUNDLE_CACHE_PATH=vendor/cache.next bundle exec rspec <test_file_spec.rb>
```

### PoC

Here are the two MRs with identical codebase:

- The [one](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/160895) that runs tests with `7.0.8.4` version enabled (by default).
- The [one](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/160896) that runs tests with `7.1.3.4` version enabled (by specifying `BUNDLE_GEMFILE` environment variable).

Both pipelines are green.

### Analysis

- ~40 `Gitlab.next_rails?` entries for `7.0.8.4 -> 7.1.3.4` update
  - It’s not a big number for a large codebase like GitLab Rails
  - All the checks are removed after the next Rails version is deployed, i.e the number of `Gitlab.next_rails?` entries is reset to zero after every successful upgrade. It allows us to have a retrospective after an upgrade and easily change the approach if we don’t want to use it anymore.
- `bundler-checksum` is modified to create `Gemfile.next.checksum` when it's executed for `Gemfile.next`
- The local gems (in the `gems` directory) compatibility should be investigated because some of them patch `rails` gems (like `activerecord-gitlab`). The pipeline passes in the CI but it should be investigated whether the result is reliable.
- When a gem is updated, both `Gemfile.lock` and `Gemfile.next.lock` must be updated. It must be done manually at the moment, we can consider facilitating this process.

## Iteration plan

### Rails 7.1 Upgrade

The main goal is to keep the pipeline of `7.0.8.4 -> 7.1.3.4` MR green.

- Extract the changes from the main MR or `id-next-rails` PoC and merge them until all the changes from the main MR are in the main branch.
- Define a CI pipeline that runs the test suite against the next Rails version. The pipeline is not allowed to fail to maintain the green status of `7.1.3.4` version.
- Coordinate with Delivery the date of the rollout.
- Remove the conditional `Gitlab.next_rails?` checks after the successful rollout
- Evaluate whether the approach is feasible and can be used for future upgrades
- Update the documentation

### Future Rails upgrades

The implementation details are to be discussed, but the potential process can be:

- Fix the deprecation warnings
- Introduce the next Rails version to the codebase and fix all the issues on booting
- Define a CI pipeline that runs the test suite against the next Rails version. The pipeline is allowed to fail only for existing failures. The new failures fail the pipeline.
- Fix the issues and merge them to the main branch until the next Rails version pipeline is green.
- Coordinate with Delivery the date of the rollout.
