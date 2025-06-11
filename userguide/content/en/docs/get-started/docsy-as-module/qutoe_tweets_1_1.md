The Quote Tweets lookup endpoint gives the Quote Tweets for a given Tweet ID.  This allows developers that build apps and clients to get the Quote Tweets for a Tweet quickly and efficiently. It also makes it easy for researchers to study the full conversation around a Tweet including all its Quote Tweets.

Tweets are delivered in reverse-chronological order, starting with the most recent. Results are paginated up to 100 Tweets per page (10 Tweets by default). Pagination tokens are provided for paging through large sets of Tweets.

You can get more information for this at [docs](https://developer.twitter.com/en/docs/twitter-api/tweets/quote-tweets/introduction)

## Quote Tweets

```python
api.get_tweet_quote_tweets(tweet_id="1409931481552543749", max_results=10)
# Response(data=[Tweet(id=1503982413004914689, text=RT @suhemparack: Super excited to share our...), Tweet(id=1495979553889697792, text=RT @chris_bail: Twitter has created an entire...), Tweet(id=1486385372401737728, text=RT @suhemparack: Super excited to share our...), Tweet(id=1480954678447857669, text=RT @suhemparack: Super excited to share our...), Tweet(id=1480639272721940486, text=RT @suhemparack: Super excited to share our...), Tweet(id=1471614967207976961, text=RT @chris_bail: Twitter has created an entire...), Tweet(id=1470423243513372679, text=RT @suhemparack: Super excited to share our...), Tweet(id=1469125403373568001, text=RT @suhemparack: Super excited to share our...), Tweet(id=1468633446935318529, text=RT @suhemparack: Super excited to share our...), Tweet(id=1438256410417143809, text=RT @suhemparack: Super excited to share our...)])
```
