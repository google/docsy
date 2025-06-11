Streaming endpoint delivers Tweet objects through a persistent HTTP GET connection.

And now has two different api.

For this library, provide `StreamApi` independent. Same as main `Api`, You need initial it first. You can see some [`Examples`](https://github.com/sns-sdks/python-twitter/tree/master/examples) for it.

```python
from pytwitter import StreamApi
stream_api = StreamApi(bearer_token="bearer token")
# or use consumer key and secret
# stream_api = StreamApi(consumer_key="consumer key", consumer_secret="consumer secret")
```

## Sampled stream

The sampled stream endpoint delivers a roughly 1% random sample of publicly available Tweets in real-time.

```python
stream_api.sample_stream()
```

## Filtered stream

If you want filter the stream tweets, You need add rules for api.

```python
np = {
    "add": [
        {"value": "cat has:media", "tag": "cats with media"},
        {"value": "cat has:media -grumpy", "tag": "happy cats with media"}
    ]
}
stream_api.manage_rules(rules=np, dry_run=True)
# Response(data=[StreamRule(id='1370406958721732610', value='cat has:media -grumpy'), StreamRule(id='1370406958721732609', value='cat has:media')])
```

Then use api

```python
stream_api.search_stream()
```
