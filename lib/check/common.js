"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEmail = isEmail;
exports.isAllEnglish = isAllEnglish;
exports.isAllNumber = isAllNumber;
exports.isCNMobile = isCNMobile;
exports.isChinaIDCard = isChinaIDCard;
exports.isAlphaNumericKeyCode = isAlphaNumericKeyCode;

var regexConst = _interopRequireWildcard(require("../constant/regex"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
/**
 * 判断是否为中国大陆身份证号码
 */


function isChinaIDCard(val) {
  return regexConst.chinaIDCard.test(val);
}
/**
 * 判断键盘按键的keyCode是否为字母和数字
 */


function isAlphaNumericKeyCode(keyCode) {
  return keyCode >= 65 && keyCode <= 90 || keyCode >= 48 && keyCode <= 57 || keyCode >= 96 && keyCode <= 105;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGVjay9jb21tb24udHMiXSwibmFtZXMiOlsiaXNFbWFpbCIsInZhbCIsInJlZ2V4Q29uc3QiLCJlbWFpbCIsInRlc3QiLCJpc0FsbEVuZ2xpc2giLCJhbGxFbmdsaXNoIiwiaXNBbGxOdW1iZXIiLCJhbGxOdW1iZXIiLCJpc0NOTW9iaWxlIiwiY25Nb2JpbGUiLCJpc0NoaW5hSURDYXJkIiwiY2hpbmFJRENhcmQiLCJpc0FscGhhTnVtZXJpY0tleUNvZGUiLCJrZXlDb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFFQTs7O0FBR08sU0FBU0EsT0FBVCxDQUFpQkMsR0FBakIsRUFBOEI7QUFDakMsU0FBT0MsVUFBVSxDQUFDQyxLQUFYLENBQWlCQyxJQUFqQixDQUFzQkgsR0FBdEIsQ0FBUDtBQUNIO0FBQ0Q7Ozs7O0FBR08sU0FBU0ksWUFBVCxDQUFzQkosR0FBdEIsRUFBbUM7QUFDdEMsU0FBT0MsVUFBVSxDQUFDSSxVQUFYLENBQXNCRixJQUF0QixDQUEyQkgsR0FBM0IsQ0FBUDtBQUNIO0FBQ0Q7Ozs7O0FBR08sU0FBU00sV0FBVCxDQUFxQk4sR0FBckIsRUFBa0M7QUFDckMsU0FBT0MsVUFBVSxDQUFDTSxTQUFYLENBQXFCSixJQUFyQixDQUEwQkgsR0FBMUIsQ0FBUDtBQUNIO0FBQ0Q7Ozs7O0FBR08sU0FBU1EsVUFBVCxDQUFvQlIsR0FBcEIsRUFBaUM7QUFDcEMsU0FBT0MsVUFBVSxDQUFDUSxRQUFYLENBQW9CTixJQUFwQixDQUF5QkgsR0FBekIsQ0FBUDtBQUNIO0FBQ0Q7Ozs7O0FBR08sU0FBU1UsYUFBVCxDQUF1QlYsR0FBdkIsRUFBb0M7QUFDdkMsU0FBT0MsVUFBVSxDQUFDVSxXQUFYLENBQXVCUixJQUF2QixDQUE0QkgsR0FBNUIsQ0FBUDtBQUNIO0FBQ0Q7Ozs7O0FBR08sU0FBU1kscUJBQVQsQ0FBK0JDLE9BQS9CLEVBQWdEO0FBQ25ELFNBQVFBLE9BQU8sSUFBSSxFQUFYLElBQWlCQSxPQUFPLElBQUksRUFBN0IsSUFBcUNBLE9BQU8sSUFBSSxFQUFYLElBQWlCQSxPQUFPLElBQUksRUFBakUsSUFBeUVBLE9BQU8sSUFBSSxFQUFYLElBQWlCQSxPQUFPLElBQUksR0FBNUc7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJlZ2V4Q29uc3QgZnJvbSBcIi4uL2NvbnN0YW50L3JlZ2V4XCJcclxuXHJcbi8qKlxyXG4gKiDliKTmlq3mmK/lkKbkuLplbWFpbFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1haWwodmFsOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiByZWdleENvbnN0LmVtYWlsLnRlc3QodmFsKTtcclxufVxyXG4vKipcclxuICog5Yik5pat5piv5ZCm5YWo5Li66Iux5paH5a2X56ym77yIYS16QS1a77yJXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNBbGxFbmdsaXNoKHZhbDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gcmVnZXhDb25zdC5hbGxFbmdsaXNoLnRlc3QodmFsKTtcclxufVxyXG4vKipcclxuICog5Yik5pat5piv5ZCm5YWo5Li65pWw5a2X5a2X56ym77yIMC0577yJXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNBbGxOdW1iZXIodmFsOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiByZWdleENvbnN0LmFsbE51bWJlci50ZXN0KHZhbCk7XHJcbn1cclxuLyoqXHJcbiAqIOWIpOaWreaYr+WQpuS4uuS4reWbveWkp+mZhuaJi+acuuWPt++8iOWPquiAg+iZkeS7pTHlvIDlpLTnmoQxMeS9jeaVsOWtl+WNs+WPr++8iVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQ05Nb2JpbGUodmFsOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiByZWdleENvbnN0LmNuTW9iaWxlLnRlc3QodmFsKVxyXG59XHJcbi8qKlxyXG4gKiDliKTmlq3mmK/lkKbkuLrkuK3lm73lpKfpmYbouqvku73or4Hlj7fnoIFcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0NoaW5hSURDYXJkKHZhbDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gcmVnZXhDb25zdC5jaGluYUlEQ2FyZC50ZXN0KHZhbClcclxufVxyXG4vKipcclxuICog5Yik5pat6ZSu55uY5oyJ6ZSu55qEa2V5Q29kZeaYr+WQpuS4uuWtl+avjeWSjOaVsOWtl1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQWxwaGFOdW1lcmljS2V5Q29kZShrZXlDb2RlOiBudW1iZXIpIHtcclxuICAgIHJldHVybiAoa2V5Q29kZSA+PSA2NSAmJiBrZXlDb2RlIDw9IDkwKSB8fCAoa2V5Q29kZSA+PSA0OCAmJiBrZXlDb2RlIDw9IDU3KSB8fCAoa2V5Q29kZSA+PSA5NiAmJiBrZXlDb2RlIDw9IDEwNSlcclxufSJdfQ==