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
exports.getHowToUseRangeText = getHowToUseRangeText;
exports.removeStartLine = removeStartLine;
exports.removeWhiteSpace = removeWhiteSpace;
exports.builder = exports.Builder = void 0;

var _regex = require("../constant/regex");

var _regexp = require("./regexp");

var _map = require("../constant/map");

var _methodResult = require("../entity/method-result");

var _convert = require("./convert");

var _i18n = require("../i18n");

var _data = require("../i18n/data");

var _enums = require("../constant/enums");

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


function isRangeText(str, isOnlySupportOneRange) {
  var _str;

  var i18n = (0, _i18n.getXJsKitI18nInstance)();
  var msg = new _methodResult.MethodResult();
  str = (_str = str) === null || _str === void 0 ? void 0 : _str.replace(/，/g, ",").replace(/：/g, ":").replace(/\s/g, "");
  str = trimString(str, ",");

  if (!str) {
    msg.isSuccess = false;
    msg.message = i18n.t(_data.XJsKitTranslationKeyNameEnum.必须提供一个有效的范围);
    return msg;
  }

  var itemReg = /^-?\d+$/;
  var items = str.split(",");

  if (isOnlySupportOneRange && items.length >= 2) {
    msg.isSuccess = false;
    msg.message = i18n.t(_data.XJsKitTranslationKeyNameEnum.请注意当前功能只支持一个连续的范围请删除范围中的逗号);
    return msg;
  }

  var _iterator = _createForOfIteratorHelper(items),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      var arr = item.split(":");

      if (!(arr.length == 1 || arr.length == 2)) {
        msg.isSuccess = false;
        msg.message = i18n.t(_data.XJsKitTranslationKeyNameEnum.格式不正确);
        break;
      }

      if (!itemReg.test(arr[0]) || !(0, _convert.toInt)(arr[0])) {
        msg.isSuccess = false;
        msg.message = i18n.t(_data.XJsKitTranslationKeyNameEnum.格式不正确必须为整数且不能为0);
        break;
      }

      if (arr.length == 2 && (!itemReg.test(arr[1]) || !(0, _convert.toInt)(arr[1]))) {
        msg.isSuccess = false;
        msg.message = i18n.t(_data.XJsKitTranslationKeyNameEnum.格式不正确必须为整数且不能为0);
        break;
      }

      if (arr.length == 2 && (0, _convert.toInt)(arr[0]) < 0 && (0, _convert.toInt)(arr[1]) > 0) {
        msg.isSuccess = false;
        msg.message = i18n.t(_data.XJsKitTranslationKeyNameEnum.左侧数字为负数时右侧数字必须也同时为负数);
        break;
      }

      if (arr.length == 2 && (0, _convert.toInt)(arr[0]) > 0 && (0, _convert.toInt)(arr[1]) < 0) {
        continue;
      }

      if (arr.length == 2 && (0, _convert.toInt)(arr[0]) > (0, _convert.toInt)(arr[1])) {
        msg.isSuccess = false;
        msg.message = i18n.t(_data.XJsKitTranslationKeyNameEnum.格式不正确左侧数字必须小于等于右侧数字);
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
 * 获取范围文本的使用说明
 */


function getHowToUseRangeText(type) {
  var i18n = (0, _i18n.getXJsKitI18nInstance)();
  var txt = "";

  switch (type) {
    case _enums.RangeTextTypeEnum.页面范围:
      txt = i18n.t(_data.XJsKitTranslationKeyNameEnum.页面范围文本提示语);
      break;

    case _enums.RangeTextTypeEnum.工作表范围:
      txt = i18n.t(_data.XJsKitTranslationKeyNameEnum.工作表范围文本提示语);
      break;

    case _enums.RangeTextTypeEnum.字符范围:
      txt = i18n.t(_data.XJsKitTranslationKeyNameEnum.字符范围文本提示语);
      break;

    case _enums.RangeTextTypeEnum.文本位置范围:
      txt = i18n.t(_data.XJsKitTranslationKeyNameEnum.文本位置范围文本提示语);
      break;

    default:
      txt = i18n.t(_data.XJsKitTranslationKeyNameEnum.默认范围文本提示语);
      break;
  }

  return txt;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vc3RyaW5nLnRzIl0sIm5hbWVzIjpbInNwbGl0U3RyaW5nIiwic3RyIiwic3RlcENoYXJDb3VudCIsInN0ckxlbiIsImxlbmd0aCIsInJlc3VsdCIsInN0YXJ0SW5kZXgiLCJwdXNoIiwic3Vic3RyIiwiZWxsaXBzaXMiLCJsZW4iLCJlbGxpcHNpc0NoYXJzIiwic3Vic3RyaW5nIiwiZ2V0TnVtYmVyIiwibXQiLCJtYXRjaCIsInBhcnROdW1iZXIiLCJwYXJzZUZsb2F0IiwidHJpbSIsInJlcGxhY2UiLCJsVHJpbSIsInJUcmltIiwibFRyaW1TdHJpbmciLCJzdHJUb1JlbW92ZSIsImlzSWdub3JlQ2FzZSIsIlJlZ0V4cCIsInJUcmltU3RyaW5nIiwidHJpbVN0cmluZyIsInRyaW1IVE1MIiwiaHRtbCIsImh0bWxMZWZ0UmlnaHRCbGFuayIsInRlc3QiLCJlcXVhbHNJZ25vcmVDYXNlIiwiYSIsImIiLCJ0b1VwcGVyQ2FzZSIsImVxdWFsc0lnbm9yZUNhc2VBbmRUcmltIiwiY29udGFpbnMiLCJzb3VyY2UiLCJzZWFyY2giLCJzb3VyY2VTdHIiLCJpbmNsdWRlcyIsImVzY2FwZUh0bWwiLCJTdHJpbmciLCJzIiwiaHRtbEVudGl0eU1hcCIsInJlcGVhdCIsInJlcGVhdENvdW50IiwiY291bnQiLCJqb2luIiwiQnVpbGRlciIsIl9hcnIiLCJ0b1N0cmluZyIsImJ1aWxkZXIiLCJmb3JtYXQiLCJ0b2tlbiIsInJlbW92ZUJsYW5rTGluZXMiLCJyZXBsYWNlTmV3bGluZVRvQnIiLCJnZXRDaGluZXNlV29yZCIsImNoaW5lc2VDaGFyIiwiY29tYmluZVN0ciIsInNlcGFyYXRvciIsInN1YlN0cnMiLCJmaWx0ZXIiLCJrIiwiaXNSYW5nZVRleHQiLCJpc09ubHlTdXBwb3J0T25lUmFuZ2UiLCJpMThuIiwibXNnIiwiTWV0aG9kUmVzdWx0IiwiaXNTdWNjZXNzIiwibWVzc2FnZSIsInQiLCJYSnNLaXRUcmFuc2xhdGlvbktleU5hbWVFbnVtIiwi5b+F6aG75o+Q5L6b5LiA5Liq5pyJ5pWI55qE6IyD5Zu0IiwiaXRlbVJlZyIsIml0ZW1zIiwic3BsaXQiLCLor7fms6jmhI/lvZPliY3lip/og73lj6rmlK/mjIHkuIDkuKrov57nu63nmoTojIPlm7Tor7fliKDpmaTojIPlm7TkuK3nmoTpgJflj7ciLCJpdGVtIiwiYXJyIiwi5qC85byP5LiN5q2j56GuIiwi5qC85byP5LiN5q2j56Gu5b+F6aG75Li65pW05pWw5LiU5LiN6IO95Li6MCIsIuW3puS+p+aVsOWtl+S4uui0n+aVsOaXtuWPs+S+p+aVsOWtl+W/hemhu+S5n+WQjOaXtuS4uui0n+aVsCIsIuagvOW8j+S4jeato+ehruW3puS+p+aVsOWtl+W/hemhu+Wwj+S6juetieS6juWPs+S+p+aVsOWtlyIsImdldEhvd1RvVXNlUmFuZ2VUZXh0IiwidHlwZSIsInR4dCIsIlJhbmdlVGV4dFR5cGVFbnVtIiwi6aG16Z2i6IyD5Zu0Iiwi6aG16Z2i6IyD5Zu05paH5pys5o+Q56S66K+tIiwi5bel5L2c6KGo6IyD5Zu0Iiwi5bel5L2c6KGo6IyD5Zu05paH5pys5o+Q56S66K+tIiwi5a2X56ym6IyD5Zu0Iiwi5a2X56ym6IyD5Zu05paH5pys5o+Q56S66K+tIiwi5paH5pys5L2N572u6IyD5Zu0Iiwi5paH5pys5L2N572u6IyD5Zu05paH5pys5o+Q56S66K+tIiwi6buY6K6k6IyD5Zu05paH5pys5o+Q56S66K+tIiwicmVtb3ZlU3RhcnRMaW5lIiwicmVtb3ZlV2hpdGVTcGFjZSIsInJlcGxhY2VBbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNPLFNBQVNBLFdBQVQsQ0FBcUJDLEdBQXJCLEVBQWtDQyxhQUFsQyxFQUFtRTtBQUN0RSxNQUFJLENBQUNELEdBQUQsSUFBUUMsYUFBYSxJQUFJLENBQTdCLEVBQWdD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LFNBQVNXLGVBQVQsQ0FBeUJqRyxHQUF6QixFQUFzQztBQUN6QyxTQUFPcUIsV0FBVyxDQUFDckIsR0FBRCxFQUFNLEdBQU4sQ0FBbEI7QUFDSDtBQUVEO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU2tHLGdCQUFULENBQTBCbEcsR0FBMUIsRUFBdUM7QUFDMUMsTUFBSSxDQUFDQSxHQUFMLEVBQVU7QUFDTixXQUFPLEVBQVA7QUFDSDs7QUFDRCxTQUFPQSxHQUFHLENBQUNtRyxVQUFKLENBQWUsTUFBZixFQUF1QixFQUF2QixDQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwYXJ0TnVtYmVyLCBodG1sTGVmdFJpZ2h0QmxhbmssIGNoaW5lc2VDaGFyIH0gZnJvbSBcIi4uL2NvbnN0YW50L3JlZ2V4XCJcclxuaW1wb3J0IHsgZXNjYXBlUmVnIH0gZnJvbSBcIi4vcmVnZXhwXCJcclxuaW1wb3J0IHsgaHRtbEVudGl0eU1hcCB9IGZyb20gXCIuLi9jb25zdGFudC9tYXBcIlxyXG5pbXBvcnQgeyBNZXRob2RSZXN1bHQgfSBmcm9tIFwiLi4vZW50aXR5L21ldGhvZC1yZXN1bHRcIlxyXG5pbXBvcnQgeyB0b0ludCB9IGZyb20gXCIuL2NvbnZlcnRcIlxyXG5pbXBvcnQgeyBnZXRYSnNLaXRJMThuSW5zdGFuY2UgfSBmcm9tIFwiLi4vaTE4blwiXHJcbmltcG9ydCB7IFhKc0tpdFRyYW5zbGF0aW9uS2V5TmFtZUVudW0gfSBmcm9tIFwiLi4vaTE4bi9kYXRhXCJcclxuaW1wb3J0IHsgUmFuZ2VUZXh0VHlwZUVudW0gfSBmcm9tIFwiLi4vY29uc3RhbnQvZW51bXNcIlxyXG5cclxuLyoqXHJcbiAqIOWwhuWtl+espuS4suaMieS4gOWumuWtl+espuaVsOaLhuWIhuaIkOWtl+espuS4suaVsOe7hFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0U3RyaW5nKHN0cjogc3RyaW5nLCBzdGVwQ2hhckNvdW50OiBudW1iZXIpOiBzdHJpbmdbXSB7XHJcbiAgICBpZiAoIXN0ciB8fCBzdGVwQ2hhckNvdW50IDw9IDApIHtcclxuICAgICAgICByZXR1cm4gW11cclxuICAgIH1cclxuICAgIGNvbnN0IHN0ckxlbiA9IHN0ci5sZW5ndGhcclxuICAgIGlmIChzdHJMZW4gPD0gc3RlcENoYXJDb3VudCkge1xyXG4gICAgICAgIHJldHVybiBbc3RyXVxyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzdWx0OiBzdHJpbmdbXSA9IFtdXHJcbiAgICBsZXQgc3RhcnRJbmRleCA9IDBcclxuICAgIHdoaWxlIChzdGFydEluZGV4IDwgc3RyTGVuKSB7XHJcbiAgICAgICAgcmVzdWx0LnB1c2goc3RyLnN1YnN0cihzdGFydEluZGV4LCBzdGVwQ2hhckNvdW50KSlcclxuICAgICAgICBzdGFydEluZGV4ICs9IHN0ZXBDaGFyQ291bnRcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHRcclxufVxyXG5cclxuLyoqXHJcbiAqIOaIquWPluWtl+espuS4suW5tuS7peecgeeVpeespuWPt+aYvuekuuWtl+espuS4slxyXG4gKiBAcGFyYW0gc3RyIOWOn+Wtl+espuS4slxyXG4gKiBAcGFyYW0gbGVuIOimgeS/neeVmeeahOWtl+espumVv+W6plxyXG4gKiBAcGFyYW0gZWxsaXBzaXNDaGFycyDooqvmiKrmlq3nmoTlrZfnrKbmmL7npLrnmoTnrKblj7dcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlbGxpcHNpcyhzdHI6IHN0cmluZywgbGVuOiBudW1iZXIsIGVsbGlwc2lzQ2hhcnMgPSBcIi4uLlwiKTogc3RyaW5nIHtcclxuICAgIGlmICghc3RyIHx8IGxlbiA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIGlmIChzdHIubGVuZ3RoIDw9IGxlbikge1xyXG4gICAgICAgIHJldHVybiBzdHJcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIuc3Vic3RyaW5nKDAsIGxlbikgKyBlbGxpcHNpc0NoYXJzXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDku47lrZfnrKbkuLLkuK3mj5Dlj5bmlbDlrZfvvIjlj6/luKblsI/mlbDngrnvvInjgILlpoLvvJpcImFiYzEyMy4wMWNkZVwiLT4xMjMuMDFcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROdW1iZXIoc3RyOiBzdHJpbmcpOiBudW1iZXIgfCBudWxsIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIGNvbnN0IG10ID0gc3RyLm1hdGNoKHBhcnROdW1iZXIpXHJcbiAgICBpZiAoIW10IHx8ICFtdC5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQobXRbMF0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDljrvlt6blj7PnqbrmoLxcclxuICogQHBhcmFtICBzdHIg5b6F5aSE55CG5a2X56ym5LiyXHJcbiAqIEByZXR1cm5zICDlpITnkIblkI7nmoTlrZfnrKbkuLJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmltKHN0cjogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csIFwiXCIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDljrvlt6bnqbrmoLxcclxuICogQHBhcmFtICBzdHIg5b6F5aSE55CG5a2X56ym5LiyXHJcbiAqIEByZXR1cm5zICDlpITnkIblkI7nmoTlrZfnrKbkuLJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsVHJpbShzdHI6IHN0cmluZykge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKy8sIFwiXCIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDljrvlj7PnqbrmoLxcclxuICogQHBhcmFtICBzdHIg5b6F5aSE55CG5a2X56ym5LiyXHJcbiAqIEByZXR1cm5zICDlpITnkIblkI7nmoTlgLxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByVHJpbShzdHI6IHN0cmluZykge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHMrJC8sIFwiXCIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDljrvmjonlt6bovrnnmoTmjIflrprlrZfnrKbkuLJcclxuICogQHBhcmFtIHN0ciDlvoXlpITnkIbnmoTlrZfnrKbkuLJcclxuICogQHBhcmFtIHN0clRvUmVtb3ZlIOmcgOimgeenu+mZpOeahOWtl+espuS4slxyXG4gKiBAcGFyYW0gaXNJZ25vcmVDYXNlIOaYr+WQpuW/veeVpeWkp+Wwj+WGmVxyXG4gKiBAcmV0dXJucyDlpITnkIbnu5PmnpxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsVHJpbVN0cmluZyhzdHI6IHN0cmluZywgc3RyVG9SZW1vdmU6IHN0cmluZywgaXNJZ25vcmVDYXNlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIGlmICghc3RyVG9SZW1vdmUpIHtcclxuICAgICAgICByZXR1cm4gc3RyXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChgXigke2VzY2FwZVJlZyhzdHJUb1JlbW92ZSl9KSpgLCBpc0lnbm9yZUNhc2UgPyBcImdpXCIgOiBcImdcIiksIFwiXCIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDljrvmjonlj7PovrnnmoTmjIflrprlrZfnrKbkuLJcclxuICogQHBhcmFtIHN0ciDlvoXlpITnkIbnmoTlrZfnrKbkuLJcclxuICogQHBhcmFtIHN0clRvUmVtb3ZlIOmcgOimgeenu+mZpOeahOWtl+espuS4slxyXG4gKiBAcGFyYW0gaXNJZ25vcmVDYXNlIOaYr+WQpuW/veeVpeWkp+Wwj+WGmVxyXG4gKiBAcmV0dXJucyDlpITnkIbnu5PmnpxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByVHJpbVN0cmluZyhzdHI6IHN0cmluZywgc3RyVG9SZW1vdmU6IHN0cmluZywgaXNJZ25vcmVDYXNlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIGlmICghc3RyVG9SZW1vdmUpIHtcclxuICAgICAgICByZXR1cm4gc3RyXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChgKCR7ZXNjYXBlUmVnKHN0clRvUmVtb3ZlKX0pKiRgLCBpc0lnbm9yZUNhc2UgPyBcImdpXCIgOiBcImdcIiksIFwiXCIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDljrvlt6blj7PmjIflrprnmoTlrZfnrKbkuLJcclxuICogQHBhcmFtIHN0ciDlvoXlpITnkIbnmoTlrZfnrKbkuLJcclxuICogQHBhcmFtIHN0clRvUmVtb3ZlIOmcgOimgeenu+mZpOeahOWtl+espuS4slxyXG4gKiBAcGFyYW0gaXNJZ25vcmVDYXNlIOaYr+WQpuW/veeVpeWkp+Wwj+WGmVxyXG4gKiBAcmV0dXJucyDlpITnkIbnu5PmnpxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmltU3RyaW5nKHN0cjogc3RyaW5nLCBzdHJUb1JlbW92ZTogc3RyaW5nLCBpc0lnbm9yZUNhc2U6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgaWYgKCFzdHJUb1JlbW92ZSkge1xyXG4gICAgICAgIHJldHVybiBzdHJcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKGAoXigke2VzY2FwZVJlZyhzdHJUb1JlbW92ZSl9KSopfCgoJHtlc2NhcGVSZWcoc3RyVG9SZW1vdmUpfSkqJClgLCBpc0lnbm9yZUNhc2UgPyBcImdpXCIgOiBcImdcIiksIFwiXCIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDku45odG1s5a2X56ym5Liy5Lit56e76Zmk5bem5Y+z56m655m95Y2g5L2N56ymXHJcbiAqIEBwYXJhbSBodG1sIOW+heWkhOeQhueahOWtl+espuS4slxyXG4gKiBAcmV0dXJucyDlpITnkIbnu5PmnpxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmltSFRNTChodG1sOiBzdHJpbmcpIHtcclxuICAgIGxldCBzdHIgPSBodG1sXHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICB3aGlsZSAoaHRtbExlZnRSaWdodEJsYW5rLnRlc3Qoc3RyKSkge1xyXG4gICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKGh0bWxMZWZ0UmlnaHRCbGFuaywgXCJcIilcclxuICAgIH1cclxuICAgIHJldHVybiBzdHJcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreS4pOS4quWtl+espuS4suaYr+WQpuebuOetie+8iOW/veeVpeWkp+Wwj+WGme+8iVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFsc0lnbm9yZUNhc2UoYTogc3RyaW5nLCBiOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiAoYSB8fCBcIlwiKS50b1VwcGVyQ2FzZSgpID09IChiIHx8IFwiXCIpLnRvVXBwZXJDYXNlKClcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreS4pOS4quWtl+espuS4suaYr+WQpuebuOetie+8iOW/veeVpeWkp+Wwj+WGmSvljrvlt6blj7Pnqbrnmb3vvIlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHNJZ25vcmVDYXNlQW5kVHJpbShhOiBzdHJpbmcsIGI6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIGVxdWFsc0lnbm9yZUNhc2UodHJpbShhKSwgdHJpbShiKSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOaMh+Wumua6kOWtl+espuS4snNvdXJjZeS4reaYr+WQpuWMheWQq3NlYXJjaOWtl+espuS4slxyXG4gKiBAcGFyYW0gIHNvdXJjZSDmupDlrZfnrKbkuLJcclxuICogQHBhcmFtICBzZWFyY2gg6KaB5p+l5om+55qE5a2X56ym5LiyXHJcbiAqIEBwYXJhbSAgaXNJZ25vcmVDYXNlIOaYr+WQpuW/veeVpeWkp+Wwj+WGmSjpu5jorqTkuLpmYWxzZSlcclxuICogQHJldHVybnMgIOe7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5zKHNvdXJjZTogc3RyaW5nLCBzZWFyY2g6IHN0cmluZywgaXNJZ25vcmVDYXNlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIGxldCBzb3VyY2VTdHIgPSBzb3VyY2VcclxuICAgIGxldCBzdHIgPSBzZWFyY2hcclxuICAgIGlmICghc291cmNlU3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBpZiAoc3RyID09PSBcIlwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBpZiAoaXNJZ25vcmVDYXNlKSB7XHJcbiAgICAgICAgc291cmNlU3RyID0gc291cmNlU3RyLnRvVXBwZXJDYXNlKClcclxuICAgICAgICBzdHIgPSBzdHIudG9VcHBlckNhc2UoKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNvdXJjZVN0ci5pbmNsdWRlcyhzdHIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlsIZodG1s5qCH562+6L2s5o2i5Li65a6e5L2T5b2i5byPXHJcbiAqIEBwYXJhbSAgaHRtbCDpnIDopoHooqvmm7/mjaLnmoRodG1sXHJcbiAqIEByZXR1cm5zICDovazmjaLlkI7nmoTlgLxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVIdG1sKGh0bWw6IHN0cmluZykge1xyXG4gICAgaWYgKCFodG1sKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIHJldHVybiBTdHJpbmcoaHRtbCkucmVwbGFjZSgvWyY8PlwiJy9dL2csIChzKSA9PiBodG1sRW50aXR5TWFwW3NdKVxyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtICAgc3RyIOimgemHjeWkjeeahOWtl+espuS4slxyXG4gKiBAcGFyYW0gICByZXBlYXRDb3VudCDph43lpI3mrKHmlbBcclxuICogQHJldHVybnMgIOaWsOeahOWtl+espuS4slxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGVhdChzdHI6IHN0cmluZywgcmVwZWF0Q291bnQ6IG51bWJlcikge1xyXG4gICAgbGV0IGNvdW50ID0gcmVwZWF0Q291bnRcclxuICAgIGlmICghc3RyIHx8IGNvdW50IDw9IDApIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgY29uc3QgcyA9IFtdXHJcbiAgICB3aGlsZSAoY291bnQtLSkge1xyXG4gICAgICAgIHMucHVzaChzdHIpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcy5qb2luKFwiXCIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlrZfnrKbkuLLmibnph4/mnoTlu7rlmajvvIjml6DpnIDkvb/nlKhcIitcIui/m+ihjOWtl+espuS4sueahOaLvOaOpe+8jOebtOaOpeS9v+eUqOatpOWvueixoeeahGFwcGVuZOaWueazleWQju+8jOWGjXRvU3RyaW5n5Y2z5Y+v5b6X5Yiw5ou85aW955qE5a2X56ym5Liy77yJXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQnVpbGRlcjxUPiB7XHJcbiAgICBwcml2YXRlIF9hcnI6IFRbXSA9IFtdXHJcbiAgICAvKipcclxuICAgICAqIOi/veWKoOmhuVxyXG4gICAgICogQHBhcmFtIGl0ZW1zIOW+hei/veWKoOeahOmhuVxyXG4gICAgICogQHJldHVybnMgdGhpc1xyXG4gICAgICovXHJcbiAgICBhcHBlbmQoLi4uaXRlbXM6IFRbXSkge1xyXG4gICAgICAgIHRoaXMuX2Fyci5wdXNoKC4uLml0ZW1zKVxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOi/lOWbnuW3suWQiOW5tueahOaJgOaciemhueeahOWtl+espuS4slxyXG4gICAgICovXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXJyLmpvaW4oXCJcIilcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5riF56m65b2T5YmN55qE5p6E5bu65Zmo5Lit55qE5omA5pyJ6aG5XHJcbiAgICAgKiBAcmV0dXJucyB0aGlzXHJcbiAgICAgKi9cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMuX2FyciA9IFtdXHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6L+U5Zue5p6E5bu65Zmo5Lit5omA5pyJ6aG555qE5a2X56ym5Liy5oC755qE5a2X56ym6ZW/5bqmXHJcbiAgICAgKi9cclxuICAgIGxlbmd0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpLmxlbmd0aFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYnVpbGRlciA9IEJ1aWxkZXJcclxuXHJcbi8qKlxyXG4gKiDkvb/nlKjmqKHmnb/moLzlvI/ljJblrZfnrKbkuLJcclxuICogQHBhcmFtIHN0ciDmqKHmnb/vvIzlpoLvvJpcIuS7iuWkqeaYr+aYn+acn3swfe+8jOW3suaIkOS6pHsxfeWNle+8gVwiXHJcbiAqIEBwYXJhbSBhcmdzIOaooeadv+S4reeahOWPguaVsFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdChzdHI6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcclxuICAgIGlmICghc3RyIHx8ICFhcmdzLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBzdHJcclxuICAgIH1cclxuICAgIGxldCByZXN1bHQgPSBzdHJcclxuICAgIGZvciAobGV0IHRva2VuID0gMDsgdG9rZW4gPCBhcmdzLmxlbmd0aDsgdG9rZW4rKykge1xyXG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcXFxce1wiICsgdG9rZW4gKyBcIlxcXFx9XCIsIFwiZ2lcIiksIGFyZ3NbdG9rZW5dKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG59XHJcblxyXG4vKipcclxuICog5Yig6Zmk56m655m96KGM77yI56m655m96KGM5piv5oyH77ya5q2k6KGM5Li656m655m95LiU5pyr5bC+5Li6IFxcciDmiJYgXFxu77yJXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQmxhbmtMaW5lcyhzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqW1xcclxcbl0vZ20sIFwiXCIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlsIbmlofmnKzkuK3nmoTlrZfnrKbkuLLlvaLlvI/miJbmjaLooYznrKblvaLlvI/nmoQgXCJcXHJcXG5cIiDlkowgXCJcXG5cIiDnu5/kuIDmm7/mjaLmiJAgPGJyLz5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlTmV3bGluZVRvQnIoc3RyOiBzdHJpbmcpIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFxcXFxyXFxcXG4pfChcXHJcXG4pL2dpLCBcIjxici8+XCIpLnJlcGxhY2UoLyhcXFxcbil8KFxcbikvZ2ksIFwiPGJyLz5cIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOiOt+WPluWtl+espuS4suS4reeahOS4reaWh+Wtl+esplxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENoaW5lc2VXb3JkKHN0cjogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICBjb25zdCBtYXRjaCA9IHN0ci5tYXRjaChuZXcgUmVnRXhwKGNoaW5lc2VDaGFyLCBcImdcIikpXHJcbiAgICBpZiAoIW1hdGNoIHx8ICFtYXRjaC5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1hdGNoLmpvaW4oXCJcIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOaMieWIhumalOespuWQiOW5tuWtl+espuS4slxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVTdHIoc2VwYXJhdG9yOiBzdHJpbmcsIC4uLnN1YlN0cnM6IHN0cmluZ1tdKSB7XHJcbiAgICBpZiAoIXN1YlN0cnMgfHwgIXN1YlN0cnMubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIHJldHVybiBzdWJTdHJzLmZpbHRlcigoaykgPT4gISFrKS5qb2luKHNlcGFyYXRvcilcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreWtl+espuS4suaYr+WQpuihqOekuuS4gOS4qumbhuWQiOS4reeahOafkOS4gOmhueaIluafkOS4gOS4quiMg+WbtO+8iOazqO+8muS4gOS4quiMg+WbtOeUqOiLseaWh+WGkuWPt+WIhumalO+8jOWkmuS4quiMg+WbtOeUqOiLseaWh+mAl+WPt+WIhumalOOAguiHquWKqOWFvOWuueWFqOWNiuinkuWIhumalOespuWSjOWkmuS9meeahOepuuagvO+8ie+8jOWmgu+8mlxyXG4gKiDjgJAx44CR6KGo56S656ysMemhuVxyXG4gKiDjgJAy44CR6KGo56S656ysMumhuVxyXG4gKiDjgJAyOjXjgJHooajnpLrnrKwy6aG55Yiw56ysNemhuVxyXG4gKiDjgJAtMeOAkeihqOekuuacgOWQjuS4gOmhuVxyXG4gKiDjgJAtMuOAkeihqOekuuWAkuaVsOesrDLpoblcclxuICog44CQLTU6LTLjgJHooajnpLrlgJLmlbDnrKw16aG55Yiw5YCS5pWw56ysMumhuVxyXG4gKiDjgJAyLDQ6NywtNTotMuOAkeihqOekuuesrDLpobnlkoznrKw05YiwN+mhueWSjOWAkuaVsOesrDXpobnoh7PlgJLmlbDnrKwy6aG5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNSYW5nZVRleHQoc3RyOiBzdHJpbmcsIGlzT25seVN1cHBvcnRPbmVSYW5nZT86IGJvb2xlYW4pIHtcclxuICAgIGNvbnN0IGkxOG4gPSBnZXRYSnNLaXRJMThuSW5zdGFuY2UoKVxyXG4gICAgY29uc3QgbXNnID0gbmV3IE1ldGhvZFJlc3VsdCgpXHJcbiAgICBzdHIgPSBzdHI/LnJlcGxhY2UoL++8jC9nLCBcIixcIikucmVwbGFjZSgv77yaL2csIFwiOlwiKS5yZXBsYWNlKC9cXHMvZywgXCJcIilcclxuICAgIHN0ciA9IHRyaW1TdHJpbmcoc3RyLCBcIixcIilcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgbXNnLmlzU3VjY2VzcyA9IGZhbHNlXHJcbiAgICAgICAgbXNnLm1lc3NhZ2UgPSBpMThuLnQoWEpzS2l0VHJhbnNsYXRpb25LZXlOYW1lRW51bS7lv4Xpobvmj5DkvpvkuIDkuKrmnInmlYjnmoTojIPlm7QpXHJcbiAgICAgICAgcmV0dXJuIG1zZ1xyXG4gICAgfVxyXG4gICAgY29uc3QgaXRlbVJlZyA9IC9eLT9cXGQrJC9cclxuICAgIGNvbnN0IGl0ZW1zID0gc3RyLnNwbGl0KFwiLFwiKVxyXG5cclxuICAgIGlmIChpc09ubHlTdXBwb3J0T25lUmFuZ2UgJiYgaXRlbXMubGVuZ3RoID49IDIpIHtcclxuICAgICAgICBtc2cuaXNTdWNjZXNzID0gZmFsc2VcclxuICAgICAgICBtc2cubWVzc2FnZSA9IGkxOG4udChYSnNLaXRUcmFuc2xhdGlvbktleU5hbWVFbnVtLuivt+azqOaEj+W9k+WJjeWKn+iDveWPquaUr+aMgeS4gOS4qui/nue7reeahOiMg+WbtOivt+WIoOmZpOiMg+WbtOS4reeahOmAl+WPtylcclxuICAgICAgICByZXR1cm4gbXNnXHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XHJcbiAgICAgICAgY29uc3QgYXJyID0gaXRlbS5zcGxpdChcIjpcIilcclxuICAgICAgICBpZiAoIShhcnIubGVuZ3RoID09IDEgfHwgYXJyLmxlbmd0aCA9PSAyKSkge1xyXG4gICAgICAgICAgICBtc2cuaXNTdWNjZXNzID0gZmFsc2VcclxuICAgICAgICAgICAgbXNnLm1lc3NhZ2UgPSBpMThuLnQoWEpzS2l0VHJhbnNsYXRpb25LZXlOYW1lRW51bS7moLzlvI/kuI3mraPnoa4pXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaXRlbVJlZy50ZXN0KGFyclswXSkgfHwgIXRvSW50KGFyclswXSkpIHtcclxuICAgICAgICAgICAgbXNnLmlzU3VjY2VzcyA9IGZhbHNlXHJcbiAgICAgICAgICAgIG1zZy5tZXNzYWdlID0gaTE4bi50KFhKc0tpdFRyYW5zbGF0aW9uS2V5TmFtZUVudW0u5qC85byP5LiN5q2j56Gu5b+F6aG75Li65pW05pWw5LiU5LiN6IO95Li6MClcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyci5sZW5ndGggPT0gMiAmJiAoIWl0ZW1SZWcudGVzdChhcnJbMV0pIHx8ICF0b0ludChhcnJbMV0pKSkge1xyXG4gICAgICAgICAgICBtc2cuaXNTdWNjZXNzID0gZmFsc2VcclxuICAgICAgICAgICAgbXNnLm1lc3NhZ2UgPSBpMThuLnQoWEpzS2l0VHJhbnNsYXRpb25LZXlOYW1lRW51bS7moLzlvI/kuI3mraPnoa7lv4XpobvkuLrmlbTmlbDkuJTkuI3og73kuLowKVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXJyLmxlbmd0aCA9PSAyICYmIHRvSW50KGFyclswXSkgPCAwICYmIHRvSW50KGFyclsxXSkgPiAwKSB7XHJcbiAgICAgICAgICAgIG1zZy5pc1N1Y2Nlc3MgPSBmYWxzZVxyXG4gICAgICAgICAgICBtc2cubWVzc2FnZSA9IGkxOG4udChYSnNLaXRUcmFuc2xhdGlvbktleU5hbWVFbnVtLuW3puS+p+aVsOWtl+S4uui0n+aVsOaXtuWPs+S+p+aVsOWtl+W/hemhu+S5n+WQjOaXtuS4uui0n+aVsClcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyci5sZW5ndGggPT0gMiAmJiB0b0ludChhcnJbMF0pID4gMCAmJiB0b0ludChhcnJbMV0pIDwgMCkge1xyXG4gICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXJyLmxlbmd0aCA9PSAyICYmIHRvSW50KGFyclswXSkgPiB0b0ludChhcnJbMV0pKSB7XHJcbiAgICAgICAgICAgIG1zZy5pc1N1Y2Nlc3MgPSBmYWxzZVxyXG4gICAgICAgICAgICBtc2cubWVzc2FnZSA9IGkxOG4udChYSnNLaXRUcmFuc2xhdGlvbktleU5hbWVFbnVtLuagvOW8j+S4jeato+ehruW3puS+p+aVsOWtl+W/hemhu+Wwj+S6juetieS6juWPs+S+p+aVsOWtlylcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbXNnXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDojrflj5bojIPlm7TmlofmnKznmoTkvb/nlKjor7TmmI5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRIb3dUb1VzZVJhbmdlVGV4dCh0eXBlPzogUmFuZ2VUZXh0VHlwZUVudW0pIHtcclxuICAgIGNvbnN0IGkxOG4gPSBnZXRYSnNLaXRJMThuSW5zdGFuY2UoKVxyXG4gICAgbGV0IHR4dCA9IFwiXCJcclxuXHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlIFJhbmdlVGV4dFR5cGVFbnVtLumhtemdouiMg+WbtDpcclxuICAgICAgICAgICAgdHh0ID0gaTE4bi50KFhKc0tpdFRyYW5zbGF0aW9uS2V5TmFtZUVudW0u6aG16Z2i6IyD5Zu05paH5pys5o+Q56S66K+tKVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgUmFuZ2VUZXh0VHlwZUVudW0u5bel5L2c6KGo6IyD5Zu0OlxyXG4gICAgICAgICAgICB0eHQgPSBpMThuLnQoWEpzS2l0VHJhbnNsYXRpb25LZXlOYW1lRW51bS7lt6XkvZzooajojIPlm7TmlofmnKzmj5DnpLror60pXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSBSYW5nZVRleHRUeXBlRW51bS7lrZfnrKbojIPlm7Q6XHJcbiAgICAgICAgICAgIHR4dCA9IGkxOG4udChYSnNLaXRUcmFuc2xhdGlvbktleU5hbWVFbnVtLuWtl+espuiMg+WbtOaWh+acrOaPkOekuuivrSlcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlIFJhbmdlVGV4dFR5cGVFbnVtLuaWh+acrOS9jee9ruiMg+WbtDpcclxuICAgICAgICAgICAgdHh0ID0gaTE4bi50KFhKc0tpdFRyYW5zbGF0aW9uS2V5TmFtZUVudW0u5paH5pys5L2N572u6IyD5Zu05paH5pys5o+Q56S66K+tKVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHR4dCA9IGkxOG4udChYSnNLaXRUcmFuc2xhdGlvbktleU5hbWVFbnVtLum7mOiupOiMg+WbtOaWh+acrOaPkOekuuivrSlcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHh0XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKDpmaTlrZfnrKbkuLLliY3pnaLnmoTkuIvliJLnur9cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVTdGFydExpbmUoc3RyOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBsVHJpbVN0cmluZyhzdHIsIFwiX1wiKVxyXG59XHJcblxyXG4vKipcclxuICog5Yig6Zmk5omA5pyJ56m655m95a2X56ymXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlV2hpdGVTcGFjZShzdHI6IHN0cmluZykge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlQWxsKC9cXHMrL2csIFwiXCIpXHJcbn1cclxuIl19