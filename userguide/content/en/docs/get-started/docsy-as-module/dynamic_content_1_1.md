---
title: Dynamic Content
description: Support Operations documentation page for Zendesk dynamic content
canonical_path: "/handbook/support/readiness/operations/docs/zendesk/dynamic_content"
---

## What is Zendesk dynamic content?

As per
[Zendesk](https://support.zendesk.com/hc/en-us/articles/4408882999066-Providing-multiple-language-support-with-dynamic-content):

> Dynamic content is a combination of a default version of the text (typically
> in the same language as your default language) and variants for every other
> language that you support.

### Change management

Keep in mind, all change management should be stemming from an issue, first and
foremost.

#### Creating a dynamic content item

This is completely done via the
[sync repo](https://gitlab.com/gitlab-support-readiness/zendesk-global/dynamic-content)
itself. Simply create the YAML file within the `data` folder. You can use other
dynamic content item files for an example of doing this, but in general the
template is:

```yaml
---
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
- `PLACEHOLDER_ZENDESK_WOULD_USE` is the placeholder value Zendesk would
  generate. This is usually the name in all lowercase with spaces replaced with
  underscores and proceeded by `dc.` (all grouped in double curly brackets). An
  example would be `Preferred Region for Support` becoming
  `{{dc.preferred_region_for_support}}`. If you are unsure of what your
  placeholder would be, a neat trick is to go into the Zendesk instance's
  Sandbox and create the dynamic content item in the admin panel, then look at
  what it generates (make sure if you do this to delete it afterwards).
- `TEXT_TO_USE_FOR_LOCALE` is the text the variant would use for the locale in
  question

#### Deleting a dynamic content item

This is completely done via the
[sync repo](https://gitlab.com/gitlab-support-readiness/zendesk-global/dynamic-content)
itself. Simply delete the YAML file within the `data` folder.

### Source Projects

#### Zendesk Global

- [Sync repo project](https://gitlab.com/gitlab-support-readiness/zendesk-global/dynamic-content)
