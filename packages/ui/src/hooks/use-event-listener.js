"use strict";
exports.__esModule = true;
exports.useEventListener = void 0;
var react_1 = require("react");
function useEventListener(eventName, callback, element, options) {
    var callbackRef = (0, react_1.useRef)(callback);
    (0, react_1.useEffect)(function () {
        callbackRef.current = callback;
    }, [callback]);
    (0, react_1.useLayoutEffect)(function () {
        var _a;
        var targetElement = (_a = element === null || element === void 0 ? void 0 : element.current) !== null && _a !== void 0 ? _a : window;
        if (!(targetElement && targetElement.addEventListener))
            return;
        var listener = function (event) { return callbackRef.current(event); };
        targetElement.addEventListener(eventName, listener, options);
        return function () {
            targetElement.removeEventListener(eventName, listener, options);
        };
    }, [eventName, element, options]);
}
exports.useEventListener = useEventListener;
