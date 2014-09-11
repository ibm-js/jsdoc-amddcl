/** @module sampleprojectchild/Base0 */
define(["dcl/dcl"], function (dcl) {
	/**
	 * A sample base widget class.
	 * @class module:sampleprojectchild/Base0
	 */
	return dcl(null, /** @lends module:sampleprojectchild/Base0# */ {
		/**
		 * Description for {@link module:sampleprojectchild/Base0#createdCallback sampleprojectchild/Base0#createdCallback}.
		 * @method
		 */
		createdCallback: dcl.before(function () {
			console.log("module:sampleprojectchild/Base0#createdCallback called.");
		}),

		/**
		 * Description for {@link module:sampleprojectchild/Base0#methodOfBaseCommon sampleprojectchild/Base0#methodOfBaseCommon}.
		 */
		methodOfBaseCommon: function () {
			console.log("module:sampleprojectchild/Base0#methodOfBaseCommon called.");
		},

		/**
		 * Description for {@link module:sampleprojectchild/Base0#methodOfBase0 sampleprojectchild/Base0#methodOfBase0}.
		 */
		methodOfBase0: function () {
			console.log("module:sampleprojectchild/Base0#methodOfBase0 called.");
		}
	});
});
