### crypto module
- provides cryptograph functionalities and use libuv threads pool for some of its method

```js
const crypto = require("node: crypto")
// password based key derivation function 2
// one of the popular ways to hash passwords bfore storing them
// it is a cpu consuming method and is offload to libuv
crypto.pbkdf2
```