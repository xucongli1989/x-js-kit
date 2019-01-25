"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isHttpOrHttpsUrl = exports.isHttps = exports.isHttp = void 0;

var regexConst = _interopRequireWildcard(require("../constant/regex"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
 * url是否以【http://】开头
 */
var isHttp = function isHttp(url) {
  if (!url) {
    return false;
  }

  return regexConst.http.test(url.toLowerCase());
};
/**
 * url是否以【https://】开头
 */


exports.isHttp = isHttp;

var isHttps = function isHttps(url) {
  if (!url) {
    return false;
  }

  return regexConst.https.test(url.toLowerCase());
};
/**
 * url是否为http或https的地址
 */


exports.isHttps = isHttps;

var isHttpOrHttpsUrl = function isHttpOrHttpsUrl(url) {
  if (!url) {
    return false;
  }

  return regexConst.httpOrHttps.test(url.toLowerCase());
};

exports.isHttpOrHttpsUrl = isHttpOrHttpsUrl;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGVjay91cmwudHMiXSwibmFtZXMiOlsiaXNIdHRwIiwidXJsIiwicmVnZXhDb25zdCIsImh0dHAiLCJ0ZXN0IiwidG9Mb3dlckNhc2UiLCJpc0h0dHBzIiwiaHR0cHMiLCJpc0h0dHBPckh0dHBzVXJsIiwiaHR0cE9ySHR0cHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7QUFHTyxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxHQUFELEVBQWlCO0FBQ25DLE1BQUksQ0FBQ0EsR0FBTCxFQUFVO0FBQ04sV0FBTyxLQUFQO0FBQ0g7O0FBQ0QsU0FBT0MsVUFBVSxDQUFDQyxJQUFYLENBQWdCQyxJQUFoQixDQUFxQkgsR0FBRyxDQUFDSSxXQUFKLEVBQXJCLENBQVA7QUFDSCxDQUxNO0FBT1A7Ozs7Ozs7QUFHTyxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDTCxHQUFELEVBQWlCO0FBQ3BDLE1BQUksQ0FBQ0EsR0FBTCxFQUFVO0FBQ04sV0FBTyxLQUFQO0FBQ0g7O0FBQ0QsU0FBT0MsVUFBVSxDQUFDSyxLQUFYLENBQWlCSCxJQUFqQixDQUFzQkgsR0FBRyxDQUFDSSxXQUFKLEVBQXRCLENBQVA7QUFDSCxDQUxNO0FBT1A7Ozs7Ozs7QUFHTyxJQUFNRyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNQLEdBQUQsRUFBaUI7QUFDN0MsTUFBSSxDQUFDQSxHQUFMLEVBQVU7QUFDTixXQUFPLEtBQVA7QUFDSDs7QUFDRCxTQUFPQyxVQUFVLENBQUNPLFdBQVgsQ0FBdUJMLElBQXZCLENBQTRCSCxHQUFHLENBQUNJLFdBQUosRUFBNUIsQ0FBUDtBQUNILENBTE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByZWdleENvbnN0IGZyb20gXCIuLi9jb25zdGFudC9yZWdleFwiXHJcblxyXG4vKipcclxuICogdXJs5piv5ZCm5Lul44CQaHR0cDovL+OAkeW8gOWktFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGlzSHR0cCA9ICh1cmw6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKCF1cmwpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIHJldHVybiByZWdleENvbnN0Lmh0dHAudGVzdCh1cmwudG9Mb3dlckNhc2UoKSlcclxufVxyXG5cclxuLyoqXHJcbiAqIHVybOaYr+WQpuS7peOAkGh0dHBzOi8v44CR5byA5aS0XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaXNIdHRwcyA9ICh1cmw6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKCF1cmwpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIHJldHVybiByZWdleENvbnN0Lmh0dHBzLnRlc3QodXJsLnRvTG93ZXJDYXNlKCkpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiB1cmzmmK/lkKbkuLpodHRw5oiWaHR0cHPnmoTlnLDlnYBcclxuICovXHJcbmV4cG9ydCBjb25zdCBpc0h0dHBPckh0dHBzVXJsID0gKHVybDogc3RyaW5nKSA9PiB7XHJcbiAgICBpZiAoIXVybCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlZ2V4Q29uc3QuaHR0cE9ySHR0cHMudGVzdCh1cmwudG9Mb3dlckNhc2UoKSlcclxufSJdfQ==