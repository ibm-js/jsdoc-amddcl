/** @module sampleframework/Base0 */
define(["dcl/dcl"], function (dcl) {
	/**
	 * Foo event. Dispached in some conditions.
	 * @event module:sampleframework/Base0#event-foo
	 * @property {number} value1 - First value.
	 * @property {number} value2- Second value.
	 */
	
	
	/**
	 * A sample base widget class.
	 * @class module:sampleframework/Base0
	 */
	var Base0 = dcl(null, /** @lends module:sampleframework/Base0# */ {
		/**
		 * Description for {@link module:sampleframework/Base0#createdCallback sampleframework/Base0#createdCallback}.
		 * @method
		 */
		createdCallback: dcl.before(function () {
			console.log("module:sampleframework/Base0#createdCallback called.");
		}),

		/**
		 * Description for {@link module:sampleframework/Base0#_protectedProp sampleframework/Base0#_protectedProp}.
		 * @type {Number}
		 * @protected
		 */
		_protectedProp: 0,

		/**
		 * Description for {@link module:sampleframework/Base0#_privateProp sampleframework/Base0#_privateProp}.
		 * @type {Number}
		 */
		_privateProp: 0,

		/**
		 * Description for {@link module:sampleframework/Base0#methodOfBaseCommon sampleframework/Base0#methodOfBaseCommon}.
		 */
		methodOfBaseCommon: function () {
			console.log("module:sampleframework/Base0#methodOfBaseCommon called.");
		},

		/**
		 * Description for {@link module:sampleframework/Base0#methodOfBase0 sampleframework/Base0#methodOfBase0}.
		 */
		methodOfBase0: function () {
			console.log("module:sampleframework/Base0#methodOfBase0 called.");
		},
		
		/**
		 * Description of emitFooEvent.
		 * @fires module:sampleframework/Base0#event-foo
		 */
		emitFooEvent: function () {
			// Some code that emits the event-foo event.
		}
	});
	
	/**
	 * Description of a static method.
	 * @function aStaticMethod
	 * @memberOf module:sampleframework/Base0
	 * @param {string} a Description of the parameter a.
	 * @param {string} b Description of the parameter b.
	 * @returns {string} Description of the return type.
	 */
	Base0.aStaticMethod = function (a, b) {
		return a + b;
	};

	// Doing return dcl() prevents JSDoc from generating doclets for prototype methods/properties
	return Base0;
});
