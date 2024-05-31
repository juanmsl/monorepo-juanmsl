"use strict";
exports.__esModule = true;
exports.useToggle = void 0;
var react_1 = require("react");
var useToggle = function (defaultValue) {
    if (defaultValue === void 0) { defaultValue = false; }
    var _a = (0, react_1.useState)(defaultValue), value = _a[0], setValue = _a[1];
    var toggle = (0, react_1.useCallback)(function () {
        setValue(function (prev) { return !prev; });
    }, []);
    return [value, toggle, setValue];
};
exports.useToggle = useToggle;
