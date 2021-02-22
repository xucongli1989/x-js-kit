"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chineseChar = exports.chinaIDCard = exports.htmlLeftRightBlank = exports.cnMobile = exports.partNumber = exports.httpOrHttps = exports.https = exports.http = exports.allNumber = exports.allEnglish = exports.email = void 0;

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
/**
 * 单个中文字符
 */

exports.chinaIDCard = chinaIDCard;
var chineseChar = /[\u4E00-\u9FFF]/;
exports.chineseChar = chineseChar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdGFudC9yZWdleC50cyJdLCJuYW1lcyI6WyJlbWFpbCIsImFsbEVuZ2xpc2giLCJhbGxOdW1iZXIiLCJodHRwIiwiaHR0cHMiLCJodHRwT3JIdHRwcyIsInBhcnROdW1iZXIiLCJjbk1vYmlsZSIsImh0bWxMZWZ0UmlnaHRCbGFuayIsImNoaW5hSURDYXJkIiwiY2hpbmVzZUNoYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxLQUFLLEdBQUcsZ0VBQWQ7QUFDUDtBQUNBO0FBQ0E7OztBQUNPLElBQU1DLFVBQVUsR0FBRyxhQUFuQjtBQUNQO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTUMsU0FBUyxHQUFHLFVBQWxCO0FBQ1A7QUFDQTtBQUNBOzs7QUFDTyxJQUFNQyxJQUFJLEdBQUcsYUFBYjtBQUNQO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTUMsS0FBSyxHQUFHLGNBQWQ7QUFDUDtBQUNBO0FBQ0E7OztBQUNPLElBQU1DLFdBQVcsR0FBRyxlQUFwQjtBQUNQO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTUMsVUFBVSxHQUFHLGFBQW5CO0FBQ1A7QUFDQTtBQUNBOzs7QUFDTyxJQUFNQyxRQUFRLEdBQUcsV0FBakI7QUFDUDtBQUNBO0FBQ0E7OztBQUNPLElBQU1DLGtCQUFrQixHQUFHLHFFQUEzQjtBQUNQO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTUMsV0FBVyxHQUFHLHdLQUFwQjtBQUNQO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTUMsV0FBVyxHQUFHLGlCQUFwQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDlrozmlbTnmoTnlLXlrZDpgq7nrrHlnLDlnYDvvIjkuI3ljLrliIblpKflsI/lhpnvvIlcclxuICovXHJcbmV4cG9ydCBjb25zdCBlbWFpbCA9IC9eXFx3KygoLVxcdyspfChcXC5cXHcrKSkqQFthLXowLTldKygoXFwufC0pW2EtejAtOV0rKSpcXC5bYS16MC05XSskL2lcclxuLyoqXHJcbiAqIOWFqOmDqOaYr+iLseaWh+Wtl+avjVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGFsbEVuZ2xpc2ggPSAvXlthLXpBLVpdKyQvXHJcbi8qKlxyXG4gKiDlhajpg6jmmK/mlbDlrZdcclxuICovXHJcbmV4cG9ydCBjb25zdCBhbGxOdW1iZXIgPSAvXlswLTldKyQvXHJcbi8qKlxyXG4gKiDku6XjgJBodHRwOi8v44CR5byA5aS077yI5LiN5Yy65YiG5aSn5bCP5YaZ77yJXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaHR0cCA9IC9eaHR0cDpcXC9cXC8vaVxyXG4vKipcclxuICog5Lul44CQaHR0cHM6Ly/jgJHlvIDlpLTvvIjkuI3ljLrliIblpKflsI/lhpnvvIlcclxuICovXHJcbmV4cG9ydCBjb25zdCBodHRwcyA9IC9eaHR0cHM6XFwvXFwvL2lcclxuLyoqXHJcbiAqIOS7peOAkGh0dHA6Ly/jgJHmiJbjgJBodHRwczovL+OAkeW8gOWktO+8iOS4jeWMuuWIhuWkp+Wwj+WGme+8iVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGh0dHBPckh0dHBzID0gL15odHRwcz86XFwvXFwvL2lcclxuLyoqXHJcbiAqIOWMheWQq+aVtOaVsOaIlua1rueCueaVsFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHBhcnROdW1iZXIgPSAvXFxkKyhcXC5cXGQrKT8vXHJcbi8qKlxyXG4gKiDkuK3lm73lpKfpmYbmiYvmnLrlj7dcclxuICovXHJcbmV4cG9ydCBjb25zdCBjbk1vYmlsZSA9IC9eMVxcZHsxMH0kL1xyXG4vKipcclxuICogaHRtbOW3puWPs+epuueZveWtl+espu+8iOS4jeWMuuWIhuWkp+Wwj+WGme+8iVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGh0bWxMZWZ0UmlnaHRCbGFuayA9IC9eKChcXHMrKXwoKDxiclxcLz8+KSspfCgobmJzcDspKykpfCgoXFxzKyl8KCg8YnJcXC8/PikrKXwoKG5ic3A7KSspKSQvZ2lcclxuLyoqXHJcbiAqIOS4reWbveWkp+mZhui6q+S7veivge+8iDE444CBMTXkvY3vvIlcclxuICovXHJcbmV4cG9ydCBjb25zdCBjaGluYUlEQ2FyZCA9IC8oXlsxLTldXFxkezV9KDE4fDE5fChbMjNdXFxkKSlcXGR7Mn0oKDBbMS05XSl8KDEwfDExfDEyKSkoKFswLTJdWzEtOV0pfDEwfDIwfDMwfDMxKVxcZHszfVswLTlYeF0kKXwoXlsxLTldXFxkezV9XFxkezJ9KCgwWzEtOV0pfCgxMHwxMXwxMikpKChbMC0yXVsxLTldKXwxMHwyMHwzMHwzMSlcXGR7M30kKS9cclxuLyoqXHJcbiAqIOWNleS4quS4reaWh+Wtl+esplxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNoaW5lc2VDaGFyID0gL1tcXHU0RTAwLVxcdTlGRkZdL1xyXG4iXX0=