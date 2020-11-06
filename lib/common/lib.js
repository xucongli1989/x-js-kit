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
    return _objectSpread(_objectSpread({}, pre), cur);
  }, target || {});
  return result;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vbGliLnRzIl0sIm5hbWVzIjpbImRlZmF1bHRUcnlSdW5FcnJvckhhbmRsZXIiLCJpc1NlcnZlciIsIndpbmRvdyIsImlzQm93c2VyIiwiZ2V0R2xvYmFsT2JqZWN0IiwiZ2xvYmFsIiwiZ2xvYmFsT2JqZWN0IiwiZ2V0RG9jdW1lbnQiLCJkb2N1bWVudCIsImdldExvY2FsU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldFN5bWJvbCIsImRlc2MiLCJnIiwiU3ltYm9sIiwiY3JlYXRlTmFtZXNwYWNlIiwibmFtZSIsIm9iaiIsInRva2VucyIsInNwbGl0IiwidG9rZW4iLCJsZW5ndGgiLCJzaGlmdCIsImdldFZhbHVlIiwicGF0aCIsInRlbXAiLCJmb3JFYWNoIiwia2V5TmFtZSIsImUiLCJkZWVwQ2xvbmUiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJ0cnlSdW4iLCJmbiIsImFyZ3MiLCJzZXRUcnlSdW5FcnJvckhhbmRsZXIiLCJtZXJnZU9iamVjdEFuZENvbWJpbmVTYW1lRnVuYyIsInRhcmdldCIsInNvdXJjZXMiLCJyZXN1bHQiLCJyZWR1Y2UiLCJwcmVJdGVtIiwiY3VycmVudEl0ZW0iLCJwcmUiLCJjdXIiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwicHJlVmFsdWUiLCJjdXJyZW50VmFsdWUiLCJpc1ByZVZhbHVlRnVuY3Rpb24iLCJpc0N1cnJlbnRWYWx1ZUZ1bmN0aW9uIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSUEseUJBQTBDLEdBQUc7QUFBQSxTQUFNLElBQU47QUFBQSxDQUFqRDtBQUVBO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0MsUUFBVCxHQUFvQjtBQUN2QixTQUFPLE9BQVFDLE1BQVIsS0FBb0IsV0FBM0I7QUFDSDtBQUVEO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0MsUUFBVCxHQUFvQjtBQUN2QixT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QUFDRyxHQUFELENBQTdCO0FBQ0EsVUFBTUcsa0JBQTJCLEdBQUcsc0JBQVdGLFFBQVgsQ0FBcEM7QUFDQSxVQUFNRyxzQkFBK0IsR0FBRyxzQkFBV0YsWUFBWCxDQUF4Qzs7QUFDQSxVQUFJLENBQUNDLGtCQUFELElBQXVCLENBQUNDLHNCQUE1QixFQUFvRDtBQUNoRDtBQUNIOztBQUNELFVBQUlELGtCQUFrQixJQUFJLENBQUNDLHNCQUEzQixFQUFtRDtBQUMvQztBQUNBUCxRQUFBQSxHQUFHLENBQUNHLEdBQUQsQ0FBSCxHQUFXQyxRQUFYO0FBQ0gsT0FIRCxNQUdPLElBQUksQ0FBQ0Usa0JBQUQsSUFBdUJDLHNCQUEzQixFQUFtRCxDQUN0RDtBQUNILE9BRk0sTUFFQTtBQUNIO0FBQ0FQLFFBQUFBLEdBQUcsQ0FBQ0csR0FBRCxDQUFILEdBQVcsWUFBb0I7QUFDM0JDLFVBQUFBLFFBQVEsTUFBUjtBQUNBQyxVQUFBQSxZQUFZLE1BQVo7QUFDSCxTQUhEO0FBSUgsT0FuQjZCLENBb0I5Qjs7O0FBQ0FOLE1BQUFBLEdBQUcsQ0FBQ0ksR0FBRCxDQUFILEdBQVdLLFNBQVg7QUFDSCxLQXRCRDtBQXVCQSwyQ0FDT1QsR0FEUCxHQUVPQyxHQUZQO0FBSUgsR0FyQ2MsRUFxQ1pQLE1BQU0sSUFBSSxFQXJDRSxDQUFmO0FBc0NBLFNBQU9FLE1BQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFueUtleVZhbHVlVHlwZSwgQW55RnVuY3Rpb25UeXBlIH0gZnJvbSBcIi4uL2RlY2xhcmF0aW9uL2NvbW1vblwiXHJcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tIFwiLi9kYXRhXCJcclxuXHJcbi8qKlxyXG4gKiB0cnlSdW7lnKjosIPnlKjlvILluLjml7bmiafooYznmoTlh73mlbBcclxuICovXHJcbmxldCBkZWZhdWx0VHJ5UnVuRXJyb3JIYW5kbGVyOiBBbnlGdW5jdGlvblR5cGUgPSAoKSA9PiBudWxsXHJcblxyXG4vKipcclxuICog5piv5ZCm5Li65pyN5Yqh5Zmo546v5aKDXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNTZXJ2ZXIoKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mICh3aW5kb3cpID09PSAndW5kZWZpbmVkJ1xyXG59XHJcblxyXG4vKipcclxuICog5piv5ZCm5Li65rWP6KeI5Zmo546v5aKDXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNCb3dzZXIoKSB7XHJcbiAgICByZXR1cm4gIWlzU2VydmVyKClcclxufVxyXG5cclxuLyoqXHJcbiAqIOiOt+WPluWFqOWxgOWvueixoVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRHbG9iYWxPYmplY3QoKTogV2luZG93IHwgTm9kZUpTLkdsb2JhbCB7XHJcbiAgICBpZiAoaXNCb3dzZXIoKSkge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3dcclxuICAgIH1cclxuICAgIHJldHVybiBnbG9iYWxcclxufVxyXG5cclxuLyoqXHJcbiAqIOW9k+WJjeeOr+Wig+S4reeahOWFqOWxgOWvueixoVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdsb2JhbE9iamVjdCA9IGdldEdsb2JhbE9iamVjdCgpXHJcblxyXG4vKipcclxuICog6I635Y+WZG9jdW1lbnTlr7nosaHvvIzoi6XmsqHmnInvvIzliJnkuLpudWxsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9jdW1lbnQoKTogRG9jdW1lbnQge1xyXG4gICAgcmV0dXJuICgoZ2xvYmFsT2JqZWN0IGFzIGFueSkuZG9jdW1lbnQgfHwgbnVsbCkgYXMgRG9jdW1lbnRcclxufVxyXG5cclxuLyoqXHJcbiAqIOW9k+WJjeeOr+Wig+S4reeahGRvY3VtZW505a+56LGh77yM6Iul5rKh5pyJ77yM5YiZ5Li6bnVsbFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKVxyXG5cclxuXHJcblxyXG4vKipcclxuICog6I635Y+WbG9jYWxTdG9yYWdl5a+56LGh77yM6Iul5rKh5pyJ77yM5YiZ5Li6bnVsbFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsU3RvcmFnZSgpOiBTdG9yYWdlIHtcclxuICAgIHJldHVybiAoKGdsb2JhbE9iamVjdCBhcyBhbnkpLmxvY2FsU3RvcmFnZSB8fCBudWxsKSBhcyBTdG9yYWdlXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDojrflj5ZTeW1ib2znsbvlnovvvIzoi6XmsqHmnInvvIzliJnkuLpudWxsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3ltYm9sKGRlc2M/OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgY29uc3QgZyA9IGdsb2JhbE9iamVjdCBhcyBhbnlcclxuICAgIHJldHVybiBnLlN5bWJvbCA/IGcuU3ltYm9sKGRlc2MpIDogbnVsbFxyXG59XHJcblxyXG4vKipcclxuICog5Yib5bu65YWo5bGA5ZG95ZCN56m66Ze0XHJcbiAqIEBwYXJhbSBuYW1lIOWQjeensO+8jOWmglwiQS5CLkNcIlxyXG4gKiBAcmV0dXJucyDlhajlsYDlr7nosaHvvIzlpoLvvJp3aW5kb3cuQS5CLkNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOYW1lc3BhY2UobmFtZTogc3RyaW5nKTogYW55IHtcclxuICAgIGlmICghbmFtZSkge1xyXG4gICAgICAgIHJldHVybiBudWxsIGFzIGFueVxyXG4gICAgfVxyXG4gICAgbGV0IG9iajogYW55ID0gZ2xvYmFsT2JqZWN0XHJcbiAgICBjb25zdCB0b2tlbnMgPSBuYW1lLnNwbGl0KFwiLlwiKVxyXG4gICAgbGV0IHRva2VuID0gXCJcIlxyXG4gICAgd2hpbGUgKHRva2Vucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdG9rZW4gPSB0b2tlbnMuc2hpZnQoKSBhcyBzdHJpbmdcclxuICAgICAgICBpZiAodHlwZW9mIG9ialt0b2tlbl0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgb2JqW3Rva2VuXSA9IHt9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9iaiA9IG9ialt0b2tlbl1cclxuICAgIH1cclxuICAgIHJldHVybiBvYmpcclxufVxyXG5cclxuLyoqXHJcbiAqIOiOt+WPluaMh+WumuWvueixoeeahOaMh+WumuWxnuaAp1xyXG4gKiBAcGFyYW0gb2JqIOWvueixoVxyXG4gKiBAcGFyYW0gcGF0aCDlsZ7mgKfot6/lvoTvvIzlpoLvvJphLmIuY1xyXG4gKiBAcmV0dXJucyDov5Tlm55vYmouYS5iLmPvvIzlpoLmnpzojrflj5blpLHotKXvvIzliJnov5Tlm55udWxsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWU8VD4ob2JqOiBBbnlLZXlWYWx1ZVR5cGUsIHBhdGg6IHN0cmluZyk6IFQgfCBudWxsIHtcclxuICAgIGlmICghb2JqIHx8ICFwYXRoKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIGxldCB0ZW1wID0gb2JqXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHBhdGguc3BsaXQoXCIuXCIpLmZvckVhY2goa2V5TmFtZSA9PiB7XHJcbiAgICAgICAgICAgIHRlbXAgPSB0ZW1wW2tleU5hbWVdXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAodHlwZW9mICh0ZW1wKSA9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGVtcCBhcyBUXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOa3seW6pmNsb25lXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVlcENsb25lPFQ+KG9iajogVCk6IFQgfCBudWxsIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog5bCd6K+V6L+Q6KGM5oyH5a6aZnVuY3Rpb27vvJvoi6XlvILluLjvvIzliJnmiafooYzlhajlsYDphY3nva7nmoTlvILluLjlpITnkIblh73mlbB0cnlSdW5FcnJvckhhbmRsZXLvvIzlubbov5Tlm55udWxsXHJcbiAqIEBwYXJhbSBmbiAg5Ye95pWw5ZCNXHJcbiAqIEBwYXJhbSBhcmdzIOWPguaVsFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyeVJ1bjxUPihmbjogQW55RnVuY3Rpb25UeXBlLCAuLi5hcmdzOiBhbnlbXSk6IFQgfCBudWxsIHtcclxuICAgIGlmICghZm4pIHtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gZm4oLi4uYXJncykgYXMgVFxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGlmIChkZWZhdWx0VHJ5UnVuRXJyb3JIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgIGRlZmF1bHRUcnlSdW5FcnJvckhhbmRsZXIoZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOmHjeaWsOiuvue9ruWFqOWxgOW8guW4uOWkhOeQhuWHveaVsFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFRyeVJ1bkVycm9ySGFuZGxlcihmbjogQW55RnVuY3Rpb25UeXBlKSB7XHJcbiAgICBkZWZhdWx0VHJ5UnVuRXJyb3JIYW5kbGVyID0gZm5cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiDlkIjlubblpJrkuKrlr7nosaHvvIzkuI4gT2JqZWN0LmFzc2lnbiDnmoTooYzkuLrllK/kuIDnmoTljLrliKvmmK/vvJrmiornm7jlkIznmoTlh73mlbDlkIjlubbliLDkuIDotbfvvIzlubbku47nrKzkuIDkuKrlj4LmlbDnmoTmraTlh73mlbDkuIDnm7TosIPnlKjliLDmnIDlkI7kuIDkuKrlj4LmlbDnmoTmraTlh73mlbBcclxuICogQHBhcmFtIG9ianMg6KaB5ZCI5bm255qE5a+56LGhXHJcbiAqIEByZXR1cm5zIOWQiOW5tuWQjueahOaWsOWvueixoVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlT2JqZWN0QW5kQ29tYmluZVNhbWVGdW5jPFQgPSBhbnk+KHRhcmdldDogVCwgLi4uc291cmNlczogVFtdKTogVCB7XHJcbiAgICBpZiAoIXNvdXJjZXMgfHwgIXNvdXJjZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldFxyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzdWx0ID0gc291cmNlcy5yZWR1Y2UoKHByZUl0ZW06IGFueSwgY3VycmVudEl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgIGlmICghcHJlSXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY3VycmVudEl0ZW1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFjdXJyZW50SXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJlSXRlbVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwcmUgPSB7IC4uLnByZUl0ZW0gfVxyXG4gICAgICAgIGNvbnN0IGN1ciA9IHsgLi4uY3VycmVudEl0ZW0gfVxyXG4gICAgICAgIC8v5ZCI5bm2ZnVuY3Rpb25cclxuICAgICAgICBPYmplY3Qua2V5cyhwcmUpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcmVWYWx1ZTogYW55ID0gcHJlW2tleV1cclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFZhbHVlOiBhbnkgPSBjdXJba2V5XVxyXG4gICAgICAgICAgICBjb25zdCBpc1ByZVZhbHVlRnVuY3Rpb246IGJvb2xlYW4gPSBpc0Z1bmN0aW9uKHByZVZhbHVlKVxyXG4gICAgICAgICAgICBjb25zdCBpc0N1cnJlbnRWYWx1ZUZ1bmN0aW9uOiBib29sZWFuID0gaXNGdW5jdGlvbihjdXJyZW50VmFsdWUpXHJcbiAgICAgICAgICAgIGlmICghaXNQcmVWYWx1ZUZ1bmN0aW9uICYmICFpc0N1cnJlbnRWYWx1ZUZ1bmN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNQcmVWYWx1ZUZ1bmN0aW9uICYmICFpc0N1cnJlbnRWYWx1ZUZ1bmN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAvL+S4iuS4gOmhueaYr+WHveaVsO+8jOiAjOS4i+S4gOmhueS4jeaYr+WHveaVsO+8jOWImeS7peS4iuS4gOmhueS4uuWHhlxyXG4gICAgICAgICAgICAgICAgY3VyW2tleV0gPSBwcmVWYWx1ZVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFpc1ByZVZhbHVlRnVuY3Rpb24gJiYgaXNDdXJyZW50VmFsdWVGdW5jdGlvbikge1xyXG4gICAgICAgICAgICAgICAgLy/kuIrkuIDpobnkuI3mmK/lh73mlbDvvIzkuIvkuIDpobnmmK/lh73mlbDvvIzkuI3nlKjlpITnkIZcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8v5LiK5LiA6aG55LiO5LiL5LiA6aG555qE5YC85Z2H5Li65Ye95pWw77yM5YiZ5ZCI5bm2XHJcbiAgICAgICAgICAgICAgICBjdXJba2V5XSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByZVZhbHVlKC4uLmFyZ3MpXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFZhbHVlKC4uLmFyZ3MpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/liKDpmaTkuIrkuIDpobnnmoTlgLzvvIzkvr/kuo7lkI7pnaLnmoTlkIjlubbopobnm5ZcclxuICAgICAgICAgICAgcHJlW2tleV0gPSB1bmRlZmluZWRcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnByZSxcclxuICAgICAgICAgICAgLi4uY3VyXHJcbiAgICAgICAgfVxyXG4gICAgfSwgdGFyZ2V0IHx8IHt9KSBhcyBUXHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbn1cclxuIl19