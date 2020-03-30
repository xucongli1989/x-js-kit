"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArray = isArray;
exports.isNumber = isNumber;
exports.isObject = isObject;
exports.isNullOrEmpty = isNullOrEmpty;
exports.isNullOrWhiteSpace = isNullOrWhiteSpace;
exports.isFunction = isFunction;
exports.isString = isString;
exports.isBoolean = isBoolean;
exports.isUndefined = isUndefined;
exports.isUpper = isUpper;
exports.isLower = isLower;
exports.isDate = isDate;
exports.isError = isError;

var _string = require("./string");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * 判断obj是否为数组
 */
function isArray(obj) {
  if (!obj) {
    return false;
  }

  return Object.prototype.toString.call(obj) === "[object Array]";
}
/**
  * 判断val是否为数字
  * @param val 要判断的值
  * @returns  判断结果
  */


function isNumber(val) {
  return (typeof val === 'number' || typeof val === 'string') && val !== '' && !isNaN(val);
}
/**
 * 判断指定值是否为一个对象
 * @param  val 要判断的值
 * @returns  判断结果
 */


function isObject(val) {
  return val && _typeof(val) === 'object';
}
/**
* 判断指定值为null或为空字符串
* @param  val 要判断的值
* @returns 判断结果
*/


function isNullOrEmpty(val) {
  return val === null || val === "";
}
/**
 * 判断指定值为null，或为空字符串，或为空白字符串
 * @param  val 要判断的值
 * @returns 判断结果
 */


function isNullOrWhiteSpace(val) {
  if (val === null) {
    return true;
  }

  return isNullOrEmpty((0, _string.trim)(val));
}
/**
 * 判断指定值是否为function
 * @param  val 要判断的值
 * @returns 判断结果
 */


function isFunction(val) {
  return val && Object.prototype.toString.call(val) == '[object Function]';
}
/**
 * 判断指定值是否为String
 * @param  val 要判断的值
 * @returns 判断结果
 */


function isString(val) {
  return typeof val == 'string' || val instanceof String;
}
/**
 * 判断指定字符串是否为"true"或"false"
 * @param  val 要判断的值
 * @returns 判断结果
 */


function isBoolean(val) {
  return /^true|false$/i.test(val);
}
/**
 * 判断指定值是否为undefined
 * @param  val 要判断的值
 * @returns 判断结果
 */


function isUndefined(val) {
  return val === undefined || typeof val === "undefined";
}
/**
 * 指定值是否全部为大写
 * @param  val 要判断的值
 * @returns 判断结果
 */


function isUpper(val) {
  return val && val.toUpperCase() === val;
}
/**
 * 指定值是否全部为小写
 * @param  val 要判断的值
 * @returns 判断结果
 */


function isLower(val) {
  return val && val.toLowerCase() === val;
}
/**
 * 指定值是否为Date对象
 * @param val 要判断的值
 * @returns 判断结果
 */


function isDate(val) {
  return val && Object.prototype.toString.call(val) === "[object Date]" && !isNaN(val);
}
/**
 * 指定值是否为Error对象
 * @param val 要判断的值
 * @returns 判断结果
 */


