Many endpoints currently use OAuth 1.0a method to act, or make API requests, on behalf of a Twitter account (but OAuth 2.0 with fine-grained scopes is preferred). For example, if you have a Twitter developer app, you can make API requests on behalf of any Twitter account as long as that user authenticates your app.

So, This will show you how to obtain user access tokens through the 3-legged OAuth flow.


### Prerequisite

At the beginning, You need a Twitter app, and enable the `3-legged OAuth`.

You can get more information at the [official Documentation](https://developer.twitter.com/en/docs/authentication/oauth-1-0a/obtaining-user-access-tokens).

If you're ready, now let's get started do a simple example with this library.

### Initial Api

You need consumer key and secret to initial Api instance.

```python
from pytwitter import Api

api = Api(consumer_key='your consumer key', consumer_secret='your consumer secret', oauth_flow=True)

```

By default, The callback uri is `https://localhost/`, You need add this url to App's `Authentication settings`.

### Get authorization url

Now you can get the url for user to do authenticate,

```python
api.get_authorize_url()
# https://api.twitter.com/oauth/authorize?oauth_token=NPcudxy0yU5T3tBzho7iCotZ3cnetKwcTIRlX0iwRl0
```
Upon successful authentication, your callback_url would receive a request containing the oauth_token and oauth_verifier parameters.

Eg: https://localhost/?oauth_token=NPcudxy0yU5T3tBzho7iCotZ3cnetKwcTIRlX0iwRl0&oauth_verifier=uw7NjWHT6OJ1MpJOXsHfNxoAhPKpgI8BlYDhxEjIBY

### Generate access token

Once you have the redirect response for your callback url, you can get the user access token.

```python
api.generate_access_token(response="You response url")
# {'oauth_token': 'oauth-token','oauth_token_secret': 'oauth-token-secret', 'user_id': 'user id', 'screen_name': 'screen name'}
```

For convenience, lib have keep the auth user id with property `auth_user_id`.

Now the api instance will have the user authorization. You can use this to manage apis need user authorization like `hide reply`, `manage follow`... 

!!! tip "Note"

    If you have any confusion, you need to read the [Get user access token](https://developer.twitter.com/en/docs/authentication/oauth-1-0a/obtaining-user-access-tokens) first.
    