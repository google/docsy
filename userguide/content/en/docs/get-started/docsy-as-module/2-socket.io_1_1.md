# socket.io
- web socket is used for chat feature implementation
- socket.io simplify the use of websocket

### Socket.IO is composed of two parts:
- A server that integrates with (or mounts on) the Node.JS HTTP Server (the **socket.io** package)
- A client library that loads on the browser side (the **socket.io-client package**)

The main idea behind Socket.IO is that you can **send and receive any events you want**, with any data you want. Any objects that can be encoded as JSON will do, and binary data is supported too.

Let’s make it so that when the user types in a message, the server gets it as a chat message event. 

```bash
npm install socket.io
```
```js
//server.js
const express = require('express')
const {createsServer} = require('node:http')
const {Server} = require('socket.io')

const app = express()
const server = createServer(app)
const io = new Server(server) // initialize a new instance of socket.io by passing the server (the HTTP server) object

io.on('connection', (socket) => { // listen on the connection event for incoming sockets and log it to the console.
    console.log('a user connected')
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
        console.log('message: ' + msg);
  });
})
```
```html
<script src='/socket.io/socket.io.js'></script>
<script>
    const socket = io() //  load the socket.io-client
    formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    if (inputElement.value) {
      socket.emit('chat message', inputElement.value);
      inputElement.value = '';
    }
  });
    socket.on('chat message', (msg) => {
        const item = document.createElement('li');
        item.textContent = msg;
        messages.appendChild(item);
        window.scrollTo(0, document.body.scrollHeight);
    });
</script>
</body>
```

> [!NOTE]
> If you would like to use the local version of the client-side JS file, you can find it at **node_modules/socket.io/client-dist/socket.io.js.**
> You can also use a CDN instead of the local files (e.g. <script src="https://cdn.socket.io/4.8.1/socket.io.min.js"></script>).\
> Notice that I’m not specifying any URL when I call io(), since it defaults to trying to connect to the host that serves the page.\
> If you're behind a reverse proxy such as apache or nginx please take a look at the documentation for it.\
> If you're hosting your app in a folder that is not the root of your website (e.g., https://example.com/chatapp) then you also need to specify the path in both the server and the client.\

---

### BroadCasting
- The next goal is for us to emit the event from the server to the rest of the users.
- In order to send an event to everyone, Socket.IO gives us the **io.emit() method.**
- If you want to send a message to everyone except for a certain emitting socket, we have the **broadcast flag** for emitting from that socket:
```js
io.on('connection', (socket) => {
  socket.broadcast.emit('hi');
});
```
