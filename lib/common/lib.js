"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tryRun = exports.deepClone = exports.getValue = exports.createNamespace = exports.getLocalStorage = exports.getGlobalObject = exports.isBowser = exports.isServer = void 0;

var _common = require("../config/common");

/**
 * 是否为服务器环境
 */
var isServer = function isServer() {
  return typeof window === 'undefined';
};
/**
 * 是否为浏览器环境
 */


exports.isServer = isServer;

var isBowser = function isBowser() {
  return !isServer();
};
/**
 * 获取全局对象
 */


exports.isBowser = isBowser;

var getGlobalObject = function getGlobalObject() {
  if (isBowser()) {
    return window;
  }

  return global;
};
/**
 * 获取localStorage对象
 */


exports.getGlobalObject = getGlobalObject;

var getLocalStorage = function getLocalStorage() {
  var g = getGlobalObject();
  return g.localStorage || null;
};
/**
 * 创建全局命名空间
 * @param name 名称，如"A.B.C"
 * @returns 全局对象，如：window.A.B.C
 */


exports.getLocalStorage = getLocalStorage;

var createNamespace = function createNamespace(name) {
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
};
/**
 * 获取指定对象的指定属性
 * @param obj 对象
 * @param path 属性路径，如：a.b.c
 * @returns 返回obj.a.b.c，如果获取失败，则返回null
 */


exports.createNamespace = createNamespace;

var getValue = function getValue(obj, path) {
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
};
/**
 * 深度clone
 */


exports.getValue = getValue;

var deepClone = function deepClone(obj) {
  try {
    return JSON.parse(JSON.stringify(obj));
  } catch (e) {
    return null;
  }
};
/**
 * 尝试运行指定function；若异常，则执行全局配置的异常处理函数tryRunErrorHandler，并返回null
 * @param fn  函数名
 * @param args 参数
 */


exports.deepClone = deepClone;

var tryRun = function tryRun(fn) {
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
};

