"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repeat = exports.escapeHtml = exports.contains = exports.rTrim = exports.lTrim = exports.trim = exports.getNumber = exports.ellipsis = exports.splitString = void 0;

var _regex = require("../constant/regex");

var _map = require("../constant/map");

/**
 * 将字符串按一定字符数拆分成字符串数组
 */
var splitString = function splitString(str, stepCharCount) {
  if (!str || stepCharCount <= 0) {
    return [];
  }

  var strLen = str.length;

  if (strLen <= stepCharCount) {
    return [str];
  }

  var result = [];
  var startIndex = 0;

  while (startIndex < strLen) {
    result.push(str.substr(startIndex, stepCharCount));
    startIndex += stepCharCount;
  }

  return result;
};
/**
 * 截取字符串并以省略符号显示字符串
 * @param str 原字符串
 * @param len 要保留的字符长度
 * @param ellipsisChars 被截断的字符显示的符号
 */


exports.splitString = splitString;

var ellipsis = function ellipsis(str, len) {
  var ellipsisChars = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "...";

  if (!str || len <= 0) {
    return "";
  }

  if (str.length <= len) {
    return str;
  }

  return str.substring(0, len) + ellipsisChars;
};
/**
 * 从字符串中提取数字（可带小数点）。如："abc123.01cde"->123.01
 */


exports.ellipsis = ellipsis;

var getNumber = function getNumber(str) {
  if (!str) {
    return null;
  }

  var mt = str.match(_regex.partNumber);

  if (!mt || !mt.length) {
    return null;
  }

  return parseFloat(mt[0]);
};
/**
 * 去左右空格
 * @param  str 待处理字符串
 * @returns  处理后的字符串
 */


exports.getNumber = getNumber;

var trim = function trim(str) {
  if (!str) {
    return "";
  }

  return str.replace(/^\s+|\s+$/g, "");
};
/**
 * 去左空格
 * @param  str 待处理字符串
 * @returns  处理后的字符串
 */


exports.trim = trim;

var lTrim = function lTrim(str) {
  if (!str) {
    return "";
  }

  return str.replace(/^\s+/, "");
};
/**
 * 去右空格
 * @param  str 待处理字符串
 * @returns  处理后的值
 */


exports.lTrim = lTrim;

var rTrim = function rTrim(str) {
  if (!str) {
    return "";
  }

  return str.replace(/\s+$/, "");
};
/**
 * 指定源字符串sourceStr中是否包含str字符串
 * @param  sourceStr 源字符串
 * @param  str 要查找的字符串
 * @param  isIgnoreCase 是否忽略大小写(默认为false)
 * @returns  结果
 */


exports.rTrim = rTrim;

var contains = function contains(sourceStr, str) {
  var isIgnoreCase = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!sourceStr) {
    return false;
  }

  if (str === "") {
    return true;
  }

  if (!str) {
    return false;
  }

  if (isIgnoreCase) {
    sourceStr = sourceStr.toUpperCase();
    str = str.toUpperCase();
  }

  return sourceStr.includes(str);
};
/**
* 将html标签转换为实体形式
* @param  html 需要被替换的html
* @returns  转换后的值
*/


exports.contains = contains;

var escapeHtml = function escapeHtml(html) {
  if (!html) {
    return "";
  }

  return String(html).replace(/[&<>"'\/]/g, function (s) {
    return _map.htmlEntityMap[s];
  });
};
/**
 * @param   str 要重复的字符串
 * @param   count 重复次数
 * @returns  新的字符串
 */


exports.escapeHtml = escapeHtml;

var repeat = function repeat(str, count) {
  if (!str || count <= 0) {
    return "";
  }

  var s = [];

  while (count--) {
    s.push(str);
  }

  return s.join('');
};

