### import export patterns

1. **single function**
```js
module.exports = functionName;
```
2. **single function short**
```js
module.exports = (a, b) {
    return a + b
}
// then const add = require('./add')
```
3. **more than one function**
```js
// math.js
module.exports = {
    add: add,
    subtract: subtract
}
```
in latest ECMA you can just specify the function name if the key and the value are the same
```js
// math.js
module.exports = {
    add,
    subtract
}
// index.js
const math = requrire("./math")
math.add()
math.subtract()
```
> [!NOTE]
> when we use module.exports we basically attaching properties to export object that exists on every module

4. **destructing the functions from the moudle**
```js
const math = require("./math")
const {add, subtract} = math;
add()
subtract()
```
```js
// math.js
module.exports.add = (a, b) => {}
module.exports.subtract = (a, b){}
// index.js
const math = require("./math")
const {add, sub} = math
```

5. **using just export**
```js
exports.add = (a, b) => {}
// stick wiht module.exports better
```
> [!caution]
> don't use export alone, always use <mark>module.exports</mark>
[see why here](https://youtu.be/ghUIlSNRru0?si=kVFBjdb-FyVUZTsd)

### sum
- in common js each file is treated as a module
- variables, functions, classes, etc. are not accessible to other files by default
- explicitly tell the modules system which parts of your code should be exported via moudle.exports or exports
- to import code into a file, use the requires() function

### Ref
- [codeevolution](https://www.youtube.com/watch?v=LAUi8pPlcUM&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&pp=iAQB) videos 6 - 15
