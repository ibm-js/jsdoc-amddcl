'use strict';

exports.handlers = {
    processingComplete: function(e) {
        for (var table = {}, doclets = e.doclets, i = doclets.length - 1; i >= 0; --i) {
            if (doclets[i].memberof && /^_/.test(doclets[i].name) && !doclets[i].access) {
                doclets[i].access = 'private';
            }
        }
    }
};
