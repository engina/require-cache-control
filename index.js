'use strict';

module.exports.snapshot = function() {
  return Object.keys(require.cache);
};

module.exports.restore = function(snapshot) {
  var currentRequires = Object.keys(require.cache);
  var diff = currentRequires.filter(function(r) {
    return snapshot.indexOf(r) === -1;
  });
  diff.forEach(function(diff) {
    delete require.cache[diff];
  });
  return diff;
};
