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
exports.document = exports.globalObject = void 0;

var _common = require("../config/common");

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
    var errFn = (0, _common.getTryRunErrorHandler)();
    errFn && errFn(e);
    return null;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vbGliLnRzIl0sIm5hbWVzIjpbImdsb2JhbE9iamVjdCIsImdldEdsb2JhbE9iamVjdCIsImRvY3VtZW50IiwiZ2V0RG9jdW1lbnQiLCJpc1NlcnZlciIsIndpbmRvdyIsImlzQm93c2VyIiwiZ2xvYmFsIiwiZ2V0TG9jYWxTdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwiY3JlYXRlTmFtZXNwYWNlIiwibmFtZSIsIm9iaiIsInRva2VucyIsInNwbGl0IiwidG9rZW4iLCJsZW5ndGgiLCJzaGlmdCIsImdldFZhbHVlIiwicGF0aCIsInRlbXAiLCJmb3JFYWNoIiwia2V5TmFtZSIsImUiLCJkZWVwQ2xvbmUiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJ0cnlSdW4iLCJmbiIsImFyZ3MiLCJlcnJGbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUVBOzs7QUFHTyxJQUFNQSxZQUFZLEdBQUdDLGVBQWUsRUFBcEM7QUFFUDs7Ozs7QUFHTyxJQUFNQyxRQUFRLEdBQUdDLFdBQVcsRUFBNUI7QUFFUDs7Ozs7O0FBR08sU0FBU0MsUUFBVCxHQUFvQjtBQUN2QixTQUFPLE9BQVFDLE1BQVIsS0FBb0IsV0FBM0I7QUFDSDtBQUVEOzs7OztBQUdPLFNBQVNDLFFBQVQsR0FBb0I7QUFDdkIsU0FBTyxDQUFDRixRQUFRLEVBQWhCO0FBQ0g7QUFFRDs7Ozs7QUFHTyxTQUFTSCxlQUFULEdBQW1EO0FBQ3RELE1BQUlLLFFBQVEsRUFBWixFQUFnQjtBQUNaLFdBQU9ELE1BQVA7QUFDSDs7QUFDRCxTQUFPRSxNQUFQO0FBQ0g7QUFFRDs7Ozs7QUFHTyxTQUFTQyxlQUFULEdBQW9DO0FBQ3ZDLFNBQVNSLFlBQUQsQ0FBc0JTLFlBQXRCLElBQXNDLElBQTlDO0FBQ0g7QUFFRDs7Ozs7QUFHTyxTQUFTTixXQUFULEdBQWlDO0FBQ3BDLFNBQVNILFlBQUQsQ0FBc0JFLFFBQXRCLElBQWtDLElBQTFDO0FBQ0g7QUFFRDs7Ozs7OztBQUtPLFNBQVNRLGVBQVQsQ0FBeUJDLElBQXpCLEVBQStDO0FBQ2xELE1BQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1AsV0FBTyxJQUFQO0FBQ0g7O0FBQ0QsTUFBSUMsR0FBUSxHQUFHWixZQUFmO0FBQUEsTUFBNkJhLE1BQU0sR0FBR0YsSUFBSSxDQUFDRyxLQUFMLENBQVcsR0FBWCxDQUF0QztBQUFBLE1BQXVEQyxLQUFLLEdBQUcsRUFBL0Q7O0FBQ0EsU0FBT0YsTUFBTSxDQUFDRyxNQUFQLEdBQWdCLENBQXZCLEVBQTBCO0FBQ3RCRCxJQUFBQSxLQUFLLEdBQUdGLE1BQU0sQ0FBQ0ksS0FBUCxFQUFSOztBQUNBLFFBQUksT0FBT0wsR0FBRyxDQUFDRyxLQUFELENBQVYsS0FBc0IsV0FBMUIsRUFBdUM7QUFDbkNILE1BQUFBLEdBQUcsQ0FBQ0csS0FBRCxDQUFILEdBQWEsRUFBYjtBQUNIOztBQUNESCxJQUFBQSxHQUFHLEdBQUdBLEdBQUcsQ0FBQ0csS0FBRCxDQUFUO0FBQ0g7O0FBQ0QsU0FBT0gsR0FBUDtBQUNIO0FBRUQ7Ozs7Ozs7O0FBTU8sU0FBU00sUUFBVCxDQUFxQk4sR0FBckIsRUFBMkNPLElBQTNDLEVBQW1FO0FBQ3RFLE1BQUksQ0FBQ1AsR0FBRCxJQUFRLENBQUNPLElBQWIsRUFBbUI7QUFDZixXQUFPLElBQVA7QUFDSDs7QUFDRCxNQUFJQyxJQUFJLEdBQUdSLEdBQVg7O0FBQ0EsTUFBSTtBQUNBTyxJQUFBQSxJQUFJLENBQUNMLEtBQUwsQ0FBVyxHQUFYLEVBQWdCTyxPQUFoQixDQUF3QixVQUFBQyxPQUFPLEVBQUk7QUFDL0JGLE1BQUFBLElBQUksR0FBR0EsSUFBSSxDQUFDRSxPQUFELENBQVg7QUFDSCxLQUZEOztBQUdBLFFBQUksT0FBUUYsSUFBUixJQUFpQixXQUFyQixFQUFrQztBQUM5QixhQUFPLElBQVA7QUFDSDs7QUFDRCxXQUFPQSxJQUFQO0FBQ0gsR0FSRCxDQVFFLE9BQU9HLENBQVAsRUFBVTtBQUNSLFdBQU8sSUFBUDtBQUNIO0FBQ0o7QUFFRDs7Ozs7QUFHTyxTQUFTQyxTQUFULENBQXNCWixHQUF0QixFQUF3QztBQUMzQyxNQUFJO0FBQ0EsV0FBT2EsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlZixHQUFmLENBQVgsQ0FBUDtBQUNILEdBRkQsQ0FFRSxPQUFPVyxDQUFQLEVBQVU7QUFDUixXQUFPLElBQVA7QUFDSDtBQUNKO0FBRUQ7Ozs7Ozs7QUFLTyxTQUFTSyxNQUFULENBQW1CQyxFQUFuQixFQUFrRTtBQUNyRSxNQUFJLENBQUNBLEVBQUwsRUFBUztBQUNMLFdBQU8sSUFBUDtBQUNIOztBQUNELE1BQUk7QUFBQSxzQ0FKMENDLElBSTFDO0FBSjBDQSxNQUFBQSxJQUkxQztBQUFBOztBQUNBLFdBQU9ELEVBQUUsTUFBRixTQUFNQyxJQUFOLENBQVA7QUFDSCxHQUZELENBRUUsT0FBT1AsQ0FBUCxFQUFVO0FBQ1IsUUFBTVEsS0FBSyxHQUFHLG9DQUFkO0FBQ0FBLElBQUFBLEtBQUssSUFBSUEsS0FBSyxDQUFDUixDQUFELENBQWQ7QUFDQSxXQUFPLElBQVA7QUFDSDtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW55S2V5VmFsdWVUeXBlLCBBbnlGdW5jdGlvblR5cGUgfSBmcm9tIFwiLi4vZGVjbGFyYXRpb24vY29tbW9uXCJcclxuaW1wb3J0IHsgZ2V0VHJ5UnVuRXJyb3JIYW5kbGVyIH0gZnJvbSBcIi4uL2NvbmZpZy9jb21tb25cIlxyXG5cclxuLyoqXHJcbiAqIOW9k+WJjeeOr+Wig+S4reeahOWFqOWxgOWvueixoVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdsb2JhbE9iamVjdCA9IGdldEdsb2JhbE9iamVjdCgpXHJcblxyXG4vKipcclxuICog5b2T5YmN546v5aKD5Lit55qEZG9jdW1lbnTlr7nosaHvvIzoi6XmsqHmnInvvIzliJnkuLpudWxsXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpXHJcblxyXG4vKipcclxuICog5piv5ZCm5Li65pyN5Yqh5Zmo546v5aKDXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNTZXJ2ZXIoKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mICh3aW5kb3cpID09PSAndW5kZWZpbmVkJ1xyXG59XHJcblxyXG4vKipcclxuICog5piv5ZCm5Li65rWP6KeI5Zmo546v5aKDXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNCb3dzZXIoKSB7XHJcbiAgICByZXR1cm4gIWlzU2VydmVyKClcclxufVxyXG5cclxuLyoqXHJcbiAqIOiOt+WPluWFqOWxgOWvueixoVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEdsb2JhbE9iamVjdCgpOiBXaW5kb3cgfCBOb2RlSlMuR2xvYmFsIHtcclxuICAgIGlmIChpc0Jvd3NlcigpKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvd1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGdsb2JhbFxyXG59XHJcblxyXG4vKipcclxuICog6I635Y+WbG9jYWxTdG9yYWdl5a+56LGhXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxTdG9yYWdlKCk6IFN0b3JhZ2Uge1xyXG4gICAgcmV0dXJuICgoZ2xvYmFsT2JqZWN0IGFzIGFueSkubG9jYWxTdG9yYWdlIHx8IG51bGwpIGFzIFN0b3JhZ2VcclxufVxyXG5cclxuLyoqXHJcbiAqIOiOt+WPlmRvY3VtZW505a+56LGhXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9jdW1lbnQoKTogRG9jdW1lbnQge1xyXG4gICAgcmV0dXJuICgoZ2xvYmFsT2JqZWN0IGFzIGFueSkuZG9jdW1lbnQgfHwgbnVsbCkgYXMgRG9jdW1lbnRcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIm+W7uuWFqOWxgOWRveWQjeepuumXtFxyXG4gKiBAcGFyYW0gbmFtZSDlkI3np7DvvIzlpoJcIkEuQi5DXCJcclxuICogQHJldHVybnMg5YWo5bGA5a+56LGh77yM5aaC77yad2luZG93LkEuQi5DXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmFtZXNwYWNlKG5hbWU6IHN0cmluZyk6IG9iamVjdCB7XHJcbiAgICBpZiAoIW5hbWUpIHtcclxuICAgICAgICByZXR1cm4gbnVsbCBhcyBhbnlcclxuICAgIH1cclxuICAgIGxldCBvYmo6IGFueSA9IGdsb2JhbE9iamVjdCwgdG9rZW5zID0gbmFtZS5zcGxpdChcIi5cIiksIHRva2VuID0gXCJcIlxyXG4gICAgd2hpbGUgKHRva2Vucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdG9rZW4gPSB0b2tlbnMuc2hpZnQoKSBhcyBzdHJpbmdcclxuICAgICAgICBpZiAodHlwZW9mIG9ialt0b2tlbl0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgb2JqW3Rva2VuXSA9IHt9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9iaiA9IG9ialt0b2tlbl1cclxuICAgIH1cclxuICAgIHJldHVybiBvYmpcclxufVxyXG5cclxuLyoqXHJcbiAqIOiOt+WPluaMh+WumuWvueixoeeahOaMh+WumuWxnuaAp1xyXG4gKiBAcGFyYW0gb2JqIOWvueixoVxyXG4gKiBAcGFyYW0gcGF0aCDlsZ7mgKfot6/lvoTvvIzlpoLvvJphLmIuY1xyXG4gKiBAcmV0dXJucyDov5Tlm55vYmouYS5iLmPvvIzlpoLmnpzojrflj5blpLHotKXvvIzliJnov5Tlm55udWxsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWU8VD4ob2JqOiBBbnlLZXlWYWx1ZVR5cGUsIHBhdGg6IHN0cmluZyk6IFQgfCBudWxsIHtcclxuICAgIGlmICghb2JqIHx8ICFwYXRoKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIGxldCB0ZW1wID0gb2JqXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHBhdGguc3BsaXQoXCIuXCIpLmZvckVhY2goa2V5TmFtZSA9PiB7XHJcbiAgICAgICAgICAgIHRlbXAgPSB0ZW1wW2tleU5hbWVdXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAodHlwZW9mICh0ZW1wKSA9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGVtcCBhcyBUXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOa3seW6pmNsb25lXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVlcENsb25lPFQ+KG9iajogVCk6IFQgfCBudWxsIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog5bCd6K+V6L+Q6KGM5oyH5a6aZnVuY3Rpb27vvJvoi6XlvILluLjvvIzliJnmiafooYzlhajlsYDphY3nva7nmoTlvILluLjlpITnkIblh73mlbB0cnlSdW5FcnJvckhhbmRsZXLvvIzlubbov5Tlm55udWxsXHJcbiAqIEBwYXJhbSBmbiAg5Ye95pWw5ZCNXHJcbiAqIEBwYXJhbSBhcmdzIOWPguaVsFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyeVJ1bjxUPihmbjogQW55RnVuY3Rpb25UeXBlLCAuLi5hcmdzOiBhbnlbXSk6IFQgfCBudWxsIHtcclxuICAgIGlmICghZm4pIHtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gZm4oLi4uYXJncykgYXMgVFxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnN0IGVyckZuID0gZ2V0VHJ5UnVuRXJyb3JIYW5kbGVyKClcclxuICAgICAgICBlcnJGbiAmJiBlcnJGbihlKVxyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbn0iXX0=