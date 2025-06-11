### Built-in Modules (core default)

#### some of the most common Built-in modules
1. Path
2. events
3. fs
4. stream
5. http

```js
const path = require("node:moduleName");
```
- prefix with <mark>node:</mark> to indicate that it's a built-in module
- node: is <mark>optional</mark>

### __filename and __dirname
- __filename is the path of current file
- __dirname is the path to dir for current file
```js
console.log(__filename)
console.log(__dirname)
```
