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
exports.format = format;
exports.removeBlankLines = removeBlankLines;
exports.builder = exports.Builder = void 0;

var _regex = require("../constant/regex");

var _regexp = require("./regexp");

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

  return str.replace(new RegExp("^(".concat((0, _regexp.escapeReg)(strToRemove), ")*"), isIgnoreCase ? "gi" : "g"), "");
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

  return str.replace(new RegExp("(".concat((0, _regexp.escapeReg)(strToRemove), ")*$"), isIgnoreCase ? "gi" : "g"), "");
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

  return str.replace(new RegExp("(^(".concat((0, _regexp.escapeReg)(strToRemove), ")*)|((").concat((0, _regexp.escapeReg)(strToRemove), ")*$)"), isIgnoreCase ? "gi" : "g"), "");
}
/**
 * 从html字符串中移除左右空白占位符
 * @param html 待处理的字符串
 * @returns 处理结果
 */


function trimHTML(html) {
  var str = html;

  if (!str) {
    return "";
  }

  while (_regex.htmlLeftRightBlank.test(str)) {
    str = str.replace(_regex.htmlLeftRightBlank, "");
  }

  return str;
}
/**
 * 指定源字符串source中是否包含search字符串
 * @param  source 源字符串
 * @param  search 要查找的字符串
 * @param  isIgnoreCase 是否忽略大小写(默认为false)
 * @returns  结果
 */


function contains(source, search) {
  var isIgnoreCase = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var sourceStr = source;
  var str = search;

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

  return String(html).replace(/[&<>"'/]/g, function (s) {
    return _map.htmlEntityMap[s];
  });
}
/**
 * @param   str 要重复的字符串
 * @param   repeatCount 重复次数
 * @returns  新的字符串
 */


function repeat(str, repeatCount) {
  var count = repeatCount;

  if (!str || count <= 0) {
    return "";
  }

  var s = [];

  while (count--) {
    s.push(str);
  }

  return s.join("");
}
/**
 * 字符串批量构建器（无需使用"+"进行字符串的拼接，直接使用此对象的append方法后，再toString即可得到拼好的字符串）
 */


