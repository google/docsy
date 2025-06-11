---
title: Zapier Documentation
description: Support Operations documentation page for Zapier
canonical_path: "/handbook/support/readiness/operations/docs/zapier/"
---

**NOTE**

This page is largely informational. Support Readiness made the decision to no
longer utilize Zapier anymore.

## What is Zapier

According to [wikipedia](https://en.wikipedia.org/wiki/Zapier):

> Zapier is a product that allows end users to integrate the web applications
> they use.

In a broader sense, Zapier is a tool we utilize to enhance the functionality of
many of our systems, such as Zendesk, GitLab.com, etc.

## Gaining access to Zapier

As this is a baseline entitlement for Support Operations, this should be done
during your onboarding. If it is not, please open an
[access request issue](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues)
and assign to your manager for provisioning.

## Creating a Zap

To create a zap, login to Zapier and click the black `Create Zap` button on the
top-left of the page. This will bring up the zap editor.

The first thing to do on this page is determine the name, location, description,
and timezone for your zap to use. To do this, click on the settings icon (gear
icon) on the right-hand side of the page. You will then give your zap a name,
pick the folder to have it in, add a description for the zap, and determine the
timezone for the zap to use.

After doing all this, you will then begin building your zap. This can be a very
involved process and take time to get the hang of, so reach out to your fellow
Support Operations team members or a Support Operations Manager for assistance.

In general, the process will go like this:

1. Pick an action for the task to take
1. Fill out any action specific criteria
1. Test out the task
1. Add a new task
1. Repeats steps 1-3 for as many times as needed
1. Turn on zap once you are done

## Editing a Zap

To edit a zap, you will login to Zapier and locate the zap in question. You will
then click on the zap's name to be brought to the zap editor. From here, you can
make whatever changes are needed. As the changes auto-save, once you are done
you can leave the page.

**Tip**: When making major edits, it is always preferred to turn the zap off
first by clicking the slider in the top-right of the zap editor page.

## Using Zapier Storage

When we need to utilize something that needs to be secret, such as a token, we
utilize Zapier Storage. You would need a step in your Zap to get the secret from
Zapier Storage. From there, your future steps need to use this to fetch the
secret value. If using code blocks, you would do this by setting an input
variable with the value of the secret (and then using that input variable in
your code). Some examples are below (assuming an input variable name of
`secret`):

```python
client = StoreClient(input.get('secret'))
value = client.get('foo')
return { "key": value }
```

```javascript
const store = StoreClient(inputData.secret);
const value = await store.get('foo');
return { result: value };
```

### Adding an item

To add a new item to Zapier Storage, you must use the storage secret (found in
the Support Readiness 1Password Vault). With that in hand, you would do the
following:

```bash
curl -X POST -ss "https://store.zapier.com/api/records?secret=SECRET_GOES_HERE" \
  -d '{"foo": "bar"}'
```

Replacing `SECRET_GOES_HERE` with the actual secret value.

### Editing an item

To edit an item in Zapier Storage, you would do the same action you did to
create one. So if updating the key `foo` to have a value of `bar2`, you would
do:

```bash
curl -X POST -ss "https://store.zapier.com/api/records?secret=SECRET_GOES_HERE" \
  -d '{"foo": "bar2"}'
```

Replacing `SECRET_GOES_HERE` with the actual secret value.

## Troubleshooting zap issues

To troubleshoot a zap, you will login to Zapier and locate the zap in question.
You will then click the down arrow to the right of the zap and select
`View Zap History` to see the usage log. From here, you can select events to see
what was sent in and out of the zap itself.
