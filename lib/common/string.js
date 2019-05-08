"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.splitString = splitString;
exports.ellipsis = ellipsis;
exports.getNumber = getNumber;
exports.trim = trim;
exports.lTrim = lTrim;
exports.rTrim = rTrim;
exports.lTrimString = lTrimString;
exports.rTrimString = rTrimString;
exports.trimString = trimString;
exports.trimHTML = trimHTML;
exports.contains = contains;
exports.escapeHtml = escapeHtml;
exports.repeat = repeat;
exports.builder = void 0;

var _regex = require("../constant/regex");

var _map = require("../constant/map");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 将字符串按一定字符数拆分成字符串数组
 */
function splitString(str, stepCharCount) {
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
}
/**
 * 截取字符串并以省略符号显示字符串
 * @param str 原字符串
 * @param len 要保留的字符长度
 * @param ellipsisChars 被截断的字符显示的符号
 */


function ellipsis(str, len) {
  var ellipsisChars = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "...";

  if (!str || len <= 0) {
    return "";
  }

  if (str.length <= len) {
    return str;
  }

  return str.substring(0, len) + ellipsisChars;
}
/**
 * 从字符串中提取数字（可带小数点）。如："abc123.01cde"->123.01
 */


function getNumber(str) {
  if (!str) {
    return null;
  }

  var mt = str.match(_regex.partNumber);

  if (!mt || !mt.length) {
    return null;
  }

  return parseFloat(mt[0]);
}
/**
 * 去左右空格
 * @param  str 待处理字符串
 * @returns  处理后的字符串
 */


function trim(str) {
  if (!str) {
    return "";
  }

  return str.replace(/^\s+|\s+$/g, "");
}
/**
 * 去左空格
 * @param  str 待处理字符串
 * @returns  处理后的字符串
 */


function lTrim(str) {
  if (!str) {
    return "";
  }

  return str.replace(/^\s+/, "");
}
/**
 * 去右空格
 * @param  str 待处理字符串
 * @returns  处理后的值
 */


function rTrim(str) {
  if (!str) {
    return "";
  }

  return str.replace(/\s+$/, "");
}
/**
 * 去掉左边的指定字符串
 * @param str 待处理的字符串
 * @param strToRemove 需要移除的字符串
 * @param isIgnoreCase 是否忽略大小写
 * @returns 处理结果
 */


function lTrimString(str, strToRemove) {
  var isIgnoreCase = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!str) {
    return "";
  }

  if (!strToRemove) {
    return str;
  }

  return str.replace(new RegExp("^(".concat(strToRemove, ")*"), isIgnoreCase ? "gi" : "g"), "");
}
/**
 * 去掉右边的指定字符串
 * @param str 待处理的字符串
 * @param strToRemove 需要移除的字符串
 * @param isIgnoreCase 是否忽略大小写
 * @returns 处理结果
 */


function rTrimString(str, strToRemove) {
  var isIgnoreCase = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!str) {
    return "";
  }

  if (!strToRemove) {
    return str;
  }

  return str.replace(new RegExp("(".concat(strToRemove, ")*$"), isIgnoreCase ? "gi" : "g"), "");
}
/**
 * 去左右指定的字符串
 * @param str 待处理的字符串
 * @param strToRemove 需要移除的字符串
 * @param isIgnoreCase 是否忽略大小写
 * @returns 处理结果
 */


function trimString(str, strToRemove) {
  var isIgnoreCase = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!str) {
    return "";
  }

  if (!strToRemove) {
    return str;
  }

  return str.replace(new RegExp("(^(".concat(strToRemove, ")*)|((").concat(strToRemove, ")*$)"), isIgnoreCase ? "gi" : "g"), "");
}
/**
 * 从html字符串中移除左右空白占位符
 * @param str 待处理的字符串
 * @returns 处理结果
 */


function trimHTML(str) {
  if (!str) {
    return "";
  }

  while (_regex.htmlLeftRightBlank.test(str)) {
    str = str.replace(_regex.htmlLeftRightBlank, "");
  }

  return str;
}
/**
 * 指定源字符串sourceStr中是否包含str字符串
 * @param  sourceStr 源字符串
 * @param  str 要查找的字符串
 * @param  isIgnoreCase 是否忽略大小写(默认为false)
 * @returns  结果
 */


function contains(sourceStr, str) {
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
}
/**
* 将html标签转换为实体形式
* @param  html 需要被替换的html
* @returns  转换后的值
*/


