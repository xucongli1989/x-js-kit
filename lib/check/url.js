"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isHttp = isHttp;
exports.isHttps = isHttps;
exports.isHttpOrHttpsUrl = isHttpOrHttpsUrl;

var regexConst = _interopRequireWildcard(require("../constant/regex"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGVjay91cmwudHMiXSwibmFtZXMiOlsiaXNIdHRwIiwidXJsIiwicmVnZXhDb25zdCIsImh0dHAiLCJ0ZXN0IiwidG9Mb3dlckNhc2UiLCJpc0h0dHBzIiwiaHR0cHMiLCJpc0h0dHBPckh0dHBzVXJsIiwiaHR0cE9ySHR0cHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBRUE7OztBQUdPLFNBQVNBLE1BQVQsQ0FBZ0JDLEdBQWhCLEVBQTZCO0FBQ2hDLE1BQUksQ0FBQ0EsR0FBTCxFQUFVO0FBQ04sV0FBTyxLQUFQO0FBQ0g7O0FBQ0QsU0FBT0MsVUFBVSxDQUFDQyxJQUFYLENBQWdCQyxJQUFoQixDQUFxQkgsR0FBRyxDQUFDSSxXQUFKLEVBQXJCLENBQVA7QUFDSDtBQUVEOzs7OztBQUdPLFNBQVNDLE9BQVQsQ0FBaUJMLEdBQWpCLEVBQThCO0FBQ2pDLE1BQUksQ0FBQ0EsR0FBTCxFQUFVO0FBQ04sV0FBTyxLQUFQO0FBQ0g7O0FBQ0QsU0FBT0MsVUFBVSxDQUFDSyxLQUFYLENBQWlCSCxJQUFqQixDQUFzQkgsR0FBRyxDQUFDSSxXQUFKLEVBQXRCLENBQVA7QUFDSDtBQUVEOzs7OztBQUdPLFNBQVNHLGdCQUFULENBQTBCUCxHQUExQixFQUF1QztBQUMxQyxNQUFJLENBQUNBLEdBQUwsRUFBVTtBQUNOLFdBQU8sS0FBUDtBQUNIOztBQUNELFNBQU9DLFVBQVUsQ0FBQ08sV0FBWCxDQUF1QkwsSUFBdkIsQ0FBNEJILEdBQUcsQ0FBQ0ksV0FBSixFQUE1QixDQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByZWdleENvbnN0IGZyb20gXCIuLi9jb25zdGFudC9yZWdleFwiXHJcblxyXG4vKipcclxuICogdXJs5piv5ZCm5Lul44CQaHR0cDovL+OAkeW8gOWktFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzSHR0cCh1cmw6IHN0cmluZykge1xyXG4gICAgaWYgKCF1cmwpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIHJldHVybiByZWdleENvbnN0Lmh0dHAudGVzdCh1cmwudG9Mb3dlckNhc2UoKSlcclxufVxyXG5cclxuLyoqXHJcbiAqIHVybOaYr+WQpuS7peOAkGh0dHBzOi8v44CR5byA5aS0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNIdHRwcyh1cmw6IHN0cmluZykge1xyXG4gICAgaWYgKCF1cmwpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIHJldHVybiByZWdleENvbnN0Lmh0dHBzLnRlc3QodXJsLnRvTG93ZXJDYXNlKCkpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiB1cmzmmK/lkKbkuLpodHRw5oiWaHR0cHPnmoTlnLDlnYBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0h0dHBPckh0dHBzVXJsKHVybDogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXVybCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlZ2V4Q29uc3QuaHR0cE9ySHR0cHMudGVzdCh1cmwudG9Mb3dlckNhc2UoKSlcclxufSJdfQ==