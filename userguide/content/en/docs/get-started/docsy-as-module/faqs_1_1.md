---
title: FAQs
description: Some frequently asked questions
canonical_path: "/handbook/support/readiness/operations/faqs/"
---

## If we receive any problem in using Zendesk, can we contact Zendesk directly?

Please contact Support-Ops team first. Discuss the problem by asking a question
in channel and tagging @support-ops. It is a high probability that we can help
you resolve the problem at hand. In cases where we cannot and we do need to
contact Zendesk support directly, it is best to have Support-Ops handle that.

## What will happen if Zendesk is down globally?

Zendesk will only go down when the internet is globally effected because they
use Pods for services. This ensures that if a region is facing downtime, Zendesk
can quickly mitigate that while making sure services run smoothly. However, if
you are still facing any problem accessing Zendesk, please contact the
support-ops team. In the case that Zendesk is down globally, we have email
support option available.

## Is there any disaster recovery plan available?

Zendesk keeps the data in backup servers will all due diligence. This ensures
that we can recover data when it is needed. These backups are utilized to
restore Zendesk in the case it fails due to a problem on Zendesk's end.

Also, the support-ops team ensures all triggers, automations, views, macros,
forms, fields, conditions, etc are documented to save the hassle of writing up
everything from scratch.

## Why do we allow users to open support tickets without logging into Zendesk?

According to Lee Matos:

> Circa 2016 we had open Zendesk where we were manually assigning users to manually created orgs.
>
> There was a project that was being created called “middleware” that was going to act as the SSOT of known orgs. It did nothing to solve the customer mapping.
>
> It was in scope creep mode so I explored the offical sfdc<->zd sync. We started with account sync. We were interested in user syncing but our data was a mess.
>
> We ran into problems with org sync. Solved a bunch then some more.
>
> We recreated sfdc sync for the [Global Support instance](/handbook/support/support-ops/responsibilities.html#account---organization-sync-from-salesforce) and [US Federal instance](/handbook/support/support-ops/responsibilities.html#sfdcus-federal-zendesk-sync) and are still just syncing orgs.
>
> There is a push (rightfully so) to lock it down and improve our wall/first time unknown user flow. If someone can get that over the line I think that GitLab support engineering leadership has no good reason to keep it “open access” at the moment and we support changing it. (I'm speaking out of turn — I’m stating this as fact but it’s my opinion.)
