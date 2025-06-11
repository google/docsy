The user Tweet timeline endpoints provides access to Tweets published by a specific Twitter account.

Each timeline endpoints may use the following parameters to filter out the timeline. Use these parameters to create
a more specified timeline catered to your needs:

- user_id: [String] User ID for the target user
- start_time: [String] Earliest UTC timestamp for tweets, formatted as YYYY-MM-DDTHH:mm:ssZ.
- end_time: [String] Most Recent UTC timestamp for tweets, formatted as YYYY-MM-DDTHH:mm:ssZ.
- since_id: [String] Filter out tweets older than the "Since" tweet id
- until_id: [String] Filter out tweets more recent than the "Until" tweet id
- max_results: [Integer] Maximum number of tweets to be returned (Must be between 5 and 100)
- pagination_token: [String]
- tweet_fields: [Array] Specific information requested for the tweets. The response would include the additional information about each tweet. You simply have to list out the sub-parameters.
    - id: The unique Tweet ID
    - text: The actual UTF-8 text for the tweets
    - edit_history_tweet_ids: Array of unique IDs indicating all verions of tweet (initial version to most recent verison)
    - attachments: Specifies type of attachments present (Poll, Image, etc) in the tweet 
    - author_id: User ID of tweet's author
    - context_annotations: Contains context annations for the tweet
    - conversation_id: Tweet ID of the original Tweet of the conversation (which includes replies, etc.)
    - created_at: Creation time of the tweet
    - edit_controls: Indiciates how much longer the Tweet can be edited, and the number of remaining edits
    - entities: Provides additional information about hashtags, urls, user mentions, and cashtags associated with tweet
    - in_reply_to_user_id: If the tweet is a reply, the field will contain the original Tweet's author ID
    - lang: Language of the tweet, if detected. Returned as BCP47 language tag
    - non_public_metrics: Non-public engagement metrics such as impression couunts, URL link clicks, User Profile Clicks
    - organic_metrics: Engagement metrics at time of request, such as like count, reply count, etc.
    - possible_senstive: Indicates if the tweet's content may be senstive
    - promoted_metrics: Engagement metrics in a promoted context (when Tweet is promoted)
    - public_metrics: Public engagement metric such as reply count, like count at time of request
    - referenced_tweets: List of Tweets that this tweet refers to whether it be a retweet, quoted tweet, etc.
    - reply_settings: Shows who can reply to the tweet (Everyone, mentioned users, followers)
    - withheld: Shows information for withheld content
- exclude: [Array] Fields for what type of twets to exclude from response
- expansions: [Array] Fields for the expansion
- user_fields: [Array] Specific information requested for the requested user. The response would include the additional information about each user. You simply have to list out the sub-parameters.
    - id: User ID
    - name: Name of the user as shown on profile. Capped to 50 characters
    - username: User unique screen handle
    - connection_status: Get List of relations between user and user being looked up (Follow Request Received, Following, Muting, etc.)
    - created_at: UTC datetime that the user account was created
    - description: Text of the user's description/bio if provided
    - entities: Additional information about hashtags, urls, user mentions, and cashtags associated
    - location: Locations pecificed in user's profile if provided
    - pinned_tweet_id: Unique Tweet ID of user's pinned Tweet
    - profile_image_url: URL of the profile image for the user
    - protected: Indicates if the user's tweets are private
    - public_metrics: Contains information about user acitvity such as follower count, following count, tweet count, etc.
    - url: URL specified in user's profile, if present
    - verified: Indicates if user is a verified Twitter user
    - withheld: Contains withholding details for withheld content, if applicable
- media_fields: [Array] Specific information requested for the requested media. The response would include the additional information about each media object. You simply have to list out the sub-parameters.
    - media_key: Unique ID for expanded media content
    - type: Type of content (animated gif, photo, videeo)
    - url: Direct URL to the media file on Twitter
    - duration_ms: Duration of media content if it's a video
    - height: Height of media content in pixels
    - non_public_metrics: Non-public engagement metrics for media content at time of request (playback count, etc.)
    - organic_metrics: Engagement metrics for media content, similar to non public metrics
    - preview_image_url: URL to the static placeholder preview of media content
    - promoted_metrics: Engagement metrics for media content that has been promoted
    - public_metrics: Public engagement metrics for the media content
    - width: Width of media content in pixels
    - alt_text: Description of image to enable and support accessibility. Up to 1000 characters long
    - variants: Each media object may have multiple display or playback variants, with different resolutions or formats
