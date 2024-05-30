"use strict";
exports.__esModule = true;
exports.useOnClickOutsideRef = void 0;
var use_event_listener_1 = require("./use-event-listener");
var useOnClickOutsideRef = function (containerRef, callback) {
    (0, use_event_listener_1.useEventListener)('keydown', function (e) {
        if (e.key === 'Escape') {
            callback();
        }
    });
    (0, use_event_listener_1.useEventListener)('mousedown', function (event) {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
            callback();
        }
    });
};
exports.useOnClickOutsideRef = useOnClickOutsideRef;
