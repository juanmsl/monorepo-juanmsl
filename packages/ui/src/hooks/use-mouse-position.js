"use strict";
exports.__esModule = true;
exports.useMousePosition = void 0;
var react_1 = require("react");
var use_event_listener_1 = require("./use-event-listener");
var useMousePosition = function () {
    var _a = (0, react_1.useState)({ x: 0, y: 0 }), _b = _a[0], x = _b.x, y = _b.y, setPosition = _a[1];
    var mouseMove = function (e) {
        var clientX = e.clientX, clientY = e.clientY;
        setPosition({ x: clientX, y: clientY });
    };
    (0, use_event_listener_1.useEventListener)('mousemove', mouseMove);
    (0, use_event_listener_1.useEventListener)('mouseleave', mouseMove);
    return [x, y];
};
exports.useMousePosition = useMousePosition;
