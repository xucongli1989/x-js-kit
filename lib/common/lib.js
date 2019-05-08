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

/**
 * tryRun在调用异常时执行的函数
 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vbGliLnRzIl0sIm5hbWVzIjpbImRlZmF1bHRUcnlSdW5FcnJvckhhbmRsZXIiLCJnbG9iYWxPYmplY3QiLCJnZXRHbG9iYWxPYmplY3QiLCJkb2N1bWVudCIsImdldERvY3VtZW50IiwiaXNTZXJ2ZXIiLCJ3aW5kb3ciLCJpc0Jvd3NlciIsImdsb2JhbCIsImdldExvY2FsU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImNyZWF0ZU5hbWVzcGFjZSIsIm5hbWUiLCJvYmoiLCJ0b2tlbnMiLCJzcGxpdCIsInRva2VuIiwibGVuZ3RoIiwic2hpZnQiLCJnZXRWYWx1ZSIsInBhdGgiLCJ0ZW1wIiwiZm9yRWFjaCIsImtleU5hbWUiLCJlIiwiZGVlcENsb25lIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwidHJ5UnVuIiwiZm4iLCJhcmdzIiwic2V0VHJ5UnVuRXJyb3JIYW5kbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7QUFHQSxJQUFJQSx5QkFBMEMsR0FBRyxxQ0FBTSxDQUFHLENBQTFEO0FBRUE7Ozs7O0FBR08sSUFBTUMsWUFBWSxHQUFHQyxlQUFlLEVBQXBDO0FBRVA7Ozs7O0FBR08sSUFBTUMsUUFBUSxHQUFHQyxXQUFXLEVBQTVCO0FBRVA7Ozs7OztBQUdPLFNBQVNDLFFBQVQsR0FBb0I7QUFDdkIsU0FBTyxPQUFRQyxNQUFSLEtBQW9CLFdBQTNCO0FBQ0g7QUFFRDs7Ozs7QUFHTyxTQUFTQyxRQUFULEdBQW9CO0FBQ3ZCLFNBQU8sQ0FBQ0YsUUFBUSxFQUFoQjtBQUNIO0FBRUQ7Ozs7O0FBR08sU0FBU0gsZUFBVCxHQUFtRDtBQUN0RCxNQUFJSyxRQUFRLEVBQVosRUFBZ0I7QUFDWixXQUFPRCxNQUFQO0FBQ0g7O0FBQ0QsU0FBT0UsTUFBUDtBQUNIO0FBRUQ7Ozs7O0FBR08sU0FBU0MsZUFBVCxHQUFvQztBQUN2QyxTQUFTUixZQUFELENBQXNCUyxZQUF0QixJQUFzQyxJQUE5QztBQUNIO0FBRUQ7Ozs7O0FBR08sU0FBU04sV0FBVCxHQUFpQztBQUNwQyxTQUFTSCxZQUFELENBQXNCRSxRQUF0QixJQUFrQyxJQUExQztBQUNIO0FBRUQ7Ozs7Ozs7QUFLTyxTQUFTUSxlQUFULENBQXlCQyxJQUF6QixFQUErQztBQUNsRCxNQUFJLENBQUNBLElBQUwsRUFBVztBQUNQLFdBQU8sSUFBUDtBQUNIOztBQUNELE1BQUlDLEdBQVEsR0FBR1osWUFBZjtBQUFBLE1BQTZCYSxNQUFNLEdBQUdGLElBQUksQ0FBQ0csS0FBTCxDQUFXLEdBQVgsQ0FBdEM7QUFBQSxNQUF1REMsS0FBSyxHQUFHLEVBQS9EOztBQUNBLFNBQU9GLE1BQU0sQ0FBQ0csTUFBUCxHQUFnQixDQUF2QixFQUEwQjtBQUN0QkQsSUFBQUEsS0FBSyxHQUFHRixNQUFNLENBQUNJLEtBQVAsRUFBUjs7QUFDQSxRQUFJLE9BQU9MLEdBQUcsQ0FBQ0csS0FBRCxDQUFWLEtBQXNCLFdBQTFCLEVBQXVDO0FBQ25DSCxNQUFBQSxHQUFHLENBQUNHLEtBQUQsQ0FBSCxHQUFhLEVBQWI7QUFDSDs7QUFDREgsSUFBQUEsR0FBRyxHQUFHQSxHQUFHLENBQUNHLEtBQUQsQ0FBVDtBQUNIOztBQUNELFNBQU9ILEdBQVA7QUFDSDtBQUVEOzs7Ozs7OztBQU1PLFNBQVNNLFFBQVQsQ0FBcUJOLEdBQXJCLEVBQTJDTyxJQUEzQyxFQUFtRTtBQUN0RSxNQUFJLENBQUNQLEdBQUQsSUFBUSxDQUFDTyxJQUFiLEVBQW1CO0FBQ2YsV0FBTyxJQUFQO0FBQ0g7O0FBQ0QsTUFBSUMsSUFBSSxHQUFHUixHQUFYOztBQUNBLE1BQUk7QUFDQU8sSUFBQUEsSUFBSSxDQUFDTCxLQUFMLENBQVcsR0FBWCxFQUFnQk8sT0FBaEIsQ0FBd0IsVUFBQUMsT0FBTyxFQUFJO0FBQy9CRixNQUFBQSxJQUFJLEdBQUdBLElBQUksQ0FBQ0UsT0FBRCxDQUFYO0FBQ0gsS0FGRDs7QUFHQSxRQUFJLE9BQVFGLElBQVIsSUFBaUIsV0FBckIsRUFBa0M7QUFDOUIsYUFBTyxJQUFQO0FBQ0g7O0FBQ0QsV0FBT0EsSUFBUDtBQUNILEdBUkQsQ0FRRSxPQUFPRyxDQUFQLEVBQVU7QUFDUixXQUFPLElBQVA7QUFDSDtBQUNKO0FBRUQ7Ozs7O0FBR08sU0FBU0MsU0FBVCxDQUFzQlosR0FBdEIsRUFBd0M7QUFDM0MsTUFBSTtBQUNBLFdBQU9hLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLFNBQUwsQ0FBZWYsR0FBZixDQUFYLENBQVA7QUFDSCxHQUZELENBRUUsT0FBT1csQ0FBUCxFQUFVO0FBQ1IsV0FBTyxJQUFQO0FBQ0g7QUFDSjtBQUVEOzs7Ozs7O0FBS08sU0FBU0ssTUFBVCxDQUFtQkMsRUFBbkIsRUFBa0U7QUFDckUsTUFBSSxDQUFDQSxFQUFMLEVBQVM7QUFDTCxXQUFPLElBQVA7QUFDSDs7QUFDRCxNQUFJO0FBQUEsc0NBSjBDQyxJQUkxQztBQUowQ0EsTUFBQUEsSUFJMUM7QUFBQTs7QUFDQSxXQUFPRCxFQUFFLE1BQUYsU0FBTUMsSUFBTixDQUFQO0FBQ0gsR0FGRCxDQUVFLE9BQU9QLENBQVAsRUFBVTtBQUNSeEIsSUFBQUEseUJBQXlCLElBQUlBLHlCQUF5QixDQUFDd0IsQ0FBRCxDQUF0RDtBQUNBLFdBQU8sSUFBUDtBQUNIO0FBQ0o7QUFFRDs7Ozs7QUFHTyxTQUFTUSxxQkFBVCxDQUErQkYsRUFBL0IsRUFBb0Q7QUFDdkQ5QixFQUFBQSx5QkFBeUIsR0FBRzhCLEVBQTVCO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbnlLZXlWYWx1ZVR5cGUsIEFueUZ1bmN0aW9uVHlwZSB9IGZyb20gXCIuLi9kZWNsYXJhdGlvbi9jb21tb25cIlxyXG5cclxuLyoqXHJcbiAqIHRyeVJ1buWcqOiwg+eUqOW8guW4uOaXtuaJp+ihjOeahOWHveaVsFxyXG4gKi9cclxubGV0IGRlZmF1bHRUcnlSdW5FcnJvckhhbmRsZXI6IEFueUZ1bmN0aW9uVHlwZSA9ICgpID0+IHsgfVxyXG5cclxuLyoqXHJcbiAqIOW9k+WJjeeOr+Wig+S4reeahOWFqOWxgOWvueixoVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdsb2JhbE9iamVjdCA9IGdldEdsb2JhbE9iamVjdCgpXHJcblxyXG4vKipcclxuICog5b2T5YmN546v5aKD5Lit55qEZG9jdW1lbnTlr7nosaHvvIzoi6XmsqHmnInvvIzliJnkuLpudWxsXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpXHJcblxyXG4vKipcclxuICog5piv5ZCm5Li65pyN5Yqh5Zmo546v5aKDXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNTZXJ2ZXIoKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mICh3aW5kb3cpID09PSAndW5kZWZpbmVkJ1xyXG59XHJcblxyXG4vKipcclxuICog5piv5ZCm5Li65rWP6KeI5Zmo546v5aKDXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNCb3dzZXIoKSB7XHJcbiAgICByZXR1cm4gIWlzU2VydmVyKClcclxufVxyXG5cclxuLyoqXHJcbiAqIOiOt+WPluWFqOWxgOWvueixoVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEdsb2JhbE9iamVjdCgpOiBXaW5kb3cgfCBOb2RlSlMuR2xvYmFsIHtcclxuICAgIGlmIChpc0Jvd3NlcigpKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvd1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGdsb2JhbFxyXG59XHJcblxyXG4vKipcclxuICog6I635Y+WbG9jYWxTdG9yYWdl5a+56LGhXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxTdG9yYWdlKCk6IFN0b3JhZ2Uge1xyXG4gICAgcmV0dXJuICgoZ2xvYmFsT2JqZWN0IGFzIGFueSkubG9jYWxTdG9yYWdlIHx8IG51bGwpIGFzIFN0b3JhZ2VcclxufVxyXG5cclxuLyoqXHJcbiAqIOiOt+WPlmRvY3VtZW505a+56LGhXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9jdW1lbnQoKTogRG9jdW1lbnQge1xyXG4gICAgcmV0dXJuICgoZ2xvYmFsT2JqZWN0IGFzIGFueSkuZG9jdW1lbnQgfHwgbnVsbCkgYXMgRG9jdW1lbnRcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIm+W7uuWFqOWxgOWRveWQjeepuumXtFxyXG4gKiBAcGFyYW0gbmFtZSDlkI3np7DvvIzlpoJcIkEuQi5DXCJcclxuICogQHJldHVybnMg5YWo5bGA5a+56LGh77yM5aaC77yad2luZG93LkEuQi5DXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmFtZXNwYWNlKG5hbWU6IHN0cmluZyk6IG9iamVjdCB7XHJcbiAgICBpZiAoIW5hbWUpIHtcclxuICAgICAgICByZXR1cm4gbnVsbCBhcyBhbnlcclxuICAgIH1cclxuICAgIGxldCBvYmo6IGFueSA9IGdsb2JhbE9iamVjdCwgdG9rZW5zID0gbmFtZS5zcGxpdChcIi5cIiksIHRva2VuID0gXCJcIlxyXG4gICAgd2hpbGUgKHRva2Vucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdG9rZW4gPSB0b2tlbnMuc2hpZnQoKSBhcyBzdHJpbmdcclxuICAgICAgICBpZiAodHlwZW9mIG9ialt0b2tlbl0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgb2JqW3Rva2VuXSA9IHt9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9iaiA9IG9ialt0b2tlbl1cclxuICAgIH1cclxuICAgIHJldHVybiBvYmpcclxufVxyXG5cclxuLyoqXHJcbiAqIOiOt+WPluaMh+WumuWvueixoeeahOaMh+WumuWxnuaAp1xyXG4gKiBAcGFyYW0gb2JqIOWvueixoVxyXG4gKiBAcGFyYW0gcGF0aCDlsZ7mgKfot6/lvoTvvIzlpoLvvJphLmIuY1xyXG4gKiBAcmV0dXJucyDov5Tlm55vYmouYS5iLmPvvIzlpoLmnpzojrflj5blpLHotKXvvIzliJnov5Tlm55udWxsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWU8VD4ob2JqOiBBbnlLZXlWYWx1ZVR5cGUsIHBhdGg6IHN0cmluZyk6IFQgfCBudWxsIHtcclxuICAgIGlmICghb2JqIHx8ICFwYXRoKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIGxldCB0ZW1wID0gb2JqXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHBhdGguc3BsaXQoXCIuXCIpLmZvckVhY2goa2V5TmFtZSA9PiB7XHJcbiAgICAgICAgICAgIHRlbXAgPSB0ZW1wW2tleU5hbWVdXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAodHlwZW9mICh0ZW1wKSA9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGVtcCBhcyBUXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOa3seW6pmNsb25lXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVlcENsb25lPFQ+KG9iajogVCk6IFQgfCBudWxsIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog5bCd6K+V6L+Q6KGM5oyH5a6aZnVuY3Rpb27vvJvoi6XlvILluLjvvIzliJnmiafooYzlhajlsYDphY3nva7nmoTlvILluLjlpITnkIblh73mlbB0cnlSdW5FcnJvckhhbmRsZXLvvIzlubbov5Tlm55udWxsXHJcbiAqIEBwYXJhbSBmbiAg5Ye95pWw5ZCNXHJcbiAqIEBwYXJhbSBhcmdzIOWPguaVsFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyeVJ1bjxUPihmbjogQW55RnVuY3Rpb25UeXBlLCAuLi5hcmdzOiBhbnlbXSk6IFQgfCBudWxsIHtcclxuICAgIGlmICghZm4pIHtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gZm4oLi4uYXJncykgYXMgVFxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGRlZmF1bHRUcnlSdW5FcnJvckhhbmRsZXIgJiYgZGVmYXVsdFRyeVJ1bkVycm9ySGFuZGxlcihlKVxyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDph43mlrDorr7nva7lhajlsYDlvILluLjlpITnkIblh73mlbBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRUcnlSdW5FcnJvckhhbmRsZXIoZm46IEFueUZ1bmN0aW9uVHlwZSkge1xyXG4gICAgZGVmYXVsdFRyeVJ1bkVycm9ySGFuZGxlciA9IGZuXHJcbn0iXX0=