"use strict";
exports.__esModule = true;
exports.useDimensions = void 0;
var react_1 = require("react");
var use_event_listener_1 = require("./use-event-listener");
var useDimensions = function (ref) {
    var _a = (0, react_1.useState)({ width: 0, height: 0 }), dimensions = _a[0], setDimensions = _a[1];
    var getSize = function () {
        var _a, _b, _c, _d;
        setDimensions({
            width: (_b = (_a = ref.current) === null || _a === void 0 ? void 0 : _a.offsetWidth) !== null && _b !== void 0 ? _b : 0,
            height: (_d = (_c = ref.current) === null || _c === void 0 ? void 0 : _c.offsetHeight) !== null && _d !== void 0 ? _d : 0
        });
    };
    (0, use_event_listener_1.useEventListener)('resize', getSize);
    (0, react_1.useEffect)(getSize, [ref]);
    return dimensions;
};
exports.useDimensions = useDimensions;
