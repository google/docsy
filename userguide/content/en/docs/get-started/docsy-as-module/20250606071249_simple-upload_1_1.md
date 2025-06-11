The simple upload endpoint can only be used to upload images(gifs).

You can get more information for this at [docs](https://developer.twitter.com/en/docs/twitter-api/v1/media/upload-media/api-reference/post-media-upload)

follow the steps below to upload an image:

```python

with open("path/to/image", "rb") as media:
    resp = my_api.upload_media_simple(media=media)
    print(resp)
```

also you can upload with base64 encoded image:

```python
import base64

with open("path/to/image", "rb") as f:
    media_data = base64.b64encode(f.read()).decode("utf-8")
    resp = my_api.upload_media_simple(media_data=media_data)
    print(resp)
```
