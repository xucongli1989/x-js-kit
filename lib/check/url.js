"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isHttp = isHttp;
exports.isHttps = isHttps;
exports.isHttpOrHttpsUrl = isHttpOrHttpsUrl;

var regexConst = _interopRequireWildcard(require("../constant/regex"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * url是否以【http://】开头
 */
function isHttp(url) {
  if (!url) {
    return false;
  }

  return regexConst.http.test(url.toLowerCase());
}
/**
 * url是否以【https://】开头
 */


function isHttps(url) {
  if (!url) {
    return false;
  }

  return regexConst.https.test(url.toLowerCase());
}
/**
 * url是否为http或https的地址
 */


function isHttpOrHttpsUrl(url) {
  if (!url) {
    return false;
  }

  return regexConst.httpOrHttps.test(url.toLowerCase());
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGVjay91cmwudHMiXSwibmFtZXMiOlsiaXNIdHRwIiwidXJsIiwicmVnZXhDb25zdCIsImh0dHAiLCJ0ZXN0IiwidG9Mb3dlckNhc2UiLCJpc0h0dHBzIiwiaHR0cHMiLCJpc0h0dHBPckh0dHBzVXJsIiwiaHR0cE9ySHR0cHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFFQTs7O0FBR08sU0FBU0EsTUFBVCxDQUFnQkMsR0FBaEIsRUFBNkI7QUFDaEMsTUFBSSxDQUFDQSxHQUFMLEVBQVU7QUFDTixXQUFPLEtBQVA7QUFDSDs7QUFDRCxTQUFPQyxVQUFVLENBQUNDLElBQVgsQ0FBZ0JDLElBQWhCLENBQXFCSCxHQUFHLENBQUNJLFdBQUosRUFBckIsQ0FBUDtBQUNIO0FBRUQ7Ozs7O0FBR08sU0FBU0MsT0FBVCxDQUFpQkwsR0FBakIsRUFBOEI7QUFDakMsTUFBSSxDQUFDQSxHQUFMLEVBQVU7QUFDTixXQUFPLEtBQVA7QUFDSDs7QUFDRCxTQUFPQyxVQUFVLENBQUNLLEtBQVgsQ0FBaUJILElBQWpCLENBQXNCSCxHQUFHLENBQUNJLFdBQUosRUFBdEIsQ0FBUDtBQUNIO0FBRUQ7Ozs7O0FBR08sU0FBU0csZ0JBQVQsQ0FBMEJQLEdBQTFCLEVBQXVDO0FBQzFDLE1BQUksQ0FBQ0EsR0FBTCxFQUFVO0FBQ04sV0FBTyxLQUFQO0FBQ0g7O0FBQ0QsU0FBT0MsVUFBVSxDQUFDTyxXQUFYLENBQXVCTCxJQUF2QixDQUE0QkgsR0FBRyxDQUFDSSxXQUFKLEVBQTVCLENBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJlZ2V4Q29uc3QgZnJvbSBcIi4uL2NvbnN0YW50L3JlZ2V4XCJcclxuXHJcbi8qKlxyXG4gKiB1cmzmmK/lkKbku6XjgJBodHRwOi8v44CR5byA5aS0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNIdHRwKHVybDogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXVybCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlZ2V4Q29uc3QuaHR0cC50ZXN0KHVybC50b0xvd2VyQ2FzZSgpKVxyXG59XHJcblxyXG4vKipcclxuICogdXJs5piv5ZCm5Lul44CQaHR0cHM6Ly/jgJHlvIDlpLRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0h0dHBzKHVybDogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXVybCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlZ2V4Q29uc3QuaHR0cHMudGVzdCh1cmwudG9Mb3dlckNhc2UoKSlcclxufVxyXG5cclxuLyoqXHJcbiAqIHVybOaYr+WQpuS4umh0dHDmiJZodHRwc+eahOWcsOWdgFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzSHR0cE9ySHR0cHNVcmwodXJsOiBzdHJpbmcpIHtcclxuICAgIGlmICghdXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVnZXhDb25zdC5odHRwT3JIdHRwcy50ZXN0KHVybC50b0xvd2VyQ2FzZSgpKVxyXG59Il19