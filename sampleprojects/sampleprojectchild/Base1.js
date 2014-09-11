/** @module sampleprojectchild/Base1 */
define(["dcl/dcl"], function (dcl) {
	/**
	 * Another sample base widget class.
	 * @class module:sampleprojectchild/Base1
	 */
	return dcl(null, /** @lends module:sampleprojectchild/Base1# */ {
		/**
		 * Description for {@link module:sampleprojectchild/Base1#createdCallback sampleprojectchild/Base1#createdCallback}.
		 * @method
		 */
		createdCallback: dcl.before(function () {
			console.log("module:sampleprojectchild/Base1#createdCallback called.");
		}),

		/**
		 * Description for {@link module:sampleprojectchild/Base1#methodOfBaseCommon sampleprojectchild/Base1#methodOfBaseCommon}.
		 */
		methodOfBaseCommon: function () {
			console.log("module:sampleprojectchild/Base1#methodOfBaseCommon called.");
		},

		/**
		 * Description for {@link module:sampleprojectchild/Base1#methodOfBase1 sampleprojectchild/Base1#methodOfBase1}.
		 */
		methodOfBase1: function () {
			console.log("module:sampleprojectchild/Base1#methodOfBase1 called.");
		}
	});
});