var Builder = /*#__PURE__*/function () {
  function Builder() {
    _classCallCheck(this, Builder);

    _defineProperty(this, "_arr", []);
  }

  _createClass(Builder, [{
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

  return Builder;
}();

exports.Builder = Builder;
var builder = Builder;
/**
 * 使用模板格式化字符串
 * @param str 模板，如："今天是星期{0}，已成交{1}单！"
 * @param args 模板中的参数
 */

exports.builder = builder;

function format(str) {
  if (!str || !(arguments.length <= 1 ? 0 : arguments.length - 1)) {
    return str;
  }

  var result = str;

  for (var token = 0; token < (arguments.length <= 1 ? 0 : arguments.length - 1); token++) {
    result = result.replace(new RegExp("\\{" + token + "\\}", "gi"), token + 1 < 1 || arguments.length <= token + 1 ? undefined : arguments[token + 1]);
  }

  return result;
}
/**
 * 删除空白行（空白行是指：此行为空白且末尾为 \r 或 \n）
 */


function removeBlankLines(str) {
  if (!str) {
    return "";
  }

  return str.replace(/^\s*[\r\n]/gm, "");
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vc3RyaW5nLnRzIl0sIm5hbWVzIjpbInNwbGl0U3RyaW5nIiwic3RyIiwic3RlcENoYXJDb3VudCIsInN0ckxlbiIsImxlbmd0aCIsInJlc3VsdCIsInN0YXJ0SW5kZXgiLCJwdXNoIiwic3Vic3RyIiwiZWxsaXBzaXMiLCJsZW4iLCJlbGxpcHNpc0NoYXJzIiwic3Vic3RyaW5nIiwiZ2V0TnVtYmVyIiwibXQiLCJtYXRjaCIsInBhcnROdW1iZXIiLCJwYXJzZUZsb2F0IiwidHJpbSIsInJlcGxhY2UiLCJsVHJpbSIsInJUcmltIiwibFRyaW1TdHJpbmciLCJzdHJUb1JlbW92ZSIsImlzSWdub3JlQ2FzZSIsIlJlZ0V4cCIsInJUcmltU3RyaW5nIiwidHJpbVN0cmluZyIsInRyaW1IVE1MIiwiaHRtbCIsImh0bWxMZWZ0UmlnaHRCbGFuayIsInRlc3QiLCJjb250YWlucyIsInNvdXJjZSIsInNlYXJjaCIsInNvdXJjZVN0ciIsInRvVXBwZXJDYXNlIiwiaW5jbHVkZXMiLCJlc2NhcGVIdG1sIiwiU3RyaW5nIiwicyIsImh0bWxFbnRpdHlNYXAiLCJyZXBlYXQiLCJyZXBlYXRDb3VudCIsImNvdW50Iiwiam9pbiIsIkJ1aWxkZXIiLCJfYXJyIiwidG9TdHJpbmciLCJidWlsZGVyIiwiZm9ybWF0IiwidG9rZW4iLCJyZW1vdmVCbGFua0xpbmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDTyxTQUFTQSxXQUFULENBQXFCQyxHQUFyQixFQUFrQ0MsYUFBbEMsRUFBbUU7QUFDdEUsTUFBSSxDQUFDRCxHQUFELElBQVFDLGFBQWEsSUFBSSxDQUE3QixFQUFnQztBQUM1QixXQUFPLEVBQVA7QUFDSDs7QUFDRCxNQUFNQyxNQUFNLEdBQUdGLEdBQUcsQ0FBQ0csTUFBbkI7O0FBQ0EsTUFBSUQsTUFBTSxJQUFJRCxhQUFkLEVBQTZCO0FB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REEsS0FBN0QsNkJBQTZEQSxLQUE3RCxNQUFUO0FBQ0g7O0FBQ0QsU0FBTzlDLE1BQVA7QUFDSDtBQUVEO0FBQ0E7QUFDQTs7O0FBQ08sU0FBUytDLGdCQUFULENBQTBCbkQsR0FBMUIsRUFBK0M7QUFDbEQsTUFBSSxDQUFDQSxHQUFMLEVBQVU7QUFDTixXQUFPLEVBQVA7QUFDSDs7QUFDRCxTQUFPQSxHQUFHLENBQUNrQixPQUFKLENBQVksY0FBWixFQUE0QixFQUE1QixDQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwYXJ0TnVtYmVyLCBodG1sTGVmdFJpZ2h0QmxhbmsgfSBmcm9tIFwiLi4vY29uc3RhbnQvcmVnZXhcIlxyXG5pbXBvcnQgeyBlc2NhcGVSZWcgfSBmcm9tIFwiLi9yZWdleHBcIlxyXG5pbXBvcnQgeyBodG1sRW50aXR5TWFwIH0gZnJvbSBcIi4uL2NvbnN0YW50L21hcFwiXHJcblxyXG4vKipcclxuICog5bCG5a2X56ym5Liy5oyJ5LiA5a6a5a2X56ym5pWw5ouG5YiG5oiQ5a2X56ym5Liy5pWw57uEXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3BsaXRTdHJpbmcoc3RyOiBzdHJpbmcsIHN0ZXBDaGFyQ291bnQ6IG51bWJlcik6IHN0cmluZ1tdIHtcclxuICAgIGlmICghc3RyIHx8IHN0ZXBDaGFyQ291bnQgPD0gMCkge1xyXG4gICAgICAgIHJldHVybiBbXVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc3RyTGVuID0gc3RyLmxlbmd0aFxyXG4gICAgaWYgKHN0ckxlbiA8PSBzdGVwQ2hhckNvdW50KSB7XHJcbiAgICAgICAgcmV0dXJuIFtzdHJdXHJcbiAgICB9XHJcbiAgICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW11cclxuICAgIGxldCBzdGFydEluZGV4ID0gMFxyXG4gICAgd2hpbGUgKHN0YXJ0SW5kZXggPCBzdHJMZW4pIHtcclxuICAgICAgICByZXN1bHQucHVzaChzdHIuc3Vic3RyKHN0YXJ0SW5kZXgsIHN0ZXBDaGFyQ291bnQpKVxyXG4gICAgICAgIHN0YXJ0SW5kZXggKz0gc3RlcENoYXJDb3VudFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG59XHJcblxyXG4vKipcclxuICog5oiq5Y+W5a2X56ym5Liy5bm25Lul55yB55Wl56ym5Y+35pi+56S65a2X56ym5LiyXHJcbiAqIEBwYXJhbSBzdHIg5Y6f5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBsZW4g6KaB5L+d55WZ55qE5a2X56ym6ZW/5bqmXHJcbiAqIEBwYXJhbSBlbGxpcHNpc0NoYXJzIOiiq+aIquaWreeahOWtl+espuaYvuekuueahOespuWPt1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGVsbGlwc2lzKHN0cjogc3RyaW5nLCBsZW46IG51bWJlciwgZWxsaXBzaXNDaGFycyA9IFwiLi4uXCIpOiBzdHJpbmcge1xyXG4gICAgaWYgKCFzdHIgfHwgbGVuIDw9IDApIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgaWYgKHN0ci5sZW5ndGggPD0gbGVuKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0clxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5zdWJzdHJpbmcoMCwgbGVuKSArIGVsbGlwc2lzQ2hhcnNcclxufVxyXG5cclxuLyoqXHJcbiAqIOS7juWtl+espuS4suS4reaPkOWPluaVsOWtl++8iOWPr+W4puWwj+aVsOeCue+8ieOAguWmgu+8mlwiYWJjMTIzLjAxY2RlXCItPjEyMy4wMVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE51bWJlcihzdHI6IHN0cmluZyk6IG51bWJlciB8IG51bGwge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgY29uc3QgbXQgPSBzdHIubWF0Y2gocGFydE51bWJlcilcclxuICAgIGlmICghbXQgfHwgIW10Lmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFyc2VGbG9hdChtdFswXSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOWOu+W3puWPs+epuuagvFxyXG4gKiBAcGFyYW0gIHN0ciDlvoXlpITnkIblrZfnrKbkuLJcclxuICogQHJldHVybnMgIOWkhOeQhuWQjueahOWtl+espuS4slxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyaW0oc3RyOiBzdHJpbmcpIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgXCJcIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOWOu+W3puepuuagvFxyXG4gKiBAcGFyYW0gIHN0ciDlvoXlpITnkIblrZfnrKbkuLJcclxuICogQHJldHVybnMgIOWkhOeQhuWQjueahOWtl+espuS4slxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxUcmltKHN0cjogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrLywgXCJcIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOWOu+WPs+epuuagvFxyXG4gKiBAcGFyYW0gIHN0ciDlvoXlpITnkIblrZfnrKbkuLJcclxuICogQHJldHVybnMgIOWkhOeQhuWQjueahOWAvFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJUcmltKHN0cjogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xccyskLywgXCJcIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOWOu+aOieW3pui+ueeahOaMh+WumuWtl+espuS4slxyXG4gKiBAcGFyYW0gc3RyIOW+heWkhOeQhueahOWtl+espuS4slxyXG4gKiBAcGFyYW0gc3RyVG9SZW1vdmUg6ZyA6KaB56e76Zmk55qE5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBpc0lnbm9yZUNhc2Ug5piv5ZCm5b+955Wl5aSn5bCP5YaZXHJcbiAqIEByZXR1cm5zIOWkhOeQhue7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxUcmltU3RyaW5nKHN0cjogc3RyaW5nLCBzdHJUb1JlbW92ZTogc3RyaW5nLCBpc0lnbm9yZUNhc2U6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgaWYgKCFzdHJUb1JlbW92ZSkge1xyXG4gICAgICAgIHJldHVybiBzdHJcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKGBeKCR7ZXNjYXBlUmVnKHN0clRvUmVtb3ZlKX0pKmAsIGlzSWdub3JlQ2FzZSA/IFwiZ2lcIiA6IFwiZ1wiKSwgXCJcIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOWOu+aOieWPs+i+ueeahOaMh+WumuWtl+espuS4slxyXG4gKiBAcGFyYW0gc3RyIOW+heWkhOeQhueahOWtl+espuS4slxyXG4gKiBAcGFyYW0gc3RyVG9SZW1vdmUg6ZyA6KaB56e76Zmk55qE5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBpc0lnbm9yZUNhc2Ug5piv5ZCm5b+955Wl5aSn5bCP5YaZXHJcbiAqIEByZXR1cm5zIOWkhOeQhue7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJUcmltU3RyaW5nKHN0cjogc3RyaW5nLCBzdHJUb1JlbW92ZTogc3RyaW5nLCBpc0lnbm9yZUNhc2U6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgaWYgKCFzdHJUb1JlbW92ZSkge1xyXG4gICAgICAgIHJldHVybiBzdHJcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKGAoJHtlc2NhcGVSZWcoc3RyVG9SZW1vdmUpfSkqJGAsIGlzSWdub3JlQ2FzZSA/IFwiZ2lcIiA6IFwiZ1wiKSwgXCJcIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOWOu+W3puWPs+aMh+WumueahOWtl+espuS4slxyXG4gKiBAcGFyYW0gc3RyIOW+heWkhOeQhueahOWtl+espuS4slxyXG4gKiBAcGFyYW0gc3RyVG9SZW1vdmUg6ZyA6KaB56e76Zmk55qE5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBpc0lnbm9yZUNhc2Ug5piv5ZCm5b+955Wl5aSn5bCP5YaZXHJcbiAqIEByZXR1cm5zIOWkhOeQhue7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyaW1TdHJpbmcoc3RyOiBzdHJpbmcsIHN0clRvUmVtb3ZlOiBzdHJpbmcsIGlzSWdub3JlQ2FzZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICBpZiAoIXN0clRvUmVtb3ZlKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0clxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoYCheKCR7ZXNjYXBlUmVnKHN0clRvUmVtb3ZlKX0pKil8KCgke2VzY2FwZVJlZyhzdHJUb1JlbW92ZSl9KSokKWAsIGlzSWdub3JlQ2FzZSA/IFwiZ2lcIiA6IFwiZ1wiKSwgXCJcIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOS7jmh0bWzlrZfnrKbkuLLkuK3np7vpmaTlt6blj7Pnqbrnmb3ljaDkvY3nrKZcclxuICogQHBhcmFtIGh0bWwg5b6F5aSE55CG55qE5a2X56ym5LiyXHJcbiAqIEByZXR1cm5zIOWkhOeQhue7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyaW1IVE1MKGh0bWw6IHN0cmluZykge1xyXG4gICAgbGV0IHN0ciA9IGh0bWxcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIHdoaWxlIChodG1sTGVmdFJpZ2h0QmxhbmsudGVzdChzdHIpKSB7XHJcbiAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoaHRtbExlZnRSaWdodEJsYW5rLCBcIlwiKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0clxyXG59XHJcblxyXG4vKipcclxuICog5oyH5a6a5rqQ5a2X56ym5Liyc291cmNl5Lit5piv5ZCm5YyF5ZCrc2VhcmNo5a2X56ym5LiyXHJcbiAqIEBwYXJhbSAgc291cmNlIOa6kOWtl+espuS4slxyXG4gKiBAcGFyYW0gIHNlYXJjaCDopoHmn6Xmib7nmoTlrZfnrKbkuLJcclxuICogQHBhcmFtICBpc0lnbm9yZUNhc2Ug5piv5ZCm5b+955Wl5aSn5bCP5YaZKOm7mOiupOS4umZhbHNlKVxyXG4gKiBAcmV0dXJucyAg57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbnMoc291cmNlOiBzdHJpbmcsIHNlYXJjaDogc3RyaW5nLCBpc0lnbm9yZUNhc2U6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgbGV0IHNvdXJjZVN0ciA9IHNvdXJjZVxyXG4gICAgbGV0IHN0ciA9IHNlYXJjaFxyXG4gICAgaWYgKCFzb3VyY2VTdHIpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGlmIChzdHIgPT09IFwiXCIpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGlmIChpc0lnbm9yZUNhc2UpIHtcclxuICAgICAgICBzb3VyY2VTdHIgPSBzb3VyY2VTdHIudG9VcHBlckNhc2UoKVxyXG4gICAgICAgIHN0ciA9IHN0ci50b1VwcGVyQ2FzZSgpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc291cmNlU3RyLmluY2x1ZGVzKHN0cilcclxufVxyXG5cclxuLyoqXHJcbiAqIOWwhmh0bWzmoIfnrb7ovazmjaLkuLrlrp7kvZPlvaLlvI9cclxuICogQHBhcmFtICBodG1sIOmcgOimgeiiq+abv+aNoueahGh0bWxcclxuICogQHJldHVybnMgIOi9rOaNouWQjueahOWAvFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZUh0bWwoaHRtbDogc3RyaW5nKSB7XHJcbiAgICBpZiAoIWh0bWwpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFN0cmluZyhodG1sKS5yZXBsYWNlKC9bJjw+XCInL10vZywgKHMpID0+IGh0bWxFbnRpdHlNYXBbc10pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gICBzdHIg6KaB6YeN5aSN55qE5a2X56ym5LiyXHJcbiAqIEBwYXJhbSAgIHJlcGVhdENvdW50IOmHjeWkjeasoeaVsFxyXG4gKiBAcmV0dXJucyAg5paw55qE5a2X56ym5LiyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVwZWF0KHN0cjogc3RyaW5nLCByZXBlYXRDb3VudDogbnVtYmVyKSB7XHJcbiAgICBsZXQgY291bnQgPSByZXBlYXRDb3VudFxyXG4gICAgaWYgKCFzdHIgfHwgY291bnQgPD0gMCkge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICBjb25zdCBzID0gW11cclxuICAgIHdoaWxlIChjb3VudC0tKSB7XHJcbiAgICAgICAgcy5wdXNoKHN0cilcclxuICAgIH1cclxuICAgIHJldHVybiBzLmpvaW4oXCJcIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOWtl+espuS4suaJuemHj+aehOW7uuWZqO+8iOaXoOmcgOS9v+eUqFwiK1wi6L+b6KGM5a2X56ym5Liy55qE5ou85o6l77yM55u05o6l5L2/55So5q2k5a+56LGh55qEYXBwZW5k5pa55rOV5ZCO77yM5YaNdG9TdHJpbmfljbPlj6/lvpfliLDmi7zlpb3nmoTlrZfnrKbkuLLvvIlcclxuICovXHJcbmV4cG9ydCBjbGFzcyBCdWlsZGVyPFQ+IHtcclxuICAgIHByaXZhdGUgX2FycjogVFtdID0gW11cclxuICAgIC8qKlxyXG4gICAgICog6L+95Yqg6aG5XHJcbiAgICAgKiBAcGFyYW0gaXRlbXMg5b6F6L+95Yqg55qE6aG5XHJcbiAgICAgKiBAcmV0dXJucyB0aGlzXHJcbiAgICAgKi9cclxuICAgIGFwcGVuZCguLi5pdGVtczogVFtdKSB7XHJcbiAgICAgICAgdGhpcy5fYXJyLnB1c2goLi4uaXRlbXMpXHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6L+U5Zue5bey5ZCI5bm255qE5omA5pyJ6aG555qE5a2X56ym5LiyXHJcbiAgICAgKi9cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcnIuam9pbihcIlwiKVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmuIXnqbrlvZPliY3nmoTmnoTlu7rlmajkuK3nmoTmiYDmnInpoblcclxuICAgICAqIEByZXR1cm5zIHRoaXNcclxuICAgICAqL1xyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5fYXJyID0gW11cclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDov5Tlm57mnoTlu7rlmajkuK3miYDmnInpobnnmoTlrZfnrKbkuLLmgLvnmoTlrZfnrKbplb/luqZcclxuICAgICAqL1xyXG4gICAgbGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCkubGVuZ3RoXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBidWlsZGVyID0gQnVpbGRlclxyXG5cclxuLyoqXHJcbiAqIOS9v+eUqOaooeadv+agvOW8j+WMluWtl+espuS4slxyXG4gKiBAcGFyYW0gc3RyIOaooeadv++8jOWmgu+8mlwi5LuK5aSp5piv5pif5pyfezB977yM5bey5oiQ5LqkezF95Y2V77yBXCJcclxuICogQHBhcmFtIGFyZ3Mg5qih5p2/5Lit55qE5Y+C5pWwXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0KHN0cjogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgaWYgKCFzdHIgfHwgIWFyZ3MubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0clxyXG4gICAgfVxyXG4gICAgbGV0IHJlc3VsdCA9IHN0clxyXG4gICAgZm9yIChsZXQgdG9rZW4gPSAwOyB0b2tlbiA8IGFyZ3MubGVuZ3RoOyB0b2tlbisrKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UobmV3IFJlZ0V4cChcIlxcXFx7XCIgKyB0b2tlbiArIFwiXFxcXH1cIiwgXCJnaVwiKSwgYXJnc1t0b2tlbl0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKDpmaTnqbrnmb3ooYzvvIjnqbrnmb3ooYzmmK/mjIfvvJrmraTooYzkuLrnqbrnmb3kuJTmnKvlsL7kuLogXFxyIOaIliBcXG7vvIlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVCbGFua0xpbmVzKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXlxccypbXFxyXFxuXS9nbSwgXCJcIilcclxufVxyXG4iXX0=