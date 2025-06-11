The Spaces lookup endpoints help you lookup live or scheduled Spaces, and enable you to build discovery experiences to give your users ways to find Spaces they may be interested in.
You can get more information at [Lookup docs](https://developer.twitter.com/en/docs/twitter-api/spaces/lookup/introduction).

There have multiple methods for get spaces data by api.

## Get space by space ID

```python
api.get_space(space_id="1DXxyRYNejbKM")
# Response(data=[Space(id='1DXxyRYNejbKM', state='live')])
```

## Get spaces by multi spaces IDs

```python
api.get_spaces(space_ids=["1DXxyRYNejbKM", "1nAJELYEEPvGL"])
# Response(data=[Space(id='1DXxyRYNejbKM', state='live'), Space(id='1nAJELYEEPvGL', state='live')])
```

## Get spaces by multi creator IDs

```python
api.get_spaces_by_creator(creator_ids=["2244994945", "6253282"])
# Response(data=[Space(id='1DXxyRYNejbKM', state='live'), Space(id='1nAJELYEEPvGL', state='live')])
```

## Get space buyers by space ID

```python
api.get_buyers_by_space(space_id="1DXxyRYNejbKM")
# Response(data=[User(id='2244994945', name='Twitter Dev', username='TwitterDev'), User(id='783214', name='Twitter', username='Twitter')])
```

## Get space tweets by space ID

```python
api.get_tweets_by_space(space_id="1DXxyRYNejbKM")
# Response(data=[Tweet(id=1389270063807598594, text=now, everyone with 600 or more followers can...), Tweet(id=1354143047324299264, text=Academics are one of the biggest groups using...), Tweet(id=1293595870563381249, text=Twitter API v2: Early Access releasednnToday we...)])
```