/** @module sampleproject/Widget */
define([
	"dcl/dcl",
	"./Base0",
	"./Base1"
], function (dcl, Base0, Base1) {
	/**
	 * Sample widget class.
	 * @class module:sampleproject/Widget
	 * @augments {module:sampleframework/Base0}
	 * @augments {module:sampleframework/Base1}
	 */
	var Widget = dcl([Base0, Base1], /** @lends module:sampleproject/Widget# */ {
		/**
		 * Description for {@link module:sampleproject/Widget#createdCallback sampleproject/Widget#createdCallback}.
		 * @method
		 */
		createdCallback: dcl.before(function () {
			console.log("module:sampleproject/Widget#createdCallback called.");
		})
	});

	// Doing return dcl() prevents JSDoc from generating doclets for prototype methods/properties
	return Widget;
});
