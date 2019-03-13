"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isServer = isServer;
exports.isBowser = isBowser;
exports.getGlobalObject = getGlobalObject;
exports.getLocalStorage = getLocalStorage;
exports.createNamespace = createNamespace;
exports.getValue = getValue;
exports.deepClone = deepClone;
exports.tryRun = tryRun;

var _common = require("../config/common");

/**
 * 是否为服务器环境
 */
function isServer() {
  return typeof window === 'undefined';
}
/**
 * 是否为浏览器环境
 */


function isBowser() {
  return !isServer();
}
/**
 * 获取全局对象
 */


function getGlobalObject() {
  if (isBowser()) {
    return window;
  }

  return global;
}
/**
 * 获取localStorage对象
 */


function getLocalStorage() {
  var g = getGlobalObject();
  return g.localStorage || null;
}
/**
 * 创建全局命名空间
 * @param name 名称，如"A.B.C"
 * @returns 全局对象，如：window.A.B.C
 */


function createNamespace(name) {
  if (!name) {
    return null;
  }

  var obj = getGlobalObject(),
      tokens = name.split("."),
      token = "";

  while (tokens.length > 0) {
    token = tokens.shift();

    if (typeof obj[token] === "undefined") {
      obj[token] = {};
    }

    obj = obj[token];
  }

  return obj;
}
/**
 * 获取指定对象的指定属性
 * @param obj 对象
 * @param path 属性路径，如：a.b.c
 * @returns 返回obj.a.b.c，如果获取失败，则返回null
 */


function getValue(obj, path) {
  if (!obj || !path) {
    return null;
  }

  var temp = obj;

  try {
    path.split(".").forEach(function (keyName) {
      temp = temp[keyName];
    });

    if (typeof temp == 'undefined') {
      return null;
    }

    return temp;
  } catch (e) {
    return null;
  }
}
/**
 * 深度clone
 */


function deepClone(obj) {
  try {
    return JSON.parse(JSON.stringify(obj));
  } catch (e) {
    return null;
  }
}
/**
 * 尝试运行指定function；若异常，则执行全局配置的异常处理函数tryRunErrorHandler，并返回null
 * @param fn  函数名
 * @param args 参数
 */


