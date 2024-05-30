"use strict";
exports.__esModule = true;
exports.useFileReader = exports.FileTypeEnum = void 0;
var react_1 = require("react");
var helpers_1 = require("../helpers");
var FileTypeEnum;
(function (FileTypeEnum) {
    FileTypeEnum["PNG"] = "image/png";
    FileTypeEnum["PDF"] = "application/pdf";
})(FileTypeEnum = exports.FileTypeEnum || (exports.FileTypeEnum = {}));
var useFileReader = function (inputFiles) {
    var _a = (0, react_1.useState)([]), files = _a[0], setFiles = _a[1];
    (0, react_1.useEffect)(function () {
        var fileReaders = [];
        var isCancel = false;
        if (!Array.isArray(inputFiles) || inputFiles.length === 0) {
            setFiles([]);
        }
        else {
            var promises = inputFiles.map(function (file) {
                return new Promise(function (resolve, reject) {
                    var fileReader = new FileReader();
                    fileReaders.push(fileReader);
                    fileReader.onload = function (e) {
                        var _a;
                        if ((_a = e.target) === null || _a === void 0 ? void 0 : _a.result) {
                            resolve({
                                name: file.name,
                                size: file.size,
                                formatSize: (0, helpers_1.formatBytes)(file.size),
                                type: file.type,
                                url: e.target.result
                            });
                        }
                    };
                    fileReader.onabort = function () {
                        reject(new Error('File reading aborted'));
                    };
                    fileReader.onerror = function () {
                        reject(new Error('Failed to read file'));
                    };
                    fileReader.readAsDataURL(file);
                });
            });
            Promise.all(promises).then(function (files) {
                if (!isCancel) {
                    setFiles(files);
                }
            });
        }
        return function () {
            isCancel = true;
            fileReaders.forEach(function (fileReader) {
                if (fileReader.readyState === 1) {
                    fileReader.abort();
                }
            });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [helpers_1.formatBytes, inputFiles.length]);
    return files;
};
exports.useFileReader = useFileReader;
