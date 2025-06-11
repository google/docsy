The tweet counts endpoints allow developers to understand and retrieve the volume of data for a given query

There have two endpoints: `Recent Tweet counts`, `Full-archive Tweet counts`.


## Recent Tweet counts

The recent Tweet counts endpoint allows you to programmatically retrieve the numerical count of Tweets for a query, over the last seven days. 
This endpoint is available via the standard and academic research product tracks and uses the OAuth 2.0 Bearer Token for authentication.

You can specify a query of up to 512 characters (using the core operators available in the standard product track) and specify the granularity (which can be day, hour or minute) as well as the time period for which you need the Tweet counts (using the start_time and end_time parameters).

```python
api.get_tweets_counts("twitterapi")
# Response(data=[TweetCount(start='2021-06-18T09:09:23.000Z', end='2021-06-18T10:00:00.000Z', tweet_count=15), TweetCount(start='2021-06-18T10:00:00.000Z', end='2021-06-18T11:00:00.000Z', tweet_count=36)...])
```

## Full-archive Tweet counts

!!! tip "Tips"
    
    This only for Academic Research product track

The full-archive Tweet counts endpoint allows you to programmatically retrieve the numerical count of Tweets for a query, from the entire archive of public Tweets. Currently, this endpoint is only available in the Academic Research product track and uses the OAuth 2.0 Bearer Token for authentication.

You can specify a query of up to 1024 characters, using both the core and advanced sets of operators (because this endpoint is available in the Academic Research product track) and specify the granularity and time period for which you need the Tweet counts, as noted above in section on recent Tweet counts. 

```python
api.get_tweets_counts(query="lakers", search_type="all")
# Response(data=[TweetCount(start='2021-06-18T09:09:23.000Z', end='2021-06-18T10:00:00.000Z', tweet_count=15), TweetCount(start='2021-06-18T10:00:00.000Z', end='2021-06-18T11:00:00.000Z', tweet_count=36)...])
```