function isError(val) {
  return val && val instanceof Error;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vZGF0YS50cyJdLCJuYW1lcyI6WyJpc0FycmF5Iiwib2JqIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwiaXNOdW1iZXIiLCJ2YWwiLCJpc05hTiIsImlzT2JqZWN0IiwiaXNOdWxsT3JFbXB0eSIsImlzTnVsbE9yV2hpdGVTcGFjZSIsImlzRnVuY3Rpb24iLCJpc1N0cmluZyIsIlN0cmluZyIsImlzQm9vbGVhbiIsInRlc3QiLCJpc1VuZGVmaW5lZCIsInVuZGVmaW5lZCIsImlzVXBwZXIiLCJ0b1VwcGVyQ2FzZSIsImlzTG93ZXIiLCJ0b0xvd2VyQ2FzZSIsImlzRGF0ZSIsImlzRXJyb3IiLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUE7OztBQUdPLFNBQVNBLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQTJCO0FBQzlCLE1BQUksQ0FBQ0EsR0FBTCxFQUFVO0FBQ04sV0FBTyxLQUFQO0FBQ0g7O0FBQ0QsU0FBT0MsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxRQUFqQixDQUEwQkMsSUFBMUIsQ0FBK0JKLEdBQS9CLE1BQXdDLGdCQUEvQztBQUNIO0FBRUQ7Ozs7Ozs7QUFLTyxTQUFTSyxRQUFULENBQWtCQyxHQUFsQixFQUF3QztBQUMzQyxTQUFPLENBQUMsT0FBUUEsR0FBUixLQUFpQixRQUFqQixJQUE2QixPQUFRQSxHQUFSLEtBQWlCLFFBQS9DLEtBQTREQSxHQUFHLEtBQUssRUFBcEUsSUFBMEUsQ0FBQ0MsS0FBSyxDQUFDRCxHQUFELENBQXZGO0FBQ0g7QUFFRDs7Ozs7OztBQUtPLFNBQVNFLFFBQVQsQ0FBa0JGLEdBQWxCLEVBQTRCO0FBQy9CLFNBQU9BLEdBQUcsSUFBSSxRQUFPQSxHQUFQLE1BQWUsUUFBN0I7QUFDSDtBQUVEOzs7Ozs7O0FBS08sU0FBU0csYUFBVCxDQUF1QkgsR0FBdkIsRUFBMkM7QUFDOUMsU0FBT0EsR0FBRyxLQUFLLElBQVIsSUFBZ0JBLEdBQUcsS0FBSyxFQUEvQjtBQUNIO0FBRUQ7Ozs7Ozs7QUFLTyxTQUFTSSxrQkFBVCxDQUE0QkosR0FBNUIsRUFBZ0Q7QUFDbkQsTUFBSUEsR0FBRyxLQUFLLElBQVosRUFBa0I7QUFDZCxXQUFPLElBQVA7QUFDSDs7QUFDRCxTQUFPRyxhQUFhLENBQUMsa0JBQUtILEdBQUwsQ0FBRCxDQUFwQjtBQUNIO0FBRUQ7Ozs7Ozs7QUFLTyxTQUFTSyxVQUFULENBQW9CTCxHQUFwQixFQUE4QjtBQUNqQyxTQUFPQSxHQUFHLElBQUlMLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsUUFBakIsQ0FBMEJDLElBQTFCLENBQStCRSxHQUEvQixLQUF1QyxtQkFBckQ7QUFDSDtBQUVEOzs7Ozs7O0FBS08sU0FBU00sUUFBVCxDQUFrQk4sR0FBbEIsRUFBNEI7QUFDL0IsU0FBTyxPQUFPQSxHQUFQLElBQWMsUUFBZCxJQUEwQkEsR0FBRyxZQUFZTyxNQUFoRDtBQUNIO0FBRUQ7Ozs7Ozs7QUFLTyxTQUFTQyxTQUFULENBQW1CUixHQUFuQixFQUFnQztBQUNuQyxTQUFPLGdCQUFnQlMsSUFBaEIsQ0FBcUJULEdBQXJCLENBQVA7QUFDSDtBQUVEOzs7Ozs7O0FBS08sU0FBU1UsV0FBVCxDQUFxQlYsR0FBckIsRUFBK0I7QUFDbEMsU0FBT0EsR0FBRyxLQUFLVyxTQUFSLElBQXFCLE9BQVFYLEdBQVIsS0FBaUIsV0FBN0M7QUFDSDtBQUVEOzs7Ozs7O0FBS08sU0FBU1ksT0FBVCxDQUFpQlosR0FBakIsRUFBOEI7QUFDakMsU0FBT0EsR0FBRyxJQUFJQSxHQUFHLENBQUNhLFdBQUosT0FBc0JiLEdBQXBDO0FBQ0g7QUFFRDs7Ozs7OztBQUtPLFNBQVNjLE9BQVQsQ0FBaUJkLEdBQWpCLEVBQThCO0FBQ2pDLFNBQU9BLEdBQUcsSUFBSUEsR0FBRyxDQUFDZSxXQUFKLE9BQXNCZixHQUFwQztBQUNIO0FBRUQ7Ozs7Ozs7QUFLTyxTQUFTZ0IsTUFBVCxDQUFnQmhCLEdBQWhCLEVBQTBCO0FBQzdCLFNBQU9BLEdBQUcsSUFBSUwsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxRQUFqQixDQUEwQkMsSUFBMUIsQ0FBK0JFLEdBQS9CLE1BQXdDLGVBQS9DLElBQWtFLENBQUNDLEtBQUssQ0FBQ0QsR0FBRCxDQUEvRTtBQUNIO0FBRUQ7Ozs7Ozs7QUFLTyxTQUFTaUIsT0FBVCxDQUFpQmpCLEdBQWpCLEVBQTJCO0FBQzlCLFNBQU9BLEdBQUcsSUFBSUEsR0FBRyxZQUFZa0IsS0FBN0I7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRyaW0gfSBmcm9tIFwiLi9zdHJpbmdcIlxyXG5cclxuLyoqXHJcbiAqIOWIpOaWrW9iauaYr+WQpuS4uuaVsOe7hFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXkob2JqOiBhbnkpIHtcclxuICAgIGlmICghb2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09IFwiW29iamVjdCBBcnJheV1cIlxyXG59XHJcblxyXG4vKipcclxuICAqIOWIpOaWrXZhbOaYr+WQpuS4uuaVsOWtl1xyXG4gICogQHBhcmFtIHZhbCDopoHliKTmlq3nmoTlgLxcclxuICAqIEByZXR1cm5zICDliKTmlq3nu5PmnpxcclxuICAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIodmFsOiBudW1iZXIgfCBzdHJpbmcpIHtcclxuICAgIHJldHVybiAodHlwZW9mICh2YWwpID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgKHZhbCkgPT09ICdzdHJpbmcnKSAmJiB2YWwgIT09ICcnICYmICFpc05hTih2YWwgYXMgYW55KVxyXG59XHJcblxyXG4vKipcclxuICog5Yik5pat5oyH5a6a5YC85piv5ZCm5Li65LiA5Liq5a+56LGhXHJcbiAqIEBwYXJhbSAgdmFsIOimgeWIpOaWreeahOWAvFxyXG4gKiBAcmV0dXJucyAg5Yik5pat57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QodmFsOiBhbnkpIHtcclxuICAgIHJldHVybiB2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCdcclxufVxyXG5cclxuLyoqXHJcbiog5Yik5pat5oyH5a6a5YC85Li6bnVsbOaIluS4uuepuuWtl+espuS4slxyXG4qIEBwYXJhbSAgdmFsIOimgeWIpOaWreeahOWAvFxyXG4qIEByZXR1cm5zIOWIpOaWree7k+aenFxyXG4qL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNOdWxsT3JFbXB0eSh2YWw6IG51bGwgfCBzdHJpbmcpIHtcclxuICAgIHJldHVybiB2YWwgPT09IG51bGwgfHwgdmFsID09PSBcIlwiXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq3mjIflrprlgLzkuLpudWxs77yM5oiW5Li656m65a2X56ym5Liy77yM5oiW5Li656m655m95a2X56ym5LiyXHJcbiAqIEBwYXJhbSAgdmFsIOimgeWIpOaWreeahOWAvFxyXG4gKiBAcmV0dXJucyDliKTmlq3nu5PmnpxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc051bGxPcldoaXRlU3BhY2UodmFsOiBudWxsIHwgc3RyaW5nKSB7XHJcbiAgICBpZiAodmFsID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIHJldHVybiBpc051bGxPckVtcHR5KHRyaW0odmFsKSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreaMh+WumuWAvOaYr+WQpuS4umZ1bmN0aW9uXHJcbiAqIEBwYXJhbSAgdmFsIOimgeWIpOaWreeahOWAvFxyXG4gKiBAcmV0dXJucyDliKTmlq3nu5PmnpxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbDogYW55KSB7XHJcbiAgICByZXR1cm4gdmFsICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpID09ICdbb2JqZWN0IEZ1bmN0aW9uXSdcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreaMh+WumuWAvOaYr+WQpuS4ulN0cmluZ1xyXG4gKiBAcGFyYW0gIHZhbCDopoHliKTmlq3nmoTlgLxcclxuICogQHJldHVybnMg5Yik5pat57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcodmFsOiBhbnkpIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsID09ICdzdHJpbmcnIHx8IHZhbCBpbnN0YW5jZW9mIFN0cmluZ1xyXG59XHJcblxyXG4vKipcclxuICog5Yik5pat5oyH5a6a5a2X56ym5Liy5piv5ZCm5Li6XCJ0cnVlXCLmiJZcImZhbHNlXCJcclxuICogQHBhcmFtICB2YWwg6KaB5Yik5pat55qE5YC8XHJcbiAqIEByZXR1cm5zIOWIpOaWree7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQm9vbGVhbih2YWw6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIC9edHJ1ZXxmYWxzZSQvaS50ZXN0KHZhbClcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreaMh+WumuWAvOaYr+WQpuS4unVuZGVmaW5lZFxyXG4gKiBAcGFyYW0gIHZhbCDopoHliKTmlq3nmoTlgLxcclxuICogQHJldHVybnMg5Yik5pat57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsOiBhbnkpIHtcclxuICAgIHJldHVybiB2YWwgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgKHZhbCkgPT09IFwidW5kZWZpbmVkXCJcclxufVxyXG5cclxuLyoqXHJcbiAqIOaMh+WumuWAvOaYr+WQpuWFqOmDqOS4uuWkp+WGmVxyXG4gKiBAcGFyYW0gIHZhbCDopoHliKTmlq3nmoTlgLxcclxuICogQHJldHVybnMg5Yik5pat57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNVcHBlcih2YWw6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHZhbCAmJiB2YWwudG9VcHBlckNhc2UoKSA9PT0gdmFsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmjIflrprlgLzmmK/lkKblhajpg6jkuLrlsI/lhplcclxuICogQHBhcmFtICB2YWwg6KaB5Yik5pat55qE5YC8XHJcbiAqIEByZXR1cm5zIOWIpOaWree7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTG93ZXIodmFsOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB2YWwgJiYgdmFsLnRvTG93ZXJDYXNlKCkgPT09IHZhbFxyXG59XHJcblxyXG4vKipcclxuICog5oyH5a6a5YC85piv5ZCm5Li6RGF0ZeWvueixoVxyXG4gKiBAcGFyYW0gdmFsIOimgeWIpOaWreeahOWAvFxyXG4gKiBAcmV0dXJucyDliKTmlq3nu5PmnpxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0RhdGUodmFsOiBhbnkpIHtcclxuICAgIHJldHVybiB2YWwgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkgPT09IFwiW29iamVjdCBEYXRlXVwiICYmICFpc05hTih2YWwpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmjIflrprlgLzmmK/lkKbkuLpFcnJvcuWvueixoVxyXG4gKiBAcGFyYW0gdmFsIOimgeWIpOaWreeahOWAvFxyXG4gKiBAcmV0dXJucyDliKTmlq3nu5PmnpxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Vycm9yKHZhbDogYW55KSB7XHJcbiAgICByZXR1cm4gdmFsICYmIHZhbCBpbnN0YW5jZW9mIEVycm9yXHJcbn0iXX0=