/** @module sampleproject/Base0 */
define(["dcl/dcl"], function (dcl) {
	/**
	 * A sample base widget class.
	 * @class module:sampleproject/Base0
	 */
	return dcl(null, /** @lends module:sampleproject/Base0# */ {
		/**
		 * Description for {@link module:sampleproject/Base0#createdCallback sampleproject/Base0#createdCallback}.
		 * @method
		 */
		createdCallback: dcl.before(function () {
			console.log("module:sampleproject/Base0#createdCallback called.");
		}),

		/**
		 * Description for {@link module:sampleproject/Base0#methodOfBaseCommon sampleproject/Base0#methodOfBaseCommon}.
		 */
		methodOfBaseCommon: function () {
			console.log("module:sampleproject/Base0#methodOfBaseCommon called.");
		},

		/**
		 * Description for {@link module:sampleproject/Base0#methodOfBase0 sampleproject/Base0#methodOfBase0}.
		 */
		methodOfBase0: function () {
			console.log("module:sampleproject/Base0#methodOfBase0 called.");
		}
	});
});
