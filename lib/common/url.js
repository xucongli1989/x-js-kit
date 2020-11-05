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

var _string = require("../common/string");

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

  var questionMarkIndex = url.lastIndexOf('?');
  var wellNumberMarkIndex = url.indexOf('#'); //只存在查询串

  if (questionMarkIndex >= 0 && wellNumberMarkIndex < 0) {
    result.hostPart = url.substr(0, questionMarkIndex);
    result.queryPart = (0, _string.lTrimString)(url.substring(questionMarkIndex + 1), '?');
    return result;
  } //只存在hash


  if (questionMarkIndex < 0 && wellNumberMarkIndex >= 0) {
    result.hostPart = url.substr(0, wellNumberMarkIndex);
    result.hashPart = (0, _string.lTrimString)(url.substr(wellNumberMarkIndex + 1), '#');
    return result;
  } //同时存在查询串和hash


  if (questionMarkIndex >= 0 && wellNumberMarkIndex >= 0) {
    result.hostPart = url.substr(0, questionMarkIndex);
    result.queryPart = (0, _string.lTrimString)(url.substring(questionMarkIndex + 1, wellNumberMarkIndex), '?');
    result.hashPart = (0, _string.lTrimString)(url.substr(wellNumberMarkIndex + 1), '#');
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
  queryString.split('&').forEach(function (item) {
    if (!item) {
      return;
    }

    var _item$split = item.split('='),
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
  var name = paramName.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vdXJsLnRzIl0sIm5hbWVzIjpbInNwbGl0VXJsQnlRdWVyeUluZm8iLCJ1cmwiLCJyZXN1bHQiLCJob3N0UGFydCIsInF1ZXJ5UGFydCIsImhhc2hQYXJ0IiwicXVlc3Rpb25NYXJrSW5kZXgiLCJsYXN0SW5kZXhPZiIsIndlbGxOdW1iZXJNYXJrSW5kZXgiLCJpbmRleE9mIiwic3Vic3RyIiwic3Vic3RyaW5nIiwibWVyZ2VVcmxCeVNwbGl0UXVlcnlJbmZvIiwic3BsaXRJbmZvIiwiY29udmVydFF1ZXJ5U3RyaW5nVG9LZXlWYWx1ZUFycmF5IiwicXVlcnlTdHJpbmciLCJrZXlzIiwiU2V0Iiwic3BsaXQiLCJmb3JFYWNoIiwiaXRlbSIsImtleSIsInZhbHVlIiwiaGFzIiwiYWRkIiwicHVzaCIsIktleVZhbHVlIiwiY29udmVydEtleVZhbHVlQXJyYXlUb1F1ZXJ5U3RyaW5nIiwiYXJyIiwibGVuZ3RoIiwiam9pbiIsImFwcGVuZFF1ZXJ5U3RyaW5nIiwidXJsUXVlcnlLZXlWYWx1ZSIsImFwcGVuZFF1ZXJ5S2V5VmFsdWUiLCJxdWVyeUluZm8iLCJmaW5kIiwiayIsImdldFVybFBhcmFtZXRlciIsInNlYXJjaCIsInBhcmFtTmFtZSIsIm5hbWUiLCJyZXBsYWNlIiwicmVnZXgiLCJSZWdFeHAiLCJyZXN1bHRzIiwiZXhlYyIsImRlY29kZVVSSUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTQSxtQkFBVCxDQUE2QkMsR0FBN0IsRUFBK0Q7QUFDbEUsTUFBTUMsTUFBTSxHQUFHLEVBQWY7QUFDQUEsRUFBQUEsTUFBTSxDQUFDQyxRQUFQLEdBQWtCLEVBQWxCO0FBQ0FELEVBQUFBLE1BQU0sQ0FBQ0UsU0FBUCxHQUFtQixFQUFuQjtBQUNBRixFQUFBQSxNQUFNLENBQUNHLFFBQVAsR0FBa0IsRUFBbEI7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QyxFQUE0RDtBQUMvRCxNQUFNQyxJQUFJLEdBQUdELFNBQVMsQ0FBQ0UsT0FBVixDQUFrQixLQUFsQixFQUF5QixLQUF6QixFQUFnQ0EsT0FBaEMsQ0FBd0MsTUFBeEMsRUFBZ0QsS0FBaEQsQ0FBYjtBQUNBLE1BQU1DLEtBQUssR0FBRyxJQUFJQyxNQUFKLENBQVcsV0FBV0gsSUFBWCxHQUFrQixXQUE3QixDQUFkO0FBQ0EsTUFBTUksT0FBTyxHQUFHRixLQUFLLENBQUNHLElBQU4sQ0FBV1AsTUFBWCxDQUFoQjtBQUNBLFNBQU9NLE9BQU8sS0FBSyxJQUFaLEdBQW1CLEVBQW5CLEdBQXdCRSxrQkFBa0IsQ0FBQ0YsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXSCxPQUFYLENBQW1CLEtBQW5CLEVBQTBCLEdBQTFCLENBQUQsQ0FBakQ7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEtleVZhbHVlIH0gZnJvbSBcIi4uL2VudGl0eS9rZXlWYWx1ZVwiXHJcbmltcG9ydCB7IGxUcmltU3RyaW5nIH0gZnJvbSBcIi4uL2NvbW1vbi9zdHJpbmdcIlxyXG5cclxuLyoqXHJcbiAqIHVybOWIhumalOeahOexu+Wei1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBVcmxTcGxpdEJ5UXVlcnlUeXBlIHtcclxuICAgIC8qKlxyXG4gICAgICog5Z+f5ZCN5Li75py6562J5Li75L2T6YOo5YiGXHJcbiAgICAgKi9cclxuICAgIGhvc3RQYXJ0OiBzdHJpbmdcclxuICAgIC8qKlxyXG4gICAgICog5p+l6K+i5a2X56ym5Liy6YOo5YiGXHJcbiAgICAgKi9cclxuICAgIHF1ZXJ5UGFydDogc3RyaW5nXHJcbiAgICAvKipcclxuICAgICAqIOe7k+WwvueahGhhc2jpg6jliIZcclxuICAgICAqL1xyXG4gICAgaGFzaFBhcnQ6IHN0cmluZ1xyXG59XHJcblxyXG4vKipcclxuICog5bCGdXJs5a2X56ym5Liy5Lul5p+l6K+i5Liy5YiG6ZqU5ZCO77yM5o+Q5Y+W5oiQ5LiJ5Liq6YOo5YiG77yI5Lmf5bCx5piv5Lul5a2X56ymP+WSjOWtl+espiPkuK3pl7TnmoTlrZfnrKbkuLLkuLrnlYzpmZDliIbpmpTvvIlcclxuICog5rOo5oSP77ya6L6555WM5LiN5YyF5ZCr5a2X56ymP+aIliNcclxuICogQHBhcmFtIHVybCB1cmzlrZfnrKbkuLJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzcGxpdFVybEJ5UXVlcnlJbmZvKHVybDogc3RyaW5nKTogVXJsU3BsaXRCeVF1ZXJ5VHlwZSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB7fSBhcyBVcmxTcGxpdEJ5UXVlcnlUeXBlXHJcbiAgICByZXN1bHQuaG9zdFBhcnQgPSBcIlwiXHJcbiAgICByZXN1bHQucXVlcnlQYXJ0ID0gXCJcIlxyXG4gICAgcmVzdWx0Lmhhc2hQYXJ0ID0gXCJcIlxyXG4gICAgaWYgKCF1cmwpIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICB9XHJcbiAgICBjb25zdCBxdWVzdGlvbk1hcmtJbmRleCA9IHVybC5sYXN0SW5kZXhPZignPycpXHJcbiAgICBjb25zdCB3ZWxsTnVtYmVyTWFya0luZGV4ID0gdXJsLmluZGV4T2YoJyMnKVxyXG5cclxuICAgIC8v5Y+q5a2Y5Zyo5p+l6K+i5LiyXHJcbiAgICBpZiAocXVlc3Rpb25NYXJrSW5kZXggPj0gMCAmJiB3ZWxsTnVtYmVyTWFya0luZGV4IDwgMCkge1xyXG4gICAgICAgIHJlc3VsdC5ob3N0UGFydCA9IHVybC5zdWJzdHIoMCwgcXVlc3Rpb25NYXJrSW5kZXgpXHJcbiAgICAgICAgcmVzdWx0LnF1ZXJ5UGFydCA9IGxUcmltU3RyaW5nKHVybC5zdWJzdHJpbmcocXVlc3Rpb25NYXJrSW5kZXggKyAxKSwgJz8nKVxyXG4gICAgICAgIHJldHVybiByZXN1bHRcclxuICAgIH1cclxuXHJcbiAgICAvL+WPquWtmOWcqGhhc2hcclxuICAgIGlmIChxdWVzdGlvbk1hcmtJbmRleCA8IDAgJiYgd2VsbE51bWJlck1hcmtJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgcmVzdWx0Lmhvc3RQYXJ0ID0gdXJsLnN1YnN0cigwLCB3ZWxsTnVtYmVyTWFya0luZGV4KVxyXG4gICAgICAgIHJlc3VsdC5oYXNoUGFydCA9IGxUcmltU3RyaW5nKHVybC5zdWJzdHIod2VsbE51bWJlck1hcmtJbmRleCArIDEpLCAnIycpXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgfVxyXG5cclxuICAgIC8v5ZCM5pe25a2Y5Zyo5p+l6K+i5Liy5ZKMaGFzaFxyXG4gICAgaWYgKHF1ZXN0aW9uTWFya0luZGV4ID49IDAgJiYgd2VsbE51bWJlck1hcmtJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgcmVzdWx0Lmhvc3RQYXJ0ID0gdXJsLnN1YnN0cigwLCBxdWVzdGlvbk1hcmtJbmRleClcclxuICAgICAgICByZXN1bHQucXVlcnlQYXJ0ID0gbFRyaW1TdHJpbmcodXJsLnN1YnN0cmluZyhxdWVzdGlvbk1hcmtJbmRleCArIDEsIHdlbGxOdW1iZXJNYXJrSW5kZXgpLCAnPycpXHJcbiAgICAgICAgcmVzdWx0Lmhhc2hQYXJ0ID0gbFRyaW1TdHJpbmcodXJsLnN1YnN0cih3ZWxsTnVtYmVyTWFya0luZGV4ICsgMSksICcjJylcclxuICAgICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdWx0Lmhvc3RQYXJ0ID0gdXJsXHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlsIZ1cmzmi4bliIblr7nosaHlkIjlubbmiJDlrozmlbTnmoR1cmxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVVybEJ5U3BsaXRRdWVyeUluZm8oc3BsaXRJbmZvOiBVcmxTcGxpdEJ5UXVlcnlUeXBlKSB7XHJcbiAgICBpZiAoIXNwbGl0SW5mbykge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICBsZXQgdXJsID0gc3BsaXRJbmZvLmhvc3RQYXJ0IHx8IFwiXCJcclxuICAgIGlmIChzcGxpdEluZm8ucXVlcnlQYXJ0KSB7XHJcbiAgICAgICAgdXJsICs9IFwiP1wiICsgc3BsaXRJbmZvLnF1ZXJ5UGFydFxyXG4gICAgfVxyXG4gICAgaWYgKHNwbGl0SW5mby5oYXNoUGFydCkge1xyXG4gICAgICAgIHVybCArPSBcIiNcIiArIHNwbGl0SW5mby5oYXNoUGFydFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVybFxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIOWwhuafpeivouS4sui9rOaNouS4umtleSB2YWx1ZeaVsOe7hO+8iOazqOaEj++8muiLpWtleemHjeWkje+8jOWPquWkhOeQhuesrOS4gOS4qu+8iVxyXG4gKiBAcGFyYW0gcXVlcnlTdHJpbmcg5p+l6K+i5a2X56ym5Liy77yM5aaC77yaYT1iJmM9ZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRRdWVyeVN0cmluZ1RvS2V5VmFsdWVBcnJheShxdWVyeVN0cmluZzogc3RyaW5nKTogS2V5VmFsdWU8c3RyaW5nPltdIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IFtdIGFzIEtleVZhbHVlPHN0cmluZz5bXVxyXG4gICAgaWYgKCFxdWVyeVN0cmluZykge1xyXG4gICAgICAgIHJldHVybiByZXN1bHRcclxuICAgIH1cclxuICAgIGNvbnN0IGtleXMgPSBuZXcgU2V0KClcclxuICAgIHF1ZXJ5U3RyaW5nLnNwbGl0KCcmJykuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBpZiAoIWl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IGl0ZW0uc3BsaXQoJz0nKVxyXG4gICAgICAgIGlmICgha2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoa2V5cy5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAga2V5cy5hZGQoa2V5KVxyXG4gICAgICAgIHJlc3VsdC5wdXNoKG5ldyBLZXlWYWx1ZTxzdHJpbmc+KGtleSwgdmFsdWUpKVxyXG4gICAgfSlcclxuICAgIHJldHVybiByZXN1bHRcclxufVxyXG5cclxuLyoqXHJcbiAqIOWwhuafpeivouS4sueahGtleSB2YWx1ZeaVsOe7hOi9rOaNouaIkOaZrumAmueahOWtl+espuS4su+8jOWmgu+8mmE9YiZjPWTvvIjms6jmhI/vvJroi6VrZXnph43lpI3vvIzlj6rlpITnkIbnrKzkuIDkuKrvvIlcclxuICogQHBhcmFtIGFyciBrZXkgdmFsdWXmlbDnu4RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0S2V5VmFsdWVBcnJheVRvUXVlcnlTdHJpbmcoYXJyOiBLZXlWYWx1ZTxzdHJpbmc+W10pIHtcclxuICAgIGlmICghYXJyIHx8ICFhcnIubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIGNvbnN0IGtleXMgPSBuZXcgU2V0KClcclxuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gW10gYXMgc3RyaW5nW11cclxuICAgIGFyci5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmIChrZXlzLmhhcyhpdGVtLmtleSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGtleXMuYWRkKGl0ZW0ua2V5KVxyXG4gICAgICAgIHF1ZXJ5U3RyaW5nLnB1c2goYCR7aXRlbS5rZXl9PSR7aXRlbS52YWx1ZX1gKVxyXG4gICAgfSlcclxuICAgIHJldHVybiBxdWVyeVN0cmluZy5qb2luKFwiJlwiKVxyXG59XHJcblxyXG4vKipcclxuICog5ZyodXJs5ZCO6Z2i6L+95Yqg5p+l6K+i5a2X56ym5Liy77yM6Iul5YW25Lita2V55bey5a2Y5Zyo77yM5YiZ6KaG55uWXHJcbiAqIEBwYXJhbSB1cmwgdXJs5Zyw5Z2A77yM5aaCbG9jYXRpb24uaHJlZlxyXG4gKiBAcGFyYW0gcXVlcnlTdHJpbmcg6KaB6L+95Yqg55qE5p+l6K+i5Liy77yM5aaC77yaXCJhPTEyMyZiPTQ1NlwiXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kUXVlcnlTdHJpbmcodXJsOiBzdHJpbmcsIHF1ZXJ5U3RyaW5nOiBzdHJpbmcpIHtcclxuICAgIGlmICghdXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIGlmICghcXVlcnlTdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdXJsXHJcbiAgICB9XHJcbiAgICBjb25zdCBzcGxpdEluZm8gPSBzcGxpdFVybEJ5UXVlcnlJbmZvKHVybClcclxuICAgIGNvbnN0IHVybFF1ZXJ5S2V5VmFsdWUgPSBjb252ZXJ0UXVlcnlTdHJpbmdUb0tleVZhbHVlQXJyYXkoc3BsaXRJbmZvLnF1ZXJ5UGFydClcclxuICAgIGNvbnN0IGFwcGVuZFF1ZXJ5S2V5VmFsdWUgPSBjb252ZXJ0UXVlcnlTdHJpbmdUb0tleVZhbHVlQXJyYXkocXVlcnlTdHJpbmcpXHJcbiAgICBhcHBlbmRRdWVyeUtleVZhbHVlLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgLy/lt7LlrZjlnKjvvIzliJnkv67mlLlcclxuICAgICAgICBjb25zdCBxdWVyeUluZm8gPSB1cmxRdWVyeUtleVZhbHVlLmZpbmQoayA9PiBrLmtleSA9PSBpdGVtLmtleSlcclxuICAgICAgICBpZiAocXVlcnlJbmZvKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5SW5mby52YWx1ZSA9IGl0ZW0udmFsdWVcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaXRlbS52YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/kuI3lrZjlnKjvvIzliJnov73liqBcclxuICAgICAgICB1cmxRdWVyeUtleVZhbHVlLnB1c2gobmV3IEtleVZhbHVlPHN0cmluZz4oaXRlbS5rZXksIGl0ZW0udmFsdWUpKVxyXG4gICAgfSlcclxuICAgIHNwbGl0SW5mby5xdWVyeVBhcnQgPSBjb252ZXJ0S2V5VmFsdWVBcnJheVRvUXVlcnlTdHJpbmcodXJsUXVlcnlLZXlWYWx1ZSlcclxuICAgIHJldHVybiBtZXJnZVVybEJ5U3BsaXRRdWVyeUluZm8oc3BsaXRJbmZvKVxyXG59XHJcblxyXG4vKipcclxuICog5LuO5p+l6K+i5Liy5Lit6I635Y+W5oyH5a6a5Y+C5pWwXHJcbiAqIEBwYXJhbSBzZWFyY2gg5p+l6K+i5Liy77yM5aaC77yabG9jYXRpb24uc2VhcmNoXHJcbiAqIEBwYXJhbSBwYXJhbU5hbWUg5Y+C5pWw5ZCNXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXJsUGFyYW1ldGVyKHNlYXJjaDogc3RyaW5nLCBwYXJhbU5hbWU6IHN0cmluZykge1xyXG4gICAgY29uc3QgbmFtZSA9IHBhcmFtTmFtZS5yZXBsYWNlKC9bW10vLCAnXFxcXFsnKS5yZXBsYWNlKC9bXFxdXS8sICdcXFxcXScpO1xyXG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKCdbXFxcXD8mXScgKyBuYW1lICsgJz0oW14mI10qKScpO1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IHJlZ2V4LmV4ZWMoc2VhcmNoKTtcclxuICAgIHJldHVybiByZXN1bHRzID09PSBudWxsID8gJycgOiBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1sxXS5yZXBsYWNlKC9cXCsvZywgJyAnKSk7XHJcbn0iXX0=