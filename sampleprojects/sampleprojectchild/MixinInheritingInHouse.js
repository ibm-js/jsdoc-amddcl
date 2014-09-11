/** @module sampleprojectchild/MixinInheritingInHouse */
define([
	"dcl/dcl",
	"./Base0",
	"./Base1"
], function (dcl, Base0, Base1) {
	/**
	 * Sample widget class.
	 * @class module:sampleprojectchild/MixinInheritingInHouse
	 * @mixin
	 * @augments {module:sampleprojectchild/Base0}
	 * @augments {module:sampleprojectchild/Base1}
	 */
	return dcl([Base0, Base1], /** @lends module:sampleprojectchild/MixinInheritingInHouse# */ {
		/**
		 * Description
		 * for {@link module:sampleprojectchild/MixinInheritingInHouse#createdCallback sampleprojectchild/MixinInheritingInHouse#createdCallback}.
		 * @method
		 */
		createdCallback: dcl.before(function () {
			console.log("module:sampleprojectchild/MixinInheritingInHouse#createdCallback called.");
		})
	});
});