exports.repeat = repeat;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vc3RyaW5nLnRzIl0sIm5hbWVzIjpbInNwbGl0U3RyaW5nIiwic3RyIiwic3RlcENoYXJDb3VudCIsInN0ckxlbiIsImxlbmd0aCIsInJlc3VsdCIsInN0YXJ0SW5kZXgiLCJwdXNoIiwic3Vic3RyIiwiZWxsaXBzaXMiLCJsZW4iLCJlbGxpcHNpc0NoYXJzIiwic3Vic3RyaW5nIiwiZ2V0TnVtYmVyIiwibXQiLCJtYXRjaCIsInBhcnROdW1iZXIiLCJwYXJzZUZsb2F0IiwidHJpbSIsInJlcGxhY2UiLCJsVHJpbSIsInJUcmltIiwiY29udGFpbnMiLCJzb3VyY2VTdHIiLCJpc0lnbm9yZUNhc2UiLCJ0b1VwcGVyQ2FzZSIsImluY2x1ZGVzIiwiZXNjYXBlSHRtbCIsImh0bWwiLCJTdHJpbmciLCJzIiwiaHRtbEVudGl0eU1hcCIsInJlcGVhdCIsImNvdW50Iiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBOzs7QUFHTyxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxHQUFELEVBQWNDLGFBQWQsRUFBa0Q7QUFDekUsTUFBSSxDQUFDRCxHQUFELElBQVFDLGFBQWEsSUFBSSxDQUE3QixFQUFnQztBQUM1QixXQUFPLEVBQVA7QUFDSDs7QUFDRCxNQUFNQyxNQUFNLEdBQUdGLEdBQUcsQ0FBQ0csTUFBbkI7O0FBQ0EsTUFBSUQsTUFBTSxJQUFJRCxhQUFkLEVBQTZCO0FBQ3pCLFdBQU8sQ0FBQ0QsR0FBRCxDQUFQO0FBQ0g7O0FBQ0QsTUFBSUksTUFBZ0IsR0FBRyxFQUF2QjtBQUNBLE1BQUlDLFVBQVUsR0FBRyxDQUFqQjs7QUFDQSxTQUFPQSxVQUFVLEdBQUdILE1BQXBCLEVBQTRCO0FBQ3hCRSxJQUFBQSxNQUFNLENBQUNFLElBQVAsQ0FBWU4sR0FBRyxDQUFDTyxNQUFKLENBQVdGLFVBQVgsRUFBdUJKLGFBQXZCLENBQVo7QUFDQUksSUFBQUEsVUFBVSxJQUFJSixhQUFkO0FBQ0g7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QyxXQUFPQyxtQkFBY0QsQ0FBZCxDQUFQO0FBQ0gsR0FGTSxDQUFQO0FBR0gsQ0FQTTtBQVNQOzs7Ozs7Ozs7QUFLTyxJQUFNRSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDL0IsR0FBRCxFQUFjZ0MsS0FBZCxFQUFnQztBQUNsRCxNQUFJLENBQUNoQyxHQUFELElBQVFnQyxLQUFLLElBQUksQ0FBckIsRUFBd0I7QUFDcEIsV0FBTyxFQUFQO0FBQ0g7O0FBQ0QsTUFBSUgsQ0FBQyxHQUFHLEVBQVI7O0FBQ0EsU0FBT0csS0FBSyxFQUFaLEVBQWdCO0FBQ1pILElBQUFBLENBQUMsQ0FBQ3ZCLElBQUYsQ0FBT04sR0FBUDtBQUNIOztBQUNELFNBQU82QixDQUFDLENBQUNJLElBQUYsQ0FBTyxFQUFQLENBQVA7QUFDSCxDQVRNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGFydE51bWJlciB9IGZyb20gXCIuLi9jb25zdGFudC9yZWdleFwiXHJcbmltcG9ydCB7IGh0bWxFbnRpdHlNYXAgfSBmcm9tIFwiLi4vY29uc3RhbnQvbWFwXCJcclxuXHJcbi8qKlxyXG4gKiDlsIblrZfnrKbkuLLmjInkuIDlrprlrZfnrKbmlbDmi4bliIbmiJDlrZfnrKbkuLLmlbDnu4RcclxuICovXHJcbmV4cG9ydCBjb25zdCBzcGxpdFN0cmluZyA9IChzdHI6IHN0cmluZywgc3RlcENoYXJDb3VudDogbnVtYmVyKTogc3RyaW5nW10gPT4ge1xyXG4gICAgaWYgKCFzdHIgfHwgc3RlcENoYXJDb3VudCA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdXHJcbiAgICB9XHJcbiAgICBjb25zdCBzdHJMZW4gPSBzdHIubGVuZ3RoXHJcbiAgICBpZiAoc3RyTGVuIDw9IHN0ZXBDaGFyQ291bnQpIHtcclxuICAgICAgICByZXR1cm4gW3N0cl1cclxuICAgIH1cclxuICAgIGxldCByZXN1bHQ6IHN0cmluZ1tdID0gW11cclxuICAgIGxldCBzdGFydEluZGV4ID0gMFxyXG4gICAgd2hpbGUgKHN0YXJ0SW5kZXggPCBzdHJMZW4pIHtcclxuICAgICAgICByZXN1bHQucHVzaChzdHIuc3Vic3RyKHN0YXJ0SW5kZXgsIHN0ZXBDaGFyQ291bnQpKVxyXG4gICAgICAgIHN0YXJ0SW5kZXggKz0gc3RlcENoYXJDb3VudFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG59XHJcblxyXG4vKipcclxuICog5oiq5Y+W5a2X56ym5Liy5bm25Lul55yB55Wl56ym5Y+35pi+56S65a2X56ym5LiyXHJcbiAqIEBwYXJhbSBzdHIg5Y6f5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBsZW4g6KaB5L+d55WZ55qE5a2X56ym6ZW/5bqmXHJcbiAqIEBwYXJhbSBlbGxpcHNpc0NoYXJzIOiiq+aIquaWreeahOWtl+espuaYvuekuueahOespuWPt1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGVsbGlwc2lzID0gKHN0cjogc3RyaW5nLCBsZW46IG51bWJlciwgZWxsaXBzaXNDaGFycyA9IFwiLi4uXCIpOiBzdHJpbmcgPT4ge1xyXG4gICAgaWYgKCFzdHIgfHwgbGVuIDw9IDApIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgaWYgKHN0ci5sZW5ndGggPD0gbGVuKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0clxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5zdWJzdHJpbmcoMCwgbGVuKSArIGVsbGlwc2lzQ2hhcnNcclxufVxyXG5cclxuLyoqXHJcbiAqIOS7juWtl+espuS4suS4reaPkOWPluaVsOWtl++8iOWPr+W4puWwj+aVsOeCue+8ieOAguWmgu+8mlwiYWJjMTIzLjAxY2RlXCItPjEyMy4wMVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldE51bWJlciA9IChzdHI6IHN0cmluZyk6IG51bWJlciB8IG51bGwgPT4ge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgY29uc3QgbXQgPSBzdHIubWF0Y2gocGFydE51bWJlcilcclxuICAgIGlmICghbXQgfHwgIW10Lmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFyc2VGbG9hdChtdFswXSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOWOu+W3puWPs+epuuagvFxyXG4gKiBAcGFyYW0gIHN0ciDlvoXlpITnkIblrZfnrKbkuLJcclxuICogQHJldHVybnMgIOWkhOeQhuWQjueahOWtl+espuS4slxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHRyaW0gPSAoc3RyOiBzdHJpbmcpID0+IHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgXCJcIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOWOu+W3puepuuagvFxyXG4gKiBAcGFyYW0gIHN0ciDlvoXlpITnkIblrZfnrKbkuLJcclxuICogQHJldHVybnMgIOWkhOeQhuWQjueahOWtl+espuS4slxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxUcmltID0gKHN0cjogc3RyaW5nKSA9PiB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrLywgXCJcIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOWOu+WPs+epuuagvFxyXG4gKiBAcGFyYW0gIHN0ciDlvoXlpITnkIblrZfnrKbkuLJcclxuICogQHJldHVybnMgIOWkhOeQhuWQjueahOWAvFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJUcmltID0gKHN0cjogc3RyaW5nKSA9PiB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xccyskLywgXCJcIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOaMh+Wumua6kOWtl+espuS4snNvdXJjZVN0cuS4reaYr+WQpuWMheWQq3N0cuWtl+espuS4slxyXG4gKiBAcGFyYW0gIHNvdXJjZVN0ciDmupDlrZfnrKbkuLJcclxuICogQHBhcmFtICBzdHIg6KaB5p+l5om+55qE5a2X56ym5LiyXHJcbiAqIEBwYXJhbSAgaXNJZ25vcmVDYXNlIOaYr+WQpuW/veeVpeWkp+Wwj+WGmSjpu5jorqTkuLpmYWxzZSlcclxuICogQHJldHVybnMgIOe7k+aenFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNvbnRhaW5zID0gKHNvdXJjZVN0cjogc3RyaW5nLCBzdHI6IHN0cmluZywgaXNJZ25vcmVDYXNlOiBib29sZWFuID0gZmFsc2UpID0+IHtcclxuICAgIGlmICghc291cmNlU3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBpZiAoc3RyID09PSBcIlwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBpZiAoaXNJZ25vcmVDYXNlKSB7XHJcbiAgICAgICAgc291cmNlU3RyID0gc291cmNlU3RyLnRvVXBwZXJDYXNlKClcclxuICAgICAgICBzdHIgPSBzdHIudG9VcHBlckNhc2UoKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNvdXJjZVN0ci5pbmNsdWRlcyhzdHIpXHJcbn1cclxuXHJcbi8qKlxyXG4qIOWwhmh0bWzmoIfnrb7ovazmjaLkuLrlrp7kvZPlvaLlvI9cclxuKiBAcGFyYW0gIGh0bWwg6ZyA6KaB6KKr5pu/5o2i55qEaHRtbFxyXG4qIEByZXR1cm5zICDovazmjaLlkI7nmoTlgLxcclxuKi9cclxuZXhwb3J0IGNvbnN0IGVzY2FwZUh0bWwgPSAoaHRtbDogc3RyaW5nKSA9PiB7XHJcbiAgICBpZiAoIWh0bWwpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFN0cmluZyhodG1sKS5yZXBsYWNlKC9bJjw+XCInXFwvXS9nLCAocykgPT4ge1xyXG4gICAgICAgIHJldHVybiBodG1sRW50aXR5TWFwW3NdXHJcbiAgICB9KVxyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtICAgc3RyIOimgemHjeWkjeeahOWtl+espuS4slxyXG4gKiBAcGFyYW0gICBjb3VudCDph43lpI3mrKHmlbBcclxuICogQHJldHVybnMgIOaWsOeahOWtl+espuS4slxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJlcGVhdCA9IChzdHI6IHN0cmluZywgY291bnQ6IG51bWJlcikgPT4ge1xyXG4gICAgaWYgKCFzdHIgfHwgY291bnQgPD0gMCkge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICBsZXQgcyA9IFtdXHJcbiAgICB3aGlsZSAoY291bnQtLSkge1xyXG4gICAgICAgIHMucHVzaChzdHIpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcy5qb2luKCcnKVxyXG59Il19