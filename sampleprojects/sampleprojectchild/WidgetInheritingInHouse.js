/** @module sampleprojectchild/WidgetInheritingInHouse */
define([
	"dcl/dcl",
	"./Base0",
	"./Base1"
], function (dcl, Base0, Base1) {
	/**
	 * Sample widget class.
	 * @class module:sampleprojectchild/WidgetInheritingInHouse
	 * @augments {module:sampleprojectchild/Base0}
	 * @augments {module:sampleprojectchild/Base1}
	 */
	return dcl([Base0, Base1], /** @lends module:sampleprojectchild/WidgetInheritingInHouse# */ {
		/**
		 * Description
		 * for {@link module:sampleprojectchild/WidgetInheritingInHouse#createdCallback sampleprojectchild/WidgetInheritingInHouse#createdCallback}.
		 * @method
		 */
		createdCallback: dcl.before(function () {
			console.log("module:sampleprojectchild/WidgetInheritingInHouse#createdCallback called.");
		})
	});
});
