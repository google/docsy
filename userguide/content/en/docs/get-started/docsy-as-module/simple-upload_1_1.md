You can use media upload endpoint to upload simple media, images(gifs).

You can get more information for this at [docs](https://docs.x.com/x-api/media/media-upload)

## upload simple

```python

with open("path/to/image", "rb") as media:
    resp = my_api.upload_media_simple_v2(media=media)
    print(resp)
```

