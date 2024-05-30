"use strict";
exports.__esModule = true;
exports.useSafeDispatch = void 0;
var react_1 = require("react");
var useSafeDispatch = function (dispatch) {
    var mounted = (0, react_1.useRef)(false);
    (0, react_1.useLayoutEffect)(function () {
        mounted.current = true;
        return function () {
            mounted.current = false;
        };
    }, []);
    return (0, react_1.useCallback)(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (mounted.current) {
            dispatch.apply(void 0, args);
        }
    }, [dispatch]);
};
exports.useSafeDispatch = useSafeDispatch;
