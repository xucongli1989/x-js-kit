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
exports.hasChineseWord = hasChineseWord;

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
/**
 * 判断字符串中是否包含中文字符
 */


function hasChineseWord(str) {
  return regexConst.chineseChar.test(str);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGVjay9jb21tb24udHMiXSwibmFtZXMiOlsiaXNFbWFpbCIsInZhbCIsInJlZ2V4Q29uc3QiLCJlbWFpbCIsInRlc3QiLCJpc0FsbEVuZ2xpc2giLCJhbGxFbmdsaXNoIiwiaXNBbGxOdW1iZXIiLCJhbGxOdW1iZXIiLCJpc0NOTW9iaWxlIiwiY25Nb2JpbGUiLCJpc0NoaW5hSURDYXJkIiwiY2hpbmFJRENhcmQiLCJpc0FscGhhTnVtZXJpY0tleUNvZGUiLCJrZXlDb2RlIiwiaGFzQ2hpbmVzZVdvcmQiLCJzdHIiLCJjaGluZXNlQ2hhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNPLFNBQVNBLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQThCO0FBQ2pDLFNBQU9DLFVBQVUsQ0FBQ0MsS0FBWCxDQUFpQkMsSUFBakIsQ0FBc0JILEdBQXRCLENBQVA7QUFDSDtBQUNEO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0ksWUFBVCxDQUFzQkosR0FBdEIsRUFBbUM7QUFDdEMsU0FBT0MsVUFBVSxDQUFDSSxVQUFYLENBQXNCRixJQUF0QixDQUEyQkgsR0FBM0IsQ0FBUDtBQUNIO0FBQ0Q7QUFDQTtBQUNBOzs7QUFDTyxTQUFTTSxXQUFULENBQXFCTixHQUFyQixFQUFrQztBQUNyQyxTQUFPQyxVQUFVLENBQUNNLFNBQVgsQ0FBcUJKLElBQXJCLENBQTBCSCxHQUExQixDQUFQO0FBQ0g7QUFDRDtBQUNBO0FBQ0E7OztBQUNPLFNBQVNRLFVBQVQsQ0FBb0JSLEdBQXBCLEVBQWlDO0FBQ3BDLFNBQU9DLFVBQVUsQ0FBQ1EsUUFBWCxDQUFvQk4sSUFBcEIsQ0FBeUJILEdBQXpCLENBQVA7QUFDSDtBQUNEO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU1UsYUFBVCxDQUF1QlYsR0FBdkIsRUFBb0M7QUFDdkMsU0FBT0MsVUFBVSxDQUFDVSxXQUFYLENBQXVCUixJQUF2QixDQUE0QkgsR0FBNUIsQ0FBUDtBQUNIO0FBQ0Q7QUFDQTtBQUNBOzs7QUFDTyxTQUFTWSxxQkFBVCxDQUErQkMsT0FBL0IsRUFBZ0Q7QUFDbkQsU0FBUUEsT0FBTyxJQUFJLEVBQVgsSUFBaUJBLE9BQU8sSUFBSSxFQUE3QixJQUFxQ0EsT0FBTyxJQUFJLEVBQVgsSUFBaUJBLE9BQU8sSUFBSSxFQUFqRSxJQUF5RUEsT0FBTyxJQUFJLEVBQVgsSUFBaUJBLE9BQU8sSUFBSSxHQUE1RztBQUNIO0FBQ0Q7QUFDQTtBQUNBOzs7QUFDTyxTQUFTQyxjQUFULENBQXdCQyxHQUF4QixFQUFxQztBQUN4QyxTQUFPZCxVQUFVLENBQUNlLFdBQVgsQ0FBdUJiLElBQXZCLENBQTRCWSxHQUE1QixDQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByZWdleENvbnN0IGZyb20gXCIuLi9jb25zdGFudC9yZWdleFwiXHJcblxyXG4vKipcclxuICog5Yik5pat5piv5ZCm5Li6ZW1haWxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0VtYWlsKHZhbDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gcmVnZXhDb25zdC5lbWFpbC50ZXN0KHZhbClcclxufVxyXG4vKipcclxuICog5Yik5pat5piv5ZCm5YWo5Li66Iux5paH5a2X56ym77yIYS16QS1a77yJXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNBbGxFbmdsaXNoKHZhbDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gcmVnZXhDb25zdC5hbGxFbmdsaXNoLnRlc3QodmFsKVxyXG59XHJcbi8qKlxyXG4gKiDliKTmlq3mmK/lkKblhajkuLrmlbDlrZflrZfnrKbvvIgwLTnvvIlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0FsbE51bWJlcih2YWw6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHJlZ2V4Q29uc3QuYWxsTnVtYmVyLnRlc3QodmFsKVxyXG59XHJcbi8qKlxyXG4gKiDliKTmlq3mmK/lkKbkuLrkuK3lm73lpKfpmYbmiYvmnLrlj7fvvIjlj6rogIPomZHku6Ux5byA5aS055qEMTHkvY3mlbDlrZfljbPlj6/vvIlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0NOTW9iaWxlKHZhbDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gcmVnZXhDb25zdC5jbk1vYmlsZS50ZXN0KHZhbClcclxufVxyXG4vKipcclxuICog5Yik5pat5piv5ZCm5Li65Lit5Zu95aSn6ZmG6Lqr5Lu96K+B5Y+356CBXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNDaGluYUlEQ2FyZCh2YWw6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHJlZ2V4Q29uc3QuY2hpbmFJRENhcmQudGVzdCh2YWwpXHJcbn1cclxuLyoqXHJcbiAqIOWIpOaWremUruebmOaMiemUrueahGtleUNvZGXmmK/lkKbkuLrlrZfmr43lkozmlbDlrZdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0FscGhhTnVtZXJpY0tleUNvZGUoa2V5Q29kZTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gKGtleUNvZGUgPj0gNjUgJiYga2V5Q29kZSA8PSA5MCkgfHwgKGtleUNvZGUgPj0gNDggJiYga2V5Q29kZSA8PSA1NykgfHwgKGtleUNvZGUgPj0gOTYgJiYga2V5Q29kZSA8PSAxMDUpXHJcbn1cclxuLyoqXHJcbiAqIOWIpOaWreWtl+espuS4suS4reaYr+WQpuWMheWQq+S4reaWh+Wtl+esplxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGhhc0NoaW5lc2VXb3JkKHN0cjogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gcmVnZXhDb25zdC5jaGluZXNlQ2hhci50ZXN0KHN0cilcclxufVxyXG4iXX0=