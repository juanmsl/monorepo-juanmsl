"use strict";
exports.__esModule = true;
exports.useMediaQuery = void 0;
var react_1 = require("react");
var useMediaQuery = function (query) {
    var _a = (0, react_1.useState)(false), matches = _a[0], setMatches = _a[1];
    (0, react_1.useEffect)(function () {
        var media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        var listener = function () {
            setMatches(media.matches);
        };
        media.addEventListener('change', listener);
        return function () {
            media.removeEventListener('change', listener);
        };
    }, [matches, query]);
    return matches;
};
exports.useMediaQuery = useMediaQuery;
