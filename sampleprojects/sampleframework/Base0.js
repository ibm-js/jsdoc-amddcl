/** @module sampleframework/Base0 */
define(["dcl/dcl"], function (dcl) {
	/**
	 * A sample base widget class.
	 * @class module:sampleframework/Base0
	 */
	var Base0 = dcl(null, /** @lends module:sampleframework/Base0# */ {
		/**
		 * Description for {@link module:sampleframework/Base0#createdCallback sampleframework/Base0#createdCallback}.
		 * @method
		 */
		createdCallback: dcl.before(function () {
			console.log("module:sampleframework/Base0#createdCallback called.");
		}),

		/**
		 * Description for {@link module:sampleframework/Base0#methodOfBaseCommon sampleframework/Base0#methodOfBaseCommon}.
		 */
		methodOfBaseCommon: function () {
			console.log("module:sampleframework/Base0#methodOfBaseCommon called.");
		},

		/**
		 * Description for {@link module:sampleframework/Base0#methodOfBase0 sampleframework/Base0#methodOfBase0}.
		 */
		methodOfBase0: function () {
			console.log("module:sampleframework/Base0#methodOfBase0 called.");
		}
	});

	// Doing return dcl() prevents JSDoc from generating doclets for prototype methods/properties
	return Base0;
});
