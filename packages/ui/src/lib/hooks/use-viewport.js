"use strict";
exports.__esModule = true;
exports.useViewport = void 0;
var react_1 = require("react");
var use_event_listener_1 = require("./use-event-listener");
var ScreenOrientation;
(function (ScreenOrientation) {
    ScreenOrientation["PORTRAIT"] = "portrait";
    ScreenOrientation["LANDSCAPE"] = "landscape";
})(ScreenOrientation || (ScreenOrientation = {}));
var useViewport = function () {
    var getData = function () {
        var innerWidth = window.innerWidth, innerHeight = window.innerHeight;
        return {
            width: innerWidth,
            height: innerHeight,
            orientation: innerWidth > innerHeight ? ScreenOrientation.LANDSCAPE : ScreenOrientation.PORTRAIT
        };
    };
    var _a = (0, react_1.useState)(getData), data = _a[0], setData = _a[1];
    (0, use_event_listener_1.useEventListener)('resize', function () {
        setData(getData());
    });
    (0, react_1.useEffect)(function () {
        setData(getData());
    }, []);
    return data;
};
exports.useViewport = useViewport;
