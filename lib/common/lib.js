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
    return _objectSpread({}, pre, {}, cur);
  }, target || {});
  return result;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vbGliLnRzIl0sIm5hbWVzIjpbImRlZmF1bHRUcnlSdW5FcnJvckhhbmRsZXIiLCJpc1NlcnZlciIsIndpbmRvdyIsImlzQm93c2VyIiwiZ2V0R2xvYmFsT2JqZWN0IiwiZ2xvYmFsIiwiZ2xvYmFsT2JqZWN0IiwiZ2V0RG9jdW1lbnQiLCJkb2N1bWVudCIsImdldExvY2FsU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldFN5bWJvbCIsImRlc2MiLCJnIiwiU3ltYm9sIiwiY3JlYXRlTmFtZXNwYWNlIiwibmFtZSIsIm9iaiIsInRva2VucyIsInNwbGl0IiwidG9rZW4iLCJsZW5ndGgiLCJzaGlmdCIsImdldFZhbHVlIiwicGF0aCIsInRlbXAiLCJmb3JFYWNoIiwia2V5TmFtZSIsImUiLCJkZWVwQ2xvbmUiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJ0cnlSdW4iLCJmbiIsImFyZ3MiLCJzZXRUcnlSdW5FcnJvckhhbmRsZXIiLCJtZXJnZU9iamVjdEFuZENvbWJpbmVTYW1lRnVuYyIsInRhcmdldCIsInNvdXJjZXMiLCJyZXN1bHQiLCJyZWR1Y2UiLCJwcmVJdGVtIiwiY3VycmVudEl0ZW0iLCJwcmUiLCJjdXIiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwicHJlVmFsdWUiLCJjdXJyZW50VmFsdWUiLCJpc1ByZVZhbHVlRnVuY3Rpb24iLCJpc0N1cnJlbnRWYWx1ZUZ1bmN0aW9uIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7O0FBRUE7OztBQUdBLElBQUlBLHlCQUEwQyxHQUFHO0FBQUEsU0FBTSxJQUFOO0FBQUEsQ0FBakQ7QUFFQTs7Ozs7QUFHTyxTQUFTQyxRQUFULEdBQW9CO0FBQ3ZCLFNBQU8sT0FBUUMsTUFBUixLQUFvQixXQUEzQjtBQUNIO0FBRUQ7Ozs7O0FBR08sU0FBU0MsUUFBVCxHQUFvQjtBQUN2QixTQUFPLENBQUNGLFFBQVEsRUFBaEI7QUFD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RCxVQUFJRCxrQkFBa0IsSUFBSSxDQUFDQyxzQkFBM0IsRUFBbUQ7QUFDL0M7QUFDQVAsUUFBQUEsR0FBRyxDQUFDRyxHQUFELENBQUgsR0FBV0MsUUFBWDtBQUNILE9BSEQsTUFHTyxJQUFJLENBQUNFLGtCQUFELElBQXVCQyxzQkFBM0IsRUFBbUQsQ0FDdEQ7QUFDSCxPQUZNLE1BRUE7QUFDSDtBQUNBUCxRQUFBQSxHQUFHLENBQUNHLEdBQUQsQ0FBSCxHQUFXLFlBQW9CO0FBQzNCQyxVQUFBQSxRQUFRLE1BQVI7QUFDQUMsVUFBQUEsWUFBWSxNQUFaO0FBQ0gsU0FIRDtBQUlILE9BbkI2QixDQW9COUI7OztBQUNBTixNQUFBQSxHQUFHLENBQUNJLEdBQUQsQ0FBSCxHQUFXSyxTQUFYO0FBQ0gsS0F0QkQ7QUF1QkEsNkJBQ09ULEdBRFAsTUFFT0MsR0FGUDtBQUlILEdBckNjLEVBcUNaUCxNQUFNLElBQUksRUFyQ0UsQ0FBZjtBQXNDQSxTQUFPRSxNQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbnlLZXlWYWx1ZVR5cGUsIEFueUZ1bmN0aW9uVHlwZSB9IGZyb20gXCIuLi9kZWNsYXJhdGlvbi9jb21tb25cIlxyXG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSBcIi4vZGF0YVwiXHJcblxyXG4vKipcclxuICogdHJ5UnVu5Zyo6LCD55So5byC5bi45pe25omn6KGM55qE5Ye95pWwXHJcbiAqL1xyXG5sZXQgZGVmYXVsdFRyeVJ1bkVycm9ySGFuZGxlcjogQW55RnVuY3Rpb25UeXBlID0gKCkgPT4gbnVsbFxyXG5cclxuLyoqXHJcbiAqIOaYr+WQpuS4uuacjeWKoeWZqOeOr+Wig1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU2VydmVyKCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiAod2luZG93KSA9PT0gJ3VuZGVmaW5lZCdcclxufVxyXG5cclxuLyoqXHJcbiAqIOaYr+WQpuS4uua1j+iniOWZqOeOr+Wig1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQm93c2VyKCkge1xyXG4gICAgcmV0dXJuICFpc1NlcnZlcigpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDojrflj5blhajlsYDlr7nosaFcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRHbG9iYWxPYmplY3QoKTogV2luZG93IHwgTm9kZUpTLkdsb2JhbCB7XHJcbiAgICBpZiAoaXNCb3dzZXIoKSkge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3dcclxuICAgIH1cclxuICAgIHJldHVybiBnbG9iYWxcclxufVxyXG5cclxuLyoqXHJcbiAqIOW9k+WJjeeOr+Wig+S4reeahOWFqOWxgOWvueixoVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdsb2JhbE9iamVjdCA9IGdldEdsb2JhbE9iamVjdCgpXHJcblxyXG4vKipcclxuICog6I635Y+WZG9jdW1lbnTlr7nosaHvvIzoi6XmsqHmnInvvIzliJnkuLpudWxsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9jdW1lbnQoKTogRG9jdW1lbnQge1xyXG4gICAgcmV0dXJuICgoZ2xvYmFsT2JqZWN0IGFzIGFueSkuZG9jdW1lbnQgfHwgbnVsbCkgYXMgRG9jdW1lbnRcclxufVxyXG5cclxuLyoqXHJcbiAqIOW9k+WJjeeOr+Wig+S4reeahGRvY3VtZW505a+56LGh77yM6Iul5rKh5pyJ77yM5YiZ5Li6bnVsbFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKVxyXG5cclxuXHJcblxyXG4vKipcclxuICog6I635Y+WbG9jYWxTdG9yYWdl5a+56LGh77yM6Iul5rKh5pyJ77yM5YiZ5Li6bnVsbFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsU3RvcmFnZSgpOiBTdG9yYWdlIHtcclxuICAgIHJldHVybiAoKGdsb2JhbE9iamVjdCBhcyBhbnkpLmxvY2FsU3RvcmFnZSB8fCBudWxsKSBhcyBTdG9yYWdlXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDojrflj5ZTeW1ib2znsbvlnovvvIzoi6XmsqHmnInvvIzliJnkuLpudWxsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3ltYm9sKGRlc2M/OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgY29uc3QgZyA9IGdsb2JhbE9iamVjdCBhcyBhbnlcclxuICAgIHJldHVybiBnLlN5bWJvbCA/IGcuU3ltYm9sKGRlc2MpIDogbnVsbFxyXG59XHJcblxyXG4vKipcclxuICog5Yib5bu65YWo5bGA5ZG95ZCN56m66Ze0XHJcbiAqIEBwYXJhbSBuYW1lIOWQjeensO+8jOWmglwiQS5CLkNcIlxyXG4gKiBAcmV0dXJucyDlhajlsYDlr7nosaHvvIzlpoLvvJp3aW5kb3cuQS5CLkNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOYW1lc3BhY2UobmFtZTogc3RyaW5nKTogb2JqZWN0IHtcclxuICAgIGlmICghbmFtZSkge1xyXG4gICAgICAgIHJldHVybiBudWxsIGFzIGFueVxyXG4gICAgfVxyXG4gICAgbGV0IG9iajogYW55ID0gZ2xvYmFsT2JqZWN0XHJcbiAgICBjb25zdCB0b2tlbnMgPSBuYW1lLnNwbGl0KFwiLlwiKVxyXG4gICAgbGV0IHRva2VuID0gXCJcIlxyXG4gICAgd2hpbGUgKHRva2Vucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdG9rZW4gPSB0b2tlbnMuc2hpZnQoKSBhcyBzdHJpbmdcclxuICAgICAgICBpZiAodHlwZW9mIG9ialt0b2tlbl0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgb2JqW3Rva2VuXSA9IHt9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9iaiA9IG9ialt0b2tlbl1cclxuICAgIH1cclxuICAgIHJldHVybiBvYmpcclxufVxyXG5cclxuLyoqXHJcbiAqIOiOt+WPluaMh+WumuWvueixoeeahOaMh+WumuWxnuaAp1xyXG4gKiBAcGFyYW0gb2JqIOWvueixoVxyXG4gKiBAcGFyYW0gcGF0aCDlsZ7mgKfot6/lvoTvvIzlpoLvvJphLmIuY1xyXG4gKiBAcmV0dXJucyDov5Tlm55vYmouYS5iLmPvvIzlpoLmnpzojrflj5blpLHotKXvvIzliJnov5Tlm55udWxsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWU8VD4ob2JqOiBBbnlLZXlWYWx1ZVR5cGUsIHBhdGg6IHN0cmluZyk6IFQgfCBudWxsIHtcclxuICAgIGlmICghb2JqIHx8ICFwYXRoKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIGxldCB0ZW1wID0gb2JqXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHBhdGguc3BsaXQoXCIuXCIpLmZvckVhY2goa2V5TmFtZSA9PiB7XHJcbiAgICAgICAgICAgIHRlbXAgPSB0ZW1wW2tleU5hbWVdXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAodHlwZW9mICh0ZW1wKSA9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGVtcCBhcyBUXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOa3seW6pmNsb25lXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVlcENsb25lPFQ+KG9iajogVCk6IFQgfCBudWxsIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog5bCd6K+V6L+Q6KGM5oyH5a6aZnVuY3Rpb27vvJvoi6XlvILluLjvvIzliJnmiafooYzlhajlsYDphY3nva7nmoTlvILluLjlpITnkIblh73mlbB0cnlSdW5FcnJvckhhbmRsZXLvvIzlubbov5Tlm55udWxsXHJcbiAqIEBwYXJhbSBmbiAg5Ye95pWw5ZCNXHJcbiAqIEBwYXJhbSBhcmdzIOWPguaVsFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyeVJ1bjxUPihmbjogQW55RnVuY3Rpb25UeXBlLCAuLi5hcmdzOiBhbnlbXSk6IFQgfCBudWxsIHtcclxuICAgIGlmICghZm4pIHtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gZm4oLi4uYXJncykgYXMgVFxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGlmIChkZWZhdWx0VHJ5UnVuRXJyb3JIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgIGRlZmF1bHRUcnlSdW5FcnJvckhhbmRsZXIoZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOmHjeaWsOiuvue9ruWFqOWxgOW8guW4uOWkhOeQhuWHveaVsFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFRyeVJ1bkVycm9ySGFuZGxlcihmbjogQW55RnVuY3Rpb25UeXBlKSB7XHJcbiAgICBkZWZhdWx0VHJ5UnVuRXJyb3JIYW5kbGVyID0gZm5cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiDlkIjlubblpJrkuKrlr7nosaHvvIzkuI4gT2JqZWN0LmFzc2lnbiDnmoTooYzkuLrllK/kuIDnmoTljLrliKvmmK/vvJrmiornm7jlkIznmoTlh73mlbDlkIjlubbliLDkuIDotbfvvIzlubbku47nrKzkuIDkuKrlj4LmlbDnmoTmraTlh73mlbDkuIDnm7TosIPnlKjliLDmnIDlkI7kuIDkuKrlj4LmlbDnmoTmraTlh73mlbBcclxuICogQHBhcmFtIG9ianMg6KaB5ZCI5bm255qE5a+56LGhXHJcbiAqIEByZXR1cm5zIOWQiOW5tuWQjueahOaWsOWvueixoVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlT2JqZWN0QW5kQ29tYmluZVNhbWVGdW5jPFQgPSBhbnk+KHRhcmdldDogVCwgLi4uc291cmNlczogVFtdKTogVCB7XHJcbiAgICBpZiAoIXNvdXJjZXMgfHwgIXNvdXJjZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldFxyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzdWx0ID0gc291cmNlcy5yZWR1Y2UoKHByZUl0ZW06IGFueSwgY3VycmVudEl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgIGlmICghcHJlSXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY3VycmVudEl0ZW1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFjdXJyZW50SXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJlSXRlbVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwcmUgPSB7IC4uLnByZUl0ZW0gfVxyXG4gICAgICAgIGNvbnN0IGN1ciA9IHsgLi4uY3VycmVudEl0ZW0gfVxyXG4gICAgICAgIC8v5ZCI5bm2ZnVuY3Rpb25cclxuICAgICAgICBPYmplY3Qua2V5cyhwcmUpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcmVWYWx1ZTogYW55ID0gcHJlW2tleV1cclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFZhbHVlOiBhbnkgPSBjdXJba2V5XVxyXG4gICAgICAgICAgICBjb25zdCBpc1ByZVZhbHVlRnVuY3Rpb246IGJvb2xlYW4gPSBpc0Z1bmN0aW9uKHByZVZhbHVlKVxyXG4gICAgICAgICAgICBjb25zdCBpc0N1cnJlbnRWYWx1ZUZ1bmN0aW9uOiBib29sZWFuID0gaXNGdW5jdGlvbihjdXJyZW50VmFsdWUpXHJcbiAgICAgICAgICAgIGlmICghaXNQcmVWYWx1ZUZ1bmN0aW9uICYmICFpc0N1cnJlbnRWYWx1ZUZ1bmN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNQcmVWYWx1ZUZ1bmN0aW9uICYmICFpc0N1cnJlbnRWYWx1ZUZ1bmN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAvL+S4iuS4gOmhueaYr+WHveaVsO+8jOiAjOS4i+S4gOmhueS4jeaYr+WHveaVsO+8jOWImeS7peS4iuS4gOmhueS4uuWHhlxyXG4gICAgICAgICAgICAgICAgY3VyW2tleV0gPSBwcmVWYWx1ZVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFpc1ByZVZhbHVlRnVuY3Rpb24gJiYgaXNDdXJyZW50VmFsdWVGdW5jdGlvbikge1xyXG4gICAgICAgICAgICAgICAgLy/kuIrkuIDpobnkuI3mmK/lh73mlbDvvIzkuIvkuIDpobnmmK/lh73mlbDvvIzkuI3nlKjlpITnkIZcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8v5LiK5LiA6aG55LiO5LiL5LiA6aG555qE5YC85Z2H5Li65Ye95pWw77yM5YiZ5ZCI5bm2XHJcbiAgICAgICAgICAgICAgICBjdXJba2V5XSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByZVZhbHVlKC4uLmFyZ3MpXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFZhbHVlKC4uLmFyZ3MpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/liKDpmaTkuIrkuIDpobnnmoTlgLzvvIzkvr/kuo7lkI7pnaLnmoTlkIjlubbopobnm5ZcclxuICAgICAgICAgICAgcHJlW2tleV0gPSB1bmRlZmluZWRcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnByZSxcclxuICAgICAgICAgICAgLi4uY3VyXHJcbiAgICAgICAgfVxyXG4gICAgfSwgdGFyZ2V0IHx8IHt9KSBhcyBUXHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbn1cclxuIl19