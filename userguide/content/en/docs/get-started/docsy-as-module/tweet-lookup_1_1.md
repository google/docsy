Follow API could return information about a Tweet or group of Tweets, specified by a Tweet ID.

Get single tweet

```python
api.get_tweet("1354143047324299264", expansions=["attachments.media_keys"], media_fields=["type","duration_ms"])
# Response(data=Tweet(id=1354143047324299264, text=Academics are one of the biggest groups using...))
```

Get multi tweets by one request

```python
api.get_tweets(["1261326399320715264","1278347468690915330"],expansions="author_id",tweet_fields=["created_at"], user_fields=["username","verified"])
# Response(data=[Tweet(id=1261326399320715264, text=Tune in to the @MongoDB @Twitch stream...), Tweet(id=1278347468690915330, text=Good news and bad news: 2020 is half over)])
```
