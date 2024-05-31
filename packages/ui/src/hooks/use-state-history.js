"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.useStateHistory = void 0;
var react_1 = require("react");
function useStateHistory(initialState) {
    var _a = (0, react_1.useState)(initialState), state = _a[0], setState = _a[1];
    var _b = (0, react_1.useState)([]), history = _b[0], setHistory = _b[1];
    (0, react_1.useEffect)(function () {
        if (state !== undefined) {
            setHistory(function (prevHistory) { return __spreadArray(__spreadArray([], prevHistory, true), [state], false); });
        }
    }, [state]);
    return [state, setState, history];
}
exports.useStateHistory = useStateHistory;
