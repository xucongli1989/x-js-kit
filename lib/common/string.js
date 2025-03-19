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
    case "页面":
      txt = i18n.t(_data.XJsKitTranslationKeyNameEnum.页面范围文本提示语);
      break;

    case "工作表":
      txt = i18n.t(_data.XJsKitTranslationKeyNameEnum.工作表范围文本提示语);
      break;

    case "字符":
      txt = i18n.t(_data.XJsKitTranslationKeyNameEnum.字符范围文本提示语);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vc3RyaW5nLnRzIl0sIm5hbWVzIjpbInNwbGl0U3RyaW5nIiwic3RyIiwic3RlcENoYXJDb3VudCIsInN0ckxlbiIsImxlbmd0aCIsInJlc3VsdCIsInN0YXJ0SW5kZXgiLCJwdXNoIiwic3Vic3RyIiwiZWxsaXBzaXMiLCJsZW4iLCJlbGxpcHNpc0NoYXJzIiwic3Vic3RyaW5nIiwiZ2V0TnVtYmVyIiwibXQiLCJtYXRjaCIsInBhcnROdW1iZXIiLCJwYXJzZUZsb2F0IiwidHJpbSIsInJlcGxhY2UiLCJsVHJpbSIsInJUcmltIiwibFRyaW1TdHJpbmciLCJzdHJUb1JlbW92ZSIsImlzSWdub3JlQ2FzZSIsIlJlZ0V4cCIsInJUcmltU3RyaW5nIiwidHJpbVN0cmluZyIsInRyaW1IVE1MIiwiaHRtbCIsImh0bWxMZWZ0UmlnaHRCbGFuayIsInRlc3QiLCJlcXVhbHNJZ25vcmVDYXNlIiwiYSIsImIiLCJ0b1VwcGVyQ2FzZSIsImVxdWFsc0lnbm9yZUNhc2VBbmRUcmltIiwiY29udGFpbnMiLCJzb3VyY2UiLCJzZWFyY2giLCJzb3VyY2VTdHIiLCJpbmNsdWRlcyIsImVzY2FwZUh0bWwiLCJTdHJpbmciLCJzIiwiaHRtbEVudGl0eU1hcCIsInJlcGVhdCIsInJlcGVhdENvdW50IiwiY291bnQiLCJqb2luIiwiQnVpbGRlciIsIl9hcnIiLCJ0b1N0cmluZyIsImJ1aWxkZXIiLCJmb3JtYXQiLCJ0b2tlbiIsInJlbW92ZUJsYW5rTGluZXMiLCJyZXBsYWNlTmV3bGluZVRvQnIiLCJnZXRDaGluZXNlV29yZCIsImNoaW5lc2VDaGFyIiwiY29tYmluZVN0ciIsInNlcGFyYXRvciIsInN1YlN0cnMiLCJmaWx0ZXIiLCJrIiwiaXNSYW5nZVRleHQiLCJpc09ubHlTdXBwb3J0T25lUmFuZ2UiLCJpMThuIiwibXNnIiwiTWV0aG9kUmVzdWx0IiwiaXNTdWNjZXNzIiwibWVzc2FnZSIsInQiLCJYSnNLaXRUcmFuc2xhdGlvbktleU5hbWVFbnVtIiwi5b+F6aG75o+Q5L6b5LiA5Liq5pyJ5pWI55qE6IyD5Zu0IiwiaXRlbVJlZyIsIml0ZW1zIiwic3BsaXQiLCLor7fms6jmhI/lvZPliY3lip/og73lj6rmlK/mjIHkuIDkuKrov57nu63nmoTojIPlm7Tor7fliKDpmaTojIPlm7TkuK3nmoTpgJflj7ciLCJpdGVtIiwiYXJyIiwi5qC85byP5LiN5q2j56GuIiwi5qC85byP5LiN5q2j56Gu5b+F6aG75Li65pW05pWw5LiU5LiN6IO95Li6MCIsIuW3puS+p+aVsOWtl+S4uui0n+aVsOaXtuWPs+S+p+aVsOWtl+W/hemhu+S5n+WQjOaXtuS4uui0n+aVsCIsIuagvOW8j+S4jeato+ehruW3puS+p+aVsOWtl+W/hemhu+Wwj+S6juetieS6juWPs+S+p+aVsOWtlyIsImdldEhvd1RvVXNlUmFuZ2VUZXh0IiwidHlwZSIsInR4dCIsIumhtemdouiMg+WbtOaWh+acrOaPkOekuuivrSIsIuW3peS9nOihqOiMg+WbtOaWh+acrOaPkOekuuivrSIsIuWtl+espuiMg+WbtOaWh+acrOaPkOekuuivrSIsIum7mOiupOiMg+WbtOaWh+acrOaPkOekuuivrSIsInJlbW92ZVN0YXJ0TGluZSIsInJlbW92ZVdoaXRlU3BhY2UiLCJyZXBsYWNlQWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDTyxTQUFTQSxXQUFULENBQXFCQyxHQUFyQixFQUFrQ0MsYUFBbEMsRUFBbUU7QUFDdEUsTUFBSSxDQUFDRCxHQUFELElBQVFDLGFBQWEsSUFBSSxDQUE3QixFQUFnQztBQUM1QixXQUFPLEVBQVA7QUFDSDs7QUFDRCxNQUFNQyxNQUFNLEdBQUdGLEdBQUcsQ0FBQ0csTUFBbkI7O0FBQ0EsTUFBSUQsTUFBTSxJQUFJRCxhQUFkLEVBQTZCO0FBQ3pCLFdBQU8sQ0FBQ0QsR0FBRCxDQUFQO0FBQ0g7O0FB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bnQiOlsiaW1wb3J0IHsgcGFydE51bWJlciwgaHRtbExlZnRSaWdodEJsYW5rLCBjaGluZXNlQ2hhciB9IGZyb20gXCIuLi9jb25zdGFudC9yZWdleFwiXHJcbmltcG9ydCB7IGVzY2FwZVJlZyB9IGZyb20gXCIuL3JlZ2V4cFwiXHJcbmltcG9ydCB7IGh0bWxFbnRpdHlNYXAgfSBmcm9tIFwiLi4vY29uc3RhbnQvbWFwXCJcclxuaW1wb3J0IHsgTWV0aG9kUmVzdWx0IH0gZnJvbSBcIi4uL2VudGl0eS9tZXRob2QtcmVzdWx0XCJcclxuaW1wb3J0IHsgdG9JbnQgfSBmcm9tIFwiLi9jb252ZXJ0XCJcclxuaW1wb3J0IHsgZ2V0WEpzS2l0STE4bkluc3RhbmNlIH0gZnJvbSBcIi4uL2kxOG5cIlxyXG5pbXBvcnQgeyBYSnNLaXRUcmFuc2xhdGlvbktleU5hbWVFbnVtIH0gZnJvbSBcIi4uL2kxOG4vZGF0YVwiXHJcblxyXG4vKipcclxuICog5bCG5a2X56ym5Liy5oyJ5LiA5a6a5a2X56ym5pWw5ouG5YiG5oiQ5a2X56ym5Liy5pWw57uEXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3BsaXRTdHJpbmcoc3RyOiBzdHJpbmcsIHN0ZXBDaGFyQ291bnQ6IG51bWJlcik6IHN0cmluZ1tdIHtcclxuICAgIGlmICghc3RyIHx8IHN0ZXBDaGFyQ291bnQgPD0gMCkge1xyXG4gICAgICAgIHJldHVybiBbXVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc3RyTGVuID0gc3RyLmxlbmd0aFxyXG4gICAgaWYgKHN0ckxlbiA8PSBzdGVwQ2hhckNvdW50KSB7XHJcbiAgICAgICAgcmV0dXJuIFtzdHJdXHJcbiAgICB9XHJcbiAgICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW11cclxuICAgIGxldCBzdGFydEluZGV4ID0gMFxyXG4gICAgd2hpbGUgKHN0YXJ0SW5kZXggPCBzdHJMZW4pIHtcclxuICAgICAgICByZXN1bHQucHVzaChzdHIuc3Vic3RyKHN0YXJ0SW5kZXgsIHN0ZXBDaGFyQ291bnQpKVxyXG4gICAgICAgIHN0YXJ0SW5kZXggKz0gc3RlcENoYXJDb3VudFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG59XHJcblxyXG4vKipcclxuICog5oiq5Y+W5a2X56ym5Liy5bm25Lul55yB55Wl56ym5Y+35pi+56S65a2X56ym5LiyXHJcbiAqIEBwYXJhbSBzdHIg5Y6f5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBsZW4g6KaB5L+d55WZ55qE5a2X56ym6ZW/5bqmXHJcbiAqIEBwYXJhbSBlbGxpcHNpc0NoYXJzIOiiq+aIquaWreeahOWtl+espuaYvuekuueahOespuWPt1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGVsbGlwc2lzKHN0cjogc3RyaW5nLCBsZW46IG51bWJlciwgZWxsaXBzaXNDaGFycyA9IFwiLi4uXCIpOiBzdHJpbmcge1xyXG4gICAgaWYgKCFzdHIgfHwgbGVuIDw9IDApIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgaWYgKHN0ci5sZW5ndGggPD0gbGVuKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0clxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5zdWJzdHJpbmcoMCwgbGVuKSArIGVsbGlwc2lzQ2hhcnNcclxufVxyXG5cclxuLyoqXHJcbiAqIOS7juWtl+espuS4suS4reaPkOWPluaVsOWtl++8iOWPr+W4puWwj+aVsOeCue+8ieOAguWmgu+8mlwiYWJjMTIzLjAxY2RlXCItPjEyMy4wMVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE51bWJlcihzdHI6IHN0cmluZyk6IG51bWJlciB8IG51bGwge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgY29uc3QgbXQgPSBzdHIubWF0Y2gocGFydE51bWJlcilcclxuICAgIGlmICghbXQgfHwgIW10Lmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFyc2VGbG9hdChtdFswXSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOWOu+W3puWPs+epuuagvFxyXG4gKiBAcGFyYW0gIHN0ciDlvoXlpITnkIblrZfnrKbkuLJcclxuICogQHJldHVybnMgIOWkhOeQhuWQjueahOWtl+espuS4slxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyaW0oc3RyOiBzdHJpbmcpIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgXCJcIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOWOu+W3puepuuagvFxyXG4gKiBAcGFyYW0gIHN0ciDlvoXlpITnkIblrZfnrKbkuLJcclxuICogQHJldHVybnMgIOWkhOeQhuWQjueahOWtl+espuS4slxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxUcmltKHN0cjogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrLywgXCJcIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOWOu+WPs+epuuagvFxyXG4gKiBAcGFyYW0gIHN0ciDlvoXlpITnkIblrZfnrKbkuLJcclxuICogQHJldHVybnMgIOWkhOeQhuWQjueahOWAvFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJUcmltKHN0cjogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xccyskLywgXCJcIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOWOu+aOieW3pui+ueeahOaMh+WumuWtl+espuS4slxyXG4gKiBAcGFyYW0gc3RyIOW+heWkhOeQhueahOWtl+espuS4slxyXG4gKiBAcGFyYW0gc3RyVG9SZW1vdmUg6ZyA6KaB56e76Zmk55qE5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBpc0lnbm9yZUNhc2Ug5piv5ZCm5b+955Wl5aSn5bCP5YaZXHJcbiAqIEByZXR1cm5zIOWkhOeQhue7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxUcmltU3RyaW5nKHN0cjogc3RyaW5nLCBzdHJUb1JlbW92ZTogc3RyaW5nLCBpc0lnbm9yZUNhc2U6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgaWYgKCFzdHJUb1JlbW92ZSkge1xyXG4gICAgICAgIHJldHVybiBzdHJcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKGBeKCR7ZXNjYXBlUmVnKHN0clRvUmVtb3ZlKX0pKmAsIGlzSWdub3JlQ2FzZSA/IFwiZ2lcIiA6IFwiZ1wiKSwgXCJcIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOWOu+aOieWPs+i+ueeahOaMh+WumuWtl+espuS4slxyXG4gKiBAcGFyYW0gc3RyIOW+heWkhOeQhueahOWtl+espuS4slxyXG4gKiBAcGFyYW0gc3RyVG9SZW1vdmUg6ZyA6KaB56e76Zmk55qE5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBpc0lnbm9yZUNhc2Ug5piv5ZCm5b+955Wl5aSn5bCP5YaZXHJcbiAqIEByZXR1cm5zIOWkhOeQhue7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJUcmltU3RyaW5nKHN0cjogc3RyaW5nLCBzdHJUb1JlbW92ZTogc3RyaW5nLCBpc0lnbm9yZUNhc2U6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgaWYgKCFzdHJUb1JlbW92ZSkge1xyXG4gICAgICAgIHJldHVybiBzdHJcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKGAoJHtlc2NhcGVSZWcoc3RyVG9SZW1vdmUpfSkqJGAsIGlzSWdub3JlQ2FzZSA/IFwiZ2lcIiA6IFwiZ1wiKSwgXCJcIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOWOu+W3puWPs+aMh+WumueahOWtl+espuS4slxyXG4gKiBAcGFyYW0gc3RyIOW+heWkhOeQhueahOWtl+espuS4slxyXG4gKiBAcGFyYW0gc3RyVG9SZW1vdmUg6ZyA6KaB56e76Zmk55qE5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBpc0lnbm9yZUNhc2Ug5piv5ZCm5b+955Wl5aSn5bCP5YaZXHJcbiAqIEByZXR1cm5zIOWkhOeQhue7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyaW1TdHJpbmcoc3RyOiBzdHJpbmcsIHN0clRvUmVtb3ZlOiBzdHJpbmcsIGlzSWdub3JlQ2FzZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICBpZiAoIXN0clRvUmVtb3ZlKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0clxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoYCheKCR7ZXNjYXBlUmVnKHN0clRvUmVtb3ZlKX0pKil8KCgke2VzY2FwZVJlZyhzdHJUb1JlbW92ZSl9KSokKWAsIGlzSWdub3JlQ2FzZSA/IFwiZ2lcIiA6IFwiZ1wiKSwgXCJcIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOS7jmh0bWzlrZfnrKbkuLLkuK3np7vpmaTlt6blj7Pnqbrnmb3ljaDkvY3nrKZcclxuICogQHBhcmFtIGh0bWwg5b6F5aSE55CG55qE5a2X56ym5LiyXHJcbiAqIEByZXR1cm5zIOWkhOeQhue7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyaW1IVE1MKGh0bWw6IHN0cmluZykge1xyXG4gICAgbGV0IHN0ciA9IGh0bWxcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIHdoaWxlIChodG1sTGVmdFJpZ2h0QmxhbmsudGVzdChzdHIpKSB7XHJcbiAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoaHRtbExlZnRSaWdodEJsYW5rLCBcIlwiKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0clxyXG59XHJcblxyXG4vKipcclxuICog5Yik5pat5Lik5Liq5a2X56ym5Liy5piv5ZCm55u4562J77yI5b+955Wl5aSn5bCP5YaZ77yJXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxzSWdub3JlQ2FzZShhOiBzdHJpbmcsIGI6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIChhIHx8IFwiXCIpLnRvVXBwZXJDYXNlKCkgPT0gKGIgfHwgXCJcIikudG9VcHBlckNhc2UoKVxyXG59XHJcblxyXG4vKipcclxuICog5Yik5pat5Lik5Liq5a2X56ym5Liy5piv5ZCm55u4562J77yI5b+955Wl5aSn5bCP5YaZK+WOu+W3puWPs+epuueZve+8iVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFsc0lnbm9yZUNhc2VBbmRUcmltKGE6IHN0cmluZywgYjogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gZXF1YWxzSWdub3JlQ2FzZSh0cmltKGEpLCB0cmltKGIpKVxyXG59XHJcblxyXG4vKipcclxuICog5oyH5a6a5rqQ5a2X56ym5Liyc291cmNl5Lit5piv5ZCm5YyF5ZCrc2VhcmNo5a2X56ym5LiyXHJcbiAqIEBwYXJhbSAgc291cmNlIOa6kOWtl+espuS4slxyXG4gKiBAcGFyYW0gIHNlYXJjaCDopoHmn6Xmib7nmoTlrZfnrKbkuLJcclxuICogQHBhcmFtICBpc0lnbm9yZUNhc2Ug5piv5ZCm5b+955Wl5aSn5bCP5YaZKOm7mOiupOS4umZhbHNlKVxyXG4gKiBAcmV0dXJucyAg57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbnMoc291cmNlOiBzdHJpbmcsIHNlYXJjaDogc3RyaW5nLCBpc0lnbm9yZUNhc2U6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgbGV0IHNvdXJjZVN0ciA9IHNvdXJjZVxyXG4gICAgbGV0IHN0ciA9IHNlYXJjaFxyXG4gICAgaWYgKCFzb3VyY2VTdHIpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGlmIChzdHIgPT09IFwiXCIpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGlmIChpc0lnbm9yZUNhc2UpIHtcclxuICAgICAgICBzb3VyY2VTdHIgPSBzb3VyY2VTdHIudG9VcHBlckNhc2UoKVxyXG4gICAgICAgIHN0ciA9IHN0ci50b1VwcGVyQ2FzZSgpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc291cmNlU3RyLmluY2x1ZGVzKHN0cilcclxufVxyXG5cclxuLyoqXHJcbiAqIOWwhmh0bWzmoIfnrb7ovazmjaLkuLrlrp7kvZPlvaLlvI9cclxuICogQHBhcmFtICBodG1sIOmcgOimgeiiq+abv+aNoueahGh0bWxcclxuICogQHJldHVybnMgIOi9rOaNouWQjueahOWAvFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZUh0bWwoaHRtbDogc3RyaW5nKSB7XHJcbiAgICBpZiAoIWh0bWwpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFN0cmluZyhodG1sKS5yZXBsYWNlKC9bJjw+XCInL10vZywgKHMpID0+IGh0bWxFbnRpdHlNYXBbc10pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gICBzdHIg6KaB6YeN5aSN55qE5a2X56ym5LiyXHJcbiAqIEBwYXJhbSAgIHJlcGVhdENvdW50IOmHjeWkjeasoeaVsFxyXG4gKiBAcmV0dXJucyAg5paw55qE5a2X56ym5LiyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVwZWF0KHN0cjogc3RyaW5nLCByZXBlYXRDb3VudDogbnVtYmVyKSB7XHJcbiAgICBsZXQgY291bnQgPSByZXBlYXRDb3VudFxyXG4gICAgaWYgKCFzdHIgfHwgY291bnQgPD0gMCkge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICBjb25zdCBzID0gW11cclxuICAgIHdoaWxlIChjb3VudC0tKSB7XHJcbiAgICAgICAgcy5wdXNoKHN0cilcclxuICAgIH1cclxuICAgIHJldHVybiBzLmpvaW4oXCJcIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOWtl+espuS4suaJuemHj+aehOW7uuWZqO+8iOaXoOmcgOS9v+eUqFwiK1wi6L+b6KGM5a2X56ym5Liy55qE5ou85o6l77yM55u05o6l5L2/55So5q2k5a+56LGh55qEYXBwZW5k5pa55rOV5ZCO77yM5YaNdG9TdHJpbmfljbPlj6/lvpfliLDmi7zlpb3nmoTlrZfnrKbkuLLvvIlcclxuICovXHJcbmV4cG9ydCBjbGFzcyBCdWlsZGVyPFQ+IHtcclxuICAgIHByaXZhdGUgX2FycjogVFtdID0gW11cclxuICAgIC8qKlxyXG4gICAgICog6L+95Yqg6aG5XHJcbiAgICAgKiBAcGFyYW0gaXRlbXMg5b6F6L+95Yqg55qE6aG5XHJcbiAgICAgKiBAcmV0dXJucyB0aGlzXHJcbiAgICAgKi9cclxuICAgIGFwcGVuZCguLi5pdGVtczogVFtdKSB7XHJcbiAgICAgICAgdGhpcy5fYXJyLnB1c2goLi4uaXRlbXMpXHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6L+U5Zue5bey5ZCI5bm255qE5omA5pyJ6aG555qE5a2X56ym5LiyXHJcbiAgICAgKi9cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcnIuam9pbihcIlwiKVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmuIXnqbrlvZPliY3nmoTmnoTlu7rlmajkuK3nmoTmiYDmnInpoblcclxuICAgICAqIEByZXR1cm5zIHRoaXNcclxuICAgICAqL1xyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5fYXJyID0gW11cclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDov5Tlm57mnoTlu7rlmajkuK3miYDmnInpobnnmoTlrZfnrKbkuLLmgLvnmoTlrZfnrKbplb/luqZcclxuICAgICAqL1xyXG4gICAgbGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCkubGVuZ3RoXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBidWlsZGVyID0gQnVpbGRlclxyXG5cclxuLyoqXHJcbiAqIOS9v+eUqOaooeadv+agvOW8j+WMluWtl+espuS4slxyXG4gKiBAcGFyYW0gc3RyIOaooeadv++8jOWmgu+8mlwi5LuK5aSp5piv5pif5pyfezB977yM5bey5oiQ5LqkezF95Y2V77yBXCJcclxuICogQHBhcmFtIGFyZ3Mg5qih5p2/5Lit55qE5Y+C5pWwXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0KHN0cjogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgaWYgKCFzdHIgfHwgIWFyZ3MubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0clxyXG4gICAgfVxyXG4gICAgbGV0IHJlc3VsdCA9IHN0clxyXG4gICAgZm9yIChsZXQgdG9rZW4gPSAwOyB0b2tlbiA8IGFyZ3MubGVuZ3RoOyB0b2tlbisrKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UobmV3IFJlZ0V4cChcIlxcXFx7XCIgKyB0b2tlbiArIFwiXFxcXH1cIiwgXCJnaVwiKSwgYXJnc1t0b2tlbl0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKDpmaTnqbrnmb3ooYzvvIjnqbrnmb3ooYzmmK/mjIfvvJrmraTooYzkuLrnqbrnmb3kuJTmnKvlsL7kuLogXFxyIOaIliBcXG7vvIlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVCbGFua0xpbmVzKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXlxccypbXFxyXFxuXS9nbSwgXCJcIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOWwhuaWh+acrOS4reeahOWtl+espuS4suW9ouW8j+aIluaNouihjOespuW9ouW8j+eahCBcIlxcclxcblwiIOWSjCBcIlxcblwiIOe7n+S4gOabv+aNouaIkCA8YnIvPlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VOZXdsaW5lVG9CcihzdHI6IHN0cmluZykge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oXFxcXHJcXFxcbil8KFxcclxcbikvZ2ksIFwiPGJyLz5cIikucmVwbGFjZSgvKFxcXFxuKXwoXFxuKS9naSwgXCI8YnIvPlwiKVxyXG59XHJcblxyXG4vKipcclxuICog6I635Y+W5a2X56ym5Liy5Lit55qE5Lit5paH5a2X56ymXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hpbmVzZVdvcmQoc3RyOiBzdHJpbmcpIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIGNvbnN0IG1hdGNoID0gc3RyLm1hdGNoKG5ldyBSZWdFeHAoY2hpbmVzZUNoYXIsIFwiZ1wiKSlcclxuICAgIGlmICghbWF0Y2ggfHwgIW1hdGNoLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWF0Y2guam9pbihcIlwiKVxyXG59XHJcblxyXG4vKipcclxuICog5oyJ5YiG6ZqU56ym5ZCI5bm25a2X56ym5LiyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZVN0cihzZXBhcmF0b3I6IHN0cmluZywgLi4uc3ViU3Ryczogc3RyaW5nW10pIHtcclxuICAgIGlmICghc3ViU3RycyB8fCAhc3ViU3Rycy5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN1YlN0cnMuZmlsdGVyKChrKSA9PiAhIWspLmpvaW4oc2VwYXJhdG9yKVxyXG59XHJcblxyXG4vKipcclxuICog5Yik5pat5a2X56ym5Liy5piv5ZCm6KGo56S65LiA5Liq6ZuG5ZCI5Lit55qE5p+Q5LiA6aG55oiW5p+Q5LiA5Liq6IyD5Zu077yI5rOo77ya5LiA5Liq6IyD5Zu055So6Iux5paH5YaS5Y+35YiG6ZqU77yM5aSa5Liq6IyD5Zu055So6Iux5paH6YCX5Y+35YiG6ZqU44CC6Ieq5Yqo5YW85a655YWo5Y2K6KeS5YiG6ZqU56ym5ZKM5aSa5L2Z55qE56m65qC877yJ77yM5aaC77yaXHJcbiAqIOOAkDHjgJHooajnpLrnrKwx6aG5XHJcbiAqIOOAkDLjgJHooajnpLrnrKwy6aG5XHJcbiAqIOOAkDI6NeOAkeihqOekuuesrDLpobnliLDnrKw16aG5XHJcbiAqIOOAkC0x44CR6KGo56S65pyA5ZCO5LiA6aG5XHJcbiAqIOOAkC0y44CR6KGo56S65YCS5pWw56ysMumhuVxyXG4gKiDjgJAtNTotMuOAkeihqOekuuWAkuaVsOesrDXpobnliLDlgJLmlbDnrKwy6aG5XHJcbiAqIOOAkDIsNDo3LC01Oi0y44CR6KGo56S656ysMumhueWSjOesrDTliLA36aG55ZKM5YCS5pWw56ysNemhueiHs+WAkuaVsOesrDLpoblcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1JhbmdlVGV4dChzdHI6IHN0cmluZywgaXNPbmx5U3VwcG9ydE9uZVJhbmdlPzogYm9vbGVhbikge1xyXG4gICAgY29uc3QgaTE4biA9IGdldFhKc0tpdEkxOG5JbnN0YW5jZSgpXHJcbiAgICBjb25zdCBtc2cgPSBuZXcgTWV0aG9kUmVzdWx0KClcclxuICAgIHN0ciA9IHN0cj8ucmVwbGFjZSgv77yML2csIFwiLFwiKS5yZXBsYWNlKC/vvJovZywgXCI6XCIpLnJlcGxhY2UoL1xccy9nLCBcIlwiKVxyXG4gICAgc3RyID0gdHJpbVN0cmluZyhzdHIsIFwiLFwiKVxyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICBtc2cuaXNTdWNjZXNzID0gZmFsc2VcclxuICAgICAgICBtc2cubWVzc2FnZSA9IGkxOG4udChYSnNLaXRUcmFuc2xhdGlvbktleU5hbWVFbnVtLuW/hemhu+aPkOS+m+S4gOS4quacieaViOeahOiMg+WbtClcclxuICAgICAgICByZXR1cm4gbXNnXHJcbiAgICB9XHJcbiAgICBjb25zdCBpdGVtUmVnID0gL14tP1xcZCskL1xyXG4gICAgY29uc3QgaXRlbXMgPSBzdHIuc3BsaXQoXCIsXCIpXHJcblxyXG4gICAgaWYgKGlzT25seVN1cHBvcnRPbmVSYW5nZSAmJiBpdGVtcy5sZW5ndGggPj0gMikge1xyXG4gICAgICAgIG1zZy5pc1N1Y2Nlc3MgPSBmYWxzZVxyXG4gICAgICAgIG1zZy5tZXNzYWdlID0gaTE4bi50KFhKc0tpdFRyYW5zbGF0aW9uS2V5TmFtZUVudW0u6K+35rOo5oSP5b2T5YmN5Yqf6IO95Y+q5pSv5oyB5LiA5Liq6L+e57ut55qE6IyD5Zu06K+35Yig6Zmk6IyD5Zu05Lit55qE6YCX5Y+3KVxyXG4gICAgICAgIHJldHVybiBtc2dcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcclxuICAgICAgICBjb25zdCBhcnIgPSBpdGVtLnNwbGl0KFwiOlwiKVxyXG4gICAgICAgIGlmICghKGFyci5sZW5ndGggPT0gMSB8fCBhcnIubGVuZ3RoID09IDIpKSB7XHJcbiAgICAgICAgICAgIG1zZy5pc1N1Y2Nlc3MgPSBmYWxzZVxyXG4gICAgICAgICAgICBtc2cubWVzc2FnZSA9IGkxOG4udChYSnNLaXRUcmFuc2xhdGlvbktleU5hbWVFbnVtLuagvOW8j+S4jeato+ehrilcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpdGVtUmVnLnRlc3QoYXJyWzBdKSB8fCAhdG9JbnQoYXJyWzBdKSkge1xyXG4gICAgICAgICAgICBtc2cuaXNTdWNjZXNzID0gZmFsc2VcclxuICAgICAgICAgICAgbXNnLm1lc3NhZ2UgPSBpMThuLnQoWEpzS2l0VHJhbnNsYXRpb25LZXlOYW1lRW51bS7moLzlvI/kuI3mraPnoa7lv4XpobvkuLrmlbTmlbDkuJTkuI3og73kuLowKVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXJyLmxlbmd0aCA9PSAyICYmICghaXRlbVJlZy50ZXN0KGFyclsxXSkgfHwgIXRvSW50KGFyclsxXSkpKSB7XHJcbiAgICAgICAgICAgIG1zZy5pc1N1Y2Nlc3MgPSBmYWxzZVxyXG4gICAgICAgICAgICBtc2cubWVzc2FnZSA9IGkxOG4udChYSnNLaXRUcmFuc2xhdGlvbktleU5hbWVFbnVtLuagvOW8j+S4jeato+ehruW/hemhu+S4uuaVtOaVsOS4lOS4jeiDveS4ujApXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhcnIubGVuZ3RoID09IDIgJiYgdG9JbnQoYXJyWzBdKSA8IDAgJiYgdG9JbnQoYXJyWzFdKSA+IDApIHtcclxuICAgICAgICAgICAgbXNnLmlzU3VjY2VzcyA9IGZhbHNlXHJcbiAgICAgICAgICAgIG1zZy5tZXNzYWdlID0gaTE4bi50KFhKc0tpdFRyYW5zbGF0aW9uS2V5TmFtZUVudW0u5bem5L6n5pWw5a2X5Li66LSf5pWw5pe25Y+z5L6n5pWw5a2X5b+F6aG75Lmf5ZCM5pe25Li66LSf5pWwKVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXJyLmxlbmd0aCA9PSAyICYmIHRvSW50KGFyclswXSkgPiAwICYmIHRvSW50KGFyclsxXSkgPCAwKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhcnIubGVuZ3RoID09IDIgJiYgdG9JbnQoYXJyWzBdKSA+IHRvSW50KGFyclsxXSkpIHtcclxuICAgICAgICAgICAgbXNnLmlzU3VjY2VzcyA9IGZhbHNlXHJcbiAgICAgICAgICAgIG1zZy5tZXNzYWdlID0gaTE4bi50KFhKc0tpdFRyYW5zbGF0aW9uS2V5TmFtZUVudW0u5qC85byP5LiN5q2j56Gu5bem5L6n5pWw5a2X5b+F6aG75bCP5LqO562J5LqO5Y+z5L6n5pWw5a2XKVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBtc2dcclxufVxyXG5cclxuLyoqXHJcbiAqIOiOt+WPluiMg+WbtOaWh+acrOeahOS9v+eUqOivtOaYjlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEhvd1RvVXNlUmFuZ2VUZXh0KHR5cGU/OiBcIumhtemdolwiIHwgXCLlt6XkvZzooahcIiB8IFwi5a2X56ymXCIpIHtcclxuICAgIGNvbnN0IGkxOG4gPSBnZXRYSnNLaXRJMThuSW5zdGFuY2UoKVxyXG4gICAgbGV0IHR4dCA9IFwiXCJcclxuXHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlIFwi6aG16Z2iXCI6XHJcbiAgICAgICAgICAgIHR4dCA9IGkxOG4udChYSnNLaXRUcmFuc2xhdGlvbktleU5hbWVFbnVtLumhtemdouiMg+WbtOaWh+acrOaPkOekuuivrSlcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlIFwi5bel5L2c6KGoXCI6XHJcbiAgICAgICAgICAgIHR4dCA9IGkxOG4udChYSnNLaXRUcmFuc2xhdGlvbktleU5hbWVFbnVtLuW3peS9nOihqOiMg+WbtOaWh+acrOaPkOekuuivrSlcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlIFwi5a2X56ymXCI6XHJcbiAgICAgICAgICAgIHR4dCA9IGkxOG4udChYSnNLaXRUcmFuc2xhdGlvbktleU5hbWVFbnVtLuWtl+espuiMg+WbtOaWh+acrOaPkOekuuivrSlcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICB0eHQgPSBpMThuLnQoWEpzS2l0VHJhbnNsYXRpb25LZXlOYW1lRW51bS7pu5jorqTojIPlm7TmlofmnKzmj5DnpLror60pXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHR4dFxyXG59XHJcblxyXG4vKipcclxuICog5Yig6Zmk5a2X56ym5Liy5YmN6Z2i55qE5LiL5YiS57q/XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlU3RhcnRMaW5lKHN0cjogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gbFRyaW1TdHJpbmcoc3RyLCBcIl9cIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIoOmZpOaJgOacieepuueZveWtl+esplxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVdoaXRlU3BhY2Uoc3RyOiBzdHJpbmcpIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIucmVwbGFjZUFsbCgvXFxzKy9nLCBcIlwiKVxyXG59XHJcbiJdfQ==