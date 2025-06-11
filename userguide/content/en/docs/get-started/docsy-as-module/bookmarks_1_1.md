Bookmarks are a core feature of the Twitter app that allows you to “save” Tweets and easily access them later. With these endpoints, you can retrieve, create, delete or build solutions to manage your Bookmarks via the API.  

You can get more information for this at [docs](https://developer.twitter.com/en/docs/twitter-api/tweets/bookmarks/introduction)

## Manage Bookmarks

### Bookmark tweet

Causes the user ID of an authenticated user identified in the path parameter to Bookmark the target Tweet provided in the request body.

```python
my_api.bookmark_tweet(user_id="1301152652357595137", tweet_id="1511645952418885636")
# {'data': {'bookmarked': True}}
```

### Remove bookmark tweet

Allows a user or authenticated user ID to remove a Bookmark of a Tweet.

```python
my_api.bookmark_tweet_remove(user_id="1301152652357595137", tweet_id="1511645952418885636")
# {'data': {'bookmarked': False}}
```

## Bookmarks lookup

Allows you to get information about a authenticated user’s 800 most recent bookmarked Tweets.

```python
my_api.get_bookmark_tweets(user_id="1301152652357595137")
#  Response(data=[Tweet(id=1511645952418885636, text=https://t.co/Hl9Sa0uP9W)])
```
