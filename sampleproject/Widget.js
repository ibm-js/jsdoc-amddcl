/** @module sampleproject/Widget */
define([
	"dcl/dcl",
	"./Base0",
	"./Base1"
], function (dcl, Base0, Base1) {
	/**
	 * Sample widget class.
	 * @class module:sampleproject/Widget
	 * @augments {module:sampleproject/Base0}
	 * @augments {module:sampleproject/Base1}
	 */
	return dcl([Base0, Base1], /** @lends module:sampleproject/Widget# */ {
		/**
		 * Description for {@link module:sampleproject/Widget#createdCallback sampleproject/Widget#createdCallback}.
		 * @method
		 */
		createdCallback: dcl.before(function () {
			console.log("module:sampleproject/Widget#createdCallback called.");
		})
	});
});
