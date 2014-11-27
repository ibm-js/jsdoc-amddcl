var request = require("https").request;
var fs = require("fs");

function getOptions(file) {
	return {
		hostname: "google-code-prettify.googlecode.com",
		path: "/svn/branches/release-4-Mar-2013/src/" + file,
		method: "GET",
		headers: {
			"user-agent": "nodejs"
		}
	};
}

var files = ["prettify.js", "lang-css.js"];
var dest = __dirname + "/templates/amddcl/static/scripts/prettify/";

fs.mkdirSync(dest);

files.forEach(function (file) {
	request(getOptions(file), function (res) {
		var statusCode = res.statusCode;
		if (statusCode === 404) {
			console.error("File " + file + " not found.");
		} else if (statusCode === 200) {
			var data = "";
			res.on("data", function (chunk) {
				data += chunk.toString();
			});

			res.on("end", function () {
				fs.writeFileSync(dest + file, data);
			});
		} else {
			console.error(file + ": " + "HTTP GET Error " + statusCode);
		}
	}).on("error", function (e) {
		console.error(e);
	}).end();
});
