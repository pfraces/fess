'use strict';

var error = function (data) {
  process.stderr.write(data + '\n');
};

module.exports = error;

