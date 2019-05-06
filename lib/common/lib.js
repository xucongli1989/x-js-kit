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
exports.document = void 0;

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
 * 获取document对象
 */


function getDocument() {
  var g = getGlobalObject();
  return g.document || null;
}
/**
 * 当前环境中的document对象，若没有，则为null
 */


var document = getDocument();
/**
 * 创建全局命名空间
 * @param name 名称，如"A.B.C"
 * @returns 全局对象，如：window.A.B.C
 */

exports.document = document;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vbGliLnRzIl0sIm5hbWVzIjpbImlzU2VydmVyIiwid2luZG93IiwiaXNCb3dzZXIiLCJnZXRHbG9iYWxPYmplY3QiLCJnbG9iYWwiLCJnZXRMb2NhbFN0b3JhZ2UiLCJnIiwibG9jYWxTdG9yYWdlIiwiZ2V0RG9jdW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZU5hbWVzcGFjZSIsIm5hbWUiLCJvYmoiLCJ0b2tlbnMiLCJzcGxpdCIsInRva2VuIiwibGVuZ3RoIiwic2hpZnQiLCJnZXRWYWx1ZSIsInBhdGgiLCJ0ZW1wIiwiZm9yRWFjaCIsImtleU5hbWUiLCJlIiwiZGVlcENsb25lIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwidHJ5UnVuIiwiZm4iLCJhcmdzIiwiZXJyRm4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFFQTs7O0FBR08sU0FBU0EsUUFBVCxHQUFvQjtBQUN2QixTQUFPLE9BQVFDLE1BQVIsS0FBb0IsV0FBM0I7QUFDSDtBQUVEOzs7OztBQUdPLFNBQVNDLFFBQVQsR0FBb0I7QUFDdkIsU0FBTyxDQUFDRixRQUFRLEVBQWhCO0FBQ0g7QUFFRDs7Ozs7QUFHTyxTQUFTRyxlQUFULEdBQTJCO0FBQzlCLE1BQUlELFFBQVEsRUFBWixFQUFnQjtBQUNaLFdBQU9ELE1BQVA7QUFDSDs7QUFDRCxTQUFPRyxNQUFQO0FBQ0g7QUFFRDs7Ozs7QUFHTyxTQUFTQyxlQUFULEdBQW9DO0FBQ3ZDLE1BQU1DLENBQU0sR0FBR0gsZUFBZSxFQUE5QjtBQUNBLFNBQVFHLENBQUMsQ0FBQ0MsWUFBRixJQUFrQixJQUExQjtBQUNIO0FBRUQ7Ozs7O0FBR08sU0FBU0MsV0FBVCxHQUFpQztBQUNwQyxNQUFNRixDQUFNLEdBQUdILGVBQWUsRUFBOUI7QUFDQSxTQUFRRyxDQUFDLENBQUNHLFFBQUYsSUFBYyxJQUF0QjtBQUNIO0FBRUQ7Ozs7O0FBR08sSUFBTUEsUUFBUSxHQUFHRCxXQUFXLEVBQTVCO0FBRVA7Ozs7Ozs7O0FBS08sU0FBU0UsZUFBVCxDQUF5QkMsSUFBekIsRUFBK0M7QUFDbEQsTUFBSSxDQUFDQSxJQUFMLEVBQVc7QUFDUCxXQUFPLElBQVA7QUFDSDs7QUFDRCxNQUFJQyxHQUFRLEdBQUdULGVBQWUsRUFBOUI7QUFBQSxNQUFrQ1UsTUFBTSxHQUFHRixJQUFJLENBQUNHLEtBQUwsQ0FBVyxHQUFYLENBQTNDO0FBQUEsTUFBNERDLEtBQUssR0FBRyxFQUFwRTs7QUFDQSxTQUFPRixNQUFNLENBQUNHLE1BQVAsR0FBZ0IsQ0FBdkIsRUFBMEI7QUFDdEJELElBQUFBLEtBQUssR0FBR0YsTUFBTSxDQUFDSSxLQUFQLEVBQVI7O0FBQ0EsUUFBSSxPQUFPTCxHQUFHLENBQUNHLEtBQUQsQ0FBVixLQUFzQixXQUExQixFQUF1QztBQUNuQ0gsTUFBQUEsR0FBRyxDQUFDRyxLQUFELENBQUgsR0FBYSxFQUFiO0FBQ0g7O0FBQ0RILElBQUFBLEdBQUcsR0FBR0EsR0FBRyxDQUFDRyxLQUFELENBQVQ7QUFDSDs7QUFDRCxTQUFPSCxHQUFQO0FBQ0g7QUFFRDs7Ozs7Ozs7QUFNTyxTQUFTTSxRQUFULENBQXFCTixHQUFyQixFQUEyQ08sSUFBM0MsRUFBbUU7QUFDdEUsTUFBSSxDQUFDUCxHQUFELElBQVEsQ0FBQ08sSUFBYixFQUFtQjtBQUNmLFdBQU8sSUFBUDtBQUNIOztBQUNELE1BQUlDLElBQUksR0FBR1IsR0FBWDs7QUFDQSxNQUFJO0FBQ0FPLElBQUFBLElBQUksQ0FBQ0wsS0FBTCxDQUFXLEdBQVgsRUFBZ0JPLE9BQWhCLENBQXdCLFVBQUFDLE9BQU8sRUFBSTtBQUMvQkYsTUFBQUEsSUFBSSxHQUFHQSxJQUFJLENBQUNFLE9BQUQsQ0FBWDtBQUNILEtBRkQ7O0FBR0EsUUFBSSxPQUFRRixJQUFSLElBQWlCLFdBQXJCLEVBQWtDO0FBQzlCLGFBQU8sSUFBUDtBQUNIOztBQUNELFdBQU9BLElBQVA7QUFDSCxHQVJELENBUUUsT0FBT0csQ0FBUCxFQUFVO0FBQ1IsV0FBTyxJQUFQO0FBQ0g7QUFDSjtBQUVEOzs7OztBQUdPLFNBQVNDLFNBQVQsQ0FBc0JaLEdBQXRCLEVBQXdDO0FBQzNDLE1BQUk7QUFDQSxXQUFPYSxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxTQUFMLENBQWVmLEdBQWYsQ0FBWCxDQUFQO0FBQ0gsR0FGRCxDQUVFLE9BQU9XLENBQVAsRUFBVTtBQUNSLFdBQU8sSUFBUDtBQUNIO0FBQ0o7QUFFRDs7Ozs7OztBQUtPLFNBQVNLLE1BQVQsQ0FBbUJDLEVBQW5CLEVBQWtFO0FBQ3JFLE1BQUksQ0FBQ0EsRUFBTCxFQUFTO0FBQ0wsV0FBTyxJQUFQO0FBQ0g7O0FBQ0QsTUFBSTtBQUFBLHNDQUowQ0MsSUFJMUM7QUFKMENBLE1BQUFBLElBSTFDO0FBQUE7O0FBQ0EsV0FBT0QsRUFBRSxNQUFGLFNBQU1DLElBQU4sQ0FBUDtBQUNILEdBRkQsQ0FFRSxPQUFPUCxDQUFQLEVBQVU7QUFDUixRQUFNUSxLQUFLLEdBQUcsb0NBQWQ7QUFDQUEsSUFBQUEsS0FBSyxJQUFJQSxLQUFLLENBQUNSLENBQUQsQ0FBZDtBQUNBLFdBQU8sSUFBUDtBQUNIO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbnlLZXlWYWx1ZVR5cGUsIEFueUZ1bmN0aW9uVHlwZSB9IGZyb20gXCIuLi9kZWNsYXJhdGlvbi9jb21tb25cIlxyXG5pbXBvcnQgeyBnZXRUcnlSdW5FcnJvckhhbmRsZXIgfSBmcm9tIFwiLi4vY29uZmlnL2NvbW1vblwiXHJcblxyXG4vKipcclxuICog5piv5ZCm5Li65pyN5Yqh5Zmo546v5aKDXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNTZXJ2ZXIoKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mICh3aW5kb3cpID09PSAndW5kZWZpbmVkJ1xyXG59XHJcblxyXG4vKipcclxuICog5piv5ZCm5Li65rWP6KeI5Zmo546v5aKDXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNCb3dzZXIoKSB7XHJcbiAgICByZXR1cm4gIWlzU2VydmVyKClcclxufVxyXG5cclxuLyoqXHJcbiAqIOiOt+WPluWFqOWxgOWvueixoVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEdsb2JhbE9iamVjdCgpIHtcclxuICAgIGlmIChpc0Jvd3NlcigpKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvd1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGdsb2JhbFxyXG59XHJcblxyXG4vKipcclxuICog6I635Y+WbG9jYWxTdG9yYWdl5a+56LGhXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxTdG9yYWdlKCk6IFN0b3JhZ2Uge1xyXG4gICAgY29uc3QgZzogYW55ID0gZ2V0R2xvYmFsT2JqZWN0KClcclxuICAgIHJldHVybiAoZy5sb2NhbFN0b3JhZ2UgfHwgbnVsbCkgYXMgU3RvcmFnZVxyXG59XHJcblxyXG4vKipcclxuICog6I635Y+WZG9jdW1lbnTlr7nosaFcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREb2N1bWVudCgpOiBEb2N1bWVudCB7XHJcbiAgICBjb25zdCBnOiBhbnkgPSBnZXRHbG9iYWxPYmplY3QoKVxyXG4gICAgcmV0dXJuIChnLmRvY3VtZW50IHx8IG51bGwpIGFzIERvY3VtZW50XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlvZPliY3njq/looPkuK3nmoRkb2N1bWVudOWvueixoe+8jOiLpeayoeacie+8jOWImeS4um51bGxcclxuICovXHJcbmV4cG9ydCBjb25zdCBkb2N1bWVudCA9IGdldERvY3VtZW50KClcclxuXHJcbi8qKlxyXG4gKiDliJvlu7rlhajlsYDlkb3lkI3nqbrpl7RcclxuICogQHBhcmFtIG5hbWUg5ZCN56ew77yM5aaCXCJBLkIuQ1wiXHJcbiAqIEByZXR1cm5zIOWFqOWxgOWvueixoe+8jOWmgu+8mndpbmRvdy5BLkIuQ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5hbWVzcGFjZShuYW1lOiBzdHJpbmcpOiBvYmplY3Qge1xyXG4gICAgaWYgKCFuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGwgYXMgYW55XHJcbiAgICB9XHJcbiAgICBsZXQgb2JqOiBhbnkgPSBnZXRHbG9iYWxPYmplY3QoKSwgdG9rZW5zID0gbmFtZS5zcGxpdChcIi5cIiksIHRva2VuID0gXCJcIlxyXG4gICAgd2hpbGUgKHRva2Vucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdG9rZW4gPSB0b2tlbnMuc2hpZnQoKSBhcyBzdHJpbmdcclxuICAgICAgICBpZiAodHlwZW9mIG9ialt0b2tlbl0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgb2JqW3Rva2VuXSA9IHt9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9iaiA9IG9ialt0b2tlbl1cclxuICAgIH1cclxuICAgIHJldHVybiBvYmpcclxufVxyXG5cclxuLyoqXHJcbiAqIOiOt+WPluaMh+WumuWvueixoeeahOaMh+WumuWxnuaAp1xyXG4gKiBAcGFyYW0gb2JqIOWvueixoVxyXG4gKiBAcGFyYW0gcGF0aCDlsZ7mgKfot6/lvoTvvIzlpoLvvJphLmIuY1xyXG4gKiBAcmV0dXJucyDov5Tlm55vYmouYS5iLmPvvIzlpoLmnpzojrflj5blpLHotKXvvIzliJnov5Tlm55udWxsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWU8VD4ob2JqOiBBbnlLZXlWYWx1ZVR5cGUsIHBhdGg6IHN0cmluZyk6IFQgfCBudWxsIHtcclxuICAgIGlmICghb2JqIHx8ICFwYXRoKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIGxldCB0ZW1wID0gb2JqXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHBhdGguc3BsaXQoXCIuXCIpLmZvckVhY2goa2V5TmFtZSA9PiB7XHJcbiAgICAgICAgICAgIHRlbXAgPSB0ZW1wW2tleU5hbWVdXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAodHlwZW9mICh0ZW1wKSA9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGVtcCBhcyBUXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOa3seW6pmNsb25lXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVlcENsb25lPFQ+KG9iajogVCk6IFQgfCBudWxsIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog5bCd6K+V6L+Q6KGM5oyH5a6aZnVuY3Rpb27vvJvoi6XlvILluLjvvIzliJnmiafooYzlhajlsYDphY3nva7nmoTlvILluLjlpITnkIblh73mlbB0cnlSdW5FcnJvckhhbmRsZXLvvIzlubbov5Tlm55udWxsXHJcbiAqIEBwYXJhbSBmbiAg5Ye95pWw5ZCNXHJcbiAqIEBwYXJhbSBhcmdzIOWPguaVsFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyeVJ1bjxUPihmbjogQW55RnVuY3Rpb25UeXBlLCAuLi5hcmdzOiBhbnlbXSk6IFQgfCBudWxsIHtcclxuICAgIGlmICghZm4pIHtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gZm4oLi4uYXJncykgYXMgVFxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnN0IGVyckZuID0gZ2V0VHJ5UnVuRXJyb3JIYW5kbGVyKClcclxuICAgICAgICBlcnJGbiAmJiBlcnJGbihlKVxyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbn0iXX0=