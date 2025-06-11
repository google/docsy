The Usage API in the Twitter API v2 allows developers to programmatically retrieve their project usage. Using thie endpoint, developers can keep a track and monitor of the number of Tweets they have pulled for a given billing cycle.

You can learn more about the Usage API in the [docs](https://developer.twitter.com/en/docs/twitter-api/usage/tweets/introduction).

!!! tip "Note"
    
        The Usage API need `OAuth 2.0 App-only`.

### Get usage

Get the Tweet usage within the context of a project

```python
from pytwitter import Api

api = Api(bearer_token='your bearer token')

resp = api.get_usage_tweets(days=10, usage_fields=["daily_client_app_usage", "daily_project_usage"])
print(resp.data)
# Usage(cap_reset_day=28, project_id='123456789', project_cap='50000000', project_usage='11910737',...)
```
