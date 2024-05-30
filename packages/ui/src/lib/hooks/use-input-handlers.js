"use strict";
exports.__esModule = true;
exports.useInputHandlers = void 0;
var react_1 = require("react");
var useInputHandlers = function (_a) {
    var _b = _a === void 0 ? {} : _a, onBlur = _b.onBlur, onFocus = _b.onFocus, onChange = _b.onChange;
    var _c = (0, react_1.useState)(false), isFocus = _c[0], setIsFocus = _c[1];
    var handleFocus = (0, react_1.useCallback)(function (e) {
        setIsFocus(true);
        onFocus && onFocus(e);
    }, [onFocus]);
    var handleBlur = (0, react_1.useCallback)(function (e) {
        setIsFocus(false);
        onBlur && onBlur(e);
    }, [onBlur]);
    var handleChange = (0, react_1.useCallback)(function (e) {
        var value = e.target.value;
        onChange && onChange(value);
    }, [onChange]);
    return {
        isFocus: isFocus,
        handlers: {
            onFocus: handleFocus,
            onBlur: handleBlur,
            onChange: handleChange
        }
    };
};
exports.useInputHandlers = useInputHandlers;
