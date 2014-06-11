/** @module sampleproject/Base1 */
define(["dcl/dcl"], function (dcl) {
	/**
	 * Another sample base widget class.
	 * @class module:sampleproject/Base1
	 */
	return dcl(null, /** @lends module:sampleproject/Base1# */ {
		/**
		 * Description for {@link module:sampleproject/Base1#createdCallback sampleproject/Base1#createdCallback}.
		 * @method
		 */
		createdCallback: dcl.before(function () {
			console.log("module:sampleproject/Base1#createdCallback called.");
		}),

		/**
		 * Description for {@link module:sampleproject/Base1#methodOfBaseCommon sampleproject/Base1#methodOfBaseCommon}.
		 */
		methodOfBaseCommon: function () {
			console.log("module:sampleproject/Base1#methodOfBaseCommon called.");
		},

		/**
		 * Description for {@link module:sampleproject/Base1#methodOfBase1 sampleproject/Base1#methodOfBase1}.
		 */
		methodOfBase1: function () {
			console.log("module:sampleproject/Base1#methodOfBase1 called.");
		}
	});
});
