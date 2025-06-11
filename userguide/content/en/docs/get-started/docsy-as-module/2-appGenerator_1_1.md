### application generator
Use the application generator tool, **express-generator**, to quickly create an application skeleton.
```bash
npx express-generator
```
the following creates an Express app named myapp. The app will be created in a folder named myapp in the current working directory and the view engine will be set to Pug:
```bash
express --view=pug myapp

create : myapp
create : myapp/package.json
create : myapp/app.js
create : myapp/public
create : myapp/public/javascripts
create : myapp/public/images
create : myapp/routes
create : myapp/routes/index.js
create : myapp/routes/users.js
create : myapp/public/stylesheets
create : myapp/public/stylesheets/style.css
create : myapp/views
create : myapp/views/index.pug
create : myapp/views/layout.pug
create : myapp/views/error.pug
create : myapp/bin
create : myapp/bin/www
```
then install dependencies
```bash
cd myapp
npm install
```
- on mac or linux
```bash
DEBUG=myapp:* npm start
```
