/** @module sampleframework/utils */
define([], function () {
	
	/**
	 * This is a module containing static utility functions.
	 * @example
	 * require["sampleframework/utils"], function(utils) {
	 *   utils.method1();
	 * };
	 */
	return /** @lends module:sampleframework/utils */ {
		
		/**
		 * Description of a static function.
		 * @param {string} a Description of the parameter a.
		 * @param {string} b Description of the parameter b.
		 * @returns {string} Description of the return type.
		 */
		method1: function (a, b) {
			return a + b;
		}
	};
});

