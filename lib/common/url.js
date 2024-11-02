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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * 将url字符串以查询串分隔后，提取成三个部分（也就是以字符?和字符#中间的字符串为界限分隔）
 * 注意：边界不包含字符?或#
 * @param url url字符串，如：http://localhost/user?id=123&v=3#/pay?productId=123456&result=cancel
 */
function splitUrlByQueryInfo(url) {
  var result = {};
  result.hostPart = "";
  result.queryPart = "";
  result.hashPart = "";

  if (!url) {
    return result;
  } //hash 部分


  var hashFlagIndex = url.indexOf("#");
  var hashFlagLeftPart = "";

  if (hashFlagIndex >= 0) {
    result.hashPart = url.substring(hashFlagIndex + 1);
    hashFlagLeftPart = url.substring(0, hashFlagIndex);
  } else {
    hashFlagLeftPart = url;
  } //非 hash 部分


  var queryFlagIndex = hashFlagLeftPart.indexOf("?");

  if (queryFlagIndex >= 0) {
    result.hostPart = hashFlagLeftPart.substring(0, queryFlagIndex);
    result.queryPart = hashFlagLeftPart.substring(queryFlagIndex + 1);
  } else {
    result.hostPart = hashFlagLeftPart;
  }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vdXJsLnRzIl0sIm5hbWVzIjpbInNwbGl0VXJsQnlRdWVyeUluZm8iLCJ1cmwiLCJyZXN1bHQiLCJob3N0UGFydCIsInF1ZXJ5UGFydCIsImhhc2hQYXJ0IiwiaGFzaEZsYWdJbmRleCIsImluZGV4T2YiLCJoYXNoRmxhZ0xlZnRQYXJ0Iiwic3Vic3RyaW5nIiwicXVlcnlGbGFnSW5kZXgiLCJtZXJnZVVybEJ5U3BsaXRRdWVyeUluZm8iLCJzcGxpdEluZm8iLCJjb252ZXJ0UXVlcnlTdHJpbmdUb0tleVZhbHVlQXJyYXkiLCJxdWVyeVN0cmluZyIsImtleXMiLCJTZXQiLCJzcGxpdCIsImZvckVhY2giLCJpdGVtIiwia2V5IiwidmFsdWUiLCJoYXMiLCJhZGQiLCJwdXNoIiwiS2V5VmFsdWUiLCJjb252ZXJ0S2V5VmFsdWVBcnJheVRvUXVlcnlTdHJpbmciLCJhcnIiLCJsZW5ndGgiLCJqb2luIiwiYXBwZW5kUXVlcnlTdHJpbmciLCJ1cmxRdWVyeUtleVZhbHVlIiwiYXBwZW5kUXVlcnlLZXlWYWx1ZSIsInF1ZXJ5SW5mbyIsImZpbmQiLCJrIiwiZ2V0VXJsUGFyYW1ldGVyIiwic2VhcmNoIiwicGFyYW1OYW1lIiwibmFtZSIsInJlcGxhY2UiLCJyZWdleCIsIlJlZ0V4cCIsInJlc3VsdHMiLCJleGVjIiwiZGVjb2RlVVJJQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNBLG1CQUFULENBQTZCQyxHQUE3QixFQUErRDtBQUNsRSxNQUFNQyxNQUFNLEdBQUcsRUFBZjtBQUNBQSxFQUFBQSxNQUFNLENBQUNDLFFBQVAsR0FBa0IsRUFBbEI7QUFDQUQsRUFBQUEsTUFBTSxDQUFDRSxTQUFQLEdBQW1CLEVBQW5CO0FBQ0FGLEVBQUFBLE1BQU0sQ0FBQ0csUUFBUCxHQUFrQixFQUFsQjs7QUFDQSxNQUFJLENBQUNKLEdB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QUF0QixDQUFsQjs7QUFDQSxRQUFJYSxTQUFKLEVBQWU7QUFDWEEsTUFBQUEsU0FBUyxDQUFDWixLQUFWLEdBQWtCRixJQUFJLENBQUNFLEtBQXZCO0FBQ0E7QUFDSDs7QUFDRCxRQUFJLENBQUNGLElBQUksQ0FBQ0UsS0FBVixFQUFpQjtBQUNiO0FBQ0gsS0FUaUMsQ0FVbEM7OztBQUNBVSxJQUFBQSxnQkFBZ0IsQ0FBQ1AsSUFBakIsQ0FBc0IsSUFBSUMsa0JBQUosQ0FBcUJOLElBQUksQ0FBQ0MsR0FBMUIsRUFBK0JELElBQUksQ0FBQ0UsS0FBcEMsQ0FBdEI7QUFDSCxHQVpEO0FBYUFULEVBQUFBLFNBQVMsQ0FBQ1IsU0FBVixHQUFzQnNCLGlDQUFpQyxDQUFDSyxnQkFBRCxDQUF2RDtBQUNBLFNBQU9wQix3QkFBd0IsQ0FBQ0MsU0FBRCxDQUEvQjtBQUNIO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU3dCLGVBQVQsQ0FBeUJDLE1BQXpCLEVBQXlDQyxTQUF6QyxFQUE0RDtBQUMvRCxNQUFNQyxJQUFJLEdBQUdELFNBQVMsQ0FBQ0UsT0FBVixDQUFrQixLQUFsQixFQUF5QixLQUF6QixFQUFnQ0EsT0FBaEMsQ0FBd0MsTUFBeEMsRUFBZ0QsS0FBaEQsQ0FBYjtBQUNBLE1BQU1DLEtBQUssR0FBRyxJQUFJQyxNQUFKLENBQVcsV0FBV0gsSUFBWCxHQUFrQixXQUE3QixDQUFkO0FBQ0EsTUFBTUksT0FBTyxHQUFHRixLQUFLLENBQUNHLElBQU4sQ0FBV1AsTUFBWCxDQUFoQjtBQUNBLFNBQU9NLE9BQU8sS0FBSyxJQUFaLEdBQW1CLEVBQW5CLEdBQXdCRSxrQkFBa0IsQ0FBQ0YsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXSCxPQUFYLENBQW1CLEtBQW5CLEVBQTBCLEdBQTFCLENBQUQsQ0FBakQ7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEtleVZhbHVlIH0gZnJvbSBcIi4uL2VudGl0eS9rZXlWYWx1ZVwiXHJcblxyXG4vKipcclxuICogdXJs5YiG6ZqU55qE57G75Z6LXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFVybFNwbGl0QnlRdWVyeVR5cGUge1xyXG4gICAgLyoqXHJcbiAgICAgKiDln5/lkI3kuLvmnLrnrYnkuLvkvZPpg6jliIZcclxuICAgICAqL1xyXG4gICAgaG9zdFBhcnQ6IHN0cmluZ1xyXG4gICAgLyoqXHJcbiAgICAgKiDmn6Xor6LlrZfnrKbkuLLpg6jliIZcclxuICAgICAqL1xyXG4gICAgcXVlcnlQYXJ0OiBzdHJpbmdcclxuICAgIC8qKlxyXG4gICAgICog57uT5bC+55qEaGFzaOmDqOWIhlxyXG4gICAgICovXHJcbiAgICBoYXNoUGFydDogc3RyaW5nXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlsIZ1cmzlrZfnrKbkuLLku6Xmn6Xor6LkuLLliIbpmpTlkI7vvIzmj5Dlj5bmiJDkuInkuKrpg6jliIbvvIjkuZ/lsLHmmK/ku6XlrZfnrKY/5ZKM5a2X56ymI+S4remXtOeahOWtl+espuS4suS4uueVjOmZkOWIhumalO+8iVxyXG4gKiDms6jmhI/vvJrovrnnlYzkuI3ljIXlkKvlrZfnrKY/5oiWI1xyXG4gKiBAcGFyYW0gdXJsIHVybOWtl+espuS4su+8jOWmgu+8mmh0dHA6Ly9sb2NhbGhvc3QvdXNlcj9pZD0xMjMmdj0zIy9wYXk/cHJvZHVjdElkPTEyMzQ1NiZyZXN1bHQ9Y2FuY2VsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3BsaXRVcmxCeVF1ZXJ5SW5mbyh1cmw6IHN0cmluZyk6IFVybFNwbGl0QnlRdWVyeVR5cGUge1xyXG4gICAgY29uc3QgcmVzdWx0ID0ge30gYXMgVXJsU3BsaXRCeVF1ZXJ5VHlwZVxyXG4gICAgcmVzdWx0Lmhvc3RQYXJ0ID0gXCJcIlxyXG4gICAgcmVzdWx0LnF1ZXJ5UGFydCA9IFwiXCJcclxuICAgIHJlc3VsdC5oYXNoUGFydCA9IFwiXCJcclxuICAgIGlmICghdXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgfVxyXG5cclxuICAgIC8vaGFzaCDpg6jliIZcclxuICAgIGNvbnN0IGhhc2hGbGFnSW5kZXggPSB1cmwuaW5kZXhPZihcIiNcIilcclxuICAgIGxldCBoYXNoRmxhZ0xlZnRQYXJ0ID0gXCJcIlxyXG4gICAgaWYgKGhhc2hGbGFnSW5kZXggPj0gMCkge1xyXG4gICAgICAgIHJlc3VsdC5oYXNoUGFydCA9IHVybC5zdWJzdHJpbmcoaGFzaEZsYWdJbmRleCArIDEpXHJcbiAgICAgICAgaGFzaEZsYWdMZWZ0UGFydCA9IHVybC5zdWJzdHJpbmcoMCwgaGFzaEZsYWdJbmRleClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaGFzaEZsYWdMZWZ0UGFydCA9IHVybFxyXG4gICAgfVxyXG5cclxuICAgIC8v6Z2eIGhhc2gg6YOo5YiGXHJcbiAgICBjb25zdCBxdWVyeUZsYWdJbmRleCA9IGhhc2hGbGFnTGVmdFBhcnQuaW5kZXhPZihcIj9cIilcclxuICAgIGlmIChxdWVyeUZsYWdJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgcmVzdWx0Lmhvc3RQYXJ0ID0gaGFzaEZsYWdMZWZ0UGFydC5zdWJzdHJpbmcoMCwgcXVlcnlGbGFnSW5kZXgpXHJcbiAgICAgICAgcmVzdWx0LnF1ZXJ5UGFydCA9IGhhc2hGbGFnTGVmdFBhcnQuc3Vic3RyaW5nKHF1ZXJ5RmxhZ0luZGV4ICsgMSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzdWx0Lmhvc3RQYXJ0ID0gaGFzaEZsYWdMZWZ0UGFydFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHRcclxufVxyXG5cclxuLyoqXHJcbiAqIOWwhnVybOaLhuWIhuWvueixoeWQiOW5tuaIkOWujOaVtOeahHVybFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlVXJsQnlTcGxpdFF1ZXJ5SW5mbyhzcGxpdEluZm86IFVybFNwbGl0QnlRdWVyeVR5cGUpIHtcclxuICAgIGlmICghc3BsaXRJbmZvKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIGxldCB1cmwgPSBzcGxpdEluZm8uaG9zdFBhcnQgfHwgXCJcIlxyXG4gICAgaWYgKHNwbGl0SW5mby5xdWVyeVBhcnQpIHtcclxuICAgICAgICB1cmwgKz0gXCI/XCIgKyBzcGxpdEluZm8ucXVlcnlQYXJ0XHJcbiAgICB9XHJcbiAgICBpZiAoc3BsaXRJbmZvLmhhc2hQYXJ0KSB7XHJcbiAgICAgICAgdXJsICs9IFwiI1wiICsgc3BsaXRJbmZvLmhhc2hQYXJ0XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXJsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlsIbmn6Xor6LkuLLovazmjaLkuLprZXkgdmFsdWXmlbDnu4TvvIjms6jmhI/vvJroi6VrZXnph43lpI3vvIzlj6rlpITnkIbnrKzkuIDkuKrvvIlcclxuICogQHBhcmFtIHF1ZXJ5U3RyaW5nIOafpeivouWtl+espuS4su+8jOWmgu+8mmE9YiZjPWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0UXVlcnlTdHJpbmdUb0tleVZhbHVlQXJyYXkocXVlcnlTdHJpbmc6IHN0cmluZyk6IEtleVZhbHVlPHN0cmluZz5bXSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBbXSBhcyBLZXlWYWx1ZTxzdHJpbmc+W11cclxuICAgIGlmICghcXVlcnlTdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICB9XHJcbiAgICBjb25zdCBrZXlzID0gbmV3IFNldCgpXHJcbiAgICBxdWVyeVN0cmluZy5zcGxpdChcIiZcIikuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmICghaXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgW2tleSwgdmFsdWVdID0gaXRlbS5zcGxpdChcIj1cIilcclxuICAgICAgICBpZiAoIWtleSkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleXMuaGFzKGtleSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGtleXMuYWRkKGtleSlcclxuICAgICAgICByZXN1bHQucHVzaChuZXcgS2V5VmFsdWU8c3RyaW5nPihrZXksIHZhbHVlKSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlsIbmn6Xor6LkuLLnmoRrZXkgdmFsdWXmlbDnu4TovazmjaLmiJDmma7pgJrnmoTlrZfnrKbkuLLvvIzlpoLvvJphPWImYz1k77yI5rOo5oSP77ya6Iula2V56YeN5aSN77yM5Y+q5aSE55CG56ys5LiA5Liq77yJXHJcbiAqIEBwYXJhbSBhcnIga2V5IHZhbHVl5pWw57uEXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydEtleVZhbHVlQXJyYXlUb1F1ZXJ5U3RyaW5nKGFycjogS2V5VmFsdWU8c3RyaW5nPltdKSB7XHJcbiAgICBpZiAoIWFyciB8fCAhYXJyLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICBjb25zdCBrZXlzID0gbmV3IFNldCgpXHJcbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IFtdIGFzIHN0cmluZ1tdXHJcbiAgICBhcnIuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmIChrZXlzLmhhcyhpdGVtLmtleSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGtleXMuYWRkKGl0ZW0ua2V5KVxyXG4gICAgICAgIHF1ZXJ5U3RyaW5nLnB1c2goYCR7aXRlbS5rZXl9PSR7aXRlbS52YWx1ZX1gKVxyXG4gICAgfSlcclxuICAgIHJldHVybiBxdWVyeVN0cmluZy5qb2luKFwiJlwiKVxyXG59XHJcblxyXG4vKipcclxuICog5ZyodXJs5ZCO6Z2i6L+95Yqg5p+l6K+i5a2X56ym5Liy77yM6Iul5YW25Lita2V55bey5a2Y5Zyo77yM5YiZ6KaG55uWXHJcbiAqIEBwYXJhbSB1cmwgdXJs5Zyw5Z2A77yM5aaCbG9jYXRpb24uaHJlZlxyXG4gKiBAcGFyYW0gcXVlcnlTdHJpbmcg6KaB6L+95Yqg55qE5p+l6K+i5Liy77yM5aaC77yaXCJhPTEyMyZiPTQ1NlwiXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kUXVlcnlTdHJpbmcodXJsOiBzdHJpbmcsIHF1ZXJ5U3RyaW5nOiBzdHJpbmcpIHtcclxuICAgIGlmICghdXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIGlmICghcXVlcnlTdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdXJsXHJcbiAgICB9XHJcbiAgICBjb25zdCBzcGxpdEluZm8gPSBzcGxpdFVybEJ5UXVlcnlJbmZvKHVybClcclxuICAgIGNvbnN0IHVybFF1ZXJ5S2V5VmFsdWUgPSBjb252ZXJ0UXVlcnlTdHJpbmdUb0tleVZhbHVlQXJyYXkoc3BsaXRJbmZvLnF1ZXJ5UGFydClcclxuICAgIGNvbnN0IGFwcGVuZFF1ZXJ5S2V5VmFsdWUgPSBjb252ZXJ0UXVlcnlTdHJpbmdUb0tleVZhbHVlQXJyYXkocXVlcnlTdHJpbmcpXHJcbiAgICBhcHBlbmRRdWVyeUtleVZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAvL+W3suWtmOWcqO+8jOWImeS/ruaUuVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5SW5mbyA9IHVybFF1ZXJ5S2V5VmFsdWUuZmluZCgoaykgPT4gay5rZXkgPT0gaXRlbS5rZXkpXHJcbiAgICAgICAgaWYgKHF1ZXJ5SW5mbykge1xyXG4gICAgICAgICAgICBxdWVyeUluZm8udmFsdWUgPSBpdGVtLnZhbHVlXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWl0ZW0udmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5LiN5a2Y5Zyo77yM5YiZ6L+95YqgXHJcbiAgICAgICAgdXJsUXVlcnlLZXlWYWx1ZS5wdXNoKG5ldyBLZXlWYWx1ZTxzdHJpbmc+KGl0ZW0ua2V5LCBpdGVtLnZhbHVlKSlcclxuICAgIH0pXHJcbiAgICBzcGxpdEluZm8ucXVlcnlQYXJ0ID0gY29udmVydEtleVZhbHVlQXJyYXlUb1F1ZXJ5U3RyaW5nKHVybFF1ZXJ5S2V5VmFsdWUpXHJcbiAgICByZXR1cm4gbWVyZ2VVcmxCeVNwbGl0UXVlcnlJbmZvKHNwbGl0SW5mbylcclxufVxyXG5cclxuLyoqXHJcbiAqIOS7juafpeivouS4suS4reiOt+WPluaMh+WumuWPguaVsFxyXG4gKiBAcGFyYW0gc2VhcmNoIOafpeivouS4su+8jOWmgu+8mmxvY2F0aW9uLnNlYXJjaFxyXG4gKiBAcGFyYW0gcGFyYW1OYW1lIOWPguaVsOWQjVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVybFBhcmFtZXRlcihzZWFyY2g6IHN0cmluZywgcGFyYW1OYW1lOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IG5hbWUgPSBwYXJhbU5hbWUucmVwbGFjZSgvW1tdLywgXCJcXFxcW1wiKS5yZXBsYWNlKC9bXFxdXS8sIFwiXFxcXF1cIilcclxuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChcIltcXFxcPyZdXCIgKyBuYW1lICsgXCI9KFteJiNdKilcIilcclxuICAgIGNvbnN0IHJlc3VsdHMgPSByZWdleC5leGVjKHNlYXJjaClcclxuICAgIHJldHVybiByZXN1bHRzID09PSBudWxsID8gXCJcIiA6IGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzFdLnJlcGxhY2UoL1xcKy9nLCBcIiBcIikpXHJcbn1cclxuIl19