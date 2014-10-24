module.exports = function (grunt) {
	grunt.loadTasks("tasks");
	grunt.initConfig({
		"jsdoc-amddcl": {
			"sampleframework": {
				files: [
					{
						args: [
							"-c",
							"./conf.json"
						],
						src: [
							"./sampleprojects/sampleframework",
							"./sampleprojects/sampleframework/README.md",
							"./sampleprojects/sampleframework/package.json"
						],
						packagePathFormat: "${name}/docs/api/${version}"
					},
					{
						args: [
							"-X",
							"-c",
							"./conf.json"
						],
						src: [
							"./sampleprojects/sampleframework",
							"./sampleprojects/sampleframework/README.md",
							"./sampleprojects/sampleframework/package.json"
						],
						dest: "./out/sampleframework/doclets.json"
					}
				]
			},
			"sampleproject": {
				files: [
					{
						args: [
							"-c",
							"./conf.json"
						],
						src: [
							"./sampleprojects/sampleproject",
							"./sampleprojects/sampleproject/README.md",
							"./sampleprojects/sampleproject/package.json"
						],
						paths: {
							"sampleframework": "../../../../sampleframework/docs/api/0.1.0-dev/sampleframework"
						},
						imports: [
							"./out/sampleframework"
						],
						packagePathFormat: "${name}/docs/api/${version}"
					},
					{
						args: [
							"-X",
							"-c",
							"./conf.json"
						],
						src: [
							"./sampleprojects/sampleproject",
							"./sampleprojects/sampleproject/README.md",
							"./sampleprojects/sampleproject/package.json"
						],
						dest: "./out/sampleproject/doclets.json"
					}
				]
			},

			"sampleprojectchild": {
				files: [
					{
						args: [
							"-c",
							"./conf.json"
						],
						src: [
							"./sampleprojects/sampleprojectchild",
							"./sampleprojects/sampleprojectchild/README.md",
							"./sampleprojects/sampleprojectchild/package.json"
						],
						paths: {
							"sampleframework": "../../../../sampleframework/docs/api/0.1.0-dev/sampleframework",
							"sampleproject": "../../../../sampleproject/docs/api/0.1.0-dev/sampleproject"
						},
						imports: [
							"./out/sampleproject"
						],
						packagePathFormat: "${name}/docs/api/${version}",
						includeEventsInTOC: "false"
					},
					{
						args: [
							"-X",
							"-c",
							"./conf.json"
						],
						src: [
							"./sampleprojects/sampleprojectchild",
							"./sampleprojects/sampleprojectchild/README.md",
							"./sampleprojects/sampleprojectchild/package.json"
						],
						dest: "./out/sampleprojectchild/doclets.json"
					}
				]
			}
		}
	});
	grunt.registerTask("default", ["jsdoc-amddcl"]);
};
