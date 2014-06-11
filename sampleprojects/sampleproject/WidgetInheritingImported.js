/** @module sampleproject/WidgetInheritingImported */
define([
	"dcl/dcl",
	"sampleframework/Base0",
	"sampleframework/Base1"
], function (dcl, Base0, Base1) {
	/**
	 * Sample widget class.
	 * @class module:sampleproject/WidgetInheritingImported
	 * @augments {module:sampleframework/Base0}
	 * @augments {module:sampleframework/Base1}
	 */
	return dcl([Base0, Base1], /** @lends module:sampleproject/WidgetInheritingImported# */ {
		/**
		 * Description
		 * for {@link module:sampleproject/WidgetInheritingImported#createdCallback sampleproject/WidgetInheritingImported#createdCallback}.
		 * @method
		 */
		createdCallback: dcl.before(function () {
			console.log("module:sampleproject/WidgetInheritingImported#createdCallback called.");
		})
	});
});
