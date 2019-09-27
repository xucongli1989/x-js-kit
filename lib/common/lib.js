"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isServer = isServer;
exports.isBowser = isBowser;
exports.getGlobalObject = getGlobalObject;
exports.getLocalStorage = getLocalStorage;
exports.getDocument = getDocument;
exports.createNamespace = createNamespace;
exports.getValue = getValue;
exports.deepClone = deepClone;
exports.tryRun = tryRun;
exports.setTryRunErrorHandler = setTryRunErrorHandler;
exports.document = exports.globalObject = void 0;

var defaultTryRunErrorHandler = function defaultTryRunErrorHandler() {};
/**
 * 当前环境中的全局对象
 */


var globalObject = getGlobalObject();
/**
 * 当前环境中的document对象，若没有，则为null
 */

exports.globalObject = globalObject;
var document = getDocument();
/**
 * 是否为服务器环境
 */

exports.document = document;

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
  return globalObject.localStorage || null;
}
/**
 * 获取document对象
 */


function getDocument() {
  return globalObject.document || null;
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

  var obj = globalObject,
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
    defaultTryRunErrorHandler && defaultTryRunErrorHandler(e);
    return null;
  }
}
/**
 * 重新设置全局异常处理函数
 */


function setTryRunErrorHandler(fn) {
  defaultTryRunErrorHandler = fn;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vbGliLnRzIl0sIm5hbWVzIjpbImRlZmF1bHRUcnlSdW5FcnJvckhhbmRsZXIiLCJnbG9iYWxPYmplY3QiLCJnZXRHbG9iYWxPYmplY3QiLCJkb2N1bWVudCIsImdldERvY3VtZW50IiwiaXNTZXJ2ZXIiLCJ3aW5kb3ciLCJpc0Jvd3NlciIsImdsb2JhbCIsImdldExvY2FsU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImNyZWF0ZU5hbWVzcGFjZSIsIm5hbWUiLCJvYmoiLCJ0b2tlbnMiLCJzcGxpdCIsInRva2VuIiwibGVuZ3RoIiwic2hpZnQiLCJnZXRWYWx1ZSIsInBhdGgiLCJ0ZW1wIiwiZm9yRWFjaCIsImtleU5hbWUiLCJlIiwiZGVlcENsb25lIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwidHJ5UnVuIiwiZm4iLCJhcmdzIiwic2V0VHJ5UnVuRXJyb3JIYW5kbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtBLElBQUlBLHlCQUEwQyxHQUFHLHFDQUFNLENBQUcsQ0FBMUQ7QUFFQTs7Ozs7QUFHTyxJQUFNQyxZQUFZLEdBQUdDLGVBQWUsRUFBcEM7QUFFUDs7Ozs7QUFHTyxJQUFNQyxRQUFRLEdBQUdDLFdBQVcsRUFBNUI7QUFFUDs7Ozs7O0FBR08sU0FBU0MsUUFBVCxHQUFvQjtBQUN2QixTQUFPLE9BQVFDLE1BQVIsS0FBb0IsV0FBM0I7QUFDSDtBQUVEOzs7OztBQUdPLFNBQVNDLFFBQVQsR0FBb0I7QUFDdkIsU0FBTyxDQUFDRixRQUFRLEVBQWhCO0FBQ0g7QUFFRDs7Ozs7QUFHTyxTQUFTSCxlQUFULEdBQW1EO0FBQ3RELE1BQUlLLFFBQVEsRUFBWixFQUFnQjtBQUNaLFdBQU9ELE1BQVA7QUFDSDs7QUFDRCxTQUFPRSxNQUFQO0FBQ0g7QUFFRDs7Ozs7QUFHTyxTQUFTQyxlQUFULEdBQW9DO0FBQ3ZDLFNBQVNSLFlBQUQsQ0FBc0JTLFlBQXRCLElBQXNDLElBQTlDO0FBQ0g7QUFFRDs7Ozs7QUFHTyxTQUFTTixXQUFULEdBQWlDO0FBQ3BDLFNBQVNILFlBQUQsQ0FBc0JFLFFBQXRCLElBQWtDLElBQTFDO0FBQ0g7QUFFRDs7Ozs7OztBQUtPLFNBQVNRLGVBQVQsQ0FBeUJDLElBQXpCLEVBQStDO0FBQ2xELE1BQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1AsV0FBTyxJQUFQO0FBQ0g7O0FBQ0QsTUFBSUMsR0FBUSxHQUFHWixZQUFmO0FBQUEsTUFBNkJhLE1BQU0sR0FBR0YsSUFBSSxDQUFDRyxLQUFMLENBQVcsR0FBWCxDQUF0QztBQUFBLE1BQXVEQyxLQUFLLEdBQUcsRUFBL0Q7O0FBQ0EsU0FBT0YsTUFBTSxDQUFDRyxNQUFQLEdBQWdCLENBQXZCLEVBQTBCO0FBQ3RCRCxJQUFBQSxLQUFLLEdBQUdGLE1BQU0sQ0FBQ0ksS0FBUCxFQUFSOztBQUNBLFFBQUksT0FBT0wsR0FBRyxDQUFDRyxLQUFELENBQVYsS0FBc0IsV0FBMUIsRUFBdUM7QUFDbkNILE1BQUFBLEdBQUcsQ0FBQ0csS0FBRCxDQUFILEdBQWEsRUFBYjtBQUNIOztBQUNESCxJQUFBQSxHQUFHLEdBQUdBLEdBQUcsQ0FBQ0csS0FBRCxDQUFUO0FBQ0g7O0FBQ0QsU0FBT0gsR0FBUDtBQUNIO0FBRUQ7Ozs7Ozs7O0FBTU8sU0FBU00sUUFBVCxDQUFxQk4sR0FBckIsRUFBMkNPLElBQTNDLEVBQW1FO0FBQ3RFLE1BQUksQ0FBQ1AsR0FBRCxJQUFRLENBQUNPLElBQWIsRUFBbUI7QUFDZixXQUFPLElBQVA7QUFDSDs7QUFDRCxNQUFJQyxJQUFJLEdBQUdSLEdBQVg7O0FBQ0EsTUFBSTtBQUNBTyxJQUFBQSxJQUFJLENBQUNMLEtBQUwsQ0FBVyxHQUFYLEVBQWdCTyxPQUFoQixDQUF3QixVQUFBQyxPQUFPLEVBQUk7QUFDL0JGLE1BQUFBLElBQUksR0FBR0EsSUFBSSxDQUFDRSxPQUFELENBQVg7QUFDSCxLQUZEOztBQUdBLFFBQUksT0FBUUYsSUFBUixJQUFpQixXQUFyQixFQUFrQztBQUM5QixhQUFPLElBQVA7QUFDSDs7QUFDRCxXQUFPQSxJQUFQO0FBQ0gsR0FSRCxDQVFFLE9BQU9HLENBQVAsRUFBVTtBQUNSLFdBQU8sSUFBUDtBQUNIO0FBQ0o7QUFFRDs7Ozs7QUFHTyxTQUFTQyxTQUFULENBQXNCWixHQUF0QixFQUF3QztBQUMzQyxNQUFJO0FBQ0EsV0FBT2EsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlZixHQUFmLENBQVgsQ0FBUDtBQUNILEdBRkQsQ0FFRSxPQUFPVyxDQUFQLEVBQVU7QUFDUixXQUFPLElBQVA7QUFDSDtBQUNKO0FBRUQ7Ozs7Ozs7QUFLTyxTQUFTSyxNQUFULENBQW1CQyxFQUFuQixFQUFrRTtBQUNyRSxNQUFJLENBQUNBLEVBQUwsRUFBUztBQUNMLFdBQU8sSUFBUDtBQUNIOztBQUNELE1BQUk7QUFBQSxzQ0FKMENDLElBSTFDO0FBSjBDQSxNQUFBQSxJQUkxQztBQUFBOztBQUNBLFdBQU9ELEVBQUUsTUFBRixTQUFNQyxJQUFOLENBQVA7QUFDSCxHQUZELENBRUUsT0FBT1AsQ0FBUCxFQUFVO0FBQ1J4QixJQUFBQSx5QkFBeUIsSUFBSUEseUJBQXlCLENBQUN3QixDQUFELENBQXREO0FBQ0EsV0FBTyxJQUFQO0FBQ0g7QUFDSjtBQUVEOzs7OztBQUdPLFNBQVNRLHFCQUFULENBQStCRixFQUEvQixFQUFvRDtBQUN2RDlCLEVBQUFBLHlCQUF5QixHQUFHOEIsRUFBNUI7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFueUtleVZhbHVlVHlwZSwgQW55RnVuY3Rpb25UeXBlIH0gZnJvbSBcIi4uL2RlY2xhcmF0aW9uL2NvbW1vblwiXHJcblxyXG4vKipcclxuICogdHJ5UnVu5Zyo6LCD55So5byC5bi45pe25omn6KGM55qE5Ye95pWwXHJcbiAqL1xyXG5sZXQgZGVmYXVsdFRyeVJ1bkVycm9ySGFuZGxlcjogQW55RnVuY3Rpb25UeXBlID0gKCkgPT4geyB9XHJcblxyXG4vKipcclxuICog5b2T5YmN546v5aKD5Lit55qE5YWo5bGA5a+56LGhXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2xvYmFsT2JqZWN0ID0gZ2V0R2xvYmFsT2JqZWN0KClcclxuXHJcbi8qKlxyXG4gKiDlvZPliY3njq/looPkuK3nmoRkb2N1bWVudOWvueixoe+8jOiLpeayoeacie+8jOWImeS4um51bGxcclxuICovXHJcbmV4cG9ydCBjb25zdCBkb2N1bWVudCA9IGdldERvY3VtZW50KClcclxuXHJcbi8qKlxyXG4gKiDmmK/lkKbkuLrmnI3liqHlmajnjq/looNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1NlcnZlcigpIHtcclxuICAgIHJldHVybiB0eXBlb2YgKHdpbmRvdykgPT09ICd1bmRlZmluZWQnXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmmK/lkKbkuLrmtY/op4jlmajnjq/looNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Jvd3NlcigpIHtcclxuICAgIHJldHVybiAhaXNTZXJ2ZXIoKVxyXG59XHJcblxyXG4vKipcclxuICog6I635Y+W5YWo5bGA5a+56LGhXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0R2xvYmFsT2JqZWN0KCk6IFdpbmRvdyB8IE5vZGVKUy5HbG9iYWwge1xyXG4gICAgaWYgKGlzQm93c2VyKCkpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZ2xvYmFsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDojrflj5Zsb2NhbFN0b3JhZ2Xlr7nosaFcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbFN0b3JhZ2UoKTogU3RvcmFnZSB7XHJcbiAgICByZXR1cm4gKChnbG9iYWxPYmplY3QgYXMgYW55KS5sb2NhbFN0b3JhZ2UgfHwgbnVsbCkgYXMgU3RvcmFnZVxyXG59XHJcblxyXG4vKipcclxuICog6I635Y+WZG9jdW1lbnTlr7nosaFcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREb2N1bWVudCgpOiBEb2N1bWVudCB7XHJcbiAgICByZXR1cm4gKChnbG9iYWxPYmplY3QgYXMgYW55KS5kb2N1bWVudCB8fCBudWxsKSBhcyBEb2N1bWVudFxyXG59XHJcblxyXG4vKipcclxuICog5Yib5bu65YWo5bGA5ZG95ZCN56m66Ze0XHJcbiAqIEBwYXJhbSBuYW1lIOWQjeensO+8jOWmglwiQS5CLkNcIlxyXG4gKiBAcmV0dXJucyDlhajlsYDlr7nosaHvvIzlpoLvvJp3aW5kb3cuQS5CLkNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOYW1lc3BhY2UobmFtZTogc3RyaW5nKTogb2JqZWN0IHtcclxuICAgIGlmICghbmFtZSkge1xyXG4gICAgICAgIHJldHVybiBudWxsIGFzIGFueVxyXG4gICAgfVxyXG4gICAgbGV0IG9iajogYW55ID0gZ2xvYmFsT2JqZWN0LCB0b2tlbnMgPSBuYW1lLnNwbGl0KFwiLlwiKSwgdG9rZW4gPSBcIlwiXHJcbiAgICB3aGlsZSAodG9rZW5zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB0b2tlbiA9IHRva2Vucy5zaGlmdCgpIGFzIHN0cmluZ1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb2JqW3Rva2VuXSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBvYmpbdG9rZW5dID0ge31cclxuICAgICAgICB9XHJcbiAgICAgICAgb2JqID0gb2JqW3Rva2VuXVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9ialxyXG59XHJcblxyXG4vKipcclxuICog6I635Y+W5oyH5a6a5a+56LGh55qE5oyH5a6a5bGe5oCnXHJcbiAqIEBwYXJhbSBvYmog5a+56LGhXHJcbiAqIEBwYXJhbSBwYXRoIOWxnuaAp+i3r+W+hO+8jOWmgu+8mmEuYi5jXHJcbiAqIEByZXR1cm5zIOi/lOWbnm9iai5hLmIuY++8jOWmguaenOiOt+WPluWksei0pe+8jOWImei/lOWbnm51bGxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZTxUPihvYmo6IEFueUtleVZhbHVlVHlwZSwgcGF0aDogc3RyaW5nKTogVCB8IG51bGwge1xyXG4gICAgaWYgKCFvYmogfHwgIXBhdGgpIHtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgbGV0IHRlbXAgPSBvYmpcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcGF0aC5zcGxpdChcIi5cIikuZm9yRWFjaChrZXlOYW1lID0+IHtcclxuICAgICAgICAgICAgdGVtcCA9IHRlbXBba2V5TmFtZV1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmICh0eXBlb2YgKHRlbXApID09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0ZW1wIGFzIFRcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog5rex5bqmY2xvbmVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWVwQ2xvbmU8VD4ob2JqOiBUKTogVCB8IG51bGwge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlsJ3or5Xov5DooYzmjIflrppmdW5jdGlvbu+8m+iLpeW8guW4uO+8jOWImeaJp+ihjOWFqOWxgOmFjee9rueahOW8guW4uOWkhOeQhuWHveaVsHRyeVJ1bkVycm9ySGFuZGxlcu+8jOW5tui/lOWbnm51bGxcclxuICogQHBhcmFtIGZuICDlh73mlbDlkI1cclxuICogQHBhcmFtIGFyZ3Mg5Y+C5pWwXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJ5UnVuPFQ+KGZuOiBBbnlGdW5jdGlvblR5cGUsIC4uLmFyZ3M6IGFueVtdKTogVCB8IG51bGwge1xyXG4gICAgaWYgKCFmbikge1xyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBmbiguLi5hcmdzKSBhcyBUXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgZGVmYXVsdFRyeVJ1bkVycm9ySGFuZGxlciAmJiBkZWZhdWx0VHJ5UnVuRXJyb3JIYW5kbGVyKGUpXHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOmHjeaWsOiuvue9ruWFqOWxgOW8guW4uOWkhOeQhuWHveaVsFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFRyeVJ1bkVycm9ySGFuZGxlcihmbjogQW55RnVuY3Rpb25UeXBlKSB7XHJcbiAgICBkZWZhdWx0VHJ5UnVuRXJyb3JIYW5kbGVyID0gZm5cclxufSJdfQ==