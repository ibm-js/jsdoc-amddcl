/** @module sampleprojectchild/MixinInheritingImported */
define([
	"dcl/dcl",
	"sampleframework/Base0",
	"sampleproject/Base1"
], function (dcl, Base0, Base1) {
	/**
	 * Sample widget class.
	 * @class module:sampleprojectchild/MixinInheritingImported
	 * @mixin
	 * @augments {module:sampleframework/Base0}
	 * @augments {module:sampleproject/Base1}
	 */
	return dcl([Base0, Base1], /** @lends module:sampleprojectchild/MixinInheritingImported# */ {
		/**
		 * Description
		 * for {@link module:sampleprojectchild/MixinInheritingImported#createdCallback sampleprojectchild/MixinInheritingImported#createdCallback}.
		 * @method
		 */
		createdCallback: dcl.before(function () {
			console.log("module:sampleprojectchild/MixinInheritingImported#createdCallback called.");
		})
	});
});
