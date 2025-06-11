### global packages
- installation of packages is local to our custom project, meaning we install it into the node_modules folder in the project
- some of npm packages are meant to be used as standalone appliacations, it meant to run form terminal and not used directly from code
- global packages is not listed as a dependencies of the project, so running npm install will not install the package, so they have to be installed by their own by every developer in the team
- to install global package `npm uninstall -g packageName`
- <mark>-g</mark> insturct npm to install the package globally in your system path, this allows us to run the command from command line regardeless where you run the command from
- nodemon is a popular global package