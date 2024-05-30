"use strict";
exports.__esModule = true;
exports.useConstant = void 0;
var react_1 = require("react");
var useConstant = function (initializer) { return (0, react_1.useState)(initializer)[0]; };
exports.useConstant = useConstant;
