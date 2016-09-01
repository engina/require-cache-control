# require-cache-control

[![Build status](https://img.shields.io/travis/engina/require-cache-control.svg?style=flat-square)](https://travis-ci.org/engina/require-cache-control)
[![Coverage](https://img.shields.io/codecov/c/github/engina/require-cache-control.svg?style=flat-square)](https://codecov.io/github/engina/require-cache-control)

Let's you take a snapshot of the current require cache and restore it at will. This is useful if you want to test some files repeatadly in a single process.

Imagine you have a gulp process running and your testing plugin uses require() to test the files. After the first require, you won't be able to re-test your files because of the require cache.

This is the case with [gulp-tape](https://github.com/yuanqing/gulp-tape), it uses [require-uncached](https://github.com/sindresorhus/require-uncached) to freshly load *the* the test files to work around this problem. The problem is require-uncached does not take care of subsequent requires. It only freshly loads the file that is given to it, if the file itself requires other files, they will be cached and won't be fresh.

## Install
-------
```
npm install require-cache-control
```

## Usage
-----
```javascript
const rcc = require('require-cache-control');

// Assuming `tests` is a collection containing file names
for (let test of tests) {
  // Capture the state of the require cache§
  rcc.snapshot();
  require(test);
  // Restore to the captured state
  // `test` itself and all the require()s made by it will be removed from cache
  rcc.restore(); 
}
```
