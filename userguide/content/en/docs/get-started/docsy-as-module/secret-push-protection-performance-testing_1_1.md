---
title: "Secret push protection performance testing"
---

### When to use this runbook?

Use this runbook for:

* [Running GPT tests](#running-gpt-tests) - for running tests and comparing with previous benchmarks
* [Deploying a new version of GitLab to GET](#re-deploying-a-new-build) - for updating a GET instance, most likely to test out changes related to secret push protection
* [Setting up a new GET environment](#setting-up-a-get) - for testing different reference architectures

### Prerequisites

* gcloud ([official instructions](https://cloud.google.com/sdk/install)) - for running various commands, and for logging in to the test runner vm
* The Static Analysis GCP Project (see [Resources section](#resourcesacronyms)) - access required to make changes to the infrastructure

### Running GPT tests

#### Manual testing

Get the url and password for the `root` user from 1password by searching for Static Analysis in the Engineering Vault. Please don't delete projects, groups, or users, but feel free to create any of those, or anything else you'd like to test with.

#### Running automated tests (via GCP VM)

Options for logging in to the VM:

* SSH in to the VM: `gcloud compute ssh --zone us-west1-c gpt-test-runner-2 --project dev-sast-prereceive-8a4574ec`
* Or, go to [The Static Analysis GCP Project: dev-sast-prereceive-8a4574ec](https://console.cloud.google.com/welcome?project=dev-sast-prereceive-8a4574ec), click `Compute Engine`, find `gpt-test-runner-2`, and click `SSH`. This will launch a web-based SSH session.

One time setup (required by everyone running the tests from the VM):

* `git clone https://gitlab.com/gitlab-org/quality/performance.git`
* cd in to `performance`
* Copy the gcp-2k.json file from [this MR](https://gitlab.com/gitlab-org/secure/pocs/gitlab-environment-toolkit-configs/-/merge_requests/4) to the `performance` directory
* Create a `.tool-versions` file and add `ruby 3.2.2` to it (or whatever the latest is)
* `bundle install`
* Check out our branch `secret-detection`

Running the tests:

* Get the glpat token from 1password by searching for Static Analysis in the Engineering Vault
* Ensure you are in the `performance` directory
* To run just the `git_secret_detection.js` test (as an example): `ACCESS_TOKEN=glpat-REDACTED SD_PUSH_CHECK_ENABLED=true SD_FILES_PER_COMMIT=4 GPT_DEBUG=true SD_FILE_SIZES="10kb" GPT_SKIP_RETRY=true ./bin/run-k6 --environment gcp-2k.json --options 60s_40rps.json --unsafe --tests k6/tests/git/pre-receive/git_secret_detection.js`
* To run all the tests: `ACCESS_TOKEN=glpat-REDACTED SD_PUSH_CHECK_ENABLED=true ./bin/run-k6 --environment gcp-2k.json --options 60s_40rps.json`

#### Running automated tests (via Docker)

* Get the glpat token (ACCESS_TOKEN) from 1password by searching for Static Analysis in the Engineering Vault
* GPT tests can be ran from any directory that contains an `environments` directory
* Open a local terminal and `git clone https://gitlab.com/gitlab-org/quality/performance.git`
* Create `environments` directory at the root
* Copy the gcp-2k.json file from [this MR](https://gitlab.com/gitlab-org/secure/pocs/gitlab-environment-toolkit-configs/-/merge_requests/4) to that `environments` directory
* Rename the gcp-2k.json file as necassary, as well as changing the `name` and `url` values
* To run just the `git_secret_detection.js` test (as an example): `docker run -it -e ACCESS_TOKEN=glpat-REDACTED -v $PWD:/config gitlab/gitlab-performance-tool SD_PUSH_CHECK_ENABLED=true SD_FILES_PER_COMMIT=4 GPT_DEBUG=true SD_FILE_SIZES="10kb" GPT_SKIP_RETRY=true --environment gcp-2k.json --options 60s_40rps.json --tests git_secret_detection.js`
* To run all the tests: `docker run -it -e ACCESS_TOKEN=glpat-REDACTED -v $PWD:/config gitlab/gitlab-performance-tool --environment gcp-2k.json --options 60s_40rps.json`

### Setting up a GET

A GCP environment has been set up under [The Static Analysis GCP Project: dev-sast-prereceive-8a4574ec](https://console.cloud.google.com/welcome?project=dev-sast-prereceive-8a4574ec) with GET using a 2k reference architecture with a prefix of `gcp-2k`.

#### Bootstrapping a new environment

Note: The following steps are written from the perspective of setting up
another 2k reference architecture. If you need to set up something like
a 25k reference architecture, you may need to change things that are not
covered in this guide. Alternate reference architectures can be [found here](https://gitlab.com/gitlab-org/quality/gitlab-environment-toolkit-configs/quality/-/tree/main/configs/reference_architectures?ref_type=heads).

One time steps:

* Clone the [GET repo](https://gitlab.com/gitlab-org/gitlab-environment-toolkit) and `cd` into it
* Copy bootstrap.sh from [this MR](https://gitlab.com/gitlab-org/secure/pocs/gitlab-environment-toolkit-configs/-/merge_requests/4) to the root and update it as necessary
* You may need to make it executable: `chmod +x bootstrap.sh`

Note, `bootstrap.sh` has steps that only need to be ran once, as well as
steps that need to be ran for setting up a new $GCP_ENV_PREFIX, and they
still need to be separated.

Steps to add a new $GCP_ENV_PREFIX:

* Use [Provisioning the environment with Terraform](https://gitlab.com/gitlab-org/gitlab-environment-toolkit/-/blob/main/docs/environment_provision.md) as guide for setting up Terraform, ignoring the AWS steps as we are using GCP
* Make sure you are within your cloned [GET repo](https://gitlab.com/gitlab-org/gitlab-environment-toolkit)
* Update the variables in bootstrap.sh as necessary
* Run `./bootstrap.sh`
* Note the ip address at the end
* Run `mkdir -p terraform/environments/$GCP_ENV_PREFIX/files/gitlab_configs``
* Copy over environment.tf, main.tf, and variables.tf from [this MR](https://gitlab.com/gitlab-org/secure/pocs/gitlab-environment-toolkit-configs/-/merge_requests/4) into the corresponding directory
* Update those *.tf files as necessary
* From that MR, copy `environments/gcp-2k/files/gitlab_configs/gitlab_rails.rb.j2` to `environments/$GCP_ENV_PREFIX/files/gitlab_configs`
* Cd to /terraform/environments/$GCP_ENV_PREFIX
* Run `terraform init`
* Run `terraform apply`
* Small celebration
* Use [Configuring the environment with Ansible](https://gitlab.com/gitlab-org/gitlab-environment-toolkit/-/blob/main/docs/environment_configure.md) as guide for setting up Ansible, ignoring the AWS steps as we are using GCP
* Cd to the root directory of the [GET repo](https://gitlab.com/gitlab-org/gitlab-environment-toolkit)
* Run `mkdir -p ansible/environments/$GCP_ENV_PREFIX/files/gitlab_tasks`
* Run `mkdir -p ansible/environments/$GCP_ENV_PREFIX/inventory`
* Copy over vars.yml, and gcp_2k.gcp.yml from [this MR](https://gitlab.com/gitlab-org/secure/pocs/gitlab-environment-toolkit-configs/-/merge_requests/4) into that `/inventory` directory
* Rename gcp_2k.gcp.yml and update both *.yml files as necessary
* Copy over `monitor.yml` to `ansible/environments/$GCP_ENV_PREFIX/files/gitlab_tasks`
* Nothing needs to change in `monitor.yml`, but be sure `grafana_password` is set in `vars.yml`
* Acquire a new Ultimate license [following this process](/handbook/support/readiness/operations/docs/policies/team_member_licenses/)
* Upload that license file to `/environments/$GCP_ENV_PREFIX/files`
* From the root directory, follow the steps in [Installing Ansible with a Virtual Environment](https://gitlab.com/gitlab-org/gitlab-environment-toolkit/-/blob/main/docs/environment_configure.md#installing-ansible-with-a-virtual-environment)
* Cd to the `ansible` directory
* Run `ansible-playbook -i environments/$GCP_ENV_PREFIX/inventory playbooks/all.yml`
* After logging in to the instance, if the Ultimate license doesn't apply, you may have to manually upload the license
* Make the instance a "Dedicated instance" by logging in to the rails console and running:

```ruby
a = ApplicationSetting.first
a.gitlab_dedicated_instance = true
a.save!
```

#### Setting up an existing environment ($GCP_ENV_PREFIX)

* Clone the [GET repo](https://gitlab.com/gitlab-org/gitlab-environment-toolkit), if it doesn't already exist, and `cd` into it
* Run `mkdir terraform/environments/$GCP_ENV_PREFIX`
* Run `mkdir -p ansible/environments/$GCP_ENV_PREFIX/files/gitlab_tasks`
* Navigate to https://gitlab.com/gitlab-org/secure/pocs/gitlab-environment-toolkit-configs (pending merge of [this MR](https://gitlab.com/gitlab-org/secure/pocs/gitlab-environment-toolkit-configs/-/merge_requests/4))
* Copy the `configs/$GCP_ENV_PREFIX/terraform/*.tf` files into the `terraform/environments/$GCP_ENV_PREFIX` diretory
* Copy the `configs/$GCP_ENV_PREFIX/ansible/*.yml` files into the `ansible/environments/$GCP_ENV_PREFIX` diretory
* From the root directory, follow the steps in [Installing Ansible with a Virtual Environment](https://gitlab.com/gitlab-org/gitlab-environment-toolkit/-/blob/main/docs/environment_configure.md#installing-ansible-with-a-virtual-environment)
* Cd to the `ansible` directory
* Run `ansible-playbook -i environments/$GCP_ENV_PREFIX/inventory playbooks/all.yml`

#### Populating data

* Clone the [GPT repo](https://gitlab.com/gitlab-org/quality/performance)
* Split the importing of data into the following two steps

Horizontal data:

```console
docker run -it \
  -e ACCESS_TOKEN=glpat-REDACTED \
  -e GPT_GENERATOR_POOL_TIMEOUT=600 -e GPT_GENERATOR_POOL_SIZE=1 -e GPT_GENERATOR_RETRY_COUNT=20 -e GPT_GENERATOR_RETRY_WAIT=10 \
  -v $PWD:/results \
  -v $PWD:/config \
  gitlab/gpt-data-generator \
  --environment gcp-2k.json --environment-url=http://34.83.26.81 \
  --subgroups 10 --projects 10 --no-vertical
```

This command will most likely time out, but if it shows as importing in
the browser, just wait for it to finish importing.

Vertical data:

```console
docker run -it \
  -e ACCESS_TOKEN=glpat-REDACTED \
  -e GPT_DEBUG=true \
  -e GPT_GENERATOR_POOL_TIMEOUT=600 -e GPT_GENERATOR_POOL_SIZE=1 -e GPT_GENERATOR_RETRY_COUNT=20 -e GPT_GENERATOR_RETRY_WAIT=10 \
  -v $PWD:/config \
  -v $PWD:/tests \
  -v $PWD:/results \
  gitlab/gpt-data-generator --environment gcp-2k.json --no-horizontal
```

### Re-deploying a new build

* There are prerequisite steps that will be covered in the `Setting up a GET` section in the future
* Navigate to your cloned [GET repo](https://gitlab.com/gitlab-org/gitlab-environment-toolkit) and `cd` into it
* If not already activated for your terminal, run `. ./get-python-env/bin/activate`
* cd into the `ansible` directory of your cloned GET repo
* Check `ansible/environments/$GCP_ENV_PREFIX/inventory/vars.yml` to see which of the 3 methods of deployment we are
targeting, and if anything needs to be changed before deploying
* Redeploy with the same ansible command from the setup steps: `ansible-playbook -i environments/$GCP_ENV_PREFIX/inventory playbooks/all.yml`

### Monitoring

The Grafana dashboards can be found at `/-/grafana/dashboards/`. Login credentials can be found in 1password under "Static Analysis - 2K GCP Grafana".

Setting up the environment is covered in previous sections, but the
files necessary to make this work are as follows:

* ansible/environments/gcp-2k/files/gitlab_tasks/monitor.yml
* ansible/environments/linux_package/server-performance.json
* ansible/environments/dashboards.yaml
* ansible/environments/datasources.yaml

These files can be found in [this MR](https://gitlab.com/gitlab-org/secure/pocs/gitlab-environment-toolkit-configs/-/merge_requests/4).

See the [Custom Tasks section](https://gitlab.com/gitlab-org/gitlab-environment-toolkit/-/blob/main/docs/environment_advanced.md#custom-tasks) of the GET docs for more info.

### Resources/Acronyms

* [GitLab Environment Toolkit (GET)](https://gitlab.com/gitlab-org/gitlab-environment-toolkit)
* [GitLab Performance Tool (GPT)](https://gitlab.com/gitlab-org/quality/performance)
* [The Static Analysis GCP Project: dev-sast-prereceive-8a4574ec](https://console.cloud.google.com/welcome?project=dev-sast-prereceive-8a4574ec)
* GCP - Google Cloud Platform
* [Secret Push Protection documentation](https://docs.gitlab.com/ee/user/application_security/secret_detection/pre_receive.html)

### Miscellaneous

Most examples throughout the runbook have been added using the `gcp-2k`
environment as their basis.

#### Rails console and checking feature flags

* SSH in to a rails server: `gcloud compute ssh --zone us-west1-c gcp-2k-gitlab-rails-1 --project dev-sast-prereceive-8a4574ec`

* Launch a rails console: `sudo gitlab-rails console` (it will take a bit to connect)

* Check the status of the push check feature for a project: `Feature.enabled?(:pre_receive_secret_detection_push_check, Project.find(123))`

#### Enabling the Application Setting

* Via the web, enable the feature instance-wide by navigating to `/admin/application_settings/security_and_compliance`
* Via the rails console:

```ruby
a = ApplicationSetting.first
a.pre_receive_secret_detection_enabled = true
a.save!
```

#### Determining current version

To see the current version of GitLab running on the instance, login and then go to
`/help`.
