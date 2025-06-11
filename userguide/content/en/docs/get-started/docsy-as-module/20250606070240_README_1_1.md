# flockos
flockos is a python client for [FlockOS](https://docs.flock.co/). flockos currently runs only on Python 2.x

## Install
If you are using virtualenv, use the following command to create the virtualenv:

```
virtualenv venv -p python2
```

Install flockos using:

```
pip install flockos
```

## Usage

### Setup

Import the various classes and methods needed

```python
from flockos import chat, roster, users, channels
from flockos import ActionConfig, Attachment, AttachmentButton, AttachmentDownload, Image, HtmlView, ImageView, Message, SendAs,  
Views, WidgetView, PublicProfile, Channel, ChannelMember
```
`token` can be an user token, For channel and user apis, user token is required. For sending messages it can either be an user token or [bot token](https://docs.flock.co/display/flockos/Bots). `to` in message apis can be either [user or channel ids](https://docs.flock.co/display/flockos/Identifiers).

### Index
- [Methods](#methods)
    - [Sending Messages](#sending-messages)
    - [Channel APIs](#channel-apis)
    - [User APIs](#user-apis)
    - [Contact APIs](#contact-apis)
- [Events](#events)
    - [Handling events](#handling-events)
    - [Verifying event tokens](#verifying-event-token)

## [Methods](https://docs.flock.co/display/flockos/Methods)
### Sending messages

#### Send a simple message
```python
# returns a message id
res = chat.send_message(to=user_guid,token=bot_token,text="Hello, world")
print(res)
```
#### Send a message using a custom name and profile image
```python
send_as_hal = SendAs(name='HAL-9000', profile_image='https://pbs.twimg.com/profile_images/1788506913/HAL-MC2_400x400.png')
res = chat.send_message(token=bot_token,to=user_guid,text="I'm sorry Dave, I'm afraid I can't do that",send_as=send_as_hal)
print(res)
```

#### Send a widget view
```python
views = Views()
views.widget = WidgetView(src="http://example.com",height=250)
attachment = Attachment(title="Test widget", description="Replace src with your own page", views=views)
# NOTE: attachments is an array of attachment
res = chat.send_message(token=bot_token,to=user_guid, attachments = [attachment])
print(res)
```

#### Send a HTML view
```python
views = Views()
views.html = HtmlView(inline="It <b>Works</b>",height=50)
attachment = Attachment(title="Test html", description="Replace inline with your own html", views=views)
# NOTE: attachments is an array of attachment
res = chat.send_message(token=bot_token,to=user_guid, attachments = [attachment])
print(res)
```

#### Send a FlockML view
```python
# NOTE: No need for a flockml view object
views = Views()
views.flockml = ("<flockml>FlockML is <b>AWESOME</b></flockml>")
attachment = Attachment(title="Test flockml", description="Replace flockml with your own flockml", views=views)
# NOTE: attachments is an array of attachment
res = chat.send_message(token=bot_token,to=user_guid, attachments = [attachment])
print(res)
```

#### Send a Image view
```python
views = Views()
image = ImageView(original=Image(src="http://library.acropolis.org/wp-content/uploads/2014/11/One_ring.png", width=400, height=400),filename="onering.png")
views.image = image
attachment = Attachment(title="Test image", description="One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them", views=views)
# NOTE: attachments is an array of attachment
res = chat.send_message(token=bot_token,to=user_guid, attachments = [attachment])
print(res)
```

#### Send download files
```python
d = AttachmentDownload(src="http://wallpapercave.com/wp/H630T6R.jpg")
views = Views()
views.flockml = "<flockml>Download the <i>matrix</i></flockml>"
# NOTE: downloads is always a list
attachment = Attachment(title="Test files", downloads=[d], views=views)
res = chat.send_message(token=bot_token,to=user_guid, attachments = [attachment])
print(res)
```

#### Button with openwidget, open url & send to app service
```python
b1 = AttachmentButton(name = "Harry Potter", id="harry", action=ActionConfig(type="openWidget", url="https://goo.gl/aygRGf", desktop_type="sidebar"))
b2 = AttachmentButton(name = "Ron Weasley", id="ron", action=ActionConfig(type="openBrowser", url="https://goo.gl/gDpMVn", send_context=True))
b3 = AttachmentButton(name = "Hermione Granger", id="hermione", action=ActionConfig(type="sendToApp"))
attachment = Attachment(title="Test buttons", buttons=[b1,b2,b3])
res = chat.send_message(token=bot_token,to=user_guid, text="Who is your favourite Harry Potter character?", attachments = [attachment])
print(res)
```

#### Now, just for fun, let us change colours
```python
attachment = Attachment(title="Test colour", color="#FF0000", description="It is red!")
res = chat.send_message(token=bot_token,to=user_guid, attachments=[attachment])
print(res)
```

#### Fetch messages
```python
chat =  "u:5bd391005e3c5cd3"
uids = ["fd4877b719b1", "59e2da001af2"]
res = chat.fetch_messages(token,chat,uids)
print(res)
```

### Channel APIs

#### Get channel info
```python
print channels.get_info(token,channel_id)
```

#### Get channel members
```python
print channels.get_members(token,channel_id,show_public_profile)
```

#### Get channels list of which user is member of 
```python
print channels.list(token)
```

### User APIs

#### Get user info
```python
print users.get_info(token)
```

#### Get public profile
```python
print users.get_public_profile(token, user_id)
```

### Contact APIs

#### Get all contacts
```python
print roster.list_contacts(token)
```

## [Events](https://docs.flock.co/display/flockos/Events)

### Handling events

Create instance of `EventHandlerClient`
```python
event_handler_client = EventHandlerClient(app_id = "<appID>", app_secret = "<appSecret>")
```
Attach `eventListeners` with the client (these will be fired when an event occurs) 
```python
@event_handler_client.on_app_install
def on_app_install_listener():
    #define implementation of listener here
    pass
```
Attach `event_handler_client` with your web framework by calling `event_handler_client.handleRequest` when event request is received
```python
event_handler_client.handle(environ, start_response)
```


### Verifying [event token](http://docs.flock.co/display/flockos/Event+Tokens)
For verifying event tokens, you can follow the following 2 ways :

1. Wrap the app object in `TokenVerifierFilter`  to verify event token associated with every event request
```python
app = TokenVerifierFilter(app, "<appId>", "<appSecret>");
```

2. Call the method `decode_and_verify_request` in `TokenVerifierFilter`  to verify event token associated with an event
```python
TokenVerifierFilter.decode_and_verify_request(environ, "<appSecret>", "<appId>");
# event body
body = environ['request_body']
# event payload
payload = environ['event_token_payload']

```
