'use strict';

exports.handlers = {
    processingComplete: function(e) {
        var doclets = e.doclets.filter(function (doclet) {
            return doclet.kind === 'mixin';
        });
        doclets.forEach(function (doclet) {
            doclet.kind = 'class';
        });
        require('jsdoc/augment').addInherited(e.doclets);
        doclets.forEach(function (doclet) {
            doclet.kind = 'mixin';
        });
    }
};
