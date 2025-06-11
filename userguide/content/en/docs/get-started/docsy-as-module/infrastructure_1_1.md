---
aliases: /handbook/engineering/development/analytics/analytics-instrumentation/infrastructure.html

title: Internal Analytics Infrastructure
description: "Architecture of our internal analytics systems"
---

## Snowplow

Snowplow events fired on GitLab SaaS go through an AWS pipeline, managed by GitLab.

### Event flow in the AWS pipeline

Every event goes through a collector, enricher, and pseudonymization lambda. The event is then dumped to S3 storage where it can be picked up by the Snowflake data warehouse.

Deploying and managing the infrastructure is automated using Terraform in the current [Terraform repository](https://gitlab.com/gitlab-com/gl-infra/config-mgmt/-/tree/master/environments/aws-snowplow).

```mermaid
graph LR
    GL[GitLab.com]
    subgraph aws-cloud[AWS]
        subgraph ec2
            COL[Collector]
            ENR[Enricher]
        end
        subgraph kinesis
            KRGE[snowplow-raw-good]
            KRBE[snowplow-raw-bad]
            KEGE[snowplow-enriched-good]
            KEBE[snowplow-enriched-bad]
        end
        subgraph Lambda
            PSRB[pseudonymization]
            PSEG[pseudonymization]
            PSEB[pseudonymization]
        end
        subgraph S3
           S3RBE[S3 raw-bad]
           S3EGE[S3 output]
           S3EBE[S3 enriched-bad]
        end
    end
    SNWF[(Data warehouse)]

    GL-->COL
    COL-->KRGE
    COL-->KRBE
    KRGE-->ENR
    ENR-->KEGE
    ENR-->KEBE
    KRBE-->PSRB
    KEGE-->PSEG
    KEBE-->PSEB
    PSRB-->S3RBE
    PSEG-->S3EGE
    PSEB-->S3EBE
    S3RBE-->SNWF
    S3EGE-->SNWF
    S3EBE-->SNWF
```

See [Snowplow technology 101](https://github.com/snowplow/snowplow/#snowplow-technology-101) for Snowplow's own documentation and an overview how collectors and enrichers work.

### Pseudonymization

In contrast to a typical Snowplow pipeline, after enrichment, GitLab Snowplow events go through a [pseudonymization service](https://gitlab.com/gitlab-org/analytics-section/analytics-instrumentation/snowplow-pseudonymization) in the form of an AWS Lambda service before they are stored in S3 storage.

#### Why events need to be pseudonymized

GitLab is bound by its [obligations to community](/handbook/product/analytics-instrumentation-guide/service-usage-data-commitment/)
and by [legal regulations](/handbook/legal/privacy/customer-product-usage-information/) to protect the privacy of its users.

GitLab must provide valuable insights for business decisions, and there is a need for a better understanding of different users' behavior patterns.
The pseudonymization process helps you find a compromise between these two requirements.

Pseudonymization processes personally identifiable information inside a Snowplow event in an irreversible fashion
maintaining dcheterministic output for given input, while masking any relation to that input.

#### How events are pseudonymized

Pseudonymization uses an allowlist that provides privacy by default. Therefore, each
attribute received as part of a Snowplow event is pseudonymized unless the attribute
is an allowed exception.

Pseudonymization is done using the HMAC-SHA256 keyed hash algorithm.
Attributes are combined with a secret salt to replace each identifiable information with a pseudonym.

### S3 bucket data lake to Snowflake

See [Data team's Snowplow Overview](/handbook/business-technology/data-team/platform/snowplow/) for further details how data is ingested into our Snowflake data warehouse.
