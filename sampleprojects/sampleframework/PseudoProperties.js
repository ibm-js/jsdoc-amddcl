/** @module sampleframework/PseudoProperties */
define(["dcl/dcl"], function (dcl) {
	/**
	 * A sample abstract class with pseudo-properties.
	 * @class module:sampleframework/PseudoProperties
	 * @abstract
	 */
	var PseudoProperties = dcl(null, /** @lends module:sampleframework/PseudoProperties# */ {
		/**
		 * Doc of pseudo-property store1.
		 * @member {module:dstore/Store} module:sampleframework/PseudoProperties#store1
		 * @default null
		 */
		
		/**
		 * Doc of pseudo-property store2.
		 * @member {module:sampleframework/Base0} module:sampleframework/PseudoProperties#store2
		 * @default null
		 */
		
		/**
		 * Doc of pseudo-property store3.
		 * @member {string} module:sampleframework/PseudoProperties#store3
		 * @default null
		 */
	});

	// Doing return dcl() prevents JSDoc from generating doclets for prototype methods/properties
	return PseudoProperties;
});
