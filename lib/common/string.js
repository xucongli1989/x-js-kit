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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vc3RyaW5nLnRzIl0sIm5hbWVzIjpbInNwbGl0U3RyaW5nIiwic3RyIiwic3RlcENoYXJDb3VudCIsInN0ckxlbiIsImxlbmd0aCIsInJlc3VsdCIsInN0YXJ0SW5kZXgiLCJwdXNoIiwic3Vic3RyIiwiZWxsaXBzaXMiLCJsZW4iLCJlbGxpcHNpc0NoYXJzIiwic3Vic3RyaW5nIiwiZ2V0TnVtYmVyIiwibXQiLCJtYXRjaCIsInBhcnROdW1iZXIiLCJwYXJzZUZsb2F0IiwidHJpbSIsInJlcGxhY2UiLCJsVHJpbSIsInJUcmltIiwibFRyaW1TdHJpbmciLCJzdHJUb1JlbW92ZSIsImlzSWdub3JlQ2FzZSIsIlJlZ0V4cCIsInJUcmltU3RyaW5nIiwidHJpbVN0cmluZyIsInRyaW1IVE1MIiwiaHRtbCIsImh0bWxMZWZ0UmlnaHRCbGFuayIsInRlc3QiLCJjb250YWlucyIsInNvdXJjZSIsInNlYXJjaCIsInNvdXJjZVN0ciIsInRvVXBwZXJDYXNlIiwiaW5jbHVkZXMiLCJlc2NhcGVIdG1sIiwiU3RyaW5nIiwicyIsImh0bWxFbnRpdHlNYXAiLCJyZXBlYXQiLCJyZXBlYXRDb3VudCIsImNvdW50Iiwiam9pbiIsIkJ1aWxkZXIiLCJfYXJyIiwidG9TdHJpbmciLCJidWlsZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7O0FBRUE7OztBQUdPLFNBQVNBLFdBQVQsQ0FBcUJDLEdBQXJCLEVBQWtDQyxhQUFsQyxFQUFtRTtBQUN0RSxNQUFJLENBQUNELEdBQUQsSUFBUUMsYUFBYSxJQUFJLENBQTdCLEVBQWdDO0FBQzVCLFdBQU8sRUFBUDtBQUNIOztBQUNELE1BQU1DLE1BQU0sR0FBR0YsR0FBRyxDQUFDRyxNQUFuQjs7QUFDQSxNQUFJRCxNQUFNLElBQUlELGFBQWQsRUFBNkI7QUFDekIsV0FBTyxDQUFDRCxHQUFELENBQVA7QUFDSDs7QUFDRCxNQUFNSSxNQUFnQixHQUFH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RixJQUFWLENBQWUsRUFBZixDQUFQO0FBQ0g7QUFDRDs7Ozs7Ozs0QkFJUTtBQUNKLFdBQUtFLElBQUwsR0FBWSxFQUFaO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7QUFDRDs7Ozs7OzZCQUdTO0FBQ0wsYUFBTyxLQUFLQyxRQUFMLEdBQWdCNUMsTUFBdkI7QUFDSDs7Ozs7OztBQUdFLElBQU02QyxPQUFPLEdBQUdILE9BQWhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGFydE51bWJlciwgaHRtbExlZnRSaWdodEJsYW5rIH0gZnJvbSBcIi4uL2NvbnN0YW50L3JlZ2V4XCJcclxuaW1wb3J0IHsgaHRtbEVudGl0eU1hcCB9IGZyb20gXCIuLi9jb25zdGFudC9tYXBcIlxyXG5cclxuLyoqXHJcbiAqIOWwhuWtl+espuS4suaMieS4gOWumuWtl+espuaVsOaLhuWIhuaIkOWtl+espuS4suaVsOe7hFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0U3RyaW5nKHN0cjogc3RyaW5nLCBzdGVwQ2hhckNvdW50OiBudW1iZXIpOiBzdHJpbmdbXSB7XHJcbiAgICBpZiAoIXN0ciB8fCBzdGVwQ2hhckNvdW50IDw9IDApIHtcclxuICAgICAgICByZXR1cm4gW11cclxuICAgIH1cclxuICAgIGNvbnN0IHN0ckxlbiA9IHN0ci5sZW5ndGhcclxuICAgIGlmIChzdHJMZW4gPD0gc3RlcENoYXJDb3VudCkge1xyXG4gICAgICAgIHJldHVybiBbc3RyXVxyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzdWx0OiBzdHJpbmdbXSA9IFtdXHJcbiAgICBsZXQgc3RhcnRJbmRleCA9IDBcclxuICAgIHdoaWxlIChzdGFydEluZGV4IDwgc3RyTGVuKSB7XHJcbiAgICAgICAgcmVzdWx0LnB1c2goc3RyLnN1YnN0cihzdGFydEluZGV4LCBzdGVwQ2hhckNvdW50KSlcclxuICAgICAgICBzdGFydEluZGV4ICs9IHN0ZXBDaGFyQ291bnRcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHRcclxufVxyXG5cclxuLyoqXHJcbiAqIOaIquWPluWtl+espuS4suW5tuS7peecgeeVpeespuWPt+aYvuekuuWtl+espuS4slxyXG4gKiBAcGFyYW0gc3RyIOWOn+Wtl+espuS4slxyXG4gKiBAcGFyYW0gbGVuIOimgeS/neeVmeeahOWtl+espumVv+W6plxyXG4gKiBAcGFyYW0gZWxsaXBzaXNDaGFycyDooqvmiKrmlq3nmoTlrZfnrKbmmL7npLrnmoTnrKblj7dcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlbGxpcHNpcyhzdHI6IHN0cmluZywgbGVuOiBudW1iZXIsIGVsbGlwc2lzQ2hhcnMgPSBcIi4uLlwiKTogc3RyaW5nIHtcclxuICAgIGlmICghc3RyIHx8IGxlbiA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIGlmIChzdHIubGVuZ3RoIDw9IGxlbikge1xyXG4gICAgICAgIHJldHVybiBzdHJcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIuc3Vic3RyaW5nKDAsIGxlbikgKyBlbGxpcHNpc0NoYXJzXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDku47lrZfnrKbkuLLkuK3mj5Dlj5bmlbDlrZfvvIjlj6/luKblsI/mlbDngrnvvInjgILlpoLvvJpcImFiYzEyMy4wMWNkZVwiLT4xMjMuMDFcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROdW1iZXIoc3RyOiBzdHJpbmcpOiBudW1iZXIgfCBudWxsIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIGNvbnN0IG10ID0gc3RyLm1hdGNoKHBhcnROdW1iZXIpXHJcbiAgICBpZiAoIW10IHx8ICFtdC5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQobXRbMF0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDljrvlt6blj7PnqbrmoLxcclxuICogQHBhcmFtICBzdHIg5b6F5aSE55CG5a2X56ym5LiyXHJcbiAqIEByZXR1cm5zICDlpITnkIblkI7nmoTlrZfnrKbkuLJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmltKHN0cjogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csIFwiXCIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDljrvlt6bnqbrmoLxcclxuICogQHBhcmFtICBzdHIg5b6F5aSE55CG5a2X56ym5LiyXHJcbiAqIEByZXR1cm5zICDlpITnkIblkI7nmoTlrZfnrKbkuLJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsVHJpbShzdHI6IHN0cmluZykge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKy8sIFwiXCIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDljrvlj7PnqbrmoLxcclxuICogQHBhcmFtICBzdHIg5b6F5aSE55CG5a2X56ym5LiyXHJcbiAqIEByZXR1cm5zICDlpITnkIblkI7nmoTlgLxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByVHJpbShzdHI6IHN0cmluZykge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHMrJC8sIFwiXCIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDljrvmjonlt6bovrnnmoTmjIflrprlrZfnrKbkuLJcclxuICogQHBhcmFtIHN0ciDlvoXlpITnkIbnmoTlrZfnrKbkuLJcclxuICogQHBhcmFtIHN0clRvUmVtb3ZlIOmcgOimgeenu+mZpOeahOWtl+espuS4slxyXG4gKiBAcGFyYW0gaXNJZ25vcmVDYXNlIOaYr+WQpuW/veeVpeWkp+Wwj+WGmVxyXG4gKiBAcmV0dXJucyDlpITnkIbnu5PmnpxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsVHJpbVN0cmluZyhzdHI6IHN0cmluZywgc3RyVG9SZW1vdmU6IHN0cmluZywgaXNJZ25vcmVDYXNlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIGlmICghc3RyVG9SZW1vdmUpIHtcclxuICAgICAgICByZXR1cm4gc3RyXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChgXigke3N0clRvUmVtb3ZlfSkqYCwgaXNJZ25vcmVDYXNlID8gXCJnaVwiIDogXCJnXCIpLCBcIlwiKVxyXG59XHJcblxyXG4vKipcclxuICog5Y675o6J5Y+z6L6555qE5oyH5a6a5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBzdHIg5b6F5aSE55CG55qE5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBzdHJUb1JlbW92ZSDpnIDopoHnp7vpmaTnmoTlrZfnrKbkuLJcclxuICogQHBhcmFtIGlzSWdub3JlQ2FzZSDmmK/lkKblv73nlaXlpKflsI/lhplcclxuICogQHJldHVybnMg5aSE55CG57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gclRyaW1TdHJpbmcoc3RyOiBzdHJpbmcsIHN0clRvUmVtb3ZlOiBzdHJpbmcsIGlzSWdub3JlQ2FzZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICBpZiAoIXN0clRvUmVtb3ZlKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0clxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoYCgke3N0clRvUmVtb3ZlfSkqJGAsIGlzSWdub3JlQ2FzZSA/IFwiZ2lcIiA6IFwiZ1wiKSwgXCJcIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOWOu+W3puWPs+aMh+WumueahOWtl+espuS4slxyXG4gKiBAcGFyYW0gc3RyIOW+heWkhOeQhueahOWtl+espuS4slxyXG4gKiBAcGFyYW0gc3RyVG9SZW1vdmUg6ZyA6KaB56e76Zmk55qE5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBpc0lnbm9yZUNhc2Ug5piv5ZCm5b+955Wl5aSn5bCP5YaZXHJcbiAqIEByZXR1cm5zIOWkhOeQhue7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyaW1TdHJpbmcoc3RyOiBzdHJpbmcsIHN0clRvUmVtb3ZlOiBzdHJpbmcsIGlzSWdub3JlQ2FzZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICBpZiAoIXN0clRvUmVtb3ZlKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0clxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoYCheKCR7c3RyVG9SZW1vdmV9KSopfCgoJHtzdHJUb1JlbW92ZX0pKiQpYCwgaXNJZ25vcmVDYXNlID8gXCJnaVwiIDogXCJnXCIpLCBcIlwiKVxyXG59XHJcblxyXG4vKipcclxuICog5LuOaHRtbOWtl+espuS4suS4reenu+mZpOW3puWPs+epuueZveWNoOS9jeesplxyXG4gKiBAcGFyYW0gaHRtbCDlvoXlpITnkIbnmoTlrZfnrKbkuLJcclxuICogQHJldHVybnMg5aSE55CG57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJpbUhUTUwoaHRtbDogc3RyaW5nKSB7XHJcbiAgICBsZXQgc3RyID0gaHRtbFxyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgd2hpbGUgKGh0bWxMZWZ0UmlnaHRCbGFuay50ZXN0KHN0cikpIHtcclxuICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShodG1sTGVmdFJpZ2h0QmxhbmssIFwiXCIpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmjIflrprmupDlrZfnrKbkuLJzb3VyY2XkuK3mmK/lkKbljIXlkKtzZWFyY2jlrZfnrKbkuLJcclxuICogQHBhcmFtICBzb3VyY2Ug5rqQ5a2X56ym5LiyXHJcbiAqIEBwYXJhbSAgc2VhcmNoIOimgeafpeaJvueahOWtl+espuS4slxyXG4gKiBAcGFyYW0gIGlzSWdub3JlQ2FzZSDmmK/lkKblv73nlaXlpKflsI/lhpko6buY6K6k5Li6ZmFsc2UpXHJcbiAqIEByZXR1cm5zICDnu5PmnpxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb250YWlucyhzb3VyY2U6IHN0cmluZywgc2VhcmNoOiBzdHJpbmcsIGlzSWdub3JlQ2FzZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICBsZXQgc291cmNlU3RyID0gc291cmNlXHJcbiAgICBsZXQgc3RyID0gc2VhcmNoXHJcbiAgICBpZiAoIXNvdXJjZVN0cikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgaWYgKHN0ciA9PT0gXCJcIikge1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgaWYgKGlzSWdub3JlQ2FzZSkge1xyXG4gICAgICAgIHNvdXJjZVN0ciA9IHNvdXJjZVN0ci50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgc3RyID0gc3RyLnRvVXBwZXJDYXNlKClcclxuICAgIH1cclxuICAgIHJldHVybiBzb3VyY2VTdHIuaW5jbHVkZXMoc3RyKVxyXG59XHJcblxyXG4vKipcclxuKiDlsIZodG1s5qCH562+6L2s5o2i5Li65a6e5L2T5b2i5byPXHJcbiogQHBhcmFtICBodG1sIOmcgOimgeiiq+abv+aNoueahGh0bWxcclxuKiBAcmV0dXJucyAg6L2s5o2i5ZCO55qE5YC8XHJcbiovXHJcbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVIdG1sKGh0bWw6IHN0cmluZykge1xyXG4gICAgaWYgKCFodG1sKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIHJldHVybiBTdHJpbmcoaHRtbCkucmVwbGFjZSgvWyY8PlwiJy9dL2csIChzKSA9PiBodG1sRW50aXR5TWFwW3NdKVxyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtICAgc3RyIOimgemHjeWkjeeahOWtl+espuS4slxyXG4gKiBAcGFyYW0gICByZXBlYXRDb3VudCDph43lpI3mrKHmlbBcclxuICogQHJldHVybnMgIOaWsOeahOWtl+espuS4slxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGVhdChzdHI6IHN0cmluZywgcmVwZWF0Q291bnQ6IG51bWJlcikge1xyXG4gICAgbGV0IGNvdW50ID0gcmVwZWF0Q291bnRcclxuICAgIGlmICghc3RyIHx8IGNvdW50IDw9IDApIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgY29uc3QgcyA9IFtdXHJcbiAgICB3aGlsZSAoY291bnQtLSkge1xyXG4gICAgICAgIHMucHVzaChzdHIpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcy5qb2luKCcnKVxyXG59XHJcblxyXG4vKipcclxuICog5a2X56ym5Liy5om56YeP5p6E5bu65Zmo77yI5peg6ZyA5L2/55SoXCIrXCLov5vooYzlrZfnrKbkuLLnmoTmi7zmjqXvvIznm7TmjqXkvb/nlKjmraTlr7nosaHnmoRhcHBlbmTmlrnms5XlkI7vvIzlho10b1N0cmluZ+WNs+WPr+W+l+WIsOaLvOWlveeahOWtl+espuS4su+8iVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJ1aWxkZXI8VD4ge1xyXG4gICAgcHJpdmF0ZSBfYXJyOiBUW10gPSBbXVxyXG4gICAgLyoqXHJcbiAgICAgKiDov73liqDpoblcclxuICAgICAqIEBwYXJhbSBpdGVtcyDlvoXov73liqDnmoTpoblcclxuICAgICAqIEByZXR1cm5zIHRoaXMgXHJcbiAgICAgKi9cclxuICAgIGFwcGVuZCguLi5pdGVtczogVFtdKSB7XHJcbiAgICAgICAgdGhpcy5fYXJyLnB1c2goLi4uaXRlbXMpXHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6L+U5Zue5bey5ZCI5bm255qE5omA5pyJ6aG555qE5a2X56ym5LiyXHJcbiAgICAgKi9cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcnIuam9pbihcIlwiKVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmuIXnqbrlvZPliY3nmoTmnoTlu7rlmajkuK3nmoTmiYDmnInpoblcclxuICAgICAqIEByZXR1cm5zIHRoaXNcclxuICAgICAqL1xyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5fYXJyID0gW11cclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDov5Tlm57mnoTlu7rlmajkuK3miYDmnInpobnnmoTlrZfnrKbkuLLmgLvnmoTlrZfnrKbplb/luqZcclxuICAgICAqL1xyXG4gICAgbGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCkubGVuZ3RoXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBidWlsZGVyID0gQnVpbGRlciJdfQ==