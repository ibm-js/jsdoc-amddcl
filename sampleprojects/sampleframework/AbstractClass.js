/** @module sampleframework/AbstractClass */
define(["dcl/dcl"], function (dcl) {
	/**
	 * A sample abstract class.
	 * @class module:sampleframework/AbstractClass
	 * @abstract
	 */
	var AbstractClass = dcl(null, /** @lends module:sampleframework/AbstractClass# */ {
		/**
		 * Description of prop1.
		 * @member {string}
		 * @default "vertical"
		 * @readonly
		 */
		prop1: "",
		
		/**
		 * Description for method1.
		 */
		method1: function () {
		}
	});

	// Doing return dcl() prevents JSDoc from generating doclets for prototype methods/properties
	return AbstractClass;
});
