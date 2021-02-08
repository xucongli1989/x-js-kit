"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.splitUrlByQueryInfo = splitUrlByQueryInfo;
exports.mergeUrlBySplitQueryInfo = mergeUrlBySplitQueryInfo;
exports.convertQueryStringToKeyValueArray = convertQueryStringToKeyValueArray;
exports.convertKeyValueArrayToQueryString = convertKeyValueArrayToQueryString;
exports.appendQueryString = appendQueryString;
exports.getUrlParameter = getUrlParameter;

var _keyValue = require("../entity/keyValue");

var _string = require("./string");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * 将url字符串以查询串分隔后，提取成三个部分（也就是以字符?和字符#中间的字符串为界限分隔）
 * 注意：边界不包含字符?或#
 * @param url url字符串
 */
function splitUrlByQueryInfo(url) {
  var result = {};
  result.hostPart = "";
  result.queryPart = "";
  result.hashPart = "";

  if (!url) {
    return result;
  }

  var questionMarkIndex = url.lastIndexOf("?");
  var wellNumberMarkIndex = url.indexOf("#"); //只存在查询串

  if (questionMarkIndex >= 0 && wellNumberMarkIndex < 0) {
    result.hostPart = url.substr(0, questionMarkIndex);
    result.queryPart = (0, _string.lTrimString)(url.substring(questionMarkIndex + 1), "?");
    return result;
  } //只存在hash


  if (questionMarkIndex < 0 && wellNumberMarkIndex >= 0) {
    result.hostPart = url.substr(0, wellNumberMarkIndex);
    result.hashPart = (0, _string.lTrimString)(url.substr(wellNumberMarkIndex + 1), "#");
    return result;
  } //同时存在查询串和hash


  if (questionMarkIndex >= 0 && wellNumberMarkIndex >= 0) {
    result.hostPart = url.substr(0, questionMarkIndex);
    result.queryPart = (0, _string.lTrimString)(url.substring(questionMarkIndex + 1, wellNumberMarkIndex), "?");
    result.hashPart = (0, _string.lTrimString)(url.substr(wellNumberMarkIndex + 1), "#");
    return result;
  }

  result.hostPart = url;
  return result;
}
/**
 * 将url拆分对象合并成完整的url
 */


function mergeUrlBySplitQueryInfo(splitInfo) {
  if (!splitInfo) {
    return "";
  }

  var url = splitInfo.hostPart || "";

  if (splitInfo.queryPart) {
    url += "?" + splitInfo.queryPart;
  }

  if (splitInfo.hashPart) {
    url += "#" + splitInfo.hashPart;
  }

  return url;
}
/**
 * 将查询串转换为key value数组（注意：若key重复，只处理第一个）
 * @param queryString 查询字符串，如：a=b&c=d
 */


function convertQueryStringToKeyValueArray(queryString) {
  var result = [];

  if (!queryString) {
    return result;
  }

  var keys = new Set();
  queryString.split("&").forEach(function (item) {
    if (!item) {
      return;
    }

    var _item$split = item.split("="),
        _item$split2 = _slicedToArray(_item$split, 2),
        key = _item$split2[0],
        value = _item$split2[1];

    if (!key) {
      return;
    }

    if (keys.has(key)) {
      return;
    }

    keys.add(key);
    result.push(new _keyValue.KeyValue(key, value));
  });
  return result;
}
/**
 * 将查询串的key value数组转换成普通的字符串，如：a=b&c=d（注意：若key重复，只处理第一个）
 * @param arr key value数组
 */


function convertKeyValueArrayToQueryString(arr) {
  if (!arr || !arr.length) {
    return "";
  }

  var keys = new Set();
  var queryString = [];
  arr.forEach(function (item) {
    if (keys.has(item.key)) {
      return;
    }

    keys.add(item.key);
    queryString.push("".concat(item.key, "=").concat(item.value));
  });
  return queryString.join("&");
}
/**
 * 在url后面追加查询字符串，若其中key已存在，则覆盖
 * @param url url地址，如location.href
 * @param queryString 要追加的查询串，如："a=123&b=456"
 */


