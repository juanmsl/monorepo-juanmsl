"use strict";
exports.__esModule = true;
exports.useModalInContainer = void 0;
var react_1 = require("react");
var use_event_listener_1 = require("./use-event-listener");
var use_on_click_outside_ref_1 = require("./use-on-click-outside-ref");
var getPositionObject = function (param) {
    return typeof param === 'number'
        ? {
            percentage: param,
            pixels: 0
        }
        : param;
};
var useModalInContainer = function (_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.offset, offset = _c === void 0 ? 5 : _c, _d = _b.position, position = _d === void 0 ? {
        x: {
            percentage: 0,
            pixels: 0
        },
        y: {
            percentage: 0,
            pixels: 0
        }
    } : _d;
    var _e = (0, react_1.useState)(false), isVisible = _e[0], setIsVisible = _e[1];
    var _f = (0, react_1.useState)({}), modalStyle = _f[0], setModalStyle = _f[1];
    var modalRef = (0, react_1.useRef)(null);
    var containerRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        document.documentElement.style.overflow = isVisible ? 'hidden' : 'auto';
    }, [isVisible]);
    (0, use_on_click_outside_ref_1.useOnClickOutsideRef)(modalRef, function () {
        if (isVisible) {
            setIsVisible(false);
        }
    });
    var positionX = (0, react_1.useMemo)(function () { return getPositionObject(position.x); }, [position.x]);
    var positionY = (0, react_1.useMemo)(function () { return getPositionObject(position.y); }, [position.y]);
    var getPosition = (0, react_1.useCallback)(function (modalRef) {
        var _a, _b;
        var modal = (_a = modalRef.current) === null || _a === void 0 ? void 0 : _a.getClientRects()[0];
        var container = (_b = containerRef.current) === null || _b === void 0 ? void 0 : _b.getClientRects()[0];
        if (!container || !modal) {
            setModalStyle({});
            return;
        }
        var x = container.x, y = container.y, width = container.width, height = container.height;
        var leftPosition = Math.round(x + width * (positionX.percentage / 100) + positionX.pixels);
        var topPosition = Math.round(y + height * (positionY.percentage / 100) + positionY.pixels);
        var nextStyles = {
            left: leftPosition + modal.width + offset > window.innerWidth
                ? container.left - (leftPosition + modal.width - window.innerWidth) - offset
                : leftPosition,
            top: topPosition + modal.height + offset > window.innerHeight
                ? container.top - (topPosition + modal.height - window.innerHeight) - offset
                : topPosition
        };
        setModalStyle(nextStyles);
    }, [offset, positionX.percentage, positionX.pixels, positionY.percentage, positionY.pixels]);
    var callback = (0, react_1.useCallback)(function () {
        if (isVisible) {
            getPosition(modalRef);
        }
    }, [getPosition, isVisible]);
    (0, react_1.useLayoutEffect)(callback, [callback]);
    (0, use_event_listener_1.useEventListener)('resize', callback);
    (0, use_event_listener_1.useEventListener)('scroll', callback, modalRef);
    return {
        isVisible: isVisible,
        setIsVisible: setIsVisible,
        modalStyle: modalStyle,
        containerRef: containerRef,
        modalRef: modalRef
    };
};
exports.useModalInContainer = useModalInContainer;
