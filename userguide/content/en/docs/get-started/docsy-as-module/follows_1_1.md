Following users is one of the most foundational actions on Twitter. 

Twitter offer two sets of endpoint groups to help you lookup, create, and delete follow relationships: follows lookup and manage follows.

You can get more information for this at [docs](https://developer.twitter.com/en/docs/twitter-api/users/follows/introduction)

## Follows lookup

Get users are following by target user

```python
api.get_following(user_id="2244994945", max_results=5)
# Response(data=[User(id='459860328', name='julie✨', username='JulieMendoza206'), User(id='273830767', name='🄿🅄🅂🄷', username='rahul_pushkarna')...])
```

Get users are following the target user

```python
api.get_followers(user_id="2244994945", max_results=5)
# Response(data=[User(id='715131097332518912', name='Daniel', username='RGIDaniel'), User(id='1176323137757048832', name='Joyce Wang', username='joycew67')...])
```

## Manage Follows

Those api need user access token.

Follow a user

```python
my_api.follow_user(user_id=my_api.auth_user_id, target_user_id="target user id")
# {'data': {'following': True, 'pending_follow': False}}
```

Unfollow a user

```python
my_api.unfollow_user(user_id=my_api.auth_user_id, target_user_id="target user id")
# {'data': {'following': False}}
```
