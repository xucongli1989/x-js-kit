"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isHttp = isHttp;
exports.isHttps = isHttps;
exports.isHttpOrHttpsUrl = isHttpOrHttpsUrl;

var regexConst = _interopRequireWildcard(require("../constant/regex"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGVjay91cmwudHMiXSwibmFtZXMiOlsiaXNIdHRwIiwidXJsIiwicmVnZXhDb25zdCIsImh0dHAiLCJ0ZXN0IiwidG9Mb3dlckNhc2UiLCJpc0h0dHBzIiwiaHR0cHMiLCJpc0h0dHBPckh0dHBzVXJsIiwiaHR0cE9ySHR0cHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUVBOzs7QUFHTyxTQUFTQSxNQUFULENBQWdCQyxHQUFoQixFQUE2QjtBQUNoQyxNQUFJLENBQUNBLEdBQUwsRUFBVTtBQUNOLFdBQU8sS0FBUDtBQUNIOztBQUNELFNBQU9DLFVBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsSUFBaEIsQ0FBcUJILEdBQUcsQ0FBQ0ksV0FBSixFQUFyQixDQUFQO0FBQ0g7QUFFRDs7Ozs7QUFHTyxTQUFTQyxPQUFULENBQWlCTCxHQUFqQixFQUE4QjtBQUNqQyxNQUFJLENBQUNBLEdBQUwsRUFBVTtBQUNOLFdBQU8sS0FBUDtBQUNIOztBQUNELFNBQU9DLFVBQVUsQ0FBQ0ssS0FBWCxDQUFpQkgsSUFBakIsQ0FBc0JILEdBQUcsQ0FBQ0ksV0FBSixFQUF0QixDQUFQO0FBQ0g7QUFFRDs7Ozs7QUFHTyxTQUFTRyxnQkFBVCxDQUEwQlAsR0FBMUIsRUFBdUM7QUFDMUMsTUFBSSxDQUFDQSxHQUFMLEVBQVU7QUFDTixXQUFPLEtBQVA7QUFDSDs7QUFDRCxTQUFPQyxVQUFVLENBQUNPLFdBQVgsQ0FBdUJMLElBQXZCLENBQTRCSCxHQUFHLENBQUNJLFdBQUosRUFBNUIsQ0FBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcmVnZXhDb25zdCBmcm9tIFwiLi4vY29uc3RhbnQvcmVnZXhcIlxyXG5cclxuLyoqXHJcbiAqIHVybOaYr+WQpuS7peOAkGh0dHA6Ly/jgJHlvIDlpLRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0h0dHAodXJsOiBzdHJpbmcpIHtcclxuICAgIGlmICghdXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVnZXhDb25zdC5odHRwLnRlc3QodXJsLnRvTG93ZXJDYXNlKCkpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiB1cmzmmK/lkKbku6XjgJBodHRwczovL+OAkeW8gOWktFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzSHR0cHModXJsOiBzdHJpbmcpIHtcclxuICAgIGlmICghdXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVnZXhDb25zdC5odHRwcy50ZXN0KHVybC50b0xvd2VyQ2FzZSgpKVxyXG59XHJcblxyXG4vKipcclxuICogdXJs5piv5ZCm5Li6aHR0cOaIlmh0dHBz55qE5Zyw5Z2AXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNIdHRwT3JIdHRwc1VybCh1cmw6IHN0cmluZykge1xyXG4gICAgaWYgKCF1cmwpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIHJldHVybiByZWdleENvbnN0Lmh0dHBPckh0dHBzLnRlc3QodXJsLnRvTG93ZXJDYXNlKCkpXHJcbn0iXX0=