### more types of middleware

4. **Error-handling middleware**
> ![IMPORTANT]
> Error-handling middleware always takes four arguments. You must provide four arguments to identify it as an error-handling middleware function. Even if you don’t need to use the next object, you must specify it to maintain the signature. Otherwise, the next object will be interpreted as regular middleware and will fail to handle errors
```js
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
```
5. **Third-party middleware**
- Use third-party middleware to add functionality to Express apps.
- read [this](https://expressjs.com/en/resources/middleware.html)