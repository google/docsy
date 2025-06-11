~~This List lookup group has two available endpoints. You are able to retrieve a specified List by ID and get details on user-owned Lists. With the Lists endpoints, you can build solutions that enable people to curate and organize Tweets based on preferences, interests, groups, or topics.

You can use either [OAuth 1.0a User Context](https://developer.twitter.com/en/docs/authentication/oauth-1-0a) or [OAuth 2.0 Bearer Token](https://developer.twitter.com/en/docs/authentication/oauth-2-0) to authenticate to these endpoints. If you choose to use [OAuth 1.0a User Context](https://developer-staging.twitter.com/en/docs/authentication/oauth-1-0a), use the Access Tokens associated with a user that has authorized your App. You can generate Access Tokens using the [3-legged OAuth flow](https://developer-staging.twitter.com/en/docs/authentication/oauth-1-0a/obtaining-user-access-tokens).

You can get more information for this at [docs](https://developer.twitter.com/en/docs/twitter-api/lists/list-lookup/introduction)

## Lookup a specific list by ID	

Returns the details of a specified List.

```python
api.get_list(list_id="1403322685870940160")
# Response(data=TwitterList(id='1403322685870940160', name='SNS-sdks'))
```

## Lookup a user's owned Lists

Returns all Lists owned by the specified user.

```python
api.get_user_owned_lists(user_id="User ID")
# Response(data=[TwitterList(id='1403322685870940160', name='SNS-sdks')])
```
