### Modules Scope
- each module has it's own private scope so there is not confilct when you use the same variable name in two different modules
- node js does that using IIFE (immediately invoked function expression), before a module's code is executed node js will wrap it with a function wrapper that provides module scope
```js
(function(){
    // module code actually live in here
})()
```
- you write `function(){}` then wrapped with parantheses `(function(){})` to convert it to function exepression, then adding `()` after the expression to immediately invoke it, then write your code inside the `{}`
- using IIFE node can execute each module with it's own private scope

**to specify parameter and pass arguments to IIFE**:
```js
(function(param1){
    console.log(param1) // hello
})("hello")
```

### Module wrapper
- before node js executing any modules it wapps it in an IIFE contains 5 parameters ``exports, require, module, __filename, __dirname``
```js
(function(exports, require, module, __filename, __dirname){
    // __filename is tha path to the current file
    // __dirname is tha path to the current working directory
    // require and exports are built in functions
    // module is a reference to the current module
})()
```

### Mdoule Caching
- when you require a moudle it get cached in require.cache, so when you try to import it again it's gonna use the previously imported module not the new one
```js
// file1.js
module.exports = new SuperHero("Batman");
// file2.js
const hero = require("./file1.js")
hero.setName = "NewName"
// now if you tried to import it again
const hero2 = require("./file1.js") 
```
the imoprted instance will still have newName as it's name not batman as the moudule is cached once it is imported, so don't export an instance import the class
