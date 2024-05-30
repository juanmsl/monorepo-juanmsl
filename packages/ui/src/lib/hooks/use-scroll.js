"use strict";
exports.__esModule = true;
exports.useScroll = void 0;
var react_1 = require("react");
var useScroll = function () {
    var ref = (0, react_1.useRef)(null);
    var _a = (0, react_1.useState)([0, 0]), position = _a[0], setPosition = _a[1];
    (0, react_1.useEffect)(function () {
        var element = ref.current;
        var handleScroll = function () {
            if (!element)
                return;
            setPosition([element.scrollLeft, element.scrollTop]);
        };
        if (element) {
            element.addEventListener('scroll', handleScroll);
        }
        return function () {
            if (element) {
                element.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);
    return {
        ref: ref,
        position: position
    };
};
exports.useScroll = useScroll;
