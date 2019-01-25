"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isLower = exports.isUpper = exports.isUndefined = exports.isBoolean = exports.isString = exports.isFunction = exports.isNullOrWhiteSpace = exports.isNullOrEmpty = exports.isObject = exports.isNumber = exports.isArray = void 0;

var _string = require("./string");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * 判断obj是否为数组
 */
var isArray = function isArray(obj) {
  if (!obj) {
    return false;
  }

  return Object.prototype.toString.call(obj) === "[object Array]";
};
/**
  * 判断val是否为数字
  * @param val 要判断的值
  * @returns  判断结果
  */


exports.isArray = isArray;

var isNumber = function isNumber(val) {
  return (typeof val === 'number' || typeof val === 'string') && val !== '' && !isNaN(val);
};
/**
 * 判断指定值是否为一个对象
 * @param  val 要判断的值
 * @returns  判断结果
 */


exports.isNumber = isNumber;

var isObject = function isObject(val) {
  return val && _typeof(val) === 'object';
};
/**
* 判断指定值为null或为空字符串
* @param  val 要判断的值
* @returns 判断结果
*/


exports.isObject = isObject;

var isNullOrEmpty = function isNullOrEmpty(val) {
  return null === val || val === "";
};
/**
 * 判断指定值为null，或为空字符串，或为空白字符串
 * @param  val 要判断的值
 * @returns 判断结果
 */


exports.isNullOrEmpty = isNullOrEmpty;

var isNullOrWhiteSpace = function isNullOrWhiteSpace(val) {
  if (val === null) {
    return true;
  }

  return isNullOrEmpty((0, _string.trim)(val));
};
/**
 * 判断指定值是否为function
 * @param  val 要判断的值
 * @returns 判断结果
 */


exports.isNullOrWhiteSpace = isNullOrWhiteSpace;

var isFunction = function isFunction(val) {
  return val && Object.prototype.toString.call(val) == '[object Function]';
};
/**
 * 判断指定值是否为String
 * @param  val 要判断的值
 * @returns 判断结果
 */


exports.isFunction = isFunction;

var isString = function isString(val) {
  return typeof val == 'string' || val instanceof String;
};
/**
 * 判断指定字符串是否为"true"或"false"
 * @param  val 要判断的值
 * @returns 判断结果
 */


exports.isString = isString;

var isBoolean = function isBoolean(val) {
  return /^true|false$/i.test(val);
};
/**
 * 判断指定值是否为undefined
 * @param  val 要判断的值
 * @returns 判断结果
 */


exports.isBoolean = isBoolean;

var isUndefined = function isUndefined(val) {
  return val === undefined || typeof val === "undefined";
};
/**
 * 指定值是否全部为大写
 * @param  val 要判断的值
 * @returns 判断结果
 */


exports.isUndefined = isUndefined;

var isUpper = function isUpper(val) {
  return val && val.toUpperCase() === val;
};
/**
 * 指定值是否全部为小写
 * @param  val 要判断的值
 * @returns 判断结果
 */


exports.isUpper = isUpper;

var isLower = function isLower(val) {
  return val && val.toLowerCase() === val;
};

