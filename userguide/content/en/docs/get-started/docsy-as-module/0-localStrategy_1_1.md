### Passport
- Passport is authentication middleware for Node.js.
- Extremely flexible and modular
- Passport can be dropped in to any Express-based web application.
- A comprehensive set of **strategies** support authentication using a username and password, Facebook, Twitter, and more.

### localStrategy
This strategy is used to authenticate users based on a username and password.
```bash
npm install passport
npm install passport-local
```
```js
const passport = require('passport')
const LocalStrategy = require('passport-local')
```

#### configure localStartegy
```js
// server.js
passport.use(new LocalStrategy(function verify(username, password, callBack) {
  // Placeholder for user verification logic
  // Call cb(null, user) if successful
  // Call cb(null, false, { message: 'Incorrect username or password.' }) if unsuccessful
}));

// router/auth.js
router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
}));
```

#### establicsh a session
```js
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store: new SQLiteStore({ db: 'sessions.db', dir: './var/db' })
}));
app.use(passport.authenticate('session'));
```
#### configure Passport to persist user information in the login session
```js
// routes/auth.js

passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    cb(null, { id: user.id, username: user.username });
  });
});

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});
```

### logout
```js
router.post('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});
```