"use strict";
exports.__esModule = true;
exports.timeBetween = exports.formatDate = void 0;
var moment_1 = require("moment/moment");
var formatDate = function (date) {
    return Date.parse(date) ? (0, moment_1["default"])(date, 'YYYY-MM-DD').format('MMM YYYY') : date;
};
exports.formatDate = formatDate;
var timeBetween = function (date_start, date_end) {
    var momentStart = (0, moment_1["default"])(date_start);
    return Date.parse(date_end) ? (0, moment_1["default"])(date_end).from(momentStart, true) : momentStart.fromNow();
};
exports.timeBetween = timeBetween;
