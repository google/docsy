---
title: "AWS Data Team Guide"
description: "AWS data team guide"
---

## Context

The data platform team uses AWS to support:

- Snowplow

Furthermore, other pipelines use S3 buckets to store data, such as:

- just global
- greenhouse

## Getting access to AWS

- An AR requesting role_name `DataEngineeringAccess` should be filled out, more details in this [issue comment](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/23442#note_1489116380).

## awscli

Occasionally, you will need to do actions via the command line. For example, if you would like to do query a file in S3, but it exceeds the file size limit to use the UI's 'S3 Select', you will have to query it from the command line instead.

### Installing awscli

In the 'Onboarding template', you should have already installed [awscli](https://aws.amazon.com/cli/). If not, install it now.

### Authenticating with awscli

1. Via Okta, go to your `AWS access portal`
1. For `gitlab SaaS production` account, next to `DataEngineeringAccess` role, click `Access keys`
1. Copy the following information
    - SSO start URL
    - SSO Region
1. In the command line, run [`aws configure sso`](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html)
    1. This will prompt you to enter the information you saved above
    1. Then, a pop-up will enter in your internet browser asking you confirm
    1. Lastly, in your shell, you will need to select/enter the following:
        - choose the project, i.e `gitlab SaaS production`
        - choose the role, i.e `DataEngineeringAccess`
        - For the remaining prompts, i.e region, you can just type \<enter> to use the default value
1. After authentication, you can run AWS CLI commands as usual by adding the --profile DataEngineeringAccess-8552xxxxx argument. The CLI prompt will remind you to include this.

#### Example command

A 'S3 select' command using the cli:

```sh
aws s3api select-object-content \
--bucket datateam-just-global-campaigns \
--key datateam-just-global-campaignsInfo/2024-12-19-GitLab_Analytics_Export_JG-from-2023-07-01-until-2024-12-15.csv \
--expression "SELECT * FROM s3object LIMIT 5" \
--expression-type 'SQL' \
--input-serialization '{"CSV": {"FileHeaderInfo": "NONE"}}' \
--output-serialization '{"CSV": {}}' \
--profile DataEngineeringAccess-8552xxx \
output.csv
```
