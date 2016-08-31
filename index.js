'use strict';
let snapshot = [];

module.exports.snapshot = function() {
  snapshot = Object.keys(require.cache);
};

module.exports.restore = function() {
  let currentRequires = Object.keys(require.cache);
  let diff = currentRequires.filter(r => snapshot.indexOf(r) === -1);
  diff.forEach(d => {
    delete require.cache[d];
  });
};