function escapeHtml(html) {
  if (!html) {
    return "";
  }

  return String(html).replace(/[&<>"'\/]/g, function (s) {
    return _map.htmlEntityMap[s];
  });
}
/**
 * @param   str 要重复的字符串
 * @param   count 重复次数
 * @returns  新的字符串
 */


function repeat(str, count) {
  if (!str || count <= 0) {
    return "";
  }

  var s = [];

  while (count--) {
    s.push(str);
  }

  return s.join('');
}
/**
 * 字符串批量构建器（无需使用"+"进行字符串的拼接，直接使用此对象的append方法后，再toString即可得到拼好的字符串）
 */


var builder =
/*#__PURE__*/
function () {
  function builder() {
    _classCallCheck(this, builder);

    _defineProperty(this, "_arr", []);
  }

  _createClass(builder, [{
    key: "append",

    /**
     * 追加项
     * @param items 待追加的项
     * @returns this 
     */
    value: function append() {
      var _this$_arr;

      (_this$_arr = this._arr).push.apply(_this$_arr, arguments);

      return this;
    }
    /**
     * 返回已合并的所有项的字符串
     */

  }, {
    key: "toString",
    value: function toString() {
      return this._arr.join("");
    }
    /**
     * 清空当前的构建器中的所有项
     * @returns this
     */

  }, {
    key: "clear",
    value: function clear() {
      this._arr = [];
      return this;
    }
    /**
     * 返回构建器中所有项的字符串总的字符长度
     */

  }, {
    key: "length",
    value: function length() {
      return this.toString().length;
    }
  }]);

  return builder;
}();

