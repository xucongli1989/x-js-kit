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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vc3RyaW5nLnRzIl0sIm5hbWVzIjpbInNwbGl0U3RyaW5nIiwic3RyIiwic3RlcENoYXJDb3VudCIsInN0ckxlbiIsImxlbmd0aCIsInJlc3VsdCIsInN0YXJ0SW5kZXgiLCJwdXNoIiwic3Vic3RyIiwiZWxsaXBzaXMiLCJsZW4iLCJlbGxpcHNpc0NoYXJzIiwic3Vic3RyaW5nIiwiZ2V0TnVtYmVyIiwibXQiLCJtYXRjaCIsInBhcnROdW1iZXIiLCJwYXJzZUZsb2F0IiwidHJpbSIsInJlcGxhY2UiLCJsVHJpbSIsInJUcmltIiwibFRyaW1TdHJpbmciLCJzdHJUb1JlbW92ZSIsImlzSWdub3JlQ2FzZSIsIlJlZ0V4cCIsInJUcmltU3RyaW5nIiwidHJpbVN0cmluZyIsInRyaW1IVE1MIiwiaHRtbCIsImh0bWxMZWZ0UmlnaHRCbGFuayIsInRlc3QiLCJlcXVhbHNJZ25vcmVDYXNlIiwiYSIsImIiLCJ0b1VwcGVyQ2FzZSIsImVxdWFsc0lnbm9yZUNhc2VBbmRUcmltIiwiY29udGFpbnMiLCJzb3VyY2UiLCJzZWFyY2giLCJzb3VyY2VTdHIiLCJpbmNsdWRlcyIsImVzY2FwZUh0bWwiLCJTdHJpbmciLCJzIiwiaHRtbEVudGl0eU1hcCIsInJlcGVhdCIsInJlcGVhdENvdW50IiwiY291bnQiLCJqb2luIiwiQnVpbGRlciIsIl9hcnIiLCJ0b1N0cmluZyIsImJ1aWxkZXIiLCJmb3JtYXQiLCJ0b2tlbiIsInJlbW92ZUJsYW5rTGluZXMiLCJyZXBsYWNlTmV3bGluZVRvQnIiLCJnZXRDaGluZXNlV29yZCIsImNoaW5lc2VDaGFyIiwiY29tYmluZVN0ciIsInNlcGFyYXRvciIsInN1YlN0cnMiLCJmaWx0ZXIiLCJrIiwiaXNSYW5nZVRleHQiLCJpc09ubHlTdXBwb3J0T25lUmFuZ2UiLCJpc0FsbG93WmVybyIsImkxOG4iLCJtc2ciLCJNZXRob2RSZXN1bHQiLCJpc1N1Y2Nlc3MiLCJtZXNzYWdlIiwidCIsIlhKc0tpdFRyYW5zbGF0aW9uS2V5TmFtZUVudW0iLCLlv4Xpobvmj5DkvpvkuIDkuKrmnInmlYjnmoTojIPlm7QiLCJpdGVtUmVnIiwiaXRlbXMiLCJzcGxpdCIsIuivt+azqOaEj+W9k+WJjeWKn+iDveWPquaUr+aMgeS4gOS4qui/nue7reeahOiMg+WbtOivt+WIoOmZpOiMg+WbtOS4reeahOmAl+WPtyIsIml0ZW0iLCJhcnIiLCLmoLzlvI/kuI3mraPnoa4iLCLojIPlm7TmoLzlvI/kuI3mraPnoa7lv4XpobvkuLrmlbTmlbDlj4LogIPnpLrkvosiLCLkuI3og73kuLowIiwi5bem5L6n5pWw5a2X5Li66LSf5pWw5pe25Y+z5L6n5pWw5a2X5b+F6aG75Lmf5ZCM5pe25Li66LSf5pWwIiwi5qC85byP5LiN5q2j56Gu5bem5L6n5pWw5a2X5b+F6aG75bCP5LqO562J5LqO5Y+z5L6n5pWw5a2XIiwiZ2V0SG93VG9Vc2VSYW5nZVRleHQiLCJ0eXBlIiwidHh0IiwiUmFuZ2VUZXh0VHlwZUVudW0iLCLpobXpnaLojIPlm7QiLCLpobXpnaLojIPlm7TmlofmnKzmj5DnpLror60iLCLlt6XkvZzooajojIPlm7QiLCLlt6XkvZzooajojIPlm7TmlofmnKzmj5DnpLror60iLCLlrZfnrKbojIPlm7QiLCLlrZfnrKbojIPlm7TmlofmnKzmj5DnpLror60iLCLmlofmnKzkvY3nva7ojIPlm7QiLCLmlofmnKzkvY3nva7ojIPlm7TmlofmnKzmj5DnpLror60iLCLpu5jorqTojIPlm7TmlofmnKzmj5DnpLror60iLCJyZW1vdmVTdGFydExpbmUiLCJyZW1vdmVXaGl0ZVNwYWNlIiwicmVwbGFjZUFsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ08sU0FBU0EsV0FBVCxDQUFxQkMsR0FBckIsRUFBa0NDLGFBQWxDLEVBQW1FO0FBQ3RFLE1BQUksQ0FBQ0QsR0FBRCxJQUFRQyxhQUFhLElBQUksQ0FBN0IsRUFBZ0M7QUFDNUIsV0FBTyxFQUFQO0FBQ0g7O0FBQ0QsTUFBTUMsTUFBTSxHQUFHRixHQUFHLENBQUNHLE1BQW5COztBQUNBLE1BQUlELE1BQU0sSUFBSUQsYUFBZCxFQUE2QjtBQUN6QixXQUFPLENBQUNELEdBQUQsQ0FBUDtBQUNIOztBQUNELE1BQU1JLE1BQWdCLEdBQUcsRUFBekI7QUFDQSxNQUFJQyxVQUFVLEdBQUcsQ0FBakI7O0FBQ0EsU0FBT0EsVUFBVSxHQUFHSCxNQUFwQixFQUE0QjtBQUN4QkUsSUFBQUEsTUFBTSxDQUFDRSxJQUFQLENBQVlOLEdBQUcsQ0FBQ08sTUFBSixDQUFXRixVQUFYLEVBQXVCSixhQUF2QixDQUFaO0FBQ0FJLElBQUFBLFVBQVUsSUFBSUosYUFBZDtBQUNIOztBQUNELFNBQU9HLE1BQVA7QUFDSDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0ksUUFBVCxDQUFrQlIsR0FBbEIsRUFBK0JTLEdBQS9CLEVBQTJFO0FBQUEsTUFBL0JDLGFBQStCLHVFQUFmLEtBQWU7O0FBQzlFLE1BQUksQ0FBQ1YsR0FBRCxJQUFRUyxHQUFHLElBQUksQ0FBbkIsRUFBc0I7QUFDbEIsV0FBTyxFQUFQO0FBQ0g7O0FBQ0QsTUFBSVQsR0FBRyxDQUFDRyxNQUFKLElBQWNNLEdBQWxCLEVBQXVCO0FBQ25CLFdBQU9ULEdBQVA7QUFDSDs7QUFDRCxTQUFPQSxHQUFHLENBQUNXLFNBQUosQ0FBYyxDQUFkLEVBQWlCRixHQUFqQixJQUF3QkMsYUFBL0I7QUFDSDtBQUVEO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0UsU0FBVCxDQUFtQlosR0FBbkIsRUFBK0M7QUFDbEQsTUFBSSxDQUFDQSxHQUFMLEVBQVU7QUFDTixXQUFPLElBQVA7QUFDSDs7QUFDRCxNQUFNYSxFQUFFLEdBQUdiLEdBQUcsQ0FBQ2MsS0FBSixDQUFVQyxpQkFBVixDQUFYOztBQUNBLE1BQUksQ0FBQ0YsRUFBRCxJQUFPLENBQUNBLEVBQUUsQ0FBQ1YsTUFBZixFQUF1QjtBQUNuQixXQUFPLElBQVA7QUFDSDs7QUFDRCxTQUFPYSxVQUFVLENBQUNILEVBQUUsQ0FBQyxDQUFELENBQUgsQ0FBakI7QUFDSDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLFNBQVNJLElBQVQsQ0FBY2pCLEdBQWQsRUFBMkI7QUFDOUIsTUFBSSxDQUFDQSxHQUFMLEVBQVU7QUFDTixXQUFPLEVBQVA7QUFDSDs7QUFDRCxTQUFPQSxHQUFHLENBQUNrQixPQUFKLENBQVksWUFBWixFQUEwQixFQUExQixDQUFQO0FBQ0g7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTQyxLQUFULENBQWVuQixHQUFmLEVBQTRCO0FBQy9CLE1BQUksQ0FBQ0EsR0FBTCxFQUFVO0FBQ04sV0FBTyxFQUFQO0FBQ0g7O0FBQ0QsU0FBT0EsR0FBRyxDQUFDa0IsT0FBSixDQUFZLE1BQVosRUFBb0IsRUFBcEIsQ0FBUDtBQUNIO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0UsS0FBVCxDQUFlcEIsR0FBZixFQUE0QjtBQUMvQixNQUFJLENBQUNBLEdBQUwsRUFBVTtBQUNOLFdBQU8sRUFBUDtBQUNIOztBQUNELFNBQU9BLEdBQUcsQ0FBQ2tCLE9BQUosQ0FBWSxNQUFaLEVBQW9CLEVBQXBCLENBQVA7QUFDSDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTRyxXQUFULENBQXFCckIsR0FBckIsRUFBa0NzQixXQUFsQyxFQUFzRjtBQUFBLE1BQS9CQyxZQUErQix1RUFBUCxLQUFPOztBQUN6RixNQUFJLENBQUN2QixHQUFMLEVBQVU7QUFDTixXQUFPLEVBQVA7QUFDSDs7QUFDRCxNQUFJLENBQUNzQixXQUFMLEVBQWtCO0FBQ2QsV0FBT3RCLEdBQVA7QUFDSDs7QUFDRCxTQUFPQSxHQUFHLENBQUNrQixPQUFKLENBQVksSUFBSU0sTUFBSixhQUFnQix1QkFBVUYsV0FBVixDQUFoQixTQUE0Q0MsWUFBWSxHQUFHLElBQUgsR0FBVSxHQUFsRSxDQUFaLEVBQW9GLEVBQXBGLENBQVA7QUFDSDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTRSxXQUFULENBQXFCekIsR0FBckIsRUFBa0NzQixXQUFsQyxFQUFzRjtBQUFBLE1BQS9CQyxZQUErQix1RUFBUCxLQUFPOztBQUN6RixNQUFJLENBQUN2QixHQUFMLEVBQVU7QUFDTixXQUFPLEVBQVA7QUFDSDs7QUFDRCxNQUFJLENBQUNzQixXQUFMLEVBQWtCO0FBQ2QsV0FBT3RCLEdBQVA7QUFDSDs7QUFDRCxTQUFPQSxHQUFHLENBQUNrQixPQUFKLENBQVksSUFBSU0sTUFBSixZQUFlLHVCQUFVRixXQUFWLENBQWYsVUFBNENDLFlBQVksR0FBRyxJQUFILEdBQVUsR0FBbEUsQ0FBWixFQUFvRixFQUFwRixDQUFQO0FBQ0g7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0csVUFBVCxDQUFvQjFCLEdBQXBCLEVBQWlDc0IsV0FBakMsRUFBcUY7QUFBQSxNQUEvQkMsWUFBK0IsdUVBQVAsS0FBTzs7QUFDeEYsTUFBSSxDQUFDdkIsR0FBTCxFQUFVO0FBQ04sV0FBTyxFQUFQO0FBQ0g7O0FBQ0QsTUFBSSxDQUFDc0IsV0FBTCxFQUFrQjtBQUNkLFdBQU90QixHQUFQO0FBQ0g7O0FBQ0QsU0FBT0EsR0FBRyxDQUFDa0IsT0FBSixDQUFZLElBQUlNLE1BQUosY0FBaUIsdUJBQVVGLFdBQVYsQ0FBakIsbUJBQWdELHVCQUFVQSxXQUFWLENBQWhELFdBQThFQyxZQUFZLEdBQUcsSUFBSCxHQUFVLEdBQXBHLENBQVosRUFBc0gsRUFBdEgsQ0FBUDtBQUNIO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0ksUUFBVCxDQUFrQkMsSUFBbEIsRUFBZ0M7QUFDbkMsTUFBSTVCLEdBQUcsR0FBRzRCLElBQVY7O0FBQ0EsTUFBSSxDQUFDNUIsR0FBTCxFQUFVO0FBQ04sV0FBTyxFQUFQO0FBQ0g7O0FBQ0QsU0FBTzZCLDBCQUFtQkMsSUFBbkIsQ0FBd0I5QixHQUF4QixDQUFQLEVBQXFDO0FBQ2pDQSxJQUFBQSxHQUFHLEdBQUdBLEdBQUcsQ0FBQ2tCLE9BQUosQ0FBWVcseUJBQVosRUFBZ0MsRUFBaEMsQ0FBTjtBQUNIOztBQUNELFNBQU83QixHQUFQO0FBQ0g7QUFFRDtBQUNBO0FBQ0E7OztBQUNPLFNBQVMrQixnQkFBVCxDQUEwQkMsQ0FBMUIsRUFBcUNDLENBQXJDLEVBQWdEO0FBQ25ELFNBQU8sQ0FBQ0QsQ0FBQyxJQUFJLEVBQU4sRUFBVUUsV0FBVixNQUEyQixDQUFDRCxDQUFDLElBQUksRUFBTixFQUFVQyxXQUFWLEVBQWxDO0FBQ0g7QUFFRDtBQUNBO0FBQ0E7OztBQUNPLFNBQVNDLHVCQUFULENBQWlDSCxDQUFqQyxFQUE0Q0MsQ0FBNUMsRUFBdUQ7QUFDMUQsU0FBT0YsZ0JBQWdCLENBQUNkLElBQUksQ0FBQ2UsQ0FBRCxDQUFMLEVBQVVmLElBQUksQ0FBQ2dCLENBQUQsQ0FBZCxDQUF2QjtBQUNIO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLFNBQVNHLFFBQVQsQ0FBa0JDLE1BQWxCLEVBQWtDQyxNQUFsQyxFQUFpRjtBQUFBLE1BQS9CZixZQUErQix1RUFBUCxLQUFPO0FBQ3BGLE1BQUlnQixTQUFTLEdBQUdGLE1BQWhCO0FBQ0EsTUFBSXJDLEdBQUcsR0FBR3NDLE1BQVY7O0FBQ0EsTUFBSSxDQUFDQyxTQUFMLEVBQWdCO0FBQ1osV0FBTyxLQUFQO0FBQ0g7O0FBQ0QsTUFBSXZDLEdBQUcsS0FBSyxFQUFaLEVBQWdCO0FBQ1osV0FBTyxJQUFQO0FBQ0g7O0FBQ0QsTUFBSSxDQUFDQSxHQUFMLEVBQVU7QUFDTixXQUFPLEtBQVA7QUFDSDs7QUFDRCxNQUFJdUIsWUFBSixFQUFrQjtBQUNkZ0IsSUFBQUEsU0FBUyxHQUFHQSxTQUFTLENBQUNMLFdBQVYsRUFBWjtBQUNBbEMsSUFBQUEsR0FBRyxHQUFHQSxHQUFHLENBQUNrQyxXQUFKLEVBQU47QUFDSDs7QUFDRCxTQUFPSyxTQUFTLENBQUNDLFFBQVYsQ0FBbUJ4QyxHQUFuQixDQUFQO0FBQ0g7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTeUMsVUFBVCxDQUFvQmIsSUFBcEIsRUFBa0M7QUFDckMsTUFBSSxDQUFDQSxJQUFMLEVBQVc7QUFDUCxXQUFPLEVBQVA7QUFDSDs7QUFDRCxTQUFPYyxNQUFNLENBQUNkLElBQUQsQ0FBTixDQUFhVixPQUFiLENBQXFCLFdBQXJCLEVBQWtDLFVBQUN5QixDQUFEO0FBQUEsV0FBT0MsbUJBQWNELENBQWQsQ0FBUDtBQUFBLEdBQWxDLENBQVA7QUFDSDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLFNBQVNFLE1BQVQsQ0FBZ0I3QyxHQUFoQixFQUE2QjhDLFdBQTdCLEVBQWtEO0FBQ3JELE1BQUlDLEtBQUssR0FBR0QsV0FBWjs7QUFDQSxNQUFJLENBQUM5QyxHQUFELElBQVErQyxLQUFLLElBQUksQ0FBckIsRUFBd0I7QUFDcEIsV0FBTyxFQUFQO0FBQ0g7O0FBQ0QsTUFBTUosQ0FBQyxHQUFHLEVBQVY7O0FBQ0EsU0FBT0ksS0FBSyxFQUFaLEVBQWdCO0FBQ1pKLElBQUFBLENBQUMsQ0FBQ3JDLElBQUYsQ0FBT04sR0FBUDtBQUNIOztBQUNELFNBQU8yQyxDQUFDLENBQUNLLElBQUYsQ0FBTyxFQUFQLENBQVA7QUFDSDtBQUVEO0FBQ0E7QUFDQTs7O0lBQ2FDLE87Ozs7a0NBQ1csRTs7Ozs7O0FBQ3BCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDSSxzQkFBc0I7QUFBQTs7QUFDbEIseUJBQUtDLElBQUwsRUFBVTVDLElBQVY7O0FBQ0EsYUFBTyxJQUFQO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7Ozs7V0FDSSxvQkFBVztBQUNQLGFBQU8sS0FBSzRDLElBQUwsQ0FBVUYsSUFBVixDQUFlLEVBQWYsQ0FBUDtBQUNIO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7Ozs7V0FDSSxpQkFBUTtBQUNKLFdBQUtFLElBQUwsR0FBWSxFQUFaO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7Ozs7V0FDSSxrQkFBUztBQUNMLGFBQU8sS0FBS0MsUUFBTCxHQUFnQmhELE1BQXZCO0FBQ0g7Ozs7Ozs7QUFHRSxJQUFNaUQsT0FBTyxHQUFHSCxPQUFoQjtBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFDTyxTQUFTSSxNQUFULENBQWdCckQsR0FBaEIsRUFBNkM7QUFDaEQsTUFBSSxDQUFDQSxHQUFELElBQVEsbURBQVosRUFBMEI7QUFDdEIsV0FBT0EsR0FBUDtBQUNIOztBQUNELE1BQUlJLE1BQU0sR0FBR0osR0FBYjs7QUFDQSxPQUFLLElBQUlzRCxLQUFLLEdBQUcsQ0FBakIsRUFBb0JBLEtBQUsscURBQXpCLEVBQXlDQSxLQUFLLEVBQTlDLEVBQWtEO0FBQzlDbEQsSUFBQUEsTUFBTSxHQUFHQSxNQUFNLENBQUNjLE9BQVAsQ0FBZSxJQUFJTSxNQUFKLENBQVcsUUFBUThCLEtBQVIsR0FBZ0IsS0FBM0IsRUFBa0MsSUFBbEMsQ0FBZixFQUE2REEsS0FBN0QsZ0NBQTZEQSxLQUE3RCw2QkFBNkRBLEtBQTdELE1BQVQ7QUFDSDs7QUFDRCxTQUFPbEQsTUFBUDtBQUNIO0FBRUQ7QUFDQTtBQUNBOzs7QUFDTyxTQUFTbUQsZ0JBQVQsQ0FBMEJ2RCxHQUExQixFQUErQztBQUNsRCxNQUFJLENBQUNBLEdBQUwsRUFBVTtBQUNOLFdBQU8sRUFBUDtBQUNIOztBQUNELFNBQU9BLEdBQUcsQ0FBQ2tCLE9BQUosQ0FBWSxjQUFaLEVBQTRCLEVBQTVCLENBQVA7QUFDSDtBQUVEO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU3NDLGtCQUFULENBQTRCeEQsR0FBNUIsRUFBeUM7QUFDNUMsTUFBSSxDQUFDQSxHQUFMLEVBQVU7QUFDTixXQUFPLEVBQVA7QUFDSDs7QUFDRCxTQUFPQSxHQUFHLENBQUNrQixPQUFKLENBQVksbUJBQVosRUFBaUMsT0FBakMsRUFBMENBLE9BQTFDLENBQWtELGNBQWxELEVBQWtFLE9BQWxFLENBQVA7QUFDSDtBQUVEO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU3VDLGNBQVQsQ0FBd0J6RCxHQUF4QixFQUFxQztBQUN4QyxNQUFJLENBQUNBLEdBQUwsRUFBVTtBQUNOLFdBQU8sRUFBUDtBQUNIOztBQUNELE1BQU1jLEtBQUssR0FBR2QsR0FBRyxDQUFDYyxLQUFKLENBQVUsSUFBSVUsTUFBSixDQUFXa0Msa0JBQVgsRUFBd0IsR0FBeEIsQ0FBVixDQUFkOztBQUNBLE1BQUksQ0FBQzVDLEtBQUQsSUFBVSxDQUFDQSxLQUFLLENBQUNYLE1BQXJCLEVBQTZCO0FBQ3pCLFdBQU8sRUFBUDtBQUNIOztBQUNELFNBQU9XLEtBQUssQ0FBQ2tDLElBQU4sQ0FBVyxFQUFYLENBQVA7QUFDSDtBQUVEO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU1csVUFBVCxDQUFvQkMsU0FBcEIsRUFBNkQ7QUFBQSxvQ0FBbkJDLE9BQW1CO0FBQW5CQSxJQUFBQSxPQUFtQjtBQUFBOztBQUNoRSxNQUFJLENBQUNBLE9BQUQsSUFBWSxDQUFDQSxPQUFPLENBQUMxRCxNQUF6QixFQUFpQztBQUM3QixXQUFPLEVBQVA7QUFDSDs7QUFDRCxTQUFPMEQsT0FBTyxDQUFDQyxNQUFSLENBQWUsVUFBQ0MsQ0FBRDtBQUFBLFdBQU8sQ0FBQyxDQUFDQSxDQUFUO0FBQUEsR0FBZixFQUEyQmYsSUFBM0IsQ0FBZ0NZLFNBQWhDLENBQVA7QUFDSDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTSSxXQUFULENBQXFCaEUsR0FBckIsRUFBa0NpRSxxQkFBbEMsRUFBbUVDLFdBQW5FLEVBQTBGO0FBQUE7O0FBQzdGLE1BQU1DLElBQUksR0FBRyxrQ0FBYjtBQUNBLE1BQU1DLEdBQUcsR0FBRyxJQUFJQywwQkFBSixFQUFaO0FBQ0FyRSxFQUFBQSxHQUFHLFdBQUdBLEdBQUgseUNBQUcsS0FBS2tCLE9BQUwsQ0FBYSxJQUFiLEVBQW1CLEdBQW5CLEVBQXdCQSxPQUF4QixDQUFnQyxJQUFoQyxFQUFzQyxHQUF0QyxFQUEyQ0EsT0FBM0MsQ0FBbUQsS0FBbkQsRUFBMEQsRUFBMUQsQ0FBTjtBQUNBbEIsRUFBQUEsR0FBRyxHQUFHMEIsVUFBVSxDQUFDMUIsR0FBRCxFQUFNLEdBQU4sQ0FBaEI7O0FBQ0EsTUFBSSxDQUFDQSxHQUFMLEVBQVU7QUFDTm9FLElBQUFBLEdBQUcsQ0FBQ0UsU0FBSixHQUFnQixLQUFoQjtBQUNBRixJQUFBQSxHQUFHLENBQUNHLE9BQUosR0FBY0osSUFBSSxDQUFDSyxDQUFMLENBQU9DLG1DQUE2QkMsV0FBcEMsQ0FBZDtBQUNBLFdBQU9OLEdBQVA7QUFDSDs7QUFDRCxNQUFNTyxPQUFPLEdBQUcsU0FBaEI7QUFDQSxNQUFNQyxLQUFLLEdBQUc1RSxHQUFHLENBQUM2RSxLQUFKLENBQVUsR0FBVixDQUFkOztBQUVBLE1BQUlaLHFCQUFxQixJQUFJVyxLQUFLLENBQUN6RSxNQUFOLElBQWdCLENBQTdDLEVBQWdEO0FBQzVDaUUsSUFBQUEsR0FBRyxDQUFDRSxTQUFKLEdBQWdCLEtBQWhCO0FBQ0FGLElBQUFBLEdBQUcsQ0FBQ0csT0FBSixHQUFjSixJQUFJLENBQUNLLENBQUwsQ0FBT0MsbUNBQTZCSywwQkFBcEMsQ0FBZDtBQUNBLFdBQU9WLEdBQVA7QUFDSDs7QUFqQjRGLDZDQW1CMUVRLEtBbkIwRTtBQUFBOztBQUFBO0FBbUI3Rix3REFBMEI7QUFBQSxVQUFmRyxJQUFlO0FBQ3RCLFVBQU1DLEdBQUcsR0FBR0QsSUFBSSxDQUFDRixLQUFMLENBQVcsR0FBWCxDQUFaOztBQUNBLFVBQUksRUFBRUcsR0FBRyxDQUFDN0UsTUFBSixJQUFjLENBQWQsSUFBbUI2RSxHQUFHLENBQUM3RSxNQUFKLElBQWMsQ0FBbkMsQ0FBSixFQUEyQztBQUN2Q2lFLFFBQUFBLEdBQUcsQ0FBQ0UsU0FBSixHQUFnQixLQUFoQjtBQUNBRixRQUFBQSxHQUFHLENBQUNHLE9BQUosR0FBY0osSUFBSSxDQUFDSyxDQUFMLENBQU9DLG1DQUE2QlEsS0FBcEMsQ0FBZDtBQUNBO0FBQ0g7O0FBQ0QsVUFBSSxDQUFDTixPQUFPLENBQUM3QyxJQUFSLENBQWFrRCxHQUFHLENBQUMsQ0FBRCxDQUFoQixDQUFMLEVBQTJCO0FBQ3ZCWixRQUFBQSxHQUFHLENBQUNFLFNBQUosR0FBZ0IsS0FBaEI7QUFDQUYsUUFBQUEsR0FBRyxDQUFDRyxPQUFKLEdBQWNKLElBQUksQ0FBQ0ssQ0FBTCxDQUFPQyxtQ0FBNkJTLGdCQUFwQyxDQUFkO0FBQ0E7QUFDSDs7QUFDRCxVQUFJLENBQUNoQixXQUFELElBQWdCLENBQUMsb0JBQU1jLEdBQUcsQ0FBQyxDQUFELENBQVQsQ0FBckIsRUFBb0M7QUFDaENaLFFBQUFBLEdBQUcsQ0FBQ0UsU0FBSixHQUFnQixLQUFoQjtBQUNBRixRQUFBQSxHQUFHLENBQUNHLE9BQUosR0FBY0osSUFBSSxDQUFDSyxDQUFMLENBQU9DLG1DQUE2QlUsSUFBcEMsQ0FBZDtBQUNBO0FBQ0g7O0FBQ0QsVUFBSUgsR0FBRyxDQUFDN0UsTUFBSixJQUFjLENBQWxCLEVBQXFCO0FBQ2pCLFlBQUksQ0FBQ3dFLE9BQU8sQ0FBQzdDLElBQVIsQ0FBYWtELEdBQUcsQ0FBQyxDQUFELENBQWhCLENBQUwsRUFBMkI7QUFDdkJaLFVBQUFBLEdBQUcsQ0FBQ0UsU0FBSixHQUFnQixLQUFoQjtBQUNBRixVQUFBQSxHQUFHLENBQUNHLE9BQUosR0FBY0osSUFBSSxDQUFDSyxDQUFMLENBQU9DLG1DQUE2QlMsZ0JBQXBDLENBQWQ7QUFDQTtBQUNIOztBQUNELFlBQUksQ0FBQ2hCLFdBQUQsSUFBZ0IsQ0FBQyxvQkFBTWMsR0FBRyxDQUFDLENBQUQsQ0FBVCxDQUFyQixFQUFvQztBQUNoQ1osVUFBQUEsR0FBRyxDQUFDRSxTQUFKLEdBQWdCLEtBQWhCO0FBQ0FGLFVBQUFBLEdBQUcsQ0FBQ0csT0FBSixHQUFjSixJQUFJLENBQUNLLENBQUwsQ0FBT0MsbUNBQTZCVSxJQUFwQyxDQUFkO0FBQ0E7QUFDSDtBQUNKOztBQUNELFVBQUlILEdBQUcsQ0FBQzdFLE1BQUosSUFBYyxDQUFkLElBQW1CLG9CQUFNNkUsR0FBRyxDQUFDLENBQUQsQ0FBVCxJQUFnQixDQUFuQyxJQUF3QyxvQkFBTUEsR0FBRyxDQUFDLENBQUQsQ0FBVCxJQUFnQixDQUE1RCxFQUErRDtBQUMzRFosUUFBQUEsR0FBRyxDQUFDRSxTQUFKLEdBQWdCLEtBQWhCO0FBQ0FGLFFBQUFBLEdBQUcsQ0FBQ0csT0FBSixHQUFjSixJQUFJLENBQUNLLENBQUwsQ0FBT0MsbUNBQTZCVyxvQkFBcEMsQ0FBZDtBQUNBO0FBQ0g7O0FBQ0QsVUFBSUosR0FBRyxDQUFDN0UsTUFBSixJQUFjLENBQWQsSUFBbUIsb0JBQU02RSxHQUFHLENBQUMsQ0FBRCxDQUFULElBQWdCLENBQW5DLElBQXdDLG9CQUFNQSxHQUFHLENBQUMsQ0FBRCxDQUFULElBQWdCLENBQTVELEVBQStEO0FBQzNEO0FBQ0g7O0FBQ0QsVUFBSUEsR0FBRyxDQUFDN0UsTUFBSixJQUFjLENBQWQsSUFBbUIsb0JBQU02RSxHQUFHLENBQUMsQ0FBRCxDQUFULElBQWdCLG9CQUFNQSxHQUFHLENBQUMsQ0FBRCxDQUFULENBQXZDLEVBQXNEO0FBQ2xEWixRQUFBQSxHQUFHLENBQUNFLFNBQUosR0FBZ0IsS0FBaEI7QUFDQUYsUUFBQUEsR0FBRyxDQUFDRyxPQUFKLEdBQWNKLElBQUksQ0FBQ0ssQ0FBTCxDQUFPQyxtQ0FBNkJZLG1CQUFwQyxDQUFkO0FBQ0E7QUFDSDtBQUNKO0FBN0Q0RjtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQThEN0YsU0FBT2pCLEdBQVA7QUFDSDtBQUVEO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU2tCLG9CQUFULENBQThCQyxJQUE5QixFQUF3RDtBQUMzRCxNQUFNcEIsSUFBSSxHQUFHLGtDQUFiO0FBQ0EsTUFBSXFCLEdBQUcsR0FBRyxFQUFWOztBQUVBLFVBQVFELElBQVI7QUFDSSxTQUFLRSx5QkFBa0JDLElBQXZCO0FBQ0lGLE1BQUFBLEdBQUcsR0FBR3JCLElBQUksQ0FBQ0ssQ0FBTCxDQUFPQyxtQ0FBNkJrQixTQUFwQyxDQUFOO0FBQ0E7O0FBQ0osU0FBS0YseUJBQWtCRyxLQUF2QjtBQUNJSixNQUFBQSxHQUFHLEdBQUdyQixJQUFJLENBQUNLLENBQUwsQ0FBT0MsbUNBQTZCb0IsVUFBcEMsQ0FBTjtBQUNBOztBQUNKLFNBQUtKLHlCQUFrQkssSUFBdkI7QUFDSU4sTUFBQUEsR0FBRyxHQUFHckIsSUFBSSxDQUFDSyxDQUFMLENBQU9DLG1DQUE2QnNCLFNBQXBDLENBQU47QUFDQTs7QUFDSixTQUFLTix5QkFBa0JPLE1BQXZCO0FBQ0lSLE1BQUFBLEdBQUcsR0FBR3JCLElBQUksQ0FBQ0ssQ0FBTCxDQUFPQyxtQ0FBNkJ3QixXQUFwQyxDQUFOO0FBQ0E7O0FBQ0o7QUFDSVQsTUFBQUEsR0FBRyxHQUFHckIsSUFBSSxDQUFDSyxDQUFMLENBQU9DLG1DQUE2QnlCLFNBQXBDLENBQU47QUFDQTtBQWZSOztBQWtCQSxTQUFPVixHQUFQO0FBQ0g7QUFFRDtBQUNBO0FBQ0E7OztBQUNPLFNBQVNXLGVBQVQsQ0FBeUJuRyxHQUF6QixFQUFzQztBQUN6QyxTQUFPcUIsV0FBVyxDQUFDckIsR0FBRCxFQUFNLEdBQU4sQ0FBbEI7QUFDSDtBQUVEO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU29HLGdCQUFULENBQTBCcEcsR0FBMUIsRUFBdUM7QUFDMUMsTUFBSSxDQUFDQSxHQUFMLEVBQVU7QUFDTixXQUFPLEVBQVA7QUFDSDs7QUFDRCxTQUFPQSxHQUFHLENBQUNxRyxVQUFKLENBQWUsTUFBZixFQUF1QixFQUF2QixDQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwYXJ0TnVtYmVyLCBodG1sTGVmdFJpZ2h0QmxhbmssIGNoaW5lc2VDaGFyIH0gZnJvbSBcIi4uL2NvbnN0YW50L3JlZ2V4XCJcclxuaW1wb3J0IHsgZXNjYXBlUmVnIH0gZnJvbSBcIi4vcmVnZXhwXCJcclxuaW1wb3J0IHsgaHRtbEVudGl0eU1hcCB9IGZyb20gXCIuLi9jb25zdGFudC9tYXBcIlxyXG5pbXBvcnQgeyBNZXRob2RSZXN1bHQgfSBmcm9tIFwiLi4vZW50aXR5L21ldGhvZC1yZXN1bHRcIlxyXG5pbXBvcnQgeyB0b0ludCB9IGZyb20gXCIuL2NvbnZlcnRcIlxyXG5pbXBvcnQgeyBnZXRYSnNLaXRJMThuSW5zdGFuY2UgfSBmcm9tIFwiLi4vaTE4blwiXHJcbmltcG9ydCB7IFhKc0tpdFRyYW5zbGF0aW9uS2V5TmFtZUVudW0gfSBmcm9tIFwiLi4vaTE4bi9kYXRhXCJcclxuaW1wb3J0IHsgUmFuZ2VUZXh0VHlwZUVudW0gfSBmcm9tIFwiLi4vY29uc3RhbnQvZW51bXNcIlxyXG5cclxuLyoqXHJcbiAqIOWwhuWtl+espuS4suaMieS4gOWumuWtl+espuaVsOaLhuWIhuaIkOWtl+espuS4suaVsOe7hFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0U3RyaW5nKHN0cjogc3RyaW5nLCBzdGVwQ2hhckNvdW50OiBudW1iZXIpOiBzdHJpbmdbXSB7XHJcbiAgICBpZiAoIXN0ciB8fCBzdGVwQ2hhckNvdW50IDw9IDApIHtcclxuICAgICAgICByZXR1cm4gW11cclxuICAgIH1cclxuICAgIGNvbnN0IHN0ckxlbiA9IHN0ci5sZW5ndGhcclxuICAgIGlmIChzdHJMZW4gPD0gc3RlcENoYXJDb3VudCkge1xyXG4gICAgICAgIHJldHVybiBbc3RyXVxyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzdWx0OiBzdHJpbmdbXSA9IFtdXHJcbiAgICBsZXQgc3RhcnRJbmRleCA9IDBcclxuICAgIHdoaWxlIChzdGFydEluZGV4IDwgc3RyTGVuKSB7XHJcbiAgICAgICAgcmVzdWx0LnB1c2goc3RyLnN1YnN0cihzdGFydEluZGV4LCBzdGVwQ2hhckNvdW50KSlcclxuICAgICAgICBzdGFydEluZGV4ICs9IHN0ZXBDaGFyQ291bnRcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHRcclxufVxyXG5cclxuLyoqXHJcbiAqIOaIquWPluWtl+espuS4suW5tuS7peecgeeVpeespuWPt+aYvuekuuWtl+espuS4slxyXG4gKiBAcGFyYW0gc3RyIOWOn+Wtl+espuS4slxyXG4gKiBAcGFyYW0gbGVuIOimgeS/neeVmeeahOWtl+espumVv+W6plxyXG4gKiBAcGFyYW0gZWxsaXBzaXNDaGFycyDooqvmiKrmlq3nmoTlrZfnrKbmmL7npLrnmoTnrKblj7dcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlbGxpcHNpcyhzdHI6IHN0cmluZywgbGVuOiBudW1iZXIsIGVsbGlwc2lzQ2hhcnMgPSBcIi4uLlwiKTogc3RyaW5nIHtcclxuICAgIGlmICghc3RyIHx8IGxlbiA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIGlmIChzdHIubGVuZ3RoIDw9IGxlbikge1xyXG4gICAgICAgIHJldHVybiBzdHJcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIuc3Vic3RyaW5nKDAsIGxlbikgKyBlbGxpcHNpc0NoYXJzXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDku47lrZfnrKbkuLLkuK3mj5Dlj5bmlbDlrZfvvIjlj6/luKblsI/mlbDngrnvvInjgILlpoLvvJpcImFiYzEyMy4wMWNkZVwiLT4xMjMuMDFcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROdW1iZXIoc3RyOiBzdHJpbmcpOiBudW1iZXIgfCBudWxsIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIGNvbnN0IG10ID0gc3RyLm1hdGNoKHBhcnROdW1iZXIpXHJcbiAgICBpZiAoIW10IHx8ICFtdC5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQobXRbMF0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDljrvlt6blj7PnqbrmoLxcclxuICogQHBhcmFtICBzdHIg5b6F5aSE55CG5a2X56ym5LiyXHJcbiAqIEByZXR1cm5zICDlpITnkIblkI7nmoTlrZfnrKbkuLJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmltKHN0cjogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csIFwiXCIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDljrvlt6bnqbrmoLxcclxuICogQHBhcmFtICBzdHIg5b6F5aSE55CG5a2X56ym5LiyXHJcbiAqIEByZXR1cm5zICDlpITnkIblkI7nmoTlrZfnrKbkuLJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsVHJpbShzdHI6IHN0cmluZykge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKy8sIFwiXCIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDljrvlj7PnqbrmoLxcclxuICogQHBhcmFtICBzdHIg5b6F5aSE55CG5a2X56ym5LiyXHJcbiAqIEByZXR1cm5zICDlpITnkIblkI7nmoTlgLxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByVHJpbShzdHI6IHN0cmluZykge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHMrJC8sIFwiXCIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDljrvmjonlt6bovrnnmoTmjIflrprlrZfnrKbkuLJcclxuICogQHBhcmFtIHN0ciDlvoXlpITnkIbnmoTlrZfnrKbkuLJcclxuICogQHBhcmFtIHN0clRvUmVtb3ZlIOmcgOimgeenu+mZpOeahOWtl+espuS4slxyXG4gKiBAcGFyYW0gaXNJZ25vcmVDYXNlIOaYr+WQpuW/veeVpeWkp+Wwj+WGmVxyXG4gKiBAcmV0dXJucyDlpITnkIbnu5PmnpxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsVHJpbVN0cmluZyhzdHI6IHN0cmluZywgc3RyVG9SZW1vdmU6IHN0cmluZywgaXNJZ25vcmVDYXNlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIGlmICghc3RyVG9SZW1vdmUpIHtcclxuICAgICAgICByZXR1cm4gc3RyXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChgXigke2VzY2FwZVJlZyhzdHJUb1JlbW92ZSl9KSpgLCBpc0lnbm9yZUNhc2UgPyBcImdpXCIgOiBcImdcIiksIFwiXCIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDljrvmjonlj7PovrnnmoTmjIflrprlrZfnrKbkuLJcclxuICogQHBhcmFtIHN0ciDlvoXlpITnkIbnmoTlrZfnrKbkuLJcclxuICogQHBhcmFtIHN0clRvUmVtb3ZlIOmcgOimgeenu+mZpOeahOWtl+espuS4slxyXG4gKiBAcGFyYW0gaXNJZ25vcmVDYXNlIOaYr+WQpuW/veeVpeWkp+Wwj+WGmVxyXG4gKiBAcmV0dXJucyDlpITnkIbnu5PmnpxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByVHJpbVN0cmluZyhzdHI6IHN0cmluZywgc3RyVG9SZW1vdmU6IHN0cmluZywgaXNJZ25vcmVDYXNlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIGlmICghc3RyVG9SZW1vdmUpIHtcclxuICAgICAgICByZXR1cm4gc3RyXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChgKCR7ZXNjYXBlUmVnKHN0clRvUmVtb3ZlKX0pKiRgLCBpc0lnbm9yZUNhc2UgPyBcImdpXCIgOiBcImdcIiksIFwiXCIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDljrvlt6blj7PmjIflrprnmoTlrZfnrKbkuLJcclxuICogQHBhcmFtIHN0ciDlvoXlpITnkIbnmoTlrZfnrKbkuLJcclxuICogQHBhcmFtIHN0clRvUmVtb3ZlIOmcgOimgeenu+mZpOeahOWtl+espuS4slxyXG4gKiBAcGFyYW0gaXNJZ25vcmVDYXNlIOaYr+WQpuW/veeVpeWkp+Wwj+WGmVxyXG4gKiBAcmV0dXJucyDlpITnkIbnu5PmnpxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmltU3RyaW5nKHN0cjogc3RyaW5nLCBzdHJUb1JlbW92ZTogc3RyaW5nLCBpc0lnbm9yZUNhc2U6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgaWYgKCFzdHJUb1JlbW92ZSkge1xyXG4gICAgICAgIHJldHVybiBzdHJcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKGAoXigke2VzY2FwZVJlZyhzdHJUb1JlbW92ZSl9KSopfCgoJHtlc2NhcGVSZWcoc3RyVG9SZW1vdmUpfSkqJClgLCBpc0lnbm9yZUNhc2UgPyBcImdpXCIgOiBcImdcIiksIFwiXCIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDku45odG1s5a2X56ym5Liy5Lit56e76Zmk5bem5Y+z56m655m95Y2g5L2N56ymXHJcbiAqIEBwYXJhbSBodG1sIOW+heWkhOeQhueahOWtl+espuS4slxyXG4gKiBAcmV0dXJucyDlpITnkIbnu5PmnpxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmltSFRNTChodG1sOiBzdHJpbmcpIHtcclxuICAgIGxldCBzdHIgPSBodG1sXHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICB3aGlsZSAoaHRtbExlZnRSaWdodEJsYW5rLnRlc3Qoc3RyKSkge1xyXG4gICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKGh0bWxMZWZ0UmlnaHRCbGFuaywgXCJcIilcclxuICAgIH1cclxuICAgIHJldHVybiBzdHJcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreS4pOS4quWtl+espuS4suaYr+WQpuebuOetie+8iOW/veeVpeWkp+Wwj+WGme+8iVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFsc0lnbm9yZUNhc2UoYTogc3RyaW5nLCBiOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiAoYSB8fCBcIlwiKS50b1VwcGVyQ2FzZSgpID09IChiIHx8IFwiXCIpLnRvVXBwZXJDYXNlKClcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreS4pOS4quWtl+espuS4suaYr+WQpuebuOetie+8iOW/veeVpeWkp+Wwj+WGmSvljrvlt6blj7Pnqbrnmb3vvIlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHNJZ25vcmVDYXNlQW5kVHJpbShhOiBzdHJpbmcsIGI6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIGVxdWFsc0lnbm9yZUNhc2UodHJpbShhKSwgdHJpbShiKSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOaMh+Wumua6kOWtl+espuS4snNvdXJjZeS4reaYr+WQpuWMheWQq3NlYXJjaOWtl+espuS4slxyXG4gKiBAcGFyYW0gIHNvdXJjZSDmupDlrZfnrKbkuLJcclxuICogQHBhcmFtICBzZWFyY2gg6KaB5p+l5om+55qE5a2X56ym5LiyXHJcbiAqIEBwYXJhbSAgaXNJZ25vcmVDYXNlIOaYr+WQpuW/veeVpeWkp+Wwj+WGmSjpu5jorqTkuLpmYWxzZSlcclxuICogQHJldHVybnMgIOe7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5zKHNvdXJjZTogc3RyaW5nLCBzZWFyY2g6IHN0cmluZywgaXNJZ25vcmVDYXNlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIGxldCBzb3VyY2VTdHIgPSBzb3VyY2VcclxuICAgIGxldCBzdHIgPSBzZWFyY2hcclxuICAgIGlmICghc291cmNlU3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBpZiAoc3RyID09PSBcIlwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBpZiAoaXNJZ25vcmVDYXNlKSB7XHJcbiAgICAgICAgc291cmNlU3RyID0gc291cmNlU3RyLnRvVXBwZXJDYXNlKClcclxuICAgICAgICBzdHIgPSBzdHIudG9VcHBlckNhc2UoKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNvdXJjZVN0ci5pbmNsdWRlcyhzdHIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlsIZodG1s5qCH562+6L2s5o2i5Li65a6e5L2T5b2i5byPXHJcbiAqIEBwYXJhbSAgaHRtbCDpnIDopoHooqvmm7/mjaLnmoRodG1sXHJcbiAqIEByZXR1cm5zICDovazmjaLlkI7nmoTlgLxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVIdG1sKGh0bWw6IHN0cmluZykge1xyXG4gICAgaWYgKCFodG1sKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIHJldHVybiBTdHJpbmcoaHRtbCkucmVwbGFjZSgvWyY8PlwiJy9dL2csIChzKSA9PiBodG1sRW50aXR5TWFwW3NdKVxyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtICAgc3RyIOimgemHjeWkjeeahOWtl+espuS4slxyXG4gKiBAcGFyYW0gICByZXBlYXRDb3VudCDph43lpI3mrKHmlbBcclxuICogQHJldHVybnMgIOaWsOeahOWtl+espuS4slxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGVhdChzdHI6IHN0cmluZywgcmVwZWF0Q291bnQ6IG51bWJlcikge1xyXG4gICAgbGV0IGNvdW50ID0gcmVwZWF0Q291bnRcclxuICAgIGlmICghc3RyIHx8IGNvdW50IDw9IDApIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgY29uc3QgcyA9IFtdXHJcbiAgICB3aGlsZSAoY291bnQtLSkge1xyXG4gICAgICAgIHMucHVzaChzdHIpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcy5qb2luKFwiXCIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlrZfnrKbkuLLmibnph4/mnoTlu7rlmajvvIjml6DpnIDkvb/nlKhcIitcIui/m+ihjOWtl+espuS4sueahOaLvOaOpe+8jOebtOaOpeS9v+eUqOatpOWvueixoeeahGFwcGVuZOaWueazleWQju+8jOWGjXRvU3RyaW5n5Y2z5Y+v5b6X5Yiw5ou85aW955qE5a2X56ym5Liy77yJXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQnVpbGRlcjxUPiB7XHJcbiAgICBwcml2YXRlIF9hcnI6IFRbXSA9IFtdXHJcbiAgICAvKipcclxuICAgICAqIOi/veWKoOmhuVxyXG4gICAgICogQHBhcmFtIGl0ZW1zIOW+hei/veWKoOeahOmhuVxyXG4gICAgICogQHJldHVybnMgdGhpc1xyXG4gICAgICovXHJcbiAgICBhcHBlbmQoLi4uaXRlbXM6IFRbXSkge1xyXG4gICAgICAgIHRoaXMuX2Fyci5wdXNoKC4uLml0ZW1zKVxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOi/lOWbnuW3suWQiOW5tueahOaJgOaciemhueeahOWtl+espuS4slxyXG4gICAgICovXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXJyLmpvaW4oXCJcIilcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5riF56m65b2T5YmN55qE5p6E5bu65Zmo5Lit55qE5omA5pyJ6aG5XHJcbiAgICAgKiBAcmV0dXJucyB0aGlzXHJcbiAgICAgKi9cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMuX2FyciA9IFtdXHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6L+U5Zue5p6E5bu65Zmo5Lit5omA5pyJ6aG555qE5a2X56ym5Liy5oC755qE5a2X56ym6ZW/5bqmXHJcbiAgICAgKi9cclxuICAgIGxlbmd0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpLmxlbmd0aFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYnVpbGRlciA9IEJ1aWxkZXJcclxuXHJcbi8qKlxyXG4gKiDkvb/nlKjmqKHmnb/moLzlvI/ljJblrZfnrKbkuLJcclxuICogQHBhcmFtIHN0ciDmqKHmnb/vvIzlpoLvvJpcIuS7iuWkqeaYr+aYn+acn3swfe+8jOW3suaIkOS6pHsxfeWNle+8gVwiXHJcbiAqIEBwYXJhbSBhcmdzIOaooeadv+S4reeahOWPguaVsFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdChzdHI6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcclxuICAgIGlmICghc3RyIHx8ICFhcmdzLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBzdHJcclxuICAgIH1cclxuICAgIGxldCByZXN1bHQgPSBzdHJcclxuICAgIGZvciAobGV0IHRva2VuID0gMDsgdG9rZW4gPCBhcmdzLmxlbmd0aDsgdG9rZW4rKykge1xyXG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcXFxce1wiICsgdG9rZW4gKyBcIlxcXFx9XCIsIFwiZ2lcIiksIGFyZ3NbdG9rZW5dKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG59XHJcblxyXG4vKipcclxuICog5Yig6Zmk56m655m96KGM77yI56m655m96KGM5piv5oyH77ya5q2k6KGM5Li656m655m95LiU5pyr5bC+5Li6IFxcciDmiJYgXFxu77yJXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQmxhbmtMaW5lcyhzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqW1xcclxcbl0vZ20sIFwiXCIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlsIbmlofmnKzkuK3nmoTlrZfnrKbkuLLlvaLlvI/miJbmjaLooYznrKblvaLlvI/nmoQgXCJcXHJcXG5cIiDlkowgXCJcXG5cIiDnu5/kuIDmm7/mjaLmiJAgPGJyLz5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlTmV3bGluZVRvQnIoc3RyOiBzdHJpbmcpIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFxcXFxyXFxcXG4pfChcXHJcXG4pL2dpLCBcIjxici8+XCIpLnJlcGxhY2UoLyhcXFxcbil8KFxcbikvZ2ksIFwiPGJyLz5cIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOiOt+WPluWtl+espuS4suS4reeahOS4reaWh+Wtl+esplxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENoaW5lc2VXb3JkKHN0cjogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICBjb25zdCBtYXRjaCA9IHN0ci5tYXRjaChuZXcgUmVnRXhwKGNoaW5lc2VDaGFyLCBcImdcIikpXHJcbiAgICBpZiAoIW1hdGNoIHx8ICFtYXRjaC5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1hdGNoLmpvaW4oXCJcIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOaMieWIhumalOespuWQiOW5tuWtl+espuS4slxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVTdHIoc2VwYXJhdG9yOiBzdHJpbmcsIC4uLnN1YlN0cnM6IHN0cmluZ1tdKSB7XHJcbiAgICBpZiAoIXN1YlN0cnMgfHwgIXN1YlN0cnMubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIHJldHVybiBzdWJTdHJzLmZpbHRlcigoaykgPT4gISFrKS5qb2luKHNlcGFyYXRvcilcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreWtl+espuS4suaYr+WQpuihqOekuuS4gOS4qumbhuWQiOS4reeahOafkOS4gOmhueaIluafkOS4gOS4quiMg+WbtO+8iOazqO+8muS4gOS4quiMg+WbtOeUqOiLseaWh+WGkuWPt+WIhumalO+8jOWkmuS4quiMg+WbtOeUqOiLseaWh+mAl+WPt+WIhumalOOAguiHquWKqOWFvOWuueWFqOWNiuinkuWIhumalOespuWSjOWkmuS9meeahOepuuagvO+8ie+8jOWmgu+8mlxyXG4gKiDjgJAx44CR6KGo56S656ysMemhuVxyXG4gKiDjgJAy44CR6KGo56S656ysMumhuVxyXG4gKiDjgJAyOjXjgJHooajnpLrnrKwy6aG55Yiw56ysNemhuVxyXG4gKiDjgJAtMeOAkeihqOekuuacgOWQjuS4gOmhuVxyXG4gKiDjgJAtMuOAkeihqOekuuWAkuaVsOesrDLpoblcclxuICog44CQLTU6LTLjgJHooajnpLrlgJLmlbDnrKw16aG55Yiw5YCS5pWw56ysMumhuVxyXG4gKiDjgJAyLDQ6NywtNTotMuOAkeihqOekuuesrDLpobnlkoznrKw05YiwN+mhueWSjOWAkuaVsOesrDXpobnoh7PlgJLmlbDnrKwy6aG5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNSYW5nZVRleHQoc3RyOiBzdHJpbmcsIGlzT25seVN1cHBvcnRPbmVSYW5nZT86IGJvb2xlYW4sIGlzQWxsb3daZXJvPzogYm9vbGVhbikge1xyXG4gICAgY29uc3QgaTE4biA9IGdldFhKc0tpdEkxOG5JbnN0YW5jZSgpXHJcbiAgICBjb25zdCBtc2cgPSBuZXcgTWV0aG9kUmVzdWx0KClcclxuICAgIHN0ciA9IHN0cj8ucmVwbGFjZSgv77yML2csIFwiLFwiKS5yZXBsYWNlKC/vvJovZywgXCI6XCIpLnJlcGxhY2UoL1xccy9nLCBcIlwiKVxyXG4gICAgc3RyID0gdHJpbVN0cmluZyhzdHIsIFwiLFwiKVxyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICBtc2cuaXNTdWNjZXNzID0gZmFsc2VcclxuICAgICAgICBtc2cubWVzc2FnZSA9IGkxOG4udChYSnNLaXRUcmFuc2xhdGlvbktleU5hbWVFbnVtLuW/hemhu+aPkOS+m+S4gOS4quacieaViOeahOiMg+WbtClcclxuICAgICAgICByZXR1cm4gbXNnXHJcbiAgICB9XHJcbiAgICBjb25zdCBpdGVtUmVnID0gL14tP1xcZCskL1xyXG4gICAgY29uc3QgaXRlbXMgPSBzdHIuc3BsaXQoXCIsXCIpXHJcblxyXG4gICAgaWYgKGlzT25seVN1cHBvcnRPbmVSYW5nZSAmJiBpdGVtcy5sZW5ndGggPj0gMikge1xyXG4gICAgICAgIG1zZy5pc1N1Y2Nlc3MgPSBmYWxzZVxyXG4gICAgICAgIG1zZy5tZXNzYWdlID0gaTE4bi50KFhKc0tpdFRyYW5zbGF0aW9uS2V5TmFtZUVudW0u6K+35rOo5oSP5b2T5YmN5Yqf6IO95Y+q5pSv5oyB5LiA5Liq6L+e57ut55qE6IyD5Zu06K+35Yig6Zmk6IyD5Zu05Lit55qE6YCX5Y+3KVxyXG4gICAgICAgIHJldHVybiBtc2dcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcclxuICAgICAgICBjb25zdCBhcnIgPSBpdGVtLnNwbGl0KFwiOlwiKVxyXG4gICAgICAgIGlmICghKGFyci5sZW5ndGggPT0gMSB8fCBhcnIubGVuZ3RoID09IDIpKSB7XHJcbiAgICAgICAgICAgIG1zZy5pc1N1Y2Nlc3MgPSBmYWxzZVxyXG4gICAgICAgICAgICBtc2cubWVzc2FnZSA9IGkxOG4udChYSnNLaXRUcmFuc2xhdGlvbktleU5hbWVFbnVtLuagvOW8j+S4jeato+ehrilcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpdGVtUmVnLnRlc3QoYXJyWzBdKSkge1xyXG4gICAgICAgICAgICBtc2cuaXNTdWNjZXNzID0gZmFsc2VcclxuICAgICAgICAgICAgbXNnLm1lc3NhZ2UgPSBpMThuLnQoWEpzS2l0VHJhbnNsYXRpb25LZXlOYW1lRW51bS7ojIPlm7TmoLzlvI/kuI3mraPnoa7lv4XpobvkuLrmlbTmlbDlj4LogIPnpLrkvospXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaXNBbGxvd1plcm8gJiYgIXRvSW50KGFyclswXSkpIHtcclxuICAgICAgICAgICAgbXNnLmlzU3VjY2VzcyA9IGZhbHNlXHJcbiAgICAgICAgICAgIG1zZy5tZXNzYWdlID0gaTE4bi50KFhKc0tpdFRyYW5zbGF0aW9uS2V5TmFtZUVudW0u5LiN6IO95Li6MClcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyci5sZW5ndGggPT0gMikge1xyXG4gICAgICAgICAgICBpZiAoIWl0ZW1SZWcudGVzdChhcnJbMV0pKSB7XHJcbiAgICAgICAgICAgICAgICBtc2cuaXNTdWNjZXNzID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIG1zZy5tZXNzYWdlID0gaTE4bi50KFhKc0tpdFRyYW5zbGF0aW9uS2V5TmFtZUVudW0u6IyD5Zu05qC85byP5LiN5q2j56Gu5b+F6aG75Li65pW05pWw5Y+C6ICD56S65L6LKVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWlzQWxsb3daZXJvICYmICF0b0ludChhcnJbMV0pKSB7XHJcbiAgICAgICAgICAgICAgICBtc2cuaXNTdWNjZXNzID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIG1zZy5tZXNzYWdlID0gaTE4bi50KFhKc0tpdFRyYW5zbGF0aW9uS2V5TmFtZUVudW0u5LiN6IO95Li6MClcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyci5sZW5ndGggPT0gMiAmJiB0b0ludChhcnJbMF0pIDwgMCAmJiB0b0ludChhcnJbMV0pID4gMCkge1xyXG4gICAgICAgICAgICBtc2cuaXNTdWNjZXNzID0gZmFsc2VcclxuICAgICAgICAgICAgbXNnLm1lc3NhZ2UgPSBpMThuLnQoWEpzS2l0VHJhbnNsYXRpb25LZXlOYW1lRW51bS7lt6bkvqfmlbDlrZfkuLrotJ/mlbDml7blj7PkvqfmlbDlrZflv4XpobvkuZ/lkIzml7bkuLrotJ/mlbApXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhcnIubGVuZ3RoID09IDIgJiYgdG9JbnQoYXJyWzBdKSA+IDAgJiYgdG9JbnQoYXJyWzFdKSA8IDApIHtcclxuICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyci5sZW5ndGggPT0gMiAmJiB0b0ludChhcnJbMF0pID4gdG9JbnQoYXJyWzFdKSkge1xyXG4gICAgICAgICAgICBtc2cuaXNTdWNjZXNzID0gZmFsc2VcclxuICAgICAgICAgICAgbXNnLm1lc3NhZ2UgPSBpMThuLnQoWEpzS2l0VHJhbnNsYXRpb25LZXlOYW1lRW51bS7moLzlvI/kuI3mraPnoa7lt6bkvqfmlbDlrZflv4XpobvlsI/kuo7nrYnkuo7lj7PkvqfmlbDlrZcpXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1zZ1xyXG59XHJcblxyXG4vKipcclxuICog6I635Y+W6IyD5Zu05paH5pys55qE5L2/55So6K+05piOXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SG93VG9Vc2VSYW5nZVRleHQodHlwZT86IFJhbmdlVGV4dFR5cGVFbnVtKSB7XHJcbiAgICBjb25zdCBpMThuID0gZ2V0WEpzS2l0STE4bkluc3RhbmNlKClcclxuICAgIGxldCB0eHQgPSBcIlwiXHJcblxyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSBSYW5nZVRleHRUeXBlRW51bS7pobXpnaLojIPlm7Q6XHJcbiAgICAgICAgICAgIHR4dCA9IGkxOG4udChYSnNLaXRUcmFuc2xhdGlvbktleU5hbWVFbnVtLumhtemdouiMg+WbtOaWh+acrOaPkOekuuivrSlcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlIFJhbmdlVGV4dFR5cGVFbnVtLuW3peS9nOihqOiMg+WbtDpcclxuICAgICAgICAgICAgdHh0ID0gaTE4bi50KFhKc0tpdFRyYW5zbGF0aW9uS2V5TmFtZUVudW0u5bel5L2c6KGo6IyD5Zu05paH5pys5o+Q56S66K+tKVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgUmFuZ2VUZXh0VHlwZUVudW0u5a2X56ym6IyD5Zu0OlxyXG4gICAgICAgICAgICB0eHQgPSBpMThuLnQoWEpzS2l0VHJhbnNsYXRpb25LZXlOYW1lRW51bS7lrZfnrKbojIPlm7TmlofmnKzmj5DnpLror60pXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSBSYW5nZVRleHRUeXBlRW51bS7mlofmnKzkvY3nva7ojIPlm7Q6XHJcbiAgICAgICAgICAgIHR4dCA9IGkxOG4udChYSnNLaXRUcmFuc2xhdGlvbktleU5hbWVFbnVtLuaWh+acrOS9jee9ruiMg+WbtOaWh+acrOaPkOekuuivrSlcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICB0eHQgPSBpMThuLnQoWEpzS2l0VHJhbnNsYXRpb25LZXlOYW1lRW51bS7pu5jorqTojIPlm7TmlofmnKzmj5DnpLror60pXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHR4dFxyXG59XHJcblxyXG4vKipcclxuICog5Yig6Zmk5a2X56ym5Liy5YmN6Z2i55qE5LiL5YiS57q/XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlU3RhcnRMaW5lKHN0cjogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gbFRyaW1TdHJpbmcoc3RyLCBcIl9cIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIoOmZpOaJgOacieepuueZveWtl+esplxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVdoaXRlU3BhY2Uoc3RyOiBzdHJpbmcpIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIucmVwbGFjZUFsbCgvXFxzKy9nLCBcIlwiKVxyXG59XHJcbiJdfQ==