---
title: Liquid language
description: Support Operations documentation page for the Zendesk liquid language
canonical_path: "/handbook/support/readiness/operations/docs/zendesk/liquid"
---


## What is the liquid language

Liquid is an [open-source](https://github.com/Shopify/liquid) template language
created by Shopify and written in ruby. It is used to allow for more dynamic
content on themes, pages, etc.

## How we use liquid in Zendesk

In Zendesk, we utilize liquid most commonly in triggers, automations, and
extensions. We utilize this to allow for more dynamic messaging (comments, URLs,
etc.). It can take time to learn how to fully utilize the liquid language,
especially as there is a lot to it and it gets added to frequently.

## Variable interpolation

To insert a value into a text/output, you would use double curly bracks around
the name of the variable/function/value.

As an example, to output a ticket requester's name, you might do something like
`Greetings {{ticket.requester.name}}`.

You can also use functions in this manner. As an example, if you wanted to put
your role into a message, but ensure it was capitalized, you might do something
like `My role is {{current_user.role | capitalize }}`.

## Code blocks

To use code blocks (common for loops, assignment, conditionals, etc.), you would
start the line with `{%` and end it with `%}`

As an example, if you wanted to start a loop on ticket comments, you might do
something like `{% for comment in ticket.comments %}`.

## Common variables

| Object Type  | Variable                                  | Description |
|--------------|-------------------------------------------|-------------|
| Current User | `current_user`                            | A user object referring to the current user |
| User         | `name`                                    | The user's full name |
| User         | `first_name`                              | The user's first name |
| User         | `last_name`                               | The user's last name |
| User         | `email`                                   | The user's email address |
| User         | `details`                                 | The user's details text box |
| User         | `notes`                                   | The user's notes text box |
| User         | `id`                                      | The user's Zendesk ID |
| User         | `organization`                            | The user's organization object |
| User         | `custom_fields.gitlab_user_id`            | The user's GitLab user ID (a custom user field) |
| User         | `custom_fields.gitlab_username`           | The user's GitLab username (a custom user field) |
| User         | `custom_fields.xxxxx`                     | The user's value for a user field named xxxxx |
| Organization | `id`                                      | The organization's Zendesk ID |
| Organization | `name`                                    | The organization's name |
| Organization | `details`                                 | The organization's details text box |
| Organization | `notes`                                   | The organization's notes text box |
| Organization | `custom_fields.saleforce_id`              | The Salesforce ID for an organization |
| Organization | `custom_fields.arr`                       | The ARR for an organization |
| Organization | `custom_fields.technical_account_manager` | The CSM for an organization |
| Organization | `custom_fields.account_owner`             | The AM for an organization |
| Organization | `custom_fields.org_region.title`          | The organization's region |
| Organization | `custom_fields.support_level.title`       | The organization's support level |
| Organization | `custom_fields.xxxxx`                     | The organization's value for a organization field named xxxxx |
| Agent        | `name`                                    | The agent's name |
| Agent        | `role`                                    | The agent's role |
| Agent        | `email`                                   | The agent's email |
| Agent        | `signature`                               | The agent's signature |
| Ticket       | `assignee`                                | The ticket's assignee (a user object) |
| Ticket       | `ccs`                                     | An array of users who are CC'd on the ticket |
| Ticket       | `due_date`                                | The ticket's due date (date only) |
| Ticket       | `due_date_with_timestamp`                 | The ticket's due date (with timestamp) |
| Ticket       | `id`                                      | The ticket's Zendesk ID |
| Ticket       | `in_business_hours`                       | A boolean if the ticket is currently in it's schedules hours |
| Ticket       | `link`                                    | The ticket's URL with the HTTP protocol |
| Ticket       | `requester`                               | The requester of a ticket (user object) |
| Ticket       | `organization`                            | The organization of a ticket (organization object) |
| Ticket       | `status`                                  | The ticket's status |
| Ticket       | `ticket_field_xxxxxx`                     | The ticket's API value for ticket field with ID of xxxxxx |
| Ticket       | `ticket_field_option_title_xxxxxx`        | The ticket's dropdown title value for ticket field with ID of xxxxxx |
| Ticket       | `ticket_field_360019949920`               | The ticket's unauthorized user field value (Zendesk Global) |
| Ticket       | `ticket_field_360017383799`               | The ticket's due date notes (Zendesk Global) |
| Ticket       | `ticket_field_360012194220`               | The ticket's partner troubleshooting value (Zendesk Global) |
| Ticket       | `ticket_field_360020735339`               | The ticket's request for CCs value (Zendesk Global) |
| Ticket       | `ticket_field_360012194200`               | The ticket's Organization email (partners) value (Zendesk Global) |
| Ticket       | `ticket_field_360018253094`               | The ticket's preferred region for support value (Zendesk Global) |
| Ticket       | `ticket_form`                             | The ticket's form |
| Ticket       | `url`                                     | The ticket's URL without the HTTP protocol |
| Ticket       | `title`                                   | The ticket's subject |
| Ticket       | `comments`                                | An array of the ticket's comments |
| Ticket       | `public_comments`                         | An array of the ticket's public comments |
| Satisfaction | `current_rating`                          | The current satisfaction rating of a ticket |
| Satisfaction | `rating_section`                          | The formatted block sent to user's request a satisfaction survey |
| Satisfaction | `current_comment`                         | The current satisfaction comment of a ticket |

There are
[many more](https://support.zendesk.com/hc/en-us/articles/203662156-Zendesk-Support-placeholders-reference)
that can be used, these are by far just the most common used at GitLab.

## Common functions

| Function                                                           | Description                                                                                               |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| [slice](https://shopify.github.io/liquid/filters/slice/)           | Returns a substring                                                                                       |
| [split](https://shopify.github.io/liquid/filters/split/)           | Divides a string into an array based on a separator                                                       |
| [url_encode](https://shopify.github.io/liquid/filters/url_encode/) | Converts a string into URL encoded characters                                                             |
| [url_decode](https://shopify.github.io/liquid/filters/url_decode/) | Decodes a strubg tgat was encoded by url_encode                                                           |
| [first](https://shopify.github.io/liquid/filters/first/)           | The first item in an array                                                                                |
| [last](https://shopify.github.io/liquid/filters/last/)             | The last item in an array                                                                                 |
| [join](https://shopify.github.io/liquid/filters/join/)             | Combines items in an array                                                                                |
| [capitalize](https://shopify.github.io/liquid/filters/capitalize/) | Sets the first character in the string to uppercase                                                       |
| [upcase](https://shopify.github.io/liquid/filters/upcase/)         | Sets all characters in the string to uppercase                                                            |
| [downcase](https://shopify.github.io/liquid/filters/downcase/)     | Sets all characters in the string to lowercase                                                            |
| [size](https://shopify.github.io/liquid/filters/size/)             | Returns the size of the object. If a string, it is number of characters; if an array, the number of items |
| [lstrip](https://shopify.github.io/liquid/filters/lstrip/)         | Removes whitespace from the left of a string                                                              |
| [rstrip](https://shopify.github.io/liquid/filters/rstrip/)         | Removes whitespace from the right of a string                                                             |
| [strip](https://shopify.github.io/liquid/filters/strip/)           | Removes whitespace from both the left and right of a string                                               |
| [remove](https://shopify.github.io/liquid/filters/remove/)         | Removes items in a string                                                                                 |
| [replace](https://shopify.github.io/liquid/filters/replace/)       | Replaces items in a string                                                                                |
| [sort](https://shopify.github.io/liquid/filters/sort/)             | Sorts items in an array alphabetically                                                                    |
| [truncate](https://shopify.github.io/liquid/filters/truncate/)     | Shortens a string                                                                                         |
| [uniq](https://shopify.github.io/liquid/filters/uniq/)             | Removes duplicates items from an array                                                                    |

## Common tags

| Tag      | Description |
|----------|-------------|
| assign   | Assigns a value to a variable |
| blank    | The same as saying "nil" or "null" |
| capture  | Captures text into a variable |
| break    | Exit a loop |
| continue | Skip the remaining code in a loop and start the next iteration |

## Conditionals

| Conditional               | Operators available |
|---------------------------|---------------------|
| if..elsif..else..endif    | `==` `!=` `<>` `<` `<=` `>` `>=` `contains` `and` `or` |
| unless..endless           | `==` `!=` `<>` `<` `<=` `>` `>=` `contains` `and` `or` |
| case..when..else..endcase | N/A |

## Loops

| Loop | Syntax |
|------|--------|
| for | `for x in y`, `for x in y limit:5`, `for x in y offset:3`, `for x in y reversed` |
| cycle | `cycle "apple", "banana", "cherry"` |

### Examples

#### Create documentation issue trigger

We use this in a trigger to determine the author, title, and description of the
most recent comment to create a documentation issue.

```string
{% for comment in ticket.comments limit:1 offset:0 %}
  {% assign author = comment.author.custom_fields.gitlab_user_id %}
  {% assign lines = comment | url_encode | split: "%0A" %}
  {% for line in lines %}
    {% assign first_five = line | slice: 0,5 %}
    {% if first_five == 'Title' %}
      {% assign title = line | url_decode | split: ': ' | last %}
    {% endif %}
  {% endfor %}
  {% assign description = comment | split: 'Description:' | last | join: '\n' %}
{% endfor %}
```

Line by line breakdown:

1. Start a `for` loop on the ticket comments, setting a limit of 1 iteration
   (meaning only grab the most recent one)
1. Assign a value to the variable `author`
   - The value should be the comment's author GitLab user ID (a custom user
     field)
1. Assign a value to the variable `lines`
   - This passes the `comment` into the function url_encode, to encode the
     string into a URL safe format
   - This passed the url_encoded string into the split function, which turns it
     into an array split by the separate `%0A`
1. Start a `for` loop on the array stored in the `lines` variable
1. Assign a value to the variable `first_five`
   - This passes `line` into the slice function, return the first 5 characters
1. Declare an `if` block, with the condition being the value of `first_five` is
   `Title`
1. Assign a value to the variable `title`
   - This passes the `line` into the function url_decode, to undo what
     url_encode previously did
   - This is passed into the split function, which turns it into an array split
     by the separator `:`
   - This is passed into the last function, to return the last item in the array
1. Ends the `if` block
1. Ends for second `for` loop
1. Assign a value to the variable `description`
   - This passes the `comment` into the split function, which turns it into an
     array split by the separator 'Description:'
   - This is passed into the last function, to return the last item in the array
   - This is passed into the join function, to join the items using the
     separator `\n`
1. Ends for the first `for` loop

#### New ticket confirmation email trigger

We use this to determine is a block of text should display based on if the
ticket is currently within business hours or not.

```string
{% if ticket.in_business_hours == 'false' %}
  <li>You indicated in this ticket, #{{ticket.id}}, a "Preferred Region for Support." The current time is outside of that region's standard business hours. You can rest assured that this ticket will be addressed by the next available engineer in the selected region. It is important that you understand when you may expect a reply regarding this case. Please see the linked handbook section for more information regarding the <a href='https://about.gitlab.com/support/#effect-on-support-hours-if-a-preferred-region-for-support-is-chosen' target='_blank'>effect of using Preferred Region</a>.<br />During the course of this ticket if you require assistance outside of the selected region's standard business hours please feel free to reply asking one of our support engineers to set this ticket's preferred region to "All regions".</li>
{% endif %}
```

Line by line breakdown:

1. Declare an `if` block, with the condition being if the ticket is not within
   business hours
1. Display a block of text
   - This inserts the ticket's ID using a liquid variable via `{{ticket.id}}`
1. Ends the `if` block

#### SSAT Issue Creation trigger

We use this as part of the triggers that create issues based on SSAT ratings
customers leave us. This is used to determine the form the ticket is using and
set a variable to be used containing the GitLab issue tag that corresponds to
the ticket form.

```string
{% assign form = ticket.ticket_form %}

{% if form == 'GitLab.com User Accounts and Login Issues' %}
  {% assign form = 'form::GitLab.com' %}
{% elsif form == 'Support for GitLab.com' %}
  {% assign form = 'form::GitLab.com' %}
{% elsif form == 'Support for a self-managed GitLab instance' %}
  {% assign form = 'form::Self-managed' %}
{% elsif form == 'Licensing and Renewals Problems' %}
  {% assign form = 'form::Upgrades & Renewals' %}
{% elsif form == 'Contact the Security team' %}
  {% assign form = 'form::Security' %}
{% elsif form == 'Other Request' %}
  {% assign form = 'form::Other' %}
{% else %}
  {% assign form = 'form::GitLab Community Edition' %}
{% endif %}
```

Line by line breakdown:

1. Assign a value to the variable `form`
   - The value should be the ticket's form
1. A blank line for spacing (not required, just makes it look nicer)
1. Declare an `if` block, with the condition being if the value of `form` is
   `GitLab.com User Accounts and Login Issues`
1. Assign a value to the variable `form`
1. Declare an `elsif` block, with the condition being if the value of `form` is
   `Support for GitLab.com`
1. Assign a value to the variable `form`
1. Declare an `elsif` block, with the condition being if the value of `form` is
   `Support for a self-managed GitLab instance`
1. Assign a value to the variable `form`
1. Declare an `elsif` block, with the condition being if the value of `form` is
   `Licensing and Renewals Problems`
1. Assign a value to the variable `form`
1. Declare an `elsif` block, with the condition being if the value of `form` is
   `Contact the Security team`
1. Assign a value to the variable `form`
1. Declare an `elsif` block, with the condition being if the value of `form` is
   `Other Request`
1. Assign a value to the variable `form`
1. Declare an `else` block
1. Assign a value to the variable `form`
1. Ends the `if` block

## Useful links

- [Liquid GitHub repo](https://github.com/Shopify/liquid)
- [Liquid documentation](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers)
- [Zendesk placeholders reference](https://support.zendesk.com/hc/en-us/articles/203662156-Zendesk-Support-placeholders-reference)
