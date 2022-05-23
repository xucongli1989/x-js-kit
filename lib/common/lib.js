"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isServer = isServer;
exports.isBowser = isBowser;
exports.getGlobalObject = getGlobalObject;
exports.getDocument = getDocument;
exports.getLocalStorage = getLocalStorage;
exports.getSymbol = getSymbol;
exports.createNamespace = createNamespace;
exports.getValue = getValue;
exports.deepClone = deepClone;
exports.tryRun = tryRun;
exports.setTryRunErrorHandler = setTryRunErrorHandler;
exports.mergeObjectAndCombineSameFunc = mergeObjectAndCombineSameFunc;
exports.document = exports.globalObject = void 0;

var _data = require("./data");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * tryRun在调用异常时执行的函数
 */
var defaultTryRunErrorHandler = function defaultTryRunErrorHandler() {
  return null;
};
/**
 * 是否为服务器环境（仅仅是判断 window 未定义）
 */


function isServer() {
  return typeof window === "undefined";
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
// eslint-disable-next-line no-undef


function getGlobalObject() {
  if (isBowser()) {
    return window;
  }

  return global;
}
/**
 * 当前环境中的全局对象
 */


var globalObject = getGlobalObject();
/**
 * 获取document对象，若没有，则为null
 */

exports.globalObject = globalObject;

function getDocument() {
  return globalObject.document || null;
}
/**
 * 当前环境中的document对象，若没有，则为null
 */


var document = getDocument();
/**
 * 获取localStorage对象，若没有，则为null
 */

exports.document = document;

function getLocalStorage() {
  return globalObject.localStorage || null;
}
/**
 * 获取Symbol类型，若没有，则为null
 */


function getSymbol(desc) {
  var g = globalObject;
  return g.Symbol ? g.Symbol(desc) : null;
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

  var obj = globalObject;
  var tokens = name.split(".");
  var token = "";

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

    if (typeof temp == "undefined") {
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
    if (defaultTryRunErrorHandler) {
      defaultTryRunErrorHandler(e);
    }

    return null;
  }
}
/**
 * 重新设置全局异常处理函数
 */


function setTryRunErrorHandler(fn) {
  defaultTryRunErrorHandler = fn;
}
/**
 * 合并多个对象，与 Object.assign 的行为唯一的区别是：把相同的函数合并到一起，并从第一个参数的此函数一直调用到最后一个参数的此函数
 * @param objs 要合并的对象
 * @returns 合并后的新对象
 */


function mergeObjectAndCombineSameFunc(target) {
  for (var _len2 = arguments.length, sources = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    sources[_key2 - 1] = arguments[_key2];
  }

  if (!sources || !sources.length) {
    return target;
  }

  var result = sources.reduce(function (preItem, currentItem) {
    if (!preItem) {
      return currentItem;
    }

    if (!currentItem) {
      return preItem;
    }

    var pre = _objectSpread({}, preItem);

    var cur = _objectSpread({}, currentItem); //合并function


    Object.keys(pre).forEach(function (key) {
      var preValue = pre[key];
      var currentValue = cur[key];
      var isPreValueFunction = (0, _data.isFunction)(preValue);
      var isCurrentValueFunction = (0, _data.isFunction)(currentValue);

      if (!isPreValueFunction && !isCurrentValueFunction) {
        return;
      }

      if (isPreValueFunction && !isCurrentValueFunction) {
        //上一项是函数，而下一项不是函数，则以上一项为准
        cur[key] = preValue;
      } else if (!isPreValueFunction && isCurrentValueFunction) {//上一项不是函数，下一项是函数，不用处理
      } else {
        //上一项与下一项的值均为函数，则合并
        cur[key] = function () {
          preValue.apply(void 0, arguments);
          currentValue.apply(void 0, arguments);
        };
      } //删除上一项的值，便于后面的合并覆盖


      pre[key] = undefined;
    });
    return _objectSpread(_objectSpread({}, pre), cur);
  }, target || {});
  return result;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vbGliLnRzIl0sIm5hbWVzIjpbImRlZmF1bHRUcnlSdW5FcnJvckhhbmRsZXIiLCJpc1NlcnZlciIsIndpbmRvdyIsImlzQm93c2VyIiwiZ2V0R2xvYmFsT2JqZWN0IiwiZ2xvYmFsIiwiZ2xvYmFsT2JqZWN0IiwiZ2V0RG9jdW1lbnQiLCJkb2N1bWVudCIsImdldExvY2FsU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldFN5bWJvbCIsImRlc2MiLCJnIiwiU3ltYm9sIiwiY3JlYXRlTmFtZXNwYWNlIiwibmFtZSIsIm9iaiIsInRva2VucyIsInNwbGl0IiwidG9rZW4iLCJsZW5ndGgiLCJzaGlmdCIsImdldFZhbHVlIiwicGF0aCIsInRlbXAiLCJmb3JFYWNoIiwia2V5TmFtZSIsImUiLCJkZWVwQ2xvbmUiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJ0cnlSdW4iLCJmbiIsImFyZ3MiLCJzZXRUcnlSdW5FcnJvckhhbmRsZXIiLCJtZXJnZU9iamVjdEFuZENvbWJpbmVTYW1lRnVuYyIsInRhcmdldCIsInNvdXJjZXMiLCJyZXN1bHQiLCJyZWR1Y2UiLCJwcmVJdGVtIiwiY3VycmVudEl0ZW0iLCJwcmUiLCJjdXIiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwicHJlVmFsdWUiLCJjdXJyZW50VmFsdWUiLCJpc1ByZVZhbHVlRnVuY3Rpb24iLCJpc0N1cnJlbnRWYWx1ZUZ1bmN0aW9uIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSUEseUJBQTBDLEdBQUc7QUFBQSxTQUFNLElBQU47QUFBQSxDQUFqRDtBQUVBO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0MsUUFBVCxHQUFvQjtBQUN2QixTQUFPLE9BQU9DLE1BQVAsS0FBa0IsV0FBekI7QUFDSDtBQUVEO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0MsUUFBVCxHQUFvQjtBQUN2QixT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QUNHLEdBQUQsQ0FBN0I7QUFDQSxVQUFNRyxrQkFBMkIsR0FBRyxzQkFBV0YsUUFBWCxDQUFwQztBQUNBLFVBQU1HLHNCQUErQixHQUFHLHNCQUFXRixZQUFYLENBQXhDOztBQUNBLFVBQUksQ0FBQ0Msa0JBQUQsSUFBdUIsQ0FBQ0Msc0JBQTVCLEVBQW9EO0FBQ2hEO0FBQ0g7O0FBQ0QsVUFBSUQsa0JBQWtCLElBQUksQ0FBQ0Msc0JBQTNCLEVBQW1EO0FBQy9DO0FBQ0FQLFFBQUFBLEdBQUcsQ0FBQ0csR0FBRCxDQUFILEdBQVdDLFFBQVg7QUFDSCxPQUhELE1BR08sSUFBSSxDQUFDRSxrQkFBRCxJQUF1QkMsc0JBQTNCLEVBQW1ELENBQ3REO0FBQ0gsT0FGTSxNQUVBO0FBQ0g7QUFDQVAsUUFBQUEsR0FBRyxDQUFDRyxHQUFELENBQUgsR0FBVyxZQUFvQjtBQUMzQkMsVUFBQUEsUUFBUSxNQUFSO0FBQ0FDLFVBQUFBLFlBQVksTUFBWjtBQUNILFNBSEQ7QUFJSCxPQW5CNkIsQ0FvQjlCOzs7QUFDQU4sTUFBQUEsR0FBRyxDQUFDSSxHQUFELENBQUgsR0FBV0ssU0FBWDtBQUNILEtBdEJEO0FBdUJBLDJDQUNPVCxHQURQLEdBRU9DLEdBRlA7QUFJSCxHQXJDYyxFQXFDWlAsTUFBTSxJQUFJLEVBckNFLENBQWY7QUFzQ0EsU0FBT0UsTUFBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW55S2V5VmFsdWVUeXBlLCBBbnlGdW5jdGlvblR5cGUgfSBmcm9tIFwiLi4vZGVjbGFyYXRpb24vY29tbW9uXCJcclxuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gXCIuL2RhdGFcIlxyXG5cclxuLyoqXHJcbiAqIHRyeVJ1buWcqOiwg+eUqOW8guW4uOaXtuaJp+ihjOeahOWHveaVsFxyXG4gKi9cclxubGV0IGRlZmF1bHRUcnlSdW5FcnJvckhhbmRsZXI6IEFueUZ1bmN0aW9uVHlwZSA9ICgpID0+IG51bGxcclxuXHJcbi8qKlxyXG4gKiDmmK/lkKbkuLrmnI3liqHlmajnjq/looPvvIjku4Xku4XmmK/liKTmlq0gd2luZG93IOacquWumuS5ie+8iVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU2VydmVyKCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCJcclxufVxyXG5cclxuLyoqXHJcbiAqIOaYr+WQpuS4uua1j+iniOWZqOeOr+Wig1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQm93c2VyKCkge1xyXG4gICAgcmV0dXJuICFpc1NlcnZlcigpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDojrflj5blhajlsYDlr7nosaFcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0R2xvYmFsT2JqZWN0KCk6IFdpbmRvdyB8IE5vZGVKUy5HbG9iYWwge1xyXG4gICAgaWYgKGlzQm93c2VyKCkpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZ2xvYmFsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlvZPliY3njq/looPkuK3nmoTlhajlsYDlr7nosaFcclxuICovXHJcbmV4cG9ydCBjb25zdCBnbG9iYWxPYmplY3QgPSBnZXRHbG9iYWxPYmplY3QoKVxyXG5cclxuLyoqXHJcbiAqIOiOt+WPlmRvY3VtZW505a+56LGh77yM6Iul5rKh5pyJ77yM5YiZ5Li6bnVsbFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERvY3VtZW50KCk6IERvY3VtZW50IHtcclxuICAgIHJldHVybiAoKGdsb2JhbE9iamVjdCBhcyBhbnkpLmRvY3VtZW50IHx8IG51bGwpIGFzIERvY3VtZW50XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlvZPliY3njq/looPkuK3nmoRkb2N1bWVudOWvueixoe+8jOiLpeayoeacie+8jOWImeS4um51bGxcclxuICovXHJcbmV4cG9ydCBjb25zdCBkb2N1bWVudCA9IGdldERvY3VtZW50KClcclxuXHJcbi8qKlxyXG4gKiDojrflj5Zsb2NhbFN0b3JhZ2Xlr7nosaHvvIzoi6XmsqHmnInvvIzliJnkuLpudWxsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxTdG9yYWdlKCk6IFN0b3JhZ2Uge1xyXG4gICAgcmV0dXJuICgoZ2xvYmFsT2JqZWN0IGFzIGFueSkubG9jYWxTdG9yYWdlIHx8IG51bGwpIGFzIFN0b3JhZ2VcclxufVxyXG5cclxuLyoqXHJcbiAqIOiOt+WPllN5bWJvbOexu+Wei++8jOiLpeayoeacie+8jOWImeS4um51bGxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTeW1ib2woZGVzYz86IHN0cmluZyk6IGFueSB7XHJcbiAgICBjb25zdCBnID0gZ2xvYmFsT2JqZWN0IGFzIGFueVxyXG4gICAgcmV0dXJuIGcuU3ltYm9sID8gZy5TeW1ib2woZGVzYykgOiBudWxsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliJvlu7rlhajlsYDlkb3lkI3nqbrpl7RcclxuICogQHBhcmFtIG5hbWUg5ZCN56ew77yM5aaCXCJBLkIuQ1wiXHJcbiAqIEByZXR1cm5zIOWFqOWxgOWvueixoe+8jOWmgu+8mndpbmRvdy5BLkIuQ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5hbWVzcGFjZShuYW1lOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgaWYgKCFuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGwgYXMgYW55XHJcbiAgICB9XHJcbiAgICBsZXQgb2JqOiBhbnkgPSBnbG9iYWxPYmplY3RcclxuICAgIGNvbnN0IHRva2VucyA9IG5hbWUuc3BsaXQoXCIuXCIpXHJcbiAgICBsZXQgdG9rZW4gPSBcIlwiXHJcbiAgICB3aGlsZSAodG9rZW5zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB0b2tlbiA9IHRva2Vucy5zaGlmdCgpIGFzIHN0cmluZ1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb2JqW3Rva2VuXSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBvYmpbdG9rZW5dID0ge31cclxuICAgICAgICB9XHJcbiAgICAgICAgb2JqID0gb2JqW3Rva2VuXVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9ialxyXG59XHJcblxyXG4vKipcclxuICog6I635Y+W5oyH5a6a5a+56LGh55qE5oyH5a6a5bGe5oCnXHJcbiAqIEBwYXJhbSBvYmog5a+56LGhXHJcbiAqIEBwYXJhbSBwYXRoIOWxnuaAp+i3r+W+hO+8jOWmgu+8mmEuYi5jXHJcbiAqIEByZXR1cm5zIOi/lOWbnm9iai5hLmIuY++8jOWmguaenOiOt+WPluWksei0pe+8jOWImei/lOWbnm51bGxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZTxUPihvYmo6IEFueUtleVZhbHVlVHlwZSwgcGF0aDogc3RyaW5nKTogVCB8IG51bGwge1xyXG4gICAgaWYgKCFvYmogfHwgIXBhdGgpIHtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgbGV0IHRlbXAgPSBvYmpcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcGF0aC5zcGxpdChcIi5cIikuZm9yRWFjaCgoa2V5TmFtZSkgPT4ge1xyXG4gICAgICAgICAgICB0ZW1wID0gdGVtcFtrZXlOYW1lXVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKHR5cGVvZiB0ZW1wID09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRlbXAgYXMgVFxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmt7HluqZjbG9uZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBDbG9uZTxUPihvYmo6IFQpOiBUIHwgbnVsbCB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOWwneivlei/kOihjOaMh+WummZ1bmN0aW9u77yb6Iul5byC5bi477yM5YiZ5omn6KGM5YWo5bGA6YWN572u55qE5byC5bi45aSE55CG5Ye95pWwdHJ5UnVuRXJyb3JIYW5kbGVy77yM5bm26L+U5ZuebnVsbFxyXG4gKiBAcGFyYW0gZm4gIOWHveaVsOWQjVxyXG4gKiBAcGFyYW0gYXJncyDlj4LmlbBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cnlSdW48VD4oZm46IEFueUZ1bmN0aW9uVHlwZSwgLi4uYXJnczogYW55W10pOiBUIHwgbnVsbCB7XHJcbiAgICBpZiAoIWZuKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIGZuKC4uLmFyZ3MpIGFzIFRcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBpZiAoZGVmYXVsdFRyeVJ1bkVycm9ySGFuZGxlcikge1xyXG4gICAgICAgICAgICBkZWZhdWx0VHJ5UnVuRXJyb3JIYW5kbGVyKGUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDph43mlrDorr7nva7lhajlsYDlvILluLjlpITnkIblh73mlbBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRUcnlSdW5FcnJvckhhbmRsZXIoZm46IEFueUZ1bmN0aW9uVHlwZSkge1xyXG4gICAgZGVmYXVsdFRyeVJ1bkVycm9ySGFuZGxlciA9IGZuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlkIjlubblpJrkuKrlr7nosaHvvIzkuI4gT2JqZWN0LmFzc2lnbiDnmoTooYzkuLrllK/kuIDnmoTljLrliKvmmK/vvJrmiornm7jlkIznmoTlh73mlbDlkIjlubbliLDkuIDotbfvvIzlubbku47nrKzkuIDkuKrlj4LmlbDnmoTmraTlh73mlbDkuIDnm7TosIPnlKjliLDmnIDlkI7kuIDkuKrlj4LmlbDnmoTmraTlh73mlbBcclxuICogQHBhcmFtIG9ianMg6KaB5ZCI5bm255qE5a+56LGhXHJcbiAqIEByZXR1cm5zIOWQiOW5tuWQjueahOaWsOWvueixoVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlT2JqZWN0QW5kQ29tYmluZVNhbWVGdW5jPFQgPSBhbnk+KHRhcmdldDogVCwgLi4uc291cmNlczogVFtdKTogVCB7XHJcbiAgICBpZiAoIXNvdXJjZXMgfHwgIXNvdXJjZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldFxyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzdWx0ID0gc291cmNlcy5yZWR1Y2UoKHByZUl0ZW06IGFueSwgY3VycmVudEl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgIGlmICghcHJlSXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY3VycmVudEl0ZW1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFjdXJyZW50SXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJlSXRlbVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwcmUgPSB7IC4uLnByZUl0ZW0gfVxyXG4gICAgICAgIGNvbnN0IGN1ciA9IHsgLi4uY3VycmVudEl0ZW0gfVxyXG4gICAgICAgIC8v5ZCI5bm2ZnVuY3Rpb25cclxuICAgICAgICBPYmplY3Qua2V5cyhwcmUpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcmVWYWx1ZTogYW55ID0gcHJlW2tleV1cclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFZhbHVlOiBhbnkgPSBjdXJba2V5XVxyXG4gICAgICAgICAgICBjb25zdCBpc1ByZVZhbHVlRnVuY3Rpb246IGJvb2xlYW4gPSBpc0Z1bmN0aW9uKHByZVZhbHVlKVxyXG4gICAgICAgICAgICBjb25zdCBpc0N1cnJlbnRWYWx1ZUZ1bmN0aW9uOiBib29sZWFuID0gaXNGdW5jdGlvbihjdXJyZW50VmFsdWUpXHJcbiAgICAgICAgICAgIGlmICghaXNQcmVWYWx1ZUZ1bmN0aW9uICYmICFpc0N1cnJlbnRWYWx1ZUZ1bmN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNQcmVWYWx1ZUZ1bmN0aW9uICYmICFpc0N1cnJlbnRWYWx1ZUZ1bmN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAvL+S4iuS4gOmhueaYr+WHveaVsO+8jOiAjOS4i+S4gOmhueS4jeaYr+WHveaVsO+8jOWImeS7peS4iuS4gOmhueS4uuWHhlxyXG4gICAgICAgICAgICAgICAgY3VyW2tleV0gPSBwcmVWYWx1ZVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFpc1ByZVZhbHVlRnVuY3Rpb24gJiYgaXNDdXJyZW50VmFsdWVGdW5jdGlvbikge1xyXG4gICAgICAgICAgICAgICAgLy/kuIrkuIDpobnkuI3mmK/lh73mlbDvvIzkuIvkuIDpobnmmK/lh73mlbDvvIzkuI3nlKjlpITnkIZcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8v5LiK5LiA6aG55LiO5LiL5LiA6aG555qE5YC85Z2H5Li65Ye95pWw77yM5YiZ5ZCI5bm2XHJcbiAgICAgICAgICAgICAgICBjdXJba2V5XSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByZVZhbHVlKC4uLmFyZ3MpXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFZhbHVlKC4uLmFyZ3MpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/liKDpmaTkuIrkuIDpobnnmoTlgLzvvIzkvr/kuo7lkI7pnaLnmoTlkIjlubbopobnm5ZcclxuICAgICAgICAgICAgcHJlW2tleV0gPSB1bmRlZmluZWRcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnByZSxcclxuICAgICAgICAgICAgLi4uY3VyXHJcbiAgICAgICAgfVxyXG4gICAgfSwgdGFyZ2V0IHx8IHt9KSBhcyBUXHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbn1cclxuIl19