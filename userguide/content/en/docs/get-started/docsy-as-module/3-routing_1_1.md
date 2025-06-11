### Routing
- Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).
- Each route can have one or more handler functions, which are executed when the route is matched.

#### syntax
```js
app.METHOD(PATH, HANDLER)
```
- app is an instance of express.
- METHOD is an HTTP request method, in lowercase.
- PATH is a path on the server.
- HANDLER is the function executed when the route is matched

### routes
```js
app.get('/', (req, res) => {
    // code
})
app.post('/signIn', (req, res) => {
    // code
})
app.put('/users/:id', (req, res) => {
    // code
})
app.delete('/users/:id', (req, res) => {
    // code
})
app.all('/someThing', (req, res) => {

}) // all http methods
```
### multiple handlers
- the routing methods can have more than one callback function as arguments. With multiple callback functions, it is important to provide next as an argument to the callback function and then call next() within the body of the function to hand off control to the next callback.
```js
app.get('/example/b', (req, res, next) => {
  console.log('the response will be sent by the next function ...')
  next()
}, (req, res) => {
  res.send('Hello from B!')
})
```
### array of handlers
```js
const cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}

const cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}

const cb2 = function (req, res) {
  res.send('Hello from C!')
}

app.get('/example/c', [cb0, cb1, cb2])
```

### combination of array and independent function
```js
app.get('/example/d', [cb0, cb1], (req, res, next) => {
  console.log('the response will be sent by the next function ...')
  next()
}, (req, res) => {
  res.send('Hello from D!')
})
```
### route paths
- Route paths can be strings, string patterns, or regular expressions.

### route parameters
- the captured values are populated in the <mark>req.params</mark>
```js
app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params)
})
```
- Route path: /users/:userId/books/:bookId
- Request URL: http://localhost:3000/users/34/books/8989
- req.params: { "userId": "34", "bookId": "8989" }

> [!NOTE]
> The name of route parameters must be made up of “word characters” ([A-Za-z0-9_]).

### app.route()
You can create chainable route handlers for a route path by using app.route()
```js
app.route('/book')
  .get((req, res) => {
    res.send('Get a random book')
  })
  .post((req, res) => {
    res.send('Add a book')
  })
  .put((req, res) => {
    res.send('Update the book')
  })
```
