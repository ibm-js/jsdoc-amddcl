/** @module sampleprojectchild/Base0 */
define(["dcl/dcl"], function (dcl) {
	/**
	 * Foo-child event. Dispached in some conditions.
	 * @event module:sampleprojectchild/Base0#event-foo-child
	 * @property {number} value1 - First value.
	 * @property {number} value2- Second value.
	 */
	
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
		},
		
		/**
		 * Description of emitFooChildEvent.
		 * @fires module:sampleframework/Base0#event-foo-child
		 */
		emitFooChildEvent: function () {
			// Some code that emits the event-foo-child event.
		}
	});
});
