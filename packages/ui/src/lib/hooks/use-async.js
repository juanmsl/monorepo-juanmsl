"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.useAsync = void 0;
var react_1 = require("react");
var use_safe_dispatch_1 = require("./use-safe-dispatch");
var asyncReducer = function (_state, action) {
    switch (action.type) {
        case 'pending': {
            return { status: 'pending', data: null, error: null };
        }
        case 'resolved': {
            return { status: 'resolved', data: action.data, error: null };
        }
        case 'rejected': {
            return { status: 'rejected', data: null, error: action.error };
        }
        default: {
            throw new Error("Unhandled action: ".concat(JSON.stringify(action)));
        }
    }
};
var useAsync = function (initialState) {
    var _a = (0, react_1.useReducer)(asyncReducer, __assign({ status: 'idle', data: null, error: null }, initialState)), asyncState = _a[0], unsafeDispatch = _a[1];
    var dispatch = (0, use_safe_dispatch_1.useSafeDispatch)(unsafeDispatch);
    var run = (0, react_1.useCallback)(function (promise) {
        dispatch({ type: 'pending' });
        promise.then(function (data) {
            dispatch({ type: 'resolved', data: data });
        }, function (error) {
            dispatch({ type: 'rejected', error: error });
        });
    }, [dispatch]);
    var setData = (0, react_1.useCallback)(function (data) { return dispatch({ type: 'resolved', data: data }); }, [dispatch]);
    var setError = (0, react_1.useCallback)(function (error) { return dispatch({ type: 'rejected', error: error }); }, [dispatch]);
    return (0, react_1.useMemo)(function () { return (__assign({ setData: setData, setError: setError, run: run }, asyncState)); }, [asyncState, run, setData, setError]);
};
exports.useAsync = useAsync;
