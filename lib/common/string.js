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

  return s.join('');
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
exports.builder = builder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vc3RyaW5nLnRzIl0sIm5hbWVzIjpbInNwbGl0U3RyaW5nIiwic3RyIiwic3RlcENoYXJDb3VudCIsInN0ckxlbiIsImxlbmd0aCIsInJlc3VsdCIsInN0YXJ0SW5kZXgiLCJwdXNoIiwic3Vic3RyIiwiZWxsaXBzaXMiLCJsZW4iLCJlbGxpcHNpc0NoYXJzIiwic3Vic3RyaW5nIiwiZ2V0TnVtYmVyIiwibXQiLCJtYXRjaCIsInBhcnROdW1iZXIiLCJwYXJzZUZsb2F0IiwidHJpbSIsInJlcGxhY2UiLCJsVHJpbSIsInJUcmltIiwibFRyaW1TdHJpbmciLCJzdHJUb1JlbW92ZSIsImlzSWdub3JlQ2FzZSIsIlJlZ0V4cCIsInJUcmltU3RyaW5nIiwidHJpbVN0cmluZyIsInRyaW1IVE1MIiwiaHRtbCIsImh0bWxMZWZ0UmlnaHRCbGFuayIsInRlc3QiLCJjb250YWlucyIsInNvdXJjZSIsInNlYXJjaCIsInNvdXJjZVN0ciIsInRvVXBwZXJDYXNlIiwiaW5jbHVkZXMiLCJlc2NhcGVIdG1sIiwiU3RyaW5nIiwicyIsImh0bWxFbnRpdHlNYXAiLCJyZXBlYXQiLCJyZXBlYXRDb3VudCIsImNvdW50Iiwiam9pbiIsIkJ1aWxkZXIiLCJfYXJyIiwidG9TdHJpbmciLCJidWlsZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRUE7OztBQUdPLFNBQVNBLFdBQVQsQ0FBcUJDLEdBQXJCLEVBQWtDQyxhQUFsQyxFQUFtRTtBQUN0RSxNQUFJLENBQUNELEdBQUQsSUFBUUMsYUFBYSxJQUFJLENBQTdCLEVBQWdDO0FBQzVCLFdBQU8sRUFBUDtBQUNIOztBQUNELE1BQU1DLE1BQU0sR0FBR0YsR0FBRyxDQUFDRyxNQUFuQjs7QUFDQSxNQUFJRCxNQUFNLElBQUlELGFBQWQsRUFBNkI7QUFDekIsV0FBTyxDQUFDRCxHQUFELENBQVA7QUFDSDs7QUFDRCxNQUFNSSxNQUFn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QVA7QUFDSDtBQUNEOzs7Ozs7K0JBR1c7QUFDUCxhQUFPLEtBQUt3QyxJQUFMLENBQVVGLElBQVYsQ0FBZSxFQUFmLENBQVA7QUFDSDtBQUNEOzs7Ozs7OzRCQUlRO0FBQ0osV0FBS0UsSUFBTCxHQUFZLEVBQVo7QUFDQSxhQUFPLElBQVA7QUFDSDtBQUNEOzs7Ozs7NkJBR1M7QUFDTCxhQUFPLEtBQUtDLFFBQUwsR0FBZ0I1QyxNQUF2QjtBQUNIOzs7Ozs7O0FBR0UsSUFBTTZDLE9BQU8sR0FBR0gsT0FBaEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwYXJ0TnVtYmVyLCBodG1sTGVmdFJpZ2h0QmxhbmsgfSBmcm9tIFwiLi4vY29uc3RhbnQvcmVnZXhcIlxyXG5pbXBvcnQgeyBlc2NhcGVSZWcgfSBmcm9tIFwiLi9yZWdleHBcIlxyXG5pbXBvcnQgeyBodG1sRW50aXR5TWFwIH0gZnJvbSBcIi4uL2NvbnN0YW50L21hcFwiXHJcblxyXG4vKipcclxuICog5bCG5a2X56ym5Liy5oyJ5LiA5a6a5a2X56ym5pWw5ouG5YiG5oiQ5a2X56ym5Liy5pWw57uEXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3BsaXRTdHJpbmcoc3RyOiBzdHJpbmcsIHN0ZXBDaGFyQ291bnQ6IG51bWJlcik6IHN0cmluZ1tdIHtcclxuICAgIGlmICghc3RyIHx8IHN0ZXBDaGFyQ291bnQgPD0gMCkge1xyXG4gICAgICAgIHJldHVybiBbXVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc3RyTGVuID0gc3RyLmxlbmd0aFxyXG4gICAgaWYgKHN0ckxlbiA8PSBzdGVwQ2hhckNvdW50KSB7XHJcbiAgICAgICAgcmV0dXJuIFtzdHJdXHJcbiAgICB9XHJcbiAgICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW11cclxuICAgIGxldCBzdGFydEluZGV4ID0gMFxyXG4gICAgd2hpbGUgKHN0YXJ0SW5kZXggPCBzdHJMZW4pIHtcclxuICAgICAgICByZXN1bHQucHVzaChzdHIuc3Vic3RyKHN0YXJ0SW5kZXgsIHN0ZXBDaGFyQ291bnQpKVxyXG4gICAgICAgIHN0YXJ0SW5kZXggKz0gc3RlcENoYXJDb3VudFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG59XHJcblxyXG4vKipcclxuICog5oiq5Y+W5a2X56ym5Liy5bm25Lul55yB55Wl56ym5Y+35pi+56S65a2X56ym5LiyXHJcbiAqIEBwYXJhbSBzdHIg5Y6f5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBsZW4g6KaB5L+d55WZ55qE5a2X56ym6ZW/5bqmXHJcbiAqIEBwYXJhbSBlbGxpcHNpc0NoYXJzIOiiq+aIquaWreeahOWtl+espuaYvuekuueahOespuWPt1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGVsbGlwc2lzKHN0cjogc3RyaW5nLCBsZW46IG51bWJlciwgZWxsaXBzaXNDaGFycyA9IFwiLi4uXCIpOiBzdHJpbmcge1xyXG4gICAgaWYgKCFzdHIgfHwgbGVuIDw9IDApIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgaWYgKHN0ci5sZW5ndGggPD0gbGVuKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0clxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5zdWJzdHJpbmcoMCwgbGVuKSArIGVsbGlwc2lzQ2hhcnNcclxufVxyXG5cclxuLyoqXHJcbiAqIOS7juWtl+espuS4suS4reaPkOWPluaVsOWtl++8iOWPr+W4puWwj+aVsOeCue+8ieOAguWmgu+8mlwiYWJjMTIzLjAxY2RlXCItPjEyMy4wMVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE51bWJlcihzdHI6IHN0cmluZyk6IG51bWJlciB8IG51bGwge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgY29uc3QgbXQgPSBzdHIubWF0Y2gocGFydE51bWJlcilcclxuICAgIGlmICghbXQgfHwgIW10Lmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFyc2VGbG9hdChtdFswXSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOWOu+W3puWPs+epuuagvFxyXG4gKiBAcGFyYW0gIHN0ciDlvoXlpITnkIblrZfnrKbkuLJcclxuICogQHJldHVybnMgIOWkhOeQhuWQjueahOWtl+espuS4slxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyaW0oc3RyOiBzdHJpbmcpIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgXCJcIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOWOu+W3puepuuagvFxyXG4gKiBAcGFyYW0gIHN0ciDlvoXlpITnkIblrZfnrKbkuLJcclxuICogQHJldHVybnMgIOWkhOeQhuWQjueahOWtl+espuS4slxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxUcmltKHN0cjogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrLywgXCJcIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOWOu+WPs+epuuagvFxyXG4gKiBAcGFyYW0gIHN0ciDlvoXlpITnkIblrZfnrKbkuLJcclxuICogQHJldHVybnMgIOWkhOeQhuWQjueahOWAvFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJUcmltKHN0cjogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xccyskLywgXCJcIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOWOu+aOieW3pui+ueeahOaMh+WumuWtl+espuS4slxyXG4gKiBAcGFyYW0gc3RyIOW+heWkhOeQhueahOWtl+espuS4slxyXG4gKiBAcGFyYW0gc3RyVG9SZW1vdmUg6ZyA6KaB56e76Zmk55qE5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBpc0lnbm9yZUNhc2Ug5piv5ZCm5b+955Wl5aSn5bCP5YaZXHJcbiAqIEByZXR1cm5zIOWkhOeQhue7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxUcmltU3RyaW5nKHN0cjogc3RyaW5nLCBzdHJUb1JlbW92ZTogc3RyaW5nLCBpc0lnbm9yZUNhc2U6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgaWYgKCFzdHJUb1JlbW92ZSkge1xyXG4gICAgICAgIHJldHVybiBzdHJcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKGBeKCR7ZXNjYXBlUmVnKHN0clRvUmVtb3ZlKX0pKmAsIGlzSWdub3JlQ2FzZSA/IFwiZ2lcIiA6IFwiZ1wiKSwgXCJcIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOWOu+aOieWPs+i+ueeahOaMh+WumuWtl+espuS4slxyXG4gKiBAcGFyYW0gc3RyIOW+heWkhOeQhueahOWtl+espuS4slxyXG4gKiBAcGFyYW0gc3RyVG9SZW1vdmUg6ZyA6KaB56e76Zmk55qE5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBpc0lnbm9yZUNhc2Ug5piv5ZCm5b+955Wl5aSn5bCP5YaZXHJcbiAqIEByZXR1cm5zIOWkhOeQhue7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJUcmltU3RyaW5nKHN0cjogc3RyaW5nLCBzdHJUb1JlbW92ZTogc3RyaW5nLCBpc0lnbm9yZUNhc2U6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgaWYgKCFzdHJUb1JlbW92ZSkge1xyXG4gICAgICAgIHJldHVybiBzdHJcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKGAoJHtlc2NhcGVSZWcoc3RyVG9SZW1vdmUpfSkqJGAsIGlzSWdub3JlQ2FzZSA/IFwiZ2lcIiA6IFwiZ1wiKSwgXCJcIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOWOu+W3puWPs+aMh+WumueahOWtl+espuS4slxyXG4gKiBAcGFyYW0gc3RyIOW+heWkhOeQhueahOWtl+espuS4slxyXG4gKiBAcGFyYW0gc3RyVG9SZW1vdmUg6ZyA6KaB56e76Zmk55qE5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBpc0lnbm9yZUNhc2Ug5piv5ZCm5b+955Wl5aSn5bCP5YaZXHJcbiAqIEByZXR1cm5zIOWkhOeQhue7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyaW1TdHJpbmcoc3RyOiBzdHJpbmcsIHN0clRvUmVtb3ZlOiBzdHJpbmcsIGlzSWdub3JlQ2FzZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICBpZiAoIXN0clRvUmVtb3ZlKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0clxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoYCheKCR7ZXNjYXBlUmVnKHN0clRvUmVtb3ZlKX0pKil8KCgke2VzY2FwZVJlZyhzdHJUb1JlbW92ZSl9KSokKWAsIGlzSWdub3JlQ2FzZSA/IFwiZ2lcIiA6IFwiZ1wiKSwgXCJcIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOS7jmh0bWzlrZfnrKbkuLLkuK3np7vpmaTlt6blj7Pnqbrnmb3ljaDkvY3nrKZcclxuICogQHBhcmFtIGh0bWwg5b6F5aSE55CG55qE5a2X56ym5LiyXHJcbiAqIEByZXR1cm5zIOWkhOeQhue7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyaW1IVE1MKGh0bWw6IHN0cmluZykge1xyXG4gICAgbGV0IHN0ciA9IGh0bWxcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIHdoaWxlIChodG1sTGVmdFJpZ2h0QmxhbmsudGVzdChzdHIpKSB7XHJcbiAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoaHRtbExlZnRSaWdodEJsYW5rLCBcIlwiKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0clxyXG59XHJcblxyXG4vKipcclxuICog5oyH5a6a5rqQ5a2X56ym5Liyc291cmNl5Lit5piv5ZCm5YyF5ZCrc2VhcmNo5a2X56ym5LiyXHJcbiAqIEBwYXJhbSAgc291cmNlIOa6kOWtl+espuS4slxyXG4gKiBAcGFyYW0gIHNlYXJjaCDopoHmn6Xmib7nmoTlrZfnrKbkuLJcclxuICogQHBhcmFtICBpc0lnbm9yZUNhc2Ug5piv5ZCm5b+955Wl5aSn5bCP5YaZKOm7mOiupOS4umZhbHNlKVxyXG4gKiBAcmV0dXJucyAg57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbnMoc291cmNlOiBzdHJpbmcsIHNlYXJjaDogc3RyaW5nLCBpc0lnbm9yZUNhc2U6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgbGV0IHNvdXJjZVN0ciA9IHNvdXJjZVxyXG4gICAgbGV0IHN0ciA9IHNlYXJjaFxyXG4gICAgaWYgKCFzb3VyY2VTdHIpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGlmIChzdHIgPT09IFwiXCIpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGlmIChpc0lnbm9yZUNhc2UpIHtcclxuICAgICAgICBzb3VyY2VTdHIgPSBzb3VyY2VTdHIudG9VcHBlckNhc2UoKVxyXG4gICAgICAgIHN0ciA9IHN0ci50b1VwcGVyQ2FzZSgpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc291cmNlU3RyLmluY2x1ZGVzKHN0cilcclxufVxyXG5cclxuLyoqXHJcbiog5bCGaHRtbOagh+etvui9rOaNouS4uuWunuS9k+W9ouW8j1xyXG4qIEBwYXJhbSAgaHRtbCDpnIDopoHooqvmm7/mjaLnmoRodG1sXHJcbiogQHJldHVybnMgIOi9rOaNouWQjueahOWAvFxyXG4qL1xyXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlSHRtbChodG1sOiBzdHJpbmcpIHtcclxuICAgIGlmICghaHRtbCkge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gU3RyaW5nKGh0bWwpLnJlcGxhY2UoL1smPD5cIicvXS9nLCAocykgPT4gaHRtbEVudGl0eU1hcFtzXSlcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSAgIHN0ciDopoHph43lpI3nmoTlrZfnrKbkuLJcclxuICogQHBhcmFtICAgcmVwZWF0Q291bnQg6YeN5aSN5qyh5pWwXHJcbiAqIEByZXR1cm5zICDmlrDnmoTlrZfnrKbkuLJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZXBlYXQoc3RyOiBzdHJpbmcsIHJlcGVhdENvdW50OiBudW1iZXIpIHtcclxuICAgIGxldCBjb3VudCA9IHJlcGVhdENvdW50XHJcbiAgICBpZiAoIXN0ciB8fCBjb3VudCA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIGNvbnN0IHMgPSBbXVxyXG4gICAgd2hpbGUgKGNvdW50LS0pIHtcclxuICAgICAgICBzLnB1c2goc3RyKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHMuam9pbignJylcclxufVxyXG5cclxuLyoqXHJcbiAqIOWtl+espuS4suaJuemHj+aehOW7uuWZqO+8iOaXoOmcgOS9v+eUqFwiK1wi6L+b6KGM5a2X56ym5Liy55qE5ou85o6l77yM55u05o6l5L2/55So5q2k5a+56LGh55qEYXBwZW5k5pa55rOV5ZCO77yM5YaNdG9TdHJpbmfljbPlj6/lvpfliLDmi7zlpb3nmoTlrZfnrKbkuLLvvIlcclxuICovXHJcbmV4cG9ydCBjbGFzcyBCdWlsZGVyPFQ+IHtcclxuICAgIHByaXZhdGUgX2FycjogVFtdID0gW11cclxuICAgIC8qKlxyXG4gICAgICog6L+95Yqg6aG5XHJcbiAgICAgKiBAcGFyYW0gaXRlbXMg5b6F6L+95Yqg55qE6aG5XHJcbiAgICAgKiBAcmV0dXJucyB0aGlzIFxyXG4gICAgICovXHJcbiAgICBhcHBlbmQoLi4uaXRlbXM6IFRbXSkge1xyXG4gICAgICAgIHRoaXMuX2Fyci5wdXNoKC4uLml0ZW1zKVxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOi/lOWbnuW3suWQiOW5tueahOaJgOaciemhueeahOWtl+espuS4slxyXG4gICAgICovXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXJyLmpvaW4oXCJcIilcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5riF56m65b2T5YmN55qE5p6E5bu65Zmo5Lit55qE5omA5pyJ6aG5XHJcbiAgICAgKiBAcmV0dXJucyB0aGlzXHJcbiAgICAgKi9cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMuX2FyciA9IFtdXHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6L+U5Zue5p6E5bu65Zmo5Lit5omA5pyJ6aG555qE5a2X56ym5Liy5oC755qE5a2X56ym6ZW/5bqmXHJcbiAgICAgKi9cclxuICAgIGxlbmd0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpLmxlbmd0aFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYnVpbGRlciA9IEJ1aWxkZXIiXX0=