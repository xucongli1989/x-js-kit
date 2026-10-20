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
exports.normalizeMathSymbol = normalizeMathSymbol;
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


function isRangeText(str, isOnlySupportOneRange, isAllowZero) {
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

      if (!itemReg.test(arr[0])) {
        msg.isSuccess = false;
        msg.message = i18n.t(_data.XJsKitTranslationKeyNameEnum.范围格式不正确必须为整数参考示例);
        break;
      }

      if (!isAllowZero && !(0, _convert.toInt)(arr[0])) {
        msg.isSuccess = false;
        msg.message = i18n.t(_data.XJsKitTranslationKeyNameEnum.不能为0);
        break;
      }

      if (arr.length == 2) {
        if (!itemReg.test(arr[1])) {
          msg.isSuccess = false;
          msg.message = i18n.t(_data.XJsKitTranslationKeyNameEnum.范围格式不正确必须为整数参考示例);
          break;
        }

        if (!isAllowZero && !(0, _convert.toInt)(arr[1])) {
          msg.isSuccess = false;
          msg.message = i18n.t(_data.XJsKitTranslationKeyNameEnum.不能为0);
          break;
        }
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

    case _enums.RangeTextTypeEnum.行范围:
      txt = i18n.t(_data.XJsKitTranslationKeyNameEnum.行范围提示语);
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
/**
 * 将字符串中的数学表达式 unicode 符号替换为基本的运算符
 */


function normalizeMathSymbol(str) {
  if (!str) {
    return "";
  }

  return str.replace(/−/g, "-").replace(/[×∗]/g, "*").replace(/[÷∕]/g, "/").replace(/（/g, "(").replace(/）/g, ")").replace(/\s+/g, " ");
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vc3RyaW5nLnRzIl0sIm5hbWVzIjpbInNwbGl0U3RyaW5nIiwic3RyIiwic3RlcENoYXJDb3VudCIsInN0ckxlbiIsImxlbmd0aCIsInJlc3VsdCIsInN0YXJ0SW5kZXgiLCJwdXNoIiwic3Vic3RyIiwiZWxsaXBzaXMiLCJsZW4iLCJlbGxpcHNpc0NoYXJzIiwic3Vic3RyaW5nIiwiZ2V0TnVtYmVyIiwibXQiLCJtYXRjaCIsInBhcnROdW1iZXIiLCJwYXJzZUZsb2F0IiwidHJpbSIsInJlcGxhY2UiLCJsVHJpbSIsInJUcmltIiwibFRyaW1TdHJpbmciLCJzdHJUb1JlbW92ZSIsImlzSWdub3JlQ2FzZSIsIlJlZ0V4cCIsInJUcmltU3RyaW5nIiwidHJpbVN0cmluZyIsInRyaW1IVE1MIiwiaHRtbCIsImh0bWxMZWZ0UmlnaHRCbGFuayIsInRlc3QiLCJlcXVhbHNJZ25vcmVDYXNlIiwiYSIsImIiLCJ0b1VwcGVyQ2FzZSIsImVxdWFsc0lnbm9yZUNhc2VBbmRUcmltIiwiY29udGFpbnMiLCJzb3VyY2UiLCJzZWFyY2giLCJzb3VyY2VTdHIiLCJpbmNsdWRlcyIsImVzY2FwZUh0bWwiLCJTdHJpbmciLCJzIiwiaHRtbEVudGl0eU1hcCIsInJlcGVhdCIsInJlcGVhdENvdW50IiwiY291bnQiLCJqb2luIiwiQnVpbGRlciIsIl9hcnIiLCJ0b1N0cmluZyIsImJ1aWxkZXIiLCJmb3JtYXQiLCJ0b2tlbiIsInJlbW92ZUJsYW5rTGluZXMiLCJyZXBsYWNlTmV3bGluZVRvQnIiLCJnZXRDaGluZXNlV29yZCIsImNoaW5lc2VDaGFyIiwiY29tYmluZVN0ciIsInNlcGFyYXRvciIsInN1YlN0cnMiLCJmaWx0ZXIiLCJrIiwiaXNSYW5nZVRleHQiLCJpc09ubHlTdXBwb3J0T25lUmFuZ2UiLCJpc0FsbG93WmVybyIsImkxOG4iLCJtc2ciLCJNZXRob2RSZXN1bHQiLCJpc1N1Y2Nlc3MiLCJtZXNzYWdlIiwidCIsIlhKc0tpdFRyYW5zbGF0aW9uS2V5TmFtZUVudW0iLCLlv4Xpobvmj5DkvpvkuIDkuKrmnInmlYjnmoTojIPlm7QiLCJpdGVtUmVnIiwiaXRlbXMiLCJzcGxpdCIsIuivt+azqOaEj+W9k+WJjeWKn+iDveWPquaUr+aMgeS4gOS4qui/nue7reeahOiMg+WbtOivt+WIoOmZpOiMg+WbtOS4reeahOmAl+WPtyIsIml0ZW0iLCJhcnIiLCLmoLzlvI/kuI3mraPnoa4iLCLojIPlm7TmoLzlvI/kuI3mraPnoa7lv4XpobvkuLrmlbTmlbDlj4LogIPnpLrkvosiLCLkuI3og73kuLowIiwi5bem5L6n5pWw5a2X5Li66LSf5pWw5pe25Y+z5L6n5pWw5a2X5b+F6aG75Lmf5ZCM5pe25Li66LSf5pWwIiwi5qC85byP5LiN5q2j56Gu5bem5L6n5pWw5a2X5b+F6aG75bCP5LqO562J5LqO5Y+z5L6n5pWw5a2XIiwiZ2V0SG93VG9Vc2VSYW5nZVRleHQiLCJ0eXBlIiwidHh0IiwiUmFuZ2VUZXh0VHlwZUVudW0iLCLpobXpnaLojIPlm7QiLCLpobXpnaLojIPlm7TmlofmnKzmj5DnpLror60iLCLlt6XkvZzooajojIPlm7QiLCLlt6XkvZzooajojIPlm7TmlofmnKzmj5DnpLror60iLCLlrZfnrKbojIPlm7QiLCLlrZfnrKbojIPlm7TmlofmnKzmj5DnpLror60iLCLmlofmnKzkvY3nva7ojIPlm7QiLCLmlofmnKzkvY3nva7ojIPlm7TmlofmnKzmj5DnpLror60iLCLooYzojIPlm7QiLCLooYzojIPlm7Tmj5DnpLror60iLCLpu5jorqTojIPlm7TmlofmnKzmj5DnpLror60iLCJyZW1vdmVTdGFydExpbmUiLCJyZW1vdmVXaGl0ZVNwYWNlIiwicmVwbGFjZUFsbCIsIm5vcm1hbGl6ZU1hdGhTeW1ib2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDTyxTQUFT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QUFZLElBQVosRUFBa0IsR0FBbEIsRUFBdUJBLE9BQXZCLENBQStCLE9BQS9CLEVBQXdDLEdBQXhDLEVBQTZDQSxPQUE3QyxDQUFxRCxPQUFyRCxFQUE4RCxHQUE5RCxFQUFtRUEsT0FBbkUsQ0FBMkUsSUFBM0UsRUFBaUYsR0FBakYsRUFBc0ZBLE9BQXRGLENBQThGLElBQTlGLEVBQW9HLEdBQXBHLEVBQXlHQSxPQUF6RyxDQUFpSCxNQUFqSCxFQUF5SCxHQUF6SCxDQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwYXJ0TnVtYmVyLCBodG1sTGVmdFJpZ2h0QmxhbmssIGNoaW5lc2VDaGFyIH0gZnJvbSBcIi4uL2NvbnN0YW50L3JlZ2V4XCJcclxuaW1wb3J0IHsgZXNjYXBlUmVnIH0gZnJvbSBcIi4vcmVnZXhwXCJcclxuaW1wb3J0IHsgaHRtbEVudGl0eU1hcCB9IGZyb20gXCIuLi9jb25zdGFudC9tYXBcIlxyXG5pbXBvcnQgeyBNZXRob2RSZXN1bHQgfSBmcm9tIFwiLi4vZW50aXR5L21ldGhvZC1yZXN1bHRcIlxyXG5pbXBvcnQgeyB0b0ludCB9IGZyb20gXCIuL2NvbnZlcnRcIlxyXG5pbXBvcnQgeyBnZXRYSnNLaXRJMThuSW5zdGFuY2UgfSBmcm9tIFwiLi4vaTE4blwiXHJcbmltcG9ydCB7IFhKc0tpdFRyYW5zbGF0aW9uS2V5TmFtZUVudW0gfSBmcm9tIFwiLi4vaTE4bi9kYXRhXCJcclxuaW1wb3J0IHsgUmFuZ2VUZXh0VHlwZUVudW0gfSBmcm9tIFwiLi4vY29uc3RhbnQvZW51bXNcIlxyXG5cclxuLyoqXHJcbiAqIOWwhuWtl+espuS4suaMieS4gOWumuWtl+espuaVsOaLhuWIhuaIkOWtl+espuS4suaVsOe7hFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0U3RyaW5nKHN0cjogc3RyaW5nLCBzdGVwQ2hhckNvdW50OiBudW1iZXIpOiBzdHJpbmdbXSB7XHJcbiAgICBpZiAoIXN0ciB8fCBzdGVwQ2hhckNvdW50IDw9IDApIHtcclxuICAgICAgICByZXR1cm4gW11cclxuICAgIH1cclxuICAgIGNvbnN0IHN0ckxlbiA9IHN0ci5sZW5ndGhcclxuICAgIGlmIChzdHJMZW4gPD0gc3RlcENoYXJDb3VudCkge1xyXG4gICAgICAgIHJldHVybiBbc3RyXVxyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzdWx0OiBzdHJpbmdbXSA9IFtdXHJcbiAgICBsZXQgc3RhcnRJbmRleCA9IDBcclxuICAgIHdoaWxlIChzdGFydEluZGV4IDwgc3RyTGVuKSB7XHJcbiAgICAgICAgcmVzdWx0LnB1c2goc3RyLnN1YnN0cihzdGFydEluZGV4LCBzdGVwQ2hhckNvdW50KSlcclxuICAgICAgICBzdGFydEluZGV4ICs9IHN0ZXBDaGFyQ291bnRcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHRcclxufVxyXG5cclxuLyoqXHJcbiAqIOaIquWPluWtl+espuS4suW5tuS7peecgeeVpeespuWPt+aYvuekuuWtl+espuS4slxyXG4gKiBAcGFyYW0gc3RyIOWOn+Wtl+espuS4slxyXG4gKiBAcGFyYW0gbGVuIOimgeS/neeVmeeahOWtl+espumVv+W6plxyXG4gKiBAcGFyYW0gZWxsaXBzaXNDaGFycyDooqvmiKrmlq3nmoTlrZfnrKbmmL7npLrnmoTnrKblj7dcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlbGxpcHNpcyhzdHI6IHN0cmluZywgbGVuOiBudW1iZXIsIGVsbGlwc2lzQ2hhcnMgPSBcIi4uLlwiKTogc3RyaW5nIHtcclxuICAgIGlmICghc3RyIHx8IGxlbiA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIGlmIChzdHIubGVuZ3RoIDw9IGxlbikge1xyXG4gICAgICAgIHJldHVybiBzdHJcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIuc3Vic3RyaW5nKDAsIGxlbikgKyBlbGxpcHNpc0NoYXJzXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDku47lrZfnrKbkuLLkuK3mj5Dlj5bmlbDlrZfvvIjlj6/luKblsI/mlbDngrnvvInjgILlpoLvvJpcImFiYzEyMy4wMWNkZVwiLT4xMjMuMDFcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROdW1iZXIoc3RyOiBzdHJpbmcpOiBudW1iZXIgfCBudWxsIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIGNvbnN0IG10ID0gc3RyLm1hdGNoKHBhcnROdW1iZXIpXHJcbiAgICBpZiAoIW10IHx8ICFtdC5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQobXRbMF0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDljrvlt6blj7PnqbrmoLxcclxuICogQHBhcmFtICBzdHIg5b6F5aSE55CG5a2X56ym5LiyXHJcbiAqIEByZXR1cm5zICDlpITnkIblkI7nmoTlrZfnrKbkuLJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmltKHN0cjogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csIFwiXCIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDljrvlt6bnqbrmoLxcclxuICogQHBhcmFtICBzdHIg5b6F5aSE55CG5a2X56ym5LiyXHJcbiAqIEByZXR1cm5zICDlpITnkIblkI7nmoTlrZfnrKbkuLJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsVHJpbShzdHI6IHN0cmluZykge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKy8sIFwiXCIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDljrvlj7PnqbrmoLxcclxuICogQHBhcmFtICBzdHIg5b6F5aSE55CG5a2X56ym5LiyXHJcbiAqIEByZXR1cm5zICDlpITnkIblkI7nmoTlgLxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByVHJpbShzdHI6IHN0cmluZykge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHMrJC8sIFwiXCIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDljrvmjonlt6bovrnnmoTmjIflrprlrZfnrKbkuLJcclxuICogQHBhcmFtIHN0ciDlvoXlpITnkIbnmoTlrZfnrKbkuLJcclxuICogQHBhcmFtIHN0clRvUmVtb3ZlIOmcgOimgeenu+mZpOeahOWtl+espuS4slxyXG4gKiBAcGFyYW0gaXNJZ25vcmVDYXNlIOaYr+WQpuW/veeVpeWkp+Wwj+WGmVxyXG4gKiBAcmV0dXJucyDlpITnkIbnu5PmnpxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsVHJpbVN0cmluZyhzdHI6IHN0cmluZywgc3RyVG9SZW1vdmU6IHN0cmluZywgaXNJZ25vcmVDYXNlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIGlmICghc3RyVG9SZW1vdmUpIHtcclxuICAgICAgICByZXR1cm4gc3RyXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChgXigke2VzY2FwZVJlZyhzdHJUb1JlbW92ZSl9KSpgLCBpc0lnbm9yZUNhc2UgPyBcImdpXCIgOiBcImdcIiksIFwiXCIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDljrvmjonlj7PovrnnmoTmjIflrprlrZfnrKbkuLJcclxuICogQHBhcmFtIHN0ciDlvoXlpITnkIbnmoTlrZfnrKbkuLJcclxuICogQHBhcmFtIHN0clRvUmVtb3ZlIOmcgOimgeenu+mZpOeahOWtl+espuS4slxyXG4gKiBAcGFyYW0gaXNJZ25vcmVDYXNlIOaYr+WQpuW/veeVpeWkp+Wwj+WGmVxyXG4gKiBAcmV0dXJucyDlpITnkIbnu5PmnpxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByVHJpbVN0cmluZyhzdHI6IHN0cmluZywgc3RyVG9SZW1vdmU6IHN0cmluZywgaXNJZ25vcmVDYXNlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIGlmICghc3RyVG9SZW1vdmUpIHtcclxuICAgICAgICByZXR1cm4gc3RyXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChgKCR7ZXNjYXBlUmVnKHN0clRvUmVtb3ZlKX0pKiRgLCBpc0lnbm9yZUNhc2UgPyBcImdpXCIgOiBcImdcIiksIFwiXCIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDljrvlt6blj7PmjIflrprnmoTlrZfnrKbkuLJcclxuICogQHBhcmFtIHN0ciDlvoXlpITnkIbnmoTlrZfnrKbkuLJcclxuICogQHBhcmFtIHN0clRvUmVtb3ZlIOmcgOimgeenu+mZpOeahOWtl+espuS4slxyXG4gKiBAcGFyYW0gaXNJZ25vcmVDYXNlIOaYr+WQpuW/veeVpeWkp+Wwj+WGmVxyXG4gKiBAcmV0dXJucyDlpITnkIbnu5PmnpxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmltU3RyaW5nKHN0cjogc3RyaW5nLCBzdHJUb1JlbW92ZTogc3RyaW5nLCBpc0lnbm9yZUNhc2U6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgaWYgKCFzdHJUb1JlbW92ZSkge1xyXG4gICAgICAgIHJldHVybiBzdHJcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKGAoXigke2VzY2FwZVJlZyhzdHJUb1JlbW92ZSl9KSopfCgoJHtlc2NhcGVSZWcoc3RyVG9SZW1vdmUpfSkqJClgLCBpc0lnbm9yZUNhc2UgPyBcImdpXCIgOiBcImdcIiksIFwiXCIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDku45odG1s5a2X56ym5Liy5Lit56e76Zmk5bem5Y+z56m655m95Y2g5L2N56ymXHJcbiAqIEBwYXJhbSBodG1sIOW+heWkhOeQhueahOWtl+espuS4slxyXG4gKiBAcmV0dXJucyDlpITnkIbnu5PmnpxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmltSFRNTChodG1sOiBzdHJpbmcpIHtcclxuICAgIGxldCBzdHIgPSBodG1sXHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICB3aGlsZSAoaHRtbExlZnRSaWdodEJsYW5rLnRlc3Qoc3RyKSkge1xyXG4gICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKGh0bWxMZWZ0UmlnaHRCbGFuaywgXCJcIilcclxuICAgIH1cclxuICAgIHJldHVybiBzdHJcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreS4pOS4quWtl+espuS4suaYr+WQpuebuOetie+8iOW/veeVpeWkp+Wwj+WGme+8iVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFsc0lnbm9yZUNhc2UoYTogc3RyaW5nLCBiOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiAoYSB8fCBcIlwiKS50b1VwcGVyQ2FzZSgpID09IChiIHx8IFwiXCIpLnRvVXBwZXJDYXNlKClcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreS4pOS4quWtl+espuS4suaYr+WQpuebuOetie+8iOW/veeVpeWkp+Wwj+WGmSvljrvlt6blj7Pnqbrnmb3vvIlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHNJZ25vcmVDYXNlQW5kVHJpbShhOiBzdHJpbmcsIGI6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIGVxdWFsc0lnbm9yZUNhc2UodHJpbShhKSwgdHJpbShiKSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOaMh+Wumua6kOWtl+espuS4snNvdXJjZeS4reaYr+WQpuWMheWQq3NlYXJjaOWtl+espuS4slxyXG4gKiBAcGFyYW0gIHNvdXJjZSDmupDlrZfnrKbkuLJcclxuICogQHBhcmFtICBzZWFyY2gg6KaB5p+l5om+55qE5a2X56ym5LiyXHJcbiAqIEBwYXJhbSAgaXNJZ25vcmVDYXNlIOaYr+WQpuW/veeVpeWkp+Wwj+WGmSjpu5jorqTkuLpmYWxzZSlcclxuICogQHJldHVybnMgIOe7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5zKHNvdXJjZTogc3RyaW5nLCBzZWFyY2g6IHN0cmluZywgaXNJZ25vcmVDYXNlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIGxldCBzb3VyY2VTdHIgPSBzb3VyY2VcclxuICAgIGxldCBzdHIgPSBzZWFyY2hcclxuICAgIGlmICghc291cmNlU3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBpZiAoc3RyID09PSBcIlwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBpZiAoaXNJZ25vcmVDYXNlKSB7XHJcbiAgICAgICAgc291cmNlU3RyID0gc291cmNlU3RyLnRvVXBwZXJDYXNlKClcclxuICAgICAgICBzdHIgPSBzdHIudG9VcHBlckNhc2UoKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNvdXJjZVN0ci5pbmNsdWRlcyhzdHIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlsIZodG1s5qCH562+6L2s5o2i5Li65a6e5L2T5b2i5byPXHJcbiAqIEBwYXJhbSAgaHRtbCDpnIDopoHooqvmm7/mjaLnmoRodG1sXHJcbiAqIEByZXR1cm5zICDovazmjaLlkI7nmoTlgLxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVIdG1sKGh0bWw6IHN0cmluZykge1xyXG4gICAgaWYgKCFodG1sKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIHJldHVybiBTdHJpbmcoaHRtbCkucmVwbGFjZSgvWyY8PlwiJy9dL2csIChzKSA9PiBodG1sRW50aXR5TWFwW3NdKVxyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtICAgc3RyIOimgemHjeWkjeeahOWtl+espuS4slxyXG4gKiBAcGFyYW0gICByZXBlYXRDb3VudCDph43lpI3mrKHmlbBcclxuICogQHJldHVybnMgIOaWsOeahOWtl+espuS4slxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGVhdChzdHI6IHN0cmluZywgcmVwZWF0Q291bnQ6IG51bWJlcikge1xyXG4gICAgbGV0IGNvdW50ID0gcmVwZWF0Q291bnRcclxuICAgIGlmICghc3RyIHx8IGNvdW50IDw9IDApIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgY29uc3QgcyA9IFtdXHJcbiAgICB3aGlsZSAoY291bnQtLSkge1xyXG4gICAgICAgIHMucHVzaChzdHIpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcy5qb2luKFwiXCIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlrZfnrKbkuLLmibnph4/mnoTlu7rlmajvvIjml6DpnIDkvb/nlKhcIitcIui/m+ihjOWtl+espuS4sueahOaLvOaOpe+8jOebtOaOpeS9v+eUqOatpOWvueixoeeahGFwcGVuZOaWueazleWQju+8jOWGjXRvU3RyaW5n5Y2z5Y+v5b6X5Yiw5ou85aW955qE5a2X56ym5Liy77yJXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQnVpbGRlcjxUPiB7XHJcbiAgICBwcml2YXRlIF9hcnI6IFRbXSA9IFtdXHJcbiAgICAvKipcclxuICAgICAqIOi/veWKoOmhuVxyXG4gICAgICogQHBhcmFtIGl0ZW1zIOW+hei/veWKoOeahOmhuVxyXG4gICAgICogQHJldHVybnMgdGhpc1xyXG4gICAgICovXHJcbiAgICBhcHBlbmQoLi4uaXRlbXM6IFRbXSkge1xyXG4gICAgICAgIHRoaXMuX2Fyci5wdXNoKC4uLml0ZW1zKVxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOi/lOWbnuW3suWQiOW5tueahOaJgOaciemhueeahOWtl+espuS4slxyXG4gICAgICovXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXJyLmpvaW4oXCJcIilcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5riF56m65b2T5YmN55qE5p6E5bu65Zmo5Lit55qE5omA5pyJ6aG5XHJcbiAgICAgKiBAcmV0dXJucyB0aGlzXHJcbiAgICAgKi9cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMuX2FyciA9IFtdXHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6L+U5Zue5p6E5bu65Zmo5Lit5omA5pyJ6aG555qE5a2X56ym5Liy5oC755qE5a2X56ym6ZW/5bqmXHJcbiAgICAgKi9cclxuICAgIGxlbmd0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpLmxlbmd0aFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYnVpbGRlciA9IEJ1aWxkZXJcclxuXHJcbi8qKlxyXG4gKiDkvb/nlKjmqKHmnb/moLzlvI/ljJblrZfnrKbkuLJcclxuICogQHBhcmFtIHN0ciDmqKHmnb/vvIzlpoLvvJpcIuS7iuWkqeaYr+aYn+acn3swfe+8jOW3suaIkOS6pHsxfeWNle+8gVwiXHJcbiAqIEBwYXJhbSBhcmdzIOaooeadv+S4reeahOWPguaVsFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdChzdHI6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcclxuICAgIGlmICghc3RyIHx8ICFhcmdzLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBzdHJcclxuICAgIH1cclxuICAgIGxldCByZXN1bHQgPSBzdHJcclxuICAgIGZvciAobGV0IHRva2VuID0gMDsgdG9rZW4gPCBhcmdzLmxlbmd0aDsgdG9rZW4rKykge1xyXG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcXFxce1wiICsgdG9rZW4gKyBcIlxcXFx9XCIsIFwiZ2lcIiksIGFyZ3NbdG9rZW5dKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG59XHJcblxyXG4vKipcclxuICog5Yig6Zmk56m655m96KGM77yI56m655m96KGM5piv5oyH77ya5q2k6KGM5Li656m655m95LiU5pyr5bC+5Li6IFxcciDmiJYgXFxu77yJXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQmxhbmtMaW5lcyhzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqW1xcclxcbl0vZ20sIFwiXCIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlsIbmlofmnKzkuK3nmoTlrZfnrKbkuLLlvaLlvI/miJbmjaLooYznrKblvaLlvI/nmoQgXCJcXHJcXG5cIiDlkowgXCJcXG5cIiDnu5/kuIDmm7/mjaLmiJAgPGJyLz5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlTmV3bGluZVRvQnIoc3RyOiBzdHJpbmcpIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFxcXFxyXFxcXG4pfChcXHJcXG4pL2dpLCBcIjxici8+XCIpLnJlcGxhY2UoLyhcXFxcbil8KFxcbikvZ2ksIFwiPGJyLz5cIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOiOt+WPluWtl+espuS4suS4reeahOS4reaWh+Wtl+esplxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENoaW5lc2VXb3JkKHN0cjogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICBjb25zdCBtYXRjaCA9IHN0ci5tYXRjaChuZXcgUmVnRXhwKGNoaW5lc2VDaGFyLCBcImdcIikpXHJcbiAgICBpZiAoIW1hdGNoIHx8ICFtYXRjaC5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1hdGNoLmpvaW4oXCJcIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOaMieWIhumalOespuWQiOW5tuWtl+espuS4slxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVTdHIoc2VwYXJhdG9yOiBzdHJpbmcsIC4uLnN1YlN0cnM6IHN0cmluZ1tdKSB7XHJcbiAgICBpZiAoIXN1YlN0cnMgfHwgIXN1YlN0cnMubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIHJldHVybiBzdWJTdHJzLmZpbHRlcigoaykgPT4gISFrKS5qb2luKHNlcGFyYXRvcilcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreWtl+espuS4suaYr+WQpuihqOekuuS4gOS4qumbhuWQiOS4reeahOafkOS4gOmhueaIluafkOS4gOS4quiMg+WbtO+8iOazqO+8muS4gOS4quiMg+WbtOeUqOiLseaWh+WGkuWPt+WIhumalO+8jOWkmuS4quiMg+WbtOeUqOiLseaWh+mAl+WPt+WIhumalOOAguiHquWKqOWFvOWuueWFqOWNiuinkuWIhumalOespuWSjOWkmuS9meeahOepuuagvO+8ie+8jOWmgu+8mlxyXG4gKiDjgJAx44CR6KGo56S656ysMemhuVxyXG4gKiDjgJAy44CR6KGo56S656ysMumhuVxyXG4gKiDjgJAyOjXjgJHooajnpLrnrKwy6aG55Yiw56ysNemhuVxyXG4gKiDjgJAtMeOAkeihqOekuuacgOWQjuS4gOmhuVxyXG4gKiDjgJAtMuOAkeihqOekuuWAkuaVsOesrDLpoblcclxuICog44CQLTU6LTLjgJHooajnpLrlgJLmlbDnrKw16aG55Yiw5YCS5pWw56ysMumhuVxyXG4gKiDjgJAyLDQ6NywtNTotMuOAkeihqOekuuesrDLpobnlkoznrKw05YiwN+mhueWSjOWAkuaVsOesrDXpobnoh7PlgJLmlbDnrKwy6aG5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNSYW5nZVRleHQoc3RyOiBzdHJpbmcsIGlzT25seVN1cHBvcnRPbmVSYW5nZT86IGJvb2xlYW4sIGlzQWxsb3daZXJvPzogYm9vbGVhbikge1xyXG4gICAgY29uc3QgaTE4biA9IGdldFhKc0tpdEkxOG5JbnN0YW5jZSgpXHJcbiAgICBjb25zdCBtc2cgPSBuZXcgTWV0aG9kUmVzdWx0KClcclxuICAgIHN0ciA9IHN0cj8ucmVwbGFjZSgv77yML2csIFwiLFwiKS5yZXBsYWNlKC/vvJovZywgXCI6XCIpLnJlcGxhY2UoL1xccy9nLCBcIlwiKVxyXG4gICAgc3RyID0gdHJpbVN0cmluZyhzdHIsIFwiLFwiKVxyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICBtc2cuaXNTdWNjZXNzID0gZmFsc2VcclxuICAgICAgICBtc2cubWVzc2FnZSA9IGkxOG4udChYSnNLaXRUcmFuc2xhdGlvbktleU5hbWVFbnVtLuW/hemhu+aPkOS+m+S4gOS4quacieaViOeahOiMg+WbtClcclxuICAgICAgICByZXR1cm4gbXNnXHJcbiAgICB9XHJcbiAgICBjb25zdCBpdGVtUmVnID0gL14tP1xcZCskL1xyXG4gICAgY29uc3QgaXRlbXMgPSBzdHIuc3BsaXQoXCIsXCIpXHJcblxyXG4gICAgaWYgKGlzT25seVN1cHBvcnRPbmVSYW5nZSAmJiBpdGVtcy5sZW5ndGggPj0gMikge1xyXG4gICAgICAgIG1zZy5pc1N1Y2Nlc3MgPSBmYWxzZVxyXG4gICAgICAgIG1zZy5tZXNzYWdlID0gaTE4bi50KFhKc0tpdFRyYW5zbGF0aW9uS2V5TmFtZUVudW0u6K+35rOo5oSP5b2T5YmN5Yqf6IO95Y+q5pSv5oyB5LiA5Liq6L+e57ut55qE6IyD5Zu06K+35Yig6Zmk6IyD5Zu05Lit55qE6YCX5Y+3KVxyXG4gICAgICAgIHJldHVybiBtc2dcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcclxuICAgICAgICBjb25zdCBhcnIgPSBpdGVtLnNwbGl0KFwiOlwiKVxyXG4gICAgICAgIGlmICghKGFyci5sZW5ndGggPT0gMSB8fCBhcnIubGVuZ3RoID09IDIpKSB7XHJcbiAgICAgICAgICAgIG1zZy5pc1N1Y2Nlc3MgPSBmYWxzZVxyXG4gICAgICAgICAgICBtc2cubWVzc2FnZSA9IGkxOG4udChYSnNLaXRUcmFuc2xhdGlvbktleU5hbWVFbnVtLuagvOW8j+S4jeato+ehrilcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpdGVtUmVnLnRlc3QoYXJyWzBdKSkge1xyXG4gICAgICAgICAgICBtc2cuaXNTdWNjZXNzID0gZmFsc2VcclxuICAgICAgICAgICAgbXNnLm1lc3NhZ2UgPSBpMThuLnQoWEpzS2l0VHJhbnNsYXRpb25LZXlOYW1lRW51bS7ojIPlm7TmoLzlvI/kuI3mraPnoa7lv4XpobvkuLrmlbTmlbDlj4LogIPnpLrkvospXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaXNBbGxvd1plcm8gJiYgIXRvSW50KGFyclswXSkpIHtcclxuICAgICAgICAgICAgbXNnLmlzU3VjY2VzcyA9IGZhbHNlXHJcbiAgICAgICAgICAgIG1zZy5tZXNzYWdlID0gaTE4bi50KFhKc0tpdFRyYW5zbGF0aW9uS2V5TmFtZUVudW0u5LiN6IO95Li6MClcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyci5sZW5ndGggPT0gMikge1xyXG4gICAgICAgICAgICBpZiAoIWl0ZW1SZWcudGVzdChhcnJbMV0pKSB7XHJcbiAgICAgICAgICAgICAgICBtc2cuaXNTdWNjZXNzID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIG1zZy5tZXNzYWdlID0gaTE4bi50KFhKc0tpdFRyYW5zbGF0aW9uS2V5TmFtZUVudW0u6IyD5Zu05qC85byP5LiN5q2j56Gu5b+F6aG75Li65pW05pWw5Y+C6ICD56S65L6LKVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWlzQWxsb3daZXJvICYmICF0b0ludChhcnJbMV0pKSB7XHJcbiAgICAgICAgICAgICAgICBtc2cuaXNTdWNjZXNzID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIG1zZy5tZXNzYWdlID0gaTE4bi50KFhKc0tpdFRyYW5zbGF0aW9uS2V5TmFtZUVudW0u5LiN6IO95Li6MClcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyci5sZW5ndGggPT0gMiAmJiB0b0ludChhcnJbMF0pIDwgMCAmJiB0b0ludChhcnJbMV0pID4gMCkge1xyXG4gICAgICAgICAgICBtc2cuaXNTdWNjZXNzID0gZmFsc2VcclxuICAgICAgICAgICAgbXNnLm1lc3NhZ2UgPSBpMThuLnQoWEpzS2l0VHJhbnNsYXRpb25LZXlOYW1lRW51bS7lt6bkvqfmlbDlrZfkuLrotJ/mlbDml7blj7PkvqfmlbDlrZflv4XpobvkuZ/lkIzml7bkuLrotJ/mlbApXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhcnIubGVuZ3RoID09IDIgJiYgdG9JbnQoYXJyWzBdKSA+IDAgJiYgdG9JbnQoYXJyWzFdKSA8IDApIHtcclxuICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyci5sZW5ndGggPT0gMiAmJiB0b0ludChhcnJbMF0pID4gdG9JbnQoYXJyWzFdKSkge1xyXG4gICAgICAgICAgICBtc2cuaXNTdWNjZXNzID0gZmFsc2VcclxuICAgICAgICAgICAgbXNnLm1lc3NhZ2UgPSBpMThuLnQoWEpzS2l0VHJhbnNsYXRpb25LZXlOYW1lRW51bS7moLzlvI/kuI3mraPnoa7lt6bkvqfmlbDlrZflv4XpobvlsI/kuo7nrYnkuo7lj7PkvqfmlbDlrZcpXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1zZ1xyXG59XHJcblxyXG4vKipcclxuICog6I635Y+W6IyD5Zu05paH5pys55qE5L2/55So6K+05piOXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SG93VG9Vc2VSYW5nZVRleHQodHlwZT86IFJhbmdlVGV4dFR5cGVFbnVtKSB7XHJcbiAgICBjb25zdCBpMThuID0gZ2V0WEpzS2l0STE4bkluc3RhbmNlKClcclxuICAgIGxldCB0eHQgPSBcIlwiXHJcblxyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSBSYW5nZVRleHRUeXBlRW51bS7pobXpnaLojIPlm7Q6XHJcbiAgICAgICAgICAgIHR4dCA9IGkxOG4udChYSnNLaXRUcmFuc2xhdGlvbktleU5hbWVFbnVtLumhtemdouiMg+WbtOaWh+acrOaPkOekuuivrSlcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlIFJhbmdlVGV4dFR5cGVFbnVtLuW3peS9nOihqOiMg+WbtDpcclxuICAgICAgICAgICAgdHh0ID0gaTE4bi50KFhKc0tpdFRyYW5zbGF0aW9uS2V5TmFtZUVudW0u5bel5L2c6KGo6IyD5Zu05paH5pys5o+Q56S66K+tKVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgUmFuZ2VUZXh0VHlwZUVudW0u5a2X56ym6IyD5Zu0OlxyXG4gICAgICAgICAgICB0eHQgPSBpMThuLnQoWEpzS2l0VHJhbnNsYXRpb25LZXlOYW1lRW51bS7lrZfnrKbojIPlm7TmlofmnKzmj5DnpLror60pXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSBSYW5nZVRleHRUeXBlRW51bS7mlofmnKzkvY3nva7ojIPlm7Q6XHJcbiAgICAgICAgICAgIHR4dCA9IGkxOG4udChYSnNLaXRUcmFuc2xhdGlvbktleU5hbWVFbnVtLuaWh+acrOS9jee9ruiMg+WbtOaWh+acrOaPkOekuuivrSlcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlIFJhbmdlVGV4dFR5cGVFbnVtLuihjOiMg+WbtDpcclxuICAgICAgICAgICAgdHh0ID0gaTE4bi50KFhKc0tpdFRyYW5zbGF0aW9uS2V5TmFtZUVudW0u6KGM6IyD5Zu05o+Q56S66K+tKVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHR4dCA9IGkxOG4udChYSnNLaXRUcmFuc2xhdGlvbktleU5hbWVFbnVtLum7mOiupOiMg+WbtOaWh+acrOaPkOekuuivrSlcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHh0XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKDpmaTlrZfnrKbkuLLliY3pnaLnmoTkuIvliJLnur9cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVTdGFydExpbmUoc3RyOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBsVHJpbVN0cmluZyhzdHIsIFwiX1wiKVxyXG59XHJcblxyXG4vKipcclxuICog5Yig6Zmk5omA5pyJ56m655m95a2X56ymXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlV2hpdGVTcGFjZShzdHI6IHN0cmluZykge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlQWxsKC9cXHMrL2csIFwiXCIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlsIblrZfnrKbkuLLkuK3nmoTmlbDlrabooajovr7lvI8gdW5pY29kZSDnrKblj7fmm7/mjaLkuLrln7rmnKznmoTov5DnrpfnrKZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVNYXRoU3ltYm9sKHN0cjogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL+KIki9nLCBcIi1cIikucmVwbGFjZSgvW8OX4oiXXS9nLCBcIipcIikucmVwbGFjZSgvW8O34oiVXS9nLCBcIi9cIikucmVwbGFjZSgv77yIL2csIFwiKFwiKS5yZXBsYWNlKC/vvIkvZywgXCIpXCIpLnJlcGxhY2UoL1xccysvZywgXCIgXCIpXHJcbn1cclxuIl19