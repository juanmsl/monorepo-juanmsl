"use strict";
exports.__esModule = true;
exports.useRenderCount = void 0;
var react_1 = require("react");
var useRenderCount = function () {
    var count = (0, react_1.useRef)(1);
    (0, react_1.useEffect)(function () {
        count.current++;
    });
    return count.current;
};
exports.useRenderCount = useRenderCount;
