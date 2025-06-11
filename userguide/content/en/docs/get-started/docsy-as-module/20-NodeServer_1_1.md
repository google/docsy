### Node server
- we create that using HTTP module
- http module also extends eventEmitter class
```js
const http = require ("node:http")
```
### createServer()
- it accepts a call back function
- the call back accept a request and a response
- the callback function is actually a request listener
- wherever a request reaches the server this callback will be executed
- the req argument has information about the encoming request
- the server response arg we use it to build the response that will be sent back to the client
- so node will handle the request and we have to write code to send back the response
- we also have to infrom our server to listen to any encoming requests, for that we store the server created using createServer() in a constant
- then on the server constant use listen mehtod passing to it a port number, optionally you can specify a call back function for when the server starts to listen
```js
const server = http.createServer((req, res)=>{
    res.writeHead(200) // adding statusCode
    res.end("hello world") // end the response with
})
server.listen(3000, () => {
    console.log(`server is running on port 3000`)
})
```
when you run this file it shows on the console "server is running on port 3000" and the program never exit, it waits for a request. for example go to your browser and type <mark>localhost:3000</mark>
- although it is not neccessary but it is a good practice to add the content type of your response
```js
res.writeHead(200, {"content-Type": "text/plain"})
```