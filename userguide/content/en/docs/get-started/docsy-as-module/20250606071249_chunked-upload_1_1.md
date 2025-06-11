Chunked upload is the recommended method for uploading media files. It allows you to upload media files up to 512MB. The chunked upload endpoint can be used to upload both images and videos. 

You can get more information for this at [docs](https://developer.twitter.com/en/docs/twitter-api/v1/media/upload-media/api-reference/post-media-upload-init).

follow the steps below to upload a video by chunked upload:

### Step 1: Initialize the upload

```python
resp = my_api.upload_media_chunked_init(
    total_bytes=1234561,
    media_type="video/mp4",
)
media_id = resp.media_id_string
```

### Step 2: Append the file

Assume the file has split into 3 parts

```python
video_parts = [
    "path/to/video/part1.mp4",
    "path/to/video/part2.mp4",
    "path/to/video/part3.mp4",
]

for idx, part in enumerate(video_parts):
    with open(part, "rb") as media:
        status = my_api.upload_media_chunked_append(
            media_id=media_id,
            media=media,
            segment_index=idx,
        )
        print(status)
```

### Step 3: Finalize the upload

Once you have appended all the file parts, you need to finalize the upload.

```python
resp = my_api.upload_media_chunked_finalize(media_id=media_id)
print(resp)
```

### Step 4 (Optional): Check the status

If the finalize response show the video is processing, you can check the status by using the following code:

```python
resp = my_api.upload_media_chunked_status(media_id=media_id)
print(resp)
```

Note, only the media is in processing status, you can get the status.

### Step 5: Create a tweet with video

Once the processing is complete, you can use the `media_id` to create a tweet with video.

```python
my_api.create_tweet(
    text="Hello World",
    media_media_ids=[media_id],
)
```

Enjoy it!
