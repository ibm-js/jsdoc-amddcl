'use strict';

var env = global.env,
    EMPTY_OBJECT = {},
    REGEXP_OBJECT_CONSTRUCTOR = /^\s*function Object\s*\(/;

function walk(value) {
    /* jshint eqnull: true */
    var converted = value;
    if (Array.isArray(value)) {
        converted = value.map(walk);
    } else if (typeof (value || EMPTY_OBJECT).postProcess === 'function' || value != null && REGEXP_OBJECT_CONSTRUCTOR.test(value.constructor + '')) {
        converted = {};
        for (var s in value) {
            if (value[s] != null) {
                converted[s] = walk(value[s]);
            }
        }
    }
    return converted;
}

exports.handlers = {
    processingComplete: function(e) {
        if (env.opts.explain) {
            e.doclets.forEach(function (doclet, i) {
                e.doclets[i] = walk(doclet);
            });
        }
    }
};
