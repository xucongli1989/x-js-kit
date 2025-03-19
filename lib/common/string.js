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
    msg.message = i18n.t(_data.XJsKitTranslationKeyNameEnum.格式不正确只支持单个范围请删除逗号);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vc3RyaW5nLnRzIl0sIm5hbWVzIjpbInNwbGl0U3RyaW5nIiwic3RyIiwic3RlcENoYXJDb3VudCIsInN0ckxlbiIsImxlbmd0aCIsInJlc3VsdCIsInN0YXJ0SW5kZXgiLCJwdXNoIiwic3Vic3RyIiwiZWxsaXBzaXMiLCJsZW4iLCJlbGxpcHNpc0NoYXJzIiwic3Vic3RyaW5nIiwiZ2V0TnVtYmVyIiwibXQiLCJtYXRjaCIsInBhcnROdW1iZXIiLCJwYXJzZUZsb2F0IiwidHJpbSIsInJlcGxhY2UiLCJsVHJpbSIsInJUcmltIiwibFRyaW1TdHJpbmciLCJzdHJUb1JlbW92ZSIsImlzSWdub3JlQ2FzZSIsIlJlZ0V4cCIsInJUcmltU3RyaW5nIiwidHJpbVN0cmluZyIsInRyaW1IVE1MIiwiaHRtbCIsImh0bWxMZWZ0UmlnaHRCbGFuayIsInRlc3QiLCJlcXVhbHNJZ25vcmVDYXNlIiwiYSIsImIiLCJ0b1VwcGVyQ2FzZSIsImVxdWFsc0lnbm9yZUNhc2VBbmRUcmltIiwiY29udGFpbnMiLCJzb3VyY2UiLCJzZWFyY2giLCJzb3VyY2VTdHIiLCJpbmNsdWRlcyIsImVzY2FwZUh0bWwiLCJTdHJpbmciLCJzIiwiaHRtbEVudGl0eU1hcCIsInJlcGVhdCIsInJlcGVhdENvdW50IiwiY291bnQiLCJqb2luIiwiQnVpbGRlciIsIl9hcnIiLCJ0b1N0cmluZyIsImJ1aWxkZXIiLCJmb3JtYXQiLCJ0b2tlbiIsInJlbW92ZUJsYW5rTGluZXMiLCJyZXBsYWNlTmV3bGluZVRvQnIiLCJnZXRDaGluZXNlV29yZCIsImNoaW5lc2VDaGFyIiwiY29tYmluZVN0ciIsInNlcGFyYXRvciIsInN1YlN0cnMiLCJmaWx0ZXIiLCJrIiwiaXNSYW5nZVRleHQiLCJpc09ubHlTdXBwb3J0T25lUmFuZ2UiLCJpMThuIiwibXNnIiwiTWV0aG9kUmVzdWx0IiwiaXNTdWNjZXNzIiwibWVzc2FnZSIsInQiLCJYSnNLaXRUcmFuc2xhdGlvbktleU5hbWVFbnVtIiwi5b+F6aG75o+Q5L6b5LiA5Liq5pyJ5pWI55qE6IyD5Zu0IiwiaXRlbVJlZyIsIml0ZW1zIiwic3BsaXQiLCLmoLzlvI/kuI3mraPnoa7lj6rmlK/mjIHljZXkuKrojIPlm7Tor7fliKDpmaTpgJflj7ciLCJpdGVtIiwiYXJyIiwi5qC85byP5LiN5q2j56GuIiwi5qC85byP5LiN5q2j56Gu5b+F6aG75Li65pW05pWw5LiU5LiN6IO95Li6MCIsIuW3puS+p+aVsOWtl+S4uui0n+aVsOaXtuWPs+S+p+aVsOWtl+W/hemhu+S5n+WQjOaXtuS4uui0n+aVsCIsIuagvOW8j+S4jeato+ehruW3puS+p+aVsOWtl+W/hemhu+Wwj+S6juetieS6juWPs+S+p+aVsOWtlyIsInJlbW92ZVN0YXJ0TGluZSIsInJlbW92ZVdoaXRlU3BhY2UiLCJyZXBsYWNlQWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNPLFNBQVNBLFdBQVQsQ0FBcUJDLEdBQXJCLEVBQWtDQyxhQUFsQyxFQUFtRTtBQUN0RSxNQUFJLENBQUNELEdBQUQsSUFBUUMsYUFBYSxJQUFJLENBQTdCLEVBQWdDO0FBQzVCLFdBQU8sRUFBUDtBQUNIOztBQUNELE1BQU1DLE1BQU0sR0FBR0YsR0FBRyxDQUFDRyxNQUFuQjs7QUFDQSxNQUFJRCxNQUFNLElBQUlELGFBQWQsRUFBNkI7QUFDekIsV0FBTyxDQUFDRCxHQUFELENBQVA7QUFDSDs7QUFDRCxNQUFNSSxNQUFnQixHQUFHLEVBQXpCO0FBQ0EsTUFBSUMsVUFBVSxHQUFHLENBQWpCOztBQUNBLFNBQU9BLFVBQVUsR0FBR0gsTUFBcEIsRUFBNEI7QUFDeEJFLElBQUFBLE1BQU0sQ0FBQ0UsSUFBUCxDQUFZTixHQUFHLENBQUNPLE1BQUosQ0FBV0YsVUFBWCxFQUF1QkosYUFBdkIsQ0FBWjtBQUNBSSxJQUFBQSxVQUFVLElB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QyxTQUFPcUIsV0FBVyxDQUFDckIsR0FBRCxFQUFNLEdBQU4sQ0FBbEI7QUFDSDtBQUVEO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU3FGLGdCQUFULENBQTBCckYsR0FBMUIsRUFBdUM7QUFDMUMsTUFBSSxDQUFDQSxHQUFMLEVBQVU7QUFDTixXQUFPLEVBQVA7QUFDSDs7QUFDRCxTQUFPQSxHQUFHLENBQUNzRixVQUFKLENBQWUsTUFBZixFQUF1QixFQUF2QixDQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwYXJ0TnVtYmVyLCBodG1sTGVmdFJpZ2h0QmxhbmssIGNoaW5lc2VDaGFyIH0gZnJvbSBcIi4uL2NvbnN0YW50L3JlZ2V4XCJcclxuaW1wb3J0IHsgZXNjYXBlUmVnIH0gZnJvbSBcIi4vcmVnZXhwXCJcclxuaW1wb3J0IHsgaHRtbEVudGl0eU1hcCB9IGZyb20gXCIuLi9jb25zdGFudC9tYXBcIlxyXG5pbXBvcnQgeyBNZXRob2RSZXN1bHQgfSBmcm9tIFwiLi4vZW50aXR5L21ldGhvZC1yZXN1bHRcIlxyXG5pbXBvcnQgeyB0b0ludCB9IGZyb20gXCIuL2NvbnZlcnRcIlxyXG5pbXBvcnQgeyBnZXRYSnNLaXRJMThuSW5zdGFuY2UgfSBmcm9tIFwiLi4vaTE4blwiXHJcbmltcG9ydCB7IFhKc0tpdFRyYW5zbGF0aW9uS2V5TmFtZUVudW0gfSBmcm9tIFwiLi4vaTE4bi9kYXRhXCJcclxuXHJcbi8qKlxyXG4gKiDlsIblrZfnrKbkuLLmjInkuIDlrprlrZfnrKbmlbDmi4bliIbmiJDlrZfnrKbkuLLmlbDnu4RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzcGxpdFN0cmluZyhzdHI6IHN0cmluZywgc3RlcENoYXJDb3VudDogbnVtYmVyKTogc3RyaW5nW10ge1xyXG4gICAgaWYgKCFzdHIgfHwgc3RlcENoYXJDb3VudCA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdXHJcbiAgICB9XHJcbiAgICBjb25zdCBzdHJMZW4gPSBzdHIubGVuZ3RoXHJcbiAgICBpZiAoc3RyTGVuIDw9IHN0ZXBDaGFyQ291bnQpIHtcclxuICAgICAgICByZXR1cm4gW3N0cl1cclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3VsdDogc3RyaW5nW10gPSBbXVxyXG4gICAgbGV0IHN0YXJ0SW5kZXggPSAwXHJcbiAgICB3aGlsZSAoc3RhcnRJbmRleCA8IHN0ckxlbikge1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKHN0ci5zdWJzdHIoc3RhcnRJbmRleCwgc3RlcENoYXJDb3VudCkpXHJcbiAgICAgICAgc3RhcnRJbmRleCArPSBzdGVwQ2hhckNvdW50XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmiKrlj5blrZfnrKbkuLLlubbku6XnnIHnlaXnrKblj7fmmL7npLrlrZfnrKbkuLJcclxuICogQHBhcmFtIHN0ciDljp/lrZfnrKbkuLJcclxuICogQHBhcmFtIGxlbiDopoHkv53nlZnnmoTlrZfnrKbplb/luqZcclxuICogQHBhcmFtIGVsbGlwc2lzQ2hhcnMg6KKr5oiq5pat55qE5a2X56ym5pi+56S655qE56ym5Y+3XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZWxsaXBzaXMoc3RyOiBzdHJpbmcsIGxlbjogbnVtYmVyLCBlbGxpcHNpc0NoYXJzID0gXCIuLi5cIik6IHN0cmluZyB7XHJcbiAgICBpZiAoIXN0ciB8fCBsZW4gPD0gMCkge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICBpZiAoc3RyLmxlbmd0aCA8PSBsZW4pIHtcclxuICAgICAgICByZXR1cm4gc3RyXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnN1YnN0cmluZygwLCBsZW4pICsgZWxsaXBzaXNDaGFyc1xyXG59XHJcblxyXG4vKipcclxuICog5LuO5a2X56ym5Liy5Lit5o+Q5Y+W5pWw5a2X77yI5Y+v5bim5bCP5pWw54K577yJ44CC5aaC77yaXCJhYmMxMjMuMDFjZGVcIi0+MTIzLjAxXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TnVtYmVyKHN0cjogc3RyaW5nKTogbnVtYmVyIHwgbnVsbCB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICBjb25zdCBtdCA9IHN0ci5tYXRjaChwYXJ0TnVtYmVyKVxyXG4gICAgaWYgKCFtdCB8fCAhbXQubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIHJldHVybiBwYXJzZUZsb2F0KG10WzBdKVxyXG59XHJcblxyXG4vKipcclxuICog5Y675bem5Y+z56m65qC8XHJcbiAqIEBwYXJhbSAgc3RyIOW+heWkhOeQhuWtl+espuS4slxyXG4gKiBAcmV0dXJucyAg5aSE55CG5ZCO55qE5a2X56ym5LiyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJpbShzdHI6IHN0cmluZykge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCBcIlwiKVxyXG59XHJcblxyXG4vKipcclxuICog5Y675bem56m65qC8XHJcbiAqIEBwYXJhbSAgc3RyIOW+heWkhOeQhuWtl+espuS4slxyXG4gKiBAcmV0dXJucyAg5aSE55CG5ZCO55qE5a2X56ym5LiyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbFRyaW0oc3RyOiBzdHJpbmcpIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXlxccysvLCBcIlwiKVxyXG59XHJcblxyXG4vKipcclxuICog5Y675Y+z56m65qC8XHJcbiAqIEBwYXJhbSAgc3RyIOW+heWkhOeQhuWtl+espuS4slxyXG4gKiBAcmV0dXJucyAg5aSE55CG5ZCO55qE5YC8XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gclRyaW0oc3RyOiBzdHJpbmcpIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxzKyQvLCBcIlwiKVxyXG59XHJcblxyXG4vKipcclxuICog5Y675o6J5bem6L6555qE5oyH5a6a5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBzdHIg5b6F5aSE55CG55qE5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBzdHJUb1JlbW92ZSDpnIDopoHnp7vpmaTnmoTlrZfnrKbkuLJcclxuICogQHBhcmFtIGlzSWdub3JlQ2FzZSDmmK/lkKblv73nlaXlpKflsI/lhplcclxuICogQHJldHVybnMg5aSE55CG57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbFRyaW1TdHJpbmcoc3RyOiBzdHJpbmcsIHN0clRvUmVtb3ZlOiBzdHJpbmcsIGlzSWdub3JlQ2FzZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICBpZiAoIXN0clRvUmVtb3ZlKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0clxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoYF4oJHtlc2NhcGVSZWcoc3RyVG9SZW1vdmUpfSkqYCwgaXNJZ25vcmVDYXNlID8gXCJnaVwiIDogXCJnXCIpLCBcIlwiKVxyXG59XHJcblxyXG4vKipcclxuICog5Y675o6J5Y+z6L6555qE5oyH5a6a5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBzdHIg5b6F5aSE55CG55qE5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBzdHJUb1JlbW92ZSDpnIDopoHnp7vpmaTnmoTlrZfnrKbkuLJcclxuICogQHBhcmFtIGlzSWdub3JlQ2FzZSDmmK/lkKblv73nlaXlpKflsI/lhplcclxuICogQHJldHVybnMg5aSE55CG57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gclRyaW1TdHJpbmcoc3RyOiBzdHJpbmcsIHN0clRvUmVtb3ZlOiBzdHJpbmcsIGlzSWdub3JlQ2FzZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICBpZiAoIXN0clRvUmVtb3ZlKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0clxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoYCgke2VzY2FwZVJlZyhzdHJUb1JlbW92ZSl9KSokYCwgaXNJZ25vcmVDYXNlID8gXCJnaVwiIDogXCJnXCIpLCBcIlwiKVxyXG59XHJcblxyXG4vKipcclxuICog5Y675bem5Y+z5oyH5a6a55qE5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBzdHIg5b6F5aSE55CG55qE5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBzdHJUb1JlbW92ZSDpnIDopoHnp7vpmaTnmoTlrZfnrKbkuLJcclxuICogQHBhcmFtIGlzSWdub3JlQ2FzZSDmmK/lkKblv73nlaXlpKflsI/lhplcclxuICogQHJldHVybnMg5aSE55CG57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJpbVN0cmluZyhzdHI6IHN0cmluZywgc3RyVG9SZW1vdmU6IHN0cmluZywgaXNJZ25vcmVDYXNlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIGlmICghc3RyVG9SZW1vdmUpIHtcclxuICAgICAgICByZXR1cm4gc3RyXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChgKF4oJHtlc2NhcGVSZWcoc3RyVG9SZW1vdmUpfSkqKXwoKCR7ZXNjYXBlUmVnKHN0clRvUmVtb3ZlKX0pKiQpYCwgaXNJZ25vcmVDYXNlID8gXCJnaVwiIDogXCJnXCIpLCBcIlwiKVxyXG59XHJcblxyXG4vKipcclxuICog5LuOaHRtbOWtl+espuS4suS4reenu+mZpOW3puWPs+epuueZveWNoOS9jeesplxyXG4gKiBAcGFyYW0gaHRtbCDlvoXlpITnkIbnmoTlrZfnrKbkuLJcclxuICogQHJldHVybnMg5aSE55CG57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJpbUhUTUwoaHRtbDogc3RyaW5nKSB7XHJcbiAgICBsZXQgc3RyID0gaHRtbFxyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgd2hpbGUgKGh0bWxMZWZ0UmlnaHRCbGFuay50ZXN0KHN0cikpIHtcclxuICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShodG1sTGVmdFJpZ2h0QmxhbmssIFwiXCIpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq3kuKTkuKrlrZfnrKbkuLLmmK/lkKbnm7jnrYnvvIjlv73nlaXlpKflsI/lhpnvvIlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHNJZ25vcmVDYXNlKGE6IHN0cmluZywgYjogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gKGEgfHwgXCJcIikudG9VcHBlckNhc2UoKSA9PSAoYiB8fCBcIlwiKS50b1VwcGVyQ2FzZSgpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq3kuKTkuKrlrZfnrKbkuLLmmK/lkKbnm7jnrYnvvIjlv73nlaXlpKflsI/lhpkr5Y675bem5Y+z56m655m977yJXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxzSWdub3JlQ2FzZUFuZFRyaW0oYTogc3RyaW5nLCBiOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBlcXVhbHNJZ25vcmVDYXNlKHRyaW0oYSksIHRyaW0oYikpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmjIflrprmupDlrZfnrKbkuLJzb3VyY2XkuK3mmK/lkKbljIXlkKtzZWFyY2jlrZfnrKbkuLJcclxuICogQHBhcmFtICBzb3VyY2Ug5rqQ5a2X56ym5LiyXHJcbiAqIEBwYXJhbSAgc2VhcmNoIOimgeafpeaJvueahOWtl+espuS4slxyXG4gKiBAcGFyYW0gIGlzSWdub3JlQ2FzZSDmmK/lkKblv73nlaXlpKflsI/lhpko6buY6K6k5Li6ZmFsc2UpXHJcbiAqIEByZXR1cm5zICDnu5PmnpxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb250YWlucyhzb3VyY2U6IHN0cmluZywgc2VhcmNoOiBzdHJpbmcsIGlzSWdub3JlQ2FzZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICBsZXQgc291cmNlU3RyID0gc291cmNlXHJcbiAgICBsZXQgc3RyID0gc2VhcmNoXHJcbiAgICBpZiAoIXNvdXJjZVN0cikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgaWYgKHN0ciA9PT0gXCJcIikge1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgaWYgKGlzSWdub3JlQ2FzZSkge1xyXG4gICAgICAgIHNvdXJjZVN0ciA9IHNvdXJjZVN0ci50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgc3RyID0gc3RyLnRvVXBwZXJDYXNlKClcclxuICAgIH1cclxuICAgIHJldHVybiBzb3VyY2VTdHIuaW5jbHVkZXMoc3RyKVxyXG59XHJcblxyXG4vKipcclxuICog5bCGaHRtbOagh+etvui9rOaNouS4uuWunuS9k+W9ouW8j1xyXG4gKiBAcGFyYW0gIGh0bWwg6ZyA6KaB6KKr5pu/5o2i55qEaHRtbFxyXG4gKiBAcmV0dXJucyAg6L2s5o2i5ZCO55qE5YC8XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlSHRtbChodG1sOiBzdHJpbmcpIHtcclxuICAgIGlmICghaHRtbCkge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gU3RyaW5nKGh0bWwpLnJlcGxhY2UoL1smPD5cIicvXS9nLCAocykgPT4gaHRtbEVudGl0eU1hcFtzXSlcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSAgIHN0ciDopoHph43lpI3nmoTlrZfnrKbkuLJcclxuICogQHBhcmFtICAgcmVwZWF0Q291bnQg6YeN5aSN5qyh5pWwXHJcbiAqIEByZXR1cm5zICDmlrDnmoTlrZfnrKbkuLJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZXBlYXQoc3RyOiBzdHJpbmcsIHJlcGVhdENvdW50OiBudW1iZXIpIHtcclxuICAgIGxldCBjb3VudCA9IHJlcGVhdENvdW50XHJcbiAgICBpZiAoIXN0ciB8fCBjb3VudCA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIGNvbnN0IHMgPSBbXVxyXG4gICAgd2hpbGUgKGNvdW50LS0pIHtcclxuICAgICAgICBzLnB1c2goc3RyKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHMuam9pbihcIlwiKVxyXG59XHJcblxyXG4vKipcclxuICog5a2X56ym5Liy5om56YeP5p6E5bu65Zmo77yI5peg6ZyA5L2/55SoXCIrXCLov5vooYzlrZfnrKbkuLLnmoTmi7zmjqXvvIznm7TmjqXkvb/nlKjmraTlr7nosaHnmoRhcHBlbmTmlrnms5XlkI7vvIzlho10b1N0cmluZ+WNs+WPr+W+l+WIsOaLvOWlveeahOWtl+espuS4su+8iVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJ1aWxkZXI8VD4ge1xyXG4gICAgcHJpdmF0ZSBfYXJyOiBUW10gPSBbXVxyXG4gICAgLyoqXHJcbiAgICAgKiDov73liqDpoblcclxuICAgICAqIEBwYXJhbSBpdGVtcyDlvoXov73liqDnmoTpoblcclxuICAgICAqIEByZXR1cm5zIHRoaXNcclxuICAgICAqL1xyXG4gICAgYXBwZW5kKC4uLml0ZW1zOiBUW10pIHtcclxuICAgICAgICB0aGlzLl9hcnIucHVzaCguLi5pdGVtcylcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDov5Tlm57lt7LlkIjlubbnmoTmiYDmnInpobnnmoTlrZfnrKbkuLJcclxuICAgICAqL1xyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Fyci5qb2luKFwiXCIpXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOa4heepuuW9k+WJjeeahOaehOW7uuWZqOS4reeahOaJgOaciemhuVxyXG4gICAgICogQHJldHVybnMgdGhpc1xyXG4gICAgICovXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLl9hcnIgPSBbXVxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOi/lOWbnuaehOW7uuWZqOS4reaJgOaciemhueeahOWtl+espuS4suaAu+eahOWtl+espumVv+W6plxyXG4gICAgICovXHJcbiAgICBsZW5ndGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKS5sZW5ndGhcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGJ1aWxkZXIgPSBCdWlsZGVyXHJcblxyXG4vKipcclxuICog5L2/55So5qih5p2/5qC85byP5YyW5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBzdHIg5qih5p2/77yM5aaC77yaXCLku4rlpKnmmK/mmJ/mnJ97MH3vvIzlt7LmiJDkuqR7MX3ljZXvvIFcIlxyXG4gKiBAcGFyYW0gYXJncyDmqKHmnb/kuK3nmoTlj4LmlbBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQoc3RyOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICBpZiAoIXN0ciB8fCAhYXJncy5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gc3RyXHJcbiAgICB9XHJcbiAgICBsZXQgcmVzdWx0ID0gc3RyXHJcbiAgICBmb3IgKGxldCB0b2tlbiA9IDA7IHRva2VuIDwgYXJncy5sZW5ndGg7IHRva2VuKyspIHtcclxuICAgICAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZShuZXcgUmVnRXhwKFwiXFxcXHtcIiArIHRva2VuICsgXCJcXFxcfVwiLCBcImdpXCIpLCBhcmdzW3Rva2VuXSlcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHRcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIoOmZpOepuueZveihjO+8iOepuueZveihjOaYr+aMh++8muatpOihjOS4uuepuueZveS4lOacq+WwvuS4uiBcXHIg5oiWIFxcbu+8iVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUJsYW5rTGluZXMoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKltcXHJcXG5dL2dtLCBcIlwiKVxyXG59XHJcblxyXG4vKipcclxuICog5bCG5paH5pys5Lit55qE5a2X56ym5Liy5b2i5byP5oiW5o2i6KGM56ym5b2i5byP55qEIFwiXFxyXFxuXCIg5ZKMIFwiXFxuXCIg57uf5LiA5pu/5o2i5oiQIDxici8+XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZU5ld2xpbmVUb0JyKHN0cjogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhcXFxcclxcXFxuKXwoXFxyXFxuKS9naSwgXCI8YnIvPlwiKS5yZXBsYWNlKC8oXFxcXG4pfChcXG4pL2dpLCBcIjxici8+XCIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDojrflj5blrZfnrKbkuLLkuK3nmoTkuK3mloflrZfnrKZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGluZXNlV29yZChzdHI6IHN0cmluZykge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgY29uc3QgbWF0Y2ggPSBzdHIubWF0Y2gobmV3IFJlZ0V4cChjaGluZXNlQ2hhciwgXCJnXCIpKVxyXG4gICAgaWYgKCFtYXRjaCB8fCAhbWF0Y2gubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIHJldHVybiBtYXRjaC5qb2luKFwiXCIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmjInliIbpmpTnrKblkIjlubblrZfnrKbkuLJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lU3RyKHNlcGFyYXRvcjogc3RyaW5nLCAuLi5zdWJTdHJzOiBzdHJpbmdbXSkge1xyXG4gICAgaWYgKCFzdWJTdHJzIHx8ICFzdWJTdHJzLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3ViU3Rycy5maWx0ZXIoKGspID0+ICEhaykuam9pbihzZXBhcmF0b3IpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq3lrZfnrKbkuLLmmK/lkKbooajnpLrkuIDkuKrpm4blkIjkuK3nmoTmn5DkuIDpobnmiJbmn5DkuIDkuKrojIPlm7TvvIjms6jvvJrkuIDkuKrojIPlm7TnlKjoi7HmloflhpLlj7fliIbpmpTvvIzlpJrkuKrojIPlm7TnlKjoi7HmlofpgJflj7fliIbpmpTjgILoh6rliqjlhbzlrrnlhajljYrop5LliIbpmpTnrKblkozlpJrkvZnnmoTnqbrmoLzvvInvvIzlpoLvvJpcclxuICog44CQMeOAkeihqOekuuesrDHpoblcclxuICog44CQMuOAkeihqOekuuesrDLpoblcclxuICog44CQMjo144CR6KGo56S656ysMumhueWIsOesrDXpoblcclxuICog44CQLTHjgJHooajnpLrmnIDlkI7kuIDpoblcclxuICog44CQLTLjgJHooajnpLrlgJLmlbDnrKwy6aG5XHJcbiAqIOOAkC01Oi0y44CR6KGo56S65YCS5pWw56ysNemhueWIsOWAkuaVsOesrDLpoblcclxuICog44CQMiw0OjcsLTU6LTLjgJHooajnpLrnrKwy6aG55ZKM56ysNOWIsDfpobnlkozlgJLmlbDnrKw16aG56Iez5YCS5pWw56ysMumhuVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUmFuZ2VUZXh0KHN0cjogc3RyaW5nLCBpc09ubHlTdXBwb3J0T25lUmFuZ2U/OiBib29sZWFuKSB7XHJcbiAgICBjb25zdCBpMThuID0gZ2V0WEpzS2l0STE4bkluc3RhbmNlKClcclxuICAgIGNvbnN0IG1zZyA9IG5ldyBNZXRob2RSZXN1bHQoKVxyXG4gICAgc3RyID0gc3RyPy5yZXBsYWNlKC/vvIwvZywgXCIsXCIpLnJlcGxhY2UoL++8mi9nLCBcIjpcIikucmVwbGFjZSgvXFxzL2csIFwiXCIpXHJcbiAgICBzdHIgPSB0cmltU3RyaW5nKHN0ciwgXCIsXCIpXHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIG1zZy5pc1N1Y2Nlc3MgPSBmYWxzZVxyXG4gICAgICAgIG1zZy5tZXNzYWdlID0gaTE4bi50KFhKc0tpdFRyYW5zbGF0aW9uS2V5TmFtZUVudW0u5b+F6aG75o+Q5L6b5LiA5Liq5pyJ5pWI55qE6IyD5Zu0KVxyXG4gICAgICAgIHJldHVybiBtc2dcclxuICAgIH1cclxuICAgIGNvbnN0IGl0ZW1SZWcgPSAvXi0/XFxkKyQvXHJcbiAgICBjb25zdCBpdGVtcyA9IHN0ci5zcGxpdChcIixcIilcclxuXHJcbiAgICBpZiAoaXNPbmx5U3VwcG9ydE9uZVJhbmdlICYmIGl0ZW1zLmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgICAgbXNnLmlzU3VjY2VzcyA9IGZhbHNlXHJcbiAgICAgICAgbXNnLm1lc3NhZ2UgPSBpMThuLnQoWEpzS2l0VHJhbnNsYXRpb25LZXlOYW1lRW51bS7moLzlvI/kuI3mraPnoa7lj6rmlK/mjIHljZXkuKrojIPlm7Tor7fliKDpmaTpgJflj7cpXHJcbiAgICAgICAgcmV0dXJuIG1zZ1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xyXG4gICAgICAgIGNvbnN0IGFyciA9IGl0ZW0uc3BsaXQoXCI6XCIpXHJcbiAgICAgICAgaWYgKCEoYXJyLmxlbmd0aCA9PSAxIHx8IGFyci5sZW5ndGggPT0gMikpIHtcclxuICAgICAgICAgICAgbXNnLmlzU3VjY2VzcyA9IGZhbHNlXHJcbiAgICAgICAgICAgIG1zZy5tZXNzYWdlID0gaTE4bi50KFhKc0tpdFRyYW5zbGF0aW9uS2V5TmFtZUVudW0u5qC85byP5LiN5q2j56GuKVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWl0ZW1SZWcudGVzdChhcnJbMF0pIHx8ICF0b0ludChhcnJbMF0pKSB7XHJcbiAgICAgICAgICAgIG1zZy5pc1N1Y2Nlc3MgPSBmYWxzZVxyXG4gICAgICAgICAgICBtc2cubWVzc2FnZSA9IGkxOG4udChYSnNLaXRUcmFuc2xhdGlvbktleU5hbWVFbnVtLuagvOW8j+S4jeato+ehruW/hemhu+S4uuaVtOaVsOS4lOS4jeiDveS4ujApXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhcnIubGVuZ3RoID09IDIgJiYgKCFpdGVtUmVnLnRlc3QoYXJyWzFdKSB8fCAhdG9JbnQoYXJyWzFdKSkpIHtcclxuICAgICAgICAgICAgbXNnLmlzU3VjY2VzcyA9IGZhbHNlXHJcbiAgICAgICAgICAgIG1zZy5tZXNzYWdlID0gaTE4bi50KFhKc0tpdFRyYW5zbGF0aW9uS2V5TmFtZUVudW0u5qC85byP5LiN5q2j56Gu5b+F6aG75Li65pW05pWw5LiU5LiN6IO95Li6MClcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyci5sZW5ndGggPT0gMiAmJiB0b0ludChhcnJbMF0pIDwgMCAmJiB0b0ludChhcnJbMV0pID4gMCkge1xyXG4gICAgICAgICAgICBtc2cuaXNTdWNjZXNzID0gZmFsc2VcclxuICAgICAgICAgICAgbXNnLm1lc3NhZ2UgPSBpMThuLnQoWEpzS2l0VHJhbnNsYXRpb25LZXlOYW1lRW51bS7lt6bkvqfmlbDlrZfkuLrotJ/mlbDml7blj7PkvqfmlbDlrZflv4XpobvkuZ/lkIzml7bkuLrotJ/mlbApXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhcnIubGVuZ3RoID09IDIgJiYgdG9JbnQoYXJyWzBdKSA+IDAgJiYgdG9JbnQoYXJyWzFdKSA8IDApIHtcclxuICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyci5sZW5ndGggPT0gMiAmJiB0b0ludChhcnJbMF0pID4gdG9JbnQoYXJyWzFdKSkge1xyXG4gICAgICAgICAgICBtc2cuaXNTdWNjZXNzID0gZmFsc2VcclxuICAgICAgICAgICAgbXNnLm1lc3NhZ2UgPSBpMThuLnQoWEpzS2l0VHJhbnNsYXRpb25LZXlOYW1lRW51bS7moLzlvI/kuI3mraPnoa7lt6bkvqfmlbDlrZflv4XpobvlsI/kuo7nrYnkuo7lj7PkvqfmlbDlrZcpXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1zZ1xyXG59XHJcblxyXG4vKipcclxuICog5Yig6Zmk5a2X56ym5Liy5YmN6Z2i55qE5LiL5YiS57q/XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlU3RhcnRMaW5lKHN0cjogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gbFRyaW1TdHJpbmcoc3RyLCBcIl9cIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIoOmZpOaJgOacieepuueZveWtl+esplxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVdoaXRlU3BhY2Uoc3RyOiBzdHJpbmcpIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIucmVwbGFjZUFsbCgvXFxzKy9nLCBcIlwiKVxyXG59XHJcbiJdfQ==