'use strict';

var path = require('path');
var stripComments = require('strip-json-comments');
var readFile = require('./readFile');
var error = require('./error');

var readJSON = function () {
  var file = path.resolve.apply(null, arguments),
      content = readFile(file);

  if (!content) { return; }

  try { return JSON.parse(stripComments(content)); }
  catch (e) { return error('error parsing JSON:', file); }
};

module.exports = readJSON;
