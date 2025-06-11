---
title: Dynamic content
description: Operations workflow page for Zendesk dynamic content
canonical_path: "/handbook/security/customer-support-operations/workflows/zendesk/dynamic-content"
---

{{% alert title="Note" color="primary" %}}

All dynamic content changes are handled via a standard deployment. Changes here deploy to both the production and sandbox instance(s).

{{% /alert %}}

{{% alert title="Note" color="primary" %}}

This only applies to Zendesk Global, as Zendesk US Government is English only.

{{% /alert %}}

## Creating dynamic content

For these, you will need to create a corresponding dynamic content file in the sync repo.

You should also do this in a way that creates a MR. Said MR should always be peer reviewed before merging (the MR should enforce this).

You can use other dynamic content item files for an example of doing this, but in general the template is:

```yaml
---
name: 'NAME_OF_ITEM'
placeholder: 'PLACEHOLDER_ZENDESK_WOULD_USE'
default_locale_id: 1 # English
variants:
- content: 'TEXT_TO_USE_FOR_LOCALE'
  locale_id: 1 # English
  active: true
  default: true
```

Where:

- `NAME_OF_ITEM` is the name of the dynamic content item
- `PLACEHOLDER_ZENDESK_WOULD_USE` is the placeholder value Zendesk would generate. This is usually the name in all lowercase with spaces replaced with underscores and proceeded by `dc.` (all grouped in double curly brackets). An example would be `Preferred Region for Support` becoming `{{dc.preferred_region_for_support}}`. If you are unsure of what your placeholder would be, a neat trick is to go into the Zendesk instance's Sandbox and create the dynamic content item in the admin panel, then look at what it generates (make sure if you do this to delete it afterwards).
- `TEXT_TO_USE_FOR_LOCALE` is the text the variant would use for the locale in question

## Editing dynamic content

For these, you will need to locate the corresponding dynamic content file in the sync repo and make changes to it.

You should also do this in a way that creates a MR. Said MR should always be peer reviewed before merging (the MR should enforce this).

## Deleting dynamic content

{{% alert title="Note" color="primary" %}}

Be very cautious on these. You can break a considerable amount of things by deleting dynamic content that is still actually in use.

{{% /alert %}}

To fully delete it, you must delete it from both the sync repo and the Zendesk instance(s).

For information on deleting it from Zendesk, see our [dynamic content documentation](../../docs/zendesk/dynamic-content).

For the sync repo, ou will create a MR to delete the file (but only after deleting it from the Zendesk instance(s)). Said MR should always be peer reviewed before merging (the MR should enforce this).

## Getting translations

{{% alert title="Note" color="primary" %}}

This makes the summption you're setup aligns with our [recommended setup](../../docs/recommended-setup)

{{% /alert %}}

Because this involves translations, which usually involve teams other than our own, we use a dynamically generated google sheet to assist with translations: [Zendesk Global Dynamic Content List](https://docs.google.com/spreadsheets/d/1ah_9iEMwodDBrmVDEpWkigWiz5CWtD0SWwubdbt72zo/edit?usp=sharing) (internal only)

When you need translations for items, you will first run the `populate_gsheet` script (via CLI), like so:

```bash
SPREADSHEET_ID='1ah_9iEMwodDBrmVDEpWkigWiz5CWtD0SWwubdbt72zo' ./bin/populate_gsheet
```

You will then ask the translators to use the sheet to provide us the translations.

Once thhe translators are done, you can then pull that data into your local repo using the `pull_from_gsheet` script, like so:

```bash
SPREADSHEET_ID='1ah_9iEMwodDBrmVDEpWkigWiz5CWtD0SWwubdbt72zo' ./bin/pull_from_gsheet
```

This will edit your local repo with the changes. You can use this to then generate a MR.

## Exception deployment

To perform an exception deployment for dynamic content, navigate to the dynamic content project in question, go to the scheduled pipelines page, and click the play button. This will trigger a sync job for dynamic content.

## Repo links

- [Zendesk Global sync repo](https://gitlab.com/gitlab-support-readiness/zendesk-global/dynamic-content)
