---
title: "Go-To-Market Integrated Environments"
---

## How to use this documentation

This page provides a guide to show how our main GTM SaaS applications and their sandboxes are connected and what the purpose of each integrated environment layer is.

---

## Production

| Support            | E-Commerce                      | Billing          | Sales                 | Marketing          |
|--------------------|---------------------------------|------------------|-----------------------|--------------------|
| Zendesk Production | customers.gitlab.com Production | Zuora Production | Salesforce Production | Marketo Production |

Our production systems are integrated by either stock or internally developed integrations (and see image below) and serve as the template for our other environments to emulate.

Status: Integrated and Running.

![Go-To-Market Production SaaS Environments](/images/sales/gtm-production.png)

## Staging

| Support            | E-Commerce                      | Billing          | Sales                 | Marketing          |
|--------------------|---------------------------------|------------------|-----------------------|--------------------|
| Zendesk "Sandbox" | customers.gitlab.com Staging | Zuora "Central" Sandbox | Salesforce "Staging" Sandbox | Marketo "Sandbox" |

Our Staging environment is designed to emulate production as closely as possible. Changes from the Development environment should be deployed here first for user acceptence testing before being promoted to production.

Status: Currently we are using the Interim setup for both staging and development.

## Development

| Support            | E-Commerce                      | Billing          | Sales                 | Marketing          |
|--------------------|---------------------------------|------------------|-----------------------|--------------------|
| N/A | customers.gitlab.com Engineer Dev Environment | Zuora "apiSandbox2" Sandbox | Salesforce "Sandbox" Sandbox | N/A |

Our integrated development environment is designed for working on projects delivering large functionality changes between our systems. The current use for this setup will be our Zuora conversion to Orders and the Zuora 360 and Zuora CPQ upgrades associated with that.

Status: Currently we are using the Interim setup for both staging and development.

## Interim

| Support            | E-Commerce                      | Billing          | Sales                 | Marketing          |
|--------------------|---------------------------------|------------------|-----------------------|--------------------|
| N/A | customers.gitlab.com Staging | Zuora "apiSandbox1" Sandbox | Salesforce "Sandbox" Sandbox | N/A |

This is our current development environment being used to work on Web Directs send more data to Salesforce. It will be depreciated and repurposed once that work is done.

## Other Development Environments

The Sales Systems team uses the "1 Sandbox Per Engineer" rule for ease and speed of development, this might cause for deployments directly into Staging or doing a full stop off in the Development Environment.
