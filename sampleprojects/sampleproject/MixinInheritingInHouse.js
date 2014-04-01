/** @module sampleproject/MixinInheritingInHouse */
define([
	"dcl/dcl",
	"./Base0",
	"./Base1"
], function (dcl, Base0, Base1) {
	/**
	 * Sample widget class.
	 * @class module:sampleproject/MixinInheritingInHouse
	 * @mixin
	 * @augments {module:sampleproject/Base0}
	 * @augments {module:sampleproject/Base1}
	 */
	var MixinInheritingInHouse = dcl([Base0, Base1], /** @lends module:sampleproject/MixinInheritingInHouse# */ {
		/**
		 * Description
		 * for {@link module:sampleproject/MixinInheritingInHouse#createdCallback sampleproject/MixinInheritingInHouse#createdCallback}.
		 * @method
		 */
		createdCallback: dcl.before(function () {
			console.log("module:sampleproject/MixinInheritingInHouse#createdCallback called.");
		})
	});

	// Doing return dcl() prevents JSDoc from generating doclets for prototype methods/properties
	return MixinInheritingInHouse;
});
