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
			if (file.paths) {
				process.env.JSDOC_MODULE_PATHS = JSON.stringify(file.paths);
			}
			if (file.imports) {
				process.env.JSDOC_IMPORT_ROOTS = file.imports.join(path.delimiter);
			}
			if (file.packagePathFormat) {
				process.env.JSDOC_PACKAGE_PATH_FORMAT = file.packagePathFormat;
			}
			if (file.includeEventsInTOC) {
				process.env.INCLUDE_EVENTS_IN_TOC = file.includeEventsInTOC;
			}
			var args = [
				JSON.stringify(path.resolve(path.dirname(module.filename), "../node_modules/jsdoc/jsdoc.js")),
				"-c",
				"./node_modules/jsdoc-amddcl/conf.json"
			];
			file.args && args.push.apply(args, file.args.map(function (arg) {
				return JSON.stringify(arg);
			}));
			args.push.apply(args, file.src.map(function (file) {
				return JSON.stringify(file);
			}));
			var command = ["node"].concat(args).concat(file.dest ? ["> " + JSON.stringify(file.dest)] : []).join(" ");
			grunt.log.writeln(command);
			exec(command, function (err, stdout, stderr) {
				stdout && grunt.log.writeln(stdout);
				stderr && grunt.log.error(stderr);
				delete process.env.JSDOC_MODULE_PATHS;
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
