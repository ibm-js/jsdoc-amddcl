/** @module sampleproject/MixinInheritingImported */
define([
	"dcl/dcl",
	"sampleframework/Base0",
	"sampleframework/Base1"
], function (dcl, Base0, Base1) {
	/**
	 * Sample widget class.
	 * @class module:sampleproject/MixinInheritingImported
	 * @mixin
	 * @augments {module:sampleframework/Base0}
	 * @augments {module:sampleframework/Base1}
	 */
	return dcl([Base0, Base1], /** @lends module:sampleproject/MixinInheritingImported# */ {
		/**
		 * Description
		 * for {@link module:sampleproject/MixinInheritingImported#createdCallback sampleproject/MixinInheritingImported#createdCallback}.
		 * @method
		 */
		createdCallback: dcl.before(function () {
			console.log("module:sampleproject/MixinInheritingImported#createdCallback called.");
		})
	});
});
