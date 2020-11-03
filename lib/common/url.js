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

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vdXJsLnRzIl0sIm5hbWVzIjpbInNwbGl0VXJsQnlRdWVyeUluZm8iLCJ1cmwiLCJyZXN1bHQiLCJob3N0UGFydCIsInF1ZXJ5UGFydCIsImhhc2hQYXJ0IiwicXVlc3Rpb25NYXJrSW5kZXgiLCJsYXN0SW5kZXhPZiIsIndlbGxOdW1iZXJNYXJrSW5kZXgiLCJpbmRleE9mIiwic3Vic3RyIiwic3Vic3RyaW5nIiwibWVyZ2VVcmxCeVNwbGl0UXVlcnlJbmZvIiwic3BsaXRJbmZvIiwiY29udmVydFF1ZXJ5U3RyaW5nVG9LZXlWYWx1ZUFycmF5IiwicXVlcnlTdHJpbmciLCJrZXlzIiwiU2V0Iiwic3BsaXQiLCJmb3JFYWNoIiwiaXRlbSIsImtleSIsInZhbHVlIiwiaGFzIiwiYWRkIiwicHVzaCIsIktleVZhbHVlIiwiY29udmVydEtleVZhbHVlQXJyYXlUb1F1ZXJ5U3RyaW5nIiwiYXJyIiwibGVuZ3RoIiwiam9pbiIsImFwcGVuZFF1ZXJ5U3RyaW5nIiwidXJsUXVlcnlLZXlWYWx1ZSIsImFwcGVuZFF1ZXJ5S2V5VmFsdWUiLCJxdWVyeUluZm8iLCJmaW5kIiwiayIsImdldFVybFBhcmFtZXRlciIsInNlYXJjaCIsInBhcmFtTmFtZSIsIm5hbWUiLCJyZXBsYWNlIiwicmVnZXgiLCJSZWdFeHAiLCJyZXN1bHRzIiwiZXhlYyIsImRlY29kZVVSSUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOzs7OztBQUtPLFNBQVNBLG1CQUFULENBQTZCQyxHQUE3QixFQUErRDtBQUNsRSxNQUFNQyxNQUFNLEdBQUcsRUFBZjtBQUNBQSxFQUFBQSxNQUFNLENBQUNDLFFBQVAsR0FBa0IsRUFBbEI7QUFDQUQsRUFBQUEsTUFBTSxDQUFDRSxTQUFQLEdBQW1CLEVBQW5CO0FBQ0FGLEVBQUFBLE1BQU0sQ0FBQ0csUUFBUCxHQUFrQixFQUFsQjs7QUFDQSxNQUFJLENBQUNKLEdBQUwsRUFBVTtBQUNOLFdBQU9DLE1BQVA7QUFDSDs7QUFDRCxNQUFNSSxpQkFBaUIsR0FBR0wsR0FBRyxDQUFDTSxXQUFKLENBQWdCLEdBQWhCLENBQTFCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUdQLEdBQUcsQ0FBQ1EsT0FBSixDQUFZLEdBQVosQ0FBNUIsQ0FUa0UsQ0FXbEU7O0FBQ0EsTUFBSUgsaUJBQWlCLElBQUksQ0FBckIsSUFBMEJFLG1CQUFtQixHQUFHLENBQXBELEVBQXVEO0FBQ25ETixJQUFBQSxNQUFNLENBQUNDLFFBQVAsR0FBa0JGLEdBQUcsQ0FBQ1MsTUFBSixDQUFXLENBQVgsRUFBY0osaUJBQWQsQ0FBbEI7QUFDQUosSUFBQUEsTUFBTSxDQUFDRSxTQUFQLEdBQW1CLHlCQUFZSCxHQUFHLENBQUNVLFNBQUosQ0FBY0wsaUJBQWlCLEdBQUcsQ0FBbEMsQ0FBWixFQUFrRCxHQUFsRCxDQUFuQjtBQUNBLFdBQU9KLE1BQVA7QUFDSCxHQWhCaUUsQ0FrQmxFOzs7QUFDQSxNQUFJSSxpQkFBaUIsR0FBRyxDQUFwQixJQUF5QkUsbUJBQW1CLElBQUksQ0FBcEQsRUFBdUQ7QUFDbkROLElBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxHQUFrQkYsR0FBRyxDQUFDUyxNQUFKLENBQVcsQ0FBWCxFQUFjRixtQkFBZCxDQUFsQjtBQUNBTixJQUFBQSxNQUFNLENBQUNHLFFBQVAsR0FBa0IseUJBQVlKLEdBQUcsQ0FBQ1MsTUFBSixDQUFXRixtQkFBbUIsR0FBRyxDQUFqQyxDQUFaLEVBQWlELEdBQWpELENBQWxCO0FBQ0EsV0FBT04sTUFBUDtBQUNILEdBdkJpRSxDQXlCbEU7OztBQUNBLE1BQUlJLGlCQUFpQixJQUFJLENBQXJCLElBQTBCRSxtQkFBbUIsSUFBSSxDQUFyRCxFQUF3RDtBQUNwRE4sSUFBQUEsTUFBTSxDQUFDQyxRQUFQLEdBQWtCRixHQUFHLENBQUNTLE1BQUosQ0FBVyxDQUFYLEVBQWNKLGlCQUFkLENBQWxCO0FBQ0FKLElBQUFBLE1BQU0sQ0FBQ0UsU0FBUCxHQUFtQix5QkFBWUgsR0FBRyxDQUFDVSxTQUFKLENBQWNMLGlCQUFpQixHQUFHLENBQWxDLEVBQXFDRSxtQkFBckMsQ0FBWixFQUF1RSxHQUF2RSxDQUFuQjtBQUNBTixJQUFBQSxNQUFNLENBQUNHLFFBQVAsR0FBa0IseUJBQVlKLEdBQUcsQ0FBQ1MsTUFBSixDQUFXRixtQkFBbUIsR0FBRyxDQUFqQyxDQUFaLEVBQWlELEdBQWpELENBQWxCO0FBQ0EsV0FBT04sTUFBUDtBQUNIOztBQUVEQSxFQUFBQSxNQUFNLENBQUNDLFFBQVAsR0FBa0JGLEdBQWxCO0FBQ0EsU0FBT0MsTUFBUDtBQUNIO0FBRUQ7Ozs7O0FBR08sU0FBU1Usd0JBQVQsQ0FBa0NDLFNBQWxDLEVBQWtFO0FBQ3JFLE1BQUksQ0FBQ0EsU0FBTCxFQUFnQjtBQUNaLFdBQU8sRUFBUDtBQUNIOztBQUNELE1BQUlaLEdBQUcsR0FBR1ksU0FBUyxDQUFDVixRQUFWLElBQXNCLEVBQWhDOztBQUNBLE1BQUlVLFNBQVMsQ0FBQ1QsU0FBZCxFQUF5QjtBQUNyQkgsSUFBQUEsR0FBRyxJQUFJLE1BQU1ZLFNBQVMsQ0FBQ1QsU0FBdkI7QUFDSDs7QUFDRCxNQUFJUyxTQUFTLENBQUNSLFFBQWQsRUFBd0I7QUFDcEJKLElBQUFBLEdBQUcsSUFBSSxNQUFNWSxTQUFTLENBQUNSLFFBQXZCO0FBQ0g7O0FBQ0QsU0FBT0osR0FBUDtBQUNIO0FBR0Q7Ozs7OztBQUlPLFNBQVNhLGlDQUFULENBQTJDQyxXQUEzQyxFQUFvRjtBQUN2RixNQUFNYixNQUFNLEdBQUcsRUFBZjs7QUFDQSxNQUFJLENBQUNhLFdBQUwsRUFBa0I7QUFDZCxXQUFPYixNQUFQO0FBQ0g7O0FBQ0QsTUFBTWMsSUFBSSxHQUFHLElBQUlDLEdBQUosRUFBYjtBQUNBRixFQUFBQSxXQUFXLENBQUNHLEtBQVosQ0FBa0IsR0FBbEIsRUFBdUJDLE9BQXZCLENBQStCLFVBQUFDLElBQUksRUFBSTtBQUNuQyxRQUFJLENBQUNBLElBQUwsRUFBVztBQUNQO0FBQ0g7O0FBSGtDLHNCQUlkQSxJQUFJLENBQUNGLEtBQUwsQ0FBVyxHQUFYLENBSmM7QUFBQTtBQUFBLFFBSTVCRyxHQUo0QjtBQUFBLFFBSXZCQyxLQUp1Qjs7QUFLbkMsUUFBSSxDQUFDRCxHQUFMLEVBQVU7QUFDTjtBQUNIOztBQUNELFFBQUlMLElBQUksQ0FBQ08sR0FBTCxDQUFTRixHQUFULENBQUosRUFBbUI7QUFDZjtBQUNIOztBQUNETCxJQUFBQSxJQUFJLENBQUNRLEdBQUwsQ0FBU0gsR0FBVDtBQUNBbkIsSUFBQUEsTUFBTSxDQUFDdUIsSUFBUCxDQUFZLElBQUlDLGtCQUFKLENBQXFCTCxHQUFyQixFQUEwQkMsS0FBMUIsQ0FBWjtBQUNILEdBYkQ7QUFjQSxTQUFPcEIsTUFBUDtBQUNIO0FBRUQ7Ozs7OztBQUlPLFNBQVN5QixpQ0FBVCxDQUEyQ0MsR0FBM0MsRUFBb0U7QUFDdkUsTUFBSSxDQUFDQSxHQUFELElBQVEsQ0FBQ0EsR0FBRyxDQUFDQyxNQUFqQixFQUF5QjtBQUNyQixXQUFPLEVBQVA7QUFDSDs7QUFDRCxNQUFNYixJQUFJLEdBQUcsSUFBSUMsR0FBSixFQUFiO0FBQ0EsTUFBTUYsV0FBVyxHQUFHLEVBQXBCO0FBQ0FhLEVBQUFBLEdBQUcsQ0FBQ1QsT0FBSixDQUFZLFVBQUFDLElBQUksRUFBSTtBQUNoQixRQUFJSixJQUFJLENBQUNPLEdBQUwsQ0FBU0gsSUFBSSxDQUFDQyxHQUFkLENBQUosRUFBd0I7QUFDcEI7QUFDSDs7QUFDREwsSUFBQUEsSUFBSSxDQUFDUSxHQUFMLENBQVNKLElBQUksQ0FBQ0MsR0FBZDtBQUNBTixJQUFBQSxXQUFXLENBQUNVLElBQVosV0FBb0JMLElBQUksQ0FBQ0MsR0FBekIsY0FBZ0NELElBQUksQ0FBQ0UsS0FBckM7QUFDSCxHQU5EO0FBT0EsU0FBT1AsV0FBVyxDQUFDZSxJQUFaLENBQWlCLEdBQWpCLENBQVA7QUFDSDtBQUVEOzs7Ozs7O0FBS08sU0FBU0MsaUJBQVQsQ0FBMkI5QixHQUEzQixFQUF3Q2MsV0FBeEMsRUFBNkQ7QUFDaEUsTUFBSSxDQUFDZCxHQUFMLEVBQVU7QUFDTixXQUFPLEVBQVA7QUFDSDs7QUFDRCxNQUFJLENBQUNjLFdBQUwsRUFBa0I7QUFDZCxXQUFPZCxHQUFQO0FBQ0g7O0FBQ0QsTUFBTVksU0FBUyxHQUFHYixtQkFBbUIsQ0FBQ0MsR0FBRCxDQUFyQztBQUNBLE1BQU0rQixnQkFBZ0IsR0FBR2xCLGlDQUFpQyxDQUFDRCxTQUFTLENBQUNULFNBQVgsQ0FBMUQ7QUFDQSxNQUFNNkIsbUJBQW1CLEdBQUduQixpQ0FBaUMsQ0FBQ0MsV0FBRCxDQUE3RDtBQUNBa0IsRUFBQUEsbUJBQW1CLENBQUNkLE9BQXBCLENBQTRCLFVBQUFDLElBQUksRUFBSTtBQUNoQztBQUNBLFFBQU1jLFNBQVMsR0FBR0YsZ0JBQWdCLENBQUNHLElBQWpCLENBQXNCLFVBQUFDLENBQUM7QUFBQSxhQUFJQSxDQUFDLENBQUNmLEdBQUYsSUFBU0QsSUFBSSxDQUFDQyxHQUFsQjtBQUFBLEtBQXZCLENBQWxCOztBQUNBLFFBQUlhLFNBQUosRUFBZTtBQUNYQSxNQUFBQSxTQUFTLENBQUNaLEtBQVYsR0FBa0JGLElBQUksQ0FBQ0UsS0FBdkI7QUFDQTtBQUNIOztBQUNELFFBQUksQ0FBQ0YsSUFBSSxDQUFDRSxLQUFWLEVBQWlCO0FBQ2I7QUFDSCxLQVQrQixDQVVoQzs7O0FBQ0FVLElBQUFBLGdCQUFnQixDQUFDUCxJQUFqQixDQUFzQixJQUFJQyxrQkFBSixDQUFxQk4sSUFBSSxDQUFDQyxHQUExQixFQUErQkQsSUFBSSxDQUFDRSxLQUFwQyxDQUF0QjtBQUNILEdBWkQ7QUFhQVQsRUFBQUEsU0FBUyxDQUFDVCxTQUFWLEdBQXNCdUIsaUNBQWlDLENBQUNLLGdCQUFELENBQXZEO0FBQ0EsU0FBT3BCLHdCQUF3QixDQUFDQyxTQUFELENBQS9CO0FBQ0g7QUFFRDs7Ozs7OztBQUtPLFNBQVN3QixlQUFULENBQXlCQyxNQUF6QixFQUF5Q0MsU0FBekMsRUFBNEQ7QUFDL0QsTUFBTUMsSUFBSSxHQUFHRCxTQUFTLENBQUNFLE9BQVYsQ0FBa0IsS0FBbEIsRUFBeUIsS0FBekIsRUFBZ0NBLE9BQWhDLENBQXdDLE1BQXhDLEVBQWdELEtBQWhELENBQWI7QUFDQSxNQUFNQyxLQUFLLEdBQUcsSUFBSUMsTUFBSixDQUFXLFdBQVdILElBQVgsR0FBa0IsV0FBN0IsQ0FBZDtBQUNBLE1BQU1JLE9BQU8sR0FBR0YsS0FBSyxDQUFDRyxJQUFOLENBQVdQLE1BQVgsQ0FBaEI7QUFDQSxTQUFPTSxPQUFPLEtBQUssSUFBWixHQUFtQixFQUFuQixHQUF3QkUsa0JBQWtCLENBQUNGLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0gsT0FBWCxDQUFtQixLQUFuQixFQUEwQixHQUExQixDQUFELENBQWpEO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBLZXlWYWx1ZSB9IGZyb20gXCIuLi9lbnRpdHkva2V5VmFsdWVcIlxyXG5pbXBvcnQgeyBsVHJpbVN0cmluZyB9IGZyb20gXCIuLi9jb21tb24vc3RyaW5nXCJcclxuXHJcbi8qKlxyXG4gKiB1cmzliIbpmpTnmoTnsbvlnotcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXJsU3BsaXRCeVF1ZXJ5VHlwZSB7XHJcbiAgICAvKipcclxuICAgICAqIOWfn+WQjeS4u+acuuetieS4u+S9k+mDqOWIhlxyXG4gICAgICovXHJcbiAgICBob3N0UGFydDogc3RyaW5nXHJcbiAgICAvKipcclxuICAgICAqIOafpeivouWtl+espuS4sumDqOWIhlxyXG4gICAgICovXHJcbiAgICBxdWVyeVBhcnQ6IHN0cmluZ1xyXG4gICAgLyoqXHJcbiAgICAgKiDnu5PlsL7nmoRoYXNo6YOo5YiGXHJcbiAgICAgKi9cclxuICAgIGhhc2hQYXJ0OiBzdHJpbmdcclxufVxyXG5cclxuLyoqXHJcbiAqIOWwhnVybOWtl+espuS4suS7peafpeivouS4suWIhumalOWQju+8jOaPkOWPluaIkOS4ieS4qumDqOWIhu+8iOS5n+WwseaYr+S7peWtl+espj/lkozlrZfnrKYj5Lit6Ze055qE5a2X56ym5Liy5Li655WM6ZmQ5YiG6ZqU77yJXHJcbiAqIOazqOaEj++8mui+ueeVjOS4jeWMheWQq+Wtl+espj/miJYjXHJcbiAqIEBwYXJhbSB1cmwgdXJs5a2X56ym5LiyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3BsaXRVcmxCeVF1ZXJ5SW5mbyh1cmw6IHN0cmluZyk6IFVybFNwbGl0QnlRdWVyeVR5cGUge1xyXG4gICAgY29uc3QgcmVzdWx0ID0ge30gYXMgVXJsU3BsaXRCeVF1ZXJ5VHlwZVxyXG4gICAgcmVzdWx0Lmhvc3RQYXJ0ID0gXCJcIlxyXG4gICAgcmVzdWx0LnF1ZXJ5UGFydCA9IFwiXCJcclxuICAgIHJlc3VsdC5oYXNoUGFydCA9IFwiXCJcclxuICAgIGlmICghdXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgfVxyXG4gICAgY29uc3QgcXVlc3Rpb25NYXJrSW5kZXggPSB1cmwubGFzdEluZGV4T2YoJz8nKVxyXG4gICAgY29uc3Qgd2VsbE51bWJlck1hcmtJbmRleCA9IHVybC5pbmRleE9mKCcjJylcclxuXHJcbiAgICAvL+WPquWtmOWcqOafpeivouS4slxyXG4gICAgaWYgKHF1ZXN0aW9uTWFya0luZGV4ID49IDAgJiYgd2VsbE51bWJlck1hcmtJbmRleCA8IDApIHtcclxuICAgICAgICByZXN1bHQuaG9zdFBhcnQgPSB1cmwuc3Vic3RyKDAsIHF1ZXN0aW9uTWFya0luZGV4KVxyXG4gICAgICAgIHJlc3VsdC5xdWVyeVBhcnQgPSBsVHJpbVN0cmluZyh1cmwuc3Vic3RyaW5nKHF1ZXN0aW9uTWFya0luZGV4ICsgMSksICc/JylcclxuICAgICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICB9XHJcblxyXG4gICAgLy/lj6rlrZjlnKhoYXNoXHJcbiAgICBpZiAocXVlc3Rpb25NYXJrSW5kZXggPCAwICYmIHdlbGxOdW1iZXJNYXJrSW5kZXggPj0gMCkge1xyXG4gICAgICAgIHJlc3VsdC5ob3N0UGFydCA9IHVybC5zdWJzdHIoMCwgd2VsbE51bWJlck1hcmtJbmRleClcclxuICAgICAgICByZXN1bHQuaGFzaFBhcnQgPSBsVHJpbVN0cmluZyh1cmwuc3Vic3RyKHdlbGxOdW1iZXJNYXJrSW5kZXggKyAxKSwgJyMnKVxyXG4gICAgICAgIHJldHVybiByZXN1bHRcclxuICAgIH1cclxuXHJcbiAgICAvL+WQjOaXtuWtmOWcqOafpeivouS4suWSjGhhc2hcclxuICAgIGlmIChxdWVzdGlvbk1hcmtJbmRleCA+PSAwICYmIHdlbGxOdW1iZXJNYXJrSW5kZXggPj0gMCkge1xyXG4gICAgICAgIHJlc3VsdC5ob3N0UGFydCA9IHVybC5zdWJzdHIoMCwgcXVlc3Rpb25NYXJrSW5kZXgpXHJcbiAgICAgICAgcmVzdWx0LnF1ZXJ5UGFydCA9IGxUcmltU3RyaW5nKHVybC5zdWJzdHJpbmcocXVlc3Rpb25NYXJrSW5kZXggKyAxLCB3ZWxsTnVtYmVyTWFya0luZGV4KSwgJz8nKVxyXG4gICAgICAgIHJlc3VsdC5oYXNoUGFydCA9IGxUcmltU3RyaW5nKHVybC5zdWJzdHIod2VsbE51bWJlck1hcmtJbmRleCArIDEpLCAnIycpXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgfVxyXG5cclxuICAgIHJlc3VsdC5ob3N0UGFydCA9IHVybFxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG59XHJcblxyXG4vKipcclxuICog5bCGdXJs5ouG5YiG5a+56LGh5ZCI5bm25oiQ5a6M5pW055qEdXJsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VVcmxCeVNwbGl0UXVlcnlJbmZvKHNwbGl0SW5mbzogVXJsU3BsaXRCeVF1ZXJ5VHlwZSkge1xyXG4gICAgaWYgKCFzcGxpdEluZm8pIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgbGV0IHVybCA9IHNwbGl0SW5mby5ob3N0UGFydCB8fCBcIlwiXHJcbiAgICBpZiAoc3BsaXRJbmZvLnF1ZXJ5UGFydCkge1xyXG4gICAgICAgIHVybCArPSBcIj9cIiArIHNwbGl0SW5mby5xdWVyeVBhcnRcclxuICAgIH1cclxuICAgIGlmIChzcGxpdEluZm8uaGFzaFBhcnQpIHtcclxuICAgICAgICB1cmwgKz0gXCIjXCIgKyBzcGxpdEluZm8uaGFzaFBhcnRcclxuICAgIH1cclxuICAgIHJldHVybiB1cmxcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiDlsIbmn6Xor6LkuLLovazmjaLkuLprZXkgdmFsdWXmlbDnu4TvvIjms6jmhI/vvJroi6VrZXnph43lpI3vvIzlj6rlpITnkIbnrKzkuIDkuKrvvIlcclxuICogQHBhcmFtIHF1ZXJ5U3RyaW5nIOafpeivouWtl+espuS4su+8jOWmgu+8mmE9YiZjPWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0UXVlcnlTdHJpbmdUb0tleVZhbHVlQXJyYXkocXVlcnlTdHJpbmc6IHN0cmluZyk6IEtleVZhbHVlPHN0cmluZz5bXSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBbXSBhcyBLZXlWYWx1ZTxzdHJpbmc+W11cclxuICAgIGlmICghcXVlcnlTdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICB9XHJcbiAgICBjb25zdCBrZXlzID0gbmV3IFNldCgpXHJcbiAgICBxdWVyeVN0cmluZy5zcGxpdCgnJicpLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgaWYgKCFpdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBpdGVtLnNwbGl0KCc9JylcclxuICAgICAgICBpZiAoIWtleSkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleXMuaGFzKGtleSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGtleXMuYWRkKGtleSlcclxuICAgICAgICByZXN1bHQucHVzaChuZXcgS2V5VmFsdWU8c3RyaW5nPihrZXksIHZhbHVlKSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlsIbmn6Xor6LkuLLnmoRrZXkgdmFsdWXmlbDnu4TovazmjaLmiJDmma7pgJrnmoTlrZfnrKbkuLLvvIzlpoLvvJphPWImYz1k77yI5rOo5oSP77ya6Iula2V56YeN5aSN77yM5Y+q5aSE55CG56ys5LiA5Liq77yJXHJcbiAqIEBwYXJhbSBhcnIga2V5IHZhbHVl5pWw57uEXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydEtleVZhbHVlQXJyYXlUb1F1ZXJ5U3RyaW5nKGFycjogS2V5VmFsdWU8c3RyaW5nPltdKSB7XHJcbiAgICBpZiAoIWFyciB8fCAhYXJyLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICBjb25zdCBrZXlzID0gbmV3IFNldCgpXHJcbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IFtdIGFzIHN0cmluZ1tdXHJcbiAgICBhcnIuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBpZiAoa2V5cy5oYXMoaXRlbS5rZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBrZXlzLmFkZChpdGVtLmtleSlcclxuICAgICAgICBxdWVyeVN0cmluZy5wdXNoKGAke2l0ZW0ua2V5fT0ke2l0ZW0udmFsdWV9YClcclxuICAgIH0pXHJcbiAgICByZXR1cm4gcXVlcnlTdHJpbmcuam9pbihcIiZcIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOWcqHVybOWQjumdoui/veWKoOafpeivouWtl+espuS4su+8jOiLpeWFtuS4rWtleeW3suWtmOWcqO+8jOWImeimhuebllxyXG4gKiBAcGFyYW0gdXJsIHVybOWcsOWdgO+8jOWmgmxvY2F0aW9uLmhyZWZcclxuICogQHBhcmFtIHF1ZXJ5U3RyaW5nIOimgei/veWKoOeahOafpeivouS4su+8jOWmgu+8mlwiYT0xMjMmYj00NTZcIlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFF1ZXJ5U3RyaW5nKHVybDogc3RyaW5nLCBxdWVyeVN0cmluZzogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXVybCkge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICBpZiAoIXF1ZXJ5U3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHVybFxyXG4gICAgfVxyXG4gICAgY29uc3Qgc3BsaXRJbmZvID0gc3BsaXRVcmxCeVF1ZXJ5SW5mbyh1cmwpXHJcbiAgICBjb25zdCB1cmxRdWVyeUtleVZhbHVlID0gY29udmVydFF1ZXJ5U3RyaW5nVG9LZXlWYWx1ZUFycmF5KHNwbGl0SW5mby5xdWVyeVBhcnQpXHJcbiAgICBjb25zdCBhcHBlbmRRdWVyeUtleVZhbHVlID0gY29udmVydFF1ZXJ5U3RyaW5nVG9LZXlWYWx1ZUFycmF5KHF1ZXJ5U3RyaW5nKVxyXG4gICAgYXBwZW5kUXVlcnlLZXlWYWx1ZS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIC8v5bey5a2Y5Zyo77yM5YiZ5L+u5pS5XHJcbiAgICAgICAgY29uc3QgcXVlcnlJbmZvID0gdXJsUXVlcnlLZXlWYWx1ZS5maW5kKGsgPT4gay5rZXkgPT0gaXRlbS5rZXkpXHJcbiAgICAgICAgaWYgKHF1ZXJ5SW5mbykge1xyXG4gICAgICAgICAgICBxdWVyeUluZm8udmFsdWUgPSBpdGVtLnZhbHVlXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWl0ZW0udmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5LiN5a2Y5Zyo77yM5YiZ6L+95YqgXHJcbiAgICAgICAgdXJsUXVlcnlLZXlWYWx1ZS5wdXNoKG5ldyBLZXlWYWx1ZTxzdHJpbmc+KGl0ZW0ua2V5LCBpdGVtLnZhbHVlKSlcclxuICAgIH0pXHJcbiAgICBzcGxpdEluZm8ucXVlcnlQYXJ0ID0gY29udmVydEtleVZhbHVlQXJyYXlUb1F1ZXJ5U3RyaW5nKHVybFF1ZXJ5S2V5VmFsdWUpXHJcbiAgICByZXR1cm4gbWVyZ2VVcmxCeVNwbGl0UXVlcnlJbmZvKHNwbGl0SW5mbylcclxufVxyXG5cclxuLyoqXHJcbiAqIOS7juafpeivouS4suS4reiOt+WPluaMh+WumuWPguaVsFxyXG4gKiBAcGFyYW0gc2VhcmNoIOafpeivouS4su+8jOWmgu+8mmxvY2F0aW9uLnNlYXJjaFxyXG4gKiBAcGFyYW0gcGFyYW1OYW1lIOWPguaVsOWQjVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVybFBhcmFtZXRlcihzZWFyY2g6IHN0cmluZywgcGFyYW1OYW1lOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IG5hbWUgPSBwYXJhbU5hbWUucmVwbGFjZSgvW1tdLywgJ1xcXFxbJykucmVwbGFjZSgvW1xcXV0vLCAnXFxcXF0nKTtcclxuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgnW1xcXFw/Jl0nICsgbmFtZSArICc9KFteJiNdKiknKTtcclxuICAgIGNvbnN0IHJlc3VsdHMgPSByZWdleC5leGVjKHNlYXJjaCk7XHJcbiAgICByZXR1cm4gcmVzdWx0cyA9PT0gbnVsbCA/ICcnIDogZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMV0ucmVwbGFjZSgvXFwrL2csICcgJykpO1xyXG59Il19