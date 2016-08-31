# require-cache-control

[![Build status](https://img.shields.io/travis/engina/require-cache-control.svg?style=flat-square)](https://travis-ci.org/request/request)
[![Coverage](https://img.shields.io/codecov/c/github/engina/require-cache-control.svg?style=flat-square)](https://codecov.io/github/request/request?branch=master)

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
rcc.snapshot();
t.equal(require('./fixtures/a')(), 0); // a loads b
t.equal(require('./fixtures/a')(), 1); // a increments variable of b
t.equal(require('./fixtures/a')(), 2); // a increments variable of b again.
rcc.restore(); // all cache cleared
t.equal(require('./fixtures/a')(), 0); // a and b are both fresh
rcc.restore();
t.equal(require('./fixtures/a')(), 0); // a and b are both fresh
rcc.restore();
t.equal(require('./fixtures/a')(), 0); // a and b are both fresh
```