function appendQueryString(url, queryString) {
  if (!url) {
    return "";
  }

  if (!queryString) {
    return url;
  }

  var splitInfo = splitUrlByQueryInfo(url);
  var urlQueryKeyValue = convertQueryStringToKeyValueArray(splitInfo.queryPart);
  var appendQueryKeyValue = convertQueryStringToKeyValueArray(queryString);
  appendQueryKeyValue.forEach(function (item) {
    //已存在，则修改
    var queryInfo = urlQueryKeyValue.find(function (k) {
      return k.key == item.key;
    });

    if (queryInfo) {
      queryInfo.value = item.value;
      return;
    }

    if (!item.value) {
      return;
    } //不存在，则追加


    urlQueryKeyValue.push(new _keyValue.KeyValue(item.key, item.value));
  });
  splitInfo.queryPart = convertKeyValueArrayToQueryString(urlQueryKeyValue);
  return mergeUrlBySplitQueryInfo(splitInfo);
}
/**
 * 从查询串中获取指定参数
 * @param search 查询串，如：location.search
 * @param paramName 参数名
 */


function getUrlParameter(search, paramName) {
  var name = paramName.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  var results = regex.exec(search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vdXJsLnRzIl0sIm5hbWVzIjpbInNwbGl0VXJsQnlRdWVyeUluZm8iLCJ1cmwiLCJyZXN1bHQiLCJob3N0UGFydCIsInF1ZXJ5UGFydCIsImhhc2hQYXJ0IiwicXVlc3Rpb25NYXJrSW5kZXgiLCJsYXN0SW5kZXhPZiIsIndlbGxOdW1iZXJNYXJrSW5kZXgiLCJpbmRleE9mIiwic3Vic3RyIiwic3Vic3RyaW5nIiwibWVyZ2VVcmxCeVNwbGl0UXVlcnlJbmZvIiwic3BsaXRJbmZvIiwiY29udmVydFF1ZXJ5U3RyaW5nVG9LZXlWYWx1ZUFycmF5IiwicXVlcnlTdHJpbmciLCJrZXlzIiwiU2V0Iiwic3BsaXQiLCJmb3JFYWNoIiwiaXRlbSIsImtleSIsInZhbHVlIiwiaGFzIiwiYWRkIiwicHVzaCIsIktleVZhbHVlIiwiY29udmVydEtleVZhbHVlQXJyYXlUb1F1ZXJ5U3RyaW5nIiwiYXJyIiwibGVuZ3RoIiwiam9pbiIsImFwcGVuZFF1ZXJ5U3RyaW5nIiwidXJsUXVlcnlLZXlWYWx1ZSIsImFwcGVuZFF1ZXJ5S2V5VmFsdWUiLCJxdWVyeUluZm8iLCJmaW5kIiwiayIsImdldFVybFBhcmFtZXRlciIsInNlYXJjaCIsInBhcmFtTmFtZSIsIm5hbWUiLCJyZXBsYWNlIiwicmVnZXgiLCJSZWdFeHAiLCJyZXN1bHRzIiwiZXhlYyIsImRlY29kZVVSSUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTQSxtQkFBVCxDQUE2QkMsR0FBN0IsRUFBK0Q7QUFDbEUsTUFBTUMsTUFBTSxHQUFHLEVBQWY7QUFDQUEsRUFBQUEsTUFBTSxDQUFDQyxRQUFQLEdBQWtCLEVBQWxCO0FBQ0FELEVBQUFBLE1BQU0sQ0FBQ0UsU0FBUCxHQUFtQixFQUFuQjtBQUNBRixFQUFBQSxNQUFNLENBQUNHLFFBQVAsR0FBa0IsRUFBbEI7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QXpDLEVBQTREO0FBQy9ELE1BQU1DLElBQUksR0FBR0QsU0FBUyxDQUFDRSxPQUFWLENBQWtCLEtBQWxCLEVBQXlCLEtBQXpCLEVBQWdDQSxPQUFoQyxDQUF3QyxNQUF4QyxFQUFnRCxLQUFoRCxDQUFiO0FBQ0EsTUFBTUMsS0FBSyxHQUFHLElBQUlDLE1BQUosQ0FBVyxXQUFXSCxJQUFYLEdBQWtCLFdBQTdCLENBQWQ7QUFDQSxNQUFNSSxPQUFPLEdBQUdGLEtBQUssQ0FBQ0csSUFBTixDQUFXUCxNQUFYLENBQWhCO0FBQ0EsU0FBT00sT0FBTyxLQUFLLElBQVosR0FBbUIsRUFBbkIsR0FBd0JFLGtCQUFrQixDQUFDRixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdILE9BQVgsQ0FBbUIsS0FBbkIsRUFBMEIsR0FBMUIsQ0FBRCxDQUFqRDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgS2V5VmFsdWUgfSBmcm9tIFwiLi4vZW50aXR5L2tleVZhbHVlXCJcclxuaW1wb3J0IHsgbFRyaW1TdHJpbmcgfSBmcm9tIFwiLi9zdHJpbmdcIlxyXG5cclxuLyoqXHJcbiAqIHVybOWIhumalOeahOexu+Wei1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBVcmxTcGxpdEJ5UXVlcnlUeXBlIHtcclxuICAgIC8qKlxyXG4gICAgICog5Z+f5ZCN5Li75py6562J5Li75L2T6YOo5YiGXHJcbiAgICAgKi9cclxuICAgIGhvc3RQYXJ0OiBzdHJpbmdcclxuICAgIC8qKlxyXG4gICAgICog5p+l6K+i5a2X56ym5Liy6YOo5YiGXHJcbiAgICAgKi9cclxuICAgIHF1ZXJ5UGFydDogc3RyaW5nXHJcbiAgICAvKipcclxuICAgICAqIOe7k+WwvueahGhhc2jpg6jliIZcclxuICAgICAqL1xyXG4gICAgaGFzaFBhcnQ6IHN0cmluZ1xyXG59XHJcblxyXG4vKipcclxuICog5bCGdXJs5a2X56ym5Liy5Lul5p+l6K+i5Liy5YiG6ZqU5ZCO77yM5o+Q5Y+W5oiQ5LiJ5Liq6YOo5YiG77yI5Lmf5bCx5piv5Lul5a2X56ymP+WSjOWtl+espiPkuK3pl7TnmoTlrZfnrKbkuLLkuLrnlYzpmZDliIbpmpTvvIlcclxuICog5rOo5oSP77ya6L6555WM5LiN5YyF5ZCr5a2X56ymP+aIliNcclxuICogQHBhcmFtIHVybCB1cmzlrZfnrKbkuLJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzcGxpdFVybEJ5UXVlcnlJbmZvKHVybDogc3RyaW5nKTogVXJsU3BsaXRCeVF1ZXJ5VHlwZSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB7fSBhcyBVcmxTcGxpdEJ5UXVlcnlUeXBlXHJcbiAgICByZXN1bHQuaG9zdFBhcnQgPSBcIlwiXHJcbiAgICByZXN1bHQucXVlcnlQYXJ0ID0gXCJcIlxyXG4gICAgcmVzdWx0Lmhhc2hQYXJ0ID0gXCJcIlxyXG4gICAgaWYgKCF1cmwpIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICB9XHJcbiAgICBjb25zdCBxdWVzdGlvbk1hcmtJbmRleCA9IHVybC5sYXN0SW5kZXhPZihcIj9cIilcclxuICAgIGNvbnN0IHdlbGxOdW1iZXJNYXJrSW5kZXggPSB1cmwuaW5kZXhPZihcIiNcIilcclxuXHJcbiAgICAvL+WPquWtmOWcqOafpeivouS4slxyXG4gICAgaWYgKHF1ZXN0aW9uTWFya0luZGV4ID49IDAgJiYgd2VsbE51bWJlck1hcmtJbmRleCA8IDApIHtcclxuICAgICAgICByZXN1bHQuaG9zdFBhcnQgPSB1cmwuc3Vic3RyKDAsIHF1ZXN0aW9uTWFya0luZGV4KVxyXG4gICAgICAgIHJlc3VsdC5xdWVyeVBhcnQgPSBsVHJpbVN0cmluZyh1cmwuc3Vic3RyaW5nKHF1ZXN0aW9uTWFya0luZGV4ICsgMSksIFwiP1wiKVxyXG4gICAgICAgIHJldHVybiByZXN1bHRcclxuICAgIH1cclxuXHJcbiAgICAvL+WPquWtmOWcqGhhc2hcclxuICAgIGlmIChxdWVzdGlvbk1hcmtJbmRleCA8IDAgJiYgd2VsbE51bWJlck1hcmtJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgcmVzdWx0Lmhvc3RQYXJ0ID0gdXJsLnN1YnN0cigwLCB3ZWxsTnVtYmVyTWFya0luZGV4KVxyXG4gICAgICAgIHJlc3VsdC5oYXNoUGFydCA9IGxUcmltU3RyaW5nKHVybC5zdWJzdHIod2VsbE51bWJlck1hcmtJbmRleCArIDEpLCBcIiNcIilcclxuICAgICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICB9XHJcblxyXG4gICAgLy/lkIzml7blrZjlnKjmn6Xor6LkuLLlkoxoYXNoXHJcbiAgICBpZiAocXVlc3Rpb25NYXJrSW5kZXggPj0gMCAmJiB3ZWxsTnVtYmVyTWFya0luZGV4ID49IDApIHtcclxuICAgICAgICByZXN1bHQuaG9zdFBhcnQgPSB1cmwuc3Vic3RyKDAsIHF1ZXN0aW9uTWFya0luZGV4KVxyXG4gICAgICAgIHJlc3VsdC5xdWVyeVBhcnQgPSBsVHJpbVN0cmluZyh1cmwuc3Vic3RyaW5nKHF1ZXN0aW9uTWFya0luZGV4ICsgMSwgd2VsbE51bWJlck1hcmtJbmRleCksIFwiP1wiKVxyXG4gICAgICAgIHJlc3VsdC5oYXNoUGFydCA9IGxUcmltU3RyaW5nKHVybC5zdWJzdHIod2VsbE51bWJlck1hcmtJbmRleCArIDEpLCBcIiNcIilcclxuICAgICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdWx0Lmhvc3RQYXJ0ID0gdXJsXHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlsIZ1cmzmi4bliIblr7nosaHlkIjlubbmiJDlrozmlbTnmoR1cmxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVVybEJ5U3BsaXRRdWVyeUluZm8oc3BsaXRJbmZvOiBVcmxTcGxpdEJ5UXVlcnlUeXBlKSB7XHJcbiAgICBpZiAoIXNwbGl0SW5mbykge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICBsZXQgdXJsID0gc3BsaXRJbmZvLmhvc3RQYXJ0IHx8IFwiXCJcclxuICAgIGlmIChzcGxpdEluZm8ucXVlcnlQYXJ0KSB7XHJcbiAgICAgICAgdXJsICs9IFwiP1wiICsgc3BsaXRJbmZvLnF1ZXJ5UGFydFxyXG4gICAgfVxyXG4gICAgaWYgKHNwbGl0SW5mby5oYXNoUGFydCkge1xyXG4gICAgICAgIHVybCArPSBcIiNcIiArIHNwbGl0SW5mby5oYXNoUGFydFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVybFxyXG59XHJcblxyXG4vKipcclxuICog5bCG5p+l6K+i5Liy6L2s5o2i5Li6a2V5IHZhbHVl5pWw57uE77yI5rOo5oSP77ya6Iula2V56YeN5aSN77yM5Y+q5aSE55CG56ys5LiA5Liq77yJXHJcbiAqIEBwYXJhbSBxdWVyeVN0cmluZyDmn6Xor6LlrZfnrKbkuLLvvIzlpoLvvJphPWImYz1kXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFF1ZXJ5U3RyaW5nVG9LZXlWYWx1ZUFycmF5KHF1ZXJ5U3RyaW5nOiBzdHJpbmcpOiBLZXlWYWx1ZTxzdHJpbmc+W10ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gW10gYXMgS2V5VmFsdWU8c3RyaW5nPltdXHJcbiAgICBpZiAoIXF1ZXJ5U3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgfVxyXG4gICAgY29uc3Qga2V5cyA9IG5ldyBTZXQoKVxyXG4gICAgcXVlcnlTdHJpbmcuc3BsaXQoXCImXCIpLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoIWl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IGl0ZW0uc3BsaXQoXCI9XCIpXHJcbiAgICAgICAgaWYgKCFrZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChrZXlzLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBrZXlzLmFkZChrZXkpXHJcbiAgICAgICAgcmVzdWx0LnB1c2gobmV3IEtleVZhbHVlPHN0cmluZz4oa2V5LCB2YWx1ZSkpXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG59XHJcblxyXG4vKipcclxuICog5bCG5p+l6K+i5Liy55qEa2V5IHZhbHVl5pWw57uE6L2s5o2i5oiQ5pmu6YCa55qE5a2X56ym5Liy77yM5aaC77yaYT1iJmM9ZO+8iOazqOaEj++8muiLpWtleemHjeWkje+8jOWPquWkhOeQhuesrOS4gOS4qu+8iVxyXG4gKiBAcGFyYW0gYXJyIGtleSB2YWx1ZeaVsOe7hFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRLZXlWYWx1ZUFycmF5VG9RdWVyeVN0cmluZyhhcnI6IEtleVZhbHVlPHN0cmluZz5bXSkge1xyXG4gICAgaWYgKCFhcnIgfHwgIWFyci5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgY29uc3Qga2V5cyA9IG5ldyBTZXQoKVxyXG4gICAgY29uc3QgcXVlcnlTdHJpbmcgPSBbXSBhcyBzdHJpbmdbXVxyXG4gICAgYXJyLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoa2V5cy5oYXMoaXRlbS5rZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBrZXlzLmFkZChpdGVtLmtleSlcclxuICAgICAgICBxdWVyeVN0cmluZy5wdXNoKGAke2l0ZW0ua2V5fT0ke2l0ZW0udmFsdWV9YClcclxuICAgIH0pXHJcbiAgICByZXR1cm4gcXVlcnlTdHJpbmcuam9pbihcIiZcIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOWcqHVybOWQjumdoui/veWKoOafpeivouWtl+espuS4su+8jOiLpeWFtuS4rWtleeW3suWtmOWcqO+8jOWImeimhuebllxyXG4gKiBAcGFyYW0gdXJsIHVybOWcsOWdgO+8jOWmgmxvY2F0aW9uLmhyZWZcclxuICogQHBhcmFtIHF1ZXJ5U3RyaW5nIOimgei/veWKoOeahOafpeivouS4su+8jOWmgu+8mlwiYT0xMjMmYj00NTZcIlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFF1ZXJ5U3RyaW5nKHVybDogc3RyaW5nLCBxdWVyeVN0cmluZzogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXVybCkge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICBpZiAoIXF1ZXJ5U3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHVybFxyXG4gICAgfVxyXG4gICAgY29uc3Qgc3BsaXRJbmZvID0gc3BsaXRVcmxCeVF1ZXJ5SW5mbyh1cmwpXHJcbiAgICBjb25zdCB1cmxRdWVyeUtleVZhbHVlID0gY29udmVydFF1ZXJ5U3RyaW5nVG9LZXlWYWx1ZUFycmF5KHNwbGl0SW5mby5xdWVyeVBhcnQpXHJcbiAgICBjb25zdCBhcHBlbmRRdWVyeUtleVZhbHVlID0gY29udmVydFF1ZXJ5U3RyaW5nVG9LZXlWYWx1ZUFycmF5KHF1ZXJ5U3RyaW5nKVxyXG4gICAgYXBwZW5kUXVlcnlLZXlWYWx1ZS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgLy/lt7LlrZjlnKjvvIzliJnkv67mlLlcclxuICAgICAgICBjb25zdCBxdWVyeUluZm8gPSB1cmxRdWVyeUtleVZhbHVlLmZpbmQoKGspID0+IGsua2V5ID09IGl0ZW0ua2V5KVxyXG4gICAgICAgIGlmIChxdWVyeUluZm8pIHtcclxuICAgICAgICAgICAgcXVlcnlJbmZvLnZhbHVlID0gaXRlbS52YWx1ZVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpdGVtLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+S4jeWtmOWcqO+8jOWImei/veWKoFxyXG4gICAgICAgIHVybFF1ZXJ5S2V5VmFsdWUucHVzaChuZXcgS2V5VmFsdWU8c3RyaW5nPihpdGVtLmtleSwgaXRlbS52YWx1ZSkpXHJcbiAgICB9KVxyXG4gICAgc3BsaXRJbmZvLnF1ZXJ5UGFydCA9IGNvbnZlcnRLZXlWYWx1ZUFycmF5VG9RdWVyeVN0cmluZyh1cmxRdWVyeUtleVZhbHVlKVxyXG4gICAgcmV0dXJuIG1lcmdlVXJsQnlTcGxpdFF1ZXJ5SW5mbyhzcGxpdEluZm8pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDku47mn6Xor6LkuLLkuK3ojrflj5bmjIflrprlj4LmlbBcclxuICogQHBhcmFtIHNlYXJjaCDmn6Xor6LkuLLvvIzlpoLvvJpsb2NhdGlvbi5zZWFyY2hcclxuICogQHBhcmFtIHBhcmFtTmFtZSDlj4LmlbDlkI1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRVcmxQYXJhbWV0ZXIoc2VhcmNoOiBzdHJpbmcsIHBhcmFtTmFtZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBuYW1lID0gcGFyYW1OYW1lLnJlcGxhY2UoL1tbXS8sIFwiXFxcXFtcIikucmVwbGFjZSgvW1xcXV0vLCBcIlxcXFxdXCIpXHJcbiAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoXCJbXFxcXD8mXVwiICsgbmFtZSArIFwiPShbXiYjXSopXCIpXHJcbiAgICBjb25zdCByZXN1bHRzID0gcmVnZXguZXhlYyhzZWFyY2gpXHJcbiAgICByZXR1cm4gcmVzdWx0cyA9PT0gbnVsbCA/IFwiXCIgOiBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1sxXS5yZXBsYWNlKC9cXCsvZywgXCIgXCIpKVxyXG59XHJcbiJdfQ==