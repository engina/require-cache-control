# require-cache-control

[![Build status](https://img.shields.io/travis/engina/require-cache-control.svg?style=flat-square)](https://travis-ci.org/request/request)
[![Coverage](https://img.shields.io/codecov/c/github/engina/require-cache-control.svg?style=flat-square)](https://codecov.io/github/request/request?branch=master)

Let's you take a snapshot of the current require cache and restore it at will. This is useful if you want to test some files repeatadly in a single process.

Imagine you have a gulp process running and your testing plugin uses require() to test the files. After the first require, you won't be able to re-test your files because of the require cache.

There's [require-uncached](https://github.com/sindresorhus/require-uncached) that loads *the* file you are requiring but doesn't take care of subsequent requires. For instance, if you requireUncached('./a) and it requires './b', 'b' will stay in cache in the subsequent requireUncached('./a') calls. 

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
t.end();
```
