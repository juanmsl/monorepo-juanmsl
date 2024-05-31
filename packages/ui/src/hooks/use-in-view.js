"use strict";
exports.__esModule = true;
exports.useInView = void 0;
var react_1 = require("react");
var useInView = function (initOptions) {
    if (initOptions === void 0) { initOptions = {}; }
    var _a = (0, react_1.useState)(false), inView = _a[0], setInView = _a[1];
    var ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var observer = new IntersectionObserver(function (_a) {
            var entry = _a[0];
            setInView(entry.isIntersecting);
        }, initOptions);
        ref.current && observer.observe(ref.current);
        return function () {
            observer.disconnect();
        };
    }, [initOptions]);
    return { ref: ref, inView: inView };
};
exports.useInView = useInView;