exports.isLower = isLower;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vZGF0YS50cyJdLCJuYW1lcyI6WyJpc0FycmF5Iiwib2JqIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwiaXNOdW1iZXIiLCJ2YWwiLCJpc05hTiIsImlzT2JqZWN0IiwiaXNOdWxsT3JFbXB0eSIsImlzTnVsbE9yV2hpdGVTcGFjZSIsImlzRnVuY3Rpb24iLCJpc1N0cmluZyIsIlN0cmluZyIsImlzQm9vbGVhbiIsInRlc3QiLCJpc1VuZGVmaW5lZCIsInVuZGVmaW5lZCIsImlzVXBwZXIiLCJ0b1VwcGVyQ2FzZSIsImlzTG93ZXIiLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUE7OztBQUdPLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEdBQUQsRUFBYztBQUNqQyxNQUFJLENBQUNBLEdBQUwsRUFBVTtBQUNOLFdBQU8sS0FBUDtBQUNIOztBQUNELFNBQU9DLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsUUFBakIsQ0FBMEJDLElBQTFCLENBQStCSixHQUEvQixNQUF3QyxnQkFBL0M7QUFDSCxDQUxNO0FBT1A7Ozs7Ozs7OztBQUtPLElBQU1LLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEdBQUQsRUFBMEI7QUFDOUMsU0FBTyxDQUFDLE9BQVFBLEdBQVIsS0FBaUIsUUFBakIsSUFBNkIsT0FBUUEsR0FBUixLQUFpQixRQUEvQyxLQUE0REEsR0FBRyxLQUFLLEVBQXBFLElBQTBFLENBQUNDLEtBQUssQ0FBQ0QsR0FBRCxDQUF2RjtBQUNILENBRk07QUFJUDs7Ozs7Ozs7O0FBS08sSUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0YsR0FBRCxFQUFjO0FBQ2xDLFNBQU9BLEdBQUcsSUFBSSxRQUFPQSxHQUFQLE1BQWUsUUFBN0I7QUFDSCxDQUZNO0FBSVA7Ozs7Ozs7OztBQUtPLElBQU1HLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0gsR0FBRCxFQUF3QjtBQUNqRCxTQUFPLFNBQVNBLEdBQVQsSUFBZ0JBLEdBQUcsS0FBSyxFQUEvQjtBQUNILENBRk07QUFJUDs7Ozs7Ozs7O0FBS08sSUFBTUksa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDSixHQUFELEVBQXdCO0FBQ3RELE1BQUlBLEdBQUcsS0FBSyxJQUFaLEVBQWtCO0FBQ2QsV0FBTyxJQUFQO0FBQ0g7O0FBQ0QsU0FBT0csYUFBYSxDQUFDLGtCQUFLSCxHQUFMLENBQUQsQ0FBcEI7QUFDSCxDQUxNO0FBT1A7Ozs7Ozs7OztBQUtPLElBQU1LLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNMLEdBQUQsRUFBYztBQUNwQyxTQUFPQSxHQUFHLElBQUlMLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsUUFBakIsQ0FBMEJDLElBQTFCLENBQStCRSxHQUEvQixLQUF1QyxtQkFBckQ7QUFDSCxDQUZNO0FBSVA7Ozs7Ozs7OztBQUtPLElBQU1NLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNOLEdBQUQsRUFBYztBQUNsQyxTQUFPLE9BQU9BLEdBQVAsSUFBYyxRQUFkLElBQTBCQSxHQUFHLFlBQVlPLE1BQWhEO0FBQ0gsQ0FGTTtBQUlQOzs7Ozs7Ozs7QUFLTyxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDUixHQUFELEVBQWlCO0FBQ3RDLFNBQU8sZ0JBQWdCUyxJQUFoQixDQUFxQlQsR0FBckIsQ0FBUDtBQUNILENBRk07QUFJUDs7Ozs7Ozs7O0FBS08sSUFBTVUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ1YsR0FBRCxFQUFjO0FBQ3JDLFNBQU9BLEdBQUcsS0FBS1csU0FBUixJQUFxQixPQUFRWCxHQUFSLEtBQWlCLFdBQTdDO0FBQ0gsQ0FGTTtBQUlQOzs7Ozs7Ozs7QUFLTyxJQUFNWSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDWixHQUFELEVBQWlCO0FBQ3BDLFNBQU9BLEdBQUcsSUFBSUEsR0FBRyxDQUFDYSxXQUFKLE9BQXNCYixHQUFwQztBQUNILENBRk07QUFJUDs7Ozs7Ozs7O0FBS08sSUFBTWMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ2QsR0FBRCxFQUFpQjtBQUNwQyxTQUFPQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ2UsV0FBSixPQUFzQmYsR0FBcEM7QUFDSCxDQUZNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdHJpbSB9IGZyb20gXCIuL3N0cmluZ1wiXHJcblxyXG4vKipcclxuICog5Yik5patb2Jq5piv5ZCm5Li65pWw57uEXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaXNBcnJheSA9IChvYmo6IGFueSkgPT4ge1xyXG4gICAgaWYgKCFvYmopIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiXHJcbn1cclxuXHJcbi8qKlxyXG4gICog5Yik5patdmFs5piv5ZCm5Li65pWw5a2XXHJcbiAgKiBAcGFyYW0gdmFsIOimgeWIpOaWreeahOWAvFxyXG4gICogQHJldHVybnMgIOWIpOaWree7k+aenFxyXG4gICovXHJcbmV4cG9ydCBjb25zdCBpc051bWJlciA9ICh2YWw6IG51bWJlciB8IHN0cmluZykgPT4ge1xyXG4gICAgcmV0dXJuICh0eXBlb2YgKHZhbCkgPT09ICdudW1iZXInIHx8IHR5cGVvZiAodmFsKSA9PT0gJ3N0cmluZycpICYmIHZhbCAhPT0gJycgJiYgIWlzTmFOKHZhbCBhcyBhbnkpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq3mjIflrprlgLzmmK/lkKbkuLrkuIDkuKrlr7nosaFcclxuICogQHBhcmFtICB2YWwg6KaB5Yik5pat55qE5YC8XHJcbiAqIEByZXR1cm5zICDliKTmlq3nu5PmnpxcclxuICovXHJcbmV4cG9ydCBjb25zdCBpc09iamVjdCA9ICh2YWw6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIHZhbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0J1xyXG59XHJcblxyXG4vKipcclxuKiDliKTmlq3mjIflrprlgLzkuLpudWxs5oiW5Li656m65a2X56ym5LiyXHJcbiogQHBhcmFtICB2YWwg6KaB5Yik5pat55qE5YC8XHJcbiogQHJldHVybnMg5Yik5pat57uT5p6cXHJcbiovXHJcbmV4cG9ydCBjb25zdCBpc051bGxPckVtcHR5ID0gKHZhbDogbnVsbCB8IHN0cmluZykgPT4ge1xyXG4gICAgcmV0dXJuIG51bGwgPT09IHZhbCB8fCB2YWwgPT09IFwiXCJcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreaMh+WumuWAvOS4um51bGzvvIzmiJbkuLrnqbrlrZfnrKbkuLLvvIzmiJbkuLrnqbrnmb3lrZfnrKbkuLJcclxuICogQHBhcmFtICB2YWwg6KaB5Yik5pat55qE5YC8XHJcbiAqIEByZXR1cm5zIOWIpOaWree7k+aenFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGlzTnVsbE9yV2hpdGVTcGFjZSA9ICh2YWw6IG51bGwgfCBzdHJpbmcpID0+IHtcclxuICAgIGlmICh2YWwgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzTnVsbE9yRW1wdHkodHJpbSh2YWwpKVxyXG59XHJcblxyXG4vKipcclxuICog5Yik5pat5oyH5a6a5YC85piv5ZCm5Li6ZnVuY3Rpb25cclxuICogQHBhcmFtICB2YWwg6KaB5Yik5pat55qE5YC8XHJcbiAqIEByZXR1cm5zIOWIpOaWree7k+aenFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGlzRnVuY3Rpb24gPSAodmFsOiBhbnkpID0+IHtcclxuICAgIHJldHVybiB2YWwgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkgPT0gJ1tvYmplY3QgRnVuY3Rpb25dJ1xyXG59XHJcblxyXG4vKipcclxuICog5Yik5pat5oyH5a6a5YC85piv5ZCm5Li6U3RyaW5nXHJcbiAqIEBwYXJhbSAgdmFsIOimgeWIpOaWreeahOWAvFxyXG4gKiBAcmV0dXJucyDliKTmlq3nu5PmnpxcclxuICovXHJcbmV4cG9ydCBjb25zdCBpc1N0cmluZyA9ICh2YWw6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT0gJ3N0cmluZycgfHwgdmFsIGluc3RhbmNlb2YgU3RyaW5nXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq3mjIflrprlrZfnrKbkuLLmmK/lkKbkuLpcInRydWVcIuaIllwiZmFsc2VcIlxyXG4gKiBAcGFyYW0gIHZhbCDopoHliKTmlq3nmoTlgLxcclxuICogQHJldHVybnMg5Yik5pat57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaXNCb29sZWFuID0gKHZhbDogc3RyaW5nKSA9PiB7XHJcbiAgICByZXR1cm4gL150cnVlfGZhbHNlJC9pLnRlc3QodmFsKVxyXG59XHJcblxyXG4vKipcclxuICog5Yik5pat5oyH5a6a5YC85piv5ZCm5Li6dW5kZWZpbmVkXHJcbiAqIEBwYXJhbSAgdmFsIOimgeWIpOaWreeahOWAvFxyXG4gKiBAcmV0dXJucyDliKTmlq3nu5PmnpxcclxuICovXHJcbmV4cG9ydCBjb25zdCBpc1VuZGVmaW5lZCA9ICh2YWw6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIHZhbCA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiAodmFsKSA9PT0gXCJ1bmRlZmluZWRcIlxyXG59XHJcblxyXG4vKipcclxuICog5oyH5a6a5YC85piv5ZCm5YWo6YOo5Li65aSn5YaZXHJcbiAqIEBwYXJhbSAgdmFsIOimgeWIpOaWreeahOWAvFxyXG4gKiBAcmV0dXJucyDliKTmlq3nu5PmnpxcclxuICovXHJcbmV4cG9ydCBjb25zdCBpc1VwcGVyID0gKHZhbDogc3RyaW5nKSA9PiB7XHJcbiAgICByZXR1cm4gdmFsICYmIHZhbC50b1VwcGVyQ2FzZSgpID09PSB2YWxcclxufVxyXG5cclxuLyoqXHJcbiAqIOaMh+WumuWAvOaYr+WQpuWFqOmDqOS4uuWwj+WGmVxyXG4gKiBAcGFyYW0gIHZhbCDopoHliKTmlq3nmoTlgLxcclxuICogQHJldHVybnMg5Yik5pat57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaXNMb3dlciA9ICh2YWw6IHN0cmluZykgPT4ge1xyXG4gICAgcmV0dXJuIHZhbCAmJiB2YWwudG9Mb3dlckNhc2UoKSA9PT0gdmFsXHJcbn0iXX0=