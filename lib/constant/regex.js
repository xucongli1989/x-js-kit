"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chinaIDCard = exports.htmlLeftRightBlank = exports.cnMobile = exports.partNumber = exports.httpOrHttps = exports.https = exports.http = exports.allNumber = exports.allEnglish = exports.email = void 0;

/**
 * 完整的电子邮箱地址（不区分大小写）
 */
var email = /^\w+((-\w+)|(\.\w+))*@[a-z0-9]+((\.|-)[a-z0-9]+)*\.[a-z0-9]+$/i;
/**
 * 全部是英文字母
 */

exports.email = email;
var allEnglish = /^[a-zA-Z]+$/;
/**
 * 全部是数字
 */

exports.allEnglish = allEnglish;
var allNumber = /^[0-9]+$/;
/**
 * 以【http://】开头（不区分大小写）
 */

exports.allNumber = allNumber;
var http = /^http:\/\//i;
/**
 * 以【https://】开头（不区分大小写）
 */

exports.http = http;
var https = /^https:\/\//i;
/**
 * 以【http://】或【https://】开头（不区分大小写）
 */

exports.https = https;
var httpOrHttps = /^https?:\/\//i;
/**
 * 包含整数或浮点数
 */

exports.httpOrHttps = httpOrHttps;
var partNumber = /\d+(\.\d+)?/;
/**
 * 中国大陆手机号
 */

exports.partNumber = partNumber;
var cnMobile = /^1\d{10}$/;
/**
 * html左右空白字符（不区分大小写）
 */

exports.cnMobile = cnMobile;
var htmlLeftRightBlank = /^((\s+)|((<br\/?>)+)|((nbsp;)+))|((\s+)|((<br\/?>)+)|((nbsp;)+))$/gi;
/**
 * 中国大陆身份证（18、15位）
 */

exports.htmlLeftRightBlank = htmlLeftRightBlank;
var chinaIDCard = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/;
exports.chinaIDCard = chinaIDCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdGFudC9yZWdleC50cyJdLCJuYW1lcyI6WyJlbWFpbCIsImFsbEVuZ2xpc2giLCJhbGxOdW1iZXIiLCJodHRwIiwiaHR0cHMiLCJodHRwT3JIdHRwcyIsInBhcnROdW1iZXIiLCJjbk1vYmlsZSIsImh0bWxMZWZ0UmlnaHRCbGFuayIsImNoaW5hSURDYXJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ08sSUFBTUEsS0FBSyxHQUFHLGdFQUFkO0FBQ1A7QUFDQTtBQUNBOzs7QUFDTyxJQUFNQyxVQUFVLEdBQUcsYUFBbkI7QUFDUDtBQUNBO0FBQ0E7OztBQUNPLElBQU1DLFNBQVMsR0FBRyxVQUFsQjtBQUNQO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTUMsSUFBSSxHQUFHLGFBQWI7QUFDUDtBQUNBO0FBQ0E7OztBQUNPLElBQU1DLEtBQUssR0FBRyxjQUFkO0FBQ1A7QUFDQTtBQUNBOzs7QUFDTyxJQUFNQyxXQUFXLEdBQUcsZUFBcEI7QUFDUDtBQUNBO0FBQ0E7OztBQUNPLElBQU1DLFVBQVUsR0FBRyxhQUFuQjtBQUNQO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTUMsUUFBUSxHQUFHLFdBQWpCO0FBQ1A7QUFDQTtBQUNBOzs7QUFDTyxJQUFNQyxrQkFBa0IsR0FBRyxxRUFBM0I7QUFDUDtBQUNBO0FBQ0E7OztBQUNPLElBQU1DLFdBQVcsR0FBRyx3S0FBcEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5a6M5pW055qE55S15a2Q6YKu566x5Zyw5Z2A77yI5LiN5Yy65YiG5aSn5bCP5YaZ77yJXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW1haWwgPSAvXlxcdysoKC1cXHcrKXwoXFwuXFx3KykpKkBbYS16MC05XSsoKFxcLnwtKVthLXowLTldKykqXFwuW2EtejAtOV0rJC9pXHJcbi8qKlxyXG4gKiDlhajpg6jmmK/oi7HmloflrZfmr41cclxuICovXHJcbmV4cG9ydCBjb25zdCBhbGxFbmdsaXNoID0gL15bYS16QS1aXSskL1xyXG4vKipcclxuICog5YWo6YOo5piv5pWw5a2XXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYWxsTnVtYmVyID0gL15bMC05XSskL1xyXG4vKipcclxuICog5Lul44CQaHR0cDovL+OAkeW8gOWktO+8iOS4jeWMuuWIhuWkp+Wwj+WGme+8iVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGh0dHAgPSAvXmh0dHA6XFwvXFwvL2lcclxuLyoqXHJcbiAqIOS7peOAkGh0dHBzOi8v44CR5byA5aS077yI5LiN5Yy65YiG5aSn5bCP5YaZ77yJXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaHR0cHMgPSAvXmh0dHBzOlxcL1xcLy9pXHJcbi8qKlxyXG4gKiDku6XjgJBodHRwOi8v44CR5oiW44CQaHR0cHM6Ly/jgJHlvIDlpLTvvIjkuI3ljLrliIblpKflsI/lhpnvvIlcclxuICovXHJcbmV4cG9ydCBjb25zdCBodHRwT3JIdHRwcyA9IC9eaHR0cHM/OlxcL1xcLy9pXHJcbi8qKlxyXG4gKiDljIXlkKvmlbTmlbDmiJbmta7ngrnmlbBcclxuICovXHJcbmV4cG9ydCBjb25zdCBwYXJ0TnVtYmVyID0gL1xcZCsoXFwuXFxkKyk/L1xyXG4vKipcclxuICog5Lit5Zu95aSn6ZmG5omL5py65Y+3XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY25Nb2JpbGUgPSAvXjFcXGR7MTB9JC9cclxuLyoqXHJcbiAqIGh0bWzlt6blj7Pnqbrnmb3lrZfnrKbvvIjkuI3ljLrliIblpKflsI/lhpnvvIlcclxuICovXHJcbmV4cG9ydCBjb25zdCBodG1sTGVmdFJpZ2h0QmxhbmsgPSAvXigoXFxzKyl8KCg8YnJcXC8/PikrKXwoKG5ic3A7KSspKXwoKFxccyspfCgoPGJyXFwvPz4pKyl8KChuYnNwOykrKSkkL2dpXHJcbi8qKlxyXG4gKiDkuK3lm73lpKfpmYbouqvku73or4HvvIgxOOOAgTE15L2N77yJXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY2hpbmFJRENhcmQgPSAvKF5bMS05XVxcZHs1fSgxOHwxOXwoWzIzXVxcZCkpXFxkezJ9KCgwWzEtOV0pfCgxMHwxMXwxMikpKChbMC0yXVsxLTldKXwxMHwyMHwzMHwzMSlcXGR7M31bMC05WHhdJCl8KF5bMS05XVxcZHs1fVxcZHsyfSgoMFsxLTldKXwoMTB8MTF8MTIpKSgoWzAtMl1bMS05XSl8MTB8MjB8MzB8MzEpXFxkezN9JCkvIl19