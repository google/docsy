---
title: "Workato"
---

## What is Workato?

Workato is an automation platform that enables us to integrate third party apps and automate business workflows that would otherwise require more resource intensive efforts to achieve the same results.

## MOPs managed Workato workflows

### Marketing Data Pump

Process developed in collaboration with Data Engineering and Product teams to deliver information about paid contacts and Product Qualified Leads to Marketo and Salesforce.

It runs once a day based on an automated file that is delivered in an S3 bucket, picked up by Workato and then sent to Marketo.

### SaaS Trials and Registrations

Process developed to get lead data into Marketo and SFDC when a new trial is started or a free SaaS registration is completed on gitlab.com.

This is also being worked on to send to [Iterable](/handbook/marketing/marketing-operations/iterable/#overview).

### Marketo Form to SFDC case

Process developed at the request of the Sales team to set-up a web form that, once filled, creates a case in Salesforce. This is meant for existing SMB accounts.

### List import Bot

This is an automated workflow for list imports in Marketo. Refer to [handbook page](/handbook/marketing/marketing-operations/automated-list-import/) for more information.

### Email domain

Process developed to extract the domain from an email address and populate the field `Email Domain` in Marketo.
