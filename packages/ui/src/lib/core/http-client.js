"use strict";
exports.__esModule = true;
exports.HttpClient = void 0;
var axios_1 = require("axios");
var HttpClient = /** @class */ (function () {
    function HttpClient(baseURL) {
        var _this = this;
        var _a;
        this.logout = function () { return localStorage.removeItem('token'); };
        this._token = (_a = localStorage.getItem('token')) !== null && _a !== void 0 ? _a : '';
        this._instance = axios_1["default"].create({
            baseURL: baseURL,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        this._instance.interceptors.request.use(function (req) {
            var token = _this.token;
            token !== null && req.headers.setAuthorization("Bearer ".concat(token));
            return req;
        });
        this._instance.interceptors.response.use(function (response) { return Promise.resolve(response); }, function (error) {
            error.response.status === 401 && _this.logout();
            Promise.reject(error);
        });
    }
    Object.defineProperty(HttpClient.prototype, "instance", {
        get: function () {
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HttpClient.prototype, "token", {
        get: function () {
            return this._token;
        },
        set: function (token) {
            this._token = token;
            localStorage.setItem('token', token);
        },
        enumerable: false,
        configurable: true
    });
    return HttpClient;
}());
exports.HttpClient = HttpClient;
