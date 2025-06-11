This guide will help you make your first requests to upload media using the X API v2 media upload endpoint(s).

You can get more information for this at [docs](https://docs.x.com/x-api/media/quickstart/media-upload-chunked)

For video or chunked uploads, you must:

1. Initialize the upload using the `INIT` command
2. Upload each chunk of bytes using the `APPEND` command
3. Complete the upload using the `FINALIZE` command

let's do it, Now we need to upload a big video with a filename `/path/to/video.mp4`

### Step 1: Initialize the upload

As first step, you need to initialize the upload.

```python

import os

filename = "/path/to/video.mp4"

init_resp = myapi.upload_media_chunked_init_v2(
    total_bytes=os.path.getsize(filename),
    media_type="video/mp4",
    media_category="tweet_video",
)
print(init_resp)
# Response(data=MediaUpload(id='1912334964932374529', media_key='7_1912334964932374529', processing_info=None, image=None, video=None))
```

### Step 2: Append the file by chunks

Once we have the media identifiers `id` from the `init_resp`, we can start uploading the file by chunks.

```python

media_id = init_resp.data.id

chunk_size = 2 * 1024 * 1024
segment_index = 0
with open(filename, "rb") as f:
    while True:
        chunk = f.read(chunk_size)
        if not chunk:
            break

        chunk_resp = myapi.upload_media_chunked_append_v2(
            media_id=media_id,
            media=chunk,
            segment_index=segment_index,
        )
        print(chunk_resp)
        segment_index += 1

# True
```

### Step 3: Finalize the upload

Everything is ok, we need finalize the upload.

```python
finalize_resp = myapi.upload_media_chunked_finalize_v2(media_id=media_id)
print(finalize_resp)
# Response(data=MediaUpload(id='1912090619981471744', media_key='7_1912090619981471744', processing_info=MediaUploadResponseProcessingInfo(state='succeeded', check_after_secs=None, progress_percent=None, error=None), image=None, video=None)) 
```

### Step 4 (Optional): Check the processing status

Once you have finalized the upload, you can check the processing status.

```python
status_resp = myapi.upload_media_chunked_status_v2(media_id=media_id)
print(status_resp)
# Response(data=MediaUpload(id='1912090619981471744', media_key='7_1912090619981471744', processing_info=MediaUploadResponseProcessingInfo(state='succeeded', check_after_secs=None, progress_percent=100, error=None), image=None, video=None))
```

### Step 5: Create tweet with media

Congratulations, you have uploaded a video using the X API v2 media upload endpoint(s).

Now we can create a tweet with this video.

```python
tweet_resp = myapi.create_tweet(text="My first tweet with a video", media_media_ids=[media_id])

# Tweet(id=1912338879258194343, text=My first tweet with a video...)
```

Enjoy it!
