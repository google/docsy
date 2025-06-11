---
title: API
description: Support Operations documentation page for the Zendesk API
canonical_path: "/handbook/support/readiness/operations/docs/zendesk/api"
---

## What is the Zendesk API

The
[Zendesk Support API](https://developer.zendesk.com/api-reference/ticketing/introduction/)
is a collection of Zendesk endpoints you can use to get various information or
do various tasks. It is quite robust and something we use from time to time.

## What are Zendesk API tokens

Zendesk API tokens are used in authentication for Zendesk API requests. These
tokens are always at the administrator level and cannot be issued at lower
permission/role levels. As such, you should always use caution in using and
issuing these tokens.

## How to create a Zendesk API token

**Note**: As all API tokens are issues at the admin level, you need to ensure
you follow proper [token issuing process](#token-issuing-process) and
[API token standards](#api-token-standards).

To create an API token in Zendesk, you first need to go to the Admin Center
([Zendesk Global](https://gitlab.zendesk.com/admin/) /
[Zendesk US Federal](https://gitlab-federal-support.zendesk.com/admin/)). From
there, you need to go to the API page (Apps and integrations > APIs > Zendesk
API).

From here, click the white `Add API token` button. You will then enter a
description, copy the token it generated, and click the blue `Save` button.

## How to edit a Zendesk API token

**Note**: You can only edit a token's description. If you need the token itself,
you will have to delete the token and re-create it.

To edit an API token in Zendesk, you first need to go to the Admin Center
([Zendesk Global](https://gitlab.zendesk.com/admin/) /
[Zendesk US Federal](https://gitlab-federal-support.zendesk.com/admin/)). From
there, you need to go to the API page (Apps and integrations > APIs > Zendesk
API).

From here, locate the token you wish to edit and click on it. From there, edit
the description. Once done, click the blue `Save` button.

## How to delete a Zendesk API token

To delete an API token in Zendesk, you first need to go to the Admin Center
([Zendesk Global](https://gitlab.zendesk.com/admin/) /
[Zendesk US Federal](https://gitlab-federal-support.zendesk.com/admin/)). From
there, you need to go to the API page (Apps and integrations > APIs > Zendesk
API).

From here, locate the token you wish to edit and click on it. From here, click
the red `Delete` link in the top-right of the token box. A pop-up will appear
asking you to confirm the deletion. Click the blue `OK` button to do so.

## API token standards

To ensure all API tokens we utilize are both consistent in nature and
transparent in their actions, we strive to meet some standards on all API
tokens we work with.

### Naming standards

For all API tokens not tied to Zendesk targets or Support Operations team
members, you need to use the format of:

```string
name_of_person - request_link - expiration_date
```

Where `name_of_person` is the person the token is for, `request_link` is the
link to the issue requesting the token, and `expiration_date` is the date the
token should be removed.

For all API tokens for Zendesk targets, the format should be:

```string
Target - name_of_target
```

Where `name_of_target` is the target's name in Zendesk.

For all API tokens issues to Support Operations team members, the format should
just be your name and use case. An example would be `Jason Colyer - personal` or
`Jason Colyer - 1-1 generator`.

## Seeing token usage

### Via tokens page

To see when a token was last used, you can go to the tokens page and locate the
token in question. To the right of the description is a string detailing the
last use of the token.

### Via activity page

To see API usage in respect to the whole Zendesk instance, you'll want to go to
the API page in Zendesk and click the `Activity` tab on the top part of the
page. Here you can see our global API usage and the number of uses for the top
sources.

## Token issuing process

**Note**: API tokens are **solely** issued in cases where `admin` level
privileges are required. If they are not required, the requester should be
directed to use
[basic authentication](https://developer.zendesk.com/api-reference/ticketing/introduction/#basic-authentication)
instead.

All requests for an API token should be done via a
[access request issue](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=API_Token_Request).
There are two exceptions to this:

- API tokens for Support Operations team members personal use
- API tokens for Support Operations scripts/automations/etc.

Once the requester's manager has approved the request, a Support Operations
Manager is required for this process, as they will need to approve the token
generation. Within the request, there should be details on the purpose of the
token and when the token can be removed. Without these details, the request
should be denied and closed out.

If the token is needed (meaning this requires `admin` level privileges), the
Support Operations Manager will then create the token in the Zendesk instance.
The token itself will be sent to the requester via Slack (in a DM).

The Support Operations Manager should then create a calendar event on the
expiration date to remind them to delete the token. Should an extension be
needed, a new access request issue will be required. The original token will
still be deleted and a new one re-issued.

### How to authenticate to the Zendesk API

#### Basic authentication

To authenticate using basic authentication, you'll need to know your username
(email) and password for your Zendesk account. With those in hand, you can
either use those directly or encode the string into base64 (and use it in the
headers).

Example of using it raw:

```bash
curl https://gitlab.zendesk.com/api/v2/users.json \
  -u jcolyer@gitlab.com:my_password
```

Example of using it via headers

```bash
echo 'jcolyer@gitlab.com:my_password' | base64
amNvbHllckBnaXRsYWIuY29tOm15X3Bhc3N3b3JkCg==

curl https://gitlab.zendesk.com/api/v2/users.json \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tOm15X3Bhc3N3b3JkCg=="
```

#### API token authentication

To authenticate via an API token, you'll need to know your username and the API
tokenh in question. With those in hadn, you can either use those directly or
encode the string into base64 (and use it in the headers). When using an API
token, you must add `/token` after your username.

```bash
curl https://gitlab.zendesk.com/api/v2/users.json \
  -u jcolyer@gitlab.com/token:api_token
```

Example of using it via headers

```bash
echo 'jcolyer@gitlab.com/token:api_token' | base64
amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo=

curl https://gitlab.zendesk.com/api/v2/users.json \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo="
```

If you've followed the
[recommended setup](/handbook/support/readiness/operations/recommended_setup/)
and stored your credentials in environment variables, the call will be
simplified to

```bash
curl -u $ZD_USERNAME/token:$ZD_TOKEN "$ZD_URL/users.json"
```

#### Oauth access token authentication

To use an Oauth access token, you'd first need to create an Oauth app in
Zendesk (see
[Zendesk docs](https://support.zendesk.com/hc/en-us/articles/203663836-Using-OAuth-authentication-with-your-application)
for more information). With the access token in hand, you would pass this into
the headers.

Example of using it via headers

```bash
curl https://gitlab.zendesk.com/api/v2/users.json \
  -H "Authorization: Bearer gErypPlm4dOVgGRvA1ZzMH5MQ3nLo8bo"
```

## Common libraries

The most common library we use for the Zendesk Support API is the
[zendesk_api_client gem](https://github.com/zendesk/zendesk_api_client_rb).
This ruby gem is quite powerful and acts as a nice HTTP library for interacting
with the Zendesk Support API.

### Authenitcation with the ruby gem

To authenticate with the ruby gem, you will need to setup the client itself so
you can call upon it.

For authentication via password:

```ruby
require 'zendesk_api'

client = ZendeskAPI::Client.new do |config|
  config.url = ZENDESK_URL/api/v2
  config.username = 'YOUR_EMAIL
  config.password = 'YOUR_PASSWORD'
end
```

For authentication via API token:

```ruby
require 'zendesk_api'

client = ZendeskAPI::Client.new do |config|
  config.url = ZENDESK_URL/api/v2
  config.username = 'YOUR_EMAIL
  config.token = 'API_TOKEN'
end
```

To tell the client to retry connections/requests when an API limit error
occurs, you can use `config.retry = true` in the above configuration
block.

To have the gem not verbosely output warnings, you can use
`config.logger = false` in the above configuration block.

## How to use the Zendesk API

**Note**: This focuses solely on the Zendesk API via curl. For more information
on using a library, check out the corresponding library's documentation.

To get started, you would need to know the endpoint you wish to use. Generally
speaking, the most common ones you might use for quick actions are:

- [Zendesk Support API Tickets endpoints](https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/)
- [Zendesk Support API Users endpoints](https://developer.zendesk.com/api-reference/ticketing/users/users/)
- [Zendesk Support API Organizations endpoints](https://developer.zendesk.com/api-reference/ticketing/organizations/organizations/)

For more administrative tasks, the common ones you might use are:

- [Zendesk Support API Ticket Forms endpoints](https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_forms/)
- [Zendesk Support API Ticket Fields endpoints](https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_fields/)
- [Zendesk Support API Views endpoints](https://developer.zendesk.com/api-reference/ticketing/business-rules/views/)
- [Zendesk Support API Triggers endpoints](https://developer.zendesk.com/api-reference/ticketing/business-rules/triggers/)
- [Zendesk Support API Macros endpoints](https://developer.zendesk.com/api-reference/ticketing/business-rules/macros/)
- [Zendesk Support API Automations endpoints](https://developer.zendesk.com/api-reference/ticketing/business-rules/automations/)

Once you have determined what you wish to do, go to the corresponding API
endpoint documentation and make note of:

- The request type
  - GET
  - POST
  - PUT
  - DELETE
- The endpoint URL
- Any required parameters

From there, you will craft a curl command in the format of:

```bash
curl ZENDESK_URL/api/v2/ENDPOINT \
  -X REQUEST_TYPE \
  -H HEADER_INFO \
  -u AUTHENTICATION \
  -d DATA_TO_USE
```

Where:

- `ZENDESK_URL` is the URL of the Zendesk instance
- `ENDPOINT` is the endpoint to use
- `-X REQUEST_TYPE` is the request type from the documentation (not needed if
  making a GET request)
- `-H HEADER_INFO` is any needed header information (not always needed)
- `-u AUTHENTICATION` is the user/pass or user/token combo (not needed if using
  header based authentication)
- `-d DATE_TO_USE` is the data to send with the request (not always needed)

As an example, if you wanted to get the details for automation `12345`, your
curl command might look like:

```bash
curl https://gitlab.zendesk.com/api/v2/automations/12345 \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo="
```

Likewise, if you wanted to update automation `12345` to set `active` to false
(i.e. deactivate it), your curl command might look like:

```bash
curl https://gitlab.zendesk.com/api/v2/automations/12345 \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo=" \
  -H "Content-Type: application/json" \
  -X PUT \
  -d '{"automation": {"active": false}}'
```

If we wanted to full on delete automation `12345`, your curl command might look
like:

```bash
curl https://gitlab.zendesk.com/api/v2/automations/12345 \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo=" \
  -H "Content-Type: application/json" \
  -X DELETE
```

### Common use cases

For all examples:

- `12345` refers to the items ID number

#### Automations

##### List all

```bash
curl https://gitlab.zendesk.com/api/v2/automations \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo="
```

##### Show details

```bash
curl https://gitlab.zendesk.com/api/v2/automations/12345 \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo="
```

##### Deactivate

```bash
curl https://gitlab.zendesk.com/api/v2/automations/12345 \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo=" \
  -H "Content-Type: application/json" \
  -X PUT \
  -d '{"automation": {"active": false}}'
```

#### Macros

##### List all

```bash
curl https://gitlab.zendesk.com/api/v2/macros \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo="
```

##### Show details

```bash
curl https://gitlab.zendesk.com/api/v2/macros/12345 \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo="
```

##### Deactivate

```bash
curl https://gitlab.zendesk.com/api/v2/macros/12345 \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo=" \
  -H "Content-Type: application/json" \
  -X PUT \
  -d '{"macro": {"active": false}}'
```

#### SLA Policies

##### List all

```bash
curl https://gitlab.zendesk.com/api/v2/slas/policies \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo="
```

##### Show details

```bash
curl https://gitlab.zendesk.com/api/v2/slas/policies/12345 \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo="
```

#### Tickets

##### List all

```bash
curl https://gitlab.zendesk.com/api/v2/tickets \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo="
```

##### Show details

```bash
curl https://gitlab.zendesk.com/api/v2/tickets/12345 \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo="
```

##### Change status to closed

```bash
curl https://gitlab.zendesk.com/api/v2/tickets/12345 \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo=" \
  -H "Content-Type: application/json" \
  -X PUT \
  -d '{"ticket": {"status": "closed"}}'
```

#### Triggers

##### List all

```bash
curl https://gitlab.zendesk.com/api/v2/triggers \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo="
```

##### Show details

```bash
curl https://gitlab.zendesk.com/api/v2/triggers/12345 \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo="
```

##### Deactivate

```bash
curl https://gitlab.zendesk.com/api/v2/triggers/12345 \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo=" \
  -H "Content-Type: application/json" \
  -X PUT \
  -d '{"trigger": {"active": false}}'
```

#### Views

##### List all

```bash
curl https://gitlab.zendesk.com/api/v2/views \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo="
```

##### Show details

```bash
curl https://gitlab.zendesk.com/api/v2/views/12345 \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo="
```

##### Deactivate

```bash
curl https://gitlab.zendesk.com/api/v2/views/12345 \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo=" \
  -H "Content-Type: application/json" \
  -X PUT \
  -d '{"trigger": {"active": false}}'
```

##### List tickets in a view

```bash
curl https://gitlab.zendesk.com/api/v2/views/12345/tickets \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo="
```

##### Count tickets in a view

```bash
curl https://gitlab.zendesk.com/api/v2/views/12345/count \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo="
```

## Useful links

- [Zendesk API Docs](https://developer.zendesk.com/api-reference/ticketing/introduction/)
- [Zendesk Oauth docs](https://support.zendesk.com/hc/en-us/articles/203663836-Using-OAuth-authentication-with-your-application)
- [zendesk_api_client gem](https://github.com/zendesk/zendesk_api_client_rb)
- [Zendesk Support API Tickets endpoints](https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/)
- [Zendesk Support API Users endpoints](https://developer.zendesk.com/api-reference/ticketing/users/users/)
- [Zendesk Support API Organizations endpoints](https://developer.zendesk.com/api-reference/ticketing/organizations/organizations/)
- [Zendesk Support API Ticket Forms endpoints](https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_forms/)
- [Zendesk Support API Ticket Fields endpoints](https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_fields/)
- [Zendesk Support API Views endpoints](https://developer.zendesk.com/api-reference/ticketing/business-rules/views/)
- [Zendesk Support API Triggers endpoints](https://developer.zendesk.com/api-reference/ticketing/business-rules/triggers/)
- [Zendesk Support API Macros endpoints](https://developer.zendesk.com/api-reference/ticketing/business-rules/macros/)
- [Zendesk Support API Automations endpoints](https://developer.zendesk.com/api-reference/ticketing/business-rules/automations/)
