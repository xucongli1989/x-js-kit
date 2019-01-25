"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cnMobile = exports.partNumber = exports.httpOrHttps = exports.https = exports.http = exports.allNumber = exports.allEnglish = exports.email = void 0;

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
/**
 * 中国大陆手机号
 */

exports.partNumber = partNumber;
var cnMobile = /^1\d{10}$/;
exports.cnMobile = cnMobile;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdGFudC9yZWdleC50cyJdLCJuYW1lcyI6WyJlbWFpbCIsImFsbEVuZ2xpc2giLCJhbGxOdW1iZXIiLCJodHRwIiwiaHR0cHMiLCJodHRwT3JIdHRwcyIsInBhcnROdW1iZXIiLCJjbk1vYmlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7QUFHTyxJQUFNQSxLQUFLLEdBQUcsZ0VBQWQ7QUFDUDs7Ozs7QUFHTyxJQUFNQyxVQUFVLEdBQUcsYUFBbkI7QUFDUDs7Ozs7QUFHTyxJQUFNQyxTQUFTLEdBQUcsVUFBbEI7QUFDUDs7Ozs7QUFHTyxJQUFNQyxJQUFJLEdBQUcsWUFBYjtBQUNQOzs7OztBQUdPLElBQU1DLEtBQUssR0FBRyxhQUFkO0FBQ1A7Ozs7O0FBR08sSUFBTUMsV0FBVyxHQUFHLGNBQXBCO0FBQ1A7Ozs7O0FBR08sSUFBTUMsVUFBVSxHQUFHLGFBQW5CO0FBQ1A7Ozs7O0FBR08sSUFBTUMsUUFBUSxHQUFHLFdBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWujOaVtOeahOeUteWtkOmCrueuseWcsOWdgFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGVtYWlsID0gL15cXHcrKCgtXFx3Kyl8KFxcLlxcdyspKSpcXEBbYS16MC05XSsoKFxcLnwtKVthLXowLTldKykqXFwuW2EtejAtOV0rJC9cclxuLyoqXHJcbiAqIOWFqOmDqOaYr+iLseaWh+Wtl+avjVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGFsbEVuZ2xpc2ggPSAvXlthLXpBLVpdKyQvXHJcbi8qKlxyXG4gKiDlhajpg6jmmK/mlbDlrZdcclxuICovXHJcbmV4cG9ydCBjb25zdCBhbGxOdW1iZXIgPSAvXlswLTldKyQvXHJcbi8qKlxyXG4gKiDku6XjgJBodHRwOi8v44CR5byA5aS0XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaHR0cCA9IC9eaHR0cDpcXC9cXC8vXHJcbi8qKlxyXG4gKiDku6XjgJBodHRwczovL+OAkeW8gOWktFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGh0dHBzID0gL15odHRwczpcXC9cXC8vXHJcbi8qKlxyXG4gKiDku6XjgJBodHRwOi8v44CR5oiW44CQaHR0cHM6Ly/jgJHlvIDlpLRcclxuICovXHJcbmV4cG9ydCBjb25zdCBodHRwT3JIdHRwcyA9IC9eaHR0cHM/OlxcL1xcLy9cclxuLyoqXHJcbiAqIOWMheWQq+aVtOaVsOaIlua1rueCueaVsFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHBhcnROdW1iZXIgPSAvXFxkKyhcXC5cXGQrKT8vXHJcbi8qKlxyXG4gKiDkuK3lm73lpKfpmYbmiYvmnLrlj7dcclxuICovXHJcbmV4cG9ydCBjb25zdCBjbk1vYmlsZSA9IC9eMVxcZHsxMH0kLyJdfQ==