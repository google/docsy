---
title: "NS Custom Field guide"
description: "NS Custom Field guide"
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## How to create custom fields in NetSuite

Recording (private due to finance systems information): [https://youtu.be/7QEw0-E4dTQ](https://youtu.be/7QEw0-E4dTQ)

1. Navigate to Customization > Lists Records & Fields > Transaction Body Fields
1. Click New
1. Set fields
    1. Label
    1. ID `The id that's used when interacting through the API`
    1. Owner
    1. Description
    1. Type
    1. Store Value ticked
1. Applies to section, select the entities where this field will be available
1. Display Tab (controls where the field would show in the UI)
    1. Main SubTab
    1. Insert before (pick an existing field)
    1. Default access level `View`
1. You can then navigate to the entity and see if the new field is displaying