- place_fields: [Array] Specific information requested for the places tagged in tweets. The response would include the additional information about each place. You simply have to list out the sub-parameters.
    - full_name: Longer-form detailed place name
    - id: Unique ID of expanded place 
    - contained_within: Returns IDs of known places contianing referenced place
    - country: Full-length name of the coutunry the place belongs to
    - country_code: ISO Alpha-2 couutnry code the place belongs to
    - geo: Contains place details in GeoJSON format
    - name: Short name for the place
    - place_type: Type of place: city, town, etc.
- poll_fields: [Array] Specific information requested for the requested poll in tweeets. The response would include the additional information about each poll object. You simply have to list out the sub-parameters.
    - id: Unique ID of expanded poll
    - options: Objects describing each choice in the poll
    - duration_minutes: Total duration of the poll 
    - end_datetime: End date adn tiemf or poll in ISO-8601 format
    - voting_status: Indicates if the poll is still activie and can receive votes, or if the voting is now closed
- return_json: [Boolean] Type for returned data

## User Tweet timeline

The user Tweet timeline endpoint provides access to Tweets published by a specific Twitter account.

```python
api.get_timelines(user_id="2244994945")
# Response(data=[Tweet(id=1364275610764201984, text=If you're newly approved for the Academic...), Tweet(id=1362876655061073928, text=From our living rooms to yours 🐱‍💻🛋️Our...), Tweet(id=1362439338978467841, text=“To quote my creator Jerome Gangneux, I always...), Tweet(id=1362439338169016324, text=“In the 20th century, managers managed humans,...), Tweet(id=1362439336910675970, text=Meet one of the useful Twitter bots out there:...), Tweet(id=1359912509940011010, text=Valentine’s Day is approaching! 💙 Over the...), Tweet(id=1359554366051504129, text=Go ahead, follow another puppy account. We...), Tweet(id=1357371424487268354, text=Learn how academics can get historical Tweets...), Tweet(id=1356991771553583106, text=Who knew an API could be delicious?...), Tweet(id=1354215875998437376, text=RT @TwitterOSS: Today we’re happy to share...)])
```

## Reverse chronological home timeline

This endpoint enables you to retrieve the most recent Tweets, Retweets, and replies posted by the authenticated user and the accounts they follow. 

```python
my_api.get_timelines_reverse_chronological(user_id="2244994945")
# Response(data=[Tweet(id=1524796546306478083, text=Today marks the launch of Devs in the Details...), Tweet(id=1524468552404668416, text=📢 Join @jessicagarson @alanbenlee and @i_am_daniele tomorrow...))
```

## User mention timeline

The user mention timeline endpoint allows you to request Tweets mentioning a specific Twitter user.

```python
api.get_mentions(user_id="2244994945")
# Response(data=[Tweet(id=1364407587207213056, text=@scottmathson @TwitterDev What would you want...), Tweet(id=1364398068313903104, text=@Twitter should consider supporting...), Tweet(id=1364377794327633925, text=@sugan2424 @TwitterDev @threadreaderapp You...), Tweet(id=1364377404156772352, text=@TwitterDev What kind of tweet / attachment is...), Tweet(id=1364373969852366849, text=• Thirdly, that @Twitter, @Twittersafety,...), Tweet(id=1364367885582352386, text=@Twitter @TwitterSafety @TwitterDev @jack...), Tweet(id=1364366114998870016, text=I have mixed feelings about @Twitter /...), Tweet(id=1364364744916951040, text=@Casanovacane @jack @TwitterDev can we get a...), Tweet(id=1364359199795240961, text=@TwitterDev @suhemparack A Blue app going to...), Tweet(id=1364338409494503425, text=@FairyMaitre @TwitterDev tkt)])
```
