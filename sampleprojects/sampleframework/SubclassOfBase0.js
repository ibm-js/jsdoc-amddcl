/** @module sampleframework/SubclassOfBase0 */
define([
	"dcl/dcl",
	"./Base0",
	"./Base1"
], function (dcl, Base0) {
	/**
	 * Sample widget class.
	 * @class module:sampleframework/SubclassOfBase0
	 * @augments {module:sampleframework/Base0}
	 */
	return dcl([Base0], /** @lends module:sampleframework/SubclassOfBase0# */ {
	});
});
