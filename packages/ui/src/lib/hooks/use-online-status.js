"use strict";
exports.__esModule = true;
exports.useOnlineStatus = void 0;
var react_1 = require("react");
var use_event_listener_1 = require("./use-event-listener");
var useOnlineStatus = function () {
    var _a = (0, react_1.useState)(navigator.onLine), online = _a[0], setOnline = _a[1];
    (0, use_event_listener_1.useEventListener)('online', function () { return setOnline(navigator.onLine); });
    (0, use_event_listener_1.useEventListener)('offline', function () { return setOnline(navigator.onLine); });
    return online;
};
exports.useOnlineStatus = useOnlineStatus;
