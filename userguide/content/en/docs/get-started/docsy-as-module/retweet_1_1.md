The manage Retweets endpoints enable you to Retweet or undo a Retweet of a specified Tweet on behalf of an authenticated account.

For this endpoint group, there are two methods available POST and DELETE. The POST method allows you to Retweet a Tweet, and the DELETE method will enable you to undo a Retweet of a given Tweet.

You can get more information for this at [docs](https://developer.twitter.com/en/docs/twitter-api/tweets/retweets/introduction)


## Retweets

Retweet a tweet

```python
my_api.retweet_tweet(user_id=my_api.auth_user_id, tweet_id="target tweet id")
# {'data': {'retweeted': True}}
```

Remove retweet from a tweet

```python
my_api.remove_retweet_tweet(user_id=my_api.auth_user_id, tweet_id="target tweet id")
# {'data': {'retweeted': False}}
```

##  Tweet retweeted users

```python
api.get_tweet_retweeted_users(tweet_id="target tweet id")
# Response(data=[User(id='1301152652357595137', name='realllkk520', username='realllkk520')])
```

## Tweet retweeted tweets

```python
api.get_tweet_retweeted_tweets(tweet_id="target tweet id")
# Response(data=[Tweet(id=1724975633908789418, text=RT @XDevelopers: You can now monitor your usage...), Tweet(id=1724805194280730931, text=RT @XDevelopers: You can now monitor your usage...)]) 
```