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
exports.equalsIgnoreCase = equalsIgnoreCase;
exports.equalsIgnoreCaseAndTrim = equalsIgnoreCaseAndTrim;
exports.contains = contains;
exports.escapeHtml = escapeHtml;
exports.repeat = repeat;
exports.format = format;
exports.removeBlankLines = removeBlankLines;
exports.replaceNewlineToBr = replaceNewlineToBr;
exports.getChineseWord = getChineseWord;
exports.combineStr = combineStr;
exports.isRangeText = isRangeText;
exports.removeStartLine = removeStartLine;
exports.removeWhiteSpace = removeWhiteSpace;
exports.builder = exports.Builder = void 0;

var _regex = require("../constant/regex");

var _regexp = require("./regexp");

var _map = require("../constant/map");

var _methodResult = require("../entity/method-result");

var _convert = require("./convert");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
 * 判断两个字符串是否相等（忽略大小写）
 */


function equalsIgnoreCase(a, b) {
  return (a || "").toUpperCase() == (b || "").toUpperCase();
}
/**
 * 判断两个字符串是否相等（忽略大小写+去左右空白）
 */


function equalsIgnoreCaseAndTrim(a, b) {
  return equalsIgnoreCase(trim(a), trim(b));
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
 * 将文本中的字符串形式或换行符形式的 "\r\n" 和 "\n" 统一替换成 <br/>
 */


function replaceNewlineToBr(str) {
  if (!str) {
    return "";
  }

  return str.replace(/(\\r\\n)|(\r\n)/gi, "<br/>").replace(/(\\n)|(\n)/gi, "<br/>");
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
/**
 * 按分隔符合并字符串
 */


function combineStr(separator) {
  for (var _len = arguments.length, subStrs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    subStrs[_key - 1] = arguments[_key];
  }

  if (!subStrs || !subStrs.length) {
    return "";
  }

  return subStrs.filter(function (k) {
    return !!k;
  }).join(separator);
}
/**
 * 判断字符串是否表示一个集合中的某一项或某一个范围（注：一个范围用英文冒号分隔，多个范围用英文逗号分隔。自动兼容全半角分隔符和多余的空格），如：
 * 【1】表示第1项
 * 【2】表示第2项
 * 【2:5】表示第2项到第5项
 * 【-1】表示最后一项
 * 【-2】表示倒数第2项
 * 【-5:-2】表示倒数第5项到倒数第2项
 * 【2,4:7,-5:-2】表示第2项和第4到7项和倒数第5项至倒数第2项
 */


function isRangeText(str) {
  var _str;

  var msg = new _methodResult.MethodResult();
  str = (_str = str) === null || _str === void 0 ? void 0 : _str.replace(/，/g, ",").replace(/：/g, ":").replace(/\s/g, "");
  str = trimString(str, ",");

  if (!str) {
    msg.isSuccess = false;
    msg.message = "必须提供一个有效的范围！";
    return msg;
  }

  var itemReg = /^-?\d+$/;
  var items = str.split(",");

  var _iterator = _createForOfIteratorHelper(items),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      var arr = item.split(":");

      if (!(arr.length == 1 || arr.length == 2)) {
        msg.isSuccess = false;
        msg.message = "格式不正确！";
        break;
      }

      if (!itemReg.test(arr[0]) || !(0, _convert.toInt)(arr[0])) {
        msg.isSuccess = false;
        msg.message = "格式不正确，必须为整数，且不能为 0！";
        break;
      }

      if (arr.length == 2 && (!itemReg.test(arr[1]) || !(0, _convert.toInt)(arr[1]))) {
        msg.isSuccess = false;
        msg.message = "格式不正确，必须为整数，且不能为 0！";
        break;
      }

      if (arr.length == 2 && (0, _convert.toInt)(arr[0]) < 0 && (0, _convert.toInt)(arr[1]) > 0) {
        msg.isSuccess = false;
        msg.message = "左侧数字为负数时，右侧数字必须也同时为负数！";
        break;
      }

      if (arr.length == 2 && (0, _convert.toInt)(arr[0]) > 0 && (0, _convert.toInt)(arr[1]) < 0) {
        continue;
      }

      if (arr.length == 2 && (0, _convert.toInt)(arr[0]) > (0, _convert.toInt)(arr[1])) {
        msg.isSuccess = false;
        msg.message = "格式不正确，左侧数字必须小于等于右侧数字！";
        break;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return msg;
}
/**
 * 删除字符串前面的下划线
 */


function removeStartLine(str) {
  return lTrimString(str, "_");
}
/**
 * 删除所有空白字符
 */


function removeWhiteSpace(str) {
  if (!str) {
    return "";
  }

  return str.replaceAll(/\s+/g, "");
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vc3RyaW5nLnRzIl0sIm5hbWVzIjpbInNwbGl0U3RyaW5nIiwic3RyIiwic3RlcENoYXJDb3VudCIsInN0ckxlbiIsImxlbmd0aCIsInJlc3VsdCIsInN0YXJ0SW5kZXgiLCJwdXNoIiwic3Vic3RyIiwiZWxsaXBzaXMiLCJsZW4iLCJlbGxpcHNpc0NoYXJzIiwic3Vic3RyaW5nIiwiZ2V0TnVtYmVyIiwibXQiLCJtYXRjaCIsInBhcnROdW1iZXIiLCJwYXJzZUZsb2F0IiwidHJpbSIsInJlcGxhY2UiLCJsVHJpbSIsInJUcmltIiwibFRyaW1TdHJpbmciLCJzdHJUb1JlbW92ZSIsImlzSWdub3JlQ2FzZSIsIlJlZ0V4cCIsInJUcmltU3RyaW5nIiwidHJpbVN0cmluZyIsInRyaW1IVE1MIiwiaHRtbCIsImh0bWxMZWZ0UmlnaHRCbGFuayIsInRlc3QiLCJlcXVhbHNJZ25vcmVDYXNlIiwiYSIsImIiLCJ0b1VwcGVyQ2FzZSIsImVxdWFsc0lnbm9yZUNhc2VBbmRUcmltIiwiY29udGFpbnMiLCJzb3VyY2UiLCJzZWFyY2giLCJzb3VyY2VTdHIiLCJpbmNsdWRlcyIsImVzY2FwZUh0bWwiLCJTdHJpbmciLCJzIiwiaHRtbEVudGl0eU1hcCIsInJlcGVhdCIsInJlcGVhdENvdW50IiwiY291bnQiLCJqb2luIiwiQnVpbGRlciIsIl9hcnIiLCJ0b1N0cmluZyIsImJ1aWxkZXIiLCJmb3JtYXQiLCJ0b2tlbiIsInJlbW92ZUJsYW5rTGluZXMiLCJyZXBsYWNlTmV3bGluZVRvQnIiLCJnZXRDaGluZXNlV29yZCIsImNoaW5lc2VDaGFyIiwiY29tYmluZVN0ciIsInNlcGFyYXRvciIsInN1YlN0cnMiLCJmaWx0ZXIiLCJrIiwiaXNSYW5nZVRleHQiLCJtc2ciLCJNZXRob2RSZXN1bHQiLCJpc1N1Y2Nlc3MiLCJtZXNzYWdlIiwiaXRlbVJlZyIsIml0ZW1zIiwic3BsaXQiLCJpdGVtIiwiYXJyIiwicmVtb3ZlU3RhcnRMaW5lIiwicmVt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QTBDckMsU0FBT0gsR0FBUDtBQUNIO0FBRUQ7QUFDQTtBQUNBOzs7QUFDTyxTQUFTUyxlQUFULENBQXlCMUUsR0FBekIsRUFBc0M7QUFDekMsU0FBT3FCLFdBQVcsQ0FBQ3JCLEdBQUQsRUFBTSxHQUFOLENBQWxCO0FBQ0g7QUFFRDtBQUNBO0FBQ0E7OztBQUNPLFNBQVMyRSxnQkFBVCxDQUEwQjNFLEdBQTFCLEVBQXVDO0FBQzFDLE1BQUksQ0FBQ0EsR0FBTCxFQUFVO0FBQ04sV0FBTyxFQUFQO0FBQ0g7O0FBQ0QsU0FBT0EsR0FBRyxDQUFDNEUsVUFBSixDQUFlLE1BQWYsRUFBdUIsRUFBdkIsQ0FBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGFydE51bWJlciwgaHRtbExlZnRSaWdodEJsYW5rLCBjaGluZXNlQ2hhciB9IGZyb20gXCIuLi9jb25zdGFudC9yZWdleFwiXHJcbmltcG9ydCB7IGVzY2FwZVJlZyB9IGZyb20gXCIuL3JlZ2V4cFwiXHJcbmltcG9ydCB7IGh0bWxFbnRpdHlNYXAgfSBmcm9tIFwiLi4vY29uc3RhbnQvbWFwXCJcclxuaW1wb3J0IHsgTWV0aG9kUmVzdWx0IH0gZnJvbSBcIi4uL2VudGl0eS9tZXRob2QtcmVzdWx0XCJcclxuaW1wb3J0IHsgdG9JbnQgfSBmcm9tIFwiLi9jb252ZXJ0XCJcclxuXHJcbi8qKlxyXG4gKiDlsIblrZfnrKbkuLLmjInkuIDlrprlrZfnrKbmlbDmi4bliIbmiJDlrZfnrKbkuLLmlbDnu4RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzcGxpdFN0cmluZyhzdHI6IHN0cmluZywgc3RlcENoYXJDb3VudDogbnVtYmVyKTogc3RyaW5nW10ge1xyXG4gICAgaWYgKCFzdHIgfHwgc3RlcENoYXJDb3VudCA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdXHJcbiAgICB9XHJcbiAgICBjb25zdCBzdHJMZW4gPSBzdHIubGVuZ3RoXHJcbiAgICBpZiAoc3RyTGVuIDw9IHN0ZXBDaGFyQ291bnQpIHtcclxuICAgICAgICByZXR1cm4gW3N0cl1cclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3VsdDogc3RyaW5nW10gPSBbXVxyXG4gICAgbGV0IHN0YXJ0SW5kZXggPSAwXHJcbiAgICB3aGlsZSAoc3RhcnRJbmRleCA8IHN0ckxlbikge1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKHN0ci5zdWJzdHIoc3RhcnRJbmRleCwgc3RlcENoYXJDb3VudCkpXHJcbiAgICAgICAgc3RhcnRJbmRleCArPSBzdGVwQ2hhckNvdW50XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmiKrlj5blrZfnrKbkuLLlubbku6XnnIHnlaXnrKblj7fmmL7npLrlrZfnrKbkuLJcclxuICogQHBhcmFtIHN0ciDljp/lrZfnrKbkuLJcclxuICogQHBhcmFtIGxlbiDopoHkv53nlZnnmoTlrZfnrKbplb/luqZcclxuICogQHBhcmFtIGVsbGlwc2lzQ2hhcnMg6KKr5oiq5pat55qE5a2X56ym5pi+56S655qE56ym5Y+3XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZWxsaXBzaXMoc3RyOiBzdHJpbmcsIGxlbjogbnVtYmVyLCBlbGxpcHNpc0NoYXJzID0gXCIuLi5cIik6IHN0cmluZyB7XHJcbiAgICBpZiAoIXN0ciB8fCBsZW4gPD0gMCkge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICBpZiAoc3RyLmxlbmd0aCA8PSBsZW4pIHtcclxuICAgICAgICByZXR1cm4gc3RyXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnN1YnN0cmluZygwLCBsZW4pICsgZWxsaXBzaXNDaGFyc1xyXG59XHJcblxyXG4vKipcclxuICog5LuO5a2X56ym5Liy5Lit5o+Q5Y+W5pWw5a2X77yI5Y+v5bim5bCP5pWw54K577yJ44CC5aaC77yaXCJhYmMxMjMuMDFjZGVcIi0+MTIzLjAxXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TnVtYmVyKHN0cjogc3RyaW5nKTogbnVtYmVyIHwgbnVsbCB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICBjb25zdCBtdCA9IHN0ci5tYXRjaChwYXJ0TnVtYmVyKVxyXG4gICAgaWYgKCFtdCB8fCAhbXQubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIHJldHVybiBwYXJzZUZsb2F0KG10WzBdKVxyXG59XHJcblxyXG4vKipcclxuICog5Y675bem5Y+z56m65qC8XHJcbiAqIEBwYXJhbSAgc3RyIOW+heWkhOeQhuWtl+espuS4slxyXG4gKiBAcmV0dXJucyAg5aSE55CG5ZCO55qE5a2X56ym5LiyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJpbShzdHI6IHN0cmluZykge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCBcIlwiKVxyXG59XHJcblxyXG4vKipcclxuICog5Y675bem56m65qC8XHJcbiAqIEBwYXJhbSAgc3RyIOW+heWkhOeQhuWtl+espuS4slxyXG4gKiBAcmV0dXJucyAg5aSE55CG5ZCO55qE5a2X56ym5LiyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbFRyaW0oc3RyOiBzdHJpbmcpIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXlxccysvLCBcIlwiKVxyXG59XHJcblxyXG4vKipcclxuICog5Y675Y+z56m65qC8XHJcbiAqIEBwYXJhbSAgc3RyIOW+heWkhOeQhuWtl+espuS4slxyXG4gKiBAcmV0dXJucyAg5aSE55CG5ZCO55qE5YC8XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gclRyaW0oc3RyOiBzdHJpbmcpIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxzKyQvLCBcIlwiKVxyXG59XHJcblxyXG4vKipcclxuICog5Y675o6J5bem6L6555qE5oyH5a6a5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBzdHIg5b6F5aSE55CG55qE5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBzdHJUb1JlbW92ZSDpnIDopoHnp7vpmaTnmoTlrZfnrKbkuLJcclxuICogQHBhcmFtIGlzSWdub3JlQ2FzZSDmmK/lkKblv73nlaXlpKflsI/lhplcclxuICogQHJldHVybnMg5aSE55CG57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbFRyaW1TdHJpbmcoc3RyOiBzdHJpbmcsIHN0clRvUmVtb3ZlOiBzdHJpbmcsIGlzSWdub3JlQ2FzZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICBpZiAoIXN0clRvUmVtb3ZlKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0clxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoYF4oJHtlc2NhcGVSZWcoc3RyVG9SZW1vdmUpfSkqYCwgaXNJZ25vcmVDYXNlID8gXCJnaVwiIDogXCJnXCIpLCBcIlwiKVxyXG59XHJcblxyXG4vKipcclxuICog5Y675o6J5Y+z6L6555qE5oyH5a6a5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBzdHIg5b6F5aSE55CG55qE5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBzdHJUb1JlbW92ZSDpnIDopoHnp7vpmaTnmoTlrZfnrKbkuLJcclxuICogQHBhcmFtIGlzSWdub3JlQ2FzZSDmmK/lkKblv73nlaXlpKflsI/lhplcclxuICogQHJldHVybnMg5aSE55CG57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gclRyaW1TdHJpbmcoc3RyOiBzdHJpbmcsIHN0clRvUmVtb3ZlOiBzdHJpbmcsIGlzSWdub3JlQ2FzZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICBpZiAoIXN0clRvUmVtb3ZlKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0clxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoYCgke2VzY2FwZVJlZyhzdHJUb1JlbW92ZSl9KSokYCwgaXNJZ25vcmVDYXNlID8gXCJnaVwiIDogXCJnXCIpLCBcIlwiKVxyXG59XHJcblxyXG4vKipcclxuICog5Y675bem5Y+z5oyH5a6a55qE5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBzdHIg5b6F5aSE55CG55qE5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBzdHJUb1JlbW92ZSDpnIDopoHnp7vpmaTnmoTlrZfnrKbkuLJcclxuICogQHBhcmFtIGlzSWdub3JlQ2FzZSDmmK/lkKblv73nlaXlpKflsI/lhplcclxuICogQHJldHVybnMg5aSE55CG57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJpbVN0cmluZyhzdHI6IHN0cmluZywgc3RyVG9SZW1vdmU6IHN0cmluZywgaXNJZ25vcmVDYXNlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIGlmICghc3RyVG9SZW1vdmUpIHtcclxuICAgICAgICByZXR1cm4gc3RyXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChgKF4oJHtlc2NhcGVSZWcoc3RyVG9SZW1vdmUpfSkqKXwoKCR7ZXNjYXBlUmVnKHN0clRvUmVtb3ZlKX0pKiQpYCwgaXNJZ25vcmVDYXNlID8gXCJnaVwiIDogXCJnXCIpLCBcIlwiKVxyXG59XHJcblxyXG4vKipcclxuICog5LuOaHRtbOWtl+espuS4suS4reenu+mZpOW3puWPs+epuueZveWNoOS9jeesplxyXG4gKiBAcGFyYW0gaHRtbCDlvoXlpITnkIbnmoTlrZfnrKbkuLJcclxuICogQHJldHVybnMg5aSE55CG57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJpbUhUTUwoaHRtbDogc3RyaW5nKSB7XHJcbiAgICBsZXQgc3RyID0gaHRtbFxyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgd2hpbGUgKGh0bWxMZWZ0UmlnaHRCbGFuay50ZXN0KHN0cikpIHtcclxuICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShodG1sTGVmdFJpZ2h0QmxhbmssIFwiXCIpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq3kuKTkuKrlrZfnrKbkuLLmmK/lkKbnm7jnrYnvvIjlv73nlaXlpKflsI/lhpnvvIlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHNJZ25vcmVDYXNlKGE6IHN0cmluZywgYjogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gKGEgfHwgXCJcIikudG9VcHBlckNhc2UoKSA9PSAoYiB8fCBcIlwiKS50b1VwcGVyQ2FzZSgpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq3kuKTkuKrlrZfnrKbkuLLmmK/lkKbnm7jnrYnvvIjlv73nlaXlpKflsI/lhpkr5Y675bem5Y+z56m655m977yJXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxzSWdub3JlQ2FzZUFuZFRyaW0oYTogc3RyaW5nLCBiOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBlcXVhbHNJZ25vcmVDYXNlKHRyaW0oYSksIHRyaW0oYikpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmjIflrprmupDlrZfnrKbkuLJzb3VyY2XkuK3mmK/lkKbljIXlkKtzZWFyY2jlrZfnrKbkuLJcclxuICogQHBhcmFtICBzb3VyY2Ug5rqQ5a2X56ym5LiyXHJcbiAqIEBwYXJhbSAgc2VhcmNoIOimgeafpeaJvueahOWtl+espuS4slxyXG4gKiBAcGFyYW0gIGlzSWdub3JlQ2FzZSDmmK/lkKblv73nlaXlpKflsI/lhpko6buY6K6k5Li6ZmFsc2UpXHJcbiAqIEByZXR1cm5zICDnu5PmnpxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb250YWlucyhzb3VyY2U6IHN0cmluZywgc2VhcmNoOiBzdHJpbmcsIGlzSWdub3JlQ2FzZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICBsZXQgc291cmNlU3RyID0gc291cmNlXHJcbiAgICBsZXQgc3RyID0gc2VhcmNoXHJcbiAgICBpZiAoIXNvdXJjZVN0cikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgaWYgKHN0ciA9PT0gXCJcIikge1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgaWYgKGlzSWdub3JlQ2FzZSkge1xyXG4gICAgICAgIHNvdXJjZVN0ciA9IHNvdXJjZVN0ci50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgc3RyID0gc3RyLnRvVXBwZXJDYXNlKClcclxuICAgIH1cclxuICAgIHJldHVybiBzb3VyY2VTdHIuaW5jbHVkZXMoc3RyKVxyXG59XHJcblxyXG4vKipcclxuICog5bCGaHRtbOagh+etvui9rOaNouS4uuWunuS9k+W9ouW8j1xyXG4gKiBAcGFyYW0gIGh0bWwg6ZyA6KaB6KKr5pu/5o2i55qEaHRtbFxyXG4gKiBAcmV0dXJucyAg6L2s5o2i5ZCO55qE5YC8XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlSHRtbChodG1sOiBzdHJpbmcpIHtcclxuICAgIGlmICghaHRtbCkge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gU3RyaW5nKGh0bWwpLnJlcGxhY2UoL1smPD5cIicvXS9nLCAocykgPT4gaHRtbEVudGl0eU1hcFtzXSlcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSAgIHN0ciDopoHph43lpI3nmoTlrZfnrKbkuLJcclxuICogQHBhcmFtICAgcmVwZWF0Q291bnQg6YeN5aSN5qyh5pWwXHJcbiAqIEByZXR1cm5zICDmlrDnmoTlrZfnrKbkuLJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZXBlYXQoc3RyOiBzdHJpbmcsIHJlcGVhdENvdW50OiBudW1iZXIpIHtcclxuICAgIGxldCBjb3VudCA9IHJlcGVhdENvdW50XHJcbiAgICBpZiAoIXN0ciB8fCBjb3VudCA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIGNvbnN0IHMgPSBbXVxyXG4gICAgd2hpbGUgKGNvdW50LS0pIHtcclxuICAgICAgICBzLnB1c2goc3RyKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHMuam9pbihcIlwiKVxyXG59XHJcblxyXG4vKipcclxuICog5a2X56ym5Liy5om56YeP5p6E5bu65Zmo77yI5peg6ZyA5L2/55SoXCIrXCLov5vooYzlrZfnrKbkuLLnmoTmi7zmjqXvvIznm7TmjqXkvb/nlKjmraTlr7nosaHnmoRhcHBlbmTmlrnms5XlkI7vvIzlho10b1N0cmluZ+WNs+WPr+W+l+WIsOaLvOWlveeahOWtl+espuS4su+8iVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJ1aWxkZXI8VD4ge1xyXG4gICAgcHJpdmF0ZSBfYXJyOiBUW10gPSBbXVxyXG4gICAgLyoqXHJcbiAgICAgKiDov73liqDpoblcclxuICAgICAqIEBwYXJhbSBpdGVtcyDlvoXov73liqDnmoTpoblcclxuICAgICAqIEByZXR1cm5zIHRoaXNcclxuICAgICAqL1xyXG4gICAgYXBwZW5kKC4uLml0ZW1zOiBUW10pIHtcclxuICAgICAgICB0aGlzLl9hcnIucHVzaCguLi5pdGVtcylcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDov5Tlm57lt7LlkIjlubbnmoTmiYDmnInpobnnmoTlrZfnrKbkuLJcclxuICAgICAqL1xyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Fyci5qb2luKFwiXCIpXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOa4heepuuW9k+WJjeeahOaehOW7uuWZqOS4reeahOaJgOaciemhuVxyXG4gICAgICogQHJldHVybnMgdGhpc1xyXG4gICAgICovXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLl9hcnIgPSBbXVxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOi/lOWbnuaehOW7uuWZqOS4reaJgOaciemhueeahOWtl+espuS4suaAu+eahOWtl+espumVv+W6plxyXG4gICAgICovXHJcbiAgICBsZW5ndGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKS5sZW5ndGhcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGJ1aWxkZXIgPSBCdWlsZGVyXHJcblxyXG4vKipcclxuICog5L2/55So5qih5p2/5qC85byP5YyW5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBzdHIg5qih5p2/77yM5aaC77yaXCLku4rlpKnmmK/mmJ/mnJ97MH3vvIzlt7LmiJDkuqR7MX3ljZXvvIFcIlxyXG4gKiBAcGFyYW0gYXJncyDmqKHmnb/kuK3nmoTlj4LmlbBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQoc3RyOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICBpZiAoIXN0ciB8fCAhYXJncy5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gc3RyXHJcbiAgICB9XHJcbiAgICBsZXQgcmVzdWx0ID0gc3RyXHJcbiAgICBmb3IgKGxldCB0b2tlbiA9IDA7IHRva2VuIDwgYXJncy5sZW5ndGg7IHRva2VuKyspIHtcclxuICAgICAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZShuZXcgUmVnRXhwKFwiXFxcXHtcIiArIHRva2VuICsgXCJcXFxcfVwiLCBcImdpXCIpLCBhcmdzW3Rva2VuXSlcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHRcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIoOmZpOepuueZveihjO+8iOepuueZveihjOaYr+aMh++8muatpOihjOS4uuepuueZveS4lOacq+WwvuS4uiBcXHIg5oiWIFxcbu+8iVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUJsYW5rTGluZXMoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKltcXHJcXG5dL2dtLCBcIlwiKVxyXG59XHJcblxyXG4vKipcclxuICog5bCG5paH5pys5Lit55qE5a2X56ym5Liy5b2i5byP5oiW5o2i6KGM56ym5b2i5byP55qEIFwiXFxyXFxuXCIg5ZKMIFwiXFxuXCIg57uf5LiA5pu/5o2i5oiQIDxici8+XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZU5ld2xpbmVUb0JyKHN0cjogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhcXFxcclxcXFxuKXwoXFxyXFxuKS9naSwgXCI8YnIvPlwiKS5yZXBsYWNlKC8oXFxcXG4pfChcXG4pL2dpLCBcIjxici8+XCIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDojrflj5blrZfnrKbkuLLkuK3nmoTkuK3mloflrZfnrKZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGluZXNlV29yZChzdHI6IHN0cmluZykge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgY29uc3QgbWF0Y2ggPSBzdHIubWF0Y2gobmV3IFJlZ0V4cChjaGluZXNlQ2hhciwgXCJnXCIpKVxyXG4gICAgaWYgKCFtYXRjaCB8fCAhbWF0Y2gubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIHJldHVybiBtYXRjaC5qb2luKFwiXCIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmjInliIbpmpTnrKblkIjlubblrZfnrKbkuLJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lU3RyKHNlcGFyYXRvcjogc3RyaW5nLCAuLi5zdWJTdHJzOiBzdHJpbmdbXSkge1xyXG4gICAgaWYgKCFzdWJTdHJzIHx8ICFzdWJTdHJzLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3ViU3Rycy5maWx0ZXIoKGspID0+ICEhaykuam9pbihzZXBhcmF0b3IpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq3lrZfnrKbkuLLmmK/lkKbooajnpLrkuIDkuKrpm4blkIjkuK3nmoTmn5DkuIDpobnmiJbmn5DkuIDkuKrojIPlm7TvvIjms6jvvJrkuIDkuKrojIPlm7TnlKjoi7HmloflhpLlj7fliIbpmpTvvIzlpJrkuKrojIPlm7TnlKjoi7HmlofpgJflj7fliIbpmpTjgILoh6rliqjlhbzlrrnlhajljYrop5LliIbpmpTnrKblkozlpJrkvZnnmoTnqbrmoLzvvInvvIzlpoLvvJpcclxuICog44CQMeOAkeihqOekuuesrDHpoblcclxuICog44CQMuOAkeihqOekuuesrDLpoblcclxuICog44CQMjo144CR6KGo56S656ysMumhueWIsOesrDXpoblcclxuICog44CQLTHjgJHooajnpLrmnIDlkI7kuIDpoblcclxuICog44CQLTLjgJHooajnpLrlgJLmlbDnrKwy6aG5XHJcbiAqIOOAkC01Oi0y44CR6KGo56S65YCS5pWw56ysNemhueWIsOWAkuaVsOesrDLpoblcclxuICog44CQMiw0OjcsLTU6LTLjgJHooajnpLrnrKwy6aG55ZKM56ysNOWIsDfpobnlkozlgJLmlbDnrKw16aG56Iez5YCS5pWw56ysMumhuVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUmFuZ2VUZXh0KHN0cjogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBtc2cgPSBuZXcgTWV0aG9kUmVzdWx0KClcclxuICAgIHN0ciA9IHN0cj8ucmVwbGFjZSgv77yML2csIFwiLFwiKS5yZXBsYWNlKC/vvJovZywgXCI6XCIpLnJlcGxhY2UoL1xccy9nLCBcIlwiKVxyXG4gICAgc3RyID0gdHJpbVN0cmluZyhzdHIsIFwiLFwiKVxyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICBtc2cuaXNTdWNjZXNzID0gZmFsc2VcclxuICAgICAgICBtc2cubWVzc2FnZSA9IFwi5b+F6aG75o+Q5L6b5LiA5Liq5pyJ5pWI55qE6IyD5Zu077yBXCJcclxuICAgICAgICByZXR1cm4gbXNnXHJcbiAgICB9XHJcbiAgICBjb25zdCBpdGVtUmVnID0gL14tP1xcZCskL1xyXG4gICAgY29uc3QgaXRlbXMgPSBzdHIuc3BsaXQoXCIsXCIpXHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcclxuICAgICAgICBjb25zdCBhcnIgPSBpdGVtLnNwbGl0KFwiOlwiKVxyXG4gICAgICAgIGlmICghKGFyci5sZW5ndGggPT0gMSB8fCBhcnIubGVuZ3RoID09IDIpKSB7XHJcbiAgICAgICAgICAgIG1zZy5pc1N1Y2Nlc3MgPSBmYWxzZVxyXG4gICAgICAgICAgICBtc2cubWVzc2FnZSA9IFwi5qC85byP5LiN5q2j56Gu77yBXCJcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpdGVtUmVnLnRlc3QoYXJyWzBdKSB8fCAhdG9JbnQoYXJyWzBdKSkge1xyXG4gICAgICAgICAgICBtc2cuaXNTdWNjZXNzID0gZmFsc2VcclxuICAgICAgICAgICAgbXNnLm1lc3NhZ2UgPSBcIuagvOW8j+S4jeato+ehru+8jOW/hemhu+S4uuaVtOaVsO+8jOS4lOS4jeiDveS4uiAw77yBXCJcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyci5sZW5ndGggPT0gMiAmJiAoIWl0ZW1SZWcudGVzdChhcnJbMV0pIHx8ICF0b0ludChhcnJbMV0pKSkge1xyXG4gICAgICAgICAgICBtc2cuaXNTdWNjZXNzID0gZmFsc2VcclxuICAgICAgICAgICAgbXNnLm1lc3NhZ2UgPSBcIuagvOW8j+S4jeato+ehru+8jOW/hemhu+S4uuaVtOaVsO+8jOS4lOS4jeiDveS4uiAw77yBXCJcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyci5sZW5ndGggPT0gMiAmJiB0b0ludChhcnJbMF0pIDwgMCAmJiB0b0ludChhcnJbMV0pID4gMCkge1xyXG4gICAgICAgICAgICBtc2cuaXNTdWNjZXNzID0gZmFsc2VcclxuICAgICAgICAgICAgbXNnLm1lc3NhZ2UgPSBcIuW3puS+p+aVsOWtl+S4uui0n+aVsOaXtu+8jOWPs+S+p+aVsOWtl+W/hemhu+S5n+WQjOaXtuS4uui0n+aVsO+8gVwiXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhcnIubGVuZ3RoID09IDIgJiYgdG9JbnQoYXJyWzBdKSA+IDAgJiYgdG9JbnQoYXJyWzFdKSA8IDApIHtcclxuICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyci5sZW5ndGggPT0gMiAmJiB0b0ludChhcnJbMF0pID4gdG9JbnQoYXJyWzFdKSkge1xyXG4gICAgICAgICAgICBtc2cuaXNTdWNjZXNzID0gZmFsc2VcclxuICAgICAgICAgICAgbXNnLm1lc3NhZ2UgPSBcIuagvOW8j+S4jeato+ehru+8jOW3puS+p+aVsOWtl+W/hemhu+Wwj+S6juetieS6juWPs+S+p+aVsOWtl++8gVwiXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1zZ1xyXG59XHJcblxyXG4vKipcclxuICog5Yig6Zmk5a2X56ym5Liy5YmN6Z2i55qE5LiL5YiS57q/XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlU3RhcnRMaW5lKHN0cjogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gbFRyaW1TdHJpbmcoc3RyLCBcIl9cIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIoOmZpOaJgOacieepuueZveWtl+esplxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVdoaXRlU3BhY2Uoc3RyOiBzdHJpbmcpIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIucmVwbGFjZUFsbCgvXFxzKy9nLCBcIlwiKVxyXG59XHJcbiJdfQ==