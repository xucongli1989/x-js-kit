"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEmail = isEmail;
exports.isAllEnglish = isAllEnglish;
exports.isAllNumber = isAllNumber;
exports.isCNMobile = isCNMobile;

var regexConst = _interopRequireWildcard(require("../constant/regex"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
 * 判断是否为email
 */
function isEmail(val) {
  return regexConst.email.test(val);
}
/**
 * 判断是否全为英文字符（a-zA-Z）
 */


function isAllEnglish(val) {
  return regexConst.allEnglish.test(val);
}
/**
 * 判断是否全为数字字符（0-9）
 */


function isAllNumber(val) {
  return regexConst.allNumber.test(val);
}
/**
 * 判断是否为中国大陆手机号（只考虑以1开头的11位数字即可）
 */


function isCNMobile(val) {
  return regexConst.cnMobile.test(val);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGVjay9jb21tb24udHMiXSwibmFtZXMiOlsiaXNFbWFpbCIsInZhbCIsInJlZ2V4Q29uc3QiLCJlbWFpbCIsInRlc3QiLCJpc0FsbEVuZ2xpc2giLCJhbGxFbmdsaXNoIiwiaXNBbGxOdW1iZXIiLCJhbGxOdW1iZXIiLCJpc0NOTW9iaWxlIiwiY25Nb2JpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7QUFHTyxTQUFTQSxPQUFULENBQWlCQyxHQUFqQixFQUE4QjtBQUNqQyxTQUFPQyxVQUFVLENBQUNDLEtBQVgsQ0FBaUJDLElBQWpCLENBQXNCSCxHQUF0QixDQUFQO0FBQ0g7QUFDRDs7Ozs7QUFHTyxTQUFTSSxZQUFULENBQXNCSixHQUF0QixFQUFtQztBQUN0QyxTQUFPQyxVQUFVLENBQUNJLFVBQVgsQ0FBc0JGLElBQXRCLENBQTJCSCxHQUEzQixDQUFQO0FBQ0g7QUFDRDs7Ozs7QUFHTyxTQUFTTSxXQUFULENBQXFCTixHQUFyQixFQUFrQztBQUNyQyxTQUFPQyxVQUFVLENBQUNNLFNBQVgsQ0FBcUJKLElBQXJCLENBQTBCSCxHQUExQixDQUFQO0FBQ0g7QUFDRDs7Ozs7QUFHTyxTQUFTUSxVQUFULENBQW9CUixHQUFwQixFQUFpQztBQUNwQyxTQUFPQyxVQUFVLENBQUNRLFFBQVgsQ0FBb0JOLElBQXBCLENBQXlCSCxHQUF6QixDQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByZWdleENvbnN0IGZyb20gXCIuLi9jb25zdGFudC9yZWdleFwiXHJcblxyXG4vKipcclxuICog5Yik5pat5piv5ZCm5Li6ZW1haWxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0VtYWlsKHZhbDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gcmVnZXhDb25zdC5lbWFpbC50ZXN0KHZhbCk7XHJcbn1cclxuLyoqXHJcbiAqIOWIpOaWreaYr+WQpuWFqOS4uuiLseaWh+Wtl+espu+8iGEtekEtWu+8iVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQWxsRW5nbGlzaCh2YWw6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHJlZ2V4Q29uc3QuYWxsRW5nbGlzaC50ZXN0KHZhbCk7XHJcbn1cclxuLyoqXHJcbiAqIOWIpOaWreaYr+WQpuWFqOS4uuaVsOWtl+Wtl+espu+8iDAtOe+8iVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQWxsTnVtYmVyKHZhbDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gcmVnZXhDb25zdC5hbGxOdW1iZXIudGVzdCh2YWwpO1xyXG59XHJcbi8qKlxyXG4gKiDliKTmlq3mmK/lkKbkuLrkuK3lm73lpKfpmYbmiYvmnLrlj7fvvIjlj6rogIPomZHku6Ux5byA5aS055qEMTHkvY3mlbDlrZfljbPlj6/vvIlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0NOTW9iaWxlKHZhbDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gcmVnZXhDb25zdC5jbk1vYmlsZS50ZXN0KHZhbClcclxufSJdfQ==