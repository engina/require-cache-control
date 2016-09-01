'use strict';
var snapshot = [];

module.exports.snapshot = function() {
  snapshot = Object.keys(require.cache);
};

module.exports.restore = function() {
  var currentRequires = Object.keys(require.cache);
  var diff = currentRequires.filter(function(r) {
    return snapshot.indexOf(r) === -1;
  });
  diff.forEach(function(diff) {
    delete require.cache[diff];
  });
};
