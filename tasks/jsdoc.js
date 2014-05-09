module.exports = function (grunt) {
	"use strict";

	var path = require("path"),
		exec = require("child_process").exec;

	grunt.registerMultiTask("jsdoc-amddcl", "Run JSDoc", function () {
		var done = this.async();
		this.files.forEach(function (file) {
			file.dest && grunt.file.mkdir(path.dirname(file.dest));
		});
		grunt.util.async.forEach(this.files, function (file, callback) {
			if (file.imports) {
				process.env.JSDOC_IMPORT_ROOTS = file.imports.join(path.delimiter);
			}
			var args = [path.resolve(path.dirname(module.filename), "../node_modules/jsdoc/jsdoc.js")];
			file.args && args.push.apply(args, file.args);
			args.push.apply(args, file.src);
			var command = ["node"].concat(args).concat(file.dest ? ["> " + file.dest] : []).join(" ");
			grunt.log.writeln(command);
			exec(command, function (err, stdout, stderr) {
				stdout && grunt.log.writeln(stdout);
				stderr && grunt.log.error(stderr);
				delete process.env.JSDOC_IMPORT_ROOTS;
				if (err) {
					grunt.log.error(err);
					callback(err);
				} else {
					callback();
				}
			});
		}, done);
	});
};
