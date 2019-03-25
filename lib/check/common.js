"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEmail = isEmail;
exports.isAllEnglish = isAllEnglish;
exports.isAllNumber = isAllNumber;
exports.isCNMobile = isCNMobile;
exports.isChinaIDCard = isChinaIDCard;

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
/**
 * 判断是否为中国大陆身份证号码
 */


function isChinaIDCard(val) {
  return regexConst.chinaIDCard.test(val);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGVjay9jb21tb24udHMiXSwibmFtZXMiOlsiaXNFbWFpbCIsInZhbCIsInJlZ2V4Q29uc3QiLCJlbWFpbCIsInRlc3QiLCJpc0FsbEVuZ2xpc2giLCJhbGxFbmdsaXNoIiwiaXNBbGxOdW1iZXIiLCJhbGxOdW1iZXIiLCJpc0NOTW9iaWxlIiwiY25Nb2JpbGUiLCJpc0NoaW5hSURDYXJkIiwiY2hpbmFJRENhcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQTs7O0FBR08sU0FBU0EsT0FBVCxDQUFpQkMsR0FBakIsRUFBOEI7QUFDakMsU0FBT0MsVUFBVSxDQUFDQyxLQUFYLENBQWlCQyxJQUFqQixDQUFzQkgsR0FBdEIsQ0FBUDtBQUNIO0FBQ0Q7Ozs7O0FBR08sU0FBU0ksWUFBVCxDQUFzQkosR0FBdEIsRUFBbUM7QUFDdEMsU0FBT0MsVUFBVSxDQUFDSSxVQUFYLENBQXNCRixJQUF0QixDQUEyQkgsR0FBM0IsQ0FBUDtBQUNIO0FBQ0Q7Ozs7O0FBR08sU0FBU00sV0FBVCxDQUFxQk4sR0FBckIsRUFBa0M7QUFDckMsU0FBT0MsVUFBVSxDQUFDTSxTQUFYLENBQXFCSixJQUFyQixDQUEwQkgsR0FBMUIsQ0FBUDtBQUNIO0FBQ0Q7Ozs7O0FBR08sU0FBU1EsVUFBVCxDQUFvQlIsR0FBcEIsRUFBaUM7QUFDcEMsU0FBT0MsVUFBVSxDQUFDUSxRQUFYLENBQW9CTixJQUFwQixDQUF5QkgsR0FBekIsQ0FBUDtBQUNIO0FBQ0Q7Ozs7O0FBR08sU0FBU1UsYUFBVCxDQUF1QlYsR0FBdkIsRUFBb0M7QUFDdkMsU0FBT0MsVUFBVSxDQUFDVSxXQUFYLENBQXVCUixJQUF2QixDQUE0QkgsR0FBNUIsQ0FBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcmVnZXhDb25zdCBmcm9tIFwiLi4vY29uc3RhbnQvcmVnZXhcIlxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreaYr+WQpuS4umVtYWlsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNFbWFpbCh2YWw6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHJlZ2V4Q29uc3QuZW1haWwudGVzdCh2YWwpO1xyXG59XHJcbi8qKlxyXG4gKiDliKTmlq3mmK/lkKblhajkuLroi7HmloflrZfnrKbvvIhhLXpBLVrvvIlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0FsbEVuZ2xpc2godmFsOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiByZWdleENvbnN0LmFsbEVuZ2xpc2gudGVzdCh2YWwpO1xyXG59XHJcbi8qKlxyXG4gKiDliKTmlq3mmK/lkKblhajkuLrmlbDlrZflrZfnrKbvvIgwLTnvvIlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0FsbE51bWJlcih2YWw6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHJlZ2V4Q29uc3QuYWxsTnVtYmVyLnRlc3QodmFsKTtcclxufVxyXG4vKipcclxuICog5Yik5pat5piv5ZCm5Li65Lit5Zu95aSn6ZmG5omL5py65Y+377yI5Y+q6ICD6JmR5LulMeW8gOWktOeahDEx5L2N5pWw5a2X5Y2z5Y+v77yJXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNDTk1vYmlsZSh2YWw6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHJlZ2V4Q29uc3QuY25Nb2JpbGUudGVzdCh2YWwpXHJcbn1cclxuLyoqXHJcbiAqIOWIpOaWreaYr+WQpuS4uuS4reWbveWkp+mZhui6q+S7veivgeWPt+eggVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQ2hpbmFJRENhcmQodmFsOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiByZWdleENvbnN0LmNoaW5hSURDYXJkLnRlc3QodmFsKVxyXG59Il19