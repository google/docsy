Creating and deleting Tweets using the Twitter API is essential for engaging with the public conversation. The new manage Tweets endpoints allow you to do just that and much more.

We have two available methods for manage Tweets, POST and DELETE. The POST method lets you post polls, quote Tweets, Tweet with reply settings, Tweet with geo, Tweet with media and tag users, and Tweet to Super Followers, in addition to other features. Likewise, the DELETE method allows you to delete a specific Tweet. For the POST method, you can pass in the parameters you are looking for to enable you to further customize your request.

There is a user rate limit of 200 requests per 15 minutes for the POST method. The DELETE method has a rate limit of 50 requests per 15 minutes. Additionally, there is a limit of 300 requests per 3 hours, including Tweets created with either manage Tweets or manage Retweets. 

You can get more information for this at [docs](https://developer.twitter.com/en/docs/twitter-api/tweets/manage-tweets/introduction)

## Post a Tweet	

```python
my_api.create_tweet(text="Hello world!")
# Response(data=Tweet(id=1354143047324299264, text=Hello world!))
```

## Delete a Tweet

```python
my_api.delete_tweet(tweet_id="1354143047324299264")
# {'data': {'deleted': True}}
```
