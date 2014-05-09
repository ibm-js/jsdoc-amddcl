'use strict';

var env = global.env,
    fs = require('fs'),
    path = require('path');

function findImports(dir) {
    return dir === env.pwd || !fs.existsSync(dir) ? [] :
        fs.readdirSync(dir).reduce(function (list, entry) {
            var stat,
                entryPath = path.join(dir, entry);
            try {
                stat = fs.statSync(entryPath);
            } catch (e) {}
            if (stat) {
                if (stat.isDirectory()) {
                    list.push.apply(list, findImports(entryPath));
                } else if (entry === 'doclets.json') {
                    list.push(entryPath);
                }
            }
            return list;
        }, []);
}

exports.handlers = {
    parseComplete: function(e) {
        (process.env.JSDOC_IMPORT_ROOTS ? process.env.JSDOC_IMPORT_ROOTS.split(path.delimiter) : [env.opts.destination]).forEach(function (root) {
            findImports(root).forEach(function (file) {
                var json = fs.readFileSync(file, 'utf8');
                if (json) {
                    JSON.parse(json).map(function (doclet) {
                        doclet.imported = true;
                        e.doclets.push(doclet);
                    });
                }
            });
        });
    }
};
