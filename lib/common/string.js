"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repeat = exports.escapeHtml = exports.contains = exports.trimHTML = exports.trimString = exports.rTrimString = exports.lTrimString = exports.rTrim = exports.lTrim = exports.trim = exports.getNumber = exports.ellipsis = exports.splitString = void 0;

var _regex = require("../constant/regex");

var _map = require("../constant/map");

/**
 * 将字符串按一定字符数拆分成字符串数组
 */
var splitString = function splitString(str, stepCharCount) {
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
};
/**
 * 截取字符串并以省略符号显示字符串
 * @param str 原字符串
 * @param len 要保留的字符长度
 * @param ellipsisChars 被截断的字符显示的符号
 */


exports.splitString = splitString;

var ellipsis = function ellipsis(str, len) {
  var ellipsisChars = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "...";

  if (!str || len <= 0) {
    return "";
  }

  if (str.length <= len) {
    return str;
  }

  return str.substring(0, len) + ellipsisChars;
};
/**
 * 从字符串中提取数字（可带小数点）。如："abc123.01cde"->123.01
 */


exports.ellipsis = ellipsis;

var getNumber = function getNumber(str) {
  if (!str) {
    return null;
  }

  var mt = str.match(_regex.partNumber);

  if (!mt || !mt.length) {
    return null;
  }

  return parseFloat(mt[0]);
};
/**
 * 去左右空格
 * @param  str 待处理字符串
 * @returns  处理后的字符串
 */


exports.getNumber = getNumber;

var trim = function trim(str) {
  if (!str) {
    return "";
  }

  return str.replace(/^\s+|\s+$/g, "");
};
/**
 * 去左空格
 * @param  str 待处理字符串
 * @returns  处理后的字符串
 */


exports.trim = trim;

var lTrim = function lTrim(str) {
  if (!str) {
    return "";
  }

  return str.replace(/^\s+/, "");
};
/**
 * 去右空格
 * @param  str 待处理字符串
 * @returns  处理后的值
 */


exports.lTrim = lTrim;

var rTrim = function rTrim(str) {
  if (!str) {
    return "";
  }

  return str.replace(/\s+$/, "");
};
/**
 * 去掉左边的指定字符串
 * @param str 待处理的字符串
 * @param strToRemove 需要移除的字符串
 * @param isIgnoreCase 是否忽略大小写
 * @returns 处理结果
 */


exports.rTrim = rTrim;

var lTrimString = function lTrimString(str, strToRemove) {
  var isIgnoreCase = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!str) {
    return "";
  }

  if (!strToRemove) {
    return str;
  }

  return str.replace(new RegExp("^(".concat(strToRemove, ")*"), isIgnoreCase ? "gi" : "g"), "");
};
/**
 * 去掉右边的指定字符串
 * @param str 待处理的字符串
 * @param strToRemove 需要移除的字符串
 * @param isIgnoreCase 是否忽略大小写
 * @returns 处理结果
 */


exports.lTrimString = lTrimString;

var rTrimString = function rTrimString(str, strToRemove) {
  var isIgnoreCase = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!str) {
    return "";
  }

  if (!strToRemove) {
    return str;
  }

  return str.replace(new RegExp("(".concat(strToRemove, ")*$"), isIgnoreCase ? "gi" : "g"), "");
};
/**
 * 去左右指定的字符串
 * @param str 待处理的字符串
 * @param strToRemove 需要移除的字符串
 * @param isIgnoreCase 是否忽略大小写
 * @returns 处理结果
 */


exports.rTrimString = rTrimString;

var trimString = function trimString(str, strToRemove) {
  var isIgnoreCase = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!str) {
    return "";
  }

  if (!strToRemove) {
    return str;
  }

  return str.replace(new RegExp("(^(".concat(strToRemove, ")*)|((").concat(strToRemove, ")*$)"), isIgnoreCase ? "gi" : "g"), "");
};
/**
 * 从html字符串中移除左右空白占位符
 * @param str 待处理的字符串
 * @returns 处理结果
 */


exports.trimString = trimString;

var trimHTML = function trimHTML(str) {
  if (!str) {
    return "";
  }

  while (_regex.htmlLeftRightBlank.test(str)) {
    str = str.replace(_regex.htmlLeftRightBlank, "");
  }

  return str;
};
/**
 * 指定源字符串sourceStr中是否包含str字符串
 * @param  sourceStr 源字符串
 * @param  str 要查找的字符串
 * @param  isIgnoreCase 是否忽略大小写(默认为false)
 * @returns  结果
 */


exports.trimHTML = trimHTML;

