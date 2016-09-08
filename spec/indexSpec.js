const test = require('tape');
const rcc = require('../');

test('require-cache-control', function(t) {
  let snapshot = rcc.snapshot();
  t.equal(require('./fixtures/a')(), 0);
  t.equal(require('./fixtures/a')(), 1);
  t.equal(require('./fixtures/a')(), 2);

  rcc.restore(snapshot);
  t.equal(require('./fixtures/a')(), 0);
  rcc.restore(snapshot);
  t.equal(require('./fixtures/a')(), 0);
  rcc.restore(snapshot);
  t.equal(require('./fixtures/a')(), 0);
  t.end();
});
