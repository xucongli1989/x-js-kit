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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vc3RyaW5nLnRzIl0sIm5hbWVzIjpbInNwbGl0U3RyaW5nIiwic3RyIiwic3RlcENoYXJDb3VudCIsInN0ckxlbiIsImxlbmd0aCIsInJlc3VsdCIsInN0YXJ0SW5kZXgiLCJwdXNoIiwic3Vic3RyIiwiZWxsaXBzaXMiLCJsZW4iLCJlbGxpcHNpc0NoYXJzIiwic3Vic3RyaW5nIiwiZ2V0TnVtYmVyIiwibXQiLCJtYXRjaCIsInBhcnROdW1iZXIiLCJwYXJzZUZsb2F0IiwidHJpbSIsInJlcGxhY2UiLCJsVHJpbSIsInJUcmltIiwibFRyaW1TdHJpbmciLCJzdHJUb1JlbW92ZSIsImlzSWdub3JlQ2FzZSIsIlJlZ0V4cCIsInJUcmltU3RyaW5nIiwidHJpbVN0cmluZyIsInRyaW1IVE1MIiwiaHRtbCIsImh0bWxMZWZ0UmlnaHRCbGFuayIsInRlc3QiLCJlcXVhbHNJZ25vcmVDYXNlIiwiYSIsImIiLCJ0b1VwcGVyQ2FzZSIsImVxdWFsc0lnbm9yZUNhc2VBbmRUcmltIiwiY29udGFpbnMiLCJzb3VyY2UiLCJzZWFyY2giLCJzb3VyY2VTdHIiLCJpbmNsdWRlcyIsImVzY2FwZUh0bWwiLCJTdHJpbmciLCJzIiwiaHRtbEVudGl0eU1hcCIsInJlcGVhdCIsInJlcGVhdENvdW50IiwiY291bnQiLCJqb2luIiwiQnVpbGRlciIsIl9hcnIiLCJ0b1N0cmluZyIsImJ1aWxkZXIiLCJmb3JtYXQiLCJ0b2tlbiIsInJlbW92ZUJsYW5rTGluZXMiLCJyZXBsYWNlTmV3bGluZVRvQnIiLCJnZXRDaGluZXNlV29yZCIsImNoaW5lc2VDaGFyIiwiY29tYmluZVN0ciIsInNlcGFyYXRvciIsInN1YlN0cnMiLCJmaWx0ZXIiLCJrIiwiaXNSYW5nZVRleHQiLCJpc09ubHlTdXBwb3J0T25lUmFuZ2UiLCJpc0FsbG93WmVybyIsImkxOG4iLCJtc2ciLCJNZXRob2RSZXN1bHQiLCJpc1N1Y2Nlc3MiLCJtZXNzYWdlIiwidCIsIlhKc0tpdFRyYW5zbGF0aW9uS2V5TmFtZUVudW0iLCLlv4Xpobvmj5DkvpvkuIDkuKrmnInmlYjnmoTojIPlm7QiLCJpdGVtUmVnIiwiaXRlbXMiLCJzcGxpdCIsIuivt+azqOaEj+W9k+WJjeWKn+iDveWPquaUr+aMgeS4gOS4qui/nue7reeahOiMg+WbtOivt+WIoOmZpOiMg+WbtOS4reeahOmAl+WPtyIsIml0ZW0iLCJhcnIiLCLmoLzlvI/kuI3mraPnoa4iLCLojIPlm7TmoLzlvI/kuI3mraPnoa7lv4XpobvkuLrmlbTmlbDlj4LogIPnpLrkvosiLCLkuI3og73kuLowIiwi5bem5L6n5pWw5a2X5Li66LSf5pWw5pe25Y+z5L6n5pWw5a2X5b+F6aG75Lmf5ZCM5pe25Li66LSf5pWwIiwi5qC85byP5LiN5q2j56Gu5bem5L6n5pWw5a2X5b+F6aG75bCP5LqO562J5LqO5Y+z5L6n5pWw5a2XIiwiZ2V0SG93VG9Vc2VSYW5nZVRleHQiLCJ0eXBlIiwidHh0IiwiUmFuZ2VUZXh0VHlwZUVudW0iLCLpobXpnaLojIPlm7QiLCLpobXpnaLojIPlm7TmlofmnKzmj5DnpLror60iLCLlt6XkvZzooajojIPlm7QiLCLlt6XkvZzooajojIPlm7TmlofmnKzmj5DnpLror60iLCLlrZfnrKbojIPlm7QiLCLlrZfnrKbojIPlm7TmlofmnKzmj5DnpLror60iLCLmlofmnKzkvY3nva7ojIPlm7QiLCLmlofmnKzkvY3nva7ojIPlm7TmlofmnKzmj5DnpLror60iLCLpu5jorqTojIPlm7TmlofmnKzmj5DnpLror60iLCJyZW1vdmVTdGFydExpbmUiLCJyZW1vdmVXaGl0ZVNwYWNlIiwicmVwbGFjZUFsbCIsIm5vcm1hbGl6ZU1hdGhTeW1ib2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDTyxTQUFTQSxXQUFULENBQXFCQyxHQUFyQixFQUFrQ0MsYUFBbEMs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LEVBQXNGQSxPQUF0RixDQUE4RixJQUE5RixFQUFvRyxHQUFwRyxFQUF5R0EsT0FBekcsQ0FBaUgsTUFBakgsRUFBeUgsR0FBekgsQ0FBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGFydE51bWJlciwgaHRtbExlZnRSaWdodEJsYW5rLCBjaGluZXNlQ2hhciB9IGZyb20gXCIuLi9jb25zdGFudC9yZWdleFwiXHJcbmltcG9ydCB7IGVzY2FwZVJlZyB9IGZyb20gXCIuL3JlZ2V4cFwiXHJcbmltcG9ydCB7IGh0bWxFbnRpdHlNYXAgfSBmcm9tIFwiLi4vY29uc3RhbnQvbWFwXCJcclxuaW1wb3J0IHsgTWV0aG9kUmVzdWx0IH0gZnJvbSBcIi4uL2VudGl0eS9tZXRob2QtcmVzdWx0XCJcclxuaW1wb3J0IHsgdG9JbnQgfSBmcm9tIFwiLi9jb252ZXJ0XCJcclxuaW1wb3J0IHsgZ2V0WEpzS2l0STE4bkluc3RhbmNlIH0gZnJvbSBcIi4uL2kxOG5cIlxyXG5pbXBvcnQgeyBYSnNLaXRUcmFuc2xhdGlvbktleU5hbWVFbnVtIH0gZnJvbSBcIi4uL2kxOG4vZGF0YVwiXHJcbmltcG9ydCB7IFJhbmdlVGV4dFR5cGVFbnVtIH0gZnJvbSBcIi4uL2NvbnN0YW50L2VudW1zXCJcclxuXHJcbi8qKlxyXG4gKiDlsIblrZfnrKbkuLLmjInkuIDlrprlrZfnrKbmlbDmi4bliIbmiJDlrZfnrKbkuLLmlbDnu4RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzcGxpdFN0cmluZyhzdHI6IHN0cmluZywgc3RlcENoYXJDb3VudDogbnVtYmVyKTogc3RyaW5nW10ge1xyXG4gICAgaWYgKCFzdHIgfHwgc3RlcENoYXJDb3VudCA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdXHJcbiAgICB9XHJcbiAgICBjb25zdCBzdHJMZW4gPSBzdHIubGVuZ3RoXHJcbiAgICBpZiAoc3RyTGVuIDw9IHN0ZXBDaGFyQ291bnQpIHtcclxuICAgICAgICByZXR1cm4gW3N0cl1cclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3VsdDogc3RyaW5nW10gPSBbXVxyXG4gICAgbGV0IHN0YXJ0SW5kZXggPSAwXHJcbiAgICB3aGlsZSAoc3RhcnRJbmRleCA8IHN0ckxlbikge1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKHN0ci5zdWJzdHIoc3RhcnRJbmRleCwgc3RlcENoYXJDb3VudCkpXHJcbiAgICAgICAgc3RhcnRJbmRleCArPSBzdGVwQ2hhckNvdW50XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmiKrlj5blrZfnrKbkuLLlubbku6XnnIHnlaXnrKblj7fmmL7npLrlrZfnrKbkuLJcclxuICogQHBhcmFtIHN0ciDljp/lrZfnrKbkuLJcclxuICogQHBhcmFtIGxlbiDopoHkv53nlZnnmoTlrZfnrKbplb/luqZcclxuICogQHBhcmFtIGVsbGlwc2lzQ2hhcnMg6KKr5oiq5pat55qE5a2X56ym5pi+56S655qE56ym5Y+3XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZWxsaXBzaXMoc3RyOiBzdHJpbmcsIGxlbjogbnVtYmVyLCBlbGxpcHNpc0NoYXJzID0gXCIuLi5cIik6IHN0cmluZyB7XHJcbiAgICBpZiAoIXN0ciB8fCBsZW4gPD0gMCkge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICBpZiAoc3RyLmxlbmd0aCA8PSBsZW4pIHtcclxuICAgICAgICByZXR1cm4gc3RyXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnN1YnN0cmluZygwLCBsZW4pICsgZWxsaXBzaXNDaGFyc1xyXG59XHJcblxyXG4vKipcclxuICog5LuO5a2X56ym5Liy5Lit5o+Q5Y+W5pWw5a2X77yI5Y+v5bim5bCP5pWw54K577yJ44CC5aaC77yaXCJhYmMxMjMuMDFjZGVcIi0+MTIzLjAxXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TnVtYmVyKHN0cjogc3RyaW5nKTogbnVtYmVyIHwgbnVsbCB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICBjb25zdCBtdCA9IHN0ci5tYXRjaChwYXJ0TnVtYmVyKVxyXG4gICAgaWYgKCFtdCB8fCAhbXQubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIHJldHVybiBwYXJzZUZsb2F0KG10WzBdKVxyXG59XHJcblxyXG4vKipcclxuICog5Y675bem5Y+z56m65qC8XHJcbiAqIEBwYXJhbSAgc3RyIOW+heWkhOeQhuWtl+espuS4slxyXG4gKiBAcmV0dXJucyAg5aSE55CG5ZCO55qE5a2X56ym5LiyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJpbShzdHI6IHN0cmluZykge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCBcIlwiKVxyXG59XHJcblxyXG4vKipcclxuICog5Y675bem56m65qC8XHJcbiAqIEBwYXJhbSAgc3RyIOW+heWkhOeQhuWtl+espuS4slxyXG4gKiBAcmV0dXJucyAg5aSE55CG5ZCO55qE5a2X56ym5LiyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbFRyaW0oc3RyOiBzdHJpbmcpIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXlxccysvLCBcIlwiKVxyXG59XHJcblxyXG4vKipcclxuICog5Y675Y+z56m65qC8XHJcbiAqIEBwYXJhbSAgc3RyIOW+heWkhOeQhuWtl+espuS4slxyXG4gKiBAcmV0dXJucyAg5aSE55CG5ZCO55qE5YC8XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gclRyaW0oc3RyOiBzdHJpbmcpIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxzKyQvLCBcIlwiKVxyXG59XHJcblxyXG4vKipcclxuICog5Y675o6J5bem6L6555qE5oyH5a6a5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBzdHIg5b6F5aSE55CG55qE5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBzdHJUb1JlbW92ZSDpnIDopoHnp7vpmaTnmoTlrZfnrKbkuLJcclxuICogQHBhcmFtIGlzSWdub3JlQ2FzZSDmmK/lkKblv73nlaXlpKflsI/lhplcclxuICogQHJldHVybnMg5aSE55CG57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbFRyaW1TdHJpbmcoc3RyOiBzdHJpbmcsIHN0clRvUmVtb3ZlOiBzdHJpbmcsIGlzSWdub3JlQ2FzZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICBpZiAoIXN0clRvUmVtb3ZlKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0clxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoYF4oJHtlc2NhcGVSZWcoc3RyVG9SZW1vdmUpfSkqYCwgaXNJZ25vcmVDYXNlID8gXCJnaVwiIDogXCJnXCIpLCBcIlwiKVxyXG59XHJcblxyXG4vKipcclxuICog5Y675o6J5Y+z6L6555qE5oyH5a6a5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBzdHIg5b6F5aSE55CG55qE5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBzdHJUb1JlbW92ZSDpnIDopoHnp7vpmaTnmoTlrZfnrKbkuLJcclxuICogQHBhcmFtIGlzSWdub3JlQ2FzZSDmmK/lkKblv73nlaXlpKflsI/lhplcclxuICogQHJldHVybnMg5aSE55CG57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gclRyaW1TdHJpbmcoc3RyOiBzdHJpbmcsIHN0clRvUmVtb3ZlOiBzdHJpbmcsIGlzSWdub3JlQ2FzZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICBpZiAoIXN0clRvUmVtb3ZlKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0clxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoYCgke2VzY2FwZVJlZyhzdHJUb1JlbW92ZSl9KSokYCwgaXNJZ25vcmVDYXNlID8gXCJnaVwiIDogXCJnXCIpLCBcIlwiKVxyXG59XHJcblxyXG4vKipcclxuICog5Y675bem5Y+z5oyH5a6a55qE5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBzdHIg5b6F5aSE55CG55qE5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBzdHJUb1JlbW92ZSDpnIDopoHnp7vpmaTnmoTlrZfnrKbkuLJcclxuICogQHBhcmFtIGlzSWdub3JlQ2FzZSDmmK/lkKblv73nlaXlpKflsI/lhplcclxuICogQHJldHVybnMg5aSE55CG57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJpbVN0cmluZyhzdHI6IHN0cmluZywgc3RyVG9SZW1vdmU6IHN0cmluZywgaXNJZ25vcmVDYXNlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIGlmICghc3RyVG9SZW1vdmUpIHtcclxuICAgICAgICByZXR1cm4gc3RyXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChgKF4oJHtlc2NhcGVSZWcoc3RyVG9SZW1vdmUpfSkqKXwoKCR7ZXNjYXBlUmVnKHN0clRvUmVtb3ZlKX0pKiQpYCwgaXNJZ25vcmVDYXNlID8gXCJnaVwiIDogXCJnXCIpLCBcIlwiKVxyXG59XHJcblxyXG4vKipcclxuICog5LuOaHRtbOWtl+espuS4suS4reenu+mZpOW3puWPs+epuueZveWNoOS9jeesplxyXG4gKiBAcGFyYW0gaHRtbCDlvoXlpITnkIbnmoTlrZfnrKbkuLJcclxuICogQHJldHVybnMg5aSE55CG57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJpbUhUTUwoaHRtbDogc3RyaW5nKSB7XHJcbiAgICBsZXQgc3RyID0gaHRtbFxyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgd2hpbGUgKGh0bWxMZWZ0UmlnaHRCbGFuay50ZXN0KHN0cikpIHtcclxuICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShodG1sTGVmdFJpZ2h0QmxhbmssIFwiXCIpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq3kuKTkuKrlrZfnrKbkuLLmmK/lkKbnm7jnrYnvvIjlv73nlaXlpKflsI/lhpnvvIlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHNJZ25vcmVDYXNlKGE6IHN0cmluZywgYjogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gKGEgfHwgXCJcIikudG9VcHBlckNhc2UoKSA9PSAoYiB8fCBcIlwiKS50b1VwcGVyQ2FzZSgpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq3kuKTkuKrlrZfnrKbkuLLmmK/lkKbnm7jnrYnvvIjlv73nlaXlpKflsI/lhpkr5Y675bem5Y+z56m655m977yJXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxzSWdub3JlQ2FzZUFuZFRyaW0oYTogc3RyaW5nLCBiOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBlcXVhbHNJZ25vcmVDYXNlKHRyaW0oYSksIHRyaW0oYikpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmjIflrprmupDlrZfnrKbkuLJzb3VyY2XkuK3mmK/lkKbljIXlkKtzZWFyY2jlrZfnrKbkuLJcclxuICogQHBhcmFtICBzb3VyY2Ug5rqQ5a2X56ym5LiyXHJcbiAqIEBwYXJhbSAgc2VhcmNoIOimgeafpeaJvueahOWtl+espuS4slxyXG4gKiBAcGFyYW0gIGlzSWdub3JlQ2FzZSDmmK/lkKblv73nlaXlpKflsI/lhpko6buY6K6k5Li6ZmFsc2UpXHJcbiAqIEByZXR1cm5zICDnu5PmnpxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb250YWlucyhzb3VyY2U6IHN0cmluZywgc2VhcmNoOiBzdHJpbmcsIGlzSWdub3JlQ2FzZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICBsZXQgc291cmNlU3RyID0gc291cmNlXHJcbiAgICBsZXQgc3RyID0gc2VhcmNoXHJcbiAgICBpZiAoIXNvdXJjZVN0cikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgaWYgKHN0ciA9PT0gXCJcIikge1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgaWYgKGlzSWdub3JlQ2FzZSkge1xyXG4gICAgICAgIHNvdXJjZVN0ciA9IHNvdXJjZVN0ci50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgc3RyID0gc3RyLnRvVXBwZXJDYXNlKClcclxuICAgIH1cclxuICAgIHJldHVybiBzb3VyY2VTdHIuaW5jbHVkZXMoc3RyKVxyXG59XHJcblxyXG4vKipcclxuICog5bCGaHRtbOagh+etvui9rOaNouS4uuWunuS9k+W9ouW8j1xyXG4gKiBAcGFyYW0gIGh0bWwg6ZyA6KaB6KKr5pu/5o2i55qEaHRtbFxyXG4gKiBAcmV0dXJucyAg6L2s5o2i5ZCO55qE5YC8XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlSHRtbChodG1sOiBzdHJpbmcpIHtcclxuICAgIGlmICghaHRtbCkge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gU3RyaW5nKGh0bWwpLnJlcGxhY2UoL1smPD5cIicvXS9nLCAocykgPT4gaHRtbEVudGl0eU1hcFtzXSlcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSAgIHN0ciDopoHph43lpI3nmoTlrZfnrKbkuLJcclxuICogQHBhcmFtICAgcmVwZWF0Q291bnQg6YeN5aSN5qyh5pWwXHJcbiAqIEByZXR1cm5zICDmlrDnmoTlrZfnrKbkuLJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZXBlYXQoc3RyOiBzdHJpbmcsIHJlcGVhdENvdW50OiBudW1iZXIpIHtcclxuICAgIGxldCBjb3VudCA9IHJlcGVhdENvdW50XHJcbiAgICBpZiAoIXN0ciB8fCBjb3VudCA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIGNvbnN0IHMgPSBbXVxyXG4gICAgd2hpbGUgKGNvdW50LS0pIHtcclxuICAgICAgICBzLnB1c2goc3RyKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHMuam9pbihcIlwiKVxyXG59XHJcblxyXG4vKipcclxuICog5a2X56ym5Liy5om56YeP5p6E5bu65Zmo77yI5peg6ZyA5L2/55SoXCIrXCLov5vooYzlrZfnrKbkuLLnmoTmi7zmjqXvvIznm7TmjqXkvb/nlKjmraTlr7nosaHnmoRhcHBlbmTmlrnms5XlkI7vvIzlho10b1N0cmluZ+WNs+WPr+W+l+WIsOaLvOWlveeahOWtl+espuS4su+8iVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJ1aWxkZXI8VD4ge1xyXG4gICAgcHJpdmF0ZSBfYXJyOiBUW10gPSBbXVxyXG4gICAgLyoqXHJcbiAgICAgKiDov73liqDpoblcclxuICAgICAqIEBwYXJhbSBpdGVtcyDlvoXov73liqDnmoTpoblcclxuICAgICAqIEByZXR1cm5zIHRoaXNcclxuICAgICAqL1xyXG4gICAgYXBwZW5kKC4uLml0ZW1zOiBUW10pIHtcclxuICAgICAgICB0aGlzLl9hcnIucHVzaCguLi5pdGVtcylcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDov5Tlm57lt7LlkIjlubbnmoTmiYDmnInpobnnmoTlrZfnrKbkuLJcclxuICAgICAqL1xyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Fyci5qb2luKFwiXCIpXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOa4heepuuW9k+WJjeeahOaehOW7uuWZqOS4reeahOaJgOaciemhuVxyXG4gICAgICogQHJldHVybnMgdGhpc1xyXG4gICAgICovXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLl9hcnIgPSBbXVxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOi/lOWbnuaehOW7uuWZqOS4reaJgOaciemhueeahOWtl+espuS4suaAu+eahOWtl+espumVv+W6plxyXG4gICAgICovXHJcbiAgICBsZW5ndGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKS5sZW5ndGhcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGJ1aWxkZXIgPSBCdWlsZGVyXHJcblxyXG4vKipcclxuICog5L2/55So5qih5p2/5qC85byP5YyW5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBzdHIg5qih5p2/77yM5aaC77yaXCLku4rlpKnmmK/mmJ/mnJ97MH3vvIzlt7LmiJDkuqR7MX3ljZXvvIFcIlxyXG4gKiBAcGFyYW0gYXJncyDmqKHmnb/kuK3nmoTlj4LmlbBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQoc3RyOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICBpZiAoIXN0ciB8fCAhYXJncy5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gc3RyXHJcbiAgICB9XHJcbiAgICBsZXQgcmVzdWx0ID0gc3RyXHJcbiAgICBmb3IgKGxldCB0b2tlbiA9IDA7IHRva2VuIDwgYXJncy5sZW5ndGg7IHRva2VuKyspIHtcclxuICAgICAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZShuZXcgUmVnRXhwKFwiXFxcXHtcIiArIHRva2VuICsgXCJcXFxcfVwiLCBcImdpXCIpLCBhcmdzW3Rva2VuXSlcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHRcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIoOmZpOepuueZveihjO+8iOepuueZveihjOaYr+aMh++8muatpOihjOS4uuepuueZveS4lOacq+WwvuS4uiBcXHIg5oiWIFxcbu+8iVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUJsYW5rTGluZXMoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKltcXHJcXG5dL2dtLCBcIlwiKVxyXG59XHJcblxyXG4vKipcclxuICog5bCG5paH5pys5Lit55qE5a2X56ym5Liy5b2i5byP5oiW5o2i6KGM56ym5b2i5byP55qEIFwiXFxyXFxuXCIg5ZKMIFwiXFxuXCIg57uf5LiA5pu/5o2i5oiQIDxici8+XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZU5ld2xpbmVUb0JyKHN0cjogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhcXFxcclxcXFxuKXwoXFxyXFxuKS9naSwgXCI8YnIvPlwiKS5yZXBsYWNlKC8oXFxcXG4pfChcXG4pL2dpLCBcIjxici8+XCIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDojrflj5blrZfnrKbkuLLkuK3nmoTkuK3mloflrZfnrKZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGluZXNlV29yZChzdHI6IHN0cmluZykge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgY29uc3QgbWF0Y2ggPSBzdHIubWF0Y2gobmV3IFJlZ0V4cChjaGluZXNlQ2hhciwgXCJnXCIpKVxyXG4gICAgaWYgKCFtYXRjaCB8fCAhbWF0Y2gubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIHJldHVybiBtYXRjaC5qb2luKFwiXCIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmjInliIbpmpTnrKblkIjlubblrZfnrKbkuLJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lU3RyKHNlcGFyYXRvcjogc3RyaW5nLCAuLi5zdWJTdHJzOiBzdHJpbmdbXSkge1xyXG4gICAgaWYgKCFzdWJTdHJzIHx8ICFzdWJTdHJzLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3ViU3Rycy5maWx0ZXIoKGspID0+ICEhaykuam9pbihzZXBhcmF0b3IpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq3lrZfnrKbkuLLmmK/lkKbooajnpLrkuIDkuKrpm4blkIjkuK3nmoTmn5DkuIDpobnmiJbmn5DkuIDkuKrojIPlm7TvvIjms6jvvJrkuIDkuKrojIPlm7TnlKjoi7HmloflhpLlj7fliIbpmpTvvIzlpJrkuKrojIPlm7TnlKjoi7HmlofpgJflj7fliIbpmpTjgILoh6rliqjlhbzlrrnlhajljYrop5LliIbpmpTnrKblkozlpJrkvZnnmoTnqbrmoLzvvInvvIzlpoLvvJpcclxuICog44CQMeOAkeihqOekuuesrDHpoblcclxuICog44CQMuOAkeihqOekuuesrDLpoblcclxuICog44CQMjo144CR6KGo56S656ysMumhueWIsOesrDXpoblcclxuICog44CQLTHjgJHooajnpLrmnIDlkI7kuIDpoblcclxuICog44CQLTLjgJHooajnpLrlgJLmlbDnrKwy6aG5XHJcbiAqIOOAkC01Oi0y44CR6KGo56S65YCS5pWw56ysNemhueWIsOWAkuaVsOesrDLpoblcclxuICog44CQMiw0OjcsLTU6LTLjgJHooajnpLrnrKwy6aG55ZKM56ysNOWIsDfpobnlkozlgJLmlbDnrKw16aG56Iez5YCS5pWw56ysMumhuVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUmFuZ2VUZXh0KHN0cjogc3RyaW5nLCBpc09ubHlTdXBwb3J0T25lUmFuZ2U/OiBib29sZWFuLCBpc0FsbG93WmVybz86IGJvb2xlYW4pIHtcclxuICAgIGNvbnN0IGkxOG4gPSBnZXRYSnNLaXRJMThuSW5zdGFuY2UoKVxyXG4gICAgY29uc3QgbXNnID0gbmV3IE1ldGhvZFJlc3VsdCgpXHJcbiAgICBzdHIgPSBzdHI/LnJlcGxhY2UoL++8jC9nLCBcIixcIikucmVwbGFjZSgv77yaL2csIFwiOlwiKS5yZXBsYWNlKC9cXHMvZywgXCJcIilcclxuICAgIHN0ciA9IHRyaW1TdHJpbmcoc3RyLCBcIixcIilcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgbXNnLmlzU3VjY2VzcyA9IGZhbHNlXHJcbiAgICAgICAgbXNnLm1lc3NhZ2UgPSBpMThuLnQoWEpzS2l0VHJhbnNsYXRpb25LZXlOYW1lRW51bS7lv4Xpobvmj5DkvpvkuIDkuKrmnInmlYjnmoTojIPlm7QpXHJcbiAgICAgICAgcmV0dXJuIG1zZ1xyXG4gICAgfVxyXG4gICAgY29uc3QgaXRlbVJlZyA9IC9eLT9cXGQrJC9cclxuICAgIGNvbnN0IGl0ZW1zID0gc3RyLnNwbGl0KFwiLFwiKVxyXG5cclxuICAgIGlmIChpc09ubHlTdXBwb3J0T25lUmFuZ2UgJiYgaXRlbXMubGVuZ3RoID49IDIpIHtcclxuICAgICAgICBtc2cuaXNTdWNjZXNzID0gZmFsc2VcclxuICAgICAgICBtc2cubWVzc2FnZSA9IGkxOG4udChYSnNLaXRUcmFuc2xhdGlvbktleU5hbWVFbnVtLuivt+azqOaEj+W9k+WJjeWKn+iDveWPquaUr+aMgeS4gOS4qui/nue7reeahOiMg+WbtOivt+WIoOmZpOiMg+WbtOS4reeahOmAl+WPtylcclxuICAgICAgICByZXR1cm4gbXNnXHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XHJcbiAgICAgICAgY29uc3QgYXJyID0gaXRlbS5zcGxpdChcIjpcIilcclxuICAgICAgICBpZiAoIShhcnIubGVuZ3RoID09IDEgfHwgYXJyLmxlbmd0aCA9PSAyKSkge1xyXG4gICAgICAgICAgICBtc2cuaXNTdWNjZXNzID0gZmFsc2VcclxuICAgICAgICAgICAgbXNnLm1lc3NhZ2UgPSBpMThuLnQoWEpzS2l0VHJhbnNsYXRpb25LZXlOYW1lRW51bS7moLzlvI/kuI3mraPnoa4pXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaXRlbVJlZy50ZXN0KGFyclswXSkpIHtcclxuICAgICAgICAgICAgbXNnLmlzU3VjY2VzcyA9IGZhbHNlXHJcbiAgICAgICAgICAgIG1zZy5tZXNzYWdlID0gaTE4bi50KFhKc0tpdFRyYW5zbGF0aW9uS2V5TmFtZUVudW0u6IyD5Zu05qC85byP5LiN5q2j56Gu5b+F6aG75Li65pW05pWw5Y+C6ICD56S65L6LKVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWlzQWxsb3daZXJvICYmICF0b0ludChhcnJbMF0pKSB7XHJcbiAgICAgICAgICAgIG1zZy5pc1N1Y2Nlc3MgPSBmYWxzZVxyXG4gICAgICAgICAgICBtc2cubWVzc2FnZSA9IGkxOG4udChYSnNLaXRUcmFuc2xhdGlvbktleU5hbWVFbnVtLuS4jeiDveS4ujApXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhcnIubGVuZ3RoID09IDIpIHtcclxuICAgICAgICAgICAgaWYgKCFpdGVtUmVnLnRlc3QoYXJyWzFdKSkge1xyXG4gICAgICAgICAgICAgICAgbXNnLmlzU3VjY2VzcyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBtc2cubWVzc2FnZSA9IGkxOG4udChYSnNLaXRUcmFuc2xhdGlvbktleU5hbWVFbnVtLuiMg+WbtOagvOW8j+S4jeato+ehruW/hemhu+S4uuaVtOaVsOWPguiAg+ekuuS+iylcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFpc0FsbG93WmVybyAmJiAhdG9JbnQoYXJyWzFdKSkge1xyXG4gICAgICAgICAgICAgICAgbXNnLmlzU3VjY2VzcyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBtc2cubWVzc2FnZSA9IGkxOG4udChYSnNLaXRUcmFuc2xhdGlvbktleU5hbWVFbnVtLuS4jeiDveS4ujApXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhcnIubGVuZ3RoID09IDIgJiYgdG9JbnQoYXJyWzBdKSA8IDAgJiYgdG9JbnQoYXJyWzFdKSA+IDApIHtcclxuICAgICAgICAgICAgbXNnLmlzU3VjY2VzcyA9IGZhbHNlXHJcbiAgICAgICAgICAgIG1zZy5tZXNzYWdlID0gaTE4bi50KFhKc0tpdFRyYW5zbGF0aW9uS2V5TmFtZUVudW0u5bem5L6n5pWw5a2X5Li66LSf5pWw5pe25Y+z5L6n5pWw5a2X5b+F6aG75Lmf5ZCM5pe25Li66LSf5pWwKVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXJyLmxlbmd0aCA9PSAyICYmIHRvSW50KGFyclswXSkgPiAwICYmIHRvSW50KGFyclsxXSkgPCAwKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhcnIubGVuZ3RoID09IDIgJiYgdG9JbnQoYXJyWzBdKSA+IHRvSW50KGFyclsxXSkpIHtcclxuICAgICAgICAgICAgbXNnLmlzU3VjY2VzcyA9IGZhbHNlXHJcbiAgICAgICAgICAgIG1zZy5tZXNzYWdlID0gaTE4bi50KFhKc0tpdFRyYW5zbGF0aW9uS2V5TmFtZUVudW0u5qC85byP5LiN5q2j56Gu5bem5L6n5pWw5a2X5b+F6aG75bCP5LqO562J5LqO5Y+z5L6n5pWw5a2XKVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBtc2dcclxufVxyXG5cclxuLyoqXHJcbiAqIOiOt+WPluiMg+WbtOaWh+acrOeahOS9v+eUqOivtOaYjlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEhvd1RvVXNlUmFuZ2VUZXh0KHR5cGU/OiBSYW5nZVRleHRUeXBlRW51bSkge1xyXG4gICAgY29uc3QgaTE4biA9IGdldFhKc0tpdEkxOG5JbnN0YW5jZSgpXHJcbiAgICBsZXQgdHh0ID0gXCJcIlxyXG5cclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgUmFuZ2VUZXh0VHlwZUVudW0u6aG16Z2i6IyD5Zu0OlxyXG4gICAgICAgICAgICB0eHQgPSBpMThuLnQoWEpzS2l0VHJhbnNsYXRpb25LZXlOYW1lRW51bS7pobXpnaLojIPlm7TmlofmnKzmj5DnpLror60pXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSBSYW5nZVRleHRUeXBlRW51bS7lt6XkvZzooajojIPlm7Q6XHJcbiAgICAgICAgICAgIHR4dCA9IGkxOG4udChYSnNLaXRUcmFuc2xhdGlvbktleU5hbWVFbnVtLuW3peS9nOihqOiMg+WbtOaWh+acrOaPkOekuuivrSlcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlIFJhbmdlVGV4dFR5cGVFbnVtLuWtl+espuiMg+WbtDpcclxuICAgICAgICAgICAgdHh0ID0gaTE4bi50KFhKc0tpdFRyYW5zbGF0aW9uS2V5TmFtZUVudW0u5a2X56ym6IyD5Zu05paH5pys5o+Q56S66K+tKVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgUmFuZ2VUZXh0VHlwZUVudW0u5paH5pys5L2N572u6IyD5Zu0OlxyXG4gICAgICAgICAgICB0eHQgPSBpMThuLnQoWEpzS2l0VHJhbnNsYXRpb25LZXlOYW1lRW51bS7mlofmnKzkvY3nva7ojIPlm7TmlofmnKzmj5DnpLror60pXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgdHh0ID0gaTE4bi50KFhKc0tpdFRyYW5zbGF0aW9uS2V5TmFtZUVudW0u6buY6K6k6IyD5Zu05paH5pys5o+Q56S66K+tKVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0eHRcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIoOmZpOWtl+espuS4suWJjemdoueahOS4i+WIkue6v1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVN0YXJ0TGluZShzdHI6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIGxUcmltU3RyaW5nKHN0ciwgXCJfXCIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKDpmaTmiYDmnInnqbrnmb3lrZfnrKZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVXaGl0ZVNwYWNlKHN0cjogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2VBbGwoL1xccysvZywgXCJcIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOWwhuWtl+espuS4suS4reeahOaVsOWtpuihqOi+vuW8jyB1bmljb2RlIOespuWPt+abv+aNouS4uuWfuuacrOeahOi/kOeul+esplxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZU1hdGhTeW1ib2woc3RyOiBzdHJpbmcpIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIucmVwbGFjZSgv4oiSL2csIFwiLVwiKS5yZXBsYWNlKC9bw5fiiJddL2csIFwiKlwiKS5yZXBsYWNlKC9bw7fiiJVdL2csIFwiL1wiKS5yZXBsYWNlKC/vvIgvZywgXCIoXCIpLnJlcGxhY2UoL++8iS9nLCBcIilcIikucmVwbGFjZSgvXFxzKy9nLCBcIiBcIilcclxufVxyXG4iXX0=