function tryRun(fn) {
  if (!fn) {
    return null;
  }

  try {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return fn.apply(void 0, args);
  } catch (e) {
    var errFn = (0, _common.getTryRunErrorHandler)();
    errFn && errFn(e);
    return null;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vbGliLnRzIl0sIm5hbWVzIjpbImlzU2VydmVyIiwid2luZG93IiwiaXNCb3dzZXIiLCJnZXRHbG9iYWxPYmplY3QiLCJnbG9iYWwiLCJnZXRMb2NhbFN0b3JhZ2UiLCJnIiwibG9jYWxTdG9yYWdlIiwiY3JlYXRlTmFtZXNwYWNlIiwibmFtZSIsIm9iaiIsInRva2VucyIsInNwbGl0IiwidG9rZW4iLCJsZW5ndGgiLCJzaGlmdCIsImdldFZhbHVlIiwicGF0aCIsInRlbXAiLCJmb3JFYWNoIiwia2V5TmFtZSIsImUiLCJkZWVwQ2xvbmUiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJ0cnlSdW4iLCJmbiIsImFyZ3MiLCJlcnJGbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFFQTs7O0FBR08sU0FBU0EsUUFBVCxHQUFvQjtBQUN2QixTQUFPLE9BQVFDLE1BQVIsS0FBb0IsV0FBM0I7QUFDSDtBQUVEOzs7OztBQUdPLFNBQVNDLFFBQVQsR0FBb0I7QUFDdkIsU0FBTyxDQUFDRixRQUFRLEVBQWhCO0FBQ0g7QUFFRDs7Ozs7QUFHTyxTQUFTRyxlQUFULEdBQTJCO0FBQzlCLE1BQUlELFFBQVEsRUFBWixFQUFnQjtBQUNaLFdBQU9ELE1BQVA7QUFDSDs7QUFDRCxTQUFPRyxNQUFQO0FBQ0g7QUFFRDs7Ozs7QUFHTyxTQUFTQyxlQUFULEdBQW9DO0FBQ3ZDLE1BQU1DLENBQU0sR0FBR0gsZUFBZSxFQUE5QjtBQUNBLFNBQVFHLENBQUMsQ0FBQ0MsWUFBRixJQUFrQixJQUExQjtBQUNIO0FBRUQ7Ozs7Ozs7QUFLTyxTQUFTQyxlQUFULENBQXlCQyxJQUF6QixFQUErQztBQUNsRCxNQUFJLENBQUNBLElBQUwsRUFBVztBQUNQLFdBQU8sSUFBUDtBQUNIOztBQUNELE1BQUlDLEdBQVEsR0FBR1AsZUFBZSxFQUE5QjtBQUFBLE1BQWtDUSxNQUFNLEdBQUdGLElBQUksQ0FBQ0csS0FBTCxDQUFXLEdBQVgsQ0FBM0M7QUFBQSxNQUE0REMsS0FBSyxHQUFHLEVBQXBFOztBQUNBLFNBQU9GLE1BQU0sQ0FBQ0csTUFBUCxHQUFnQixDQUF2QixFQUEwQjtBQUN0QkQsSUFBQUEsS0FBSyxHQUFHRixNQUFNLENBQUNJLEtBQVAsRUFBUjs7QUFDQSxRQUFJLE9BQU9MLEdBQUcsQ0FBQ0csS0FBRCxDQUFWLEtBQXNCLFdBQTFCLEVBQXVDO0FBQ25DSCxNQUFBQSxHQUFHLENBQUNHLEtBQUQsQ0FBSCxHQUFhLEVBQWI7QUFDSDs7QUFDREgsSUFBQUEsR0FBRyxHQUFHQSxHQUFHLENBQUNHLEtBQUQsQ0FBVDtBQUNIOztBQUNELFNBQU9ILEdBQVA7QUFDSDtBQUVEOzs7Ozs7OztBQU1PLFNBQVNNLFFBQVQsQ0FBcUJOLEdBQXJCLEVBQTJDTyxJQUEzQyxFQUFtRTtBQUN0RSxNQUFJLENBQUNQLEdBQUQsSUFBUSxDQUFDTyxJQUFiLEVBQW1CO0FBQ2YsV0FBTyxJQUFQO0FBQ0g7O0FBQ0QsTUFBSUMsSUFBSSxHQUFHUixHQUFYOztBQUNBLE1BQUk7QUFDQU8sSUFBQUEsSUFBSSxDQUFDTCxLQUFMLENBQVcsR0FBWCxFQUFnQk8sT0FBaEIsQ0FBd0IsVUFBQUMsT0FBTyxFQUFJO0FBQy9CRixNQUFBQSxJQUFJLEdBQUdBLElBQUksQ0FBQ0UsT0FBRCxDQUFYO0FBQ0gsS0FGRDs7QUFHQSxRQUFJLE9BQVFGLElBQVIsSUFBaUIsV0FBckIsRUFBa0M7QUFDOUIsYUFBTyxJQUFQO0FBQ0g7O0FBQ0QsV0FBT0EsSUFBUDtBQUNILEdBUkQsQ0FRRSxPQUFPRyxDQUFQLEVBQVU7QUFDUixXQUFPLElBQVA7QUFDSDtBQUNKO0FBRUQ7Ozs7O0FBR08sU0FBU0MsU0FBVCxDQUFzQlosR0FBdEIsRUFBd0M7QUFDM0MsTUFBSTtBQUNBLFdBQU9hLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLFNBQUwsQ0FBZWYsR0FBZixDQUFYLENBQVA7QUFDSCxHQUZELENBRUUsT0FBT1csQ0FBUCxFQUFVO0FBQ1IsV0FBTyxJQUFQO0FBQ0g7QUFDSjtBQUVEOzs7Ozs7O0FBS08sU0FBU0ssTUFBVCxDQUFtQkMsRUFBbkIsRUFBa0U7QUFDckUsTUFBSSxDQUFDQSxFQUFMLEVBQVM7QUFDTCxXQUFPLElBQVA7QUFDSDs7QUFDRCxNQUFJO0FBQUEsc0NBSjBDQyxJQUkxQztBQUowQ0EsTUFBQUEsSUFJMUM7QUFBQTs7QUFDQSxXQUFPRCxFQUFFLE1BQUYsU0FBTUMsSUFBTixDQUFQO0FBQ0gsR0FGRCxDQUVFLE9BQU9QLENBQVAsRUFBVTtBQUNSLFFBQU1RLEtBQUssR0FBRyxvQ0FBZDtBQUNBQSxJQUFBQSxLQUFLLElBQUlBLEtBQUssQ0FBQ1IsQ0FBRCxDQUFkO0FBQ0EsV0FBTyxJQUFQO0FBQ0g7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFueUtleVZhbHVlVHlwZSwgQW55RnVuY3Rpb25UeXBlIH0gZnJvbSBcIi4uL2RlY2xhcmF0aW9uL2NvbW1vblwiXHJcbmltcG9ydCB7IGdldFRyeVJ1bkVycm9ySGFuZGxlciB9IGZyb20gXCIuLi9jb25maWcvY29tbW9uXCJcclxuXHJcbi8qKlxyXG4gKiDmmK/lkKbkuLrmnI3liqHlmajnjq/looNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1NlcnZlcigpIHtcclxuICAgIHJldHVybiB0eXBlb2YgKHdpbmRvdykgPT09ICd1bmRlZmluZWQnXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmmK/lkKbkuLrmtY/op4jlmajnjq/looNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Jvd3NlcigpIHtcclxuICAgIHJldHVybiAhaXNTZXJ2ZXIoKVxyXG59XHJcblxyXG4vKipcclxuICog6I635Y+W5YWo5bGA5a+56LGhXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0R2xvYmFsT2JqZWN0KCkge1xyXG4gICAgaWYgKGlzQm93c2VyKCkpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZ2xvYmFsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDojrflj5Zsb2NhbFN0b3JhZ2Xlr7nosaFcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbFN0b3JhZ2UoKTogU3RvcmFnZSB7XHJcbiAgICBjb25zdCBnOiBhbnkgPSBnZXRHbG9iYWxPYmplY3QoKVxyXG4gICAgcmV0dXJuIChnLmxvY2FsU3RvcmFnZSB8fCBudWxsKSBhcyBTdG9yYWdlXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliJvlu7rlhajlsYDlkb3lkI3nqbrpl7RcclxuICogQHBhcmFtIG5hbWUg5ZCN56ew77yM5aaCXCJBLkIuQ1wiXHJcbiAqIEByZXR1cm5zIOWFqOWxgOWvueixoe+8jOWmgu+8mndpbmRvdy5BLkIuQ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5hbWVzcGFjZShuYW1lOiBzdHJpbmcpOiBvYmplY3Qge1xyXG4gICAgaWYgKCFuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGwgYXMgYW55XHJcbiAgICB9XHJcbiAgICBsZXQgb2JqOiBhbnkgPSBnZXRHbG9iYWxPYmplY3QoKSwgdG9rZW5zID0gbmFtZS5zcGxpdChcIi5cIiksIHRva2VuID0gXCJcIlxyXG4gICAgd2hpbGUgKHRva2Vucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdG9rZW4gPSB0b2tlbnMuc2hpZnQoKSBhcyBzdHJpbmdcclxuICAgICAgICBpZiAodHlwZW9mIG9ialt0b2tlbl0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgb2JqW3Rva2VuXSA9IHt9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9iaiA9IG9ialt0b2tlbl1cclxuICAgIH1cclxuICAgIHJldHVybiBvYmpcclxufVxyXG5cclxuLyoqXHJcbiAqIOiOt+WPluaMh+WumuWvueixoeeahOaMh+WumuWxnuaAp1xyXG4gKiBAcGFyYW0gb2JqIOWvueixoVxyXG4gKiBAcGFyYW0gcGF0aCDlsZ7mgKfot6/lvoTvvIzlpoLvvJphLmIuY1xyXG4gKiBAcmV0dXJucyDov5Tlm55vYmouYS5iLmPvvIzlpoLmnpzojrflj5blpLHotKXvvIzliJnov5Tlm55udWxsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWU8VD4ob2JqOiBBbnlLZXlWYWx1ZVR5cGUsIHBhdGg6IHN0cmluZyk6IFQgfCBudWxsIHtcclxuICAgIGlmICghb2JqIHx8ICFwYXRoKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIGxldCB0ZW1wID0gb2JqXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHBhdGguc3BsaXQoXCIuXCIpLmZvckVhY2goa2V5TmFtZSA9PiB7XHJcbiAgICAgICAgICAgIHRlbXAgPSB0ZW1wW2tleU5hbWVdXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAodHlwZW9mICh0ZW1wKSA9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGVtcCBhcyBUXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOa3seW6pmNsb25lXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVlcENsb25lPFQ+KG9iajogVCk6IFQgfCBudWxsIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog5bCd6K+V6L+Q6KGM5oyH5a6aZnVuY3Rpb27vvJvoi6XlvILluLjvvIzliJnmiafooYzlhajlsYDphY3nva7nmoTlvILluLjlpITnkIblh73mlbB0cnlSdW5FcnJvckhhbmRsZXLvvIzlubbov5Tlm55udWxsXHJcbiAqIEBwYXJhbSBmbiAg5Ye95pWw5ZCNXHJcbiAqIEBwYXJhbSBhcmdzIOWPguaVsFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyeVJ1bjxUPihmbjogQW55RnVuY3Rpb25UeXBlLCAuLi5hcmdzOiBhbnlbXSk6IFQgfCBudWxsIHtcclxuICAgIGlmICghZm4pIHtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gZm4oLi4uYXJncykgYXMgVFxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnN0IGVyckZuID0gZ2V0VHJ5UnVuRXJyb3JIYW5kbGVyKClcclxuICAgICAgICBlcnJGbiAmJiBlcnJGbihlKVxyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbn0iXX0=