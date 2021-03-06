/**
  A Transition is a thennable (a promise-like object) that represents
  an attempt to transition to another route. It can be aborted, either
  explicitly via `abort` or by attempting another transition while a
  previous one is still underway. An aborted transition can also
  be `retry()`d later.

  @class Transition
  @constructor
  @param {Object} router
  @param {Object} intent
  @param {Object} state
  @param {Object} error
  @public
*/

/**
  The Transition's internal promise. Calling `.then` on this property
  is that same as calling `.then` on the Transition object itself, but
  this property is exposed for when you want to pass around a
  Transition's promise, but not the Transition object itself, since
  Transition object can be externally `abort`ed, while the promise
  cannot.

  @property promise
  @type {Object}
  @public
  */

/**
  Custom state can be stored on a Transition's `data` object.
  This can be useful for decorating a Transition within an earlier
  hook and shared with a later hook. Properties set on `data` will
  be copied to new transitions generated by calling `retry` on this
  transition.

  @property data
  @type {Object}
  @public
*/

/**
  A standard promise hook that resolves if the transition
  succeeds and rejects if it fails/redirects/aborts.

  Forwards to the internal `promise` property which you can
  use in situations where you want to pass around a thennable,
  but not the Transition itself.

  @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise}
  @public
*/

/**

  Forwards to the internal `promise` property which you can
  use in situations where you want to pass around a thennable,
  but not the Transition itself.

  @method catch
  @param {Function} onRejection
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise}
  @public
*/

/**

  Forwards to the internal `promise` property which you can
  use in situations where you want to pass around a thennable,
  but not the Transition itself.

  @method finally
  @param {Function} callback
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise}
  @public
*/

/**
  Aborts the Transition. Note you can also implicitly abort a transition
  by initiating another transition while a previous one is underway.

  @method abort
  @return {Transition} this transition
  @public
*/

/**

  Retries a previously-aborted transition (making sure to abort the
  transition if it's still active). Returns a new transition that
  represents the new attempt to transition.

  @method retry
  @return {Transition} new transition
  @public
  */

/**

  Sets the URL-changing method to be employed at the end of a
  successful transition. By default, a new Transition will just
  use `updateURL`, but passing 'replace' to this method will
  cause the URL to update using 'replaceWith' instead. Omitting
  a parameter will disable the URL change, allowing for transitions
  that don't update the URL at completion (this is also used for
  handleURL, since the URL has already changed before the
  transition took place).

  @method method
  @param {String} method the type of URL-changing method to use
    at the end of a transition. Accepted values are 'replace',
    falsy values, or any other non-falsy value (which is
    interpreted as an updateURL transition).

  @return {Transition} this transition
  @public
*/

/**

  Fires an event on the current list of resolved/resolving
  handlers within this transition. Useful for firing events
  on route hierarchies that haven't fully been entered yet.

  Note: This method is also aliased as `send`

  @method trigger
  @param {Boolean} [ignoreFailure=false] a boolean specifying whether unhandled events throw an error
  @param {String} name the name of the event to fire
  @public
*/

/**
 * This property is a `RouteInfo` object that represents
 * where the router is transitioning to. It's important
 * to note that a `RouteInfo` is a linked list and this
 * property is simply represents leafmost route.
 * @property {RouteInfo} to
 * @public
 * @category ember-routing-router-service
 */

/**
 * This property is a `RouteInfo` object that represents
 * where transition originated from. It's important
 * to note that a `RouteInfo` is a linked list and this
 * property is simply represents head node of the list.
 * In the case of an initial render, from will be set to
 * `null`.
 * @property {RouteInfo} from
 * @public
 * @category ember-routing-router-service
 */

/**
  Transitions are aborted and their promises rejected
  when redirects occur; this method returns a promise
  that will follow any redirects that occur and fulfill
  with the value fulfilled by any redirecting transitions
  that occur.

  @method followRedirects
  @return {Promise} a promise that fulfills with the same
    value that the final redirecting transition fulfills with
  @public
*/