var contains = function contains(sourceStr, str) {
  var isIgnoreCase = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

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
};
/**
* 将html标签转换为实体形式
* @param  html 需要被替换的html
* @returns  转换后的值
*/


exports.contains = contains;

var escapeHtml = function escapeHtml(html) {
  if (!html) {
    return "";
  }

  return String(html).replace(/[&<>"'\/]/g, function (s) {
    return _map.htmlEntityMap[s];
  });
};
/**
 * @param   str 要重复的字符串
 * @param   count 重复次数
 * @returns  新的字符串
 */


exports.escapeHtml = escapeHtml;

var repeat = function repeat(str, count) {
  if (!str || count <= 0) {
    return "";
  }

  var s = [];

  while (count--) {
    s.push(str);
  }

  return s.join('');
};

exports.repeat = repeat;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vc3RyaW5nLnRzIl0sIm5hbWVzIjpbInNwbGl0U3RyaW5nIiwic3RyIiwic3RlcENoYXJDb3VudCIsInN0ckxlbiIsImxlbmd0aCIsInJlc3VsdCIsInN0YXJ0SW5kZXgiLCJwdXNoIiwic3Vic3RyIiwiZWxsaXBzaXMiLCJsZW4iLCJlbGxpcHNpc0NoYXJzIiwic3Vic3RyaW5nIiwiZ2V0TnVtYmVyIiwibXQiLCJtYXRjaCIsInBhcnROdW1iZXIiLCJwYXJzZUZsb2F0IiwidHJpbSIsInJlcGxhY2UiLCJsVHJpbSIsInJUcmltIiwibFRyaW1TdHJpbmciLCJzdHJUb1JlbW92ZSIsImlzSWdub3JlQ2FzZSIsIlJlZ0V4cCIsInJUcmltU3RyaW5nIiwidHJpbVN0cmluZyIsInRyaW1IVE1MIiwiaHRtbExlZnRSaWdodEJsYW5rIiwidGVzdCIsImNvbnRhaW5zIiwic291cmNlU3RyIiwidG9VcHBlckNhc2UiLCJpbmNsdWRlcyIsImVzY2FwZUh0bWwiLCJodG1sIiwiU3RyaW5nIiwicyIsImh0bWxFbnRpdHlNYXAiLCJyZXBlYXQiLCJjb3VudCIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7O0FBR08sSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsR0FBRCxFQUFjQyxhQUFkLEVBQWtEO0FBQ3pFLE1BQUksQ0FBQ0QsR0FBRCxJQUFRQyxhQUFhLElBQUksQ0FBN0IsRUFBZ0M7QUFDNUIsV0FBTyxFQUFQO0FBQ0g7O0FBQ0QsTUFBTUMsTUFBTSxHQUFHRixHQUFHLENBQUNHLE1BQW5COztBQUNBLE1BQUlELE1BQU0sSUFBSUQsYUFBZCxFQUE2QjtBQUN6QixXQUFPLENBQUNELEdBQUQsQ0FBUDtBQUNIOztBQUNELE1BQUlJLE1BQWdCLEdBQUcsRUFBdkI7QUFDQSxNQUFJQyxVQUFVLEdBQUcsQ0FBakI7O0FBQ0EsU0FBT0EsVUFBVSxHQUFHSCxNQUFwQixFQUE0QjtBQUN4QkUsSUFB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QUNELE1BQUkvQixHQUFHLEtBQUssRUFBWixFQUFnQjtBQUNaLFdBQU8sSUFBUDtBQUNIOztBQUNELE1BQUksQ0FBQ0EsR0FBTCxFQUFVO0FBQ04sV0FBTyxLQUFQO0FBQ0g7O0FBQ0QsTUFBSXVCLFlBQUosRUFBa0I7QUFDZFEsSUFBQUEsU0FBUyxHQUFHQSxTQUFTLENBQUNDLFdBQVYsRUFBWjtBQUNBaEMsSUFBQUEsR0FBRyxHQUFHQSxHQUFHLENBQUNnQyxXQUFKLEVBQU47QUFDSDs7QUFDRCxTQUFPRCxTQUFTLENBQUNFLFFBQVYsQ0FBbUJqQyxHQUFuQixDQUFQO0FBQ0gsQ0FmTTtBQWlCUDs7Ozs7Ozs7O0FBS08sSUFBTWtDLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLElBQUQsRUFBa0I7QUFDeEMsTUFBSSxDQUFDQSxJQUFMLEVBQVc7QUFDUCxXQUFPLEVBQVA7QUFDSDs7QUFDRCxTQUFPQyxNQUFNLENBQUNELElBQUQsQ0FBTixDQUFhakIsT0FBYixDQUFxQixZQUFyQixFQUFtQyxVQUFDbUIsQ0FBRCxFQUFPO0FBQzdDLFdBQU9DLG1CQUFjRCxDQUFkLENBQVA7QUFDSCxHQUZNLENBQVA7QUFHSCxDQVBNO0FBU1A7Ozs7Ozs7OztBQUtPLElBQU1FLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUN2QyxHQUFELEVBQWN3QyxLQUFkLEVBQWdDO0FBQ2xELE1BQUksQ0FBQ3hDLEdBQUQsSUFBUXdDLEtBQUssSUFBSSxDQUFyQixFQUF3QjtBQUNwQixXQUFPLEVBQVA7QUFDSDs7QUFDRCxNQUFJSCxDQUFDLEdBQUcsRUFBUjs7QUFDQSxTQUFPRyxLQUFLLEVBQVosRUFBZ0I7QUFDWkgsSUFBQUEsQ0FBQyxDQUFDL0IsSUFBRixDQUFPTixHQUFQO0FBQ0g7O0FBQ0QsU0FBT3FDLENBQUMsQ0FBQ0ksSUFBRixDQUFPLEVBQVAsQ0FBUDtBQUNILENBVE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwYXJ0TnVtYmVyLCBodG1sTGVmdFJpZ2h0QmxhbmsgfSBmcm9tIFwiLi4vY29uc3RhbnQvcmVnZXhcIlxyXG5pbXBvcnQgeyBodG1sRW50aXR5TWFwIH0gZnJvbSBcIi4uL2NvbnN0YW50L21hcFwiXHJcblxyXG4vKipcclxuICog5bCG5a2X56ym5Liy5oyJ5LiA5a6a5a2X56ym5pWw5ouG5YiG5oiQ5a2X56ym5Liy5pWw57uEXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc3BsaXRTdHJpbmcgPSAoc3RyOiBzdHJpbmcsIHN0ZXBDaGFyQ291bnQ6IG51bWJlcik6IHN0cmluZ1tdID0+IHtcclxuICAgIGlmICghc3RyIHx8IHN0ZXBDaGFyQ291bnQgPD0gMCkge1xyXG4gICAgICAgIHJldHVybiBbXVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc3RyTGVuID0gc3RyLmxlbmd0aFxyXG4gICAgaWYgKHN0ckxlbiA8PSBzdGVwQ2hhckNvdW50KSB7XHJcbiAgICAgICAgcmV0dXJuIFtzdHJdXHJcbiAgICB9XHJcbiAgICBsZXQgcmVzdWx0OiBzdHJpbmdbXSA9IFtdXHJcbiAgICBsZXQgc3RhcnRJbmRleCA9IDBcclxuICAgIHdoaWxlIChzdGFydEluZGV4IDwgc3RyTGVuKSB7XHJcbiAgICAgICAgcmVzdWx0LnB1c2goc3RyLnN1YnN0cihzdGFydEluZGV4LCBzdGVwQ2hhckNvdW50KSlcclxuICAgICAgICBzdGFydEluZGV4ICs9IHN0ZXBDaGFyQ291bnRcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHRcclxufVxyXG5cclxuLyoqXHJcbiAqIOaIquWPluWtl+espuS4suW5tuS7peecgeeVpeespuWPt+aYvuekuuWtl+espuS4slxyXG4gKiBAcGFyYW0gc3RyIOWOn+Wtl+espuS4slxyXG4gKiBAcGFyYW0gbGVuIOimgeS/neeVmeeahOWtl+espumVv+W6plxyXG4gKiBAcGFyYW0gZWxsaXBzaXNDaGFycyDooqvmiKrmlq3nmoTlrZfnrKbmmL7npLrnmoTnrKblj7dcclxuICovXHJcbmV4cG9ydCBjb25zdCBlbGxpcHNpcyA9IChzdHI6IHN0cmluZywgbGVuOiBudW1iZXIsIGVsbGlwc2lzQ2hhcnMgPSBcIi4uLlwiKTogc3RyaW5nID0+IHtcclxuICAgIGlmICghc3RyIHx8IGxlbiA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIGlmIChzdHIubGVuZ3RoIDw9IGxlbikge1xyXG4gICAgICAgIHJldHVybiBzdHJcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIuc3Vic3RyaW5nKDAsIGxlbikgKyBlbGxpcHNpc0NoYXJzXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDku47lrZfnrKbkuLLkuK3mj5Dlj5bmlbDlrZfvvIjlj6/luKblsI/mlbDngrnvvInjgILlpoLvvJpcImFiYzEyMy4wMWNkZVwiLT4xMjMuMDFcclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXROdW1iZXIgPSAoc3RyOiBzdHJpbmcpOiBudW1iZXIgfCBudWxsID0+IHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIGNvbnN0IG10ID0gc3RyLm1hdGNoKHBhcnROdW1iZXIpXHJcbiAgICBpZiAoIW10IHx8ICFtdC5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQobXRbMF0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDljrvlt6blj7PnqbrmoLxcclxuICogQHBhcmFtICBzdHIg5b6F5aSE55CG5a2X56ym5LiyXHJcbiAqIEByZXR1cm5zICDlpITnkIblkI7nmoTlrZfnrKbkuLJcclxuICovXHJcbmV4cG9ydCBjb25zdCB0cmltID0gKHN0cjogc3RyaW5nKSA9PiB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csIFwiXCIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDljrvlt6bnqbrmoLxcclxuICogQHBhcmFtICBzdHIg5b6F5aSE55CG5a2X56ym5LiyXHJcbiAqIEByZXR1cm5zICDlpITnkIblkI7nmoTlrZfnrKbkuLJcclxuICovXHJcbmV4cG9ydCBjb25zdCBsVHJpbSA9IChzdHI6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKy8sIFwiXCIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDljrvlj7PnqbrmoLxcclxuICogQHBhcmFtICBzdHIg5b6F5aSE55CG5a2X56ym5LiyXHJcbiAqIEByZXR1cm5zICDlpITnkIblkI7nmoTlgLxcclxuICovXHJcbmV4cG9ydCBjb25zdCByVHJpbSA9IChzdHI6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHMrJC8sIFwiXCIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDljrvmjonlt6bovrnnmoTmjIflrprlrZfnrKbkuLJcclxuICogQHBhcmFtIHN0ciDlvoXlpITnkIbnmoTlrZfnrKbkuLJcclxuICogQHBhcmFtIHN0clRvUmVtb3ZlIOmcgOimgeenu+mZpOeahOWtl+espuS4slxyXG4gKiBAcGFyYW0gaXNJZ25vcmVDYXNlIOaYr+WQpuW/veeVpeWkp+Wwj+WGmVxyXG4gKiBAcmV0dXJucyDlpITnkIbnu5PmnpxcclxuICovXHJcbmV4cG9ydCBjb25zdCBsVHJpbVN0cmluZyA9IChzdHI6IHN0cmluZywgc3RyVG9SZW1vdmU6IHN0cmluZywgaXNJZ25vcmVDYXNlOiBib29sZWFuID0gZmFsc2UpID0+IHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIGlmICghc3RyVG9SZW1vdmUpIHtcclxuICAgICAgICByZXR1cm4gc3RyXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChgXigke3N0clRvUmVtb3ZlfSkqYCwgaXNJZ25vcmVDYXNlID8gXCJnaVwiIDogXCJnXCIpLCBcIlwiKVxyXG59XHJcblxyXG4vKipcclxuICog5Y675o6J5Y+z6L6555qE5oyH5a6a5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBzdHIg5b6F5aSE55CG55qE5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBzdHJUb1JlbW92ZSDpnIDopoHnp7vpmaTnmoTlrZfnrKbkuLJcclxuICogQHBhcmFtIGlzSWdub3JlQ2FzZSDmmK/lkKblv73nlaXlpKflsI/lhplcclxuICogQHJldHVybnMg5aSE55CG57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgclRyaW1TdHJpbmcgPSAoc3RyOiBzdHJpbmcsIHN0clRvUmVtb3ZlOiBzdHJpbmcsIGlzSWdub3JlQ2FzZTogYm9vbGVhbiA9IGZhbHNlKSA9PiB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICBpZiAoIXN0clRvUmVtb3ZlKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0clxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoYCgke3N0clRvUmVtb3ZlfSkqJGAsIGlzSWdub3JlQ2FzZSA/IFwiZ2lcIiA6IFwiZ1wiKSwgXCJcIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOWOu+W3puWPs+aMh+WumueahOWtl+espuS4slxyXG4gKiBAcGFyYW0gc3RyIOW+heWkhOeQhueahOWtl+espuS4slxyXG4gKiBAcGFyYW0gc3RyVG9SZW1vdmUg6ZyA6KaB56e76Zmk55qE5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBpc0lnbm9yZUNhc2Ug5piv5ZCm5b+955Wl5aSn5bCP5YaZXHJcbiAqIEByZXR1cm5zIOWkhOeQhue7k+aenFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHRyaW1TdHJpbmcgPSAoc3RyOiBzdHJpbmcsIHN0clRvUmVtb3ZlOiBzdHJpbmcsIGlzSWdub3JlQ2FzZTogYm9vbGVhbiA9IGZhbHNlKSA9PiB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICBpZiAoIXN0clRvUmVtb3ZlKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0clxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoYCheKCR7c3RyVG9SZW1vdmV9KSopfCgoJHtzdHJUb1JlbW92ZX0pKiQpYCwgaXNJZ25vcmVDYXNlID8gXCJnaVwiIDogXCJnXCIpLCBcIlwiKVxyXG59XHJcblxyXG4vKipcclxuICog5LuOaHRtbOWtl+espuS4suS4reenu+mZpOW3puWPs+epuueZveWNoOS9jeesplxyXG4gKiBAcGFyYW0gc3RyIOW+heWkhOeQhueahOWtl+espuS4slxyXG4gKiBAcmV0dXJucyDlpITnkIbnu5PmnpxcclxuICovXHJcbmV4cG9ydCBjb25zdCB0cmltSFRNTCA9IChzdHI6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgd2hpbGUgKGh0bWxMZWZ0UmlnaHRCbGFuay50ZXN0KHN0cikpIHtcclxuICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShodG1sTGVmdFJpZ2h0QmxhbmssIFwiXCIpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmjIflrprmupDlrZfnrKbkuLJzb3VyY2VTdHLkuK3mmK/lkKbljIXlkKtzdHLlrZfnrKbkuLJcclxuICogQHBhcmFtICBzb3VyY2VTdHIg5rqQ5a2X56ym5LiyXHJcbiAqIEBwYXJhbSAgc3RyIOimgeafpeaJvueahOWtl+espuS4slxyXG4gKiBAcGFyYW0gIGlzSWdub3JlQ2FzZSDmmK/lkKblv73nlaXlpKflsI/lhpko6buY6K6k5Li6ZmFsc2UpXHJcbiAqIEByZXR1cm5zICDnu5PmnpxcclxuICovXHJcbmV4cG9ydCBjb25zdCBjb250YWlucyA9IChzb3VyY2VTdHI6IHN0cmluZywgc3RyOiBzdHJpbmcsIGlzSWdub3JlQ2FzZTogYm9vbGVhbiA9IGZhbHNlKSA9PiB7XHJcbiAgICBpZiAoIXNvdXJjZVN0cikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgaWYgKHN0ciA9PT0gXCJcIikge1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgaWYgKGlzSWdub3JlQ2FzZSkge1xyXG4gICAgICAgIHNvdXJjZVN0ciA9IHNvdXJjZVN0ci50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgc3RyID0gc3RyLnRvVXBwZXJDYXNlKClcclxuICAgIH1cclxuICAgIHJldHVybiBzb3VyY2VTdHIuaW5jbHVkZXMoc3RyKVxyXG59XHJcblxyXG4vKipcclxuKiDlsIZodG1s5qCH562+6L2s5o2i5Li65a6e5L2T5b2i5byPXHJcbiogQHBhcmFtICBodG1sIOmcgOimgeiiq+abv+aNoueahGh0bWxcclxuKiBAcmV0dXJucyAg6L2s5o2i5ZCO55qE5YC8XHJcbiovXHJcbmV4cG9ydCBjb25zdCBlc2NhcGVIdG1sID0gKGh0bWw6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKCFodG1sKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIHJldHVybiBTdHJpbmcoaHRtbCkucmVwbGFjZSgvWyY8PlwiJ1xcL10vZywgKHMpID0+IHtcclxuICAgICAgICByZXR1cm4gaHRtbEVudGl0eU1hcFtzXVxyXG4gICAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSAgIHN0ciDopoHph43lpI3nmoTlrZfnrKbkuLJcclxuICogQHBhcmFtICAgY291bnQg6YeN5aSN5qyh5pWwXHJcbiAqIEByZXR1cm5zICDmlrDnmoTlrZfnrKbkuLJcclxuICovXHJcbmV4cG9ydCBjb25zdCByZXBlYXQgPSAoc3RyOiBzdHJpbmcsIGNvdW50OiBudW1iZXIpID0+IHtcclxuICAgIGlmICghc3RyIHx8IGNvdW50IDw9IDApIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgbGV0IHMgPSBbXVxyXG4gICAgd2hpbGUgKGNvdW50LS0pIHtcclxuICAgICAgICBzLnB1c2goc3RyKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHMuam9pbignJylcclxufSJdfQ==