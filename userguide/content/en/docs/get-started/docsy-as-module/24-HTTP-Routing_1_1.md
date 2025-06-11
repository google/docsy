### Routing 
- <mark>req.url</mark> gives us the query string
- we can use it with if statment to respond differently
- <mark>req.method</mark> also help you to route properly
- a combination of both req.url and req.method allows you to handle routing effectively
```js
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, "Content-Type": "text/plain")
        res.end("home page")
    } else if (req.url === "/about"){
        res.writeHead(200, "Content-Type": "text/plain")
        res.end("about page")
    } else if (req.url === "/api"){
        res.writeHead(200, "Content-Type": "application/json")
        res.end(JSON.stringfy({name: "mostafa Abokhadra"}))
    } else {
        res.writeHead(404)
        res.end("page not found")
    }
})
```

in a real world application we will rely on a web Framework to do the routing