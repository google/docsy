### Prerequisite

Once you have got the request access for `OAuth2.0`, your app will have the `Client ID` to do `authorization` for `OAuth2.0`.

You can get more information at the [documentation](https://developer.twitter.com/en/docs/twitter-api/oauth2) and the [community content](https://twittercommunity.com/t/announcing-oauth-2-0-general-availability/163555).

If you're ready, now let's get started do a simple example with this library.

### Initial Api

You need `Client ID` to initial the Api instance.

```python
from pytwitter import Api
api = Api(client_id='your client id', oauth_flow=True)
```

!!! tip "Tips"

    If your app is a `Confidential client`, you need also provide `Client Secret`. 

```python
from pytwitter import Api
api = Api(client_id='your client id', client_secret="your client secret", oauth_flow=True)
```

By default, The callback uri is `https://localhost/`, You need add this url to App's `Authentication settings`.

### Get authorization url

You need save the `code_verifier` for generate access token. 

```python
authorization_url, code_verifier, state = api.get_oauth2_authorize_url()
#('https://twitter.com/i/oauth2/authorize?response_type=code&client_id=client_id&redirect_uri=https%3A%2F%2Flocalhost%2F&scope=users.read+tweet.read&state=HVLpccax4G57jMJu1yddJtP55HYMQA&code_challenge=jntz4xjHJ0XHzWA7_Wa6rrA8zHwu4qPZt2MQsv6&code_challenge_method=S256',
# '01wNLFIFeh310NpRLt837gcrvK1JqFrFvoYFU0DnH',
# 'HVLpccax4G57jMJu1yddJtP55HYMQA')
```

Upon successful authentication, your callback_url would receive a request containing the `code` parameter.

Eg: https://localhost/?state=HVLpccax4G57jMJu1yddJtP55HYMQA&code=SUVocnRteEF0dFZCMXR0eWQ0aF9HX1ZZMkVmeHhlWTF4NmRMNElPdVNmQ2N4OjE2MzI4NDcode

### Generate access token

Once you have the redirect response for your callback url, you can get the user access token.

```python
api.generate_oauth2_access_token(response="response", code_verifier="code_verifier")
# {'token_type':'bearer','expires_in':7200,'access_token':'access_token','scope':'users.read tweet.read','expires_at':1632852223}
```

Now the api instance will have the user authorization. You can use this to manage apis needing user authorization.
