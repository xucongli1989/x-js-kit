"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isServer = isServer;
exports.isBowser = isBowser;
exports.isProduction = isProduction;
exports.isDevelopment = isDevelopment;
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
 * 是否为服务器环境
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
 * 判断是否为生产环境（process.env.NODE_ENV==production）
 */


function isProduction() {
  if (!isServer()) {
    return false;
  }

  var g = getGlobalObject();

  if (!g.process.env) {
    return false;
  }

  return (g.process.env.NODE_ENV || "").toLowerCase() == "production";
}
/**
 * 判断是否为开发环境（process.env.NODE_ENV==development）
 */


function isDevelopment() {
  if (!isServer()) {
    return false;
  }

  var g = getGlobalObject();

  if (!g.process.env) {
    return false;
  }

  return (g.process.env.NODE_ENV || "").toLowerCase() == "development";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vbGliLnRzIl0sIm5hbWVzIjpbImRlZmF1bHRUcnlSdW5FcnJvckhhbmRsZXIiLCJpc1NlcnZlciIsIndpbmRvdyIsImlzQm93c2VyIiwiaXNQcm9kdWN0aW9uIiwiZyIsImdldEdsb2JhbE9iamVjdCIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsInRvTG93ZXJDYXNlIiwiaXNEZXZlbG9wbWVudCIsImdsb2JhbCIsImdsb2JhbE9iamVjdCIsImdldERvY3VtZW50IiwiZG9jdW1lbnQiLCJnZXRMb2NhbFN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRTeW1ib2wiLCJkZXNjIiwiU3ltYm9sIiwiY3JlYXRlTmFtZXNwYWNlIiwibmFtZSIsIm9iaiIsInRva2VucyIsInNwbGl0IiwidG9rZW4iLCJsZW5ndGgiLCJzaGlmdCIsImdldFZhbHVlIiwicGF0aCIsInRlbXAiLCJmb3JFYWNoIiwia2V5TmFtZSIsImUiLCJkZWVwQ2xvbmUiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJ0cnlSdW4iLCJmbiIsImFyZ3MiLCJzZXRUcnlSdW5FcnJvckhhbmRsZXIiLCJtZXJnZU9iamVjdEFuZENvbWJpbmVTYW1lRnVuYyIsInRhcmdldCIsInNvdXJjZXMiLCJyZXN1bHQiLCJyZWR1Y2UiLCJwcmVJdGVtIiwiY3VycmVudEl0ZW0iLCJwcmUiLCJjdXIiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwicHJlVmFsdWUiLCJjdXJyZW50VmFsdWUiLCJpc1ByZVZhbHVlRnVuY3Rpb24iLCJpc0N1cnJlbnRWYWx1ZUZ1bmN0aW9uIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQSx5QkFBMEMsR0FBRztBQUFBLFNBQU0sSUFBTjtBQUFBLENBQWpEO0FBRUE7QUFDQTtBQUNBOzs7QUFDTyxTQUFTQyxRQUFULEdBQW9CO0FBQ3ZCLFNBQU8s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R0FBV0MsUUFBWDtBQUNILE9BSEQsTUFHTyxJQUFJLENBQUNFLGtCQUFELElBQXVCQyxzQkFBM0IsRUFBbUQsQ0FDdEQ7QUFDSCxPQUZNLE1BRUE7QUFDSDtBQUNBUCxRQUFBQSxHQUFHLENBQUNHLEdBQUQsQ0FBSCxHQUFXLFlBQW9CO0FBQzNCQyxVQUFBQSxRQUFRLE1BQVI7QUFDQUMsVUFBQUEsWUFBWSxNQUFaO0FBQ0gsU0FIRDtBQUlILE9BbkI2QixDQW9COUI7OztBQUNBTixNQUFBQSxHQUFHLENBQUNJLEdBQUQsQ0FBSCxHQUFXSyxTQUFYO0FBQ0gsS0F0QkQ7QUF1QkEsMkNBQ09ULEdBRFAsR0FFT0MsR0FGUDtBQUlILEdBckNjLEVBcUNaUCxNQUFNLElBQUksRUFyQ0UsQ0FBZjtBQXNDQSxTQUFPRSxNQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbnlLZXlWYWx1ZVR5cGUsIEFueUZ1bmN0aW9uVHlwZSB9IGZyb20gXCIuLi9kZWNsYXJhdGlvbi9jb21tb25cIlxyXG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSBcIi4vZGF0YVwiXHJcblxyXG4vKipcclxuICogdHJ5UnVu5Zyo6LCD55So5byC5bi45pe25omn6KGM55qE5Ye95pWwXHJcbiAqL1xyXG5sZXQgZGVmYXVsdFRyeVJ1bkVycm9ySGFuZGxlcjogQW55RnVuY3Rpb25UeXBlID0gKCkgPT4gbnVsbFxyXG5cclxuLyoqXHJcbiAqIOaYr+WQpuS4uuacjeWKoeWZqOeOr+Wig1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU2VydmVyKCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCJcclxufVxyXG5cclxuLyoqXHJcbiAqIOaYr+WQpuS4uua1j+iniOWZqOeOr+Wig1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQm93c2VyKCkge1xyXG4gICAgcmV0dXJuICFpc1NlcnZlcigpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq3mmK/lkKbkuLrnlJ/kuqfnjq/looPvvIhwcm9jZXNzLmVudi5OT0RFX0VOVj09cHJvZHVjdGlvbu+8iVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvZHVjdGlvbigpIHtcclxuICAgIGlmICghaXNTZXJ2ZXIoKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgY29uc3QgZyA9IGdldEdsb2JhbE9iamVjdCgpIGFzIE5vZGVKUy5HbG9iYWxcclxuICAgIGlmICghZy5wcm9jZXNzLmVudikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChnLnByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCkgPT0gXCJwcm9kdWN0aW9uXCJcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreaYr+WQpuS4uuW8gOWPkeeOr+Wig++8iHByb2Nlc3MuZW52Lk5PREVfRU5WPT1kZXZlbG9wbWVudO+8iVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRGV2ZWxvcG1lbnQoKSB7XHJcbiAgICBpZiAoIWlzU2VydmVyKCkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGNvbnN0IGcgPSBnZXRHbG9iYWxPYmplY3QoKSBhcyBOb2RlSlMuR2xvYmFsXHJcbiAgICBpZiAoIWcucHJvY2Vzcy5lbnYpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIHJldHVybiAoZy5wcm9jZXNzLmVudi5OT0RFX0VOViB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpID09IFwiZGV2ZWxvcG1lbnRcIlxyXG59XHJcblxyXG4vKipcclxuICog6I635Y+W5YWo5bGA5a+56LGhXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcclxuZXhwb3J0IGZ1bmN0aW9uIGdldEdsb2JhbE9iamVjdCgpOiBXaW5kb3cgfCBOb2RlSlMuR2xvYmFsIHtcclxuICAgIGlmIChpc0Jvd3NlcigpKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvd1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGdsb2JhbFxyXG59XHJcblxyXG4vKipcclxuICog5b2T5YmN546v5aKD5Lit55qE5YWo5bGA5a+56LGhXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2xvYmFsT2JqZWN0ID0gZ2V0R2xvYmFsT2JqZWN0KClcclxuXHJcbi8qKlxyXG4gKiDojrflj5Zkb2N1bWVudOWvueixoe+8jOiLpeayoeacie+8jOWImeS4um51bGxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREb2N1bWVudCgpOiBEb2N1bWVudCB7XHJcbiAgICByZXR1cm4gKChnbG9iYWxPYmplY3QgYXMgYW55KS5kb2N1bWVudCB8fCBudWxsKSBhcyBEb2N1bWVudFxyXG59XHJcblxyXG4vKipcclxuICog5b2T5YmN546v5aKD5Lit55qEZG9jdW1lbnTlr7nosaHvvIzoi6XmsqHmnInvvIzliJnkuLpudWxsXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpXHJcblxyXG4vKipcclxuICog6I635Y+WbG9jYWxTdG9yYWdl5a+56LGh77yM6Iul5rKh5pyJ77yM5YiZ5Li6bnVsbFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsU3RvcmFnZSgpOiBTdG9yYWdlIHtcclxuICAgIHJldHVybiAoKGdsb2JhbE9iamVjdCBhcyBhbnkpLmxvY2FsU3RvcmFnZSB8fCBudWxsKSBhcyBTdG9yYWdlXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDojrflj5ZTeW1ib2znsbvlnovvvIzoi6XmsqHmnInvvIzliJnkuLpudWxsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3ltYm9sKGRlc2M/OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgY29uc3QgZyA9IGdsb2JhbE9iamVjdCBhcyBhbnlcclxuICAgIHJldHVybiBnLlN5bWJvbCA/IGcuU3ltYm9sKGRlc2MpIDogbnVsbFxyXG59XHJcblxyXG4vKipcclxuICog5Yib5bu65YWo5bGA5ZG95ZCN56m66Ze0XHJcbiAqIEBwYXJhbSBuYW1lIOWQjeensO+8jOWmglwiQS5CLkNcIlxyXG4gKiBAcmV0dXJucyDlhajlsYDlr7nosaHvvIzlpoLvvJp3aW5kb3cuQS5CLkNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOYW1lc3BhY2UobmFtZTogc3RyaW5nKTogYW55IHtcclxuICAgIGlmICghbmFtZSkge1xyXG4gICAgICAgIHJldHVybiBudWxsIGFzIGFueVxyXG4gICAgfVxyXG4gICAgbGV0IG9iajogYW55ID0gZ2xvYmFsT2JqZWN0XHJcbiAgICBjb25zdCB0b2tlbnMgPSBuYW1lLnNwbGl0KFwiLlwiKVxyXG4gICAgbGV0IHRva2VuID0gXCJcIlxyXG4gICAgd2hpbGUgKHRva2Vucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdG9rZW4gPSB0b2tlbnMuc2hpZnQoKSBhcyBzdHJpbmdcclxuICAgICAgICBpZiAodHlwZW9mIG9ialt0b2tlbl0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgb2JqW3Rva2VuXSA9IHt9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9iaiA9IG9ialt0b2tlbl1cclxuICAgIH1cclxuICAgIHJldHVybiBvYmpcclxufVxyXG5cclxuLyoqXHJcbiAqIOiOt+WPluaMh+WumuWvueixoeeahOaMh+WumuWxnuaAp1xyXG4gKiBAcGFyYW0gb2JqIOWvueixoVxyXG4gKiBAcGFyYW0gcGF0aCDlsZ7mgKfot6/lvoTvvIzlpoLvvJphLmIuY1xyXG4gKiBAcmV0dXJucyDov5Tlm55vYmouYS5iLmPvvIzlpoLmnpzojrflj5blpLHotKXvvIzliJnov5Tlm55udWxsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWU8VD4ob2JqOiBBbnlLZXlWYWx1ZVR5cGUsIHBhdGg6IHN0cmluZyk6IFQgfCBudWxsIHtcclxuICAgIGlmICghb2JqIHx8ICFwYXRoKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIGxldCB0ZW1wID0gb2JqXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHBhdGguc3BsaXQoXCIuXCIpLmZvckVhY2goKGtleU5hbWUpID0+IHtcclxuICAgICAgICAgICAgdGVtcCA9IHRlbXBba2V5TmFtZV1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmICh0eXBlb2YgdGVtcCA9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0ZW1wIGFzIFRcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog5rex5bqmY2xvbmVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWVwQ2xvbmU8VD4ob2JqOiBUKTogVCB8IG51bGwge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlsJ3or5Xov5DooYzmjIflrppmdW5jdGlvbu+8m+iLpeW8guW4uO+8jOWImeaJp+ihjOWFqOWxgOmFjee9rueahOW8guW4uOWkhOeQhuWHveaVsHRyeVJ1bkVycm9ySGFuZGxlcu+8jOW5tui/lOWbnm51bGxcclxuICogQHBhcmFtIGZuICDlh73mlbDlkI1cclxuICogQHBhcmFtIGFyZ3Mg5Y+C5pWwXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJ5UnVuPFQ+KGZuOiBBbnlGdW5jdGlvblR5cGUsIC4uLmFyZ3M6IGFueVtdKTogVCB8IG51bGwge1xyXG4gICAgaWYgKCFmbikge1xyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBmbiguLi5hcmdzKSBhcyBUXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgaWYgKGRlZmF1bHRUcnlSdW5FcnJvckhhbmRsZXIpIHtcclxuICAgICAgICAgICAgZGVmYXVsdFRyeVJ1bkVycm9ySGFuZGxlcihlKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog6YeN5paw6K6+572u5YWo5bGA5byC5bi45aSE55CG5Ye95pWwXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0VHJ5UnVuRXJyb3JIYW5kbGVyKGZuOiBBbnlGdW5jdGlvblR5cGUpIHtcclxuICAgIGRlZmF1bHRUcnlSdW5FcnJvckhhbmRsZXIgPSBmblxyXG59XHJcblxyXG4vKipcclxuICog5ZCI5bm25aSa5Liq5a+56LGh77yM5LiOIE9iamVjdC5hc3NpZ24g55qE6KGM5Li65ZSv5LiA55qE5Yy65Yir5piv77ya5oqK55u45ZCM55qE5Ye95pWw5ZCI5bm25Yiw5LiA6LW377yM5bm25LuO56ys5LiA5Liq5Y+C5pWw55qE5q2k5Ye95pWw5LiA55u06LCD55So5Yiw5pyA5ZCO5LiA5Liq5Y+C5pWw55qE5q2k5Ye95pWwXHJcbiAqIEBwYXJhbSBvYmpzIOimgeWQiOW5tueahOWvueixoVxyXG4gKiBAcmV0dXJucyDlkIjlubblkI7nmoTmlrDlr7nosaFcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZU9iamVjdEFuZENvbWJpbmVTYW1lRnVuYzxUID0gYW55Pih0YXJnZXQ6IFQsIC4uLnNvdXJjZXM6IFRbXSk6IFQge1xyXG4gICAgaWYgKCFzb3VyY2VzIHx8ICFzb3VyY2VzLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiB0YXJnZXRcclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3VsdCA9IHNvdXJjZXMucmVkdWNlKChwcmVJdGVtOiBhbnksIGN1cnJlbnRJdGVtOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoIXByZUl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRJdGVtXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghY3VycmVudEl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByZUl0ZW1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcHJlID0geyAuLi5wcmVJdGVtIH1cclxuICAgICAgICBjb25zdCBjdXIgPSB7IC4uLmN1cnJlbnRJdGVtIH1cclxuICAgICAgICAvL+WQiOW5tmZ1bmN0aW9uXHJcbiAgICAgICAgT2JqZWN0LmtleXMocHJlKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJlVmFsdWU6IGFueSA9IHByZVtrZXldXHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZTogYW55ID0gY3VyW2tleV1cclxuICAgICAgICAgICAgY29uc3QgaXNQcmVWYWx1ZUZ1bmN0aW9uOiBib29sZWFuID0gaXNGdW5jdGlvbihwcmVWYWx1ZSlcclxuICAgICAgICAgICAgY29uc3QgaXNDdXJyZW50VmFsdWVGdW5jdGlvbjogYm9vbGVhbiA9IGlzRnVuY3Rpb24oY3VycmVudFZhbHVlKVxyXG4gICAgICAgICAgICBpZiAoIWlzUHJlVmFsdWVGdW5jdGlvbiAmJiAhaXNDdXJyZW50VmFsdWVGdW5jdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzUHJlVmFsdWVGdW5jdGlvbiAmJiAhaXNDdXJyZW50VmFsdWVGdW5jdGlvbikge1xyXG4gICAgICAgICAgICAgICAgLy/kuIrkuIDpobnmmK/lh73mlbDvvIzogIzkuIvkuIDpobnkuI3mmK/lh73mlbDvvIzliJnku6XkuIrkuIDpobnkuLrlh4ZcclxuICAgICAgICAgICAgICAgIGN1cltrZXldID0gcHJlVmFsdWVcclxuICAgICAgICAgICAgfSBlbHNlIGlmICghaXNQcmVWYWx1ZUZ1bmN0aW9uICYmIGlzQ3VycmVudFZhbHVlRnVuY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIC8v5LiK5LiA6aG55LiN5piv5Ye95pWw77yM5LiL5LiA6aG55piv5Ye95pWw77yM5LiN55So5aSE55CGXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL+S4iuS4gOmhueS4juS4i+S4gOmhueeahOWAvOWdh+S4uuWHveaVsO+8jOWImeWQiOW5tlxyXG4gICAgICAgICAgICAgICAgY3VyW2tleV0gPSAoLi4uYXJnczogYW55W10pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBwcmVWYWx1ZSguLi5hcmdzKVxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZSguLi5hcmdzKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v5Yig6Zmk5LiK5LiA6aG555qE5YC877yM5L6/5LqO5ZCO6Z2i55qE5ZCI5bm26KaG55uWXHJcbiAgICAgICAgICAgIHByZVtrZXldID0gdW5kZWZpbmVkXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5wcmUsXHJcbiAgICAgICAgICAgIC4uLmN1clxyXG4gICAgICAgIH1cclxuICAgIH0sIHRhcmdldCB8fCB7fSkgYXMgVFxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG59XHJcbiJdfQ==