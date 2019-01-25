"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.partNumber = exports.httpOrHttps = exports.https = exports.http = exports.allNumber = exports.allEnglish = exports.email = void 0;

/**
 * 完整的电子邮箱地址
 */
var email = /^\w+((-\w+)|(\.\w+))*\@[a-z0-9]+((\.|-)[a-z0-9]+)*\.[a-z0-9]+$/;
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
 * 以【http://】开头
 */

exports.allNumber = allNumber;
var http = /^http:\/\//;
/**
 * 以【https://】开头
 */

exports.http = http;
var https = /^https:\/\//;
/**
 * 以【http://】或【https://】开头
 */

exports.https = https;
var httpOrHttps = /^https?:\/\//;
/**
 * 包含整数或浮点数
 */

exports.httpOrHttps = httpOrHttps;
var partNumber = /\d+(\.\d+)?/;
exports.partNumber = partNumber;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdGFudC9yZWdleC50cyJdLCJuYW1lcyI6WyJlbWFpbCIsImFsbEVuZ2xpc2giLCJhbGxOdW1iZXIiLCJodHRwIiwiaHR0cHMiLCJodHRwT3JIdHRwcyIsInBhcnROdW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7O0FBR08sSUFBTUEsS0FBSyxHQUFHLGdFQUFkO0FBQ1A7Ozs7O0FBR08sSUFBTUMsVUFBVSxHQUFHLGFBQW5CO0FBQ1A7Ozs7O0FBR08sSUFBTUMsU0FBUyxHQUFHLFVBQWxCO0FBQ1A7Ozs7O0FBR08sSUFBTUMsSUFBSSxHQUFHLFlBQWI7QUFDUDs7Ozs7QUFHTyxJQUFNQyxLQUFLLEdBQUcsYUFBZDtBQUNQOzs7OztBQUdPLElBQU1DLFdBQVcsR0FBRyxjQUFwQjtBQUNQOzs7OztBQUdPLElBQU1DLFVBQVUsR0FBRyxhQUFuQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDlrozmlbTnmoTnlLXlrZDpgq7nrrHlnLDlnYBcclxuICovXHJcbmV4cG9ydCBjb25zdCBlbWFpbCA9IC9eXFx3KygoLVxcdyspfChcXC5cXHcrKSkqXFxAW2EtejAtOV0rKChcXC58LSlbYS16MC05XSspKlxcLlthLXowLTldKyQvXHJcbi8qKlxyXG4gKiDlhajpg6jmmK/oi7HmloflrZfmr41cclxuICovXHJcbmV4cG9ydCBjb25zdCBhbGxFbmdsaXNoID0gL15bYS16QS1aXSskL1xyXG4vKipcclxuICog5YWo6YOo5piv5pWw5a2XXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYWxsTnVtYmVyID0gL15bMC05XSskL1xyXG4vKipcclxuICog5Lul44CQaHR0cDovL+OAkeW8gOWktFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGh0dHAgPSAvXmh0dHA6XFwvXFwvL1xyXG4vKipcclxuICog5Lul44CQaHR0cHM6Ly/jgJHlvIDlpLRcclxuICovXHJcbmV4cG9ydCBjb25zdCBodHRwcyA9IC9eaHR0cHM6XFwvXFwvL1xyXG4vKipcclxuICog5Lul44CQaHR0cDovL+OAkeaIluOAkGh0dHBzOi8v44CR5byA5aS0XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaHR0cE9ySHR0cHMgPSAvXmh0dHBzPzpcXC9cXC8vXHJcbi8qKlxyXG4gKiDljIXlkKvmlbTmlbDmiJbmta7ngrnmlbBcclxuICovXHJcbmV4cG9ydCBjb25zdCBwYXJ0TnVtYmVyID0gL1xcZCsoXFwuXFxkKyk/LyJdfQ==