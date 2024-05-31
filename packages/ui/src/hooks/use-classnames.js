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
exports.useClassNames = void 0;
var react_1 = require("react");
var useClassNames = function (classes) {
    return (0, react_1.useMemo)(function () {
        return Object.entries(classes)
            .reduce(function (compiledClassNames, _a) {
            var classname = _a[0], value = _a[1];
            return (value ? __spreadArray(__spreadArray([], compiledClassNames, true), [classname], false) : compiledClassNames);
        }, [])
            .join(' ');
    }, [classes]);
};
exports.useClassNames = useClassNames;
