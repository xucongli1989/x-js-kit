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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vc3RyaW5nLnRzIl0sIm5hbWVzIjpbInNwbGl0U3RyaW5nIiwic3RyIiwic3RlcENoYXJDb3VudCIsInN0ckxlbiIsImxlbmd0aCIsInJlc3VsdCIsInN0YXJ0SW5kZXgiLCJwdXNoIiwic3Vic3RyIiwiZWxsaXBzaXMiLCJsZW4iLCJlbGxpcHNpc0NoYXJzIiwic3Vic3RyaW5nIiwiZ2V0TnVtYmVyIiwibXQiLCJtYXRjaCIsInBhcnROdW1iZXIiLCJwYXJzZUZsb2F0IiwidHJpbSIsInJlcGxhY2UiLCJsVHJpbSIsInJUcmltIiwibFRyaW1TdHJpbmciLCJzdHJUb1JlbW92ZSIsImlzSWdub3JlQ2FzZSIsIlJlZ0V4cCIsInJUcmltU3RyaW5nIiwidHJpbVN0cmluZyIsInRyaW1IVE1MIiwiaHRtbExlZnRSaWdodEJsYW5rIiwidGVzdCIsImNvbnRhaW5zIiwic291cmNlU3RyIiwidG9VcHBlckNhc2UiLCJpbmNsdWRlcyIsImVzY2FwZUh0bWwiLCJodG1sIiwiU3RyaW5nIiwicyIsImh0bWxFbnRpdHlNYXAiLCJyZXBlYXQiLCJjb3VudCIsImpvaW4iLCJidWlsZGVyIiwiX2FyciIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7O0FBS08sU0FBU0EsV0FBVCxDQUFxQkMsR0FBckIsRUFBa0NDLGFBQWxDLEVBQW1FO0FBQ3RFLE1BQUksQ0FBQ0QsR0FBRCxJQUFRQyxhQUFhLElBQUksQ0FBN0IsRUFBZ0M7QUFDNUIsV0FBTyxFQUFQO0FBQ0g7O0FBQ0QsTUFBTUMsTUFBTSxHQUFHRixHQUFHLENBQUNHLE1BQW5COztBQUNBLE1BQUlELE1BQU0sSUFBSUQsYUFBZCxFQUE2QjtBQUN6QixXQUFPLENBQUNELEdBQUQsQ0FBUDtBQUNIOztBQUNELE1BQUlJLE1BQWdCLEdBQUcsRUFBdkI7QUFDQSxNQUFJQyxVQUFVLEdBQUcsQ0FBakI7O0FBQ0EsU0FBT0EsVUFB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c0NvbnRlbnQiOlsiaW1wb3J0IHsgcGFydE51bWJlciwgaHRtbExlZnRSaWdodEJsYW5rIH0gZnJvbSBcIi4uL2NvbnN0YW50L3JlZ2V4XCJcclxuaW1wb3J0IHsgaHRtbEVudGl0eU1hcCB9IGZyb20gXCIuLi9jb25zdGFudC9tYXBcIlxyXG5cclxuLyoqXHJcbiAqIOWwhuWtl+espuS4suaMieS4gOWumuWtl+espuaVsOaLhuWIhuaIkOWtl+espuS4suaVsOe7hFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0U3RyaW5nKHN0cjogc3RyaW5nLCBzdGVwQ2hhckNvdW50OiBudW1iZXIpOiBzdHJpbmdbXSB7XHJcbiAgICBpZiAoIXN0ciB8fCBzdGVwQ2hhckNvdW50IDw9IDApIHtcclxuICAgICAgICByZXR1cm4gW11cclxuICAgIH1cclxuICAgIGNvbnN0IHN0ckxlbiA9IHN0ci5sZW5ndGhcclxuICAgIGlmIChzdHJMZW4gPD0gc3RlcENoYXJDb3VudCkge1xyXG4gICAgICAgIHJldHVybiBbc3RyXVxyXG4gICAgfVxyXG4gICAgbGV0IHJlc3VsdDogc3RyaW5nW10gPSBbXVxyXG4gICAgbGV0IHN0YXJ0SW5kZXggPSAwXHJcbiAgICB3aGlsZSAoc3RhcnRJbmRleCA8IHN0ckxlbikge1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKHN0ci5zdWJzdHIoc3RhcnRJbmRleCwgc3RlcENoYXJDb3VudCkpXHJcbiAgICAgICAgc3RhcnRJbmRleCArPSBzdGVwQ2hhckNvdW50XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmiKrlj5blrZfnrKbkuLLlubbku6XnnIHnlaXnrKblj7fmmL7npLrlrZfnrKbkuLJcclxuICogQHBhcmFtIHN0ciDljp/lrZfnrKbkuLJcclxuICogQHBhcmFtIGxlbiDopoHkv53nlZnnmoTlrZfnrKbplb/luqZcclxuICogQHBhcmFtIGVsbGlwc2lzQ2hhcnMg6KKr5oiq5pat55qE5a2X56ym5pi+56S655qE56ym5Y+3XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZWxsaXBzaXMoc3RyOiBzdHJpbmcsIGxlbjogbnVtYmVyLCBlbGxpcHNpc0NoYXJzID0gXCIuLi5cIik6IHN0cmluZyB7XHJcbiAgICBpZiAoIXN0ciB8fCBsZW4gPD0gMCkge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICBpZiAoc3RyLmxlbmd0aCA8PSBsZW4pIHtcclxuICAgICAgICByZXR1cm4gc3RyXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnN1YnN0cmluZygwLCBsZW4pICsgZWxsaXBzaXNDaGFyc1xyXG59XHJcblxyXG4vKipcclxuICog5LuO5a2X56ym5Liy5Lit5o+Q5Y+W5pWw5a2X77yI5Y+v5bim5bCP5pWw54K577yJ44CC5aaC77yaXCJhYmMxMjMuMDFjZGVcIi0+MTIzLjAxXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TnVtYmVyKHN0cjogc3RyaW5nKTogbnVtYmVyIHwgbnVsbCB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICBjb25zdCBtdCA9IHN0ci5tYXRjaChwYXJ0TnVtYmVyKVxyXG4gICAgaWYgKCFtdCB8fCAhbXQubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIHJldHVybiBwYXJzZUZsb2F0KG10WzBdKVxyXG59XHJcblxyXG4vKipcclxuICog5Y675bem5Y+z56m65qC8XHJcbiAqIEBwYXJhbSAgc3RyIOW+heWkhOeQhuWtl+espuS4slxyXG4gKiBAcmV0dXJucyAg5aSE55CG5ZCO55qE5a2X56ym5LiyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJpbShzdHI6IHN0cmluZykge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCBcIlwiKVxyXG59XHJcblxyXG4vKipcclxuICog5Y675bem56m65qC8XHJcbiAqIEBwYXJhbSAgc3RyIOW+heWkhOeQhuWtl+espuS4slxyXG4gKiBAcmV0dXJucyAg5aSE55CG5ZCO55qE5a2X56ym5LiyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbFRyaW0oc3RyOiBzdHJpbmcpIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXlxccysvLCBcIlwiKVxyXG59XHJcblxyXG4vKipcclxuICog5Y675Y+z56m65qC8XHJcbiAqIEBwYXJhbSAgc3RyIOW+heWkhOeQhuWtl+espuS4slxyXG4gKiBAcmV0dXJucyAg5aSE55CG5ZCO55qE5YC8XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gclRyaW0oc3RyOiBzdHJpbmcpIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxzKyQvLCBcIlwiKVxyXG59XHJcblxyXG4vKipcclxuICog5Y675o6J5bem6L6555qE5oyH5a6a5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBzdHIg5b6F5aSE55CG55qE5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBzdHJUb1JlbW92ZSDpnIDopoHnp7vpmaTnmoTlrZfnrKbkuLJcclxuICogQHBhcmFtIGlzSWdub3JlQ2FzZSDmmK/lkKblv73nlaXlpKflsI/lhplcclxuICogQHJldHVybnMg5aSE55CG57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbFRyaW1TdHJpbmcoc3RyOiBzdHJpbmcsIHN0clRvUmVtb3ZlOiBzdHJpbmcsIGlzSWdub3JlQ2FzZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICBpZiAoIXN0clRvUmVtb3ZlKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0clxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoYF4oJHtzdHJUb1JlbW92ZX0pKmAsIGlzSWdub3JlQ2FzZSA/IFwiZ2lcIiA6IFwiZ1wiKSwgXCJcIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOWOu+aOieWPs+i+ueeahOaMh+WumuWtl+espuS4slxyXG4gKiBAcGFyYW0gc3RyIOW+heWkhOeQhueahOWtl+espuS4slxyXG4gKiBAcGFyYW0gc3RyVG9SZW1vdmUg6ZyA6KaB56e76Zmk55qE5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBpc0lnbm9yZUNhc2Ug5piv5ZCm5b+955Wl5aSn5bCP5YaZXHJcbiAqIEByZXR1cm5zIOWkhOeQhue7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJUcmltU3RyaW5nKHN0cjogc3RyaW5nLCBzdHJUb1JlbW92ZTogc3RyaW5nLCBpc0lnbm9yZUNhc2U6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgaWYgKCFzdHJUb1JlbW92ZSkge1xyXG4gICAgICAgIHJldHVybiBzdHJcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKGAoJHtzdHJUb1JlbW92ZX0pKiRgLCBpc0lnbm9yZUNhc2UgPyBcImdpXCIgOiBcImdcIiksIFwiXCIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDljrvlt6blj7PmjIflrprnmoTlrZfnrKbkuLJcclxuICogQHBhcmFtIHN0ciDlvoXlpITnkIbnmoTlrZfnrKbkuLJcclxuICogQHBhcmFtIHN0clRvUmVtb3ZlIOmcgOimgeenu+mZpOeahOWtl+espuS4slxyXG4gKiBAcGFyYW0gaXNJZ25vcmVDYXNlIOaYr+WQpuW/veeVpeWkp+Wwj+WGmVxyXG4gKiBAcmV0dXJucyDlpITnkIbnu5PmnpxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmltU3RyaW5nKHN0cjogc3RyaW5nLCBzdHJUb1JlbW92ZTogc3RyaW5nLCBpc0lnbm9yZUNhc2U6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgaWYgKCFzdHJUb1JlbW92ZSkge1xyXG4gICAgICAgIHJldHVybiBzdHJcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKGAoXigke3N0clRvUmVtb3ZlfSkqKXwoKCR7c3RyVG9SZW1vdmV9KSokKWAsIGlzSWdub3JlQ2FzZSA/IFwiZ2lcIiA6IFwiZ1wiKSwgXCJcIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOS7jmh0bWzlrZfnrKbkuLLkuK3np7vpmaTlt6blj7Pnqbrnmb3ljaDkvY3nrKZcclxuICogQHBhcmFtIHN0ciDlvoXlpITnkIbnmoTlrZfnrKbkuLJcclxuICogQHJldHVybnMg5aSE55CG57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJpbUhUTUwoc3RyOiBzdHJpbmcpIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIHdoaWxlIChodG1sTGVmdFJpZ2h0QmxhbmsudGVzdChzdHIpKSB7XHJcbiAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoaHRtbExlZnRSaWdodEJsYW5rLCBcIlwiKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0clxyXG59XHJcblxyXG4vKipcclxuICog5oyH5a6a5rqQ5a2X56ym5Liyc291cmNlU3Ry5Lit5piv5ZCm5YyF5ZCrc3Ry5a2X56ym5LiyXHJcbiAqIEBwYXJhbSAgc291cmNlU3RyIOa6kOWtl+espuS4slxyXG4gKiBAcGFyYW0gIHN0ciDopoHmn6Xmib7nmoTlrZfnrKbkuLJcclxuICogQHBhcmFtICBpc0lnbm9yZUNhc2Ug5piv5ZCm5b+955Wl5aSn5bCP5YaZKOm7mOiupOS4umZhbHNlKVxyXG4gKiBAcmV0dXJucyAg57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbnMoc291cmNlU3RyOiBzdHJpbmcsIHN0cjogc3RyaW5nLCBpc0lnbm9yZUNhc2U6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgaWYgKCFzb3VyY2VTdHIpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGlmIChzdHIgPT09IFwiXCIpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGlmIChpc0lnbm9yZUNhc2UpIHtcclxuICAgICAgICBzb3VyY2VTdHIgPSBzb3VyY2VTdHIudG9VcHBlckNhc2UoKVxyXG4gICAgICAgIHN0ciA9IHN0ci50b1VwcGVyQ2FzZSgpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc291cmNlU3RyLmluY2x1ZGVzKHN0cilcclxufVxyXG5cclxuLyoqXHJcbiog5bCGaHRtbOagh+etvui9rOaNouS4uuWunuS9k+W9ouW8j1xyXG4qIEBwYXJhbSAgaHRtbCDpnIDopoHooqvmm7/mjaLnmoRodG1sXHJcbiogQHJldHVybnMgIOi9rOaNouWQjueahOWAvFxyXG4qL1xyXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlSHRtbChodG1sOiBzdHJpbmcpIHtcclxuICAgIGlmICghaHRtbCkge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gU3RyaW5nKGh0bWwpLnJlcGxhY2UoL1smPD5cIidcXC9dL2csIChzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGh0bWxFbnRpdHlNYXBbc11cclxuICAgIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gICBzdHIg6KaB6YeN5aSN55qE5a2X56ym5LiyXHJcbiAqIEBwYXJhbSAgIGNvdW50IOmHjeWkjeasoeaVsFxyXG4gKiBAcmV0dXJucyAg5paw55qE5a2X56ym5LiyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVwZWF0KHN0cjogc3RyaW5nLCBjb3VudDogbnVtYmVyKSB7XHJcbiAgICBpZiAoIXN0ciB8fCBjb3VudCA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIGxldCBzID0gW11cclxuICAgIHdoaWxlIChjb3VudC0tKSB7XHJcbiAgICAgICAgcy5wdXNoKHN0cilcclxuICAgIH1cclxuICAgIHJldHVybiBzLmpvaW4oJycpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlrZfnrKbkuLLmibnph4/mnoTlu7rlmajvvIjml6DpnIDkvb/nlKhcIitcIui/m+ihjOWtl+espuS4sueahOaLvOaOpe+8jOebtOaOpeS9v+eUqOatpOWvueixoeeahGFwcGVuZOaWueazleWQju+8jOWGjXRvU3RyaW5n5Y2z5Y+v5b6X5Yiw5ou85aW955qE5a2X56ym5Liy77yJXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgYnVpbGRlcjxUPiB7XHJcbiAgICBwcml2YXRlIF9hcnI6IFRbXSA9IFtdXHJcbiAgICAvKipcclxuICAgICAqIOi/veWKoOmhuVxyXG4gICAgICogQHBhcmFtIGl0ZW1zIOW+hei/veWKoOeahOmhuVxyXG4gICAgICogQHJldHVybnMgdGhpcyBcclxuICAgICAqL1xyXG4gICAgYXBwZW5kKC4uLml0ZW1zOiBUW10pIHtcclxuICAgICAgICB0aGlzLl9hcnIucHVzaCguLi5pdGVtcylcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDov5Tlm57lt7LlkIjlubbnmoTmiYDmnInpobnnmoTlrZfnrKbkuLJcclxuICAgICAqL1xyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Fyci5qb2luKFwiXCIpXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOa4heepuuW9k+WJjeeahOaehOW7uuWZqOS4reeahOaJgOaciemhuVxyXG4gICAgICogQHJldHVybnMgdGhpc1xyXG4gICAgICovXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLl9hcnIgPSBbXVxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOi/lOWbnuaehOW7uuWZqOS4reaJgOaciemhueeahOWtl+espuS4suaAu+eahOWtl+espumVv+W6plxyXG4gICAgICovXHJcbiAgICBsZW5ndGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKS5sZW5ndGhcclxuICAgIH1cclxufSJdfQ==