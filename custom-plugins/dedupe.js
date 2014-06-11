'use strict';

exports.handlers = {
    processingComplete: function(e) {
        for (var table = {}, doclets = e.doclets, i = doclets.length - 1; i >= 0; --i) {
            if (doclets[i].memberof && !doclets[i].undocumented) {
                if (table[doclets[i].longname]) {
                    doclets.splice(i, 1);
                } else {
                    table[doclets[i].longname] = 1;
                }
            }
        }
    }
};
