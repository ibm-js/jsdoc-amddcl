module.exports = function (grunt) {
	var fs = require("fs"),
		exec = require("child_process").exec;

	grunt.registerMultiTask("jsdoc", "Run JSDoc", function () {
		var done = this.async(),
			exportTo = this.data.exportTo,
			command = "jsdoc" + (exportTo ? " -X" : "") + " -c ./conf.json " + this.files[0].src.join(" ") + (exportTo ? " > " + exportTo : "");

		if (exportTo) {
			var elements = exportTo.split("/");
			for (var i = 1, l = elements.length; i < l; ++i) {
				try {
					fs.mkdirSync(elements.slice(0, i).join("/"));
				} catch (e) {
					if (e.code !== "EEXIST") {
						throw e;
					}
				}
			}
		}

		grunt.log.writeln(command);

		exec(command, function (err, stdout, stderr) {
			stdout && grunt.log.writeln(stdout);
			stderr && grunt.log.error(stderr);
			if (err) {
				grunt.log.error(err);
				done(false);
			} else {
				done();
			}
		});
	});

	grunt.initConfig({
		jsdoc: {
			"sampleframework": {
				src: [
					"./sampleprojects/sampleframework",
					"./sampleprojects/sampleframework/README.md",
					"./sampleprojects/sampleframework/package.json"
				]
			},
			"sampleframework-export": {
				src: [
					"./sampleprojects/sampleframework",
					"./sampleprojects/sampleframework/README.md",
					"./sampleprojects/sampleframework/package.json"
				],
				exportTo: "./out/sampleframework/doclets.json"
			},
			"sampleproject": {
				src: [
					"./sampleprojects/sampleproject",
					"./sampleprojects/sampleproject/README.md",
					"./sampleprojects/sampleproject/package.json"
				]
			}
		}
	});
};
