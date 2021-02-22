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
exports.replaceNewlineToBr = replaceNewlineToBr;
exports.getChineseWord = getChineseWord;
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
    value:
    /**
     * 追加项
     * @param items 待追加的项
     * @returns this
     */
    function append() {
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
/**
 * 将文本中的字符串 "\r\n" 和 "\n" 统一替换成 <br/>
 */


function replaceNewlineToBr(str) {
  if (!str) {
    return "";
  }

  return str.replace(/\\r\\n/gi, "<br/>").replace(/\\n/gi, "<br/>");
}
/**
 * 获取字符串中的中文字符
 */


function getChineseWord(str) {
  if (!str) {
    return "";
  }

  var match = str.match(new RegExp(_regex.chineseChar, "g"));

  if (!match || !match.length) {
    return "";
  }

  return match.join("");
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vc3RyaW5nLnRzIl0sIm5hbWVzIjpbInNwbGl0U3RyaW5nIiwic3RyIiwic3RlcENoYXJDb3VudCIsInN0ckxlbiIsImxlbmd0aCIsInJlc3VsdCIsInN0YXJ0SW5kZXgiLCJwdXNoIiwic3Vic3RyIiwiZWxsaXBzaXMiLCJsZW4iLCJlbGxpcHNpc0NoYXJzIiwic3Vic3RyaW5nIiwiZ2V0TnVtYmVyIiwibXQiLCJtYXRjaCIsInBhcnROdW1iZXIiLCJwYXJzZUZsb2F0IiwidHJpbSIsInJlcGxhY2UiLCJsVHJpbSIsInJUcmltIiwibFRyaW1TdHJpbmciLCJzdHJUb1JlbW92ZSIsImlzSWdub3JlQ2FzZSIsIlJlZ0V4cCIsInJUcmltU3RyaW5nIiwidHJpbVN0cmluZyIsInRyaW1IVE1MIiwiaHRtbCIsImh0bWxMZWZ0UmlnaHRCbGFuayIsInRlc3QiLCJjb250YWlucyIsInNvdXJjZSIsInNlYXJjaCIsInNvdXJjZVN0ciIsInRvVXBwZXJDYXNlIiwiaW5jbHVkZXMiLCJlc2NhcGVIdG1sIiwiU3RyaW5nIiwicyIsImh0bWxFbnRpdHlNYXAiLCJyZXBlYXQiLCJyZXBlYXRDb3VudCIsImNvdW50Iiwiam9pbiIsIkJ1aWxkZXIiLCJfYXJyIiwidG9TdHJpbmciLCJidWlsZGVyIiwiZm9ybWF0IiwidG9rZW4iLCJyZW1vdmVCbGFua0xpbmVzIiwicmVwbGFjZU5ld2xpbmVUb0JyIiwiZ2V0Q2hpbmVzZVdvcmQiLCJjaGluZXNlQ2hhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDTyxTQUFTQSxXQUFULENBQXFCQyxHQUFyQixFQUFrQ0MsYUFBbEMsRUFBbUU7QUFDdEUsTUFBSSxDQUFDRCxHQUFELElBQVFDLGFBQWEsSUFBSSxDQUE3QixFQUFnQztBQUM1QixXQUFPLEVBQVA7QUFDSDs7QUFDRCxNQUFNQyxNQUFNLEdBQUdG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QUFJTSxNQUFKLENBQVcsUUFBUTBCLEtBQVIsR0FBZ0IsS0FBM0IsRUFBa0MsSUFBbEMsQ0FBZixFQUE2REEsS0FBN0QsZ0NBQTZEQSxLQUE3RCw2QkFBNkRBLEtBQTdELE1BQVQ7QUFDSDs7QUFDRCxTQUFPOUMsTUFBUDtBQUNIO0FBRUQ7QUFDQTtBQUNBOzs7QUFDTyxTQUFTK0MsZ0JBQVQsQ0FBMEJuRCxHQUExQixFQUErQztBQUNsRCxNQUFJLENBQUNBLEdBQUwsRUFBVTtBQUNOLFdBQU8sRUFBUDtBQUNIOztBQUNELFNBQU9BLEdBQUcsQ0FBQ2tCLE9BQUosQ0FBWSxjQUFaLEVBQTRCLEVBQTVCLENBQVA7QUFDSDtBQUVEO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU2tDLGtCQUFULENBQTRCcEQsR0FBNUIsRUFBeUM7QUFDNUMsTUFBSSxDQUFDQSxHQUFMLEVBQVU7QUFDTixXQUFPLEVBQVA7QUFDSDs7QUFDRCxTQUFPQSxHQUFHLENBQUNrQixPQUFKLENBQVksVUFBWixFQUF3QixPQUF4QixFQUFpQ0EsT0FBakMsQ0FBeUMsT0FBekMsRUFBa0QsT0FBbEQsQ0FBUDtBQUNIO0FBRUQ7QUFDQTtBQUNBOzs7QUFDTyxTQUFTbUMsY0FBVCxDQUF3QnJELEdBQXhCLEVBQXFDO0FBQ3hDLE1BQUksQ0FBQ0EsR0FBTCxFQUFVO0FBQ04sV0FBTyxFQUFQO0FBQ0g7O0FBQ0QsTUFBTWMsS0FBSyxHQUFHZCxHQUFHLENBQUNjLEtBQUosQ0FBVSxJQUFJVSxNQUFKLENBQVc4QixrQkFBWCxFQUF3QixHQUF4QixDQUFWLENBQWQ7O0FBQ0EsTUFBSSxDQUFDeEMsS0FBRCxJQUFVLENBQUNBLEtBQUssQ0FBQ1gsTUFBckIsRUFBNkI7QUFDekIsV0FBTyxFQUFQO0FBQ0g7O0FBQ0QsU0FBT1csS0FBSyxDQUFDOEIsSUFBTixDQUFXLEVBQVgsQ0FBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGFydE51bWJlciwgaHRtbExlZnRSaWdodEJsYW5rLCBjaGluZXNlQ2hhciB9IGZyb20gXCIuLi9jb25zdGFudC9yZWdleFwiXHJcbmltcG9ydCB7IGVzY2FwZVJlZyB9IGZyb20gXCIuL3JlZ2V4cFwiXHJcbmltcG9ydCB7IGh0bWxFbnRpdHlNYXAgfSBmcm9tIFwiLi4vY29uc3RhbnQvbWFwXCJcclxuXHJcbi8qKlxyXG4gKiDlsIblrZfnrKbkuLLmjInkuIDlrprlrZfnrKbmlbDmi4bliIbmiJDlrZfnrKbkuLLmlbDnu4RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzcGxpdFN0cmluZyhzdHI6IHN0cmluZywgc3RlcENoYXJDb3VudDogbnVtYmVyKTogc3RyaW5nW10ge1xyXG4gICAgaWYgKCFzdHIgfHwgc3RlcENoYXJDb3VudCA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdXHJcbiAgICB9XHJcbiAgICBjb25zdCBzdHJMZW4gPSBzdHIubGVuZ3RoXHJcbiAgICBpZiAoc3RyTGVuIDw9IHN0ZXBDaGFyQ291bnQpIHtcclxuICAgICAgICByZXR1cm4gW3N0cl1cclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3VsdDogc3RyaW5nW10gPSBbXVxyXG4gICAgbGV0IHN0YXJ0SW5kZXggPSAwXHJcbiAgICB3aGlsZSAoc3RhcnRJbmRleCA8IHN0ckxlbikge1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKHN0ci5zdWJzdHIoc3RhcnRJbmRleCwgc3RlcENoYXJDb3VudCkpXHJcbiAgICAgICAgc3RhcnRJbmRleCArPSBzdGVwQ2hhckNvdW50XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmiKrlj5blrZfnrKbkuLLlubbku6XnnIHnlaXnrKblj7fmmL7npLrlrZfnrKbkuLJcclxuICogQHBhcmFtIHN0ciDljp/lrZfnrKbkuLJcclxuICogQHBhcmFtIGxlbiDopoHkv53nlZnnmoTlrZfnrKbplb/luqZcclxuICogQHBhcmFtIGVsbGlwc2lzQ2hhcnMg6KKr5oiq5pat55qE5a2X56ym5pi+56S655qE56ym5Y+3XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZWxsaXBzaXMoc3RyOiBzdHJpbmcsIGxlbjogbnVtYmVyLCBlbGxpcHNpc0NoYXJzID0gXCIuLi5cIik6IHN0cmluZyB7XHJcbiAgICBpZiAoIXN0ciB8fCBsZW4gPD0gMCkge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICBpZiAoc3RyLmxlbmd0aCA8PSBsZW4pIHtcclxuICAgICAgICByZXR1cm4gc3RyXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnN1YnN0cmluZygwLCBsZW4pICsgZWxsaXBzaXNDaGFyc1xyXG59XHJcblxyXG4vKipcclxuICog5LuO5a2X56ym5Liy5Lit5o+Q5Y+W5pWw5a2X77yI5Y+v5bim5bCP5pWw54K577yJ44CC5aaC77yaXCJhYmMxMjMuMDFjZGVcIi0+MTIzLjAxXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TnVtYmVyKHN0cjogc3RyaW5nKTogbnVtYmVyIHwgbnVsbCB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICBjb25zdCBtdCA9IHN0ci5tYXRjaChwYXJ0TnVtYmVyKVxyXG4gICAgaWYgKCFtdCB8fCAhbXQubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIHJldHVybiBwYXJzZUZsb2F0KG10WzBdKVxyXG59XHJcblxyXG4vKipcclxuICog5Y675bem5Y+z56m65qC8XHJcbiAqIEBwYXJhbSAgc3RyIOW+heWkhOeQhuWtl+espuS4slxyXG4gKiBAcmV0dXJucyAg5aSE55CG5ZCO55qE5a2X56ym5LiyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJpbShzdHI6IHN0cmluZykge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCBcIlwiKVxyXG59XHJcblxyXG4vKipcclxuICog5Y675bem56m65qC8XHJcbiAqIEBwYXJhbSAgc3RyIOW+heWkhOeQhuWtl+espuS4slxyXG4gKiBAcmV0dXJucyAg5aSE55CG5ZCO55qE5a2X56ym5LiyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbFRyaW0oc3RyOiBzdHJpbmcpIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXlxccysvLCBcIlwiKVxyXG59XHJcblxyXG4vKipcclxuICog5Y675Y+z56m65qC8XHJcbiAqIEBwYXJhbSAgc3RyIOW+heWkhOeQhuWtl+espuS4slxyXG4gKiBAcmV0dXJucyAg5aSE55CG5ZCO55qE5YC8XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gclRyaW0oc3RyOiBzdHJpbmcpIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxzKyQvLCBcIlwiKVxyXG59XHJcblxyXG4vKipcclxuICog5Y675o6J5bem6L6555qE5oyH5a6a5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBzdHIg5b6F5aSE55CG55qE5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBzdHJUb1JlbW92ZSDpnIDopoHnp7vpmaTnmoTlrZfnrKbkuLJcclxuICogQHBhcmFtIGlzSWdub3JlQ2FzZSDmmK/lkKblv73nlaXlpKflsI/lhplcclxuICogQHJldHVybnMg5aSE55CG57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbFRyaW1TdHJpbmcoc3RyOiBzdHJpbmcsIHN0clRvUmVtb3ZlOiBzdHJpbmcsIGlzSWdub3JlQ2FzZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICBpZiAoIXN0clRvUmVtb3ZlKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0clxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoYF4oJHtlc2NhcGVSZWcoc3RyVG9SZW1vdmUpfSkqYCwgaXNJZ25vcmVDYXNlID8gXCJnaVwiIDogXCJnXCIpLCBcIlwiKVxyXG59XHJcblxyXG4vKipcclxuICog5Y675o6J5Y+z6L6555qE5oyH5a6a5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBzdHIg5b6F5aSE55CG55qE5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBzdHJUb1JlbW92ZSDpnIDopoHnp7vpmaTnmoTlrZfnrKbkuLJcclxuICogQHBhcmFtIGlzSWdub3JlQ2FzZSDmmK/lkKblv73nlaXlpKflsI/lhplcclxuICogQHJldHVybnMg5aSE55CG57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gclRyaW1TdHJpbmcoc3RyOiBzdHJpbmcsIHN0clRvUmVtb3ZlOiBzdHJpbmcsIGlzSWdub3JlQ2FzZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICBpZiAoIXN0clRvUmVtb3ZlKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0clxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoYCgke2VzY2FwZVJlZyhzdHJUb1JlbW92ZSl9KSokYCwgaXNJZ25vcmVDYXNlID8gXCJnaVwiIDogXCJnXCIpLCBcIlwiKVxyXG59XHJcblxyXG4vKipcclxuICog5Y675bem5Y+z5oyH5a6a55qE5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBzdHIg5b6F5aSE55CG55qE5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBzdHJUb1JlbW92ZSDpnIDopoHnp7vpmaTnmoTlrZfnrKbkuLJcclxuICogQHBhcmFtIGlzSWdub3JlQ2FzZSDmmK/lkKblv73nlaXlpKflsI/lhplcclxuICogQHJldHVybnMg5aSE55CG57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJpbVN0cmluZyhzdHI6IHN0cmluZywgc3RyVG9SZW1vdmU6IHN0cmluZywgaXNJZ25vcmVDYXNlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIGlmICghc3RyVG9SZW1vdmUpIHtcclxuICAgICAgICByZXR1cm4gc3RyXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChgKF4oJHtlc2NhcGVSZWcoc3RyVG9SZW1vdmUpfSkqKXwoKCR7ZXNjYXBlUmVnKHN0clRvUmVtb3ZlKX0pKiQpYCwgaXNJZ25vcmVDYXNlID8gXCJnaVwiIDogXCJnXCIpLCBcIlwiKVxyXG59XHJcblxyXG4vKipcclxuICog5LuOaHRtbOWtl+espuS4suS4reenu+mZpOW3puWPs+epuueZveWNoOS9jeesplxyXG4gKiBAcGFyYW0gaHRtbCDlvoXlpITnkIbnmoTlrZfnrKbkuLJcclxuICogQHJldHVybnMg5aSE55CG57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJpbUhUTUwoaHRtbDogc3RyaW5nKSB7XHJcbiAgICBsZXQgc3RyID0gaHRtbFxyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgd2hpbGUgKGh0bWxMZWZ0UmlnaHRCbGFuay50ZXN0KHN0cikpIHtcclxuICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShodG1sTGVmdFJpZ2h0QmxhbmssIFwiXCIpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmjIflrprmupDlrZfnrKbkuLJzb3VyY2XkuK3mmK/lkKbljIXlkKtzZWFyY2jlrZfnrKbkuLJcclxuICogQHBhcmFtICBzb3VyY2Ug5rqQ5a2X56ym5LiyXHJcbiAqIEBwYXJhbSAgc2VhcmNoIOimgeafpeaJvueahOWtl+espuS4slxyXG4gKiBAcGFyYW0gIGlzSWdub3JlQ2FzZSDmmK/lkKblv73nlaXlpKflsI/lhpko6buY6K6k5Li6ZmFsc2UpXHJcbiAqIEByZXR1cm5zICDnu5PmnpxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb250YWlucyhzb3VyY2U6IHN0cmluZywgc2VhcmNoOiBzdHJpbmcsIGlzSWdub3JlQ2FzZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICBsZXQgc291cmNlU3RyID0gc291cmNlXHJcbiAgICBsZXQgc3RyID0gc2VhcmNoXHJcbiAgICBpZiAoIXNvdXJjZVN0cikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgaWYgKHN0ciA9PT0gXCJcIikge1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgaWYgKGlzSWdub3JlQ2FzZSkge1xyXG4gICAgICAgIHNvdXJjZVN0ciA9IHNvdXJjZVN0ci50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgc3RyID0gc3RyLnRvVXBwZXJDYXNlKClcclxuICAgIH1cclxuICAgIHJldHVybiBzb3VyY2VTdHIuaW5jbHVkZXMoc3RyKVxyXG59XHJcblxyXG4vKipcclxuICog5bCGaHRtbOagh+etvui9rOaNouS4uuWunuS9k+W9ouW8j1xyXG4gKiBAcGFyYW0gIGh0bWwg6ZyA6KaB6KKr5pu/5o2i55qEaHRtbFxyXG4gKiBAcmV0dXJucyAg6L2s5o2i5ZCO55qE5YC8XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlSHRtbChodG1sOiBzdHJpbmcpIHtcclxuICAgIGlmICghaHRtbCkge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gU3RyaW5nKGh0bWwpLnJlcGxhY2UoL1smPD5cIicvXS9nLCAocykgPT4gaHRtbEVudGl0eU1hcFtzXSlcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSAgIHN0ciDopoHph43lpI3nmoTlrZfnrKbkuLJcclxuICogQHBhcmFtICAgcmVwZWF0Q291bnQg6YeN5aSN5qyh5pWwXHJcbiAqIEByZXR1cm5zICDmlrDnmoTlrZfnrKbkuLJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZXBlYXQoc3RyOiBzdHJpbmcsIHJlcGVhdENvdW50OiBudW1iZXIpIHtcclxuICAgIGxldCBjb3VudCA9IHJlcGVhdENvdW50XHJcbiAgICBpZiAoIXN0ciB8fCBjb3VudCA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIGNvbnN0IHMgPSBbXVxyXG4gICAgd2hpbGUgKGNvdW50LS0pIHtcclxuICAgICAgICBzLnB1c2goc3RyKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHMuam9pbihcIlwiKVxyXG59XHJcblxyXG4vKipcclxuICog5a2X56ym5Liy5om56YeP5p6E5bu65Zmo77yI5peg6ZyA5L2/55SoXCIrXCLov5vooYzlrZfnrKbkuLLnmoTmi7zmjqXvvIznm7TmjqXkvb/nlKjmraTlr7nosaHnmoRhcHBlbmTmlrnms5XlkI7vvIzlho10b1N0cmluZ+WNs+WPr+W+l+WIsOaLvOWlveeahOWtl+espuS4su+8iVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJ1aWxkZXI8VD4ge1xyXG4gICAgcHJpdmF0ZSBfYXJyOiBUW10gPSBbXVxyXG4gICAgLyoqXHJcbiAgICAgKiDov73liqDpoblcclxuICAgICAqIEBwYXJhbSBpdGVtcyDlvoXov73liqDnmoTpoblcclxuICAgICAqIEByZXR1cm5zIHRoaXNcclxuICAgICAqL1xyXG4gICAgYXBwZW5kKC4uLml0ZW1zOiBUW10pIHtcclxuICAgICAgICB0aGlzLl9hcnIucHVzaCguLi5pdGVtcylcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDov5Tlm57lt7LlkIjlubbnmoTmiYDmnInpobnnmoTlrZfnrKbkuLJcclxuICAgICAqL1xyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Fyci5qb2luKFwiXCIpXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOa4heepuuW9k+WJjeeahOaehOW7uuWZqOS4reeahOaJgOaciemhuVxyXG4gICAgICogQHJldHVybnMgdGhpc1xyXG4gICAgICovXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLl9hcnIgPSBbXVxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOi/lOWbnuaehOW7uuWZqOS4reaJgOaciemhueeahOWtl+espuS4suaAu+eahOWtl+espumVv+W6plxyXG4gICAgICovXHJcbiAgICBsZW5ndGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKS5sZW5ndGhcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGJ1aWxkZXIgPSBCdWlsZGVyXHJcblxyXG4vKipcclxuICog5L2/55So5qih5p2/5qC85byP5YyW5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBzdHIg5qih5p2/77yM5aaC77yaXCLku4rlpKnmmK/mmJ/mnJ97MH3vvIzlt7LmiJDkuqR7MX3ljZXvvIFcIlxyXG4gKiBAcGFyYW0gYXJncyDmqKHmnb/kuK3nmoTlj4LmlbBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQoc3RyOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICBpZiAoIXN0ciB8fCAhYXJncy5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gc3RyXHJcbiAgICB9XHJcbiAgICBsZXQgcmVzdWx0ID0gc3RyXHJcbiAgICBmb3IgKGxldCB0b2tlbiA9IDA7IHRva2VuIDwgYXJncy5sZW5ndGg7IHRva2VuKyspIHtcclxuICAgICAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZShuZXcgUmVnRXhwKFwiXFxcXHtcIiArIHRva2VuICsgXCJcXFxcfVwiLCBcImdpXCIpLCBhcmdzW3Rva2VuXSlcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHRcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIoOmZpOepuueZveihjO+8iOepuueZveihjOaYr+aMh++8muatpOihjOS4uuepuueZveS4lOacq+WwvuS4uiBcXHIg5oiWIFxcbu+8iVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUJsYW5rTGluZXMoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKltcXHJcXG5dL2dtLCBcIlwiKVxyXG59XHJcblxyXG4vKipcclxuICog5bCG5paH5pys5Lit55qE5a2X56ym5LiyIFwiXFxyXFxuXCIg5ZKMIFwiXFxuXCIg57uf5LiA5pu/5o2i5oiQIDxici8+XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZU5ld2xpbmVUb0JyKHN0cjogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcXFxyXFxcXG4vZ2ksIFwiPGJyLz5cIikucmVwbGFjZSgvXFxcXG4vZ2ksIFwiPGJyLz5cIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOiOt+WPluWtl+espuS4suS4reeahOS4reaWh+Wtl+esplxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENoaW5lc2VXb3JkKHN0cjogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICBjb25zdCBtYXRjaCA9IHN0ci5tYXRjaChuZXcgUmVnRXhwKGNoaW5lc2VDaGFyLCBcImdcIikpXHJcbiAgICBpZiAoIW1hdGNoIHx8ICFtYXRjaC5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1hdGNoLmpvaW4oXCJcIilcclxufVxyXG4iXX0=