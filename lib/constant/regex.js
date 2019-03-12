"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.htmlLeftRightBlank = exports.cnMobile = exports.partNumber = exports.httpOrHttps = exports.https = exports.http = exports.allNumber = exports.allEnglish = exports.email = void 0;

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
var http = /^http:\/\//i;
/**
 * 以【https://】开头
 */

exports.http = http;
var https = /^https:\/\//i;
/**
 * 以【http://】或【https://】开头
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
 * html左右空白字符
 */

exports.cnMobile = cnMobile;
var htmlLeftRightBlank = /^((\s+)|((<br\/?>)+)|((nbsp;)+))|((\s+)|((<br\/?>)+)|((nbsp;)+))$/gi;
exports.htmlLeftRightBlank = htmlLeftRightBlank;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdGFudC9yZWdleC50cyJdLCJuYW1lcyI6WyJlbWFpbCIsImFsbEVuZ2xpc2giLCJhbGxOdW1iZXIiLCJodHRwIiwiaHR0cHMiLCJodHRwT3JIdHRwcyIsInBhcnROdW1iZXIiLCJjbk1vYmlsZSIsImh0bWxMZWZ0UmlnaHRCbGFuayJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7QUFHTyxJQUFNQSxLQUFLLEdBQUcsZ0VBQWQ7QUFDUDs7Ozs7QUFHTyxJQUFNQyxVQUFVLEdBQUcsYUFBbkI7QUFDUDs7Ozs7QUFHTyxJQUFNQyxTQUFTLEdBQUcsVUFBbEI7QUFDUDs7Ozs7QUFHTyxJQUFNQyxJQUFJLEdBQUcsYUFBYjtBQUNQOzs7OztBQUdPLElBQU1DLEtBQUssR0FBRyxjQUFkO0FBQ1A7Ozs7O0FBR08sSUFBTUMsV0FBVyxHQUFHLGVBQXBCO0FBQ1A7Ozs7O0FBR08sSUFBTUMsVUFBVSxHQUFHLGFBQW5CO0FBQ1A7Ozs7O0FBR08sSUFBTUMsUUFBUSxHQUFHLFdBQWpCO0FBQ1A7Ozs7O0FBR08sSUFBTUMsa0JBQWtCLEdBQUcscUVBQTNCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWujOaVtOeahOeUteWtkOmCrueuseWcsOWdgFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGVtYWlsID0gL15cXHcrKCgtXFx3Kyl8KFxcLlxcdyspKSpcXEBbYS16MC05XSsoKFxcLnwtKVthLXowLTldKykqXFwuW2EtejAtOV0rJC9cclxuLyoqXHJcbiAqIOWFqOmDqOaYr+iLseaWh+Wtl+avjVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGFsbEVuZ2xpc2ggPSAvXlthLXpBLVpdKyQvXHJcbi8qKlxyXG4gKiDlhajpg6jmmK/mlbDlrZdcclxuICovXHJcbmV4cG9ydCBjb25zdCBhbGxOdW1iZXIgPSAvXlswLTldKyQvXHJcbi8qKlxyXG4gKiDku6XjgJBodHRwOi8v44CR5byA5aS0XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaHR0cCA9IC9eaHR0cDpcXC9cXC8vaVxyXG4vKipcclxuICog5Lul44CQaHR0cHM6Ly/jgJHlvIDlpLRcclxuICovXHJcbmV4cG9ydCBjb25zdCBodHRwcyA9IC9eaHR0cHM6XFwvXFwvL2lcclxuLyoqXHJcbiAqIOS7peOAkGh0dHA6Ly/jgJHmiJbjgJBodHRwczovL+OAkeW8gOWktFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGh0dHBPckh0dHBzID0gL15odHRwcz86XFwvXFwvL2lcclxuLyoqXHJcbiAqIOWMheWQq+aVtOaVsOaIlua1rueCueaVsFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHBhcnROdW1iZXIgPSAvXFxkKyhcXC5cXGQrKT8vXHJcbi8qKlxyXG4gKiDkuK3lm73lpKfpmYbmiYvmnLrlj7dcclxuICovXHJcbmV4cG9ydCBjb25zdCBjbk1vYmlsZSA9IC9eMVxcZHsxMH0kL1xyXG4vKipcclxuICogaHRtbOW3puWPs+epuueZveWtl+esplxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGh0bWxMZWZ0UmlnaHRCbGFuayA9IC9eKChcXHMrKXwoKDxiclxcLz8+KSspfCgobmJzcDspKykpfCgoXFxzKyl8KCg8YnJcXC8/PikrKXwoKG5ic3A7KSspKSQvZ2kiXX0=