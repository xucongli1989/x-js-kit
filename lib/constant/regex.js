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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdGFudC9yZWdleC50cyJdLCJuYW1lcyI6WyJlbWFpbCIsImFsbEVuZ2xpc2giLCJhbGxOdW1iZXIiLCJodHRwIiwiaHR0cHMiLCJodHRwT3JIdHRwcyIsInBhcnROdW1iZXIiLCJjbk1vYmlsZSIsImh0bWxMZWZ0UmlnaHRCbGFuayIsImNoaW5hSURDYXJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7OztBQUdPLElBQU1BLEtBQUssR0FBRyxnRUFBZDtBQUNQOzs7OztBQUdPLElBQU1DLFVBQVUsR0FBRyxhQUFuQjtBQUNQOzs7OztBQUdPLElBQU1DLFNBQVMsR0FBRyxVQUFsQjtBQUNQOzs7OztBQUdPLElBQU1DLElBQUksR0FBRyxhQUFiO0FBQ1A7Ozs7O0FBR08sSUFBTUMsS0FBSyxHQUFHLGNBQWQ7QUFDUDs7Ozs7QUFHTyxJQUFNQyxXQUFXLEdBQUcsZUFBcEI7QUFDUDs7Ozs7QUFHTyxJQUFNQyxVQUFVLEdBQUcsYUFBbkI7QUFDUDs7Ozs7QUFHTyxJQUFNQyxRQUFRLEdBQUcsV0FBakI7QUFDUDs7Ozs7QUFHTyxJQUFNQyxrQkFBa0IsR0FBRyxxRUFBM0I7QUFDUDs7Ozs7QUFHTyxJQUFNQyxXQUFXLEdBQUcsd0tBQXBCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWujOaVtOeahOeUteWtkOmCrueuseWcsOWdgO+8iOS4jeWMuuWIhuWkp+Wwj+WGme+8iVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGVtYWlsID0gL15cXHcrKCgtXFx3Kyl8KFxcLlxcdyspKSpAW2EtejAtOV0rKChcXC58LSlbYS16MC05XSspKlxcLlthLXowLTldKyQvaVxyXG4vKipcclxuICog5YWo6YOo5piv6Iux5paH5a2X5q+NXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYWxsRW5nbGlzaCA9IC9eW2EtekEtWl0rJC9cclxuLyoqXHJcbiAqIOWFqOmDqOaYr+aVsOWtl1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGFsbE51bWJlciA9IC9eWzAtOV0rJC9cclxuLyoqXHJcbiAqIOS7peOAkGh0dHA6Ly/jgJHlvIDlpLTvvIjkuI3ljLrliIblpKflsI/lhpnvvIlcclxuICovXHJcbmV4cG9ydCBjb25zdCBodHRwID0gL15odHRwOlxcL1xcLy9pXHJcbi8qKlxyXG4gKiDku6XjgJBodHRwczovL+OAkeW8gOWktO+8iOS4jeWMuuWIhuWkp+Wwj+WGme+8iVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGh0dHBzID0gL15odHRwczpcXC9cXC8vaVxyXG4vKipcclxuICog5Lul44CQaHR0cDovL+OAkeaIluOAkGh0dHBzOi8v44CR5byA5aS077yI5LiN5Yy65YiG5aSn5bCP5YaZ77yJXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaHR0cE9ySHR0cHMgPSAvXmh0dHBzPzpcXC9cXC8vaVxyXG4vKipcclxuICog5YyF5ZCr5pW05pWw5oiW5rWu54K55pWwXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcGFydE51bWJlciA9IC9cXGQrKFxcLlxcZCspPy9cclxuLyoqXHJcbiAqIOS4reWbveWkp+mZhuaJi+acuuWPt1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNuTW9iaWxlID0gL14xXFxkezEwfSQvXHJcbi8qKlxyXG4gKiBodG1s5bem5Y+z56m655m95a2X56ym77yI5LiN5Yy65YiG5aSn5bCP5YaZ77yJXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaHRtbExlZnRSaWdodEJsYW5rID0gL14oKFxccyspfCgoPGJyXFwvPz4pKyl8KChuYnNwOykrKSl8KChcXHMrKXwoKDxiclxcLz8+KSspfCgobmJzcDspKykpJC9naVxyXG4vKipcclxuICog5Lit5Zu95aSn6ZmG6Lqr5Lu96K+B77yIMTjjgIExNeS9je+8iVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNoaW5hSURDYXJkID0gLyheWzEtOV1cXGR7NX0oMTh8MTl8KFsyM11cXGQpKVxcZHsyfSgoMFsxLTldKXwoMTB8MTF8MTIpKSgoWzAtMl1bMS05XSl8MTB8MjB8MzB8MzEpXFxkezN9WzAtOVh4XSQpfCheWzEtOV1cXGR7NX1cXGR7Mn0oKDBbMS05XSl8KDEwfDExfDEyKSkoKFswLTJdWzEtOV0pfDEwfDIwfDMwfDMxKVxcZHszfSQpLyJdfQ==