"use strict";
exports.__esModule = true;
exports.useDebounce = void 0;
var react_1 = require("react");
var useDebounce = function (value, delay) {
    if (delay === void 0) { delay = 500; }
    var _a = (0, react_1.useState)(value), debouncedValue = _a[0], setDebouncedValue = _a[1];
    (0, react_1.useEffect)(function () {
        var timer = setTimeout(function () { return setDebouncedValue(value); }, delay);
        return function () {
            clearTimeout(timer);
        };
    }, [value, delay]);
    return debouncedValue;
};
exports.useDebounce = useDebounce;
