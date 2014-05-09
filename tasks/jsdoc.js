module.exports = function (grunt) {
	"use strict";

	var fs = require("fs"),
		path = require("path"),
		spawn = require("child_process").spawn;

	/**
	 * Run the given command.
	 * @param {String} command The command to run.
	 * @param {Array} args The argument list for the command.
	 * @param {Object} [options]
	 *     If ignoreError property is true, error will be ignored.
	 *     If redirout property exists, stdout is redirected to that.
	 *     Also works as the options for child_process.spawn().
	 * @param {RunCallback} callback The callback function to run if the command ran successfully.
	 * @param {RunCallback} errback The callback function to run if the command failed.
	 * @returns {Object} The Node child process object.
	 */
	function run(command, args, options, callback, errback) {
		grunt.log.writeln([command].concat(args).join(" "));

		var failed,
			process = spawn(command, args, options);

		if (process.stdout) {
			if ((options || {}).redirout) {
				process.stdout.pipe(fs.createWriteStream(options.redirout));
			} else {
				process.stdout.on("data", function (data) {
					grunt.log.write(data);
				});
			}
		}

		process.stderr && process.stderr.on("data", function (data) {
			if (/^execvp\(\)/.test(data)) {
				var e = new Error("Failed to start child process.");
				(options || {}).ignoreError ? callback(e) : errback(e);
			} else {
				grunt.log.error(data);
			}
		});

		process.on("exit", function (code) {
			if (code && !(options || {}).ignoreError) {
				if (!failed) {
					failed = true;
					var e = new Error("Process exited with code: " + code);
					grunt.log.error(e);
					errback(e);
				}
			} else {
				callback(code);
			}
		});

		process.on("error", function (e) {
			grunt.log.error(e);
			if ((options || {}).ignoreError) {
				callback(e);
			} else if (!failed) {
				failed = true;
				errback(e);
			}
		});

		return process;
	}

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
			function finished() {
				delete process.env.JSDOC_IMPORT_ROOTS;
				callback.apply(this, arguments);
			}
			run("node", args, {redirout: file.dest}, finished, finished);
		}, done);
	});
};
