/** @module sampleprojectchild/WidgetInheritingImported */
define([
	"dcl/dcl",
	"sampleframework/Base0",
	"sampleproject/Base1"
], function (dcl, Base0, Base1) {
	/**
	 * Sample widget class.
	 * @class module:sampleprojectchild/WidgetInheritingImported
	 * @augments {module:sampleframework/Base0}
	 * @augments {module:sampleproject/Base1}
	 */
	return dcl([Base0, Base1], /** @lends module:sampleprojectchild/WidgetInheritingImported# */ {
		/**
		 * Description
		 * for {@link module:sampleprojectchild/WidgetInheritingImported#createdCallback sampleprojectchild/WidgetInheritingImported#createdCallback}.
		 * @method
		 */
		createdCallback: dcl.before(function () {
			console.log("module:sampleprojectchild/WidgetInheritingImported#createdCallback called.");
		})
	});
});
