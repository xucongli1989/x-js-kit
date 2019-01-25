"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAllNumber = exports.isAllEnglish = exports.isEmail = void 0;

var regexConst = _interopRequireWildcard(require("../constant/regex"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
 * 判断是否为email
 */
var isEmail = function isEmail(val) {
  return regexConst.email.test(val);
};
/**
 * 判断是否全为英文字符（a-zA-Z）
 */


exports.isEmail = isEmail;

var isAllEnglish = function isAllEnglish(val) {
  return regexConst.allEnglish.test(val);
};
/**
 * 判断是否全为数字字符（0-9）
 */


exports.isAllEnglish = isAllEnglish;

var isAllNumber = function isAllNumber(val) {
  return regexConst.allNumber.test(val);
};

exports.isAllNumber = isAllNumber;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGVjay9jb21tb24udHMiXSwibmFtZXMiOlsiaXNFbWFpbCIsInZhbCIsInJlZ2V4Q29uc3QiLCJlbWFpbCIsInRlc3QiLCJpc0FsbEVuZ2xpc2giLCJhbGxFbmdsaXNoIiwiaXNBbGxOdW1iZXIiLCJhbGxOdW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7QUFHTyxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxHQUFELEVBQWlCO0FBQ3BDLFNBQU9DLFVBQVUsQ0FBQ0MsS0FBWCxDQUFpQkMsSUFBakIsQ0FBc0JILEdBQXRCLENBQVA7QUFDSCxDQUZNO0FBR1A7Ozs7Ozs7QUFHTyxJQUFNSSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDSixHQUFELEVBQWlCO0FBQ3pDLFNBQU9DLFVBQVUsQ0FBQ0ksVUFBWCxDQUFzQkYsSUFBdEIsQ0FBMkJILEdBQTNCLENBQVA7QUFDSCxDQUZNO0FBR1A7Ozs7Ozs7QUFHTyxJQUFNTSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDTixHQUFELEVBQWlCO0FBQ3hDLFNBQU9DLFVBQVUsQ0FBQ00sU0FBWCxDQUFxQkosSUFBckIsQ0FBMEJILEdBQTFCLENBQVA7QUFDSCxDQUZNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcmVnZXhDb25zdCBmcm9tIFwiLi4vY29uc3RhbnQvcmVnZXhcIlxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreaYr+WQpuS4umVtYWlsXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaXNFbWFpbCA9ICh2YWw6IHN0cmluZykgPT4ge1xyXG4gICAgcmV0dXJuIHJlZ2V4Q29uc3QuZW1haWwudGVzdCh2YWwpO1xyXG59XHJcbi8qKlxyXG4gKiDliKTmlq3mmK/lkKblhajkuLroi7HmloflrZfnrKbvvIhhLXpBLVrvvIlcclxuICovXHJcbmV4cG9ydCBjb25zdCBpc0FsbEVuZ2xpc2ggPSAodmFsOiBzdHJpbmcpID0+IHtcclxuICAgIHJldHVybiByZWdleENvbnN0LmFsbEVuZ2xpc2gudGVzdCh2YWwpO1xyXG59XHJcbi8qKlxyXG4gKiDliKTmlq3mmK/lkKblhajkuLrmlbDlrZflrZfnrKbvvIgwLTnvvIlcclxuICovXHJcbmV4cG9ydCBjb25zdCBpc0FsbE51bWJlciA9ICh2YWw6IHN0cmluZykgPT4ge1xyXG4gICAgcmV0dXJuIHJlZ2V4Q29uc3QuYWxsTnVtYmVyLnRlc3QodmFsKTtcclxufSJdfQ==