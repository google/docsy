### writing middleware
- Express is a routing and middleware web framework
- An Express application is essentially a series of middleware function calls.
- Middleware functions are functions that have access to the <mark>request object</mark> (req), the <mark>response object</mark> (res), and the <mark>next</mark> function in the application’s request-response cycle
- The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware

**Middleware functions can perform the following tasks**:

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware in the stack.

If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging

middleware functions that return a Promise will call next(value) when they reject or throw an error. next will be called with either the rejected value or the thrown Error


### NOTES
- middleware is simply a function that get executed whenever a route get a request, it should call </mark>next()</mark>
- you use this middleware by specifying <mark>app.use(middlewareName)</mark> before the route you want the middleware to be executed before it
- if you write app.use(middleware) after the route it will never get executed as the route itself will end the req-res cycle

### example
```js
const express = require('express')
const app = express()

const requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

app.use(requestTime)

app.get('/', (req, res) => {
  let responseText = 'Hello World!<br>'
  responseText += `<small>Requested at: ${req.requestTime}</small>`
  res.send(responseText)
})

app.listen(3000)
```

**An Express application can use the following types of middleware:**
1. **Application-level middleware**
  - when the middleware executes with any request to the application
  - `server.use(middleware)`
2. **Router-level middleware**
  - a middleware that executes only with specific some end points requests
  - `router.use(middleware)`
3. **Built-in middleware**
```js
app.use(express.urlencoded({extended: true}))
app.use(express.static('public', options))
app.use(express.json())
```
  - for more advanced knoweledge
    - [express.static](https://expressjs.com/en/4x/api.html#express.static)
    - [express.json](https://expressjs.com/en/4x/api.html#express.json)
    - [express.urlencoded](https://expressjs.com/en/4x/api.html#express.urlencoded)
4. **Error-handling middleware**
5. **Third-party middleware**

### notes
- To skip the rest of the middleware functions of a router middlewares stack, call <mark>next('route')</mark> to pass control to the next route that matches the current route api

> ![IMPORTANT]
> - next('route') will work only in middleware functions that were loaded by using the app.METHOD() or router.METHOD() functions

In Express.js, `next()`, `next("route")`, and `next("router")` are used to control the flow of middleware and route handling functions, but each has a unique purpose:

### 1. **`next()`**
   - **Purpose**: Calls the next middleware or route handler in the stack for the current route or path.
   - **Usage**: Use `next()` when you want to pass control to the next middleware function in the sequence for further processing.
   - **Example**:
     ```javascript
     app.use((req, res, next) => {
       console.log("Middleware 1");
       next(); // Passes control to the next middleware or route handler
     });
     ```

### 2. **`next("route")`**
   - **Purpose**: Skips the current route handler and moves directly to the next route handler that matches the route path, regardless of middleware.
   - **Usage**: Only works within route handlers, not in standalone middleware. It’s useful for conditionally skipping specific routes or selectively applying different handlers.
   - **Example**:
     ```javascript
      app.get(
        "/example",
        (req, res, next) => {
          if (req.query.skip) next("route"); // Skip this handler if 'skip' is in the query
          else res.send("Handled by first handler");
        },
        (req, res) => {
          res.send("Handled by second handler");
        }
      );
     ```
     - **ex: 2**
     ```js
      app.get('/user/:id', (req, res, next) => {
        // if the user ID is 0, skip to the next route
        if (req.params.id === '0') next('route')
        // otherwise pass the control to the next middleware function in this stack
        else next()
      }, (req, res, next) => {
        // send a regular response
        res.send('regular')
      })
    // handler for the /user/:id path, which sends a special response
    app.get('/user/:id', (req, res, next) => {
      res.send('special')
    })
     ```
    - next('route') will pass the control to the next route that matches the current route api ignoring all remaining middlewares.
    - you should use it only in <mark>app.mehtod() or router.method()</mark> to work, not in a stand alone middleware
    - if you just specify <mark>next('route')</mark> in a route handler it will pass the control to the next route and then comeback again to the same handler that you called next('route') in, so be carful if your next route send a respond to the client, the function that called next('route') shouldn't to avoid error
    - if you want to handle this case you can simply <mark>return next('route')</mark>

    - **ex: 3**
      ```js
      // skip to next route middleware
      // notice because this is a standalone middleware we don't call next('route') here yet
      async function skipTONextRoute(req, res, next) {
          req.skip = 1
          console.log(
              "i am going to skip to the next route that matches the current route skipping all current route middlewares"
          )
          next()
      }
      module.exports = skipTONextRoute

      // home.js
      router.get('/', (req, res, next) => {
          if (req.skip === 1)
              return next('route')

          console.log("i'm now in home page")
          return res.status(200).json({"message": "welcome to home page"})
      })

      router.get('/', (req, res) => {
          return res.send("from second home handler")
      })
      // here the res.send comming from the second route handler will be sent to the client ignoring the rest of
      // the first route handler code e:i  console.log("i'm now in home page") etc..
      // that is because you specified "return" next('route')
      // if you just specify next('route') without "return" key word, the second route handler will send the response
      // to the client and then return back to the previous handler in which we called next('route') and will print
      // console.log("i'm now in home page"), but then attempt to send another respond to client which will result in an error
      ```

### 3. **`next("router")`**
   - **Purpose**: This skips to the next router in the stack. It is typically used in modular applications with `express.Router()` where you may have separate routers for different parts of the application.
   - **Usage**: It’s most effective when organizing applications into different routers (e.g., for API versioning or modules) and is rarely needed outside of complex setups.
   - **Example**:
     ```javascript
     const router = express.Router();

     router.use((req, res, next) => {
       if (someCondition) next("router"); // Skip to next router
       else next();
     });

     app.use("/api", router);
     ```

### Summary of Differences
- **`next()`** moves to the next function in the middleware stack for the current route.
- **`next("route")`** skips to the next matching route, ignoring any middleware functions in the current route’s stack.
- **`next("router")`** skips to the next router, useful in applications with multiple `express.Router()` instances.

These variations in `next()` provide granular control over how requests are processed and how middleware is applied across routes and routers.
