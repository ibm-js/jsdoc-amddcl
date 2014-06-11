/** @module sampleframework/Base1 */
define(["dcl/dcl"], function (dcl) {
	/**
	 * Another sample base widget class.
	 * @class module:sampleframework/Base1
	 */
	return dcl(null, /** @lends module:sampleframework/Base1# */ {
		/**
		 * Description for {@link module:sampleframework/Base1#createdCallback sampleframework/Base1#createdCallback}.
		 * @method
		 */
		createdCallback: dcl.before(function () {
			console.log("module:sampleframework/Base1#createdCallback called.");
		}),

		/**
		 * Description for {@link module:sampleframework/Base1#methodOfBaseCommon sampleframework/Base1#methodOfBaseCommon}.
		 */
		methodOfBaseCommon: function () {
			console.log("module:sampleframework/Base1#methodOfBaseCommon called.");
		},

		/**
		 * Description for {@link module:sampleframework/Base1#methodOfBase1 sampleframework/Base1#methodOfBase1}.
		 */
		methodOfBase1: function () {
			console.log("module:sampleframework/Base1#methodOfBase1 called.");
		}
	});
});
