/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   request-panel.html
 */

/// <reference path="../polymer/types/polymer-element.d.ts" />
/// <reference path="../request-editor/request-editor.d.ts" />
/// <reference path="../response-view/response-view.d.ts" />
/// <reference path="../events-target-behavior/events-target-behavior.d.ts" />
/// <reference path="../paper-progress/paper-progress.d.ts" />
/// <reference path="../paper-icon-button/paper-icon-button.d.ts" />

declare namespace UiElements {

  /**
   * A full request and response view for the Advanced REST client.
   *
   * ## Breaking changes in version 2
   *
   * - does not contain any logic responsible for making a request
   * - does not contain any logic responsible for request and response actions
   * - does not evaluate variables
   * - It only renders view for both request and response panels
   *
   * ## Styling
   *
   * `<request-panel>` provides the following custom properties and mixins for
   * styling:
   *
   * Custom property|Description|Default
   * ---------- | ------------------ | ------
   * `--request-panel`|Mixin applied to the element|`{}`
   * `--request-panel-progress-color` | Color of the progress bar | `#00A2DF`
   * `--request-panel-progress` | Mixin applied to the progress bar | `{}`
   */
  class RequestPanel extends
    ArcBehaviors.EventsTargetBehavior(
    Polymer.Element) {

    /**
     * A request object that is generated in request edtor.
     * It contains the following properties:
     * - url
     * - method
     * - headers
     * - payload
     * - queryModel
     * - pathModel
     */
    editorRequest: object|null|undefined;

    /**
     * Computed value. If true then the request is loading.
     * This resets each time the request status changes.
     */
    loading: boolean|null|undefined;

    /**
     * Created by the transport ARFC `request` object
     */
    request: object|null|undefined;

    /**
     * Created by the transport ARC `response` object.
     */
    response: object|null|undefined;

    /**
     * Computed value, true, when the response object is set.
     */
    readonly hasResponse: boolean|null|undefined;

    /**
     * Request and response meta data passed to the response view.
     * Keys:
     * - responseIsXhr (Boolean) - True if the response is made by the
     * Fetch or XHR api.
     * - loadingTime (Number) - Response full loading time. This information
     * is received from the transport library.
     * - timing {Object} - If the transport method is able to collect
     * detailed information about request timings then this value will
     * be set. It's the `timings` property from the HAR 1.2 spec.
     * - redirectsTiming (Array) - If the transport method is able to
     * collect detailed information about redirects timings then this value
     * will be set. It's a list of `timings` property from the HAR 1.2 spec.
     * - redirects (Array) - It will be set if the transport method can
     * generate information about redirections.
     * - sourceMessage (String) - Http message sent to the server.
     * This information should be available only in case of advanced
     * HTTP transport.
     */
    responseMeta: object|null|undefined;

    /**
     * Redirect URL for the OAuth2 authorization.
     * If can be also set by dispatching `oauth2-redirect-url-changed`
     * with `value` property on the `detail` object.
     */
    oauth2RedirectUri: string|null|undefined;

    /**
     * A flag indincating request error.
     */
    isErrorResponse: boolean|null|undefined;

    /**
     * An error object associated with the response when error.
     */
    responseError: object|null|undefined;

    /**
     * ID of latest request.
     * It is received from the `api-request-editor` when `api-request`
     * event is dispatched. When `api-response` event is handled
     * the id is compared and if match it dispays the result.
     *
     * This system allows to use different request panels on single app
     * and don't mix the results.
     */
    lastRequestId: String|Number|null;

    /**
     * When set it sets `eventsTarget` to itself and all editor event
     * listeners strats listening on this node.
     * This prohibits editors from getting data from the outside ot this
     * component.
     */
    boundEvents: boolean|null|undefined;

    /**
     * When set it renders editors in read only mode.
     */
    readonly: boolean|null|undefined;

    /**
     * Request editor UI state object.
     */
    editorState: object|null;
    _attachListeners(): void;
    _detachListeners(): void;

    /**
     * Computes if there is a reponse object.
     *
     * @param response ARC response objects
     */
    _computeHasResponse(response: object|null): Boolean|null;

    /**
     * A handler for the API call.
     *
     * @param e `api-request` event
     */
    _sendRequestHandler(e: CustomEvent|null): void;

    /**
     * Handler for the `abort-api-request` custom event.
     * Clears loading state and `lastRequestId` property.
     */
    _abortHandler(): void;

    /**
     * Handler for the `request-clear-state` custom event.
     * Clears loading state and `lastRequestId` property.
     */
    _clearHandler(): void;

    /**
     * Handler for the `api-response` custom event. Sets values on the response
     * panel when response is ready.
     */
    _apiResponseHandler(e: CustomEvent|null): void;

    /**
     * Propagate `api-response` detail object.
     *
     * @param data Event's detail object
     */
    _propagateResponse(data: object|null): void;

    /**
     * Updates value of the request URL from `url-change-action`
     * custom event.
     */
    _changeUrlHandler(e: Event|null): void;

    /**
     * Clears response panel.
     */
    clearResponse(): void;
    _boundEventsChanged(value: any): void;
  }
}

interface HTMLElementTagNameMap {
  "request-panel": UiElements.RequestPanel;
}
