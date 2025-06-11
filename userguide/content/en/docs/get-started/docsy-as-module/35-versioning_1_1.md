### version
- like when the latest version has a bug that has been overlooked my the maintainers, you can install earlier version untill latest version pug has been patched up
```bash
npm install upper-case@2.0.0
```

### semantic version (semVer)
- one of the most widely adopted vesioning systems
- a simple set of rules and requirements that dictate how version numbers are assingned and incremented
- it is crucial to keep a semantic and historical track of changes
- version numbers and the way they change convey meaning about the undelying code and what has been modified from one version to the next

### Format
#### X.Y.Z
- x stands for major version
- y for minor version
- z for patch

### versioning rules
- when you fix a bug and the code stays backwards-compatible you increment the patch version e:g <mark>1.1.1</mark> to <makr>1.1.2</mark>
- when you add new functionality but the code still stays backwards-compatible you increment the minor version, you also reset the patch version to zero e:g <mark>1.1.1</mark> to <mark>1.2.0</mark>
- when you make changes and the code is no more backwards compatible, you increment the major version, you have to reset the minor and patch version to zero e:g <mark>1.1.1</mark> to <mark>2.0.0</mark>

### few more points
- semantic versioning always starts with 0.1.0
- 0.Y.Z (a major version of zero) is used for initial development
- when the code is production-ready, you increment to version 1.0.0
- even the simplest of changes has to be done with an increase  in the version number
