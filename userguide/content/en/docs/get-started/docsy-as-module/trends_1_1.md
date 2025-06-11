The Trends lookup endpoint allow developers to get the Trends for a location, specified using the where-on-earth id (WOEID).

**Note:** WOEID is a legacy identifier created by Yahoo and has been deprecated. X API uses the numeric value to identify town and country trend locations. 
Reference our legacy [blog post](https://blog.twitter.com/engineering/en_us/a/2010/woeids-in-twitters-trends.html), or [archived data](https://archive.org/details/geoplanet_data_7.10.0.zip0.)

### Get trends

Get the trends for a location

```python
api.get_trends_by_woeid(woeid=1)
# Response(data=[Trend(trend_name='#QuietOnSet', tweet_count=14060), Trend(trend_name='King Charles', tweet_count=42315), Trend(trend_name='Drake Bell', tweet_count=1234)])
```
