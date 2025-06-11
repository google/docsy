---
title: "Dynamic Quote Templates"
description: "This page outlines the Dynamic Quote Templates Automation in Salesforce that supported the Super Sonics project. It includes both information for the end user, answers frequently asked questions as well as highlights the location of the related technical logic in the code."
---

## Related Handbook Sections

- [Internal Team Handbook](https://gitlab-com.gitlab.io/licensing/)

## Dynamic Quote Templates Automation

The Dynamic Quote Templates Automation, also known as Super Sonics, is a controlled flow that combines user input, automatically detected qualities of the quote and historical selections in order to automatically produce quote templates with the desired legal language on them as well as syncing with Zuora in order to control the actual behavior of the system. There are a number of features that can either be selected or are automatically added. For more information on these features please see our internal handbook here - (link coming soon).

## FAQ

- How do I add language to the quote?
  - There are specific fields on the quote layout, that either begin with `[Language]` or `[Cloud Lic]` that a user can manually select to have language added to the quote

- I clicked one of the `[Language]`/`[Cloud Lic]` checkboxes and I can't produce the quote
  - It is possible that you have selected a combination of quote language and line items that are not permitted. In this case you may either receive an error or you may see that approvals are required for your quote.
  - If you receive an error please review the error language and attempt to resolve by deselecting the mentioned checkboxes as needed.
  - If approvals are required you can review the approvals that are needed in the quote approvals section.

- I need language added to the template that the automation will not permit me to add - how do I get it added?
  - In the event that you need language added to the quote that the system is not set up to support please reach out to [Sales Support](/handbook/sales/field-operations/sales-operations/) for manual assistance. They are able to review and approve these requests as well as assist in overriding the system to produce the required quotes.

- There is language appearing on the quote that I didn't select - how/why?
  - There are a number of scenarios that SFDC automatically scans for on a quote. For example we scan for MSA's on Quotes. If it's detected that an MSA is associated with a quote we will automatically put MSA language onto the quote.
  - If you believe this automatically added language was added to your quote incorrectly please reach out to [Sales Support](/handbook/sales/field-operations/sales-operations/) for additional help

- How do I request help if I still have questions?
  - If you still have questions or are encountering errors you can reach out to [Sales Support](/handbook/sales/field-operations/sales-operations/) for additional help

## Logic Locations

- `ZuoraQuoteClass`
  - `quoteTemplatePlinkoBoard`
- `ZuoraQuoteTest`
  - `quoteTemplatePlinkoBoard`
  - `quoteTemplatePlinkoBoardHighlightedSkus`
  - `quoteTemplatePlinkoBoardExistingSub`
  - `quoteTemplatePlinkoBoardExistingMSA`
  - `quoteTemplatePlinkoBoardGCP`
- `ZuoraQuoteTrigger`
