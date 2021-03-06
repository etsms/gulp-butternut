var hasLog = require('has-gulplog');
var each = require('lodash/fp/forEach');

var levels = ['debug', 'info', 'warn', 'error'];

each(function(level) {
    module.exports[level] = function() {
        if (hasLog()) {
            var log = require('gulplog');

            log[level].apply(log, arguments);
        }
    };
}, levels);