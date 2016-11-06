'use strict';

var resizer = require('./resizer');
var pictures = require('./pictures');
var upload = require('./upload');

pictures();
resizer();
upload();
