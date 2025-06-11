---
title: Iterable
description: Iterable Overview
twitter_image: /images/tweets/handbook-marketing.png
twitter_site: "@gitlab"
twitter_creator: "@gitlab"
---

## <i class="fab fa-gitlab fa-fw" style="color:rgb(252,109,38); font-size:.85em" aria-hidden="true"></i>

## DRIs

| DRI            | Role            |
| -------------- | --------------- |
| Amy Waller     | Business Owner  |
| Mihai Conteanu | Technical Owner |
| Allie Klatzkin | Campaigns Owner |

## Overview

[Iterable](https://iterable.com/) is a powerful email marketing automation platform that allows us to create, send, and track personalized email campaigns. It provides a user-friendly interface and a wide range of features to help us engage with our customers and users effectively.

## Iterable Journeys

Journeys are a powerful feature that enable us to create complex, multi-step customer engagement campaigns. With Journeys, you can design personalized customer experiences across multiple channels, including email and SMS. Map out customer journeys, set up triggers and conditions, and deliver targeted messages at each step of the customer lifecycle.

**List of journeys implemented:**

| Journey Name   (Folder)       | Link                                                                                    |
| --------------------- | --------------------------------------------------------------------------------------- |
| SaaS Trial Onboarding + Post  | [Link](https://app.iterable.com/workflows/361081/edit?mode=beta&workflowType=Published) |
| Free User + Invited Onboarding| [link](https://app.iterable.com/workflows?folderId=68331&page=1)|

## API Custom Events

Iterable's API is designed to handle large volumes of data and high request rates. It ensures scalability and reliability, allowing us to deliver personalized messages to in-product user segments.

```mermaid
graph LR
  GitLab.com --> CustomersDot
  CustomersDot --> Workato API
  Workato API --> Iterable

```

**SaaS Trials Event**

The SaaS Trials event in Iterable, represents the action of a user signing up for a GitLab SaaS trial. The trigger is sent from CustomersDot to Workato and then to Iterable. Data fields sent over upon a trial sign-up are used to segment users in Journeys.

| Data Fields             |                          | Data Type |
| ----------------------- | ------------------------ | --------- |
| company                 | Fictional Company        | String    |
| companyNamespace        | true                     | Boolean   |
| country                 | United States            | String    |
| employeeBucket          | 1-99                     | String    |
| firstName               | John                     | String    |
| lastName                | Doe                      | String    |
| latest_trial_start_date | 2023-06-11               | Date      |
| signupReason            | I want to explore GitLab | String    |
| state                   | OR                       | String    |
| userRole                | product_designer         | String    |

**SaaS Free Registration**

The SaaS Free registration event in Iterable, represents the action of a user signing up for a free GitLab account. We only capture send this event if the user has chosen to setup their account for a team or company. We are not currently syncing personal signups.

| Data Fields             |                         | Data Type |
| ----------------------- | ----------------------- | --------- |
| company                 | Fictional Company       | String    |
| companyNamespace        | true                    | Boolean   |
| country                 | United States           | String    |
| employeeBucket          | 1-99                    | String    |
| firstName               | John                    | String    |
| lastName                | Doe                     | String    |
| latest_trial_start_date | 2023-06-11              | Date      |
| signupReason            | I want to use GitLab CI | String    |
| state                   | Alabama                 | String    |
| userRole                | other                   | String    |

## Subscription Preferences

Iterable subscriptions are structered in message types and channel, with each individual type having it's own subscription policy. Each template or email is atributed a message type when created and adopts its subscription policy.

**_ NB: Do not use the Marketing Message type as it uses an opt-out policy and will result in the possibility of emailing un-subscribed records _**

Subscription schema in the GitLab instance comproises of the following:

| Message Type      | Channel               | Subscription Policy | Notes                                                     |
| ----------------- | --------------------- | ------------------- | --------------------------------------------------------- |
| GitLab Marketing  | Marketing Channel     | opt-in              | This is the main message type used in templates and email |
| Marketing Message | Marketing Channel     | opt-out             | Default message type, will be deleted                     |
| Transactional     | Transactional Channel | opt-out             |                                                           |

**Unsubscribe Event**
Whenever an `unsubscribe` event occurs in Marketo, an event is sent to Workato and then Iterable to `opt-out` that person if it exists.

## Data Sync

### Hightouch

[Hightouch](/handbook/marketing/marketing-operations/hightouch/) is a data integration platform that specializes in real-time data synchronization, allowing us to leverage the power of Snowflake's data and transfer it to Iterable for personalized and targeted marketing campaigns. It automates the data synchronization process between Snowflake and Iterable, reducing manual effort. Hightouch can handle large datasets and ensure that all data is accurately synced to Iterable, enabling us to scale marketing operations effectively.

Every 24 hours, Iterable is synced with namespace data from Snowflake. Namespace information is stored in a JSON nested object in the `SENSITIVE.POC_PUMP_MARKETING_CONTACT_NAMESPACE_DETAIL` which is then accessed by `Hightouch` to map fields downstream to Iterable and sync events and bulk update information.

**_ NB: Due to storage cost constraints, we are only keeping in sync users whose creation date is two months prior to current day _**

**Namespace information that is currently synced to Iterable:**

| namespace_information     |  example data             |
| ------------------------- | ------------------------- |
| ACTIVE_STAGE_COUNT        | 1                         |
| CREATED_AT                | 2023-06-08 17:31:55.883   |
| CREATOR_USER_ID           | 123456                    |
| CURRENT_MEMBER_COUNT      | 1                         |
| GITLAB_PLAN_IS_PAID       | false                     |
| GITLAB_PLAN_TITLE         | Ultimate Trial            |
| GLM_CONTENT               | default-saas-trial        |
| GLM_SOURCE                | about.gitlab.com/pricing/ |
| IS_ACTIVE_TRIAL           | true                      |
| IS_IMPACTED_BY_USER_LIMIT | false                     |
| IS_NAMESPACE_PQL          | false                     |
| IS_SETUP_FOR_COMPANY      | false                     |
| LIST_OF_STAGES            | create                    |
| NAMESPACE_ID              | 123456                    |
| TRIAL_START_DATE          | 2023-06-08 00:00:00.000   |
| USER_ACCESS_LEVEL         | 50                        |
| USER_ACCESS_LEVEL_NAME    | Owner                     |
| USER_ID                   | 123456                    |
