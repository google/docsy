---
title: "GitLab CI/CD - Hands-On Lab: Deploying Applications"
description: "This Hands-On Guide demonstrates how to deploy applications in a pipeline"
---

> Estimated time to complete: 15 minutes

## Task A. Preparing Code

First, let’s make some small adjustments to our code so that it runs as a web application:

1. Open `main.go`.

1. Delete the existing code, and replace it with the following:

```go
package main

import (
    "fmt"
    "log"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hi there")
}

func main() {
    http.HandleFunc("/", handler)
    log.Fatal(http.ListenAndServe(":80", nil))
}
```

This application will listen on port 80 for any requests to the "/" (root) endpoint. When it receives a request, it will print out the message *Hi there*.

To accommodate our new application type, we will modify our CI/CD process by removing the tests to run the application binary. These tests will no longer work, as they will cause the application to pause and wait for connections. Instead, we will deploy this application to a test server to be able to test our application. To start, your CI/CD file should look like this:

```yaml
image: golang

include:
  - component: ilt.gitlabtraining.cloud/components/sast/sast@main

workflow:
  rules:
    - if: $CI_COMMIT_TAG
      when: never 
    - when: always

stages:
  - test
  - build
  - run
  - release
  - deploy

test go:
  stage: test
  script: go test array/ArrayUtils
  allow_failure: true

build go:
  stage: build
  script:
    - go build
  artifacts:
    paths: 
      - array
  rules:
    - if: $CI_PIPELINE_SOURCE == 'merge_request_event'

release job:
  stage: release
  image: registry.gitlab.com/gitlab-org/release-cli:latest
  script:
    - echo "Generating the latest release!"
  release: 
    tag_name: 'v0.$CI_PIPELINE_IID'
    description: 'The latest release!'
  rules:
    - if: $CI_PIPELINE_SOURCE != 'merge_request_event'

deploy app:
  stage: deploy
  image: ubuntu:latest
  before_script:
    - 'which ssh-agent || ( apt-get update -y && apt-get install openssh-client git -y )'
    - eval $(ssh-agent -s)
    - chmod 400 "$SSH_PRIVATE_KEY"
    - ssh-add "$SSH_PRIVATE_KEY"
    - mkdir -p ~/.ssh
    - chmod 700 ~/.ssh
  script:
    - ssh-keyscan -t rsa,ed25519 $ip >> ~/.ssh/known_hosts
    - ssh root@$ip 'ls /'
```

1. To ensure we have access to the build artifact in the deploy job, remove the run condition from the job:

```yaml
build go:
  stage: build
  script:
    - go build
  artifacts:
    paths: 
      - array
```

## Task B. The Deployment Process

We now have an SSH connection working between the GitLab runner and our target server. The final step we have is to deploy our application to the server! Ideally, we would only do this on commits to the default branch.

1. Start by adding a rule to only run the deploy job on default branch commits.

```yaml
deploy app:
  stage: deploy
  image: ubuntu:latest
  before_script:
    - 'which ssh-agent || ( apt-get update -y && apt-get install openssh-client git -y )'
    - eval $(ssh-agent -s)
    - chmod 400 "$SSH_PRIVATE_KEY"
    - ssh-add "$SSH_PRIVATE_KEY"
    - mkdir -p ~/.ssh
    - chmod 700 ~/.ssh
  script:
    - ssh-keyscan -t rsa,ed25519 $ip >> ~/.ssh/known_hosts
    - ssh root@$ip 'ls /'
  rules:
    - if: $CI_PIPELINE_SOURCE != 'merge_request_event'
```

Now, the job will only run on commits to the default branch. With this set, we can now deploy the application.

1. We will need to get the binary of the application. Right now, the build only runs on merge requests, so we can either modify the rule or add a new build. For this example, let’s opt to move the build to the default branch.

```yaml
build go:
  stage: build
  script:
    - go build
  artifacts:
    paths: 
      - array
  rules:
    - if: $CI_PIPELINE_SOURCE != 'merge_request_event'

deploy app:
  stage: deploy
  image: ubuntu:latest
  before_script:
    - 'which ssh-agent || ( apt-get update -y && apt-get install openssh-client git -y )'
    - eval $(ssh-agent -s)
    - chmod 400 "$SSH_PRIVATE_KEY"
    - ssh-add "$SSH_PRIVATE_KEY"
    - mkdir -p ~/.ssh
    - chmod 700 ~/.ssh
  script:
    - ssh-keyscan -t rsa,ed25519 $ip >> ~/.ssh/known_hosts
    - ssh root@$ip 'ls /'
  rules:
    - if: $CI_PIPELINE_SOURCE != 'merge_request_event'
```

To be able to launch and maintain the execution of our web application, we will need to add it as a system service for our server. To achieve this, we will write a simple system service.

1. Create a new file at the root of your project named `array.service`. In this file, add the following text:

```bash
[Unit]
Description=
After=network.target

[Service]
Type=simple
ExecStart=/www/array

[Install]
WantedBy=multi-user.target
```

Our code will need to move the array binary to the www directory, and move the service definition file to the /lib/systemd/system directory. To achieve this, you can use scp.

```yaml
deploy app:
  stage: deploy
  image: ubuntu:latest
  before_script:
    - 'which ssh-agent || ( apt-get update -y && apt-get install openssh-client git -y )'
    - eval $(ssh-agent -s)
    - chmod 400 "$SSH_PRIVATE_KEY"
    - ssh-add "$SSH_PRIVATE_KEY"
    - mkdir -p ~/.ssh
    - chmod 700 ~/.ssh
  script:
    - ssh-keyscan -t rsa,ed25519 $ip >> ~/.ssh/known_hosts
    - ssh root@$ip 'mkdir -p /www'
    - scp array root@$ip:/www
    - scp array.service root@$ip:/lib/systemd/system/
    - ssh root@$ip 'ls /www'
    - ssh root@$ip 'ls /lib/systemd/system'
    - ssh root@$ip 'systemctl enable array.service'
    - ssh root@$ip 'systemctl start array.service'
    - ssh root@$ip 'systemctl status array.service'
  rules:
    - if: $CI_PIPELINE_SOURCE != 'merge_request_event'
```

This script copies the binary and system service, then starts the system service. After the system service starts, you can navigate to http://{your-server-ip} (Can be found in the Variables section of your group under `$ip`) to see the results!

## Lab Guide Complete

You have completed this lab exercise. You can view the other [lab guides for this course](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabcicdhandson).

## Suggestions?

If you wish to make a change to the *Hands-On Guide for GitLab CI/CD*, please submit your changes via Merge Request.
