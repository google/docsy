---

title: "GCP CUD"
description: "GCP Committed Use Discounts"
---










---

### What are Committed Use Discounts in GCP?

Google Committed Use Discounts is a way to reduce your compute rate by committing to a set amount of servers of a certain type and in a certain region for a period of time (1 year or 3 year). You will pay this cost whether you use the servers or not, but at a significantly discounted rate compared to the on-demand server rate. This is the equivalent of reserved instances or compute savings plan in AWS.

- [CUD Description](https://cloud.google.com/compute/docs/instances/signing-up-committed-use-discounts)
- [CUD Restrictions](https://cloud.google.com/compute/docs/instances/signing-up-committed-use-discounts#restrictions)

#### CUD Dimensions

We can share CUD across projects, but the dimensions CUD are split across are listed below.

- Region
- Machine Type
- Cost Type (CPU vs RAM)

### CUD Tracking

- Overview of our current CUD can now be viewed in [Sisense](https://app.periscopedata.com/app/gitlab/848796/WIP:-GCP-CUD-Overview)

- In Infra, we have a PI to cover 80% or more of our total eligible compute usage with [CUD](/handbook/engineering/infrastructure/performance-indicators/#gcp-cud-coverage-)

### GCP CUD Purchase Approval Process

#### 1. Fill out [CUD Analysis Template](https://docs.google.com/spreadsheets/d/1yAIpX875Mjcq-DfuyFi4C-y5FaWGoAvoHmW6qHj9Rlc) with relevant details for new request

CUD Analysis should assume the other commitments do not end. CUD renewals should be looked at in a separate analysis so there is no confusion of CUD that cover new and existing covered usage.

#### 2. Fill out New GCP CUD issue template in Finance

Include and ping any engineering manager who will be significantly impacted by the change so they can confirm they do not expect major changes in their usage for the term of the commit. Include the spreadsheet from step 1 in the issue.

The template should include the commitment details, important high level financial details, and the engineering details about which services are most affected by the commitment.

Before the commitment is considered, the infrastructure analyst should talk with the teams that use the majority of the usage that is being committed to make sure there aren't any major changes expected during the term of the commitment.
Those teams should be cc'ed in the issue and if they have any concerns voice them at that time.

Example Issue: https://gitlab.com/gitlab-com/Finance-Division/finance/-/issues/4010

#### 3. Once approved, execute purchase

The infra analyst should make sure there are enough Committed CPU Quota to meet the request and execute this purchase in Billing-Tools GCP Project.

#### 4. Add the commitment to CUD commitments [master spreadsheet](https://docs.google.com/spreadsheets/d/1qwsrRidYsYgoEIbCA6VDhdZW_P6ljeYcLMcja2bhCtc)

#### 5. Reservation Configuration

Reservations for specific node type are configured in our
[gitlab-com-infrastructure terraform repository](https://ops.gitlab.net/gitlab-com/gitlab-com-infrastructure/-/blob/master/environments/gprd/gcp-reservations.tf).
This must be updated to ensure efficient utilization of our CUD's, along with
the instance choice being used in our infrastructure.

#### 6. Follow-Up

If a team is planning on making a major change to their infrastructure that would affect the commit during the term, they should check with the infrastructure analyst to assess the impact first.
