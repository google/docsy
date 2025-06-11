### Basic nodejs web server
```js
const { createServer } = require('node:http'); // cjs
// or
import { createServer } from 'node:http'; // mjs

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

```
To run this snippet, save it as a server.js file and run node server.js in your terminal. If you use mjs version of the code, you should save it as a server.mjs file and run node server.mjs in your terminal.

1. first we import nodejs **http** module
2. creaateServer() create new http server and returns it
3. The server is set to listen on the specified port and host name. When the server is ready, the callback function is called, in this case informing us that the server is running.
4. we set the statusCode property to 200, to indicate a successful response.
5. we close the response, adding the content as an argument to end()

Whenever a new request is received, the request event is called, providing two objects: a request (an http.IncomingMessage object) and a response (an http.ServerResponse object).

Those 2 objects are essential to handle the HTTP call.

The first provides the request details. In this simple example, this is not used, but you could access the request headers and request data.

The second is used to return data to the caller.

> [!IMPORTANT]
> prerequisite
>
> https://nodejs.org/en/learn/getting-started/how-much-javascript-do-you-need-to-know-to-use-nodejs