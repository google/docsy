---
title: Bulk editing SGG values in Zendesk
description: How to find your assigned tickets that aren't in your group and move them
---

## Introduction

The procedure described here was originally used during the global rollout of
Support Global Groups to bring each Support Engineer's tickets into their new
group. It remains useful now for any situation in which there is a need to find
and move any identifiable collection of tickets. For example, a Support
Engineer changing to a new group would find this useful.

## Finding your tickets that aren't in your group

To get a listing in Zendesk of all of your tickets that are not assigned to your
group, the best way is to
[search in Zendesk](/handbook/support/readiness/operations/docs/zendesk/searching/).

### Ready-to-use query links

Click on the appropriate link for your current/new group to run a query that finds all of your tickets *not* in your new group:

- [Baobab](https://gitlab.zendesk.com/agent/search/1?type=ticket&q=assignee%3Ame%20-custom_field_4414446722578%3Aticket_group_baobab%20status%3Cclosed%20-form%3A%22Support%20Ops%22%20-form%3A%22GitLab%20Incidents%22%20-form%3A%22L%26R%22%20-form%3A%22Emergencies%22)
- [Ginkgo](https://gitlab.zendesk.com/agent/search/1?type=ticket&q=assignee%3Ame%20-custom_field_4414446722578%3Aticket_group_ginkgo%20status%3Cclosed%20-form%3A%22Support%20Ops%22%20-form%3A%22GitLab%20Incidents%22%20-form%3A%22L%26R%22%20-form%3A%22Emergencies%22)
- [Kapok](https://gitlab.zendesk.com/agent/search/1?type=ticket&q=assignee%3Ame%20-custom_field_4414446722578%3Aticket_group_kapok%20status%3Cclosed%20-form%3A%22Support%20Ops%22%20-form%3A%22GitLab%20Incidents%22%20-form%3A%22L%26R%22%20-form%3A%22Emergencies%22)
- [Maple](https://gitlab.zendesk.com/agent/search/1?type=ticket&q=assignee%3Ame%20-custom_field_4414446722578%3Aticket_group_maple%20status%3Cclosed%20-form%3A%22Support%20Ops%22%20-form%3A%22GitLab%20Incidents%22%20-form%3A%22L%26R%22%20-form%3A%22Emergencies%22)
- [Pine](https://gitlab.zendesk.com/agent/search/1?type=ticket&q=assignee%3Ame%20-custom_field_4414446722578%3Aticket_group_pine%20status%3Cclosed%20-form%3A%22Support%20Ops%22%20-form%3A%22GitLab%20Incidents%22%20-form%3A%22L%26R%22%20-form%3A%22Emergencies%22)

### Query format

The actual query string looks like this:

```text
assignee:me -custom_field_4414446722578:GROUP_TAG status<closed -form:"Support Ops" -form:"GitLab Incidents" -form:"L&R" -form:"Emergencies"
```

where `GROUP_TAG` is your current group's tag. See
[Zendesk group tasks](#zendesk-group-tags) for the actual values.

As an example, the search query for those in the Maple group is:

```text
assignee:me -custom_field_4414446722578:ticket_group_maple status<closed -form:"Support Ops" -form:"GitLab Incidents" -form:"L&R" -form:"Emergencies"
```

#### Understanding the parts of the query

- `assignee:me` = specifies you are looking for items assigned to you
- `-custom_field_4414446722578:ticket_group_NAME` = specifies you are looking
  for items not assigned to your group
- `status<closed` = specifies you are looking for items that have a status lower
  than closed (new, open, pending, on-hold, solved)
- `-form:"Support Ops"` = specifies you are looking for items where the form is
  not Support Ops
- `-form:"GitLab Incidents"` = specifies you are looking for items where the
  form is not GitLab Incidents
- `-form:"L&R"` = specifies you are looking for items where the form is not L&R
- `-form:"Emergencies"` = specifies you are looking for items where the form is
  not Emergencies

##### Zendesk Group Tags

| Group Name | Tag to use            |
|------------|-----------------------|
| Baobab     | `ticket_group_baobab` |
| Ginkgo     | `ticket_group_ginkgo` |
| Kapok      | `ticket_group_kapok`  |
| Maple      | `ticket_group_maple`  |
| Pine       | `ticket_group_pine`   |

## Bulk editing the SGG value

Once you have the list of tickets, you can use Zendesk's bulk edit feature. To
do this, click the checkbox on the top left side of the search results. It can
be a bit hard to see; look to the left of the ID column. Then, click the
blue `Edit` button on the bottom of the page. Next to the edit button you should see the number of tickets selected.
On the popup modal that appears, locate the SGG ticket field
on the left side (should be towards the top of the list). Click in the dropdown
for it and select your group's name. Next, click the black `Submit` button.
This starts a background job to update the tickets. When the job finishes,
Zendesk displays a notification popup in the top right part of the page.

If there are any issues with the bulk edit, Zendesk will let you know which
tickets were not edited. You should be able to find the problem by editing each
listed file, one at a time. If you are unsure what to do to resolve
the problem, please ask in the
[#support_operations](https://gitlab.slack.com/archives/C018ZGZAMPD) Slack
channel for assistance.

To see this process in action, please watch this video:

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/QzphCSSY_0A" frameborder="0" allowfullscreen="true"> </iframe>
</figure>
