## List follows lookup

List follows lookup group has two available endpoints. You are able to retrieve details on followers of a specified List and get data on which Lists a user follows. These endpoints can be used to enable people to curate and organize Tweets based on what type of Lists other users are following.

You can use either [OAuth 1.0a User Context](https://developer.twitter.com/en/docs/authentication/oauth-1-0a) or [OAuth 2.0 Bearer Token](https://developer.twitter.com/en/docs/authentication/oauth-2-0) to authenticate to these endpoints.

You can get more information for this at [docs](https://developer.twitter.com/en/docs/twitter-api/lists/list-follows/introduction)

### Get list's followers

Returns a list of users who are followers of the specified List.

```python
api.get_list_followers(list_id="List ID")
# Response(data=[User(id='1301152652357595137', name='realllkk520', username='realllkk520')])
```

### Get lists for user followed. 

Returns all Lists a specified user follows.

```python
api.get_user_followed_lists(user_id="User ID")
# Response(data=[TwitterList(id='1403322685870940160', name='SNS-sdks'), TwitterList(id='1402926710174089222', name='🧑🏻\u200d💻 Geeks')])
```

## Manage List follows

The manage List follows endpoints allow you to follow and unfollow a List on behalf of an authenticated user.

For these endpoints, there are two methods available: POST and DELETE. The POST method allows you to follow a List, and the DELETE method allows you to delete a List.

You can get more information for this at [docs](https://developer.twitter.com/en/docs/twitter-api/lists/list-follows/introduction)

### Follow a list

```python
my_api.follow_list(user_id=my_api.auth_user_id, list_id="1448302476780871685")
# {'data': {'following': True}}
```

### Unfollow a list

```python
my_api.unfollow_list(user_id=my_api.auth_user_id, list_id="1448302476780871685")
# {'data': {'following': False}}
```
