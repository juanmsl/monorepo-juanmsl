"use strict";
exports.__esModule = true;
exports.useToggleValues = void 0;
var react_1 = require("react");
var useToggleValues = function (values, defaultIndex) {
    if (defaultIndex === void 0) { defaultIndex = 0; }
    var _a = (0, react_1.useState)(defaultIndex), index = _a[0], setIndex = _a[1];
    var toggle = (0, react_1.useCallback)(function (index) {
        setIndex(index !== undefined ? index : function (prev) { return (prev + 1) % values.length; });
    }, [values.length]);
    return [values[index], toggle];
};
exports.useToggleValues = useToggleValues;