exports.builder = builder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vc3RyaW5nLnRzIl0sIm5hbWVzIjpbInNwbGl0U3RyaW5nIiwic3RyIiwic3RlcENoYXJDb3VudCIsInN0ckxlbiIsImxlbmd0aCIsInJlc3VsdCIsInN0YXJ0SW5kZXgiLCJwdXNoIiwic3Vic3RyIiwiZWxsaXBzaXMiLCJsZW4iLCJlbGxpcHNpc0NoYXJzIiwic3Vic3RyaW5nIiwiZ2V0TnVtYmVyIiwibXQiLCJtYXRjaCIsInBhcnROdW1iZXIiLCJwYXJzZUZsb2F0IiwidHJpbSIsInJlcGxhY2UiLCJsVHJpbSIsInJUcmltIiwibFRyaW1TdHJpbmciLCJzdHJUb1JlbW92ZSIsImlzSWdub3JlQ2FzZSIsIlJlZ0V4cCIsInJUcmltU3RyaW5nIiwidHJpbVN0cmluZyIsInRyaW1IVE1MIiwiaHRtbExlZnRSaWdodEJsYW5rIiwidGVzdCIsImNvbnRhaW5zIiwic291cmNlU3RyIiwidG9VcHBlckNhc2UiLCJpbmNsdWRlcyIsImVzY2FwZUh0bWwiLCJodG1sIiwiU3RyaW5nIiwicyIsImh0bWxFbnRpdHlNYXAiLCJyZXBlYXQiLCJjb3VudCIsImpvaW4iLCJidWlsZGVyIiwiX2FyciIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7O0FBRUE7OztBQUdPLFNBQVNBLFdBQVQsQ0FBcUJDLEdBQXJCLEVBQWtDQyxhQUFsQyxFQUFtRTtBQUN0RSxNQUFJLENBQUNELEdBQUQsSUFBUUMsYUFBYSxJQUFJLENBQTdCLEVBQWdDO0FBQzVCLFdBQU8sRUFBUDtBQUNIOztBQUNELE1BQU1DLE1BQU0sR0FBR0YsR0FBRyxDQUFDRyxNQUFuQjs7QUFDQSxNQUFJRCxNQUFNLElBQUlELGFBQWQsRUFBNkI7QUFDekIsV0FBTyxDQUFDRCxHQUFELENBQVA7QUFDSDs7QUFDRCxNQUFJSSxNQUFnQixHQUFHLEVBQXZCO0FBQ0EsTUFBSUMsVUFBVSxHQUFHLENBQWpCOztBQUNBLFNB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InNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBhcnROdW1iZXIsIGh0bWxMZWZ0UmlnaHRCbGFuayB9IGZyb20gXCIuLi9jb25zdGFudC9yZWdleFwiXHJcbmltcG9ydCB7IGh0bWxFbnRpdHlNYXAgfSBmcm9tIFwiLi4vY29uc3RhbnQvbWFwXCJcclxuXHJcbi8qKlxyXG4gKiDlsIblrZfnrKbkuLLmjInkuIDlrprlrZfnrKbmlbDmi4bliIbmiJDlrZfnrKbkuLLmlbDnu4RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzcGxpdFN0cmluZyhzdHI6IHN0cmluZywgc3RlcENoYXJDb3VudDogbnVtYmVyKTogc3RyaW5nW10ge1xyXG4gICAgaWYgKCFzdHIgfHwgc3RlcENoYXJDb3VudCA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdXHJcbiAgICB9XHJcbiAgICBjb25zdCBzdHJMZW4gPSBzdHIubGVuZ3RoXHJcbiAgICBpZiAoc3RyTGVuIDw9IHN0ZXBDaGFyQ291bnQpIHtcclxuICAgICAgICByZXR1cm4gW3N0cl1cclxuICAgIH1cclxuICAgIGxldCByZXN1bHQ6IHN0cmluZ1tdID0gW11cclxuICAgIGxldCBzdGFydEluZGV4ID0gMFxyXG4gICAgd2hpbGUgKHN0YXJ0SW5kZXggPCBzdHJMZW4pIHtcclxuICAgICAgICByZXN1bHQucHVzaChzdHIuc3Vic3RyKHN0YXJ0SW5kZXgsIHN0ZXBDaGFyQ291bnQpKVxyXG4gICAgICAgIHN0YXJ0SW5kZXggKz0gc3RlcENoYXJDb3VudFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG59XHJcblxyXG4vKipcclxuICog5oiq5Y+W5a2X56ym5Liy5bm25Lul55yB55Wl56ym5Y+35pi+56S65a2X56ym5LiyXHJcbiAqIEBwYXJhbSBzdHIg5Y6f5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBsZW4g6KaB5L+d55WZ55qE5a2X56ym6ZW/5bqmXHJcbiAqIEBwYXJhbSBlbGxpcHNpc0NoYXJzIOiiq+aIquaWreeahOWtl+espuaYvuekuueahOespuWPt1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGVsbGlwc2lzKHN0cjogc3RyaW5nLCBsZW46IG51bWJlciwgZWxsaXBzaXNDaGFycyA9IFwiLi4uXCIpOiBzdHJpbmcge1xyXG4gICAgaWYgKCFzdHIgfHwgbGVuIDw9IDApIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgaWYgKHN0ci5sZW5ndGggPD0gbGVuKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0clxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5zdWJzdHJpbmcoMCwgbGVuKSArIGVsbGlwc2lzQ2hhcnNcclxufVxyXG5cclxuLyoqXHJcbiAqIOS7juWtl+espuS4suS4reaPkOWPluaVsOWtl++8iOWPr+W4puWwj+aVsOeCue+8ieOAguWmgu+8mlwiYWJjMTIzLjAxY2RlXCItPjEyMy4wMVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE51bWJlcihzdHI6IHN0cmluZyk6IG51bWJlciB8IG51bGwge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgY29uc3QgbXQgPSBzdHIubWF0Y2gocGFydE51bWJlcilcclxuICAgIGlmICghbXQgfHwgIW10Lmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFyc2VGbG9hdChtdFswXSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOWOu+W3puWPs+epuuagvFxyXG4gKiBAcGFyYW0gIHN0ciDlvoXlpITnkIblrZfnrKbkuLJcclxuICogQHJldHVybnMgIOWkhOeQhuWQjueahOWtl+espuS4slxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyaW0oc3RyOiBzdHJpbmcpIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgXCJcIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOWOu+W3puepuuagvFxyXG4gKiBAcGFyYW0gIHN0ciDlvoXlpITnkIblrZfnrKbkuLJcclxuICogQHJldHVybnMgIOWkhOeQhuWQjueahOWtl+espuS4slxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxUcmltKHN0cjogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrLywgXCJcIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOWOu+WPs+epuuagvFxyXG4gKiBAcGFyYW0gIHN0ciDlvoXlpITnkIblrZfnrKbkuLJcclxuICogQHJldHVybnMgIOWkhOeQhuWQjueahOWAvFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJUcmltKHN0cjogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xccyskLywgXCJcIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOWOu+aOieW3pui+ueeahOaMh+WumuWtl+espuS4slxyXG4gKiBAcGFyYW0gc3RyIOW+heWkhOeQhueahOWtl+espuS4slxyXG4gKiBAcGFyYW0gc3RyVG9SZW1vdmUg6ZyA6KaB56e76Zmk55qE5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBpc0lnbm9yZUNhc2Ug5piv5ZCm5b+955Wl5aSn5bCP5YaZXHJcbiAqIEByZXR1cm5zIOWkhOeQhue7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxUcmltU3RyaW5nKHN0cjogc3RyaW5nLCBzdHJUb1JlbW92ZTogc3RyaW5nLCBpc0lnbm9yZUNhc2U6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgaWYgKCFzdHJUb1JlbW92ZSkge1xyXG4gICAgICAgIHJldHVybiBzdHJcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKGBeKCR7c3RyVG9SZW1vdmV9KSpgLCBpc0lnbm9yZUNhc2UgPyBcImdpXCIgOiBcImdcIiksIFwiXCIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDljrvmjonlj7PovrnnmoTmjIflrprlrZfnrKbkuLJcclxuICogQHBhcmFtIHN0ciDlvoXlpITnkIbnmoTlrZfnrKbkuLJcclxuICogQHBhcmFtIHN0clRvUmVtb3ZlIOmcgOimgeenu+mZpOeahOWtl+espuS4slxyXG4gKiBAcGFyYW0gaXNJZ25vcmVDYXNlIOaYr+WQpuW/veeVpeWkp+Wwj+WGmVxyXG4gKiBAcmV0dXJucyDlpITnkIbnu5PmnpxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByVHJpbVN0cmluZyhzdHI6IHN0cmluZywgc3RyVG9SZW1vdmU6IHN0cmluZywgaXNJZ25vcmVDYXNlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIGlmICghc3RyVG9SZW1vdmUpIHtcclxuICAgICAgICByZXR1cm4gc3RyXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChgKCR7c3RyVG9SZW1vdmV9KSokYCwgaXNJZ25vcmVDYXNlID8gXCJnaVwiIDogXCJnXCIpLCBcIlwiKVxyXG59XHJcblxyXG4vKipcclxuICog5Y675bem5Y+z5oyH5a6a55qE5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBzdHIg5b6F5aSE55CG55qE5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBzdHJUb1JlbW92ZSDpnIDopoHnp7vpmaTnmoTlrZfnrKbkuLJcclxuICogQHBhcmFtIGlzSWdub3JlQ2FzZSDmmK/lkKblv73nlaXlpKflsI/lhplcclxuICogQHJldHVybnMg5aSE55CG57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJpbVN0cmluZyhzdHI6IHN0cmluZywgc3RyVG9SZW1vdmU6IHN0cmluZywgaXNJZ25vcmVDYXNlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIGlmICghc3RyVG9SZW1vdmUpIHtcclxuICAgICAgICByZXR1cm4gc3RyXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChgKF4oJHtzdHJUb1JlbW92ZX0pKil8KCgke3N0clRvUmVtb3ZlfSkqJClgLCBpc0lnbm9yZUNhc2UgPyBcImdpXCIgOiBcImdcIiksIFwiXCIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDku45odG1s5a2X56ym5Liy5Lit56e76Zmk5bem5Y+z56m655m95Y2g5L2N56ymXHJcbiAqIEBwYXJhbSBzdHIg5b6F5aSE55CG55qE5a2X56ym5LiyXHJcbiAqIEByZXR1cm5zIOWkhOeQhue7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyaW1IVE1MKHN0cjogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICB3aGlsZSAoaHRtbExlZnRSaWdodEJsYW5rLnRlc3Qoc3RyKSkge1xyXG4gICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKGh0bWxMZWZ0UmlnaHRCbGFuaywgXCJcIilcclxuICAgIH1cclxuICAgIHJldHVybiBzdHJcclxufVxyXG5cclxuLyoqXHJcbiAqIOaMh+Wumua6kOWtl+espuS4snNvdXJjZVN0cuS4reaYr+WQpuWMheWQq3N0cuWtl+espuS4slxyXG4gKiBAcGFyYW0gIHNvdXJjZVN0ciDmupDlrZfnrKbkuLJcclxuICogQHBhcmFtICBzdHIg6KaB5p+l5om+55qE5a2X56ym5LiyXHJcbiAqIEBwYXJhbSAgaXNJZ25vcmVDYXNlIOaYr+WQpuW/veeVpeWkp+Wwj+WGmSjpu5jorqTkuLpmYWxzZSlcclxuICogQHJldHVybnMgIOe7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5zKHNvdXJjZVN0cjogc3RyaW5nLCBzdHI6IHN0cmluZywgaXNJZ25vcmVDYXNlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIGlmICghc291cmNlU3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBpZiAoc3RyID09PSBcIlwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBpZiAoaXNJZ25vcmVDYXNlKSB7XHJcbiAgICAgICAgc291cmNlU3RyID0gc291cmNlU3RyLnRvVXBwZXJDYXNlKClcclxuICAgICAgICBzdHIgPSBzdHIudG9VcHBlckNhc2UoKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNvdXJjZVN0ci5pbmNsdWRlcyhzdHIpXHJcbn1cclxuXHJcbi8qKlxyXG4qIOWwhmh0bWzmoIfnrb7ovazmjaLkuLrlrp7kvZPlvaLlvI9cclxuKiBAcGFyYW0gIGh0bWwg6ZyA6KaB6KKr5pu/5o2i55qEaHRtbFxyXG4qIEByZXR1cm5zICDovazmjaLlkI7nmoTlgLxcclxuKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZUh0bWwoaHRtbDogc3RyaW5nKSB7XHJcbiAgICBpZiAoIWh0bWwpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFN0cmluZyhodG1sKS5yZXBsYWNlKC9bJjw+XCInXFwvXS9nLCAocykgPT4ge1xyXG4gICAgICAgIHJldHVybiBodG1sRW50aXR5TWFwW3NdXHJcbiAgICB9KVxyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtICAgc3RyIOimgemHjeWkjeeahOWtl+espuS4slxyXG4gKiBAcGFyYW0gICBjb3VudCDph43lpI3mrKHmlbBcclxuICogQHJldHVybnMgIOaWsOeahOWtl+espuS4slxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGVhdChzdHI6IHN0cmluZywgY291bnQ6IG51bWJlcikge1xyXG4gICAgaWYgKCFzdHIgfHwgY291bnQgPD0gMCkge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICBsZXQgcyA9IFtdXHJcbiAgICB3aGlsZSAoY291bnQtLSkge1xyXG4gICAgICAgIHMucHVzaChzdHIpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcy5qb2luKCcnKVxyXG59XHJcblxyXG4vKipcclxuICog5a2X56ym5Liy5om56YeP5p6E5bu65Zmo77yI5peg6ZyA5L2/55SoXCIrXCLov5vooYzlrZfnrKbkuLLnmoTmi7zmjqXvvIznm7TmjqXkvb/nlKjmraTlr7nosaHnmoRhcHBlbmTmlrnms5XlkI7vvIzlho10b1N0cmluZ+WNs+WPr+W+l+WIsOaLvOWlveeahOWtl+espuS4su+8iVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGJ1aWxkZXI8VD4ge1xyXG4gICAgcHJpdmF0ZSBfYXJyOiBUW10gPSBbXVxyXG4gICAgLyoqXHJcbiAgICAgKiDov73liqDpoblcclxuICAgICAqIEBwYXJhbSBpdGVtcyDlvoXov73liqDnmoTpoblcclxuICAgICAqIEByZXR1cm5zIHRoaXMgXHJcbiAgICAgKi9cclxuICAgIGFwcGVuZCguLi5pdGVtczogVFtdKSB7XHJcbiAgICAgICAgdGhpcy5fYXJyLnB1c2goLi4uaXRlbXMpXHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6L+U5Zue5bey5ZCI5bm255qE5omA5pyJ6aG555qE5a2X56ym5LiyXHJcbiAgICAgKi9cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcnIuam9pbihcIlwiKVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmuIXnqbrlvZPliY3nmoTmnoTlu7rlmajkuK3nmoTmiYDmnInpoblcclxuICAgICAqIEByZXR1cm5zIHRoaXNcclxuICAgICAqL1xyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5fYXJyID0gW11cclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDov5Tlm57mnoTlu7rlmajkuK3miYDmnInpobnnmoTlrZfnrKbkuLLmgLvnmoTlrZfnrKbplb/luqZcclxuICAgICAqL1xyXG4gICAgbGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCkubGVuZ3RoXHJcbiAgICB9XHJcbn0iXX0=