exports.tryRun = tryRun;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vbGliLnRzIl0sIm5hbWVzIjpbImlzU2VydmVyIiwid2luZG93IiwiaXNCb3dzZXIiLCJnZXRHbG9iYWxPYmplY3QiLCJnbG9iYWwiLCJnZXRMb2NhbFN0b3JhZ2UiLCJnIiwibG9jYWxTdG9yYWdlIiwiY3JlYXRlTmFtZXNwYWNlIiwibmFtZSIsIm9iaiIsInRva2VucyIsInNwbGl0IiwidG9rZW4iLCJsZW5ndGgiLCJzaGlmdCIsImdldFZhbHVlIiwicGF0aCIsInRlbXAiLCJmb3JFYWNoIiwia2V5TmFtZSIsImUiLCJkZWVwQ2xvbmUiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJ0cnlSdW4iLCJmbiIsImFyZ3MiLCJlcnJGbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUVBOzs7QUFHTyxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQzFCLFNBQU8sT0FBUUMsTUFBUixLQUFvQixXQUEzQjtBQUNILENBRk07QUFJUDs7Ozs7OztBQUdPLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDMUIsU0FBTyxDQUFDRixRQUFRLEVBQWhCO0FBQ0gsQ0FGTTtBQUlQOzs7Ozs7O0FBR08sSUFBTUcsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQ2pDLE1BQUlELFFBQVEsRUFBWixFQUFnQjtBQUNaLFdBQU9ELE1BQVA7QUFDSDs7QUFDRCxTQUFPRyxNQUFQO0FBQ0gsQ0FMTTtBQU9QOzs7Ozs7O0FBR08sSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFlO0FBQzFDLE1BQU1DLENBQU0sR0FBR0gsZUFBZSxFQUE5QjtBQUNBLFNBQVFHLENBQUMsQ0FBQ0MsWUFBRixJQUFrQixJQUExQjtBQUNILENBSE07QUFLUDs7Ozs7Ozs7O0FBS08sSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxJQUFELEVBQTBCO0FBQ3JELE1BQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1AsV0FBTyxJQUFQO0FBQ0g7O0FBQ0QsTUFBSUMsR0FBUSxHQUFHUCxlQUFlLEVBQTlCO0FBQUEsTUFBa0NRLE1BQU0sR0FBR0YsSUFBSSxDQUFDRyxLQUFMLENBQVcsR0FBWCxDQUEzQztBQUFBLE1BQTREQyxLQUFLLEdBQUcsRUFBcEU7O0FBQ0EsU0FBT0YsTUFBTSxDQUFDRyxNQUFQLEdBQWdCLENBQXZCLEVBQTBCO0FBQ3RCRCxJQUFBQSxLQUFLLEdBQUdGLE1BQU0sQ0FBQ0ksS0FBUCxFQUFSOztBQUNBLFFBQUksT0FBT0wsR0FBRyxDQUFDRyxLQUFELENBQVYsS0FBc0IsV0FBMUIsRUFBdUM7QUFDbkNILE1BQUFBLEdBQUcsQ0FBQ0csS0FBRCxDQUFILEdBQWEsRUFBYjtBQUNIOztBQUNESCxJQUFBQSxHQUFHLEdBQUdBLEdBQUcsQ0FBQ0csS0FBRCxDQUFUO0FBQ0g7O0FBQ0QsU0FBT0gsR0FBUDtBQUNILENBYk07QUFlUDs7Ozs7Ozs7OztBQU1PLElBQU1NLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUlOLEdBQUosRUFBMEJPLElBQTFCLEVBQXFEO0FBQ3pFLE1BQUksQ0FBQ1AsR0FBRCxJQUFRLENBQUNPLElBQWIsRUFBbUI7QUFDZixXQUFPLElBQVA7QUFDSDs7QUFDRCxNQUFJQyxJQUFJLEdBQUdSLEdBQVg7O0FBQ0EsTUFBSTtBQUNBTyxJQUFBQSxJQUFJLENBQUNMLEtBQUwsQ0FBVyxHQUFYLEVBQWdCTyxPQUFoQixDQUF3QixVQUFBQyxPQUFPLEVBQUk7QUFDL0JGLE1BQUFBLElBQUksR0FBR0EsSUFBSSxDQUFDRSxPQUFELENBQVg7QUFDSCxLQUZEOztBQUdBLFFBQUksT0FBUUYsSUFBUixJQUFpQixXQUFyQixFQUFrQztBQUM5QixhQUFPLElBQVA7QUFDSDs7QUFDRCxXQUFPQSxJQUFQO0FBQ0gsR0FSRCxDQVFFLE9BQU9HLENBQVAsRUFBVTtBQUNSLFdBQU8sSUFBUDtBQUNIO0FBQ0osQ0FoQk07QUFrQlA7Ozs7Ozs7QUFHTyxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFJWixHQUFKLEVBQXlCO0FBQzlDLE1BQUk7QUFDQSxXQUFPYSxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxTQUFMLENBQWVmLEdBQWYsQ0FBWCxDQUFQO0FBQ0gsR0FGRCxDQUVFLE9BQU9XLENBQVAsRUFBVTtBQUNSLFdBQU8sSUFBUDtBQUNIO0FBQ0osQ0FOTTtBQVFQOzs7Ozs7Ozs7QUFLTyxJQUFNSyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFJQyxFQUFKLEVBQXNEO0FBQ3hFLE1BQUksQ0FBQ0EsRUFBTCxFQUFTO0FBQ0wsV0FBTyxJQUFQO0FBQ0g7O0FBQ0QsTUFBSTtBQUFBLHNDQUowQ0MsSUFJMUM7QUFKMENBLE1BQUFBLElBSTFDO0FBQUE7O0FBQ0EsV0FBT0QsRUFBRSxNQUFGLFNBQU1DLElBQU4sQ0FBUDtBQUNILEdBRkQsQ0FFRSxPQUFPUCxDQUFQLEVBQVU7QUFDUixRQUFNUSxLQUFLLEdBQUcsb0NBQWQ7QUFDQUEsSUFBQUEsS0FBSyxJQUFJQSxLQUFLLENBQUNSLENBQUQsQ0FBZDtBQUNBLFdBQU8sSUFBUDtBQUNIO0FBQ0osQ0FYTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFueUtleVZhbHVlVHlwZSwgQW55RnVuY3Rpb25UeXBlIH0gZnJvbSBcIi4uL2RlY2xhcmF0aW9uL2NvbW1vblwiXHJcbmltcG9ydCB7IGdldFRyeVJ1bkVycm9ySGFuZGxlciB9IGZyb20gXCIuLi9jb25maWcvY29tbW9uXCJcclxuXHJcbi8qKlxyXG4gKiDmmK/lkKbkuLrmnI3liqHlmajnjq/looNcclxuICovXHJcbmV4cG9ydCBjb25zdCBpc1NlcnZlciA9ICgpID0+IHtcclxuICAgIHJldHVybiB0eXBlb2YgKHdpbmRvdykgPT09ICd1bmRlZmluZWQnXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmmK/lkKbkuLrmtY/op4jlmajnjq/looNcclxuICovXHJcbmV4cG9ydCBjb25zdCBpc0Jvd3NlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAhaXNTZXJ2ZXIoKVxyXG59XHJcblxyXG4vKipcclxuICog6I635Y+W5YWo5bGA5a+56LGhXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0R2xvYmFsT2JqZWN0ID0gKCkgPT4ge1xyXG4gICAgaWYgKGlzQm93c2VyKCkpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZ2xvYmFsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDojrflj5Zsb2NhbFN0b3JhZ2Xlr7nosaFcclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRMb2NhbFN0b3JhZ2UgPSAoKTogU3RvcmFnZSA9PiB7XHJcbiAgICBjb25zdCBnOiBhbnkgPSBnZXRHbG9iYWxPYmplY3QoKVxyXG4gICAgcmV0dXJuIChnLmxvY2FsU3RvcmFnZSB8fCBudWxsKSBhcyBTdG9yYWdlXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliJvlu7rlhajlsYDlkb3lkI3nqbrpl7RcclxuICogQHBhcmFtIG5hbWUg5ZCN56ew77yM5aaCXCJBLkIuQ1wiXHJcbiAqIEByZXR1cm5zIOWFqOWxgOWvueixoe+8jOWmgu+8mndpbmRvdy5BLkIuQ1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZU5hbWVzcGFjZSA9IChuYW1lOiBzdHJpbmcpOiBvYmplY3QgPT4ge1xyXG4gICAgaWYgKCFuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGwgYXMgYW55XHJcbiAgICB9XHJcbiAgICBsZXQgb2JqOiBhbnkgPSBnZXRHbG9iYWxPYmplY3QoKSwgdG9rZW5zID0gbmFtZS5zcGxpdChcIi5cIiksIHRva2VuID0gXCJcIlxyXG4gICAgd2hpbGUgKHRva2Vucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdG9rZW4gPSB0b2tlbnMuc2hpZnQoKSBhcyBzdHJpbmdcclxuICAgICAgICBpZiAodHlwZW9mIG9ialt0b2tlbl0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgb2JqW3Rva2VuXSA9IHt9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9iaiA9IG9ialt0b2tlbl1cclxuICAgIH1cclxuICAgIHJldHVybiBvYmpcclxufVxyXG5cclxuLyoqXHJcbiAqIOiOt+WPluaMh+WumuWvueixoeeahOaMh+WumuWxnuaAp1xyXG4gKiBAcGFyYW0gb2JqIOWvueixoVxyXG4gKiBAcGFyYW0gcGF0aCDlsZ7mgKfot6/lvoTvvIzlpoLvvJphLmIuY1xyXG4gKiBAcmV0dXJucyDov5Tlm55vYmouYS5iLmPvvIzlpoLmnpzojrflj5blpLHotKXvvIzliJnov5Tlm55udWxsXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0VmFsdWUgPSA8VD4ob2JqOiBBbnlLZXlWYWx1ZVR5cGUsIHBhdGg6IHN0cmluZyk6IFQgfCBudWxsID0+IHtcclxuICAgIGlmICghb2JqIHx8ICFwYXRoKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIGxldCB0ZW1wID0gb2JqXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHBhdGguc3BsaXQoXCIuXCIpLmZvckVhY2goa2V5TmFtZSA9PiB7XHJcbiAgICAgICAgICAgIHRlbXAgPSB0ZW1wW2tleU5hbWVdXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAodHlwZW9mICh0ZW1wKSA9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGVtcCBhcyBUXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOa3seW6pmNsb25lXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZGVlcENsb25lID0gPFQ+KG9iajogVCk6IFQgfCBudWxsID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog5bCd6K+V6L+Q6KGM5oyH5a6aZnVuY3Rpb27vvJvoi6XlvILluLjvvIzliJnmiafooYzlhajlsYDphY3nva7nmoTlvILluLjlpITnkIblh73mlbB0cnlSdW5FcnJvckhhbmRsZXLvvIzlubbov5Tlm55udWxsXHJcbiAqIEBwYXJhbSBmbiAg5Ye95pWw5ZCNXHJcbiAqIEBwYXJhbSBhcmdzIOWPguaVsFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHRyeVJ1biA9IDxUPihmbjogQW55RnVuY3Rpb25UeXBlLCAuLi5hcmdzOiBhbnlbXSk6IFQgfCBudWxsID0+IHtcclxuICAgIGlmICghZm4pIHtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gZm4oLi4uYXJncykgYXMgVFxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnN0IGVyckZuID0gZ2V0VHJ5UnVuRXJyb3JIYW5kbGVyKClcclxuICAgICAgICBlcnJGbiAmJiBlcnJGbihlKVxyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbn0iXX0=