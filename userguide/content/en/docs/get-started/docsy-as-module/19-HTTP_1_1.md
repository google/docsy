### how the web works
- computer connected to the internet are called clients and servers
- clients are internet-connected devices such as computers or mobile phones along with web-accessing software available on those devices such as web browser
- servers on the other hand are computers that store web pages, sites or apps
- when you type url on your web browser the client device request access to a web page
- a copy of that page is downloaded from the server and sent as a response to the client to be displayed in the web browser
- this model is popularly called <mark>client-server</mark> model
- but in what format is that data being transferred from and to the client? what if the request sent by the client can't be understood by the server or what if the response sent by the server can
t be understood by the client ? this where HTTP comes into picture

### HTTP
- htperText Transfer Protocol
- it's a protocol that defines a format for clients and servers to speak to each other
- the client sends an http request and the server respond with an HTTP response

### HTTP and Node
- we can create a web server using Node.js
- nodejs has access to operating system functionality like networking
- node has an event loop to run task asynchronously and is perfect for creating web servers that can simultaneously handle large volume of requests
- the node server we create should still respect the HTTP format
- the HTTP module allows creation of web servers that can transfer data over HTTP